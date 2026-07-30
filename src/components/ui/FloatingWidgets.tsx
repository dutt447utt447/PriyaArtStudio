"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowUp, Phone } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";
import { formatWhatsAppMessage } from "@/lib/utils";

export function FloatingWidgets() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating WhatsApp Quick Launcher */}
      <div className="fixed bottom-20 sm:bottom-8 right-6 z-40 flex flex-col items-end gap-3">
        
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white backdrop-blur-md border border-stone-300 text-stone-900 hover:bg-stone-900 hover:text-white transition-all shadow-luxury"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${formatWhatsAppMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
          <MessageCircle className="w-7 h-7" />
          
          {/* Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-stone-900 text-white text-[11px] font-button font-bold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-stone-700 shadow-luxury pointer-events-none hidden sm:block">
            Chat With Priya
          </span>
        </a>
      </div>

      {/* Mobile Bottom Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-stone-200 p-3 sm:hidden flex items-center gap-3 shadow-lg">
        <a
          href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${formatWhatsAppMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-stone-900 text-white font-button font-bold text-xs uppercase tracking-wider shadow-md"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>WhatsApp Now</span>
        </a>

        <a
          href={`tel:${BRAND_INFO.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full border-2 border-stone-800 text-stone-900 font-button font-bold text-xs uppercase tracking-wider bg-white"
        >
          <Phone className="w-4 h-4 text-stone-900" />
          <span>Call Studio</span>
        </a>
      </div>
    </>
  );
}
