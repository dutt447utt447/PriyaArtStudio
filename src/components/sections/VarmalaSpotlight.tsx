"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles, Shield, Flower, MessageCircle } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";
import { formatWhatsAppMessage } from "@/lib/utils";

export function VarmalaSpotlight() {
  return (
    <section id="varmala-preservation" className="py-24 bg-cream-linen text-stone-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Story & Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-900 text-xs tracking-widest font-button uppercase mb-4 shadow-sm font-bold">
              <Heart className="w-3.5 h-3.5 text-stone-900 fill-stone-900" />
              <span>Flagship Wedding Keepsake</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 mb-6 leading-tight">
              Preserve Your Sacred <br />
              <span className="text-gold-gradient italic font-serif">Wedding Varmala Forever</span>
            </h2>

            <p className="font-body text-sm sm:text-base text-stone-600 font-normal leading-relaxed mb-8">
              Your wedding varmala carries the purest memory of your big day. Rather than letting those cherished flowers wither away, Priya Art Studio transforms them into a radiant, glass-like resin block that stays forever vibrant in your home.
            </p>

            {/* 4 Feature Highlights */}
            <div className="space-y-4 w-full mb-8">
              <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-card flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900 flex-shrink-0">
                  <Flower className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-button text-xs font-bold uppercase tracking-wider text-stone-900">Scientific Floral Dehydration</h4>
                  <p className="font-body text-xs text-stone-600 font-normal">Flowers undergo slow silica-drying to lock in original natural vibrant colors without browning.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-card flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-champagne flex items-center justify-center text-stone-900 flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-button text-xs font-bold uppercase tracking-wider text-stone-900">Real Gold Leaf Flakes & Inscriptions</h4>
                  <p className="font-body text-xs text-stone-600 font-normal">Adorned with floating 24K gold foil, couple names, wedding date, and mantras on request.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-card flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900 flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-button text-xs font-bold uppercase tracking-wider text-stone-900">Optical UV Anti-Yellowing Resin</h4>
                  <p className="font-body text-xs text-stone-600 font-normal">Poured in zero-bubble vacuum chambers for crystal glass transparency that lasts a lifetime.</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${formatWhatsAppMessage("Wedding Varmala Preservation")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-stone-900 text-white font-button font-bold text-xs uppercase tracking-widest shadow-md hover:bg-gold-accent hover:text-stone-900 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Book Varmala Preservation</span>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Dual Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex flex-col gap-6"
          >
            {/* Main Varmala Block Image */}
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-luxury group">
              <Image
                src="/images/varmala-preservation.png"
                alt="Handcrafted Wedding Varmala Resin Block"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md">
                <p className="font-button text-xs uppercase tracking-wider font-bold text-stone-900">Bridal Varmala Hexagon Block</p>
                <p className="font-body text-xs text-stone-600 font-medium">Custom hand-poured in Rohtak studio</p>
              </div>
            </div>

            {/* Secondary Invitation Card Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-card group">
                <Image
                  src="/images/wedding-invitation.png"
                  alt="Wedding Invitation Preserved in Resin"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200">
                  <p className="font-button text-[10px] uppercase font-bold text-stone-900">Invitation Frame</p>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-card group">
                <Image
                  src="/images/pooja-thali.png"
                  alt="Royal Pooja Thali Resin Keepsake"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200">
                  <p className="font-button text-[10px] uppercase font-bold text-stone-900">Royal Pooja Thali</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
