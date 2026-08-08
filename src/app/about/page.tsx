import Link from "next/link";
import { site, clients, brands } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import {
  CheckList,
  CredentialGrid,
  CtaBand,
  Prose,
  Section,
  SectionHeading,
  StatsBar,
  TrustBar,
} from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata = pageMeta({
  title: "About Us | Commercial Locksmith in Winnipeg Since 2012",
  description:
    "Manitoba Lock & Safe has served Winnipeg and Manitoba businesses since 2012. Licensed, bonded and insured commercial locksmiths with ALOA certification and 24/7 emergency dispatch.",
  path: "/about",
});

const crumbs = [{ href: "/about", label: "About" }];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow={`Since ${site.founded}`}
        title="Winnipeg's commercial locksmith"
        blurb={`${site.tagline} — and the one Manitoba's largest facilities call when the work has to be right the first time.`}
        crumbs={crumbs}
        badges={["Founded 2012", "Commercial specialists", "All of Manitoba"]}
      />
      <TrustBar />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="Our story" title="Built for commercial work, not adapted to it" />
            <div className="mt-6">
              <Prose
                paragraphs={[
                  `Manitoba Lock & Safe opened in ${site.founded} with a deliberately narrow focus: commercial locksmithing. Not car keys, not alarm monitoring, not residential deadbolts on a Saturday afternoon. Commercial doors, commercial hardware and the systems that manage who gets through them.`,
                  "That focus changes everything about how the business runs. Our trucks stock Grade 1 hardware, exit devices, closers and commercial cylinders, because that is what our calls need. Our technicians spend their days on mortise locksets, aluminium storefront and access control rather than encountering them occasionally. Our dispatchers are locksmiths, so when you describe a door over the phone, the right parts are on the truck before it leaves.",
                  "The result is a business that solves commercial problems on the first visit far more often than a general locksmith can — and one that thinks past the immediate call to the key system, the documentation and the next three years of the building's life.",
                ]}
              />
            </div>

            <h3 className="mt-12 font-display text-2xl font-bold text-navy-900">
              What we believe
            </h3>
            <div className="mt-6">
              <CheckList
                items={[
                  "Non-destructive first. Drilling a lock is a failure of technique, not a first resort.",
                  "Specify honestly. If a door does not need the expensive answer, we will say so — and we will explain which doors do.",
                  "Document everything. A key system nobody has written down is a liability waiting for the day the person who understood it is unavailable.",
                  "Price before the work. You approve a number before a tool comes out, including on emergency calls.",
                  "Fix the cause. Most 'broken locks' are doors, frames or closers. Replacing the lockset just books the return visit.",
                ]}
              />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-silver-300 bg-silver-100 p-6">
              <h3 className="font-display text-lg font-bold text-navy-900">
                At a glance
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ["Founded", String(site.founded)],
                  ["Focus", "Commercial locksmithing"],
                  ["Head office", `${site.address.locality}, ${site.address.region}`],
                  ["Coverage", site.serviceArea.scope],
                  ["Emergency", site.hours.emergency],
                  ["Office hours", site.hours.office],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-silver-300 pb-3">
                    <dt className="font-semibold text-navy-900">{k}</dt>
                    <dd className="text-right text-silver-500">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl border border-silver-300 bg-white p-6">
              <h3 className="font-display text-lg font-bold text-navy-900">
                Certified on
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {brands.map((b) => (
                  <li
                    key={b}
                    className="rounded-full bg-silver-100 px-3 py-1.5 text-xs font-semibold text-navy-900"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <section className="hero-texture">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionHeading
            eyebrow="By the numbers"
            title="What that focus has produced"
            dark
          />
          <div className="mt-10">
            <StatsBar />
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Credentials"
          title="Licensed, certified and verifiable"
          blurb="We supply certificates, clearance letters and record checks as a matter of routine — for tenders, vendor onboarding and property-management requirements."
        />
        <div className="mt-10">
          <CredentialGrid />
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Our team"
          title="Who turns up at your door"
          blurb="Every technician is a licensed, record-checked employee in a marked vehicle. We do not subcontract commercial work to unknown third parties."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "award",
              title: "Certified technicians",
              body: "ALOA certification including CRL, CPL and CJIL designations, with ongoing manufacturer training on the platforms we install.",
            },
            {
              icon: "shield",
              title: "Screened and cleared",
              body: "Current criminal record checks on every technician, plus child abuse registry checks for anyone attending schools or childcare settings.",
            },
            {
              icon: "truck",
              title: "Stocked trucks",
              body: "Commercial hardware, cylinders, closers and exit devices carried on board, so the majority of jobs finish on the first visit.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-silver-300 bg-white p-6">
              <Icon name={c.icon} className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-silver-500">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-silver-500">
          Interested in joining us?{" "}
          <Link href="/careers" className="font-semibold text-blue-600 hover:underline">
            See open positions →
          </Link>
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Trusted by"
          title="Organisations that rely on us"
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
        <p className="mt-6 text-center">
          <Link href="/case-studies" className="font-semibold text-blue-600 hover:underline">
            Read the case studies →
          </Link>
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
