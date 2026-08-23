# Visto site

The marketing site + user documentation for **Visto · 拓屏** (turn an
iPhone/iPad into a second screen for your Mac/Windows PC), built with
**Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + next-intl**.
Bilingual (简体中文 / English), dark mode, fully static-exportable.

Structured after TuneSync-Site.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000  (served from "/")
```

To preview the GitHub Pages build locally (with the `/Visto-Site` base path),
mount `out/` under a matching path — exactly how Pages serves the repo:

```bash
BASE_PATH=/Visto-Site pnpm build
rm -rf /tmp/visto-serve && mkdir -p /tmp/visto-serve
ln -s "$PWD/out" /tmp/visto-serve/Visto-Site
cd /tmp/visto-serve && python3 -m http.server 8080
# open http://localhost:8080/Visto-Site/
```

## Deploy to GitHub Pages

Automated via `.github/workflows/deploy-pages.yml`: on every push to `main`
(or manual dispatch) the workflow installs deps, builds with
`BASE_PATH=/Visto-Site` and publishes `out/` to GitHub Pages.

One-time repository setup (GitHub repo **Settings → Pages**):

1. **Source**: `GitHub Actions` (not “Deploy from a branch”)
2. **Settings → Actions → General → Workflow permissions**: `Read and write`

The site then lives at **`https://<user>.github.io/Visto-Site/`**.
Private repos need a paid plan for Pages; flip the repo public when ready.

You can also deploy from your machine with `pnpm deploy`
(`scripts/deploy-gh-pages.mjs`, builds and pushes a `gh-pages` branch).

> The base path `/Visto-Site` is derived from the repo name. For a custom
> domain, build with `BASE_PATH="" pnpm build` (served from the root).

## Structure

```
src/
├── app/[locale]/            # localized routes (zh-CN, en)
│   ├── page.tsx             # home (feature rows + roadmap + download)
│   ├── features/            # feature deep-dives
│   ├── docs/                # getting started, host/receiver guides, USB, spec
│   ├── privacy/ support/    # legal + help pages
├── components/
│   ├── site/                # Header, Footer, Logo, LangSwitcher, ThemeToggle
│   ├── marketing/           # Hero, FeatureGrid/Row, Roadmap, Mocks, CTA
│   └── docs/                # Sidebar, DocsArticle, Callout/Steps/etc.
├── lib/links.ts             # store/download URLs (null → "coming soon" cards)
├── lib/assets.ts            # basePath-aware asset URLs
i18n/messages/{zh-CN,en}.json  # all copy lives here
public/                      # static assets (og.png)
```

## Screenshots / media

There are no real product screenshots yet: `PhoneMockup` renders branded
placeholder frames with CSS mocks (`components/marketing/Mocks.tsx`).
When screenshots exist, drop them into `public/screenshots/` and pass the
`screenshot` prop on `FeatureRow`.

## Releasing the app

When the Visto apps ship, fill in the URLs in `src/lib/links.ts` — the
header, hero, CTA and download cards switch from “coming soon” to live
links automatically.
