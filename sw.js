/**
 * AI Agents in Depth - Service Worker (sw.js)
 * High-performance offline caching engine with HTTP 206 Range slicing support.
 */

const CACHE_SHELL_NAME = 'ai-agent-shell-v2';
const CACHE_AUDIO_NAME = 'ai-agent-audio-v1';

// App shell files for 100% offline access
const STATIC_ASSETS = [
  './',
  'index.html',
  'reader.html',
  'css/style.css',
  'css/landing.css',
  'js/app.js',
  'js/i18n.js',
  'data/chapters_meta.js',
  'data/introduction.js',
  'data/chapter1.js',
  'data/chapter2.js',
  'data/chapter3.js',
  'data/chapter4.js',
  'data/chapter5.js',
  'data/chapter6.js',
  'data/chapter7.js',
  'data/chapter8.js',
  'data/chapter9.js',
  'data/chapter10.js',
  'data/afterword.js',
  'assets/qr_wechat.svg',
  'assets/qr_alipay.svg',
  'assets/icon.svg',
  'manifest.json'
];

// Install: Pre-cache static app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_SHELL_NAME).then(async (cache) => {
      for (const asset of STATIC_ASSETS) {
        try {
          await cache.add(asset);
        } catch (err) {
          console.warn('[SW] Precache skipped for:', asset, err);
        }
      }
    }).then(() => self.skipWaiting())
  );
});

// Activate: Clean old caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_SHELL_NAME && key !== CACHE_AUDIO_NAME) {
            console.log('[SW] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Slices an ArrayBuffer into a 206 Partial Content Response
async function handleAudioRangeRequest(request, cachedResponse) {
  const rangeHeader = request.headers.get('range');
  if (!rangeHeader) {
    return cachedResponse;
  }

  const arrayBuffer = await cachedResponse.clone().arrayBuffer();
  const totalLength = arrayBuffer.byteLength;

  // Format: "bytes=start-end" or "bytes=start-"
  const matches = rangeHeader.match(/bytes=(\d+)-(\d+)?/);
  if (!matches) {
    return cachedResponse;
  }

  const start = parseInt(matches[1], 10);
  let end = matches[2] ? parseInt(matches[2], 10) : totalLength - 1;

  if (start >= totalLength || end >= totalLength) {
    return new Response(null, {
      status: 416,
      statusText: 'Range Not Satisfiable',
      headers: {
        'Content-Range': `bytes */${totalLength}`
      }
    });
  }

  const slicedBuffer = arrayBuffer.slice(start, end + 1);
  const slicedLength = slicedBuffer.byteLength;

  return new Response(slicedBuffer, {
    status: 206,
    statusText: 'Partial Content',
    headers: {
      'Content-Range': `bytes ${start}-${end}/${totalLength}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': slicedLength.toString(),
      'Content-Type': cachedResponse.headers.get('content-type') || 'audio/mpeg'
    }
  });
}

// Fetch interception
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Only handle GET requests
  if (request.method !== 'GET') {
    return;
  }

  // 1. Audio Files Handling (.mp3) - supports both local and Cloudflare R2 CDN
  if (url.pathname.endsWith('.mp3')) {
    event.respondWith(
      (async () => {
        const audioCache = await caches.open(CACHE_AUDIO_NAME);
        const filename = url.pathname.split('/').pop();
        // Match by full request, URL href, pathname, or filename
        const cached = (await audioCache.match(request)) ||
                       (await audioCache.match(url.href)) ||
                       (await audioCache.match(url.pathname)) ||
                       (await audioCache.match(filename));
        if (cached) {
          return handleAudioRangeRequest(request, cached);
        }
        // If not cached, stream directly from network
        return fetch(request);
      })()
    );
    return;
  }

  // Only handle app shell and static assets within same origin
  if (url.origin !== self.location.origin) {
    return;
  }

  // 2. Static Assets & App Shell (Cache-First with Background Stale-While-Revalidate)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch fresh copy in background to update cache
        fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_SHELL_NAME).then((cache) => {
              cache.put(request, networkResponse);
            });
          }
        }).catch(() => {
          // Offline, ignore background update failure
        });
        return cachedResponse;
      }

      // If not in cache, fetch from network and cache
      return fetch(request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_SHELL_NAME).then((cache) => {
          cache.put(request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Fallback for navigation requests when totally offline
        if (request.mode === 'navigate') {
          return caches.match('index.html');
        }
      });
    })
  );
});
