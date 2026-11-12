/**
 * Vector redraw of the Manitoba Lock & Safe logo supplied by the owner: a
 * navy-edged shield split blue (left) and red (right) with a white keyhole,
 * beside a heavy black two-line wordmark.
 *
 * If the original artwork file is available, add it at /public/logo.svg (or
 * .png) and swap this component for an <Image />.
 */
export function ShieldMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 74"
      className={className}
      role="img"
      aria-label="Manitoba Lock & Safe shield"
    >
      {/* thin navy outer line, then the white band */}
      <path
        d="M32 0 L63.2 11.3 V35 C63.2 52.8 48.6 64 32 73.3 C15.4 64 0.8 52.8 0.8 35 V11.3 Z"
        fill="#041E42"
      />
      <path
        d="M32 1.9 L61.4 12.6 V35 C61.4 51.6 47.6 62.4 32 71.2 C16.4 62.4 2.6 51.6 2.6 35 V12.6 Z"
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
        fill="#C8102E"
      />
      <path
        d="M32 9 L9.5 17.4 V35 C9.5 47.5 20.5 56.6 32 64 Z"
        fill="#0A5CA8"
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
      <ShieldMark className={compact ? "h-10 w-auto" : "h-12 w-auto"} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] font-black leading-none tracking-tight sm:text-lg ${
            dark ? "text-white" : "text-black"
          }`}
        >
          MANITOBA
        </span>
        <span
          className={`font-display text-[1.4rem] font-black leading-none tracking-tight sm:text-2xl ${
            dark ? "text-white" : "text-black"
          }`}
        >
          LOCK &amp; SAFE
        </span>
      </span>
    </span>
  );
}
