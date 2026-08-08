import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { winnipegLocations, manitobaLocations } from "@/data/locations";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(site.social).filter(([, v]) => v);

  return (
    <footer className="mt-auto bg-navy-950 text-silver-300">
      <div className="brand-rule h-1 w-full" />

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Logo dark />
            <p className="mt-4 text-sm leading-relaxed">
              Commercial locksmith services across Winnipeg and all of Manitoba
              since {site.founded}. Licensed, bonded and insured, with 24/7
              emergency dispatch.
            </p>
            <div className="mt-5 space-y-2.5 text-sm">
              <a href={site.phone.href} className="flex items-center gap-2.5 font-semibold text-white hover:text-blue-100">
                <Icon name="phone" className="h-4 w-4 text-red-500" />
                {site.phone.display}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 hover:text-white">
                <Icon name="mail" className="h-4 w-4 text-red-500" />
                {site.email}
              </a>
              {site.address.hasStorefront && (
                <p className="flex items-start gap-2.5">
                  <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.locality}, {site.address.region}{" "}
                    {site.address.postalCode}
                  </span>
                </p>
              )}
              <p className="flex items-start gap-2.5">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                <span>
                  Office: {site.hours.office}
                  <br />
                  Emergency: {site.hours.emergency}
                </span>
              </p>
            </div>
            {socials.length > 0 && (
              <div className="mt-5 flex gap-3">
                {socials.map(([k, v]) => (
                  <a
                    key={k}
                    href={v}
                    className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold capitalize hover:border-white/40 hover:text-white"
                  >
                    {k}
                  </a>
                ))}
              </div>
            )}
          </div>

          <FooterColumn title="Commercial Services">
            {services.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.shortName}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Industries We Serve">
            {industries.map((i) => (
              <FooterLink key={i.slug} href={`/industries/${i.slug}`}>
                {i.shortName}
              </FooterLink>
            ))}
          </FooterColumn>

          <div>
            <FooterColumn title="Service Areas">
              {winnipegLocations.slice(0, 7).map((l) => (
                <FooterLink key={l.slug} href={`/service-areas/${l.slug}`}>
                  {l.name}
                </FooterLink>
              ))}
              {manitobaLocations.slice(0, 4).map((l) => (
                <FooterLink key={l.slug} href={`/service-areas/${l.slug}`}>
                  {l.name}
                </FooterLink>
              ))}
              <FooterLink href="/service-areas">
                <span className="font-semibold text-white">All service areas →</span>
              </FooterLink>
            </FooterColumn>

            <h3 className="mt-8 font-display text-sm font-bold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/case-studies">Case Studies</FooterLink>
              <FooterLink href="/blog">Resources</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="text-silver-500">
            Licensed Manitoba security business · Bonded &amp; insured · ALOA
            member · WCB in good standing
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
        {title}
      </h3>
      <ul className="mt-3 space-y-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:text-white">
        {children}
      </Link>
    </li>
  );
}
