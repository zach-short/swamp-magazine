import type { Metadata } from "next";

import { dials } from "@/config/dials";
import { PlaceholderScreen } from "@/features/storefront";

export const metadata: Metadata = {
  title: "CONTACT — SWAMP MAGAZINE",
  // Placeholder copy has no business in a search index. Drop this line in the
  // same commit that writes the real page -- not before.
  robots: { index: false, follow: false },
};

// Stub. Unlike "/" and /product/*, this route carries no site-mode gate: it
// leaks nothing about an unreleased drop, and a footer link that redirects to
// the storefront reads as broken rather than as pending.
//
// The one stub with real content: the address is a placeholder
// (`dials.contactEmail`) but the mechanism is not, so replacing it is a
// one-line dial change rather than a rewrite.
export default function ContactPage() {
  return (
    <PlaceholderScreen title="CONTACT">
      <a
        href={`mailto:${dials.contactEmail}`}
        className="font-display text-[22px] tracking-[0.02em] text-brand-red transition-colors duration-200 hover:text-brand-yellow focus-visible:text-brand-yellow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red md:text-[26px]"
      >
        {dials.contactEmail.toUpperCase()}
      </a>
    </PlaceholderScreen>
  );
}
