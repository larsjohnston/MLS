import Link from "next/link";
import { winnipegLocations, manitobaLocations } from "@/data/locations";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { CtaBand, Section, SectionHeading, TrustBar } from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata = pageMeta({
  title: "Service Areas | Mobile Locksmith Winnipeg & Area",
  description:
    "Manitoba Lock & Safe is a mobile locksmith serving every Winnipeg neighbourhood and surrounding communities, including the capital region, Selkirk, Steinbach and Portage la Prairie.",
  path: "/service-areas",
});

const crumbs = [{ href: "/service-areas", label: "Service Areas" }];

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Service areas"
        title="Winnipeg and the communities around it"
        blurb="We are a mobile locksmith, so our service area is wherever the vans go: every Winnipeg neighbourhood and the surrounding communities, Monday to Friday."
        crumbs={crumbs}
        badges={["Mobile service", "Every Winnipeg neighbourhood", "Surrounding communities"]}
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
          eyebrow="Outside the city"
          title="Surrounding communities"
          blurb="Work outside the city is booked ahead. Tell us everything you need before we come out and we can usually handle it in one visit."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {manitobaLocations.map((l) => (
            <AreaCard key={l.slug} location={l} />
          ))}
        </div>
      </Section>

      <CtaBand
        title="Not sure if we cover your location?"
        blurb="Not sure if we come out your way? Call and we will tell you straight."
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
        Mobile service · Mon–Fri
      </p>
    </Link>
  );
}
