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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/all.min.css",
    "revision": "8fc85326af81ca9d2198c7a52f2a3df4"
  },
  {
    "url": "css/highlight.css",
    "revision": "befb6dd7120efc644a5efeaa7bad3f54"
  },
  {
    "url": "css/main.css",
    "revision": "ea7447ce00fb2f500fc7c2909c9bba76"
  },
  {
    "url": "css/monosocialiconsfont.css",
    "revision": "65a7c0b7beb0e3ab855243fab00c5af6"
  },
  {
    "url": "css/normalize.css",
    "revision": "c7aea3c0126524332d0d2454424047e2"
  },
  {
    "url": "css/style.css",
    "revision": "3ba275d3d2370c478343a7d278387d49"
  },
  {
    "url": "fonts/fa-brands-400.woff",
    "revision": "fe9d62e0d16a333a20e63c3e7595f82e"
  },
  {
    "url": "fonts/fa-brands-400.woff2",
    "revision": "7559b3774a0625e8ca6c0160f8f6cfd8"
  },
  {
    "url": "fonts/fa-solid-900.woff",
    "revision": "4bced7c4c0d61d4f988629bb8ae80b8b"
  },
  {
    "url": "fonts/fa-solid-900.woff2",
    "revision": "b5cf8ae26748570d8fb95a47f46b69e1"
  },
  {
    "url": "fonts/icons.woff",
    "revision": "bc459ed0801f97d124aed9af3baa2b86"
  },
  {
    "url": "fonts/MonoSocialIconsFont-1.10.woff",
    "revision": "6ef18e62928bfbe78057f6604702062a"
  },
  {
    "url": "js/lib/jquery.min.js",
    "revision": "f832e36068ab203a3f89b1795480d0d7"
  },
  {
    "url": "js/lib/typed.js",
    "revision": "10a9abfcc18f166de243d58672082e59"
  },
  {
    "url": "js/main.js",
    "revision": "94b95f20aa63ba05835f9946a8b83c87"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.js/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/.*\.css/, workbox.strategies.staleWhileRevalidate({ plugins: [{ cacheableResponse: { statuses: [ 0, 200 ] } }] }), 'GET');
workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif)/, workbox.strategies.cacheFirst({ plugins: [{ expiration: { maxEntries: 50 } }] }), 'GET');
workbox.routing.registerRoute(/.*\.html/, workbox.strategies.networkFirst(), 'GET');
