(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,e,n){t.exports=n("zUnb")},zUnb:function(t,e,n){"use strict";n.r(e);var r=function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t}({});"undefined"!=typeof window&&window,"undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,"undefined"!=typeof global&&global;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class s{get(t){return""}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class o{constructor({defaultEncapsulation:t=r.Emulated,useJit:e=!0,jitDevMode:n=!1,missingTranslation:s=null,preserveWhitespaces:o,strictInjectionParameters:i}={}){var l;this.defaultEncapsulation=t,this.useJit=!!e,this.jitDevMode=!!n,this.missingTranslation=s,this.preserveWhitespaces=function(t,e=!1){return null===t?e:t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(void 0===(l=o)?null:l),this.strictInjectionParameters=!0===i
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}function i(t){return"function"==typeof t}let l=!1;const u={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){const t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}else l&&console.log("RxJS: Back to a better error behavior. Thank you. <3");l=t},get useDeprecatedSynchronousErrorHandling(){return l}};function c(t){setTimeout(()=>{throw t},0)}const a={closed:!0,next(t){},error(t){if(u.useDeprecatedSynchronousErrorHandling)throw t;c(t)},complete(){}},h=(()=>Array.isArray||(t=>t&&"number"==typeof t.length))();function d(t){return null!==t&&"object"==typeof t}const f=(()=>{function t(t){return Error.call(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e+1}) ${t.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t})();let p=(()=>{class t{constructor(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}unsubscribe(){let e;if(this.closed)return;let{_parentOrParents:n,_ctorUnsubscribe:r,_unsubscribe:s,_subscriptions:o}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(let t=0;t<n.length;++t)n[t].remove(this);if(i(s)){r&&(this._unsubscribe=void 0);try{s.call(this)}catch(l){e=l instanceof f?_(l.errors):[l]}}if(h(o)){let t=-1,n=o.length;for(;++t<n;){const n=o[t];if(d(n))try{n.unsubscribe()}catch(l){e=e||[],l instanceof f?e=e.concat(_(l.errors)):e.push(l)}}}if(e)throw new f(e)}add(e){let n=e;if(!e)return t.EMPTY;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){const e=n;n=new t,n._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}let{_parentOrParents:r}=n;if(null===r)n._parentOrParents=this;else if(r instanceof t){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}const s=this._subscriptions;return null===s?this._subscriptions=[n]:s.push(n),n}remove(t){const e=this._subscriptions;if(e){const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}}return t.EMPTY=function(t){return t.closed=!0,t}(new t),t})();function _(t){return t.reduce((t,e)=>t.concat(e instanceof f?e.errors:e),[])}const y=(()=>"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random())();class g extends p{constructor(t,e,n){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=a;break;case 1:if(!t){this.destination=a;break}if("object"==typeof t){t instanceof g?(this.syncErrorThrowable=t.syncErrorThrowable,this.destination=t,t.add(this)):(this.syncErrorThrowable=!0,this.destination=new m(this,t));break}default:this.syncErrorThrowable=!0,this.destination=new m(this,t,e,n)}}[y](){return this}static create(t,e,n){const r=new g(t,e,n);return r.syncErrorThrowable=!1,r}next(t){this.isStopped||this._next(t)}error(t){this.isStopped||(this.isStopped=!0,this._error(t))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(t){this.destination.next(t)}_error(t){this.destination.error(t),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:t}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this}}class m extends g{constructor(t,e,n,r){let s;super(),this._parentSubscriber=t;let o=this;i(e)?s=e:e&&(s=e.next,n=e.error,r=e.complete,e!==a&&(o=Object.create(e),i(o.unsubscribe)&&this.add(o.unsubscribe.bind(o)),o.unsubscribe=this.unsubscribe.bind(this))),this._context=o,this._next=s,this._error=n,this._complete=r}next(t){if(!this.isStopped&&this._next){const{_parentSubscriber:e}=this;u.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}}error(t){if(!this.isStopped){const{_parentSubscriber:e}=this,{useDeprecatedSynchronousErrorHandling:n}=u;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):c(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;c(t)}}}complete(){if(!this.isStopped){const{_parentSubscriber:t}=this;if(this._complete){const e=()=>this._complete.call(this._context);u.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,e),this.unsubscribe()):(this.__tryOrUnsub(e),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(t,e){try{t.call(this._context,e)}catch(n){if(this.unsubscribe(),u.useDeprecatedSynchronousErrorHandling)throw n;c(n)}}__tryOrSetError(t,e,n){if(!u.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(r){return u.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=r,t.syncErrorThrown=!0,!0):(c(r),!0)}return!1}_unsubscribe(){const{_parentSubscriber:t}=this;this._context=null,this._parentSubscriber=null,t.unsubscribe()}}const v=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")();function w(t){return t}let b=(()=>{class t{constructor(t){this._isScalar=!1,t&&(this._subscribe=t)}lift(e){const n=new t;return n.source=this,n.operator=e,n}subscribe(t,e,n){const{operator:r}=this,s=function(t,e,n){if(t){if(t instanceof g)return t;if(t[y])return t[y]()}return t||e||n?new g(t,e,n):new g(a)}(t,e,n);if(s.add(r?r.call(s,this.source):this.source||u.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),u.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s}_trySubscribe(t){try{return this._subscribe(t)}catch(e){u.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),function(t){for(;t;){const{closed:e,destination:n,isStopped:r}=t;if(e||r)return!1;t=n&&n instanceof g?n:null}return!0}(t)?t.error(e):console.warn(e)}}forEach(t,e){return new(e=C(e))((e,n)=>{let r;r=this.subscribe(e=>{try{t(e)}catch(s){n(s),r&&r.unsubscribe()}},n,e)})}_subscribe(t){const{source:e}=this;return e&&e.subscribe(t)}[v](){return this}pipe(...t){return 0===t.length?this:(0===(e=t).length?w:1===e.length?e[0]:function(t){return e.reduce((t,e)=>e(t),t)})(this);var e}toPromise(t){return new(t=C(t))((t,e)=>{let n;this.subscribe(t=>n=t,t=>e(t),()=>t(n))})}}return t.create=e=>new t(e),t})();function C(t){if(t||(t=u.Promise||Promise),!t)throw new Error("no Promise impl found");return t}const x=(()=>{function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t})();class E extends p{constructor(t,e){super(),this.subject=t,this.subscriber=e,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const t=this.subject,e=t.observers;if(this.subject=null,!e||0===e.length||t.isStopped||t.closed)return;const n=e.indexOf(this.subscriber);-1!==n&&e.splice(n,1)}}class T extends g{constructor(t){super(t),this.destination=t}}let k=(()=>{class t extends b{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[y](){return new T(this)}lift(t){const e=new I(this,this);return e.operator=t,e}next(t){if(this.closed)throw new x;if(!this.isStopped){const{observers:e}=this,n=e.length,r=e.slice();for(let s=0;s<n;s++)r[s].next(t)}}error(t){if(this.closed)throw new x;this.hasError=!0,this.thrownError=t,this.isStopped=!0;const{observers:e}=this,n=e.length,r=e.slice();for(let s=0;s<n;s++)r[s].error(t);this.observers.length=0}complete(){if(this.closed)throw new x;this.isStopped=!0;const{observers:t}=this,e=t.length,n=t.slice();for(let r=0;r<e;r++)n[r].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(t){if(this.closed)throw new x;return super._trySubscribe(t)}_subscribe(t){if(this.closed)throw new x;return this.hasError?(t.error(this.thrownError),p.EMPTY):this.isStopped?(t.complete(),p.EMPTY):(this.observers.push(t),new E(this,t))}asObservable(){const t=new b;return t.source=this,t}}return t.create=(t,e)=>new I(t,e),t})();class I extends k{constructor(t,e){super(),this.destination=t,this.source=e}next(t){const{destination:e}=this;e&&e.next&&e.next(t)}error(t){const{destination:e}=this;e&&e.error&&this.destination.error(t)}complete(){const{destination:t}=this;t&&t.complete&&this.destination.complete()}_subscribe(t){const{source:e}=this;return e?this.source.subscribe(t):p.EMPTY}}class S{constructor(t,e){this.project=t,this.thisArg=e}call(t,e){return e.subscribe(new A(t,this.project,this.thisArg))}}class A extends g{constructor(t,e,n){super(t),this.project=e,this.count=0,this.thisArg=n||this}_next(t){let e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(n){return void this.destination.error(n)}this.destination.next(e)}}const O=t=>e=>{for(let n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.complete()};function D(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}const j=D(),P=t=>t&&"number"==typeof t.length&&"function"!=typeof t;function N(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}const M=t=>{if(t&&"function"==typeof t[v])return r=t,t=>{const e=r[v]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)};if(P(t))return O(t);if(N(t))return n=t,t=>(n.then(e=>{t.closed||(t.next(e),t.complete())},e=>t.error(e)).then(null,c),t);if(t&&"function"==typeof t[j])return e=t,t=>{const n=e[j]();for(;;){let e;try{e=n.next()}catch(r){return t.error(r),t}if(e.done){t.complete();break}if(t.next(e.value),t.closed)break}return"function"==typeof n.return&&t.add(()=>{n.return&&n.return()}),t};{const e=d(t)?"an invalid object":`'${t}'`;throw new TypeError(`You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)}var e,n,r};function F(t,e){return new b(n=>{const r=new p;let s=0;return r.add(e.schedule(function(){s!==t.length?(n.next(t[s++]),n.closed||r.add(this.schedule())):n.complete()})),r})}class H extends g{constructor(t){super(),this.parent=t}_next(t){this.parent.notifyNext(t)}_error(t){this.parent.notifyError(t),this.unsubscribe()}_complete(){this.parent.notifyComplete(),this.unsubscribe()}}class R extends g{notifyNext(t){this.destination.next(t)}notifyError(t){this.destination.error(t)}notifyComplete(){this.destination.complete()}}function V(t,e,n=Number.POSITIVE_INFINITY){return"function"==typeof e?r=>r.pipe(V((n,r)=>{return(s=t(n,r),o?function(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[v]}(t))return function(t,e){return new b(n=>{const r=new p;return r.add(e.schedule(()=>{const s=t[v]();r.add(s.subscribe({next(t){r.add(e.schedule(()=>n.next(t)))},error(t){r.add(e.schedule(()=>n.error(t)))},complete(){r.add(e.schedule(()=>n.complete()))}}))})),r})}(t,e);if(N(t))return function(t,e){return new b(n=>{const r=new p;return r.add(e.schedule(()=>t.then(t=>{r.add(e.schedule(()=>{n.next(t),r.add(e.schedule(()=>n.complete()))}))},t=>{r.add(e.schedule(()=>n.error(t)))}))),r})}(t,e);if(P(t))return F(t,e);if(function(t){return t&&"function"==typeof t[j]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new b(n=>{const r=new p;let s;return r.add(()=>{s&&"function"==typeof s.return&&s.return()}),r.add(e.schedule(()=>{s=t[j](),r.add(e.schedule(function(){if(n.closed)return;let t,e;try{const n=s.next();t=n.value,e=n.done}catch(r){return void n.error(r)}e?n.complete():(n.next(t),this.schedule())}))})),r})}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}(s,o):s instanceof b?s:new b(M(s))).pipe(function(t,e){return function(e){return e.lift(new S(t,undefined))}}((t,s)=>e(n,t,r,s)));var s,o},n)):("number"==typeof e&&(n=e),e=>e.lift(new L(t,n)))}class L{constructor(t,e=Number.POSITIVE_INFINITY){this.project=t,this.concurrent=e}call(t,e){return e.subscribe(new B(t,this.project,this.concurrent))}}class B extends R{constructor(t,e,n=Number.POSITIVE_INFINITY){super(t),this.project=e,this.concurrent=n,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)}_tryNext(t){let e;const n=this.index++;try{e=this.project(t,n)}catch(r){return void this.destination.error(r)}this.active++,this._innerSub(e)}_innerSub(t){const e=new H(this),n=this.destination;n.add(e);const r=function(t,e){if(!e.closed)return t instanceof b?t.subscribe(e):M(t)(e)}(t,e);r!==e&&n.add(r)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(t){this.destination.next(t)}notifyComplete(){const t=this.buffer;this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}function Z(){return function(t){return t.lift(new $(t))}}class ${constructor(t){this.connectable=t}call(t,e){const{connectable:n}=this;n._refCount++;const r=new z(t,n),s=e.subscribe(r);return r.closed||(r.connection=n.connect()),s}}class z extends g{constructor(t,e){super(t),this.connectable=e}_unsubscribe(){const{connectable:t}=this;if(!t)return void(this.connection=null);this.connectable=null;const e=t._refCount;if(e<=0)return void(this.connection=null);if(t._refCount=e-1,e>1)return void(this.connection=null);const{connection:n}=this,r=t._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}class U extends b{constructor(t,e){super(),this.source=t,this.subjectFactory=e,this._refCount=0,this._isComplete=!1}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return t&&!t.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let t=this._connection;return t||(this._isComplete=!1,t=this._connection=new p,t.add(this.source.subscribe(new q(this.getSubject(),this))),t.closed&&(this._connection=null,t=p.EMPTY)),t}refCount(){return Z()(this)}}const W=(()=>{const t=U.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:t._subscribe},_isComplete:{value:t._isComplete,writable:!0},getSubject:{value:t.getSubject},connect:{value:t.connect},refCount:{value:t.refCount}}})();class q extends T{constructor(t,e){super(t),this.connectable=e}_error(t){this._unsubscribe(),super._error(t)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const t=this.connectable;if(t){this.connectable=null;const e=t._connection;t._refCount=0,t._subject=null,t._connection=null,e&&e.unsubscribe()}}}function G(){return new k}
/**
 * @license Angular v11.0.2
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Q(t){return{toString:t}.toString()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function J(t,e,n){return Q(()=>{const r=function(t){return function(...e){if(t){const n=t(...e);for(const t in n)this[t]=n[t]}}}(e);function s(...t){if(this instanceof s)return r.apply(this,t),this;const e=new s(...t);return n.annotation=e,n;function n(t,n,r){const s=t.hasOwnProperty("__parameters__")?t.__parameters__:Object.defineProperty(t,"__parameters__",{value:[]}).__parameters__;for(;s.length<=r;)s.push(null);return(s[r]=s[r]||[]).push(e),t}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=t,s.annotationCls=s,s})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const K=J("Inject",t=>({token:t})),Y=J("Optional"),X=J("Self"),tt=J("SkipSelf");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function et(t){if("string"==typeof t)return t;if(Array.isArray(t))return"["+t.map(et).join(", ")+"]";if(null==t)return""+t;if(t.overriddenName)return""+t.overriddenName;if(t.name)return""+t.name;const e=t.toString();if(null==e)return""+e;const n=e.indexOf("\n");return-1===n?e:e.substring(0,n)}function nt(t,e){return null==t||""===t?null===e?"":e:null==e||""===e?t:t+" "+e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function rt(t){for(let e in t)if(t[e]===rt)return e;throw Error("Could not find renamed property on target object.")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function st(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function ot(t){return{factory:t.factory,providers:t.providers||[],imports:t.imports||[]}}function it(t){return lt(t,ct)||lt(t,ht)}function lt(t,e){return t.hasOwnProperty(e)?t[e]:null}function ut(t){return t&&(t.hasOwnProperty(at)||t.hasOwnProperty(dt))?t[at]:null}const ct=rt({\u0275prov:rt}),at=rt({\u0275inj:rt}),ht=rt({ngInjectableDef:rt}),dt=rt({ngInjectorDef:rt});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ft{constructor(t,e){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof e?this.__NG_ELEMENT_ID__=e:void 0!==e&&(this.\u0275prov=st({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}toString(){return"InjectionToken "+this._desc}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var pt=function(t){return t[t.OnPush=0]="OnPush",t[t.Default=1]="Default",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const _t="undefined"!=typeof globalThis&&globalThis,yt="undefined"!=typeof window&&window,gt="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,mt="undefined"!=typeof global&&global,vt=_t||mt||yt||gt,wt=rt({__forward_ref__:rt});function bt(t){return t.__forward_ref__=bt,t.toString=function(){return et(this())},t}function Ct(t){return xt(t)?t():t}function xt(t){return"function"==typeof t&&t.hasOwnProperty(wt)&&t.__forward_ref__===bt}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Et(t,e){t.forEach(t=>Array.isArray(t)?Et(t,e):e(t))}function Tt(t,e,n){e>=t.length?t.push(n):t.splice(e,0,n)}function kt(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var It=function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const St={},At=[],Ot=rt({\u0275cmp:rt}),Dt=rt({\u0275dir:rt}),jt=rt({\u0275pipe:rt}),Pt=rt({\u0275mod:rt}),Nt=rt({\u0275loc:rt}),Mt=rt({\u0275fac:rt}),Ft=rt({__NG_ELEMENT_ID__:rt});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Ht=0;function Rt(t){return Q(()=>{const e={},n={type:t.type,providersResolver:null,decls:t.decls,vars:t.vars,factory:null,template:t.template||null,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputs:null,outputs:null,exportAs:t.exportAs||null,onPush:t.changeDetection===pt.OnPush,directiveDefs:null,pipeDefs:null,selectors:t.selectors||At,viewQuery:t.viewQuery||null,features:t.features||null,data:t.data||{},encapsulation:t.encapsulation||It.Emulated,id:"c",styles:t.styles||At,_:null,setInput:null,schemas:t.schemas||null,tView:null},r=t.directives,s=t.features,o=t.pipes;return n.id+=Ht++,n.inputs=$t(t.inputs,e),n.outputs=$t(t.outputs),s&&s.forEach(t=>t(n)),n.directiveDefs=r?()=>("function"==typeof r?r():r).map(Vt):null,n.pipeDefs=o?()=>("function"==typeof o?o():o).map(Lt):null,n})}function Vt(t){return Ut(t)||function(t){return t[Dt]||null}(t)}function Lt(t){return function(t){return t[jt]||null}(t)}const Bt={};function Zt(t){const e={type:t.type,bootstrap:t.bootstrap||At,declarations:t.declarations||At,imports:t.imports||At,exports:t.exports||At,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null};return null!=t.id&&Q(()=>{Bt[t.id]=t.type}),e}function $t(t,e){if(null==t)return St;const n={};for(const r in t)if(t.hasOwnProperty(r)){let s=t[r],o=s;Array.isArray(s)&&(o=s[1],s=s[0]),n[s]=r,e&&(e[s]=o)}return n}const zt=Rt;function Ut(t){return t[Ot]||null}function Wt(t,e){const n=t[Pt]||null;if(!n&&!0===e)throw new Error(`Type ${et(t)} does not have '\u0275mod' property.`);return n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function qt(t){return"string"==typeof t?t:null==t?"":""+t}function Gt(t){return"function"==typeof t?t.name||t.toString():"object"==typeof t&&null!=t&&"function"==typeof t.type?t.type.name||t.type.toString():qt(t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var Qt=function(t){return t[t.Default=0]="Default",t[t.Host=1]="Host",t[t.Self=2]="Self",t[t.SkipSelf=4]="SkipSelf",t[t.Optional=8]="Optional",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Jt;function Kt(t){const e=Jt;return Jt=t,e}function Yt(t,e,n){const r=it(t);if(r&&"root"==r.providedIn)return void 0===r.value?r.value=r.factory():r.value;if(n&Qt.Optional)return null;if(void 0!==e)return e;throw new Error(`Injector: NOT_FOUND [${et(t)}]`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Xt={},te=/\n/gm,ee=rt({provide:String,useValue:rt});let ne=void 0;function re(t){const e=ne;return ne=t,e}function se(t,e=Qt.Default){if(void 0===ne)throw new Error("inject() must be called from an injection context");return null===ne?Yt(t,void 0,e):ne.get(t,e&Qt.Optional?null:void 0,e)}function oe(t,e=Qt.Default){return(Jt||se)(Ct(t),e)}function ie(t){const e=[];for(let n=0;n<t.length;n++){const r=Ct(t[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let t=void 0,n=Qt.Default;for(let e=0;e<r.length;e++){const s=r[e];s instanceof Y||"Optional"===s.ngMetadataName||s===Y?n|=Qt.Optional:s instanceof tt||"SkipSelf"===s.ngMetadataName||s===tt?n|=Qt.SkipSelf:s instanceof X||"Self"===s.ngMetadataName||s===X?n|=Qt.Self:t=s instanceof K||s===K?s.token:s}e.push(oe(t,n))}else e.push(oe(r))}return e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let le=void 0;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ue(t){return Array.isArray(t)&&"object"==typeof t[1]}function ce(t){return Array.isArray(t)&&!0===t[1]}function ae(t){return 0!=(8&t.flags)}function he(t){return 2==(2&t.flags)}function de(t){return 1==(1&t.flags)}function fe(t){return null!==t.template}function pe(t){return!!t.listen}const _e={createRenderer:(t,e)=>void 0!==le?le:"undefined"!=typeof document?document:void 0};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ye(t){for(;Array.isArray(t);)t=t[0];return t}function ge(t,e){return ye(e[t.index])}function me(t,e){return t.data[e]}function ve(t,e){const n=e[t];return ue(n)?n:n[0]}function we(t){const e=function(t){return t.__ngContext__||null}(t);return e?Array.isArray(e)?e:e.lView:null}function be(t){return 128==(128&t[2])}function Ce(t,e){return null==e?null:t[e]}function xe(t){t[18]=0}function Ee(t,e){t[5]+=e;let n=t,r=t[3];for(;null!==r&&(1===e&&1===n[5]||-1===e&&0===n[5]);)r[5]+=e,n=r,r=r[3]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Te={lFrame:$e(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function ke(){return Te.bindingsEnabled}function Ie(){return Te.lFrame.lView}function Se(){return Te.lFrame.tView}function Ae(){let t=Oe();for(;null!==t&&64===t.type;)t=t.parent;return t}function Oe(){return Te.lFrame.currentTNode}function De(t,e){const n=Te.lFrame;n.currentTNode=t,n.isParent=e}function je(){return Te.lFrame.isParent}function Pe(){return Te.isInCheckNoChangesMode}function Ne(t){Te.isInCheckNoChangesMode=t}function Me(){return Te.lFrame.bindingIndex++}function Fe(t,e){const n=Te.lFrame;n.bindingIndex=n.bindingRootIndex=t,He(e)}function He(t){Te.lFrame.currentDirectiveIndex=t}function Re(t){Te.lFrame.currentQueryIndex=t}function Ve(t){const e=t[1];return 2===e.type?e.declTNode:1===e.type?t[6]:null}function Le(t,e,n){if(n&Qt.SkipSelf){let r=e,s=t;for(;r=r.parent,!(null!==r||n&Qt.Host||(r=Ve(s),null===r)||(s=s[15],10&r.type)););if(null===r)return!1;e=r,t=s}const r=Te.lFrame=Ze();return r.currentTNode=e,r.lView=t,!0}function Be(t){const e=Ze(),n=t[1];Te.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function Ze(){const t=Te.lFrame,e=null===t?null:t.child;return null===e?$e(t):e}function $e(t){const e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return null!==t&&(t.child=e),e}function ze(){const t=Te.lFrame;return Te.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}const Ue=ze;function We(){const t=ze();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function qe(){return Te.lFrame.selectedIndex}function Ge(t){Te.lFrame.selectedIndex=t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Qe=!1;function Je(){return Qe=!0,!0}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ke(t,e){return t.hasOwnProperty(Mt)?t[Mt]:null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ye extends Error{constructor(t,e){super(function(t,e){return`${t?`NG0${t}: `:""}${e}`}(t,e)),this.code=t}}function Xe(t,e){const n=e?" in "+e:"";throw new Ye("201",`No provider for ${Gt(t)} found${n}`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class tn{constructor(t,e,n){this.previousValue=t,this.currentValue=e,this.firstChange=n}isFirstChange(){return this.firstChange}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function en(){const t=rn(this),e=null==t?void 0:t.current;if(e){const n=t.previous;if(n===St)t.previous=e;else for(let t in e)n[t]=e[t];t.current=null,this.ngOnChanges(e)}}function nn(t,e,n,r){const s=rn(t)||function(t,e){return t.__ngSimpleChanges__=e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,{previous:St,current:null}),o=s.current||(s.current={}),i=s.previous,l=this.declaredInputs[n],u=i[l];o[l]=new tn(u&&u.currentValue,e,i===St),t[r]=e}function rn(t){return t.__ngSimpleChanges__||null}function sn(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){const e=t.data[n].type.prototype,{ngAfterContentInit:r,ngAfterContentChecked:s,ngAfterViewInit:o,ngAfterViewChecked:i,ngOnDestroy:l}=e;r&&(t.contentHooks||(t.contentHooks=[])).push(-n,r),s&&((t.contentHooks||(t.contentHooks=[])).push(n,s),(t.contentCheckHooks||(t.contentCheckHooks=[])).push(n,s)),o&&(t.viewHooks||(t.viewHooks=[])).push(-n,o),i&&((t.viewHooks||(t.viewHooks=[])).push(n,i),(t.viewCheckHooks||(t.viewCheckHooks=[])).push(n,i)),null!=l&&(t.destroyHooks||(t.destroyHooks=[])).push(n,l)}}function on(t,e,n){cn(t,e,3,n)}function ln(t,e,n,r){(3&t[2])===n&&cn(t,e,n,r)}function un(t,e){let n=t[2];(3&n)===e&&(n&=2047,n+=1,t[2]=n)}function cn(t,e,n,r){const s=null!=r?r:-1;let o=0;for(let i=void 0!==r?65535&t[18]:0;i<e.length;i++)if("number"==typeof e[i+1]){if(o=e[i],null!=r&&o>=r)break}else e[i]<0&&(t[18]+=65536),(o<s||-1==s)&&(an(t,n,e,i),t[18]=(4294901760&t[18])+i+2),i++}function an(t,e,n,r){const s=n[r]<0,o=n[r+1],i=t[s?-n[r]:n[r]];s?t[2]>>11<t[18]>>16&&(3&t[2])===e&&(t[2]+=2048,o.call(i)):o.call(i)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class hn{constructor(t,e,n){this.factory=t,this.resolving=!1,this.canSeeViewProviders=e,this.injectImpl=n}}function dn(t,e,n){const r=pe(t);let s=0;for(;s<n.length;){const o=n[s];if("number"==typeof o){if(0!==o)break;s++;const i=n[s++],l=n[s++],u=n[s++];r?t.setAttribute(e,l,u,i):e.setAttributeNS(i,l,u)}else{const i=o,l=n[++s];fn(i)?r&&t.setProperty(e,i,l):r?t.setAttribute(e,i,l):e.setAttribute(i,l),s++}}return s}function fn(t){return 64===t.charCodeAt(0)}function pn(t,e){if(null===e||0===e.length);else if(null===t||0===t.length)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){const s=e[r];"number"==typeof s?n=s:0===n||_n(t,n,s,null,-1===n||2===n?e[++r]:null)}}return t}function _n(t,e,n,r,s){let o=0,i=t.length;if(-1===e)i=-1;else for(;o<t.length;){const n=t[o++];if("number"==typeof n){if(n===e){i=-1;break}if(n>e){i=o-1;break}}}for(;o<t.length;){const e=t[o];if("number"==typeof e)break;if(e===n){if(null===r)return void(null!==s&&(t[o+1]=s));if(r===t[o+1])return void(t[o+2]=s)}o++,null!==r&&o++,null!==s&&o++}-1!==i&&(t.splice(i,0,e),o=i+1),t.splice(o++,0,n),null!==r&&t.splice(o++,0,r),null!==s&&t.splice(o++,0,s)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function yn(t){return-1!==t}function gn(t){return 32767&t}function mn(t,e){let n=t>>16,r=e;for(;n>0;)r=r[15],n--;return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let vn=!0;function wn(t){const e=vn;return vn=t,e}let bn=0;function Cn(t,e){const n=En(t,e);if(-1!==n)return n;const r=e[1];r.firstCreatePass&&(t.injectorIndex=e.length,xn(r.data,t),xn(e,null),xn(r.blueprint,null));const s=Tn(t,e),o=t.injectorIndex;if(yn(s)){const t=gn(s),n=mn(s,e),r=n[1].data;for(let s=0;s<8;s++)e[o+s]=n[t+s]|r[t+s]}return e[o+8]=s,o}function xn(t,e){t.push(0,0,0,0,0,0,0,0,e)}function En(t,e){return-1===t.injectorIndex||t.parent&&t.parent.injectorIndex===t.injectorIndex||null===e[t.injectorIndex+8]?-1:t.injectorIndex}function Tn(t,e){if(t.parent&&-1!==t.parent.injectorIndex)return t.parent.injectorIndex;let n=0,r=null,s=e;for(;null!==s;){const t=s[1],e=t.type;if(r=2===e?t.declTNode:1===e?s[6]:null,null===r)return-1;if(n++,s=s[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function kn(t,e,n){!function(t,e,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Ft)&&(r=n[Ft]),null==r&&(r=n[Ft]=bn++);const s=255&r,o=1<<s,i=64&s,l=32&s,u=e.data;128&s?i?l?u[t+7]|=o:u[t+6]|=o:l?u[t+5]|=o:u[t+4]|=o:i?l?u[t+3]|=o:u[t+2]|=o:l?u[t+1]|=o:u[t]|=o}(t,e,n)}function In(t,e,n){if(n&Qt.Optional)return t;Xe(e,"NodeInjector")}function Sn(t,e,n,r){if(n&Qt.Optional&&void 0===r&&(r=null),0==(n&(Qt.Self|Qt.Host))){const s=t[9],o=Kt(void 0);try{return s?s.get(e,r,n&Qt.Optional):Yt(e,r,n&Qt.Optional)}finally{Kt(o)}}return In(r,e,n)}function An(t,e,n,r=Qt.Default,s){if(null!==t){const o=function(t){if("string"==typeof t)return t.charCodeAt(0)||0;const e=t.hasOwnProperty(Ft)?t[Ft]:void 0;return"number"==typeof e?e>=0?255&e:Dn:e}(n);if("function"==typeof o){if(!Le(e,t,r))return r&Qt.Host?In(s,n,r):Sn(e,n,r,s);try{const t=o();if(null!=t||r&Qt.Optional)return t;Xe(n)}finally{Ue()}}else if("number"==typeof o){let s=null,i=En(t,e),l=-1,u=r&Qt.Host?e[16][6]:null;for((-1===i||r&Qt.SkipSelf)&&(l=-1===i?Tn(t,e):e[i+8],-1!==l&&Mn(r,!1)?(s=e[1],i=gn(l),e=mn(l,e)):i=-1);-1!==i;){const t=e[1];if(Nn(o,i,t.data)){const t=jn(i,e,n,s,r,u);if(t!==On)return t}l=e[i+8],-1!==l&&Mn(r,e[1].data[i+8]===u)&&Nn(o,i,e)?(s=t,i=gn(l),e=mn(l,e)):i=-1}}}return Sn(e,n,r,s)}const On={};function Dn(){return new Fn(Ae(),Ie())}function jn(t,e,n,r,s,o){const i=e[1],l=i.data[t+8],u=function(t,e,n,r,s){const o=t.providerIndexes,i=e.data,l=1048575&o,u=t.directiveStart,c=o>>20,a=s?l+c:t.directiveEnd;for(let h=r?l:l+c;h<a;h++){const t=i[h];if(h<u&&n===t||h>=u&&t.type===n)return h}if(s){const t=i[u];if(t&&fe(t)&&t.type===n)return u}return null}(l,i,n,null==r?he(l)&&vn:r!=i&&0!=(3&l.type),s&Qt.Host&&o===l);return null!==u?Pn(e,i,u,l):On}function Pn(t,e,n,r){let s=t[n];const o=e.data;if(s instanceof hn){const i=s;i.resolving&&function(t,e){throw new Ye("200","Circular dependency in DI detected for "+t)}(Gt(o[n]));const l=wn(i.canSeeViewProviders);i.resolving=!0;const u=i.injectImpl?Kt(i.injectImpl):null;Le(t,r,Qt.Default);try{s=t[n]=i.factory(void 0,o,t,r),e.firstCreatePass&&n>=r.directiveStart&&function(t,e,n){const{ngOnChanges:r,ngOnInit:s,ngDoCheck:o}=e.type.prototype;if(r){const r=((i=e).type.prototype.ngOnChanges&&(i.setInput=nn),en);(n.preOrderHooks||(n.preOrderHooks=[])).push(t,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,r)}var i;s&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-t,s),o&&((n.preOrderHooks||(n.preOrderHooks=[])).push(t,o),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,o))}(n,o[n],e)}finally{null!==u&&Kt(u),wn(l),i.resolving=!1,Ue()}}return s}function Nn(t,e,n){const r=64&t,s=32&t;let o;return o=128&t?r?s?n[e+7]:n[e+6]:s?n[e+5]:n[e+4]:r?s?n[e+3]:n[e+2]:s?n[e+1]:n[e],!!(o&1<<t)}function Mn(t,e){return!(t&Qt.Self||t&Qt.Host&&e)}class Fn{constructor(t,e){this._tNode=t,this._lView=e}get(t,e){return An(this._tNode,this._lView,t,void 0,e)}}function Hn(t){const e=t;if(xt(t))return()=>{const t=Hn(Ct(e));return t?t():null};let n=Ke(e);if(null===n){const t=ut(e);n=t&&t.factory}return n||null}function Rn(t){return Q(()=>{const e=t.prototype.constructor,n=e[Mt]||Hn(e),r=Object.prototype;let s=Object.getPrototypeOf(t.prototype).constructor;for(;s&&s!==r;){const t=s[Mt]||Hn(s);if(t&&t!==n)return t;s=Object.getPrototypeOf(s)}return t=>new t})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Vn(t){return t.ngDebugContext}function Ln(t){return t.ngOriginalError}function Bn(t,...e){t.error(...e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Zn{constructor(){this._console=console}handleError(t){const e=this._findOriginalError(t),n=this._findContext(t),r=function(t){return t.ngErrorLogger||Bn}(t);r(this._console,"ERROR",t),e&&r(this._console,"ORIGINAL ERROR",e),n&&r(this._console,"ERROR CONTEXT",n)}_findContext(t){return t?Vn(t)?Vn(t):this._findContext(Ln(t)):null}_findOriginalError(t){let e=Ln(t);for(;e&&Ln(e);)e=Ln(e);return e}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function $n(t,e){t.__ngContext__=e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const zn=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(vt))();function Un(t){return t instanceof Function?t():t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var Wn=function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function qn(t,e){return(void 0)(t,e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Gn(t){const e=t[3];return ce(e)?e[3]:e}function Qn(t){return Kn(t[13])}function Jn(t){return Kn(t[4])}function Kn(t){for(;null!==t&&!ce(t);)t=t[4];return t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Yn(t,e,n,r,s){if(null!=r){let o,i=!1;ce(r)?o=r:ue(r)&&(i=!0,r=r[0]);const l=ye(r);0===t&&null!==n?null==s?or(e,n,l):sr(e,n,l,s||null,!0):1===t&&null!==n?sr(e,n,l,s||null,!0):2===t?function(t,e,n){const r=lr(t,e);r&&function(t,e,n,r){pe(t)?t.removeChild(e,n,r):e.removeChild(n)}(t,r,e,n)}(e,l,i):3===t&&e.destroyNode(l),null!=o&&function(t,e,n,r,s){const o=n[7];o!==ye(n)&&Yn(e,t,r,o,s);for(let i=10;i<n.length;i++){const s=n[i];dr(s[1],s,t,e,r,o)}}(e,t,o,n,s)}}function Xn(t,e,n){return pe(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function tr(t,e){const n=t[9],r=n.indexOf(e),s=e[3];1024&e[2]&&(e[2]&=-1025,Ee(s,-1)),n.splice(r,1)}function er(t,e){if(t.length<=10)return;const n=10+e,r=t[n];if(r){const o=r[17];null!==o&&o!==t&&tr(o,r),e>0&&(t[n-1][4]=r[4]);const i=kt(t,10+e);dr(r[1],s=r,s[11],2,null,null),s[0]=null,s[6]=null;const l=i[19];null!==l&&l.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-129}var s;return r}function nr(t,e){if(!(256&e[2])){const n=e[11];pe(n)&&n.destroyNode&&dr(t,e,n,3,null,null),function(t){let e=t[13];if(!e)return rr(t[1],t);for(;e;){let n=null;if(ue(e))n=e[13];else{const t=e[10];t&&(n=t)}if(!n){for(;e&&!e[4]&&e!==t;)ue(e)&&rr(e[1],e),e=e[3];null===e&&(e=t),ue(e)&&rr(e[1],e),n=e&&e[4]}e=n}}(e)}}function rr(t,e){if(!(256&e[2])){e[2]&=-129,e[2]|=256,function(t,e){let n;if(null!=t&&null!=(n=t.destroyHooks))for(let r=0;r<n.length;r+=2){const t=e[n[r]];if(!(t instanceof hn)){const e=n[r+1];if(Array.isArray(e))for(let n=0;n<e.length;n+=2)e[n+1].call(t[e[n]]);else e.call(t)}}}(t,e),function(t,e){const n=t.cleanup;if(null!==n){const t=e[7];for(let r=0;r<n.length-1;r+=2)if("string"==typeof n[r]){const s=n[r+1],o="function"==typeof s?s(e):ye(e[s]),i=t[n[r+2]],l=n[r+3];"boolean"==typeof l?o.removeEventListener(n[r],i,l):l>=0?t[l]():t[-l].unsubscribe(),r+=2}else n[r].call(t[n[r+1]]);e[7]=null}}(t,e),1===e[1].type&&pe(e[11])&&e[11].destroy();const n=e[17];if(null!==n&&ce(e[3])){n!==e[3]&&tr(n,e);const r=e[19];null!==r&&r.detachView(t)}}}function sr(t,e,n,r,s){pe(t)?t.insertBefore(e,n,r,s):e.insertBefore(n,r,s)}function or(t,e,n){pe(t)?t.appendChild(e,n):e.appendChild(n)}function ir(t,e,n,r,s){null!==r?sr(t,e,n,r,s):or(t,e,n)}function lr(t,e){return pe(t)?t.parentNode(e):e.parentNode}function ur(t,e,n,r){const s=function(t,e,n){return function(t,e,n){let r=e;for(;null!==r&&40&r.type;)r=(e=r).parent;if(null===r)return n[0];if(2&r.flags){const e=t.data[r.directiveStart].encapsulation;if(e===It.None||e===It.Emulated)return null}return ge(r,n)}(t,e.parent,n)}(t,r,e),o=e[11],i=function(t,e,n){return function(t,e,n){return 40&t.type?ge(t,n):null}(t,0,n)}(r.parent||e[6],0,e);if(null!=s)if(Array.isArray(n))for(let l=0;l<n.length;l++)ir(o,s,n[l],i,!1);else ir(o,s,n,i,!1)}function cr(t,e){if(null!==e){const n=e.type;if(3&n)return ge(e,t);if(4&n)return ar(-1,t[e.index]);if(8&n){const n=e.child;if(null!==n)return cr(t,n);{const n=t[e.index];return ce(n)?ar(-1,n):ye(n)}}if(32&n)return qn(e,t)()||ye(t[e.index]);{const n=t[16],r=n[6],s=Gn(n),o=r.projection[e.projection];return null!=o?cr(s,o):cr(t,e.next)}}return null}function ar(t,e){const n=10+t+1;if(n<e.length){const t=e[n],r=t[1].firstChild;if(null!==r)return cr(t,r)}return e[7]}function hr(t,e,n,r,s,o,i){for(;null!=n;){const l=r[n.index],u=n.type;if(i&&0===e&&(l&&$n(ye(l),r),n.flags|=4),64!=(64&n.flags))if(8&u)hr(t,e,n.child,r,s,o,!1),Yn(e,t,s,l,o);else if(32&u){const i=qn(n,r);let u;for(;u=i();)Yn(e,t,s,u,o);Yn(e,t,s,l,o)}else 16&u?fr(t,e,r,n,s,o):Yn(e,t,s,l,o);n=i?n.projectionNext:n.next}}function dr(t,e,n,r,s,o){hr(n,r,t.firstChild,e,s,o,!1)}function fr(t,e,n,r,s,o){const i=n[16],l=i[6].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++)Yn(e,t,s,l[u],o);else hr(t,e,l,i[3],s,o,!0)}function pr(t,e,n){pe(t)?t.setAttribute(e,"style",n):e.style.cssText=n}function _r(t,e,n){pe(t)?""===n?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n):e.className=n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function yr(t,e,n){let r=t.length;for(;;){const s=t.indexOf(e,n);if(-1===s)return s;if(0===s||t.charCodeAt(s-1)<=32){const n=e.length;if(s+n===r||t.charCodeAt(s+n)<=32)return s}n=s+1}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function gr(t,e,n){let r=0;for(;r<t.length;){let s=t[r++];if(n&&"class"===s){if(s=t[r],-1!==yr(s.toLowerCase(),e,0))return!0}else if(1===s){for(;r<t.length&&"string"==typeof(s=t[r++]);)if(s.toLowerCase()===e)return!0;return!1}}return!1}function mr(t){return 4===t.type&&"ng-template"!==t.value}function vr(t,e,n){return e===(4!==t.type||n?t.value:"ng-template")}function wr(t,e,n){let r=4;const s=t.attrs||[],o=function(t){for(let n=0;n<t.length;n++)if(3===(e=t[n])||4===e||6===e)return n;var e;return t.length}(s);let i=!1;for(let l=0;l<e.length;l++){const u=e[l];if("number"!=typeof u){if(!i)if(4&r){if(r=2|1&r,""!==u&&!vr(t,u,n)||""===u&&1===e.length){if(br(r))return!1;i=!0}}else{const c=8&r?u:e[++l];if(8&r&&null!==t.attrs){if(!gr(t.attrs,c,n)){if(br(r))return!1;i=!0}continue}const a=Cr(8&r?"class":u,s,mr(t),n);if(-1===a){if(br(r))return!1;i=!0;continue}if(""!==c){let t;t=a>o?"":s[a+1].toLowerCase();const e=8&r?t:null;if(e&&-1!==yr(e,c,0)||2&r&&c!==t){if(br(r))return!1;i=!0}}}}else{if(!i&&!br(r)&&!br(u))return!1;if(i&&br(u))continue;i=!1,r=u|1&r}}return br(r)||i}function br(t){return 0==(1&t)}function Cr(t,e,n,r){if(null===e)return-1;let s=0;if(r||!n){let n=!1;for(;s<e.length;){const r=e[s];if(r===t)return s;if(3===r||6===r)n=!0;else{if(1===r||2===r){let t=e[++s];for(;"string"==typeof t;)t=e[++s];continue}if(4===r)break;if(0===r){s+=4;continue}}s+=n?1:2}return-1}return function(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){const r=t[n];if("number"==typeof r)return-1;if(r===e)return n;n++}return-1}(e,t)}function xr(t,e,n=!1){for(let r=0;r<e.length;r++)if(wr(t,e[r],n))return!0;return!1}function Er(t,e){return t?":not("+e.trim()+")":e}function Tr(t){let e=t[0],n=1,r=2,s="",o=!1;for(;n<t.length;){let i=t[n];if("string"==typeof i)if(2&r){const e=t[++n];s+="["+i+(e.length>0?'="'+e+'"':"")+"]"}else 8&r?s+="."+i:4&r&&(s+=" "+i);else""===s||br(i)||(e+=Er(o,s),s=""),r=i,o=o||!br(r);n++}return""!==s&&(e+=Er(o,s)),e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const kr={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ir(t){Sr(Se(),Ie(),qe()+t,Pe())}function Sr(t,e,n,r){if(!r)if(3==(3&e[2])){const r=t.preOrderCheckHooks;null!==r&&on(e,r,n)}else{const r=t.preOrderHooks;null!==r&&ln(e,r,0,n)}Ge(n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ar(t,e){const n=t.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const s=n[r],o=n[r+1];if(-1!==o){const n=t.data[o];Re(s),n.contentQueries(2,e[o],o)}}}function Or(t,e,n,r,s,o,i,l,u,c){const a=e.blueprint.slice();return a[0]=s,a[2]=140|r,xe(a),a[3]=a[15]=t,a[8]=n,a[10]=i||t&&t[10],a[11]=l||t&&t[11],a[12]=u||t&&t[12]||null,a[9]=c||t&&t[9]||null,a[6]=o,a[16]=2==e.type?t[16]:a,a}function Dr(t,e,n,r,s){let o=t.data[e];if(null===o)o=function(t,e,n,r,s){const o=Oe(),i=je(),l=t.data[e]=function(t,e,n,r,s,o){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:e?e.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:s,attrs:o,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,i?o:o&&o.parent,n,e,r,s);return null===t.firstChild&&(t.firstChild=l),null!==o&&(i?null==o.child&&null!==l.parent&&(o.child=l):null===o.next&&(o.next=l)),l}(t,e,n,r,s),Te.lFrame.inI18n&&(o.flags|=64);else if(64&o.type){o.type=n,o.value=r,o.attrs=s;const t=function(){const t=Te.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}();o.injectorIndex=null===t?-1:t.injectorIndex}return De(o,!0),o}function jr(t,e,n,r){if(0===n)return-1;const s=e.length;for(let o=0;o<n;o++)e.push(r),t.blueprint.push(r),t.data.push(null);return s}function Pr(t,e,n){Be(e);try{const r=t.viewQuery;null!==r&&os(1,r,n);const s=t.template;null!==s&&Fr(t,e,s,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),t.staticContentQueries&&Ar(t,e),t.staticViewQueries&&os(2,t.viewQuery,n);const o=t.components;null!==o&&function(t,e){for(let n=0;n<e.length;n++)es(t,e[n])}(e,o)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0),r}finally{e[2]&=-5,We()}}function Nr(t,e,n,r){const s=e[2];if(256==(256&s))return;Be(e);const o=Pe();try{xe(e),Te.lFrame.bindingIndex=t.bindingStartIndex,null!==n&&Fr(t,e,n,2,r);const i=3==(3&s);if(!o)if(i){const n=t.preOrderCheckHooks;null!==n&&on(e,n,null)}else{const n=t.preOrderHooks;null!==n&&ln(e,n,0,null),un(e,0)}if(function(t){for(let e=Qn(t);null!==e;e=Jn(e)){if(!e[2])continue;const t=e[9];for(let e=0;e<t.length;e++){const n=t[e],r=n[3];0==(1024&n[2])&&Ee(r,1),n[2]|=1024}}}(e),function(t){for(let e=Qn(t);null!==e;e=Jn(e))for(let t=10;t<e.length;t++){const n=e[t],r=n[1];be(n)&&Nr(r,n,r.template,n[8])}}(e),null!==t.contentQueries&&Ar(t,e),!o)if(i){const n=t.contentCheckHooks;null!==n&&on(e,n)}else{const n=t.contentHooks;null!==n&&ln(e,n,1),un(e,1)}!function(t,e){const n=t.hostBindingOpCodes;if(null!==n)try{for(let t=0;t<n.length;t++){const r=n[t];if(r<0)Ge(~r);else{const s=r,o=n[++t],i=n[++t];Fe(o,s),i(2,e[s])}}}finally{Ge(-1)}}(t,e);const l=t.components;null!==l&&function(t,e){for(let n=0;n<e.length;n++)Xr(t,e[n])}(e,l);const u=t.viewQuery;if(null!==u&&os(2,u,r),!o)if(i){const n=t.viewCheckHooks;null!==n&&on(e,n)}else{const n=t.viewHooks;null!==n&&ln(e,n,2),un(e,2)}!0===t.firstUpdatePass&&(t.firstUpdatePass=!1),o||(e[2]&=-73),1024&e[2]&&(e[2]&=-1025,Ee(e[3],-1))}finally{We()}}function Mr(t,e,n,r){const s=e[10],o=!Pe(),i=4==(4&e[2]);try{o&&!i&&s.begin&&s.begin(),i&&Pr(t,e,r),Nr(t,e,n,r)}finally{o&&!i&&s.end&&s.end()}}function Fr(t,e,n,r,s){const o=qe();try{Ge(-1),2&r&&e.length>20&&Sr(t,e,20,Pe()),n(r,s)}finally{Ge(o)}}function Hr(t,e,n){ke()&&(function(t,e,n,r){const s=n.directiveStart,o=n.directiveEnd;t.firstCreatePass||Cn(n,e),$n(r,e);const i=n.initialInputs;for(let l=s;l<o;l++){const r=t.data[l],o=fe(r);o&&Qr(e,n,r);const u=Pn(e,t,l,n);$n(u,e),null!==i&&Jr(0,l-s,u,r,0,i),o&&(ve(n.index,e)[8]=u)}}(t,e,n,ge(n,e)),128==(128&n.flags)&&function(t,e,n){const r=n.directiveStart,s=n.directiveEnd,o=n.index,i=Te.lFrame.currentDirectiveIndex;try{Ge(o);for(let n=r;n<s;n++){const r=t.data[n],s=e[n];He(n),null===r.hostBindings&&0===r.hostVars&&null===r.hostAttrs||zr(r,s)}}finally{Ge(-1),He(i)}}(t,e,n))}function Rr(t,e,n=ge){const r=e.localNames;if(null!==r){let s=e.index+1;for(let o=0;o<r.length;o+=2){const i=r[o+1],l=-1===i?n(e,t):t[i];t[s++]=l}}}function Vr(t){const e=t.tView;return null===e||e.incompleteFirstPass?t.tView=Lr(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts):e}function Lr(t,e,n,r,s,o,i,l,u,c){const a=20+r,h=a+s,d=function(t,e){const n=[];for(let r=0;r<e;r++)n.push(r<t?null:kr);return n}(a,h),f="function"==typeof c?c():c;return d[1]={type:t,blueprint:d,template:n,queries:null,viewQuery:l,declTNode:e,data:d.slice().fill(null,a),bindingStartIndex:a,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof o?o():o,pipeRegistry:"function"==typeof i?i():i,firstChild:null,schemas:u,consts:f,incompleteFirstPass:!1}}function Br(t,e,n){for(let r in t)if(t.hasOwnProperty(r)){const s=t[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(e,s):n[r]=[e,s]}return n}function Zr(t,e,n,r){let s=!1;if(ke()){const o=function(t,e,n){const r=t.directiveRegistry;let s=null;if(r)for(let o=0;o<r.length;o++){const i=r[o];xr(n,i.selectors,!1)&&(s||(s=[]),kn(Cn(n,e),t,i.type),fe(i)?(Ur(t,n),s.unshift(i)):s.push(i))}return s}(t,e,n),i=null===r?null:{"":-1};if(null!==o){s=!0,qr(n,t.data.length,o.length);for(let t=0;t<o.length;t++){const e=o[t];e.providersResolver&&e.providersResolver(e)}let r=!1,l=!1,u=jr(t,e,o.length,null);for(let s=0;s<o.length;s++){const c=o[s];n.mergedAttrs=pn(n.mergedAttrs,c.hostAttrs),Gr(t,n,e,u,c),Wr(u,c,i),null!==c.contentQueries&&(n.flags|=8),null===c.hostBindings&&null===c.hostAttrs&&0===c.hostVars||(n.flags|=128);const a=c.type.prototype;!r&&(a.ngOnChanges||a.ngOnInit||a.ngDoCheck)&&((t.preOrderHooks||(t.preOrderHooks=[])).push(n.index),r=!0),l||!a.ngOnChanges&&!a.ngDoCheck||((t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n.index),l=!0),u++}!function(t,e){const n=e.directiveEnd,r=t.data,s=e.attrs,o=[];let i=null,l=null;for(let u=e.directiveStart;u<n;u++){const t=r[u],n=t.inputs,c=null===s||mr(e)?null:Kr(n,s);o.push(c),i=Br(n,u,i),l=Br(t.outputs,u,l)}null!==i&&(i.hasOwnProperty("class")&&(e.flags|=16),i.hasOwnProperty("style")&&(e.flags|=32)),e.initialInputs=o,e.inputs=i,e.outputs=l}(t,n)}i&&function(t,e,n){if(e){const r=t.localNames=[];for(let t=0;t<e.length;t+=2){const s=n[e[t+1]];if(null==s)throw new Ye("301",`Export of name '${e[t+1]}' not found!`);r.push(e[t],s)}}}(n,r,i)}return n.mergedAttrs=pn(n.mergedAttrs,n.attrs),s}function $r(t,e,n,r,s,o){const i=o.hostBindings;if(i){let n=t.hostBindingOpCodes;null===n&&(n=t.hostBindingOpCodes=[]);const o=~e.index;(function(t){let e=t.length;for(;e>0;){const n=t[--e];if("number"==typeof n&&n<0)return n}return 0})(n)!=o&&n.push(o),n.push(r,s,i)}}function zr(t,e){null!==t.hostBindings&&t.hostBindings(1,e)}function Ur(t,e){e.flags|=2,(t.components||(t.components=[])).push(e.index)}function Wr(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;fe(e)&&(n[""]=t)}}function qr(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function Gr(t,e,n,r,s){t.data[r]=s;const o=s.factory||(s.factory=Ke(s.type)),i=new hn(o,fe(s),null);t.blueprint[r]=i,n[r]=i,$r(t,e,0,r,jr(t,n,s.hostVars,kr),s)}function Qr(t,e,n){const r=ge(e,t),s=Vr(n),o=t[10],i=ns(t,Or(t,s,null,n.onPush?64:16,r,e,o,o.createRenderer(r,n),null,null));t[e.index]=i}function Jr(t,e,n,r,s,o){const i=o[e];if(null!==i){const t=r.setInput;for(let e=0;e<i.length;){const s=i[e++],o=i[e++],l=i[e++];null!==t?r.setInput(n,l,s,o):n[o]=l}}}function Kr(t,e){let n=null,r=0;for(;r<e.length;){const s=e[r];if(0!==s)if(5!==s){if("number"==typeof s)break;t.hasOwnProperty(s)&&(null===n&&(n=[]),n.push(s,t[s],e[r+1])),r+=2}else r+=2;else r+=4}return n}function Yr(t,e,n,r){return new Array(t,!0,!1,e,null,0,r,n,null,null)}function Xr(t,e){const n=ve(e,t);if(be(n)){const t=n[1];80&n[2]?Nr(t,n,t.template,n[8]):n[5]>0&&ts(n)}}function ts(t){for(let n=Qn(t);null!==n;n=Jn(n))for(let t=10;t<n.length;t++){const e=n[t];if(1024&e[2]){const t=e[1];Nr(t,e,t.template,e[8])}else e[5]>0&&ts(e)}const e=t[1].components;if(null!==e)for(let n=0;n<e.length;n++){const r=ve(e[n],t);be(r)&&r[5]>0&&ts(r)}}function es(t,e){const n=ve(e,t),r=n[1];!function(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])}(r,n),Pr(r,n,n[8])}function ns(t,e){return t[13]?t[14][4]=e:t[13]=e,t[14]=e,e}function rs(t,e,n){const r=e[10];r.begin&&r.begin();try{Nr(t,e,t.template,n)}catch(s){throw function(t,e){const n=t[9],r=n?n.get(Zn,null):null;r&&r.handleError(e)}(e,s),s}finally{r.end&&r.end()}}function ss(t){!function(t){for(let e=0;e<t.components.length;e++){const n=t.components[e],r=we(n),s=r[1];Mr(s,r,s.template,n)}}(t[8])}function os(t,e,n){Re(0),e(t,n)}const is=(()=>Promise.resolve(null))();function ls(t,e,n,r,s){for(let o=0;o<n.length;){const i=n[o++],l=n[o++],u=e[i],c=t.data[i];null!==c.setInput?c.setInput(u,s,r,l):u[l]=s}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function us(t,e,n){let r=n?t.styles:null,s=n?t.classes:null,o=0;if(null!==e)for(let i=0;i<e.length;i++){const t=e[i];"number"==typeof t?o=t:1==o?s=nt(s,t):2==o&&(r=nt(r,t+": "+e[++i]+";"))}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=s:t.classesWithoutHost=s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const cs=new ft("INJECTOR",-1);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class as{get(t,e=Xt){if(e===Xt){const e=new Error(`NullInjectorError: No provider for ${et(t)}!`);throw e.name="NullInjectorError",e}return e}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const hs=new ft("Set Injector scope."),ds={},fs={},ps=[];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let _s=void 0;function ys(){return void 0===_s&&(_s=new as),_s}function gs(t,e=null,n=null,r){return new ms(t,n,e||ys(),r)}class ms{constructor(t,e,n,r=null){this.parent=n,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const s=[];e&&Et(e,n=>this.processProvider(n,t,e)),Et([t],t=>this.processInjectorType(t,[],s)),this.records.set(cs,ws(void 0,this));const o=this.records.get(hs);this.scope=null!=o?o.value:null,this.source=r||("object"==typeof t?null:et(t))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(t=>t.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(t,e=Xt,n=Qt.Default){this.assertNotDestroyed();const r=re(this);try{if(!(n&Qt.SkipSelf)){let e=this.records.get(t);if(void 0===e){const n=("function"==typeof(s=t)||"object"==typeof s&&s instanceof ft)&&it(t);e=n&&this.injectableDefInScope(n)?ws(vs(t),ds):null,this.records.set(t,e)}if(null!=e)return this.hydrate(t,e)}return(n&Qt.Self?ys():this.parent).get(t,e=n&Qt.Optional&&e===Xt?null:e)}catch(o){if("NullInjectorError"===o.name){if((o.ngTempTokenPath=o.ngTempTokenPath||[]).unshift(et(t)),r)throw o;return function(t,e,n,r){const s=t.ngTempTokenPath;throw e.__source&&s.unshift(e.__source),t.message=function(t,e,n,r=null){t=t&&"\n"===t.charAt(0)&&"\u0275"==t.charAt(1)?t.substr(2):t;let s=et(e);if(Array.isArray(e))s=e.map(et).join(" -> ");else if("object"==typeof e){let t=[];for(let n in e)if(e.hasOwnProperty(n)){let r=e[n];t.push(n+":"+("string"==typeof r?JSON.stringify(r):et(r)))}s=`{${t.join(", ")}}`}return`${n}${r?"("+r+")":""}[${s}]: ${t.replace(te,"\n  ")}`}("\n"+t.message,s,n,r),t.ngTokenPath=s,t.ngTempTokenPath=null,t}(o,t,"R3InjectorError",this.source)}throw o}finally{re(r)}var s;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(t=>this.get(t))}toString(){const t=[];return this.records.forEach((e,n)=>t.push(et(n))),`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(t,e,n){if(!(t=Ct(t)))return!1;let r=ut(t);const s=null==r&&t.ngModule||void 0,o=void 0===s?t:s,i=-1!==n.indexOf(o);if(void 0!==s&&(r=ut(s)),null==r)return!1;if(null!=r.imports&&!i){let t;n.push(o);try{Et(r.imports,r=>{this.processInjectorType(r,e,n)&&(void 0===t&&(t=[]),t.push(r))})}finally{}if(void 0!==t)for(let e=0;e<t.length;e++){const{ngModule:n,providers:r}=t[e];Et(r,t=>this.processProvider(t,n,r||ps))}}this.injectorDefTypes.add(o),this.records.set(o,ws(r.factory,ds));const l=r.providers;if(null!=l&&!i){const e=t;Et(l,t=>this.processProvider(t,e,l))}return void 0!==s&&void 0!==t.providers}processProvider(t,e,n){let r=Cs(t=Ct(t))?t:Ct(t&&t.provide);const s=function(t,e,n){return bs(t)?ws(void 0,t.useValue):ws(function(t,e,n){let r=void 0;if(Cs(t)){const e=Ct(t);return Ke(e)||vs(e)}if(bs(t))r=()=>Ct(t.useValue);else if((s=t)&&s.useFactory)r=()=>t.useFactory(...ie(t.deps||[]));else if(function(t){return!(!t||!t.useExisting)}(t))r=()=>oe(Ct(t.useExisting));else{const e=Ct(t&&(t.useClass||t.provide));if(!function(t){return!!t.deps}(t))return Ke(e)||vs(e);r=()=>new e(...ie(t.deps))}var s;return r}(t),ds)}(t);if(Cs(t)||!0!==t.multi)this.records.get(r);else{let e=this.records.get(r);e||(e=ws(void 0,ds,!0),e.factory=()=>ie(e.multi),this.records.set(r,e)),r=t,e.multi.push(t)}this.records.set(r,s)}hydrate(t,e){var n;return e.value===ds&&(e.value=fs,e.value=e.factory()),"object"==typeof e.value&&e.value&&null!==(n=e.value)&&"object"==typeof n&&"function"==typeof n.ngOnDestroy&&this.onDestroy.add(e.value),e.value}injectableDefInScope(t){return!!t.providedIn&&("string"==typeof t.providedIn?"any"===t.providedIn||t.providedIn===this.scope:this.injectorDefTypes.has(t.providedIn))}}function vs(t){const e=it(t),n=null!==e?e.factory:Ke(t);if(null!==n)return n;const r=ut(t);if(null!==r)return r.factory;if(t instanceof ft)throw new Error(`Token ${et(t)} is missing a \u0275prov definition.`);if(t instanceof Function)return function(t){const e=t.length;if(e>0){const n=function(t,e){const n=[];for(let r=0;r<t;r++)n.push("?");return n}(e);throw new Error(`Can't resolve all parameters for ${et(t)}: (${n.join(", ")}).`)}const n=function(t){const e=t&&(t[ct]||t[ht]);if(e){const n=function(t){if(t.hasOwnProperty("name"))return t.name;const e=(""+t).match(/^function\s*([^\s(]+)/);return null===e?"":e[1]}(t);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),e}return null}(t);return null!==n?()=>n.factory(t):()=>new t}(t);throw new Error("unreachable")}function ws(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function bs(t){return null!==t&&"object"==typeof t&&ee in t}function Cs(t){return"function"==typeof t}const xs=function(t,e,n){return function(t,e=null,n=null,r){const s=gs(t,e,n,r);return s._resolveInjectorDefTypes(),s}({name:n},e,t,n)};let Es=(()=>{class t{static create(t,e){return Array.isArray(t)?xs(t,e,""):xs(t.providers,t.parent,t.name||"")}}return t.THROW_IF_NOT_FOUND=Xt,t.NULL=new as,t.\u0275prov=st({token:t,providedIn:"any",factory:()=>oe(cs)}),t.__NG_ELEMENT_ID__=-1,t})();function Ts(t,e){sn(we(t)[1],Ae())}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let ks=null;function Is(){if(!ks){const t=vt.Symbol;if(t&&t.iterator)ks=t.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let e=0;e<t.length;++e){const n=t[e];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(ks=n)}}}return ks}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ss(t){return!!As(t)&&(Array.isArray(t)||!(t instanceof Map)&&Is()in t)}function As(t){return null!==t&&("function"==typeof t||"object"==typeof t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Os(t,e,n){return!Object.is(t[e],n)&&(t[e]=n,!0)}function Ds(t,e,n,r,s,o,i,l){const u=Ie(),c=Se(),a=t+20,h=c.firstCreatePass?
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(t,e,n,r,s,o,i,l,u){const c=e.consts,a=Dr(e,t,4,i||null,Ce(c,l));Zr(e,n,a,Ce(c,u)),sn(e,a);const h=a.tViews=Lr(2,a,r,s,o,e.directiveRegistry,e.pipeRegistry,null,e.schemas,c);return null!==e.queries&&(e.queries.template(e,a),h.queries=e.queries.embeddedTView(a)),a}(a,c,u,e,n,r,s,o,i):c.data[a];De(h,!1);const d=u[11].createComment("");ur(c,u,d,h),$n(d,u),ns(u,u[a]=Yr(d,u,d,h)),de(h)&&Hr(c,u,h),null!=i&&Rr(u,h,l)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function js(t,e=Qt.Default){const n=Ie();return null===n?oe(t,e):An(Ae(),n,Ct(t),e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ps(t,e,n){const r=Ie();return Os(r,Me(),e)&&function(t,e,n,r,s,o,i,l){const u=ge(e,n);let c,a=e.inputs;var h;null!=a&&(c=a[r])?(ls(t,n,c,r,s),he(e)&&function(t,e){const n=ve(e,t);16&n[2]||(n[2]|=64)}(n,e.index)):3&e.type&&(r="class"===(h=r)?"className":"for"===h?"htmlFor":"formaction"===h?"formAction":"innerHtml"===h?"innerHTML":"readonly"===h?"readOnly":"tabindex"===h?"tabIndex":h,s=null!=i?i(s,e.value||"",r):s,pe(o)?o.setProperty(u,r,s):fn(r)||(u.setProperty?u.setProperty(r,s):u[r]=s))}(Se(),function(){const t=Te.lFrame;return me(t.tView,t.selectedIndex)}(),r,t,e,r[11],n),Ps}function Ns(t,e,n,r,s){const o=s?"class":"style";ls(t,n,e.inputs[o],o,r)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ms(t,e,n,r){const s=Ie(),o=Se(),i=20+t,l=s[11],u=s[i]=Xn(l,e,Te.lFrame.currentNamespace),c=o.firstCreatePass?function(t,e,n,r,s,o,i){const l=e.consts,u=Dr(e,t,2,s,Ce(l,o));return Zr(e,n,u,Ce(l,i)),null!==u.attrs&&us(u,u.attrs,!1),null!==u.mergedAttrs&&us(u,u.mergedAttrs,!0),null!==e.queries&&e.queries.elementStart(e,u),u}(i,o,s,0,e,n,r):o.data[i];De(c,!0);const a=c.mergedAttrs;null!==a&&dn(l,u,a);const h=c.classes;null!==h&&_r(l,u,h);const d=c.styles;null!==d&&pr(l,u,d),64!=(64&c.flags)&&ur(o,s,u,c),0===Te.lFrame.elementDepthCount&&$n(u,s),Te.lFrame.elementDepthCount++,de(c)&&(Hr(o,s,c),function(t,e,n){if(ae(e)){const r=e.directiveEnd;for(let s=e.directiveStart;s<r;s++){const e=t.data[s];e.contentQueries&&e.contentQueries(1,n[s],s)}}}(o,c,s)),null!==r&&Rr(s,c)}function Fs(){let t=Ae();je()?Te.lFrame.isParent=!1:(t=t.parent,De(t,!1));const e=t;Te.lFrame.elementDepthCount--;const n=Se();n.firstCreatePass&&(sn(n,t),ae(t)&&n.queries.elementEnd(t)),null!=e.classesWithoutHost&&function(t){return 0!=(16&t.flags)}(e)&&Ns(n,e,Ie(),e.classesWithoutHost,!0),null!=e.stylesWithoutHost&&function(t){return 0!=(32&t.flags)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e)&&Ns(n,e,Ie(),e.stylesWithoutHost,!1)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Hs(t){return!!t&&"function"==typeof t.then}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Rs(t,e=""){const n=Ie(),r=Se(),s=t+20,o=r.firstCreatePass?Dr(r,s,1,e,null):r.data[s],i=n[s]=function(t,e){return pe(t)?t.createText(e):t.createTextNode(e)}(n[11],e);ur(r,n,i,o),De(o,!1)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Vs(t){return Ls("",t,""),Vs}function Ls(t,e,n){const r=Ie(),s=function(t,e,n,r){return Os(t,Me(),n)?e+qt(n)+r:kr}(r,t,e,n);return s!==kr&&function(t,e,n){const r=function(t,e){return ye(e[t])}(e,t);!function(t,e,n){pe(t)?t.setValue(e,n):e.textContent=n}(t[11],r,n)}(r,qe(),s),Ls}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Bs=void 0;var Zs=["en",[["a","p"],["AM","PM"],Bs],[["AM","PM"],Bs,Bs],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Bs,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Bs,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Bs,"{1} 'at' {0}",Bs],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(t){let e=Math.floor(Math.abs(t)),n=t.toString().replace(/^[^.]*\.?/,"").length;return 1===e&&0===n?1:5}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let $s={};function zs(t){return t in $s||($s[t]=vt.ng&&vt.ng.common&&vt.ng.common.locales&&vt.ng.common.locales[t]),$s[t]}var Us=function(t){return t[t.LocaleId=0]="LocaleId",t[t.DayPeriodsFormat=1]="DayPeriodsFormat",t[t.DayPeriodsStandalone=2]="DayPeriodsStandalone",t[t.DaysFormat=3]="DaysFormat",t[t.DaysStandalone=4]="DaysStandalone",t[t.MonthsFormat=5]="MonthsFormat",t[t.MonthsStandalone=6]="MonthsStandalone",t[t.Eras=7]="Eras",t[t.FirstDayOfWeek=8]="FirstDayOfWeek",t[t.WeekendRange=9]="WeekendRange",t[t.DateFormat=10]="DateFormat",t[t.TimeFormat=11]="TimeFormat",t[t.DateTimeFormat=12]="DateTimeFormat",t[t.NumberSymbols=13]="NumberSymbols",t[t.NumberFormats=14]="NumberFormats",t[t.CurrencyCode=15]="CurrencyCode",t[t.CurrencySymbol=16]="CurrencySymbol",t[t.CurrencyName=17]="CurrencyName",t[t.Currencies=18]="Currencies",t[t.Directionality=19]="Directionality",t[t.PluralCase=20]="PluralCase",t[t.ExtraData=21]="ExtraData",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Ws="en-US";function qs(t){var e,n;n="Expected localeId to be defined",null==(e=t)&&function(t,e,n,r){throw new Error("ASSERTION ERROR: "+t+` [Expected=> null != ${e} <=Actual]`)}(n,e),"string"==typeof t&&(Ws=t.toLowerCase().replace(/_/g,"-"))}class Gs{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Qs{resolveComponentFactory(t){throw function(t){const e=Error(`No component factory found for ${et(t)}. Did you add it to @NgModule.entryComponents?`);return e.ngComponent=t,e}(t)}}let Js=(()=>{class t{}return t.NULL=new Qs,t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ks(...t){}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ys(t,e){return new to(ge(t,e))}const Xs=function(){return Ys(Ae(),Ie())};let to=(()=>{class t{constructor(t){this.nativeElement=t}}return t.__NG_ELEMENT_ID__=Xs,t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class eo{}let no=(()=>{class t{}return t.\u0275prov=st({token:t,providedIn:"root",factory:()=>null}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ro{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const so=new ro("11.0.2");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class oo{constructor(){}supports(t){return Ss(t)}create(t){return new lo(t)}}const io=(t,e)=>e;class lo{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||io}forEachItem(t){let e;for(e=this._itHead;null!==e;e=e._next)t(e)}forEachOperation(t){let e=this._itHead,n=this._removalsHead,r=0,s=null;for(;e||n;){const o=!n||e&&e.currentIndex<ho(n,r,s)?e:n,i=ho(o,r,s),l=o.currentIndex;if(o===n)r--,n=n._nextRemoved;else if(e=e._next,null==o.previousIndex)r++;else{s||(s=[]);const t=i-r,e=l-r;if(t!=e){for(let n=0;n<t;n++){const r=n<s.length?s[n]:s[n]=0,o=r+n;e<=o&&o<t&&(s[n]=r+1)}s[o.previousIndex]=e-t}}i!==l&&t(o,i,l)}}forEachPreviousItem(t){let e;for(e=this._previousItHead;null!==e;e=e._nextPrevious)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)t(e)}forEachMovedItem(t){let e;for(e=this._movesHead;null!==e;e=e._nextMoved)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)t(e)}forEachIdentityChange(t){let e;for(e=this._identityChangesHead;null!==e;e=e._nextIdentityChange)t(e)}diff(t){if(null==t&&(t=[]),!Ss(t))throw new Error(`Error trying to diff '${et(t)}'. Only arrays and iterables are allowed`);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e,n,r,s=this._itHead,o=!1;if(Array.isArray(t)){this.length=t.length;for(let e=0;e<this.length;e++)n=t[e],r=this._trackByFn(e,n),null!==s&&Object.is(s.trackById,r)?(o&&(s=this._verifyReinsertion(s,n,r,e)),Object.is(s.item,n)||this._addIdentityChange(s,n)):(s=this._mismatch(s,n,r,e),o=!0),s=s._next}else e=0,function(t,e){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n]);else{const n=t[Is()]();let r;for(;!(r=n.next()).done;)e(r.value)}}(t,t=>{r=this._trackByFn(e,t),null!==s&&Object.is(s.trackById,r)?(o&&(s=this._verifyReinsertion(s,t,r,e)),Object.is(s.item,t)||this._addIdentityChange(s,t)):(s=this._mismatch(s,t,r,e),o=!0),s=s._next,e++}),this.length=e;return this._truncate(s),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,e,n,r){let s;return null===t?s=this._itTail:(s=t._prev,this._remove(t)),null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._moveAfter(t,s,r)):null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._reinsertAfter(t,s,r)):t=this._addAfter(new uo(e,n),s,r),t}_verifyReinsertion(t,e,n,r){let s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==s?t=this._reinsertAfter(s,t._prev,r):t.currentIndex!=r&&(t.currentIndex=r,this._addToMoves(t,r)),t}_truncate(t){for(;null!==t;){const e=t._next;this._addToRemovals(this._unlink(t)),t=e}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,e,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const r=t._prevRemoved,s=t._nextRemoved;return null===r?this._removalsHead=s:r._nextRemoved=s,null===s?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(t,e,n),this._addToMoves(t,n),t}_moveAfter(t,e,n){return this._unlink(t),this._insertAfter(t,e,n),this._addToMoves(t,n),t}_addAfter(t,e,n){return this._insertAfter(t,e,n),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,e,n){const r=null===e?this._itHead:e._next;return t._next=r,t._prev=e,null===r?this._itTail=t:r._prev=t,null===e?this._itHead=t:e._next=t,null===this._linkedRecords&&(this._linkedRecords=new ao),this._linkedRecords.put(t),t.currentIndex=n,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const e=t._prev,n=t._next;return null===e?this._itHead=n:e._next=n,null===n?this._itTail=e:n._prev=e,t}_addToMoves(t,e){return t.previousIndex===e||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new ao),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,e){return t.item=e,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class uo{constructor(t,e){this.item=t,this.trackById=e,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class co{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,e){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===e||e<=n.currentIndex)&&Object.is(n.trackById,t))return n;return null}remove(t){const e=t._prevDup,n=t._nextDup;return null===e?this._head=n:e._nextDup=n,null===n?this._tail=e:n._prevDup=e,null===this._head}}class ao{constructor(){this.map=new Map}put(t){const e=t.trackById;let n=this.map.get(e);n||(n=new co,this.map.set(e,n)),n.add(t)}get(t,e){const n=this.map.get(t);return n?n.get(t,e):null}remove(t){const e=t.trackById;return this.map.get(e).remove(t)&&this.map.delete(e),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function ho(t,e,n){const r=t.previousIndex;if(null===r)return r;let s=0;return n&&r<n.length&&(s=n[r]),r+e+s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class fo{constructor(){}supports(t){return t instanceof Map||As(t)}create(){return new po}}class po{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let e;for(e=this._mapHead;null!==e;e=e._next)t(e)}forEachPreviousItem(t){let e;for(e=this._previousMapHead;null!==e;e=e._nextPrevious)t(e)}forEachChangedItem(t){let e;for(e=this._changesHead;null!==e;e=e._nextChanged)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)t(e)}diff(t){if(t){if(!(t instanceof Map||As(t)))throw new Error(`Error trying to diff '${et(t)}'. Only maps and objects are allowed`)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(t,(t,n)=>{if(e&&e.key===n)this._maybeAddToChanges(e,t),this._appendAfter=e,e=e._next;else{const r=this._getOrCreateRecordForKey(n,t);e=this._insertBeforeOrAppend(e,r)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let t=e;null!==t;t=t._nextRemoved)t===this._mapHead&&(this._mapHead=null),this._records.delete(t.key),t._nextRemoved=t._next,t.previousValue=t.currentValue,t.currentValue=null,t._prev=null,t._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,e){if(t){const n=t._prev;return e._next=t,e._prev=n,t._prev=e,n&&(n._next=e),t===this._mapHead&&(this._mapHead=e),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(t,e){if(this._records.has(t)){const n=this._records.get(t);this._maybeAddToChanges(n,e);const r=n._prev,s=n._next;return r&&(r._next=s),s&&(s._prev=r),n._next=null,n._prev=null,n}const n=new _o(t);return this._records.set(t,n),n.currentValue=e,this._addToAdditions(n),n}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,e){Object.is(e,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=e,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,e){t instanceof Map?t.forEach(e):Object.keys(t).forEach(n=>e(t[n],n))}}class _o{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}let yo=(()=>{class t{constructor(t){this.factories=t}static create(e,n){if(null!=n){const t=n.factories.slice();e=e.concat(t)}return new t(e)}static extend(e){return{provide:t,useFactory:n=>{if(!n)throw new Error("Cannot extend IterableDiffers without a parent injector");return t.create(e,n)},deps:[[t,new tt,new Y]]}}find(t){const e=this.factories.find(e=>e.supports(t));if(null!=e)return e;throw new Error(`Cannot find a differ supporting object '${t}' of type '${n=t,n.name||typeof n}'`);var n}}return t.\u0275prov=st({token:t,providedIn:"root",factory:()=>new t([new oo])}),t})(),go=(()=>{class t{constructor(t){this.factories=t}static create(e,n){if(n){const t=n.factories.slice();e=e.concat(t)}return new t(e)}static extend(e){return{provide:t,useFactory:n=>{if(!n)throw new Error("Cannot extend KeyValueDiffers without a parent injector");return t.create(e,n)},deps:[[t,new tt,new Y]]}}find(t){const e=this.factories.find(e=>e.supports(t));if(e)return e;throw new Error(`Cannot find a differ supporting object '${t}'`)}}return t.\u0275prov=st({token:t,providedIn:"root",factory:()=>new t([new fo])}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function mo(t,e,n,r,s=!1){for(;null!==n;){const o=e[n.index];if(null!==o&&r.push(ye(o)),ce(o))for(let t=10;t<o.length;t++){const e=o[t],n=e[1].firstChild;null!==n&&mo(e[1],e,n,r)}const i=n.type;if(8&i)mo(t,e,n.child,r);else if(32&i){const t=qn(n,e);let s;for(;s=t();)r.push(s)}else if(16&i){const t=e[16],s=t[6].projection[n.projection];if(Array.isArray(s))r.push(...s);else{const e=Gn(t);mo(e[1],e,s,r,!0)}}n=s?n.projectionNext:n.next}return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class vo{constructor(t,e){this._lView=t,this._cdRefInjectingView=e,this._appRef=null,this._viewContainerRef=null}get rootNodes(){const t=this._lView,e=t[1];return mo(e,t,e.firstChild,[])}get context(){return this._lView[8]}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._viewContainerRef){const t=this._viewContainerRef.indexOf(this);t>-1&&this._viewContainerRef.detach(t),this._viewContainerRef=null}nr(this._lView[1],this._lView)}onDestroy(t){!function(t,e,n,r){const s=(o=e)[7]||(o[7]=[]);var o;s.push(null),t.firstCreatePass&&function(t){return t.cleanup||(t.cleanup=[])}(t).push(r,s.length-1)}(this._lView[1],this._lView,0,t)}markForCheck(){!function(t){for(;t;){t[2]|=64;const e=Gn(t);if(0!=(512&t[2])&&!e)return t;t=e}}(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){rs(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(t,e,n){Ne(!0);try{rs(t,e,n)}finally{Ne(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(t){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._viewContainerRef=t}detachFromAppRef(){var t;this._appRef=null,dr(this._lView[1],t=this._lView,t[11],2,null,null)}attachToAppRef(t){if(this._viewContainerRef)throw new Error("This view is already attached to a ViewContainer!");this._appRef=t}}class wo extends vo{constructor(t){super(t),this._view=t}detectChanges(){ss(this._view)}checkNoChanges(){!function(t){Ne(!0);try{ss(t)}finally{Ne(!1)}}(this._view)}get context(){return null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const bo=[new fo],Co=new yo([new oo]),xo=new go(bo),Eo=function(){return t=Ae(),e=Ie(),4&t.type?new Io(e,t,Ys(t,e)):null;var t,e;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */};let To=(()=>{class t{}return t.__NG_ELEMENT_ID__=Eo,t})();const ko=To,Io=class extends ko{constructor(t,e,n){super(),this._declarationLView=t,this._declarationTContainer=e,this.elementRef=n}createEmbeddedView(t){const e=this._declarationTContainer.tViews,n=Or(this._declarationLView,e,t,16,null,e.declTNode,null,null,null,null);n[17]=this._declarationLView[this._declarationTContainer.index];const r=this._declarationLView[19];return null!==r&&(n[19]=r.createEmbeddedView(e)),Pr(e,n,t),new vo(n)}};class So{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ao=function(){return function(t,e){let n;const r=e[t.index];if(ce(r))n=r;else{let s;if(8&t.type)s=ye(r);else{const n=e[11];s=n.createComment("");const r=ge(t,e);sr(n,lr(n,r),s,function(t,e){return pe(t)?t.nextSibling(e):e.nextSibling}(n,r),!1)}e[t.index]=n=Yr(r,e,s,t),ns(e,n)}return new jo(n,t,e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(Ae(),Ie())};let Oo=(()=>{class t{}return t.__NG_ELEMENT_ID__=Ao,t})();const Do=Oo,jo=class extends Do{constructor(t,e,n){super(),this._lContainer=t,this._hostTNode=e,this._hostLView=n}get element(){return Ys(this._hostTNode,this._hostLView)}get injector(){return new Fn(this._hostTNode,this._hostLView)}get parentInjector(){const t=Tn(this._hostTNode,this._hostLView);if(yn(t)){const e=mn(t,this._hostLView),n=gn(t);return new Fn(e[1].data[n+8],e)}return new Fn(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const e=Po(this._lContainer);return null!==e&&e[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,e,n){const r=t.createEmbeddedView(e||{});return this.insert(r,n),r}createComponent(t,e,n,r,s){const o=n||this.parentInjector;if(!s&&null==t.ngModule&&o){const t=o.get(So,null);t&&(s=t)}const i=t.create(o,r,void 0,s);return this.insert(i.hostView,e),i}insert(t,e){const n=t._lView,r=n[1];if(ce(n[3])){const e=this.indexOf(t);if(-1!==e)this.detach(e);else{const e=n[3],r=new jo(e,e[6],e[3]);r.detach(r.indexOf(t))}}const s=this._adjustIndex(e),o=this._lContainer;!function(t,e,n,r){const s=10+r,o=n.length;r>0&&(n[s-1][4]=e),r<o-10?(e[4]=n[s],Tt(n,10+r,e)):(n.push(e),e[4]=null),e[3]=n;const i=e[17];null!==i&&n!==i&&function(t,e){const n=t[9];e[16]!==e[3][3][16]&&(t[2]=!0),null===n?t[9]=[e]:n.push(e)}(i,e);const l=e[19];null!==l&&l.insertView(t),e[2]|=128}(r,n,o,s);const i=ar(s,o),l=n[11],u=lr(l,o[7]);return null!==u&&function(t,e,n,r,s,o){r[0]=s,r[6]=e,dr(t,r,n,1,s,o)}(r,o[6],l,n,u,i),t.attachToViewContainerRef(this),Tt(No(o),s,t),t}move(t,e){return this.insert(t,e)}indexOf(t){const e=Po(this._lContainer);return null!==e?e.indexOf(t):-1}remove(t){const e=this._adjustIndex(t,-1),n=er(this._lContainer,e);n&&(kt(No(this._lContainer),e),nr(n[1],n))}detach(t){const e=this._adjustIndex(t,-1),n=er(this._lContainer,e);return n&&null!=kt(No(this._lContainer),e)?new vo(n):null}_adjustIndex(t,e=0){return null==t?this.length+e:t}};function Po(t){return t[8]}function No(t){return t[8]||(t[8]=[])}const Mo={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Fo extends Js{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const e=Ut(t);return new Vo(e,this.ngModule)}}function Ho(t){const e=[];for(let n in t)t.hasOwnProperty(n)&&e.push({propName:t[n],templateName:n});return e}const Ro=new ft("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>zn});class Vo extends Gs{constructor(t,e){super(),this.componentDef=t,this.ngModule=e,this.componentType=t.type,this.selector=t.selectors.map(Tr).join(","),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!e}get inputs(){return Ho(this.componentDef.inputs)}get outputs(){return Ho(this.componentDef.outputs)}create(t,e,n,r){const s=(r=r||this.ngModule)?function(t,e){return{get:(n,r,s)=>{const o=t.get(n,Mo,s);return o!==Mo||r===Mo?o:e.get(n,r,s)}}}(t,r.injector):t,o=s.get(eo,_e),i=s.get(no,null),l=o.createRenderer(null,this.componentDef),u=this.componentDef.selectors[0][0]||"div",c=n?function(t,e,n){if(pe(t))return t.selectRootElement(e,n===It.ShadowDom);let r="string"==typeof e?t.querySelector(e):e;return r.textContent="",r}(l,n,this.componentDef.encapsulation):Xn(o.createRenderer(null,this.componentDef),u,function(t){const e=t.toLowerCase();return"svg"===e?"http://www.w3.org/2000/svg":"math"===e?"http://www.w3.org/1998/MathML/":null}(u)),a=this.componentDef.onPush?576:528,h={components:[],scheduler:zn,clean:is,playerHandler:null,flags:0},d=Lr(0,null,null,1,0,null,null,null,null,null),f=Or(null,d,h,a,null,null,o,l,i,s);let p,_;Be(f);try{const t=function(t,e,n,r,s,o){const i=n[1];n[20]=t;const l=Dr(i,20,2,"#host",null),u=l.mergedAttrs=e.hostAttrs;null!==u&&(us(l,u,!0),null!==t&&(dn(s,t,u),null!==l.classes&&_r(s,t,l.classes),null!==l.styles&&pr(s,t,l.styles)));const c=r.createRenderer(t,e),a=Or(n,Vr(e),null,e.onPush?64:16,n[20],l,r,c,null,null);return i.firstCreatePass&&(kn(Cn(l,n),i,e.type),Ur(i,l),qr(l,n.length,1)),ns(n,a),n[20]=a}(c,this.componentDef,f,o,l);if(c)if(n)dn(l,c,["ng-version",so.full]);else{const{attrs:t,classes:e}=function(t){const e=[],n=[];let r=1,s=2;for(;r<t.length;){let o=t[r];if("string"==typeof o)2===s?""!==o&&e.push(o,t[++r]):8===s&&n.push(o);else{if(!br(s))break;s=o}r++}return{attrs:e,classes:n}}(this.componentDef.selectors[0]);t&&dn(l,c,t),e&&e.length>0&&_r(l,c,e.join(" "))}if(_=me(d,20),void 0!==e){const t=_.projection=[];for(let n=0;n<this.ngContentSelectors.length;n++){const r=e[n];t.push(null!=r?Array.from(r):null)}}p=function(t,e,n,r,s){const o=n[1],i=function(t,e,n){const r=Ae();t.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Gr(t,r,e,jr(t,e,1,null),n));const s=Pn(e,t,r.directiveStart,r);$n(s,e);const o=ge(r,e);return o&&$n(o,e),s}(o,n,e);if(r.components.push(i),t[8]=i,s&&s.forEach(t=>t(i,e)),e.contentQueries){const t=Ae();e.contentQueries(1,i,t.directiveStart)}const l=Ae();return!o.firstCreatePass||null===e.hostBindings&&null===e.hostAttrs||(Ge(l.index),$r(n[1],l,0,l.directiveStart,l.directiveEnd,e),zr(e,i)),i}(t,this.componentDef,f,h,[Ts]),Pr(d,f,null)}finally{We()}return new Lo(this.componentType,p,Ys(_,f),f,_)}}class Lo extends
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class{}{constructor(t,e,n,r,s){super(),this.location=n,this._rootLView=r,this._tNode=s,this.destroyCbs=[],this.instance=e,this.hostView=this.changeDetectorRef=new wo(r),this.componentType=t}get injector(){return new Fn(this._tNode,this._rootLView)}destroy(){this.destroyCbs&&(this.destroyCbs.forEach(t=>t()),this.destroyCbs=null,!this.hostView.destroyed&&this.hostView.destroy())}onDestroy(t){this.destroyCbs&&this.destroyCbs.push(t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Bo=new Map;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Zo extends So{constructor(t,e){super(),this._parent=e,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new Fo(this);const n=Wt(t),r=t[Nt]||null;r&&qs(r),this._bootstrapComponents=Un(n.bootstrap),this._r3Injector=gs(t,e,[{provide:So,useValue:this},{provide:Js,useValue:this.componentFactoryResolver}],et(t)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(t)}get(t,e=Es.THROW_IF_NOT_FOUND,n=Qt.Default){return t===Es||t===So||t===cs?this:this._r3Injector.get(t,e,n)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class $o extends class{}{constructor(t){super(),this.moduleType=t,null!==Wt(t)&&function(t){const e=new Set;!function t(n){const r=Wt(n,!0),s=r.id;null!==s&&(function(t,e,n){if(e&&e!==n)throw new Error(`Duplicate module registered for ${t} - ${et(e)} vs ${et(e.name)}`)}(s,Bo.get(s),n),Bo.set(s,n));const o=Un(r.imports);for(const i of o)e.has(i)||(e.add(i),t(i))}(t)}(t)}create(t){return new Zo(this.moduleType,t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const zo=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class extends k{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,e,n){let r,s=t=>null,o=()=>null;t&&"object"==typeof t?(r=this.__isAsync?e=>{setTimeout(()=>t.next(e))}:e=>{t.next(e)},t.error&&(s=this.__isAsync?e=>{setTimeout(()=>t.error(e))}:e=>{t.error(e)}),t.complete&&(o=this.__isAsync?()=>{setTimeout(()=>t.complete())}:()=>{t.complete()})):(r=this.__isAsync?e=>{setTimeout(()=>t(e))}:e=>{t(e)},e&&(s=this.__isAsync?t=>{setTimeout(()=>e(t))}:t=>{e(t)}),n&&(o=this.__isAsync?()=>{setTimeout(()=>n())}:()=>{n()}));const i=super.subscribe(r,s,o);return t instanceof p&&t.add(i),i}},Uo=new ft("Application Initializer");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Wo=(()=>{class t{constructor(t){this.appInits=t,this.resolve=Ks,this.reject=Ks,this.initialized=!1,this.done=!1,this.donePromise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}runInitializers(){if(this.initialized)return;const t=[],e=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let n=0;n<this.appInits.length;n++){const e=this.appInits[n]();Hs(e)&&t.push(e)}Promise.all(t).then(()=>{e()}).catch(t=>{this.reject(t)}),0===t.length&&e(),this.initialized=!0}}return t.\u0275fac=function(e){return new(e||t)(oe(Uo,8))},t.\u0275prov=st({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const qo=new ft("AppId"),Go={provide:qo,useFactory:function(){return`${Qo()}${Qo()}${Qo()}`},deps:[]};function Qo(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Jo=new ft("Platform Initializer"),Ko=new ft("Platform ID"),Yo=new ft("appBootstrapListener");let Xo=(()=>{class t{log(t){console.log(t)}warn(t){console.warn(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=st({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ti=new ft("LocaleId"),ei=new ft("DefaultCurrencyCode");var ni=function(t){return t[t.Error=0]="Error",t[t.Warning=1]="Warning",t[t.Ignore=2]="Ignore",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ri{constructor(t,e){this.ngModuleFactory=t,this.componentFactories=e}}const si=function(t){return new $o(t)},oi=si,ii=function(t){return Promise.resolve(si(t))},li=function(t){const e=si(t),n=Un(Wt(t).declarations).reduce((t,e)=>{const n=Ut(e);return n&&t.push(new Vo(n)),t},[]);return new ri(e,n)},ui=li,ci=function(t){return Promise.resolve(li(t))};let ai=(()=>{class t{constructor(){this.compileModuleSync=oi,this.compileModuleAsync=ii,this.compileModuleAndAllComponentsSync=ui,this.compileModuleAndAllComponentsAsync=ci}clearCache(){}clearCacheFor(t){}getModuleId(t){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=st({token:t,factory:t.\u0275fac}),t})();const hi=new ft("compilerOptions"),di=(()=>Promise.resolve(0))();function fi(t){"undefined"==typeof Zone?di.then(()=>{t&&t.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class pi{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:e=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new zo(!1),this.onMicrotaskEmpty=new zo(!1),this.onStable=new zo(!1),this.onError=new zo(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched(),this._nesting=0,this._outer=this._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(this._inner=this._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(this._inner=this._inner.fork(Zone.longStackTraceZoneSpec)),this.shouldCoalesceEventChangeDetection=e,this.lastRequestAnimationFrameId=-1,this.nativeRequestAnimationFrame=function(){let t=vt.requestAnimationFrame,e=vt.cancelAnimationFrame;if("undefined"!=typeof Zone&&t&&e){const n=t[Zone.__symbol__("OriginalDelegate")];n&&(t=n);const r=e[Zone.__symbol__("OriginalDelegate")];r&&(e=r)}return{nativeRequestAnimationFrame:t,nativeCancelAnimationFrame:e}}().nativeRequestAnimationFrame,function(t){const e=!!t.shouldCoalesceEventChangeDetection&&t.nativeRequestAnimationFrame&&(()=>{!function(t){-1===t.lastRequestAnimationFrameId&&(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(vt,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,mi(t),gi(t)},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),mi(t))}(t)});t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0,maybeDelayChangeDetection:e},onInvokeTask:(n,r,s,o,i,l)=>{try{return vi(t),n.invokeTask(s,o,i,l)}finally{e&&"eventTask"===o.type&&e(),wi(t)}},onInvoke:(e,n,r,s,o,i,l)=>{try{return vi(t),e.invoke(r,s,o,i,l)}finally{wi(t)}},onHasTask:(e,n,r,s)=>{e.hasTask(r,s),n===r&&("microTask"==s.change?(t._hasPendingMicrotasks=s.microTask,mi(t),gi(t)):"macroTask"==s.change&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(e,n,r,s)=>(e.handleError(r,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}(this)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!pi.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(pi.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,e,n){return this._inner.run(t,e,n)}runTask(t,e,n,r){const s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,t,yi,_i,_i);try{return s.runTask(o,e,n)}finally{s.cancelTask(o)}}runGuarded(t,e,n){return this._inner.runGuarded(t,e,n)}runOutsideAngular(t){return this._outer.run(t)}}function _i(){}const yi={};function gi(t){if(0==t._nesting&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function mi(t){t.hasPendingMicrotasks=!!(t._hasPendingMicrotasks||t.shouldCoalesceEventChangeDetection&&-1!==t.lastRequestAnimationFrameId)}function vi(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function wi(t){t._nesting--,gi(t)}class bi{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new zo,this.onMicrotaskEmpty=new zo,this.onStable=new zo,this.onError=new zo}run(t,e,n){return t.apply(e,n)}runGuarded(t,e,n){return t.apply(e,n)}runOutsideAngular(t){return t()}runTask(t,e,n,r){return t.apply(e,n)}}let Ci=(()=>{class t{constructor(t){this._ngZone=t,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),t.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{pi.assertNotInAngularZone(),fi(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())fi(()=>{for(;0!==this._callbacks.length;){let t=this._callbacks.pop();clearTimeout(t.timeoutId),t.doneCb(this._didWork)}this._didWork=!1});else{let t=this.getPendingTasks();this._callbacks=this._callbacks.filter(e=>!e.updateCb||!e.updateCb(t)||(clearTimeout(e.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(t=>({source:t.source,creationLocation:t.creationLocation,data:t.data})):[]}addCallback(t,e,n){let r=-1;e&&e>0&&(r=setTimeout(()=>{this._callbacks=this._callbacks.filter(t=>t.timeoutId!==r),t(this._didWork,this.getPendingTasks())},e)),this._callbacks.push({doneCb:t,timeoutId:r,updateCb:n})}whenStable(t,e,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');this.addCallback(t,e,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(t,e,n){return[]}}return t.\u0275fac=function(e){return new(e||t)(oe(pi))},t.\u0275prov=st({token:t,factory:t.\u0275fac}),t})(),xi=(()=>{class t{constructor(){this._applications=new Map,ki.addToWindow(this)}registerApplication(t,e){this._applications.set(t,e)}unregisterApplication(t){this._applications.delete(t)}unregisterAllApplications(){this._applications.clear()}getTestability(t){return this._applications.get(t)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(t,e=!0){return ki.findTestabilityInTree(this,t,e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=st({token:t,factory:t.\u0275fac}),t})();class Ei{addToWindow(t){}findTestabilityInTree(t,e,n){return null}}let Ti,ki=new Ei;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ii=new ft("AllowMultipleToken");function Si(t,e,n=[]){const r="Platform: "+e,s=new ft(r);return(e=[])=>{let o=Ai();if(!o||o.injector.get(Ii,!1))if(t)t(n.concat(e).concat({provide:s,useValue:!0}));else{const t=n.concat(e).concat({provide:s,useValue:!0},{provide:hs,useValue:"platform"});!function(t){if(Ti&&!Ti.destroyed&&!Ti.injector.get(Ii,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");Ti=t.get(Oi);const e=t.get(Jo,null);e&&e.forEach(t=>t())}(Es.create({providers:t,name:r}))}return function(t){const e=Ai();if(!e)throw new Error("No platform exists!");if(!e.injector.get(t,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return e}(s)}}function Ai(){return Ti&&!Ti.destroyed?Ti:null}let Oi=(()=>{class t{constructor(t){this._injector=t,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(t,e){const n=function(t,e){let n;return n="noop"===t?new bi:("zone.js"===t?void 0:t)||new pi({enableLongStackTrace:Je(),shouldCoalesceEventChangeDetection:e}),n}(e?e.ngZone:void 0,e&&e.ngZoneEventCoalescing||!1),r=[{provide:pi,useValue:n}];return n.run(()=>{const e=Es.create({providers:r,parent:this.injector,name:t.moduleType.name}),s=t.create(e),o=s.injector.get(Zn,null);if(!o)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return s.onDestroy(()=>Pi(this._modules,s)),n.runOutsideAngular(()=>n.onError.subscribe({next:t=>{o.handleError(t)}})),function(t,e,n){try{const r=n();return Hs(r)?r.catch(n=>{throw e.runOutsideAngular(()=>t.handleError(n)),n}):r}catch(r){throw e.runOutsideAngular(()=>t.handleError(r)),r}}(o,n,()=>{const t=s.injector.get(Wo);return t.runInitializers(),t.donePromise.then(()=>(qs(s.injector.get(ti,"en-US")||"en-US"),this._moduleDoBootstrap(s),s))})})}bootstrapModule(t,e=[]){const n=Di({},e);return function(t,e,n){const r=new $o(n);return Promise.resolve(r)}(0,0,t).then(t=>this.bootstrapModuleFactory(t,n))}_moduleDoBootstrap(t){const e=t.injector.get(ji);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(t=>e.bootstrap(t));else{if(!t.instance.ngDoBootstrap)throw new Error(`The module ${et(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);t.instance.ngDoBootstrap(e)}this._modules.push(t)}onDestroy(t){this._destroyListeners.push(t)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(t=>t.destroy()),this._destroyListeners.forEach(t=>t()),this._destroyed=!0}get destroyed(){return this._destroyed}}return t.\u0275fac=function(e){return new(e||t)(oe(Es))},t.\u0275prov=st({token:t,factory:t.\u0275fac}),t})();function Di(t,e){return Array.isArray(e)?e.reduce(Di,t):Object.assign(Object.assign({},t),e)}let ji=(()=>{class t{constructor(t,e,n,r,s,o){this._zone=t,this._console=e,this._injector=n,this._exceptionHandler=r,this._componentFactoryResolver=s,this._initStatus=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._enforceNoNewChanges=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._enforceNoNewChanges=Je(),this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new b(t=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{t.next(this._stable),t.complete()})}),l=new b(t=>{let e;this._zone.runOutsideAngular(()=>{e=this._zone.onStable.subscribe(()=>{pi.assertNotInAngularZone(),fi(()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,t.next(!0))})})});const n=this._zone.onUnstable.subscribe(()=>{pi.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{t.next(!1)}))});return()=>{e.unsubscribe(),n.unsubscribe()}});this.isStable=function(...t){let e=Number.POSITIVE_INFINITY,n=null,r=t[t.length-1];var s;return(s=r)&&"function"==typeof s.schedule?(n=t.pop(),t.length>1&&"number"==typeof t[t.length-1]&&(e=t.pop())):"number"==typeof r&&(e=t.pop()),null===n&&1===t.length&&t[0]instanceof b?t[0]:function(t=Number.POSITIVE_INFINITY){return V(w,t)}(e)(function(t,e){return e?F(t,e):new b(O(t))}(t,n))}(i,l.pipe(t=>{return Z()((e=G,function(t){let n;n="function"==typeof e?e:function(){return e};const r=Object.create(t,W);return r.source=t,r.subjectFactory=n,r})(t));var e}))}bootstrap(t,e){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let n;n=t instanceof Gs?t:this._componentFactoryResolver.resolveComponentFactory(t),this.componentTypes.push(n.componentType);const r=n.isBoundToModule?void 0:this._injector.get(So),s=n.create(Es.NULL,[],e||n.selector,r);s.onDestroy(()=>{this._unloadComponent(s)});const o=s.injector.get(Ci,null);return o&&s.injector.get(xi).registerApplication(s.location.nativeElement,o),this._loadComponent(s),Je()&&this._console.log("Angular is running in development mode. Call enableProdMode() to enable production mode."),s}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let t of this._views)t.detectChanges();if(this._enforceNoNewChanges)for(let t of this._views)t.checkNoChanges()}catch(t){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(t))}finally{this._runningTick=!1}}attachView(t){const e=t;this._views.push(e),e.attachToAppRef(this)}detachView(t){const e=t;Pi(this._views,e),e.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(Yo,[]).concat(this._bootstrapListeners).forEach(e=>e(t))}_unloadComponent(t){this.detachView(t.hostView),Pi(this.components,t)}ngOnDestroy(){this._views.slice().forEach(t=>t.destroy())}get viewCount(){return this._views.length}}return t.\u0275fac=function(e){return new(e||t)(oe(pi),oe(Xo),oe(Es),oe(Zn),oe(Js),oe(Wo))},t.\u0275prov=st({token:t,factory:t.\u0275fac}),t})();function Pi(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Ni=Si(null,"core",[{provide:Ko,useValue:"unknown"},{provide:Oi,deps:[Es]},{provide:xi,deps:[]},{provide:Xo,deps:[]}]),Mi=[{provide:ji,useClass:ji,deps:[pi,Xo,Es,Zn,Js,Wo]},{provide:Ro,deps:[pi],useFactory:function(t){let e=[];return t.onStable.subscribe(()=>{for(;e.length;)e.pop()()}),function(t){e.push(t)}}},{provide:Wo,useClass:Wo,deps:[[new Y,Uo]]},{provide:ai,useClass:ai,deps:[]},Go,{provide:yo,useFactory:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){return Co},deps:[]},{provide:go,useFactory:function(){return xo},deps:[]},{provide:ti,useFactory:function(t){return qs(t=t||"undefined"!=typeof $localize&&$localize.locale||"en-US"),t},deps:[[new K(ti),new Y,new tt]]},{provide:ei,useValue:"USD"}];let Fi=(()=>{class t{constructor(t){}}return t.\u0275mod=Zt({type:t}),t.\u0275inj=ot({factory:function(e){return new(e||t)(oe(ji))},providers:Mi}),t})(),Hi=null;function Ri(){return Hi}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Vi=new ft("DocumentToken");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var Li=function(t){return t[t.Zero=0]="Zero",t[t.One=1]="One",t[t.Two=2]="Two",t[t.Few=3]="Few",t[t.Many=4]="Many",t[t.Other=5]="Other",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Bi{}let Zi=(()=>{class t extends Bi{constructor(t){super(),this.locale=t}getPluralCategory(t,e){switch(function(t){return function(t){const e=function(t){return t.toLowerCase().replace(/_/g,"-")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t);let n=zs(e);if(n)return n;const r=e.split("-")[0];if(n=zs(r),n)return n;if("en"===r)return Zs;throw new Error(`Missing locale data for the locale "${t}".`)}(t)[Us.PluralCase]}(e||this.locale)(t)){case Li.Zero:return"zero";case Li.One:return"one";case Li.Two:return"two";case Li.Few:return"few";case Li.Many:return"many";default:return"other"}}}return t.\u0275fac=function(e){return new(e||t)(oe(ti))},t.\u0275prov=st({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class $i{constructor(t,e,n,r){this.$implicit=t,this.ngForOf=e,this.index=n,this.count=r}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let zi=(()=>{class t{constructor(t,e,n){this._viewContainer=t,this._template=e,this._differs=n,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){Je()&&null!=t&&"function"!=typeof t&&console&&console.warn&&console.warn(`trackBy must be a function, but received ${JSON.stringify(t)}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`),this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;if(!this._differ&&n)try{this._differ=this._differs.find(n).create(this.ngForTrackBy)}catch(e){throw new Error(`Cannot find a differ supporting object '${n}' of type '${t=n,t.name||typeof t}'. NgFor only supports binding to Iterables such as Arrays.`)}}var t;if(this._differ){const t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){const e=[];t.forEachOperation((t,n,r)=>{if(null==t.previousIndex){const n=this._viewContainer.createEmbeddedView(this._template,new $i(null,this._ngForOf,-1,-1),null===r?void 0:r),s=new Ui(t,n);e.push(s)}else if(null==r)this._viewContainer.remove(null===n?void 0:n);else if(null!==n){const s=this._viewContainer.get(n);this._viewContainer.move(s,r);const o=new Ui(t,s);e.push(o)}});for(let n=0;n<e.length;n++)this._perViewChange(e[n].view,e[n].record);for(let n=0,r=this._viewContainer.length;n<r;n++){const t=this._viewContainer.get(n);t.context.index=n,t.context.count=r,t.context.ngForOf=this._ngForOf}t.forEachIdentityChange(t=>{this._viewContainer.get(t.currentIndex).context.$implicit=t.item})}_perViewChange(t,e){t.context.$implicit=e.item}static ngTemplateContextGuard(t,e){return!0}}return t.\u0275fac=function(e){return new(e||t)(js(Oo),js(To),js(yo))},t.\u0275dir=zt({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),t})();class Ui{constructor(t,e){this.record=t,this.view=e}}let Wi=(()=>{class t{}return t.\u0275mod=Zt({type:t}),t.\u0275inj=ot({factory:function(e){return new(e||t)},providers:[{provide:Bi,useClass:Zi}]}),t})();class qi extends
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license Angular v11.0.2
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class extends class{}{constructor(){super()}supportsDOMEvents(){return!0}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */{static makeCurrent(){var t;t=new qi,Hi||(Hi=t)}getProperty(t,e){return t[e]}log(t){window.console&&window.console.log&&window.console.log(t)}logGroup(t){window.console&&window.console.group&&window.console.group(t)}logGroupEnd(){window.console&&window.console.groupEnd&&window.console.groupEnd()}onAndCancel(t,e,n){return t.addEventListener(e,n,!1),()=>{t.removeEventListener(e,n,!1)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){return t.parentNode&&t.parentNode.removeChild(t),t}getValue(t){return t.value}createElement(t,e){return(e=e||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return"window"===e?window:"document"===e?t:"body"===e?t.body:null}getHistory(){return window.history}getLocation(){return window.location}getBaseHref(t){const e=Qi||(Qi=document.querySelector("base"),Qi)?Qi.getAttribute("href"):null;return null==e?null:(n=e,Gi||(Gi=document.createElement("a")),Gi.setAttribute("href",n),"/"===Gi.pathname.charAt(0)?Gi.pathname:"/"+Gi.pathname);var n;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}resetBaseElement(){Qi=null}getUserAgent(){return window.navigator.userAgent}performanceNow(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}supportsCookies(){return!0}getCookie(t){
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
return function(t,e){e=encodeURIComponent(e);for(const n of t.split(";")){const t=n.indexOf("="),[r,s]=-1==t?[n,""]:[n.slice(0,t),n.slice(t+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}(document.cookie,t)}}let Gi,Qi=null;const Ji=new ft("TRANSITION_ID"),Ki=[{provide:Uo,useFactory:function(t,e,n){return()=>{n.get(Wo).donePromise.then(()=>{const n=Ri();Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e=>e.getAttribute("ng-transition")===t).forEach(t=>n.remove(t))})}},deps:[Ji,Vi,Es],multi:!0}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Yi{static init(){var t;t=new Yi,ki=t}addToWindow(t){vt.getAngularTestability=(e,n=!0)=>{const r=t.findTestabilityInTree(e,n);if(null==r)throw new Error("Could not find testability for element.");return r},vt.getAllAngularTestabilities=()=>t.getAllTestabilities(),vt.getAllAngularRootElements=()=>t.getAllRootElements(),vt.frameworkStabilizers||(vt.frameworkStabilizers=[]),vt.frameworkStabilizers.push(t=>{const e=vt.getAllAngularTestabilities();let n=e.length,r=!1;const s=function(e){r=r||e,n--,0==n&&t(r)};e.forEach(function(t){t.whenStable(s)})})}findTestabilityInTree(t,e,n){if(null==e)return null;const r=t.getTestability(e);return null!=r?r:n?Ri().isShadowRoot(e)?this.findTestabilityInTree(t,e.host,!0):this.findTestabilityInTree(t,e.parentElement,!0):null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Xi=new ft("EventManagerPlugins");let tl=(()=>{class t{constructor(t,e){this._zone=e,this._eventNameToPlugin=new Map,t.forEach(t=>t.manager=this),this._plugins=t.slice().reverse()}addEventListener(t,e,n){return this._findPluginFor(e).addEventListener(t,e,n)}addGlobalEventListener(t,e,n){return this._findPluginFor(e).addGlobalEventListener(t,e,n)}getZone(){return this._zone}_findPluginFor(t){const e=this._eventNameToPlugin.get(t);if(e)return e;const n=this._plugins;for(let r=0;r<n.length;r++){const e=n[r];if(e.supports(t))return this._eventNameToPlugin.set(t,e),e}throw new Error("No event manager plugin found for event "+t)}}return t.\u0275fac=function(e){return new(e||t)(oe(Xi),oe(pi))},t.\u0275prov=st({token:t,factory:t.\u0275fac}),t})();class el{constructor(t){this._doc=t}addGlobalEventListener(t,e,n){const r=Ri().getGlobalEventTarget(this._doc,t);if(!r)throw new Error(`Unsupported event target ${r} for event ${e}`);return this.addEventListener(r,e,n)}}let nl=(()=>{class t{constructor(){this._stylesSet=new Set}addStyles(t){const e=new Set;t.forEach(t=>{this._stylesSet.has(t)||(this._stylesSet.add(t),e.add(t))}),this.onStylesAdded(e)}onStylesAdded(t){}getAllStyles(){return Array.from(this._stylesSet)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=st({token:t,factory:t.\u0275fac}),t})(),rl=(()=>{class t extends nl{constructor(t){super(),this._doc=t,this._hostNodes=new Set,this._styleNodes=new Set,this._hostNodes.add(t.head)}_addStylesToHost(t,e){t.forEach(t=>{const n=this._doc.createElement("style");n.textContent=t,this._styleNodes.add(e.appendChild(n))})}addHost(t){this._addStylesToHost(this._stylesSet,t),this._hostNodes.add(t)}removeHost(t){this._hostNodes.delete(t)}onStylesAdded(t){this._hostNodes.forEach(e=>this._addStylesToHost(t,e))}ngOnDestroy(){this._styleNodes.forEach(t=>Ri().remove(t))}}return t.\u0275fac=function(e){return new(e||t)(oe(Vi))},t.\u0275prov=st({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const sl={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},ol=/%COMP%/g;function il(t,e,n){for(let r=0;r<e.length;r++){let s=e[r];Array.isArray(s)?il(t,s,n):(s=s.replace(ol,t),n.push(s))}return n}function ll(t){return e=>{if("__ngUnwrap__"===e)return t;!1===t(e)&&(e.preventDefault(),e.returnValue=!1)}}let ul=(()=>{class t{constructor(t,e,n){this.eventManager=t,this.sharedStylesHost=e,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new cl(t)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;switch(e.encapsulation){case It.Emulated:{let n=this.rendererByCompId.get(e.id);return n||(n=new al(this.eventManager,this.sharedStylesHost,e,this.appId),this.rendererByCompId.set(e.id,n)),n.applyToHost(t),n}case 1:case It.ShadowDom:return new hl(this.eventManager,this.sharedStylesHost,t,e);default:if(!this.rendererByCompId.has(e.id)){const t=il(e.id,e.styles,[]);this.sharedStylesHost.addStyles(t),this.rendererByCompId.set(e.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return t.\u0275fac=function(e){return new(e||t)(oe(tl),oe(rl),oe(qo))},t.\u0275prov=st({token:t,factory:t.\u0275fac}),t})();class cl{constructor(t){this.eventManager=t,this.data=Object.create(null)}destroy(){}createElement(t,e){return e?document.createElementNS(sl[e]||e,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,e){t.appendChild(e)}insertBefore(t,e,n){t&&t.insertBefore(e,n)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let n="string"==typeof t?document.querySelector(t):t;if(!n)throw new Error(`The selector "${t}" did not match any elements`);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,r){if(r){e=r+":"+e;const s=sl[r];s?t.setAttributeNS(s,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){const r=sl[n];r?t.removeAttributeNS(r,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,r){r&(Wn.DashCase|Wn.Important)?t.style.setProperty(e,n,r&Wn.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&Wn.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t[e]=n}setValue(t,e){t.nodeValue=e}listen(t,e,n){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,e,ll(n)):this.eventManager.addEventListener(t,e,ll(n))}}class al extends cl{constructor(t,e,n,r){super(t),this.component=n;const s=il(r+"-"+n.id,n.styles,[]);e.addStyles(s),this.contentAttr="_ngcontent-%COMP%".replace(ol,r+"-"+n.id),this.hostAttr="_nghost-%COMP%".replace(ol,r+"-"+n.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,e){const n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}}class hl extends cl{constructor(t,e,n,r){super(t),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const s=il(r.id,r.styles,[]);for(let o=0;o<s.length;o++){const t=document.createElement("style");t.textContent=s[o],this.shadowRoot.appendChild(t)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}const dl=["alt","control","meta","shift"],fl={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},pl={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},_l={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},yl=[{provide:Ko,useValue:"browser"},{provide:Jo,useValue:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){qi.makeCurrent(),Yi.init()},multi:!0},{provide:Vi,useFactory:function(){return function(t){le=t}(document),document},deps:[]}],gl=[[],{provide:hs,useValue:"root"},{provide:Zn,useFactory:function(){return new Zn},deps:[]},{provide:Xi,useClass:(()=>{class t extends el{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,n){return t.addEventListener(e,n,!1),()=>this.removeEventListener(t,e,n)}removeEventListener(t,e,n){return t.removeEventListener(e,n)}}return t.\u0275fac=function(e){return new(e||t)(oe(Vi))},t.\u0275prov=st({token:t,factory:t.\u0275fac}),t})(),multi:!0,deps:[Vi,pi,Ko]},{provide:Xi,useClass:(()=>{class t extends el{constructor(t){super(t)}supports(e){return null!=t.parseEventName(e)}addEventListener(e,n,r){const s=t.parseEventName(n),o=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ri().onAndCancel(e,s.domEventName,o))}static parseEventName(e){const n=e.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const s=t._normalizeKey(n.pop());let o="";if(dl.forEach(t=>{const e=n.indexOf(t);e>-1&&(n.splice(e,1),o+=t+".")}),o+=s,0!=n.length||0===s.length)return null;const i={};return i.domEventName=r,i.fullKey=o,i}static getEventFullKey(t){let e="",n=function(t){let e=t.key;if(null==e){if(e=t.keyIdentifier,null==e)return"Unidentified";e.startsWith("U+")&&(e=String.fromCharCode(parseInt(e.substring(2),16)),3===t.location&&pl.hasOwnProperty(e)&&(e=pl[e]))}return fl[e]||e}(t);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),dl.forEach(r=>{r!=n&&(0,_l[r])(t)&&(e+=r+".")}),e+=n,e}static eventCallback(e,n,r){return s=>{t.getEventFullKey(s)===e&&r.runGuarded(()=>n(s))}}static _normalizeKey(t){switch(t){case"esc":return"escape";default:return t}}}return t.\u0275fac=function(e){return new(e||t)(oe(Vi))},t.\u0275prov=st({token:t,factory:t.\u0275fac}),t})(),multi:!0,deps:[Vi]},[],{provide:ul,useClass:ul,deps:[tl,rl,qo]},{provide:eo,useExisting:ul},{provide:nl,useExisting:rl},{provide:rl,useClass:rl,deps:[Vi]},{provide:Ci,useClass:Ci,deps:[pi]},{provide:tl,useClass:tl,deps:[Xi,pi]},[]];let ml=(()=>{class t{constructor(t){if(t)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(e){return{ngModule:t,providers:[{provide:qo,useValue:e.appId},{provide:Ji,useExisting:qo},Ki]}}}return t.\u0275mod=Zt({type:t}),t.\u0275inj=ot({factory:function(e){return new(e||t)(oe(t,12))},providers:gl,imports:[Wi,Fi]}),t})();"undefined"!=typeof window&&window;const vl=[{provide:ai,useFactory:()=>new ai}];function wl(t){for(let e=t.length-1;e>=0;e--)if(void 0!==t[e])return t[e]}function bl(t){const e=[];return t.forEach(t=>t&&e.push(...t)),e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Cl=Si(Ni,"coreDynamic",[{provide:hi,useValue:{},multi:!0},{provide:class{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */,useClass:class{constructor(t){this._defaultOptions=[{useJit:!0,defaultEncapsulation:It.Emulated,missingTranslation:ni.Warning},...t]}createCompiler(t=[]){const e={useJit:wl((n=this._defaultOptions.concat(t)).map(t=>t.useJit)),defaultEncapsulation:wl(n.map(t=>t.defaultEncapsulation)),providers:bl(n.map(t=>t.providers)),missingTranslation:wl(n.map(t=>t.missingTranslation)),preserveWhitespaces:wl(n.map(t=>t.preserveWhitespaces))};var n;return Es.create([vl,{provide:o,useFactory:()=>new o({useJit:e.useJit,jitDevMode:Je(),defaultEncapsulation:e.defaultEncapsulation,missingTranslation:e.missingTranslation,preserveWhitespaces:e.preserveWhitespaces}),deps:[]},e.providers]).get(ai)}},deps:[hi]}]);let xl=(()=>{class t extends s{get(t){let e,n;const r=new Promise((t,r)=>{e=t,n=r}),s=new XMLHttpRequest;return s.open("GET",t,!0),s.responseType="text",s.onload=function(){const r=s.response||s.responseText;let o=1223===s.status?204:s.status;0===o&&(o=r?200:0),200<=o&&o<=300?e(r):n("Failed to load "+t)},s.onerror=function(){n("Failed to load "+t)},s.send(),r}}return t.\u0275fac=function(e){return El(e||t)},t.\u0275prov=st({token:t,factory:t.\u0275fac}),t})();const El=Rn(xl),Tl=Si(Cl,"browserDynamic",[yl,{provide:hi,useValue:{providers:[{provide:s,useClass:xl,deps:[]}]},multi:!0},{provide:Ko,useValue:"browser"}]);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let kl=(()=>{class t{constructor(){this._accessors=[]}add(t,e){this._accessors.push([t,e])}remove(t){for(let e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===t)return void this._accessors.splice(e,1)}select(t){this._accessors.forEach(e=>{this._isSameGroup(e,t)&&e[1]!==t&&e[1].fireUncheck(t.value)})}_isSameGroup(t,e){return!!t[0].control&&t[0]._parent===e._control._parent&&t[1].name===e.name}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=st({token:t,factory:t.\u0275fac}),t})(),Il=(()=>{class t{}return t.\u0275mod=Zt({type:t}),t.\u0275inj=ot({factory:function(e){return new(e||t)}}),t})(),Sl=(()=>{class t{}return t.\u0275mod=Zt({type:t}),t.\u0275inj=ot({factory:function(e){return new(e||t)},providers:[kl],imports:[Il]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Al{constructor(){}getTables(){const t=[],e=this._randomInteger(3,10);for(let n=0;n<e;n++)t.push(this.getData());return t}getData(){const t=this._randomInteger(3,10),e=this._randomInteger(5,10),n=[];for(let r=0;r<t;r++){const t=[];for(let n=0;n<e;n++)t.push(this._randomInteger(1,100));n.push(t)}return n}_randomInteger(t,e){const n=t+Math.random()*(e+1-t);return Math.floor(n)}}function Ol(t,e){if(1&t&&(Ms(0,"th",7),Rs(1),Fs()),2&t){const t=e.index;Ir(1),Ls(" col",t," ")}}function Dl(t,e){if(1&t&&(Ms(0,"td"),Rs(1),Fs()),2&t){const t=e.$implicit;Ir(1),Vs(t)}}function jl(t,e){if(1&t&&(Ms(0,"tr"),Ms(1,"th",7),Rs(2),Fs(),Ds(3,Dl,2,1,"td",6),Fs()),2&t){const t=e.$implicit,n=e.index;Ir(2),Ls("row",n,""),Ir(1),Ps("ngForOf",t)}}function Pl(t,e){if(1&t&&(Ms(0,"table",4),Ms(1,"thead"),Ms(2,"tr"),Ms(3,"th",undefined,undefined),Fs(),Ds(4,Ol,2,1,"th",5),Fs(),Fs(),Ms(5,"tbody"),Ds(6,jl,4,2,"tr",6),Fs(),Fs()),2&t){const t=e.$implicit;Ir(4),Ps("ngForOf",t[0]),Ir(2),Ps("ngForOf",t)}}let Nl=(()=>{class t{ngOnInit(){this._tableData=new Al,this.tables=this._tableData.getTables()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Rt({type:t,selectors:[["purchase-app"]],decls:5,vars:1,consts:[[1,"tables-container","jumbotron"],[1,"display-4","h1"],[1,"container-fluid","lead"],["class","table table-striped",4,"ngFor","ngForOf"],[1,"table","table-striped"],["scope","col",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col"]],template:function(t,e){1&t&&(Ms(0,"div",0),Ms(1,"h1",1),Rs(2,"Tables"),Fs(),Ms(3,"div",2),Ds(4,Pl,7,2,"table",3),Fs(),Fs()),2&t&&(Ir(4),Ps("ngForOf",e.tables))},directives:[zi],styles:["[_ngcontent-%COMP%]:root{padding-top:0;padding-bottom:0}.jumbotron[_ngcontent-%COMP%]{margin-bottom:0;background-color:transparent}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6){background-color:#fff3cd}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2)   td[_ngcontent-%COMP%]:nth-child(6){background-color:#f8d7da}"]}),t})(),Ml=(()=>{class t{}return t.\u0275mod=Zt({type:t,bootstrap:[Nl]}),t.\u0275inj=ot({factory:function(e){return new(e||t)},imports:[[ml,Sl]]}),t})();Tl().bootstrapModule(Ml)},zn8P:function(t,e){function n(t){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,0]]]);
//# sourceMappingURL=main-es2015.6692c8e1d1f79624999d.js.map