import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { locations } from "@/data/locations";
import { caseStudies } from "@/data/case-studies";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = (
    [
      { url: `${site.url}/`, changeFrequency: "weekly", priority: 1 },
      { url: `${site.url}/services`, changeFrequency: "monthly", priority: 0.9 },
      { url: `${site.url}/industries`, changeFrequency: "monthly", priority: 0.8 },
      { url: `${site.url}/service-areas`, changeFrequency: "monthly", priority: 0.8 },
      { url: `${site.url}/case-studies`, changeFrequency: "monthly", priority: 0.7 },
      { url: `${site.url}/about`, changeFrequency: "yearly", priority: 0.6 },
      { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.9 },
      { url: `${site.url}/faq`, changeFrequency: "monthly", priority: 0.6 },
      { url: `${site.url}/blog`, changeFrequency: "weekly", priority: 0.6 },
      { url: `${site.url}/careers`, changeFrequency: "monthly", priority: 0.4 },
    ] as const
  ).map((p) => ({ ...p, lastModified: now }));

  return [
    ...staticPages,
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...industries.map((i) => ({
      url: `${site.url}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...locations.map((l) => ({
      url: `${site.url}/service-areas/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...caseStudies.map((c) => ({
      url: `${site.url}/case-studies/${c.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
