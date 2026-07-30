"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Camera } from "lucide-react";
import { GALLERY_ITEMS } from "@/lib/constants";
import { LightboxModal } from "@/components/ui/LightboxModal";

export function GallerySection() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const tabs = ["All", "Varmala Preservation", "Pooja Thalis", "Resin Clocks", "Invitation Preservation", "Photo Frames", "Custom Gifts"];

  const filteredGallery = activeTab === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const handleNext = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % filteredGallery.length);
    }
  };

  const handlePrev = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white text-stone-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-linen border border-stone-200 text-stone-900 text-xs tracking-widest font-button font-bold uppercase mb-4 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-stone-900" />
            <span>Visual Showcase</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-stone-900 mb-4">
            Artisan <span className="text-gold-gradient italic font-serif">Gallery</span>
          </h2>

          <p className="font-body text-sm sm:text-base text-stone-600 font-normal">
            Browse through our portfolio of custom handcrafted resin creations made with love for real brides and art connoisseurs.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-button uppercase font-bold tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-stone-900 text-white shadow-md"
                    : "bg-stone-100 text-stone-700 border border-stone-200 hover:bg-stone-200 hover:text-stone-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredGallery.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedIdx(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white cursor-pointer shadow-card border border-stone-200"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <span className="font-button text-[10px] uppercase tracking-widest text-gold-light font-bold">
                      {item.category}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-stone-300 line-clamp-2 font-normal">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={selectedIdx !== null}
        onClose={() => setSelectedIdx(null)}
        currentItem={selectedIdx !== null ? filteredGallery[selectedIdx] : null}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
