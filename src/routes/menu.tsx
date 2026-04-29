import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { MenuRow, SectionHeader } from "@/components/MenuBlock";
import { Squiggle } from "@/components/Squiggle";
import { foodSections, hotDrinks, coldDrinks } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Coffee & Crumbs" },
      { name: "description", content: "Full menu: foldovers, sandwiches, baked goods, hot drinks, cold drinks." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 mx-auto max-w-[1400px] px-4 md:px-10 py-8 md:py-20 w-full">
        {/* Title */}
        <div className="grid grid-cols-12 gap-6 pb-8 md:pb-12 border-b-2 border-foreground relative">
          <div className="col-span-12 md:col-span-8">
            <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3 md:mb-4">Section 02 — The Menu</div>
            <h1 className="font-black uppercase tracking-[-0.04em] leading-[0.85] text-[clamp(3.5rem,15vw,9rem)] text-primary">
              Menu
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col justify-end gap-4">
            <Squiggle className="w-full h-auto max-h-20 md:max-h-32" />
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Prices in South African Rand (R). Sizes: <strong className="text-foreground">R</strong> Regular · <strong className="text-foreground">L</strong> Large.
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-12 gap-10 md:gap-12 mt-10 md:mt-12">
          {/* Food */}
          <div className="col-span-12 lg:col-span-7 space-y-10 md:space-y-14">
            {foodSections.map((section, si) => (
              <div key={section.title}>
                <SectionHeader number={`F.${String(si + 1).padStart(2, "0")}`} title={section.title} />
                <div className="mt-2">
                  {section.items.map((item, i) => (
                    <MenuRow key={item.name} item={item} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Drinks */}
          <div className="col-span-12 lg:col-span-5 space-y-10 md:space-y-14">
            <div>
              <SectionHeader number="D.01" title="Hot Drinks" />
              <div className="hidden md:grid grid-cols-12 gap-4 pt-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <div className="col-span-1">№</div>
                <div className="col-span-7 md:col-span-8">Item</div>
                <div className="col-span-4 md:col-span-3 text-right">Price</div>
              </div>
              {hotDrinks.map((item, i) => <MenuRow key={item.name} item={item} index={i} />)}
            </div>

            <div>
              <SectionHeader number="D.02" title="Cold Drinks" />
              {coldDrinks.map((item, i) => <MenuRow key={item.name} item={item} index={i} />)}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}