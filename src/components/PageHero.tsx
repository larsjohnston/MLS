import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { CallButton, QuoteButton } from "./Ui";
import { Icon } from "./Icon";

export function PageHero({
  eyebrow,
  title,
  blurb,
  crumbs,
  badges,
  emergency = false,
}: {
  eyebrow?: string;
  title: string;
  blurb?: string;
  crumbs: Crumb[];
  badges?: string[];
  emergency?: boolean;
}) {
  return (
    <section className="hero-texture">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <Breadcrumbs items={crumbs} dark />
        {eyebrow && (
          <p
            className={`mt-6 font-display text-sm font-bold uppercase tracking-[0.2em] ${
              emergency ? "text-red-500" : "text-blue-500"
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-4xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {blurb && (
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-silver-300">
            {blurb}
          </p>
        )}
        {badges && badges.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {badges.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-sm text-silver-300"
              >
                <Icon name="check" className="h-4 w-4 text-blue-500" />
                {b}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CallButton />
          <QuoteButton dark />
        </div>
      </div>
    </section>
  );
}
