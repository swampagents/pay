# SWAMP pay — Marketing Website

Privacy-first payment terminal marketing site built with the **AHA stack**: Astro + HTMX + Alpine.js, styled with TailwindCSS.

## AHA Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| UI State | **Alpine.js** | Nav toggle, tabs, accordion, small reactive state |
| Interactivity | **HTMX** | Partial page updates, dynamic content loading |
| Framework | **Astro** | Routing, layouts, static generation, content collections |
| Styling | **TailwindCSS v4** | Utility-first CSS with custom design tokens |

Zero client-side SPA architecture. Progressive enhancement throughout.

## Quick Start

```bash
npm install
npm run dev       # Development server at localhost:4321
npm run build     # Static build to ./dist
npm run preview   # Preview production build
```

## Project Structure

```
src/
├── layouts/
│   └── Base.astro          # Root layout with SEO, OG, font loading
├── components/
│   ├── Nav.astro           # Fixed nav with Alpine mobile toggle
│   ├── Footer.astro        # Site footer
│   ├── Hero.astro          # Full-viewport hero with terminal typewriter
│   ├── ProductOverview.astro
│   ├── PrivacyPositioning.astro
│   ├── DeviceShowcase.astro # Alpine tabs for terminal/mobile
│   ├── CryptoWallet.astro
│   ├── HowItWorks.astro
│   ├── ForRetailers.astro
│   ├── ForDevelopers.astro  # HTMX-loaded code examples
│   └── CTASection.astro
├── pages/
│   ├── index.astro         # Landing page
│   ├── devices.astro       # Hardware + mobile SDK
│   ├── privacy.astro       # Privacy architecture
│   ├── developers.astro    # API docs + SDK examples
│   └── about.astro         # Mission + timeline + contact
├── content/                # Astro content collections
│   ├── content.config.ts
│   ├── features/           # Product feature entries
│   ├── devices/            # Device specification entries
│   └── faq/                # FAQ entries
├── styles/
│   └── global.css          # Tailwind config, design tokens, effects
public/
├── fonts/                  # Self-hosted woff2 fonts
├── partials/               # HTMX HTML fragments
│   ├── device-terminal.html
│   ├── device-faq.html
│   ├── code-example-transaction.html
│   └── code-example-charge.html
└── favicon.svg
```

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `midnight` | `#050a05` | Primary background |
| `bunker` | `#0a0f0a` | Secondary background |
| `jungle` | `#0f1f0f` | Tertiary / card background |
| `phosphor` | `#33ff33` | Primary accent (CRT green) |
| `amber` | `#d4a017` | Warning / CTA accent |
| `bone` | `#d4d4c8` | Body text |
| `smoke` | `#a0a0a0` | Secondary text |

### Typography

- **Display**: Share Tech Mono — headings, labels
- **Mono**: IBM Plex Mono — code, technical text
- **Body**: Inter — paragraphs, descriptions

### Effects (CSS classes)

- `.scanlines` — faint CRT scanline overlay
- `.tactical-grid` / `.tactical-grid-dense` — grid background
- `.crt-glow` / `.crt-glow-amber` — text glow effect
- `.terminal-border` — terminal window border + shadow
- `.terminal-cursor` — blinking block cursor
- `.stamp` — military stamp label style
- `.dossier-line` — dashed separator line
- `.section-label` — standardized section heading

### Buttons

- `.btn-primary` — solid phosphor green
- `.btn-secondary` — outlined phosphor green
- `.btn-amber` — solid amber CTA

## HTMX Integration

HTMX loads HTML partials from `/partials/` for:
- Device specification panels (`hx-trigger="revealed"`)
- FAQ accordion content (progressive enhancement)
- Code example blocks on the developer page

All HTMX-loaded content has inline fallback HTML that displays without JavaScript.

## Alpine.js Integration

Alpine handles:
- Mobile navigation toggle with animated hamburger
- Tab switching (device types, SDK language selection)
- FAQ accordion open/close with `x-collapse`
- Hero terminal typewriter animation

## Extending the Site

### Add a new page

1. Create `src/pages/your-page.astro`
2. Import and wrap with `Base` layout
3. Add to `navLinks` in `Nav.astro`

### Add content collection entries

Drop JSON files into the appropriate `src/content/` subdirectory. Schema validation is defined in `src/content.config.ts`.

### Add HTMX partials

Place HTML fragments in `public/partials/`. Reference them with `hx-get="/partials/your-partial.html"` and provide inline fallback content.

### Modify the design system

All design tokens live in `src/styles/global.css` under `@theme`. Tailwind v4 automatically generates utility classes from theme tokens.
