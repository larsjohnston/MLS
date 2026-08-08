import Link from "next/link";
import { Icon } from "./Icon";
import { site, credentials, stats } from "@/data/site";

/* ── Layout primitives ─────────────────────────────────────────────────── */

export function Section({
  children,
  className = "",
  tone = "white",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "white" | "light" | "navy";
  id?: string;
}) {
  const tones = {
    white: "bg-white",
    light: "bg-silver-100",
    navy: "bg-navy-900 text-white",
  };
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  blurb,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  blurb?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p
          className={`font-display text-sm font-bold uppercase tracking-[0.2em] ${
            dark ? "text-blue-500" : "text-red-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {blurb && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? "text-silver-300" : "text-silver-500"
          }`}
        >
          {blurb}
        </p>
      )}
    </div>
  );
}

export function Prose({ paragraphs, dark = false }: { paragraphs: string[]; dark?: boolean }) {
  return (
    <div className="space-y-4">
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className={`text-base leading-relaxed sm:text-[1.05rem] ${
            dark ? "text-silver-300" : "text-navy-800/85"
          }`}
        >
          {p}
        </p>
      ))}
    </div>
  );
}

/* ── Buttons ───────────────────────────────────────────────────────────── */

export function CallButton({ className = "", label }: { className?: string; label?: string }) {
  return (
    <a
      href={site.phone.href}
      className={`inline-flex items-center justify-center gap-2.5 rounded-lg bg-red-600 px-6 py-4 font-display text-base font-bold uppercase tracking-wide text-white transition hover:bg-red-700 ${className}`}
    >
      <Icon name="phone" className="h-5 w-5" />
      {label ?? `Call ${site.phone.display}`}
    </a>
  );
}

export function QuoteButton({
  className = "",
  label = "Request a quote",
  dark = false,
}: {
  className?: string;
  label?: string;
  dark?: boolean;
}) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center justify-center gap-2 rounded-lg border-2 px-6 py-4 font-display text-base font-bold uppercase tracking-wide transition ${
        dark
          ? "border-white/70 text-white hover:bg-white hover:text-navy-900"
          : "border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
      } ${className}`}
    >
      {label}
    </Link>
  );
}

/* ── Reusable blocks ───────────────────────────────────────────────────── */

export function TrustBar() {
  const items = [
    { icon: "clock", text: "24/7 emergency dispatch" },
    { icon: "shield", text: "Licensed, bonded & insured" },
    { icon: "award", text: "ALOA certified technicians" },
    { icon: "truck", text: "All of Manitoba" },
  ];
  return (
    <div className="border-y border-silver-300 bg-silver-100">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-5 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.text} className="flex items-center gap-2.5">
            <Icon name={i.icon} className="h-5 w-5 shrink-0 text-blue-600" />
            <span className="text-sm font-semibold text-navy-900">{i.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="border-l-4 border-red-600 pl-4">
          <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            {s.value}
          </p>
          <p className="mt-1 text-sm text-silver-300">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export function CredentialGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {credentials.map((c) => (
        <div
          key={c.title}
          className="rounded-xl border border-silver-300 bg-white p-5"
        >
          <div className="flex items-center gap-2.5">
            <Icon name="check" className="h-5 w-5 shrink-0 text-blue-600" />
            <h3 className="font-display text-base font-bold text-navy-900">
              {c.title}
            </h3>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-silver-500">{c.body}</p>
        </div>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Need a commercial locksmith in Winnipeg today?",
  blurb = "Emergency calls are answered around the clock by a locksmith, not an answering service. Planned work is scoped in writing before anyone picks up a tool.",
}: {
  title?: string;
  blurb?: string;
}) {
  return (
    <section className="hero-texture">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-silver-300">
              {blurb}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <CallButton className="w-full" />
            <QuoteButton className="w-full" dark />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CheckList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Icon
            name="check"
            className={`mt-0.5 h-5 w-5 shrink-0 ${dark ? "text-blue-500" : "text-blue-600"}`}
          />
          <span
            className={`text-base leading-relaxed ${
              dark ? "text-silver-300" : "text-navy-800/85"
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function LinkCard({
  href,
  icon,
  title,
  body,
  accent = "blue",
}: {
  href: string;
  icon?: string;
  title: string;
  body: string;
  accent?: "blue" | "red";
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-silver-300 bg-white p-6 transition hover:-translate-y-0.5 hover:border-blue-600 hover:shadow-lg hover:shadow-navy-900/10"
    >
      {icon && (
        <Icon
          name={icon}
          className={`h-8 w-8 ${accent === "red" ? "text-red-600" : "text-blue-600"}`}
        />
      )}
      <h3 className="mt-4 font-display text-lg font-bold leading-snug text-navy-900">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-silver-500">{body}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600">
        Learn more
        <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function ProcessSteps({
  steps,
}: {
  steps: { step: string; body: string }[];
}) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.step} className="relative rounded-xl bg-white p-6 shadow-sm ring-1 ring-silver-300">
          <span className="font-display text-4xl font-extrabold text-silver-300">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-1 font-display text-lg font-bold text-navy-900">
            {s.step}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-silver-500">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
