import { CategoryPricingConfig } from "./types";

export const varmalaPricing: CategoryPricingConfig = {
  id: "varmala",
  categoryLabel: "Varmala Preservation",
  shortDescription: "Preserve your wedding varmala flowers in crystal-clear resin.",

  baseStepLabel: "Base Frame",
  bases: [
    { id: "acrylic", label: "Acrylic Frame", price: 0 },
    { id: "wooden", label: "Wooden Frame", price: 500 },
    { id: "teakwood", label: "Teakwood Frame", price: 1200 },
    { id: "led", label: "LED Base Stand", price: 1800 },
  ],

  sizeStepLabel: "Size",
  sizes: [
    { id: "8x8", label: "8×8 inch", price: 900 },
    { id: "12x12", label: "12×12 inch", price: 1800 },
    { id: "12x16", label: "12×16 inch", price: 2600 },
    { id: "15x15", label: "15×15 inch", price: 3000 },
    { id: "15x18", label: "15×18 inch", price: 3400 },
    { id: "18x18", label: "18×18 inch", price: 4500 },
    { id: "20x20", label: "20×20 inch", price: 6000 },
  ],

  addonsStepLabel: "Add-ons",
  addons: [
    { id: "photo", label: "Include Couple Photo", price: 400 },
    { id: "nameEngrave", label: "Name Engraving", price: 250 },
    { id: "dateEngrave", label: "Wedding Date Engraving", price: 200 },
    { id: "kalash", label: "Kalash / Kalangi Decoration", price: 600 },
    { id: "extraFlowers", label: "Extra Flowers / Petals Layer", price: 350 },
    { id: "giftBox", label: "Gift Box Packaging", price: 300 },
  ],

  disclaimer:
    "Final price may vary slightly based on actual garland size and design complexity. This is an estimate.",
};
