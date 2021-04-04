importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
  console.log('Workbox loaded successfully!');
} else {
  console.log('Workbox failed to load!');
}

workbox.precaching.precacheAndRoute([
  { url: '/bundle.js', revision: '2' },
  { url: '/index.html', revision: '1' },
  { url: '/favicon.ico', revision: '1' },
  { url: '/icon_192x192.png', revision: '1' },
  { url: '/icon_512x512.png', revision: '1' },
  { url: '/main.css', revision: '1' },
  { url: '/manifest.json', revision: '1'}
]);

workbox.routing.registerRoute(
  '/bundle.js',
  workbox.strategies.cacheOnly()
);

workbox.routing.registerRoute(
  '/index.html',
  workbox.strategies.cacheOnly()
);

workbox.routing.registerRoute(
  '/favicon.ico',
  workbox.strategies.cacheOnly()
);

workbox.routing.registerRoute(
  '/main.css',
  workbox.strategies.cacheOnly()
);

workbox.routing.registerRoute(
  '/manifest.json',
  workbox.strategies.cacheOnly()
);
