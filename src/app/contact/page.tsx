import { site, fullAddress, mapEmbedUrl, directionsUrl } from "@/data/site";
import { winnipegLocations, manitobaLocations } from "@/data/locations";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { QuoteForm } from "@/components/QuoteForm";
import { Section, SectionHeading, TrustBar } from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata = pageMeta({
  title: "Contact | 24/7 Commercial Locksmith Winnipeg",
  description:
    "Contact Manitoba Lock & Safe for commercial locksmith service in Winnipeg and across Manitoba. 24/7 emergency dispatch, or request a written quote for planned work.",
  path: "/contact",
});

const crumbs = [{ href: "/contact", label: "Contact" }];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Contact us"
        title="Call for emergencies. Write for everything else."
        blurb="Emergency lockouts, break-ins and failed hardware are answered around the clock. Planned work is scoped, quoted in writing and scheduled around your operating hours."
        crumbs={crumbs}
        badges={["Answered 24/7", "Quotes within one business day", "All of Manitoba"]}
      />
      <TrustBar />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="How to reach us"
              blurb="For anything urgent, call. It is always faster than a form, and the person answering can dispatch a technician while you are still on the line."
            />

            <div className="mt-8 space-y-4">
              <a
                href={site.phone.href}
                className="flex items-start gap-4 rounded-xl border-2 border-red-600 bg-red-600/5 p-5 transition hover:bg-red-600/10"
              >
                <Icon name="phone" className="mt-0.5 h-6 w-6 shrink-0 text-red-600" />
                <span>
                  <span className="block font-display text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                    24/7 emergency dispatch
                  </span>
                  <span className="mt-1 block font-display text-2xl font-extrabold text-navy-900">
                    {site.phone.display}
                  </span>
                  <span className="mt-1 block text-sm text-silver-500">
                    Answered by a locksmith, day or night, every day of the year.
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-4 rounded-xl border border-silver-300 bg-white p-5 transition hover:border-blue-600"
              >
                <Icon name="mail" className="mt-0.5 h-6 w-6 shrink-0 text-blue-600" />
                <span>
                  <span className="block font-display text-base font-bold text-navy-900">
                    {site.email}
                  </span>
                  <span className="mt-1 block text-sm text-silver-500">
                    Quotes, scheduling, account enquiries and tender documents.
                  </span>
                </span>
              </a>

              {site.address.hasStorefront && (
                <div className="flex items-start gap-4 rounded-xl border border-silver-300 bg-white p-5">
                  <Icon name="pin" className="mt-0.5 h-6 w-6 shrink-0 text-blue-600" />
                  <div>
                    <p className="font-display text-base font-bold text-navy-900">
                      {site.address.street}
                    </p>
                    <p className="text-sm text-silver-500">
                      {site.address.locality}, {site.address.region}{" "}
                      {site.address.postalCode}
                    </p>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:underline"
                    >
                      Get directions
                      <Icon name="arrow" className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4 rounded-xl border border-silver-300 bg-white p-5">
                <Icon name="clock" className="mt-0.5 h-6 w-6 shrink-0 text-blue-600" />
                <div className="text-sm">
                  <p className="font-display text-base font-bold text-navy-900">
                    Hours
                  </p>
                  <p className="mt-1 text-silver-500">
                    <strong className="text-navy-900">Office:</strong>{" "}
                    {site.hours.office}
                  </p>
                  <p className="text-silver-500">
                    <strong className="text-navy-900">Emergency:</strong>{" "}
                    {site.hours.emergency}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-silver-100 p-6">
              <h3 className="font-display text-lg font-bold text-navy-900">
                Before you call about a lockout
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/85">
                Have the site address, the door type and any brand name visible on
                the hardware ready — and be prepared to show ID plus proof you are
                entitled to access the premises when we arrive. That is a
                licensing requirement and we do not make exceptions to it.
              </p>
            </div>
          </div>

          <div>
            <QuoteForm
              heading="Request a quote"
              blurb="Tell us about the site and the doors. We reply to quote requests within one business day, and we will tell you honestly if the job needs a site visit before we can price it."
            />
          </div>
        </div>
      </Section>

      {site.address.hasStorefront && (
        <Section tone="light">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Find us"
                title="Our Winnipeg shop"
                blurb="Most commercial work happens at your building, but the shop is here if you need to drop off a lock, a safe door or a cabinet front."
              />
              <div className="mt-6 rounded-xl border border-silver-300 bg-white p-5">
                <p className="flex items-start gap-2.5 text-sm text-navy-800">
                  <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <span>{fullAddress}</span>
                </p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-3 font-display text-sm font-bold uppercase tracking-wide text-white hover:bg-navy-800"
                >
                  <Icon name="pin" className="h-4 w-4" />
                  Get directions
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-silver-300 bg-white shadow-sm">
              <iframe
                title={`Map showing ${site.name} at ${fullAddress}`}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[380px] w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </Section>
      )}

      <Section>
        <SectionHeading
          eyebrow="Coverage"
          title="Where we work"
          blurb="24/7 emergency response across Winnipeg and the capital region, with scheduled service days across the rest of Manitoba."
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-navy-900">
              Winnipeg
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-silver-500">
              {winnipegLocations.map((l) => l.name).join(" · ")}
            </p>
          </div>
          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-navy-900">
              Regional Manitoba
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-silver-500">
              {manitobaLocations.map((l) => l.name).join(" · ")}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
