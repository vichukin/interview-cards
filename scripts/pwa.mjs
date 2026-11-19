// Пост-обработка `expo export -p web`: делает из dist/ устанавливаемое PWA с офлайн-режимом.
import { readdirSync, readFileSync, statSync, writeFileSync, copyFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createHash } from 'node:crypto';

const DIST = 'dist';
const NAME = 'Собес .NET';
const BG = '#0f1420';

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

// 1. manifest
writeFileSync(
  join(DIST, 'manifest.json'),
  JSON.stringify(
    {
      name: NAME,
      short_name: NAME,
      description: 'Карточки для подготовки к собеседованию .NET (RU/PL)',
      start_url: './',
      scope: './',
      display: 'standalone',
      orientation: 'portrait',
      background_color: BG,
      theme_color: BG,
      lang: 'ru',
      icons: [
        { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
        { src: 'icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      ],
    },
    null,
    2
  )
);

// 2. index.html: подключаем manifest, иконки и service worker
const indexPath = join(DIST, 'index.html');
let html = readFileSync(indexPath, 'utf8');
const head = `
    <link rel="manifest" href="manifest.json" />
    <meta name="theme-color" content="${BG}" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="${NAME}" />
    <link rel="apple-touch-icon" href="apple-touch-icon.png" />
    <style>html,body{background:${BG};overscroll-behavior:none}</style>
    <script>if('serviceWorker' in navigator){addEventListener('load',function(){navigator.serviceWorker.register('sw.js')})}</script>
`;
html = html.replace('</head>', head + '</head>');
writeFileSync(indexPath, html);

// 3. service worker: кладёт в кеш все файлы сборки -> работает без интернета
const files = walk(DIST)
  .map((p) => relative(DIST, p).split('\\').join('/'))
  .filter((p) => p !== 'sw.js' && p !== '404.html');
const hash = createHash('sha1');
for (const f of files) hash.update(f).update(readFileSync(join(DIST, f)));
const version = hash.digest('hex').slice(0, 10);

const sw = `const CACHE = 'cards-${version}';
const FILES = ${JSON.stringify(['./', ...files.map((f) => './' + f)], null, 0)};
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
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) =>
      hit || fetch(e.request).catch(() => caches.match('./'))
    )
  );
});
`;
writeFileSync(join(DIST, 'sw.js'), sw);

// 4. GitHub Pages: без Jekyll (иначе папка _expo не отдаётся) и SPA-фолбэк
writeFileSync(join(DIST, '.nojekyll'), '');
copyFileSync(indexPath, join(DIST, '404.html'));

console.log(`PWA ready: ${files.length} files cached, version ${version}`);
