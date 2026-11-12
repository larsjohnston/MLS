"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

type MenuKey = "services" | "industries" | "company" | null;

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Resources" },
];

export function Header() {
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey>(null);
  const pathname = usePathname();

  // Close every menu when the route changes — adjusting state during render
  // rather than in an effect avoids a cascading re-render.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setMobileOpen(false);
    setMobileSection(null);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* utility bar */}
      <div className="hidden bg-navy-900 text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-[0.8rem]">
          <p className="font-semibold text-white">
            Proudly Serving Winnipeg &amp; Surrounding Area Since {site.founded}.
          </p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2 text-silver-300">
              <Icon name="clock" className="h-4 w-4 text-blue-500" />
              {site.hours.office}
            </span>
            <a
              href={site.phone.href}
              className="flex items-center gap-2 font-semibold text-white hover:text-blue-100"
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-silver-300/70 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" aria-label={`${site.name} home`}>
            <Logo />
          </Link>

          {/* desktop nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            onMouseLeave={() => setOpen(null)}
          >
            <NavDropdown
              label="Services"
              isOpen={open === "services"}
              onToggle={() => setOpen(open === "services" ? null : "services")}
              onHover={() => setOpen("services")}
            >
              <div className="grid w-[42rem] grid-cols-2 gap-1 p-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-silver-100"
                  >
                    <Icon
                      name={s.icon}
                      className={`mt-0.5 h-5 w-5 shrink-0 ${
                        s.emergency ? "text-red-600" : "text-blue-600"
                      }`}
                    />
                    <span>
                      <span className="block text-sm font-semibold text-navy-900">
                        {s.shortName}
                      </span>
                      <span className="block text-xs text-silver-500">
                        {s.name}
                      </span>
                    </span>
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="col-span-2 mt-1 flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800"
                >
                  View all commercial services
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </NavDropdown>

            <NavDropdown
              label="Industries"
              isOpen={open === "industries"}
              onToggle={() => setOpen(open === "industries" ? null : "industries")}
              onHover={() => setOpen("industries")}
            >
              <div className="grid w-[34rem] grid-cols-2 gap-1 p-3">
                {industries.map((i) => (
                  <Link
                    key={i.slug}
                    href={`/industries/${i.slug}`}
                    className="flex items-center gap-3 rounded-lg p-2.5 text-sm font-medium text-navy-900 hover:bg-silver-100"
                  >
                    <Icon name={i.icon} className="h-5 w-5 shrink-0 text-blue-600" />
                    {i.shortName}
                  </Link>
                ))}
              </div>
            </NavDropdown>

            <NavLink href="/service-areas">Service Areas</NavLink>

            <NavDropdown
              label="Company"
              isOpen={open === "company"}
              onToggle={() => setOpen(open === "company" ? null : "company")}
              onHover={() => setOpen("company")}
            >
              <div className="w-56 p-2">
                {companyLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-900 hover:bg-silver-100"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </NavDropdown>

            <NavLink href="/contact">Contact</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="order-2 hidden rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700 sm:inline-flex"
            >
              Request Service
            </Link>
            <a
              href={site.phone.href}
              className="order-1 hidden items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-navy-800 sm:inline-flex"
            >
              Call Now
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="order-3 rounded-lg border border-silver-300 p-2.5 text-navy-900 lg:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-blue-600" />

      {/* mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[73px] z-40 overflow-y-auto bg-white lg:hidden">
          <nav className="px-4 py-4">
            <MobileGroup
              label="Services"
              open={mobileSection === "services"}
              onToggle={() =>
                setMobileSection(mobileSection === "services" ? null : "services")
              }
            >
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="block py-2 text-sm text-navy-800">
                  {s.shortName}
                </Link>
              ))}
              <Link href="/services" className="block py-2 text-sm font-semibold text-blue-600">
                All services →
              </Link>
            </MobileGroup>

            <MobileGroup
              label="Industries"
              open={mobileSection === "industries"}
              onToggle={() =>
                setMobileSection(mobileSection === "industries" ? null : "industries")
              }
            >
              {industries.map((i) => (
                <Link key={i.slug} href={`/industries/${i.slug}`} className="block py-2 text-sm text-navy-800">
                  {i.shortName}
                </Link>
              ))}
              <Link href="/industries" className="block py-2 text-sm font-semibold text-blue-600">
                All industries →
              </Link>
            </MobileGroup>

            {[
              { href: "/service-areas", label: "Service Areas" },
              ...companyLinks.filter((l) => l.href !== "/service-areas"),
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block border-b border-silver-300/60 py-3.5 font-display text-base font-semibold uppercase tracking-wide text-navy-900"
              >
                {l.label}
              </Link>
            ))}

            <div className="mt-6 space-y-3 pb-24">
              <a
                href={site.phone.href}
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-4 text-base font-medium text-white"
              >
                <Icon name="phone" className="h-5 w-5" />
                {site.phone.display}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-lg bg-red-600 px-4 py-4 text-base font-medium text-white"
              >
                Request Service
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-3 py-2 text-sm font-medium uppercase tracking-wide text-ink hover:bg-silver-100"
    >
      {children}
    </Link>
  );
}

function NavDropdown({
  label,
  isOpen,
  onToggle,
  onHover,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  onHover: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative" onMouseEnter={onHover}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium uppercase tracking-wide text-ink hover:bg-silver-100"
      >
        {label}
        <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 transition ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-1 overflow-hidden rounded-xl border border-silver-300 bg-white shadow-xl shadow-navy-900/10">
          {children}
        </div>
      )}
    </div>
  );
}

function MobileGroup({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-silver-300/60">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3.5 font-display text-base font-semibold uppercase tracking-wide text-navy-900"
      >
        {label}
        <svg viewBox="0 0 24 24" className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && <div className="pb-3 pl-1">{children}</div>}
    </div>
  );
}
