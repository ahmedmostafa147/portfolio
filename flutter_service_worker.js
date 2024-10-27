'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "18654a47650236c0d5f024d4c955261f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "06a82a02820947b6f2dfea57edfe3b6f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "83c8001049c4b5325cc9affa4bcd9fc8",
".git/logs/refs/heads/main": "74e206464a5db99a1beb5654723ce1b7",
".git/logs/refs/remotes/origin/main": "4f8ea3f094e5ecac4e2d73ad35f94e81",
".git/objects/01/992c7b5e03a7151cdace34184849c6e97a8ee0": "8cbe4185b3026f38ddf72ba0cabbb653",
".git/objects/06/4de3033803ef8ffe42b277275304406b008b0c": "c536daf8cf6af1cbec4f403596f73ddf",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/97810f9b2e13085f186fe2d5e709f2ecf6c3c6": "f35f025b5ecbe67a68d5f635e203fa21",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/0bfa977964725f03fb572c74d05716fe2b55ea": "2490b0c3e2cba67b7b989cc1a709bf3b",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/37/cda93b8d67bc3333dcc74bb9889b3eb587c697": "25314722344737ebe8571150460c33b5",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/c81ebe00f53034a0ac9a40e5231a4d5311acf4": "7940815289940d07cc0a3124742c2e74",
".git/objects/42/d062ed0b8a6607b997f995c3e3c7dc23d77d80": "c95ccf0935d93595c2c3112b64122d67",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4b/fe94c13b57f0b9fa5cc5b529fb913626c5e4b0": "248dcb0aba8603b5a99ea90609f4ba3b",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/26579100d968ee6c04b9389c60f52e80cb296a": "3acc051c1326a37bd5747b008d79bf15",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/5c/0f45cf38c5796581376b6be03b5fe9409d1903": "0be60df2d2a28ca7597cb7dad65ee970",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/9b74ef97094f32904f4c870938ffabde70bb1f": "72cc445af3a3848928f5ceaf053ca107",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/87/31cf3242d69109e2d7b0b4631c81b4372fa922": "3e8959c4dbb201b62ad2e807871a447e",
".git/objects/87/8dbfdb459165bd6deb483307d54a4a90ab417c": "3ea183080333f3d84895084dd9d32517",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/684e60eca671fff01c7be2ffc697658f44eabe": "2207ec91f6b188a53169910eeeeed263",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/456132e7c66d319e37d76e75566ea5a6722fa2": "3cf53a8379a094e7a25162496c9e31fa",
".git/objects/9e/8d648f93b9340e099fae3adba41d5a4b4f10cf": "b2b090fdadfa330d3cbd28b18ca15bb2",
".git/objects/a4/d2ee4398ec5a41eda635ee54c7cf468d6b88db": "37cbd5e588fa2a9caffb7918ca204874",
".git/objects/a6/e1963958e7fd98f63e39e6ad7b8bb41f399f74": "5590bd7abfd2b9f3add9937a763389ec",
".git/objects/ae/adb4aad7f4f8c1fb99ccfe720c7aa4db12c25b": "a24ed2ece1380f97cf9bab0e57d7268e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/bab647de4ad00eab516bc4c65346a027e455f2": "856060bb8046ab33a96ba9599a8a5895",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/fb32e46bcd54f78cf10d3c31b24be95f17c287": "7cbd2001f20a3d50bf78cf7c139f3a55",
".git/objects/bd/9e882fe87b210a3a31c3b65ca8d03c1282c22f": "c98d97f962ea3c70c72c32ab30ab9672",
".git/objects/c0/6fdc8e8329cd26dd843cccf7b908a475fa7c6f": "434ceb1e0b5854b4e0c3b60f37867975",
".git/objects/c2/0f5384dd75def7dc60a07deb5f5010edd6f417": "a753f556c0b3e5b8dfb3f258f9c520de",
".git/objects/c4/75d1590ca1e28c71e5981449373ba8e35f3b65": "396e9e93e24762d8ba3a29053e50d296",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/df996a74a82c57f6c456529f6a5605d105c132": "b7994016af1829a815fed61f23bcb0e1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/bc03b5813b0ac86ccacfa997f3d0eb6a7d850c": "ccf383e19e59a01446721d07bd2c9a0a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/b9de5aa25b5f235d8d1a0ac3e92cd4e509e2b4": "58a947384d6ffca4d94ba81ad0963686",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/df/b00441de81722c9271c185d2a14804f23a5f97": "2feef5959e47c3f42a8202f27ad58ba2",
".git/objects/e1/1ac0b10be863e521c5b12e7e1923b6f79b6b89": "ecd860419ef81746d61955058314b0bb",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/34aca4d5f2fc7aca32ecd3eda51a053af6d464": "4477c8b3fdb294fb2614f5c42f0ae49f",
".git/objects/eb/46a6818cd9282c5756955ec545ba8ce8c35540": "023b84a6e072db5c6fa2496136e2ed0f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/b0a31c137bbae7e4cf91175c8b679e4eef12bc": "34c8a2e08b53c46e93d0a10494665641",
".git/objects/ee/b1f8cf751a1c83e41dc0ddec7a3649798fa813": "d6703fd0f8fd4671d09cc4ab5a6042f6",
".git/objects/f0/0f31f746618b45228edbccc89c241994801a01": "9fe68b5256321c6e78cf29f93265a003",
".git/objects/f1/074dd97ac03f16d0e81131a2316c777511f3ad": "244f1fa3a81427c3be4312c4a06ba54d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/5518b4cebd93cf7b5ea27620fec092c0669117": "d5a28b032cb848510a04eefe0403c847",
".git/objects/fb/56fe3981b404c91df4b0749bdd8a6dfae21c36": "8d71dc2673ea5cabbde1ae2ae011fef2",
".git/objects/fb/a13bd59034984b20222ecefc325364f235ed10": "47f1a31f32f45825681e5bdeda51c333",
".git/objects/fc/1802e23d62f35e889cbe232fd01f7513461a96": "8d1af72664488b7ea07ef60277fd5293",
".git/objects/ff/01f9afd7c0e487375bf3690fd97bc6e78e1e75": "b488f5eef4fdb130db844e77a749d3fc",
".git/objects/ff/497c05b80a05ced541ddab822bf4169b196a7c": "90126f76f86512cc5e5c0c25c285884d",
".git/refs/heads/main": "273cd5549f9d701d3bbaa1075d023ada",
".git/refs/remotes/origin/main": "273cd5549f9d701d3bbaa1075d023ada",
"assets/AssetManifest.bin": "1c70fbe603d80c96f767c6b4b5c5be04",
"assets/AssetManifest.bin.json": "acc6ceefe92020dc15b030357cc88b83",
"assets/AssetManifest.json": "00be97176704bc80f7d34148e0c8985d",
"assets/assets/images/ai.png": "ce74fd834f95d3b2ff8e3a706edcba99",
"assets/assets/images/facebook.png": "fa74fe1619d75d68df1f0db7c654e39a",
"assets/assets/images/flutter.png": "abe34b0551ded954f6759cada7807e3e",
"assets/assets/images/fluttericon.png": "51e2e739042f7cfc85945f68efa48d49",
"assets/assets/images/github.png": "7aed3646cbea181a3da85620809e992c",
"assets/assets/images/linkedin.png": "e4d142586676a80b3927d899d3584148",
"assets/assets/images/logo.png": "f1c213404374e625a648d1f1a010f798",
"assets/assets/images/Logotravel.png": "adcea351b42f95ddcd5ae8a601d10905",
"assets/assets/images/my_flutter_avatar.png": "a6fc0bb5fb8f7c50d06b283332eaa57c",
"assets/assets/images/password.png": "48b3376a3f2c0db801465dee0574491b",
"assets/assets/images/SplashViewImage.png": "1b9afd742d72703109f1db236fb33703",
"assets/assets/images/udemy.png": "b776050de0002b1c55b017115874b563",
"assets/assets/images/udemy_icon.png": "43f31f0b7e1206c732e541b5aed92144",
"assets/assets/images/youtube.png": "5c520e92205fb6ae1f46ff09e59f6f6a",
"assets/assets/images/youtube_icon.png": "b8527ad5a0d9afbc2cf43a66578b6642",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "f247b12b066b3a5246159668678c8816",
"assets/NOTICES": "296780fbde859d0815e03d6fac85378a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2f199116d5c457d6f4fc9cc0270a25c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "27dea3af90d9d16c7f072ab294f3ade5",
"/": "27dea3af90d9d16c7f072ab294f3ade5",
"main.dart.js": "b7cb5541aaedaa69bab517eeef04fe7d",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
