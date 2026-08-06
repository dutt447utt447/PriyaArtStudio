import { CategoryPricingConfig } from "./types";

// PLACEHOLDER PRICING — Priya has not confirmed real numbers for this category
// yet. Structure/labels are inferred from existing site copy (COLLECTIONS in
// lib/constants.ts). Every price below is 0 and marked TODO — replace with
// real figures before launch, then flip placeholderPricing to false.
export const weddingInvitationPricing: CategoryPricingConfig = {
  id: "wedding-invitation",
  categoryLabel: "Wedding Invitation Preservation",
  shortDescription: "Preserve your wedding card in an ultra-transparent resin frame.",
  placeholderPricing: true,

  baseStepLabel: "Frame Type",
  bases: [
    { id: "acrylic", label: "Acrylic Frame", price: 0 }, // TODO: confirm price
    { id: "wooden", label: "Wooden Frame", price: 0 }, // TODO: confirm price
    { id: "rosewood", label: "Premium Rosewood Frame", price: 0 }, // TODO: confirm price
  ],

  sizeStepLabel: "Size",
  sizes: [
    { id: "a5", label: "A5 Frame", price: 0 }, // TODO: confirm price
    { id: "a4", label: "A4 Frame", price: 0 }, // TODO: confirm price
    { id: "a3", label: "A3 Frame", price: 0 }, // TODO: confirm price
  ],

  addonsStepLabel: "Add-ons",
  addons: [
    { id: "couplePhoto", label: "Couple Photo Addition", price: 0 }, // TODO: confirm price
    { id: "nameDateEngrave", label: "Name & Date Engraving", price: 0 }, // TODO: confirm price
    { id: "goldFoil", label: "Gold Foil Accent", price: 0 }, // TODO: confirm price
    { id: "giftBox", label: "Gift Box Packaging", price: 0 }, // TODO: confirm price
  ],

  disclaimer:
    "Pricing for this category is not finalized yet. Final price may vary based on design complexity — please confirm with Priya on WhatsApp.",
};
