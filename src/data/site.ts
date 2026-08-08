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
  tagline: "Winnipeg's Fastest Locksmith",
  founded: 2012,
  domain: "manitobalock.com",
  url: "https://manitobalock.com",

  // TODO: replace with the real business phone number.
  phone: {
    display: "(204) 555-0100",
    href: "tel:+12045550100",
    e164: "+12045550100",
  },

  // TODO: replace with the real dispatch email.
  email: "dispatch@manitobalock.com",

  // TODO: replace with the real shop address, or set `hasStorefront: false`
  //       if the business runs mobile-only.
  address: {
    hasStorefront: true,
    street: "000 Example Street",
    locality: "Winnipeg",
    region: "MB",
    postalCode: "R0R 0R0",
    country: "CA",
  },

  // TODO: confirm hours. The site currently advertises 24/7 emergency service.
  hours: {
    office: "Monday – Friday, 8:00 a.m. – 5:00 p.m.",
    emergency: "24 hours a day, 7 days a week, 365 days a year",
    emergencyAlwaysOpen: true,
  },

  // Approximate coordinates for downtown Winnipeg. TODO: replace with the
  // shop's real latitude/longitude once the address is confirmed.
  geo: {
    latitude: 49.8951,
    longitude: -97.1384,
  },

  serviceArea: {
    primary: "Winnipeg, Manitoba",
    scope: "All of Manitoba",
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
} as const;

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
  { value: "2012", label: "Serving Manitoba since" },
  { value: "30 min", label: "Average Winnipeg response time" },
  { value: "24/7", label: "Emergency commercial dispatch" },
  { value: "100%", label: "Bonded, insured & licensed" },
];
