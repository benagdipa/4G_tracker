<?php
namespace App\Http\Controllers;

use App\Models\ImportDB;
use App\Models\Location;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
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
                    $output=$this->get_db_data($command,$password);
                    $output3=$this->get_db_data($command3,$password);
                
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
					$command = 'java -jar '.$filePath.' --server '. $db->host.':'. $db->port .' --catalog '.$db->catalog.'  --schema '. $db->database.'  --user '.$db->username.' --password --execute " '.$sql_code .' limit 100" --insecure';
					$command3 = 'java -jar '.$filePath.' --server '. $db->host.':'. $db->port .' --catalog '.$db->catalog.'  --schema '. $db->database.' --user '.$db->username.' --password --execute "SELECT column_name FROM information_schema.columns WHERE table_schema = \'' . $db->database . '\' AND table_name = \'' . $table_name . '\'" --insecure';
					
					// Log the query using Laravel's Log facade
					Log::info('Executing SQL Query for starburst DB:', ['command' => $command3]);
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
}
