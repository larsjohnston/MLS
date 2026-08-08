type IconProps = { name: string; className?: string };

const paths: Record<string, React.ReactNode> = {
  siren: (
    <>
      <path d="M12 3a5 5 0 0 0-5 5v5h10V8a5 5 0 0 0-5-5Z" />
      <path d="M4 18h16M6 13h12M12 3V1M4.5 6 3 4.9M19.5 6 21 4.9" />
      <path d="M5 18v3h14v-3" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0 5.3 5.2l-8 8a2.8 2.8 0 0 1-4-4l8-8-1.3-1.2Z M14.7 6.3 17.5 3.5" />
  ),
  key: (
    <>
      <circle cx="8" cy="8" r="4" />
      <path d="M11 11 21 21M17.5 17.5l2-2M14.5 14.5l2-2" />
    </>
  ),
  hierarchy: (
    <>
      <rect x="9" y="2" width="6" height="5" rx="1" />
      <rect x="2" y="16" width="6" height="5" rx="1" />
      <rect x="16" y="16" width="6" height="5" rx="1" />
      <path d="M12 7v5M5 16v-4h14v4" />
    </>
  ),
  card: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h4" />
    </>
  ),
  exit: (
    <>
      <path d="M14 3H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h9" />
      <path d="M10 12h11M17 8l4 4-4 4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  safe: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="11" cy="12" r="4" />
      <path d="M11 8v1M11 15v1M7 12h1M14 12h1M18 9v6" />
    </>
  ),
  door: (
    <>
      <path d="M4 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" />
      <path d="M2 21h20M14 12h.01" />
    </>
  ),
  cabinet: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M4 10h16M4 16h16M10 6.5h4M10 13h4M10 18.5h4" />
    </>
  ),
  keys: (
    <>
      <circle cx="7" cy="7" r="3.2" />
      <path d="M9.4 9.4 20 20M17 17l1.8-1.8M14 14l1.8-1.8" />
      <circle cx="7" cy="16" r="2" />
    </>
  ),
  building: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M7 7h3M14 7h3M7 11h3M14 11h3M7 15h3M14 15h3M10 21v-3h4v3" />
    </>
  ),
  apartment: (
    <>
      <path d="M3 21V8l7-5 7 5v13" />
      <path d="M17 21V11h4v10M2 21h20M7 11h2M11 11h2M7 15h2M11 15h2M9 21v-3h2v3" />
    </>
  ),
  store: (
    <>
      <path d="M3 9 4.5 4h15L21 9" />
      <path d="M3 9v11h18V9" />
      <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0M9 20v-6h6v6" />
    </>
  ),
  office: (
    <>
      <path d="M4 21V6l8-3 8 3v15" />
      <path d="M2 21h20M9 9h.01M12 9h.01M15 9h.01M9 13h.01M12 13h.01M15 13h.01M10.5 21v-4h3v4" />
    </>
  ),
  warehouse: (
    <>
      <path d="M2 21V9l10-5 10 5v12" />
      <path d="M6 21v-8h12v8M6 17h12M2 21h20" />
    </>
  ),
  restaurant: (
    <>
      <path d="M6 2v8a3 3 0 0 0 6 0V2M9 10v12" />
      <path d="M17 2c-1.5 1.5-2 3.5-2 6 0 2 1 3 2 3v11" />
    </>
  ),
  health: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  school: (
    <>
      <path d="m12 3 10 5-10 5L2 8Z" />
      <path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5M20 9v6" />
    </>
  ),
  government: (
    <>
      <path d="m12 3 9 5H3Z" />
      <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18" />
    </>
  ),
  church: (
    <>
      <path d="M12 2v6M9.5 4.5h5" />
      <path d="m12 8-6 4v9h12v-9Z" />
      <path d="M3 21h18M10 21v-4h4v4" />
    </>
  ),
  construction: (
    <>
      <path d="M3 20h18M5 20V9l7-5 7 5v11" />
      <path d="m8 12 8 5M16 12l-8 5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  star: (
    <path d="m12 2 3 6.5 7 .9-5 4.8 1.2 7L12 17.8 5.8 21.2 7 14.2 2 9.4l7-.9Z" />
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m8.5 14-1.5 8 5-3 5 3-1.5-8" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h11v11H2zM13 10h4l4 4v3h-8" />
      <circle cx="6.5" cy="18" r="2" />
      <circle cx="17.5" cy="18" r="2" />
    </>
  ),
};

export function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const d = paths[name] ?? paths.shield;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {d}
    </svg>
  );
}
