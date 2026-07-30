function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Gene Insight Explorer
            </h2>

            <p className="mt-2 text-slate-600">
              AI-powered human gene exploration platform.
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="font-semibold text-slate-900">
              Powered By
            </p>

            <p className="mt-2 text-slate-600">
              MyGene.info • Gene Ontology • FastAPI • React
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © 2026 Gene Insight Explorer. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;