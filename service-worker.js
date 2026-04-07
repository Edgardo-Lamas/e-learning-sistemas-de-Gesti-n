// ============================================================
// SERVICE WORKER — Plataforma E-Learning Sistemas de Gestión
// Permite usar la app sin conexión a internet
// ============================================================

const CACHE_NAME = 'sg-elearning-v3';

// Solo se cachean archivos estáticos que no cambian seguido
const ARCHIVOS_CACHE = [
  './icon.svg',
  './manifest.json'
];

// Archivos JS/CSS: siempre red primero, caché como respaldo offline
const ARCHIVOS_RED_PRIMERO = [
  'app.js',
  'course-data.js',
  'styles.css',
  'index.html'
];

// Instalación
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ARCHIVOS_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activación: eliminar cachés viejas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Google Sheets: siempre por red
  if (url.includes('script.google.com')) {
    event.respondWith(
      fetch(event.request).catch(() => new Response('{}', {
        headers: { 'Content-Type': 'application/json' }
      }))
    );
    return;
  }

  // JS, CSS, HTML: red primero — si falla (sin internet) usa caché
  const esArchivoApp = ARCHIVOS_RED_PRIMERO.some(f => url.includes(f));
  if (esArchivoApp) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Actualizar caché con la versión nueva
          const copia = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copia));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Imágenes y resto: caché primero
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const copia = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, copia));
          }
          return response;
        });
      })
      .catch(() => caches.match('./index.html'))
  );
});
