'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "37318cf3112c12186d4a0074a05fc9e0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "156549716341dbdfe85c9cd022cb7a51",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8b549bbbeadd0c311bd85b1d11f9a886",
".git/logs/refs/heads/main": "ece57866f4535387c44b720286140eac",
".git/logs/refs/remotes/origin/main": "09ac27c6685155f53829133725fe3b0b",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/7754a86430fd585dbe27e023fb527caf46a5e7": "d432f01bfdb3bb659f99e8a127c8fa88",
".git/objects/12/e01edd840ee543f690f128c1904ddabc970b02": "01d2309309dd01d0c929dc64e5b9a8e8",
".git/objects/17/37fc17733c3a1f643eb4e7440a59b60356be92": "19764e55c11c7e5d16f390ee206891d5",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/5f2ab7da7807f5b89a95f5909cabee45b8d64f": "274256aa7fa4b30580ca9f1152278a2c",
".git/objects/23/f9269db3d8fc68840585edac7f19abadec3725": "0d171f17eb60d99b292111cf6fc1838c",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/026e70a5aa397c0829eec4c886c6a98cef9ff0": "3ada62fe7e62ad7416ec6c5dbaa67f9e",
".git/objects/2e/9c942223c7c437b1805c1d7d417ad0f4c0ad61": "95774eea80f9f8516331c721fa703cd4",
".git/objects/36/165f058c6b7432000cdfab5ff8c2bfae451a93": "21887dacf5855e9a5c0c305358aefc67",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/9f18764ab9a5d8348033aa5a60b8a0b91cfd8e": "978edf63a63026e309ae8d440ffd462b",
".git/objects/3f/bdd623b4f8d2e8484bff13d4b21504b159f021": "82492726c012b931b8b706e1407e2c49",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/aa8387471e6a7c11c29c77b71e820ea2b84965": "09e66375a3aea543119658ed0301fba9",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/07ec97796b55a20509e771a7bc38a04c103d9b": "70d341bd6b519209b7228063fcf16d03",
".git/objects/5e/71bea150509f8667f2dbfdd152c47afaabad77": "b4a6d9fa1a74437294377b35f63ebabd",
".git/objects/5f/9a8fca12a5ebf9356b92ce3d76d7a4914ceaf1": "b89e57f293344d46c9407c99bb21d43d",
".git/objects/68/e311939c45a4d110aa0588ef41e7b4fb156cfc": "9732f2d1dc8154893895c702971700a7",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/74/44bb6a60f80c8b1d3fcbe081696b21bac9e105": "1fa9371cba6fe677ffe4006f64bed786",
".git/objects/76/70794070629524e36cc40b15c2ccf4f20f4e7c": "8f6944cb2625f3f506e99fbc2df351a0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9f/926c3fe99ce1cd43dfc23f9f67f976570903bb": "580ab98c3304e799919fe6a3da778db8",
".git/objects/a5/c0a60e2ec05e5b77065714314f0ed8175def76": "13570ce7b13537408dc79ede7dc6f146",
".git/objects/ab/49be00075282fe713c4f5ee44d9a936fe68181": "18a84a54c8ffa85e10b055ce9b09a9f4",
".git/objects/b2/7cb733e5ba90f00f52e7e7707f30ed5af9e238": "e0c5818d0ab73bdb50fa1f7c4e112a97",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c3/42bb2691876a876ec8744d4d97ef3d56122430": "6891d5ded9f1aad6e9e9eaaf911d2f15",
".git/objects/c6/9194de5a8a3b6cd549688dbc21d91066d1f173": "b53cf6f65f819c87ccbcddd39ea9db47",
".git/objects/c9/03ff2a5f40eb1ca1fcd17f1956ffd4eee77066": "eb2a9e65cc1cecd9a60f478c924fbbec",
".git/objects/c9/7ed424390a07a1dc4964b40c66504b676abc43": "6a3319ee9dbfcf2147ab03055b226eb1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/6aab093230f121e8f3da001350b933dcc4763a": "be85fa014cf47cc3cc67785bbd50de89",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/a11e131adfae103429928650d925c337b14d6d": "1934db36fa6a6590b2e34b37c69fa814",
".git/objects/e0/1c032843c0453d20ac3179e22e368ec2c73ef9": "bbf16963284b4ada12c8343212120322",
".git/objects/e4/40081876df135f6d27f5cf764233f85ac6194b": "f62aaa149c5552e5da6461af2ba85e52",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/1cb7fbacb51766a6014126065b1fb6f7ebbae3": "09eeaaf565a02eb3ba571b1c1a09ef14",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "e485ecd4f5b6cd1ff167c67efd61e464",
".git/refs/remotes/origin/main": "e485ecd4f5b6cd1ff167c67efd61e464",
"assets/AssetManifest.bin": "1604df6c52aa42287e5820b904fefbe2",
"assets/AssetManifest.bin.json": "f89dac2800f1fb9e9a4c51b53c3ed986",
"assets/AssetManifest.json": "e82e582246be675b2bb3d78382357407",
"assets/assets/about_me_icon.png": "a0c4ee77b193a26a994f7bec5f8fcdb0",
"assets/assets/call_icon.png": "7562ee99355bebd7005c9a400946cdfe",
"assets/assets/contact-book.png": "5462b19bd611cc4693bf8c1102c8dd49",
"assets/assets/download_icon.png": "b65af68e3f92126a47dac77c0141d725",
"assets/assets/email_box_icon.png": "5a251a108dd57edce6b64e6c724b6034",
"assets/assets/email_icon.png": "b8318df9f22785a29ec00c2caa4a6604",
"assets/assets/github.png": "b37b05a713d8eebcbb475119e587859b",
"assets/assets/gmail.png": "f00b334e60b029b6c9aec7d099484649",
"assets/assets/home.png": "cc6f728b41b68017783f5a733552a759",
"assets/assets/linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/location_icon.dart.png": "eef78f92f0dda828f70d99b8b8b5d49b",
"assets/assets/login.jpeg": "585a8250ebc6683eeee98d382cb47185",
"assets/assets/login.png": "584bbab95659d2ec493317d0ef81b926",
"assets/assets/mobile_icon.png": "625af44bb65c04b6ef6c3182917396c3",
"assets/assets/my_protfolio_logo.png": "702886aa98e6dd4529a4838dbd787d5f",
"assets/assets/resumeIcon.png": "c40564945256baf80928eedc3fcc70d8",
"assets/assets/work.png": "fa9b31e2b3fc44343566268b4dddd944",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "534719cb17c4b966a819b1b826cb26e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/favicon.png": "323f38fe96e8646a22b94bb65cd7fc36",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cb9224ff5c2006e37a61aeddfc9d1757",
"/": "cb9224ff5c2006e37a61aeddfc9d1757",
"main.dart.js": "c9256ee9329166afb546a933892196f0",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
