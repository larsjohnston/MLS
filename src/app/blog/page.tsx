import Link from "next/link";
import { posts } from "@/data/posts";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { CtaBand, Section, SectionHeading, TrustBar } from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export const metadata = pageMeta({
  title: "Resources | Commercial Security Guidance for Manitoba Businesses",
  description:
    "Practical commercial security guidance from Winnipeg locksmiths — winter door failures, master keying vs access control, key control, ANSI lock grades, staff turnover and exit door compliance.",
  path: "/blog",
});

const crumbs = [{ href: "/blog", label: "Resources" }];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Resources"
        title="Practical guidance from the field"
        blurb="What we have learned keeping Manitoba's commercial doors working — written for owners and facility managers, not for other locksmiths."
        crumbs={crumbs}
        badges={["No sales pitch", "Written by our technicians", "Manitoba-specific"]}
      />
      <TrustBar />

      <Section>
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid gap-8 rounded-2xl border border-silver-300 bg-white p-7 transition hover:border-blue-600 hover:shadow-lg lg:grid-cols-[1.4fr_1fr] lg:p-10"
        >
          <div>
            <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-red-600">
              Latest · {featured.category}
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-silver-500">
              {featured.excerpt}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-bold uppercase tracking-wide text-blue-600">
              Read the article
              <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </div>
          <div className="flex items-end text-sm text-silver-500 lg:justify-end">
            <p>
              {formatDate(featured.date)} · {featured.readingTime}
            </p>
          </div>
        </Link>
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="All articles" title="More from the field" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col rounded-xl border border-silver-300 bg-white p-6 transition hover:-translate-y-0.5 hover:border-blue-600 hover:shadow-lg"
            >
              <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                {p.category}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold leading-snug text-navy-900">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-silver-500">
                {p.excerpt}
              </p>
              <p className="mt-4 text-xs text-silver-500">
                {formatDate(p.date)} · {p.readingTime}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Have a question an article did not answer?"
        blurb="Call us. We would rather talk you through it than have you guess — and we will tell you if you do not need a locksmith at all."
      />
    </>
  );
}
