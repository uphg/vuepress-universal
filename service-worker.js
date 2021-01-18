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
    "revision": "d335da03aef79b8a0688bafddcebda4d"
  },
  {
    "url": "assets/css/0.styles.8bfc6d73.css",
    "revision": "f2fbb3ff1d3f34b4ab664c9801fa2c2c"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.4dc4e6d7.js",
    "revision": "63ca4b219c7f9e8bf23124b32da981a5"
  },
  {
    "url": "assets/js/11.e379e672.js",
    "revision": "dc54d608e9798756a76a9bd10b571bee"
  },
  {
    "url": "assets/js/12.b9ed7187.js",
    "revision": "73138684de8fa10880102ab4607728de"
  },
  {
    "url": "assets/js/13.57340785.js",
    "revision": "28c690d1dc513ebdb3c3ae204a26cbcc"
  },
  {
    "url": "assets/js/14.ebad37b9.js",
    "revision": "9de658a8feed86e595c04089ea7fa134"
  },
  {
    "url": "assets/js/15.04c83b3e.js",
    "revision": "09c642e048f53434d986e75b1110e5d0"
  },
  {
    "url": "assets/js/16.40a3d2d4.js",
    "revision": "fbab84eded977253a0e8a58362949452"
  },
  {
    "url": "assets/js/17.3c40e431.js",
    "revision": "8d6df49e5630db98492407d97d0e9854"
  },
  {
    "url": "assets/js/2.dca2c13e.js",
    "revision": "65678f7e148fdac6c139948d07531ff5"
  },
  {
    "url": "assets/js/3.5622cbab.js",
    "revision": "796fbb66deca604c9884461968d85f80"
  },
  {
    "url": "assets/js/4.72504af0.js",
    "revision": "587c9ee8bcb3b2e014bf54a5f2fbf4c6"
  },
  {
    "url": "assets/js/5.4873bb09.js",
    "revision": "9fc92c18bfaf51aad710306f0d0cd387"
  },
  {
    "url": "assets/js/6.4a50f59b.js",
    "revision": "80851d74aa9ca74cb746e284e60bbc36"
  },
  {
    "url": "assets/js/7.024a0cce.js",
    "revision": "207b8ff3b71092391acd1c654ea62c78"
  },
  {
    "url": "assets/js/8.f992c998.js",
    "revision": "a0f38ca2d3f6ee8a24d2b7e03ae588a8"
  },
  {
    "url": "assets/js/9.1a5168d6.js",
    "revision": "aefd6e44a8b6b33f7efe1a5b56502095"
  },
  {
    "url": "assets/js/app.f5b6b2fc.js",
    "revision": "1e2ae921a899e30d6803dc9b87d06ebd"
  },
  {
    "url": "bar/index.html",
    "revision": "7f1d13c17231d6bb63207ef761a84df4"
  },
  {
    "url": "bar/markdown.html",
    "revision": "c7eff250cc7f4a062d5ae9ac6f0ac264"
  },
  {
    "url": "bar/one.html",
    "revision": "78575dff1134326c5075b025c0205b94"
  },
  {
    "url": "bar/two.html",
    "revision": "09048f75391836bee8de5e2918e0c1b0"
  },
  {
    "url": "font/index.css",
    "revision": "d20c033054e3b080227823a9dae1358b"
  },
  {
    "url": "font/inter/index.css",
    "revision": "90a1786933e5ae10b899258a6f097f93"
  },
  {
    "url": "font/inter/Inter-Light-slnt=0.eot",
    "revision": "91368ebd30cf7a374dd1297fc323c790"
  },
  {
    "url": "font/inter/Inter-Light-slnt=0.svg",
    "revision": "a93211c042538e430b9591013484474a"
  },
  {
    "url": "font/inter/Inter-Light-slnt=0.ttf",
    "revision": "6ffbefc66468b90d7af1cbe1e9f13430"
  },
  {
    "url": "font/inter/Inter-Light-slnt=0.woff",
    "revision": "7dcf5a2828450b026d0fec12398a2ca2"
  },
  {
    "url": "font/inter/Inter-Light-slnt=0.woff2",
    "revision": "1e4accdfbe85cf82f1d86efe5960e28e"
  },
  {
    "url": "font/inter/Inter-Medium-slnt=0.eot",
    "revision": "d8bc91abfe68a248e567a85ff0959e82"
  },
  {
    "url": "font/inter/Inter-Medium-slnt=0.svg",
    "revision": "b6890579c2b934757e1bea3180348c07"
  },
  {
    "url": "font/inter/Inter-Medium-slnt=0.ttf",
    "revision": "5ff1f2a9a78730d7d0c309320ff3c9c7"
  },
  {
    "url": "font/inter/Inter-Medium-slnt=0.woff",
    "revision": "bf8098eda3c8b59eb9834d1ad3ad6c41"
  },
  {
    "url": "font/inter/Inter-Medium-slnt=0.woff2",
    "revision": "e1ba9f2608b22648b25432cc52c5decb"
  },
  {
    "url": "font/inter/Inter-Regular-slnt=0.eot",
    "revision": "27b0f1e40a2568a8a175da31fc7f47f0"
  },
  {
    "url": "font/inter/Inter-Regular-slnt=0.svg",
    "revision": "b8b9197407623004495f53cd1f15521d"
  },
  {
    "url": "font/inter/Inter-Regular-slnt=0.ttf",
    "revision": "515cae74eee4925d56e6ac70c25fc0f6"
  },
  {
    "url": "font/inter/Inter-Regular-slnt=0.woff",
    "revision": "01d8020d672e0c32be2f195a6833ccbc"
  },
  {
    "url": "font/inter/Inter-Regular-slnt=0.woff2",
    "revision": "eabbe260940d3d7af4e8f4503b9ef85b"
  },
  {
    "url": "font/inter/Inter-SemiBold-slnt=0.eot",
    "revision": "7bebf40fa6e648df422ee558d0dff78d"
  },
  {
    "url": "font/inter/Inter-SemiBold-slnt=0.svg",
    "revision": "b6db3cf002e9ec87771789af47d1ce6b"
  },
  {
    "url": "font/inter/Inter-SemiBold-slnt=0.ttf",
    "revision": "ec60b23f3405050f546f4765a9e90fec"
  },
  {
    "url": "font/inter/Inter-SemiBold-slnt=0.woff",
    "revision": "b7de63e4ecf88fa82e86a80fb545444d"
  },
  {
    "url": "font/inter/Inter-SemiBold-slnt=0.woff2",
    "revision": "19c69cb31f58613eba929733bb0e77d2"
  },
  {
    "url": "font/open-sans/index.css",
    "revision": "c16673c9c449e3c22c5c58e5800014a4"
  },
  {
    "url": "font/open-sans/OpenSans-Regular.eot",
    "revision": "07d1a425ccbad19329db2f72d12c4233"
  },
  {
    "url": "font/open-sans/OpenSans-Regular.svg",
    "revision": "b9fdea1cf915cbceb17621e3b584b406"
  },
  {
    "url": "font/open-sans/OpenSans-Regular.ttf",
    "revision": "3ed9575dcc488c3e3a5bd66620bdf5a4"
  },
  {
    "url": "font/open-sans/OpenSans-Regular.woff",
    "revision": "9a9345ca19905f91829e747a09fea84a"
  },
  {
    "url": "font/open-sans/OpenSans-Regular.woff2",
    "revision": "9666411f6532dc9c31920ea6059b9728"
  },
  {
    "url": "font/open-sans/OpenSans-SemiBold.eot",
    "revision": "9b5d357fe4cf2efd4897da122ceb6d6b"
  },
  {
    "url": "font/open-sans/OpenSans-SemiBold.svg",
    "revision": "2761373c5534a4f29f8affd7d9bd7fe8"
  },
  {
    "url": "font/open-sans/OpenSans-SemiBold.ttf",
    "revision": "ba5cde21eeea0d57ab7efefc99596cce"
  },
  {
    "url": "font/open-sans/OpenSans-SemiBold.woff",
    "revision": "fc742e723908d3ceb33e1de1ad0caa17"
  },
  {
    "url": "font/open-sans/OpenSans-SemiBold.woff2",
    "revision": "43c05971907b0ab140fcaf97487204db"
  },
  {
    "url": "foo/api/index.html",
    "revision": "435d679e5e5e580d45b58d91cf436d6a"
  },
  {
    "url": "foo/api/one.html",
    "revision": "c3e164342cb616f1c601e7bd2eb41796"
  },
  {
    "url": "foo/api/two.html",
    "revision": "2de309ce083589ae67e4cb45d8658c2d"
  },
  {
    "url": "foo/more/index.html",
    "revision": "6e0af10cdb061831d6d9403fec6dcf4a"
  },
  {
    "url": "foo/more/one.html",
    "revision": "5e2eb35a40d9f912df75b93fde89a6e0"
  },
  {
    "url": "foo/more/two.html",
    "revision": "37d3324d1a02daf74503a388a6965d19"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icon/svg.js",
    "revision": "2252f7245e7e55be7dd0a71bc7cfad8d"
  },
  {
    "url": "images/icons/bulb.svg",
    "revision": "e3fbc07fc8a4fd64bf3585de3c5868c4"
  },
  {
    "url": "images/icons/danger.svg",
    "revision": "7224901b2f84983efa258490e5a1c03a"
  },
  {
    "url": "images/icons/info.svg",
    "revision": "39d1a12b97555d796d4dcda9bf403429"
  },
  {
    "url": "images/icons/stop.svg",
    "revision": "7d577a225ddf7f95f96032b3eefb48b6"
  },
  {
    "url": "index.html",
    "revision": "7f66fab491c7283f773e403e208c4d48"
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
