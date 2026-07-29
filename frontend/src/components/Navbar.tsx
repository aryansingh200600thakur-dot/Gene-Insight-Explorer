function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-blue-600"
        >
          Gene Insight Explorer
        </a>

        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="/"
                className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
              >
                Home
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;