importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0118823cef30733f70d3.js",
    "revision": "2d4c33076e4e0804635c324acde40993"
  },
  {
    "url": "/_nuxt/26abf308cfb3636f208d.js",
    "revision": "876828db8482c354fb103305b89029f6"
  },
  {
    "url": "/_nuxt/50747e03452b4a90bb33.js",
    "revision": "0549140034cd66219df316435d16b1a4"
  },
  {
    "url": "/_nuxt/540b370b14cf41144c57.js",
    "revision": "dbb336dd7c60de05100118b028c12932"
  },
  {
    "url": "/_nuxt/6f69fc87d01af5b765c9.js",
    "revision": "ae8365cbfa5e3d60f82706d8464ce9c3"
  },
  {
    "url": "/_nuxt/bf22271fc278a603f48f.js",
    "revision": "497ab762562ba8447bfad56d4693732c"
  },
  {
    "url": "/_nuxt/d78e55d2206aeb736087.js",
    "revision": "48d79c27c758d0a8a5461d958a2c22bd"
  },
  {
    "url": "/_nuxt/ea46260abdc6b8d49a42.js",
    "revision": "debe77a6e643ba8adb6bb36144fb7ac9"
  }
], {
  "cacheId": "troveskin",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
