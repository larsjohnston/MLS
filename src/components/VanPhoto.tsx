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
    <div className="bg-white p-2 shadow-lg shadow-black/20"><div className="bg-silver-100 p-6 sm:p-8">
      <svg
        viewBox="0 0 480 230"
        role="img"
        aria-label={`Drawing of a ${site.name} service van: white with diagonal blue and black stripes and a red cab`}
        className="h-auto w-full"
      >
        <defs>
          <clipPath id="van-body">
            <path d="M44 60Q44 48 56 48H316q14 0 24 12l50 62 40 14q12 4 12 16v34H44Z" />
          </clipPath>
        </defs>
        {/* ground */}
        <path d="M16 213h448" stroke="#8E9090" strokeWidth="3" strokeLinecap="round" />
        {/* wrapped body */}
        <g clipPath="url(#van-body)">
          <rect x="40" y="40" width="410" height="150" fill="#F4F6F8" />
          {/* rear stripes */}
          <path d="M44 62v32l100 106h30Z" fill="#0A5CA8" />
          <path d="M44 108v18l72 74h18Z" fill="#111827" />
          <path d="M44 138v22l38 40h20Z" fill="#0A5CA8" />
          {/* centre stripes */}
          <path d="M212 40h10l146 160h-10Z" fill="#111827" />
          <path d="M236 40h40l146 160h-40Z" fill="#111827" />
          {/* red cab */}
          <path d="M292 40h188v160h-42Z" fill="#C8102E" />
          {/* sill and front bumper */}
          <rect x="40" y="176" width="410" height="14" fill="#111827" />
          <path d="M404 152h46v38h-46Z" fill="#111827" />
          {/* cab window */}
          <path d="M340 70h8l36 46h-44Z" fill="#1F2937" />
          <path d="M344 76h2l26 34h-28Z" fill="#DCEAF7" opacity="0.35" />
          {/* shield + wordmark, set on the diagonal like the real wrap */}
          <g transform="translate(118 70)">
            <path d="M0 -14 14 -9v11c0 9-7 14-14 18-7-4-14-9-14-18V-9Z" fill="#041E42" />
            <path d="M0 -11 11 -7v9c0 7-5 11-11 15Z" fill="#C8102E" />
            <path d="M0 -11 -11 -7v9c0 7 5 11 11 15Z" fill="#0A5CA8" />
            <circle cx="0" cy="-3" r="3" fill="#fff" />
            <path d="M-1.2 -1h2.4l-.6 8h-1.2Z" fill="#fff" />
          </g>
          <g transform="translate(152 74) rotate(40)" fill="#111827" className="font-display" fontWeight="900">
            <text x="0" y="0" fontSize="15">MANITOBA</text>
            <text x="-6" y="21" fontSize="21">LOCK &amp; SAFE</text>
          </g>
        </g>
        {/* headlight */}
        <rect x="426" y="140" width="14" height="8" rx="3" fill="#F6C945" />
        {/* wheels */}
        {[118, 374].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="188" r="25" fill="#111827" />
            <circle cx={cx} cy="188" r="11" fill="#C8CBCD" />
          </g>
        ))}
      </svg>
      </div>
    </div>
  );
}
