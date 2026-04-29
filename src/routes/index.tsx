import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { Squiggle, Blob } from "@/components/Squiggle";
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
        <section className="border-b-2 border-foreground relative overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-4 md:px-10 py-10 md:py-20 grid grid-cols-12 gap-6 relative">
            <div className="col-span-12 md:col-span-8">
              <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4 md:mb-6">
                Issue 01 — Menu &amp; Hours / Adelaid Tambo Drive
              </div>
              <h2 className="font-black uppercase tracking-[-0.04em] leading-[0.85] text-[clamp(3.75rem,16vw,11rem)] text-primary">
                Coffee.<br />
                <span className="text-[var(--pop-orange)]">Crumbs.</span><br />
                Daily.
              </h2>
              <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
                <Link to="/menu" className="inline-block bg-[var(--pop-orange)] text-white rounded-full px-5 md:px-6 py-3 text-xs md:text-sm uppercase tracking-[0.2em] hover:opacity-90 transition">See Menu →</Link>
                <Link to="/visit" className="inline-block bg-primary text-primary-foreground rounded-full px-5 md:px-6 py-3 text-xs md:text-sm uppercase tracking-[0.2em] hover:opacity-90 transition">Visit</Link>
              </div>
            </div>
            <aside className="col-span-12 md:col-span-4 flex flex-col justify-end gap-4 md:gap-6 relative">
              <Squiggle className="w-full h-auto max-h-24 md:max-h-none" />
              <p className="text-sm leading-relaxed bg-card rounded-2xl p-4 md:p-5 border-2 border-foreground">
                A Halaal café serving signature foldovers, fresh sandwiches and a baked counter that changes by the hour. Pulled espresso, matcha, milkshakes and cordials.
              </p>
            </aside>
          </div>
        </section>

        {/* INFO STRIP */}
        <section className="border-b-2 border-foreground bg-primary text-primary-foreground">
          <div className="mx-auto max-w-[1400px] px-4 md:px-10 py-3 md:py-4 grid grid-cols-12 gap-2 md:gap-6 text-[10px] md:text-xs uppercase tracking-[0.18em] md:tracking-[0.2em]">
            <div className="col-span-6 md:col-span-3">№ 01 / Halaal</div>
            <div className="col-span-6 md:col-span-3">№ 02 / {todayHours?.day ?? "Today"}</div>
            <div className="col-span-6 md:col-span-3 swiss-num">{todayHours?.hours ?? "06:00 — 16:00"}</div>
            <div className="col-span-6 md:col-span-3 text-right">№ 03 / Dine-in</div>
          </div>
        </section>

        {/* WHAT WE SERVE — green panel */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-[1400px] px-4 md:px-10 py-12 md:py-24 grid grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="col-span-12 md:col-span-5">
              <div className="rounded-[2rem] overflow-hidden bg-[var(--pop-yellow)] aspect-square relative border-2 border-primary-foreground/20">
                <Blob className="absolute inset-0 w-full h-full opacity-30" color="var(--pop-orange)" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-foreground mb-3">What We Do</div>
                    <div className="font-black uppercase text-foreground text-3xl md:text-4xl leading-none tracking-tight">Foldovers,<br/>Bakes &amp;<br/>Brews.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pl-8">
              <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[var(--pop-yellow)] mb-3 md:mb-4">Section · 01</div>
              <h3 className="font-black uppercase tracking-tight text-3xl md:text-6xl leading-[0.95] md:leading-[0.9]">
                Signature foldovers,<br/>
                <span className="text-[var(--pop-orange)]">fresh sandwiches,</span><br/>
                a baked counter<br/>
                that <span className="text-[var(--pop-pink)]">changes hourly.</span>
              </h3>
              <p className="mt-4 md:mt-6 max-w-xl text-sm md:text-base text-primary-foreground/80 leading-relaxed">
                Crispy chicken, steak or falafel folded with greens and house sauces. Muffins, croissants, brownies and Belgian waffles from the counter — paired with espresso, matcha, milkshakes and cordials.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES — pink-ish beige tile */}
        <section className="bg-secondary border-y-2 border-foreground">
          <div className="mx-auto max-w-[1400px] px-4 md:px-10 py-12 md:py-24">
            <div className="text-center text-[10px] md:text-xs italic tracking-[0.3em] uppercase text-primary mb-8 md:mb-12">— The Counter —</div>
            <div className="grid grid-cols-12 gap-6 md:gap-8">
              {[
                { tag: "A", title: "Foldovers", body: "Crispy or grilled chicken, steak, or falafel folded with greens & house sauces.", color: "var(--pop-orange)" },
                { tag: "B", title: "Baked Goods", body: "Muffins, croissants, brownies, cheesecakes & Belgian waffles. Rotating daily.", color: "var(--pop-pink)" },
                { tag: "C", title: "Drinks", body: "Espresso, Vietnamese coffee, matcha, milkshakes, daiquiris and cordials.", color: "var(--pop-blue)" },
              ].map((s) => (
                <div key={s.tag} className="col-span-12 md:col-span-4">
                  <div className="aspect-square rounded-[2rem] bg-card border-2 border-foreground p-6 flex items-center justify-center relative overflow-hidden">
                    <Blob className="absolute -bottom-8 -right-8 w-3/4 h-3/4" color={s.color} />
                    <div className="absolute top-4 left-5 text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground swiss-num">{s.tag} · 0{s.tag === "A" ? 1 : s.tag === "B" ? 2 : 3}</div>
                    <div className="font-black text-primary text-4xl md:text-5xl uppercase tracking-tight leading-none text-center relative z-10">
                      {s.title.split(" ").map((w, i) => <div key={i}>{w}</div>)}
                    </div>
                  </div>
                  <h4 className="mt-4 md:mt-5 font-black uppercase tracking-tight text-lg md:text-xl text-primary">{s.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BIG TYPE */}
        <section className="py-12 md:py-16 bg-background relative overflow-hidden">
          <Squiggle className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] md:w-[600px] opacity-60 md:opacity-90 pointer-events-none" />
          <div className="mx-auto max-w-[1400px] px-4 md:px-10 grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 md:col-span-9">
              <p className="font-black uppercase tracking-[-0.03em] leading-[0.9] text-[clamp(2.25rem,8vw,5rem)] text-primary">
                Made fresh.<br/>Served simply.<br/><span className="text-[var(--pop-orange)]">Priced honestly.</span>
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 md:text-right">
              <Link to="/menu" className="inline-block bg-primary text-primary-foreground rounded-full px-5 md:px-6 py-3 text-xs md:text-sm uppercase tracking-[0.2em] hover:opacity-90 transition">
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
