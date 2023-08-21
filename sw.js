let cacheName="Peso Ideal - IMC";
let filesToCache = ["https://peso-ideal-imc-pwa.netlify.app/", "https://peso-ideal-imc-pwa.netlify.app/index.html","/css/style.css", "https://peso-ideal-imc-pwa.netlify.app/js/main.js", "https://peso-ideal-imc-pwa.netlify.app/js/script.js"];

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