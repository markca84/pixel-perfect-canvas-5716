import bottle from "@/assets/product-bottle.jpg";
import lunchBag from "@/assets/product-lunch-bag.jpg";
import pencilCase from "@/assets/product-pencil-case.jpg";
import stickers from "@/assets/product-stickers.jpg";
import catParties from "@/assets/cat-parties.jpg";
import catGames from "@/assets/cat-games.jpg";
import catGifts from "@/assets/cat-gifts.jpg";
import catSeasonal from "@/assets/cat-seasonal.jpg";

/**
 * Local sample data. Shaped like a future API/database response so it can be
 * swapped for a remote source later without touching components.
 */

export type CategorySlug =
  | "personalised"
  | "parties"
  | "games"
  | "gifts"
  | "seasonal";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: CategorySlug;
  blurb: string;
  colours?: { name: string; token: string }[];
  personalisable: boolean;
};

export const colourways = {
  pastels: [
    { name: "Blush pink", token: "bg-blush" },
    { name: "Sky blue", token: "bg-sky" },
    { name: "Butter yellow", token: "bg-butter" },
    { name: "Mint green", token: "bg-mint" },
    { name: "Lilac", token: "bg-lilac" },
  ],
};

export const products: Product[] = [
  {
    id: "pb-001",
    slug: "personalised-kids-water-bottle",
    name: "Personalised Kids Water Bottle",
    price: 14.95,
    image: bottle,
    category: "personalised",
    blurb: "Leak-proof 500ml bottle with your child's name, made in-house.",
    colours: colourways.pastels,
    personalisable: true,
  },
  {
    id: "pb-002",
    slug: "personalised-lunch-bag",
    name: "Personalised Lunch Bag",
    price: 14.95,
    image: lunchBag,
    category: "personalised",
    blurb: "Insulated, wipe-clean lunch bag with a big friendly name print.",
    colours: colourways.pastels,
    personalisable: true,
  },
  {
    id: "pb-003",
    slug: "personalised-pencil-case",
    name: "Personalised Pencil Case",
    price: 9.95,
    image: pencilCase,
    category: "personalised",
    blurb: "Roomy zip case that never gets mixed up at school.",
    colours: colourways.pastels,
    personalisable: true,
  },
  {
    id: "pb-004",
    slug: "name-sticker-pack",
    name: "Name Sticker Pack",
    price: 5.95,
    image: stickers,
    category: "personalised",
    blurb: "60 waterproof, dishwasher-safe name labels for everything.",
    colours: colourways.pastels,
    personalisable: true,
  },
  {
    id: "pb-005",
    slug: "personalised-cake-topper",
    name: "Personalised Cake Topper",
    price: 8.95,
    image: catParties,
    category: "parties",
    blurb: "Hand-finished topper with any name, age or message.",
    personalisable: true,
  },
  {
    id: "pb-006",
    slug: "party-bag-bundle",
    name: "Party Bag Bundle",
    price: 24.95,
    image: catParties,
    category: "parties",
    blurb: "Eight filled party bags with personalised name tags.",
    personalisable: true,
  },
  {
    id: "pb-007",
    slug: "personalised-memory-game",
    name: "Personalised Memory Game",
    price: 19.95,
    image: catGames,
    category: "games",
    blurb: "Wooden memory game printed with your own family photos.",
    personalisable: true,
  },
  {
    id: "pb-008",
    slug: "family-quiz-cards",
    name: "Family Quiz Cards",
    price: 12.95,
    image: catGames,
    category: "games",
    blurb: "A deck of quiz cards with your household's names on it.",
    personalisable: true,
  },
  {
    id: "pb-009",
    slug: "new-baby-gift-box",
    name: "New Baby Gift Box",
    price: 32.0,
    image: catGifts,
    category: "gifts",
    blurb: "Keepsake box with a personalised print and soft gift wrap.",
    personalisable: true,
  },
  {
    id: "pb-010",
    slug: "personalised-keepsake-print",
    name: "Personalised Keepsake Print",
    price: 16.5,
    image: catGifts,
    category: "gifts",
    blurb: "A3 print with a name and date, printed on thick cotton paper.",
    personalisable: true,
  },
  {
    id: "pb-011",
    slug: "christmas-eve-box",
    name: "Christmas Eve Box",
    price: 22.95,
    image: catSeasonal,
    category: "seasonal",
    blurb: "Sturdy wooden box with a hand-finished name plaque.",
    personalisable: true,
  },
  {
    id: "pb-012",
    slug: "easter-name-basket",
    name: "Easter Name Basket",
    price: 13.95,
    image: catSeasonal,
    category: "seasonal",
    blurb: "Pastel basket with a personalised ribbon tag.",
    personalisable: true,
  },
];

export type Category = {
  slug: CategorySlug;
  name: string;
  tagline: string;
  image: string;
  surface: string;
};

export const categories: Category[] = [
  {
    slug: "personalised",
    name: "Personalised",
    tagline: "Bottles, bags and labels with their name on",
    image: bottle,
    surface: "bg-blush",
  },
  {
    slug: "parties",
    name: "Parties",
    tagline: "Cake toppers, party bags and table bits",
    image: catParties,
    surface: "bg-butter",
  },
  {
    slug: "games",
    name: "Games",
    tagline: "Games made about your own family",
    image: catGames,
    surface: "bg-mint",
  },
  {
    slug: "gifts",
    name: "Gifts",
    tagline: "Keepsakes that feel properly thought about",
    image: catGifts,
    surface: "bg-lilac",
  },
  {
    slug: "seasonal",
    name: "Seasonal",
    tagline: "Christmas, Easter and everything between",
    image: catSeasonal,
    surface: "bg-sky",
  },
];

export const getProductsByCategory = (slug: CategorySlug) =>
  products.filter((product) => product.category === slug);

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

export const featuredProducts = products.slice(0, 4);

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
    price,
  );
