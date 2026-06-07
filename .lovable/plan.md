## Goal

Recreate the uploaded Atlas landing page (Nav, Hero, LogoStrip, Features, HowItWorks, Showcase, Careers, CTA Footer) inside this TanStack Start project at `/`, matching the original 1:1, and make it render cleanly when embedded in a 1440×900 iframe.

## Approach

The original is a static HTML + Babel-in-browser app with 4 JSX files. Instead of shipping Babel at runtime, port the source into proper React/TSX modules — the rendered output stays identical.

### Files to create

- `src/styles/atlas.css` — exact copy of `styles.css` + `components.css`, with iframe fixes (see below). Imported from the route.
- `src/components/atlas/Nav.tsx`
- `src/components/atlas/Hero.tsx` (Hero + ChatInput + LogoStrip)
- `src/components/atlas/Sections.tsx` (Features, HowItWorks, Showcase, Careers, CtaFooter)
- `src/components/atlas/BrandMark.tsx`
- `src/components/atlas/useReveal.ts` — IntersectionObserver scroll-reveal hook
- `src/routes/index.tsx` — replace placeholder; render `<AtlasLanding />`; set proper `<head>` title/description/OG.

Tweaks panel is dropped (it's a prototype-host-only tool, not part of the public landing page). Accent/bg-tone CSS variables stay at their defaults in CSS.

### Iframe / 1440×900 embedding fixes

Applied in `atlas.css` and component markup:

- No `100vh` / `100svh` / `100dvh` / `h-screen` anywhere. Hero uses `min-height: clamp(700px, 100%, 1000px)` with a fixed `min-height: 900px` floor; sections use natural content height.
- `html, body, #root` get `overflow-x: hidden` only (keep `overflow-y: auto`, never `hidden`). No scroll-hijack JS.
- `.bg-field` / `.bg-noise` stay `position: fixed; inset: 0` but with `pointer-events: none` (already the case) — fine inside iframes.
- Hero has no images, but any `<img>` (logo strip uses inline SVGs only) gets explicit `width`/`height` attributes and `loading="eager"` where above-the-fold.
- No `X-Frame-Options` / CSP `frame-ancestors` headers added — the app does not set any, so embedding remains allowed.
- Verify at exactly 1440×900: no horizontal scrollbar (max content width is 1120px + 28px padding), vertical scroll works, all sections reachable.

### Fonts

Keep the Fontshare `@import` for Satoshi at the top of `atlas.css` (same as original).

### What stays identical

- All copy, section order, SVG icons, mini-graph SVGs, gradients, colors, spacing, nav pill, hero composition, chat input mock, logo strip, feature cards, how-it-works steps, showcase, careers, footer.

## Out of scope

- No backend, no Lovable Cloud, no auth.
- No Tweaks panel (host-only dev tool).
- No design changes — visual parity with the uploaded HTML.
