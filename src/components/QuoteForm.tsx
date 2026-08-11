"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { Icon } from "./Icon";

type Status = "idle" | "sending" | "sent" | "error";

export function QuoteForm({
  compact = false,
  defaultService = "",
  heading = "Request a commercial quote",
  blurb = "Tell us about the doors and we will come back with a realistic scope and price. For anything urgent, call — the phone is always faster.",
}: {
  compact?: boolean;
  defaultService?: string;
  heading?: string;
  blurb?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot — bots fill hidden fields, humans do not.
    if (data.website) return;

    setStatus("sending");
    setError("");

    // No backend configured yet: fall back to the visitor's email client so the
    // form still works on day one. Set `formEndpoint` in src/data/site.ts to
    // post to Formspree (or any endpoint accepting JSON) instead.
    if (!site.formEndpoint) {
      const body = [
        `Name: ${data.name}`,
        `Company: ${data.company}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Location: ${data.location}`,
        `Service: ${data.service}`,
        `Timeline: ${data.timeline}`,
        "",
        `${data.message}`,
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Quote request — ${data.company || data.name}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      form.reset();
      return;
    }

    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      form.reset();
      // A dedicated thank-you page gives you a clean conversion goal to track
      // in Google Analytics, which an inline success message cannot.
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-silver-300 bg-white p-8 text-center shadow-lg shadow-navy-900/5">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Icon name="check" className="h-7 w-7" />
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-navy-900">
          Request received
        </h3>
        <p className="mt-2 text-sm text-silver-500">
          We reply to quote requests within one business day. If this is urgent,
          call us now and we will dispatch a technician.
        </p>
        <a
          href={site.phone.href}
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700"
        >
          <Icon name="phone" className="h-4 w-4" />
          {site.phone.display}
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-silver-300 bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-8">
      <h3 className="font-display text-xl font-bold text-navy-900 sm:text-2xl">
        {heading}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-silver-500">{blurb}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
          <Field label="Your name" name="name" required autoComplete="name" />
          <Field label="Company" name="company" autoComplete="organization" />
          <Field label="Email" name="email" type="email" required autoComplete="email" />
          <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
        </div>

        <Field
          label="Site location"
          name="location"
          placeholder="e.g. 123 Portage Ave, Winnipeg"
        />

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy-900">
            What do you need?
          </span>
          <select
            name="service"
            defaultValue={defaultService}
            className="w-full rounded-lg border border-silver-300 bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Security assessment">
              Commercial security assessment
            </option>
            <option value="Other">Something else</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy-900">
            How soon?
          </span>
          <select
            name="timeline"
            className="w-full rounded-lg border border-silver-300 bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
          >
            <option value="Planning">Planning — no fixed date</option>
            <option value="This month">This month</option>
            <option value="This week">This week</option>
            <option value="Urgent">Urgent — today if possible</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy-900">
            Details
          </span>
          <textarea
            name="message"
            rows={4}
            placeholder="Door types, how many openings, existing hardware, access hours…"
            className="w-full rounded-lg border border-silver-300 px-3.5 py-2.5 text-sm text-navy-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
          />
        </label>

        {status === "error" && (
          <p className="rounded-lg bg-red-600/10 px-3.5 py-2.5 text-sm text-red-700">
            {error} Please call us at {site.phone.display} instead.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-lg bg-navy-900 px-5 py-3.5 font-display text-base font-bold uppercase tracking-wide text-white transition hover:bg-navy-800 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Request my quote"}
        </button>

        <p className="text-center text-xs text-silver-500">
          Emergency? Call{" "}
          <a href={site.phone.href} className="font-semibold text-red-600 underline">
            {site.phone.display}
          </a>{" "}
          — answered 24/7.
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy-900">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-silver-300 px-3.5 py-2.5 text-sm text-navy-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />
    </label>
  );
}
