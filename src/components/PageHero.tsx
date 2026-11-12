import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { CallButton, QuoteButton } from "./Ui";
import { Icon } from "./Icon";

/**
 * Inner-page hero. White and centred with a bold headline and the short
 * two-tone rule, matching the Calgary and Edmonton Lock & Safe sites.
 */
export function PageHero({
  eyebrow,
  title,
  blurb,
  crumbs,
  badges,
}: {
  eyebrow?: string;
  title: string;
  blurb?: string;
  crumbs: Crumb[];
  badges?: string[];
  emergency?: boolean;
}) {
  return (
    <section className="border-b-4 border-blue-600 bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-8 sm:pb-16">
        <Breadcrumbs items={crumbs} />
        <div className="mx-auto mt-8 max-w-4xl text-center">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-2 font-display text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <span aria-hidden="true" className="title-rule mx-auto mt-6" />
          {blurb && (
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-navy-800/85">
              {blurb}
            </p>
          )}
          {badges && badges.length > 0 && (
            <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
              {badges.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 rounded-full border border-silver-300 bg-silver-100 px-3.5 py-1.5 text-sm text-navy-900"
                >
                  <Icon name="check" className="h-4 w-4 text-blue-600" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CallButton />
            <QuoteButton />
          </div>
        </div>
      </div>
    </section>
  );
}
