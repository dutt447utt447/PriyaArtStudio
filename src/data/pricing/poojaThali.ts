import { CategoryPricingConfig } from "./types";

// Pricing estimated from market research (IndiaMART, ResinVilla, Handarted,
// ClassyArtZ — handmade resin pooja thalis run roughly ₹900–₹4,500 depending
// on size/finish). Smallest size is anchored to the "Starting from ₹1,999"
// already advertised on the homepage collections card. These are informed
// estimates, not numbers Priya has personally confirmed — please review
// before treating as final.
export const poojaThaliPricing: CategoryPricingConfig = {
  id: "pooja-thali",
  categoryLabel: "Pooja Thali",
  shortDescription: "Royal ritual thalis with dried marigolds, brass holders & gold veins.",

  baseStepLabel: "Base Style",
  bases: [
    { id: "standard", label: "Standard Resin Base", price: 0 },
    { id: "brass-accent", label: "Brass Accent Base", price: 400 },
    { id: "gold-trim", label: "Premium Gold-Trim Base", price: 800 },
  ],

  sizeStepLabel: "Size",
  sizes: [
    { id: "8in", label: "Small (8 inch)", price: 1999 },
    { id: "10in", label: "Medium (10 inch)", price: 2499 },
    { id: "12in", label: "Large (12 inch)", price: 3199 },
    { id: "14in", label: "Extra Large (14 inch)", price: 3999 },
  ],

  addonsStepLabel: "Add-ons",
  addons: [
    { id: "petalEmbed", label: "Marigold / Petal Embedding", price: 250 },
    { id: "nameEngrave", label: "Name Engraving", price: 200 },
    { id: "kalash", label: "Kalash Decoration", price: 450 },
    { id: "giftBox", label: "Gift Box Packaging", price: 250 },
  ],

  disclaimer:
    "Final price may vary slightly based on actual design complexity and finish. This is an estimate.",
};
