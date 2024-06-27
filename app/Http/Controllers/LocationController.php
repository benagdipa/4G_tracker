<?php

namespace App\Http\Controllers;

use App\Models\AdditionalColumn;
use App\Models\ColumnOption;
use App\Models\Location;
use App\Models\LocationTracking;
use Carbon\Carbon;
use Illuminate\Support\Facades\Bus;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Jobs\ProcessCsvImport;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use League\Csv\Reader;
use Symfony\Component\HttpFoundation\StreamedResponse;

class LocationController extends Controller
{
    public function index(Request $request)
    {
        $order = $request->input('order');
        $order_by = $request->input('order_by') ? $request->input('order_by') : 'loc_id';
        $search_query = $request->input('search');
        $per_page = $request->input('per_page') && strtolower($request->input('per_page')) === 'all' ? PHP_INT_MAX : ($request->input('per_page') ? $request->input('per_page') : 10);

        if ($search_query) {
            $tableName = (new Location())->getTable();
            $columns = \Schema::getColumnListing($tableName);
            $sites = Location::where(function ($query) use ($search_query, $columns) {
                foreach ($columns as $column) {
                    $query->orWhere($column, 'LIKE', '%' . $search_query . '%');
                }
            })->orderBy($order_by, $order ? $order : 'asc')->paginate($per_page);
        } else {
            $sites = Location::orderBy($order_by, $order ? $order : 'asc')->paginate($per_page);
        }
        $hidden_columns = ColumnOption::where('type', 'wntd')->where('key', 'hide')->pluck('value')->first();
        $renamed_columns = ColumnOption::where('type', 'wntd')->where('key', 'rename')->pluck('value')->first();
        $deleted_columns = ColumnOption::where('type', 'wntd')->where('key', 'delete')->pluck('value')->first();
        $arrange_columns = ColumnOption::where('type', 'wntd')->where('key', 'arrange')->pluck('value')->first();
        $additional_columns_keys = AdditionalColumn::where('type', 'wntd')->pluck('key')->toArray();
        $additional_columns = AdditionalColumn::where('type', 'wntd')->get();
        $desiredKeys = array_merge(['remarks', 'start_date', 'end_date', 'solution_type', 'status', 'artifacts'], $additional_columns_keys);
        foreach ($sites as $site) {
            $tracking_data = LocationTracking::where('site_id', $site->id)
                ->whereIn('key', $desiredKeys)
                ->get()
                ->keyBy('key')
                ->toArray();
            foreach ($tracking_data as $key => $value) {
                $site->{$key} = $value['value'];
            }
        }
        if ($request->input('filter_by') && $request->input('value')) {
            $filterBy = $request->input('filter_by');
            $sitesArray = $sites->items();
            $filteredSites = array_filter($sitesArray, function ($site) use ($filterBy, $request) {
                return isset($site->tracking[$filterBy]) &&
                    isset($site->tracking[$filterBy]['value']) &&
                    $site->tracking[$filterBy]['value'] === $request->input('value');
            });
            $sites->setCollection(collect($filteredSites));
        }
        return Inertia::render('WNTD/Index', [
            'sites' => $sites,
            'get_data' => $request->all(),
            'additional_columns' => $additional_columns,
            'hidden_columns' => json_decode($hidden_columns),
            'renamed_columns' => json_decode($renamed_columns),
            'deleted_columns' => json_decode($deleted_columns),
            'arrange_columns' => json_decode($arrange_columns),
        ]);
    }

    public function save_item(Request $request)
    {
        $items = $request->items;
        foreach ($items as $key => $item) {
            $tracking = LocationTracking::create([
                'site_id' => $request->site_id,
                'loc_id' => $request->location_id,
                'user_id' => Auth::id(),
                'key' => $key,
                'value' => $item,
            ]);
        }
        return response()->json([
            'success' => ['message' => 'Changes saved successfully.'],
        ], 200);

    }

    public function save_artifacts(Request $request)
    {
        $paths_array = [];
        if ($request->hasFile('artifacts')) {
            $files = $request->file('artifacts');
            foreach ($files as $file) {
                $name = now()->timestamp . "_{$file->getClientOriginalName()}";
                $path = $file->storeAs('artifacts', $name, 'public');
                $paths_array[] = "/storage/{$path}";
            }
        }
        if (count($paths_array) > 0) {
            $tracking = LocationTracking::create([
                'site_id' => $request->site_id,
                'loc_id' => $request->location_id,
                'user_id' => Auth::id(),
                'key' => $request->field_name,
                'value' => json_encode($paths_array),
            ]);
        }
        return to_route('wireless.sites.index');
    }

    public function import_from_csv(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'import_file' => 'required|file|mimes:csv',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => array('message' => $validator->errors()->first())], 500);
        }
        $file = $request->file('import_file');
        $filePath = $file->storeAs('import', now()->timestamp . "_{$file->getClientOriginalName()}");
        $csv = Reader::createFromPath(storage_path('app/' . $filePath), 'r');
        $csv->setHeaderOffset(0);
        $header = $csv->getHeader();
        return response()->json([
            'filePath' => $filePath,
            'header' => $header
        ], 200);
    }

    public function map_and_save_csv(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'loc_id' => 'required',
            'wntd' => 'required',
            'imsi' => 'required',
            'version' => 'required',
            'avc' => 'required',
            'bw_profile' => 'required',
            'lon' => 'required',
            'lat' => 'required',
            'site_name' => 'required',
            'home_cell' => 'required',
            'home_pci' => 'required',
            'traffic_profile' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => array('message' => $validator->errors()->first())], 500);
        }
        $filePath = $request->input('file_path');
        $input = $request->all();
        $csv = Reader::createFromPath(storage_path('app/' . $filePath), 'r');
        $csv->setHeaderOffset(0);
        $rows = $csv->getRecords();
        $dataFromCsv = [];
        foreach ($rows as $row) {
            $dataFromCsv[] = $row;
        }
        $dataFromCsv = array_chunk($dataFromCsv, 300);
        $batch = Bus::batch([])->dispatch();
        foreach ($dataFromCsv as $index => $dataCsv) {
            foreach ($dataCsv as $data) {
                $information[$index][] = $data;
            }
            $batch->add(new ProcessCsvImport($input, $information[$index]));
        }
        session()->put('batch_site_id', $batch->id);
        return response()->json([
            'success' => ['message' => 'Sites imported successfully.'],
            'batch_id' => $batch->id,
        ], 200);
    }

    public function location_site($id)
    {
        $site = Location::where('loc_id', $id)->first();
        $desiredKeys = ['remarks', 'start_date', 'end_date', 'solution_type', 'status', 'artifacts'];
        $locTrackingData = LocationTracking::where('site_id', $site->id)->whereIn('key', $desiredKeys)->get()->keyBy('key')->toArray();
        $site->tracking = $locTrackingData;

        $trackings = LocationTracking::with('user')->where('loc_id', $id)->get();
        return Inertia::render('WNTD/Show', [
            'site' => $site,
            'trackings' => $trackings
        ]);
    }

    public function export()
    {
        set_time_limit(0);
        ini_set('memory_limit', '-1');
        $csvFileName = 'WNTD_data.csv';
        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="' . $csvFileName . '"',
        ];
        $sites = Location::all();
        $desiredKeys = ['remarks', 'start_date', 'end_date', 'solution_type', 'status', 'artifacts'];
        foreach ($sites as $site) {
            $locTrackingData = LocationTracking::where('site_id', $site->id)
                ->whereIn('key', $desiredKeys)
                ->get()
                ->keyBy('key')
                ->toArray();
            $site->tracking = $locTrackingData;
        }
        $callback = function () use ($sites) {
            $file = fopen('php://output', 'w');
            fputcsv(
                $file,
                array(
                    'LOCID',
                    'WNTD',
                    'IMSI',
                    'VERSION',
                    'AVC',
                    'BW Profile',
                    'Lon',
                    'Lat',
                    'SiteName',
                    'HomeCell',
                    'HomePCI',
                    'TrafficProfile',
                    'Start Date',
                    'End Date',
                    'Solution Type',
                    'Status',
                    'Remarks',
                    'Artifacts'
                )
            );
            foreach ($sites as $row) {
                fputcsv(
                    $file,
                    array(
                        $row['loc_id'],
                        $row['wntd'],
                        $row['imsi'],
                        $row['version'],
                        $row['avc'],
                        $row['bw_profile'],
                        $row['lon'],
                        $row['lat'],
                        $row['site_name'],
                        $row['home_cell'],
                        $row['home_pci'],
                        $row['traffic_profile'],
                        $this->get_tracking_value($row['tracking'], 'start_date'),
                        $this->get_tracking_value($row['tracking'], 'end_date'),
                        $this->get_tracking_value($row['tracking'], 'solution_type'),
                        $this->get_tracking_value($row['tracking'], 'status'),
                        $this->get_tracking_value($row['tracking'], 'remarks'),
                        $this->get_tracking_value($row['tracking'], 'artifacts')
                    )
                );
            }
            fclose($file);
        };
        return new StreamedResponse($callback, 200, $headers);
    }

    public function get_tracking_value($items, $key)
    {
        if (array_key_exists($key, $items)) {
            $item = $items[$key];
            if (isset($item)) {
                if ($key == 'start_date' || $key == 'end_date') {
                    return Carbon::parse($item['value'])->format('d/m/Y');
                }
                return $item['value'];
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    public function destroy($id)
    {
        $location = Location::findOrFail($id);
        $location->delete();
    }
}
