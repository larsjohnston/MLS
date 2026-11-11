import { site, fullAddress, mapEmbedUrl, directionsUrl } from "@/data/site";
import { winnipegLocations, manitobaLocations } from "@/data/locations";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { QuoteForm } from "@/components/QuoteForm";
import { Section, SectionHeading, TrustBar } from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata = pageMeta({
  title: "Contact | Mobile Locksmith Winnipeg",
  description:
    "Contact Manitoba Lock & Safe for mobile locksmith service in Winnipeg and surrounding communities. Call 431.485.4498 Monday to Friday, 8 to 5, or request a written quote.",
  path: "/contact",
});

const crumbs = [{ href: "/contact", label: "Contact" }];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Contact us"
        title="Call us, or send the details. We come to you."
        blurb="We are a mobile locksmith, so there is no shop to visit — our technicians come to your business, home or vehicle. Work is scoped, quoted in writing and booked Monday to Friday."
        crumbs={crumbs}
        badges={["Mon–Fri, 8–5", "Quotes within one business day", "Winnipeg & area"]}
      />
      <TrustBar />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="How to reach us"
              blurb="For anything urgent, call during business hours — it is always faster than a form. For quotes and planned work, the form or an email works well."
            />

            <div className="mt-8 space-y-4">
              <a
                href={site.phone.href}
                className="flex items-start gap-4 rounded-xl border-2 border-red-600 bg-red-600/5 p-5 transition hover:bg-red-600/10"
              >
                <Icon name="phone" className="mt-0.5 h-6 w-6 shrink-0 text-red-600" />
                <span>
                  <span className="block font-display text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                    Call us · {site.hours.short}
                  </span>
                  <span className="mt-1 block font-display text-2xl font-extrabold text-navy-900">
                    {site.phone.display}
                  </span>
                  <span className="mt-1 block text-sm text-silver-500">
                    Monday to Friday, 8 a.m. to 5 p.m.
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
                    {site.hours.office}
                  </p>
                  <p className="text-silver-500">
                    Mobile service only — we come to you.
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
          blurb="Mobile service across Winnipeg and the communities around it."
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
