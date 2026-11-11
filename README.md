# Manitoba Lock & Safe — manitobalock.com

Commercial locksmith website for Manitoba Lock & Safe, built with Next.js 16
(App Router), TypeScript and Tailwind CSS v4. Every page is statically generated
and optimised for locksmith search in Winnipeg and surrounding communities.

---

## ⚠️ Before you launch — required edits

These items must be handled before the site goes public.

### 1. Contact details — `src/data/site.ts`

Every phone number, email and hours line on the site reads from this one file.
These are now the real details: phone 431.485.4498, max@manitobalock.com,
Monday–Friday 8–5, founded 1984, mobile-only (`address.hasStorefront: false`,
so no street address or map is shown anywhere).

Still to supply:

| Field | Status |
| --- | --- |
| `media.vanPhoto` | Empty — the homepage draws a placeholder van until a photo is added to `public/` |
| `media.teamPhoto` | Empty — placeholder box on the About page |
| `social` | Empty — add real profile URLs |
| Logo | Vector stand-in in `src/components/Logo.tsx` |

The site makes **no** 24/7, after-hours, emergency-dispatch or response-time
claims. If hours change, update `hours` in `site.ts` and the hours FAQ in
`src/data/faqs.ts`.

### 2. Quote form destination — `src/data/site.ts`

`formEndpoint` is empty. With it empty, the form opens the visitor's email
client pre-filled to `site.email`, so it works on day one but is not ideal.

For a proper backend, create a [Formspree](https://formspree.io) form (free tier
is fine) and paste the endpoint URL into `formEndpoint`. Any endpoint that
accepts a JSON `POST` works.

### 3. Testimonials — `src/data/testimonials.ts`

**Currently placeholder.** The homepage testimonials section is hidden until
you fix this. Replace every entry with real, attributable quotes (Google
reviews are ideal), delete any you cannot source, then set
`testimonialsArePlaceholder = false` to show the section.

Publishing invented reviews is a trust problem and, under Canada's Competition
Act, a legal one.

### 4. Case studies — `src/data/case-studies.ts`

These name real organisations. Two things are required before publishing:

1. **Written permission** from each named client. Client *names* are used
   deliberately — do not add client logos without a signed brand-use approval.
2. **Factual sign-off.** The copy is written at the level of service categories
   and general scope, with no invented dates, dollar figures, door counts or
   incident details. Someone who worked each account should confirm the `scope`
   and `outcome` text, and add specifics where they can be substantiated.

Anything that cannot be verified should be cut, not softened.

### 5. Credentials — `src/data/site.ts`

The site advertises: bonded & insured, Manitoba security business licence, ALOA
membership (CRL/CPL/CJIL), Manitoba Locksmith Association, WCB in good standing,
BBB accreditation, and factory certification for Medeco / Mul-T-Lock /
ASSA Abloy / Schlage. Confirm each is current and remove any that is not.

### 6. Careers listings — `src/app/careers/page.tsx`

Three representative roles are listed. Remove any position you are not actively
hiring for, and adjust the benefits list to match what you actually offer.

### 7. Team photo and other photography

The About page has a team photo slot that currently renders a dashed placeholder
box. Add the file to `public/` and set `media.teamPhoto` in `src/data/site.ts`
(e.g. `"/team.jpg"`) — the placeholder disappears and the real photo takes its
place, with alt text from `media.teamPhotoAlt`.

The rest of the site is built on typography, colour and iconography, so it looks
complete without photographs. Real photos of technicians, vehicles and completed
work would strengthen it further. Anything you add needs descriptive alt text.

### 8. Google Analytics

Create a GA4 property, then set `NEXT_PUBLIC_GA_ID` (e.g. `G-XXXXXXXXXX`) in
Vercel → Settings → Environment Variables. With the variable unset, no analytics
scripts load at all — see `.env.example`.

Set up **`/thank-you` as a conversion goal** in GA4. The quote form redirects
there on successful submission, which is exactly what makes lead tracking
possible.

`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` is also supported for Search Console HTML
tag verification.

### 9. Privacy policy review

`/privacy` describes what the site as built actually does with visitor data, in
line with PIPEDA. It is not legal advice — have a lawyer review it, bump the
`LAST_UPDATED` constant in `src/app/privacy/page.tsx`, and update it whenever you
add a tool that touches visitor data (chat widget, booking tool, ad pixel, call
tracking).

### 10. Map

The business is mobile-only, so the map and directions links are switched off.
They return automatically if `address.hasStorefront` is set to `true`.

### 11. Logo

`src/components/Logo.tsx` contains a vector recreation of the shield mark. If
you have the original artwork, add it at `public/logo.svg` and swap the
`ShieldMark` component for a `next/image`. The favicon is `src/app/icon.svg` and
the social share image is `src/app/opengraph-image.tsx` — both should be updated
to match if the mark changes.

---

## Site structure

| Route | Pages | Notes |
| --- | --- | --- |
| `/` | 1 | Hero, quote form, "I manage…" tiles, on-site service van, services, 3-step process, credentials, clients, industries, service areas, case studies, testimonials, FAQ, blog |
| `/services` + `/services/[slug]` | 16 | 15 service pages (commercial, residential, automotive), each with offerings, signs, process, FAQs |
| `/industries` + `/industries/[slug]` | 12 | 11 sectors |
| `/service-areas` + `/service-areas/[slug]` | 18 | 13 Winnipeg areas + 4 surrounding communities |
| `/case-studies` + `/case-studies/[slug]` | 6 | 5 named clients |
| `/blog` + `/blog/[slug]` | 7 | 6 long-form articles |
| `/about`, `/contact`, `/faq`, `/careers` | 4 | |
| `/thank-you` | 1 | Post-submission conversion page (noindex) |
| `/privacy` | 1 | PIPEDA-aligned privacy policy |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `404` | 4 | Generated |

### Pre-launch checklist coverage

| # | Item | Status |
| --- | --- | --- |
| 1 | Custom 404 page | ✅ `src/app/not-found.tsx`, with popular-service links |
| 2 | CTA above the fold | ✅ Call + quote buttons and the form itself, all above the fold |
| 3 | Internal links | ✅ Services ↔ industries ↔ locations ↔ case studies, cross-linked throughout |
| 4 | Thank-you page | ✅ `/thank-you`, noindex, form redirects on success |
| 5 | Breadcrumbs | ✅ Visible on every inner page + `BreadcrumbList` schema |
| 6 | Case studies | ✅ 5 — pending client sign-off (see item 4 above) |
| 7 | 5 FAQs | ✅ 26 across 6 categories, plus FAQs on every service and industry page |
| 8 | Response time promise | ➖ Removed — hours are Mon–Fri 8–5, no response-time claims |
| 9 | Sticky mobile CTA | ✅ Fixed bottom call/quote bar under 640px |
| 10 | robots.txt | ✅ Generated, references the sitemap |
| 11 | Unique page titles | ✅ Every page, verified across all 72 |
| 12 | Meta descriptions | ✅ Every page, hand-written |
| 13 | Social share image | ✅ Generated 1200×630 OG image, on every page |
| 14 | Maps + directions | ✅ Map embed and directions link on contact, directions in footer |
| 15 | Real reviews | ⚠️ **Yours to supply** — placeholders flagged on-site |
| 16 | Alt text on images | ✅ No raster images yet; SVGs labelled, team photo slot has alt text |
| 17 | Local schema | ✅ `Locksmith`/`LocalBusiness` + `Service`, `FAQPage`, `BlogPosting` |
| 18 | Privacy policy | ✅ `/privacy` — needs legal review |
| 19 | Google Analytics | ✅ Wired, needs `NEXT_PUBLIC_GA_ID` |
| 20 | Team photo | ⚠️ **Yours to supply** — slot built, placeholder shown until then |

## SEO implementation

- **Metadata** — unique title, description and canonical URL on every page,
  plus Open Graph and Twitter card tags.
- **Structured data (JSON-LD)**
  - `Locksmith` / `LocalBusiness` site-wide, including `areaServed` for all 17
    locations, `openingHoursSpecification` (Mon–Fri 8–5), `hasOfferCatalog` listing all
    11 services, and `geo` coordinates.
  - `Service` schema on each service and location page.
  - `FAQPage` on the homepage, FAQ page, every service page and every industry
    page — eligible for FAQ rich results.
  - `BlogPosting` on articles, `BreadcrumbList` on every inner page.
- **Local SEO** — Winnipeg-targeted headings and copy, 13 neighbourhood pages and
  9 regional Manitoba pages, each with genuinely distinct content (no
  boilerplate spinning), local landmarks and realistic response times.
- **Internal linking** — services ↔ industries ↔ locations ↔ case studies are
  cross-linked throughout.
- **Sitemap and robots** generated at build time from the content data.

### Not covered by this site

Google Business Profile is the single biggest local ranking factor for a
locksmith and is separate from the website. Claim and complete it, keep the
name/address/phone identical to `src/data/site.ts`, and add the profile URL to
`site.social.google`.

---

## Content architecture

All copy lives in typed data modules under `src/data/`, so text changes never
require touching a component:

| File | Contents |
| --- | --- |
| `site.ts` | Contact details, credentials, brands, named clients, stats |
| `services.ts` | 11 services — intro, offerings, signs, process, FAQs |
| `industries.ts` | 11 sectors — intro, challenges, linked services, FAQs |
| `locations.ts` | 22 areas — intro, landmarks, common work, response times |
| `case-studies.ts` | 5 client engagements |
| `posts.ts` | 6 articles, structured as sections |
| `faqs.ts` | 26 FAQs across 6 categories |
| `testimonials.ts` | Placeholder reviews |

Adding a service, industry or location is a matter of appending an object to the
relevant array — the page, navigation entry, footer link, sitemap entry and
internal links all generate automatically.

## Design system

Palette follows the company logo (shared with the Winnipeg Jets), defined as
Tailwind theme tokens in `src/app/globals.css`:

| Token | Hex |
| --- | --- |
| `navy-900` | `#041E42` |
| `blue-600` | `#004C97` |
| `red-600` | `#AC162C` |
| `silver-500` | `#8E9090` |

Typography is Barlow Condensed (display/headings) and Inter (body).

Click-to-call is the primary action throughout: red button in the header, a
fixed bottom bar on mobile, and a call CTA in every section band. The quote form
is the secondary action.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npx next start   # serve the production build
npx eslint .     # lint
```

## Deploying to Vercel

1. Push this branch and import the repository at
   [vercel.com/new](https://vercel.com/new). Framework detection needs no
   configuration.
2. Add `manitobalock.com` and `www.manitobalock.com` under **Settings → Domains**
   and point the registrar's DNS at Vercel.
3. Confirm `site.url` in `src/data/site.ts` matches the production domain — it
   drives canonical URLs, the sitemap and the structured data.
4. After launch, submit `https://manitobalock.com/sitemap.xml` in Google Search
   Console.
