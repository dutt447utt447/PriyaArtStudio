import { CategoryPricingConfig } from "./types";

// PLACEHOLDER PRICING — Priya has not confirmed real numbers for this category
// yet. Structure/labels are inferred from existing site copy (COLLECTIONS in
// lib/constants.ts). Every price below is 0 and marked TODO — replace with
// real figures before launch, then flip placeholderPricing to false.
export const poojaThaliPricing: CategoryPricingConfig = {
  id: "pooja-thali",
  categoryLabel: "Pooja Thali",
  shortDescription: "Royal ritual thalis with dried marigolds, brass holders & gold veins.",
  placeholderPricing: true,

  baseStepLabel: "Base Style",
  bases: [
    { id: "standard", label: "Standard Resin Base", price: 0 }, // TODO: confirm price
    { id: "brass-accent", label: "Brass Accent Base", price: 0 }, // TODO: confirm price
    { id: "gold-trim", label: "Premium Gold-Trim Base", price: 0 }, // TODO: confirm price
  ],

  sizeStepLabel: "Size",
  sizes: [
    { id: "8in", label: "Small (8 inch)", price: 0 }, // TODO: confirm price
    { id: "10in", label: "Medium (10 inch)", price: 0 }, // TODO: confirm price
    { id: "12in", label: "Large (12 inch)", price: 0 }, // TODO: confirm price
    { id: "14in", label: "Extra Large (14 inch)", price: 0 }, // TODO: confirm price
  ],

  addonsStepLabel: "Add-ons",
  addons: [
    { id: "petalEmbed", label: "Marigold / Petal Embedding", price: 0 }, // TODO: confirm price
    { id: "nameEngrave", label: "Name Engraving", price: 0 }, // TODO: confirm price
    { id: "kalash", label: "Kalash Decoration", price: 0 }, // TODO: confirm price
    { id: "giftBox", label: "Gift Box Packaging", price: 0 }, // TODO: confirm price
  ],

  disclaimer:
    "Pricing for this category is not finalized yet. Final price may vary based on design complexity — please confirm with Priya on WhatsApp.",
};
