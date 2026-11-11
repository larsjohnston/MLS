import Link from "next/link";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { winnipegLocations, manitobaLocations } from "@/data/locations";
import { caseStudies } from "@/data/case-studies";
import { posts } from "@/data/posts";
import { faqs } from "@/data/faqs";
import { testimonials, testimonialsArePlaceholder } from "@/data/testimonials";
import { site, clients, brands } from "@/data/site";
import { Icon } from "@/components/Icon";
import { QuoteForm } from "@/components/QuoteForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { VanPhoto } from "@/components/VanPhoto";
import {
  CallButton,
  CheckList,
  CredentialGrid,
  CtaBand,
  LinkCard,
  ProcessSteps,
  QuoteButton,
  Section,
  SectionHeading,
  StatsBar,
  TrustBar,
} from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Locksmith Winnipeg | Mobile Lock, Door & Safe Service",
  description:
    "Winnipeg's trusted locksmiths since 1984. Mobile service for businesses, homes and vehicles — locks and keys, rekeying, master key systems, access control, door repair, automatic doors and safes. Call 431.485.4498.",
  path: "/",
});

const homeFaqs = faqs.slice(0, 6);

/** "I manage…" shortcuts — send each kind of visitor to the page written for them. */
const audiences = [
  { label: "Tenants", icon: "apartment", href: "/industries/property-management", body: "Property managers and landlords" },
  { label: "Projects", icon: "construction", href: "/industries/construction-new-builds", body: "Builders and contractors" },
  { label: "Employees", icon: "office", href: "/industries/office-buildings", body: "Business owners and office managers" },
  { label: "Facilities", icon: "warehouse", href: "/industries/warehouse-industrial", body: "Facility and operations managers" },
  { label: "Communities", icon: "school", href: "/industries/education", body: "Schools, churches and non-profits" },
  { label: "My home", icon: "key", href: "/services/residential-locksmith-winnipeg", body: "Homeowners and renters" },
];

const processSteps = [
  {
    step: "Contact us",
    body: "Call or send the form. Tell us what is going on and we will book a visit or a free evaluation.",
  },
  {
    step: "Create a plan",
    body: "Together we work out what your doors, locks and keys need, and you get a written quote before any work starts.",
  },
  {
    step: "Get results",
    body: "We come to you and do the work. You feel confident knowing your people and property are protected.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="hero-texture">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.15fr_1fr] lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3.5 py-1.5 text-sm font-semibold text-blue-100">
              <Icon name="truck" className="h-4 w-4" />
              Mobile locksmith · {site.hours.short}
            </p>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              We help you protect
              <span className="block text-blue-500">your people and property</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-silver-300">
              {site.tagline}. Locks and keys, doors and frames, automatic doors,
              access control and safes — for your business, home or vehicle. We
              are a mobile service, so we come to you anywhere in Winnipeg and
              the surrounding communities.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton />
              <QuoteButton dark label="Get a free quote" />
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <StatsBar />
            </div>
          </div>

          <div className="lg:pt-4">
            <QuoteForm />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* ── I manage… ────────────────────────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="I manage…"
          title="Tell us what you look after"
          blurb="Pick the one closest to you and we will show you how we help."
          align="center"
        />
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {audiences.map((a) => (
            <li key={a.label}>
              <Link
                href={a.href}
                className="group flex h-full flex-col items-center rounded-xl border border-silver-300 bg-white px-4 py-6 text-center transition hover:-translate-y-0.5 hover:border-blue-600 hover:shadow-lg hover:shadow-navy-900/10"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-white transition group-hover:bg-blue-600">
                  <Icon name={a.icon} className="h-8 w-8" />
                </span>
                <span className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-navy-900">
                  {a.label}
                </span>
                <span className="mt-1 text-xs leading-snug text-silver-500">{a.body}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── On-site service ──────────────────────────────────────────────── */}
      <Section tone="light">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <VanPhoto />
          <div>
            <SectionHeading
              eyebrow="On-site service"
              title="No shop to find. We come to you."
              blurb={`Manitoba Lock & Safe is fully mobile. A technician arrives at your business, home or vehicle with the tools and hardware on the van — ${site.hours.office}.`}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <QuoteButton label="Schedule now" />
              <CallButton />
            </div>
          </div>
        </div>
      </Section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Our services"
          title="Locks, doors, keys and safes — business, home and auto"
          blurb="Our vans carry the hardware your doors actually use, and our technicians have very likely seen your problem before."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <LinkCard
              key={s.slug}
              href={`/services/${s.slug}`}
              icon={s.icon}
              accent={s.emergency ? "red" : "blue"}
              title={s.name}
              body={s.summary}
            />
          ))}
        </div>
      </Section>

      {/* ── Our process ──────────────────────────────────────────────────── */}
      <Section tone="light">
        <SectionHeading eyebrow="Our process" title="Three simple steps" align="center" />
        <div className="mt-10">
          <ProcessSteps steps={processSteps} />
        </div>
        <div className="mt-8 flex justify-center">
          <QuoteButton label="Schedule now" />
        </div>
      </Section>

      {/* ── Why us ───────────────────────────────────────────────────────── */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why Manitoba Lock & Safe"
              title="Done properly, and written down."
              blurb="Anyone can open a door. What keeps clients with us is that the work is specified properly, recorded properly and still makes sense three managers from now."
            />
            <div className="mt-8">
              <CheckList
                items={[
                  "Fully mobile — we come to your business, home or vehicle, Monday to Friday",
                  "Non-destructive entry first on every lockout, so your existing hardware survives the call",
                  "Written key schedules and system charts you own, not records held hostage by a vendor",
                  "Well-stocked vans, so most jobs finish on the first visit",
                  "Honest specification — we will tell you when a door does not need the expensive answer",
                  "One point of contact across every site in your portfolio",
                ]}
              />
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-display text-base font-bold uppercase tracking-wide text-blue-600 hover:text-navy-900"
              >
                More about our team
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-navy-900">
              Credentials you can verify
            </h3>
            <p className="mt-2 text-silver-500">
              Certificates, clearance letters and record checks are supplied on
              request — routinely, for tenders and vendor onboarding.
            </p>
            <div className="mt-6">
              <CredentialGrid />
            </div>
          </div>
        </div>
      </Section>

      {/* ── Clients ──────────────────────────────────────────────────────── */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Trusted by"
          title="Manitoba organisations that call us first"
          align="center"
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {clients.map((c) => (
            <li
              key={c}
              className="flex items-center justify-center rounded-xl border border-silver-300 bg-white px-4 py-6 text-center font-display text-lg font-bold leading-tight text-navy-900"
            >
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-sm text-silver-500">
          <Link href="/case-studies" className="font-semibold text-blue-600 hover:underline">
            Read the case studies →
          </Link>
        </p>
      </Section>

      {/* ── Industries ───────────────────────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Industries we serve"
          title="Security shaped around how your sector actually operates"
          blurb="A restaurant, a warehouse and a medical clinic have almost nothing in common except a locked door. We work to the constraints each one brings."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="group flex items-start gap-4 rounded-xl border border-silver-300 bg-white p-5 transition hover:border-blue-600 hover:shadow-md"
            >
              <Icon name={i.icon} className="mt-0.5 h-7 w-7 shrink-0 text-blue-600" />
              <span>
                <span className="block font-display text-base font-bold text-navy-900">
                  {i.name}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-silver-500">
                  {i.summary}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── Service areas ────────────────────────────────────────────────── */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Service areas"
          title="Winnipeg and surrounding communities"
          blurb="We are mobile, so our service area is wherever the vans go — every Winnipeg neighbourhood and the communities around the city."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-navy-900">
              Winnipeg
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {winnipegLocations.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/service-areas/${l.slug}`}
                    className="flex items-center gap-2 text-sm text-navy-800 hover:text-blue-600"
                  >
                    <Icon name="pin" className="h-4 w-4 shrink-0 text-red-600" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-navy-900">
              Surrounding communities
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {manitobaLocations.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/service-areas/${l.slug}`}
                    className="flex items-center gap-2 text-sm text-navy-800 hover:text-blue-600"
                  >
                    <Icon name="pin" className="h-4 w-4 shrink-0 text-blue-600" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Case studies ─────────────────────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Case studies"
          title="Work we have done for Winnipeg organisations"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="group flex flex-col rounded-xl border border-silver-300 bg-white p-6 transition hover:border-blue-600 hover:shadow-lg"
            >
              <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                {c.sector}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-navy-900">
                {c.client}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-silver-500">
                {c.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600">
                Read the case study
                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      {/* Hidden until real reviews replace the placeholders in src/data/testimonials.ts */}
      {!testimonialsArePlaceholder && (
      <Section>
        <SectionHeading eyebrow="What clients say" title="In their words" align="center" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.quote}
              className="flex flex-col rounded-xl border border-silver-300 bg-white p-6"
            >
              <div className="flex gap-0.5 text-red-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-navy-800/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 border-t border-silver-300 pt-4 text-sm">
                <span className="font-bold text-navy-900">{t.name}</span>
                <span className="block text-silver-500">
                  {t.role}, {t.org} · {t.industry}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
      )}

      {/* ── Brands ───────────────────────────────────────────────────────── */}
      <Section tone="light" className="!py-12">
        <p className="text-center font-display text-sm font-bold uppercase tracking-[0.2em] text-silver-500">
          We work on the hardware you already own
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {brands.map((b) => (
            <li key={b} className="font-display text-lg font-bold text-navy-900/60">
              {b}
            </li>
          ))}
        </ul>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading
            eyebrow="Common questions"
            title="Straight answers before you call"
            blurb="More detail on pricing, key control, access control and coverage is on the full FAQ."
          />
          <div>
            <FaqAccordion items={homeFaqs} />
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-2 font-display text-base font-bold uppercase tracking-wide text-blue-600 hover:text-navy-900"
            >
              Read all FAQs
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ── Blog ─────────────────────────────────────────────────────────── */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Resources"
          title="Practical guidance from the field"
          blurb="What we have learned keeping Winnipeg's doors working — written for owners and managers, not for other locksmiths."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col rounded-xl border border-silver-300 bg-white p-6 transition hover:border-blue-600 hover:shadow-lg"
            >
              <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                {p.category} · {p.readingTime}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold leading-snug text-navy-900">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-silver-500">
                {p.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600">
                Read more
                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
