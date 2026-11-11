import { industries } from "@/data/industries";
import { site } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { CtaBand, LinkCard, Section, SectionHeading, TrustBar } from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata = pageMeta({
  title: "Industries We Serve | Commercial Locksmith Winnipeg",
  description:
    "Commercial locksmith services for property management, multifamily, retail, offices, warehouses, restaurants, healthcare, education, government, non-profits and construction across Winnipeg and Manitoba.",
  path: "/industries",
});

const crumbs = [{ href: "/industries", label: "Industries" }];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Industries we serve"
        title="Commercial security built around your sector"
        blurb="Eleven sectors, each with its own constraints — regulatory requirements, operating hours, turnover patterns and the doors that matter most. We work to yours."
        crumbs={crumbs}
        badges={["Winnipeg & surrounding area", "Mobile service", `Since ${site.founded}`]}
      />
      <TrustBar />

      <Section>
        <SectionHeading
          eyebrow="Sector expertise"
          title="Find your industry"
          blurb="Every page covers the security problems specific to that sector and the services that solve them."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <LinkCard
              key={i.slug}
              href={`/industries/${i.slug}`}
              icon={i.icon}
              title={i.name}
              body={i.summary}
            />
          ))}
        </div>
      </Section>

      <CtaBand
        title="Not sure where your business fits?"
        blurb="Call and describe your operation. We have almost certainly worked on a building like yours, and we will tell you what usually matters most."
      />
    </>
  );
}
