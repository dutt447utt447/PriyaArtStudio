import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWidgets } from "@/components/ui/FloatingWidgets";
import { CalculatorPageClient } from "@/components/calculators/CalculatorPageClient";

export const metadata: Metadata = {
  title: "Price Calculator",
  description:
    "Get an instant price estimate for Varmala Preservation, Ring Ceremony Platters, Pooja Thalis, Wedding Invitation Preservation & Resin Wall Clocks — then order directly on WhatsApp.",
  alternates: {
    canonical: "/price-calculator",
  },
};

export default function PriceCalculatorPage() {
  return (
    <main className="min-h-screen bg-cream-linen">
      <Navbar />
      <Suspense fallback={<CalculatorFallback />}>
        <CalculatorPageClient />
      </Suspense>
      <Footer />
      <FloatingWidgets />
    </main>
  );
}

function CalculatorFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-32">
      <p className="font-body text-sm text-stone-400">Loading calculator…</p>
    </div>
  );
}
