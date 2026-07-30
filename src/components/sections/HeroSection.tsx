"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Heart, Star, MapPin } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";
import { formatWhatsAppMessage } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-white text-stone-900">
      {/* Soft Champagne Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold-champagne/40 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-stone-100 rounded-full blur-3xl opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Luxury Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-linen border border-stone-200 text-stone-900 text-xs tracking-widest font-button font-bold uppercase mb-6 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-gold-accent" />
              <span>Premier Resin Art Studio in Rohtak, Haryana</span>
            </div>

            {/* Official Logo Emblem Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-3xl overflow-hidden shadow-luxury border-2 border-gold-accent/40 bg-stone-900 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Priya Art Studio Emblem Rohtak"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl sm:text-3xl font-bold tracking-widest text-stone-900">
                  PRIYA
                </span>
                <span className="font-button text-xs uppercase tracking-[0.3em] text-gold-dark font-bold">
                  ART STUDIO • ROHTAK
                </span>
              </div>
            </div>

            {/* Main H1 Title with Hyper-Targeted Keywords */}
            <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1] mb-4">
              Luxury Resin Art <br />
              <span className="text-gold-gradient italic font-serif">& Varmala Preservation in Rohtak</span>
            </h1>

            {/* Subheading H2 */}
            <h2 className="font-subheading text-lg sm:text-2xl font-bold text-stone-700 tracking-wide mb-6">
              Crafting Wedding Varmalas & Memories Into Timeless Art
            </h2>

            {/* Description Body Copy */}
            <p className="font-body text-sm sm:text-base text-stone-600 max-w-xl leading-relaxed mb-8 font-normal">
              Welcome to Rohtak's premier resin art studio by Senior Artist Priya Ahalawat. Hand-poured at Jagdish Colony with optical UV resin, gold leaves, and real preserved bridal flowers—creating bespoke wedding varmala blocks, ring ceremony platters, resin wall clocks, and pooja thalis.
            </p>

            {/* Action Call to Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <a
                href="#collections"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-stone-900 text-white font-button font-bold text-xs uppercase tracking-widest shadow-md hover:bg-gold-accent hover:text-stone-900 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore Rohtak Collections</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${formatWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-stone-800 text-stone-900 font-button font-bold text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Rohtak Studio</span>
              </a>
            </div>

            {/* Luxury Live Statistics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-stone-200 w-full">
              <div className="flex flex-col">
                <span className="font-heading text-2xl sm:text-3xl font-bold text-stone-900">500+</span>
                <span className="font-body text-xs font-semibold text-stone-600">Clients in Rohtak & India</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl sm:text-3xl font-bold text-stone-900">100%</span>
                <span className="font-body text-xs font-semibold text-stone-600">Handcrafted in Haryana</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl sm:text-3xl font-bold text-stone-900">Bespoke</span>
                <span className="font-body text-xs font-semibold text-stone-600">Custom Designs</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl sm:text-3xl font-bold text-stone-900">Lifetime</span>
                <span className="font-body text-xs font-semibold text-stone-600">Anti-Yellowing Clarity</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column Visual / Artist Portrait & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Ambient Back Glow Ring */}
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-gold-accent/40" />

            {/* Main Portrait Box */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] rounded-3xl p-3 bg-white border border-stone-200 shadow-luxury overflow-hidden">
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <Image
                  src="/images/priya-portrait.png"
                  alt="Priya Ahalawat - Senior Resin Artist in Rohtak"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-subheading text-base font-bold text-stone-900">Priya Ahalawat</p>
                      <p className="font-body text-xs font-medium text-stone-600">Lead Resin Artist • Rohtak, Haryana</p>
                    </div>
                    <div className="flex items-center gap-1 text-gold-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-gold-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 1 - Varmala Keepsake Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:-left-8 bg-white border border-stone-200 p-3 sm:p-4 rounded-2xl shadow-luxury flex items-center gap-3 backdrop-blur-xl z-20 max-w-[200px]"
            >
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900 flex-shrink-0">
                <Heart className="w-5 h-5 fill-stone-900 text-stone-900" />
              </div>
              <div>
                <p className="font-button text-[11px] font-bold text-stone-900 uppercase tracking-wider">Varmala Rohtak</p>
                <p className="font-body text-[10px] font-semibold text-stone-500">Floral Preservation</p>
              </div>
            </motion.div>

            {/* Floating Card 2 - Quality Guarantee */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-4 sm:-right-6 bg-white border border-stone-200 p-3 sm:p-4 rounded-2xl shadow-luxury flex items-center gap-3 backdrop-blur-xl z-20 max-w-[210px]"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-champagne flex items-center justify-center text-stone-900 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-button text-[11px] font-bold text-stone-900 uppercase tracking-wider">Anti-Yellowing</p>
                <p className="font-body text-[10px] font-semibold text-stone-500">Optical UV Resin</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
