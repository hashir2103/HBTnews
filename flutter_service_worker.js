'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a55f15ac43724b10219db594415fcba8",
".git/config": "8fbe9f723c3a6de5f66fb1a38f662e00",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "da8d7ddc1d51cd49c6c5adf5e92dd262",
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
".git/index": "107e282dff927b334a62de6b16ff1c4c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b6c2c5958b461906fc322f4c4676c8fe",
".git/logs/refs/heads/main": "8673e14fc8b8d0c587b736e461914f13",
".git/logs/refs/remotes/origin/HEAD": "c3055e4aaf9e9dfd315adc0861a5510f",
".git/logs/refs/remotes/origin/main": "e681f9b3ba4f6cb76691daff9f6de80b",
".git/objects/01/2c95c1480648c6a4e7db16345f55d7a57b0a55": "82b7c43f90c45130daebb995fd094d3e",
".git/objects/01/af5319f5be05a889d6c42773aadc1bbb419e1e": "39dd8f2212e9ce3f84b694b69173c1e6",
".git/objects/02/18673303a44742cb96ea02a6d4cab030e25c18": "709a5bf319bb7ebbc5d8c30925d50fe9",
".git/objects/0a/d3ce83d29691fa92be8ce24f3d4c6dc5213d84": "845b8d97ac81ee015f68011f7b07335b",
".git/objects/15/f0601792b46216ca75bf7536609a83ee3b982e": "feac211300f6ae171e003f39916f4e53",
".git/objects/16/5b79f302922cf5196a8af174be89a0101faf2f": "fc3e5ba165c8dcaee9b8639763aa1dc4",
".git/objects/16/c5ad71045ee5b79a4fb5ac3bdc93ef3e2e905c": "783724517004d205cdf55cf95efa9fa5",
".git/objects/17/907ab810b6ff81eb1f0ea8a882a858ab426dc7": "462c8283cc66877768a5fcf9834f7d90",
".git/objects/1a/d34ed3178912f4103cf9916fdd90574aad6ca4": "3992eb9dddea8bc821badf956fe63254",
".git/objects/1f/12534959345d2ccb3c74311162439dd5727d13": "f31a97e5282e22ce0f9c1b2dc8963f1b",
".git/objects/23/7562697026398d5d5d723df9b8b4b4defe40b2": "7d76cdcafa09941c9b9b2e4c8b94082e",
".git/objects/2c/411962f570e0a48c82f9eb5a8a7dcdc9ec3004": "fae65ad5c6fb6574462c98f9af2c8ba7",
".git/objects/2f/cb3c764f27f610db58c505010bfe06021a0acd": "4112b0683c1905a3f8ee3f5ef4fbfaef",
".git/objects/30/7575b27f296de98fa975a9a240087efdd537dd": "639fe3a1b2e5957ca72193b24da5ef15",
".git/objects/33/0732180e96679515f052150038350a4e41de43": "70e5d96527083b4a2908c5e1149181b3",
".git/objects/35/65bf413c3dea99ebe10cbfe8f82f158b232ccb": "9d966ddde03678845c126c838514596f",
".git/objects/3b/89feb2d08862990f87c0488ffc3177caf0d64e": "d4995db21fdea82f63fecaf4d0863501",
".git/objects/3b/e72c6c87250c0d58516f648a71d58ad2887364": "06cf2ef1ea7f005532e0c21a4c1067ae",
".git/objects/3c/6e433af48ab0610a353c945a2023b36c8524a4": "de4b34dabc62968820d844f7c725f81b",
".git/objects/3e/37490468a492e54d930302faf2fb86f47cfb61": "64498457241bff039406596607f55997",
".git/objects/3e/7c43c977b684447151e89e8f94c2f5dc484f40": "973489dc0eb2bd25936b2edb248d796e",
".git/objects/42/64747d4e3afeb72773e61a3c322da23b26f658": "61834aeb255aad84ddd055fe30884ebc",
".git/objects/43/0768219f10e2bc2487efca67dc56422e8d834f": "2045fb06e46baeb4c53139542df57f52",
".git/objects/49/12d99bd1cfecdfdc2f5685733f81bc70e5f2a3": "824d5fa2fbbf0abe36704d76b26a6e07",
".git/objects/4a/186e093bab1f728f4feec0358dff60ec4dc1b5": "d7b834e0685eebdaea27c5debea25591",
".git/objects/4b/92111f6243e14dd2d1597e75e989da515afaf9": "b90b47ea9fdd3c7cc30bb1aac22d7d9d",
".git/objects/4c/079954853a621f8e013911252f6655cbe0d741": "152fbbd14d658cfb51975aa519783e1e",
".git/objects/4d/68cc8e595b191df83847d3a8b994a055aa5551": "4143136e9f6920f7bae23bad8a16f983",
".git/objects/4f/d2a8eb4cc3806e35b3da6c50b690a2c55e9737": "b91acb55a7e0808d94e560dbd9ab1323",
".git/objects/56/47c48bb8803c1e2f81a56926e311c2382b4ad9": "6ab08e569944a7955512a8ec4af30dc0",
".git/objects/56/79cb03009a7f16eb31d82cd376bce4a7c76262": "14a589875cc3b81fadfbbac1bc4cc97d",
".git/objects/5f/94dd22a518bd7c3f6e533deef78d4969be0cf5": "83c761441825493c5b5c883f85b1397c",
".git/objects/63/6952129e6b5231315754991e1929e01f9751ce": "e5837f8f273aeca8ea54810b53756159",
".git/objects/65/248da873c92c82780ec91d5a9eeddb95f42650": "32f0e0d6575cc07959b2baf65794941c",
".git/objects/68/c30e2ffff50b4554571c7e02df9bc1b2855208": "db88c55f22db44df79647d98a4808fa4",
".git/objects/6d/ebce28c693ddd6b3c71eceb802b409f9daf7ba": "4619febdee83dbe464b190b263bb51a6",
".git/objects/6e/47f8cdbd1bc801251e33766249326b04662b9f": "d8f2c4d01b5fe6091f1f8cadd247c485",
".git/objects/71/55b0dd4b41dac214b98c2412a0a5c58c3c0366": "d8c21ccb96b0128f8e1df59d125c29d9",
".git/objects/75/332cfa349e79fa45dd4b97a650cd2db542cb18": "319bd5ff2a52d7c13fafc33fd6138d37",
".git/objects/79/1c4c9476f1e26612a166750d091fa0d03ceb6a": "aa913645f5145df46ed7f80393c55799",
".git/objects/7c/902dbc88c13cc3015afadc86d74db0dae0a373": "4f60798cc49f20c58dfda379f840e979",
".git/objects/7f/ffb373484b473919e63b17bc18533f4ed55149": "aa24263684d606176fc86f77c6d1be17",
".git/objects/80/cbc0ec32c2322d6c1edd671929ecf858e8dd0b": "417a3b450232768beb05fde0b2961da7",
".git/objects/83/67f680609f22a20ed09e51ba50e2ede6afae36": "0ad07624c1154ea01291eef6bfab7350",
".git/objects/84/b82038500bbc13470c702ba1faa9ef22cb353f": "91692b81377056ab7df1e52729a929d3",
".git/objects/84/d69b549ec74974fc8c71f071168db77934cd91": "9f41c02748796df4792369cede5f6c20",
".git/objects/88/185040cd728c51991a70222dd56b18fd378124": "d6be874c2e3492e34208e6d24d89ad76",
".git/objects/88/1aef05b05522a268b34c7b3df0c39cf699b240": "53f4b51910cc58fc5d3402d234e61e2f",
".git/objects/88/ac9a1e627b22862284115f27f178ffbb2542de": "77a9ed2011b5e7ac757a250b895d7eb0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2728f26b1d26f329418ee1d540ad5fdeb90407": "86e731b916f4ccca8035912d36f72120",
".git/objects/89/d67741006b387b677230dcd970adc241bb9458": "12e41278309e9b892493f11921bbb1c7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/fa06590eb837ec5254471160aba9887f712249": "3dd2d7804e228325293ab750245a2d55",
".git/objects/8d/e8bc804b3d098d11b7b132b2d1b7bddda727ed": "e677a1971e0c44add02850373610672c",
".git/objects/93/1602348acffe406eb3a32532dc304679d94da6": "28a228553d6fd49c2c06886ee9697f62",
".git/objects/98/e7c0c0139389c212043547d93a496653d56158": "924cdd98003d1eb5067b7eb9d23c0705",
".git/objects/9b/059d743eb7f86d56a3f5ac66a63a700f03aa2d": "2c4904274a5550e142f6cfc0f3f143c5",
".git/objects/9c/1460cf4ac205f4f67ef169ffc9d284216205c0": "fbe88ad7156a2a40bd66393491edf6c9",
".git/objects/9c/a4e5bb137affee14d9043b2c643ce2c825d0b4": "bf80d4e68892aa107a31aa10f3082ac9",
".git/objects/9e/01349046781c4502abe939f5f67c8eadec335a": "eb6c3e48e6b792a23ce0c15bac3ea4a5",
".git/objects/9f/de8c740205db324f744f245b4abd78875064bc": "4fc4b1445969dc6387e614af25eac5be",
".git/objects/9f/f677e485bb5ab130431b5cb2d27c6200b51ab2": "bd9413fe43810b7a37c4dc1850a98e1d",
".git/objects/a0/55524bf240622f0d50d31f76a153dd86cb64af": "fb46786dbd685990541a14a034427064",
".git/objects/a7/d42cf7c9e64dcbc6e1220a761525c70c38393b": "60fcaab2632b604dad998533fe507766",
".git/objects/ab/68eb735d8af79c6637b238591d0591eeb97fc2": "8bb8b6b0728a951eb49193ddaf297547",
".git/objects/af/19a79be6256cdfb06b692853b4e45025f7ae36": "2bb2535b4e0fe0817b1a104e32eb0b76",
".git/objects/af/58ae6b4d750e31fe900048864d09acdbe35c9a": "b781e017722a956b6b7b8adf750d3183",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a950b1c9a53e7cf3aa0cfa5a6bd17eae81111b": "bab1cd0ae652ecd0381469cc97aaf07b",
".git/objects/ba/0617dbcfd31123fc17bc2fe3c206d1458799cd": "5cc830e14f377b09cb8eeb6751e01618",
".git/objects/bb/5ef5b895bb033d4c8e741e6002b5cb9cb8c021": "87c96b5b780f4d70e69d26c8fe63f0be",
".git/objects/bf/a0a08c97bd0af23164b36010d250d1bc272701": "2e27305fe2306f3af213486324b4eed3",
".git/objects/d1/7e6736512ad3a2a52633c603df76d927b35c9f": "9ea689a9229f5d2e9dc0dd0448532749",
".git/objects/d3/b00583ee9a77d9ca9550e511ed97861518e09a": "09d207412823678406283f26c0f4715a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/7b0ef6c7b6c2416de3fcf6cc8f95a4f1cad973": "30753555a993162a2a9ea8b3e0a5929c",
".git/objects/d9/fd9e68d460d74386048489e06500a797f54d58": "2f6639ab6051eab492805b4796e9b6eb",
".git/objects/e0/659d8ce28770cd5667422e6275854012863eea": "5b866a59f222074eea5d6ce9f97f7086",
".git/objects/e6/b0eca0ea2656be8fbe904bf4f88478c9d32283": "63f971d85953870a4eadde1483191554",
".git/objects/e8/586e417210cb58dd8e9bce28edfb2635983e83": "bfc839970744a55cb0c8d8fca9e2d214",
".git/objects/ea/5420069482e0904f6268ffe3e1a7d7372a15bc": "a57b218bbe27b865fb906ae99d7cb111",
".git/objects/eb/374a61fe7334465a6a38c9edc7d604d35ffc28": "815a1eb77a294e8893468d469c41ab75",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/bacc2ea9c536136838028f407fa6f9928528bd": "dd6ff86902267e004de7572e1763effb",
".git/objects/f0/e3fed858560781a748643e4a9080126c2411e8": "c0cd5047f036c914d98fabe033f857fb",
".git/objects/f0/fadcf9b2ecfaabc7040d9618cbc43ca29a4246": "e08a67be6434cc39266106a063780f2d",
".git/objects/f1/42ab09d3f1bed844ff46beeda34398550b694b": "466df33889f2bb9dc64f6af535aeb39b",
".git/objects/f8/dc2257de2c1be8a7539c01a86afa51268d8d0a": "33e707dd4503bd5883a390fcc2bc67ca",
".git/objects/fa/a669086c52a0c21e2ba8dfbd003f4dc981128c": "f53090383cd0c3bcec9f4aba3ed97f7d",
".git/objects/fa/efe51d1818aaa8575b2fe890e2250c79289317": "14845b20c8fc303d4f6327e1a59e9028",
".git/objects/fb/41eaf8878600f01531503db6fe6d20badc8261": "18a6b00441be09dfb6da85cd115f75db",
".git/objects/fd/54d4f9b8a925e8de847172951a46d9dbdc0639": "3784b72ce570f2828b4770c2a925a436",
".git/objects/fd/c02681b37d459fb6794e2ab290621e01ff4a54": "3b0e033bf39c7d16e25583b926224838",
".git/objects/ff/9f6498fc3c94f1154aa1b5ecb1c74c6cd3d8c1": "09e66187164e7c5cb42812b41afa0365",
".git/ORIG_HEAD": "804ab59ce35ba38d02ad52bd89bbc40e",
".git/refs/heads/main": "4dfd4b283aaa5b60abe47e344aa5a153",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "4dfd4b283aaa5b60abe47e344aa5a153",
"about.html": "9108b90ca19389df47bff7791767b3da",
"admin_panel_settings/index.html": "e19010030ad4fa5c27680cb5ba2d1942",
"ads.txt": "77e5843c19a0df8b27dbf6fae19c3de6",
"app.html": "cf3e744a2dfcdaaa6a82d30abcb0906a",
"assets/AssetManifest.bin": "60a338ec88cb07292a1487b319a13b09",
"assets/AssetManifest.bin.json": "06fac835e9a169e9ad42e79e951b5cec",
"assets/AssetManifest.json": "16b49a9c02d3552cceeefadef0883e97",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "e665a7b05c9949a2c7c9df6b09bc26d9",
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
"categories/economic.html": "fb98da3803a2f542b9eaafee25b82c0f",
"categories/entertainment.html": "22360fefc45fbf74e8c1c6e2d63123be",
"categories/health.html": "9219dff3d783f05e66b3a7a29ba3b476",
"categories/tech.html": "e4160032ed17c95aa0de9ee9289f06fc",
"CNAME": "76731bc0f395a3f7315b5e73784b62f9",
"contact.html": "6fcf5eefd3df54bd09a773537a6633ab",
"ezoic-eOhTabOhJxLM7Hqy0UEafWQ6iCB1Ca.html": "016ffa5f5a8381ef54f79929b0e0d5da",
"favicon.png": "7c286e9d33acc386cc2414087738dc6f",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "61e75064065c49ba0ebd928c26816001",
"icons/Icon-192.png": "82f5eeb7ce9ad993d28bdb3b7f02af1c",
"icons/Icon-512.png": "c78c0662ca75b4edb6f4f21c9dd8ed56",
"icons/Icon-maskable-192.png": "82f5eeb7ce9ad993d28bdb3b7f02af1c",
"icons/Icon-maskable-512.png": "c78c0662ca75b4edb6f4f21c9dd8ed56",
"index.html": "0f342e13704dad526c59ce271ca1621c",
"/": "0f342e13704dad526c59ce271ca1621c",
"main.dart.js": "94bfde1e397f9174cffdcc1a63974e71",
"manifest.json": "993196a7aed79829a491d562612457a3",
"posts/00f0ee73-9d1b-477f-b6c5-e7575261fd91.html": "af2acf663655333e0145453a03dda693",
"posts/15497cce-bd8d-401d-8939-f8367e31171b.html": "cba8ff97841566e05f3b256921108d53",
"posts/3417dc6d-e446-41d3-8108-804963a3bcc9.html": "5bedfe2dd0dc9248d2a433710c8b75bd",
"posts/39ed65a2-e046-4e2d-89ff-e0c823b675cd.html": "f396ce4ce53bc591d0578f5547d503da",
"posts/45f07d21-70df-4916-9f5a-d98e91cb4ecd.html": "18985d3d1c915399854673d1c0475839",
"posts/5056aa50-b8e9-4947-8d5e-ba7fb1cca20a.html": "07ec4c4bac7da00a4e4b61ebaeb2f8bf",
"posts/54fbadd7-581f-4d2a-95d0-f76a23f0514a.html": "e82b0480a982d46336d7fa1dfbd87e46",
"posts/57b7d2bf-9ee3-478e-888d-4f5b2b62c6f6.html": "c8f7423f8427cbe59f945368b0f8ca79",
"posts/61c21ffb-42e8-41a8-9c75-00b597df757c.html": "58b2aac69ec64c82428752cb5bd13506",
"posts/6cfa2db7-14ed-4c5c-8d01-12125202b5b2.html": "bf48b13d26a99739bb7cbbcc00f5298b",
"posts/7425b39c-7a7d-41d6-8e74-3cbaa4f8c377.html": "d472ae7ad39eb24a492c218dde6e7eb6",
"posts/7b664659-ee52-4cae-ad0d-cba4c67b736b.html": "c589be8a22ee526b1b8003a2a3b12163",
"posts/8c1fb212-eb95-47d4-89af-0886def143dc.html": "ec4475f301e50fb72e631251959a3268",
"posts/b335a5e7-2315-4f2b-a97f-5f84b09fd9f5.html": "cdf368337ee4fe58c26998db4f2d6299",
"posts/b33ef77c-e0b7-41eb-b294-ab1b53db4bf4.html": "a86f2bf2aced1b6e26e532272d5cdd9f",
"posts/c02ae2dc-5df3-4492-af1a-979ef34b20bf.html": "ffeff539196df933f9e08789c9f9c283",
"posts/c893ba9f-dfa6-402b-8106-a8cb3bff7f6a.html": "2be63154d8cb2476ef5af6602d9f6c78",
"posts/cbd915db-9402-491f-8ce2-d39e8e4b4ee4.html": "f5bf79c778da0b64a9c12c5413d82d71",
"posts/cc0377c4-d4b5-4304-85e3-995acc12de13.html": "12195c227163f065cddc7e5eb46ba735",
"posts/e40a2867-9cc7-4ac4-855b-81c42c59e1ba.html": "bbd116ad1a522d64484a704ac01f06b2",
"posts/fa476da5-9f45-498f-ba0b-d7bdca3d861d.html": "82209c1b3865d9ab68f66effbebf3e49",
"posts/index.html": "f1a9028c2cca46c2d8c9de4f248abc26",
"privacy.html": "576632cafba418621e0e1c8722805d07",
"robots.txt": "043f5334a8b7727fda58c9772970ee01",
"sitemap.xml": "bd31262afea2008257f360c7905570e3",
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
