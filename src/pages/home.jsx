import Navbar from "../components/navbar";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          
          <div>
            <p className="mb-4 text-sm font-semibold tracking-widest text-blue-600">
              REAL-TIME PROPERTY MANAGEMENT
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Manage Properties.
              <span className="text-blue-600"> Resolve Issues.</span>
              <br />
              Book Amenities — In Real Time.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              A centralized platform connecting tenants, property managers,
              and maintenance teams for smarter and more efficient property
              management.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/register"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Get Started
              </a>

              <a
                href="#features"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Explore Features
              </a>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Dashboard</p>
                <h2 className="text-xl font-bold">Property Overview</h2>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                ● Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-sm text-slate-500">Open Requests</p>
                <p className="mt-2 text-3xl font-bold text-blue-600">12</p>
              </div>

              <div className="rounded-xl bg-green-50 p-4">
                <p className="text-sm text-slate-500">Completed</p>
                <p className="mt-2 text-3xl font-bold text-green-600">38</p>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="mb-3 font-semibold">Recent Activity</h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                  <span>🔧 Plumbing Request</span>
                  <span className="text-sm text-yellow-600">
                    In Progress
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                  <span>🏊 Pool Booking</span>
                  <span className="text-sm text-green-600">
                    Confirmed
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                  <span>⚡ Electrical Issue</span>
                  <span className="text-sm text-blue-600">
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-blue-600">
              CORE FEATURES
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Everything You Need in One Place
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              PropEase brings maintenance, amenities and property operations
              together in one centralized platform.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            
            <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl">⚡</div>
              <h3 className="mt-4 text-xl font-bold">
                Real-Time Updates
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Track maintenance requests and property activity instantly
                without manually refreshing the page.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl">🔧</div>
              <h3 className="mt-4 text-xl font-bold">
                Smart Maintenance
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Create, assign, monitor and resolve maintenance requests from
                one centralized system.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl">📅</div>
              <h3 className="mt-4 text-xl font-bold">
                Conflict-Free Booking
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Check availability and reserve shared amenities using
                date and time-based scheduling.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-blue-600">
              SIMPLE PROCESS
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              How PropEase Works
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                01
              </div>

              <h3 className="mt-5 text-xl font-bold">Create</h3>

              <p className="mt-3 text-slate-600">
                Submit a maintenance request or select an amenity to book.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                02
              </div>

              <h3 className="mt-5 text-xl font-bold">Track</h3>

              <p className="mt-3 text-slate-600">
                Monitor request status and amenity availability in real time.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                03
              </div>

              <h3 className="mt-5 text-xl font-bold">Manage</h3>

              <p className="mt-3 text-slate-600">
                Property managers and staff handle operations efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Simplify Property Management?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Manage maintenance, amenities and property operations from one
            centralized platform.
          </p>

          <a
            href="/register"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Create Your Account
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="about"
        className="border-t border-slate-200 bg-white px-6 py-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <div>
            <h3 className="text-xl font-bold">PropEase</h3>
            <p className="mt-1 text-sm text-slate-500">
              Real-time property management made simple.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 PropEase. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;