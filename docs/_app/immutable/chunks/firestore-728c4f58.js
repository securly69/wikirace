import{a2 as ar}from"./singletons-8bf7edb0.js";function Zc(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}const Wp=ar({route:[],id:"",state:"waiting",players:[]}),zp=ar({}),Hp=ar(""),Gp=ar("");/**
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
 *//**
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
 */const pa=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xc=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ya={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,w=c&63;u||(w=64,o||(f=64)),r.push(n[l],n[h],n[f],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),c!==64){const w=a<<4&240|c>>2;if(r.push(w),h!==64){const T=c<<6&192|h;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},tl=function(t){const e=pa(t);return ya.encodeByteArray(e,!0)},Wn=function(t){return tl(t).replace(/\./g,"")},el=function(t){try{return ya.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function nl(){return typeof indexedDB=="object"}function rl(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function il(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sl=()=>il().__FIREBASE_DEFAULTS__,ol=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},al=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&el(t[1]);return e&&JSON.parse(e)},va=()=>{try{return sl()||ol()||al()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ul=t=>{var e,n;return(n=(e=va())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cl=t=>{const e=ul(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ll=()=>{var t;return(t=va())===null||t===void 0?void 0:t.config};/**
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
 */class hl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function fl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Wn(JSON.stringify(n)),Wn(JSON.stringify(o)),a].join(".")}/**
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
 */const dl="FirebaseError";class Fe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dl,Object.setPrototypeOf(this,Fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wa.prototype.create)}}class wa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gl(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Fe(i,a,r)}}function gl(t,e){return t.replace(ml,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ml=/\{\$([^}]+)}/g;function ki(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yo(s)&&yo(o)){if(!ki(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yo(t){return t!==null&&typeof t=="object"}/**
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
 */function $t(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ae="[DEFAULT]";/**
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
 */class pl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vl(e))try{this.getOrInitializeService({instanceIdentifier:ae})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ae){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ae){return this.instances.has(e)}getOptions(e=ae){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yl(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ae){return this.component?this.component.multipleInstances?e:ae:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yl(t){return t===ae?void 0:t}function vl(t){return t.instantiationMode==="EAGER"}/**
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
 */class wl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const El={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Il=G.INFO,bl={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Sl=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bl[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ea{constructor(e){this.name=e,this._logLevel=Il,this._logHandler=Sl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?El[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Tl=(t,e)=>e.some(n=>t instanceof n);let vo,wo;function _l(){return vo||(vo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Al(){return wo||(wo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ia=new WeakMap,Ui=new WeakMap,ba=new WeakMap,wi=new WeakMap,ls=new WeakMap;function Cl(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ia.set(n,t)}).catch(()=>{}),ls.set(e,t),e}function Dl(t){if(Ui.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ui.set(t,e)}let Fi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ui.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ba.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rl(t){Fi=t(Fi)}function Nl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ei(this),e,...n);return ba.set(r,e.sort?e.sort():[e]),Xt(r)}:Al().includes(t)?function(...e){return t.apply(Ei(this),e),Xt(Ia.get(this))}:function(...e){return Xt(t.apply(Ei(this),e))}}function Ol(t){return typeof t=="function"?Nl(t):(t instanceof IDBTransaction&&Dl(t),Tl(t,_l())?new Proxy(t,Fi):t)}function Xt(t){if(t instanceof IDBRequest)return Cl(t);if(wi.has(t))return wi.get(t);const e=Ol(t);return e!==t&&(wi.set(t,e),ls.set(e,t)),e}const Ei=t=>ls.get(t);function Ml(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Xt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Xt(o.result),u.oldVersion,u.newVersion,Xt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ll=["get","getKey","getAll","getAllKeys","count"],kl=["put","add","delete","clear"],Ii=new Map;function Eo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ii.get(e))return Ii.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=kl.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ll.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Ii.set(e,s),s}Rl(t=>({...t,get:(e,n,r)=>Eo(e,n)||t.get(e,n,r),has:(e,n)=>!!Eo(e,n)||t.has(e,n)}));/**
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
 */class Ul{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fl(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Fl(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pi="@firebase/app",Io="0.8.2";/**
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
 */const ge=new Ea("@firebase/app"),Pl="@firebase/app-compat",Vl="@firebase/analytics-compat",ql="@firebase/analytics",Bl="@firebase/app-check-compat",jl="@firebase/app-check",$l="@firebase/auth",Kl="@firebase/auth-compat",Wl="@firebase/database",zl="@firebase/database-compat",Hl="@firebase/functions",Gl="@firebase/functions-compat",Ql="@firebase/installations",Xl="@firebase/installations-compat",Yl="@firebase/messaging",Jl="@firebase/messaging-compat",Zl="@firebase/performance",xl="@firebase/performance-compat",th="@firebase/remote-config",eh="@firebase/remote-config-compat",nh="@firebase/storage",rh="@firebase/storage-compat",ih="@firebase/firestore",sh="@firebase/firestore-compat",oh="firebase",ah="9.12.1";/**
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
 */const Vi="[DEFAULT]",uh={[Pi]:"fire-core",[Pl]:"fire-core-compat",[ql]:"fire-analytics",[Vl]:"fire-analytics-compat",[jl]:"fire-app-check",[Bl]:"fire-app-check-compat",[$l]:"fire-auth",[Kl]:"fire-auth-compat",[Wl]:"fire-rtdb",[zl]:"fire-rtdb-compat",[Hl]:"fire-fn",[Gl]:"fire-fn-compat",[Ql]:"fire-iid",[Xl]:"fire-iid-compat",[Yl]:"fire-fcm",[Jl]:"fire-fcm-compat",[Zl]:"fire-perf",[xl]:"fire-perf-compat",[th]:"fire-rc",[eh]:"fire-rc-compat",[nh]:"fire-gcs",[rh]:"fire-gcs-compat",[ih]:"fire-fst",[sh]:"fire-fst-compat","fire-js":"fire-js",[oh]:"fire-js-all"};/**
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
 */const zn=new Map,qi=new Map;function ch(t,e){try{t.container.addComponent(e)}catch(n){ge.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hn(t){const e=t.name;if(qi.has(e))return ge.debug(`There were multiple attempts to register component ${e}.`),!1;qi.set(e,t);for(const n of zn.values())ch(n,t);return!0}function lh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const hh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yt=new wa("app","Firebase",hh);/**
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
 */class fh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
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
 */const dh=ah;function Sa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yt.create("bad-app-name",{appName:String(i)});if(n||(n=ll()),!n)throw Yt.create("no-options");const s=zn.get(i);if(s){if(ki(n,s.options)&&ki(r,s.config))return s;throw Yt.create("duplicate-app",{appName:i})}const o=new wl(i);for(const u of qi.values())o.addComponent(u);const a=new fh(n,r,o);return zn.set(i,a),a}function gh(t=Vi){const e=zn.get(t);if(!e&&t===Vi)return Sa();if(!e)throw Yt.create("no-app",{appName:t});return e}function Te(t,e,n){var r;let i=(r=uh[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ge.warn(a.join(" "));return}Hn(new nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mh="firebase-heartbeat-database",ph=1,rn="firebase-heartbeat-store";let bi=null;function Ta(){return bi||(bi=Ml(mh,ph,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rn)}}}).catch(t=>{throw Yt.create("idb-open",{originalErrorMessage:t.message})})),bi}async function yh(t){var e;try{return(await Ta()).transaction(rn).objectStore(rn).get(_a(t))}catch(n){if(n instanceof Fe)ge.warn(n.message);else{const r=Yt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});ge.warn(r.message)}}}async function bo(t,e){var n;try{const i=(await Ta()).transaction(rn,"readwrite");return await i.objectStore(rn).put(e,_a(t)),i.done}catch(r){if(r instanceof Fe)ge.warn(r.message);else{const i=Yt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});ge.warn(i.message)}}}function _a(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vh=1024,wh=30*24*60*60*1e3;class Eh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=So();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=wh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=So(),{heartbeatsToSend:n,unsentEntries:r}=Ih(this._heartbeatsCache.heartbeats),i=Wn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function So(){return new Date().toISOString().substring(0,10)}function Ih(t,e=vh){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),To(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),To(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nl()?rl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function To(t){return Wn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Sh(t){Hn(new nn("platform-logger",e=>new Ul(e),"PRIVATE")),Hn(new nn("heartbeat",e=>new Eh(e),"PRIVATE")),Te(Pi,Io,t),Te(Pi,Io,"esm2017"),Te("fire-js","")}Sh("");var Th="firebase",_h="9.12.1";/**
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
 */Te(Th,_h,"app");const Ah={apiKey:"AIzaSyB9_idDxCuuwzEw8whaPnm0YpKmx4bpGzE",authDomain:"elijah-storm-portfolio.firebaseapp.com",databaseURL:"https://haja-project-default-rtdb.firebaseio.com",projectId:"elijah-storm-portfolio",storageBucket:"elijah-storm-portfolio.appspot.com",messagingSenderId:"512364119142",appId:"1:512364119142:web:17f381919391c4cec259a7",measurementId:"G-9TFCHM87DN"},Ch=Sa(Ah);var Dh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,hs=hs||{},F=Dh||self;function Gn(){}function ur(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function pn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Rh(t){return Object.prototype.hasOwnProperty.call(t,Si)&&t[Si]||(t[Si]=++Nh)}var Si="closure_uid_"+(1e9*Math.random()>>>0),Nh=0;function Oh(t,e,n){return t.call.apply(t.bind,arguments)}function Mh(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function wt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?wt=Oh:wt=Mh,wt.apply(null,arguments)}function kn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function pt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function re(){this.s=this.s,this.o=this.o}var Lh=0;re.prototype.s=!1;re.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Lh!=0)&&Rh(this)};re.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Aa=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function fs(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function _o(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ur(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var kh=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",Gn,e),F.removeEventListener("test",Gn,e)}catch{}return t}();function Qn(t){return/^[\s\xa0]*$/.test(t)}var Ao=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ti(t,e){return t<e?-1:t>e?1:0}function cr(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function Ut(t){return cr().indexOf(t)!=-1}function ds(t){return ds[" "](t),t}ds[" "]=Gn;function Uh(t){var e=Vh;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Fh=Ut("Opera"),Ce=Ut("Trident")||Ut("MSIE"),Ca=Ut("Edge"),Bi=Ca||Ce,Da=Ut("Gecko")&&!(cr().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge"))&&!(Ut("Trident")||Ut("MSIE"))&&!Ut("Edge"),Ph=cr().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge");function Ra(){var t=F.document;return t?t.documentMode:void 0}var Xn;t:{var _i="",Ai=function(){var t=cr();if(Da)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ca)return/Edge\/([\d\.]+)/.exec(t);if(Ce)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ph)return/WebKit\/(\S+)/.exec(t);if(Fh)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ai&&(_i=Ai?Ai[1]:""),Ce){var Ci=Ra();if(Ci!=null&&Ci>parseFloat(_i)){Xn=String(Ci);break t}}Xn=_i}var Vh={};function qh(){return Uh(function(){let t=0;const e=Ao(String(Xn)).split("."),n=Ao("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Ti(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Ti(i[2].length==0,s[2].length==0)||Ti(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var ji;if(F.document&&Ce){var Co=Ra();ji=Co||parseInt(Xn,10)||void 0}else ji=void 0;var Bh=ji;function sn(t,e){if(Et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Da){t:{try{ds(e.nodeName);var i=!0;break t}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:jh[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&sn.X.h.call(this)}}pt(sn,Et);var jh={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var yn="closure_listenable_"+(1e6*Math.random()|0),$h=0;function Kh(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++$h,this.ba=this.ea=!1}function lr(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function gs(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Na(t){const e={};for(const n in t)e[n]=t[n];return e}const Do="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Oa(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Do.length;s++)n=Do[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function hr(t){this.src=t,this.g={},this.h=0}hr.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ki(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Kh(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function $i(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Aa(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(lr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ki(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var ms="closure_lm_"+(1e6*Math.random()|0),Di={};function Ma(t,e,n,r,i){if(r&&r.once)return ka(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ma(t,e[s],n,r,i);return null}return n=vs(n),t&&t[yn]?t.N(e,n,pn(r)?!!r.capture:!!r,i):La(t,e,n,!1,r,i)}function La(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=pn(i)?!!i.capture:!!i,a=ys(t);if(a||(t[ms]=a=new hr(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Wh(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)kh||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Fa(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Wh(){function t(n){return e.call(t.src,t.listener,n)}const e=zh;return t}function ka(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ka(t,e[s],n,r,i);return null}return n=vs(n),t&&t[yn]?t.O(e,n,pn(r)?!!r.capture:!!r,i):La(t,e,n,!0,r,i)}function Ua(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ua(t,e[s],n,r,i);else r=pn(r)?!!r.capture:!!r,n=vs(n),t&&t[yn]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ki(s,n,r,i),-1<n&&(lr(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ys(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ki(e,n,r,i)),(n=-1<t?e[t]:null)&&ps(n))}function ps(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[yn])$i(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Fa(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ys(e))?($i(n,t),n.h==0&&(n.src=null,e[ms]=null)):lr(t)}}}function Fa(t){return t in Di?Di[t]:Di[t]="on"+t}function zh(t,e){if(t.ba)t=!0;else{e=new sn(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&ps(t),t=n.call(r,e)}return t}function ys(t){return t=t[ms],t instanceof hr?t:null}var Ri="__closure_events_fn_"+(1e9*Math.random()>>>0);function vs(t){return typeof t=="function"?t:(t[Ri]||(t[Ri]=function(e){return t.handleEvent(e)}),t[Ri])}function ht(){re.call(this),this.i=new hr(this),this.P=this,this.I=null}pt(ht,re);ht.prototype[yn]=!0;ht.prototype.removeEventListener=function(t,e,n,r){Ua(this,t,e,n,r)};function mt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Et(e,t);else if(e instanceof Et)e.target=e.target||t;else{var i=e;e=new Et(r,t),Oa(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Un(o,r,!0,e)&&i}if(o=e.g=t,i=Un(o,r,!0,e)&&i,i=Un(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Un(o,r,!1,e)&&i}ht.prototype.M=function(){if(ht.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)lr(n[r]);delete t.g[e],t.h--}}this.I=null};ht.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ht.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Un(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&$i(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var ws=F.JSON.stringify;function Hh(){var t=qa;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Gh{constructor(){this.h=this.g=null}add(e,n){const r=Pa.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Pa=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Qh,t=>t.reset());class Qh{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Xh(t){F.setTimeout(()=>{throw t},0)}function Va(t,e){Wi||Yh(),zi||(Wi(),zi=!0),qa.add(t,e)}var Wi;function Yh(){var t=F.Promise.resolve(void 0);Wi=function(){t.then(Jh)}}var zi=!1,qa=new Gh;function Jh(){for(var t;t=Hh();){try{t.h.call(t.g)}catch(n){Xh(n)}var e=Pa;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}zi=!1}function fr(t,e){ht.call(this),this.h=t||1,this.g=e||F,this.j=wt(this.lb,this),this.l=Date.now()}pt(fr,ht);N=fr.prototype;N.ca=!1;N.R=null;N.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),mt(this,"tick"),this.ca&&(Es(this),this.start()))}};N.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Es(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}N.M=function(){fr.X.M.call(this),Es(this),delete this.g};function Is(t,e,n){if(typeof t=="function")n&&(t=wt(t,n));else if(t&&typeof t.handleEvent=="function")t=wt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function Ba(t){t.g=Is(()=>{t.g=null,t.i&&(t.i=!1,Ba(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Zh extends re{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ba(this)}M(){super.M(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function on(t){re.call(this),this.h=t,this.g={}}pt(on,re);var Ro=[];function ja(t,e,n,r){Array.isArray(n)||(n&&(Ro[0]=n.toString()),n=Ro);for(var i=0;i<n.length;i++){var s=Ma(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function $a(t){gs(t.g,function(e,n){this.g.hasOwnProperty(n)&&ps(e)},t),t.g={}}on.prototype.M=function(){on.X.M.call(this),$a(this)};on.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function dr(){this.g=!0}dr.prototype.Aa=function(){this.g=!1};function xh(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function tf(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function be(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+nf(t,n)+(r?" "+r:"")})}function ef(t,e){t.info(function(){return"TIMEOUT: "+e})}dr.prototype.info=function(){};function nf(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ws(n)}catch{return e}}var ve={},No=null;function gr(){return No=No||new ht}ve.Pa="serverreachability";function Ka(t){Et.call(this,ve.Pa,t)}pt(Ka,Et);function an(t){const e=gr();mt(e,new Ka(e))}ve.STAT_EVENT="statevent";function Wa(t,e){Et.call(this,ve.STAT_EVENT,t),this.stat=e}pt(Wa,Et);function bt(t){const e=gr();mt(e,new Wa(e,t))}ve.Qa="timingevent";function za(t,e){Et.call(this,ve.Qa,t),this.size=e}pt(za,Et);function vn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var mr={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ha={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function bs(){}bs.prototype.h=null;function Oo(t){return t.h||(t.h=t.i())}function Ga(){}var wn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ss(){Et.call(this,"d")}pt(Ss,Et);function Ts(){Et.call(this,"c")}pt(Ts,Et);var Hi;function pr(){}pt(pr,bs);pr.prototype.g=function(){return new XMLHttpRequest};pr.prototype.i=function(){return{}};Hi=new pr;function En(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new on(this),this.O=rf,t=Bi?125:void 0,this.T=new fr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Qa}function Qa(){this.i=null,this.g="",this.h=!1}var rf=45e3,Gi={},Yn={};N=En.prototype;N.setTimeout=function(t){this.O=t};function Qi(t,e,n){t.K=1,t.v=vr(Kt(e)),t.s=n,t.P=!0,Xa(t,null)}function Xa(t,e){t.F=Date.now(),In(t),t.A=Kt(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),ru(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Qa,t.g=Tu(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Zh(wt(t.La,t,t.g),t.N)),ja(t.S,t.g,"readystatechange",t.ib),e=t.H?Na(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),an(),xh(t.j,t.u,t.A,t.m,t.U,t.s)}N.ib=function(t){t=t.target;const e=this.L;e&&qt(t)==3?e.l():this.La(t)};N.La=function(t){try{if(t==this.g)t:{const l=qt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Bi||this.g&&(this.h.h||this.g.fa()||Uo(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?an(3):an(2)),yr(this);var n=this.g.aa();this.Y=n;e:if(Ya(this)){var r=Uo(this.g);t="";var i=r.length,s=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ue(this),Je(this);var o="";break e}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,tf(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qn(a)){var c=a;break e}}c=null}if(n=c)be(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Xi(this,n);else{this.i=!1,this.o=3,bt(12),ue(this),Je(this);break t}}this.P?(Ja(this,l,o),Bi&&this.i&&l==3&&(ja(this.S,this.T,"tick",this.hb),this.T.start())):(be(this.j,this.m,o,null),Xi(this,o)),l==4&&ue(this),this.i&&!this.I&&(l==4?Eu(this.l,this):(this.i=!1,In(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,bt(12)):(this.o=0,bt(13)),ue(this),Je(this)}}}catch{}finally{}};function Ya(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ja(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=sf(t,n),i==Yn){e==4&&(t.o=4,bt(14),r=!1),be(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Gi){t.o=4,bt(15),be(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else be(t.j,t.m,i,null),Xi(t,i);Ya(t)&&i!=Yn&&i!=Gi&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,bt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Os(e),e.K=!0,bt(11))):(be(t.j,t.m,n,"[Invalid Chunked Response]"),ue(t),Je(t))}N.hb=function(){if(this.g){var t=qt(this.g),e=this.g.fa();this.C<e.length&&(yr(this),Ja(this,t,e),this.i&&t!=4&&In(this))}};function sf(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Yn:(n=Number(e.substring(n,r)),isNaN(n)?Gi:(r+=1,r+n>e.length?Yn:(e=e.substr(r,n),t.C=r+n,e)))}N.cancel=function(){this.I=!0,ue(this)};function In(t){t.V=Date.now()+t.O,Za(t,t.O)}function Za(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=vn(wt(t.gb,t),e)}function yr(t){t.B&&(F.clearTimeout(t.B),t.B=null)}N.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(ef(this.j,this.A),this.K!=2&&(an(),bt(17)),ue(this),this.o=2,Je(this)):Za(this,this.V-t)};function Je(t){t.l.G==0||t.I||Eu(t.l,t)}function ue(t){yr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Es(t.T),$a(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Xi(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Yi(n.h,t))){if(!t.J&&Yi(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)xn(n),Ir(n);else break t;Ns(n),bt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=vn(wt(n.cb,n),6e3));if(1>=ou(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ce(n,11)}else if((t.J||n.g==t)&&xn(n),!Qn(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const l=c[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const w=t.g;if(w){const T=w.g?w.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var s=r.h;s.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(_s(s,s.h),s.h=null))}if(r.D){const O=w.g?w.g.getResponseHeader("X-HTTP-Session-Id"):null;O&&(r.za=O,J(r.F,r.D,O))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Su(r,r.H?r.ka:null,r.V),o.J){au(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(yr(a),In(a)),r.g=o}else vu(r);0<n.i.length&&br(n)}else c[0]!="stop"&&c[0]!="close"||ce(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ce(n,7):Rs(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}an(4)}catch{}}function of(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ur(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function af(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ur(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function xa(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ur(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=af(t),r=of(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var tu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uf(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function he(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof he){this.h=e!==void 0?e:t.h,Jn(this,t.j),this.s=t.s,this.g=t.g,Zn(this,t.m),this.l=t.l,e=t.i;var n=new un;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Mo(this,n),this.o=t.o}else t&&(n=String(t).match(tu))?(this.h=!!e,Jn(this,n[1]||"",!0),this.s=Ge(n[2]||""),this.g=Ge(n[3]||"",!0),Zn(this,n[4]),this.l=Ge(n[5]||"",!0),Mo(this,n[6]||"",!0),this.o=Ge(n[7]||"")):(this.h=!!e,this.i=new un(null,this.h))}he.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qe(e,Lo,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Qe(e,Lo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Qe(n,n.charAt(0)=="/"?hf:lf,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qe(n,df)),t.join("")};function Kt(t){return new he(t)}function Jn(t,e,n){t.j=n?Ge(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Zn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Mo(t,e,n){e instanceof un?(t.i=e,gf(t.i,t.h)):(n||(e=Qe(e,ff)),t.i=new un(e,t.h))}function J(t,e,n){t.i.set(e,n)}function vr(t){return J(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ge(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qe(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,cf),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cf(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Lo=/[#\/\?@]/g,lf=/[#\?:]/g,hf=/[#\?]/g,ff=/[#\?@]/g,df=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ie(t){t.g||(t.g=new Map,t.h=0,t.i&&uf(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=un.prototype;N.add=function(t,e){ie(this),this.i=null,t=Pe(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function eu(t,e){ie(t),e=Pe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nu(t,e){return ie(t),e=Pe(t,e),t.g.has(e)}N.forEach=function(t,e){ie(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};N.oa=function(){ie(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};N.W=function(t){ie(this);let e=[];if(typeof t=="string")nu(this,t)&&(e=e.concat(this.g.get(Pe(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return ie(this),this.i=null,t=Pe(this,t),nu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ru(t,e,n){eu(t,e),0<n.length&&(t.i=null,t.g.set(Pe(t,e),fs(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Pe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gf(t,e){e&&!t.j&&(ie(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(eu(this,r),ru(this,i,n))},t)),t.j=e}var mf=class{constructor(t,e){this.h=t,this.g=e}};function iu(t){this.l=t||pf,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ga&&F.g.Ga()&&F.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var pf=10;function su(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ou(t){return t.h?1:t.g?t.g.size:0}function Yi(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function _s(t,e){t.g?t.g.add(e):t.h=e}function au(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}iu.prototype.cancel=function(){if(this.i=uu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function uu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return fs(t.i)}function As(){}As.prototype.stringify=function(t){return F.JSON.stringify(t,void 0)};As.prototype.parse=function(t){return F.JSON.parse(t,void 0)};function yf(){this.g=new As}function vf(t,e,n){const r=n||"";try{xa(t,function(i,s){let o=i;pn(i)&&(o=ws(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function wf(t,e){const n=new dr;if(F.Image){const r=new Image;r.onload=kn(Fn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=kn(Fn,n,r,"TestLoadImage: error",!1,e),r.onabort=kn(Fn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=kn(Fn,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Fn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function bn(t){this.l=t.ac||null,this.j=t.jb||!1}pt(bn,bs);bn.prototype.g=function(){return new wr(this.l,this.j)};bn.prototype.i=function(t){return function(){return t}}({});function wr(t,e){ht.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Cs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pt(wr,ht);var Cs=0;N=wr.prototype;N.open=function(t,e){if(this.readyState!=Cs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,cn(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||F).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=Cs};N.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,cn(this)),this.g&&(this.readyState=3,cn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function cu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}N.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sn(this):cn(this),this.readyState==3&&cu(this)}};N.Va=function(t){this.g&&(this.response=this.responseText=t,Sn(this))};N.Ua=function(t){this.g&&(this.response=t,Sn(this))};N.ga=function(){this.g&&Sn(this)};function Sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,cn(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function cn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Ef=F.JSON.parse;function et(t){ht.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=lu,this.K=this.L=!1}pt(et,ht);var lu="",If=/^https?$/i,bf=["POST","PUT"];N=et.prototype;N.Ka=function(t){this.L=t};N.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Hi.g(),this.C=this.u?Oo(this.u):Oo(Hi),this.g.onreadystatechange=wt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){ko(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=Aa(bf,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{du(this),0<this.B&&((this.K=Sf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=wt(this.qa,this)):this.A=Is(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ko(this,s)}};function Sf(t){return Ce&&qh()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.qa=function(){typeof hs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,mt(this,"timeout"),this.abort(8))};function ko(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hu(t),Er(t)}function hu(t){t.D||(t.D=!0,mt(t,"complete"),mt(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,mt(this,"complete"),mt(this,"abort"),Er(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Er(this,!0)),et.X.M.call(this)};N.Ha=function(){this.s||(this.F||this.v||this.l?fu(this):this.fb())};N.fb=function(){fu(this)};function fu(t){if(t.h&&typeof hs<"u"&&(!t.C[1]||qt(t)!=4||t.aa()!=2)){if(t.v&&qt(t)==4)Is(t.Ha,0,t);else if(mt(t,"readystatechange"),qt(t)==4){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(tu)[1]||null;if(!i&&F.self&&F.self.location){var s=F.self.location.protocol;i=s.substr(0,s.length-1)}r=!If.test(i?i.toLowerCase():"")}n=r}if(n)mt(t,"complete"),mt(t,"success");else{t.m=6;try{var o=2<qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",hu(t)}}finally{Er(t)}}}}function Er(t,e){if(t.g){du(t);const n=t.g,r=t.C[0]?Gn:null;t.g=null,t.C=null,e||mt(t,"ready");try{n.onreadystatechange=r}catch{}}}function du(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}function qt(t){return t.g?t.g.readyState:0}N.aa=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};N.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ef(e)}};function Uo(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case lu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ea=function(){return this.m};N.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function gu(t){let e="";return gs(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ds(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=gu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):J(t,e,n))}function He(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mu(t){this.Ca=0,this.i=[],this.j=new dr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=He("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=He("baseRetryDelayMs",5e3,t),this.bb=He("retryDelaySeedMs",1e4,t),this.$a=He("forwardChannelMaxRetries",2,t),this.ta=He("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new iu(t&&t.concurrentRequestLimit),this.Fa=new yf,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}N=mu.prototype;N.ma=8;N.G=1;function Rs(t){if(pu(t),t.G==3){var e=t.U++,n=Kt(t.F);J(n,"SID",t.I),J(n,"RID",e),J(n,"TYPE","terminate"),Tn(t,n),e=new En(t,t.j,e,void 0),e.K=2,e.v=vr(Kt(n)),n=!1,F.navigator&&F.navigator.sendBeacon&&(n=F.navigator.sendBeacon(e.v.toString(),"")),!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=Tu(e.l,null),e.g.da(e.v)),e.F=Date.now(),In(e)}bu(t)}function Ir(t){t.g&&(Os(t),t.g.cancel(),t.g=null)}function pu(t){Ir(t),t.u&&(F.clearTimeout(t.u),t.u=null),xn(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function br(t){su(t.h)||t.m||(t.m=!0,Va(t.Ja,t),t.C=0)}function Tf(t,e){return ou(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=vn(wt(t.Ja,t,e),Iu(t,t.C)),t.C++,!0)}N.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new En(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Na(s),Oa(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){e:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break t}if(e===4096||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=yu(this,i,e),n=Kt(this.F),J(n,"RID",t),J(n,"CVER",22),this.D&&J(n,"X-HTTP-Session-Id",this.D),Tn(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(gu(s)))+"&"+e:this.o&&Ds(n,this.o,s)),_s(this.h,i),this.Ya&&J(n,"TYPE","init"),this.O?(J(n,"$req",e),J(n,"SID","null"),i.Z=!0,Qi(i,n,null)):Qi(i,n,e),this.G=2}}else this.G==3&&(t?Fo(this,t):this.i.length==0||su(this.h)||Fo(this))};function Fo(t,e){var n;e?n=e.m:n=t.U++;const r=Kt(t.F);J(r,"SID",t.I),J(r,"RID",n),J(r,"AID",t.T),Tn(t,r),t.o&&t.s&&Ds(r,t.o,t.s),n=new En(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=yu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),_s(t.h,n),Qi(n,r,e)}function Tn(t,e){t.ia&&gs(t.ia,function(n,r){J(e,r,n)}),t.l&&xa({},function(n,r){J(e,r,n)})}function yu(t,e,n){n=Math.min(t.i.length,n);var r=t.l?wt(t.l.Ra,t.l,t):null;t:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let c=i[u].h;const l=i[u].g;if(c-=s,0>c)s=Math.max(0,i[u].h-100),a=!1;else try{vf(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function vu(t){t.g||t.u||(t.Z=1,Va(t.Ia,t),t.A=0)}function Ns(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=vn(wt(t.Ia,t),Iu(t,t.A)),t.A++,!0)}N.Ia=function(){if(this.u=null,wu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=vn(wt(this.eb,this),t)}};N.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,bt(10),Ir(this),wu(this))};function Os(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function wu(t){t.g=new En(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Kt(t.sa);J(e,"RID","rpc"),J(e,"SID",t.I),J(e,"CI",t.L?"0":"1"),J(e,"AID",t.T),J(e,"TYPE","xmlhttp"),Tn(t,e),t.o&&t.s&&Ds(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=vr(Kt(e)),n.s=null,n.P=!0,Xa(n,t)}N.cb=function(){this.v!=null&&(this.v=null,Ir(this),Ns(this),bt(19))};function xn(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function Eu(t,e){var n=null;if(t.g==e){xn(t),Os(t),t.g=null;var r=2}else if(Yi(t.h,e))n=e.D,au(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=gr(),mt(r,new za(r,n)),br(t)}else vu(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&Tf(t,e)||r==2&&Ns(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ce(t,5);break;case 4:ce(t,10);break;case 3:ce(t,6);break;default:ce(t,2)}}}function Iu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ce(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=wt(t.kb,t);n||(n=new he("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Jn(n,"https"),vr(n)),wf(n.toString(),r)}else bt(2);t.G=0,t.l&&t.l.va(e),bu(t),pu(t)}N.kb=function(t){t?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function bu(t){if(t.G=0,t.la=[],t.l){const e=uu(t.h);(e.length!=0||t.i.length!=0)&&(_o(t.la,e),_o(t.la,t.i),t.h.i.length=0,fs(t.i),t.i.length=0),t.l.ua()}}function Su(t,e,n){var r=n instanceof he?Kt(n):new he(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Zn(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new he(null,void 0);r&&Jn(s,r),e&&(s.g=e),i&&Zn(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&J(r,n,e),J(r,"VER",t.ma),Tn(t,r),r}function Tu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new et(new bn({jb:!0})):new et(t.ra),e.Ka(t.H),e}function _u(){}N=_u.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Ra=function(){};function tr(){if(Ce&&!(10<=Number(Bh)))throw Error("Environmental error: no available transport.")}tr.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){ht.call(this),this.g=new mu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Qn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Qn(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ve(this)}pt(Rt,ht);Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;bt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Su(t,null,t.V),br(t)};Rt.prototype.close=function(){Rs(this.g)};Rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ws(t),t=n);e.i.push(new mf(e.ab++,t)),e.G==3&&br(e)};Rt.prototype.M=function(){this.g.l=null,delete this.j,Rs(this.g),delete this.g,Rt.X.M.call(this)};function Au(t){Ss.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}pt(Au,Ss);function Cu(){Ts.call(this),this.status=1}pt(Cu,Ts);function Ve(t){this.g=t}pt(Ve,_u);Ve.prototype.xa=function(){mt(this.g,"a")};Ve.prototype.wa=function(t){mt(this.g,new Au(t))};Ve.prototype.va=function(t){mt(this.g,new Cu)};Ve.prototype.ua=function(){mt(this.g,"b")};tr.prototype.createWebChannel=tr.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;mr.NO_ERROR=0;mr.TIMEOUT=8;mr.HTTP_ERROR=6;Ha.COMPLETE="complete";Ga.EventType=wn;wn.OPEN="a";wn.CLOSE="b";wn.ERROR="c";wn.MESSAGE="d";ht.prototype.listen=ht.prototype.N;et.prototype.listenOnce=et.prototype.O;et.prototype.getLastError=et.prototype.Oa;et.prototype.getLastErrorCode=et.prototype.Ea;et.prototype.getStatus=et.prototype.aa;et.prototype.getResponseJson=et.prototype.Sa;et.prototype.getResponseText=et.prototype.fa;et.prototype.send=et.prototype.da;et.prototype.setWithCredentials=et.prototype.Ka;var _f=function(){return new tr},Af=function(){return gr()},Ni=mr,Cf=Ha,Df=ve,Po={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Rf=bn,Pn=Ga,Nf=et;const Vo="@firebase/firestore";/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let qe="9.12.1";/**
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
 */const me=new Ea("@firebase/firestore");function qo(){return me.logLevel}function M(t,...e){if(me.logLevel<=G.DEBUG){const n=e.map(Ms);me.debug(`Firestore (${qe}): ${t}`,...n)}}function Wt(t,...e){if(me.logLevel<=G.ERROR){const n=e.map(Ms);me.error(`Firestore (${qe}): ${t}`,...n)}}function Ji(t,...e){if(me.logLevel<=G.WARN){const n=e.map(Ms);me.warn(`Firestore (${qe}): ${t}`,...n)}}function Ms(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function V(t="Unexpected state"){const e=`FIRESTORE (${qe}) INTERNAL ASSERTION FAILED: `+t;throw Wt(e),new Error(e)}function Y(t,e){t||V()}function q(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Fe{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Du{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Of{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class Mf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Lf{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Jt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Jt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Jt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new Du(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new yt(e)}}class kf{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Y(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Uf{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new kf(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ff{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pf{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Y(typeof n.token=="string"),this.A=n.token,new Ff(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Vf(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ru{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Vf(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function De(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class at{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new at(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new at(0,0))}static max(){return new j(new at(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ln{constructor(e,n,r){n===void 0?n=0:n>e.length&&V(),r===void 0?r=e.length-n:r>e.length-n&&V(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ln.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ln?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Z extends ln{construct(e,n,r){return new Z(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Z(n)}static emptyPath(){return new Z([])}}const qf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends ln{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return qf.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
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
 */class k{constructor(e){this.path=e}static fromPath(e){return new k(Z.fromString(e))}static fromName(e){return new k(Z.fromString(e).popFirst(5))}static empty(){return new k(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Z.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new k(new Z(e.slice()))}}function Bf(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new at(n+1,0):new at(n,r));return new xt(i,k.empty(),e)}function jf(t){return new xt(t.readTime,t.key,-1)}class xt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xt(j.min(),k.empty(),-1)}static max(){return new xt(j.max(),k.empty(),-1)}}function $f(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=k.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
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
 */const Kf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function _n(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Kf)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(l=>{o[c]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function An(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ls{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function Bo(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function we(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Nu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Ls.at=-1;class ct{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vn(this.root,e,this.comparator,!0)}}class Vn{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:dt.RED,this.left=i!=null?i:dt.EMPTY,this.right=s!=null?s:dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new dt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(t,e,n,r,i){return this}insert(t,e,n){return new dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jo(this.data.getIterator())}getIteratorFrom(e){return new jo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class jo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ot{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new ut(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return De(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new It(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const zf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(t){if(Y(!!t),typeof t=="string"){let e=0;const n=zf.exec(t);if(Y(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Re(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
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
 */function Ou(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Mu(t){const e=t.mapValue.fields.__previous_value__;return Ou(e)?Mu(e):e}function hn(t){const e=te(t.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
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
 */class Hf{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class fn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fn&&e.projectId===this.projectId&&e.database===this.database}}function Sr(t){return t==null}function er(t){return t===0&&1/t==-1/0}function Gf(t){return typeof t=="number"&&Number.isInteger(t)&&!er(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const qn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pe(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ou(t)?4:Qf(t)?9007199254740991:10:V()}function Ft(t,e){if(t===e)return!0;const n=pe(t);if(n!==pe(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hn(t).isEqual(hn(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=te(r.timestampValue),o=te(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Re(r.bytesValue).isEqual(Re(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return it(r.geoPointValue.latitude)===it(i.geoPointValue.latitude)&&it(r.geoPointValue.longitude)===it(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return it(r.integerValue)===it(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=it(r.doubleValue),o=it(i.doubleValue);return s===o?er(s)===er(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return De(t.arrayValue.values||[],e.arrayValue.values||[],Ft);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Bo(s)!==Bo(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Ft(s[a],o[a])))return!1;return!0}(t,e);default:return V()}}function dn(t,e){return(t.values||[]).find(n=>Ft(n,e))!==void 0}function Ne(t,e){if(t===e)return 0;const n=pe(t),r=pe(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=it(i.integerValue||i.doubleValue),a=it(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return $o(t.timestampValue,e.timestampValue);case 4:return $o(hn(t),hn(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Re(i),a=Re(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=Q(o[u],a[u]);if(c!==0)return c}return Q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Q(it(i.latitude),it(s.latitude));return o!==0?o:Q(it(i.longitude),it(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=Ne(o[u],a[u]);if(c)return c}return Q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===qn.mapValue&&s===qn.mapValue)return 0;if(i===qn.mapValue)return 1;if(s===qn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let l=0;l<a.length&&l<c.length;++l){const h=Q(a[l],c[l]);if(h!==0)return h;const f=Ne(o[a[l]],u[c[l]]);if(f!==0)return f}return Q(a.length,c.length)}(t.mapValue,e.mapValue);default:throw V()}}function $o(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=te(t),r=te(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function _e(t){return Zi(t)}function Zi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=te(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Re(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,k.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Zi(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Zi(r.fields[a])}`;return s+"}"}(t.mapValue):V();var e,n}function xi(t){return!!t&&"integerValue"in t}function ks(t){return!!t&&"arrayValue"in t}function Ko(t){return!!t&&"nullValue"in t}function Wo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bn(t){return!!t&&"mapValue"in t}function Ze(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return we(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ze(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ze(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Qf(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ze(n)}setAll(e){let n=vt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ze(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Bn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ft(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Bn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){we(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(Ze(this.value))}}function Lu(t){const e=[];return we(t.fields,(n,r)=>{const i=new vt([n]);if(Bn(r)){const s=Lu(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ot(e)}/**
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
 */class gt{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new gt(e,0,j.min(),j.min(),_t.empty(),0)}static newFoundDocument(e,n,r){return new gt(e,1,n,j.min(),r,0)}static newNoDocument(e,n){return new gt(e,2,n,j.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,j.min(),_t.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xf{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function zo(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Xf(t,e,n,r,i,s,o)}function Us(t){const e=q(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+_e(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Sr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_e(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_e(r)).join(",")),e.ht=n}return e.ht}function Yf(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${_e(r.value)}`;var r}).join(", ")}]`),Sr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>_e(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>_e(n)).join(",")),`Target(${e})`}function Fs(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!id(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Ft(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Go(t.startAt,e.startAt)&&Go(t.endAt,e.endAt)}function ts(t){return k.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class At extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new Jf(e,n,r):n==="array-contains"?new td(e,r):n==="in"?new ed(e,r):n==="not-in"?new nd(e,r):n==="array-contains-any"?new rd(e,r):new At(e,n,r)}static lt(e,n,r){return n==="in"?new Zf(e,r):new xf(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Ne(n,this.value)):n!==null&&pe(this.value)===pe(n)&&this.ft(Ne(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Jf extends At{constructor(e,n,r){super(e,n,r),this.key=k.fromName(r.referenceValue)}matches(e){const n=k.comparator(e.key,this.key);return this.ft(n)}}class Zf extends At{constructor(e,n){super(e,"in",n),this.keys=ku("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xf extends At{constructor(e,n){super(e,"not-in",n),this.keys=ku("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ku(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>k.fromName(r.referenceValue))}class td extends At{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ks(n)&&dn(n.arrayValue,this.value)}}class ed extends At{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&dn(this.value.arrayValue,n)}}class nd extends At{constructor(e,n){super(e,"not-in",n)}matches(e){if(dn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!dn(this.value.arrayValue,n)}}class rd extends At{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ks(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>dn(this.value.arrayValue,r))}}class nr{constructor(e,n){this.position=e,this.inclusive=n}}class xe{constructor(e,n="asc"){this.field=e,this.dir=n}}function id(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ho(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=k.comparator(k.fromName(o.referenceValue),n.key):r=Ne(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Go(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ft(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Tr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this._t=null,this.wt=null,this.startAt,this.endAt}}function sd(t,e,n,r,i,s,o,a){return new Tr(t,e,n,r,i,s,o,a)}function _r(t){return new Tr(t)}function Qo(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function od(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ad(t){for(const e of t.filters)if(e.dt())return e.field;return null}function ud(t){return t.collectionGroup!==null}function gn(t){const e=q(t);if(e._t===null){e._t=[];const n=ad(e),r=od(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new xe(n)),e._t.push(new xe(vt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new xe(vt.keyField(),s))}}}return e._t}function zt(t){const e=q(t);if(!e.wt)if(e.limitType==="F")e.wt=zo(e.path,e.collectionGroup,gn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of gn(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new xe(s.field,o))}const r=e.endAt?new nr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new nr(e.startAt.position,e.startAt.inclusive):null;e.wt=zo(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function es(t,e,n){return new Tr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ar(t,e){return Fs(zt(t),zt(e))&&t.limitType===e.limitType}function Uu(t){return`${Us(zt(t))}|lt:${t.limitType}`}function ns(t){return`Query(target=${Yf(zt(t))}; limitType=${t.limitType})`}function Ps(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):k.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Ho(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,gn(n),r)||n.endAt&&!function(i,s,o){const a=Ho(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,gn(n),r))}(t,e)}function cd(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Fu(t){return(e,n)=>{let r=!1;for(const i of gn(t)){const s=ld(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ld(t,e,n){const r=t.field.isKeyField()?k.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Ne(a,u):V()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
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
 */function Pu(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:er(e)?"-0":e}}function Vu(t){return{integerValue:""+t}}function hd(t,e){return Gf(e)?Vu(e):Pu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Cr{constructor(){this._=void 0}}function fd(t,e,n){return t instanceof mn?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Oe?Bu(t,e):t instanceof Me?ju(t,e):function(r,i){const s=qu(r,i),o=Xo(s)+Xo(r.yt);return xi(s)&&xi(r.yt)?Vu(o):Pu(r.It,o)}(t,e)}function dd(t,e,n){return t instanceof Oe?Bu(t,e):t instanceof Me?ju(t,e):n}function qu(t,e){return t instanceof rr?xi(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class mn extends Cr{}class Oe extends Cr{constructor(e){super(),this.elements=e}}function Bu(t,e){const n=$u(e);for(const r of t.elements)n.some(i=>Ft(i,r))||n.push(r);return{arrayValue:{values:n}}}class Me extends Cr{constructor(e){super(),this.elements=e}}function ju(t,e){let n=$u(e);for(const r of t.elements)n=n.filter(i=>!Ft(i,r));return{arrayValue:{values:n}}}class rr extends Cr{constructor(e,n){super(),this.It=e,this.yt=n}}function Xo(t){return it(t.integerValue||t.doubleValue)}function $u(t){return ks(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Vs{constructor(e,n){this.field=e,this.transform=n}}function gd(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Oe&&r instanceof Oe||n instanceof Me&&r instanceof Me?De(n.elements,r.elements,Ft):n instanceof rr&&r instanceof rr?Ft(n.yt,r.yt):n instanceof mn&&r instanceof mn}(t.transform,e.transform)}class md{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Dr{}function Ku(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zu(t.key,Lt.none()):new Cn(t.key,t.data,Lt.none());{const n=t.data,r=_t.empty();let i=new ut(vt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new se(t.key,r,new Ot(i.toArray()),Lt.none())}}function pd(t,e,n){t instanceof Cn?function(r,i,s){const o=r.value.clone(),a=Jo(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof se?function(r,i,s){if(!jn(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Jo(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Wu(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function tn(t,e,n,r){return t instanceof Cn?function(i,s,o,a){if(!jn(i.precondition,s))return o;const u=i.value.clone(),c=Zo(i.fieldTransforms,a,s);return u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof se?function(i,s,o,a){if(!jn(i.precondition,s))return o;const u=Zo(i.fieldTransforms,a,s),c=s.data;return c.setAll(Wu(i)),c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(i,s,o){return jn(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function yd(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=qu(r.transform,i||null);s!=null&&(n===null&&(n=_t.empty()),n.set(r.field,s))}return n||null}function Yo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&De(n,r,(i,s)=>gd(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Cn extends Dr{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class se extends Dr{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Wu(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Jo(t,e,n){const r=new Map;Y(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,dd(o,a,n[i]))}return r}function Zo(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,fd(s,o,e))}return r}class zu extends Dr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vd extends Dr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wd{constructor(e){this.count=e}}/**
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
 */var rt,z;function Ed(t){switch(t){default:return V();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Hu(t){if(t===void 0)return Wt("GRPC error has no .code"),b.UNKNOWN;switch(t){case rt.OK:return b.OK;case rt.CANCELLED:return b.CANCELLED;case rt.UNKNOWN:return b.UNKNOWN;case rt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case rt.INTERNAL:return b.INTERNAL;case rt.UNAVAILABLE:return b.UNAVAILABLE;case rt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case rt.NOT_FOUND:return b.NOT_FOUND;case rt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case rt.ABORTED:return b.ABORTED;case rt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case rt.DATA_LOSS:return b.DATA_LOSS;default:return V()}}(z=rt||(rt={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Be{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){we(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Nu(this.inner)}size(){return this.innerSize}}/**
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
 */const Id=new ct(k.comparator);function Ht(){return Id}const Gu=new ct(k.comparator);function Xe(...t){let e=Gu;for(const n of t)e=e.insert(n.key,n);return e}function Qu(t){let e=Gu;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function le(){return en()}function Xu(){return en()}function en(){return new Be(t=>t.toString(),(t,e)=>t.isEqual(e))}const bd=new ct(k.comparator),Sd=new ut(k.comparator);function $(...t){let e=Sd;for(const n of t)e=e.add(n);return e}const Td=new ut(Q);function Yu(){return Td}/**
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
 */class Rr{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Dn.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rr(j.min(),i,Yu(),Ht(),$())}}class Dn{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Dn(r,n,$(),$(),$())}}/**
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
 */class $n{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class Ju{constructor(e,n){this.targetId=e,this.At=n}}class Zu{constructor(e,n,r=It.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class xo{constructor(){this.Rt=0,this.bt=ea(),this.Pt=It.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=$(),n=$(),r=$();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:V()}}),new Dn(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=ea()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class _d{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Ht(),this.qt=ta(),this.Kt=new ut(Q)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(ts(s))if(r===0){const o=new k(s.path);this.jt(n,o,gt.newNoDocument(o,j.min()))}else Y(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&ts(a.target)){const u=new k(a.target.path);this.Ut.get(u)!==null||this.ee(o,u)||this.jt(o,u,gt.newNoDocument(u,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=$();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Xt(u);return!c||c.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Rr(e,n,this.Kt,this.Ut,r);return this.Ut=Ht(),this.qt=ta(),this.Kt=new ut(Q),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new xo,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ut(Q),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new xo),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function ta(){return new ct(k.comparator)}function ea(){return new ct(k.comparator)}/**
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
 */const Ad=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Cd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Dd{constructor(e,n){this.databaseId=e,this.gt=n}}function ir(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xu(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Rd(t,e){return ir(t,e.toTimestamp())}function Bt(t){return Y(!!t),j.fromTimestamp(function(e){const n=te(e);return new at(n.seconds,n.nanos)}(t))}function qs(t,e){return function(n){return new Z(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function tc(t){const e=Z.fromString(t);return Y(rc(e)),e}function rs(t,e){return qs(t.databaseId,e.path)}function Oi(t,e){const n=tc(e);if(n.get(1)!==t.databaseId.projectId)throw new L(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new k(ec(n))}function is(t,e){return qs(t.databaseId,e)}function Nd(t){const e=tc(t);return e.length===4?Z.emptyPath():ec(e)}function ss(t){return new Z(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ec(t){return Y(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function na(t,e,n){return{name:rs(t,e),fields:n.value.mapValue.fields}}function Od(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.gt?(Y(c===void 0||typeof c=="string"),It.fromBase64String(c||"")):(Y(c===void 0||c instanceof Uint8Array),It.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?b.UNKNOWN:Hu(u.code);return new L(c,u.message||"")}(o);n=new Zu(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Oi(t,r.document.name),s=Bt(r.document.updateTime),o=new _t({mapValue:{fields:r.document.fields}}),a=gt.newFoundDocument(i,s,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new $n(u,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Oi(t,r.document),s=r.readTime?Bt(r.readTime):j.min(),o=gt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new $n([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Oi(t,r.document),s=r.removedTargetIds||[];n=new $n([],s,i,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new wd(i),o=r.targetId;n=new Ju(o,s)}}return n}function Md(t,e){let n;if(e instanceof Cn)n={update:na(t,e.key,e.value)};else if(e instanceof zu)n={delete:rs(t,e.key)};else if(e instanceof se)n={update:na(t,e.key,e.data),updateMask:$d(e.fieldMask)};else{if(!(e instanceof vd))return V();n={verify:rs(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof mn)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Oe)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Me)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof rr)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw V()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Rd(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:V()}(t,e.precondition)),n}function Ld(t,e){return t&&t.length>0?(Y(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Bt(r.updateTime):Bt(i);return s.isEqual(j.min())&&(s=Bt(i)),new md(s,r.transformResults||[])}(n,e))):[]}function kd(t,e){return{documents:[is(t,e.path)]}}function Ud(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=is(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=is(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length===0)return;const c=u.map(l=>function(h){if(h.op==="=="){if(Wo(h.value))return{unaryFilter:{field:Ie(h.field),op:"IS_NAN"}};if(Ko(h.value))return{unaryFilter:{field:Ie(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Wo(h.value))return{unaryFilter:{field:Ie(h.field),op:"IS_NOT_NAN"}};if(Ko(h.value))return{unaryFilter:{field:Ie(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ie(h.field),op:qd(h.op),value:h.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(c=>function(l){return{field:Ie(l.field),direction:Vd(l.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,c){return u.gt||Sr(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function Fd(t){let e=Nd(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Y(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=nc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new xe(Se(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Sr(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(l){const h=!!l.before,f=l.values||[];return new nr(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(l){const h=!l.before,f=l.values||[];return new nr(f,h)}(n.endAt)),sd(e,i,o,s,a,"F",u,c)}function Pd(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return V()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function nc(t){return t?t.unaryFilter!==void 0?[jd(t)]:t.fieldFilter!==void 0?[Bd(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>nc(e)).reduce((e,n)=>e.concat(n)):V():[]}function Vd(t){return Ad[t]}function qd(t){return Cd[t]}function Ie(t){return{fieldPath:t.canonicalString()}}function Se(t){return vt.fromServerFormat(t.fieldPath)}function Bd(t){return At.create(Se(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(t.fieldFilter.op),t.fieldFilter.value)}function jd(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Se(t.unaryFilter.field);return At.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Se(t.unaryFilter.field);return At.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Se(t.unaryFilter.field);return At.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Se(t.unaryFilter.field);return At.create(i,"!=",{nullValue:"NULL_VALUE"});default:return V()}}function $d(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rc(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Kd{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pd(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=tn(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=tn(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Xu();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=Ku(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),$())}isEqual(e){return this.batchId===e.batchId&&De(this.mutations,e.mutations,(n,r)=>Yo(n,r))&&De(this.baseMutations,e.baseMutations,(n,r)=>Yo(n,r))}}class Bs{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Y(e.mutations.length===r.length);let i=bd;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Bs(e,n,r,i)}}/**
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
 */class Wd{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class fe{constructor(e,n,r,i,s=j.min(),o=j.min(),a=It.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new fe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new fe(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new fe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class zd{constructor(e){this.re=e}}function Hd(t){const e=Fd({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?es(e,e.limit,"L"):e}/**
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
 */class Gd{constructor(){this.Ye=new Qd}addToCollectionParentIndex(e,n){return this.Ye.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(xt.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(xt.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class Qd{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ut(Z.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ut(Z.comparator)).toArray()}}/**
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
 */class Le{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Le(0)}static vn(){return new Le(-1)}}/**
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
 */class Xd{constructor(){this.changes=new Be(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Yd{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Jd{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&tn(r.mutation,i,Ot.empty(),at.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,$()).next(()=>r))}getLocalViewOfDocuments(e,n,r=$()){const i=le();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xe();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=le();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,$()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ht();const o=en(),a=en();return n.forEach((u,c)=>{const l=r.get(c.key);i.has(c.key)&&(l===void 0||l.mutation instanceof se)?s=s.insert(c.key,c):l!==void 0&&(o.set(c.key,l.mutation.getFieldMask()),tn(l.mutation,c,l.mutation.getFieldMask(),at.now()))}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,l)=>o.set(c,l)),n.forEach((c,l)=>{var h;return a.set(c,new Yd(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=en();let i=new ct((o,a)=>o-a),s=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let l=r.get(u)||Ot.empty();l=a.applyToLocalView(c,l),r.set(u,l);const h=(i.get(a.batchId)||$()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=Xu();l.forEach(f=>{if(!s.has(f)){const w=Ku(n.get(f),r.get(f));w!==null&&h.set(f,w),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return k.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ud(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(le());let a=-1,u=s;return o.next(c=>S.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?S.resolve():this.getBaseDocument(e,l,h).next(f=>{u=u.insert(l,f)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,$())).next(l=>({batchId:a,changes:Qu(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new k(n)).next(r=>{let i=Xe();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Xe();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const u=function(c,l){return new Tr(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(c=>{c.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,u)=>{const c=u.getKey();i.get(c)===null&&(i=i.insert(c,gt.newInvalidDocument(c)))});let o=Xe();return i.forEach((a,u)=>{const c=s.get(a);c!==void 0&&tn(c.mutation,u,Ot.empty(),at.now()),Ps(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):S.resolve(gt.newInvalidDocument(n))}}/**
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
 */class Zd{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Bt(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:Hd(r.bundledQuery),readTime:Bt(r.readTime)}}(n)),S.resolve()}}/**
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
 */class xd{constructor(){this.overlays=new ct(k.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=le();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=le(),s=n.length+1,o=new k(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ct((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let l=s.get(c.largestBatchId);l===null&&(l=le(),s=s.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=le(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=i)););return S.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Wd(n,r));let s=this.es.get(n);s===void 0&&(s=$(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class js{constructor(){this.ns=new ut(lt.ss),this.rs=new ut(lt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new lt(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new lt(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new k(new Z([])),r=new lt(n,e),i=new lt(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new k(new Z([])),r=new lt(n,e),i=new lt(n,e+1);let s=$();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new lt(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class lt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return k.comparator(e.key,n.key)||Q(e._s,n._s)}static os(e,n){return Q(e._s,n._s)||k.comparator(e.key,n.key)}}/**
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
 */class tg{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ut(lt.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Kd(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new lt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new lt(n,0),i=new lt(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(Q);return n.forEach(i=>{const s=new lt(i,0),o=new lt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),S.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;k.isDocumentKey(s)||(s=s.child(""));const o=new lt(new k(s),0);let a=new ut(Q);return this.gs.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u._s)),!0)},o),S.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Y(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return S.forEach(n.mutations,i=>{const s=new lt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new lt(n,0),i=this.gs.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class eg{constructor(e){this.Es=e,this.docs=new ct(k.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=Ht();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),S.resolve(r)}getAllFromCollection(e,n,r){let i=Ht();const s=new k(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||$f(jf(u),r)<=0||(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,i){V()}As(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ng(this)}getSize(e){return S.resolve(this.size)}}class ng extends Xd{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class rg{constructor(e){this.persistence=e,this.Rs=new Be(n=>Us(n),Fs),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.bs=0,this.Ps=new js,this.targetCount=0,this.vs=Le.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Le(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
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
 */class ig{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Ls(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new rg(this),this.indexManager=new Gd,this.remoteDocumentCache=function(r){return new eg(r)}(r=>this.referenceDelegate.xs(r)),this.It=new zd(n),this.Ns=new Zd(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xd,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new tg(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const i=new sg(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return S.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class sg extends Wf{constructor(e){super(),this.currentSequenceNumber=e}}class $s{constructor(e){this.persistence=e,this.Fs=new js,this.$s=null}static Bs(e){return new $s(e)}get Ls(){if(this.$s)return this.$s;throw V()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,r=>{const i=k.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Ks{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=$(),i=$();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ks(e,n.fromCache,r,i)}}/**
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
 */class og{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Qo(n))return S.resolve(null);let r=zt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=es(n,null,"F"),r=zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=$(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Fi(n,a);return this.$i(n,c,o,u.readTime)?this.ki(e,es(n,null,"F")):this.Bi(e,c,n,u)}))})))}Oi(e,n,r,i){return Qo(n)||i.isEqual(j.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(qo()<=G.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ns(n)),this.Bi(e,o,n,Bf(i,-1)))})}Fi(e,n){let r=new ut(Fu(e));return n.forEach((i,s)=>{Ps(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return qo()<=G.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",ns(n)),this.Ni.getDocumentsMatchingQuery(e,n,xt.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class ag{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new ct(Q),this.qi=new Be(s=>Us(s),Fs),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Jd(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function ug(t,e,n,r){return new ag(t,e,n,r)}async function ic(t,e){const n=q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=$();for(const c of i){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of s){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return n.localDocuments.getDocuments(r,u).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function cg(t,e){const n=q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const l=u.batch,h=l.keys();let f=S.resolve();return h.forEach(w=>{f=f.next(()=>c.getEntry(a,w)).next(T=>{const O=u.docVersions.get(w);Y(O!==null),T.version.compareTo(O)<0&&(l.applyToRemoteDocument(T,u),T.isValidDocument()&&(T.setReadTime(u.commitVersion),c.addEntry(T)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=$();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function sc(t){const e=q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function lg(t,e){const n=q(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((l,h)=>{const f=i.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,l.addedDocuments,h)));let w=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?w=w.withResumeToken(It.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):l.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(l.resumeToken,r)),i=i.insert(h,w),function(T,O,U){return T.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(f,w,l)&&a.push(n.Cs.updateTargetData(s,w))});let u=Ht(),c=$();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(hg(s,o,e.documentUpdates).next(l=>{u=l.Wi,c=l.zi})),!r.isEqual(j.min())){const l=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ui=i,s))}function hg(t,e,n){let r=$(),i=$();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ht();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function fg(t,e){const n=q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dg(t,e){const n=q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new fe(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function os(t,e,n){const r=q(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!An(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function ra(t,e,n){const r=q(t);let i=j.min(),s=$();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const l=q(a),h=l.qi.get(c);return h!==void 0?S.resolve(l.Ui.get(h)):l.Cs.getTargetData(u,c)}(r,o,zt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:$())).next(a=>(gg(r,cd(e),a),{documents:a,Hi:s})))}function gg(t,e,n){let r=t.Ki.get(e)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class ia{constructor(){this.activeTargetIds=Yu()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mg{constructor(){this.Lr=new ia,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ia,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pg{qr(e){}shutdown(){}}/**
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
 */class sa{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const yg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class vg{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class wg extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);M("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(u=>(M("RestConnection","Received: ",u),u),u=>{throw Ji("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+qe,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=yg[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new Nf;a.setWithCredentials(!0),a.listenOnce(Cf.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ni.NO_ERROR:const c=a.getResponseJson();M("Connection","XHR received:",JSON.stringify(c)),s(c);break;case Ni.TIMEOUT:M("Connection",'RPC "'+e+'" timed out'),o(new L(b.DEADLINE_EXCEEDED,"Request time out"));break;case Ni.HTTP_ERROR:const l=a.getStatus();if(M("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(w){const T=w.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(T)>=0?T:b.UNKNOWN}(h.status);o(new L(f,h.message))}else o(new L(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(b.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{M("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=_f(),o=Af(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Rf({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");M("Connection","Creating WebChannel: "+u,a);const c=s.createWebChannel(u,a);let l=!1,h=!1;const f=new vg({Hr:T=>{h?M("Connection","Not sending because WebChannel is closed:",T):(l||(M("Connection","Opening WebChannel transport."),c.open(),l=!0),M("Connection","WebChannel sending:",T),c.send(T))},Jr:()=>c.close()}),w=(T,O,U)=>{T.listen(O,X=>{try{U(X)}catch(C){setTimeout(()=>{throw C},0)}})};return w(c,Pn.EventType.OPEN,()=>{h||M("Connection","WebChannel transport opened.")}),w(c,Pn.EventType.CLOSE,()=>{h||(h=!0,M("Connection","WebChannel transport closed"),f.io())}),w(c,Pn.EventType.ERROR,T=>{h||(h=!0,Ji("Connection","WebChannel transport errored:",T),f.io(new L(b.UNAVAILABLE,"The operation could not be completed")))}),w(c,Pn.EventType.MESSAGE,T=>{var O;if(!h){const U=T.data[0];Y(!!U);const X=U,C=X.error||((O=X[0])===null||O===void 0?void 0:O.error);if(C){M("Connection","WebChannel received error:",C);const D=C.status;let A=function(g){const I=rt[g];if(I!==void 0)return Hu(I)}(D),y=C.message;A===void 0&&(A=b.INTERNAL,y="Unknown error status: "+D+" with message "+C.message),h=!0,f.io(new L(A,y)),c.close()}else M("Connection","WebChannel received:",U),f.ro(U)}}),w(o,Df.STAT_EVENT,T=>{T.stat===Po.PROXY?M("Connection","Detected buffering proxy"):T.stat===Po.NOPROXY&&M("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Mi(){return typeof document<"u"?document:null}/**
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
 */function Nr(t){return new Dd(t,!0)}class oc{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class ac{constructor(e,n,r,i,s,o,a,u){this.Hs=e,this.vo=r,this.Vo=i,this.So=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new oc(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Wt(n.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Do===n&&this.Qo(r,i)},r=>{e(()=>{const i=new L(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(i)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.jo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Eg extends ac{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=Od(this.It,e),r=function(i){if(!("targetChange"in i))return j.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?j.min():s.readTime?Bt(s.readTime):j.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=ss(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=ts(a)?{documents:kd(i,a)}:{query:Ud(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=xu(i,s.resumeToken):s.snapshotVersion.compareTo(j.min())>0&&(o.readTime=ir(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=Pd(this.It,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=ss(this.It),n.removeTarget=e,this.Lo(n)}}class Ig extends ac{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=Ld(e.writeResults,e.commitTime),r=Bt(e.commitTime);return this.listener.tu(r,n)}return Y(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=ss(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Md(this.It,r))};this.Lo(n)}}/**
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
 */class bg extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.It=i,this.su=!1}iu(){if(this.su)throw new L(b.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(b.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.So._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(b.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class Sg{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Wt(n),this.uu=!1):M("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class Tg{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.qr(o=>{r.enqueueAndForget(async()=>{Ee(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=q(a);u.wu.add(4),await Rn(u),u.yu.set("Unknown"),u.wu.delete(4),await Or(u)}(this))})}),this.yu=new Sg(r,i)}}async function Or(t){if(Ee(t))for(const e of t.mu)await e(!0)}async function Rn(t){for(const e of t.mu)await e(!1)}function uc(t,e){const n=q(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Hs(n)?zs(n):je(n).Oo()&&Ws(n,e))}function cc(t,e){const n=q(t),r=je(n);n._u.delete(e),r.Oo()&&lc(n,e),n._u.size===0&&(r.Oo()?r.$o():Ee(n)&&n.yu.set("Unknown"))}function Ws(t,e){t.pu.Mt(e.targetId),je(t).Ho(e)}function lc(t,e){t.pu.Mt(e),je(t).Jo(e)}function zs(t){t.pu=new _d({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),je(t).start(),t.yu.cu()}function Hs(t){return Ee(t)&&!je(t).ko()&&t._u.size>0}function Ee(t){return q(t).wu.size===0}function hc(t){t.pu=void 0}async function _g(t){t._u.forEach((e,n)=>{Ws(t,e)})}async function Ag(t,e){hc(t),Hs(t)?(t.yu.lu(e),zs(t)):t.yu.set("Unknown")}async function Cg(t,e,n){if(t.yu.set("Online"),e instanceof Zu&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await sr(t,r)}else if(e instanceof $n?t.pu.Gt(e):e instanceof Ju?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(j.min()))try{const r=await sc(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.pu.te(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=i._u.get(u);c&&i._u.set(u,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i._u.get(a);if(!u)return;i._u.set(a,u.withResumeToken(It.EMPTY_BYTE_STRING,u.snapshotVersion)),lc(i,a);const c=new fe(u.target,a,1,u.sequenceNumber);Ws(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await sr(t,r)}}async function sr(t,e,n){if(!An(e))throw e;t.wu.add(1),await Rn(t),t.yu.set("Offline"),n||(n=()=>sc(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Or(t)})}function fc(t,e){return e().catch(n=>sr(t,n,e))}async function Mr(t){const e=q(t),n=ee(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;Dg(e);)try{const i=await fg(e.localStore,r);if(i===null){e.du.length===0&&n.$o();break}r=i.batchId,Rg(e,i)}catch(i){await sr(e,i)}dc(e)&&gc(e)}function Dg(t){return Ee(t)&&t.du.length<10}function Rg(t,e){t.du.push(e);const n=ee(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function dc(t){return Ee(t)&&!ee(t).ko()&&t.du.length>0}function gc(t){ee(t).start()}async function Ng(t){ee(t).nu()}async function Og(t){const e=ee(t);for(const n of t.du)e.Zo(n.mutations)}async function Mg(t,e,n){const r=t.du.shift(),i=Bs.from(r,e,n);await fc(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Mr(t)}async function Lg(t,e){e&&ee(t).Xo&&await async function(n,r){if(i=r.code,Ed(i)&&i!==b.ABORTED){const s=n.du.shift();ee(n).Fo(),await fc(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Mr(n)}var i}(t,e),dc(t)&&gc(t)}async function oa(t,e){const n=q(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Ee(n);n.wu.add(3),await Rn(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Or(n)}async function kg(t,e){const n=q(t);e?(n.wu.delete(2),await Or(n)):e||(n.wu.add(2),await Rn(n),n.yu.set("Unknown"))}function je(t){return t.Iu||(t.Iu=function(e,n,r){const i=q(e);return i.iu(),new Eg(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:_g.bind(null,t),Zr:Ag.bind(null,t),zo:Cg.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Hs(t)?zs(t):t.yu.set("Unknown")):(await t.Iu.stop(),hc(t))})),t.Iu}function ee(t){return t.Tu||(t.Tu=function(e,n,r){const i=q(e);return i.iu(),new Ig(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:Ng.bind(null,t),Zr:Lg.bind(null,t),eu:Og.bind(null,t),tu:Mg.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await Mr(t)):(await t.Tu.stop(),t.du.length>0&&(M("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class Gs{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Gs(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qs(t,e){if(Wt("AsyncQueue",`${e}: ${t}`),An(t))return new L(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ae{constructor(e){this.comparator=e?(n,r)=>e(n,r)||k.comparator(n.key,r.key):(n,r)=>k.comparator(n.key,r.key),this.keyedMap=Xe(),this.sortedSet=new ct(this.comparator)}static emptySet(e){return new Ae(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ae;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class aa{constructor(){this.Eu=new ct(k.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):V():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ke{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ke(e,n,Ae.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ar(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Ug{constructor(){this.Ru=void 0,this.listeners=[]}}class Fg{constructor(){this.queries=new Be(e=>Uu(e),Ar),this.onlineState="Unknown",this.bu=new Set}}async function mc(t,e){const n=q(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Ug),i)try{s.Ru=await n.onListen(r)}catch(o){const a=Qs(o,`Initialization of query '${ns(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.Ru&&e.vu(s.Ru)&&Xs(n)}async function pc(t,e){const n=q(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Pg(t,e){const n=q(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Ru=i}}r&&Xs(n)}function Vg(t,e,n){const r=q(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Xs(t){t.bu.forEach(e=>{e.next()})}class yc{constructor(e,n,r){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ke(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=ke.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
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
 */class vc{constructor(e){this.key=e}}class wc{constructor(e){this.key=e}}class qg{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=$(),this.mutatedKeys=$(),this.Gu=Fu(e),this.Qu=new Ae(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new aa,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const f=i.get(l),w=Ps(this.query,h)?h:null,T=!!f&&this.mutatedKeys.has(f.key),O=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let U=!1;f&&w?f.data.isEqual(w.data)?T!==O&&(r.track({type:3,doc:w}),U=!0):this.Hu(f,w)||(r.track({type:2,doc:w}),U=!0,(u&&this.Gu(w,u)>0||c&&this.Gu(w,c)<0)&&(a=!0)):!f&&w?(r.track({type:0,doc:w}),U=!0):f&&!w&&(r.track({type:1,doc:f}),U=!0,(u||c)&&(a=!0)),U&&(w?(o=o.add(w),s=O?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Au();s.sort((c,l)=>function(h,f){const w=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return w(h)-w(f)}(c.type,l.type)||this.Gu(c.doc,l.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.qu;return this.qu=a,s.length!==0||u?{snapshot:new ke(this.query,e.Qu,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new aa,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=$(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new wc(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new vc(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=$();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ke.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Bg{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jg{constructor(e){this.key=e,this.nc=!1}}class $g{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Be(a=>Uu(a),Ar),this.rc=new Map,this.oc=new Set,this.uc=new ct(k.comparator),this.cc=new Map,this.ac=new js,this.hc={},this.lc=new Map,this.fc=Le.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Kg(t,e){const n=xg(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await dg(n.localStore,zt(e));n.isPrimaryClient&&uc(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Wg(n,e,r,a==="current",o.resumeToken)}return i}async function Wg(t,e,n,r,i){t._c=(h,f,w)=>async function(T,O,U,X){let C=O.view.Wu(U);C.$i&&(C=await ra(T.localStore,O.query,!1).then(({documents:y})=>O.view.Wu(y,C)));const D=X&&X.targetChanges.get(O.targetId),A=O.view.applyChanges(C,T.isPrimaryClient,D);return ca(T,O.targetId,A.Xu),A.snapshot}(t,h,f,w);const s=await ra(t.localStore,e,!0),o=new qg(e,s.Hi),a=o.Wu(s.documents),u=Dn.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);ca(t,n,c.Xu);const l=new Bg(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function zg(t,e){const n=q(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Ar(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await os(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),cc(n.remoteStore,r.targetId),as(n,r.targetId)}).catch(_n)):(as(n,r.targetId),await os(n.localStore,r.targetId,!0))}async function Hg(t,e,n){const r=tm(t);try{const i=await function(s,o){const a=q(s),u=at.now(),c=o.reduce((f,w)=>f.add(w.key),$());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let w=Ht(),T=$();return a.Gi.getEntries(f,c).next(O=>{w=O,w.forEach((U,X)=>{X.isValidDocument()||(T=T.add(U))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,w)).next(O=>{l=O;const U=[];for(const X of o){const C=yd(X,l.get(X.key).overlayedDocument);C!=null&&U.push(new se(X.key,C,Lu(C.value.mapValue),Lt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,u,U,o)}).next(O=>{h=O;const U=O.applyToLocalDocumentSet(l,T);return a.documentOverlayCache.saveOverlays(f,O.batchId,U)})}).then(()=>({batchId:h.batchId,changes:Qu(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.hc[s.currentUser.toKey()];u||(u=new ct(Q)),u=u.insert(o,a),s.hc[s.currentUser.toKey()]=u}(r,i.batchId,n),await Nn(r,i.changes),await Mr(r.remoteStore)}catch(i){const s=Qs(i,"Failed to persist write");n.reject(s)}}async function Ec(t,e){const n=q(t);try{const r=await lg(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Y(o.nc):i.removedDocuments.size>0&&(Y(o.nc),o.nc=!1))}),await Nn(n,r,e)}catch(r){await _n(r)}}function ua(t,e,n){const r=q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=q(s);a.onlineState=o;let u=!1;a.queries.forEach((c,l)=>{for(const h of l.listeners)h.Pu(o)&&(u=!0)}),u&&Xs(a)}(r.eventManager,e),i.length&&r.sc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Gg(t,e,n){const r=q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new ct(k.comparator);o=o.insert(s,gt.newNoDocument(s,j.min()));const a=$().add(s),u=new Rr(j.min(),new Map,new ut(Q),o,a);await Ec(r,u),r.uc=r.uc.remove(s),r.cc.delete(e),Ys(r)}else await os(r.localStore,e,!1).then(()=>as(r,e,n)).catch(_n)}async function Qg(t,e){const n=q(t),r=e.batch.batchId;try{const i=await cg(n.localStore,e);bc(n,r,null),Ic(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Nn(n,i)}catch(i){await _n(i)}}async function Xg(t,e,n){const r=q(t);try{const i=await function(s,o){const a=q(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(l=>(Y(l!==null),c=l.keys(),a.mutationQueue.removeMutationBatch(u,l))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(r.localStore,e);bc(r,e,n),Ic(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Nn(r,i)}catch(i){await _n(i)}}function Ic(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function bc(t,e,n){const r=q(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function as(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||Sc(t,r)})}function Sc(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(cc(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ys(t))}function ca(t,e,n){for(const r of n)r instanceof vc?(t.ac.addReference(r.key,e),Yg(t,r)):r instanceof wc?(M("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Sc(t,r.key)):V()}function Yg(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(M("SyncEngine","New document in limbo: "+n),t.oc.add(r),Ys(t))}function Ys(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new k(Z.fromString(e)),r=t.fc.next();t.cc.set(r,new jg(n)),t.uc=t.uc.insert(n,r),uc(t.remoteStore,new fe(zt(_r(n.path)),r,2,Ls.at))}}async function Nn(t,e,n){const r=q(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,u)=>{o.push(r._c(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const l=Ks.Ci(u.targetId,c);s.push(l)}}))}),await Promise.all(o),r.sc.zo(i),await async function(a,u){const c=q(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>S.forEach(u,h=>S.forEach(h.Si,f=>c.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>S.forEach(h.Di,f=>c.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!An(l))throw l;M("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const h=l.targetId;if(!l.fromCache){const f=c.Ui.get(h),w=f.snapshotVersion,T=f.withLastLimboFreeSnapshotVersion(w);c.Ui=c.Ui.insert(h,T)}}}(r.localStore,s))}async function Jg(t,e){const n=q(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await ic(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new L(b.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Nn(n,r.ji)}}function Zg(t,e){const n=q(t),r=n.cc.get(e);if(r&&r.nc)return $().add(r.key);{let i=$();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function xg(t){const e=q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ec.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gg.bind(null,e),e.sc.zo=Pg.bind(null,e.eventManager),e.sc.wc=Vg.bind(null,e.eventManager),e}function tm(t){const e=q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Xg.bind(null,e),e}class em{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Nr(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return ug(this.persistence,new og,e.initialUser,this.It)}yc(e){return new ig($s.Bs,this.It)}gc(e){return new mg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ua(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jg.bind(null,this.syncEngine),await kg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Fg}createDatastore(e){const n=Nr(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new wg(i));var i;return function(s,o,a,u){return new bg(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>ua(this.syncEngine,a,0),o=sa.C()?new sa:new pg,new Tg(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,c){const l=new $g(r,i,s,o,a,u);return c&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=q(e);M("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Rn(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Tc(t,e,n){if(!n)throw new L(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rm(t,e,n,r){if(e===!0&&r===!0)throw new L(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function la(t){if(!k.isDocumentKey(t))throw new L(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ha(t){if(k.isDocumentKey(t))throw new L(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Js(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Js(t);throw new L(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const fa=new Map;class da{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,rm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Lr{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new da({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new da(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Of;switch(n.type){case"gapi":const r=n.client;return new Uf(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=fa.get(e);n&&(M("ComponentProvider","Removing Datastore"),fa.delete(e),n.terminate())}(this),Promise.resolve()}}function im(t,e,n,r={}){var i;const s=(t=kt(t,Lr))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Ji("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=yt.MOCK_USER;else{o=fl(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new L(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new yt(u)}t._authCredentials=new Mf(new Du(o,a))}}/**
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
 */class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class kr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kr(this.firestore,e,this._query)}}class Zt extends kr{constructor(e,n,r){super(e,n,_r(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new k(e))}withConverter(e){return new Zt(this.firestore,e,this._path)}}function sm(t,e,...n){if(t=$t(t),Tc("collection","path",e),t instanceof Lr){const r=Z.fromString(e,...n);return ha(r),new Zt(t,null,r)}{if(!(t instanceof St||t instanceof Zt))throw new L(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Z.fromString(e,...n));return ha(r),new Zt(t.firestore,null,r)}}function On(t,e,...n){if(t=$t(t),arguments.length===1&&(e=Ru.R()),Tc("doc","path",e),t instanceof Lr){const r=Z.fromString(e,...n);return la(r),new St(t,null,new k(r))}{if(!(t instanceof St||t instanceof Zt))throw new L(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Z.fromString(e,...n));return la(r),new St(t.firestore,t instanceof Zt?t.converter:null,new k(r))}}/**
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
 *//**
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
 */class _c{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class om{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=Ru.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{M("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(M("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qs(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function am(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ic(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function um(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cm(t);M("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>oa(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>oa(e.remoteStore,s)),t.onlineComponents=e}async function cm(t){return t.offlineComponents||(M("FirestoreClient","Using default OfflineComponentProvider"),await am(t,new em)),t.offlineComponents}async function Ac(t){return t.onlineComponents||(M("FirestoreClient","Using default OnlineComponentProvider"),await um(t,new nm)),t.onlineComponents}function lm(t){return Ac(t).then(e=>e.syncEngine)}async function us(t){const e=await Ac(t),n=e.eventManager;return n.onListen=Kg.bind(null,e.syncEngine),n.onUnlisten=zg.bind(null,e.syncEngine),n}function hm(t,e,n={}){const r=new Jt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const c=new _c({next:h=>{s.enqueueAndForget(()=>pc(i,l));const f=h.docs.has(o);!f&&h.fromCache?u.reject(new L(b.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?u.reject(new L(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new yc(_r(o.path),c,{includeMetadataChanges:!0,ku:!0});return mc(i,l)}(await us(t),t.asyncQueue,e,n,r)),r.promise}class fm{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new oc(this,"async_queue_retry"),this.Wc=()=>{const n=Mi();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Mi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Mi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Jt;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!An(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Wt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Gs.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&V()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function ga(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ye extends Lr{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new fm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cc(this),this._firestoreClient.terminate()}}function dm(t,e){const n=typeof t=="object"?t:gh(),r=typeof t=="string"?t:e||"(default)",i=lh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cl("firestore");s&&im(i,...s)}return i}function Zs(t){return t._firestoreClient||Cc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Cc(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new Hf(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new om(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 *//**
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
 */class Ue{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ue(It.fromBase64String(e))}catch(n){throw new L(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ue(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ur{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $e{constructor(e){this._methodName=e}}/**
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
 */class xs{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
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
 */const gm=/^__.*__$/;class mm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new se(e,this.data,this.fieldMask,n,this.fieldTransforms):new Cn(e,this.data,n,this.fieldTransforms)}}class Dc{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new se(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Rc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class Fr{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Fr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return or(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Rc(this.sa)&&gm.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class pm{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Nr(e)}da(e,n,r,i=!1){return new Fr({sa:e,methodName:n,fa:r,path:vt.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function to(t){const e=t._freezeSettings(),n=Nr(t._databaseId);return new pm(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Nc(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);no("Data must be an object, but it was:",o,r);const a=Mc(r,o);let u,c;if(s.merge)u=new Ot(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const f=cs(e,h,n);if(!o.contains(f))throw new L(b.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);kc(l,f)||l.push(f)}u=new Ot(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new mm(new _t(a),u,c)}class Pr extends $e{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pr}}function Oc(t,e,n){return new Fr({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class eo extends $e{_toFieldTransform(e){return new Vs(e.path,new mn)}isEqual(e){return e instanceof eo}}class ym extends $e{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=Oc(this,e,!0),r=this._a.map(s=>Ke(s,n)),i=new Oe(r);return new Vs(e.path,i)}isEqual(e){return this===e}}class vm extends $e{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=Oc(this,e,!0),r=this._a.map(s=>Ke(s,n)),i=new Me(r);return new Vs(e.path,i)}isEqual(e){return this===e}}function wm(t,e,n,r){const i=t.da(1,e,n);no("Data must be an object, but it was:",i,r);const s=[],o=_t.empty();we(r,(u,c)=>{const l=ro(e,u,n);c=$t(c);const h=i.ca(l);if(c instanceof Pr)s.push(l);else{const f=Ke(c,h);f!=null&&(s.push(l),o.set(l,f))}});const a=new Ot(s);return new Dc(o,a,i.fieldTransforms)}function Em(t,e,n,r,i,s){const o=t.da(1,e,n),a=[cs(e,r,n)],u=[i];if(s.length%2!=0)throw new L(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(cs(e,s[f])),u.push(s[f+1]);const c=[],l=_t.empty();for(let f=a.length-1;f>=0;--f)if(!kc(c,a[f])){const w=a[f];let T=u[f];T=$t(T);const O=o.ca(w);if(T instanceof Pr)c.push(w);else{const U=Ke(T,O);U!=null&&(c.push(w),l.set(w,U))}}const h=new Ot(c);return new Dc(l,h,o.fieldTransforms)}function Ke(t,e){if(Lc(t=$t(t)))return no("Unsupported field value:",e,t),Mc(t,e);if(t instanceof $e)return function(n,r){if(!Rc(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ke(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=$t(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hd(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=at.fromDate(n);return{timestampValue:ir(r.It,i)}}if(n instanceof at){const i=new at(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ir(r.It,i)}}if(n instanceof xs)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ue)return{bytesValue:xu(r.It,n._byteString)};if(n instanceof St){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qs(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Js(n)}`)}(t,e)}function Mc(t,e){const n={};return Nu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):we(t,(r,i)=>{const s=Ke(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Lc(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof xs||t instanceof Ue||t instanceof St||t instanceof $e)}function no(t,e,n){if(!Lc(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Js(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function cs(t,e,n){if((e=$t(e))instanceof Ur)return e._internalPath;if(typeof e=="string")return ro(t,e);throw or("Field path arguments must be of type string or ",t,!1,void 0,n)}const Im=new RegExp("[~\\*/\\[\\]]");function ro(t,e,n){if(e.search(Im)>=0)throw or(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ur(...e.split("."))._internalPath}catch{throw or(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function or(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new L(b.INVALID_ARGUMENT,a+t+u)}function kc(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Uc{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bm extends Uc{data(){return super.data()}}function Fc(t,e){return typeof e=="string"?ro(t,e):e instanceof Ur?e._internalPath:e._delegate._internalPath}/**
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
 */function Sm(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class Tm{convertValue(e,n="none"){switch(pe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Re(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){const r={};return we(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new xs(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Mu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(hn(e));default:return null}}convertTimestamp(e){const n=te(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Z.fromString(e);Y(rc(r));const i=new fn(r.get(1),r.get(3)),s=new k(r.popFirst(5));return i.isEqual(n)||Wt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Pc(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ye{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vc extends Uc{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Kn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Kn extends Vc{data(e={}){return super.data(e)}}class _m{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ye(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Kn(this._firestore,this._userDataWriter,r.key,r,new Ye(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Kn(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ye(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Kn(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ye(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,c=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:Am(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Am(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}/**
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
 */function Cm(t){t=kt(t,St);const e=kt(t.firestore,ye);return hm(Zs(e),t._key).then(n=>Bc(e,t,n))}class qc extends Tm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ue(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function Dm(t,e,n){t=kt(t,St);const r=kt(t.firestore,ye),i=Pc(t.converter,e,n);return io(r,[Nc(to(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Lt.none())])}function Rm(t,e,n,...r){t=kt(t,St);const i=kt(t.firestore,ye),s=to(i);let o;return o=typeof(e=$t(e))=="string"||e instanceof Ur?Em(s,"updateDoc",t._key,e,n,r):wm(s,"updateDoc",t._key,e),io(i,[o.toMutation(t._key,Lt.exists(!0))])}function Nm(t,e){const n=kt(t.firestore,ye),r=On(t),i=Pc(t.converter,e);return io(n,[Nc(to(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function Om(t,...e){var n,r,i;t=$t(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ga(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(ga(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,c,l;if(t instanceof St)c=kt(t.firestore,ye),l=_r(t._key.path),u={next:h=>{e[o]&&e[o](Bc(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=kt(t,kr);c=kt(h.firestore,ye),l=h._query;const f=new qc(c);u={next:w=>{e[o]&&e[o](new _m(c,f,h,w))},error:e[o+1],complete:e[o+2]},Sm(t._query)}return function(h,f,w,T){const O=new _c(T),U=new yc(f,O,w);return h.asyncQueue.enqueueAndForget(async()=>mc(await us(h),U)),()=>{O.bc(),h.asyncQueue.enqueueAndForget(async()=>pc(await us(h),U))}}(Zs(c),l,a,u)}function io(t,e){return function(n,r){const i=new Jt;return n.asyncQueue.enqueueAndForget(async()=>Hg(await lm(n),r,i)),i.promise}(Zs(t),e)}function Bc(t,e,n){const r=n.docs.get(e._key),i=new qc(t);return new Vc(t,i,e._key,r,new Ye(n.hasPendingWrites,n.fromCache),e.converter)}function Mm(){return new eo("serverTimestamp")}function Lm(...t){return new ym("arrayUnion",t)}function km(...t){return new vm("arrayRemove",t)}(function(t,e=!0){(function(n){qe=n})(dh),Hn(new nn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ye(new Lf(n.getProvider("auth-internal")),new Pf(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fn(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Te(Vo,"3.7.1",t),Te(Vo,"3.7.1","esm2017")})();var P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Um(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Tt={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.getEndomorphismMonoid=t.not=t.SK=t.hole=t.pipe=t.untupled=t.tupled=t.absurd=t.decrement=t.increment=t.tuple=t.flow=t.flip=t.constVoid=t.constUndefined=t.constNull=t.constFalse=t.constTrue=t.constant=t.unsafeCoerce=t.identity=t.apply=t.getRing=t.getSemiring=t.getMonoid=t.getSemigroup=t.getBooleanAlgebra=void 0;var e=function(y){return function(){return{meet:function(g,I){return function(_){return y.meet(g(_),I(_))}},join:function(g,I){return function(_){return y.join(g(_),I(_))}},zero:function(){return y.zero},one:function(){return y.one},implies:function(g,I){return function(_){return y.implies(g(_),I(_))}},not:function(g){return function(I){return y.not(g(I))}}}}};t.getBooleanAlgebra=e;var n=function(y){return function(){return{concat:function(g,I){return function(_){return y.concat(g(_),I(_))}}}}};t.getSemigroup=n;var r=function(y){var g=(0,t.getSemigroup)(y);return function(){return{concat:g().concat,empty:function(){return y.empty}}}};t.getMonoid=r;var i=function(y){return{add:function(g,I){return function(_){return y.add(g(_),I(_))}},zero:function(){return y.zero},mul:function(g,I){return function(_){return y.mul(g(_),I(_))}},one:function(){return y.one}}};t.getSemiring=i;var s=function(y){var g=(0,t.getSemiring)(y);return{add:g.add,mul:g.mul,one:g.one,zero:g.zero,sub:function(I,_){return function(W){return y.sub(I(W),_(W))}}}};t.getRing=s;var o=function(y){return function(g){return g(y)}};t.apply=o;function a(y){return y}t.identity=a,t.unsafeCoerce=a;function u(y){return function(){return y}}t.constant=u,t.constTrue=u(!0),t.constFalse=u(!1),t.constNull=u(null),t.constUndefined=u(void 0),t.constVoid=t.constUndefined;function c(y){return function(g,I){return y(I,g)}}t.flip=c;function l(y,g,I,_,W,H,x,Mt,Qt){switch(arguments.length){case 1:return y;case 2:return function(){return g(y.apply(this,arguments))};case 3:return function(){return I(g(y.apply(this,arguments)))};case 4:return function(){return _(I(g(y.apply(this,arguments))))};case 5:return function(){return W(_(I(g(y.apply(this,arguments)))))};case 6:return function(){return H(W(_(I(g(y.apply(this,arguments))))))};case 7:return function(){return x(H(W(_(I(g(y.apply(this,arguments)))))))};case 8:return function(){return Mt(x(H(W(_(I(g(y.apply(this,arguments))))))))};case 9:return function(){return Qt(Mt(x(H(W(_(I(g(y.apply(this,arguments)))))))))}}}t.flow=l;function h(){for(var y=[],g=0;g<arguments.length;g++)y[g]=arguments[g];return y}t.tuple=h;function f(y){return y+1}t.increment=f;function w(y){return y-1}t.decrement=w;function T(y){throw new Error("Called `absurd` function which should be uncallable")}t.absurd=T;function O(y){return function(g){return y.apply(void 0,g)}}t.tupled=O;function U(y){return function(){for(var g=[],I=0;I<arguments.length;I++)g[I]=arguments[I];return y(g)}}t.untupled=U;function X(y,g,I,_,W,H,x,Mt,Qt){switch(arguments.length){case 1:return y;case 2:return g(y);case 3:return I(g(y));case 4:return _(I(g(y)));case 5:return W(_(I(g(y))));case 6:return H(W(_(I(g(y)))));case 7:return x(H(W(_(I(g(y))))));case 8:return Mt(x(H(W(_(I(g(y)))))));case 9:return Qt(Mt(x(H(W(_(I(g(y))))))));default:{for(var Pt=arguments[0],Vt=1;Vt<arguments.length;Vt++)Pt=arguments[Vt](Pt);return Pt}}}t.pipe=X,t.hole=T;var C=function(y,g){return g};t.SK=C;function D(y){return function(g){return!y(g)}}t.not=D;var A=function(){return{concat:function(y,g){return l(y,g)},empty:a}};t.getEndomorphismMonoid=A})(Tt);const Fm=Um(Tt),Pm=Zc({__proto__:null,default:Fm},[Tt]);var jc={},$c={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.eqDate=t.eqNumber=t.eqString=t.eqBoolean=t.eq=t.strictEqual=t.getStructEq=t.getTupleEq=t.Contravariant=t.getMonoid=t.getSemigroup=t.eqStrict=t.URI=t.contramap=t.tuple=t.struct=t.fromEquals=void 0;var e=Tt,n=function(l){return{equals:function(h,f){return h===f||l(h,f)}}};t.fromEquals=n;var r=function(l){return(0,t.fromEquals)(function(h,f){for(var w in l)if(!l[w].equals(h[w],f[w]))return!1;return!0})};t.struct=r;var i=function(){for(var l=[],h=0;h<arguments.length;h++)l[h]=arguments[h];return(0,t.fromEquals)(function(f,w){return l.every(function(T,O){return T.equals(f[O],w[O])})})};t.tuple=i;var s=function(l,h){return(0,e.pipe)(l,(0,t.contramap)(h))},o=function(l){return function(h){return(0,t.fromEquals)(function(f,w){return h.equals(l(f),l(w))})}};t.contramap=o,t.URI="Eq",t.eqStrict={equals:function(l,h){return l===h}};var a={equals:function(){return!0}},u=function(){return{concat:function(l,h){return(0,t.fromEquals)(function(f,w){return l.equals(f,w)&&h.equals(f,w)})}}};t.getSemigroup=u;var c=function(){return{concat:(0,t.getSemigroup)().concat,empty:a}};t.getMonoid=c,t.Contravariant={URI:t.URI,contramap:s},t.getTupleEq=t.tuple,t.getStructEq=t.struct,t.strictEqual=t.eqStrict.equals,t.eq=t.Contravariant,t.eqBoolean=t.eqStrict,t.eqString=t.eqStrict,t.eqNumber=t.eqStrict,t.eqDate={equals:function(l,h){return l.valueOf()===h.valueOf()}}})($c);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ordDate=t.ordNumber=t.ordString=t.ordBoolean=t.ord=t.getDualOrd=t.getTupleOrd=t.between=t.clamp=t.max=t.min=t.geq=t.leq=t.gt=t.lt=t.equals=t.trivial=t.Contravariant=t.getMonoid=t.getSemigroup=t.URI=t.contramap=t.reverse=t.tuple=t.fromCompare=t.equalsDefault=void 0;var e=$c,n=Tt,r=function(g){return function(I,_){return I===_||g(I,_)===0}};t.equalsDefault=r;var i=function(g){return{equals:(0,t.equalsDefault)(g),compare:function(I,_){return I===_?0:g(I,_)}}};t.fromCompare=i;var s=function(){for(var g=[],I=0;I<arguments.length;I++)g[I]=arguments[I];return(0,t.fromCompare)(function(_,W){for(var H=0;H<g.length-1;H++){var x=g[H].compare(_[H],W[H]);if(x!==0)return x}return g[H].compare(_[H],W[H])})};t.tuple=s;var o=function(g){return(0,t.fromCompare)(function(I,_){return g.compare(_,I)})};t.reverse=o;var a=function(g,I){return(0,n.pipe)(g,(0,t.contramap)(I))},u=function(g){return function(I){return(0,t.fromCompare)(function(_,W){return I.compare(g(_),g(W))})}};t.contramap=u,t.URI="Ord";var c=function(){return{concat:function(g,I){return(0,t.fromCompare)(function(_,W){var H=g.compare(_,W);return H!==0?H:I.compare(_,W)})}}};t.getSemigroup=c;var l=function(){return{concat:(0,t.getSemigroup)().concat,empty:(0,t.fromCompare)(function(){return 0})}};t.getMonoid=l,t.Contravariant={URI:t.URI,contramap:a},t.trivial={equals:n.constTrue,compare:(0,n.constant)(0)};var h=function(g){return function(I){return function(_){return _===I||g.compare(_,I)===0}}};t.equals=h;var f=function(g){return function(I,_){return g.compare(I,_)===-1}};t.lt=f;var w=function(g){return function(I,_){return g.compare(I,_)===1}};t.gt=w;var T=function(g){return function(I,_){return g.compare(I,_)!==1}};t.leq=T;var O=function(g){return function(I,_){return g.compare(I,_)!==-1}};t.geq=O;var U=function(g){return function(I,_){return I===_||g.compare(I,_)<1?I:_}};t.min=U;var X=function(g){return function(I,_){return I===_||g.compare(I,_)>-1?I:_}};t.max=X;var C=function(g){var I=(0,t.min)(g),_=(0,t.max)(g);return function(W,H){return function(x){return _(I(x,H),W)}}};t.clamp=C;var D=function(g){var I=(0,t.lt)(g),_=(0,t.gt)(g);return function(W,H){return function(x){return!(I(x,W)||_(x,H))}}};t.between=D,t.getTupleOrd=t.tuple,t.getDualOrd=t.reverse,t.ord=t.Contravariant;function A(g,I){return g<I?-1:g>I?1:0}var y={equals:e.eqStrict.equals,compare:A};t.ordBoolean=y,t.ordString=y,t.ordNumber=y,t.ordDate=(0,n.pipe)(t.ordNumber,(0,t.contramap)(function(g){return g.valueOf()}))})(jc);var so={},ne={},ot={},B={},Vm=P&&P.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))};Object.defineProperty(B,"__esModule",{value:!0});B.fromReadonlyNonEmptyArray=B.has=B.emptyRecord=B.emptyReadonlyArray=B.tail=B.head=B.isNonEmpty=B.singleton=B.right=B.left=B.isRight=B.isLeft=B.some=B.none=B.isSome=B.isNone=void 0;var qm=function(t){return t._tag==="None"};B.isNone=qm;var Bm=function(t){return t._tag==="Some"};B.isSome=Bm;B.none={_tag:"None"};var jm=function(t){return{_tag:"Some",value:t}};B.some=jm;var $m=function(t){return t._tag==="Left"};B.isLeft=$m;var Km=function(t){return t._tag==="Right"};B.isRight=Km;var Wm=function(t){return{_tag:"Left",left:t}};B.left=Wm;var zm=function(t){return{_tag:"Right",right:t}};B.right=zm;var Hm=function(t){return[t]};B.singleton=Hm;var Gm=function(t){return t.length>0};B.isNonEmpty=Gm;var Qm=function(t){return t[0]};B.head=Qm;var Xm=function(t){return t.slice(1)};B.tail=Xm;B.emptyReadonlyArray=[];B.emptyRecord={};B.has=Object.prototype.hasOwnProperty;var Ym=function(t){return Vm([t[0]],t.slice(1),!0)};B.fromReadonlyNonEmptyArray=Ym;var Jm=P&&P.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),Zm=P&&P.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),xm=P&&P.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&Jm(e,t,n);return Zm(e,t),e};Object.defineProperty(ot,"__esModule",{value:!0});var Vr=ot.sequenceS=ao=ot.sequenceT=ot.getApplySemigroup=ot.apS=ot.apSecond=ot.apFirst=ot.ap=void 0,tp=Tt,ep=xm(B);function np(t,e){return function(n){return function(r){return t.ap(t.map(r,function(i){return function(s){return e.ap(i,s)}}),n)}}}ot.ap=np;function rp(t){return function(e){return function(n){return t.ap(t.map(n,function(r){return function(){return r}}),e)}}}ot.apFirst=rp;function ip(t){return function(e){return function(n){return t.ap(t.map(n,function(){return function(r){return r}}),e)}}}ot.apSecond=ip;function sp(t){return function(e,n){return function(r){return t.ap(t.map(r,function(i){return function(s){var o;return Object.assign({},i,(o={},o[e]=s,o))}}),n)}}}ot.apS=sp;function op(t){return function(e){return{concat:function(n,r){return t.ap(t.map(n,function(i){return function(s){return e.concat(i,s)}}),r)}}}}ot.getApplySemigroup=op;function oo(t,e,n){return function(r){for(var i=Array(n.length+1),s=0;s<n.length;s++)i[s]=n[s];return i[n.length]=r,e===0?t.apply(null,i):oo(t,e-1,i)}}var Li={1:function(t){return[t]},2:function(t){return function(e){return[t,e]}},3:function(t){return function(e){return function(n){return[t,e,n]}}},4:function(t){return function(e){return function(n){return function(r){return[t,e,n,r]}}}},5:function(t){return function(e){return function(n){return function(r){return function(i){return[t,e,n,r,i]}}}}}};function ap(t){return ep.has.call(Li,t)||(Li[t]=oo(tp.tuple,t-1,[])),Li[t]}function up(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var r=e.length,i=ap(r),s=t.map(e[0],i),o=1;o<r;o++)s=t.ap(s,e[o]);return s}}var ao=ot.sequenceT=up;function cp(t){var e=t.length;switch(e){case 1:return function(n){var r;return r={},r[t[0]]=n,r};case 2:return function(n){return function(r){var i;return i={},i[t[0]]=n,i[t[1]]=r,i}};case 3:return function(n){return function(r){return function(i){var s;return s={},s[t[0]]=n,s[t[1]]=r,s[t[2]]=i,s}}};case 4:return function(n){return function(r){return function(i){return function(s){var o;return o={},o[t[0]]=n,o[t[1]]=r,o[t[2]]=i,o[t[3]]=s,o}}}};case 5:return function(n){return function(r){return function(i){return function(s){return function(o){var a;return a={},a[t[0]]=n,a[t[1]]=r,a[t[2]]=i,a[t[3]]=s,a[t[4]]=o,a}}}}};default:return oo(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];for(var i={},s=0;s<e;s++)i[t[s]]=n[s];return i},e-1,[])}}function lp(t){return function(e){for(var n=Object.keys(e),r=n.length,i=cp(n),s=t.map(e[n[0]],i),o=1;o<r;o++)s=t.ap(s,e[n[o]]);return s}}Vr=ot.sequenceS=lp;var Ct={};Object.defineProperty(Ct,"__esModule",{value:!0});Ct.getFunctorComposition=Ct.bindTo=Ct.flap=Ct.map=void 0;var hp=Tt;function Kc(t,e){return function(n){return function(r){return t.map(r,function(i){return e.map(i,n)})}}}Ct.map=Kc;function fp(t){return function(e){return function(n){return t.map(n,function(r){return r(e)})}}}Ct.flap=fp;function dp(t){return function(e){return function(n){return t.map(n,function(r){var i;return i={},i[e]=r,i})}}}Ct.bindTo=dp;function gp(t,e){var n=Kc(t,e);return{map:function(r,i){return(0,hp.pipe)(r,n(i))}}}Ct.getFunctorComposition=gp;Object.defineProperty(ne,"__esModule",{value:!0});ne.getApplicativeComposition=ne.getApplicativeMonoid=void 0;var Wc=ot,mp=Tt,pp=Ct;function yp(t){var e=(0,Wc.getApplySemigroup)(t);return function(n){return{concat:e(n).concat,empty:t.of(n.empty)}}}ne.getApplicativeMonoid=yp;function vp(t,e){var n=(0,pp.getFunctorComposition)(t,e).map,r=(0,Wc.ap)(t,e);return{map:n,of:function(i){return t.of(e.of(i))},ap:function(i,s){return(0,mp.pipe)(i,r(s))}}}ne.getApplicativeComposition=vp;var Gt={};Object.defineProperty(Gt,"__esModule",{value:!0});Gt.bind=Gt.chainFirst=void 0;function wp(t){return function(e){return function(n){return t.chain(n,function(r){return t.map(e(r),function(){return r})})}}}Gt.chainFirst=wp;function Ep(t){return function(e,n){return function(r){return t.chain(r,function(i){return t.map(n(i),function(s){var o;return Object.assign({},i,(o={},o[e]=s,o))})})}}}Gt.bind=Ep;var qr={};Object.defineProperty(qr,"__esModule",{value:!0});qr.tailRec=void 0;var Ip=function(t,e){for(var n=e(t);n._tag==="Left";)n=e(n.left);return n.right};qr.tailRec=Ip;var st={},bp=P&&P.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),Sp=P&&P.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),Tp=P&&P.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&bp(e,t,n);return Sp(e,t),e};Object.defineProperty(st,"__esModule",{value:!0});st.filterOrElse=st.chainFirstEitherK=st.chainEitherK=st.fromEitherK=st.chainOptionK=st.fromOptionK=st.fromPredicate=st.fromOption=void 0;var _p=Gt,uo=Tt,de=Tp(B);function zc(t){return function(e){return function(n){return t.fromEither(de.isNone(n)?de.left(e()):de.right(n.value))}}}st.fromOption=zc;function Ap(t){return function(e,n){return function(r){return t.fromEither(e(r)?de.right(r):de.left(n(r)))}}}st.fromPredicate=Ap;function Hc(t){var e=zc(t);return function(n){var r=e(n);return function(i){return(0,uo.flow)(i,r)}}}st.fromOptionK=Hc;function Cp(t,e){var n=Hc(t);return function(r){var i=n(r);return function(s){return function(o){return e.chain(o,i(s))}}}}st.chainOptionK=Cp;function co(t){return function(e){return(0,uo.flow)(e,t.fromEither)}}st.fromEitherK=co;function Dp(t,e){var n=co(t);return function(r){return function(i){return e.chain(i,n(r))}}}st.chainEitherK=Dp;function Rp(t,e){return(0,uo.flow)(co(t),(0,_p.chainFirst)(e))}st.chainFirstEitherK=Rp;function Np(t,e){return function(n,r){return function(i){return e.chain(i,function(s){return t.fromEither(n(s)?de.right(s):de.left(r(s)))})}}}st.filterOrElse=Np;var lo={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.right=t.left=t.flap=t.Functor=t.Bifunctor=t.URI=t.bimap=t.mapLeft=t.map=t.separated=void 0;var e=Tt,n=Ct,r=function(f,w){return{left:f,right:w}};t.separated=r;var i=function(f,w){return(0,e.pipe)(f,(0,t.map)(w))},s=function(f,w){return(0,e.pipe)(f,(0,t.mapLeft)(w))},o=function(f,w,T){return(0,e.pipe)(f,(0,t.bimap)(w,T))},a=function(f){return function(w){return(0,t.separated)((0,t.left)(w),f((0,t.right)(w)))}};t.map=a;var u=function(f){return function(w){return(0,t.separated)(f((0,t.left)(w)),(0,t.right)(w))}};t.mapLeft=u;var c=function(f,w){return function(T){return(0,t.separated)(f((0,t.left)(T)),w((0,t.right)(T)))}};t.bimap=c,t.URI="Separated",t.Bifunctor={URI:t.URI,mapLeft:s,bimap:o},t.Functor={URI:t.URI,map:i},t.flap=(0,n.flap)(t.Functor);var l=function(f){return f.left};t.left=l;var h=function(f){return f.right};t.right=h})(lo);var jt={},Op=P&&P.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),Mp=P&&P.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),Lp=P&&P.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&Op(e,t,n);return Mp(e,t),e};Object.defineProperty(jt,"__esModule",{value:!0});jt.filterE=jt.witherDefault=jt.wiltDefault=void 0;var ma=Lp(B);function kp(t,e){return function(n){var r=t.traverse(n);return function(i,s){return n.map(r(i,s),e.separate)}}}jt.wiltDefault=kp;function Up(t,e){return function(n){var r=t.traverse(n);return function(i,s){return n.map(r(i,s),e.compact)}}}jt.witherDefault=Up;function Fp(t){return function(e){var n=t.wither(e);return function(r){return function(i){return n(i,function(s){return e.map(r(s),function(o){return o?ma.some(s):ma.none})})}}}}jt.filterE=Fp;(function(t){var e=P&&P.__createBinding||(Object.create?function(p,d,E,K){K===void 0&&(K=E);var ft=Object.getOwnPropertyDescriptor(d,E);(!ft||("get"in ft?!d.__esModule:ft.writable||ft.configurable))&&(ft={enumerable:!0,get:function(){return d[E]}}),Object.defineProperty(p,K,ft)}:function(p,d,E,K){K===void 0&&(K=E),p[K]=d[E]}),n=P&&P.__setModuleDefault||(Object.create?function(p,d){Object.defineProperty(p,"default",{enumerable:!0,value:d})}:function(p,d){p.default=d}),r=P&&P.__importStar||function(p){if(p&&p.__esModule)return p;var d={};if(p!=null)for(var E in p)E!=="default"&&Object.prototype.hasOwnProperty.call(p,E)&&e(d,p,E);return n(d,p),d};Object.defineProperty(t,"__esModule",{value:!0}),t.fold=t.match=t.foldW=t.matchW=t.isRight=t.isLeft=t.fromOption=t.fromPredicate=t.FromEither=t.MonadThrow=t.throwError=t.ChainRec=t.Extend=t.extend=t.Alt=t.alt=t.altW=t.Bifunctor=t.mapLeft=t.bimap=t.Traversable=t.sequence=t.traverse=t.Foldable=t.reduceRight=t.foldMap=t.reduce=t.Monad=t.Chain=t.chain=t.chainW=t.Applicative=t.Apply=t.ap=t.apW=t.Pointed=t.of=t.Functor=t.map=t.getAltValidation=t.getApplicativeValidation=t.getWitherable=t.getFilterable=t.getCompactable=t.getSemigroup=t.getEq=t.getShow=t.URI=t.right=t.left=void 0,t.getValidation=t.getValidationMonoid=t.getValidationSemigroup=t.getApplyMonoid=t.getApplySemigroup=t.either=t.stringifyJSON=t.parseJSON=t.sequenceArray=t.traverseArray=t.traverseArrayWithIndex=t.traverseReadonlyArrayWithIndex=t.traverseReadonlyNonEmptyArrayWithIndex=t.ApT=t.apSW=t.apS=t.bindW=t.bind=t.bindTo=t.Do=t.exists=t.elem=t.toError=t.toUnion=t.chainNullableK=t.fromNullableK=t.tryCatchK=t.tryCatch=t.fromNullable=t.orElse=t.orElseW=t.swap=t.filterOrElseW=t.filterOrElse=t.chainOptionK=t.fromOptionK=t.duplicate=t.flatten=t.flattenW=t.chainFirstW=t.chainFirst=t.apSecondW=t.apSecond=t.apFirstW=t.apFirst=t.flap=t.getOrElse=t.getOrElseW=void 0;var i=ne,s=ot,o=Gt,a=qr,u=st,c=Tt,l=Ct,h=r(B),f=lo,w=jt;t.left=h.left,t.right=h.right;var T=function(p,d){return(0,c.pipe)(p,(0,t.map)(d))},O=function(p,d){return(0,c.pipe)(p,(0,t.ap)(d))},U=function(p,d){return(0,c.pipe)(p,(0,t.chain)(d))},X=function(p,d,E){return(0,c.pipe)(p,(0,t.reduce)(d,E))},C=function(p){return function(d,E){var K=(0,t.foldMap)(p);return(0,c.pipe)(d,K(E))}},D=function(p,d,E){return(0,c.pipe)(p,(0,t.reduceRight)(d,E))},A=function(p){var d=(0,t.traverse)(p);return function(E,K){return(0,c.pipe)(E,d(K))}},y=function(p,d,E){return(0,c.pipe)(p,(0,t.bimap)(d,E))},g=function(p,d){return(0,c.pipe)(p,(0,t.mapLeft)(d))},I=function(p,d){return(0,c.pipe)(p,(0,t.alt)(d))},_=function(p,d){return(0,c.pipe)(p,(0,t.extend)(d))},W=function(p,d){return(0,a.tailRec)(d(p),function(E){return(0,t.isLeft)(E)?(0,t.right)((0,t.left)(E.left)):(0,t.isLeft)(E.right)?(0,t.left)(d(E.right.left)):(0,t.right)((0,t.right)(E.right.right))})};t.URI="Either";var H=function(p,d){return{show:function(E){return(0,t.isLeft)(E)?"left(".concat(p.show(E.left),")"):"right(".concat(d.show(E.right),")")}}};t.getShow=H;var x=function(p,d){return{equals:function(E,K){return E===K||((0,t.isLeft)(E)?(0,t.isLeft)(K)&&p.equals(E.left,K.left):(0,t.isRight)(K)&&d.equals(E.right,K.right))}}};t.getEq=x;var Mt=function(p){return{concat:function(d,E){return(0,t.isLeft)(E)?d:(0,t.isLeft)(d)?E:(0,t.right)(p.concat(d.right,E.right))}}};t.getSemigroup=Mt;var Qt=function(p){var d=(0,t.left)(p.empty);return{URI:t.URI,_E:void 0,compact:function(E){return(0,t.isLeft)(E)?E:E.right._tag==="None"?d:(0,t.right)(E.right.value)},separate:function(E){return(0,t.isLeft)(E)?(0,f.separated)(E,E):(0,t.isLeft)(E.right)?(0,f.separated)((0,t.right)(E.right.left),d):(0,f.separated)(d,(0,t.right)(E.right.right))}}};t.getCompactable=Qt;var Pt=function(p){var d=(0,t.left)(p.empty),E=(0,t.getCompactable)(p),K=E.compact,ft=E.separate,oe=function(tt,m){return(0,t.isLeft)(tt)||m(tt.right)?tt:d},vi=function(tt,m){return(0,t.isLeft)(tt)?(0,f.separated)(tt,tt):m(tt.right)?(0,f.separated)(d,(0,t.right)(tt.right)):(0,f.separated)((0,t.right)(tt.right),d)};return{URI:t.URI,_E:void 0,map:T,compact:K,separate:ft,filter:oe,filterMap:function(tt,m){if((0,t.isLeft)(tt))return tt;var v=m(tt.right);return v._tag==="None"?d:(0,t.right)(v.value)},partition:vi,partitionMap:function(tt,m){if((0,t.isLeft)(tt))return(0,f.separated)(tt,tt);var v=m(tt.right);return(0,t.isLeft)(v)?(0,f.separated)((0,t.right)(v.left),d):(0,f.separated)(d,(0,t.right)(v.right))}}};t.getFilterable=Pt;var Vt=function(p){var d=(0,t.getFilterable)(p),E=(0,t.getCompactable)(p);return{URI:t.URI,_E:void 0,map:T,compact:d.compact,separate:d.separate,filter:d.filter,filterMap:d.filterMap,partition:d.partition,partitionMap:d.partitionMap,traverse:A,sequence:t.sequence,reduce:X,foldMap:C,reduceRight:D,wither:(0,w.witherDefault)(t.Traversable,E),wilt:(0,w.wiltDefault)(t.Traversable,E)}};t.getWitherable=Vt;var jr=function(p){return{URI:t.URI,_E:void 0,map:T,ap:function(d,E){return(0,t.isLeft)(d)?(0,t.isLeft)(E)?(0,t.left)(p.concat(d.left,E.left)):d:(0,t.isLeft)(E)?E:(0,t.right)(d.right(E.right))},of:t.of}};t.getApplicativeValidation=jr;var $r=function(p){return{URI:t.URI,_E:void 0,map:T,alt:function(d,E){if((0,t.isRight)(d))return d;var K=E();return(0,t.isLeft)(K)?(0,t.left)(p.concat(d.left,K.left)):K}}};t.getAltValidation=$r;var Kr=function(p){return function(d){return(0,t.isLeft)(d)?d:(0,t.right)(p(d.right))}};t.map=Kr,t.Functor={URI:t.URI,map:T},t.of=t.right,t.Pointed={URI:t.URI,of:t.of};var Wr=function(p){return function(d){return(0,t.isLeft)(d)?d:(0,t.isLeft)(p)?p:(0,t.right)(d.right(p.right))}};t.apW=Wr,t.ap=t.apW,t.Apply={URI:t.URI,map:T,ap:O},t.Applicative={URI:t.URI,map:T,ap:O,of:t.of};var zr=function(p){return function(d){return(0,t.isLeft)(d)?d:p(d.right)}};t.chainW=zr,t.chain=t.chainW,t.Chain={URI:t.URI,map:T,ap:O,chain:U},t.Monad={URI:t.URI,map:T,ap:O,of:t.of,chain:U};var Hr=function(p,d){return function(E){return(0,t.isLeft)(E)?p:d(p,E.right)}};t.reduce=Hr;var Gr=function(p){return function(d){return function(E){return(0,t.isLeft)(E)?p.empty:d(E.right)}}};t.foldMap=Gr;var Qr=function(p,d){return function(E){return(0,t.isLeft)(E)?p:d(E.right,p)}};t.reduceRight=Qr,t.Foldable={URI:t.URI,reduce:X,foldMap:C,reduceRight:D};var Xr=function(p){return function(d){return function(E){return(0,t.isLeft)(E)?p.of((0,t.left)(E.left)):p.map(d(E.right),t.right)}}};t.traverse=Xr;var Yr=function(p){return function(d){return(0,t.isLeft)(d)?p.of((0,t.left)(d.left)):p.map(d.right,t.right)}};t.sequence=Yr,t.Traversable={URI:t.URI,map:T,reduce:X,foldMap:C,reduceRight:D,traverse:A,sequence:t.sequence};var Jr=function(p,d){return function(E){return(0,t.isLeft)(E)?(0,t.left)(p(E.left)):(0,t.right)(d(E.right))}};t.bimap=Jr;var Zr=function(p){return function(d){return(0,t.isLeft)(d)?(0,t.left)(p(d.left)):d}};t.mapLeft=Zr,t.Bifunctor={URI:t.URI,bimap:y,mapLeft:g};var xr=function(p){return function(d){return(0,t.isLeft)(d)?p():d}};t.altW=xr,t.alt=t.altW,t.Alt={URI:t.URI,map:T,alt:I};var ti=function(p){return function(d){return(0,t.isLeft)(d)?d:(0,t.right)(p(d))}};t.extend=ti,t.Extend={URI:t.URI,map:T,extend:_},t.ChainRec={URI:t.URI,map:T,ap:O,chain:U,chainRec:W},t.throwError=t.left,t.MonadThrow={URI:t.URI,map:T,ap:O,of:t.of,chain:U,throwError:t.throwError},t.FromEither={URI:t.URI,fromEither:c.identity},t.fromPredicate=(0,u.fromPredicate)(t.FromEither),t.fromOption=(0,u.fromOption)(t.FromEither),t.isLeft=h.isLeft,t.isRight=h.isRight;var ei=function(p,d){return function(E){return(0,t.isLeft)(E)?p(E.left):d(E.right)}};t.matchW=ei,t.foldW=t.matchW,t.match=t.matchW,t.fold=t.match;var ni=function(p){return function(d){return(0,t.isLeft)(d)?p(d.left):d.right}};t.getOrElseW=ni,t.getOrElse=t.getOrElseW,t.flap=(0,l.flap)(t.Functor),t.apFirst=(0,s.apFirst)(t.Apply),t.apFirstW=t.apFirst,t.apSecond=(0,s.apSecond)(t.Apply),t.apSecondW=t.apSecond,t.chainFirst=(0,o.chainFirst)(t.Chain),t.chainFirstW=t.chainFirst,t.flattenW=(0,t.chainW)(c.identity),t.flatten=t.flattenW,t.duplicate=(0,t.extend)(c.identity),t.fromOptionK=(0,u.fromOptionK)(t.FromEither),t.chainOptionK=(0,u.chainOptionK)(t.FromEither,t.Chain),t.filterOrElse=(0,u.filterOrElse)(t.FromEither,t.Chain),t.filterOrElseW=t.filterOrElse;var ri=function(p){return(0,t.isLeft)(p)?(0,t.right)(p.left):(0,t.left)(p.right)};t.swap=ri;var ii=function(p){return function(d){return(0,t.isLeft)(d)?p(d.left):d}};t.orElseW=ii,t.orElse=t.orElseW;var si=function(p){return function(d){return d==null?(0,t.left)(p):(0,t.right)(d)}};t.fromNullable=si;var oi=function(p,d){try{return(0,t.right)(p())}catch(E){return(0,t.left)(d(E))}};t.tryCatch=oi;var ai=function(p,d){return function(){for(var E=[],K=0;K<arguments.length;K++)E[K]=arguments[K];return(0,t.tryCatch)(function(){return p.apply(void 0,E)},d)}};t.tryCatchK=ai;var We=function(p){var d=(0,t.fromNullable)(p);return function(E){return(0,c.flow)(E,d)}};t.fromNullableK=We;var ze=function(p){var d=(0,t.fromNullableK)(p);return function(E){return(0,t.chain)(d(E))}};t.chainNullableK=ze,t.toUnion=(0,t.foldW)(c.identity,c.identity);function ui(p){return p instanceof Error?p:new Error(String(p))}t.toError=ui;function Ln(p){return function(d,E){if(E===void 0){var K=Ln(p);return function(ft){return K(d,ft)}}return(0,t.isLeft)(E)?!1:p.equals(d,E.right)}}t.elem=Ln;var ci=function(p){return function(d){return(0,t.isLeft)(d)?!1:p(d.right)}};t.exists=ci,t.Do=(0,t.of)(h.emptyRecord),t.bindTo=(0,l.bindTo)(t.Functor),t.bind=(0,o.bind)(t.Chain),t.bindW=t.bind,t.apS=(0,s.apS)(t.Apply),t.apSW=t.apS,t.ApT=(0,t.of)(h.emptyReadonlyArray);var li=function(p){return function(d){var E=p(0,h.head(d));if((0,t.isLeft)(E))return E;for(var K=[E.right],ft=1;ft<d.length;ft++){var oe=p(ft,d[ft]);if((0,t.isLeft)(oe))return oe;K.push(oe.right)}return(0,t.right)(K)}};t.traverseReadonlyNonEmptyArrayWithIndex=li;var hi=function(p){var d=(0,t.traverseReadonlyNonEmptyArrayWithIndex)(p);return function(E){return h.isNonEmpty(E)?d(E):t.ApT}};t.traverseReadonlyArrayWithIndex=hi,t.traverseArrayWithIndex=t.traverseReadonlyArrayWithIndex;var fi=function(p){return(0,t.traverseReadonlyArrayWithIndex)(function(d,E){return p(E)})};t.traverseArray=fi,t.sequenceArray=(0,t.traverseArray)(c.identity);function di(p,d){return(0,t.tryCatch)(function(){return JSON.parse(p)},d)}t.parseJSON=di;var gi=function(p,d){return(0,t.tryCatch)(function(){var E=JSON.stringify(p);if(typeof E!="string")throw new Error("Converting unsupported structure to JSON");return E},d)};t.stringifyJSON=gi,t.either={URI:t.URI,map:T,of:t.of,ap:O,chain:U,reduce:X,foldMap:C,reduceRight:D,traverse:A,sequence:t.sequence,bimap:y,mapLeft:g,alt:I,extend:_,chainRec:W,throwError:t.throwError},t.getApplySemigroup=(0,s.getApplySemigroup)(t.Apply),t.getApplyMonoid=(0,i.getApplicativeMonoid)(t.Applicative);var mi=function(p,d){return(0,s.getApplySemigroup)((0,t.getApplicativeValidation)(p))(d)};t.getValidationSemigroup=mi;var pi=function(p,d){return(0,i.getApplicativeMonoid)((0,t.getApplicativeValidation)(p))(d)};t.getValidationMonoid=pi;function yi(p){var d=(0,t.getApplicativeValidation)(p).ap,E=(0,t.getAltValidation)(p).alt;return{URI:t.URI,_E:void 0,map:T,of:t.of,chain:U,bimap:y,mapLeft:g,reduce:X,foldMap:C,reduceRight:D,extend:_,traverse:A,sequence:t.sequence,chainRec:W,throwError:t.throwError,ap:d,alt:E}}t.getValidation=yi})(so);var ho={},Gc={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.and=t.or=t.not=t.Contravariant=t.getMonoidAll=t.getSemigroupAll=t.getMonoidAny=t.getSemigroupAny=t.URI=t.contramap=void 0;var e=Tt,n=function(h,f){return(0,e.pipe)(h,(0,t.contramap)(f))},r=function(h){return function(f){return(0,e.flow)(h,f)}};t.contramap=r,t.URI="Predicate";var i=function(){return{concat:function(h,f){return(0,e.pipe)(h,(0,t.or)(f))}}};t.getSemigroupAny=i;var s=function(){return{concat:(0,t.getSemigroupAny)().concat,empty:e.constFalse}};t.getMonoidAny=s;var o=function(){return{concat:function(h,f){return(0,e.pipe)(h,(0,t.and)(f))}}};t.getSemigroupAll=o;var a=function(){return{concat:(0,t.getSemigroupAll)().concat,empty:e.constTrue}};t.getMonoidAll=a,t.Contravariant={URI:t.URI,contramap:n};var u=function(h){return function(f){return!h(f)}};t.not=u;var c=function(h){return function(f){return function(w){return f(w)||h(w)}}};t.or=c;var l=function(h){return function(f){return function(w){return f(w)&&h(w)}}};t.and=l})(Gc);var Qc={},Nt={};Object.defineProperty(Nt,"__esModule",{value:!0});Nt.concatAll=Nt.endo=Nt.filterSecond=Nt.filterFirst=Nt.reverse=void 0;var Pp=function(t){return{concat:function(e,n){return t.concat(n,e)}}};Nt.reverse=Pp;var Vp=function(t){return function(e){return{concat:function(n,r){return t(n)?e.concat(n,r):r}}}};Nt.filterFirst=Vp;var qp=function(t){return function(e){return{concat:function(n,r){return t(r)?e.concat(n,r):n}}}};Nt.filterSecond=qp;var Bp=function(t){return function(e){return{concat:function(n,r){return e.concat(t(n),t(r))}}}};Nt.endo=Bp;var jp=function(t){return function(e){return function(n){return n.reduce(function(r,i){return t.concat(r,i)},e)}}};Nt.concatAll=jp;(function(t){var e=P&&P.__createBinding||(Object.create?function(C,D,A,y){y===void 0&&(y=A);var g=Object.getOwnPropertyDescriptor(D,A);(!g||("get"in g?!D.__esModule:g.writable||g.configurable))&&(g={enumerable:!0,get:function(){return D[A]}}),Object.defineProperty(C,y,g)}:function(C,D,A,y){y===void 0&&(y=A),C[y]=D[A]}),n=P&&P.__setModuleDefault||(Object.create?function(C,D){Object.defineProperty(C,"default",{enumerable:!0,value:D})}:function(C,D){C.default=D}),r=P&&P.__importStar||function(C){if(C&&C.__esModule)return C;var D={};if(C!=null)for(var A in C)A!=="default"&&Object.prototype.hasOwnProperty.call(C,A)&&e(D,C,A);return n(D,C),D};Object.defineProperty(t,"__esModule",{value:!0}),t.semigroupProduct=t.semigroupSum=t.semigroupString=t.getFunctionSemigroup=t.semigroupAny=t.semigroupAll=t.fold=t.getIntercalateSemigroup=t.getMeetSemigroup=t.getJoinSemigroup=t.getDualSemigroup=t.getStructSemigroup=t.getTupleSemigroup=t.getFirstSemigroup=t.getLastSemigroup=t.getObjectSemigroup=t.semigroupVoid=t.concatAll=t.last=t.first=t.intercalate=t.tuple=t.struct=t.reverse=t.constant=t.max=t.min=void 0;var i=Tt,s=r(B),o=r(Nt),a=r(jc),u=function(C){return{concat:a.min(C)}};t.min=u;var c=function(C){return{concat:a.max(C)}};t.max=c;var l=function(C){return{concat:function(){return C}}};t.constant=l,t.reverse=o.reverse;var h=function(C){return{concat:function(D,A){var y={};for(var g in C)s.has.call(C,g)&&(y[g]=C[g].concat(D[g],A[g]));return y}}};t.struct=h;var f=function(){for(var C=[],D=0;D<arguments.length;D++)C[D]=arguments[D];return{concat:function(A,y){return C.map(function(g,I){return g.concat(A[I],y[I])})}}};t.tuple=f;var w=function(C){return function(D){return{concat:function(A,y){return D.concat(A,D.concat(C,y))}}}};t.intercalate=w;var T=function(){return{concat:i.identity}};t.first=T;var O=function(){return{concat:function(C,D){return D}}};t.last=O,t.concatAll=o.concatAll,t.semigroupVoid=(0,t.constant)(void 0);var U=function(){return{concat:function(C,D){return Object.assign({},C,D)}}};t.getObjectSemigroup=U,t.getLastSemigroup=t.last,t.getFirstSemigroup=t.first,t.getTupleSemigroup=t.tuple,t.getStructSemigroup=t.struct,t.getDualSemigroup=t.reverse,t.getJoinSemigroup=t.max,t.getMeetSemigroup=t.min,t.getIntercalateSemigroup=t.intercalate;function X(C){var D=(0,t.concatAll)(C);return function(A,y){return y===void 0?D(A):D(A)(y)}}t.fold=X,t.semigroupAll={concat:function(C,D){return C&&D}},t.semigroupAny={concat:function(C,D){return C||D}},t.getFunctionSemigroup=i.getSemigroup,t.semigroupString={concat:function(C,D){return C+D}},t.semigroupSum={concat:function(C,D){return C+D}},t.semigroupProduct={concat:function(C,D){return C*D}}})(Qc);var Br={};Object.defineProperty(Br,"__esModule",{value:!0});Br.guard=void 0;function $p(t,e){return function(n){return n?e.of(void 0):t.zero()}}Br.guard=$p;(function(t){var e=P&&P.__createBinding||(Object.create?function(m,v,R,nt){nt===void 0&&(nt=R);var Dt=Object.getOwnPropertyDescriptor(v,R);(!Dt||("get"in Dt?!v.__esModule:Dt.writable||Dt.configurable))&&(Dt={enumerable:!0,get:function(){return v[R]}}),Object.defineProperty(m,nt,Dt)}:function(m,v,R,nt){nt===void 0&&(nt=R),m[nt]=v[R]}),n=P&&P.__setModuleDefault||(Object.create?function(m,v){Object.defineProperty(m,"default",{enumerable:!0,value:v})}:function(m,v){m.default=v}),r=P&&P.__importStar||function(m){if(m&&m.__esModule)return m;var v={};if(m!=null)for(var R in m)R!=="default"&&Object.prototype.hasOwnProperty.call(m,R)&&e(v,m,R);return n(v,m),v};Object.defineProperty(t,"__esModule",{value:!0}),t.fromEither=t.MonadThrow=t.throwError=t.Witherable=t.wilt=t.wither=t.Traversable=t.sequence=t.traverse=t.Filterable=t.partitionMap=t.partition=t.filterMap=t.filter=t.Compactable=t.separate=t.compact=t.Extend=t.extend=t.Alternative=t.guard=t.Zero=t.zero=t.Alt=t.alt=t.altW=t.Foldable=t.reduceRight=t.foldMap=t.reduce=t.Monad=t.Chain=t.chain=t.Applicative=t.Apply=t.ap=t.Pointed=t.of=t.Functor=t.map=t.getMonoid=t.getOrd=t.getEq=t.getShow=t.URI=t.getRight=t.getLeft=t.fromPredicate=t.some=t.none=void 0,t.getLastMonoid=t.getFirstMonoid=t.getApplyMonoid=t.getApplySemigroup=t.option=t.mapNullable=t.getRefinement=t.sequenceArray=t.traverseArray=t.traverseArrayWithIndex=t.traverseReadonlyArrayWithIndex=t.traverseReadonlyNonEmptyArrayWithIndex=t.ApT=t.apS=t.bind=t.bindTo=t.Do=t.exists=t.elem=t.toUndefined=t.toNullable=t.chainNullableK=t.fromNullableK=t.tryCatchK=t.tryCatch=t.fromNullable=t.chainFirstEitherK=t.chainEitherK=t.fromEitherK=t.duplicate=t.chainFirst=t.flatten=t.apSecond=t.apFirst=t.flap=t.getOrElse=t.getOrElseW=t.fold=t.match=t.foldW=t.matchW=t.isNone=t.isSome=t.FromEither=void 0;var i=ne,s=ot,o=Gt,a=st,u=Tt,c=Ct,l=r(B),h=Gc,f=Qc,w=lo,T=jt,O=Br;t.none=l.none,t.some=l.some;function U(m){return function(v){return m(v)?(0,t.some)(v):t.none}}t.fromPredicate=U;var X=function(m){return m._tag==="Right"?t.none:(0,t.some)(m.left)};t.getLeft=X;var C=function(m){return m._tag==="Left"?t.none:(0,t.some)(m.right)};t.getRight=C;var D=function(m,v){return(0,u.pipe)(m,(0,t.map)(v))},A=function(m,v){return(0,u.pipe)(m,(0,t.ap)(v))},y=function(m,v){return(0,u.pipe)(m,(0,t.chain)(v))},g=function(m,v,R){return(0,u.pipe)(m,(0,t.reduce)(v,R))},I=function(m){var v=(0,t.foldMap)(m);return function(R,nt){return(0,u.pipe)(R,v(nt))}},_=function(m,v,R){return(0,u.pipe)(m,(0,t.reduceRight)(v,R))},W=function(m){var v=(0,t.traverse)(m);return function(R,nt){return(0,u.pipe)(R,v(nt))}},H=function(m,v){return(0,u.pipe)(m,(0,t.alt)(v))},x=function(m,v){return(0,u.pipe)(m,(0,t.filter)(v))},Mt=function(m,v){return(0,u.pipe)(m,(0,t.filterMap)(v))},Qt=function(m,v){return(0,u.pipe)(m,(0,t.extend)(v))},Pt=function(m,v){return(0,u.pipe)(m,(0,t.partition)(v))},Vt=function(m,v){return(0,u.pipe)(m,(0,t.partitionMap)(v))};t.URI="Option";var jr=function(m){return{show:function(v){return(0,t.isNone)(v)?"none":"some(".concat(m.show(v.value),")")}}};t.getShow=jr;var $r=function(m){return{equals:function(v,R){return v===R||((0,t.isNone)(v)?(0,t.isNone)(R):(0,t.isNone)(R)?!1:m.equals(v.value,R.value))}}};t.getEq=$r;var Kr=function(m){return{equals:(0,t.getEq)(m).equals,compare:function(v,R){return v===R?0:(0,t.isSome)(v)?(0,t.isSome)(R)?m.compare(v.value,R.value):1:-1}}};t.getOrd=Kr;var Wr=function(m){return{concat:function(v,R){return(0,t.isNone)(v)?R:(0,t.isNone)(R)?v:(0,t.some)(m.concat(v.value,R.value))},empty:t.none}};t.getMonoid=Wr;var zr=function(m){return function(v){return(0,t.isNone)(v)?t.none:(0,t.some)(m(v.value))}};t.map=zr,t.Functor={URI:t.URI,map:D},t.of=t.some,t.Pointed={URI:t.URI,of:t.of};var Hr=function(m){return function(v){return(0,t.isNone)(v)||(0,t.isNone)(m)?t.none:(0,t.some)(v.value(m.value))}};t.ap=Hr,t.Apply={URI:t.URI,map:D,ap:A},t.Applicative={URI:t.URI,map:D,ap:A,of:t.of};var Gr=function(m){return function(v){return(0,t.isNone)(v)?t.none:m(v.value)}};t.chain=Gr,t.Chain={URI:t.URI,map:D,ap:A,chain:y},t.Monad={URI:t.URI,map:D,ap:A,of:t.of,chain:y};var Qr=function(m,v){return function(R){return(0,t.isNone)(R)?m:v(m,R.value)}};t.reduce=Qr;var Xr=function(m){return function(v){return function(R){return(0,t.isNone)(R)?m.empty:v(R.value)}}};t.foldMap=Xr;var Yr=function(m,v){return function(R){return(0,t.isNone)(R)?m:v(R.value,m)}};t.reduceRight=Yr,t.Foldable={URI:t.URI,reduce:g,foldMap:I,reduceRight:_};var Jr=function(m){return function(v){return(0,t.isNone)(v)?m():v}};t.altW=Jr,t.alt=t.altW,t.Alt={URI:t.URI,map:D,alt:H};var Zr=function(){return t.none};t.zero=Zr,t.Zero={URI:t.URI,zero:t.zero},t.guard=(0,O.guard)(t.Zero,t.Pointed),t.Alternative={URI:t.URI,map:D,ap:A,of:t.of,alt:H,zero:t.zero};var xr=function(m){return function(v){return(0,t.isNone)(v)?t.none:(0,t.some)(m(v))}};t.extend=xr,t.Extend={URI:t.URI,map:D,extend:Qt},t.compact=(0,t.chain)(u.identity);var ti=(0,w.separated)(t.none,t.none),ei=function(m){return(0,t.isNone)(m)?ti:(0,w.separated)((0,t.getLeft)(m.value),(0,t.getRight)(m.value))};t.separate=ei,t.Compactable={URI:t.URI,compact:t.compact,separate:t.separate};var ni=function(m){return function(v){return(0,t.isNone)(v)?t.none:m(v.value)?v:t.none}};t.filter=ni;var ri=function(m){return function(v){return(0,t.isNone)(v)?t.none:m(v.value)}};t.filterMap=ri;var ii=function(m){return function(v){return(0,w.separated)(x(v,(0,h.not)(m)),x(v,m))}};t.partition=ii;var si=function(m){return(0,u.flow)((0,t.map)(m),t.separate)};t.partitionMap=si,t.Filterable={URI:t.URI,map:D,compact:t.compact,separate:t.separate,filter:x,filterMap:Mt,partition:Pt,partitionMap:Vt};var oi=function(m){return function(v){return function(R){return(0,t.isNone)(R)?m.of(t.none):m.map(v(R.value),t.some)}}};t.traverse=oi;var ai=function(m){return function(v){return(0,t.isNone)(v)?m.of(t.none):m.map(v.value,t.some)}};t.sequence=ai,t.Traversable={URI:t.URI,map:D,reduce:g,foldMap:I,reduceRight:_,traverse:W,sequence:t.sequence};var We=(0,T.witherDefault)(t.Traversable,t.Compactable),ze=(0,T.wiltDefault)(t.Traversable,t.Compactable),ui=function(m){var v=We(m);return function(R){return function(nt){return v(nt,R)}}};t.wither=ui;var Ln=function(m){var v=ze(m);return function(R){return function(nt){return v(nt,R)}}};t.wilt=Ln,t.Witherable={URI:t.URI,map:D,reduce:g,foldMap:I,reduceRight:_,traverse:W,sequence:t.sequence,compact:t.compact,separate:t.separate,filter:x,filterMap:Mt,partition:Pt,partitionMap:Vt,wither:We,wilt:ze};var ci=function(){return t.none};t.throwError=ci,t.MonadThrow={URI:t.URI,map:D,ap:A,of:t.of,chain:y,throwError:t.throwError},t.fromEither=t.getRight,t.FromEither={URI:t.URI,fromEither:t.fromEither},t.isSome=l.isSome;var li=function(m){return m._tag==="None"};t.isNone=li;var hi=function(m,v){return function(R){return(0,t.isNone)(R)?m():v(R.value)}};t.matchW=hi,t.foldW=t.matchW,t.match=t.matchW,t.fold=t.match;var fi=function(m){return function(v){return(0,t.isNone)(v)?m():v.value}};t.getOrElseW=fi,t.getOrElse=t.getOrElseW,t.flap=(0,c.flap)(t.Functor),t.apFirst=(0,s.apFirst)(t.Apply),t.apSecond=(0,s.apSecond)(t.Apply),t.flatten=t.compact,t.chainFirst=(0,o.chainFirst)(t.Chain),t.duplicate=(0,t.extend)(u.identity),t.fromEitherK=(0,a.fromEitherK)(t.FromEither),t.chainEitherK=(0,a.chainEitherK)(t.FromEither,t.Chain),t.chainFirstEitherK=(0,a.chainFirstEitherK)(t.FromEither,t.Chain);var di=function(m){return m==null?t.none:(0,t.some)(m)};t.fromNullable=di;var gi=function(m){try{return(0,t.some)(m())}catch{return t.none}};t.tryCatch=gi;var mi=function(m){return function(){for(var v=[],R=0;R<arguments.length;R++)v[R]=arguments[R];return(0,t.tryCatch)(function(){return m.apply(void 0,v)})}};t.tryCatchK=mi;var pi=function(m){return(0,u.flow)(m,t.fromNullable)};t.fromNullableK=pi;var yi=function(m){return function(v){return(0,t.isNone)(v)?t.none:(0,t.fromNullable)(m(v.value))}};t.chainNullableK=yi,t.toNullable=(0,t.match)(u.constNull,u.identity),t.toUndefined=(0,t.match)(u.constUndefined,u.identity);function p(m){return function(v,R){if(R===void 0){var nt=p(m);return function(Dt){return nt(v,Dt)}}return(0,t.isNone)(R)?!1:m.equals(v,R.value)}}t.elem=p;var d=function(m){return function(v){return(0,t.isNone)(v)?!1:m(v.value)}};t.exists=d,t.Do=(0,t.of)(l.emptyRecord),t.bindTo=(0,c.bindTo)(t.Functor),t.bind=(0,o.bind)(t.Chain),t.apS=(0,s.apS)(t.Apply),t.ApT=(0,t.of)(l.emptyReadonlyArray);var E=function(m){return function(v){var R=m(0,l.head(v));if((0,t.isNone)(R))return t.none;for(var nt=[R.value],Dt=1;Dt<v.length;Dt++){var po=m(Dt,v[Dt]);if((0,t.isNone)(po))return t.none;nt.push(po.value)}return(0,t.some)(nt)}};t.traverseReadonlyNonEmptyArrayWithIndex=E;var K=function(m){var v=(0,t.traverseReadonlyNonEmptyArrayWithIndex)(m);return function(R){return l.isNonEmpty(R)?v(R):t.ApT}};t.traverseReadonlyArrayWithIndex=K,t.traverseArrayWithIndex=t.traverseReadonlyArrayWithIndex;var ft=function(m){return(0,t.traverseReadonlyArrayWithIndex)(function(v,R){return m(R)})};t.traverseArray=ft,t.sequenceArray=(0,t.traverseArray)(u.identity);function oe(m){return function(v){return(0,t.isSome)(m(v))}}t.getRefinement=oe,t.mapNullable=t.chainNullableK,t.option={URI:t.URI,map:D,of:t.of,ap:A,chain:y,reduce:g,foldMap:I,reduceRight:_,traverse:W,sequence:t.sequence,zero:t.zero,alt:H,extend:Qt,compact:t.compact,separate:t.separate,filter:x,filterMap:Mt,partition:Pt,partitionMap:Vt,wither:We,wilt:ze,throwError:t.throwError},t.getApplySemigroup=(0,s.getApplySemigroup)(t.Apply),t.getApplyMonoid=(0,i.getApplicativeMonoid)(t.Applicative);var vi=function(){return(0,t.getMonoid)((0,f.first)())};t.getFirstMonoid=vi;var tt=function(){return(0,t.getMonoid)((0,f.last)())};t.getLastMonoid=tt})(ho);var Xc={};(function(t){var e=P&&P.__createBinding||(Object.create?function(A,y,g,I){I===void 0&&(I=g);var _=Object.getOwnPropertyDescriptor(y,g);(!_||("get"in _?!y.__esModule:_.writable||_.configurable))&&(_={enumerable:!0,get:function(){return y[g]}}),Object.defineProperty(A,I,_)}:function(A,y,g,I){I===void 0&&(I=g),A[I]=y[g]}),n=P&&P.__setModuleDefault||(Object.create?function(A,y){Object.defineProperty(A,"default",{enumerable:!0,value:y})}:function(A,y){A.default=y}),r=P&&P.__importStar||function(A){if(A&&A.__esModule)return A;var y={};if(A!=null)for(var g in A)g!=="default"&&Object.prototype.hasOwnProperty.call(A,g)&&e(y,A,g);return n(y,A),y};Object.defineProperty(t,"__esModule",{value:!0}),t.getMonoid=t.getSemigroup=t.io=t.sequenceArray=t.traverseArray=t.traverseArrayWithIndex=t.traverseReadonlyArrayWithIndex=t.traverseReadonlyNonEmptyArrayWithIndex=t.ApT=t.apS=t.bind=t.bindTo=t.Do=t.FromIO=t.ChainRec=t.MonadIO=t.fromIO=t.chainFirst=t.Monad=t.Chain=t.Applicative=t.apSecond=t.apFirst=t.Apply=t.Pointed=t.flap=t.Functor=t.URI=t.flatten=t.chain=t.of=t.ap=t.map=void 0;var i=ne,s=ot,o=Gt,a=Tt,u=Ct,c=r(B),l=function(A,y){return function(){return y(A())}},h=function(A,y){return function(){return A()(y())}},f=function(A,y){return function(){return y(A())()}},w=function(A,y){return function(){for(var g=y(A)();g._tag==="Left";)g=y(g.left)();return g.right}},T=function(A){return function(y){return l(y,A)}};t.map=T;var O=function(A){return function(y){return h(y,A)}};t.ap=O,t.of=a.constant;var U=function(A){return function(y){return f(y,A)}};t.chain=U,t.flatten=(0,t.chain)(a.identity),t.URI="IO",t.Functor={URI:t.URI,map:l},t.flap=(0,u.flap)(t.Functor),t.Pointed={URI:t.URI,of:t.of},t.Apply={URI:t.URI,map:l,ap:h},t.apFirst=(0,s.apFirst)(t.Apply),t.apSecond=(0,s.apSecond)(t.Apply),t.Applicative={URI:t.URI,map:l,ap:h,of:t.of},t.Chain={URI:t.URI,map:l,ap:h,chain:f},t.Monad={URI:t.URI,map:l,ap:h,of:t.of,chain:f},t.chainFirst=(0,o.chainFirst)(t.Chain),t.fromIO=a.identity,t.MonadIO={URI:t.URI,map:l,ap:h,of:t.of,chain:f,fromIO:t.fromIO},t.ChainRec={URI:t.URI,map:l,ap:h,chain:f,chainRec:w},t.FromIO={URI:t.URI,fromIO:a.identity},t.Do=(0,t.of)(c.emptyRecord),t.bindTo=(0,u.bindTo)(t.Functor),t.bind=(0,o.bind)(t.Chain),t.apS=(0,s.apS)(t.Apply),t.ApT=(0,t.of)(c.emptyReadonlyArray);var X=function(A){return function(y){return function(){for(var g=[A(0,c.head(y))()],I=1;I<y.length;I++)g.push(A(I,y[I])());return g}}};t.traverseReadonlyNonEmptyArrayWithIndex=X;var C=function(A){var y=(0,t.traverseReadonlyNonEmptyArrayWithIndex)(A);return function(g){return c.isNonEmpty(g)?y(g):t.ApT}};t.traverseReadonlyArrayWithIndex=C,t.traverseArrayWithIndex=t.traverseReadonlyArrayWithIndex;var D=function(A){return(0,t.traverseReadonlyArrayWithIndex)(function(y,g){return A(g)})};t.traverseArray=D,t.sequenceArray=(0,t.traverseArray)(a.identity),t.io={URI:t.URI,map:l,of:t.of,ap:h,chain:f,fromIO:t.fromIO,chainRec:w},t.getSemigroup=(0,s.getApplySemigroup)(t.Apply),t.getMonoid=(0,i.getApplicativeMonoid)(t.Applicative)})(Xc);const{pipe:fo,flow:Qp,constant:Xp,identity:Yp,tupled:Jp,constVoid:Zp}=Pm;ao(so.Apply);ao(ho.Apply);Vr(so.Apply);Vr(ho.Apply);Vr(Xc.Apply);const go=dm(Ch),Mn=({type:t,id:e=null})=>`${t}${e!=null?`/${e}`:""}`,mo=t=>e=>t(go,e),Yc=(t,e)=>n=>(delete t.id,delete t.contentType,t[e]=Mm(),t.players&&t.players.forEach(r=>{delete r.created,delete r.edited}),{location:n,content:t}),Jc=(t,e=null)=>n=>t(n.location,n.content,e),xp=({type:t,id:e})=>fo({type:t,id:e},Mn,mo(On),Cm),ty=({content:t,type:e,timestamp:n="created"})=>fo({type:e},Mn,mo(sm),Yc(t,n),Jc(Nm)),ey=({id:t,content:e,type:n,timestamp:r="edited"})=>fo({type:n,id:t},Mn,mo(On),Yc(e,r),Jc(Dm,{merge:!0})),ny=({id:t,type:e},n,r,i=!1)=>{const s=On(go,Mn({type:e,id:t})),o={...r};delete o.id,delete o.contentType,delete o.created,delete o.edited,Rm(s,{[n]:i?km(o):Lm(o)})},ry=({type:t,id:e},n)=>Om(On(go,Mn({type:t,id:e})),n);export{ty as a,ey as b,xp as c,Wp as g,Gp as j,Hp as l,zp as m,fo as p,ry as s,ny as u};
