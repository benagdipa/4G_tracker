<?php
namespace App\Http\Controllers;

use App\Models\ImportDB;
use App\Models\Location;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cache;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Response;
use PDO;
class SQLImportController extends Controller
{
    public function index($id)
    {

        $filePath = storage_path('/trino/trino.jar');

  
        $db = ImportDB::find($id);
        try {
            if($db->dbtype=='starburst'){
                $command = 'java -jar '.$filePath.' --server '. $db->host.':'. $db->port .' --catalog '.$db->catalog.'  --schema '. $db->database.'  --user '.$db->username.' --password --execute "show tables" --insecure';
                $command3 = 'java -jar '.$filePath.' --server '. $db->host.':'. $db->port .' --catalog '.$db->catalog.'  --schema '. $db->database.'  --user '.$db->username.' --password --execute "SELECT table_name, column_name, data_type FROM information_schema.columns WHERE table_schema = \'' . $db->database . '\'" --insecure';
          
                $password =  $db->password;
                				
				$cacheKeyTables = 'db_tables_' . $db->host . ':' . $db->port . '_' . $db->catalog . '_' . $db->username;
				$cacheKeyColumns = 'db_columns_' . $db->host . ':' . $db->port . '_' . $db->catalog . '_' . $db->username;

				// Check if the cache exists and if the cached data is not empty
				/*if (Cache::has($cacheKeyTables) && !empty(Cache::get($cacheKeyTables))) {
					// Cache exists and has data, so retrieve it
					$output = Cache::get($cacheKeyTables);
				} else {
					// Cache doesn't exist or is empty, so fetch new data
					$output = $this->get_db_data($command, $password);
					Cache::forever($cacheKeyTables, $output); // Cache the result forever
				}

				// Check for columns in cache
				if (Cache::has($cacheKeyColumns) && !empty(Cache::get($cacheKeyColumns))) {
					// Cache exists and has data, so retrieve it
					$output3 = Cache::get($cacheKeyColumns);
				} else {
					// Cache doesn't exist or is empty, so fetch new data
					$output3 = $this->get_db_data($command3, $password);
					Cache::forever($cacheKeyColumns, $output3); // Cache the result forever
				}*/
                $output = $this->get_db_data($command, $password);
				$output3 = $this->get_db_data($command3, $password);
                return Inertia::render('SQLImport/Index', [
                    'tablesNames' => $output,
                    'columnsName'=>$output3,
                    'dbtype'=>'starburst'
                ]);

            }        
            else{
            config([
                'database.connections.import' => [
                    'driver' => $db->dbtype,
                    'host' => $db->host,
                    'port' => $db->port,
                    'database' => $db->database,
                    'username' => $db->username,
                    'password' => $db->password,
                    'charset' => $db->dbtype == 'mysql' ? 'utf8mb4' : 'utf8',
                    'collation' => $db->dbtype == 'mysql' ? 'utf8mb4_unicode_ci' : '',
                    'prefix' => '',
                    'strict' => true,
                    'engine' => null,
                ]
            ]);
        
            // Set the new connection as default
            DB::setDefaultConnection('import');
        
            $tablesNames = [];
            $columnsByTable = [];
        
            if ($db->dbtype == 'mysql') {
                $tables = DB::select('SHOW TABLES');
				// Get the database name dynamically
				$databaseName = DB::connection()->getDatabaseName();
				$tablesNames = [];
				$columnsByTable = [];

				// Iterate over each table and fetch its columns
				foreach ($tables as $table) {
					// Access the table name dynamically using the property 'Tables_in_<database_name>'
					$tableName = $table->{'Tables_in_' . $databaseName};

					// Add table name to the array
					$tablesNames[] = $tableName;

					// Fetch columns of the table, making sure to escape the table name with backticks
					$columns = DB::select("SHOW COLUMNS FROM `{$tableName}`");
					//dd($columns);
					// Store the columns by table
					// Map columns to match the expected keys: 'column_name' and 'data_type'
					$columns = array_map(function ($column) {
						return [
							'column_name' => $column->Field,  // map 'Field' to 'column_name'
							'data_type' => $column->Type,     // map 'Type' to 'data_type'
						];
					}, $columns);

					// Store the columns by table
					$columnsByTable[$tableName] = $columns;
				}
            } elseif ($db->dbtype == 'pgsql') {
                // Fetch all table names
                $tables = DB::select("SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname = 'public'");
        
                // Iterate over each table and fetch its columns
                foreach ($tables as $table) {
                    $tableName = $table->tablename;
                    $tablesNames[] = $tableName;
        
                    // Fetch columns of the table
                    $columns = DB::select("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = ?", [$tableName]);
                    $columnsByTable[$tableName] = $columns;
                }
            } else {
                throw new Exception("Unsupported database type: " . $db->dbtype);
            }
        }
        } catch (\Exception $e) {
            return response()->json(['error' => ['message' => $e->getMessage()]], 500);
        }
       

        return Inertia::render('SQLImport/Index', [
            'tablesNames' => $tablesNames,
            'columnsName' => $columnsByTable,
            'dbtype'=>'others'
        ]);     
}

    public function run_sql_code(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'sql_query' => 'required',
            'table_name'=>'nullable',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => array('message' => 'SQL code is required.')], 500);
        }
		
        $sql_code = $request->input('sql_query');
        $result = $this->db_connection($request->input('id'),$sql_code,$request->input('table_name'));
      
        return $result;
    }

    public function db_connection($id,$sql_code,$table_name)
    {

        $filePath = storage_path('/trino/trino.jar');
        $db = ImportDB::find($id);
      
        if ($db) {

            try {
               if($db->dbtype == 'starburst'){
					// Exploding the table name to separate schema and table
					$table_parts = explode('.', $table_name);
					// Get the table name only (last part of the array)
					$table_name_only = end($table_parts);
					
					// Check if the query already contains 'LIMIT' clause (case-insensitive)
					if (stripos($sql_code, "LIMIT") === false) {
						// Add LIMIT to the query
						$sql_code .= " LIMIT 5000";  // You can change the number 10 to whatever limit you need
					}
					if(strpos($sql_code, '*')===FALSE) 
					{
						// Check if the query contains a SELECT statement and extract column names
						preg_match('/SELECT\s+(.*?)\s+FROM/i', $sql_code, $matches);						

						if (isset($matches[1])) {
							// Extract the column names from the SELECT part
							$columns = array_map('trim', explode(',', $matches[1]));

							// Get the column names for the IN(...) clause
							$column_str = implode("','", $columns);

							// Add the column_name IN(...) clause
							$columns_clause = "AND column_name IN('".$column_str."')";
						}
						
						
					}
					else
					{
						$columns_clause = "";
					}
					
															
					$command = 'java -jar '.$filePath.' --server '. $db->host.':'. $db->port .' --catalog '.$db->catalog.'  --schema '. $db->database.'  --user '.$db->username.' --password --execute " '.$sql_code .'" --insecure';
					$command3 = 'java -jar '.$filePath.' --server '. $db->host.':'. $db->port .' --catalog '.$db->catalog.'  --schema '. $db->database.' --user '.$db->username.' --password --execute "SELECT column_name FROM information_schema.columns WHERE table_schema = \'' . $db->database . '\' AND table_name = \'' . $table_name_only . '\' '.$columns_clause.'" --insecure';
					
					// Log the query using Laravel's Log facade
					Log::info('command1:', ['command' => $command]);
					Log::info('command2', ['command' => $command3]);
					$password = $db->password;
					
					$output = $this->get_db_data($command, $password);
					$output3 = $this->get_db_data($command3, $password);

					// Check if $output3 is blank and set a default empty array if so
					if (empty($output3)) {
						$output3 = [[]];  // Ensure it's an array with a blank structure
					}

					return response()->json(['data' => $output, 'data_column' => $output3], 200);
				}
                else{

               
                config([
                    'database.connections.import' => [
                        'driver' => $db->dbtype,
                        'host' => $db->host,
                        'port' => $db->port,
                        'database' => $db->database,
                        'username' => $db->username,
                        'password' => $db->password,
                        'charset' => $db->dbtype=='mysql'?'utf8mb4':'utf8',
                        'collation' =>$db->dbtype=='mysql'? 'utf8mb4_unicode_ci':'',
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
                        return response()->json(['data' => $data,'data_column' => []], 200);
                    }
                    if ($data->getStatusCode() == 500) {
                        return $data;
                    }
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
                $existingLoc = Location::where('loc_id', $item['loc_id']?$item['loc_id']:$item['LOCID'])->first();
                if (!$existingLoc) {
                    Location::create([
                        'loc_id' =>  $item['loc_id']?$item['loc_id']:$item['LOCID'],
                        'wntd' => $item['wntd']?$item['wntd']:$item['WNTD'],
                        'imsi' => $item['imsi']?$item['imsi']:$item['IMSI'],
                        'version' => $item['version']?$item['version']:$item['VERSION'],
                        'avc' => $item['avc']?$item['avc']:$item['AVC'],
                        'bw_profile' => $item['bw_profile']?$item['bw_profile']:$item['BW_PROFILE'],
                        'lon' => $item['lon']?$item['lon']:$item['LON'],
                        'lat' => $item['lat']?$item['lat']:$item['LAT'],
                        'site_name' => $item['site_name']?$item['site_name']:$item['SITE_NAME'],
                        'home_cell' =>$item['home_cell']?$item['home_cell']:$item['HOME_CELL'],
                        'home_pci' => $item['home_pci']?$item['home_pci']:$item['HOME_PCI'],
                        'traffic_profile' => $item['traffic_profile']?$item['traffic_profile']:$item['TRAFFIC_PROFILE'],
                    ]);
                } else {
                    $locId=$item['loc_id']?$item['loc_id']:$item['LOCID'];
                    return response()->json([
                        'error' => array(
                            'message' => 'Site with LOCID ' .  $locId . ' already exists',
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

    public function get_db_data($command,$password){
        $pipes = [];
        $descriptorspec = [
            0 => ['pipe', 'r'],  // stdin (input)
            1 => ['pipe', 'w'],  // stdout (output)
            2 => ['pipe', 'w'],  // stderr (error)
         
        ];
        $process = proc_open($command, $descriptorspec, $pipes);
        
        if (is_resource($process)) {
            // Write the password to the stdin
            fwrite($pipes[0], $password . PHP_EOL);
            fclose($pipes[0]);
     
        
            // Read the output
            $output = stream_get_contents($pipes[1]);
        
            fclose($pipes[1]);
        
            // Read the error (if any)
            $error = stream_get_contents($pipes[2]);
            fclose($pipes[2]);
        
            // Close the process
            $return_value = proc_close($process);
        
            // Print the output
    
           
        }  
        return  $output;
    }
	public function get_db_data_new($command, $password)
	{
		// Initialize the Symfony Process
		$process = new Process([$command]);

		// Set up environment variables if needed (e.g., setting up password via stdin)
		$process->setInput($password . PHP_EOL);

		// Execute the process and handle any exceptions
		try {
			// Run the process and get the output
			$process->mustRun();
			$output = $process->getOutput();
			
			// Optionally, handle stderr if you want to capture any error output
			$errorOutput = $process->getErrorOutput();

			// If there is any error output, you can log it or handle it here
			if (!empty($errorOutput)) {
				Log::error("Command Error: $errorOutput");
			}

			return $output;
		} catch (ProcessFailedException $exception) {
			// Handle the exception if the process fails
			Log::error('Command failed: ' . $exception->getMessage());
			return $exception->getMessage();
		}
	}
}
