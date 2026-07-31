"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-cream-linen text-stone-900 border-t border-stone-200 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-stone-200">
          
          {/* Brand Info & Emblem Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-sm border border-gold-accent/40 bg-stone-900">
                <Image
                  src="/images/logo.png"
                  alt="Priya Art Studio Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-wider text-stone-900">
                  PRIYA
                </span>
                <span className="font-button text-[10px] uppercase tracking-[0.25em] text-gold-dark font-bold">
                  ART STUDIO
                </span>
              </div>
            </div>

            <p className="font-body text-xs text-stone-600 font-normal leading-relaxed max-w-sm">
              Luxury handmade resin art studio specializing in wedding varmala preservation, royal pooja thalis, marble resin clocks, and bespoke floral keepsakes by Priya Kalher.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white text-stone-900 border border-stone-200 hover:bg-stone-900 hover:text-white transition-colors shadow-sm"
                aria-label="Follow Priya Art Studio on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white text-stone-900 border border-stone-200 hover:bg-stone-900 hover:text-white transition-colors shadow-sm"
                aria-label="Follow Priya Art Studio on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-lg font-bold text-stone-900">Quick Links</h4>
            <ul className="space-y-2 font-body text-xs text-stone-600 font-medium">
              <li><Link href="#about" className="hover:text-stone-900 transition-colors">About Priya</Link></li>
              <li><Link href="#collections" className="hover:text-stone-900 transition-colors">Collections</Link></li>
              <li><Link href="#varmala-preservation" className="hover:text-stone-900 transition-colors">Varmala Keepsakes</Link></li>
              <li><Link href="#gallery" className="hover:text-stone-900 transition-colors">Gallery</Link></li>
              <li><Link href="#process" className="hover:text-stone-900 transition-colors">How We Work</Link></li>
              <li><Link href="#testimonials" className="hover:text-stone-900 transition-colors">Reviews</Link></li>
              <li><Link href="#faq" className="hover:text-stone-900 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Collections Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-lg font-bold text-stone-900">Art Collections</h4>
            <ul className="space-y-2 font-body text-xs text-stone-600 font-medium">
              <li><Link href="#varmala-preservation" className="hover:text-stone-900 transition-colors">Wedding Varmala Preservation</Link></li>
              <li><Link href="#collections" className="hover:text-stone-900 transition-colors">Royal Resin Pooja Thalis</Link></li>
              <li><Link href="#collections" className="hover:text-stone-900 transition-colors">Wedding Invitation Cards</Link></li>
              <li><Link href="#collections" className="hover:text-stone-900 transition-colors">Luxury Resin Wall Clocks</Link></li>
              <li><Link href="#collections" className="hover:text-stone-900 transition-colors">Bespoke Photo Frames</Link></li>
              <li><Link href="#collections" className="hover:text-stone-900 transition-colors">Custom Gift Trays & Coasters</Link></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-lg font-bold text-stone-900">Studio Contact</h4>
            <ul className="space-y-3 font-body text-xs text-stone-600 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-stone-900 flex-shrink-0 mt-0.5" />
                <span>924/25 Jagdish Colony, Near Shiksha Bharti School, Rohtak, Haryana 124001</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-stone-900 flex-shrink-0" />
                <a href={`tel:${BRAND_INFO.phoneRaw}`} className="hover:text-stone-900 transition-colors font-bold">
                  +91 7082450846
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-stone-900 flex-shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-stone-900 transition-colors font-bold">
                  artstudiobypriya@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-stone-500 font-medium">
          <p>© {new Date().getFullYear()} Priya Art Studio. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-stone-900 fill-stone-900" />
            <span>by Priya Kalher</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
