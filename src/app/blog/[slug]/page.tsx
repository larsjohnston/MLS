import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/posts";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { CtaBand, Section, SectionHeading } from "@/components/Ui";
import { JsonLd, pageMeta } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import { breadcrumbSchema } from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const crumbs = [
    { href: "/blog", label: "Resources" },
    { href: `/blog/${post.slug}`, label: post.title },
  ];

  const related = post.related
    .map((r) => getPost(r))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <JsonLd data={[articleSchema(post), breadcrumbSchema(crumbs)]} />
      <PageHero
        eyebrow={`${post.category} · ${post.readingTime}`}
        title={post.title}
        blurb={post.excerpt}
        crumbs={crumbs}
      />

      <Section>
        <article className="mx-auto max-w-3xl">
          <p className="text-sm text-silver-500">
            Published {formatDate(post.date)}
          </p>

          <div className="mt-8 space-y-8">
            {post.sections.map((s, i) => (
              <div key={i}>
                {s.heading && (
                  <h2 className="mb-3 font-display text-2xl font-bold leading-snug text-navy-900">
                    {s.heading}
                  </h2>
                )}
                {s.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="mb-4 text-[1.05rem] leading-[1.75] text-navy-800/90"
                  >
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="my-4 space-y-2.5 rounded-xl border-l-4 border-blue-600 bg-silver-100 p-5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                        <span className="leading-relaxed text-navy-800/90">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-silver-300 bg-silver-100 p-6">
            <h2 className="font-display text-xl font-bold text-navy-900">
              Need this looked at?
            </h2>
            <p className="mt-2 text-navy-800/85">
              We serve businesses and homeowners in Winnipeg and surrounding communities,
              with mobile service Monday to Friday and written quotes before work starts.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-white hover:bg-navy-800"
              >
                Request a quote
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy-900 px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-navy-900 hover:bg-navy-900 hover:text-white"
              >
                Browse services
              </Link>
            </div>
          </div>
        </article>
      </Section>

      {related.length > 0 && (
        <Section tone="light">
          <SectionHeading eyebrow="Keep reading" title="Related articles" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group flex flex-col rounded-xl border border-silver-300 bg-white p-6 transition hover:border-blue-600 hover:shadow-lg"
              >
                <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                  {r.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-navy-900">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-500">
                  {r.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
