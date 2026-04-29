import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <header className="border-b-2 border-foreground bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 items-center gap-4 py-5">
          <Link to="/" className="col-span-12 md:col-span-4 group">
            <div className="flex items-baseline gap-3">
              <span className="block h-3 w-3 rounded-full bg-[var(--pop-orange)]" />
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Halaal Café</span>
            </div>
            <h1 className="mt-1 font-black text-2xl md:text-3xl tracking-tight leading-none text-primary">
              Coffee&nbsp;&amp;&nbsp;Crumbs
            </h1>
          </Link>
          <nav className="col-span-12 md:col-span-5 flex flex-wrap items-center gap-x-6 gap-y-2 md:justify-center text-xs uppercase tracking-[0.2em] text-primary">
            <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-[var(--pop-orange)] font-bold" }} className="hover:text-[var(--pop-orange)] transition-colors">Index</Link>
            <Link to="/menu" activeProps={{ className: "text-[var(--pop-orange)] font-bold" }} className="hover:text-[var(--pop-orange)] transition-colors">Menu</Link>
            <Link to="/hours" activeProps={{ className: "text-[var(--pop-orange)] font-bold" }} className="hover:text-[var(--pop-orange)] transition-colors">Hours</Link>
            <Link to="/visit" activeProps={{ className: "text-[var(--pop-orange)] font-bold" }} className="hover:text-[var(--pop-orange)] transition-colors">Visit</Link>
          </nav>
          <div className="col-span-12 md:col-span-3 md:text-right">
            <Link to="/visit" className="inline-block bg-[var(--pop-orange)] text-white rounded-full px-5 py-2 text-xs uppercase tracking-[0.25em] hover:opacity-90 transition">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-12 grid grid-cols-12 gap-6 text-sm">
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
        <div className="col-span-12 border-t border-primary-foreground/20 pt-4 flex justify-between text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
          <span>© {new Date().getFullYear()}</span>
          <span>Set in Inter — Grid 12</span>
        </div>
      </div>
    </footer>
  );
}