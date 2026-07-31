"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Flower2, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-cream-linen text-stone-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Working Photos Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[380px] lg:max-w-none space-y-4">
              
              {/* Main Working Action Image */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-luxury border-2 border-gold-accent/40 group bg-white">
                <Image
                  src="/images/priya-working.png"
                  alt="Priya Kalher handcrafting resin art in studio"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
                
                {/* Floating Studio Location Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md">
                  <p className="font-button text-xs uppercase tracking-wider font-bold text-stone-900">
                    Priya Kalher • Lead Resin Artist
                  </p>
                  <p className="font-body text-xs text-stone-600 font-medium">
                    Hand-Pouring & Preserving Flowers in Rohtak Studio
                  </p>
                </div>
              </div>

              {/* Alternative Photo Highlight Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-stone-200 group">
                  <Image
                    src="/images/priya-portrait.png"
                    alt="Priya Kalher Studio Portrait"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-2 left-2 p-1.5 rounded-lg bg-white/90 text-[10px] font-button font-bold text-stone-900">
                    Studio Portrait
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-stone-200 group">
                  <Image
                    src="/images/priya-resin-design.png"
                    alt="Priya Kalher with handcrafted resin art design"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-2 left-2 p-1.5 rounded-lg bg-white/90 text-[10px] font-button font-bold text-stone-900">
                    Resin Art Design
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Emotional Story Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-900 text-xs tracking-widest font-button uppercase mb-4 shadow-sm font-bold">
              <Flower2 className="w-3.5 h-3.5 text-gold-accent" />
              <span>Meet The Artist</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-stone-900 leading-tight mb-6">
              "Every Flower Tells A Story. <br />
              <span className="italic text-gold-gradient font-serif font-normal">We Make That Story Last Forever."</span>
            </h2>

            <div className="space-y-4 font-body text-sm sm:text-base text-stone-700 leading-relaxed font-normal mb-8">
              <p>
                Hi, I am <strong className="text-stone-900 font-bold">Priya Kalher</strong>, the founder, lead resin artist, and creative soul behind Priya Art Studio. What started as a passion for fine arts and floral preservation has evolved into Rohtak's leading studio dedicated to capturing life's most precious emotional milestones.
              </p>
              <p>
                A wedding varmala or ring ceremony platter isn't just an object—it carries the promises, laughter, and sacred blessings of your special day. My mission is to treat every flower with delicate reverence, dehydrating, arranging, and encasing them in crystal clear resin so your memories never fade.
              </p>
              <p>
                From bespoke wedding invitation plaques and royal pooja thalis to customized marble resin clocks and ring exchange trays, each creation is individually handcrafted by me in my Rohtak studio. No mass production. No shortcuts. Just pure, handcrafted luxury made with love.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 pt-4 border-t border-stone-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-button text-xs font-bold uppercase tracking-wider text-stone-900">100% Artisanal Craft</h4>
                  <p className="font-body text-xs text-stone-600 font-medium">Hand-poured multi-layer resin detailing</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-button text-xs font-bold uppercase tracking-wider text-stone-900">Zero Yellowing Guarantee</h4>
                  <p className="font-body text-xs text-stone-600 font-medium">UV-resistant premium clarity resin formula</p>
                </div>
              </div>
            </div>

            {/* Signature & CTA */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div>
                <p className="font-heading text-2xl italic text-stone-900 font-bold">Priya Kalher</p>
                <p className="font-body text-xs text-gold-dark tracking-widest uppercase font-bold">Lead Resin Artist & Founder</p>
              </div>

              <a
                href="#collections"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-white font-button text-xs uppercase tracking-wider font-bold hover:bg-gold-accent hover:text-stone-900 transition-all shadow-md"
              >
                <span>Discover Our Art</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
