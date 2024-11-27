import React, { useState } from "react";
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
} from "react-icons/fi";

export default function Dashboard({ auth }) {
  const [tools, setTools] = useState([
    {
      id: 1,
      name: "FWP Tracker",
      description: "Track and manage fixed wireless performance.",
      url: "https://fwpm.nwas.nbnco.net.au",
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
      name: "Signaling Trace",
      description: "Visualize LTE signaling traces.",
      url: "https://fwpm.nwas.nbnco.net.au/signaling/",
      icon: "FiWifi",
    },
  ]);

  const [editTool, setEditTool] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTool, setNewTool] = useState({
    name: "",
    description: "",
    url: "",
    icon: "",
  });

  // Add a new tool
  const handleAddTool = () => {
    const newId = tools.length ? tools[tools.length - 1].id + 1 : 1;
    const newToolEntry = { id: newId, ...newTool };
    setTools([...tools, newToolEntry]);
    setNewTool({ name: "", description: "", url: "", icon: "" });
    setShowAddModal(false);
  };

  // Edit an existing tool
  const handleEditTool = (id, updatedTool) => {
    setTools(tools.map((tool) => (tool.id === id ? updatedTool : tool)));
    setEditTool(null);
  };

  // Delete a tool
  const handleDeleteTool = (id) => {
    setTools(tools.filter((tool) => tool.id !== id));
  };

  // Map icon names to actual React Icons
  const iconMap = {
    FiBarChart2: <FiBarChart2 className="text-blue-500 text-6xl" />,
    FiLayers: <FiLayers className="text-blue-500 text-6xl" />,
    FiWifi: <FiWifi className="text-blue-500 text-6xl" />,
  };

  const getIcon = (iconName) => {
    try {
      return iconMap[iconName] || <FiExternalLink className="text-blue-500 text-6xl" />;
    } catch (error) {
      console.error(`Invalid icon "${iconName}":`, error);
      return <FiExternalLink className="text-blue-500 text-6xl" />;
    }
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Dashboard" />
      <div className="dashboard-page p-6 space-y-8">
        {/* Header */}
        <header className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-lg shadow-md">
          <Typography variant="h5" className="font-bold">
            FW Performance Tools Selector
          </Typography>
          <Button
            className="bg-white text-blue-600 hover:bg-blue-100 transition"
            size="sm"
            onClick={() => setShowAddModal(true)}
          >
            <FiPlus className="mr-2" /> Add Tool
          </Button>
        </header>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Card
              key={tool.id}
              className="relative drop-shadow-md hover:shadow-lg transition-shadow duration-300"
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
                  <div>
                    <input
                      className="border rounded-md w-full mb-2 p-2"
                      value={editTool.name}
                      onChange={(e) =>
                        setEditTool({ ...editTool, name: e.target.value })
                      }
                    />
                    <textarea
                      className="border rounded-md w-full mb-2 p-2"
                      value={editTool.description}
                      onChange={(e) =>
                        setEditTool({ ...editTool, description: e.target.value })
                      }
                    />
                    <Button
                      size="sm"
                      color="green"
                      onClick={() => handleEditTool(tool.id, editTool)}
                    >
                      Save
                    </Button>
                  </div>
                ) : (
                  <>
                    <Typography
                      variant="h6"
                      className="text-gray-800 font-bold"
                    >
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
          ))}
        </div>

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
                  onChange={(e) =>
                    setNewTool({ ...newTool, name: e.target.value })
                  }
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
                  onChange={(e) =>
                    setNewTool({ ...newTool, url: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Icon (e.g., FiBarChart2)"
                  className="border rounded-md w-full p-2"
                  value={newTool.icon}
                  onChange={(e) =>
                    setNewTool({ ...newTool, icon: e.target.value })
                  }
                  required
                />
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
