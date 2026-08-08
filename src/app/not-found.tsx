import Link from "next/link";
import { services } from "@/data/services";
import { CallButton, Section } from "@/components/Ui";
import { Icon } from "@/components/Icon";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-display text-6xl font-extrabold text-silver-300">404</p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
          That page has been rekeyed
        </h1>
        <p className="mt-4 text-lg text-silver-500">
          The page you were looking for is not here. If you need a commercial
          locksmith right now, calling is always faster than searching.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton />
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy-900 px-6 py-4 font-display text-base font-bold uppercase tracking-wide text-navy-900 transition hover:bg-navy-900 hover:text-white"
          >
            Back to home
          </Link>
        </div>

        <div className="mt-12 text-left">
          <h2 className="font-display text-lg font-bold text-navy-900">
            Popular services
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {services.slice(0, 6).map((s) => (
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
      </div>
    </Section>
  );
}
