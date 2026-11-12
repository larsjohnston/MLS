import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/lib/seo";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/data/site";

// One geometric sans for everything, to match the Century Gothic look of the
// sister sites (calgarylockandsafe.com, edmontonlock.com).
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Locksmith Winnipeg | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Mobile locksmith serving Winnipeg and surrounding communities since 1984. Locks and keys, rekeying, master key systems, access control, door repair, automatic doors and safes for businesses, homes and vehicles.",
  applicationName: site.name,
  keywords: [
    "commercial locksmith Winnipeg",
    "locksmith Winnipeg",
    "mobile locksmith Winnipeg",
    "master key systems Winnipeg",
    "access control Winnipeg",
    "commercial rekeying Winnipeg",
    "safe opening Winnipeg",
    "Manitoba locksmith",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: site.name,
    url: site.url,
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export const viewport = {
  themeColor: "#041E42",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={`${outfit.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd data={[localBusinessSchema, websiteSchema]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
        {/* spacer so the fixed mobile call bar never covers footer content */}
        <div className="h-16 sm:hidden" aria-hidden="true" />
        <Analytics />
      </body>
    </html>
  );
}
