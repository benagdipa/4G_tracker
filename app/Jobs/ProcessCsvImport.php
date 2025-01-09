<?php

namespace App\Jobs;

use App\Models\Location;
use App\Models\LocationTracking;
use Illuminate\Support\Facades\Auth;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessCsvImport implements ShouldQueue
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */

    protected $input, $information;

    public function __construct($input, $information)
    {
        $this->input = $input;
        $this->information = $information;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        foreach ($this->information as $row) {
			// Check if the Location with the given loc_id exists
			$existingLoc = Location::where('loc_id', $row[$this->input['loc_id']])->first();

			if ($existingLoc) {
				// If found, update the existing record
				$location = $existingLoc->update([
					'wntd' => $row[$this->input['wntd']],
					'imsi' => $row[$this->input['imsi']],
					'version' => $row[$this->input['version']],
					'avc' => $row[$this->input['avc']],
					'bw_profile' => $row[$this->input['bw_profile']],
					'lon' => $row[$this->input['lon']],
					'lat' => $row[$this->input['lat']],
					'site_name' => $row[$this->input['site_name']],
					'home_cell' => $row[$this->input['home_cell']],
					'home_pci' => $row[$this->input['home_pci']],
					'traffic_profile' => $row[$this->input['traffic_profile']],
				]);
				//$location->id = 
			} 
			else 
			{
				// If not found, create a new record
				$location = Location::create([
					'loc_id' => $row[$this->input['loc_id']],
					'wntd' => $row[$this->input['wntd']],
					'imsi' => $row[$this->input['imsi']],
					'version' => $row[$this->input['version']],
					'avc' => $row[$this->input['avc']],
					'bw_profile' => $row[$this->input['bw_profile']],
					'lon' => $row[$this->input['lon']],
					'lat' => $row[$this->input['lat']],
					'site_name' => $row[$this->input['site_name']],
					'home_cell' => $row[$this->input['home_cell']],
					'home_pci' => $row[$this->input['home_pci']],
					'traffic_profile' => $row[$this->input['traffic_profile']],
				]);
				//$existingLoc = $location->id;
			}
			
			// Loop through all keys in the row and create entries in LocationTracking (excluding main table columns)
			//$existingLocTracking = LocationTracking::where('loc_id', $row[$this->input['loc_id']])->first();

			$static_items = ['loc_id', 'wntd', 'imsi', 'version', 'avc', 'bw_profile', 'lon', 'lat', 'site_name', 'home_cell', 'home_pci', 'traffic_profile'];
			if ($existingLoc) {
				$existingLoc_id = $existingLoc->id;
			}
			else
			{
				$existingLoc_id = $location->id;
			}
				foreach ($row as $key => $item) {
					$keyFormatted = strtolower(str_replace(' ', '_', $key));
					if (in_array($key, $static_items)) {
				
						$trackingItem = $existingLoc_id;
						$trackingItem->{$keyFormatted} = $item;
						$trackingItem->save();
					} else {
					
						
					
						$tracking = LocationTracking::create([
							'site_id' => $existingLoc_id, // Use $existingLoc->id here
							'loc_id' => $row[$this->input['loc_id']],
							'user_id' => Auth::id(),
							'key' => $keyFormatted, // Using the formatted key
							'value' => $item,
						]);
					}
				}
			}

    }
}
