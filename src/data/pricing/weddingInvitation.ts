import { CategoryPricingConfig } from "./types";

// Pricing estimated from market research (IndiaMART, ResinVilla, Artsty,
// CanvasByPriya — handmade resin wedding card preservation frames run
// roughly ₹800–₹8,000 depending on size/materials, premium ones ₹2,500+).
// Smallest size is anchored to the "Starting from ₹2,799" already
// advertised on the homepage collections card. These are informed
// estimates, not numbers Priya has personally confirmed — please review
// before treating as final.
export const weddingInvitationPricing: CategoryPricingConfig = {
  id: "wedding-invitation",
  categoryLabel: "Wedding Invitation Preservation",
  shortDescription: "Preserve your wedding card in an ultra-transparent resin frame.",

  baseStepLabel: "Frame Type",
  bases: [
    { id: "acrylic", label: "Acrylic Frame", price: 0 },
    { id: "wooden", label: "Wooden Frame", price: 400 },
    { id: "rosewood", label: "Premium Rosewood Frame", price: 900 },
  ],

  sizeStepLabel: "Size",
  sizes: [
    { id: "a5", label: "A5 Frame", price: 2799 },
    { id: "a4", label: "A4 Frame", price: 3799 },
    { id: "a3", label: "A3 Frame", price: 4999 },
  ],

  addonsStepLabel: "Add-ons",
  addons: [
    { id: "couplePhoto", label: "Couple Photo Addition", price: 400 },
    { id: "nameDateEngrave", label: "Name & Date Engraving", price: 250 },
    { id: "goldFoil", label: "Gold Foil Accent", price: 350 },
    { id: "giftBox", label: "Gift Box Packaging", price: 300 },
  ],

  disclaimer:
    "Final price may vary slightly based on actual design complexity and finish. This is an estimate.",
};
