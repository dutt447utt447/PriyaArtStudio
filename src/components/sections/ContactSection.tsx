"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Send, CheckCircle2 } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    productInterest: "Wedding Varmala Preservation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp message string and launch
    const msg = `Hello Priya! My name is ${formData.name} (${formData.phone}). I am interested in ${formData.productInterest}. Details: ${formData.message}`;
    const url = `https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      window.open(url, "_blank");
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-white text-stone-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-linen border border-stone-200 text-stone-900 text-xs tracking-widest font-button font-bold uppercase mb-4 shadow-sm">
            <Mail className="w-3.5 h-3.5 text-stone-900" />
            <span>Connect With Priya</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-stone-900 mb-4">
            Get In <span className="text-gold-gradient italic font-serif">Touch</span>
          </h2>

          <p className="font-body text-sm sm:text-base text-stone-600 font-normal">
            Visit our studio in Rohtak, Haryana, or send us a quick inquiry to start designing your custom resin keepsake.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-white shadow-card border border-stone-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900 flex-shrink-0">
                <Phone className="w-5 h-5 text-stone-900" />
              </div>
              <div>
                <p className="font-button text-xs font-bold uppercase tracking-wider text-gold-dark">Direct Phone & WhatsApp</p>
                <a
                  href={`tel:${BRAND_INFO.phoneRaw}`}
                  className="font-heading text-xl font-bold text-stone-900 hover:text-gold-dark transition-colors"
                >
                  {BRAND_INFO.phone}
                </a>
                <p className="font-body text-xs text-stone-500 font-medium mt-1">Available 9:00 AM - 8:00 PM IST</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white shadow-card border border-stone-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900 flex-shrink-0">
                <Mail className="w-5 h-5 text-stone-900" />
              </div>
              <div>
                <p className="font-button text-xs font-bold uppercase tracking-wider text-gold-dark">Official Email</p>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="font-body text-sm font-bold text-stone-900 hover:text-gold-dark transition-colors"
                >
                  {BRAND_INFO.email}
                </a>
                <p className="font-body text-xs text-stone-500 font-medium mt-1">For corporate & bulk inquiries</p>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-white shadow-card border border-stone-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900 flex-shrink-0">
                <MapPin className="w-5 h-5 text-stone-900" />
              </div>
              <div>
                <p className="font-button text-xs font-bold uppercase tracking-wider text-gold-dark">Studio Location</p>
                <p className="font-body text-sm font-bold text-stone-900 leading-snug">
                  {BRAND_INFO.location.address}
                </p>
                <p className="font-body text-xs text-stone-600 font-medium mt-1">
                  {BRAND_INFO.location.city}, {BRAND_INFO.location.state} - {BRAND_INFO.location.pincode}
                </p>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="p-6 rounded-2xl bg-stone-900 text-white flex items-center justify-between shadow-card">
              <div>
                <p className="font-heading text-lg font-bold text-white">Join Our Community</p>
                <p className="font-body text-xs text-stone-300 font-medium">Follow @artstudiobypriya</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={BRAND_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-gold-accent hover:text-stone-900 transition-colors"
                  aria-label="Instagram Page"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={BRAND_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-gold-accent hover:text-stone-900 transition-colors"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form & Google Map */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Form Box */}
            <div className="p-8 rounded-3xl bg-white shadow-card border border-stone-200">
              <h3 className="font-heading text-2xl font-bold text-stone-900 mb-2">Send Custom Design Inquiry</h3>
              <p className="font-body text-xs text-stone-600 font-normal mb-6">
                Fill out the form below to receive pricing estimation and flower submission instructions directly on your WhatsApp.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-stone-900 mx-auto" />
                  <h4 className="font-heading text-xl font-bold text-stone-900">Thank You, {formData.name}!</h4>
                  <p className="font-body text-xs text-stone-600 font-normal">
                    We are launching WhatsApp to connect you directly with Priya. If window did not open, click the button below.
                  </p>
                  <a
                    href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent(`Hello Priya! I submitted an inquiry for ${formData.productInterest}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-stone-900 text-white text-xs font-button font-bold uppercase tracking-wider"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-button text-[11px] font-bold uppercase tracking-wider text-stone-900 mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:border-stone-900 font-body text-sm text-stone-900 bg-white font-medium"
                      />
                    </div>

                    <div>
                      <label className="block font-button text-[11px] font-bold uppercase tracking-wider text-stone-900 mb-1">
                        WhatsApp Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:border-stone-900 font-body text-sm text-stone-900 bg-white font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-button text-[11px] font-bold uppercase tracking-wider text-stone-900 mb-1">
                      Artwork / Preservation Interest
                    </label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:border-stone-900 font-body text-sm text-stone-900 bg-white font-medium"
                    >
                      <option>Wedding Varmala Preservation</option>
                      <option>Royal Resin Pooja Thali</option>
                      <option>Wedding Invitation Card Frame</option>
                      <option>Luxury Resin Wall Clock</option>
                      <option>Custom Photo Frame</option>
                      <option>Custom Gift Set</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-button text-[11px] font-bold uppercase tracking-wider text-stone-900 mb-1">
                      Special Requests / Event Date
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention your wedding date, flower types, or custom color preferences..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:border-stone-900 font-body text-sm text-stone-900 bg-white font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-stone-900 text-white font-button font-bold text-xs uppercase tracking-widest hover:bg-gold-accent hover:text-stone-900 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-white group-hover:text-stone-900" />
                    <span>Send Inquiry to Priya</span>
                  </button>
                </form>
              )}
            </div>

            {/* Google Map Container */}
            <div className="rounded-3xl overflow-hidden shadow-card border border-stone-200 h-64 relative bg-cream-linen">
              <iframe
                src={BRAND_INFO.location.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Priya Art Studio Location Map Rohtak"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
