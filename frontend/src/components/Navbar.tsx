import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        <Link
          to="/"
          className="text-xl font-bold text-slate-900"
        >
          Gene Insight Explorer
        </Link>


        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">

          <Link
            to="/"
            className="transition hover:text-blue-600"
          >
            Home
          </Link>


          <Link
            to="/"
            className="transition hover:text-blue-600"
          >
            Search
          </Link>


          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-600"
          >
            GitHub
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;