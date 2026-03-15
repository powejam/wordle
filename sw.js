// Wordle PWA Service Worker
// Caches only local assets — no external requests are made or cached.
"use strict";

var CACHE_NAME = "wordle-v9";
var ASSETS = [
  "./",
  "./index.html",
  "./game.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

// Install: pre-cache all local assets
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: purge old caches
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

// Fetch: network-first strategy — try the network for fresh assets,
// fall back to cache when offline. This ensures users get updates
// immediately without needing a second page load.
self.addEventListener("fetch", function(event) {
  // Only handle same-origin GET requests
  if (event.request.method !== "GET") return;

  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) {
    // Block any cross-origin requests — the app should make none
    return;
  }

  event.respondWith(
    fetch(event.request).then(function(response) {
      // Cache successful responses for offline use
      if (response.ok) {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, clone);
        });
      }
      return response;
    }).catch(function() {
      // Offline: serve from cache
      return caches.match(event.request);
    })
  );
});
