"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Palette, Truck, HeartHandshake, Sparkles } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "100% Handcrafted Passion",
      description: "No mass factories. Every resin piece is individually hand-poured, cured, and hand-buffed by Priya in Rohtak.",
    },
    {
      icon: ShieldCheck,
      title: "UV Anti-Yellowing Formula",
      description: "We use optical-grade non-yellowing imported resin with UV stabilization for crystal clear clarity for decades.",
    },
    {
      icon: Palette,
      title: "Bespoke Customization",
      description: "Choose your preferred colors, shapes, gold leaf accents, couple name inscriptions, and dried flowers.",
    },
    {
      icon: Truck,
      title: "Insured Pan-India Delivery",
      description: "Multi-layered protective packaging ensuring your delicate keepsake reaches your doorstep safely anywhere in India.",
    },
    {
      icon: HeartHandshake,
      title: "Direct Artist Interaction",
      description: "Communicate directly with senior artist Priya on WhatsApp for regular design updates and WIP pictures.",
    },
    {
      icon: Sparkles,
      title: "24K Gold Foil Flakes",
      description: "Adorned with premium metallic leaf and dried flora for a true Dior-grade luxury finish.",
    },
  ];

  return (
    <section className="py-24 bg-cream-linen text-stone-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-900 text-xs tracking-widest font-button font-bold uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>The Priya Art Studio Standard</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-stone-900 mb-4">
            Why Choose <span className="text-gold-gradient italic font-serif">Our Studio</span>
          </h2>

          <p className="font-body text-sm sm:text-base text-stone-600 font-normal">
            We don't just sell resin products—we preserve love, family heritage, and emotional milestones with unyielding artistic quality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-stone-200 hover:border-gold-accent p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-card hover:shadow-luxury group"
              >
                <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900 mb-6 group-hover:bg-stone-900 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-heading text-2xl font-bold text-stone-900 mb-3 group-hover:text-gold-dark transition-colors">
                  {item.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
