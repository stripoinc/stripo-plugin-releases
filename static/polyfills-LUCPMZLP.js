var Be=null;function v(e){let t=Be;return Be=e,t}var ie={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function p(e){return typeof e=="function"}function U(e){let n=e(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var q=U(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function L(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var h=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let s of n)s.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(p(r))try{r()}catch(s){t=s instanceof q?s.errors:[s]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let s of o)try{Ue(s)}catch(i){t=t??[],i instanceof q?t=[...t,...i.errors]:t.push(i)}}if(t)throw new q(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Ue(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&L(n,t)}remove(t){let{_finalizers:n}=this;n&&L(n,t),t instanceof e&&t._removeParent(this)}};h.EMPTY=(()=>{let e=new h;return e.closed=!0,e})();var ae=h.EMPTY;function z(e){return e instanceof h||e&&"closed"in e&&p(e.remove)&&p(e.add)&&p(e.unsubscribe)}function Ue(e){p(e)?e():e.unsubscribe()}var g={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var D={setTimeout(e,t,...n){let{delegate:r}=D;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=D;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function qe(e){D.setTimeout(()=>{let{onUnhandledError:t}=g;if(t)t(e);else throw e})}function le(){}var ze=ce("C",void 0,void 0);function We(e){return ce("E",void 0,e)}function Ge(e){return ce("N",e,void 0)}function ce(e,t,n){return{kind:e,value:t,error:n}}var I=null;function C(e){if(g.useDeprecatedSynchronousErrorHandling){let t=!I;if(t&&(I={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:r}=I;if(I=null,n)throw r}}else e()}function Qe(e){g.useDeprecatedSynchronousErrorHandling&&I&&(I.errorThrown=!0,I.error=e)}var F=class extends h{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,z(t)&&t.add(this)):this.destination=zt}static create(t,n,r){return new T(t,n,r)}next(t){this.isStopped?de(Ge(t),this):this._next(t)}error(t){this.isStopped?de(We(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?de(ze,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Ut=Function.prototype.bind;function ue(e,t){return Ut.call(e,t)}var fe=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){W(r)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){W(r)}else W(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){W(n)}}},T=class extends F{constructor(t,n,r){super();let o;if(p(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let s;this&&g.useDeprecatedNextContext?(s=Object.create(t),s.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&ue(t.next,s),error:t.error&&ue(t.error,s),complete:t.complete&&ue(t.complete,s)}):o=t}this.destination=new fe(o)}};function W(e){g.useDeprecatedSynchronousErrorHandling?Qe(e):qe(e)}function qt(e){throw e}function de(e,t){let{onStoppedNotification:n}=g;n&&D.setTimeout(()=>n(e,t))}var zt={closed:!0,next:le,error:qt,complete:le};var Ze=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Ke(e){return e}function Ye(e){return e.length===0?Ke:e.length===1?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}var he=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){let r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){let s=Gt(n)?n:new T(n,r,o);return C(()=>{let{operator:i,source:a}=this;s.add(i?i.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return r=Je(r),new r((o,s)=>{let i=new T({next:a=>{try{n(a)}catch(l){s(l),i.unsubscribe()}},error:s,complete:o});this.subscribe(i)})}_subscribe(n){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(n)}[Ze](){return this}pipe(...n){return Ye(n)(this)}toPromise(n){return n=Je(n),new n((r,o)=>{let s;this.subscribe(i=>s=i,i=>o(i),()=>r(s))})}}return e.create=t=>new e(t),e})();function Je(e){var t;return(t=e??g.Promise)!==null&&t!==void 0?t:Promise}function Wt(e){return e&&p(e.next)&&p(e.error)&&p(e.complete)}function Gt(e){return e&&e instanceof F||Wt(e)&&z(e)}var Xe=U(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var b=(()=>{class e extends he{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let r=new G(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Xe}next(n){C(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(n)}})}error(n){C(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){C(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:r,isStopped:o,observers:s}=this;return r||o?ae:(this.currentObservers=null,s.push(n),new h(()=>{this.currentObservers=null,L(s,n)}))}_checkFinalizedStatuses(n){let{hasError:r,thrownError:o,isStopped:s}=this;r?n.error(o):s&&n.complete()}asObservable(){let n=new he;return n.source=this,n}}return e.create=(t,n)=>new G(t,n),e})(),G=class extends b{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,t)}error(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&r!==void 0?r:ae}};var j=class extends b{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}};var d=class extends Error{constructor(t,n){super(Qt(t,n)),this.code=t}};function Qt(e,t){return`${`NG0${Math.abs(e)}`}${t?": "+t:""}`}function u(e){for(let t in e)if(e[t]===u)return t;throw Error("Could not find renamed property on target object.")}function y(e){if(typeof e=="string")return e;if(Array.isArray(e))return"["+e.map(y).join(", ")+"]";if(e==null)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;let t=e.toString();if(t==null)return""+t;let n=t.indexOf(`
`);return n===-1?t:t.substring(0,n)}var Zt=u({__forward_ref__:u});function pt(e){return e.__forward_ref__=pt,e.toString=function(){return y(this())},e}function m(e){return Kt(e)?e():e}function Kt(e){return typeof e=="function"&&e.hasOwnProperty(Zt)&&e.__forward_ref__===pt}function O(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function Re(e){return et(e,gt)||et(e,mt)}function et(e,t){return e.hasOwnProperty(t)?e[t]:null}function Yt(e){let t=e&&(e[gt]||e[mt]);return t||null}function tt(e){return e&&(e.hasOwnProperty(nt)||e.hasOwnProperty(Jt))?e[nt]:null}var gt=u({\u0275prov:u}),nt=u({\u0275inj:u}),mt=u({ngInjectableDef:u}),Jt=u({ngInjectorDef:u}),E=class{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=O({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function yt(e){return e&&!!e.\u0275providers}var Xt=u({\u0275cmp:u});var rt=u({\u0275fac:u});var ot=u({__NG_ENV_ID__:u});function en(e,t){throw new d(-201,!1)}var f=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}(f||{}),me;function vt(){return me}function M(e){let t=me;return me=e,t}function tn(e,t,n){let r=Re(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&f.Optional)return null;if(t!==void 0)return t;en(e,"Injector")}var nn={},$=nn,rn="__NG_DI_FLAG__",K="ngTempTokenPath",on="ngTokenPath",sn=/\n/gm,an="\u0275",st="__source",x;function ln(){return x}function N(e){let t=x;return x=e,t}function cn(e,t=f.Default){if(x===void 0)throw new d(-203,!1);return x===null?tn(e,void 0,t):x.get(e,t&f.Optional?null:void 0,t)}function P(e,t=f.Default){return(vt()||cn)(m(e),t)}function H(e,t=f.Default){return P(e,Et(t))}function Et(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function ye(e){let t=[];for(let n=0;n<e.length;n++){let r=m(e[n]);if(Array.isArray(r)){if(r.length===0)throw new d(900,!1);let o,s=f.Default;for(let i=0;i<r.length;i++){let a=r[i],l=un(a);typeof l=="number"?l===-1?o=a.token:s|=l:o=a}t.push(P(o,s))}else t.push(P(r))}return t}function un(e){return e[rn]}function dn(e,t,n,r){let o=e[K];throw t[st]&&o.unshift(t[st]),e.message=fn(`
`+e.message,o,n,r),e[on]=o,e[K]=null,e}function fn(e,t,n,r=null){e=e&&e.charAt(0)===`
`&&e.charAt(1)==an?e.slice(2):e;let o=y(t);if(Array.isArray(t))o=t.map(y).join(" -> ");else if(typeof t=="object"){let s=[];for(let i in t)if(t.hasOwnProperty(i)){let a=t[i];s.push(i+":"+(typeof a=="string"?JSON.stringify(a):y(a)))}o=`{${s.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(sn,`
  `)}`}function Y(e,t){let n=e.hasOwnProperty(rt);return n?e[rt]:null}function Oe(e,t){e.forEach(n=>Array.isArray(n)?Oe(n,t):t(n))}var ve={},J=[],It=new E(""),wt=new E("",-1),_t=new E(""),X=class{get(t,n=$){if(n===$){let r=new Error(`NullInjectorError: No provider for ${y(t)}!`);throw r.name="NullInjectorError",r}return n}};function hn(e){return e[Xt]||null}function pn(...e){return{\u0275providers:gn(!0,e),\u0275fromNgModule:!0}}function gn(e,...t){let n=[],r=new Set,o,s=i=>{n.push(i)};return Oe(t,i=>{let a=i;Ee(a,s,[],r)&&(o||=[],o.push(a))}),o!==void 0&&Dt(o,s),n}function Dt(e,t){for(let n=0;n<e.length;n++){let{ngModule:r,providers:o}=e[n];ke(o,s=>{t(s,r)})}}function Ee(e,t,n,r){if(e=m(e),!e)return!1;let o=null,s=tt(e),i=!s&&hn(e);if(!s&&!i){let l=e.ngModule;if(s=tt(l),s)o=l;else return!1}else{if(i&&!i.standalone)return!1;o=e}let a=r.has(o);if(i){if(a)return!1;if(r.add(o),i.dependencies){let l=typeof i.dependencies=="function"?i.dependencies():i.dependencies;for(let c of l)Ee(c,t,n,r)}}else if(s){if(s.imports!=null&&!a){r.add(o);let c;try{Oe(s.imports,_=>{Ee(_,t,n,r)&&(c||=[],c.push(_))})}finally{}c!==void 0&&Dt(c,t)}if(!a){let c=Y(o)||(()=>new o);t({provide:o,useFactory:c,deps:J},o),t({provide:_t,useValue:o,multi:!0},o),t({provide:It,useValue:()=>P(o),multi:!0},o)}let l=s.providers;if(l!=null&&!a){let c=e;ke(l,_=>{t(_,c)})}}else return!1;return o!==e&&e.providers!==void 0}function ke(e,t){for(let n of e)yt(n)&&(n=n.\u0275providers),Array.isArray(n)?ke(n,t):t(n)}var mn=u({provide:String,useValue:u});function Ct(e){return e!==null&&typeof e=="object"&&mn in e}function yn(e){return!!(e&&e.useExisting)}function vn(e){return!!(e&&e.useFactory)}function Ie(e){return typeof e=="function"}var En=new E(""),Z={},In={},pe;function Tt(){return pe===void 0&&(pe=new X),pe}var ee=class{},we=class extends ee{get destroyed(){return this._destroyed}constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,De(t,i=>this.processProvider(i)),this.records.set(wt,S(void 0,this)),o.has("environment")&&this.records.set(ee,S(void 0,this));let s=this.records.get(En);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(_t,J,f.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let t=v(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),v(t)}}onDestroy(t){return this.assertNotDestroyed(),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){this.assertNotDestroyed();let n=N(this),r=M(void 0),o;try{return t()}finally{N(n),M(r)}}get(t,n=$,r=f.Default){if(this.assertNotDestroyed(),t.hasOwnProperty(ot))return t[ot](this);r=Et(r);let o,s=N(this),i=M(void 0);try{if(!(r&f.SkipSelf)){let l=this.records.get(t);if(l===void 0){let c=bn(t)&&Re(t);c&&this.injectableDefInScope(c)?l=S(_e(t),Z):l=null,this.records.set(t,l)}if(l!=null)return this.hydrate(t,l)}let a=r&f.Self?Tt():this.parent;return n=r&f.Optional&&n===$?null:n,a.get(t,n)}catch(a){if(a.name==="NullInjectorError"){if((a[K]=a[K]||[]).unshift(y(t)),s)throw a;return dn(a,t,"R3InjectorError",this.source)}else throw a}finally{M(i),N(s)}}resolveInjectorInitializers(){let t=v(null),n=N(this),r=M(void 0),o;try{let s=this.get(It,J,f.Self);for(let i of s)i()}finally{N(n),M(r),v(t)}}toString(){let t=[],n=this.records;for(let r of n.keys())t.push(y(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new d(205,!1)}processProvider(t){t=m(t);let n=Ie(t)?t:m(t&&t.provide),r=_n(t);if(!Ie(t)&&t.multi===!0){let o=this.records.get(n);o||(o=S(void 0,Z,!0),o.factory=()=>ye(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){let r=v(null);try{return n.value===Z&&(n.value=In,n.value=n.factory()),typeof n.value=="object"&&n.value&&Tn(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{v(r)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=m(t.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function _e(e){let t=Re(e),n=t!==null?t.factory:Y(e);if(n!==null)return n;if(e instanceof E)throw new d(204,!1);if(e instanceof Function)return wn(e);throw new d(204,!1)}function wn(e){if(e.length>0)throw new d(204,!1);let n=Yt(e);return n!==null?()=>n.factory(e):()=>new e}function _n(e){if(Ct(e))return S(void 0,e.useValue);{let t=Dn(e);return S(t,Z)}}function Dn(e,t,n){let r;if(Ie(e)){let o=m(e);return Y(o)||_e(o)}else if(Ct(e))r=()=>m(e.useValue);else if(vn(e))r=()=>e.useFactory(...ye(e.deps||[]));else if(yn(e))r=()=>P(m(e.useExisting));else{let o=m(e&&(e.useClass||e.provide));if(Cn(e))r=()=>new o(...ye(e.deps));else return Y(o)||_e(o)}return r}function S(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function Cn(e){return!!e.deps}function Tn(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function bn(e){return typeof e=="function"||typeof e=="object"&&e instanceof E}function De(e,t){for(let n of e)Array.isArray(n)?De(n,t):n&&yt(n)?De(n.\u0275providers,t):t(n)}function Mn(){return vt()!==void 0||ln()!=null}var Nn=1,R=2,it=3;var Sn=10;var A=21;var bt=23;var xn=1;function An(e){return Array.isArray(e)&&e[xn]===!0}var Ce=class{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}};function Pn(e,t,n,r){t!==null?t.applyValueToInputSignal(t,r):e[n]=r}function Rn(){return On}function On(e){return e.type.prototype.ngOnChanges&&(e.setInput=Ln),kn}Rn.ngInherit=!0;function kn(){let e=Nt(this),t=e?.current;if(t){let n=e.previous;if(n===ve)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function Ln(e,t,n,r,o){let s=this.declaredInputs[r],i=Nt(e)||Fn(e,{previous:ve,current:null}),a=i.current||(i.current={}),l=i.previous,c=l[s];a[s]=new Ce(c&&c.currentValue,n,l===ve),Pn(e,t,o,n)}var Mt="__ngSimpleChanges__";function Nt(e){return e[Mt]||null}function Fn(e,t){return e[Mt]=t}function St(e){return(e[R]&128)===128}function jn(e){e[R]&1024||(e[R]|=1024,St(e)&&xt(e))}function xt(e){e[Sn].changeDetectionScheduler?.notify(0);let t=te(e);for(;t!==null&&!(t[R]&8192||(t[R]|=8192,!St(t)));)t=te(t)}function Vn(e,t){if((e[R]&256)===256)throw new d(911,!1);e[A]===null&&(e[A]=[]),e[A].push(t)}function Hn(e,t){if(e[A]===null)return;let n=e[A].indexOf(t);n!==-1&&e[A].splice(n,1)}function te(e){let t=e[it];return An(t)?t[it]:t}var At={lFrame:qn(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function $n(){return At.lFrame.lView}function Bn(){let e=Un();for(;e!==null&&e.type===64;)e=e.parent;return e}function Un(){return At.lFrame.currentTNode}function qn(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}var zn=256,Uo=zn-1;function at(e,t=null,n=null,r){let o=Wn(e,t,n,r);return o.resolveInjectorInitializers(),o}function Wn(e,t=null,n=null,r,o=new Set){let s=[n||J,pn(e)];return r=r||(typeof e=="object"?void 0:y(e)),new we(s,t||Tt(),r||null,o)}var lt=class e{static{this.THROW_IF_NOT_FOUND=$}static{this.NULL=new X}static create(t,n){if(Array.isArray(t))return at({name:""},n,t,"");{let r=t.name??"";return at({name:r},t.parent,t.providers,r)}}static{this.\u0275prov=O({token:e,providedIn:"any",factory:()=>P(wt)})}static{this.__NG_ELEMENT_ID__=-1}};var Gn=new E("");Gn.__NG_ELEMENT_ID__=e=>{let t=Bn();if(t===null)throw new d(204,!1);if(t.type&2)return t.value;if(e&f.Optional)return null;throw new d(204,!1)};var Qn="ngOriginalError";function ge(e){return e[Qn]}var Zn=!0,Pt=(()=>{class e{static{this.__NG_ELEMENT_ID__=Kn}static{this.__NG_ENV_ID__=n=>n}}return e})(),Te=class extends Pt{constructor(t){super(),this._lView=t}onDestroy(t){return Vn(this._lView,t),()=>Hn(this._lView,t)}};function Kn(){return new Te($n())}var Yn=(()=>{class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new j(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),n}remove(n){this.pendingTasks.delete(n),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static{this.\u0275prov=O({token:e,providedIn:"root",factory:()=>new e})}}return e})();var be=class extends b{constructor(t=!1){super(),this.destroyRef=void 0,this.pendingTasks=void 0,this.__isAsync=t,Mn()&&(this.destroyRef=H(Pt,{optional:!0})??void 0,this.pendingTasks=H(Yn,{optional:!0})??void 0)}emit(t){let n=v(null);try{super.next(t)}finally{v(n)}}subscribe(t,n,r){let o=t,s=n||(()=>null),i=r;if(t&&typeof t=="object"){let l=t;o=l.next?.bind(l),s=l.error?.bind(l),i=l.complete?.bind(l)}this.__isAsync&&(s=this.wrapInTimeout(s),o&&(o=this.wrapInTimeout(o)),i&&(i=this.wrapInTimeout(i)));let a=super.subscribe({next:o,error:s,complete:i});return t instanceof h&&t.add(a),a}wrapInTimeout(t){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{t(n),r!==void 0&&this.pendingTasks?.remove(r)})}}},Q=be;function Me(...e){}function Jn(e){let t,n;function r(){e=Me;try{n!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(n),t!==void 0&&clearTimeout(t)}catch{}}return t=setTimeout(()=>{e(),r()}),typeof requestAnimationFrame=="function"&&(n=requestAnimationFrame(()=>{e(),r()})),()=>r()}var Le="isAngularZone",ct=Le+"_ID",Xn=0,Ne=class e{constructor(t){this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Q(!1),this.onMicrotaskEmpty=new Q(!1),this.onStable=new Q(!1),this.onError=new Q(!1);let{enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:s=Zn}=t;if(typeof Zone>"u")throw new d(908,!1);Zone.assertZonePatched();let i=this;i._nesting=0,i._outer=i._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(i._inner=i._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(i._inner=i._inner.fork(Zone.longStackTraceZoneSpec)),i.shouldCoalesceEventChangeDetection=!o&&r,i.shouldCoalesceRunChangeDetection=o,i.callbackScheduled=!1,i.scheduleInRootZone=s,nr(i)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Le)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new d(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new d(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){let s=this._inner,i=s.scheduleEventTask("NgZoneEvent: "+o,t,er,Me,Me);try{return s.runTask(i,n,r)}finally{s.cancelTask(i)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}},er={};function Fe(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function tr(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function t(){Jn(()=>{e.callbackScheduled=!1,Se(e),e.isCheckStableRunning=!0,Fe(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{t()}):e._outer.run(()=>{t()}),Se(e)}function nr(e){let t=()=>{tr(e)},n=Xn++;e._inner=e._inner.fork({name:"angular",properties:{[Le]:!0,[ct]:n,[ct+n]:!0},onInvokeTask:(r,o,s,i,a,l)=>{if(rr(l))return r.invokeTask(s,i,a,l);try{return ut(e),r.invokeTask(s,i,a,l)}finally{(e.shouldCoalesceEventChangeDetection&&i.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&t(),dt(e)}},onInvoke:(r,o,s,i,a,l,c)=>{try{return ut(e),r.invoke(s,i,a,l,c)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!or(l)&&t(),dt(e)}},onHasTask:(r,o,s,i)=>{r.hasTask(s,i),o===s&&(i.change=="microTask"?(e._hasPendingMicrotasks=i.microTask,Se(e),Fe(e)):i.change=="macroTask"&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(r,o,s,i)=>(r.handleError(s,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}function Se(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function ut(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function dt(e){e._nesting--,Fe(e)}function rr(e){return Rt(e,"__ignore_ng_zone__")}function or(e){return Rt(e,"__scheduler_tick__")}function Rt(e,t){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[t]===!0}var xe=class{constructor(){this._console=console}handleError(t){let n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&ge(t);for(;n&&ge(n);)n=ge(n);return n||null}};var sr="h",ir="b";var qo={...ie,consumerIsAlwaysLive:!0,consumerMarkedDirty:e=>{xt(e.lView)},consumerOnSignalRead(){this.lView[bt]=this}};var zo={...ie,consumerIsAlwaysLive:!0,consumerMarkedDirty:e=>{let t=te(e.lView);for(;t&&!ar(t[Nn]);)t=te(t);t&&jn(t)},consumerOnSignalRead(){this.lView[bt]=this}};function ar(e){return e.type!==2}var Wo=new RegExp(`^(\\d+)*(${ir}|${sr})*(.*)`);var Ae=class{};function lr(e){let t=Error(`No component factory found for ${y(e)}.`);return t[cr]=e,t}var cr="ngComponent";var Pe=class{resolveComponentFactory(t){throw lr(t)}},ft=class{static{this.NULL=new Pe}};var V=function(e){return e[e.EarlyRead=0]="EarlyRead",e[e.Write=1]="Write",e[e.MixedReadWrite=2]="MixedReadWrite",e[e.Read=3]="Read",e}(V||{});var ht=class e{constructor(){this.ngZone=H(Ne),this.scheduler=H(Ae),this.errorHandler=H(xe,{optional:!0}),this.sequences=new Set,this.deferredRegistrations=new Set,this.executing=!1}static{this.PHASES=[V.EarlyRead,V.Write,V.MixedReadWrite,V.Read]}execute(){this.executing=!0;for(let t of e.PHASES)for(let n of this.sequences)if(!(n.erroredOrDestroyed||!n.hooks[t]))try{n.pipelinedValue=this.ngZone.runOutsideAngular(()=>n.hooks[t](n.pipelinedValue))}catch(r){n.erroredOrDestroyed=!0,this.errorHandler?.handleError(r)}this.executing=!1;for(let t of this.sequences)t.afterRun(),t.once&&(this.sequences.delete(t),t.destroy());for(let t of this.deferredRegistrations)this.sequences.add(t);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear()}register(t){this.executing?this.deferredRegistrations.add(t):(this.sequences.add(t),this.scheduler.notify(6))}unregister(t){this.executing&&this.sequences.has(t)?(t.erroredOrDestroyed=!0,t.pipelinedValue=void 0,t.once=!0):(this.sequences.delete(t),this.deferredRegistrations.delete(t))}static{this.\u0275prov=O({token:e,providedIn:"root",factory:()=>new e})}};var ne=class{constructor(t=0,n=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=t+n}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){let n=t=="start"?this._onStartFns:this._onDoneFns;n.forEach(r=>r()),n.length=0}};var dr=typeof document>"u"?null:document.documentElement;function He(e){let t=e.parentNode||e.host||null;return t===dr?null:t}function fr(e){return e.substring(1,6)=="ebkit"}var w=null,Ot=!1;function hr(e){w||(w=pr()||{},Ot=w.style?"WebkitAppearance"in w.style:!1);let t=!0;return w.style&&!fr(e)&&(t=e in w.style,!t&&Ot&&(t="Webkit"+e.charAt(0).toUpperCase()+e.slice(1)in w.style)),t}function pr(){return typeof document<"u"?document.body:null}function Ft(e,t){for(;t;){if(t===e)return!0;t=He(t)}return!1}function jt(e,t,n){if(n)return Array.from(e.querySelectorAll(t));let r=e.querySelector(t);return r?[r]:[]}var gr=(()=>{class e{validateStyleProperty(n){return hr(n)}containsElement(n,r){return Ft(n,r)}getParentElement(n){return He(n)}query(n,r,o){return jt(n,r,o)}computeStyle(n,r,o){return o||""}animate(n,r,o,s,i,a=[],l){return new ne(o,s)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=O({token:e,factory:e.\u0275fac})}}return e})(),kt=class{static{this.NOOP=new gr}};var mr="{{",yr="}}";function vr(e){return e.length?e[0]instanceof Map?e:e.map(t=>new Map(Object.entries(t))):[]}function re(e,t,n){t.forEach((r,o)=>{let s=Vt(o);n&&!n.has(o)&&n.set(o,e.style[s]),e.style[s]=r})}function Lt(e,t){t.forEach((n,r)=>{let o=Vt(r);e.style[o]=""})}var ts=new RegExp(`${mr}\\s*(.+?)\\s*${yr}`,"g");var Er=/-+([a-z0-9])/g;function Vt(e){return e.replace(Er,(...t)=>t[1].toUpperCase())}function Ir(e,t){return e===0||t===0}function wr(e,t,n){if(n.size&&t.length){let r=t[0],o=[];if(n.forEach((s,i)=>{r.has(i)||o.push(i),r.set(i,s)}),o.length)for(let s=1;s<t.length;s++){let i=t[s];o.forEach(a=>i.set(a,$e(e,a)))}}return t}function $e(e,t){return window.getComputedStyle(e)[t]}var _r=":self",ns=new RegExp(`s*${_r}s*,?`,"g");function Dr(e,t){let n=null,r=null;return Array.isArray(t)&&t.length?(n=je(t[0]),t.length>1&&(r=je(t[t.length-1]))):t instanceof Map&&(n=je(t)),n||r?new Ve(e,n,r):null}var Ve=class e{static{this.initialStylesByElement=new WeakMap}constructor(t,n,r){this._element=t,this._startStyles=n,this._endStyles=r,this._state=0;let o=e.initialStylesByElement.get(t);o||e.initialStylesByElement.set(t,o=new Map),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&re(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(re(this._element,this._initialStyles),this._endStyles&&(re(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(e.initialStylesByElement.delete(this._element),this._startStyles&&(Lt(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Lt(this._element,this._endStyles),this._endStyles=null),re(this._element,this._initialStyles),this._state=3)}};function je(e){let t=null;return e.forEach((n,r)=>{Cr(r)&&(t=t||new Map,t.set(r,n))}),t}function Cr(e){return e==="display"||e==="position"}var oe=class{constructor(t,n,r,o){this.element=t,this.keyframes=n,this.options=r,this._specialStyles=o,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this._originalOnDoneFns=[],this._originalOnStartFns=[],this.time=0,this.parentPlayer=null,this.currentSnapshot=new Map,this._duration=r.duration,this._delay=r.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;let t=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,t,this.options),this._finalKeyframe=t.length?t[t.length-1]:new Map;let n=()=>this._onFinish();this.domPlayer.addEventListener("finish",n),this.onDestroy(()=>{this.domPlayer.removeEventListener("finish",n)})}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(t){let n=[];return t.forEach(r=>{n.push(Object.fromEntries(r))}),n}_triggerWebAnimation(t,n,r){return t.animate(this._convertKeyframesToObject(n),r)}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(t=>t()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}setPosition(t){this.domPlayer===void 0&&this.init(),this.domPlayer.currentTime=t*this.time}getPosition(){return+(this.domPlayer.currentTime??0)/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){let t=new Map;this.hasStarted()&&this._finalKeyframe.forEach((r,o)=>{o!=="offset"&&t.set(o,this._finished?r:$e(this.element,o))}),this.currentSnapshot=t}triggerCallback(t){let n=t==="start"?this._onStartFns:this._onDoneFns;n.forEach(r=>r()),n.length=0}},se=class{validateStyleProperty(t){return!0}validateAnimatableStyleProperty(t){return!0}containsElement(t,n){return Ft(t,n)}getParentElement(t){return He(t)}query(t,n,r){return jt(t,n,r)}computeStyle(t,n,r){return $e(t,n)}animate(t,n,r,o,s,i=[]){let a=o==0?"both":"forwards",l={duration:r,delay:o,fill:a};s&&(l.easing=s);let c=new Map,_=i.filter(k=>k instanceof oe);Ir(r,o)&&_.forEach(k=>{k.currentSnapshot.forEach(($t,Bt)=>c.set(Bt,$t))});let B=vr(n).map(k=>new Map(k));B=wr(t,B,c);let Ht=Dr(t,B);return new oe(t,B,l,Ht)}};se.prototype.containsElement=(e,t)=>{for(;t&&t!==document.documentElement;){if(t===e)return!0;t=e.parentNode||e.host}return!1};window.process={env:{DEBUG:void 0}};