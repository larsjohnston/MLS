/**
 * ⚠️  REVIEW BEFORE PUBLISHING ⚠️
 *
 * These case studies name real organisations supplied as references by the
 * business. Two things must happen before this page goes live:
 *
 *   1. WRITTEN PERMISSION. Confirm each named client is content to be named
 *      publicly. Do NOT add client logos without a signed brand-use approval —
 *      names alone are used here deliberately.
 *   2. FACTUAL SIGN-OFF. The copy below is deliberately written at the level of
 *      service categories and general scope, with NO invented dates, dollar
 *      figures, door counts or incident details. Replace the `scope` and
 *      `outcome` text with specifics only once someone who worked the account
 *      has confirmed them.
 *
 * Anything you cannot verify should be cut, not softened.
 */

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  location: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  challenge: string[];
  scope: string[];
  outcome: string[];
  services: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "winnipeg-airport-authority",
    client: "Winnipeg Airport Authority",
    sector: "Aviation & Transportation",
    location: "Winnipeg, MB",
    summary:
      "Commercial locksmith support for a 24-hour aviation facility, where access is layered by security zone and nothing can be taken out of service during operations.",
    metaTitle: "Case Study: Winnipeg Airport Authority | Manitoba Lock & Safe",
    metaDescription:
      "How Manitoba Lock & Safe supports the Winnipeg Airport Authority with commercial locksmith services for a 24-hour aviation facility with layered, zone-based access control.",
    challenge: [
      "An airport never closes, and its access requirements are unlike any other building type in the province. Public concourse, tenant retail and restaurant space, airline operations areas, baggage handling, airside access and restricted security zones all coexist under one roof, each with a different population entitled to enter it.",
      "Work in that environment has to be planned around operations rather than convenience. A door cannot simply be taken out of service, technicians must work within site security procedures, and hardware on public-facing openings cycles at volumes that destroy anything less than commercial-grade.",
    ],
    scope: [
      "Commercial door hardware supply, installation and repair across public, tenant and operational areas",
      "High-cycle exit device and door closer service on public-facing openings",
      "Key system administration and controlled key issuing",
      "Scheduled attendance planned around operational windows and site security procedures",
      "24/7 emergency response availability",
    ],
    outcome: [
      "A commercial locksmith relationship built around an operation that does not stop, with work sequenced so that openings stay in service and site security procedures are followed as a matter of routine rather than negotiation.",
    ],
    services: [
      "commercial-lock-repair-installation-winnipeg",
      "panic-bars-exit-devices-winnipeg",
      "master-key-systems-winnipeg",
      "access-control-systems-winnipeg",
    ],
  },
  {
    slug: "winnipeg-convention-centre",
    client: "Winnipeg Convention Centre",
    sector: "Events & Hospitality",
    location: "Downtown Winnipeg, MB",
    summary:
      "Access management for a major event venue where the population of the building changes completely from one week to the next.",
    metaTitle: "Case Study: Winnipeg Convention Centre | Manitoba Lock & Safe",
    metaDescription:
      "How Manitoba Lock & Safe supports the Winnipeg Convention Centre with event venue access control, high-traffic hardware service and emergency response in downtown Winnipeg.",
    challenge: [
      "A convention centre reconfigures itself constantly. Exhibitors, contractors, caterers, promoters and thousands of attendees move through the building for an event and are gone by the following week, replaced by an entirely different group with entirely different access needs.",
      "That churn sits on top of permanent requirements: back-of-house and kitchen security, office and administrative areas, storage for high-value AV equipment, and egress hardware on assembly-occupancy doors that has to be beyond question every single day.",
    ],
    scope: [
      "Exit device, closer and egress hardware service on assembly-occupancy openings",
      "Back-of-house, storage and administrative area access management",
      "Key system administration for permanent staff, contractors and event vendors",
      "Hardware repair scheduled between events and around load-in windows",
      "Emergency response during events and outside business hours",
    ],
    outcome: [
      "Event-driven access handled as a routine operating rhythm rather than a recurring scramble, with life-safety hardware maintained to the standard an assembly occupancy demands.",
    ],
    services: [
      "panic-bars-exit-devices-winnipeg",
      "access-control-systems-winnipeg",
      "master-key-systems-winnipeg",
      "emergency-commercial-lockout-winnipeg",
    ],
  },
  {
    slug: "brookfield-properties",
    client: "Brookfield Properties",
    sector: "Commercial Real Estate",
    location: "Winnipeg, MB",
    summary:
      "Portfolio-level locksmith support for commercial real estate, where tenant turnover, contractor access and owner-ready documentation all have to run to schedule.",
    metaTitle: "Case Study: Brookfield Properties | Manitoba Lock & Safe",
    metaDescription:
      "How Manitoba Lock & Safe supports Brookfield Properties with portfolio-level commercial locksmith services — tenant turnover, master key systems and documented key control in Winnipeg.",
    challenge: [
      "Commercial real estate at portfolio scale turns locksmithing into a logistics problem. Tenant suites turn over on lease dates that cannot move, contractors and cleaners need access to common and mechanical areas without ever reaching tenant space, and every dollar spent has to reconcile against the right property.",
      "Documentation matters as much as the hardware. Property managers change roles, and a key system that only one person understands is a liability waiting for the day that person is unavailable.",
    ],
    scope: [
      "Tenant suite rekeying scheduled around lease commencement and vacancy dates",
      "Master key hierarchies separating tenant, common area, mechanical and contractor access",
      "Key records maintained per building so requests can be actioned without a fresh site survey",
      "Access control installation and service on perimeter and common-area doors",
      "Per-property invoicing against purchase and work order numbers",
    ],
    outcome: [
      "Turnover handled to the leasing calendar rather than to the locksmith's, with key documentation held per property so a change of on-site manager never means starting the record over.",
    ],
    services: [
      "commercial-rekeying-winnipeg",
      "master-key-systems-winnipeg",
      "access-control-systems-winnipeg",
      "door-frame-storefront-repair-winnipeg",
    ],
  },
  {
    slug: "joey-restaurants",
    client: "Joey Restaurants",
    sector: "Restaurants & Hospitality",
    location: "Winnipeg, MB",
    summary:
      "Multi-location restaurant security handled in the gaps between services — turnover rekeys, back-of-house control and cash handling.",
    metaTitle: "Case Study: Joey Restaurants | Manitoba Lock & Safe",
    metaDescription:
      "How Manitoba Lock & Safe supports Joey Restaurants in Winnipeg with staff turnover rekeys, back-of-house access control, deposit safe service and between-service scheduling.",
    challenge: [
      "Restaurants combine the highest staff turnover of any sector we serve with the least tolerance for downtime. Keys leave with departing staff regularly, the liquor room and the office are the two spaces that must stay controlled, and there is a narrow window between lunch and dinner when work can happen without costing covers.",
      "Cash handling adds a second layer. A float and a nightly deposit have to be secured in a way that lets a manager deposit without being able to open the safe.",
    ],
    scope: [
      "Rapid rekeying and credential changes on keyholder turnover",
      "Back-of-house, liquor room and office access control",
      "Deposit safe service, combination changes and cash-handling security",
      "Rear exit door hardware, closers and door prop alarms",
      "Work scheduled between services or overnight to protect trading hours",
    ],
    outcome: [
      "Security changes that keep pace with restaurant staffing, delivered inside the operating windows the business actually has rather than against them.",
    ],
    services: [
      "commercial-rekeying-winnipeg",
      "access-control-systems-winnipeg",
      "safe-opening-service-winnipeg",
      "panic-bars-exit-devices-winnipeg",
    ],
  },
  {
    slug: "earls-restaurants",
    client: "Earls Restaurants",
    sector: "Restaurants & Hospitality",
    location: "Winnipeg, MB",
    summary:
      "High-traffic restaurant hardware, controlled inventory storage and emergency response that arrives before service is affected.",
    metaTitle: "Case Study: Earls Restaurants | Manitoba Lock & Safe",
    metaDescription:
      "How Manitoba Lock & Safe supports Earls Restaurants in Winnipeg with high-traffic door hardware, liquor and stock room access control, safe service and 24/7 emergency response.",
    challenge: [
      "A busy restaurant cycles its doors thousands of times a week, and every one of those cycles lands on hardware that also has to satisfy egress requirements. Closers drift, latches wear, and back doors get propped on hot nights by staff who need airflow more than they need a security policy.",
      "Inventory control runs in parallel. Liquor, dry storage and walk-in access are where shrink shows up, and a key-based approach cannot tell you who opened what.",
    ],
    scope: [
      "High-cycle door hardware, closer and exit device service",
      "Liquor room, stock room and walk-in access control with audit trails",
      "Staff turnover rekeys and credential revocation",
      "Deposit safe supply, service and combination management",
      "24/7 emergency lockout and hardware failure response",
    ],
    outcome: [
      "Door hardware maintained ahead of failure instead of after it, and inventory access recorded rather than assumed — with emergency cover for the nights when something goes wrong anyway.",
    ],
    services: [
      "panic-bars-exit-devices-winnipeg",
      "access-control-systems-winnipeg",
      "commercial-rekeying-winnipeg",
      "emergency-commercial-lockout-winnipeg",
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
