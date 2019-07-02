importScripts('/troveskin-demo/assets/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/troveskin-demo/assets/0118823cef30733f70d3.js",
    "revision": "2d4c33076e4e0804635c324acde40993"
  },
  {
    "url": "/troveskin-demo/assets/25bb2f8a1cfd16729ba9.js",
    "revision": "1c10fe4e0d1e875b9e514a201151234d"
  },
  {
    "url": "/troveskin-demo/assets/26abf308cfb3636f208d.js",
    "revision": "876828db8482c354fb103305b89029f6"
  },
  {
    "url": "/troveskin-demo/assets/50747e03452b4a90bb33.js",
    "revision": "0549140034cd66219df316435d16b1a4"
  },
  {
    "url": "/troveskin-demo/assets/6f69fc87d01af5b765c9.js",
    "revision": "ae8365cbfa5e3d60f82706d8464ce9c3"
  },
  {
    "url": "/troveskin-demo/assets/7f9d47d68d40cef78daf.js",
    "revision": "26feef12beb928ed3676b0b4b2ad264e"
  },
  {
    "url": "/troveskin-demo/assets/bf22271fc278a603f48f.js",
    "revision": "497ab762562ba8447bfad56d4693732c"
  },
  {
    "url": "/troveskin-demo/assets/d78e55d2206aeb736087.js",
    "revision": "48d79c27c758d0a8a5461d958a2c22bd"
  }
], {
  "cacheId": "troveskin",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/troveskin-demo/assets/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/troveskin-demo/.*'), workbox.strategies.networkFirst({}), 'GET')
