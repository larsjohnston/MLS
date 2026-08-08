export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  intro: string[];
  challenges: { title: string; body: string }[];
  services: string[];
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "property-management",
    name: "Property Management",
    shortName: "Property Management",
    icon: "building",
    summary:
      "Portfolio-wide key control, tenant turnover rekeys and one invoice trail your owners can actually audit.",
    metaTitle: "Locksmith for Property Managers Winnipeg | Manitoba Lock & Safe",
    metaDescription:
      "Commercial locksmith services for Winnipeg property managers. Tenant turnover rekeys, master key systems, access control and 24/7 emergency response across your whole portfolio.",
    heroHeading: "Locksmith services built for a portfolio, not a single door",
    intro: [
      "Property managers do not have a lock problem, they have a scale problem. Twenty buildings, hundreds of doors, constant tenant churn, contractors who need access on Tuesdays only, and an owner who wants to know why the maintenance line item moved. Manitoba Lock & Safe works the way your portfolio works — standardised hardware, documented key systems and invoicing that reconciles cleanly against each property.",
      "We hold key records per building, so a turnover request does not start with somebody hunting for the right key. When a suite changes hands, we already know the cylinder, the keyway and the master hierarchy it sits in, and we can be on site before the new tenant's moving truck is.",
    ],
    challenges: [
      {
        title: "Tenant turnover under deadline",
        body: "Suite rekeys scheduled around move-out and move-in dates, so a unit is never handed over with keys still in circulation.",
      },
      {
        title: "Contractor and vendor access",
        body: "Master key levels or access-control credentials that open common areas and mechanical rooms without opening tenant space.",
      },
      {
        title: "Undocumented legacy systems",
        body: "Inherited buildings audited and charted, so you know what your keys open before an incident tells you.",
      },
      {
        title: "After-hours emergencies",
        body: "24/7 dispatch for lockouts, break-ins and failed hardware, with a technician who can act without waiting for approvals.",
      },
      {
        title: "Owner-ready documentation",
        body: "Itemised invoices, key schedules and per-property records that survive an audit and a change of manager.",
      },
    ],
    services: [
      "commercial-rekeying-winnipeg",
      "master-key-systems-winnipeg",
      "access-control-systems-winnipeg",
      "emergency-commercial-lockout-winnipeg",
      "door-frame-storefront-repair-winnipeg",
    ],
    faqs: [
      {
        q: "Can you hold key records for our whole portfolio?",
        a: "Yes. We maintain key system charts and bitting records per property, secured, so any authorised person on your team can order keys or request a rekey without producing paperwork every time.",
      },
      {
        q: "Do you offer account billing across multiple properties?",
        a: "We invoice per property against your PO or work-order number, so costs land in the right building's ledger without your accounting team having to split anything manually.",
      },
      {
        q: "How fast can you turn around a suite rekey?",
        a: "Same-day in most of Winnipeg when the request comes in the morning. For scheduled turnovers, tell us the date and we will book it in advance.",
      },
    ],
  },

  {
    slug: "multifamily-residential",
    name: "Multifamily Residential",
    shortName: "Multifamily",
    icon: "apartment",
    summary:
      "Apartment and condo buildings: suite turnover, common-area access, mailboxes and fob systems that survive constant resident churn.",
    metaTitle: "Apartment & Condo Locksmith Winnipeg | Multifamily Security",
    metaDescription:
      "Multifamily locksmith services in Winnipeg. Suite rekeys, common-area master keying, fob and intercom access control, mailbox locks and 24/7 emergency response for apartments and condos.",
    heroHeading: "Apartment and condo security that keeps up with turnover",
    intro: [
      "A multifamily building is the hardest key-control environment there is. Residents come and go monthly, every suite has its own cylinder, common areas need contractor and staff access, and the one thing you can never say to a resident is that their old key might still work. Manitoba Lock & Safe keeps apartment and condo buildings across Winnipeg on documented systems that hold up through years of churn.",
      "We handle the whole envelope — suite locks, common entrance and fob systems, mailbox banks, storage lockers, parkade doors, garbage and mechanical rooms — under one master hierarchy so caretakers carry one key rather than a jangling ring, and residents get exactly the access their lease grants them.",
    ],
    challenges: [
      {
        title: "Suite turnover volume",
        body: "Fast, documented suite rekeys between residents, batched around month-end when your turnover load peaks.",
      },
      {
        title: "Common area access",
        body: "Fob or master-key access to lobbies, parkades, laundry, storage and mechanical rooms, controlled separately from suites.",
      },
      {
        title: "Lost fobs and resident lockouts",
        body: "Fobs revoked instantly and reissued, and after-hours resident lockouts handled without dragging your caretaker out of bed.",
      },
      {
        title: "Mailbox and locker banks",
        body: "Canada Post-compatible mailbox locks and storage locker hardware rekeyed on turnover.",
      },
      {
        title: "Condo board reporting",
        body: "Documentation and quotes written so a board can approve them without a translator.",
      },
    ],
    services: [
      "commercial-rekeying-winnipeg",
      "master-key-systems-winnipeg",
      "access-control-systems-winnipeg",
      "file-cabinet-desk-locks-winnipeg",
      "emergency-commercial-lockout-winnipeg",
    ],
    faqs: [
      {
        q: "Can residents keep their own suite key while you rekey common doors?",
        a: "Yes. Suite cylinders and common-area cylinders are separate levels of the system, so common-area changes leave every resident's suite key untouched.",
      },
      {
        q: "Do you handle month-end turnover volume?",
        a: "That is our normal rhythm in multifamily. Send the suite list ahead of month-end and we will schedule the batch rather than working through it as individual calls.",
      },
      {
        q: "What about buildings with an old fob system nobody supports?",
        a: "We take over orphaned systems regularly — reprogramming, replacing dead readers, or migrating you to a supported platform in phases so the building is never left open.",
      },
    ],
  },

  {
    slug: "retail",
    name: "Retail & Shopping Centres",
    shortName: "Retail",
    icon: "store",
    summary:
      "Storefront hardware, cash-handling safes, loss-prevention exit control and break-in response that gets you trading again the same day.",
    metaTitle: "Retail Locksmith Winnipeg | Storefront & Shop Security",
    metaDescription:
      "Retail locksmith services in Winnipeg. Aluminium storefront door repair, deposit safes, delayed egress and exit alarms, rekeying and 24/7 break-in response for shops and shopping centres.",
    heroHeading: "Retail security that protects margin, not just merchandise",
    intro: [
      "Retail is unforgiving about downtime. A door that will not lock means somebody stays overnight; a door that will not open means the store does not open. We keep Winnipeg retailers trading — aluminium storefront hardware repaired, deposit safes specified for the float, exit doors controlled so the fire exit is not also the theft exit.",
      "We also respond to break-ins, which in retail arrive at three in the morning and need to be resolved by opening. Emergency securing, frame repair, hardware replacement and the itemised documentation your insurer will demand, handled as one job rather than four separate trades.",
    ],
    challenges: [
      {
        title: "Storefront doors in a Winnipeg winter",
        body: "Aluminium doors that rack, drop and refuse to latch when the temperature swings — repaired properly instead of patched.",
      },
      {
        title: "Cash handling",
        body: "Deposit safes with drop slots and time-delay locks so staff can deposit without being able to open the safe.",
      },
      {
        title: "Shrink at the fire exit",
        body: "Delayed egress and exit alarms that cut theft through rear doors while remaining code-compliant.",
      },
      {
        title: "Staff turnover",
        body: "Rapid rekeys and credential changes when a keyholder leaves, so a resignation is not a security event.",
      },
      {
        title: "Break-in recovery",
        body: "Overnight securing and same-day permanent repair, documented for insurance.",
      },
    ],
    services: [
      "door-frame-storefront-repair-winnipeg",
      "safe-opening-service-winnipeg",
      "panic-bars-exit-devices-winnipeg",
      "commercial-rekeying-winnipeg",
      "emergency-commercial-lockout-winnipeg",
    ],
    faqs: [
      {
        q: "Can we lock our back door to stop staff theft?",
        a: "Not by chaining or deadbolting it — that is a code violation with real consequences. Delayed egress hardware and local exit alarms achieve the same loss-prevention result legally, and we install both.",
      },
      {
        q: "What kind of safe should we buy for daily cash?",
        a: "A deposit safe with a drop slot and time-delay lock. Check your insurance policy first — many specify a minimum rating, and buying under it can void your coverage on a claim.",
      },
      {
        q: "How fast can you respond to a break-in?",
        a: "Immediately, day or night. Securing the opening comes first so you can trade, with permanent repair scheduled right behind it.",
      },
    ],
  },

  {
    slug: "office-buildings",
    name: "Office Buildings",
    shortName: "Office Buildings",
    icon: "office",
    summary:
      "Tenant suites, common areas and server rooms under one coherent access plan, with audit trails where they matter.",
    metaTitle: "Office Building Locksmith Winnipeg | Commercial Access Control",
    metaDescription:
      "Office building locksmith services in Winnipeg. Master key systems, tenant suite rekeys, access control with audit trails, server room security and 24/7 emergency response.",
    heroHeading: "Office access that scales from one suite to a whole tower",
    intro: [
      "Office buildings run on layered access: the public gets the lobby, tenants get their floor, staff get their suite, cleaners get everything after hours but nothing during the day, and IT gets the server room alone. Manitoba Lock & Safe designs and maintains that hierarchy for Winnipeg office buildings, mechanically, electronically, or the sensible combination of both.",
      "We work around tenants rather than through them. Rekeys and installations are scheduled evenings and weekends where they would disrupt business, and every change is documented so the building's access plan stays intelligible when your facilities lead changes jobs.",
    ],
    challenges: [
      {
        title: "Layered tenant access",
        body: "Master key hierarchies and access groups that separate public, tenant, staff and after-hours access cleanly.",
      },
      {
        title: "Cleaning and contractor access",
        body: "Time-limited credentials for vendors, so after-hours access does not mean unlimited access.",
      },
      {
        title: "Server and comms rooms",
        body: "High-security cylinders and audited electronic access on the rooms where a breach is a data-loss event.",
      },
      {
        title: "Suite turnover",
        body: "Fast rekeys and credential changes on tenant move-out, coordinated with the leasing schedule.",
      },
      {
        title: "Audit and compliance",
        body: "Access logs and key registers that satisfy auditors, insurers and tenant security requirements.",
      },
    ],
    services: [
      "master-key-systems-winnipeg",
      "access-control-systems-winnipeg",
      "high-security-locks-winnipeg",
      "commercial-rekeying-winnipeg",
      "file-cabinet-desk-locks-winnipeg",
    ],
    faqs: [
      {
        q: "Can you work outside business hours so tenants are not disturbed?",
        a: "Yes, and for most office work we recommend it. Evening and weekend scheduling is standard for us on occupied buildings.",
      },
      {
        q: "Should we go fully electronic?",
        a: "Rarely worth it. Perimeter, sensitive and high-turnover doors earn their keep on access control; interior offices are usually better served by mechanical master keying. We design the mix rather than selling you the maximum.",
      },
      {
        q: "Can you provide access reports for an incident?",
        a: "If the door is on an access control system, yes — door-by-door event logs for whatever window you need, exportable for an investigation or an insurance claim.",
      },
    ],
  },

  {
    slug: "warehouse-industrial",
    name: "Warehouse & Industrial",
    shortName: "Warehouse & Industrial",
    icon: "warehouse",
    summary:
      "Yards, docks, overhead doors, gates and high-value inventory secured against theft — in hardware built for cold and abuse.",
    metaTitle: "Industrial & Warehouse Locksmith Winnipeg | Dock & Yard Security",
    metaDescription:
      "Warehouse and industrial locksmith services in Winnipeg. Dock doors, gates, high-security padlocks, access control for shift workers and 24/7 emergency response across Manitoba.",
    heroHeading: "Security for docks, yards and everything behind the fence",
    intro: [
      "Industrial sites fail at the perimeter — the yard gate, the dock door, the man door beside the overhead, the padlock on the trailer. Those are the points that see the most abuse, the most weather and the least attention, and they are exactly where theft happens. We secure the perimeter with hardware rated for the traffic and the Manitoba climate, not with whatever fit at the time.",
      "Inside, we handle shift-based access, tool crib and parts cage control, and the key or credential management that a workforce running three shifts needs. Where an operation runs around the clock, we schedule work into the gaps rather than shutting a door your forklifts need.",
    ],
    challenges: [
      {
        title: "Perimeter and gate hardware",
        body: "High-security padlocks, shrouded hasps, gate locks and chain security that resist bolt cutters and cold.",
      },
      {
        title: "Dock and overhead doors",
        body: "Man doors, dock locks and overhead door security hardware maintained so a loading bay is not the weak point.",
      },
      {
        title: "Shift-based access",
        body: "Credentials scheduled by shift, so night access is granted to the crew that works nights and nobody else.",
      },
      {
        title: "Tool cribs and parts cages",
        body: "Controlled access on high-value inventory, with audit trails where shrink is a problem.",
      },
      {
        title: "Cold weather reliability",
        body: "Hardware and lubricants specified for Manitoba winters, because frozen padlocks stop trucks.",
      },
    ],
    services: [
      "access-control-systems-winnipeg",
      "high-security-locks-winnipeg",
      "commercial-lock-repair-installation-winnipeg",
      "door-frame-storefront-repair-winnipeg",
      "emergency-commercial-lockout-winnipeg",
    ],
    faqs: [
      {
        q: "Do you service gates and padlocks, or only doors?",
        a: "Both. Yard gates, chain and hasp security, high-security padlocks and keyed-alike padlock sets for a whole site are routine work for us.",
      },
      {
        q: "Our padlocks freeze every winter. Is there a fix?",
        a: "Yes — shrouded weather-resistant padlock bodies, the right dry lubricant instead of the wrong wet one, and covered hasps. It is a specification problem, not an inevitability.",
      },
      {
        q: "Can you work around a 24-hour operation?",
        a: "We schedule around production. Tell us the window where a door can be out of service and we will work in it, including overnight.",
      },
    ],
  },

  {
    slug: "restaurants-hospitality",
    name: "Restaurants & Hospitality",
    shortName: "Restaurants & Hospitality",
    icon: "restaurant",
    summary:
      "Back-of-house control, liquor and stock rooms, deposit safes and staff turnover handled without touching service hours.",
    metaTitle: "Restaurant Locksmith Winnipeg | Hospitality Security Services",
    metaDescription:
      "Restaurant and hospitality locksmith services in Winnipeg. Back-of-house access control, liquor room security, deposit safes, staff turnover rekeys and 24/7 emergency response.",
    heroHeading: "Locksmith work that happens between services, not during them",
    intro: [
      "Restaurants have the highest staff turnover of any sector we serve and the least tolerance for downtime. A key walks out the door most months, the liquor room and the office are the two rooms that must stay controlled, and there is a two-hour window between lunch and dinner when work can happen without costing covers.",
      "Manitoba Lock & Safe works to that reality. We rekey and service in the gaps between services, we specify deposit safes so a manager can drop the till without being able to open it, and we handle the back door — the one propped open on every hot night — with hardware and alarms that keep it secure without making the kitchen's life impossible.",
    ],
    challenges: [
      {
        title: "Constant staff turnover",
        body: "Fast rekeys and instant credential revocation when a keyholder leaves, at restaurant speed.",
      },
      {
        title: "Liquor and stock control",
        body: "Controlled access on liquor rooms, walk-ins and dry storage, with audit trails where inventory keeps disappearing.",
      },
      {
        title: "Cash and deposits",
        body: "Deposit safes with time delay, so the float is protected and staff are not a target.",
      },
      {
        title: "The propped back door",
        body: "Door alarms and closers that let staff work while keeping the alley door genuinely secure.",
      },
      {
        title: "Multi-location consistency",
        body: "One hardware standard and one key system across every location in a restaurant group.",
      },
    ],
    services: [
      "commercial-rekeying-winnipeg",
      "access-control-systems-winnipeg",
      "safe-opening-service-winnipeg",
      "panic-bars-exit-devices-winnipeg",
      "emergency-commercial-lockout-winnipeg",
    ],
    faqs: [
      {
        q: "Can you work between lunch and dinner service?",
        a: "That is our preferred window for restaurant work, and we book into it deliberately. Overnight is available where a job needs longer.",
      },
      {
        q: "How do we stop the liquor room walking?",
        a: "Access control with an audit trail on that single door. Knowing exactly who opened it and when resolves most inventory disputes within a week of going in.",
      },
      {
        q: "Do you service restaurant groups across multiple sites?",
        a: "Yes. Group clients get a common hardware standard, a shared key system and one point of contact for every location.",
      },
    ],
  },

  {
    slug: "healthcare",
    name: "Healthcare, Medical & Dental",
    shortName: "Healthcare",
    icon: "health",
    summary:
      "Narcotics storage, records privacy and controlled clinical access — built to withstand an audit as well as an intruder.",
    metaTitle: "Medical & Dental Clinic Locksmith Winnipeg | Healthcare Security",
    metaDescription:
      "Healthcare locksmith services in Winnipeg. Narcotics cabinet and safe security, records room access control, high-security locks and audit trails for clinics and medical offices.",
    heroHeading: "Clinical security that satisfies auditors as well as intruders",
    intro: [
      "Healthcare security is regulated security. Controlled substances have storage requirements, patient records carry privacy obligations under PHIA, and both come with the expectation that you can demonstrate who had access, not merely assert it. Manitoba Lock & Safe works with Winnipeg clinics, medical and dental offices and healthcare facilities to build access that stands up to inspection.",
      "That means narcotics safes anchored and specified properly, records rooms on audited access rather than a shared key, restricted keyways so a clinic key cannot be copied at a kiosk, and documentation you can hand to an auditor without a two-week scramble.",
    ],
    challenges: [
      {
        title: "Controlled substance storage",
        body: "Narcotics safes and cabinets specified, installed and anchored to meet regulatory storage requirements.",
      },
      {
        title: "Patient record privacy",
        body: "Records rooms and file cabinets secured and audited in line with PHIA obligations.",
      },
      {
        title: "Role-based clinical access",
        body: "Access separated by role — clinical, administrative, cleaning — rather than one key for the whole clinic.",
      },
      {
        title: "Staff and locum turnover",
        body: "Credentials issued and revoked quickly as locums, students and staff rotate through.",
      },
      {
        title: "Audit evidence",
        body: "Key registers and access logs that demonstrate control rather than claiming it.",
      },
    ],
    services: [
      "high-security-locks-winnipeg",
      "access-control-systems-winnipeg",
      "safe-opening-service-winnipeg",
      "file-cabinet-desk-locks-winnipeg",
      "master-key-systems-winnipeg",
    ],
    faqs: [
      {
        q: "What kind of safe do we need for narcotics?",
        a: "It depends on quantity and your regulator's current requirements, but anchoring, a proper rating and controlled access are always part of it. We specify against the requirement rather than guessing, and we install and anchor it correctly.",
      },
      {
        q: "Can you show who accessed the records room?",
        a: "With access control on that door, yes — a complete event log per door, which is far stronger evidence than a key sign-out sheet during an audit.",
      },
      {
        q: "Do your technicians work in occupied clinical space?",
        a: "Yes. Our technicians are police-record checked, work around patient hours, and are used to clinical environments and privacy expectations.",
      },
    ],
  },

  {
    slug: "education",
    name: "Schools, Daycares & Educational Institutions",
    shortName: "Education",
    icon: "school",
    summary:
      "Classroom lockdown function, controlled entry vestibules and campus-wide key systems that a caretaker can actually run.",
    metaTitle: "School & Campus Locksmith Winnipeg | Educational Security",
    metaDescription:
      "Locksmith services for schools, daycares, colleges and universities in Winnipeg. Classroom lockdown hardware, controlled entry, campus master key systems, lockers and access control.",
    heroHeading: "Campus security from the front vestibule to the last classroom",
    intro: [
      "Schools ask more of their door hardware than almost any other building type. A classroom door has to lock from the inside without a teacher stepping into a corridor, egress has to stay unimpeded, the front entrance has to control who comes in during the day while releasing everyone instantly in an emergency, and a caretaker has to be able to open any door in the building at two in the morning.",
      "Manitoba Lock & Safe designs and maintains that for Winnipeg and Manitoba schools, daycares, colleges and universities — classroom lockdown-function hardware, controlled entry vestibules, campus-wide master key hierarchies, locker banks, and access control that follows the school calendar instead of fighting it.",
    ],
    challenges: [
      {
        title: "Classroom lockdown",
        body: "Classroom security-function locksets that lock from inside the room without a teacher entering the corridor.",
      },
      {
        title: "Controlled entry vestibules",
        body: "Front-entrance access control and intercom entry that manages daytime visitors without impeding egress.",
      },
      {
        title: "Campus key hierarchies",
        body: "Master systems giving caretakers, administration, teachers and contractors precisely the access their role requires.",
      },
      {
        title: "Lockers and gymnasiums",
        body: "Locker banks, gym and equipment room hardware maintained through heavy student use.",
      },
      {
        title: "Summer window scheduling",
        body: "Larger projects delivered during breaks, when the building is empty and the work is cheapest to do.",
      },
    ],
    services: [
      "master-key-systems-winnipeg",
      "panic-bars-exit-devices-winnipeg",
      "access-control-systems-winnipeg",
      "commercial-lock-repair-installation-winnipeg",
      "file-cabinet-desk-locks-winnipeg",
    ],
    faqs: [
      {
        q: "What hardware do you recommend for classroom lockdown?",
        a: "A classroom security-function lockset, which locks the corridor side from inside the room with a thumbturn or an inside key while the door still opens freely from within for egress. It removes the need for a teacher to step into a hallway during a lockdown.",
      },
      {
        q: "Can you schedule work during school breaks?",
        a: "Yes, and we plan for it. Summer and winter breaks are when we deliver most rekeys, master system installs and hardware upgrades for education clients.",
      },
      {
        q: "Do your technicians have record checks?",
        a: "All technicians working in schools and daycares carry current criminal record and child abuse registry checks, and we provide the documentation before we attend.",
      },
    ],
  },

  {
    slug: "government-municipal",
    name: "Government & Municipal",
    shortName: "Government",
    icon: "government",
    summary:
      "Procurement-ready documentation, security clearances and hardware standards that satisfy public-sector requirements.",
    metaTitle: "Government & Municipal Locksmith Winnipeg | Public Sector Security",
    metaDescription:
      "Locksmith services for government and municipal facilities in Winnipeg and Manitoba. Tendered work, high-security key control, access control, documented compliance and cleared technicians.",
    heroHeading: "Public-sector locksmith work, documented to the standard required",
    intro: [
      "Public-sector work carries requirements that private clients rarely impose: competitive procurement, insurance and bonding thresholds, WCB clearance, cleared personnel, prescribed hardware standards and documentation that survives an access-to-information request. Manitoba Lock & Safe is set up to meet those requirements rather than to work around them.",
      "We serve municipal buildings, provincial facilities, public works yards, community centres and libraries across Manitoba — from a single hardware repair on a purchase order through to a tendered building-wide access control installation, with the submittals, closeout documentation and as-built key charts each contract requires.",
    ],
    challenges: [
      {
        title: "Procurement compliance",
        body: "Tender responses, bonding, insurance certificates and WCB clearance letters supplied without delay.",
      },
      {
        title: "Cleared personnel",
        body: "Technicians with current criminal record checks and, where required, additional site clearance.",
      },
      {
        title: "Hardware standards",
        body: "Work delivered to your prescribed hardware specification and finish schedule, not to whatever is on the truck.",
      },
      {
        title: "High-security key control",
        body: "Restricted keyways with signature-controlled ordering for facilities where key accountability is mandatory.",
      },
      {
        title: "Records and closeout",
        body: "As-built key charts, door schedules and closeout packages delivered in the format your records team requires.",
      },
    ],
    services: [
      "high-security-locks-winnipeg",
      "master-key-systems-winnipeg",
      "access-control-systems-winnipeg",
      "panic-bars-exit-devices-winnipeg",
      "commercial-lock-repair-installation-winnipeg",
    ],
    faqs: [
      {
        q: "Can you provide bonding and insurance documentation for a tender?",
        a: "Yes — certificates of insurance, bonding confirmation and a WCB clearance letter are available on request and turned around quickly for a bid deadline.",
      },
      {
        q: "Do you work to a prescribed hardware standard?",
        a: "Routinely. Supply us the specification and finish schedule and we will quote and install exactly to it, flagging anything in the spec that would conflict with code.",
      },
      {
        q: "Can you handle multi-site municipal portfolios?",
        a: "Yes. Multi-site key systems, standardised hardware and per-facility reporting are a core part of what we do for public-sector clients.",
      },
    ],
  },

  {
    slug: "churches-nonprofits",
    name: "Churches & Non-Profits",
    shortName: "Churches & Non-Profits",
    icon: "church",
    summary:
      "Buildings used by many groups, on a budget — key control that works when fifty volunteers hold keys.",
    metaTitle: "Church & Non-Profit Locksmith Winnipeg | Community Building Security",
    metaDescription:
      "Locksmith services for churches, non-profits and community organisations in Winnipeg. Volunteer key control, hall and group access, affordable rekeying and access control upgrades.",
    heroHeading: "Security for buildings that a whole community uses",
    intro: [
      "Churches, community centres and non-profits face a key-control problem that no corporate security model addresses: dozens of volunteers, a hall rented to outside groups, a food bank operating on Thursdays, a daycare in the basement, and a budget that has to justify every dollar to a board or a congregation.",
      "We build access plans that fit that reality. Volunteers get access to what they need on the days they need it. Rented spaces are separated from offices and donation storage. And where a full electronic system is not affordable, we say so and design the mechanical system that gets you most of the benefit for a fraction of the cost.",
    ],
    challenges: [
      {
        title: "Volunteer key turnover",
        body: "Practical key control when many volunteers hold keys and returns are inconsistent — usually starting with restricted keys.",
      },
      {
        title: "Rented and shared spaces",
        body: "Hall and meeting-room access separated from offices, kitchens and storage, so a rental never means run of the building.",
      },
      {
        title: "Donation and equipment security",
        body: "Safes and controlled storage for donations, offerings and AV equipment.",
      },
      {
        title: "Budget reality",
        body: "Phased plans that prioritise the doors that matter, with honest advice about what can safely wait.",
      },
      {
        title: "After-hours access",
        body: "Scheduled access for groups meeting evenings and weekends, without anyone driving over to unlock the door.",
      },
    ],
    services: [
      "commercial-rekeying-winnipeg",
      "master-key-systems-winnipeg",
      "high-security-locks-winnipeg",
      "access-control-systems-winnipeg",
      "safe-opening-service-winnipeg",
    ],
    faqs: [
      {
        q: "We have no idea how many keys are out there. Where do we start?",
        a: "With a rekey onto a restricted keyway and a fresh issue register. It draws a line under the unknown, and from that point every key in circulation is one you authorised and can account for.",
      },
      {
        q: "Can we do this in stages?",
        a: "Yes, and for most community organisations we recommend it. Perimeter and high-value storage first, interior doors as budget allows — designed so the later phases drop into the same system.",
      },
      {
        q: "Do you offer non-profit pricing?",
        a: "We work with community organisations on scope and phasing to fit real budgets. Tell us the number you have to work with and we will tell you honestly what it buys.",
      },
    ],
  },

  {
    slug: "construction-new-builds",
    name: "Construction & New Builds",
    shortName: "Construction",
    icon: "construction",
    summary:
      "Construction keying, temporary site security and permanent-key changeover delivered to the schedule the GC actually has.",
    metaTitle: "Construction Locksmith Winnipeg | New Build Keying & Site Security",
    metaDescription:
      "Construction locksmith services in Winnipeg. Construction keying, temporary site security, hardware supply and installation, and permanent key changeover at handover.",
    heroHeading: "From site security to handover keys",
    intro: [
      "On a construction project, the locksmith is either invisible or the reason a handover slips. Manitoba Lock & Safe works to construction schedules — hardware supplied and installed to the door schedule, construction keying so trades have access during the build, and a changeover to permanent keys that voids every construction key the moment the owner takes possession.",
      "We work directly with general contractors, project managers, architects and owners across Winnipeg and Manitoba. Where a door schedule contains hardware that will not pass a code inspection, we flag it during submittals rather than at final walkthrough, which is generally the cheaper of the two.",
    ],
    challenges: [
      {
        title: "Construction keying",
        body: "Temporary construction keys for trades, voided instantly at handover by the first turn of the permanent key.",
      },
      {
        title: "Temporary site security",
        body: "Padlocks, hasps, temporary cylinders and gate hardware securing materials and tools during the build.",
      },
      {
        title: "Hardware supply and install",
        body: "Door hardware supplied and installed to the specified schedule, in the specified finish and function.",
      },
      {
        title: "Code review during submittals",
        body: "Egress and rated-opening problems in the hardware schedule caught early, when they are still cheap to fix.",
      },
      {
        title: "Handover documentation",
        body: "Permanent keying, key charts and as-built door schedules delivered as part of the closeout package.",
      },
    ],
    services: [
      "master-key-systems-winnipeg",
      "commercial-lock-repair-installation-winnipeg",
      "panic-bars-exit-devices-winnipeg",
      "access-control-systems-winnipeg",
      "high-security-locks-winnipeg",
    ],
    faqs: [
      {
        q: "How does construction keying actually work?",
        a: "Cylinders are pinned so that a construction key operates them during the build. The first use of the owner's permanent key permanently disables every construction key in that system — no rekey visit, no cost, no keys left circulating among trades.",
      },
      {
        q: "Can you supply hardware as well as install it?",
        a: "Yes. We supply to the specified schedule as a factory-certified dealer for the major commercial brands, or install owner-supplied hardware if that is how the contract is structured.",
      },
      {
        q: "When should we bring you in?",
        a: "At hardware submittals, ideally. Reviewing the schedule before the order is placed catches egress and rating conflicts while a change is still a phone call rather than a change order.",
      },
    ],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
