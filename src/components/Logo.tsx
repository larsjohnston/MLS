/**
 * Vector recreation of the Manitoba Lock & Safe shield mark.
 *
 * If you have the original artwork, drop an SVG at /public/logo.svg and swap
 * this component for an <Image />. This version is here so the site ships with
 * a crisp, theme-aware mark at every size.
 */
export function ShieldMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 74"
      className={className}
      role="img"
      aria-label="Manitoba Lock & Safe shield"
    >
      {/* white outline */}
      <path
        d="M32 1 L62 12 V35 C62 52 48 63 32 72 C16 63 2 52 2 35 V12 Z"
        fill="#ffffff"
      />
      {/* navy border */}
      <path
        d="M32 4 L59 14 V35 C59 50 46 60 32 68.5 C18 60 5 50 5 35 V14 Z"
        fill="#041E42"
      />
      {/* left half — aviator blue */}
      <path
        d="M32 9 L54.5 17.4 V35 C54.5 47.5 43.5 56.6 32 64 Z"
        fill="#AC162C"
      />
      <path
        d="M32 9 L9.5 17.4 V35 C9.5 47.5 20.5 56.6 32 64 Z"
        fill="#2A6BB0"
      />
      {/* centre division */}
      <rect x="31.2" y="9" width="1.6" height="55" fill="#041E42" opacity="0.55" />
      {/* keyhole */}
      <circle cx="32" cy="27" r="6" fill="#ffffff" stroke="#041E42" strokeWidth="1.1" />
      <path
        d="M29.6 31.5 L34.4 31.5 L33.1 46 L30.9 46 Z"
        fill="#ffffff"
        stroke="#041E42"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  dark = false,
  compact = false,
}: {
  className?: string;
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <ShieldMark className={compact ? "h-9 w-auto" : "h-11 w-auto"} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[0.72rem] font-semibold tracking-[0.16em] ${
            dark ? "text-silver-300" : "text-navy-900"
          }`}
        >
          MANITOBA
        </span>
        <span
          className={`font-display text-lg font-extrabold leading-tight tracking-tight sm:text-xl ${
            dark ? "text-white" : "text-navy-900"
          }`}
        >
          LOCK &amp; SAFE
        </span>
      </span>
    </span>
  );
}
