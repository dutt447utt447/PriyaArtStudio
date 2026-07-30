"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";
import { formatWhatsAppMessage } from "@/lib/utils";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentItem: {
    title: string;
    category: string;
    image: string;
    caption: string;
  } | null;
  onNext?: () => void;
  onPrev?: () => void;
}

export function LightboxModal({
  isOpen,
  onClose,
  currentItem,
  onNext,
  onPrev,
}: LightboxModalProps) {
  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/80 backdrop-blur-xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-white/20 text-white hover:bg-stone-900 hover:text-white transition-colors z-50 shadow-md"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 text-white hover:bg-stone-900 hover:text-white transition-colors z-50 shadow-md"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 text-white hover:bg-stone-900 hover:text-white transition-colors z-50 shadow-md"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-4xl w-full max-h-[90vh] bg-white border border-stone-200 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-luxury"
        >
          {/* Image Display */}
          <div className="relative w-full md:w-3/5 aspect-square md:aspect-auto min-h-[300px] bg-cream-linen">
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              className="object-contain p-4"
            />
          </div>

          {/* Details & CTA Column */}
          <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-stone-200 bg-white">
            <div>
              <span className="font-button text-xs uppercase tracking-widest text-gold-dark font-bold block mb-2">
                {currentItem.category}
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
                {currentItem.title}
              </h3>

              <p className="font-body text-sm text-stone-600 font-normal leading-relaxed mb-6">
                {currentItem.caption}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-stone-100">
              <p className="font-body text-xs text-stone-500 font-medium">
                Interested in getting a custom piece designed like this? Connect directly with Priya for pricing & details.
              </p>

              <a
                href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${formatWhatsAppMessage(currentItem.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-stone-900 text-white font-button font-bold text-xs uppercase tracking-wider shadow-md hover:bg-gold-accent hover:text-stone-900 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
