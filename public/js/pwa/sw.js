self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('websitename').then(function(cache) {
        return cache.addAll([
          '/',
          '/dist/css/bundle.min.css',//change this
          '/dist/js/bundle.min.js'//change this
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
   });