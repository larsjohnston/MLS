import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { posts } from "@/data/posts";
import { Icon } from "@/components/Icon";
import { CallButton, Section } from "@/components/Ui";

export const metadata = {
  title: "Thank you — we have your request",
  description:
    "Your quote request has been received by Manitoba Lock & Safe. We reply within one business day, or call us Monday to Friday, 8 to 5, for locksmith service in Winnipeg.",
  // Conversion pages should never appear in search results.
  robots: { index: false, follow: true },
  alternates: { canonical: `${site.url}/thank-you` },
};

export default function ThankYouPage() {
  return (
    <>
      <section className="hero-texture">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
            <Icon name="check" className="h-9 w-9 text-white" />
          </div>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Thank you — we have your request
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-silver-300">
            A member of our team will review the details and come back to you
            within one business day. If your situation is urgent, call us
            Monday to Friday, 8 to 5.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CallButton />
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/70 px-6 py-4 font-display text-base font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-navy-900"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-navy-900">
            What happens next
          </h2>
          <ol className="mt-6 grid gap-5 sm:grid-cols-3">
            {[
              {
                step: "We review the details",
                body: "A locksmith — not a salesperson — reads what you sent and works out what the job actually needs.",
              },
              {
                step: "We reply with a scope",
                body: "You get a written scope and price, or a call to arrange a site walk-through if the job needs eyes on it first.",
              },
              {
                step: "We schedule around you",
                body: "Work is booked ahead, Monday to Friday, at a time that keeps disruption to your day low.",
              },
            ].map((s, i) => (
              <li
                key={s.step}
                className="rounded-xl border border-silver-300 bg-white p-6"
              >
                <span className="font-display text-3xl font-extrabold text-silver-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold text-navy-900">
                  {s.step}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-500">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-bold text-navy-900">
                While you wait — popular services
              </h3>
              <ul className="mt-4 space-y-2">
                {services.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-2 text-sm text-navy-800 hover:text-blue-600"
                    >
                      <Icon name={s.icon} className="h-4 w-4 text-blue-600" />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-navy-900">
                Worth reading
              </h3>
              <ul className="mt-4 space-y-2">
                {posts.slice(0, 4).map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="flex items-start gap-2 text-sm text-navy-800 hover:text-blue-600"
                    >
                      <Icon name="arrow" className="mt-1 h-3.5 w-3.5 shrink-0 text-blue-600" />
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
