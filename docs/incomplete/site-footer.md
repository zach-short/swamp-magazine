# Site footer + placeholder pages

**STATUS — BUILT, 2026-09-21.** Gates green on the final tree: `bun run lint`,
`bun run build`, `bunx tsc --noEmit`, `bun run test` (93 passed). Verified in the
browser on desktop and at 375px.

Zach asked for "a footer with important links that are common on a site like
this with placeholders for now" — an about page, social links, an admin link.
Two decisions were his, taken in chat before any code:

1. **Stub routes, real links** — unwritten destinations get a minimal real page
   rather than an inert label or an `href="#"`. A footer that 404s is worse than
   no footer.
2. **Instagram only, no TikTok** — two accounts, Lalo's personal and the
   magazine's.

## What shipped

| File | What it is |
|---|---|
| `features/storefront/lib/footer-links.ts` | The link registry. Every destination is one line here. |
| `features/storefront/components/site-footer/site-footer.tsx` | The footer, shared by the landing, the product pages and the stubs. |
| `features/storefront/components/placeholder-screen/placeholder-screen.tsx` | One screen behind every unwritten destination. |
| `app/{about,contact,stockists,shipping,faq,privacy,terms}/page.tsx` | Seven stubs, all `robots: noindex`, all prerendered static. |

It keeps Direction A's footer spine exactly as `direction-a-handoff.md` par.5
specified it — 1px red-35% top rule, the marquee ticker, the byline — and hangs
the link columns off the middle. The ticker's CSS marquee stays the only motion
in the footer; no `Reveal` on navigation.

Three deliberate calls, so a later session does not "fix" them:

- **No site-mode gate on the stubs**, unlike `/` and `/product/*`. An about page
  or a privacy policy leaks nothing about an unreleased drop, and a legal page
  that 307s to the storefront reads as broken rather than as pending.
- **Not in `app/sitemap.ts`**, and every stub is `robots: noindex`. Placeholder
  copy has no business in a search index. Both come off in the same commit that
  writes the real page.
- **`ADMIN` sits in the fine-print row, not a column.** It is a door for one
  person, not a section of the site; `/admin` is already behind the Google
  allowlist, so linking it costs nothing.

## Still open — these are Zach's and Lalo's, not a session's

1. **The two Instagram handles are guesses.** `dials.instagramFounderHandle`
   (`lalofarro`) and `dials.instagramMagazineHandle` (`swampmagazine`) were
   invented here. A wrong handle is a dead link on every storefront page.
2. **`dials.contactEmail` (`hello@swampmagazine.com`) is a guess**, and no MX is
   set up on the domain — mail to it bounces silently today.
3. **All seven pages need real copy from Lalo.** Until then each carries
   `storefrontCopy.pagePending`, flagged INVENTED.
4. **Every footer label is INVENTED** — the founder's mockups have no footer at
   all. `footer-links.ts` says so at the top. Column headings (`THE MAGAZINE`,
   `ORDERS`, `FOLLOW`) are the most likely thing he'd want in his own words.
5. **`STOCKISTS` may not apply** if nothing is sold through third parties. It
   was included as a link common to a magazine's site; delete the row and the
   route if it never becomes true.
