import Link from "next/link";
import { site } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Manitoba Lock & Safe collects, uses, stores and protects personal information gathered through this website, in line with Canada's PIPEDA.",
  path: "/privacy",
});

const crumbs = [{ href: "/privacy", label: "Privacy Policy" }];

/**
 * ⚠️  This policy is written to describe what the site as built actually does.
 *     It is not legal advice. Have it reviewed by a lawyer before launch, and
 *     update it whenever you add a tool that touches visitor data (analytics,
 *     chat widgets, booking tools, ad pixels, call tracking).
 *
 *     LAST UPDATED — bump this date whenever the policy changes.
 */
const LAST_UPDATED = "August 2026";

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        blurb={`How we collect, use and protect personal information gathered through ${site.domain}. Last updated ${LAST_UPDATED}.`}
        crumbs={crumbs}
      />

      <Section>
        <article className="mx-auto max-w-3xl">
          <div className="space-y-10 text-[1.02rem] leading-[1.75] text-navy-800/90">
            <section>
              <h2 className="mb-3 font-display text-2xl font-bold text-navy-900">
                Who we are
              </h2>
              <p>
                {site.legalName} is a commercial locksmith business operating in
                Winnipeg and throughout Manitoba. This policy explains what
                personal information we collect through this website, why we
                collect it, and what we do with it. It applies to{" "}
                {site.domain} only — information collected in person, over the
                phone or through a service agreement is handled under the same
                principles but may involve additional records.
              </p>
              <p className="mt-3">
                We handle personal information in accordance with Canada&apos;s
                Personal Information Protection and Electronic Documents Act
                (PIPEDA).
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-2xl font-bold text-navy-900">
                What we collect
              </h2>
              <p>
                <strong>Information you give us.</strong> When you submit the
                quote request form we collect your name, company name, email
                address, phone number, the site location, the service you are
                asking about, your timeline and whatever you write in the details
                field. We only collect what the form asks for — please do not
                send us access codes, key numbers or alarm codes through the
                website.
              </p>
              <p className="mt-3">
                <strong>Information collected automatically.</strong> Like most
                websites, our host records standard technical information such as
                IP address, browser type, referring page and the pages you view.
                If website analytics are enabled, aggregate usage data is
                collected as described below.
              </p>
              <p className="mt-3">
                <strong>What we do not collect.</strong> We do not ask for or
                store payment card details through this website, and we do not
                knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-2xl font-bold text-navy-900">
                Why we collect it
              </h2>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>To respond to your quote request or enquiry</li>
                <li>To prepare a scope of work, quotation or service schedule</li>
                <li>To arrange attendance, access and scheduling for a job</li>
                <li>To maintain service and key control records for your account</li>
                <li>To meet our legal, licensing and insurance obligations</li>
                <li>To understand how the website is used so we can improve it</li>
              </ul>
              <p className="mt-3">
                We do not sell personal information, and we do not share it with
                third parties for their own marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-2xl font-bold text-navy-900">
                Marketing
              </h2>
              <p>
                Submitting the quote form is a request for service, not a
                subscription. We will not add you to a mailing list on the basis
                of a quote request. If we ever send commercial electronic
                messages, they will comply with Canada&apos;s Anti-Spam
                Legislation (CASL) and will include a working unsubscribe link.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-2xl font-bold text-navy-900">
                Cookies and analytics
              </h2>
              <p>
                This website does not use advertising cookies or tracking pixels.
              </p>
              <p className="mt-3">
                We may use Google Analytics to understand aggregate website usage
                — which pages are read, how visitors arrive, and which devices
                they use. Where it is enabled, IP anonymisation is turned on.
                Google Analytics sets its own cookies; you can opt out across all
                sites using the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  className="font-semibold text-blue-600 underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Google Analytics opt-out browser add-on
                </a>
                , or by blocking cookies in your browser settings. Blocking them
                will not affect your ability to use this site.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-2xl font-bold text-navy-900">
                Service providers
              </h2>
              <p>
                We use third parties to operate this website and our business,
                and they may process limited personal information on our behalf:
                our website host, our form-processing provider, our email
                provider and our analytics provider. These providers are bound to
                use the information only to deliver the service we have engaged
                them for. Some of them process or store data outside Canada,
                which means that data may be subject to the laws of the country
                where it is held.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-2xl font-bold text-navy-900">
                How long we keep it
              </h2>
              <p>
                Quote requests that do not become jobs are retained only as long
                as needed to follow up, and are then deleted. Where you become a
                client, we retain service records — including key system charts
                and key issue records — for as long as we hold your account and
                for the period required by our legal, insurance and licensing
                obligations. Key system records are treated as security-sensitive
                and are stored accordingly.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-2xl font-bold text-navy-900">
                How we protect it
              </h2>
              <p>
                This website is served over HTTPS. Access to client records,
                including key system documentation, is restricted to staff who
                need it to do their work. No system is perfectly secure, but we
                treat security records with the seriousness the trade demands —
                a key chart in the wrong hands is a physical security risk, not
                merely a privacy one.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-2xl font-bold text-navy-900">
                Your rights
              </h2>
              <p>
                You may ask us what personal information we hold about you, ask
                for it to be corrected if it is inaccurate, or ask us to delete
                it where we are not required to keep it. Contact us using the
                details below and we will respond within a reasonable time. If
                you are not satisfied with our response, you may contact the
                Office of the Privacy Commissioner of Canada.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-2xl font-bold text-navy-900">
                Changes to this policy
              </h2>
              <p>
                We may update this policy as our practices or the tools we use
                change. The revision date at the top of this page always reflects
                the current version.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-2xl font-bold text-navy-900">
                Contact us
              </h2>
              <p>
                Questions about this policy, or about the information we hold,
                can be directed to:
              </p>
              <div className="mt-4 rounded-xl border border-silver-300 bg-silver-100 p-6">
                <p className="font-display text-lg font-bold text-navy-900">
                  {site.legalName}
                </p>
                {site.address.hasStorefront && (
                  <p className="mt-1 text-sm">
                    {site.address.street}
                    <br />
                    {site.address.locality}, {site.address.region}{" "}
                    {site.address.postalCode}
                  </p>
                )}
                <p className="mt-2 text-sm">
                  <a href={`mailto:${site.email}`} className="font-semibold text-blue-600 underline">
                    {site.email}
                  </a>
                  <br />
                  <a href={site.phone.href} className="font-semibold text-blue-600 underline">
                    {site.phone.display}
                  </a>
                </p>
              </div>
            </section>
          </div>

          <p className="mt-10 text-sm text-silver-500">
            Looking for something else?{" "}
            <Link href="/contact" className="font-semibold text-blue-600 hover:underline">
              Contact us
            </Link>{" "}
            or read the{" "}
            <Link href="/faq" className="font-semibold text-blue-600 hover:underline">
              FAQ
            </Link>
            .
          </p>
        </article>
      </Section>
    </>
  );
}
