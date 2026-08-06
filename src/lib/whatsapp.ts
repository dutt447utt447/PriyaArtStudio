import { BRAND_INFO } from "./constants";

/**
 * Business WhatsApp number used by the Price Calculator's "Place Order Now"
 * flow. Read from NEXT_PUBLIC_WHATSAPP_NUMBER (see .env.local) so it can be
 * changed without touching code. Falls back to the studio's known number
 * (BRAND_INFO.phoneRaw, already used elsewhere on the site) if the env var
 * is ever unset.
 *
 * Format: country code + number, no "+", no spaces (e.g. "917082450846").
 */
export const CALCULATOR_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || BRAND_INFO.phoneRaw;
