import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function AmenityDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const amenities = [
    {
      id: 1,
      name: "Swimming Pool",
      icon: "🏊",
      description: "Relax and enjoy our well-maintained swimming pool.",
      hours: "6:00 AM - 9:00 PM",
    },
    {
      id: 2,
      name: "Gym",
      icon: "🏋️",
      description: "Fully equipped gym for your daily fitness routine.",
      hours: "5:00 AM - 10:00 PM",
    },
    {
      id: 3,
      name: "Community Hall",
      icon: "🏛️",
      description: "A spacious hall for meetings and events.",
      hours: "9:00 AM - 8:00 PM",
    },
    {
      id: 4,
      name: "Tennis Court",
      icon: "🎾",
      description: "Book the court and enjoy a game of tennis.",
      hours: "6:00 AM - 9:00 PM",
    },
    {
      id: 5,
      name: "Study Room",
      icon: "📚",
      description: "A quiet space for studying and working.",
      hours: "8:00 AM - 11:00 PM",
    },
    {
      id: 6,
      name: "Rooftop Area",
      icon: "🌇",
      description: "Enjoy the view and spend time outdoors.",
      hours: "7:00 AM - 10:00 PM",
    },
  ];

  const amenity = amenities.find(
    (item) => item.id === Number(id)
  );

  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!amenity) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Amenity Not Found
          </h1>

          <Link
            to="/tenant/amenities"
            className="mt-5 inline-block text-blue-600 hover:text-blue-700"
          >
            ← Back to Amenities
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amenity: amenity.name,
        icon: amenity.icon,
        tenant: "Current Tenant",
        apartment: "Current Apartment",
        date: date,
        checkIn: startTime,
        checkOut: endTime,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Booking failed");
    }

    console.log("Booking saved to MongoDB:", data.booking);

    setSubmitted(true);

  } catch (error) {
    console.error("Error creating booking:", error);
    alert("Unable to save booking. Please try again.");
  }
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
            to="/tenant/amenities"
            className="text-sm font-medium text-slate-600 hover:text-blue-600"
          >
            ← Amenities
          </Link>

        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10">

        <div className="rounded-2xl bg-white p-8 shadow-sm">

          {/* Amenity Information */}
          <div className="text-center">

            <div className="text-6xl">
              {amenity.icon}
            </div>

            <h1 className="mt-4 text-3xl font-bold text-slate-900">
              {amenity.name}
            </h1>

            <p className="mt-3 text-slate-500">
              {amenity.description}
            </p>

            <p className="mt-3 text-sm text-slate-500">
              🕒 Available: {amenity.hours}
            </p>

          </div>

          {/* Success Message */}
          {submitted ? (
            <div className="mt-8">

              <div className="rounded-lg bg-green-100 p-5 text-center font-medium text-green-700">
                Booking request submitted successfully! ✅
              </div>

              <button
                onClick={() =>
                  navigate("/tenant/amenities")
                }
                className="mt-5 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Back to Amenities
              </button>

            </div>
          ) : (

            /* Booking Form */
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >

              {/* Date */}
              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Booking Date
                </label>

                <input
                  type="date"
                  value={date}
                  onChange={(e) =>
                    setDate(e.target.value)
                  }
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                />

              </div>

              {/* Time */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Start Time
                  </label>

                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) =>
                      setStartTime(e.target.value)
                    }
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    End Time
                  </label>

                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) =>
                      setEndTime(e.target.value)
                    }
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                  />

                </div>

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Confirm Booking
              </button>

            </form>
          )}

        </div>
      </main>
    </div>
  );
}

export default AmenityDetails;