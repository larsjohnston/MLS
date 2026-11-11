import type { Metadata } from "next";
import { site } from "@/data/site";

export { JsonLd } from "@/components/JsonLd";

export function pageMeta({
  title,
  description,
  path,
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = `${site.url}${path}`;

  // Declaring `openGraph` on a page replaces the image inherited from the
  // root-level opengraph-image file, so it has to be set explicitly here or
  // inner pages ship without a social share image.
  const image = {
    url: `${site.url}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: `${site.name} — locksmith serving Winnipeg and surrounding communities`,
  };

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_CA",
      type,
      images: [image],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
