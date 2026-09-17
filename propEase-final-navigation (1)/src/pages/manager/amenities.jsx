import { Link } from "react-router-dom";
import { useState } from "react";

function ManagerAmenities() {
  const [amenities, setAmenities] = useState([
    {
      id: 1,
      name: "Swimming Pool",
      icon: "🏊",
      description: "Well-maintained swimming pool for residents.",
      hours: "6:00 AM - 9:00 PM",
      available: true,
    },
    {
      id: 2,
      name: "Gym",
      icon: "🏋️",
      description: "Fully equipped fitness center.",
      hours: "5:00 AM - 10:00 PM",
      available: true,
    },
    {
      id: 3,
      name: "Community Hall",
      icon: "🏛️",
      description: "Spacious hall for meetings and events.",
      hours: "9:00 AM - 8:00 PM",
      available: true,
    },
    {
      id: 4,
      name: "Tennis Court",
      icon: "🎾",
      description: "Outdoor tennis court for residents.",
      hours: "6:00 AM - 9:00 PM",
      available: false,
    },
    {
      id: 5,
      name: "Study Room",
      icon: "📚",
      description: "Quiet space for studying and working.",
      hours: "8:00 AM - 11:00 PM",
      available: true,
    },
    {
      id: 6,
      name: "Rooftop Area",
      icon: "🌇",
      description: "Outdoor rooftop space with a great view.",
      hours: "7:00 AM - 10:00 PM",
      available: true,
    },
  ]);

  const toggleAvailability = (id) => {
    setAmenities((prevAmenities) =>
      prevAmenities.map((amenity) =>
        amenity.id === id
          ? { ...amenity, available: !amenity.available }
          : amenity
      )
    );
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
            Manage Amenities
          </h1>

          <p className="mt-2 text-slate-500">
            Control the availability and operating status of property amenities.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="text-4xl">{amenity.icon}</div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    amenity.available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {amenity.available ? "Available" : "Unavailable"}
                </span>
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-900">
                {amenity.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {amenity.description}
              </p>

              <div className="mt-5 border-t pt-4">
                <p className="text-sm text-slate-500">
                  🕒 {amenity.hours}
                </p>
              </div>

              <button
                onClick={() => toggleAvailability(amenity.id)}
                className={`mt-5 w-full rounded-lg py-3 text-sm font-semibold ${
                  amenity.available
                    ? "border border-red-300 bg-red-50 text-red-700 hover:bg-red-100"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {amenity.available
                  ? "Mark as Unavailable"
                  : "Mark as Available"}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ManagerAmenities;
