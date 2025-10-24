'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b0d00c3df0937f68026ae2f91e8042ff",
".git/config": "8fbe9f723c3a6de5f66fb1a38f662e00",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d1ed13379a462ca0464e722757ab792e",
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
".git/index": "fffda054b01fc50c5163cd35e4ccab3b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "955607107128dedfc62e0af75a53bfb9",
".git/logs/refs/heads/main": "6bfa96e193aa436fdf5c066ce224c62e",
".git/logs/refs/remotes/origin/HEAD": "471c04bf59c927fe337c28d8a3aa6c14",
".git/logs/refs/remotes/origin/main": "d85fa7a2381ac4187c13f6ee7a335077",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/7b8bdce96a76d9e1d78dc147f8f24a0507a37a": "4afba411a110f5e7760c64e48d67f34f",
".git/objects/06/dc50474e7599f8e6b3e1cd950a6f448c6d70d3": "f7c3ae7e9c41d9194bf5afdfb644aaab",
".git/objects/09/f1e7d9d56e5046daba1a60ddff6ad930d5cc31": "c0b949761efa8e4006d1f9d479e204ca",
".git/objects/0a/3b9a095fecbf3fb5e660b5be3f6fea3b7018bb": "a8691e9539e203aa7f1466e84278bb36",
".git/objects/0a/428a518fe451145c96ea932a0190ddccd9aa10": "0ec8f42dfaba49ff39006cd4237b8d2e",
".git/objects/0b/574684b322ab8a761c5c1780e518c9476dc794": "f907ca8aff1a65428bcf8d26d8e9a482",
".git/objects/0d/4d4b3484755c5c54e856f8f923ff4634d0eae0": "87c023f042efa1769f15d49ae9a079cc",
".git/objects/0d/f17e1d36f6c203299f241cb93fb27422e93b40": "1c2db5511e09aed5938620b86a80387c",
".git/objects/0e/7e385cee74008ad95482437d034aebb11c9cde": "fe16e44bce127e8ca9679ee189682bed",
".git/objects/15/47d9c3848c8fa8662cef03ee5586c3b5123629": "90408875f494ec1dccc0e4f6e9845fee",
".git/objects/15/6663348d8f9532c0036f6a58edce495e187b1b": "dcd6f21f62cdd2acfd36c2bfea460d72",
".git/objects/17/8e642998575af9d999a6a3857ba03ae442a58e": "3c874f52d54a6b148da825192c565c20",
".git/objects/18/4734bdd688f76397c36088f5509a42aaff9e64": "c141f3ee225e0d8ef6198ce803e9b76d",
".git/objects/18/9e8e95046584b82a42fc939c242c70424a6145": "467a14ba63a99efd767c835b63f25d18",
".git/objects/1d/0ea17b45e917339073bbe4c04962b0290685c6": "aff9291b24b8907d50f4e44976af57a2",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/48f454489a375054663519e7c6b51b62e4953f": "e0aebacec46f14ad34f32c671a36b027",
".git/objects/20/7ab2edfcb58335c3a8d32c4f862f9acaf94f73": "8b47c40fa0028963d6006c96a0711345",
".git/objects/23/567542c2433fe1db9b16a78c294e8b555b5783": "d0ba88750594dd604bd577f0139a6163",
".git/objects/25/381f4fd386a7d3b6698cb1e9d3dec368e03efc": "181e7f02deff4ae6f2ec5d1971ddae15",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2f/c4b7804bee550d8bc9e1c4ced244730752e9c5": "da9c444c5f127c2ba686cabb2b91e687",
".git/objects/34/4f564ba30f9ed65103de0ee711cd9e0184a412": "da6e8e78fe791bcd39e316115f6982a3",
".git/objects/35/1a5c41ffe2416c8f95d8c0b45a6f600ba4abff": "7c0935710d0b53f18d0d6404a02df54b",
".git/objects/35/8371e070435bfbfb38bfdde156d47dfdfd1a13": "1e47d80133cb0f33d59b58727166ef60",
".git/objects/36/59d1c3a34cbfe0a5991ddd7dd8ee7b13bd2d88": "e2810788a096254489c2142b08bc88ea",
".git/objects/37/88457f6715d6181e9f9377a0f8eb532cf9d2e3": "7fda497bf619c3e6fd81223a2b991ebd",
".git/objects/39/c6af8001ffbeccf0690bf26442e8312fba8a67": "8f0efe4adee616c807a732d839f4d3b8",
".git/objects/3a/2ac56d64e89e9f44f3a66dec4e0444a559a666": "c4b31012dd032a4a2eefe13e6675a39b",
".git/objects/3a/3c5fe22bd426099719932a5497352a995efdd4": "2620263de44ea533384781815c278925",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/43dc68bea2c0800e0aedd5c028adeb1992e805": "5537f8f7d64f52dd2e4f8d121a35a21c",
".git/objects/41/d611d2669f63c77023802d6510ce32eac95278": "17d1ca26654bf97c420cf4a227af8707",
".git/objects/43/188b4d83979a82b12e29d5a1369c71fc37d393": "4ae12f627b72b90de7147460034114bd",
".git/objects/43/29742e031085c544bf008f02ab60123f6243b5": "acbf6ba3862a5481d3da04ab010f9a4d",
".git/objects/44/0b2432ae75eab6185f10447651f7796405fd6e": "aad20614d920ec2db925c009a28e13a8",
".git/objects/45/f89ac82eb55ca7f4a89045c3e54568756a5b73": "6020622c7b48f1ac714ae347c618e38d",
".git/objects/48/a990c5c2fad5312167143997fcc9def896b5d0": "a1bf4ef2b4ccbf069b0d973974af36a4",
".git/objects/49/4dafb36faf8674dc09c5c47dedeb6d4b9d8227": "d573992d3e3f74fc4925959c16132dde",
".git/objects/49/7d0e5d71e15c54e0d04d6bf88a82f0680b2199": "a0d159bc27199dd385e35df57a91d1a3",
".git/objects/4c/079954853a621f8e013911252f6655cbe0d741": "152fbbd14d658cfb51975aa519783e1e",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/f6d173b5ddcd3e309c12251ed3228fb34e1efc": "460e470c6651e234f645af284c756fb5",
".git/objects/4f/361d35254f280ea266faa0098d7ec0bb3df690": "6c5cc831568eddf838d84bc413393fa3",
".git/objects/4f/930461f65ee140dda62af107088f938a47cd4b": "fdcb4c661bf0b879054b27f4d8b76b17",
".git/objects/4f/db785849a251840961c5de0e94cf0a62af73f0": "aa4937055870eeda0350f566f6fe34c7",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/56/448a58deff7f40e0e2c00633597cf2b089153a": "0146f6362cb386fd3995d127f2701ee6",
".git/objects/56/79cb03009a7f16eb31d82cd376bce4a7c76262": "14a589875cc3b81fadfbbac1bc4cc97d",
".git/objects/57/fcc908caa0cf68a5500a06b00d8ba1b9770de8": "6bf2f91482f2401cd6c86ceebcc47d69",
".git/objects/5a/70b8b1c2ea07eeb8691d474d7350d8df7e505a": "0027fa107b55fa534da54294b8851925",
".git/objects/5d/3b269c48390f815aefd14dc8ba832049cc4055": "5715b735a9cfad1617311831981b8d69",
".git/objects/61/38245f495da8b269265803053cb96e1485d58a": "4ee430eb6f65c63f2bf221bed8422dd3",
".git/objects/63/6952129e6b5231315754991e1929e01f9751ce": "e5837f8f273aeca8ea54810b53756159",
".git/objects/66/b00fde883876072dfb2ee941dd1ab1fcfe41b3": "ea8db4675f9ab195c801aaa8b8288357",
".git/objects/66/b96cdfea8e7faf45fea7b0d5296525c53e95ba": "af5e8baebcccde9a39a4d7f99fab0060",
".git/objects/66/e8ee19efad1e30fe4b8de2492f9277cdf5f1e0": "bcf35a11619807fe3a1d623e09d61b13",
".git/objects/69/7cd663fa29e403a48d4f9d3a66d27921f1a0c9": "6bd099bfa50640532819c5aeaebbebc5",
".git/objects/6b/b2e1d6d75266f824df528c0c5cfa1e9e397819": "de1302170965bcda5402913bd0b46c0b",
".git/objects/73/13b034a6eabfb3aac81dcb2dc8804ed5ffacb8": "5f7035261f91d5a46db5e74814ed168c",
".git/objects/74/c11899be90dd1a1b2fbe098dcefc2de41176c2": "a2d992c523acbb07c7efd28d974ef5bd",
".git/objects/77/3b40f26e6c3d4ddd8d0ee7f71d9b43cc756b68": "a5e6ac74d6f52734d762a4d10ce9f72b",
".git/objects/77/5063449cc64e5bb756465a09f251fa8e260d4d": "6cc8d7fb3c3e8bb0a263d6a504b98973",
".git/objects/78/779a06c877410ac7f59b9e623d2edb151ffa8b": "92345e17c35e6b3ffa2d241efa154529",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/d4701f4d65168122a6183943544ff701f05d78": "1e731011e388f0a1f817c11178892a0d",
".git/objects/7b/bff5c5f9f849c6ae3ba173d6f06351400e1ae8": "bff7b2251d975c9ea1e05594660d6807",
".git/objects/80/2047abe36de36541e48a33a603256d8ca595e3": "3024b3706c10d05a63a6119ed09fe751",
".git/objects/81/18a9b2f6902af01b4d6f6326d382fcb57d84a6": "0fa8d3500c5f9bbfdc41ddcc82118376",
".git/objects/82/ec916e08226bc19fa9ea8e0779ae377d48ae44": "56b38f981e659470db5dfa0ff1318e7e",
".git/objects/84/b82038500bbc13470c702ba1faa9ef22cb353f": "91692b81377056ab7df1e52729a929d3",
".git/objects/86/a1c106db2b3fd75c95ec886efe38c2ba43d8bf": "3157f8984e72db01466b5948ae2c2d7a",
".git/objects/88/23b1efa3838b283d6c30f1034f042965626330": "2040cead641f2960e0c587db4bcedc5f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8180518b8d37686d48a55cb168144a5ff53cd9": "f54cbade533466e768e1a7385ffe20a6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/be01a212dae4d0aa61ffaf3226dd428aec8301": "e33b1b4b85556e88d2d1047d2ea8c988",
".git/objects/95/f959ed82705935f4cb34e4e507bb3eff1b6a88": "de33446a5d13f4986d9ab0b2292b1d9c",
".git/objects/97/58038c433bdd7f5357b1ac03d085e9184f51c2": "36d723fe3adf4f5033fb35952951efcc",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/843da2ed88727e3b6c8abe1e7023d71667fe9b": "63ddf994600c97c569d74c4cf52e40f0",
".git/objects/9b/d0839ff74aaa876dd3e72edce176a8b4ae385a": "f5a5fee527993c239581e76af11708a8",
".git/objects/9c/1460cf4ac205f4f67ef169ffc9d284216205c0": "fbe88ad7156a2a40bd66393491edf6c9",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/6be80ffc347191eb6edea86303a24c71b06b8b": "acc26aa0189cff0d07ffcff2f693f218",
".git/objects/a0/11d72c1e6ae76d8301cd4791751a4046d75743": "65ce593adfd38939ebff407115d85991",
".git/objects/a1/145ff09fe1798b9d67a13705cf6095c6051740": "d584184471f7f8d8e4ddffdc3d6c59db",
".git/objects/a6/27db47c06c86186e6861a6a384bea46ee901c2": "98e6b8c060ae5630580b9cfea317c13d",
".git/objects/a8/32d90dbcffb6ec6af5c08937e2a07ad7624e5c": "2e4573310d493593a8c523795713e61b",
".git/objects/a8/c3733bdb645b6167599a4aa9502bdec176b791": "e6aa763b8c0be7ee4db806da2e2349b4",
".git/objects/ab/e8fbe4e5bba2ecb806fbe6c80b349b2032e369": "e552af9273fa634ff754beb81f067ef5",
".git/objects/af/58ae6b4d750e31fe900048864d09acdbe35c9a": "b781e017722a956b6b7b8adf750d3183",
".git/objects/b1/f030aa0d52e93426fceb6a9d014d685743e5a3": "b74d4929fb0dec33234fc1c0eccc3d75",
".git/objects/b4/ce1c22027bf5897800d2ff6ca907a5c5a8ce4f": "87f31f7af19e0643af63a7db418d414a",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/81f27268983409760408acaabe55f4dfb1c2ca": "a228cfc1b641c11ac16489a40b9afc6e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/43b7bf726482e3649e8b2b2be62f213222c9e7": "35aedb689ba91a82bdeb67cdadd077a4",
".git/objects/ba/0617dbcfd31123fc17bc2fe3c206d1458799cd": "5cc830e14f377b09cb8eeb6751e01618",
".git/objects/bf/ccde101ce3a38e5f48e60606acfa30f6053334": "a910f031998f653c79e0d41961e7795c",
".git/objects/c2/23a22d163df714832c22cdf9a2b14a8850d99d": "8f99c3778b7da4b9bbac391899093509",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c5/8ffdb87869a0ff0f53bbc1e4e4948ef6f7b32d": "fb94e293aa80092692ba2aaa04f19b0d",
".git/objects/c9/9f0c20613801fd490bab838e081a11ef7e81c4": "d295a9359707a432ab315e5ea399b3cd",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/f6241ab912414389de9ef6b17879f929eb7e00": "9fbb224ed9183d4495e67a61b008980e",
".git/objects/cd/9d845dcb408cc2f08e4eee1f012c17214d873d": "bfda415d8b2f96adb19d452aa144bdd2",
".git/objects/cf/0c6f33651287e568224abb1f7583d1d7e0764a": "88a59f03c03e35d6507c52ce76a68f5f",
".git/objects/cf/87b4b19f77568edacef1f3b35d3cf806ab51d3": "04a3aff1570c0607fa78734cea4041a4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/a359d04e3ef0208995a0d2ebe70a7165ce1611": "91a125fb0e85f0433f392f78524d784e",
".git/objects/df/8d06a0f884e945fd67e4a952347adcb4c3b203": "170b6bb857071017a8f86a3616d97533",
".git/objects/e0/92b86f6ed6eb69ecb1029710b83fe621f26c06": "11f6151a276c822b8642b1e2cf358cf0",
".git/objects/e1/59d2d63e04302e518ba06d96aedacf08b99307": "dc60b378e760bddf77ab1e1b5baf4b4d",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/dcf641a963ebca7b72feaea1bc147305c7efb2": "e43856f40f3f28f653f93ab24163ae5a",
".git/objects/e9/1c928179c11cd3c67c035054f7e0691da958c3": "fab075834cdb7b934f715ca3a1e26566",
".git/objects/eb/1e8d88390c2bddb332fb3db69cd0a5cfde7d5e": "7d00c9e8ee1b90e401f07a290b2de853",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ef/957ff662cec4886f1de8374411277def92126b": "1e9234f827f5c3deb3b64f2b0415327b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/4cfb5c6130b15bbe63d167f8fe50641a24ac8b": "0aeb2223d3bf6c0119d01bee2b5a2894",
".git/objects/f7/b23b3036dc4733cd9af0e8a6388177478611db": "1d71a5af75fe09500cd8b55530117275",
".git/objects/f9/b5638da506f21dc320a2a860b8a63e47b1a901": "e03510db6dbb0ddf3bd30ae01439c222",
".git/objects/fc/a4a3f11aefd91dd548b7d1383df32bc8a5862b": "b65e17c832f7ec455d1133321adfde2d",
".git/objects/fd/54d4f9b8a925e8de847172951a46d9dbdc0639": "3784b72ce570f2828b4770c2a925a436",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/ORIG_HEAD": "fa5ed3b7fc65aed2de99eeef38423c1e",
".git/refs/heads/main": "700f4226711fd0a50825e73803097f11",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "700f4226711fd0a50825e73803097f11",
"ads.txt": "ac8403414f1247a3a3a8da4a0211b283",
"assets/AssetManifest.bin": "60a338ec88cb07292a1487b319a13b09",
"assets/AssetManifest.bin.json": "06fac835e9a169e9ad42e79e951b5cec",
"assets/AssetManifest.json": "16b49a9c02d3552cceeefadef0883e97",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "fbafd7bf7411d89b1e67e7cd61d64e65",
"assets/NOTICES": "9844cf87930610b70c9ae107d9e167c3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"CNAME": "b1cbd411264df979cdbac30df0e0b73f",
"favicon.png": "7c286e9d33acc386cc2414087738dc6f",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "86f5808f20bc893a986e9974ee004967",
"icons/Icon-192.png": "82f5eeb7ce9ad993d28bdb3b7f02af1c",
"icons/Icon-512.png": "c78c0662ca75b4edb6f4f21c9dd8ed56",
"icons/Icon-maskable-192.png": "82f5eeb7ce9ad993d28bdb3b7f02af1c",
"icons/Icon-maskable-512.png": "c78c0662ca75b4edb6f4f21c9dd8ed56",
"index.html": "385285c457ffe7826a6d4151fd0c6d5e",
"/": "385285c457ffe7826a6d4151fd0c6d5e",
"main.dart.js": "135d4202c51e326c17210066dfef8e38",
"manifest.json": "993196a7aed79829a491d562612457a3",
"robots.txt": "a2445a41cc35eff0113db188d166e6b7",
"sitemap.xml": "18223cddb13154a9efde9408305b2155",
"version.json": "e6663d461ef6128b58073c007705dbd8"};
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
