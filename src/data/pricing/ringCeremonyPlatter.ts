import { CategoryPricingConfig } from "./types";

// PLACEHOLDER PRICING — Priya has not confirmed real numbers for this category
// yet. Structure/labels are inferred from existing site copy (COLLECTIONS in
// lib/constants.ts). Every price below is 0 and marked TODO — replace with
// real figures before launch, then flip placeholderPricing to false.
export const ringCeremonyPlatterPricing: CategoryPricingConfig = {
  id: "ring-ceremony-platter",
  categoryLabel: "Ring Ceremony Platter",
  shortDescription: "Bespoke engagement ring exchange trays with floral hoops & name plaques.",
  placeholderPricing: true,

  baseStepLabel: "Tray Material",
  bases: [
    { id: "wooden-tray", label: "Wooden Tray", price: 0 }, // TODO: confirm price
    { id: "acrylic-tray", label: "Acrylic Tray", price: 0 }, // TODO: confirm price
    { id: "velvet-lined-tray", label: "Velvet-Lined Tray", price: 0 }, // TODO: confirm price
    { id: "rosewood-tray", label: "Premium Rosewood Tray", price: 0 }, // TODO: confirm price
  ],

  sizeStepLabel: "Size",
  sizes: [
    { id: "small", label: "Small (10 inch)", price: 0 }, // TODO: confirm price
    { id: "medium", label: "Medium (12 inch)", price: 0 }, // TODO: confirm price
    { id: "large", label: "Large (14 inch)", price: 0 }, // TODO: confirm price
    { id: "xl", label: "Extra Large (16 inch)", price: 0 }, // TODO: confirm price
  ],

  addonsStepLabel: "Add-ons",
  addons: [
    { id: "nameEngrave", label: "Couple Name Engraving", price: 0 }, // TODO: confirm price
    { id: "photoFrame", label: "Photo Frame Addition", price: 0 }, // TODO: confirm price
    { id: "ledLighting", label: "LED Lighting", price: 0 }, // TODO: confirm price
    { id: "extraFlowers", label: "Extra Floral Work", price: 0 }, // TODO: confirm price
    { id: "giftBox", label: "Gift Box Packaging", price: 0 }, // TODO: confirm price
  ],

  disclaimer:
    "Pricing for this category is not finalized yet. Final price may vary based on design complexity — please confirm with Priya on WhatsApp.",
};
