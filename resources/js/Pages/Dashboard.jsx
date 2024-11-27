import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

export default function Dashboard({ auth }) {
  // Initial tools data
  const [tools, setTools] = useState([
    {
      id: 1,
      name: "FWP Tracker",
      description: "Track and manage fixed wireless performance.",
      url: "https://fwpm.nwas.nbnco.net.au",
      icon: "fas fa-chart-line",
    },
    {
      id: 2,
      name: "WNTD Overlay Tool",
      description: "WNTD Reparenting and Load Balancing Tool.",
      url: "https://fwpm.nwas.nbnco.net.au/overlay/",
      icon: "fas fa-layer-group",
    },
    {
      id: 3,
      name: "Signaling Trace",
      description: "Visualize LTE signaling traces.",
      url: "https://fwpm.nwas.nbnco.net.au/signaling/",
      icon: "fas fa-network-wired",
    },
  ]);

  const [newTool, setNewTool] = useState({ name: "", description: "", url: "", icon: "" });
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
      <div className="dashboard-page p-6">
        <Typography variant="h3" color="blue-gray">
          FW Performance Tools Selector
        </Typography>

        {/* Tools List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {tools.map((tool) => (
            <Card key={tool.id} className="drop-shadow-md">
              <CardBody className="text-center">
                <i className={`${tool.icon} fa-3x text-primary mb-4`}></i>
                <Typography variant="h6" color="blue-gray">
                  {tool.name}
                </Typography>
                <Typography variant="small" className="mb-4">
                  {tool.description}
                </Typography>
                <a
                  href={tool.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Tool
                </a>
                <div className="mt-4 flex justify-center gap-2">
                  <Button
                    size="sm"
                    color="amber"
                    onClick={() => setEditTool(tool)}
                    data-bs-toggle="modal"
                    data-bs-target="#editToolModal"
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    color="red"
                    onClick={() => handleDeleteTool(tool.id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Add Tool Modal */}
        <div className="modal fade" id="addToolModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleAddTool}>
                <div className="modal-header">
                  <Typography variant="h6">Add a New Tool</Typography>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Tool Name"
                    value={newTool.name}
                    onChange={(e) =>
                      setNewTool({ ...newTool, name: e.target.value })
                    }
                    required
                  />
                  <textarea
                    className="form-control mb-3"
                    placeholder="Description"
                    value={newTool.description}
                    onChange={(e) =>
                      setNewTool({ ...newTool, description: e.target.value })
                    }
                    required
                  ></textarea>
                  <input
                    type="url"
                    className="form-control mb-3"
                    placeholder="URL"
                    value={newTool.url}
                    onChange={(e) =>
                      setNewTool({ ...newTool, url: e.target.value })
                    }
                    required
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Icon (e.g., fas fa-chart-line)"
                    value={newTool.icon}
                    onChange={(e) =>
                      setNewTool({ ...newTool, icon: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-success">
                    Add Tool
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Edit Tool Modal */}
        {editTool && (
          <div
            className="modal fade"
            id="editToolModal"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <form onSubmit={handleEditTool}>
                  <div className="modal-header">
                    <Typography variant="h6">Edit Tool</Typography>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <input
                      type="text"
                      className="form-control mb-3"
                      value={editTool.name}
                      onChange={(e) =>
                        setEditTool({ ...editTool, name: e.target.value })
                      }
                      required
                    />
                    <textarea
                      className="form-control mb-3"
                      value={editTool.description}
                      onChange={(e) =>
                        setEditTool({
                          ...editTool,
                          description: e.target.value,
                        })
                      }
                      required
                    ></textarea>
                    <input
                      type="url"
                      className="form-control mb-3"
                      value={editTool.url}
                      onChange={(e) =>
                        setEditTool({ ...editTool, url: e.target.value })
                      }
                      required
                    />
                    <input
                      type="text"
                      className="form-control mb-3"
                      value={editTool.icon}
                      onChange={(e) =>
                        setEditTool({ ...editTool, icon: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-success">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
}
