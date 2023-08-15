let cacheName="Peso Ideal - IMC";
let filesToCache = ["/", "/index.html","/css/style.css", "/js/main.js", "/information.html", "/js/script.js"];

self.addEventListener("install", (e) => { 
    e.waitUntil(
       caches.open(cacheName).then(function (cache) {
         return cache.addAll(filesToCache);
       })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondwith(
        caches.match(e.request).then((response) => {
          return response || fetch(e.request); 
        })
    );
});