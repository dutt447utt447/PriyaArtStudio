"use client";

import React from "react";
import Image from "next/image";
import { Instagram, Heart, Sparkles } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";

export function InstagramSection() {
  const instaPosts = [
    { id: 1, image: "/images/varmala-preservation.png", likes: "1.2k" },
    { id: 2, image: "/images/pooja-thali.png", likes: "980" },
    { id: 3, image: "/images/resin-clock.png", likes: "1.5k" },
    { id: 4, image: "/images/wedding-invitation.png", likes: "2.1k" },
    { id: 5, image: "/images/photo-frame.png", likes: "840" },
    { id: 6, image: "/images/custom-gift.png", likes: "1.1k" },
  ];

  return (
    <section className="py-20 bg-white text-stone-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-linen border border-stone-200 text-stone-900 text-xs tracking-widest font-button font-bold uppercase mb-3 shadow-sm">
            <Instagram className="w-3.5 h-3.5 text-stone-900" />
            <span>@artstudiobypriya</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-stone-900">
            Follow Our <span className="italic text-gold-gradient font-serif">Creative Journey</span>
          </h2>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instaPosts.map((post) => (
            <a
              key={post.id}
              href={BRAND_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-card border border-stone-200 block bg-cream-linen"
            >
              <Image
                src={post.image}
                alt="Priya Art Studio Instagram Post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-stone-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <Instagram className="w-6 h-6 mb-1 text-gold-accent" />
                <span className="font-button text-xs font-bold flex items-center gap-1">
                  <Heart className="w-3 h-3 fill-gold-accent text-gold-accent" /> {post.likes}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={BRAND_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-button font-bold uppercase tracking-widest text-stone-900 hover:text-gold-dark transition-colors"
          >
            <span>Follow on Instagram @artstudiobypriya</span>
            <Sparkles className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
