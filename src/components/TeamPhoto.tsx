import Image from "next/image";
import { site } from "@/data/site";
import { Icon } from "./Icon";

/**
 * Renders the team photograph once one is supplied in src/data/site.ts
 * (`media.teamPhoto`). Until then it shows a clearly-marked placeholder rather
 * than a broken image, so the layout is already built for the real photo.
 */
export function TeamPhoto() {
  const { teamPhoto, teamPhotoAlt } = site.media;

  if (!teamPhoto) {
    return (
      <div className="flex aspect-[16/9] w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-silver-300 bg-silver-100 p-8 text-center">
        <Icon name="truck" className="h-10 w-10 text-silver-500" />
        <p className="mt-3 font-display text-lg font-bold text-navy-900">
          Team photo goes here
        </p>
        <p className="mt-1 max-w-md text-sm text-silver-500">
          A real photo of the crew in front of the vehicles outperforms stock
          imagery on every trust metric there is. Add the file to{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-xs">/public</code>{" "}
          and set{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-xs">
            media.teamPhoto
          </code>{" "}
          in <code className="rounded bg-white px-1.5 py-0.5 text-xs">src/data/site.ts</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-silver-300">
      <Image
        src={teamPhoto}
        alt={teamPhotoAlt}
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover"
        priority={false}
      />
    </div>
  );
}
