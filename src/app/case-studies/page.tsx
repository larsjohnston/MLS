import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import { site } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { CtaBand, Section, SectionHeading, TrustBar } from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata = pageMeta({
  title: "Case Studies | Commercial Locksmith Winnipeg",
  description:
    "How Manitoba Lock & Safe supports major Winnipeg organisations — airport, convention centre, commercial real estate and national restaurant groups — with commercial locksmith services.",
  path: "/case-studies",
});

const crumbs = [{ href: "/case-studies", label: "Case Studies" }];

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Case studies"
        title="Work at the scale Manitoba's largest facilities require"
        blurb="Airports, convention centres, national restaurant groups and commercial real estate portfolios. Different buildings, same standard."
        crumbs={crumbs}
        badges={[`Since ${site.founded}`, "Mobile service", "Winnipeg & area"]}
      />
      <TrustBar />

      <Section>
        <SectionHeading
          eyebrow="Selected clients"
          title="Who we work with and what we do for them"
          blurb="Each case study covers the security challenge the organisation faces and the scope of work we deliver."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="group flex flex-col rounded-xl border border-silver-300 bg-white p-7 transition hover:-translate-y-0.5 hover:border-blue-600 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                  {c.sector}
                </span>
                <span className="text-xs text-silver-500">· {c.location}</span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-extrabold text-navy-900">
                {c.client}
              </h2>
              <p className="mt-3 flex-1 leading-relaxed text-silver-500">
                {c.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold uppercase tracking-wide text-blue-600">
                Read the case study
                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Want the same standard on your building?"
        blurb="Request a commercial security assessment. We walk the site, list what is non-compliant or failing, and give you a prioritised plan with prices."
      />
    </>
  );
}
