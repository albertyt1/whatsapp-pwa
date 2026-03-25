self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("app-cache").then(cache => {
      return cache.addAll([
        "splash.html",
        "welcome.html",
        "login.html",
        "css/style.css",
        "js/app.js"
      ]);
    })
  );
});