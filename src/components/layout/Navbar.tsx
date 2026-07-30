"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Phone, ChevronDown, Sparkles, Heart, Clock, Award, Star } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";
import { formatWhatsAppMessage } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const collectionsMenu = [
    { name: "Wedding Varmala Preservation", href: "#varmala-preservation", desc: "Sacred floral garland resin encapsulation", icon: Heart },
    { name: "Ring Ceremony Platters", href: "#collections", desc: "Bespoke engagement ring exchange trays", icon: Sparkles },
    { name: "Royal Resin Pooja Thalis", href: "#collections", desc: "Sacred ritual thalis with gold veins", icon: Award },
    { name: "Luxury Resin Wall Clocks", href: "#collections", desc: "3D gold numeral statement clocks", icon: Clock },
    { name: "Wedding Invitation Frames", href: "#collections", desc: "Preserved wedding card plaques", icon: Star },
    { name: "Custom Gifts & Frames", href: "#collections", desc: "Personalized trays, coasters & photo borders", icon: Sparkles },
  ];

  const aboutMenu = [
    { name: "About Priya Kalher", href: "#about", desc: "Meet the senior resin artist in Rohtak" },
    { name: "Why Choose Our Studio", href: "#process", desc: "100% Handcrafted & Anti-Yellowing" },
  ];

  const experienceMenu = [
    { name: "Visual Gallery", href: "#gallery", desc: "Browse custom resin creations" },
    { name: "4-Step Process Timeline", href: "#process", desc: "How to send flowers to Rohtak studio" },
    { name: "Client Reviews", href: "#testimonials", desc: "Verified stories from real brides" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm py-2.5"
          : "bg-gradient-to-b from-white via-white/80 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Transparent Logo Header */}
        <Link href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold-accent/40 bg-stone-900 shadow-sm group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/logo-badge.png"
              alt="Priya Art Studio Emblem"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-stone-900 leading-none">
              PRIYA
            </span>
            <span className="font-button text-[9px] uppercase tracking-[0.25em] text-gold-dark font-bold">
              ART STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Submenus */}
        <nav className="hidden lg:flex items-center gap-6">
          
          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-xs uppercase tracking-widest font-button font-bold text-stone-800 hover:text-gold-dark py-2 transition-colors">
              <span>About Studio</span>
              <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
            </button>

            <AnimatePresence>
              {activeDropdown === "about" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-64 bg-white border border-stone-200 rounded-2xl shadow-luxury p-3 z-50 mt-1"
                >
                  {aboutMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block p-2.5 rounded-xl hover:bg-stone-50 transition-colors group"
                    >
                      <p className="font-button text-xs font-bold text-stone-900 group-hover:text-gold-dark">
                        {item.name}
                      </p>
                      <p className="font-body text-[10px] text-stone-500 font-normal">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Collections Main Dropdown Submenu */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("collections")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-xs uppercase tracking-widest font-button font-bold text-stone-800 hover:text-gold-dark py-2 transition-colors">
              <span>Collections ▾</span>
            </button>

            <AnimatePresence>
              {activeDropdown === "collections" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full -left-12 w-80 bg-white border border-stone-200 rounded-2xl shadow-luxury p-3 z-50 mt-1"
                >
                  <div className="px-3 py-1.5 border-b border-stone-100 mb-1">
                    <p className="font-button text-[10px] uppercase font-bold text-gold-dark tracking-widest">
                      Resin Art in Rohtak
                    </p>
                  </div>

                  {collectionsMenu.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-cream-linen transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-button text-xs font-bold text-stone-900 group-hover:text-gold-dark">
                            {item.name}
                          </p>
                          <p className="font-body text-[10px] text-stone-500 font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Experience Submenu */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("experience")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-xs uppercase tracking-widest font-button font-bold text-stone-800 hover:text-gold-dark py-2 transition-colors">
              <span>Experience</span>
              <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
            </button>

            <AnimatePresence>
              {activeDropdown === "experience" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-64 bg-white border border-stone-200 rounded-2xl shadow-luxury p-3 z-50 mt-1"
                >
                  {experienceMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block p-2.5 rounded-xl hover:bg-stone-50 transition-colors group"
                    >
                      <p className="font-button text-xs font-bold text-stone-900 group-hover:text-gold-dark">
                        {item.name}
                      </p>
                      <p className="font-body text-[10px] text-stone-500 font-normal">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* FAQ & Contact Direct Links */}
          <Link
            href="#faq"
            className="text-xs uppercase tracking-widest font-button font-bold text-stone-800 hover:text-gold-dark transition-colors py-1"
          >
            FAQ
          </Link>

          <Link
            href="#contact"
            className="text-xs uppercase tracking-widest font-button font-bold text-stone-800 hover:text-gold-dark transition-colors py-1"
          >
            Contact Studio
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${formatWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center gap-2 text-xs uppercase tracking-wider font-button font-bold px-6 py-2.5 rounded-full bg-stone-900 text-white shadow-md hover:bg-gold-accent hover:text-stone-900 transition-all duration-300 transform hover:-translate-y-0.5"
            aria-label="WhatsApp Consultation with Priya Art Studio in Rohtak"
          >
            <MessageCircle className="w-4 h-4 text-white group-hover:text-stone-900 transition-colors" />
            <span>WhatsApp Consultation</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-stone-900 hover:text-gold-dark focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Accordion Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-stone-200 shadow-lg overflow-hidden px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              
              {/* Mobile Collections Submenu */}
              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === "collections" ? null : "collections")}
                  className="w-full flex items-center justify-between text-sm uppercase tracking-widest font-button text-stone-900 font-bold py-2.5 border-b border-stone-100"
                >
                  <span>Collections Submenu</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "collections" ? "rotate-180" : ""}`} />
                </button>

                {mobileExpanded === "collections" && (
                  <div className="pl-4 py-2 space-y-2 bg-stone-50 rounded-xl my-2">
                    {collectionsMenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs font-button font-bold text-stone-800 hover:text-gold-dark py-1.5"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest font-button text-stone-900 font-bold py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>About Priya Kalher</span>
              </Link>

              <Link
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest font-button text-stone-900 font-bold py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>Visual Gallery</span>
              </Link>

              <Link
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest font-button text-stone-900 font-bold py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>How We Work (Rohtak Studio)</span>
              </Link>

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest font-button text-stone-900 font-bold py-2 border-b border-stone-100 flex items-center justify-between"
              >
                <span>Contact & Location</span>
              </Link>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${formatWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full text-xs uppercase tracking-wider font-button font-bold py-3 rounded-full bg-stone-900 text-white shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Consultation
                </a>
                <a
                  href={`tel:${BRAND_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full text-xs uppercase tracking-wider font-button font-semibold py-3 rounded-full border border-stone-300 text-stone-900 hover:bg-stone-100"
                >
                  <Phone className="w-4 h-4 text-stone-900" />
                  Call +91 7082450846
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
