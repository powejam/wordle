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

This is a **single-file PWA** — the entire game lives in `index.html` (~890 lines) with embedded CSS and JavaScript. There are no external dependencies, no build system, and no separate source files.

**Key files:**
- `index.html` — complete game (markup, styles, logic)
- `sw.js` — service worker for offline caching (cache-first strategy)
- `manifest.json` — PWA manifest for home screen installation

### Game Logic (index.html, JS section ~line 388+)

- **Word lists**: `SOLUTIONS` array (1,155 daily answers) and `EXTRA_VALID` Set (~800 valid-but-not-answer words), combined into `ALL_VALID`
- **Random selection**: Uses `crypto.getRandomValues()` for unbiased word selection
- **`evaluate(guess, answer)`**: Core scoring function — handles duplicate letter edge cases correctly
- **`revealRow()`**: Staggered tile-flip animation (280ms per column)
- **localStorage key**: `wordle-stats` stores `{ played, won, streak, maxStreak, dist }` where `dist` is an array of 6 guess-count buckets

### Security

The app enforces strict CSP (`default-src 'self'`), blocks all cross-origin requests in the service worker, and stores no data externally. Keep these constraints intact when modifying.

### Deployment

GitHub Pages (main branch, root folder). All asset paths use `./` prefix for compatibility as both user site and project site.
