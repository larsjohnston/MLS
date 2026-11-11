import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocation, locations } from "@/data/locations";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { QuoteForm } from "@/components/QuoteForm";
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
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return pageMeta({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/service-areas/${location.slug}`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const crumbs = [
    { href: "/service-areas", label: "Service Areas" },
    { href: `/service-areas/${location.slug}`, label: location.name },
  ];

  const nearby = location.nearby
    .map((n) => getLocation(n))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  const areaServedSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Commercial locksmith services in ${location.name}`,
    serviceType: "Commercial locksmith",
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "Place", name: `${location.name}, Manitoba` },
    url: `${site.url}/service-areas/${location.slug}`,
  };

  return (
    <>
      <JsonLd data={[areaServedSchema, breadcrumbSchema(crumbs)]} />

      <PageHero
        eyebrow={location.type === "winnipeg" ? "Winnipeg service area" : location.region}
        title={`Commercial locksmith in ${location.name}`}
        blurb={location.summary}
        crumbs={crumbs}
        badges={["Mobile service", "Licensed, bonded & insured", site.hours.short]}
      />
      <TrustBar />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              Locksmith services for {location.name} businesses
            </h2>
            <div className="mt-6">
              <Prose paragraphs={location.intro} />
            </div>

            <h3 className="mt-12 font-display text-2xl font-bold text-navy-900">
              What we are called out for here
            </h3>
            <div className="mt-6">
              <CheckList items={location.commonWork} />
            </div>

            <div className="mt-10 rounded-xl border border-silver-300 bg-silver-100 p-6">
              <h3 className="font-display text-lg font-bold text-navy-900">
                Areas we cover in {location.name}
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {location.landmarks.map((l) => (
                  <li key={l} className="flex items-start gap-2.5 text-sm text-navy-800/85">
                    <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="mb-6 rounded-2xl border border-navy-800 bg-navy-900 p-6 text-white">
              <p className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.18em] text-blue-500">
                <Icon name="clock" className="h-4 w-4" />
                Service hours
              </p>
              <p className="mt-2 font-display text-2xl font-extrabold">
                {site.hours.short}
              </p>
              <p className="mt-2 text-sm text-silver-300">
                We are a mobile service, so we come to you. Call and we will
                give you a realistic time before a van is booked.
              </p>
              <a
                href={site.phone.href}
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 font-display text-base font-bold uppercase tracking-wide text-white hover:bg-red-700"
              >
                <Icon name="phone" className="h-4 w-4" />
                {site.phone.display}
              </a>
            </div>
            <QuoteForm
              compact
              heading={`Quote for ${location.name}`}
              blurb="Send us the address and what you need. We will come back with a scope and price."
            />
          </aside>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Services"
          title={`Commercial locksmith services in ${location.name}`}
          blurb="Every service we offer is available across this area."
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

      {nearby.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Nearby" title="We also serve" />
          <div className="mt-8 flex flex-wrap gap-3">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                href={`/service-areas/${n.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-silver-300 bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 transition hover:border-blue-600 hover:text-blue-600"
              >
                <Icon name="pin" className="h-4 w-4 text-red-600" />
                {n.name}
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800"
            >
              All service areas
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </Section>
      )}

      <CtaBand
        title={`Need a commercial locksmith in ${location.name}?`}
        blurb="Call us Monday to Friday, 8 to 5, or request a written quote for planned work."
      />
    </>
  );
}
