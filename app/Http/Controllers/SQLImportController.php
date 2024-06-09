<?php

namespace App\Http\Controllers;

use App\Models\ImportDB;
use App\Models\Location;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Response;

class SQLImportController extends Controller
{
    public function index()
    {
        return Inertia::render('SQLImport/Index');
    }

    public function run_sql_code(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'sql_query' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => array('message' => 'SQL code is required.')], 500);
        }
        $sql_code = $request->input('sql_query');
        $result = $this->db_connection($sql_code);
        return $result;
    }

    public function db_connection($sql_code)
    {
        $db = ImportDB::first();
        if ($db) {
            try {
                config([
                    'database.connections.import' => [
                        'driver' => 'mysql',
                        'host' => $db->host,
                        'port' => $db->port,
                        'database' => $db->database,
                        'username' => $db->username,
                        'password' => $db->password,
                        'charset' => 'utf8mb4',
                        'collation' => 'utf8mb4_unicode_ci',
                        'prefix' => '',
                        'strict' => true,
                        'engine' => null,
                    ]
                ]);
                DB::purge('import');
                DB::reconnect('import');
                $connected = DB::connection('import')->getPdo() !== null;
                if ($connected) {
                    $data = $this->executeQuery(DB::connection('import'), $sql_code);
                    if (is_array($data)) {
                        return response()->json(['data' => $data], 200);
                    }
                    if ($data->getStatusCode() == 500) {
                        return $data;
                    }
                }
            } catch (\Exception $e) {
                return response()->json(['error' => ['message' => $e->getMessage()]], 500);
            }
        } else {
            return response()->json(['error' => ['message' => 'No database connection found.']], 500);
        }
    }

    private function executeQuery($connection, $sql)
    {
        try {
            return $connection->select($sql);
        } catch (\Exception $e) {
            return response()->json(['error' => ['message' => $e->getMessage()]], 500);
        }
    }

    public function store(Request $request)
    {
        if (is_array($request->data)) {
            $data = $request->data;
            foreach ($data as $item) {
                $existingLoc = Location::where('loc_id', $item['LOCID'])->first();
                if (!$existingLoc) {
                    Location::create([
                        'loc_id' => $item['LOCID'],
                        'wntd' => $item['WNTD'],
                        'imsi' => $item['IMSI'],
                        'version' => $item['VERSION'],
                        'avc' => $item['AVC'],
                        'bw_profile' => $item['BW_PROFILE'],
                        'lon' => $item['LON'],
                        'lat' => $item['LAT'],
                        'site_name' => $item['SITE_NAME'],
                        'home_cell' => $item['HOME_CELL'],
                        'home_pci' => $item['HOME_PCI'],
                        'traffic_profile' => $item['TRAFFIC_PROFILE'],
                    ]);
                } else {
                    return response()->json([
                        'error' => array(
                            'message' => 'Site with LOCID ' . $item['LOCID'] . ' already exists',
                        )
                    ], 500);
                }
            }
            return response()->json([
                'success' => array(
                    'message' => 'Data imported successfully.',
                )
            ], 200);
        }

    }
}
