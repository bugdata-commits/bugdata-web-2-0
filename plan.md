# BugData Web 2.0 — Implementation & Design Plan

## Scope

Build a separate, reviewable premium website prototype for BugData Investments. The current `bugdata-investments-website` site remains untouched. This prototype demonstrates a world-class homepage experience for Zimbabwean businesses and is mirrored in a public GitHub repository for review before any decision to replace the live site.

## Implementation approach

- Use a lightweight static web application with semantic HTML, CSS, and vanilla JavaScript so the first page loads quickly on mobile networks and does not require a database or server capability.
- Use a simple local development server on the managed Webdev port 3000 and serve `/manus-routes.json` as a static route manifest.
- Keep public content in initial HTML, not only in a client-rendered shell, so the prototype is crawlable and previewable without JavaScript.
- Build one polished homepage first, with anchor-based sections and progressive disclosure for technical detail. Add service and client-portal routes only as lightweight prototype destinations if needed.
- Use original BugData diagrams and UI motifs instead of copied screenshots, branded layouts, or AI-generated generic technology art.
- Use WhatsApp as the primary low-friction contact action, with phone/email alternatives and a short assessment form that does not claim to submit to a backend yet.
- Add a static `sitemap.xml`, `robots.txt`, manifest, favicon treatment, accessible error state, and route metadata after the core experience is stable.

## Project structure

```text
bugdataweb20/
├── index.html              # premium homepage and initial SEO content
├── styles.css              # tokens, layout, responsive states, motion preferences
├── app.js                  # menu, accordions, form-to-WhatsApp interaction, UI state
├── manus-routes.json       # public route declarations for Webdev Preview
├── sitemap.xml             # intended public routes
├── robots.txt              # crawler policy
├── manifest.webmanifest    # install/share metadata
├── plan.md                 # this implementation and design plan
└── TODO.md                 # outcome-based delivery checklist
```

## Design alternatives considered

- **Editorial Signal Atlas** — 0.08 probability. A warm editorial studio with map-like diagrams, measured proof, and local business context.
- **Dark Systems Lab** — 0.06 probability. A high-contrast technical canvas with glowing system flows and dense product-like modules.
- **Quiet Executive Console** — 0.04 probability. A restrained premium consulting interface with white space, package clarity, and boardroom-level proof.

### Chosen style: Editorial Signal Atlas

**Design Movement:** Contemporary African editorial technology studio: premium but grounded, combining the confidence of a systems consultancy with the warmth of a local growth partner.

**Core Principles:** Make the outcome obvious; show the work as a system; use proof with context; keep every interaction useful on a phone.

**Color Philosophy:** Start with warm stone and deep charcoal rather than an all-black SaaS canvas. Use BugData mint as the signature signal color for growth and action, a muted clay accent for human/local emphasis, and soft blue only for system status. Color should carry meaning and remain legible in high contrast.

**Layout Paradigm:** A left-anchored editorial narrative with an offset “signal board” visual on the right. Sections use staggered bands, rails, chapter markers, and asymmetric proof blocks instead of a repeated centered card grid.

**Signature Elements:**

1. A “signal board” visual connecting Discover → Respond → Deliver → Grow.
2. Small context tags such as `HARARE / SME GROWTH`, `MEASURED / MONTHLY`, and `WHATSAPP-FIRST`.
3. Proof cards written like field notes, with a clear metric scope and date placeholder rather than invented outcomes.

**Interaction Philosophy:** Every interaction should clarify the offer or reduce friction. Use one focused menu, one assessment path, native accordions for detail, and direct WhatsApp handoff. Avoid decorative carousels and interactions that hide essential content.

**Animation:** Use short opacity/translate transitions for section entry and hover feedback only. Respect `prefers-reduced-motion`; no autoplay video, simulated AI typing, or motion-dependent meaning. The signal board can gently draw its connecting line on supported motion, with a static equivalent always visible.

**Typography System:** Use `Inter` or system UI for readable body copy and `Space Grotesk` for display headings if available, with fallbacks. Use sentence case, compact overlines, large but restrained headlines, and generous line height. Keep the longest hero line under roughly 14 words on mobile.

**Brand Essence:** Practical growth infrastructure for Zimbabwean businesses — local, measurable, and hands-on. Personality: clear, resourceful, grounded.

**Brand Voice:** Direct, warm, commercially honest. Example lines: “Turn more local attention into dependable growth.” and “We make the system visible, then make it work.” Avoid vague superlatives and unsupported rankings.

**Wordmark & Logo:** Use the existing BugData mark where available, paired with a compact wordmark and a small “20” edition marker only inside the prototype label—not as a permanent public brand claim.

**Signature Brand Color:** BugData mint `#35E3B8`, used as the unmistakable action/signal color against charcoal and stone.

## Homepage experience

1. Utility strip with “Zimbabwean growth systems / built for the way local businesses sell” and a direct WhatsApp route.
2. Header with Services, Approach, Results, Insights, Contact, a Client portal text route, and the primary `Book an assessment` action.
3. Hero: “Turn more local attention into dependable growth.” Supporting text names AI automation, local SEO, hosting, and digital growth. Primary CTA is `Book an assessment`; secondary is `See how we help`.
4. Signal board: Diagnose → Build → Launch → Improve, with small operational annotations.
5. Four service pathways: AI Automation, Local SEO, Hosting & Reliability, Digital Growth.
6. “Choose your goal” selector: Get found locally, Automate work, Improve reliability, Grow demand.
7. Proof/field notes section with a transparent `What we measure` pattern instead of invented case-study statistics.
8. Packages/process section with three clearly scoped starting packages: Visibility, Automation, Growth Operations.
9. Technical reassurance: backups, security, support, integrations, and low-bandwidth-friendly delivery.
10. Insights preview with Zimbabwe-focused topics and a dated delivery log treatment.
11. Final assessment CTA and contact details.

## Mobile behavior

- Sticky compact header with logo, accessible menu button, and one booking action.
- Focus-managed mobile menu with large touch targets and a separate client portal route.
- Hero reduced to one headline, two supporting lines, one primary CTA, one secondary action, and a static signal board.
- Goal selector uses full-width stacked buttons.
- Accordions reveal technical detail without hiding the main CTA.
- Assessment handoff includes a short form and direct WhatsApp fallback.

## Build workflow

1. Create outcome-based `TODO.md` after plan approval.
2. Configure host-managed diagnostics for HTML, CSS, and JavaScript before the first application-code batch.
3. Implement the homepage structure and design tokens.
4. Add interaction, accessibility states, metadata, and route manifest.
5. Start the port-3000 development service and verify representative routes.
6. Capture desktop and mobile Preview screenshots for visual QA.
7. Run a read-only requirements review, fix confirmed issues, and recheck affected routes.
8. Commit the prototype to the public GitHub repository named `bugdata-web-2-0`; keep the managed Webdev project checkpoint in its own project origin.
9. Keep the current live site unchanged while the user reviews the Webdev Preview and public source repository.

## Constraints

- Do not modify the existing live-site repository.
- Do not copy protected brand assets, wording, exact layouts, logos, screenshots, or animations from Paystack, Stripe, Linear, Vercel, or Framer.
- Do not invent client logos, rankings, revenue, lead volume, uptime, ROI, or performance statistics.
- Keep the prototype usable on low-bandwidth mobile connections.
- Keep the first version focused enough to review quickly; detailed service routes and a real lead backend are follow-on work.
