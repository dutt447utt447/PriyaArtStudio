// Shared shape for every category's pricing config.
// To add a new category calculator: create data/pricing/[category].ts using this
// shape, then register it in data/pricing/index.ts. No calculator logic/UI changes needed.

export interface PricingOption {
  id: string;
  label: string;
  price: number;
}

export interface CategoryPricingConfig {
  /** Stable slug, also used as the ?category= query param value */
  id: string;
  categoryLabel: string;
  /** Short one-line description shown under the category label */
  shortDescription?: string;

  baseStepLabel: string;
  bases: PricingOption[];

  sizeStepLabel: string;
  sizes: PricingOption[];

  addonsStepLabel: string;
  addons: PricingOption[];

  disclaimer: string;

  /**
   * True when prices in this config are unconfirmed placeholders (0, marked
   * TODO). The UI shows a banner warning staff/customers this category's
   * pricing isn't final yet.
   */
  placeholderPricing?: boolean;
}
