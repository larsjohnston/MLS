import Link from "next/link";
import { winnipegLocations, manitobaLocations } from "@/data/locations";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { CtaBand, Section, SectionHeading, TrustBar } from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata = pageMeta({
  title: "Service Areas | Commercial Locksmith Winnipeg & Manitoba",
  description:
    "Manitoba Lock & Safe serves every Winnipeg neighbourhood and communities across Manitoba — Brandon, Steinbach, Portage la Prairie, Selkirk, Winkler, Dauphin, Thompson and the capital region.",
  path: "/service-areas",
});

const crumbs = [{ href: "/service-areas", label: "Service Areas" }];

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Service areas"
        title="Winnipeg in about 30 minutes. Manitoba on schedule."
        blurb="Round-the-clock emergency response across Winnipeg and the capital region, with planned service days covering the rest of the province."
        crumbs={crumbs}
        badges={["24/7 Winnipeg dispatch", "Province-wide coverage", "Regional service days"]}
      />
      <TrustBar />

      <Section>
        <SectionHeading
          eyebrow="Winnipeg"
          title="Every neighbourhood in the city"
          blurb="Our technicians work these areas daily, which is why we usually know the building before we arrive."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {winnipegLocations.map((l) => (
            <AreaCard key={l.slug} location={l} />
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Across Manitoba"
          title="Regional coverage, province-wide"
          blurb="Regional work is scheduled as planned service days so you get a full technician visit rather than a rushed hour. Batching jobs keeps costs down — tell us everything you need before we come out."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {manitobaLocations.map((l) => (
            <AreaCard key={l.slug} location={l} />
          ))}
        </div>
      </Section>

      <CtaBand
        title="Not sure if we cover your location?"
        blurb="We serve all of Manitoba. Call and we will tell you honestly what response time to expect at your address."
      />
    </>
  );
}

function AreaCard({
  location,
}: {
  location: { slug: string; name: string; summary: string; responseTime: string; region: string };
}) {
  return (
    <Link
      href={`/service-areas/${location.slug}`}
      className="group flex flex-col rounded-xl border border-silver-300 bg-white p-6 transition hover:-translate-y-0.5 hover:border-blue-600 hover:shadow-lg"
    >
      <div className="flex items-center gap-2">
        <Icon name="pin" className="h-5 w-5 text-red-600" />
        <h3 className="font-display text-lg font-bold text-navy-900">
          {location.name}
        </h3>
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-silver-500">
        {location.summary}
      </p>
      <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-navy-800">
        <Icon name="clock" className="h-4 w-4 text-blue-600" />
        {location.responseTime}
      </p>
    </Link>
  );
}
