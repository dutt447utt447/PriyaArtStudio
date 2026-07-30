"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Package, Heart, Gift } from "lucide-react";
import { PROCESS_STEPS, BRAND_INFO } from "@/lib/constants";
import { formatWhatsAppMessage } from "@/lib/utils";

export function ProcessSection() {
  const stepIcons = [MessageCircle, Package, Heart, Gift];

  return (
    <section id="process" className="py-24 bg-white text-stone-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-linen border border-stone-200 text-stone-900 text-xs tracking-widest font-button font-bold uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
            <span>Seamless Experience</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-stone-900 mb-4">
            How We <span className="text-gold-gradient italic font-serif">Work</span>
          </h2>

          <p className="font-body text-sm sm:text-base text-stone-600 font-normal">
            Four simple steps to transform your wedding flowers or keepsake vision into an everlasting luxury artwork.
          </p>
        </div>

        {/* Process Timeline Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((item, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative bg-white rounded-3xl p-8 shadow-card border border-stone-200 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                {/* Step Number Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-4xl font-bold text-stone-300 group-hover:text-stone-900 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <span className="font-button text-[10px] uppercase tracking-widest text-gold-dark font-bold block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-stone-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-stone-600 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 text-center">
          <a
            href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${formatWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-stone-900 text-white font-button font-bold text-xs uppercase tracking-widest hover:bg-gold-accent hover:text-stone-900 transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Start Your Order Process Now</span>
          </a>
        </div>

      </div>
    </section>
  );
}
