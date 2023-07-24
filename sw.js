(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"e614012e0cb667f9a236ada80836a25f","url":"404.html"},{"revision":"6f045450e2cfb47b049ba7f66aea0f49","url":"A-Introduction/modular-programming.html"},{"revision":"f739ae71ca4a3454ebd7ce29886861d4","url":"A-Introduction/object-terminology.html"},{"revision":"58c08ae14b2d7685e437b4f581cc124b","url":"A-Introduction/welcome-to-oo.html"},{"revision":"6b2ff7ce24957617609de8b0d1a66351","url":"assets/css/styles.0e8941de.css"},{"revision":"6412fb6c32648505ff59271c2e921d97","url":"assets/js/073df8d0.0fff9904.js"},{"revision":"9c89dd0a0816b21d9894b5b07b2db9b7","url":"assets/js/0e384e19.7a4db972.js"},{"revision":"66878d99870cdd1ccbf955cee6239021","url":"assets/js/105b0d11.6d9c5074.js"},{"revision":"4363a0d648c761182aa30524937dddb0","url":"assets/js/131.6f6104b9.js"},{"revision":"8d2a7f177368ea69384f5b52318967bb","url":"assets/js/16ad4c72.65afea30.js"},{"revision":"602866377b47ab8b16a0613be770c974","url":"assets/js/16b16888.e236bdf7.js"},{"revision":"1cd68a7fd2fa08fa3b18ac0e81255f65","url":"assets/js/17896441.df36c814.js"},{"revision":"e89e58efd7e73e571afd36372cd0b00d","url":"assets/js/1be78505.7f7ca71e.js"},{"revision":"78d5b26a05f54434a7f9c6e4ea17c48d","url":"assets/js/283.593cc081.js"},{"revision":"c53d2095ff13f82395763f98b946d3b3","url":"assets/js/2b433f9f.7da80461.js"},{"revision":"bedb2b7125f9d0e67d4382137225615d","url":"assets/js/3a5226d6.4fc9586d.js"},{"revision":"50a9335000896540f5461d83fcee4917","url":"assets/js/3be16344.8827d66f.js"},{"revision":"1aa215ca66405f3f99800c730dfc861b","url":"assets/js/4108805e.5778e74f.js"},{"revision":"5945e47b720744e1401c7739232d9ca3","url":"assets/js/45fe9c28.8a281910.js"},{"revision":"ef8e117dd05665d1d9878fb0acde8433","url":"assets/js/539.53b348ba.js"},{"revision":"b8b69b8bf55fdef006fcb6e3fd0a011f","url":"assets/js/56951ef3.4f3953de.js"},{"revision":"c87f6ceb28848ff6d1a9225bc2e2eacf","url":"assets/js/5d188b24.248de617.js"},{"revision":"9eb99f1b082691a66ea56acb4c0f6ca9","url":"assets/js/63d2a5e4.56763157.js"},{"revision":"be2e158ae3db6d4eec8056d7c89c55a6","url":"assets/js/6f663f89.b54a61f2.js"},{"revision":"6e0defbd2c9064e39f8f43022330c938","url":"assets/js/72c9ea03.b109cb23.js"},{"revision":"2ec800dc0a3b6bd1c9271614d7c40a19","url":"assets/js/7585ae8c.97323eaa.js"},{"revision":"454a8aea5b889565f8ad086805221451","url":"assets/js/8ca93b4c.af97c3dc.js"},{"revision":"9207edfa540dc81be380cc7c2220f5a7","url":"assets/js/935f2afb.9ec08544.js"},{"revision":"02ee56d480f5e499cfcff627cc358636","url":"assets/js/972.2e2088b1.js"},{"revision":"ffd55880cb249827c4d49476504bc13f","url":"assets/js/9a94552e.3554af36.js"},{"revision":"2602066fe846ce2556520cfb47707eea","url":"assets/js/a53d596d.eff9cbce.js"},{"revision":"b6129244c2b89784421754e8e657a54d","url":"assets/js/adb1b249.51309c0e.js"},{"revision":"88a74a0eae6a54eb0c73068b5567610d","url":"assets/js/b837d9d8.4c46eb05.js"},{"revision":"a5ca4febfde438c0bfe77e56665fb8fc","url":"assets/js/dc5ffb51.ef9c47c9.js"},{"revision":"a88785470b2f5fcf9547df4ad04baeb9","url":"assets/js/ddb53d48.281a1e94.js"},{"revision":"b5174bbdd8d9539c8e502b4c0f8660ab","url":"assets/js/e5a16459.fd48d44d.js"},{"revision":"756a1f1f9e1c858dca2a729606789aa1","url":"assets/js/fb3e6ee1.1d1675c3.js"},{"revision":"51462dc78f504b54deed6803023bc20c","url":"assets/js/fd0fb51b.6c051465.js"},{"revision":"cfa460792b02b61a92ce0ae3820ee7c3","url":"assets/js/fe32e8a2.f0881460.js"},{"revision":"76f3599b5d5368a6c857c119ab22eb10","url":"assets/js/main.b577fdb9.js"},{"revision":"740c02a34f7377f5e624530eb95966d6","url":"assets/js/runtime~main.059593cf.js"},{"revision":"774fde73346beafc4f006118128090ec","url":"B-Foundations/dynamic-memory.html"},{"revision":"1a9945f7afc469d3040734b37f06e9b6","url":"B-Foundations/member-functions-and-privacy.html"},{"revision":"2e654ce8f9b8b21ac4168cde3fd0109d","url":"B-Foundations/types-overloading-and-references.html"},{"revision":"e179f6c70664d19bd0d8991f19f6db80","url":"C-Encapsulation/classes-and-resources.html"},{"revision":"0a100843a9f812d3eac85bc2ea443828","url":"C-Encapsulation/construction-and-destruction.html"},{"revision":"819b02ff5721533f3ba2a701a196f5c6","url":"C-Encapsulation/helper-functions.html"},{"revision":"6981a8a408972240bee0566a31a224f9","url":"C-Encapsulation/input-and-output-operators.html"},{"revision":"357c617ee9bb3e4b626fdf42b4e1e40d","url":"C-Encapsulation/member-operators.html"},{"revision":"a1638e98f6161856d79d65527eb49ece","url":"C-Encapsulation/the-current-object.html"},{"revision":"65c65c871750f71bafadb43cc8467963","url":"D-Inheritance/derived-classes.html"},{"revision":"7d0b935eb3e3e5364b119973fc13f451","url":"D-Inheritance/functions-in-a-hierarchy.html"},{"revision":"bcb72629a41a52afaebaf620b710c3e1","url":"E-Polymorphism/abstract-base-classes.html"},{"revision":"35b7708db1fa394704bb8c0d3f130f0a","url":"E-Polymorphism/overview-of-polymorphism.html"},{"revision":"d715ef1b9325752678bb298b8871c22d","url":"E-Polymorphism/templates.html"},{"revision":"d36c570144527fa620f2436014fadeaf","url":"E-Polymorphism/virtual-functions.html"},{"revision":"8834800197a019fce41edfa57bc64456","url":"F-Refinements/derived-classes-and-resources.html"},{"revision":"d817affa354d528b300b42c6725f64c8","url":"F-Refinements/input-and-output-refinements.html"},{"revision":"beed2de307f4a547c2459b1a1a790bc3","url":"F-Refinements/language-standards.html"},{"revision":"b0b57a83c44f9ab89c44cd0bbbf59bc1","url":"index.html"},{"revision":"29889586444746d6687de18aacdfa438","url":"manifest.json"},{"revision":"f02d62e25fbbd09be07488300a0e2653","url":"Resources-Appendices/ascii-collating-sequence.html"},{"revision":"222145b9820343045d2feda3e2326ae5","url":"Resources-Appendices/operator-precedence.html"},{"revision":"2bbb12160812bef4f2cb409f21223a53","url":"Resources-Appendices/relation-between-cpp-and-c.html"},{"revision":"b50c1746efe6987da88b89d3d72149fb","url":"Resources-Appendices/standard-library-functions.html"},{"revision":"72d561b797a1bfa93beed0f352ff1a1c","url":"assets/images/01-CourseParticipation-d6ae943dcb8fbef64dc1a9a81b27315c.png"},{"revision":"f3bd29e625a0ca6dd1f5c6fc665a777c","url":"assets/images/03-C-CPP-93112446c26e3cf12ee5bc733f529db0.png"},{"revision":"b0af6c8006da57f7be6f0529f3d7c163","url":"assets/images/04-OO-BookShelf-3f7165b33a52cc9533816098bc9fdeda.png"},{"revision":"f6d0ce62d0a4760cf2a8746824056e12","url":"assets/images/05-Classes-f23f43b1882b7f3bdce8f26d1ea81067.png"},{"revision":"ee9b699467e0b9e663c6cbc4ae695616","url":"assets/images/06-UML-f40eec3b4de2ecc1b3d04e8fad987237.png"},{"revision":"c72f7554be0e6cc8034ca6d1b8c9c20c","url":"assets/images/07-ClassDiagram-a9fe82890a68eb567ebefa039e4889b9.png"},{"revision":"60129c0526fb1fbdd9dac8e0eb15f3a9","url":"assets/images/08-Encapsulation-b23a52343c72df8eb52785fb08812871.png"},{"revision":"eef9a99de139657feaea9634d51adf18","url":"assets/images/10-Polymorphism-51460b5a1ccd13992fa3462e458a804b.png"},{"revision":"e930b28b735c7c7d7842e52e62734d8e","url":"assets/images/11-Transaction-28cbeb74ebafe2b61d83f030101e157c.png"},{"revision":"9f0737deddef79c7cea3e416a120703a","url":"assets/images/12-TransactionModule-72a03147282542aa0401c09965703782.png"},{"revision":"8527b6190726e453088ba92858e7b820","url":"assets/images/14-compiler-72dbcd2e9f0474dac6ec1a0901e05993.png"},{"revision":"72d561b797a1bfa93beed0f352ff1a1c","url":"img/01-CourseParticipation.png"},{"revision":"fef0212310aaf5e1523bdd0b1d83a3c4","url":"img/02-relationship.png"},{"revision":"f3bd29e625a0ca6dd1f5c6fc665a777c","url":"img/03-C-CPP.png"},{"revision":"b0af6c8006da57f7be6f0529f3d7c163","url":"img/04-OO-BookShelf.png"},{"revision":"f6d0ce62d0a4760cf2a8746824056e12","url":"img/05-Classes.png"},{"revision":"ee9b699467e0b9e663c6cbc4ae695616","url":"img/06-UML.png"},{"revision":"c72f7554be0e6cc8034ca6d1b8c9c20c","url":"img/07-ClassDiagram.png"},{"revision":"60129c0526fb1fbdd9dac8e0eb15f3a9","url":"img/08-Encapsulation.png"},{"revision":"27da88a12d2b742d6d7b3199b403da64","url":"img/09-Inheritance.png"},{"revision":"eef9a99de139657feaea9634d51adf18","url":"img/10-Polymorphism.png"},{"revision":"e930b28b735c7c7d7842e52e62734d8e","url":"img/11-Transaction.png"},{"revision":"9f0737deddef79c7cea3e416a120703a","url":"img/12-TransactionModule.png"},{"revision":"62a05e61333f5e99ccb617de06043b33","url":"img/13-cppfiles.png"},{"revision":"8527b6190726e453088ba92858e7b820","url":"img/14-compiler.png"},{"revision":"e74fccf74795df7bc7c38003ed1b2f36","url":"img/click-to-select-region.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"ef2266bfb84465c731756b58cde0afb8","url":"img/favicon.ico"},{"revision":"22c6eb8088b86099d5a78b5a13f7b24d","url":"img/logo-dark.svg"},{"revision":"8817e00103e8837d17c2758b0ce25c41","url":"img/logo.svg"},{"revision":"2e1cb1ba37fc5ae886ea57248bdb60bd","url":"img/pwa/icon-192x192.png"},{"revision":"a0f8ed72d3d3489353a57a03aeac9b0d","url":"img/pwa/icon-256x256.png"},{"revision":"ab9ed19e2716b5c233d6132d66204d53","url":"img/pwa/icon-384x384.png"},{"revision":"b71acc5b894ccfac0c22eb39a590f2a0","url":"img/pwa/icon-512x512.png"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();