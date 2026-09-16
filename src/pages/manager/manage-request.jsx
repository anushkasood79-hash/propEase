import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function ManageRequest() {
  const { id } = useParams();

  const requests = {
    "MR-1024": {
      title: "Water Leakage",
      apartment: "Apartment A-204",
      tenant: "John Smith",
      category: "Plumbing",
      priority: "High",
      date: "24 Aug 2026",
      description:
        "There is continuous water leakage from the bathroom pipe. The issue needs attention as soon as possible.",
    },
    "MR-1023": {
      title: "Electrical Issue",
      apartment: "Apartment B-101",
      tenant: "Sarah Johnson",
      category: "Electrical",
      priority: "Medium",
      date: "23 Aug 2026",
      description:
        "The electrical switchboard in the living room is not working properly.",
    },
    "MR-1022": {
      title: "AC Not Working",
      apartment: "Apartment C-305",
      tenant: "Michael Brown",
      category: "AC / Heating",
      priority: "Urgent",
      date: "22 Aug 2026",
      description:
        "The air conditioner is not cooling and requires immediate inspection.",
    },
    "MR-1021": {
      title: "Broken Door Lock",
      apartment: "Apartment A-105",
      tenant: "Emma Wilson",
      category: "Other",
      priority: "Low",
      date: "21 Aug 2026",
      description:
        "The main door lock is damaged and needs to be repaired.",
    },
  };

  const request = requests[id];

  const [status, setStatus] = useState(
    id === "MR-1023"
      ? "In Progress"
      : id === "MR-1022"
      ? "Completed"
      : "Pending"
  );

  if (!request) {
    return (
      <div className="min-h-screen bg-slate-50 p-10">
        <h1 className="text-2xl font-bold">Request not found</h1>

        <Link
          to="/manager/maintenance"
          className="mt-4 inline-block text-blue-600"
        >
          ← Back to Maintenance Requests
        </Link>
      </div>
    );
  }

  const getStatusStyle = () => {
    if (status === "Pending") {
      return "bg-yellow-100 text-yellow-700";
    }

    if (status === "In Progress") {
      return "bg-purple-100 text-purple-700";
    }

    return "bg-green-100 text-green-700";
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/manager/dashboard" className="text-2xl font-bold">
            Prop<span className="text-blue-600">Ease</span>
          </Link>

          <Link
            to="/manager/maintenance"
            className="text-sm font-medium text-slate-600 hover:text-blue-600"
          >
            ← Maintenance Requests
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          {/* Title */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <p className="text-sm font-medium text-blue-600">
                Request {id}
              </p>

              <h1 className="mt-2 text-3xl font-bold text-slate-900">
                {request.title}
              </h1>
            </div>

            <span
              className={`w-fit rounded-full px-4 py-2 text-sm font-medium ${getStatusStyle()}`}
            >
              {status}
            </span>
          </div>

          {/* Details */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm text-slate-500">Property</p>
              <p className="mt-1 font-semibold">{request.apartment}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Tenant</p>
              <p className="mt-1 font-semibold">{request.tenant}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Category</p>
              <p className="mt-1 font-semibold">{request.category}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Priority</p>
              <p className="mt-1 font-semibold">{request.priority}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Created Date</p>
              <p className="mt-1 font-semibold">{request.date}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 border-t pt-6">
            <h2 className="text-lg font-bold">Issue Description</h2>

            <p className="mt-3 leading-7 text-slate-600">
              {request.description}
            </p>
          </div>

          {/* Status Management */}
          <div className="mt-8 border-t pt-6">
            <h2 className="text-lg font-bold">Update Request Status</h2>

            <p className="mt-2 text-sm text-slate-500">
              Update the current status of this maintenance request.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setStatus("Pending")}
                className="rounded-lg border border-yellow-300 bg-yellow-50 px-5 py-3 font-semibold text-yellow-700 hover:bg-yellow-100"
              >
                Pending
              </button>

              <button
                onClick={() => setStatus("In Progress")}
                className="rounded-lg border border-purple-300 bg-purple-50 px-5 py-3 font-semibold text-purple-700 hover:bg-purple-100"
              >
                Mark In Progress
              </button>

              <button
                onClick={() => setStatus("Completed")}
                className="rounded-lg border border-green-300 bg-green-50 px-5 py-3 font-semibold text-green-700 hover:bg-green-100"
              >
                Mark Completed
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ManageRequest;