# Wordle PWA

A Wordle word-guessing game as a Progressive Web App. Works fully offline
once loaded, installable to the home screen on mobile devices.

## Features

- **12,000+ word list** — Collins/SOWPODS dictionary for broad British and American English support
- **Custom words** — if a valid word isn't recognised, an "Add word" button lets you add it; custom words are stored in `localStorage` and accepted as guesses
- **Stats tracking** — tracks games played, win %, current streak, max streak, guess distribution, and give-ups
- **Give Up** — a "Give Up" button reveals the answer (requires confirmation); give-ups are counted separately in stats
- **Dark/light mode** — follows your system preference automatically
- **Offline** — service worker caches all assets after first load

## Privacy & Security

This app makes **zero external network requests**:

- **No third-party fonts** — uses system font stacks only
- **No analytics or tracking** — no Google Analytics, no pixels, nothing
- **No CDN dependencies** — all code is self-contained in the repo
- **Content Security Policy** locks the page to `self` origin only
- **Referrer Policy** set to `no-referrer`
- **Permissions Policy** disables camera, microphone, geolocation, and FLoC/Topics
- **Service worker** only caches same-origin assets and blocks cross-origin fetches
- **Stats** are stored in `localStorage` on your device and never transmitted
- **Random word selection** uses `crypto.getRandomValues()` (not `Math.random()`)

## Local Testing

```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

No build step, no Node.js, no dependencies — just serve the files.

PWA install prompts require HTTPS, so they'll only appear on GitHub Pages
(or another HTTPS host), not on plain `localhost`.

## Deploy to GitHub Pages

```bash
# 1. Create a new repo on GitHub (e.g. "wordle"), then:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/wordle.git
git push -u origin main

# 2. Enable GitHub Pages:
#    - Go to repo Settings → Pages
#    - Source: "Deploy from a branch"
#    - Branch: main, folder: / (root)
#    - Save
#
# Your game will be live at: https://YOUR_USERNAME.github.io/wordle/
```

All paths in the manifest, service worker, and HTML use relative (`./`) prefixes,
so this works both as a **user site** (`username.github.io`) and a
**project site** (`username.github.io/repo-name/`) with no changes.

## Files

```
index.html      — Markup and CSS
game.js         — All game logic, word lists, and UI wiring
sw.js           — Service worker for offline caching
manifest.json   — PWA manifest for installability
icon-192.png    — App icon (192×192)
icon-512.png    — App icon (512×512)
```

## Resetting Stats

Open the stats screen (tap the grid icon in the header) and tap **RESET STATS** at the bottom. You'll be asked to confirm — tap it again within 3 seconds to wipe all stats and custom words. The stats display resets immediately.

## Licence

Public domain. Do whatever you want with it.
