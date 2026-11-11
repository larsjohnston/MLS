import Link from "next/link";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import {
  CtaBand,
  LinkCard,
  Section,
  SectionHeading,
  TrustBar,
} from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata = pageMeta({
  title: "Locksmith Services Winnipeg | All Services",
  description:
    "Locksmith services in Winnipeg and surrounding communities — locks and keys, rekeying, master key systems, access control, automatic doors, door repair, safes, plus residential and automotive service.",
  path: "/services",
});

const crumbs = [{ href: "/services", label: "Services" }];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Our services"
        title="Locksmith services in Winnipeg and surrounding communities"
        blurb="Business, home and auto — one standard. Every job is scoped honestly, priced before it starts and documented when it finishes."
        crumbs={crumbs}
        badges={[
          "Mobile service",
          "Grade 1 commercial hardware",
          "Licensed, bonded & insured",
        ]}
      />
      <TrustBar />

      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Pick the service you need"
          blurb="Not sure which applies? Call us and describe the door — it is usually a thirty-second conversation."
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

      <Section tone="light">
        <SectionHeading
          eyebrow="By sector"
          title="Or start from your industry"
          blurb="Each sector page covers the specific constraints, hardware and scheduling that come with it."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {industries.map((i) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-silver-300 bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 transition hover:border-blue-600 hover:text-blue-600"
            >
              <Icon name={i.icon} className="h-4 w-4 text-blue-600" />
              {i.shortName}
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
