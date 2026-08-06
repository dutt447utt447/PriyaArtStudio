// Shared shape for every category's pricing config.
// To add a new category calculator: create data/pricing/[category].ts using this
// shape, then register it in data/pricing/index.ts. No calculator logic/UI changes needed.

export interface PricingOption {
  id: string;
  label: string;
  /** Flat add-on amount. Ignored for base options that set `priceBySize`. */
  price: number;
  /**
   * Base-only: some base materials (e.g. a solid resin base) cost more
   * resin/curing time as the piece gets bigger, so their surcharge isn't a
   * flat number — it depends on which size the customer picked. When set,
   * this map (keyed by a `sizes[].id`) is used instead of `price`. If the
   * customer hasn't picked a size yet, the option shows as "priced by size"
   * until they do.
   */
  priceBySize?: Record<string, number>;
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
