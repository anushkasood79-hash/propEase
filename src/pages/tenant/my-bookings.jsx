import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadBookings = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/bookings"
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to load bookings");
      }

      setBookings(data);
      setError("");
    } catch (error) {
      console.error("Error loading bookings:", error);
      setError("Unable to load bookings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const getStatusStyle = (status) => {
    if (status === "Approved" || status === "Confirmed") {
      return "bg-green-100 text-green-700";
    }

    if (status === "Rejected" || status === "Cancelled") {
      return "bg-red-100 text-red-700";
    }

    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <Link
            to="/tenant/dashboard"
            className="text-2xl font-bold"
          >
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

      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            My Bookings
          </h1>

          <p className="mt-2 text-slate-500">
            View and track your amenity reservations.
          </p>
        </div>

        {/* Loading */}
        {loading ? (

          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <p className="text-slate-500">
              Loading bookings...
            </p>
          </div>

        ) : error ? (

          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <p className="text-red-600">
              {error}
            </p>

            <button
              onClick={loadBookings}
              className="mt-5 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>

        ) : bookings.length === 0 ? (

          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">

            <div className="text-5xl">📅</div>

            <h2 className="mt-4 text-xl font-semibold text-slate-900">
              No bookings yet
            </h2>

            <p className="mt-2 text-slate-500">
              You haven't made any amenity bookings yet.
            </p>

            <Link
              to="/tenant/amenities"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Explore Amenities
            </Link>

          </div>

        ) : (

          <div className="space-y-5">

            {bookings.map((booking) => (

              <div
                key={booking._id}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >

                <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">

                  {/* Booking information */}
                  <div className="flex items-start gap-4">

                    <div className="text-4xl">
                      {booking.icon || "📅"}
                    </div>

                    <div>

                      <div className="flex flex-wrap items-center gap-3">

                        <h2 className="text-xl font-bold text-slate-900">
                          {booking.amenity}
                        </h2>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(
                            booking.status
                          )}`}
                        >
                          {booking.status}
                        </span>

                      </div>

                      <div className="mt-4 space-y-2 text-sm text-slate-500">

                        <p>
                          <span className="font-medium text-slate-700">
                            Booking ID:
                          </span>{" "}
                          {booking._id}
                        </p>

                        <p>
                          <span className="font-medium text-slate-700">
                            Date:
                          </span>{" "}
                          {booking.date}
                        </p>

                        <p>
                          <span className="font-medium text-slate-700">
                            Time:
                          </span>{" "}
                          {booking.checkIn} – {booking.checkOut}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </main>
    </div>
  );
}

export default MyBookings;