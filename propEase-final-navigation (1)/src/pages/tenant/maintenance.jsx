
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Maintenance() {
  const defaultRequests = [
    {
      id: "MR-1001",
      title: "Plumbing Issue",
      category: "plumbing",
      priority: "medium",
      description: "Water leakage in bathroom.",
      status: "In Progress",
      createdAt: "18 Aug 2026",
    },
    {
      id: "MR-1002",
      title: "Electrical Issue",
      category: "electrical",
      priority: "medium",
      description: "Electrical socket not working.",
      status: "Pending",
      createdAt: "17 Aug 2026",
    },
    {
      id: "MR-0998",
      title: "AC Repair",
      category: "ac",
      priority: "low",
      description: "AC needs servicing.",
      status: "Completed",
      createdAt: "15 Aug 2026",
    },
  ];

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const savedRequests =
      JSON.parse(localStorage.getItem("maintenanceRequests")) || [];

    setRequests([...savedRequests, ...defaultRequests]);
  }, []);

  const getStatusStyle = (status) => {
    if (status === "Completed") {
      return "bg-green-100 text-green-700";
    }

    if (status === "In Progress") {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-blue-100 text-blue-700";
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/tenant/dashboard" className="text-2xl font-bold">
            Prop<span className="text-blue-600">Ease</span>
          </Link>

          <Link
            to="/tenant/dashboard"
            className="text-sm font-medium text-slate-600 hover:text-blue-600"
          >
            ← Dashboard
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold">Maintenance Requests</h1>

            <p className="mt-2 text-slate-500">
              Create and track your maintenance requests.
            </p>
          </div>

          <Link
            to="/tenant/maintenance/new"
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            + New Request
          </Link>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="border-b p-5">
            <h2 className="font-bold">My Requests</h2>
          </div>

          <div className="divide-y">
            {requests.length === 0 ? (
              <div className="p-8 text-center text-slate-500">
                No maintenance requests found.
              </div>
            ) : (
              requests.map((request) => (
                <div
                  key={request.id}
                  className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center"
                >
                  <div>
                    <p className="font-semibold">{request.title}</p>

                    <p className="mt-1 text-sm text-slate-500">
                      Request #{request.id} • Created {request.createdAt}
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      Category:{" "}
                      <span className="capitalize">{request.category}</span>
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Priority:{" "}
                      <span className="capitalize">{request.priority}</span>
                    </p>
                  </div>

                  <span
                    className={`w-fit rounded-full px-3 py-1 text-sm font-medium ${getStatusStyle(
                      request.status
                    )}`}
                  >
                    {request.status}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Maintenance;
