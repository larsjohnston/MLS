import { site } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import {
  CheckList,
  CtaBand,
  Prose,
  Section,
  SectionHeading,
  TrustBar,
} from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata = pageMeta({
  title: "Careers | Locksmith Jobs in Winnipeg",
  description:
    "Join Manitoba Lock & Safe. We hire licensed commercial locksmiths, apprentices and access control technicians in Winnipeg, with training, certification support and a company vehicle.",
  path: "/careers",
});

const crumbs = [{ href: "/careers", label: "Careers" }];

/**
 * ⚠️  Update these listings before launch — they describe the roles we
 *     typically hire for. Remove any position you are not currently filling.
 */
const openings = [
  {
    title: "Commercial Locksmith Technician",
    type: "Full-time · Winnipeg",
    body: "Service and installation across commercial accounts — locksets, exit devices, closers, master key systems and door hardware. You run your own truck and your own schedule within a dispatched day.",
    requirements: [
      "Three or more years of commercial locksmithing experience",
      "Confident on mortise and cylindrical hardware, exit devices and closers",
      "Master key system experience, including pinning to a chart",
      "Valid Manitoba driver's licence with a clean abstract",
      "Able to pass a criminal record check",
    ],
  },
  {
    title: "Access Control Technician",
    type: "Full-time · Winnipeg",
    body: "Install, commission and service commercial access control — readers, controllers, electrified hardware, power supplies and the low-voltage cabling that connects them.",
    requirements: [
      "Experience installing commercial access control systems",
      "Comfortable with low-voltage wiring, terminations and troubleshooting",
      "Understanding of fail-safe and fail-secure hardware and egress requirements",
      "Valid Manitoba driver's licence",
      "Locksmithing background an asset but not required",
    ],
  },
  {
    title: "Locksmith Apprentice",
    type: "Full-time · Winnipeg",
    body: "Learn the trade properly. You start alongside a senior technician and work toward certification with our support — the training path we would want for ourselves.",
    requirements: [
      "Mechanical aptitude and genuine interest in the trade",
      "Reliable, presentable and comfortable talking to clients",
      "Valid Manitoba driver's licence",
      "Able to pass a criminal record check",
      "No prior locksmithing experience required",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Careers"
        title="Work on Manitoba's most demanding commercial doors"
        blurb="We are a commercial specialist, which means real hardware, real systems and work that gets more interesting the longer you do it. If you take pride in doing it right, we would like to hear from you."
        crumbs={crumbs}
        badges={["Company vehicle", "Certification support", "Winnipeg based"]}
      />
      <TrustBar />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="Why work here" title="What we offer" />
            <div className="mt-6">
              <Prose
                paragraphs={[
                  `Manitoba Lock & Safe has been commercial-only since ${site.founded}, and that shapes the work. You are not cutting house keys between calls — you are pinning master key systems, commissioning access control, rebuilding storefront hardware and solving problems that take actual expertise.`,
                  "We invest in the people doing that work: manufacturer training, ALOA certification support, a properly stocked company vehicle and the tools to do the job without improvising.",
                ]}
              />
            </div>
            <div className="mt-8">
              <CheckList
                items={[
                  "Competitive wages reviewed annually, with overtime and on-call premiums",
                  "Company vehicle, fuel card, tools and uniforms provided",
                  "Paid training and support toward ALOA certification",
                  "Health benefits after the probationary period",
                  "Rotating on-call schedule — shared fairly, not dumped on the newest hire",
                  "A commercial-only book of work, so your skills compound instead of scattering",
                ]}
              />
            </div>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-2xl border border-silver-300 bg-silver-100 p-6">
              <h3 className="font-display text-lg font-bold text-navy-900">
                How to apply
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/85">
                Send a résumé and a short note about the work you have done to{" "}
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Application — ")}`}
                  className="font-semibold text-blue-600 underline"
                >
                  {site.email}
                </a>
                . Tell us which position interests you. We read every application
                and reply to all of them.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-navy-800/85">
                No current opening that fits? Send your résumé anyway. We hire
                good technicians when we meet them, not only when a posting is up.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-3 font-display text-sm font-bold uppercase tracking-wide text-white hover:bg-navy-800"
              >
                <Icon name="mail" className="h-4 w-4" />
                Email your résumé
              </a>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Open positions"
          title="Where we are hiring"
          blurb="Positions are Winnipeg-based, with occasional travel for regional Manitoba projects."
        />
        <div className="mt-10 space-y-6">
          {openings.map((o) => (
            <div
              key={o.title}
              className="rounded-xl border border-silver-300 bg-white p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-bold text-navy-900">
                  {o.title}
                </h3>
                <span className="rounded-full bg-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-600">
                  {o.type}
                </span>
              </div>
              <p className="mt-3 leading-relaxed text-navy-800/85">{o.body}</p>
              <h4 className="mt-5 font-display text-sm font-bold uppercase tracking-wide text-navy-900">
                What we are looking for
              </h4>
              <ul className="mt-3 space-y-2">
                {o.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-navy-800/85">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    {r}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(`Application — ${o.title}`)}`}
                className="mt-6 inline-flex items-center gap-2 rounded-lg border-2 border-navy-900 px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-navy-900 transition hover:bg-navy-900 hover:text-white"
              >
                Apply for this role
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Not looking for a job — just need a locksmith?"
        blurb="Call us for 24/7 emergency commercial service anywhere in Winnipeg, or request a quote for planned work."
      />
    </>
  );
}
