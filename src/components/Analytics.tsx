import Script from "next/script";

/**
 * Google Analytics 4.
 *
 * Set NEXT_PUBLIC_GA_ID in your environment (Vercel → Settings → Environment
 * Variables, or a local .env.local) to the measurement ID, e.g. G-XXXXXXXXXX.
 * With the variable unset — in development, or before you have created the
 * property — nothing is injected at all.
 *
 * See .env.example.
 */
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
