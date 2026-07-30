"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageCircle, Heart } from "lucide-react";
import { COLLECTIONS, BRAND_INFO } from "@/lib/constants";
import { formatWhatsAppMessage } from "@/lib/utils";

export function CollectionsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Wedding Keepsakes", "Pooja & Sacred Art", "Home Decor", "Custom Gifts"];

  const filteredItems = activeCategory === "All"
    ? COLLECTIONS
    : COLLECTIONS.filter((item) => item.category === activeCategory);

  return (
    <section id="collections" className="py-24 bg-white text-stone-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-linen border border-stone-200 text-stone-900 text-xs tracking-widest font-button uppercase mb-4 shadow-sm font-bold">
            <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
            <span>Curated Masterpieces</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-stone-900 mb-4">
            Featured <span className="text-gold-gradient italic font-serif">Collections</span>
          </h2>

          <p className="font-body text-sm sm:text-base text-stone-600 font-normal">
            Every piece is an individual artistic creation. Explore our luxury handcrafted resin keepsakes designed to elevate your sacred rituals and home aesthetic.
          </p>

          {/* Filter Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-button font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-stone-900 text-white shadow-md"
                    : "bg-stone-100 text-stone-700 border border-stone-200 hover:text-stone-900 hover:border-stone-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Collections Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-white border border-stone-200 hover:border-gold-accent overflow-hidden shadow-card hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-linen">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/10 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                  {/* Highlights Badge */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-stone-200 text-stone-900 text-[10px] font-button uppercase tracking-wider font-bold shadow-sm">
                      {product.highlight}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-stone-200 flex items-center justify-center text-stone-900 shadow-sm">
                      <Heart className="w-4 h-4 text-stone-900" />
                    </span>
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-button text-[11px] uppercase tracking-widest text-gold-dark font-bold mb-1 block">
                      {product.category}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-stone-900 group-hover:text-gold-dark transition-colors mb-2">
                      {product.title}
                    </h3>
                    <p className="font-body text-xs text-stone-600 font-normal leading-relaxed mb-4 line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                    <span className="font-heading text-base font-bold text-stone-900">
                      {product.priceEstimate}
                    </span>

                    <a
                      href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${formatWhatsAppMessage(product.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-900 text-white text-xs font-button uppercase font-bold hover:bg-gold-accent hover:text-stone-900 transition-all duration-300 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order Custom</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
