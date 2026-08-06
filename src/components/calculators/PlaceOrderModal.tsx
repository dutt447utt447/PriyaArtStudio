"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, User, Phone } from "lucide-react";
import { CALCULATOR_WHATSAPP_NUMBER } from "@/lib/whatsapp";
import type { BreakdownLine } from "@/hooks/usePriceCalculator";

interface PlaceOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoryLabel: string;
  breakdown: BreakdownLine[];
  quantity: number;
  total: number;
}

function formatCurrency(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

function buildWhatsAppMessage(params: {
  categoryLabel: string;
  breakdown: BreakdownLine[];
  quantity: number;
  total: number;
  name: string;
  phone: string;
}) {
  const { categoryLabel, breakdown, quantity, total, name, phone } = params;

  const lines = [
    `Hello! I'd like to order a *${categoryLabel}* piece from Priya Art Studio.`,
    "",
    "*Order Details:*",
    ...breakdown.map((line) => `- ${line.label}${line.amount ? ` (+${formatCurrency(line.amount)})` : ""}`),
    `- Quantity: ${quantity}`,
    "",
    `*Estimated Total: ${formatCurrency(total)}*`,
    "",
    `*Name:* ${name}`,
    `*Phone:* ${phone}`,
    "",
    "I'd like to place this order. Please confirm availability and next steps.",
  ];

  return lines.join("\n");
}

export function PlaceOrderModal({
  isOpen,
  onClose,
  categoryLabel,
  breakdown,
  quantity,
  total,
}: PlaceOrderModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const handleClose = () => {
    setErrors({});
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim().replace(/\D/g, "");

    const nextErrors: { name?: string; phone?: string } = {};
    if (!trimmedName) nextErrors.name = "Please enter your name.";
    if (!trimmedPhone) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (!/^\d{10}$/.test(trimmedPhone)) {
      nextErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const message = buildWhatsAppMessage({
      categoryLabel,
      breakdown,
      quantity,
      total,
      name: trimmedName,
      phone: trimmedPhone,
    });

    const url = `https://wa.me/${CALCULATOR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    setName("");
    setPhone("");
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm px-0 sm:px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-luxury p-6 sm:p-8 relative"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-4 right-4 p-2 rounded-full text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-champagne text-gold-dark text-[10px] tracking-widest font-button font-bold uppercase mb-4">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Place Order via WhatsApp</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900 mb-1">
              Almost There
            </h3>
            <p className="font-body text-sm text-stone-500 mb-6">
              Share your name & number — we'll open WhatsApp with your full order pre-filled.
            </p>

            <div className="rounded-2xl bg-cream-linen border border-stone-200 p-4 mb-6">
              <p className="font-button text-xs uppercase tracking-widest text-stone-500 mb-1">
                {categoryLabel}
              </p>
              <p className="font-heading text-2xl font-bold text-stone-900">
                {formatCurrency(total)}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className="flex items-center gap-2 font-button text-xs uppercase tracking-widest font-bold text-stone-700 mb-2">
                  <User className="w-3.5 h-3.5 text-gold-dark" />
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ananya Sharma"
                  className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-accent/50 transition-colors ${
                    errors.name ? "border-red-400" : "border-stone-300"
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-body">{errors.name}</p>}
              </div>

              <div>
                <label className="flex items-center gap-2 font-button text-xs uppercase tracking-widest font-bold text-stone-700 mb-2">
                  <Phone className="w-3.5 h-3.5 text-gold-dark" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-accent/50 transition-colors ${
                    errors.phone ? "border-red-400" : "border-stone-300"
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 font-body">{errors.phone}</p>}
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-gold-accent text-stone-900 font-button font-bold text-xs uppercase tracking-widest shadow-goldGlow hover:bg-stone-900 hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Continue to WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
