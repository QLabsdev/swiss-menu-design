import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <header className="border-b border-foreground">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 items-end gap-4 py-5">
          <Link to="/" className="col-span-12 md:col-span-6 group">
            <div className="flex items-baseline gap-3">
              <span className="block h-3 w-3 bg-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Est. Halaal Café</span>
            </div>
            <h1 className="mt-1 font-black text-3xl md:text-4xl tracking-tight leading-none">
              Coffee&nbsp;&amp;&nbsp;Crumbs
            </h1>
          </Link>
          <nav className="col-span-12 md:col-span-6 flex flex-wrap items-center gap-x-6 gap-y-2 md:justify-end text-sm uppercase tracking-[0.15em]">
            <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Index</Link>
            <Link to="/menu" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Menu</Link>
            <Link to="/hours" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Hours</Link>
            <Link to="/visit" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Visit</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-foreground">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-10 grid grid-cols-12 gap-6 text-sm">
        <div className="col-span-12 md:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">№ 01</div>
          <div className="mt-2 font-bold">Coffee &amp; Crumbs</div>
          <div className="text-muted-foreground">Halaal certified</div>
        </div>
        <div className="col-span-6 md:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">№ 02 — Locate</div>
          <div className="mt-2">45 Adelaid Tambo Drive</div>
        </div>
        <div className="col-span-6 md:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">№ 03 — Follow</div>
          <a href="https://instagram.com/coffee.and.crumbsss" className="mt-2 block hover:text-primary transition-colors">@coffee.and.crumbsss</a>
        </div>
        <div className="col-span-12 border-t border-foreground/20 pt-4 flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>© {new Date().getFullYear()}</span>
          <span>Set in Inter — Grid 12</span>
        </div>
      </div>
    </footer>
  );
}