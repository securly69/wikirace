import{w as Zr}from"./entry.Crc3OFkF.js";function tl(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}const qg=Zr({route:[],id:"",state:"waiting",players:[]}),Bg=Zr({}),jg=Zr(""),$g=Zr("");var Bo={};/**
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
 */const Na=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},el=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],a=t[n++],c=t[n++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Oa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],a=i+1<t.length,c=a?t[i+1]:0,h=i+2<t.length,m=h?t[i+2]:0,y=o>>2,T=(o&3)<<4|c>>4;let I=(c&15)<<2|m>>6,S=m&63;h||(S=64,a||(I=64)),r.push(n[y],n[T],n[I],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Na(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):el(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const m=i<t.length?n[t.charAt(i)]:64;++i;const T=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||c==null||m==null||T==null)throw new nl;const I=o<<2|c>>4;if(r.push(I),m!==64){const S=c<<4&240|m>>2;if(r.push(S),T!==64){const N=m<<6&192|T;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rl=function(t){const e=Na(t);return Oa.encodeByteArray(e,!0)},$r=function(t){return rl(t).replace(/\./g,"")},il=function(t){try{return Oa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ol=()=>sl().__FIREBASE_DEFAULTS__,al=()=>{if(typeof process>"u"||typeof Bo>"u")return;const t=Bo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ul=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&il(t[1]);return e&&JSON.parse(e)},as=()=>{try{return ol()||al()||ul()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cl=t=>{var e,n;return(n=(e=as())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ll=t=>{const e=cl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Fa=()=>{var t;return(t=as())===null||t===void 0?void 0:t.config};/**
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
 */function fl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$r(JSON.stringify(n)),$r(JSON.stringify(a)),""].join(".")}/**
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
 */function dl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ml(){var t;const e=(t=as())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gl(){return!ml()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pl(){try{return typeof indexedDB=="object"}catch{return!1}}function _l(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const yl="FirebaseError";class In extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yl,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?vl(o,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new In(i,c,r)}}function vl(t,e){return t.replace(El,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const El=/\{\$([^}]+)}/g;function rr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],a=e[i];if(jo(o)&&jo(a)){if(!rr(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jo(t){return t!==null&&typeof t=="object"}/**
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
 */function ce(t){return t&&t._delegate?t._delegate:t}class ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qe="[DEFAULT]";/**
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
 */class Tl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Al(e))try{this.getOrInitializeService({instanceIdentifier:qe})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=qe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qe){return this.instances.has(e)}getOptions(e=qe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Il(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qe){return this.component?this.component.multipleInstances?e:qe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Il(t){return t===qe?void 0:t}function Al(t){return t.instantiationMode==="EAGER"}/**
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
 */class wl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var et;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(et||(et={}));const Rl={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},Sl=et.INFO,bl={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},Pl=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bl[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ka{constructor(e){this.name=e,this._logLevel=Sl,this._logHandler=Pl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in et))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...e),this._logHandler(this,et.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...e),this._logHandler(this,et.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,et.INFO,...e),this._logHandler(this,et.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,et.WARN,...e),this._logHandler(this,et.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...e),this._logHandler(this,et.ERROR,...e)}}const Cl=(t,e)=>e.some(n=>t instanceof n);let $o,Wo;function Vl(){return $o||($o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dl(){return Wo||(Wo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ua=new WeakMap,ji=new WeakMap,qa=new WeakMap,Mi=new WeakMap,us=new WeakMap;function Ml(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(Ee(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Ua.set(n,t)}).catch(()=>{}),us.set(e,t),e}function Nl(t){if(ji.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});ji.set(t,e)}let $i={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ji.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ee(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ol(t){$i=t($i)}function Fl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ni(this),e,...n);return qa.set(r,e.sort?e.sort():[e]),Ee(r)}:Dl().includes(t)?function(...e){return t.apply(Ni(this),e),Ee(Ua.get(this))}:function(...e){return Ee(t.apply(Ni(this),e))}}function Ll(t){return typeof t=="function"?Fl(t):(t instanceof IDBTransaction&&Nl(t),Cl(t,Vl())?new Proxy(t,$i):t)}function Ee(t){if(t instanceof IDBRequest)return Ml(t);if(Mi.has(t))return Mi.get(t);const e=Ll(t);return e!==t&&(Mi.set(t,e),us.set(e,t)),e}const Ni=t=>us.get(t);function kl(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(t,e),c=Ee(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Ee(a.result),h.oldVersion,h.newVersion,Ee(a.transaction),h)}),n&&a.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",m=>i(m.oldVersion,m.newVersion,m))}).catch(()=>{}),c}const Ul=["get","getKey","getAll","getAllKeys","count"],ql=["put","add","delete","clear"],Oi=new Map;function Ko(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oi.get(e))return Oi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ql.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ul.includes(n)))return;const o=async function(a,...c){const h=this.transaction(a,i?"readwrite":"readonly");let m=h.store;return r&&(m=m.index(c.shift())),(await Promise.all([m[n](...c),i&&h.done]))[0]};return Oi.set(e,o),o}Ol(t=>({...t,get:(e,n,r)=>Ko(e,n)||t.get(e,n,r),has:(e,n)=>!!Ko(e,n)||t.has(e,n)}));/**
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
 */class Bl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jl(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jl(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wi="@firebase/app",zo="0.10.5";/**
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
 */const We=new ka("@firebase/app"),$l="@firebase/app-compat",Wl="@firebase/analytics-compat",Kl="@firebase/analytics",zl="@firebase/app-check-compat",Gl="@firebase/app-check",Hl="@firebase/auth",Ql="@firebase/auth-compat",Xl="@firebase/database",Yl="@firebase/database-compat",Jl="@firebase/functions",Zl="@firebase/functions-compat",xl="@firebase/installations",th="@firebase/installations-compat",eh="@firebase/messaging",nh="@firebase/messaging-compat",rh="@firebase/performance",ih="@firebase/performance-compat",sh="@firebase/remote-config",oh="@firebase/remote-config-compat",ah="@firebase/storage",uh="@firebase/storage-compat",ch="@firebase/firestore",lh="@firebase/vertexai-preview",hh="@firebase/firestore-compat",fh="firebase",dh="10.12.2";/**
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
 */const Ki="[DEFAULT]",mh={[Wi]:"fire-core",[$l]:"fire-core-compat",[Kl]:"fire-analytics",[Wl]:"fire-analytics-compat",[Gl]:"fire-app-check",[zl]:"fire-app-check-compat",[Hl]:"fire-auth",[Ql]:"fire-auth-compat",[Xl]:"fire-rtdb",[Yl]:"fire-rtdb-compat",[Jl]:"fire-fn",[Zl]:"fire-fn-compat",[xl]:"fire-iid",[th]:"fire-iid-compat",[eh]:"fire-fcm",[nh]:"fire-fcm-compat",[rh]:"fire-perf",[ih]:"fire-perf-compat",[sh]:"fire-rc",[oh]:"fire-rc-compat",[ah]:"fire-gcs",[uh]:"fire-gcs-compat",[ch]:"fire-fst",[hh]:"fire-fst-compat",[lh]:"fire-vertex","fire-js":"fire-js",[fh]:"fire-js-all"};/**
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
 */const Wr=new Map,gh=new Map,zi=new Map;function Go(t,e){try{t.container.addComponent(e)}catch(n){We.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kr(t){const e=t.name;if(zi.has(e))return We.debug(`There were multiple attempts to register component ${e}.`),!1;zi.set(e,t);for(const n of Wr.values())Go(n,t);for(const n of gh.values())Go(n,t);return!0}function ph(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const _h={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Te=new La("app","Firebase",_h);/**
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
 */class yh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Te.create("app-deleted",{appName:this._name})}}/**
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
 */const vh=dh;function Ba(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ki,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Te.create("bad-app-name",{appName:String(i)});if(n||(n=Fa()),!n)throw Te.create("no-options");const o=Wr.get(i);if(o){if(rr(n,o.options)&&rr(r,o.config))return o;throw Te.create("duplicate-app",{appName:i})}const a=new wl(i);for(const h of zi.values())a.addComponent(h);const c=new yh(n,r,a);return Wr.set(i,c),c}function Eh(t=Ki){const e=Wr.get(t);if(!e&&t===Ki&&Fa())return Ba();if(!e)throw Te.create("no-app",{appName:t});return e}function hn(t,e,n){var r;let i=(r=mh[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),We.warn(c.join(" "));return}Kr(new ir(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Th="firebase-heartbeat-database",Ih=1,sr="firebase-heartbeat-store";let Fi=null;function ja(){return Fi||(Fi=kl(Th,Ih,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(sr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Te.create("idb-open",{originalErrorMessage:t.message})})),Fi}async function Ah(t){try{const n=(await ja()).transaction(sr),r=await n.objectStore(sr).get($a(t));return await n.done,r}catch(e){if(e instanceof In)We.warn(e.message);else{const n=Te.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});We.warn(n.message)}}}async function Ho(t,e){try{const r=(await ja()).transaction(sr,"readwrite");await r.objectStore(sr).put(e,$a(t)),await r.done}catch(n){if(n instanceof In)We.warn(n.message);else{const r=Te.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});We.warn(r.message)}}}function $a(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wh=1024,Rh=30*24*60*60*1e3;class Sh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ph(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Qo();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Rh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qo(),{heartbeatsToSend:r,unsentEntries:i}=bh(this._heartbeatsCache.heartbeats),o=$r(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Qo(){return new Date().toISOString().substring(0,10)}function bh(t,e=wh){const n=[];let r=t.slice();for(const i of t){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Xo(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ph{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pl()?_l().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ah(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ho(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ho(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xo(t){return $r(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ch(t){Kr(new ir("platform-logger",e=>new Bl(e),"PRIVATE")),Kr(new ir("heartbeat",e=>new Sh(e),"PRIVATE")),hn(Wi,zo,t),hn(Wi,zo,"esm2017"),hn("fire-js","")}Ch("");var Vh="firebase",Dh="10.12.2";/**
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
 */hn(Vh,Dh,"app");const Mh={apiKey:"AIzaSyB9_idDxCuuwzEw8whaPnm0YpKmx4bpGzE",authDomain:"elijah-storm-portfolio.firebaseapp.com",databaseURL:"https://haja-project-default-rtdb.firebaseio.com",projectId:"elijah-storm-portfolio",storageBucket:"elijah-storm-portfolio.appspot.com",messagingSenderId:"512364119142",appId:"1:512364119142:web:17f381919391c4cec259a7",measurementId:"G-9TFCHM87DN"},Nh=Ba(Mh);var Yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var je,Wa;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(d,f){function p(){}p.prototype=f.prototype,d.D=f.prototype,d.prototype=new p,d.prototype.constructor=d,d.C=function(_,v,A){for(var E=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)E[ft-2]=arguments[ft];return f.prototype[v].apply(_,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(d,f,p){p||(p=0);var _=Array(16);if(typeof f=="string")for(var v=0;16>v;++v)_[v]=f.charCodeAt(p++)|f.charCodeAt(p++)<<8|f.charCodeAt(p++)<<16|f.charCodeAt(p++)<<24;else for(v=0;16>v;++v)_[v]=f[p++]|f[p++]<<8|f[p++]<<16|f[p++]<<24;f=d.g[0],p=d.g[1],v=d.g[2];var A=d.g[3],E=f+(A^p&(v^A))+_[0]+3614090360&4294967295;f=p+(E<<7&4294967295|E>>>25),E=A+(v^f&(p^v))+_[1]+3905402710&4294967295,A=f+(E<<12&4294967295|E>>>20),E=v+(p^A&(f^p))+_[2]+606105819&4294967295,v=A+(E<<17&4294967295|E>>>15),E=p+(f^v&(A^f))+_[3]+3250441966&4294967295,p=v+(E<<22&4294967295|E>>>10),E=f+(A^p&(v^A))+_[4]+4118548399&4294967295,f=p+(E<<7&4294967295|E>>>25),E=A+(v^f&(p^v))+_[5]+1200080426&4294967295,A=f+(E<<12&4294967295|E>>>20),E=v+(p^A&(f^p))+_[6]+2821735955&4294967295,v=A+(E<<17&4294967295|E>>>15),E=p+(f^v&(A^f))+_[7]+4249261313&4294967295,p=v+(E<<22&4294967295|E>>>10),E=f+(A^p&(v^A))+_[8]+1770035416&4294967295,f=p+(E<<7&4294967295|E>>>25),E=A+(v^f&(p^v))+_[9]+2336552879&4294967295,A=f+(E<<12&4294967295|E>>>20),E=v+(p^A&(f^p))+_[10]+4294925233&4294967295,v=A+(E<<17&4294967295|E>>>15),E=p+(f^v&(A^f))+_[11]+2304563134&4294967295,p=v+(E<<22&4294967295|E>>>10),E=f+(A^p&(v^A))+_[12]+1804603682&4294967295,f=p+(E<<7&4294967295|E>>>25),E=A+(v^f&(p^v))+_[13]+4254626195&4294967295,A=f+(E<<12&4294967295|E>>>20),E=v+(p^A&(f^p))+_[14]+2792965006&4294967295,v=A+(E<<17&4294967295|E>>>15),E=p+(f^v&(A^f))+_[15]+1236535329&4294967295,p=v+(E<<22&4294967295|E>>>10),E=f+(v^A&(p^v))+_[1]+4129170786&4294967295,f=p+(E<<5&4294967295|E>>>27),E=A+(p^v&(f^p))+_[6]+3225465664&4294967295,A=f+(E<<9&4294967295|E>>>23),E=v+(f^p&(A^f))+_[11]+643717713&4294967295,v=A+(E<<14&4294967295|E>>>18),E=p+(A^f&(v^A))+_[0]+3921069994&4294967295,p=v+(E<<20&4294967295|E>>>12),E=f+(v^A&(p^v))+_[5]+3593408605&4294967295,f=p+(E<<5&4294967295|E>>>27),E=A+(p^v&(f^p))+_[10]+38016083&4294967295,A=f+(E<<9&4294967295|E>>>23),E=v+(f^p&(A^f))+_[15]+3634488961&4294967295,v=A+(E<<14&4294967295|E>>>18),E=p+(A^f&(v^A))+_[4]+3889429448&4294967295,p=v+(E<<20&4294967295|E>>>12),E=f+(v^A&(p^v))+_[9]+568446438&4294967295,f=p+(E<<5&4294967295|E>>>27),E=A+(p^v&(f^p))+_[14]+3275163606&4294967295,A=f+(E<<9&4294967295|E>>>23),E=v+(f^p&(A^f))+_[3]+4107603335&4294967295,v=A+(E<<14&4294967295|E>>>18),E=p+(A^f&(v^A))+_[8]+1163531501&4294967295,p=v+(E<<20&4294967295|E>>>12),E=f+(v^A&(p^v))+_[13]+2850285829&4294967295,f=p+(E<<5&4294967295|E>>>27),E=A+(p^v&(f^p))+_[2]+4243563512&4294967295,A=f+(E<<9&4294967295|E>>>23),E=v+(f^p&(A^f))+_[7]+1735328473&4294967295,v=A+(E<<14&4294967295|E>>>18),E=p+(A^f&(v^A))+_[12]+2368359562&4294967295,p=v+(E<<20&4294967295|E>>>12),E=f+(p^v^A)+_[5]+4294588738&4294967295,f=p+(E<<4&4294967295|E>>>28),E=A+(f^p^v)+_[8]+2272392833&4294967295,A=f+(E<<11&4294967295|E>>>21),E=v+(A^f^p)+_[11]+1839030562&4294967295,v=A+(E<<16&4294967295|E>>>16),E=p+(v^A^f)+_[14]+4259657740&4294967295,p=v+(E<<23&4294967295|E>>>9),E=f+(p^v^A)+_[1]+2763975236&4294967295,f=p+(E<<4&4294967295|E>>>28),E=A+(f^p^v)+_[4]+1272893353&4294967295,A=f+(E<<11&4294967295|E>>>21),E=v+(A^f^p)+_[7]+4139469664&4294967295,v=A+(E<<16&4294967295|E>>>16),E=p+(v^A^f)+_[10]+3200236656&4294967295,p=v+(E<<23&4294967295|E>>>9),E=f+(p^v^A)+_[13]+681279174&4294967295,f=p+(E<<4&4294967295|E>>>28),E=A+(f^p^v)+_[0]+3936430074&4294967295,A=f+(E<<11&4294967295|E>>>21),E=v+(A^f^p)+_[3]+3572445317&4294967295,v=A+(E<<16&4294967295|E>>>16),E=p+(v^A^f)+_[6]+76029189&4294967295,p=v+(E<<23&4294967295|E>>>9),E=f+(p^v^A)+_[9]+3654602809&4294967295,f=p+(E<<4&4294967295|E>>>28),E=A+(f^p^v)+_[12]+3873151461&4294967295,A=f+(E<<11&4294967295|E>>>21),E=v+(A^f^p)+_[15]+530742520&4294967295,v=A+(E<<16&4294967295|E>>>16),E=p+(v^A^f)+_[2]+3299628645&4294967295,p=v+(E<<23&4294967295|E>>>9),E=f+(v^(p|~A))+_[0]+4096336452&4294967295,f=p+(E<<6&4294967295|E>>>26),E=A+(p^(f|~v))+_[7]+1126891415&4294967295,A=f+(E<<10&4294967295|E>>>22),E=v+(f^(A|~p))+_[14]+2878612391&4294967295,v=A+(E<<15&4294967295|E>>>17),E=p+(A^(v|~f))+_[5]+4237533241&4294967295,p=v+(E<<21&4294967295|E>>>11),E=f+(v^(p|~A))+_[12]+1700485571&4294967295,f=p+(E<<6&4294967295|E>>>26),E=A+(p^(f|~v))+_[3]+2399980690&4294967295,A=f+(E<<10&4294967295|E>>>22),E=v+(f^(A|~p))+_[10]+4293915773&4294967295,v=A+(E<<15&4294967295|E>>>17),E=p+(A^(v|~f))+_[1]+2240044497&4294967295,p=v+(E<<21&4294967295|E>>>11),E=f+(v^(p|~A))+_[8]+1873313359&4294967295,f=p+(E<<6&4294967295|E>>>26),E=A+(p^(f|~v))+_[15]+4264355552&4294967295,A=f+(E<<10&4294967295|E>>>22),E=v+(f^(A|~p))+_[6]+2734768916&4294967295,v=A+(E<<15&4294967295|E>>>17),E=p+(A^(v|~f))+_[13]+1309151649&4294967295,p=v+(E<<21&4294967295|E>>>11),E=f+(v^(p|~A))+_[4]+4149444226&4294967295,f=p+(E<<6&4294967295|E>>>26),E=A+(p^(f|~v))+_[11]+3174756917&4294967295,A=f+(E<<10&4294967295|E>>>22),E=v+(f^(A|~p))+_[2]+718787259&4294967295,v=A+(E<<15&4294967295|E>>>17),E=p+(A^(v|~f))+_[9]+3951481745&4294967295,d.g[0]=d.g[0]+f&4294967295,d.g[1]=d.g[1]+(v+(E<<21&4294967295|E>>>11))&4294967295,d.g[2]=d.g[2]+v&4294967295,d.g[3]=d.g[3]+A&4294967295}r.prototype.u=function(d,f){f===void 0&&(f=d.length);for(var p=f-this.blockSize,_=this.B,v=this.h,A=0;A<f;){if(v==0)for(;A<=p;)i(this,d,A),A+=this.blockSize;if(typeof d=="string"){for(;A<f;)if(_[v++]=d.charCodeAt(A++),v==this.blockSize){i(this,_),v=0;break}}else for(;A<f;)if(_[v++]=d[A++],v==this.blockSize){i(this,_),v=0;break}}this.h=v,this.o+=f},r.prototype.v=function(){var d=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);d[0]=128;for(var f=1;f<d.length-8;++f)d[f]=0;var p=8*this.o;for(f=d.length-8;f<d.length;++f)d[f]=p&255,p/=256;for(this.u(d),d=Array(16),f=p=0;4>f;++f)for(var _=0;32>_;_+=8)d[p++]=this.g[f]>>>_&255;return d};function o(d,f){var p=c;return Object.prototype.hasOwnProperty.call(p,d)?p[d]:p[d]=f(d)}function a(d,f){this.h=f;for(var p=[],_=!0,v=d.length-1;0<=v;v--){var A=d[v]|0;_&&A==f||(p[v]=A,_=!1)}this.g=p}var c={};function h(d){return-128<=d&&128>d?o(d,function(f){return new a([f|0],0>f?-1:0)}):new a([d|0],0>d?-1:0)}function m(d){if(isNaN(d)||!isFinite(d))return T;if(0>d)return q(m(-d));for(var f=[],p=1,_=0;d>=p;_++)f[_]=d/p|0,p*=4294967296;return new a(f,0)}function y(d,f){if(d.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(d.charAt(0)=="-")return q(y(d.substring(1),f));if(0<=d.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=m(Math.pow(f,8)),_=T,v=0;v<d.length;v+=8){var A=Math.min(8,d.length-v),E=parseInt(d.substring(v,v+A),f);8>A?(A=m(Math.pow(f,A)),_=_.j(A).add(m(E))):(_=_.j(p),_=_.add(m(E)))}return _}var T=h(0),I=h(1),S=h(16777216);t=a.prototype,t.m=function(){if($(this))return-q(this).m();for(var d=0,f=1,p=0;p<this.g.length;p++){var _=this.i(p);d+=(0<=_?_:4294967296+_)*f,f*=4294967296}return d},t.toString=function(d){if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(N(this))return"0";if($(this))return"-"+q(this).toString(d);for(var f=m(Math.pow(d,6)),p=this,_="";;){var v=B(p,f).g;p=H(p,v.j(f));var A=((0<p.g.length?p.g[0]:p.h)>>>0).toString(d);if(p=v,N(p))return A+_;for(;6>A.length;)A="0"+A;_=A+_}},t.i=function(d){return 0>d?0:d<this.g.length?this.g[d]:this.h};function N(d){if(d.h!=0)return!1;for(var f=0;f<d.g.length;f++)if(d.g[f]!=0)return!1;return!0}function $(d){return d.h==-1}t.l=function(d){return d=H(this,d),$(d)?-1:N(d)?0:1};function q(d){for(var f=d.g.length,p=[],_=0;_<f;_++)p[_]=~d.g[_];return new a(p,~d.h).add(I)}t.abs=function(){return $(this)?q(this):this},t.add=function(d){for(var f=Math.max(this.g.length,d.g.length),p=[],_=0,v=0;v<=f;v++){var A=_+(this.i(v)&65535)+(d.i(v)&65535),E=(A>>>16)+(this.i(v)>>>16)+(d.i(v)>>>16);_=E>>>16,A&=65535,E&=65535,p[v]=E<<16|A}return new a(p,p[p.length-1]&-2147483648?-1:0)};function H(d,f){return d.add(q(f))}t.j=function(d){if(N(this)||N(d))return T;if($(this))return $(d)?q(this).j(q(d)):q(q(this).j(d));if($(d))return q(this.j(q(d)));if(0>this.l(S)&&0>d.l(S))return m(this.m()*d.m());for(var f=this.g.length+d.g.length,p=[],_=0;_<2*f;_++)p[_]=0;for(_=0;_<this.g.length;_++)for(var v=0;v<d.g.length;v++){var A=this.i(_)>>>16,E=this.i(_)&65535,ft=d.i(v)>>>16,qt=d.i(v)&65535;p[2*_+2*v]+=E*qt,U(p,2*_+2*v),p[2*_+2*v+1]+=A*qt,U(p,2*_+2*v+1),p[2*_+2*v+1]+=E*ft,U(p,2*_+2*v+1),p[2*_+2*v+2]+=A*ft,U(p,2*_+2*v+2)}for(_=0;_<f;_++)p[_]=p[2*_+1]<<16|p[2*_];for(_=f;_<2*f;_++)p[_]=0;return new a(p,0)};function U(d,f){for(;(d[f]&65535)!=d[f];)d[f+1]+=d[f]>>>16,d[f]&=65535,f++}function V(d,f){this.g=d,this.h=f}function B(d,f){if(N(f))throw Error("division by zero");if(N(d))return new V(T,T);if($(d))return f=B(q(d),f),new V(q(f.g),q(f.h));if($(f))return f=B(d,q(f)),new V(q(f.g),f.h);if(30<d.g.length){if($(d)||$(f))throw Error("slowDivide_ only works with positive integers.");for(var p=I,_=f;0>=_.l(d);)p=W(p),_=W(_);var v=O(p,1),A=O(_,1);for(_=O(_,2),p=O(p,2);!N(_);){var E=A.add(_);0>=E.l(d)&&(v=v.add(p),A=E),_=O(_,1),p=O(p,1)}return f=H(d,v.j(f)),new V(v,f)}for(v=T;0<=d.l(f);){for(p=Math.max(1,Math.floor(d.m()/f.m())),_=Math.ceil(Math.log(p)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),A=m(p),E=A.j(f);$(E)||0<E.l(d);)p-=_,A=m(p),E=A.j(f);N(A)&&(A=I),v=v.add(A),d=H(d,E)}return new V(v,d)}t.A=function(d){return B(this,d).h},t.and=function(d){for(var f=Math.max(this.g.length,d.g.length),p=[],_=0;_<f;_++)p[_]=this.i(_)&d.i(_);return new a(p,this.h&d.h)},t.or=function(d){for(var f=Math.max(this.g.length,d.g.length),p=[],_=0;_<f;_++)p[_]=this.i(_)|d.i(_);return new a(p,this.h|d.h)},t.xor=function(d){for(var f=Math.max(this.g.length,d.g.length),p=[],_=0;_<f;_++)p[_]=this.i(_)^d.i(_);return new a(p,this.h^d.h)};function W(d){for(var f=d.g.length+1,p=[],_=0;_<f;_++)p[_]=d.i(_)<<1|d.i(_-1)>>>31;return new a(p,d.h)}function O(d,f){var p=f>>5;f%=32;for(var _=d.g.length-p,v=[],A=0;A<_;A++)v[A]=0<f?d.i(A+p)>>>f|d.i(A+p+1)<<32-f:d.i(A+p);return new a(v,d.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Wa=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=m,a.fromString=y,je=a}).apply(typeof Yo<"u"?Yo:typeof self<"u"?self:typeof window<"u"?window:{});var Nr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ka,za,Xn,Ga,kr,Gi,Ha,Qa,Xa;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,l){return s==Array.prototype||s==Object.prototype||(s[u]=l.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nr=="object"&&Nr];for(var u=0;u<s.length;++u){var l=s[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=n(this);function i(s,u){if(u)t:{var l=r;s=s.split(".");for(var g=0;g<s.length-1;g++){var w=s[g];if(!(w in l))break t;l=l[w]}s=s[s.length-1],g=l[s],u=u(g),u!=g&&u!=null&&e(l,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var l=0,g=!1,w={next:function(){if(!g&&l<s.length){var C=l++;return{value:u(C,s[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function m(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function y(s,u,l){return s.call.apply(s.bind,arguments)}function T(s,u,l){if(!s)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,g),s.apply(u,w)}}return function(){return s.apply(u,arguments)}}function I(s,u,l){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,I.apply(null,arguments)}function S(s,u){var l=Array.prototype.slice.call(arguments,1);return function(){var g=l.slice();return g.push.apply(g,arguments),s.apply(this,g)}}function N(s,u){function l(){}l.prototype=u.prototype,s.aa=u.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(g,w,C){for(var j=Array(arguments.length-2),st=2;st<arguments.length;st++)j[st-2]=arguments[st];return u.prototype[w].apply(g,j)}}function $(s){const u=s.length;if(0<u){const l=Array(u);for(let g=0;g<u;g++)l[g]=s[g];return l}return[]}function q(s,u){for(let l=1;l<arguments.length;l++){const g=arguments[l];if(h(g)){const w=s.length||0,C=g.length||0;s.length=w+C;for(let j=0;j<C;j++)s[w+j]=g[j]}else s.push(g)}}class H{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(s){return/^[\s\xa0]*$/.test(s)}function V(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function B(s){return B[" "](s),s}B[" "]=function(){};var W=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function O(s,u,l){for(const g in s)u.call(l,s[g],g,s)}function d(s,u){for(const l in s)u.call(void 0,s[l],l,s)}function f(s){const u={};for(const l in s)u[l]=s[l];return u}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(s,u){let l,g;for(let w=1;w<arguments.length;w++){g=arguments[w];for(l in g)s[l]=g[l];for(let C=0;C<p.length;C++)l=p[C],Object.prototype.hasOwnProperty.call(g,l)&&(s[l]=g[l])}}function v(s){var u=1;s=s.split(":");const l=[];for(;0<u&&s.length;)l.push(s.shift()),u--;return s.length&&l.push(s.join(":")),l}function A(s){c.setTimeout(()=>{throw s},0)}function E(){var s=Ve;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class ft{constructor(){this.h=this.g=null}add(u,l){const g=qt.get();g.set(u,l),this.h?this.h.next=g:this.g=g,this.h=g}}var qt=new H(()=>new te,s=>s.reset());class te{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Bt,ee=!1,Ve=new ft,Ye=()=>{const s=c.Promise.resolve(void 0);Bt=()=>{s.then(Pn)}};var Pn=()=>{for(var s;s=E();){try{s.h.call(s.g)}catch(l){A(l)}var u=qt;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}ee=!1};function Wt(){this.s=this.s,this.C=this.C}Wt.prototype.s=!1,Wt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Wt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function gt(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var Cn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return s}();function ne(s,u){if(gt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,g=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(W){t:{try{B(u.nodeName);var w=!0;break t}catch{}w=!1}w||(u=null)}}else l=="mouseover"?u=s.fromElement:l=="mouseout"&&(u=s.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Vn[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&ne.aa.h.call(this)}}N(ne,gt);var Vn={2:"touch",3:"pen",4:"mouse"};ne.prototype.h=function(){ne.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var fe="closure_listenable_"+(1e6*Math.random()|0),Dn=0;function Mn(s,u,l,g,w){this.listener=s,this.proxy=null,this.src=u,this.type=l,this.capture=!!g,this.ha=w,this.key=++Dn,this.da=this.fa=!1}function zt(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function re(s){this.src=s,this.g={},this.h=0}re.prototype.add=function(s,u,l,g,w){var C=s.toString();s=this.g[C],s||(s=this.g[C]=[],this.h++);var j=Me(s,u,g,w);return-1<j?(u=s[j],l||(u.fa=!1)):(u=new Mn(u,this.src,C,!!g,w),u.fa=l,s.push(u)),u};function De(s,u){var l=u.type;if(l in s.g){var g=s.g[l],w=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=w)&&Array.prototype.splice.call(g,w,1),C&&(zt(u),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Me(s,u,l,g){for(var w=0;w<s.length;++w){var C=s[w];if(!C.da&&C.listener==u&&C.capture==!!l&&C.ha==g)return w}return-1}var ie="closure_lm_"+(1e6*Math.random()|0),se={};function Je(s,u,l,g,w){if(Array.isArray(u)){for(var C=0;C<u.length;C++)Je(s,u[C],l,g,w);return null}return l=tn(l),s&&s[fe]?s.K(u,l,m(g)?!!g.capture:!!g,w):Nn(s,u,l,!1,g,w)}function Nn(s,u,l,g,w,C){if(!u)throw Error("Invalid event type");var j=m(w)?!!w.capture:!!w,st=Ne(s);if(st||(s[ie]=st=new re(s)),l=st.add(u,l,g,j,C),l.proxy)return l;if(g=On(),l.proxy=g,g.src=s,g.listener=l,s.addEventListener)Cn||(w=j),w===void 0&&(w=!1),s.addEventListener(u.toString(),g,w);else if(s.attachEvent)s.attachEvent(xe(u.toString()),g);else if(s.addListener&&s.removeListener)s.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return l}function On(){function s(l){return u.call(s.src,s.listener,l)}const u=Fn;return s}function Ze(s,u,l,g,w){if(Array.isArray(u))for(var C=0;C<u.length;C++)Ze(s,u[C],l,g,w);else g=m(g)?!!g.capture:!!g,l=tn(l),s&&s[fe]?(s=s.i,u=String(u).toString(),u in s.g&&(C=s.g[u],l=Me(C,l,g,w),-1<l&&(zt(C[l]),Array.prototype.splice.call(C,l,1),C.length==0&&(delete s.g[u],s.h--)))):s&&(s=Ne(s))&&(u=s.g[u.toString()],s=-1,u&&(s=Me(u,l,g,w)),(l=-1<s?u[s]:null)&&de(l))}function de(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[fe])De(u.i,s);else{var l=s.type,g=s.proxy;u.removeEventListener?u.removeEventListener(l,g,s.capture):u.detachEvent?u.detachEvent(xe(l),g):u.addListener&&u.removeListener&&u.removeListener(g),(l=Ne(u))?(De(l,s),l.h==0&&(l.src=null,u[ie]=null)):zt(s)}}}function xe(s){return s in se?se[s]:se[s]="on"+s}function Fn(s,u){if(s.da)s=!0;else{u=new ne(u,this);var l=s.listener,g=s.ha||s.src;s.fa&&de(s),s=l.call(g,u)}return s}function Ne(s){return s=s[ie],s instanceof re?s:null}var Oe="__closure_events_fn_"+(1e9*Math.random()>>>0);function tn(s){return typeof s=="function"?s:(s[Oe]||(s[Oe]=function(u){return s.handleEvent(u)}),s[Oe])}function pt(){Wt.call(this),this.i=new re(this),this.M=this,this.F=null}N(pt,Wt),pt.prototype[fe]=!0,pt.prototype.removeEventListener=function(s,u,l,g){Ze(this,s,u,l,g)};function _t(s,u){var l,g=s.F;if(g)for(l=[];g;g=g.F)l.push(g);if(s=s.M,g=u.type||u,typeof u=="string")u=new gt(u,s);else if(u instanceof gt)u.target=u.target||s;else{var w=u;u=new gt(g,s),_(u,w)}if(w=!0,l)for(var C=l.length-1;0<=C;C--){var j=u.g=l[C];w=me(j,g,!0,u)&&w}if(j=u.g=s,w=me(j,g,!0,u)&&w,w=me(j,g,!1,u)&&w,l)for(C=0;C<l.length;C++)j=u.g=l[C],w=me(j,g,!1,u)&&w}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var l=s.g[u],g=0;g<l.length;g++)zt(l[g]);delete s.g[u],s.h--}}this.F=null},pt.prototype.K=function(s,u,l,g){return this.i.add(String(s),u,!1,l,g)},pt.prototype.L=function(s,u,l,g){return this.i.add(String(s),u,!0,l,g)};function me(s,u,l,g){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var w=!0,C=0;C<u.length;++C){var j=u[C];if(j&&!j.da&&j.capture==l){var st=j.listener,Rt=j.ha||j.src;j.fa&&De(s.i,j),w=st.call(Rt,g)!==!1&&w}}return w&&!g.defaultPrevented}function en(s,u,l){if(typeof s=="function")l&&(s=I(s,l));else if(s&&typeof s.handleEvent=="function")s=I(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(s,u||0)}function nn(s){s.g=en(()=>{s.g=null,s.i&&(s.i=!1,nn(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class P extends Wt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:nn(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function R(s){Wt.call(this),this.h=s,this.g={}}N(R,Wt);var M=[];function Z(s){O(s.g,function(u,l){this.g.hasOwnProperty(l)&&de(u)},s),s.g={}}R.prototype.N=function(){R.aa.N.call(this),Z(this)},R.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dt=c.JSON.stringify,b=c.JSON.parse,D=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function k(){}k.prototype.h=null;function rt(s){return s.h||(s.h=s.i())}function ct(){}var ge={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yi(){gt.call(this,"d")}N(yi,gt);function vi(){gt.call(this,"c")}N(vi,gt);var Fe={},Ys=null;function vr(){return Ys=Ys||new pt}Fe.La="serverreachability";function Js(s){gt.call(this,Fe.La,s)}N(Js,gt);function Ln(s){const u=vr();_t(u,new Js(u))}Fe.STAT_EVENT="statevent";function Zs(s,u){gt.call(this,Fe.STAT_EVENT,s),this.stat=u}N(Zs,gt);function Lt(s){const u=vr();_t(u,new Zs(u,s))}Fe.Ma="timingevent";function xs(s,u){gt.call(this,Fe.Ma,s),this.size=u}N(xs,gt);function kn(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},u)}function Un(){this.g=!0}Un.prototype.xa=function(){this.g=!1};function Dc(s,u,l,g,w,C){s.info(function(){if(s.g)if(C)for(var j="",st=C.split("&"),Rt=0;Rt<st.length;Rt++){var nt=st[Rt].split("=");if(1<nt.length){var Ct=nt[0];nt=nt[1];var Vt=Ct.split("_");j=2<=Vt.length&&Vt[1]=="type"?j+(Ct+"="+nt+"&"):j+(Ct+"=redacted&")}}else j=null;else j=C;return"XMLHTTP REQ ("+g+") [attempt "+w+"]: "+u+`
`+l+`
`+j})}function Mc(s,u,l,g,w,C,j){s.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+w+"]: "+u+`
`+l+`
`+C+" "+j})}function rn(s,u,l,g){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+Oc(s,l)+(g?" "+g:"")})}function Nc(s,u){s.info(function(){return"TIMEOUT: "+u})}Un.prototype.info=function(){};function Oc(s,u){if(!s.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var g=l[s];if(!(2>g.length)){var w=g[1];if(Array.isArray(w)&&!(1>w.length)){var C=w[0];if(C!="noop"&&C!="stop"&&C!="close")for(var j=1;j<w.length;j++)w[j]=""}}}}return dt(l)}catch{return u}}var Er={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},to={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ei;function Tr(){}N(Tr,k),Tr.prototype.g=function(){return new XMLHttpRequest},Tr.prototype.i=function(){return{}},Ei=new Tr;function pe(s,u,l,g){this.j=s,this.i=u,this.l=l,this.R=g||1,this.U=new R(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eo}function eo(){this.i=null,this.g="",this.h=!1}var no={},Ti={};function Ii(s,u,l){s.L=1,s.v=Rr(oe(u)),s.m=l,s.P=!0,ro(s,null)}function ro(s,u){s.F=Date.now(),Ir(s),s.A=oe(s.v);var l=s.A,g=s.R;Array.isArray(g)||(g=[String(g)]),yo(l.i,"t",g),s.C=0,l=s.j.J,s.h=new eo,s.g=Lo(s.j,l?u:null,!s.m),0<s.O&&(s.M=new P(I(s.Y,s,s.g),s.O)),u=s.U,l=s.g,g=s.ca;var w="readystatechange";Array.isArray(w)||(w&&(M[0]=w.toString()),w=M);for(var C=0;C<w.length;C++){var j=Je(l,w[C],g||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=s.H?f(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),Ln(),Dc(s.i,s.u,s.A,s.l,s.R,s.m)}pe.prototype.ca=function(s){s=s.target;const u=this.M;u&&ae(s)==3?u.j():this.Y(s)},pe.prototype.Y=function(s){try{if(s==this.g)t:{const Vt=ae(this.g);var u=this.g.Ba();const an=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||Ro(this.g)))){this.J||Vt!=4||u==7||(u==8||0>=an?Ln(3):Ln(2)),Ai(this);var l=this.g.Z();this.X=l;e:if(io(this)){var g=Ro(this.g);s="";var w=g.length,C=ae(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Le(this),qn(this);var j="";break e}this.h.i=new c.TextDecoder}for(u=0;u<w;u++)this.h.h=!0,s+=this.h.i.decode(g[u],{stream:!(C&&u==w-1)});g.length=0,this.h.g+=s,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=l==200,Mc(this.i,this.u,this.A,this.l,this.R,Vt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var st,Rt=this.g;if((st=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(st)){var nt=st;break e}}nt=null}if(l=nt)rn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wi(this,l);else{this.o=!1,this.s=3,Lt(12),Le(this),qn(this);break t}}if(this.P){l=!0;let Gt;for(;!this.J&&this.C<j.length;)if(Gt=Fc(this,j),Gt==Ti){Vt==4&&(this.s=4,Lt(14),l=!1),rn(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==no){this.s=4,Lt(15),rn(this.i,this.l,j,"[Invalid Chunk]"),l=!1;break}else rn(this.i,this.l,Gt,null),wi(this,Gt);if(io(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||j.length!=0||this.h.h||(this.s=1,Lt(16),l=!1),this.o=this.o&&l,!l)rn(this.i,this.l,j,"[Invalid Chunked Response]"),Le(this),qn(this);else if(0<j.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Vi(Ct),Ct.M=!0,Lt(11))}}else rn(this.i,this.l,j,null),wi(this,j);Vt==4&&Le(this),this.o&&!this.J&&(Vt==4?Mo(this.j,this):(this.o=!1,Ir(this)))}else Zc(this.g),l==400&&0<j.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),Le(this),qn(this)}}}catch{}finally{}};function io(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Fc(s,u){var l=s.C,g=u.indexOf(`
`,l);return g==-1?Ti:(l=Number(u.substring(l,g)),isNaN(l)?no:(g+=1,g+l>u.length?Ti:(u=u.slice(g,g+l),s.C=g+l,u)))}pe.prototype.cancel=function(){this.J=!0,Le(this)};function Ir(s){s.S=Date.now()+s.I,so(s,s.I)}function so(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=kn(I(s.ba,s),u)}function Ai(s){s.B&&(c.clearTimeout(s.B),s.B=null)}pe.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Nc(this.i,this.A),this.L!=2&&(Ln(),Lt(17)),Le(this),this.s=2,qn(this)):so(this,this.S-s)};function qn(s){s.j.G==0||s.J||Mo(s.j,s)}function Le(s){Ai(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,Z(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function wi(s,u){try{var l=s.j;if(l.G!=0&&(l.g==s||Ri(l.h,s))){if(!s.K&&Ri(l.h,s)&&l.G==3){try{var g=l.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var w=g;if(w[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Vr(l),Pr(l);else break t;Ci(l),Lt(18)}}else l.za=w[1],0<l.za-l.T&&37500>w[2]&&l.F&&l.v==0&&!l.C&&(l.C=kn(I(l.Za,l),6e3));if(1>=uo(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Ue(l,11)}else if((s.K||l.g==s)&&Vr(l),!U(u))for(w=l.Da.g.parse(u),u=0;u<w.length;u++){let nt=w[u];if(l.T=nt[0],nt=nt[1],l.G==2)if(nt[0]=="c"){l.K=nt[1],l.ia=nt[2];const Ct=nt[3];Ct!=null&&(l.la=Ct,l.j.info("VER="+l.la));const Vt=nt[4];Vt!=null&&(l.Aa=Vt,l.j.info("SVER="+l.Aa));const an=nt[5];an!=null&&typeof an=="number"&&0<an&&(g=1.5*an,l.L=g,l.j.info("backChannelRequestTimeoutMs_="+g)),g=l;const Gt=s.g;if(Gt){const Mr=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mr){var C=g.h;C.g||Mr.indexOf("spdy")==-1&&Mr.indexOf("quic")==-1&&Mr.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Si(C,C.h),C.h=null))}if(g.D){const Di=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;Di&&(g.ya=Di,at(g.I,g.D,Di))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),g=l;var j=s;if(g.qa=Fo(g,g.J?g.ia:null,g.W),j.K){co(g.h,j);var st=j,Rt=g.L;Rt&&(st.I=Rt),st.B&&(Ai(st),Ir(st)),g.g=j}else Vo(g);0<l.i.length&&Cr(l)}else nt[0]!="stop"&&nt[0]!="close"||Ue(l,7);else l.G==3&&(nt[0]=="stop"||nt[0]=="close"?nt[0]=="stop"?Ue(l,7):Pi(l):nt[0]!="noop"&&l.l&&l.l.ta(nt),l.v=0)}}Ln(4)}catch{}}var Lc=class{constructor(s,u){this.g=s,this.map=u}};function oo(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ao(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function uo(s){return s.h?1:s.g?s.g.size:0}function Ri(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function Si(s,u){s.g?s.g.add(u):s.h=u}function co(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}oo.prototype.cancel=function(){if(this.i=lo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function lo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const l of s.g.values())u=u.concat(l.D);return u}return $(s.i)}function kc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var u=[],l=s.length,g=0;g<l;g++)u.push(s[g]);return u}u=[],l=0;for(g in s)u[l++]=s[g];return u}function Uc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var u=[];s=s.length;for(var l=0;l<s;l++)u.push(l);return u}u=[],l=0;for(const g in s)u[l++]=g;return u}}}function ho(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var l=Uc(s),g=kc(s),w=g.length,C=0;C<w;C++)u.call(void 0,g[C],l&&l[C],s)}var fo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qc(s,u){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var g=s[l].indexOf("="),w=null;if(0<=g){var C=s[l].substring(0,g);w=s[l].substring(g+1)}else C=s[l];u(C,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function ke(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ke){this.h=s.h,Ar(this,s.j),this.o=s.o,this.g=s.g,wr(this,s.s),this.l=s.l;var u=s.i,l=new $n;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),mo(this,l),this.m=s.m}else s&&(u=String(s).match(fo))?(this.h=!1,Ar(this,u[1]||"",!0),this.o=Bn(u[2]||""),this.g=Bn(u[3]||"",!0),wr(this,u[4]),this.l=Bn(u[5]||"",!0),mo(this,u[6]||"",!0),this.m=Bn(u[7]||"")):(this.h=!1,this.i=new $n(null,this.h))}ke.prototype.toString=function(){var s=[],u=this.j;u&&s.push(jn(u,go,!0),":");var l=this.g;return(l||u=="file")&&(s.push("//"),(u=this.o)&&s.push(jn(u,go,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(jn(l,l.charAt(0)=="/"?$c:jc,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",jn(l,Kc)),s.join("")};function oe(s){return new ke(s)}function Ar(s,u,l){s.j=l?Bn(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function wr(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function mo(s,u,l){u instanceof $n?(s.i=u,zc(s.i,s.h)):(l||(u=jn(u,Wc)),s.i=new $n(u,s.h))}function at(s,u,l){s.i.set(u,l)}function Rr(s){return at(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Bn(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function jn(s,u,l){return typeof s=="string"?(s=encodeURI(s).replace(u,Bc),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Bc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var go=/[#\/\?@]/g,jc=/[#\?:]/g,$c=/[#\?]/g,Wc=/[#\?@]/g,Kc=/#/g;function $n(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function _e(s){s.g||(s.g=new Map,s.h=0,s.i&&qc(s.i,function(u,l){s.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}t=$n.prototype,t.add=function(s,u){_e(this),this.i=null,s=sn(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(u),this.h+=1,this};function po(s,u){_e(s),u=sn(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function _o(s,u){return _e(s),u=sn(s,u),s.g.has(u)}t.forEach=function(s,u){_e(this),this.g.forEach(function(l,g){l.forEach(function(w){s.call(u,w,g,this)},this)},this)},t.na=function(){_e(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let g=0;g<u.length;g++){const w=s[g];for(let C=0;C<w.length;C++)l.push(u[g])}return l},t.V=function(s){_e(this);let u=[];if(typeof s=="string")_o(this,s)&&(u=u.concat(this.g.get(sn(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)u=u.concat(s[l])}return u},t.set=function(s,u){return _e(this),this.i=null,s=sn(this,s),_o(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},t.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function yo(s,u,l){po(s,u),0<l.length&&(s.i=null,s.g.set(sn(s,u),$(l)),s.h+=l.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var g=u[l];const C=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var w=C;j[g]!==""&&(w+="="+encodeURIComponent(String(j[g]))),s.push(w)}}return this.i=s.join("&")};function sn(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function zc(s,u){u&&!s.j&&(_e(s),s.i=null,s.g.forEach(function(l,g){var w=g.toLowerCase();g!=w&&(po(this,g),yo(this,w,l))},s)),s.j=u}function Gc(s,u){const l=new Un;if(c.Image){const g=new Image;g.onload=S(ye,l,"TestLoadImage: loaded",!0,u,g),g.onerror=S(ye,l,"TestLoadImage: error",!1,u,g),g.onabort=S(ye,l,"TestLoadImage: abort",!1,u,g),g.ontimeout=S(ye,l,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=s}else u(!1)}function Hc(s,u){const l=new Un,g=new AbortController,w=setTimeout(()=>{g.abort(),ye(l,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:g.signal}).then(C=>{clearTimeout(w),C.ok?ye(l,"TestPingServer: ok",!0,u):ye(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),ye(l,"TestPingServer: error",!1,u)})}function ye(s,u,l,g,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),g(l)}catch{}}function Qc(){this.g=new D}function Xc(s,u,l){const g=l||"";try{ho(s,function(w,C){let j=w;m(w)&&(j=dt(w)),u.push(g+C+"="+encodeURIComponent(j))})}catch(w){throw u.push(g+"type="+encodeURIComponent("_badmap")),w}}function Wn(s){this.l=s.Ub||null,this.j=s.eb||!1}N(Wn,k),Wn.prototype.g=function(){return new Sr(this.l,this.j)},Wn.prototype.i=function(s){return function(){return s}}({});function Sr(s,u){pt.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Sr,pt),t=Sr.prototype,t.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,zn(this)},t.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kn(this)),this.readyState=0},t.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function vo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}t.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?Kn(this):zn(this),this.readyState==3&&vo(this)}},t.Ra=function(s){this.g&&(this.response=this.responseText=s,Kn(this))},t.Qa=function(s){this.g&&(this.response=s,Kn(this))},t.ga=function(){this.g&&Kn(this)};function Kn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,zn(s)}t.setRequestHeader=function(s,u){this.u.append(s,u)},t.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=u.next();return s.join(`\r
`)};function zn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Sr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Eo(s){let u="";return O(s,function(l,g){u+=g,u+=":",u+=l,u+=`\r
`}),u}function bi(s,u,l){t:{for(g in l){var g=!1;break t}g=!0}g||(l=Eo(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):at(s,u,l))}function ht(s){pt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ht,pt);var Yc=/^https?$/i,Jc=["POST","PUT"];t=ht.prototype,t.Ha=function(s){this.J=s},t.ea=function(s,u,l,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ei.g(),this.v=this.o?rt(this.o):rt(Ei),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(C){To(this,C);return}if(s=l||"",l=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var w in g)l.set(w,g[w]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())l.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(l.keys()).find(C=>C.toLowerCase()=="content-type"),w=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Jc,u,void 0))||g||w||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,j]of l)this.g.setRequestHeader(C,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wo(this),this.u=!0,this.g.send(s),this.u=!1}catch(C){To(this,C)}};function To(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,Io(s),br(s)}function Io(s){s.A||(s.A=!0,_t(s,"complete"),_t(s,"error"))}t.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,_t(this,"complete"),_t(this,"abort"),br(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),br(this,!0)),ht.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ao(this):this.bb())},t.bb=function(){Ao(this)};function Ao(s){if(s.h&&typeof a<"u"&&(!s.v[1]||ae(s)!=4||s.Z()!=2)){if(s.u&&ae(s)==4)en(s.Ea,0,s);else if(_t(s,"readystatechange"),ae(s)==4){s.h=!1;try{const j=s.Z();t:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var g;if(g=j===0){var w=String(s.D).match(fo)[1]||null;!w&&c.self&&c.self.location&&(w=c.self.location.protocol.slice(0,-1)),g=!Yc.test(w?w.toLowerCase():"")}l=g}if(l)_t(s,"complete"),_t(s,"success");else{s.m=6;try{var C=2<ae(s)?s.g.statusText:""}catch{C=""}s.l=C+" ["+s.Z()+"]",Io(s)}}finally{br(s)}}}}function br(s,u){if(s.g){wo(s);const l=s.g,g=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||_t(s,"ready");try{l.onreadystatechange=g}catch{}}}function wo(s){s.I&&(c.clearTimeout(s.I),s.I=null)}t.isActive=function(){return!!this.g};function ae(s){return s.g?s.g.readyState:0}t.Z=function(){try{return 2<ae(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),b(u)}};function Ro(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Zc(s){const u={};s=(s.g&&2<=ae(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<s.length;g++){if(U(s[g]))continue;var l=v(s[g]);const w=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const C=u[w]||[];u[w]=C,C.push(l)}d(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(s,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||u}function So(s){this.Aa=0,this.i=[],this.j=new Un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gn("baseRetryDelayMs",5e3,s),this.cb=Gn("retryDelaySeedMs",1e4,s),this.Wa=Gn("forwardChannelMaxRetries",2,s),this.wa=Gn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new oo(s&&s.concurrentRequestLimit),this.Da=new Qc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=So.prototype,t.la=8,t.G=1,t.connect=function(s,u,l,g){Lt(0),this.W=s,this.H=u||{},l&&g!==void 0&&(this.H.OSID=l,this.H.OAID=g),this.F=this.X,this.I=Fo(this,null,this.W),Cr(this)};function Pi(s){if(bo(s),s.G==3){var u=s.U++,l=oe(s.I);if(at(l,"SID",s.K),at(l,"RID",u),at(l,"TYPE","terminate"),Hn(s,l),u=new pe(s,s.j,u),u.L=2,u.v=Rr(oe(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=Lo(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ir(u)}Oo(s)}function Pr(s){s.g&&(Vi(s),s.g.cancel(),s.g=null)}function bo(s){Pr(s),s.u&&(c.clearTimeout(s.u),s.u=null),Vr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Cr(s){if(!ao(s.h)&&!s.s){s.s=!0;var u=s.Ga;Bt||Ye(),ee||(Bt(),ee=!0),Ve.add(u,s),s.B=0}}function xc(s,u){return uo(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=kn(I(s.Ga,s,u),No(s,s.B)),s.B++,!0)}t.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const w=new pe(this,this.j,s);let C=this.o;if(this.S&&(C?(C=f(C),_(C,this.S)):C=this.S),this.m!==null||this.O||(w.H=C,C=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var g=this.i[l];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=Co(this,w,u),l=oe(this.I),at(l,"RID",s),at(l,"CVER",22),this.D&&at(l,"X-HTTP-Session-Id",this.D),Hn(this,l),C&&(this.O?u="headers="+encodeURIComponent(String(Eo(C)))+"&"+u:this.m&&bi(l,this.m,C)),Si(this.h,w),this.Ua&&at(l,"TYPE","init"),this.P?(at(l,"$req",u),at(l,"SID","null"),w.T=!0,Ii(w,l,null)):Ii(w,l,u),this.G=2}}else this.G==3&&(s?Po(this,s):this.i.length==0||ao(this.h)||Po(this))};function Po(s,u){var l;u?l=u.l:l=s.U++;const g=oe(s.I);at(g,"SID",s.K),at(g,"RID",l),at(g,"AID",s.T),Hn(s,g),s.m&&s.o&&bi(g,s.m,s.o),l=new pe(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),u&&(s.i=u.D.concat(s.i)),u=Co(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Si(s.h,l),Ii(l,g,u)}function Hn(s,u){s.H&&O(s.H,function(l,g){at(u,g,l)}),s.l&&ho({},function(l,g){at(u,g,l)})}function Co(s,u,l){l=Math.min(s.i.length,l);var g=s.l?I(s.l.Na,s.l,s):null;t:{var w=s.i;let C=-1;for(;;){const j=["count="+l];C==-1?0<l?(C=w[0].g,j.push("ofs="+C)):C=0:j.push("ofs="+C);let st=!0;for(let Rt=0;Rt<l;Rt++){let nt=w[Rt].g;const Ct=w[Rt].map;if(nt-=C,0>nt)C=Math.max(0,w[Rt].g-100),st=!1;else try{Xc(Ct,j,"req"+nt+"_")}catch{g&&g(Ct)}}if(st){g=j.join("&");break t}}}return s=s.i.splice(0,l),u.D=s,g}function Vo(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;Bt||Ye(),ee||(Bt(),ee=!0),Ve.add(u,s),s.v=0}}function Ci(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=kn(I(s.Fa,s),No(s,s.v)),s.v++,!0)}t.Fa=function(){if(this.u=null,Do(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=kn(I(this.ab,this),s)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),Pr(this),Do(this))};function Vi(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Do(s){s.g=new pe(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=oe(s.qa);at(u,"RID","rpc"),at(u,"SID",s.K),at(u,"AID",s.T),at(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&at(u,"TO",s.ja),at(u,"TYPE","xmlhttp"),Hn(s,u),s.m&&s.o&&bi(u,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Rr(oe(u)),l.m=null,l.P=!0,ro(l,s)}t.Za=function(){this.C!=null&&(this.C=null,Pr(this),Ci(this),Lt(19))};function Vr(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Mo(s,u){var l=null;if(s.g==u){Vr(s),Vi(s),s.g=null;var g=2}else if(Ri(s.h,u))l=u.D,co(s.h,u),g=1;else return;if(s.G!=0){if(u.o)if(g==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var w=s.B;g=vr(),_t(g,new xs(g,l)),Cr(s)}else Vo(s);else if(w=u.s,w==3||w==0&&0<u.X||!(g==1&&xc(s,u)||g==2&&Ci(s)))switch(l&&0<l.length&&(u=s.h,u.i=u.i.concat(l)),w){case 1:Ue(s,5);break;case 4:Ue(s,10);break;case 3:Ue(s,6);break;default:Ue(s,2)}}}function No(s,u){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*u}function Ue(s,u){if(s.j.info("Error code "+u),u==2){var l=I(s.fb,s),g=s.Xa;const w=!g;g=new ke(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ar(g,"https"),Rr(g),w?Gc(g.toString(),l):Hc(g.toString(),l)}else Lt(2);s.G=0,s.l&&s.l.sa(u),Oo(s),bo(s)}t.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function Oo(s){if(s.G=0,s.ka=[],s.l){const u=lo(s.h);(u.length!=0||s.i.length!=0)&&(q(s.ka,u),q(s.ka,s.i),s.h.i.length=0,$(s.i),s.i.length=0),s.l.ra()}}function Fo(s,u,l){var g=l instanceof ke?oe(l):new ke(l);if(g.g!="")u&&(g.g=u+"."+g.g),wr(g,g.s);else{var w=c.location;g=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;var C=new ke(null);g&&Ar(C,g),u&&(C.g=u),w&&wr(C,w),l&&(C.l=l),g=C}return l=s.D,u=s.ya,l&&u&&at(g,l,u),at(g,"VER",s.la),Hn(s,g),g}function Lo(s,u,l){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new ht(new Wn({eb:l})):new ht(s.pa),u.Ha(s.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ko(){}t=ko.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Dr(){}Dr.prototype.g=function(s,u){return new jt(s,u)};function jt(s,u){pt.call(this),this.g=new So(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!U(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new on(this)}N(jt,pt),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Pi(this.g)},jt.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=dt(s),s=l);u.i.push(new Lc(u.Ya++,s)),u.G==3&&Cr(u)},jt.prototype.N=function(){this.g.l=null,delete this.j,Pi(this.g),delete this.g,jt.aa.N.call(this)};function Uo(s){yi.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const l in u){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}N(Uo,yi);function qo(){vi.call(this),this.status=1}N(qo,vi);function on(s){this.g=s}N(on,ko),on.prototype.ua=function(){_t(this.g,"a")},on.prototype.ta=function(s){_t(this.g,new Uo(s))},on.prototype.sa=function(s){_t(this.g,new qo)},on.prototype.ra=function(){_t(this.g,"b")},Dr.prototype.createWebChannel=Dr.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,Xa=function(){return new Dr},Qa=function(){return vr()},Ha=Fe,Gi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Er.NO_ERROR=0,Er.TIMEOUT=8,Er.HTTP_ERROR=6,kr=Er,to.COMPLETE="complete",Ga=to,ct.EventType=ge,ge.OPEN="a",ge.CLOSE="b",ge.ERROR="c",ge.MESSAGE="d",pt.prototype.listen=pt.prototype.K,Xn=ct,za=Wn,ht.prototype.listenOnce=ht.prototype.L,ht.prototype.getLastError=ht.prototype.Ka,ht.prototype.getLastErrorCode=ht.prototype.Ba,ht.prototype.getStatus=ht.prototype.Z,ht.prototype.getResponseJson=ht.prototype.Oa,ht.prototype.getResponseText=ht.prototype.oa,ht.prototype.send=ht.prototype.ea,ht.prototype.setWithCredentials=ht.prototype.Ha,Ka=ht}).apply(typeof Nr<"u"?Nr:typeof self<"u"?self:typeof window<"u"?window:{});const Jo="@firebase/firestore";/**
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
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
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
 */let An="10.12.1";/**
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
 */const Ke=new ka("@firebase/firestore");function Qn(){return Ke.logLevel}function K(t,...e){if(Ke.logLevel<=et.DEBUG){const n=e.map(cs);Ke.debug(`Firestore (${An}): ${t}`,...n)}}function le(t,...e){if(Ke.logLevel<=et.ERROR){const n=e.map(cs);Ke.error(`Firestore (${An}): ${t}`,...n)}}function dn(t,...e){if(Ke.logLevel<=et.WARN){const n=e.map(cs);Ke.warn(`Firestore (${An}): ${t}`,...n)}}function cs(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${An}) INTERNAL ASSERTION FAILED: `+t;throw le(e),new Error(e)}function ot(t,e){t||X()}function J(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends In{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ie{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ya{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Oh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Mt.UNAUTHENTICATED))}shutdown(){}}class Fh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Lh{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let o=new Ie;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ie,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ie)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ot(typeof r.accessToken=="string"),new Ya(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ot(e===null||typeof e=="string"),new Mt(e)}}class kh{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Uh{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new kh(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bh{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,K("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ot(typeof n.token=="string"),this.R=n.token,new qh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function jh(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ja{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=jh(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function it(t,e){return t<e?-1:t>e?1:0}function mn(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class At{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return At.fromMillis(Date.now())}static fromDate(e){return At.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new At(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?it(this.nanoseconds,e.nanoseconds):it(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new At(0,0))}static max(){return new Y(new At(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class or{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),a=n.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ut extends or{construct(e,n,r){return new ut(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ut(n)}static emptyPath(){return new ut([])}}const $h=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends or{construct(e,n,r){return new bt(e,n,r)}static isValidIdentifier(e){return $h.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new z(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new z(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new z(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(o(),i++)}if(o(),a)throw new z(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ut.fromString(e))}static fromName(e){return new G(ut.fromString(e).popFirst(5))}static empty(){return new G(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ut.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ut.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ut(e.slice()))}}function Wh(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new At(n+1,0):new At(n,r));return new we(i,G.empty(),e)}function Kh(t){return new we(t.readTime,t.key,-1)}class we{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new we(Y.min(),G.empty(),-1)}static max(){return new we(Y.max(),G.empty(),-1)}}function zh(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:it(t.largestBatchId,e.largestBatchId))}/**
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
 */const Gh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function hr(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==Gh)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,o=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&n()},h=>r(h))}),a=!0,o===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const o=e.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const m=h;n(e[m]).next(y=>{a[m]=y,++c,c===o&&r(a)},y=>i(y))}})}static doWhile(e,n){return new L((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function Qh(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ls{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ls.oe=-1;function xr(t){return t==null}function zr(t){return t===0&&1/t==-1/0}function Xh(t){return typeof t=="number"&&Number.isInteger(t)&&!zr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Zo(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qe(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Za(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class lt{constructor(e,n){this.comparator=e,this.root=n||St.EMPTY}insert(e,n){return new lt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Or(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Or(this.root,e,this.comparator,!1)}getReverseIterator(){return new Or(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Or(this.root,e,this.comparator,!0)}}class Or{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??St.RED,this.left=i??St.EMPTY,this.right=o??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new St(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return St.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,o){return this}insert(e,n,r){return new St(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xo(this.data.getIterator())}getIteratorFrom(e){return new xo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pt(this.comparator);return n.data=e,n}}class xo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $t{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new $t([])}unionWith(e){let n=new Pt(bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mn(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new xa("Invalid base64 string: "+o):o}}(e);return new Ot(n)}static fromUint8Array(e){const n=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new Ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return it(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const Yh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Re(t){if(ot(!!t),typeof t=="string"){let e=0;const n=Yh.exec(t);if(ot(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:vt(t.seconds),nanos:vt(t.nanos)}}function vt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ze(t){return typeof t=="string"?Ot.fromBase64String(t):Ot.fromUint8Array(t)}/**
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
 */function hs(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fs(t){const e=t.mapValue.fields.__previous_value__;return hs(e)?fs(e):e}function ar(t){const e=Re(t.mapValue.fields.__local_write_time__.timestampValue);return new At(e.seconds,e.nanos)}/**
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
 */class Jh{constructor(e,n,r,i,o,a,c,h,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=m}}class ur{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ur("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ur&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Fr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ge(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hs(t)?4:Zh(t)?9007199254740991:10:X()}function Zt(t,e){if(t===e)return!0;const n=Ge(t);if(n!==Ge(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ar(t).isEqual(ar(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Re(i.timestampValue),c=Re(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return ze(i.bytesValue).isEqual(ze(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return vt(i.geoPointValue.latitude)===vt(o.geoPointValue.latitude)&&vt(i.geoPointValue.longitude)===vt(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return vt(i.integerValue)===vt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=vt(i.doubleValue),c=vt(o.doubleValue);return a===c?zr(a)===zr(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return mn(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Zo(a)!==Zo(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Zt(a[h],c[h])))return!1;return!0}(t,e);default:return X()}}function cr(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function gn(t,e){if(t===e)return 0;const n=Ge(t),r=Ge(e);if(n!==r)return it(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return it(t.booleanValue,e.booleanValue);case 2:return function(o,a){const c=vt(o.integerValue||o.doubleValue),h=vt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(t,e);case 3:return ta(t.timestampValue,e.timestampValue);case 4:return ta(ar(t),ar(e));case 5:return it(t.stringValue,e.stringValue);case 6:return function(o,a){const c=ze(o),h=ze(a);return c.compareTo(h)}(t.bytesValue,e.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let m=0;m<c.length&&m<h.length;m++){const y=it(c[m],h[m]);if(y!==0)return y}return it(c.length,h.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,a){const c=it(vt(o.latitude),vt(a.latitude));return c!==0?c:it(vt(o.longitude),vt(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,a){const c=o.values||[],h=a.values||[];for(let m=0;m<c.length&&m<h.length;++m){const y=gn(c[m],h[m]);if(y)return y}return it(c.length,h.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,a){if(o===Fr.mapValue&&a===Fr.mapValue)return 0;if(o===Fr.mapValue)return 1;if(a===Fr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),m=a.fields||{},y=Object.keys(m);h.sort(),y.sort();for(let T=0;T<h.length&&T<y.length;++T){const I=it(h[T],y[T]);if(I!==0)return I;const S=gn(c[h[T]],m[y[T]]);if(S!==0)return S}return it(h.length,y.length)}(t.mapValue,e.mapValue);default:throw X()}}function ta(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return it(t,e);const n=Re(t),r=Re(e),i=it(n.seconds,r.seconds);return i!==0?i:it(n.nanos,r.nanos)}function pn(t){return Hi(t)}function Hi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Re(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ze(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Hi(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Hi(n.fields[a])}`;return i+"}"}(t.mapValue):X()}function Qi(t){return!!t&&"integerValue"in t}function ds(t){return!!t&&"arrayValue"in t}function ea(t){return!!t&&"nullValue"in t}function na(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ur(t){return!!t&&"mapValue"in t}function xn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qe(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xn(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Zh(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ur(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xn(n)}setAll(e){let n=bt.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const h=this.getFieldsMap(n);this.applyChanges(h,r,i),r={},i=[],n=c.popLast()}a?r[c.lastSegment()]=xn(a):i.push(c.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Ur(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ur(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qe(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Ut(xn(this.value))}}function tu(t){const e=[];return Qe(t.fields,(n,r)=>{const i=new bt([n]);if(Ur(r)){const o=tu(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new $t(e)}/**
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
 */class Nt{constructor(e,n,r,i,o,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Nt(e,0,Y.min(),Y.min(),Y.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,i){return new Nt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new Nt(e,2,n,Y.min(),Y.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,Y.min(),Y.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gr{constructor(e,n){this.position=e,this.inclusive=n}}function ra(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],a=t.position[i];if(o.field.isKeyField()?r=G.comparator(G.fromName(a.referenceValue),n.key):r=gn(a,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ia(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Hr{constructor(e,n="asc"){this.field=e,this.dir=n}}function xh(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class eu{}class It extends eu{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ef(e,n,r):n==="array-contains"?new sf(e,r):n==="in"?new of(e,r):n==="not-in"?new af(e,r):n==="array-contains-any"?new uf(e,r):new It(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new nf(e,r):new rf(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gn(n,this.value)):n!==null&&Ge(this.value)===Ge(n)&&this.matchesComparison(gn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends eu{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new xt(e,n)}matches(e){return nu(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nu(t){return t.op==="and"}function ru(t){return tf(t)&&nu(t)}function tf(t){for(const e of t.filters)if(e instanceof xt)return!1;return!0}function Xi(t){if(t instanceof It)return t.field.canonicalString()+t.op.toString()+pn(t.value);if(ru(t))return t.filters.map(e=>Xi(e)).join(",");{const e=t.filters.map(n=>Xi(n)).join(",");return`${t.op}(${e})`}}function iu(t,e){return t instanceof It?function(r,i){return i instanceof It&&r.op===i.op&&r.field.isEqual(i.field)&&Zt(r.value,i.value)}(t,e):t instanceof xt?function(r,i){return i instanceof xt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,c)=>o&&iu(a,i.filters[c]),!0):!1}(t,e):void X()}function su(t){return t instanceof It?function(n){return`${n.field.canonicalString()} ${n.op} ${pn(n.value)}`}(t):t instanceof xt?function(n){return n.op.toString()+" {"+n.getFilters().map(su).join(" ,")+"}"}(t):"Filter"}class ef extends It{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class nf extends It{constructor(e,n){super(e,"in",n),this.keys=ou("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rf extends It{constructor(e,n){super(e,"not-in",n),this.keys=ou("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ou(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class sf extends It{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ds(n)&&cr(n.arrayValue,this.value)}}class of extends It{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&cr(this.value.arrayValue,n)}}class af extends It{constructor(e,n){super(e,"not-in",n)}matches(e){if(cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!cr(this.value.arrayValue,n)}}class uf extends It{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ds(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>cr(this.value.arrayValue,r))}}/**
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
 */class cf{constructor(e,n=null,r=[],i=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function sa(t,e=null,n=[],r=[],i=null,o=null,a=null){return new cf(t,e,n,r,i,o,a)}function ms(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xi(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),xr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>pn(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>pn(r)).join(",")),e.ue=n}return e.ue}function gs(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xh(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ia(t.startAt,e.startAt)&&ia(t.endAt,e.endAt)}function Yi(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ti{constructor(e,n=null,r=[],i=[],o=null,a="F",c=null,h=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function lf(t,e,n,r,i,o,a,c){return new ti(t,e,n,r,i,o,a,c)}function ei(t){return new ti(t)}function oa(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hf(t){return t.collectionGroup!==null}function tr(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Pt(bt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(m=>{m.isInequality()&&(c=c.add(m.field))})}),c})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Hr(o,r))}),n.has(bt.keyField().canonicalString())||e.ce.push(new Hr(bt.keyField(),r))}return e.ce}function Yt(t){const e=J(t);return e.le||(e.le=ff(e,tr(t))),e.le}function ff(t,e){if(t.limitType==="F")return sa(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Hr(i.field,o)});const n=t.endAt?new Gr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gr(t.startAt.position,t.startAt.inclusive):null;return sa(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ji(t,e,n){return new ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ni(t,e){return gs(Yt(t),Yt(e))&&t.limitType===e.limitType}function au(t){return`${ms(Yt(t))}|lt:${t.limitType}`}function un(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>su(i)).join(", ")}]`),xr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>pn(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>pn(i)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function ri(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):G.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of tr(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,c,h){const m=ra(a,c,h);return a.inclusive?m<=0:m<0}(r.startAt,tr(r),i)||r.endAt&&!function(a,c,h){const m=ra(a,c,h);return a.inclusive?m>=0:m>0}(r.endAt,tr(r),i))}(t,e)}function df(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uu(t){return(e,n)=>{let r=!1;for(const i of tr(t)){const o=mf(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function mf(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(o,a,c){const h=a.data.field(o),m=c.data.field(o);return h!==null&&m!==null?gn(h,m):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class wn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qe(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Za(this.inner)}size(){return this.innerSize}}/**
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
 */const gf=new lt(G.comparator);function he(){return gf}const cu=new lt(G.comparator);function Yn(...t){let e=cu;for(const n of t)e=e.insert(n.key,n);return e}function lu(t){let e=cu;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Be(){return er()}function hu(){return er()}function er(){return new wn(t=>t.toString(),(t,e)=>t.isEqual(e))}const pf=new lt(G.comparator),_f=new Pt(G.comparator);function x(...t){let e=_f;for(const n of t)e=e.add(n);return e}const yf=new Pt(it);function vf(){return yf}/**
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
 */function fu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zr(e)?"-0":e}}function du(t){return{integerValue:""+t}}function Ef(t,e){return Xh(e)?du(e):fu(t,e)}/**
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
 */class ii{constructor(){this._=void 0}}function Tf(t,e,n){return t instanceof lr?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&hs(o)&&(o=fs(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(n,e):t instanceof _n?gu(t,e):t instanceof yn?pu(t,e):function(i,o){const a=mu(i,o),c=aa(a)+aa(i.Pe);return Qi(a)&&Qi(i.Pe)?du(c):fu(i.serializer,c)}(t,e)}function If(t,e,n){return t instanceof _n?gu(t,e):t instanceof yn?pu(t,e):n}function mu(t,e){return t instanceof Qr?function(r){return Qi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class lr extends ii{}class _n extends ii{constructor(e){super(),this.elements=e}}function gu(t,e){const n=_u(e);for(const r of t.elements)n.some(i=>Zt(i,r))||n.push(r);return{arrayValue:{values:n}}}class yn extends ii{constructor(e){super(),this.elements=e}}function pu(t,e){let n=_u(e);for(const r of t.elements)n=n.filter(i=>!Zt(i,r));return{arrayValue:{values:n}}}class Qr extends ii{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function aa(t){return vt(t.integerValue||t.doubleValue)}function _u(t){return ds(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class ps{constructor(e,n){this.field=e,this.transform=n}}function Af(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof _n&&i instanceof _n||r instanceof yn&&i instanceof yn?mn(r.elements,i.elements,Zt):r instanceof Qr&&i instanceof Qr?Zt(r.Pe,i.Pe):r instanceof lr&&i instanceof lr}(t.transform,e.transform)}class wf{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class si{}function yu(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Eu(t.key,Ht.none()):new dr(t.key,t.data,Ht.none());{const n=t.data,r=Ut.empty();let i=new Pt(bt.comparator);for(let o of e.fields)if(!i.has(o)){let a=n.field(o);a===null&&o.length>1&&(o=o.popLast(),a=n.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Pe(t.key,r,new $t(i.toArray()),Ht.none())}}function Rf(t,e,n){t instanceof dr?function(i,o,a){const c=i.value.clone(),h=ca(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Pe?function(i,o,a){if(!qr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=ca(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(vu(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(t,e,n):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function nr(t,e,n,r){return t instanceof dr?function(o,a,c,h){if(!qr(o.precondition,a))return c;const m=o.value.clone(),y=la(o.fieldTransforms,h,a);return m.setAll(y),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pe?function(o,a,c,h){if(!qr(o.precondition,a))return c;const m=la(o.fieldTransforms,h,a),y=a.data;return y.setAll(vu(o)),y.setAll(m),a.convertToFoundDocument(a.version,y).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(t,e,n,r):function(o,a,c){return qr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function Sf(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=mu(r.transform,i||null);o!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,o))}return n||null}function ua(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&mn(r,i,(o,a)=>Af(o,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class dr extends si{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pe extends si{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function vu(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ca(t,e,n){const r=new Map;ot(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],a=o.transform,c=e.data.field(o.field);r.set(o.field,If(a,c,n[i]))}return r}function la(t,e,n){const r=new Map;for(const i of t){const o=i.transform,a=n.data.field(i.field);r.set(i.field,Tf(o,a,e))}return r}class Eu extends si{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bf extends si{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Pf{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Rf(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=nr(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=nr(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hu();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=n.has(i.key)?null:c;const h=yu(a,c);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),x())}isEqual(e){return this.batchId===e.batchId&&mn(this.mutations,e.mutations,(n,r)=>ua(n,r))&&mn(this.baseMutations,e.baseMutations,(n,r)=>ua(n,r))}}class _s{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ot(e.mutations.length===r.length);let i=function(){return pf}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new _s(e,n,r,i)}}/**
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
 */class Cf{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Vf{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var yt,tt;function Df(t){switch(t){default:return X();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function Tu(t){if(t===void 0)return le("GRPC error has no .code"),F.UNKNOWN;switch(t){case yt.OK:return F.OK;case yt.CANCELLED:return F.CANCELLED;case yt.UNKNOWN:return F.UNKNOWN;case yt.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case yt.INTERNAL:return F.INTERNAL;case yt.UNAVAILABLE:return F.UNAVAILABLE;case yt.UNAUTHENTICATED:return F.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case yt.NOT_FOUND:return F.NOT_FOUND;case yt.ALREADY_EXISTS:return F.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return F.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case yt.ABORTED:return F.ABORTED;case yt.OUT_OF_RANGE:return F.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return F.UNIMPLEMENTED;case yt.DATA_LOSS:return F.DATA_LOSS;default:return X()}}(tt=yt||(yt={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(){return new TextEncoder}/**
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
 */const Nf=new je([4294967295,4294967295],0);function ha(t){const e=Mf().encode(t),n=new Wa;return n.update(e),new Uint8Array(n.digest())}function fa(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new je([n,r],0),new je([i,o],0)]}class ys{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Jn(`Invalid padding: ${n}`);if(r<0)throw new Jn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Jn(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Jn(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=je.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(je.fromNumber(r)));return i.compare(Nf)===1&&(i=new je([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ha(e),[r,i]=fa(n);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new ys(o,i,n);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const n=ha(e),[r,i]=fa(n);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Jn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class oi{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,mr.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new oi(Y.min(),i,new lt(it),he(),x())}}class mr{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new mr(r,n,x(),x(),x())}}/**
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
 */class Br{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Iu{constructor(e,n){this.targetId=e,this.me=n}}class Au{constructor(e,n,r=Ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class da{constructor(){this.fe=0,this.ge=ga(),this.pe=Ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=x(),n=x(),r=x();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new mr(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=ga()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ot(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Of{constructor(e){this.Le=e,this.Be=new Map,this.ke=he(),this.qe=ma(),this.Qe=new lt(it)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(Yi(o))if(r===0){const a=new G(o.path);this.Ue(n,a,Nt.newNoDocument(a,Y.min()))}else ot(r===1);else{const a=this.Ye(n);if(a!==r){const c=this.Ze(e),h=c?this.Xe(c,e,a):1;if(h!==0){this.je(n);const m=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,m)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let a,c;try{a=ze(r).toUint8Array()}catch(h){if(h instanceof xa)return dn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new ys(a,i,o)}catch(h){return dn(h instanceof Jn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&Yi(c.target)){const h=new G(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Nt.newNoDocument(h,e))}o.be&&(n.set(a,o.Ce()),o.ve())}});let r=x();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const m=this.Je(h);return!m||m.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const i=new oi(e,n,this.Qe,this.ke,r);return this.ke=he(),this.qe=ma(),this.Qe=new lt(it),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new da,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Pt(it),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new da),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ma(){return new lt(G.comparator)}function ga(){return new lt(G.comparator)}const Ff={asc:"ASCENDING",desc:"DESCENDING"},Lf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kf={and:"AND",or:"OR"};class Uf{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zi(t,e){return t.useProto3Json||xr(e)?e:{value:e}}function Xr(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wu(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qf(t,e){return Xr(t,e.toTimestamp())}function Jt(t){return ot(!!t),Y.fromTimestamp(function(n){const r=Re(n);return new At(r.seconds,r.nanos)}(t))}function vs(t,e){return xi(t,e).canonicalString()}function xi(t,e){const n=function(i){return new ut(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ru(t){const e=ut.fromString(t);return ot(Vu(e)),e}function ts(t,e){return vs(t.databaseId,e.path)}function Li(t,e){const n=Ru(e);if(n.get(1)!==t.databaseId.projectId)throw new z(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(bu(n))}function Su(t,e){return vs(t.databaseId,e)}function Bf(t){const e=Ru(t);return e.length===4?ut.emptyPath():bu(e)}function es(t){return new ut(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bu(t){return ot(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pa(t,e,n){return{name:ts(t,e),fields:n.value.mapValue.fields}}function jf(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(m,y){return m.useProto3Json?(ot(y===void 0||typeof y=="string"),Ot.fromBase64String(y||"")):(ot(y===void 0||y instanceof Buffer||y instanceof Uint8Array),Ot.fromUint8Array(y||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(m){const y=m.code===void 0?F.UNKNOWN:Tu(m.code);return new z(y,m.message||"")}(a);n=new Au(r,i,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Li(t,r.document.name),o=Jt(r.document.updateTime),a=r.document.createTime?Jt(r.document.createTime):Y.min(),c=new Ut({mapValue:{fields:r.document.fields}}),h=Nt.newFoundDocument(i,o,a,c),m=r.targetIds||[],y=r.removedTargetIds||[];n=new Br(m,y,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Li(t,r.document),o=r.readTime?Jt(r.readTime):Y.min(),a=Nt.newNoDocument(i,o),c=r.removedTargetIds||[];n=new Br([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Li(t,r.document),o=r.removedTargetIds||[];n=new Br([],o,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Vf(i,o),c=r.targetId;n=new Iu(c,a)}}return n}function $f(t,e){let n;if(e instanceof dr)n={update:pa(t,e.key,e.value)};else if(e instanceof Eu)n={delete:ts(t,e.key)};else if(e instanceof Pe)n={update:pa(t,e.key,e.data),updateMask:Jf(e.fieldMask)};else{if(!(e instanceof bf))return X();n={verify:ts(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof lr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof _n)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof yn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Qr)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:qf(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:X()}(t,e.precondition)),n}function Wf(t,e){return t&&t.length>0?(ot(e!==void 0),t.map(n=>function(i,o){let a=i.updateTime?Jt(i.updateTime):Jt(o);return a.isEqual(Y.min())&&(a=Jt(o)),new wf(a,i.transformResults||[])}(n,e))):[]}function Kf(t,e){return{documents:[Su(t,e.path)]}}function zf(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Su(t,i);const o=function(m){if(m.length!==0)return Cu(xt.create(m,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const a=function(m){if(m.length!==0)return m.map(y=>function(I){return{field:cn(I.field),direction:Qf(I.dir)}}(y))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Zi(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{_t:n,parent:i}}function Gf(t){let e=Bf(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ot(r===1);const y=n.from[0];y.allDescendants?i=y.collectionId:e=e.child(y.collectionId)}let o=[];n.where&&(o=function(T){const I=Pu(T);return I instanceof xt&&ru(I)?I.getFilters():[I]}(n.where));let a=[];n.orderBy&&(a=function(T){return T.map(I=>function(N){return new Hr(ln(N.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(I))}(n.orderBy));let c=null;n.limit&&(c=function(T){let I;return I=typeof T=="object"?T.value:T,xr(I)?null:I}(n.limit));let h=null;n.startAt&&(h=function(T){const I=!!T.before,S=T.values||[];return new Gr(S,I)}(n.startAt));let m=null;return n.endAt&&(m=function(T){const I=!T.before,S=T.values||[];return new Gr(S,I)}(n.endAt)),lf(e,i,a,o,c,"F",h,m)}function Hf(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pu(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ln(n.unaryFilter.field);return It.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ln(n.unaryFilter.field);return It.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ln(n.unaryFilter.field);return It.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ln(n.unaryFilter.field);return It.create(a,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return It.create(ln(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xt.create(n.compositeFilter.filters.map(r=>Pu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function Qf(t){return Ff[t]}function Xf(t){return Lf[t]}function Yf(t){return kf[t]}function cn(t){return{fieldPath:t.canonicalString()}}function ln(t){return bt.fromServerFormat(t.fieldPath)}function Cu(t){return t instanceof It?function(n){if(n.op==="=="){if(na(n.value))return{unaryFilter:{field:cn(n.field),op:"IS_NAN"}};if(ea(n.value))return{unaryFilter:{field:cn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(na(n.value))return{unaryFilter:{field:cn(n.field),op:"IS_NOT_NAN"}};if(ea(n.value))return{unaryFilter:{field:cn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cn(n.field),op:Xf(n.op),value:n.value}}}(t):t instanceof xt?function(n){const r=n.getFilters().map(i=>Cu(i));return r.length===1?r[0]:{compositeFilter:{op:Yf(n.op),filters:r}}}(t):X()}function Jf(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Vu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ve{constructor(e,n,r,i,o=Y.min(),a=Y.min(),c=Ot.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new ve(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ve(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ve(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ve(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Zf{constructor(e){this.ct=e}}function xf(t){const e=Gf({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ji(e,e.limit,"L"):e}/**
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
 */class td{constructor(){this._n=new ed}addToCollectionParentIndex(e,n){return this._n.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(we.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(we.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class ed{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Pt(ut.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pt(ut.comparator)).toArray()}}/**
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
 */class vn{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new vn(0)}static Ln(){return new vn(-1)}}/**
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
 */class nd{constructor(){this.changes=new wn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class rd{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class id{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&nr(r.mutation,i,$t.empty(),At.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,x()).next(()=>r))}getLocalViewOfDocuments(e,n,r=x()){const i=Be();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let a=Yn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Be();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,x()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,r,i){let o=he();const a=er(),c=function(){return er()}();return n.forEach((h,m)=>{const y=r.get(m.key);i.has(m.key)&&(y===void 0||y.mutation instanceof Pe)?o=o.insert(m.key,m):y!==void 0?(a.set(m.key,y.mutation.getFieldMask()),nr(y.mutation,m,y.mutation.getFieldMask(),At.now())):a.set(m.key,$t.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((m,y)=>a.set(m,y)),n.forEach((m,y)=>{var T;return c.set(m,new rd(y,(T=a.get(m))!==null&&T!==void 0?T:null))}),c))}recalculateAndSaveOverlays(e,n){const r=er();let i=new lt((a,c)=>a-c),o=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(h=>{const m=n.get(h);if(m===null)return;let y=r.get(h)||$t.empty();y=c.applyToLocalView(m,y),r.set(h,y);const T=(i.get(c.batchId)||x()).add(h);i=i.insert(c.batchId,T)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),m=h.key,y=h.value,T=hu();y.forEach(I=>{if(!o.has(I)){const S=yu(n.get(I),r.get(I));S!==null&&T.set(I,S),o=o.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,m,T))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return G.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):L.resolve(Be());let c=-1,h=o;return a.next(m=>L.forEach(m,(y,T)=>(c<T.largestBatchId&&(c=T.largestBatchId),o.get(y)?L.resolve():this.remoteDocumentCache.getEntry(e,y).next(I=>{h=h.insert(y,I)}))).next(()=>this.populateOverlays(e,m,o)).next(()=>this.computeViews(e,h,m,x())).next(y=>({batchId:c,changes:lu(y)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Yn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let a=Yn();return this.indexManager.getCollectionParents(e,o).next(c=>L.forEach(c,h=>{const m=function(T,I){return new ti(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(n,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,m,r,i).next(y=>{y.forEach((T,I)=>{a=a.insert(T,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(a=>{o.forEach((h,m)=>{const y=m.getKey();a.get(y)===null&&(a=a.insert(y,Nt.newInvalidDocument(y)))});let c=Yn();return a.forEach((h,m)=>{const y=o.get(h);y!==void 0&&nr(y.mutation,m,$t.empty(),At.now()),ri(n,m)&&(c=c.insert(h,m))}),c})}}/**
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
 */class sd{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return L.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Jt(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:xf(i.bundledQuery),readTime:Jt(i.readTime)}}(n)),L.resolve()}}/**
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
 */class od{constructor(){this.overlays=new lt(G.comparator),this.hr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Be();return L.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Be(),o=n.length+1,a=new G(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,m=h.getKey();if(!n.isPrefixOf(m.path))break;m.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new lt((m,y)=>m-y);const a=this.overlays.getIterator();for(;a.hasNext();){const m=a.getNext().value;if(m.getKey().getCollectionGroup()===n&&m.largestBatchId>r){let y=o.get(m.largestBatchId);y===null&&(y=Be(),o=o.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const c=Be(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((m,y)=>c.set(m,y)),!(c.size()>=i)););return L.resolve(c)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Cf(n,r));let o=this.hr.get(n);o===void 0&&(o=x(),this.hr.set(n,o)),this.hr.set(n,o.add(r.key))}}/**
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
 */class Es{constructor(){this.Pr=new Pt(wt.Ir),this.Tr=new Pt(wt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new wt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new wt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new G(new ut([])),r=new wt(n,e),i=new wt(n,e+1),o=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new G(new ut([])),r=new wt(n,e),i=new wt(n,e+1);let o=x();return this.Tr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const n=new wt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class wt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return G.comparator(e.key,n.key)||it(e.pr,n.pr)}static Er(e,n){return it(e.pr,n.pr)||G.comparator(e.key,n.key)}}/**
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
 */class ad{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Pt(wt.Ir)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Pf(o,n,r,i);this.mutationQueue.push(a);for(const c of i)this.wr=this.wr.add(new wt(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,n){return L.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),o=i<0?0:i;return L.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new wt(n,0),i=new wt(n,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],a=>{const c=this.Sr(a.pr);o.push(c)}),L.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pt(it);return n.forEach(i=>{const o=new wt(i,0),a=new wt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],c=>{r=r.add(c.pr)})}),L.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;G.isDocumentKey(o)||(o=o.child(""));const a=new wt(new G(o),0);let c=new Pt(it);return this.wr.forEachWhile(h=>{const m=h.key.path;return!!r.isPrefixOf(m)&&(m.length===i&&(c=c.add(h.pr)),!0)},a),L.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ot(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return L.forEach(n.mutations,i=>{const o=new wt(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new wt(n,0),i=this.wr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ud{constructor(e){this.vr=e,this.docs=function(){return new lt(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,a=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=he();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Nt.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=he();const a=n.path,c=new G(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:m,value:{document:y}}=h.getNext();if(!a.isPrefixOf(m.path))break;m.path.length>a.length+1||zh(Kh(y),r)<=0||(i.has(y.key)||ri(n,y))&&(o=o.insert(y.key,y.mutableCopy()))}return L.resolve(o)}getAllFromCollectionGroup(e,n,r,i){X()}Fr(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cd(this)}getSize(e){return L.resolve(this.size)}}class cd extends nd{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class ld{constructor(e){this.persistence=e,this.Mr=new wn(n=>ms(n),gs),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Es,this.targetCount=0,this.Lr=vn.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),L.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new vn(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.qn(n),L.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Mr.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),L.waitFor(o).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),L.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Nr.containsKey(n))}}/**
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
 */class hd{constructor(e,n){this.Br={},this.overlays={},this.kr=new ls(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new ld(this),this.indexManager=new td,this.remoteDocumentCache=function(i){return new ud(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Zf(n),this.$r=new sd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new od,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new ad(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new fd(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(e,n){return L.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class fd extends Hh{constructor(e){super(),this.currentSequenceNumber=e}}class Ts{constructor(e){this.persistence=e,this.zr=new Es,this.jr=null}static Hr(e){return new Ts(e)}get Jr(){if(this.jr)return this.jr;throw X()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),L.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Jr,r=>{const i=G.fromPath(r);return this.Yr(e,i).next(o=>{o||n.removeEntry(i,Y.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return L.or([()=>L.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Is{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=x(),i=x();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Is(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class md{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return gl()?8:Qh(dl())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.ji(e,n).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(e,n,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new dd;return this.Ji(e,n,a).next(c=>{if(o.result=c,this.Ui)return this.Yi(e,n,a,c.size)})}).next(()=>o.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Qn()<=et.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",un(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),L.resolve()):(Qn()<=et.DEBUG&&K("QueryEngine","Query:",un(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Qn()<=et.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",un(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):L.resolve())}ji(e,n){if(oa(n))return L.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ji(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=x(...o);return this.zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(h=>{const m=this.Zi(n,c);return this.Xi(n,m,a,h.readTime)?this.ji(e,Ji(n,null,"F")):this.es(e,m,n,h)}))})))}Hi(e,n,r,i){return oa(n)||i.isEqual(Y.min())?L.resolve(null):this.zi.getDocuments(e,r).next(o=>{const a=this.Zi(n,o);return this.Xi(n,a,r,i)?L.resolve(null):(Qn()<=et.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),un(n)),this.es(e,a,n,Wh(i,-1)).next(c=>c))})}Zi(e,n){let r=new Pt(uu(e));return n.forEach((i,o)=>{ri(e,o)&&(r=r.add(o))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(e,n,r){return Qn()<=et.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",un(n)),this.zi.getDocumentsMatchingQuery(e,n,we.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class gd{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new lt(it),this.rs=new wn(o=>ms(o),gs),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new id(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function pd(t,e,n,r){return new gd(t,e,n,r)}async function Du(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=x();for(const m of i){a.push(m.batchId);for(const y of m.mutations)h=h.add(y.key)}for(const m of o){c.push(m.batchId);for(const y of m.mutations)h=h.add(y.key)}return n.localDocuments.getDocuments(r,h).next(m=>({us:m,removedBatchIds:a,addedBatchIds:c}))})})}function _d(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.os.newChangeBuffer({trackRemovals:!0});return function(c,h,m,y){const T=m.batch,I=T.keys();let S=L.resolve();return I.forEach(N=>{S=S.next(()=>y.getEntry(h,N)).next($=>{const q=m.docVersions.get(N);ot(q!==null),$.version.compareTo(q)<0&&(T.applyToRemoteDocument($,m),$.isValidDocument()&&($.setReadTime(m.commitVersion),y.addEntry($)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,T))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=x();for(let m=0;m<c.mutationResults.length;++m)c.mutationResults[m].transformResults.length>0&&(h=h.add(c.batch.mutations[m].key));return h}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Mu(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function yd(t,e){const n=J(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const c=[];e.targetChanges.forEach((y,T)=>{const I=i.get(T);if(!I)return;c.push(n.Qr.removeMatchingKeys(o,y.removedDocuments,T).next(()=>n.Qr.addMatchingKeys(o,y.addedDocuments,T)));let S=I.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(T)!==null?S=S.withResumeToken(Ot.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):y.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(y.resumeToken,r)),i=i.insert(T,S),function($,q,H){return $.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(I,S,y)&&c.push(n.Qr.updateTargetData(o,S))});let h=he(),m=x();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(o,y))}),c.push(vd(o,a,e.documentUpdates).next(y=>{h=y.cs,m=y.ls})),!r.isEqual(Y.min())){const y=n.Qr.getLastRemoteSnapshotVersion(o).next(T=>n.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(y)}return L.waitFor(c).next(()=>a.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,h,m)).next(()=>h)}).then(o=>(n.ns=i,o))}function vd(t,e,n){let r=x(),i=x();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let a=he();return n.forEach((c,h)=>{const m=o.get(c);h.isFoundDocument()!==m.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(Y.min())?(e.removeEntry(c,h.readTime),a=a.insert(c,h)):!m.isValidDocument()||h.version.compareTo(m.version)>0||h.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(h),a=a.insert(c,h)):K("LocalStore","Ignoring outdated watch update for ",c,". Current version:",m.version," Watch version:",h.version)}),{cs:a,ls:i}})}function Ed(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Td(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(o=>o?(i=o,L.resolve(i)):n.Qr.allocateTargetId(r).next(a=>(i=new ve(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function ns(t,e,n){const r=J(t),i=r.ns.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!fr(a))throw a;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function _a(t,e,n){const r=J(t);let i=Y.min(),o=x();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,m,y){const T=J(h),I=T.rs.get(y);return I!==void 0?L.resolve(T.ns.get(I)):T.Qr.getTargetData(m,y)}(r,a,Yt(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,n?i:Y.min(),n?o:x())).next(c=>(Id(r,df(e),c),{documents:c,hs:o})))}function Id(t,e,n){let r=t.ss.get(e)||Y.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.ss.set(e,r)}class ya{constructor(){this.activeTargetIds=vf()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ad{constructor(){this.no=new ya,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new ya,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wd{io(e){}shutdown(){}}/**
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
 */class va{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr=null;function ki(){return Lr===null?Lr=function(){return 268435456+Math.round(2147483648*Math.random())}():Lr++,"0x"+Lr.toString(16)}/**
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
 */const Rd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Sd{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Dt="WebChannelConnection";class bd extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(n,r,i,o,a){const c=ki(),h=this.vo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${c}:`,h,i);const m={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(m,o,a),this.Mo(n,h,m,i).then(y=>(K("RestConnection",`Received RPC '${n}' ${c}: `,y),y),y=>{throw dn("RestConnection",`RPC '${n}' ${c} failed with error: `,y,"url: ",h,"request:",i),y})}xo(n,r,i,o,a,c){return this.Co(n,r,i,o,a)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+An}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>n[a]=o),i&&i.headers.forEach((o,a)=>n[a]=o)}vo(n,r){const i=Rd[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const o=ki();return new Promise((a,c)=>{const h=new Ka;h.setWithCredentials(!0),h.listenOnce(Ga.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case kr.NO_ERROR:const y=h.getResponseJson();K(Dt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),a(y);break;case kr.TIMEOUT:K(Dt,`RPC '${e}' ${o} timed out`),c(new z(F.DEADLINE_EXCEEDED,"Request time out"));break;case kr.HTTP_ERROR:const T=h.getStatus();if(K(Dt,`RPC '${e}' ${o} failed with status:`,T,"response text:",h.getResponseText()),T>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const S=I==null?void 0:I.error;if(S&&S.status&&S.message){const N=function(q){const H=q.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(H)>=0?H:F.UNKNOWN}(S.status);c(new z(N,S.message))}else c(new z(F.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new z(F.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{K(Dt,`RPC '${e}' ${o} completed.`)}});const m=JSON.stringify(i);K(Dt,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",m,r,15)})}Oo(e,n,r){const i=ki(),o=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Xa(),c=Qa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(h.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(h.xmlHttpFactory=new za({})),this.Fo(h.initMessageHeaders,n,r),h.encodeInitMessageHeaders=!0;const y=o.join("");K(Dt,`Creating RPC '${e}' stream ${i}: ${y}`,h);const T=a.createWebChannel(y,h);let I=!1,S=!1;const N=new Sd({lo:q=>{S?K(Dt,`Not sending because RPC '${e}' stream ${i} is closed:`,q):(I||(K(Dt,`Opening RPC '${e}' stream ${i} transport.`),T.open(),I=!0),K(Dt,`RPC '${e}' stream ${i} sending:`,q),T.send(q))},ho:()=>T.close()}),$=(q,H,U)=>{q.listen(H,V=>{try{U(V)}catch(B){setTimeout(()=>{throw B},0)}})};return $(T,Xn.EventType.OPEN,()=>{S||(K(Dt,`RPC '${e}' stream ${i} transport opened.`),N.mo())}),$(T,Xn.EventType.CLOSE,()=>{S||(S=!0,K(Dt,`RPC '${e}' stream ${i} transport closed`),N.po())}),$(T,Xn.EventType.ERROR,q=>{S||(S=!0,dn(Dt,`RPC '${e}' stream ${i} transport errored:`,q),N.po(new z(F.UNAVAILABLE,"The operation could not be completed")))}),$(T,Xn.EventType.MESSAGE,q=>{var H;if(!S){const U=q.data[0];ot(!!U);const V=U,B=V.error||((H=V[0])===null||H===void 0?void 0:H.error);if(B){K(Dt,`RPC '${e}' stream ${i} received error:`,B);const W=B.status;let O=function(p){const _=yt[p];if(_!==void 0)return Tu(_)}(W),d=B.message;O===void 0&&(O=F.INTERNAL,d="Unknown error status: "+W+" with message "+B.message),S=!0,N.po(new z(O,d)),T.close()}else K(Dt,`RPC '${e}' stream ${i} received:`,U),N.yo(U)}}),$(c,Ha.STAT_EVENT,q=>{q.stat===Gi.PROXY?K(Dt,`RPC '${e}' stream ${i} detected buffering proxy`):q.stat===Gi.NOPROXY&&K(Dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.fo()},0),N}}function Ui(){return typeof document<"u"?document:null}/**
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
 */function ai(t){return new Uf(t,!0)}/**
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
 */class Nu{constructor(e,n,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Ou{constructor(e,n,r,i,o,a,c,h){this.oi=e,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Nu(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(le(n.toString()),le("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new z(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Pd extends Ou{constructor(e,n,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=o}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=jf(this.serializer,e),r=function(o){if(!("targetChange"in o))return Y.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?Y.min():a.readTime?Jt(a.readTime):Y.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=es(this.serializer),n.addTarget=function(o,a){let c;const h=a.target;if(c=Yi(h)?{documents:Kf(o,h)}:{query:zf(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=wu(o,a.resumeToken);const m=Zi(o,a.expectedCount);m!==null&&(c.expectedCount=m)}else if(a.snapshotVersion.compareTo(Y.min())>0){c.readTime=Xr(o,a.snapshotVersion.toTimestamp());const m=Zi(o,a.expectedCount);m!==null&&(c.expectedCount=m)}return c}(this.serializer,e);const r=Hf(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=es(this.serializer),n.removeTarget=e,this.i_(n)}}class Cd extends Ou{constructor(e,n,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(ot(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=Wf(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.A_(r,n)}return ot(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=es(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$f(this.serializer,r))};this.i_(n)}}/**
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
 */class Vd extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new z(F.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,xi(n,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(F.UNKNOWN,o.toString())})}xo(e,n,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.xo(e,xi(n,r),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(F.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Dd{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(le(n),this.y_=!1):K("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class Md{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{Xe(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(h){const m=J(h);m.M_.add(4),await gr(m),m.N_.set("Unknown"),m.M_.delete(4),await ui(m)}(this))})}),this.N_=new Dd(r,i)}}async function ui(t){if(Xe(t))for(const e of t.x_)await e(!0)}async function gr(t){for(const e of t.x_)await e(!1)}function Fu(t,e){const n=J(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Ss(n)?Rs(n):Rn(n).Xo()&&ws(n,e))}function As(t,e){const n=J(t),r=Rn(n);n.F_.delete(e),r.Xo()&&Lu(n,e),n.F_.size===0&&(r.Xo()?r.n_():Xe(n)&&n.N_.set("Unknown"))}function ws(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Rn(t).P_(e)}function Lu(t,e){t.L_.xe(e),Rn(t).I_(e)}function Rs(t){t.L_=new Of({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Rn(t).start(),t.N_.w_()}function Ss(t){return Xe(t)&&!Rn(t).Zo()&&t.F_.size>0}function Xe(t){return J(t).M_.size===0}function ku(t){t.L_=void 0}async function Nd(t){t.N_.set("Online")}async function Od(t){t.F_.forEach((e,n)=>{ws(t,e)})}async function Fd(t,e){ku(t),Ss(t)?(t.N_.D_(e),Rs(t)):t.N_.set("Unknown")}async function Ld(t,e,n){if(t.N_.set("Online"),e instanceof Au&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.F_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.F_.delete(c),i.L_.removeTarget(c))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yr(t,r)}else if(e instanceof Br?t.L_.Ke(e):e instanceof Iu?t.L_.He(e):t.L_.We(e),!n.isEqual(Y.min()))try{const r=await Mu(t.localStore);n.compareTo(r)>=0&&await function(o,a){const c=o.L_.rt(a);return c.targetChanges.forEach((h,m)=>{if(h.resumeToken.approximateByteSize()>0){const y=o.F_.get(m);y&&o.F_.set(m,y.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,m)=>{const y=o.F_.get(h);if(!y)return;o.F_.set(h,y.withResumeToken(Ot.EMPTY_BYTE_STRING,y.snapshotVersion)),Lu(o,h);const T=new ve(y.target,h,m,y.sequenceNumber);ws(o,T)}),o.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await Yr(t,r)}}async function Yr(t,e,n){if(!fr(e))throw e;t.M_.add(1),await gr(t),t.N_.set("Offline"),n||(n=()=>Mu(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await ui(t)})}function Uu(t,e){return e().catch(n=>Yr(t,n,e))}async function ci(t){const e=J(t),n=Se(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;kd(e);)try{const i=await Ed(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,Ud(e,i)}catch(i){await Yr(e,i)}qu(e)&&Bu(e)}function kd(t){return Xe(t)&&t.v_.length<10}function Ud(t,e){t.v_.push(e);const n=Se(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function qu(t){return Xe(t)&&!Se(t).Zo()&&t.v_.length>0}function Bu(t){Se(t).start()}async function qd(t){Se(t).V_()}async function Bd(t){const e=Se(t);for(const n of t.v_)e.d_(n.mutations)}async function jd(t,e,n){const r=t.v_.shift(),i=_s.from(r,e,n);await Uu(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ci(t)}async function $d(t,e){e&&Se(t).E_&&await async function(r,i){if(function(a){return Df(a)&&a!==F.ABORTED}(i.code)){const o=r.v_.shift();Se(r).t_(),await Uu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await ci(r)}}(t,e),qu(t)&&Bu(t)}async function Ea(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Xe(n);n.M_.add(3),await gr(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await ui(n)}async function Wd(t,e){const n=J(t);e?(n.M_.delete(2),await ui(n)):e||(n.M_.add(2),await gr(n),n.N_.set("Unknown"))}function Rn(t){return t.B_||(t.B_=function(n,r,i){const o=J(n);return o.f_(),new Pd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:Nd.bind(null,t),To:Od.bind(null,t),Ao:Fd.bind(null,t),h_:Ld.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Ss(t)?Rs(t):t.N_.set("Unknown")):(await t.B_.stop(),ku(t))})),t.B_}function Se(t){return t.k_||(t.k_=function(n,r,i){const o=J(n);return o.f_(),new Cd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:qd.bind(null,t),Ao:$d.bind(null,t),R_:Bd.bind(null,t),A_:jd.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await ci(t)):(await t.k_.stop(),t.v_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class bs{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ie,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const a=Date.now()+r,c=new bs(e,n,a,i,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ps(t,e){if(le("AsyncQueue",`${e}: ${t}`),fr(t))return new z(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class fn{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Yn(),this.sortedSet=new lt(this.comparator)}static emptySet(e){return new fn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new fn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ta{constructor(){this.q_=new lt(G.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):X():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class En{constructor(e,n,r,i,o,a,c,h,m){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=m}static fromInitialDocuments(e,n,r,i,o){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new En(e,n,fn.emptySet(n),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ni(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Kd{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class zd{constructor(){this.queries=new wn(e=>au(e),ni),this.onlineState="Unknown",this.z_=new Set}}async function ju(t,e){const n=J(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.W_()&&e.G_()&&(r=2):(o=new Kd,r=e.G_()?0:1);try{switch(r){case 0:o.K_=await n.onListen(i,!0);break;case 1:o.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const c=Ps(a,`Initialization of query '${un(e.query)}' failed`);return void e.onError(c)}n.queries.set(i,o),o.U_.push(e),e.j_(n.onlineState),o.K_&&e.H_(o.K_)&&Cs(n)}async function $u(t,e){const n=J(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const a=o.U_.indexOf(e);a>=0&&(o.U_.splice(a,1),o.U_.length===0?i=e.G_()?0:1:!o.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Gd(t,e){const n=J(t);let r=!1;for(const i of e){const o=i.query,a=n.queries.get(o);if(a){for(const c of a.U_)c.H_(i)&&(r=!0);a.K_=i}}r&&Cs(n)}function Hd(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const o of i.U_)o.onError(n);r.queries.delete(e)}function Cs(t){t.z_.forEach(e=>{e.next()})}var rs,Ia;(Ia=rs||(rs={})).J_="default",Ia.Cache="cache";class Wu{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new En(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=En.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==rs.Cache}}/**
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
 */class Ku{constructor(e){this.key=e}}class zu{constructor(e){this.key=e}}class Qd{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=x(),this.mutatedKeys=x(),this.Ia=uu(e),this.Ta=new fn(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Ta,i=n?n.Ta:this.Ta;let o=n?n.mutatedKeys:this.mutatedKeys,a=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,m=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((y,T)=>{const I=i.get(y),S=ri(this.query,T)?T:null,N=!!I&&this.mutatedKeys.has(I.key),$=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let q=!1;I&&S?I.data.isEqual(S.data)?N!==$&&(r.track({type:3,doc:S}),q=!0):this.Ra(I,S)||(r.track({type:2,doc:S}),q=!0,(h&&this.Ia(S,h)>0||m&&this.Ia(S,m)<0)&&(c=!0)):!I&&S?(r.track({type:0,doc:S}),q=!0):I&&!S&&(r.track({type:1,doc:I}),q=!0,(h||m)&&(c=!0)),q&&(S?(a=a.add(S),o=$?o.add(y):o.delete(y)):(a=a.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const y=this.query.limitType==="F"?a.last():a.first();a=a.delete(y.key),o=o.delete(y.key),r.track({type:1,doc:y})}return{Ta:a,Aa:r,Xi:c,mutatedKeys:o}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((y,T)=>function(S,N){const $=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return $(S)-$(N)}(y.type,T.type)||this.Ia(y.doc,T.doc)),this.Va(r),i=i!=null&&i;const c=n&&!i?this.ma():[],h=this.Pa.size===0&&this.current&&!i?1:0,m=h!==this.ha;return this.ha=h,a.length!==0||m?{snapshot:new En(this.query,e.Ta,o,a,e.mutatedKeys,h===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Ta,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=x(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new zu(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new Ku(r))}),n}pa(e){this.la=e.hs,this.Pa=x();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return En.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Xd{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Yd{constructor(e){this.key=e,this.wa=!1}}class Jd{constructor(e,n,r,i,o,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new wn(c=>au(c),ni),this.Da=new Map,this.Ca=new Set,this.va=new lt(G.comparator),this.Fa=new Map,this.Ma=new Es,this.xa={},this.Oa=new Map,this.Na=vn.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Zd(t,e,n=!0){const r=Ju(t);let i;const o=r.ba.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await Gu(r,e,n,!0),i}async function xd(t,e){const n=Ju(t);await Gu(n,e,!0,!1)}async function Gu(t,e,n,r){const i=await Td(t.localStore,Yt(e)),o=i.targetId,a=n?t.sharedClientState.addLocalQueryTarget(o):"not-current";let c;return r&&(c=await tm(t,e,o,a==="current",i.resumeToken)),t.isPrimaryClient&&n&&Fu(t.remoteStore,i),c}async function tm(t,e,n,r,i){t.Ba=(T,I,S)=>async function($,q,H,U){let V=q.view.da(H);V.Xi&&(V=await _a($.localStore,q.query,!1).then(({documents:d})=>q.view.da(d,V)));const B=U&&U.targetChanges.get(q.targetId),W=U&&U.targetMismatches.get(q.targetId)!=null,O=q.view.applyChanges(V,$.isPrimaryClient,B,W);return wa($,q.targetId,O.fa),O.snapshot}(t,T,I,S);const o=await _a(t.localStore,e,!0),a=new Qd(e,o.hs),c=a.da(o.documents),h=mr.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),m=a.applyChanges(c,t.isPrimaryClient,h);wa(t,n,m.fa);const y=new Xd(e,n,a);return t.ba.set(e,y),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),m.snapshot}async function em(t,e,n){const r=J(t),i=r.ba.get(e),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(a=>!ni(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ns(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&As(r.remoteStore,i.targetId),is(r,i.targetId)}).catch(hr)):(is(r,i.targetId),await ns(r.localStore,i.targetId,!0))}async function nm(t,e){const n=J(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),As(n.remoteStore,r.targetId))}async function rm(t,e,n){const r=lm(t);try{const i=await function(a,c){const h=J(a),m=At.now(),y=c.reduce((S,N)=>S.add(N.key),x());let T,I;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=he(),$=x();return h.os.getEntries(S,y).next(q=>{N=q,N.forEach((H,U)=>{U.isValidDocument()||($=$.add(H))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,N)).next(q=>{T=q;const H=[];for(const U of c){const V=Sf(U,T.get(U.key).overlayedDocument);V!=null&&H.push(new Pe(U.key,V,tu(V.value.mapValue),Ht.exists(!0)))}return h.mutationQueue.addMutationBatch(S,m,H,c)}).next(q=>{I=q;const H=q.applyToLocalDocumentSet(T,$);return h.documentOverlayCache.saveOverlays(S,q.batchId,H)})}).then(()=>({batchId:I.batchId,changes:lu(T)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,h){let m=a.xa[a.currentUser.toKey()];m||(m=new lt(it)),m=m.insert(c,h),a.xa[a.currentUser.toKey()]=m}(r,i.batchId,n),await pr(r,i.changes),await ci(r.remoteStore)}catch(i){const o=Ps(i,"Failed to persist write");n.reject(o)}}async function Hu(t,e){const n=J(t);try{const r=await yd(n.localStore,e);e.targetChanges.forEach((i,o)=>{const a=n.Fa.get(o);a&&(ot(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?ot(a.wa):i.removedDocuments.size>0&&(ot(a.wa),a.wa=!1))}),await pr(n,r,e)}catch(r){await hr(r)}}function Aa(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((o,a)=>{const c=a.view.j_(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const h=J(a);h.onlineState=c;let m=!1;h.queries.forEach((y,T)=>{for(const I of T.U_)I.j_(c)&&(m=!0)}),m&&Cs(h)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function im(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),o=i&&i.key;if(o){let a=new lt(G.comparator);a=a.insert(o,Nt.newNoDocument(o,Y.min()));const c=x().add(o),h=new oi(Y.min(),new Map,new lt(it),a,c);await Hu(r,h),r.va=r.va.remove(o),r.Fa.delete(e),Vs(r)}else await ns(r.localStore,e,!1).then(()=>is(r,e,n)).catch(hr)}async function sm(t,e){const n=J(t),r=e.batch.batchId;try{const i=await _d(n.localStore,e);Xu(n,r,null),Qu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pr(n,i)}catch(i){await hr(i)}}async function om(t,e,n){const r=J(t);try{const i=await function(a,c){const h=J(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let y;return h.mutationQueue.lookupMutationBatch(m,c).next(T=>(ot(T!==null),y=T.keys(),h.mutationQueue.removeMutationBatch(m,T))).next(()=>h.mutationQueue.performConsistencyCheck(m)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(m,y,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y)).next(()=>h.localDocuments.getDocuments(m,y))})}(r.localStore,e);Xu(r,e,n),Qu(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pr(r,i)}catch(i){await hr(i)}}function Qu(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function Xu(t,e,n){const r=J(t);let i=r.xa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function is(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||Yu(t,r)})}function Yu(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(As(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Vs(t))}function wa(t,e,n){for(const r of n)r instanceof Ku?(t.Ma.addReference(r.key,e),am(t,r)):r instanceof zu?(K("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||Yu(t,r.key)):X()}function am(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(K("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Vs(t))}function Vs(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new G(ut.fromString(e)),r=t.Na.next();t.Fa.set(r,new Yd(n)),t.va=t.va.insert(n,r),Fu(t.remoteStore,new ve(Yt(ei(n.path)),r,"TargetPurposeLimboResolution",ls.oe))}}async function pr(t,e,n){const r=J(t),i=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((c,h)=>{a.push(r.Ba(h,e,n).then(m=>{if((m||n)&&r.isPrimaryClient){const y=m&&!m.fromCache;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(m){i.push(m);const y=Is.Ki(h.targetId,m);o.push(y)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(h,m){const y=J(h);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>L.forEach(m,I=>L.forEach(I.qi,S=>y.persistence.referenceDelegate.addReference(T,I.targetId,S)).next(()=>L.forEach(I.Qi,S=>y.persistence.referenceDelegate.removeReference(T,I.targetId,S)))))}catch(T){if(!fr(T))throw T;K("LocalStore","Failed to update sequence numbers: "+T)}for(const T of m){const I=T.targetId;if(!T.fromCache){const S=y.ns.get(I),N=S.snapshotVersion,$=S.withLastLimboFreeSnapshotVersion(N);y.ns=y.ns.insert(I,$)}}}(r.localStore,o))}async function um(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await Du(n.localStore,e);n.currentUser=e,function(o,a){o.Oa.forEach(c=>{c.forEach(h=>{h.reject(new z(F.CANCELLED,a))})}),o.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pr(n,r.us)}}function cm(t,e){const n=J(t),r=n.Fa.get(e);if(r&&r.wa)return x().add(r.key);{let i=x();const o=n.Da.get(e);if(!o)return i;for(const a of o){const c=n.ba.get(a);i=i.unionWith(c.view.Ea)}return i}}function Ju(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cm.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=im.bind(null,e),e.Sa.h_=Gd.bind(null,e.eventManager),e.Sa.ka=Hd.bind(null,e.eventManager),e}function lm(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=om.bind(null,e),e}class Ra{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ai(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return pd(this.persistence,new md,e.initialUser,this.serializer)}createPersistence(e){return new hd(Ts.Hr,this.serializer)}createSharedClientState(e){return new Ad}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Aa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=um.bind(null,this.syncEngine),await Wd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zd}()}createDatastore(e){const n=ai(e.databaseInfo.databaseId),r=function(o){return new bd(o)}(e.databaseInfo);return function(o,a,c,h){return new Vd(o,a,c,h)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,a,c){return new Md(r,i,o,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Aa(this.syncEngine,n,0),function(){return va.D()?new va:new wd}())}createSyncEngine(e,n){return function(i,o,a,c,h,m,y){const T=new Jd(i,o,a,c,h,m);return y&&(T.La=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=J(r);K("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await gr(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class Zu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):le("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class fm{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Mt.UNAUTHENTICATED,this.clientId=Ja.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ie;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ps(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qi(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Du(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sa(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mm(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ea(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ea(e.remoteStore,i)),t._onlineComponents=e}function dm(t){return t.name==="FirebaseError"?t.code===F.FAILED_PRECONDITION||t.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function mm(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await qi(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!dm(n))throw n;dn("Error using user provided cache. Falling back to memory cache: "+n),await qi(t,new Ra)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await qi(t,new Ra);return t._offlineComponents}async function xu(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await Sa(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await Sa(t,new hm))),t._onlineComponents}function gm(t){return xu(t).then(e=>e.syncEngine)}async function ss(t){const e=await xu(t),n=e.eventManager;return n.onListen=Zd.bind(null,e.syncEngine),n.onUnlisten=em.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xd.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nm.bind(null,e.syncEngine),n}function pm(t,e,n={}){const r=new Ie;return t.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,m){const y=new Zu({next:I=>{a.enqueueAndForget(()=>$u(o,T));const S=I.docs.has(c);!S&&I.fromCache?m.reject(new z(F.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&I.fromCache&&h&&h.source==="server"?m.reject(new z(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(I)},error:I=>m.reject(I)}),T=new Wu(ei(c.path),y,{includeMetadataChanges:!0,ra:!0});return ju(o,T)}(await ss(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ba=new Map;/**
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
 */function ec(t,e,n){if(!n)throw new z(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _m(t,e,n,r){if(e===!0&&r===!0)throw new z(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pa(t){if(!G.isDocumentKey(t))throw new z(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ca(t){if(G.isDocumentKey(t))throw new z(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ds(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ds(t);throw new z(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Va{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_m("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tc((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class li{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Va({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Va(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Oh;switch(r.type){case"firstParty":return new Uh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ba.get(n);r&&(K("ComponentProvider","Removing Datastore"),ba.delete(n),r.terminate())}(this),Promise.resolve()}}function ym(t,e,n,r={}){var i;const o=(t=Qt(t,li))._getSettings(),a=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Mt.MOCK_USER;else{c=fl(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new z(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Mt(m)}t._authCredentials=new Fh(new Ya(c,h))}}/**
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
 */class hi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hi(this.firestore,e,this._query)}}class kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ae(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}}class Ae extends hi{constructor(e,n,r){super(e,n,ei(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new G(e))}withConverter(e){return new Ae(this.firestore,e,this._path)}}function vm(t,e,...n){if(t=ce(t),ec("collection","path",e),t instanceof li){const r=ut.fromString(e,...n);return Ca(r),new Ae(t,null,r)}{if(!(t instanceof kt||t instanceof Ae))throw new z(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ut.fromString(e,...n));return Ca(r),new Ae(t.firestore,null,r)}}function _r(t,e,...n){if(t=ce(t),arguments.length===1&&(e=Ja.newId()),ec("doc","path",e),t instanceof li){const r=ut.fromString(e,...n);return Pa(r),new kt(t,null,new G(r))}{if(!(t instanceof kt||t instanceof Ae))throw new z(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ut.fromString(e,...n));return Pa(r),new kt(t.firestore,t instanceof Ae?t.converter:null,new G(r))}}/**
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
 */class Em{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Nu(this,"async_queue_retry"),this.hu=()=>{const n=Ui();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Ui();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Ui();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Ie;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!fr(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw le("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=bs.createAndSchedule(this,e,n,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&X()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Da(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(t,["next","error","complete"])}class He extends li{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Em}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nc(this),this._firestoreClient.terminate()}}function Tm(t,e){const n=typeof t=="object"?t:Eh(),r=typeof t=="string"?t:"(default)",i=ph(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=ll("firestore");o&&ym(i,...o)}return i}function Ms(t){return t._firestoreClient||nc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function nc(t){var e,n,r;const i=t._freezeSettings(),o=function(c,h,m,y){return new Jh(c,h,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,tc(y.experimentalLongPollingOptions),y.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new fm(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tn(Ot.fromBase64String(e))}catch(n){throw new z(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Tn(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class fi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Sn{constructor(e){this._methodName=e}}/**
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
 */class Ns{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return it(this._lat,e._lat)||it(this._long,e._long)}}/**
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
 */const Im=/^__.*__$/;class Am{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pe(e,this.data,this.fieldMask,n,this.fieldTransforms):new dr(e,this.data,n,this.fieldTransforms)}}class rc{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Pe(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ic(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class di{constructor(e,n,r,i,o,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new di(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Jr(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(ic(this.fu)&&Im.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class wm{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ai(e)}Fu(e,n,r,i=!1){return new di({fu:e,methodName:n,vu:r,path:bt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Os(t){const e=t._freezeSettings(),n=ai(t._databaseId);return new wm(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sc(t,e,n,r,i,o={}){const a=t.Fu(o.merge||o.mergeFields?2:0,e,n,i);Us("Data must be an object, but it was:",a,r);const c=ac(r,a);let h,m;if(o.merge)h=new $t(a.fieldMask),m=a.fieldTransforms;else if(o.mergeFields){const y=[];for(const T of o.mergeFields){const I=os(e,T,n);if(!a.contains(I))throw new z(F.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);cc(y,I)||y.push(I)}h=new $t(y),m=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,m=a.fieldTransforms;return new Am(new Ut(c),h,m)}class mi extends Sn{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mi}}function oc(t,e,n){return new di({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Fs extends Sn{_toFieldTransform(e){return new ps(e.path,new lr)}isEqual(e){return e instanceof Fs}}class Ls extends Sn{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=oc(this,e,!0),r=this.Mu.map(o=>bn(o,n)),i=new _n(r);return new ps(e.path,i)}isEqual(e){return e instanceof Ls&&rr(this.Mu,e.Mu)}}class ks extends Sn{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=oc(this,e,!0),r=this.Mu.map(o=>bn(o,n)),i=new yn(r);return new ps(e.path,i)}isEqual(e){return e instanceof ks&&rr(this.Mu,e.Mu)}}function Rm(t,e,n,r){const i=t.Fu(1,e,n);Us("Data must be an object, but it was:",i,r);const o=[],a=Ut.empty();Qe(r,(h,m)=>{const y=qs(e,h,n);m=ce(m);const T=i.Su(y);if(m instanceof mi)o.push(y);else{const I=bn(m,T);I!=null&&(o.push(y),a.set(y,I))}});const c=new $t(o);return new rc(a,c,i.fieldTransforms)}function Sm(t,e,n,r,i,o){const a=t.Fu(1,e,n),c=[os(e,r,n)],h=[i];if(o.length%2!=0)throw new z(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<o.length;I+=2)c.push(os(e,o[I])),h.push(o[I+1]);const m=[],y=Ut.empty();for(let I=c.length-1;I>=0;--I)if(!cc(m,c[I])){const S=c[I];let N=h[I];N=ce(N);const $=a.Su(S);if(N instanceof mi)m.push(S);else{const q=bn(N,$);q!=null&&(m.push(S),y.set(S,q))}}const T=new $t(m);return new rc(y,T,a.fieldTransforms)}function bn(t,e){if(uc(t=ce(t)))return Us("Unsupported field value:",e,t),ac(t,e);if(t instanceof Sn)return function(r,i){if(!ic(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const c of r){let h=bn(c,i.bu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ef(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=At.fromDate(r);return{timestampValue:Xr(i.serializer,o)}}if(r instanceof At){const o=new At(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xr(i.serializer,o)}}if(r instanceof Ns)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Tn)return{bytesValue:wu(i.serializer,r._byteString)};if(r instanceof kt){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:vs(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Ds(r)}`)}(t,e)}function ac(t,e){const n={};return Za(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qe(t,(r,i)=>{const o=bn(i,e.pu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function uc(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof At||t instanceof Ns||t instanceof Tn||t instanceof kt||t instanceof Sn)}function Us(t,e,n){if(!uc(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ds(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function os(t,e,n){if((e=ce(e))instanceof fi)return e._internalPath;if(typeof e=="string")return qs(t,e);throw Jr("Field path arguments must be of type string or ",t,!1,void 0,n)}const bm=new RegExp("[~\\*/\\[\\]]");function qs(t,e,n){if(e.search(bm)>=0)throw Jr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fi(...e.split("."))._internalPath}catch{throw Jr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Jr(t,e,n,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new z(F.INVALID_ARGUMENT,c+t+h)}function cc(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class lc{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Pm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Pm extends lc{data(){return super.data()}}function hc(t,e){return typeof e=="string"?qs(t,e):e instanceof fi?e._internalPath:e._delegate._internalPath}/**
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
 */function Cm(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vm{convertValue(e,n="none"){switch(Ge(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ze(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qe(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(e){return new Ns(vt(e.latitude),vt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=fs(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ar(e));default:return null}}convertTimestamp(e){const n=Re(e);return new At(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ut.fromString(e);ot(Vu(r));const i=new ur(r.get(1),r.get(3)),o=new G(r.popFirst(5));return i.isEqual(n)||le(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */function fc(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Zn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dc extends lc{constructor(e,n,r,i,o,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class jr extends dc{data(e={}){return super.data(e)}}class Dm{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Zn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new jr(this._firestore,this._userDataWriter,r.key,r,new Zn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const h=new jr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Zn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new jr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Zn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let m=-1,y=-1;return c.type!==0&&(m=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),y=a.indexOf(c.doc.key)),{type:Mm(c.type),doc:h,oldIndex:m,newIndex:y}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Mm(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
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
 */function Nm(t){t=Qt(t,kt);const e=Qt(t.firestore,He);return pm(Ms(e),t._key).then(n=>gc(e,t,n))}class mc extends Vm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function Om(t,e,n){t=Qt(t,kt);const r=Qt(t.firestore,He),i=fc(t.converter,e,n);return Bs(r,[sc(Os(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ht.none())])}function Fm(t,e,n,...r){t=Qt(t,kt);const i=Qt(t.firestore,He),o=Os(i);let a;return a=typeof(e=ce(e))=="string"||e instanceof fi?Sm(o,"updateDoc",t._key,e,n,r):Rm(o,"updateDoc",t._key,e),Bs(i,[a.toMutation(t._key,Ht.exists(!0))])}function Lm(t,e){const n=Qt(t.firestore,He),r=_r(t),i=fc(t.converter,e);return Bs(n,[sc(Os(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function km(t,...e){var n,r,i;t=ce(t);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Da(e[a])||(o=e[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Da(e[a])){const T=e[a];e[a]=(n=T.next)===null||n===void 0?void 0:n.bind(T),e[a+1]=(r=T.error)===null||r===void 0?void 0:r.bind(T),e[a+2]=(i=T.complete)===null||i===void 0?void 0:i.bind(T)}let h,m,y;if(t instanceof kt)m=Qt(t.firestore,He),y=ei(t._key.path),h={next:T=>{e[a]&&e[a](gc(m,t,T))},error:e[a+1],complete:e[a+2]};else{const T=Qt(t,hi);m=Qt(T.firestore,He),y=T._query;const I=new mc(m);h={next:S=>{e[a]&&e[a](new Dm(m,I,T,S))},error:e[a+1],complete:e[a+2]},Cm(t._query)}return function(I,S,N,$){const q=new Zu($),H=new Wu(S,q,N);return I.asyncQueue.enqueueAndForget(async()=>ju(await ss(I),H)),()=>{q.$a(),I.asyncQueue.enqueueAndForget(async()=>$u(await ss(I),H))}}(Ms(m),y,c,h)}function Bs(t,e){return function(r,i){const o=new Ie;return r.asyncQueue.enqueueAndForget(async()=>rm(await gm(r),i,o)),o.promise}(Ms(t),e)}function gc(t,e,n){const r=n.docs.get(e._key),i=new mc(t);return new dc(t,i,e._key,r,new Zn(n.hasPendingWrites,n.fromCache),e.converter)}function Um(){return new Fs("serverTimestamp")}function qm(...t){return new Ls("arrayUnion",t)}function Bm(...t){return new ks("arrayRemove",t)}(function(e,n=!0){(function(i){An=i})(vh),Kr(new ir("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new He(new Lh(r.getProvider("auth-internal")),new Bh(r.getProvider("app-check-internal")),function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new z(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ur(m.options.projectId,y)}(a,i),a);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),hn(Jo,"4.6.3",e),hn(Jo,"4.6.3","esm2017")})();var Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ft={};(function(t){var e=Q&&Q.__spreadArray||function(d,f,p){if(p||arguments.length===2)for(var _=0,v=f.length,A;_<v;_++)(A||!(_ in f))&&(A||(A=Array.prototype.slice.call(f,0,_)),A[_]=f[_]);return d.concat(A||Array.prototype.slice.call(f))};Object.defineProperty(t,"__esModule",{value:!0}),t.dual=t.getEndomorphismMonoid=t.not=t.SK=t.hole=t.pipe=t.untupled=t.tupled=t.absurd=t.decrement=t.increment=t.tuple=t.flow=t.flip=t.constVoid=t.constUndefined=t.constNull=t.constFalse=t.constTrue=t.constant=t.unsafeCoerce=t.identity=t.apply=t.getRing=t.getSemiring=t.getMonoid=t.getSemigroup=t.getBooleanAlgebra=void 0;var n=function(d){return function(){return{meet:function(f,p){return function(_){return d.meet(f(_),p(_))}},join:function(f,p){return function(_){return d.join(f(_),p(_))}},zero:function(){return d.zero},one:function(){return d.one},implies:function(f,p){return function(_){return d.implies(f(_),p(_))}},not:function(f){return function(p){return d.not(f(p))}}}}};t.getBooleanAlgebra=n;var r=function(d){return function(){return{concat:function(f,p){return function(_){return d.concat(f(_),p(_))}}}}};t.getSemigroup=r;var i=function(d){var f=(0,t.getSemigroup)(d);return function(){return{concat:f().concat,empty:function(){return d.empty}}}};t.getMonoid=i;var o=function(d){return{add:function(f,p){return function(_){return d.add(f(_),p(_))}},zero:function(){return d.zero},mul:function(f,p){return function(_){return d.mul(f(_),p(_))}},one:function(){return d.one}}};t.getSemiring=o;var a=function(d){var f=(0,t.getSemiring)(d);return{add:f.add,mul:f.mul,one:f.one,zero:f.zero,sub:function(p,_){return function(v){return d.sub(p(v),_(v))}}}};t.getRing=a;var c=function(d){return function(f){return f(d)}};t.apply=c;function h(d){return d}t.identity=h,t.unsafeCoerce=h;function m(d){return function(){return d}}t.constant=m,t.constTrue=m(!0),t.constFalse=m(!1),t.constNull=m(null),t.constUndefined=m(void 0),t.constVoid=t.constUndefined;function y(d){return function(){for(var f=[],p=0;p<arguments.length;p++)f[p]=arguments[p];return f.length>1?d(f[1],f[0]):function(_){return d(_)(f[0])}}}t.flip=y;function T(d,f,p,_,v,A,E,ft,qt){switch(arguments.length){case 1:return d;case 2:return function(){return f(d.apply(this,arguments))};case 3:return function(){return p(f(d.apply(this,arguments)))};case 4:return function(){return _(p(f(d.apply(this,arguments))))};case 5:return function(){return v(_(p(f(d.apply(this,arguments)))))};case 6:return function(){return A(v(_(p(f(d.apply(this,arguments))))))};case 7:return function(){return E(A(v(_(p(f(d.apply(this,arguments)))))))};case 8:return function(){return ft(E(A(v(_(p(f(d.apply(this,arguments))))))))};case 9:return function(){return qt(ft(E(A(v(_(p(f(d.apply(this,arguments)))))))))}}}t.flow=T;function I(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];return d}t.tuple=I;function S(d){return d+1}t.increment=S;function N(d){return d-1}t.decrement=N;function $(d){throw new Error("Called `absurd` function which should be uncallable")}t.absurd=$;function q(d){return function(f){return d.apply(void 0,f)}}t.tupled=q;function H(d){return function(){for(var f=[],p=0;p<arguments.length;p++)f[p]=arguments[p];return d(f)}}t.untupled=H;function U(d,f,p,_,v,A,E,ft,qt){switch(arguments.length){case 1:return d;case 2:return f(d);case 3:return p(f(d));case 4:return _(p(f(d)));case 5:return v(_(p(f(d))));case 6:return A(v(_(p(f(d)))));case 7:return E(A(v(_(p(f(d))))));case 8:return ft(E(A(v(_(p(f(d)))))));case 9:return qt(ft(E(A(v(_(p(f(d))))))));default:{for(var te=arguments[0],Bt=1;Bt<arguments.length;Bt++)te=arguments[Bt](te);return te}}}t.pipe=U,t.hole=$;var V=function(d,f){return f};t.SK=V;function B(d){return function(f){return!d(f)}}t.not=B;var W=function(){return{concat:function(d,f){return T(d,f)},empty:h}};t.getEndomorphismMonoid=W;var O=function(d,f){var p=typeof d=="number"?function(_){return _.length>=d}:d;return function(){var _=Array.from(arguments);return p(arguments)?f.apply(this,_):function(v){return f.apply(void 0,e([v],_,!1))}}};t.dual=O})(Ft);const $m=jm(Ft),Wm=tl({__proto__:null,default:$m},[Ft]);var pc={},_c={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.eqDate=t.eqNumber=t.eqString=t.eqBoolean=t.eq=t.strictEqual=t.getStructEq=t.getTupleEq=t.Contravariant=t.getMonoid=t.getSemigroup=t.eqStrict=t.URI=t.contramap=t.tuple=t.struct=t.fromEquals=void 0;var e=Ft,n=function(y){return{equals:function(T,I){return T===I||y(T,I)}}};t.fromEquals=n;var r=function(y){return(0,t.fromEquals)(function(T,I){for(var S in y)if(!y[S].equals(T[S],I[S]))return!1;return!0})};t.struct=r;var i=function(){for(var y=[],T=0;T<arguments.length;T++)y[T]=arguments[T];return(0,t.fromEquals)(function(I,S){return y.every(function(N,$){return N.equals(I[$],S[$])})})};t.tuple=i;var o=function(y,T){return(0,e.pipe)(y,(0,t.contramap)(T))},a=function(y){return function(T){return(0,t.fromEquals)(function(I,S){return T.equals(y(I),y(S))})}};t.contramap=a,t.URI="Eq",t.eqStrict={equals:function(y,T){return y===T}};var c={equals:function(){return!0}},h=function(){return{concat:function(y,T){return(0,t.fromEquals)(function(I,S){return y.equals(I,S)&&T.equals(I,S)})}}};t.getSemigroup=h;var m=function(){return{concat:(0,t.getSemigroup)().concat,empty:c}};t.getMonoid=m,t.Contravariant={URI:t.URI,contramap:o},t.getTupleEq=t.tuple,t.getStructEq=t.struct,t.strictEqual=t.eqStrict.equals,t.eq=t.Contravariant,t.eqBoolean=t.eqStrict,t.eqString=t.eqStrict,t.eqNumber=t.eqStrict,t.eqDate={equals:function(y,T){return y.valueOf()===T.valueOf()}}})(_c);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ordDate=t.ordNumber=t.ordString=t.ordBoolean=t.ord=t.getDualOrd=t.getTupleOrd=t.between=t.clamp=t.max=t.min=t.geq=t.leq=t.gt=t.lt=t.equals=t.trivial=t.Contravariant=t.getMonoid=t.getSemigroup=t.URI=t.contramap=t.reverse=t.tuple=t.fromCompare=t.equalsDefault=void 0;var e=_c,n=Ft,r=function(O){return function(d,f){return d===f||O(d,f)===0}};t.equalsDefault=r;var i=function(O){return{equals:(0,t.equalsDefault)(O),compare:function(d,f){return d===f?0:O(d,f)}}};t.fromCompare=i;var o=function(){for(var O=[],d=0;d<arguments.length;d++)O[d]=arguments[d];return(0,t.fromCompare)(function(f,p){for(var _=0;_<O.length-1;_++){var v=O[_].compare(f[_],p[_]);if(v!==0)return v}return O[_].compare(f[_],p[_])})};t.tuple=o;var a=function(O){return(0,t.fromCompare)(function(d,f){return O.compare(f,d)})};t.reverse=a;var c=function(O,d){return(0,n.pipe)(O,(0,t.contramap)(d))},h=function(O){return function(d){return(0,t.fromCompare)(function(f,p){return d.compare(O(f),O(p))})}};t.contramap=h,t.URI="Ord";var m=function(){return{concat:function(O,d){return(0,t.fromCompare)(function(f,p){var _=O.compare(f,p);return _!==0?_:d.compare(f,p)})}}};t.getSemigroup=m;var y=function(){return{concat:(0,t.getSemigroup)().concat,empty:(0,t.fromCompare)(function(){return 0})}};t.getMonoid=y,t.Contravariant={URI:t.URI,contramap:c},t.trivial={equals:n.constTrue,compare:(0,n.constant)(0)};var T=function(O){return function(d){return function(f){return f===d||O.compare(f,d)===0}}};t.equals=T;var I=function(O){return function(d,f){return O.compare(d,f)===-1}};t.lt=I;var S=function(O){return function(d,f){return O.compare(d,f)===1}};t.gt=S;var N=function(O){return function(d,f){return O.compare(d,f)!==1}};t.leq=N;var $=function(O){return function(d,f){return O.compare(d,f)!==-1}};t.geq=$;var q=function(O){return function(d,f){return d===f||O.compare(d,f)<1?d:f}};t.min=q;var H=function(O){return function(d,f){return d===f||O.compare(d,f)>-1?d:f}};t.max=H;var U=function(O){var d=(0,t.min)(O),f=(0,t.max)(O);return function(p,_){return function(v){return f(d(v,_),p)}}};t.clamp=U;var V=function(O){var d=(0,t.lt)(O),f=(0,t.gt)(O);return function(p,_){return function(v){return!(d(v,p)||f(v,_))}}};t.between=V,t.getTupleOrd=t.tuple,t.getDualOrd=t.reverse,t.ord=t.Contravariant;function B(O,d){return O<d?-1:O>d?1:0}var W={equals:e.eqStrict.equals,compare:B};t.ordBoolean=W,t.ordString=W,t.ordNumber=W,t.ordDate=(0,n.pipe)(t.ordNumber,(0,t.contramap)(function(O){return O.valueOf()}))})(pc);var js={},be={},Tt={},Ce={};(function(t){var e=Q&&Q.__spreadArray||function(d,f,p){if(p||arguments.length===2)for(var _=0,v=f.length,A;_<v;_++)(A||!(_ in f))&&(A||(A=Array.prototype.slice.call(f,0,_)),A[_]=f[_]);return d.concat(A||Array.prototype.slice.call(f))};Object.defineProperty(t,"__esModule",{value:!0}),t.flatMapReader=t.flatMapTask=t.flatMapIO=t.flatMapEither=t.flatMapOption=t.flatMapNullable=t.liftOption=t.liftNullable=t.fromReadonlyNonEmptyArray=t.has=t.emptyRecord=t.emptyReadonlyArray=t.tail=t.head=t.isNonEmpty=t.singleton=t.right=t.left=t.isRight=t.isLeft=t.some=t.none=t.isSome=t.isNone=void 0;var n=Ft,r=function(d){return d._tag==="None"};t.isNone=r;var i=function(d){return d._tag==="Some"};t.isSome=i,t.none={_tag:"None"};var o=function(d){return{_tag:"Some",value:d}};t.some=o;var a=function(d){return d._tag==="Left"};t.isLeft=a;var c=function(d){return d._tag==="Right"};t.isRight=c;var h=function(d){return{_tag:"Left",left:d}};t.left=h;var m=function(d){return{_tag:"Right",right:d}};t.right=m;var y=function(d){return[d]};t.singleton=y;var T=function(d){return d.length>0};t.isNonEmpty=T;var I=function(d){return d[0]};t.head=I;var S=function(d){return d.slice(1)};t.tail=S,t.emptyReadonlyArray=[],t.emptyRecord={},t.has=Object.prototype.hasOwnProperty;var N=function(d){return e([d[0]],d.slice(1),!0)};t.fromReadonlyNonEmptyArray=N;var $=function(d){return function(f,p){return function(){for(var _=[],v=0;v<arguments.length;v++)_[v]=arguments[v];var A=f.apply(void 0,_);return d.fromEither(A==null?(0,t.left)(p.apply(void 0,_)):(0,t.right)(A))}}};t.liftNullable=$;var q=function(d){return function(f,p){return function(){for(var _=[],v=0;v<arguments.length;v++)_[v]=arguments[v];var A=f.apply(void 0,_);return d.fromEither((0,t.isNone)(A)?(0,t.left)(p.apply(void 0,_)):(0,t.right)(A.value))}}};t.liftOption=q;var H=function(d,f){return(0,n.dual)(3,function(p,_,v){return f.flatMap(p,(0,t.liftNullable)(d)(_,v))})};t.flatMapNullable=H;var U=function(d,f){return(0,n.dual)(3,function(p,_,v){return f.flatMap(p,(0,t.liftOption)(d)(_,v))})};t.flatMapOption=U;var V=function(d,f){return(0,n.dual)(2,function(p,_){return f.flatMap(p,function(v){return d.fromEither(_(v))})})};t.flatMapEither=V;var B=function(d,f){return(0,n.dual)(2,function(p,_){return f.flatMap(p,function(v){return d.fromIO(_(v))})})};t.flatMapIO=B;var W=function(d,f){return(0,n.dual)(2,function(p,_){return f.flatMap(p,function(v){return d.fromTask(_(v))})})};t.flatMapTask=W;var O=function(d,f){return(0,n.dual)(2,function(p,_){return f.flatMap(p,function(v){return d.fromReader(_(v))})})};t.flatMapReader=O})(Ce);var Km=Q&&Q.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),zm=Q&&Q.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),Gm=Q&&Q.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&Km(e,t,n);return zm(e,t),e};Object.defineProperty(Tt,"__esModule",{value:!0});var gi=Tt.sequenceS=Ws=Tt.sequenceT=Tt.getApplySemigroup=Tt.apS=Tt.apSecond=Tt.apFirst=Tt.ap=void 0,Hm=Ft,Qm=Gm(Ce);function Xm(t,e){return function(n){return function(r){return t.ap(t.map(r,function(i){return function(o){return e.ap(i,o)}}),n)}}}Tt.ap=Xm;function Ym(t){return function(e){return function(n){return t.ap(t.map(n,function(r){return function(){return r}}),e)}}}Tt.apFirst=Ym;function Jm(t){return function(e){return function(n){return t.ap(t.map(n,function(){return function(r){return r}}),e)}}}Tt.apSecond=Jm;function Zm(t){return function(e,n){return function(r){return t.ap(t.map(r,function(i){return function(o){var a;return Object.assign({},i,(a={},a[e]=o,a))}}),n)}}}Tt.apS=Zm;function xm(t){return function(e){return{concat:function(n,r){return t.ap(t.map(n,function(i){return function(o){return e.concat(i,o)}}),r)}}}}Tt.getApplySemigroup=xm;function $s(t,e,n){return function(r){for(var i=Array(n.length+1),o=0;o<n.length;o++)i[o]=n[o];return i[n.length]=r,e===0?t.apply(null,i):$s(t,e-1,i)}}var Bi={1:function(t){return[t]},2:function(t){return function(e){return[t,e]}},3:function(t){return function(e){return function(n){return[t,e,n]}}},4:function(t){return function(e){return function(n){return function(r){return[t,e,n,r]}}}},5:function(t){return function(e){return function(n){return function(r){return function(i){return[t,e,n,r,i]}}}}}};function tg(t){return Qm.has.call(Bi,t)||(Bi[t]=$s(Hm.tuple,t-1,[])),Bi[t]}function eg(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var r=e.length,i=tg(r),o=t.map(e[0],i),a=1;a<r;a++)o=t.ap(o,e[a]);return o}}var Ws=Tt.sequenceT=eg;function ng(t){var e=t.length;switch(e){case 1:return function(n){var r;return r={},r[t[0]]=n,r};case 2:return function(n){return function(r){var i;return i={},i[t[0]]=n,i[t[1]]=r,i}};case 3:return function(n){return function(r){return function(i){var o;return o={},o[t[0]]=n,o[t[1]]=r,o[t[2]]=i,o}}};case 4:return function(n){return function(r){return function(i){return function(o){var a;return a={},a[t[0]]=n,a[t[1]]=r,a[t[2]]=i,a[t[3]]=o,a}}}};case 5:return function(n){return function(r){return function(i){return function(o){return function(a){var c;return c={},c[t[0]]=n,c[t[1]]=r,c[t[2]]=i,c[t[3]]=o,c[t[4]]=a,c}}}}};default:return $s(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];for(var i={},o=0;o<e;o++)i[t[o]]=n[o];return i},e-1,[])}}function rg(t){return function(e){for(var n=Object.keys(e),r=n.length,i=ng(n),o=t.map(e[n[0]],i),a=1;a<r;a++)o=t.ap(o,e[n[a]]);return o}}gi=Tt.sequenceS=rg;var Et={};Object.defineProperty(Et,"__esModule",{value:!0});Et.asUnit=Et.as=Et.getFunctorComposition=Et.let=Et.bindTo=Et.flap=Et.map=void 0;var ig=Ft;function yc(t,e){return function(n){return function(r){return t.map(r,function(i){return e.map(i,n)})}}}Et.map=yc;function sg(t){return function(e){return function(n){return t.map(n,function(r){return r(e)})}}}Et.flap=sg;function og(t){return function(e){return function(n){return t.map(n,function(r){var i;return i={},i[e]=r,i})}}}Et.bindTo=og;function ag(t){return function(e,n){return function(r){return t.map(r,function(i){var o;return Object.assign({},i,(o={},o[e]=n(i),o))})}}}Et.let=ag;function ug(t,e){var n=yc(t,e);return{map:function(r,i){return(0,ig.pipe)(r,n(i))}}}Et.getFunctorComposition=ug;function vc(t){return function(e,n){return t.map(e,function(){return n})}}Et.as=vc;function cg(t){var e=vc(t);return function(n){return e(n,void 0)}}Et.asUnit=cg;Object.defineProperty(be,"__esModule",{value:!0});be.getApplicativeComposition=be.getApplicativeMonoid=void 0;var Ec=Tt,lg=Ft,hg=Et;function fg(t){var e=(0,Ec.getApplySemigroup)(t);return function(n){return{concat:e(n).concat,empty:t.of(n.empty)}}}be.getApplicativeMonoid=fg;function dg(t,e){var n=(0,hg.getFunctorComposition)(t,e).map,r=(0,Ec.ap)(t,e);return{map:n,of:function(i){return t.of(e.of(i))},ap:function(i,o){return(0,lg.pipe)(i,r(o))}}}be.getApplicativeComposition=dg;var Xt={};Object.defineProperty(Xt,"__esModule",{value:!0});Xt.bind=Xt.tap=Xt.chainFirst=void 0;function mg(t){var e=Tc(t);return function(n){return function(r){return e(r,n)}}}Xt.chainFirst=mg;function Tc(t){return function(e,n){return t.chain(e,function(r){return t.map(n(r),function(){return r})})}}Xt.tap=Tc;function gg(t){return function(e,n){return function(r){return t.chain(r,function(i){return t.map(n(i),function(o){var a;return Object.assign({},i,(a={},a[e]=o,a))})})}}}Xt.bind=gg;var pi={};Object.defineProperty(pi,"__esModule",{value:!0});pi.tailRec=void 0;var pg=function(t,e){for(var n=e(t);n._tag==="Left";)n=e(n.left);return n.right};pi.tailRec=pg;var mt={},_g=Q&&Q.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),yg=Q&&Q.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),vg=Q&&Q.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&_g(e,t,n);return yg(e,t),e};Object.defineProperty(mt,"__esModule",{value:!0});mt.tapEither=mt.filterOrElse=mt.chainFirstEitherK=mt.chainEitherK=mt.fromEitherK=mt.chainOptionK=mt.fromOptionK=mt.fromPredicate=mt.fromOption=void 0;var Eg=Xt,Ic=Ft,$e=vg(Ce);function Ac(t){return function(e){return function(n){return t.fromEither($e.isNone(n)?$e.left(e()):$e.right(n.value))}}}mt.fromOption=Ac;function Tg(t){return function(e,n){return function(r){return t.fromEither(e(r)?$e.right(r):$e.left(n(r)))}}}mt.fromPredicate=Tg;function wc(t){var e=Ac(t);return function(n){var r=e(n);return function(i){return(0,Ic.flow)(i,r)}}}mt.fromOptionK=wc;function Ig(t,e){var n=wc(t);return function(r){var i=n(r);return function(o){return function(a){return e.chain(a,i(o))}}}}mt.chainOptionK=Ig;function Ks(t){return function(e){return(0,Ic.flow)(e,t.fromEither)}}mt.fromEitherK=Ks;function Ag(t,e){var n=Ks(t);return function(r){return function(i){return e.chain(i,n(r))}}}mt.chainEitherK=Ag;function wg(t,e){var n=Rc(t,e);return function(r){return function(i){return n(i,r)}}}mt.chainFirstEitherK=wg;function Rg(t,e){return function(n,r){return function(i){return e.chain(i,function(o){return t.fromEither(n(o)?$e.right(o):$e.left(r(o)))})}}}mt.filterOrElse=Rg;function Rc(t,e){var n=Ks(t),r=(0,Eg.tap)(e);return function(i,o){return r(i,n(o))}}mt.tapEither=Rc;var zs={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.right=t.left=t.flap=t.Functor=t.Bifunctor=t.URI=t.bimap=t.mapLeft=t.map=t.separated=void 0;var e=Ft,n=Et,r=function(I,S){return{left:I,right:S}};t.separated=r;var i=function(I,S){return(0,e.pipe)(I,(0,t.map)(S))},o=function(I,S){return(0,e.pipe)(I,(0,t.mapLeft)(S))},a=function(I,S,N){return(0,e.pipe)(I,(0,t.bimap)(S,N))},c=function(I){return function(S){return(0,t.separated)((0,t.left)(S),I((0,t.right)(S)))}};t.map=c;var h=function(I){return function(S){return(0,t.separated)(I((0,t.left)(S)),(0,t.right)(S))}};t.mapLeft=h;var m=function(I,S){return function(N){return(0,t.separated)(I((0,t.left)(N)),S((0,t.right)(N)))}};t.bimap=m,t.URI="Separated",t.Bifunctor={URI:t.URI,mapLeft:o,bimap:a},t.Functor={URI:t.URI,map:i},t.flap=(0,n.flap)(t.Functor);var y=function(I){return I.left};t.left=y;var T=function(I){return I.right};t.right=T})(zs);var ue={},Sg=Q&&Q.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),bg=Q&&Q.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),Pg=Q&&Q.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&Sg(e,t,n);return bg(e,t),e};Object.defineProperty(ue,"__esModule",{value:!0});ue.filterE=ue.witherDefault=ue.wiltDefault=void 0;var Ma=Pg(Ce);function Cg(t,e){return function(n){var r=t.traverse(n);return function(i,o){return n.map(r(i,o),e.separate)}}}ue.wiltDefault=Cg;function Vg(t,e){return function(n){var r=t.traverse(n);return function(i,o){return n.map(r(i,o),e.compact)}}}ue.witherDefault=Vg;function Dg(t){return function(e){var n=t.wither(e);return function(r){return function(i){return n(i,function(o){return e.map(r(o),function(a){return a?Ma.some(o):Ma.none})})}}}}ue.filterE=Dg;(function(t){var e=Q&&Q.__createBinding||(Object.create?function(P,R,M,Z){Z===void 0&&(Z=M);var dt=Object.getOwnPropertyDescriptor(R,M);(!dt||("get"in dt?!R.__esModule:dt.writable||dt.configurable))&&(dt={enumerable:!0,get:function(){return R[M]}}),Object.defineProperty(P,Z,dt)}:function(P,R,M,Z){Z===void 0&&(Z=M),P[Z]=R[M]}),n=Q&&Q.__setModuleDefault||(Object.create?function(P,R){Object.defineProperty(P,"default",{enumerable:!0,value:R})}:function(P,R){P.default=R}),r=Q&&Q.__importStar||function(P){if(P&&P.__esModule)return P;var R={};if(P!=null)for(var M in P)M!=="default"&&Object.prototype.hasOwnProperty.call(P,M)&&e(R,P,M);return n(R,P),R};Object.defineProperty(t,"__esModule",{value:!0}),t.match=t.foldW=t.matchW=t.isRight=t.isLeft=t.fromOption=t.fromPredicate=t.FromEither=t.MonadThrow=t.throwError=t.ChainRec=t.Extend=t.extend=t.Alt=t.alt=t.altW=t.Bifunctor=t.mapLeft=t.bimap=t.Traversable=t.sequence=t.traverse=t.Foldable=t.reduceRight=t.foldMap=t.reduce=t.Monad=t.Chain=t.Applicative=t.Apply=t.ap=t.apW=t.Pointed=t.of=t.asUnit=t.as=t.Functor=t.map=t.getAltValidation=t.getApplicativeValidation=t.getWitherable=t.getFilterable=t.getCompactable=t.getSemigroup=t.getEq=t.getShow=t.URI=t.flatMap=t.right=t.left=void 0,t.chainFirstW=t.chainFirst=t.chain=t.chainW=t.sequenceArray=t.traverseArray=t.traverseArrayWithIndex=t.traverseReadonlyArrayWithIndex=t.traverseReadonlyNonEmptyArrayWithIndex=t.ApT=t.apSW=t.apS=t.bindW=t.bind=t.let=t.bindTo=t.Do=t.exists=t.elem=t.toError=t.toUnion=t.chainNullableK=t.fromNullableK=t.tryCatchK=t.tryCatch=t.fromNullable=t.orElse=t.orElseW=t.swap=t.filterOrElseW=t.filterOrElse=t.flatMapOption=t.flatMapNullable=t.liftOption=t.liftNullable=t.chainOptionKW=t.chainOptionK=t.fromOptionK=t.duplicate=t.flatten=t.flattenW=t.tap=t.apSecondW=t.apSecond=t.apFirstW=t.apFirst=t.flap=t.getOrElse=t.getOrElseW=t.fold=void 0,t.getValidation=t.getValidationMonoid=t.getValidationSemigroup=t.getApplyMonoid=t.getApplySemigroup=t.either=t.stringifyJSON=t.parseJSON=void 0;var i=be,o=Tt,a=r(Xt),c=pi,h=mt,m=Ft,y=Et,T=r(Ce),I=zs,S=ue;t.left=T.left,t.right=T.right,t.flatMap=(0,m.dual)(2,function(P,R){return(0,t.isLeft)(P)?P:R(P.right)});var N=function(P,R){return(0,m.pipe)(P,(0,t.map)(R))},$=function(P,R){return(0,m.pipe)(P,(0,t.ap)(R))},q=function(P,R,M){return(0,m.pipe)(P,(0,t.reduce)(R,M))},H=function(P){return function(R,M){var Z=(0,t.foldMap)(P);return(0,m.pipe)(R,Z(M))}},U=function(P,R,M){return(0,m.pipe)(P,(0,t.reduceRight)(R,M))},V=function(P){var R=(0,t.traverse)(P);return function(M,Z){return(0,m.pipe)(M,R(Z))}},B=function(P,R,M){return(0,m.pipe)(P,(0,t.bimap)(R,M))},W=function(P,R){return(0,m.pipe)(P,(0,t.mapLeft)(R))},O=function(P,R){return(0,m.pipe)(P,(0,t.alt)(R))},d=function(P,R){return(0,m.pipe)(P,(0,t.extend)(R))},f=function(P,R){return(0,c.tailRec)(R(P),function(M){return(0,t.isLeft)(M)?(0,t.right)((0,t.left)(M.left)):(0,t.isLeft)(M.right)?(0,t.left)(R(M.right.left)):(0,t.right)((0,t.right)(M.right.right))})};t.URI="Either";var p=function(P,R){return{show:function(M){return(0,t.isLeft)(M)?"left(".concat(P.show(M.left),")"):"right(".concat(R.show(M.right),")")}}};t.getShow=p;var _=function(P,R){return{equals:function(M,Z){return M===Z||((0,t.isLeft)(M)?(0,t.isLeft)(Z)&&P.equals(M.left,Z.left):(0,t.isRight)(Z)&&R.equals(M.right,Z.right))}}};t.getEq=_;var v=function(P){return{concat:function(R,M){return(0,t.isLeft)(M)?R:(0,t.isLeft)(R)?M:(0,t.right)(P.concat(R.right,M.right))}}};t.getSemigroup=v;var A=function(P){var R=(0,t.left)(P.empty);return{URI:t.URI,_E:void 0,compact:function(M){return(0,t.isLeft)(M)?M:M.right._tag==="None"?R:(0,t.right)(M.right.value)},separate:function(M){return(0,t.isLeft)(M)?(0,I.separated)(M,M):(0,t.isLeft)(M.right)?(0,I.separated)((0,t.right)(M.right.left),R):(0,I.separated)(R,(0,t.right)(M.right.right))}}};t.getCompactable=A;var E=function(P){var R=(0,t.left)(P.empty),M=(0,t.getCompactable)(P),Z=M.compact,dt=M.separate,b=function(k,rt){return(0,t.isLeft)(k)||rt(k.right)?k:R},D=function(k,rt){return(0,t.isLeft)(k)?(0,I.separated)(k,k):rt(k.right)?(0,I.separated)(R,(0,t.right)(k.right)):(0,I.separated)((0,t.right)(k.right),R)};return{URI:t.URI,_E:void 0,map:N,compact:Z,separate:dt,filter:b,filterMap:function(k,rt){if((0,t.isLeft)(k))return k;var ct=rt(k.right);return ct._tag==="None"?R:(0,t.right)(ct.value)},partition:D,partitionMap:function(k,rt){if((0,t.isLeft)(k))return(0,I.separated)(k,k);var ct=rt(k.right);return(0,t.isLeft)(ct)?(0,I.separated)((0,t.right)(ct.left),R):(0,I.separated)(R,(0,t.right)(ct.right))}}};t.getFilterable=E;var ft=function(P){var R=(0,t.getFilterable)(P),M=(0,t.getCompactable)(P);return{URI:t.URI,_E:void 0,map:N,compact:R.compact,separate:R.separate,filter:R.filter,filterMap:R.filterMap,partition:R.partition,partitionMap:R.partitionMap,traverse:V,sequence:t.sequence,reduce:q,foldMap:H,reduceRight:U,wither:(0,S.witherDefault)(t.Traversable,M),wilt:(0,S.wiltDefault)(t.Traversable,M)}};t.getWitherable=ft;var qt=function(P){return{URI:t.URI,_E:void 0,map:N,ap:function(R,M){return(0,t.isLeft)(R)?(0,t.isLeft)(M)?(0,t.left)(P.concat(R.left,M.left)):R:(0,t.isLeft)(M)?M:(0,t.right)(R.right(M.right))},of:t.of}};t.getApplicativeValidation=qt;var te=function(P){return{URI:t.URI,_E:void 0,map:N,alt:function(R,M){if((0,t.isRight)(R))return R;var Z=M();return(0,t.isLeft)(Z)?(0,t.left)(P.concat(R.left,Z.left)):Z}}};t.getAltValidation=te;var Bt=function(P){return function(R){return(0,t.isLeft)(R)?R:(0,t.right)(P(R.right))}};t.map=Bt,t.Functor={URI:t.URI,map:N},t.as=(0,m.dual)(2,(0,y.as)(t.Functor)),t.asUnit=(0,y.asUnit)(t.Functor),t.of=t.right,t.Pointed={URI:t.URI,of:t.of};var ee=function(P){return function(R){return(0,t.isLeft)(R)?R:(0,t.isLeft)(P)?P:(0,t.right)(R.right(P.right))}};t.apW=ee,t.ap=t.apW,t.Apply={URI:t.URI,map:N,ap:$},t.Applicative={URI:t.URI,map:N,ap:$,of:t.of},t.Chain={URI:t.URI,map:N,ap:$,chain:t.flatMap},t.Monad={URI:t.URI,map:N,ap:$,of:t.of,chain:t.flatMap};var Ve=function(P,R){return function(M){return(0,t.isLeft)(M)?P:R(P,M.right)}};t.reduce=Ve;var Ye=function(P){return function(R){return function(M){return(0,t.isLeft)(M)?P.empty:R(M.right)}}};t.foldMap=Ye;var Pn=function(P,R){return function(M){return(0,t.isLeft)(M)?P:R(M.right,P)}};t.reduceRight=Pn,t.Foldable={URI:t.URI,reduce:q,foldMap:H,reduceRight:U};var Wt=function(P){return function(R){return function(M){return(0,t.isLeft)(M)?P.of((0,t.left)(M.left)):P.map(R(M.right),t.right)}}};t.traverse=Wt;var gt=function(P){return function(R){return(0,t.isLeft)(R)?P.of((0,t.left)(R.left)):P.map(R.right,t.right)}};t.sequence=gt,t.Traversable={URI:t.URI,map:N,reduce:q,foldMap:H,reduceRight:U,traverse:V,sequence:t.sequence};var Cn=function(P,R){return function(M){return(0,t.isLeft)(M)?(0,t.left)(P(M.left)):(0,t.right)(R(M.right))}};t.bimap=Cn;var ne=function(P){return function(R){return(0,t.isLeft)(R)?(0,t.left)(P(R.left)):R}};t.mapLeft=ne,t.Bifunctor={URI:t.URI,bimap:B,mapLeft:W};var Vn=function(P){return function(R){return(0,t.isLeft)(R)?P():R}};t.altW=Vn,t.alt=t.altW,t.Alt={URI:t.URI,map:N,alt:O};var fe=function(P){return function(R){return(0,t.isLeft)(R)?R:(0,t.right)(P(R))}};t.extend=fe,t.Extend={URI:t.URI,map:N,extend:d},t.ChainRec={URI:t.URI,map:N,ap:$,chain:t.flatMap,chainRec:f},t.throwError=t.left,t.MonadThrow={URI:t.URI,map:N,ap:$,of:t.of,chain:t.flatMap,throwError:t.throwError},t.FromEither={URI:t.URI,fromEither:m.identity},t.fromPredicate=(0,h.fromPredicate)(t.FromEither),t.fromOption=(0,h.fromOption)(t.FromEither),t.isLeft=T.isLeft,t.isRight=T.isRight;var Dn=function(P,R){return function(M){return(0,t.isLeft)(M)?P(M.left):R(M.right)}};t.matchW=Dn,t.foldW=t.matchW,t.match=t.matchW,t.fold=t.match;var Mn=function(P){return function(R){return(0,t.isLeft)(R)?P(R.left):R.right}};t.getOrElseW=Mn,t.getOrElse=t.getOrElseW,t.flap=(0,y.flap)(t.Functor),t.apFirst=(0,o.apFirst)(t.Apply),t.apFirstW=t.apFirst,t.apSecond=(0,o.apSecond)(t.Apply),t.apSecondW=t.apSecond,t.tap=(0,m.dual)(2,a.tap(t.Chain)),t.flattenW=(0,t.flatMap)(m.identity),t.flatten=t.flattenW,t.duplicate=(0,t.extend)(m.identity),t.fromOptionK=(0,h.fromOptionK)(t.FromEither),t.chainOptionK=(0,h.chainOptionK)(t.FromEither,t.Chain),t.chainOptionKW=t.chainOptionK;var zt={fromEither:t.FromEither.fromEither};t.liftNullable=T.liftNullable(zt),t.liftOption=T.liftOption(zt);var re={flatMap:t.flatMap};t.flatMapNullable=T.flatMapNullable(zt,re),t.flatMapOption=T.flatMapOption(zt,re),t.filterOrElse=(0,h.filterOrElse)(t.FromEither,t.Chain),t.filterOrElseW=t.filterOrElse;var De=function(P){return(0,t.isLeft)(P)?(0,t.right)(P.left):(0,t.left)(P.right)};t.swap=De;var Me=function(P){return function(R){return(0,t.isLeft)(R)?P(R.left):R}};t.orElseW=Me,t.orElse=t.orElseW;var ie=function(P){return function(R){return R==null?(0,t.left)(P):(0,t.right)(R)}};t.fromNullable=ie;var se=function(P,R){try{return(0,t.right)(P())}catch(M){return(0,t.left)(R(M))}};t.tryCatch=se;var Je=function(P,R){return function(){for(var M=[],Z=0;Z<arguments.length;Z++)M[Z]=arguments[Z];return(0,t.tryCatch)(function(){return P.apply(void 0,M)},R)}};t.tryCatchK=Je;var Nn=function(P){var R=(0,t.fromNullable)(P);return function(M){return(0,m.flow)(M,R)}};t.fromNullableK=Nn;var On=function(P){var R=(0,t.fromNullableK)(P);return function(M){return(0,t.flatMap)(R(M))}};t.chainNullableK=On,t.toUnion=(0,t.foldW)(m.identity,m.identity);function Ze(P){try{return P instanceof Error?P:new Error(String(P))}catch{return new Error}}t.toError=Ze;function de(P){return function(R,M){if(M===void 0){var Z=de(P);return function(dt){return Z(R,dt)}}return(0,t.isLeft)(M)?!1:P.equals(R,M.right)}}t.elem=de;var xe=function(P){return function(R){return(0,t.isLeft)(R)?!1:P(R.right)}};t.exists=xe,t.Do=(0,t.of)(T.emptyRecord),t.bindTo=(0,y.bindTo)(t.Functor);var Fn=(0,y.let)(t.Functor);t.let=Fn,t.bind=a.bind(t.Chain),t.bindW=t.bind,t.apS=(0,o.apS)(t.Apply),t.apSW=t.apS,t.ApT=(0,t.of)(T.emptyReadonlyArray);var Ne=function(P){return function(R){var M=P(0,T.head(R));if((0,t.isLeft)(M))return M;for(var Z=[M.right],dt=1;dt<R.length;dt++){var b=P(dt,R[dt]);if((0,t.isLeft)(b))return b;Z.push(b.right)}return(0,t.right)(Z)}};t.traverseReadonlyNonEmptyArrayWithIndex=Ne;var Oe=function(P){var R=(0,t.traverseReadonlyNonEmptyArrayWithIndex)(P);return function(M){return T.isNonEmpty(M)?R(M):t.ApT}};t.traverseReadonlyArrayWithIndex=Oe,t.traverseArrayWithIndex=t.traverseReadonlyArrayWithIndex;var tn=function(P){return(0,t.traverseReadonlyArrayWithIndex)(function(R,M){return P(M)})};t.traverseArray=tn,t.sequenceArray=(0,t.traverseArray)(m.identity),t.chainW=t.flatMap,t.chain=t.flatMap,t.chainFirst=t.tap,t.chainFirstW=t.tap;function pt(P,R){return(0,t.tryCatch)(function(){return JSON.parse(P)},R)}t.parseJSON=pt;var _t=function(P,R){return(0,t.tryCatch)(function(){var M=JSON.stringify(P);if(typeof M!="string")throw new Error("Converting unsupported structure to JSON");return M},R)};t.stringifyJSON=_t,t.either={URI:t.URI,map:N,of:t.of,ap:$,chain:t.flatMap,reduce:q,foldMap:H,reduceRight:U,traverse:V,sequence:t.sequence,bimap:B,mapLeft:W,alt:O,extend:d,chainRec:f,throwError:t.throwError},t.getApplySemigroup=(0,o.getApplySemigroup)(t.Apply),t.getApplyMonoid=(0,i.getApplicativeMonoid)(t.Applicative);var me=function(P,R){return(0,o.getApplySemigroup)((0,t.getApplicativeValidation)(P))(R)};t.getValidationSemigroup=me;var en=function(P,R){return(0,i.getApplicativeMonoid)((0,t.getApplicativeValidation)(P))(R)};t.getValidationMonoid=en;function nn(P){var R=(0,t.getApplicativeValidation)(P).ap,M=(0,t.getAltValidation)(P).alt;return{URI:t.URI,_E:void 0,map:N,of:t.of,chain:t.flatMap,bimap:B,mapLeft:W,reduce:q,foldMap:H,reduceRight:U,extend:d,traverse:V,sequence:t.sequence,chainRec:f,throwError:t.throwError,ap:R,alt:M}}t.getValidation=nn})(js);var Gs={},Sc={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.and=t.or=t.not=t.Contravariant=t.getMonoidAll=t.getSemigroupAll=t.getMonoidAny=t.getSemigroupAny=t.URI=t.contramap=void 0;var e=Ft,n=function(T,I){return(0,e.pipe)(T,(0,t.contramap)(I))},r=function(T){return function(I){return(0,e.flow)(T,I)}};t.contramap=r,t.URI="Predicate";var i=function(){return{concat:function(T,I){return(0,e.pipe)(T,(0,t.or)(I))}}};t.getSemigroupAny=i;var o=function(){return{concat:(0,t.getSemigroupAny)().concat,empty:e.constFalse}};t.getMonoidAny=o;var a=function(){return{concat:function(T,I){return(0,e.pipe)(T,(0,t.and)(I))}}};t.getSemigroupAll=a;var c=function(){return{concat:(0,t.getSemigroupAll)().concat,empty:e.constTrue}};t.getMonoidAll=c,t.Contravariant={URI:t.URI,contramap:n};var h=function(T){return function(I){return!T(I)}};t.not=h;var m=function(T){return function(I){return function(S){return I(S)||T(S)}}};t.or=m;var y=function(T){return function(I){return function(S){return I(S)&&T(S)}}};t.and=y})(Sc);var bc={},Kt={};Object.defineProperty(Kt,"__esModule",{value:!0});Kt.concatAll=Kt.endo=Kt.filterSecond=Kt.filterFirst=Kt.reverse=void 0;var Mg=function(t){return{concat:function(e,n){return t.concat(n,e)}}};Kt.reverse=Mg;var Ng=function(t){return function(e){return{concat:function(n,r){return t(n)?e.concat(n,r):r}}}};Kt.filterFirst=Ng;var Og=function(t){return function(e){return{concat:function(n,r){return t(r)?e.concat(n,r):n}}}};Kt.filterSecond=Og;var Fg=function(t){return function(e){return{concat:function(n,r){return e.concat(t(n),t(r))}}}};Kt.endo=Fg;var Lg=function(t){return function(e){return function(n){return n.reduce(function(r,i){return t.concat(r,i)},e)}}};Kt.concatAll=Lg;(function(t){var e=Q&&Q.__createBinding||(Object.create?function(U,V,B,W){W===void 0&&(W=B);var O=Object.getOwnPropertyDescriptor(V,B);(!O||("get"in O?!V.__esModule:O.writable||O.configurable))&&(O={enumerable:!0,get:function(){return V[B]}}),Object.defineProperty(U,W,O)}:function(U,V,B,W){W===void 0&&(W=B),U[W]=V[B]}),n=Q&&Q.__setModuleDefault||(Object.create?function(U,V){Object.defineProperty(U,"default",{enumerable:!0,value:V})}:function(U,V){U.default=V}),r=Q&&Q.__importStar||function(U){if(U&&U.__esModule)return U;var V={};if(U!=null)for(var B in U)B!=="default"&&Object.prototype.hasOwnProperty.call(U,B)&&e(V,U,B);return n(V,U),V};Object.defineProperty(t,"__esModule",{value:!0}),t.semigroupProduct=t.semigroupSum=t.semigroupString=t.getFunctionSemigroup=t.semigroupAny=t.semigroupAll=t.fold=t.getIntercalateSemigroup=t.getMeetSemigroup=t.getJoinSemigroup=t.getDualSemigroup=t.getStructSemigroup=t.getTupleSemigroup=t.getFirstSemigroup=t.getLastSemigroup=t.getObjectSemigroup=t.semigroupVoid=t.concatAll=t.last=t.first=t.intercalate=t.tuple=t.struct=t.reverse=t.constant=t.max=t.min=void 0;var i=Ft,o=r(Ce),a=r(Kt),c=r(pc),h=function(U){return{concat:c.min(U)}};t.min=h;var m=function(U){return{concat:c.max(U)}};t.max=m;var y=function(U){return{concat:function(){return U}}};t.constant=y,t.reverse=a.reverse;var T=function(U){return{concat:function(V,B){var W={};for(var O in U)o.has.call(U,O)&&(W[O]=U[O].concat(V[O],B[O]));return W}}};t.struct=T;var I=function(){for(var U=[],V=0;V<arguments.length;V++)U[V]=arguments[V];return{concat:function(B,W){return U.map(function(O,d){return O.concat(B[d],W[d])})}}};t.tuple=I;var S=function(U){return function(V){return{concat:function(B,W){return V.concat(B,V.concat(U,W))}}}};t.intercalate=S;var N=function(){return{concat:i.identity}};t.first=N;var $=function(){return{concat:function(U,V){return V}}};t.last=$,t.concatAll=a.concatAll,t.semigroupVoid=(0,t.constant)(void 0);var q=function(){return{concat:function(U,V){return Object.assign({},U,V)}}};t.getObjectSemigroup=q,t.getLastSemigroup=t.last,t.getFirstSemigroup=t.first,t.getTupleSemigroup=t.tuple,t.getStructSemigroup=t.struct,t.getDualSemigroup=t.reverse,t.getJoinSemigroup=t.max,t.getMeetSemigroup=t.min,t.getIntercalateSemigroup=t.intercalate;function H(U){var V=(0,t.concatAll)(U);return function(B,W){return W===void 0?V(B):V(B)(W)}}t.fold=H,t.semigroupAll={concat:function(U,V){return U&&V}},t.semigroupAny={concat:function(U,V){return U||V}},t.getFunctionSemigroup=i.getSemigroup,t.semigroupString={concat:function(U,V){return U+V}},t.semigroupSum={concat:function(U,V){return U+V}},t.semigroupProduct={concat:function(U,V){return U*V}}})(bc);var _i={};Object.defineProperty(_i,"__esModule",{value:!0});_i.guard=void 0;function kg(t,e){return function(n){return n?e.of(void 0):t.zero()}}_i.guard=kg;(function(t){var e=Q&&Q.__createBinding||(Object.create?function(b,D,k,rt){rt===void 0&&(rt=k);var ct=Object.getOwnPropertyDescriptor(D,k);(!ct||("get"in ct?!D.__esModule:ct.writable||ct.configurable))&&(ct={enumerable:!0,get:function(){return D[k]}}),Object.defineProperty(b,rt,ct)}:function(b,D,k,rt){rt===void 0&&(rt=k),b[rt]=D[k]}),n=Q&&Q.__setModuleDefault||(Object.create?function(b,D){Object.defineProperty(b,"default",{enumerable:!0,value:D})}:function(b,D){b.default=D}),r=Q&&Q.__importStar||function(b){if(b&&b.__esModule)return b;var D={};if(b!=null)for(var k in b)k!=="default"&&Object.prototype.hasOwnProperty.call(b,k)&&e(D,b,k);return n(D,b),D};Object.defineProperty(t,"__esModule",{value:!0}),t.Witherable=t.wilt=t.wither=t.Traversable=t.sequence=t.traverse=t.Filterable=t.partitionMap=t.partition=t.filterMap=t.filter=t.Compactable=t.separate=t.compact=t.Extend=t.extend=t.Alternative=t.guard=t.Zero=t.zero=t.Alt=t.alt=t.altW=t.orElse=t.Foldable=t.reduceRight=t.foldMap=t.reduce=t.Monad=t.Chain=t.flatMap=t.Applicative=t.Apply=t.ap=t.Pointed=t.of=t.asUnit=t.as=t.Functor=t.map=t.getMonoid=t.getOrd=t.getEq=t.getShow=t.URI=t.getRight=t.getLeft=t.fromPredicate=t.some=t.none=void 0,t.getFirstMonoid=t.getApplyMonoid=t.getApplySemigroup=t.option=t.mapNullable=t.getRefinement=t.chainFirst=t.chain=t.sequenceArray=t.traverseArray=t.traverseArrayWithIndex=t.traverseReadonlyArrayWithIndex=t.traverseReadonlyNonEmptyArrayWithIndex=t.ApT=t.apS=t.bind=t.let=t.bindTo=t.Do=t.exists=t.elem=t.toUndefined=t.toNullable=t.chainNullableK=t.fromNullableK=t.tryCatchK=t.tryCatch=t.fromNullable=t.chainFirstEitherK=t.chainEitherK=t.fromEitherK=t.duplicate=t.tapEither=t.tap=t.flatten=t.apSecond=t.apFirst=t.flap=t.getOrElse=t.getOrElseW=t.fold=t.match=t.foldW=t.matchW=t.isNone=t.isSome=t.FromEither=t.fromEither=t.MonadThrow=t.throwError=void 0,t.getLastMonoid=void 0;var i=be,o=Tt,a=r(Xt),c=mt,h=Ft,m=Et,y=r(Ce),T=Sc,I=bc,S=zs,N=ue,$=_i;t.none=y.none,t.some=y.some;function q(b){return function(D){return b(D)?(0,t.some)(D):t.none}}t.fromPredicate=q;var H=function(b){return b._tag==="Right"?t.none:(0,t.some)(b.left)};t.getLeft=H;var U=function(b){return b._tag==="Left"?t.none:(0,t.some)(b.right)};t.getRight=U;var V=function(b,D){return(0,h.pipe)(b,(0,t.map)(D))},B=function(b,D){return(0,h.pipe)(b,(0,t.ap)(D))},W=function(b,D,k){return(0,h.pipe)(b,(0,t.reduce)(D,k))},O=function(b){var D=(0,t.foldMap)(b);return function(k,rt){return(0,h.pipe)(k,D(rt))}},d=function(b,D,k){return(0,h.pipe)(b,(0,t.reduceRight)(D,k))},f=function(b){var D=(0,t.traverse)(b);return function(k,rt){return(0,h.pipe)(k,D(rt))}},p=function(b,D){return(0,h.pipe)(b,(0,t.alt)(D))},_=function(b,D){return(0,h.pipe)(b,(0,t.filter)(D))},v=function(b,D){return(0,h.pipe)(b,(0,t.filterMap)(D))},A=function(b,D){return(0,h.pipe)(b,(0,t.extend)(D))},E=function(b,D){return(0,h.pipe)(b,(0,t.partition)(D))},ft=function(b,D){return(0,h.pipe)(b,(0,t.partitionMap)(D))};t.URI="Option";var qt=function(b){return{show:function(D){return(0,t.isNone)(D)?"none":"some(".concat(b.show(D.value),")")}}};t.getShow=qt;var te=function(b){return{equals:function(D,k){return D===k||((0,t.isNone)(D)?(0,t.isNone)(k):(0,t.isNone)(k)?!1:b.equals(D.value,k.value))}}};t.getEq=te;var Bt=function(b){return{equals:(0,t.getEq)(b).equals,compare:function(D,k){return D===k?0:(0,t.isSome)(D)?(0,t.isSome)(k)?b.compare(D.value,k.value):1:-1}}};t.getOrd=Bt;var ee=function(b){return{concat:function(D,k){return(0,t.isNone)(D)?k:(0,t.isNone)(k)?D:(0,t.some)(b.concat(D.value,k.value))},empty:t.none}};t.getMonoid=ee;var Ve=function(b){return function(D){return(0,t.isNone)(D)?t.none:(0,t.some)(b(D.value))}};t.map=Ve,t.Functor={URI:t.URI,map:V},t.as=(0,h.dual)(2,(0,m.as)(t.Functor)),t.asUnit=(0,m.asUnit)(t.Functor),t.of=t.some,t.Pointed={URI:t.URI,of:t.of};var Ye=function(b){return function(D){return(0,t.isNone)(D)||(0,t.isNone)(b)?t.none:(0,t.some)(D.value(b.value))}};t.ap=Ye,t.Apply={URI:t.URI,map:V,ap:B},t.Applicative={URI:t.URI,map:V,ap:B,of:t.of},t.flatMap=(0,h.dual)(2,function(b,D){return(0,t.isNone)(b)?t.none:D(b.value)}),t.Chain={URI:t.URI,map:V,ap:B,chain:t.flatMap},t.Monad={URI:t.URI,map:V,ap:B,of:t.of,chain:t.flatMap};var Pn=function(b,D){return function(k){return(0,t.isNone)(k)?b:D(b,k.value)}};t.reduce=Pn;var Wt=function(b){return function(D){return function(k){return(0,t.isNone)(k)?b.empty:D(k.value)}}};t.foldMap=Wt;var gt=function(b,D){return function(k){return(0,t.isNone)(k)?b:D(k.value,b)}};t.reduceRight=gt,t.Foldable={URI:t.URI,reduce:W,foldMap:O,reduceRight:d},t.orElse=(0,h.dual)(2,function(b,D){return(0,t.isNone)(b)?D():b}),t.altW=t.orElse,t.alt=t.orElse,t.Alt={URI:t.URI,map:V,alt:p};var Cn=function(){return t.none};t.zero=Cn,t.Zero={URI:t.URI,zero:t.zero},t.guard=(0,$.guard)(t.Zero,t.Pointed),t.Alternative={URI:t.URI,map:V,ap:B,of:t.of,alt:p,zero:t.zero};var ne=function(b){return function(D){return(0,t.isNone)(D)?t.none:(0,t.some)(b(D))}};t.extend=ne,t.Extend={URI:t.URI,map:V,extend:A},t.compact=(0,t.flatMap)(h.identity);var Vn=(0,S.separated)(t.none,t.none),fe=function(b){return(0,t.isNone)(b)?Vn:(0,S.separated)((0,t.getLeft)(b.value),(0,t.getRight)(b.value))};t.separate=fe,t.Compactable={URI:t.URI,compact:t.compact,separate:t.separate};var Dn=function(b){return function(D){return(0,t.isNone)(D)?t.none:b(D.value)?D:t.none}};t.filter=Dn;var Mn=function(b){return function(D){return(0,t.isNone)(D)?t.none:b(D.value)}};t.filterMap=Mn;var zt=function(b){return function(D){return(0,S.separated)(_(D,(0,T.not)(b)),_(D,b))}};t.partition=zt;var re=function(b){return(0,h.flow)((0,t.map)(b),t.separate)};t.partitionMap=re,t.Filterable={URI:t.URI,map:V,compact:t.compact,separate:t.separate,filter:_,filterMap:v,partition:E,partitionMap:ft};var De=function(b){return function(D){return function(k){return(0,t.isNone)(k)?b.of(t.none):b.map(D(k.value),t.some)}}};t.traverse=De;var Me=function(b){return function(D){return(0,t.isNone)(D)?b.of(t.none):b.map(D.value,t.some)}};t.sequence=Me,t.Traversable={URI:t.URI,map:V,reduce:W,foldMap:O,reduceRight:d,traverse:f,sequence:t.sequence};var ie=(0,N.witherDefault)(t.Traversable,t.Compactable),se=(0,N.wiltDefault)(t.Traversable,t.Compactable),Je=function(b){var D=ie(b);return function(k){return function(rt){return D(rt,k)}}};t.wither=Je;var Nn=function(b){var D=se(b);return function(k){return function(rt){return D(rt,k)}}};t.wilt=Nn,t.Witherable={URI:t.URI,map:V,reduce:W,foldMap:O,reduceRight:d,traverse:f,sequence:t.sequence,compact:t.compact,separate:t.separate,filter:_,filterMap:v,partition:E,partitionMap:ft,wither:ie,wilt:se};var On=function(){return t.none};t.throwError=On,t.MonadThrow={URI:t.URI,map:V,ap:B,of:t.of,chain:t.flatMap,throwError:t.throwError},t.fromEither=t.getRight,t.FromEither={URI:t.URI,fromEither:t.fromEither},t.isSome=y.isSome;var Ze=function(b){return b._tag==="None"};t.isNone=Ze;var de=function(b,D){return function(k){return(0,t.isNone)(k)?b():D(k.value)}};t.matchW=de,t.foldW=t.matchW,t.match=t.matchW,t.fold=t.match;var xe=function(b){return function(D){return(0,t.isNone)(D)?b():D.value}};t.getOrElseW=xe,t.getOrElse=t.getOrElseW,t.flap=(0,m.flap)(t.Functor),t.apFirst=(0,o.apFirst)(t.Apply),t.apSecond=(0,o.apSecond)(t.Apply),t.flatten=t.compact,t.tap=(0,h.dual)(2,a.tap(t.Chain)),t.tapEither=(0,h.dual)(2,(0,c.tapEither)(t.FromEither,t.Chain)),t.duplicate=(0,t.extend)(h.identity),t.fromEitherK=(0,c.fromEitherK)(t.FromEither),t.chainEitherK=(0,c.chainEitherK)(t.FromEither,t.Chain),t.chainFirstEitherK=t.tapEither;var Fn=function(b){return b==null?t.none:(0,t.some)(b)};t.fromNullable=Fn;var Ne=function(b){try{return(0,t.some)(b())}catch{return t.none}};t.tryCatch=Ne;var Oe=function(b){return function(){for(var D=[],k=0;k<arguments.length;k++)D[k]=arguments[k];return(0,t.tryCatch)(function(){return b.apply(void 0,D)})}};t.tryCatchK=Oe;var tn=function(b){return(0,h.flow)(b,t.fromNullable)};t.fromNullableK=tn;var pt=function(b){return function(D){return(0,t.isNone)(D)?t.none:(0,t.fromNullable)(b(D.value))}};t.chainNullableK=pt,t.toNullable=(0,t.match)(h.constNull,h.identity),t.toUndefined=(0,t.match)(h.constUndefined,h.identity);function _t(b){return function(D,k){if(k===void 0){var rt=_t(b);return function(ct){return rt(D,ct)}}return(0,t.isNone)(k)?!1:b.equals(D,k.value)}}t.elem=_t;var me=function(b){return function(D){return(0,t.isNone)(D)?!1:b(D.value)}};t.exists=me,t.Do=(0,t.of)(y.emptyRecord),t.bindTo=(0,m.bindTo)(t.Functor);var en=(0,m.let)(t.Functor);t.let=en,t.bind=a.bind(t.Chain),t.apS=(0,o.apS)(t.Apply),t.ApT=(0,t.of)(y.emptyReadonlyArray);var nn=function(b){return function(D){var k=b(0,y.head(D));if((0,t.isNone)(k))return t.none;for(var rt=[k.value],ct=1;ct<D.length;ct++){var ge=b(ct,D[ct]);if((0,t.isNone)(ge))return t.none;rt.push(ge.value)}return(0,t.some)(rt)}};t.traverseReadonlyNonEmptyArrayWithIndex=nn;var P=function(b){var D=(0,t.traverseReadonlyNonEmptyArrayWithIndex)(b);return function(k){return y.isNonEmpty(k)?D(k):t.ApT}};t.traverseReadonlyArrayWithIndex=P,t.traverseArrayWithIndex=t.traverseReadonlyArrayWithIndex;var R=function(b){return(0,t.traverseReadonlyArrayWithIndex)(function(D,k){return b(k)})};t.traverseArray=R,t.sequenceArray=(0,t.traverseArray)(h.identity),t.chain=t.flatMap,t.chainFirst=t.tap;function M(b){return function(D){return(0,t.isSome)(b(D))}}t.getRefinement=M,t.mapNullable=t.chainNullableK,t.option={URI:t.URI,map:V,of:t.of,ap:B,chain:t.flatMap,reduce:W,foldMap:O,reduceRight:d,traverse:f,sequence:t.sequence,zero:t.zero,alt:p,extend:A,compact:t.compact,separate:t.separate,filter:_,filterMap:v,partition:E,partitionMap:ft,wither:ie,wilt:se,throwError:t.throwError},t.getApplySemigroup=(0,o.getApplySemigroup)(t.Apply),t.getApplyMonoid=(0,i.getApplicativeMonoid)(t.Applicative);var Z=function(){return(0,t.getMonoid)((0,I.first)())};t.getFirstMonoid=Z;var dt=function(){return(0,t.getMonoid)((0,I.last)())};t.getLastMonoid=dt})(Gs);var Pc={};(function(t){var e=Q&&Q.__createBinding||(Object.create?function(V,B,W,O){O===void 0&&(O=W);var d=Object.getOwnPropertyDescriptor(B,W);(!d||("get"in d?!B.__esModule:d.writable||d.configurable))&&(d={enumerable:!0,get:function(){return B[W]}}),Object.defineProperty(V,O,d)}:function(V,B,W,O){O===void 0&&(O=W),V[O]=B[W]}),n=Q&&Q.__setModuleDefault||(Object.create?function(V,B){Object.defineProperty(V,"default",{enumerable:!0,value:B})}:function(V,B){V.default=B}),r=Q&&Q.__importStar||function(V){if(V&&V.__esModule)return V;var B={};if(V!=null)for(var W in V)W!=="default"&&Object.prototype.hasOwnProperty.call(V,W)&&e(B,V,W);return n(B,V),B};Object.defineProperty(t,"__esModule",{value:!0}),t.getMonoid=t.getSemigroup=t.io=t.chainFirst=t.chain=t.sequenceArray=t.traverseArray=t.traverseArrayWithIndex=t.traverseReadonlyArrayWithIndex=t.traverseReadonlyNonEmptyArrayWithIndex=t.ApT=t.apS=t.bind=t.let=t.bindTo=t.Do=t.FromIO=t.ChainRec=t.MonadIO=t.fromIO=t.tap=t.Monad=t.Chain=t.Applicative=t.apSecond=t.apFirst=t.Apply=t.Pointed=t.flap=t.asUnit=t.as=t.Functor=t.URI=t.flatten=t.flatMap=t.of=t.ap=t.map=void 0;var i=be,o=Tt,a=r(Xt),c=Ft,h=Et,m=r(Ce),y=function(V,B){return function(){return B(V())}},T=function(V,B){return function(){return V()(B())}},I=function(V,B){return function(){for(var W=B(V)();W._tag==="Left";)W=B(W.left)();return W.right}},S=function(V){return function(B){return y(B,V)}};t.map=S;var N=function(V){return function(B){return T(B,V)}};t.ap=N,t.of=c.constant,t.flatMap=(0,c.dual)(2,function(V,B){return function(){return B(V())()}}),t.flatten=(0,t.flatMap)(c.identity),t.URI="IO",t.Functor={URI:t.URI,map:y},t.as=(0,c.dual)(2,(0,h.as)(t.Functor)),t.asUnit=(0,h.asUnit)(t.Functor),t.flap=(0,h.flap)(t.Functor),t.Pointed={URI:t.URI,of:t.of},t.Apply={URI:t.URI,map:y,ap:T},t.apFirst=(0,o.apFirst)(t.Apply),t.apSecond=(0,o.apSecond)(t.Apply),t.Applicative={URI:t.URI,map:y,ap:T,of:t.of},t.Chain={URI:t.URI,map:y,ap:T,chain:t.flatMap},t.Monad={URI:t.URI,map:y,ap:T,of:t.of,chain:t.flatMap},t.tap=(0,c.dual)(2,a.tap(t.Chain)),t.fromIO=c.identity,t.MonadIO={URI:t.URI,map:y,ap:T,of:t.of,chain:t.flatMap,fromIO:t.fromIO},t.ChainRec={URI:t.URI,map:y,ap:T,chain:t.flatMap,chainRec:I},t.FromIO={URI:t.URI,fromIO:c.identity},t.Do=(0,t.of)(m.emptyRecord),t.bindTo=(0,h.bindTo)(t.Functor);var $=(0,h.let)(t.Functor);t.let=$,t.bind=a.bind(t.Chain),t.apS=(0,o.apS)(t.Apply),t.ApT=(0,t.of)(m.emptyReadonlyArray);var q=function(V){return function(B){return function(){for(var W=[V(0,m.head(B))()],O=1;O<B.length;O++)W.push(V(O,B[O])());return W}}};t.traverseReadonlyNonEmptyArrayWithIndex=q;var H=function(V){var B=(0,t.traverseReadonlyNonEmptyArrayWithIndex)(V);return function(W){return m.isNonEmpty(W)?B(W):t.ApT}};t.traverseReadonlyArrayWithIndex=H,t.traverseArrayWithIndex=t.traverseReadonlyArrayWithIndex;var U=function(V){return(0,t.traverseReadonlyArrayWithIndex)(function(B,W){return V(W)})};t.traverseArray=U,t.sequenceArray=(0,t.traverseArray)(c.identity),t.chain=t.flatMap,t.chainFirst=t.tap,t.io={URI:t.URI,map:y,of:t.of,ap:T,chain:t.flatMap,fromIO:t.fromIO,chainRec:I},t.getSemigroup=(0,o.getApplySemigroup)(t.Apply),t.getMonoid=(0,i.getApplicativeMonoid)(t.Applicative)})(Pc);const{pipe:Hs,flow:Gg,constant:Hg,identity:Qg,tupled:Xg,constVoid:Yg}=Wm;Ws(js.Apply);Ws(Gs.Apply);gi(js.Apply);gi(Gs.Apply);gi(Pc.Apply);const Qs=Tm(Nh),yr=({type:t,id:e=null})=>`${t}${e!=null?`/${e}`:""}`,Xs=t=>e=>t(Qs,e),Cc=(t,e)=>n=>(delete t.id,delete t.contentType,t[e]=Um(),t.players&&t.players.forEach(r=>{delete r.created,delete r.edited}),{location:n,content:t}),Vc=(t,e=null)=>n=>t(n.location,n.content,e),Jg=({type:t,id:e})=>Hs({type:t,id:e},yr,Xs(_r),Nm),Zg=({content:t,type:e,timestamp:n="created"})=>Hs({type:e},yr,Xs(vm),Cc(t,n),Vc(Lm)),xg=({id:t,content:e,type:n,timestamp:r="edited"})=>Hs({type:n,id:t},yr,Xs(_r),Cc(e,r),Vc(Om,{merge:!0})),tp=({id:t,type:e},n,r,i=!1)=>{const o=_r(Qs,yr({type:e,id:t})),a={...r};delete a.id,delete a.contentType,delete a.created,delete a.edited,Fm(o,{[n]:i?Bm(a):qm(a)})},ep=({type:t,id:e},n)=>km(_r(Qs,yr({type:t,id:e})),n);export{pc as O,Ft as _,xg as a,Zg as b,Q as c,Jg as d,qg as g,$g as j,jg as l,Bg as m,Hs as p,ep as s,tp as u};
