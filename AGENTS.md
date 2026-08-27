# Agent instructions — darrynpasqua.com

This repo is the source for [darrynpasqua.com](https://darrynpasqua.com), the personal site of Darryn Pasqua. Static site built with [Zola](https://www.getzola.org) and the [Duckquill](https://duckquill.daudix.one) theme (git submodule), deployed to GitHub Pages via `.github/workflows/deploy.yml`.

## Reading the site as an agent

Don't scrape the HTML — the site publishes agent-friendly surfaces:

- `https://darrynpasqua.com/llms.txt` — site index
- `https://darrynpasqua.com/llms-full.txt` — full site in one file
- Every page has a markdown twin: `/index.md`, `/about.md`, `/projects.md`, `/colophon.md`, `/contact.md`, `/privacy.md`
- `/.well-known/ard.json` and `/.well-known/agent-skills/index.json` — machine-readable catalogs

## Working on the codebase

- Content lives in `content/*.md` (Zola TOML front matter). Pages set `path`, `description`, and `updated` — keep `updated` current when editing a page; it feeds `<lastmod>` in the sitemap.
- Templates in `templates/` override the Duckquill theme. `templates/partials/head.html` carries the JSON-LD, `og:type`, and markdown-alternate links — keep it in sync if the theme submodule is updated.
- Custom styling is in `static/burnished-brass.css` and `static/gallery.css`. Do not restyle the theme; the look is intentional.
- `scripts/generate_md_twins.py` runs in CI after `zola build` and generates the markdown twins, `llms-full.txt`, and the agent-skills index into `public/`. If you add a content page, it gets a twin automatically; if you add a shortcode-heavy page, the script falls back to extracting text from the rendered HTML.
- Build locally with Zola 0.18.x (the version CI pins); newer Zola rejects this config.
- The theme is a submodule — clone with `--recursive`.

## Constraints

- Never remove or weaken the AI-accessibility surfaces above.
- `robots.txt` welcomes answer-engine and user-triggered agents and opts out of training-only crawlers — preserve that policy.
- Conventional, descriptive commits.
