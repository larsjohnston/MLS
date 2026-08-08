export type Location = {
  slug: string;
  name: string;
  type: "winnipeg" | "manitoba";
  region: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  landmarks: string[];
  commonWork: string[];
  responseTime: string;
  nearby: string[];
};

export const locations: Location[] = [
  // ── Winnipeg neighbourhoods ────────────────────────────────────────────────
  {
    slug: "downtown-winnipeg",
    name: "Downtown Winnipeg",
    type: "winnipeg",
    region: "Winnipeg",
    summary:
      "Office towers, retail at street level and mixed-use conversions — layered access with a public ground floor.",
    metaTitle: "Commercial Locksmith Downtown Winnipeg | 24/7 Service",
    metaDescription:
      "Commercial locksmith in downtown Winnipeg. 24/7 emergency lockouts, office tower master key systems, access control and storefront repair for Portage Avenue and the central business district.",
    intro: [
      "Downtown Winnipeg concentrates the province's densest commercial security work into a few dozen blocks — office towers with layered tenant access, ground-floor retail exposed to street traffic, parkades, and older buildings converted to mixed use where the original hardware predates anyone currently working in them.",
      "We work the core daily, which means our technicians already know the loading-dock routes, the buildings that require security escort, and the after-hours access procedures that would otherwise turn a thirty-minute job into an afternoon.",
    ],
    landmarks: [
      "Portage Avenue and Main Street corridors",
      "True North Square and the arena district",
      "Winnipeg Convention Centre area",
      "Broadway and the Legislative precinct",
      "Graham Avenue transit mall",
    ],
    commonWork: [
      "Office tower master key systems and tenant suite rekeys",
      "Ground-floor retail storefront and Adams Rite hardware",
      "Access control for parkades and after-hours entry",
      "Emergency lockouts and break-in response",
    ],
    responseTime: "Typically 20–30 minutes",
    nearby: ["exchange-district", "the-forks-st-boniface", "osborne-village"],
  },
  {
    slug: "exchange-district",
    name: "Exchange District",
    type: "winnipeg",
    region: "Winnipeg",
    summary:
      "Heritage buildings, creative studios and restaurants — modern security fitted to century-old doors.",
    metaTitle: "Locksmith Exchange District Winnipeg | Heritage Building Security",
    metaDescription:
      "Commercial locksmith for Winnipeg's Exchange District. Heritage-sensitive hardware, restaurant and studio security, access control and 24/7 emergency lockout service.",
    intro: [
      "The Exchange District's heritage warehouses are beautiful and difficult in equal measure. Original wood and steel doors, non-standard frame preparations, hardware that has been modified five times over a century, and heritage constraints on what can be visibly changed on a façade.",
      "We fit modern security into those buildings without wrecking their character — retrofit cylinders in original hardware, electric strikes concealed within existing frames, and access control that leaves the streetscape looking exactly as it did.",
    ],
    landmarks: [
      "Old Market Square",
      "Albert Street and McDermot Avenue",
      "Princess Street warehouse blocks",
      "Waterfront Drive",
    ],
    commonWork: [
      "Heritage door and frame repair",
      "Restaurant and bar back-of-house access control",
      "Studio and shared-workspace key systems",
      "Retrofit high-security cylinders in original hardware",
    ],
    responseTime: "Typically 20–30 minutes",
    nearby: ["downtown-winnipeg", "north-end-point-douglas", "the-forks-st-boniface"],
  },
  {
    slug: "the-forks-st-boniface",
    name: "The Forks & St. Boniface",
    type: "winnipeg",
    region: "Winnipeg",
    summary:
      "Tourism, hospitality and healthcare on both sides of the river, with high public traffic and long operating hours.",
    metaTitle: "Locksmith St. Boniface & The Forks Winnipeg | Commercial Service",
    metaDescription:
      "Commercial locksmith serving St. Boniface and The Forks in Winnipeg. Hospitality, retail and healthcare security, access control, storefront repair and 24/7 emergency response.",
    intro: [
      "The Forks and St. Boniface run on public traffic and long hours — market retail, restaurants, hotels, event venues and the healthcare cluster around Saint-Boniface Hospital. Doors here cycle constantly, which is exactly the environment that punishes under-specified hardware.",
      "We specify Grade 1 hardware for these openings, service the closers and exit devices that see thousands of cycles a week, and schedule around service hours so a repair never happens in the middle of a lunch rush or an event load-in.",
    ],
    landmarks: [
      "The Forks Market and the historic rail yards",
      "Provencher Boulevard",
      "Saint-Boniface Hospital area",
      "Canadian Museum for Human Rights precinct",
    ],
    commonWork: [
      "High-traffic exit device and closer service",
      "Restaurant and hospitality back-of-house control",
      "Healthcare and clinic access control",
      "Event venue and seasonal-tenant key management",
    ],
    responseTime: "Typically 20–30 minutes",
    nearby: ["downtown-winnipeg", "exchange-district", "st-vital"],
  },
  {
    slug: "st-james-airport",
    name: "St. James & the Airport Area",
    type: "winnipeg",
    region: "Winnipeg",
    summary:
      "Airport-adjacent commercial, hotels, light industrial and Portage Avenue West retail — much of it operating around the clock.",
    metaTitle: "Locksmith St. James & Winnipeg Airport Area | Commercial Service",
    metaDescription:
      "Commercial locksmith serving St. James and the Winnipeg Richardson International Airport area. Industrial, hotel and retail security, access control and 24/7 emergency response.",
    intro: [
      "The airport corridor never fully closes. Hotels, freight and logistics operations, aviation services, car rental and 24-hour retail all run through the night, and security failures here are measured against flight schedules rather than business hours.",
      "We are set up for it — genuine round-the-clock dispatch, high-cycle hardware for hotel and terminal-adjacent doors, and access control for facilities that run staff across three shifts every day of the year.",
    ],
    landmarks: [
      "Winnipeg Richardson International Airport",
      "Portage Avenue West",
      "Sargent Avenue and Ness Avenue corridors",
      "Polo Park area",
    ],
    commonWork: [
      "24-hour facility access control and shift-based credentials",
      "Hotel back-of-house and guest-area hardware",
      "Freight, logistics and hangar perimeter security",
      "Retail storefront and overnight lockout response",
    ],
    responseTime: "Typically 20–35 minutes",
    nearby: ["polo-park-tuxedo", "inkster-industrial-park", "charleswood"],
  },
  {
    slug: "polo-park-tuxedo",
    name: "Polo Park & Tuxedo",
    type: "winnipeg",
    region: "Winnipeg",
    summary:
      "Winnipeg's densest retail concentration, plus professional offices and clinics through Tuxedo.",
    metaTitle: "Locksmith Polo Park & Tuxedo Winnipeg | Retail Security",
    metaDescription:
      "Commercial locksmith for Polo Park and Tuxedo in Winnipeg. Retail storefront hardware, deposit safes, exit alarms, clinic security and 24/7 emergency lockout service.",
    intro: [
      "Polo Park is the retail heart of the city, and retail hardware fails in predictable ways — storefront doors dropping out of alignment, closers giving up on the busiest entrance, rear exits propped or chained by staff who have not been given a legal alternative.",
      "We handle all of it, including mall tenant fit-outs and turnovers where a lease requires a specific hardware standard. Through Tuxedo we serve professional offices, clinics and dental practices with records-room and narcotics-cabinet security.",
    ],
    landmarks: [
      "CF Polo Park",
      "St. Matthews Avenue and Empress Street",
      "Grant Avenue and Corydon Avenue West",
      "Tuxedo Business Park",
    ],
    commonWork: [
      "Retail storefront door and hardware repair",
      "Deposit safes and cash-handling security",
      "Delayed egress and exit alarms for loss prevention",
      "Clinic and professional office access control",
    ],
    responseTime: "Typically 20–30 minutes",
    nearby: ["st-james-airport", "charleswood", "downtown-winnipeg"],
  },
  {
    slug: "st-vital",
    name: "St. Vital",
    type: "winnipeg",
    region: "Winnipeg",
    summary:
      "Retail along St. Mary's Road, professional offices, schools and a large multifamily base.",
    metaTitle: "Locksmith St. Vital Winnipeg | Commercial & Multifamily Service",
    metaDescription:
      "Commercial locksmith serving St. Vital, Winnipeg. Retail and office security, apartment and condo rekeys, school hardware, access control and 24/7 emergency lockouts.",
    intro: [
      "St. Vital mixes strip-mall retail along St. Mary's Road with professional offices, schools and one of the city's larger apartment and condo populations. That means our work here swings between storefront hardware, clinic access control and month-end suite turnover batches.",
      "For multifamily buildings in the area we hold key records on file, so a suite rekey request is a phone call rather than a site survey followed by a return visit.",
    ],
    landmarks: [
      "St. Vital Centre",
      "St. Mary's Road corridor",
      "Dakota Street and Bishop Grandin Boulevard",
      "Fort Garry industrial fringe",
    ],
    commonWork: [
      "Apartment and condo suite rekeys and fob systems",
      "Strip-mall retail storefront hardware",
      "School and daycare classroom hardware",
      "Professional office master key systems",
    ],
    responseTime: "Typically 25–35 minutes",
    nearby: ["fort-garry", "the-forks-st-boniface", "transcona"],
  },
  {
    slug: "fort-garry",
    name: "Fort Garry & Waverley West",
    type: "winnipeg",
    region: "Winnipeg",
    summary:
      "University-adjacent institutional work, research facilities, and fast-growing south-end commercial.",
    metaTitle: "Locksmith Fort Garry Winnipeg | Institutional & Commercial Security",
    metaDescription:
      "Commercial locksmith for Fort Garry and Waverley West, Winnipeg. Campus and research facility security, master key systems, access control and 24/7 emergency service.",
    intro: [
      "Fort Garry's security profile is shaped by the University of Manitoba and the research and institutional facilities around it — campus master key hierarchies, laboratory and equipment security, and access control that has to accommodate students, faculty, contractors and after-hours researchers on different schedules.",
      "South through Waverley West, the commercial base is newer and growing quickly, so we do a steady volume of new-build hardware supply, construction keying and handover work alongside the institutional side.",
    ],
    landmarks: [
      "University of Manitoba Fort Garry campus",
      "Pembina Highway corridor",
      "Kenaston Boulevard south / Seasons of Tuxedo",
      "Waverley West and Bridgwater commercial centres",
    ],
    commonWork: [
      "Campus and institutional master key systems",
      "Laboratory and research equipment security",
      "New-build hardware supply and construction keying",
      "Access control for mixed staff and student populations",
    ],
    responseTime: "Typically 25–35 minutes",
    nearby: ["st-vital", "polo-park-tuxedo", "charleswood"],
  },
  {
    slug: "transcona",
    name: "Transcona",
    type: "winnipeg",
    region: "Winnipeg",
    summary:
      "Rail and industrial heritage, main-street retail and a growing east-end commercial base.",
    metaTitle: "Locksmith Transcona Winnipeg | Commercial & Industrial Service",
    metaDescription:
      "Commercial locksmith serving Transcona, Winnipeg. Industrial and yard security, main-street retail hardware, access control and 24/7 emergency lockout response.",
    intro: [
      "Transcona's rail and industrial base gives it a different mix from most of the city — yard gates, shop doors, tool cribs and equipment security alongside the main-street retail on Regent Avenue.",
      "Industrial work here means hardware that survives cold, dust and heavy handling, and perimeter security that resists a bolt cutter. We specify accordingly rather than fitting hardware that will be replaced next winter.",
    ],
    landmarks: [
      "Regent Avenue commercial corridor",
      "Transcona rail yards and shops",
      "Plessis Road industrial area",
      "Kildare Avenue",
    ],
    commonWork: [
      "Yard gate, padlock and perimeter security",
      "Industrial shop door and hardware repair",
      "Tool crib and parts cage access control",
      "Main-street retail rekeys and storefront hardware",
    ],
    responseTime: "Typically 30–40 minutes",
    nearby: ["east-kildonan", "st-vital", "inkster-industrial-park"],
  },
  {
    slug: "east-kildonan",
    name: "East & North Kildonan",
    type: "winnipeg",
    region: "Winnipeg",
    summary:
      "Henderson Highway retail, medical and dental practices, churches and a substantial apartment stock.",
    metaTitle: "Locksmith East Kildonan Winnipeg | Commercial Locksmith Service",
    metaDescription:
      "Commercial locksmith for East and North Kildonan, Winnipeg. Retail, clinic and church security, apartment rekeys, access control and 24/7 emergency lockouts.",
    intro: [
      "The Kildonans run on the Henderson Highway commercial strip — independent retail, medical and dental practices, restaurants, churches and community organisations, with apartment blocks filling in between.",
      "It is a neighbourhood of smaller operators, so our work here leans toward practical, affordable answers: rekeys rather than replacements, phased upgrades, and honest advice about which doors genuinely justify the spend.",
    ],
    landmarks: [
      "Henderson Highway corridor",
      "Kildonan Place",
      "Munroe Avenue and Talbot Avenue",
      "Chief Peguis Trail crossings",
    ],
    commonWork: [
      "Independent retail and restaurant rekeys",
      "Medical and dental clinic records security",
      "Church and community hall key control",
      "Apartment suite and common-area access",
    ],
    responseTime: "Typically 25–35 minutes",
    nearby: ["transcona", "north-end-point-douglas", "st-vital"],
  },
  {
    slug: "inkster-industrial-park",
    name: "Inkster Industrial Park & Brookside",
    type: "winnipeg",
    region: "Winnipeg",
    summary:
      "Warehousing, distribution and manufacturing — perimeter security, dock doors and shift-based access.",
    metaTitle: "Industrial Locksmith Inkster Winnipeg | Warehouse Security",
    metaDescription:
      "Industrial locksmith for Inkster Industrial Park and northwest Winnipeg. Warehouse and dock security, yard gates, high-security padlocks, access control and 24/7 emergency service.",
    intro: [
      "Inkster Industrial Park is warehousing, distribution and manufacturing at scale, and the security problems are the ones that come with a fenced yard: gates, dock doors, man doors beside overheads, trailer padlocks and a workforce running multiple shifts.",
      "We secure the perimeter with hardware rated for Manitoba weather and real-world abuse, and we schedule around production so a door is never out of service while your forklifts need it.",
    ],
    landmarks: [
      "Inkster Boulevard industrial corridor",
      "Brookside Boulevard",
      "CentrePort Canada lands",
      "Route 90 / Oak Point Highway",
    ],
    commonWork: [
      "Yard gates, high-security padlocks and hasps",
      "Dock and overhead door man-door hardware",
      "Shift-scheduled access control credentials",
      "Emergency response for 24-hour operations",
    ],
    responseTime: "Typically 30–40 minutes",
    nearby: ["north-end-point-douglas", "st-james-airport", "transcona"],
  },
  {
    slug: "north-end-point-douglas",
    name: "North End & Point Douglas",
    type: "winnipeg",
    region: "Winnipeg",
    summary:
      "Light industrial, wholesale, non-profits and community organisations with real security exposure.",
    metaTitle: "Locksmith North End Winnipeg | Commercial & Non-Profit Security",
    metaDescription:
      "Commercial locksmith serving Winnipeg's North End and Point Douglas. Break-in repair, reinforced hardware, non-profit key control, access control and 24/7 emergency response.",
    intro: [
      "The North End and Point Douglas carry a mix of light industrial, wholesale, warehousing and a dense concentration of non-profits and community organisations — and a break-in exposure that means door reinforcement is not a theoretical exercise here.",
      "Our work in the area weights heavily toward hardening: reinforced frames, wrap-around plates, high-security cylinders on perimeter doors, and fast emergency response when a door has already been forced.",
    ],
    landmarks: [
      "Main Street north corridor",
      "Selkirk Avenue",
      "Point Douglas industrial area",
      "McPhillips Street",
    ],
    commonWork: [
      "Break-in damage repair and door reinforcement",
      "High-security perimeter cylinders",
      "Non-profit and community organisation key control",
      "Wholesale and light industrial security",
    ],
    responseTime: "Typically 20–30 minutes",
    nearby: ["exchange-district", "inkster-industrial-park", "east-kildonan"],
  },
  {
    slug: "charleswood",
    name: "Charleswood & Headingley",
    type: "winnipeg",
    region: "Winnipeg",
    summary:
      "West-end commercial, professional services and the light industrial base running out toward Headingley.",
    metaTitle: "Locksmith Charleswood & Headingley | Commercial Locksmith Winnipeg",
    metaDescription:
      "Commercial locksmith for Charleswood and Headingley. Retail and professional office security, rural commercial and industrial service, access control and 24/7 emergency response.",
    intro: [
      "Charleswood's commercial base runs along Roblin Boulevard and continues west into Headingley, where the properties get larger and the mix shifts toward light industrial, equipment yards and rural commercial.",
      "Headingley and the surrounding RM are inside our standard service area, not a special trip. Response times run slightly longer than the city core, and we give you a realistic window rather than an optimistic one.",
    ],
    landmarks: [
      "Roblin Boulevard corridor",
      "Headingley commercial strip along the Trans-Canada",
      "Assiniboine Park area",
      "Perimeter Highway west",
    ],
    commonWork: [
      "Retail and professional office hardware",
      "Rural commercial and equipment yard security",
      "Access control for small multi-tenant buildings",
      "Emergency lockouts beyond the Perimeter",
    ],
    responseTime: "Typically 30–45 minutes",
    nearby: ["polo-park-tuxedo", "st-james-airport", "fort-garry"],
  },
  {
    slug: "osborne-village",
    name: "Osborne Village & Corydon",
    type: "winnipeg",
    region: "Winnipeg",
    summary:
      "Restaurant and bar density, boutique retail and mixed-use buildings with residential above commercial.",
    metaTitle: "Locksmith Osborne Village & Corydon Winnipeg | Restaurant Security",
    metaDescription:
      "Commercial locksmith for Osborne Village and Corydon Avenue, Winnipeg. Restaurant and bar security, boutique retail hardware, mixed-use access control and 24/7 emergency service.",
    intro: [
      "Osborne Village and Corydon carry the city's densest concentration of restaurants and bars, mostly in mixed-use buildings with apartments above the commercial space. That combination creates its own problems: shared entrances, residential and commercial access on one stair, back doors onto shared alleys and late-night operating hours.",
      "We work these streets constantly and know how to separate residential and commercial access cleanly, control an alley door without hobbling a kitchen, and schedule work so it never lands in the middle of a Friday service.",
    ],
    landmarks: [
      "Osborne Street Village",
      "Corydon Avenue restaurant district",
      "River and Stradbrook Avenues",
      "Confusion Corner",
    ],
    commonWork: [
      "Restaurant and bar back-of-house control",
      "Mixed-use residential and commercial access separation",
      "Alley door alarms and secure hardware",
      "Boutique retail rekeys and storefront repair",
    ],
    responseTime: "Typically 20–30 minutes",
    nearby: ["downtown-winnipeg", "the-forks-st-boniface", "polo-park-tuxedo"],
  },

  // ── Manitoba regional ──────────────────────────────────────────────────────
  {
    slug: "brandon",
    name: "Brandon",
    type: "manitoba",
    region: "Westman",
    summary:
      "Manitoba's second city — retail, agricultural processing, healthcare and post-secondary facilities.",
    metaTitle: "Commercial Locksmith Brandon MB | Manitoba Lock & Safe",
    metaDescription:
      "Commercial locksmith serving Brandon, Manitoba. Master key systems, access control, safes, exit hardware and emergency service for Westman businesses and institutions.",
    intro: [
      "Brandon anchors Westman, with a commercial base spanning downtown and 18th Street retail, agricultural processing, healthcare, and post-secondary institutions. It is a full commercial locksmith market, and we serve it as one — not as an occasional out-of-town call.",
      "Scheduled work in Brandon is booked as planned visits so you get a full technician day rather than a rushed hour, and larger projects such as master key installations and access control rollouts are staged to complete in as few trips as possible.",
    ],
    landmarks: [
      "Downtown Brandon and Rosser Avenue",
      "18th Street commercial corridor",
      "Brandon University and Assiniboine College",
      "Brandon Regional Health Centre area",
    ],
    commonWork: [
      "Master key systems for institutions and multi-door facilities",
      "Access control installation and service",
      "Commercial safe sales, service and opening",
      "Exit device and closer compliance work",
    ],
    responseTime: "Scheduled service days; emergency response by arrangement",
    nearby: ["portage-la-prairie", "winkler-morden", "dauphin"],
  },
  {
    slug: "steinbach",
    name: "Steinbach & the Southeast",
    type: "manitoba",
    region: "Southeast Manitoba",
    summary:
      "Manufacturing, agricultural business and fast-growing retail through Steinbach, Niverville and Ste. Anne.",
    metaTitle: "Commercial Locksmith Steinbach MB | Southeast Manitoba Service",
    metaDescription:
      "Commercial locksmith serving Steinbach, Niverville, Ste. Anne and southeast Manitoba. Industrial security, master key systems, access control and commercial safe service.",
    intro: [
      "Southeast Manitoba is one of the province's fastest-growing commercial regions. Steinbach, Niverville, Ste. Anne and the surrounding communities carry a heavy concentration of manufacturing, agricultural business and expanding retail — and a corresponding demand for commercial-grade security that the region's size does not always attract.",
      "We cover the southeast on scheduled service days, so a Steinbach master key installation or an access control rollout gets the same attention as a downtown Winnipeg job.",
    ],
    landmarks: [
      "Steinbach Main Street and Highway 12 commercial",
      "Niverville and Ste. Anne business districts",
      "Southeast industrial and agricultural operations",
    ],
    commonWork: [
      "Manufacturing and industrial perimeter security",
      "Master key systems for multi-building operations",
      "Access control for shift-based workforces",
      "Commercial safes and cash handling",
    ],
    responseTime: "Scheduled service days; emergency response by arrangement",
    nearby: ["winkler-morden", "selkirk", "brandon"],
  },
  {
    slug: "portage-la-prairie",
    name: "Portage la Prairie",
    type: "manitoba",
    region: "Central Plains",
    summary:
      "Food processing, agricultural industry and highway commercial along the Trans-Canada corridor.",
    metaTitle: "Commercial Locksmith Portage la Prairie MB | Manitoba Lock & Safe",
    metaDescription:
      "Commercial locksmith serving Portage la Prairie, Manitoba. Food processing and industrial security, master key systems, access control and commercial safe service.",
    intro: [
      "Portage la Prairie's commercial profile is dominated by food processing and agricultural industry, plus highway commercial along the Trans-Canada. Processing facilities bring specific requirements — controlled access to production areas, sanitation-compatible hardware and shift-based credentials for a workforce that runs continuously.",
      "It is an easy run from Winnipeg and firmly inside our regular service area, whether the job is a single hardware repair or a multi-door access control installation.",
    ],
    landmarks: [
      "Trans-Canada Highway commercial corridor",
      "Saskatchewan Avenue",
      "Portage industrial park and processing facilities",
      "Southport",
    ],
    commonWork: [
      "Food processing facility access control",
      "Industrial perimeter and yard security",
      "Master key systems for multi-building sites",
      "Highway commercial and retail hardware",
    ],
    responseTime: "Scheduled service days; emergency response by arrangement",
    nearby: ["brandon", "winnipeg-metro", "dauphin"],
  },
  {
    slug: "selkirk",
    name: "Selkirk & the Interlake",
    type: "manitoba",
    region: "Interlake",
    summary:
      "Industrial, healthcare and marine commercial through Selkirk, Stonewall, Teulon and Gimli.",
    metaTitle: "Commercial Locksmith Selkirk & Interlake MB | Manitoba Lock & Safe",
    metaDescription:
      "Commercial locksmith serving Selkirk, Stonewall, Teulon, Gimli and the Interlake. Industrial and healthcare security, master key systems, access control and emergency service.",
    intro: [
      "The Interlake runs from Selkirk's industrial base north through Stonewall, Teulon and the Lake Winnipeg communities, with a commercial mix of manufacturing, healthcare, marine and seasonal tourism business.",
      "Seasonal operations get particular attention here — properties that sit empty through the shoulder season need hardware and key control designed for periods without anyone on site, which is a different problem from a building that is occupied daily.",
    ],
    landmarks: [
      "Selkirk industrial area and Manitoba Avenue",
      "Stonewall and Teulon commercial districts",
      "Gimli harbour and commercial waterfront",
      "Lake Winnipeg south basin communities",
    ],
    commonWork: [
      "Industrial and manufacturing security",
      "Seasonal and tourism property key control",
      "Healthcare and personal care home access",
      "Master key systems and rekeying",
    ],
    responseTime: "Scheduled service days; emergency response by arrangement",
    nearby: ["winnipeg-metro", "steinbach", "dauphin"],
  },
  {
    slug: "winkler-morden",
    name: "Winkler & Morden",
    type: "manitoba",
    region: "Pembina Valley",
    summary:
      "Manufacturing-heavy Pembina Valley — plants, distribution, healthcare and rapidly growing retail.",
    metaTitle: "Commercial Locksmith Winkler & Morden MB | Pembina Valley",
    metaDescription:
      "Commercial locksmith serving Winkler, Morden and the Pembina Valley. Manufacturing and distribution security, master key systems, access control and commercial safe service.",
    intro: [
      "The Pembina Valley punches well above its weight industrially. Winkler and Morden host substantial manufacturing and distribution operations alongside healthcare facilities and a retail sector growing as fast as the population.",
      "Manufacturing security here means the full package — perimeter and yard, dock doors, tool cribs, shift-scheduled credentials and audit trails on the areas where inventory shrink shows up on a balance sheet.",
    ],
    landmarks: [
      "Winkler industrial park",
      "Morden downtown and Thornhill Street",
      "Pembina Valley manufacturing corridor",
      "Boundary Trails Health Centre area",
    ],
    commonWork: [
      "Manufacturing plant access control",
      "Distribution and warehouse perimeter security",
      "Healthcare facility key systems",
      "Retail and commercial hardware",
    ],
    responseTime: "Scheduled service days; emergency response by arrangement",
    nearby: ["steinbach", "brandon", "winnipeg-metro"],
  },
  {
    slug: "dauphin",
    name: "Dauphin & the Parkland",
    type: "manitoba",
    region: "Parkland",
    summary:
      "Agricultural, retail and municipal facilities across Dauphin, Swan River and the Parkland region.",
    metaTitle: "Commercial Locksmith Dauphin MB | Parkland Region Service",
    metaDescription:
      "Commercial locksmith serving Dauphin, Swan River and Manitoba's Parkland region. Municipal, agricultural and retail security, master key systems and commercial safe service.",
    intro: [
      "The Parkland's commercial base runs on agriculture, retail, municipal facilities and regional healthcare. It is a region that rarely sees a commercial locksmith, which is exactly why its buildings so often carry undocumented key systems and hardware two decades past its service life.",
      "We schedule Parkland visits as planned service days and encourage clients to batch work — a master key installation, a set of rekeys and a round of hardware repairs completed in one trip rather than three.",
    ],
    landmarks: [
      "Dauphin Main Street and Highway 10 commercial",
      "Swan River business district",
      "Parkland municipal and recreation facilities",
      "Riding Mountain area commercial",
    ],
    commonWork: [
      "Municipal and recreation facility key systems",
      "Agricultural and commercial perimeter security",
      "Retail and hospitality hardware",
      "Commercial safe sales and service",
    ],
    responseTime: "Scheduled service days; emergency response by arrangement",
    nearby: ["brandon", "portage-la-prairie", "thompson"],
  },
  {
    slug: "thompson",
    name: "Thompson & Northern Manitoba",
    type: "manitoba",
    region: "Northern Manitoba",
    summary:
      "Mining, municipal, healthcare and remote-community facilities across the north.",
    metaTitle: "Commercial Locksmith Thompson MB | Northern Manitoba Service",
    metaDescription:
      "Commercial locksmith serving Thompson and northern Manitoba. Mining and industrial security, municipal and healthcare facilities, master key systems and project-based service visits.",
    intro: [
      "Northern Manitoba's commercial security work centres on mining and industrial operations, municipal buildings, healthcare facilities and the retail that supports them. Distance changes how the work is planned, but not the standard it is held to.",
      "Northern work is project-based. We scope thoroughly in advance, bring every part the job could require, and complete as much as possible in a single visit — because a forgotten cylinder is a far more expensive mistake in Thompson than it is on Portage Avenue.",
    ],
    landmarks: [
      "Thompson city centre and Mystery Lake Road",
      "Northern mining and industrial operations",
      "Thompson General Hospital area",
      "Regional airport and transport facilities",
    ],
    commonWork: [
      "Mining and industrial site security",
      "Municipal and healthcare facility key systems",
      "Master key design and installation",
      "Commercial safes and secure storage",
    ],
    responseTime: "Project-based scheduling; contact us to plan a visit",
    nearby: ["dauphin", "brandon", "winnipeg-metro"],
  },
  {
    slug: "winnipeg-metro",
    name: "Winnipeg Metro & Capital Region",
    type: "manitoba",
    region: "Capital Region",
    summary:
      "East and West St. Paul, Oak Bluff, Lorette, Île des Chênes, Stony Mountain and the communities ringing the Perimeter.",
    metaTitle: "Commercial Locksmith Winnipeg Capital Region | Surrounding Communities",
    metaDescription:
      "Commercial locksmith serving Winnipeg's capital region — East and West St. Paul, Oak Bluff, Lorette, Île des Chênes, Stony Mountain and surrounding communities. 24/7 emergency service.",
    intro: [
      "The communities ringing Winnipeg have grown into a serious commercial market of their own — light industrial in Oak Bluff and East St. Paul, retail and services through Lorette, Île des Chênes and Stony Mountain, and agricultural business throughout.",
      "All of it sits inside our standard emergency service area. Response times run a little longer than inside the Perimeter, and we quote you a realistic window before we dispatch rather than an optimistic one.",
    ],
    landmarks: [
      "East and West St. Paul",
      "Oak Bluff and Headingley",
      "Lorette and Île des Chênes",
      "Stony Mountain and Stonewall",
    ],
    commonWork: [
      "Light industrial and commercial perimeter security",
      "Retail and service business hardware",
      "Agricultural operation key control",
      "Emergency lockout response beyond the Perimeter",
    ],
    responseTime: "Typically 45–60 minutes",
    nearby: ["selkirk", "steinbach", "portage-la-prairie"],
  },
];

export const winnipegLocations = locations.filter((l) => l.type === "winnipeg");
export const manitobaLocations = locations.filter((l) => l.type === "manitoba");
export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
