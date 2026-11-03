const CACHE = 'mon-batch-v8-20261103';
const APP_FILES = ['./', './index.html', './manifest.json', './icon.svg'];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(APP_FILES);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith('mon-batch-') && key !== CACHE)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;

  const path = url.pathname.toLowerCase();
  const refreshFromNetwork = request.mode === 'navigate' ||
    path.endsWith('/index.html') ||
    path.endsWith('/service-worker.js') ||
    path.endsWith('/manifest.json');

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (refreshFromNetwork) {
      try {
        const freshRequest = new Request(request, { cache: 'no-store' });
        const response = await fetch(freshRequest);
        if (response && response.ok && !path.endsWith('/service-worker.js')) {
          await cache.put(request, response.clone());
        }
        return response;
      } catch (error) {
        return (await cache.match(request)) ||
          (await cache.match('./index.html')) ||
          Response.error();
      }
    }

    const cached = await cache.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response && response.ok) await cache.put(request, response.clone());
      return response;
    } catch (error) {
      return (await cache.match('./index.html')) || Response.error();
    }
  })());
});
