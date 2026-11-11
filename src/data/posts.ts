export type PostSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  readingTime: string;
  category: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  sections: PostSection[];
  related: string[];
};

export const posts: Post[] = [
  {
    slug: "winnipeg-winter-commercial-door-problems",
    title: "Why Your Commercial Door Stops Working Every Winnipeg Winter",
    date: "2026-01-14",
    readingTime: "6 min read",
    category: "Maintenance",
    excerpt:
      "Most 'broken lock' calls we take in January are not broken locks at all. Here is what −35 °C actually does to a commercial opening, and how to get ahead of it.",
    metaTitle: "Why Commercial Doors Fail in Winnipeg Winters | Manitoba Lock & Safe",
    metaDescription:
      "Cold weather causes most winter commercial door failures in Winnipeg — closers, frost heave, contracted metal and frozen cylinders. Here is what actually goes wrong and how to prevent it.",
    sections: [
      {
        paragraphs: [
          "Every January our phones do the same thing. Doors that behaved perfectly through the autumn suddenly will not latch, keys will not turn, and closers either slam or give up entirely. Owners assume the lock has failed and ask for a replacement.",
          "It usually has not. Winnipeg's temperature range — roughly 35 °C in July to −35 °C in January, and colder with the wind — moves an entire door assembly, and the lock is simply the part where the symptom shows up.",
        ],
      },
      {
        heading: "Door closers are the number one winter call",
        paragraphs: [
          "Door closers work on hydraulic fluid, and fluid gets thicker as it gets colder. A closer adjusted on a warm September afternoon is running at a completely different effective speed at −30 °C — the door drifts shut too slowly to latch, or the latching speed is too weak to drive the latch fully into the strike.",
          "The fix is seasonal adjustment, not replacement. Most quality commercial closers have separate valves for sweep speed, latch speed and backcheck, and a technician can retune them in minutes. If your closer has no adjustment left to give, that is the signal it has reached the end of its service life.",
        ],
      },
      {
        heading: "Frost heave moves the frame, not the lock",
        paragraphs: [
          "Manitoba's frost line runs deep, and the ground under an entrance moves through the freeze-thaw cycle. A frame that is plumb in September can be measurably out of square by February, and once the frame moves, the latch and strike no longer line up.",
          "The symptom people describe is 'I have to pull the door towards me to lock it'. That is a mechanical misalignment. Continuing to force it wears the latch, the strike and eventually the lock body, which turns a strike adjustment into a hardware replacement.",
        ],
      },
      {
        heading: "Metal contracts, and aluminium contracts most",
        paragraphs: [
          "Aluminium storefront doors are the most cold-sensitive openings in commercial construction. Aluminium has a high coefficient of thermal expansion, so a storefront leaf is genuinely a different size in January than in July. Add a door that has racked slightly over years of use and you get the classic winter symptom: the deadlatch no longer engages the keeper.",
          "Hollow metal doors and frames behave better but are not immune, particularly where a steel frame is set into a masonry wall that moves at a different rate.",
        ],
      },
      {
        heading: "Moisture, then ice, inside the cylinder",
        paragraphs: [
          "A key that will not turn on a cold morning is often a cylinder with moisture in it. The moisture arrives during a thaw, then freezes solid. The instinctive response — forcing the key — is how keys snap off in cylinders, which converts a five-minute problem into a lockout.",
          "The prevention is a dry lubricant. Do not use oil-based products such as WD-40 in a lock cylinder: they attract dust, gum up the pin chambers and make the eventual failure worse. A graphite or PTFE-based dry lubricant applied in the autumn is what actually works.",
        ],
      },
      {
        heading: "Weatherstripping is a security component",
        paragraphs: [
          "Failed weatherstripping and worn door sweeps let warm interior air reach the cold edge of the door, where it condenses and then freezes. That is where the ice build-up inside an exterior door comes from, and it is also why the door starts dragging on the threshold.",
          "Renewing sweeps and seals is cheap, improves latching reliability, and pays for itself in heating costs over a Winnipeg winter.",
        ],
      },
      {
        heading: "A twenty-minute autumn service call prevents most of it",
        bullets: [
          "Adjust door closers for cold-weather operation before the first hard freeze",
          "Check latch-to-strike alignment on every exterior door and adjust the strike as needed",
          "Lubricate cylinders with a dry graphite or PTFE lubricant, never an oil-based spray",
          "Replace worn sweeps, seals and weatherstripping",
          "Check hinges and pivots for wear and tighten or replace before the door drops further",
          "Confirm exit devices latch fully — cold makes a marginal latch a failed one",
        ],
      },
      {
        paragraphs: [
          "None of this is expensive. All of it is cheaper than a failed door on a −34 °C Monday morning when your staff cannot get in and your first customer is already waiting.",
        ],
      },
    ],
    related: [
      "master-key-system-vs-access-control",
      "do-not-duplicate-keys-dont-work",
    ],
  },

  {
    slug: "master-key-system-vs-access-control",
    title: "Master Key System or Access Control? An Honest Comparison",
    date: "2026-02-11",
    readingTime: "7 min read",
    category: "Security Planning",
    excerpt:
      "Access control is not automatically the upgrade, and mechanical keying is not automatically obsolete. Here is how we decide, door by door.",
    metaTitle: "Master Key System vs Access Control | Winnipeg Commercial Locksmith",
    metaDescription:
      "Should your Winnipeg business use a master key system or electronic access control? An honest comparison of cost, audit trails, turnover and reliability — door by door.",
    sections: [
      {
        paragraphs: [
          "Almost every commercial security conversation we have eventually reaches this question, and the honest answer disappoints anyone hoping for a single winner. Most buildings should use both, and the interesting work is deciding which doors get which.",
        ],
      },
      {
        heading: "What master keying does well",
        paragraphs: [
          "A mechanical master key system is a hierarchy of cylinders pinned so that individual keys open individual doors, master keys open groups, and a grand master opens everything. It has been the backbone of commercial security for over a century for good reasons.",
        ],
        bullets: [
          "Low cost per door — a cylinder is a fraction of the price of a reader, controller and electrified hardware",
          "No power, no network, no batteries, no firmware and no subscription",
          "It works in a blackout, and it works at −35 °C in a parkade with no heat",
          "Nothing to be hacked, and no vendor who can discontinue support",
          "Genuinely long service life — properly maintained cylinders run for decades",
        ],
      },
      {
        heading: "Where master keying costs you",
        bullets: [
          "Every departure or lost key is a physical rekey with a truck roll attached",
          "There is no record of who opened a door, only who was issued a key",
          "Access cannot vary by time of day — a key works at 2 p.m. and at 2 a.m.",
          "Unless you run restricted keys, copies can be cut anywhere",
          "A lost master key exposes every door beneath it",
        ],
      },
      {
        heading: "What access control does well",
        paragraphs: [
          "Electronic access control replaces the physical rekey with an administrative change. Revoking a credential takes seconds and applies building-wide the moment you click save.",
        ],
        bullets: [
          "Instant revocation — no rekey, no truck roll, no cost per departure",
          "A complete audit trail of who opened which door and when",
          "Schedules — doors unlock for business hours and secure themselves afterwards",
          "Credentials limited by time, day and door, which is ideal for contractors",
          "Remote administration, including unlocking a door for a delivery from your phone",
        ],
      },
      {
        heading: "Where access control costs you",
        bullets: [
          "Substantially higher cost per door once readers, controllers, power and electrified hardware are counted",
          "Ongoing subscription fees on most cloud-managed platforms",
          "Dependence on power and network, which means backup power is not optional",
          "Firmware updates, credential administration and a vendor relationship to maintain",
          "A shorter practical lifespan — platforms get discontinued in ways cylinders do not",
        ],
      },
      {
        heading: "How we actually decide",
        paragraphs: [
          "We put access control on doors where the cost is justified by turnover, sensitivity or scheduling, and mechanical keying everywhere else. In a typical Winnipeg office building that produces a mix like this:",
        ],
        bullets: [
          "Main entrance — access control, with scheduled unlock during business hours",
          "Staff and after-hours entrances — access control, credentials limited by role",
          "Server and comms rooms — access control for the audit trail, on a high-security cylinder as backup",
          "Records rooms and controlled storage — access control where compliance requires proof of access",
          "Tenant suite doors — mechanical, master keyed",
          "Interior offices, meeting rooms, storage — mechanical, master keyed",
          "Mechanical, electrical and roof access — mechanical, on a restricted keyway",
        ],
      },
      {
        heading: "The mistake that costs the most",
        paragraphs: [
          "The single most common expensive error we see is putting access control on doors that never needed it, then having no budget left for the doors that did. A janitorial closet does not need an audit trail. A pharmaceutical storage room does.",
          "The second most common error is the reverse: running a building on mechanical keys through years of turnover, rekeying repeatedly, and never adding up what those rekeys cost against a single-door access control installation that would have paid for itself in eighteen months.",
        ],
      },
      {
        heading: "Keep the mechanical override",
        paragraphs: [
          "Whatever the mix, we recommend a mechanical override on critical doors even after they go electronic. A dead controller, a failed power supply or a network outage should never become a lockout — and a cylinder in the door means it never does.",
        ],
      },
    ],
    related: [
      "do-not-duplicate-keys-dont-work",
      "commercial-lock-grades-explained",
    ],
  },

  {
    slug: "do-not-duplicate-keys-dont-work",
    title: "'Do Not Duplicate' Does Nothing. Here Is What Actually Works.",
    date: "2026-03-05",
    readingTime: "5 min read",
    category: "Key Control",
    excerpt:
      "That stamp on your keys carries no legal weight and stops no one. Real key control comes from patented keyways and a signature — not from a request.",
    metaTitle: "Do Not Duplicate Keys: Why They Don't Work | Key Control Winnipeg",
    metaDescription:
      "'Do Not Duplicate' stamps have no legal force and any key cutter can ignore them. Learn how restricted keyways and patented key blanks deliver real key control for Winnipeg businesses.",
    sections: [
      {
        paragraphs: [
          "Somewhere in your building there is a key stamped DO NOT DUPLICATE, and whoever ordered it believed that stamp was doing something. It is not.",
          "The phrase carries no legal force in Canada. It is a request. Any key cutter, hardware store or self-service kiosk can ignore it, and plenty do — the blank is a standard commercial blank sold by the thousand, and cutting it takes fifteen seconds.",
        ],
      },
      {
        heading: "Why the stamp fails",
        bullets: [
          "It is not backed by legislation — no statute makes copying a stamped key an offence",
          "The blank is unrestricted and available to anyone who wants to stock it",
          "Self-service kiosks in retail stores do not read stamps at all",
          "Enforcement depends entirely on the goodwill of whoever is holding the key",
        ],
      },
      {
        heading: "What real key control looks like",
        paragraphs: [
          "Genuine key control rests on a patented keyway. The key blank itself is protected by an active patent, so it is not sold on the open market — it exists only within the manufacturer's authorised dealer network. Nobody can cut a copy, because nobody else can legally obtain the blank.",
          "On top of that sits the administrative half: an authorisation list. You name the people entitled to order keys for your system. A request from anyone else is refused, and every order that is filled is logged against a signature.",
        ],
      },
      {
        heading: "The three things a restricted system gives you",
        bullets: [
          "Exclusivity — the blank cannot be obtained outside the authorised dealer network",
          "Accountability — every key cut is recorded against the person who authorised it",
          "Certainty — when a key goes missing, you know it is one key, not an unknown number of copies",
        ],
      },
      {
        heading: "The security bonus",
        paragraphs: [
          "Restricted keyways are almost always high-security cylinders as well, which means the same upgrade brings pick resistance, bump resistance and drill resistance. Standard commercial pin tumbler cylinders can be picked by anyone with modest practice and inexpensive tools; a sidebar or rotating-element cylinder is a different proposition entirely.",
        ],
      },
      {
        heading: "What it costs, and where to spend it",
        paragraphs: [
          "High-security cylinders cost several times a standard cylinder, which is exactly why we recommend deploying them selectively rather than everywhere. In most buildings the list is short: perimeter doors, master-keyed cylinders, cash handling, controlled substances, server and records rooms.",
          "Interior offices and low-risk storage rarely justify it. A locksmith who tells you every door in the building needs a restricted cylinder is selling, not advising.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "If you do not know how many copies of your front door key exist, the honest position is that you have no key control at all. The remedy is a rekey onto a restricted keyway plus a fresh issue register: it draws a line under everything unknown, and from that moment every key in circulation is one you authorised and can account for.",
        ],
      },
    ],
    related: [
      "master-key-system-vs-access-control",
      "employee-leaves-security-checklist",
    ],
  },

  {
    slug: "commercial-lock-grades-explained",
    title: "ANSI Grade 1, 2 and 3: What You Are Actually Buying",
    date: "2026-04-09",
    readingTime: "5 min read",
    category: "Hardware",
    excerpt:
      "The grade on a commercial lockset is a durability rating, not a marketing term. Understanding it explains most premature hardware failures we are called out to.",
    metaTitle: "ANSI Lock Grades Explained | Commercial Hardware Winnipeg",
    metaDescription:
      "ANSI/BHMA Grade 1, 2 and 3 commercial lock grades explained — cycle testing, where each grade belongs, and why residential hardware fails on commercial doors.",
    sections: [
      {
        paragraphs: [
          "When we quote commercial hardware, the grade is usually the line clients question. It is also the line that determines whether you are calling us back in ten years or in ten months.",
          "ANSI/BHMA grading is a durability and strength standard administered through independent testing. It is not a manufacturer's marketing claim, and the differences between grades are large.",
        ],
      },
      {
        heading: "What the grades mean",
        bullets: [
          "Grade 1 — commercial heavy duty. Tested to roughly 1,000,000 cycles, with the highest strength and security requirements.",
          "Grade 2 — commercial light duty. Roughly 400,000 cycles. Suitable for lower-traffic commercial openings.",
          "Grade 3 — residential. Roughly 200,000 cycles. Not intended for commercial service at all.",
        ],
        paragraphs: [
          "Cycle counts sound abstract until you convert them into your own building. A retail entrance opened 400 times a day burns through 146,000 cycles a year. Grade 3 hardware on that door is finished inside eighteen months. Grade 1 is comfortably into its second decade.",
        ],
      },
      {
        heading: "Grades cover more than cycles",
        paragraphs: [
          "Testing also covers strength and security: how much force the lockset survives, how it resists impact, and how it stands up to attack on the cylinder and the latch. A Grade 1 lockset is not simply a Grade 3 that lasts longer — it is built to resist a determined attempt to defeat it.",
          "Finish durability is graded separately under BHMA, which matters more in Manitoba than most places. An exterior door subjected to road salt, ice and freeze-thaw cycling will strip a poor finish within a couple of winters.",
        ],
      },
      {
        heading: "Where each grade belongs",
        bullets: [
          "Grade 1 — public entrances, exterior doors, high-traffic interior doors, anything with an exit device, any opening in a security-sensitive area",
          "Grade 2 — low-traffic interior offices, storage rooms, and secondary doors in small commercial premises",
          "Grade 3 — residential only. It has no legitimate place on a commercial opening.",
        ],
      },
      {
        heading: "Why the box-store lockset fails",
        paragraphs: [
          "The most common hardware failure we attend is Grade 3 residential hardware installed on a commercial door, usually because it was on the shelf and the price looked reasonable. It survives the warranty period and then fails — and the failure mode is almost always a lockset that no longer retracts the latch reliably, which is a lockout waiting for a Saturday morning.",
          "Counting the urgent service call, the replacement hardware and the lost trading time, the cheap lockset typically costs several times what the correct one would have.",
        ],
      },
      {
        heading: "Grade is not the whole specification",
        paragraphs: [
          "Grade tells you how long the hardware lasts. Function tells you what it does — office, storeroom, classroom, entrance, passage, privacy — and getting function wrong causes as many problems as getting grade wrong. A storeroom function lockset on a door people need to pass through freely creates a workaround culture of propped doors and taped latches within a week.",
          "When we specify hardware we give you grade, function, finish and handing for every opening. If a quote you have received lists only a product name and a price, ask for the rest before you compare it against anything.",
        ],
      },
    ],
    related: [
      "winnipeg-winter-commercial-door-problems",
      "exit-door-code-violations-winnipeg",
    ],
  },

  {
    slug: "employee-leaves-security-checklist",
    title: "An Employee Just Left. Here Is Your 24-Hour Security Checklist.",
    date: "2026-05-20",
    readingTime: "4 min read",
    category: "Key Control",
    excerpt:
      "Turnover is the most common security event a business experiences, and the most commonly mishandled. A practical checklist for the first day.",
    metaTitle: "Employee Departure Security Checklist | Winnipeg Commercial Locksmith",
    metaDescription:
      "A practical 24-hour checklist for Winnipeg businesses after an employee leaves — keys, credentials, safe combinations, alarm codes and what to prioritise first.",
    sections: [
      {
        paragraphs: [
          "The most frequent security event at any business is not a break-in. It is a resignation. And the most common mistake is assuming that a returned key means returned access.",
          "A key can be copied at any hardware store for a few dollars. What was handed back is a key, not the access it represents. Here is what to do in the first twenty-four hours.",
        ],
      },
      {
        heading: "1. List what they actually had access to",
        bullets: [
          "Exterior door keys, including back and side entrances",
          "Interior keys — offices, storage, records, mechanical rooms",
          "Access control fobs, cards or mobile credentials",
          "Safe combinations and till or drawer keys",
          "Alarm system codes",
          "Padlock keys for gates, yards, sheds and equipment",
          "Cabinet, desk and locker keys",
        ],
        paragraphs: [
          "Write it down. This list is why key registers exist — the businesses that struggle here are the ones reconstructing access from memory.",
        ],
      },
      {
        heading: "2. Revoke everything electronic immediately",
        paragraphs: [
          "This is the free part and it takes minutes. Disable access control credentials, change alarm codes, and remove them from any door schedule or user group. Do it before you do anything else, because it costs nothing and closes the largest hole instantly.",
        ],
      },
      {
        heading: "3. Decide whether to rekey, and be honest about it",
        paragraphs: [
          "Rekeying costs money, so the decision should be proportionate — but 'they seemed fine about it' is not a security assessment. Rekey without hesitation if any of the following apply:",
        ],
        bullets: [
          "The departure was involuntary or acrimonious",
          "They held a master key, or keys to cash, inventory or records",
          "Keys were not returned, or were returned incomplete",
          "You cannot say with confidence how many copies existed",
          "They had access to a safe, a pharmacy cabinet or controlled inventory",
        ],
      },
      {
        heading: "4. Change safe combinations",
        paragraphs: [
          "Safe combinations are forgotten in almost every departure we are called about afterwards. If the person knew the combination, it is compromised — a combination cannot be handed back. Changing it is quick and inexpensive, and on most electronic safe locks we can add separate user codes so the next change affects one person rather than everyone.",
        ],
      },
      {
        heading: "5. Update the register",
        paragraphs: [
          "Record what was returned, what was not, what was rekeyed and what was revoked. Ninety seconds of administration now is the difference between a confident answer and a guess the next time this happens — and it will happen again.",
        ],
      },
      {
        heading: "The cheaper long-term answer",
        paragraphs: [
          "If you are rekeying more than once or twice a year, you are paying repeatedly for a problem that access control solves once. Revoking a credential is free and instant. For businesses with meaningful turnover — restaurants, retail, warehousing, healthcare — the arithmetic usually favours electronic access on the high-traffic doors within the first two years.",
        ],
      },
    ],
    related: [
      "do-not-duplicate-keys-dont-work",
      "master-key-system-vs-access-control",
    ],
  },

  {
    slug: "exit-door-code-violations-winnipeg",
    title: "Five Exit Door Violations We Find in Winnipeg Businesses Every Week",
    date: "2026-06-24",
    readingTime: "6 min read",
    category: "Compliance",
    excerpt:
      "Egress violations are the most common code deficiency we encounter, and almost all of them were installed by someone solving a real problem the wrong way.",
    metaTitle: "Common Exit Door Code Violations | Winnipeg Commercial Locksmith",
    metaDescription:
      "The five most common exit door and egress code violations we find in Winnipeg businesses — chained exits, added deadbolts, blocked doors — and the compliant alternatives.",
    sections: [
      {
        paragraphs: [
          "Nobody sets out to create a life-safety hazard. Every egress violation we find was installed by somebody solving a genuine problem: staff propping the fire exit, stock walking out the back, a door that would not stay shut. The solution chosen just happened to be one that could kill people and will certainly fail an inspection.",
          "Here are the five we encounter most often across Winnipeg, and what to do instead.",
        ],
      },
      {
        heading: "1. The chained or padlocked exit door",
        paragraphs: [
          "A chain through the panic bars of a fire exit is the most serious violation in commercial buildings, and we still find it regularly — usually in retail and restaurants, usually to stop theft or unauthorised entry through a rear door.",
          "An egress door must open from the inside with a single motion, with no key, no tool and no special knowledge. A chain fails every part of that requirement, and in a fire it turns an exit into a trap.",
          "The compliant answer is delayed egress hardware where the occupancy classification allows it, combined with a local exit alarm. The door still opens — after a fifteen or thirty second delay with an audible alarm, and immediately on fire alarm activation. Loss prevention gets its deterrent, and nobody dies for it.",
        ],
      },
      {
        heading: "2. The deadbolt added above the panic bar",
        paragraphs: [
          "A thumbturn or key deadbolt fitted above an exit device is the second most common finding. It defeats the entire point of the panic bar, because leaving now requires two separate actions instead of one, and in a dark, smoke-filled room the second action will not happen.",
          "If the exit device is not securing the door adequately, the device is wrong for the opening — vertical rod hardware, a better latch or frame reinforcement solves it. Adding a deadbolt does not.",
        ],
      },
      {
        heading: "3. Storage stacked against the exit",
        paragraphs: [
          "Not a hardware problem, but the deficiency we photograph most: pallets, stock, bins and Christmas decorations stacked in front of an exit door or blocking the path to it. Egress includes the route, not just the door.",
          "The other half of this is the exit that opens onto a snow bank. In Winnipeg, exit doors must be kept clear through the winter — a door that cannot swing because of accumulated snow and ice is as blocked as one behind a pallet stack.",
        ],
      },
      {
        heading: "4. Exit devices dogged on fire-rated doors",
        paragraphs: [
          "Dogging holds the panic bar depressed so the door pushes open freely, which is convenient during business hours on a non-rated door. On a fire-rated opening it is prohibited, because the door must latch to hold its rating and contain a fire.",
          "Fire-rated exit devices are manufactured without mechanical dogging for this reason. If you have a rated door with a dogged device on it, the wrong device was installed. Where free passage during business hours is genuinely needed, an electric latch retraction device tied into the fire alarm provides it compliantly.",
        ],
      },
      {
        heading: "5. Doors that swing the wrong way",
        paragraphs: [
          "In rooms above certain occupant loads, exit doors must swing in the direction of egress — outward. We find inward-swinging doors on assembly spaces, meeting rooms and back-of-house areas whose use changed over the years without anyone revisiting the hardware.",
          "This one is more expensive to fix because it involves the door, the frame and the hardware together. It is also not optional, and it is the kind of item that appears on an inspection report with a short deadline attached.",
        ],
      },
      {
        heading: "What to do before an inspector finds it",
        bullets: [
          "Walk every exit route in your building as if you were leaving in an emergency",
          "Confirm each exit door opens with a single motion from the inside, with nothing added to the hardware",
          "Check that exit paths are clear inside and out, including snow clearance in winter",
          "Verify rated doors latch fully and are not dogged",
          "Test exit devices and closers regularly, and adjust them seasonally",
        ],
        paragraphs: [
          "If you find something on that list, it can generally be corrected quickly and for far less than people expect. Correcting it before an inspector writes an order is always cheaper than correcting it afterwards — and the reason to do it has nothing to do with inspectors.",
        ],
      },
    ],
    related: [
      "commercial-lock-grades-explained",
      "winnipeg-winter-commercial-door-problems",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
