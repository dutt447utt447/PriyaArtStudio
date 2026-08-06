"use client";

import { useMemo, useState, useEffect } from "react";
import { CategoryPricingConfig, PricingOption } from "@/data/pricing/types";

export interface BreakdownLine {
  label: string;
  amount: number;
}

export interface PriceCalculatorState {
  baseId: string | null;
  sizeId: string | null;
  addonIds: string[];
  quantity: number;
}

export interface PriceCalculatorResult {
  state: PriceCalculatorState;
  setBaseId: (id: string) => void;
  setSizeId: (id: string) => void;
  toggleAddon: (id: string) => void;
  setQuantity: (qty: number) => void;

  selectedBase: PricingOption | null;
  selectedSize: PricingOption | null;
  selectedAddons: PricingOption[];

  unitSubtotal: number;
  total: number;
  breakdown: BreakdownLine[];

  /** True once base + size are picked, i.e. enough to show a real total */
  isComplete: boolean;
}

/**
 * Reusable pricing engine shared by every category calculator.
 * Given a CategoryPricingConfig it owns the step selections (base, size,
 * add-ons, quantity) and derives the live subtotal/total + a readable
 * breakdown. Category-specific behaviour lives entirely in the config object
 * passed in — this hook has no category-specific logic.
 */
export function usePriceCalculator(config: CategoryPricingConfig): PriceCalculatorResult {
  const [baseId, setBaseId] = useState<string | null>(config.bases[0]?.id ?? null);
  const [sizeId, setSizeId] = useState<string | null>(null);
  const [addonIds, setAddonIds] = useState<string[]>([]);
  const [quantity, setQuantityState] = useState<number>(1);

  // Reset all selections whenever the active category config changes
  // (switching categories should never carry over another category's picks).
  useEffect(() => {
    setBaseId(config.bases[0]?.id ?? null);
    setSizeId(null);
    setAddonIds([]);
    setQuantityState(1);
  }, [config]);

  const selectedBase = useMemo(
    () => config.bases.find((b) => b.id === baseId) ?? null,
    [config.bases, baseId]
  );
  const selectedSize = useMemo(
    () => config.sizes.find((s) => s.id === sizeId) ?? null,
    [config.sizes, sizeId]
  );
  const selectedAddons = useMemo(
    () => config.addons.filter((a) => addonIds.includes(a.id)),
    [config.addons, addonIds]
  );

  const toggleAddon = (id: string) => {
    setAddonIds((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  };

  const setQuantity = (qty: number) => {
    const safeQty = Number.isFinite(qty) ? Math.max(1, Math.floor(qty)) : 1;
    setQuantityState(safeQty);
  };

  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const unitSubtotal = (selectedBase?.price ?? 0) + (selectedSize?.price ?? 0) + addonsTotal;
  const total = unitSubtotal * quantity;

  const breakdown: BreakdownLine[] = useMemo(() => {
    const lines: BreakdownLine[] = [];
    if (selectedSize) lines.push({ label: `Size: ${selectedSize.label}`, amount: selectedSize.price });
    if (selectedBase) lines.push({ label: `Base: ${selectedBase.label}`, amount: selectedBase.price });
    selectedAddons.forEach((a) => lines.push({ label: a.label, amount: a.price }));
    return lines;
  }, [selectedBase, selectedSize, selectedAddons]);

  return {
    state: { baseId, sizeId, addonIds, quantity },
    setBaseId,
    setSizeId,
    toggleAddon,
    setQuantity,
    selectedBase,
    selectedSize,
    selectedAddons,
    unitSubtotal,
    total,
    breakdown,
    isComplete: Boolean(selectedBase && selectedSize),
  };
}
