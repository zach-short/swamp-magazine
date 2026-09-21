import type { Metadata } from "next";

import { PlaceholderScreen } from "@/features/storefront";

export const metadata: Metadata = {
  title: "STOCKISTS — SWAMP MAGAZINE",
  // Placeholder copy has no business in a search index. Drop this line in the
  // same commit that writes the real page -- not before.
  robots: { index: false, follow: false },
};

// Stub. Unlike "/" and /product/*, this route carries no site-mode gate: it
// leaks nothing about an unreleased drop, and a footer link that redirects to
// the storefront reads as broken rather than as pending.
export default function StockistsPage() {
  return <PlaceholderScreen title="STOCKISTS" />;
}
