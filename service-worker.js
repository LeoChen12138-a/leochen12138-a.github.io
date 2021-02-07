/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","30b1489001f94cdfb247ca22455e2e7f"],["/Demo/index.html","5d95df24b66c6263d42bf2b3cdae9c89"],["/about/index.html","1e544c5fa8e2eb656ff13f07f68f3feb"],["/archives/2020/07/index.html","f5393625b65e6f287496d703c5e51797"],["/archives/2020/08/index.html","524d4e538e0bc70e22fce5444e0d92d4"],["/archives/2020/index.html","5c6364984e7b9abf75852e7c35a1a51e"],["/archives/index.html","0f8ca1d362a88c03b779a1fcdf4c238b"],["/books/index.html","e430b074fc5c72439d9d253ffcdc0ee5"],["/box/about/index.html","e85ab5bef8e114d6ac13826e17a1c7df"],["/box/css/bootstrap.css","9ca6f51775ae5b80c6ef8b1c3a7eb73c"],["/box/css/fonts/fontsawesome/css/font-awesome.min.css","f3f10074ec2b8568bf0a7e649d7027d5"],["/box/css/fonts/fontsawesome/fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["/box/css/fonts/linecons/css/linecons.css","6b210141b869503f3f2d7679bec9cc41"],["/box/css/fonts/linecons/font/linecons.woff","9c45ff1c4d1c170f1a4025de9be5e111"],["/box/css/nav.css","75308d280619861f0c4ac7339dd2e4cd"],["/box/css/search.css","7a11e95ec256b075c319c2ea326785e7"],["/box/css/xenon-components.css","b537e8f256abe5f550429c8bd7f7b1cb"],["/box/css/xenon-core.css","9f85afc7b0a4dacfce572ffb8cf00c9a"],["/box/css/xenon-skins.css","fda2e8cce17be8139d30748279c44d2a"],["/box/images/logo-collapsed.jpg","8fb40bdac6d38470fbb634a20c9c0bda"],["/box/images/logo.png","4abe78a4f5a06a759327900337efc0f6"],["/box/images/logo/199it.png","ed39c628839202f44f2c74d9b0345e5a"],["/box/images/logo/1ppt.png","13cad74bbf9d79d0610f91a106181ed3"],["/box/images/logo/2048.png","c774b69eb9a0b806713da3fbe509ca1e"],["/box/images/logo/360.png","430f962dd58fd3b8b355a68d22e551d2"],["/box/images/logo/51cto.png","48aa0e765ce66b573c5657496812dae9"],["/box/images/logo/52pojie.png","bd2b7d7f00a7c10c1488a743e5b6bba9"],["/box/images/logo/52solution.png","b04bf71e93898235f226630d96b36638"],["/box/images/logo/588ku.png","4acb15acfcb124bf4e5bf8a37be8bce4"],["/box/images/logo/58pic.png","be65507a5323934f002e22d2e71b5e75"],["/box/images/logo/JavaScript.png","2ae2853d19c217933f59bb1b2cce3b66"],["/box/images/logo/LICEcap.png","60fd44e94b44e12f0a62fdddbbe46958"],["/box/images/logo/MongoDB.png","431f362e77f03eb4a18f56f13b912f79"],["/box/images/logo/Node.js.png","b91bfc68f7e16dd9e169e32414a1a6c0"],["/box/images/logo/PacMan.png","655e39716c53d0dacbc2c56ab9d97a90"],["/box/images/logo/PathFinding.png","5530e4cb23a7c9c8c2c4b7f2ad65aa01"],["/box/images/logo/PicGo.png","1738e055c05b7798949c44ba210aa411"],["/box/images/logo/PowerToys.png","e02374c721950d521544d31b39557aaf"],["/box/images/logo/acmclub.png","e5e4d12c6f824f35c3077e21d4ea3255"],["/box/images/logo/aijishu.png","77630f95c551f7905695e909aa57a81d"],["/box/images/logo/aliyun.png","d2a0f2377cad5dae7435b9b9b3757fc0"],["/box/images/logo/android.png","8d020e4f3cc622aebba9ec2b6d290b08"],["/box/images/logo/ansheng.png","675767e66abb9968585bf3a6b6f9d74b"],["/box/images/logo/arrow_up.svg","db2e69f39ca7e1fe96a927cad71f663b"],["/box/images/logo/atguigu.png","60baac22659b3e25e04d42b00f61fb64"],["/box/images/logo/awsamazon.png","796a4890dc0a3eb25cd26ca37df881fa"],["/box/images/logo/baidu.png","3c840f6850fdec05bc941b0c999656f5"],["/box/images/logo/bazhuayu.png","857471b55573aceaaa917225463b20f1"],["/box/images/logo/beautifulsoup.png","9a82ba2e231d891598cb1b876b4b05d3"],["/box/images/logo/beian.png","91bf25ac2e5f970b9b91a89f174218b6"],["/box/images/logo/bing.png","24ac5c9dce6741627fcbd80a64f89e3e"],["/box/images/logo/bitbucket.png","1ab0dd33c43d29c32e0578937684d645"],["/box/images/logo/bypass.png","3f148bcdc8318a8266a87281f199354a"],["/box/images/logo/cat.png","77d37cf77588173a35896e66ff0643c1"],["/box/images/logo/ccleaner.png","f05cd50633dac306d1362cb17551bc4b"],["/box/images/logo/chaojiying.png","8772b3bf78c5ac61be119e1d539198da"],["/box/images/logo/checkio.png","f6f9c9b0ac3b10ed797eff839bd6b6d6"],["/box/images/logo/chinaz.png","b5a5d96d3785dbc6ca41440f5e076d30"],["/box/images/logo/chuangzaoshi.png","cb4945eb06ed8097c1ef7e761571a62f"],["/box/images/logo/chuyu.png","d10cc22d8de53be83bad5ece0333f6db"],["/box/images/logo/cli.png","353ac609e9f03f59e3f45449fa1913a7"],["/box/images/logo/cloudbaidu.png","5bb2fefd2bca950a3a87ce14560c7a01"],["/box/images/logo/cloudflare.png","c1ea4098f952375d3153c0de5b2f63e6"],["/box/images/logo/cloudtencent.png","cdfa0d365f191147d47897a67a1c326b"],["/box/images/logo/cnblogs.png","7ce809c850a25130a380e157a687a294"],["/box/images/logo/cndns.png","84190bbc33800328c66fdd89148f6b36"],["/box/images/logo/cnpycon.png","e5ebe73b6d5a6d354924241de6ec88d5"],["/box/images/logo/codealiyun.png","8133d17d1c3e0a332100fa0812fa68ba"],["/box/images/logo/codecombat.png","06ddb5d5a97ab4ecd054410220681f1e"],["/box/images/logo/codeforces.png","2a53f9e960d5c55d106dfda6c93f2bd1"],["/box/images/logo/codemart.png","9ad9ab046c543993aa4309b0f8408b68"],["/box/images/logo/codewars.png","928e4420381968f50bb17c4442cb20ed"],["/box/images/logo/coding.png","9c7e14c5c2933ae69032c46e72b544b1"],["/box/images/logo/codingame.png","03404b241e0d4d856c88d8b347d47c22"],["/box/images/logo/colorpix.png","746eb7c39aa25f0fae2fe822c07be303"],["/box/images/logo/convertio.png","68659e634ba841959b65da518f6b5d4c"],["/box/images/logo/cplusplus.png","e07c7234e5dd2281c97a336b00ba3b01"],["/box/images/logo/csdn.png","4b0036205d477ed638ce52615368c853"],["/box/images/logo/csharp.png","1fdc835d7575c781f087e27167833b8b"],["/box/images/logo/css.png","73b2e464feb236ca7307a6d136bda956"],["/box/images/logo/csu.png","b76f9b192c2a371e5a12027262bf5e04"],["/box/images/logo/cuijiahua.png","767d6d871200852ba07e9d661d84369d"],["/box/images/logo/cuiqingcai.png","cb48d30a3a2d7b60d89a1fd5b3a6778d"],["/box/images/logo/cyber_dojo.png","73226a986b39236b4162eb321409be30"],["/box/images/logo/dash.png","76d11affa5a83d0ab2fc3cb917b0fc21"],["/box/images/logo/deskpins.png","212dc7d3c4da495f96372f0bbd947dde"],["/box/images/logo/devdocs.png","e3de2947e6d11e568d4ddb35b054e401"],["/box/images/logo/django.png","88c940d7bfe48052b02230e884e027b5"],["/box/images/logo/domcomp.png","8d0d223026e34fae3629bbdb9fd083b9"],["/box/images/logo/dongwm.png","e51e920508fa17ae820006bb96356b34"],["/box/images/logo/dotcpp.png","37d40ad432d3c1b516640d52fff60d8a"],["/box/images/logo/dotnet.png","1dd6726f36b6afa77a3093956d3c256d"],["/box/images/logo/easeus.png","1b91cab0bfbc078a2c869601291a6c3b"],["/box/images/logo/edu51cto.png","4db310e2e53f4ba73335a91c93874378"],["/box/images/logo/educsdn.png","14465481cd27871944c3064de4b2f2f3"],["/box/images/logo/eleduck.png","522eb341d1102fccfac8e55eb451f6c6"],["/box/images/logo/element.png","a6fdb476ed84fc70bf9e5130f73ec2f8"],["/box/images/logo/elevatorsaga.png","57de049e03c7eaaa5d05e35c3c6acdde"],["/box/images/logo/everything.png","918895d44d3edd2189972d3508783576"],["/box/images/logo/fences.png","5dcb3d29ca17c68a0bbbbc37014438fe"],["/box/images/logo/fishc.png","a86b491015a4fa5ec8b68257f1e15447"],["/box/images/logo/flaticon.png","afb12e4e6db39255ed755b086c8a2a94"],["/box/images/logo/fliqlo.png","138a3662f68650d0fa43a8d114133ee0"],["/box/images/logo/fontawesome.png","edb368dd241505fef9e63aea6f16b38a"],["/box/images/logo/foofish.png","5dd1128b6932e0dd618878c339c22b2d"],["/box/images/logo/free_programming_books.png","5d59884d75cda1c9fd539e0cbc8934fb"],["/box/images/logo/freekeer.png","a3d49719b7bc1c4a3b564ae594fa4822"],["/box/images/logo/fscapture.png","4946e078adf6fa2d4c8c4ecfcee04548"],["/box/images/logo/fudan.png","4f4ccc6cae5729fb2ce200d0abaa9151"],["/box/images/logo/fxxkpython.png","c8cfeb195b40b148dd4ef3e19ff05682"],["/box/images/logo/fzu.png","bbe73408ff27d94b69154f927b12ece3"],["/box/images/logo/gaoding.png","54183d88b0df144719f4ef8c36c6cd99"],["/box/images/logo/geektyper.png","f0a4521542c5a1a7e3d80bfcb53d162b"],["/box/images/logo/gezhipu.png","1339afa58ca1e590913d5ea10bcaa4d3"],["/box/images/logo/gifcam.png","2f533b5d06892deed0eb339338871e6b"],["/box/images/logo/gitee.png","0ed4f7b3bd12d939d324088f8d5b03dd"],["/box/images/logo/github.png","e847826bb34a82e949cfcb5cd15021dc"],["/box/images/logo/gitlab.png","0870cac1edb351500ae40850f9fbd0f7"],["/box/images/logo/glidedsky.png","8c0a3e155b48511e433d6e1ceeefc728"],["/box/images/logo/gobang.png","0a72110b759e3094e9a92fb9290074e2"],["/box/images/logo/godaddy.png","9eb1a27ee869b0f3e4536e98aeb3e824"],["/box/images/logo/golang.png","aeaf6bc9167cf080d4442062153ecdff"],["/box/images/logo/google.png","ca0812c7d8e74dec41df8dcb1c70e0e6"],["/box/images/logo/greasyfork.png","79138910c5af2d6b0350bde46c67feb2"],["/box/images/logo/hacker.png","9e7612e33c7008b8aa3531f9e1322851"],["/box/images/logo/hduoj.png","27b9016e89af0fe2a99bc50ff2f7bff0"],["/box/images/logo/helloworldcollection.png","ea03316edac265cca2eed97e16164a87"],["/box/images/logo/hihocoder.png","694cd4b550b2c784520f0b4b71048890"],["/box/images/logo/hipdf.png","afafd691791af7084b50fc5505209d5f"],["/box/images/logo/hit.png","fe2d125e8638e33b4cd55be5766a65a7"],["/box/images/logo/how2j.png","b3adf8f8b2738eb2a7a53796b8e05539"],["/box/images/logo/hrbust.png","bee2dd3644c655db586313dc61f809bb"],["/box/images/logo/html.png","677ffff94e0731e7e0d0a567bffec383"],["/box/images/logo/huaweicloud.png","2495f3f68c49b5074072b40d1d7773c4"],["/box/images/logo/iOS.png","e85bed5332673e19dddc6590abd1da90"],["/box/images/logo/iconfont.png","baf7475268b6098e4ffb511467df4d68"],["/box/images/logo/icons8.png","36ea71ea377467a5036cf77cc06ddd8e"],["/box/images/logo/icourse163.png","fd5b26d3f61d57c10aba1ce4c9488b9f"],["/box/images/logo/ieway.png","fce19b190a25e8df1aae702e8f192391"],["/box/images/logo/iloveimg.png","f4d34d117934321c0e983d5b86fed5b1"],["/box/images/logo/imgchr.png","2819aeae842bafb14b904025d3db8a59"],["/box/images/logo/imooc.png","f4a85b5449134c1aac3581565e490439"],["/box/images/logo/it_ebooks.png","1696e1b339c0bfdff6c93f44f78245d6"],["/box/images/logo/iteye.png","0ba220dfc26420360ee7782f74401130"],["/box/images/logo/itheima.png","d2e9f6f8cc083176b56387bdaaad8dc0"],["/box/images/logo/itpub.png","dbead574e07d12421cac34c48168b3ef"],["/box/images/logo/java.png","55ba93ae86d3438a5c3b534828954a35"],["/box/images/logo/jdcloud.png","8748fb3c3cf224a22c3f381cc86f05f7"],["/box/images/logo/jfh.png","31ec2ebe5c32a53ec9875585651f609a"],["/box/images/logo/jianshu.png","722cea653b593b40ace6fae9e6dbdc04"],["/box/images/logo/jianwai.png","f8f1cdf7b0cc0e8bbbbd9216f25f9f0f"],["/box/images/logo/jikexueyuan.png","82ef8dac3938396ef1f4918b5ed29654"],["/box/images/logo/jisuanke.png","515087d0bb7fc6da976d7fd8edc41bd8"],["/box/images/logo/jsdelivr.png","89df3cc55288d221b272520825887938"],["/box/images/logo/jubt.png","113e6164214679dec3a1eada6161c6f0"],["/box/images/logo/juejin.png","32be193d85bf8f3dd69b8e1812b87acf"],["/box/images/logo/justgetflux.png","af304433a4b318f9a58d701b38ac0122"],["/box/images/logo/kaifabang.png","23e63d6ffbfd4b3067fa0510f0670498"],["/box/images/logo/keqq.png","b5d02d22047f11096b2cfd398da418f2"],["/box/images/logo/kgc.png","c4425ae983c8e9f9f750f6bde30c9999"],["/box/images/logo/kuaima.png","526497040d0f4dc89e6b02f01602347b"],["/box/images/logo/lateautumn4lin.png","830dc52d278a9597ddf49278bc48f1aa"],["/box/images/logo/leetcode.png","6d91f400125c29d7f382648944a91e50"],["/box/images/logo/liaoxuefeng.png","50e13ee46e1cf35bd0889170039fa427"],["/box/images/logo/linshiyouxiang.png","e894efe7443319bae4636648f8599597"],["/box/images/logo/lintcode.png","476dc913065b544a2dc22912a12c2d6d"],["/box/images/logo/loading.png","b3a63fdcf6740b94aeb02ef4a4e6fa89"],["/box/images/logo/logaster.png","79f259c7251945f2e3cec927a11523a1"],["/box/images/logo/logo.svg","fb9906970bb7cb770ee36e76dbc546ce"],["/box/images/logo/luogu.png","d55170eb5876a36aa14d3eea96a4ca7c"],["/box/images/logo/makcyun.png","ad4465fe6e9974ac18107de1663e3152"],["/box/images/logo/matlab.png","38d34f7e612c260eada189b131072929"],["/box/images/logo/matplotlib.png","8a8dece1149324584270f67fc2b693f5"],["/box/images/logo/mayigeek.png","47e5ace9f0136037a46639d2e25d5f89"],["/box/images/logo/mdeditor.png","6a0e150e38d5b24a6b266968beb5e55e"],["/box/images/logo/microsoft.png","171fadddf94006c8cb32d9fd62ff91f1"],["/box/images/logo/mixkit.png","943e72faefb3538186f1e2bafabd976e"],["/box/images/logo/mobiletrain.png","d5ae5eef1d62cd2d7ce1c20517376ae1"],["/box/images/logo/morvanzhou.png","72be6930031754f9a3fcc27fccc9ad04"],["/box/images/logo/musicsounm.png","3af4f6704c6e7a237a083dfc7be043a7"],["/box/images/logo/namebeta.png","a09501344a0187464edf5b89ad00cece"],["/box/images/logo/nasa.png","070e3f85709a1014c9dbc494df9b27a7"],["/box/images/logo/nbut.png","3f2e4ad29d553b4eba75c152f4501924"],["/box/images/logo/nightteam.png","059a52d717d0513f6f341d5c3343e0db"],["/box/images/logo/nipic.png","99d4e27718cf2de623bcba5f42b2591b"],["/box/images/logo/nowcoder.png","5276403715e3ecfc6ea53cf2b0753936"],["/box/images/logo/numpy.png","14d4f16e965ed45636f14f507dca350b"],["/box/images/logo/office_converter.png","7f3b7f82092b2a0cbddfd11b9683b3f2"],["/box/images/logo/okzyw.png","ec364ca4f17e79c0ba10a062ddee78c9"],["/box/images/logo/oldboyedu.png","9df0e0734f4a2512c4ac6630fa5215d7"],["/box/images/logo/oschina.png","9469d6a764ca17c96b7225844f442077"],["/box/images/logo/pandownload.png","0c3bc8d6364549c9018055d74a27eee5"],["/box/images/logo/pexels.png","ed8b858d64d61ac9e1ac48b37cca4dc0"],["/box/images/logo/photomosh.png","3001b4a80849e72c4a17c69327e4b0f6"],["/box/images/logo/php.png","cffeef913d3bb536d2365b36f6929232"],["/box/images/logo/piano.png","8e64dbbfa6c407021781a181912d28ae"],["/box/images/logo/piqsels.png","daccb7b48e2db6fadc55c344f7a5c4ad"],["/box/images/logo/poj.png","49aadb117d09e831c7fdab7707fb6a06"],["/box/images/logo/preloaders.png","def3d9d1e64978d7a81896b2f761c6b4"],["/box/images/logo/proginn.png","dc43e22f115bc8568b6ae6f7d59154dd"],["/box/images/logo/proxy_pool.png","4f86a2b872ec123ca80df88d618c316d"],["/box/images/logo/ptcms.png","115d64093335d9f54eda6dd5b05a1d2e"],["/box/images/logo/pychina.png","1e6cac1ea5d16d5535503b99a5d88bf1"],["/box/images/logo/pypandas.png","ec47d66e42daf4cf7a2380366745002e"],["/box/images/logo/pyspider.png","96f3669ef251d4e409f80c2590b38da1"],["/box/images/logo/python.png","250c73d0b4760d551c91bb476d4689a0"],["/box/images/logo/python_re.png","4944cae5385069f5d9b597bbf0305828"],["/box/images/logo/python_requests.png","6489068300feadb30bf2e4a73cf6b8b3"],["/box/images/logo/pythonhunter.png","447f1fe99fbeb626ffc532a176b95800"],["/box/images/logo/pyzhishiquan.png","0974e1cee3247dc0a98159599b2ee7bb"],["/box/images/logo/q_dir.png","f8542fa0ccb32a5b951777e905575e93"],["/box/images/logo/qianduandaxue.png","6e206e14ba3955eadb27d40eac902e2c"],["/box/images/logo/qiniu.png","3d40cd13e529f99610239c5a6394cf0c"],["/box/images/logo/quicker.png","d6967a5e97e2164646212d05903c201c"],["/box/images/logo/r.png","10d5dc3397e56be7ddf19dd89e7ec197"],["/box/images/logo/redis.png","ffa160bb19cda7d41716a16381845809"],["/box/images/logo/rrkf.png","bdc2ac3f6f56837de79d28488ccf61f2"],["/box/images/logo/ruanyifeng.png","1dc3dc4c9938923bebafb384dd164fca"],["/box/images/logo/ruby.png","3c1008291eb2582e1ac4629af078e927"],["/box/images/logo/ruby_warrior.png","493a0fa2a8ab8fc07c9bdd4dbc3775a0"],["/box/images/logo/rubyquiz.png","f39384960451e7d01e9756f579f530d5"],["/box/images/logo/runoob.png","f8b95dde1bad1c1adf824d4e50205bdd"],["/box/images/logo/santostang.png","90ce3b8eda037ec38b9b7bd8c89a1e9f"],["/box/images/logo/scrapy.png","582199f7a46b17b0430ac96778b72128"],["/box/images/logo/screentogif.png","354c6673f9aaa8b771889b681a8acc91"],["/box/images/logo/screeps.png","2dcd87ff6da53b87d5a051d94cffb728"],["/box/images/logo/scu.png","d477912427e27a3073aa52e455ea6c22"],["/box/images/logo/segmentfault.png","6d64d552005710ccc105dc3444045b7d"],["/box/images/logo/selenium_python.png","51bcfec56713e75641fdfea3e98df0e1"],["/box/images/logo/seo.png","833dafb2904ea1efa468ae95d5d6abdc"],["/box/images/logo/shipinyu.png","bec79f823a980490df17224fee9475fc"],["/box/images/logo/shixian.png","3b5bc73d1809d8f3129dd48227ea7f03"],["/box/images/logo/shiyanlou.png","ded6c92eff79a2df0d6f19c43ed98fca"],["/box/images/logo/sicangziti.png","b69375d70dc22d344b8d2dfe5bfcb971"],["/box/images/logo/sina.png","c876cc5af0508339d74accaa73b42975"],["/box/images/logo/smallpdf.png","663460e3dd2cb4b217400c26e9a2b0d1"],["/box/images/logo/smms.png","143cdc1a600af0d49405c5fdb92fb00e"],["/box/images/logo/snipaste.png","81ac86ad9f5512b38263f7c8a4a110eb"],["/box/images/logo/sogou.png","1c2abb78cb6b1d91dabd9c22d8ce52b7"],["/box/images/logo/sourceforge.png","497497edbd105d3ed703d949c8f25c7f"],["/box/images/logo/speedpan.png","749f734252cce6ca53605e2e0d903967"],["/box/images/logo/spiderpy.gif","5e4a2b2a0f117990ef2949c8e20e1716"],["/box/images/logo/spoj.png","ea27743f27787297cd2eed0752941621"],["/box/images/logo/sql.png","16df3167d022e6e2bd1de45023c535d4"],["/box/images/logo/squoosh.png","4d593ac6e885f67ca88ce506d2c2c536"],["/box/images/logo/stackoverflow.png","f8c53101f6adbadf1a5ec02bcd7a8dc8"],["/box/images/logo/study163.png","6252d1209ba83b68501d7b0a058f1030"],["/box/images/logo/svgomg.png","e02ebee7993b084d193053420736053d"],["/box/images/logo/swift.png","6b54719779fbc770936f984acbe248a3"],["/box/images/logo/swust.png","addd2a0f0f3a1fd5564f83e3184b079a"],["/box/images/logo/sxsoft.png","a316e8efb42bce71052741e6f641241d"],["/box/images/logo/syntaxhighlight.png","4c9b0205e3251bd62664d80126186d97"],["/box/images/logo/taskcity.png","0d841897fccef74505964e053c574590"],["/box/images/logo/tendcode.png","8fecaed93bbcc4dfe59126bd4fec5048"],["/box/images/logo/texttoASCII.png","b25c0e022dd79d6ec329214004a92da4"],["/box/images/logo/the5fire.png","1a57090350177898cc7d52dbc5ae295b"],["/box/images/logo/thestocks.png","40904f15edff60593ae53c7a63c847b1"],["/box/images/logo/tinypng.png","647523013b89e5cc2af4423078e785a3"],["/box/images/logo/tmyjcl.png","82592bf78ec63414ab1c0721f491f053"],["/box/images/logo/tongji.png","6ed4e97c7023a3b15d13218214737989"],["/box/images/logo/tool.png","0fcfbb4da1a9652072e962b194096d0e"],["/box/images/logo/topcoder.png","4481be3f6e190a4f7311c07af7d6aa0b"],["/box/images/logo/trafficmonitor.png","28b78dfbea7c09fe23d93809caa329a1"],["/box/images/logo/ucloud.png","840dd3a72e80be030defa8ad6a290d9c"],["/box/images/logo/udacity.png","76e329b7bbdf455baddb943159f252b2"],["/box/images/logo/uestc.png","70580310be21a1c74c52f34154dc09b8"],["/box/images/logo/uisdc.png","6950af8bf7aa5596ea9da636783691f1"],["/box/images/logo/umeng.png","2e49b35d36212e5539bd41942bc00f7a"],["/box/images/logo/unsplash.png","f16ea8647badf91c799a1c743ce46923"],["/box/images/logo/upyun.png","9c052d0dfc50e40e39c30812cc9192db"],["/box/images/logo/urllib.png","2c61c75c1853a0e8fa8f70dcfcfa920f"],["/box/images/logo/ustc.png","604aa3f0f4e56e983a7573b97adce2ad"],["/box/images/logo/uugai.png","ae081c395e2278fd40143e9c074c8356"],["/box/images/logo/v2ex.png","b6bf6d474cbef77139c536ddc585fb63"],["/box/images/logo/viggoz.png","875aae84511ed98b49aaa5bce7a3fac1"],["/box/images/logo/vim_adventures.png","227a779738d019269243c725c9214536"],["/box/images/logo/volf.png","4dddd83b45294516c7732deabf729446"],["/box/images/logo/w3school.png","4efdc436e20e5a3809a8d854f86d0ada"],["/box/images/logo/waibaodashi.png","93c4c93de8120443db2aa73ffe22f0dd"],["/box/images/logo/waifu2x.png","3f8d1609fc08da99392b70c56ad54749"],["/box/images/logo/weeklypychina.png","da33b8bc68b4bd88d178e1bdd06a945f"],["/box/images/logo/west.png","f08b45e992c4ef5a24f946b85a026588"],["/box/images/logo/wgestures.png","01a10bc07509a9c9c338c646e2b9a007"],["/box/images/logo/whu.png","f0796d052dd08dee90bf82cf0c24c2b8"],["/box/images/logo/wistbean.png","365b83ac93ab1f062e1e33f996995415"],["/box/images/logo/wofficebox.png","f156852c516611b7c581706eab11449c"],["/box/images/logo/woodo.png","81acb5e977685c680f7e5d0b39043e75"],["/box/images/logo/wordart.png","285402c5b4dffa2ae57f84286ed488b7"],["/box/images/logo/xianyucoder.png","e206a1db655396ea356a35852cd6c500"],["/box/images/logo/xiaolvyunbaidu.png","1b2cf8749ad4f0f15a3d08b323e03831"],["/box/images/logo/xiaozhan95.png","092229d491d7523a042058593bb1dc70"],["/box/images/logo/xiaxichen.png","92cf095d6d27f183ec82c905a1b719d2"],["/box/images/logo/xicidaili.png","b42bb3bc5c82e786e3fb9a60f4a92c77"],["/box/images/logo/xmind.png","b20eea1a4a61da456a32fafb723a462e"],["/box/images/logo/yingxuan.png","24c89f66a9518ea8934d02f3241d53b3"],["/box/images/logo/yuanjisong.png","8824b432265fffbbafd0bc65eafffa93"],["/box/images/logo/yundama.png","4581dd2a253e72dabf67ba61b9d86fbb"],["/box/images/logo/zboschina.png","792a3a7a08155ef92d92e0cd3ecbb917"],["/box/images/logo/zealdocs.png","07f67e44d7c43a5785c611c59b2822a4"],["/box/images/logo/zhichou.png","83774465b1626e862e6b49bc15256965"],["/box/images/logo/zhihu.png","b0a7bbb9a31b11e3b59f262288e7b1ee"],["/box/images/logo/zhitu.png","55f1c5e02c666165936d493d749802d2"],["/box/images/logo/ziliao6.png","734af5bdab799524664dd3ae3916f5ef"],["/box/images/logo/zjut.png","b54666a4a835576fae061914028a8c85"],["/box/images/logo/zlovezl.png","5eca233848851068a8cb12c29d95e06b"],["/box/images/logo/zmrenwu.png","c226ba71efff9d17cb7229f123e32912"],["/box/images/logo/zoj.png","d1598e447d033cd5e006717f9a1d109b"],["/box/images/logo/zzidc.png","03f89ce0588919efe49409202325eb79"],["/box/images/logo/zzzmh.png","c1608019d8bbb4e306f182487d4680c3"],["/box/index.html","88e1872417a2dd3cb0afdbe947486c4f"],["/box/js/TweenMax.min.js","60eb9bae427e65bfdbd08ecc99800387"],["/box/js/bootstrap.min.js","6670b32fa45cd2816ffa157a7d1c2c75"],["/box/js/joinable.js","7e3781f48591523adad9c3e1720c991b"],["/box/js/jquery-1.11.1.min.js","08dec7cb795be09a7b74a0d50f18de9d"],["/box/js/resizeable.js","f05fe4d352303094abcfd11bb4f4b86e"],["/box/js/search.js","31a6a6e9f80771feff9823c93f1ff0bc"],["/box/js/xenon-api.js","9c88dcdee8dbf82cce281a745b9b1aab"],["/box/js/xenon-custom.js","ba52df1246db8db9682fc25880ea3ff2"],["/box/js/xenon-toggles.js","7723d1407f843fa39dfad8d2b36a0c86"],["/categories/Python/index.html","5350dbf2060be7ab8ef389607b63bcf0"],["/categories/Python/库/index.html","02ad186ea973c292ccb9d705cbc624cf"],["/categories/index.html","4cd22fbe97598b6675bb13dcdda18e65"],["/categories/学习/index.html","5d5acd9bd7f6a329e5aa667ef162a71c"],["/categories/学习/工具/index.html","fb8d728ad582b9990b6f699d2b33528c"],["/categories/安装/Node-js-nvm-winodows/index.html","583abf2e424a7f98daa68ca18768dc5d"],["/categories/安装/index.html","b4d20755cd039cbe707eef3fba339ba8"],["/categories/导航/Github/index.html","488168b26e1655844e405cdb6c4c19a5"],["/categories/导航/index.html","5f170a57e0e16d7615575145364c74c4"],["/categories/导航/站点/index.html","2eba3fa66beabf0c223854bcf8f43b8c"],["/categories/静态博客/hexo/index.html","115c7a3dd2fb4107e519ab51a7e92af0"],["/categories/静态博客/index.html","081f48a00fba8c359a6331748fe8673b"],["/contact/index.html","fdda238c6becbaffe9fa9395dede21d5"],["/css/index.css","a47c17322a29f344137f00794f7ba4e7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","0679e14170eb1fe3c0e760fbe540004b"],["/go.html","54edbe4525f8ab0fd7b66e1e9a2bb69a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","bd304fbfb546bf2806971750c49b267c"],["/img/avatar.jpg","8fb40bdac6d38470fbb634a20c9c0bda"],["/img/comment_bg.jpg","04208f25e34b8f29f072efbb2e212c86"],["/img/favicon.png","4abe78a4f5a06a759327900337efc0f6"],["/img/friend_404.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","b59a03f99648be1b99339f8b3b1705d5"],["/img/logo.png","4abe78a4f5a06a759327900337efc0f6"],["/img/pwa/144.png","0a80bbae71157ac73a99fe4a99eca0cf"],["/img/pwa/16.png","3986454b8d40936b213494af80c38224"],["/img/pwa/180.png","8a883ba3c2c321c87996d1ac8c4faab7"],["/img/pwa/192.png","9f063bf6c7b068b2d1cb6eaa610e97ed"],["/img/pwa/32.png","47408b64c71b05174c15cf8825320e20"],["/img/pwa/36.png","1b81b6454b08f708203bf8cef25a80cf"],["/img/pwa/48.png","fe980e099898a8206865bd6802ad76c2"],["/img/pwa/512.png","4abe78a4f5a06a759327900337efc0f6"],["/img/pwa/72.png","7dd449d73267c0a84d1cf79f2aa6c199"],["/img/pwa/96.png","e3563980d80e85f34b6e2f5ee881c8af"],["/img/pwa/apple-touch-icon.png","e6e1a0292370e779a1c64ea1a8509a2e"],["/img/pwa/safari-pinned-tab.svg","2270f3adc8b368deb6e9c7d0dfcd2f4a"],["/img/wechat.jpg","8aed869f88920a1931a78815fc3304c7"],["/index.html","792d7d554a9165eb44899c89b1912edf"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/link/index.html","3929ec62b1adca21b96f2e0d68c0cb71"],["/movies/index.html","9ff3817d9ac19bd832564779e243472c"],["/p/19e842bb/index.html","6b9b61bc919da35bf136b3f13e68cd2b"],["/p/37235ffc/index.html","412488fb3d21253e7dd679ef3c170346"],["/p/58d8cc5e/index.html","ebd02d49a56625e580360501ddb118f1"],["/p/5f5df35/index.html","e0d6dcf7456271926afda6e6e889cd79"],["/p/6cb83021/index.html","4531361df1221aeca7e95bdce7bb8cba"],["/p/75db2910/index.html","deabd6f0adc858a9318d1217f799343a"],["/p/b174f57a/index.html","8c56a733a3f3532e4ee70f2837ec07a6"],["/p/b7b5d508/index.html","78a3878aaef070d408c849ee4fb7015c"],["/p/c352598f/index.html","f857d8dd7d0cc47e22b90805b9d19fb8"],["/tags/Autohotkey/index.html","71675831512cd645855027af9a554492"],["/tags/CDN/index.html","74826f502c2ee6966ae694cb6d07bd36"],["/tags/CICD/index.html","103961ea0cc2d2054e42bfff56dfe385"],["/tags/Chrome/index.html","ed2f52e18e8a9352e81e5cfd6f3ccae2"],["/tags/DevOps/index.html","39142069c4668110db479f0a23570f63"],["/tags/Emacs/index.html","fc6aed105c3a8b7dd6a10508245469e8"],["/tags/Github/index.html","bb31b8fa208fb4b7f4479dc1c865273d"],["/tags/Node-js/index.html","404a3f37e8cf85cdd06050bcd886b227"],["/tags/Python/index.html","a0fcaa29ccffedf2e2ed0080b927bbd6"],["/tags/RSS/index.html","f245bebf9f92363cefbe8ca4b5fd0ec5"],["/tags/Vim/index.html","4e94ceee90f4cb09eae96d6a68aab001"],["/tags/WSL/index.html","4fd1ad9f314a584143796cec6911b1ce"],["/tags/Windows/index.html","93ff8053418eae434c0168afd3ee4481"],["/tags/hexo-butterfly/index.html","705bd4ebfce47cb84994e7277e1e3434"],["/tags/index.html","2edc3328c28637987071313b26185fde"],["/tags/nvm-windows/index.html","67892caf3312d1ffcbda02ea7cbe0e11"],["/tags/云服务/index.html","5996af4558cd56d364dc2953fa1dd2d9"],["/tags/博客/index.html","a08ab3b4bf0d089362231029ed87f83e"],["/tags/工作环境/index.html","a3c221b086fec634a32f230f215040de"],["/tags/库/index.html","ca165a99f98892bc5dc80ab34df0dc2c"],["/tags/开发社区/index.html","d42c9ba7b346881a305aaadf95451632"],["/tags/效率/index.html","216a703be82782bfc40c22f2b510bcf9"],["/tags/文档/index.html","581923a48c82608d426433b027c65e16"],["/tags/查询/index.html","4430e5fd04e4eea1797caa0818008051"],["/tags/标签外挂/index.html","9ba96c62b01f73e0497bec8e31d519bb"],["/tags/版本控制/index.html","ac7fc6ec603ff873841372f04238fbca"],["/tags/算法/index.html","fe283c5dc2b751eedfdaa90399f229d7"],["/tags/网课/index.html","2c241ca1e6157b981edf4e513fcafbaa"],["/tags/论文/index.html","674b02880052fea730214c63d4381626"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"leochen12138-a.github.io"});




