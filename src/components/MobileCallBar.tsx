import Link from "next/link";
import { site } from "@/data/site";
import { Icon } from "./Icon";

/** Fixed bottom bar on small screens — click-to-call is the primary action. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-800 bg-navy-900/97 backdrop-blur sm:hidden">
      <div className="grid grid-cols-2 gap-2 p-2.5">
        <a
          href={site.phone.href}
          className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-3 py-3 font-display text-sm font-bold uppercase tracking-wide text-white"
        >
          <Icon name="phone" className="h-4 w-4" />
          Call 24/7
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 rounded-lg border border-white/30 px-3 py-3 font-display text-sm font-bold uppercase tracking-wide text-white"
        >
          Get a quote
        </Link>
      </div>
    </div>
  );
}
