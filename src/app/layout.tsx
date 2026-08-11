import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/lib/seo";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Commercial Locksmith Winnipeg | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Commercial locksmith in Winnipeg serving all of Manitoba. 24/7 emergency lockouts, master key systems, access control, high-security locks, safes and door hardware. Licensed, bonded and insured since 2012.",
  applicationName: site.name,
  keywords: [
    "commercial locksmith Winnipeg",
    "locksmith Winnipeg",
    "24 hour locksmith Winnipeg",
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
    <html lang="en-CA" className={`${inter.variable} ${barlow.variable} h-full`}>
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
