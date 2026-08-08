import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustry, industries } from "@/data/industries";
import { getService } from "@/data/services";
import { caseStudies } from "@/data/case-studies";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { QuoteForm } from "@/components/QuoteForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  CtaBand,
  LinkCard,
  Prose,
  Section,
  SectionHeading,
  TrustBar,
} from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMeta({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const crumbs = [
    { href: "/industries", label: "Industries" },
    { href: `/industries/${industry.slug}`, label: industry.shortName },
  ];

  const linkedServices = industry.services
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relatedCases = caseStudies.filter((c) =>
    c.services.some((s) => industry.services.includes(s)),
  );

  return (
    <>
      <JsonLd data={[faqSchema(industry.faqs), breadcrumbSchema(crumbs)]} />

      <PageHero
        eyebrow="Industries we serve"
        title={industry.heroHeading}
        blurb={industry.summary}
        crumbs={crumbs}
        badges={["Winnipeg & all of Manitoba", "24/7 emergency response", "Documented key control"]}
      />
      <TrustBar />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              Locksmith services for {industry.name.toLowerCase()} in Winnipeg
            </h2>
            <div className="mt-6">
              <Prose paragraphs={industry.intro} />
            </div>

            <h3 className="mt-12 font-display text-2xl font-bold text-navy-900">
              What we solve in this sector
            </h3>
            <div className="mt-6 space-y-4">
              {industry.challenges.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border-l-4 border-red-600 bg-silver-100 p-5"
                >
                  <h4 className="font-display text-lg font-bold text-navy-900">
                    {c.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-800/85">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <QuoteForm
              compact
              heading={`Quote for ${industry.shortName.toLowerCase()}`}
              blurb="Tell us about the site and we will come back with a realistic scope. Multi-site portfolios welcome."
            />
          </aside>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Services"
          title={`What ${industry.shortName.toLowerCase()} clients use most`}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {linkedServices.map((s) => (
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

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading
            eyebrow="Common questions"
            title={`${industry.shortName} FAQs`}
            blurb="More general questions are answered on the main FAQ page."
          />
          <div>
            <FaqAccordion items={industry.faqs} />
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-2 font-display text-base font-bold uppercase tracking-wide text-blue-600 hover:text-navy-900"
            >
              All FAQs
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {relatedCases.length > 0 && (
        <Section tone="light">
          <SectionHeading eyebrow="Proof" title="Related case studies" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCases.slice(0, 3).map((c) => (
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
                  Read more
                  <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CtaBand
        title={`Locksmith support for ${industry.shortName.toLowerCase()} in Winnipeg`}
        blurb="Call for emergency dispatch, or request a site walk-through and a written quote."
      />
    </>
  );
}
