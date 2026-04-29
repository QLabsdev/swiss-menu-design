import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { tradingHours, festiveHours } from "@/data/menu";

export const Route = createFileRoute("/hours")({
  head: () => ({
    meta: [
      { title: "Trading Hours — Coffee & Crumbs" },
      { name: "description", content: "Standard and festive trading hours for Coffee & Crumbs." },
    ],
  }),
  component: HoursPage,
});

function HourTable({ data }: { data: typeof tradingHours }) {
  return (
    <div>
      {data.map((d, i) => (
        <div key={d.day} className="grid grid-cols-12 gap-4 py-5 border-t border-foreground/15 items-baseline">
          <div className="col-span-1 text-xs text-muted-foreground swiss-num pt-1">{String(i + 1).padStart(2, "0")}</div>
          <div className="col-span-5 font-bold uppercase tracking-tight text-lg">{d.day}</div>
          <div className="col-span-6 text-right swiss-num text-lg font-medium">
            {d.hours}
            {d.note && <div className="text-xs uppercase tracking-[0.15em] text-primary mt-1">{d.note}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

function HoursPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 mx-auto max-w-[1400px] px-6 md:px-10 py-12 md:py-20 w-full">
        <div className="grid grid-cols-12 gap-6 pb-12 border-b-2 border-foreground">
          <div className="col-span-12 md:col-span-8">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Section 03 — When We&apos;re Open</div>
            <h1 className="font-black uppercase tracking-[-0.04em] leading-[0.85] text-[clamp(3rem,9vw,9rem)]">Hours</h1>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col justify-end">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Friday closures observed for Jumu&apos;ah prayer. Times subject to change on public holidays.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12 mt-12">
          <section className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-12 gap-4 items-end pb-3 border-b-2 border-foreground">
              <div className="col-span-1 text-xs text-muted-foreground swiss-num">H.01</div>
              <h2 className="col-span-11 font-black uppercase tracking-tight text-2xl md:text-3xl leading-none">Standard</h2>
            </div>
            <HourTable data={tradingHours} />
          </section>

          <section className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-12 gap-4 items-end pb-3 border-b-2 border-primary">
              <div className="col-span-1 text-xs text-primary swiss-num">H.02</div>
              <h2 className="col-span-11 font-black uppercase tracking-tight text-2xl md:text-3xl leading-none text-primary">Festive</h2>
            </div>
            <HourTable data={festiveHours} />
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}