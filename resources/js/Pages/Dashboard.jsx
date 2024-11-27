import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Dashboard({ auth }) {
  const [tools, setTools] = useState([
    {
      id: 1,
      name: "FWP Tracker",
      description: "Track and manage fixed wireless performance.",
      url: "https://fwpm.nwas.nbnco.net.au",
      icon: "bar_chart",
    },
    {
      id: 2,
      name: "WNTD Overlay Tool",
      description: "WNTD Reparenting and Load Balancing Tool.",
      url: "https://fwpm.nwas.nbnco.net.au/overlay/",
      icon: "layers",
    },
    {
      id: 3,
      name: "Signaling Trace",
      description: "Visualize LTE signaling traces.",
      url: "https://fwpm.nwas.nbnco.net.au/signaling/",
      icon: "network_check",
    },
  ]);

  const [newTool, setNewTool] = useState({
    name: "",
    description: "",
    url: "",
    icon: "",
  });
  const [editTool, setEditTool] = useState(null);

  // Add a new tool
  const handleAddTool = (e) => {
    e.preventDefault();
    const newId = tools.length ? tools[tools.length - 1].id + 1 : 1;
    const newToolEntry = { id: newId, ...newTool };
    setTools([...tools, newToolEntry]);
    setNewTool({ name: "", description: "", url: "", icon: "" });
  };

  // Edit an existing tool
  const handleEditTool = (e) => {
    e.preventDefault();
    setTools(tools.map((tool) => (tool.id === editTool.id ? editTool : tool)));
    setEditTool(null);
  };

  // Delete a tool
  const handleDeleteTool = (id) => {
    setTools(tools.filter((tool) => tool.id !== id));
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
            onClick={() => document.getElementById("add-tool-form").scrollIntoView()}
          >
            <AddIcon fontSize="small" className="mr-2" /> Add Tool
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
                  <EditIcon />
                </button>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => handleDeleteTool(tool.id)}
                  aria-label="Delete Tool"
                >
                  <DeleteIcon />
                </button>
              </div>
              <CardBody className="text-center space-y-4">
                <span className="material-icons text-blue-500 text-6xl">
                  {tool.icon}
                </span>
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
                  Open Tool <OpenInNewIcon fontSize="small" className="ml-2" />
                </a>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Add Tool Form */}
        <div
          id="add-tool-form"
          className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto space-y-4"
        >
          <Typography
            variant="h5"
            className="text-blue-gray-800 font-bold text-center"
          >
            Add a New Tool
          </Typography>
          <form onSubmit={handleAddTool} className="space-y-4">
            <Input
              label="Tool Name"
              value={newTool.name}
              onChange={(e) =>
                setNewTool({ ...newTool, name: e.target.value })
              }
              required
            />
            <Textarea
              label="Description"
              value={newTool.description}
              onChange={(e) =>
                setNewTool({ ...newTool, description: e.target.value })
              }
              required
            />
            <Input
              label="URL"
              value={newTool.url}
              onChange={(e) =>
                setNewTool({ ...newTool, url: e.target.value })
              }
              required
            />
            <Input
              label="Icon (e.g., bar_chart, layers, network_check)"
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
                onClick={() =>
                  setNewTool({ name: "", description: "", url: "", icon: "" })
                }
              >
                Cancel
              </Button>
              <Button type="submit" color="green">
                Add Tool
              </Button>
            </div>
          </form>
        </div>

        {/* Edit Tool Form */}
        {editTool && (
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto space-y-4">
            <Typography
              variant="h5"
              className="text-blue-gray-800 font-bold text-center"
            >
              Edit Tool
            </Typography>
            <form onSubmit={handleEditTool} className="space-y-4">
              <Input
                label="Tool Name"
                value={editTool.name}
                onChange={(e) =>
                  setEditTool({ ...editTool, name: e.target.value })
                }
                required
              />
              <Textarea
                label="Description"
                value={editTool.description}
                onChange={(e) =>
                  setEditTool({ ...editTool, description: e.target.value })
                }
                required
              />
              <Input
                label="URL"
                value={editTool.url}
                onChange={(e) =>
                  setEditTool({ ...editTool, url: e.target.value })
                }
                required
              />
              <Input
                label="Icon (e.g., bar_chart, layers, network_check)"
                value={editTool.icon}
                onChange={(e) =>
                  setEditTool({ ...editTool, icon: e.target.value })
                }
                required
              />
              <div className="flex justify-end gap-4">
                <Button type="button" color="gray" onClick={() => setEditTool(null)}>
                  Cancel
                </Button>
                <Button type="submit" color="green">
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
}
