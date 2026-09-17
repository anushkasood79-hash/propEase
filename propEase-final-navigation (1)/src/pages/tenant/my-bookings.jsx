import { Link } from "react-router-dom";

function MyBookings() {
  const bookings = [
    {
      id: 1,
      amenity: "Swimming Pool",
      icon: "🏊",
      date: "25 Aug 2026",
      checkIn: "06:00 PM",
      checkOut: "07:00 PM",
      status: "Confirmed",
    },
    {
      id: 2,
      amenity: "Gym",
      icon: "🏋️",
      date: "27 Aug 2026",
      checkIn: "07:00 AM",
      checkOut: "08:00 AM",
      status: "Confirmed",
    },
  ];

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

      <main className="mx-auto max-w-5xl px-6 py-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              My Bookings
            </h1>

            <p className="mt-2 text-slate-500">
              View and manage your amenity bookings.
            </p>
          </div>

          <Link
            to="/tenant/amenities"
            className="rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
          >
            + Book Amenity
          </Link>
        </div>

        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="flex flex-col justify-between gap-4 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{booking.icon}</div>

                <div>
                  <h2 className="text-lg font-bold">
                    {booking.amenity}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {booking.date}
                  </p>

                  <p className="text-sm text-slate-500">
                    {booking.checkIn} – {booking.checkOut}
                  </p>
                </div>
              </div>

              <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                {booking.status}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MyBookings;