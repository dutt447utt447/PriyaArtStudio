"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus, Plus, MessageCircle, AlertTriangle } from "lucide-react";
import { CategoryPricingConfig } from "@/data/pricing/types";
import { usePriceCalculator, getBasePrice } from "@/hooks/usePriceCalculator";
import { PlaceOrderModal } from "./PlaceOrderModal";

function formatCurrency(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

interface CalculatorCoreProps {
  config: CategoryPricingConfig;
}

/**
 * Shared calculator UI: base -> size -> add-ons -> quantity step flow, live
 * breakdown, and the "Place Order Now" trigger. All category-specific data
 * comes from `config` — this component has no category-specific branching,
 * so a new category is just a new config file passed in here.
 */
export function CalculatorCore({ config }: CalculatorCoreProps) {
  const calc = usePriceCalculator(config);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_380px] gap-6 lg:gap-8">
      {/* Step flow */}
      <div className="space-y-6 sm:space-y-8">
        {config.placeholderPricing && (
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="font-body text-sm text-amber-800">
              Pricing for <strong>{config.categoryLabel}</strong> is not finalized yet — the
              amounts below are placeholders. Use "Place Order Now" to get a real quote from
              Priya on WhatsApp.
            </p>
          </div>
        )}

        {/* Step 1 — Base */}
        <StepSection stepNumber={1} title={config.baseStepLabel}>
          <OptionGrid>
            {config.bases.map((base) => {
              const pricedBySize = Boolean(base.priceBySize);
              const amount = getBasePrice(base, calc.state.sizeId);
              const priceLabel =
                pricedBySize && !calc.state.sizeId
                  ? "Priced by size ↓"
                  : amount > 0
                  ? `+${formatCurrency(amount)}`
                  : "Included";
              return (
                <OptionCard
                  key={base.id}
                  label={base.label}
                  priceLabel={priceLabel}
                  selected={calc.state.baseId === base.id}
                  onClick={() => calc.setBaseId(base.id)}
                />
              );
            })}
          </OptionGrid>
        </StepSection>

        {/* Step 2 — Size */}
        <StepSection stepNumber={2} title={config.sizeStepLabel}>
          <OptionGrid>
            {config.sizes.map((size) => (
              <OptionCard
                key={size.id}
                label={size.label}
                priceLabel={formatCurrency(size.price)}
                selected={calc.state.sizeId === size.id}
                onClick={() => calc.setSizeId(size.id)}
              />
            ))}
          </OptionGrid>
        </StepSection>

        {/* Step 3 — Add-ons */}
        <StepSection stepNumber={3} title={config.addonsStepLabel}>
          <OptionGrid>
            {config.addons.map((addon) => (
              <OptionCard
                key={addon.id}
                label={addon.label}
                priceLabel={`+${formatCurrency(addon.price)}`}
                selected={calc.state.addonIds.includes(addon.id)}
                onClick={() => calc.toggleAddon(addon.id)}
                multiSelect
              />
            ))}
          </OptionGrid>
        </StepSection>

        {/* Step 4 — Quantity */}
        <StepSection stepNumber={4} title="Quantity">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => calc.setQuantity(calc.state.quantity - 1)}
              aria-label="Decrease quantity"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-stone-300 text-stone-700 hover:border-gold-accent hover:text-gold-dark transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <input
              type="number"
              min={1}
              value={calc.state.quantity}
              onChange={(e) => calc.setQuantity(parseInt(e.target.value, 10))}
              className="w-20 text-center font-heading text-2xl font-bold text-stone-900 border border-stone-300 rounded-xl py-2 focus:outline-none focus:ring-2 focus:ring-gold-accent/50"
            />
            <button
              type="button"
              onClick={() => calc.setQuantity(calc.state.quantity + 1)}
              aria-label="Increase quantity"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-stone-300 text-stone-700 hover:border-gold-accent hover:text-gold-dark transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </StepSection>
      </div>

      {/* Step 5 — Result / breakdown (sticky on desktop) */}
      <div className="lg:sticky lg:top-24 h-fit">
        <div className="rounded-3xl bg-stone-900 text-white p-6 sm:p-8 shadow-luxury">
          <p className="font-button text-xs uppercase tracking-widest text-gold-accent font-bold mb-4">
            Price Breakdown
          </p>

          <div className="space-y-2.5 mb-4">
            <AnimatePresence mode="popLayout">
              {calc.breakdown.length === 0 && (
                <p className="font-body text-sm text-stone-400">
                  Select options to see your price.
                </p>
              )}
              {calc.breakdown.map((line) => (
                <motion.div
                  key={line.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-between text-sm font-body"
                >
                  <span className="text-stone-300">{line.label}</span>
                  <span className="text-white font-medium">
                    {line.amount > 0 ? `+${formatCurrency(line.amount)}` : "—"}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="border-t border-stone-700 pt-4 mb-1 flex items-center justify-between text-sm font-body text-stone-300">
            <span>Subtotal (×{calc.state.quantity})</span>
            <span>{formatCurrency(calc.total)}</span>
          </div>

          <p className="font-body text-[11px] text-stone-500 mb-4">
            Shipping charges (if applicable) calculated separately at checkout.
          </p>

          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between mb-6">
            <span className="font-button text-xs uppercase tracking-widest text-stone-400 font-bold">
              Estimated Total
            </span>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={calc.total}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.25 }}
                className="font-heading text-3xl sm:text-4xl font-bold text-gold-accent break-words"
              >
                {formatCurrency(calc.total)}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="font-body text-[11px] text-stone-400 leading-relaxed mb-6">
            {config.disclaimer}
          </p>

          <button
            type="button"
            disabled={!calc.isComplete}
            onClick={() => setOrderModalOpen(true)}
            className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-gold-accent text-stone-900 font-button font-bold text-xs uppercase tracking-widest shadow-goldGlow hover:bg-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-gold-accent"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Place Order Now</span>
          </button>
          {!calc.isComplete && (
            <p className="text-center text-[11px] text-stone-500 mt-2 font-body">
              Select a base and size to continue.
            </p>
          )}
        </div>
      </div>

      <PlaceOrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        categoryLabel={config.categoryLabel}
        breakdown={calc.breakdown}
        quantity={calc.state.quantity}
        total={calc.total}
      />
    </div>
  );
}

function StepSection({
  stepNumber,
  title,
  children,
}: {
  stepNumber: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-stone-900 text-white font-button text-xs font-bold flex-shrink-0">
          {stepNumber}
        </span>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-stone-900">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function OptionGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">{children}</div>;
}

function OptionCard({
  label,
  priceLabel,
  selected,
  onClick,
  multiSelect,
}: {
  label: string;
  priceLabel: string;
  selected: boolean;
  onClick: () => void;
  multiSelect?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`relative text-left p-3 sm:p-4 rounded-2xl border transition-all duration-200 ${
        selected
          ? "border-gold-accent bg-gold-champagne shadow-md"
          : "border-stone-200 bg-white hover:border-gold-accent/50 hover:bg-cream-linen"
      }`}
    >
      <div
        className={`absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center border transition-colors ${
          multiSelect ? "rounded-md" : "rounded-full"
        } ${selected ? "bg-gold-accent border-gold-accent text-white" : "border-stone-300 bg-white"}`}
      >
        {selected && <Check className="w-3 h-3" />}
      </div>
      <p className="font-button text-xs sm:text-sm font-bold text-stone-900 pr-5 sm:pr-6 mb-1 leading-snug break-words">
        {label}
      </p>
      <p className="font-body text-[11px] sm:text-xs text-stone-500">{priceLabel}</p>
    </button>
  );
}
