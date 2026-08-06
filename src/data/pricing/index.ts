import { CategoryPricingConfig } from "./types";
import { varmalaPricing } from "./varmala";
import { ringCeremonyPlatterPricing } from "./ringCeremonyPlatter";
import { poojaThaliPricing } from "./poojaThali";
import { weddingInvitationPricing } from "./weddingInvitation";
import { resinClockPricing } from "./resinClock";

// Registry: category id -> config. Order here = order of category tabs on the
// calculator page (Varmala first, per site's flagship product).
// To add a new category later: create data/pricing/[name].ts (same shape as
// varmala.ts), import it here, and add it to this array. No other code needs
// to change — the page, hook, and shared UI all read from this registry.
export const PRICING_CATEGORIES: CategoryPricingConfig[] = [
  varmalaPricing,
  ringCeremonyPlatterPricing,
  poojaThaliPricing,
  weddingInvitationPricing,
  resinClockPricing,
];

export const PRICING_REGISTRY: Record<string, CategoryPricingConfig> = Object.fromEntries(
  PRICING_CATEGORIES.map((config) => [config.id, config])
);

export const DEFAULT_CATEGORY_ID = varmalaPricing.id;

export type { CategoryPricingConfig, PricingOption } from "./types";
