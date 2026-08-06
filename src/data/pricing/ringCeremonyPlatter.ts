import { CategoryPricingConfig } from "./types";

// Pricing estimated from market research (IndiaMART, Giftlaya, Shaahi Decor,
// Rezica Arts Studio, Etsy India — handmade resin ring platters run roughly
// ₹1,200–₹4,000 depending on size/customization). Smallest size is anchored
// to the "Starting from ₹2,299" already advertised on the homepage
// collections card. These are informed estimates, not numbers Priya has
// personally confirmed — please review before treating as final.
export const ringCeremonyPlatterPricing: CategoryPricingConfig = {
  id: "ring-ceremony-platter",
  categoryLabel: "Ring Ceremony Platter",
  shortDescription: "Bespoke engagement ring exchange trays with floral hoops & name plaques.",

  baseStepLabel: "Tray Material",
  bases: [
    { id: "wooden-tray", label: "Wooden Tray", price: 0 },
    { id: "acrylic-tray", label: "Acrylic Tray", price: 0 },
    { id: "velvet-lined-tray", label: "Velvet-Lined Tray", price: 300 },
    { id: "rosewood-tray", label: "Premium Rosewood Tray", price: 700 },
  ],

  sizeStepLabel: "Size",
  sizes: [
    { id: "small", label: "Small (10 inch)", price: 2299 },
    { id: "medium", label: "Medium (12 inch)", price: 2799 },
    { id: "large", label: "Large (14 inch)", price: 3299 },
    { id: "xl", label: "Extra Large (16 inch)", price: 3999 },
  ],

  addonsStepLabel: "Add-ons",
  addons: [
    { id: "nameEngrave", label: "Couple Name Engraving", price: 300 },
    { id: "photoFrame", label: "Photo Frame Addition", price: 400 },
    { id: "ledLighting", label: "LED Lighting", price: 500 },
    { id: "extraFlowers", label: "Extra Floral Work", price: 350 },
    { id: "giftBox", label: "Gift Box Packaging", price: 250 },
  ],

  disclaimer:
    "Final price may vary slightly based on actual design complexity and finish. This is an estimate.",
};
