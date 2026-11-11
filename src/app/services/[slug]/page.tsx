import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { industries } from "@/data/industries";
import { winnipegLocations } from "@/data/locations";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { QuoteForm } from "@/components/QuoteForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  CheckList,
  CtaBand,
  LinkCard,
  ProcessSteps,
  Prose,
  Section,
  SectionHeading,
  TrustBar,
} from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = [
    { href: "/services", label: "Services" },
    { href: `/services/${service.slug}`, label: service.shortName },
  ];

  const related = service.related
    .map((r) => getService(r))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relevantIndustries = industries.filter((i) =>
    i.services.includes(service.slug),
  );

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          faqSchema(service.faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHero
        eyebrow="Mobile locksmith service"
        title={service.heroHeading}
        blurb={service.heroSub}
        crumbs={crumbs}
        emergency={service.emergency}
        badges={[
          "Winnipeg & surrounding area",
          "Licensed, bonded & insured",
          "Quoted before we start",
        ]}
      />
      <TrustBar />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              {service.name} in Winnipeg
            </h2>
            <div className="mt-6">
              <Prose paragraphs={service.intro} />
            </div>

            <h3 className="mt-12 font-display text-2xl font-bold text-navy-900">
              What this service covers
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.offerings.map((o) => (
                <div
                  key={o.title}
                  className="rounded-xl border border-silver-300 bg-white p-5"
                >
                  <div className="flex items-start gap-2.5">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <h4 className="font-display text-base font-bold text-navy-900">
                      {o.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-silver-500">
                    {o.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <QuoteForm
              compact
              defaultService={service.name}
              heading={`Quote for ${service.shortName.toLowerCase()}`}
              blurb="Send the details and we will come back with a scope and price. Urgent? The phone is faster."
            />
          </aside>
        </div>
      </Section>

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Signs you need this"
              title="When to call us"
            />
            <div className="mt-8">
              <CheckList items={service.signs} />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Common questions" title="Answered" />
            <div className="mt-8">
              <FaqAccordion items={service.faqs} />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How it works"
          title="Our process, start to finish"
          blurb="No surprises, no vague invoices, and no work started before you know what it costs."
        />
        <div className="mt-10">
          <ProcessSteps steps={service.process} />
        </div>
      </Section>

      {relevantIndustries.length > 0 && (
        <Section tone="light">
          <SectionHeading
            eyebrow="Who we do this for"
            title={`${service.shortName} by sector`}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {relevantIndustries.map((i) => (
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
      )}

      <Section>
        <SectionHeading
          eyebrow="Where we work"
          title="Serving every corner of Winnipeg"
          blurb="Plus the rest of Manitoba on scheduled service days."
        />
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {winnipegLocations.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/service-areas/${l.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-silver-300 px-3.5 py-2 text-sm text-navy-800 transition hover:border-blue-600 hover:text-blue-600"
              >
                <Icon name="pin" className="h-3.5 w-3.5 text-red-600" />
                {l.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-1.5 rounded-full bg-navy-900 px-3.5 py-2 text-sm font-semibold text-white hover:bg-navy-800"
            >
              All service areas
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </li>
        </ul>
      </Section>

      {related.length > 0 && (
        <Section tone="light">
          <SectionHeading eyebrow="Related services" title="You may also need" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <LinkCard
                key={r.slug}
                href={`/services/${r.slug}`}
                icon={r.icon}
                accent={r.emergency ? "red" : "blue"}
                title={r.name}
                body={r.summary}
              />
            ))}
          </div>
        </Section>
      )}

      <CtaBand
        title={`Need ${service.shortName.toLowerCase()} in Winnipeg?`}
        blurb="Call us Monday to Friday, 8 to 5, or send us the details and we will quote it in writing."
      />
    </>
  );
}
