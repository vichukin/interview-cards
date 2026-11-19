const CACHE = 'cards-ec6da302cd';
const FILES = ["./","./apple-touch-icon.png","./favicon.ico","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./index.html","./manifest.json","./metadata.json","./_expo/static/js/web/index-fa423328572c9d21f4da96547352385b.js"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  // Страница: сначала сеть (чтобы обновления приходили сразу), без сети — из кеша
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./', copy));
          return res;
        })
        .catch(() => caches.match('./'))
    );
    return;
  }
  // Остальные файлы (JS, иконки) имеют хеш в имени — берём из кеша
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) =>
      hit || fetch(e.request).catch(() => caches.match('./'))
    )
  );
});
