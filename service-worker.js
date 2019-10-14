/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4bc6890793b05151933c56814e0e0da9"
  },
  {
    "url": "assets/css/0.styles.0a81477a.css",
    "revision": "0c366b78289a15eaac3608b7fca7eb3c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dd24ceb9.js",
    "revision": "7a9609fdf550f551e03d0a7ec263db67"
  },
  {
    "url": "assets/js/11.3be0880f.js",
    "revision": "507866b0a7939bcc929bc823872aba89"
  },
  {
    "url": "assets/js/12.6c12fda2.js",
    "revision": "cbc968b2a998b02b110d310bca0911f1"
  },
  {
    "url": "assets/js/13.4cccb182.js",
    "revision": "9b2a6e40f7922f1bfa3365bd3f6d354c"
  },
  {
    "url": "assets/js/14.0ea372f7.js",
    "revision": "63a5bff7e968e7e1ffe723287b023117"
  },
  {
    "url": "assets/js/15.9a20d1f3.js",
    "revision": "3e07c64b68ebcf7ef896439089c38914"
  },
  {
    "url": "assets/js/2.cf3d61c6.js",
    "revision": "8e187575f2cf25c0ebe20e15abf843ca"
  },
  {
    "url": "assets/js/3.c9d0b0fc.js",
    "revision": "50670854c0753212277943b220b7acef"
  },
  {
    "url": "assets/js/4.6f2707da.js",
    "revision": "9134077ec20d3d2aaf51c25e684a2181"
  },
  {
    "url": "assets/js/5.8d7c9dcb.js",
    "revision": "c58fa29211ea33e35abc04d5d9a5f30b"
  },
  {
    "url": "assets/js/6.039294d5.js",
    "revision": "11992475c20a9d6302d7e112fafb9c42"
  },
  {
    "url": "assets/js/7.efa34e78.js",
    "revision": "c787019eae482a5d0c1b3077627ce513"
  },
  {
    "url": "assets/js/8.137216c1.js",
    "revision": "5c914ffad0b970dfc8e41871a72ed7a2"
  },
  {
    "url": "assets/js/9.b843c844.js",
    "revision": "b55f016a460ce4d12054ac85704c64f2"
  },
  {
    "url": "assets/js/app.adb7c4c9.js",
    "revision": "dc3c165c9ce295b542827ba1fbf848f1"
  },
  {
    "url": "ecosystem.html",
    "revision": "cc49037872e30d14a3bb9b8cbe3e7140"
  },
  {
    "url": "guide.html",
    "revision": "c6e7b76f6b4439d6cbf56261b0bf9600"
  },
  {
    "url": "index.html",
    "revision": "046308249b9b5dd22eee112c912a3002"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "3a8326571b5f428839c556f3da75d108"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "da387832bd8865f0b4527ed24854b480"
  },
  {
    "url": "zh/guide.html",
    "revision": "0dbdbad2e4e5d434816f8b0fb6dd8e99"
  },
  {
    "url": "zh/index.html",
    "revision": "ae669da99bba574def7cb415761cc08b"
  },
  {
    "url": "zh/support.html",
    "revision": "d373ef594395ac07f78cd4c7101714e5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})