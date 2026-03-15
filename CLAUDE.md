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
- `game.js` — all game logic, word lists, UI wiring (~1650 lines)
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
- **Give Up**: A "Give Up" button below the keyboard. First click arms it ("Are you sure?" in red, 3-second timeout), second click confirms. On give-up: fills the current row with the answer in red tiles, records `gaveUp++` in stats, resets streak. The button is hidden once the game ends (win, loss, or give-up).
- **Stats**: `localStorage` key `wordle-stats` stores `{ played, won, streak, maxStreak, gaveUp, lost, dist }` where `dist` is an array of 6 guess-count buckets. The `gaveUp` field was added in v3 and `lost` in v7, both with backward compatibility (default to 0 if absent). Stats modal shows 6 summary boxes (Played, Win %, Streak, Max, Lost, Gave Up) and a guess distribution bar chart with an amber "L" row for losses and a red "X" row for give-ups.
- **Game State Persistence**: `localStorage` key `wordle-game` stores `{ target, guesses, pending, cursorCol, gameOver }` where `guesses` is an array of `{ word, results }` for completed rows, `pending` is a 5-element array of letters (empty string for unfilled slots) representing the current row, and `cursorCol` is the active cursor position. Legacy saves with `pending` as a string are handled on restore. State is saved after every keystroke (letter, backspace, guess submission, win, loss, give-up). On page load, `loadGameState()` restores the board without animations if a saved game exists; otherwise `newGame()` starts fresh. Clicking "New Game" calls `clearGameState()` before starting. Resetting stats also clears the saved game.
- **Positional Cursor**: `cursorCol` tracks the active tile in the current row. Tapping any tile in the active row moves the cursor there freely (gaps allowed). Typing writes at `cursorCol` and advances one step right (clamped at tile 4). Backspace clears the tile left of the cursor and moves left. Enter requires all 5 slots filled. `setCursor(col)` manages the `cursor-pos` CSS class (blinking border) and keeps `cursorCol`/`currentCol` in sync. Cursor is cleared when `gameOver` becomes true.

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

**Always bump the version before every push**, even for minor changes. This forces the service worker to fetch fresh assets and prevents users from being served stale cached files.

Bump the version in both places:
- `sw.js`: `CACHE_NAME = "wordle-v8"`
- `index.html`: `<script src="game.js?v=X">`

### Deployment

GitHub Pages (main branch, root folder). All asset paths use `./` prefix for compatibility as both user site (`username.github.io`) and project site (`username.github.io/repo-name/`).
