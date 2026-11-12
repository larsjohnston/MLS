/**
 * Central site configuration.
 *
 * ⚠️  PLACEHOLDERS — replace every value marked TODO before going live.
 *     Everything on the site (header, footer, click-to-call buttons, schema.org
 *     markup, contact page) reads from this file, so one edit updates them all.
 */

export const site = {
  name: "Manitoba Lock & Safe",
  legalName: "Manitoba Lock & Safe",
  tagline: "Winnipeg's Trusted Locksmiths Since 1984",
  founded: 1984,
  domain: "manitobalock.com",
  url: "https://manitobalock.com",

  phone: {
    display: "431.485.4498",
    href: "tel:+14314854498",
    e164: "+14314854498",
  },

  email: "max@manitobalock.com",

  // Mobile-only business: technicians come to the customer, so no street
  // address is shown anywhere. If a shop opens later, set `hasStorefront: true`
  // and fill in `street` and `postalCode`.
  address: {
    hasStorefront: false as boolean,
    street: "",
    locality: "Winnipeg",
    region: "MB",
    postalCode: "",
    country: "CA",
  },

  hours: {
    office: "Monday – Friday, 8:00 a.m. – 5:00 p.m.",
    short: "Mon–Fri, 8–5",
    opens: "08:00",
    closes: "17:00",
  },

  // Approximate coordinates for central Winnipeg (mobile service, no shop).
  geo: {
    latitude: 49.8951,
    longitude: -97.1384,
  },

  serviceArea: {
    primary: "Winnipeg, Manitoba",
    scope: "Winnipeg and surrounding communities",
  },

  // TODO: add real profile URLs, then they will appear in the footer and in
  //       the sameAs property of the LocalBusiness schema.
  social: {
    google: "",
    facebook: "",
    linkedin: "",
    instagram: "",
  },

  // Where the quote form posts. TODO: create a Formspree (or similar) endpoint
  // and paste the URL here, or set up an email-forwarding API route.
  formEndpoint: "",

  // TODO: drop real photographs into /public and reference them here. Any entry
  // left empty renders a clearly-marked placeholder instead of a broken image.
  media: {
    // A wide shot of the team or crew in front of the vehicles works best.
    teamPhoto: "", // e.g. "/team.jpg"
    teamPhotoAlt: "The Manitoba Lock & Safe technicians with a service van",
    // A side-on shot of a service van. Shown on the homepage.
    vanPhoto: "/van.webp",
    vanPhotoAlt:
      "A Manitoba Lock & Safe service van, white with blue and black diagonal stripes and a red cab",
  },
} as const;

/** Single-line address, used for maps links and directions. */
export const fullAddress = site.address.hasStorefront
  ? `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`
  : `${site.address.locality}, ${site.address.region}`;

/** Google Maps embed (no API key required). */
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.name}, ${fullAddress}`,
)}&output=embed`;

/** Opens turn-by-turn directions from the visitor's current location. */
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  fullAddress,
)}`;

export const credentials = [
  {
    title: "Bonded & Insured",
    body: "Full liability coverage and bonding on every technician who works on your property.",
  },
  {
    title: "Manitoba Security Business Licence",
    body: "Licensed to operate as a security business under Manitoba's Private Investigators and Security Guards Act.",
  },
  {
    title: "ALOA Member",
    body: "Members of the Associated Locksmiths of America, holding CRL, CPL and CJIL certifications.",
  },
  {
    title: "Manitoba Locksmith Association",
    body: "Active members of the provincial trade association representing Manitoba's professional locksmiths.",
  },
  {
    title: "WCB Coverage in Good Standing",
    body: "Workers Compensation Board coverage maintained in good standing — clearance letters available on request.",
  },
  {
    title: "BBB Accredited",
    body: "Accredited by the Better Business Bureau, with a track record you can verify before you call.",
  },
  {
    title: "Factory-Certified",
    body: "Certified dealers and installers for Medeco, Mul-T-Lock, ASSA Abloy, Schlage and other commercial-grade brands.",
  },
];

export const brands = [
  "Medeco",
  "Mul-T-Lock",
  "ASSA Abloy",
  "Schlage",
  "Best",
  "Sargent",
  "Von Duprin",
  "LCN",
  "Corbin Russwin",
  "Kaba",
  "Adams Rite",
  "Detex",
];

/**
 * Named commercial references supplied by the business.
 * ⚠️  Confirm you have written permission before publishing client names, and
 *     do not add client logos without a signed brand-use approval.
 */
export const clients = [
  "Winnipeg Airport Authority",
  "Winnipeg Convention Centre",
  "Brookfield Properties",
  "Joey Restaurants",
  "Earls Restaurants",
];

export const stats = [
  { value: String(1984), label: "Serving Winnipeg since" },
  { value: "Mobile", label: "We come to you" },
  { value: "Mon–Fri", label: "8 a.m. – 5 p.m." },
  { value: "100%", label: "Bonded, insured & licensed" },
];
