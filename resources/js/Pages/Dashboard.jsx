import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
  FiPlus,
  FiEdit,
  FiTrash,
  FiExternalLink,
  FiBarChart2,
  FiLayers,
  FiWifi,
  FiHome,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Dashboard({ auth }) {
  // Initialize tools from local storage or use default tools
  const [tools, setTools] = useState(() => {
    const savedTools = localStorage.getItem("tools");
    return savedTools
      ? JSON.parse(savedTools)
      : [
          {
            id: 1,
            name: "FWP Opti Tracker",
            description: "Track and manage FWP opti.",
            url: "https://fwpm.nwas.nbnco.net.au/dashboard/wireless-sites",
            icon: "FiBarChart2",
          },
          {
            id: 2,
            name: "WNTD Overlay Tool",
            description: "WNTD Reparenting and Load Balancing Tool.",
            url: "https://fwpm.nwas.nbnco.net.au/overlay/",
            icon: "FiLayers",
          },
          {
            id: 3,
            name: "UE Signaling Trace",
            description: "Visualise LTE signaling traces.",
            url: "https://fwpm.nwas.nbnco.net.au/signaling/",
            icon: "FiWifi",
          },
          {
            id: 4,
            name: "HST User Performance",
            description: "HST Performance Summary Dashboard.",
            url: "https://biatableau.nbnco.net.au/#/views/FWSUP-50MOptimization/HSTSubscribers",
            icon: "FiUsers",
          },
          {
            id: 5,
            name: "WNTD Time Series",
            description: "WNTD Radio and Speed Performance.",
            url: "https://biatableau.nbnco.net.au/#/views/WNTDTime-SeriesStats/TR135ts",
            icon: "FiHome",
          },
          {
            id: 6,
            name: "RAN KPI",
            description: "Performance KPI Dashboard.",
            url: "https://biatableau.nbnco.net.au/#/views/FWKPIPerformance/kpi_lte",
            icon: "FiSettings",
          },
        ];

  });

  // Save tools to local storage whenever the tools state changes
  useEffect(() => {
    localStorage.setItem("tools", JSON.stringify(tools));
  }, [tools]);

  const [editTool, setEditTool] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTool, setNewTool] = useState({
    name: "",
    description: "",
    url: "",
    icon: "FiExternalLink",
  });

  // Icon Map
  const iconMap = {
    FiBarChart2: <FiBarChart2 className="text-blue-500 text-6xl" />,
    FiLayers: <FiLayers className="text-blue-500 text-6xl" />,
    FiWifi: <FiWifi className="text-blue-500 text-6xl" />,
    FiHome: <FiHome className="text-blue-500 text-6xl" />,
    FiSettings: <FiSettings className="text-blue-500 text-6xl" />,
    FiUsers: <FiUsers className="text-blue-500 text-6xl" />,
  };

  const getIcon = (iconName) => {
    try {
      return iconMap[iconName] || <FiExternalLink className="text-blue-500 text-6xl" />;
    } catch (error) {
      console.error(`Invalid icon "${iconName}":`, error);
      return <FiExternalLink className="text-blue-500 text-6xl" />;
    }
  };

  // Add a new tool
  const handleAddTool = () => {
    const newId = tools.length ? tools[tools.length - 1].id + 1 : 1;
    const newToolEntry = { id: newId, ...newTool };
    setTools([...tools, newToolEntry]);
    setNewTool({ name: "", description: "", url: "", icon: "FiExternalLink" });
    setShowAddModal(false);
  };

  // Edit an existing tool
  const handleSaveEdit = () => {
    setTools(tools.map((tool) => (tool.id === editTool.id ? editTool : tool)));
    setEditTool(null);
  };

  // Delete a tool
  const handleDeleteTool = (id) => {
    setTools(tools.filter((tool) => tool.id !== id));
  };

  // Handle Drag and Drop
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTools = Array.from(tools);
    const [movedTool] = reorderedTools.splice(result.source.index, 1);
    reorderedTools.splice(result.destination.index, 0, movedTool);

    setTools(reorderedTools);
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Dashboard" />
      <div className="dashboard-page p-6 space-y-8">
        {/* Header */}
        <header className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-lg shadow-md">
          <Typography variant="h5" className="font-bold">
            FWP Manager
          </Typography>
          <Button
            className="bg-white text-blue-600 hover:bg-blue-100 transition"
            size="sm"
            onClick={() => setShowAddModal(true)}
          >
            <FiPlus className="mr-2" /> Add Tool
          </Button>
        </header>

        {/* Tools Grid with Drag and Drop */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="tools-grid" direction="horizontal">
            {(provided) => (
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tools.map((tool, index) => (
                  <Draggable key={tool.id} draggableId={tool.id.toString()} index={index}>
                    {(provided) => (
                      <Card
                        className="relative drop-shadow-md hover:shadow-lg transition-shadow duration-300"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="absolute top-2 right-2 flex gap-2">
                          <button
                            className="text-yellow-500 hover:text-yellow-600"
                            onClick={() => setEditTool(tool)}
                            aria-label="Edit Tool"
                          >
                            <FiEdit />
                          </button>
                          <button
                            className="text-red-500 hover:text-red-600"
                            onClick={() => handleDeleteTool(tool.id)}
                            aria-label="Delete Tool"
                          >
                            <FiTrash />
                          </button>
                        </div>
                        <CardBody className="text-center space-y-4">
                          {getIcon(tool.icon)}
                          {editTool?.id === tool.id ? (
                            <div className="space-y-2">
                              <input
                                className="border rounded-md w-full p-2"
                                value={editTool.name}
                                onChange={(e) =>
                                  setEditTool({ ...editTool, name: e.target.value })
                                }
                              />
                              <textarea
                                className="border rounded-md w-full p-2"
                                value={editTool.description}
                                onChange={(e) =>
                                  setEditTool({ ...editTool, description: e.target.value })
                                }
                              />
                              <Button size="sm" color="green" onClick={handleSaveEdit}>
                                Save
                              </Button>
                            </div>
                          ) : (
                            <>
                              <Typography variant="h6" className="text-gray-800 font-bold">
                                {tool.name}
                              </Typography>
                              <Typography variant="small" className="text-gray-600">
                                {tool.description}
                              </Typography>
                              <a
                                href={tool.url}
                                className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Open Tool <FiExternalLink className="ml-2" />
                              </a>
                            </>
                          )}
                        </CardBody>
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {/* Add Tool Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <Typography
                variant="h5"
                className="text-blue-gray-800 font-bold text-center mb-4"
              >
                Add a New Tool
              </Typography>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddTool();
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Tool Name"
                  className="border rounded-md w-full p-2"
                  value={newTool.name}
                  onChange={(e) => setNewTool({ ...newTool, name: e.target.value })}
                  required
                />
                <textarea
                  placeholder="Description"
                  className="border rounded-md w-full p-2"
                  value={newTool.description}
                  onChange={(e) =>
                    setNewTool({ ...newTool, description: e.target.value })
                  }
                  required
                />
                <input
                  type="url"
                  placeholder="URL"
                  className="border rounded-md w-full p-2"
                  value={newTool.url}
                  onChange={(e) => setNewTool({ ...newTool, url: e.target.value })}
                  required
                />
                <select
                  className="border rounded-md w-full p-2"
                  value={newTool.icon}
                  onChange={(e) => setNewTool({ ...newTool, icon: e.target.value })}
                  required
                >
                  <option value="FiBarChart2">Bar Chart</option>
                  <option value="FiLayers">Layers</option>
                  <option value="FiWifi">WiFi</option>
                  <option value="FiHome">Home</option>
                  <option value="FiSettings">Settings</option>
                  <option value="FiUsers">Users</option>
                </select>
                <div className="flex justify-end gap-4">
                  <Button
                    type="button"
                    color="gray"
                    onClick={() => setShowAddModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" color="green">
                    Add Tool
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
}
