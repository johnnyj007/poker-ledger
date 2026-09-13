// Minimal service worker — just enough to satisfy "installable PWA" requirements.
// This app relies on live data from jsonbin.io, so we deliberately don't cache
// or serve anything offline; every request just passes straight through to the network.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
