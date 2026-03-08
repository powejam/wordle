# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running Locally

No build step required. Serve files directly:

```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

There is no package.json, no Node.js, and no test framework.

## Architecture

A static PWA with no external dependencies or build system.

**Key files:**
- `index.html` — markup and CSS only, loads game.js
- `game.js` — all game logic, word lists, UI wiring (~1590 lines)
- `sw.js` — service worker for offline caching (cache-first, same-origin only)
- `manifest.json` — PWA manifest for home screen installation
- `icon-192.png` / `icon-512.png` — app icons

### Game Logic (game.js)

- **Word lists**: Three sources combined into `ALL_VALID` Set:
  - `SOLUTIONS` (1,535 words) — the pool from which the target word is randomly chosen
  - `EXTRA_VALID` (~429 words) — common English words accepted as guesses but never chosen as targets
  - `UK_WORDS` (~10,529 words) — Collins/SOWPODS words for broader British English support
- **Custom words**: Players can add unrecognised 5-letter words via an "Add word" button on the "Not in word list" toast. Stored in `localStorage` under `wordle-custom-words`. Custom words are added to `ALL_VALID` (guess acceptance) but never to `SOLUTIONS` (target pool).
- **Random selection**: Uses `crypto.getRandomValues()` for unbiased word selection
- **`evaluate(guess, answer)`**: Core scoring function with correct duplicate-letter handling (two-pass: exact matches first, then positional)
- **`revealRow()`**: Staggered tile-flip animation (280ms per column)
- **Stats**: `localStorage` key `wordle-stats` stores `{ played, won, streak, maxStreak, dist }` where `dist` is an array of 6 guess-count buckets. Shape is validated on read.

### Keyboard Layout

Backspace is on the left, Enter on the right — matching the original NYT Wordle layout.

### Theming

Supports both dark and light mode via `@media (prefers-color-scheme: light)` with CSS custom properties. Dark mode is the default.

### Security Constraints

These must be preserved when modifying:

- **CSP** (`<meta>` tag): `default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'; manifest-src 'self'; connect-src 'self'; worker-src 'self'`
- **Referrer-Policy**: `no-referrer`
- **Permissions-Policy**: camera, microphone, geolocation, and interest-cohort all disabled
- **Service worker**: blocks all cross-origin requests; caches only same-origin assets
- **No external requests**: no CDN fonts, no analytics, no third-party scripts. System font stacks only.
- **innerHTML usage**: only for clearing elements (`""`) or building stats display from numeric values. Never pass user-supplied strings to innerHTML.

### Cache Versioning

When changing files, bump the version in both places:
- `sw.js`: `CACHE_NAME = "wordle-vX.Y"`
- `index.html`: `<script src="game.js?v=X.Y">`

### Deployment

GitHub Pages (main branch, root folder). All asset paths use `./` prefix for compatibility as both user site (`username.github.io`) and project site (`username.github.io/repo-name/`).
