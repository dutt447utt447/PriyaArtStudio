import { CategoryPricingConfig } from "./types";

// PLACEHOLDER PRICING — Priya has not confirmed real numbers for this category
// yet. Structure/labels are inferred from existing site copy (COLLECTIONS in
// lib/constants.ts). Every price below is 0 and marked TODO — replace with
// real figures before launch, then flip placeholderPricing to false.
export const resinClockPricing: CategoryPricingConfig = {
  id: "resin-clock",
  categoryLabel: "Resin Wall Clock",
  shortDescription: "Statement wall clocks with marble texturing & 3D gold numerals.",
  placeholderPricing: true,

  baseStepLabel: "Base Style",
  bases: [
    { id: "standard", label: "Standard Resin Base", price: 0 }, // TODO: confirm price
    { id: "marble", label: "Marble-Effect Base", price: 0 }, // TODO: confirm price
    { id: "metallic-fluid", label: "Metallic Fluid Art Base", price: 0 }, // TODO: confirm price
  ],

  sizeStepLabel: "Size",
  sizes: [
    { id: "10in", label: "10 inch", price: 0 }, // TODO: confirm price
    { id: "12in", label: "12 inch", price: 0 }, // TODO: confirm price
    { id: "14in", label: "14 inch", price: 0 }, // TODO: confirm price
    { id: "16in", label: "16 inch", price: 0 }, // TODO: confirm price
  ],

  addonsStepLabel: "Add-ons",
  addons: [
    { id: "goldNumerals", label: "3D Gold Numerals", price: 0 }, // TODO: confirm price
    { id: "customColor", label: "Custom Color Theme", price: 0 }, // TODO: confirm price
    { id: "silentSweep", label: "Silent Sweep Mechanism", price: 0 }, // TODO: confirm price
    { id: "giftBox", label: "Gift Packaging", price: 0 }, // TODO: confirm price
  ],

  disclaimer:
    "Pricing for this category is not finalized yet. Final price may vary based on design complexity — please confirm with Priya on WhatsApp.",
};
