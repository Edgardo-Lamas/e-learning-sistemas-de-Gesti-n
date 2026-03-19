// ============================================================
// SERVICE WORKER — Plataforma E-Learning Sistemas de Gestión
// Permite usar la app sin conexión a internet
// ============================================================

const CACHE_NAME = 'sg-elearning-v1';

const ARCHIVOS_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './course-data.js',
  './icon.svg',
  './manifest.json'
];

// Instalación: guardar todos los archivos en caché
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

// Fetch: responder desde caché si no hay internet
self.addEventListener('fetch', event => {
  // Las llamadas a Google Sheets siempre van por red (no se cachean)
  if (event.request.url.includes('script.google.com')) {
    event.respondWith(
      fetch(event.request).catch(() => new Response('{}', {
        headers: { 'Content-Type': 'application/json' }
      }))
    );
    return;
  }

  // Para todo lo demás: caché primero, red como respaldo
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          // Guardar en caché si es una respuesta válida
          if (response && response.status === 200 && response.type === 'basic') {
            const copia = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, copia));
          }
          return response;
        });
      })
      .catch(() => caches.match('./index.html'))
  );
});
