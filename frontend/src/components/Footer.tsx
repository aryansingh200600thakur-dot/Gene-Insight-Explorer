function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-center text-sm text-slate-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Gene Insight Explorer
        </p>

        <p>
          Powered by MyGene.info
        </p>
      </div>
    </footer>
  );
}

export default Footer;