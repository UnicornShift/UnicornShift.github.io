'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/main.dart.js": "c20f2cdcad09b688d81b1a05b097de5e",
"/assets/LICENSE": "00488ab9e1bb4d3186d87fe8b8d4e162",
"/assets/assets/discover.png": "81bdb2aa22180b6c8951667a0b5f2d69",
"/assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"/assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"/assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"/assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"/assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"/assets/assets/mastercard.png": "cb38652a02a27ed79fb7f1bc6cbcbc64",
"/assets/assets/avatar.png": "8ad00245e38de1d3326205a9d7f7476d",
"/assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"/assets/assets/app_icon%20(copy).png": "f0976f728edf7b30a9fc3350a1edaea4",
"/assets/assets/app_icon.png~": "f0976f728edf7b30a9fc3350a1edaea4",
"/assets/assets/avatar.jpg": "0c98916d0e3439cebffaa6e659a92ebf",
"/assets/assets/avatar.png~": "4edda7088f853c6885c255cbfdb550d1",
"/assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"/assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"/assets/assets/app_icon.png": "9aa547f11309559cc8fdc23c4f51476a",
"/assets/assets/amex.png": "4548299588f8d5e831ed2ed4fb3d1603",
"/assets/assets/diners_club.png": "864276f5fb2c9d391c3faa080270ba4f",
"/assets/assets/visa.png": "782a8692856c4a67f010e577008fec61",
"/assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"/assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"/assets/assets/about.html": "cca535e84bb3f1ad20cd1423638d0253",
"/assets/FontManifest.json": "592290621294619b16740a9d89232ba6",
"/assets/AssetManifest.json": "28fc1b23a2856ae76ca16763e8b02ec6",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/index.html": "bb447a20585514a6834891de4ac211f8"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
