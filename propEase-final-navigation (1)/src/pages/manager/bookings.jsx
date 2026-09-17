import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ManagerBookings() {
  const defaultBookings = [
    {
      id: "BK-1001",
      amenity: "Swimming Pool",
      icon: "🏊",
      tenant: "John Smith",
      apartment: "Apartment A-204",
      date: "25 Aug 2026",
      checkIn: "06:00 PM",
      checkOut: "07:00 PM",
      status: "Confirmed",
    },
    {
      id: "BK-1002",
      amenity: "Gym",
      icon: "🏋️",
      tenant: "Sarah Johnson",
      apartment: "Apartment B-101",
      date: "26 Aug 2026",
      checkIn: "07:00 AM",
      checkOut: "08:00 AM",
      status: "Confirmed",
    },
    {
      id: "BK-1003",
      amenity: "Tennis Court",
      icon: "🎾",
      tenant: "Michael Brown",
      apartment: "Apartment C-305",
      date: "27 Aug 2026",
      checkIn: "05:00 PM",
      checkOut: "06:00 PM",
      status: "Pending",
    },
    {
      id: "BK-1004",
      amenity: "Community Hall",
      icon: "🏛️",
      tenant: "Emma Wilson",
      apartment: "Apartment A-105",
      date: "28 Aug 2026",
      checkIn: "02:00 PM",
      checkOut: "05:00 PM",
      status: "Confirmed",
    },
  ];

  const [bookings, setBookings] = useState(defaultBookings);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Load bookings from localStorage
  const loadBookings = () => {
    const savedBookings =
      JSON.parse(localStorage.getItem("amenityBookings")) || [];

    console.log("Manager Bookings:", savedBookings);

    setBookings([...defaultBookings, ...savedBookings]);
  };

 useEffect(() => {
  loadBookings();

  window.addEventListener("storage", loadBookings);
  window.addEventListener("amenityBookingUpdated", loadBookings);

  return () => {
    window.removeEventListener("storage", loadBookings);
    window.removeEventListener(
      "amenityBookingUpdated",
      loadBookings
    );
  };
}, []);

  const getStatusStyle = (status) => {
    if (status === "Confirmed") {
      return "bg-green-100 text-green-700";
    }

    if (status === "Cancelled") {
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
            to="/manager/dashboard"
            className="text-2xl font-bold"
          >
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

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Amenity Bookings
          </h1>

          <p className="mt-2 text-slate-500">
            Monitor and manage all amenity reservations.
          </p>
        </div>

        {/* Booking List */}
        <div className="space-y-5">

          {bookings.length === 0 ? (
            <div className="rounded-xl bg-white p-10 text-center text-slate-500 shadow-sm">
              No bookings found.
            </div>
          ) : (
            bookings.map((booking) => (
              <div
                key={booking.id}
                className="rounded-xl bg-white p-6 shadow-sm"
              >

                <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">

                  {/* Booking Information */}
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

                      <div className="mt-4 grid gap-2 text-sm text-slate-500 sm:grid-cols-2">

                        <p>
                          <span className="font-medium text-slate-700">
                            Booking ID:
                          </span>{" "}
                          {booking.id}
                        </p>

                        <p>
                          <span className="font-medium text-slate-700">
                            Tenant:
                          </span>{" "}
                          {booking.tenant}
                        </p>

                        <p>
                          <span className="font-medium text-slate-700">
                            Property:
                          </span>{" "}
                          {booking.apartment}
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

                  {/* View Details */}
                  <button
                    onClick={() => setSelectedBooking(booking)}
                    className="w-full rounded-lg border border-blue-600 px-5 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 lg:w-auto"
                  >
                    View Details
                  </button>

                </div>
              </div>
            ))
          )}

        </div>
      </main>

      {/* Booking Details Popup */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">

          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">

            {/* Popup Header */}
            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-bold text-slate-900">
                Booking Details
              </h2>

              <button
                onClick={() => setSelectedBooking(null)}
                className="text-2xl text-slate-400 hover:text-slate-700"
              >
                ×
              </button>

            </div>

            {/* Details */}
            <div className="mt-6 space-y-4 text-sm text-slate-600">

              <p>
                <strong className="text-slate-900">
                  Booking ID:
                </strong>{" "}
                {selectedBooking.id}
              </p>

              <p>
                <strong className="text-slate-900">
                  Amenity:
                </strong>{" "}
                {selectedBooking.icon} {selectedBooking.amenity}
              </p>

              <p>
                <strong className="text-slate-900">
                  Tenant:
                </strong>{" "}
                {selectedBooking.tenant}
              </p>

              <p>
                <strong className="text-slate-900">
                  Property:
                </strong>{" "}
                {selectedBooking.apartment}
              </p>

              <p>
                <strong className="text-slate-900">
                  Date:
                </strong>{" "}
                {selectedBooking.date}
              </p>

              <p>
                <strong className="text-slate-900">
                  Time:
                </strong>{" "}
                {selectedBooking.checkIn} – {selectedBooking.checkOut}
              </p>

              <p>
                <strong className="text-slate-900">
                  Status:
                </strong>{" "}

                <span
                  className={`ml-1 rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(
                    selectedBooking.status
                  )}`}
                >
                  {selectedBooking.status}
                </span>

              </p>

            </div>

            {/* Close */}
            <button
              onClick={() => setSelectedBooking(null)}
              className="mt-6 w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default ManagerBookings;