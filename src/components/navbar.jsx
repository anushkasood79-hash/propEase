import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-slate-900">
          Prop<span className="text-blue-600">Ease</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium hover:text-blue-600">
            Home
          </Link>

          <a href="#features" className="text-sm font-medium hover:text-blue-600">
            Features
          </a>

          <a href="#how-it-works" className="text-sm font-medium hover:text-blue-600">
            How It Works
          </a>

          <a href="#about" className="text-sm font-medium hover:text-blue-600">
            About
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;