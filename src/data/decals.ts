/**
 * Local sample data for personalised decals and iron-on transfers.
 * Shaped like a future API/database response so it can be swapped later.
 */

export type DecalFontId = "chunky" | "handwritten" | "rounded" | "classic" | "playful";
export type DecalColourId = "pink" | "blue" | "lilac" | "mint" | "yellow" | "black" | "white";
export type DecalIconId = "rainbow" | "butterfly" | "flower" | "football" | "dinosaur" | "rocket";
export type DecalSizeId = "mini" | "medium" | "large";
export type DecalTypeId = "stick" | "iron";

export const decalFonts: { id: DecalFontId; label: string; className: string }[] = [
  { id: "chunky", label: "Chunky", className: "font-chunky font-extrabold" },
  { id: "handwritten", label: "Handwritten", className: "font-handwritten normal-case" },
  { id: "rounded", label: "Rounded", className: "font-rounded font-semibold" },
  { id: "classic", label: "Classic", className: "font-classic" },
  { id: "playful", label: "Playful", className: "font-playful" },
];

export const decalColours: {
  id: DecalColourId;
  label: string;
  text: string;
  swatch: string;
  light?: boolean;
}[] = [
  { id: "pink", label: "Pink", text: "text-vinyl-pink", swatch: "bg-vinyl-pink" },
  { id: "blue", label: "Blue", text: "text-vinyl-blue", swatch: "bg-vinyl-blue" },
  { id: "lilac", label: "Lilac", text: "text-vinyl-lilac", swatch: "bg-vinyl-lilac" },
  { id: "mint", label: "Mint", text: "text-vinyl-mint", swatch: "bg-vinyl-mint" },
  { id: "yellow", label: "Yellow", text: "text-vinyl-yellow", swatch: "bg-vinyl-yellow" },
  { id: "black", label: "Black", text: "text-vinyl-black", swatch: "bg-vinyl-black" },
  { id: "white", label: "White", text: "text-vinyl-white", swatch: "bg-vinyl-white", light: true },
];

export const decalIcons: { id: DecalIconId; label: string }[] = [
  { id: "rainbow", label: "Rainbow" },
  { id: "butterfly", label: "Butterfly" },
  { id: "flower", label: "Flower" },
  { id: "football", label: "Football" },
  { id: "dinosaur", label: "Dinosaur" },
  { id: "rocket", label: "Rocket" },
];

export const decalSizes: { id: DecalSizeId; label: string; hint: string }[] = [
  { id: "mini", label: "Mini", hint: "Pencils & pots" },
  { id: "medium", label: "Medium", hint: "Bottles & boxes" },
  { id: "large", label: "Large", hint: "Bags & kit" },
];

export const decalTypes: { id: DecalTypeId; label: string; hint: string }[] = [
  { id: "stick", label: "Stick It", hint: "Vinyl decal" },
  { id: "iron", label: "Iron It", hint: "Iron-on transfer" },
];

export type DecalDesign = {
  name: string;
  type: DecalTypeId;
  font: DecalFontId;
  colour: DecalColourId;
  icon: DecalIconId | null;
  size: DecalSizeId;
};

export const defaultDesign: DecalDesign = {
  name: "AMELIA",
  type: "stick",
  font: "chunky",
  colour: "pink",
  icon: "rainbow",
  size: "medium",
};

export const getFont = (id: DecalFontId) => decalFonts.find((f) => f.id === id)!;
export const getColour = (id: DecalColourId) => decalColours.find((c) => c.id === id)!;

export type ShopType = {
  slug: "stick-on-names" | "iron-on-names" | "name-packs" | "school-packs";
  title: string;
  copy: string;
  fromPrice: number;
  surface: string;
  sample: { name: string; font: DecalFontId; colour: DecalColourId; icon: DecalIconId };
};

export const shopTypes: ShopType[] = [
  {
    slug: "stick-on-names",
    title: "Stick-On Names",
    copy: "For bottles, lunchboxes, notebooks and more.",
    fromPrice: 2.95,
    surface: "bg-blush",
    sample: { name: "AMELIA", font: "chunky", colour: "pink", icon: "rainbow" },
  },
  {
    slug: "iron-on-names",
    title: "Iron-On Names",
    copy: "For bags, PE kits, clothing and fabric items.",
    fromPrice: 3.5,
    surface: "bg-sky",
    sample: { name: "HARRY", font: "rounded", colour: "blue", icon: "dinosaur" },
  },
  {
    slug: "name-packs",
    title: "Themed Name Packs",
    copy: "Names + little icons designed to go together.",
    fromPrice: 5.95,
    surface: "bg-lilac",
    sample: { name: "LILY", font: "handwritten", colour: "lilac", icon: "butterfly" },
  },
  {
    slug: "school-packs",
    title: "School Starter Packs",
    copy: "A mix of sizes for all their everyday stuff.",
    fromPrice: 9.95,
    surface: "bg-butter",
    sample: { name: "JACK", font: "playful", colour: "black", icon: "football" },
  },
];

export type ThemedPack = {
  id: string;
  name: string;
  icon: DecalIconId;
  sampleName: string;
  font: DecalFontId;
  colour: DecalColourId;
  surface: string;
  price: number;
};

export const themedPacks: ThemedPack[] = [
  { id: "pack-dinosaur", name: "Dinosaur Pack", icon: "dinosaur", sampleName: "HARRY", font: "chunky", colour: "mint", surface: "bg-mint/60", price: 6.95 },
  { id: "pack-rainbow", name: "Rainbow Pack", icon: "rainbow", sampleName: "AMELIA", font: "rounded", colour: "pink", surface: "bg-blush/70", price: 6.95 },
  { id: "pack-football", name: "Football Pack", icon: "football", sampleName: "JACK", font: "playful", colour: "black", surface: "bg-sky/70", price: 6.95 },
  { id: "pack-butterfly", name: "Butterfly Pack", icon: "butterfly", sampleName: "LILY", font: "handwritten", colour: "lilac", surface: "bg-lilac/70", price: 6.95 },
  { id: "pack-space", name: "Space Pack", icon: "rocket", sampleName: "OSCAR", font: "classic", colour: "blue", surface: "bg-butter/70", price: 6.95 },
  { id: "pack-flower", name: "Flower Power Pack", icon: "flower", sampleName: "SOPHIE", font: "rounded", colour: "yellow", surface: "bg-secondary", price: 6.95 },
];

export const starterPack = {
  name: "School Starter Pack",
  price: 9.95,
  contents: ["1 large name", "3 medium names", "6 mini names", "4 matching mini icons"],
};
