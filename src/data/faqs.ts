export type Faq = { q: string; a: string; category: string };

export const faqCategories = [
  "Lockouts & Urgent Calls",
  "Pricing & Scheduling",
  "Keys & Key Control",
  "Access Control",
  "Safes",
  "Credentials & Coverage",
];

export const faqs: Faq[] = [
  // Lockouts & Urgent Calls
  {
    category: "Lockouts & Urgent Calls",
    q: "What are your hours?",
    a: "We are open Monday to Friday, 8 a.m. to 5 p.m. Calls during those hours are answered by a person who can tell you what to expect before a truck is assigned. We do not run an after-hours service, so messages left outside those hours are returned the next business day.",
  },
  {
    category: "Lockouts & Urgent Calls",
    q: "How fast can you reach my business?",
    a: "It depends on where you are and what is already booked that day. Lockouts and doors that will not secure are prioritised during business hours, Monday to Friday. When you call, we give you a realistic arrival window before we send a truck, rather than an optimistic one — and communities outside Winnipeg take longer to reach than addresses inside the Perimeter.",
  },
  {
    category: "Lockouts & Urgent Calls",
    q: "Will you damage my lock getting the door open?",
    a: "Rarely. We are non-destructive first on every lockout: picking, bypassing and decoding come before drilling. Drilling is a last resort, and when it is unavoidable we carry commercial-grade replacement hardware so the door is repaired on the same visit.",
  },
  {
    category: "Lockouts & Urgent Calls",
    q: "What do you need from me before you will open a door?",
    a: "Proof that you are entitled to access the premises — photo ID plus something connecting you to the property, such as a lease, business licence, utility bill, corporate ID or a signed property-management work order. This is a licensing requirement and we do not make exceptions to it.",
  },
  {
    category: "Lockouts & Urgent Calls",
    q: "Our building was broken into. What happens first?",
    a: "We secure the opening so you can operate, then quote the permanent repair. Break-in repairs are prioritised during our business hours, Monday to Friday, and you receive itemised documentation of the damage and the work performed for your insurance claim.",
  },

  // Pricing & Scheduling
  {
    category: "Pricing & Scheduling",
    q: "How do you charge?",
    a: "A service call fee covers travel and diagnosis, then labour plus parts for the work itself. Larger projects are quoted as fixed-price work after a site visit.",
  },
  {
    category: "Pricing & Scheduling",
    q: "Will you give me a price over the phone?",
    a: "For common work, yes — a rekey, a lockout, a standard hardware swap. For anything involving hardware we have not seen, we will give you a realistic range and confirm the price on site before starting. We do not quote low to win the call and adjust upward once we are there.",
  },
  {
    category: "Pricing & Scheduling",
    q: "Can you schedule work so our business is not disrupted?",
    a: "We work Monday to Friday, 8 a.m. to 5 p.m., and plan the visit around your day within those hours. Work is sequenced door by door so the building stays usable, noisy or disruptive steps are booked for your quietest period, and restaurants are typically booked before lunch service or between lunch and dinner.",
  },
  {
    category: "Pricing & Scheduling",
    q: "Do you offer account billing?",
    a: "Yes. Commercial accounts can be invoiced against a purchase order or work order number, with per-property or per-site breakdowns for property managers and multi-location operators.",
  },
  {
    category: "Pricing & Scheduling",
    q: "Do you offer service agreements?",
    a: "We do. Service agreements cover scheduled maintenance and ongoing credential administration for access control clients. They suit portfolios and facilities where door hardware is a recurring line item rather than an occasional surprise.",
  },

  // Keys & Key Control
  {
    category: "Keys & Key Control",
    q: "Should we rekey or replace our locks?",
    a: "Rekey, in most cases. If the hardware is in good condition, re-pinning the cylinder gives you the same security outcome as new hardware for a fraction of the cost. Replacement makes sense when the hardware is worn out, under-specified for the traffic, or non-compliant.",
  },
  {
    category: "Keys & Key Control",
    q: "Does 'Do Not Duplicate' on a key actually stop anyone?",
    a: "No. It is a request with no legal force, and any key cutter can ignore it. If unauthorised copying is a genuine concern, a restricted keyway with a patented blank is the only reliable answer — those keys can only be cut by an authorised dealer against your written authorisation.",
  },
  {
    category: "Keys & Key Control",
    q: "What is the difference between master keying and keyed alike?",
    a: "Keyed alike means one key opens every door in the set — simple, but everyone has the same access. Master keying is a hierarchy: individual keys open individual doors, while master keys open groups and a grand master opens everything. Master keying is what you want as soon as different people need different access.",
  },
  {
    category: "Keys & Key Control",
    q: "We lost a master key. How bad is it?",
    a: "It is serious, because every door that key opened is now exposed. On a well-designed and documented system, the usual remedy is re-pinning to the next key level rather than rebuilding the system — much cheaper, and the clearest argument there is for keeping proper documentation.",
  },
  {
    category: "Keys & Key Control",
    q: "Can you take over a key system another locksmith installed?",
    a: "Yes. If it is documented, we work from the existing chart. If it is not, we can usually decode the system and rebuild the chart from the cylinders. Either way you end up with documentation you own, rather than a system only your previous vendor understood.",
  },

  // Access Control
  {
    category: "Access Control",
    q: "When is access control worth it over mechanical keys?",
    a: "When staff turnover makes rekeying a recurring cost, when you need to know who opened which door and when, or when access has to vary by time of day. On low-traffic interior doors, mechanical keying usually remains the better value — most buildings are best served by a mix.",
  },
  {
    category: "Access Control",
    q: "What happens to our doors during a power failure?",
    a: "It depends on whether each door is specified fail-safe or fail-secure, which is a code question decided opening by opening. Egress is never compromised, and battery backup keeps critical doors operating through a typical outage.",
  },
  {
    category: "Access Control",
    q: "Can you service an access control system you did not install?",
    a: "In most cases, yes. We work on the major commercial platforms and regularly take over administration, repair and expansion of systems whose original vendor has moved on or gone out of business.",
  },
  {
    category: "Access Control",
    q: "Cloud-hosted or on-premise?",
    a: "Cloud platforms are easier to administer, allow remote credential changes and carry a subscription. On-premise systems have no recurring fee and keep your data in your building, but require someone on site to manage them. We will recommend based on how your organisation actually operates, not on which one pays us more.",
  },

  // Safes
  {
    category: "Safes",
    q: "Can you open a safe without destroying it?",
    a: "Almost always. We manipulate or scope safes open wherever possible, and when drilling is required it is at a designed repair point which we plug afterwards before replacing the lock. The overwhelming majority of safes we open return to full service on the same visit.",
  },
  {
    category: "Safes",
    q: "What safe should our business buy?",
    a: "Check your insurance policy first, because it often prescribes a minimum rating and buying below it can void coverage. Beyond that: a deposit safe with a drop slot and time delay for daily cash, fire-rated for documents, and a properly rated unit for controlled substances or high-value inventory.",
  },
  {
    category: "Safes",
    q: "Do you move safes?",
    a: "Yes — within a building or between sites in Winnipeg and the surrounding communities, with the correct equipment and floor protection. We also anchor safes on installation, which is the step that stops a safe from simply being carried out during a break-in.",
  },

  // Credentials & Coverage
  {
    category: "Credentials & Coverage",
    q: "Are you licensed, bonded and insured?",
    a: "Yes — licensed as a security business in Manitoba, bonded, and carrying full liability insurance with WCB coverage in good standing. Certificates and clearance letters are available on request, and we supply them routinely for tenders and property-management vendor requirements.",
  },
  {
    category: "Credentials & Coverage",
    q: "Do your technicians have criminal record checks?",
    a: "Yes. All technicians carry current criminal record checks, and those working in schools and childcare settings also hold child abuse registry checks. Documentation is provided before attendance where a client requires it.",
  },
  {
    category: "Credentials & Coverage",
    q: "How far do you travel?",
    a: "We serve Winnipeg and the surrounding communities, including the capital region, Selkirk, Steinbach and Portage la Prairie. We are a mobile service, so our technicians come to you. Visits outside the city are booked ahead, Monday to Friday.",
  },
  {
    category: "Credentials & Coverage",
    q: "Do you work on homes and vehicles as well as businesses?",
    a: "Yes. We serve commercial, residential and automotive customers. That covers businesses and institutions, houses, apartments and condominiums, and locks and keys for vehicles. Tell us what you need when you call and we will confirm what is involved before booking.",
  },
];
