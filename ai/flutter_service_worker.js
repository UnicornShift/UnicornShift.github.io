'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/main.dart.js": "b357a39fada2b58aa5fef6e99341d8b7",
"/index.html": "bc899675f6327e46cc3eab6534f68899",
"/assets/FontManifest.json": "592290621294619b16740a9d89232ba6",
"/assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"/assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"/assets/assets/about.html": "cca535e84bb3f1ad20cd1423638d0253",
"/assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"/assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"/assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"/assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"/assets/assets/avatar.png~": "4edda7088f853c6885c255cbfdb550d1",
"/assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"/assets/assets/works/trivz.png": "4fc7b4922689e1508fdbd35a9b1785ee",
"/assets/assets/works/messio.png": "827f062f04c16a164d9d7e9d13f24916",
"/assets/assets/works/truelancer.png": "1126f584894fa84c5c052ec625ebf54e",
"/assets/assets/works/facelyt.png": "9c21f203fc4d3a9ca53455c525b63f94",
"/assets/assets/works/cocoapay.png": "1a116679a577ef4af05f6e3c7f6f23be",
"/assets/assets/works/vdrone.png": "f9817772bfa75c8d65c62810d83be284",
"/assets/assets/works/kharedi_now.png": "d0c478d3e7e33419a8f48b34bf1207e3",
"/assets/assets/works/stattion.png": "3e39fc6c1f96b3201cb661452edc6d7f",
"/assets/assets/works/rajasthan_tourism.png": "d7e838f9f73511fc7038a05b60859356",
"/assets/assets/works/railenq.png": "7982d54f1972d96a8f10a389ad354db2",
"/assets/assets/works/wheelie_repairs.png": "cd0c2be230c6e7b9cb6224da0726d7ca",
"/assets/assets/works/savaari_partner.png": "05e90af963f924eeac54490a5a2dcd38",
"/assets/assets/works/mynewcar.png": "a856c91717e8817762660e95e591a10f",
"/assets/assets/works/savaari_consumer.png": "480950a09ee167d32cdabea4b45b676f",
"/assets/assets/works/mydealer.png": "14f62eb3413897290d2b2a248dcd8931",
"/assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"/assets/assets/avatar.jpg": "0c98916d0e3439cebffaa6e659a92ebf",
"/assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"/assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"/assets/assets/avatar.png": "8ad00245e38de1d3326205a9d7f7476d",
"/assets/LICENSE": "45a501187779e84686f65d80818fde19",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "ec7e3ffb9464d6da014c494764f9fa4e",
"/LICENSE": "9e6ac8fb94e565bfb1d85392b646e2c8",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/packed-refs": "0238b0ea37584c4a0d95b34b8d22248f",
"/.git/refs/heads/master": "c4a843b3a499734200ab504d8513ba1d",
"/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"/.git/refs/remotes/origin/master": "c4a843b3a499734200ab504d8513ba1d",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/objects/1a/a98304e59ade84a3ea585ce80918f4f2fcd1fc": "8e1a81deb89a0251cec7fc6cc3af5ce4",
"/.git/objects/d9/e4714eca2efcdcbb0f92124c44fbba87e8c4c6": "538feca48a40906172392d05ea403f43",
"/.git/objects/b0/f796dd7a1cab75530f81abc7024b48476b3571": "41bcacbacb180ba2cd0afc198229202f",
"/.git/objects/39/4120c7e3a7ee4e8342002f046000b2ca9fe5c7": "ebc1f85589efa3e06d696d5de18ee7eb",
"/.git/objects/f5/bea1b3ecbaef4b569bca7c052b490c657b5675": "efe15036e6dd7fd49baa9ed6dca61c43",
"/.git/objects/d8/fefec846f0ad7e5f39dd7f923e281ad06bc75c": "7ac681322e8e3244803260ccceb8d3b5",
"/.git/objects/78/f49221903269afcccd3ddbf6d6a9cf5dbee482": "8549f16b0d5133f5098298ec1d2323df",
"/.git/objects/56/d14caba94bd85ba58db66c1315e601515d0ee3": "db580dcf49871fd34c54f6b52ef0982a",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/57/e659bb79954ad9771ed37e35e4fa351033595b": "6df460a0801cad1b008deccbcc3dd17f",
"/.git/objects/41/5ecee08658dd7a6a05ca0fc6bbf0bd2fc6c00e": "defd8cc76a206442297a39d3352b3783",
"/.git/objects/3f/2f8d3fc65f3f15aba093933055f7af811f94a0": "c6de2663f2101d7a48de29288d5a2eae",
"/.git/objects/bf/fa93b51adb6ddb08ea212a2d8ffd4c0d516cab": "ae782e814484840c8156d2792ad6a2b1",
"/.git/objects/c5/063396b98d92737f92c1188ebda75ce78c36ef": "2e829f050e6cb7abec0e75c3a08a4363",
"/.git/objects/f7/f8a030f8323a3641012286025955e83129d587": "dffd335d8e343be12e139fa70ddda195",
"/.git/objects/f7/47014284088fcb0d1089092a7a8068d0479bad": "a72ca724095ec06bfda3344d423a7927",
"/.git/objects/f7/271773fc260fd2cda1bda314b676e53f7e4317": "7e390835bb4cd0855278f52983b932ec",
"/.git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
"/.git/objects/4a/aa5ac54b81c0a50594b5985c988e286411eda3": "820d0841f590011d6513e94db95ef6b0",
"/.git/objects/ec/0b9afdc58898544d310babea1d5c39343dc579": "ac24d349b48157d1002c80eda5b5b55e",
"/.git/objects/50/5abbf1f347f6c6b21b2af9a24c80b39d8b358b": "ad1468052c73f08f34e15d7a6f5132b7",
"/.git/objects/8b/149fe7c3a9f36a87621007037bb3c335ccd882": "dcb058da0832f9564f37944219afff17",
"/.git/objects/f8/82c72e27294201ce312e20297b42ba850df4dc": "b5399fb79b2bc7948648088a5c85909d",
"/.git/objects/9c/ea20a3fa11a6f42cdd51a9dcfe0cd3c6ee98d7": "db59ef72c0231637b51194a476e7c083",
"/.git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
"/.git/objects/29/43882dfe0c2d36abd50e33d0671f880962261c": "ef1d2ddb11d4e331d1b0b51c840f865c",
"/.git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
"/.git/objects/dd/4897dc0dc036a8c2ea3d561e1c82c0238252bb": "0373385016b23e362204c3a486f7b941",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/ed/5678990300772db1b361e912350d22723e6d49": "6053bfc950c04ce9e52eb3603fb843a8",
"/.git/objects/db/ef116d224d8f796abe72ecfef9271f9d79f069": "a633ba18bbfd84d0c0ea0a4dd6b59348",
"/.git/objects/48/c221cf1202519b5c9c9005ddd9f012d6cb1060": "053e67cedb372e207c7b0003c48f6718",
"/.git/objects/b9/fc67ea0e40c499463477af5736c1d47aa7fbd4": "cbaa0573be06093203b2fc30e3d82d6f",
"/.git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
"/.git/objects/19/f2440fc9295579af619511b14195c444a9f8be": "4769c4795e8e1cb3d7e5258e2fffa81a",
"/.git/objects/ba/4bc5de3a11f52e04ca5bc0277c9c05a8358401": "82bd1a05ca59703c28f253d11557aade",
"/.git/objects/e7/2dfd0875bb2bd3d128b4e308ca004732b57630": "7ab24f6e3bb9e63f385494ca5e45f558",
"/.git/objects/58/1a3dfd64a68d428a4cea3fb49b55739e9a3e67": "5f6ca350ca50b331977621d0e7c5c90b",
"/.git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
"/.git/objects/42/14766557696d99c59f8bec400be25eeeddbf8a": "5535bff6f4483fc754f5f28e75d12ad9",
"/.git/objects/ac/19b329149abc2af5022ff4a0d870df6deb8800": "d5d17af325de4deccb03b8d79486c6bc",
"/.git/objects/51/2a000a5cf8a76768557850b42ac2b54347bd0f": "a83e72fedcf3ae97f75a4794c317dd72",
"/.git/objects/d3/ed6eb2db8dab79bd06e6a2d0f68be36a98b9cc": "dccb2d965ba4d29b9c4c17603437bc92",
"/.git/objects/a5/5f52946187e266ba19f1c665302712c56bc7ee": "a0f89c144f927f3a1cb6f6dbae1cb8b7",
"/.git/objects/a7/5fde4ce6ede2b26811d099f864236b74d6d0e5": "6d61afd95995fbe8cfe1096553491f79",
"/.git/objects/65/734597efd133012e3d61b6b5c0976b35749ebc": "197b25a5b7df75e55080408ee40b8e04",
"/.git/objects/be/f84be6e6a4f91ed3a78a589ffa2f54e675a7d9": "608b103d8cf06950c47af63ae3aad4d1",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/config": "c7a16f75da7242d1d56600e4806d12c8",
"/.git/index": "0be2f927ef8b4457a0d29ede9eacb03c",
"/.git/COMMIT_EDITMSG": "2d647b2eb61f0ba53ff144c3dd7a0f44",
"/.git/logs/HEAD": "fdb9037d41b6aa0641281e9b2e4e3291",
"/.git/logs/refs/heads/master": "fdb9037d41b6aa0641281e9b2e4e3291",
"/.git/logs/refs/remotes/origin/HEAD": "2923a3a8900cae961a175e2f916cb731",
"/.git/logs/refs/remotes/origin/master": "e8b40ed1837413b15faa17b24d5a097e"
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
