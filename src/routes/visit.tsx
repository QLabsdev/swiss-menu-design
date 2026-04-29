import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — Coffee & Crumbs" },
      { name: "description", content: "Find Coffee & Crumbs at 45 Adelaid Tambo Drive." },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 mx-auto max-w-[1400px] px-4 md:px-10 py-8 md:py-20 w-full">
        <div className="grid grid-cols-12 gap-6 pb-8 md:pb-12 border-b-2 border-foreground">
          <div className="col-span-12 md:col-span-8">
            <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3 md:mb-4">Section 04 — Find Us</div>
            <h1 className="font-black uppercase tracking-[-0.04em] leading-[0.85] text-[clamp(3.5rem,15vw,9rem)] text-primary">Visit</h1>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-12 mt-8 md:mt-12">
          {/* Address tile */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=45+Adelaid+Tambo+Drive"
            target="_blank"
            rel="noreferrer"
            className="col-span-12 md:col-span-7 rounded-[1.75rem] border-2 border-foreground bg-primary text-primary-foreground p-6 md:p-10 flex flex-col justify-between min-h-[260px] md:min-h-[360px] hover:opacity-95 transition"
          >
            <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[var(--pop-yellow)]">№ 01 — Address</div>
            <div>
              <p className="font-black uppercase tracking-tight text-3xl md:text-6xl leading-[0.95]">
                45 Adelaid<br/>Tambo Drive
              </p>
              <div className="mt-4 inline-block bg-[var(--pop-orange)] text-white rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.2em]">
                Open in Maps →
              </div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/coffee.and.crumbsss"
            target="_blank"
            rel="noreferrer"
            className="col-span-12 md:col-span-5 rounded-[1.75rem] border-2 border-foreground bg-[var(--pop-yellow)] text-foreground p-6 md:p-10 flex flex-col justify-between min-h-[200px] md:min-h-[360px] hover:opacity-95 transition"
          >
            <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-foreground/70">№ 02 — Follow</div>
            <div>
              <p className="font-black tracking-tight text-2xl md:text-4xl leading-tight break-words">@coffee.and.crumbsss</p>
              <div className="mt-3 text-xs md:text-sm text-foreground/80">Daily specials & menu drops on Instagram.</div>
            </div>
          </a>

          {/* Certification */}
          <div className="col-span-6 md:col-span-4 rounded-[1.75rem] border-2 border-foreground bg-card p-5 md:p-8">
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">№ 03</div>
            <p className="mt-3 font-black uppercase tracking-tight text-xl md:text-3xl text-primary leading-tight">Halaal Certified</p>
          </div>

          {/* Service */}
          <div className="col-span-6 md:col-span-4 rounded-[1.75rem] border-2 border-foreground bg-[var(--pop-pink)]/40 p-5 md:p-8">
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">№ 04 — Service</div>
            <p className="mt-3 font-bold text-base md:text-xl leading-snug">Dine-in · Takeaway · Counter pickup. Walk-ins welcome.</p>
          </div>

          {/* Today's hours pointer */}
          <div className="col-span-12 md:col-span-4 rounded-[1.75rem] border-2 border-foreground bg-secondary p-5 md:p-8 flex flex-col justify-between">
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">№ 05 — Hours</div>
            <p className="mt-3 font-bold text-base md:text-xl leading-snug">Mon–Sun from 06:00. Friday closed 12:00–14:00 for Jumu&apos;ah.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}