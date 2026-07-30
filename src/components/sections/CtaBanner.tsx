"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";
import { formatWhatsAppMessage } from "@/lib/utils";

export function CtaBanner() {
  return (
    <section className="py-20 bg-stone-900 text-white relative overflow-hidden shadow-luxury">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-gold-accent text-xs tracking-widest font-button font-bold uppercase mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
            <span>Turn Memories Into Masterpieces</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Let's Create Something <br />
            <span className="text-gold-gradient italic font-serif">Beautiful Together</span>
          </h2>

          <p className="font-body text-sm sm:text-base text-stone-300 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
            Have a wedding garland, anniversary date, or custom color vision in mind? Connect directly with Priya today for a bespoke consultation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${formatWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold-accent text-stone-900 font-button font-bold text-xs uppercase tracking-widest shadow-goldGlow hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <MessageCircle className="w-4.5 h-4.5 text-stone-900" />
              <span>WhatsApp Consultation</span>
            </a>

            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/40 text-white font-button font-bold text-xs uppercase tracking-widest hover:bg-white/10 backdrop-blur-md transition-all duration-300"
            >
              <Phone className="w-4.5 h-4.5 text-gold-accent" />
              <span>Call +91 7082450846</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
