import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CollectionsSection } from "@/components/sections/CollectionsSection";
import { VarmalaSpotlight } from "@/components/sections/VarmalaSpotlight";
import { GallerySection } from "@/components/sections/GallerySection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { FloatingWidgets } from "@/components/ui/FloatingWidgets";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-plum-dark text-white selection:bg-gold-accent selection:text-plum-dark">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Priya */}
      <AboutSection />

      {/* Featured Masterpiece Collections */}
      <CollectionsSection />

      {/* Dedicated Wedding Varmala & Invitation Spotlight */}
      <VarmalaSpotlight />

      {/* Interactive Masonry Gallery & Lightbox */}
      <GallerySection />

      {/* Why Choose Priya Art Studio */}
      <WhyChooseUs />

      {/* 4-Step Process Timeline */}
      <ProcessSection />

      {/* Real Verified Client Reviews Carousel */}
      <TestimonialsSection />

      {/* Instagram Feed Grid */}
      <InstagramSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Luxury CTA Banner */}
      <CtaBanner />

      {/* Location, Direct Contact & Inquiry Form */}
      <ContactSection />

      {/* Luxury Dark Footer */}
      <Footer />

      {/* Floating Utilities (WhatsApp, Back To Top, Mobile Bottom Sticky Bar) */}
      <FloatingWidgets />
    </main>
  );
}
