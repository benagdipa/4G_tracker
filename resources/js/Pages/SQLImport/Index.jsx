import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { Button, Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState, useMemo, useRef } from "react";
import { Table2, ChevronRight, ChevronDown, Play, Download } from "lucide-react";
import { AgGridReact } from "ag-grid-react";
import DbTableColumns from "@/Components/Wntd/DbTableColumns";

// Import AceEditor components
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sql"; // For SQL syntax
import "ace-builds/src-noconflict/theme-twilight"; // For a dark theme (you can change this)
import "ace-builds/src-noconflict/ext-language_tools"; // For autocompletion

export default function Index({
  auth,
  tablesNames,
  columnsName,
  dbtype
}) {
  const { props } = usePage();
  const [query, setQuery] = useState();
  const [tablesList, setTablesList] = useState([]);
  const [filteredTables, setFilteredTables] = useState([]);  // State for filtered tables
  const [columnsList, setColumnsList] = useState([]);
  const [selectedTableName, setSelectedTableName] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [importErrorMsg, setImportErrorMsg] = useState("");
  const [importSuccessMsg, setImportSuccessMsg] = useState("");

  // State to control visibility of the table panel
  const [isTablePanelVisible, setIsTablePanelVisible] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");  // State for the search term

  const gridApiRef = useRef(null); // Reference to the grid API

  const getSampleDAta = (data) => {
    if (typeof data === "string") {
      let newTableName = data.replace("Password: ", "");
      const dataArray = newTableName.split("\n");
      let tempObj = [];
      dataArray.forEach((itm) => {
        tempObj.push(itm.split(/,(?=\")/));
      });
      return tempObj;
    }
  };

  useEffect(() => {
    let customTablesNames = [];
    let customColumnsName = [];
    if (typeof tablesNames === "string" || typeof columnsName === "string") {
      customTablesNames = getSampleDAta(tablesNames);
      customColumnsName = getSampleDAta(columnsName);

      let tableColumns = {};
      customColumnsName.forEach((row) => {
        const [table, column, data_type] = row;
        if (table) {
          if (!tableColumns[table]) {
            tableColumns[table] = [];
          }
          tableColumns[table].push({ column_name: column, data_type: data_type });
        }
      });

      setColumnsList(tableColumns);
      setTablesList(customTablesNames);
    } else {
      setTablesList(tablesNames);
      setColumnsList(columnsName);
    }
  }, [tablesNames, columnsName]);

  // Filter tables based on search term
  useEffect(() => {
    if (searchTerm) {
      setFilteredTables(
        tablesList.filter((table) =>
          table.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredTables(tablesList); // If no search term, show all tables
    }
  }, [searchTerm, tablesList]);

  const onSubmit = async (e) => {
    e && e.preventDefault();
    try {
      setIsLoading(true);
      // Regular expression to capture the table name after the FROM clause
      let tableNameMatch = query?.query.match(/FROM\s+([a-zA-Z0-9_$#@.\[\]`]+)/i);

      let tname = null;  // Initialize tname variable to null

      // Check if a table name is found in the query, otherwise use fallback from query.tablename
      if (tableNameMatch && tableNameMatch[1]) {
        tname = tableNameMatch[1];  // Extract the table name from the match
      } else {
        tname = query?.tablename;  // Fallback to the predefined table name in query.tablename
      }

      const res = await axios.post(route("sql.run"), { sql_query: query?.query, id: props?.ziggy?.location.split('/').pop(), table_name: tname });
      if (typeof res?.data?.data === 'string') {
        let columnData = getSampleDAta(res?.data?.data);
        let columnNameData = getSampleDAta(res?.data?.data_column);

        let tempObj = {};
        let mainArray = [];
        columnData.forEach((itm) => {
          itm.forEach((value, index) => {
            if (value) {
              if (columnNameData[index]) {
                if (columnNameData[index][0]) {
                  tempObj[removeQuote(columnNameData[index][0])] = removeQuote(value);
                }
              }
            }
          });
          mainArray.push(tempObj);
          tempObj = {};
        });
        mainArray = mainArray.filter((itm) => Object.keys(itm).length !== 0);
        setResponse(mainArray);
      } else {
        setResponse(res?.data?.data);
      }
      setErrorMsg("");
    } catch (err) {
      setErrorMsg(err?.response?.data?.error.message);
      setResponse([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isTablePanelVisible) {
      onSubmit();
    }
  }, [isTablePanelVisible]);

  const handleImportBtn = async () => {
    if (response?.length > 0) {
      try {
        setIsImporting(true);
        const res = await axios.post(route("sql.store"), { data: response });
        setImportSuccessMsg(res?.data?.success.message);
      } catch (err) {
        setImportErrorMsg(err?.response?.data?.error.message);
      } finally {
        setIsImporting(false);
      }
    }
  };

  const defaultColDef = useMemo(() => ({
    filter: true,
    sortable: true,
    resizable: true
  }));

  const onHandleRunSql = (e, tablename) => {
    e.stopPropagation();
    let tempSelectedTableName = {};
    tempSelectedTableName[tablename] = true;
    setSelectedTableName(tempSelectedTableName);
    setQuery({ tablename: removeQuote(tablename), query: `select * from ${removeQuote(tablename)}` });
  };

  const onHandleSelectTable = (e, tablename) => {
    e.stopPropagation();
    const tempSelectedTableName = { ...selectedTableName };
    if (tempSelectedTableName[tablename]) {
      tempSelectedTableName[tablename] = !tempSelectedTableName[tablename];
    } else {
      tempSelectedTableName[tablename] = true;
    }
    setSelectedTableName(tempSelectedTableName);
  };

  const removeQuote = (data) => {
    if (data.includes('"')) {
      return data.replace(/"/g, '');
    }
    return data;
  };

  const ShowResponse = ({ data }) => {
    if (data?.length > 0) {
      const allKeys = Array.from(
        new Set(data.flatMap((item) => Object.keys(item)))
      );
      const changedData = allKeys.map((itm, index) => {
        return { field: itm, headerName: itm };
      });

      return (
        <div className="mt-8">
          <div
            className="ag-theme-quartz w-full"
            style={{ height: data?.length > 5 ? 500 : 200 }}
          >
            <AgGridReact
              ref={gridApiRef}
              rowData={data}
              columnDefs={changedData}
              pagination={true}
              paginationPageSize={10} // Pagination for the grid
              defaultColDef={defaultColDef}
            />
          </div>
          <div className="flex justify-between mt-6 mb-8">
            <div className="">
              <InputError
                message={importErrorMsg}
                className="mt-0 font-medium text-red-500"
              />
              {importSuccessMsg && (
                <Typography className="font-medium text-green-500">
                  {importSuccessMsg}
                  <Link
                    href={route("wireless.sites.index")}
                    className="ps-1 underline"
                  >
                    Click here to check
                  </Link>
                </Typography>
              )}
            </div>
            <div className="flex gap-2">
              {/* Export Button */}
              <Button
                variant="gradient"
                size="sm"
                className="capitalize"
                onClick={() => gridApiRef.current.api.exportDataAsCsv()}
              >
                Export
              </Button>
            </div>
          </div>
        </div>
      );
    }
  };

  const handleDragStart = (e, table) => {
    e.dataTransfer.setData("text/plain", table);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const table = e.dataTransfer.getData("text/plain");
    setQuery({ tablename: removeQuote(table), query: `SELECT * FROM ${removeQuote(table)}` });
  };

  return (
    <Authenticated user={auth?.user}>
      <Head title="Wireless Sites" />
      
      {/* Button to toggle table visibility */}
      <div className="flex justify-start mb-2">
        <Button
          size="sm"
          variant="outlined"
          color="blue"
          onClick={() => setIsTablePanelVisible(!isTablePanelVisible)}
        >
          {isTablePanelVisible ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )}
        </Button>
      </div>

      {/* Main Content Section */}
      <div className="flex w-full mt-4">
        {/* Table Panel */}
        <div
          className={`transition-all duration-300 ease-in-out ${isTablePanelVisible ? "block" : "hidden"}`}
        >
          <div className="bg-white shadow rounded py-0 px-5">
            <h1 className="mb-2 text-xl font-bold">Tables</h1>
            
            {/* Search Input */}
            <div className="mb-3">
              <input
                type="text"
                placeholder="Search tables..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="">
              <ul>
                {filteredTables.map((itm, index) => {
                  let whichOne = dbtype === 'starburst' ? itm[0] : itm;

                  return (
                    <div key={itm}>
                      {whichOne && (
                        <div>
                          <div
                            className="font-medium text-sm flex justify-between items-center mb-1 cursor-pointer text-gray-700 dark:text-gray-300 gap-2"
                            onClick={(e) => onHandleSelectTable(e, typeof itm === 'string' ? itm : itm[0])}
                            draggable
                            onDragStart={(e) => handleDragStart(e, typeof itm === 'string' ? itm : itm[0])}
                          >
                            <div className="flex items-center gap-2">
                              {selectedTableName[typeof itm === 'string' ? itm : itm[0]] ? (
                                <ChevronDown size="16" />
                              ) : (
                                <ChevronRight size="16" />
                              )}
                              <Table2 size="16" />
                              {removeQuote(typeof itm === 'string' ? itm : itm[0])}
                            </div>
                            <div title="play">
                              <Play
                                size={12}
                                fill="#000"
                                onClick={(e) => onHandleRunSql(e, typeof itm === 'string' ? itm : itm[0])}
                              />
                            </div>
                          </div>
                          {selectedTableName[typeof itm === 'string' ? itm : itm[0]] && (
                            <DbTableColumns columnsByTable={columnsList[typeof itm === 'string' ? itm : itm[0]]} />
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* SQL Code Section with AceEditor */}
        <div className={`transition-all duration-300 ease-in-out ${isTablePanelVisible ? "w-[70%]" : "w-full"} filter-wrapper px-4`} onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
          <Card className="w-full px-6 py-4">
            <InputLabel value={"SQL Code"} className="mb-2" />
            {/* AceEditor for SQL code */}
            <AceEditor
              mode="sql"
              theme="twilight"
              name="sql_query_editor"
              value={query?.query}
              onChange={(newValue) => setQuery({ tablename: removeQuote(newValue.split(' ').pop()), query: newValue })}
              width="100%"
              height="200px"
              fontSize={14}
              showPrintMargin={false}
              showGutter={true}
              highlightActiveLine={true}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
              }}
            />

            <div className="flex justify-between">
              <div>
                <InputError
                  message={errorMsg}
                  className="mt-0 font-medium text-red-500"
                />
              </div>
              <Button
                className="mt-4 block capitalize"
                onClick={onSubmit}
                disabled={isLoading}
              >
                Run
              </Button>
            </div>
          </Card>
          <ShowResponse data={response} />
        </div>
      </div>
    </Authenticated>
  );
}
