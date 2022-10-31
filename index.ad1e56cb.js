function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},s={},i=t.parcelRequire6569;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},t.parcelRequire6569=i),i.register("4TNnu",(function(e,t){var n,r,s=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l,c=[],u=!1,h=-1;function d(){u&&l&&(u=!1,l.length?c=l.concat(c):h=-1,c.length&&p())}function p(){if(!u){var e=a(d);u=!0;for(var t=c.length;t;){for(l=c,c=[];++h<t;)l&&l[h].run();h=-1,t=c.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||u||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}})),i.register("6kcu2",(function(t,n){e(t.exports,"auth",(function(){return o})),i("amyG6");var r=i("30XCk"),s=i("4UGc2");const o=(0,r.n)(s.default)})),i.register("amyG6",(function(t,n){e(t.exports,"onAuthStateChanged",(function(){return i("30XCk").v})),e(t.exports,"getAuth",(function(){return i("30XCk").n})),e(t.exports,"signInWithEmailAndPassword",(function(){return i("30XCk").a6})),e(t.exports,"createUserWithEmailAndPassword",(function(){return i("30XCk").a5})),i("1iO0g")})),i.register("1iO0g",(function(t,n){e(t.exports,"createUserWithEmailAndPassword",(function(){return i("30XCk").a5})),e(t.exports,"getAuth",(function(){return i("30XCk").n})),e(t.exports,"onAuthStateChanged",(function(){return i("30XCk").v})),e(t.exports,"signInWithEmailAndPassword",(function(){return i("30XCk").a6})),i("ffjl9"),i("ix4Jr"),i("7vF8m"),i("4a6xH");i("30XCk")})),i.register("ffjl9",(function(n,r){e(n.exports,"assert",(function(){return c})),e(n.exports,"assertionError",(function(){return u})),e(n.exports,"base64",(function(){return d})),e(n.exports,"base64Encode",(function(){return p})),e(n.exports,"base64urlEncodeWithoutPadding",(function(){return f})),e(n.exports,"base64Decode",(function(){return m})),e(n.exports,"deepCopy",(function(){return g})),e(n.exports,"getUA",(function(){return y})),e(n.exports,"isMobileCordova",(function(){return v})),e(n.exports,"isBrowserExtension",(function(){return b})),e(n.exports,"isReactNative",(function(){return w})),e(n.exports,"isIE",(function(){return I})),e(n.exports,"isNodeSdk",(function(){return C})),e(n.exports,"isIndexedDBAvailable",(function(){return k})),e(n.exports,"validateIndexedDBOpenable",(function(){return E})),e(n.exports,"getDefaultEmulatorHost",(function(){return x})),e(n.exports,"getDefaultEmulatorHostnameAndPort",(function(){return R})),e(n.exports,"getDefaultAppConfig",(function(){return A})),e(n.exports,"getExperimentalSetting",(function(){return N})),e(n.exports,"Deferred",(function(){return O})),e(n.exports,"createMockUserToken",(function(){return P})),e(n.exports,"FirebaseError",(function(){return D})),e(n.exports,"ErrorFactory",(function(){return $})),e(n.exports,"jsonEval",(function(){return M})),e(n.exports,"stringify",(function(){return j})),e(n.exports,"isValidFormat",(function(){return q})),e(n.exports,"isAdmin",(function(){return U})),e(n.exports,"contains",(function(){return z})),e(n.exports,"safeGet",(function(){return W})),e(n.exports,"isEmpty",(function(){return V})),e(n.exports,"map",(function(){return B})),e(n.exports,"deepEqual",(function(){return H})),e(n.exports,"querystring",(function(){return K})),e(n.exports,"querystringDecode",(function(){return Y})),e(n.exports,"extractQuerystring",(function(){return J})),e(n.exports,"Sha1",(function(){return Q})),e(n.exports,"createSubscribe",(function(){return X})),e(n.exports,"errorPrefix",(function(){return te})),e(n.exports,"stringToByteArray",(function(){return ne})),e(n.exports,"stringLength",(function(){return re})),e(n.exports,"getModularInstance",(function(){return se}));var s=i("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o=!1,a=!1,l="${JSCORE_VERSION}",c=function(e,t){if(!e)throw u(t)},u=function(e){return new Error("Firebase Database ("+l+") INTERNAL ASSERT FAILED: "+e)},h=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const s=e[t],i=t+1<e.length,o=i?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=s>>2,u=(3&s)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,i||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(h(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==i||null==o||null==a)throw Error();const l=s<<2|i>>4;if(r.push(l),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},p=function(e){const t=h(e);return d.encodeByteArray(t,!0)},f=function(e){return p(e).replace(/\./g,"")},m=function(e){try{return d.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){return _(void 0,e)}function _(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=_(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function y(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function v(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())}function b(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function w(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function I(){const e=y();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function C(){return!0===o||!0===a}function k(){return"object"==typeof indexedDB}function E(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,T=()=>{try{return S()||(()=>{if(void 0===s||void 0===s.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&m(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},x=e=>{var t,n;return null===(n=null===(t=T())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},R=e=>{const t=x(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},A=()=>{var e;return null===(e=T())||void 0===e?void 0:e.config},N=e=>{var t;return null===(t=T())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[f(JSON.stringify({alg:"none",type:"JWT"})),f(JSON.stringify(i)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$.prototype.create)}}class ${create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?function(e,t){return e.replace(L,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new D(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const L=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){return JSON.parse(e)}function j(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=function(e){let t={},n={},r={},s="";try{const i=e.split(".");t=M(m(i[0])||""),n=M(m(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:s}},q=function(e){const t=F(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},U=function(e){const t=F(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function W(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function V(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function B(e,t,n){const r={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(r[s]=t.call(n,e[s],s,e));return r}function H(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(G(n)&&G(i)){if(!H(n,i))return!1}else if(n!==i)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function G(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Y(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function J(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,s,i=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=l^o&(a^l),s=1518500249):(r=o^a^l,s=1859775393):e<60?(r=o&a|l&(o|a),s=2400959708):(r=o^a^l,s=3395469782);const t=(i<<5|i>>>27)+r+c+s+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=i,i=t}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const s=this.buf_;let i=this.inbuf_;for(;r<t;){if(0===i)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(s[i]=e.charCodeAt(r),++i,++r,i===this.blockSize){this.compress_(s),i=0;break}}else for(;r<t;)if(s[i]=e[r],++i,++r,i===this.blockSize){this.compress_(s),i=0;break}}this.inbuf_=i,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function X(e,t){const n=new Z(e,t);return n.subscribe.bind(n)}class Z{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=ee),void 0===r.error&&(r.error=ee),void 0===r.complete&&(r.complete=ee);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function ee(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ne=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s>=55296&&s<=56319){const t=s-55296;r++,c(r<e.length,"Surrogate pair missing trail surrogate.");s=65536+(t<<10)+(e.charCodeAt(r)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},re=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function se(e){return e&&e._delegate?e._delegate:e}})),i.register("ix4Jr",(function(t,n){e(t.exports,"_registerComponent",(function(){return _})),e(t.exports,"_getProvider",(function(){return y})),e(t.exports,"SDK_VERSION",(function(){return I})),e(t.exports,"initializeApp",(function(){return C})),e(t.exports,"getApp",(function(){return k})),e(t.exports,"registerVersion",(function(){return E}));var r=i("4a6xH"),s=i("7vF8m"),o=i("ffjl9"),a=i("cCiiD");o=i("ffjl9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const c="@firebase/app",u="0.8.3",h=new(0,s.Logger)("@firebase/app"),d="[DEFAULT]",p={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},f=new Map,m=new Map;function g(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function _(e){const t=e.name;if(m.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;m.set(t,e);for(const t of f.values())g(t,e);return!0}function y(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},b=new(0,o.ErrorFactory)("app","Firebase",v);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,r.Component)("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I="9.13.0";function C(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const s=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),i=s.name;if("string"!=typeof i||!i)throw b.create("bad-app-name",{appName:String(i)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw b.create("no-options");const a=f.get(i);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(s,a.config))return a;throw b.create("duplicate-app",{appName:i})}const l=new(0,r.ComponentContainer)(i);for(const e of m.values())l.addComponent(e);const c=new w(n,s,l);return f.set(i,c),c}function k(e="[DEFAULT]"){const t=f.get(e);if(!t&&e===d)return C();if(!t)throw b.create("no-app",{appName:e});return t}function E(e,t,n){var s;let i=null!==(s=p[e])&&void 0!==s?s:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}_(new(0,r.Component)(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S="firebase-heartbeat-store";let T=null;function x(){return T||(T=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(S)}}).catch((e=>{throw b.create("idb-open",{originalErrorMessage:e.message})}))),T}async function R(e,t){var n;try{const n=(await x()).transaction(S,"readwrite"),r=n.objectStore(S);return await r.put(t,A(e)),n.done}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{const t=b.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});h.warn(t.message)}}}function A(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=O();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=O(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),D(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),D(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new P(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function O(){return(new Date).toISOString().substring(0,10)}class P{async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await x()).transaction(S).objectStore(S).get(A(e))}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{const n=b.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});h.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return R(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return R(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function D(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;$="",_(new(0,r.Component)("platform-logger",(e=>new l(e)),"PRIVATE")),_(new(0,r.Component)("heartbeat",(e=>new N(e)),"PRIVATE")),E(c,u,$),E(c,u,"esm2017"),E("fire-js","")})),i.register("4a6xH",(function(t,n){e(t.exports,"Component",(function(){return s})),e(t.exports,"ComponentContainer",(function(){return l}));var r=i("ffjl9");class s{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,r.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===o?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class l{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}})),i.register("7vF8m",(function(t,n){e(t.exports,"LogLevel",(function(){return s})),e(t.exports,"Logger",(function(){return u})),e(t.exports,"setLogLevel",(function(){return h})),e(t.exports,"setUserLogHandler",(function(){return d}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var s,i;(i=s||(s={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";const o={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},a=s.INFO,l={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=l[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class u{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,r.push(this)}}function h(e){r.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...i)=>{const o=i.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:s[n].toLowerCase(),message:o,args:i,type:t.name})}}}})),i.register("cCiiD",(function(t,n){e(t.exports,"openDB",(function(){return s}));var r=i("ekHjI");r=i("ekHjI");function s(e,t,{blocked:n,upgrade:s,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),l=(0,r.w)(a);return s&&a.addEventListener("upgradeneeded",(e=>{s((0,r.w)(a.result),e.oldVersion,e.newVersion,(0,r.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),l.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),l}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],l=new Map;function c(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(l.get(t))return l.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!o.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&i.done]))[0]};return l.set(t,i),i}(0,r.r)((e=>({...e,get:(t,n,r)=>c(t,n)||e.get(t,n,r),has:(t,n)=>!!c(t,n)||e.has(t,n)})))})),i.register("ekHjI",(function(t,n){e(t.exports,"w",(function(){return f})),e(t.exports,"r",(function(){return h}));let r,s;const i=new WeakMap,o=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap;let u={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return o.get(e);if("objectStoreNames"===t)return e.objectStoreNames||a.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return f(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function h(e){u=e(u)}function d(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(m(this),t),f(i.get(this))}:function(...t){return f(e.apply(m(this),t))}:function(t,...n){const r=e.call(m(this),t,...n);return a.set(r,t.sort?t.sort():[t]),f(r)}}function p(e){return"function"==typeof e?d(e):(e instanceof IDBTransaction&&function(e){if(o.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)}));o.set(e,t)}(e),t=e,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,u):e);var t}function f(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(f(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&i.set(t,e)})).catch((()=>{})),c.set(t,e),t}(e);if(l.has(e))return l.get(e);const t=p(e);return t!==e&&(l.set(e,t),c.set(t,e)),t}const m=e=>c.get(e)})),i.register("30XCk",(function(t,n){e(t.exports,"a5",(function(){return qe})),e(t.exports,"a6",(function(){return Ue})),e(t.exports,"v",(function(){return ze})),e(t.exports,"n",(function(){return nn}));var r=i("ffjl9"),s=i("ix4Jr"),o=i("7vF8m"),a=i("l73V3"),l=i("4a6xH");function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,h=new(0,r.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),d=new(0,o.Logger)("@firebase/auth");function p(e,...t){d.logLevel<=o.LogLevel.ERROR&&d.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw _(e,...t)}function m(e,...t){return _(e,...t)}function g(e,t,n){const s=Object.assign(Object.assign({},u()),{[t]:n});return new(0,r.ErrorFactory)("auth","Firebase",s).create(t,{appName:e.name})}function _(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return h.create(e,...t)}function y(e,t,...n){if(!e)throw _(t,...n)}function v(e){const t="INTERNAL ASSERTION FAILED: "+e;throw p(t),new Error(t)}function b(e,t){e||v(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function I(e){b(e instanceof Function,"Expected a class definition");let t=w.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,w.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===E()||"https:"===E()}function E(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(k()||(0,r.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.isMobileCordova)()||(0,r.isReactNative)()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},A=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function O(e,t,n,s,i={}){return P(e,i,(async()=>{let i={},o={};s&&("GET"===t?o=s:i={body:JSON.stringify(s)});const a=(0,r.querystring)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),x.fetch()($(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},i))}))}async function P(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},R),t);try{const t=new L(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw M(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw M(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw M(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw M(e,"user-disabled",i);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);f(e,a)}}catch(t){if(t instanceof r.FirebaseError)throw t;f(e,"network-request-failed")}}async function D(e,t,n,r,s={}){const i=await O(e,t,n,r,s);return"mfaPendingCredential"in i&&f(e,"multi-factor-auth-required",{_serverResponse:i}),i}function $(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?T(e.config,s):`${e.config.apiScheme}://${s}`}class L{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),A.get())}))}}function M(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=m(e,t,r);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return 1e3*Number(e)}function q(e){var t;const[n,s,i]=e.split(".");if(void 0===n||void 0===s||void 0===i)return p("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.base64Decode)(s);return e?JSON.parse(e):(p("Failed to decode base64 JWT payload"),null)}catch(e){return p("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function U(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof r.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class z{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{_initializeTime(){this.lastSignInTime=j(this.lastLoginAt),this.creationTime=j(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e){var t;const n=e.auth,r=await e.getIdToken(),s=await U(e,async function(e,t){return O(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));y(null==s?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?i.providerUserInfo.map((e=>{var{providerId:t}=e,n=(0,a.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const l=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const h=e.isAnonymous,d=!(e.email&&i.passwordHash||(null==l?void 0:l.length)),p=!!h&&d,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new W(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(void 0!==e.idToken,"internal-error"),y(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=q(e);return y(t,"internal-error"),y(void 0!==t.exp,"internal-error"),y(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await P(e,{},(async()=>{const n=(0,r.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=$(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new B;return n&&(y("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(y("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(y("number"==typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new B,this.toJSON())}_performRefresh(){return v("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t){y("string"==typeof e||void 0===e,"internal-error",{appName:t})}class G{async getIdToken(e){const t=await U(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,r.getModularInstance)(e),s=await n.getIdToken(t),i=q(s);y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:i,token:s,authTime:j(F(i.auth_time)),issuedAtTime:j(F(i.iat)),expirationTime:j(F(i.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,r.getModularInstance)(e);await V(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new G(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await V(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await U(this,async function(e,t){return O(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,i,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,p=null!==(i=t.photoURL)&&void 0!==i?i:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,_=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:I,stsTokenManager:C}=t;y(v&&C,e,"internal-error");const k=B.fromJSON(this.name,C);y("string"==typeof v,e,"internal-error"),H(u,e.name),H(h,e.name),y("boolean"==typeof b,e,"internal-error"),y("boolean"==typeof w,e,"internal-error"),H(d,e.name),H(p,e.name),H(f,e.name),H(m,e.name),H(g,e.name),H(_,e.name);const E=new G({uid:v,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:k,createdAt:g,lastLoginAt:_});return I&&Array.isArray(I)&&(E.providerData=I.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new B;r.updateFromServerResponse(t);const s=new G({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await V(s),s}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=(0,a.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new W(s.createdAt||void 0,s.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}K.type="NONE";const Y=K;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e,t,n){return`firebase:${e}:${t}:${n}`}class Q{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?G._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Q(I(Y),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=r[0]||I(Y);const i=J(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(i);if(t){const r=G._fromJSON(e,t);n!==s&&(o=r),s=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(i)}catch(e){}}))),new Q(s,e,n)):new Q(s,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=J(this.userKey,r.apiKey,s),this.fullPersistenceKey=J("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ne(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Z(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(se(t))return"Blackberry";if(ie(t))return"Webos";if(ee(t))return"Safari";if((t.includes("chrome/")||te(t))&&!t.includes("edge/"))return"Chrome";if(re(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Z(e=(0,r.getUA)()){return/firefox\//i.test(e)}function ee(e=(0,r.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function te(e=(0,r.getUA)()){return/crios\//i.test(e)}function ne(e=(0,r.getUA)()){return/iemobile/i.test(e)}function re(e=(0,r.getUA)()){return/android/i.test(e)}function se(e=(0,r.getUA)()){return/blackberry/i.test(e)}function ie(e=(0,r.getUA)()){return/webos/i.test(e)}function oe(e=(0,r.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ae(e=(0,r.getUA)()){return oe(e)||re(e)||ie(e)||se(e)||/windows phone/i.test(e)||ne(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(e,t=[]){let n;switch(e){case"Browser":n=X((0,r.getUA)());break;case"Worker":n=`${X((0,r.getUA)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=I(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Q.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null==o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await V(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.getModularInstance)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(I(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,r.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&I(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await Q.create(this,[I(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return y(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=le(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new de(this),this.idTokenSubscription=new de(this),this.beforeStateQueue=new ce(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function he(e){return(0,r.getModularInstance)(e)}class de{get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.createSubscribe)((e=>this.observer=e))}}function pe(e,t,n){const r=he(e);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),i=fe(t),{host:o,port:a}=function(e){const t=fe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const e=s[1];return{host:e,port:me(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:me(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function fe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function me(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ge{toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(e,t){return O(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye extends ge{static _fromEmailAndPassword(e,t){return new ye(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ye(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",N(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return _e(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends ge{static _fromParams(e){const t=new be(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=(0,a.__rest)(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new be(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){return ve(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ve(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ve(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,r.querystring)(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie extends ge{static _fromVerification(e,t){return new Ie({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ie({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t));if(n.temporaryProof)throw M(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),we)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}=e;return n||t||r||s?new Ie({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{static parseLink(e){const t=function(e){const t=(0,r.querystringDecode)((0,r.extractQuerystring)(e)).link,n=t?(0,r.querystringDecode)((0,r.extractQuerystring)(t)).deep_link_id:null,s=(0,r.querystringDecode)((0,r.extractQuerystring)(e)).deep_link_id;return(s?(0,r.querystringDecode)((0,r.extractQuerystring)(s)).link:null)||s||n||t||e}(e);try{return new Ce(t)}catch(e){return null}}constructor(e){var t,n,s,i,o,a;const l=(0,r.querystringDecode)((0,r.extractQuerystring)(e)),c=null!==(t=l.apiKey)&&void 0!==t?t:null,u=null!==(n=l.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(s=l.mode)&&void 0!==s?s:null);y(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(i=l.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke{static credential(e,t){return ye._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ce.parseLink(t);return y(n,"argument-error"),ye._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=ke.PROVIDER_ID}}ke.PROVIDER_ID="password",ke.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ke.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Ee{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te extends Se{static credential(e){return be._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Te.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Te.FACEBOOK_SIGN_IN_METHOD="facebook.com",Te.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe extends Se{static credential(e,t){return be._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return xe.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}xe.GOOGLE_SIGN_IN_METHOD="google.com",xe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re extends Se{static credential(e){return be._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Re.GITHUB_SIGN_IN_METHOD="github.com",Re.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae extends Se{static credential(e,t){return be._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ae.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ne(e,t){return D(e,"POST","/v1/accounts:signUp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ae.TWITTER_SIGN_IN_METHOD="twitter.com",Ae.PROVIDER_ID="twitter.com";class Oe{static async _fromIdTokenResponse(e,t,n,r=!1){const s=await G._fromIdTokenResponse(e,n,r),i=Pe(n);return new Oe({user:s,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Pe(n);return new Oe({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Pe(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De extends r.FirebaseError{static _fromErrorAndOperation(e,t,n,r){return new De(e,t,n,r)}constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,De.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function $e(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw De._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t,n=!1){const r=await U(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Oe._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Me(e,t,n=!1){var r;const{auth:s}=e,i="reauthenticate";try{const r=await U(e,$e(s,i,t,e),n);y(r.idToken,s,"internal-error");const o=q(r.idToken);y(o,s,"internal-error");const{sub:a}=o;return y(e.uid===a,s,"user-mismatch"),Oe._forOperation(e,i,r)}catch(e){throw"auth/user-not-found"===(null===(r=e)||void 0===r?void 0:r.code)&&f(s,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(e,t,n=!1){const r="signIn",s=await $e(e,r,t),i=await Oe._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function Fe(e,t){return je(he(e),t)}async function qe(e,t,n){const r=he(e),s=await Ne(r,{returnSecureToken:!0,email:t,password:n}),i=await Oe._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Ue(e,t,n){return Fe((0,r.getModularInstance)(e),ke.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e,t,n,s){return(0,r.getModularInstance)(e).onAuthStateChanged(t,n,s)}new WeakMap;const We="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{_isAvailable(){try{return this.storage?(this.storage.setItem(We,"1"),this.storage.removeItem(We),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Ve{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const s=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);(0,r.isIE)()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,r.getUA)();return ee(e)||oe(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ae(),this._shouldAllowMigration=!0}}Be.type="LOCAL";const He=Be;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends Ve{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Ge.type="SESSION";const Ke=Ge;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ye(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Je(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.receivers=[];class Qe{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const l=Je("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ze(){return void 0!==Xe().WorkerGlobalScope&&"function"==typeof Xe().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const et="firebaseLocalStorageDb",tt="firebaseLocalStorage",nt="fbase_key";class rt{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function st(e,t){return e.transaction([tt],t?"readwrite":"readonly").objectStore(tt)}function it(){const e=indexedDB.open(et,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(tt,{keyPath:nt})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(tt)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(et);return new rt(e).toPromise()}(),t(await it()))}))}))}async function ot(e,t,n){const r=st(e,!0).put({[nt]:t,value:n});return new rt(r).toPromise()}function at(e,t){const n=st(e,!0).delete(t);return new rt(n).toPromise()}class lt{async _openDb(){return this.db||(this.db=await it()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ze()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ye._getInstance(Ze()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Qe(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await it();return await ot(e,We,"1"),await at(e,We),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ot(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=st(e,!1).get(t),r=await new rt(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>at(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=st(e,!1).getAll();return new rt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}lt.type="LOCAL";const ct=lt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s,i;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(i=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==i?i:document).appendChild(r)}))}function ht(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ht("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt="recaptcha";async function pt(e,t,n){var r;const s=await n.verify();try{let i;if(y("string"==typeof s,e,"argument-error"),y(n.type===dt,e,"argument-error"),i="string"==typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){y("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;y(n,e,"missing-multi-factor-info");const o=await function(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:start",N(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return O(e,"POST","/v1/accounts:sendVerificationCode",N(e,t))}(e,{phoneNumber:i.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{verifyPhoneNumber(e,t){return pt(this.auth,e,(0,r.getModularInstance)(t))}static credential(e,t){return Ie._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ft.credentialFromTaggedObject(t)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ie._fromTokenResponse(t,n):null}constructor(e){this.providerId=ft.PROVIDER_ID,this.auth=he(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mt(e,t){return t?I(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft.PROVIDER_ID="phone",ft.PHONE_SIGN_IN_METHOD="phone";class gt extends ge{_getIdTokenResponse(e){return ve(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ve(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ve(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function _t(e){return je(e.auth,new gt(e),e.bypassAuthState)}function yt(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),Me(n,new gt(e),e.bypassAuthState)}async function vt(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),Le(n,new gt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _t;case"linkViaPopup":case"linkViaRedirect":return vt;case"reauthViaPopup":case"reauthViaRedirect":return yt;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new S(2e3,1e4);class It extends bt{async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Je();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,It.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,wt.get())};e()}constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,It.currentPopupAction&&It.currentPopupAction.cancel(),It.currentPopupAction=this}}It.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ct=new Map;class kt extends bt{async execute(){let e=Ct.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Tt(t),r=St(e);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ct.set(this.auth._key(),e)}return this.bypassAuthState||Ct.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Et(e,t){Ct.set(e._key(),t)}function St(e){return I(e._redirectPersistence)}function Tt(e){return J("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e,t,n=!1){const r=he(e),s=mt(r,t),i=new kt(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Rt{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nt(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Nt(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(At(e))}saveEventToCache(e){this.cachedEventUids.add(At(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function At(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Nt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ot=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pt=/^https?/;async function Dt(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return O(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if($t(e))return}catch(e){}f(e,"unauthorized-domain")}function $t(e){const t=C(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!Pt.test(n))return!1;if(Ot.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new S(3e4,6e4);function Mt(){const e=Xe().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let jt=null;function Ft(e){return jt=jt||function(e){return new Promise(((t,n)=>{var r,s,i;function o(){Mt(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mt(),n(m(e,"network-request-failed"))},timeout:Lt.get()})}if(null===(s=null===(r=Xe().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Xe().gapi)||void 0===i?void 0:i.load)){const t=ht("iframefcb");return Xe()[t]=()=>{gapi.load?o():n(m(e,"network-request-failed"))},ut(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw jt=null,e}))}(e),jt}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new S(5e3,15e3),Ut={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zt=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wt(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?T(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=zt.get(e.config.apiHost);o&&(i.eid=o);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,r.querystring)(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Bt{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Ht(e,t,n,s=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Vt),{width:s.toString(),height:i.toString(),top:o,left:a}),u=(0,r.getUA)().toLowerCase();n&&(l=te(u)?"_blank":n),Z(u)&&(t=t||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,r.getUA)()){var t;return oe(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==l)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",l),new Bt(null);const d=window.open(t||"",l,h);y(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Bt(d)}const Gt="emulator/auth/handler";function Kt(e,t,n,i,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:s.SDK_VERSION,eventId:o};if(t instanceof Ee){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.isEmpty)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof Se){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const e of Object.keys(c))void 0===c[e]&&delete c[e];return`${function({config:e}){return e.emulator?T(e,Gt):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${(0,r.querystring)(c).slice(1)}`}const Yt="webStorageSupport";const Jt=class{async _openPopup(e,t,n,r){var s;b(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Ht(e,Kt(e,t,n,C(),r),Je())}async _openRedirect(e,t,n,r){var s;return await this._originValidation(e),s=Kt(e,t,n,C(),r),Xe().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Ft(e),n=Xe().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:Wt(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ut,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=m(e,"network-request-failed"),i=Xe().setTimeout((()=>{r(s)}),qt.get());function o(){Xe().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{r(s)}))}))))}(e),n=new Rt(e);return t.register("authEvent",(t=>{y(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Yt,{type:Yt},(n=>{var r;const s=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==s&&t(!!s),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Dt(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ae()||ee()||oe()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ke,this._completeRedirectFn=xt,this._overrideRedirectResult=Et}};var Qt="@firebase/auth",Xt="0.20.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const en=(0,r.getExperimentalSetting)("authIdTokenMaxAge")||300;let tn=null;function nn(e=(0,s.getApp)()){const t=(0,s._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=(0,s._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),s=n.getOptions();if((0,r.deepEqual)(s,null!=t?t:{}))return e;f(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Jt,persistence:[ct,He,Ke]}),i=(0,r.getExperimentalSetting)("authTokenSyncURL");if(i){const e=(o=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>en)return;const r=null==t?void 0:t.token;tn!==r&&(tn=r,await fetch(o,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){(0,r.getModularInstance)(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,s){(0,r.getModularInstance)(e).onIdTokenChanged(t,n,s)}(n,(t=>e(t)))}var o;const a=(0,r.getDefaultEmulatorHost)("auth");return a&&pe(n,`http://${a}`),n}var rn;rn="Browser",(0,s._registerComponent)(new(0,l.Component)("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:i}=n.options;return((e,n)=>{y(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),y(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const r={apiKey:s,authDomain:i,clientPlatform:rn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:le(rn)},o=new ue(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(I);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,s._registerComponent)(new(0,l.Component)("auth-internal",(e=>{const t=he(e.getProvider("auth").getImmediate());return new Zt(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(Qt,Xt,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(rn)),(0,s.registerVersion)(Qt,Xt,"esm2017")})),i.register("l73V3",(function(t,n){e(t.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}Object.create;Object.create})),i.register("4UGc2",(function(t,n){e(t.exports,"default",(function(){return r})),i("25RCP");var r=(0,i("ix4Jr").initializeApp)({apiKey:"AIzaSyCGi5mS1ICaqIG8qjSfZnj_VC85bthMH9E",authDomain:"js-project-87bdb.firebaseapp.com",projectId:"js-project-87bdb",databaseURL:"https://js-project-87bdb-default-rtdb.firebaseio.com",storageBucket:"js-project-87bdb.appspot.com",messagingSenderId:"1589904398",appId:"1:1589904398:web:cae6a731fda3817a7ce85f"})})),i.register("25RCP",(function(t,n){e(t.exports,"initializeApp",(function(){return i("ix4Jr").initializeApp})),e(t.exports,"registerVersion",(function(){return i("ix4Jr").registerVersion}));i("ix4Jr");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i("ix4Jr").registerVersion)("firebase","9.13.0","app")})),i.register("axgPN",(function(t,n){e(t.exports,"formBackdropRef",(function(){return c})),e(t.exports,"onLogOut",(function(){return f})),e(t.exports,"onShowAuthModal",(function(){return m})),e(t.exports,"onClickBackdrop",(function(){return _})),i("amyG6");var r=i("30XCk"),s=i("6kcu2"),o=i("6cjWj"),a=i("XwkCV"),l=i("eWnKO");const c=document.querySelector(".form-backdrop"),u=document.querySelectorAll(".btn"),h={formSingInBtn:document.querySelector(".form-signin"),formSingUpBtn:document.querySelector(".form-signup"),frameRef:document.querySelector(".frame"),signUpItemRef:document.querySelector(".signup-inactive"),signInItemRef:document.querySelector(".signin-active"),btnSingUpClick:document.querySelector(".btn-signup"),btnSingInClick:document.querySelector(".btn-signin"),btnAnimateDiv:document.querySelector(".btn-animate"),btnAnimateSignupDiv:document.querySelector(".btn-animate-signup"),signinEmail:document.querySelector(".signin-email"),signinPassword:document.querySelector(".signin-password"),signupName:document.querySelector(".signup-name"),signupEmail:document.querySelector(".signup-email"),signupPassword:document.querySelector(".signup-password"),welcome:document.querySelector(".welcome"),frame:document.querySelector(".frame"),success:document.querySelector(".success")};function d(){h.formSingInBtn.classList.toggle("form-signin-left"),h.formSingUpBtn.classList.toggle("form-signup-left"),h.frameRef.classList.toggle("frame-long"),h.signUpItemRef.classList.toggle("signup-active"),h.signUpItemRef.classList.toggle("signup-inactive"),h.signInItemRef.classList.toggle("signin-inactive"),h.signInItemRef.classList.toggle("signin-active")}function p(e,t="#232b55"){h.welcome.textContent=e,h.welcome.style.color=t,h.btnAnimateDiv.classList.add("btn-animate-grow"),h.welcome.classList.add("welcome-left"),setTimeout((()=>{h.welcome.classList.remove("welcome-left"),h.btnAnimateDiv.classList.remove("btn-animate-grow"),h.welcome.style.color="#232b55"}),3e3)}function f(){s.auth.signOut()}function m(){c.classList.remove("is-hidden"),window.addEventListener("keydown",y)}function g(){c.classList.add("is-hidden"),window.removeEventListener("keydown",y),h.btnAnimateDiv.classList.remove("btn-animate-grow"),h.welcome.classList.remove("welcome-left")}function _(e){e.target.classList.contains("formbackdrop-close-modal")&&g()}function y(e){"Escape"===e.code&&g()}u.forEach((e=>e.addEventListener("click",d))),h.btnSingInClick&&h.btnSingInClick.addEventListener("click",(function(){const e=h.signinEmail.value,t=h.signinPassword.value;(0,r.a6)(s.auth,e,t).then((e=>{const t=e.user;localStorage.setItem("auth","1"),(0,a.addNav)("index"),(0,a.removeAuthBtns)(),(0,a.addLogOutButton)(),p(`Welcome, ${t.email}`),setTimeout((()=>{g()}),3e3),h.signinEmail.value="",h.signinPassword.value=""})).catch((e=>{const t=e.code,n=e.message;console.log(t+n),p("Login Error. Wrong user or password.")}))})),h.btnSingUpClick&&h.btnSingUpClick.addEventListener("click",(function(){const e=h.signupName.value,t=h.signupEmail.value,n=h.signupPassword.value;if(console.log((0,l.validateData)(e,t,n).error),(0,l.validateData)(e,t,n).error)return void p(`${(0,l.validateData)(e,t,n).error}`,"#fff");(0,r.a5)(s.auth,t,n).then((t=>{const n=t.user;localStorage.setItem("auth","1"),(0,a.addNav)("index"),(0,a.removeAuthBtns)(),(0,a.addLogOutButton)(),p(`Welcome, ${e}`,"#fff"),setTimeout((()=>{g()}),3e3),(0,o.addUser)(n.uid,e),h.signupName.value="",h.signupEmail.value="",h.signupPassword.value=""})).catch((e=>{e.code;const t=e.message;console.log(t),p("Sign Up Error. Something wrong.","#fff"),setTimeout((()=>{h.btnAnimateDiv.classList.toggle("btn-animate-grow"),h.welcome.classList.toggle("welcome-left"),h.welcome.style.color="#232b55"}),4e3)}))}))})),i.register("6cjWj",(function(t,n){e(t.exports,"addUser",(function(){return a})),i("fQ3Fn");var r=i("8NPS8"),s=(i("6kcu2"),i("4UGc2"));const o=(0,r.getDatabase)(s.default);function a(e,t){(0,r.set)((0,r.ref)(o,"users/"+e),{username:t})}})),i.register("fQ3Fn",(function(t,n){e(t.exports,"getDatabase",(function(){return i("8NPS8").getDatabase})),e(t.exports,"set",(function(){return i("8NPS8").set})),e(t.exports,"ref",(function(){return i("8NPS8").ref})),e(t.exports,"push",(function(){return i("8NPS8").push})),e(t.exports,"get",(function(){return i("8NPS8").get})),e(t.exports,"child",(function(){return i("8NPS8").child})),i("8NPS8")})),i.register("8NPS8",(function(t,n){e(t.exports,"child",(function(){return Is})),e(t.exports,"ref",(function(){return ws})),e(t.exports,"push",(function(){return Cs})),e(t.exports,"set",(function(){return ks})),e(t.exports,"get",(function(){return Es})),e(t.exports,"getDatabase",(function(){return Ns}));var r=i("ix4Jr"),s=i("4a6xH"),o=i("ffjl9"),a=i("7vF8m"),l=i("4TNnu");const c="@firebase/database",u="0.13.10";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class d{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.stringify)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.jsonEval)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.contains)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new d(t)}}catch(e){}return new p},m=f("localStorage"),g=f("sessionStorage"),_=new(0,a.Logger)("@firebase/database"),y=function(){let e=1;return function(){return e++}}(),v=function(e){const t=(0,o.stringToByteArray)(e),n=new(0,o.Sha1);n.update(t);const r=n.digest();return o.base64.encodeByteArray(r)},b=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=b.apply(null,r):t+="object"==typeof r?(0,o.stringify)(r):r,t+=" "}return t};let w=null,I=!0;const C=function(e,t){(0,o.assert)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(_.logLevel=a.LogLevel.VERBOSE,w=_.log.bind(_),t&&g.set("logging_enabled",!0)):"function"==typeof e?w=e:(w=null,g.remove("logging_enabled"))},k=function(...e){if(!0===I&&(I=!1,null===w&&!0===g.get("logging_enabled")&&C(!0)),w){const t=b.apply(null,e);w(t)}},E=function(e){return function(...t){k(e,...t)}},S=function(...e){const t="FIREBASE INTERNAL ERROR: "+b(...e);_.error(t)},T=function(...e){const t=`FIREBASE FATAL ERROR: ${b(...e)}`;throw _.error(t),new Error(t)},x=function(...e){const t="FIREBASE WARNING: "+b(...e);_.warn(t)},R=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},A="[MIN_NAME]",N="[MAX_NAME]",O=function(e,t){if(e===t)return 0;if(e===A||t===N)return-1;if(t===A||e===N)return 1;{const n=z(e),r=z(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},P=function(e,t){return e===t?0:e<t?-1:1},D=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.stringify)(t))},$=function(e){if("object"!=typeof e||null===e)return(0,o.stringify)(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,o.stringify)(t[r]),n+=":",n+=$(e[t[r]]);return n+="}",n},L=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let s=0;s<n;s+=t)s+t>n?r.push(e.substring(s,n)):r.push(e.substring(s,s+t));return r};function M(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const j=function(e){(0,o.assert)(!R(e),"Invalid JSON number");const t=1023;let n,r,s,i,a;0===e?(r=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(i=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=i+t,s=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(r=0,s=Math.round(e/Math.pow(2,-1074))));const l=[];for(a=52;a;a-=1)l.push(s%2?1:0),s=Math.floor(s/2);for(a=11;a;a-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(n?1:0),l.reverse();const c=l.join("");let u="";for(a=0;a<64;a+=8){let e=parseInt(c.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),u+=e}return u.toLowerCase()};const F=new RegExp("^-?(0*)\\d{1,10}$"),q=-2147483648,U=2147483647,z=function(e){if(F.test(e)){const t=Number(e);if(t>=q&&t<=U)return t}return null},W=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw x("Exception was thrown by user callback.",t),e}),Math.floor(0))}},V=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){x(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(k("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',x(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class G{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}G.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const K="5",Y=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,J="websocket",Q="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&m.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,r,s=!1,i="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=i,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=m.get("host:"+e)||this._host}}function Z(e,t,n){let r;if((0,o.assert)("string"==typeof t,"typeof type must == string"),(0,o.assert)("object"==typeof n,"typeof params must == object"),t===J)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Q)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return M(n,((e,t)=>{s.push(e+"="+t)})),r+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{incrementCounter(e,t=1){(0,o.contains)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.deepCopy)(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={},ne={};function re(e){const t=e.toString();return te[t]||(te[t]=new ee),te[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class se{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&W((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="start";class oe{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new se(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if((0,o.isNodeSdk)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new ae(((...e)=>{const[t,n,r,s,i]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ie)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=K,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Y.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oe.forceAllow_=!0}static forceDisallow(){oe.forceDisallow_=!0}static isAvailable(){return!(0,o.isNodeSdk)()&&(!!oe.forceAllow_||!(oe.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.base64Encode)(t),r=L(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.stringify)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,r,s,i,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=s,this.transportSessionId=i,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=E(e),this.stats_=re(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Z(t,Q,e))}}class ae{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||k("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){(0,o.isNodeSdk)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{k("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.isNodeSdk)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=y(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ae.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){k("frame writing exception"),e.stack&&k(e.stack),k(e)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let le=null;"undefined"!=typeof MozWebSocket?le=MozWebSocket:"undefined"!=typeof WebSocket&&(le=WebSocket);class ce{static connectionURL_(e,t,n,r,s){const i={};return i.v=K,!(0,o.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&Y.test(location.hostname)&&(i.r="f"),t&&(i.s=t),n&&(i.ls=n),r&&(i.ac=r),s&&(i.p=s),Z(e,J,i)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,m.set("previous_websocket_failure",!0);try{let e;if((0,o.isNodeSdk)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${h}/${l.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},r=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new le(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ce.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==le&&!ce.forceDisallow_}static previouslyFailed(){return m.isInMemoryStorage||!0===m.get("previous_websocket_failure")}markConnectionHealthy(){m.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.jsonEval)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.assert)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=L(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,r,s,i,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=E(this.connId),this.stats_=re(t),this.connURL=ce.connectionURL_(t,i,o,r,n),this.nodeAdmin=t.nodeAdmin}}ce.responsesRequiredToBeHealthy=2,ce.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{static get ALL_TRANSPORTS(){return[oe,ce]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ce&&ce.isAvailable();let n=t&&!ce.previouslyFailed();if(e.webSocketOnly&&(t||x("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ce];else{const e=this.transports_=[];for(const t of ue.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);ue.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}ue.globalTransportInitialized_=!1;class he{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=V((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=D("t",e),n=D("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=D("t",e),n=D("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=D("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?S("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):S("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),K!==n&&x("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),V((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):V((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(m.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,r,s,i,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=i,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=E("c:"+this.id+":"),this.transportManager_=new ue(t),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){(0,o.assert)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.assert)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends pe{static getInstance(){return new fe}getInitialEvent(e){return(0,o.assert)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,o.isMobileCordova)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function ge(){return new me("")}function _e(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ye(e){return e.pieces_.length-e.pieceNum_}function ve(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new me(e.pieces_,t)}function be(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function we(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Ie(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new me(t,0)}function Ce(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof me)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new me(n,0)}function ke(e){return e.pieceNum_>=e.pieces_.length}function Ee(e,t){const n=_e(e),r=_e(t);if(null===n)return t;if(n===r)return Ee(ve(e),ve(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Se(e,t){if(ye(e)!==ye(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Te(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(ye(e)>ye(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class xe{constructor(e,t){this.errorPrefix_=t,this.parts_=we(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,o.stringLength)(this.parts_[e]);Re(this)}}function Re(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Ae(e))}function Ae(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends pe{static getInstance(){return new Ne}getInitialEvent(e){return(0,o.assert)("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=1e3;class Pe extends de{sendRequest(e,t,n){const r=++this.requestNumber_,s={r:r,a:e,b:t};this.log_((0,o.stringify)(s)),(0,o.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new(0,o.Deferred),n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const s=e._queryIdentifier,i=e._path.toString();this.log_("Listen called for "+i+" "+s),this.listens.has(i)||this.listens.set(i,new Map),(0,o.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.assert)(!this.listens.get(i).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(i).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const i=s.d,o=s.s;Pe.warnOnListenWarnings_(i,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,i))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,o.contains)(e,"w")){const n=(0,o.safeGet)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();x(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||(0,o.isAdmin)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.isValidFormat)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,o.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e};r&&(s.q=n,s.t=r),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,s){this.initConnection_();const i={p:t,d:n};void 0!==s&&(i.h=s),this.outstandingPuts_.push({action:e,request:i,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.stringify)(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):S("Unrecognized action received from server: "+(0,o.stringify)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Oe,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Oe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Oe),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Pe.nextConnectionId_++,s=this.lastSessionId;let i=!1,a=null;const l=function(){a?a.close():(i=!0,n())},c=function(e){(0,o.assert)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,l]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);i?k("getToken() completed but was canceled"):(k("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=l&&l.token,a=new he(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{x(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),i||(this.repoInfo_.nodeAdmin&&x(e),l())}}}interrupt(e){k("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){k("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=Oe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>$(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new me(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){k("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){k("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.isNodeSdk)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+h.replace(/\./g,"-")]=1,(0,o.isMobileCordova)()?e["framework.cordova"]=1:(0,o.isReactNative)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fe.getInstance().currentlyOnline();return(0,o.isEmpty)(this.interruptReasons_)&&e}constructor(e,t,n,r,s,i,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=i,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Pe.nextPersistentConnectionId_++,this.log_=E("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Oe,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,o.isNodeSdk)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ne.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&fe.getInstance().on("online",this.onOnline_,this)}}Pe.nextPersistentConnectionId_=0,Pe.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{static Wrap(e,t){return new De(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new De(A,e),r=new De(A,t);return 0!==this.compare(n,r)}minPost(){return De.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Le;class Me extends $e{static get __EMPTY_NODE(){return Le}static set __EMPTY_NODE(e){Le=e}compare(e,t){return O(e.name,t.name)}isDefinedOn(e){throw(0,o.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return De.MIN}maxPost(){return new De(N,Le)}makePost(e,t){return(0,o.assert)("string"==typeof e,"KeyIndex indexValue must always be a string."),new De(e,Le)}toString(){return".key"}}const je=new Me;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse_?e.left:e.right;else{if(0===i){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class qe{copy(e,t,n,r,s){return new qe(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ue.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:qe.RED,this.left=null!=r?r:Ue.EMPTY_NODE,this.right=null!=s?s:Ue.EMPTY_NODE}}qe.RED=!0,qe.BLACK=!1;class Ue{insert(e,t){return new Ue(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fe(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Fe(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Fe(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Fe(this.root_,null,this.comparator_,!0,e)}constructor(e,t=Ue.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ze(e,t){return O(e.name,t.name)}function We(e,t){return O(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ve;Ue.EMPTY_NODE=new class{copy(e,t,n,r,s){return this}insert(e,t,n){return new qe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Be=function(e){return"number"==typeof e?"number:"+j(e):"string:"+e},He=function(e){if(e.isLeafNode()){const t=e.val();(0,o.assert)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,o.contains)(t,".sv"),"Priority must be a string or number.")}else(0,o.assert)(e===Ve||e.isEmpty(),"priority of unexpected type.");(0,o.assert)(e===Ve||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ge,Ke,Ye;class Je{static set __childrenNodeConstructor(e){Ge=e}static get __childrenNodeConstructor(){return Ge}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ke(e)?this:".priority"===_e(e)?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=_e(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.assert)(".priority"!==n||1===ye(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Be(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?j(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:((0,o.assert)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Je.VALUE_TYPE_ORDER.indexOf(t),s=Je.VALUE_TYPE_ORDER.indexOf(n);return(0,o.assert)(r>=0,"Unknown leaf type: "+t),(0,o.assert)(s>=0,"Unknown leaf type: "+n),r===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),He(this.priorityNode_)}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Qe=new class extends $e{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),s=n.compareTo(r);return 0===s?O(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return De.MIN}maxPost(){return new De(N,new Je("[PRIORITY-POST]",Ye))}makePost(e,t){const n=Ke(e);return new De(t,new Je("[PRIORITY-POST]",n))}toString(){return".priority"}},Xe=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Xe,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}}const et=function(e,t,n,r){e.sort(t);const s=function(t,r){const i=r-t;let o,a;if(0===i)return null;if(1===i)return o=e[t],a=n?n(o):o,new qe(a,o.node,qe.BLACK,null,null);{const l=parseInt(i/2,10)+t,c=s(t,l),u=s(l+1,r);return o=e[l],a=n?n(o):o,new qe(a,o.node,qe.BLACK,c,u)}},i=function(t){let r=null,i=null,o=e.length;const a=function(t,r){const i=o-t,a=o;o-=t;const c=s(i+1,a),u=e[i],h=n?n(u):u;l(new qe(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(i=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,qe.BLACK):(a(r,qe.BLACK),a(r,qe.RED))}return i}(new Ze(e.length));return new Ue(r||t,i)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt;const nt={};class rt{static get Default(){return(0,o.assert)(nt&&Qe,"ChildrenNode.ts has not been loaded"),tt=tt||new rt({".priority":nt},{".priority":Qe}),tt}get(e){const t=(0,o.safeGet)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ue?t:null}hasIndex(e){return(0,o.contains)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.assert)(e!==je,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const s=t.getIterator(De.Wrap);let i,a=s.getNext();for(;a;)r=r||e.isDefinedOn(a.node),n.push(a),a=s.getNext();i=r?et(n,e.getCompare()):nt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=i,new rt(u,c)}addToIndexes(e,t){const n=(0,o.map)(this.indexes_,((n,r)=>{const s=(0,o.safeGet)(this.indexSet_,r);if((0,o.assert)(s,"Missing index implementation for "+r),n===nt){if(s.isDefinedOn(e.node)){const n=[],r=t.getIterator(De.Wrap);let i=r.getNext();for(;i;)i.name!==e.name&&n.push(i),i=r.getNext();return n.push(e),et(n,s.getCompare())}return nt}{const r=t.get(e.name);let s=n;return r&&(s=s.remove(new De(e.name,r))),s.insert(e,e.node)}}));return new rt(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.map)(this.indexes_,(n=>{if(n===nt)return n;{const r=t.get(e.name);return r?n.remove(new De(e.name,r)):n}}));return new rt(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let st;class it{static get EMPTY_NODE(){return st||(st=new it(new Ue(We),null,rt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||st}updatePriority(e){return this.children_.isEmpty()?this:new it(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?st:t}}getChild(e){const t=_e(e);return null===t?this:this.getImmediateChild(t).getChild(ve(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.assert)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new De(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const i=r.isEmpty()?st:this.priorityNode_;return new it(r,i,s)}}updateChild(e,t){const n=_e(e);if(null===n)return t;{(0,o.assert)(".priority"!==_e(e)||1===ye(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ve(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,s=!0;if(this.forEachChild(Qe,((i,o)=>{t[i]=o.val(e),n++,s&&it.INTEGER_REGEXP_.test(i)?r=Math.max(r,Number(i)):s=!1})),!e&&s&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Be(this.getPriority().val())+":"),this.forEachChild(Qe,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new De(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new De(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new De(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,De.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,De.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ot?-1:0}withIndex(e){if(e===je||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new it(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===je||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Qe),n=t.getIterator(Qe);let r=e.getNext(),s=n.getNext();for(;r&&s;){if(r.name!==s.name||!r.node.equals(s.node))return!1;r=e.getNext(),s=n.getNext()}return null===r&&null===s}return!1}return!1}}resolveIndex_(e){return e===je?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&He(this.priorityNode_),this.children_.isEmpty()&&(0,o.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}it.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const ot=new class extends it{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return it.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new Ue(We),it.EMPTY_NODE,rt.Default)}};Object.defineProperties(De,{MIN:{value:new De(A,it.EMPTY_NODE)},MAX:{value:new De(N,ot)}}),Me.__EMPTY_NODE=it.EMPTY_NODE,Je.__childrenNodeConstructor=it,Ve=ot,function(e){Ye=e}(ot);function at(e,t=null){if(null===e)return it.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.assert)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Je(e,at(t))}if(e instanceof Array){let n=it.EMPTY_NODE;return M(e,((t,r)=>{if((0,o.contains)(e,t)&&"."!==t.substring(0,1)){const e=at(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(at(t))}{const n=[];let r=!1;if(M(e,((e,t)=>{if("."!==e.substring(0,1)){const s=at(t);s.isEmpty()||(r=r||!s.getPriority().isEmpty(),n.push(new De(e,s)))}})),0===n.length)return it.EMPTY_NODE;const s=et(n,ze,(e=>e.name),We);if(r){const e=et(n,Qe.getCompare());return new it(s,at(t),new rt({".priority":e},{".priority":Qe}))}return new it(s,at(t),rt.Default)}}!function(e){Ke=e}(at);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt extends $e{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),s=n.compareTo(r);return 0===s?O(e.name,t.name):s}makePost(e,t){const n=at(e),r=it.EMPTY_NODE.updateChild(this.indexPath_,n);return new De(t,r)}maxPost(){const e=it.EMPTY_NODE.updateChild(this.indexPath_,ot);return new De(N,e)}toString(){return we(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,(0,o.assert)(!ke(e)&&".priority"!==_e(e),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new class extends $e{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?O(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return De.MIN}maxPost(){return De.MAX}makePost(e,t){const n=at(e);return new De(t,n)}toString(){return".value"}},ut="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ht=function(){let e=0;const t=[];return function(n){const r=n===e;let s;e=n;const i=new Array(8);for(s=7;s>=0;s--)i[s]=ut.charAt(n%64),n=Math.floor(n/64);(0,o.assert)(0===n,"Cannot push at time == 0");let a=i.join("");if(r){for(s=11;s>=0&&63===t[s];s--)t[s]=0;t[s]++}else for(s=0;s<12;s++)t[s]=Math.floor(64*Math.random());for(s=0;s<12;s++)a+=ut.charAt(t[s]);return(0,o.assert)(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dt(e){return{type:"value",snapshotNode:e}}function pt(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ft(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function mt(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{updateChild(e,t,n,r,s,i){(0,o.assert)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=i&&(n.isEmpty()?e.hasChild(t)?i.trackChildChange(ft(t,a)):(0,o.assert)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?i.trackChildChange(pt(t,n)):i.trackChildChange(mt(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Qe,((e,r)=>{t.hasChild(e)||n.trackChildChange(ft(e,r))})),t.isLeafNode()||t.forEachChild(Qe,((t,r)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(r)||n.trackChildChange(mt(t,r,s))}else n.trackChildChange(pt(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?it.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}constructor(e){this.index_=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,s,i){return this.matches(new De(t,n))||(n=it.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,s,i)}updateFullNode(e,t,n){t.isLeafNode()&&(t=it.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(it.EMPTY_NODE);const s=this;return t.forEachChild(Qe,((e,t)=>{s.matches(new De(e,t))||(r=r.updateImmediateChild(e,it.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}constructor(e){this.indexedFilter_=new gt(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_t.getStartPost_(e),this.endPost_=_t.getEndPost_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{updateChild(e,t,n,r,s,i){return this.rangedFilter_.matches(new De(t,n))||(n=it.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,s,i):this.fullLimitUpdateChild_(e,t,n,s,i)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=it.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=it.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let s;if(s=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!s)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,s,i;if(r=t.withIndex(this.index_),r=r.updatePriority(it.EMPTY_NODE),this.reverse_){i=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else i=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let o=0,a=!1;for(;i.hasNext();){const t=i.getNext();!a&&s(e,t)<=0&&(a=!0);a&&o<this.limit_&&s(t,n)<=0?o++:r=r.updateImmediateChild(t.name,it.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,s){let i;if(this.reverse_){const e=this.index_.getCompare();i=(t,n)=>e(n,t)}else i=this.index_.getCompare();const a=e;(0,o.assert)(a.numChildren()===this.limit_,"");const l=new De(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=r.getChildAfterChild(this.index_,c,this.reverse_);for(;null!=o&&(o.name===t||a.hasChild(o.name));)o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:i(o,l);if(u&&!n.isEmpty()&&h>=0)return null!=s&&s.trackChildChange(mt(t,n,e)),a.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(ft(t,e));const n=a.updateImmediateChild(t,it.EMPTY_NODE);return null!=o&&this.rangedFilter_.matches(o)?(null!=s&&s.trackChildChange(pt(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:u&&i(c,l)>=0?(null!=s&&(s.trackChildChange(ft(c.name,c.node)),s.trackChildChange(pt(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,it.EMPTY_NODE)):e}constructor(e){this.rangedFilter_=new _t(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:A}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:N}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Qe}copy(){const e=new vt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Qe}}function bt(e){const t={};if(e.isDefault())return t;let n;return e.index_===Qe?n="$priority":e.index_===ct?n="$value":e.index_===je?n="$key":((0,o.assert)(e.index_ instanceof lt,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=(0,o.stringify)(n),e.startSet_&&(t.startAt=(0,o.stringify)(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+(0,o.stringify)(e.indexStartName_))),e.endSet_&&(t.endAt=(0,o.stringify)(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+(0,o.stringify)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function wt(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Qe&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends de{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.assert)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const i=It.getListenId_(e,n),a={};this.listens_[i]=a;const l=bt(e._queryParams);this.restRequest_(s+".json",l,((e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(s,l,!1,n),(0,o.safeGet)(this.listens_,i)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=It.getListenId_(e,t);delete this.listens_[n]}get(e){const t=bt(e._queryParams),n=e._path.toString(),r=new(0,o.Deferred);return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),r.resolve(s)):r.reject(new Error(s))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const i=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.querystring)(t);this.log_("Sending REST request for "+i);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+i+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=(0,o.jsonEval)(a.responseText)}catch(e){x("Failed to parse JSON response for "+i+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&x("Got unsuccessful REST response for "+i+" Status: "+a.status),n(a.status);n=null}},a.open("GET",i,!0),a.send()}))}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=E("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=it.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return{value:null,children:new Map}}function Et(e,t,n){if(ke(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=_e(t);e.children.has(r)||e.children.set(r,kt());Et(e.children.get(r),t=ve(t),n)}}function St(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,r)=>{St(r,new me(t.toString()+"/"+e),n)}))}class Tt{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&M(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;M(e,((e,r)=>{r>0&&(0,o.contains)(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),V(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Tt(e);const n=1e4+2e4*Math.random();V(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt,At;function Nt(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(At=Rt||(Rt={}))[At.OVERWRITE=0]="OVERWRITE",At[At.MERGE=1]="MERGE",At[At.ACK_USER_WRITE=2]="ACK_USER_WRITE",At[At.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Ot{operationForChild(e){if(ke(this.path)){if(null!=this.affectedTree.value)return(0,o.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new me(e));return new Ot(ge(),t,this.revert)}}return(0,o.assert)(_e(this.path)===e,"operationForChild called for unrelated child."),new Ot(ve(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Rt.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{operationForChild(e){return ke(this.path)?new Pt(this.source,ge()):new Pt(this.source,ve(this.path))}constructor(e,t){this.source=e,this.path=t,this.type=Rt.LISTEN_COMPLETE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{operationForChild(e){return ke(this.path)?new Dt(this.source,ge(),this.snap.getImmediateChild(e)):new Dt(this.source,ve(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Rt.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{operationForChild(e){if(ke(this.path)){const t=this.children.subtree(new me(e));return t.isEmpty()?null:t.value?new Dt(this.source,ge(),t.value):new $t(this.source,ge(),t)}return(0,o.assert)(_e(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $t(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Rt.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ke(e))return this.isFullyInitialized()&&!this.filtered_;const t=_e(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jt(e,t,n,r,s,i){const a=r.filter((e=>e.type===n));a.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.assertionError)("Should only compare child_ events.");const r=new De(t.childName,t.snapshotNode),s=new De(n.childName,n.snapshotNode);return e.index_.compare(r,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),a.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,i);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(r,e.query_))}))}))}function Ft(e,t){return{eventCache:e,serverCache:t}}function qt(e,t,n,r){return Ft(new Lt(t,n,r),e.serverCache)}function Ut(e,t,n,r){return Ft(e.eventCache,new Lt(t,n,r))}function zt(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Wt(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt;class Bt{static fromObject(e){let t=new Bt(null);return M(e,((e,n)=>{t=t.set(new me(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ge(),value:this.value};if(ke(e))return null;{const n=_e(e),r=this.children.get(n);if(null!==r){const s=r.findRootMostMatchingPathAndValue(ve(e),t);if(null!=s){return{path:Ce(new me(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(ke(e))return this;{const t=_e(e),n=this.children.get(t);return null!==n?n.subtree(ve(e)):new Bt(null)}}set(e,t){if(ke(e))return new Bt(t,this.children);{const n=_e(e),r=(this.children.get(n)||new Bt(null)).set(ve(e),t),s=this.children.insert(n,r);return new Bt(this.value,s)}}remove(e){if(ke(e))return this.children.isEmpty()?new Bt(null):new Bt(null,this.children);{const t=_e(e),n=this.children.get(t);if(n){const r=n.remove(ve(e));let s;return s=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&s.isEmpty()?new Bt(null):new Bt(this.value,s)}return this}}get(e){if(ke(e))return this.value;{const t=_e(e),n=this.children.get(t);return n?n.get(ve(e)):null}}setTree(e,t){if(ke(e))return t;{const n=_e(e),r=(this.children.get(n)||new Bt(null)).setTree(ve(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Bt(this.value,s)}}fold(e){return this.fold_(ge(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,s)=>{n[r]=s.fold_(Ce(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ge(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(ke(e))return null;{const r=_e(e),s=this.children.get(r);return s?s.findOnPath_(ve(e),Ce(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ge(),t)}foreachOnPath_(e,t,n){if(ke(e))return this;{this.value&&n(t,this.value);const r=_e(e),s=this.children.get(r);return s?s.foreachOnPath_(ve(e),Ce(t,r),n):new Bt(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(Ce(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(Vt||(Vt=new Ue(P)),Vt))()){this.value=e,this.children=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{static empty(){return new Ht(new Bt(null))}constructor(e){this.writeTree_=e}}function Gt(e,t,n){if(ke(t))return new Ht(new Bt(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const s=r.path;let i=r.value;const o=Ee(s,t);return i=i.updateChild(o,n),new Ht(e.writeTree_.set(s,i))}{const r=new Bt(n),s=e.writeTree_.setTree(t,r);return new Ht(s)}}}function Kt(e,t,n){let r=e;return M(n,((e,n)=>{r=Gt(r,Ce(t,e),n)})),r}function Yt(e,t){if(ke(t))return Ht.empty();{const n=e.writeTree_.setTree(t,new Bt(null));return new Ht(n)}}function Jt(e,t){return null!=Qt(e,t)}function Qt(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ee(n.path,t)):null}function Xt(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Qe,((e,n)=>{t.push(new De(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new De(e,n.value))})),t}function Zt(e,t){if(ke(t))return e;{const n=Qt(e,t);return new Ht(null!=n?new Bt(n):e.writeTree_.subtree(t))}}function en(e){return e.writeTree_.isEmpty()}function tn(e,t){return nn(ge(),e.writeTree_,t)}function nn(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?((0,o.assert)(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):n=nn(Ce(e,t),s,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Ce(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e,t){return _n(t,e)}function sn(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,o.assert)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let s=r.visible,i=!1,a=e.allWrites.length-1;for(;s&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&on(t,r.path)?s=!1:Te(r.path,t.path)&&(i=!0)),a--}if(s){if(i)return function(e){e.visibleWrites=ln(e.allWrites,an,ge()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=Yt(e.visibleWrites,r.path);else{M(r.children,(t=>{e.visibleWrites=Yt(e.visibleWrites,Ce(r.path,t))}))}return!0}return!1}function on(e,t){if(e.snap)return Te(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Te(Ce(e.path,n),t))return!0;return!1}function an(e){return e.visible}function ln(e,t,n){let r=Ht.empty();for(let s=0;s<e.length;++s){const i=e[s];if(t(i)){const e=i.path;let t;if(i.snap)Te(n,e)?(t=Ee(n,e),r=Gt(r,t,i.snap)):Te(e,n)&&(t=Ee(e,n),r=Gt(r,ge(),i.snap.getChild(t)));else{if(!i.children)throw(0,o.assertionError)("WriteRecord should have .snap or .children");if(Te(n,e))t=Ee(n,e),r=Kt(r,t,i.children);else if(Te(e,n))if(t=Ee(e,n),ke(t))r=Kt(r,ge(),i.children);else{const e=(0,o.safeGet)(i.children,_e(t));if(e){const n=e.getChild(ve(t));r=Gt(r,ge(),n)}}}}}return r}function cn(e,t,n,r,s){if(r||s){const i=Zt(e.visibleWrites,t);if(!s&&en(i))return n;if(s||null!=n||Jt(i,ge())){const i=function(e){return(e.visible||s)&&(!r||!~r.indexOf(e.writeId))&&(Te(e.path,t)||Te(t,e.path))};return tn(ln(e.allWrites,i,t),n||it.EMPTY_NODE)}return null}{const r=Qt(e.visibleWrites,t);if(null!=r)return r;{const r=Zt(e.visibleWrites,t);if(en(r))return n;if(null!=n||Jt(r,ge())){return tn(r,n||it.EMPTY_NODE)}return null}}}function un(e,t,n,r){return cn(e.writeTree,e.treePath,t,n,r)}function hn(e,t){return function(e,t,n){let r=it.EMPTY_NODE;const s=Qt(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Qe,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const s=Zt(e.visibleWrites,t);return n.forEachChild(Qe,((e,t)=>{const n=tn(Zt(s,new me(e)),t);r=r.updateImmediateChild(e,n)})),Xt(s).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return Xt(Zt(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function dn(e,t,n,r){return function(e,t,n,r,s){(0,o.assert)(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ce(t,n);if(Jt(e.visibleWrites,i))return null;{const t=Zt(e.visibleWrites,i);return en(t)?s.getChild(n):tn(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function pn(e,t){return function(e,t){return Qt(e.visibleWrites,t)}(e.writeTree,Ce(e.treePath,t))}function fn(e,t,n,r,s,i){return function(e,t,n,r,s,i,o){let a;const l=Zt(e.visibleWrites,t),c=Qt(l,ge());if(null!=c)a=c;else{if(null==n)return[];a=tn(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,s,i)}function mn(e,t,n){return function(e,t,n,r){const s=Ce(t,n),i=Qt(e.visibleWrites,s);if(null!=i)return i;if(r.isCompleteForChild(n))return tn(Zt(e.visibleWrites,s),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function gn(e,t){return _n(Ce(e.treePath,t),e.writeTree)}function _n(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{trackChildChange(e){const t=e.type,n=e.childName;(0,o.assert)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const s=r.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,mt(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,ft(n,r.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,pt(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw(0,o.assertionError)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,mt(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class bn{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Lt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mn(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Wt(this.viewCache_),s=fn(this.writes_,r,t,1,n,e);return 0===s.length?null:s[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e,t,n,r,s){const i=new yn;let a,l;if(n.type===Rt.OVERWRITE){const c=n;c.source.fromUser?a=kn(e,t,c.path,c.snap,r,s,i):((0,o.assert)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!ke(c.path),a=Cn(e,t,c.path,c.snap,r,s,l,i))}else if(n.type===Rt.MERGE){const c=n;c.source.fromUser?a=function(e,t,n,r,s,i,o){let a=t;return r.foreach(((r,l)=>{const c=Ce(n,r);En(t,_e(c))&&(a=kn(e,a,c,l,s,i,o))})),r.foreach(((r,l)=>{const c=Ce(n,r);En(t,_e(c))||(a=kn(e,a,c,l,s,i,o))})),a}(e,t,c.path,c.children,r,s,i):((0,o.assert)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),a=Tn(e,t,c.path,c.children,r,s,l,i))}else if(n.type===Rt.ACK_USER_WRITE){const l=n;a=l.revert?function(e,t,n,r,s,i){let a;if(null!=pn(r,n))return t;{const l=new bn(r,t,s),c=t.eventCache.getNode();let u;if(ke(n)||".priority"===_e(n)){let n;if(t.serverCache.isFullyInitialized())n=un(r,Wt(t));else{const e=t.serverCache.getNode();(0,o.assert)(e instanceof it,"serverChildren would be complete if leaf node"),n=hn(r,e)}u=e.filter.updateFullNode(c,n,i)}else{const s=_e(n);let o=mn(r,s,t.serverCache);null==o&&t.serverCache.isCompleteForChild(s)&&(o=c.getImmediateChild(s)),u=null!=o?e.filter.updateChild(c,s,o,ve(n),l,i):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(c,s,it.EMPTY_NODE,ve(n),l,i):c,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=un(r,Wt(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,i)))}return a=t.serverCache.isFullyInitialized()||null!=pn(r,ge()),qt(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,l.path,r,s,i):function(e,t,n,r,s,i,o){if(null!=pn(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(ke(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Cn(e,t,n,l.getNode().getChild(n),s,i,a,o);if(ke(n)){let r=new Bt(null);return l.getNode().forEachChild(je,((e,t)=>{r=r.set(new me(e),t)})),Tn(e,t,n,r,s,i,a,o)}return t}{let c=new Bt(null);return r.foreach(((e,t)=>{const r=Ce(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),Tn(e,t,n,c,s,i,a,o)}}(e,t,l.path,l.affectedTree,r,s,i)}else{if(n.type!==Rt.LISTEN_COMPLETE)throw(0,o.assertionError)("Unknown operation type: "+n.type);a=function(e,t,n,r,s){const i=t.serverCache,o=Ut(t,i.getNode(),i.isFullyInitialized()||ke(n),i.isFiltered());return In(e,o,n,r,vn,s)}(e,t,n.path,r,i)}const c=i.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=zt(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(dt(zt(t)))}}(t,a,c),{viewCache:a,changes:c}}function In(e,t,n,r,s,i){const a=t.eventCache;if(null!=pn(r,n))return t;{let l,c;if(ke(n))if((0,o.assert)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Wt(t),s=hn(r,n instanceof it?n:it.EMPTY_NODE);l=e.filter.updateFullNode(t.eventCache.getNode(),s,i)}else{const n=un(r,Wt(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,i)}else{const u=_e(n);if(".priority"===u){(0,o.assert)(1===ye(n),"Can't have a priority with additional path components");const s=a.getNode();c=t.serverCache.getNode();const i=dn(r,n,s,c);l=null!=i?e.filter.updatePriority(s,i):a.getNode()}else{const o=ve(n);let h;if(a.isCompleteForChild(u)){c=t.serverCache.getNode();const e=dn(r,n,a.getNode(),c);h=null!=e?a.getNode().getImmediateChild(u).updateChild(o,e):a.getNode().getImmediateChild(u)}else h=mn(r,u,t.serverCache);l=null!=h?e.filter.updateChild(a.getNode(),u,h,o,s,i):a.getNode()}}return qt(t,l,a.isFullyInitialized()||ke(n),e.filter.filtersNodes())}}function Cn(e,t,n,r,s,i,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(ke(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=_e(n);if(!l.isCompleteForPath(n)&&ye(n)>1)return t;const s=ve(n),i=l.getNode().getImmediateChild(e).updateChild(s,r);c=".priority"===e?u.updatePriority(l.getNode(),i):u.updateChild(l.getNode(),e,i,s,vn,null)}const h=Ut(t,c,l.isFullyInitialized()||ke(n),u.filtersNodes());return In(e,h,n,s,new bn(s,h,i),a)}function kn(e,t,n,r,s,i,o){const a=t.eventCache;let l,c;const u=new bn(s,t,i);if(ke(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=qt(t,c,!0,e.filter.filtersNodes());else{const s=_e(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=qt(t,c,a.isFullyInitialized(),a.isFiltered());else{const i=ve(n),c=a.getNode().getImmediateChild(s);let h;if(ke(i))h=r;else{const e=u.getCompleteChild(s);h=null!=e?".priority"===be(i)&&e.getChild(Ie(i)).isEmpty()?e:e.updateChild(i,r):it.EMPTY_NODE}if(c.equals(h))l=t;else{l=qt(t,e.filter.updateChild(a.getNode(),s,h,i,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function En(e,t){return e.eventCache.isCompleteForChild(t)}function Sn(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Tn(e,t,n,r,s,i,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=ke(n)?r:new Bt(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=Sn(0,t.serverCache.getNode().getImmediateChild(n),r);c=Cn(e,c,new me(n),l,s,i,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!l){const l=Sn(0,t.serverCache.getNode().getImmediateChild(n),r);c=Cn(e,c,new me(n),l,s,i,o,a)}})),c}class xn{get query(){return this.query_}constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new gt(n.getIndex()),s=(i=n).loadsAllData()?new gt(i.getIndex()):i.hasLimit()?new yt(i):new _t(i);var i;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(it.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(it.EMPTY_NODE,a.getNode(),null),u=new Lt(l,o.isFullyInitialized(),r.filtersNodes()),h=new Lt(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ft(h,u),this.eventGenerator_=new Mt(this.query_)}}function Rn(e,t){const n=Wt(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ke(t)&&!n.getImmediateChild(_e(t)).isEmpty())?n.getChild(t):null}function An(e){return 0===e.eventRegistrations_.length}function Nn(e,t,n){const r=[];if(n){(0,o.assert)(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const s=e.eventRegistrations_[r];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function On(e,t,n,r){t.type===Rt.MERGE&&null!==t.source.queryId&&((0,o.assert)(Wt(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.assert)(zt(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,i=wn(e.processor_,s,t,n,r);var a,l;return a=e.processor_,l=i.viewCache,(0,o.assert)(l.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),(0,o.assert)(l.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),(0,o.assert)(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=i.viewCache,Pn(e,i.changes,i.viewCache.eventCache.getNode(),null)}function Pn(e,t,n,r){const s=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const s=[],i=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&i.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),jt(e,s,"child_removed",t,r,n),jt(e,s,"child_added",t,r,n),jt(e,s,"child_moved",i,r,n),jt(e,s,"child_changed",t,r,n),jt(e,s,"value",t,r,n),s}(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dn,$n;class Ln{constructor(){this.views=new Map}}function Mn(e,t,n,r){const s=t.source.queryId;if(null!==s){const i=e.views.get(s);return(0,o.assert)(null!=i,"SyncTree gave us an op for an invalid query."),On(i,t,n,r)}{let s=[];for(const i of e.views.values())s=s.concat(On(i,t,n,r));return s}}function jn(e,t,n,r,s){const i=t._queryIdentifier,o=e.views.get(i);if(!o){let e=un(n,s?r:null),i=!1;e?i=!0:r instanceof it?(e=hn(n,r),i=!1):(e=it.EMPTY_NODE,i=!1);const o=Ft(new Lt(e,i,!1),new Lt(r,s,!1));return new xn(t,o)}return o}function Fn(e,t,n,r,s,i){const o=jn(e,t,r,s,i);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Qe,((e,t)=>{r.push(pt(e,t))}));return n.isFullyInitialized()&&r.push(dt(n.getNode())),Pn(e,r,n.getNode(),t)}(o,n)}function qn(e,t,n,r){const s=t._queryIdentifier,i=[];let a=[];const l=Bn(e);if("default"===s)for(const[t,s]of e.views.entries())a=a.concat(Nn(s,n,r)),An(s)&&(e.views.delete(t),s.query._queryParams.loadsAllData()||i.push(s.query));else{const t=e.views.get(s);t&&(a=a.concat(Nn(t,n,r)),An(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||i.push(t.query)))}return l&&!Bn(e)&&i.push(new((0,o.assert)(Dn,"Reference.ts has not been loaded"),Dn)(t._repo,t._path)),{removed:i,events:a}}function Un(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function zn(e,t){let n=null;for(const r of e.views.values())n=n||Rn(r,t);return n}function Wn(e,t){if(t._queryParams.loadsAllData())return Hn(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Vn(e,t){return null!=Wn(e,t)}function Bn(e){return null!=Hn(e)}function Hn(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gn=1;class Kn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Bt(null),this.pendingWriteTree_={visibleWrites:Ht.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Yn(e,t,n,r,s){return function(e,t,n,r,s){(0,o.assert)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:s}),s&&(e.visibleWrites=Gt(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,s),s?rr(e,new Dt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Jn(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(sn(e.pendingWriteTree_,t)){let t=new Bt(null);return null!=r.snap?t=t.set(ge(),!0):M(r.children,(e=>{t=t.set(new me(e),!0)})),rr(e,new Ot(r.path,t,n))}return[]}function Qn(e,t,n){return rr(e,new Dt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Xn(e,t,n,r,s=!1){const i=t._path,o=e.syncPointTree_.get(i);let a=[];if(o&&("default"===t._queryIdentifier||Vn(o,t))){const l=qn(o,t,n,r);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!s){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(i,((e,t)=>Bn(t)));if(n&&!s){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Bn(t)){return[Hn(t)]}{let e=[];return t&&(e=Un(t)),M(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],s=r.query,i=or(e,r);e.listenProvider_.startListening(dr(s),ar(e,s),i.hashFn,i.onComplete)}}}if(!s&&c.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(dr(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(lr(t));e.listenProvider_.stopListening(dr(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=lr(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function Zn(e,t,n,r){const s=cr(e,r);if(null!=s){const r=ur(s),i=r.path,o=r.queryId,a=Ee(i,t);return hr(e,i,new Dt(Nt(o),a,n))}return[]}function er(e,t,n,r=!1){const s=t._path;let i=null,a=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=Ee(e,s);i=i||zn(t,n),a=a||Bn(t)}));let l,c=e.syncPointTree_.get(s);if(c?(a=a||Bn(c),i=i||zn(c,ge())):(c=new Ln,e.syncPointTree_=e.syncPointTree_.set(s,c)),null!=i)l=!0;else{l=!1,i=it.EMPTY_NODE;e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=zn(t,ge());n&&(i=i.updateImmediateChild(e,n))}))}const u=Vn(c,t);if(!u&&!t._queryParams.loadsAllData()){const n=lr(t);(0,o.assert)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=Gn++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let h=Fn(c,t,n,rn(e.pendingWriteTree_,s),i,l);if(!u&&!a&&!r){const n=Wn(c,t);h=h.concat(function(e,t,n){const r=t._path,s=ar(e,t),i=or(e,n),a=e.listenProvider_.startListening(dr(t),s,i.hashFn,i.onComplete),l=e.syncPointTree_.subtree(r);if(s)(0,o.assert)(!Bn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold(((e,t,n)=>{if(!ke(e)&&t&&Bn(t))return[Hn(t).query];{let e=[];return t&&(e=e.concat(Un(t).map((e=>e.query)))),M(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(dr(r),ar(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return h}function tr(e,t,n){const r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=zn(n,Ee(e,t));if(r)return r}));return cn(r,t,s,n,!0)}function nr(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const s=Ee(e,n);r=r||zn(t,s)}));let s=e.syncPointTree_.get(n);s?r=r||zn(s,ge()):(s=new Ln,e.syncPointTree_=e.syncPointTree_.set(n,s));const i=null!=r,o=i?new Lt(r,!0,!1):null;return function(e){return zt(e.viewCache_)}(jn(s,t,rn(e.pendingWriteTree_,t._path),i?o.getNode():it.EMPTY_NODE,i))}function rr(e,t){return sr(t,e.syncPointTree_,null,rn(e.pendingWriteTree_,ge()))}function sr(e,t,n,r){if(ke(e.path))return ir(e,t,n,r);{const s=t.get(ge());null==n&&null!=s&&(n=zn(s,ge()));let i=[];const o=_e(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=gn(r,o);i=i.concat(sr(a,l,e,t))}return s&&(i=i.concat(Mn(s,e,r,n))),i}}function ir(e,t,n,r){const s=t.get(ge());null==n&&null!=s&&(n=zn(s,ge()));let i=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=gn(r,t),l=e.operationForChild(t);l&&(i=i.concat(ir(l,s,o,a)))})),s&&(i=i.concat(Mn(s,e,r,n))),i}function or(e,t){const n=t.query,r=ar(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||it.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=cr(e,n);if(r){const n=ur(r),s=n.path,i=n.queryId,o=Ee(s,t);return hr(e,s,new Pt(Nt(i),o))}return[]}(e,n._path,r):function(e,t){return rr(e,new Pt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return Xn(e,n,null,r)}}}}function ar(e,t){const n=lr(t);return e.queryToTagMap.get(n)}function lr(e){return e._path.toString()+"$"+e._queryIdentifier}function cr(e,t){return e.tagToQueryMap.get(t)}function ur(e){const t=e.indexOf("$");return(0,o.assert)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new me(e.substr(0,t))}}function hr(e,t,n){const r=e.syncPointTree_.get(t);(0,o.assert)(r,"Missing sync point for query tag that we're tracking");return Mn(r,n,rn(e.pendingWriteTree_,t),null)}function dr(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new((0,o.assert)($n,"Reference.ts has not been loaded"),$n)(e._repo,e._path):e}class pr{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new pr(t)}node(){return this.node_}constructor(e){this.node_=e}}class fr{getImmediateChild(e){const t=Ce(this.path_,e);return new fr(this.syncTree_,t)}node(){return tr(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const mr=function(e,t,n){return e&&"object"==typeof e?((0,o.assert)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?gr(e[".sv"],t,n):"object"==typeof e[".sv"]?_r(e[".sv"],t):void(0,o.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},gr=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,o.assert)(!1,"Unexpected server value: "+e)},_r=function(e,t,n){e.hasOwnProperty("increment")||(0,o.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&(0,o.assert)(!1,"Unexpected increment value: "+r);const s=t.node();if((0,o.assert)(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const i=s.getValue();return"number"!=typeof i?r:i+r},yr=function(e,t,n,r){return br(t,new fr(n,e),r)},vr=function(e,t,n){return br(e,new pr(t),n)};function br(e,t,n){const r=e.getPriority().val(),s=mr(r,t.getImmediateChild(".priority"),n);let i;if(e.isLeafNode()){const r=e,i=mr(r.getValue(),t,n);return i!==r.getValue()||s!==r.getPriority().val()?new Je(i,at(s)):e}{const r=e;return i=r,s!==r.getPriority().val()&&(i=i.updatePriority(new Je(s))),r.forEachChild(Qe,((e,r)=>{const s=br(r,t.getImmediateChild(e),n);s!==r&&(i=i.updateImmediateChild(e,s))})),i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ir(e,t){let n=t instanceof me?t:new me(t),r=e,s=_e(n);for(;null!==s;){const e=(0,o.safeGet)(r.node.children,s)||{children:{},childCount:0};r=new wr(s,r,e),n=ve(n),s=_e(n)}return r}function Cr(e){return e.node.value}function kr(e,t){e.node.value=t,Rr(e)}function Er(e){return e.node.childCount>0}function Sr(e,t){M(e.node.children,((n,r)=>{t(new wr(n,e,r))}))}function Tr(e,t,n,r){n&&!r&&t(e),Sr(e,(e=>{Tr(e,t,!0,r)})),n&&r&&t(e)}function xr(e){return new me(null===e.parent?e.name:xr(e.parent)+"/"+e.name)}function Rr(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===Cr(e)&&!Er(e)}(n),s=(0,o.contains)(e.node.children,t);r&&s?(delete e.node.children[t],e.node.childCount--,Rr(e)):r||s||(e.node.children[t]=n.node,e.node.childCount++,Rr(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Ar=/[\[\].#$\/\u0000-\u001F\u007F]/,Nr=/[\[\].#$\u0000-\u001F\u007F]/,Or=10485760,Pr=function(e){return"string"==typeof e&&0!==e.length&&!Ar.test(e)},Dr=function(e){return"string"==typeof e&&0!==e.length&&!Nr.test(e)},$r=function(e,t,n,r){r&&void 0===t||Lr((0,o.errorPrefix)(e,"value"),t,n)},Lr=function(e,t,n){const r=n instanceof me?new xe(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ae(r));if("function"==typeof t)throw new Error(e+"contains a function "+Ae(r)+" with contents = "+t.toString());if(R(t))throw new Error(e+"contains "+t.toString()+" "+Ae(r));if("string"==typeof t&&t.length>3495253.3333333335&&(0,o.stringLength)(t)>Or)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+Ae(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(M(t,((t,i)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!Pr(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ae(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,l;l=t,(a=r).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(l),a.byteLength_+=(0,o.stringLength)(l),Re(a),Lr(e,i,r),function(e){const t=e.parts_.pop();e.byteLength_-=(0,o.stringLength)(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&s)throw new Error(e+' contains ".value" child '+Ae(r)+" in addition to actual children.")}},Mr=function(e,t,n,r){if(!(r&&void 0===n||Dr(n)))throw new Error((0,o.errorPrefix)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},jr=function(e,t){if(".info"===_e(t))throw new Error(e+" failed = Can't modify data under /.info/")},Fr=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Pr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Dr(e)}(n))throw new Error((0,o.errorPrefix)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ur(e,t){let n=null;for(let r=0;r<t.length;r++){const s=t[r],i=s.getPath();null===n||Se(i,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:i}),n.events.push(s)}n&&e.eventLists_.push(n)}function zr(e,t,n){Ur(e,n),Wr(e,(e=>Te(e,t)||Te(t,e)))}function Wr(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const s=e.eventLists_[r];if(s){t(s.path)?(Vr(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Vr(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();w&&k("event: "+n.toString()),W(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="repo_interrupt";class Hr{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kt(),this.transactionQueueTree_=new wr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function Gr(e,t,n){if(e.stats_=re(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new It(e.repoInfo_,((t,n,r,s)=>{Jr(e,t,n,r,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Qr(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.stringify)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Pe(e.repoInfo_,t,((t,n,r,s)=>{Jr(e,t,n,r,s)}),(t=>{Qr(e,t)}),(t=>{!function(e,t){M(t,((t,n)=>{Xr(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return ne[n]||(ne[n]=t()),ne[n]}(e.repoInfo_,(()=>new xt(e.stats_,e.server_))),e.infoData_=new Ct,e.infoSyncTree_=new Kn({startListening:(t,n,r,s)=>{let i=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(i=Qn(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),i},stopListening:()=>{}}),Xr(e,"connected",!1),e.serverSyncTree_=new Kn({startListening:(t,n,r,s)=>(e.server_.listen(t,r,n,((n,r)=>{const i=s(n,r);zr(e.eventQueue_,t._path,i)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Kr(e){const t=e.infoData_.getNode(new me(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Yr(e){return(t=(t={timestamp:Kr(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Jr(e,t,n,r,s){e.dataUpdateCount++;const i=new me(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(s)if(r){const t=(0,o.map)(n,(e=>at(e)));a=function(e,t,n,r){const s=cr(e,r);if(s){const r=ur(s),i=r.path,o=r.queryId,a=Ee(i,t),l=Bt.fromObject(n);return hr(e,i,new $t(Nt(o),a,l))}return[]}(e.serverSyncTree_,i,t,s)}else{const t=at(n);a=Zn(e.serverSyncTree_,i,t,s)}else if(r){const t=(0,o.map)(n,(e=>at(e)));a=function(e,t,n){const r=Bt.fromObject(n);return rr(e,new $t({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,i,t)}else{const t=at(n);a=Qn(e.serverSyncTree_,i,t)}let l=i;a.length>0&&(l=os(e,i)),zr(e.eventQueue_,l,a)}function Qr(e,t){Xr(e,"connected",t),!1===t&&function(e){ns(e,"onDisconnectEvents");const t=Yr(e),n=kt();St(e.onDisconnect_,ge(),((r,s)=>{const i=yr(r,s,e.serverSyncTree_,t);Et(n,r,i)}));let r=[];St(n,ge(),((t,n)=>{r=r.concat(Qn(e.serverSyncTree_,t,n));const s=hs(e,t);os(e,s)})),e.onDisconnect_=kt(),zr(e.eventQueue_,ge(),r)}(e)}function Xr(e,t,n){const r=new me("/.info/"+t),s=at(n);e.infoData_.updateSnapshot(r,s);const i=Qn(e.infoSyncTree_,r,s);zr(e.eventQueue_,r,i)}function Zr(e){return e.nextWriteId_++}function es(e,t,n,r,s){ns(e,"set",{path:t.toString(),value:n,priority:r});const i=Yr(e),o=at(n,r),a=tr(e.serverSyncTree_,t),l=vr(o,a,i),c=Zr(e),u=Yn(e.serverSyncTree_,t,l,c,!0);Ur(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const i="ok"===n;i||x("set at "+t+" failed: "+n);const o=Jn(e.serverSyncTree_,c,!i);zr(e.eventQueue_,t,o),rs(e,s,n,r)}));const h=hs(e,t);os(e,h),zr(e.eventQueue_,h,[])}function ts(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Br)}function ns(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),k(n,...t)}function rs(e,t,n,r){t&&W((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;r&&(s+=": "+r);const i=new Error(s);i.code=e,t(i)}}))}function ss(e,t,n){return tr(e.serverSyncTree_,t,n)||it.EMPTY_NODE}function is(e,t=e.transactionQueueTree_){if(t||us(e,t),Cr(t)){const n=ls(e,t);(0,o.assert)(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),s=ss(e,t,r);let i=s;const a=s.hash();for(let e=0;e<n.length;e++){const r=n[e];(0,o.assert)(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const s=Ee(t,r.path);i=i.updateChild(s,r.currentOutputSnapshotRaw)}const l=i.val(!0),c=t;e.server_.put(c.toString(),l,(r=>{ns(e,"transaction put response",{path:c.toString(),status:r});let s=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Jn(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();us(e,Ir(e.transactionQueueTree_,t)),is(e,e.transactionQueueTree_),zr(e.eventQueue_,t,s);for(let e=0;e<r.length;e++)W(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{x("transaction at "+c.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}os(e,t)}}),a)}(e,xr(t),n)}else Er(t)&&Sr(t,(t=>{is(e,t)}))}function os(e,t){const n=as(e,t),r=xr(n);return function(e,t,n){if(0===t.length)return;const r=[];let s=[];const i=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let l=0;l<t.length;l++){const c=t[l],u=Ee(n,c.path);let h,d=!1;if((0,o.assert)(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)d=!0,h=c.abortReason,s=s.concat(Jn(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)d=!0,h="maxretry",s=s.concat(Jn(e.serverSyncTree_,c.currentWriteId,!0));else{const n=ss(e,c.path,i);c.currentInputSnapshot=n;const r=t[l].update(n.val());if(void 0!==r){Lr("transaction failed: Data returned ",r,c.path);let t=at(r);"object"==typeof r&&null!=r&&(0,o.contains)(r,".priority")||(t=t.updatePriority(n.getPriority()));const a=c.currentWriteId,l=Yr(e),u=vr(t,n,l);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=u,c.currentWriteId=Zr(e),i.splice(i.indexOf(a),1),s=s.concat(Yn(e.serverSyncTree_,c.path,u,c.currentWriteId,c.applyLocally)),s=s.concat(Jn(e.serverSyncTree_,a,!0))}else d=!0,h="nodata",s=s.concat(Jn(e.serverSyncTree_,c.currentWriteId,!0))}zr(e.eventQueue_,n,s),s=[],d&&(t[l].status=2,a=t[l].unwatcher,setTimeout(a,Math.floor(0)),t[l].onComplete&&("nodata"===h?r.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):r.push((()=>t[l].onComplete(new Error(h),!1,null)))))}var a;us(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)W(r[e]);is(e,e.transactionQueueTree_)}(e,ls(e,n),r),r}function as(e,t){let n,r=e.transactionQueueTree_;for(n=_e(t);null!==n&&void 0===Cr(r);)r=Ir(r,n),n=_e(t=ve(t));return r}function ls(e,t){const n=[];return cs(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function cs(e,t,n){const r=Cr(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);Sr(t,(t=>{cs(e,t,n)}))}function us(e,t){const n=Cr(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,kr(t,n.length>0?n:void 0)}Sr(t,(t=>{us(e,t)}))}function hs(e,t){const n=xr(as(e,t)),r=Ir(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{ds(e,t)})),ds(e,r),Tr(r,(t=>{ds(e,t)})),n}function ds(e,t){const n=Cr(t);if(n){const r=[];let s=[],i=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.assert)(i===t-1,"All SENT items should be at beginning of queue."),i=t,n[t].status=3,n[t].abortReason="set"):((0,o.assert)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Jn(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===i?kr(t,void 0):n.length=i+1,zr(e.eventQueue_,xr(t),s);for(let e=0;e<r.length;e++)W(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=function(e,t){const n=fs(e),r=n.namespace;"firebase.com"===n.domain&&T(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||T("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&x("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new X(n.host,n.secure,r,s,t,"",r!==n.subdomain),path:new me(n.pathString)}},fs=function(e){let t="",n="",r="",s="",i="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):x(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),i=r}"ns"in d&&(i=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ms{getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.stringify)(this.snapshot.exportVal())}constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}}class gs{getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,o.assert)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ys{get key(){return ke(this._path)?null:be(this._path)}get ref(){return new vs(this._repo,this._path)}get _queryIdentifier(){const e=wt(this._queryParams),t=$(e);return"{}"===t?"default":t}get _queryObject(){return wt(this._queryParams)}isEqual(e){if(!((e=(0,o.getModularInstance)(e))instanceof ys))return!1;const t=this._repo===e._repo,n=Se(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}}class vs extends ys{get parent(){const e=Ie(this._path);return null===e?null:new vs(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new vt,!1)}}class bs{get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new me(e),n=Is(this.ref,e);return new bs(this._node.getChild(t),n,Qe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new bs(n,Is(this.ref,t),Qe))))}hasChild(e){const t=new me(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}constructor(e,t,n){this._node=e,this.ref=t,this._index=n}}function ws(e,t){return(e=(0,o.getModularInstance)(e))._checkNotDeleted("ref"),void 0!==t?Is(e._root,t):e._root}function Is(e,t){var n,r,s,i;return null===_e((e=(0,o.getModularInstance)(e))._path)?(n="child",r="path",i=!1,(s=t)&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),Mr(n,r,s,i)):Mr("child","path",t,!1),new vs(e._repo,Ce(e._path,t))}function Cs(e,t){e=(0,o.getModularInstance)(e),jr("push",e._path),$r("push",t,e._path,!0);const n=Kr(e._repo),r=ht(n),s=Is(e,r),i=Is(e,r);let a;return a=null!=t?ks(i,t).then((()=>i)):Promise.resolve(i),s.then=a.then.bind(a),s.catch=a.then.bind(a,void 0),s}function ks(e,t){e=(0,o.getModularInstance)(e),jr("set",e._path),$r("set",t,e._path,!1);const n=new(0,o.Deferred);return es(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Es(e){e=(0,o.getModularInstance)(e);const t=new _s((()=>{})),n=new Ss(t);return function(e,t,n){const r=nr(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then((r=>{const s=at(r).withIndex(t._queryParams.getIndex());let i;if(er(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())i=Qn(e.serverSyncTree_,t._path,s);else{const n=ar(e.serverSyncTree_,t);i=Zn(e.serverSyncTree_,t._path,s,n)}return zr(e.eventQueue_,t._path,i),Xn(e.serverSyncTree_,t,n,null,!0),s}),(n=>(ns(e,"get for query "+(0,o.stringify)(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new bs(t,new vs(e._repo,e._path),e._queryParams.getIndex())))}class Ss{respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new ms("value",this,new bs(e.snapshotNode,new vs(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new gs(this,e,t):null}matches(e){return e instanceof Ss&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}constructor(e){this.callbackContext=e}}!function(e){(0,o.assert)(!Dn,"__referenceConstructor has already been defined"),Dn=e}(vs),function(e){(0,o.assert)(!$n,"__referenceConstructor has already been defined"),$n=e}(vs);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ts={};let xs=!1;function Rs(e,t,n,r,s){let i=r||e.options.databaseURL;void 0===i&&(e.options.projectId||T("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),k("Using default host for project ",e.options.projectId),i=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=ps(i,s),u=c.repoInfo;void 0!==l&&l.env&&(a=l.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,i=`http://${a}?ns=${u.namespace}`,c=ps(i,s),u=c.repoInfo):o=!c.repoInfo.secure;const h=s&&o?new G(G.OWNER):new H(e.name,e.options,t);Fr("Invalid Firebase Database URL",c),ke(c.path)||T("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,r){let s=Ts[t.name];s||(s={},Ts[t.name]=s);let i=s[e.toURLString()];i&&T("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return i=new Hr(e,xs,n,r),s[e.toURLString()]=i,i}(u,e,h,new B(e.name,n));return new As(d,e)}class As{get _repo(){return this._instanceStarted||(Gr(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vs(this._repo,ge())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Ts[t];n&&n[e.key]===e||T(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ts(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&T("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}function Ns(e=(0,r.getApp)(),t){const n=(0,r._getProvider)(e,"database").getImmediate({identifier:t}),s=(0,o.getDefaultEmulatorHostnameAndPort)("database");return s&&function(e,t,n,r={}){(e=(0,o.getModularInstance)(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&T("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&T('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new G(G.OWNER);else if(r.mockUserToken){const t="string"==typeof r.mockUserToken?r.mockUserToken:(0,o.createMockUserToken)(r.mockUserToken,e.app.options.projectId);i=new G(t)}!function(e,t,n,r){e.repoInfo_=new X(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}(s,t,n,i)}(n,...s),n}Pe.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Pe.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Os,Ps;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ps=r.SDK_VERSION,h=Ps,(0,r._registerComponent)(new(0,s.Component)("database",((e,{instanceIdentifier:t})=>Rs(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(c,u,Os),(0,r.registerVersion)(c,u,"esm2017")})),i.register("XwkCV",(function(t,n){e(t.exports,"addAuthBtns",(function(){return o})),e(t.exports,"removeAuthBtns",(function(){return a})),e(t.exports,"addLogOutButton",(function(){return l})),e(t.exports,"addNav",(function(){return c})),e(t.exports,"removeNav",(function(){return u})),e(t.exports,"renderNav",(function(){return h}));var r=i("krGWQ"),s=i("axgPN");function o(){r.default.elems.authBtnsDiv.innerHTML="<button class='nav__item-button button' id='modal-btn-auth'>SignIn / SignUp</button>"}function a(){r.default.elems.authBtnsDiv.innerHTML=""}function l(){r.default.elems.authBtnsDiv.innerHTML="<button class='nav__item-button button' id='log-out'>Log Out </button>",document.querySelector("#log-out").addEventListener("click",s.onLogOut)}function c(e){"index"===e&&(r.default.elems.navigation.innerHTML="<li class='nav__item active'><a class='nav__link' href='index.html'>HOME</a></li><li class='nav__item nav__item-auth'><a class='nav__link' href='./library.html'>MY LIBRARY</a></li>"),"library"===e&&(r.default.elems.navigation.innerHTML="<li class='nav__item'><a class='nav__link' href='index.html'>HOME</a></li><li class='nav__item nav__item-auth active'><a class='nav__link' href='./library.html'>MY LIBRARY</a></li>")}function u(){r.default.elems.navigation.innerHTML=""}function h(e){"1"===localStorage.getItem("auth")?(c(e),a(),l()):(o(),u(),"library"===e&&location.replace("./index.html"))}})),i.register("krGWQ",(function(t,n){e(t.exports,"default",(function(){return r}));var r={btns:{signUpBtn:document.querySelector("#modal-btn-record"),signInBtn:document.querySelector("#modal-btn-auth"),loginFormBtn:document.querySelector("#loginBtn"),registerFormBtn:document.querySelector("#registerBtn"),logOutBtn:document.querySelector("#log-out")},inputs:{email:document.querySelector("#email"),password:document.querySelector("#password"),name:document.querySelector("#name")},elems:{overlay:document.querySelector(".js-overlay-modal"),modalForm:document.querySelector(".js-modal-form"),authBtnsDiv:document.querySelector(".nav__btn-wrapper"),formErrorLabel:document.querySelector(".login-error"),navigation:document.querySelector(".nav__list")}}})),i.register("eWnKO",(function(t,r){e(t.exports,"validateData",(function(){return a}));var s=i("kJWzO");const o=n(s).object({name:n(s).string().min(3).max(30).required(),password:n(s).string().min(6).pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),email:n(s).string().email({minDomainSegments:2,tlds:{allow:["com","net"]}})});function a(e,t,n){return o.validate({name:e,email:t,password:n})}})),i.register("kJWzO",(function(e,t){var n;self,n=()=>{var e,t;return e={7629:(e,t,n)=>{const r=n(375),s=n(8571),i=n(9474),o=n(1687),a=n(8652),l=n(8160),c=n(3292),u=n(6354),h=n(8901),d=n(9708),p=n(6914),f=n(2294),m=n(6133),g=n(1152),_=n(8863),y=n(2036),v={Base:class{_reset(){this._ids=new f.Ids,this._preferences=null,this._refs=new m.Manager,this._cache=null,this._valids=null,this._invalids=null,this._flags={},this._rules=[],this._singleRules=new Map,this.$_terms={},this.$_temp={ruleset:null,whens:{}}}describe(){return r("function"==typeof d.describe,"Manifest functionality disabled"),d.describe(this)}allow(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l.verifyFlat(t,"allow"),this._values(t,"_valids")}alter(e){r(e&&"object"==typeof e&&!Array.isArray(e),"Invalid targets argument"),r(!this._inRuleset(),"Cannot set alterations inside a ruleset");const t=this.clone();t.$_terms.alterations=t.$_terms.alterations||[];for(const n in e){const s=e[n];r("function"==typeof s,"Alteration adjuster for",n,"must be a function"),t.$_terms.alterations.push({target:n,adjuster:s})}return t.$_temp.ruleset=!1,t}artifact(e){return r(void 0!==e,"Artifact cannot be undefined"),r(!this._cache,"Cannot set an artifact with a rule cache"),this.$_setFlag("artifact",e)}cast(e){return r(!1===e||"string"==typeof e,"Invalid to value"),r(!1===e||this._definition.cast[e],"Type",this.type,"does not support casting to",e),this.$_setFlag("cast",!1===e?void 0:e)}default(e,t){return this._default("default",e,t)}description(e){return r(e&&"string"==typeof e,"Description must be a non-empty string"),this.$_setFlag("description",e)}empty(e){const t=this.clone();return void 0!==e&&(e=t.$_compile(e,{override:!1})),t.$_setFlag("empty",e,{clone:!1})}error(e){return r(e,"Missing error"),r(e instanceof Error||"function"==typeof e,"Must provide a valid Error object or a function"),this.$_setFlag("error",e)}example(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r(void 0!==e,"Missing example"),l.assertOptions(t,["override"]),this._inner("examples",e,{single:!0,override:t.override})}external(e,t){return"object"==typeof e&&(r(!t,"Cannot combine options with description"),t=e.description,e=e.method),r("function"==typeof e,"Method must be a function"),r(void 0===t||t&&"string"==typeof t,"Description must be a non-empty string"),this._inner("externals",{method:e,description:t},{single:!0})}failover(e,t){return this._default("failover",e,t)}forbidden(){return this.presence("forbidden")}id(e){return e?(r("string"==typeof e,"id must be a non-empty string"),r(/^[^\.]+$/.test(e),"id cannot contain period character"),this.$_setFlag("id",e)):this.$_setFlag("id",void 0)}invalid(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this._values(t,"_invalids")}label(e){return r(e&&"string"==typeof e,"Label name must be a non-empty string"),this.$_setFlag("label",e)}meta(e){return r(void 0!==e,"Meta cannot be undefined"),this._inner("metas",e,{single:!0})}note(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];r(t.length,"Missing notes");for(const e of t)r(e&&"string"==typeof e,"Notes must be non-empty strings");return this._inner("notes",t)}only(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return r("boolean"==typeof e,"Invalid mode:",e),this.$_setFlag("only",e)}optional(){return this.presence("optional")}prefs(e){r(e,"Missing preferences"),r(void 0===e.context,"Cannot override context"),r(void 0===e.externals,"Cannot override externals"),r(void 0===e.warnings,"Cannot override warnings"),r(void 0===e.debug,"Cannot override debug"),l.checkPreferences(e);const t=this.clone();return t._preferences=l.preferences(t._preferences,e),t}presence(e){return r(["optional","required","forbidden"].includes(e),"Unknown presence mode",e),this.$_setFlag("presence",e)}raw(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.$_setFlag("result",e?"raw":void 0)}result(e){return r(["raw","strip"].includes(e),"Unknown result mode",e),this.$_setFlag("result",e)}required(){return this.presence("required")}strict(e){const t=this.clone(),n=void 0!==e&&!e;return t._preferences=l.preferences(t._preferences,{convert:n}),t}strip(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.$_setFlag("result",e?"strip":void 0)}tag(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];r(t.length,"Missing tags");for(const e of t)r(e&&"string"==typeof e,"Tags must be non-empty strings");return this._inner("tags",t)}unit(e){return r(e&&"string"==typeof e,"Unit name must be a non-empty string"),this.$_setFlag("unit",e)}valid(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];l.verifyFlat(t,"valid");const r=this.allow(...t);return r.$_setFlag("only",!!r._valids,{clone:!1}),r}when(e,t){const n=this.clone();n.$_terms.whens||(n.$_terms.whens=[]);const s=c.when(n,e,t);if(!["any","link"].includes(n.type)){const e=s.is?[s]:s.switch;for(const t of e)r(!t.then||"any"===t.then.type||t.then.type===n.type,"Cannot combine",n.type,"with",t.then&&t.then.type),r(!t.otherwise||"any"===t.otherwise.type||t.otherwise.type===n.type,"Cannot combine",n.type,"with",t.otherwise&&t.otherwise.type)}return n.$_terms.whens.push(s),n.$_mutateRebuild()}cache(e){r(!this._inRuleset(),"Cannot set caching inside a ruleset"),r(!this._cache,"Cannot override schema cache"),r(void 0===this._flags.artifact,"Cannot cache a rule with an artifact");const t=this.clone();return t._cache=e||a.provider.provision(),t.$_temp.ruleset=!1,t}clone(){const e=Object.create(Object.getPrototypeOf(this));return this._assign(e)}concat(e){r(l.isSchema(e),"Invalid schema object"),r("any"===this.type||"any"===e.type||e.type===this.type,"Cannot merge type",this.type,"with another type:",e.type),r(!this._inRuleset(),"Cannot concatenate onto a schema with open ruleset"),r(!e._inRuleset(),"Cannot concatenate a schema with open ruleset");let t=this.clone();if("any"===this.type&&"any"!==e.type){const n=e.clone();for(const e of Object.keys(t))"type"!==e&&(n[e]=t[e]);t=n}t._ids.concat(e._ids),t._refs.register(e,m.toSibling),t._preferences=t._preferences?l.preferences(t._preferences,e._preferences):e._preferences,t._valids=y.merge(t._valids,e._valids,e._invalids),t._invalids=y.merge(t._invalids,e._invalids,e._valids);for(const n of e._singleRules.keys())t._singleRules.has(n)&&(t._rules=t._rules.filter((e=>e.keep||e.name!==n)),t._singleRules.delete(n));for(const n of e._rules)e._definition.rules[n.method].multi||t._singleRules.set(n.name,n),t._rules.push(n);if(t._flags.empty&&e._flags.empty){t._flags.empty=t._flags.empty.concat(e._flags.empty);const n=Object.assign({},e._flags);delete n.empty,o(t._flags,n)}else if(e._flags.empty){t._flags.empty=e._flags.empty;const n=Object.assign({},e._flags);delete n.empty,o(t._flags,n)}else o(t._flags,e._flags);for(const n in e.$_terms){const r=e.$_terms[n];r?t.$_terms[n]?t.$_terms[n]=t.$_terms[n].concat(r):t.$_terms[n]=r.slice():t.$_terms[n]||(t.$_terms[n]=r)}return this.$_root._tracer&&this.$_root._tracer._combine(t,[this,e]),t.$_mutateRebuild()}extend(e){return r(!e.base,"Cannot extend type with another base"),h.type(this,e)}extract(e){return e=Array.isArray(e)?e:e.split("."),this._ids.reach(e)}fork(e,t){r(!this._inRuleset(),"Cannot fork inside a ruleset");let n=this;for(let r of[].concat(e))r=Array.isArray(r)?r:r.split("."),n=n._ids.fork(r,t,n);return n.$_temp.ruleset=!1,n}rule(e){const t=this._definition;l.assertOptions(e,Object.keys(t.modifiers)),r(!1!==this.$_temp.ruleset,"Cannot apply rules to empty ruleset or the last rule added does not support rule properties");const n=null===this.$_temp.ruleset?this._rules.length-1:this.$_temp.ruleset;r(n>=0&&n<this._rules.length,"Cannot apply rules to empty ruleset");const i=this.clone();for(let o=n;o<i._rules.length;++o){const n=i._rules[o],a=s(n);for(const s in e)t.modifiers[s](a,e[s]),r(a.name===n.name,"Cannot change rule name");i._rules[o]=a,i._singleRules.get(a.name)===n&&i._singleRules.set(a.name,a)}return i.$_temp.ruleset=!1,i.$_mutateRebuild()}get ruleset(){r(!this._inRuleset(),"Cannot start a new ruleset without closing the previous one");const e=this.clone();return e.$_temp.ruleset=e._rules.length,e}get $(){return this.ruleset}tailor(e){e=[].concat(e),r(!this._inRuleset(),"Cannot tailor inside a ruleset");let t=this;if(this.$_terms.alterations)for(const{target:n,adjuster:s}of this.$_terms.alterations)e.includes(n)&&(t=s(t),r(l.isSchema(t),"Alteration adjuster for",n,"failed to return a schema object"));return t=t.$_modify({each:t=>t.tailor(e),ref:!1}),t.$_temp.ruleset=!1,t.$_mutateRebuild()}tracer(){return g.location?g.location(this):this}validate(e,t){return _.entry(e,this,t)}validateAsync(e,t){return _.entryAsync(e,this,t)}$_addRule(e){"string"==typeof e&&(e={name:e}),r(e&&"object"==typeof e,"Invalid options"),r(e.name&&"string"==typeof e.name,"Invalid rule name");for(const t in e)r("_"!==t[0],"Cannot set private rule properties");const t=Object.assign({},e);t._resolve=[],t.method=t.method||t.name;const n=this._definition.rules[t.method],s=t.args;r(n,"Unknown rule",t.method);const i=this.clone();if(s){r(1===Object.keys(s).length||Object.keys(s).length===this._definition.rules[t.name].args.length,"Invalid rule definition for",this.type,t.name);for(const e in s){let o=s[e];if(n.argsByName){const a=n.argsByName.get(e);if(a.ref&&l.isResolvable(o))t._resolve.push(e),i.$_mutateRegister(o);else if(a.normalize&&(o=a.normalize(o),s[e]=o),a.assert){const t=l.validateArg(o,e,a);r(!t,t,"or reference")}}void 0!==o?s[e]=o:delete s[e]}}return n.multi||(i._ruleRemove(t.name,{clone:!1}),i._singleRules.set(t.name,t)),!1===i.$_temp.ruleset&&(i.$_temp.ruleset=null),n.priority?i._rules.unshift(t):i._rules.push(t),i}$_compile(e,t){return c.schema(this.$_root,e,t)}$_createError(e,t,n,r,s){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};const o=!1!==i.flags?this._flags:{},a=i.messages?p.merge(this._definition.messages,i.messages):this._definition.messages;return new u.Report(e,t,n,o,a,r,s)}$_getFlag(e){return this._flags[e]}$_getRule(e){return this._singleRules.get(e)}$_mapLabels(e){return e=Array.isArray(e)?e:e.split("."),this._ids.labels(e)}$_match(e,t,n,r){(n=Object.assign({},n)).abortEarly=!0,n._externals=!1,t.snapshot();const s=!_.validate(e,this,t,n,r).errors;return t.restore(),s}$_modify(e){return l.assertOptions(e,["each","once","ref","schema"]),f.schema(this,e)||this}$_mutateRebuild(){return r(!this._inRuleset(),"Cannot add this rule inside a ruleset"),this._refs.reset(),this._ids.reset(),this.$_modify({each:(e,t)=>{let{source:n,name:r,path:s,key:i}=t;const o=this._definition[n][r]&&this._definition[n][r].register;!1!==o&&this.$_mutateRegister(e,{family:o,key:i})}}),this._definition.rebuild&&this._definition.rebuild(this),this.$_temp.ruleset=!1,this}$_mutateRegister(e){let{family:t,key:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._refs.register(e,t),this._ids.register(e,{key:n})}$_property(e){return this._definition.properties[e]}$_reach(e){return this._ids.reach(e)}$_rootReferences(){return this._refs.roots()}$_setFlag(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};r("_"===e[0]||!this._inRuleset(),"Cannot set flag inside a ruleset");const s=this._definition.flags[e]||{};if(i(t,s.default)&&(t=void 0),i(t,this._flags[e]))return this;const o=!1!==n.clone?this.clone():this;return void 0!==t?(o._flags[e]=t,o.$_mutateRegister(t)):delete o._flags[e],"_"!==e[0]&&(o.$_temp.ruleset=!1),o}$_parent(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return this[e][l.symbols.parent].call(this,...n)}$_validate(e,t,n){return _.validate(e,this,t,n)}_assign(e){e.type=this.type,e.$_root=this.$_root,e.$_temp=Object.assign({},this.$_temp),e.$_temp.whens={},e._ids=this._ids.clone(),e._preferences=this._preferences,e._valids=this._valids&&this._valids.clone(),e._invalids=this._invalids&&this._invalids.clone(),e._rules=this._rules.slice(),e._singleRules=s(this._singleRules,{shallow:!0}),e._refs=this._refs.clone(),e._flags=Object.assign({},this._flags),e._cache=null,e.$_terms={};for(const t in this.$_terms)e.$_terms[t]=this.$_terms[t]?this.$_terms[t].slice():null;e.$_super={};for(const t in this.$_super)e.$_super[t]=this._super[t].bind(e);return e}_bare(){const e=this.clone();e._reset();const t=e._definition.terms;for(const n in t){const r=t[n];e.$_terms[n]=r.init}return e.$_mutateRebuild()}_default(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return l.assertOptions(n,"literal"),r(void 0!==t,"Missing",e,"value"),r("function"==typeof t||!n.literal,"Only function value supports literal option"),"function"==typeof t&&n.literal&&(t={[l.symbols.literal]:!0,literal:t}),this.$_setFlag(e,t)}_generate(e,t,n){if(!this.$_terms.whens)return{schema:this};const r=[],s=[];for(let i=0;i<this.$_terms.whens.length;++i){const o=this.$_terms.whens[i];if(o.concat){r.push(o.concat),s.push(`${i}.concat`);continue}const a=o.ref?o.ref.resolve(e,t,n):e,l=o.is?[o]:o.switch,c=s.length;for(let c=0;c<l.length;++c){const{is:u,then:h,otherwise:d}=l[c],p=`${i}${o.switch?"."+c:""}`;if(u.$_match(a,t.nest(u,`${p}.is`),n)){if(h){const i=t.localize([...t.path,`${p}.then`],t.ancestors,t.schemas),{schema:o,id:a}=h._generate(e,i,n);r.push(o),s.push(`${p}.then${a?`(${a})`:""}`);break}}else if(d){const i=t.localize([...t.path,`${p}.otherwise`],t.ancestors,t.schemas),{schema:o,id:a}=d._generate(e,i,n);r.push(o),s.push(`${p}.otherwise${a?`(${a})`:""}`);break}}if(o.break&&s.length>c)break}const i=s.join(", ");if(t.mainstay.tracer.debug(t,"rule","when",i),!i)return{schema:this};if(!t.mainstay.tracer.active&&this.$_temp.whens[i])return{schema:this.$_temp.whens[i],id:i};let o=this;this._definition.generate&&(o=this._definition.generate(this,e,t,n));for(const e of r)o=o.concat(e);return this.$_root._tracer&&this.$_root._tracer._combine(o,[this,...r]),this.$_temp.whens[i]=o,{schema:o,id:i}}_inner(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};r(!this._inRuleset(),`Cannot set ${e} inside a ruleset`);const s=this.clone();return s.$_terms[e]&&!n.override||(s.$_terms[e]=[]),n.single?s.$_terms[e].push(t):s.$_terms[e].push(...t),s.$_temp.ruleset=!1,s}_inRuleset(){return null!==this.$_temp.ruleset&&!1!==this.$_temp.ruleset}_ruleRemove(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this._singleRules.has(e))return this;const n=!1!==t.clone?this.clone():this;n._singleRules.delete(e);const r=[];for(let t=0;t<n._rules.length;++t){const s=n._rules[t];s.name!==e||s.keep?r.push(s):n._inRuleset()&&t<n.$_temp.ruleset&&--n.$_temp.ruleset}return n._rules=r,n}_values(e,t){l.verifyFlat(e,t.slice(1,-1));const n=this.clone(),s=e[0]===l.symbols.override;if(s&&(e=e.slice(1)),!n[t]&&e.length?n[t]=new y:s&&(n[t]=e.length?new y:null,n.$_mutateRebuild()),!n[t])return n;s&&n[t].override();for(const s of e){r(void 0!==s,"Cannot call allow/valid/invalid with undefined"),r(s!==l.symbols.override,"Override must be the first value");const e="_invalids"===t?"_valids":"_invalids";n[e]&&(n[e].remove(s),n[e].length||(r("_valids"===t||!n._flags.only,"Setting invalid value",s,"leaves schema rejecting all values due to previous valid rule"),n[e]=null)),n[t].add(s,n._refs)}return n}constructor(e){this.type=e,this.$_root=null,this._definition={},this._reset()}}};v.Base.prototype[l.symbols.any]={version:l.version,compile:c.compile,root:"$_root"},v.Base.prototype.isImmutable=!0,v.Base.prototype.deny=v.Base.prototype.invalid,v.Base.prototype.disallow=v.Base.prototype.invalid,v.Base.prototype.equal=v.Base.prototype.valid,v.Base.prototype.exist=v.Base.prototype.required,v.Base.prototype.not=v.Base.prototype.invalid,v.Base.prototype.options=v.Base.prototype.prefs,v.Base.prototype.preferences=v.Base.prototype.prefs,e.exports=new v.Base},8652:(e,t,n)=>{const r=n(375),s=n(8571),i=n(8160),o={max:1e3,supported:new Set(["undefined","boolean","number","string"])};t.provider={provision:e=>new o.Cache(e)},o.Cache=class{get length(){return this._map.size}set(e,t){if(null!==e&&!o.supported.has(typeof e))return;let n=this._map.get(e);if(n)return n.value=t,void this._list.first(n);n=this._list.unshift({key:e,value:t}),this._map.set(e,n),this._compact()}get(e){const t=this._map.get(e);if(t)return this._list.first(t),s(t.value)}_compact(){if(this._map.size>this._max){const e=this._list.pop();this._map.delete(e.key)}}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i.assertOptions(e,["max"]),r(void 0===e.max||e.max&&e.max>0&&isFinite(e.max),"Invalid max cache size"),this._max=e.max||o.max,this._map=new Map,this._list=new o.List}},o.List=class{unshift(e){return e.next=null,e.prev=this.head,this.head&&(this.head.next=e),this.head=e,this.tail||(this.tail=e),e}first(e){e!==this.head&&(this._remove(e),this.unshift(e))}pop(){return this._remove(this.tail)}_remove(e){const{next:t,prev:n}=e;return t.prev=n,n&&(n.next=t),e===this.tail&&(this.tail=t),e.prev=null,e.next=null,e}constructor(){this.tail=null,this.head=null}}},8160:(e,t,n)=>{const r=n(375),s=n(7916),i=n(5934);let o,a;const l={isoDate:/^(?:[-+]\d{2})?(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/};t.version=i.version,t.defaults={abortEarly:!0,allowUnknown:!1,artifacts:!1,cache:!0,context:null,convert:!0,dateFormat:"iso",errors:{escapeHtml:!1,label:"path",language:null,render:!0,stack:!1,wrap:{label:'"',array:"[]"}},externals:!0,messages:{},nonEnumerables:!1,noDefaults:!1,presence:"optional",skipFunctions:!1,stripUnknown:!1,warnings:!1},t.symbols={any:Symbol.for("@hapi/joi/schema"),arraySingle:Symbol("arraySingle"),deepDefault:Symbol("deepDefault"),errors:Symbol("errors"),literal:Symbol("literal"),override:Symbol("override"),parent:Symbol("parent"),prefs:Symbol("prefs"),ref:Symbol("ref"),template:Symbol("template"),values:Symbol("values")},t.assertOptions=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Options";r(e&&"object"==typeof e&&!Array.isArray(e),"Options must be of type object");const s=Object.keys(e).filter((e=>!t.includes(e)));r(0===s.length,`${n} contain unknown keys: ${s}`)},t.checkPreferences=function(e){a=a||n(3378);const t=a.preferences.validate(e);if(t.error)throw new s([t.error.details[0].message])},t.compare=function(e,t,n){switch(n){case"=":return e===t;case">":return e>t;case"<":return e<t;case">=":return e>=t;case"<=":return e<=t}},t.default=function(e,t){return void 0===e?t:e},t.isIsoDate=function(e){return l.isoDate.test(e)},t.isNumber=function(e){return"number"==typeof e&&!isNaN(e)},t.isResolvable=function(e){return!!e&&(e[t.symbols.ref]||e[t.symbols.template])},t.isSchema=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=e&&e[t.symbols.any];return!!s&&(r(n.legacy||s.version===t.version,"Cannot mix different versions of joi schemas"),!0)},t.isValues=function(e){return e[t.symbols.values]},t.limit=function(e){return Number.isSafeInteger(e)&&e>=0},t.preferences=function(e,r){o=o||n(6914),e=e||{},r=r||{};const s=Object.assign({},e,r);return r.errors&&e.errors&&(s.errors=Object.assign({},e.errors,r.errors),s.errors.wrap=Object.assign({},e.errors.wrap,r.errors.wrap)),r.messages&&(s.messages=o.compile(r.messages,e.messages)),delete s[t.symbols.prefs],s},t.tryWithPath=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};try{return e()}catch(e){throw void 0!==e.path?e.path=t+"."+e.path:e.path=t,n.append&&(e.message=`${e.message} (${e.path})`),e}},t.validateArg=function(e,n,r){let{assert:s,message:i}=r;if(t.isSchema(s)){const t=s.validate(e);if(!t.error)return;return t.error.message}if(!s(e))return n?`${n} ${i}`:i},t.verifyFlat=function(e,t){for(const n of e)r(!Array.isArray(n),"Method no longer accepts array arguments:",t)}},3292:(e,t,n)=>{const r=n(375),s=n(8160),i=n(6133),o={};t.schema=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};s.assertOptions(n,["appendPath","override"]);try{return o.schema(e,t,n)}catch(e){throw n.appendPath&&void 0!==e.path&&(e.message=`${e.message} (${e.path})`),e}},o.schema=function(e,t,n){r(void 0!==t,"Invalid undefined schema"),Array.isArray(t)&&(r(t.length,"Invalid empty array schema"),1===t.length&&(t=t[0]));const i=function(t){for(var r=arguments.length,s=new Array(r>1?r-1:0),i=1;i<r;i++)s[i-1]=arguments[i];return!1!==n.override?t.valid(e.override,...s):t.valid(...s)};if(o.simple(t))return i(e,t);if("function"==typeof t)return e.custom(t);if(r("object"==typeof t,"Invalid schema content:",typeof t),s.isResolvable(t))return i(e,t);if(s.isSchema(t))return t;if(Array.isArray(t)){for(const n of t)if(!o.simple(n))return e.alternatives().try(...t);return i(e,...t)}return t instanceof RegExp?e.string().regex(t):t instanceof Date?i(e.date(),t):(r(Object.getPrototypeOf(t)===Object.getPrototypeOf({}),"Schema can only contain plain objects"),e.object().keys(t))},t.ref=function(e,t){return i.isRef(e)?e:i.create(e,t)},t.compile=function(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};s.assertOptions(i,["legacy"]);const a=n&&n[s.symbols.any];if(a)return r(i.legacy||a.version===s.version,"Cannot mix different versions of joi schemas:",a.version,s.version),n;if("object"!=typeof n||!i.legacy)return t.schema(e,n,{appendPath:!0});const l=o.walk(n);return l?l.compile(l.root,n):t.schema(e,n,{appendPath:!0})},o.walk=function(e){if("object"!=typeof e)return null;if(Array.isArray(e)){for(const t of e){const e=o.walk(t);if(e)return e}return null}const t=e[s.symbols.any];if(t)return{root:e[t.root],compile:t.compile};r(Object.getPrototypeOf(e)===Object.getPrototypeOf({}),"Schema can only contain plain objects");for(const t in e){const n=o.walk(e[t]);if(n)return n}return null},o.simple=function(e){return null===e||["boolean","string","number"].includes(typeof e)},t.when=function(e,n,a){if(void 0===a&&(r(n&&"object"==typeof n,"Missing options"),a=n,n=i.create(".")),Array.isArray(a)&&(a={switch:a}),s.assertOptions(a,["is","not","then","otherwise","switch","break"]),s.isSchema(n))return r(void 0===a.is,'"is" can not be used with a schema condition'),r(void 0===a.not,'"not" can not be used with a schema condition'),r(void 0===a.switch,'"switch" can not be used with a schema condition'),o.condition(e,{is:n,then:a.then,otherwise:a.otherwise,break:a.break});if(r(i.isRef(n)||"string"==typeof n,"Invalid condition:",n),r(void 0===a.not||void 0===a.is,'Cannot combine "is" with "not"'),void 0===a.switch){let l=a;void 0!==a.not&&(l={is:a.not,then:a.otherwise,otherwise:a.then,break:a.break});let c=void 0!==l.is?e.$_compile(l.is):e.$_root.invalid(null,!1,0,"").required();return r(void 0!==l.then||void 0!==l.otherwise,'options must have at least one of "then", "otherwise", or "switch"'),r(void 0===l.break||void 0===l.then||void 0===l.otherwise,"Cannot specify then, otherwise, and break all together"),void 0===a.is||i.isRef(a.is)||s.isSchema(a.is)||(c=c.required()),o.condition(e,{ref:t.ref(n),is:c,then:l.then,otherwise:l.otherwise,break:l.break})}r(Array.isArray(a.switch),'"switch" must be an array'),r(void 0===a.is,'Cannot combine "switch" with "is"'),r(void 0===a.not,'Cannot combine "switch" with "not"'),r(void 0===a.then,'Cannot combine "switch" with "then"');const l={ref:t.ref(n),switch:[],break:a.break};for(let t=0;t<a.switch.length;++t){const n=a.switch[t],o=t===a.switch.length-1;s.assertOptions(n,o?["is","then","otherwise"]:["is","then"]),r(void 0!==n.is,'Switch statement missing "is"'),r(void 0!==n.then,'Switch statement missing "then"');const c={is:e.$_compile(n.is),then:e.$_compile(n.then)};if(i.isRef(n.is)||s.isSchema(n.is)||(c.is=c.is.required()),o){r(void 0===a.otherwise||void 0===n.otherwise,'Cannot specify "otherwise" inside and outside a "switch"');const t=void 0!==a.otherwise?a.otherwise:n.otherwise;void 0!==t&&(r(void 0===l.break,"Cannot specify both otherwise and break"),c.otherwise=e.$_compile(t))}l.switch.push(c)}return l},o.condition=function(e,t){for(const n of["then","otherwise"])void 0===t[n]?delete t[n]:t[n]=e.$_compile(t[n]);return t}},6354:(e,t,n)=>{const r=n(5688),s=n(8160),i=n(3328);t.Report=class{_setTemplate(e){if(this.template=e,!this.flags.label&&0===this.path.length){const e=this._template(this.template,"root");e&&(this.local.label=e)}}toString(){if(this.message)return this.message;const e=this.code;if(!this.prefs.errors.render)return this.code;const t=this._template(this.template)||this._template(this.prefs.messages)||this._template(this.messages);return void 0===t?`Error code "${e}" is not defined, your custom type is missing the correct messages definition`:(this.message=t.render(this.value,this.state,this.prefs,this.local,{errors:this.prefs.errors,messages:[this.prefs.messages,this.messages]}),this.prefs.errors.label||(this.message=this.message.replace(/^"" /,"").trim()),this.message)}_template(e,n){return t.template(this.value,e,n||this.code,this.state,this.prefs)}constructor(e,n,r,s,i,o,a){if(this.code=e,this.flags=s,this.messages=i,this.path=o.path,this.prefs=a,this.state=o,this.value=n,this.message=null,this.template=null,this.local=r||{},this.local.label=t.label(this.flags,this.state,this.prefs,this.messages),void 0===this.value||this.local.hasOwnProperty("value")||(this.local.value=this.value),this.path.length){const e=this.path[this.path.length-1];"object"!=typeof e&&(this.local.key=e)}}},t.path=function(e){let t="";for(const n of e)"object"!=typeof n&&("string"==typeof n?(t&&(t+="."),t+=n):t+=`[${n}]`);return t},t.template=function(e,t,n,r,o){if(!t)return;if(i.isTemplate(t))return"root"!==n?t:null;let a=o.errors.language;if(s.isResolvable(a)&&(a=a.resolve(e,r,o)),a&&t[a]){if(void 0!==t[a][n])return t[a][n];if(void 0!==t[a]["*"])return t[a]["*"]}return t[n]?t[n]:t["*"]},t.label=function(e,n,r,s){if(e.label)return e.label;if(!r.errors.label)return"";let i=n.path;return"key"===r.errors.label&&n.path.length>1&&(i=n.path.slice(-1)),t.path(i)||t.template(null,r.messages,"root",n,r)||s&&t.template(null,s,"root",n,r)||"value"},t.process=function(e,n,r){if(!e)return null;const{override:s,message:i,details:o}=t.details(e);if(s)return s;if(r.errors.stack)return new t.ValidationError(i,o,n);const a=Error.stackTraceLimit;Error.stackTraceLimit=0;const l=new t.ValidationError(i,o,n);return Error.stackTraceLimit=a,l},t.details=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];const r=[];for(const s of e){if(s instanceof Error){if(!1!==t.override)return{override:s};const e=s.toString();n.push(e),r.push({message:e,type:"override",context:{error:s}});continue}const e=s.toString();n.push(e),r.push({message:e,path:s.path.filter((e=>"object"!=typeof e)),type:s.code,context:s.local})}return n.length>1&&(n=[...new Set(n)]),{message:n.join(". "),details:r}},t.ValidationError=class extends Error{static isError(e){return e instanceof t.ValidationError}constructor(e,t,n){super(e),this._original=n,this.details=t}},t.ValidationError.prototype.isJoi=!0,t.ValidationError.prototype.name="ValidationError",t.ValidationError.prototype.annotate=r.error},8901:(e,t,n)=>{const r=n(375),s=n(8571),i=n(8160),o=n(6914),a={};t.type=function(e,t){const n=Object.getPrototypeOf(e),l=s(n),c=e._assign(Object.create(l)),u=Object.assign({},t);delete u.base,l._definition=u;const h=n._definition||{};u.messages=o.merge(h.messages,u.messages),u.properties=Object.assign({},h.properties,u.properties),c.type=u.type,u.flags=Object.assign({},h.flags,u.flags);const d=Object.assign({},h.terms);if(u.terms)for(const e in u.terms){const t=u.terms[e];r(void 0===c.$_terms[e],"Invalid term override for",u.type,e),c.$_terms[e]=t.init,d[e]=t}u.terms=d,u.args||(u.args=h.args),u.prepare=a.prepare(u.prepare,h.prepare),u.coerce&&("function"==typeof u.coerce&&(u.coerce={method:u.coerce}),u.coerce.from&&!Array.isArray(u.coerce.from)&&(u.coerce={method:u.coerce.method,from:[].concat(u.coerce.from)})),u.coerce=a.coerce(u.coerce,h.coerce),u.validate=a.validate(u.validate,h.validate);const p=Object.assign({},h.rules);if(u.rules)for(const e in u.rules){const t=u.rules[e];r("object"==typeof t,"Invalid rule definition for",u.type,e);let n=t.method;if(void 0===n&&(n=function(){return this.$_addRule(e)}),n&&(r(!l[e],"Rule conflict in",u.type,e),l[e]=n),r(!p[e],"Rule conflict in",u.type,e),p[e]=t,t.alias){const e=[].concat(t.alias);for(const n of e)l[n]=t.method}t.args&&(t.argsByName=new Map,t.args=t.args.map((e=>("string"==typeof e&&(e={name:e}),r(!t.argsByName.has(e.name),"Duplicated argument name",e.name),i.isSchema(e.assert)&&(e.assert=e.assert.strict().label(e.name)),t.argsByName.set(e.name,e),e))))}u.rules=p;const f=Object.assign({},h.modifiers);if(u.modifiers)for(const e in u.modifiers){r(!l[e],"Rule conflict in",u.type,e);const t=u.modifiers[e];r("function"==typeof t,"Invalid modifier definition for",u.type,e);const n=function(t){return this.rule({[e]:t})};l[e]=n,f[e]=t}if(u.modifiers=f,u.overrides){l._super=n,c.$_super={};for(const e in u.overrides)r(n[e],"Cannot override missing",e),u.overrides[e][i.symbols.parent]=n[e],c.$_super[e]=n[e].bind(c);Object.assign(l,u.overrides)}u.cast=Object.assign({},h.cast,u.cast);const m=Object.assign({},h.manifest,u.manifest);return m.build=a.build(u.manifest&&u.manifest.build,h.manifest&&h.manifest.build),u.manifest=m,u.rebuild=a.rebuild(u.rebuild,h.rebuild),c},a.build=function(e,t){return e&&t?function(n,r){return t(e(n,r),r)}:e||t},a.coerce=function(e,t){return e&&t?{from:e.from&&t.from?[...new Set([...e.from,...t.from])]:null,method(n,r){let s;if((!t.from||t.from.includes(typeof n))&&(s=t.method(n,r),s)){if(s.errors||void 0===s.value)return s;n=s.value}if(!e.from||e.from.includes(typeof n)){const t=e.method(n,r);if(t)return t}return s}}:e||t},a.prepare=function(e,t){return e&&t?function(n,r){const s=e(n,r);if(s){if(s.errors||void 0===s.value)return s;n=s.value}return t(n,r)||s}:e||t},a.rebuild=function(e,t){return e&&t?function(n){t(n),e(n)}:e||t},a.validate=function(e,t){return e&&t?function(n,r){const s=t(n,r);if(s){if(s.errors&&(!Array.isArray(s.errors)||s.errors.length))return s;n=s.value}return e(n,r)||s}:e||t}},5107:(e,t,n)=>{const r=n(375),s=n(8571),i=n(8652),o=n(8160),a=n(3292),l=n(6354),c=n(8901),u=n(9708),h=n(6133),d=n(3328),p=n(1152);let f;const m={types:{alternatives:n(4946),any:n(8068),array:n(546),boolean:n(4937),date:n(7500),function:n(390),link:n(8785),number:n(3832),object:n(8966),string:n(7417),symbol:n(8826)},aliases:{alt:"alternatives",bool:"boolean",func:"function"},root:function(){const e={_types:new Set(Object.keys(m.types))};for(const t of e._types)e[t]=function(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return r(!n.length||["alternatives","link","object"].includes(t),"The",t,"type does not allow arguments"),m.generate(this,m.types[t],n)};for(const t of["allow","custom","disallow","equal","exist","forbidden","invalid","not","only","optional","options","prefs","preferences","required","strip","valid","when"])e[t]=function(){return this.any()[t](...arguments)};Object.assign(e,m.methods);for(const t in m.aliases){const n=m.aliases[t];e[t]=e[n]}return e.x=e.expression,p.setup&&p.setup(e),e}};m.methods={ValidationError:l.ValidationError,version:o.version,cache:i.provider,assert(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];m.assert(e,t,!0,r)},attempt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return m.assert(e,t,!1,r)},build(e){return r("function"==typeof u.build,"Manifest functionality disabled"),u.build(this,e)},checkPreferences(e){o.checkPreferences(e)},compile(e,t){return a.compile(this,e,t)},defaults(e){r("function"==typeof e,"modifier must be a function");const t=Object.assign({},this);for(const n of t._types){const s=e(t[n]());r(o.isSchema(s),"modifier must return a valid schema object"),t[n]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return m.generate(this,s,t)}}return t},expression(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new d(...t)},extend(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];o.verifyFlat(t,"extend"),f=f||n(3378),r(t.length,"You need to provide at least one extension"),this.assert(t,f.extensions);const i=Object.assign({},this);i._types=new Set(i._types);for(let e of t){"function"==typeof e&&(e=e(i)),this.assert(e,f.extension);const t=m.expandExtension(e,i);for(const e of t){r(void 0===i[e.type]||i._types.has(e.type),"Cannot override name",e.type);const t=e.base||this.any(),n=c.type(t,e);i._types.add(e.type),i[e.type]=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return m.generate(this,n,t)}}}return i},isError:l.ValidationError.isError,isExpression:d.isTemplate,isRef:h.isRef,isSchema:o.isSchema,in(){return h.in(...arguments)},override:o.symbols.override,ref(){return h.create(...arguments)},types(){const e={};for(const t of this._types)e[t]=this[t]();for(const t in m.aliases)e[t]=this[t]();return e}},m.assert=function(e,t,n,r){const i=r[0]instanceof Error||"string"==typeof r[0]?r[0]:null,a=null!==i?r[1]:r[0],c=t.validate(e,o.preferences({errors:{stack:!0}},a||{}));let u=c.error;if(!u)return c.value;if(i instanceof Error)throw i;const h=n&&"function"==typeof u.annotate?u.annotate():u.message;throw u instanceof l.ValidationError==0&&(u=s(u)),u.message=i?`${i} ${h}`:h,u},m.generate=function(e,t,n){return r(e,"Must be invoked on a Joi instance."),t.$_root=e,t._definition.args&&n.length?t._definition.args(t,...n):t},m.expandExtension=function(e,t){if("string"==typeof e.type)return[e];const n=[];for(const r of t._types)if(e.type.test(r)){const s=Object.assign({},e);s.type=r,s.base=t[r](),n.push(s)}return n},e.exports=m.root()},6914:(e,t,n)=>{const r=n(375),s=n(8571),i=n(3328);t.compile=function(e,t){if("string"==typeof e)return r(!t,"Cannot set single message string"),new i(e);if(i.isTemplate(e))return r(!t,"Cannot set single message template"),e;r("object"==typeof e&&!Array.isArray(e),"Invalid message options"),t=t?s(t):{};for(let n in e){const s=e[n];if("root"===n||i.isTemplate(s)){t[n]=s;continue}if("string"==typeof s){t[n]=new i(s);continue}r("object"==typeof s&&!Array.isArray(s),"Invalid message for",n);const o=n;for(n in t[o]=t[o]||{},s){const e=s[n];"root"===n||i.isTemplate(e)?t[o][n]=e:(r("string"==typeof e,"Invalid message for",n,"in",o),t[o][n]=new i(e))}}return t},t.decompile=function(e){const t={};for(let n in e){const r=e[n];if("root"===n){t.root=r;continue}if(i.isTemplate(r)){t[n]=r.describe({compact:!0});continue}const s=n;for(n in t[s]={},r){const e=r[n];"root"!==n?t[s][n]=e.describe({compact:!0}):t[s].root=e}}return t},t.merge=function(e,n){if(!e)return t.compile(n);if(!n)return e;if("string"==typeof n)return new i(n);if(i.isTemplate(n))return n;const o=s(e);for(let e in n){const t=n[e];if("root"===e||i.isTemplate(t)){o[e]=t;continue}if("string"==typeof t){o[e]=new i(t);continue}r("object"==typeof t&&!Array.isArray(t),"Invalid message for",e);const s=e;for(e in o[s]=o[s]||{},t){const n=t[e];"root"===e||i.isTemplate(n)?o[s][e]=n:(r("string"==typeof n,"Invalid message for",e,"in",s),o[s][e]=new i(n))}}return o}},2294:(e,t,n)=>{const r=n(375),s=n(8160),i=n(6133),o={};t.Ids=o.Ids=class{clone(){const e=new o.Ids;return e._byId=new Map(this._byId),e._byKey=new Map(this._byKey),e._schemaChain=this._schemaChain,e}concat(e){e._schemaChain&&(this._schemaChain=!0);for(const[t,n]of e._byId.entries())r(!this._byKey.has(t),"Schema id conflicts with existing key:",t),this._byId.set(t,n);for(const[t,n]of e._byKey.entries())r(!this._byId.has(t),"Schema key conflicts with existing id:",t),this._byKey.set(t,n)}fork(e,t,n){const i=this._collect(e);i.push({schema:n});const a=i.shift();let l={id:a.id,schema:t(a.schema)};r(s.isSchema(l.schema),"adjuster function failed to return a joi schema type");for(const e of i)l={id:e.id,schema:o.fork(e.schema,l.id,l.schema)};return l.schema}labels(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=e[0],r=this._get(n);if(!r)return[...t,...e].join(".");const s=e.slice(1);return t=[...t,r.schema._flags.label||n],s.length?r.schema._ids.labels(s,t):t.join(".")}reach(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=e[0],s=this._get(n);r(s,"Schema does not contain path",[...t,...e].join("."));const i=e.slice(1);return i.length?s.schema._ids.reach(i,[...t,n]):s.schema}register(e){let{key:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e||!s.isSchema(e))return;(e.$_property("schemaChain")||e._ids._schemaChain)&&(this._schemaChain=!0);const n=e._flags.id;if(n){const t=this._byId.get(n);r(!t||t.schema===e,"Cannot add different schemas with the same id:",n),r(!this._byKey.has(n),"Schema id conflicts with existing key:",n),this._byId.set(n,{schema:e,id:n})}t&&(r(!this._byKey.has(t),"Schema already contains key:",t),r(!this._byId.has(t),"Schema key conflicts with existing id:",t),this._byKey.set(t,{schema:e,id:t}))}reset(){this._byId=new Map,this._byKey=new Map,this._schemaChain=!1}_collect(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];const s=e[0],i=this._get(s);r(i,"Schema does not contain path",[...t,...e].join(".")),n=[i,...n];const o=e.slice(1);return o.length?i.schema._ids._collect(o,[...t,s],n):n}_get(e){return this._byId.get(e)||this._byKey.get(e)}constructor(){this._byId=new Map,this._byKey=new Map,this._schemaChain=!1}},o.fork=function(e,n,r){const s=t.schema(e,{each:(e,t)=>{let{key:s}=t;if(n===(e._flags.id||s))return r},ref:!1});return s?s.$_mutateRebuild():e},t.schema=function(e,t){let n;for(const r in e._flags){if("_"===r[0])continue;const s=o.scan(e._flags[r],{source:"flags",name:r},t);void 0!==s&&(n=n||e.clone(),n._flags[r]=s)}for(let r=0;r<e._rules.length;++r){const s=e._rules[r],i=o.scan(s.args,{source:"rules",name:s.name},t);if(void 0!==i){n=n||e.clone();const t=Object.assign({},s);t.args=i,n._rules[r]=t,n._singleRules.get(s.name)===s&&n._singleRules.set(s.name,t)}}for(const r in e.$_terms){if("_"===r[0])continue;const s=o.scan(e.$_terms[r],{source:"terms",name:r},t);void 0!==s&&(n=n||e.clone(),n.$_terms[r]=s)}return n},o.scan=function(e,t,n,r,a){const l=r||[];if(null===e||"object"!=typeof e)return;let c;if(Array.isArray(e)){for(let r=0;r<e.length;++r){const s="terms"===t.source&&"keys"===t.name&&e[r].key,i=o.scan(e[r],t,n,[r,...l],s);void 0!==i&&(c=c||e.slice(),c[r]=i)}return c}if(!1!==n.schema&&s.isSchema(e)||!1!==n.ref&&i.isRef(e)){const r=n.each(e,{...t,path:l,key:a});if(r===e)return;return r}for(const r in e){if("_"===r[0])continue;const s=o.scan(e[r],t,n,[r,...l],a);void 0!==s&&(c=c||Object.assign({},e),c[r]=s)}return c}},6133:(e,t,n)=>{const r=n(375),s=n(8571),i=n(9621),o=n(8160);let a;const l={symbol:Symbol("ref"),defaults:{adjust:null,in:!1,iterables:null,map:null,separator:".",type:"value"}};t.create=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r("string"==typeof e,"Invalid reference key:",e),o.assertOptions(t,["adjust","ancestor","in","iterables","map","prefix","render","separator"]),r(!t.prefix||"object"==typeof t.prefix,"options.prefix must be of type object");const n=Object.assign({},l.defaults,t);delete n.prefix;const s=n.separator,i=l.context(e,s,t.prefix);if(n.type=i.type,e=i.key,"value"===n.type)if(i.root&&(r(!s||e[0]!==s,"Cannot specify relative path with root prefix"),n.ancestor="root",e||(e=null)),s&&s===e)e=null,n.ancestor=0;else if(void 0!==n.ancestor)r(!s||!e||e[0]!==s,"Cannot combine prefix with ancestor option");else{const[t,r]=l.ancestor(e,s);r&&""===(e=e.slice(r))&&(e=null),n.ancestor=t}return n.path=s?null===e?[]:e.split(s):[e],new l.Ref(n)},t.in=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.create(e,{...n,in:!0})},t.isRef=function(e){return!!e&&!!e[o.symbols.ref]},l.Ref=class{resolve(e,t,n,s){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return r(!this.in||i.in,"Invalid in() reference usage"),"global"===this.type?this._resolve(n.context,t,i):"local"===this.type?this._resolve(s,t,i):this.ancestor?"root"===this.ancestor?this._resolve(t.ancestors[t.ancestors.length-1],t,i):(r(this.ancestor<=t.ancestors.length,"Invalid reference exceeds the schema root:",this.display),this._resolve(t.ancestors[this.ancestor-1],t,i)):this._resolve(e,t,i)}_resolve(e,t,n){let r;if("value"===this.type&&t.mainstay.shadow&&!1!==n.shadow&&(r=t.mainstay.shadow.get(this.absolute(t))),void 0===r&&(r=i(e,this.path,{iterables:this.iterables,functions:!0})),this.adjust&&(r=this.adjust(r)),this.map){const e=this.map.get(r);void 0!==e&&(r=e)}return t.mainstay&&t.mainstay.tracer.resolve(t,this,r),r}toString(){return this.display}absolute(e){return[...e.path.slice(0,-this.ancestor),...this.path]}clone(){return new l.Ref(this)}describe(){const e={path:this.path};"value"!==this.type&&(e.type=this.type),"."!==this.separator&&(e.separator=this.separator),"value"===this.type&&1!==this.ancestor&&(e.ancestor=this.ancestor),this.map&&(e.map=[...this.map]);for(const t of["adjust","iterables","render"])null!==this[t]&&void 0!==this[t]&&(e[t]=this[t]);return!1!==this.in&&(e.in=!0),{ref:e}}updateDisplay(){const e=null!==this.key?this.key:"";if("value"!==this.type)return void(this.display=`ref:${this.type}:${e}`);if(!this.separator)return void(this.display=`ref:${e}`);if(!this.ancestor)return void(this.display=`ref:${this.separator}${e}`);if("root"===this.ancestor)return void(this.display=`ref:root:${e}`);if(1===this.ancestor)return void(this.display=`ref:${e||".."}`);const t=new Array(this.ancestor+1).fill(this.separator).join("");this.display=`ref:${t}${e||""}`}constructor(e){r("object"==typeof e,"Invalid reference construction"),o.assertOptions(e,["adjust","ancestor","in","iterables","map","path","render","separator","type","depth","key","root","display"]),r([!1,void 0].includes(e.separator)||"string"==typeof e.separator&&1===e.separator.length,"Invalid separator"),r(!e.adjust||"function"==typeof e.adjust,"options.adjust must be a function"),r(!e.map||Array.isArray(e.map),"options.map must be an array"),r(!e.map||!e.adjust,"Cannot set both map and adjust options"),Object.assign(this,l.defaults,e),r("value"===this.type||void 0===this.ancestor,"Non-value references cannot reference ancestors"),Array.isArray(this.map)&&(this.map=new Map(this.map)),this.depth=this.path.length,this.key=this.path.length?this.path.join(this.separator):null,this.root=this.path[0],this.updateDisplay()}},l.Ref.prototype[o.symbols.ref]=!0,t.build=function(e){return"value"===(e=Object.assign({},l.defaults,e)).type&&void 0===e.ancestor&&(e.ancestor=1),new l.Ref(e)},l.context=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e=e.trim(),n){const r=void 0===n.global?"$":n.global;if(r!==t&&e.startsWith(r))return{key:e.slice(r.length),type:"global"};const s=void 0===n.local?"#":n.local;if(s!==t&&e.startsWith(s))return{key:e.slice(s.length),type:"local"};const i=void 0===n.root?"/":n.root;if(i!==t&&e.startsWith(i))return{key:e.slice(i.length),type:"value",root:!0}}return{key:e,type:"value"}},l.ancestor=function(e,t){if(!t)return[1,0];if(e[0]!==t)return[1,0];if(e[1]!==t)return[0,1];let n=2;for(;e[n]===t;)++n;return[n-1,n]},t.toSibling=0,t.toParent=1,t.Manager=class{register(e,r){if(e)if(r=void 0===r?t.toParent:r,Array.isArray(e))for(const t of e)this.register(t,r);else if(o.isSchema(e))for(const t of e._refs.refs)t.ancestor-r>=0&&this.refs.push({ancestor:t.ancestor-r,root:t.root});else t.isRef(e)&&"value"===e.type&&e.ancestor-r>=0&&this.refs.push({ancestor:e.ancestor-r,root:e.root}),a=a||n(3328),a.isTemplate(e)&&this.register(e.refs(),r)}get length(){return this.refs.length}clone(){const e=new t.Manager;return e.refs=s(this.refs),e}reset(){this.refs=[]}roots(){return this.refs.filter((e=>!e.ancestor)).map((e=>e.root))}constructor(){this.refs=[]}}},3378:(e,t,n)=>{const r=n(5107),s={};s.wrap=r.string().min(1).max(2).allow(!1),t.preferences=r.object({allowUnknown:r.boolean(),abortEarly:r.boolean(),artifacts:r.boolean(),cache:r.boolean(),context:r.object(),convert:r.boolean(),dateFormat:r.valid("date","iso","string","time","utc"),debug:r.boolean(),errors:{escapeHtml:r.boolean(),label:r.valid("path","key",!1),language:[r.string(),r.object().ref()],render:r.boolean(),stack:r.boolean(),wrap:{label:s.wrap,array:s.wrap,string:s.wrap}},externals:r.boolean(),messages:r.object(),noDefaults:r.boolean(),nonEnumerables:r.boolean(),presence:r.valid("required","optional","forbidden"),skipFunctions:r.boolean(),stripUnknown:r.object({arrays:r.boolean(),objects:r.boolean()}).or("arrays","objects").allow(!0,!1),warnings:r.boolean()}).strict(),s.nameRx=/^[a-zA-Z0-9]\w*$/,s.rule=r.object({alias:r.array().items(r.string().pattern(s.nameRx)).single(),args:r.array().items(r.string(),r.object({name:r.string().pattern(s.nameRx).required(),ref:r.boolean(),assert:r.alternatives([r.function(),r.object().schema()]).conditional("ref",{is:!0,then:r.required()}),normalize:r.function(),message:r.string().when("assert",{is:r.function(),then:r.required()})})),convert:r.boolean(),manifest:r.boolean(),method:r.function().allow(!1),multi:r.boolean(),validate:r.function()}),t.extension=r.object({type:r.alternatives([r.string(),r.object().regex()]).required(),args:r.function(),cast:r.object().pattern(s.nameRx,r.object({from:r.function().maxArity(1).required(),to:r.function().minArity(1).maxArity(2).required()})),base:r.object().schema().when("type",{is:r.object().regex(),then:r.forbidden()}),coerce:[r.function().maxArity(3),r.object({method:r.function().maxArity(3).required(),from:r.array().items(r.string()).single()})],flags:r.object().pattern(s.nameRx,r.object({setter:r.string(),default:r.any()})),manifest:{build:r.function().arity(2)},messages:[r.object(),r.string()],modifiers:r.object().pattern(s.nameRx,r.function().minArity(1).maxArity(2)),overrides:r.object().pattern(s.nameRx,r.function()),prepare:r.function().maxArity(3),rebuild:r.function().arity(1),rules:r.object().pattern(s.nameRx,s.rule),terms:r.object().pattern(s.nameRx,r.object({init:r.array().allow(null).required(),manifest:r.object().pattern(/.+/,[r.valid("schema","single"),r.object({mapped:r.object({from:r.string().required(),to:r.string().required()}).required()})])})),validate:r.function().maxArity(3)}).strict(),t.extensions=r.array().items(r.object(),r.function().arity(1)).strict(),s.desc={buffer:r.object({buffer:r.string()}),func:r.object({function:r.function().required(),options:{literal:!0}}),override:r.object({override:!0}),ref:r.object({ref:r.object({type:r.valid("value","global","local"),path:r.array().required(),separator:r.string().length(1).allow(!1),ancestor:r.number().min(0).integer().allow("root"),map:r.array().items(r.array().length(2)).min(1),adjust:r.function(),iterables:r.boolean(),in:r.boolean(),render:r.boolean()}).required()}),regex:r.object({regex:r.string().min(3)}),special:r.object({special:r.valid("deep").required()}),template:r.object({template:r.string().required(),options:r.object()}),value:r.object({value:r.alternatives([r.object(),r.array()]).required()})},s.desc.entity=r.alternatives([r.array().items(r.link("...")),r.boolean(),r.function(),r.number(),r.string(),s.desc.buffer,s.desc.func,s.desc.ref,s.desc.regex,s.desc.special,s.desc.template,s.desc.value,r.link("/")]),s.desc.values=r.array().items(null,r.boolean(),r.function(),r.number().allow(1/0,-1/0),r.string().allow(""),r.symbol(),s.desc.buffer,s.desc.func,s.desc.override,s.desc.ref,s.desc.regex,s.desc.template,s.desc.value),s.desc.messages=r.object().pattern(/.+/,[r.string(),s.desc.template,r.object().pattern(/.+/,[r.string(),s.desc.template])]),t.description=r.object({type:r.string().required(),flags:r.object({cast:r.string(),default:r.any(),description:r.string(),empty:r.link("/"),failover:s.desc.entity,id:r.string(),label:r.string(),only:!0,presence:["optional","required","forbidden"],result:["raw","strip"],strip:r.boolean(),unit:r.string()}).unknown(),preferences:{allowUnknown:r.boolean(),abortEarly:r.boolean(),artifacts:r.boolean(),cache:r.boolean(),convert:r.boolean(),dateFormat:["date","iso","string","time","utc"],errors:{escapeHtml:r.boolean(),label:["path","key"],language:[r.string(),s.desc.ref],wrap:{label:s.wrap,array:s.wrap}},externals:r.boolean(),messages:s.desc.messages,noDefaults:r.boolean(),nonEnumerables:r.boolean(),presence:["required","optional","forbidden"],skipFunctions:r.boolean(),stripUnknown:r.object({arrays:r.boolean(),objects:r.boolean()}).or("arrays","objects").allow(!0,!1),warnings:r.boolean()},allow:s.desc.values,invalid:s.desc.values,rules:r.array().min(1).items({name:r.string().required(),args:r.object().min(1),keep:r.boolean(),message:[r.string(),s.desc.messages],warn:r.boolean()}),keys:r.object().pattern(/.*/,r.link("/")),link:s.desc.ref}).pattern(/^[a-z]\w*$/,r.any())},493:(e,t,n)=>{const r=n(8571),s=n(9621),i=n(8160),o={value:Symbol("value")};e.exports=o.State=class{localize(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=new o.State(e,t,this);return n&&r.schemas&&(r.schemas=[o.schemas(n),...r.schemas]),r}nest(e,t){const n=new o.State(this.path,this.ancestors,this);return n.schemas=n.schemas&&[o.schemas(e),...n.schemas],n.debug=t,n}shadow(e,t){this.mainstay.shadow=this.mainstay.shadow||new o.Shadow,this.mainstay.shadow.set(this.path,e,t)}snapshot(){this.mainstay.shadow&&(this._snapshot=r(this.mainstay.shadow.node(this.path)))}restore(){this.mainstay.shadow&&(this.mainstay.shadow.override(this.path,this._snapshot),this._snapshot=void 0)}constructor(e,t,n){this.path=e,this.ancestors=t,this.mainstay=n.mainstay,this.schemas=n.schemas,this.debug=null}},o.schemas=function(e){return i.isSchema(e)?{schema:e}:e},o.Shadow=class{set(e,t,n){if(!e.length)return;if("strip"===n&&"number"==typeof e[e.length-1])return;this._values=this._values||new Map;let r=this._values;for(let t=0;t<e.length;++t){const n=e[t];let s=r.get(n);s||(s=new Map,r.set(n,s)),r=s}r[o.value]=t}get(e){const t=this.node(e);if(t)return t[o.value]}node(e){if(this._values)return s(this._values,e,{iterables:!0})}override(e,t){if(!this._values)return;const n=e.slice(0,-1),r=e[e.length-1],i=s(this._values,n,{iterables:!0});t?i.set(r,t):i&&i.delete(r)}constructor(){this._values=null}}},3328:(e,t,n)=>{const r=n(375),s=n(8571),i=n(5277),o=n(1447),a=n(8160),l=n(6354),c=n(6133),u={symbol:Symbol("template"),opens:new Array(1e3).join("\0"),closes:new Array(1e3).join(""),dateFormat:{date:Date.prototype.toDateString,iso:Date.prototype.toISOString,string:Date.prototype.toString,time:Date.prototype.toTimeString,utc:Date.prototype.toUTCString}};e.exports=u.Template=class{_parse(){if(!this.source.includes("{"))return;const e=u.encode(this.source),t=u.split(e);let n=!1;const r=[],s=t.shift();s&&r.push(s);for(const e of t){const t="{"!==e[0],s=t?"}":"}}",i=e.indexOf(s);if(-1===i||"{"===e[1]){r.push(`{${u.decode(e)}`);continue}let o=e.slice(t?0:1,i);const a=":"===o[0];a&&(o=o.slice(1));const l=this._ref(u.decode(o),{raw:t,wrapped:a});r.push(l),"string"!=typeof l&&(n=!0);const c=e.slice(i+s.length);c&&r.push(u.decode(c))}n?this._template=r:this.rendered=r.join("")}static date(e,t){return u.dateFormat[t.dateFormat].call(e)}describe(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this._settings&&e.compact)return this.source;const t={template:this.source};return this._settings&&(t.options=this._settings),t}static build(e){return new u.Template(e.template,e.options)}isDynamic(){return!!this._template}static isTemplate(e){return!!e&&!!e[a.symbols.template]}refs(){if(!this._template)return;const e=[];for(const t of this._template)"string"!=typeof t&&e.push(...t.refs);return e}resolve(e,t,n,r){return this._template&&1===this._template.length?this._part(this._template[0],e,t,n,r,{}):this.render(e,t,n,r)}_part(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.ref?e.ref.resolve(...n):e.formula.evaluate(n)}render(e,t,n,r){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};if(!this.isDynamic())return this.rendered;const o=[];for(const a of this._template)if("string"==typeof a)o.push(a);else{const l=this._part(a,e,t,n,r,s),c=u.stringify(l,e,t,n,r,s);if(void 0!==c){const e=a.raw||!1===(s.errors&&s.errors.escapeHtml)?c:i(c);o.push(u.wrap(e,a.wrapped&&n.errors.wrap.label))}}return o.join("")}_ref(e,t){let{raw:n,wrapped:r}=t;const s=[],i=e=>{const t=c.create(e,this._settings);return s.push(t),e=>t.resolve(...e)};try{var a=new o.Parser(e,{reference:i,functions:u.functions,constants:u.constants})}catch(t){throw t.message=`Invalid template variable "${e}" fails due to: ${t.message}`,t}if(a.single){if("reference"===a.single.type){const e=s[0];return{ref:e,raw:n,refs:s,wrapped:r||"local"===e.type&&"label"===e.key}}return u.stringify(a.single.value)}return{formula:a,raw:n,refs:s}}toString(){return this.source}constructor(e,t){r("string"==typeof e,"Template source must be a string"),r(!e.includes("\0")&&!e.includes(""),"Template source cannot contain reserved control characters"),this.source=e,this.rendered=e,this._template=null,this._settings=s(t),this._parse()}},u.Template.prototype[a.symbols.template]=!0,u.Template.prototype.isImmutable=!0,u.encode=function(e){return e.replace(/\\(\{+)/g,((e,t)=>u.opens.slice(0,t.length))).replace(/\\(\}+)/g,((e,t)=>u.closes.slice(0,t.length)))},u.decode=function(e){return e.replace(/\u0000/g,"{").replace(/\u0001/g,"}")},u.split=function(e){const t=[];let n="";for(let r=0;r<e.length;++r){const s=e[r];if("{"===s){let s="";for(;r+1<e.length&&"{"===e[r+1];)s+="{",++r;t.push(n),n=s}else n+=s}return t.push(n),t},u.wrap=function(e,t){return t?1===t.length?`${t}${e}${t}`:`${t[0]}${e}${t[1]}`:e},u.stringify=function(e,t,n,r,s){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};const o=typeof e,a=r&&r.errors&&r.errors.wrap||{};let l=!1;if(c.isRef(e)&&e.render&&(l=e.in,e=e.resolve(t,n,r,s,{in:e.in,...i})),null===e)return"null";if("string"===o)return u.wrap(e,i.arrayItems&&a.string);if("number"===o||"function"===o||"symbol"===o)return e.toString();if("object"!==o)return JSON.stringify(e);if(e instanceof Date)return u.Template.date(e,r);if(e instanceof Map){const t=[];for(const[n,r]of e.entries())t.push(`${n.toString()} -> ${r.toString()}`);e=t}if(!Array.isArray(e))return e.toString();const h=[];for(const o of e)h.push(u.stringify(o,t,n,r,s,{arrayItems:!0,...i}));return u.wrap(h.join(", "),!l&&a.array)},u.constants={true:!0,false:!1,null:null,second:1e3,minute:6e4,hour:36e5,day:864e5},u.functions={if:(e,t,n)=>e?t:n,length:e=>"string"==typeof e?e.length:e&&"object"==typeof e?Array.isArray(e)?e.length:Object.keys(e).length:null,msg(e){const[t,n,r,s,i]=this,o=i.messages;if(!o)return"";const a=l.template(t,o[0],e,n,r)||l.template(t,o[1],e,n,r);return a?a.render(t,n,r,s,i):""},number:e=>"number"==typeof e?e:"string"==typeof e?parseFloat(e):"boolean"==typeof e?e?1:0:e instanceof Date?e.getTime():null}},4946:(e,t,n)=>{const r=n(375),s=n(1687),i=n(8068),o=n(8160),a=n(3292),l=n(6354),c=n(6133),u={};e.exports=i.extend({type:"alternatives",flags:{match:{default:"any"}},terms:{matches:{init:[],register:c.toSibling}},args(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return 1===n.length&&Array.isArray(n[0])?e.try(...n[0]):e.try(...n)},validate(e,t){const{schema:n,error:r,state:i,prefs:o}=t;if(n._flags.match){const t=[],a=[];for(let r=0;r<n.$_terms.matches.length;++r){const s=n.$_terms.matches[r],l=i.nest(s.schema,`match.${r}`);l.snapshot();const c=s.schema.$_validate(e,l,o);c.errors?(a.push(c.errors),l.restore()):t.push(c.value)}if(0===t.length)return{errors:r("alternatives.any",{details:a.map((e=>l.details(e,{override:!1})))})};if("one"===n._flags.match)return 1===t.length?{value:t[0]}:{errors:r("alternatives.one")};if(t.length!==n.$_terms.matches.length)return{errors:r("alternatives.all",{details:a.map((e=>l.details(e,{override:!1})))})};const c=e=>e.$_terms.matches.some((e=>"object"===e.schema.type||"alternatives"===e.schema.type&&c(e.schema)));return c(n)?{value:t.reduce(((e,t)=>s(e,t,{mergeArrays:!1})))}:{value:t[t.length-1]}}const a=[];for(let t=0;t<n.$_terms.matches.length;++t){const r=n.$_terms.matches[t];if(r.schema){const n=i.nest(r.schema,`match.${t}`);n.snapshot();const s=r.schema.$_validate(e,n,o);if(!s.errors)return s;n.restore(),a.push({schema:r.schema,reports:s.errors});continue}const s=r.ref?r.ref.resolve(e,i,o):e,l=r.is?[r]:r.switch;for(let n=0;n<l.length;++n){const a=l[n],{is:c,then:u,otherwise:h}=a,d=`match.${t}${r.switch?"."+n:""}`;if(c.$_match(s,i.nest(c,`${d}.is`),o)){if(u)return u.$_validate(e,i.nest(u,`${d}.then`),o)}else if(h)return h.$_validate(e,i.nest(h,`${d}.otherwise`),o)}}return u.errors(a,t)},rules:{conditional:{method(e,t){r(!this._flags._endedSwitch,"Unreachable condition"),r(!this._flags.match,"Cannot combine match mode",this._flags.match,"with conditional rule"),r(void 0===t.break,"Cannot use break option with alternatives conditional");const n=this.clone(),s=a.when(n,e,t),i=s.is?[s]:s.switch;for(const e of i)if(e.then&&e.otherwise){n.$_setFlag("_endedSwitch",!0,{clone:!1});break}return n.$_terms.matches.push(s),n.$_mutateRebuild()}},match:{method(e){if(r(["any","one","all"].includes(e),"Invalid alternatives match mode",e),"any"!==e)for(const t of this.$_terms.matches)r(t.schema,"Cannot combine match mode",e,"with conditional rules");return this.$_setFlag("match",e)}},try:{method(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];r(t.length,"Missing alternative schemas"),o.verifyFlat(t,"try"),r(!this._flags._endedSwitch,"Unreachable condition");const s=this.clone();for(const e of t)s.$_terms.matches.push({schema:s.$_compile(e)});return s.$_mutateRebuild()}}},overrides:{label(e){return this.$_parent("label",e).$_modify({each:(t,n)=>"is"!==n.path[0]?t.label(e):void 0,ref:!1})}},rebuild(e){e.$_modify({each:t=>{o.isSchema(t)&&"array"===t.type&&e.$_setFlag("_arrayItems",!0,{clone:!1})}})},manifest:{build(e,t){if(t.matches)for(const n of t.matches){const{schema:t,ref:r,is:s,not:i,then:o,otherwise:a}=n;e=t?e.try(t):r?e.conditional(r,{is:s,then:o,not:i,otherwise:a,switch:n.switch}):e.conditional(s,{then:o,otherwise:a})}return e}},messages:{"alternatives.all":"{{#label}} does not match all of the required types","alternatives.any":"{{#label}} does not match any of the allowed types","alternatives.match":"{{#label}} does not match any of the allowed types","alternatives.one":"{{#label}} matches more than one allowed type","alternatives.types":"{{#label}} must be one of {{#types}}"}}),u.errors=function(e,t){let{error:n,state:r}=t;if(!e.length)return{errors:n("alternatives.any")};if(1===e.length)return{errors:e[0].reports};const s=new Set,i=[];for(const{reports:t,schema:o}of e){if(t.length>1)return u.unmatched(e,n);const a=t[0];if(a instanceof l.Report==0)return u.unmatched(e,n);if(a.state.path.length!==r.path.length){i.push({type:o.type,report:a});continue}if("any.only"===a.code){for(const e of a.local.valids)s.add(e);continue}const[c,h]=a.code.split(".");"base"===h?s.add(c):i.push({type:o.type,report:a})}return i.length?1===i.length?{errors:i[0].report}:u.unmatched(e,n):{errors:n("alternatives.types",{types:[...s]})}},u.unmatched=function(e,t){const n=[];for(const t of e)n.push(...t.reports);return{errors:t("alternatives.match",l.details(n,{override:!1}))}}},8068:(e,t,n)=>{const r=n(375),s=n(7629),i=n(8160),o=n(6914);e.exports=s.extend({type:"any",flags:{only:{default:!1}},terms:{alterations:{init:null},examples:{init:null},externals:{init:null},metas:{init:[]},notes:{init:[]},shared:{init:null},tags:{init:[]},whens:{init:null}},rules:{custom:{method(e,t){return r("function"==typeof e,"Method must be a function"),r(void 0===t||t&&"string"==typeof t,"Description must be a non-empty string"),this.$_addRule({name:"custom",args:{method:e,description:t}})},validate(e,t,n){let{method:r}=n;try{return r(e,t)}catch(e){return t.error("any.custom",{error:e})}},args:["method","description"],multi:!0},messages:{method(e){return this.prefs({messages:e})}},shared:{method(e){r(i.isSchema(e)&&e._flags.id,"Schema must be a schema with an id");const t=this.clone();return t.$_terms.shared=t.$_terms.shared||[],t.$_terms.shared.push(e),t.$_mutateRegister(e),t}},warning:{method(e,t){return r(e&&"string"==typeof e,"Invalid warning code"),this.$_addRule({name:"warning",args:{code:e,local:t},warn:!0})},validate(e,t,n){let{code:r,local:s}=n;return t.error(r,s)},args:["code","local"],multi:!0}},modifiers:{keep(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.keep=t},message(e,t){e.message=o.compile(t)},warn(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.warn=t}},manifest:{build(e,t){for(const n in t){const r=t[n];if(["examples","externals","metas","notes","tags"].includes(n))for(const t of r)e=e[n.slice(0,-1)](t);else if("alterations"!==n)if("whens"!==n){if("shared"===n)for(const t of r)e=e.shared(t)}else for(const t of r){const{ref:n,is:r,not:s,then:i,otherwise:o,concat:a}=t;e=a?e.concat(a):n?e.when(n,{is:r,not:s,then:i,otherwise:o,switch:t.switch,break:t.break}):e.when(r,{then:i,otherwise:o,break:t.break})}else{const t={};for(const{target:e,adjuster:n}of r)t[e]=n;e=e.alter(t)}}return e}},messages:{"any.custom":"{{#label}} failed custom validation because {{#error.message}}","any.default":"{{#label}} threw an error when running default method","any.failover":"{{#label}} threw an error when running failover method","any.invalid":"{{#label}} contains an invalid value","any.only":'{{#label}} must be {if(#valids.length == 1, "", "one of ")}{{#valids}}',"any.ref":"{{#label}} {{#arg}} references {{:#ref}} which {{#reason}}","any.required":"{{#label}} is required","any.unknown":"{{#label}} is not allowed"}})},546:(e,t,n)=>{const r=n(375),s=n(9474),i=n(9621),o=n(8068),a=n(8160),l=n(3292),c={};e.exports=o.extend({type:"array",flags:{single:{default:!1},sparse:{default:!1}},terms:{items:{init:[],manifest:"schema"},ordered:{init:[],manifest:"schema"},_exclusions:{init:[]},_inclusions:{init:[]},_requireds:{init:[]}},coerce:{from:"object",method(e,t){let{schema:n,state:r,prefs:s}=t;if(!Array.isArray(e))return;const i=n.$_getRule("sort");return i?c.sort(n,e,i.args.options,r,s):void 0}},validate(e,t){let{schema:n,error:r}=t;if(!Array.isArray(e)){if(n._flags.single){const t=[e];return t[a.symbols.arraySingle]=!0,{value:t}}return{errors:r("array.base")}}if(n.$_getRule("items")||n.$_terms.externals)return{value:e.slice()}},rules:{has:{method(e){e=this.$_compile(e,{appendPath:!0});const t=this.$_addRule({name:"has",args:{schema:e}});return t.$_mutateRegister(e),t},validate(e,t,n){let{state:r,prefs:s,error:i}=t,{schema:o}=n;const a=[e,...r.ancestors];for(let t=0;t<e.length;++t){const n=r.localize([...r.path,t],a,o);if(o.$_match(e[t],n,s))return e}const l=o._flags.label;return l?i("array.hasKnown",{patternLabel:l}):i("array.hasUnknown",null)},multi:!0},items:{method(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];a.verifyFlat(t,"items");const r=this.$_addRule("items");for(let e=0;e<t.length;++e){const n=a.tryWithPath((()=>this.$_compile(t[e])),e,{append:!0});r.$_terms.items.push(n)}return r.$_mutateRebuild()},validate(e,t){let{schema:n,error:r,state:s,prefs:i,errorsArray:o}=t;const l=n.$_terms._requireds.slice(),u=n.$_terms.ordered.slice(),h=[...n.$_terms._inclusions,...l],d=!e[a.symbols.arraySingle];delete e[a.symbols.arraySingle];const p=o();let f=e.length;for(let t=0;t<f;++t){const o=e[t];let a=!1,m=!1;const g=d?t:new Number(t),_=[...s.path,g];if(!n._flags.sparse&&void 0===o){if(p.push(r("array.sparse",{key:g,path:_,pos:t,value:void 0},s.localize(_))),i.abortEarly)return p;u.shift();continue}const y=[e,...s.ancestors];for(const e of n.$_terms._exclusions)if(e.$_match(o,s.localize(_,y,e),i,{presence:"ignore"})){if(p.push(r("array.excludes",{pos:t,value:o},s.localize(_))),i.abortEarly)return p;a=!0,u.shift();break}if(a)continue;if(n.$_terms.ordered.length){if(u.length){const a=u.shift(),l=a.$_validate(o,s.localize(_,y,a),i);if(l.errors){if(p.push(...l.errors),i.abortEarly)return p}else if("strip"===a._flags.result)c.fastSplice(e,t),--t,--f;else{if(!n._flags.sparse&&void 0===l.value){if(p.push(r("array.sparse",{key:g,path:_,pos:t,value:void 0},s.localize(_))),i.abortEarly)return p;continue}e[t]=l.value}continue}if(!n.$_terms.items.length){if(p.push(r("array.orderedLength",{pos:t,limit:n.$_terms.ordered.length})),i.abortEarly)return p;break}}const v=[];let b=l.length;for(let a=0;a<b;++a){const u=s.localize(_,y,l[a]);u.snapshot();const h=l[a].$_validate(o,u,i);if(v[a]=h,!h.errors){if(e[t]=h.value,m=!0,c.fastSplice(l,a),--a,--b,!n._flags.sparse&&void 0===h.value&&(p.push(r("array.sparse",{key:g,path:_,pos:t,value:void 0},s.localize(_))),i.abortEarly))return p;break}u.restore()}if(m)continue;const w=i.stripUnknown&&!!i.stripUnknown.arrays||!1;b=h.length;for(const u of h){let h;const d=l.indexOf(u);if(-1!==d)h=v[d];else{const l=s.localize(_,y,u);if(l.snapshot(),h=u.$_validate(o,l,i),!h.errors){"strip"===u._flags.result?(c.fastSplice(e,t),--t,--f):n._flags.sparse||void 0!==h.value?e[t]=h.value:(p.push(r("array.sparse",{key:g,path:_,pos:t,value:void 0},s.localize(_))),a=!0),m=!0;break}l.restore()}if(1===b){if(w){c.fastSplice(e,t),--t,--f,m=!0;break}if(p.push(...h.errors),i.abortEarly)return p;a=!0;break}}if(!a&&(n.$_terms._inclusions.length||n.$_terms._requireds.length)&&!m){if(w){c.fastSplice(e,t),--t,--f;continue}if(p.push(r("array.includes",{pos:t,value:o},s.localize(_))),i.abortEarly)return p}}return l.length&&c.fillMissedErrors(n,p,l,e,s,i),u.length&&(c.fillOrderedErrors(n,p,u,e,s,i),p.length||c.fillDefault(u,e,s,i)),p.length?p:e},priority:!0,manifest:!1},length:{method(e){return this.$_addRule({name:"length",args:{limit:e},operator:"="})},validate(e,t,n,r){let{limit:s}=n,{name:i,operator:o,args:l}=r;return a.compare(e.length,s,o)?e:t.error("array."+i,{limit:l.limit,value:e})},args:[{name:"limit",ref:!0,assert:a.limit,message:"must be a positive integer"}]},max:{method(e){return this.$_addRule({name:"max",method:"length",args:{limit:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"length",args:{limit:e},operator:">="})}},ordered:{method(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];a.verifyFlat(t,"ordered");const r=this.$_addRule("items");for(let e=0;e<t.length;++e){const n=a.tryWithPath((()=>this.$_compile(t[e])),e,{append:!0});c.validateSingle(n,r),r.$_mutateRegister(n),r.$_terms.ordered.push(n)}return r.$_mutateRebuild()}},single:{method(e){const t=void 0===e||!!e;return r(!t||!this._flags._arrayItems,"Cannot specify single rule when array has array items"),this.$_setFlag("single",t)}},sort:{method(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.assertOptions(e,["by","order"]);const t={order:e.order||"ascending"};return e.by&&(t.by=l.ref(e.by,{ancestor:0}),r(!t.by.ancestor,"Cannot sort by ancestor")),this.$_addRule({name:"sort",args:{options:t}})},validate(e,t,n){let{error:r,state:s,prefs:i,schema:o}=t,{options:a}=n;const{value:l,errors:u}=c.sort(o,e,a,s,i);if(u)return u;for(let t=0;t<e.length;++t)if(e[t]!==l[t])return r("array.sort",{order:a.order,by:a.by?a.by.key:"value"});return e},convert:!0},sparse:{method(e){const t=void 0===e||!!e;return this._flags.sparse===t?this:(t?this.clone():this.$_addRule("items")).$_setFlag("sparse",t,{clone:!1})}},unique:{method(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(!e||"function"==typeof e||"string"==typeof e,"comparator must be a function or a string"),a.assertOptions(t,["ignoreUndefined","separator"]);const n={name:"unique",args:{options:t,comparator:e}};if(e)if("string"==typeof e){const r=a.default(t.separator,".");n.path=r?e.split(r):[e]}else n.comparator=e;return this.$_addRule(n)},validate(e,t,n,o){let{state:a,error:l,schema:c}=t,{comparator:u,options:h}=n,{comparator:d,path:p}=o;const f={string:Object.create(null),number:Object.create(null),undefined:Object.create(null),boolean:Object.create(null),object:new Map,function:new Map,custom:new Map},m=d||s,g=h.ignoreUndefined;for(let t=0;t<e.length;++t){const n=p?i(e[t],p):e[t],s=d?f.custom:f[typeof n];if(r(s,"Failed to find unique map container for type",typeof n),s instanceof Map){const r=s.entries();let i;for(;!(i=r.next()).done;)if(m(i.value[0],n)){const n=a.localize([...a.path,t],[e,...a.ancestors]),r={pos:t,value:e[t],dupePos:i.value[1],dupeValue:e[i.value[1]]};return p&&(r.path=u),l("array.unique",r,n)}s.set(n,t)}else{if((!g||void 0!==n)&&void 0!==s[n]){const r={pos:t,value:e[t],dupePos:s[n],dupeValue:e[s[n]]};return p&&(r.path=u),l("array.unique",r,a.localize([...a.path,t],[e,...a.ancestors]))}s[n]=t}}return e},args:["comparator","options"],multi:!0}},cast:{set:{from:Array.isArray,to:(e,t)=>new Set(e)}},rebuild(e){e.$_terms._inclusions=[],e.$_terms._exclusions=[],e.$_terms._requireds=[];for(const t of e.$_terms.items)c.validateSingle(t,e),"required"===t._flags.presence?e.$_terms._requireds.push(t):"forbidden"===t._flags.presence?e.$_terms._exclusions.push(t):e.$_terms._inclusions.push(t);for(const t of e.$_terms.ordered)c.validateSingle(t,e)},manifest:{build:(e,t)=>(t.items&&(e=e.items(...t.items)),t.ordered&&(e=e.ordered(...t.ordered)),e)},messages:{"array.base":"{{#label}} must be an array","array.excludes":"{{#label}} contains an excluded value","array.hasKnown":"{{#label}} does not contain at least one required match for type {:#patternLabel}","array.hasUnknown":"{{#label}} does not contain at least one required match","array.includes":"{{#label}} does not match any of the allowed types","array.includesRequiredBoth":"{{#label}} does not contain {{#knownMisses}} and {{#unknownMisses}} other required value(s)","array.includesRequiredKnowns":"{{#label}} does not contain {{#knownMisses}}","array.includesRequiredUnknowns":"{{#label}} does not contain {{#unknownMisses}} required value(s)","array.length":"{{#label}} must contain {{#limit}} items","array.max":"{{#label}} must contain less than or equal to {{#limit}} items","array.min":"{{#label}} must contain at least {{#limit}} items","array.orderedLength":"{{#label}} must contain at most {{#limit}} items","array.sort":"{{#label}} must be sorted in {#order} order by {{#by}}","array.sort.mismatching":"{{#label}} cannot be sorted due to mismatching types","array.sort.unsupported":"{{#label}} cannot be sorted due to unsupported type {#type}","array.sparse":"{{#label}} must not be a sparse array item","array.unique":"{{#label}} contains a duplicate value"}}),c.fillMissedErrors=function(e,t,n,r,s,i){const o=[];let a=0;for(const e of n){const t=e._flags.label;t?o.push(t):++a}o.length?a?t.push(e.$_createError("array.includesRequiredBoth",r,{knownMisses:o,unknownMisses:a},s,i)):t.push(e.$_createError("array.includesRequiredKnowns",r,{knownMisses:o},s,i)):t.push(e.$_createError("array.includesRequiredUnknowns",r,{unknownMisses:a},s,i))},c.fillOrderedErrors=function(e,t,n,r,s,i){const o=[];for(const e of n)"required"===e._flags.presence&&o.push(e);o.length&&c.fillMissedErrors(e,t,o,r,s,i)},c.fillDefault=function(e,t,n,r){const s=[];let i=!0;for(let o=e.length-1;o>=0;--o){const a=e[o],l=[t,...n.ancestors],c=a.$_validate(void 0,n.localize(n.path,l,a),r).value;if(i){if(void 0===c)continue;i=!1}s.unshift(c)}s.length&&t.push(...s)},c.fastSplice=function(e,t){let n=t;for(;n<e.length;)e[n++]=e[n];--e.length},c.validateSingle=function(e,t){("array"===e.type||e._flags._arrayItems)&&(r(!t._flags.single,"Cannot specify array item with single rule enabled"),t.$_setFlag("_arrayItems",!0,{clone:!1}))},c.sort=function(e,t,n,r,s){const i="ascending"===n.order?1:-1,o=-1*i,a=i,l=(l,u)=>{let h=c.compare(l,u,o,a);if(null!==h)return h;if(n.by&&(l=n.by.resolve(l,r,s),u=n.by.resolve(u,r,s)),h=c.compare(l,u,o,a),null!==h)return h;const d=typeof l;if(d!==typeof u)throw e.$_createError("array.sort.mismatching",t,null,r,s);if("number"!==d&&"string"!==d)throw e.$_createError("array.sort.unsupported",t,{type:d},r,s);return"number"===d?(l-u)*i:l<u?o:a};try{return{value:t.slice().sort(l)}}catch(e){return{errors:e}}},c.compare=function(e,t,n,r){return e===t?0:void 0===e?1:void 0===t?-1:null===e?r:null===t?n:null}},4937:(e,t,n)=>{const r=n(375),s=n(8068),i=n(8160),o=n(2036),a={isBool:function(e){return"boolean"==typeof e}};e.exports=s.extend({type:"boolean",flags:{sensitive:{default:!1}},terms:{falsy:{init:null,manifest:"values"},truthy:{init:null,manifest:"values"}},coerce(e,t){let{schema:n}=t;if("boolean"!=typeof e){if("string"==typeof e){const t=n._flags.sensitive?e:e.toLowerCase();e="true"===t||"false"!==t&&e}return"boolean"!=typeof e&&(e=n.$_terms.truthy&&n.$_terms.truthy.has(e,null,null,!n._flags.sensitive)||(!n.$_terms.falsy||!n.$_terms.falsy.has(e,null,null,!n._flags.sensitive))&&e),{value:e}}},validate(e,t){let{error:n}=t;if("boolean"!=typeof e)return{value:e,errors:n("boolean.base")}},rules:{truthy:{method(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];i.verifyFlat(t,"truthy");const s=this.clone();s.$_terms.truthy=s.$_terms.truthy||new o;for(let e=0;e<t.length;++e){const n=t[e];r(void 0!==n,"Cannot call truthy with undefined"),s.$_terms.truthy.add(n)}return s}},falsy:{method(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];i.verifyFlat(t,"falsy");const s=this.clone();s.$_terms.falsy=s.$_terms.falsy||new o;for(let e=0;e<t.length;++e){const n=t[e];r(void 0!==n,"Cannot call falsy with undefined"),s.$_terms.falsy.add(n)}return s}},sensitive:{method(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.$_setFlag("sensitive",e)}}},cast:{number:{from:a.isBool,to:(e,t)=>e?1:0},string:{from:a.isBool,to:(e,t)=>e?"true":"false"}},manifest:{build:(e,t)=>(t.truthy&&(e=e.truthy(...t.truthy)),t.falsy&&(e=e.falsy(...t.falsy)),e)},messages:{"boolean.base":"{{#label}} must be a boolean"}})},7500:(e,t,n)=>{const r=n(375),s=n(8068),i=n(8160),o=n(3328),a={isDate:function(e){return e instanceof Date}};e.exports=s.extend({type:"date",coerce:{from:["number","string"],method(e,t){let{schema:n}=t;return{value:a.parse(e,n._flags.format)||e}}},validate(e,t){let{schema:n,error:r,prefs:s}=t;if(e instanceof Date&&!isNaN(e.getTime()))return;const i=n._flags.format;return s.convert&&i&&"string"==typeof e?{value:e,errors:r("date.format",{format:i})}:{value:e,errors:r("date.base")}},rules:{compare:{method:!1,validate(e,t,n,r){let{date:s}=n,{name:o,operator:a,args:l}=r;const c="now"===s?Date.now():s.getTime();return i.compare(e.getTime(),c,a)?e:t.error("date."+o,{limit:l.date,value:e})},args:[{name:"date",ref:!0,normalize:e=>"now"===e?e:a.parse(e),assert:e=>null!==e,message:"must have a valid date format"}]},format:{method(e){return r(["iso","javascript","unix"].includes(e),"Unknown date format",e),this.$_setFlag("format",e)}},greater:{method(e){return this.$_addRule({name:"greater",method:"compare",args:{date:e},operator:">"})}},iso:{method(){return this.format("iso")}},less:{method(e){return this.$_addRule({name:"less",method:"compare",args:{date:e},operator:"<"})}},max:{method(e){return this.$_addRule({name:"max",method:"compare",args:{date:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"compare",args:{date:e},operator:">="})}},timestamp:{method(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"javascript";return r(["javascript","unix"].includes(e),'"type" must be one of "javascript, unix"'),this.format(e)}}},cast:{number:{from:a.isDate,to:(e,t)=>e.getTime()},string:{from:a.isDate,to(e,t){let{prefs:n}=t;return o.date(e,n)}}},messages:{"date.base":"{{#label}} must be a valid date","date.format":'{{#label}} must be in {msg("date.format." + #format) || #format} format',"date.greater":"{{#label}} must be greater than {{:#limit}}","date.less":"{{#label}} must be less than {{:#limit}}","date.max":"{{#label}} must be less than or equal to {{:#limit}}","date.min":"{{#label}} must be greater than or equal to {{:#limit}}","date.format.iso":"ISO 8601 date","date.format.javascript":"timestamp or number of milliseconds","date.format.unix":"timestamp or number of seconds"}}),a.parse=function(e,t){if(e instanceof Date)return e;if("string"!=typeof e&&(isNaN(e)||!isFinite(e)))return null;if(/^\s*$/.test(e))return null;if("iso"===t)return i.isIsoDate(e)?a.date(e.toString()):null;const n=e;if("string"==typeof e&&/^[+-]?\d+(\.\d+)?$/.test(e)&&(e=parseFloat(e)),t){if("javascript"===t)return a.date(1*e);if("unix"===t)return a.date(1e3*e);if("string"==typeof n)return null}return a.date(e)},a.date=function(e){const t=new Date(e);return isNaN(t.getTime())?null:t}},390:(e,t,n)=>{const r=n(375),s=n(7824);e.exports=s.extend({type:"function",properties:{typeof:"function"},rules:{arity:{method(e){return r(Number.isSafeInteger(e)&&e>=0,"n must be a positive integer"),this.$_addRule({name:"arity",args:{n:e}})},validate(e,t,n){let{n:r}=n;return e.length===r?e:t.error("function.arity",{n:r})}},class:{method(){return this.$_addRule("class")},validate:(e,t)=>/^\s*class\s/.test(e.toString())?e:t.error("function.class",{value:e})},minArity:{method(e){return r(Number.isSafeInteger(e)&&e>0,"n must be a strict positive integer"),this.$_addRule({name:"minArity",args:{n:e}})},validate(e,t,n){let{n:r}=n;return e.length>=r?e:t.error("function.minArity",{n:r})}},maxArity:{method(e){return r(Number.isSafeInteger(e)&&e>=0,"n must be a positive integer"),this.$_addRule({name:"maxArity",args:{n:e}})},validate(e,t,n){let{n:r}=n;return e.length<=r?e:t.error("function.maxArity",{n:r})}}},messages:{"function.arity":"{{#label}} must have an arity of {{#n}}","function.class":"{{#label}} must be a class","function.maxArity":"{{#label}} must have an arity lesser or equal to {{#n}}","function.minArity":"{{#label}} must have an arity greater or equal to {{#n}}"}})},7824:(e,t,n)=>{const r=n(978),s=n(375),i=n(8571),o=n(3652),a=n(8068),l=n(8160),c=n(3292),u=n(6354),h=n(6133),d=n(3328),p={renameDefaults:{alias:!1,multiple:!1,override:!1}};e.exports=a.extend({type:"_keys",properties:{typeof:"object"},flags:{unknown:{default:!1}},terms:{dependencies:{init:null},keys:{init:null,manifest:{mapped:{from:"schema",to:"key"}}},patterns:{init:null},renames:{init:null}},args:(e,t)=>e.keys(t),validate(e,t){let{schema:n,error:r,state:s,prefs:i}=t;if(!e||typeof e!==n.$_property("typeof")||Array.isArray(e))return{value:e,errors:r("object.base",{type:n.$_property("typeof")})};if(!(n.$_terms.renames||n.$_terms.dependencies||n.$_terms.keys||n.$_terms.patterns||n.$_terms.externals))return;e=p.clone(e,i);const o=[];if(n.$_terms.renames&&!p.rename(n,e,s,i,o))return{value:e,errors:o};if(!n.$_terms.keys&&!n.$_terms.patterns&&!n.$_terms.dependencies)return{value:e,errors:o};const a=new Set(Object.keys(e));if(n.$_terms.keys){const t=[e,...s.ancestors];for(const r of n.$_terms.keys){const n=r.key,l=e[n];a.delete(n);const c=s.localize([...s.path,n],t,r),u=r.schema.$_validate(l,c,i);if(u.errors){if(i.abortEarly)return{value:e,errors:u.errors};void 0!==u.value&&(e[n]=u.value),o.push(...u.errors)}else"strip"===r.schema._flags.result||void 0===u.value&&void 0!==l?delete e[n]:void 0!==u.value&&(e[n]=u.value)}}if(a.size||n._flags._hasPatternMatch){const t=p.unknown(n,e,a,o,s,i);if(t)return t}if(n.$_terms.dependencies)for(const t of n.$_terms.dependencies){if(t.key&&void 0===t.key.resolve(e,s,i,null,{shadow:!1}))continue;const r=p.dependencies[t.rel](n,t,e,s,i);if(r){const t=n.$_createError(r.code,e,r.context,s,i);if(i.abortEarly)return{value:e,errors:t};o.push(t)}}return{value:e,errors:o}},rules:{and:{method(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l.verifyFlat(t,"and"),p.dependency(this,"and",null,t)}},append:{method(e){return null==e||0===Object.keys(e).length?this:this.keys(e)}},assert:{method(e,t,n){d.isTemplate(e)||(e=c.ref(e)),s(void 0===n||"string"==typeof n,"Message must be a string"),t=this.$_compile(t,{appendPath:!0});const r=this.$_addRule({name:"assert",args:{subject:e,schema:t,message:n}});return r.$_mutateRegister(e),r.$_mutateRegister(t),r},validate(e,t,n){let{error:r,prefs:s,state:i}=t,{subject:o,schema:a,message:l}=n;const c=o.resolve(e,i,s),u=h.isRef(o)?o.absolute(i):[];return a.$_match(c,i.localize(u,[e,...i.ancestors],a),s)?e:r("object.assert",{subject:o,message:l})},args:["subject","schema","message"],multi:!0},instance:{method(e,t){return s("function"==typeof e,"constructor must be a function"),t=t||e.name,this.$_addRule({name:"instance",args:{constructor:e,name:t}})},validate(e,t,n){let{constructor:r,name:s}=n;return e instanceof r?e:t.error("object.instance",{type:s,value:e})},args:["constructor","name"]},keys:{method(e){s(void 0===e||"object"==typeof e,"Object schema must be a valid object"),s(!l.isSchema(e),"Object schema cannot be a joi schema");const t=this.clone();if(e)if(Object.keys(e).length){t.$_terms.keys=t.$_terms.keys?t.$_terms.keys.filter((t=>!e.hasOwnProperty(t.key))):new p.Keys;for(const n in e)l.tryWithPath((()=>t.$_terms.keys.push({key:n,schema:this.$_compile(e[n])})),n)}else t.$_terms.keys=new p.Keys;else t.$_terms.keys=null;return t.$_mutateRebuild()}},length:{method(e){return this.$_addRule({name:"length",args:{limit:e},operator:"="})},validate(e,t,n,r){let{limit:s}=n,{name:i,operator:o,args:a}=r;return l.compare(Object.keys(e).length,s,o)?e:t.error("object."+i,{limit:a.limit,value:e})},args:[{name:"limit",ref:!0,assert:l.limit,message:"must be a positive integer"}]},max:{method(e){return this.$_addRule({name:"max",method:"length",args:{limit:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"length",args:{limit:e},operator:">="})}},nand:{method(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l.verifyFlat(t,"nand"),p.dependency(this,"nand",null,t)}},or:{method(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l.verifyFlat(t,"or"),p.dependency(this,"or",null,t)}},oxor:{method(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return p.dependency(this,"oxor",null,t)}},pattern:{method(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=e instanceof RegExp;r||(e=this.$_compile(e,{appendPath:!0})),s(void 0!==t,"Invalid rule"),l.assertOptions(n,["fallthrough","matches"]),r&&s(!e.flags.includes("g")&&!e.flags.includes("y"),"pattern should not use global or sticky mode"),t=this.$_compile(t,{appendPath:!0});const i=this.clone();i.$_terms.patterns=i.$_terms.patterns||[];const o={[r?"regex":"schema"]:e,rule:t};return n.matches&&(o.matches=this.$_compile(n.matches),"array"!==o.matches.type&&(o.matches=o.matches.$_root.array().items(o.matches)),i.$_mutateRegister(o.matches),i.$_setFlag("_hasPatternMatch",!0,{clone:!1})),n.fallthrough&&(o.fallthrough=!0),i.$_terms.patterns.push(o),i.$_mutateRegister(t),i}},ref:{method(){return this.$_addRule("ref")},validate:(e,t)=>h.isRef(e)?e:t.error("object.refType",{value:e})},regex:{method(){return this.$_addRule("regex")},validate:(e,t)=>e instanceof RegExp?e:t.error("object.regex",{value:e})},rename:{method(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};s("string"==typeof e||e instanceof RegExp,"Rename missing the from argument"),s("string"==typeof t||t instanceof d,"Invalid rename to argument"),s(t!==e,"Cannot rename key to same name:",e),l.assertOptions(n,["alias","ignoreUndefined","override","multiple"]);const i=this.clone();i.$_terms.renames=i.$_terms.renames||[];for(const t of i.$_terms.renames)s(t.from!==e,"Cannot rename the same key multiple times");return t instanceof d&&i.$_mutateRegister(t),i.$_terms.renames.push({from:e,to:t,options:r(p.renameDefaults,n)}),i}},schema:{method(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return this.$_addRule({name:"schema",args:{type:e}})},validate(e,t,n){let{type:r}=n;return!l.isSchema(e)||"any"!==r&&e.type!==r?t.error("object.schema",{type:r}):e}},unknown:{method(e){return this.$_setFlag("unknown",!1!==e)}},with:{method(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.dependency(this,"with",e,t,n)}},without:{method(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.dependency(this,"without",e,t,n)}},xor:{method(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l.verifyFlat(t,"xor"),p.dependency(this,"xor",null,t)}}},overrides:{default(e,t){return void 0===e&&(e=l.symbols.deepDefault),this.$_parent("default",e,t)}},rebuild(e){if(e.$_terms.keys){const t=new o.Sorter;for(const n of e.$_terms.keys)l.tryWithPath((()=>t.add(n,{after:n.schema.$_rootReferences(),group:n.key})),n.key);e.$_terms.keys=new p.Keys(...t.nodes)}},manifest:{build(e,t){if(t.keys&&(e=e.keys(t.keys)),t.dependencies)for(const{rel:n,key:r=null,peers:s,options:i}of t.dependencies)e=p.dependency(e,n,r,s,i);if(t.patterns)for(const{regex:n,schema:r,rule:s,fallthrough:i,matches:o}of t.patterns)e=e.pattern(n||r,s,{fallthrough:i,matches:o});if(t.renames)for(const{from:n,to:r,options:s}of t.renames)e=e.rename(n,r,s);return e}},messages:{"object.and":"{{#label}} contains {{#presentWithLabels}} without its required peers {{#missingWithLabels}}","object.assert":'{{#label}} is invalid because {if(#subject.key, `"` + #subject.key + `" failed to ` + (#message || "pass the assertion test"), #message || "the assertion failed")}',"object.base":"{{#label}} must be of type {{#type}}","object.instance":"{{#label}} must be an instance of {{:#type}}","object.length":'{{#label}} must have {{#limit}} key{if(#limit == 1, "", "s")}',"object.max":'{{#label}} must have less than or equal to {{#limit}} key{if(#limit == 1, "", "s")}',"object.min":'{{#label}} must have at least {{#limit}} key{if(#limit == 1, "", "s")}',"object.missing":"{{#label}} must contain at least one of {{#peersWithLabels}}","object.nand":"{{:#mainWithLabel}} must not exist simultaneously with {{#peersWithLabels}}","object.oxor":"{{#label}} contains a conflict between optional exclusive peers {{#peersWithLabels}}","object.pattern.match":"{{#label}} keys failed to match pattern requirements","object.refType":"{{#label}} must be a Joi reference","object.regex":"{{#label}} must be a RegExp object","object.rename.multiple":"{{#label}} cannot rename {{:#from}} because multiple renames are disabled and another key was already renamed to {{:#to}}","object.rename.override":"{{#label}} cannot rename {{:#from}} because override is disabled and target {{:#to}} exists","object.schema":"{{#label}} must be a Joi schema of {{#type}} type","object.unknown":"{{#label}} is not allowed","object.with":"{{:#mainWithLabel}} missing required peer {{:#peerWithLabel}}","object.without":"{{:#mainWithLabel}} conflict with forbidden peer {{:#peerWithLabel}}","object.xor":"{{#label}} contains a conflict between exclusive peers {{#peersWithLabels}}"}}),p.clone=function(e,t){if("object"==typeof e){if(t.nonEnumerables)return i(e,{shallow:!0});const n=Object.create(Object.getPrototypeOf(e));return Object.assign(n,e),n}const n=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(this,n)};return n.prototype=i(e.prototype),Object.defineProperty(n,"name",{value:e.name,writable:!1}),Object.defineProperty(n,"length",{value:e.length,writable:!1}),Object.assign(n,e),n},p.dependency=function(e,t,n,r,i){s(null===n||"string"==typeof n,t,"key must be a strings"),i||(i=r.length>1&&"object"==typeof r[r.length-1]?r.pop():{}),l.assertOptions(i,["separator"]),r=[].concat(r);const o=l.default(i.separator,"."),a=[];for(const e of r)s("string"==typeof e,t,"peers must be strings"),a.push(c.ref(e,{separator:o,ancestor:0,prefix:!1}));null!==n&&(n=c.ref(n,{separator:o,ancestor:0,prefix:!1}));const u=e.clone();return u.$_terms.dependencies=u.$_terms.dependencies||[],u.$_terms.dependencies.push(new p.Dependency(t,n,a,r)),u},p.dependencies={and(e,t,n,r,s){const i=[],o=[],a=t.peers.length;for(const e of t.peers)void 0===e.resolve(n,r,s,null,{shadow:!1})?i.push(e.key):o.push(e.key);if(i.length!==a&&o.length!==a)return{code:"object.and",context:{present:o,presentWithLabels:p.keysToLabels(e,o),missing:i,missingWithLabels:p.keysToLabels(e,i)}}},nand(e,t,n,r,s){const i=[];for(const e of t.peers)void 0!==e.resolve(n,r,s,null,{shadow:!1})&&i.push(e.key);if(i.length!==t.peers.length)return;const o=t.paths[0],a=t.paths.slice(1);return{code:"object.nand",context:{main:o,mainWithLabel:p.keysToLabels(e,o),peers:a,peersWithLabels:p.keysToLabels(e,a)}}},or(e,t,n,r,s){for(const e of t.peers)if(void 0!==e.resolve(n,r,s,null,{shadow:!1}))return;return{code:"object.missing",context:{peers:t.paths,peersWithLabels:p.keysToLabels(e,t.paths)}}},oxor(e,t,n,r,s){const i=[];for(const e of t.peers)void 0!==e.resolve(n,r,s,null,{shadow:!1})&&i.push(e.key);if(!i.length||1===i.length)return;const o={peers:t.paths,peersWithLabels:p.keysToLabels(e,t.paths)};return o.present=i,o.presentWithLabels=p.keysToLabels(e,i),{code:"object.oxor",context:o}},with(e,t,n,r,s){for(const i of t.peers)if(void 0===i.resolve(n,r,s,null,{shadow:!1}))return{code:"object.with",context:{main:t.key.key,mainWithLabel:p.keysToLabels(e,t.key.key),peer:i.key,peerWithLabel:p.keysToLabels(e,i.key)}}},without(e,t,n,r,s){for(const i of t.peers)if(void 0!==i.resolve(n,r,s,null,{shadow:!1}))return{code:"object.without",context:{main:t.key.key,mainWithLabel:p.keysToLabels(e,t.key.key),peer:i.key,peerWithLabel:p.keysToLabels(e,i.key)}}},xor(e,t,n,r,s){const i=[];for(const e of t.peers)void 0!==e.resolve(n,r,s,null,{shadow:!1})&&i.push(e.key);if(1===i.length)return;const o={peers:t.paths,peersWithLabels:p.keysToLabels(e,t.paths)};return 0===i.length?{code:"object.missing",context:o}:(o.present=i,o.presentWithLabels=p.keysToLabels(e,i),{code:"object.xor",context:o})}},p.keysToLabels=function(e,t){return Array.isArray(t)?t.map((t=>e.$_mapLabels(t))):e.$_mapLabels(t)},p.rename=function(e,t,n,r,s){const i={};for(const o of e.$_terms.renames){const a=[],l="string"!=typeof o.from;if(l)for(const e in t){if(void 0===t[e]&&o.options.ignoreUndefined)continue;if(e===o.to)continue;const n=o.from.exec(e);n&&a.push({from:e,to:o.to,match:n})}else!Object.prototype.hasOwnProperty.call(t,o.from)||void 0===t[o.from]&&o.options.ignoreUndefined||a.push(o);for(const c of a){const a=c.from;let u=c.to;if(u instanceof d&&(u=u.render(t,n,r,c.match)),a!==u){if(!o.options.multiple&&i[u]&&(s.push(e.$_createError("object.rename.multiple",t,{from:a,to:u,pattern:l},n,r)),r.abortEarly))return!1;if(Object.prototype.hasOwnProperty.call(t,u)&&!o.options.override&&!i[u]&&(s.push(e.$_createError("object.rename.override",t,{from:a,to:u,pattern:l},n,r)),r.abortEarly))return!1;void 0===t[a]?delete t[u]:t[u]=t[a],i[u]=!0,o.options.alias||delete t[a]}}}return!0},p.unknown=function(e,t,n,r,s,i){if(e.$_terms.patterns){let o=!1;const a=e.$_terms.patterns.map((e=>{if(e.matches)return o=!0,[]})),l=[t,...s.ancestors];for(const o of n){const c=t[o],u=[...s.path,o];for(let h=0;h<e.$_terms.patterns.length;++h){const d=e.$_terms.patterns[h];if(d.regex){const e=d.regex.test(o);if(s.mainstay.tracer.debug(s,"rule",`pattern.${h}`,e?"pass":"error"),!e)continue}else if(!d.schema.$_match(o,s.nest(d.schema,`pattern.${h}`),i))continue;n.delete(o);const p=s.localize(u,l,{schema:d.rule,key:o}),f=d.rule.$_validate(c,p,i);if(f.errors){if(i.abortEarly)return{value:t,errors:f.errors};r.push(...f.errors)}if(d.matches&&a[h].push(o),t[o]=f.value,!d.fallthrough)break}}if(o)for(let n=0;n<a.length;++n){const o=a[n];if(!o)continue;const c=e.$_terms.patterns[n].matches,h=s.localize(s.path,l,c),d=c.$_validate(o,h,i);if(d.errors){const n=u.details(d.errors,{override:!1});n.matches=o;const a=e.$_createError("object.pattern.match",t,n,s,i);if(i.abortEarly)return{value:t,errors:a};r.push(a)}}}if(n.size&&(e.$_terms.keys||e.$_terms.patterns)){if(i.stripUnknown&&!e._flags.unknown||i.skipFunctions){const e=!(!i.stripUnknown||!0!==i.stripUnknown&&!i.stripUnknown.objects);for(const r of n)e?(delete t[r],n.delete(r)):"function"==typeof t[r]&&n.delete(r)}if(!l.default(e._flags.unknown,i.allowUnknown))for(const o of n){const n=s.localize([...s.path,o],[]),a=e.$_createError("object.unknown",t[o],{child:o},n,i,{flags:!1});if(i.abortEarly)return{value:t,errors:a};r.push(a)}}},p.Dependency=class{describe(){const e={rel:this.rel,peers:this.paths};return null!==this.key&&(e.key=this.key.key),"."!==this.peers[0].separator&&(e.options={separator:this.peers[0].separator}),e}constructor(e,t,n,r){this.rel=e,this.key=t,this.peers=n,this.paths=r}},p.Keys=class extends Array{concat(e){const t=this.slice(),n=new Map;for(let e=0;e<t.length;++e)n.set(t[e].key,e);for(const r of e){const e=r.key,s=n.get(e);void 0!==s?t[s]={key:e,schema:t[s].schema.concat(r.schema)}:t.push(r)}return t}}},8785:(e,t,n)=>{const r=n(375),s=n(8068),i=n(8160),o=n(3292),a=n(6354),l={};e.exports=s.extend({type:"link",properties:{schemaChain:!0},terms:{link:{init:null,manifest:"single",register:!1}},args:(e,t)=>e.ref(t),validate(e,t){let{schema:n,state:s,prefs:i}=t;r(n.$_terms.link,"Uninitialized link schema");const o=l.generate(n,e,s,i),a=n.$_terms.link[0].ref;return o.$_validate(e,s.nest(o,`link:${a.display}:${o.type}`),i)},generate:(e,t,n,r)=>l.generate(e,t,n,r),rules:{ref:{method(e){r(!this.$_terms.link,"Cannot reinitialize schema"),e=o.ref(e),r("value"===e.type||"local"===e.type,"Invalid reference type:",e.type),r("local"===e.type||"root"===e.ancestor||e.ancestor>0,"Link cannot reference itself");const t=this.clone();return t.$_terms.link=[{ref:e}],t}},relative:{method(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.$_setFlag("relative",e)}}},overrides:{concat(e){r(this.$_terms.link,"Uninitialized link schema"),r(i.isSchema(e),"Invalid schema object"),r("link"!==e.type,"Cannot merge type link with another link");const t=this.clone();return t.$_terms.whens||(t.$_terms.whens=[]),t.$_terms.whens.push({concat:e}),t.$_mutateRebuild()}},manifest:{build:(e,t)=>(r(t.link,"Invalid link description missing link"),e.ref(t.link))}}),l.generate=function(e,t,n,r){let s=n.mainstay.links.get(e);if(s)return s._generate(t,n,r).schema;const i=e.$_terms.link[0].ref,{perspective:o,path:a}=l.perspective(i,n);l.assert(o,"which is outside of schema boundaries",i,e,n,r);try{s=a.length?o.$_reach(a):o}catch(t){l.assert(!1,"to non-existing schema",i,e,n,r)}return l.assert("link"!==s.type,"which is another link",i,e,n,r),e._flags.relative||n.mainstay.links.set(e,s),s._generate(t,n,r).schema},l.perspective=function(e,t){if("local"===e.type){for(const{schema:n,key:r}of t.schemas){if((n._flags.id||r)===e.path[0])return{perspective:n,path:e.path.slice(1)};if(n.$_terms.shared)for(const t of n.$_terms.shared)if(t._flags.id===e.path[0])return{perspective:t,path:e.path.slice(1)}}return{perspective:null,path:null}}return"root"===e.ancestor?{perspective:t.schemas[t.schemas.length-1].schema,path:e.path}:{perspective:t.schemas[e.ancestor]&&t.schemas[e.ancestor].schema,path:e.path}},l.assert=function(e,t,n,s,i,o){e||r(!1,`"${a.label(s._flags,i,o)}" contains link reference "${n.display}" ${t}`)}},3832:(e,t,n)=>{const r=n(375),s=n(8068),i=n(8160),o={numberRx:/^\s*[+-]?(?:(?:\d+(?:\.\d*)?)|(?:\.\d+))(?:e([+-]?\d+))?\s*$/i,precisionRx:/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/};e.exports=s.extend({type:"number",flags:{unsafe:{default:!1}},coerce:{from:"string",method(e,t){let{schema:n,error:r}=t;const s=e.match(o.numberRx);if(!s)return;e=e.trim();const i={value:parseFloat(e)};if(0===i.value&&(i.value=0),!n._flags.unsafe)if(e.match(/e/i)){if(o.normalizeExponent(`${i.value/Math.pow(10,s[1])}e${s[1]}`)!==o.normalizeExponent(e))return i.errors=r("number.unsafe"),i}else{const t=i.value.toString();if(t.match(/e/i))return i;if(t!==o.normalizeDecimal(e))return i.errors=r("number.unsafe"),i}return i}},validate(e,t){let{schema:n,error:r,prefs:s}=t;if(e===1/0||e===-1/0)return{value:e,errors:r("number.infinity")};if(!i.isNumber(e))return{value:e,errors:r("number.base")};const o={value:e};if(s.convert){const e=n.$_getRule("precision");if(e){const t=Math.pow(10,e.args.limit);o.value=Math.round(o.value*t)/t}}return 0===o.value&&(o.value=0),!n._flags.unsafe&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&(o.errors=r("number.unsafe")),o},rules:{compare:{method:!1,validate(e,t,n,r){let{limit:s}=n,{name:o,operator:a,args:l}=r;return i.compare(e,s,a)?e:t.error("number."+o,{limit:l.limit,value:e})},args:[{name:"limit",ref:!0,assert:i.isNumber,message:"must be a number"}]},greater:{method(e){return this.$_addRule({name:"greater",method:"compare",args:{limit:e},operator:">"})}},integer:{method(){return this.$_addRule("integer")},validate:(e,t)=>Math.trunc(e)-e==0?e:t.error("number.integer")},less:{method(e){return this.$_addRule({name:"less",method:"compare",args:{limit:e},operator:"<"})}},max:{method(e){return this.$_addRule({name:"max",method:"compare",args:{limit:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"compare",args:{limit:e},operator:">="})}},multiple:{method(e){return this.$_addRule({name:"multiple",args:{base:e}})},validate(e,t,n,r){let{base:s}=n;return e*(1/s)%1==0?e:t.error("number.multiple",{multiple:r.args.base,value:e})},args:[{name:"base",ref:!0,assert:e=>"number"==typeof e&&isFinite(e)&&e>0,message:"must be a positive number"}],multi:!0},negative:{method(){return this.sign("negative")}},port:{method(){return this.$_addRule("port")},validate:(e,t)=>Number.isSafeInteger(e)&&e>=0&&e<=65535?e:t.error("number.port")},positive:{method(){return this.sign("positive")}},precision:{method(e){return r(Number.isSafeInteger(e),"limit must be an integer"),this.$_addRule({name:"precision",args:{limit:e}})},validate(e,t,n){let{limit:r}=n;const s=e.toString().match(o.precisionRx);return Math.max((s[1]?s[1].length:0)-(s[2]?parseInt(s[2],10):0),0)<=r?e:t.error("number.precision",{limit:r,value:e})},convert:!0},sign:{method(e){return r(["negative","positive"].includes(e),"Invalid sign",e),this.$_addRule({name:"sign",args:{sign:e}})},validate(e,t,n){let{sign:r}=n;return"negative"===r&&e<0||"positive"===r&&e>0?e:t.error(`number.${r}`)}},unsafe:{method(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return r("boolean"==typeof e,"enabled must be a boolean"),this.$_setFlag("unsafe",e)}}},cast:{string:{from:e=>"number"==typeof e,to:(e,t)=>e.toString()}},messages:{"number.base":"{{#label}} must be a number","number.greater":"{{#label}} must be greater than {{#limit}}","number.infinity":"{{#label}} cannot be infinity","number.integer":"{{#label}} must be an integer","number.less":"{{#label}} must be less than {{#limit}}","number.max":"{{#label}} must be less than or equal to {{#limit}}","number.min":"{{#label}} must be greater than or equal to {{#limit}}","number.multiple":"{{#label}} must be a multiple of {{#multiple}}","number.negative":"{{#label}} must be a negative number","number.port":"{{#label}} must be a valid port","number.positive":"{{#label}} must be a positive number","number.precision":"{{#label}} must have no more than {{#limit}} decimal places","number.unsafe":"{{#label}} must be a safe number"}}),o.normalizeExponent=function(e){return e.replace(/E/,"e").replace(/\.(\d*[1-9])?0+e/,".$1e").replace(/\.e/,"e").replace(/e\+/,"e").replace(/^\+/,"").replace(/^(-?)0+([1-9])/,"$1$2")},o.normalizeDecimal=function(e){return(e=e.replace(/^\+/,"").replace(/\.0*$/,"").replace(/^(-?)\.([^\.]*)$/,"$10.$2").replace(/^(-?)0+([0-9])/,"$1$2")).includes(".")&&e.endsWith("0")&&(e=e.replace(/0+$/,"")),"-0"===e?"0":e}},8966:(e,t,n)=>{const r=n(7824);e.exports=r.extend({type:"object",cast:{map:{from:e=>e&&"object"==typeof e,to:(e,t)=>new Map(Object.entries(e))}}})},7417:(e,t,n)=>{const r=n(375),s=n(5380),i=n(1745),o=n(9959),a=n(6064),l=n(9926),c=n(5752),u=n(8068),h=n(8160),d={tlds:l instanceof Set&&{tlds:{allow:l,deny:null}},base64Regex:{true:{true:/^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}==|[\w\-]{3}=)?$/,false:/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/},false:{true:/^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}(==)?|[\w\-]{3}=?)?$/,false:/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/}},dataUriRegex:/^data:[\w+.-]+\/[\w+.-]+;((charset=[\w-]+|base64),)?(.*)$/,hexRegex:/^[a-f0-9]+$/i,ipRegex:o.regex({cidr:"forbidden"}).regex,isoDurationRegex:/^P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?$/,guidBrackets:{"{":"}","[":"]","(":")","":""},guidVersions:{uuidv1:"1",uuidv2:"2",uuidv3:"3",uuidv4:"4",uuidv5:"5"},guidSeparators:new Set([void 0,!0,!1,"-",":"]),normalizationForms:["NFC","NFD","NFKC","NFKD"]};e.exports=u.extend({type:"string",flags:{insensitive:{default:!1},truncate:{default:!1}},terms:{replacements:{init:null}},coerce:{from:"string",method(e,t){let{schema:n,state:r,prefs:s}=t;const i=n.$_getRule("normalize");i&&(e=e.normalize(i.args.form));const o=n.$_getRule("case");o&&(e="upper"===o.args.direction?e.toLocaleUpperCase():e.toLocaleLowerCase());const a=n.$_getRule("trim");if(a&&a.args.enabled&&(e=e.trim()),n.$_terms.replacements)for(const t of n.$_terms.replacements)e=e.replace(t.pattern,t.replacement);const l=n.$_getRule("hex");if(l&&l.args.options.byteAligned&&e.length%2!=0&&(e=`0${e}`),n.$_getRule("isoDate")){const t=d.isoDate(e);t&&(e=t)}if(n._flags.truncate){const t=n.$_getRule("max");if(t){let i=t.args.limit;if(h.isResolvable(i)&&(i=i.resolve(e,r,s),!h.limit(i)))return{value:e,errors:n.$_createError("any.ref",i,{ref:t.args.limit,arg:"limit",reason:"must be a positive integer"},r,s)};e=e.slice(0,i)}}return{value:e}}},validate(e,t){let{schema:n,error:r}=t;if("string"!=typeof e)return{value:e,errors:r("string.base")};if(""===e){const t=n.$_getRule("min");if(t&&0===t.args.limit)return;return{value:e,errors:r("string.empty")}}},rules:{alphanum:{method(){return this.$_addRule("alphanum")},validate:(e,t)=>/^[a-zA-Z0-9]+$/.test(e)?e:t.error("string.alphanum")},base64:{method(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return h.assertOptions(e,["paddingRequired","urlSafe"]),e={urlSafe:!1,paddingRequired:!0,...e},r("boolean"==typeof e.paddingRequired,"paddingRequired must be boolean"),r("boolean"==typeof e.urlSafe,"urlSafe must be boolean"),this.$_addRule({name:"base64",args:{options:e}})},validate(e,t,n){let{options:r}=n;return d.base64Regex[r.paddingRequired][r.urlSafe].test(e)?e:t.error("string.base64")}},case:{method(e){return r(["lower","upper"].includes(e),"Invalid case:",e),this.$_addRule({name:"case",args:{direction:e}})},validate(e,t,n){let{direction:r}=n;return"lower"===r&&e===e.toLocaleLowerCase()||"upper"===r&&e===e.toLocaleUpperCase()?e:t.error(`string.${r}case`)},convert:!0},creditCard:{method(){return this.$_addRule("creditCard")},validate(e,t){let n=e.length,r=0,s=1;for(;n--;){const t=e.charAt(n)*s;r+=t-9*(t>9),s^=3}return r>0&&r%10==0?e:t.error("string.creditCard")}},dataUri:{method(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return h.assertOptions(e,["paddingRequired"]),e={paddingRequired:!0,...e},r("boolean"==typeof e.paddingRequired,"paddingRequired must be boolean"),this.$_addRule({name:"dataUri",args:{options:e}})},validate(e,t,n){let{options:r}=n;const s=e.match(d.dataUriRegex);if(s){if(!s[2])return e;if("base64"!==s[2])return e;if(d.base64Regex[r.paddingRequired].false.test(s[3]))return e}return t.error("string.dataUri")}},domain:{method(e){e&&h.assertOptions(e,["allowFullyQualified","allowUnicode","maxDomainSegments","minDomainSegments","tlds"]);const t=d.addressOptions(e);return this.$_addRule({name:"domain",args:{options:e},address:t})},validate(e,t,n,r){let{address:i}=r;return s.isValid(e,i)?e:t.error("string.domain")}},email:{method(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h.assertOptions(e,["allowFullyQualified","allowUnicode","ignoreLength","maxDomainSegments","minDomainSegments","multiple","separator","tlds"]),r(void 0===e.multiple||"boolean"==typeof e.multiple,"multiple option must be an boolean");const t=d.addressOptions(e),n=new RegExp(`\\s*[${e.separator?a(e.separator):","}]\\s*`);return this.$_addRule({name:"email",args:{options:e},regex:n,address:t})},validate(e,t,n,r){let{options:s}=n,{regex:o,address:a}=r;const l=s.multiple?e.split(o):[e],c=[];for(const e of l)i.isValid(e,a)||c.push(e);return c.length?t.error("string.email",{value:e,invalids:c}):e}},guid:{alias:"uuid",method(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h.assertOptions(e,["version","separator"]);let t="";if(e.version){const n=[].concat(e.version);r(n.length>=1,"version must have at least 1 valid version specified");const s=new Set;for(let e=0;e<n.length;++e){const i=n[e];r("string"==typeof i,"version at position "+e+" must be a string");const o=d.guidVersions[i.toLowerCase()];r(o,"version at position "+e+" must be one of "+Object.keys(d.guidVersions).join(", ")),r(!s.has(o),"version at position "+e+" must not be a duplicate"),t+=o,s.add(o)}}r(d.guidSeparators.has(e.separator),'separator must be one of true, false, "-", or ":"');const n=void 0===e.separator?"[:-]?":!0===e.separator?"[:-]":!1===e.separator?"[]?":`\\${e.separator}`,s=new RegExp(`^([\\[{\\(]?)[0-9A-F]{8}(${n})[0-9A-F]{4}\\2?[${t||"0-9A-F"}][0-9A-F]{3}\\2?[${t?"89AB":"0-9A-F"}][0-9A-F]{3}\\2?[0-9A-F]{12}([\\]}\\)]?)$`,"i");return this.$_addRule({name:"guid",args:{options:e},regex:s})},validate(e,t,n,r){let{regex:s}=r;const i=s.exec(e);return i?d.guidBrackets[i[1]]!==i[i.length-1]?t.error("string.guid"):e:t.error("string.guid")}},hex:{method(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return h.assertOptions(e,["byteAligned"]),e={byteAligned:!1,...e},r("boolean"==typeof e.byteAligned,"byteAligned must be boolean"),this.$_addRule({name:"hex",args:{options:e}})},validate(e,t,n){let{options:r}=n;return d.hexRegex.test(e)?r.byteAligned&&e.length%2!=0?t.error("string.hexAlign"):e:t.error("string.hex")}},hostname:{method(){return this.$_addRule("hostname")},validate:(e,t)=>s.isValid(e,{minDomainSegments:1})||d.ipRegex.test(e)?e:t.error("string.hostname")},insensitive:{method(){return this.$_setFlag("insensitive",!0)}},ip:{method(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h.assertOptions(e,["cidr","version"]);const{cidr:t,versions:n,regex:r}=o.regex(e),s=e.version?n:void 0;return this.$_addRule({name:"ip",args:{options:{cidr:t,version:s}},regex:r})},validate(e,t,n,r){let{options:s}=n,{regex:i}=r;return i.test(e)?e:s.version?t.error("string.ipVersion",{value:e,cidr:s.cidr,version:s.version}):t.error("string.ip",{value:e,cidr:s.cidr})}},isoDate:{method(){return this.$_addRule("isoDate")},validate(e,t){let{error:n}=t;return d.isoDate(e)?e:n("string.isoDate")}},isoDuration:{method(){return this.$_addRule("isoDuration")},validate:(e,t)=>d.isoDurationRegex.test(e)?e:t.error("string.isoDuration")},length:{method(e,t){return d.length(this,"length",e,"=",t)},validate(e,t,n,r){let{limit:s,encoding:i}=n,{name:o,operator:a,args:l}=r;const c=!i&&e.length;return h.compare(c,s,a)?e:t.error("string."+o,{limit:l.limit,value:e,encoding:i})},args:[{name:"limit",ref:!0,assert:h.limit,message:"must be a positive integer"},"encoding"]},lowercase:{method(){return this.case("lower")}},max:{method(e,t){return d.length(this,"max",e,"<=",t)},args:["limit","encoding"]},min:{method(e,t){return d.length(this,"min",e,">=",t)},args:["limit","encoding"]},normalize:{method(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NFC";return r(d.normalizationForms.includes(e),"normalization form must be one of "+d.normalizationForms.join(", ")),this.$_addRule({name:"normalize",args:{form:e}})},validate(e,t,n){let{error:r}=t,{form:s}=n;return e===e.normalize(s)?e:r("string.normalize",{value:e,form:s})},convert:!0},pattern:{alias:"regex",method(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(e instanceof RegExp,"regex must be a RegExp"),r(!e.flags.includes("g")&&!e.flags.includes("y"),"regex should not use global or sticky mode"),"string"==typeof t&&(t={name:t}),h.assertOptions(t,["invert","name"]);const n=["string.pattern",t.invert?".invert":"",t.name?".name":".base"].join("");return this.$_addRule({name:"pattern",args:{regex:e,options:t},errorCode:n})},validate(e,t,n,r){let{regex:s,options:i}=n,{errorCode:o}=r;return s.test(e)^i.invert?e:t.error(o,{name:i.name,regex:s,value:e})},args:["regex","options"],multi:!0},replace:{method(e,t){"string"==typeof e&&(e=new RegExp(a(e),"g")),r(e instanceof RegExp,"pattern must be a RegExp"),r("string"==typeof t,"replacement must be a String");const n=this.clone();return n.$_terms.replacements||(n.$_terms.replacements=[]),n.$_terms.replacements.push({pattern:e,replacement:t}),n}},token:{method(){return this.$_addRule("token")},validate:(e,t)=>/^\w+$/.test(e)?e:t.error("string.token")},trim:{method(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return r("boolean"==typeof e,"enabled must be a boolean"),this.$_addRule({name:"trim",args:{enabled:e}})},validate(e,t,n){let{enabled:r}=n;return r&&e!==e.trim()?t.error("string.trim"):e},convert:!0},truncate:{method(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return r("boolean"==typeof e,"enabled must be a boolean"),this.$_setFlag("truncate",e)}},uppercase:{method(){return this.case("upper")}},uri:{method(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h.assertOptions(e,["allowRelative","allowQuerySquareBrackets","domain","relativeOnly","scheme"]),e.domain&&h.assertOptions(e.domain,["allowFullyQualified","allowUnicode","maxDomainSegments","minDomainSegments","tlds"]);const{regex:t,scheme:n}=c.regex(e),r=e.domain?d.addressOptions(e.domain):null;return this.$_addRule({name:"uri",args:{options:e},regex:t,domain:r,scheme:n})},validate(e,t,n,r){let{options:i}=n,{regex:o,domain:a,scheme:l}=r;if(["http:/","https:/"].includes(e))return t.error("string.uri");const c=o.exec(e);if(c){const n=c[1]||c[2];return!a||i.allowRelative&&!n||s.isValid(n,a)?e:t.error("string.domain",{value:n})}return i.relativeOnly?t.error("string.uriRelativeOnly"):i.scheme?t.error("string.uriCustomScheme",{scheme:l,value:e}):t.error("string.uri")}}},manifest:{build(e,t){if(t.replacements)for(const{pattern:n,replacement:r}of t.replacements)e=e.replace(n,r);return e}},messages:{"string.alphanum":"{{#label}} must only contain alpha-numeric characters","string.base":"{{#label}} must be a string","string.base64":"{{#label}} must be a valid base64 string","string.creditCard":"{{#label}} must be a credit card","string.dataUri":"{{#label}} must be a valid dataUri string","string.domain":"{{#label}} must contain a valid domain name","string.email":"{{#label}} must be a valid email","string.empty":"{{#label}} is not allowed to be empty","string.guid":"{{#label}} must be a valid GUID","string.hex":"{{#label}} must only contain hexadecimal characters","string.hexAlign":"{{#label}} hex decoded representation must be byte aligned","string.hostname":"{{#label}} must be a valid hostname","string.ip":"{{#label}} must be a valid ip address with a {{#cidr}} CIDR","string.ipVersion":"{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR","string.isoDate":"{{#label}} must be in iso format","string.isoDuration":"{{#label}} must be a valid ISO 8601 duration","string.length":"{{#label}} length must be {{#limit}} characters long","string.lowercase":"{{#label}} must only contain lowercase characters","string.max":"{{#label}} length must be less than or equal to {{#limit}} characters long","string.min":"{{#label}} length must be at least {{#limit}} characters long","string.normalize":"{{#label}} must be unicode normalized in the {{#form}} form","string.token":"{{#label}} must only contain alpha-numeric and underscore characters","string.pattern.base":"{{#label}} with value {:[.]} fails to match the required pattern: {{#regex}}","string.pattern.name":"{{#label}} with value {:[.]} fails to match the {{#name}} pattern","string.pattern.invert.base":"{{#label}} with value {:[.]} matches the inverted pattern: {{#regex}}","string.pattern.invert.name":"{{#label}} with value {:[.]} matches the inverted {{#name}} pattern","string.trim":"{{#label}} must not have leading or trailing whitespace","string.uri":"{{#label}} must be a valid uri","string.uriCustomScheme":"{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern","string.uriRelativeOnly":"{{#label}} must be a valid relative uri","string.uppercase":"{{#label}} must only contain uppercase characters"}}),d.addressOptions=function(e){if(!e)return e;if(r(void 0===e.minDomainSegments||Number.isSafeInteger(e.minDomainSegments)&&e.minDomainSegments>0,"minDomainSegments must be a positive integer"),r(void 0===e.maxDomainSegments||Number.isSafeInteger(e.maxDomainSegments)&&e.maxDomainSegments>0,"maxDomainSegments must be a positive integer"),!1===e.tlds)return e;if(!0===e.tlds||void 0===e.tlds)return r(d.tlds,"Built-in TLD list disabled"),Object.assign({},e,d.tlds);r("object"==typeof e.tlds,"tlds must be true, false, or an object");const t=e.tlds.deny;if(t)return Array.isArray(t)&&(e=Object.assign({},e,{tlds:{deny:new Set(t)}})),r(e.tlds.deny instanceof Set,"tlds.deny must be an array, Set, or boolean"),r(!e.tlds.allow,"Cannot specify both tlds.allow and tlds.deny lists"),d.validateTlds(e.tlds.deny,"tlds.deny"),e;const n=e.tlds.allow;return n?!0===n?(r(d.tlds,"Built-in TLD list disabled"),Object.assign({},e,d.tlds)):(Array.isArray(n)&&(e=Object.assign({},e,{tlds:{allow:new Set(n)}})),r(e.tlds.allow instanceof Set,"tlds.allow must be an array, Set, or boolean"),d.validateTlds(e.tlds.allow,"tlds.allow"),e):e},d.validateTlds=function(e,t){for(const n of e)r(s.isValid(n,{minDomainSegments:1,maxDomainSegments:1}),`${t} must contain valid top level domain names`)},d.isoDate=function(e){if(!h.isIsoDate(e))return null;/.*T.*[+-]\d\d$/.test(e)&&(e+="00");const t=new Date(e);return isNaN(t.getTime())?null:t.toISOString()},d.length=function(e,t,n,s,i){return r(!i||!1,"Invalid encoding:",i),e.$_addRule({name:t,method:"length",args:{limit:n,encoding:i},operator:s})}},8826:(e,t,n)=>{const r=n(375),s=n(8068),i={};i.Map=class extends Map{slice(){return new i.Map(this)}},e.exports=s.extend({type:"symbol",terms:{map:{init:new i.Map}},coerce:{method(e,t){let{schema:n,error:r}=t;const s=n.$_terms.map.get(e);return s&&(e=s),n._flags.only&&"symbol"!=typeof e?{value:e,errors:r("symbol.map",{map:n.$_terms.map})}:{value:e}}},validate(e,t){let{error:n}=t;if("symbol"!=typeof e)return{value:e,errors:n("symbol.base")}},rules:{map:{method(e){e&&!e[Symbol.iterator]&&"object"==typeof e&&(e=Object.entries(e)),r(e&&e[Symbol.iterator],"Iterable must be an iterable or object");const t=this.clone(),n=[];for(const s of e){r(s&&s[Symbol.iterator],"Entry must be an iterable");const[e,i]=s;r("object"!=typeof e&&"function"!=typeof e&&"symbol"!=typeof e,"Key must not be of type object, function, or Symbol"),r("symbol"==typeof i,"Value must be a Symbol"),t.$_terms.map.set(e,i),n.push(i)}return t.valid(...n)}}},manifest:{build:(e,t)=>(t.map&&(e=e.map(t.map)),e)},messages:{"symbol.base":"{{#label}} must be a symbol","symbol.map":"{{#label}} must be one of {{#map}}"}})},8863:(e,t,n)=>{const r=n(375),s=n(8571),i=n(738),o=n(9621),a=n(8160),l=n(6354),c=n(493),u={result:Symbol("result")};t.entry=function(e,t,n){let s=a.defaults;n&&(r(void 0===n.warnings,"Cannot override warnings preference in synchronous validation"),r(void 0===n.artifacts,"Cannot override artifacts preference in synchronous validation"),s=a.preferences(a.defaults,n));const i=u.entry(e,t,s);r(!i.mainstay.externals.length,"Schema with external rules must use validateAsync()");const o={value:i.value};return i.error&&(o.error=i.error),i.mainstay.warnings.length&&(o.warning=l.details(i.mainstay.warnings)),i.mainstay.debug&&(o.debug=i.mainstay.debug),i.mainstay.artifacts&&(o.artifacts=i.mainstay.artifacts),o},t.entryAsync=async function(e,t,n){let r=a.defaults;n&&(r=a.preferences(a.defaults,n));const s=u.entry(e,t,r),i=s.mainstay;if(s.error)throw i.debug&&(s.error.debug=i.debug),s.error;if(i.externals.length){let t=s.value;for(const{method:s,path:a,label:l}of i.externals){let i,c,u=t;a.length&&(i=a[a.length-1],c=o(t,a.slice(0,-1)),u=c[i]);try{const e=await s(u,{prefs:n});if(void 0===e||e===u)continue;c?c[i]=e:t=e}catch(e){throw r.errors.label&&(e.message+=` (${l})`),e}}s.value=t}if(!r.warnings&&!r.debug&&!r.artifacts)return s.value;const c={value:s.value};return i.warnings.length&&(c.warning=l.details(i.warnings)),i.debug&&(c.debug=i.debug),i.artifacts&&(c.artifacts=i.artifacts),c},u.entry=function(e,n,r){const{tracer:s,cleanup:i}=u.tracer(n,r),o={externals:[],warnings:[],tracer:s,debug:r.debug?[]:null,links:n._ids._schemaChain?new Map:null},a=n._ids._schemaChain?[{schema:n}]:null,h=new c([],[],{mainstay:o,schemas:a}),d=t.validate(e,n,h,r);i&&n.$_root.untrace();const p=l.process(d.errors,e,r);return{value:d.value,error:p,mainstay:o}},u.tracer=function(e,t){return e.$_root._tracer?{tracer:e.$_root._tracer._register(e)}:t.debug?(r(e.$_root.trace,"Debug mode not supported"),{tracer:e.$_root.trace()._register(e),cleanup:!0}):{tracer:u.ignore}},t.validate=function(e,t,n,r){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};if(t.$_terms.whens&&(t=t._generate(e,n,r).schema),t._preferences&&(r=u.prefs(t,r)),t._cache&&r.cache){const r=t._cache.get(e);if(n.mainstay.tracer.debug(n,"validate","cached",!!r),r)return r}const i=(s,i,o)=>t.$_createError(s,e,i,o||n,r),o={original:e,prefs:r,schema:t,state:n,error:i,errorsArray:u.errorsArray,warn:(e,t,r)=>n.mainstay.warnings.push(i(e,t,r)),message:(s,i)=>t.$_createError("custom",e,i,n,r,{messages:s})};n.mainstay.tracer.entry(t,n);const l=t._definition;if(l.prepare&&void 0!==e&&r.convert){const t=l.prepare(e,o);if(t){if(n.mainstay.tracer.value(n,"prepare",e,t.value),t.errors)return u.finalize(t.value,[].concat(t.errors),o);e=t.value}}if(l.coerce&&void 0!==e&&r.convert&&(!l.coerce.from||l.coerce.from.includes(typeof e))){const t=l.coerce.method(e,o);if(t){if(n.mainstay.tracer.value(n,"coerced",e,t.value),t.errors)return u.finalize(t.value,[].concat(t.errors),o);e=t.value}}const c=t._flags.empty;c&&c.$_match(u.trim(e,t),n.nest(c),a.defaults)&&(n.mainstay.tracer.value(n,"empty",e,void 0),e=void 0);const h=s.presence||t._flags.presence||(t._flags._endedSwitch?null:r.presence);if(void 0===e){if("forbidden"===h)return u.finalize(e,null,o);if("required"===h)return u.finalize(e,[t.$_createError("any.required",e,null,n,r)],o);if("optional"===h){if(t._flags.default!==a.symbols.deepDefault)return u.finalize(e,null,o);n.mainstay.tracer.value(n,"default",e,{}),e={}}}else if("forbidden"===h)return u.finalize(e,[t.$_createError("any.unknown",e,null,n,r)],o);const d=[];if(t._valids){const s=t._valids.get(e,n,r,t._flags.insensitive);if(s)return r.convert&&(n.mainstay.tracer.value(n,"valids",e,s.value),e=s.value),n.mainstay.tracer.filter(t,n,"valid",s),u.finalize(e,null,o);if(t._flags.only){const s=t.$_createError("any.only",e,{valids:t._valids.values({display:!0})},n,r);if(r.abortEarly)return u.finalize(e,[s],o);d.push(s)}}if(t._invalids){const s=t._invalids.get(e,n,r,t._flags.insensitive);if(s){n.mainstay.tracer.filter(t,n,"invalid",s);const i=t.$_createError("any.invalid",e,{invalids:t._invalids.values({display:!0})},n,r);if(r.abortEarly)return u.finalize(e,[i],o);d.push(i)}}if(l.validate){const t=l.validate(e,o);if(t&&(n.mainstay.tracer.value(n,"base",e,t.value),e=t.value,t.errors)){if(!Array.isArray(t.errors))return d.push(t.errors),u.finalize(e,d,o);if(t.errors.length)return d.push(...t.errors),u.finalize(e,d,o)}}return t._rules.length?u.rules(e,d,o):u.finalize(e,d,o)},u.rules=function(e,t,n){const{schema:r,state:s,prefs:i}=n;for(const o of r._rules){const l=r._definition.rules[o.method];if(l.convert&&i.convert){s.mainstay.tracer.log(r,s,"rule",o.name,"full");continue}let c,h=o.args;if(o._resolve.length){h=Object.assign({},h);for(const t of o._resolve){const n=l.argsByName.get(t),o=h[t].resolve(e,s,i),u=n.normalize?n.normalize(o):o,d=a.validateArg(u,null,n);if(d){c=r.$_createError("any.ref",o,{arg:t,ref:h[t],reason:d},s,i);break}h[t]=u}}c=c||l.validate(e,n,h,o);const d=u.rule(c,o);if(d.errors){if(s.mainstay.tracer.log(r,s,"rule",o.name,"error"),o.warn){s.mainstay.warnings.push(...d.errors);continue}if(i.abortEarly)return u.finalize(e,d.errors,n);t.push(...d.errors)}else s.mainstay.tracer.log(r,s,"rule",o.name,"pass"),s.mainstay.tracer.value(s,"rule",e,d.value,o.name),e=d.value}return u.finalize(e,t,n)},u.rule=function(e,t){return e instanceof l.Report?(u.error(e,t),{errors:[e],value:null}):Array.isArray(e)&&e[a.symbols.errors]?(e.forEach((e=>u.error(e,t))),{errors:e,value:null}):{errors:null,value:e}},u.error=function(e,t){return t.message&&e._setTemplate(t.message),e},u.finalize=function(e,t,n){t=t||[];const{schema:s,state:i,prefs:o}=n;if(t.length){const r=u.default("failover",void 0,t,n);void 0!==r&&(i.mainstay.tracer.value(i,"failover",e,r),e=r,t=[])}if(t.length&&s._flags.error)if("function"==typeof s._flags.error){t=s._flags.error(t),Array.isArray(t)||(t=[t]);for(const e of t)r(e instanceof Error||e instanceof l.Report,"error() must return an Error object")}else t=[s._flags.error];if(void 0===e){const r=u.default("default",e,t,n);i.mainstay.tracer.value(i,"default",e,r),e=r}if(s._flags.cast&&void 0!==e){const t=s._definition.cast[s._flags.cast];if(t.from(e)){const r=t.to(e,n);i.mainstay.tracer.value(i,"cast",e,r,s._flags.cast),e=r}}if(s.$_terms.externals&&o.externals&&!1!==o._externals)for(const{method:e}of s.$_terms.externals)i.mainstay.externals.push({method:e,path:i.path,label:l.label(s._flags,i,o)});const a={value:e,errors:t.length?t:null};return s._flags.result&&(a.value="strip"===s._flags.result?void 0:n.original,i.mainstay.tracer.value(i,s._flags.result,e,a.value),i.shadow(e,s._flags.result)),s._cache&&!1!==o.cache&&!s._refs.length&&s._cache.set(n.original,a),void 0===e||a.errors||void 0===s._flags.artifact||(i.mainstay.artifacts=i.mainstay.artifacts||new Map,i.mainstay.artifacts.has(s._flags.artifact)||i.mainstay.artifacts.set(s._flags.artifact,[]),i.mainstay.artifacts.get(s._flags.artifact).push(i.path)),a},u.prefs=function(e,t){const n=t===a.defaults;return n&&e._preferences[a.symbols.prefs]?e._preferences[a.symbols.prefs]:(t=a.preferences(t,e._preferences),n&&(e._preferences[a.symbols.prefs]=t),t)},u.default=function(e,t,n,r){const{schema:i,state:o,prefs:l}=r,c=i._flags[e];if(l.noDefaults||void 0===c)return t;if(o.mainstay.tracer.log(i,o,"rule",e,"full"),!c)return c;if("function"==typeof c){const t=c.length?[s(o.ancestors[0]),r]:[];try{return c(...t)}catch(t){return void n.push(i.$_createError(`any.${e}`,null,{error:t},o,l))}}return"object"!=typeof c?c:c[a.symbols.literal]?c.literal:a.isResolvable(c)?c.resolve(t,o,l):s(c)},u.trim=function(e,t){if("string"!=typeof e)return e;const n=t.$_getRule("trim");return n&&n.args.enabled?e.trim():e},u.ignore={active:!1,debug:i,entry:i,filter:i,log:i,resolve:i,value:i},u.errorsArray=function(){const e=[];return e[a.symbols.errors]=!0,e}},2036:(e,t,n)=>{const r=n(375),s=n(9474),i=n(8160),o={};e.exports=o.Values=class{get length(){return this._values.size+this._refs.size}add(e,t){i.isResolvable(e)?this._refs.has(e)||(this._refs.add(e),t&&t.register(e)):this.has(e,null,null,!1)||(this._values.add(e),"string"==typeof e&&this._lowercase.set(e.toLowerCase(),e))}static merge(e,t,n){if(e=e||new o.Values,t){if(t._override)return t.clone();for(const n of[...t._values,...t._refs])e.add(n)}if(n)for(const t of[...n._values,...n._refs])e.remove(t);return e.length?e:null}remove(e){i.isResolvable(e)?this._refs.delete(e):(this._values.delete(e),"string"==typeof e&&this._lowercase.delete(e.toLowerCase()))}has(e,t,n,r){return!!this.get(e,t,n,r)}get(e,t,n,r){if(!this.length)return!1;if(this._values.has(e))return{value:e};if("string"==typeof e&&e&&r){const t=this._lowercase.get(e.toLowerCase());if(t)return{value:t}}if(!this._refs.size&&"object"!=typeof e)return!1;if("object"==typeof e)for(const t of this._values)if(s(t,e))return{value:t};if(t)for(const i of this._refs){const o=i.resolve(e,t,n,null,{in:!0});if(void 0===o)continue;const a=i.in&&"object"==typeof o?Array.isArray(o)?o:Object.keys(o):[o];for(const t of a)if(typeof t==typeof e)if(r&&e&&"string"==typeof e){if(t.toLowerCase()===e.toLowerCase())return{value:t,ref:i}}else if(s(t,e))return{value:t,ref:i}}return!1}override(){this._override=!0}values(e){if(e&&e.display){const e=[];for(const t of[...this._values,...this._refs])void 0!==t&&e.push(t);return e}return Array.from([...this._values,...this._refs])}clone(){const e=new o.Values(this._values,this._refs);return e._override=this._override,e}concat(e){r(!e._override,"Cannot concat override set of values");const t=new o.Values([...this._values,...e._values],[...this._refs,...e._refs]);return t._override=this._override,t}describe(){const e=[];this._override&&e.push({override:!0});for(const t of this._values.values())e.push(t&&"object"==typeof t?{value:t}:t);for(const t of this._refs.values())e.push(t.describe());return e}constructor(e,t){this._values=new Set(e),this._refs=new Set(t),this._lowercase=o.lowercases(e),this._override=!1}},o.Values.prototype[i.symbols.values]=!0,o.Values.prototype.slice=o.Values.prototype.clone,o.lowercases=function(e){const t=new Map;if(e)for(const n of e)"string"==typeof n&&t.set(n.toLowerCase(),n);return t}},978:(e,t,n)=>{const r=n(375),s=n(8571),i=n(1687),o=n(9621),a={};e.exports=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(r(e&&"object"==typeof e,"Invalid defaults value: must be an object"),r(!t||!0===t||"object"==typeof t,"Invalid source value: must be true, falsy or an object"),r("object"==typeof n,"Invalid options: must be an object"),!t)return null;if(n.shallow)return a.applyToDefaultsWithShallow(e,t,n);const o=s(e);if(!0===t)return o;const l=void 0!==n.nullOverride&&n.nullOverride;return i(o,t,{nullOverride:l,mergeArrays:!1})},a.applyToDefaultsWithShallow=function(e,t,n){const l=n.shallow;r(Array.isArray(l),"Invalid keys");const c=new Map,u=!0===t?null:new Set;for(let n of l){n=Array.isArray(n)?n:n.split(".");const r=o(e,n);r&&"object"==typeof r?c.set(r,u&&o(t,n)||r):u&&u.add(n)}const h=s(e,{},c);if(!u)return h;for(const e of u)a.reachCopy(h,t,e);const d=void 0!==n.nullOverride&&n.nullOverride;return i(h,t,{nullOverride:d,mergeArrays:!1})},a.reachCopy=function(e,t,n){for(const e of n){if(!(e in t))return;const n=t[e];if("object"!=typeof n||null===n)return;t=n}const r=t;let s=e;for(let e=0;e<n.length-1;++e){const t=n[e];"object"!=typeof s[t]&&(s[t]={}),s=s[t]}s[n[n.length-1]]=r}},375:(e,t,n)=>{const r=n(7916);e.exports=function(e){if(!e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];if(1===n.length&&n[0]instanceof Error)throw n[0];throw new r(n)}}},8571:(e,t,n)=>{const r=n(9621),s=n(4277),i=n(7043),o={needsProtoHack:new Set([s.set,s.map,s.weakSet,s.weakMap])};e.exports=o.clone=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if("object"!=typeof e||null===e)return e;let r=o.clone,a=n;if(t.shallow){if(!0!==t.shallow)return o.cloneWithShallow(e,t);r=e=>e}else if(a){const t=a.get(e);if(t)return t}else a=new Map;const l=s.getInternalProto(e);if(l===s.buffer)return!1;if(l===s.date)return new Date(e.getTime());if(l===s.regex)return new RegExp(e);const c=o.base(e,l,t);if(c===e)return e;if(a&&a.set(e,c),l===s.set)for(const n of e)c.add(r(n,t,a));else if(l===s.map)for(const[n,s]of e)c.set(n,r(s,t,a));const u=i.keys(e,t);for(const n of u){if("__proto__"===n)continue;if(l===s.array&&"length"===n){c.length=e.length;continue}const i=Object.getOwnPropertyDescriptor(e,n);i?i.get||i.set?Object.defineProperty(c,n,i):i.enumerable?c[n]=r(e[n],t,a):Object.defineProperty(c,n,{enumerable:!1,writable:!0,configurable:!0,value:r(e[n],t,a)}):Object.defineProperty(c,n,{enumerable:!0,writable:!0,configurable:!0,value:r(e[n],t,a)})}return c},o.cloneWithShallow=function(e,t){const n=t.shallow;(t=Object.assign({},t)).shallow=!1;const s=new Map;for(const t of n){const n=r(e,t);"object"!=typeof n&&"function"!=typeof n||s.set(n,n)}return o.clone(e,t,s)},o.base=function(e,t,n){if(!1===n.prototype)return o.needsProtoHack.has(t)?new t.constructor:t===s.array?[]:{};const r=Object.getPrototypeOf(e);if(r&&r.isImmutable)return e;if(t===s.array){const e=[];return r!==t&&Object.setPrototypeOf(e,r),e}if(o.needsProtoHack.has(t)){const e=new r.constructor;return r!==t&&Object.setPrototypeOf(e,r),e}return Object.create(r)}},9474:(e,t,n)=>{const r=n(4277),s={mismatched:null};e.exports=function(e,t,n){return n=Object.assign({prototype:!0},n),!!s.isDeepEqual(e,t,n,[])},s.isDeepEqual=function(e,t,n,i){if(e===t)return 0!==e||1/e==1/t;const o=typeof e;if(o!==typeof t)return!1;if(null===e||null===t)return!1;if("function"===o){if(!n.deepFunction||e.toString()!==t.toString())return!1}else if("object"!==o)return e!=e&&t!=t;const a=s.getSharedType(e,t,!!n.prototype);switch(a){case r.buffer:return!1;case r.promise:return e===t;case r.regex:return e.toString()===t.toString();case s.mismatched:return!1}for(let n=i.length-1;n>=0;--n)if(i[n].isSame(e,t))return!0;i.push(new s.SeenEntry(e,t));try{return!!s.isDeepEqualObj(a,e,t,n,i)}finally{i.pop()}},s.getSharedType=function(e,t,n){if(n)return Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?s.mismatched:r.getInternalProto(e);const i=r.getInternalProto(e);return i!==r.getInternalProto(t)?s.mismatched:i},s.valueOf=function(e){const t=e.valueOf;if(void 0===t)return e;try{return t.call(e)}catch(e){return e}},s.hasOwnEnumerableProperty=function(e,t){return Object.prototype.propertyIsEnumerable.call(e,t)},s.isSetSimpleEqual=function(e,t){for(const n of Set.prototype.values.call(e))if(!Set.prototype.has.call(t,n))return!1;return!0},s.isDeepEqualObj=function(e,t,n,i,o){const{isDeepEqual:a,valueOf:l,hasOwnEnumerableProperty:c}=s,{keys:u,getOwnPropertySymbols:h}=Object;if(e===r.array){if(!i.part){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!a(t[e],n[e],i,o))return!1;return!0}for(const e of t)for(const t of n)if(a(e,t,i,o))return!0}else if(e===r.set){if(t.size!==n.size)return!1;if(!s.isSetSimpleEqual(t,n)){const e=new Set(Set.prototype.values.call(n));for(const n of Set.prototype.values.call(t)){if(e.delete(n))continue;let t=!1;for(const r of e)if(a(n,r,i,o)){e.delete(r),t=!0;break}if(!t)return!1}}}else if(e===r.map){if(t.size!==n.size)return!1;for(const[e,r]of Map.prototype.entries.call(t)){if(void 0===r&&!Map.prototype.has.call(n,e))return!1;if(!a(r,Map.prototype.get.call(n,e),i,o))return!1}}else if(e===r.error&&(t.name!==n.name||t.message!==n.message))return!1;const d=l(t),p=l(n);if((t!==d||n!==p)&&!a(d,p,i,o))return!1;const f=u(t);if(!i.part&&f.length!==u(n).length&&!i.skip)return!1;let m=0;for(const e of f)if(i.skip&&i.skip.includes(e))void 0===n[e]&&++m;else{if(!c(n,e))return!1;if(!a(t[e],n[e],i,o))return!1}if(!i.part&&f.length-m!==u(n).length)return!1;if(!1!==i.symbols){const e=h(t),r=new Set(h(n));for(const s of e){if(!i.skip||!i.skip.includes(s))if(c(t,s)){if(!c(n,s))return!1;if(!a(t[s],n[s],i,o))return!1}else if(c(n,s))return!1;r.delete(s)}for(const e of r)if(c(n,e))return!1}return!0},s.SeenEntry=class{isSame(e,t){return this.obj===e&&this.ref===t}constructor(e,t){this.obj=e,this.ref=t}}},7916:(e,t,n)=>{const r=n(8761);e.exports=class extends Error{constructor(e){super(e.filter((e=>""!==e)).map((e=>"string"==typeof e?e:e instanceof Error?e.message:r(e))).join(" ")||"Unknown error"),"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t.assert)}}},5277:e=>{const t={};e.exports=function(e){if(!e)return"";let n="";for(let r=0;r<e.length;++r){const s=e.charCodeAt(r);t.isSafe(s)?n+=e[r]:n+=t.escapeHtmlChar(s)}return n},t.escapeHtmlChar=function(e){return t.namedHtml.get(e)||(e>=256?"&#"+e+";":`&#x${e.toString(16).padStart(2,"0")};`)},t.isSafe=function(e){return t.safeCharCodes.has(e)},t.namedHtml=new Map([[38,"&amp;"],[60,"&lt;"],[62,"&gt;"],[34,"&quot;"],[160,"&nbsp;"],[162,"&cent;"],[163,"&pound;"],[164,"&curren;"],[169,"&copy;"],[174,"&reg;"]]),t.safeCharCodes=function(){const e=new Set;for(let t=32;t<123;++t)(t>=97||t>=65&&t<=90||t>=48&&t<=57||32===t||46===t||44===t||45===t||58===t||95===t)&&e.add(t);return e}()},6064:e=>{e.exports=function(e){return e.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g,"\\$&")}},738:e=>{e.exports=function(){}},1687:(e,t,n)=>{const r=n(375),s=n(8571),i=n(7043),o={};e.exports=o.merge=function(e,t,n){if(r(e&&"object"==typeof e,"Invalid target value: must be an object"),r(null==t||"object"==typeof t,"Invalid source value: must be null, undefined, or an object"),!t)return e;if(n=Object.assign({nullOverride:!0,mergeArrays:!0},n),Array.isArray(t)){r(Array.isArray(e),"Cannot merge array onto an object"),n.mergeArrays||(e.length=0);for(let r=0;r<t.length;++r)e.push(s(t[r],{symbols:n.symbols}));return e}const a=i.keys(t,n);for(let r=0;r<a.length;++r){const i=a[r];if("__proto__"===i||!Object.prototype.propertyIsEnumerable.call(t,i))continue;const l=t[i];if(l&&"object"==typeof l){if(e[i]===l)continue;!e[i]||"object"!=typeof e[i]||Array.isArray(e[i])!==Array.isArray(l)||l instanceof Date||l instanceof RegExp?e[i]=s(l,{symbols:n.symbols}):o.merge(e[i],l,n)}else(null!=l||n.nullOverride)&&(e[i]=l)}return e}},9621:(e,t,n)=>{const r=n(375),s={};e.exports=function(e,t,n){if(!1===t||null==t)return e;"string"==typeof(n=n||{})&&(n={separator:n});const i=Array.isArray(t);r(!i||!n.separator,"Separator option is not valid for array-based chain");const o=i?t:t.split(n.separator||".");let a=e;for(let e=0;e<o.length;++e){let i=o[e];const l=n.iterables&&s.iterables(a);if(Array.isArray(a)||"set"===l){const e=Number(i);Number.isInteger(e)&&(i=e<0?a.length+e:e)}if(!a||"function"==typeof a&&!1===n.functions||!l&&void 0===a[i]){r(!n.strict||e+1===o.length,"Missing segment",i,"in reach path ",t),r("object"==typeof a||!0===n.functions||"function"!=typeof a,"Invalid segment",i,"in reach path ",t),a=n.default;break}a=l?"set"===l?[...a][i]:a.get(i):a[i]}return a},s.iterables=function(e){return e instanceof Set?"set":e instanceof Map?"map":void 0}},8761:e=>{e.exports=function(){try{return JSON.stringify(...arguments)}catch(e){return"[Cannot display object: "+e.message+"]"}}},4277:(e,t)=>{const n={};t=e.exports={array:Array.prototype,buffer:!1,date:Date.prototype,error:Error.prototype,generic:Object.prototype,map:Map.prototype,promise:Promise.prototype,regex:RegExp.prototype,set:Set.prototype,weakMap:WeakMap.prototype,weakSet:WeakSet.prototype},n.typeMap=new Map([["[object Error]",t.error],["[object Map]",t.map],["[object Promise]",t.promise],["[object Set]",t.set],["[object WeakMap]",t.weakMap],["[object WeakSet]",t.weakSet]]),t.getInternalProto=function(e){if(Array.isArray(e))return t.array;if(e instanceof Date)return t.date;if(e instanceof RegExp)return t.regex;if(e instanceof Error)return t.error;const r=Object.prototype.toString.call(e);return n.typeMap.get(r)||t.generic}},7043:(e,t)=>{t.keys=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return!1!==t.symbols?Reflect.ownKeys(e):Object.getOwnPropertyNames(e)}},3652:(e,t,n)=>{const r=n(375),s={};t.Sorter=class{add(e,t){const n=[].concat((t=t||{}).before||[]),s=[].concat(t.after||[]),i=t.group||"?",o=t.sort||0;r(!n.includes(i),`Item cannot come before itself: ${i}`),r(!n.includes("?"),"Item cannot come before unassociated items"),r(!s.includes(i),`Item cannot come after itself: ${i}`),r(!s.includes("?"),"Item cannot come after unassociated items"),Array.isArray(e)||(e=[e]);for(const t of e){const e={seq:this._items.length,sort:o,before:n,after:s,group:i,node:t};this._items.push(e)}if(!t.manual){const e=this._sort();r(e,"item","?"!==i?`added into group ${i}`:"","created a dependencies error")}return this.nodes}merge(e){Array.isArray(e)||(e=[e]);for(const t of e)if(t)for(const e of t._items)this._items.push(Object.assign({},e));this._items.sort(s.mergeSort);for(let e=0;e<this._items.length;++e)this._items[e].seq=e;const t=this._sort();return r(t,"merge created a dependencies error"),this.nodes}sort(){const e=this._sort();return r(e,"sort created a dependencies error"),this.nodes}_sort(){const e={},t=Object.create(null),n=Object.create(null);for(const r of this._items){const s=r.seq,i=r.group;n[i]=n[i]||[],n[i].push(s),e[s]=r.before;for(const e of r.after)t[e]=t[e]||[],t[e].push(s)}for(const t in e){const r=[];for(const s in e[t]){const i=e[t][s];n[i]=n[i]||[],r.push(...n[i])}e[t]=r}for(const r in t)if(n[r])for(const s of n[r])e[s].push(...t[r]);const r={};for(const t in e){const n=e[t];for(const e of n)r[e]=r[e]||[],r[e].push(t)}const s={},i=[];for(let e=0;e<this._items.length;++e){let t=e;if(r[e]){t=null;for(let e=0;e<this._items.length;++e){if(!0===s[e])continue;r[e]||(r[e]=[]);const n=r[e].length;let i=0;for(let t=0;t<n;++t)s[r[e][t]]&&++i;if(i===n){t=e;break}}}null!==t&&(s[t]=!0,i.push(t))}if(i.length!==this._items.length)return!1;const o={};for(const e of this._items)o[e.seq]=e;this._items=[],this.nodes=[];for(const e of i){const t=o[e];this.nodes.push(t.node),this._items.push(t)}return!0}constructor(){this._items=[],this.nodes=[]}},s.mergeSort=(e,t)=>e.sort===t.sort?0:e.sort<t.sort?-1:1},5380:(e,t,n)=>{const r=n(443),s=n(2178),i={minDomainSegments:2,nonAsciiRx:/[^\x00-\x7f]/,domainControlRx:/[\x00-\x20@\:\/\\#!\$&\'\(\)\*\+,;=\?]/,tldSegmentRx:/^[a-zA-Z](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/,domainSegmentRx:/^[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/,URL:r.URL||URL};t.analyze=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return s.code("DOMAIN_NON_EMPTY_STRING");if("string"!=typeof e)throw new Error("Invalid input: domain must be a string");if(e.length>256)return s.code("DOMAIN_TOO_LONG");const n=!i.nonAsciiRx.test(e);if(!n){if(!1===t.allowUnicode)return s.code("DOMAIN_INVALID_UNICODE_CHARS");e=e.normalize("NFC")}if(i.domainControlRx.test(e))return s.code("DOMAIN_INVALID_CHARS");e=i.punycode(e),t.allowFullyQualified&&"."===e[e.length-1]&&(e=e.slice(0,-1));const r=t.minDomainSegments||i.minDomainSegments,o=e.split(".");if(o.length<r)return s.code("DOMAIN_SEGMENTS_COUNT");if(t.maxDomainSegments&&o.length>t.maxDomainSegments)return s.code("DOMAIN_SEGMENTS_COUNT_MAX");const a=t.tlds;if(a){const e=o[o.length-1].toLowerCase();if(a.deny&&a.deny.has(e)||a.allow&&!a.allow.has(e))return s.code("DOMAIN_FORBIDDEN_TLDS")}for(let e=0;e<o.length;++e){const t=o[e];if(!t.length)return s.code("DOMAIN_EMPTY_SEGMENT");if(t.length>63)return s.code("DOMAIN_LONG_SEGMENT");if(e<o.length-1){if(!i.domainSegmentRx.test(t))return s.code("DOMAIN_INVALID_CHARS")}else if(!i.tldSegmentRx.test(t))return s.code("DOMAIN_INVALID_TLDS_CHARS")}return null},t.isValid=function(e,n){return!t.analyze(e,n)},i.punycode=function(e){e.includes("%")&&(e=e.replace(/%/g,"%25"));try{return new i.URL(`http://${e}`).host}catch(t){return e}}},1745:(e,t,n)=>{const r=n(9848),s=n(5380),i=n(2178),o={nonAsciiRx:/[^\x00-\x7f]/,encoder:new(r.TextEncoder||TextEncoder)};t.analyze=function(e,t){return o.email(e,t)},t.isValid=function(e,t){return!o.email(e,t)},o.email=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw new Error("Invalid input: email must be a string");if(!e)return i.code("EMPTY_STRING");const n=!o.nonAsciiRx.test(e);if(!n){if(!1===t.allowUnicode)return i.code("FORBIDDEN_UNICODE");e=e.normalize("NFC")}const r=e.split("@");if(2!==r.length)return r.length>2?i.code("MULTIPLE_AT_CHAR"):i.code("MISSING_AT_CHAR");const[a,l]=r;if(!a)return i.code("EMPTY_LOCAL");if(!t.ignoreLength){if(e.length>254)return i.code("ADDRESS_TOO_LONG");if(o.encoder.encode(a).length>64)return i.code("LOCAL_TOO_LONG")}return o.local(a,n)||s.analyze(l,t)},o.local=function(e,t){const n=e.split(".");for(const e of n){if(!e.length)return i.code("EMPTY_LOCAL_SEGMENT");if(t){if(!o.atextRx.test(e))return i.code("INVALID_LOCAL_CHARS")}else for(const t of e){if(o.atextRx.test(t))continue;const e=o.binary(t);if(!o.atomRx.test(e))return i.code("INVALID_LOCAL_CHARS")}}},o.binary=function(e){return Array.from(o.encoder.encode(e)).map((e=>String.fromCharCode(e))).join("")},o.atextRx=/^[\w!#\$%&'\*\+\-/=\?\^`\{\|\}~]+$/,o.atomRx=new RegExp(["(?:[\\xc2-\\xdf][\\x80-\\xbf])","(?:\\xe0[\\xa0-\\xbf][\\x80-\\xbf])|(?:[\\xe1-\\xec][\\x80-\\xbf]{2})|(?:\\xed[\\x80-\\x9f][\\x80-\\xbf])|(?:[\\xee-\\xef][\\x80-\\xbf]{2})","(?:\\xf0[\\x90-\\xbf][\\x80-\\xbf]{2})|(?:[\\xf1-\\xf3][\\x80-\\xbf]{3})|(?:\\xf4[\\x80-\\x8f][\\x80-\\xbf]{2})"].join("|"))},2178:(e,t)=>{t.codes={EMPTY_STRING:"Address must be a non-empty string",FORBIDDEN_UNICODE:"Address contains forbidden Unicode characters",MULTIPLE_AT_CHAR:"Address cannot contain more than one @ character",MISSING_AT_CHAR:"Address must contain one @ character",EMPTY_LOCAL:"Address local part cannot be empty",ADDRESS_TOO_LONG:"Address too long",LOCAL_TOO_LONG:"Address local part too long",EMPTY_LOCAL_SEGMENT:"Address local part contains empty dot-separated segment",INVALID_LOCAL_CHARS:"Address local part contains invalid character",DOMAIN_NON_EMPTY_STRING:"Domain must be a non-empty string",DOMAIN_TOO_LONG:"Domain too long",DOMAIN_INVALID_UNICODE_CHARS:"Domain contains forbidden Unicode characters",DOMAIN_INVALID_CHARS:"Domain contains invalid character",DOMAIN_INVALID_TLDS_CHARS:"Domain contains invalid tld character",DOMAIN_SEGMENTS_COUNT:"Domain lacks the minimum required number of segments",DOMAIN_SEGMENTS_COUNT_MAX:"Domain contains too many segments",DOMAIN_FORBIDDEN_TLDS:"Domain uses forbidden TLD",DOMAIN_EMPTY_SEGMENT:"Domain contains empty dot-separated segment",DOMAIN_LONG_SEGMENT:"Domain contains dot-separated segment that is too long"},t.code=function(e){return{code:e,error:t.codes[e]}}},9959:(e,t,n)=>{const r=n(375),s=n(5752);t.regex=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(void 0===e.cidr||"string"==typeof e.cidr,"options.cidr must be a string");const t=e.cidr?e.cidr.toLowerCase():"optional";r(["required","optional","forbidden"].includes(t),"options.cidr must be one of required, optional, forbidden"),r(void 0===e.version||"string"==typeof e.version||Array.isArray(e.version),"options.version must be a string or an array of string");let n=e.version||["ipv4","ipv6","ipvfuture"];Array.isArray(n)||(n=[n]),r(n.length>=1,"options.version must have at least 1 version specified");for(let e=0;e<n.length;++e)r("string"==typeof n[e],"options.version must only contain strings"),n[e]=n[e].toLowerCase(),r(["ipv4","ipv6","ipvfuture"].includes(n[e]),"options.version contains unknown version "+n[e]+" - must be one of ipv4, ipv6, ipvfuture");n=Array.from(new Set(n));const i=n.map((e=>{if("forbidden"===t)return s.ip[e];const n=`\\/${"ipv4"===e?s.ip.v4Cidr:s.ip.v6Cidr}`;return"required"===t?`${s.ip[e]}${n}`:`${s.ip[e]}(?:${n})?`})),o=`(?:${i.join("|")})`,a=new RegExp(`^${o}$`);return{cidr:t,versions:n,regex:a,raw:o}}},5752:(e,t,n)=>{const r=n(375),s=n(6064),i={generate:function(){const e={},t="!\\$&'\\(\\)\\*\\+,;=",n="\\w-\\.~%\\dA-Fa-f"+t+":@",r="(?:0{0,2}\\d|0?[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])";e.ipv4address="(?:"+r+"\\.){3}"+r;const s="[\\dA-Fa-f]{1,4}",i="(?:"+s+":"+s+"|"+e.ipv4address+")",o="(?:"+s+":){6}"+i,a="::(?:"+s+":){5}"+i,l="(?:"+s+")?::(?:"+s+":){4}"+i,c="(?:(?:"+s+":){0,1}"+s+")?::(?:"+s+":){3}"+i,u="(?:(?:"+s+":){0,2}"+s+")?::(?:"+s+":){2}"+i,h="(?:(?:"+s+":){0,3}"+s+")?::"+s+":"+i,d="(?:(?:"+s+":){0,4}"+s+")?::"+i;e.ipv4Cidr="(?:\\d|[1-2]\\d|3[0-2])",e.ipv6Cidr="(?:0{0,2}\\d|0?[1-9]\\d|1[01]\\d|12[0-8])",e.ipv6address="(?:"+o+"|"+a+"|"+l+"|"+c+"|"+u+"|"+h+"|"+d+"|(?:(?:[\\dA-Fa-f]{1,4}:){0,5}[\\dA-Fa-f]{1,4})?::[\\dA-Fa-f]{1,4}|(?:(?:[\\dA-Fa-f]{1,4}:){0,6}[\\dA-Fa-f]{1,4})?::)",e.ipvFuture="v[\\dA-Fa-f]+\\.[\\w-\\.~"+t+":]+",e.scheme="[a-zA-Z][a-zA-Z\\d+-\\.]*",e.schemeRegex=new RegExp(e.scheme);const p="[\\w-\\.~%\\dA-Fa-f"+t+":]*",f="(?:\\[(?:"+e.ipv6address+"|"+e.ipvFuture+")\\]|"+e.ipv4address+"|[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=]{1,255})",m="(?:"+p+"@)?"+f+"(?::\\d*)?",g="(?:"+p+"@)?("+f+")(?::\\d*)?",_="[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]+",y="(?:\\/[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*",v="\\/(?:"+_+y+")?",b=_+y,w="[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=@]+"+y;return e.hierPart="(?:(?:\\/\\/"+m+y+")|"+v+"|"+b+"|(?:\\/\\/\\/[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*(?:\\/[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*))",e.hierPartCapture="(?:(?:\\/\\/"+g+y+")|"+v+"|"+b+")",e.relativeRef="(?:(?:\\/\\/"+m+y+")|"+v+"|"+w+"|)",e.relativeRefCapture="(?:(?:\\/\\/"+g+y+")|"+v+"|"+w+"|)",e.query="["+n+"\\/\\?]*(?=#|$)",e.queryWithSquareBrackets="["+n+"\\[\\]\\/\\?]*(?=#|$)",e.fragment="["+n+"\\/\\?]*",e}};i.rfc3986=i.generate(),t.ip={v4Cidr:i.rfc3986.ipv4Cidr,v6Cidr:i.rfc3986.ipv6Cidr,ipv4:i.rfc3986.ipv4address,ipv6:i.rfc3986.ipv6address,ipvfuture:i.rfc3986.ipvFuture},i.createRegex=function(e){const t=i.rfc3986,n="(?:\\?"+(e.allowQuerySquareBrackets?t.queryWithSquareBrackets:t.query)+")?(?:#"+t.fragment+")?",o=e.domain?t.relativeRefCapture:t.relativeRef;if(e.relativeOnly)return i.wrap(o+n);let a="";if(e.scheme){r(e.scheme instanceof RegExp||"string"==typeof e.scheme||Array.isArray(e.scheme),"scheme must be a RegExp, String, or Array");const n=[].concat(e.scheme);r(n.length>=1,"scheme must have at least 1 scheme specified");const i=[];for(let e=0;e<n.length;++e){const o=n[e];r(o instanceof RegExp||"string"==typeof o,"scheme at position "+e+" must be a RegExp or String"),o instanceof RegExp?i.push(o.source.toString()):(r(t.schemeRegex.test(o),"scheme at position "+e+" must be a valid scheme"),i.push(s(o)))}a=i.join("|")}const l="(?:"+(a?"(?:"+a+")":t.scheme)+":"+(e.domain?t.hierPartCapture:t.hierPart)+")",c=e.allowRelative?"(?:"+l+"|"+o+")":l;return i.wrap(c+n,a)},i.wrap=function(e,t){return{raw:e=`(?=.)(?!https?:/(?:$|[^/]))(?!https?:///)(?!https?:[^/])${e}`,regex:new RegExp(`^${e}$`),scheme:t}},i.uriRegex=i.createRegex({}),t.regex=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.scheme||e.allowRelative||e.relativeOnly||e.allowQuerySquareBrackets||e.domain?i.createRegex(e):i.uriRegex}},1447:(e,t)=>{const n={operators:["!","^","*","/","%","+","-","<","<=",">",">=","==","!=","&&","||","??"],operatorCharacters:["!","^","*","/","%","+","-","<","=",">","&","|","?"],operatorsOrder:[["^"],["*","/","%"],["+","-"],["<","<=",">",">="],["==","!="],["&&"],["||","??"]],operatorsPrefix:["!","n"],literals:{'"':'"',"`":"`","'":"'","[":"]"},numberRx:/^(?:[0-9]*\.?[0-9]*){1}$/,tokenRx:/^[\w\$\#\.\@\:\{\}]+$/,symbol:Symbol("formula"),settings:Symbol("settings")};t.Parser=class{_parse(e){let r=[],s="",i=0,o=!1;const a=e=>{if(i)throw new Error("Formula missing closing parenthesis");const a=r.length?r[r.length-1]:null;if(o||s||e){if(a&&"reference"===a.type&&")"===e)return a.type="function",a.value=this._subFormula(s,a.value),void(s="");if(")"===e){const e=new t.Parser(s,this.settings);r.push({type:"segment",value:e})}else if(o){if("]"===o)return r.push({type:"reference",value:s}),void(s="");r.push({type:"literal",value:s})}else if(n.operatorCharacters.includes(s))a&&"operator"===a.type&&n.operators.includes(a.value+s)?a.value+=s:r.push({type:"operator",value:s});else if(s.match(n.numberRx))r.push({type:"constant",value:parseFloat(s)});else if(void 0!==this.settings.constants[s])r.push({type:"constant",value:this.settings.constants[s]});else{if(!s.match(n.tokenRx))throw new Error(`Formula contains invalid token: ${s}`);r.push({type:"reference",value:s})}s=""}};for(const t of e)o?t===o?(a(),o=!1):s+=t:i?"("===t?(s+=t,++i):")"===t?(--i,i?s+=t:a(t)):s+=t:t in n.literals?o=n.literals[t]:"("===t?(a(),++i):n.operatorCharacters.includes(t)?(a(),s=t,a()):" "!==t?s+=t:a();a(),r=r.map(((e,t)=>"operator"!==e.type||"-"!==e.value||t&&"operator"!==r[t-1].type?e:{type:"operator",value:"n"}));let l=!1;for(const e of r){if("operator"===e.type){if(n.operatorsPrefix.includes(e.value))continue;if(!l)throw new Error("Formula contains an operator in invalid position");if(!n.operators.includes(e.value))throw new Error(`Formula contains an unknown operator ${e.value}`)}else if(l)throw new Error("Formula missing expected operator");l=!l}if(!l)throw new Error("Formula contains invalid trailing operator");1===r.length&&["reference","literal","constant"].includes(r[0].type)&&(this.single={type:"reference"===r[0].type?"reference":"value",value:r[0].value}),this._parts=r.map((e=>{if("operator"===e.type)return n.operatorsPrefix.includes(e.value)?e:e.value;if("reference"!==e.type)return e.value;if(this.settings.tokenRx&&!this.settings.tokenRx.test(e.value))throw new Error(`Formula contains invalid reference ${e.value}`);return this.settings.reference?this.settings.reference(e.value):n.reference(e.value)}))}_subFormula(e,r){const s=this.settings.functions[r];if("function"!=typeof s)throw new Error(`Formula contains unknown function ${r}`);let i=[];if(e){let t="",s=0,o=!1;const a=()=>{if(!t)throw new Error(`Formula contains function ${r} with invalid arguments ${e}`);i.push(t),t=""};for(let r=0;r<e.length;++r){const i=e[r];o?(t+=i,i===o&&(o=!1)):i in n.literals&&!s?(t+=i,o=n.literals[i]):","!==i||s?(t+=i,"("===i?++s:")"===i&&--s):a()}a()}return i=i.map((e=>new t.Parser(e,this.settings))),function(e){const t=[];for(const n of i)t.push(n.evaluate(e));return s.call(e,...t)}}evaluate(e){const t=this._parts.slice();for(let r=t.length-2;r>=0;--r){const s=t[r];if(s&&"operator"===s.type){const i=t[r+1];t.splice(r+1,1);const o=n.evaluate(i,e);t[r]=n.single(s.value,o)}}return n.operatorsOrder.forEach((r=>{for(let s=1;s<t.length-1;)if(r.includes(t[s])){const r=t[s],i=n.evaluate(t[s-1],e),o=n.evaluate(t[s+1],e);t.splice(s,2);const a=n.calculate(r,i,o);t[s-1]=0===a?0:a}else s+=2})),n.evaluate(t[0],e)}constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t[n.settings]&&t.constants)for(const e in t.constants){const n=t.constants[e];if(null!==n&&!["boolean","number","string"].includes(typeof n))throw new Error(`Formula constant ${e} contains invalid ${typeof n} value type`)}this.settings=t[n.settings]?t:Object.assign({[n.settings]:!0,constants:{},functions:{}},t),this.single=null,this._parts=null,this._parse(e)}},t.Parser.prototype[n.symbol]=!0,n.reference=function(e){return function(t){return t&&void 0!==t[e]?t[e]:null}},n.evaluate=function(e,t){return null===e?null:"function"==typeof e?e(t):e[n.symbol]?e.evaluate(t):e},n.single=function(e,t){if("!"===e)return!t;const n=-t;return 0===n?0:n},n.calculate=function(e,t,r){if("??"===e)return n.exists(t)?t:r;if("string"==typeof t||"string"==typeof r){if("+"===e)return(t=n.exists(t)?t:"")+(n.exists(r)?r:"")}else switch(e){case"^":return Math.pow(t,r);case"*":return t*r;case"/":return t/r;case"%":return t%r;case"+":return t+r;case"-":return t-r}switch(e){case"<":return t<r;case"<=":return t<=r;case">":return t>r;case">=":return t>=r;case"==":return t===r;case"!=":return t!==r;case"&&":return t&&r;case"||":return t||r}return null},n.exists=function(e){return null!=e}},9926:()=>{},5688:()=>{},9708:()=>{},1152:()=>{},443:()=>{},9848:()=>{},5934:e=>{e.exports={version:"17.6.4"}}},t={},function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(5107)},e.exports=n()}));
//# sourceMappingURL=index.ad1e56cb.js.map
