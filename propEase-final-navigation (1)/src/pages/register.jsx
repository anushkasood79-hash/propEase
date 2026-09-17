import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

          <div className="mb-8 text-center">
            <Link to="/" className="text-3xl font-bold text-slate-900">
              Prop<span className="text-blue-600">Ease</span>
            </Link>

            <h1 className="mt-6 text-2xl font-bold text-slate-900">
              Create Your Account
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Join PropEase and simplify property management.
            </p>
          </div>

          <form className="space-y-4">

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Account Type
              </label>

              <select
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                defaultValue=""
              >
                <option value="" disabled>
                  Select account type
                </option>
                <option value="tenant">Tenant</option>
                <option value="manager">Property Manager</option>
                <option value="staff">Maintenance Staff</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Create Account
            </button>

          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Login
            </Link>
          </p>

          <Link
            to="/"
            className="mt-6 block text-center text-sm text-slate-500 hover:text-blue-600"
          >
            ← Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Register;