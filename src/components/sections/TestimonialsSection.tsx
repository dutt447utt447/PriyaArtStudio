"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-24 bg-cream-linen text-stone-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Google Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-900 text-xs tracking-widest font-button font-bold uppercase mb-4 shadow-sm">
              <Star className="w-3.5 h-3.5 text-gold-accent fill-gold-accent" />
              <span>Real Client Stories</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-stone-900">
              Words Of <span className="text-gold-gradient italic font-serif">Love</span>
            </h2>
          </div>

          {/* Google Review Badge Placeholder */}
          <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-card flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center font-heading text-2xl font-bold text-stone-900">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-1 text-gold-accent mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold-accent" />
                ))}
              </div>
              <p className="font-button text-[10px] uppercase tracking-wider text-stone-600 font-semibold">
                Google Reviews Rating • 120+ Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Embla Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {TESTIMONIALS.map((item) => (
                <div
                  key={item.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <div className="h-full bg-white border border-stone-200 p-8 rounded-3xl flex flex-col justify-between relative group hover:border-gold-accent shadow-card hover:shadow-luxury transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1 text-gold-accent">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-gold-accent" />
                          ))}
                        </div>
                        <Quote className="w-8 h-8 text-stone-200 group-hover:text-gold-accent/40 transition-colors" />
                      </div>

                      <span className="inline-block px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-900 font-button text-[10px] uppercase font-bold mb-4">
                        {item.tag}
                      </span>

                      <p className="font-body text-xs sm:text-sm text-stone-700 font-normal leading-relaxed mb-6 italic">
                        "{item.text}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                      <div>
                        <p className="font-heading text-base font-bold text-stone-900 flex items-center gap-1.5">
                          {item.name}
                          <CheckCircle className="w-3.5 h-3.5 text-stone-900" />
                        </p>
                        <p className="font-body text-[11px] font-medium text-stone-500">{item.location}</p>
                      </div>
                      <span className="font-button text-[10px] text-stone-400 font-bold uppercase tracking-widest">{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-white border border-stone-200 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors shadow-sm"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-white border border-stone-200 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors shadow-sm"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
