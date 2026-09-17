import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div>
            <Link to="/tenant/dashboard" className="text-2xl font-bold text-slate-900">Prop<span className="text-blue-600">Ease</span></Link>
            <p className="text-sm text-slate-500">Tenant Dashboard</p>
          </div>
          <nav className="flex flex-wrap items-center gap-2 text-sm">
            <Link to="/tenant/dashboard" className="rounded-lg bg-blue-50 px-3 py-2 font-semibold text-blue-600">Dashboard</Link>
            <Link to="/tenant/maintenance" className="rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">Maintenance</Link>
            <Link to="/tenant/amenities" className="rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">Amenities</Link>
            <Link to="/tenant/bookings" className="rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">My Bookings</Link>
            <Link to="/" className="rounded-lg border px-3 py-2 font-medium text-slate-600 hover:bg-slate-50">Logout</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8"><h2 className="text-3xl font-bold">Good Morning! 👋</h2><p className="mt-2 text-slate-500">Here's what's happening with your property.</p></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">Maintenance Requests</p><p className="mt-2 text-3xl font-bold text-blue-600">3</p></div>
          <div className="rounded-xl bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">Pending Requests</p><p className="mt-2 text-3xl font-bold text-yellow-500">1</p></div>
          <div className="rounded-xl bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">Active Bookings</p><p className="mt-2 text-3xl font-bold text-green-600">2</p></div>
          <div className="rounded-xl bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">Available Amenities</p><p className="mt-2 text-3xl font-bold text-purple-600">5</p></div>
        </div>

        <section className="mt-8"><h3 className="mb-4 text-xl font-bold text-slate-900">Quick Actions</h3><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/tenant/maintenance/new" className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"><div className="text-3xl">🔧</div><h4 className="mt-4 text-lg font-bold">New Maintenance Request</h4><p className="mt-2 text-sm text-slate-500">Report an issue with your property.</p></Link>
          <Link to="/tenant/amenities" className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"><div className="text-3xl">🏊</div><h4 className="mt-4 text-lg font-bold">Book an Amenity</h4><p className="mt-2 text-sm text-slate-500">Explore and book available amenities.</p></Link>
          <Link to="/tenant/bookings" className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"><div className="text-3xl">📋</div><h4 className="mt-4 text-lg font-bold">My Bookings</h4><p className="mt-2 text-sm text-slate-500">View and manage your amenity bookings.</p></Link>
        </div></section>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-xl bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><h3 className="text-xl font-bold">Recent Maintenance</h3><Link to="/tenant/maintenance" className="text-sm font-semibold text-blue-600 hover:text-blue-700">View All</Link></div><div className="mt-5 space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4"><div><p className="font-semibold">🔧 Plumbing Issue</p><p className="text-sm text-slate-500">Request #MR-1001</p></div><span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">In Progress</span></div>
            <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4"><div><p className="font-semibold">⚡ Electrical Issue</p><p className="text-sm text-slate-500">Request #MR-1002</p></div><span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">Pending</span></div>
            <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4"><div><p className="font-semibold">❄️ AC Repair</p><p className="text-sm text-slate-500">Request #MR-0998</p></div><span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">Completed</span></div>
          </div></section>
          <section className="rounded-xl bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><h3 className="text-xl font-bold">Upcoming Bookings</h3><Link to="/tenant/bookings" className="text-sm font-semibold text-blue-600 hover:text-blue-700">View All</Link></div><div className="mt-5 space-y-4"><div className="rounded-lg bg-slate-50 p-4"><div className="flex justify-between"><p className="font-semibold">🏊 Swimming Pool</p><span className="text-sm text-green-600">Confirmed</span></div><p className="mt-1 text-sm text-slate-500">25 Aug 2026 • 06:00 PM - 07:00 PM</p></div><div className="rounded-lg bg-slate-50 p-4"><div className="flex justify-between"><p className="font-semibold">🏋️ Gym</p><span className="text-sm text-green-600">Confirmed</span></div><p className="mt-1 text-sm text-slate-500">26 Aug 2026 • 07:00 AM - 08:00 AM</p></div></div></section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
