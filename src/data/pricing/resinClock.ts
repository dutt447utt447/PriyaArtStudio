import { CategoryPricingConfig } from "./types";

// Pricing estimated from market research (Pacific Resin Art, Novo Magic,
// Artsty, Anshya Handmade — handmade resin wall clocks run roughly
// ₹1,800–₹4,000 for artisan pieces). Smallest size is anchored to the
// "Starting from ₹3,999" already advertised on the homepage collections
// card. These are informed estimates, not numbers Priya has personally
// confirmed — please review before treating as final.
export const resinClockPricing: CategoryPricingConfig = {
  id: "resin-clock",
  categoryLabel: "Resin Wall Clock",
  shortDescription: "Statement wall clocks with marble texturing & 3D gold numerals.",

  baseStepLabel: "Base Style",
  bases: [
    { id: "standard", label: "Standard Resin Base", price: 0 },
    { id: "marble", label: "Marble-Effect Base", price: 500 },
    { id: "metallic-fluid", label: "Metallic Fluid Art Base", price: 800 },
  ],

  sizeStepLabel: "Size",
  sizes: [
    { id: "10in", label: "10 inch", price: 3999 },
    { id: "12in", label: "12 inch", price: 4799 },
    { id: "14in", label: "14 inch", price: 5799 },
    { id: "16in", label: "16 inch", price: 6999 },
  ],

  addonsStepLabel: "Add-ons",
  addons: [
    { id: "goldNumerals", label: "3D Gold Numerals", price: 350 },
    { id: "customColor", label: "Custom Color Theme", price: 300 },
    { id: "silentSweep", label: "Silent Sweep Mechanism", price: 250 },
    { id: "giftBox", label: "Gift Packaging", price: 250 },
  ],

  disclaimer:
    "Final price may vary slightly based on actual design complexity and finish. This is an estimate.",
};
