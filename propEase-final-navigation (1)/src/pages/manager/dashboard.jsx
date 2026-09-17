import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ManagerDashboard() {
    const [requests, setRequests] = useState([]);

  useEffect(() => {
    const savedRequests =
      JSON.parse(localStorage.getItem("maintenanceRequests")) || [];

    setRequests(savedRequests);
  }, []);

  const totalRequests = requests.length;

  const pendingRequests = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const inProgressRequests = requests.filter(
    (request) => request.status === "In Progress"
  ).length;

  const completedRequests = requests.filter(
    (request) => request.status === "Completed"
  ).length;
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <Link to="/manager/dashboard" className="text-2xl font-bold text-slate-900">
              Prop<span className="text-blue-600">Ease</span>
            </Link>
            <p className="text-sm text-slate-500">Property Manager Dashboard</p>
          </div>

          <nav className="flex flex-wrap items-center gap-2 text-sm">
            <Link to="/manager/dashboard" className="rounded-lg bg-blue-50 px-3 py-2 font-semibold text-blue-600">Dashboard</Link>
            <Link to="/manager/maintenance" className="rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">Maintenance</Link>
            <Link to="/manager/bookings" className="rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">Bookings</Link>
            <Link to="/manager/amenities" className="rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">Amenities</Link>
            <Link to="/" className="rounded-lg border px-3 py-2 font-medium text-slate-600 hover:bg-slate-50">Logout</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Property Overview 👋
          </h2>

          <p className="mt-2 text-slate-500">
            Monitor maintenance requests, amenities, and bookings.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Total Requests
            </p>
            <p className="mt-2 text-3xl font-bold text-blue-600">
              {totalRequests}
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Pending Requests
            </p>
            <p className="mt-2 text-3xl font-bold text-yellow-500">
              {pendingRequests}
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              In Progress
            </p>
            <p className="mt-2 text-3xl font-bold text-purple-600">
              {inProgressRequests}
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Completed
            </p>
            <p className="mt-2 text-3xl font-bold text-green-600">
              {completedRequests}
            </p>
          </div>

        </div>

        {/* Quick Actions */}
        <section className="mt-8">
          <h3 className="mb-4 text-xl font-bold text-slate-900">
            Quick Actions
          </h3>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <Link
              to="/manager/maintenance"
              className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-3xl">🔧</div>

              <h4 className="mt-4 text-lg font-bold">
                Manage Maintenance
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                View and update maintenance requests.
              </p>
            </Link>

            <Link
              to="/manager/bookings"
              className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-3xl">📅</div>

              <h4 className="mt-4 text-lg font-bold">
                Manage Bookings
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Monitor amenity reservations and schedules.
              </p>
            </Link>

            <Link
              to="/manager/amenities"
              className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-3xl">🏢</div>

              <h4 className="mt-4 text-lg font-bold">
                Manage Amenities
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                View and manage available property amenities.
              </p>
            </Link>

          </div>
        </section>

        {/* Recent Requests */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">
              Recent Maintenance Requests
            </h3>

            <Link
              to="/manager/maintenance"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View All
            </Link>
          </div>

          <div className="mt-5 space-y-4">

            {requests.length === 0 ? (
  <div className="rounded-lg bg-slate-50 p-6 text-center text-slate-500">
    No maintenance requests yet.
  </div>
) : (
  requests
    .slice(-3)
    .reverse()
    .map((request) => (
      <div
        key={request.id}
        className="flex flex-col justify-between gap-3 rounded-lg bg-slate-50 p-4 sm:flex-row sm:items-center"
      >
        <div>
          <p className="font-semibold">{request.title}</p>

          <p className="text-sm text-slate-500">
            Request #{request.id} • {request.createdAt}
          </p>
        </div>

        <span
          className={`w-fit rounded-full px-3 py-1 text-sm ${
            request.status === "Completed"
              ? "bg-green-100 text-green-700"
              : request.status === "In Progress"
              ? "bg-purple-100 text-purple-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {request.status}
        </span>
      </div>
    ))
)}
          </div>
        </section>

      </main>
    </div>
  );
}

export default ManagerDashboard;