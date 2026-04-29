import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <header className="border-b-2 border-foreground bg-background sticky top-0 z-40">
      <div className="mx-auto max-w-[1400px] px-4 md:px-10">
        <div className="flex items-center justify-between gap-4 py-4 md:py-5">
          <Link to="/" className="group flex-shrink min-w-0">
            <div className="flex items-center gap-2">
              <span className="block h-2.5 w-2.5 rounded-full bg-[var(--pop-orange)] flex-shrink-0" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">Halaal Café</span>
            </div>
            <h1 className="mt-1 font-black text-xl md:text-3xl tracking-tight leading-none text-primary truncate">
              Coffee&nbsp;&amp;&nbsp;Crumbs
            </h1>
          </Link>
          <Link to="/visit" className="md:hidden flex-shrink-0 inline-block bg-[var(--pop-orange)] text-white rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.2em]">Contact</Link>
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-x-6 text-xs uppercase tracking-[0.2em] text-primary">
              <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-[var(--pop-orange)] font-bold" }} className="hover:text-[var(--pop-orange)] transition-colors">Index</Link>
              <Link to="/menu" activeProps={{ className: "text-[var(--pop-orange)] font-bold" }} className="hover:text-[var(--pop-orange)] transition-colors">Menu</Link>
              <Link to="/hours" activeProps={{ className: "text-[var(--pop-orange)] font-bold" }} className="hover:text-[var(--pop-orange)] transition-colors">Hours</Link>
              <Link to="/visit" activeProps={{ className: "text-[var(--pop-orange)] font-bold" }} className="hover:text-[var(--pop-orange)] transition-colors">Visit</Link>
            </nav>
            <Link to="/visit" className="inline-block bg-[var(--pop-orange)] text-white rounded-full px-5 py-2 text-xs uppercase tracking-[0.25em] hover:opacity-90 transition">Contact</Link>
          </div>
        </div>
        {/* Mobile nav row */}
        <nav className="md:hidden flex items-center justify-between gap-2 pb-3 -mx-1 overflow-x-auto text-[11px] uppercase tracking-[0.2em] text-primary">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "bg-primary text-primary-foreground" }} className="px-3 py-1.5 rounded-full border border-foreground/20">Index</Link>
          <Link to="/menu" activeProps={{ className: "bg-primary text-primary-foreground" }} className="px-3 py-1.5 rounded-full border border-foreground/20">Menu</Link>
          <Link to="/hours" activeProps={{ className: "bg-primary text-primary-foreground" }} className="px-3 py-1.5 rounded-full border border-foreground/20">Hours</Link>
          <Link to="/visit" activeProps={{ className: "bg-primary text-primary-foreground" }} className="px-3 py-1.5 rounded-full border border-foreground/20">Visit</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-4 md:px-10 py-10 md:py-12 grid grid-cols-12 gap-6 text-sm">
        <div className="col-span-12 md:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--pop-yellow)]">№ 01</div>
          <div className="mt-2 font-black text-2xl">Coffee &amp; Crumbs</div>
          <div className="text-primary-foreground/70">Halaal certified</div>
        </div>
        <div className="col-span-6 md:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--pop-yellow)]">№ 02 — Locate</div>
          <div className="mt-2">45 Adelaid Tambo Drive</div>
        </div>
        <div className="col-span-6 md:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--pop-yellow)]">№ 03 — Follow</div>
          <a href="https://instagram.com/coffee.and.crumbsss" className="mt-2 block hover:text-[var(--pop-orange)] transition-colors">@coffee.and.crumbsss</a>
        </div>
        <div className="col-span-12 border-t border-primary-foreground/20 pt-4 flex flex-wrap gap-2 justify-between text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
          <span>© {new Date().getFullYear()}</span>
          <span>Set in Inter — Grid 12</span>
        </div>
      </div>
    </footer>
  );
}