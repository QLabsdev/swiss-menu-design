import type { MenuItem } from "@/data/menu";

export function MenuRow({ item, index }: { item: MenuItem; index: number }) {
  return (
    <div className="grid grid-cols-12 gap-4 py-3 border-t border-foreground/15">
      <div className="col-span-1 text-xs text-muted-foreground swiss-num pt-1">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="col-span-7 md:col-span-8">
        <div className="font-bold uppercase tracking-tight text-[15px] leading-tight">{item.name}</div>
        {item.desc && (
          <div className="text-sm text-muted-foreground mt-1 leading-snug">{item.desc}</div>
        )}
      </div>
      <div className="col-span-4 md:col-span-3 text-right swiss-num font-medium">
        {item.price && <div>{item.price}</div>}
        {item.prices && (
          <div className="flex justify-end gap-4 text-sm">
            {item.prices.map((p) => (
              <div key={p.label + p.value}>
                {p.label && <span className="text-muted-foreground text-[10px] uppercase tracking-widest mr-1">{p.label}</span>}
                <span>{p.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="grid grid-cols-12 gap-4 items-end pb-3 border-b-2 border-foreground">
      <div className="col-span-1 text-xs text-muted-foreground swiss-num">{number}</div>
      <h2 className="col-span-11 font-black uppercase tracking-tight text-2xl md:text-3xl leading-none">
        {title}
      </h2>
    </div>
  );
}