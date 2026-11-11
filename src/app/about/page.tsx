import Link from "next/link";
import { site, clients, brands } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { TeamPhoto } from "@/components/TeamPhoto";
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
  title: "About Us | Winnipeg Locksmiths Since 1984",
  description:
    "Manitoba Lock & Safe has served Winnipeg and surrounding communities since 1984. Licensed, bonded and insured mobile locksmiths for businesses, homes and vehicles.",
  path: "/about",
});

const crumbs = [{ href: "/about", label: "About" }];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow={`Since ${site.founded}`}
        title="Winnipeg's locksmiths since 1984"
        blurb="A mobile locksmith service for businesses, homes and vehicles — we bring the workshop to your door, and we do the work properly the first time."
        crumbs={crumbs}
        badges={[`Founded ${site.founded}`, "Mobile service", "Winnipeg & area"]}
      />
      <TrustBar />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="Our story" title="Protecting people and property since 1984" />
            <div className="mt-6">
              <Prose
                paragraphs={[
                  `Manitoba Lock & Safe has been looking after locks, doors, keys and safes since ${site.founded}. We are a mobile service: there is no shop to find and no counter to queue at. A technician comes to your business, your home or your vehicle with the tools and hardware on the van.`,
                  "Much of our work is commercial — master key systems, access control, exit hardware, automatic doors, door and frame repair, safes — so our vans carry Grade 1 hardware, closers and commercial cylinders alongside the deadbolts and keys a home needs. When you describe a door over the phone, we aim to have the right parts on the van before it leaves.",
                  "The aim is simple: fix the problem on the first visit where we can, and think past the immediate call to the key system, the paperwork and the next few years of the building's life.",
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
                  "Price before the work. You approve a number before a tool comes out.",
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
                  ["Focus", "Business, home & auto"],
                  ["Based in", `${site.address.locality}, ${site.address.region} (mobile only)`],
                  ["Coverage", site.serviceArea.scope],
                  ["Hours", site.hours.office],
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
        <div className="mx-auto mt-10 max-w-4xl">
          <TeamPhoto />
        </div>
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
