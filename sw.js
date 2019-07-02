importScripts('/troveskin-demo/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/troveskin-demo/_nuxt/0118823cef30733f70d3.js",
    "revision": "2d4c33076e4e0804635c324acde40993"
  },
  {
    "url": "/troveskin-demo/_nuxt/26abf308cfb3636f208d.js",
    "revision": "876828db8482c354fb103305b89029f6"
  },
  {
    "url": "/troveskin-demo/_nuxt/50747e03452b4a90bb33.js",
    "revision": "0549140034cd66219df316435d16b1a4"
  },
  {
    "url": "/troveskin-demo/_nuxt/6f69fc87d01af5b765c9.js",
    "revision": "ae8365cbfa5e3d60f82706d8464ce9c3"
  },
  {
    "url": "/troveskin-demo/_nuxt/85678eded1c4730fc8c0.js",
    "revision": "8dd9425da4bc86b513ed2a89fa43ebd0"
  },
  {
    "url": "/troveskin-demo/_nuxt/bf22271fc278a603f48f.js",
    "revision": "497ab762562ba8447bfad56d4693732c"
  },
  {
    "url": "/troveskin-demo/_nuxt/c5c1fd9d7931fe5e5dc8.js",
    "revision": "333685676d9506622056e9a84a7cc245"
  },
  {
    "url": "/troveskin-demo/_nuxt/d78e55d2206aeb736087.js",
    "revision": "48d79c27c758d0a8a5461d958a2c22bd"
  }
], {
  "cacheId": "troveskin",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/troveskin-demo/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/troveskin-demo/.*'), workbox.strategies.networkFirst({}), 'GET')
