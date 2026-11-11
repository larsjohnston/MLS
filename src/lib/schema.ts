import { site, brands } from "@/data/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const sameAs = Object.values(site.social).filter(Boolean);

/** Primary LocalBusiness / Locksmith entity, emitted site-wide in the layout. */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  "@id": `${site.url}/#business`,
  name: site.name,
  legalName: site.legalName,
  description:
    "Mobile locksmith serving Winnipeg and surrounding communities since 1984 — locks and keys, rekeying, master key systems, access control, door repair, automatic doors, safes and vaults for businesses, homes and vehicles.",
  url: site.url,
  telephone: site.phone.e164,
  email: site.email,
  foundingDate: String(site.founded),
  slogan: site.tagline,
  priceRange: "$$",
  currenciesAccepted: "CAD",
  ...(sameAs.length ? { sameAs } : {}),
  ...(site.address.hasStorefront
    ? {
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
      }
    : {
        address: {
          "@type": "PostalAddress",
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
      }),
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
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
      ],
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
  ],
  areaServed: [
    { "@type": "City", name: "Winnipeg" },
    ...locations.map((l) => ({ "@type": "Place", name: l.name })),
  ],
  brand: brands.map((b) => ({ "@type": "Brand", name: b })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Locksmith services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.summary,
        url: `${site.url}/services/${s.slug}`,
      },
    })),
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  publisher: { "@id": `${site.url}/#business` },
  inLanguage: "en-CA",
};

export function serviceSchema(s: {
  slug: string;
  name: string;
  summary: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.summary,
    url: `${site.url}/services/${s.slug}`,
    serviceType: s.name,
    provider: { "@id": `${site.url}/#business` },
    areaServed: [
      { "@type": "City", name: "Winnipeg" },
      { "@type": "City", name: "Winnipeg" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: site.phone.e164,
      serviceUrl: `${site.url}/contact`,
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(p: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    dateModified: p.date,
    url: `${site.url}/blog/${p.slug}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@id": `${site.url}/#business` },
    mainEntityOfPage: `${site.url}/blog/${p.slug}`,
  };
}
