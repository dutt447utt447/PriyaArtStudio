import React from "react";
import { BRAND_INFO, FAQS, COLLECTIONS } from "@/lib/constants";

export function JsonLdSchemas() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["ArtGallery", "LocalBusiness", "ProfessionalService"],
    "@id": `${BRAND_INFO.baseUrl}/#localbusiness`,
    name: BRAND_INFO.name,
    description: "Premier Resin Art Studio in Rohtak, Haryana by Priya Kalher. Specializing in Resin Art in Rohtak, Wedding Varmala Preservation, Ring Ceremony Platters, Resin Wall Clocks, Royal Pooja Thalis, and Custom Floral Keepsakes.",
    url: BRAND_INFO.baseUrl,
    telephone: BRAND_INFO.phone,
    email: BRAND_INFO.email,
    image: `${BRAND_INFO.baseUrl}/images/varmala-preservation.png`,
    logo: `${BRAND_INFO.baseUrl}/images/logo-transparent.png`,
    priceRange: "₹₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      "Rohtak",
      "Haryana",
      "Delhi NCR",
      "Gurugram",
      "Chandigarh",
      "Panipat",
      "Sonipat",
      "Karnal",
      "Hisar",
      "India",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND_INFO.location.address,
      addressLocality: BRAND_INFO.location.city,
      addressRegion: BRAND_INFO.location.state,
      postalCode: BRAND_INFO.location.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.8955",
      longitude: "76.5912",
    },
    founder: {
      "@type": "Person",
      name: "Priya Kalher",
      jobTitle: BRAND_INFO.role,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      BRAND_INFO.socials.instagram,
      BRAND_INFO.socials.facebook,
      BRAND_INFO.socials.whatsapp,
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BRAND_INFO.baseUrl}/#priya-kalher`,
    name: "Priya Kalher",
    jobTitle: "Lead Resin Artist & Founder",
    worksFor: {
      "@type": "LocalBusiness",
      name: BRAND_INFO.name,
    },
    description: "Priya Kalher is Rohtak's premier resin artist specializing in luxury resin art, wedding varmala flower preservation, custom engagement ring platters, and resin wall clocks in Rohtak, Haryana.",
    url: BRAND_INFO.baseUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rohtak",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Resin Art in Rohtak",
      "Resin Artist in Rohtak",
      "Wedding Varmala Preservation in Rohtak",
      "Flower Preservation in Epoxy Resin",
      "Engagement Ring Ceremony Platters",
      "Resin Wall Clocks",
      "Royal Pooja Thalis",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const productSchemas = COLLECTIONS.map((prod) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: prod.title,
    image: `${BRAND_INFO.baseUrl}${prod.image}`,
    description: prod.description,
    brand: {
      "@type": "Brand",
      name: BRAND_INFO.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "1499",
      highPrice: "9999",
      offerCount: "100",
      availability: "https://schema.org/InStock",
    },
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BRAND_INFO.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resin Art in Rohtak",
        item: `${BRAND_INFO.baseUrl}/#collections`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Varmala Preservation in Rohtak",
        item: `${BRAND_INFO.baseUrl}/#varmala-preservation`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {productSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
