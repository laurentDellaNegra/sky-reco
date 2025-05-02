import*as y3 from"@mediapipe/face_mesh";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function b3(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function v3(a){if(Object.prototype.hasOwnProperty.call(a,"__esModule"))return a;var t=a.default;if(typeof t=="function"){var n=function s(){return this instanceof s?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(a).forEach(function(s){var o=Object.getOwnPropertyDescriptor(a,s);Object.defineProperty(n,s,o.get?o:{enumerable:!0,get:function(){return a[s]}})}),n}var Jf={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H1;function S3(){if(H1)return Uo;H1=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,l){var c=null;if(l!==void 0&&(c=""+l),o.key!==void 0&&(c=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:a,type:s,key:c,ref:o!==void 0?o:null,props:l}}return Uo.Fragment=t,Uo.jsx=n,Uo.jsxs=n,Uo}var q1;function w3(){return q1||(q1=1,Jf.exports=S3()),Jf.exports}var ka=w3(),th={exports:{}},$t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F1;function T3(){if(F1)return $t;F1=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=b&&L[b]||L["@@iterator"],typeof L=="function"?L:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,D={};function k(L,rt,mt){this.props=L,this.context=rt,this.refs=D,this.updater=mt||N}k.prototype.isReactComponent={},k.prototype.setState=function(L,rt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,rt,"setState")},k.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function z(){}z.prototype=k.prototype;function Z(L,rt,mt){this.props=L,this.context=rt,this.refs=D,this.updater=mt||N}var P=Z.prototype=new z;P.constructor=Z,E(P,k.prototype),P.isPureReactComponent=!0;var H=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},Q=Object.prototype.hasOwnProperty;function st(L,rt,mt,ht,Tt,Gt){return mt=Gt.ref,{$$typeof:a,type:L,key:rt,ref:mt!==void 0?mt:null,props:Gt}}function ut(L,rt){return st(L.type,rt,void 0,void 0,void 0,L.props)}function ot(L){return typeof L=="object"&&L!==null&&L.$$typeof===a}function ft(L){var rt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(mt){return rt[mt]})}var St=/\/+/g;function Dt(L,rt){return typeof L=="object"&&L!==null&&L.key!=null?ft(""+L.key):rt.toString(36)}function Ct(){}function Qt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(Ct,Ct):(L.status="pending",L.then(function(rt){L.status==="pending"&&(L.status="fulfilled",L.value=rt)},function(rt){L.status==="pending"&&(L.status="rejected",L.reason=rt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function Ft(L,rt,mt,ht,Tt){var Gt=typeof L;(Gt==="undefined"||Gt==="boolean")&&(L=null);var Et=!1;if(L===null)Et=!0;else switch(Gt){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(L.$$typeof){case a:case t:Et=!0;break;case y:return Et=L._init,Ft(Et(L._payload),rt,mt,ht,Tt)}}if(Et)return Tt=Tt(L),Et=ht===""?"."+Dt(L,0):ht,H(Tt)?(mt="",Et!=null&&(mt=Et.replace(St,"$&/")+"/"),Ft(Tt,rt,mt,"",function(In){return In})):Tt!=null&&(ot(Tt)&&(Tt=ut(Tt,mt+(Tt.key==null||L&&L.key===Tt.key?"":(""+Tt.key).replace(St,"$&/")+"/")+Et)),rt.push(Tt)),1;Et=0;var Ye=ht===""?".":ht+":";if(H(L))for(var ee=0;ee<L.length;ee++)ht=L[ee],Gt=Ye+Dt(ht,ee),Et+=Ft(ht,rt,mt,Gt,Tt);else if(ee=S(L),typeof ee=="function")for(L=ee.call(L),ee=0;!(ht=L.next()).done;)ht=ht.value,Gt=Ye+Dt(ht,ee++),Et+=Ft(ht,rt,mt,Gt,Tt);else if(Gt==="object"){if(typeof L.then=="function")return Ft(Qt(L),rt,mt,ht,Tt);throw rt=String(L),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return Et}function W(L,rt,mt){if(L==null)return L;var ht=[],Tt=0;return Ft(L,ht,"","",function(Gt){return rt.call(mt,Gt,Tt++)}),ht}function lt(L){if(L._status===-1){var rt=L._result;rt=rt(),rt.then(function(mt){(L._status===0||L._status===-1)&&(L._status=1,L._result=mt)},function(mt){(L._status===0||L._status===-1)&&(L._status=2,L._result=mt)}),L._status===-1&&(L._status=0,L._result=rt)}if(L._status===1)return L._result.default;throw L._result}var yt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function jt(){}return $t.Children={map:W,forEach:function(L,rt,mt){W(L,function(){rt.apply(this,arguments)},mt)},count:function(L){var rt=0;return W(L,function(){rt++}),rt},toArray:function(L){return W(L,function(rt){return rt})||[]},only:function(L){if(!ot(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},$t.Component=k,$t.Fragment=n,$t.Profiler=o,$t.PureComponent=Z,$t.StrictMode=s,$t.Suspense=h,$t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,$t.__COMPILER_RUNTIME={__proto__:null,c:function(L){return G.H.useMemoCache(L)}},$t.cache=function(L){return function(){return L.apply(null,arguments)}},$t.cloneElement=function(L,rt,mt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var ht=E({},L.props),Tt=L.key,Gt=void 0;if(rt!=null)for(Et in rt.ref!==void 0&&(Gt=void 0),rt.key!==void 0&&(Tt=""+rt.key),rt)!Q.call(rt,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&rt.ref===void 0||(ht[Et]=rt[Et]);var Et=arguments.length-2;if(Et===1)ht.children=mt;else if(1<Et){for(var Ye=Array(Et),ee=0;ee<Et;ee++)Ye[ee]=arguments[ee+2];ht.children=Ye}return st(L.type,Tt,void 0,void 0,Gt,ht)},$t.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:l,_context:L},L},$t.createElement=function(L,rt,mt){var ht,Tt={},Gt=null;if(rt!=null)for(ht in rt.key!==void 0&&(Gt=""+rt.key),rt)Q.call(rt,ht)&&ht!=="key"&&ht!=="__self"&&ht!=="__source"&&(Tt[ht]=rt[ht]);var Et=arguments.length-2;if(Et===1)Tt.children=mt;else if(1<Et){for(var Ye=Array(Et),ee=0;ee<Et;ee++)Ye[ee]=arguments[ee+2];Tt.children=Ye}if(L&&L.defaultProps)for(ht in Et=L.defaultProps,Et)Tt[ht]===void 0&&(Tt[ht]=Et[ht]);return st(L,Gt,void 0,void 0,null,Tt)},$t.createRef=function(){return{current:null}},$t.forwardRef=function(L){return{$$typeof:f,render:L}},$t.isValidElement=ot,$t.lazy=function(L){return{$$typeof:y,_payload:{_status:-1,_result:L},_init:lt}},$t.memo=function(L,rt){return{$$typeof:d,type:L,compare:rt===void 0?null:rt}},$t.startTransition=function(L){var rt=G.T,mt={};G.T=mt;try{var ht=L(),Tt=G.S;Tt!==null&&Tt(mt,ht),typeof ht=="object"&&ht!==null&&typeof ht.then=="function"&&ht.then(jt,yt)}catch(Gt){yt(Gt)}finally{G.T=rt}},$t.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},$t.use=function(L){return G.H.use(L)},$t.useActionState=function(L,rt,mt){return G.H.useActionState(L,rt,mt)},$t.useCallback=function(L,rt){return G.H.useCallback(L,rt)},$t.useContext=function(L){return G.H.useContext(L)},$t.useDebugValue=function(){},$t.useDeferredValue=function(L,rt){return G.H.useDeferredValue(L,rt)},$t.useEffect=function(L,rt,mt){var ht=G.H;if(typeof mt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ht.useEffect(L,rt)},$t.useId=function(){return G.H.useId()},$t.useImperativeHandle=function(L,rt,mt){return G.H.useImperativeHandle(L,rt,mt)},$t.useInsertionEffect=function(L,rt){return G.H.useInsertionEffect(L,rt)},$t.useLayoutEffect=function(L,rt){return G.H.useLayoutEffect(L,rt)},$t.useMemo=function(L,rt){return G.H.useMemo(L,rt)},$t.useOptimistic=function(L,rt){return G.H.useOptimistic(L,rt)},$t.useReducer=function(L,rt,mt){return G.H.useReducer(L,rt,mt)},$t.useRef=function(L){return G.H.useRef(L)},$t.useState=function(L){return G.H.useState(L)},$t.useSyncExternalStore=function(L,rt,mt){return G.H.useSyncExternalStore(L,rt,mt)},$t.useTransition=function(){return G.H.useTransition()},$t.version="19.1.0",$t}var G1;function Xl(){return G1||(G1=1,th.exports=T3()),th.exports}var pi=Xl(),eh={exports:{}},Io={},nh={exports:{}},ah={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K1;function N3(){return K1||(K1=1,function(a){function t(W,lt){var yt=W.length;W.push(lt);t:for(;0<yt;){var jt=yt-1>>>1,L=W[jt];if(0<o(L,lt))W[jt]=lt,W[yt]=L,yt=jt;else break t}}function n(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var lt=W[0],yt=W.pop();if(yt!==lt){W[0]=yt;t:for(var jt=0,L=W.length,rt=L>>>1;jt<rt;){var mt=2*(jt+1)-1,ht=W[mt],Tt=mt+1,Gt=W[Tt];if(0>o(ht,yt))Tt<L&&0>o(Gt,ht)?(W[jt]=Gt,W[Tt]=yt,jt=Tt):(W[jt]=ht,W[mt]=yt,jt=mt);else if(Tt<L&&0>o(Gt,yt))W[jt]=Gt,W[Tt]=yt,jt=Tt;else break t}}return lt}function o(W,lt){var yt=W.sortIndex-lt.sortIndex;return yt!==0?yt:W.id-lt.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;a.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();a.unstable_now=function(){return c.now()-f}}var h=[],d=[],y=1,b=null,S=3,N=!1,E=!1,D=!1,k=!1,z=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function H(W){for(var lt=n(d);lt!==null;){if(lt.callback===null)s(d);else if(lt.startTime<=W)s(d),lt.sortIndex=lt.expirationTime,t(h,lt);else break;lt=n(d)}}function G(W){if(D=!1,H(W),!E)if(n(h)!==null)E=!0,Q||(Q=!0,Dt());else{var lt=n(d);lt!==null&&Ft(G,lt.startTime-W)}}var Q=!1,st=-1,ut=5,ot=-1;function ft(){return k?!0:!(a.unstable_now()-ot<ut)}function St(){if(k=!1,Q){var W=a.unstable_now();ot=W;var lt=!0;try{t:{E=!1,D&&(D=!1,Z(st),st=-1),N=!0;var yt=S;try{e:{for(H(W),b=n(h);b!==null&&!(b.expirationTime>W&&ft());){var jt=b.callback;if(typeof jt=="function"){b.callback=null,S=b.priorityLevel;var L=jt(b.expirationTime<=W);if(W=a.unstable_now(),typeof L=="function"){b.callback=L,H(W),lt=!0;break e}b===n(h)&&s(h),H(W)}else s(h);b=n(h)}if(b!==null)lt=!0;else{var rt=n(d);rt!==null&&Ft(G,rt.startTime-W),lt=!1}}break t}finally{b=null,S=yt,N=!1}lt=void 0}}finally{lt?Dt():Q=!1}}}var Dt;if(typeof P=="function")Dt=function(){P(St)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,Qt=Ct.port2;Ct.port1.onmessage=St,Dt=function(){Qt.postMessage(null)}}else Dt=function(){z(St,0)};function Ft(W,lt){st=z(function(){W(a.unstable_now())},lt)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(W){W.callback=null},a.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ut=0<W?Math.floor(1e3/W):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(W){switch(S){case 1:case 2:case 3:var lt=3;break;default:lt=S}var yt=S;S=lt;try{return W()}finally{S=yt}},a.unstable_requestPaint=function(){k=!0},a.unstable_runWithPriority=function(W,lt){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var yt=S;S=W;try{return lt()}finally{S=yt}},a.unstable_scheduleCallback=function(W,lt,yt){var jt=a.unstable_now();switch(typeof yt=="object"&&yt!==null?(yt=yt.delay,yt=typeof yt=="number"&&0<yt?jt+yt:jt):yt=jt,W){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=yt+L,W={id:y++,callback:lt,priorityLevel:W,startTime:yt,expirationTime:L,sortIndex:-1},yt>jt?(W.sortIndex=yt,t(d,W),n(h)===null&&W===n(d)&&(D?(Z(st),st=-1):D=!0,Ft(G,yt-jt))):(W.sortIndex=L,t(h,W),E||N||(E=!0,Q||(Q=!0,Dt()))),W},a.unstable_shouldYield=ft,a.unstable_wrapCallback=function(W){var lt=S;return function(){var yt=S;S=lt;try{return W.apply(this,arguments)}finally{S=yt}}}}(ah)),ah}var Y1;function E3(){return Y1||(Y1=1,nh.exports=N3()),nh.exports}var rh={exports:{}},Je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X1;function _3(){if(X1)return Je;X1=1;var a=Xl();function t(h){var d="https://react.dev/errors/"+h;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)d+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(h,d,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:h,containerInfo:d,implementation:y}}var c=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,d){if(h==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Je.createPortal=function(h,d){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(h,d,null,y)},Je.flushSync=function(h){var d=c.T,y=s.p;try{if(c.T=null,s.p=2,h)return h()}finally{c.T=d,s.p=y,s.d.f()}},Je.preconnect=function(h,d){typeof h=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(h,d))},Je.prefetchDNS=function(h){typeof h=="string"&&s.d.D(h)},Je.preinit=function(h,d){if(typeof h=="string"&&d&&typeof d.as=="string"){var y=d.as,b=f(y,d.crossOrigin),S=typeof d.integrity=="string"?d.integrity:void 0,N=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;y==="style"?s.d.S(h,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:N}):y==="script"&&s.d.X(h,{crossOrigin:b,integrity:S,fetchPriority:N,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Je.preinitModule=function(h,d){if(typeof h=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var y=f(d.as,d.crossOrigin);s.d.M(h,{crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(h)},Je.preload=function(h,d){if(typeof h=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var y=d.as,b=f(y,d.crossOrigin);s.d.L(h,y,{crossOrigin:b,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Je.preloadModule=function(h,d){if(typeof h=="string")if(d){var y=f(d.as,d.crossOrigin);s.d.m(h,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(h)},Je.requestFormReset=function(h){s.d.r(h)},Je.unstable_batchedUpdates=function(h,d){return h(d)},Je.useFormState=function(h,d,y){return c.H.useFormState(h,d,y)},Je.useFormStatus=function(){return c.H.useHostTransitionStatus()},Je.version="19.1.0",Je}var Q1;function x3(){if(Q1)return rh.exports;Q1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),rh.exports=_3(),rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W1;function A3(){if(W1)return Io;W1=1;var a=E3(),t=Xl(),n=x3();function s(e){var r="https://react.dev/errors/"+e;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)r+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var r=e,i=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(i=r.return),e=r.return;while(e)}return r.tag===3?i:null}function c(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function h(e){var r=e.alternate;if(!r){if(r=l(e),r===null)throw Error(s(188));return r!==e?null:e}for(var i=e,u=r;;){var p=i.return;if(p===null)break;var m=p.alternate;if(m===null){if(u=p.return,u!==null){i=u;continue}break}if(p.child===m.child){for(m=p.child;m;){if(m===i)return f(p),e;if(m===u)return f(p),r;m=m.sibling}throw Error(s(188))}if(i.return!==u.return)i=p,u=m;else{for(var T=!1,x=p.child;x;){if(x===i){T=!0,i=p,u=m;break}if(x===u){T=!0,u=p,i=m;break}x=x.sibling}if(!T){for(x=m.child;x;){if(x===i){T=!0,i=m,u=p;break}if(x===u){T=!0,u=m,i=p;break}x=x.sibling}if(!T)throw Error(s(189))}}if(i.alternate!==u)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?e:r}function d(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e;for(e=e.child;e!==null;){if(r=d(e),r!==null)return r;e=e.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),Z=Symbol.for("react.consumer"),P=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),st=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),ot=Symbol.for("react.activity"),ft=Symbol.for("react.memo_cache_sentinel"),St=Symbol.iterator;function Dt(e){return e===null||typeof e!="object"?null:(e=St&&e[St]||e["@@iterator"],typeof e=="function"?e:null)}var Ct=Symbol.for("react.client.reference");function Qt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case k:return"Profiler";case D:return"StrictMode";case G:return"Suspense";case Q:return"SuspenseList";case ot:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case P:return(e.displayName||"Context")+".Provider";case Z:return(e._context.displayName||"Context")+".Consumer";case H:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case st:return r=e.displayName||null,r!==null?r:Qt(e.type)||"Memo";case ut:r=e._payload,e=e._init;try{return Qt(e(r))}catch{}}return null}var Ft=Array.isArray,W=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt={pending:!1,data:null,method:null,action:null},jt=[],L=-1;function rt(e){return{current:e}}function mt(e){0>L||(e.current=jt[L],jt[L]=null,L--)}function ht(e,r){L++,jt[L]=e.current,e.current=r}var Tt=rt(null),Gt=rt(null),Et=rt(null),Ye=rt(null);function ee(e,r){switch(ht(Et,r),ht(Gt,e),ht(Tt,null),r.nodeType){case 9:case 11:e=(e=r.documentElement)&&(e=e.namespaceURI)?g1(e):0;break;default:if(e=r.tagName,r=r.namespaceURI)r=g1(r),e=y1(r,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}mt(Tt),ht(Tt,e)}function In(){mt(Tt),mt(Gt),mt(Et)}function zr(e){e.memoizedState!==null&&ht(Ye,e);var r=Tt.current,i=y1(r,e.type);r!==i&&(ht(Gt,e),ht(Tt,i))}function Ee(e){Gt.current===e&&(mt(Tt),mt(Gt)),Ye.current===e&&(mt(Ye),Ro._currentValue=yt)}var oa=Object.prototype.hasOwnProperty,Ns=a.unstable_scheduleCallback,Cr=a.unstable_cancelCallback,ua=a.unstable_shouldYield,nu=a.unstable_requestPaint,gn=a.unstable_now,Es=a.unstable_getCurrentPriorityLevel,Mr=a.unstable_ImmediatePriority,au=a.unstable_UserBlockingPriority,Ln=a.unstable_NormalPriority,_s=a.unstable_LowPriority,_i=a.unstable_IdlePriority,ru=a.log,Br=a.unstable_setDisableYieldValue,jn=null,je=null;function Vn(e){if(typeof ru=="function"&&Br(e),je&&typeof je.setStrictMode=="function")try{je.setStrictMode(jn,e)}catch{}}var Re=Math.clz32?Math.clz32:ou,su=Math.log,iu=Math.LN2;function ou(e){return e>>>=0,e===0?32:31-(su(e)/iu|0)|0}var Ur=256,Xe=4194304;function ie(e){var r=e&42;if(r!==0)return r;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ir(e,r,i){var u=e.pendingLanes;if(u===0)return 0;var p=0,m=e.suspendedLanes,T=e.pingedLanes;e=e.warmLanes;var x=u&134217727;return x!==0?(u=x&~m,u!==0?p=ie(u):(T&=x,T!==0?p=ie(T):i||(i=x&~e,i!==0&&(p=ie(i))))):(x=u&~m,x!==0?p=ie(x):T!==0?p=ie(T):i||(i=u&~e,i!==0&&(p=ie(i)))),p===0?0:r!==0&&r!==p&&(r&m)===0&&(m=p&-p,i=r&-r,m>=i||m===32&&(i&4194048)!==0)?r:p}function Qe(e,r){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&r)===0}function xs(e,r){switch(e){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xi(){var e=Ur;return Ur<<=1,(Ur&4194048)===0&&(Ur=256),e}function Ai(){var e=Xe;return Xe<<=1,(Xe&62914560)===0&&(Xe=4194304),e}function As(e){for(var r=[],i=0;31>i;i++)r.push(e);return r}function qa(e,r){e.pendingLanes|=r,r!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function uu(e,r,i,u,p,m){var T=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var x=e.entanglements,B=e.expirationTimes,K=e.hiddenUpdates;for(i=T&~i;0<i;){var tt=31-Re(i),at=1<<tt;x[tt]=0,B[tt]=-1;var Y=K[tt];if(Y!==null)for(K[tt]=null,tt=0;tt<Y.length;tt++){var X=Y[tt];X!==null&&(X.lane&=-536870913)}i&=~at}u!==0&&Oi(e,u,0),m!==0&&p===0&&e.tag!==0&&(e.suspendedLanes|=m&~(T&~r))}function Oi(e,r,i){e.pendingLanes|=r,e.suspendedLanes&=~r;var u=31-Re(r);e.entangledLanes|=r,e.entanglements[u]=e.entanglements[u]|1073741824|i&4194090}function lu(e,r){var i=e.entangledLanes|=r;for(e=e.entanglements;i;){var u=31-Re(i),p=1<<u;p&r|e[u]&r&&(e[u]|=r),i&=~p}}function Di(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Lr(){var e=lt.p;return e!==0?e:(e=window.event,e===void 0?32:B1(e.type))}function cu(e,r){var i=lt.p;try{return lt.p=e,r()}finally{lt.p=i}}var Hn=Math.random().toString(36).slice(2),ve="__reactFiber$"+Hn,Ve="__reactProps$"+Hn,la="__reactContainer$"+Hn,ki="__reactEvents$"+Hn,fu="__reactListeners$"+Hn,Os="__reactHandles$"+Hn,$i="__reactResources$"+Hn,Ga="__reactMarker$"+Hn;function Ds(e){delete e[ve],delete e[Ve],delete e[ki],delete e[fu],delete e[Os]}function Ka(e){var r=e[ve];if(r)return r;for(var i=e.parentNode;i;){if(r=i[la]||i[ve]){if(i=r.alternate,r.child!==null||i!==null&&i.child!==null)for(e=w1(e);e!==null;){if(i=e[ve])return i;e=w1(e)}return r}e=i,i=e.parentNode}return null}function Ya(e){if(e=e[ve]||e[la]){var r=e.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return e}return null}function jr(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e.stateNode;throw Error(s(33))}function Xa(e){var r=e[$i];return r||(r=e[$i]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Se(e){e[Ga]=!0}var Ri=new Set,hu={};function ca(e,r){Qa(e,r),Qa(e+"Capture",r)}function Qa(e,r){for(hu[e]=r,e=0;e<r.length;e++)Ri.add(r[e])}var rc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zi={},Ci={};function Mi(e){return oa.call(Ci,e)?!0:oa.call(zi,e)?!1:rc.test(e)?Ci[e]=!0:(zi[e]=!0,!1)}function Vr(e,r,i){if(Mi(r))if(i===null)e.removeAttribute(r);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(r);return}}e.setAttribute(r,""+i)}}function Wa(e,r,i){if(i===null)e.removeAttribute(r);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttribute(r,""+i)}}function en(e,r,i,u){if(u===null)e.removeAttribute(i);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(r,i,""+u)}}var nn,pu;function Pa(e){if(nn===void 0)try{throw Error()}catch(i){var r=i.stack.trim().match(/\n( *(at )?)/);nn=r&&r[1]||"",pu=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nn+e+pu}var ks=!1;function $s(e,r){if(!e||ks)return"";ks=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var at=function(){throw Error()};if(Object.defineProperty(at.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(at,[])}catch(X){var Y=X}Reflect.construct(e,[],at)}else{try{at.call()}catch(X){Y=X}e.call(at.prototype)}}else{try{throw Error()}catch(X){Y=X}(at=e())&&typeof at.catch=="function"&&at.catch(function(){})}}catch(X){if(X&&Y&&typeof X.stack=="string")return[X.stack,Y.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),T=m[0],x=m[1];if(T&&x){var B=T.split(`
`),K=x.split(`
`);for(p=u=0;u<B.length&&!B[u].includes("DetermineComponentFrameRoot");)u++;for(;p<K.length&&!K[p].includes("DetermineComponentFrameRoot");)p++;if(u===B.length||p===K.length)for(u=B.length-1,p=K.length-1;1<=u&&0<=p&&B[u]!==K[p];)p--;for(;1<=u&&0<=p;u--,p--)if(B[u]!==K[p]){if(u!==1||p!==1)do if(u--,p--,0>p||B[u]!==K[p]){var tt=`
`+B[u].replace(" at new "," at ");return e.displayName&&tt.includes("<anonymous>")&&(tt=tt.replace("<anonymous>",e.displayName)),tt}while(1<=u&&0<=p);break}}}finally{ks=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?Pa(i):""}function un(e){switch(e.tag){case 26:case 27:case 5:return Pa(e.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 15:return $s(e.type,!1);case 11:return $s(e.type.render,!1);case 1:return $s(e.type,!0);case 31:return Pa("Activity");default:return""}}function Bi(e){try{var r="";do r+=un(e),e=e.return;while(e);return r}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function ze(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ui(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ii(e){var r=Ui(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),u=""+e[r];if(!e.hasOwnProperty(r)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var p=i.get,m=i.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){u=""+T,m.call(this,T)}}),Object.defineProperty(e,r,{enumerable:i.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Rs(e){e._valueTracker||(e._valueTracker=Ii(e))}function du(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var i=r.getValue(),u="";return e&&(u=Ui(e)?e.checked?"true":"false":e.value),e=u,e!==i?(r.setValue(e),!0):!1}function fa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var mu=/[\n"\\]/g;function an(e){return e.replace(mu,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Li(e,r,i,u,p,m,T,x){e.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.type=T:e.removeAttribute("type"),r!=null?T==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+ze(r)):e.value!==""+ze(r)&&(e.value=""+ze(r)):T!=="submit"&&T!=="reset"||e.removeAttribute("value"),r!=null?Hr(e,T,ze(r)):i!=null?Hr(e,T,ze(i)):u!=null&&e.removeAttribute("value"),p==null&&m!=null&&(e.defaultChecked=!!m),p!=null&&(e.checked=p&&typeof p!="function"&&typeof p!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+ze(x):e.removeAttribute("name")}function gu(e,r,i,u,p,m,T,x){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),r!=null||i!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;i=i!=null?""+ze(i):"",r=r!=null?""+ze(r):i,x||r===e.value||(e.value=r),e.defaultValue=r}u=u??p,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=x?e.checked:!!u,e.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(e.name=T)}function Hr(e,r,i){r==="number"&&fa(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function ha(e,r,i,u){if(e=e.options,r){r={};for(var p=0;p<i.length;p++)r["$"+i[p]]=!0;for(i=0;i<e.length;i++)p=r.hasOwnProperty("$"+e[i].value),e[i].selected!==p&&(e[i].selected=p),p&&u&&(e[i].defaultSelected=!0)}else{for(i=""+ze(i),r=null,p=0;p<e.length;p++){if(e[p].value===i){e[p].selected=!0,u&&(e[p].defaultSelected=!0);return}r!==null||e[p].disabled||(r=e[p])}r!==null&&(r.selected=!0)}}function ji(e,r,i){if(r!=null&&(r=""+ze(r),r!==e.value&&(e.value=r),i==null)){e.defaultValue!==r&&(e.defaultValue=r);return}e.defaultValue=i!=null?""+ze(i):""}function Vi(e,r,i,u){if(r==null){if(u!=null){if(i!=null)throw Error(s(92));if(Ft(u)){if(1<u.length)throw Error(s(93));u=u[0]}i=u}i==null&&(i=""),r=i}i=ze(r),e.defaultValue=i,u=e.textContent,u===i&&u!==""&&u!==null&&(e.value=u)}function pa(e,r){if(r){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=r;return}}e.textContent=r}var yu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hi(e,r,i){var u=r.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?u?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="":u?e.setProperty(r,i):typeof i!="number"||i===0||yu.has(r)?r==="float"?e.cssFloat=i:e[r]=(""+i).trim():e[r]=i+"px"}function qi(e,r,i){if(r!=null&&typeof r!="object")throw Error(s(62));if(e=e.style,i!=null){for(var u in i)!i.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var p in r)u=r[p],r.hasOwnProperty(p)&&i[p]!==u&&Hi(e,p,u)}else for(var m in r)r.hasOwnProperty(m)&&Hi(e,m,r[m])}function Fi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zs(e){return sc.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var qr=null;function Cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,Ja=null;function vu(e){var r=Ya(e);if(r&&(e=r.stateNode)){var i=e[Ve]||null;t:switch(e=r.stateNode,r.type){case"input":if(Li(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),r=i.name,i.type==="radio"&&r!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+an(""+r)+'"][type="radio"]'),r=0;r<i.length;r++){var u=i[r];if(u!==e&&u.form===e.form){var p=u[Ve]||null;if(!p)throw Error(s(90));Li(u,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(r=0;r<i.length;r++)u=i[r],u.form===e.form&&du(u)}break t;case"textarea":ji(e,i.value,i.defaultValue);break t;case"select":r=i.value,r!=null&&ha(e,!!i.multiple,r,!1)}}}var Ms=!1;function Bs(e,r,i){if(Ms)return e(r,i);Ms=!0;try{var u=e(r);return u}finally{if(Ms=!1,(Za!==null||Ja!==null)&&(Ju(),Za&&(r=Za,e=Ja,Ja=Za=null,vu(r),e)))for(r=0;r<e.length;r++)vu(e[r])}}function Fr(e,r){var i=e.stateNode;if(i===null)return null;var u=i[Ve]||null;if(u===null)return null;i=u[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(s(231,r,typeof i));return i}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gi=!1;if(ln)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Gi=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Gi=!1}var qn=null,g=null,w=null;function _(){if(w)return w;var e,r=g,i=r.length,u,p="value"in qn?qn.value:qn.textContent,m=p.length;for(e=0;e<i&&r[e]===p[e];e++);var T=i-e;for(u=1;u<=T&&r[i-u]===p[m-u];u++);return w=p.slice(e,1<u?1-u:void 0)}function O(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function M(){return!0}function R(){return!1}function C(e){function r(i,u,p,m,T){this._reactName=i,this._targetInst=p,this.type=u,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(i=e[x],this[x]=i?i(m):m[x]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?M:R,this.isPropagationStopped=R,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=M)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=M)},persist:function(){},isPersistent:M}),r}var V={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},J=C(V),it=y({},V,{view:0,detail:0}),dt=C(it),bt,Nt,pt,_t=y({},it,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ic,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pt&&(pt&&e.type==="mousemove"?(bt=e.screenX-pt.screenX,Nt=e.screenY-pt.screenY):Nt=bt=0,pt=e),bt)},movementY:function(e){return"movementY"in e?e.movementY:Nt}}),kt=C(_t),Pt=y({},_t,{dataTransfer:0}),ne=C(Pt),He=y({},it,{relatedTarget:0}),We=C(He),Pe=y({},V,{animationName:0,elapsedTime:0,pseudoElement:0}),Yt=C(Pe),Ae=y({},V,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zn=C(Ae),da=y({},V,{data:0}),Ki=C(da),tr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Us={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dy(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Yi[e])?!!r[e]:!1}function ic(){return Dy}var ky=y({},it,{key:function(e){if(e.key){var r=tr[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=O(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Us[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ic,charCode:function(e){return e.type==="keypress"?O(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?O(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$y=C(ky),Ry=y({},_t,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ep=C(Ry),zy=y({},it,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ic}),Cy=C(zy),My=y({},V,{propertyName:0,elapsedTime:0,pseudoElement:0}),By=C(My),Uy=y({},_t,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Iy=C(Uy),Ly=y({},V,{newState:0,oldState:0}),jy=C(Ly),Vy=[9,13,27,32],oc=ln&&"CompositionEvent"in window,Xi=null;ln&&"documentMode"in document&&(Xi=document.documentMode);var Hy=ln&&"TextEvent"in window&&!Xi,_p=ln&&(!oc||Xi&&8<Xi&&11>=Xi),xp=" ",Ap=!1;function Op(e,r){switch(e){case"keyup":return Vy.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Is=!1;function qy(e,r){switch(e){case"compositionend":return Dp(r);case"keypress":return r.which!==32?null:(Ap=!0,xp);case"textInput":return e=r.data,e===xp&&Ap?null:e;default:return null}}function Fy(e,r){if(Is)return e==="compositionend"||!oc&&Op(e,r)?(e=_(),w=g=qn=null,Is=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return _p&&r.locale!=="ko"?null:r.data;default:return null}}var Gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Gy[e.type]:r==="textarea"}function $p(e,r,i,u){Za?Ja?Ja.push(u):Ja=[u]:Za=u,r=sl(r,"onChange"),0<r.length&&(i=new J("onChange","change",null,i,u),e.push({event:i,listeners:r}))}var Qi=null,Wi=null;function Ky(e){f1(e,0)}function Su(e){var r=jr(e);if(du(r))return e}function Rp(e,r){if(e==="change")return r}var zp=!1;if(ln){var uc;if(ln){var lc="oninput"in document;if(!lc){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),lc=typeof Cp.oninput=="function"}uc=lc}else uc=!1;zp=uc&&(!document.documentMode||9<document.documentMode)}function Mp(){Qi&&(Qi.detachEvent("onpropertychange",Bp),Wi=Qi=null)}function Bp(e){if(e.propertyName==="value"&&Su(Wi)){var r=[];$p(r,Wi,e,Cs(e)),Bs(Ky,r)}}function Yy(e,r,i){e==="focusin"?(Mp(),Qi=r,Wi=i,Qi.attachEvent("onpropertychange",Bp)):e==="focusout"&&Mp()}function Xy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Su(Wi)}function Qy(e,r){if(e==="click")return Su(r)}function Wy(e,r){if(e==="input"||e==="change")return Su(r)}function Py(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var yn=typeof Object.is=="function"?Object.is:Py;function Pi(e,r){if(yn(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var i=Object.keys(e),u=Object.keys(r);if(i.length!==u.length)return!1;for(u=0;u<i.length;u++){var p=i[u];if(!oa.call(r,p)||!yn(e[p],r[p]))return!1}return!0}function Up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ip(e,r){var i=Up(e);e=0;for(var u;i;){if(i.nodeType===3){if(u=e+i.textContent.length,e<=r&&u>=r)return{node:i,offset:r-e};e=u}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=Up(i)}}function Lp(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Lp(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function jp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var r=fa(e.document);r instanceof e.HTMLIFrameElement;){try{var i=typeof r.contentWindow.location.href=="string"}catch{i=!1}if(i)e=r.contentWindow;else break;r=fa(e.document)}return r}function cc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}var Zy=ln&&"documentMode"in document&&11>=document.documentMode,Ls=null,fc=null,Zi=null,hc=!1;function Vp(e,r,i){var u=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;hc||Ls==null||Ls!==fa(u)||(u=Ls,"selectionStart"in u&&cc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Zi&&Pi(Zi,u)||(Zi=u,u=sl(fc,"onSelect"),0<u.length&&(r=new J("onSelect","select",null,r,i),e.push({event:r,listeners:u}),r.target=Ls)))}function Kr(e,r){var i={};return i[e.toLowerCase()]=r.toLowerCase(),i["Webkit"+e]="webkit"+r,i["Moz"+e]="moz"+r,i}var js={animationend:Kr("Animation","AnimationEnd"),animationiteration:Kr("Animation","AnimationIteration"),animationstart:Kr("Animation","AnimationStart"),transitionrun:Kr("Transition","TransitionRun"),transitionstart:Kr("Transition","TransitionStart"),transitioncancel:Kr("Transition","TransitionCancel"),transitionend:Kr("Transition","TransitionEnd")},pc={},Hp={};ln&&(Hp=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function Yr(e){if(pc[e])return pc[e];if(!js[e])return e;var r=js[e],i;for(i in r)if(r.hasOwnProperty(i)&&i in Hp)return pc[e]=r[i];return e}var qp=Yr("animationend"),Fp=Yr("animationiteration"),Gp=Yr("animationstart"),Jy=Yr("transitionrun"),t0=Yr("transitionstart"),e0=Yr("transitioncancel"),Kp=Yr("transitionend"),Yp=new Map,dc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dc.push("scrollEnd");function Fn(e,r){Yp.set(e,r),ca(r,[e])}var Xp=new WeakMap;function An(e,r){if(typeof e=="object"&&e!==null){var i=Xp.get(e);return i!==void 0?i:(r={value:e,source:r,stack:Bi(r)},Xp.set(e,r),r)}return{value:e,source:r,stack:Bi(r)}}var On=[],Vs=0,mc=0;function wu(){for(var e=Vs,r=mc=Vs=0;r<e;){var i=On[r];On[r++]=null;var u=On[r];On[r++]=null;var p=On[r];On[r++]=null;var m=On[r];if(On[r++]=null,u!==null&&p!==null){var T=u.pending;T===null?p.next=p:(p.next=T.next,T.next=p),u.pending=p}m!==0&&Qp(i,p,m)}}function Tu(e,r,i,u){On[Vs++]=e,On[Vs++]=r,On[Vs++]=i,On[Vs++]=u,mc|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function gc(e,r,i,u){return Tu(e,r,i,u),Nu(e)}function Hs(e,r){return Tu(e,null,null,r),Nu(e)}function Qp(e,r,i){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i);for(var p=!1,m=e.return;m!==null;)m.childLanes|=i,u=m.alternate,u!==null&&(u.childLanes|=i),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(p=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,p&&r!==null&&(p=31-Re(i),e=m.hiddenUpdates,u=e[p],u===null?e[p]=[r]:u.push(r),r.lane=i|536870912),m):null}function Nu(e){if(50<Eo)throw Eo=0,Nf=null,Error(s(185));for(var r=e.return;r!==null;)e=r,r=e.return;return e.tag===3?e.stateNode:null}var qs={};function n0(e,r,i,u){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,r,i,u){return new n0(e,r,i,u)}function yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ma(e,r){var i=e.alternate;return i===null?(i=bn(e.tag,r,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=r,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,r=e.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Wp(e,r){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=r,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,r=i.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),e}function Eu(e,r,i,u,p,m){var T=0;if(u=e,typeof e=="function")yc(e)&&(T=1);else if(typeof e=="string")T=r3(e,i,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case ot:return e=bn(31,i,r,p),e.elementType=ot,e.lanes=m,e;case E:return Xr(i.children,p,m,r);case D:T=8,p|=24;break;case k:return e=bn(12,i,r,p|2),e.elementType=k,e.lanes=m,e;case G:return e=bn(13,i,r,p),e.elementType=G,e.lanes=m,e;case Q:return e=bn(19,i,r,p),e.elementType=Q,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:case P:T=10;break t;case Z:T=9;break t;case H:T=11;break t;case st:T=14;break t;case ut:T=16,u=null;break t}T=29,i=Error(s(130,e===null?"null":typeof e,"")),u=null}return r=bn(T,i,r,p),r.elementType=e,r.type=u,r.lanes=m,r}function Xr(e,r,i,u){return e=bn(7,e,u,r),e.lanes=i,e}function bc(e,r,i){return e=bn(6,e,null,r),e.lanes=i,e}function vc(e,r,i){return r=bn(4,e.children!==null?e.children:[],e.key,r),r.lanes=i,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}var Fs=[],Gs=0,_u=null,xu=0,Dn=[],kn=0,Qr=null,ga=1,ya="";function Wr(e,r){Fs[Gs++]=xu,Fs[Gs++]=_u,_u=e,xu=r}function Pp(e,r,i){Dn[kn++]=ga,Dn[kn++]=ya,Dn[kn++]=Qr,Qr=e;var u=ga;e=ya;var p=32-Re(u)-1;u&=~(1<<p),i+=1;var m=32-Re(r)+p;if(30<m){var T=p-p%5;m=(u&(1<<T)-1).toString(32),u>>=T,p-=T,ga=1<<32-Re(r)+p|i<<p|u,ya=m+e}else ga=1<<m|i<<p|u,ya=e}function Sc(e){e.return!==null&&(Wr(e,1),Pp(e,1,0))}function wc(e){for(;e===_u;)_u=Fs[--Gs],Fs[Gs]=null,xu=Fs[--Gs],Fs[Gs]=null;for(;e===Qr;)Qr=Dn[--kn],Dn[kn]=null,ya=Dn[--kn],Dn[kn]=null,ga=Dn[--kn],Dn[kn]=null}var rn=null,ye=null,Wt=!1,Pr=null,Jn=!1,Tc=Error(s(519));function Zr(e){var r=Error(s(418,""));throw eo(An(r,e)),Tc}function Zp(e){var r=e.stateNode,i=e.type,u=e.memoizedProps;switch(r[ve]=e,r[Ve]=u,i){case"dialog":Ht("cancel",r),Ht("close",r);break;case"iframe":case"object":case"embed":Ht("load",r);break;case"video":case"audio":for(i=0;i<xo.length;i++)Ht(xo[i],r);break;case"source":Ht("error",r);break;case"img":case"image":case"link":Ht("error",r),Ht("load",r);break;case"details":Ht("toggle",r);break;case"input":Ht("invalid",r),gu(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Rs(r);break;case"select":Ht("invalid",r);break;case"textarea":Ht("invalid",r),Vi(r,u.value,u.defaultValue,u.children),Rs(r)}i=u.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||r.textContent===""+i||u.suppressHydrationWarning===!0||m1(r.textContent,i)?(u.popover!=null&&(Ht("beforetoggle",r),Ht("toggle",r)),u.onScroll!=null&&Ht("scroll",r),u.onScrollEnd!=null&&Ht("scrollend",r),u.onClick!=null&&(r.onclick=il),r=!0):r=!1,r||Zr(e)}function Jp(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 13:Jn=!1;return;case 27:case 3:Jn=!0;return;default:rn=rn.return}}function Ji(e){if(e!==rn)return!1;if(!Wt)return Jp(e),Wt=!0,!1;var r=e.tag,i;if((i=r!==3&&r!==27)&&((i=r===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Lf(e.type,e.memoizedProps)),i=!i),i&&ye&&Zr(e),Jp(e),r===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8)if(i=e.data,i==="/$"){if(r===0){ye=Kn(e.nextSibling);break t}r--}else i!=="$"&&i!=="$!"&&i!=="$?"||r++;e=e.nextSibling}ye=null}}else r===27?(r=ye,gr(e.type)?(e=qf,qf=null,ye=e):ye=r):ye=rn?Kn(e.stateNode.nextSibling):null;return!0}function to(){ye=rn=null,Wt=!1}function td(){var e=Pr;return e!==null&&(hn===null?hn=e:hn.push.apply(hn,e),Pr=null),e}function eo(e){Pr===null?Pr=[e]:Pr.push(e)}var Nc=rt(null),Jr=null,ba=null;function er(e,r,i){ht(Nc,r._currentValue),r._currentValue=i}function va(e){e._currentValue=Nc.current,mt(Nc)}function Ec(e,r,i){for(;e!==null;){var u=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),e===i)break;e=e.return}}function _c(e,r,i,u){var p=e.child;for(p!==null&&(p.return=e);p!==null;){var m=p.dependencies;if(m!==null){var T=p.child;m=m.firstContext;t:for(;m!==null;){var x=m;m=p;for(var B=0;B<r.length;B++)if(x.context===r[B]){m.lanes|=i,x=m.alternate,x!==null&&(x.lanes|=i),Ec(m.return,i,e),u||(T=null);break t}m=x.next}}else if(p.tag===18){if(T=p.return,T===null)throw Error(s(341));T.lanes|=i,m=T.alternate,m!==null&&(m.lanes|=i),Ec(T,i,e),T=null}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===e){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}}function no(e,r,i,u){e=null;for(var p=r,m=!1;p!==null;){if(!m){if((p.flags&524288)!==0)m=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var T=p.alternate;if(T===null)throw Error(s(387));if(T=T.memoizedProps,T!==null){var x=p.type;yn(p.pendingProps.value,T.value)||(e!==null?e.push(x):e=[x])}}else if(p===Ye.current){if(T=p.alternate,T===null)throw Error(s(387));T.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(e!==null?e.push(Ro):e=[Ro])}p=p.return}e!==null&&_c(r,e,i,u),r.flags|=262144}function Au(e){for(e=e.firstContext;e!==null;){if(!yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ts(e){Jr=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return ed(Jr,e)}function Ou(e,r){return Jr===null&&ts(e),ed(e,r)}function ed(e,r){var i=r._currentValue;if(r={context:r,memoizedValue:i,next:null},ba===null){if(e===null)throw Error(s(308));ba=r,e.dependencies={lanes:0,firstContext:r},e.flags|=524288}else ba=ba.next=r;return i}var a0=typeof AbortController<"u"?AbortController:function(){var e=[],r=this.signal={aborted:!1,addEventListener:function(i,u){e.push(u)}};this.abort=function(){r.aborted=!0,e.forEach(function(i){return i()})}},r0=a.unstable_scheduleCallback,s0=a.unstable_NormalPriority,Oe={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xc(){return{controller:new a0,data:new Map,refCount:0}}function ao(e){e.refCount--,e.refCount===0&&r0(s0,function(){e.controller.abort()})}var ro=null,Ac=0,Ks=0,Ys=null;function i0(e,r){if(ro===null){var i=ro=[];Ac=0,Ks=kf(),Ys={status:"pending",value:void 0,then:function(u){i.push(u)}}}return Ac++,r.then(nd,nd),r}function nd(){if(--Ac===0&&ro!==null){Ys!==null&&(Ys.status="fulfilled");var e=ro;ro=null,Ks=0,Ys=null;for(var r=0;r<e.length;r++)(0,e[r])()}}function o0(e,r){var i=[],u={status:"pending",value:null,reason:null,then:function(p){i.push(p)}};return e.then(function(){u.status="fulfilled",u.value=r;for(var p=0;p<i.length;p++)(0,i[p])(r)},function(p){for(u.status="rejected",u.reason=p,p=0;p<i.length;p++)(0,i[p])(void 0)}),u}var ad=W.S;W.S=function(e,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&i0(e,r),ad!==null&&ad(e,r)};var es=rt(null);function Oc(){var e=es.current;return e!==null?e:ue.pooledCache}function Du(e,r){r===null?ht(es,es.current):ht(es,r.pool)}function rd(){var e=Oc();return e===null?null:{parent:Oe._currentValue,pool:e}}var so=Error(s(460)),sd=Error(s(474)),ku=Error(s(542)),Dc={then:function(){}};function id(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $u(){}function od(e,r,i){switch(i=e[i],i===void 0?e.push(r):i!==r&&(r.then($u,$u),r=i),r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,ld(e),e;default:if(typeof r.status=="string")r.then($u,$u);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=r,e.status="pending",e.then(function(u){if(r.status==="pending"){var p=r;p.status="fulfilled",p.value=u}},function(u){if(r.status==="pending"){var p=r;p.status="rejected",p.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,ld(e),e}throw io=r,so}}var io=null;function ud(){if(io===null)throw Error(s(459));var e=io;return io=null,e}function ld(e){if(e===so||e===ku)throw Error(s(483))}var nr=!1;function kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $c(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ar(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function rr(e,r,i){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(Zt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,r=Nu(e),Qp(e,null,i),r}return Tu(e,u,r,i),Nu(e)}function oo(e,r,i){if(r=r.updateQueue,r!==null&&(r=r.shared,(i&4194048)!==0)){var u=r.lanes;u&=e.pendingLanes,i|=u,r.lanes=i,lu(e,i)}}function Rc(e,r){var i=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,i===u)){var p=null,m=null;if(i=i.firstBaseUpdate,i!==null){do{var T={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};m===null?p=m=T:m=m.next=T,i=i.next}while(i!==null);m===null?p=m=r:m=m.next=r}else p=m=r;i={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=r:e.next=r,i.lastBaseUpdate=r}var zc=!1;function uo(){if(zc){var e=Ys;if(e!==null)throw e}}function lo(e,r,i,u){zc=!1;var p=e.updateQueue;nr=!1;var m=p.firstBaseUpdate,T=p.lastBaseUpdate,x=p.shared.pending;if(x!==null){p.shared.pending=null;var B=x,K=B.next;B.next=null,T===null?m=K:T.next=K,T=B;var tt=e.alternate;tt!==null&&(tt=tt.updateQueue,x=tt.lastBaseUpdate,x!==T&&(x===null?tt.firstBaseUpdate=K:x.next=K,tt.lastBaseUpdate=B))}if(m!==null){var at=p.baseState;T=0,tt=K=B=null,x=m;do{var Y=x.lane&-536870913,X=Y!==x.lane;if(X?(Kt&Y)===Y:(u&Y)===Y){Y!==0&&Y===Ks&&(zc=!0),tt!==null&&(tt=tt.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});t:{var Ot=e,xt=x;Y=r;var se=i;switch(xt.tag){case 1:if(Ot=xt.payload,typeof Ot=="function"){at=Ot.call(se,at,Y);break t}at=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=xt.payload,Y=typeof Ot=="function"?Ot.call(se,at,Y):Ot,Y==null)break t;at=y({},at,Y);break t;case 2:nr=!0}}Y=x.callback,Y!==null&&(e.flags|=64,X&&(e.flags|=8192),X=p.callbacks,X===null?p.callbacks=[Y]:X.push(Y))}else X={lane:Y,tag:x.tag,payload:x.payload,callback:x.callback,next:null},tt===null?(K=tt=X,B=at):tt=tt.next=X,T|=Y;if(x=x.next,x===null){if(x=p.shared.pending,x===null)break;X=x,x=X.next,X.next=null,p.lastBaseUpdate=X,p.shared.pending=null}}while(!0);tt===null&&(B=at),p.baseState=B,p.firstBaseUpdate=K,p.lastBaseUpdate=tt,m===null&&(p.shared.lanes=0),hr|=T,e.lanes=T,e.memoizedState=at}}function cd(e,r){if(typeof e!="function")throw Error(s(191,e));e.call(r)}function fd(e,r){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)cd(i[e],r)}var Xs=rt(null),Ru=rt(0);function hd(e,r){e=xa,ht(Ru,e),ht(Xs,r),xa=e|r.baseLanes}function Cc(){ht(Ru,xa),ht(Xs,Xs.current)}function Mc(){xa=Ru.current,mt(Xs),mt(Ru)}var sr=0,Bt=null,ae=null,_e=null,zu=!1,Qs=!1,ns=!1,Cu=0,co=0,Ws=null,u0=0;function we(){throw Error(s(321))}function Bc(e,r){if(r===null)return!1;for(var i=0;i<r.length&&i<e.length;i++)if(!yn(e[i],r[i]))return!1;return!0}function Uc(e,r,i,u,p,m){return sr=m,Bt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,W.H=e===null||e.memoizedState===null?Qd:Wd,ns=!1,m=i(u,p),ns=!1,Qs&&(m=dd(r,i,u,p)),pd(e),m}function pd(e){W.H=ju;var r=ae!==null&&ae.next!==null;if(sr=0,_e=ae=Bt=null,zu=!1,co=0,Ws=null,r)throw Error(s(300));e===null||Ce||(e=e.dependencies,e!==null&&Au(e)&&(Ce=!0))}function dd(e,r,i,u){Bt=e;var p=0;do{if(Qs&&(Ws=null),co=0,Qs=!1,25<=p)throw Error(s(301));if(p+=1,_e=ae=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}W.H=m0,m=r(i,u)}while(Qs);return m}function l0(){var e=W.H,r=e.useState()[0];return r=typeof r.then=="function"?fo(r):r,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(Bt.flags|=1024),r}function Ic(){var e=Cu!==0;return Cu=0,e}function Lc(e,r,i){r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i}function jc(e){if(zu){for(e=e.memoizedState;e!==null;){var r=e.queue;r!==null&&(r.pending=null),e=e.next}zu=!1}sr=0,_e=ae=Bt=null,Qs=!1,co=Cu=0,Ws=null}function cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?Bt.memoizedState=_e=e:_e=_e.next=e,_e}function xe(){if(ae===null){var e=Bt.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var r=_e===null?Bt.memoizedState:_e.next;if(r!==null)_e=r,ae=e;else{if(e===null)throw Bt.alternate===null?Error(s(467)):Error(s(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},_e===null?Bt.memoizedState=_e=e:_e=_e.next=e}return _e}function Vc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(e){var r=co;return co+=1,Ws===null&&(Ws=[]),e=od(Ws,e,r),r=Bt,(_e===null?r.memoizedState:_e.next)===null&&(r=r.alternate,W.H=r===null||r.memoizedState===null?Qd:Wd),e}function Mu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fo(e);if(e.$$typeof===P)return Ze(e)}throw Error(s(438,String(e)))}function Hc(e){var r=null,i=Bt.updateQueue;if(i!==null&&(r=i.memoCache),r==null){var u=Bt.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(p){return p.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),i===null&&(i=Vc(),Bt.updateQueue=i),i.memoCache=r,i=r.data[r.index],i===void 0)for(i=r.data[r.index]=Array(e),u=0;u<e;u++)i[u]=ft;return r.index++,i}function Sa(e,r){return typeof r=="function"?r(e):r}function Bu(e){var r=xe();return qc(r,ae,e)}function qc(e,r,i){var u=e.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=i;var p=e.baseQueue,m=u.pending;if(m!==null){if(p!==null){var T=p.next;p.next=m.next,m.next=T}r.baseQueue=p=m,u.pending=null}if(m=e.baseState,p===null)e.memoizedState=m;else{r=p.next;var x=T=null,B=null,K=r,tt=!1;do{var at=K.lane&-536870913;if(at!==K.lane?(Kt&at)===at:(sr&at)===at){var Y=K.revertLane;if(Y===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),at===Ks&&(tt=!0);else if((sr&Y)===Y){K=K.next,Y===Ks&&(tt=!0);continue}else at={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},B===null?(x=B=at,T=m):B=B.next=at,Bt.lanes|=Y,hr|=Y;at=K.action,ns&&i(m,at),m=K.hasEagerState?K.eagerState:i(m,at)}else Y={lane:at,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},B===null?(x=B=Y,T=m):B=B.next=Y,Bt.lanes|=at,hr|=at;K=K.next}while(K!==null&&K!==r);if(B===null?T=m:B.next=x,!yn(m,e.memoizedState)&&(Ce=!0,tt&&(i=Ys,i!==null)))throw i;e.memoizedState=m,e.baseState=T,e.baseQueue=B,u.lastRenderedState=m}return p===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function Fc(e){var r=xe(),i=r.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var u=i.dispatch,p=i.pending,m=r.memoizedState;if(p!==null){i.pending=null;var T=p=p.next;do m=e(m,T.action),T=T.next;while(T!==p);yn(m,r.memoizedState)||(Ce=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),i.lastRenderedState=m}return[m,u]}function md(e,r,i){var u=Bt,p=xe(),m=Wt;if(m){if(i===void 0)throw Error(s(407));i=i()}else i=r();var T=!yn((ae||p).memoizedState,i);T&&(p.memoizedState=i,Ce=!0),p=p.queue;var x=bd.bind(null,u,p,e);if(ho(2048,8,x,[e]),p.getSnapshot!==r||T||_e!==null&&_e.memoizedState.tag&1){if(u.flags|=2048,Ps(9,Uu(),yd.bind(null,u,p,i,r),null),ue===null)throw Error(s(349));m||(sr&124)!==0||gd(u,r,i)}return i}function gd(e,r,i){e.flags|=16384,e={getSnapshot:r,value:i},r=Bt.updateQueue,r===null?(r=Vc(),Bt.updateQueue=r,r.stores=[e]):(i=r.stores,i===null?r.stores=[e]:i.push(e))}function yd(e,r,i,u){r.value=i,r.getSnapshot=u,vd(r)&&Sd(e)}function bd(e,r,i){return i(function(){vd(r)&&Sd(e)})}function vd(e){var r=e.getSnapshot;e=e.value;try{var i=r();return!yn(e,i)}catch{return!0}}function Sd(e){var r=Hs(e,2);r!==null&&Nn(r,e,2)}function Gc(e){var r=cn();if(typeof e=="function"){var i=e;if(e=i(),ns){Vn(!0);try{i()}finally{Vn(!1)}}}return r.memoizedState=r.baseState=e,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},r}function wd(e,r,i,u){return e.baseState=i,qc(e,ae,typeof u=="function"?u:Sa)}function c0(e,r,i,u,p){if(Lu(e))throw Error(s(485));if(e=r.action,e!==null){var m={payload:p,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};W.T!==null?i(!0):m.isTransition=!1,u(m),i=r.pending,i===null?(m.next=r.pending=m,Td(r,m)):(m.next=i.next,r.pending=i.next=m)}}function Td(e,r){var i=r.action,u=r.payload,p=e.state;if(r.isTransition){var m=W.T,T={};W.T=T;try{var x=i(p,u),B=W.S;B!==null&&B(T,x),Nd(e,r,x)}catch(K){Kc(e,r,K)}finally{W.T=m}}else try{m=i(p,u),Nd(e,r,m)}catch(K){Kc(e,r,K)}}function Nd(e,r,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(u){Ed(e,r,u)},function(u){return Kc(e,r,u)}):Ed(e,r,i)}function Ed(e,r,i){r.status="fulfilled",r.value=i,_d(r),e.state=i,r=e.pending,r!==null&&(i=r.next,i===r?e.pending=null:(i=i.next,r.next=i,Td(e,i)))}function Kc(e,r,i){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=i,_d(r),r=r.next;while(r!==u)}e.action=null}function _d(e){e=e.listeners;for(var r=0;r<e.length;r++)(0,e[r])()}function xd(e,r){return r}function Ad(e,r){if(Wt){var i=ue.formState;if(i!==null){t:{var u=Bt;if(Wt){if(ye){e:{for(var p=ye,m=Jn;p.nodeType!==8;){if(!m){p=null;break e}if(p=Kn(p.nextSibling),p===null){p=null;break e}}m=p.data,p=m==="F!"||m==="F"?p:null}if(p){ye=Kn(p.nextSibling),u=p.data==="F!";break t}}Zr(u)}u=!1}u&&(r=i[0])}}return i=cn(),i.memoizedState=i.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xd,lastRenderedState:r},i.queue=u,i=Kd.bind(null,Bt,u),u.dispatch=i,u=Gc(!1),m=Pc.bind(null,Bt,!1,u.queue),u=cn(),p={state:r,dispatch:null,action:e,pending:null},u.queue=p,i=c0.bind(null,Bt,p,m,i),p.dispatch=i,u.memoizedState=e,[r,i,!1]}function Od(e){var r=xe();return Dd(r,ae,e)}function Dd(e,r,i){if(r=qc(e,r,xd)[0],e=Bu(Sa)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=fo(r)}catch(T){throw T===so?ku:T}else u=r;r=xe();var p=r.queue,m=p.dispatch;return i!==r.memoizedState&&(Bt.flags|=2048,Ps(9,Uu(),f0.bind(null,p,i),null)),[u,m,e]}function f0(e,r){e.action=r}function kd(e){var r=xe(),i=ae;if(i!==null)return Dd(r,i,e);xe(),r=r.memoizedState,i=xe();var u=i.queue.dispatch;return i.memoizedState=e,[r,u,!1]}function Ps(e,r,i,u){return e={tag:e,create:i,deps:u,inst:r,next:null},r=Bt.updateQueue,r===null&&(r=Vc(),Bt.updateQueue=r),i=r.lastEffect,i===null?r.lastEffect=e.next=e:(u=i.next,i.next=e,e.next=u,r.lastEffect=e),e}function Uu(){return{destroy:void 0,resource:void 0}}function $d(){return xe().memoizedState}function Iu(e,r,i,u){var p=cn();u=u===void 0?null:u,Bt.flags|=e,p.memoizedState=Ps(1|r,Uu(),i,u)}function ho(e,r,i,u){var p=xe();u=u===void 0?null:u;var m=p.memoizedState.inst;ae!==null&&u!==null&&Bc(u,ae.memoizedState.deps)?p.memoizedState=Ps(r,m,i,u):(Bt.flags|=e,p.memoizedState=Ps(1|r,m,i,u))}function Rd(e,r){Iu(8390656,8,e,r)}function zd(e,r){ho(2048,8,e,r)}function Cd(e,r){return ho(4,2,e,r)}function Md(e,r){return ho(4,4,e,r)}function Bd(e,r){if(typeof r=="function"){e=e();var i=r(e);return function(){typeof i=="function"?i():r(null)}}if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Ud(e,r,i){i=i!=null?i.concat([e]):null,ho(4,4,Bd.bind(null,r,e),i)}function Yc(){}function Id(e,r){var i=xe();r=r===void 0?null:r;var u=i.memoizedState;return r!==null&&Bc(r,u[1])?u[0]:(i.memoizedState=[e,r],e)}function Ld(e,r){var i=xe();r=r===void 0?null:r;var u=i.memoizedState;if(r!==null&&Bc(r,u[1]))return u[0];if(u=e(),ns){Vn(!0);try{e()}finally{Vn(!1)}}return i.memoizedState=[u,r],u}function Xc(e,r,i){return i===void 0||(sr&1073741824)!==0?e.memoizedState=r:(e.memoizedState=i,e=Hm(),Bt.lanes|=e,hr|=e,i)}function jd(e,r,i,u){return yn(i,r)?i:Xs.current!==null?(e=Xc(e,i,u),yn(e,r)||(Ce=!0),e):(sr&42)===0?(Ce=!0,e.memoizedState=i):(e=Hm(),Bt.lanes|=e,hr|=e,r)}function Vd(e,r,i,u,p){var m=lt.p;lt.p=m!==0&&8>m?m:8;var T=W.T,x={};W.T=x,Pc(e,!1,r,i);try{var B=p(),K=W.S;if(K!==null&&K(x,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var tt=o0(B,u);po(e,r,tt,Tn(e))}else po(e,r,u,Tn(e))}catch(at){po(e,r,{then:function(){},status:"rejected",reason:at},Tn())}finally{lt.p=m,W.T=T}}function h0(){}function Qc(e,r,i,u){if(e.tag!==5)throw Error(s(476));var p=Hd(e).queue;Vd(e,p,r,yt,i===null?h0:function(){return qd(e),i(u)})}function Hd(e){var r=e.memoizedState;if(r!==null)return r;r={memoizedState:yt,baseState:yt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:yt},next:null};var i={};return r.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:i},next:null},e.memoizedState=r,e=e.alternate,e!==null&&(e.memoizedState=r),r}function qd(e){var r=Hd(e).next.queue;po(e,r,{},Tn())}function Wc(){return Ze(Ro)}function Fd(){return xe().memoizedState}function Gd(){return xe().memoizedState}function p0(e){for(var r=e.return;r!==null;){switch(r.tag){case 24:case 3:var i=Tn();e=ar(i);var u=rr(r,e,i);u!==null&&(Nn(u,r,i),oo(u,r,i)),r={cache:xc()},e.payload=r;return}r=r.return}}function d0(e,r,i){var u=Tn();i={lane:u,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},Lu(e)?Yd(r,i):(i=gc(e,r,i,u),i!==null&&(Nn(i,e,u),Xd(i,r,u)))}function Kd(e,r,i){var u=Tn();po(e,r,i,u)}function po(e,r,i,u){var p={lane:u,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))Yd(r,p);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var T=r.lastRenderedState,x=m(T,i);if(p.hasEagerState=!0,p.eagerState=x,yn(x,T))return Tu(e,r,p,0),ue===null&&wu(),!1}catch{}finally{}if(i=gc(e,r,p,u),i!==null)return Nn(i,e,u),Xd(i,r,u),!0}return!1}function Pc(e,r,i,u){if(u={lane:2,revertLane:kf(),action:u,hasEagerState:!1,eagerState:null,next:null},Lu(e)){if(r)throw Error(s(479))}else r=gc(e,i,u,2),r!==null&&Nn(r,e,2)}function Lu(e){var r=e.alternate;return e===Bt||r!==null&&r===Bt}function Yd(e,r){Qs=zu=!0;var i=e.pending;i===null?r.next=r:(r.next=i.next,i.next=r),e.pending=r}function Xd(e,r,i){if((i&4194048)!==0){var u=r.lanes;u&=e.pendingLanes,i|=u,r.lanes=i,lu(e,i)}}var ju={readContext:Ze,use:Mu,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we},Qd={readContext:Ze,use:Mu,useCallback:function(e,r){return cn().memoizedState=[e,r===void 0?null:r],e},useContext:Ze,useEffect:Rd,useImperativeHandle:function(e,r,i){i=i!=null?i.concat([e]):null,Iu(4194308,4,Bd.bind(null,r,e),i)},useLayoutEffect:function(e,r){return Iu(4194308,4,e,r)},useInsertionEffect:function(e,r){Iu(4,2,e,r)},useMemo:function(e,r){var i=cn();r=r===void 0?null:r;var u=e();if(ns){Vn(!0);try{e()}finally{Vn(!1)}}return i.memoizedState=[u,r],u},useReducer:function(e,r,i){var u=cn();if(i!==void 0){var p=i(r);if(ns){Vn(!0);try{i(r)}finally{Vn(!1)}}}else p=r;return u.memoizedState=u.baseState=p,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:p},u.queue=e,e=e.dispatch=d0.bind(null,Bt,e),[u.memoizedState,e]},useRef:function(e){var r=cn();return e={current:e},r.memoizedState=e},useState:function(e){e=Gc(e);var r=e.queue,i=Kd.bind(null,Bt,r);return r.dispatch=i,[e.memoizedState,i]},useDebugValue:Yc,useDeferredValue:function(e,r){var i=cn();return Xc(i,e,r)},useTransition:function(){var e=Gc(!1);return e=Vd.bind(null,Bt,e.queue,!0,!1),cn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,r,i){var u=Bt,p=cn();if(Wt){if(i===void 0)throw Error(s(407));i=i()}else{if(i=r(),ue===null)throw Error(s(349));(Kt&124)!==0||gd(u,r,i)}p.memoizedState=i;var m={value:i,getSnapshot:r};return p.queue=m,Rd(bd.bind(null,u,m,e),[e]),u.flags|=2048,Ps(9,Uu(),yd.bind(null,u,m,i,r),null),i},useId:function(){var e=cn(),r=ue.identifierPrefix;if(Wt){var i=ya,u=ga;i=(u&~(1<<32-Re(u)-1)).toString(32)+i,r="«"+r+"R"+i,i=Cu++,0<i&&(r+="H"+i.toString(32)),r+="»"}else i=u0++,r="«"+r+"r"+i.toString(32)+"»";return e.memoizedState=r},useHostTransitionStatus:Wc,useFormState:Ad,useActionState:Ad,useOptimistic:function(e){var r=cn();r.memoizedState=r.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=i,r=Pc.bind(null,Bt,!0,i),i.dispatch=r,[e,r]},useMemoCache:Hc,useCacheRefresh:function(){return cn().memoizedState=p0.bind(null,Bt)}},Wd={readContext:Ze,use:Mu,useCallback:Id,useContext:Ze,useEffect:zd,useImperativeHandle:Ud,useInsertionEffect:Cd,useLayoutEffect:Md,useMemo:Ld,useReducer:Bu,useRef:$d,useState:function(){return Bu(Sa)},useDebugValue:Yc,useDeferredValue:function(e,r){var i=xe();return jd(i,ae.memoizedState,e,r)},useTransition:function(){var e=Bu(Sa)[0],r=xe().memoizedState;return[typeof e=="boolean"?e:fo(e),r]},useSyncExternalStore:md,useId:Fd,useHostTransitionStatus:Wc,useFormState:Od,useActionState:Od,useOptimistic:function(e,r){var i=xe();return wd(i,ae,e,r)},useMemoCache:Hc,useCacheRefresh:Gd},m0={readContext:Ze,use:Mu,useCallback:Id,useContext:Ze,useEffect:zd,useImperativeHandle:Ud,useInsertionEffect:Cd,useLayoutEffect:Md,useMemo:Ld,useReducer:Fc,useRef:$d,useState:function(){return Fc(Sa)},useDebugValue:Yc,useDeferredValue:function(e,r){var i=xe();return ae===null?Xc(i,e,r):jd(i,ae.memoizedState,e,r)},useTransition:function(){var e=Fc(Sa)[0],r=xe().memoizedState;return[typeof e=="boolean"?e:fo(e),r]},useSyncExternalStore:md,useId:Fd,useHostTransitionStatus:Wc,useFormState:kd,useActionState:kd,useOptimistic:function(e,r){var i=xe();return ae!==null?wd(i,ae,e,r):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Hc,useCacheRefresh:Gd},Zs=null,mo=0;function Vu(e){var r=mo;return mo+=1,Zs===null&&(Zs=[]),od(Zs,e,r)}function go(e,r){r=r.props.ref,e.ref=r!==void 0?r:null}function Hu(e,r){throw r.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(r),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)))}function Pd(e){var r=e._init;return r(e._payload)}function Zd(e){function r(q,j){if(e){var F=q.deletions;F===null?(q.deletions=[j],q.flags|=16):F.push(j)}}function i(q,j){if(!e)return null;for(;j!==null;)r(q,j),j=j.sibling;return null}function u(q){for(var j=new Map;q!==null;)q.key!==null?j.set(q.key,q):j.set(q.index,q),q=q.sibling;return j}function p(q,j){return q=ma(q,j),q.index=0,q.sibling=null,q}function m(q,j,F){return q.index=F,e?(F=q.alternate,F!==null?(F=F.index,F<j?(q.flags|=67108866,j):F):(q.flags|=67108866,j)):(q.flags|=1048576,j)}function T(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function x(q,j,F,nt){return j===null||j.tag!==6?(j=bc(F,q.mode,nt),j.return=q,j):(j=p(j,F),j.return=q,j)}function B(q,j,F,nt){var gt=F.type;return gt===E?tt(q,j,F.props.children,nt,F.key):j!==null&&(j.elementType===gt||typeof gt=="object"&&gt!==null&&gt.$$typeof===ut&&Pd(gt)===j.type)?(j=p(j,F.props),go(j,F),j.return=q,j):(j=Eu(F.type,F.key,F.props,null,q.mode,nt),go(j,F),j.return=q,j)}function K(q,j,F,nt){return j===null||j.tag!==4||j.stateNode.containerInfo!==F.containerInfo||j.stateNode.implementation!==F.implementation?(j=vc(F,q.mode,nt),j.return=q,j):(j=p(j,F.children||[]),j.return=q,j)}function tt(q,j,F,nt,gt){return j===null||j.tag!==7?(j=Xr(F,q.mode,nt,gt),j.return=q,j):(j=p(j,F),j.return=q,j)}function at(q,j,F){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=bc(""+j,q.mode,F),j.return=q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return F=Eu(j.type,j.key,j.props,null,q.mode,F),go(F,j),F.return=q,F;case N:return j=vc(j,q.mode,F),j.return=q,j;case ut:var nt=j._init;return j=nt(j._payload),at(q,j,F)}if(Ft(j)||Dt(j))return j=Xr(j,q.mode,F,null),j.return=q,j;if(typeof j.then=="function")return at(q,Vu(j),F);if(j.$$typeof===P)return at(q,Ou(q,j),F);Hu(q,j)}return null}function Y(q,j,F,nt){var gt=j!==null?j.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return gt!==null?null:x(q,j,""+F,nt);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case S:return F.key===gt?B(q,j,F,nt):null;case N:return F.key===gt?K(q,j,F,nt):null;case ut:return gt=F._init,F=gt(F._payload),Y(q,j,F,nt)}if(Ft(F)||Dt(F))return gt!==null?null:tt(q,j,F,nt,null);if(typeof F.then=="function")return Y(q,j,Vu(F),nt);if(F.$$typeof===P)return Y(q,j,Ou(q,F),nt);Hu(q,F)}return null}function X(q,j,F,nt,gt){if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return q=q.get(F)||null,x(j,q,""+nt,gt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:return q=q.get(nt.key===null?F:nt.key)||null,B(j,q,nt,gt);case N:return q=q.get(nt.key===null?F:nt.key)||null,K(j,q,nt,gt);case ut:var Ut=nt._init;return nt=Ut(nt._payload),X(q,j,F,nt,gt)}if(Ft(nt)||Dt(nt))return q=q.get(F)||null,tt(j,q,nt,gt,null);if(typeof nt.then=="function")return X(q,j,F,Vu(nt),gt);if(nt.$$typeof===P)return X(q,j,F,Ou(j,nt),gt);Hu(j,nt)}return null}function Ot(q,j,F,nt){for(var gt=null,Ut=null,vt=j,At=j=0,Be=null;vt!==null&&At<F.length;At++){vt.index>At?(Be=vt,vt=null):Be=vt.sibling;var Xt=Y(q,vt,F[At],nt);if(Xt===null){vt===null&&(vt=Be);break}e&&vt&&Xt.alternate===null&&r(q,vt),j=m(Xt,j,At),Ut===null?gt=Xt:Ut.sibling=Xt,Ut=Xt,vt=Be}if(At===F.length)return i(q,vt),Wt&&Wr(q,At),gt;if(vt===null){for(;At<F.length;At++)vt=at(q,F[At],nt),vt!==null&&(j=m(vt,j,At),Ut===null?gt=vt:Ut.sibling=vt,Ut=vt);return Wt&&Wr(q,At),gt}for(vt=u(vt);At<F.length;At++)Be=X(vt,q,At,F[At],nt),Be!==null&&(e&&Be.alternate!==null&&vt.delete(Be.key===null?At:Be.key),j=m(Be,j,At),Ut===null?gt=Be:Ut.sibling=Be,Ut=Be);return e&&vt.forEach(function(wr){return r(q,wr)}),Wt&&Wr(q,At),gt}function xt(q,j,F,nt){if(F==null)throw Error(s(151));for(var gt=null,Ut=null,vt=j,At=j=0,Be=null,Xt=F.next();vt!==null&&!Xt.done;At++,Xt=F.next()){vt.index>At?(Be=vt,vt=null):Be=vt.sibling;var wr=Y(q,vt,Xt.value,nt);if(wr===null){vt===null&&(vt=Be);break}e&&vt&&wr.alternate===null&&r(q,vt),j=m(wr,j,At),Ut===null?gt=wr:Ut.sibling=wr,Ut=wr,vt=Be}if(Xt.done)return i(q,vt),Wt&&Wr(q,At),gt;if(vt===null){for(;!Xt.done;At++,Xt=F.next())Xt=at(q,Xt.value,nt),Xt!==null&&(j=m(Xt,j,At),Ut===null?gt=Xt:Ut.sibling=Xt,Ut=Xt);return Wt&&Wr(q,At),gt}for(vt=u(vt);!Xt.done;At++,Xt=F.next())Xt=X(vt,q,At,Xt.value,nt),Xt!==null&&(e&&Xt.alternate!==null&&vt.delete(Xt.key===null?At:Xt.key),j=m(Xt,j,At),Ut===null?gt=Xt:Ut.sibling=Xt,Ut=Xt);return e&&vt.forEach(function(g3){return r(q,g3)}),Wt&&Wr(q,At),gt}function se(q,j,F,nt){if(typeof F=="object"&&F!==null&&F.type===E&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case S:t:{for(var gt=F.key;j!==null;){if(j.key===gt){if(gt=F.type,gt===E){if(j.tag===7){i(q,j.sibling),nt=p(j,F.props.children),nt.return=q,q=nt;break t}}else if(j.elementType===gt||typeof gt=="object"&&gt!==null&&gt.$$typeof===ut&&Pd(gt)===j.type){i(q,j.sibling),nt=p(j,F.props),go(nt,F),nt.return=q,q=nt;break t}i(q,j);break}else r(q,j);j=j.sibling}F.type===E?(nt=Xr(F.props.children,q.mode,nt,F.key),nt.return=q,q=nt):(nt=Eu(F.type,F.key,F.props,null,q.mode,nt),go(nt,F),nt.return=q,q=nt)}return T(q);case N:t:{for(gt=F.key;j!==null;){if(j.key===gt)if(j.tag===4&&j.stateNode.containerInfo===F.containerInfo&&j.stateNode.implementation===F.implementation){i(q,j.sibling),nt=p(j,F.children||[]),nt.return=q,q=nt;break t}else{i(q,j);break}else r(q,j);j=j.sibling}nt=vc(F,q.mode,nt),nt.return=q,q=nt}return T(q);case ut:return gt=F._init,F=gt(F._payload),se(q,j,F,nt)}if(Ft(F))return Ot(q,j,F,nt);if(Dt(F)){if(gt=Dt(F),typeof gt!="function")throw Error(s(150));return F=gt.call(F),xt(q,j,F,nt)}if(typeof F.then=="function")return se(q,j,Vu(F),nt);if(F.$$typeof===P)return se(q,j,Ou(q,F),nt);Hu(q,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,j!==null&&j.tag===6?(i(q,j.sibling),nt=p(j,F),nt.return=q,q=nt):(i(q,j),nt=bc(F,q.mode,nt),nt.return=q,q=nt),T(q)):i(q,j)}return function(q,j,F,nt){try{mo=0;var gt=se(q,j,F,nt);return Zs=null,gt}catch(vt){if(vt===so||vt===ku)throw vt;var Ut=bn(29,vt,null,q.mode);return Ut.lanes=nt,Ut.return=q,Ut}finally{}}}var Js=Zd(!0),Jd=Zd(!1),$n=rt(null),ta=null;function ir(e){var r=e.alternate;ht(De,De.current&1),ht($n,e),ta===null&&(r===null||Xs.current!==null||r.memoizedState!==null)&&(ta=e)}function tm(e){if(e.tag===22){if(ht(De,De.current),ht($n,e),ta===null){var r=e.alternate;r!==null&&r.memoizedState!==null&&(ta=e)}}else or()}function or(){ht(De,De.current),ht($n,$n.current)}function wa(e){mt($n),ta===e&&(ta=null),mt(De)}var De=rt(0);function qu(e){for(var r=e;r!==null;){if(r.tag===13){var i=r.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||Hf(i)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Zc(e,r,i,u){r=e.memoizedState,i=i(u,r),i=i==null?r:y({},r,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Jc={enqueueSetState:function(e,r,i){e=e._reactInternals;var u=Tn(),p=ar(u);p.payload=r,i!=null&&(p.callback=i),r=rr(e,p,u),r!==null&&(Nn(r,e,u),oo(r,e,u))},enqueueReplaceState:function(e,r,i){e=e._reactInternals;var u=Tn(),p=ar(u);p.tag=1,p.payload=r,i!=null&&(p.callback=i),r=rr(e,p,u),r!==null&&(Nn(r,e,u),oo(r,e,u))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var i=Tn(),u=ar(i);u.tag=2,r!=null&&(u.callback=r),r=rr(e,u,i),r!==null&&(Nn(r,e,i),oo(r,e,i))}};function em(e,r,i,u,p,m,T){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,m,T):r.prototype&&r.prototype.isPureReactComponent?!Pi(i,u)||!Pi(p,m):!0}function nm(e,r,i,u){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(i,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(i,u),r.state!==e&&Jc.enqueueReplaceState(r,r.state,null)}function as(e,r){var i=r;if("ref"in r){i={};for(var u in r)u!=="ref"&&(i[u]=r[u])}if(e=e.defaultProps){i===r&&(i=y({},i));for(var p in e)i[p]===void 0&&(i[p]=e[p])}return i}var Fu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function am(e){Fu(e)}function rm(e){console.error(e)}function sm(e){Fu(e)}function Gu(e,r){try{var i=e.onUncaughtError;i(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function im(e,r,i){try{var u=e.onCaughtError;u(i.value,{componentStack:i.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function tf(e,r,i){return i=ar(i),i.tag=3,i.payload={element:null},i.callback=function(){Gu(e,r)},i}function om(e){return e=ar(e),e.tag=3,e}function um(e,r,i,u){var p=i.type.getDerivedStateFromError;if(typeof p=="function"){var m=u.value;e.payload=function(){return p(m)},e.callback=function(){im(r,i,u)}}var T=i.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(e.callback=function(){im(r,i,u),typeof p!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var x=u.stack;this.componentDidCatch(u.value,{componentStack:x!==null?x:""})})}function g0(e,r,i,u,p){if(i.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=i.alternate,r!==null&&no(r,i,p,!0),i=$n.current,i!==null){switch(i.tag){case 13:return ta===null?_f():i.alternate===null&&be===0&&(be=3),i.flags&=-257,i.flags|=65536,i.lanes=p,u===Dc?i.flags|=16384:(r=i.updateQueue,r===null?i.updateQueue=new Set([u]):r.add(u),Af(e,u,p)),!1;case 22:return i.flags|=65536,u===Dc?i.flags|=16384:(r=i.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},i.updateQueue=r):(i=r.retryQueue,i===null?r.retryQueue=new Set([u]):i.add(u)),Af(e,u,p)),!1}throw Error(s(435,i.tag))}return Af(e,u,p),_f(),!1}if(Wt)return r=$n.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=p,u!==Tc&&(e=Error(s(422),{cause:u}),eo(An(e,i)))):(u!==Tc&&(r=Error(s(423),{cause:u}),eo(An(r,i))),e=e.current.alternate,e.flags|=65536,p&=-p,e.lanes|=p,u=An(u,i),p=tf(e.stateNode,u,p),Rc(e,p),be!==4&&(be=2)),!1;var m=Error(s(520),{cause:u});if(m=An(m,i),No===null?No=[m]:No.push(m),be!==4&&(be=2),r===null)return!0;u=An(u,i),i=r;do{switch(i.tag){case 3:return i.flags|=65536,e=p&-p,i.lanes|=e,e=tf(i.stateNode,u,e),Rc(i,e),!1;case 1:if(r=i.type,m=i.stateNode,(i.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pr===null||!pr.has(m))))return i.flags|=65536,p&=-p,i.lanes|=p,p=om(p),um(p,e,i,u),Rc(i,p),!1}i=i.return}while(i!==null);return!1}var lm=Error(s(461)),Ce=!1;function qe(e,r,i,u){r.child=e===null?Jd(r,null,i,u):Js(r,e.child,i,u)}function cm(e,r,i,u,p){i=i.render;var m=r.ref;if("ref"in u){var T={};for(var x in u)x!=="ref"&&(T[x]=u[x])}else T=u;return ts(r),u=Uc(e,r,i,T,m,p),x=Ic(),e!==null&&!Ce?(Lc(e,r,p),Ta(e,r,p)):(Wt&&x&&Sc(r),r.flags|=1,qe(e,r,u,p),r.child)}function fm(e,r,i,u,p){if(e===null){var m=i.type;return typeof m=="function"&&!yc(m)&&m.defaultProps===void 0&&i.compare===null?(r.tag=15,r.type=m,hm(e,r,m,u,p)):(e=Eu(i.type,null,u,r,r.mode,p),e.ref=r.ref,e.return=r,r.child=e)}if(m=e.child,!lf(e,p)){var T=m.memoizedProps;if(i=i.compare,i=i!==null?i:Pi,i(T,u)&&e.ref===r.ref)return Ta(e,r,p)}return r.flags|=1,e=ma(m,u),e.ref=r.ref,e.return=r,r.child=e}function hm(e,r,i,u,p){if(e!==null){var m=e.memoizedProps;if(Pi(m,u)&&e.ref===r.ref)if(Ce=!1,r.pendingProps=u=m,lf(e,p))(e.flags&131072)!==0&&(Ce=!0);else return r.lanes=e.lanes,Ta(e,r,p)}return ef(e,r,i,u,p)}function pm(e,r,i){var u=r.pendingProps,p=u.children,m=e!==null?e.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|i:i,e!==null){for(p=r.child=e.child,m=0;p!==null;)m=m|p.lanes|p.childLanes,p=p.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return dm(e,r,u,i)}if((i&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},e!==null&&Du(r,m!==null?m.cachePool:null),m!==null?hd(r,m):Cc(),tm(r);else return r.lanes=r.childLanes=536870912,dm(e,r,m!==null?m.baseLanes|i:i,i)}else m!==null?(Du(r,m.cachePool),hd(r,m),or(),r.memoizedState=null):(e!==null&&Du(r,null),Cc(),or());return qe(e,r,p,i),r.child}function dm(e,r,i,u){var p=Oc();return p=p===null?null:{parent:Oe._currentValue,pool:p},r.memoizedState={baseLanes:i,cachePool:p},e!==null&&Du(r,null),Cc(),tm(r),e!==null&&no(e,r,u,!0),null}function Ku(e,r){var i=r.ref;if(i===null)e!==null&&e.ref!==null&&(r.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(e===null||e.ref!==i)&&(r.flags|=4194816)}}function ef(e,r,i,u,p){return ts(r),i=Uc(e,r,i,u,void 0,p),u=Ic(),e!==null&&!Ce?(Lc(e,r,p),Ta(e,r,p)):(Wt&&u&&Sc(r),r.flags|=1,qe(e,r,i,p),r.child)}function mm(e,r,i,u,p,m){return ts(r),r.updateQueue=null,i=dd(r,u,i,p),pd(e),u=Ic(),e!==null&&!Ce?(Lc(e,r,m),Ta(e,r,m)):(Wt&&u&&Sc(r),r.flags|=1,qe(e,r,i,m),r.child)}function gm(e,r,i,u,p){if(ts(r),r.stateNode===null){var m=qs,T=i.contextType;typeof T=="object"&&T!==null&&(m=Ze(T)),m=new i(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Jc,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},kc(r),T=i.contextType,m.context=typeof T=="object"&&T!==null?Ze(T):qs,m.state=r.memoizedState,T=i.getDerivedStateFromProps,typeof T=="function"&&(Zc(r,i,T,u),m.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&Jc.enqueueReplaceState(m,m.state,null),lo(r,u,m,p),uo(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(e===null){m=r.stateNode;var x=r.memoizedProps,B=as(i,x);m.props=B;var K=m.context,tt=i.contextType;T=qs,typeof tt=="object"&&tt!==null&&(T=Ze(tt));var at=i.getDerivedStateFromProps;tt=typeof at=="function"||typeof m.getSnapshotBeforeUpdate=="function",x=r.pendingProps!==x,tt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x||K!==T)&&nm(r,m,u,T),nr=!1;var Y=r.memoizedState;m.state=Y,lo(r,u,m,p),uo(),K=r.memoizedState,x||Y!==K||nr?(typeof at=="function"&&(Zc(r,i,at,u),K=r.memoizedState),(B=nr||em(r,i,B,u,Y,K,T))?(tt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=K),m.props=u,m.state=K,m.context=T,u=B):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,$c(e,r),T=r.memoizedProps,tt=as(i,T),m.props=tt,at=r.pendingProps,Y=m.context,K=i.contextType,B=qs,typeof K=="object"&&K!==null&&(B=Ze(K)),x=i.getDerivedStateFromProps,(K=typeof x=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==at||Y!==B)&&nm(r,m,u,B),nr=!1,Y=r.memoizedState,m.state=Y,lo(r,u,m,p),uo();var X=r.memoizedState;T!==at||Y!==X||nr||e!==null&&e.dependencies!==null&&Au(e.dependencies)?(typeof x=="function"&&(Zc(r,i,x,u),X=r.memoizedState),(tt=nr||em(r,i,tt,u,Y,X,B)||e!==null&&e.dependencies!==null&&Au(e.dependencies))?(K||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,X,B),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,X,B)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&Y===e.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&Y===e.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=X),m.props=u,m.state=X,m.context=B,u=tt):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&Y===e.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&Y===e.memoizedState||(r.flags|=1024),u=!1)}return m=u,Ku(e,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,i=u&&typeof i.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,e!==null&&u?(r.child=Js(r,e.child,null,p),r.child=Js(r,null,i,p)):qe(e,r,i,p),r.memoizedState=m.state,e=r.child):e=Ta(e,r,p),e}function ym(e,r,i,u){return to(),r.flags|=256,qe(e,r,i,u),r.child}var nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function af(e){return{baseLanes:e,cachePool:rd()}}function rf(e,r,i){return e=e!==null?e.childLanes&~i:0,r&&(e|=Rn),e}function bm(e,r,i){var u=r.pendingProps,p=!1,m=(r.flags&128)!==0,T;if((T=m)||(T=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),T&&(p=!0,r.flags&=-129),T=(r.flags&32)!==0,r.flags&=-33,e===null){if(Wt){if(p?ir(r):or(),Wt){var x=ye,B;if(B=x){t:{for(B=x,x=Jn;B.nodeType!==8;){if(!x){x=null;break t}if(B=Kn(B.nextSibling),B===null){x=null;break t}}x=B}x!==null?(r.memoizedState={dehydrated:x,treeContext:Qr!==null?{id:ga,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},B=bn(18,null,null,0),B.stateNode=x,B.return=r,r.child=B,rn=r,ye=null,B=!0):B=!1}B||Zr(r)}if(x=r.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return Hf(x)?r.lanes=32:r.lanes=536870912,null;wa(r)}return x=u.children,u=u.fallback,p?(or(),p=r.mode,x=Yu({mode:"hidden",children:x},p),u=Xr(u,p,i,null),x.return=r,u.return=r,x.sibling=u,r.child=x,p=r.child,p.memoizedState=af(i),p.childLanes=rf(e,T,i),r.memoizedState=nf,u):(ir(r),sf(r,x))}if(B=e.memoizedState,B!==null&&(x=B.dehydrated,x!==null)){if(m)r.flags&256?(ir(r),r.flags&=-257,r=of(e,r,i)):r.memoizedState!==null?(or(),r.child=e.child,r.flags|=128,r=null):(or(),p=u.fallback,x=r.mode,u=Yu({mode:"visible",children:u.children},x),p=Xr(p,x,i,null),p.flags|=2,u.return=r,p.return=r,u.sibling=p,r.child=u,Js(r,e.child,null,i),u=r.child,u.memoizedState=af(i),u.childLanes=rf(e,T,i),r.memoizedState=nf,r=p);else if(ir(r),Hf(x)){if(T=x.nextSibling&&x.nextSibling.dataset,T)var K=T.dgst;T=K,u=Error(s(419)),u.stack="",u.digest=T,eo({value:u,source:null,stack:null}),r=of(e,r,i)}else if(Ce||no(e,r,i,!1),T=(i&e.childLanes)!==0,Ce||T){if(T=ue,T!==null&&(u=i&-i,u=(u&42)!==0?1:Di(u),u=(u&(T.suspendedLanes|i))!==0?0:u,u!==0&&u!==B.retryLane))throw B.retryLane=u,Hs(e,u),Nn(T,e,u),lm;x.data==="$?"||_f(),r=of(e,r,i)}else x.data==="$?"?(r.flags|=192,r.child=e.child,r=null):(e=B.treeContext,ye=Kn(x.nextSibling),rn=r,Wt=!0,Pr=null,Jn=!1,e!==null&&(Dn[kn++]=ga,Dn[kn++]=ya,Dn[kn++]=Qr,ga=e.id,ya=e.overflow,Qr=r),r=sf(r,u.children),r.flags|=4096);return r}return p?(or(),p=u.fallback,x=r.mode,B=e.child,K=B.sibling,u=ma(B,{mode:"hidden",children:u.children}),u.subtreeFlags=B.subtreeFlags&65011712,K!==null?p=ma(K,p):(p=Xr(p,x,i,null),p.flags|=2),p.return=r,u.return=r,u.sibling=p,r.child=u,u=p,p=r.child,x=e.child.memoizedState,x===null?x=af(i):(B=x.cachePool,B!==null?(K=Oe._currentValue,B=B.parent!==K?{parent:K,pool:K}:B):B=rd(),x={baseLanes:x.baseLanes|i,cachePool:B}),p.memoizedState=x,p.childLanes=rf(e,T,i),r.memoizedState=nf,u):(ir(r),i=e.child,e=i.sibling,i=ma(i,{mode:"visible",children:u.children}),i.return=r,i.sibling=null,e!==null&&(T=r.deletions,T===null?(r.deletions=[e],r.flags|=16):T.push(e)),r.child=i,r.memoizedState=null,i)}function sf(e,r){return r=Yu({mode:"visible",children:r},e.mode),r.return=e,e.child=r}function Yu(e,r){return e=bn(22,e,null,r),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function of(e,r,i){return Js(r,e.child,null,i),e=sf(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function vm(e,r,i){e.lanes|=r;var u=e.alternate;u!==null&&(u.lanes|=r),Ec(e.return,r,i)}function uf(e,r,i,u,p){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:i,tailMode:p}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=i,m.tailMode=p)}function Sm(e,r,i){var u=r.pendingProps,p=u.revealOrder,m=u.tail;if(qe(e,r,u.children,i),u=De.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vm(e,i,r);else if(e.tag===19)vm(e,i,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break t;for(;e.sibling===null;){if(e.return===null||e.return===r)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}u&=1}switch(ht(De,u),p){case"forwards":for(i=r.child,p=null;i!==null;)e=i.alternate,e!==null&&qu(e)===null&&(p=i),i=i.sibling;i=p,i===null?(p=r.child,r.child=null):(p=i.sibling,i.sibling=null),uf(r,!1,p,i,m);break;case"backwards":for(i=null,p=r.child,r.child=null;p!==null;){if(e=p.alternate,e!==null&&qu(e)===null){r.child=p;break}e=p.sibling,p.sibling=i,i=p,p=e}uf(r,!0,i,null,m);break;case"together":uf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ta(e,r,i){if(e!==null&&(r.dependencies=e.dependencies),hr|=r.lanes,(i&r.childLanes)===0)if(e!==null){if(no(e,r,i,!1),(i&r.childLanes)===0)return null}else return null;if(e!==null&&r.child!==e.child)throw Error(s(153));if(r.child!==null){for(e=r.child,i=ma(e,e.pendingProps),r.child=i,i.return=r;e.sibling!==null;)e=e.sibling,i=i.sibling=ma(e,e.pendingProps),i.return=r;i.sibling=null}return r.child}function lf(e,r){return(e.lanes&r)!==0?!0:(e=e.dependencies,!!(e!==null&&Au(e)))}function y0(e,r,i){switch(r.tag){case 3:ee(r,r.stateNode.containerInfo),er(r,Oe,e.memoizedState.cache),to();break;case 27:case 5:zr(r);break;case 4:ee(r,r.stateNode.containerInfo);break;case 10:er(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(ir(r),r.flags|=128,null):(i&r.child.childLanes)!==0?bm(e,r,i):(ir(r),e=Ta(e,r,i),e!==null?e.sibling:null);ir(r);break;case 19:var p=(e.flags&128)!==0;if(u=(i&r.childLanes)!==0,u||(no(e,r,i,!1),u=(i&r.childLanes)!==0),p){if(u)return Sm(e,r,i);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ht(De,De.current),u)break;return null;case 22:case 23:return r.lanes=0,pm(e,r,i);case 24:er(r,Oe,e.memoizedState.cache)}return Ta(e,r,i)}function wm(e,r,i){if(e!==null)if(e.memoizedProps!==r.pendingProps)Ce=!0;else{if(!lf(e,i)&&(r.flags&128)===0)return Ce=!1,y0(e,r,i);Ce=(e.flags&131072)!==0}else Ce=!1,Wt&&(r.flags&1048576)!==0&&Pp(r,xu,r.index);switch(r.lanes=0,r.tag){case 16:t:{e=r.pendingProps;var u=r.elementType,p=u._init;if(u=p(u._payload),r.type=u,typeof u=="function")yc(u)?(e=as(u,e),r.tag=1,r=gm(null,r,u,e,i)):(r.tag=0,r=ef(null,r,u,e,i));else{if(u!=null){if(p=u.$$typeof,p===H){r.tag=11,r=cm(null,r,u,e,i);break t}else if(p===st){r.tag=14,r=fm(null,r,u,e,i);break t}}throw r=Qt(u)||u,Error(s(306,r,""))}}return r;case 0:return ef(e,r,r.type,r.pendingProps,i);case 1:return u=r.type,p=as(u,r.pendingProps),gm(e,r,u,p,i);case 3:t:{if(ee(r,r.stateNode.containerInfo),e===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;p=m.element,$c(e,r),lo(r,u,null,i);var T=r.memoizedState;if(u=T.cache,er(r,Oe,u),u!==m.cache&&_c(r,[Oe],i,!0),uo(),u=T.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:T.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=ym(e,r,u,i);break t}else if(u!==p){p=An(Error(s(424)),r),eo(p),r=ym(e,r,u,i);break t}else{switch(e=r.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=Kn(e.firstChild),rn=r,Wt=!0,Pr=null,Jn=!0,i=Jd(r,null,u,i),r.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(to(),u===p){r=Ta(e,r,i);break t}qe(e,r,u,i)}r=r.child}return r;case 26:return Ku(e,r),e===null?(i=_1(r.type,null,r.pendingProps,null))?r.memoizedState=i:Wt||(i=r.type,e=r.pendingProps,u=ol(Et.current).createElement(i),u[ve]=r,u[Ve]=e,Ge(u,i,e),Se(u),r.stateNode=u):r.memoizedState=_1(r.type,e.memoizedProps,r.pendingProps,e.memoizedState),null;case 27:return zr(r),e===null&&Wt&&(u=r.stateNode=T1(r.type,r.pendingProps,Et.current),rn=r,Jn=!0,p=ye,gr(r.type)?(qf=p,ye=Kn(u.firstChild)):ye=p),qe(e,r,r.pendingProps.children,i),Ku(e,r),e===null&&(r.flags|=4194304),r.child;case 5:return e===null&&Wt&&((p=u=ye)&&(u=G0(u,r.type,r.pendingProps,Jn),u!==null?(r.stateNode=u,rn=r,ye=Kn(u.firstChild),Jn=!1,p=!0):p=!1),p||Zr(r)),zr(r),p=r.type,m=r.pendingProps,T=e!==null?e.memoizedProps:null,u=m.children,Lf(p,m)?u=null:T!==null&&Lf(p,T)&&(r.flags|=32),r.memoizedState!==null&&(p=Uc(e,r,l0,null,null,i),Ro._currentValue=p),Ku(e,r),qe(e,r,u,i),r.child;case 6:return e===null&&Wt&&((e=i=ye)&&(i=K0(i,r.pendingProps,Jn),i!==null?(r.stateNode=i,rn=r,ye=null,e=!0):e=!1),e||Zr(r)),null;case 13:return bm(e,r,i);case 4:return ee(r,r.stateNode.containerInfo),u=r.pendingProps,e===null?r.child=Js(r,null,u,i):qe(e,r,u,i),r.child;case 11:return cm(e,r,r.type,r.pendingProps,i);case 7:return qe(e,r,r.pendingProps,i),r.child;case 8:return qe(e,r,r.pendingProps.children,i),r.child;case 12:return qe(e,r,r.pendingProps.children,i),r.child;case 10:return u=r.pendingProps,er(r,r.type,u.value),qe(e,r,u.children,i),r.child;case 9:return p=r.type._context,u=r.pendingProps.children,ts(r),p=Ze(p),u=u(p),r.flags|=1,qe(e,r,u,i),r.child;case 14:return fm(e,r,r.type,r.pendingProps,i);case 15:return hm(e,r,r.type,r.pendingProps,i);case 19:return Sm(e,r,i);case 31:return u=r.pendingProps,i=r.mode,u={mode:u.mode,children:u.children},e===null?(i=Yu(u,i),i.ref=r.ref,r.child=i,i.return=r,r=i):(i=ma(e.child,u),i.ref=r.ref,r.child=i,i.return=r,r=i),r;case 22:return pm(e,r,i);case 24:return ts(r),u=Ze(Oe),e===null?(p=Oc(),p===null&&(p=ue,m=xc(),p.pooledCache=m,m.refCount++,m!==null&&(p.pooledCacheLanes|=i),p=m),r.memoizedState={parent:u,cache:p},kc(r),er(r,Oe,p)):((e.lanes&i)!==0&&($c(e,r),lo(r,null,null,i),uo()),p=e.memoizedState,m=r.memoizedState,p.parent!==u?(p={parent:u,cache:u},r.memoizedState=p,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=p),er(r,Oe,u)):(u=m.cache,er(r,Oe,u),u!==p.cache&&_c(r,[Oe],i,!0))),qe(e,r,r.pendingProps.children,i),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Na(e){e.flags|=4}function Tm(e,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!k1(r)){if(r=$n.current,r!==null&&((Kt&4194048)===Kt?ta!==null:(Kt&62914560)!==Kt&&(Kt&536870912)===0||r!==ta))throw io=Dc,sd;e.flags|=8192}}function Xu(e,r){r!==null&&(e.flags|=4),e.flags&16384&&(r=e.tag!==22?Ai():536870912,e.lanes|=r,ai|=r)}function yo(e,r){if(!Wt)switch(e.tailMode){case"hidden":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var u=null;i!==null;)i.alternate!==null&&(u=i),i=i.sibling;u===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function de(e){var r=e.alternate!==null&&e.alternate.child===e.child,i=0,u=0;if(r)for(var p=e.child;p!==null;)i|=p.lanes|p.childLanes,u|=p.subtreeFlags&65011712,u|=p.flags&65011712,p.return=e,p=p.sibling;else for(p=e.child;p!==null;)i|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=e,p=p.sibling;return e.subtreeFlags|=u,e.childLanes=i,r}function b0(e,r,i){var u=r.pendingProps;switch(wc(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(r),null;case 1:return de(r),null;case 3:return i=r.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),va(Oe),In(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ji(r)?Na(r):e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,td())),de(r),null;case 26:return i=r.memoizedState,e===null?(Na(r),i!==null?(de(r),Tm(r,i)):(de(r),r.flags&=-16777217)):i?i!==e.memoizedState?(Na(r),de(r),Tm(r,i)):(de(r),r.flags&=-16777217):(e.memoizedProps!==u&&Na(r),de(r),r.flags&=-16777217),null;case 27:Ee(r),i=Et.current;var p=r.type;if(e!==null&&r.stateNode!=null)e.memoizedProps!==u&&Na(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return de(r),null}e=Tt.current,Ji(r)?Zp(r):(e=T1(p,u,i),r.stateNode=e,Na(r))}return de(r),null;case 5:if(Ee(r),i=r.type,e!==null&&r.stateNode!=null)e.memoizedProps!==u&&Na(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return de(r),null}if(e=Tt.current,Ji(r))Zp(r);else{switch(p=ol(Et.current),e){case 1:e=p.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:e=p.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":e=p.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":e=p.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof u.is=="string"?p.createElement("select",{is:u.is}):p.createElement("select"),u.multiple?e.multiple=!0:u.size&&(e.size=u.size);break;default:e=typeof u.is=="string"?p.createElement(i,{is:u.is}):p.createElement(i)}}e[ve]=r,e[Ve]=u;t:for(p=r.child;p!==null;){if(p.tag===5||p.tag===6)e.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===r)break t;for(;p.sibling===null;){if(p.return===null||p.return===r)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}r.stateNode=e;t:switch(Ge(e,i,u),i){case"button":case"input":case"select":case"textarea":e=!!u.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Na(r)}}return de(r),r.flags&=-16777217,null;case 6:if(e&&r.stateNode!=null)e.memoizedProps!==u&&Na(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(e=Et.current,Ji(r)){if(e=r.stateNode,i=r.memoizedProps,u=null,p=rn,p!==null)switch(p.tag){case 27:case 5:u=p.memoizedProps}e[ve]=r,e=!!(e.nodeValue===i||u!==null&&u.suppressHydrationWarning===!0||m1(e.nodeValue,i)),e||Zr(r)}else e=ol(e).createTextNode(u),e[ve]=r,r.stateNode=e}return de(r),null;case 13:if(u=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(p=Ji(r),u!==null&&u.dehydrated!==null){if(e===null){if(!p)throw Error(s(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(s(317));p[ve]=r}else to(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;de(r),p=!1}else p=td(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=p),p=!0;if(!p)return r.flags&256?(wa(r),r):(wa(r),null)}if(wa(r),(r.flags&128)!==0)return r.lanes=i,r;if(i=u!==null,e=e!==null&&e.memoizedState!==null,i){u=r.child,p=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(p=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==p&&(u.flags|=2048)}return i!==e&&i&&(r.child.flags|=8192),Xu(r,r.updateQueue),de(r),null;case 4:return In(),e===null&&Cf(r.stateNode.containerInfo),de(r),null;case 10:return va(r.type),de(r),null;case 19:if(mt(De),p=r.memoizedState,p===null)return de(r),null;if(u=(r.flags&128)!==0,m=p.rendering,m===null)if(u)yo(p,!1);else{if(be!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(m=qu(e),m!==null){for(r.flags|=128,yo(p,!1),e=m.updateQueue,r.updateQueue=e,Xu(r,e),r.subtreeFlags=0,e=i,i=r.child;i!==null;)Wp(i,e),i=i.sibling;return ht(De,De.current&1|2),r.child}e=e.sibling}p.tail!==null&&gn()>Pu&&(r.flags|=128,u=!0,yo(p,!1),r.lanes=4194304)}else{if(!u)if(e=qu(m),e!==null){if(r.flags|=128,u=!0,e=e.updateQueue,r.updateQueue=e,Xu(r,e),yo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!m.alternate&&!Wt)return de(r),null}else 2*gn()-p.renderingStartTime>Pu&&i!==536870912&&(r.flags|=128,u=!0,yo(p,!1),r.lanes=4194304);p.isBackwards?(m.sibling=r.child,r.child=m):(e=p.last,e!==null?e.sibling=m:r.child=m,p.last=m)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=gn(),r.sibling=null,e=De.current,ht(De,u?e&1|2:e&1),r):(de(r),null);case 22:case 23:return wa(r),Mc(),u=r.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(i&536870912)!==0&&(r.flags&128)===0&&(de(r),r.subtreeFlags&6&&(r.flags|=8192)):de(r),i=r.updateQueue,i!==null&&Xu(r,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==i&&(r.flags|=2048),e!==null&&mt(es),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),r.memoizedState.cache!==i&&(r.flags|=2048),va(Oe),de(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function v0(e,r){switch(wc(r),r.tag){case 1:return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return va(Oe),In(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 26:case 27:case 5:return Ee(r),null;case 13:if(wa(r),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(s(340));to()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return mt(De),null;case 4:return In(),null;case 10:return va(r.type),null;case 22:case 23:return wa(r),Mc(),e!==null&&mt(es),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 24:return va(Oe),null;case 25:return null;default:return null}}function Nm(e,r){switch(wc(r),r.tag){case 3:va(Oe),In();break;case 26:case 27:case 5:Ee(r);break;case 4:In();break;case 13:wa(r);break;case 19:mt(De);break;case 10:va(r.type);break;case 22:case 23:wa(r),Mc(),e!==null&&mt(es);break;case 24:va(Oe)}}function bo(e,r){try{var i=r.updateQueue,u=i!==null?i.lastEffect:null;if(u!==null){var p=u.next;i=p;do{if((i.tag&e)===e){u=void 0;var m=i.create,T=i.inst;u=m(),T.destroy=u}i=i.next}while(i!==p)}}catch(x){oe(r,r.return,x)}}function ur(e,r,i){try{var u=r.updateQueue,p=u!==null?u.lastEffect:null;if(p!==null){var m=p.next;u=m;do{if((u.tag&e)===e){var T=u.inst,x=T.destroy;if(x!==void 0){T.destroy=void 0,p=r;var B=i,K=x;try{K()}catch(tt){oe(p,B,tt)}}}u=u.next}while(u!==m)}}catch(tt){oe(r,r.return,tt)}}function Em(e){var r=e.updateQueue;if(r!==null){var i=e.stateNode;try{fd(r,i)}catch(u){oe(e,e.return,u)}}}function _m(e,r,i){i.props=as(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(u){oe(e,r,u)}}function vo(e,r){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof i=="function"?e.refCleanup=i(u):i.current=u}}catch(p){oe(e,r,p)}}function ea(e,r){var i=e.ref,u=e.refCleanup;if(i!==null)if(typeof u=="function")try{u()}catch(p){oe(e,r,p)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(p){oe(e,r,p)}else i.current=null}function xm(e){var r=e.type,i=e.memoizedProps,u=e.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":i.autoFocus&&u.focus();break t;case"img":i.src?u.src=i.src:i.srcSet&&(u.srcset=i.srcSet)}}catch(p){oe(e,e.return,p)}}function cf(e,r,i){try{var u=e.stateNode;j0(u,e.type,i,r),u[Ve]=r}catch(p){oe(e,e.return,p)}}function Am(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&gr(e.type)||e.tag===4}function ff(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Am(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&gr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hf(e,r,i){var u=e.tag;if(u===5||u===6)e=e.stateNode,r?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,r):(r=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,r.appendChild(e),i=i._reactRootContainer,i!=null||r.onclick!==null||(r.onclick=il));else if(u!==4&&(u===27&&gr(e.type)&&(i=e.stateNode,r=null),e=e.child,e!==null))for(hf(e,r,i),e=e.sibling;e!==null;)hf(e,r,i),e=e.sibling}function Qu(e,r,i){var u=e.tag;if(u===5||u===6)e=e.stateNode,r?i.insertBefore(e,r):i.appendChild(e);else if(u!==4&&(u===27&&gr(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Qu(e,r,i),e=e.sibling;e!==null;)Qu(e,r,i),e=e.sibling}function Om(e){var r=e.stateNode,i=e.memoizedProps;try{for(var u=e.type,p=r.attributes;p.length;)r.removeAttributeNode(p[0]);Ge(r,u,i),r[ve]=e,r[Ve]=i}catch(m){oe(e,e.return,m)}}var Ea=!1,Te=!1,pf=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,Me=null;function S0(e,r){if(e=e.containerInfo,Uf=pl,e=jp(e),cc(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var u=i.getSelection&&i.getSelection();if(u&&u.rangeCount!==0){i=u.anchorNode;var p=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{i.nodeType,m.nodeType}catch{i=null;break t}var T=0,x=-1,B=-1,K=0,tt=0,at=e,Y=null;e:for(;;){for(var X;at!==i||p!==0&&at.nodeType!==3||(x=T+p),at!==m||u!==0&&at.nodeType!==3||(B=T+u),at.nodeType===3&&(T+=at.nodeValue.length),(X=at.firstChild)!==null;)Y=at,at=X;for(;;){if(at===e)break e;if(Y===i&&++K===p&&(x=T),Y===m&&++tt===u&&(B=T),(X=at.nextSibling)!==null)break;at=Y,Y=at.parentNode}at=X}i=x===-1||B===-1?null:{start:x,end:B}}else i=null}i=i||{start:0,end:0}}else i=null;for(If={focusedElem:e,selectionRange:i},pl=!1,Me=r;Me!==null;)if(r=Me,e=r.child,(r.subtreeFlags&1024)!==0&&e!==null)e.return=r,Me=e;else for(;Me!==null;){switch(r=Me,m=r.alternate,e=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,i=r,p=m.memoizedProps,m=m.memoizedState,u=i.stateNode;try{var Ot=as(i.type,p,i.elementType===i.type);e=u.getSnapshotBeforeUpdate(Ot,m),u.__reactInternalSnapshotBeforeUpdate=e}catch(xt){oe(i,i.return,xt)}}break;case 3:if((e&1024)!==0){if(e=r.stateNode.containerInfo,i=e.nodeType,i===9)Vf(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=r.sibling,e!==null){e.return=r.return,Me=e;break}Me=r.return}}function km(e,r,i){var u=i.flags;switch(i.tag){case 0:case 11:case 15:lr(e,i),u&4&&bo(5,i);break;case 1:if(lr(e,i),u&4)if(e=i.stateNode,r===null)try{e.componentDidMount()}catch(T){oe(i,i.return,T)}else{var p=as(i.type,r.memoizedProps);r=r.memoizedState;try{e.componentDidUpdate(p,r,e.__reactInternalSnapshotBeforeUpdate)}catch(T){oe(i,i.return,T)}}u&64&&Em(i),u&512&&vo(i,i.return);break;case 3:if(lr(e,i),u&64&&(e=i.updateQueue,e!==null)){if(r=null,i.child!==null)switch(i.child.tag){case 27:case 5:r=i.child.stateNode;break;case 1:r=i.child.stateNode}try{fd(e,r)}catch(T){oe(i,i.return,T)}}break;case 27:r===null&&u&4&&Om(i);case 26:case 5:lr(e,i),r===null&&u&4&&xm(i),u&512&&vo(i,i.return);break;case 12:lr(e,i);break;case 13:lr(e,i),u&4&&zm(e,i),u&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=D0.bind(null,i),Y0(e,i))));break;case 22:if(u=i.memoizedState!==null||Ea,!u){r=r!==null&&r.memoizedState!==null||Te,p=Ea;var m=Te;Ea=u,(Te=r)&&!m?cr(e,i,(i.subtreeFlags&8772)!==0):lr(e,i),Ea=p,Te=m}break;case 30:break;default:lr(e,i)}}function $m(e){var r=e.alternate;r!==null&&(e.alternate=null,$m(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&Ds(r)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fe=null,fn=!1;function _a(e,r,i){for(i=i.child;i!==null;)Rm(e,r,i),i=i.sibling}function Rm(e,r,i){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(jn,i)}catch{}switch(i.tag){case 26:Te||ea(i,r),_a(e,r,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Te||ea(i,r);var u=fe,p=fn;gr(i.type)&&(fe=i.stateNode,fn=!1),_a(e,r,i),Oo(i.stateNode),fe=u,fn=p;break;case 5:Te||ea(i,r);case 6:if(u=fe,p=fn,fe=null,_a(e,r,i),fe=u,fn=p,fe!==null)if(fn)try{(fe.nodeType===9?fe.body:fe.nodeName==="HTML"?fe.ownerDocument.body:fe).removeChild(i.stateNode)}catch(m){oe(i,r,m)}else try{fe.removeChild(i.stateNode)}catch(m){oe(i,r,m)}break;case 18:fe!==null&&(fn?(e=fe,S1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Bo(e)):S1(fe,i.stateNode));break;case 4:u=fe,p=fn,fe=i.stateNode.containerInfo,fn=!0,_a(e,r,i),fe=u,fn=p;break;case 0:case 11:case 14:case 15:Te||ur(2,i,r),Te||ur(4,i,r),_a(e,r,i);break;case 1:Te||(ea(i,r),u=i.stateNode,typeof u.componentWillUnmount=="function"&&_m(i,r,u)),_a(e,r,i);break;case 21:_a(e,r,i);break;case 22:Te=(u=Te)||i.memoizedState!==null,_a(e,r,i),Te=u;break;default:_a(e,r,i)}}function zm(e,r){if(r.memoizedState===null&&(e=r.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bo(e)}catch(i){oe(r,r.return,i)}}function w0(e){switch(e.tag){case 13:case 19:var r=e.stateNode;return r===null&&(r=e.stateNode=new Dm),r;case 22:return e=e.stateNode,r=e._retryCache,r===null&&(r=e._retryCache=new Dm),r;default:throw Error(s(435,e.tag))}}function df(e,r){var i=w0(e);r.forEach(function(u){var p=k0.bind(null,e,u);i.has(u)||(i.add(u),u.then(p,p))})}function vn(e,r){var i=r.deletions;if(i!==null)for(var u=0;u<i.length;u++){var p=i[u],m=e,T=r,x=T;t:for(;x!==null;){switch(x.tag){case 27:if(gr(x.type)){fe=x.stateNode,fn=!1;break t}break;case 5:fe=x.stateNode,fn=!1;break t;case 3:case 4:fe=x.stateNode.containerInfo,fn=!0;break t}x=x.return}if(fe===null)throw Error(s(160));Rm(m,T,p),fe=null,fn=!1,m=p.alternate,m!==null&&(m.return=null),p.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Cm(r,e),r=r.sibling}var Gn=null;function Cm(e,r){var i=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vn(r,e),Sn(e),u&4&&(ur(3,e,e.return),bo(3,e),ur(5,e,e.return));break;case 1:vn(r,e),Sn(e),u&512&&(Te||i===null||ea(i,i.return)),u&64&&Ea&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?u:i.concat(u))));break;case 26:var p=Gn;if(vn(r,e),Sn(e),u&512&&(Te||i===null||ea(i,i.return)),u&4){var m=i!==null?i.memoizedState:null;if(u=e.memoizedState,i===null)if(u===null)if(e.stateNode===null){t:{u=e.type,i=e.memoizedProps,p=p.ownerDocument||p;e:switch(u){case"title":m=p.getElementsByTagName("title")[0],(!m||m[Ga]||m[ve]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=p.createElement(u),p.head.insertBefore(m,p.querySelector("head > title"))),Ge(m,u,i),m[ve]=e,Se(m),u=m;break t;case"link":var T=O1("link","href",p).get(u+(i.href||""));if(T){for(var x=0;x<T.length;x++)if(m=T[x],m.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&m.getAttribute("rel")===(i.rel==null?null:i.rel)&&m.getAttribute("title")===(i.title==null?null:i.title)&&m.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){T.splice(x,1);break e}}m=p.createElement(u),Ge(m,u,i),p.head.appendChild(m);break;case"meta":if(T=O1("meta","content",p).get(u+(i.content||""))){for(x=0;x<T.length;x++)if(m=T[x],m.getAttribute("content")===(i.content==null?null:""+i.content)&&m.getAttribute("name")===(i.name==null?null:i.name)&&m.getAttribute("property")===(i.property==null?null:i.property)&&m.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&m.getAttribute("charset")===(i.charSet==null?null:i.charSet)){T.splice(x,1);break e}}m=p.createElement(u),Ge(m,u,i),p.head.appendChild(m);break;default:throw Error(s(468,u))}m[ve]=e,Se(m),u=m}e.stateNode=u}else D1(p,e.type,e.stateNode);else e.stateNode=A1(p,u,e.memoizedProps);else m!==u?(m===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):m.count--,u===null?D1(p,e.type,e.stateNode):A1(p,u,e.memoizedProps)):u===null&&e.stateNode!==null&&cf(e,e.memoizedProps,i.memoizedProps)}break;case 27:vn(r,e),Sn(e),u&512&&(Te||i===null||ea(i,i.return)),i!==null&&u&4&&cf(e,e.memoizedProps,i.memoizedProps);break;case 5:if(vn(r,e),Sn(e),u&512&&(Te||i===null||ea(i,i.return)),e.flags&32){p=e.stateNode;try{pa(p,"")}catch(X){oe(e,e.return,X)}}u&4&&e.stateNode!=null&&(p=e.memoizedProps,cf(e,p,i!==null?i.memoizedProps:p)),u&1024&&(pf=!0);break;case 6:if(vn(r,e),Sn(e),u&4){if(e.stateNode===null)throw Error(s(162));u=e.memoizedProps,i=e.stateNode;try{i.nodeValue=u}catch(X){oe(e,e.return,X)}}break;case 3:if(cl=null,p=Gn,Gn=ul(r.containerInfo),vn(r,e),Gn=p,Sn(e),u&4&&i!==null&&i.memoizedState.isDehydrated)try{Bo(r.containerInfo)}catch(X){oe(e,e.return,X)}pf&&(pf=!1,Mm(e));break;case 4:u=Gn,Gn=ul(e.stateNode.containerInfo),vn(r,e),Sn(e),Gn=u;break;case 12:vn(r,e),Sn(e);break;case 13:vn(r,e),Sn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Sf=gn()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,df(e,u)));break;case 22:p=e.memoizedState!==null;var B=i!==null&&i.memoizedState!==null,K=Ea,tt=Te;if(Ea=K||p,Te=tt||B,vn(r,e),Te=tt,Ea=K,Sn(e),u&8192)t:for(r=e.stateNode,r._visibility=p?r._visibility&-2:r._visibility|1,p&&(i===null||B||Ea||Te||rs(e)),i=null,r=e;;){if(r.tag===5||r.tag===26){if(i===null){B=i=r;try{if(m=B.stateNode,p)T=m.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{x=B.stateNode;var at=B.memoizedProps.style,Y=at!=null&&at.hasOwnProperty("display")?at.display:null;x.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(X){oe(B,B.return,X)}}}else if(r.tag===6){if(i===null){B=r;try{B.stateNode.nodeValue=p?"":B.memoizedProps}catch(X){oe(B,B.return,X)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===e)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;i===r&&(i=null),r=r.return}i===r&&(i=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=e.updateQueue,u!==null&&(i=u.retryQueue,i!==null&&(u.retryQueue=null,df(e,i))));break;case 19:vn(r,e),Sn(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,df(e,u)));break;case 30:break;case 21:break;default:vn(r,e),Sn(e)}}function Sn(e){var r=e.flags;if(r&2){try{for(var i,u=e.return;u!==null;){if(Am(u)){i=u;break}u=u.return}if(i==null)throw Error(s(160));switch(i.tag){case 27:var p=i.stateNode,m=ff(e);Qu(e,m,p);break;case 5:var T=i.stateNode;i.flags&32&&(pa(T,""),i.flags&=-33);var x=ff(e);Qu(e,x,T);break;case 3:case 4:var B=i.stateNode.containerInfo,K=ff(e);hf(e,K,B);break;default:throw Error(s(161))}}catch(tt){oe(e,e.return,tt)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Mm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var r=e;Mm(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),e=e.sibling}}function lr(e,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)km(e,r.alternate,r),r=r.sibling}function rs(e){for(e=e.child;e!==null;){var r=e;switch(r.tag){case 0:case 11:case 14:case 15:ur(4,r,r.return),rs(r);break;case 1:ea(r,r.return);var i=r.stateNode;typeof i.componentWillUnmount=="function"&&_m(r,r.return,i),rs(r);break;case 27:Oo(r.stateNode);case 26:case 5:ea(r,r.return),rs(r);break;case 22:r.memoizedState===null&&rs(r);break;case 30:rs(r);break;default:rs(r)}e=e.sibling}}function cr(e,r,i){for(i=i&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,p=e,m=r,T=m.flags;switch(m.tag){case 0:case 11:case 15:cr(p,m,i),bo(4,m);break;case 1:if(cr(p,m,i),u=m,p=u.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(K){oe(u,u.return,K)}if(u=m,p=u.updateQueue,p!==null){var x=u.stateNode;try{var B=p.shared.hiddenCallbacks;if(B!==null)for(p.shared.hiddenCallbacks=null,p=0;p<B.length;p++)cd(B[p],x)}catch(K){oe(u,u.return,K)}}i&&T&64&&Em(m),vo(m,m.return);break;case 27:Om(m);case 26:case 5:cr(p,m,i),i&&u===null&&T&4&&xm(m),vo(m,m.return);break;case 12:cr(p,m,i);break;case 13:cr(p,m,i),i&&T&4&&zm(p,m);break;case 22:m.memoizedState===null&&cr(p,m,i),vo(m,m.return);break;case 30:break;default:cr(p,m,i)}r=r.sibling}}function mf(e,r){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(e=r.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&ao(i))}function gf(e,r){e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&ao(e))}function na(e,r,i,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Bm(e,r,i,u),r=r.sibling}function Bm(e,r,i,u){var p=r.flags;switch(r.tag){case 0:case 11:case 15:na(e,r,i,u),p&2048&&bo(9,r);break;case 1:na(e,r,i,u);break;case 3:na(e,r,i,u),p&2048&&(e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&ao(e)));break;case 12:if(p&2048){na(e,r,i,u),e=r.stateNode;try{var m=r.memoizedProps,T=m.id,x=m.onPostCommit;typeof x=="function"&&x(T,r.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){oe(r,r.return,B)}}else na(e,r,i,u);break;case 13:na(e,r,i,u);break;case 23:break;case 22:m=r.stateNode,T=r.alternate,r.memoizedState!==null?m._visibility&2?na(e,r,i,u):So(e,r):m._visibility&2?na(e,r,i,u):(m._visibility|=2,ti(e,r,i,u,(r.subtreeFlags&10256)!==0)),p&2048&&mf(T,r);break;case 24:na(e,r,i,u),p&2048&&gf(r.alternate,r);break;default:na(e,r,i,u)}}function ti(e,r,i,u,p){for(p=p&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=e,T=r,x=i,B=u,K=T.flags;switch(T.tag){case 0:case 11:case 15:ti(m,T,x,B,p),bo(8,T);break;case 23:break;case 22:var tt=T.stateNode;T.memoizedState!==null?tt._visibility&2?ti(m,T,x,B,p):So(m,T):(tt._visibility|=2,ti(m,T,x,B,p)),p&&K&2048&&mf(T.alternate,T);break;case 24:ti(m,T,x,B,p),p&&K&2048&&gf(T.alternate,T);break;default:ti(m,T,x,B,p)}r=r.sibling}}function So(e,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var i=e,u=r,p=u.flags;switch(u.tag){case 22:So(i,u),p&2048&&mf(u.alternate,u);break;case 24:So(i,u),p&2048&&gf(u.alternate,u);break;default:So(i,u)}r=r.sibling}}var wo=8192;function ei(e){if(e.subtreeFlags&wo)for(e=e.child;e!==null;)Um(e),e=e.sibling}function Um(e){switch(e.tag){case 26:ei(e),e.flags&wo&&e.memoizedState!==null&&i3(Gn,e.memoizedState,e.memoizedProps);break;case 5:ei(e);break;case 3:case 4:var r=Gn;Gn=ul(e.stateNode.containerInfo),ei(e),Gn=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=wo,wo=16777216,ei(e),wo=r):ei(e));break;default:ei(e)}}function Im(e){var r=e.alternate;if(r!==null&&(e=r.child,e!==null)){r.child=null;do r=e.sibling,e.sibling=null,e=r;while(e!==null)}}function To(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var i=0;i<r.length;i++){var u=r[i];Me=u,jm(u,e)}Im(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lm(e),e=e.sibling}function Lm(e){switch(e.tag){case 0:case 11:case 15:To(e),e.flags&2048&&ur(9,e,e.return);break;case 3:To(e);break;case 12:To(e);break;case 22:var r=e.stateNode;e.memoizedState!==null&&r._visibility&2&&(e.return===null||e.return.tag!==13)?(r._visibility&=-3,Wu(e)):To(e);break;default:To(e)}}function Wu(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var i=0;i<r.length;i++){var u=r[i];Me=u,jm(u,e)}Im(e)}for(e=e.child;e!==null;){switch(r=e,r.tag){case 0:case 11:case 15:ur(8,r,r.return),Wu(r);break;case 22:i=r.stateNode,i._visibility&2&&(i._visibility&=-3,Wu(r));break;default:Wu(r)}e=e.sibling}}function jm(e,r){for(;Me!==null;){var i=Me;switch(i.tag){case 0:case 11:case 15:ur(8,i,r);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var u=i.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:ao(i.memoizedState.cache)}if(u=i.child,u!==null)u.return=i,Me=u;else t:for(i=e;Me!==null;){u=Me;var p=u.sibling,m=u.return;if($m(u),u===i){Me=null;break t}if(p!==null){p.return=m,Me=p;break t}Me=m}}}var T0={getCacheForType:function(e){var r=Ze(Oe),i=r.data.get(e);return i===void 0&&(i=e(),r.data.set(e,i)),i}},N0=typeof WeakMap=="function"?WeakMap:Map,Zt=0,ue=null,Vt=null,Kt=0,Jt=0,wn=null,fr=!1,ni=!1,yf=!1,xa=0,be=0,hr=0,ss=0,bf=0,Rn=0,ai=0,No=null,hn=null,vf=!1,Sf=0,Pu=1/0,Zu=null,pr=null,Fe=0,dr=null,ri=null,si=0,wf=0,Tf=null,Vm=null,Eo=0,Nf=null;function Tn(){if((Zt&2)!==0&&Kt!==0)return Kt&-Kt;if(W.T!==null){var e=Ks;return e!==0?e:kf()}return Lr()}function Hm(){Rn===0&&(Rn=(Kt&536870912)===0||Wt?xi():536870912);var e=$n.current;return e!==null&&(e.flags|=32),Rn}function Nn(e,r,i){(e===ue&&(Jt===2||Jt===9)||e.cancelPendingCommit!==null)&&(ii(e,0),mr(e,Kt,Rn,!1)),qa(e,i),((Zt&2)===0||e!==ue)&&(e===ue&&((Zt&2)===0&&(ss|=i),be===4&&mr(e,Kt,Rn,!1)),aa(e))}function qm(e,r,i){if((Zt&6)!==0)throw Error(s(327));var u=!i&&(r&124)===0&&(r&e.expiredLanes)===0||Qe(e,r),p=u?x0(e,r):xf(e,r,!0),m=u;do{if(p===0){ni&&!u&&mr(e,r,0,!1);break}else{if(i=e.current.alternate,m&&!E0(i)){p=xf(e,r,!1),m=!1;continue}if(p===2){if(m=r,e.errorRecoveryDisabledLanes&m)var T=0;else T=e.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){r=T;t:{var x=e;p=No;var B=x.current.memoizedState.isDehydrated;if(B&&(ii(x,T).flags|=256),T=xf(x,T,!1),T!==2){if(yf&&!B){x.errorRecoveryDisabledLanes|=m,ss|=m,p=4;break t}m=hn,hn=p,m!==null&&(hn===null?hn=m:hn.push.apply(hn,m))}p=T}if(m=!1,p!==2)continue}}if(p===1){ii(e,0),mr(e,r,0,!0);break}t:{switch(u=e,m=p,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:mr(u,r,Rn,!fr);break t;case 2:hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(p=Sf+300-gn(),10<p)){if(mr(u,r,Rn,!fr),Ir(u,0,!0)!==0)break t;u.timeoutHandle=b1(Fm.bind(null,u,i,hn,Zu,vf,r,Rn,ss,ai,fr,m,2,-0,0),p);break t}Fm(u,i,hn,Zu,vf,r,Rn,ss,ai,fr,m,0,-0,0)}}break}while(!0);aa(e)}function Fm(e,r,i,u,p,m,T,x,B,K,tt,at,Y,X){if(e.timeoutHandle=-1,at=r.subtreeFlags,(at&8192||(at&16785408)===16785408)&&($o={stylesheets:null,count:0,unsuspend:s3},Um(r),at=o3(),at!==null)){e.cancelPendingCommit=at(Pm.bind(null,e,r,m,i,u,p,T,x,B,tt,1,Y,X)),mr(e,m,T,!K);return}Pm(e,r,m,i,u,p,T,x,B)}function E0(e){for(var r=e;;){var i=r.tag;if((i===0||i===11||i===15)&&r.flags&16384&&(i=r.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var u=0;u<i.length;u++){var p=i[u],m=p.getSnapshot;p=p.value;try{if(!yn(m(),p))return!1}catch{return!1}}if(i=r.child,r.subtreeFlags&16384&&i!==null)i.return=r,r=i;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function mr(e,r,i,u){r&=~bf,r&=~ss,e.suspendedLanes|=r,e.pingedLanes&=~r,u&&(e.warmLanes|=r),u=e.expirationTimes;for(var p=r;0<p;){var m=31-Re(p),T=1<<m;u[m]=-1,p&=~T}i!==0&&Oi(e,i,r)}function Ju(){return(Zt&6)===0?(_o(0),!1):!0}function Ef(){if(Vt!==null){if(Jt===0)var e=Vt.return;else e=Vt,ba=Jr=null,jc(e),Zs=null,mo=0,e=Vt;for(;e!==null;)Nm(e.alternate,e),e=e.return;Vt=null}}function ii(e,r){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,H0(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Ef(),ue=e,Vt=i=ma(e.current,null),Kt=r,Jt=0,wn=null,fr=!1,ni=Qe(e,r),yf=!1,ai=Rn=bf=ss=hr=be=0,hn=No=null,vf=!1,(r&8)!==0&&(r|=r&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=r;0<u;){var p=31-Re(u),m=1<<p;r|=e[p],u&=~m}return xa=r,wu(),i}function Gm(e,r){Bt=null,W.H=ju,r===so||r===ku?(r=ud(),Jt=3):r===sd?(r=ud(),Jt=4):Jt=r===lm?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,wn=r,Vt===null&&(be=1,Gu(e,An(r,e.current)))}function Km(){var e=W.H;return W.H=ju,e===null?ju:e}function Ym(){var e=W.A;return W.A=T0,e}function _f(){be=4,fr||(Kt&4194048)!==Kt&&$n.current!==null||(ni=!0),(hr&134217727)===0&&(ss&134217727)===0||ue===null||mr(ue,Kt,Rn,!1)}function xf(e,r,i){var u=Zt;Zt|=2;var p=Km(),m=Ym();(ue!==e||Kt!==r)&&(Zu=null,ii(e,r)),r=!1;var T=be;t:do try{if(Jt!==0&&Vt!==null){var x=Vt,B=wn;switch(Jt){case 8:Ef(),T=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(r=!0);var K=Jt;if(Jt=0,wn=null,oi(e,x,B,K),i&&ni){T=0;break t}break;default:K=Jt,Jt=0,wn=null,oi(e,x,B,K)}}_0(),T=be;break}catch(tt){Gm(e,tt)}while(!0);return r&&e.shellSuspendCounter++,ba=Jr=null,Zt=u,W.H=p,W.A=m,Vt===null&&(ue=null,Kt=0,wu()),T}function _0(){for(;Vt!==null;)Xm(Vt)}function x0(e,r){var i=Zt;Zt|=2;var u=Km(),p=Ym();ue!==e||Kt!==r?(Zu=null,Pu=gn()+500,ii(e,r)):ni=Qe(e,r);t:do try{if(Jt!==0&&Vt!==null){r=Vt;var m=wn;e:switch(Jt){case 1:Jt=0,wn=null,oi(e,r,m,1);break;case 2:case 9:if(id(m)){Jt=0,wn=null,Qm(r);break}r=function(){Jt!==2&&Jt!==9||ue!==e||(Jt=7),aa(e)},m.then(r,r);break t;case 3:Jt=7;break t;case 4:Jt=5;break t;case 7:id(m)?(Jt=0,wn=null,Qm(r)):(Jt=0,wn=null,oi(e,r,m,7));break;case 5:var T=null;switch(Vt.tag){case 26:T=Vt.memoizedState;case 5:case 27:var x=Vt;if(!T||k1(T)){Jt=0,wn=null;var B=x.sibling;if(B!==null)Vt=B;else{var K=x.return;K!==null?(Vt=K,tl(K)):Vt=null}break e}}Jt=0,wn=null,oi(e,r,m,5);break;case 6:Jt=0,wn=null,oi(e,r,m,6);break;case 8:Ef(),be=6;break t;default:throw Error(s(462))}}A0();break}catch(tt){Gm(e,tt)}while(!0);return ba=Jr=null,W.H=u,W.A=p,Zt=i,Vt!==null?0:(ue=null,Kt=0,wu(),be)}function A0(){for(;Vt!==null&&!ua();)Xm(Vt)}function Xm(e){var r=wm(e.alternate,e,xa);e.memoizedProps=e.pendingProps,r===null?tl(e):Vt=r}function Qm(e){var r=e,i=r.alternate;switch(r.tag){case 15:case 0:r=mm(i,r,r.pendingProps,r.type,void 0,Kt);break;case 11:r=mm(i,r,r.pendingProps,r.type.render,r.ref,Kt);break;case 5:jc(r);default:Nm(i,r),r=Vt=Wp(r,xa),r=wm(i,r,xa)}e.memoizedProps=e.pendingProps,r===null?tl(e):Vt=r}function oi(e,r,i,u){ba=Jr=null,jc(r),Zs=null,mo=0;var p=r.return;try{if(g0(e,p,r,i,Kt)){be=1,Gu(e,An(i,e.current)),Vt=null;return}}catch(m){if(p!==null)throw Vt=p,m;be=1,Gu(e,An(i,e.current)),Vt=null;return}r.flags&32768?(Wt||u===1?e=!0:ni||(Kt&536870912)!==0?e=!1:(fr=e=!0,(u===2||u===9||u===3||u===6)&&(u=$n.current,u!==null&&u.tag===13&&(u.flags|=16384))),Wm(r,e)):tl(r)}function tl(e){var r=e;do{if((r.flags&32768)!==0){Wm(r,fr);return}e=r.return;var i=b0(r.alternate,r,xa);if(i!==null){Vt=i;return}if(r=r.sibling,r!==null){Vt=r;return}Vt=r=e}while(r!==null);be===0&&(be=5)}function Wm(e,r){do{var i=v0(e.alternate,e);if(i!==null){i.flags&=32767,Vt=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!r&&(e=e.sibling,e!==null)){Vt=e;return}Vt=e=i}while(e!==null);be=6,Vt=null}function Pm(e,r,i,u,p,m,T,x,B){e.cancelPendingCommit=null;do el();while(Fe!==0);if((Zt&6)!==0)throw Error(s(327));if(r!==null){if(r===e.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=mc,uu(e,i,m,T,x,B),e===ue&&(Vt=ue=null,Kt=0),ri=r,dr=e,si=i,wf=m,Tf=p,Vm=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$0(Ln,function(){return n1(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=W.T,W.T=null,p=lt.p,lt.p=2,T=Zt,Zt|=4;try{S0(e,r,i)}finally{Zt=T,lt.p=p,W.T=u}}Fe=1,Zm(),Jm(),t1()}}function Zm(){if(Fe===1){Fe=0;var e=dr,r=ri,i=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||i){i=W.T,W.T=null;var u=lt.p;lt.p=2;var p=Zt;Zt|=4;try{Cm(r,e);var m=If,T=jp(e.containerInfo),x=m.focusedElem,B=m.selectionRange;if(T!==x&&x&&x.ownerDocument&&Lp(x.ownerDocument.documentElement,x)){if(B!==null&&cc(x)){var K=B.start,tt=B.end;if(tt===void 0&&(tt=K),"selectionStart"in x)x.selectionStart=K,x.selectionEnd=Math.min(tt,x.value.length);else{var at=x.ownerDocument||document,Y=at&&at.defaultView||window;if(Y.getSelection){var X=Y.getSelection(),Ot=x.textContent.length,xt=Math.min(B.start,Ot),se=B.end===void 0?xt:Math.min(B.end,Ot);!X.extend&&xt>se&&(T=se,se=xt,xt=T);var q=Ip(x,xt),j=Ip(x,se);if(q&&j&&(X.rangeCount!==1||X.anchorNode!==q.node||X.anchorOffset!==q.offset||X.focusNode!==j.node||X.focusOffset!==j.offset)){var F=at.createRange();F.setStart(q.node,q.offset),X.removeAllRanges(),xt>se?(X.addRange(F),X.extend(j.node,j.offset)):(F.setEnd(j.node,j.offset),X.addRange(F))}}}}for(at=[],X=x;X=X.parentNode;)X.nodeType===1&&at.push({element:X,left:X.scrollLeft,top:X.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<at.length;x++){var nt=at[x];nt.element.scrollLeft=nt.left,nt.element.scrollTop=nt.top}}pl=!!Uf,If=Uf=null}finally{Zt=p,lt.p=u,W.T=i}}e.current=r,Fe=2}}function Jm(){if(Fe===2){Fe=0;var e=dr,r=ri,i=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||i){i=W.T,W.T=null;var u=lt.p;lt.p=2;var p=Zt;Zt|=4;try{km(e,r.alternate,r)}finally{Zt=p,lt.p=u,W.T=i}}Fe=3}}function t1(){if(Fe===4||Fe===3){Fe=0,nu();var e=dr,r=ri,i=si,u=Vm;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Fe=5:(Fe=0,ri=dr=null,e1(e,e.pendingLanes));var p=e.pendingLanes;if(p===0&&(pr=null),Fa(i),r=r.stateNode,je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(jn,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=W.T,p=lt.p,lt.p=2,W.T=null;try{for(var m=e.onRecoverableError,T=0;T<u.length;T++){var x=u[T];m(x.value,{componentStack:x.stack})}}finally{W.T=r,lt.p=p}}(si&3)!==0&&el(),aa(e),p=e.pendingLanes,(i&4194090)!==0&&(p&42)!==0?e===Nf?Eo++:(Eo=0,Nf=e):Eo=0,_o(0)}}function e1(e,r){(e.pooledCacheLanes&=r)===0&&(r=e.pooledCache,r!=null&&(e.pooledCache=null,ao(r)))}function el(e){return Zm(),Jm(),t1(),n1()}function n1(){if(Fe!==5)return!1;var e=dr,r=wf;wf=0;var i=Fa(si),u=W.T,p=lt.p;try{lt.p=32>i?32:i,W.T=null,i=Tf,Tf=null;var m=dr,T=si;if(Fe=0,ri=dr=null,si=0,(Zt&6)!==0)throw Error(s(331));var x=Zt;if(Zt|=4,Lm(m.current),Bm(m,m.current,T,i),Zt=x,_o(0,!1),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(jn,m)}catch{}return!0}finally{lt.p=p,W.T=u,e1(e,r)}}function a1(e,r,i){r=An(i,r),r=tf(e.stateNode,r,2),e=rr(e,r,2),e!==null&&(qa(e,2),aa(e))}function oe(e,r,i){if(e.tag===3)a1(e,e,i);else for(;r!==null;){if(r.tag===3){a1(r,e,i);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(pr===null||!pr.has(u))){e=An(i,e),i=om(2),u=rr(r,i,2),u!==null&&(um(i,u,r,e),qa(u,2),aa(u));break}}r=r.return}}function Af(e,r,i){var u=e.pingCache;if(u===null){u=e.pingCache=new N0;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(i)||(yf=!0,p.add(i),e=O0.bind(null,e,r,i),r.then(e,e))}function O0(e,r,i){var u=e.pingCache;u!==null&&u.delete(r),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,ue===e&&(Kt&i)===i&&(be===4||be===3&&(Kt&62914560)===Kt&&300>gn()-Sf?(Zt&2)===0&&ii(e,0):bf|=i,ai===Kt&&(ai=0)),aa(e)}function r1(e,r){r===0&&(r=Ai()),e=Hs(e,r),e!==null&&(qa(e,r),aa(e))}function D0(e){var r=e.memoizedState,i=0;r!==null&&(i=r.retryLane),r1(e,i)}function k0(e,r){var i=0;switch(e.tag){case 13:var u=e.stateNode,p=e.memoizedState;p!==null&&(i=p.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),r1(e,i)}function $0(e,r){return Ns(e,r)}var nl=null,ui=null,Of=!1,al=!1,Df=!1,is=0;function aa(e){e!==ui&&e.next===null&&(ui===null?nl=ui=e:ui=ui.next=e),al=!0,Of||(Of=!0,z0())}function _o(e,r){if(!Df&&al){Df=!0;do for(var i=!1,u=nl;u!==null;){if(e!==0){var p=u.pendingLanes;if(p===0)var m=0;else{var T=u.suspendedLanes,x=u.pingedLanes;m=(1<<31-Re(42|e)+1)-1,m&=p&~(T&~x),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(i=!0,u1(u,m))}else m=Kt,m=Ir(u,u===ue?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Qe(u,m)||(i=!0,u1(u,m));u=u.next}while(i);Df=!1}}function R0(){s1()}function s1(){al=Of=!1;var e=0;is!==0&&(V0()&&(e=is),is=0);for(var r=gn(),i=null,u=nl;u!==null;){var p=u.next,m=i1(u,r);m===0?(u.next=null,i===null?nl=p:i.next=p,p===null&&(ui=i)):(i=u,(e!==0||(m&3)!==0)&&(al=!0)),u=p}_o(e)}function i1(e,r){for(var i=e.suspendedLanes,u=e.pingedLanes,p=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var T=31-Re(m),x=1<<T,B=p[T];B===-1?((x&i)===0||(x&u)!==0)&&(p[T]=xs(x,r)):B<=r&&(e.expiredLanes|=x),m&=~x}if(r=ue,i=Kt,i=Ir(e,e===r?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,i===0||e===r&&(Jt===2||Jt===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&Cr(u),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Qe(e,i)){if(r=i&-i,r===e.callbackPriority)return r;switch(u!==null&&Cr(u),Fa(i)){case 2:case 8:i=au;break;case 32:i=Ln;break;case 268435456:i=_i;break;default:i=Ln}return u=o1.bind(null,e),i=Ns(i,u),e.callbackPriority=r,e.callbackNode=i,r}return u!==null&&u!==null&&Cr(u),e.callbackPriority=2,e.callbackNode=null,2}function o1(e,r){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(el()&&e.callbackNode!==i)return null;var u=Kt;return u=Ir(e,e===ue?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:(qm(e,u,r),i1(e,gn()),e.callbackNode!=null&&e.callbackNode===i?o1.bind(null,e):null)}function u1(e,r){if(el())return null;qm(e,r,!0)}function z0(){q0(function(){(Zt&6)!==0?Ns(Mr,R0):s1()})}function kf(){return is===0&&(is=xi()),is}function l1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zs(""+e)}function c1(e,r){var i=r.ownerDocument.createElement("input");return i.name=r.name,i.value=r.value,e.id&&i.setAttribute("form",e.id),r.parentNode.insertBefore(i,r),e=new FormData(e),i.parentNode.removeChild(i),e}function C0(e,r,i,u,p){if(r==="submit"&&i&&i.stateNode===p){var m=l1((p[Ve]||null).action),T=u.submitter;T&&(r=(r=T[Ve]||null)?l1(r.formAction):T.getAttribute("formAction"),r!==null&&(m=r,T=null));var x=new J("action","action",null,u,p);e.push({event:x,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(is!==0){var B=T?c1(p,T):new FormData(p);Qc(i,{pending:!0,data:B,method:p.method,action:m},null,B)}}else typeof m=="function"&&(x.preventDefault(),B=T?c1(p,T):new FormData(p),Qc(i,{pending:!0,data:B,method:p.method,action:m},m,B))},currentTarget:p}]})}}for(var $f=0;$f<dc.length;$f++){var Rf=dc[$f],M0=Rf.toLowerCase(),B0=Rf[0].toUpperCase()+Rf.slice(1);Fn(M0,"on"+B0)}Fn(qp,"onAnimationEnd"),Fn(Fp,"onAnimationIteration"),Fn(Gp,"onAnimationStart"),Fn("dblclick","onDoubleClick"),Fn("focusin","onFocus"),Fn("focusout","onBlur"),Fn(Jy,"onTransitionRun"),Fn(t0,"onTransitionStart"),Fn(e0,"onTransitionCancel"),Fn(Kp,"onTransitionEnd"),Qa("onMouseEnter",["mouseout","mouseover"]),Qa("onMouseLeave",["mouseout","mouseover"]),Qa("onPointerEnter",["pointerout","pointerover"]),Qa("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function f1(e,r){r=(r&4)!==0;for(var i=0;i<e.length;i++){var u=e[i],p=u.event;u=u.listeners;t:{var m=void 0;if(r)for(var T=u.length-1;0<=T;T--){var x=u[T],B=x.instance,K=x.currentTarget;if(x=x.listener,B!==m&&p.isPropagationStopped())break t;m=x,p.currentTarget=K;try{m(p)}catch(tt){Fu(tt)}p.currentTarget=null,m=B}else for(T=0;T<u.length;T++){if(x=u[T],B=x.instance,K=x.currentTarget,x=x.listener,B!==m&&p.isPropagationStopped())break t;m=x,p.currentTarget=K;try{m(p)}catch(tt){Fu(tt)}p.currentTarget=null,m=B}}}}function Ht(e,r){var i=r[ki];i===void 0&&(i=r[ki]=new Set);var u=e+"__bubble";i.has(u)||(h1(r,e,2,!1),i.add(u))}function zf(e,r,i){var u=0;r&&(u|=4),h1(i,e,u,r)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Cf(e){if(!e[rl]){e[rl]=!0,Ri.forEach(function(i){i!=="selectionchange"&&(U0.has(i)||zf(i,!1,e),zf(i,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[rl]||(r[rl]=!0,zf("selectionchange",!1,r))}}function h1(e,r,i,u){switch(B1(r)){case 2:var p=c3;break;case 8:p=f3;break;default:p=Xf}i=p.bind(null,r,i,e),p=void 0,!Gi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?e.addEventListener(r,i,{capture:!0,passive:p}):e.addEventListener(r,i,!0):p!==void 0?e.addEventListener(r,i,{passive:p}):e.addEventListener(r,i,!1)}function Mf(e,r,i,u,p){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)t:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var x=u.stateNode.containerInfo;if(x===p)break;if(T===4)for(T=u.return;T!==null;){var B=T.tag;if((B===3||B===4)&&T.stateNode.containerInfo===p)return;T=T.return}for(;x!==null;){if(T=Ka(x),T===null)return;if(B=T.tag,B===5||B===6||B===26||B===27){u=m=T;continue t}x=x.parentNode}}u=u.return}Bs(function(){var K=m,tt=Cs(i),at=[];t:{var Y=Yp.get(e);if(Y!==void 0){var X=J,Ot=e;switch(e){case"keypress":if(O(i)===0)break t;case"keydown":case"keyup":X=$y;break;case"focusin":Ot="focus",X=We;break;case"focusout":Ot="blur",X=We;break;case"beforeblur":case"afterblur":X=We;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=kt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=ne;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=Cy;break;case qp:case Fp:case Gp:X=Yt;break;case Kp:X=By;break;case"scroll":case"scrollend":X=dt;break;case"wheel":X=Iy;break;case"copy":case"cut":case"paste":X=Zn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Ep;break;case"toggle":case"beforetoggle":X=jy}var xt=(r&4)!==0,se=!xt&&(e==="scroll"||e==="scrollend"),q=xt?Y!==null?Y+"Capture":null:Y;xt=[];for(var j=K,F;j!==null;){var nt=j;if(F=nt.stateNode,nt=nt.tag,nt!==5&&nt!==26&&nt!==27||F===null||q===null||(nt=Fr(j,q),nt!=null&&xt.push(Ao(j,nt,F))),se)break;j=j.return}0<xt.length&&(Y=new X(Y,Ot,null,i,tt),at.push({event:Y,listeners:xt}))}}if((r&7)===0){t:{if(Y=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",Y&&i!==qr&&(Ot=i.relatedTarget||i.fromElement)&&(Ka(Ot)||Ot[la]))break t;if((X||Y)&&(Y=tt.window===tt?tt:(Y=tt.ownerDocument)?Y.defaultView||Y.parentWindow:window,X?(Ot=i.relatedTarget||i.toElement,X=K,Ot=Ot?Ka(Ot):null,Ot!==null&&(se=l(Ot),xt=Ot.tag,Ot!==se||xt!==5&&xt!==27&&xt!==6)&&(Ot=null)):(X=null,Ot=K),X!==Ot)){if(xt=kt,nt="onMouseLeave",q="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(xt=Ep,nt="onPointerLeave",q="onPointerEnter",j="pointer"),se=X==null?Y:jr(X),F=Ot==null?Y:jr(Ot),Y=new xt(nt,j+"leave",X,i,tt),Y.target=se,Y.relatedTarget=F,nt=null,Ka(tt)===K&&(xt=new xt(q,j+"enter",Ot,i,tt),xt.target=F,xt.relatedTarget=se,nt=xt),se=nt,X&&Ot)e:{for(xt=X,q=Ot,j=0,F=xt;F;F=li(F))j++;for(F=0,nt=q;nt;nt=li(nt))F++;for(;0<j-F;)xt=li(xt),j--;for(;0<F-j;)q=li(q),F--;for(;j--;){if(xt===q||q!==null&&xt===q.alternate)break e;xt=li(xt),q=li(q)}xt=null}else xt=null;X!==null&&p1(at,Y,X,xt,!1),Ot!==null&&se!==null&&p1(at,se,Ot,xt,!0)}}t:{if(Y=K?jr(K):window,X=Y.nodeName&&Y.nodeName.toLowerCase(),X==="select"||X==="input"&&Y.type==="file")var gt=Rp;else if(kp(Y))if(zp)gt=Wy;else{gt=Xy;var Ut=Yy}else X=Y.nodeName,!X||X.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?K&&Fi(K.elementType)&&(gt=Rp):gt=Qy;if(gt&&(gt=gt(e,K))){$p(at,gt,i,tt);break t}Ut&&Ut(e,Y,K),e==="focusout"&&K&&Y.type==="number"&&K.memoizedProps.value!=null&&Hr(Y,"number",Y.value)}switch(Ut=K?jr(K):window,e){case"focusin":(kp(Ut)||Ut.contentEditable==="true")&&(Ls=Ut,fc=K,Zi=null);break;case"focusout":Zi=fc=Ls=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,Vp(at,i,tt);break;case"selectionchange":if(Zy)break;case"keydown":case"keyup":Vp(at,i,tt)}var vt;if(oc)t:{switch(e){case"compositionstart":var At="onCompositionStart";break t;case"compositionend":At="onCompositionEnd";break t;case"compositionupdate":At="onCompositionUpdate";break t}At=void 0}else Is?Op(e,i)&&(At="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(At="onCompositionStart");At&&(_p&&i.locale!=="ko"&&(Is||At!=="onCompositionStart"?At==="onCompositionEnd"&&Is&&(vt=_()):(qn=tt,g="value"in qn?qn.value:qn.textContent,Is=!0)),Ut=sl(K,At),0<Ut.length&&(At=new Ki(At,e,null,i,tt),at.push({event:At,listeners:Ut}),vt?At.data=vt:(vt=Dp(i),vt!==null&&(At.data=vt)))),(vt=Hy?qy(e,i):Fy(e,i))&&(At=sl(K,"onBeforeInput"),0<At.length&&(Ut=new Ki("onBeforeInput","beforeinput",null,i,tt),at.push({event:Ut,listeners:At}),Ut.data=vt)),C0(at,e,K,i,tt)}f1(at,r)})}function Ao(e,r,i){return{instance:e,listener:r,currentTarget:i}}function sl(e,r){for(var i=r+"Capture",u=[];e!==null;){var p=e,m=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||m===null||(p=Fr(e,i),p!=null&&u.unshift(Ao(e,p,m)),p=Fr(e,r),p!=null&&u.push(Ao(e,p,m))),e.tag===3)return u;e=e.return}return[]}function li(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function p1(e,r,i,u,p){for(var m=r._reactName,T=[];i!==null&&i!==u;){var x=i,B=x.alternate,K=x.stateNode;if(x=x.tag,B!==null&&B===u)break;x!==5&&x!==26&&x!==27||K===null||(B=K,p?(K=Fr(i,m),K!=null&&T.unshift(Ao(i,K,B))):p||(K=Fr(i,m),K!=null&&T.push(Ao(i,K,B)))),i=i.return}T.length!==0&&e.push({event:r,listeners:T})}var I0=/\r\n?/g,L0=/\u0000|\uFFFD/g;function d1(e){return(typeof e=="string"?e:""+e).replace(I0,`
`).replace(L0,"")}function m1(e,r){return r=d1(r),d1(e)===r}function il(){}function re(e,r,i,u,p,m){switch(i){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||pa(e,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&pa(e,""+u);break;case"className":Wa(e,"class",u);break;case"tabIndex":Wa(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Wa(e,i,u);break;case"style":qi(e,u,m);break;case"data":if(r!=="object"){Wa(e,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||i!=="href")){e.removeAttribute(i);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(i);break}u=zs(""+u),e.setAttribute(i,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(i==="formAction"?(r!=="input"&&re(e,r,"name",p.name,p,null),re(e,r,"formEncType",p.formEncType,p,null),re(e,r,"formMethod",p.formMethod,p,null),re(e,r,"formTarget",p.formTarget,p,null)):(re(e,r,"encType",p.encType,p,null),re(e,r,"method",p.method,p,null),re(e,r,"target",p.target,p,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(i);break}u=zs(""+u),e.setAttribute(i,u);break;case"onClick":u!=null&&(e.onclick=il);break;case"onScroll":u!=null&&Ht("scroll",e);break;case"onScrollEnd":u!=null&&Ht("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(i=u.__html,i!=null){if(p.children!=null)throw Error(s(60));e.innerHTML=i}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}i=zs(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(i,""+u):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":u===!0?e.setAttribute(i,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(i,u):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(i,u):e.removeAttribute(i);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(i):e.setAttribute(i,u);break;case"popover":Ht("beforetoggle",e),Ht("toggle",e),Vr(e,"popover",u);break;case"xlinkActuate":en(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":en(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":en(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":en(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":en(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":en(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":en(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":en(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":en(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Vr(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=bu.get(i)||i,Vr(e,i,u))}}function Bf(e,r,i,u,p,m){switch(i){case"style":qi(e,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(i=u.__html,i!=null){if(p.children!=null)throw Error(s(60));e.innerHTML=i}}break;case"children":typeof u=="string"?pa(e,u):(typeof u=="number"||typeof u=="bigint")&&pa(e,""+u);break;case"onScroll":u!=null&&Ht("scroll",e);break;case"onScrollEnd":u!=null&&Ht("scrollend",e);break;case"onClick":u!=null&&(e.onclick=il);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hu.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(p=i.endsWith("Capture"),r=i.slice(2,p?i.length-7:void 0),m=e[Ve]||null,m=m!=null?m[i]:null,typeof m=="function"&&e.removeEventListener(r,m,p),typeof u=="function")){typeof m!="function"&&m!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(r,u,p);break t}i in e?e[i]=u:u===!0?e.setAttribute(i,""):Vr(e,i,u)}}}function Ge(e,r,i){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ht("error",e),Ht("load",e);var u=!1,p=!1,m;for(m in i)if(i.hasOwnProperty(m)){var T=i[m];if(T!=null)switch(m){case"src":u=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:re(e,r,m,T,i,null)}}p&&re(e,r,"srcSet",i.srcSet,i,null),u&&re(e,r,"src",i.src,i,null);return;case"input":Ht("invalid",e);var x=m=T=p=null,B=null,K=null;for(u in i)if(i.hasOwnProperty(u)){var tt=i[u];if(tt!=null)switch(u){case"name":p=tt;break;case"type":T=tt;break;case"checked":B=tt;break;case"defaultChecked":K=tt;break;case"value":m=tt;break;case"defaultValue":x=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,r));break;default:re(e,r,u,tt,i,null)}}gu(e,m,x,B,K,T,p,!1),Rs(e);return;case"select":Ht("invalid",e),u=T=m=null;for(p in i)if(i.hasOwnProperty(p)&&(x=i[p],x!=null))switch(p){case"value":m=x;break;case"defaultValue":T=x;break;case"multiple":u=x;default:re(e,r,p,x,i,null)}r=m,i=T,e.multiple=!!u,r!=null?ha(e,!!u,r,!1):i!=null&&ha(e,!!u,i,!0);return;case"textarea":Ht("invalid",e),m=p=u=null;for(T in i)if(i.hasOwnProperty(T)&&(x=i[T],x!=null))switch(T){case"value":u=x;break;case"defaultValue":p=x;break;case"children":m=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(s(91));break;default:re(e,r,T,x,i,null)}Vi(e,u,p,m),Rs(e);return;case"option":for(B in i)if(i.hasOwnProperty(B)&&(u=i[B],u!=null))switch(B){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:re(e,r,B,u,i,null)}return;case"dialog":Ht("beforetoggle",e),Ht("toggle",e),Ht("cancel",e),Ht("close",e);break;case"iframe":case"object":Ht("load",e);break;case"video":case"audio":for(u=0;u<xo.length;u++)Ht(xo[u],e);break;case"image":Ht("error",e),Ht("load",e);break;case"details":Ht("toggle",e);break;case"embed":case"source":case"link":Ht("error",e),Ht("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in i)if(i.hasOwnProperty(K)&&(u=i[K],u!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:re(e,r,K,u,i,null)}return;default:if(Fi(r)){for(tt in i)i.hasOwnProperty(tt)&&(u=i[tt],u!==void 0&&Bf(e,r,tt,u,i,void 0));return}}for(x in i)i.hasOwnProperty(x)&&(u=i[x],u!=null&&re(e,r,x,u,i,null))}function j0(e,r,i,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,m=null,T=null,x=null,B=null,K=null,tt=null;for(X in i){var at=i[X];if(i.hasOwnProperty(X)&&at!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":B=at;default:u.hasOwnProperty(X)||re(e,r,X,null,u,at)}}for(var Y in u){var X=u[Y];if(at=i[Y],u.hasOwnProperty(Y)&&(X!=null||at!=null))switch(Y){case"type":m=X;break;case"name":p=X;break;case"checked":K=X;break;case"defaultChecked":tt=X;break;case"value":T=X;break;case"defaultValue":x=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,r));break;default:X!==at&&re(e,r,Y,X,u,at)}}Li(e,T,x,B,K,tt,m,p);return;case"select":X=T=x=Y=null;for(m in i)if(B=i[m],i.hasOwnProperty(m)&&B!=null)switch(m){case"value":break;case"multiple":X=B;default:u.hasOwnProperty(m)||re(e,r,m,null,u,B)}for(p in u)if(m=u[p],B=i[p],u.hasOwnProperty(p)&&(m!=null||B!=null))switch(p){case"value":Y=m;break;case"defaultValue":x=m;break;case"multiple":T=m;default:m!==B&&re(e,r,p,m,u,B)}r=x,i=T,u=X,Y!=null?ha(e,!!i,Y,!1):!!u!=!!i&&(r!=null?ha(e,!!i,r,!0):ha(e,!!i,i?[]:"",!1));return;case"textarea":X=Y=null;for(x in i)if(p=i[x],i.hasOwnProperty(x)&&p!=null&&!u.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:re(e,r,x,null,u,p)}for(T in u)if(p=u[T],m=i[T],u.hasOwnProperty(T)&&(p!=null||m!=null))switch(T){case"value":Y=p;break;case"defaultValue":X=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(s(91));break;default:p!==m&&re(e,r,T,p,u,m)}ji(e,Y,X);return;case"option":for(var Ot in i)if(Y=i[Ot],i.hasOwnProperty(Ot)&&Y!=null&&!u.hasOwnProperty(Ot))switch(Ot){case"selected":e.selected=!1;break;default:re(e,r,Ot,null,u,Y)}for(B in u)if(Y=u[B],X=i[B],u.hasOwnProperty(B)&&Y!==X&&(Y!=null||X!=null))switch(B){case"selected":e.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:re(e,r,B,Y,u,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var xt in i)Y=i[xt],i.hasOwnProperty(xt)&&Y!=null&&!u.hasOwnProperty(xt)&&re(e,r,xt,null,u,Y);for(K in u)if(Y=u[K],X=i[K],u.hasOwnProperty(K)&&Y!==X&&(Y!=null||X!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,r));break;default:re(e,r,K,Y,u,X)}return;default:if(Fi(r)){for(var se in i)Y=i[se],i.hasOwnProperty(se)&&Y!==void 0&&!u.hasOwnProperty(se)&&Bf(e,r,se,void 0,u,Y);for(tt in u)Y=u[tt],X=i[tt],!u.hasOwnProperty(tt)||Y===X||Y===void 0&&X===void 0||Bf(e,r,tt,Y,u,X);return}}for(var q in i)Y=i[q],i.hasOwnProperty(q)&&Y!=null&&!u.hasOwnProperty(q)&&re(e,r,q,null,u,Y);for(at in u)Y=u[at],X=i[at],!u.hasOwnProperty(at)||Y===X||Y==null&&X==null||re(e,r,at,Y,u,X)}var Uf=null,If=null;function ol(e){return e.nodeType===9?e:e.ownerDocument}function g1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y1(e,r){if(e===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&r==="foreignObject"?0:e}function Lf(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var jf=null;function V0(){var e=window.event;return e&&e.type==="popstate"?e===jf?!1:(jf=e,!0):(jf=null,!1)}var b1=typeof setTimeout=="function"?setTimeout:void 0,H0=typeof clearTimeout=="function"?clearTimeout:void 0,v1=typeof Promise=="function"?Promise:void 0,q0=typeof queueMicrotask=="function"?queueMicrotask:typeof v1<"u"?function(e){return v1.resolve(null).then(e).catch(F0)}:b1;function F0(e){setTimeout(function(){throw e})}function gr(e){return e==="head"}function S1(e,r){var i=r,u=0,p=0;do{var m=i.nextSibling;if(e.removeChild(i),m&&m.nodeType===8)if(i=m.data,i==="/$"){if(0<u&&8>u){i=u;var T=e.ownerDocument;if(i&1&&Oo(T.documentElement),i&2&&Oo(T.body),i&4)for(i=T.head,Oo(i),T=i.firstChild;T;){var x=T.nextSibling,B=T.nodeName;T[Ga]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&T.rel.toLowerCase()==="stylesheet"||i.removeChild(T),T=x}}if(p===0){e.removeChild(m),Bo(r);return}p--}else i==="$"||i==="$?"||i==="$!"?p++:u=i.charCodeAt(0)-48;else u=0;i=m}while(i);Bo(r)}function Vf(e){var r=e.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var i=r;switch(r=r.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Vf(i),Ds(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function G0(e,r,i,u){for(;e.nodeType===1;){var p=i;if(e.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[Ga])switch(r){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==p.rel||e.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||e.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||e.getAttribute("title")!==(p.title==null?null:p.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(p.src==null?null:p.src)||e.getAttribute("type")!==(p.type==null?null:p.type)||e.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(r==="input"&&e.type==="hidden"){var m=p.name==null?null:""+p.name;if(p.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Kn(e.nextSibling),e===null)break}return null}function K0(e,r,i){if(r==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Kn(e.nextSibling),e===null))return null;return e}function Hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Y0(e,r){var i=e.ownerDocument;if(e.data!=="$?"||i.readyState==="complete")r();else{var u=function(){r(),i.removeEventListener("DOMContentLoaded",u)};i.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function Kn(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return e}var qf=null;function w1(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(r===0)return e;r--}else i==="/$"&&r++}e=e.previousSibling}return null}function T1(e,r,i){switch(r=ol(i),e){case"html":if(e=r.documentElement,!e)throw Error(s(452));return e;case"head":if(e=r.head,!e)throw Error(s(453));return e;case"body":if(e=r.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Oo(e){for(var r=e.attributes;r.length;)e.removeAttributeNode(r[0]);Ds(e)}var zn=new Map,N1=new Set;function ul(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Aa=lt.d;lt.d={f:X0,r:Q0,D:W0,C:P0,L:Z0,m:J0,X:e3,S:t3,M:n3};function X0(){var e=Aa.f(),r=Ju();return e||r}function Q0(e){var r=Ya(e);r!==null&&r.tag===5&&r.type==="form"?qd(r):Aa.r(e)}var ci=typeof document>"u"?null:document;function E1(e,r,i){var u=ci;if(u&&typeof r=="string"&&r){var p=an(r);p='link[rel="'+e+'"][href="'+p+'"]',typeof i=="string"&&(p+='[crossorigin="'+i+'"]'),N1.has(p)||(N1.add(p),e={rel:e,crossOrigin:i,href:r},u.querySelector(p)===null&&(r=u.createElement("link"),Ge(r,"link",e),Se(r),u.head.appendChild(r)))}}function W0(e){Aa.D(e),E1("dns-prefetch",e,null)}function P0(e,r){Aa.C(e,r),E1("preconnect",e,r)}function Z0(e,r,i){Aa.L(e,r,i);var u=ci;if(u&&e&&r){var p='link[rel="preload"][as="'+an(r)+'"]';r==="image"&&i&&i.imageSrcSet?(p+='[imagesrcset="'+an(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(p+='[imagesizes="'+an(i.imageSizes)+'"]')):p+='[href="'+an(e)+'"]';var m=p;switch(r){case"style":m=fi(e);break;case"script":m=hi(e)}zn.has(m)||(e=y({rel:"preload",href:r==="image"&&i&&i.imageSrcSet?void 0:e,as:r},i),zn.set(m,e),u.querySelector(p)!==null||r==="style"&&u.querySelector(Do(m))||r==="script"&&u.querySelector(ko(m))||(r=u.createElement("link"),Ge(r,"link",e),Se(r),u.head.appendChild(r)))}}function J0(e,r){Aa.m(e,r);var i=ci;if(i&&e){var u=r&&typeof r.as=="string"?r.as:"script",p='link[rel="modulepreload"][as="'+an(u)+'"][href="'+an(e)+'"]',m=p;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=hi(e)}if(!zn.has(m)&&(e=y({rel:"modulepreload",href:e},r),zn.set(m,e),i.querySelector(p)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(ko(m)))return}u=i.createElement("link"),Ge(u,"link",e),Se(u),i.head.appendChild(u)}}}function t3(e,r,i){Aa.S(e,r,i);var u=ci;if(u&&e){var p=Xa(u).hoistableStyles,m=fi(e);r=r||"default";var T=p.get(m);if(!T){var x={loading:0,preload:null};if(T=u.querySelector(Do(m)))x.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":r},i),(i=zn.get(m))&&Ff(e,i);var B=T=u.createElement("link");Se(B),Ge(B,"link",e),B._p=new Promise(function(K,tt){B.onload=K,B.onerror=tt}),B.addEventListener("load",function(){x.loading|=1}),B.addEventListener("error",function(){x.loading|=2}),x.loading|=4,ll(T,r,u)}T={type:"stylesheet",instance:T,count:1,state:x},p.set(m,T)}}}function e3(e,r){Aa.X(e,r);var i=ci;if(i&&e){var u=Xa(i).hoistableScripts,p=hi(e),m=u.get(p);m||(m=i.querySelector(ko(p)),m||(e=y({src:e,async:!0},r),(r=zn.get(p))&&Gf(e,r),m=i.createElement("script"),Se(m),Ge(m,"link",e),i.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(p,m))}}function n3(e,r){Aa.M(e,r);var i=ci;if(i&&e){var u=Xa(i).hoistableScripts,p=hi(e),m=u.get(p);m||(m=i.querySelector(ko(p)),m||(e=y({src:e,async:!0,type:"module"},r),(r=zn.get(p))&&Gf(e,r),m=i.createElement("script"),Se(m),Ge(m,"link",e),i.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(p,m))}}function _1(e,r,i,u){var p=(p=Et.current)?ul(p):null;if(!p)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(r=fi(i.href),i=Xa(p).hoistableStyles,u=i.get(r),u||(u={type:"style",instance:null,count:0,state:null},i.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=fi(i.href);var m=Xa(p).hoistableStyles,T=m.get(e);if(T||(p=p.ownerDocument||p,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,T),(m=p.querySelector(Do(e)))&&!m._p&&(T.instance=m,T.state.loading=5),zn.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},zn.set(e,i),m||a3(p,e,i,T.state))),r&&u===null)throw Error(s(528,""));return T}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=i.async,i=i.src,typeof i=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=hi(i),i=Xa(p).hoistableScripts,u=i.get(r),u||(u={type:"script",instance:null,count:0,state:null},i.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function fi(e){return'href="'+an(e)+'"'}function Do(e){return'link[rel="stylesheet"]['+e+"]"}function x1(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function a3(e,r,i,u){e.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=e.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),Ge(r,"link",i),Se(r),e.head.appendChild(r))}function hi(e){return'[src="'+an(e)+'"]'}function ko(e){return"script[async]"+e}function A1(e,r,i){if(r.count++,r.instance===null)switch(r.type){case"style":var u=e.querySelector('style[data-href~="'+an(i.href)+'"]');if(u)return r.instance=u,Se(u),u;var p=y({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),Se(u),Ge(u,"style",p),ll(u,i.precedence,e),r.instance=u;case"stylesheet":p=fi(i.href);var m=e.querySelector(Do(p));if(m)return r.state.loading|=4,r.instance=m,Se(m),m;u=x1(i),(p=zn.get(p))&&Ff(u,p),m=(e.ownerDocument||e).createElement("link"),Se(m);var T=m;return T._p=new Promise(function(x,B){T.onload=x,T.onerror=B}),Ge(m,"link",u),r.state.loading|=4,ll(m,i.precedence,e),r.instance=m;case"script":return m=hi(i.src),(p=e.querySelector(ko(m)))?(r.instance=p,Se(p),p):(u=i,(p=zn.get(m))&&(u=y({},i),Gf(u,p)),e=e.ownerDocument||e,p=e.createElement("script"),Se(p),Ge(p,"link",u),e.head.appendChild(p),r.instance=p);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,ll(u,i.precedence,e));return r.instance}function ll(e,r,i){for(var u=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=u.length?u[u.length-1]:null,m=p,T=0;T<u.length;T++){var x=u[T];if(x.dataset.precedence===r)m=x;else if(m!==p)break}m?m.parentNode.insertBefore(e,m.nextSibling):(r=i.nodeType===9?i.head:i,r.insertBefore(e,r.firstChild))}function Ff(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.title==null&&(e.title=r.title)}function Gf(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.integrity==null&&(e.integrity=r.integrity)}var cl=null;function O1(e,r,i){if(cl===null){var u=new Map,p=cl=new Map;p.set(i,u)}else p=cl,u=p.get(i),u||(u=new Map,p.set(i,u));if(u.has(e))return u;for(u.set(e,null),i=i.getElementsByTagName(e),p=0;p<i.length;p++){var m=i[p];if(!(m[Ga]||m[ve]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(r)||"";T=e+T;var x=u.get(T);x?x.push(m):u.set(T,[m])}}return u}function D1(e,r,i){e=e.ownerDocument||e,e.head.insertBefore(i,r==="title"?e.querySelector("head > title"):null)}function r3(e,r,i){if(i===1||r.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return e=r.disabled,typeof r.precedence=="string"&&e==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function k1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var $o=null;function s3(){}function i3(e,r,i){if($o===null)throw Error(s(475));var u=$o;if(r.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var p=fi(i.href),m=e.querySelector(Do(p));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(u.count++,u=fl.bind(u),e.then(u,u)),r.state.loading|=4,r.instance=m,Se(m);return}m=e.ownerDocument||e,i=x1(i),(p=zn.get(p))&&Ff(i,p),m=m.createElement("link"),Se(m);var T=m;T._p=new Promise(function(x,B){T.onload=x,T.onerror=B}),Ge(m,"link",i),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,e),(e=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=fl.bind(u),e.addEventListener("load",r),e.addEventListener("error",r))}}function o3(){if($o===null)throw Error(s(475));var e=$o;return e.stylesheets&&e.count===0&&Kf(e,e.stylesheets),0<e.count?function(r){var i=setTimeout(function(){if(e.stylesheets&&Kf(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(i)}}:null}function fl(){if(this.count--,this.count===0){if(this.stylesheets)Kf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hl=null;function Kf(e,r){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hl=new Map,r.forEach(u3,e),hl=null,fl.call(e))}function u3(e,r){if(!(r.state.loading&4)){var i=hl.get(e);if(i)var u=i.get(null);else{i=new Map,hl.set(e,i);for(var p=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<p.length;m++){var T=p[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(i.set(T.dataset.precedence,T),u=T)}u&&i.set(null,u)}p=r.instance,T=p.getAttribute("data-precedence"),m=i.get(T)||u,m===u&&i.set(null,p),i.set(T,p),this.count++,u=fl.bind(this),p.addEventListener("load",u),p.addEventListener("error",u),m?m.parentNode.insertBefore(p,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(p,e.firstChild)),r.state.loading|=4}}var Ro={$$typeof:P,Provider:null,Consumer:null,_currentValue:yt,_currentValue2:yt,_threadCount:0};function l3(e,r,i,u,p,m,T,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=As(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=As(0),this.hiddenUpdates=As(null),this.identifierPrefix=u,this.onUncaughtError=p,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function $1(e,r,i,u,p,m,T,x,B,K,tt,at){return e=new l3(e,r,i,T,x,B,K,at),r=1,m===!0&&(r|=24),m=bn(3,null,null,r),e.current=m,m.stateNode=e,r=xc(),r.refCount++,e.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:i,cache:r},kc(m),e}function R1(e){return e?(e=qs,e):qs}function z1(e,r,i,u,p,m){p=R1(p),u.context===null?u.context=p:u.pendingContext=p,u=ar(r),u.payload={element:i},m=m===void 0?null:m,m!==null&&(u.callback=m),i=rr(e,u,r),i!==null&&(Nn(i,e,r),oo(i,e,r))}function C1(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<r?i:r}}function Yf(e,r){C1(e,r),(e=e.alternate)&&C1(e,r)}function M1(e){if(e.tag===13){var r=Hs(e,67108864);r!==null&&Nn(r,e,67108864),Yf(e,67108864)}}var pl=!0;function c3(e,r,i,u){var p=W.T;W.T=null;var m=lt.p;try{lt.p=2,Xf(e,r,i,u)}finally{lt.p=m,W.T=p}}function f3(e,r,i,u){var p=W.T;W.T=null;var m=lt.p;try{lt.p=8,Xf(e,r,i,u)}finally{lt.p=m,W.T=p}}function Xf(e,r,i,u){if(pl){var p=Qf(u);if(p===null)Mf(e,r,u,dl,i),U1(e,u);else if(p3(p,e,r,i,u))u.stopPropagation();else if(U1(e,u),r&4&&-1<h3.indexOf(e)){for(;p!==null;){var m=Ya(p);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=ie(m.pendingLanes);if(T!==0){var x=m;for(x.pendingLanes|=2,x.entangledLanes|=2;T;){var B=1<<31-Re(T);x.entanglements[1]|=B,T&=~B}aa(m),(Zt&6)===0&&(Pu=gn()+500,_o(0))}}break;case 13:x=Hs(m,2),x!==null&&Nn(x,m,2),Ju(),Yf(m,2)}if(m=Qf(u),m===null&&Mf(e,r,u,dl,i),m===p)break;p=m}p!==null&&u.stopPropagation()}else Mf(e,r,u,null,i)}}function Qf(e){return e=Cs(e),Wf(e)}var dl=null;function Wf(e){if(dl=null,e=Ka(e),e!==null){var r=l(e);if(r===null)e=null;else{var i=r.tag;if(i===13){if(e=c(r),e!==null)return e;e=null}else if(i===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null)}}return dl=e,null}function B1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Es()){case Mr:return 2;case au:return 8;case Ln:case _s:return 32;case _i:return 268435456;default:return 32}default:return 32}}var Pf=!1,yr=null,br=null,vr=null,zo=new Map,Co=new Map,Sr=[],h3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function U1(e,r){switch(e){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":zo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(r.pointerId)}}function Mo(e,r,i,u,p,m){return e===null||e.nativeEvent!==m?(e={blockedOn:r,domEventName:i,eventSystemFlags:u,nativeEvent:m,targetContainers:[p]},r!==null&&(r=Ya(r),r!==null&&M1(r)),e):(e.eventSystemFlags|=u,r=e.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),e)}function p3(e,r,i,u,p){switch(r){case"focusin":return yr=Mo(yr,e,r,i,u,p),!0;case"dragenter":return br=Mo(br,e,r,i,u,p),!0;case"mouseover":return vr=Mo(vr,e,r,i,u,p),!0;case"pointerover":var m=p.pointerId;return zo.set(m,Mo(zo.get(m)||null,e,r,i,u,p)),!0;case"gotpointercapture":return m=p.pointerId,Co.set(m,Mo(Co.get(m)||null,e,r,i,u,p)),!0}return!1}function I1(e){var r=Ka(e.target);if(r!==null){var i=l(r);if(i!==null){if(r=i.tag,r===13){if(r=c(i),r!==null){e.blockedOn=r,cu(e.priority,function(){if(i.tag===13){var u=Tn();u=Di(u);var p=Hs(i,u);p!==null&&Nn(p,i,u),Yf(i,u)}});return}}else if(r===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ml(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var i=Qf(e.nativeEvent);if(i===null){i=e.nativeEvent;var u=new i.constructor(i.type,i);qr=u,i.target.dispatchEvent(u),qr=null}else return r=Ya(i),r!==null&&M1(r),e.blockedOn=i,!1;r.shift()}return!0}function L1(e,r,i){ml(e)&&i.delete(r)}function d3(){Pf=!1,yr!==null&&ml(yr)&&(yr=null),br!==null&&ml(br)&&(br=null),vr!==null&&ml(vr)&&(vr=null),zo.forEach(L1),Co.forEach(L1)}function gl(e,r){e.blockedOn===r&&(e.blockedOn=null,Pf||(Pf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,d3)))}var yl=null;function j1(e){yl!==e&&(yl=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){yl===e&&(yl=null);for(var r=0;r<e.length;r+=3){var i=e[r],u=e[r+1],p=e[r+2];if(typeof u!="function"){if(Wf(u||i)===null)continue;break}var m=Ya(i);m!==null&&(e.splice(r,3),r-=3,Qc(m,{pending:!0,data:p,method:i.method,action:u},u,p))}}))}function Bo(e){function r(B){return gl(B,e)}yr!==null&&gl(yr,e),br!==null&&gl(br,e),vr!==null&&gl(vr,e),zo.forEach(r),Co.forEach(r);for(var i=0;i<Sr.length;i++){var u=Sr[i];u.blockedOn===e&&(u.blockedOn=null)}for(;0<Sr.length&&(i=Sr[0],i.blockedOn===null);)I1(i),i.blockedOn===null&&Sr.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(u=0;u<i.length;u+=3){var p=i[u],m=i[u+1],T=p[Ve]||null;if(typeof m=="function")T||j1(i);else if(T){var x=null;if(m&&m.hasAttribute("formAction")){if(p=m,T=m[Ve]||null)x=T.formAction;else if(Wf(p)!==null)continue}else x=T.action;typeof x=="function"?i[u+1]=x:(i.splice(u,3),u-=3),j1(i)}}}function Zf(e){this._internalRoot=e}bl.prototype.render=Zf.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(s(409));var i=r.current,u=Tn();z1(i,u,e,r,null,null)},bl.prototype.unmount=Zf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;z1(e.current,2,null,e,null,null),Ju(),r[la]=null}};function bl(e){this._internalRoot=e}bl.prototype.unstable_scheduleHydration=function(e){if(e){var r=Lr();e={blockedOn:null,target:e,priority:r};for(var i=0;i<Sr.length&&r!==0&&r<Sr[i].priority;i++);Sr.splice(i,0,e),i===0&&I1(e)}};var V1=t.version;if(V1!=="19.1.0")throw Error(s(527,V1,"19.1.0"));lt.findDOMNode=function(e){var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(r),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var m3={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:W,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{jn=vl.inject(m3),je=vl}catch{}}return Io.createRoot=function(e,r){if(!o(e))throw Error(s(299));var i=!1,u="",p=am,m=rm,T=sm,x=null;return r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(x=r.unstable_transitionCallbacks)),r=$1(e,1,!1,null,null,i,u,p,m,T,x,null),e[la]=r.current,Cf(e),new Zf(r)},Io.hydrateRoot=function(e,r,i){if(!o(e))throw Error(s(299));var u=!1,p="",m=am,T=rm,x=sm,B=null,K=null;return i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(p=i.identifierPrefix),i.onUncaughtError!==void 0&&(m=i.onUncaughtError),i.onCaughtError!==void 0&&(T=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(B=i.unstable_transitionCallbacks),i.formState!==void 0&&(K=i.formState)),r=$1(e,1,!0,r,i??null,u,p,m,T,x,B,K),r.context=R1(null),i=r.current,u=Tn(),u=Di(u),p=ar(u),p.callback=null,rr(i,p,u),i=u,r.current.lanes=i,qa(r,i),aa(r),e[la]=r.current,Cf(e),new bl(r)},Io.version="19.1.0",Io}var P1;function O3(){if(P1)return eh.exports;P1=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),eh.exports=A3(),eh.exports}var D3=O3();/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const k3=1e-7,$3=1e-4;class R3{refCount(t){return pn("refCount")}incRef(t){return pn("incRef")}timerAvailable(){return!0}time(t){return pn("time")}read(t){return pn("read")}readSync(t){return pn("readSync")}readToGPU(t,n){return pn("readToGPU")}numDataIds(){return pn("numDataIds")}disposeData(t,n){return pn("disposeData")}write(t,n,s){return pn("write")}move(t,n,s,o,l){return pn("move")}createTensorFromGPUData(t,n,s){return pn("createTensorFromGPUData")}memory(){return pn("memory")}floatPrecision(){return pn("floatPrecision")}epsilon(){return this.floatPrecision()===32?k3:$3}dispose(){return pn("dispose")}}function pn(a){throw new Error(`'${a}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $(a,t){if(!a)throw new Error(typeof t=="string"?t:t())}function Un(a,t,n=""){$(Ca(a,t),()=>n+` Shapes ${a} and ${t} must match`)}function Ti(a){$(a!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Ne(a){if(a.length===0)return 1;let t=a[0];for(let n=1;n<a.length;n++)t*=a[n];return t}function z3(a,t){if(a===t)return!0;if(a==null||t==null||a.length!==t.length)return!1;for(let n=0;n<a.length;n++)if(a[n]!==null&&t[n]!==null&&a[n]!==t[n])return!1;return!0}function Ca(a,t){if(a===t)return!0;if(a==null||t==null||a.length!==t.length)return!1;for(let n=0;n<a.length;n++)if(a[n]!==t[n])return!1;return!0}function Go(a){return a%1===0}function Tl(a,t){return t<=a.length?a:a+" ".repeat(t-a.length)}function Ql(a,t){const n=t.length;return a=a==null?t.map((s,o)=>o):[].concat(a),$(a.every(s=>s>=-n&&s<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${a}`),$(a.every(s=>Go(s)),()=>`All values in axis param must be integers but got axis ${a}`),a.map(s=>s<0?n+s:s)}function C3(a,t){const n=[],s=[],o=t!=null&&Array.isArray(t)&&t.length===0,l=t==null||o?null:Ql(t,a).sort();let c=0;for(let f=0;f<a.length;++f){if(l!=null){if(l[c]===f&&a[f]!==1)throw new Error(`Can't squeeze axis ${f} since its dim '${a[f]}' is not 1`);(l[c]==null||l[c]>f)&&a[f]===1&&(n.push(a[f]),s.push(f)),l[c]<=f&&c++}a[f]!==1&&(n.push(a[f]),s.push(f))}return{newShape:n,keptDims:s}}function M3(a,t){return Yg(a,t)}function Yg(a,t){let n=null;if(a==null||a==="float32")n=new Float32Array(t);else if(a==="int32")n=new Int32Array(t);else if(a==="bool")n=new Uint8Array(t);else if(a==="string")n=new Array(t);else throw new Error(`Unknown data type ${a}`);return n}function B3(a,t){for(let n=0;n<a.length;n++){const s=a[n];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function U3(a){return a==="bool"||a==="complex64"||a==="float32"||a==="int32"||a==="string"}function Nh(a){if(a==="float32"||a==="int32")return 4;if(a==="complex64")return 8;if(a==="bool")return 1;throw new Error(`Unknown dtype ${a}`)}function I3(a){if(a==null)return 0;let t=0;return a.forEach(n=>t+=n.length),t}function tp(a){return typeof a=="string"||a instanceof String}function L3(a){return typeof a=="boolean"}function j3(a){return typeof a=="number"}function Wl(a){return Array.isArray(a)?Wl(a[0]):a instanceof Float32Array?"float32":a instanceof Int32Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray?"int32":j3(a)?"float32":tp(a)?"string":L3(a)?"bool":"float32"}function Eh(a){return!!(a&&a.constructor&&a.call&&a.apply)}function ep(a){const t=a.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=a[t-1];for(let s=t-3;s>=0;--s)n[s]=n[s+1]*a[s+1];return n}function Xg(a,t,n,s=!1){const o=new Array;if(t.length===1){const l=t[0]*(s?2:1);for(let c=0;c<l;c++)o[c]=n[a+c]}else{const l=t[0],c=t.slice(1),f=c.reduce((h,d)=>h*d)*(s?2:1);for(let h=0;h<l;h++)o[h]=Xg(a+h*f,c,n,s)}return o}function _h(a,t,n=!1){if(a.length===0)return t[0];const s=a.reduce((o,l)=>o*l)*(n?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${a}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return Xg(0,a,t,n)}function Qg(a,t){const n=np(a,t);for(let s=0;s<n.length;s++)n[s]=1;return n}function np(a,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(a);if(t==="int32")return new Int32Array(a);if(t==="bool")return new Uint8Array(a);throw new Error(`Unknown data type ${t}`)}function xn(a){a.forEach(t=>{$(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${a}].`)})}function ds(a){return a&&a.then&&typeof a.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Z1="tfjsflags";class V3{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=H3,this.populateURLFlags()}setPlatform(t,n){this.platform!=null&&(Lt().getBool("IS_TEST")||Lt().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=n}registerFlag(t,n,s){if(this.flagRegistry[t]={evaluationFn:n,setHook:s},this.urlFlags[t]!=null){const o=this.urlFlags[t];Lt().getBool("IS_TEST")||Lt().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${o}.`),this.set(t,o)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const n=this.evaluateFlag(t);if(ds(n))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=n,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,n){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);Z1 in t&&t[Z1].split(",").forEach(s=>{const[o,l]=s.split(":");this.urlFlags[o]=F3(o,l)})}}function H3(a){const t={};return a.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...s)=>(q3(t,s[0],s[1]),s.join("="))),t}function q3(a,t,n){a[decodeURIComponent(t)]=decodeURIComponent(n||"")}function F3(a,t){const n=t.toLowerCase();return n==="true"||n==="false"?n==="true":`${+n}`===n?+n:t}function Lt(){return Wg}let Wg=null;function G3(a){Wg=a}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let sh;function Pg(){if(sh==null){let a;if(typeof window<"u")a=window;else if(typeof global<"u")a=global;else if(typeof process<"u")a=process;else if(typeof self<"u")a=self;else throw new Error("Could not find a global object");sh=a}return sh}function K3(){const a=Pg();return a._tfGlobals==null&&(a._tfGlobals=new Map),a._tfGlobals}function ap(a,t){const n=K3();if(n.has(a))return n.get(a);{const s=t();return n.set(a,s),n.get(a)}}const Y3="Abs",X3="Acos",Q3="Acosh",Zg="Add",W3="AddN",P3="All",Z3="Any",J3="ArgMax",tb="ArgMin",eb="Asin",nb="Asinh",ab="Atan",rb="Atanh",sb="Atan2",ib="AvgPool",ob="AvgPool3D",ub="BatchMatMul",lb="BatchToSpaceND",cb="Bincount",fb="BitwiseAnd",hb="BroadcastArgs",Jg="Cast",pb="Ceil",db="ClipByValue",mb="Complex",gb="ComplexAbs",yb="Concat",bb="Conv2D",vb="Conv2DBackpropFilter",Sb="Conv2DBackpropInput",wb="Conv3D",Tb="Conv3DBackpropInputV2",Nb="Cos",Eb="Cosh",_b="Cumprod",xb="Cumsum",Ab="CropAndResize",Ob="DenseBincount",Db="DepthToSpace",kb="DepthwiseConv2dNative",$b="DepthwiseConv2dNativeBackpropFilter",Rb="DepthwiseConv2dNativeBackpropInput",zb="Diag",Cb="Dilation2D",Mb="RealDiv",Bb="Einsum",Ub="Elu",Ib="Erf",Lb="Equal",jb="Exp",Vb="ExpandDims",Hb="Expm1",qb="FFT",Fb="Fill",Gb="FlipLeftRight",Kb="Floor",Yb="FloorDiv",Xb="FusedBatchNorm",Qb="GatherV2",Wb="GatherNd",Pb="Greater",Zb="GreaterEqual",t2="Identity",Jb="IFFT",t4="Imag",e4="IsFinite",n4="IsInf",a4="IsNan",r4="LeakyRelu",s4="Less",i4="LessEqual",o4="LinSpace",u4="Log",l4="Log1p",c4="LogicalAnd",f4="LogicalNot",h4="LogicalOr",p4="LRN",d4="Max",m4="Maximum",g4="MaxPool",y4="MaxPool3D",b4="MaxPoolWithArgmax",v4="Mean",S4="Min",w4="Minimum",T4="MirrorPad",N4="Mod",E4="Multinomial",_4="Multiply",x4="Neg",A4="NotEqual",O4="NonMaxSuppressionV3",D4="NonMaxSuppressionV4",k4="NonMaxSuppressionV5",$4="OnesLike",R4="OneHot",z4="Pack",C4="PadV2",M4="Pow",B4="Prelu",U4="Prod",I4="RaggedGather",L4="RaggedRange",j4="RaggedTensorToTensor",V4="Range",H4="Real",q4="Reciprocal",F4="Relu",G4="Reshape",K4="ResizeNearestNeighbor",Y4="ResizeBilinear",X4="Relu6",Q4="Reverse",W4="Round",P4="Rsqrt",Z4="ScatterNd",J4="TensorScatterUpdate",tv="SearchSorted",ev="Select",nv="Selu",av="Slice",rv="Sin",sv="Sinh",iv="Sign",ov="Sigmoid",uv="Softplus",lv="Sqrt",cv="Sum",fv="SpaceToBatchND",hv="SplitV",pv="Softmax",dv="SparseFillEmptyRows",mv="SparseReshape",gv="SparseSegmentMean",yv="SparseSegmentSum",bv="SparseToDense",vv="SquaredDifference",Sv="StaticRegexReplace",wv="StridedSlice",Tv="StringNGrams",Nv="StringSplit",Ev="StringToHashBucketFast",_v="Sub",xv="Tan",Av="Tanh",e2="Tile",Ov="TopK",Dv="Transform",ih="Transpose",kv="Unique",$v="Unpack",Rv="UnsortedSegmentSum",zv="ZerosLike",Cv="Step",J1="FromPixels",Mv="RotateWithOffset",tg="_FusedMatMul",eg="FusedConv2D",ng="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lo(...a){Lt().getBool("IS_TEST")||Lt().getBool("PROD")||console.warn(...a)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const n2=ap("kernelRegistry",()=>new Map),Bv=ap("gradRegistry",()=>new Map);function xh(a,t){const n=Uv(a,t);return n2.get(n)}function ag(a){return Bv.get(a)}function rg(a){const t=n2.entries(),n=[];for(;;){const{done:s,value:o}=t.next();if(s)break;const[l,c]=o,[f]=l.split("_");f===a&&n.push(c)}return n}function Uv(a,t){return`${t}_${a}`}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a2(a){return a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iv(a,t){return a instanceof Float32Array&&t==="float32"||a instanceof Int32Array&&t==="int32"||a instanceof Uint8Array&&t==="bool"}function r2(a,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(a)&&(a=Ko(a)),Lt().getBool("DEBUG")&&B3(a,t),Iv(a,t))return a;if(t==null||t==="float32"||t==="complex64")return new Float32Array(a);if(t==="int32")return new Int32Array(a);if(t==="bool"){const n=new Uint8Array(a.length);for(let s=0;s<n.length;++s)Math.round(a[s])!==0&&(n[s]=1);return n}else throw new Error(`Unknown data type ${t}`)}function Ml(){return Lt().platform.now()}function Lv(a,t="utf-8"){return t=t||"utf-8",Lt().platform.encode(a,t)}function sg(a,t="utf-8"){return t=t||"utf-8",Lt().platform.decode(a,t)}function Bn(a){return Lt().platform.isTypedArray!=null?Lt().platform.isTypedArray(a):a2(a)}function Ko(a,t=[],n=!1){if(t==null&&(t=[]),typeof a=="boolean"||typeof a=="number"||typeof a=="string"||ds(a)||a==null||Bn(a)&&n)t.push(a);else if(Array.isArray(a)||Bn(a))for(let s=0;s<a.length;++s)Ko(a[s],t,n);else{let s=-1;for(const o of Object.keys(a))/^([1-9]+[0-9]*|0)$/.test(o)&&(s=Math.max(s,Number(o)));for(let o=0;o<=s;o++)Ko(a[o],t,n)}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class jv{constructor(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new Hv)}profileKernel(t,n,s){let o;const l=()=>{o=s()};let c;const f=Ml();if(this.backendTimer.timerAvailable())c=this.backendTimer.time(l);else{l();for(const d of o)d.dataSync();c=Promise.resolve({kernelMs:Ml()-f})}if(Lt().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let d=0;d<o.length;d++){const y=o[d];y.data().then(b=>{Vv(b,y.dtype,t)})}return{kernelName:t,outputs:o,inputs:n,timeMs:c.then(d=>d.kernelMs),extraInfo:c.then(d=>d.getExtraProfileInfo!=null?d.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:n,outputs:s,timeMs:o,inputs:l,extraInfo:c}=t;s.forEach(f=>{Promise.all([f.data(),o,c]).then(h=>{this.logger.logKernelProfile(n,f,h[0],h[1],l,h[2])})})}}function Vv(a,t,n){if(t!=="float32")return!1;for(let s=0;s<a.length;s++){const o=a[s];if(isNaN(o)||!isFinite(o))return console.warn(`Found ${o} in the result of '${n}'`),!0}return!1}class Hv{logKernelProfile(t,n,s,o,l,c){const f=typeof o=="number"?Tl(`${o}ms`,9):o.error,h=Tl(t,25),d=n.rank,y=n.size,b=Tl(n.shape.toString(),14);let S="";for(const N in l){const E=l[N];if(E!=null){const D=E.shape||n.shape,k=D.length;S+=`${N}: ${k}D ${k>0?D:""} `}}console.log(`%c${h}	%c${f}	%c${d}D ${b}	%c${y}	%c${S}	%c${c}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qv(a,t,n){const s={},o={};for(let h=0;h<t.length;h++)s[t[h].id]=!0;for(let h=0;h<a.length;h++){const d=a[h],y=d.inputs;for(const b in y){const S=y[b];let N=!1;for(let E=0;E<t.length;E++)if(s[S.id]){d.outputs.forEach(D=>s[D.id]=!0),N=!0,o[d.id]=!0;break}if(N)break}}const l={};l[n.id]=!0;const c={};for(let h=a.length-1;h>=0;h--){const d=a[h],y=d.inputs;for(let b=0;b<d.outputs.length;b++)if(l[d.outputs[b].id]){for(const S in y)l[y[S].id]=!0,c[d.id]=!0;break}}const f=[];for(let h=0;h<a.length;h++){const d=a[h];if(o[d.id]&&c[d.id]){const y={};for(const S in d.inputs){const N=d.inputs[S];s[N.id]&&(y[S]=N)}const b=Object.assign({},d);b.inputs=y,b.outputs=d.outputs,f.push(b)}}return f}function Fv(a,t,n,s){for(let o=t.length-1;o>=0;o--){const l=t[o],c=[];if(l.outputs.forEach(h=>{const d=a[h.id];d!=null?c.push(d):c.push(null)}),l.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${l.kernelName}.`);const f=l.gradient(c);for(const h in l.inputs){if(!(h in f))throw new Error(`Cannot backprop through input ${h}. Available gradients found: ${Object.keys(f)}.`);const d=n(()=>f[h]());if(d.dtype!=="float32")throw new Error(`Error in gradient for op ${l.kernelName}. The gradient of input ${h} must have 'float32' dtype, but has '${d.dtype}'`);const y=l.inputs[h];if(!Ca(d.shape,y.shape))throw new Error(`Error in gradient for op ${l.kernelName}. The gradient of input '${h}' has shape '${d.shape}', which does not match the shape of the input '${y.shape}'`);if(a[y.id]==null)a[y.id]=d;else{const b=a[y.id];a[y.id]=s(b,d),b.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ig=20,jo=3,oh=7;function Gv(a,t,n,s){const o=ep(t),l=Kv(a,t,n,o),c=t.length,f=Nl(a,t,n,o,l),h=["Tensor"];return s&&(h.push(`  dtype: ${n}`),h.push(`  rank: ${c}`),h.push(`  shape: [${t}]`),h.push("  values:")),h.push(f.map(d=>"    "+d).join(`
`)),h.join(`
`)}function Kv(a,t,n,s){const o=Ne(t),l=s[s.length-1],c=new Array(l).fill(0),f=t.length,h=n==="complex64"?qo(a):a;if(f>1)for(let d=0;d<o/l;d++){const y=d*l;for(let b=0;b<l;b++)c[b]=Math.max(c[b],Ho(h[y+b],0,n).length)}return c}function Ho(a,t,n){let s;return Array.isArray(a)?s=`${parseFloat(a[0].toFixed(oh))} + ${parseFloat(a[1].toFixed(oh))}j`:tp(a)?s=`'${a}'`:n==="bool"?s=s2(a):s=parseFloat(a.toFixed(oh)).toString(),Tl(s,t)}function s2(a){return a===0?"false":"true"}function Nl(a,t,n,s,o,l=!0){const c=n==="complex64"?2:1,f=t[0],h=t.length;if(h===0){if(n==="complex64"){const D=qo(a);return[Ho(D[0],0,n)]}return n==="bool"?[s2(a[0])]:[a[0].toString()]}if(h===1){if(f>ig){const k=jo*c;let z=Array.from(a.slice(0,k)),Z=Array.from(a.slice((f-jo)*c,f*c));return n==="complex64"&&(z=qo(z),Z=qo(Z)),["["+z.map((P,H)=>Ho(P,o[H],n)).join(", ")+", ..., "+Z.map((P,H)=>Ho(P,o[f-jo+H],n)).join(", ")+"]"]}return["["+(n==="complex64"?qo(a):Array.from(a)).map((k,z)=>Ho(k,o[z],n)).join(", ")+"]"]}const d=t.slice(1),y=s.slice(1),b=s[0]*c,S=[];if(f>ig){for(let D=0;D<jo;D++){const k=D*b,z=k+b;S.push(...Nl(a.slice(k,z),d,n,y,o,!1))}S.push("...");for(let D=f-jo;D<f;D++){const k=D*b,z=k+b;S.push(...Nl(a.slice(k,z),d,n,y,o,D===f-1))}}else for(let D=0;D<f;D++){const k=D*b,z=k+b;S.push(...Nl(a.slice(k,z),d,n,y,o,D===f-1))}const N=h===2?",":"";S[0]="["+(f>0?S[0]+N:"");for(let D=1;D<S.length-1;D++)S[D]=" "+S[D]+N;let E=`,
`;for(let D=2;D<h;D++)E+=`
`;return S[S.length-1]=" "+S[S.length-1]+"]"+(l?"":E),S}function qo(a){const t=[];for(let n=0;n<a.length;n+=2)t.push([a[n],a[n+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ah{constructor(t,n,s){if(this.dtype=n,this.shape=t.slice(),this.size=Ne(t),s!=null){const o=s.length;$(o===this.size,()=>`Length of values '${o}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||Yg(n,this.size),this.strides=ep(t)}set(t,...n){n.length===0&&(n=[0]),$(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const s=this.locToIndex(n);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let n=0;for(const o of t){if(o<0||o>=this.shape[n]){const l=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(l)}n++}let s=t[t.length-1];for(let o=0;o<t.length-1;++o)s+=this.strides[o]*t[o];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let n=t[t.length-1];for(let s=0;s<t.length-1;++s)n+=this.strides[s]*t[s];return n}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const n=new Array(this.shape.length);for(let s=0;s<n.length-1;++s)n[s]=Math.floor(t/this.strides[s]),t-=n[s]*this.strides[s];return n[n.length-1]=t,n}get rank(){return this.shape.length}toTensor(){return Yn().makeTensor(this.values,this.shape,this.dtype)}}let Yn=null,di=null;function Yv(a){Yn=a}function Xv(a){di=a}let me=class{constructor(t,n,s,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=Ne(t),this.strides=ep(t),this.dataId=s,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return di.buffer(this.shape,this.dtype,t)}bufferSync(){return di.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return _h(this.shape,t,this.dtype==="complex64")}arraySync(){return _h(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=Yn().read(this.dataId);if(this.dtype==="string"){const n=await t;try{return n.map(s=>sg(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),Yn().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=Yn().readSync(this.dataId);if(this.dtype==="string")try{return t.map(n=>sg(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await Yn().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),Yn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return di.print(this,t)}clone(){return this.throwIfDisposed(),di.clone(this)}toString(t=!1){const n=this.dataSync();return Gv(n,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),di.cast(this,t)}variable(t=!0,n,s){return this.throwIfDisposed(),Yn().makeVariable(this,t,n,s)}};Object.defineProperty(me,Symbol.hasInstance,{value:a=>!!a&&a.data!=null&&a.dataSync!=null&&a.throwIfDisposed!=null});function i2(){return ap("Tensor",()=>me)}i2();class Bl extends me{constructor(t,n,s,o){super(t.shape,t.dtype,t.dataId,o),this.trainable=n,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Ca(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Yn().disposeTensor(this),this.dataId=t.dataId,Yn().incRef(this,null)}dispose(){Yn().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Bl,Symbol.hasInstance,{value:a=>a instanceof me&&a.assign!=null&&a.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var og;(function(a){a.R0="R0",a.R1="R1",a.R2="R2",a.R3="R3",a.R4="R4",a.R5="R5",a.R6="R6"})(og||(og={}));var Oh;(function(a){a.float32="float32",a.int32="int32",a.bool="int32",a.complex64="complex64"})(Oh||(Oh={}));var Dh;(function(a){a.float32="float32",a.int32="int32",a.bool="bool",a.complex64="complex64"})(Dh||(Dh={}));var kh;(function(a){a.float32="float32",a.int32="float32",a.bool="float32",a.complex64="complex64"})(kh||(kh={}));var $h;(function(a){a.float32="complex64",a.int32="complex64",a.bool="complex64",a.complex64="complex64"})($h||($h={}));const Qv={float32:kh,int32:Oh,bool:Dh,complex64:$h};function Wv(a,t){if(a==="string"||t==="string"){if(a==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${a} with ${t}`)}return Qv[a][t]}function o2(a){return a!=null&&typeof a=="object"&&"texture"in a&&a.texture instanceof WebGLTexture}function u2(a){return typeof GPUBuffer<"u"&&a!=null&&typeof a=="object"&&"buffer"in a&&a.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ge(a,t){if(a.dtype===t.dtype)return[a,t];const n=Wv(a.dtype,t.dtype);return[a.cast(n),t.cast(n)]}function Pv(a,t){$(a.dtype===t.dtype,()=>`The dtypes of the first(${a.dtype}) and second(${t.dtype}) input must match`)}function l2(a){const t=[];return c2(a,t,new Set),t}function c2(a,t,n){if(a==null)return;if(a instanceof me){t.push(a);return}if(!Zv(a))return;const s=a;for(const o in s){const l=s[o];n.has(l)||(n.add(l),c2(l,t,n))}}function Zv(a){return Array.isArray(a)||typeof a=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uh(a){return a.kernelName!=null}class ug{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class vi{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new ug}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const s=t[n];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:n}=this.initializeBackend(t);if(n)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,n,s=1){return t in this.registryFactory?(Lo(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:n,priority:s},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:n,asyncInit:s}=this.initializeBackend(t);if(!(s?await n:n))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new jv(this.backendInstance),!0}setupRegisteredKernels(){rg(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){rg(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const n=this.registryFactory[t];if(n==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=n.factory();if(s&&!(s instanceof R3)&&typeof s.then=="function"){const o=++this.pendingBackendInitId,l=s.then(c=>o<this.pendingBackendInitId?!1:(this.registry[t]=c,this.pendingBackendInit=null,!0)).catch(c=>(o<this.pendingBackendInitId||(this.pendingBackendInit=null,Lo(`Initialization of backend ${t} failed`),Lo(c.stack||c.message)),!1));return this.pendingBackendInit=l,{success:l,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return Lo(`Initialization of backend ${t} failed`),Lo(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,n)=>this.registryFactory[n].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const s=t[n],{success:o,asyncInit:l}=this.initializeBackend(s);if(l||o)return{name:s,asyncInit:l}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,n){const s=this.state.tensorInfo.get(n),o=s.backend,l=this.readSync(n),c=o.refCount(n);o.disposeData(n,!0),s.backend=t,t.move(n,l,s.shape,s.dtype,c),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,n){let s=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let o;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(o),()=>(o=n(),o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),o))}scopedRun(t,n,s){t();try{const o=s();return n(),o}catch(o){throw n(),o}}nextTensorId(){return vi.nextTensorId++}nextVariableId(){return vi.nextVariableId++}clone(t){const n=I.runKernel(t2,{x:t}),s={x:t},o=c=>({x:()=>{const f="float32",h={x:c},d={dtype:f};return I.runKernel(Jg,h,d)}}),l=[];return this.addTapeNode(this.state.activeScope.name,s,[n],o,l,{}),n}runKernel(t,n,s){if(this.backendName==null&&this.backend,!(xh(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:n,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,n,s){const o=this.backend.numDataIds();let l=0;s.forEach(h=>{l+=h.dtype==="complex64"?3:1});const c=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],f=o-n-l-c;if(f>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${f} data ids) after running '${t}'`)}runKernelFunc(t){let n,s=[];const o=this.isTapeOn(),l=this.state.numBytes,c=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let f;this.backendName==null&&this.backend;let h;const d=uh(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(uh(t)){const{kernelName:E,inputs:D,attrs:k}=t;this.backendName==null&&this.backend;const z=xh(E,this.backendName);$(z!=null,()=>`Cannot find registered kernel '${E}' for backend '${this.backendName}'`),f=()=>{const Z=this.backend.numDataIds();h=z.kernelFunc({inputs:D,attrs:k,backend:this.backend});const P=Array.isArray(h)?h:[h];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(E,Z,P);const H=P.map(G=>G.rank!=null?G:this.makeTensorFromTensorInfo(G));if(o){const G=this.getTensorsForGradient(E,D,H);s=this.saveTensorsForBackwardMode(G)}return H}}else{const{forwardFunc:E}=t,D=k=>{o&&(s=k.map(z=>this.keep(this.clone(z))))};f=()=>{const k=this.backend.numDataIds();h=this.tidy(()=>E(this.backend,D));const z=Array.isArray(h)?h:[h];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(d,k,z),z}}const{inputs:y,attrs:b}=t,S=uh(t)?null:t.backwardsFunc;let N;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=f():(N=this.profiler.profileKernel(d,y,()=>f()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(N),n=N.outputs)}),o&&this.addTapeNode(d,y,n,S,s,b),this.state.profiling&&this.state.activeProfile.kernels.push({name:d,bytesAdded:this.state.numBytes-l,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-c,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(y).map(E=>y[E]!=null?y[E].shape:null),outputShapes:n.map(E=>E.shape),kernelTimeMs:N.timeMs,extraInfo:N.extraInfo}),Array.isArray(h)?n:n[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,n,s){const o=ag(t);if(o!=null){const l=o.inputsToSave||[],c=o.outputsToSave||[];let f;o.saveAllInputs?($(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),f=Object.keys(n).map(d=>n[d])):f=l.map(d=>n[d]);const h=s.filter((d,y)=>c[y]);return f.concat(h)}return[]}makeTensor(t,n,s,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",o=o||this.backend;let l=t;s==="string"&&tp(t[0])&&(l=t.map(h=>Lv(h)));const c=o.write(l,n,s),f=new me(n,s,c,this.nextTensorId());if(this.trackTensor(f,o),s==="string"){const h=this.state.tensorInfo.get(c),d=I3(l);this.state.numBytes+=d-h.bytes,h.bytes=d}return f}makeTensorFromDataId(t,n,s,o){s=s||"float32";const l={dataId:t,shape:n,dtype:s};return this.makeTensorFromTensorInfo(l,o)}makeTensorFromTensorInfo(t,n){const{dataId:s,shape:o,dtype:l}=t,c=new me(o,l,s,this.nextTensorId());return this.trackTensor(c,n),c}makeVariable(t,n=!0,s,o){s=s||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.cast(o));const l=new Bl(t,n,s,this.nextTensorId());if(this.state.registeredVariables[l.name]!=null)throw new Error(`Variable with name ${l.name} was already registered`);return this.state.registeredVariables[l.name]=l,this.incRef(l,this.backend),l}trackTensor(t,n){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*Nh(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof Bl||this.track(t)}incRef(t,n){this.trackTensor(t,n),this.backend.incRef(t.dataId)}removeDataId(t,n){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===n&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const n=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*Nh(t.dtype);this.state.numBytes-=s}n.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,n.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const n=this.state.registeredVariables[t];this.disposeVariable(n)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const n=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(o=>o.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const o of this.state.activeProfile.kernels)o.kernelTimeMs=await o.kernelTimeMs,o.extraInfo=await o.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,n,s,o,l,c){const f={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:s,saved:l},h=ag(t);h!=null&&(o=h.gradFunc),o!=null&&(f.gradient=d=>(d=d.map((y,b)=>{if(y==null){const S=s[b],N=np(S.size,S.dtype);return this.makeTensor(N,S.shape,S.dtype)}return y}),o(d.length>1?d:d[0],l,c))),this.state.activeTape.push(f)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(t){const n=l2(t),s=new Set(n.map(l=>l.id));for(let l=0;l<this.state.activeScope.track.length;l++){const c=this.state.activeScope.track[l];!c.kept&&!s.has(c.id)&&c.dispose()}const o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(l=>{!l.kept&&l.scopeId===o.id&&this.track(l)})}gradients(t,n,s,o=!1){if($(n.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const l=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));$(l instanceof me,()=>"The result y returned by f() must be a tensor.");const c=qv(this.state.activeTape,n,l);if(!o&&c.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const f={};f[l.id]=s??Jv(l.shape),Fv(f,c,d=>this.tidy(d),tS);const h=n.map(d=>f[d.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(d=>{for(const y of d.saved)y.dispose()}),this.state.activeTape=null),{value:l,grads:h}})}customGrad(t){return $(Eh(t),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{$(n.every(f=>f instanceof me),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const o={};n.forEach((f,h)=>{o[h]=f});const l=(f,h)=>(s=t(...n,h),$(s.value instanceof me,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),$(Eh(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),c=(f,h)=>{const d=s.gradFunc(f,h),y=Array.isArray(d)?d:[d];$(y.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),$(y.every(S=>S instanceof me),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const b={};return y.forEach((S,N)=>{b[N]=()=>S}),b};return this.runKernelFunc({forwardFunc:l,backwardsFunc:c,inputs:o})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,n){return this.state.tensorInfo.get(t).backend.readToGPU(t,n)}async time(t){const n=Ml(),s=await this.backend.time(t);return s.wallMs=Ml()-n,s}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new ug;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}vi.nextTensorId=0;vi.nextVariableId=0;function Jv(a){const t=Qg(Ne(a),"float32");return I.makeTensor(t,a,"float32")}function f2(){const a=Pg();if(a._tfengine==null){const t=new V3(a);a._tfengine=new vi(t)}return G3(a._tfengine.ENV),Yv(()=>a._tfengine),a._tfengine}const I=f2();function tS(a,t){const n={a,b:t};return I.runKernel(Zg,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eS(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const on=Lt();on.registerFlag("DEBUG",()=>!1,a=>{a&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});on.registerFlag("IS_BROWSER",()=>eS());on.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");on.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));on.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));on.registerFlag("PROD",()=>!1);on.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>on.getBool("DEBUG"));on.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);on.registerFlag("IS_TEST",()=>!1);on.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>on.getBool("DEBUG"));on.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);on.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);on.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kr(a,t){let n=a;if(Bn(a))return t==="string"?[]:[a.length];if(o2(a)){const o=a.channels||"RGBA";return[a.height,a.width*o.length]}else if(u2(a))return[a.buffer.size/(t==null?4:Nh(t))];if(!Array.isArray(a))return[];const s=[];for(;Array.isArray(n)||Bn(n)&&t!=="string";)s.push(n.length),n=n[0];return Array.isArray(a)&&Lt().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&h2(a,s,[]),s}function h2(a,t,n){if(n=n||[],!Array.isArray(a)&&!Bn(a)){$(t.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}$(t.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${a.length} elements`),$(a.length===t[0],()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${a.length} elements`);const s=t.slice(1);for(let o=0;o<a.length;++o)h2(a[o],s,n.concat(o))}function lg(a,t,n,s){if(a!=="string_or_numeric"){if(a==null)throw new Error("Expected dtype cannot be null.");if(a!=="numeric"&&a!==t||a==="numeric"&&t==="string")throw new Error(`Argument '${n}' passed to '${s}' must be ${a} tensor, but got ${t} tensor`)}}function A(a,t,n,s="numeric"){if(a instanceof i2())return lg(s,a.dtype,t,n),a;let o=Wl(a);if(o!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(o=s),lg(s,o,t,n),a==null||!Bn(a)&&!Array.isArray(a)&&typeof a!="number"&&typeof a!="boolean"&&typeof a!="string"){const h=a==null?"null":a.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${h}'`)}const l=kr(a,o);!Bn(a)&&!Array.isArray(a)&&(a=[a]);const f=o!=="string"?r2(a,o):Ko(a,[],!0);return I.makeTensor(f,l,o)}function Ul(a,t,n,s="numeric"){if(!Array.isArray(a))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return a.map((l,c)=>A(l,`${t}[${c}]`,n,s))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const p2="__op";function U(a){const t=Object.keys(a);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const s=a[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+p2;const o=(...l)=>{I.startScope(n);try{const c=s(...l);return ds(c)&&console.error("Cannot return a Promise inside of tidy."),I.endScope(c),c}catch(c){throw I.endScope(null),c}};return Object.defineProperty(o,"name",{value:n,configurable:!0}),o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nS(a,t){const n=A(a,"real","complex"),s=A(t,"imag","complex");Un(n.shape,s.shape,`real and imag shapes, ${n.shape} and ${s.shape}, must match in call to tf.complex().`);const o={real:n,imag:s};return I.runKernel(mb,o)}const Ar=U({complex_:nS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $r(a,t,n,s){if(s==null)s=Wl(a);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(u2(a)||o2(a)){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return I.backend.createTensorFromGPUData(a,t||n,s)}if(!Bn(a)&&!Array.isArray(a)&&typeof a!="number"&&typeof a!="boolean"&&typeof a!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){xn(t);const o=Ne(t),l=Ne(n);$(o===l,()=>`Based on the provided shape, [${t}], the tensor should have ${o} values but has ${l}`);for(let c=0;c<n.length;++c){const f=n[c],h=c===n.length-1?f!==Ne(t.slice(c)):!0;$(n[c]===t[c]||!h,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!Bn(a)&&!Array.isArray(a)&&(a=[a]),t=t||n,a=s!=="string"?r2(a,s):Ko(a,[],!0),I.makeTensor(a,t,s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sa(a,t,n){const s=kr(a,n);return $r(a,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ms={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class Wn{static join(t){return new Wn(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(s=>Bn(s)?s.buffer:s),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let n=0;for(let s=0;s<t.length;s++){const o=t[s];s!==t.length-1&&o.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const l=n+o.byteLength;this.shards.push({buffer:o,start:n,end:l}),n=l}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,n=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,n=isNaN(Number(n))?0:n,t=Math.max(0,t),n=Math.min(this.byteLength,n),n<=t)return new ArrayBuffer(0);const s=this.findShardForByte(t);if(s===-1)throw new Error(`Could not find start shard for byte ${t}`);const o=n-t,l=new ArrayBuffer(o),c=new Uint8Array(l);let f=0;for(let h=s;h<this.shards.length;h++){const d=this.shards[h],b=t+f-d.start,S=f,E=Math.min(n,d.end)-d.start,D=new Uint8Array(d.buffer,b,E-b);if(c.set(D,S),f+=D.length,n<d.end)break}return l}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function n(o){return t<o.start?-1:t>=o.end?1:0}if(n(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const s=aS(this.shards,n);return s===-1?-1:(this.previousShardIndex=s,this.previousShardIndex)}}function aS(a,t){let n=0,s=a.length;for(;n<=s;){const o=Math.floor((s-n)/2)+n,l=t(a[o]);if(l===0)return o;l<0?s=o:n=o+1}return-1}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mt(a,t){return I.tidy(a,t)}function pe(a){l2(a).forEach(n=>n.dispose())}function ra(a){return I.keep(a)}function rS(){return I.backendName}function sS(){return I.backend}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Or=4;async function iS(a,t){const n=[],s=[],o=Array.isArray(a)?a.map(c=>c.name):Object.keys(a);for(let c=0;c<o.length;++c){const f=o[c],h=Array.isArray(a)?a[c].tensor:a[f];if(h.dtype!=="float32"&&h.dtype!=="int32"&&h.dtype!=="bool"&&h.dtype!=="string"&&h.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${f}': ${h.dtype}`);const d={name:f,shape:h.shape,dtype:h.dtype};if(h.dtype==="string"){const y=new Promise(async b=>{const S=await h.bytes(),N=S.reduce((k,z)=>k+z.length,0)+Or*S.length,E=new Uint8Array(N);let D=0;for(let k=0;k<S.length;k++){const z=S[k],Z=new Uint8Array(new Uint32Array([z.length]).buffer);E.set(Z,D),D+=Or,E.set(z,D),D+=z.length}b(E)});s.push(y)}else s.push(h.data());t!=null&&(d.group=t),n.push(d)}const l=await Promise.all(s);return{data:lS(l),specs:n}}function d2(a,t){const n=new Wn(a),s={};let o=0;for(const l of t){const c=oS(l,(f,h)=>n.slice(o+f,o+h));s[l.name]=m2(l,n.slice(o,o+c)),o+=c}return s}function oS(a,t){const n=Ne(a.shape);let s;if("quantization"in a){const o=a.quantization;s=ms[o.dtype]}else if(a.dtype==="string"){let o=0;for(let l=0;l<n;l++)o+=Or+new Uint32Array(t(o,o+Or))[0];return o}else s=ms[a.dtype];return n*s}async function uS(a,t){const n=Ne(a.shape);let s;if("quantization"in a){const o=a.quantization;s=ms[o.dtype]}else if(a.dtype==="string"){let o=0;for(let l=0;l<n;l++)o+=Or+new Uint32Array(await t(o,o+Or))[0];return o}else s=ms[a.dtype];return n*s}function m2(a,t){const n=a.name,s=a.dtype,o=a.shape,l=Ne(o);let c,f=0;if("quantization"in a){const h=a.quantization;if(h.dtype==="uint8"||h.dtype==="uint16"){if(!("min"in h&&"scale"in h))throw new Error(`Weight ${a.name} with quantization ${h.dtype} doesn't have corresponding metadata min and scale.`)}else if(h.dtype==="float16"){if(s!=="float32")throw new Error(`Weight ${a.name} is quantized with ${h.dtype} which only supports weights of type float32 not ${s}.`)}else throw new Error(`Weight ${a.name} has unknown quantization dtype ${h.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const d=ms[h.dtype],y=h.dtype==="uint8"?new Uint8Array(t):new Uint16Array(t);if(s==="float32")if(h.dtype==="uint8"||h.dtype==="uint16"){c=new Float32Array(y.length);for(let b=0;b<y.length;b++){const S=y[b];c[b]=S*h.scale+h.min}}else if(h.dtype==="float16")c=gS()(y);else throw new Error(`Unsupported quantization type ${h.dtype} for weight type float32.`);else if(s==="int32"){if(h.dtype!=="uint8"&&h.dtype!=="uint16")throw new Error(`Unsupported quantization type ${h.dtype} for weight type int32.`);c=new Int32Array(y.length);for(let b=0;b<y.length;b++){const S=y[b];c[b]=Math.round(S*h.scale+h.min)}}else throw new Error(`Unsupported dtype in weight '${n}': ${s}`);f+=l*d}else if(s==="string"){const h=Ne(a.shape);c=[];for(let d=0;d<h;d++){const y=new Uint32Array(t.slice(f,f+Or))[0];f+=Or;const b=new Uint8Array(t.slice(f,f+y));c.push(b),f+=y}}else{const h=ms[s];if(s==="float32")c=new Float32Array(t);else if(s==="int32")c=new Int32Array(t);else if(s==="bool")c=new Uint8Array(t);else if(s==="complex64"){c=new Float32Array(t);const d=new Float32Array(c.length/2),y=new Float32Array(c.length/2);for(let E=0;E<d.length;E++)d[E]=c[E*2],y[E]=c[E*2+1];const b=sa(d,o,"float32"),S=sa(y,o,"float32"),N=Ar(b,S);return b.dispose(),S.dispose(),N}else throw new Error(`Unsupported dtype in weight '${n}': ${s}`);f+=l*h}return sa(c,o,s)}async function cg(a,t,n){let s=new Uint8Array(t);for(;s.byteLength<n;){const{done:o,value:l}=await a.read();if(o&&l==null){const f=n-s.byteLength;throw new Error(`Reader is done but ${f} bytes are still expected`)}const c=new Uint8Array(s.length+l.byteLength);c.set(s,0),c.set(new Uint8Array(l),s.length),s=c}return s.buffer}async function g2(a,t){const n={},s=a.getReader();let o=new ArrayBuffer(0);for(const l of t){const c=await uS(l,async(d,y)=>(o=await cg(s,o,y),o.slice(d,y)));o=await cg(s,o,c);const f=o.slice(0,c);o=o.slice(c);const h=m2(l,f);if(n[l.name]=h,rS()==="webgpu"){const d=sS();"uploadToGPU"in d&&Ne(h.shape)>=Lt().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&d.uploadToGPU(h.dataId)}}return n}function lS(a){if(a===null)throw new Error(`Invalid input value: ${JSON.stringify(a)}`);let t=0;const n=[];a.forEach(l=>{if(t+=l.byteLength,n.push(l.byteLength===l.buffer.byteLength?l:new l.constructor(l)),!(l instanceof Float32Array||l instanceof Int32Array||l instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${l.constructor.name}`)});const s=new Uint8Array(t);let o=0;return n.forEach(l=>{s.set(new Uint8Array(l.buffer),o),o+=l.byteLength}),s.buffer}const rp=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function fg(a){return rp?Buffer.byteLength(a,"utf8"):new Blob([a]).size}function cS(a){if(rp)return Buffer.from(a).toString("base64");const t=new Uint8Array(a);let n="";for(let s=0,o=t.length;s<o;s++)n+=String.fromCharCode(t[s]);return btoa(n)}function fS(a){if(rp){const s=Buffer.from(a,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(a),n=new Uint8Array(t.length);for(let s=0;s<t.length;++s)n.set([t.charCodeAt(s)],s);return n.buffer}function hS(a){return Wn.join(a)}function hg(a){const t="/";for(a=a.trim();a.endsWith(t);)a=a.slice(0,a.length-1);const n=a.split(t);return n[n.length-1]}function y2(a,t){const n={modelTopology:a.modelTopology,format:a.format,generatedBy:a.generatedBy,convertedBy:a.convertedBy,weightsManifest:t};return a.signature!=null&&(n.signature=a.signature),a.userDefinedMetadata!=null&&(n.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(n.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(n.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(n.trainingConfig=a.trainingConfig),n}function b2(a,t,n){const s={modelTopology:a.modelTopology,format:a.format,generatedBy:a.generatedBy,convertedBy:a.convertedBy};if(a.trainingConfig!=null&&(s.trainingConfig=a.trainingConfig),a.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=t,s.weightData=n}return a.signature!=null&&(s.signature=a.signature),a.userDefinedMetadata!=null&&(s.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(s.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(s.initializerSignature=a.initializerSignature),s}async function sp(a,t){let n,s;return a.weightsManifest!=null&&([n,s]=await t(a.weightsManifest)),b2(a,n,s)}function Jo(a){if(a.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:a.modelTopology==null?0:fg(JSON.stringify(a.modelTopology)),weightSpecsBytes:a.weightSpecs==null?0:fg(JSON.stringify(a.weightSpecs)),weightDataBytes:a.weightData==null?0:new Wn(a.weightData).byteLength}}function Rh(a){const t=[];for(const n of a)t.push(...n.weights);return t}function pS(){const a=n=>{let s=n<<13,o=0;for(;(s&8388608)===0;)o-=8388608,s<<=1;return s&=-8388609,o+=947912704,s|o},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=a(n);for(let n=1024;n<2048;n++)t[n]=939524096+(n-1024<<13);return t}function dS(){const a=new Uint32Array(64);a[0]=0,a[31]=1199570944,a[32]=2147483648,a[63]=3347054592;for(let t=1;t<31;t++)a[t]=t<<23;for(let t=33;t<63;t++)a[t]=2147483648+(t-32<<23);return a}function mS(){const a=new Uint32Array(64);for(let t=0;t<64;t++)a[t]=1024;return a[0]=a[32]=0,a}function gS(){const a=pS(),t=dS(),n=mS();return s=>{const o=new ArrayBuffer(4*s.length),l=new Uint32Array(o);for(let c=0;c<s.length;c++){const f=s[c],h=a[n[f>>10]+(f&1023)]+t[f>>10];l[c]=h}return new Float32Array(o)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class he{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return he.instance==null&&(he.instance=new he),he.instance}static registerSaveRouter(t){he.getInstance().saveRouters.push(t)}static registerLoadRouter(t){he.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return he.getHandlers(t,"save")}static getLoadHandlers(t,n){return he.getHandlers(t,"load",n)}static getHandlers(t,n,s){const o=[];return(n==="load"?he.getInstance().loadRouters:he.getInstance().saveRouters).forEach(c=>{const f=c(t,s);f!==null&&o.push(f)}),o}}const yS=a=>he.registerSaveRouter(a),bS=a=>he.registerLoadRouter(a),vS=a=>he.getSaveHandlers(a),SS=(a,t)=>he.getLoadHandlers(a,t);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zh="tensorflowjs",Ch=1,fs="models_store",Nr="model_info_store";function v2(){if(!Lt().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const a=typeof window>"u"?self:window,t=a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB||a.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Mh(a){const t=a.result;t.createObjectStore(fs,{keyPath:"modelPath"}),t.createObjectStore(Nr,{keyPath:"modelPath"})}class gs{constructor(t){if(this.indexedDB=v2(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,n){return new Promise((s,o)=>{const l=this.indexedDB.open(zh,Ch);l.onupgradeneeded=()=>Mh(l),l.onsuccess=()=>{const c=l.result;if(n==null){const f=c.transaction(fs,"readonly"),d=f.objectStore(fs).get(this.modelPath);d.onsuccess=()=>{if(d.result==null)return c.close(),o(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(d.result.modelArtifacts)},d.onerror=y=>(c.close(),o(d.error)),f.oncomplete=()=>c.close()}else{n.weightData=Wn.join(n.weightData);const f=Jo(n),h=c.transaction(Nr,"readwrite");let d=h.objectStore(Nr),y;try{y=d.put({modelPath:this.modelPath,modelArtifactsInfo:f})}catch(S){return o(S)}let b;y.onsuccess=()=>{b=c.transaction(fs,"readwrite");const S=b.objectStore(fs);let N;try{N=S.put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:f})}catch(E){return o(E)}N.onsuccess=()=>s({modelArtifactsInfo:f}),N.onerror=E=>{d=h.objectStore(Nr);const D=d.delete(this.modelPath);D.onsuccess=()=>(c.close(),o(N.error)),D.onerror=k=>(c.close(),o(N.error))}},y.onerror=S=>(c.close(),o(y.error)),h.oncomplete=()=>{b==null?c.close():b.oncomplete=()=>c.close()}}},l.onerror=c=>o(l.error)})}}gs.URL_SCHEME="indexeddb://";const S2=a=>Lt().getBool("IS_BROWSER")&&!Array.isArray(a)&&a.startsWith(gs.URL_SCHEME)?wS(a.slice(gs.URL_SCHEME.length)):null;he.registerSaveRouter(S2);he.registerLoadRouter(S2);function wS(a){return new gs(a)}function TS(a){return a.startsWith(gs.URL_SCHEME)?a.slice(gs.URL_SCHEME.length):a}class NS{constructor(){this.indexedDB=v2()}async listModels(){return new Promise((t,n)=>{const s=this.indexedDB.open(zh,Ch);s.onupgradeneeded=()=>Mh(s),s.onsuccess=()=>{const o=s.result,l=o.transaction(Nr,"readonly"),f=l.objectStore(Nr).getAll();f.onsuccess=()=>{const h={};for(const d of f.result)h[d.modelPath]=d.modelArtifactsInfo;t(h)},f.onerror=h=>(o.close(),n(f.error)),l.oncomplete=()=>o.close()},s.onerror=o=>n(s.error)})}async removeModel(t){return t=TS(t),new Promise((n,s)=>{const o=this.indexedDB.open(zh,Ch);o.onupgradeneeded=()=>Mh(o),o.onsuccess=()=>{const l=o.result,c=l.transaction(Nr,"readwrite"),f=c.objectStore(Nr),h=f.get(t);let d;h.onsuccess=()=>{if(h.result==null)return l.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const y=f.delete(t),b=()=>{d=l.transaction(fs,"readwrite");const N=d.objectStore(fs).delete(t);N.onsuccess=()=>n(h.result.modelArtifactsInfo),N.onerror=E=>s(h.error)};y.onsuccess=b,y.onerror=S=>(b(),l.close(),s(h.error))}},h.onerror=y=>(l.close(),s(h.error)),c.oncomplete=()=>{d==null?l.close():d.oncomplete=()=>l.close()}},o.onerror=l=>s(o.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $a="/",mi="tensorflowjs_models",w2="info",ES="model_topology",_S="weight_specs",xS="weight_data",AS="model_metadata";function T2(a){return{info:[mi,a,w2].join($a),topology:[mi,a,ES].join($a),weightSpecs:[mi,a,_S].join($a),weightData:[mi,a,xS].join($a),modelMetadata:[mi,a,AS].join($a)}}function N2(a){for(const t of Object.values(a))window.localStorage.removeItem(t)}function OS(a){const t=a.split($a);if(t.length<3)throw new Error(`Invalid key format: ${a}`);return t.slice(1,t.length-1).join($a)}function DS(a){return a.startsWith(ys.URL_SCHEME)?a.slice(ys.URL_SCHEME.length):a}class ys{constructor(t){if(!Lt().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=T2(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),o=Jo(t),l=Wn.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,cS(l));const c={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(c)),{modelArtifactsInfo:o}}catch{throw N2(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${o.modelTopologyBytes}, weightSpecsBytes=${o.weightSpecsBytes}, weightDataBytes=${o.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=s;const o=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(o==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=o;const l=this.LS.getItem(this.keys.modelMetadata);if(l!=null){const f=JSON.parse(l);n.format=f.format,n.generatedBy=f.generatedBy,n.convertedBy=f.convertedBy,f.signature!=null&&(n.signature=f.signature),f.userDefinedMetadata!=null&&(n.userDefinedMetadata=f.userDefinedMetadata),f.modelInitializer!=null&&(n.modelInitializer=f.modelInitializer),f.initializerSignature!=null&&(n.initializerSignature=f.initializerSignature),f.trainingConfig!=null&&(n.trainingConfig=f.trainingConfig)}const c=this.LS.getItem(this.keys.weightData);if(c==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=fS(c),n}}ys.URL_SCHEME="localstorage://";const E2=a=>Lt().getBool("IS_BROWSER")&&!Array.isArray(a)&&a.startsWith(ys.URL_SCHEME)?kS(a.slice(ys.URL_SCHEME.length)):null;he.registerSaveRouter(E2);he.registerLoadRouter(E2);function kS(a){return new ys(a)}class $S{constructor(){$(Lt().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),$(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},n=mi+$a,s=$a+w2;for(let o=0;o<this.LS.length;++o){const l=this.LS.key(o);if(l.startsWith(n)&&l.endsWith(s)){const c=OS(l);t[c]=JSON.parse(this.LS.getItem(l))}}return t}async removeModel(t){t=DS(t);const n=T2(t);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(n.info));return N2(n),s}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yi="://";class tn{constructor(){this.managers={}}static getInstance(){return tn.instance==null&&(tn.instance=new tn),tn.instance}static registerManager(t,n){$(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(yi)&&(t=t.slice(0,t.indexOf(yi))),$(t.length>0,()=>"scheme must not be an empty string.");const s=tn.getInstance();$(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=n}static getManager(t){const n=tn.getInstance().managers[t];if(n==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(tn.getInstance().managers)}}function El(a){if(a.indexOf(yi)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${tn.getSchemes().join(",")}`);return{scheme:a.split(yi)[0],path:a.split(yi)[1]}}async function _2(a,t,n=!1){$(a!==t,()=>`Old path and new path are the same: '${a}'`);const s=he.getLoadHandlers(a);$(s.length>0,()=>`Copying failed because no load handler is found for source URL ${a}.`),$(s.length<2,()=>`Copying failed because more than one (${s.length}) load handlers for source URL ${a}.`);const o=s[0],l=he.getSaveHandlers(t);$(l.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),$(l.length<2,()=>`Copying failed because more than one (${s.length}) save handlers for destination URL ${t}.`);const c=l[0],f=El(a).scheme,h=El(a).path,d=f===El(a).scheme,y=await o.load();n&&d&&await tn.getManager(f).removeModel(h);const b=await c.save(y);return n&&!d&&await tn.getManager(f).removeModel(h),b.modelArtifactsInfo}async function RS(){const a=tn.getSchemes(),t={};for(const n of a){const s=await tn.getManager(n).listModels();for(const o in s){const l=n+yi+o;t[l]=s[o]}}return t}async function zS(a){const t=El(a);return tn.getManager(t.scheme).removeModel(t.path)}async function CS(a,t){return _2(a,t,!1)}async function MS(a,t){return _2(a,t,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class BS{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,n){return fetch(t,n)}now(){return performance.now()}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,n){return new TextDecoder(n).decode(t)}setTimeoutCustom(t,n){if(typeof window>"u"||!Lt().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,n);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const o=this.functionRefs[s.data.index];o(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return a2(t)}}if(Lt().get("IS_BROWSER")){Lt().setPlatform("browser",new BS);try{tn.registerManager(ys.URL_SCHEME,new $S)}catch{}try{tn.registerManager(gs.URL_SCHEME,new NS)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const US={importFetch:()=>require("node-fetch")};let lh;class IS{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,n){return Lt().global.fetch!=null?Lt().global.fetch(t,n):(lh==null&&(lh=US.importFetch()),lh(t,n))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(t)}decode(t,n){return t.length===0?"":new this.util.TextDecoder(n).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}Lt().get("IS_NODE")&&!Lt().get("IS_BROWSER")&&Lt().setPlatform("node",new IS);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ma(a,t="float32",n){return t=t||"float32",xn(a),new Ah(a,t,n)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LS(a,t){const n=A(a,"x","cast");if(!U3(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:n},o={dtype:t};return I.runKernel(Jg,s,o)}const ce=U({cast_:LS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jS(a){const n={x:A(a,"x","clone","string_or_numeric")};return I.runKernel(t2,n)}const Er=U({clone_:jS});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x2(a,t=!1){console.log(a.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */f2();const VS={buffer:Ma,cast:ce,clone:Er,print:x2};Xv(VS);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HS(a,t){let n=A(a,"a","add"),s=A(t,"b","add");[n,s]=ge(n,s);const o={a:n,b:s};return I.runKernel(Zg,o)}const wt=U({add_:HS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qS(a,t){let n=A(a,"a","floorDiv"),s=A(t,"b","floorDiv");[n,s]=ge(n,s);const o={a:n,b:s};return I.runKernel(Yb,o)}const A2=U({floorDiv_:qS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FS(a,t){let n=A(a,"a","div"),s=A(t,"b","div");if([n,s]=ge(n,s),n.dtype==="int32"&&s.dtype==="int32")return A2(n,s);const o={a:n,b:s},l={};return I.runKernel(Mb,o,l)}const It=U({div_:FS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GS(a,t){let n=A(a,"a","mul"),s=A(t,"b","mul");[n,s]=ge(n,s);const o={a:n,b:s};return I.runKernel(_4,o)}const ct=U({mul_:GS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KS(a){const t=A(a,"x","abs");if(t.dtype==="complex64"){const n={x:t};return I.runKernel(gb,n)}else{const n={x:t};return I.runKernel(Y3,n)}}const En=U({abs_:KS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YS(a){const n={x:A(a,"x","acos")};return I.runKernel(X3,n)}const XS=U({acos_:YS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QS(a){const n={x:A(a,"x","acosh")};return I.runKernel(Q3,n)}const WS=U({acosh_:QS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PS(a){$(Array.isArray(a),()=>"The argument passed to tf.addN() must be a list of tensors"),$(a.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${a.length}`);const t=a.map((o,l)=>A(o,`tensors${l}`,"addN")),n=t[0];t.forEach(o=>{if(o.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(o=>{if(!Ca(o.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const s=t;return I.runKernel(W3,s)}const ZS=U({addN_:PS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JS(a,t=null,n=!1){const o={x:A(a,"x","all","bool")},l={axis:t,keepDims:n};return I.runKernel(P3,o,l)}const tw=U({all_:JS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ew(a,t=null,n=!1){const o={x:A(a,"x","any","bool")},l={axis:t,keepDims:n};return I.runKernel(Z3,o,l)}const nw=U({any_:ew});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aw(a,t=0){const s={x:A(a,"x","argMax")},o={axis:t};return I.runKernel(J3,s,o)}const rw=U({argMax_:aw});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sw(a,t=0){const s={x:A(a,"x","argMin")},o={axis:t};return I.runKernel(tb,s,o)}const iw=U({argMin_:sw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ow(a){const n={x:A(a,"x","asin")};return I.runKernel(eb,n)}const uw=U({asin_:ow});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lw(a){const n={x:A(a,"x","asinh")};return I.runKernel(nb,n)}const cw=U({asinh_:lw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fw(a){const n={x:A(a,"x","atan")};return I.runKernel(ab,n)}const hw=U({atan_:fw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pw(a,t){let n=A(a,"a","atan2"),s=A(t,"b","atan2");[n,s]=ge(n,s);const o={a:n,b:s};return I.runKernel(sb,o)}const dw=U({atan2_:pw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mw(a){const n={x:A(a,"x","atanh")};return I.runKernel(rb,n)}const gw=U({atanh_:mw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yw(a,t,n,s,o,l,c="channelsLast"){const[f,h]=Yo(t);let d;if(c==="channelsLast")d=[f,h,a[3],a[3]];else if(c==="channelsFirst")d=[f,h,a[1],a[1]];else throw new Error(`Unknown dataFormat ${c}`);return ip(a,d,n,s,o,l,!1,c)}function ip(a,t,n,s,o,l,c=!1,f="channelsLast"){let[h,d,y,b]=[-1,-1,-1,-1];if(f==="channelsLast")[h,d,y,b]=a;else if(f==="channelsFirst")[h,b,d,y]=a;else throw new Error(`Unknown dataFormat ${f}`);const[S,N,,E]=t,[D,k]=Yo(n),[z,Z]=Yo(s),P=Bh(S,z),H=Bh(N,Z),{padInfo:G,outHeight:Q,outWidth:st}=Sw(o,d,y,D,k,P,H,l,f),ut=c?E*b:E;let ot;return f==="channelsFirst"?ot=[h,ut,Q,st]:f==="channelsLast"&&(ot=[h,Q,st,ut]),{batchSize:h,dataFormat:f,inHeight:d,inWidth:y,inChannels:b,outHeight:Q,outWidth:st,outChannels:ut,padInfo:G,strideHeight:D,strideWidth:k,filterHeight:S,filterWidth:N,effectiveFilterHeight:P,effectiveFilterWidth:H,dilationHeight:z,dilationWidth:Z,inShape:a,outShape:ot,filterShape:t}}function bw(a,t,n,s,o){s==null&&(s=vw(a,t,n));const l=a[0],c=a[1],f=Il((l-t+2*s)/n+1,o),h=Il((c-t+2*s)/n+1,o);return[f,h]}function vw(a,t,n,s=1){const o=Bh(t,s);return Math.floor((a[0]*(n-1)-n+o)/2)}function Yo(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a}function Bh(a,t){return t<=1?a:a+(a-1)*(t-1)}function Sw(a,t,n,s,o,l,c,f,h){let d,y,b;if(typeof a=="number"){d={top:a,bottom:a,left:a,right:a,type:a===0?"VALID":"NUMBER"};const N=bw([t,n],l,s,a,f);y=N[0],b=N[1]}else if(a==="same"){y=Math.ceil(t/s),b=Math.ceil(n/o);const S=Math.max(0,(y-1)*s+l-t),N=Math.max(0,(b-1)*o+c-n),E=Math.floor(S/2),D=S-E,k=Math.floor(N/2),z=N-k;d={top:E,bottom:D,left:k,right:z,type:"SAME"}}else if(a==="valid")d={top:0,bottom:0,left:0,right:0,type:"VALID"},y=Math.ceil((t-l+1)/s),b=Math.ceil((n-c+1)/o);else if(typeof a=="object"){const S=h==="channelsLast"?a[1][0]:a[2][0],N=h==="channelsLast"?a[1][1]:a[2][1],E=h==="channelsLast"?a[2][0]:a[3][0],D=h==="channelsLast"?a[2][1]:a[3][1];d={top:S,bottom:N,left:E,right:D,type:S===0&&N===0&&E===0&&D===0?"VALID":"EXPLICIT"},y=Il((t-l+S+N)/s+1,f),b=Il((n-c+E+D)/o+1,f)}else throw Error(`Unknown padding parameter: ${a}`);return{padInfo:d,outHeight:y,outWidth:b}}function Il(a,t){if(!t)return Math.trunc(a);switch(t){case"round":return Math.round(a);case"ceil":return Math.ceil(a);case"floor":return Math.floor(a);default:throw new Error(`Unknown roundingMode ${t}`)}}function Ll(a){const[t,n,s]=Yo(a);return t===1&&n===1&&s===1}function Rr(a,t){return Ll(a)||Ll(t)}function Si(a){return Yo(a).every(t=>t>0)}function Pn(a,t,n){if(n!=null){if(typeof t=="string")throw Error(`Error in ${a}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t=="number")$(Go(t),()=>`Error in ${a}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(o=>{$(Go(o),()=>`Error in ${a}: pad must be an integer when using dimRoundingMode ${n} but got pad ${o}.`)})});else throw Error(`Error in ${a}: Unknown padding parameter: ${t}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ww(a,t){const s={x:A(a,"x","reshape","string_or_numeric")},o={shape:t};return I.runKernel(G4,s,o)}const et=U({reshape_:ww});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tw(a,t,n,s,o){const l=A(a,"x","avgPool","float32"),c=1;$(Rr(n,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${c}'`);let f=l,h=!1;l.rank===3&&(h=!0,f=et(l,[1,l.shape[0],l.shape[1],l.shape[2]])),$(f.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${f.rank}.`),Pn("avgPool",s,o);const d={x:f},y={filterSize:t,strides:n,pad:s,dimRoundingMode:o};let b=I.runKernel(ib,d,y);return b=ce(b,l.dtype),h?et(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const O2=U({avgPool_:Tw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nw(a,t,n,s,o,l="NDHWC"){const c=A(a,"x","avgPool3d","float32");let f=c,h=!1;c.rank===4&&(h=!0,f=et(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),$(f.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${f.rank}.`),$(l==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${l}`),$(typeof n=="number"&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),Pn("avgPool3d",s,o);const d={x:f},y={filterSize:t,strides:n,pad:s,dimRoundingMode:o,dataFormat:l};let b=I.runKernel(ob,d,y);return b=ce(b,f.dtype),h?et(b,[b.shape[1],b.shape[2],b.shape[3],b.shape[4]]):b}const Ew=U({avgPool3d_:Nw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _w(a,t=0){$(a.length>=1,()=>"Pass at least one tensor to concat");const n=Ul(a,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(l=>{if(l.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${l.dtype}. `)}),n.length===1)return Er(n[0]);const s=n,o={axis:t};return I.runKernel(yb,s,o)}const Ie=U({concat_:_w});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xw(a,t,n=!1,s=!1){let o=A(a,"a","matMul"),l=A(t,"b","matMul");[o,l]=ge(o,l);const c={a:o,b:l},f={transposeA:n,transposeB:s};return I.runKernel(ub,c,f)}const te=U({matMul_:xw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Aw(a){const n={x:A(a,"x","sigmoid","float32")};return I.runKernel(ov,n)}const ps=U({sigmoid_:Aw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ow(a,t,n){const s=A(a,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const o={x:s},l={begin:t,size:n};return I.runKernel(av,o,l)}const Rt=U({slice_:Ow});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dw(a){const n={x:A(a,"x","tanh","float32")};return I.runKernel(Av,n)}const Uh=U({tanh_:Dw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kw(a,t,n,s,o,l){const c=A(a,"forgetBias","basicLSTMCell"),f=A(t,"lstmKernel","basicLSTMCell"),h=A(n,"lstmBias","basicLSTMCell"),d=A(s,"data","basicLSTMCell"),y=A(o,"c","basicLSTMCell"),b=A(l,"h","basicLSTMCell"),S=Ie([d,b],1),N=te(S,f),E=wt(N,h),D=E.shape[0],k=E.shape[1]/4,z=[D,k],Z=Rt(E,[0,0],z),P=Rt(E,[0,k],z),H=Rt(E,[0,k*2],z),G=Rt(E,[0,k*3],z),Q=wt(ct(ps(Z),Uh(P)),ct(y,ps(wt(c,H)))),st=ct(Uh(Q),ps(G));return[Q,st]}const $w=U({basicLSTMCell_:kw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rw(a,t,n){const s=A(a,"x","batchToSpaceND"),o=t.reduce((f,h)=>f*h);$(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),$(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),$(s.shape[0]%o===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${o}`);const l={x:s},c={blockShape:t,crops:n};return I.runKernel(lb,l,c)}const D2=U({batchToSpaceND_:Rw});function zw(a){let t;return a.rank===0||a.rank===1?t=et(a,[1,1,1,a.size]):a.rank===2?t=et(a,[1,1,a.shape[0],a.shape[1]]):a.rank===3?t=et(a,[1,a.shape[0],a.shape[1],a.shape[2]]):t=a,t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cw(a,t,n,s,o,l){l==null&&(l=.001);const c=A(a,"x","batchNorm"),f=A(t,"mean","batchNorm"),h=A(n,"variance","batchNorm");let d;o!=null&&(d=A(o,"scale","batchNorm"));let y;s!=null&&(y=A(s,"offset","batchNorm")),$(f.rank===h.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),$(y==null||f.rank===y.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),$(d==null||f.rank===d.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const S={x:zw(c),scale:d,offset:y,mean:f,variance:h},N={varianceEpsilon:l},E=I.runKernel(Xb,S,N);return et(E,c.shape)}const Pl=U({batchNorm_:Cw});function Mw(a,t,n,s,o,l){const c=A(a,"x","batchNorm"),f=A(t,"mean","batchNorm"),h=A(n,"variance","batchNorm");let d;o!=null&&(d=A(o,"scale","batchNorm"));let y;return s!=null&&(y=A(s,"offset","batchNorm")),$(c.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${c.rank}.`),$(f.rank===2||f.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${f.rank}.`),$(h.rank===2||h.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${h.rank}.`),d!=null&&$(d.rank===2||d.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${d.rank}.`),y!=null&&$(y.rank===2||y.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${y.rank}.`),Pl(c,f,h,y,d,l)}const Bw=U({batchNorm2d_:Mw});function Uw(a,t,n,s,o,l){const c=A(a,"x","batchNorm"),f=A(t,"mean","batchNorm"),h=A(n,"variance","batchNorm");let d;o!=null&&(d=A(o,"scale","batchNorm"));let y;return s!=null&&(y=A(s,"offset","batchNorm")),$(c.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${c.rank}.`),$(f.rank===3||f.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${f.rank}.`),$(h.rank===3||h.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${h.rank}.`),d!=null&&$(d.rank===3||d.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${d.rank}.`),y!=null&&$(y.rank===3||y.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${y.rank}.`),Pl(c,f,h,y,d,l)}const Iw=U({batchNorm3d_:Uw});function Lw(a,t,n,s,o,l){const c=A(a,"x","batchNorm"),f=A(t,"mean","batchNorm"),h=A(n,"variance","batchNorm");let d;o!=null&&(d=A(o,"scale","batchNorm"));let y;return s!=null&&(y=A(s,"offset","batchNorm")),$(c.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${c.rank}.`),$(f.rank===4||f.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${f.rank}.`),$(h.rank===4||h.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${h.rank}.`),d!=null&&$(d.rank===4||d.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${d.rank}.`),y!=null&&$(y.rank===4||y.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${y.rank}.`),Pl(c,f,h,y,d,l)}const jw=U({batchNorm4d_:Lw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vw(a,t,n){const s=A(a,"x","bincount"),o=A(t,"weights","bincount");$(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),$(n>=0,()=>`size must be non-negative, but got ${n}.`),$(o.size===s.size||o.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${o.shape}.`);const l={x:s,weights:o},c={size:n};return I.runKernel(cb,l,c)}const k2=U({bincount_:Vw});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hw(a,t){const n=A(a,"x","bitwiseAnd"),s=A(t,"y","bitwiseAnd");if(!Ca(n.shape,s.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${s.shape}`);if(n.dtype!=="int32"||s.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${s.dtype}`);const o={a:n,b:s};return I.runKernel(fb,o)}const qw=U({bitwiseAnd_:Hw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fw(a,t){const n=A(a,"s0","broadcastArgs","int32"),s=A(t,"s1","broadcastArgs","int32");if(n.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(s.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${s.rank}`);const o={s0:n,s1:s};return I.runKernel(hb,o)}const Gw=U({broadcastArgs_:Fw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kw(a,t){let n=A(a,"broadcastTo","x");const s=n.shape;if(xn(t),t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const d=n.shape.slice();for(;d.length<t.length;)d.unshift(1);n=et(n,d)}const o=n.shape,l=Array.from(t);for(let d=t.length-1;d>=0;d--)if(o[d]===t[d])l[d]=1;else if(n.shape[d]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(l.map((d,y)=>d>1?y:-1).filter(d=>d>=0).length===0)return Er(n);const f={x:n},h={reps:l};return I.runKernel(e2,f,h)}const _l=U({broadcastTo_:Kw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yw(a){const n={x:A(a,"x","ceil","float32")};return I.runKernel(pb,n)}const Xw=U({ceil_:Yw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tu(a,t,n){xn(a),n=n||Wl(t);const s={shape:a,value:t,dtype:n};return I.runKernel(Fb,{},s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qw(a,t,n){const s=A(a,"x","clipByValue");if($(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return tu(s.shape,t,s.dtype);const o={x:s},l={clipValueMin:t,clipValueMax:n};return I.runKernel(db,o,l)}const $2=U({clipByValue_:Qw});function Ww(a){return Ie(a,0)}const Pw=U({concat1d_:Ww});function Zw(a,t){return Ie(a,t)}const Jw=U({concat2d_:Zw});function tT(a,t){return Ie(a,t)}const eT=U({concat3d_:tT});function nT(a,t){return Ie(a,t)}const aT=U({concat4d_:nT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rT(a,t,n,s,o="NHWC",l=[1,1],c){const f=A(a,"x","conv2d","float32"),h=A(t,"filter","conv2d","float32");let d=f,y=!1;f.rank===3&&(y=!0,d=et(f,[1,f.shape[0],f.shape[1],f.shape[2]])),$(d.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${d.rank}.`),$(h.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${h.rank}.`),Pn("conv2d",s,c);const b=o==="NHWC"?d.shape[3]:d.shape[1];$(b===h.shape[2],()=>`Error in conv2d: depth of input (${b}) must match input depth for filter ${h.shape[2]}.`),$(Rr(n,l),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${l}'`),$(Si(l),()=>"Error in conv2D: Dilated rates should be larger than 0."),$(Si(n),()=>"Error in conv2D: Strides should be larger than 0.");const S={x:d,filter:h},N={strides:n,pad:s,dataFormat:o,dilations:l,dimRoundingMode:c},E=I.runKernel(bb,S,N);return y?et(E,[E.shape[1],E.shape[2],E.shape[3]]):E}const Zl=U({conv2d_:rT});function sT(a,t,n,s,o="NWC",l=1,c){const f=A(a,"x","conv1d"),h=A(t,"filter","conv1d");let d=f,y=!1;f.rank===2&&(y=!0,d=et(f,[1,f.shape[0],f.shape[1]])),$(d.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${d.rank}.`),$(h.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${h.rank}.`),Pn("conv1d",s,c),$(d.shape[2]===h.shape[1],()=>`Error in conv1d: depth of input (${d.shape[2]}) must match input depth for filter ${h.shape[1]}.`),$(Rr(n,l),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${l}'`),$(Si(l),()=>"Error in conv1D: Dilated rates should be larger than 0."),$(Si(n),()=>"Error in conv1D: Stride should be larger than 0."),$(o==="NWC",()=>`Error in conv1d: got dataFormat of ${o} but only NWC is currently supported.`);const b=et(h,[1,h.shape[0],h.shape[1],h.shape[2]]),S=et(d,[d.shape[0],1,d.shape[1],d.shape[2]]),k=Zl(S,b,[1,n],s,"NHWC",[1,l],c);return y?et(k,[k.shape[2],k.shape[3]]):et(k,[k.shape[0],k.shape[2],k.shape[3]])}const iT=U({conv1d_:sT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oT(a,t,n,s,o,l="NHWC",c){$(a.length===t.rank,()=>`Length of inShape (${a.length}) and rank of dy (${t.rank}) must match`);let f=a,h=t,d=!1;t.rank===3&&(d=!0,h=et(t,[1,t.shape[0],t.shape[1],t.shape[2]]),f=[1,a[0],a[1],a[2]]),$(f.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${f.length}.`),$(h.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${h.rank}`),$(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const y=l==="NHWC"?f[3]:f[1],b=l==="NHWC"?h.shape[3]:h.shape[1];$(y===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${y}) must match input depth for filter ${n.shape[2]}.`),$(b===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${b}) must match output depth for filter ${n.shape[3]}.`),Pn("conv2dDerInput",o,c);const S={dy:h,filter:n},N={strides:s,pad:o,dataFormat:l,dimRoundingMode:c,inputShape:f},E=I.runKernel(Sb,S,N);return d?et(E,[E.shape[1],E.shape[2],E.shape[3]]):E}const R2=U({conv2DBackpropInput_:oT});function uT(a,t,n,s,o,l){const c=A(a,"x","conv2dTranspose"),f=A(t,"filter","conv2dTranspose");return R2(n,c,f,s,o,"NHWC",l)}const lT=U({conv2dTranspose_:uT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cT(a,t,n,s,o="NDHWC",l=[1,1,1]){const c=A(a,"x","conv3d"),f=A(t,"filter","conv3d");let h=c,d=!1;c.rank===4&&(d=!0,h=et(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),$(h.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${h.rank}.`),$(f.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${f.rank}.`),$(h.shape[4]===f.shape[3],()=>`Error in conv3d: depth of input (${h.shape[4]}) must match input depth for filter ${f.shape[3]}.`),$(Rr(n,l),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${l}'`),$(o==="NDHWC",()=>`Error in conv3d: got dataFormat of ${o} but only NDHWC is currently supported.`),$(Si(l),()=>"Error in conv3D: Dilated rates should be larger than 0."),$(Si(n),()=>"Error in conv3D: Strides should be larger than 0.");const y={x:h,filter:f},b={strides:n,pad:s,dataFormat:o,dilations:l},S=I.runKernel(wb,y,b);return d?et(S,[S.shape[1],S.shape[2],S.shape[3],S.shape[4]]):S}const fT=U({conv3d_:cT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hT(a,t,n,s,o){$(a.length===t.rank,()=>`Length of inShape (${a.length}) and rank of dy (${t.rank}) must match`);let l=a,c=t,f=!1;t.rank===4&&(f=!0,c=et(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),l=[1,a[0],a[1],a[2],a[3]]);const h=l[4],d=c.shape[4];$(l.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${l.length}.`),$(c.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${c.rank}`),$(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),$(h===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${h}) must match input depth for filter ${n.shape[3]}.`),$(d===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${d}) must match output depth for filter ${n.shape[4]}.`);const y={dy:c,filter:n},b={pad:o,strides:s,inputShape:l},S=I.runKernel(Tb,y,b);return f?et(S,[S.shape[1],S.shape[2],S.shape[3],S.shape[4]]):S}const pT=U({conv3DBackpropInput_:hT});function dT(a,t,n,s,o){const l=A(a,"x","conv3dTranspose"),c=A(t,"filter","conv3dTranspose");return pT(n,l,c,s,o)}const mT=U({conv3dTranspose_:dT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gT(a){const n={x:A(a,"x","cos","float32")};return I.runKernel(Nb,n)}const yT=U({cos_:gT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bT(a){const n={x:A(a,"x","cosh","float32")};return I.runKernel(Eb,n)}const vT=U({cosh_:bT});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ST(a,t=0,n=!1,s=!1){const l={x:A(a,"x","cumprod")},c={axis:t,exclusive:n,reverse:s};return I.runKernel(_b,l,c)}const wT=U({cumprod_:ST});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TT(a,t=0,n=!1,s=!1){const l={x:A(a,"x","cumsum")},c={axis:t,exclusive:n,reverse:s};return I.runKernel(xb,l,c)}const NT=U({cumsum_:TT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ET(a,t,n,s=!1){const o=A(a,"x","denseBincount"),l=A(t,"weights","denseBincount");$(o.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${o.dtype}`),$(o.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${o.rank}.`),$(n>=0,()=>`size must be non-negative, but got ${n}.`),$(l.size===o.size||l.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${o.shape}, weights shape: ${l.shape}.`);const c={x:o,weights:l},f={size:n,binaryOutput:s};return I.runKernel(Ob,c,f)}const _T=U({denseBincount_:ET});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xT(a,t,n="NHWC"){const s=A(a,"x","depthToSpace","float32"),o=n==="NHWC"?s.shape[1]:s.shape[2],l=n==="NHWC"?s.shape[2]:s.shape[3],c=n==="NHWC"?s.shape[3]:s.shape[1];$(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),$(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t}  for depthToSpace with input shape
    ${s.shape}`),$(l*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${l} and ${t} for depthToSpace with input shape
        ${s.shape}`),$(c%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${c} for depthToSpace with input shape ${s.shape}`);const f={x:s},h={blockSize:t,dataFormat:n};return I.runKernel(Db,f,h)}const AT=U({depthToSpace_:xT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function OT(a,t,n,s,o="NHWC",l=[1,1],c){const f=A(a,"x","depthwiseConv2d","float32"),h=A(t,"filter","depthwiseConv2d","float32");let d=f,y=!1;f.rank===3&&(y=!0,d=et(f,[1,f.shape[0],f.shape[1],f.shape[2]])),$(d.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${d.rank}.`),$(h.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${h.rank}.`);const b=o==="NHWC"?d.shape[3]:d.shape[1];$(b===h.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${b}) must match the inChannels dimension in filter ${h.shape[2]}.`),Pn("depthwiseConv2d",s,c);const S={x:d,filter:h},N={strides:n,pad:s,dataFormat:o,dilations:l,dimRoundingMode:c},E=I.runKernel(kb,S,N);return y?et(E,[E.shape[1],E.shape[2],E.shape[3]]):E}const op=U({depthwiseConv2d_:OT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DT(a){const n={x:A(a,"x","diag")};return I.runKernel(zb,n)}const kT=U({diag_:DT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $T(a,t,n,s,o=[1,1],l="NHWC"){const c=A(a,"x","dilation2d"),f=A(t,"filter","dilation2d");$(c.rank===3||c.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${c.rank}.`),$(f.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${f.rank}.`),$(l==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${l}`);let h=c,d=!1;c.rank===3&&(h=et(c,[1,c.shape[0],c.shape[1],c.shape[2]]),d=!0),$(h.shape[3]===f.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${h.shape[3]} vs ${f.shape[2]}`);const y={x:h,filter:f},b={strides:n,pad:s,dilations:o},S=I.runKernel(Cb,y,b);return d?et(S,[S.shape[1],S.shape[2],S.shape[3]]):S}const RT=U({dilation2d_:$T});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zT(a,t){const n=[];for(let s=0;s<t.length;s++){const o=a[a.length-s-1],l=t.length-s-1,c=t[l];(o==null||o===1&&c>1)&&n.unshift(l)}return n}function $e(a,t){const n=Math.max(a.length,t.length),s=new Array(n);for(let o=0;o<n;o++){let l=a[a.length-o-1];l==null&&(l=1);let c=t[t.length-o-1];if(c==null&&(c=1),l===1)s[n-o-1]=c;else if(c===1)s[n-o-1]=l;else if(l!==c){const f=`Operands could not be broadcast together with shapes ${a} and ${t}.`;throw Error(f)}else s[n-o-1]=l}return s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CT(a,t){let n=A(a,"a","equal","string_or_numeric"),s=A(t,"b","equal","string_or_numeric");[n,s]=ge(n,s),$e(n.shape,s.shape);const o={a:n,b:s};return I.runKernel(Lb,o)}const z2=U({equal_:CT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MT(a,t,n){const s=A(t,"a","where"),o=A(n,"b","where"),l=A(a,"condition","where","bool"),c=$e($e(l.shape,s.shape),o.shape),f=_l(l,c),h=_l(s,c),d=_l(o,c),y={condition:f,t:h,e:d};return I.runKernel(ev,y)}const _r=U({where_:MT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BT(a){const n={x:A(a,"x","zerosLike")};return I.runKernel(zv,n)}const _n=U({zerosLike_:BT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UT(a,t){let n=A(a,"a","div"),s=A(t,"b","div");[n,s]=ge(n,s);const o=It(n,s),l=_n(o),c=z2(s,l);return _r(c,l,o)}const IT=U({divNoNan_:UT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LT(a,t){const n=A(a,"t1","dot"),s=A(t,"t2","dot");$((n.rank===1||n.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${s.rank}.`);const o=n.rank===1?n.size:n.shape[1],l=s.rank===1?s.size:s.shape[0];if($(o===l,()=>`Error in dot: inner dimensions of inputs must match, but got ${o} and ${l}.`),n.rank===1&&s.rank===1){const c=et(n,[1,-1]),f=et(s,[-1,1]),h=te(c,f);return et(h,[])}else if(n.rank===1&&s.rank===2){const c=et(n,[1,-1]),f=et(s,[s.shape[0],s.shape[1]]),h=te(c,f);return et(h,[h.size])}else if(n.rank===2&&s.rank===1){const c=et(s,[-1,1]),f=te(n,c);return et(f,[f.size])}else{const c=et(s,[s.shape[0],s.shape[1]]);return te(n,c)}}const jT=U({dot_:LT});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VT(a,...t){const n=t.map((o,l)=>A(o,`tensors${l}`,"einsum")),s={equation:a};return I.runKernel(Bb,n,s)}const gi=U({einsum_:VT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HT(a){const n={x:A(a,"x","elu","float32")};return I.runKernel(Ub,n)}const C2=U({elu_:HT});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qT(a,t){const n=A(a,"x","ensureShape","string_or_numeric");if(!z3(n.shape,t))throw new Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${t}`);return a}const FT=U({ensureShape_:qT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GT(a){let t=A(a,"x","erf");$(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=ce(t,"float32"));const n={x:t};return I.runKernel(Ib,n)}const KT=U({erf_:GT});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YT(a,t,n){const s=a.length+t.length,o=[];let l=0,c=0;for(let f=0;f<s;f++)n.indexOf(f)===-1?o.push(a[l++]):o.push(t[c++]);return o}function Jl(a,t){const n=t.map(s=>1);return YT(a,n,t)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function XT(a,t=null,n=!1){const o={x:A(a,"x","max")},l={reductionIndices:t,keepDims:n};return I.runKernel(d4,o,l)}const bi=U({max_:XT});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QT(a,t=null,n=!1){const o={x:A(a,"x","min")},l={axis:t,keepDims:n};return I.runKernel(S4,o,l)}const Ih=U({min_:QT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WT(a,t){let n=A(a,"base","pow"),s=A(t,"exp","pow");[n,s]=ge(n,s);const o={a:n,b:s};return I.runKernel(M4,o)}const Xo=U({pow_:WT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qt(a,t){if((Bn(a)&&t!=="string"||Array.isArray(a))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Bn(a)&&!(a instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return $r(a,[],[],t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PT(a){const n={x:A(a,"x","sqrt","float32")};return I.runKernel(lv,n)}const Ba=U({sqrt_:PT});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZT(a){const t=A(a,"x","square"),n={};return I.runKernel("Square",{x:t},n)}const Xn=U({square_:ZT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JT(a,t=null,n=!1){let s=A(a,"x","sum");s.dtype==="bool"&&(s=ce(s,"int32"));const o={x:s},l={axis:t,keepDims:n};return I.runKernel(cv,o,l)}const le=U({sum_:JT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t6(a,t="euclidean",n=null,s=!1){a=A(a,"x","norm");const o=M2(a,t,n);let l=o.shape;if(s){const c=Ql(n,a.shape);l=Jl(o.shape,c)}return et(o,l)}function M2(a,t,n=null){if(a.rank===0)return En(a);if(a.rank!==1&&n===null)return M2(et(a,[-1]),t,n);if(a.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(t===1)return le(En(a),n);if(t===1/0)return bi(En(a),n);if(t===-1/0)return Ih(En(a),n);if(t==="euclidean"||t===2)return Ba(le(Xo(En(a),qt(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return bi(le(En(a),n[0]),n[1]-1);if(t===1/0)return bi(le(En(a),n[1]),n[0]);if(t===-1/0)return Ih(le(En(a),n[1]),n[0]);if(t==="fro"||t==="euclidean")return Ba(le(Xn(a),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const tc=U({norm_:t6});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e6(a,t=null,n=!1){return tc(a,"euclidean",t,n)}const n6=U({euclideanNorm_:e6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a6(a){const n={x:A(a,"x","exp")};return I.runKernel(jb,n)}const Ua=U({exp_:a6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r6(a,t=0){const n=A(a,"x","expandDims","string_or_numeric");$(t<=n.rank,()=>"Axis must be <= rank of the tensor");const s={input:n},o={dim:t};return I.runKernel(Vb,s,o)}const Mn=U({expandDims_:r6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s6(a){const n={x:A(a,"x","expm1")};return I.runKernel(Hb,n)}const i6=U({expm1_:s6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o6(a,t){const n=A(a,"x","tile","string_or_numeric");$(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);const s={x:n},o={reps:t};return I.runKernel(e2,s,o)}const Fo=U({tile_:o6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u6(a,t,n,s="float32"){t==null&&(t=a);const o=Ma([a,t],s),l=a<=t?a:t;for(let f=0;f<l;++f)o.set(1,f,f);const c=et(o.toTensor(),[a,t]);if(n==null)return c;if(n.length===1)return Fo(Mn(c,0),[n[0],1,1]);if(n.length===2)return Fo(Mn(Mn(c,0),0),[n[0],n[1],1,1]);if(n.length===3)return Fo(Mn(Mn(Mn(c,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const B2=U({eye_:u6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l6(a){const n={x:A(a,"x","floor","float32")};return I.runKernel(Kb,n)}const U2=U({floor_:l6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c6(a,t,n=0,s=0){const o=A(a,"x","gather"),l=A(t,"indices","gather","int32"),c={x:o,indices:l},f={axis:n,batchDims:s};return I.runKernel(Qb,c,f)}const I2=U({gather_:c6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f6(a,t){let n=A(a,"a","greater","string_or_numeric"),s=A(t,"b","greater","string_or_numeric");[n,s]=ge(n,s),$e(n.shape,s.shape);const o={a:n,b:s};return I.runKernel(Pb,o)}const ec=U({greater_:f6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h6(a,t){let n=A(a,"a","greaterEqual","string_or_numeric"),s=A(t,"b","greaterEqual","string_or_numeric");[n,s]=ge(n,s),$e(n.shape,s.shape);const o={a:n,b:s};return I.runKernel(Zb,o)}const L2=U({greaterEqual_:h6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p6(a){const n={input:A(a,"input","imag")};return I.runKernel(t4,n)}const nc=U({imag_:p6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d6(a){const n={x:A(a,"x","isFinite")};return I.runKernel(e4,n)}const m6=U({isFinite_:d6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g6(a){const n={x:A(a,"x","isInf")};return I.runKernel(n4,n)}const y6=U({isInf_:g6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b6(a){const n={x:A(a,"x","isNaN")};return I.runKernel(a4,n)}const v6=U({isNaN_:b6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S6(a,t=.2){const s={x:A(a,"x","leakyRelu")},o={alpha:t};return I.runKernel(r4,s,o)}const j2=U({leakyRelu_:S6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w6(a,t){let n=A(a,"a","less","string_or_numeric"),s=A(t,"b","less","string_or_numeric");[n,s]=ge(n,s),$e(n.shape,s.shape);const o={a:n,b:s};return I.runKernel(s4,o)}const Lh=U({less_:w6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T6(a,t){let n=A(a,"a","lessEqual","string_or_numeric"),s=A(t,"b","lessEqual","string_or_numeric");[n,s]=ge(n,s),$e(n.shape,s.shape);const o={a:n,b:s};return I.runKernel(i4,o)}const up=U({lessEqual_:T6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N6(a,t,n){if(n<=0)throw new Error("The number of values should be positive.");const s={start:a,stop:t,num:n};return I.runKernel(o4,{},s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E6(a,t=5,n=1,s=1,o=.5){const l=A(a,"x","localResponseNormalization");$(l.rank===4||l.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${l.rank}.`),$(Go(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let c=l,f=!1;l.rank===3&&(f=!0,c=et(l,[1,l.shape[0],l.shape[1],l.shape[2]]));const h={x:c},d={depthRadius:t,bias:n,alpha:s,beta:o},y=I.runKernel(p4,h,d);return f?et(y,[y.shape[1],y.shape[2],y.shape[3]]):y}const _6=U({localResponseNormalization_:E6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x6(a){const n={x:A(a,"x","log","float32")};return I.runKernel(u4,n)}const Qo=U({log_:x6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A6(a){const n={x:A(a,"x","log1p")};return I.runKernel(l4,n)}const V2=U({log1p_:A6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O6(a,t){$(Eh(a),()=>"The f passed in variableGrads(f) must be a function"),$(t==null||Array.isArray(t)&&t.every(d=>d instanceof Bl),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=t!=null;if(!n){t=[];for(const d in I.registeredVariables)t.push(I.registeredVariables[d])}const s=n?t.filter(d=>!d.trainable):null,o=t.length;t=t.filter(d=>d.trainable),$(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${o} variables is trainable.`);const l=!0,{value:c,grads:f}=I.gradients(a,t,null,l);$(f.some(d=>d!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),$(c.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${c.rank} tensor`);const h={};return t.forEach((d,y)=>{f[y]!=null&&(h[d.name]=f[y])}),s!=null&&s.forEach(d=>h[d.name]=null),{value:c,grads:h}}function Ia(a){return I.customGrad(a)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D6(a){const n={x:A(a,"x","neg")};return I.runKernel(x4,n)}const ia=U({neg_:D6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k6(a){const n={x:A(a,"x","softplus")};return I.runKernel(uv,n)}const H2=U({softplus_:k6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $6(a){const t=A(a,"x","logSigmoid");return Ia(s=>({value:ia(H2(ia(s))),gradFunc:c=>ct(c,ps(ia(s)))}))(t)}const R6=U({logSigmoid_:$6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z6(a,t){let n=A(a,"a","sub"),s=A(t,"b","sub");[n,s]=ge(n,s);const o={a:n,b:s};return I.runKernel(_v,o)}const zt=U({sub_:z6});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C6(a,t=-1){const n=A(a,"logits","logSoftmax");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return Ia((o,l)=>{const f=bi(o,t,!0),h=zt(o,f),d=zt(ce(h,"float32"),Qo(le(Ua(h),t,!0)));return l([d]),{value:d,gradFunc:(b,S)=>{const[N]=S,E=!0,D=Ua(N);return zt(b,ct(le(b,t,E),D))}}})(n)}const M6=U({logSoftmax_:C6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B6(a,t=null,n=!1){const s=A(a,"x","logSumExp"),o=Ql(t,s.shape),l=bi(s,o,!0),c=zt(s,l),f=Ua(c),h=le(f,o),d=Qo(h),y=wt(et(l,d.shape),d);if(n){const b=Jl(y.shape,o);return et(y,b)}return y}const q2=U({logSumExp_:B6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U6(a,t){const n=A(a,"a","logicalAnd","bool"),s=A(t,"b","logicalAnd","bool");$e(n.shape,s.shape);const o={a:n,b:s};return I.runKernel(c4,o)}const jl=U({logicalAnd_:U6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I6(a){const n={x:A(a,"x","logicalNot","bool")};return I.runKernel(f4,n)}const F2=U({logicalNot_:I6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L6(a,t){const n=A(a,"a","logicalOr","bool"),s=A(t,"b","logicalOr","bool");$e(n.shape,s.shape);const o={a:n,b:s};return I.runKernel(h4,o)}const G2=U({logicalOr_:L6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j6(a,t){const n=A(a,"a","logicalXor","bool"),s=A(t,"b","logicalXor","bool");return $e(n.shape,s.shape),jl(G2(a,t),F2(jl(a,t)))}const V6=U({logicalXor_:j6});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sl=2147483648;function H6(a,t,n="left"){const s=A(a,"sortedSequence","searchSorted"),o=A(t,"values","searchSorted"),l=s.shape[s.shape.length-1],c=o.shape[o.shape.length-1],f=et(s,[-1,l]),h=et(o,[-1,c]);if(f.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(f.shape[0]!==h.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(Ne(h.shape)>=Sl)throw new Error(`values tensor size must less than ${Sl}`);if(f.shape[1]>=Sl)throw new Error(`trailing dim_size must less than ${Sl} for int32 output type, was ${f.shape[1]}`);const d={sortedSequence:f,values:h},y={side:n};return I.runKernel(tv,d,y)}const lp=U({searchSorted_:H6});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q6(a,t){return lp(a,t,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F6(a,t,n,s,o){const l=A(a,"x","maxPool"),c=1;let f=l,h=!1;l.rank===3&&(h=!0,f=et(l,[1,l.shape[0],l.shape[1],l.shape[2]])),$(f.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${f.rank}.`),$(Rr(n,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${c}'`),Pn("maxPool",s,o);const d={x:f},y={filterSize:t,strides:n,pad:s,dimRoundingMode:o},b=I.runKernel(g4,d,y);return h?et(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const K2=U({maxPool_:F6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G6(a,t=[1,1,1],n,s,o,l="NDHWC"){const c=A(a,"x","maxPool3d");let f=c,h=!1;c.rank===4&&(h=!0,f=et(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),$(f.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${f.rank}.`),$(l==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${l}`),Pn("maxPool3d",s,o);const d={x:f},y={filterSize:t,strides:n,pad:s,dimRoundingMode:o,dataFormat:l},b=I.runKernel(y4,d,y);return h?et(b,[b.shape[1],b.shape[2],b.shape[3],b.shape[4]]):b}const K6=U({maxPool3d_:G6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y6(a,t,n,s,o=!1){const c={x:A(a,"x","maxPoolWithArgmax")},f={filterSize:t,strides:n,pad:s,includeBatchInIndex:o},h=I.runKernel(b4,c,f);return{result:h[0],indexes:h[1]}}const X6=U({maxPoolWithArgmax_:Y6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q6(a,t){let n=A(a,"a","maximum"),s=A(t,"b","maximum");[n,s]=ge(n,s),n.dtype==="bool"&&(n=ce(n,"int32"),s=ce(s,"int32")),$e(n.shape,s.shape);const o={a:n,b:s};return I.runKernel(m4,o)}const Y2=U({maximum_:Q6});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W6(a,t=null,n=!1){const o={x:A(a,"x","mean")},l={axis:t,keepDims:n};return I.runKernel(v4,o,l)}const Vl=U({mean_:W6});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wi(a,t="float32"){if(xn(a),t==="complex64"){const s=wi(a,"float32"),o=wi(a,"float32");return Ar(s,o)}const n=np(Ne(a),t);return I.makeTensor(n,a,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hs(a,t="float32"){if(xn(a),t==="complex64"){const s=hs(a,"float32"),o=wi(a,"float32");return Ar(s,o)}const n=Qg(Ne(a),t);return I.makeTensor(n,a,t)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P6(a,t,{indexing:n="xy"}={}){if(n!=="xy"&&n!=="ij")throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(a===void 0)return[];let s=A(a,"x","meshgrid",a instanceof me?a.dtype:"float32");if(t===void 0)return[s];let o=A(t,"y","meshgrid",t instanceof me?t.dtype:"float32");const l=Ne(s.shape),c=Ne(o.shape);return n==="xy"?(s=et(s,[1,-1]),o=et(o,[-1,1]),[te(hs([c,1],s.dtype),s),te(o,hs([1,l],o.dtype))]):(s=et(s,[-1,1]),o=et(o,[1,-1]),[te(s,hs([1,c],s.dtype)),te(hs([l,1],o.dtype),o)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z6(a,t){let n=A(a,"a","minimum"),s=A(t,"b","minimum");[n,s]=ge(n,s),n.dtype==="bool"&&(n=ce(n,"int32"),s=ce(s,"int32")),$e(n.shape,s.shape);const o={a:n,b:s};return I.runKernel(w4,o)}const Hl=U({minimum_:Z6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J6(a,t,n){$(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const s=A(a,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");$(t.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${t.length}.`);const o=n==="reflect"?1:0;for(let f=0;f<s.rank;f++)$(t[f].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),$(t[f][0]>=0&&t[f][0]<=s.shape[f]-o&&t[f][1]>=0&&t[f][1]<=s.shape[f]-o,()=>`Padding in dimension ${f} cannot be greater than or equal to ${s.shape[f]-o} or less than 0 for input of shape ${s.shape}`);const l={paddings:t,mode:n},c={x:s};return I.runKernel(T4,c,l)}const tN=U({mirrorPad_:J6});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eN(a,t){let n=A(a,"a","mod"),s=A(t,"b","mod");[n,s]=ge(n,s);const o={a:n,b:s};return I.runKernel(N4,o)}const nN=U({mod_:eN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aN(a,t=null,n=!1){a=A(a,"x","moments");const s=Ql(t,a.shape),o=Vl(a,s,n);let l=o.shape;n||(l=Jl(o.shape,s));const c=Xn(zt(ce(a,"float32"),et(o,l))),f=Vl(c,s,n);return{mean:o,variance:f}}const rN=U({moments_:aN});function sN(a,t,n,s){const o=A(t,"data","multiRNNCell"),l=Ul(n,"c","multiRNNCell"),c=Ul(s,"h","multiRNNCell");let f=o;const h=[];for(let b=0;b<a.length;b++){const S=a[b](f,l[b],c[b]);h.push(S[0]),h.push(S[1]),f=S[1]}const d=[],y=[];for(let b=0;b<h.length;b+=2)d.push(h[b]),y.push(h[b+1]);return[d,y]}const iN=U({multiRNNCell_:sN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oN(a,t,n,s=!1){const o=A(a,"logits","multinomial"),l=o.size,c=o.rank;if(l<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${l}.`);if(c>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${c}`);n=n||Math.random();const h={logits:c===1?et(o,[1,-1]):o},d={numSamples:t,seed:n,normalized:s},y=I.runKernel(E4,h,d);return c===1?et(y,[y.size]):y}const uN=U({multinomial_:oN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lN(a,t){let n=A(a,"a","notEqual","string_or_numeric"),s=A(t,"b","notEqual","string_or_numeric");[n,s]=ge(n,s),$e(n.shape,s.shape);const o={a:n,b:s};return I.runKernel(A4,o)}const X2=U({notEqual_:lN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cN(a,t,n=1,s=0,o="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const c={indices:A(a,"indices","oneHot","int32")},f={dtype:o,depth:t,onValue:n,offValue:s};return I.runKernel(R4,c,f)}const fN=U({oneHot_:cN});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hN(a){const n={x:A(a,"x","onesLike")};return I.runKernel($4,n)}const pN=U({onesLike_:hN});function dN(a,t){const n=A(a,"v1","outerProduct"),s=A(t,"v2","outerProduct");$(n.rank===1&&s.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${s.rank}.`);const o=et(n,[-1,1]),l=et(s,[1,-1]);return te(o,l)}const mN=U({outerProduct_:dN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gN(a,t,n=0){const s=A(a,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const o={paddings:t,constantValue:n},l={x:s};return I.runKernel(C4,l,o)}const eu=U({pad_:gN});function yN(a,t,n=0){return $(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),eu(a,[t],n)}const bN=U({pad1d_:yN});function vN(a,t,n=0){return $(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),eu(a,t,n)}const SN=U({pad2d_:vN});function wN(a,t,n=0){return $(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),eu(a,t,n)}const TN=U({pad3d_:wN});function NN(a,t,n=0){return $(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),eu(a,t,n)}const EN=U({pad4d_:NN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _N(a,t,n){const s=A(a,"x","spaceToBatchND");$(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),$(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),$(s.shape.reduce((c,f,h)=>h>0&&h<=t.length?c&&(f+n[h-1][0]+n[h-1][1])%t[h-1]===0:c,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);const o={x:s},l={blockShape:t,paddings:n};return I.runKernel(fv,o,l)}const Q2=U({spaceToBatchND_:_N});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xN(a,t,n,s,o,l,c){o==null&&(o=[1,1]),l==null&&(l=1),s===0&&(s="valid");const f=A(a,"x","maxPool");let h=f,d=!1;f.rank===3&&(d=!0,h=et(f,[1,f.shape[0],f.shape[1],f.shape[2]])),$(Rr(l,o),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${l} and dilations '${o}'`);const y=yw(h.shape,t,l,o,s),b=[y.dilationHeight,y.dilationWidth];let S;s==="same"?S=ON([y.filterHeight,y.filterWidth],b):S=[[0,0],[0,0]];const N=b[0]===1&&b[1]===1,[E,D]=AN([y.inHeight,y.inWidth],b,S),k=N?s:"valid",z=N?h:Q2(h,b,E),P=(n==="avg"?()=>O2(z,t,l,k,c):()=>K2(z,t,l,k,c))(),H=N?P:D2(P,b,D);return d?et(H,[H.shape[1],H.shape[2],H.shape[3]]):H}function AN(a,t,n){const s=n.map(y=>y[0]),o=n.map(y=>y[1]),l=a.concat(s,o),c=t.map((y,b)=>(y-l[b]%y)%y),f=o.map((y,b)=>y+c[b]),h=t.map((y,b)=>[s[b],f[b]]),d=t.map((y,b)=>[0,c[b]]);return[h,d]}function ON(a,t){const s=a.map((c,f)=>c+(c-1)*(t[f]-1)).map(c=>c-1),o=s.map(c=>Math.floor(c/2)),l=s.map((c,f)=>c-o[f]);return s.map((c,f)=>[o[f],l[f]])}const DN=U({pool_:xN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kN(a,t){const n=A(a,"x","prelu"),s=A(t,"alpha","prelu"),o={x:n,alpha:s};return I.runKernel(B4,o)}const W2=U({prelu_:kN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $N(a,t=null,n=!1){let s=A(a,"x","prod");s.dtype==="bool"&&(s=ce(s,"int32"));const o={x:s},l={axis:t,keepDims:n};return I.runKernel(U4,o,l)}const RN=U({prod_:$N});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zN(a,t,n,s){const o=a.map((y,b)=>A(y,`tensors${b}`,"raggedGather","int32")),l=A(t,"paramsDenseValues","raggedGather"),c=A(n,"indices","raggedGather","int32"),f={paramsNestedSplits:o,paramsDenseValues:l,indices:c},h={outputRaggedRank:s},d=I.runKernel(I4,f,h);return{outputNestedSplits:d.slice(0,d.length-1),outputDenseValues:d[d.length-1]}}const CN=U({raggedGather_:zN});/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MN(a,t,n){const s=A(a,"starts","raggedRange"),o=A(t,"limits","raggedRange",s.dtype),l=A(n,"deltas","raggedRange",s.dtype),c={starts:s,limits:o,deltas:l},f=I.runKernel(L4,c);return{rtNestedSplits:f[0],rtDenseValues:f[1]}}const BN=U({raggedRange_:MN});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UN(a,t,n,s,o){const l=A(a,"shape","raggedTensorToTensor","int32"),c=A(t,"values","raggedTensorToTensor"),f=A(n,"defaultValue","raggedTensorToTensor",c.dtype),h=s.map((b,S)=>A(b,`tensors${S}`,"raggedTensorToTensor","int32")),d={shape:l,values:c,defaultValue:f,rowPartitionTensors:h},y={rowPartitionTypes:o};return I.runKernel(j4,d,y)}const IN=U({raggedTensorToTensor_:UN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LN(a,t,n){xn(a);const s=Ne(a);let o=null;if(n==null||n==="float32")o=new Float32Array(s);else if(n==="int32")o=new Int32Array(s);else if(n==="bool")o=new Uint8Array(s);else throw new Error(`Unknown data type ${n}`);for(let l=0;l<s;l++)o[l]=t();return I.makeTensor(o,a,n)}const jN=U({rand_:LN});var xl={exports:{}},VN=xl.exports,pg;function HN(){return pg||(pg=1,function(a){(function(t,n,s){function o(h){var d=this,y=f();d.next=function(){var b=2091639*d.s0+d.c*23283064365386963e-26;return d.s0=d.s1,d.s1=d.s2,d.s2=b-(d.c=b|0)},d.c=1,d.s0=y(" "),d.s1=y(" "),d.s2=y(" "),d.s0-=y(h),d.s0<0&&(d.s0+=1),d.s1-=y(h),d.s1<0&&(d.s1+=1),d.s2-=y(h),d.s2<0&&(d.s2+=1),y=null}function l(h,d){return d.c=h.c,d.s0=h.s0,d.s1=h.s1,d.s2=h.s2,d}function c(h,d){var y=new o(h),b=d&&d.state,S=y.next;return S.int32=function(){return y.next()*4294967296|0},S.double=function(){return S()+(S()*2097152|0)*11102230246251565e-32},S.quick=S,b&&(typeof b=="object"&&l(b,y),S.state=function(){return l(y,{})}),S}function f(){var h=4022871197,d=function(y){y=String(y);for(var b=0;b<y.length;b++){h+=y.charCodeAt(b);var S=.02519603282416938*h;h=S>>>0,S-=h,S*=h,h=S>>>0,S-=h,h+=S*4294967296}return(h>>>0)*23283064365386963e-26};return d}n&&n.exports?n.exports=c:this.alea=c})(VN,a)}(xl)),xl.exports}var Al={exports:{}},qN=Al.exports,dg;function FN(){return dg||(dg=1,function(a){(function(t,n,s){function o(f){var h=this,d="";h.x=0,h.y=0,h.z=0,h.w=0,h.next=function(){var b=h.x^h.x<<11;return h.x=h.y,h.y=h.z,h.z=h.w,h.w^=h.w>>>19^b^b>>>8},f===(f|0)?h.x=f:d+=f;for(var y=0;y<d.length+64;y++)h.x^=d.charCodeAt(y)|0,h.next()}function l(f,h){return h.x=f.x,h.y=f.y,h.z=f.z,h.w=f.w,h}function c(f,h){var d=new o(f),y=h&&h.state,b=function(){return(d.next()>>>0)/4294967296};return b.double=function(){do var S=d.next()>>>11,N=(d.next()>>>0)/4294967296,E=(S+N)/(1<<21);while(E===0);return E},b.int32=d.next,b.quick=b,y&&(typeof y=="object"&&l(y,d),b.state=function(){return l(d,{})}),b}n&&n.exports?n.exports=c:this.xor128=c})(qN,a)}(Al)),Al.exports}var Ol={exports:{}},GN=Ol.exports,mg;function KN(){return mg||(mg=1,function(a){(function(t,n,s){function o(f){var h=this,d="";h.next=function(){var b=h.x^h.x>>>2;return h.x=h.y,h.y=h.z,h.z=h.w,h.w=h.v,(h.d=h.d+362437|0)+(h.v=h.v^h.v<<4^(b^b<<1))|0},h.x=0,h.y=0,h.z=0,h.w=0,h.v=0,f===(f|0)?h.x=f:d+=f;for(var y=0;y<d.length+64;y++)h.x^=d.charCodeAt(y)|0,y==d.length&&(h.d=h.x<<10^h.x>>>4),h.next()}function l(f,h){return h.x=f.x,h.y=f.y,h.z=f.z,h.w=f.w,h.v=f.v,h.d=f.d,h}function c(f,h){var d=new o(f),y=h&&h.state,b=function(){return(d.next()>>>0)/4294967296};return b.double=function(){do var S=d.next()>>>11,N=(d.next()>>>0)/4294967296,E=(S+N)/(1<<21);while(E===0);return E},b.int32=d.next,b.quick=b,y&&(typeof y=="object"&&l(y,d),b.state=function(){return l(d,{})}),b}n&&n.exports?n.exports=c:this.xorwow=c})(GN,a)}(Ol)),Ol.exports}var Dl={exports:{}},YN=Dl.exports,gg;function XN(){return gg||(gg=1,function(a){(function(t,n,s){function o(f){var h=this;h.next=function(){var y=h.x,b=h.i,S,N;return S=y[b],S^=S>>>7,N=S^S<<24,S=y[b+1&7],N^=S^S>>>10,S=y[b+3&7],N^=S^S>>>3,S=y[b+4&7],N^=S^S<<7,S=y[b+7&7],S=S^S<<13,N^=S^S<<9,y[b]=N,h.i=b+1&7,N};function d(y,b){var S,N=[];if(b===(b|0))N[0]=b;else for(b=""+b,S=0;S<b.length;++S)N[S&7]=N[S&7]<<15^b.charCodeAt(S)+N[S+1&7]<<13;for(;N.length<8;)N.push(0);for(S=0;S<8&&N[S]===0;++S);for(S==8?N[7]=-1:N[S],y.x=N,y.i=0,S=256;S>0;--S)y.next()}d(h,f)}function l(f,h){return h.x=f.x.slice(),h.i=f.i,h}function c(f,h){f==null&&(f=+new Date);var d=new o(f),y=h&&h.state,b=function(){return(d.next()>>>0)/4294967296};return b.double=function(){do var S=d.next()>>>11,N=(d.next()>>>0)/4294967296,E=(S+N)/(1<<21);while(E===0);return E},b.int32=d.next,b.quick=b,y&&(y.x&&l(y,d),b.state=function(){return l(d,{})}),b}n&&n.exports?n.exports=c:this.xorshift7=c})(YN,a)}(Dl)),Dl.exports}var kl={exports:{}},QN=kl.exports,yg;function WN(){return yg||(yg=1,function(a){(function(t,n,s){function o(f){var h=this;h.next=function(){var y=h.w,b=h.X,S=h.i,N,E;return h.w=y=y+1640531527|0,E=b[S+34&127],N=b[S=S+1&127],E^=E<<13,N^=N<<17,E^=E>>>15,N^=N>>>12,E=b[S]=E^N,h.i=S,E+(y^y>>>16)|0};function d(y,b){var S,N,E,D,k,z=[],Z=128;for(b===(b|0)?(N=b,b=null):(b=b+"\0",N=0,Z=Math.max(Z,b.length)),E=0,D=-32;D<Z;++D)b&&(N^=b.charCodeAt((D+32)%b.length)),D===0&&(k=N),N^=N<<10,N^=N>>>15,N^=N<<4,N^=N>>>13,D>=0&&(k=k+1640531527|0,S=z[D&127]^=N+k,E=S==0?E+1:0);for(E>=128&&(z[(b&&b.length||0)&127]=-1),E=127,D=4*128;D>0;--D)N=z[E+34&127],S=z[E=E+1&127],N^=N<<13,S^=S<<17,N^=N>>>15,S^=S>>>12,z[E]=N^S;y.w=k,y.X=z,y.i=E}d(h,f)}function l(f,h){return h.i=f.i,h.w=f.w,h.X=f.X.slice(),h}function c(f,h){f==null&&(f=+new Date);var d=new o(f),y=h&&h.state,b=function(){return(d.next()>>>0)/4294967296};return b.double=function(){do var S=d.next()>>>11,N=(d.next()>>>0)/4294967296,E=(S+N)/(1<<21);while(E===0);return E},b.int32=d.next,b.quick=b,y&&(y.X&&l(y,d),b.state=function(){return l(d,{})}),b}n&&n.exports?n.exports=c:this.xor4096=c})(QN,a)}(kl)),kl.exports}var $l={exports:{}},PN=$l.exports,bg;function ZN(){return bg||(bg=1,function(a){(function(t,n,s){function o(f){var h=this,d="";h.next=function(){var b=h.b,S=h.c,N=h.d,E=h.a;return b=b<<25^b>>>7^S,S=S-N|0,N=N<<24^N>>>8^E,E=E-b|0,h.b=b=b<<20^b>>>12^S,h.c=S=S-N|0,h.d=N<<16^S>>>16^E,h.a=E-b|0},h.a=0,h.b=0,h.c=-1640531527,h.d=1367130551,f===Math.floor(f)?(h.a=f/4294967296|0,h.b=f|0):d+=f;for(var y=0;y<d.length+20;y++)h.b^=d.charCodeAt(y)|0,h.next()}function l(f,h){return h.a=f.a,h.b=f.b,h.c=f.c,h.d=f.d,h}function c(f,h){var d=new o(f),y=h&&h.state,b=function(){return(d.next()>>>0)/4294967296};return b.double=function(){do var S=d.next()>>>11,N=(d.next()>>>0)/4294967296,E=(S+N)/(1<<21);while(E===0);return E},b.int32=d.next,b.quick=b,y&&(typeof y=="object"&&l(y,d),b.state=function(){return l(d,{})}),b}n&&n.exports?n.exports=c:this.tychei=c})(PN,a)}($l)),$l.exports}var Rl={exports:{}};const JN={},t5=Object.freeze(Object.defineProperty({__proto__:null,default:JN},Symbol.toStringTag,{value:"Module"})),e5=v3(t5);var n5=Rl.exports,vg;function a5(){return vg||(vg=1,function(a){(function(t,n,s){var o=256,l=6,c=52,f="random",h=s.pow(o,l),d=s.pow(2,c),y=d*2,b=o-1,S;function N(H,G,Q){var st=[];G=G==!0?{entropy:!0}:G||{};var ut=z(k(G.entropy?[H,P(n)]:H??Z(),3),st),ot=new E(st),ft=function(){for(var St=ot.g(l),Dt=h,Ct=0;St<d;)St=(St+Ct)*o,Dt*=o,Ct=ot.g(1);for(;St>=y;)St/=2,Dt/=2,Ct>>>=1;return(St+Ct)/Dt};return ft.int32=function(){return ot.g(4)|0},ft.quick=function(){return ot.g(4)/4294967296},ft.double=ft,z(P(ot.S),n),(G.pass||Q||function(St,Dt,Ct,Qt){return Qt&&(Qt.S&&D(Qt,ot),St.state=function(){return D(ot,{})}),Ct?(s[f]=St,Dt):St})(ft,ut,"global"in G?G.global:this==s,G.state)}function E(H){var G,Q=H.length,st=this,ut=0,ot=st.i=st.j=0,ft=st.S=[];for(Q||(H=[Q++]);ut<o;)ft[ut]=ut++;for(ut=0;ut<o;ut++)ft[ut]=ft[ot=b&ot+H[ut%Q]+(G=ft[ut])],ft[ot]=G;(st.g=function(St){for(var Dt,Ct=0,Qt=st.i,Ft=st.j,W=st.S;St--;)Dt=W[Qt=b&Qt+1],Ct=Ct*o+W[b&(W[Qt]=W[Ft=b&Ft+Dt])+(W[Ft]=Dt)];return st.i=Qt,st.j=Ft,Ct})(o)}function D(H,G){return G.i=H.i,G.j=H.j,G.S=H.S.slice(),G}function k(H,G){var Q=[],st=typeof H,ut;if(G&&st=="object")for(ut in H)try{Q.push(k(H[ut],G-1))}catch{}return Q.length?Q:st=="string"?H:H+"\0"}function z(H,G){for(var Q=H+"",st,ut=0;ut<Q.length;)G[b&ut]=b&(st^=G[b&ut]*19)+Q.charCodeAt(ut++);return P(G)}function Z(){try{var H;return S&&(H=S.randomBytes)?H=H(o):(H=new Uint8Array(o),(t.crypto||t.msCrypto).getRandomValues(H)),P(H)}catch{var G=t.navigator,Q=G&&G.plugins;return[+new Date,t,Q,t.screen,P(n)]}}function P(H){return String.fromCharCode.apply(0,H)}if(z(s.random(),n),a.exports){a.exports=N;try{S=e5}catch{}}else s["seed"+f]=N})(typeof self<"u"?self:n5,[],Math)}(Rl)),Rl.exports}var ch,Sg;function r5(){if(Sg)return ch;Sg=1;var a=HN(),t=FN(),n=KN(),s=XN(),o=WN(),l=ZN(),c=a5();return c.alea=a,c.xor128=t,c.xorwow=n,c.xorshift7=s,c.xor4096=o,c.tychei=l,ch=c,ch}var cp=r5();/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class fp{constructor(t,n,s,o,l){this.mean=t,this.stdDev=n,this.dtype=s,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const c=l||Math.random();this.random=cp.alea(c.toString())}nextValue(){if(!isNaN(this.nextVal)){const o=this.nextVal;return this.nextVal=NaN,o}let t,n,s=!1;for(;!s;){let o,l,c;do o=2*this.random()-1,l=2*this.random()-1,c=o*o+l*l;while(c>=1||c===0);const f=Math.sqrt(-2*Math.log(c)/c);t=this.mean+this.stdDev*o*f,n=this.mean+this.stdDev*l*f,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class s5{constructor(t,n,s,o){this.alpha=t,this.beta=1/n,this.dtype=s;const l=o||Math.random();this.randu=cp.alea(l.toString()),this.randn=new fp(0,1,s,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,n,s,o,l,c;for(;;){do o=this.randn.nextValue(),c=1+this.c*o;while(c<=0);if(c*=c*c,t=o*o,n=1-.331*t*t,s=.5*t+this.d*(1-c+Math.log(c)),l=this.randu(),l<n||Math.log(l)<s)break}return c=1/this.beta*this.d*c,this.alpha<1&&(c*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(c)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class i5{constructor(t=0,n=1,s,o){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=n-t,this.dtype=s,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${n} <= 1 and dtype is not float`);this.random=cp.alea(o)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o5(a,t,n=1,s="float32",o){if(xn(a),n==null&&(n=1),s==null&&(s="float32"),s!=="float32"&&s!=="int32")throw new Error(`Unsupported data type ${s}`);const l=new s5(t,n,s,o),c=Ma(a,s);for(let f=0;f<c.values.length;f++)c.values[f]=l.nextValue();return c.toTensor()}const u5=U({randomGamma_:o5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l5(a,t=0,n=1,s,o){if(xn(a),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const l=new fp(t,n,s,!1,o),c=Ma(a,s);for(let f=0;f<c.values.length;f++)c.values[f]=l.nextValue();return c.toTensor()}const P2=U({randomNormal_:l5});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c5(a,t,n){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return P2(a,0,1,t,n)}const f5=U({randomStandardNormal_:c5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h5(a,t=0,n=1,s="float32",o){xn(a);const l=Ma(a,s),c=new i5(t,n,null,o);for(let f=0;f<l.values.length;f++)l.values[f]=c.nextValue();return l.toTensor()}const hp=U({randomUniform_:h5});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p5(a,t,n,s){return hp(a,t,n,"int32",s)}const d5=U({randomUniformInt_:p5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wo(a,t,n=1,s="float32"){if(n===0)throw new Error("Cannot have a step of zero");const o={start:a,stop:t,step:n,dtype:s};return I.runKernel(V4,{},o)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m5(a){const n={input:A(a,"input","real")};return I.runKernel(H4,n)}const Po=U({real_:m5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g5(a){const n={x:A(a,"x","reciprocal")};return I.runKernel(q4,n)}const y5=U({reciprocal_:g5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b5(a){const n={x:A(a,"x","relu")};return I.runKernel(F4,n)}const ac=U({relu_:b5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v5(a){const n={x:A(a,"x","relu6")};return I.runKernel(X4,n)}const Z2=U({relu6_:v5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S5(a,t){const s={x:A(a,"x","reverse")},o={dims:t};return I.runKernel(Q4,s,o)}const bs=U({reverse_:S5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w5(a){const t=A(a,"x","reverse");return $(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),bs(t,0)}const T5=U({reverse1d_:w5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N5(a,t){const n=A(a,"x","reverse");return $(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),bs(n,t)}const E5=U({reverse2d_:N5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _5(a,t){const n=A(a,"x","reverse");return $(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),bs(n,t)}const x5=U({reverse3d_:_5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A5(a,t){const n=A(a,"x","reverse");return $(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),bs(n,t)}const O5=U({reverse4d_:A5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D5(a){const n={x:A(a,"x","round")};return I.runKernel(W4,n)}const J2=U({round_:D5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k5(a){const n={x:A(a,"x","rsqrt","float32")};return I.runKernel(P4,n)}const $5=U({rsqrt_:k5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R5(a){const n={x:A(a,"x","selu")};return I.runKernel(nv,n)}const z5=U({selu_:R5});function C5(a,t,n,s,o,l=[1,1],c="NHWC"){const f=A(a,"x","separableConv2d"),h=A(t,"depthwiseFilter","separableConv2d"),d=A(n,"pointwiseFilter","separableConv2d");let y=f,b=!1;if(f.rank===3&&(b=!0,y=et(f,[1,f.shape[0],f.shape[1],f.shape[2]])),c==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");$(y.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${y.rank}.`),$(h.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${h.rank}.`),$(d.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${h.rank}.`),$(d.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${d.shape[0]}.`),$(d.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${d.shape[1]}.`);const S=h.shape[2],N=h.shape[3];$(d.shape[2]===S*N,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${S*N}, but got ${d.shape[2]}.`);const E=op(y,h,s,o,c,l),k=Zl(E,d,1,"valid",c);return b?et(k,[k.shape[1],k.shape[2],k.shape[3]]):k}const M5=U({separableConv2d_:C5});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function B5(a,t){const n=A(a,"x","setdiff1d"),s=A(t,"y","setdiff1d");$(n.dtype===s.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${s.dtype}).`),$(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),$(s.rank===1,()=>`y should be 1D tensor, but got y (${s.shape}).`);const o=await n.data(),l=await s.data(),c=new Set(l);let f=0;for(let y=0;y<o.length;y++)c.has(o[y])||f++;const h=new Ah([f],n.dtype),d=new Ah([f],"int32");for(let y=0,b=0;y<o.length;y++)c.has(o[y])||(h.values[b]=o[y],d.values[b]=y,b++);return[h.toTensor(),d.toTensor()]}const U5=B5;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I5(a){const n={x:A(a,"x","sign")};return I.runKernel(iv,n)}const L5=U({sign_:I5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j5(a){const n={x:A(a,"x","sin","float32")};return I.runKernel(rv,n)}const V5=U({sin_:j5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H5(a){const n={x:A(a,"x","sinh")};return I.runKernel(sv,n)}const q5=U({sinh_:H5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F5(a,t,n){const s=A(a,"x","slice1d");return $(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),Rt(s,[t],[n])}const G5=U({slice1d_:F5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K5(a,t,n){const s=A(a,"x","slice2d");return $(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),Rt(s,t,n)}const Y5=U({slice2d_:K5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X5(a,t,n){const s=A(a,"x","slice3d");return $(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),Rt(s,t,n)}const Q5=U({slice3d_:X5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W5(a,t,n){const s=A(a,"x","slice4d");return $(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),Rt(s,t,n)}const P5=U({slice4d_:W5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z5(a,t=-1){const n=A(a,"logits","softmax","float32");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);const s={logits:n},o={dim:t};return I.runKernel(pv,s,o)}const J5=U({softmax_:Z5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tE(a){$(a.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${a.dtype}.`);const t={input:a};return I.runKernel(qb,t)}const pp=U({fft_:tE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eE(a){$(a.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${a.dtype}.`);const t={input:a};return I.runKernel(Jb,t)}const ql=U({ifft_:eE});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nE(a){const t=a.shape[a.shape.length-1],n=a.size/t;let s;if(t<=2){const o=et(a,[n,t]);s=ql(o)}else{const o=[n,2*(t-1)],l=et(Po(a),[n,t]),c=et(nc(a),[n,t]),f=bs(Rt(l,[0,1],[n,t-2]),1),h=ct(bs(Rt(c,[0,1],[n,t-2]),1),qt(-1)),d=Ie([l,f],1),y=Ie([c,h],1),b=et(Ar(d,y),[o[0],o[1]]);s=ql(b)}if(s=Po(s),a.rank===3&&a.shape[0]!==0){const o=s,l=a.shape[0];s=et(s,[l,s.shape[0]/l,s.shape[1]]),o.dispose()}return s}const ty=U({irfft_:nE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aE(a,t,n=0){const o={x:A(a,"x","split")},l={numOrSizeSplits:t,axis:n};return I.runKernel(hv,o,l)}const Zo=U({split_:aE});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rE(a,t){$(a.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${a.dtype}`);let n=a.shape[a.shape.length-1];const s=a.size/n;let o;if(t!=null&&t<n){const E=a.shape.map(k=>0),D=a.shape.map(k=>k);D[a.shape.length-1]=t,o=Rt(a,E,D),n=t}else if(t!=null&&t>n){const E=a.shape.map(D=>D);E[a.shape.length-1]=t-n,o=Ie([a,wi(E)],a.shape.length-1),n=t}else o=a;const l=_n(o),c=et(Ar(o,l),[s,n]),f=pp(c),h=Math.floor(n/2)+1,d=Po(f),y=nc(f),b=Zo(d,[h,n-h],d.shape.length-1),S=Zo(y,[h,n-h],y.shape.length-1),N=o.shape.slice();return N[o.shape.length-1]=h,et(Ar(b[0],S[0]),N)}const dp=U({rfft_:rE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sE(a,t){let n=A(a,"a","squaredDifference"),s=A(t,"b","squaredDifference");[n,s]=ge(n,s),$e(n.shape,s.shape);const o={a:n,b:s},l={};return I.runKernel(vv,o,l)}const ey=U({squaredDifference_:sE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iE(a,t){const n=A(a,"x","squeeze","string_or_numeric");return et(n,C3(n.shape,t).newShape)}const ke=U({squeeze_:iE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oE(a,t=0){const n=Ul(a,"tensors","stack","string_or_numeric");$(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&$(t<=n[0].rank,()=>"Axis must be <= rank of the tensor");const s=n,o={axis:t};return I.runKernel(z4,s,o)}const La=U({stack_:oE});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uE(a,t=0){const s={x:A(a,"x","step")},o={alpha:t};return I.runKernel(Cv,s,o)}const ny=U({step_:uE});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lE(a,t,n,s,o=0,l=0,c=0,f=0,h=0){const y={x:A(a,"x","stridedSlice","string_or_numeric")},b={begin:t,end:n,strides:s,beginMask:o,endMask:l,ellipsisMask:c,newAxisMask:f,shrinkAxisMask:h};return I.runKernel(wv,y,b)}const cE=U({stridedSlice_:lE});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fE(a){const n={x:A(a,"x","tan","float32")};return I.runKernel(xv,n)}const hE=U({tan_:fE});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ke(a,t){Ti(a);const n=kr(a,t);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return $r(a,null,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xr(a,t,n){if(Ti(a),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=kr(a,n);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return $r(a,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ay(a,t,n){if(Ti(a),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const s=kr(a,n);if(s.length!==3&&s.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return $r(a,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pE(a,t,n){if(Ti(a),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const s=kr(a,n);if(s.length!==4&&s.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return $r(a,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dE(a,t,n){if(Ti(a),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const s=kr(a,n);if(s.length!==5&&s.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return $r(a,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mE(a,t,n){if(Ti(a),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const s=kr(a,n);if(s.length!==6&&s.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||s,$r(a,t,s,n)}function gE(a,t,n){const s=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,l=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${a}, sliceDim: ${s}, and batchDim: ${o}.`;if(n.rank<o)throw new Error(l+` update.rank < ${o}. `);if(a.length<s+(n.rank-o))throw new Error(l+` Output shape length < ${s+(n.rank-o)}`);if(n.rank!==o+a.length-s)throw new Error(l+` update.rank != ${o+a.length-s}`);for(let c=0;c<o;++c)if(n.shape[c]!==t.shape[c])throw new Error(l+` updates.shape[${c}] (${n.shape[c]}) != indices.shape[${c}] (${t.shape[c]}).`);for(let c=0;c<n.rank-o;++c)if(n.shape[c+o]!==a[c+s])throw new Error(l+` updates.shape[${c+o}] (${n.shape[c+o]}) != shape[${c+o}] (${a[c+o]})`)}function ry(a,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(a.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${a.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(a.size===0)throw new Error(`Updates specified for empty output. updates shape: ${a.shape}`)}gE(n,t,a)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yE(a,t,n){const s=A(a,"tensor","tensorScatterupdate"),o=A(t,"indices","tensorScatterupdate","int32"),l=A(n,"updates","tensorScatterupdate");if(ry(l,o,s.shape),s.dtype!==l.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${s.dtype} and ${l.dtype}.`);const c={tensor:s,indices:o,updates:l},f={};return I.runKernel(J4,c,f)}const bE=U({tensorScatterUpdate_:yE});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vE(a,t=1,n=!0){const s=A(a,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const o=s.shape[s.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>o)throw new Error(`'k' passed to topk() must be <= the last dimension (${o}) but got ${t}`);const l={x:s},c={k:t,sorted:n},[f,h]=I.runKernel(Ov,l,c);return{values:f,indices:h}}const SE=U({topk_:vE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wE(a,t=0,n=1,s,o){if(xn(a),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const l=new fp(t,n,s,!0,o),c=Ma(a,s);for(let f=0;f<c.values.length;f++)c.values[f]=l.nextValue();return c.toTensor()}const TE=U({truncatedNormal_:wE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NE(a,t=0){const n=A(a,"x","unique","string_or_numeric");$(n.rank>0,()=>"The input tensor must be at least 1D");const s={x:n},o={axis:t},[l,c]=I.runKernel(kv,s,o);return{values:l,indices:c}}const EE=U({unique_:NE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _E(a,t,n){const s=A(a,"x","unsortedSegmentSum"),o=A(t,"segmentIds","unsortedSegmentSum","int32");$(Go(n),()=>"numSegments must be of dtype int");const l={x:s,segmentIds:o},c={numSegments:n};return I.runKernel(Rv,l,c)}const xE=U({unsortedSegmentSum_:_E});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AE(a,t=0){const n=A(a,"x","unstack","string_or_numeric");$(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);const s={value:n},o={axis:t};return I.runKernel($v,s,o)}const ws=U({unstack_:AE});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function OE(a,t){return lp(a,t,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DE(a,t=!0,n,s){return I.makeVariable(a,t,n,s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kE(a,t){const n=[];for(let l=0;l<t.length;l++)t[l]&&n.push(l);const s=Ma(a,"int32"),o=Ma([n.length,a.length],"int32");for(let l=0;l<n.length;l++){const c=s.indexToLoc(n[l]),f=l*a.length;o.values.set(c,f)}return o.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function $E(a){const t=A(a,"condition","whereAsync","bool"),n=await t.data(),s=kE(t.shape,n);return a!==t&&t.dispose(),s}const sy=$E;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function RE(a,t,n){const s=A(a,"tensor","boolMask"),o=A(t,"mask","boolMask","bool"),l=n??0,c=o.rank,f=s.shape;$(c>0,()=>"mask cannot be scalar"),Un(f.slice(l,l+c),o.shape,"mask's shape must match the first K dimensions of tensor's shape,");let h=1;for(let D=l;D<l+c;D++)h*=f[D];const d=f.slice(0,l).concat([h],f.slice(l+c)),y=et(s,d),b=et(o,[-1]),S=await sy(b),N=ke(S,[1]),E=I2(y,N,l);return a!==s&&s.dispose(),t!==o&&o.dispose(),N.dispose(),y.dispose(),b.dispose(),S.dispose(),E}const zE=RE;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CE(a,t,n){const s=A(a,"x","transpose");if(t==null&&(t=s.shape.map((c,f)=>f).reverse()),$(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(c=>{$(c>=0&&c<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const o={x:s},l={perm:t};return s.dtype==="complex64"?Mt(()=>{let c=Po(s),f=nc(s);return c=I.runKernel(ih,{x:c},l),f=I.runKernel(ih,{x:f},l),n&&(f=ia(f)),Ar(c,f)}):I.runKernel(ih,o,l)}const jh=U({transpose_:CE});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ME(a,t,n,s,o=!0){const l=A(a,"v","movingAverage"),c=A(t,"x","movingAverage"),f=A(n,"decay","movingAverage");Pv(l,c),$(Ca(l.shape,c.shape),()=>"Shape mismatch in v and x");const h=qt(1),d=zt(h,f);let y=ct(zt(c,l),d);if(o){$(s!=null,()=>"When using zeroDebias: true, step is required.");const b=A(s,"step","movingAverage");y=It(y,zt(h,Xo(f,b)))}return wt(l,y)}const BE=U({movingAverage_:ME});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UE(a,t,n){xn(n);const s=A(a,"indices","scatterND","int32"),o=A(t,"updates","scatterND");ry(o,s,n);const l={indices:s,updates:o},c={shape:n};return I.runKernel(Z4,l,c)}const IE=U({scatterND_:UE});function LE(a,t,n,s){if(a.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${a.dtype}.`);if(a.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${a.shape}.`);const o=a.rank>0?a.shape[0]:1,l=a.rank>1?a.shape[1]:1;if(n.length!==l)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${l}.`);const c=t.size;if(!(t.rank===0||t.rank===1&&c===o))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${o}]`);if(t.dtype!==s.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jE(a,t,n,s=0){xn(n);const o=A(a,"sparseIndices","sparseToDense","int32"),l=A(t,"sparseValues","sparseToDense","string_or_numeric"),c=A(s,"defaultValue","sparseToDense",l.dtype);LE(o,l,n,c);const f={sparseIndices:o,sparseValues:l,defaultValue:c},h={outputShape:n};return I.runKernel(bv,f,h)}const VE=U({sparseToDense_:jE});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HE(a,t){const n=A(t,"indices","gatherND","int32"),o={params:A(a,"x","gatherND","string_or_numeric"),indices:n};return I.runKernel(Wb,o)}const qE=U({gatherND_:HE});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FE(a,t){if(t==null)return a.shape.slice();if(Ca(a.shape,t))return t;if(a.shape.length===t.length){const n=[];for(let s=0;s<a.shape.length;s++)t[s]==null&&a.shape[s]!=null?n.push(a.shape[s]):n.push(t[s]);return n}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GE(a,t,n,s){const o=A(a,"x","dropout");if($(o.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${o.dtype} tensor instead.`),$(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return a instanceof me?o.clone():o;const l=FE(o,n),c=1-t,f=It(U2(wt(hp(l,0,1,"float32",s),c)),c);return ct(o,f)}const KE=U({dropout_:GE});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iy(a){return Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2))))}function mp(a,t,n){const s=1-a%2,o=new Float32Array(a);for(let l=0;l<a;++l){const c=2*Math.PI*l/(a+s-1);o[l]=t-n*Math.cos(c)}return Ke(o,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function YE(a,t,n=1){const s=A(a,"predictions","inTopK"),o=A(t,"targets","inTopK");$(s.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${s.rank}`),$(s.rank-1===o.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${s.rank} and targets rank ${o.rank}`),Un(s.shape.slice(0,s.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const l=s.shape[s.shape.length-1];$(n>0&&n<=l,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${l}), but got ${n}`);const c=await s.data(),f=await o.data(),[h,d]=[c.length/l,l],y=M3("bool",h);for(let b=0;b<h;b++){const S=b*d,N=c.subarray(S,S+d),E=[];for(let D=0;D<N.length;D++)E.push({value:N[D],index:D});E.sort((D,k)=>k.value-D.value),y[b]=0;for(let D=0;D<n;D++)if(E[D].index===f[b]){y[b]=1;break}}return a!==s&&s.dispose(),t!==o&&o.dispose(),sa(y,o.shape,"bool")}const XE=YE;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QE(a,t,n,s,o,l="NHWC",c){let f=a;a.rank===3&&(f=et(a,[1,a.shape[0],a.shape[1],a.shape[2]]));let h=t;h.rank===3&&(h=et(t,[1,t.shape[0],t.shape[1],t.shape[2]])),$(f.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${f.shape}.`),$(h.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${h.shape}.`),$(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const d=l==="NHWC"?f.shape[3]:f.shape[1],y=l==="NHWC"?h.shape[3]:h.shape[1];$(d===n[2],()=>`Error in conv2dDerFilter: depth of input ${d}) must match input depth in filter (${n[2]}.`),$(y===n[3],()=>`Error in conv2dDerFilter: depth of dy (${y}) must match output depth for filter (${n[3]}).`),Pn("conv2dDerFilter",o,c);const b={x:f,dy:h},S={strides:s,pad:o,dataFormat:l,dimRoundingMode:c,filterShape:n};return I.runKernel(vb,b,S)}const WE=U({conv2DBackpropFilter_:QE});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gp(a,t,n){if(n==null||n==="linear")return a;if(n==="relu")return ct(a,ny(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function yp(a,t){let n=t;const s=zT(a.shape,t.shape);return s.length>0&&(n=le(n,s)),et(n,a.shape)}function bp(a,t,n,s){if(t==="linear")return a;if(t==="relu")return ac(a);if(t==="elu")return C2(a);if(t==="relu6")return Z2(a);if(t==="prelu")return W2(a,n);if(t==="leakyrelu")return j2(a,s);if(t==="sigmoid")return ps(a);throw new Error(`Unknown fused activation ${t}.`)}const vp=(a,t)=>!(a>0)||t==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PE({x:a,filter:t,strides:n,pad:s,dataFormat:o="NHWC",dilations:l=[1,1],dimRoundingMode:c,bias:f,activation:h="linear",preluActivationWeights:d,leakyreluAlpha:y}){if(h=h||"linear",vp(I.state.gradientDepth,h)===!1){$(o==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${o} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let Q=Zl(a,t,n,s,o,l,c);return f!=null&&(Q=wt(Q,f)),bp(Q,h,d,y)}const b=A(a,"x","conv2d","float32"),S=A(t,"filter","conv2d","float32");let N=b,E=!1;b.rank===3&&(E=!0,N=et(b,[1,b.shape[0],b.shape[1],b.shape[2]])),$(N.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${N.rank}.`),$(S.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${S.rank}.`),Pn("fused conv2d",s,c);const D=o==="NHWC"?N.shape[3]:N.shape[1];$(S.shape[2]===D,()=>`Error in conv2d: depth of input (${D}) must match input depth for filter ${S.shape[2]}.`),$(Rr(n,l),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${l}'`);const k=ip(N.shape,S.shape,n,l,s,c);let z;f!=null&&(z=A(f,"bias","fused conv2d"),[z]=ge(z,b),o==="NHWC"?$e(k.outShape,z.shape):($(z.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${z.shape.length}.`),$(z.shape.length===0||z.shape[0]===k.outChannels||z.shape[0]===1,()=>`Error in fused conv2d: bias shape (${z.shape}) is not compatible with the number of output channels (${k.outChannels})`)));let Z;if(d!=null){const Q=d.shape;if($(Q.length<=1||Q.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${Q.length}.`),Q.length===1)$(Q[0]===1||Q[0]===k.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${Q}) is not compatible with the number of output channels (${k.outChannels}).`);else if(Q.length===3)try{$e(Q,k.outShape)}catch{const ut=`Error in fused conv2d: PReLU activation weights (${Q}) is not compatible with the output shape of the conv2d (${k.outShape}).`;throw Error(ut)}Z=A(d,"prelu weights","fused conv2d")}const P=(Q,st)=>{$(o==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${o} but only NHWC is currently supported.`);const[ut,ot,ft,St]=st,Dt=gp(Q,ft,h);$(Ll(l),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${l}'`);const Ct=R2(ot.shape,Dt,ut,n,s),Qt=WE(ot,Dt,ut.shape,n,s),Ft=[Ct,Qt];if(St!=null){const W=yp(St,Dt);Ft.push(W)}return Ft},H={x:N,filter:S,bias:z,preluActivationWeights:Z},G={strides:n,pad:s,dataFormat:o,dilations:l,dimRoundingMode:c,activation:h,leakyreluAlpha:y};return f==null?Ia((st,ut,ot)=>{let ft=I.runKernel(eg,H,G);return ot([ut,st,ft]),E&&(ft=et(ft,[ft.shape[1],ft.shape[2],ft.shape[3]])),{value:ft,gradFunc:P}})(N,S):Ia((st,ut,ot,ft)=>{let St=I.runKernel(eg,H,G);return ft([ut,st,St,ot]),E&&(St=et(St,[St.shape[1],St.shape[2],St.shape[3]])),{value:St,gradFunc:P}})(N,S,z)}const ZE=U({fusedConv2d_:PE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JE(a,t,n,s,o,l=[1,1],c){let f=a;a.rank===3&&(f=et(a,[1,a.shape[0],a.shape[1],a.shape[2]]));let h=t;h.rank===3&&(h=et(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const d={x:f,dy:h},y={strides:s,pad:o,dimRoundingMode:c,dilations:l,filterShape:n};return I.runKernel($b,d,y)}const t8=U({depthwiseConv2dNativeBackpropFilter_:JE});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e8(a,t,n,s,o,l=[1,1],c){let f=t,h=!1;t.rank===3&&(h=!0,f=et(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const d={dy:f,filter:n},y={strides:s,pad:o,dimRoundingMode:c,dilations:l,inputShape:a},b=I.runKernel(Rb,d,y);return h?et(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const n8=U({depthwiseConv2dNativeBackpropInput_:e8});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a8({x:a,filter:t,strides:n,pad:s,dataFormat:o="NHWC",dilations:l=[1,1],dimRoundingMode:c,bias:f,activation:h="linear",preluActivationWeights:d,leakyreluAlpha:y}){if(vp(I.state.gradientDepth,h)===!1){let G=op(a,t,n,s,o,l,c);return f!=null&&(G=wt(G,f)),bp(G,h,d,y)}const b=A(a,"x","depthwiseConv2d","float32"),S=A(t,"filter","depthwiseConv2d","float32");let N=b,E=!1;b.rank===3&&(E=!0,N=et(b,[1,b.shape[0],b.shape[1],b.shape[2]])),$(N.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${N.rank}.`),$(S.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${S.rank}.`),$(N.shape[3]===S.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${N.shape[3]}) must match the inChannels dimension in filter ${S.shape[2]}.`),l==null&&(l=[1,1]),$(Rr(n,l),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${l}'`),Pn("fused depthwiseConv2d",s,c);const D=ip(N.shape,S.shape,n,l,s,c,!0);let k;f!=null&&(k=A(f,"bias","fused conv2d"),[k]=ge(k,b),$e(D.outShape,k.shape));let z;d!=null&&(z=A(d,"prelu weights","fused depthwiseConv2d"));const Z=(G,Q)=>{$(Ll(l),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${l}'`);const[st,ut,ot,ft]=Q,St=gp(G,ot,h),Dt=n8(ut.shape,St,st,n,s,l,c),Ct=t8(ut,St,st.shape,n,s,l,c);if(ft!=null){const Qt=yp(k,St);return[Dt,Ct,Qt]}return[Dt,Ct]},P={x:N,filter:S,bias:k,preluActivationWeights:z},H={strides:n,pad:s,dataFormat:o,dilations:l,dimRoundingMode:c,activation:h,leakyreluAlpha:y};return f==null?Ia((Q,st,ut)=>{let ot=I.runKernel(ng,P,H);return ut([st,Q,ot]),E&&(ot=et(ot,[ot.shape[1],ot.shape[2],ot.shape[3]])),{value:ot,gradFunc:Z}})(N,S):Ia((Q,st,ut,ot)=>{let ft=I.runKernel(ng,P,H);return ot([st,Q,ft,ut]),E&&(ft=et(ft,[ft.shape[1],ft.shape[2],ft.shape[3]])),{value:ft,gradFunc:Z}})(N,S,k)}const r8=U({fusedDepthwiseConv2d_:a8});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s8({a,b:t,transposeA:n=!1,transposeB:s=!1,bias:o,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:f=.2}){if(vp(I.state.gradientDepth,l)===!1){let St=te(a,t,n,s);return o!=null&&(St=wt(St,o)),bp(St,l,c,f)}let h=A(a,"a","fused matMul"),d=A(t,"b","fused matMul");[h,d]=ge(h,d);const y=n?h.shape[h.rank-2]:h.shape[h.rank-1],b=s?d.shape[d.rank-1]:d.shape[d.rank-2],S=n?h.shape[h.rank-1]:h.shape[h.rank-2],N=s?d.shape[d.rank-2]:d.shape[d.rank-1],E=h.shape.slice(0,-2),D=d.shape.slice(0,-2),k=Ne(E),z=Ne(D);$(y===b,()=>`Error in fused matMul: inner shapes (${y}) and (${b}) of Tensors with shapes ${h.shape} and ${d.shape} and transposeA=${n} and transposeB=${s} must match.`);const P=$e(h.shape.slice(0,-2),d.shape.slice(0,-2)).concat([S,N]),H=n?et(h,[k,y,S]):et(h,[k,S,y]),G=s?et(d,[z,N,b]):et(d,[z,b,N]);let Q;o!=null&&(Q=A(o,"bias","fused matMul"),[Q]=ge(Q,h),$e(P,Q.shape));let st;c!=null&&(st=A(c,"prelu weights","fused matMul"));const ut=(St,Dt)=>{const[Ct,Qt,Ft,W]=Dt,lt=gp(et(St,Ft.shape),Ft,l);let yt,jt;if(!n&&!s?(yt=te(lt,Qt,!1,!0),jt=te(Ct,lt,!0,!1)):!n&&s?(yt=te(lt,Qt,!1,!1),jt=te(lt,Ct,!0,!1)):n&&!s?(yt=te(Qt,lt,!1,!0),jt=te(Ct,lt,!1,!1)):(yt=te(Qt,lt,!0,!0),jt=te(lt,Ct,!0,!0)),o!=null){const L=yp(W,lt);return[yt,jt,L]}else return[yt,jt]},ot={a:H,b:G,bias:Q,preluActivationWeights:st},ft={transposeA:n,transposeB:s,activation:l,leakyreluAlpha:f};return o==null?Ia((Dt,Ct,Qt)=>{const Ft=I.runKernel(tg,ot,ft);return Qt([Dt,Ct,Ft]),{value:et(Ft,P),gradFunc:ut}})(H,G):Ia((Dt,Ct,Qt,Ft)=>{const W=I.runKernel(tg,ot,ft);return Ft([Dt,Ct,W,Qt]),{value:et(W,P),gradFunc:ut}})(H,G,Q)}const i8=U({fusedMatMul_:s8});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const o8=Object.freeze(Object.defineProperty({__proto__:null,conv2d:ZE,depthwiseConv2d:r8,matMul:i8},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u8(a){return mp(a,.54,.46)}const l8=U({hammingWindow_:u8});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c8(a){return mp(a,.5,.5)}const oy=U({hannWindow_:c8});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f8(a,t,n,s=!1,o=0){let l=0;const c=[];for(;l+t<=a.size;)c.push(Rt(a,l,t)),l+=n;if(s)for(;l<a.size;){const f=l+t-a.size,h=Ie([Rt(a,l,t-f),tu([f],o)]);c.push(h),l+=n}return c.length===0?xr([],[0,t]):et(Ie(c),[c.length,t])}const uy=U({frame_:f8});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h8(a,t,n,s,o=oy){s==null&&(s=iy(t));const l=uy(a,t,n),c=ct(l,o(t));return dp(c,s)}const p8=U({stft_:h8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d8(a,t,n,s,o="bilinear",l=0){const c=A(a,"image","cropAndResize"),f=A(t,"boxes","cropAndResize","float32"),h=A(n,"boxInd","cropAndResize","int32"),d=f.shape[0];$(c.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${c.rank}.`),$(f.rank===2&&f.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${d},4] but had shape ${f.shape}.`),$(h.rank===1&&h.shape[0]===d,()=>`Error in cropAndResize: boxInd must be have size [${d}] but had shape ${f.shape}.`),$(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),$(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),$(o==="bilinear"||o==="nearest",()=>`method must be bilinear or nearest, but was ${o}`);const y={image:c,boxes:f,boxInd:h},b={method:o,extrapolationValue:l,cropSize:s};return I.runKernel(Ab,y,b)}const m8=U({cropAndResize_:d8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g8(a){const t=A(a,"image","flipLeftRight","float32");$(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const n={image:t};return I.runKernel(Gb,n,{})}const y8=U({flipLeftRight_:g8});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b8(a){const t=A(a,"image","grayscaleToRGB"),n=t.rank-1,s=t.shape[n];$(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),$(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const o=new Array(t.rank);return o.fill(1,0,n),o[n]=3,Fo(t,o)}const v8=U({grayscaleToRGB_:b8});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S8(a){const t=A(a,"image","RGBToGrayscale"),n=t.rank-1,s=t.shape[n];$(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),$(s===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${s}.`);const o=t.dtype,l=ce(t,"float32"),c=Ke([.2989,.587,.114]);let f;switch(t.rank){case 2:f=gi("ij,j->i",l,c);break;case 3:f=gi("ijk,k->ij",l,c);break;case 4:f=gi("ijkl,l->ijk",l,c);break;case 5:f=gi("ijklm,m->ijkl",l,c);break;case 6:f=gi("ijklmn,n->ijklm",l,c);break;default:throw new Error("Not a valid tensor rank.")}return f=Mn(f,-1),ce(f,o)}const w8=U({rgbToGrayscale_:S8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T8(a,t,n=0,s=.5){const o=A(a,"image","rotateWithOffset","float32");$(o.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${o.rank}.`);const l={image:o},c={radians:t,fillValue:n,center:s};return I.runKernel(Mv,l,c)}const N8=U({rotateWithOffset_:T8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ni(a,t,n,s,o,l){s==null&&(s=.5),o==null&&(o=Number.NEGATIVE_INFINITY),l==null&&(l=0);const c=a.shape[0];return n=Math.min(n,c),$(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),$(a.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${a.rank}'`),$(a.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${a.shape[1]}`),$(t.rank===1,()=>"scores must be a 1D tensor"),$(t.shape[0]===c,()=>`scores has incompatible shape with boxes. Expected ${c}, but was ${t.shape[0]}`),$(0<=l&&l<=1,()=>`softNmsSigma must be in [0, 1], but was '${l}'`),{maxOutputSize:n,iouThreshold:s,scoreThreshold:o,softNmsSigma:l}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E8(a,t,n,s=.5,o=Number.NEGATIVE_INFINITY){const l=A(a,"boxes","nonMaxSuppression","float32"),c=A(t,"scores","nonMaxSuppression","float32"),f=Ni(l,c,n,s,o);n=f.maxOutputSize,s=f.iouThreshold,o=f.scoreThreshold;const h={maxOutputSize:n,iouThreshold:s,scoreThreshold:o};return I.runKernel(O4,{boxes:l,scores:c},h)}const _8=U({nonMaxSuppression_:E8});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x8(a,t,n){const s=A8(a,t,n),o=s<0?-(s+1):s;a.splice(o,0,t)}function A8(a,t,n){return D8(a,t,n||O8)}function O8(a,t){return a>t?1:a<t?-1:0}function D8(a,t,n){let s=0,o=a.length,l=0,c=!1;for(;s<o;){l=s+(o-s>>>1);const f=n(t,a[l]);f>0?s=l+1:(o=l,c=!f)}return c?s:-s-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k8(a,t,n,s,o){return Sp(a,t,n,s,o,0)}function $8(a,t,n,s,o,l){return Sp(a,t,n,s,o,0,!1,l,!0)}function R8(a,t,n,s,o,l){return Sp(a,t,n,s,o,l,!0)}function Sp(a,t,n,s,o,l,c=!1,f=!1,h=!1){const d=[];for(let k=0;k<t.length;k++)t[k]>o&&d.push({score:t[k],boxIndex:k,suppressBeginIndex:0});d.sort(wg);const y=l>0?-.5/l:0,b=[],S=[];for(;b.length<n&&d.length>0;){const k=d.pop(),{score:z,boxIndex:Z,suppressBeginIndex:P}=k;if(z<o)break;let H=!1;for(let G=b.length-1;G>=P;--G){const Q=z8(a,Z,b[G]);if(Q>=s){H=!0;break}if(k.score=k.score*C8(s,y,Q),k.score<=o)break}k.suppressBeginIndex=b.length,H||(k.score===z?(b.push(Z),S.push(k.score)):k.score>o&&x8(d,k,wg))}const N=b.length,E=n-N;f&&E>0&&(b.push(...new Array(E).fill(0)),S.push(...new Array(E).fill(0)));const D={selectedIndices:b};return c&&(D.selectedScores=S),h&&(D.validOutputs=N),D}function z8(a,t,n){const s=a.subarray(t*4,t*4+4),o=a.subarray(n*4,n*4+4),l=Math.min(s[0],s[2]),c=Math.min(s[1],s[3]),f=Math.max(s[0],s[2]),h=Math.max(s[1],s[3]),d=Math.min(o[0],o[2]),y=Math.min(o[1],o[3]),b=Math.max(o[0],o[2]),S=Math.max(o[1],o[3]),N=(f-l)*(h-c),E=(b-d)*(S-y);if(N<=0||E<=0)return 0;const D=Math.max(l,d),k=Math.max(c,y),z=Math.min(f,b),Z=Math.min(h,S),P=Math.max(z-D,0)*Math.max(Z-k,0);return P/(N+E-P)}function C8(a,t,n){const s=Math.exp(t*n*n);return n<=a?s:0}function wg(a,t){return a.score-t.score||a.score===t.score&&t.boxIndex-a.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function M8(a,t,n,s=.5,o=Number.NEGATIVE_INFINITY){const l=A(a,"boxes","nonMaxSuppressionAsync"),c=A(t,"scores","nonMaxSuppressionAsync"),f=Ni(l,c,n,s,o);n=f.maxOutputSize,s=f.iouThreshold,o=f.scoreThreshold;const h=await Promise.all([l.data(),c.data()]),d=h[0],y=h[1],{selectedIndices:b}=k8(d,y,n,s,o);return l!==a&&l.dispose(),c!==t&&c.dispose(),Ke(b,"int32")}const B8=M8;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U8(a,t,n,s=.5,o=Number.NEGATIVE_INFINITY,l=0){const c=A(a,"boxes","nonMaxSuppression"),f=A(t,"scores","nonMaxSuppression"),h=Ni(c,f,n,s,o,l);n=h.maxOutputSize,s=h.iouThreshold,o=h.scoreThreshold,l=h.softNmsSigma;const d={boxes:c,scores:f},y={maxOutputSize:n,iouThreshold:s,scoreThreshold:o,softNmsSigma:l},b=I.runKernel(k4,d,y);return{selectedIndices:b[0],selectedScores:b[1]}}const I8=U({nonMaxSuppressionWithScore_:U8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function L8(a,t,n,s=.5,o=Number.NEGATIVE_INFINITY,l=0){const c=A(a,"boxes","nonMaxSuppressionAsync"),f=A(t,"scores","nonMaxSuppressionAsync"),h=Ni(c,f,n,s,o,l);n=h.maxOutputSize,s=h.iouThreshold,o=h.scoreThreshold,l=h.softNmsSigma;const d=await Promise.all([c.data(),f.data()]),y=d[0],b=d[1],{selectedIndices:S,selectedScores:N}=R8(y,b,n,s,o,l);return c!==a&&c.dispose(),f!==t&&f.dispose(),{selectedIndices:Ke(S,"int32"),selectedScores:Ke(N)}}const j8=L8;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V8(a,t,n,s=.5,o=Number.NEGATIVE_INFINITY,l=!1){const c=A(a,"boxes","nonMaxSuppression"),f=A(t,"scores","nonMaxSuppression"),h=Ni(c,f,n,s,o,null),d=h.maxOutputSize,y=h.iouThreshold,b=h.scoreThreshold,S={boxes:c,scores:f},N={maxOutputSize:d,iouThreshold:y,scoreThreshold:b,padToMaxOutputSize:l},E=I.runKernel(D4,S,N);return{selectedIndices:E[0],validOutputs:E[1]}}const H8=U({nonMaxSuppressionPadded_:V8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function q8(a,t,n,s=.5,o=Number.NEGATIVE_INFINITY,l=!1){const c=A(a,"boxes","nonMaxSuppressionAsync"),f=A(t,"scores","nonMaxSuppressionAsync"),h=Ni(c,f,n,s,o,null),d=h.maxOutputSize,y=h.iouThreshold,b=h.scoreThreshold,[S,N]=await Promise.all([c.data(),f.data()]),{selectedIndices:E,validOutputs:D}=$8(S,N,d,y,b,l);return c!==a&&c.dispose(),f!==t&&f.dispose(),{selectedIndices:Ke(E,"int32"),validOutputs:qt(D,"int32")}}const F8=q8;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G8(a,t,n=!1,s=!1){const o=A(a,"images","resizeBilinear");$(o.rank===3||o.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${o.rank}.`),$(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),$(s===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let l=o,c=!1;o.rank===3&&(c=!0,l=et(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const f={images:l},h={alignCorners:n,halfPixelCenters:s,size:t},d=I.runKernel(Y4,f,h);return c?et(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const K8=U({resizeBilinear_:G8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y8(a,t,n=!1,s=!1){const o=A(a,"images","resizeNearestNeighbor");$(o.rank===3||o.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${o.rank}.`),$(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),$(o.dtype==="float32"||o.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),$(s===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let l=o,c=!1;o.rank===3&&(c=!0,l=et(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const f={images:l},h={alignCorners:n,halfPixelCenters:s,size:t},d=I.runKernel(K4,f,h);return c?et(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const X8=U({resizeNearestNeighbor_:Y8});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q8(a,t="binary",n=!1,s=.5){const o=A(a,"image","threshold"),l=.2989,c=.587,f=.114,h=o.shape[0]*o.shape[1];let d=ct(Ke([s]),255),y,b,S,N;if($(o.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${o.rank}.`),$(o.shape[2]===3||o.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${o.shape[2]}.`),$(o.dtype==="int32"||o.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${o.dtype}.`),$(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),o.shape[2]===3){[y,b,S]=Zo(o,[1,1,1],-1);const k=ct(y,l),z=ct(b,c),Z=ct(S,f);N=wt(wt(k,z),Z)}else N=a;if(t==="otsu"){const k=k2(ce(J2(N),"int32"),sa([]),256);d=W8(k,h)}const E=n?up(N,d):ec(N,d);return ce(ct(E,255),"int32")}function W8(a,t){let n=Ke([-1]),s=Ke([0]),o=Ke([0]),l,c,f,h,d,y;for(let b=0;b<a.size-1;b++){l=Rt(a,0,b+1),c=Rt(a,b+1),d=It(le(l),t),y=It(le(c),t);const S=le(ct(l,Wo(0,l.size)));f=It(S,le(l));const N=tu(c.shape,l.size),E=wt(Wo(0,c.size),N),D=ct(c,E);h=It(le(D),le(c));const k=zt(f,h),z=zt(f,h),Z=ct(d,y);o=ct(ct(Z,k),z);const P=ec(o,s);s=_r(P,o,s),n=_r(P,Ke([b]),n)}return n}const P8=U({threshold_:Q8});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z8(a,t,n="nearest",s="constant",o=0,l){const c=A(a,"image","transform","float32"),f=A(t,"transforms","transform","float32");$(c.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${c.rank}.`),$(f.rank===2&&(f.shape[0]===c.shape[0]||f.shape[0]===1)&&f.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),$(l==null||l.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${l}.`);const h={image:c,transforms:f},d={interpolation:n,fillMode:s,fillValue:o,outputShape:l};return I.runKernel(Dv,h,d)}const J8=U({transform_:Z8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t7(a,t,n){const s=A(a,"a","bandPart");$(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const o=s.shape,[l,c]=s.shape.slice(-2);let f,h;typeof t=="number"?($(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),$(t<=l,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${l}).`),f=A(t<0?l:t,"numLower","bandPart")):($(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),f=_r(Lh(t,0),l,Hl(t,l))),typeof n=="number"?($(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),$(n<=c,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${c}).`),h=A(n<0?c:n,"numUpper","bandPart")):($(n.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),h=_r(Lh(n,0),c,Hl(n,c)));const d=et(Wo(0,l,1,"int32"),[-1,1]),y=Wo(0,c,1,"int32"),b=zt(d,y),S=jl(up(b,f),L2(b,ia(h))),N=wi([l,c],s.dtype);return et(La(ws(et(s,[-1,l,c])).map(E=>_r(S,E,N))),o)}const e7=U({bandPart_:t7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n7(a){let t;if(Array.isArray(a)){t=!1,$(a!=null&&a.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const o=a[0].shape[0];for(let l=1;l<a.length;++l)$(a[l].shape[0]===o,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${a[l].shape[0]} vs. ${o})`)}else t=!0,a=Zo(a,a.shape[0],0).map(o=>ke(o,[0]));$(a.length<=a[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${a.length}) exceeds number of dimensions (${a[0].shape[0]}).`);const n=[],s=a;for(let o=0;o<a.length;++o)n.push(I.tidy(()=>{let l=s[o];if(o>0)for(let c=0;c<o;++c){const f=ct(le(ct(n[c],l)),n[c]);l=zt(l,f)}return It(l,tc(l,"euclidean"))}));return t?La(n,0):n}const a7=U({gramSchmidt_:n7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r7(a,t=!1){if($(a.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${a.rank}`),a.rank===2)return Tg(a,t);{const n=a.shape.slice(0,a.shape.length-2).reduce((h,d)=>h*d),s=ws(et(a,[n,a.shape[a.shape.length-2],a.shape[a.shape.length-1]]),0),o=[],l=[];s.forEach(h=>{const[d,y]=Tg(h,t);o.push(d),l.push(y)});const c=et(La(o,0),a.shape),f=et(La(l,0),a.shape);return[c,f]}}function Tg(a,t=!1){return I.tidy(()=>{$(a.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${a.shape.length}D Tensor.`);const n=a.shape[0],s=a.shape[1];let o=B2(n),l=Er(a);const c=xr([[1]],[1,1]);let f=Er(c);const h=n>=s?s:n;for(let d=0;d<h;++d){const y=l,b=f,S=o;[f,l,o]=I.tidy(()=>{const N=Rt(l,[d,d],[n-d,1]),E=tc(N),D=Rt(l,[d,d],[1,1]),k=_r(ec(D,0),xr([[-1]]),xr([[1]])),z=zt(D,ct(k,E)),Z=It(N,z);Z.shape[0]===1?f=Er(c):f=Ie([c,Rt(Z,[1,0],[Z.shape[0]-1,Z.shape[1]])],0);const P=ia(It(te(k,z),E)),H=Rt(l,[d,0],[n-d,s]),G=ct(P,f),Q=jh(f);if(d===0)l=zt(H,te(G,te(Q,H)));else{const ot=zt(H,te(G,te(Q,H)));l=Ie([Rt(l,[0,0],[d,s]),ot],0)}const st=jh(G),ut=Rt(o,[0,d],[n,o.shape[1]-d]);if(d===0)o=zt(ut,te(te(ut,f),st));else{const ot=zt(ut,te(te(ut,f),st));o=Ie([Rt(o,[0,0],[n,d]),ot],1)}return[f,l,o]}),pe([y,b,S])}return!t&&n>s&&(o=Rt(o,[0,0],[n,s]),l=Rt(l,[0,0],[s,s])),[o,l]})}const s7=U({qr_:r7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var sn;(function(a){a[a.NONE=0]="NONE",a[a.MEAN=1]="MEAN",a[a.SUM=2]="SUM",a[a.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(sn||(sn={}));function i7(a,t,n=sn.SUM_BY_NONZERO_WEIGHTS){const s=A(a,"losses","computeWeightedLoss");let o=null;t!=null&&(o=A(t,"weights","computeWeightedLoss"));const l=o==null?s:ct(s,o);if(n===sn.NONE)return l;if(n===sn.SUM)return le(l);if(n===sn.MEAN){if(o==null)return Vl(l);{const c=s.size/o.size,f=It(le(l),le(o));return c>1?It(f,qt(c)):f}}if(n===sn.SUM_BY_NONZERO_WEIGHTS){if(o==null)return It(le(l),qt(s.size));{const c=ct(o,hs(s.shape)),f=ce(le(X2(c,qt(0))),"float32");return It(le(l),f)}}throw Error(`Unknown reduction: ${n}`)}const Ha=U({computeWeightedLoss_:i7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o7(a,t,n,s=sn.SUM_BY_NONZERO_WEIGHTS){const o=A(a,"labels","absoluteDifference"),l=A(t,"predictions","absoluteDifference");let c=null;n!=null&&(c=A(n,"weights","absoluteDifference")),Un(o.shape,l.shape,"Error in absoluteDifference: ");const f=En(zt(o,l));return Ha(f,c,s)}const u7=U({absoluteDifference_:o7});function l7(a,t,n,s,o=sn.SUM_BY_NONZERO_WEIGHTS){const l=A(a,"labels","cosineDistance"),c=A(t,"predictions","cosineDistance");let f=null;s!=null&&(f=A(s,"weights","cosineDistance")),Un(l.shape,c.shape,"Error in cosineDistance: ");const h=qt(1),d=zt(h,le(ct(l,c),n,!0));return Ha(d,f,o)}const c7=U({cosineDistance_:l7});function f7(a,t,n,s=sn.SUM_BY_NONZERO_WEIGHTS){let o=A(a,"labels","hingeLoss");const l=A(t,"predictions","hingeLoss");let c=null;n!=null&&(c=A(n,"weights","hingeLoss")),Un(o.shape,l.shape,"Error in hingeLoss: ");const f=qt(1);o=zt(ct(qt(2),o),f);const h=ac(zt(f,ct(o,l)));return Ha(h,c,s)}const h7=U({hingeLoss_:f7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p7(a,t,n,s=1,o=sn.SUM_BY_NONZERO_WEIGHTS){const l=A(a,"labels","huberLoss"),c=A(t,"predictions","huberLoss");let f=null;n!=null&&(f=A(n,"weights","huberLoss")),Un(l.shape,c.shape,"Error in huberLoss: ");const h=qt(s),d=En(zt(c,l)),y=Hl(d,h),b=zt(d,y),S=wt(ct(qt(.5),Xn(y)),ct(h,b));return Ha(S,f,o)}const d7=U({huberLoss_:p7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m7(a,t,n,s=1e-7,o=sn.SUM_BY_NONZERO_WEIGHTS){const l=A(a,"labels","logLoss"),c=A(t,"predictions","logLoss");let f=null;n!=null&&(f=A(n,"weights","logLoss")),Un(l.shape,c.shape,"Error in logLoss: ");const h=qt(1),d=qt(s),y=ia(ct(l,Qo(wt(c,d)))),b=ct(zt(h,l),Qo(wt(zt(h,c),d))),S=zt(y,b);return Ha(S,f,o)}const g7=U({logLoss_:m7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y7(a,t,n,s=sn.SUM_BY_NONZERO_WEIGHTS){const o=A(a,"labels","meanSquaredError"),l=A(t,"predictions","meanSquaredError");let c=null;n!=null&&(c=A(n,"weights","meanSquaredError")),Un(o.shape,l.shape,"Error in meanSquaredError: ");const f=ey(o,l);return Ha(f,c,s)}const b7=U({meanSquaredError_:y7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v7(a,t){const n=A(a,"labels","sigmoidCrossEntropyWithLogits"),s=A(t,"logits","sigmoidCrossEntropyWithLogits");Un(n.shape,s.shape,"Error in sigmoidCrossEntropyWithLogits: ");const o=ac(s),l=ct(s,n),c=V2(Ua(ia(En(s))));return wt(zt(o,l),c)}function S7(a,t,n,s=0,o=sn.SUM_BY_NONZERO_WEIGHTS){let l=A(a,"multiClassLabels","sigmoidCrossEntropy");const c=A(t,"logits","sigmoidCrossEntropy");let f=null;if(n!=null&&(f=A(n,"weights","sigmoidCrossEntropy")),Un(l.shape,c.shape,"Error in sigmoidCrossEntropy: "),s>0){const d=qt(s),y=qt(1),b=qt(.5);l=wt(ct(l,zt(y,d)),ct(b,d))}const h=v7(l,c);return Ha(h,f,o)}const w7=U({sigmoidCrossEntropy_:S7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T7(a,t,n=-1){if(n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);return Ia((o,l,c)=>{const h=q2(l,[n],!0),d=zt(ce(l,"float32"),h);c([o,d]);const y=ia(ct(d,o));return{value:le(y,[n]),gradFunc:(N,E)=>{const[D,k]=E,z=Jl(N.shape,[n]);return[ct(et(N,z),zt(ce(D,"float32"),Ua(k))),ct(et(N,z),zt(Ua(k),ce(D,"float32")))]}}})(a,t)}function N7(a,t,n,s=0,o=sn.SUM_BY_NONZERO_WEIGHTS){let l=A(a,"onehotLabels","softmaxCrossEntropy");const c=A(t,"logits","softmaxCrossEntropy");let f=null;if(n!=null&&(f=A(n,"weights","softmaxCrossEntropy")),Un(l.shape,c.shape,"Error in softmaxCrossEntropy: "),s>0){const d=qt(s),y=qt(1),b=qt(l.shape[1]);l=wt(ct(l,zt(y,d)),It(d,b))}const h=T7(l,c);return Ha(h,f,o)}const E7=U({softmaxCrossEntropy_:N7});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _7(a,t,n,s){const o=A(a,"indices","sparseFillEmptyRows","int32"),l=A(t,"values","sparseFillEmptyRows"),c=A(n,"denseShape","sparseFillEmptyRows","int32"),f=A(s,"defaultValue","sparseFillEmptyRows",l.dtype);if(o.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${o.shape}`);if(l.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${l.shape}`);if(c.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${c.shape}`);if(f.rank!==0)throw new Error(`Default value should be a scalar but received shape ${f.shape}`);const h={indices:o,values:l,denseShape:c,defaultValue:f},d=I.runKernel(dv,h);return{outputIndices:d[0],outputValues:d[1],emptyRowIndicator:d[2],reverseIndexMap:d[3]}}const x7=U({sparseFillEmptyRows_:_7});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A7(a,t,n){const s=A(a,"inputIndices","sparseReshape","int32"),o=A(t,"inputShape","sparseReshape","int32"),l=A(n,"newShape","sparseReshape","int32");if(s.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${s.shape}`);if(o.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${o.shape}`);if(l.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${l.shape}`);const c={inputIndices:s,inputShape:o,newShape:l},f=I.runKernel(mv,c);return{outputIndices:f[0],outputShape:f[1]}}const O7=U({sparseReshape_:A7});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D7(a,t,n){const s=A(a,"data","sparseSegmentMean"),o=A(t,"indices","sparseSegmentMean","int32"),l=A(n,"segmentIds","sparseSegmentMean","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${o.shape}`);if(l.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${l.shape}`);const c={data:s,indices:o,segmentIds:l};return I.runKernel(gv,c)}const k7=U({sparseSegmentMean_:D7});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $7(a,t,n){const s=A(a,"data","sparseSegmentSum"),o=A(t,"indices","sparseSegmentSum","int32"),l=A(n,"segmentIds","sparseSegmentSum","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${o.shape}`);if(l.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${l.shape}`);const c={data:s,indices:o,segmentIds:l};return I.runKernel(yv,c)}const R7=U({sparseSegmentSum_:$7});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z7(a,t,n,s,o,l,c,f){const h=A(a,"data","stringNGrams","string");if(h.dtype!=="string")throw new Error("Data must be of datatype string");if(h.shape.length!==1)throw new Error(`Data must be a vector, saw: ${h.shape}`);const d=A(t,"dataSplits","stringNGrams");if(d.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const y={separator:n,nGramWidths:s,leftPad:o,rightPad:l,padWidth:c,preserveShortSequences:f},b={data:h,dataSplits:d},S=I.runKernel(Tv,b,y);return{nGrams:S[0],nGramsSplits:S[1]}}const C7=U({stringNGrams_:z7});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M7(a,t,n=!0){const s=A(a,"input","stringSplit","string"),o=A(t,"delimiter","stringSplit","string");if(s.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${s.shape}`);if(o.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${o.shape}`);const l={skipEmpty:n},c={input:s,delimiter:o},f=I.runKernel(Nv,c,l);return{indices:f[0],values:f[1],shape:f[2]}}const B7=U({stringSplit_:M7});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U7(a,t){const n=A(a,"input","stringToHashBucketFast","string"),s={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const o={input:n};return I.runKernel(Ev,o,s)}const I7=U({stringToHashBucketFast_:U7});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L7(a,t,n,s=!0){const o=A(a,"input","staticRegexReplace","string"),l={pattern:t,rewrite:n,replaceGlobal:s};return I.runKernel(Sv,{x:o},l)}const j7=U({staticRegexReplace_:L7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const V7={fft:pp,ifft:ql,rfft:dp,irfft:ty},H7={hammingWindow:l8,hannWindow:oy,frame:uy,stft:p8},Ei={flipLeftRight:y8,grayscaleToRGB:v8,resizeNearestNeighbor:X8,resizeBilinear:K8,rgbToGrayscale:w8,rotateWithOffset:N8,cropAndResize:m8,nonMaxSuppression:_8,nonMaxSuppressionAsync:B8,nonMaxSuppressionWithScore:I8,nonMaxSuppressionWithScoreAsync:j8,nonMaxSuppressionPadded:H8,nonMaxSuppressionPaddedAsync:F8,threshold:P8,transform:J8},q7={bandPart:e7,gramSchmidt:a7,qr:s7},F7={absoluteDifference:u7,computeWeightedLoss:Ha,cosineDistance:c7,hingeLoss:h7,huberLoss:d7,logLoss:g7,meanSquaredError:b7,sigmoidCrossEntropy:w7,softmaxCrossEntropy:E7},G7={sparseFillEmptyRows:x7,sparseReshape:O7,sparseSegmentMean:k7,sparseSegmentSum:R7},K7={stringNGrams:C7,stringSplit:B7,stringToHashBucketFast:I7,staticRegexReplace:j7};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Y7=new Map,X7=new Map;class Q7{getClassName(){return this.constructor.className}static fromConfig(t,n){return new t(n)}}class ls{constructor(){this.classNameMap={}}static getMap(){return ls.instance==null&&(ls.instance=new ls),ls.instance}static register(t){ls.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function W7(a,t,n){$(a.className!=null,()=>"Class being registered does not have the static className property defined."),$(typeof a.className=="string",()=>"className is required to be a string, but got type "+typeof a.className),$(a.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof n>"u"&&(n=a.className);const s=n,o=t+">"+s;return ls.register(a),Y7.set(o,a),X7.set(a,o),a}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ts extends Q7{minimize(t,n=!1,s){const{value:o,grads:l}=this.computeGradients(t,s);if(s!=null){const c=s.map(f=>({name:f.name,tensor:l[f.name]}));this.applyGradients(c)}else this.applyGradients(l);return pe(l),n?o:(o.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,n){return O6(t,n)}dispose(){this.iterations_!=null&&pe(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:qt(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(Ts,Symbol.hasInstance,{value:a=>a.minimize!=null&&a.computeGradients!=null&&a.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class P7 extends Ts{static get className(){return"Adadelta"}constructor(t,n,s=null){super(),this.learningRate=t,this.rho=n,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=I.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const l=I.registeredVariables[s],c=!1;this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accum_grad`,variable:Mt(()=>_n(l).variable(c))}),this.accumulatedUpdates[o]==null&&(this.accumulatedUpdates[o]={originalName:`${s}/accum_var`,variable:Mt(()=>_n(l).variable(c))});const f=Array.isArray(t)?t[o].tensor:t[s];if(f==null)return;const h=this.accumulatedGrads[o].variable,d=this.accumulatedUpdates[o].variable;Mt(()=>{const y=wt(ct(h,this.rho),ct(Xn(f),1-this.rho)),b=ct(It(Ba(wt(d,this.epsilon)),Ba(wt(h,this.epsilon))),f),S=wt(ct(d,this.rho),ct(Xn(b),1-this.rho));h.assign(y),d.assign(S);const N=wt(ct(b,-this.learningRate),l);l.assign(N)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(pe(this.accumulatedGrads.map(t=>t.variable)),pe(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=t.length/2,s=!1;this.accumulatedGrads=t.slice(0,n).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedUpdates=t.slice(n,n*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.rho,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Z7 extends Ts{static get className(){return"Adagrad"}constructor(t,n=.1){super(),this.learningRate=t,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const l=I.registeredVariables[s];this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accumulator`,variable:Mt(()=>tu(l.shape,this.initialAccumulatorValue).variable(!1))});const c=Array.isArray(t)?t[o].tensor:t[s];if(c==null)return;const f=this.accumulatedGrads[o].variable;Mt(()=>{const h=wt(f,Xn(c));f.assign(h);const d=wt(ct(It(c,Ba(wt(h,I.backend.epsilon()))),-this.learningRate),l);l.assign(d)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&pe(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulatedGrads=t.map(s=>({originalName:s.name,variable:s.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,n){return new t(n.learningRate,n.initialAccumulatorValue)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class J7 extends Ts{static get className(){return"Adam"}constructor(t,n,s,o=null){super(),this.learningRate=t,this.beta1=n,this.beta2=s,this.epsilon=o,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],Mt(()=>{this.accBeta1=qt(n).variable(),this.accBeta2=qt(s).variable()}),o==null&&(this.epsilon=I.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);Mt(()=>{const s=zt(1,this.accBeta1),o=zt(1,this.accBeta2);n.forEach((l,c)=>{const f=I.registeredVariables[l],h=!1;this.accumulatedFirstMoment[c]==null&&(this.accumulatedFirstMoment[c]={originalName:`${l}/m`,variable:Mt(()=>_n(f).variable(h))}),this.accumulatedSecondMoment[c]==null&&(this.accumulatedSecondMoment[c]={originalName:`${l}/v`,variable:Mt(()=>_n(f).variable(h))});const d=Array.isArray(t)?t[c].tensor:t[l];if(d==null)return;const y=this.accumulatedFirstMoment[c].variable,b=this.accumulatedSecondMoment[c].variable,S=wt(ct(y,this.beta1),ct(d,1-this.beta1)),N=wt(ct(b,this.beta2),ct(Xn(d),1-this.beta2)),E=It(S,s),D=It(N,o);y.assign(S),b.assign(N);const k=wt(ct(It(E,wt(Ba(D),this.epsilon)),-this.learningRate),f);f.assign(k)}),this.accBeta1.assign(ct(this.accBeta1,this.beta1)),this.accBeta2.assign(ct(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&pe(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&pe(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t),Mt(()=>{this.accBeta1.assign(Xo(this.beta1,this.iterations_+1)),this.accBeta2.assign(Xo(this.beta2,this.iterations_+1))});const n=t.length/2,s=!1;this.accumulatedFirstMoment=t.slice(0,n).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedSecondMoment=t.slice(n,n*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class t_ extends Ts{static get className(){return"Adamax"}constructor(t,n,s,o=null,l=0){super(),this.learningRate=t,this.beta1=n,this.beta2=s,this.epsilon=o,this.decay=l,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],Mt(()=>{this.iteration=qt(0).variable(),this.accBeta1=qt(n).variable()}),o==null&&(this.epsilon=I.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);Mt(()=>{const s=zt(1,this.accBeta1),o=It(-this.learningRate,wt(ct(this.iteration,this.decay),1));n.forEach((l,c)=>{const f=I.registeredVariables[l],h=!1;this.accumulatedFirstMoment[c]==null&&(this.accumulatedFirstMoment[c]={originalName:`${l}/m`,variable:_n(f).variable(h)}),this.accumulatedWeightedInfNorm[c]==null&&(this.accumulatedWeightedInfNorm[c]={originalName:`${l}/v`,variable:_n(f).variable(h)});const d=Array.isArray(t)?t[c].tensor:t[l];if(d==null)return;const y=this.accumulatedFirstMoment[c].variable,b=this.accumulatedWeightedInfNorm[c].variable,S=wt(ct(y,this.beta1),ct(d,1-this.beta1)),N=ct(b,this.beta2),E=En(d),D=Y2(N,E);y.assign(S),b.assign(D);const k=wt(ct(It(o,s),It(S,wt(D,this.epsilon))),f);f.assign(k)}),this.iteration.assign(wt(this.iteration,1)),this.accBeta1.assign(ct(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&pe(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&pe(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ly extends Ts{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const l=Array.isArray(t)?t[o].tensor:t[s];if(l==null)return;const c=I.registeredVariables[s];Mt(()=>{const f=wt(ct(this.c,l),c);c.assign(f)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=ra(qt(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,n){return new t(n.learningRate)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class e_ extends ly{static get className(){return"Momentum"}constructor(t,n,s=!1){super(t),this.learningRate=t,this.momentum=n,this.useNesterov=s,this.accumulations=[],this.m=qt(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const l=I.registeredVariables[s];this.accumulations[o]==null&&(this.accumulations[o]={originalName:`${s}/momentum`,variable:Mt(()=>_n(l).variable(!1))});const c=this.accumulations[o].variable,f=Array.isArray(t)?t[o].tensor:t[s];f!=null&&Mt(()=>{let h;const d=wt(ct(this.m,c),f);this.useNesterov?h=wt(ct(this.c,wt(f,ct(d,this.m))),l):h=wt(ct(this.c,d),l),c.assign(d),l.assign(h)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&pe(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulations=t.map(s=>({originalName:s.name,variable:s.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,n){return new t(n.learningRate,n.momentum,n.useNesterov)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class n_ extends Ts{static get className(){return"RMSProp"}constructor(t,n=.9,s=0,o=null,l=!1){if(super(),this.learningRate=t,this.decay=n,this.momentum=s,this.epsilon=o,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=l,o==null&&(this.epsilon=I.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const l=I.registeredVariables[s],c=!1;this.accumulatedMeanSquares[o]==null&&(this.accumulatedMeanSquares[o]={originalName:`${s}/rms`,variable:Mt(()=>_n(l).variable(c))}),this.accumulatedMoments[o]==null&&(this.accumulatedMoments[o]={originalName:`${s}/momentum`,variable:Mt(()=>_n(l).variable(c))}),this.accumulatedMeanGrads[o]==null&&this.centered&&(this.accumulatedMeanGrads[o]={originalName:`${s}/mg`,variable:Mt(()=>_n(l).variable(c))});const f=Array.isArray(t)?t[o].tensor:t[s];if(f==null)return;const h=this.accumulatedMeanSquares[o].variable,d=this.accumulatedMoments[o].variable;Mt(()=>{const y=wt(ct(h,this.decay),ct(Xn(f),1-this.decay));if(this.centered){const b=this.accumulatedMeanGrads[o].variable,S=wt(ct(b,this.decay),ct(f,1-this.decay)),N=It(ct(f,this.learningRate),Ba(zt(y,wt(Xn(S),this.epsilon)))),E=wt(ct(d,this.momentum),N);h.assign(y),b.assign(S),d.assign(E);const D=zt(l,E);l.assign(D)}else{const b=wt(ct(h,this.decay),ct(Xn(f),1-this.decay)),S=wt(ct(d,this.momentum),It(ct(f,this.learningRate),Ba(wt(b,this.epsilon))));h.assign(b),d.assign(S);const N=zt(l,S);l.assign(N)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&pe(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&pe(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&pe(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=this.centered?t.length/3:t.length/2,s=!1;this.accumulatedMeanSquares=t.slice(0,n).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedMoments=t.slice(n,n*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=t.slice(n*2,n*3).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,n){return new t(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const a_=[P7,Z7,J7,t_,e_,n_,ly];function r_(){for(const a of a_)W7(a)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const s_="model",i_=".json",o_=".weights.bin";function Ng(a){return new Promise(t=>setTimeout(t)).then(a)}class vs{constructor(t){if(!Lt().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(vs.URL_SCHEME)&&(t=t.slice(vs.URL_SCHEME.length)),(t==null||t.length===0)&&(t=s_),this.modelJsonFileName=t+i_,this.weightDataFileName=t+o_}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=Wn.join(t.weightData),s=window.URL.createObjectURL(new Blob([n],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const o=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],l=y2(t,o),c=window.URL.createObjectURL(new Blob([JSON.stringify(l)],{type:"application/json"})),f=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(f.download=this.modelJsonFileName,f.href=c,await Ng(()=>f.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const h=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;h.download=this.weightDataFileName,h.href=s,await Ng(()=>h.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Jo(t)}}}}vs.URL_SCHEME="downloads://";class u_{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,n)=>{const s=new FileReader;s.onload=o=>{const l=JSON.parse(o.target.result),c=l.modelTopology;if(c==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(l.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:c});return}const h=sp(l,d=>this.loadWeights(d));t(h)},s.onerror=o=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),s.readAsText(this.jsonFile)})}loadWeights(t){const n=[],s=[];for(const c of t)n.push(...c.weights),s.push(...c.paths);const o=this.checkManifestAndWeightFiles(t),l=s.map(c=>this.loadWeightsFile(c,o[c]));return Promise.all(l).then(c=>[n,c])}loadWeightsFile(t,n){return new Promise((s,o)=>{const l=new FileReader;l.onload=c=>{const f=c.target.result;s(f)},l.onerror=c=>o(`Failed to weights data from file of path '${t}'.`),l.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(t){const n=[],s=this.weightsFiles.map(l=>hg(l.name)),o={};for(const l of t)l.paths.forEach(c=>{const f=hg(c);if(n.indexOf(f)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${f}'`);if(n.push(f),s.indexOf(f)===-1)throw new Error(`Weight file with basename '${f}' is not provided.`);o[c]=this.weightsFiles[s.indexOf(f)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return o}}const l_=a=>Lt().getBool("IS_BROWSER")&&!Array.isArray(a)&&a.startsWith(vs.URL_SCHEME)?c_(a.slice(vs.URL_SCHEME.length)):null;he.registerSaveRouter(l_);function c_(a="model"){return new vs(a)}function f_(a){return new u_(a)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eg(a,t,n,s){c(a),n=n??0,s=s??1,f(n,s);let o=0;const l=h=>(h.then(d=>{const y=n+ ++o/a.length*(s-n);return t(y),d}),h);function c(h){$(h!=null&&Array.isArray(h)&&h.length>0,()=>"promises must be a none empty array")}function f(h,d){$(h>=0&&h<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${h}`),$(d>=0&&d<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${d}`),$(d>=h,()=>`startFraction must be no more than endFraction, but got startFraction ${h} and endFraction ${d}`)}return Promise.all(a.map(l))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function cy(a,t){t==null&&(t={});const n=t.fetchFunc==null?Lt().platform.fetch:t.fetchFunc,s=a.map(b=>n(b,t.requestInit,{isBinary:!0})),f=(t.onProgress==null?await Promise.all(s):await Eg(s,t.onProgress,0,.5)).map(b=>b.arrayBuffer());return t.onProgress==null?await Promise.all(f):await Eg(f,t.onProgress,.5,1)}function h_(a,t){var n;const s=t.fetchFunc==null?Lt().platform.fetch:t.fetchFunc;let o=0,l;return(n=t.onProgress)===null||n===void 0||n.call(t,0),new ReadableStream({pull:async c=>{for(var f;o<a.length;){l||(l=(await s(a[o],t.requestInit,{isBinary:!0})).body.getReader());const{done:h,value:d}=await l.read();if(h){o++,l=void 0,(f=t.onProgress)===null||f===void 0||f.call(t,o/a.length);continue}c.enqueue(d);return}c.close()}})}async function p_(a,t="",n,s){return fy(c=>cy(c,{requestInit:s}))(a,t,n)}function fy(a){return async(t,n="",s)=>{const o=t.map(()=>!1),l={},c=s!=null?s.map(()=>!1):[],f=[];if(t.forEach((N,E)=>{let D=0;N.weights.forEach(k=>{const z="quantization"in k?k.quantization.dtype:k.dtype,Z=ms[z]*Ne(k.shape),P=()=>{o[E]=!0,l[E]==null&&(l[E]=[]),l[E].push({manifestEntry:k,groupOffset:D,sizeBytes:Z})};s!=null?s.forEach((H,G)=>{H===k.name&&(P(),c[G]=!0)}):P(),f.push(k.name),D+=Z})}),!c.every(N=>N)){const N=s.filter((E,D)=>!c[D]);throw new Error(`Could not find weights in manifest with names: ${N.join(", ")}. 
Manifest JSON has weights with names: ${f.join(", ")}.`)}const h=o.reduce((N,E,D)=>(E&&N.push(D),N),[]),d=[];h.forEach(N=>{t[N].paths.forEach(E=>{const D=n+(n.endsWith("/")?"":"/")+E;d.push(D)})});const y=await a(d),b={};let S=0;return h.forEach(N=>{const E=t[N].paths.length,D=new Wn(y.slice(S,S+E));l[N].forEach(z=>{const Z=D.slice(z.groupOffset,z.groupOffset+z.sizeBytes),P=d2(Z,[z.manifestEntry]);for(const H in P)b[H]=P[H]}),S+=E}),b}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const d_="application/octet-stream",m_="application/json";class wp{constructor(t,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?($(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=Lt().platform.fetch,$(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&$(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{},this.loadOptions=n}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o=y2(t,s);if(n.body.append("model.json",new Blob([JSON.stringify(o)],{type:m_}),"model.json"),t.weightData!=null){const c=Wn.join(t.weightData);n.body.append("model.weights.bin",new Blob([c],{type:d_}),"model.weights.bin")}const l=await this.fetch(this.path,n);if(l.ok)return{modelArtifactsInfo:Jo(t),responses:[l]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${l.status}.`)}async loadModelJSON(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await t.json()}catch{let c=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?c+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":c+=" Please make sure the server is serving valid JSON for this request.",new Error(c)}const s=n.modelTopology,o=n.weightsManifest;if(s==null&&o==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return n}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const t=await this.loadModelJSON();return sp(t,n=>this.loadWeights(n))}async loadStream(){const t=await this.loadModelJSON(),n=await this.getWeightUrls(t.weightsManifest),s=Rh(t.weightsManifest),o=()=>h_(n,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:s,getWeightStream:o})}async getWeightUrls(t){const n=Array.isArray(this.path)?this.path[1]:this.path,[s,o]=g_(n),l=this.weightPathPrefix||s,c=[],f=[];for(const h of t)for(const d of h.paths)this.weightUrlConverter!=null?f.push(this.weightUrlConverter(d)):c.push(l+d+o);return this.weightUrlConverter&&c.push(...await Promise.all(f)),c}async loadWeights(t){const n=await this.getWeightUrls(t),s=Rh(t),o=await cy(n,this.loadOptions);return[s,o]}}wp.URL_SCHEME_REGEX=/^https?:\/\//;function g_(a){const t=a.lastIndexOf("/"),n=a.lastIndexOf("?"),s=a.substring(0,t),o=n>t?a.substring(n):"";return[s+"/",o]}function Vh(a){return a.match(wp.URL_SCHEME_REGEX)!=null}const hy=(a,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(Array.isArray(a)?n=a.every(s=>Vh(s)):n=Vh(a),n)return Tp(a,t)}return null};he.registerSaveRouter(hy);he.registerLoadRouter(hy);function Tp(a,t){return new wp(a,t)}function y_(a,t){return Tp(a,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class fh{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class py{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class b_{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=n=>Promise.resolve(t.save(n)))}}function v_(a,t,n,s){const o=arguments;return new b_(dy(...o))}function dy(a,t,n,s){return arguments.length===1?a.modelTopology!=null||a.weightSpecs!=null?new fh(a):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new fh({modelTopology:a})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new fh({modelTopology:a,weightSpecs:t,weightData:n,trainingConfig:s}))}function S_(a){return new py(a)}function w_(a){return new py(a)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const my=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:Wn,browserFiles:f_,browserHTTPRequest:y_,concatenateArrayBuffers:hS,copyModel:CS,decodeWeights:d2,decodeWeightsStream:g2,encodeWeights:iS,fromMemory:v_,fromMemorySync:dy,getLoadHandlers:SS,getModelArtifactsForJSON:sp,getModelArtifactsForJSONSync:b2,getModelArtifactsInfoForJSON:Jo,getSaveHandlers:vS,getWeightSpecs:Rh,http:Tp,isHTTPScheme:Vh,listModels:RS,loadWeights:p_,moveModel:MS,registerLoadRouter:bS,registerSaveRouter:yS,removeModel:zS,weightsLoaderFactory:fy,withSaveHandler:S_,withSaveHandlerSync:w_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let os;function T_(a,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(a==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,s=!1,o=!1,l=!1,c=!1,f=!1;if(a.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&a instanceof ImageData)s=!0;else if(typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement)l=!0;else if(a.getContext!=null)c=!0;else if(typeof ImageBitmap<"u"&&a instanceof ImageBitmap)f=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${a.constructor.name}`);if(xh(J1,I.backendName)!=null){const E={pixels:a},D={numChannels:t};return I.runKernel(J1,E,D)}const[d,y]=o?[a.videoWidth,a.videoHeight]:[a.width,a.height];let b;if(c)b=a.getContext("2d").getImageData(0,0,d,y).data;else if(s||n)b=a.data;else if(l||o||f){if(os==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")os=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else os=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});os.canvas.width=d,os.canvas.height=y,os.drawImage(a,0,0,d,y),b=os.getImageData(0,0,d,y).data}let S;if(t===4)S=new Int32Array(b);else{const E=d*y;S=new Int32Array(E*t);for(let D=0;D<E;D++)for(let k=0;k<t;++k)S[D*t+k]=b[D*4+k]}return ay(S,[y,d,t],"int32")}function N_(a){if(a.rank!==2&&a.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${a.rank}.`);const t=a.rank===2?1:a.shape[2];if(t>4||t===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${t}`);if(a.dtype!=="float32"&&a.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${a.dtype}. Please use float32 or int32 tensors.`)}async function gy(a,t){let n=A(a,"img","toPixels");if(!(a instanceof me)){const d=n;n=ce(d,"int32"),d.dispose()}N_(n);const[s,o]=n.shape.slice(0,2),l=n.rank===2?1:n.shape[2],c=await n.data(),f=n.dtype==="float32"?255:1,h=new Uint8ClampedArray(o*s*4);for(let d=0;d<s*o;++d){const y=[0,0,0,255];for(let S=0;S<l;S++){const N=c[d*l+S];if(n.dtype==="float32"){if(N<0||N>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${N}.`)}else if(n.dtype==="int32"&&(N<0||N>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${N}.`);l===1?(y[0]=N*f,y[1]=N*f,y[2]=N*f):y[S]=N*f}const b=d*4;h[b+0]=Math.round(y[0]),h[b+1]=Math.round(y[1]),h[b+2]=Math.round(y[2]),h[b+3]=Math.round(y[3])}return n!==a&&n.dispose(),h}const yy=U({fromPixels_:T_});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */r_();/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const E_=Lt();E_.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,a=>{a&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var dn;(function(a){a[a.DT_INVALID=0]="DT_INVALID",a[a.DT_FLOAT=1]="DT_FLOAT",a[a.DT_DOUBLE=2]="DT_DOUBLE",a[a.DT_INT32=3]="DT_INT32",a[a.DT_UINT8=4]="DT_UINT8",a[a.DT_INT16=5]="DT_INT16",a[a.DT_INT8=6]="DT_INT8",a[a.DT_STRING=7]="DT_STRING",a[a.DT_COMPLEX64=8]="DT_COMPLEX64",a[a.DT_INT64=9]="DT_INT64",a[a.DT_BOOL=10]="DT_BOOL",a[a.DT_QINT8=11]="DT_QINT8",a[a.DT_QUINT8=12]="DT_QUINT8",a[a.DT_QINT32=13]="DT_QINT32",a[a.DT_BFLOAT16=14]="DT_BFLOAT16",a[a.DT_QINT16=15]="DT_QINT16",a[a.DT_QUINT16=16]="DT_QUINT16",a[a.DT_UINT16=17]="DT_UINT16",a[a.DT_COMPLEX128=18]="DT_COMPLEX128",a[a.DT_HALF=19]="DT_HALF",a[a.DT_RESOURCE=20]="DT_RESOURCE",a[a.DT_VARIANT=21]="DT_VARIANT",a[a.DT_UINT32=22]="DT_UINT32",a[a.DT_UINT64=23]="DT_UINT64",a[a.DT_FLOAT_REF=101]="DT_FLOAT_REF",a[a.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",a[a.DT_INT32_REF=103]="DT_INT32_REF",a[a.DT_UINT8_REF=104]="DT_UINT8_REF",a[a.DT_INT16_REF=105]="DT_INT16_REF",a[a.DT_INT8_REF=106]="DT_INT8_REF",a[a.DT_STRING_REF=107]="DT_STRING_REF",a[a.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",a[a.DT_INT64_REF=109]="DT_INT64_REF",a[a.DT_BOOL_REF=110]="DT_BOOL_REF",a[a.DT_QINT8_REF=111]="DT_QINT8_REF",a[a.DT_QUINT8_REF=112]="DT_QUINT8_REF",a[a.DT_QINT32_REF=113]="DT_QINT32_REF",a[a.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",a[a.DT_QINT16_REF=115]="DT_QINT16_REF",a[a.DT_QUINT16_REF=116]="DT_QUINT16_REF",a[a.DT_UINT16_REF=117]="DT_UINT16_REF",a[a.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",a[a.DT_HALF_REF=119]="DT_HALF_REF",a[a.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",a[a.DT_VARIANT_REF=121]="DT_VARIANT_REF",a[a.DT_UINT32_REF=122]="DT_UINT32_REF",a[a.DT_UINT64_REF=123]="DT_UINT64_REF"})(dn||(dn={}));var _g;(function(a){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(a.CheckpointFormatVersion||(a.CheckpointFormatVersion={}))})(_g||(_g={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const __={};function by(a){return __[a]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v(a,t,n,s,o){const l=t.inputParams[a];if(l&&l.inputIndexStart!==void 0){const f=l.inputIndexStart,h=l.inputIndexEnd===0?void 0:l.inputIndexEnd===void 0?f+1:l.inputIndexEnd,d=f<0?t.inputNames.length+f:f;if(l.type==="tensor")return Ue(t.inputNames[d],n,s,o);if(l.type==="tensors"){const S=t.inputs.slice(f,h);return t.inputNames.slice(f,h).filter((E,D)=>{var k;return((k=S[D])===null||k===void 0?void 0:k.op)!=="NoOp"}).map(E=>Ue(E,n,s,o))}const y=Ue(t.inputNames[d],n,s,o),b=y.dataSync();return l.type==="number"?b[0]:_h(y.shape,b)}const c=t.attrParams[a];return c&&c.value}function Ue(a,t,n,s){const[o,l]=mn(a,n);if(s!=null){const f=s.getHashTableHandleByName(o);if(f!=null)return f}const c=n.currentContextIds.find(f=>!!t[Fl(o,f)]);return c!==void 0?t[Fl(o,c)][l]:void 0}function xg(a,t,n){return t[Fl(a,n.currentContextId)]}function Oa(a,t){const[n,s,o]=mn(a,t);return[Fl(n,t&&t.currentContextId),s,o]}function Fl(a,t){return t?`${a}-${t}`:a}function mn(a,t){if(a==="")return["",0,void 0];const n=t!=null&&t.parseNodeNameCache!=null;if(n){const l=t.parseNodeNameCache.get(a);if(l!=null)return l}const s=a.split(":");let o;if(s.length===1)o=[a,0,void 0];else{const l=s[0],c=s.length===3?s[1]:void 0,f=Number(s[s.length-1]);o=[l,f,c]}return n&&t.parseNodeNameCache.set(a,o),o}function zl(a,t,n){let s=v("pad",a,t,n);if(s==="explicit"){s=v("explicitPaddings",a,t,n);const o=[[0,0],[0,0],[0,0],[0,0]];for(let l=0;l<4;l++)o[l][0]=s[l*2],o[l][1]=s[l*2+1];return o}return s}function Da(a){return a.kept?a:Er(a)}/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const x_=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],A_=Object.freeze(Object.defineProperty({__proto__:null,json:x_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O_=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],D_=Object.freeze(Object.defineProperty({__proto__:null,json:O_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const k_=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],$_=Object.freeze(Object.defineProperty({__proto__:null,json:k_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const R_=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],z_=Object.freeze(Object.defineProperty({__proto__:null,json:R_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const C_=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],M_=Object.freeze(Object.defineProperty({__proto__:null,json:C_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const B_=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],U_=Object.freeze(Object.defineProperty({__proto__:null,json:B_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I_=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],L_=Object.freeze(Object.defineProperty({__proto__:null,json:I_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const j_=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],V_=Object.freeze(Object.defineProperty({__proto__:null,json:j_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const H_=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],q_=Object.freeze(Object.defineProperty({__proto__:null,json:H_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const F_=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],G_=Object.freeze(Object.defineProperty({__proto__:null,json:F_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const K_=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}],Y_=Object.freeze(Object.defineProperty({__proto__:null,json:K_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const X_=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}],Q_=Object.freeze(Object.defineProperty({__proto__:null,json:X_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const W_=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}],P_=Object.freeze(Object.defineProperty({__proto__:null,json:W_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Z_=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],J_=Object.freeze(Object.defineProperty({__proto__:null,json:Z_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const t9=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],e9=Object.freeze(Object.defineProperty({__proto__:null,json:t9},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const n9=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],a9=Object.freeze(Object.defineProperty({__proto__:null,json:n9},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const r9=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],s9=Object.freeze(Object.defineProperty({__proto__:null,json:r9},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const i9=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],o9=Object.freeze(Object.defineProperty({__proto__:null,json:i9},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const u9=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],l9=Object.freeze(Object.defineProperty({__proto__:null,json:u9},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ag{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const t=[A_,D_,$_,z_,M_,U_,L_,V_,q_,G_,Y_,Q_,P_,J_,e9,a9,s9,o9,l9],n=[].concat(...t.map(s=>s.json));this.opMappers=n.reduce((s,o)=>(s[o.tfOpName]=o,s),{})}transformGraph(t,n={}){const s=t.node,o=[],l=[],c=[],f=s.reduce((D,k)=>(D[k.name]=this.mapNode(k),k.op.startsWith("Placeholder")?o.push(D[k.name]):k.op==="Const"?l.push(D[k.name]):(k.input==null||k.input.length===0)&&c.push(D[k.name]),D),{});let h=[];const d=[];let y={},b={};n!=null&&(y=this.mapSignatureEntries(n.inputs),b=this.mapSignatureEntries(n.outputs));const S=Object.keys(f);S.forEach(D=>{const k=f[D];k.inputNames.forEach((z,Z)=>{const[P,,H]=Oa(z),G=f[P];if(G.outputs!=null){const Q=G.outputs.indexOf(H);if(Q!==-1){const st=`${P}:${Q}`;k.inputNames[Z]=st}}k.inputs.push(G),G.children.push(k)})}),Object.keys(b).length===0?S.forEach(D=>{const k=f[D];k.children.length===0&&d.push(k)}):Object.keys(b).forEach(D=>{const[k]=Oa(D),z=f[k];z!=null&&(z.signatureKey=b[D],d.push(z))}),Object.keys(y).length>0?Object.keys(y).forEach(D=>{const[k]=Oa(D),z=f[k];z&&(z.signatureKey=y[D],h.push(z))}):h=o;let N={};t.library!=null&&t.library.function!=null&&(N=t.library.function.reduce((D,k)=>(D[k.signature.name]=this.mapFunction(k),D),{}));const E={nodes:f,inputs:h,outputs:d,weights:l,placeholders:o,signature:n,functions:N};return c.length>0&&(E.initNodes=c),E}mapSignatureEntries(t){return Object.keys(t||{}).reduce((n,s)=>(n[t[s].name]=s,n),{})}mapNode(t){const n=by(t.op)||this.opMappers[t.op]||{};t.attr==null&&(t.attr={});const s={name:t.name,op:t.op,category:n.category,inputNames:(t.input||[]).map(o=>o.startsWith("^")?o.slice(1):o),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:n.outputs};return n.inputs!=null&&(s.inputParams=n.inputs.reduce((o,l)=>(o[l.name]={type:l.type,inputIndexStart:l.start,inputIndexEnd:l.end},o),{})),n.attrs!=null&&(s.attrParams=n.attrs.reduce((o,l)=>{const c=l.type;let f;switch(l.type){case"string":f=Hh(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Hh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"string[]":f=Qh(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Qh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"number":f=Fh(t.attr,l.tfName,l.defaultValue||0),f===void 0&&l.tfDeprecatedName&&(f=Fh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"number[]":f=Xh(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Xh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"bool":f=qh(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=qh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"bool[]":f=Ph(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Ph(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"shape":f=Yh(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Yh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"shape[]":f=Wh(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Wh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"dtype":f=Gh(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Gh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"dtype[]":f=Kh(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Kh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"func":f=Og(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Og(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${l.type} for op: ${t.op}`)}return o[l.name]={value:f,type:c},o},{})),s}mapFunction(t){const n=t.nodeDef,s=[],o=[];let l={};n!=null&&(l=n.reduce((b,S)=>(b[S.name]=this.mapNode(S),S.op==="Const"&&o.push(b[S.name]),b),{}));const c=[],f=[];t.signature.inputArg.forEach(b=>{const[S]=Oa(b.name),N={name:S,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:Np(b.type),type:"dtype"}},children:[]};N.signatureKey=b.name,c.push(N),l[S]=N}),Object.keys(l).forEach(b=>{const S=l[b];S.inputNames.forEach((N,E)=>{const[D,,k]=Oa(N),z=l[D];if(z.outputs!=null){const Z=z.outputs.indexOf(k);if(Z!==-1){const P=`${D}:${Z}`;S.inputNames[E]=P}}S.inputs.push(z),z.children.push(S)})});const d=t.ret;t.signature.outputArg.forEach(b=>{const[S,N]=Oa(d[b.name]),E=l[S];E!=null&&(E.defaultOutput=N,f.push(E))});const y=this.mapArgsToSignature(t);return{nodes:l,inputs:c,outputs:f,weights:o,placeholders:s,signature:y}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce((n,s)=>(n[s.name]=this.mapArgToTensorInfo(s),n),{}),outputs:t.signature.outputArg.reduce((n,s)=>(n[s.name]=this.mapArgToTensorInfo(s,t.ret),n),{})}}mapArgToTensorInfo(t,n){let s=t.name;return n!=null&&(s=n[s]),{name:s,dtype:t.type}}}function c9(a){const t=Lt().global;if(typeof t.atob<"u")return t.atob(a);if(typeof Buffer<"u")return new Buffer(a,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function vy(a,t){const n=Array.isArray(a)?String.fromCharCode.apply(null,a):c9(a);return t?n:n.toLowerCase()}function Hh(a,t,n,s=!1){const o=a[t];return o!=null?vy(o.s,s):n}function qh(a,t,n){const s=a[t];return s?s.b:n}function Fh(a,t,n){const s=a[t]||{},o=s.i!=null?s.i:s.f!=null?s.f:n;return typeof o=="number"?o:parseInt(o,10)}function Np(a){switch(typeof a=="string"&&(a=dn[a]),a){case dn.DT_FLOAT:case dn.DT_HALF:return"float32";case dn.DT_INT32:case dn.DT_INT64:case dn.DT_INT8:case dn.DT_UINT8:return"int32";case dn.DT_BOOL:return"bool";case dn.DT_DOUBLE:return"float32";case dn.DT_STRING:return"string";case dn.DT_COMPLEX64:case dn.DT_COMPLEX128:return"complex64";default:return null}}function Og(a,t,n){const s=a[t];return s&&s.func?s.func.name:n}function Gh(a,t,n){const s=a[t];return s&&s.type?Np(s.type):n}function Kh(a,t,n){const s=a[t];return s&&s.list&&s.list.type?s.list.type.map(o=>Np(o)):n}function Sy(a){if(!a.unknownRank)return a.dim!=null?a.dim.map(t=>typeof t.size=="number"?t.size:parseInt(t.size,10)):[]}function Yh(a,t,n){const s=a[t];return s&&s.shape?Sy(s.shape):n}function Xh(a,t,n){const s=a[t];return s?((s.list.f&&s.list.f.length?s.list.f:s.list.i)||[]).map(o=>typeof o=="number"?o:parseInt(o,10)):n}function Qh(a,t,n,s=!1){const o=a[t];return o&&o.list&&o.list.s?o.list.s.map(l=>vy(l,s)):n}function Wh(a,t,n){const s=a[t];return s&&s.list&&s.list.shape?s.list.shape.map(o=>Sy(o)):n}function Ph(a,t,n){const s=a[t];return s&&s.list&&s.list.b?s.list.b:n}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class f9{constructor(t,n,s){this.node=t,this.tensorMap=n,this.context=s,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(o=>this.getInput(o)),t.rawAttrs!=null&&(this.attrs=Object.keys(t.rawAttrs).reduce((o,l)=>(o[l]=this.getAttr(l),o),{}))}getInput(t){return Ue(t,this.tensorMap,this.context)}getAttr(t,n){const s=this.node.rawAttrs[t];if(s.tensor!=null)return Ue(t,this.tensorMap,this.context);if(s.i!=null||s.f!=null)return Fh(this.node.rawAttrs,t,n);if(s.s!=null)return Hh(this.node.rawAttrs,t,n);if(s.b!=null)return qh(this.node.rawAttrs,t,n);if(s.shape!=null)return Yh(this.node.rawAttrs,t,n);if(s.type!=null)return Gh(this.node.rawAttrs,t,n);if(s.list!=null){if(s.list.i!=null||s.list.f!=null)return Xh(this.node.rawAttrs,t,n);if(s.list.s!=null)return Qh(this.node.rawAttrs,t,n);if(s.list.shape!=null)return Wh(this.node.rawAttrs,t,n);if(s.list.b!=null)return Ph(this.node.rawAttrs,t,n);if(s.list.type!=null)return Kh(this.node.rawAttrs,t,n)}return n}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Le=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:p2,abs:En,acos:XS,acosh:WS,add:wt,addN:ZS,all:tw,any:nw,argMax:rw,argMin:iw,asin:uw,asinh:cw,atan:hw,atan2:dw,atanh:gw,avgPool:O2,avgPool3d:Ew,basicLSTMCell:$w,batchNorm:Pl,batchNorm2d:Bw,batchNorm3d:Iw,batchNorm4d:jw,batchToSpaceND:D2,bincount:k2,bitwiseAnd:qw,booleanMaskAsync:zE,broadcastArgs:Gw,broadcastTo:_l,buffer:Ma,cast:ce,ceil:Xw,clipByValue:$2,clone:Er,complex:Ar,concat:Ie,concat1d:Pw,concat2d:Jw,concat3d:eT,concat4d:aT,conv1d:iT,conv2d:Zl,conv2dTranspose:lT,conv3d:fT,conv3dTranspose:mT,cos:yT,cosh:vT,cosineWindow:mp,cumprod:wT,cumsum:NT,denseBincount:_T,depthToSpace:AT,depthwiseConv2d:op,diag:kT,dilation2d:RT,div:It,divNoNan:IT,dot:jT,dropout:KE,einsum:gi,elu:C2,enclosingPowerOfTwo:iy,ensureShape:FT,equal:z2,erf:KT,euclideanNorm:n6,exp:Ua,expandDims:Mn,expm1:i6,eye:B2,fft:pp,fill:tu,floor:U2,floorDiv:A2,fused:o8,gather:I2,gatherND:qE,greater:ec,greaterEqual:L2,ifft:ql,imag:nc,image:Ei,inTopKAsync:XE,irfft:ty,isFinite:m6,isInf:y6,isNaN:v6,leakyRelu:j2,less:Lh,lessEqual:up,linalg:q7,linspace:N6,localResponseNormalization:_6,log:Qo,log1p:V2,logSigmoid:R6,logSoftmax:M6,logSumExp:q2,logicalAnd:jl,logicalNot:F2,logicalOr:G2,logicalXor:V6,losses:F7,lowerBound:q6,matMul:te,max:bi,maxPool:K2,maxPool3d:K6,maxPoolWithArgmax:X6,maximum:Y2,mean:Vl,meshgrid:P6,min:Ih,minimum:Hl,mirrorPad:tN,mod:nN,moments:rN,movingAverage:BE,mul:ct,multiRNNCell:iN,multinomial:uN,neg:ia,norm:tc,notEqual:X2,oneHot:fN,ones:hs,onesLike:pN,op:U,outerProduct:mN,pad:eu,pad1d:bN,pad2d:SN,pad3d:TN,pad4d:EN,pool:DN,pow:Xo,prelu:W2,print:x2,prod:RN,raggedGather:CN,raggedRange:BN,raggedTensorToTensor:IN,rand:jN,randomGamma:u5,randomNormal:P2,randomStandardNormal:f5,randomUniform:hp,randomUniformInt:d5,range:Wo,real:Po,reciprocal:y5,relu:ac,relu6:Z2,reshape:et,reverse:bs,reverse1d:T5,reverse2d:E5,reverse3d:x5,reverse4d:O5,rfft:dp,round:J2,rsqrt:$5,scalar:qt,scatterND:IE,searchSorted:lp,selu:z5,separableConv2d:M5,setdiff1dAsync:U5,sigmoid:ps,sign:L5,signal:H7,sin:V5,sinh:q5,slice:Rt,slice1d:G5,slice2d:Y5,slice3d:Q5,slice4d:P5,softmax:J5,softplus:H2,spaceToBatchND:Q2,sparse:G7,sparseToDense:VE,spectral:V7,split:Zo,sqrt:Ba,square:Xn,squaredDifference:ey,squeeze:ke,stack:La,step:ny,stridedSlice:cE,string:K7,sub:zt,sum:le,tan:hE,tanh:Uh,tensor:sa,tensor1d:Ke,tensor2d:xr,tensor3d:ay,tensor4d:pE,tensor5d:dE,tensor6d:mE,tensorScatterUpdate:bE,tile:Fo,topk:SE,transpose:jh,truncatedNormal:TE,unique:EE,unsortedSegmentSum:xE,unstack:ws,upperBound:OE,variable:DE,where:_r,whereAsync:sy,zeros:wi,zerosLike:_n},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const h9=(a,t,n,s=Le)=>{switch(a.op){case"BiasAdd":case"AddV2":case"Add":return[s.add(v("a",a,t,n),v("b",a,t,n))];case"AddN":return[s.addN(v("tensors",a,t,n))];case"FloorMod":case"Mod":return[s.mod(v("a",a,t,n),v("b",a,t,n))];case"Mul":return[s.mul(v("a",a,t,n),v("b",a,t,n))];case"RealDiv":case"Div":return[s.div(v("a",a,t,n),v("b",a,t,n))];case"DivNoNan":return[s.divNoNan(v("a",a,t,n),v("b",a,t,n))];case"FloorDiv":return[s.floorDiv(v("a",a,t,n),v("b",a,t,n))];case"Sub":return[s.sub(v("a",a,t,n),v("b",a,t,n))];case"Minimum":return[s.minimum(v("a",a,t,n),v("b",a,t,n))];case"Maximum":return[s.maximum(v("a",a,t,n),v("b",a,t,n))];case"Pow":return[s.pow(v("a",a,t,n),v("b",a,t,n))];case"SquaredDifference":return[s.squaredDifference(v("a",a,t,n),v("b",a,t,n))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const p9=(a,t,n,s=Le)=>{switch(a.op){case"Abs":case"ComplexAbs":return[s.abs(v("x",a,t,n))];case"Acos":return[s.acos(v("x",a,t,n))];case"Acosh":return[s.acosh(v("x",a,t,n))];case"Asin":return[s.asin(v("x",a,t,n))];case"Asinh":return[s.asinh(v("x",a,t,n))];case"Atan":return[s.atan(v("x",a,t,n))];case"Atan2":return[s.atan2(v("x",a,t,n),v("y",a,t,n))];case"Atanh":return[s.atanh(v("x",a,t,n))];case"Ceil":return[s.ceil(v("x",a,t,n))];case"Complex":return[s.complex(v("real",a,t,n),v("imag",a,t,n))];case"Cos":return[s.cos(v("x",a,t,n))];case"Cosh":return[s.cosh(v("x",a,t,n))];case"Elu":return[s.elu(v("x",a,t,n))];case"Erf":return[s.erf(v("x",a,t,n))];case"Exp":return[s.exp(v("x",a,t,n))];case"Expm1":return[s.expm1(v("x",a,t,n))];case"Floor":return[s.floor(v("x",a,t,n))];case"Log":return[s.log(v("x",a,t,n))];case"Log1p":return[s.log1p(v("x",a,t,n))];case"Imag":return[s.imag(v("x",a,t,n))];case"Neg":return[s.neg(v("x",a,t,n))];case"Reciprocal":return[s.reciprocal(v("x",a,t,n))];case"Real":return[s.real(v("x",a,t,n))];case"Relu":return[s.relu(v("x",a,t,n))];case"Round":return[s.round(v("x",a,t,n))];case"Selu":return[s.selu(v("x",a,t,n))];case"Sigmoid":return[s.sigmoid(v("x",a,t,n))];case"Sin":return[s.sin(v("x",a,t,n))];case"Sign":return[s.sign(v("x",a,t,n))];case"Sinh":return[s.sinh(v("x",a,t,n))];case"Softplus":return[s.softplus(v("x",a,t,n))];case"Sqrt":return[s.sqrt(v("x",a,t,n))];case"Square":return[s.square(v("x",a,t,n))];case"Tanh":return[s.tanh(v("x",a,t,n))];case"Tan":return[s.tan(v("x",a,t,n))];case"ClipByValue":return[s.clipByValue(v("x",a,t,n),v("clipValueMin",a,t,n),v("clipValueMax",a,t,n))];case"Relu6":return[s.relu6(v("x",a,t,n))];case"Rsqrt":return[s.rsqrt(Ue(a.inputNames[0],t,n))];case"LeakyRelu":return[s.leakyRelu(v("x",a,t,n),v("alpha",a,t,n))];case"Prelu":return[s.prelu(v("x",a,t,n),v("alpha",a,t,n))];case"IsNan":return[s.isNaN(Ue(a.inputNames[0],t,n))];case"IsInf":return[s.isInf(Ue(a.inputNames[0],t,n))];case"IsFinite":return[s.isFinite(Ue(a.inputNames[0],t,n))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cn(a,t,n=""){if(!(typeof a=="number"||typeof t=="number")){$(a.length===t.length,()=>n+` Shapes ${a} and ${t} must match`);for(let s=0;s<a.length;s++){const o=a[s],l=t[s];$(o<0||l<0||o===l,()=>n+` Shapes ${a} and ${t} must match`)}}}function Dg(a){return!(typeof a=="number"||a.some(t=>t<0))}function Vo(a,t,n){let s=Zh(a,n);const o=!Dg(s);if(o&&t.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${s}`);if(o&&t.forEach(l=>{s=Zh(l.shape,s)}),!Dg(s))throw new Error(`Non-fully-defined elementShape: ${s}`);return s}function Zh(a,t){if(typeof a=="number")return t;if(typeof t=="number")return a;if(a.length!==t.length)throw new Error(`Incompatible ranks during merge: ${a} vs. ${t}`);const n=[];for(let s=0;s<a.length;++s){const o=a[s],l=t[s];if(o>=0&&l>=0&&o!==l)throw new Error(`Incompatible shape during merge: ${a} vs. ${t}`);n[s]=o>=0?o:l}return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class d9{constructor(t,n,s,o,l,c,f){this.name=t,this.dtype=n,this.maxSize=s,this.elementShape=o,this.identicalElementShapes=l,this.dynamicSize=c,this.clearAfterRead=f,this.tensors=[],this.closed_=!1,this.idTensor=qt(0),ra(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach(n=>{(t==null||!t.has(n.tensor.id))&&n.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);const n=this.tensors[t];if(n.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(n.cleared=!0),n.read=!0,n.tensor}readMany(t){return t.map(n=>this.read(n))}write(t,n){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);const s=this.tensors[t]||{};if(n.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},
          because the value dtype is ${n.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=n.shape),Cn(this.elementShape,n.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),s.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(s.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);s.tensor=n,ra(n),s.written=!0,this.tensors[t]=s}writeMany(t,n){if(t.length!==n.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${n.length}.`);t.forEach((s,o)=>this.write(s,n[o]))}gather(t,n){if(n&&n!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${n}`);if(t)t=t.slice(0,this.size());else{t=[];for(let o=0;o<this.size();o++)t.push(o)}if(t.length===0)return sa([],[0].concat(this.elementShape));const s=this.readMany(t);return Cn(this.elementShape,s[0].shape,"TensorArray shape mismatch: "),La(s,0)}concat(t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(this.size()===0)return sa([],[0].concat(this.elementShape));const n=[];for(let o=0;o<this.size();o++)n.push(o);const s=this.readMany(n);return Cn(this.elementShape,s[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${s[0].shape})`),Ie(s,0)}scatter(t,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);if(t.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${n.shape[0]}`);const s=Math.max(...t);if(!this.dynamicSize&&s>=this.maxSize)throw new Error(`Max index must be < array size (${s}  vs. ${this.maxSize})`);this.writeMany(t,ws(n,0))}split(t,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);let s=0;const o=t.map(h=>(s+=h,s));if(s!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${s}, and tensor's shape is: ${n.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);const l=s===0?0:n.size/s,c=[];Mt(()=>{n=et(n,[1,s,l]);for(let h=0;h<t.length;++h){const y=[0,h===0?0:o[h-1],0],b=[1,t[h],l];c[h]=et(Rt(n,y,b),this.elementShape)}return c});const f=[];for(let h=0;h<t.length;h++)f[h]=h;this.writeMany(f,c)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ss{get id(){return this.idTensor.id}constructor(t,n,s,o=-1){this.tensors=t,this.elementShape=n,this.elementDtype=s,t!=null&&t.forEach(l=>{if(s!==l.dtype)throw new Error(`Invalid data types; op elements ${s}, but list elements ${l.dtype}`);Cn(n,l.shape,"TensorList shape mismatch: "),ra(l)}),this.idTensor=qt(0),this.maxNumElements=o,ra(this.idTensor)}copy(){return new Ss([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach(n=>{(t==null||!t.has(n.id))&&n.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,n,s=-1){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(s!==-1&&this.tensors.length!==s)throw new Error(`Operation expected a list with ${s} elements but got a list with ${this.tensors.length} elements.`);Cn(t,this.elementShape,"TensorList shape mismatch: ");const o=Vo(this.elementShape,this.tensors,t);return Mt(()=>{const l=this.tensors.map(c=>et(c,o));return La(l,0)})}popBack(t,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const s=Vo(this.elementShape,this.tensors,t),o=this.tensors.pop();return o.kept=!1,Cn(o.shape,t,"TensorList shape mismatch: "),et(o,s)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(Cn(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");ra(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(this.maxNumElements!==-1&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);const n=new Ss([],this.elementShape,this.elementDtype,this.maxNumElements);n.tensors.length=t;for(let s=0;s<Math.min(this.tensors.length,t);++s)n.tensors[s]=this.tensors[s];return n}getItem(t,n,s){if(s!==this.elementDtype)throw new Error(`Invalid data types; op elements ${s}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(this.tensors[t]==null)throw new Error(`element at index ${t} is null.`);Cn(this.tensors[t].shape,n,"TensorList shape mismatch: ");const o=Vo(this.elementShape,this.tensors,n);return et(this.tensors[t],o)}setItem(t,n){if(n.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${this.elementDtype}`);if(t<0||this.maxNumElements!==-1&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);Cn(this.elementShape,n.shape,"TensorList shape mismatch: "),ra(n),this.tensors[t]!=null&&(this.tensors[t].kept=!1),this.tensors[t]=n}gather(t,n,s){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);Cn(this.elementShape,s,"TensorList shape mismatch: "),t=t.slice(0,this.size());const o=Vo(this.elementShape,this.tensors,s);return t.length===0?sa([],[0].concat(o)):Mt(()=>{const l=t.map(c=>et(this.tensors[c],o));return La(l,0)})}concat(t,n){if(t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);Cn(this.elementShape,n,"TensorList shape mismatch: ");const s=Vo(this.elementShape,this.tensors,n);return this.size()===0?sa([],[0].concat(s)):Mt(()=>{const o=this.tensors.map(l=>et(l,s));return Ie(o,0)})}}function m9(a,t,n){const s=a.dtype;if(a.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${a.shape}`);if(a.dtype!==n)throw new Error(`Invalid data types; op elements ${a.dtype}, but list elements ${n}`);const o=a.shape.slice(1);Cn(o,t,"TensorList shape mismatch: ");const l=ws(a);return new Ss(l,t,s)}function g9(a,t,n,s){return new Ss([],a,t,s)}function y9(a,t,n,s){if(t.length!==a.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${a.shape[0]}`);const o=Math.max(...t);if(s!=null&&s!==-1&&o>=s)throw new Error(`Max index must be < array size (${o}  vs. ${s})`);const l=new Ss([],n,a.dtype,s),c=ws(a,0);return t.forEach((f,h)=>{l.setItem(f,c[h])}),l}function b9(a,t,n){let s=0;const o=t.map(y=>(s+=y,s));if(s!==a.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${s}, and tensor's shape is: ${a.shape}`);const l=a.shape.slice(1),c=Zh(l,n),f=s===0?0:a.size/s,h=Mt(()=>{const y=[];a=et(a,[1,s,f]);for(let b=0;b<t.length;++b){const N=[0,b===0?0:o[b-1],0],E=[1,t[b],f];y[b]=et(Rt(a,N,E),c)}return a.dispose(),y}),d=new Ss([],n,a.dtype,t.length);for(let y=0;y<h.length;y++)d.setItem(y,h[y]);return d}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const v9=async(a,t,n)=>{switch(a.op){case"If":case"StatelessIf":{const s=v("thenBranch",a,t,n),o=v("elseBranch",a,t,n),l=v("cond",a,t,n),c=v("args",a,t,n);return(await l.data())[0]?n.functionMap[s].executeFunctionAsync(c,n.tensorArrayMap,n.tensorListMap):n.functionMap[o].executeFunctionAsync(c,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const s=v("body",a,t,n),o=v("cond",a,t,n),l=v("args",a,t,n),c=await n.functionMap[o].executeFunctionAsync(l,n.tensorArrayMap,n.tensorListMap),f=l.map(y=>y.id);let h=await c[0].data();c.forEach(y=>{!y.kept&&f.indexOf(y.id)===-1&&y.dispose()});let d=l;for(;h[0];){const y=d;d=await n.functionMap[s].executeFunctionAsync(d,n.tensorArrayMap,n.tensorListMap);const b=d.map(N=>N.id);y.forEach(N=>{!N.kept&&f.indexOf(N.id)===-1&&b.indexOf(N.id)===-1&&N.dispose()});const S=await n.functionMap[o].executeFunctionAsync(d,n.tensorArrayMap,n.tensorListMap);h=await S[0].data(),S.forEach(N=>{!N.kept&&f.indexOf(N.id)===-1&&b.indexOf(N.id)===-1&&N.dispose()})}return d}case"LoopCond":{const s=v("pred",a,t,n);return[Da(s)]}case"Switch":{const s=v("pred",a,t,n);let o=v("data",a,t,n);return o.kept||(o=Da(o)),(await s.data())[0]?[void 0,o]:[o,void 0]}case"Merge":{const s=a.inputNames.find(o=>Ue(o,t,n)!==void 0);if(s){const o=Ue(s,t,n);return[Da(o)]}return}case"Enter":{const s=v("frameName",a,t,n),o=v("tensor",a,t,n);return n.enterFrame(s),[Da(o)]}case"Exit":{const s=v("tensor",a,t,n);return n.exitFrame(),[Da(s)]}case"NextIteration":{const s=v("tensor",a,t,n);return n.nextIteration(),[Da(s)]}case"TensorArrayV3":{const s=v("size",a,t,n),o=v("dtype",a,t,n),l=v("elementShape",a,t,n),c=v("dynamicSize",a,t,n),f=v("clearAfterRead",a,t,n),h=v("identicalElementShapes",a,t,n),d=v("name",a,t,n),y=new d9(d,o,s,l,h,c,f);return n.addTensorArray(y),[y.idTensor,qt(1)]}case"TensorArrayWriteV3":{const s=v("tensorArrayId",a,t,n),o=v("index",a,t,n),l=v("tensor",a,t,n),c=n.getTensorArray(s.id);return c.write(o,l),[c.idTensor]}case"TensorArrayReadV3":{const s=v("tensorArrayId",a,t,n),o=v("index",a,t,n);return[n.getTensorArray(s.id).read(o)]}case"TensorArrayGatherV3":{const s=v("tensorArrayId",a,t,n),o=v("indices",a,t,n),l=v("dtype",a,t,n);return[n.getTensorArray(s.id).gather(o,l)]}case"TensorArrayScatterV3":{const s=v("tensorArrayId",a,t,n),o=v("indices",a,t,n),l=v("tensor",a,t,n),c=n.getTensorArray(s.id);return c.scatter(o,l),[c.idTensor]}case"TensorArrayConcatV3":{const s=v("tensorArrayId",a,t,n),o=n.getTensorArray(s.id),l=v("dtype",a,t,n);return[o.concat(l)]}case"TensorArraySplitV3":{const s=v("tensorArrayId",a,t,n),o=v("tensor",a,t,n),l=v("lengths",a,t,n),c=n.getTensorArray(s.id);return c.split(l,o),[c.idTensor]}case"TensorArraySizeV3":{const s=v("tensorArrayId",a,t,n),o=n.getTensorArray(s.id);return[qt(o.size(),"int32")]}case"TensorArrayCloseV3":{const s=v("tensorArrayId",a,t,n),o=n.getTensorArray(s.id);return o.clearAndClose(),[o.idTensor]}case"TensorListSetItem":{const s=v("tensorListId",a,t,n),o=v("index",a,t,n),l=v("tensor",a,t,n),c=n.getTensorList(s.id);return c.setItem(o,l),[c.idTensor]}case"TensorListGetItem":{const s=v("tensorListId",a,t,n),o=v("index",a,t,n),l=v("elementShape",a,t,n),c=v("elementDType",a,t,n);return[n.getTensorList(s.id).getItem(o,l,c)]}case"TensorListScatterV2":case"TensorListScatter":{const s=v("indices",a,t,n),o=v("tensor",a,t,n),l=v("elementShape",a,t,n),c=v("numElements",a,t,n),f=y9(o,s,l,c);return n.addTensorList(f),[f.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const s=v("elementShape",a,t,n),o=v("elementDType",a,t,n);let l;a.op==="TensorListReserve"?l="numElements":l="maxNumElements";const c=v(l,a,t,n),f=a.op==="TensorListReserve"?-1:c,h=g9(s,o,c,f);return n.addTensorList(h),[h.idTensor]}case"TensorListGather":{const s=v("tensorListId",a,t,n),o=v("indices",a,t,n),l=v("elementShape",a,t,n),c=v("elementDType",a,t,n);return[n.getTensorList(s.id).gather(o,c,l)]}case"TensorListStack":{const s=v("tensorListId",a,t,n),o=v("elementShape",a,t,n),l=v("elementDType",a,t,n),c=v("numElements",a,t,n);return[n.getTensorList(s.id).stack(o,l,c)]}case"TensorListFromTensor":{const s=v("tensor",a,t,n),o=v("elementShape",a,t,n),l=v("elementDType",a,t,n),c=m9(s,o,l);return n.addTensorList(c),[c.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const s=v("tensorListId",a,t,n),o=n.getTensorList(s.id),l=v("dtype",a,t,n),c=v("elementShape",a,t,n);return[o.concat(l,c)]}case"TensorListPushBack":{const s=v("tensorListId",a,t,n),o=v("tensor",a,t,n),l=n.getTensorList(s.id);return l.pushBack(o),[l.idTensor]}case"TensorListPopBack":{const s=v("tensorListId",a,t,n),o=v("elementShape",a,t,n),l=v("elementDType",a,t,n);return[n.getTensorList(s.id).popBack(o,l)]}case"TensorListSplit":{const s=v("tensor",a,t,n),o=v("elementShape",a,t,n),l=v("lengths",a,t,n),c=b9(s,l,o);return n.addTensorList(c),[c.idTensor]}case"TensorListLength":{const s=v("tensorListId",a,t,n),o=n.getTensorList(s.id);return[qt(o.size(),"int32")]}case"TensorListResize":{const s=v("tensorListId",a,t,n),o=v("size",a,t,n),c=n.getTensorList(s.id).resize(o);return n.addTensorList(c),[c.idTensor]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kg(a,t,n){const[s,o]=v("fusedOps",a,t,n),l=s==="biasadd",c=!l,f=o==="prelu",h=s==="fusedbatchnorm",d=v("numArgs",a,t,n);if(l){if(f&&d!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!f&&l&&d!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(h)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const y=v("strides",a,t,n),b=zl(a,t,n),S=v("dataFormat",a,t,n).toUpperCase(),N=v("dilations",a,t,n);let[E,D]=v("args",a,t,n);c&&(D=E,E=void 0);const k=v("leakyreluAlpha",a,t,n);return{stride:y,pad:b,dataFormat:S,dilations:N,biasArg:E,preluArg:D,activationFunc:o,leakyreluAlpha:k}}const S9=(a,t,n,s=Le)=>{switch(a.op){case"Conv1D":{const o=v("stride",a,t,n),l=v("pad",a,t,n),c=v("dataFormat",a,t,n).toUpperCase(),f=v("dilation",a,t,n);return[s.conv1d(v("x",a,t,n),v("filter",a,t,n),o,l,c,f)]}case"Conv2D":{const o=v("strides",a,t,n),l=zl(a,t,n),c=v("dataFormat",a,t,n).toUpperCase(),f=v("dilations",a,t,n);return[s.conv2d(v("x",a,t,n),v("filter",a,t,n),[o[1],o[2]],l,c,[f[1],f[2]])]}case"_FusedConv2D":{const{stride:o,pad:l,dataFormat:c,dilations:f,biasArg:h,preluArg:d,activationFunc:y,leakyreluAlpha:b}=kg(a,t,n);return[s.fused.conv2d({x:v("x",a,t,n),filter:v("filter",a,t,n),strides:[o[1],o[2]],pad:l,dataFormat:c,dilations:[f[1],f[2]],bias:h,activation:y,preluActivationWeights:d,leakyreluAlpha:b})]}case"FusedDepthwiseConv2dNative":{const{stride:o,pad:l,dataFormat:c,dilations:f,biasArg:h,preluArg:d,activationFunc:y,leakyreluAlpha:b}=kg(a,t,n);return[s.fused.depthwiseConv2d({x:v("x",a,t,n),filter:v("filter",a,t,n),strides:[o[1],o[2]],pad:l,dataFormat:c,dilations:[f[1],f[2]],bias:h,activation:y,preluActivationWeights:d,leakyreluAlpha:b})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const o=v("outputShape",a,t,n),l=v("strides",a,t,n),c=zl(a,t,n);return[s.conv2dTranspose(v("x",a,t,n),v("filter",a,t,n),o,[l[1],l[2]],c)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const o=v("strides",a,t,n),l=zl(a,t,n),c=v("dilations",a,t,n),f=v("dataFormat",a,t,n).toUpperCase();return[s.depthwiseConv2d(v("input",a,t,n),v("filter",a,t,n),[o[1],o[2]],l,f,[c[1],c[2]])]}case"Conv3D":{const o=v("strides",a,t,n),l=v("pad",a,t,n),c=v("dataFormat",a,t,n).toUpperCase(),f=v("dilations",a,t,n);return[s.conv3d(v("x",a,t,n),v("filter",a,t,n),[o[1],o[2],o[3]],l,c,[f[1],f[2],f[3]])]}case"AvgPool":{const o=v("strides",a,t,n),l=v("pad",a,t,n),c=v("kernelSize",a,t,n);return[s.avgPool(v("x",a,t,n),[c[1],c[2]],[o[1],o[2]],l)]}case"MaxPool":{const o=v("strides",a,t,n),l=v("pad",a,t,n),c=v("kernelSize",a,t,n);return[s.maxPool(v("x",a,t,n),[c[1],c[2]],[o[1],o[2]],l)]}case"MaxPoolWithArgmax":{const o=v("strides",a,t,n),l=v("pad",a,t,n),c=v("kernelSize",a,t,n),f=v("includeBatchInIndex",a,t,n),{result:h,indexes:d}=s.maxPoolWithArgmax(v("x",a,t,n),[c[1],c[2]],[o[1],o[2]],l,f);return[h,d]}case"AvgPool3D":{const o=v("strides",a,t,n),l=v("pad",a,t,n),c=v("kernelSize",a,t,n);return[s.avgPool3d(v("x",a,t,n),[c[1],c[2],c[3]],[o[1],o[2],o[3]],l)]}case"MaxPool3D":{const o=v("strides",a,t,n),l=v("pad",a,t,n),c=v("kernelSize",a,t,n);return[s.maxPool3d(v("x",a,t,n),[c[1],c[2],c[3]],[o[1],o[2],o[3]],l)]}case"Dilation2D":{const o=v("strides",a,t,n),l=v("pad",a,t,n),c=v("dilations",a,t,n),f=o[1],h=o[2],d=c[1],y=c[2];return[s.dilation2d(v("x",a,t,n),v("filter",a,t,n),[f,h],l,[d,y],"NHWC")]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const w9=(a,t,n,s=Le)=>{switch(a.op){case"Fill":{const o=v("shape",a,t,n),l=v("dtype",a,t,n),c=v("value",a,t,n);return[s.fill(o,c,l)]}case"LinSpace":{const o=v("start",a,t,n),l=v("stop",a,t,n),c=v("num",a,t,n);return[s.linspace(o,l,c)]}case"Multinomial":{const o=v("logits",a,t,n),l=v("numSamples",a,t,n),c=v("seed",a,t,n);return[s.multinomial(o,l,c)]}case"OneHot":{const o=v("indices",a,t,n),l=v("depth",a,t,n),c=v("onValue",a,t,n),f=v("offValue",a,t,n),h=v("dtype",a,t,n);return[s.oneHot(o,l,c,f,h)]}case"Ones":return[s.ones(v("shape",a,t,n),v("dtype",a,t,n))];case"OnesLike":return[s.onesLike(v("x",a,t,n))];case"RandomStandardNormal":return[s.randomStandardNormal(v("shape",a,t,n),v("dtype",a,t,n),v("seed",a,t,n))];case"RandomUniform":return[s.randomUniform(v("shape",a,t,n),v("minval",a,t,n),v("maxval",a,t,n),v("dtype",a,t,n))];case"RandomUniformInt":return[s.randomUniformInt(v("shape",a,t,n),v("minval",a,t,n),v("maxval",a,t,n),v("seed",a,t,n))];case"Range":{const o=v("start",a,t,n),l=v("stop",a,t,n),c=v("step",a,t,n);return[s.range(o,l,c,v("dtype",a,t,n))]}case"TruncatedNormal":{const o=v("shape",a,t,n),l=v("mean",a,t,n),c=v("stdDev",a,t,n),f=v("seed",a,t,n);return[s.truncatedNormal(o,l,c,v("dtype",a,t,n),f)]}case"Zeros":return[s.zeros(v("shape",a,t,n),v("dtype",a,t,n))];case"ZerosLike":return[s.zerosLike(v("x",a,t,n))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hh(a,t,n){const s=v("boxes",a,t,n),o=v("scores",a,t,n),l=v("maxOutputSize",a,t,n),c=v("iouThreshold",a,t,n),f=v("scoreThreshold",a,t,n),h=v("softNmsSigma",a,t,n);return{boxes:s,scores:o,maxOutputSize:l,iouThreshold:c,scoreThreshold:f,softNmsSigma:h}}const T9=async(a,t,n,s,o=Le)=>{switch(a.op){case"NonMaxSuppressionV5":{const{boxes:l,scores:c,maxOutputSize:f,iouThreshold:h,scoreThreshold:d,softNmsSigma:y}=hh(a,t,n),b=await o.image.nonMaxSuppressionWithScoreAsync(l,c,f,h,d,y);return[b.selectedIndices,b.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:l,scores:c,maxOutputSize:f,iouThreshold:h,scoreThreshold:d}=hh(a,t,n),y=v("padToMaxOutputSize",a,t,n),b=await o.image.nonMaxSuppressionPaddedAsync(l,c,f,h,d,y);return[b.selectedIndices,b.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:l,scores:c,maxOutputSize:f,iouThreshold:h,scoreThreshold:d}=hh(a,t,n);return[await o.image.nonMaxSuppressionAsync(l,c,f,h,d)]}case"Where":{const l=o.cast(v("condition",a,t,n),"bool"),c=[await o.whereAsync(l)];return l.dispose(),c}case"ListDiff":return o.setdiff1dAsync(v("x",a,t,n),v("y",a,t,n));default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const N9=(a,t,n,s=Le)=>{switch(a.op){case"LowerBound":{const o=v("sortedSequence",a,t,n),l=v("values",a,t,n);return[s.lowerBound(o,l)]}case"TopKV2":{const o=v("x",a,t,n),l=v("k",a,t,n),c=v("sorted",a,t,n),f=s.topk(o,l,c);return[f.values,f.indices]}case"UpperBound":{const o=v("sortedSequence",a,t,n),l=v("values",a,t,n);return[s.upperBound(o,l)]}case"Unique":{const o=v("x",a,t,n),l=s.unique(o);return[l.values,l.indices]}case"UniqueV2":{const o=v("x",a,t,n),l=v("axis",a,t,n),c=s.unique(o,l);return[c.values,c.indices]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const E9=(a,t,n,s=Le)=>{switch(a.op){case"Const":return t[a.name];case"PlaceholderWithDefault":const o=v("default",a,t,n);return[Ue(a.name,t,n)||o];case"Placeholder":return[Ue(a.name,t,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const y=v("x",a,t,n);return[Da(y)]}case"IdentityN":return v("x",a,t,n).map(y=>Da(y));case"Snapshot":const l=v("x",a,t,n);return[Da(l)];case"Shape":return[s.tensor1d(v("x",a,t,n).shape,"int32")];case"ShapeN":return v("x",a,t,n).map(y=>s.tensor1d(y.shape));case"Size":return[s.scalar(v("x",a,t,n).size,"int32")];case"Rank":return[s.scalar(v("x",a,t,n).rank,"int32")];case"NoOp":return[s.scalar(1)];case"Print":const c=v("x",a,t,n),f=v("data",a,t,n),h=v("message",a,t,n),d=v("summarize",a,t,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(h);for(let y=0;y<f.length;y++)console.log(Array.prototype.slice.call(f[y].dataSync()).slice(0,d));return[c];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _9{get id(){return this.handle.id}constructor(t,n){this.keyDType=t,this.valueDType=n,this.handle=qt(0),this.tensorMap=new Map,ra(this.handle)}clearAndClose(){this.tensorMap.forEach(t=>t.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return qt(this.size(),"int32")}async import(t,n){this.checkKeyAndValueTensor(t,n);const s=await t.data();return this.tensorMap.forEach(o=>o.dispose()),this.tensorMap.clear(),Mt(()=>{const o=ws(n),l=s.length,c=o.length;$(l===c,()=>`The number of elements doesn't match, keys has ${l} elements, the values has ${c} elements.`);for(let f=0;f<l;f++){const h=s[f],d=o[f];ra(d),this.tensorMap.set(h,d)}return this.handle})}async find(t,n){this.checkKeyAndValueTensor(t,n);const s=await t.data();return Mt(()=>{const o=[];for(let l=0;l<s.length;l++){const c=s[l],f=this.findWithDefault(c,n);o.push(f)}return La(o)})}findWithDefault(t,n){const s=this.tensorMap.get(t);return s??n}checkKeyAndValueTensor(t,n){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);if(n.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${n.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const x9=async(a,t,n,s)=>{switch(a.op){case"HashTable":case"HashTableV2":{const o=s.getHashTableHandleByName(a.name);if(o!=null)return[o];{const l=v("keyDType",a,t,n),c=v("valueDType",a,t,n),f=new _9(l,c);return s.addHashTable(a.name,f),[f.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const o=v("tableHandle",a,t,n,s),l=v("keys",a,t,n),c=v("values",a,t,n);return[await s.getHashTableById(o.id).import(l,c)]}case"LookupTableFind":case"LookupTableFindV2":{const o=v("tableHandle",a,t,n,s),l=v("keys",a,t,n),c=v("defaultValue",a,t,n);return[await s.getHashTableById(o.id).find(l,c)]}case"LookupTableSize":case"LookupTableSizeV2":{const o=v("tableHandle",a,t,n,s);return[s.getHashTableById(o.id).tensorSize()]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const A9=(a,t,n,s=Le)=>{switch(a.op){case"ResizeBilinear":{const o=v("images",a,t,n),l=v("size",a,t,n),c=v("alignCorners",a,t,n),f=v("halfPixelCenters",a,t,n);return[s.image.resizeBilinear(o,[l[0],l[1]],c,f)]}case"ResizeNearestNeighbor":{const o=v("images",a,t,n),l=v("size",a,t,n),c=v("alignCorners",a,t,n),f=v("halfPixelCenters",a,t,n);return[s.image.resizeNearestNeighbor(o,[l[0],l[1]],c,f)]}case"CropAndResize":{const o=v("image",a,t,n),l=v("boxes",a,t,n),c=v("boxInd",a,t,n),f=v("cropSize",a,t,n),h=v("method",a,t,n),d=v("extrapolationValue",a,t,n);return[s.image.cropAndResize(o,l,c,f,h,d)]}case"ImageProjectiveTransformV3":{const o=v("images",a,t,n),l=v("transforms",a,t,n),c=v("outputShape",a,t,n),f=v("fillValue",a,t,n),h=v("interpolation",a,t,n),d=v("fillMode",a,t,n);return[s.image.transform(o,l,h.toLowerCase(),d.toLowerCase(),f,c)]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O9=(a,t,n,s=Le)=>{switch(a.op){case"Equal":return[s.equal(v("a",a,t,n),v("b",a,t,n))];case"NotEqual":return[s.notEqual(v("a",a,t,n),v("b",a,t,n))];case"Greater":return[s.greater(v("a",a,t,n),v("b",a,t,n))];case"GreaterEqual":return[s.greaterEqual(v("a",a,t,n),v("b",a,t,n))];case"Less":return[s.less(v("a",a,t,n),v("b",a,t,n))];case"LessEqual":return[s.lessEqual(v("a",a,t,n),v("b",a,t,n))];case"LogicalAnd":return[s.logicalAnd(v("a",a,t,n),v("b",a,t,n))];case"LogicalNot":return[s.logicalNot(v("a",a,t,n))];case"LogicalOr":return[s.logicalOr(v("a",a,t,n),v("b",a,t,n))];case"Select":case"SelectV2":return[s.where(v("condition",a,t,n),v("a",a,t,n),v("b",a,t,n))];case"BitwiseAnd":return[s.bitwiseAnd(v("a",a,t,n),v("b",a,t,n))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const D9=(a,t,n,s=Le)=>{switch(a.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[s.matMul(v("a",a,t,n),v("b",a,t,n),v("transposeA",a,t,n),v("transposeB",a,t,n))];case"Einsum":return[s.einsum(v("equation",a,t,n),...v("tensors",a,t,n))];case"Transpose":return[s.transpose(v("x",a,t,n),v("perm",a,t,n))];case"_FusedMatMul":const[o,l]=v("fusedOps",a,t,n),c=o==="biasadd",f=l==="prelu",h=v("numArgs",a,t,n),d=v("leakyreluAlpha",a,t,n);if(c){if(f&&h!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!f&&h!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[y,b]=v("args",a,t,n);return[s.fused.matMul({a:v("a",a,t,n),b:v("b",a,t,n),transposeA:v("transposeA",a,t,n),transposeB:v("transposeB",a,t,n),bias:y,activation:l,preluActivationWeights:b,leakyreluAlpha:d})];case"MatrixBandPart":return[s.linalg.bandPart(v("a",a,t,n),v("numLower",a,t,n),v("numUpper",a,t,n))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const k9=(a,t,n,s=Le)=>{switch(a.op){case"EuclideanNorm":return[s.euclideanNorm(v("x",a,t,n),v("axis",a,t,n),v("keepDims",a,t,n))];case"FusedBatchNorm":case"FusedBatchNormV2":return[s.batchNorm(v("x",a,t,n),v("mean",a,t,n),v("variance",a,t,n),v("offset",a,t,n),v("scale",a,t,n),v("epsilon",a,t,n))];case"FusedBatchNormV3":return[s.batchNorm(v("x",a,t,n),v("mean",a,t,n),v("variance",a,t,n),v("offset",a,t,n),v("scale",a,t,n),v("epsilon",a,t,n))];case"LRN":return[s.localResponseNormalization(v("x",a,t,n),v("radius",a,t,n),v("bias",a,t,n),v("alpha",a,t,n),v("beta",a,t,n))];case"Softmax":return[s.softmax(v("x",a,t,n))];case"LogSoftmax":return[s.logSoftmax(v("x",a,t,n))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $9=(a,t,n,s=Le)=>{switch(a.op){case"RaggedGather":{const{outputNestedSplits:o,outputDenseValues:l}=s.raggedGather(v("paramsNestedSplits",a,t,n),v("paramsDenseValues",a,t,n),v("indices",a,t,n),v("outputRaggedRank",a,t,n));return o.concat(l)}case"RaggedRange":{const{rtNestedSplits:o,rtDenseValues:l}=s.raggedRange(v("starts",a,t,n),v("limits",a,t,n),v("splits",a,t,n));return[o,l]}case"RaggedTensorToTensor":return[s.raggedTensorToTensor(v("shape",a,t,n),v("values",a,t,n),v("defaultValue",a,t,n),v("rowPartitionTensors",a,t,n),v("rowPartitionTypes",a,t,n))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const R9=(a,t,n,s=Le)=>{switch(a.op){case"Max":{const f=v("axis",a,t,n),h=v("keepDims",a,t,n);return[s.max(v("x",a,t,n),f,h)]}case"Mean":{const f=v("axis",a,t,n),h=v("keepDims",a,t,n);return[s.mean(v("x",a,t,n),f,h)]}case"Min":{const f=v("axis",a,t,n),h=v("keepDims",a,t,n);return[s.min(v("x",a,t,n),f,h)]}case"Sum":{const f=v("axis",a,t,n),h=v("keepDims",a,t,n);return[s.sum(v("x",a,t,n),f,h)]}case"All":{const f=v("axis",a,t,n),h=v("keepDims",a,t,n);return[s.all(v("x",a,t,n),f,h)]}case"Any":{const f=v("axis",a,t,n),h=v("keepDims",a,t,n);return[s.any(v("x",a,t,n),f,h)]}case"ArgMax":{const f=v("axis",a,t,n);return[s.argMax(v("x",a,t,n),f)]}case"ArgMin":{const f=v("axis",a,t,n);return[s.argMin(v("x",a,t,n),f)]}case"Prod":{const f=v("axis",a,t,n),h=v("keepDims",a,t,n);return[s.prod(v("x",a,t,n),f,h)]}case"Cumprod":{const f=v("axis",a,t,n),h=v("exclusive",a,t,n),d=v("reverse",a,t,n);return[s.cumprod(v("x",a,t,n),f,h,d)]}case"Cumsum":{const f=v("axis",a,t,n),h=v("exclusive",a,t,n),d=v("reverse",a,t,n);return[s.cumsum(v("x",a,t,n),f,h,d)]}case"Bincount":const o=v("x",a,t,n),l=v("weights",a,t,n),c=v("size",a,t,n);return[s.bincount(o,l,c)];case"DenseBincount":{const f=v("x",a,t,n),h=v("weights",a,t,n),d=v("size",a,t,n),y=v("binaryOutput",a,t,n);return[s.denseBincount(f,h,d,y)]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const z9=(a,t,n,s=Le)=>{switch(a.op){case"ConcatV2":case"Concat":{const o=v("n",a,t,n),l=v("axis",a,t,n);let c=v("tensors",a,t,n);return c=c.slice(0,o),[s.concat(c,l)]}case"Gather":{const o=v("x",a,t,n),l=v("indices",a,t,n);return[s.gather(o,s.cast(l,"int32"),0)]}case"GatherV2":{const o=v("axis",a,t,n),l=v("batchDims",a,t,n),c=v("x",a,t,n),f=v("indices",a,t,n);return[s.gather(c,s.cast(f,"int32"),o,l)]}case"Reverse":{const o=v("dims",a,t,n),l=[];for(let f=0;f<o.length;f++)o[f]&&l.push(f);const c=v("x",a,t,n);return[s.reverse(c,l)]}case"ReverseV2":{const o=v("axis",a,t,n),l=v("x",a,t,n);return[s.reverse(l,o)]}case"Slice":{const o=v("begin",a,t,n),l=v("size",a,t,n);return[s.slice(v("x",a,t,n),o,l)]}case"StridedSlice":{const o=v("begin",a,t,n),l=v("end",a,t,n),c=v("strides",a,t,n),f=v("beginMask",a,t,n),h=v("endMask",a,t,n),d=v("ellipsisMask",a,t,n),y=v("newAxisMask",a,t,n),b=v("shrinkAxisMask",a,t,n),S=v("x",a,t,n);return[s.stridedSlice(S,o,l,c,f,h,d,y,b)]}case"Pack":return Mt(()=>{const o=v("axis",a,t,n),l=v("tensors",a,t,n),c=l[0].shape,f=s.squeeze(l[0]).shape,h=l.map(d=>{const y=Ca(d.shape,c);if(!y&&!Ca(s.squeeze(d).shape,f))throw new Error("the input tensors shape does not match");return y?d:s.reshape(d,c)});return[s.stack(h,o)]});case"Unpack":{const o=v("axis",a,t,n),l=v("tensor",a,t,n);return s.unstack(l,o)}case"Tile":{const o=v("reps",a,t,n);return[s.tile(v("x",a,t,n),o)]}case"Split":case"SplitV":{const o=v("axis",a,t,n),l=v("numOrSizeSplits",a,t,n),c=v("x",a,t,n);return s.split(c,l,o)}case"ScatterNd":{const o=v("indices",a,t,n),l=v("values",a,t,n),c=v("shape",a,t,n);return[s.scatterND(o,l,c)]}case"GatherNd":{const o=v("x",a,t,n),l=v("indices",a,t,n);return[s.gatherND(o,l)]}case"SparseToDense":{const o=v("sparseIndices",a,t,n),l=v("outputShape",a,t,n),c=v("sparseValues",a,t,n),f=v("defaultValue",a,t,n);return[s.sparseToDense(o,c,l,c.dtype===f.dtype?f:s.cast(f,c.dtype))]}case"TensorScatterUpdate":{const o=v("indices",a,t,n),l=v("values",a,t,n),c=v("tensor",a,t,n);return[s.tensorScatterUpdate(c,o,l)]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const C9=(a,t,n,s=Le)=>{switch(a.op){case"SparseFillEmptyRows":{const{outputIndices:o,outputValues:l,emptyRowIndicator:c,reverseIndexMap:f}=s.sparse.sparseFillEmptyRows(v("indices",a,t,n),v("values",a,t,n),v("denseShape",a,t,n),v("defaultValue",a,t,n));return[o,l,c,f]}case"SparseReshape":{const{outputIndices:o,outputShape:l}=s.sparse.sparseReshape(v("inputIndices",a,t,n),v("inputShape",a,t,n),v("newShape",a,t,n));return[o,l]}case"SparseSegmentMean":return[s.sparse.sparseSegmentMean(v("data",a,t,n),v("indices",a,t,n),v("segmentIds",a,t,n))];case"SparseSegmentSum":return[s.sparse.sparseSegmentSum(v("data",a,t,n),v("indices",a,t,n),v("segmentIds",a,t,n))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const M9=(a,t,n,s=Le)=>{switch(a.op){case"FFT":return[s.fft(v("x",a,t,n))];case"IFFT":return[s.ifft(v("x",a,t,n))];case"RFFT":return[s.rfft(v("x",a,t,n))];case"IRFFT":return[s.irfft(v("x",a,t,n))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const B9=(a,t,n,s=Le)=>{switch(a.op){case"StaticRegexReplace":return[s.string.staticRegexReplace(v("input",a,t,n),v("pattern",a,t,n),v("rewrite",a,t,n),v("replaceGlobal",a,t,n))];case"StringNGrams":{const{nGrams:o,nGramsSplits:l}=s.string.stringNGrams(v("data",a,t,n),v("dataSplits",a,t,n),v("separator",a,t,n),v("nGramWidths",a,t,n),v("leftPad",a,t,n),v("rightPad",a,t,n),v("padWidth",a,t,n),v("preserveShortSequences",a,t,n));return[o,l]}case"StringSplit":{const{indices:o,values:l,shape:c}=s.string.stringSplit(v("input",a,t,n),v("delimiter",a,t,n),v("skipEmpty",a,t,n));return[o,l,c]}case"StringToHashBucketFast":return[s.string.stringToHashBucketFast(v("input",a,t,n),v("numBuckets",a,t,n))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const U9=(a,t,n,s=Le)=>{switch(a.op){case"Cast":return[s.cast(v("x",a,t,n),v("dtype",a,t,n))];case"ExpandDims":{const o=v("axis",a,t,n);return[s.expandDims(v("x",a,t,n),o)]}case"Squeeze":{const o=v("axis",a,t,n);return[s.squeeze(v("x",a,t,n),o)]}case"Reshape":return[s.reshape(v("x",a,t,n),v("shape",a,t,n))];case"EnsureShape":return[s.ensureShape(v("x",a,t,n),v("shape",a,t,n))];case"MirrorPad":return[s.mirrorPad(v("x",a,t,n),v("padding",a,t,n),v("mode",a,t,n))];case"PadV2":case"Pad":return[s.pad(v("x",a,t,n),v("padding",a,t,n),v("constantValue",a,t,n))];case"SpaceToBatchND":{const o=v("blockShape",a,t,n),l=v("paddings",a,t,n);return[s.spaceToBatchND(v("x",a,t,n),o,l)]}case"BatchToSpaceND":{const o=v("blockShape",a,t,n),l=v("crops",a,t,n);return[s.batchToSpaceND(v("x",a,t,n),o,l)]}case"DepthToSpace":{const o=v("blockSize",a,t,n),l=v("dataFormat",a,t,n).toUpperCase();return[s.depthToSpace(v("x",a,t,n),o,l)]}case"BroadcastTo":return[s.broadcastTo(v("x",a,t,n),v("shape",a,t,n))];case"BroadcastArgs":return[s.broadcastArgs(v("s0",a,t,n),v("s1",a,t,n))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $g(a,t,n,s,o=Mt){const l=((c,f,h)=>{switch(c.category){case"arithmetic":return o(()=>h9(c,f,h));case"basic_math":return o(()=>p9(c,f,h));case"control":return v9(c,f,h);case"convolution":return o(()=>S9(c,f,h));case"creation":return o(()=>w9(c,f,h));case"dynamic":return T9(c,f,h);case"evaluation":return o(()=>N9(c,f,h));case"image":return o(()=>A9(c,f,h));case"graph":return o(()=>E9(c,f,h));case"logical":return o(()=>O9(c,f,h));case"matrices":return o(()=>D9(c,f,h));case"normalization":return o(()=>k9(c,f,h));case"ragged":return o(()=>$9(c,f,h));case"reduction":return o(()=>R9(c,f,h));case"slice_join":return o(()=>z9(c,f,h));case"sparse":return o(()=>C9(c,f,h));case"spectral":return o(()=>M9(c,f,h));case"string":return o(()=>B9(c,f,h));case"transformation":return o(()=>U9(c,f,h));case"hash_table":return x9(c,f,h,s);case"custom":const d=by(c.op);if(d&&d.customExecutor)return d.customExecutor(new f9(c,f,h));throw TypeError(`Custom op ${c.op} is not registered.`);default:throw TypeError(`Unknown op '${c.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(a,t,n);return ds(l)?l.then(c=>[].concat(c)):[].concat(l)}class Rg{constructor(t={},n={},s={},o={},l){this.weightMap=t,this.tensorArrayMap=n,this.tensorListMap=s,this.functionMap=o,this.parseNodeNameCache=l,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,n){return{id:t,frameName:n,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const t=[];for(let n=0;n<this.contexts.length-1;n++){const s=this.contexts.slice(0,this.contexts.length-n);t.push(this.contextIdforContexts(s))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map(n=>n.id===0&&n.iterationId===0?"":`${n.frameName}-${n.iterationId}`).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(const n in this.tensorArrayMap)this.tensorArrayMap[n].clearAndClose(t);for(const n in this.tensorListMap)this.tensorListMap[n].clearAndClose(t)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zg(a,t,n,s){const o=new Set,l=[];let c=null,f=null;const h=new Set,d=new Set(Object.keys(a).map(S=>mn(S)[0]));s=s||[];const y=new Set(s.map(S=>mn(S.name)[0])),b=[...t];for(;b.length>0;){const S=b.pop();if((cs(S)||G9(S)||K9(S))&&c==null&&(c=S,f=c.children.map(N=>N.name).filter(N=>o.has(N))),o.add(S.name),n[S.name]==null&&!d.has(S.name)&&!y.has(S.name)){if(S.inputs.length===0){l.push(S.name);continue}S.inputs.forEach(N=>{h.has(N.name)||(h.add(N.name),b.push(N))})}}return{inputs:a,outputs:t,usedNodes:o,missingInputs:l,dynamicNode:c,syncInputs:f}}function I9(a,t){const{usedNodes:n,inputs:s}=t,o=Object.keys(s).map(k=>mn(k)[0]).map(k=>a.nodes[k]),l=a.initNodes||[],c=k=>n.has(typeof k=="string"?k:k.name);function f(k){return[...new Map(k.map(z=>[z.name,z])).values()]}const h=f([...o,...a.weights,...l]).filter(c),d=f([...h,...Object.values(a.nodes)]).filter(c),y=new Map(d.map(k=>[k.name,k])),b={};for(const k of d){b[k.name]=b[k.name]||0;for(const z of k.children)c(z)||(b[z.name]=Number.POSITIVE_INFINITY),b[z.name]=(b[z.name]||0)+1}const S=Object.entries(b).filter(([,k])=>k===0).map(([k])=>k),N=[...S];for(;S.length>0;){const k=S.pop(),z=y.get(k);for(const Z of z.children.filter(c))--b[Z.name]===0&&(N.push(Z.name),S.push(Z.name))}const E=N.map(k=>y.get(k)),D=L9(E,h);return j9(D,h),D}function L9(a,t){const n=new Map(a.map(c=>[c.name,c])),s=t.map(c=>c.name),o=new Set(s);for(;s.length>0;){const c=s.pop(),f=n.get(c);for(const h of f.children)!n.has(h.name)||o.has(h.name)||(o.add(h.name),s.push(h.name))}return a.filter(c=>o.has(c.name))}class wl extends Error{constructor(t){super(`NodesExecutionOrderError: ${t}`)}}function j9(a,t){const n=new Map(a.map((f,h)=>[f.name,h])),s=new Set(t.map(f=>f.name)),o=f=>s.has(typeof f=="string"?f:f.name),l=new Set(a.map(f=>f.name)),c=f=>l.has(typeof f=="string"?f:f.name);for(const f of a){for(const h of f.children.filter(c)){if(!n.has(h.name))throw new wl(`Child ${h.name} of node ${f.name} is unreachable.`);if(n.get(f.name)>n.get(h.name))throw new wl(`Node ${f.name} is scheduled to run after its child ${h.name}.`)}if(!o(f))for(const h of f.inputs){if(!n.has(h.name))throw new wl(`Input ${h.name} of node ${f.name} is unreachable.`);if(n.get(h.name)>n.get(f.name))throw new wl(`Node ${f.name} is scheduled to run before its input ${h.name}.`)}}}function V9(a){const t=new Map(a.map((f,h)=>[f.name,h])),n=Number.MAX_SAFE_INTEGER,s=a.map((f,h)=>cs(f)?n:h),o=f=>{const h=s[t.get(f.name)];return h??-1},l=a.map((f,h)=>f.children.map(o).reduce((d,y)=>Math.max(d,y),s[h])),c=new Map;for(let f=0;f<a.length;++f){const h=l[f];if(h===n)continue;const d=a[f],y=a[h];c.has(y.name)||c.set(y.name,[]),c.get(y.name).push(d)}return c}const H9=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),q9=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),F9=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function cs(a){return H9.has(a.op)}function G9(a){return q9.has(a.op)}function K9(a){return F9.has(a.op)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Gl{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){const n=Object.keys(t).map(s=>t[s].map(o=>o.id));this._weightIds=[].concat(...n),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(t=>t.signatureKey||t.name)}get outputNodes(){return this._outputs.map(t=>{const n=t.signatureKey||t.name;return t.defaultOutput?`${n}:${t.defaultOutput}`:n})}get functions(){return Object.keys(this._functions).reduce((t,n)=>(t[n]=this._functions[n].signature,t),{})}constructor(t,n){this.graph=t,this.parent=n,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,t.functions!=null&&Object.keys(t.functions).forEach(s=>{this._functionExecutorMap[s]=new Gl(t.functions[s],this)})}getCompilationKey(t,n){const s=t.map(l=>l.name).sort(),o=n.map(l=>l.name).sort();return s.join(this.SEPARATOR)+"--"+o.join(this.SEPARATOR)}compile(t,n){const s=zg(t,n,this.weightMap,this._initNodes),{missingInputs:o,dynamicNode:l,syncInputs:c}=s;if(l!=null)throw new Error(`This execution contains the node '${l.name}', which has the dynamic op '${l.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${c}]`);if(o.length>0){const d=n.map(b=>b.name),y=Object.keys(t);throw new Error(`Cannot compute the outputs [${d}] from the provided inputs [${y}]. Missing the following inputs: [${o}]`)}const f=I9(this.graph,s),h=V9(f);return{orderedNodes:f,nodeLiveUntilMap:h}}cloneAndKeepTensor(t){if(t==null)return null;const n=t.clone();return ra(n),n}cloneTensorList(t){return t?t.map(s=>this.cloneAndKeepTensor(s)):null}cloneTensorMap(t){return Object.fromEntries(Object.entries(t).map(([n,s])=>[n,this.cloneTensorList(s)]))}execute(t,n){this.disposeIntermediateTensors(),t=this.mapInputs(t);const s=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),n=this.mapOutputs(n),this.checkOutputs(n);const o=s.map(S=>this.graph.nodes[mn(S)[0]]),l=n.map(S=>mn(S)[0]),c=new Set(l);let f=l.map(S=>this.graph.nodes[S]);f.length===0&&(f=this._outputs);const h=this.getCompilationKey(o,f);let d=this.compiledMap.get(h);d==null&&(d=this.compile(t,f),this.compiledMap.set(h,d));try{this.keepIntermediateTensors=Lt().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(S){this.keepIntermediateTensors=!1,console.warn(S.message)}const y={},b={};return Mt(()=>{const S=new Rg(this.weightMap,y,b,this.functionExecutorMap,this.parseNodeNameCache),N=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(t).forEach(z=>{const[Z,P]=mn(z,S),H=[];H[P]=t[z],N[Z]=H,this.keepIntermediateTensors&&(this.clonedTensorsMap[Z]=this.cloneTensorList(H))});const E=this.getFrozenTensorIds(N),{orderedNodes:D,nodeLiveUntilMap:k}=d;for(const z of D){if(N[z.name])continue;const Z=$g(z,N,S,this._resourceManager);if(ds(Z))throw new Error(`The execution of the op '${z.op}' returned a promise. Please use model.executeAsync() instead.`);N[z.name]=Z,this.keepIntermediateTensors&&(this.clonedTensorsMap[z.name]=this.cloneTensorList(Z)),this.checkTensorForDisposalWithNodeLiveUntilInfo(z,N,S,E,c,k.get(z.name))}return this.parent==null&&S.dispose(E),n.map(z=>Ue(z,N,S))})}getFrozenTensorIds(t){const n=[].concat.apply([],Object.keys(t).map(s=>t[s]).map(s=>s.map(o=>o.id)));return new Set(n)}checkTensorForDisposal(t,n,s,o,l,c,f){if(!(cs(n)||c.has(t))){for(const h of s[t])h!=null&&(f[h.id]=(f[h.id]||0)+n.children.length);for(const h of n.inputs){if(cs(h))continue;const d=xg(h.name,s,o);if(d!=null)for(const y of d){if(!y||y.kept||l.has(y.id))continue;const b=f[y.id];b===1?(y.dispose(),delete f[y.id]):b!=null&&f[y.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(t,n,s,o,l,c){function f(h){return cs(h)||l.has(h.name)}if(!(cs(t)||c==null))for(const h of c){if(f(h))continue;const d=xg(h.name,n,s);for(const y of d)!y||y.kept||o.has(y.id)||y.dispose()}}async executeAsync(t,n){return this._executeAsync(t,n)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(t=>{for(const n of t)n&&!n.isDisposed&&n.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(t,n,s=!1,o={},l={}){this.disposeIntermediateTensors(),s||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),n=this.mapOutputs(n),this.checkOutputs(n));try{this.keepIntermediateTensors=Lt().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(S){this.keepIntermediateTensors=!1,console.warn(S.message)}const c=new Rg(this.weightMap,o,l,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const f=await this.executeWithControlFlow(t,c,n,s),h=n.map(S=>Ue(S,f,c)),d=h.map(S=>S.id),y=Object.keys(t).map(S=>t[S].id),b=new Set([...d,...y,...this.weightIds]);return Object.values(f).forEach(S=>{S.forEach(N=>{N&&!N.isDisposed&&!b.has(N.id)&&N.dispose()})}),this.parent==null&&c.dispose(b),h}async executeFunctionAsync(t,n,s){const o=t.reduce((l,c,f)=>(l[this.inputs[f].name]=c,l),{});return this._executeAsync(o,this.outputNodes,!0,n,s)}async executeWithControlFlow(t,n,s,o){const l=Object.keys(t),c=l.map(H=>this.graph.nodes[mn(H)[0]]),f=s.map(H=>mn(H)[0]),h=new Set(f);let d=f.map(H=>this.graph.nodes[H]);d.length===0&&(d=this._outputs);const{usedNodes:y,missingInputs:b,dynamicNode:S,syncInputs:N}=zg(t,d,this.weightMap,this._initNodes),E=[...c,...this.graph.weights,...this._initNodes||[]].map(H=>({node:H,contexts:n.currentContext})),D=Object.assign({},this.weightMap);Object.keys(t).forEach(H=>{const[G,Q]=mn(H),st=[];st[Q]=t[H],D[G]=st});const k={},z=this.getFrozenTensorIds(D),Z={};for(;E.length>0;){const H=this.processStack(c,E,n,D,Z,z,h,k,y);await Promise.all(H)}S==null&&!o&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const P=d.filter(H=>!cs(H)&&!Ue(H.name,D,n)).map(H=>H.name);if(P.length>0){let H="";throw S!=null&&(H=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${N}]`),new Error(`Cannot compute the outputs [${P}] from the provided inputs [${l}]. Consider providing the following inputs: [${b}]. ${H}`)}return D}processStack(t,n,s,o,l,c,f,h,d){const y=[];for(;n.length>0;){const b=n.pop();s.currentContext=b.contexts;let S="";if(b.node.op==="Enter"&&v("isConstant",b.node,o,s)&&([S]=Oa(b.node.name,s)),o[b.node.name]==null){const N=$g(b.node,o,s,this._resourceManager);S||([S]=Oa(b.node.name,s));const E=s.currentContext;ds(N)?y.push(N.then(D=>(o[S]=D,this.keepIntermediateTensors&&(this.clonedTensorsMap[S]=this.cloneTensorList(D)),s.currentContext=E,this.checkTensorForDisposal(S,b.node,o,s,c,f,h),this.processChildNodes(b.node,n,s,o,l,d),D))):(o[S]=N,this.keepIntermediateTensors&&(this.clonedTensorsMap[S]=this.cloneTensorList(N)),this.checkTensorForDisposal(S,b.node,o,s,c,f,h),this.processChildNodes(b.node,n,s,o,l,d))}else this.processChildNodes(b.node,n,s,o,l,d)}return y}processChildNodes(t,n,s,o,l,c){t.children.forEach(f=>{const[h]=Oa(f.name,s);l[h]||!c.has(f.name)||(f.op==="Merge"?f.inputNames.some(d=>!!Ue(d,o,s))&&(l[h]=!0,n.push({contexts:s.currentContext,node:f})):f.inputNames.every(d=>!!Ue(d,o,s))&&(l[h]=!0,n.push({contexts:s.currentContext,node:f})))})}dispose(){Object.keys(this.weightMap).forEach(t=>this.weightMap[t].forEach(n=>n.dispose()))}checkInputShapeAndType(t){Object.keys(t).forEach(n=>{const s=t[n],[o]=mn(n),l=this.graph.nodes[o];if(l.attrParams.shape&&l.attrParams.shape.value){const c=l.attrParams.shape.value,f=c.length===s.shape.length&&s.shape.every((h,d)=>c[d]===-1||c[d]===h);$(f,()=>`The shape of dict['${l.name}'] provided in model.execute(dict) must be [${c}], but was [${s.shape}]`)}l.attrParams.dtype&&l.attrParams.dtype.value&&$(s.dtype===l.attrParams.dtype.value,()=>`The dtype of dict['${l.name}'] provided in model.execute(dict) must be ${l.attrParams.dtype.value}, but was ${s.dtype}`)})}mapInputs(t){var n,s;const o={};for(const l in t){const c=(s=(n=this._signature)===null||n===void 0?void 0:n.inputs)===null||s===void 0?void 0:s[l];c!=null?o[c.name]=t[l]:o[l]=t[l]}return o}checkInputs(t){const n=Object.keys(t).filter(s=>{const[o]=mn(s);return this.graph.nodes[o]==null});if(n.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${n}] that are not part of graph`)}mapOutputs(t){return t.map(n=>{var s,o;const l=(o=(s=this._signature)===null||s===void 0?void 0:s.outputs)===null||o===void 0?void 0:o[n];return l!=null?l.name:n},{})}checkOutputs(t){t.forEach(n=>{const[s]=mn(n);if(!this.graph.nodes[s])throw new Error(`The output '${n}' is not found in the graph`)})}}class Y9{constructor(t={},n={}){this.hashTableNameToHandle=t,this.hashTableMap=n}addHashTable(t,n){this.hashTableNameToHandle[t]=n.handle,this.hashTableMap[n.id]=n}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(const t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(const t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const X9="?tfjs-format=file",Q9="model.json";class W9{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(t,n={},s=my){this.modelUrl=t,this.loadOptions=n,this.version="n/a",this.io=s,n==null&&(this.loadOptions={}),this.resourceManager=new Y9}findIOHandler(){const t=this.modelUrl;if(t.load!=null)this.handler=t;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(t,this.loadOptions);else{const n=this.io.getLoadHandlers(t,this.loadOptions);if(n.length===0)n.push(this.io.browserHTTPRequest(t,this.loadOptions));else if(n.length>1)throw new Error(`Found more than one (${n.length}) load handlers for URL '${[t]}'`);this.handler=n[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const t=this.handler.load();return ds(t)?t.then(n=>n.getWeightStream==null?this.loadSync(n):this.loadStreaming(n)):this.loadSync(t)}loadSync(t){const n=this.io.decodeWeights(t.weightData,t.weightSpecs);return this.loadWithWeightMap(t,n)}async loadStreaming(t){if(t.getWeightStream==null)throw new Error("Model artifacts missing streamWeights function");const n=await g2(t.getWeightStream(),t.weightSpecs);return this.loadWithWeightMap(t,n)}loadWithWeightMap(t,n){this.artifacts=t;const s=this.artifacts.modelTopology;let o=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const l=this.artifacts.userDefinedMetadata;l.signature!=null&&(o=l.signature),l.structuredOutputKeys!=null&&(this.structuredOutputKeys=l.structuredOutputKeys)}if(this.signature=o,this.version=`${s.versions.producer}.${s.versions.minConsumer}`,this.executor=new Gl(Ag.Instance.transformGraph(s,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(n),this.executor.resourceManager=this.resourceManager,t.modelInitializer!=null&&t.modelInitializer.node!=null){const l=Ag.Instance.transformGraph(t.modelInitializer);this.initializer=new Gl(l),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=t.initializerSignature}return!0}async save(t,n){if(typeof t=="string"){const s=this.io.getSaveHandlers(t);if(s.length===0)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(s.length>1)throw new Error(`Found more than one (${s.length}) save handlers for URL '${t}'`);t=s[0]}if(t.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}addStructuredOutputNames(t){if(this.structuredOutputKeys){const n=t instanceof me?[t]:t,s={};return n.forEach((o,l)=>s[this.structuredOutputKeys[l]]=o),s}return t}predict(t,n){const s=this.execute(t,this.outputNodes);return this.addStructuredOutputNames(s)}async predictAsync(t,n){const s=await this.executeAsync(t,this.outputNodes);return this.addStructuredOutputNames(s)}normalizeInputs(t){var n;if(!(t instanceof me)&&!Array.isArray(t)){const l=(n=this.signature)===null||n===void 0?void 0:n.inputs;if(l!=null)for(const c in l){const f=l[c];f.resourceId!=null&&(t[c]=this.resourceIdToCapturedInput[f.resourceId])}return t}t=Array.isArray(t)?t:[t];const s=Object.keys(this.resourceIdToCapturedInput).length;if(t.length+s!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-s} non-resource placeholders, while there are ${t.length} input tensors provided.`);let o=0;return this.inputNodes.reduce((l,c)=>{var f,h,d;const y=(d=(h=(f=this.signature)===null||f===void 0?void 0:f.inputs)===null||h===void 0?void 0:h[c])===null||d===void 0?void 0:d.resourceId;return y!=null?l[c]=this.resourceIdToCapturedInput[y]:l[c]=t[o++],l},{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(t){if(this.resourceIdToCapturedInput={},this.initializerSignature){const n=this.initializerSignature.outputs,s=Object.keys(n);for(let o=0;o<s.length;o++){const l=s[o],c=n[l];this.resourceIdToCapturedInput[c.resourceId]=t[o]}}}execute(t,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),t=this.normalizeInputs(t),n=this.normalizeOutputs(n);const s=this.executor.execute(t,n);return s.length>1?s:s[0]}async executeAsync(t,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),t=this.normalizeInputs(t),n=this.normalizeOutputs(n);const s=await this.executor.executeAsync(t,n);return s.length>1?s:s[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce((n,s)=>(n[s]=[t[s]],n),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&pe(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function wy(a,t={},n=my){if(a==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");t==null&&(t={}),t.fromTFHub&&typeof a=="string"&&(a=P9(a));const s=new W9(a,t,n);return await s.load(),s}function P9(a){return a.endsWith("/")||(a=a+"/"),`${a}${Q9}${X9}`}/**
    * @license
    * Copyright 2024 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */var Qn=function(){return Qn=Object.assign||function(a){for(var t,n=1,s=arguments.length;n<s;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(a[o]=t[o]);return a},Qn.apply(this,arguments)};function Ra(a,t,n,s){return new(n||(n=Promise))(function(o,l){function c(d){try{h(s.next(d))}catch(y){l(y)}}function f(d){try{h(s.throw(d))}catch(y){l(y)}}function h(d){var y;d.done?o(d.value):(y=d.value,y instanceof n?y:new n(function(b){b(y)})).then(c,f)}h((s=s.apply(a,[])).next())})}function za(a,t){var n,s,o,l,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function f(h){return function(d){return function(y){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,s&&(o=2&y[0]?s.return:y[0]?s.throw||((o=s.return)&&o.call(s),0):s.next)&&!(o=o.call(s,y[1])).done)return o;switch(s=0,o&&(y=[2&y[0],o.value]),y[0]){case 0:case 1:o=y;break;case 4:return c.label++,{value:y[1],done:!1};case 5:c.label++,s=y[1],y=[0];continue;case 7:y=c.ops.pop(),c.trys.pop();continue;default:if(o=c.trys,!((o=o.length>0&&o[o.length-1])||y[0]!==6&&y[0]!==2)){c=0;continue}if(y[0]===3&&(!o||y[1]>o[0]&&y[1]<o[3])){c.label=y[1];break}if(y[0]===6&&c.label<o[1]){c.label=o[1],o=y;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(y);break}o[2]&&c.ops.pop(),c.trys.pop();continue}y=t.call(a,c)}catch(b){y=[6,b],s=0}finally{n=o=0}if(5&y[0])throw y[1];return{value:y[0]?y[1]:void 0,done:!0}}([h,d])}}}function Tr(a){var t=a.map(function(n){return n[0]});return t.push(a[a.length-1][1]),t}var Z9={lips:Tr([[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]]),leftEye:Tr([[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]]),leftEyebrow:Tr([[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]]),leftIris:Tr([[474,475],[475,476],[476,477],[477,474]]),rightEye:Tr([[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]]),rightEyebrow:Tr([[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]]),rightIris:Tr([[469,470],[470,471],[471,472],[472,469]]),faceOval:Tr([[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]])},J9=Object.entries(Z9).map(function(a){var t=a[0];return a[1].map(function(n){return[n,t]})}).flat(),Ty=new Map(J9);function Jh(a){for(var t={locationData:{relativeKeypoints:[]}},n=Number.MAX_SAFE_INTEGER,s=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER,l=Number.MIN_SAFE_INTEGER,c=0;c<a.length;++c){var f=a[c];n=Math.min(n,f.x),s=Math.max(s,f.x),o=Math.min(o,f.y),l=Math.max(l,f.y),t.locationData.relativeKeypoints.push({x:f.x,y:f.y})}return t.locationData.relativeBoundingBox={xMin:n,yMin:o,xMax:s,yMax:l,width:s-n,height:l-o},t}var ph={runtime:"mediapipe",maxFaces:1,refineLandmarks:!1},tx=function(){function a(t){var n=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceMeshSolution=new y3.FaceMesh({locateFile:function(s,o){return t.solutionPath?t.solutionPath.replace(/\/+$/,"")+"/"+s:o+"/"+s}}),this.faceMeshSolution.setOptions({refineLandmarks:t.refineLandmarks,selfieMode:this.selfieMode,maxNumFaces:t.maxFaces}),this.faceMeshSolution.onResults(function(s){if(n.height=s.image.height,n.width=s.image.width,n.faces=[],s.multiFaceLandmarks!==null)for(var o=s.multiFaceLandmarks,l=0;l<o.length;l++){var c=n.translateOutput(o[l]);n.faces.push({keypoints:c,box:Jh(c).locationData.relativeBoundingBox})}})}return a.prototype.translateOutput=function(t){var n=this;return t.map(function(s,o){var l={x:s.x*n.width,y:s.y*n.height,z:s.z*n.width},c=Ty.get(o);return c!=null&&(l.name=c),l})},a.prototype.estimateFaces=function(t,n){return Ra(this,void 0,void 0,function(){var s,o;return za(this,function(l){switch(l.label){case 0:return n&&n.flipHorizontal&&n.flipHorizontal!==this.selfieMode&&(this.selfieMode=n.flipHorizontal,this.faceMeshSolution.setOptions({selfieMode:this.selfieMode})),t instanceof me?(o=ImageData.bind,[4,gy(t)]):[3,2];case 1:return s=new(o.apply(ImageData,[void 0,l.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:s=t,l.label=3;case 3:return t=s,[4,this.faceMeshSolution.send({image:t})];case 4:return l.sent(),[2,this.faces]}})})},a.prototype.dispose=function(){this.faceMeshSolution.close()},a.prototype.reset=function(){this.faceMeshSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},a.prototype.initialize=function(){return this.faceMeshSolution.initialize()},a}();function ex(a){return Ra(this,void 0,void 0,function(){var t,n;return za(this,function(s){switch(s.label){case 0:return t=function(o){if(o==null)return Qn({},ph);var l=Qn({},o);return l.runtime="mediapipe",l.maxFaces==null&&(l.maxFaces=ph.maxFaces),l.refineLandmarks==null&&(l.refineLandmarks=ph.refineLandmarks),l}(a),[4,(n=new tx(t)).initialize()];case 1:return s.sent(),[2,n]}})})}var dh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nx={};(function(){var a;function t(g){var w=0;return function(){return w<g.length?{done:!1,value:g[w++]}:{done:!0}}}var n=typeof Object.defineProperties=="function"?Object.defineProperty:function(g,w,_){return g==Array.prototype||g==Object.prototype||(g[w]=_.value),g},s=function(g){g=[typeof globalThis=="object"&&globalThis,g,typeof window=="object"&&window,typeof self=="object"&&self,typeof dh=="object"&&dh];for(var w=0;w<g.length;++w){var _=g[w];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}(this);function o(g,w){if(w)t:{var _=s;g=g.split(".");for(var O=0;O<g.length-1;O++){var M=g[O];if(!(M in _))break t;_=_[M]}(w=w(O=_[g=g[g.length-1]]))!=O&&w!=null&&n(_,g,{configurable:!0,writable:!0,value:w})}}function l(g){return(g={next:g})[Symbol.iterator]=function(){return this},g}function c(g){var w=typeof Symbol<"u"&&Symbol.iterator&&g[Symbol.iterator];return w?w.call(g):{next:t(g)}}function f(g){if(!(g instanceof Array)){g=c(g);for(var w,_=[];!(w=g.next()).done;)_.push(w.value);g=_}return g}o("Symbol",function(g){function w(M,R){this.g=M,n(this,"description",{configurable:!0,writable:!0,value:R})}if(g)return g;w.prototype.toString=function(){return this.g};var _="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",O=0;return function M(R){if(this instanceof M)throw new TypeError("Symbol is not a constructor");return new w(_+(R||"")+"_"+O++,R)}}),o("Symbol.iterator",function(g){if(g)return g;g=Symbol("Symbol.iterator");for(var w="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),_=0;_<w.length;_++){var O=s[w[_]];typeof O=="function"&&typeof O.prototype[g]!="function"&&n(O.prototype,g,{configurable:!0,writable:!0,value:function(){return l(t(this))}})}return g});var h,d=typeof Object.create=="function"?Object.create:function(g){function w(){}return w.prototype=g,new w};if(typeof Object.setPrototypeOf=="function")h=Object.setPrototypeOf;else{var y;t:{var b={};try{b.__proto__={a:!0},y=b.a;break t}catch{}y=!1}h=y?function(g,w){if(g.__proto__=w,g.__proto__!==w)throw new TypeError(g+" is not extensible");return g}:null}var S=h;function N(g,w){if(g.prototype=d(w.prototype),g.prototype.constructor=g,S)S(g,w);else for(var _ in w)if(_!="prototype")if(Object.defineProperties){var O=Object.getOwnPropertyDescriptor(w,_);O&&Object.defineProperty(g,_,O)}else g[_]=w[_];g.na=w.prototype}function E(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.u=this.o=0,this.j=null}function D(g){if(g.l)throw new TypeError("Generator is already running");g.l=!0}function k(g,w){g.j={da:w,ea:!0},g.g=g.o||g.u}function z(g,w,_){return g.g=_,{value:w}}function Z(g){this.g=new E,this.h=g}function P(g,w,_,O){try{var M=w.call(g.g.i,_);if(!(M instanceof Object))throw new TypeError("Iterator result "+M+" is not an object");if(!M.done)return g.g.l=!1,M;var R=M.value}catch(C){return g.g.i=null,k(g.g,C),H(g)}return g.g.i=null,O.call(g.g,R),H(g)}function H(g){for(;g.g.g;)try{var w=g.h(g.g);if(w)return g.g.l=!1,{value:w.value,done:!1}}catch(_){g.g.h=void 0,k(g.g,_)}if(g.g.l=!1,g.g.j){if(w=g.g.j,g.g.j=null,w.ea)throw w.da;return{value:w.return,done:!0}}return{value:void 0,done:!0}}function G(g){this.next=function(w){return D(g.g),g.g.i?w=P(g,g.g.i.next,w,g.g.s):(g.g.s(w),w=H(g)),w},this.throw=function(w){return D(g.g),g.g.i?w=P(g,g.g.i.throw,w,g.g.s):(k(g.g,w),w=H(g)),w},this.return=function(w){return function(_,O){D(_.g);var M=_.g.i;return M?P(_,"return"in M?M.return:function(R){return{value:R,done:!0}},O,_.g.return):(_.g.return(O),H(_))}(g,w)},this[Symbol.iterator]=function(){return this}}function Q(g){return function(w){function _(M){return w.next(M)}function O(M){return w.throw(M)}return new Promise(function(M,R){(function C(V){V.done?M(V.value):Promise.resolve(V.value).then(_,O).then(C,R)})(w.next())})}(new G(new Z(g)))}E.prototype.s=function(g){this.h=g},E.prototype.return=function(g){this.j={return:g},this.g=this.u},o("Promise",function(g){function w(C){this.h=0,this.i=void 0,this.g=[],this.s=!1;var V=this.j();try{C(V.resolve,V.reject)}catch(J){V.reject(J)}}function _(){this.g=null}function O(C){return C instanceof w?C:new w(function(V){V(C)})}if(g)return g;_.prototype.h=function(C){if(this.g==null){this.g=[];var V=this;this.i(function(){V.l()})}this.g.push(C)};var M=s.setTimeout;_.prototype.i=function(C){M(C,0)},_.prototype.l=function(){for(;this.g&&this.g.length;){var C=this.g;this.g=[];for(var V=0;V<C.length;++V){var J=C[V];C[V]=null;try{J()}catch(it){this.j(it)}}}this.g=null},_.prototype.j=function(C){this.i(function(){throw C})},w.prototype.j=function(){function C(it){return function(dt){J||(J=!0,it.call(V,dt))}}var V=this,J=!1;return{resolve:C(this.D),reject:C(this.l)}},w.prototype.D=function(C){if(C===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(C instanceof w)this.H(C);else{t:switch(typeof C){case"object":var V=C!=null;break t;case"function":V=!0;break t;default:V=!1}V?this.A(C):this.o(C)}},w.prototype.A=function(C){var V=void 0;try{V=C.then}catch(J){return void this.l(J)}typeof V=="function"?this.I(V,C):this.o(C)},w.prototype.l=function(C){this.u(2,C)},w.prototype.o=function(C){this.u(1,C)},w.prototype.u=function(C,V){if(this.h!=0)throw Error("Cannot settle("+C+", "+V+"): Promise already settled in state"+this.h);this.h=C,this.i=V,this.h===2&&this.G(),this.B()},w.prototype.G=function(){var C=this;M(function(){if(C.C()){var V=s.console;V!==void 0&&V.error(C.i)}},1)},w.prototype.C=function(){if(this.s)return!1;var C=s.CustomEvent,V=s.Event,J=s.dispatchEvent;return J===void 0||(typeof C=="function"?C=new C("unhandledrejection",{cancelable:!0}):typeof V=="function"?C=new V("unhandledrejection",{cancelable:!0}):(C=s.document.createEvent("CustomEvent")).initCustomEvent("unhandledrejection",!1,!0,C),C.promise=this,C.reason=this.i,J(C))},w.prototype.B=function(){if(this.g!=null){for(var C=0;C<this.g.length;++C)R.h(this.g[C]);this.g=null}};var R=new _;return w.prototype.H=function(C){var V=this.j();C.M(V.resolve,V.reject)},w.prototype.I=function(C,V){var J=this.j();try{C.call(V,J.resolve,J.reject)}catch(it){J.reject(it)}},w.prototype.then=function(C,V){function J(Nt,pt){return typeof Nt=="function"?function(_t){try{it(Nt(_t))}catch(kt){dt(kt)}}:pt}var it,dt,bt=new w(function(Nt,pt){it=Nt,dt=pt});return this.M(J(C,it),J(V,dt)),bt},w.prototype.catch=function(C){return this.then(void 0,C)},w.prototype.M=function(C,V){function J(){switch(it.h){case 1:C(it.i);break;case 2:V(it.i);break;default:throw Error("Unexpected state: "+it.h)}}var it=this;this.g==null?R.h(J):this.g.push(J),this.s=!0},w.resolve=O,w.reject=function(C){return new w(function(V,J){J(C)})},w.race=function(C){return new w(function(V,J){for(var it=c(C),dt=it.next();!dt.done;dt=it.next())O(dt.value).M(V,J)})},w.all=function(C){var V=c(C),J=V.next();return J.done?O([]):new w(function(it,dt){function bt(_t){return function(kt){Nt[_t]=kt,--pt==0&&it(Nt)}}var Nt=[],pt=0;do Nt.push(void 0),pt++,O(J.value).M(bt(Nt.length-1),dt),J=V.next();while(!J.done)})},w});var st=typeof Object.assign=="function"?Object.assign:function(g,w){for(var _=1;_<arguments.length;_++){var O=arguments[_];if(O)for(var M in O)Object.prototype.hasOwnProperty.call(O,M)&&(g[M]=O[M])}return g};o("Object.assign",function(g){return g||st}),o("Object.is",function(g){return g||function(w,_){return w===_?w!==0||1/w==1/_:w!=w&&_!=_}}),o("Array.prototype.includes",function(g){return g||function(w,_){var O=this;O instanceof String&&(O=String(O));var M=O.length;for(0>(_=_||0)&&(_=Math.max(_+M,0));_<M;_++){var R=O[_];if(R===w||Object.is(R,w))return!0}return!1}}),o("String.prototype.includes",function(g){return g||function(w,_){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(w instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(w,_||0)!==-1}}),o("Array.prototype.keys",function(g){return g||function(){return function(w,_){w instanceof String&&(w+="");var O=0,M=!1,R={next:function(){if(!M&&O<w.length){var C=O++;return{value:_(C,w[C]),done:!1}}return M=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}(this,function(w){return w})}});var ut=this||self;function ot(g,w){g=g.split(".");var _,O=ut;for((g[0]in O)||O.execScript===void 0||O.execScript("var "+g[0]);g.length&&(_=g.shift());)g.length||w===void 0?O=O[_]&&O[_]!==Object.prototype[_]?O[_]:O[_]={}:O[_]=w}function ft(){throw Error("Invalid UTF8")}function St(g,w){return w=String.fromCharCode.apply(null,w),g==null?w:g+w}var Dt,Ct,Qt=typeof TextDecoder<"u",Ft=typeof TextEncoder<"u",W={},lt=null;function yt(g){var w;w===void 0&&(w=0),L(),w=W[w];for(var _=Array(Math.floor(g.length/3)),O=w[64]||"",M=0,R=0;M<g.length-2;M+=3){var C=g[M],V=g[M+1],J=g[M+2],it=w[C>>2];C=w[(3&C)<<4|V>>4],V=w[(15&V)<<2|J>>6],J=w[63&J],_[R++]=it+C+V+J}switch(it=0,J=O,g.length-M){case 2:J=w[(15&(it=g[M+1]))<<2]||O;case 1:g=g[M],_[R]=w[g>>2]+w[(3&g)<<4|it>>4]+J+O}return _.join("")}function jt(g){var w=g.length,_=3*w/4;_%3?_=Math.floor(_):"=.".indexOf(g[w-1])!=-1&&(_="=.".indexOf(g[w-2])!=-1?_-2:_-1);var O=new Uint8Array(_),M=0;return function(R,C){function V(pt){for(;J<R.length;){var _t=R.charAt(J++),kt=lt[_t];if(kt!=null)return kt;if(!/^[\s\xa0]*$/.test(_t))throw Error("Unknown base64 encoding at char: "+_t)}return pt}L();for(var J=0;;){var it=V(-1),dt=V(0),bt=V(64),Nt=V(64);if(Nt===64&&it===-1)break;C(it<<2|dt>>4),bt!=64&&(C(dt<<4&240|bt>>2),Nt!=64&&C(bt<<6&192|Nt))}}(g,function(R){O[M++]=R}),M!==_?O.subarray(0,M):O}function L(){if(!lt){lt={};for(var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),w=["+/=","+/","-_=","-_.","-_"],_=0;5>_;_++){var O=g.concat(w[_].split(""));W[_]=O;for(var M=0;M<O.length;M++){var R=O[M];lt[R]===void 0&&(lt[R]=M)}}}}var rt,mt=typeof Uint8Array=="function";function ht(g){return mt&&g!=null&&g instanceof Uint8Array}function Tt(g){if(this.L=g,g!==null&&g.length===0)throw Error("ByteString should be constructed with non-empty values")}var Gt=typeof Uint8Array.prototype.slice=="function",Et=0;function Ye(g,w){return Error("Invalid wire type: "+g+" (at position "+w+")")}function ee(){return Error("Failed to read varint, encoding is invalid.")}function In(g,w){w=(w=w===void 0?{}:w).v!==void 0&&w.v,this.h=null,this.g=this.i=this.j=0,this.v=w,g&&zr(this,g)}function zr(g,w){g.h=function(_,O){if(_.constructor===Uint8Array)return _;if(_.constructor===ArrayBuffer)return new Uint8Array(_);if(_.constructor===Array)return new Uint8Array(_);if(_.constructor===String)return jt(_);if(_.constructor===Tt)return!O&&(O=_.L)&&O.constructor===Uint8Array?O:(O=(O=_.L)==null||ht(O)?O:typeof O=="string"?jt(O):null,(_=_.L=O)?new Uint8Array(_):rt||(rt=new Uint8Array(0)));if(_ instanceof Uint8Array)return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers")}(w,g.v),g.j=0,g.i=g.h.length,g.g=g.j}function Ee(g){if(g.g>g.i)throw Error("Tried to read past the end of the data "+g.g+" > "+g.i)}function oa(g){var w=g.h,_=w[g.g],O=127&_;if(128>_)return g.g+=1,Ee(g),O;if(O|=(127&(_=w[g.g+1]))<<7,128>_)return g.g+=2,Ee(g),O;if(O|=(127&(_=w[g.g+2]))<<14,128>_)return g.g+=3,Ee(g),O;if(O|=(127&(_=w[g.g+3]))<<21,128>_)return g.g+=4,Ee(g),O;if(_=w[g.g+4],g.g+=5,O|=(15&_)<<28,128>_)return Ee(g),O;if(128<=w[g.g++]&&128<=w[g.g++]&&128<=w[g.g++]&&128<=w[g.g++]&&128<=w[g.g++])throw ee();return Ee(g),O}In.prototype.reset=function(){this.g=this.j};var Ns=[];function Cr(){this.g=[]}function ua(g,w){for(;127<w;)g.g.push(127&w|128),w>>>=7;g.g.push(w)}function nu(g){var w={},_=w.W!==void 0&&w.W;this.l={v:w.v!==void 0&&w.v},this.W=_,w=this.l,Ns.length?(_=Ns.pop(),w&&(_.v=w.v),g&&zr(_,g),g=_):g=new In(g,w),this.g=g,this.j=this.g.g,this.h=this.i=-1}function gn(g){var w=g.g;if(w.g==w.i)return!1;g.j=g.g.g;var _=oa(g.g)>>>0;if(w=_>>>3,!(0<=(_&=7)&&5>=_))throw Ye(_,g.j);if(1>w)throw Error("Invalid field number: "+w+" (at position "+g.j+")");return g.i=w,g.h=_,!0}function Es(g){switch(g.h){case 0:if(g.h!=0)Es(g);else t:{for(var w=(g=g.g).g,_=w+10;w<_;)if((128&g.h[w++])==0){g.g=w,Ee(g);break t}throw ee()}break;case 1:(g=g.g).g+=8,Ee(g);break;case 2:g.h!=2?Es(g):(w=oa(g.g)>>>0,(g=g.g).g+=w,Ee(g));break;case 5:(g=g.g).g+=4,Ee(g);break;case 3:for(w=g.i;;){if(!gn(g))throw Error("Unmatched start-group tag: stream EOF");if(g.h==4){if(g.i!=w)throw Error("Unmatched end-group tag");break}Es(g)}break;default:throw Ye(g.h,g.j)}}Cr.prototype.length=function(){return this.g.length},Cr.prototype.end=function(){var g=this.g;return this.g=[],g},nu.prototype.reset=function(){this.g.reset(),this.j=this.g.g,this.h=this.i=-1};var Mr=[];function au(){this.i=[],this.h=0,this.g=new Cr}function Ln(g,w){w.length!==0&&(g.i.push(w),g.h+=w.length)}var _s=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol(void 0):void 0;function _i(g,w){Object.isFrozen(g)||(_s?g[_s]|=w:g.N!==void 0?g.N|=w:Object.defineProperties(g,{N:{value:w,configurable:!0,writable:!0,enumerable:!1}}))}function ru(g){var w;return(w=_s?g[_s]:g.N)==null?0:w}function Br(g){return _i(g,1),g}function jn(g){return!!Array.isArray(g)&&!!(2&ru(g))}function je(g){if(!Array.isArray(g))throw Error("cannot mark non-array as immutable");_i(g,2)}function Vn(g){return g!==null&&typeof g=="object"&&!Array.isArray(g)&&g.constructor===Object}var Re=Object.freeze(Br([]));function su(g){if(jn(g.m))throw Error("Cannot mutate an immutable Message")}var iu,ou=typeof Symbol<"u"&&Symbol.hasInstance!==void 0;function Ur(g){return{value:g,configurable:!1,writable:!1,enumerable:!1}}function Xe(g,w,_){return w===-1?null:w>=g.i?g.g?g.g[w]:void 0:_!==void 0&&_&&g.g&&(_=g.g[w])!=null?_:g.m[w+g.h]}function ie(g,w,_,O){O=O!==void 0&&O,su(g),w<g.i&&!O?g.m[w+g.h]=_:(g.g||(g.g=g.m[g.i+g.h]={}))[w]=_}function Ir(g,w,_,O){_=_===void 0||_;var M=Xe(g,w,O=O!==void 0&&O);return M==null&&(M=Re),jn(g.m)?_&&(je(M),Object.freeze(M)):(M===Re||jn(M))&&ie(g,w,M=Br(M.slice()),O),M}function Qe(g,w,_){return(g=(g=Xe(g,w))==null?g:+g)==null?_===void 0?0:_:g}function xs(g,w,_,O){g.j||(g.j={});var M=jn(g.m),R=g.j[_];if(!R){O=Ir(g,_,!0,O!==void 0&&O),R=[],M=M||jn(O);for(var C=0;C<O.length;C++)R[C]=new w(O[C]),M&&je(R[C].m);M&&(je(R),Object.freeze(R)),g.j[_]=R}return R}function xi(g,w,_,O,M){var R=R!==void 0&&R;return su(g),R=xs(g,_,w,R),_=O||new _,g=Ir(g,w),M!=null?(R.splice(M,0,_),g.splice(M,0,_.m)):(R.push(_),g.push(_.m)),_}function Ai(g,w){return(g=Xe(g,w))==null?0:g}function As(g,w){return(g=Xe(g,w))==null?"":g}function qa(g){var w=lu;return Oi(g,w=w===void 0?Di:w)}function uu(g,w){if(g!=null){if(Array.isArray(g))g=Oi(g,w);else if(Vn(g)){var _,O={};for(_ in g)O[_]=uu(g[_],w);g=O}else g=w(g);return g}}function Oi(g,w){for(var _=g.slice(),O=0;O<_.length;O++)_[O]=uu(_[O],w);return Array.isArray(g)&&1&ru(g)&&Br(_),_}function lu(g){return g&&typeof g=="object"&&g.toJSON?g.toJSON():(g=function(w){switch(typeof w){case"number":return isFinite(w)?w:String(w);case"object":if(w&&!Array.isArray(w)){if(ht(w))return yt(w);if(w instanceof Tt){var _=w.L;return _=_==null||typeof _=="string"?_:mt&&_ instanceof Uint8Array?yt(_):null,(w.L=_)||""}}}return w}(g),Array.isArray(g)?qa(g):g)}function Di(g){return ht(g)?new Uint8Array(g):g}function Fa(g,w,_){g||(g=iu),iu=null;var O=this.constructor.h;if(g||(g=O?[O]:[]),this.h=(O?0:-1)-(this.constructor.g||0),this.j=void 0,this.m=g,g=(O=this.m.length)-1,O&&Vn(O=this.m[g])?(this.i=g-this.h,this.g=O):w!==void 0&&-1<w?(this.i=Math.max(w,g+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE,_)for(w=0;w<_.length;w++)if((g=_[w])<this.i)g+=this.h,(O=this.m[g])?Array.isArray(O)&&Br(O):this.m[g]=Re;else{var M=(O=this.g||(this.g=this.m[this.i+this.h]={}))[g];M?Array.isArray(M)&&Br(M):O[g]=Re}}function Lr(){Fa.apply(this,arguments)}if(Fa.prototype.toJSON=function(){return qa(this.m)},Fa.prototype.toString=function(){return this.m.toString()},N(Lr,Fa),ou){var cu={};Object.defineProperties(Lr,(cu[Symbol.hasInstance]=Ur(function(){throw Error("Cannot perform instanceof checks for MutableMessage")}),cu))}function Hn(g,w,_){if(_){var O,M={};for(O in _){var R=_[O],C=R.ha;C||(M.F=R.la||R.fa.P,R.aa?(M.U=$i(R.aa),C=function(V){return function(J,it,dt){return V.F(J,it,dt,V.U)}}(M)):R.ca?(M.T=Ga(R.X.g,R.ca),C=function(V){return function(J,it,dt){return V.F(J,it,dt,V.T)}}(M)):C=M.F,R.ha=C),C(w,g,R.X),M={F:M.F,U:M.U,T:M.T}}}(function(V,J){if(J=J.ba){Ln(V,V.g.end());for(var it=0;it<J.length;it++)Ln(V,J[it])}})(w,g)}var ve=Symbol();function Ve(g,w,_){return g[ve]||(g[ve]=function(O,M){return w(O,M,_)})}function la(g){var w=g[ve];if(!w){var _=zi(g);w=function(O,M){return Ci(O,M,_)},g[ve]=w}return w}function ki(g){var w=function(M){var R=M.aa;return R?la(R):(R=M.ka)?Ve(M.X.g,R,M.ca):void 0}(g),_=g.X,O=g.fa.O;return w?function(M,R){return O(M,R,_,w)}:function(M,R){return O(M,R,_)}}function fu(g,w,_,O,M,R){var C=0;for((g=g()).length&&typeof g[0]!="number"&&(_(w,g[0]),C++);C<g.length;){_=g[C++];for(var V=C+1;V<g.length&&typeof g[V]!="number";)V++;var J=g[C++];switch(V-=C){case 0:O(w,_,J);break;case 1:O(w,_,J,g[C++]);break;case 2:M(w,_,J,g[C++],g[C++]);break;case 3:V=g[C++];var it=g[C++],dt=g[C++];Array.isArray(dt)?M(w,_,J,V,it,dt):R(w,_,J,V,it,dt);break;case 4:R(w,_,J,g[C++],g[C++],g[C++],g[C++]);break;default:throw Error("unexpected number of binary field arguments: "+V)}}return w}var Os=Symbol();function $i(g){var w=g[Os];if(!w){var _=Se(g);w=function(O,M){return Vr(O,M,_)},g[Os]=w}return w}function Ga(g,w){var _=g[Os];return _||(_=function(O,M){return Hn(O,M,w)},g[Os]=_),_}var Ds=Symbol();function Ka(g,w){g.push(w)}function Ya(g,w,_){g.push(w,_.P)}function jr(g,w,_,O,M){var R=$i(M),C=_.P;g.push(w,function(V,J,it){return C(V,J,it,O,R)})}function Xa(g,w,_,O,M,R){var C=Ga(O,R),V=_.P;g.push(w,function(J,it,dt){return V(J,it,dt,O,C)})}function Se(g){var w=g[Ds];return w||fu(g,g[Ds]=[],Ka,Ya,jr,Xa)}var Ri=Symbol();function hu(g,w){g[0]=w}function ca(g,w,_,O){var M=_.O;g[w]=O?function(R,C,V){return M(R,C,V,O)}:M}function Qa(g,w,_,O,M,R){var C=_.O,V=la(M);g[w]=function(J,it,dt){return C(J,it,dt,O,V,R)}}function rc(g,w,_,O,M,R,C){var V=_.O,J=Ve(O,M,R);g[w]=function(it,dt,bt){return V(it,dt,bt,O,J,C)}}function zi(g){var w=g[Ri];return w||fu(g,g[Ri]={},hu,ca,Qa,rc)}function Ci(g,w,_){for(;gn(w)&&w.h!=4;){var O=w.i,M=_[O];if(!M){var R=_[0];R&&(R=R[O])&&(M=_[O]=ki(R))}if(!(M&&M(w,g,O)||(M=w,O=g,R=M.j,Es(M),M.W))){var C=M.g.h;M=R===(M=M.g.g)?rt||(rt=new Uint8Array(0)):Gt?C.slice(R,M):new Uint8Array(C.subarray(R,M)),(R=O.ba)?R.push(M):O.ba=[M]}}return g}function Mi(g,w,_){if(Mr.length){var O=Mr.pop();g&&(zr(O.g,g),O.i=-1,O.h=-1),g=O}else g=new nu(g);try{return Ci(new w,g,zi(_))}finally{(w=g.g).h=null,w.j=0,w.i=0,w.g=0,w.v=!1,g.i=-1,g.h=-1,100>Mr.length&&Mr.push(g)}}function Vr(g,w,_){for(var O=_.length,M=O%2==1,R=M?1:0;R<O;R+=2)(0,_[R+1])(w,g,_[R]);Hn(g,w,M?_[0]:void 0)}function Wa(g,w){var _=new au;Vr(g,_,Se(w)),Ln(_,_.g.end()),g=new Uint8Array(_.h);for(var O=(w=_.i).length,M=0,R=0;R<O;R++){var C=w[R];g.set(C,M),M+=C.length}return _.i=[g],g}function en(g,w){return{O:g,P:w}}var nn=en(function(g,w,_){if(g.h!==5)return!1;var O=(g=g.g).h[g.g],M=g.h[g.g+1],R=g.h[g.g+2],C=g.h[g.g+3];return g.g+=4,Ee(g),g=2*((M=(O<<0|M<<8|R<<16|C<<24)>>>0)>>31)+1,O=M>>>23&255,M&=8388607,ie(w,_,O==255?M?NaN:1/0*g:O==0?g*Math.pow(2,-149)*M:g*Math.pow(2,O-150)*(M+Math.pow(2,23))),!0},function(g,w,_){if((w=Xe(w,_))!=null){ua(g.g,8*_+5),g=g.g;var O=w;(O=(_=0>O?1:0)?-O:O)===0?0<1/O?Et=0:Et=2147483648:isNaN(O)?Et=2147483647:34028234663852886e22<O?Et=(_<<31|2139095040)>>>0:11754943508222875e-54>O?(O=Math.round(O/Math.pow(2,-149)),Et=(_<<31|O)>>>0):(w=Math.floor(Math.log(O)/Math.LN2),O*=Math.pow(2,-w),16777216<=(O=Math.round(8388608*O))&&++w,Et=(_<<31|w+127<<23|8388607&O)>>>0),_=Et,g.g.push(_>>>0&255),g.g.push(_>>>8&255),g.g.push(_>>>16&255),g.g.push(_>>>24&255)}}),pu=en(function(g,w,_){if(g.h!==0)return!1;for(var O=g.g,M=128,R=0,C=g=0;4>C&&128<=M;C++)M=O.h[O.g++],Ee(O),R|=(127&M)<<7*C;if(128<=M&&(M=O.h[O.g++],Ee(O),R|=(127&M)<<28,g|=(127&M)>>4),128<=M)for(C=0;5>C&&128<=M;C++)M=O.h[O.g++],Ee(O),g|=(127&M)<<7*C+3;if(!(128>M))throw ee();return O=R>>>0,(g=2147483648&(M=g>>>0))&&(M=~M>>>0,(O=1+~O>>>0)==0&&(M=M+1>>>0)),O=4294967296*M+(O>>>0),ie(w,_,g?-O:O),!0},function(g,w,_){if((w=Xe(w,_))!=null&&w!=null){ua(g.g,8*_),g=g.g;var O=w;for(_=0>O,w=(O=Math.abs(O))>>>0,O=Math.floor((O-w)/4294967296),O>>>=0,_&&(O=~O>>>0,4294967295<(w=1+(~w>>>0))&&(w=0,4294967295<++O&&(O=0))),_=Et=w,w=O;0<w||127<_;)g.g.push(127&_|128),_=(_>>>7|w<<25)>>>0,w>>>=7;g.g.push(_)}}),Pa=en(function(g,w,_){return g.h===0&&(ie(w,_,oa(g.g)),!0)},function(g,w,_){if((w=Xe(w,_))!=null&&w!=null)if(ua(g.g,8*_),g=g.g,0<=(_=w))ua(g,_);else{for(w=0;9>w;w++)g.g.push(127&_|128),_>>=7;g.g.push(1)}}),ks=en(function(g,w,_){if(g.h!==2)return!1;var O,M=oa(g.g)>>>0,R=(g=g.g).g;if(g.g+=M,Ee(g),g=g.h,Qt)(O=Dt)||(O=Dt=new TextDecoder("utf-8",{fatal:!0})),O=O.decode(g.subarray(R,R+M));else{M=R+M;for(var C,V,J,it=[],dt=null;R<M;)128>(C=g[R++])?it.push(C):224>C?R>=M?ft():(V=g[R++],194>C||(192&V)!=128?(R--,ft()):it.push((31&C)<<6|63&V)):240>C?R>=M-1?ft():(192&(V=g[R++]))!=128||C===224&&160>V||C===237&&160<=V||(192&(O=g[R++]))!=128?(R--,ft()):it.push((15&C)<<12|(63&V)<<6|63&O):244>=C?R>=M-2?ft():(192&(V=g[R++]))!=128||V-144+(C<<28)>>30!=0||(192&(O=g[R++]))!=128||(192&(J=g[R++]))!=128?(R--,ft()):(C=(7&C)<<18|(63&V)<<12|(63&O)<<6|63&J,C-=65536,it.push(55296+(C>>10&1023),56320+(1023&C))):ft(),8192<=it.length&&(dt=St(dt,it),it.length=0);O=St(dt,it)}return ie(w,_,O),!0},function(g,w,_){if((w=Xe(w,_))!=null){var O=!1;if(O=O!==void 0&&O,Ft){if(O&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(w))throw Error("Found an unpaired surrogate");w=(Ct||(Ct=new TextEncoder)).encode(w)}else{for(var M=0,R=new Uint8Array(3*w.length),C=0;C<w.length;C++){var V=w.charCodeAt(C);if(128>V)R[M++]=V;else{if(2048>V)R[M++]=V>>6|192;else{if(55296<=V&&57343>=V){if(56319>=V&&C<w.length){var J=w.charCodeAt(++C);if(56320<=J&&57343>=J){V=1024*(V-55296)+J-56320+65536,R[M++]=V>>18|240,R[M++]=V>>12&63|128,R[M++]=V>>6&63|128,R[M++]=63&V|128;continue}C--}if(O)throw Error("Found an unpaired surrogate");V=65533}R[M++]=V>>12|224,R[M++]=V>>6&63|128}R[M++]=63&V|128}}w=R.subarray(0,M)}ua(g.g,8*_+2),ua(g.g,w.length),Ln(g,g.g.end()),Ln(g,w)}}),$s=en(function(g,w,_,O,M){if(g.h!==2)return!1;w=xi(w,_,O),_=g.g.i,O=oa(g.g)>>>0;var R=g.g.g+O,C=R-_;if(0>=C&&(g.g.i=R,M(w,g),C=R-g.g.g),C)throw Error("Message parsing ended unexpectedly. Expected to read "+O+" bytes, instead read "+(O-C)+" bytes, either the data ended unexpectedly or the message misreported its own length");return g.g.g=R,g.g.i=_,!0},function(g,w,_,O,M){if((w=xs(w,O,_))!=null)for(O=0;O<w.length;O++){var R=g;ua(R.g,8*_+2);var C=R.g.end();Ln(R,C),C.push(R.h),R=C,M(w[O],g),C=g;var V=R.pop();for(V=C.h+C.g.length()-V;127<V;)R.push(127&V|128),V>>>=7,C.h++;R.push(V),C.h++}});function un(){Lr.apply(this,arguments)}if(N(un,Lr),ou){var Bi={};Object.defineProperties(un,(Bi[Symbol.hasInstance]=Ur(Object[Symbol.hasInstance]),Bi))}function ze(g){un.call(this,g)}function Ui(){return[1,Pa,2,nn,3,ks,4,ks]}function Ii(g){un.call(this,g,-1,du)}function Rs(){return[1,$s,ze,Ui]}N(ze,un),N(Ii,un),Ii.prototype.addClassification=function(g,w){return xi(this,1,ze,g,w),this};var du=[1];function fa(g){un.call(this,g)}function mu(){return[1,nn,2,nn,3,nn,4,nn,5,nn]}function an(g){un.call(this,g,-1,gu)}function Li(){return[1,$s,fa,mu]}N(fa,un),N(an,un);var gu=[1];function Hr(g){un.call(this,g)}function ha(){return[1,nn,2,nn,3,nn,4,nn,5,nn,6,pu]}N(Hr,un);var ji=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],Vi=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],pa=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],yu=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],Hi=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],qi=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],Fi=[].concat(f(ji),f(Vi),f(pa),f(yu),f(Hi),f(qi));function bu(g,w,_){if(_=g.createShader(_===0?g.VERTEX_SHADER:g.FRAGMENT_SHADER),g.shaderSource(_,w),g.compileShader(_),!g.getShaderParameter(_,g.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+g.getShaderInfoLog(_));return _}function sc(g){return xs(g,ze,1).map(function(w){return{index:Ai(w,1),ga:Qe(w,2),label:Xe(w,3)!=null?As(w,3):void 0,displayName:Xe(w,4)!=null?As(w,4):void 0}})}function zs(g){return{x:Qe(g,1),y:Qe(g,2),z:Qe(g,3),visibility:Xe(g,4)!=null?Qe(g,4):void 0}}function qr(g,w){this.h=g,this.g=w,this.l=0}function Cs(g,w,_){return function(O,M){var R=O.g;if(O.o===void 0){var C=bu(R,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),V=bu(R,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),J=R.createProgram();if(R.attachShader(J,C),R.attachShader(J,V),R.linkProgram(J),!R.getProgramParameter(J,R.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+R.getProgramInfoLog(J));C=O.o=J,R.useProgram(C),V=R.getUniformLocation(C,"sampler0"),O.j={K:R.getAttribLocation(C,"aVertex"),J:R.getAttribLocation(C,"aTex"),ma:V},O.u=R.createBuffer(),R.bindBuffer(R.ARRAY_BUFFER,O.u),R.enableVertexAttribArray(O.j.K),R.vertexAttribPointer(O.j.K,2,R.FLOAT,!1,0,0),R.bufferData(R.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),R.STATIC_DRAW),R.bindBuffer(R.ARRAY_BUFFER,null),O.s=R.createBuffer(),R.bindBuffer(R.ARRAY_BUFFER,O.s),R.enableVertexAttribArray(O.j.J),R.vertexAttribPointer(O.j.J,2,R.FLOAT,!1,0,0),R.bufferData(R.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),R.STATIC_DRAW),R.bindBuffer(R.ARRAY_BUFFER,null),R.uniform1i(V,0)}C=O.j,R.useProgram(O.o),R.canvas.width=M.width,R.canvas.height=M.height,R.viewport(0,0,M.width,M.height),R.activeTexture(R.TEXTURE0),O.h.bindTexture2d(M.glName),R.enableVertexAttribArray(C.K),R.bindBuffer(R.ARRAY_BUFFER,O.u),R.vertexAttribPointer(C.K,2,R.FLOAT,!1,0,0),R.enableVertexAttribArray(C.J),R.bindBuffer(R.ARRAY_BUFFER,O.s),R.vertexAttribPointer(C.J,2,R.FLOAT,!1,0,0),R.bindFramebuffer(R.DRAW_FRAMEBUFFER?R.DRAW_FRAMEBUFFER:R.FRAMEBUFFER,null),R.clearColor(0,0,0,0),R.clear(R.COLOR_BUFFER_BIT),R.colorMask(!0,!0,!0,!0),R.drawArrays(R.TRIANGLE_FAN,0,4),R.disableVertexAttribArray(C.K),R.disableVertexAttribArray(C.J),R.bindBuffer(R.ARRAY_BUFFER,null),O.h.bindTexture2d(0)}(g,w),typeof g.g.canvas.transferToImageBitmap=="function"?Promise.resolve(g.g.canvas.transferToImageBitmap()):_?Promise.resolve(g.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(g.g.canvas):(g.i===void 0&&(g.i=document.createElement("canvas")),new Promise(function(O){g.i.height=g.g.canvas.height,g.i.width=g.g.canvas.width,g.i.getContext("2d",{}).drawImage(g.g.canvas,0,0,g.g.canvas.width,g.g.canvas.height),O(g.i)}))}function Za(g){this.g=g}var Ja=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function vu(g,w){return w+g}function Ms(g,w){window[g]=w}function Bs(g){if(this.g=g,this.listeners={},this.j={},this.H={},this.o={},this.u={},this.I=this.s=this.Z=!0,this.D=Promise.resolve(),this.Y="",this.C={},this.locateFile=g&&g.locateFile||vu,typeof window=="object")var w=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else{if(typeof location>"u")throw Error("solutions can only be loaded on a web page or in a web worker");w=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/"}if(this.$=w,g.options)for(var _=(w=c(Object.keys(g.options))).next();!_.done;_=w.next()){_=_.value;var O=g.options[_].default;O!==void 0&&(this.j[_]=typeof O=="function"?O():O)}}function Fr(g){var w,_,O,M,R,C,V,J,it,dt,bt;return Q(function(Nt){switch(Nt.g){case 1:return g.Z?(w=g.g.files===void 0?[]:typeof g.g.files=="function"?g.g.files(g.j):g.g.files,z(Nt,Q(function(pt){switch(pt.g){case 1:return pt.o=2,z(pt,WebAssembly.instantiate(Ja),4);case 4:pt.g=3,pt.o=0;break;case 2:return pt.o=0,pt.j=null,pt.return(!1);case 3:return pt.return(!0)}}),2)):Nt.return();case 2:if(_=Nt.h,typeof window=="object")return Ms("createMediapipeSolutionsWasm",{locateFile:g.locateFile}),Ms("createMediapipeSolutionsPackedAssets",{locateFile:g.locateFile}),C=w.filter(function(pt){return pt.data!==void 0}),V=w.filter(function(pt){return pt.data===void 0}),J=Promise.all(C.map(function(pt){var _t=ln(g,pt.url);if(pt.path!==void 0){var kt=pt.path;_t=_t.then(function(Pt){return g.overrideFile(kt,Pt),Promise.resolve(Pt)})}return _t})),it=Promise.all(V.map(function(pt){return pt.simd===void 0||pt.simd&&_||!pt.simd&&!_?function(_t){var kt=document.createElement("script");return kt.setAttribute("src",_t),kt.setAttribute("crossorigin","anonymous"),new Promise(function(Pt){kt.addEventListener("load",function(){Pt()},!1),kt.addEventListener("error",function(){Pt()},!1),document.body.appendChild(kt)})}(g.locateFile(pt.url,g.$)):Promise.resolve()})).then(function(){var pt,_t,kt;return Q(function(Pt){if(Pt.g==1)return pt=window.createMediapipeSolutionsWasm,_t=window.createMediapipeSolutionsPackedAssets,kt=g,z(Pt,pt(_t),2);kt.h=Pt.h,Pt.g=0})}),dt=Q(function(pt){return g.g.graph&&g.g.graph.url?pt=z(pt,ln(g,g.g.graph.url),0):(pt.g=0,pt=void 0),pt}),z(Nt,Promise.all([it,J,dt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return O=w.filter(function(pt){return pt.simd===void 0||pt.simd&&_||!pt.simd&&!_}).map(function(pt){return g.locateFile(pt.url,g.$)}),importScripts.apply(null,f(O)),M=g,z(Nt,createMediapipeSolutionsWasm(Module),6);case 6:M.h=Nt.h,g.l=new OffscreenCanvas(1,1),g.h.canvas=g.l,R=g.h.GL.createContext(g.l,{antialias:!1,alpha:!1,ja:typeof WebGL2RenderingContext<"u"?2:1}),g.h.GL.makeContextCurrent(R),Nt.g=4;break;case 7:if(g.l=document.createElement("canvas"),!(bt=g.l.getContext("webgl2",{}))&&!(bt=g.l.getContext("webgl",{})))return alert("Failed to create WebGL canvas context when passing video frame."),Nt.return();g.G=bt,g.h.canvas=g.l,g.h.createContext(g.l,!0,!0,{});case 4:g.i=new g.h.SolutionWasm,g.Z=!1,Nt.g=0}})}function ln(g,w){var _,O;return Q(function(M){return w in g.H?M.return(g.H[w]):(_=g.locateFile(w,""),O=fetch(_).then(function(R){return R.arrayBuffer()}),g.H[w]=O,M.return(O))})}function Gi(g,w,_){var O,M,R,C,V,J,it,dt,bt,Nt,pt,_t,kt,Pt;return Q(function(ne){switch(ne.g){case 1:if(!_)return ne.return(w);for(O={},M=0,R=c(Object.keys(_)),C=R.next();!C.done;C=R.next())V=C.value,typeof(J=_[V])!="string"&&J.type==="texture"&&w[J.stream]!==void 0&&++M;1<M&&(g.I=!1),it=c(Object.keys(_)),C=it.next();case 2:if(C.done){ne.g=4;break}if(dt=C.value,typeof(bt=_[dt])=="string")return kt=O,Pt=dt,z(ne,function(da,Ki,tr){var Us;return Q(function(Yi){return typeof tr=="number"||tr instanceof Uint8Array||tr instanceof da.h.Uint8BlobList?Yi.return(tr):tr instanceof da.h.Texture2dDataOut?((Us=da.u[Ki])||(Us=new qr(da.h,da.G),da.u[Ki]=Us),Yi.return(Cs(Us,tr,da.I))):Yi.return(void 0)})}(g,dt,w[bt]),14);if(Nt=w[bt.stream],bt.type==="detection_list"){if(Nt){for(var He=Nt.getRectList(),We=Nt.getLandmarksList(),Pe=Nt.getClassificationsList(),Yt=[],Ae=0;Ae<He.size();++Ae){var Zn=Mi(He.get(Ae),Hr,ha);Zn={boundingBox:{xCenter:Qe(Zn,1),yCenter:Qe(Zn,2),height:Qe(Zn,3),width:Qe(Zn,4),rotation:Qe(Zn,5,0),rectId:Ai(Zn,6)},landmarks:xs(Mi(We.get(Ae),an,Li),fa,1).map(zs),V:sc(Mi(Pe.get(Ae),Ii,Rs))},Yt.push(Zn)}He=Yt}else He=[];O[dt]=He,ne.g=7;break}if(bt.type==="proto_list"){if(Nt){for(He=Array(Nt.size()),We=0;We<Nt.size();We++)He[We]=Nt.get(We);Nt.delete()}else He=[];O[dt]=He,ne.g=7;break}if(Nt===void 0){ne.g=3;break}if(bt.type==="float_list"){O[dt]=Nt,ne.g=7;break}if(bt.type==="proto"){O[dt]=Nt,ne.g=7;break}if(bt.type!=="texture")throw Error("Unknown output config type: '"+bt.type+"'");return(pt=g.u[dt])||(pt=new qr(g.h,g.G),g.u[dt]=pt),z(ne,Cs(pt,Nt,g.I),13);case 13:_t=ne.h,O[dt]=_t;case 7:bt.transform&&O[dt]&&(O[dt]=bt.transform(O[dt])),ne.g=3;break;case 14:kt[Pt]=ne.h;case 3:C=it.next(),ne.g=2;break;case 4:return ne.return(O)}})}function Gr(g,w){for(var _=w.name||"$",O=[].concat(f(w.wants)),M=new g.h.StringList,R=c(w.wants),C=R.next();!C.done;C=R.next())M.push_back(C.value);R=g.h.PacketListener.implement({onResults:function(V){for(var J={},it=0;it<w.wants.length;++it)J[O[it]]=V.get(it);var dt=g.listeners[_];dt&&(g.D=Gi(g,J,w.outs).then(function(bt){bt=dt(bt);for(var Nt=0;Nt<w.wants.length;++Nt){var pt=J[O[Nt]];typeof pt=="object"&&pt.hasOwnProperty&&pt.hasOwnProperty("delete")&&pt.delete()}bt&&(g.D=bt)}))}}),g.i.attachMultiListener(M,R),M.delete()}function qn(g){var w=this;g=g||{};var _={url:"face_detection_short.binarypb"},O={type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}};this.g=new Bs({locateFile:g.locateFile,files:[{data:!0,url:"face_detection_short.binarypb"},{data:!0,url:"face_detection_short_range.tflite"},{simd:!0,url:"face_detection_solution_simd_wasm_bin.js"},{simd:!1,url:"face_detection_solution_wasm_bin.js"}],graph:_,listeners:[{wants:["detections","image_transformed"],outs:{image:"image_transformed",detections:{type:"detection_list",stream:"detections"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window=="object"&&window.navigator!==void 0&&("iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},model:{type:0,onChange:function(M){var R,C,V,J,it;return Q(function(dt){switch(dt.g){case 1:R=c(M==="short"?["face_detection_short_range.tflite"]:["face_detection_full_range_sparse.tflite"]),C=R.next();case 2:if(C.done){dt.g=4;break}return V=C.value,J="third_party/mediapipe/modules/face_detection/"+V,z(dt,ln(w.g,V),5);case 5:it=dt.h,w.g.overrideFile(J,it),C=R.next(),dt.g=2;break;case 4:return _.url=M==="short"?"face_detection_short.binarypb":"face_detection_full.binarypb",O.graphOptionXref.calculatorName=M==="short"?"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator":"facedetectionfullrangegpu__facedetectionfullrangecommon__TensorsToDetectionsCalculator",dt.return(!0)}})}},minDetectionConfidence:O}})}(a=Bs.prototype).close=function(){return this.i&&this.i.delete(),Promise.resolve()},a.reset=function(){var g=this;return Q(function(w){g.i&&(g.i.reset(),g.o={},g.u={}),w.g=0})},a.setOptions=function(g,w){var _=this;if(w=w||this.g.options){for(var O=[],M=[],R={},C=c(Object.keys(g)),V=C.next();!V.done;R={R:R.R,S:R.S},V=C.next()){var J=V.value;J in this.j&&this.j[J]===g[J]||(this.j[J]=g[J],(V=w[J])!==void 0&&(V.onChange&&(R.R=V.onChange,R.S=g[J],O.push(function(it){return function(){return Q(function(dt){if(dt.g==1)return z(dt,it.R(it.S),2);dt.h===!0&&(_.s=!0),dt.g=0})}}(R))),V.graphOptionXref&&(J={valueNumber:V.type===1?g[J]:0,valueBoolean:V.type===0&&g[J],valueString:V.type===2?g[J]:""},V=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),V.graphOptionXref),J),M.push(V))))}O.length===0&&M.length===0||(this.s=!0,this.B=(this.B===void 0?[]:this.B).concat(M),this.A=(this.A===void 0?[]:this.A).concat(O))}},a.initialize=function(){var g=this;return Q(function(w){return w.g==1?z(w,Fr(g),2):w.g!=3?z(w,function(_){var O,M,R,C,V,J,it,dt;return Q(function(bt){if(bt.g==1)return _.g.graph&&_.g.graph.url&&_.Y===_.g.graph.url?bt.return():(_.s=!0,_.g.graph&&_.g.graph.url?(_.Y=_.g.graph.url,z(bt,ln(_,_.g.graph.url),3)):void(bt.g=2));for(bt.g!=2&&(O=bt.h,_.i.loadGraph(O)),M=c(Object.keys(_.C)),R=M.next();!R.done;R=M.next())C=R.value,_.i.overrideFile(C,_.C[C]);if(_.C={},_.g.listeners)for(V=c(_.g.listeners),J=V.next();!J.done;J=V.next())it=J.value,Gr(_,it);dt=_.j,_.j={},_.setOptions(dt),bt.g=0})}(g),3):z(w,function(_){var O,M,R,C,V,J;return Q(function(it){switch(it.g){case 1:if(!_.s)return it.return();if(!_.A){it.g=2;break}O=c(_.A),M=O.next();case 3:if(M.done){it.g=5;break}return z(it,(0,M.value)(),4);case 4:M=O.next(),it.g=3;break;case 5:_.A=void 0;case 2:if(_.B){for(R=new _.h.GraphOptionChangeRequestList,C=c(_.B),V=C.next();!V.done;V=C.next())J=V.value,R.push_back(J);_.i.changeOptions(R),R.delete(),_.B=void 0}_.s=!1,it.g=0}})}(g),0)})},a.overrideFile=function(g,w){this.i?this.i.overrideFile(g,w):this.C[g]=w},a.clearOverriddenFiles=function(){this.C={},this.i&&this.i.clearOverriddenFiles()},a.send=function(g,w){var _,O,M,R,C,V,J,it,dt,bt=this;return Q(function(Nt){switch(Nt.g){case 1:return bt.g.inputs?(_=1e3*(w??performance.now()),z(Nt,bt.D,2)):Nt.return();case 2:return z(Nt,bt.initialize(),3);case 3:for(O=new bt.h.PacketDataList,M=c(Object.keys(g)),R=M.next();!R.done;R=M.next())if(C=R.value,V=bt.g.inputs[C]){t:{var pt=g[C];switch(V.type){case"video":var _t=bt.o[V.stream];if(_t||(_t=new qr(bt.h,bt.G),bt.o[V.stream]=_t),_t.l===0&&(_t.l=_t.h.createTexture()),typeof HTMLVideoElement<"u"&&pt instanceof HTMLVideoElement)var kt=pt.videoWidth,Pt=pt.videoHeight;else typeof HTMLImageElement<"u"&&pt instanceof HTMLImageElement?(kt=pt.naturalWidth,Pt=pt.naturalHeight):(kt=pt.width,Pt=pt.height);Pt={glName:_t.l,width:kt,height:Pt},(kt=_t.g).canvas.width=Pt.width,kt.canvas.height=Pt.height,kt.activeTexture(kt.TEXTURE0),_t.h.bindTexture2d(_t.l),kt.texImage2D(kt.TEXTURE_2D,0,kt.RGBA,kt.RGBA,kt.UNSIGNED_BYTE,pt),_t.h.bindTexture2d(0),_t=Pt;break t;case"detections":for((_t=bt.o[V.stream])||(_t=new Za(bt.h),bt.o[V.stream]=_t),_t.data||(_t.data=new _t.g.DetectionListData),_t.data.reset(pt.length),Pt=0;Pt<pt.length;++Pt){kt=pt[Pt];var ne=_t.data,He=ne.setBoundingBox,We=Pt,Pe=kt.boundingBox,Yt=new Hr;if(ie(Yt,1,Pe.xCenter),ie(Yt,2,Pe.yCenter),ie(Yt,3,Pe.height),ie(Yt,4,Pe.width),ie(Yt,5,Pe.rotation),ie(Yt,6,Pe.rectId),Pe=Wa(Yt,ha),He.call(ne,We,Pe),kt.landmarks)for(ne=0;ne<kt.landmarks.length;++ne){var Ae=!!(Yt=kt.landmarks[ne]).visibility;We=(He=_t.data).addNormalizedLandmark,Pe=Pt,Yt=Object.assign(Object.assign({},Yt),{visibility:Ae?Yt.visibility:0}),ie(Ae=new fa,1,Yt.x),ie(Ae,2,Yt.y),ie(Ae,3,Yt.z),Yt.visibility&&ie(Ae,4,Yt.visibility),Yt=Wa(Ae,mu),We.call(He,Pe,Yt)}if(kt.V)for(ne=0;ne<kt.V.length;++ne)We=(He=_t.data).addClassification,Pe=Pt,Yt=kt.V[ne],ie(Ae=new ze,2,Yt.ga),Yt.index&&ie(Ae,1,Yt.index),Yt.label&&ie(Ae,3,Yt.label),Yt.displayName&&ie(Ae,4,Yt.displayName),Yt=Wa(Ae,Ui),We.call(He,Pe,Yt)}_t=_t.data;break t;default:_t={}}}switch(J=_t,it=V.stream,V.type){case"video":O.pushTexture2d(Object.assign(Object.assign({},J),{stream:it,timestamp:_}));break;case"detections":(dt=J).stream=it,dt.timestamp=_,O.pushDetectionList(dt);break;default:throw Error("Unknown input config type: '"+V.type+"'")}}return bt.i.send(O),z(Nt,bt.D,4);case 4:O.delete(),Nt.g=0}})},a.onResults=function(g,w){this.listeners[w||"$"]=g},ot("Solution",Bs),ot("OptionType",{BOOL:0,NUMBER:1,ia:2,0:"BOOL",1:"NUMBER",2:"STRING"}),(a=qn.prototype).close=function(){return this.g.close(),Promise.resolve()},a.onResults=function(g){this.g.onResults(g)},a.initialize=function(){var g=this;return Q(function(w){return z(w,g.g.initialize(),0)})},a.reset=function(){this.g.reset()},a.send=function(g){var w=this;return Q(function(_){return z(_,w.g.send(g),0)})},a.setOptions=function(g){this.g.setOptions(g)},ot("FaceDetection",qn),ot("FACEDETECTION_LIPS",ji),ot("FACEDETECTION_LEFT_EYE",Vi),ot("FACEDETECTION_LEFT_EYEBROW",pa),ot("FACEDETECTION_RIGHT_EYE",yu),ot("FACEDETECTION_RIGHT_EYEBROW",Hi),ot("FACEDETECTION_FACE_OVAL",qi),ot("FACEDETECTION_CONTOURS",Fi),ot("FACEDETECTION_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),ot("VERSION","0.4.1646425229")}).call(dh);var Dr=function(){return Dr=Object.assign||function(a){for(var t,n=1,s=arguments.length;n<s;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(a[o]=t[o]);return a},Dr.apply(this,arguments)};function ja(a,t,n,s){return new(n||(n=Promise))(function(o,l){function c(d){try{h(s.next(d))}catch(y){l(y)}}function f(d){try{h(s.throw(d))}catch(y){l(y)}}function h(d){var y;d.done?o(d.value):(y=d.value,y instanceof n?y:new n(function(b){b(y)})).then(c,f)}h((s=s.apply(a,[])).next())})}function Va(a,t){var n,s,o,l,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function f(h){return function(d){return function(y){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,s&&(o=2&y[0]?s.return:y[0]?s.throw||((o=s.return)&&o.call(s),0):s.next)&&!(o=o.call(s,y[1])).done)return o;switch(s=0,o&&(y=[2&y[0],o.value]),y[0]){case 0:case 1:o=y;break;case 4:return c.label++,{value:y[1],done:!1};case 5:c.label++,s=y[1],y=[0];continue;case 7:y=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||y[0]!==6&&y[0]!==2)){c=0;continue}if(y[0]===3&&(!o||y[1]>o[0]&&y[1]<o[3])){c.label=y[1];break}if(y[0]===6&&c.label<o[1]){c.label=o[1],o=y;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(y);break}o[2]&&c.ops.pop(),c.trys.pop();continue}y=t.call(a,c)}catch(b){y=[6,b],s=0}finally{n=o=0}if(5&y[0])throw y[1];return{value:y[0]?y[1]:void 0,done:!0}}([h,d])}}}var Ny=["rightEye","leftEye","noseTip","mouthCenter","rightEarTragion","leftEarTragion"],mh={modelType:"short",runtime:"mediapipe",maxFaces:1},ax=function(){function a(t){var n=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceDetectorSolution=new nx.FaceDetection({locateFile:function(s,o){if(t.solutionPath){var l=t.solutionPath.replace(/\/+$/,"");return"".concat(l,"/").concat(s)}return"".concat(o,"/").concat(s)}}),this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode,model:t.modelType}),this.faceDetectorSolution.onResults(function(s){if(n.height=s.image.height,n.width=s.image.width,n.faces=[],s.detections!==null)for(var o=0,l=s.detections;o<l.length;o++){var c=l[o];n.faces.push(n.normalizedToAbsolute(c.landmarks,{xMin:h=(f=c.boundingBox).xCenter-f.width/2,xMax:h+f.width,yMin:d=f.yCenter-f.height/2,yMax:d+f.height,width:f.width,height:f.height}))}var f,h,d})}return a.prototype.normalizedToAbsolute=function(t,n){var s=this;return{keypoints:t.map(function(o,l){return{x:o.x*s.width,y:o.y*s.height,name:Ny[l]}}),box:{xMin:n.xMin*this.width,yMin:n.yMin*this.height,xMax:n.xMax*this.width,yMax:n.yMax*this.height,width:n.width*this.width,height:n.height*this.height}}},a.prototype.estimateFaces=function(t,n){return ja(this,void 0,void 0,function(){var s,o;return Va(this,function(l){switch(l.label){case 0:return n&&n.flipHorizontal&&n.flipHorizontal!==this.selfieMode&&(this.selfieMode=n.flipHorizontal,this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode})),t instanceof me?(o=ImageData.bind,[4,gy(t)]):[3,2];case 1:return s=new(o.apply(ImageData,[void 0,l.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:s=t,l.label=3;case 3:return t=s,[4,this.faceDetectorSolution.send({image:t})];case 4:return l.sent(),[2,this.faces]}})})},a.prototype.dispose=function(){this.faceDetectorSolution.close()},a.prototype.reset=function(){this.faceDetectorSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},a.prototype.initialize=function(){return this.faceDetectorSolution.initialize()},a}();function rx(a){return ja(this,void 0,void 0,function(){var t,n;return Va(this,function(s){switch(s.label){case 0:return t=function(o){if(o==null)return Dr({},mh);var l=Dr({},o);return l.runtime="mediapipe",l.modelType==null&&(l.modelType=mh.modelType),l.maxFaces==null&&(l.maxFaces=mh.maxFaces),l}(a),[4,(n=new ax(t)).initialize()];case 1:return s.sent(),[2,n]}})})}function Ey(a){return a instanceof me?{height:a.shape[0],width:a.shape[1]}:{height:a.height,width:a.width}}function _y(a){return a instanceof me?a:yy(a)}function gh(a,t){$(a.width!==0,function(){return"".concat(t," width cannot be 0.")}),$(a.height!==0,function(){return"".concat(t," height cannot be 0.")})}function sx(a,t,n){var s=t.outputTensorSize,o=t.keepAspectRatio,l=t.borderMode,c=t.outputTensorFloatRange,f=Ey(a),h=function(S,N){return{xCenter:.5*S.width,yCenter:.5*S.height,width:S.width,height:S.height,rotation:0}}(f),d=function(S,N,E){if(E===void 0&&(E=!1),!E)return{top:0,left:0,right:0,bottom:0};var D=N.height,k=N.width;gh(N,"targetSize"),gh(S,"roi");var z,Z,P=D/k,H=S.height/S.width,G=0,Q=0;return P>H?(z=S.width,Z=S.width*P,Q=(1-H/P)/2):(z=S.height/P,Z=S.height,G=(1-P/H)/2),S.width=z,S.height=Z,{top:Q,left:G,right:G,bottom:Q}}(h,s,o),y=function(S,N,E,D){var k=S.width,z=S.height,Z=1,P=Math.cos(S.rotation),H=Math.sin(S.rotation),G=S.xCenter,Q=S.yCenter,st=1/N,ut=1/E,ot=new Array(16);return ot[0]=k*P*Z*st,ot[1]=-z*H*st,ot[2]=0,ot[3]=(-.5*k*P*Z+.5*z*H+G)*st,ot[4]=k*H*Z*ut,ot[5]=z*P*ut,ot[6]=0,ot[7]=(-.5*z*P-.5*k*H*Z+Q)*ut,ot[8]=0,ot[9]=0,ot[10]=k*st,ot[11]=0,ot[12]=0,ot[13]=0,ot[14]=0,ot[15]=1,function(ft){if(ft.length!==16)throw new Error("Array length must be 16 but got ".concat(ft.length));return[[ft[0],ft[1],ft[2],ft[3]],[ft[4],ft[5],ft[6],ft[7]],[ft[8],ft[9],ft[10],ft[11]],[ft[12],ft[13],ft[14],ft[15]]]}(ot)}(h,f.width,f.height),b=Mt(function(){var S=_y(a),N=xr(function(k,z,Z){return gh(Z,"inputResolution"),[1/Z.width*k[0][0]*z.width,1/Z.height*k[0][1]*z.width,k[0][3]*z.width,1/Z.width*k[1][0]*z.height,1/Z.height*k[1][1]*z.height,k[1][3]*z.height,0,0]}(y,f,s),[1,8]),E=l==="zero"?"constant":"nearest",D=Ei.transform(Mn(ce(S,"float32")),N,"bilinear",E,0,[s.height,s.width]);return c!=null?function(k,z){var Z=function(P,H,G,Q){var st=(Q-G)/255;return{scale:st,offset:G-0*st}}(0,0,z[0],z[1]);return Mt(function(){return wt(ct(k,Z.scale),Z.offset)})}(D,c):D});return{imageTensor:b,padding:d,transformationMatrix:y}}function Cg(a){a.reduceBoxesInLowestLayer==null&&(a.reduceBoxesInLowestLayer=!1),a.interpolatedScaleAspectRatio==null&&(a.interpolatedScaleAspectRatio=1),a.fixedAnchorSize==null&&(a.fixedAnchorSize=!1);for(var t=[],n=0;n<a.numLayers;){for(var s=[],o=[],l=[],c=[],f=n;f<a.strides.length&&a.strides[f]===a.strides[n];){var h=Mg(a.minScale,a.maxScale,f,a.strides.length);if(f===0&&a.reduceBoxesInLowestLayer)l.push(1),l.push(2),l.push(.5),c.push(.1),c.push(h),c.push(h);else{for(var d=0;d<a.aspectRatios.length;++d)l.push(a.aspectRatios[d]),c.push(h);if(a.interpolatedScaleAspectRatio>0){var y=f===a.strides.length-1?1:Mg(a.minScale,a.maxScale,f+1,a.strides.length);c.push(Math.sqrt(h*y)),l.push(a.interpolatedScaleAspectRatio)}}f++}for(var b=0;b<l.length;++b){var S=Math.sqrt(l[b]);s.push(c[b]/S),o.push(c[b]*S)}var N=0,E=0;if(a.featureMapHeight.length>0)N=a.featureMapHeight[n],E=a.featureMapWidth[n];else{var D=a.strides[n];N=Math.ceil(a.inputSizeHeight/D),E=Math.ceil(a.inputSizeWidth/D)}for(var k=0;k<N;++k)for(var z=0;z<E;++z)for(var Z=0;Z<s.length;++Z){var P={xCenter:(z+a.anchorOffsetX)/E,yCenter:(k+a.anchorOffsetY)/N,width:0,height:0};a.fixedAnchorSize?(P.width=1,P.height=1):(P.width=o[Z],P.height=s[Z]),t.push(P)}n=f}return t}function Mg(a,t,n,s){return s===1?.5*(a+t):a+(t-a)*n/(s-1)}function Bg(a,t){var n=t[0],s=t[1];return[n*a[0]+s*a[1]+a[3],n*a[4]+s*a[5]+a[7]]}function ix(a,t,n,s){return ja(this,void 0,void 0,function(){var o,l,c,f,h;return Va(this,function(d){switch(d.label){case 0:return a.sort(function(y,b){return Math.max.apply(Math,b.score)-Math.max.apply(Math,y.score)}),o=xr(a.map(function(y){return[y.locationData.relativeBoundingBox.yMin,y.locationData.relativeBoundingBox.xMin,y.locationData.relativeBoundingBox.yMax,y.locationData.relativeBoundingBox.xMax]})),l=Ke(a.map(function(y){return y.score[0]})),[4,Ei.nonMaxSuppressionAsync(o,l,t,n)];case 1:return[4,(c=d.sent()).array()];case 2:return f=d.sent(),h=a.filter(function(y,b){return f.indexOf(b)>-1}),pe([o,l,c]),[2,h]}})})}function ox(a,t,n){return ja(this,void 0,void 0,function(){var s,o,l,c,f;return Va(this,function(h){switch(h.label){case 0:return s=a[0],o=a[1],l=function(d,y,b){return Mt(function(){var S,N,E,D;b.reverseOutputOrder?(N=ke(Rt(d,[0,b.boxCoordOffset+0],[-1,1])),S=ke(Rt(d,[0,b.boxCoordOffset+1],[-1,1])),D=ke(Rt(d,[0,b.boxCoordOffset+2],[-1,1])),E=ke(Rt(d,[0,b.boxCoordOffset+3],[-1,1]))):(S=ke(Rt(d,[0,b.boxCoordOffset+0],[-1,1])),N=ke(Rt(d,[0,b.boxCoordOffset+1],[-1,1])),E=ke(Rt(d,[0,b.boxCoordOffset+2],[-1,1])),D=ke(Rt(d,[0,b.boxCoordOffset+3],[-1,1]))),N=wt(ct(It(N,b.xScale),y.w),y.x),S=wt(ct(It(S,b.yScale),y.h),y.y),b.applyExponentialOnBoxSize?(E=ct(Ua(It(E,b.hScale)),y.h),D=ct(Ua(It(D,b.wScale)),y.w)):(E=ct(It(E,b.hScale),y.h),D=ct(It(D,b.wScale),y.h));var k=zt(S,It(E,2)),z=zt(N,It(D,2)),Z=wt(S,It(E,2)),P=wt(N,It(D,2)),H=Ie([et(k,[b.numBoxes,1]),et(z,[b.numBoxes,1]),et(Z,[b.numBoxes,1]),et(P,[b.numBoxes,1])],1);if(b.numKeypoints)for(var G=0;G<b.numKeypoints;++G){var Q=b.keypointCoordOffset+G*b.numValuesPerKeypoint,st=void 0,ut=void 0;b.reverseOutputOrder?(st=ke(Rt(d,[0,Q],[-1,1])),ut=ke(Rt(d,[0,Q+1],[-1,1]))):(ut=ke(Rt(d,[0,Q],[-1,1])),st=ke(Rt(d,[0,Q+1],[-1,1])));var ot=wt(ct(It(st,b.xScale),y.w),y.x),ft=wt(ct(It(ut,b.yScale),y.h),y.y);H=Ie([H,et(ot,[b.numBoxes,1]),et(ft,[b.numBoxes,1])],1)}return H})}(o,t,n),c=Mt(function(){var d=s;return n.sigmoidScore?(n.scoreClippingThresh!=null&&(d=$2(s,-n.scoreClippingThresh,n.scoreClippingThresh)),d=ps(d)):d}),[4,ux(l,c,n)];case 1:return f=h.sent(),pe([l,c]),[2,f]}})})}function ux(a,t,n){return ja(this,void 0,void 0,function(){var s,o,l,c,f,h,d,y,b,S,N,E;return Va(this,function(D){switch(D.label){case 0:return s=[],[4,a.data()];case 1:return o=D.sent(),[4,t.data()];case 2:for(l=D.sent(),c=0;c<n.numBoxes;++c)if(!(n.minScoreThresh!=null&&l[c]<n.minScoreThresh||(f=c*n.numCoords,h=lx(o[f+0],o[f+1],o[f+2],o[f+3],l[c],n.flipVertically,c),(d=h.locationData.relativeBoundingBox).width<0||d.height<0))){if(n.numKeypoints>0)for((y=h.locationData).relativeKeypoints=[],b=n.numKeypoints*n.numValuesPerKeypoint,S=0;S<b;S+=n.numValuesPerKeypoint)N=f+n.keypointCoordOffset+S,E={x:o[N+0],y:n.flipVertically?1-o[N+1]:o[N+1]},y.relativeKeypoints.push(E);s.push(h)}return[2,s]}})})}function lx(a,t,n,s,o,l,c){return{score:[o],ind:c,locationData:{relativeBoundingBox:{xMin:t,yMin:l?1-n:a,xMax:s,yMax:l?1-a:n,width:s-t,height:n-a}}}}var Kl,cx={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:128,inputSizeWidth:128,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},fx={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:0,featureMapHeight:[],featureMapWidth:[],numLayers:1,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[4],aspectRatios:[1],fixedAnchorSize:!0},yh={runtime:"tfjs",modelType:"short",maxFaces:1,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"},hx={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:896,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:128,yScale:128,hScale:128,wScale:128,minScoreThresh:.5},px={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2304,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.6},dx={outputTensorSize:{width:128,height:128},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},mx={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},gx=function(){function a(t,n,s){this.detectorModel=n,this.maxFaces=s,t==="full"?(this.imageToTensorConfig=mx,this.tensorsToDetectionConfig=px,this.anchors=Cg(fx)):(this.imageToTensorConfig=dx,this.tensorsToDetectionConfig=hx,this.anchors=Cg(cx));var o=Ke(this.anchors.map(function(h){return h.width})),l=Ke(this.anchors.map(function(h){return h.height})),c=Ke(this.anchors.map(function(h){return h.xCenter})),f=Ke(this.anchors.map(function(h){return h.yCenter}));this.anchorTensor={x:c,y:f,w:o,h:l}}return a.prototype.dispose=function(){this.detectorModel.dispose(),pe([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},a.prototype.reset=function(){},a.prototype.detectFaces=function(t,n){return n===void 0&&(n=!1),ja(this,void 0,void 0,function(){var s,o,l,c,f,h,d,y,b,S,N;return Va(this,function(E){switch(E.label){case 0:return t==null?(this.reset(),[2,[]]):(s=Mt(function(){var D=ce(_y(t),"float32");return n&&(D=ke(Ei.flipLeftRight(Mn(D,0)),[0])),D}),o=sx(s,this.imageToTensorConfig),l=o.imageTensor,c=o.transformationMatrix,f=this.detectorModel.execute(l,"Identity:0"),h=function(D){return Mt(function(){var k=function(P){return Mt(function(){return[Rt(P,[0,0,0],[1,-1,1]),Rt(P,[0,0,1],[1,-1,-1])]})}(D),z=k[0],Z=k[1];return{boxes:ke(Z),logits:ke(z)}})}(f),d=h.boxes,[4,ox([y=h.logits,d],this.anchorTensor,this.tensorsToDetectionConfig)]);case 1:return(b=E.sent()).length===0?(pe([s,l,f,y,d]),[2,b]):[4,ix(b,this.maxFaces,.3)];case 2:return S=E.sent(),N=function(D,k){D===void 0&&(D=[]);var z,Z=(z=k,[].concat.apply([],z));return D.forEach(function(P){var H=P.locationData;H.relativeKeypoints.forEach(function(ft){var St=Bg(Z,[ft.x,ft.y]),Dt=St[0],Ct=St[1];ft.x=Dt,ft.y=Ct});var G=H.relativeBoundingBox,Q=Number.MAX_VALUE,st=Number.MAX_VALUE,ut=Number.MIN_VALUE,ot=Number.MIN_VALUE;[[G.xMin,G.yMin],[G.xMin+G.width,G.yMin],[G.xMin+G.width,G.yMin+G.height],[G.xMin,G.yMin+G.height]].forEach(function(ft){var St=Bg(Z,ft),Dt=St[0],Ct=St[1];Q=Math.min(Q,Dt),ut=Math.max(ut,Dt),st=Math.min(st,Ct),ot=Math.max(ot,Ct)}),H.relativeBoundingBox={xMin:Q,xMax:ut,yMin:st,yMax:ot,width:ut-Q,height:ot-st}}),D}(S,c),pe([s,l,f,y,d]),[2,N]}})})},a.prototype.estimateFaces=function(t,n){return ja(this,void 0,void 0,function(){var s,o;return Va(this,function(l){return s=Ey(t),o=!!n&&n.flipHorizontal,[2,this.detectFaces(t,o).then(function(c){return c.map(function(f){for(var h=f.locationData.relativeKeypoints.map(function(E,D){return Dr(Dr({},E),{x:E.x*s.width,y:E.y*s.height,name:Ny[D]})}),d=f.locationData.relativeBoundingBox,y=0,b=["width","xMax","xMin"];y<b.length;y++)d[b[y]]*=s.width;for(var S=0,N=["height","yMax","yMin"];S<N.length;S++)d[N[S]]*=s.height;return{keypoints:h,box:d}})})]})})},a}();function yx(a){return ja(this,void 0,void 0,function(){var t,n,s;return Va(this,function(o){switch(o.label){case 0:return t=function(l){if(l==null)return Dr({},yh);var c=Dr({},l);return c.modelType==null&&(c.modelType=yh.modelType),c.maxFaces==null&&(c.maxFaces=yh.maxFaces),c.detectorModelUrl==null&&(c.modelType==="full"?c.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/full/1":c.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"),c}(a),n=typeof t.detectorModelUrl=="string"&&t.detectorModelUrl.indexOf("https://tfhub.dev")>-1,[4,wy(t.detectorModelUrl,{fromTFHub:n})];case 1:return s=o.sent(),[2,new gx(t.modelType,s,t.maxFaces)]}})})}function bx(a,t){return ja(this,void 0,void 0,function(){var n,s;return Va(this,function(o){if(a===Kl.MediaPipeFaceDetector){if(s=void 0,(n=t)!=null){if(n.runtime==="tfjs")return[2,yx(n)];if(n.runtime==="mediapipe")return[2,rx(n)];s=n.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' "+"or 'mediapipe', but got ".concat(s))}throw new Error("".concat(a," is not a supported model name."))})})}function bh(a){return a.width*a.height}function Ug(a){var t=a.xCenter-a.width/2,n=t+a.width,s=a.yCenter-a.height/2;return{xMin:t,xMax:n,yMin:s,yMax:s+a.height,width:a.width,height:a.height}}function vx(a,t){var n=Ug(a),s=Ug(t);if(!function(c,f){return!(c.xMax<f.xMin||f.xMax<c.xMin||c.yMax<f.yMin||f.yMax<c.yMin)}(n,s))return 0;var o=bh(function(c,f){var h=Math.max(c.xMin,f.xMin),d=Math.min(c.xMax,f.xMax),y=Math.max(c.yMin,f.yMin),b=Math.min(c.yMax,f.yMax);return{xMin:h,xMax:d,yMin:y,yMax:b,width:Math.max(d-h,0),height:Math.max(b-y,0)}}(n,s)),l=bh(n)+bh(s)-o;return l>0?o/l:0}function Sx(a,t,n,s){var o=a.width,l=a.height,c=1,f=Math.cos(a.rotation),h=Math.sin(a.rotation),d=a.xCenter,y=a.yCenter,b=1/t,S=1/n,N=new Array(16);return N[0]=o*f*c*b,N[1]=-l*h*b,N[2]=0,N[3]=(-.5*o*f*c+.5*l*h+d)*b,N[4]=o*h*c*S,N[5]=l*f*S,N[6]=0,N[7]=(-.5*l*f-.5*o*h*c+y)*S,N[8]=0,N[9]=0,N[10]=o*b,N[11]=0,N[12]=0,N[13]=0,N[14]=0,N[15]=1,function(E){if(E.length!==16)throw new Error("Array length must be 16 but got "+E.length);return[[E[0],E[1],E[2],E[3]],[E[4],E[5],E[6],E[7]],[E[8],E[9],E[10],E[11]],[E[12],E[13],E[14],E[15]]]}(N)}function xy(a){return a instanceof me?{height:a.shape[0],width:a.shape[1]}:{height:a.height,width:a.width}}function Ay(a){return a-2*Math.PI*Math.floor((a+Math.PI)/(2*Math.PI))}function Oy(a){return a instanceof me?a:yy(a)}function vh(a,t){$(a.width!==0,function(){return t+" width cannot be 0."}),$(a.height!==0,function(){return t+" height cannot be 0."})}function wx(a,t){var n=function(s,o,l,c){var f=o-s,h=c-l,d=h/f;return{scale:d,offset:l-s*d}}(0,255,t[0],t[1]);return Mt(function(){return wt(ct(a,n.scale),n.offset)})}function Tx(a,t,n){var s=t.outputTensorSize,o=t.keepAspectRatio,l=t.outputTensorFloatRange,c=xy(a),f=function(b,S){return S?{xCenter:S.xCenter*b.width,yCenter:S.yCenter*b.height,width:S.width*b.width,height:S.height*b.height,rotation:S.rotation}:{xCenter:.5*b.width,yCenter:.5*b.height,width:b.width,height:b.height,rotation:0}}(c,n),h=function(b,S,N){if(N===void 0&&(N=!1),!N)return{top:0,left:0,right:0,bottom:0};var E=S.height,D=S.width;vh(S,"targetSize"),vh(b,"roi");var k,z,Z=E/D,P=b.height/b.width,H=0,G=0;return Z>P?(k=b.width,z=b.width*Z,G=(1-P/Z)/2):(k=b.height/Z,z=b.height,H=(1-Z/P)/2),b.width=k,b.height=z,{top:G,left:H,right:H,bottom:G}}(f,s,o),d=Sx(f,c.width,c.height),y=Mt(function(){var b=Oy(a),S=xr(function(D,k,z){return vh(z,"inputResolution"),[1/z.width*D[0][0]*k.width,1/z.height*D[0][1]*k.width,D[0][3]*k.width,1/z.width*D[1][0]*k.height,1/z.height*D[1][1]*k.height,D[1][3]*k.height,0,0]}(d,c,s),[1,8]),N="nearest",E=Ei.transform(Mn(ce(b,"float32")),S,"bilinear",N,0,[s.height,s.width]);return l!=null?wx(E,l):E});return{imageTensor:y,padding:h,transformationMatrix:d}}function Ig(a){return{xCenter:a.xMin+a.width/2,yCenter:a.yMin+a.height/2,width:a.width,height:a.height}}function Nx(a){var t=a.relativeKeypoints;if(t.length<=1)throw new Error("2 or more keypoints required to calculate a rect.");var n=Number.MAX_VALUE,s=Number.MAX_VALUE,o=Number.MIN_VALUE,l=Number.MIN_VALUE;return t.forEach(function(c){n=Math.min(n,c.x),o=Math.max(o,c.x),s=Math.min(s,c.y),l=Math.max(l,c.y)}),{xCenter:(n+o)/2,yCenter:(s+l)/2,width:o-n,height:l-s}}function Lg(a,t,n,s,o){var l=n==="rect"?function(c,f,h){var d,y=c.locationData;return d=Ig(y.boundingBox),d}(a):function(c,f){var h=c.locationData;return f==="boundingbox"?Ig(h.relativeBoundingBox):Nx(h)}(a,t);return o&&(l.rotation=function(c,f,h){var d,y=c.locationData,b=h.rotationVectorStartKeypointIndex,S=h.rotationVectorEndKeypointIndex;d=h.rotationVectorTargetAngle?h.rotationVectorTargetAngle:Math.PI*h.rotationVectorTargetAngleDegree/180;var N=y.relativeKeypoints[b].x*f.width,E=y.relativeKeypoints[b].y*f.height,D=y.relativeKeypoints[S].x*f.width,k=y.relativeKeypoints[S].y*f.height;return Ay(d-Math.atan2(-(k-E),D-N))}(a,s,o)),l}function Ex(a,t,n){for(var s=0;s<t.length;++s){var o=t[s],l=n[a[s]];l.x=o.x,l.y=o.y}}function _x(a,t,n,s){if(typeof t=="string"){if(t==="copy")for(var o=0;o<n.length;++o)s[a[o]].z=n[o].z}else{var l=function(c,f){for(var h=0,d=0;d<f.length;++d)h+=c[f[d]].z;return h/f.length}(s,t);for(o=0;o<a.length;++o)s[a[o]].z=l}}function xx(a,t){for(var n=function(f){var h=[].concat.apply([],f.map(function(N){return N.indexesMapping}));if(h.length===0)throw new Error("There should be at least one landmark in indexes mapping");var d=h[0],y=h[0],b=new Set(h);b.forEach(function(N){d=Math.min(d,N),y=Math.max(y,N)});var S=b.size;if(d!==0)throw new Error("Indexes are expected to start with 0 instead of "+d);if(y+1!==S)throw new Error("Indexes should have no gaps but "+(y-S+1)+" indexes are missing");return S}(t),s=new Array(n).fill(null).map(Object),o=0;o<a.length;++o){var l=a[o],c=t[o];if(l.length!==c.indexesMapping.length)throw new Error("There are "+l.length+" refinement landmarks while mapping has "+c.indexesMapping.length);Ex(c.indexesMapping,l,s),_x(c.indexesMapping,c.zRefinement,l,s)}return s}function Ax(a,t){return a.map(function(n){var s=Qn(Qn({},n),{x:n.x*t.width,y:n.y*t.height});return n.z!=null&&(s.z=n.z*t.width),s})}function Ox(a,t){return a==="none"?t:function(n){return 1/(1+Math.exp(-n))}(t)}function us(a,t,n,s){return Ra(this,void 0,void 0,function(){var o,l,c,f,h,d,y,b;return za(this,function(S){switch(S.label){case 0:return n=n||t.flipHorizontally||!1,s=s||t.flipVertically||!1,o=a.size,l=o/t.numLandmarks,[4,a.data()];case 1:for(c=S.sent(),f=[],h=0;h<t.numLandmarks;++h)d=h*l,(b={x:0,y:0}).x=n?t.inputImageWidth-c[d]:c[d],l>1&&(b.y=s?t.inputImageHeight-c[d+1]:c[d+1]),l>2&&(b.z=c[d+2]),l>3&&(b.score=Ox(t.visibilityActivation,c[d+3])),f.push(b);for(y=0;y<f.length;++y)(b=f[y]).x=b.x/t.inputImageWidth,b.y=b.y/t.inputImageHeight,b.z=b.z/t.inputImageWidth/(t.normalizeZ||1);return[2,f]}})})}function jg(a,t,n){var s=a.width,o=a.height,l=a.rotation;if(n.rotation==null&&n.rotationDegree==null||(l=function(d,y){return y.rotation!=null?d+=y.rotation:y.rotationDegree!=null&&(d+=Math.PI*y.rotationDegree/180),Ay(d)}(l,n)),l===0)a.xCenter=a.xCenter+s*n.shiftX,a.yCenter=a.yCenter+o*n.shiftY;else{var c=(t.width*s*n.shiftX*Math.cos(l)-t.height*o*n.shiftY*Math.sin(l))/t.width,f=(t.width*s*n.shiftX*Math.sin(l)+t.height*o*n.shiftY*Math.cos(l))/t.height;a.xCenter=a.xCenter+c,a.yCenter=a.yCenter+f}{var h=Math.max(s*t.width,o*t.height);s=h/t.width,o=h/t.height}return a.width=s*n.scaleX,a.height=o*n.scaleY,a}(Kl||(Kl={})).MediaPipeFaceDetector="MediaPipeFaceDetector";var Sh={runtime:"tfjs",maxFaces:1,refineLandmarks:!1,landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"},wh={flipHorizontal:!1,staticImageMode:!1},Vg={shiftX:0,shiftY:0,scaleX:1.5,scaleY:1.5},Dx={outputTensorSize:{width:192,height:192},outputTensorFloatRange:[0,1]},Hg={numLandmarks:468,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},kx={numLandmarks:80,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},qg={numLandmarks:71,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},Fg={numLandmarks:5,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},$x={indexesMapping:Array.from(Array(468).keys()),zRefinement:"copy"},Rx={indexesMapping:[61,146,91,181,84,17,314,405,321,375,291,185,40,39,37,0,267,269,270,409,78,95,88,178,87,14,317,402,318,324,308,191,80,81,82,13,312,311,310,415,76,77,90,180,85,16,315,404,320,307,306,184,74,73,72,11,302,303,304,408,62,96,89,179,86,15,316,403,319,325,292,183,42,41,38,12,268,271,272,407],zRefinement:"none"},zx={indexesMapping:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173,130,25,110,24,23,22,26,112,243,247,30,29,27,28,56,190,226,31,228,229,230,231,232,233,244,113,225,224,223,222,221,189,35,124,46,53,52,65,143,111,117,118,119,120,121,128,245,156,70,63,105,66,107,55,193],zRefinement:"none"},Cx={indexesMapping:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398,359,255,339,254,253,252,256,341,463,467,260,259,257,258,286,414,446,261,448,449,450,451,452,453,464,342,445,444,443,442,441,413,265,353,276,283,282,295,372,340,346,347,348,349,350,357,465,383,300,293,334,296,336,285,417],zRefinement:"none"},Mx={indexesMapping:[468,469,470,471,472],zRefinement:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173]},Bx={indexesMapping:[473,474,475,476,477],zRefinement:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398]},Yl,Ux=function(){function a(t,n,s,o){this.detector=t,this.landmarkModel=n,this.maxFaces=s,this.withAttention=o,this.prevFaceRectsFromLandmarks=null}return a.prototype.estimateFaces=function(t,n){return Ra(this,void 0,void 0,function(){var s,o,l,c,f,h,d,y,b,S,N,E,D,k=this;return za(this,function(z){switch(z.label){case 0:return s=function(H){if(H==null)return Qn({},wh);var G=Qn({},H);return G.flipHorizontal==null&&(G.flipHorizontal=wh.flipHorizontal),G.staticImageMode==null&&(G.staticImageMode=wh.staticImageMode),G}(n),t==null?(this.reset(),[2,[]]):(o=xy(t),l=Mt(function(){var H=ce(Oy(t),"float32");return s.flipHorizontal&&(H=ke(Ei.flipLeftRight(Mn(H,0)),[0])),H}),c=this.prevFaceRectsFromLandmarks,s.staticImageMode||c==null||c.length<this.maxFaces?[4,this.detector.detectFaces(l,!1)]:[3,2]);case 1:return(h=z.sent()).length===0?(this.reset(),l.dispose(),[2,[]]):(f=h.map(function(H){return k.faceDetectionFrontDetectionToRoi(H,o)}),[3,3]);case 2:f=[],z.label=3;case 3:return Z=.5,P=[],[f,c||[]].forEach(function(H){return H.forEach(function(G){(P=P.filter(function(Q){return vx(G,Q)<=Z})).push(G)})}),d=P,[4,Promise.all(d.map(function(H){return k.faceLandmark(H,l)}))];case 4:for(y=z.sent(),b=[],this.prevFaceRectsFromLandmarks=[],S=0;S<y.length;++S)(N=y[S])!=null&&(this.prevFaceRectsFromLandmarks.push(this.faceLandmarksToRoi(N,o)),(E=Ax(N,o))!=null&&E.forEach(function(H,G){var Q=Ty.get(G);Q!=null&&(H.name=Q)}),D=Jh(E),b.push({keypoints:E,box:D.locationData.relativeBoundingBox}));return l.dispose(),[2,b]}var Z,P})})},a.prototype.dispose=function(){this.detector.dispose(),this.landmarkModel.dispose()},a.prototype.reset=function(){this.detector.reset(),this.prevFaceRectsFromLandmarks=null},a.prototype.faceDetectionFrontDetectionToRoi=function(t,n){return jg(Lg(t,"boundingbox","normRect",n,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:1,rotationVectorTargetAngleDegree:0}),n,Vg)},a.prototype.faceLandmark=function(t,n){return Ra(this,void 0,void 0,function(){var s,o,l,c,f,h,d;return za(this,function(y){switch(y.label){case 0:return s=Tx(n,Dx,t).imageTensor,o=["output_faceflag"].concat(this.withAttention?["output_mesh_identity","output_lips","Identity_6:0","Identity_1:0","Identity_2:0","Identity_5:0"]:["output_mesh"]),l=this.landmarkModel.execute(s,o),c=l[0],f=l.slice(1),[4,c.data()];case 1:return y.sent()[0]<.5?(pe(l),pe(s),[2,null]):this.withAttention?[4,this.tensorsToFaceLandmarksWithAttention(f)]:[3,3];case 2:return h=y.sent(),[3,5];case 3:return[4,this.tensorsToFaceLandmarks(f)];case 4:h=y.sent(),y.label=5;case 5:return d=function(b,S,N){N===void 0&&(N={ignoreRotation:!1});for(var E=[],D=0,k=b;D<k.length;D++){var z=k[D],Z=z.x-.5,P=z.y-.5,H=N.ignoreRotation?0:S.rotation,G=Math.cos(H)*Z-Math.sin(H)*P,Q=Math.sin(H)*Z+Math.cos(H)*P;G=G*S.width+S.xCenter,Q=Q*S.height+S.yCenter;var st=z.z*S.width,ut=Qn({},z);ut.x=G,ut.y=Q,ut.z=st,E.push(ut)}return E}(h,t),pe(l),pe(s),[2,d]}})})},a.prototype.tensorsToFaceLandmarks=function(t){return Ra(this,void 0,void 0,function(){return za(this,function(n){return[2,us(t[0],Hg)]})})},a.prototype.tensorsToFaceLandmarksWithAttention=function(t){return Ra(this,void 0,void 0,function(){var n,s,o,l,c,f;return za(this,function(h){switch(h.label){case 0:return[4,us(t[0],Hg)];case 1:return n=h.sent(),[4,us(t[1],kx)];case 2:return s=h.sent(),[4,us(t[3],qg)];case 3:return o=h.sent(),[4,us(t[5],qg)];case 4:return l=h.sent(),[4,us(t[4],Fg)];case 5:return c=h.sent(),[4,us(t[2],Fg)];case 6:return f=h.sent(),[2,xx([n,s,o,l,c,f],[$x,Rx,zx,Cx,Mx,Bx])]}})})},a.prototype.faceLandmarksToRoi=function(t,n){return jg(Lg(Jh(t),"boundingbox","normRect",n,{rotationVectorStartKeypointIndex:33,rotationVectorEndKeypointIndex:263,rotationVectorTargetAngleDegree:0}),n,Vg)},a}();function Ix(a){return Ra(this,void 0,void 0,function(){var t,n,s,o;return za(this,function(l){switch(l.label){case 0:return t=function(c){if(c==null)return Qn({},Sh);var f=Qn({},c);return f.runtime="tfjs",f.maxFaces==null&&(f.maxFaces=Sh.maxFaces),f.refineLandmarks==null&&(f.refineLandmarks=Sh.refineLandmarks),f.landmarkModelUrl==null&&(f.landmarkModelUrl=f.refineLandmarks?"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/attention_mesh/1":"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"),f}(a),n=typeof t.landmarkModelUrl=="string"&&t.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,wy(t.landmarkModelUrl,{fromTFHub:n})];case 1:return s=l.sent(),[4,bx(Kl.MediaPipeFaceDetector,{modelType:"short",maxFaces:t.maxFaces,detectorModelUrl:t.detectorModelUrl,runtime:t.runtime})];case 2:return o=l.sent(),[2,new Ux(o,s,t.maxFaces,t.refineLandmarks)]}})})}function Lx(a,t){return Ra(this,void 0,void 0,function(){var n,s;return za(this,function(o){if(a===Yl.MediaPipeFaceMesh){if(s=void 0,(n=t)!=null){if(n.runtime==="tfjs")return[2,Ix(n)];if(n.runtime==="mediapipe")return[2,ex(n)];s=n.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+s)}throw new Error(a+" is not a supported model name.")})})}(function(a){a.MediaPipeFaceMesh="MediaPipeFaceMesh"})(Yl||(Yl={}));var Cl={exports:{}},jx=Cl.exports,Gg;function Vx(){return Gg||(Gg=1,function(a,t){(function(s,o){a.exports=o(Xl())})(jx,function(n){return function(s){var o={};function l(c){if(o[c])return o[c].exports;var f=o[c]={i:c,l:!1,exports:{}};return s[c].call(f.exports,f,f.exports,l),f.l=!0,f.exports}return l.m=s,l.c=o,l.d=function(c,f,h){l.o(c,f)||Object.defineProperty(c,f,{enumerable:!0,get:h})},l.r=function(c){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},l.t=function(c,f){if(f&1&&(c=l(c)),f&8||f&4&&typeof c=="object"&&c&&c.__esModule)return c;var h=Object.create(null);if(l.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:c}),f&2&&typeof c!="string")for(var d in c)l.d(h,d,(function(y){return c[y]}).bind(null,d));return h},l.n=function(c){var f=c&&c.__esModule?function(){return c.default}:function(){return c};return l.d(f,"a",f),f},l.o=function(c,f){return Object.prototype.hasOwnProperty.call(c,f)},l.p="",l(l.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(s,o,l){l.r(o);var c=l("react"),f=function(){var S=function(N,E){return S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(D,k){D.__proto__=k}||function(D,k){for(var z in k)k.hasOwnProperty(z)&&(D[z]=k[z])},S(N,E)};return function(N,E){S(N,E);function D(){this.constructor=N}N.prototype=E===null?Object.create(E):(D.prototype=E.prototype,new D)}}(),h=function(){return h=Object.assign||function(S){for(var N,E=1,D=arguments.length;E<D;E++){N=arguments[E];for(var k in N)Object.prototype.hasOwnProperty.call(N,k)&&(S[k]=N[k])}return S},h.apply(this,arguments)},d=function(S,N){var E={};for(var D in S)Object.prototype.hasOwnProperty.call(S,D)&&N.indexOf(D)<0&&(E[D]=S[D]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var k=0,D=Object.getOwnPropertySymbols(S);k<D.length;k++)N.indexOf(D[k])<0&&Object.prototype.propertyIsEnumerable.call(S,D[k])&&(E[D[k]]=S[D[k]]);return E};(function(){typeof window>"u"||(navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=function(N){var E=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return E?new Promise(function(D,k){E.call(navigator,N,D,k)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}))})();function y(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}var b=function(S){f(N,S);function N(E){var D=S.call(this,E)||this;return D.canvas=null,D.ctx=null,D.requestUserMediaId=0,D.unmounted=!1,D.state={hasUserMedia:!1},D}return N.prototype.componentDidMount=function(){var E=this,D=E.state,k=E.props;if(this.unmounted=!1,!y()){k.onUserMediaError("getUserMedia not supported");return}D.hasUserMedia||this.requestUserMedia(),k.children&&typeof k.children!="function"&&console.warn("children must be a function")},N.prototype.componentDidUpdate=function(E){var D=this.props;if(!y()){D.onUserMediaError("getUserMedia not supported");return}var k=JSON.stringify(E.audioConstraints)!==JSON.stringify(D.audioConstraints),z=JSON.stringify(E.videoConstraints)!==JSON.stringify(D.videoConstraints),Z=E.minScreenshotWidth!==D.minScreenshotWidth,P=E.minScreenshotHeight!==D.minScreenshotHeight;(z||Z||P)&&(this.canvas=null,this.ctx=null),(k||z)&&(this.stopAndCleanup(),this.requestUserMedia())},N.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},N.stopMediaStream=function(E){E&&(E.getVideoTracks&&E.getAudioTracks?(E.getVideoTracks().map(function(D){E.removeTrack(D),D.stop()}),E.getAudioTracks().map(function(D){E.removeTrack(D),D.stop()})):E.stop())},N.prototype.stopAndCleanup=function(){var E=this.state;E.hasUserMedia&&(N.stopMediaStream(this.stream),E.src&&window.URL.revokeObjectURL(E.src))},N.prototype.getScreenshot=function(E){var D=this,k=D.state,z=D.props;if(!k.hasUserMedia)return null;var Z=this.getCanvas(E);return Z&&Z.toDataURL(z.screenshotFormat,z.screenshotQuality)},N.prototype.getCanvas=function(E){var D=this,k=D.state,z=D.props;if(!this.video||!k.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var Z=this.video.videoWidth,P=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var H=Z/P;Z=z.minScreenshotWidth||this.video.clientWidth,P=Z/H,z.minScreenshotHeight&&P<z.minScreenshotHeight&&(P=z.minScreenshotHeight,Z=P*H)}this.canvas=document.createElement("canvas"),this.canvas.width=(E==null?void 0:E.width)||Z,this.canvas.height=(E==null?void 0:E.height)||P,this.ctx=this.canvas.getContext("2d")}var G=this,Q=G.ctx,st=G.canvas;return Q&&st&&(st.width=(E==null?void 0:E.width)||st.width,st.height=(E==null?void 0:E.height)||st.height,z.mirrored&&(Q.translate(st.width,0),Q.scale(-1,1)),Q.imageSmoothingEnabled=z.imageSmoothing,Q.drawImage(this.video,0,0,(E==null?void 0:E.width)||st.width,(E==null?void 0:E.height)||st.height),z.mirrored&&(Q.scale(-1,1),Q.translate(-st.width,0))),st},N.prototype.requestUserMedia=function(){var E=this,D=this.props,k=function(P,H){var G={video:typeof H<"u"?H:!0};D.audio&&(G.audio=typeof P<"u"?P:!0),E.requestUserMediaId++;var Q=E.requestUserMediaId;navigator.mediaDevices.getUserMedia(G).then(function(st){E.unmounted||Q!==E.requestUserMediaId?N.stopMediaStream(st):E.handleUserMedia(null,st)}).catch(function(st){E.handleUserMedia(st)})};if("mediaDevices"in navigator)k(D.audioConstraints,D.videoConstraints);else{var z=function(P){return{optional:[{sourceId:P}]}},Z=function(P){var H=P.deviceId;return typeof H=="string"?H:Array.isArray(H)&&H.length>0?H[0]:typeof H=="object"&&H.ideal?H.ideal:null};MediaStreamTrack.getSources(function(P){var H=null,G=null;P.forEach(function(ut){ut.kind==="audio"?H=ut.id:ut.kind==="video"&&(G=ut.id)});var Q=Z(D.audioConstraints);Q&&(H=Q);var st=Z(D.videoConstraints);st&&(G=st),k(z(H),z(G))})}},N.prototype.handleUserMedia=function(E,D){var k=this.props;if(E||!D){this.setState({hasUserMedia:!1}),k.onUserMediaError(E);return}this.stream=D;try{this.video&&(this.video.srcObject=D),this.setState({hasUserMedia:!0})}catch{this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(D)})}k.onUserMedia(D)},N.prototype.render=function(){var E=this,D=this,k=D.state,z=D.props,Z=z.audio;z.forceScreenshotSourceSize;var P=z.disablePictureInPicture;z.onUserMedia,z.onUserMediaError,z.screenshotFormat,z.screenshotQuality,z.minScreenshotWidth,z.minScreenshotHeight,z.audioConstraints,z.videoConstraints,z.imageSmoothing;var H=z.mirrored,G=z.style,Q=G===void 0?{}:G,st=z.children,ut=d(z,["audio","forceScreenshotSourceSize","disablePictureInPicture","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),ot=H?h(h({},Q),{transform:(Q.transform||"")+" scaleX(-1)"}):Q,ft={getScreenshot:this.getScreenshot.bind(this)};return c.createElement(c.Fragment,null,c.createElement("video",h({autoPlay:!0,disablePictureInPicture:P,src:k.src,muted:!Z,playsInline:!0,ref:function(St){E.video=St},style:ot},ut)),st&&st(ft))},N.defaultProps={audio:!1,disablePictureInPicture:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},N}(c.Component);o.default=b},react:function(s,o){s.exports=n}}).default})}(Cl)),Cl.exports}var Hx=Vx();const qx=b3(Hx),Fx=[33,160,158,133,153,144],Gx=[362,385,387,263,373,380];function Th(a,t){return Math.sqrt((a[0]-t[0])**2+(a[1]-t[1])**2)}function Kg(a,t){const n=t[a[0]],s=t[a[1]],o=t[a[2]],l=t[a[3]],c=t[a[4]],f=t[a[5]],h=Th(s,f),d=Th(o,c),y=Th(n,l);return console.log({vertical1:h}),console.log({vertical2:d}),console.log({horizontal:y}),console.log({p1:n}),console.log({p2:s}),console.log({p3:o}),console.log({p4:l}),console.log({p5:c}),console.log({p6:f}),console.log("(vertical1 + vertical2) / (2.0 * horizontal)",(h+d)/(2*y)),(h+d)/(2*y)}function Kx(){const a=pi.useRef(null),[t,n]=pi.useState(null),s=pi.useRef(null),o=()=>Lx(Yl.MediaPipeFaceMesh,{runtime:"mediapipe",solutionPath:"https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh",refineLandmarks:!0}),l=pi.useCallback(async()=>{var b,S;if(a.current||(a.current=await o()),((S=(b=s.current)==null?void 0:b.video)==null?void 0:S.readyState)!==4||!a.current)return;const c=s.current.video,f=await a.current.estimateFaces(c);if(console.log(f),!f)return;console.log(f),console.log(f[0].keypoints.filter(N=>{var E;return(E=N.name)==null?void 0:E.toLowerCase().includes("eye")}).map(N=>N));const h=f[0].keypoints.map(N=>[N.x,N.y]),d=Kg(Fx,h),y=Kg(Gx,h);d<.2&&y<.2?n(!0):n(!1)},[]);return pi.useEffect(()=>{const c=setInterval(()=>{l()},100);return()=>clearInterval(c)},[l]),ka.jsxs(ka.Fragment,{children:[ka.jsx(qx,{ref:s}),t!==null&&ka.jsxs(ka.Fragment,{children:["Eyes closed: ",t?"YES":"NO"]})]})}function Yx(){return ka.jsx("div",{className:"flex flex-col items-center justify-center min-h-svh",children:ka.jsx(Kx,{})})}D3.createRoot(document.getElementById("root")).render(ka.jsx(pi.StrictMode,{children:ka.jsx(Yx,{})}));
