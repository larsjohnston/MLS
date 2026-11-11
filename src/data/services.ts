export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  emergency?: boolean;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSub: string;
  intro: string[];
  offerings: { title: string; body: string }[];
  signs: string[];
  process: { step: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "commercial-lockout-service-winnipeg",
    name: "Commercial Lockout Service",
    shortName: "Lockout Service",
    icon: "truck",
    emergency: false,
    summary:
      "Lockout service for Winnipeg businesses, Monday to Friday. Non-destructive entry first, on-site repair second, so the door works properly when we leave.",
    metaTitle: "Commercial Lockout Service Winnipeg | Manitoba Lock & Safe",
    metaDescription:
      "Locked out of your business in Winnipeg? Manitoba Lock & Safe provides mobile commercial lockout service Monday to Friday, 8 a.m. to 5 p.m., with non-destructive entry and on-the-spot repairs.",
    heroHeading: "Locked out of your business? We come to you.",
    heroSub:
      "Mobile commercial lockout service across Winnipeg and surrounding communities, Monday to Friday, 8 a.m. to 5 p.m. — non-destructive entry, licensed technicians, one visit.",
    intro: [
      "A locked commercial door is not an inconvenience, it is lost revenue. Staff standing in the parking lot, deliveries turned away, a shift that cannot start. Call Manitoba Lock & Safe during business hours and you speak to people who know commercial hardware — you describe the door, and the technician arrives knowing what to expect.",
      "We are non-destructive first on every call. Picking, bypassing and decoding come before drilling, because the cheapest lockout is the one that ends with your existing hardware intact. When a cylinder genuinely cannot be saved, our service vehicles carry commercial-grade replacements, so the repair can usually happen on the same visit instead of after a wait for parts.",
    ],
    offerings: [
      {
        title: "Mobile service at your door",
        body: "We are a mobile company. A technician comes to your building with the tools and stock on the vehicle — there is nothing to bring in.",
      },
      {
        title: "Non-destructive entry",
        body: "Picking, bypass and decoding techniques that open the door without damaging the cylinder, the door or the frame.",
      },
      {
        title: "Broken key extraction",
        body: "Snapped keys removed from the cylinder and a working replacement cut on site from the extracted blade or code.",
      },
      {
        title: "Failed electronic hardware",
        body: "Dead card readers, failed maglocks, drained battery packs and controllers locked in a fault state — restored or safely bypassed.",
      },
      {
        title: "Break-in and vandalism repair",
        body: "Damaged hardware secured after a forced entry, with any permanent repair that needs parts scheduled as a follow-up visit.",
      },
      {
        title: "Safe lockouts",
        body: "Commercial safes opened by a certified safe technician when the combination fails, the lock dies or the only person with the code has left.",
      },
    ],
    signs: [
      "Nobody on shift can open the front or back of house",
      "A key snapped off in the cylinder",
      "The card reader or keypad has gone dead and the door will not release",
      "A lock is turning freely without retracting the latch",
      "Your building was broken into and the door will no longer secure",
      "The last employee with a key resigned without returning it",
    ],
    process: [
      {
        step: "You call during business hours",
        body: "We take the address, the door type and the hardware on it, and tell you honestly when a technician can be there.",
      },
      {
        step: "We verify authority",
        body: "On arrival our technician confirms you are entitled to access the premises. It protects your business and it is required by our licence.",
      },
      {
        step: "Non-destructive entry",
        body: "The door is opened with the least invasive method that will work, so the existing hardware survives wherever possible.",
      },
      {
        step: "Repair or replace on the spot",
        body: "If the hardware failed, we fix or swap it during the same visit wherever the part is on the vehicle.",
      },
      {
        step: "You get a written invoice",
        body: "Itemised parts and labour, suitable for insurance or property-management reimbursement.",
      },
    ],
    faqs: [
      {
        q: "When are you available for lockouts?",
        a: "Monday to Friday, 8 a.m. to 5 p.m. We serve Winnipeg and surrounding communities such as Headingley, East and West St. Paul and Oak Bluff. When you call, we tell you when a technician can reach you before you commit to anything.",
      },
      {
        q: "Will you have to drill my lock?",
        a: "Rarely. Drilling is our last resort, not our first move. Most commercial lockouts are resolved by picking or bypassing the lock, which leaves your existing hardware fully functional.",
      },
      {
        q: "What proof do you need that I am authorised to enter?",
        a: "Photo ID plus something tying you to the premises — a lease, a business licence, a utility bill, a corporate ID badge or a signed property-management work order. Our licence requires it and we do not skip it.",
      },
      {
        q: "Will I know the price before you start?",
        a: "Yes. We explain the charges on the phone before a technician is sent, and you approve the work before it begins. You will not be surprised by the invoice.",
      },
    ],
    related: [
      "commercial-lock-repair-installation-winnipeg",
      "commercial-rekeying-winnipeg",
      "safe-opening-service-winnipeg",
    ],
  },

  {
    slug: "commercial-lock-repair-installation-winnipeg",
    name: "Commercial Lock Installation & Repair",
    shortName: "Lock Installation & Repair",
    icon: "wrench",
    summary:
      "Supply, installation and repair of commercial-grade locking hardware — specified to the traffic your doors actually see, not to a big-box price point.",
    metaTitle: "Commercial Lock Installation & Repair Winnipeg | Manitoba Lock & Safe",
    metaDescription:
      "Commercial lock installation and repair in Winnipeg and surrounding communities. Grade 1 hardware, mortise and cylindrical locksets, exit devices and closers, installed by licensed locksmiths.",
    heroHeading: "Commercial hardware, specified and installed properly.",
    heroSub:
      "Grade 1 and Grade 2 locksets supplied, installed and repaired across Winnipeg and surrounding communities by licensed commercial locksmiths.",
    intro: [
      "The single most common reason a commercial door fails is that residential-grade hardware was installed on a door that opens four hundred times a day. Manitoba Lock & Safe specifies to ANSI/BHMA grade, and we install what the opening actually requires — a Grade 1 mortise lockset on a busy public entrance, a Grade 2 cylindrical on a low-traffic interior office, and the correct function for the room behind the door.",
      "We install new hardware, retrofit old openings and repair what can still be saved. In a Manitoba winter, most 'broken locks' are not broken locks at all — they are doors that have shifted on their hinges, latches misaligned with strikes, or closers running the wrong seasonal valve setting. We diagnose the opening as a system, so the fix lasts past the next freeze-thaw cycle.",
    ],
    offerings: [
      {
        title: "Mortise and cylindrical locksets",
        body: "Grade 1 and Grade 2 hardware from Schlage, Sargent, Corbin Russwin, Best and ASSA Abloy, specified to traffic volume and door function.",
      },
      {
        title: "Deadbolts and auxiliary locks",
        body: "Commercial deadbolts, jimmy-proof hardware and secondary locks that satisfy insurer requirements without breaking fire code.",
      },
      {
        title: "Electric strikes and maglocks",
        body: "Electrified hardware for buzz-in entries and access-controlled doors, wired to fail-safe or fail-secure as the code official requires.",
      },
      {
        title: "Door closers and hinges",
        body: "Closer replacement and adjustment, continuous-hinge installation and hinge repair on doors that have dropped out of square.",
      },
      {
        title: "Lock repair and rebuilds",
        body: "Worn cylinders re-pinned, mortise bodies rebuilt and latch mechanisms replaced instead of scrapping serviceable hardware.",
      },
      {
        title: "Hardware standardisation",
        body: "Multi-door and multi-site portfolios brought onto one hardware standard so parts, keys and service calls all get simpler.",
      },
    ],
    signs: [
      "You are lifting or shouldering the door to make the key turn",
      "The latch no longer lines up with the strike plate",
      "The lockset feels loose or the lever sags",
      "A door slams shut or fails to close and latch on its own",
      "Hardware is mismatched across the building after years of ad-hoc fixes",
      "An insurer or inspector has flagged your locking hardware",
    ],
    process: [
      {
        step: "Site walk-through",
        body: "We survey every opening, record door type, frame prep, existing hardware and function, and flag anything non-compliant.",
      },
      {
        step: "Written specification",
        body: "You receive a door-by-door schedule with grade, finish, function and price — no vague lump sums.",
      },
      {
        step: "Supply and installation",
        body: "Hardware is installed by a licensed locksmith, with sequencing that keeps your doors secure while work is under way.",
      },
      {
        step: "Adjustment and sign-off",
        body: "Every opening is cycled, adjusted and demonstrated to your staff before we leave, then documented for your records.",
      },
    ],
    faqs: [
      {
        q: "What does Grade 1 hardware actually mean?",
        a: "It is the top ANSI/BHMA durability rating for commercial hardware — a Grade 1 lockset is tested to roughly a million cycles, compared with about 400,000 for Grade 2 and 200,000 for Grade 3. On a public entrance in Winnipeg, Grade 1 is the difference between hardware that lasts a decade and hardware you replace annually.",
      },
      {
        q: "Can you repair our existing locks instead of replacing them?",
        a: "Wherever it is economical, yes. Commercial hardware is built to be rebuilt. We re-pin cylinders, replace latch assemblies and rebuild mortise bodies routinely — replacement is our recommendation only when the repair would cost more than the part.",
      },
      {
        q: "Do you work on aluminium storefront doors?",
        a: "Yes. Aluminium storefront is one of our specialities, including Adams Rite deadlatches, pivot and closer replacement, and the frame repairs that Winnipeg's freeze-thaw cycles make inevitable.",
      },
      {
        q: "Will new hardware still meet fire and building code?",
        a: "That is part of the specification. Egress doors have to open with a single motion and no key, rated openings need rated hardware, and we will tell you if what you have asked for would fail an inspection.",
      },
    ],
    related: [
      "panic-bars-exit-devices-winnipeg",
      "door-frame-storefront-repair-winnipeg",
      "commercial-rekeying-winnipeg",
    ],
  },

  {
    slug: "commercial-rekeying-winnipeg",
    name: "Commercial Rekeying",
    shortName: "Rekeying",
    icon: "key",
    summary:
      "Fast, documented rekeying for staff turnover, tenant changes and lost keys — keeping your existing hardware and changing only what the key does.",
    metaTitle: "Commercial Rekeying Winnipeg | Business Lock Rekey Service",
    metaDescription:
      "Commercial rekeying in Winnipeg and surrounding communities. Rekey after staff turnover, tenant changes or lost keys — keep your hardware, change your keys, get full documentation.",
    heroHeading: "Someone has a key you cannot account for. Fix that today.",
    heroSub:
      "Commercial rekeying across Winnipeg and surrounding communities — existing hardware retained, every change documented.",
    intro: [
      "Rekeying changes what a key opens without changing the lock on the door. The cylinder is re-pinned to a new combination, old keys stop working, and your existing hardware — often expensive Grade 1 hardware — stays exactly where it is. For most Winnipeg businesses it costs a fraction of replacement and takes a fraction of the time.",
      "The trigger is almost always the same: a manager left, a tenant moved out, a keyring went missing, or the building changed hands and nobody can say how many keys are in circulation. We rekey on site, cut and stamp new keys, and hand back a written key schedule showing exactly who holds what — so the next time this happens, you are answering from records instead of guessing.",
    ],
    offerings: [
      {
        title: "Staff turnover rekeys",
        body: "Rekeying when a keyholder leaves, so an unreturned key stops being a liability.",
      },
      {
        title: "Tenant turnover",
        body: "Suite rekeys between tenants, coordinated with property managers and scheduled around move-out dates.",
      },
      {
        title: "Lost or stolen key response",
        body: "Priority rekeying when a key goes missing, prioritised by which doors that key actually opened.",
      },
      {
        title: "Keyed-alike sets",
        body: "Multiple doors brought onto one key where security permits, cutting the size of every keyring in the building.",
      },
      {
        title: "Building takeover rekeys",
        body: "A clean slate on acquisition or lease start, with every cylinder in the building brought under a key system you control.",
      },
      {
        title: "Key control documentation",
        body: "Stamped keys, a written key schedule and a sign-out register so key holding is tracked rather than assumed.",
      },
    ],
    signs: [
      "An employee left without returning their keys",
      "A tenant has moved out of a suite",
      "You have just bought or leased the building",
      "A keyring was lost, stolen or left in a vehicle",
      "Staff are carrying eight keys because nothing is keyed alike",
      "Nobody can tell you how many copies of the front-door key exist",
    ],
    process: [
      {
        step: "Scope the doors",
        body: "We list every cylinder the compromised key touched, including back-of-house, mechanical and roof access.",
      },
      {
        step: "Rekey on site",
        body: "Cylinders are re-pinned in place. Most doors take minutes and your building stays operational throughout.",
      },
      {
        step: "Cut and stamp new keys",
        body: "New keys are cut on site, stamped for identification and issued only to the people you name.",
      },
      {
        step: "Document the system",
        body: "You receive a key schedule listing every door, every key and every holder — the record that makes the next change easy.",
      },
    ],
    faqs: [
      {
        q: "Is rekeying as secure as replacing the lock?",
        a: "Yes. Once a cylinder is re-pinned, the old key is mechanically incapable of turning it. You get the same security outcome as new hardware at a fraction of the cost, provided the existing hardware is still in good condition.",
      },
      {
        q: "How quickly can you rekey our building?",
        a: "Small businesses are usually finished in a single visit, depending on the number of doors. Larger portfolios are scoped first and then scheduled in stages during our Monday-to-Friday hours, planned with you to keep disruption to tenants and staff low.",
      },
      {
        q: "Can we keep one key for every door?",
        a: "Usually, yes — that is a keyed-alike system. Where different staff need different access, a master key system is the better answer, and we will tell you which one fits your operation.",
      },
      {
        q: "What if our keys say 'Do Not Duplicate'?",
        a: "That stamp has no legal force and any key cutter can ignore it. If unauthorised copying is your real concern, a restricted keyway with patented key control is the only reliable fix.",
      },
    ],
    related: [
      "master-key-systems-winnipeg",
      "high-security-locks-winnipeg",
      "key-cutting-duplication-winnipeg",
    ],
  },

  {
    slug: "master-key-systems-winnipeg",
    name: "Master Key Systems",
    shortName: "Master Key Systems",
    icon: "hierarchy",
    summary:
      "Designed, documented master key systems that give every person exactly the access they need and nothing more — built to expand as your building does.",
    metaTitle: "Master Key Systems Winnipeg | Commercial Locksmith Design & Install",
    metaDescription:
      "Master key system design and installation in Winnipeg and surrounding communities. Grand master, master and sub-master hierarchies, fully documented, expandable and under proper key control.",
    heroHeading: "One key for you. The right key for everyone else.",
    heroSub:
      "Master key systems designed, installed and documented for Winnipeg buildings — from a six-door office to a multi-building campus.",
    intro: [
      "A master key system is a hierarchy: a grand master that opens everything, masters that open a department or a floor, and change keys that open one door only. Done properly, a facility manager carries a single key, a janitorial contractor carries a key that opens common areas but no tenant suite, and a department lead opens their wing and nothing else.",
      "Done improperly, a master key system is a security hole with paperwork. Poor design creates unintended cross-keying — keys that open doors nobody planned for — and undocumented systems become impossible to expand. We design on paper first, chart the entire hierarchy, and hand you the documentation that lets the system grow for years without being torn out and rebuilt.",
    ],
    offerings: [
      {
        title: "System design",
        body: "A written hierarchy built from how your organisation actually works — departments, contractors, after-hours access and emergency entry.",
      },
      {
        title: "Grand master and master levels",
        body: "Multi-tier systems for buildings, campuses and multi-site portfolios, kept coherent across every location.",
      },
      {
        title: "Restricted keyways",
        body: "Patented keyways so change keys cannot be copied at a hardware store or a kiosk without your written authorisation.",
      },
      {
        title: "Existing system expansion",
        body: "New doors, tenants and wings added to a system already in place — including systems we did not originally install.",
      },
      {
        title: "System rebuilds",
        body: "Undocumented, over-mastered or compromised systems audited and rebuilt onto a clean, charted hierarchy.",
      },
      {
        title: "Key control administration",
        body: "Issue registers, authorisation lists and stamped keys, so every key in circulation is a key you can account for.",
      },
    ],
    signs: [
      "Your facility manager carries a ring with thirty keys on it",
      "Contractors hold keys that open more than they should",
      "Nobody can produce a chart of the existing system",
      "A master key has gone missing and the exposure is unknown",
      "You are adding a floor, a wing or a second site",
      "Staff are propping doors because the right key is inconvenient",
    ],
    process: [
      {
        step: "Access audit",
        body: "We map every door and interview the people responsible for them to establish who genuinely needs what access.",
      },
      {
        step: "Hierarchy design",
        body: "A charted system is produced on paper, reviewed with you and adjusted before a single pin is set.",
      },
      {
        step: "Pinning and installation",
        body: "Cylinders are pinned to the chart and installed door by door, on a schedule that keeps the building secure throughout.",
      },
      {
        step: "Documentation and handover",
        body: "You receive the system chart, the key bitting record and an issue register — held securely, and copied to you.",
      },
      {
        step: "Ongoing expansion",
        body: "As you add doors, we pin to the same chart. The system grows instead of fragmenting.",
      },
    ],
    faqs: [
      {
        q: "How long does a master key system take to install?",
        a: "Design takes a few days for a typical building, and installation is usually one to three days for a small or mid-size site. Campuses and multi-building portfolios are phased so no area is ever left unsecured.",
      },
      {
        q: "Can you expand the system we already have?",
        a: "If it is documented, almost always. If it is undocumented, we can often decode the existing system and rebuild the chart from it — that audit is worth doing before you add another door.",
      },
      {
        q: "What happens if a master key is lost?",
        a: "Every door that key opened is exposed, which is exactly why key control matters. A well-designed system usually allows a re-pin to the next key level rather than a full rebuild — far cheaper, and another reason documentation pays for itself.",
      },
      {
        q: "Should we use a master key system or access control?",
        a: "Often both. Mechanical master keying is cost-effective for interior and low-traffic doors, while access control gives you audit trails and instant credential revocation on perimeter and sensitive doors. We design the two to work together rather than duplicate each other.",
      },
    ],
    related: [
      "high-security-locks-winnipeg",
      "access-control-systems-winnipeg",
      "commercial-rekeying-winnipeg",
    ],
  },

  {
    slug: "access-control-systems-winnipeg",
    name: "Access Control Systems",
    shortName: "Access Control",
    icon: "card",
    summary:
      "Fobs, cards, keypads and mobile credentials installed and serviced — with audit trails, instant revocation and schedules that lock and unlock your building for you.",
    metaTitle: "Access Control Systems Winnipeg | Fobs, Card Readers & Keypads",
    metaDescription:
      "Commercial access control in Winnipeg and surrounding communities. Key fob and card reader systems, keypads, mobile credentials, audit trails and instant credential revocation. Installed and serviced.",
    heroHeading: "Stop replacing keys. Start revoking credentials.",
    heroSub:
      "Access control systems designed, installed and maintained for Winnipeg businesses — fobs, cards, keypads and mobile credentials.",
    intro: [
      "The moment a building has real staff turnover, mechanical keys start costing more than they save. Access control replaces the rekey with a mouse click: a departing employee's fob is disabled in seconds, and every door in the building forgets them at once. You also get the thing keys can never give you — a record of who opened which door, and when.",
      "We install and service access control at the scale Manitoba businesses actually need. A two-door system on a warehouse entrance with a handful of fobs. A forty-door system with scheduled unlock times, integration to a fire alarm and a card-office workflow. Cloud-managed or on-premise, and always installed so that the electrified hardware behind the reader is code-compliant and safe when the power fails.",
    ],
    offerings: [
      {
        title: "Fob and card reader systems",
        body: "Proximity and smart-card systems sized from a single door to a multi-building campus, with the credentials to match.",
      },
      {
        title: "Keypads and PIN entry",
        body: "Standalone and networked keypads for back doors, stock rooms and after-hours access where credentials are impractical.",
      },
      {
        title: "Mobile credentials",
        body: "Phone-based access so staff stop carrying fobs, and credentials are issued and revoked remotely.",
      },
      {
        title: "Scheduled locking",
        body: "Doors that unlock for business hours and secure themselves afterwards, with holiday schedules that follow your calendar.",
      },
      {
        title: "Audit trails and reporting",
        body: "Door-by-door event logs for incident investigation, insurance claims and compliance requirements.",
      },
      {
        title: "Electrified hardware",
        body: "Electric strikes, maglocks, electrified levers, request-to-exit devices and power supplies, installed to code.",
      },
      {
        title: "Service on existing systems",
        body: "Repairs, board swaps, reader replacements and credential administration on systems we did not install.",
      },
    ],
    signs: [
      "You rekey the building every time someone quits",
      "You need to know who entered a room and when",
      "Cleaners and contractors need access, but only on certain days",
      "Someone has to drive in to unlock or lock the building",
      "Fobs from an old system are still floating around unaccounted for",
      "Your current system's vendor has disappeared or gone unsupported",
    ],
    process: [
      {
        step: "Requirements review",
        body: "We establish which doors need control, how many credentials, whether you want cloud or on-premise, and what has to integrate.",
      },
      {
        step: "Design and quote",
        body: "A door-by-door design covering readers, controllers, electrified hardware, power and cabling, priced transparently.",
      },
      {
        step: "Installation",
        body: "Hardware installed, wired and commissioned by licensed technicians, with fire-alarm interfaces and egress verified.",
      },
      {
        step: "Enrolment and training",
        body: "Credentials issued, schedules configured, and your administrators trained until they can run the system without us.",
      },
      {
        step: "Ongoing support",
        body: "Service agreements covering credential administration, firmware updates and priority response when a reader fails.",
      },
    ],
    faqs: [
      {
        q: "What does an access control system cost?",
        a: "It scales with door count. A single-door standalone system is a modest one-time cost; a networked multi-door system carries per-door hardware plus a software subscription for cloud platforms. We quote per door so you can phase the rollout instead of paying for everything at once.",
      },
      {
        q: "What happens to the doors if the power goes out?",
        a: "That depends on whether each door is specified fail-safe or fail-secure, and the fire code has strong opinions per opening. We design that door by door — egress is never compromised, and battery backup keeps critical doors running through an outage.",
      },
      {
        q: "Can we keep our mechanical keys as a backup?",
        a: "Yes, and we usually recommend it. A mechanical override on key doors means a controller fault or a dead battery never becomes a lockout.",
      },
      {
        q: "Will you service the system we already have?",
        a: "In most cases. We work on the major commercial platforms and can take over administration, repair and expansion of an existing installation — including systems abandoned by a previous vendor.",
      },
    ],
    related: [
      "master-key-systems-winnipeg",
      "commercial-lock-repair-installation-winnipeg",
      "panic-bars-exit-devices-winnipeg",
    ],
  },

  {
    slug: "panic-bars-exit-devices-winnipeg",
    name: "Panic Bars, Exit Devices & Door Closers",
    shortName: "Exit Devices & Closers",
    icon: "exit",
    summary:
      "Code-compliant exit hardware supplied, installed and repaired — so your egress doors pass inspection and open when it matters most.",
    metaTitle: "Panic Bars & Exit Devices Winnipeg | Door Closer Repair",
    metaDescription:
      "Panic bar, exit device and door closer installation and repair in Winnipeg and surrounding communities. Code-compliant egress hardware, delayed egress, fire-rated devices and closer adjustment.",
    heroHeading: "Egress hardware that passes inspection and works under pressure.",
    heroSub:
      "Panic bars, exit devices, delayed egress and door closers installed, repaired and adjusted across Winnipeg and surrounding communities.",
    intro: [
      "Exit hardware is the one part of your building that has to work perfectly on the worst day you ever have. Manitoba's building and fire codes are specific about it: an egress door must open with a single motion, without a key, without special knowledge, and in the direction of travel. When an inspector writes up a deficiency, it is usually exit hardware.",
      "We install, repair and adjust the full range of exit devices — rim, mortise, surface vertical rod, concealed vertical rod, fire-rated and delayed egress — plus the closers that control them. We also fix the improvised violations we find constantly on Winnipeg service calls: chained exit doors, thumbturn deadbolts added above panic bars, and closers cranked down so hard nobody can get through.",
    ],
    offerings: [
      {
        title: "Panic bar installation",
        body: "Rim, mortise and vertical rod exit devices specified to the door, the frame and the occupancy classification.",
      },
      {
        title: "Fire-rated exit devices",
        body: "Rated hardware on rated openings, installed with the correct latching and no dogging where code prohibits it.",
      },
      {
        title: "Delayed egress",
        body: "Fifteen and thirty second delayed egress systems for retail loss prevention and healthcare, tied properly into fire alarm release.",
      },
      {
        title: "Exit alarms and door prop alarms",
        body: "Local alarms on emergency exits, so a door held open for a smoke break does not become an open invitation.",
      },
      {
        title: "Door closers",
        body: "Surface, concealed and floor closers supplied, replaced and adjusted — including seasonal adjustment for Manitoba temperature swings.",
      },
      {
        title: "Automatic operators",
        body: "Power operators and push-plate actuators for accessible entrances, installed and serviced to keep barrier-free access working.",
      },
      {
        title: "Code deficiency correction",
        body: "Inspection write-ups resolved quickly, with documentation you can hand straight back to the authority having jurisdiction.",
      },
    ],
    signs: [
      "An inspector has issued an order on your exit doors",
      "The panic bar sticks, rattles or has to be hit twice",
      "An exit door has been chained, padlocked or blocked",
      "A closer is slamming the door, or failing to latch it",
      "Vertical rods drag on the floor or the top latch misses",
      "Your accessible door operator has stopped working",
    ],
    process: [
      {
        step: "Egress survey",
        body: "We walk every exit, identify device types and rating requirements, and list what is non-compliant today.",
      },
      {
        step: "Remediation plan",
        body: "Deficiencies are prioritised by risk and by any deadline an inspector has already set.",
      },
      {
        step: "Install and adjust",
        body: "Devices installed, latching verified, closers timed to code and cycled under real-world conditions.",
      },
      {
        step: "Documentation",
        body: "Written confirmation of what was installed and adjusted, ready to submit for your inspection sign-off.",
      },
    ],
    faqs: [
      {
        q: "Can we lock an emergency exit to stop theft?",
        a: "Not with a chain or a deadbolt — that is a serious code violation and a life-safety risk. The legitimate answers are delayed egress hardware where the occupancy permits it, plus exit alarms, and both are things we install regularly for Winnipeg retailers.",
      },
      {
        q: "Why does our door not latch in winter?",
        a: "Cold changes closer fluid viscosity and steel doors contract, so a closer set for July is often too weak in January. Most Manitoba latching complaints are solved by seasonal closer adjustment rather than new hardware.",
      },
      {
        q: "What is dogging, and why can't we dog our fire door?",
        a: "Dogging holds the panic bar depressed so the door pushes open freely — convenient during business hours. On a fire-rated opening it is prohibited, because the door must latch to hold its rating. Fire-rated devices are built without mechanical dogging for exactly this reason.",
      },
      {
        q: "Do you handle accessible door operators?",
        a: "Yes — installation, repair and adjustment of power operators and actuators, which is a common requirement for buildings serving the public.",
      },
    ],
    related: [
      "commercial-lock-repair-installation-winnipeg",
      "door-frame-storefront-repair-winnipeg",
      "access-control-systems-winnipeg",
    ],
  },

  {
    slug: "high-security-locks-winnipeg",
    name: "High-Security Locks & Restricted Keyways",
    shortName: "High-Security Locks",
    icon: "shield",
    summary:
      "Patented, pick-resistant and drill-resistant cylinders with true key control — keys that cannot be copied without your written authorisation.",
    metaTitle: "High-Security Locks Winnipeg | Restricted Keyways & Key Control",
    metaDescription:
      "High-security locks and restricted keyways in Winnipeg. Medeco, Mul-T-Lock and ASSA Abloy patented cylinders with pick resistance, drill resistance and enforceable key control.",
    heroHeading: "Keys that cannot be copied at a hardware store.",
    heroSub:
      "Patented high-security cylinders and restricted keyways installed across Winnipeg and surrounding communities, with documented key control.",
    intro: [
      "Standard commercial cylinders share two weaknesses: they can be picked by anyone with practice, and their keys can be copied anywhere for a few dollars. High-security cylinders fix both. Hardened inserts and anti-drill pins resist forced attack, sidebars and rotating elements resist picking and bumping, and the key blank itself is protected by an active patent.",
      "That patent is the part most Winnipeg businesses underestimate. A restricted keyway means the blank is not sold on the open market — a copy can only be cut by an authorised dealer, against a signature from a name on your authorisation list. It converts key control from a hopeful stamp on a key into something legally and practically enforceable, which is exactly what auditors, insurers and tenants want to see.",
    ],
    offerings: [
      {
        title: "Medeco, Mul-T-Lock and ASSA Abloy",
        body: "Patented high-security platforms supplied and installed as a factory-certified dealer.",
      },
      {
        title: "Restricted keyway programs",
        body: "Your own keyway with a signature-controlled authorisation list, so nobody copies a key without your approval.",
      },
      {
        title: "Pick and bump resistance",
        body: "Sidebar, rotating-pin and elevated-pin designs that defeat picking, bumping and decoding attacks.",
      },
      {
        title: "Drill and pull resistance",
        body: "Hardened inserts, ball bearings and reinforced housings against forced-entry attacks on the cylinder.",
      },
      {
        title: "High-security master keying",
        body: "Full master key hierarchies built on a restricted platform, combining flexible access with genuine key control.",
      },
      {
        title: "Retrofit cylinders",
        body: "High-security cores dropped into your existing Grade 1 hardware — upgraded security without replacing the locksets.",
      },
    ],
    signs: [
      "Keys marked 'Do Not Duplicate' keep turning up copied",
      "You handle cash, controlled substances or client data",
      "An insurer or auditor has asked about key control",
      "Your building has had a no-forced-entry break-in",
      "Tenants or contractors hold keys you cannot track",
      "Server rooms, pharmacies or evidence rooms need a higher standard",
    ],
    process: [
      {
        step: "Risk review",
        body: "We identify which doors genuinely warrant high security — you rarely need it everywhere, and we will say so.",
      },
      {
        step: "Platform selection",
        body: "We match the platform to your risk, budget and any existing hardware you would like to keep.",
      },
      {
        step: "Authorisation list",
        body: "You name the people who may order keys. Nobody else can, and every order is logged.",
      },
      {
        step: "Install and issue",
        body: "Cylinders installed, keys issued against signature, and the register handed over as part of the documentation.",
      },
    ],
    faqs: [
      {
        q: "Are high-security locks worth the extra cost?",
        a: "On the doors that matter, yes. They cost several times a standard cylinder, which is why we recommend them selectively — perimeter, cash handling, pharmaceutical storage, server rooms and master-keyed cylinders — rather than on every interior office door.",
      },
      {
        q: "Can anyone copy a restricted key?",
        a: "Only an authorised dealer holding the keyway, and only for a person on your written authorisation list. The blank is patent-protected, so no hardware store or kiosk can legally or physically cut one.",
      },
      {
        q: "Can we upgrade without replacing all our hardware?",
        a: "Usually. High-security retrofit cylinders drop into most Grade 1 commercial locksets, so you keep the lockset and upgrade the part that provides the security.",
      },
      {
        q: "What happens if we lose a high-security key?",
        a: "The same rekey process as any cylinder, with one important difference — you know that the missing key cannot have been copied, so your exposure is limited to that single key.",
      },
    ],
    related: [
      "master-key-systems-winnipeg",
      "commercial-rekeying-winnipeg",
      "access-control-systems-winnipeg",
    ],
  },

  {
    slug: "safe-opening-service-winnipeg",
    name: "Safes — Sales, Service & Opening",
    shortName: "Safes",
    icon: "safe",
    summary:
      "Commercial safes supplied, installed, serviced, moved and opened — including safes with lost combinations, failed locks or drained electronics.",
    metaTitle: "Safe Opening & Safe Sales Winnipeg | Commercial Safe Technician",
    metaDescription:
      "Commercial safe sales, service and opening in Winnipeg and surrounding communities. Lost combinations, failed safe locks, safe moving and installation, deposit and fire safes, by certified safe technicians.",
    heroHeading: "Your safe is closed and you need what is inside.",
    heroSub:
      "Commercial safe opening, service, sales and installation across Winnipeg and surrounding communities by certified safe technicians.",
    intro: [
      "A safe that will not open stops a business cold — the float is inside, the day's deposit is inside, the controlled substances or the payroll records are inside. We open commercial safes when the combination is lost, the electronic lock has failed, the boltwork has jammed, or the only person who knew the code no longer works for you.",
      "Manipulation and scoping come before drilling, and where drilling is unavoidable we drill to a known repair point and restore the safe to full working order afterwards — most safes are back in service the same day rather than scrapped. We also sell, deliver, install, service and relocate commercial safes, including deposit safes, fire-rated safes, pharmacy safes, gun safes and TL-rated units.",
    ],
    offerings: [
      {
        title: "Safe opening",
        body: "Lost combinations, failed locks and jammed boltwork resolved by certified technicians, with repair rather than destruction as the goal.",
      },
      {
        title: "Combination changes",
        body: "Mechanical and electronic combinations changed after staff turnover, with multi-user codes where the safe supports them.",
      },
      {
        title: "Safe lock replacement",
        body: "Dead or failing safe locks replaced with mechanical or electronic units, including time-delay models for cash-handling sites.",
      },
      {
        title: "New safe sales",
        body: "Deposit, fire-rated, pharmacy, cash-management and TL-rated safes specified to your actual risk and insurance requirements.",
      },
      {
        title: "Delivery, installation and anchoring",
        body: "Safes delivered, placed and anchored to floor or structure — anchoring is what stops a safe from simply being carried out.",
      },
      {
        title: "Safe moving",
        body: "Relocation within a building or across the Winnipeg area, handled with proper equipment and floor protection.",
      },
      {
        title: "Vault and depository service",
        body: "Depository hoppers, drop slots and vault door hardware serviced and repaired.",
      },
    ],
    signs: [
      "The combination no longer works, or nobody has it",
      "The electronic keypad is dead or unresponsive",
      "The handle turns but the bolts will not retract",
      "A manager left with the only code",
      "You need a deposit safe your insurer will accept",
      "A safe needs relocating to a new premises",
    ],
    process: [
      {
        step: "Identify the safe",
        body: "Make, model, lock type and any rating — often from a photo before we dispatch, which speeds the whole job up.",
      },
      {
        step: "Verify ownership",
        body: "We confirm your right to the safe and its contents. Every safe opening is documented.",
      },
      {
        step: "Non-destructive first",
        body: "Manipulation, scoping and known bypasses are attempted before any drilling is considered.",
      },
      {
        step: "Open and repair",
        body: "If drilling is required, it is done at a repair point, then plugged and the lock replaced so the safe stays in service.",
      },
      {
        step: "Reset and hand back",
        body: "New combination set, operation demonstrated, and the safe returned to full working condition.",
      },
    ],
    faqs: [
      {
        q: "Will opening my safe destroy it?",
        a: "Almost never. We open by manipulation or scoping wherever possible, and when drilling is required it is at a designed repair point that we plug afterwards. The overwhelming majority of safes we open go straight back into service.",
      },
      {
        q: "How do you know I own the safe?",
        a: "We require proof — business ownership or lease documents, purchase records, or written authorisation from the property owner. It is a condition of our licence and it protects you as much as it protects us.",
      },
      {
        q: "Can you open a safe on site or does it need to come in?",
        a: "The large majority are opened on site. We are a mobile company, so the work happens where the safe sits. In unusual cases — a badly damaged unit or one needing extensive rebuild — we will explain the options before going further.",
      },
      {
        q: "What safe should a restaurant or retail store buy?",
        a: "For cash handling, a deposit safe with a drop slot and time-delay lock, so staff can deposit without being able to open it. Check your insurance policy first — it often dictates a minimum rating, and buying below it can void coverage.",
      },
    ],
    related: [
      "commercial-lockout-service-winnipeg",
      "high-security-locks-winnipeg",
      "commercial-lock-repair-installation-winnipeg",
    ],
  },

  {
    slug: "door-frame-storefront-repair-winnipeg",
    name: "Door & Frame Repair, Aluminium Storefront Hardware",
    shortName: "Door & Frame Repair",
    icon: "door",
    summary:
      "Sagging doors, spread frames, failed pivots and break-in damage repaired — including the aluminium storefront hardware Winnipeg winters destroy.",
    metaTitle: "Commercial Door & Frame Repair Winnipeg | Storefront Hardware",
    metaDescription:
      "Commercial door and frame repair in Winnipeg. Aluminium storefront doors, Adams Rite hardware, pivots, closers, break-in damage repair and frame straightening by licensed locksmiths.",
    heroHeading: "The lock is fine. The door is the problem.",
    heroSub:
      "Commercial door, frame and aluminium storefront repair across Winnipeg and surrounding communities — including break-in damage.",
    intro: [
      "A large share of the 'broken lock' calls we take in Winnipeg turn out to be doors, not locks. Doors sag on worn hinges, aluminium storefront leaves rack out of square, frames spread after a forced entry, and thresholds heave through the freeze-thaw cycle until the latch no longer meets the strike. Swapping the lockset on any of that changes nothing.",
      "We repair the opening as a whole. Hinges and pivots replaced, frames straightened and reinforced, strikes relocated, sweeps and weatherstripping renewed, closers reset. It is a speciality that matters more here than in most of the country — 35 °C to −35 °C in a single year moves steel and aluminium, and hardware that was perfect in September is fighting the frame by January.",
    ],
    offerings: [
      {
        title: "Aluminium storefront repair",
        body: "Adams Rite deadlatches and locks, pivots, top and bottom rails, and the racked leaves that stop a storefront door latching.",
      },
      {
        title: "Hollow metal doors and frames",
        body: "Steel door and frame repair, reinforcement and hardware prep for commercial and industrial openings.",
      },
      {
        title: "Break-in damage repair",
        body: "Securing the opening after a forced entry, then permanent repair of the frame, door edge and hardware.",
      },
      {
        title: "Frame straightening and reinforcement",
        body: "Spread jambs pulled back true and reinforced with wrap-around plates so the same attack does not work twice.",
      },
      {
        title: "Hinges, pivots and continuous hinges",
        body: "Worn pivots and hinges replaced, and continuous hinges fitted on high-traffic doors that keep tearing out.",
      },
      {
        title: "Thresholds and weatherstripping",
        body: "Sweeps, seals and thresholds renewed — better latching, lower heating bills and less ice inside the door.",
      },
      {
        title: "Strike and keeper alignment",
        body: "Strikes relocated and adjusted so the latch engages fully without anyone having to pull on the door.",
      },
    ],
    signs: [
      "You have to lift, pull or lean on the door to lock it",
      "There is daylight visible around a closed exterior door",
      "The door drags on the threshold or the floor",
      "The frame is bent or split after a break-in attempt",
      "Ice builds up inside the door in winter",
      "A storefront door has dropped and no longer meets the latch",
    ],
    process: [
      {
        step: "Diagnose the opening",
        body: "We check plumb, square, hinge wear, frame condition and strike alignment before touching the hardware.",
      },
      {
        step: "Secure the opening",
        body: "After a break-in, the opening is made secure first, before the permanent repair is scheduled.",
      },
      {
        step: "Repair",
        body: "Frames straightened, hinges and pivots replaced, reinforcement added, hardware refitted to a true opening.",
      },
      {
        step: "Cycle and adjust",
        body: "The door is cycled repeatedly and adjusted until it closes, latches and locks reliably on its own.",
      },
    ],
    faqs: [
      {
        q: "Can you repair the door after a break-in, or do we need a new one?",
        a: "Most commercial doors and frames are repairable, and repair is usually far cheaper and faster than replacement. We secure the opening first, then quote the permanent repair with the documentation your insurer will ask for.",
      },
      {
        q: "Why does our storefront door only stick in winter?",
        a: "Aluminium contracts in the cold and the building itself moves with frost heave, so an opening that is fine at 25 °C can be out of alignment at −25 °C. Adjustment, and sometimes reinforcement, solves it properly.",
      },
      {
        q: "Do you replace glass?",
        a: "Glazing is handled by our glazing partners, and we coordinate with them so the door hardware and the glass are finished in the same window rather than in two separate trips.",
      },
      {
        q: "How fast can you secure a door after a break-in?",
        a: "Call us during business hours, Monday to Friday, 8 a.m. to 5 p.m., and we will tell you when a technician can attend. Getting the opening secure comes first; the permanent repair is scheduled right behind it.",
      },
    ],
    related: [
      "commercial-lockout-service-winnipeg",
      "commercial-lock-repair-installation-winnipeg",
      "panic-bars-exit-devices-winnipeg",
    ],
  },

  {
    slug: "file-cabinet-desk-locks-winnipeg",
    name: "File Cabinet, Desk & Office Furniture Locks",
    shortName: "Cabinet & Desk Locks",
    icon: "cabinet",
    summary:
      "Filing cabinets, desks, lockers, display cases and mailboxes opened, rekeyed and fitted with new locks — usually without damaging the furniture.",
    metaTitle: "File Cabinet & Desk Lock Service Winnipeg | Office Furniture Locks",
    metaDescription:
      "File cabinet, desk, locker and display case lock service in Winnipeg. Cabinets opened without damage, locks replaced and keyed alike, mailbox and furniture locks by licensed locksmiths.",
    heroHeading: "The cabinet is locked and the key left with the last office manager.",
    heroSub:
      "Filing cabinet, desk, locker and display case locks opened, replaced and keyed alike across Winnipeg.",
    intro: [
      "Office furniture locks are small, but they hold personnel files, client records, controlled inventory and petty cash — and the keys vanish constantly. We open locked filing cabinets, desks, credenzas, lockers, display cases and mailboxes without damaging the furniture, then fit new locks and cut the keys on the spot.",
      "It is also the easiest place to clean up years of accumulated chaos. Most offices have a drawer of unlabelled cabinet keys and no idea which fits what. We can key an entire floor of furniture alike, so one key runs every cabinet, or key them in groups by department where records need to stay separated.",
    ],
    offerings: [
      {
        title: "Cabinet and desk opening",
        body: "Locked office furniture opened without damage, so the cabinet stays usable and the contents stay private.",
      },
      {
        title: "Lock replacement",
        body: "New cam locks, pedestal locks and gang locks fitted to filing cabinets, desks and credenzas.",
      },
      {
        title: "Keyed-alike programs",
        body: "A floor or a department brought onto one key, or grouped keys where records must stay compartmentalised.",
      },
      {
        title: "Lockers",
        body: "Staff, gym and industrial lockers opened, repaired and rekeyed, including combination locker locks.",
      },
      {
        title: "Display cases and showcases",
        body: "Retail display case locks replaced and upgraded where high-value merchandise is on show.",
      },
      {
        title: "Mailboxes",
        body: "Commercial and multi-tenant mailbox locks replaced and rekeyed for turnover.",
      },
    ],
    signs: [
      "The only key to a records cabinet is gone",
      "A departing employee locked a desk and did not return the key",
      "You have a drawer of keys and no idea what they open",
      "Cabinet locks are broken, sticking or spinning",
      "Personnel files need to be secured to satisfy a privacy policy",
      "Tenant turnover means mailbox locks need changing",
    ],
    process: [
      {
        step: "Identify the lock",
        body: "Manufacturer and lock type, often from a photo, so the right replacement is on the truck when we arrive.",
      },
      {
        step: "Open without damage",
        body: "Picking, decoding or bypass — the furniture stays intact and in service.",
      },
      {
        step: "Replace and key",
        body: "New locks fitted and keyed to your plan, alike or grouped, with keys cut on site.",
      },
      {
        step: "Label and document",
        body: "Keys stamped and a schedule provided, so the next office manager inherits a system rather than a mystery.",
      },
    ],
    faqs: [
      {
        q: "Can you open a filing cabinet without wrecking it?",
        a: "Yes — in almost every case. Office furniture locks are opened by picking or bypass, and the cabinet is fully usable afterwards. Forcing a cabinet usually costs more in damage than the locksmith call does.",
      },
      {
        q: "Can all our cabinets use one key?",
        a: "Usually. Most cam locks can be replaced with keyed-alike units, so one key runs the whole floor. Where departments need records kept separate, we key them in groups instead.",
      },
      {
        q: "Do you carry replacement locks with you?",
        a: "Our trucks stock the common commercial cam and pedestal locks. If you can send a photo of the lock face and any code stamped on it before we dispatch, we will almost always have the exact part on board.",
      },
      {
        q: "Is this a service call or can we bring furniture to you?",
        a: "We come to you. We are a mobile company, and most of this work is finished on site in a single visit.",
      },
    ],
    related: [
      "commercial-rekeying-winnipeg",
      "key-cutting-duplication-winnipeg",
      "safe-opening-service-winnipeg",
    ],
  },

  {
    slug: "key-cutting-duplication-winnipeg",
    name: "Commercial Key Cutting & Duplication",
    shortName: "Key Cutting",
    icon: "keys",
    summary:
      "Accurate commercial key cutting — by code or by duplication, including restricted blanks against your written authorisation.",
    metaTitle: "Commercial Key Cutting Winnipeg | Key Duplication by Code",
    metaDescription:
      "Commercial key cutting and duplication in Winnipeg. Keys cut by code or duplication, restricted and high-security blanks, bulk cutting for property managers, stamped and documented.",
    heroHeading: "Keys cut right the first time.",
    heroSub:
      "Commercial key cutting and duplication in Winnipeg — by code, in bulk, and on restricted keyways with proper authorisation.",
    intro: [
      "A key cut from a worn copy inherits every error in that copy, and the third-generation duplicate is the one that sticks in the cylinder and eventually snaps. We cut commercial keys by code wherever the code is available, which produces a key to factory specification instead of a copy of a copy — and we cut on calibrated commercial machines carried on our service vehicles, at your building, rather than at a self-serve kiosk.",
      "We handle the volume work too: a property manager needing sixty suite keys before a turnover weekend, a facility adding staff, a contractor set that needs stamping and tracking. Restricted and high-security blanks are cut only against your written authorisation list, which is the entire point of having them.",
    ],
    offerings: [
      {
        title: "Cutting by code",
        body: "Keys generated from the original bitting rather than copied, giving a factory-accurate key every time.",
      },
      {
        title: "Duplication",
        body: "Accurate duplicates of commercial keys on calibrated machines, with the original checked for wear first.",
      },
      {
        title: "Restricted and high-security blanks",
        body: "Cut as an authorised dealer, only for names on your authorisation list, with every order logged.",
      },
      {
        title: "Bulk and turnover cutting",
        body: "Large orders for property managers and facilities, stamped, sorted and bagged by suite or by door.",
      },
      {
        title: "Key stamping and tagging",
        body: "Keys marked to your numbering scheme so they can be tracked without revealing which door they open.",
      },
      {
        title: "Padlock and cabinet keys",
        body: "Keys for commercial padlocks, cabinets, lockers, gates and equipment, including keyed-alike sets.",
      },
    ],
    signs: [
      "Your keys stick, jam or need jiggling to turn",
      "New hires need keys and the originals are worn out",
      "A turnover weekend needs dozens of keys ready in advance",
      "You need copies of a restricted key and have the authorisation",
      "Keys are unlabelled and nobody can identify them",
      "Padlocks around the yard all carry different keys",
    ],
    process: [
      {
        step: "Check the original",
        body: "We inspect the key for wear and decode it, so we cut to specification rather than copying a fault.",
      },
      {
        step: "Verify authorisation",
        body: "For restricted keyways, the requester is checked against your authorisation list before anything is cut.",
      },
      {
        step: "Cut and test",
        body: "Keys are cut on calibrated machines and tested in the lock wherever we have access to it.",
      },
      {
        step: "Stamp and record",
        body: "Keys stamped to your scheme and added to your key register, so issue is tracked.",
      },
    ],
    faqs: [
      {
        q: "Why does my key work in one door but not another?",
        a: "Almost always cumulative duplication error. A copy of a copy drifts a few thousandths of an inch each generation until the tightest cylinder in the building rejects it. Cutting a fresh key by code fixes it permanently.",
      },
      {
        q: "Will you copy a key stamped 'Do Not Duplicate'?",
        a: "Not without authorisation from the business or property owner. The stamp itself carries no legal weight — which is why we treat it as a request for verification, and why a restricted keyway is the real solution if copying concerns you.",
      },
      {
        q: "Can you cut keys without the original?",
        a: "Yes, if the code is available — from our records if we set up your system, from the lock's code stamp, or by decoding the cylinder on site.",
      },
      {
        q: "How quickly can you turn around a bulk order?",
        a: "It depends on the blank and the quantity. Standard commercial blanks are usually straightforward; restricted blanks depend on stock. We will tell you the real lead time when you order, and we deliver the keys to you.",
      },
    ],
    related: [
      "commercial-rekeying-winnipeg",
      "high-security-locks-winnipeg",
      "master-key-systems-winnipeg",
    ],
  },

  {
    slug: "automatic-door-operators-winnipeg",
    name: "Automatic & Accessible Door Operators",
    shortName: "Automatic Doors",
    icon: "door",
    emergency: false,
    summary:
      "Automatic doors and push-button accessible operators installed, serviced and repaired, so every visitor can get through your entrance.",
    metaTitle: "Automatic Door Installation & Repair Winnipeg | Accessible Operators",
    metaDescription:
      "Automatic door installation, service and repair in Winnipeg and surrounding communities. Push-button accessible door operators, low-touch hardware and repairs to existing automatic doors.",
    heroHeading: "A door that opens for everyone.",
    heroSub:
      "Automatic doors and push-button accessible operators installed, serviced and repaired across Winnipeg and surrounding communities.",
    intro: [
      "An automatic door is the simplest way to welcome every visitor — people using wheelchairs and walkers, parents with strollers, staff carrying stock, customers pushing carts. Manitoba Lock & Safe installs new automatic operators, adds push-button operators to existing swing doors, and repairs the ones that have stopped behaving.",
      "An operator is only as good as the door it is moving. Before we recommend anything we look at the whole opening: the door's weight and swing, the hinges or pivots, the closer, the latching hardware and how the lock releases when the button is pressed. Most operator complaints trace back to one of those, and fixing the opening is what makes the operator last.",
      "Not sure where to start? Tell us about the entrance and who uses it, and we will walk you through the options in plain language before quoting.",
    ],
    offerings: [
      {
        title: "New automatic door operators",
        body: "Operators supplied and installed on new or existing swing doors, matched to the door's weight, traffic and exposure to weather.",
      },
      {
        title: "Push-button accessible operators",
        body: "Push-plate and wave-to-open accessible entrances for main doors, vestibules and washrooms.",
      },
      {
        title: "Service and repair",
        body: "Doors that open slowly, slam, stop part-way, fail to latch or ignore the button — diagnosed and repaired on site.",
      },
      {
        title: "Low-touch door hardware",
        body: "Touchless switches, foot and arm pulls and automatically closing doors for clinics, schools, food service and other shared spaces.",
      },
      {
        title: "Lock and access control integration",
        body: "Operators tied into electric strikes, card readers and keypads so the door unlocks and opens in the right order.",
      },
      {
        title: "Adjustment and maintenance",
        body: "Speed, force and hold-open settings checked and adjusted, including the seasonal changes a Manitoba winter demands.",
      },
    ],
    signs: [
      "The push button works some days and not others",
      "The door opens too slowly, too fast or only part of the way",
      "The door no longer latches or locks after it closes",
      "Wind catches the door and the operator fights it",
      "Visitors with mobility aids are struggling with your entrance",
      "You are renovating and need an accessible entrance",
    ],
    process: [
      {
        step: "Look at the entrance",
        body: "We assess the door, frame, hardware, power and how people actually use the opening.",
      },
      {
        step: "Recommend and quote",
        body: "You get a written quote for the repair or the new operator, with the options explained.",
      },
      {
        step: "Install or repair",
        body: "The work is done on site, with the locking hardware and any access control connected and tested.",
      },
      {
        step: "Adjust and show you",
        body: "Opening speed, force and hold-open time are set, and your staff are shown how the door works and what to watch for.",
      },
    ],
    faqs: [
      {
        q: "Can an operator be added to my existing door?",
        a: "Often, yes. Many swing doors can take an operator without being replaced, provided the door, frame and hinges are in good condition. We check the opening first and tell you honestly if the door needs work before an operator will be reliable.",
      },
      {
        q: "My automatic door has stopped working. Can you repair it?",
        a: "Usually. Many faults turn out to be a switch, a sensor, an adjustment or worn door hardware rather than the operator itself. We diagnose the cause on site and quote the repair before proceeding.",
      },
      {
        q: "Will the door still lock?",
        a: "Yes. The operator is set up to work with your locking hardware, so the door releases when it should open and secures when it closes. If you have access control, we connect the two.",
      },
      {
        q: "How much does an automatic door cost?",
        a: "It depends on the door, the type of operator, the power available and what the locking hardware needs. We look at the opening and give you a written quote rather than a guess over the phone.",
      },
    ],
    related: [
      "door-frame-storefront-repair-winnipeg",
      "panic-bars-exit-devices-winnipeg",
      "access-control-systems-winnipeg",
    ],
  },

  {
    slug: "smart-locks-keyless-entry-winnipeg",
    name: "Smart Locks & Keyless Entry",
    shortName: "Smart Locks",
    icon: "card",
    emergency: false,
    summary:
      "Keypad, phone and fob-controlled locks for homes and businesses — chosen to suit the door and installed properly.",
    metaTitle: "Smart Lock Installation Winnipeg | Keyless Entry for Home & Business",
    metaDescription:
      "Smart lock and keyless entry installation in Winnipeg and surrounding communities. Keypad, phone and fob-controlled locks for homes and businesses, supplied, installed and set up by a locksmith.",
    heroHeading: "Keyless entry, installed by a locksmith.",
    heroSub:
      "Keypad, phone and fob-controlled locks for homes and businesses across Winnipeg and surrounding communities.",
    intro: [
      "A smart lock lets you open the door with a code, a phone or a fob instead of a key — and lets you give someone access, or take it away, without cutting or collecting anything. For a home that means no more hidden spare key. For a business it means a code for the cleaner that can be changed when the contract ends.",
      "The lock still has to suit the door. A keypad that struggles in the cold, a deadbolt that binds because the door has shifted, or a lock that does not suit the thickness of the door will be a nuisance however clever it is. We help you choose a lock that fits the door, the climate and the way you want to use it, then install it and set it up with you.",
    ],
    offerings: [
      {
        title: "Keypad locks",
        body: "Push-button and touchscreen locks with individual codes you can add, change and delete yourself.",
      },
      {
        title: "Phone-controlled locks",
        body: "Locks you can operate and manage from an app, including giving a guest or tradesperson temporary access.",
      },
      {
        title: "Fob and card locks",
        body: "Standalone fob or card locks for offices, suites and shared entrances that do not need a full access control system.",
      },
      {
        title: "Installation and door preparation",
        body: "The door and frame are checked and adjusted so the bolt throws freely — the most common reason a smart lock drains batteries or jams.",
      },
      {
        title: "Setup and handover",
        body: "Codes, users and the app are set up with you on site, and you are shown how to manage them afterwards.",
      },
      {
        title: "Lock you already bought",
        body: "Have a smart lock still in the box? We can install it, and tell you first if it is not a good match for your door.",
      },
    ],
    signs: [
      "You are tired of hiding a spare key or lending keys out",
      "Staff, cleaners or contractors need access you can switch off later",
      "You run a rental or shared space with changing occupants",
      "Family members keep getting locked out",
      "Your current keypad lock jams, sticks or eats batteries",
    ],
    process: [
      {
        step: "Talk through how you use the door",
        body: "Who needs access, how often it changes and whether you want a keypad, a phone, a fob or a mix.",
      },
      {
        step: "Check the door",
        body: "We look at the door, frame and existing lock so the recommendation actually fits.",
      },
      {
        step: "Install",
        body: "The lock is fitted and the door adjusted so it latches and locks smoothly.",
      },
      {
        step: "Set up and hand over",
        body: "Codes and users are programmed with you, and you are shown how to change them yourself.",
      },
    ],
    faqs: [
      {
        q: "What happens if the batteries die?",
        a: "Most smart locks warn you well before the batteries run out, and many keep a key cylinder or another backup way in. We go through the backup for your specific lock when we install it.",
      },
      {
        q: "Do smart locks work in a Winnipeg winter?",
        a: "Choosing a lock suited to an exterior door in a cold climate matters, and so does a door that closes and latches cleanly. Cold shortens battery life, so we talk through what to expect for the lock you choose.",
      },
      {
        q: "Is a smart lock enough for my business?",
        a: "For one or two doors and a handful of users, often yes. If you need many doors, schedules or a record of who came and went, an access control system is the better fit — we install both and will tell you which suits you.",
      },
      {
        q: "Can you install a lock I bought myself?",
        a: "Yes. We will check it against your door first and let you know if there is a problem before we start.",
      },
    ],
    related: [
      "access-control-systems-winnipeg",
      "residential-locksmith-winnipeg",
      "commercial-lock-repair-installation-winnipeg",
    ],
  },

  {
    slug: "residential-locksmith-winnipeg",
    name: "Residential Locksmith Service",
    shortName: "Residential",
    icon: "key",
    emergency: false,
    summary:
      "Home rekeying, deadbolts, lock repair and installation, home lockouts and home safes — a locksmith who comes to your door.",
    metaTitle: "Residential Locksmith Winnipeg | Home Rekeying, Deadbolts & Lock Repair",
    metaDescription:
      "Residential locksmith in Winnipeg and surrounding communities. Home rekeying, deadbolt installation, lock repair, home lockouts and home safes. Mobile service, Monday to Friday, 8 a.m. to 5 p.m.",
    heroHeading: "Feel secure at home.",
    heroSub:
      "Home rekeying, deadbolts, lock repair and lockouts across Winnipeg and surrounding communities — mobile service, Monday to Friday.",
    intro: [
      "Your home's locks protect the people and things that matter most to you, and most homeowners never think about them until something goes wrong: a move into a house with an unknown number of keys in circulation, a deadbolt that has become stiff, a lost key ring, a door that no longer closes properly.",
      "Manitoba Lock & Safe is a mobile locksmith, so we come to you. A technician looks at the doors, explains what is worth doing and what is not, and gives you the price before any work begins. Our hours are Monday to Friday, 8 a.m. to 5 p.m.",
    ],
    offerings: [
      {
        title: "Home rekeying",
        body: "Your existing locks changed to work with new keys, so old keys stop working. Ideal after a move, a lost key or a change of tenants — and several doors can be set to one key.",
      },
      {
        title: "Deadbolts",
        body: "Deadbolts supplied and installed in Grade 1, 2 and 3, in a range of finishes to suit your home, with the strike properly reinforced.",
      },
      {
        title: "Lock repair and installation",
        body: "Sticking, loose or worn locks repaired, and new locks fitted to entry doors, patio doors, garages and gates.",
      },
      {
        title: "Home lockouts",
        body: "Locked out during business hours? We open the door with non-destructive methods wherever possible. Proof that you live there is required.",
      },
      {
        title: "Home safes",
        body: "Help choosing a safe for documents, valuables or firearms, plus installation and service for safes you already own.",
      },
      {
        title: "Smart and keypad locks",
        body: "Keyless locks supplied and installed, or the one you already bought fitted properly.",
      },
    ],
    signs: [
      "You have just moved in and do not know who has keys",
      "A key has been lost or not returned",
      "The key sticks or the deadbolt is hard to turn",
      "The door has to be pushed or lifted before it will lock",
      "You have had a break-in or an attempted one",
      "You carry a different key for every door",
    ],
    process: [
      {
        step: "Call or request a quote",
        body: "Tell us what is happening and we will book a visit during our Monday-to-Friday hours.",
      },
      {
        step: "We come to you",
        body: "A technician checks the doors and locks and explains your options in plain language.",
      },
      {
        step: "You approve the price",
        body: "You know the cost before any work starts.",
      },
      {
        step: "The work is done on site",
        body: "Locks are rekeyed, repaired or replaced, tested with you, and your new keys handed over.",
      },
    ],
    faqs: [
      {
        q: "Should I rekey or replace my locks?",
        a: "If the locks are in good condition, rekeying is usually all you need — the old keys stop working and you keep the hardware. Replacement makes sense when a lock is worn, damaged, or you want better security or a different style.",
      },
      {
        q: "What do deadbolt grades mean?",
        a: "Grade 1 is the most durable, Grade 2 is a solid residential standard and Grade 3 is basic. We explain the difference for your door and let you choose.",
      },
      {
        q: "Are you available at night or on weekends?",
        a: "No. Our hours are Monday to Friday, 8 a.m. to 5 p.m.",
      },
      {
        q: "Do I need to bring anything to you?",
        a: "No. We are a mobile company and all the work is done at your home.",
      },
    ],
    related: [
      "smart-locks-keyless-entry-winnipeg",
      "safe-opening-service-winnipeg",
      "high-security-locks-winnipeg",
    ],
  },

  {
    slug: "automotive-locksmith-winnipeg",
    name: "Automotive Locksmith Service",
    shortName: "Automotive",
    icon: "keys",
    emergency: false,
    summary:
      "Vehicle lockouts and car key cutting and replacement during business hours. Call to confirm we can help with your vehicle.",
    metaTitle: "Automotive Locksmith Winnipeg | Car Lockouts & Key Replacement",
    metaDescription:
      "Automotive locksmith service in Winnipeg and surrounding communities. Vehicle lockouts and car key cutting and replacement, Monday to Friday, 8 a.m. to 5 p.m. Call to confirm for your vehicle.",
    heroHeading: "Locked out of your vehicle, or need a key?",
    heroSub:
      "Vehicle lockouts and car key cutting and replacement across Winnipeg and surrounding communities, Monday to Friday, 8 a.m. to 5 p.m.",
    intro: [
      "Keys locked in the car, a key that has snapped, or a single key with no spare — vehicle key problems tend to arrive at a bad moment. Manitoba Lock & Safe is a mobile locksmith, so a technician comes to the vehicle.",
      "Vehicles vary a great deal by make, model and year, and so do their keys. The quickest way to find out whether we can help is to call with those details. We will tell you plainly whether it is something we can do, and what it involves, before anyone is sent out.",
    ],
    offerings: [
      {
        title: "Vehicle lockouts",
        body: "Keys locked inside? We open the vehicle during business hours, taking care not to damage the door, the weather seals or the lock.",
      },
      {
        title: "Car key cutting",
        body: "Spare and replacement keys cut for your vehicle. Call with the make, model and year so we can confirm before we come.",
      },
      {
        title: "Lost key replacement",
        body: "No working key at all? Call us with the vehicle details and we will tell you whether we can help.",
      },
      {
        title: "Broken key extraction",
        body: "Snapped keys removed from the door lock or ignition.",
      },
      {
        title: "Fleet and work vehicles",
        body: "Spare keys and lock problems for company vehicles, arranged alongside the locksmith work at your building.",
      },
    ],
    signs: [
      "Your keys are locked inside the vehicle",
      "You are down to one key and have no spare",
      "The key is worn and has become hard to turn",
      "A key has broken off in the lock or ignition",
      "A company vehicle has gone out with no spare key on file",
    ],
    process: [
      {
        step: "Call with your vehicle details",
        body: "Make, model and year, where the vehicle is and what has happened.",
      },
      {
        step: "We confirm what we can do",
        body: "You are told whether we can help with your vehicle, and the cost, before a technician is sent.",
      },
      {
        step: "We come to the vehicle",
        body: "Proof of ownership or authority to access the vehicle is checked on arrival.",
      },
      {
        step: "The work is done on site",
        body: "The vehicle is opened or the key is cut, and tested with you before we leave.",
      },
    ],
    faqs: [
      {
        q: "Can you make a key for my vehicle?",
        a: "It depends on the make, model and year. Please call with those details and we will confirm whether we can do it before booking a visit.",
      },
      {
        q: "What do I need to show you?",
        a: "Photo ID and proof that the vehicle is yours or that you are authorised to access it, such as the registration.",
      },
      {
        q: "When are you available?",
        a: "Monday to Friday, 8 a.m. to 5 p.m., across Winnipeg and surrounding communities.",
      },
    ],
    related: [
      "key-cutting-duplication-winnipeg",
      "residential-locksmith-winnipeg",
      "commercial-lockout-service-winnipeg",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
