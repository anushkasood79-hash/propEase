import { Link } from "react-router-dom";

function Amenities() {
  const amenities = [
    {
      id: 1,
      name: "Swimming Pool",
      icon: "🏊",
      description: "Relax and enjoy our well-maintained swimming pool.",
      hours: "6:00 AM - 9:00 PM",
      status: "Available",
    },
    {
      id: 2,
      name: "Gym",
      icon: "🏋️",
      description: "Fully equipped gym for your daily fitness routine.",
      hours: "5:00 AM - 10:00 PM",
      status: "Available",
    },
    {
      id: 3,
      name: "Community Hall",
      icon: "🏛️",
      description: "A spacious hall for meetings and events.",
      hours: "9:00 AM - 8:00 PM",
      status: "Available",
    },
    {
      id: 4,
      name: "Tennis Court",
      icon: "🎾",
      description: "Book the court and enjoy a game of tennis.",
      hours: "6:00 AM - 9:00 PM",
      status: "Available",
    },
    {
      id: 5,
      name: "Study Room",
      icon: "📚",
      description: "A quiet space for studying and working.",
      hours: "8:00 AM - 11:00 PM",
      status: "Available",
    },
    {
      id: 6,
      name: "Rooftop Area",
      icon: "🌇",
      description: "Enjoy the view and spend time outdoors.",
      hours: "7:00 AM - 10:00 PM",
      status: "Available",
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

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Amenities
          </h1>

          <p className="mt-2 text-slate-500">
            Explore and book the amenities available at your property.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="text-4xl">{amenity.icon}</div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  {amenity.status}
                </span>
              </div>

              <h2 className="mt-5 text-xl font-bold">
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

              <Link
                to={`/tenant/amenities/${amenity.id}`}
                className="mt-5 block w-full rounded-lg bg-blue-600 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Amenities;