import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ManagerMaintenance() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await fetch(
        "http://propease-backend-7fob.onrender.com/api/maintenance"
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch requests");
      }

      setRequests(data);
    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(
        `https://propease-backend-7fob.onrender.com/api/maintenance`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update status");
      }

      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === id ? data.request : request
        )
      );

    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update request status.");
    }
  };

  const getStatusStyle = (status) => {
    if (status === "Completed") {
      return "bg-green-100 text-green-700";
    }

    if (status === "In Progress") {
      return "bg-yellow-100 text-yellow-700";
    }

    if (status === "Cancelled") {
      return "bg-red-100 text-red-700";
    }

    return "bg-blue-100 text-blue-700";
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/manager/dashboard" className="text-2xl font-bold">
            Prop<span className="text-blue-600">Ease</span>
          </Link>

          <Link
            to="/manager/dashboard"
            className="text-sm font-medium text-slate-600 hover:text-blue-600"
          >
            ← Dashboard
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Maintenance Requests
          </h1>

          <p className="mt-2 text-slate-500">
            View and manage maintenance requests submitted by tenants.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="border-b p-5">
            <h2 className="font-bold">All Requests</h2>
          </div>

          {loading ? (
            <div className="p-10 text-center text-slate-500">
              Loading maintenance requests...
            </div>
          ) : requests.length === 0 ? (
            <div className="p-10 text-center text-slate-500">
              No maintenance requests have been submitted yet.
            </div>
          ) : (
            <div className="divide-y">
              {requests.map((request) => (
                <div key={request._id} className="p-6">
                  <div className="flex flex-col justify-between gap-5 lg:flex-row">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-bold text-slate-900">
                          {request.title}
                        </h3>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(
                            request.status
                          )}`}
                        >
                          {request.status}
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-slate-500">
                        Request #{request._id}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Created:{" "}
                        {new Date(request.createdAt).toLocaleDateString()}
                      </p>

                      <div className="mt-4 space-y-1 text-sm text-slate-600">
                        <p>
                          <strong>Category:</strong>{" "}
                          <span className="capitalize">
                            {request.category}
                          </span>
                        </p>

                        <p>
                          <strong>Priority:</strong>{" "}
                          <span className="capitalize">
                            {request.priority}
                          </span>
                        </p>

                        <p>
                          <strong>Description:</strong>{" "}
                          {request.description}
                        </p>

                        {request.image && (
                          <p>
                            <strong>Image:</strong> {request.image}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 sm:min-w-48">
                      <label className="text-sm font-medium text-slate-700">
                        Update Status
                      </label>

                      <select
                        value={request.status}
                        onChange={(e) =>
                          updateStatus(request._id, e.target.value)
                        }
                        className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600"
                      >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default ManagerMaintenance;