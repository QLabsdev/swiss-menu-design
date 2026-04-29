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
      <main className="flex-1 mx-auto max-w-[1400px] px-6 md:px-10 py-12 md:py-20 w-full">
        <div className="grid grid-cols-12 gap-6 pb-12 border-b-2 border-foreground">
          <div className="col-span-12 md:col-span-8">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Section 04 — Find Us</div>
            <h1 className="font-black uppercase tracking-[-0.04em] leading-[0.85] text-[clamp(3rem,9vw,9rem)]">Visit</h1>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12 mt-12">
          <div className="col-span-12 md:col-span-5 space-y-10">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">№ 01 — Address</div>
              <p className="text-2xl font-bold leading-tight">45 Adelaid Tambo Drive</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">№ 02 — Instagram</div>
              <a href="https://instagram.com/coffee.and.crumbsss" className="text-2xl font-bold leading-tight hover:text-primary transition-colors">@coffee.and.crumbsss</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">№ 03 — Certification</div>
              <p className="text-2xl font-bold leading-tight">Halaal Certified</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">№ 04 — Service</div>
              <p className="text-lg leading-relaxed">Dine-in, takeaway, and counter pickup. Walk-ins welcome.</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="aspect-[4/5] md:aspect-square w-full border-2 border-foreground bg-muted relative overflow-hidden">
              <iframe
                title="Map"
                className="w-full h-full grayscale contrast-125"
                src="https://www.openstreetmap.org/export/embed.html?bbox=28.0%2C-26.2%2C28.1%2C-26.1&amp;layer=mapnik"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-background border border-foreground px-3 py-2 text-xs uppercase tracking-[0.2em]">
                45 Adelaid Tambo Dr.
              </div>
              <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-3 py-2 text-xs uppercase tracking-[0.2em] swiss-num">
                ◉ Coffee &amp; Crumbs
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}