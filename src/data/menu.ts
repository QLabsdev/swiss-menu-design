export type MenuItem = {
  name: string;
  desc?: string;
  price?: string;
  prices?: { label: string; value: string }[];
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export const foodSections: MenuSection[] = [
  {
    title: "Signature Foldovers",
    items: [
      { name: "Crispy or Grilled Chicken Foldover", desc: "With fresh greens & a creamy sauce", price: "R79" },
      { name: "Steak Foldover", desc: "With fresh greens & a savoury house sauce", price: "R99" },
      { name: "Falafel Foldover", desc: "With fresh greens & hummus", price: "R79" },
    ],
  },
  {
    title: "Sandwiches",
    items: [
      { name: "Saucy Chicken", desc: "Fresh greens, tender chicken & creamy sauce", prices: [{ label: "Open", value: "R59" }, { label: "Closed", value: "R75" }] },
      { name: "Steak Melt", desc: "Juicy steak strips with cheese", prices: [{ label: "Open", value: "R89" }, { label: "Closed", value: "R99" }] },
      { name: "Cheese & Tomato", desc: "Classic comfort", price: "R49" },
      { name: "Avo on Toast", desc: "Hummus, smashed avo & sesame", price: "R59" },
    ],
  },
  {
    title: "Cafe Classics",
    items: [
      { name: "Chicken Strips & Chips", desc: "Crispy golden fried chicken strips, served with seasoned fries & your choice of a dipping sauce", price: "R69" },
    ],
  },
  {
    title: "Baked Goods",
    items: [
      { name: "Muffins", desc: "Bran · Choc chip · Blueberry · Lemon poppyseed · Cappuccino", price: "R32" },
      { name: "Scones", price: "R30" },
      { name: "Croissants", desc: "Plain R36 · Pain au Chocolat R35 · Almond R40" },
      { name: "Mini Pastries (sweet & savoury)", price: "R23" },
      { name: "Brownies", desc: "Regular R30 · Assorted R40" },
      { name: "Mini Cakes", desc: "Matilda R80 · Carrot R70 · Caramel R70" },
      { name: "Individual Baked Cheesecakes", price: "R40" },
      { name: "Belgian Waffles", desc: "Ask our staff about our current selection" },
    ],
  },
  {
    title: "Add Ons",
    items: [{ name: "Portion of Chips", price: "R15" }],
  },
];

export const hotDrinks: MenuItem[] = [
  { name: "Espresso", prices: [{ label: "R", value: "R22" }] },
  { name: "Americano", prices: [{ label: "R", value: "R30" }, { label: "L", value: "R35" }] },
  { name: "Cortado", prices: [{ label: "R", value: "R34" }] },
  { name: "Cappuccino", prices: [{ label: "R", value: "R36" }, { label: "L", value: "R40" }] },
  { name: "Latte", desc: "Flavours: Caramel · Hazelnut · Vanilla", prices: [{ label: "R", value: "R40" }, { label: "L", value: "R40 +R10" }] },
  { name: "Chai Latte", prices: [{ label: "R", value: "R45" }] },
  { name: "Flat White", prices: [{ label: "R", value: "R42" }] },
  { name: "Vietnamese", prices: [{ label: "R", value: "R53" }, { label: "L", value: "R58" }] },
  { name: "Mocha", prices: [{ label: "R", value: "R46" }, { label: "L", value: "R52" }] },
  { name: "Hot Chocolate", prices: [{ label: "R", value: "R45" }, { label: "L", value: "R50" }] },
  { name: "Spiced Chai", prices: [{ label: "R", value: "R45" }, { label: "L", value: "R50" }] },
  { name: "Tea", desc: "5 Roses · Rooibos & flavours", prices: [{ label: "Cup", value: "R20" }, { label: "Pot", value: "R30" }] },
  { name: "Decaf", prices: [{ label: "+R6", value: "+R8" }] },
  { name: "Almond / Oat Milk", prices: [{ label: "+R10", value: "+R12" }] },
  { name: "Extra Shot", prices: [{ label: "+R10", value: "+R12" }] },
];

export const coldDrinks: MenuItem[] = [
  { name: "Crushed Ice Coffee", prices: [{ label: "R", value: "R55" }, { label: "L", value: "R60" }] },
  { name: "Vietnamese Ice Coffee", prices: [{ label: "R", value: "R50" }, { label: "L", value: "R55" }] },
  { name: "Matcha OG", prices: [{ label: "L", value: "R70" }] },
  { name: "Matcha Strawberry / Vanilla", prices: [{ label: "L", value: "R80" }] },
  { name: "Milkshakes", desc: "Vanilla · Chocolate · Strawberry · Lime · Bubblegum", prices: [{ label: "L", value: "R50" }] },
  { name: "Cordials", desc: "Cola tonic · Passion fruit · Lime & lemon · Watermelon · Blue raspberry (crushed or regular ice)", prices: [{ label: "L", value: "R55" }] },
  { name: "Daiquiris", desc: "Strawberry · Mango · Mojito", prices: [{ label: "L", value: "R65" }] },
  { name: "Bashews Cans", prices: [{ label: "", value: "R12" }] },
  { name: "Water (500ml)", prices: [{ label: "", value: "R10" }] },
];

export const tradingHours = [
  { day: "Monday", hours: "06:00 — 16:00" },
  { day: "Tuesday", hours: "06:00 — 16:00" },
  { day: "Wednesday", hours: "06:00 — 16:00" },
  { day: "Thursday", hours: "06:00 — 16:00" },
  { day: "Friday", hours: "06:00 — 22:00", note: "Closed 12:00 — 14:00" },
  { day: "Saturday", hours: "06:00 — 22:00" },
  { day: "Sunday", hours: "06:00 — 16:00" },
];

export const festiveHours = [
  { day: "Monday", hours: "07:00 — 17:00" },
  { day: "Tuesday", hours: "07:00 — 17:00" },
  { day: "Wednesday", hours: "07:00 — 17:00" },
  { day: "Thursday", hours: "07:00 — 17:00" },
  { day: "Friday", hours: "06:00 — 22:00", note: "Closed 12:30 — 13:30" },
  { day: "Saturday", hours: "06:00 — 22:00" },
  { day: "Sunday", hours: "06:00 — 20:00" },
];