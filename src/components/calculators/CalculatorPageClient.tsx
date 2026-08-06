"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator } from "lucide-react";
import { PRICING_CATEGORIES, PRICING_REGISTRY, DEFAULT_CATEGORY_ID } from "@/data/pricing";
import { CalculatorCore } from "./CalculatorCore";

function isValidCategory(id: string | null): id is string {
  return !!id && id in PRICING_REGISTRY;
}

export function CalculatorPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const paramCategory = searchParams.get("category");
  const [activeId, setActiveId] = useState(
    isValidCategory(paramCategory) ? paramCategory : DEFAULT_CATEGORY_ID
  );

  // Keep local state in sync if the URL changes externally (e.g. a deep link
  // from a product page, or browser back/forward).
  useEffect(() => {
    if (isValidCategory(paramCategory) && paramCategory !== activeId) {
      setActiveId(paramCategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramCategory]);

  const handleSelect = (id: string) => {
    setActiveId(id);
    router.replace(`/price-calculator?category=${id}`, { scroll: false });
  };

  const activeConfig = PRICING_REGISTRY[activeId];

  return (
    <div className="min-h-screen bg-cream-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900 text-gold-accent text-xs tracking-widest font-button font-bold uppercase mb-5">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Price Estimate</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
            Price <span className="text-gold-gradient italic">Calculator</span>
          </h1>
          <p className="font-body text-sm sm:text-base text-stone-500 leading-relaxed">
            Pick a category, choose your options, and see a live price estimate. When you're
            ready, send your order straight to Priya on WhatsApp.
          </p>
        </div>

        {/* Category selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PRICING_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleSelect(cat.id)}
              className={`px-5 py-3 rounded-2xl border font-button text-xs sm:text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                activeId === cat.id
                  ? "bg-stone-900 border-stone-900 text-white shadow-luxury"
                  : "bg-white border-stone-200 text-stone-700 hover:border-gold-accent hover:text-gold-dark"
              }`}
            >
              {cat.categoryLabel}
            </button>
          ))}
        </div>

        {/* Active category description */}
        {activeConfig.shortDescription && (
          <p className="text-center font-body text-sm text-stone-500 -mt-6 mb-10 max-w-xl mx-auto">
            {activeConfig.shortDescription}
          </p>
        )}

        {/* Active calculator */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeConfig.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <CalculatorCore config={activeConfig} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
