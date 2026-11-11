import Image from "next/image";
import { site } from "@/data/site";

/**
 * Service van picture. Shows the real photo once `media.vanPhoto` is set in
 * src/data/site.ts; until then it draws a simple placeholder van in the brand
 * colours so the page still looks finished.
 */
export function VanPhoto() {
  const { vanPhoto, vanPhotoAlt } = site.media as {
    vanPhoto: string;
    vanPhotoAlt: string;
  };

  if (vanPhoto) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-silver-300">
        <Image
          src={vanPhoto}
          alt={vanPhotoAlt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-silver-300 bg-silver-100 p-6 sm:p-10">
      <svg
        viewBox="0 0 480 220"
        role="img"
        aria-label={`Illustration of a ${site.name} mobile service van`}
        className="h-auto w-full"
      >
        {/* ground */}
        <path d="M20 196h440" stroke="#8E9090" strokeWidth="3" strokeLinecap="round" />
        {/* body */}
        <path
          d="M40 60a14 14 0 0 1 14-14h236a14 14 0 0 1 14 14v112H40Z"
          fill="#041E42"
        />
        {/* cab */}
        <path
          d="M304 78h62a16 16 0 0 1 13 7l44 58a16 16 0 0 1 3 10v19H304Z"
          fill="#004C97"
        />
        {/* windscreen + side window */}
        <path d="M322 92h40a6 6 0 0 1 5 3l28 38h-73Z" fill="#DCE9F7" />
        {/* stripe */}
        <path d="M40 142h386v10H40Z" fill="#AC162C" />
        {/* bumper + lights */}
        <rect x="34" y="166" width="398" height="10" rx="5" fill="#8E9090" />
        <rect x="418" y="146" width="10" height="12" rx="3" fill="#F6C945" />
        {/* door line + handle */}
        <path d="M304 60v112" stroke="#02132A" strokeWidth="2" />
        <rect x="312" y="140" width="16" height="4" rx="2" fill="#DCE9F7" />
        {/* lettering */}
        <text
          x="172"
          y="92"
          textAnchor="middle"
          fill="#FFFFFF"
          className="font-display"
          fontWeight="800"
          fontSize="26"
          letterSpacing="1"
        >
          MANITOBA LOCK &amp; SAFE
        </text>
        <text
          x="172"
          y="122"
          textAnchor="middle"
          fill="#DCE9F7"
          className="font-display"
          fontWeight="700"
          fontSize="20"
          letterSpacing="1.5"
        >
          {site.phone.display}
        </text>
        {/* wheels */}
        {[110, 362].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="176" r="24" fill="#02132A" />
            <circle cx={cx} cy="176" r="10" fill="#8E9090" />
          </g>
        ))}
      </svg>
    </div>
  );
}
