import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { getService } from "@/data/services";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import {
  CheckList,
  CtaBand,
  LinkCard,
  Prose,
  Section,
  SectionHeading,
  TrustBar,
} from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMeta({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const crumbs = [
    { href: "/case-studies", label: "Case Studies" },
    { href: `/case-studies/${study.slug}`, label: study.client },
  ];

  const linkedServices = study.services
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow={`${study.sector} · ${study.location}`}
        title={study.client}
        blurb={study.summary}
        crumbs={crumbs}
      />
      <TrustBar />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeading eyebrow="The challenge" title="What this building demands" />
            <div className="mt-6">
              <Prose paragraphs={study.challenge} />
            </div>

            <h2 className="mt-12 font-display text-2xl font-bold text-navy-900">
              Scope of work
            </h2>
            <div className="mt-6">
              <CheckList items={study.scope} />
            </div>

            <div className="mt-12 rounded-xl border-l-4 border-red-600 bg-silver-100 p-6">
              <h2 className="font-display text-xl font-bold text-navy-900">
                The outcome
              </h2>
              <div className="mt-3">
                <Prose paragraphs={study.outcome} />
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-2xl border border-silver-300 bg-white p-6">
              <h3 className="font-display text-lg font-bold text-navy-900">
                Engagement summary
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ["Client", study.client],
                  ["Sector", study.sector],
                  ["Location", study.location],
                ].map(([k, v]) => (
                  <div key={k} className="border-b border-silver-300 pb-3">
                    <dt className="font-semibold text-navy-900">{k}</dt>
                    <dd className="mt-0.5 text-silver-500">{v}</dd>
                  </div>
                ))}
                <div>
                  <dt className="font-semibold text-navy-900">Services delivered</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {linkedServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="rounded-full bg-silver-100 px-3 py-1.5 text-xs font-semibold text-navy-900 hover:bg-blue-100"
                      >
                        {s.shortName}
                      </Link>
                    ))}
                  </dd>
                </div>
              </dl>
              <Link
                href="/contact"
                className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-3 font-display text-sm font-bold uppercase tracking-wide text-white hover:bg-navy-800"
              >
                Request a similar assessment
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="Services used" title="What this engagement involves" />
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
        <SectionHeading eyebrow="More work" title="Other case studies" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((c) => (
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

      <CtaBand />
    </>
  );
}
