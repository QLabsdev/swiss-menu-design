import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { tradingHours } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coffee & Crumbs — Halaal Café" },
      { name: "description", content: "Coffee & Crumbs in Adelaid Tambo Drive. Foldovers, sandwiches, baked goods, and specialty coffee." },
    ],
  }),
  component: Index,
});

function Index() {
  const today = new Date().toLocaleDateString("en-GB", { weekday: "long" });
  const todayHours = tradingHours.find((d) => d.day === today);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        {/* HERO */}
        <section className="border-b border-foreground">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-12 md:py-20 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                Issue 01 — Menu &amp; Hours / Adelaid Tambo Drive
              </div>
              <h2 className="font-black uppercase tracking-[-0.04em] leading-[0.85] text-[clamp(3.5rem,11vw,11rem)]">
                Coffee.<br />
                <span className="text-primary">Crumbs.</span><br />
                Daily.
              </h2>
            </div>
            <aside className="col-span-12 md:col-span-4 flex flex-col justify-end gap-6 md:border-l md:border-foreground md:pl-6">
              <p className="text-sm leading-relaxed">
                A Halaal café serving signature foldovers, fresh sandwiches and a baked counter that changes by the hour. Pulled espresso, matcha, milkshakes and cordials served in cup or pot.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs uppercase tracking-[0.15em]">
                <Link to="/menu" className="border border-foreground px-4 py-3 hover:bg-foreground hover:text-background transition-colors text-center">View Menu →</Link>
                <Link to="/visit" className="border border-foreground px-4 py-3 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors text-center">Visit Us →</Link>
              </div>
            </aside>
          </div>
        </section>

        {/* INFO STRIP */}
        <section className="border-b border-foreground bg-foreground text-background">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-4 grid grid-cols-12 gap-6 text-xs uppercase tracking-[0.2em]">
            <div className="col-span-6 md:col-span-3">№ 01 / Halaal Certified</div>
            <div className="col-span-6 md:col-span-3">№ 02 / Open {todayHours?.day ?? "Today"}</div>
            <div className="col-span-6 md:col-span-3 swiss-num">{todayHours?.hours ?? "06:00 — 16:00"}</div>
            <div className="col-span-6 md:col-span-3 text-right">№ 03 / Dine-in &amp; Takeaway</div>
          </div>
        </section>

        {/* GRID FEATURES */}
        <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 border-t-2 border-foreground pt-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground swiss-num">A · Foldovers</div>
            <h3 className="font-black text-3xl mt-3 leading-none uppercase tracking-tight">Signature.<br />Pressed.<br />Hot.</h3>
            <p className="text-sm mt-4 text-muted-foreground leading-relaxed">Crispy or grilled chicken, steak, or falafel — folded with greens and our house sauces. From R79.</p>
          </div>
          <div className="col-span-12 md:col-span-4 border-t-2 border-foreground pt-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground swiss-num">B · Baked</div>
            <h3 className="font-black text-3xl mt-3 leading-none uppercase tracking-tight">From the<br />counter.<br />Today.</h3>
            <p className="text-sm mt-4 text-muted-foreground leading-relaxed">Muffins, croissants, brownies, cheesecakes and Belgian waffles — rotating selection from R23.</p>
          </div>
          <div className="col-span-12 md:col-span-4 border-t-2 border-primary pt-4">
            <div className="text-xs uppercase tracking-[0.2em] text-primary swiss-num">C · Drinks</div>
            <h3 className="font-black text-3xl mt-3 leading-none uppercase tracking-tight">Hot, cold,<br />matcha,<br />milkshake.</h3>
            <p className="text-sm mt-4 text-muted-foreground leading-relaxed">Espresso, Vietnamese, matcha strawberry, cordials, daiquiris. R20 — R80.</p>
          </div>
        </section>

        {/* BIG TYPE */}
        <section className="border-y border-foreground py-10">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 md:col-span-9">
              <p className="font-black uppercase tracking-[-0.03em] leading-[0.9] text-[clamp(2rem,6vw,5rem)]">
                Made fresh, served simply, priced honestly.
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 md:text-right">
              <Link to="/menu" className="inline-block border-2 border-foreground px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors">
                Full Menu →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
