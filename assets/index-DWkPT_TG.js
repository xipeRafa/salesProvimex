(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function kh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var c_={exports:{}},kc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ow;function MN(){if(Ow)return kc;Ow=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,s,o){var u=null;if(o!==void 0&&(u=""+o),s.key!==void 0&&(u=""+s.key),"key"in s){o={};for(var h in s)h!=="key"&&(o[h]=s[h])}else o=s;return s=o.ref,{$$typeof:n,type:i,key:u,ref:s!==void 0?s:null,props:o}}return kc.Fragment=e,kc.jsx=t,kc.jsxs=t,kc}var Pw;function LN(){return Pw||(Pw=1,c_.exports=MN()),c_.exports}var K=LN(),h_={exports:{}},Pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xw;function UN(){if(xw)return Pe;xw=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function w(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,q={};function j(P,ee,_e){this.props=P,this.context=ee,this.refs=q,this.updater=_e||C}j.prototype.isReactComponent={},j.prototype.setState=function(P,ee){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ee,"setState")},j.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function ie(){}ie.prototype=j.prototype;function ae(P,ee,_e){this.props=P,this.context=ee,this.refs=q,this.updater=_e||C}var J=ae.prototype=new ie;J.constructor=ae,M(J,j.prototype),J.isPureReactComponent=!0;var oe=Array.isArray,re={H:null,A:null,T:null,S:null},me=Object.prototype.hasOwnProperty;function O(P,ee,_e,ce,de,Se){return _e=Se.ref,{$$typeof:n,type:P,key:ee,ref:_e!==void 0?_e:null,props:Se}}function R(P,ee){return O(P.type,ee,void 0,void 0,void 0,P.props)}function A(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function N(P){var ee={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(_e){return ee[_e]})}var k=/\/+/g;function U(P,ee){return typeof P=="object"&&P!==null&&P.key!=null?N(""+P.key):ee.toString(36)}function D(){}function ft(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(D,D):(P.status="pending",P.then(function(ee){P.status==="pending"&&(P.status="fulfilled",P.value=ee)},function(ee){P.status==="pending"&&(P.status="rejected",P.reason=ee)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function mt(P,ee,_e,ce,de){var Se=typeof P;(Se==="undefined"||Se==="boolean")&&(P=null);var Ce=!1;if(P===null)Ce=!0;else switch(Se){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(P.$$typeof){case n:case e:Ce=!0;break;case y:return Ce=P._init,mt(Ce(P._payload),ee,_e,ce,de)}}if(Ce)return de=de(P),Ce=ce===""?"."+U(P,0):ce,oe(de)?(_e="",Ce!=null&&(_e=Ce.replace(k,"$&/")+"/"),mt(de,ee,_e,"",function(nt){return nt})):de!=null&&(A(de)&&(de=R(de,_e+(de.key==null||P&&P.key===de.key?"":(""+de.key).replace(k,"$&/")+"/")+Ce)),ee.push(de)),1;Ce=0;var ut=ce===""?".":ce+":";if(oe(P))for(var Le=0;Le<P.length;Le++)ce=P[Le],Se=ut+U(ce,Le),Ce+=mt(ce,ee,_e,Se,de);else if(Le=w(P),typeof Le=="function")for(P=Le.call(P),Le=0;!(ce=P.next()).done;)ce=ce.value,Se=ut+U(ce,Le++),Ce+=mt(ce,ee,_e,Se,de);else if(Se==="object"){if(typeof P.then=="function")return mt(ft(P),ee,_e,ce,de);throw ee=String(P),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function le(P,ee,_e){if(P==null)return P;var ce=[],de=0;return mt(P,ce,"","",function(Se){return ee.call(_e,Se,de++)}),ce}function Ie(P){if(P._status===-1){var ee=P._result;ee=ee(),ee.then(function(_e){(P._status===0||P._status===-1)&&(P._status=1,P._result=_e)},function(_e){(P._status===0||P._status===-1)&&(P._status=2,P._result=_e)}),P._status===-1&&(P._status=0,P._result=ee)}if(P._status===1)return P._result.default;throw P._result}var pe=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function qe(){}return Pe.Children={map:le,forEach:function(P,ee,_e){le(P,function(){ee.apply(this,arguments)},_e)},count:function(P){var ee=0;return le(P,function(){ee++}),ee},toArray:function(P){return le(P,function(ee){return ee})||[]},only:function(P){if(!A(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Pe.Component=j,Pe.Fragment=t,Pe.Profiler=s,Pe.PureComponent=ae,Pe.StrictMode=i,Pe.Suspense=m,Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re,Pe.act=function(){throw Error("act(...) is not supported in production builds of React.")},Pe.cache=function(P){return function(){return P.apply(null,arguments)}},Pe.cloneElement=function(P,ee,_e){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var ce=M({},P.props),de=P.key,Se=void 0;if(ee!=null)for(Ce in ee.ref!==void 0&&(Se=void 0),ee.key!==void 0&&(de=""+ee.key),ee)!me.call(ee,Ce)||Ce==="key"||Ce==="__self"||Ce==="__source"||Ce==="ref"&&ee.ref===void 0||(ce[Ce]=ee[Ce]);var Ce=arguments.length-2;if(Ce===1)ce.children=_e;else if(1<Ce){for(var ut=Array(Ce),Le=0;Le<Ce;Le++)ut[Le]=arguments[Le+2];ce.children=ut}return O(P.type,de,void 0,void 0,Se,ce)},Pe.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:o,_context:P},P},Pe.createElement=function(P,ee,_e){var ce,de={},Se=null;if(ee!=null)for(ce in ee.key!==void 0&&(Se=""+ee.key),ee)me.call(ee,ce)&&ce!=="key"&&ce!=="__self"&&ce!=="__source"&&(de[ce]=ee[ce]);var Ce=arguments.length-2;if(Ce===1)de.children=_e;else if(1<Ce){for(var ut=Array(Ce),Le=0;Le<Ce;Le++)ut[Le]=arguments[Le+2];de.children=ut}if(P&&P.defaultProps)for(ce in Ce=P.defaultProps,Ce)de[ce]===void 0&&(de[ce]=Ce[ce]);return O(P,Se,void 0,void 0,null,de)},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(P){return{$$typeof:h,render:P}},Pe.isValidElement=A,Pe.lazy=function(P){return{$$typeof:y,_payload:{_status:-1,_result:P},_init:Ie}},Pe.memo=function(P,ee){return{$$typeof:p,type:P,compare:ee===void 0?null:ee}},Pe.startTransition=function(P){var ee=re.T,_e={};re.T=_e;try{var ce=P(),de=re.S;de!==null&&de(_e,ce),typeof ce=="object"&&ce!==null&&typeof ce.then=="function"&&ce.then(qe,pe)}catch(Se){pe(Se)}finally{re.T=ee}},Pe.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()},Pe.use=function(P){return re.H.use(P)},Pe.useActionState=function(P,ee,_e){return re.H.useActionState(P,ee,_e)},Pe.useCallback=function(P,ee){return re.H.useCallback(P,ee)},Pe.useContext=function(P){return re.H.useContext(P)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(P,ee){return re.H.useDeferredValue(P,ee)},Pe.useEffect=function(P,ee){return re.H.useEffect(P,ee)},Pe.useId=function(){return re.H.useId()},Pe.useImperativeHandle=function(P,ee,_e){return re.H.useImperativeHandle(P,ee,_e)},Pe.useInsertionEffect=function(P,ee){return re.H.useInsertionEffect(P,ee)},Pe.useLayoutEffect=function(P,ee){return re.H.useLayoutEffect(P,ee)},Pe.useMemo=function(P,ee){return re.H.useMemo(P,ee)},Pe.useOptimistic=function(P,ee){return re.H.useOptimistic(P,ee)},Pe.useReducer=function(P,ee,_e){return re.H.useReducer(P,ee,_e)},Pe.useRef=function(P){return re.H.useRef(P)},Pe.useState=function(P){return re.H.useState(P)},Pe.useSyncExternalStore=function(P,ee,_e){return re.H.useSyncExternalStore(P,ee,_e)},Pe.useTransition=function(){return re.H.useTransition()},Pe.version="19.0.0",Pe}var kw;function My(){return kw||(kw=1,h_.exports=UN()),h_.exports}var G=My();const ho=kh(G);var d_={exports:{}},Vc={},f_={exports:{}},m_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vw;function BN(){return Vw||(Vw=1,function(n){function e(le,Ie){var pe=le.length;le.push(Ie);e:for(;0<pe;){var qe=pe-1>>>1,P=le[qe];if(0<s(P,Ie))le[qe]=Ie,le[pe]=P,pe=qe;else break e}}function t(le){return le.length===0?null:le[0]}function i(le){if(le.length===0)return null;var Ie=le[0],pe=le.pop();if(pe!==Ie){le[0]=pe;e:for(var qe=0,P=le.length,ee=P>>>1;qe<ee;){var _e=2*(qe+1)-1,ce=le[_e],de=_e+1,Se=le[de];if(0>s(ce,pe))de<P&&0>s(Se,ce)?(le[qe]=Se,le[de]=pe,qe=de):(le[qe]=ce,le[_e]=pe,qe=_e);else if(de<P&&0>s(Se,pe))le[qe]=Se,le[de]=pe,qe=de;else break e}}return Ie}function s(le,Ie){var pe=le.sortIndex-Ie.sortIndex;return pe!==0?pe:le.id-Ie.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,h=u.now();n.unstable_now=function(){return u.now()-h}}var m=[],p=[],y=1,v=null,w=3,C=!1,M=!1,q=!1,j=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function J(le){for(var Ie=t(p);Ie!==null;){if(Ie.callback===null)i(p);else if(Ie.startTime<=le)i(p),Ie.sortIndex=Ie.expirationTime,e(m,Ie);else break;Ie=t(p)}}function oe(le){if(q=!1,J(le),!M)if(t(m)!==null)M=!0,ft();else{var Ie=t(p);Ie!==null&&mt(oe,Ie.startTime-le)}}var re=!1,me=-1,O=5,R=-1;function A(){return!(n.unstable_now()-R<O)}function N(){if(re){var le=n.unstable_now();R=le;var Ie=!0;try{e:{M=!1,q&&(q=!1,ie(me),me=-1),C=!0;var pe=w;try{t:{for(J(le),v=t(m);v!==null&&!(v.expirationTime>le&&A());){var qe=v.callback;if(typeof qe=="function"){v.callback=null,w=v.priorityLevel;var P=qe(v.expirationTime<=le);if(le=n.unstable_now(),typeof P=="function"){v.callback=P,J(le),Ie=!0;break t}v===t(m)&&i(m),J(le)}else i(m);v=t(m)}if(v!==null)Ie=!0;else{var ee=t(p);ee!==null&&mt(oe,ee.startTime-le),Ie=!1}}break e}finally{v=null,w=pe,C=!1}Ie=void 0}}finally{Ie?k():re=!1}}}var k;if(typeof ae=="function")k=function(){ae(N)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,D=U.port2;U.port1.onmessage=N,k=function(){D.postMessage(null)}}else k=function(){j(N,0)};function ft(){re||(re=!0,k())}function mt(le,Ie){me=j(function(){le(n.unstable_now())},Ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(le){le.callback=null},n.unstable_continueExecution=function(){M||C||(M=!0,ft())},n.unstable_forceFrameRate=function(le){0>le||125<le?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<le?Math.floor(1e3/le):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(m)},n.unstable_next=function(le){switch(w){case 1:case 2:case 3:var Ie=3;break;default:Ie=w}var pe=w;w=Ie;try{return le()}finally{w=pe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(le,Ie){switch(le){case 1:case 2:case 3:case 4:case 5:break;default:le=3}var pe=w;w=le;try{return Ie()}finally{w=pe}},n.unstable_scheduleCallback=function(le,Ie,pe){var qe=n.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?qe+pe:qe):pe=qe,le){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=pe+P,le={id:y++,callback:Ie,priorityLevel:le,startTime:pe,expirationTime:P,sortIndex:-1},pe>qe?(le.sortIndex=pe,e(p,le),t(m)===null&&le===t(p)&&(q?(ie(me),me=-1):q=!0,mt(oe,pe-qe))):(le.sortIndex=P,e(m,le),M||C||(M=!0,ft())),le},n.unstable_shouldYield=A,n.unstable_wrapCallback=function(le){var Ie=w;return function(){var pe=w;w=Ie;try{return le.apply(this,arguments)}finally{w=pe}}}}(m_)),m_}var Mw;function FN(){return Mw||(Mw=1,f_.exports=BN()),f_.exports}var p_={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lw;function zN(){if(Lw)return wn;Lw=1;var n=My();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal");function o(m,p,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:m,containerInfo:p,implementation:y}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,wn.createPortal=function(m,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return o(m,p,null,y)},wn.flushSync=function(m){var p=u.T,y=i.p;try{if(u.T=null,i.p=2,m)return m()}finally{u.T=p,i.p=y,i.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&i.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var y=p.as,v=h(y,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,C=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?i.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:C}):y==="script"&&i.d.X(m,{crossOrigin:v,integrity:w,fetchPriority:C,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=h(p.as,p.crossOrigin);i.d.M(m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,v=h(y,p.crossOrigin);i.d.L(m,y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var y=h(p.as,p.crossOrigin);i.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(m)},wn.requestFormReset=function(m){i.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,y){return u.H.useFormState(m,p,y)},wn.useFormStatus=function(){return u.H.useHostTransitionStatus()},wn.version="19.0.0",wn}var Uw;function lA(){if(Uw)return p_.exports;Uw=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),p_.exports=zN(),p_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bw;function qN(){if(Bw)return Vc;Bw=1;var n=FN(),e=My(),t=lA();function i(r){var a="https://react.dev/errors/"+r;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+r+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}var o=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),C=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),oe=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var O=Symbol.for("react.client.reference");function R(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===O?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case m:return"Fragment";case h:return"Portal";case y:return"Profiler";case p:return"StrictMode";case q:return"Suspense";case j:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case C:return(r.displayName||"Context")+".Provider";case w:return(r._context.displayName||"Context")+".Consumer";case M:var a=r.render;return r=r.displayName,r||(r=a.displayName||a.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case ie:return a=r.displayName||null,a!==null?a:R(r.type)||"Memo";case ae:a=r._payload,r=r._init;try{return R(r(a))}catch{}}return null}var A=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=Object.assign,k,U;function D(r){if(k===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);k=a&&a[1]||"",U=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+k+r+U}var ft=!1;function mt(r,a){if(!r||ft)return"";ft=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(W){var H=W}Reflect.construct(r,[],te)}else{try{te.call()}catch(W){H=W}r.call(te.prototype)}}else{try{throw Error()}catch(W){H=W}(te=r())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(W){if(W&&H&&typeof W.stack=="string")return[W.stack,H.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],b=g[1];if(T&&b){var S=T.split(`
`),V=b.split(`
`);for(f=c=0;c<S.length&&!S[c].includes("DetermineComponentFrameRoot");)c++;for(;f<V.length&&!V[f].includes("DetermineComponentFrameRoot");)f++;if(c===S.length||f===V.length)for(c=S.length-1,f=V.length-1;1<=c&&0<=f&&S[c]!==V[f];)f--;for(;1<=c&&0<=f;c--,f--)if(S[c]!==V[f]){if(c!==1||f!==1)do if(c--,f--,0>f||S[c]!==V[f]){var Y=`
`+S[c].replace(" at new "," at ");return r.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",r.displayName)),Y}while(1<=c&&0<=f);break}}}finally{ft=!1,Error.prepareStackTrace=l}return(l=r?r.displayName||r.name:"")?D(l):""}function le(r){switch(r.tag){case 26:case 27:case 5:return D(r.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 15:return r=mt(r.type,!1),r;case 11:return r=mt(r.type.render,!1),r;case 1:return r=mt(r.type,!0),r;default:return""}}function Ie(r){try{var a="";do a+=le(r),r=r.return;while(r);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function pe(r){var a=r,l=r;if(r.alternate)for(;a.return;)a=a.return;else{r=a;do a=r,a.flags&4098&&(l=a.return),r=a.return;while(r)}return a.tag===3?l:null}function qe(r){if(r.tag===13){var a=r.memoizedState;if(a===null&&(r=r.alternate,r!==null&&(a=r.memoizedState)),a!==null)return a.dehydrated}return null}function P(r){if(pe(r)!==r)throw Error(i(188))}function ee(r){var a=r.alternate;if(!a){if(a=pe(r),a===null)throw Error(i(188));return a!==r?null:r}for(var l=r,c=a;;){var f=l.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){l=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===l)return P(f),r;if(g===c)return P(f),a;g=g.sibling}throw Error(i(188))}if(l.return!==c.return)l=f,c=g;else{for(var T=!1,b=f.child;b;){if(b===l){T=!0,l=f,c=g;break}if(b===c){T=!0,c=f,l=g;break}b=b.sibling}if(!T){for(b=g.child;b;){if(b===l){T=!0,l=g,c=f;break}if(b===c){T=!0,c=g,l=f;break}b=b.sibling}if(!T)throw Error(i(189))}}if(l.alternate!==c)throw Error(i(190))}if(l.tag!==3)throw Error(i(188));return l.stateNode.current===l?r:a}function _e(r){var a=r.tag;if(a===5||a===26||a===27||a===6)return r;for(r=r.child;r!==null;){if(a=_e(r),a!==null)return a;r=r.sibling}return null}var ce=Array.isArray,de=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Se={pending:!1,data:null,method:null,action:null},Ce=[],ut=-1;function Le(r){return{current:r}}function nt(r){0>ut||(r.current=Ce[ut],Ce[ut]=null,ut--)}function Ue(r,a){ut++,Ce[ut]=r.current,r.current=a}var Ft=Le(null),vn=Le(null),Zt=Le(null),Dn=Le(null);function $e(r,a){switch(Ue(Zt,a),Ue(vn,r),Ue(Ft,null),r=a.nodeType,r){case 9:case 11:a=(a=a.documentElement)&&(a=a.namespaceURI)?aw(a):0;break;default:if(r=r===8?a.parentNode:a,a=r.tagName,r=r.namespaceURI)r=aw(r),a=ow(r,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}nt(Ft),Ue(Ft,a)}function qn(){nt(Ft),nt(vn),nt(Zt)}function Ci(r){r.memoizedState!==null&&Ue(Dn,r);var a=Ft.current,l=ow(a,r.type);a!==l&&(Ue(vn,r),Ue(Ft,l))}function cs(r){vn.current===r&&(nt(Ft),nt(vn)),Dn.current===r&&(nt(Dn),Dc._currentValue=Se)}var hs=Object.prototype.hasOwnProperty,mr=n.unstable_scheduleCallback,ds=n.unstable_cancelCallback,Nu=n.unstable_shouldYield,ba=n.unstable_requestPaint,hn=n.unstable_now,Bo=n.unstable_getCurrentPriorityLevel,Ae=n.unstable_ImmediatePriority,ct=n.unstable_UserBlockingPriority,ai=n.unstable_NormalPriority,nd=n.unstable_LowPriority,Ou=n.unstable_IdlePriority,fp=n.log,Ia=n.unstable_setDisableYieldValue,fs=null,En=null;function Pu(r){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(fs,r,void 0,(r.current.flags&128)===128)}catch{}}function Mi(r){if(typeof fp=="function"&&Ia(r),En&&typeof En.setStrictMode=="function")try{En.setStrictMode(fs,r)}catch{}}var Nn=Math.clz32?Math.clz32:rd,xu=Math.log,id=Math.LN2;function rd(r){return r>>>=0,r===0?32:31-(xu(r)/id|0)|0}var Li=128,ms=4194304;function Di(r){var a=r&42;if(a!==0)return a;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function oi(r,a){var l=r.pendingLanes;if(l===0)return 0;var c=0,f=r.suspendedLanes,g=r.pingedLanes,T=r.warmLanes;r=r.finishedLanes!==0;var b=l&134217727;return b!==0?(l=b&~f,l!==0?c=Di(l):(g&=b,g!==0?c=Di(g):r||(T=b&~T,T!==0&&(c=Di(T))))):(b=l&~f,b!==0?c=Di(b):g!==0?c=Di(g):r||(T=l&~T,T!==0&&(c=Di(T)))),c===0?0:a!==0&&a!==c&&!(a&f)&&(f=c&-c,T=a&-a,f>=T||f===32&&(T&4194176)!==0)?a:c}function ps(r,a){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&a)===0}function Fo(r,a){switch(r){case 1:case 2:case 4:case 8:return a+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ku(){var r=Li;return Li<<=1,!(Li&4194176)&&(Li=128),r}function gs(){var r=ms;return ms<<=1,!(ms&62914560)&&(ms=4194304),r}function zo(r){for(var a=[],l=0;31>l;l++)a.push(r);return a}function Vt(r,a){r.pendingLanes|=a,a!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function sd(r,a,l,c,f,g){var T=r.pendingLanes;r.pendingLanes=l,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=l,r.entangledLanes&=l,r.errorRecoveryDisabledLanes&=l,r.shellSuspendCounter=0;var b=r.entanglements,S=r.expirationTimes,V=r.hiddenUpdates;for(l=T&~l;0<l;){var Y=31-Nn(l),te=1<<Y;b[Y]=0,S[Y]=-1;var H=V[Y];if(H!==null)for(V[Y]=null,Y=0;Y<H.length;Y++){var W=H[Y];W!==null&&(W.lane&=-536870913)}l&=~te}c!==0&&_s(r,c,0),g!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=g&~(T&~a))}function _s(r,a,l){r.pendingLanes|=a,r.suspendedLanes&=~a;var c=31-Nn(a);r.entangledLanes|=a,r.entanglements[c]=r.entanglements[c]|1073741824|l&4194218}function ys(r,a){var l=r.entangledLanes|=a;for(r=r.entanglements;l;){var c=31-Nn(l),f=1<<c;f&a|r[c]&a&&(r[c]|=a),l&=~f}}function ad(r){return r&=-r,2<r?8<r?r&134217727?32:268435456:8:2}function od(){var r=de.p;return r!==0?r:(r=window.event,r===void 0?32:Aw(r.type))}function vs(r,a){var l=de.p;try{return de.p=r,a()}finally{de.p=l}}var Ui=Math.random().toString(36).slice(2),en="__reactFiber$"+Ui,Kt="__reactProps$"+Ui,pr="__reactContainer$"+Ui,Aa="__reactEvents$"+Ui,qo="__reactListeners$"+Ui,Bi="__reactHandles$"+Ui,Vu="__reactResources$"+Ui,Es="__reactMarker$"+Ui;function Ra(r){delete r[en],delete r[Kt],delete r[Aa],delete r[qo],delete r[Bi]}function Ni(r){var a=r[en];if(a)return a;for(var l=r.parentNode;l;){if(a=l[pr]||l[en]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(r=cw(r);r!==null;){if(l=r[en])return l;r=cw(r)}return a}r=l,l=r.parentNode}return null}function gr(r){if(r=r[en]||r[pr]){var a=r.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return r}return null}function Ts(r){var a=r.tag;if(a===5||a===26||a===27||a===6)return r.stateNode;throw Error(i(33))}function ws(r){var a=r[Vu];return a||(a=r[Vu]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function vt(r){r[Es]=!0}var Mu=new Set,jo={};function Wn(r,a){jn(r,a),jn(r+"Capture",a)}function jn(r,a){for(jo[r]=a,r=0;r<a.length;r++)Mu.add(a[r])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lu={},Uu={};function ld(r){return hs.call(Uu,r)?!0:hs.call(Lu,r)?!1:mp.test(r)?Uu[r]=!0:(Lu[r]=!0,!1)}function bs(r,a,l){if(ld(a))if(l===null)r.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":r.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(a);return}}r.setAttribute(a,""+l)}}function Is(r,a,l){if(l===null)r.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(a);return}r.setAttribute(a,""+l)}}function li(r,a,l,c){if(c===null)r.removeAttribute(l);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(l);return}r.setAttributeNS(a,l,""+c)}}function On(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function ud(r){var a=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function pp(r){var a=ud(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,a),c=""+r[a];if(!r.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,g=l.set;return Object.defineProperty(r,a,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(r,a,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){r._valueTracker=null,delete r[a]}}}}function Sa(r){r._valueTracker||(r._valueTracker=pp(r))}function Bu(r){if(!r)return!1;var a=r._valueTracker;if(!a)return!0;var l=a.getValue(),c="";return r&&(c=ud(r)?r.checked?"true":"false":r.value),r=c,r!==l?(a.setValue(r),!0):!1}function Ho(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var _r=/[\n"\\]/g;function Rt(r){return r.replace(_r,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function As(r,a,l,c,f,g,T,b){r.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?r.type=T:r.removeAttribute("type"),a!=null?T==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+On(a)):r.value!==""+On(a)&&(r.value=""+On(a)):T!=="submit"&&T!=="reset"||r.removeAttribute("value"),a!=null?Go(r,T,On(a)):l!=null?Go(r,T,On(l)):c!=null&&r.removeAttribute("value"),f==null&&g!=null&&(r.defaultChecked=!!g),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?r.name=""+On(b):r.removeAttribute("name")}function Ca(r,a,l,c,f,g,T,b){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(r.type=g),a!=null||l!=null){if(!(g!=="submit"&&g!=="reset"||a!=null))return;l=l!=null?""+On(l):"",a=a!=null?""+On(a):l,b||a===r.value||(r.value=a),r.defaultValue=a}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=b?r.checked:!!c,r.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(r.name=T)}function Go(r,a,l){a==="number"&&Ho(r.ownerDocument)===r||r.defaultValue===""+l||(r.defaultValue=""+l)}function Qe(r,a,l,c){if(r=r.options,a){a={};for(var f=0;f<l.length;f++)a["$"+l[f]]=!0;for(l=0;l<r.length;l++)f=a.hasOwnProperty("$"+r[l].value),r[l].selected!==f&&(r[l].selected=f),f&&c&&(r[l].defaultSelected=!0)}else{for(l=""+On(l),a=null,f=0;f<r.length;f++){if(r[f].value===l){r[f].selected=!0,c&&(r[f].defaultSelected=!0);return}a!==null||r[f].disabled||(a=r[f])}a!==null&&(a.selected=!0)}}function Da(r,a,l){if(a!=null&&(a=""+On(a),a!==r.value&&(r.value=a),l==null)){r.defaultValue!==a&&(r.defaultValue=a);return}r.defaultValue=l!=null?""+On(l):""}function Rs(r,a,l,c){if(a==null){if(c!=null){if(l!=null)throw Error(i(92));if(ce(c)){if(1<c.length)throw Error(i(93));c=c[0]}l=c}l==null&&(l=""),a=l}l=On(a),r.defaultValue=l,c=r.textContent,c===l&&c!==""&&c!==null&&(r.value=c)}function ui(r,a){if(a){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=a;return}}r.textContent=a}var gp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fu(r,a,l){var c=a.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?c?r.setProperty(a,""):a==="float"?r.cssFloat="":r[a]="":c?r.setProperty(a,l):typeof l!="number"||l===0||gp.has(a)?a==="float"?r.cssFloat=l:r[a]=(""+l).trim():r[a]=l+"px"}function cd(r,a,l){if(a!=null&&typeof a!="object")throw Error(i(62));if(r=r.style,l!=null){for(var c in l)!l.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var f in a)c=a[f],a.hasOwnProperty(f)&&l[f]!==c&&Fu(r,f,c)}else for(var g in a)a.hasOwnProperty(g)&&Fu(r,g,a[g])}function zu(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _p=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fi(r){return yp.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var ci=null;function Ko(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var yr=null,vr=null;function Er(r){var a=gr(r);if(a&&(r=a.stateNode)){var l=r[Kt]||null;e:switch(r=a.stateNode,a.type){case"input":if(As(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),a=l.name,l.type==="radio"&&a!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Rt(""+a)+'"][type="radio"]'),a=0;a<l.length;a++){var c=l[a];if(c!==r&&c.form===r.form){var f=c[Kt]||null;if(!f)throw Error(i(90));As(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<l.length;a++)c=l[a],c.form===r.form&&Bu(c)}break e;case"textarea":Da(r,l.value,l.defaultValue);break e;case"select":a=l.value,a!=null&&Qe(r,!!l.multiple,a,!1)}}}var qu=!1;function hd(r,a,l){if(qu)return r(a,l);qu=!0;try{var c=r(a);return c}finally{if(qu=!1,(yr!==null||vr!==null)&&(nf(),yr&&(a=yr,r=vr,vr=yr=null,Er(a),r)))for(a=0;a<r.length;a++)Er(r[a])}}function Na(r,a){var l=r.stateNode;if(l===null)return null;var c=l[Kt]||null;if(c===null)return null;l=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(i(231,a,typeof l));return l}var hi=!1;if(Yn)try{var Oa={};Object.defineProperty(Oa,"passive",{get:function(){hi=!0}}),window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{hi=!1}var zi=null,Ss=null,Tr=null;function ju(){if(Tr)return Tr;var r,a=Ss,l=a.length,c,f="value"in zi?zi.value:zi.textContent,g=f.length;for(r=0;r<l&&a[r]===f[r];r++);var T=l-r;for(c=1;c<=T&&a[l-c]===f[g-c];c++);return Tr=f.slice(r,1<c?1-c:void 0)}function qi(r){var a=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&a===13&&(r=13)):r=a,r===10&&(r=13),32<=r||r===13?r:0}function ji(){return!0}function Hu(){return!1}function tn(r){function a(l,c,f,g,T){this._reactName=l,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var b in r)r.hasOwnProperty(b)&&(l=r[b],this[b]=l?l(g):g[b]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ji:Hu,this.isPropagationStopped=Hu,this}return N(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),a}var Je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=tn(Je),Pa=N({},Je,{view:0,detail:0}),dd=tn(Pa),Qo,Wo,Hi,xa=N({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Hi&&(Hi&&r.type==="mousemove"?(Qo=r.screenX-Hi.screenX,Wo=r.screenY-Hi.screenY):Wo=Qo=0,Hi=r),Qo)},movementY:function(r){return"movementY"in r?r.movementY:Wo}}),di=tn(xa),fd=N({},xa,{dataTransfer:0}),vp=tn(fd),ka=N({},Pa,{relatedTarget:0}),Yo=tn(ka),Gu=N({},Je,{animationName:0,elapsedTime:0,pseudoElement:0}),Xo=tn(Gu),md=N({},Je,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Jo=tn(md),Ep=N({},Je,{data:0}),Ku=tn(Ep),Va={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $u(r){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(r):(r=gd[r])?!!a[r]:!1}function Ma(){return $u}var _d=N({},Pa,{key:function(r){if(r.key){var a=Va[r.key]||r.key;if(a!=="Unidentified")return a}return r.type==="keypress"?(r=qi(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?pd[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(r){return r.type==="keypress"?qi(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?qi(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Zo=tn(_d),yd=N({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qu=tn(yd),wr=N({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),vd=tn(wr),Ed=N({},Je,{propertyName:0,elapsedTime:0,pseudoElement:0}),Td=tn(Ed),wd=N({},xa,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),el=tn(wd),Pn=N({},Je,{newState:0,oldState:0}),bd=tn(Pn),Id=[9,13,27,32],Gi=Yn&&"CompositionEvent"in window,d=null;Yn&&"documentMode"in document&&(d=document.documentMode);var _=Yn&&"TextEvent"in window&&!d,E=Yn&&(!Gi||d&&8<d&&11>=d),I=" ",B=!1;function Q(r,a){switch(r){case"keyup":return Id.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ue(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var je=!1;function $t(r,a){switch(r){case"compositionend":return ue(a);case"keypress":return a.which!==32?null:(B=!0,I);case"textInput":return r=a.data,r===I&&B?null:r;default:return null}}function He(r,a){if(je)return r==="compositionend"||!Gi&&Q(r,a)?(r=ju(),Tr=Ss=zi=null,je=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return E&&a.locale!=="ko"?null:a.data;default:return null}}var nn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a==="input"?!!nn[r.type]:a==="textarea"}function br(r,a,l,c){yr?vr?vr.push(c):vr=[c]:yr=c,a=lf(a,"onChange"),0<a.length&&(l=new $o("onChange","change",null,l,c),r.push({event:l,listeners:a}))}var dn=null,Ki=null;function Wu(r){tw(r,0)}function Ad(r){var a=Ts(r);if(Bu(a))return r}function NE(r,a){if(r==="change")return a}var OE=!1;if(Yn){var Tp;if(Yn){var wp="oninput"in document;if(!wp){var PE=document.createElement("div");PE.setAttribute("oninput","return;"),wp=typeof PE.oninput=="function"}Tp=wp}else Tp=!1;OE=Tp&&(!document.documentMode||9<document.documentMode)}function xE(){dn&&(dn.detachEvent("onpropertychange",kE),Ki=dn=null)}function kE(r){if(r.propertyName==="value"&&Ad(Ki)){var a=[];br(a,Ki,r,Ko(r)),hd(Wu,a)}}function dD(r,a,l){r==="focusin"?(xE(),dn=a,Ki=l,dn.attachEvent("onpropertychange",kE)):r==="focusout"&&xE()}function fD(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Ad(Ki)}function mD(r,a){if(r==="click")return Ad(a)}function pD(r,a){if(r==="input"||r==="change")return Ad(a)}function gD(r,a){return r===a&&(r!==0||1/r===1/a)||r!==r&&a!==a}var Xn=typeof Object.is=="function"?Object.is:gD;function Yu(r,a){if(Xn(r,a))return!0;if(typeof r!="object"||r===null||typeof a!="object"||a===null)return!1;var l=Object.keys(r),c=Object.keys(a);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var f=l[c];if(!hs.call(a,f)||!Xn(r[f],a[f]))return!1}return!0}function VE(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function ME(r,a){var l=VE(r);r=0;for(var c;l;){if(l.nodeType===3){if(c=r+l.textContent.length,r<=a&&c>=a)return{node:l,offset:a-r};r=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=VE(l)}}function LE(r,a){return r&&a?r===a?!0:r&&r.nodeType===3?!1:a&&a.nodeType===3?LE(r,a.parentNode):"contains"in r?r.contains(a):r.compareDocumentPosition?!!(r.compareDocumentPosition(a)&16):!1:!1}function UE(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var a=Ho(r.document);a instanceof r.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)r=a.contentWindow;else break;a=Ho(r.document)}return a}function bp(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a&&(a==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||a==="textarea"||r.contentEditable==="true")}function _D(r,a){var l=UE(a);a=r.focusedElem;var c=r.selectionRange;if(l!==a&&a&&a.ownerDocument&&LE(a.ownerDocument.documentElement,a)){if(c!==null&&bp(a)){if(r=c.start,l=c.end,l===void 0&&(l=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(l,a.value.length);else if(l=(r=a.ownerDocument||document)&&r.defaultView||window,l.getSelection){l=l.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!l.extend&&g>c&&(f=c,c=g,g=f),f=ME(a,g);var T=ME(a,c);f&&T&&(l.rangeCount!==1||l.anchorNode!==f.node||l.anchorOffset!==f.offset||l.focusNode!==T.node||l.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),l.removeAllRanges(),g>c?(l.addRange(r),l.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),l.addRange(r)))}}for(r=[],l=a;l=l.parentNode;)l.nodeType===1&&r.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)l=r[a],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var yD=Yn&&"documentMode"in document&&11>=document.documentMode,tl=null,Ip=null,Xu=null,Ap=!1;function BE(r,a,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ap||tl==null||tl!==Ho(c)||(c=tl,"selectionStart"in c&&bp(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Xu&&Yu(Xu,c)||(Xu=c,c=lf(Ip,"onSelect"),0<c.length&&(a=new $o("onSelect","select",null,a,l),r.push({event:a,listeners:c}),a.target=tl)))}function La(r,a){var l={};return l[r.toLowerCase()]=a.toLowerCase(),l["Webkit"+r]="webkit"+a,l["Moz"+r]="moz"+a,l}var nl={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},Rp={},FE={};Yn&&(FE=document.createElement("div").style,"AnimationEvent"in window||(delete nl.animationend.animation,delete nl.animationiteration.animation,delete nl.animationstart.animation),"TransitionEvent"in window||delete nl.transitionend.transition);function Ua(r){if(Rp[r])return Rp[r];if(!nl[r])return r;var a=nl[r],l;for(l in a)if(a.hasOwnProperty(l)&&l in FE)return Rp[r]=a[l];return r}var zE=Ua("animationend"),qE=Ua("animationiteration"),jE=Ua("animationstart"),vD=Ua("transitionrun"),ED=Ua("transitionstart"),TD=Ua("transitioncancel"),HE=Ua("transitionend"),GE=new Map,KE="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Oi(r,a){GE.set(r,a),Wn(a,[r])}var fi=[],il=0,Sp=0;function Rd(){for(var r=il,a=Sp=il=0;a<r;){var l=fi[a];fi[a++]=null;var c=fi[a];fi[a++]=null;var f=fi[a];fi[a++]=null;var g=fi[a];if(fi[a++]=null,c!==null&&f!==null){var T=c.pending;T===null?f.next=f:(f.next=T.next,T.next=f),c.pending=f}g!==0&&$E(l,f,g)}}function Sd(r,a,l,c){fi[il++]=r,fi[il++]=a,fi[il++]=l,fi[il++]=c,Sp|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function Cp(r,a,l,c){return Sd(r,a,l,c),Cd(r)}function Cs(r,a){return Sd(r,null,null,a),Cd(r)}function $E(r,a,l){r.lanes|=l;var c=r.alternate;c!==null&&(c.lanes|=l);for(var f=!1,g=r.return;g!==null;)g.childLanes|=l,c=g.alternate,c!==null&&(c.childLanes|=l),g.tag===22&&(r=g.stateNode,r===null||r._visibility&1||(f=!0)),r=g,g=g.return;f&&a!==null&&r.tag===3&&(g=r.stateNode,f=31-Nn(l),g=g.hiddenUpdates,r=g[f],r===null?g[f]=[a]:r.push(a),a.lane=l|536870912)}function Cd(r){if(50<wc)throw wc=0,kg=null,Error(i(185));for(var a=r.return;a!==null;)r=a,a=r.return;return r.tag===3?r.stateNode:null}var rl={},QE=new WeakMap;function mi(r,a){if(typeof r=="object"&&r!==null){var l=QE.get(r);return l!==void 0?l:(a={value:r,source:a,stack:Ie(a)},QE.set(r,a),a)}return{value:r,source:a,stack:Ie(a)}}var sl=[],al=0,Dd=null,Nd=0,pi=[],gi=0,Ba=null,Ir=1,Ar="";function Fa(r,a){sl[al++]=Nd,sl[al++]=Dd,Dd=r,Nd=a}function WE(r,a,l){pi[gi++]=Ir,pi[gi++]=Ar,pi[gi++]=Ba,Ba=r;var c=Ir;r=Ar;var f=32-Nn(c)-1;c&=~(1<<f),l+=1;var g=32-Nn(a)+f;if(30<g){var T=f-f%5;g=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Ir=1<<32-Nn(a)+f|l<<f|c,Ar=g+r}else Ir=1<<g|l<<f|c,Ar=r}function Dp(r){r.return!==null&&(Fa(r,1),WE(r,1,0))}function Np(r){for(;r===Dd;)Dd=sl[--al],sl[al]=null,Nd=sl[--al],sl[al]=null;for(;r===Ba;)Ba=pi[--gi],pi[gi]=null,Ar=pi[--gi],pi[gi]=null,Ir=pi[--gi],pi[gi]=null}var xn=null,fn=null,We=!1,Pi=null,$i=!1,Op=Error(i(519));function za(r){var a=Error(i(418,""));throw ec(mi(a,r)),Op}function YE(r){var a=r.stateNode,l=r.type,c=r.memoizedProps;switch(a[en]=r,a[Kt]=c,l){case"dialog":ze("cancel",a),ze("close",a);break;case"iframe":case"object":case"embed":ze("load",a);break;case"video":case"audio":for(l=0;l<Ic.length;l++)ze(Ic[l],a);break;case"source":ze("error",a);break;case"img":case"image":case"link":ze("error",a),ze("load",a);break;case"details":ze("toggle",a);break;case"input":ze("invalid",a),Ca(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Sa(a);break;case"select":ze("invalid",a);break;case"textarea":ze("invalid",a),Rs(a,c.value,c.defaultValue,c.children),Sa(a)}l=c.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||a.textContent===""+l||c.suppressHydrationWarning===!0||sw(a.textContent,l)?(c.popover!=null&&(ze("beforetoggle",a),ze("toggle",a)),c.onScroll!=null&&ze("scroll",a),c.onScrollEnd!=null&&ze("scrollend",a),c.onClick!=null&&(a.onclick=uf),a=!0):a=!1,a||za(r)}function XE(r){for(xn=r.return;xn;)switch(xn.tag){case 3:case 27:$i=!0;return;case 5:case 13:$i=!1;return;default:xn=xn.return}}function Ju(r){if(r!==xn)return!1;if(!We)return XE(r),We=!0,!1;var a=!1,l;if((l=r.tag!==3&&r.tag!==27)&&((l=r.tag===5)&&(l=r.type,l=!(l!=="form"&&l!=="button")||Xg(r.type,r.memoizedProps)),l=!l),l&&(a=!0),a&&fn&&za(r),XE(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,a=0;r;){if(r.nodeType===8)if(l=r.data,l==="/$"){if(a===0){fn=ki(r.nextSibling);break e}a--}else l!=="$"&&l!=="$!"&&l!=="$?"||a++;r=r.nextSibling}fn=null}}else fn=xn?ki(r.stateNode.nextSibling):null;return!0}function Zu(){fn=xn=null,We=!1}function ec(r){Pi===null?Pi=[r]:Pi.push(r)}var tc=Error(i(460)),JE=Error(i(474)),Pp={then:function(){}};function ZE(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Od(){}function eT(r,a,l){switch(l=r[l],l===void 0?r.push(a):l!==a&&(a.then(Od,Od),a=l),a.status){case"fulfilled":return a.value;case"rejected":throw r=a.reason,r===tc?Error(i(483)):r;default:if(typeof a.status=="string")a.then(Od,Od);else{if(r=at,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=a,r.status="pending",r.then(function(c){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=c}},function(c){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw r=a.reason,r===tc?Error(i(483)):r}throw nc=a,tc}}var nc=null;function tT(){if(nc===null)throw Error(i(459));var r=nc;return nc=null,r}var ol=null,ic=0;function Pd(r){var a=ic;return ic+=1,ol===null&&(ol=[]),eT(ol,r,a)}function rc(r,a){a=a.props.ref,r.ref=a!==void 0?a:null}function xd(r,a){throw a.$$typeof===o?Error(i(525)):(r=Object.prototype.toString.call(a),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":r)))}function nT(r){var a=r._init;return a(r._payload)}function iT(r){function a(L,x){if(r){var z=L.deletions;z===null?(L.deletions=[x],L.flags|=16):z.push(x)}}function l(L,x){if(!r)return null;for(;x!==null;)a(L,x),x=x.sibling;return null}function c(L){for(var x=new Map;L!==null;)L.key!==null?x.set(L.key,L):x.set(L.index,L),L=L.sibling;return x}function f(L,x){return L=Fs(L,x),L.index=0,L.sibling=null,L}function g(L,x,z){return L.index=z,r?(z=L.alternate,z!==null?(z=z.index,z<x?(L.flags|=33554434,x):z):(L.flags|=33554434,x)):(L.flags|=1048576,x)}function T(L){return r&&L.alternate===null&&(L.flags|=33554434),L}function b(L,x,z,X){return x===null||x.tag!==6?(x=Rg(z,L.mode,X),x.return=L,x):(x=f(x,z),x.return=L,x)}function S(L,x,z,X){var ye=z.type;return ye===m?Y(L,x,z.props.children,X,z.key):x!==null&&(x.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===ae&&nT(ye)===x.type)?(x=f(x,z.props),rc(x,z),x.return=L,x):(x=Xd(z.type,z.key,z.props,null,L.mode,X),rc(x,z),x.return=L,x)}function V(L,x,z,X){return x===null||x.tag!==4||x.stateNode.containerInfo!==z.containerInfo||x.stateNode.implementation!==z.implementation?(x=Sg(z,L.mode,X),x.return=L,x):(x=f(x,z.children||[]),x.return=L,x)}function Y(L,x,z,X,ye){return x===null||x.tag!==7?(x=Xa(z,L.mode,X,ye),x.return=L,x):(x=f(x,z),x.return=L,x)}function te(L,x,z){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Rg(""+x,L.mode,z),x.return=L,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case u:return z=Xd(x.type,x.key,x.props,null,L.mode,z),rc(z,x),z.return=L,z;case h:return x=Sg(x,L.mode,z),x.return=L,x;case ae:var X=x._init;return x=X(x._payload),te(L,x,z)}if(ce(x)||me(x))return x=Xa(x,L.mode,z,null),x.return=L,x;if(typeof x.then=="function")return te(L,Pd(x),z);if(x.$$typeof===C)return te(L,Qd(L,x),z);xd(L,x)}return null}function H(L,x,z,X){var ye=x!==null?x.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ye!==null?null:b(L,x,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case u:return z.key===ye?S(L,x,z,X):null;case h:return z.key===ye?V(L,x,z,X):null;case ae:return ye=z._init,z=ye(z._payload),H(L,x,z,X)}if(ce(z)||me(z))return ye!==null?null:Y(L,x,z,X,null);if(typeof z.then=="function")return H(L,x,Pd(z),X);if(z.$$typeof===C)return H(L,x,Qd(L,z),X);xd(L,z)}return null}function W(L,x,z,X,ye){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return L=L.get(z)||null,b(x,L,""+X,ye);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case u:return L=L.get(X.key===null?z:X.key)||null,S(x,L,X,ye);case h:return L=L.get(X.key===null?z:X.key)||null,V(x,L,X,ye);case ae:var ke=X._init;return X=ke(X._payload),W(L,x,z,X,ye)}if(ce(X)||me(X))return L=L.get(z)||null,Y(x,L,X,ye,null);if(typeof X.then=="function")return W(L,x,z,Pd(X),ye);if(X.$$typeof===C)return W(L,x,z,Qd(x,X),ye);xd(x,X)}return null}function Te(L,x,z,X){for(var ye=null,ke=null,be=x,Re=x=0,an=null;be!==null&&Re<z.length;Re++){be.index>Re?(an=be,be=null):an=be.sibling;var Ye=H(L,be,z[Re],X);if(Ye===null){be===null&&(be=an);break}r&&be&&Ye.alternate===null&&a(L,be),x=g(Ye,x,Re),ke===null?ye=Ye:ke.sibling=Ye,ke=Ye,be=an}if(Re===z.length)return l(L,be),We&&Fa(L,Re),ye;if(be===null){for(;Re<z.length;Re++)be=te(L,z[Re],X),be!==null&&(x=g(be,x,Re),ke===null?ye=be:ke.sibling=be,ke=be);return We&&Fa(L,Re),ye}for(be=c(be);Re<z.length;Re++)an=W(be,L,Re,z[Re],X),an!==null&&(r&&an.alternate!==null&&be.delete(an.key===null?Re:an.key),x=g(an,x,Re),ke===null?ye=an:ke.sibling=an,ke=an);return r&&be.forEach(function($s){return a(L,$s)}),We&&Fa(L,Re),ye}function Ne(L,x,z,X){if(z==null)throw Error(i(151));for(var ye=null,ke=null,be=x,Re=x=0,an=null,Ye=z.next();be!==null&&!Ye.done;Re++,Ye=z.next()){be.index>Re?(an=be,be=null):an=be.sibling;var $s=H(L,be,Ye.value,X);if($s===null){be===null&&(be=an);break}r&&be&&$s.alternate===null&&a(L,be),x=g($s,x,Re),ke===null?ye=$s:ke.sibling=$s,ke=$s,be=an}if(Ye.done)return l(L,be),We&&Fa(L,Re),ye;if(be===null){for(;!Ye.done;Re++,Ye=z.next())Ye=te(L,Ye.value,X),Ye!==null&&(x=g(Ye,x,Re),ke===null?ye=Ye:ke.sibling=Ye,ke=Ye);return We&&Fa(L,Re),ye}for(be=c(be);!Ye.done;Re++,Ye=z.next())Ye=W(be,L,Re,Ye.value,X),Ye!==null&&(r&&Ye.alternate!==null&&be.delete(Ye.key===null?Re:Ye.key),x=g(Ye,x,Re),ke===null?ye=Ye:ke.sibling=Ye,ke=Ye);return r&&be.forEach(function(VN){return a(L,VN)}),We&&Fa(L,Re),ye}function Dt(L,x,z,X){if(typeof z=="object"&&z!==null&&z.type===m&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case u:e:{for(var ye=z.key;x!==null;){if(x.key===ye){if(ye=z.type,ye===m){if(x.tag===7){l(L,x.sibling),X=f(x,z.props.children),X.return=L,L=X;break e}}else if(x.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===ae&&nT(ye)===x.type){l(L,x.sibling),X=f(x,z.props),rc(X,z),X.return=L,L=X;break e}l(L,x);break}else a(L,x);x=x.sibling}z.type===m?(X=Xa(z.props.children,L.mode,X,z.key),X.return=L,L=X):(X=Xd(z.type,z.key,z.props,null,L.mode,X),rc(X,z),X.return=L,L=X)}return T(L);case h:e:{for(ye=z.key;x!==null;){if(x.key===ye)if(x.tag===4&&x.stateNode.containerInfo===z.containerInfo&&x.stateNode.implementation===z.implementation){l(L,x.sibling),X=f(x,z.children||[]),X.return=L,L=X;break e}else{l(L,x);break}else a(L,x);x=x.sibling}X=Sg(z,L.mode,X),X.return=L,L=X}return T(L);case ae:return ye=z._init,z=ye(z._payload),Dt(L,x,z,X)}if(ce(z))return Te(L,x,z,X);if(me(z)){if(ye=me(z),typeof ye!="function")throw Error(i(150));return z=ye.call(z),Ne(L,x,z,X)}if(typeof z.then=="function")return Dt(L,x,Pd(z),X);if(z.$$typeof===C)return Dt(L,x,Qd(L,z),X);xd(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,x!==null&&x.tag===6?(l(L,x.sibling),X=f(x,z),X.return=L,L=X):(l(L,x),X=Rg(z,L.mode,X),X.return=L,L=X),T(L)):l(L,x)}return function(L,x,z,X){try{ic=0;var ye=Dt(L,x,z,X);return ol=null,ye}catch(be){if(be===tc)throw be;var ke=Ei(29,be,null,L.mode);return ke.lanes=X,ke.return=L,ke}finally{}}}var qa=iT(!0),rT=iT(!1),ll=Le(null),kd=Le(0);function sT(r,a){r=Mr,Ue(kd,r),Ue(ll,a),Mr=r|a.baseLanes}function xp(){Ue(kd,Mr),Ue(ll,ll.current)}function kp(){Mr=kd.current,nt(ll),nt(kd)}var _i=Le(null),Qi=null;function Ds(r){var a=r.alternate;Ue(Wt,Wt.current&1),Ue(_i,r),Qi===null&&(a===null||ll.current!==null||a.memoizedState!==null)&&(Qi=r)}function aT(r){if(r.tag===22){if(Ue(Wt,Wt.current),Ue(_i,r),Qi===null){var a=r.alternate;a!==null&&a.memoizedState!==null&&(Qi=r)}}else Ns()}function Ns(){Ue(Wt,Wt.current),Ue(_i,_i.current)}function Rr(r){nt(_i),Qi===r&&(Qi=null),nt(Wt)}var Wt=Le(0);function Vd(r){for(var a=r;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var wD=typeof AbortController<"u"?AbortController:function(){var r=[],a=this.signal={aborted:!1,addEventListener:function(l,c){r.push(c)}};this.abort=function(){a.aborted=!0,r.forEach(function(l){return l()})}},bD=n.unstable_scheduleCallback,ID=n.unstable_NormalPriority,Yt={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vp(){return{controller:new wD,data:new Map,refCount:0}}function sc(r){r.refCount--,r.refCount===0&&bD(ID,function(){r.controller.abort()})}var ac=null,Mp=0,ul=0,cl=null;function AD(r,a){if(ac===null){var l=ac=[];Mp=0,ul=qg(),cl={status:"pending",value:void 0,then:function(c){l.push(c)}}}return Mp++,a.then(oT,oT),a}function oT(){if(--Mp===0&&ac!==null){cl!==null&&(cl.status="fulfilled");var r=ac;ac=null,ul=0,cl=null;for(var a=0;a<r.length;a++)(0,r[a])()}}function RD(r,a){var l=[],c={status:"pending",value:null,reason:null,then:function(f){l.push(f)}};return r.then(function(){c.status="fulfilled",c.value=a;for(var f=0;f<l.length;f++)(0,l[f])(a)},function(f){for(c.status="rejected",c.reason=f,f=0;f<l.length;f++)(0,l[f])(void 0)}),c}var lT=A.S;A.S=function(r,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&AD(r,a),lT!==null&&lT(r,a)};var ja=Le(null);function Lp(){var r=ja.current;return r!==null?r:at.pooledCache}function Md(r,a){a===null?Ue(ja,ja.current):Ue(ja,a.pool)}function uT(){var r=Lp();return r===null?null:{parent:Yt._currentValue,pool:r}}var Os=0,xe=null,it=null,zt=null,Ld=!1,hl=!1,Ha=!1,Ud=0,oc=0,dl=null,SD=0;function Mt(){throw Error(i(321))}function Up(r,a){if(a===null)return!1;for(var l=0;l<a.length&&l<r.length;l++)if(!Xn(r[l],a[l]))return!1;return!0}function Bp(r,a,l,c,f,g){return Os=g,xe=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,A.H=r===null||r.memoizedState===null?Ga:Ps,Ha=!1,g=l(c,f),Ha=!1,hl&&(g=hT(a,l,c,f)),cT(r),g}function cT(r){A.H=Wi;var a=it!==null&&it.next!==null;if(Os=0,zt=it=xe=null,Ld=!1,oc=0,dl=null,a)throw Error(i(300));r===null||rn||(r=r.dependencies,r!==null&&$d(r)&&(rn=!0))}function hT(r,a,l,c){xe=r;var f=0;do{if(hl&&(dl=null),oc=0,hl=!1,25<=f)throw Error(i(301));if(f+=1,zt=it=null,r.updateQueue!=null){var g=r.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}A.H=Ka,g=a(l,c)}while(hl);return g}function CD(){var r=A.H,a=r.useState()[0];return a=typeof a.then=="function"?lc(a):a,r=r.useState()[0],(it!==null?it.memoizedState:null)!==r&&(xe.flags|=1024),a}function Fp(){var r=Ud!==0;return Ud=0,r}function zp(r,a,l){a.updateQueue=r.updateQueue,a.flags&=-2053,r.lanes&=~l}function qp(r){if(Ld){for(r=r.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Ld=!1}Os=0,zt=it=xe=null,hl=!1,oc=Ud=0,dl=null}function Hn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?xe.memoizedState=zt=r:zt=zt.next=r,zt}function qt(){if(it===null){var r=xe.alternate;r=r!==null?r.memoizedState:null}else r=it.next;var a=zt===null?xe.memoizedState:zt.next;if(a!==null)zt=a,it=r;else{if(r===null)throw xe.alternate===null?Error(i(467)):Error(i(310));it=r,r={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},zt===null?xe.memoizedState=zt=r:zt=zt.next=r}return zt}var Bd;Bd=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function lc(r){var a=oc;return oc+=1,dl===null&&(dl=[]),r=eT(dl,r,a),a=xe,(zt===null?a.memoizedState:zt.next)===null&&(a=a.alternate,A.H=a===null||a.memoizedState===null?Ga:Ps),r}function Fd(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return lc(r);if(r.$$typeof===C)return Tn(r)}throw Error(i(438,String(r)))}function jp(r){var a=null,l=xe.updateQueue;if(l!==null&&(a=l.memoCache),a==null){var c=xe.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),l===null&&(l=Bd(),xe.updateQueue=l),l.memoCache=a,l=a.data[a.index],l===void 0)for(l=a.data[a.index]=Array(r),c=0;c<r;c++)l[c]=oe;return a.index++,l}function Sr(r,a){return typeof a=="function"?a(r):a}function zd(r){var a=qt();return Hp(a,it,r)}function Hp(r,a,l){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=l;var f=r.baseQueue,g=c.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}a.baseQueue=f=g,c.pending=null}if(g=r.baseState,f===null)r.memoizedState=g;else{a=f.next;var b=T=null,S=null,V=a,Y=!1;do{var te=V.lane&-536870913;if(te!==V.lane?(Ge&te)===te:(Os&te)===te){var H=V.revertLane;if(H===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),te===ul&&(Y=!0);else if((Os&H)===H){V=V.next,H===ul&&(Y=!0);continue}else te={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},S===null?(b=S=te,T=g):S=S.next=te,xe.lanes|=H,zs|=H;te=V.action,Ha&&l(g,te),g=V.hasEagerState?V.eagerState:l(g,te)}else H={lane:te,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},S===null?(b=S=H,T=g):S=S.next=H,xe.lanes|=te,zs|=te;V=V.next}while(V!==null&&V!==a);if(S===null?T=g:S.next=b,!Xn(g,r.memoizedState)&&(rn=!0,Y&&(l=cl,l!==null)))throw l;r.memoizedState=g,r.baseState=T,r.baseQueue=S,c.lastRenderedState=g}return f===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function Gp(r){var a=qt(),l=a.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=r;var c=l.dispatch,f=l.pending,g=a.memoizedState;if(f!==null){l.pending=null;var T=f=f.next;do g=r(g,T.action),T=T.next;while(T!==f);Xn(g,a.memoizedState)||(rn=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),l.lastRenderedState=g}return[g,c]}function dT(r,a,l){var c=xe,f=qt(),g=We;if(g){if(l===void 0)throw Error(i(407));l=l()}else l=a();var T=!Xn((it||f).memoizedState,l);if(T&&(f.memoizedState=l,rn=!0),f=f.queue,Qp(pT.bind(null,c,f,r),[r]),f.getSnapshot!==a||T||zt!==null&&zt.memoizedState.tag&1){if(c.flags|=2048,fl(9,mT.bind(null,c,f,l,a),{destroy:void 0},null),at===null)throw Error(i(349));g||Os&60||fT(c,a,l)}return l}function fT(r,a,l){r.flags|=16384,r={getSnapshot:a,value:l},a=xe.updateQueue,a===null?(a=Bd(),xe.updateQueue=a,a.stores=[r]):(l=a.stores,l===null?a.stores=[r]:l.push(r))}function mT(r,a,l,c){a.value=l,a.getSnapshot=c,gT(a)&&_T(r)}function pT(r,a,l){return l(function(){gT(a)&&_T(r)})}function gT(r){var a=r.getSnapshot;r=r.value;try{var l=a();return!Xn(r,l)}catch{return!0}}function _T(r){var a=Cs(r,2);a!==null&&kn(a,r,2)}function Kp(r){var a=Hn();if(typeof r=="function"){var l=r;if(r=l(),Ha){Mi(!0);try{l()}finally{Mi(!1)}}}return a.memoizedState=a.baseState=r,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:r},a}function yT(r,a,l,c){return r.baseState=l,Hp(r,it,typeof c=="function"?c:Sr)}function DD(r,a,l,c,f){if(Hd(r))throw Error(i(485));if(r=a.action,r!==null){var g={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};A.T!==null?l(!0):g.isTransition=!1,c(g),l=a.pending,l===null?(g.next=a.pending=g,vT(a,g)):(g.next=l.next,a.pending=l.next=g)}}function vT(r,a){var l=a.action,c=a.payload,f=r.state;if(a.isTransition){var g=A.T,T={};A.T=T;try{var b=l(f,c),S=A.S;S!==null&&S(T,b),ET(r,a,b)}catch(V){$p(r,a,V)}finally{A.T=g}}else try{g=l(f,c),ET(r,a,g)}catch(V){$p(r,a,V)}}function ET(r,a,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(c){TT(r,a,c)},function(c){return $p(r,a,c)}):TT(r,a,l)}function TT(r,a,l){a.status="fulfilled",a.value=l,wT(a),r.state=l,a=r.pending,a!==null&&(l=a.next,l===a?r.pending=null:(l=l.next,a.next=l,vT(r,l)))}function $p(r,a,l){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=l,wT(a),a=a.next;while(a!==c)}r.action=null}function wT(r){r=r.listeners;for(var a=0;a<r.length;a++)(0,r[a])()}function bT(r,a){return a}function IT(r,a){if(We){var l=at.formState;if(l!==null){e:{var c=xe;if(We){if(fn){t:{for(var f=fn,g=$i;f.nodeType!==8;){if(!g){f=null;break t}if(f=ki(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){fn=ki(f.nextSibling),c=f.data==="F!";break e}}za(c)}c=!1}c&&(a=l[0])}}return l=Hn(),l.memoizedState=l.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bT,lastRenderedState:a},l.queue=c,l=qT.bind(null,xe,c),c.dispatch=l,c=Kp(!1),g=Zp.bind(null,xe,!1,c.queue),c=Hn(),f={state:a,dispatch:null,action:r,pending:null},c.queue=f,l=DD.bind(null,xe,f,g,l),f.dispatch=l,c.memoizedState=r,[a,l,!1]}function AT(r){var a=qt();return RT(a,it,r)}function RT(r,a,l){a=Hp(r,a,bT)[0],r=zd(Sr)[0],a=typeof a=="object"&&a!==null&&typeof a.then=="function"?lc(a):a;var c=qt(),f=c.queue,g=f.dispatch;return l!==c.memoizedState&&(xe.flags|=2048,fl(9,ND.bind(null,f,l),{destroy:void 0},null)),[a,g,r]}function ND(r,a){r.action=a}function ST(r){var a=qt(),l=it;if(l!==null)return RT(a,l,r);qt(),a=a.memoizedState,l=qt();var c=l.queue.dispatch;return l.memoizedState=r,[a,c,!1]}function fl(r,a,l,c){return r={tag:r,create:a,inst:l,deps:c,next:null},a=xe.updateQueue,a===null&&(a=Bd(),xe.updateQueue=a),l=a.lastEffect,l===null?a.lastEffect=r.next=r:(c=l.next,l.next=r,r.next=c,a.lastEffect=r),r}function CT(){return qt().memoizedState}function qd(r,a,l,c){var f=Hn();xe.flags|=r,f.memoizedState=fl(1|a,l,{destroy:void 0},c===void 0?null:c)}function jd(r,a,l,c){var f=qt();c=c===void 0?null:c;var g=f.memoizedState.inst;it!==null&&c!==null&&Up(c,it.memoizedState.deps)?f.memoizedState=fl(a,l,g,c):(xe.flags|=r,f.memoizedState=fl(1|a,l,g,c))}function DT(r,a){qd(8390656,8,r,a)}function Qp(r,a){jd(2048,8,r,a)}function NT(r,a){return jd(4,2,r,a)}function OT(r,a){return jd(4,4,r,a)}function PT(r,a){if(typeof a=="function"){r=r();var l=a(r);return function(){typeof l=="function"?l():a(null)}}if(a!=null)return r=r(),a.current=r,function(){a.current=null}}function xT(r,a,l){l=l!=null?l.concat([r]):null,jd(4,4,PT.bind(null,a,r),l)}function Wp(){}function kT(r,a){var l=qt();a=a===void 0?null:a;var c=l.memoizedState;return a!==null&&Up(a,c[1])?c[0]:(l.memoizedState=[r,a],r)}function VT(r,a){var l=qt();a=a===void 0?null:a;var c=l.memoizedState;if(a!==null&&Up(a,c[1]))return c[0];if(c=r(),Ha){Mi(!0);try{r()}finally{Mi(!1)}}return l.memoizedState=[c,a],c}function Yp(r,a,l){return l===void 0||Os&1073741824?r.memoizedState=a:(r.memoizedState=l,r=L0(),xe.lanes|=r,zs|=r,l)}function MT(r,a,l,c){return Xn(l,a)?l:ll.current!==null?(r=Yp(r,l,c),Xn(r,a)||(rn=!0),r):Os&42?(r=L0(),xe.lanes|=r,zs|=r,a):(rn=!0,r.memoizedState=l)}function LT(r,a,l,c,f){var g=de.p;de.p=g!==0&&8>g?g:8;var T=A.T,b={};A.T=b,Zp(r,!1,a,l);try{var S=f(),V=A.S;if(V!==null&&V(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var Y=RD(S,c);uc(r,a,Y,ti(r))}else uc(r,a,c,ti(r))}catch(te){uc(r,a,{then:function(){},status:"rejected",reason:te},ti())}finally{de.p=g,A.T=T}}function OD(){}function Xp(r,a,l,c){if(r.tag!==5)throw Error(i(476));var f=UT(r).queue;LT(r,f,a,Se,l===null?OD:function(){return BT(r),l(c)})}function UT(r){var a=r.memoizedState;if(a!==null)return a;a={memoizedState:Se,baseState:Se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:Se},next:null};var l={};return a.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:l},next:null},r.memoizedState=a,r=r.alternate,r!==null&&(r.memoizedState=a),a}function BT(r){var a=UT(r).next.queue;uc(r,a,{},ti())}function Jp(){return Tn(Dc)}function FT(){return qt().memoizedState}function zT(){return qt().memoizedState}function PD(r){for(var a=r.return;a!==null;){switch(a.tag){case 24:case 3:var l=ti();r=Vs(l);var c=Ms(a,r,l);c!==null&&(kn(c,a,l),dc(c,a,l)),a={cache:Vp()},r.payload=a;return}a=a.return}}function xD(r,a,l){var c=ti();l={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Hd(r)?jT(a,l):(l=Cp(r,a,l,c),l!==null&&(kn(l,r,c),HT(l,a,c)))}function qT(r,a,l){var c=ti();uc(r,a,l,c)}function uc(r,a,l,c){var f={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Hd(r))jT(a,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var T=a.lastRenderedState,b=g(T,l);if(f.hasEagerState=!0,f.eagerState=b,Xn(b,T))return Sd(r,a,f,0),at===null&&Rd(),!1}catch{}finally{}if(l=Cp(r,a,f,c),l!==null)return kn(l,r,c),HT(l,a,c),!0}return!1}function Zp(r,a,l,c){if(c={lane:2,revertLane:qg(),action:c,hasEagerState:!1,eagerState:null,next:null},Hd(r)){if(a)throw Error(i(479))}else a=Cp(r,l,c,2),a!==null&&kn(a,r,2)}function Hd(r){var a=r.alternate;return r===xe||a!==null&&a===xe}function jT(r,a){hl=Ld=!0;var l=r.pending;l===null?a.next=a:(a.next=l.next,l.next=a),r.pending=a}function HT(r,a,l){if(l&4194176){var c=a.lanes;c&=r.pendingLanes,l|=c,a.lanes=l,ys(r,l)}}var Wi={readContext:Tn,use:Fd,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt};Wi.useCacheRefresh=Mt,Wi.useMemoCache=Mt,Wi.useHostTransitionStatus=Mt,Wi.useFormState=Mt,Wi.useActionState=Mt,Wi.useOptimistic=Mt;var Ga={readContext:Tn,use:Fd,useCallback:function(r,a){return Hn().memoizedState=[r,a===void 0?null:a],r},useContext:Tn,useEffect:DT,useImperativeHandle:function(r,a,l){l=l!=null?l.concat([r]):null,qd(4194308,4,PT.bind(null,a,r),l)},useLayoutEffect:function(r,a){return qd(4194308,4,r,a)},useInsertionEffect:function(r,a){qd(4,2,r,a)},useMemo:function(r,a){var l=Hn();a=a===void 0?null:a;var c=r();if(Ha){Mi(!0);try{r()}finally{Mi(!1)}}return l.memoizedState=[c,a],c},useReducer:function(r,a,l){var c=Hn();if(l!==void 0){var f=l(a);if(Ha){Mi(!0);try{l(a)}finally{Mi(!1)}}}else f=a;return c.memoizedState=c.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},c.queue=r,r=r.dispatch=xD.bind(null,xe,r),[c.memoizedState,r]},useRef:function(r){var a=Hn();return r={current:r},a.memoizedState=r},useState:function(r){r=Kp(r);var a=r.queue,l=qT.bind(null,xe,a);return a.dispatch=l,[r.memoizedState,l]},useDebugValue:Wp,useDeferredValue:function(r,a){var l=Hn();return Yp(l,r,a)},useTransition:function(){var r=Kp(!1);return r=LT.bind(null,xe,r.queue,!0,!1),Hn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,a,l){var c=xe,f=Hn();if(We){if(l===void 0)throw Error(i(407));l=l()}else{if(l=a(),at===null)throw Error(i(349));Ge&60||fT(c,a,l)}f.memoizedState=l;var g={value:l,getSnapshot:a};return f.queue=g,DT(pT.bind(null,c,g,r),[r]),c.flags|=2048,fl(9,mT.bind(null,c,g,l,a),{destroy:void 0},null),l},useId:function(){var r=Hn(),a=at.identifierPrefix;if(We){var l=Ar,c=Ir;l=(c&~(1<<32-Nn(c)-1)).toString(32)+l,a=":"+a+"R"+l,l=Ud++,0<l&&(a+="H"+l.toString(32)),a+=":"}else l=SD++,a=":"+a+"r"+l.toString(32)+":";return r.memoizedState=a},useCacheRefresh:function(){return Hn().memoizedState=PD.bind(null,xe)}};Ga.useMemoCache=jp,Ga.useHostTransitionStatus=Jp,Ga.useFormState=IT,Ga.useActionState=IT,Ga.useOptimistic=function(r){var a=Hn();a.memoizedState=a.baseState=r;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=l,a=Zp.bind(null,xe,!0,l),l.dispatch=a,[r,a]};var Ps={readContext:Tn,use:Fd,useCallback:kT,useContext:Tn,useEffect:Qp,useImperativeHandle:xT,useInsertionEffect:NT,useLayoutEffect:OT,useMemo:VT,useReducer:zd,useRef:CT,useState:function(){return zd(Sr)},useDebugValue:Wp,useDeferredValue:function(r,a){var l=qt();return MT(l,it.memoizedState,r,a)},useTransition:function(){var r=zd(Sr)[0],a=qt().memoizedState;return[typeof r=="boolean"?r:lc(r),a]},useSyncExternalStore:dT,useId:FT};Ps.useCacheRefresh=zT,Ps.useMemoCache=jp,Ps.useHostTransitionStatus=Jp,Ps.useFormState=AT,Ps.useActionState=AT,Ps.useOptimistic=function(r,a){var l=qt();return yT(l,it,r,a)};var Ka={readContext:Tn,use:Fd,useCallback:kT,useContext:Tn,useEffect:Qp,useImperativeHandle:xT,useInsertionEffect:NT,useLayoutEffect:OT,useMemo:VT,useReducer:Gp,useRef:CT,useState:function(){return Gp(Sr)},useDebugValue:Wp,useDeferredValue:function(r,a){var l=qt();return it===null?Yp(l,r,a):MT(l,it.memoizedState,r,a)},useTransition:function(){var r=Gp(Sr)[0],a=qt().memoizedState;return[typeof r=="boolean"?r:lc(r),a]},useSyncExternalStore:dT,useId:FT};Ka.useCacheRefresh=zT,Ka.useMemoCache=jp,Ka.useHostTransitionStatus=Jp,Ka.useFormState=ST,Ka.useActionState=ST,Ka.useOptimistic=function(r,a){var l=qt();return it!==null?yT(l,it,r,a):(l.baseState=r,[r,l.queue.dispatch])};function eg(r,a,l,c){a=r.memoizedState,l=l(c,a),l=l==null?a:N({},a,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var tg={isMounted:function(r){return(r=r._reactInternals)?pe(r)===r:!1},enqueueSetState:function(r,a,l){r=r._reactInternals;var c=ti(),f=Vs(c);f.payload=a,l!=null&&(f.callback=l),a=Ms(r,f,c),a!==null&&(kn(a,r,c),dc(a,r,c))},enqueueReplaceState:function(r,a,l){r=r._reactInternals;var c=ti(),f=Vs(c);f.tag=1,f.payload=a,l!=null&&(f.callback=l),a=Ms(r,f,c),a!==null&&(kn(a,r,c),dc(a,r,c))},enqueueForceUpdate:function(r,a){r=r._reactInternals;var l=ti(),c=Vs(l);c.tag=2,a!=null&&(c.callback=a),a=Ms(r,c,l),a!==null&&(kn(a,r,l),dc(a,r,l))}};function GT(r,a,l,c,f,g,T){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,T):a.prototype&&a.prototype.isPureReactComponent?!Yu(l,c)||!Yu(f,g):!0}function KT(r,a,l,c){r=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,c),a.state!==r&&tg.enqueueReplaceState(a,a.state,null)}function $a(r,a){var l=a;if("ref"in a){l={};for(var c in a)c!=="ref"&&(l[c]=a[c])}if(r=r.defaultProps){l===a&&(l=N({},l));for(var f in r)l[f]===void 0&&(l[f]=r[f])}return l}var Gd=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function $T(r){Gd(r)}function QT(r){console.error(r)}function WT(r){Gd(r)}function Kd(r,a){try{var l=r.onUncaughtError;l(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function YT(r,a,l){try{var c=r.onCaughtError;c(l.value,{componentStack:l.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ng(r,a,l){return l=Vs(l),l.tag=3,l.payload={element:null},l.callback=function(){Kd(r,a)},l}function XT(r){return r=Vs(r),r.tag=3,r}function JT(r,a,l,c){var f=l.type.getDerivedStateFromError;if(typeof f=="function"){var g=c.value;r.payload=function(){return f(g)},r.callback=function(){YT(a,l,c)}}var T=l.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(r.callback=function(){YT(a,l,c),typeof f!="function"&&(qs===null?qs=new Set([this]):qs.add(this));var b=c.stack;this.componentDidCatch(c.value,{componentStack:b!==null?b:""})})}function kD(r,a,l,c,f){if(l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=l.alternate,a!==null&&hc(a,l,f,!0),l=_i.current,l!==null){switch(l.tag){case 13:return Qi===null?Lg():l.alternate===null&&Ct===0&&(Ct=3),l.flags&=-257,l.flags|=65536,l.lanes=f,c===Pp?l.flags|=16384:(a=l.updateQueue,a===null?l.updateQueue=new Set([c]):a.add(c),Bg(r,c,f)),!1;case 22:return l.flags|=65536,c===Pp?l.flags|=16384:(a=l.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},l.updateQueue=a):(l=a.retryQueue,l===null?a.retryQueue=new Set([c]):l.add(c)),Bg(r,c,f)),!1}throw Error(i(435,l.tag))}return Bg(r,c,f),Lg(),!1}if(We)return a=_i.current,a!==null?(!(a.flags&65536)&&(a.flags|=256),a.flags|=65536,a.lanes=f,c!==Op&&(r=Error(i(422),{cause:c}),ec(mi(r,l)))):(c!==Op&&(a=Error(i(423),{cause:c}),ec(mi(a,l))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,c=mi(c,l),f=ng(r.stateNode,c,f),_g(r,f),Ct!==4&&(Ct=2)),!1;var g=Error(i(520),{cause:c});if(g=mi(g,l),Ec===null?Ec=[g]:Ec.push(g),Ct!==4&&(Ct=2),a===null)return!0;c=mi(c,l),l=a;do{switch(l.tag){case 3:return l.flags|=65536,r=f&-f,l.lanes|=r,r=ng(l.stateNode,c,r),_g(l,r),!1;case 1:if(a=l.type,g=l.stateNode,(l.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(qs===null||!qs.has(g))))return l.flags|=65536,f&=-f,l.lanes|=f,f=XT(f),JT(f,r,l,c),_g(l,f),!1}l=l.return}while(l!==null);return!1}var ZT=Error(i(461)),rn=!1;function mn(r,a,l,c){a.child=r===null?rT(a,null,l,c):qa(a,r.child,l,c)}function e0(r,a,l,c,f){l=l.render;var g=a.ref;if("ref"in c){var T={};for(var b in c)b!=="ref"&&(T[b]=c[b])}else T=c;return Wa(a),c=Bp(r,a,l,T,g,f),b=Fp(),r!==null&&!rn?(zp(r,a,f),Cr(r,a,f)):(We&&b&&Dp(a),a.flags|=1,mn(r,a,c,f),a.child)}function t0(r,a,l,c,f){if(r===null){var g=l.type;return typeof g=="function"&&!Ag(g)&&g.defaultProps===void 0&&l.compare===null?(a.tag=15,a.type=g,n0(r,a,g,c,f)):(r=Xd(l.type,null,c,a,a.mode,f),r.ref=a.ref,r.return=a,a.child=r)}if(g=r.child,!hg(r,f)){var T=g.memoizedProps;if(l=l.compare,l=l!==null?l:Yu,l(T,c)&&r.ref===a.ref)return Cr(r,a,f)}return a.flags|=1,r=Fs(g,c),r.ref=a.ref,r.return=a,a.child=r}function n0(r,a,l,c,f){if(r!==null){var g=r.memoizedProps;if(Yu(g,c)&&r.ref===a.ref)if(rn=!1,a.pendingProps=c=g,hg(r,f))r.flags&131072&&(rn=!0);else return a.lanes=r.lanes,Cr(r,a,f)}return ig(r,a,l,c,f)}function i0(r,a,l){var c=a.pendingProps,f=c.children,g=(a.stateNode._pendingVisibility&2)!==0,T=r!==null?r.memoizedState:null;if(cc(r,a),c.mode==="hidden"||g){if(a.flags&128){if(c=T!==null?T.baseLanes|l:l,r!==null){for(f=a.child=r.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;a.childLanes=g&~c}else a.childLanes=0,a.child=null;return r0(r,a,c,l)}if(l&536870912)a.memoizedState={baseLanes:0,cachePool:null},r!==null&&Md(a,T!==null?T.cachePool:null),T!==null?sT(a,T):xp(),aT(a);else return a.lanes=a.childLanes=536870912,r0(r,a,T!==null?T.baseLanes|l:l,l)}else T!==null?(Md(a,T.cachePool),sT(a,T),Ns(),a.memoizedState=null):(r!==null&&Md(a,null),xp(),Ns());return mn(r,a,f,l),a.child}function r0(r,a,l,c){var f=Lp();return f=f===null?null:{parent:Yt._currentValue,pool:f},a.memoizedState={baseLanes:l,cachePool:f},r!==null&&Md(a,null),xp(),aT(a),r!==null&&hc(r,a,c,!0),null}function cc(r,a){var l=a.ref;if(l===null)r!==null&&r.ref!==null&&(a.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(i(284));(r===null||r.ref!==l)&&(a.flags|=2097664)}}function ig(r,a,l,c,f){return Wa(a),l=Bp(r,a,l,c,void 0,f),c=Fp(),r!==null&&!rn?(zp(r,a,f),Cr(r,a,f)):(We&&c&&Dp(a),a.flags|=1,mn(r,a,l,f),a.child)}function s0(r,a,l,c,f,g){return Wa(a),a.updateQueue=null,l=hT(a,c,l,f),cT(r),c=Fp(),r!==null&&!rn?(zp(r,a,g),Cr(r,a,g)):(We&&c&&Dp(a),a.flags|=1,mn(r,a,l,g),a.child)}function a0(r,a,l,c,f){if(Wa(a),a.stateNode===null){var g=rl,T=l.contextType;typeof T=="object"&&T!==null&&(g=Tn(T)),g=new l(c,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=tg,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=c,g.state=a.memoizedState,g.refs={},pg(a),T=l.contextType,g.context=typeof T=="object"&&T!==null?Tn(T):rl,g.state=a.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&(eg(a,l,T,c),g.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&tg.enqueueReplaceState(g,g.state,null),mc(a,c,g,f),fc(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(r===null){g=a.stateNode;var b=a.memoizedProps,S=$a(l,b);g.props=S;var V=g.context,Y=l.contextType;T=rl,typeof Y=="object"&&Y!==null&&(T=Tn(Y));var te=l.getDerivedStateFromProps;Y=typeof te=="function"||typeof g.getSnapshotBeforeUpdate=="function",b=a.pendingProps!==b,Y||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b||V!==T)&&KT(a,g,c,T),ks=!1;var H=a.memoizedState;g.state=H,mc(a,c,g,f),fc(),V=a.memoizedState,b||H!==V||ks?(typeof te=="function"&&(eg(a,l,te,c),V=a.memoizedState),(S=ks||GT(a,l,S,c,H,V,T))?(Y||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=V),g.props=c,g.state=V,g.context=T,c=S):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{g=a.stateNode,gg(r,a),T=a.memoizedProps,Y=$a(l,T),g.props=Y,te=a.pendingProps,H=g.context,V=l.contextType,S=rl,typeof V=="object"&&V!==null&&(S=Tn(V)),b=l.getDerivedStateFromProps,(V=typeof b=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==te||H!==S)&&KT(a,g,c,S),ks=!1,H=a.memoizedState,g.state=H,mc(a,c,g,f),fc();var W=a.memoizedState;T!==te||H!==W||ks||r!==null&&r.dependencies!==null&&$d(r.dependencies)?(typeof b=="function"&&(eg(a,l,b,c),W=a.memoizedState),(Y=ks||GT(a,l,Y,c,H,W,S)||r!==null&&r.dependencies!==null&&$d(r.dependencies))?(V||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,W,S),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,W,S)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===r.memoizedProps&&H===r.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&H===r.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=W),g.props=c,g.state=W,g.context=S,c=Y):(typeof g.componentDidUpdate!="function"||T===r.memoizedProps&&H===r.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&H===r.memoizedState||(a.flags|=1024),c=!1)}return g=c,cc(r,a),c=(a.flags&128)!==0,g||c?(g=a.stateNode,l=c&&typeof l.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,r!==null&&c?(a.child=qa(a,r.child,null,f),a.child=qa(a,null,l,f)):mn(r,a,l,f),a.memoizedState=g.state,r=a.child):r=Cr(r,a,f),r}function o0(r,a,l,c){return Zu(),a.flags|=256,mn(r,a,l,c),a.child}var rg={dehydrated:null,treeContext:null,retryLane:0};function sg(r){return{baseLanes:r,cachePool:uT()}}function ag(r,a,l){return r=r!==null?r.childLanes&~l:0,a&&(r|=Ti),r}function l0(r,a,l){var c=a.pendingProps,f=!1,g=(a.flags&128)!==0,T;if((T=g)||(T=r!==null&&r.memoizedState===null?!1:(Wt.current&2)!==0),T&&(f=!0,a.flags&=-129),T=(a.flags&32)!==0,a.flags&=-33,r===null){if(We){if(f?Ds(a):Ns(),We){var b=fn,S;if(S=b){e:{for(S=b,b=$i;S.nodeType!==8;){if(!b){b=null;break e}if(S=ki(S.nextSibling),S===null){b=null;break e}}b=S}b!==null?(a.memoizedState={dehydrated:b,treeContext:Ba!==null?{id:Ir,overflow:Ar}:null,retryLane:536870912},S=Ei(18,null,null,0),S.stateNode=b,S.return=a,a.child=S,xn=a,fn=null,S=!0):S=!1}S||za(a)}if(b=a.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?a.lanes=16:a.lanes=536870912,null;Rr(a)}return b=c.children,c=c.fallback,f?(Ns(),f=a.mode,b=lg({mode:"hidden",children:b},f),c=Xa(c,f,l,null),b.return=a,c.return=a,b.sibling=c,a.child=b,f=a.child,f.memoizedState=sg(l),f.childLanes=ag(r,T,l),a.memoizedState=rg,c):(Ds(a),og(a,b))}if(S=r.memoizedState,S!==null&&(b=S.dehydrated,b!==null)){if(g)a.flags&256?(Ds(a),a.flags&=-257,a=ug(r,a,l)):a.memoizedState!==null?(Ns(),a.child=r.child,a.flags|=128,a=null):(Ns(),f=c.fallback,b=a.mode,c=lg({mode:"visible",children:c.children},b),f=Xa(f,b,l,null),f.flags|=2,c.return=a,f.return=a,c.sibling=f,a.child=c,qa(a,r.child,null,l),c=a.child,c.memoizedState=sg(l),c.childLanes=ag(r,T,l),a.memoizedState=rg,a=f);else if(Ds(a),b.data==="$!"){if(T=b.nextSibling&&b.nextSibling.dataset,T)var V=T.dgst;T=V,c=Error(i(419)),c.stack="",c.digest=T,ec({value:c,source:null,stack:null}),a=ug(r,a,l)}else if(rn||hc(r,a,l,!1),T=(l&r.childLanes)!==0,rn||T){if(T=at,T!==null){if(c=l&-l,c&42)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=c&(T.suspendedLanes|l)?0:c,c!==0&&c!==S.retryLane)throw S.retryLane=c,Cs(r,c),kn(T,r,c),ZT}b.data==="$?"||Lg(),a=ug(r,a,l)}else b.data==="$?"?(a.flags|=128,a.child=r.child,a=WD.bind(null,r),b._reactRetry=a,a=null):(r=S.treeContext,fn=ki(b.nextSibling),xn=a,We=!0,Pi=null,$i=!1,r!==null&&(pi[gi++]=Ir,pi[gi++]=Ar,pi[gi++]=Ba,Ir=r.id,Ar=r.overflow,Ba=a),a=og(a,c.children),a.flags|=4096);return a}return f?(Ns(),f=c.fallback,b=a.mode,S=r.child,V=S.sibling,c=Fs(S,{mode:"hidden",children:c.children}),c.subtreeFlags=S.subtreeFlags&31457280,V!==null?f=Fs(V,f):(f=Xa(f,b,l,null),f.flags|=2),f.return=a,c.return=a,c.sibling=f,a.child=c,c=f,f=a.child,b=r.child.memoizedState,b===null?b=sg(l):(S=b.cachePool,S!==null?(V=Yt._currentValue,S=S.parent!==V?{parent:V,pool:V}:S):S=uT(),b={baseLanes:b.baseLanes|l,cachePool:S}),f.memoizedState=b,f.childLanes=ag(r,T,l),a.memoizedState=rg,c):(Ds(a),l=r.child,r=l.sibling,l=Fs(l,{mode:"visible",children:c.children}),l.return=a,l.sibling=null,r!==null&&(T=a.deletions,T===null?(a.deletions=[r],a.flags|=16):T.push(r)),a.child=l,a.memoizedState=null,l)}function og(r,a){return a=lg({mode:"visible",children:a},r.mode),a.return=r,r.child=a}function lg(r,a){return k0(r,a,0,null)}function ug(r,a,l){return qa(a,r.child,null,l),r=og(a,a.pendingProps.children),r.flags|=2,a.memoizedState=null,r}function u0(r,a,l){r.lanes|=a;var c=r.alternate;c!==null&&(c.lanes|=a),fg(r.return,a,l)}function cg(r,a,l,c,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:f}:(g.isBackwards=a,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=f)}function c0(r,a,l){var c=a.pendingProps,f=c.revealOrder,g=c.tail;if(mn(r,a,c.children,l),c=Wt.current,c&2)c=c&1|2,a.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=a.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&u0(r,l,a);else if(r.tag===19)u0(r,l,a);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break e;for(;r.sibling===null;){if(r.return===null||r.return===a)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(Ue(Wt,c),f){case"forwards":for(l=a.child,f=null;l!==null;)r=l.alternate,r!==null&&Vd(r)===null&&(f=l),l=l.sibling;l=f,l===null?(f=a.child,a.child=null):(f=l.sibling,l.sibling=null),cg(a,!1,f,l,g);break;case"backwards":for(l=null,f=a.child,a.child=null;f!==null;){if(r=f.alternate,r!==null&&Vd(r)===null){a.child=f;break}r=f.sibling,f.sibling=l,l=f,f=r}cg(a,!0,l,null,g);break;case"together":cg(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Cr(r,a,l){if(r!==null&&(a.dependencies=r.dependencies),zs|=a.lanes,!(l&a.childLanes))if(r!==null){if(hc(r,a,l,!1),(l&a.childLanes)===0)return null}else return null;if(r!==null&&a.child!==r.child)throw Error(i(153));if(a.child!==null){for(r=a.child,l=Fs(r,r.pendingProps),a.child=l,l.return=a;r.sibling!==null;)r=r.sibling,l=l.sibling=Fs(r,r.pendingProps),l.return=a;l.sibling=null}return a.child}function hg(r,a){return r.lanes&a?!0:(r=r.dependencies,!!(r!==null&&$d(r)))}function VD(r,a,l){switch(a.tag){case 3:$e(a,a.stateNode.containerInfo),xs(a,Yt,r.memoizedState.cache),Zu();break;case 27:case 5:Ci(a);break;case 4:$e(a,a.stateNode.containerInfo);break;case 10:xs(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(Ds(a),a.flags|=128,null):l&a.child.childLanes?l0(r,a,l):(Ds(a),r=Cr(r,a,l),r!==null?r.sibling:null);Ds(a);break;case 19:var f=(r.flags&128)!==0;if(c=(l&a.childLanes)!==0,c||(hc(r,a,l,!1),c=(l&a.childLanes)!==0),f){if(c)return c0(r,a,l);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ue(Wt,Wt.current),c)break;return null;case 22:case 23:return a.lanes=0,i0(r,a,l);case 24:xs(a,Yt,r.memoizedState.cache)}return Cr(r,a,l)}function h0(r,a,l){if(r!==null)if(r.memoizedProps!==a.pendingProps)rn=!0;else{if(!hg(r,l)&&!(a.flags&128))return rn=!1,VD(r,a,l);rn=!!(r.flags&131072)}else rn=!1,We&&a.flags&1048576&&WE(a,Nd,a.index);switch(a.lanes=0,a.tag){case 16:e:{r=a.pendingProps;var c=a.elementType,f=c._init;if(c=f(c._payload),a.type=c,typeof c=="function")Ag(c)?(r=$a(c,r),a.tag=1,a=a0(null,a,c,r,l)):(a.tag=0,a=ig(null,a,c,r,l));else{if(c!=null){if(f=c.$$typeof,f===M){a.tag=11,a=e0(null,a,c,r,l);break e}else if(f===ie){a.tag=14,a=t0(null,a,c,r,l);break e}}throw a=R(c)||c,Error(i(306,a,""))}}return a;case 0:return ig(r,a,a.type,a.pendingProps,l);case 1:return c=a.type,f=$a(c,a.pendingProps),a0(r,a,c,f,l);case 3:e:{if($e(a,a.stateNode.containerInfo),r===null)throw Error(i(387));var g=a.pendingProps;f=a.memoizedState,c=f.element,gg(r,a),mc(a,g,null,l);var T=a.memoizedState;if(g=T.cache,xs(a,Yt,g),g!==f.cache&&mg(a,[Yt],l,!0),fc(),g=T.element,f.isDehydrated)if(f={element:g,isDehydrated:!1,cache:T.cache},a.updateQueue.baseState=f,a.memoizedState=f,a.flags&256){a=o0(r,a,g,l);break e}else if(g!==c){c=mi(Error(i(424)),a),ec(c),a=o0(r,a,g,l);break e}else for(fn=ki(a.stateNode.containerInfo.firstChild),xn=a,We=!0,Pi=null,$i=!0,l=rT(a,null,g,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Zu(),g===c){a=Cr(r,a,l);break e}mn(r,a,g,l)}a=a.child}return a;case 26:return cc(r,a),r===null?(l=mw(a.type,null,a.pendingProps,null))?a.memoizedState=l:We||(l=a.type,r=a.pendingProps,c=cf(Zt.current).createElement(l),c[en]=a,c[Kt]=r,pn(c,l,r),vt(c),a.stateNode=c):a.memoizedState=mw(a.type,r.memoizedProps,a.pendingProps,r.memoizedState),null;case 27:return Ci(a),r===null&&We&&(c=a.stateNode=hw(a.type,a.pendingProps,Zt.current),xn=a,$i=!0,fn=ki(c.firstChild)),c=a.pendingProps.children,r!==null||We?mn(r,a,c,l):a.child=qa(a,null,c,l),cc(r,a),a.child;case 5:return r===null&&We&&((f=c=fn)&&(c=hN(c,a.type,a.pendingProps,$i),c!==null?(a.stateNode=c,xn=a,fn=ki(c.firstChild),$i=!1,f=!0):f=!1),f||za(a)),Ci(a),f=a.type,g=a.pendingProps,T=r!==null?r.memoizedProps:null,c=g.children,Xg(f,g)?c=null:T!==null&&Xg(f,T)&&(a.flags|=32),a.memoizedState!==null&&(f=Bp(r,a,CD,null,null,l),Dc._currentValue=f),cc(r,a),mn(r,a,c,l),a.child;case 6:return r===null&&We&&((r=l=fn)&&(l=dN(l,a.pendingProps,$i),l!==null?(a.stateNode=l,xn=a,fn=null,r=!0):r=!1),r||za(a)),null;case 13:return l0(r,a,l);case 4:return $e(a,a.stateNode.containerInfo),c=a.pendingProps,r===null?a.child=qa(a,null,c,l):mn(r,a,c,l),a.child;case 11:return e0(r,a,a.type,a.pendingProps,l);case 7:return mn(r,a,a.pendingProps,l),a.child;case 8:return mn(r,a,a.pendingProps.children,l),a.child;case 12:return mn(r,a,a.pendingProps.children,l),a.child;case 10:return c=a.pendingProps,xs(a,a.type,c.value),mn(r,a,c.children,l),a.child;case 9:return f=a.type._context,c=a.pendingProps.children,Wa(a),f=Tn(f),c=c(f),a.flags|=1,mn(r,a,c,l),a.child;case 14:return t0(r,a,a.type,a.pendingProps,l);case 15:return n0(r,a,a.type,a.pendingProps,l);case 19:return c0(r,a,l);case 22:return i0(r,a,l);case 24:return Wa(a),c=Tn(Yt),r===null?(f=Lp(),f===null&&(f=at,g=Vp(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=l),f=g),a.memoizedState={parent:c,cache:f},pg(a),xs(a,Yt,f)):(r.lanes&l&&(gg(r,a),mc(a,null,null,l),fc()),f=r.memoizedState,g=a.memoizedState,f.parent!==c?(f={parent:c,cache:c},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),xs(a,Yt,c)):(c=g.cache,xs(a,Yt,c),c!==f.cache&&mg(a,[Yt],l,!0))),mn(r,a,a.pendingProps.children,l),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}var dg=Le(null),Qa=null,Dr=null;function xs(r,a,l){Ue(dg,a._currentValue),a._currentValue=l}function Nr(r){r._currentValue=dg.current,nt(dg)}function fg(r,a,l){for(;r!==null;){var c=r.alternate;if((r.childLanes&a)!==a?(r.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),r===l)break;r=r.return}}function mg(r,a,l,c){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var g=f.dependencies;if(g!==null){var T=f.child;g=g.firstContext;e:for(;g!==null;){var b=g;g=f;for(var S=0;S<a.length;S++)if(b.context===a[S]){g.lanes|=l,b=g.alternate,b!==null&&(b.lanes|=l),fg(g.return,l,r),c||(T=null);break e}g=b.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(i(341));T.lanes|=l,g=T.alternate,g!==null&&(g.lanes|=l),fg(T,l,r),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===r){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function hc(r,a,l,c){r=null;for(var f=a,g=!1;f!==null;){if(!g){if(f.flags&524288)g=!0;else if(f.flags&262144)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var b=f.type;Xn(f.pendingProps.value,T.value)||(r!==null?r.push(b):r=[b])}}else if(f===Dn.current){if(T=f.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(Dc):r=[Dc])}f=f.return}r!==null&&mg(a,r,l,c),a.flags|=262144}function $d(r){for(r=r.firstContext;r!==null;){if(!Xn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Wa(r){Qa=r,Dr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Tn(r){return d0(Qa,r)}function Qd(r,a){return Qa===null&&Wa(r),d0(r,a)}function d0(r,a){var l=a._currentValue;if(a={context:a,memoizedValue:l,next:null},Dr===null){if(r===null)throw Error(i(308));Dr=a,r.dependencies={lanes:0,firstContext:a},r.flags|=524288}else Dr=Dr.next=a;return l}var ks=!1;function pg(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gg(r,a){r=r.updateQueue,a.updateQueue===r&&(a.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Vs(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Ms(r,a,l){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,Tt&2){var f=c.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a,a=Cd(r),$E(r,null,l),a}return Sd(r,c,a,l),Cd(r)}function dc(r,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194176)!==0)){var c=a.lanes;c&=r.pendingLanes,l|=c,a.lanes=l,ys(r,l)}}function _g(r,a){var l=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var f=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var T={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};g===null?f=g=T:g=g.next=T,l=l.next}while(l!==null);g===null?f=g=a:g=g.next=a}else f=g=a;l={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=a:r.next=a,l.lastBaseUpdate=a}var yg=!1;function fc(){if(yg){var r=cl;if(r!==null)throw r}}function mc(r,a,l,c){yg=!1;var f=r.updateQueue;ks=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var S=b,V=S.next;S.next=null,T===null?g=V:T.next=V,T=S;var Y=r.alternate;Y!==null&&(Y=Y.updateQueue,b=Y.lastBaseUpdate,b!==T&&(b===null?Y.firstBaseUpdate=V:b.next=V,Y.lastBaseUpdate=S))}if(g!==null){var te=f.baseState;T=0,Y=V=S=null,b=g;do{var H=b.lane&-536870913,W=H!==b.lane;if(W?(Ge&H)===H:(c&H)===H){H!==0&&H===ul&&(yg=!0),Y!==null&&(Y=Y.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Te=r,Ne=b;H=a;var Dt=l;switch(Ne.tag){case 1:if(Te=Ne.payload,typeof Te=="function"){te=Te.call(Dt,te,H);break e}te=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=Ne.payload,H=typeof Te=="function"?Te.call(Dt,te,H):Te,H==null)break e;te=N({},te,H);break e;case 2:ks=!0}}H=b.callback,H!==null&&(r.flags|=64,W&&(r.flags|=8192),W=f.callbacks,W===null?f.callbacks=[H]:W.push(H))}else W={lane:H,tag:b.tag,payload:b.payload,callback:b.callback,next:null},Y===null?(V=Y=W,S=te):Y=Y.next=W,T|=H;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;W=b,b=W.next,W.next=null,f.lastBaseUpdate=W,f.shared.pending=null}}while(!0);Y===null&&(S=te),f.baseState=S,f.firstBaseUpdate=V,f.lastBaseUpdate=Y,g===null&&(f.shared.lanes=0),zs|=T,r.lanes=T,r.memoizedState=te}}function f0(r,a){if(typeof r!="function")throw Error(i(191,r));r.call(a)}function m0(r,a){var l=r.callbacks;if(l!==null)for(r.callbacks=null,r=0;r<l.length;r++)f0(l[r],a)}function pc(r,a){try{var l=a.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&r)===r){c=void 0;var g=l.create,T=l.inst;c=g(),T.destroy=c}l=l.next}while(l!==f)}}catch(b){st(a,a.return,b)}}function Ls(r,a,l){try{var c=a.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var g=f.next;c=g;do{if((c.tag&r)===r){var T=c.inst,b=T.destroy;if(b!==void 0){T.destroy=void 0,f=a;var S=l;try{b()}catch(V){st(f,S,V)}}}c=c.next}while(c!==g)}}catch(V){st(a,a.return,V)}}function p0(r){var a=r.updateQueue;if(a!==null){var l=r.stateNode;try{m0(a,l)}catch(c){st(r,r.return,c)}}}function g0(r,a,l){l.props=$a(r.type,r.memoizedProps),l.state=r.memoizedState;try{l.componentWillUnmount()}catch(c){st(r,a,c)}}function Ya(r,a){try{var l=r.ref;if(l!==null){var c=r.stateNode;switch(r.tag){case 26:case 27:case 5:var f=c;break;default:f=c}typeof l=="function"?r.refCleanup=l(f):l.current=f}}catch(g){st(r,a,g)}}function Jn(r,a){var l=r.ref,c=r.refCleanup;if(l!==null)if(typeof c=="function")try{c()}catch(f){st(r,a,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(f){st(r,a,f)}else l.current=null}function _0(r){var a=r.type,l=r.memoizedProps,c=r.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":l.autoFocus&&c.focus();break e;case"img":l.src?c.src=l.src:l.srcSet&&(c.srcset=l.srcSet)}}catch(f){st(r,r.return,f)}}function y0(r,a,l){try{var c=r.stateNode;aN(c,r.type,l,a),c[Kt]=a}catch(f){st(r,r.return,f)}}function v0(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27||r.tag===4}function vg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||v0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==27&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Eg(r,a,l){var c=r.tag;if(c===5||c===6)r=r.stateNode,a?l.nodeType===8?l.parentNode.insertBefore(r,a):l.insertBefore(r,a):(l.nodeType===8?(a=l.parentNode,a.insertBefore(r,l)):(a=l,a.appendChild(r)),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=uf));else if(c!==4&&c!==27&&(r=r.child,r!==null))for(Eg(r,a,l),r=r.sibling;r!==null;)Eg(r,a,l),r=r.sibling}function Wd(r,a,l){var c=r.tag;if(c===5||c===6)r=r.stateNode,a?l.insertBefore(r,a):l.appendChild(r);else if(c!==4&&c!==27&&(r=r.child,r!==null))for(Wd(r,a,l),r=r.sibling;r!==null;)Wd(r,a,l),r=r.sibling}var Or=!1,St=!1,Tg=!1,E0=typeof WeakSet=="function"?WeakSet:Set,sn=null,T0=!1;function MD(r,a){if(r=r.containerInfo,Wg=gf,r=UE(r),bp(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var T=0,b=-1,S=-1,V=0,Y=0,te=r,H=null;t:for(;;){for(var W;te!==l||f!==0&&te.nodeType!==3||(b=T+f),te!==g||c!==0&&te.nodeType!==3||(S=T+c),te.nodeType===3&&(T+=te.nodeValue.length),(W=te.firstChild)!==null;)H=te,te=W;for(;;){if(te===r)break t;if(H===l&&++V===f&&(b=T),H===g&&++Y===c&&(S=T),(W=te.nextSibling)!==null)break;te=H,H=te.parentNode}te=W}l=b===-1||S===-1?null:{start:b,end:S}}else l=null}l=l||{start:0,end:0}}else l=null;for(Yg={focusedElem:r,selectionRange:l},gf=!1,sn=a;sn!==null;)if(a=sn,r=a.child,(a.subtreeFlags&1028)!==0&&r!==null)r.return=a,sn=r;else for(;sn!==null;){switch(a=sn,g=a.alternate,r=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if(r&1024&&g!==null){r=void 0,l=a,f=g.memoizedProps,g=g.memoizedState,c=l.stateNode;try{var Te=$a(l.type,f,l.elementType===l.type);r=c.getSnapshotBeforeUpdate(Te,g),c.__reactInternalSnapshotBeforeUpdate=r}catch(Ne){st(l,l.return,Ne)}}break;case 3:if(r&1024){if(r=a.stateNode.containerInfo,l=r.nodeType,l===9)e_(r);else if(l===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":e_(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(r&1024)throw Error(i(163))}if(r=a.sibling,r!==null){r.return=a.return,sn=r;break}sn=a.return}return Te=T0,T0=!1,Te}function w0(r,a,l){var c=l.flags;switch(l.tag){case 0:case 11:case 15:xr(r,l),c&4&&pc(5,l);break;case 1:if(xr(r,l),c&4)if(r=l.stateNode,a===null)try{r.componentDidMount()}catch(b){st(l,l.return,b)}else{var f=$a(l.type,a.memoizedProps);a=a.memoizedState;try{r.componentDidUpdate(f,a,r.__reactInternalSnapshotBeforeUpdate)}catch(b){st(l,l.return,b)}}c&64&&p0(l),c&512&&Ya(l,l.return);break;case 3:if(xr(r,l),c&64&&(c=l.updateQueue,c!==null)){if(r=null,l.child!==null)switch(l.child.tag){case 27:case 5:r=l.child.stateNode;break;case 1:r=l.child.stateNode}try{m0(c,r)}catch(b){st(l,l.return,b)}}break;case 26:xr(r,l),c&512&&Ya(l,l.return);break;case 27:case 5:xr(r,l),a===null&&c&4&&_0(l),c&512&&Ya(l,l.return);break;case 12:xr(r,l);break;case 13:xr(r,l),c&4&&A0(r,l);break;case 22:if(f=l.memoizedState!==null||Or,!f){a=a!==null&&a.memoizedState!==null||St;var g=Or,T=St;Or=f,(St=a)&&!T?Us(r,l,(l.subtreeFlags&8772)!==0):xr(r,l),Or=g,St=T}c&512&&(l.memoizedProps.mode==="manual"?Ya(l,l.return):Jn(l,l.return));break;default:xr(r,l)}}function b0(r){var a=r.alternate;a!==null&&(r.alternate=null,b0(a)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(a=r.stateNode,a!==null&&Ra(a)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var jt=null,Zn=!1;function Pr(r,a,l){for(l=l.child;l!==null;)I0(r,a,l),l=l.sibling}function I0(r,a,l){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(fs,l)}catch{}switch(l.tag){case 26:St||Jn(l,a),Pr(r,a,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:St||Jn(l,a);var c=jt,f=Zn;for(jt=l.stateNode,Pr(r,a,l),l=l.stateNode,a=l.attributes;a.length;)l.removeAttributeNode(a[0]);Ra(l),jt=c,Zn=f;break;case 5:St||Jn(l,a);case 6:f=jt;var g=Zn;if(jt=null,Pr(r,a,l),jt=f,Zn=g,jt!==null)if(Zn)try{r=jt,c=l.stateNode,r.nodeType===8?r.parentNode.removeChild(c):r.removeChild(c)}catch(T){st(l,a,T)}else try{jt.removeChild(l.stateNode)}catch(T){st(l,a,T)}break;case 18:jt!==null&&(Zn?(a=jt,l=l.stateNode,a.nodeType===8?Zg(a.parentNode,l):a.nodeType===1&&Zg(a,l),xc(a)):Zg(jt,l.stateNode));break;case 4:c=jt,f=Zn,jt=l.stateNode.containerInfo,Zn=!0,Pr(r,a,l),jt=c,Zn=f;break;case 0:case 11:case 14:case 15:St||Ls(2,l,a),St||Ls(4,l,a),Pr(r,a,l);break;case 1:St||(Jn(l,a),c=l.stateNode,typeof c.componentWillUnmount=="function"&&g0(l,a,c)),Pr(r,a,l);break;case 21:Pr(r,a,l);break;case 22:St||Jn(l,a),St=(c=St)||l.memoizedState!==null,Pr(r,a,l),St=c;break;default:Pr(r,a,l)}}function A0(r,a){if(a.memoizedState===null&&(r=a.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{xc(r)}catch(l){st(a,a.return,l)}}function LD(r){switch(r.tag){case 13:case 19:var a=r.stateNode;return a===null&&(a=r.stateNode=new E0),a;case 22:return r=r.stateNode,a=r._retryCache,a===null&&(a=r._retryCache=new E0),a;default:throw Error(i(435,r.tag))}}function wg(r,a){var l=LD(r);a.forEach(function(c){var f=YD.bind(null,r,c);l.has(c)||(l.add(c),c.then(f,f))})}function yi(r,a){var l=a.deletions;if(l!==null)for(var c=0;c<l.length;c++){var f=l[c],g=r,T=a,b=T;e:for(;b!==null;){switch(b.tag){case 27:case 5:jt=b.stateNode,Zn=!1;break e;case 3:jt=b.stateNode.containerInfo,Zn=!0;break e;case 4:jt=b.stateNode.containerInfo,Zn=!0;break e}b=b.return}if(jt===null)throw Error(i(160));I0(g,T,f),jt=null,Zn=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)R0(a,r),a=a.sibling}var xi=null;function R0(r,a){var l=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:yi(a,r),vi(r),c&4&&(Ls(3,r,r.return),pc(3,r),Ls(5,r,r.return));break;case 1:yi(a,r),vi(r),c&512&&(St||l===null||Jn(l,l.return)),c&64&&Or&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(l=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=l===null?c:l.concat(c))));break;case 26:var f=xi;if(yi(a,r),vi(r),c&512&&(St||l===null||Jn(l,l.return)),c&4){var g=l!==null?l.memoizedState:null;if(c=r.memoizedState,l===null)if(c===null)if(r.stateNode===null){e:{c=r.type,l=r.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":g=f.getElementsByTagName("title")[0],(!g||g[Es]||g[en]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(c),f.head.insertBefore(g,f.querySelector("head > title"))),pn(g,c,l),g[en]=r,vt(g),c=g;break e;case"link":var T=_w("link","href",f).get(c+(l.href||""));if(T){for(var b=0;b<T.length;b++)if(g=T[b],g.getAttribute("href")===(l.href==null?null:l.href)&&g.getAttribute("rel")===(l.rel==null?null:l.rel)&&g.getAttribute("title")===(l.title==null?null:l.title)&&g.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){T.splice(b,1);break t}}g=f.createElement(c),pn(g,c,l),f.head.appendChild(g);break;case"meta":if(T=_w("meta","content",f).get(c+(l.content||""))){for(b=0;b<T.length;b++)if(g=T[b],g.getAttribute("content")===(l.content==null?null:""+l.content)&&g.getAttribute("name")===(l.name==null?null:l.name)&&g.getAttribute("property")===(l.property==null?null:l.property)&&g.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&g.getAttribute("charset")===(l.charSet==null?null:l.charSet)){T.splice(b,1);break t}}g=f.createElement(c),pn(g,c,l),f.head.appendChild(g);break;default:throw Error(i(468,c))}g[en]=r,vt(g),c=g}r.stateNode=c}else yw(f,r.type,r.stateNode);else r.stateNode=gw(f,c,r.memoizedProps);else g!==c?(g===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):g.count--,c===null?yw(f,r.type,r.stateNode):gw(f,c,r.memoizedProps)):c===null&&r.stateNode!==null&&y0(r,r.memoizedProps,l.memoizedProps)}break;case 27:if(c&4&&r.alternate===null){f=r.stateNode,g=r.memoizedProps;try{for(var S=f.firstChild;S;){var V=S.nextSibling,Y=S.nodeName;S[Es]||Y==="HEAD"||Y==="BODY"||Y==="SCRIPT"||Y==="STYLE"||Y==="LINK"&&S.rel.toLowerCase()==="stylesheet"||f.removeChild(S),S=V}for(var te=r.type,H=f.attributes;H.length;)f.removeAttributeNode(H[0]);pn(f,te,g),f[en]=r,f[Kt]=g}catch(Te){st(r,r.return,Te)}}case 5:if(yi(a,r),vi(r),c&512&&(St||l===null||Jn(l,l.return)),r.flags&32){f=r.stateNode;try{ui(f,"")}catch(Te){st(r,r.return,Te)}}c&4&&r.stateNode!=null&&(f=r.memoizedProps,y0(r,f,l!==null?l.memoizedProps:f)),c&1024&&(Tg=!0);break;case 6:if(yi(a,r),vi(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,l=r.stateNode;try{l.nodeValue=c}catch(Te){st(r,r.return,Te)}}break;case 3:if(ff=null,f=xi,xi=hf(a.containerInfo),yi(a,r),xi=f,vi(r),c&4&&l!==null&&l.memoizedState.isDehydrated)try{xc(a.containerInfo)}catch(Te){st(r,r.return,Te)}Tg&&(Tg=!1,S0(r));break;case 4:c=xi,xi=hf(r.stateNode.containerInfo),yi(a,r),vi(r),xi=c;break;case 12:yi(a,r),vi(r);break;case 13:yi(a,r),vi(r),r.child.flags&8192&&r.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Og=hn()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,wg(r,c)));break;case 22:if(c&512&&(St||l===null||Jn(l,l.return)),S=r.memoizedState!==null,V=l!==null&&l.memoizedState!==null,Y=Or,te=St,Or=Y||S,St=te||V,yi(a,r),St=te,Or=Y,vi(r),a=r.stateNode,a._current=r,a._visibility&=-3,a._visibility|=a._pendingVisibility&2,c&8192&&(a._visibility=S?a._visibility&-2:a._visibility|1,S&&(a=Or||St,l===null||V||a||ml(r)),r.memoizedProps===null||r.memoizedProps.mode!=="manual"))e:for(l=null,a=r;;){if(a.tag===5||a.tag===26||a.tag===27){if(l===null){V=l=a;try{if(f=V.stateNode,S)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=V.stateNode,b=V.memoizedProps.style;var W=b!=null&&b.hasOwnProperty("display")?b.display:null;T.style.display=W==null||typeof W=="boolean"?"":(""+W).trim()}}catch(Te){st(V,V.return,Te)}}}else if(a.tag===6){if(l===null){V=a;try{V.stateNode.nodeValue=S?"":V.memoizedProps}catch(Te){st(V,V.return,Te)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===r)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break e;for(;a.sibling===null;){if(a.return===null||a.return===r)break e;l===a&&(l=null),a=a.return}l===a&&(l=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=r.updateQueue,c!==null&&(l=c.retryQueue,l!==null&&(c.retryQueue=null,wg(r,l))));break;case 19:yi(a,r),vi(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,wg(r,c)));break;case 21:break;default:yi(a,r),vi(r)}}function vi(r){var a=r.flags;if(a&2){try{if(r.tag!==27){e:{for(var l=r.return;l!==null;){if(v0(l)){var c=l;break e}l=l.return}throw Error(i(160))}switch(c.tag){case 27:var f=c.stateNode,g=vg(r);Wd(r,g,f);break;case 5:var T=c.stateNode;c.flags&32&&(ui(T,""),c.flags&=-33);var b=vg(r);Wd(r,b,T);break;case 3:case 4:var S=c.stateNode.containerInfo,V=vg(r);Eg(r,V,S);break;default:throw Error(i(161))}}}catch(Y){st(r,r.return,Y)}r.flags&=-3}a&4096&&(r.flags&=-4097)}function S0(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var a=r;S0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),r=r.sibling}}function xr(r,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)w0(r,a.alternate,a),a=a.sibling}function ml(r){for(r=r.child;r!==null;){var a=r;switch(a.tag){case 0:case 11:case 14:case 15:Ls(4,a,a.return),ml(a);break;case 1:Jn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&g0(a,a.return,l),ml(a);break;case 26:case 27:case 5:Jn(a,a.return),ml(a);break;case 22:Jn(a,a.return),a.memoizedState===null&&ml(a);break;default:ml(a)}r=r.sibling}}function Us(r,a,l){for(l=l&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,f=r,g=a,T=g.flags;switch(g.tag){case 0:case 11:case 15:Us(f,g,l),pc(4,g);break;case 1:if(Us(f,g,l),c=g,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(V){st(c,c.return,V)}if(c=g,f=c.updateQueue,f!==null){var b=c.stateNode;try{var S=f.shared.hiddenCallbacks;if(S!==null)for(f.shared.hiddenCallbacks=null,f=0;f<S.length;f++)f0(S[f],b)}catch(V){st(c,c.return,V)}}l&&T&64&&p0(g),Ya(g,g.return);break;case 26:case 27:case 5:Us(f,g,l),l&&c===null&&T&4&&_0(g),Ya(g,g.return);break;case 12:Us(f,g,l);break;case 13:Us(f,g,l),l&&T&4&&A0(f,g);break;case 22:g.memoizedState===null&&Us(f,g,l),Ya(g,g.return);break;default:Us(f,g,l)}a=a.sibling}}function bg(r,a){var l=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(r!=null&&r.refCount++,l!=null&&sc(l))}function Ig(r,a){r=null,a.alternate!==null&&(r=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==r&&(a.refCount++,r!=null&&sc(r))}function Bs(r,a,l,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)C0(r,a,l,c),a=a.sibling}function C0(r,a,l,c){var f=a.flags;switch(a.tag){case 0:case 11:case 15:Bs(r,a,l,c),f&2048&&pc(9,a);break;case 3:Bs(r,a,l,c),f&2048&&(r=null,a.alternate!==null&&(r=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==r&&(a.refCount++,r!=null&&sc(r)));break;case 12:if(f&2048){Bs(r,a,l,c),r=a.stateNode;try{var g=a.memoizedProps,T=g.id,b=g.onPostCommit;typeof b=="function"&&b(T,a.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(S){st(a,a.return,S)}}else Bs(r,a,l,c);break;case 23:break;case 22:g=a.stateNode,a.memoizedState!==null?g._visibility&4?Bs(r,a,l,c):gc(r,a):g._visibility&4?Bs(r,a,l,c):(g._visibility|=4,pl(r,a,l,c,(a.subtreeFlags&10256)!==0)),f&2048&&bg(a.alternate,a);break;case 24:Bs(r,a,l,c),f&2048&&Ig(a.alternate,a);break;default:Bs(r,a,l,c)}}function pl(r,a,l,c,f){for(f=f&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var g=r,T=a,b=l,S=c,V=T.flags;switch(T.tag){case 0:case 11:case 15:pl(g,T,b,S,f),pc(8,T);break;case 23:break;case 22:var Y=T.stateNode;T.memoizedState!==null?Y._visibility&4?pl(g,T,b,S,f):gc(g,T):(Y._visibility|=4,pl(g,T,b,S,f)),f&&V&2048&&bg(T.alternate,T);break;case 24:pl(g,T,b,S,f),f&&V&2048&&Ig(T.alternate,T);break;default:pl(g,T,b,S,f)}a=a.sibling}}function gc(r,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var l=r,c=a,f=c.flags;switch(c.tag){case 22:gc(l,c),f&2048&&bg(c.alternate,c);break;case 24:gc(l,c),f&2048&&Ig(c.alternate,c);break;default:gc(l,c)}a=a.sibling}}var _c=8192;function gl(r){if(r.subtreeFlags&_c)for(r=r.child;r!==null;)D0(r),r=r.sibling}function D0(r){switch(r.tag){case 26:gl(r),r.flags&_c&&r.memoizedState!==null&&AN(xi,r.memoizedState,r.memoizedProps);break;case 5:gl(r);break;case 3:case 4:var a=xi;xi=hf(r.stateNode.containerInfo),gl(r),xi=a;break;case 22:r.memoizedState===null&&(a=r.alternate,a!==null&&a.memoizedState!==null?(a=_c,_c=16777216,gl(r),_c=a):gl(r));break;default:gl(r)}}function N0(r){var a=r.alternate;if(a!==null&&(r=a.child,r!==null)){a.child=null;do a=r.sibling,r.sibling=null,r=a;while(r!==null)}}function yc(r){var a=r.deletions;if(r.flags&16){if(a!==null)for(var l=0;l<a.length;l++){var c=a[l];sn=c,P0(c,r)}N0(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)O0(r),r=r.sibling}function O0(r){switch(r.tag){case 0:case 11:case 15:yc(r),r.flags&2048&&Ls(9,r,r.return);break;case 3:yc(r);break;case 12:yc(r);break;case 22:var a=r.stateNode;r.memoizedState!==null&&a._visibility&4&&(r.return===null||r.return.tag!==13)?(a._visibility&=-5,Yd(r)):yc(r);break;default:yc(r)}}function Yd(r){var a=r.deletions;if(r.flags&16){if(a!==null)for(var l=0;l<a.length;l++){var c=a[l];sn=c,P0(c,r)}N0(r)}for(r=r.child;r!==null;){switch(a=r,a.tag){case 0:case 11:case 15:Ls(8,a,a.return),Yd(a);break;case 22:l=a.stateNode,l._visibility&4&&(l._visibility&=-5,Yd(a));break;default:Yd(a)}r=r.sibling}}function P0(r,a){for(;sn!==null;){var l=sn;switch(l.tag){case 0:case 11:case 15:Ls(8,l,a);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var c=l.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:sc(l.memoizedState.cache)}if(c=l.child,c!==null)c.return=l,sn=c;else e:for(l=r;sn!==null;){c=sn;var f=c.sibling,g=c.return;if(b0(c),c===l){sn=null;break e}if(f!==null){f.return=g,sn=f;break e}sn=g}}}function UD(r,a,l,c){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(r,a,l,c){return new UD(r,a,l,c)}function Ag(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Fs(r,a){var l=r.alternate;return l===null?(l=Ei(r.tag,a,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=a,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&31457280,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,a=r.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l.refCleanup=r.refCleanup,l}function x0(r,a){r.flags&=31457282;var l=r.alternate;return l===null?(r.childLanes=0,r.lanes=a,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=l.childLanes,r.lanes=l.lanes,r.child=l.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=l.memoizedProps,r.memoizedState=l.memoizedState,r.updateQueue=l.updateQueue,r.type=l.type,a=l.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),r}function Xd(r,a,l,c,f,g){var T=0;if(c=r,typeof r=="function")Ag(r)&&(T=1);else if(typeof r=="string")T=bN(r,l,Ft.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case m:return Xa(l.children,f,g,a);case p:T=8,f|=24;break;case y:return r=Ei(12,l,a,f|2),r.elementType=y,r.lanes=g,r;case q:return r=Ei(13,l,a,f),r.elementType=q,r.lanes=g,r;case j:return r=Ei(19,l,a,f),r.elementType=j,r.lanes=g,r;case J:return k0(l,f,g,a);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case v:case C:T=10;break e;case w:T=9;break e;case M:T=11;break e;case ie:T=14;break e;case ae:T=16,c=null;break e}T=29,l=Error(i(130,r===null?"null":typeof r,"")),c=null}return a=Ei(T,l,a,f),a.elementType=r,a.type=c,a.lanes=g,a}function Xa(r,a,l,c){return r=Ei(7,r,c,a),r.lanes=l,r}function k0(r,a,l,c){r=Ei(22,r,c,a),r.elementType=J,r.lanes=l;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=f._current;if(g===null)throw Error(i(456));if(!(f._pendingVisibility&2)){var T=Cs(g,2);T!==null&&(f._pendingVisibility|=2,kn(T,g,2))}},attach:function(){var g=f._current;if(g===null)throw Error(i(456));if(f._pendingVisibility&2){var T=Cs(g,2);T!==null&&(f._pendingVisibility&=-3,kn(T,g,2))}}};return r.stateNode=f,r}function Rg(r,a,l){return r=Ei(6,r,null,a),r.lanes=l,r}function Sg(r,a,l){return a=Ei(4,r.children!==null?r.children:[],r.key,a),a.lanes=l,a.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},a}function kr(r){r.flags|=4}function V0(r,a){if(a.type!=="stylesheet"||a.state.loading&4)r.flags&=-16777217;else if(r.flags|=16777216,!vw(a)){if(a=_i.current,a!==null&&((Ge&4194176)===Ge?Qi!==null:(Ge&62914560)!==Ge&&!(Ge&536870912)||a!==Qi))throw nc=Pp,JE;r.flags|=8192}}function Jd(r,a){a!==null&&(r.flags|=4),r.flags&16384&&(a=r.tag!==22?gs():536870912,r.lanes|=a,yl|=a)}function vc(r,a){if(!We)switch(r.tailMode){case"hidden":a=r.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?a||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Et(r){var a=r.alternate!==null&&r.alternate.child===r.child,l=0,c=0;if(a)for(var f=r.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags&31457280,c|=f.flags&31457280,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=c,r.childLanes=l,a}function BD(r,a,l){var c=a.pendingProps;switch(Np(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(a),null;case 1:return Et(a),null;case 3:return l=a.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),Nr(Yt),qn(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(r===null||r.child===null)&&(Ju(a)?kr(a):r===null||r.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,Pi!==null&&(Vg(Pi),Pi=null))),Et(a),null;case 26:return l=a.memoizedState,r===null?(kr(a),l!==null?(Et(a),V0(a,l)):(Et(a),a.flags&=-16777217)):l?l!==r.memoizedState?(kr(a),Et(a),V0(a,l)):(Et(a),a.flags&=-16777217):(r.memoizedProps!==c&&kr(a),Et(a),a.flags&=-16777217),null;case 27:cs(a),l=Zt.current;var f=a.type;if(r!==null&&a.stateNode!=null)r.memoizedProps!==c&&kr(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return Et(a),null}r=Ft.current,Ju(a)?YE(a):(r=hw(f,c,l),a.stateNode=r,kr(a))}return Et(a),null;case 5:if(cs(a),l=a.type,r!==null&&a.stateNode!=null)r.memoizedProps!==c&&kr(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return Et(a),null}if(r=Ft.current,Ju(a))YE(a);else{switch(f=cf(Zt.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?f.createElement(l,{is:c.is}):f.createElement(l)}}r[en]=a,r[Kt]=c;e:for(f=a.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===a)break e;for(;f.sibling===null;){if(f.return===null||f.return===a)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}a.stateNode=r;e:switch(pn(r,l,c),l){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&kr(a)}}return Et(a),a.flags&=-16777217,null;case 6:if(r&&a.stateNode!=null)r.memoizedProps!==c&&kr(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(i(166));if(r=Zt.current,Ju(a)){if(r=a.stateNode,l=a.memoizedProps,c=null,f=xn,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}r[en]=a,r=!!(r.nodeValue===l||c!==null&&c.suppressHydrationWarning===!0||sw(r.nodeValue,l)),r||za(a)}else r=cf(r).createTextNode(c),r[en]=a,a.stateNode=r}return Et(a),null;case 13:if(c=a.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=Ju(a),c!==null&&c.dehydrated!==null){if(r===null){if(!f)throw Error(i(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[en]=a}else Zu(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;Et(a),f=!1}else Pi!==null&&(Vg(Pi),Pi=null),f=!0;if(!f)return a.flags&256?(Rr(a),a):(Rr(a),null)}if(Rr(a),a.flags&128)return a.lanes=l,a;if(l=c!==null,r=r!==null&&r.memoizedState!==null,l){c=a.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==f&&(c.flags|=2048)}return l!==r&&l&&(a.child.flags|=8192),Jd(a,a.updateQueue),Et(a),null;case 4:return qn(),r===null&&Kg(a.stateNode.containerInfo),Et(a),null;case 10:return Nr(a.type),Et(a),null;case 19:if(nt(Wt),f=a.memoizedState,f===null)return Et(a),null;if(c=(a.flags&128)!==0,g=f.rendering,g===null)if(c)vc(f,!1);else{if(Ct!==0||r!==null&&r.flags&128)for(r=a.child;r!==null;){if(g=Vd(r),g!==null){for(a.flags|=128,vc(f,!1),r=g.updateQueue,a.updateQueue=r,Jd(a,r),a.subtreeFlags=0,r=l,l=a.child;l!==null;)x0(l,r),l=l.sibling;return Ue(Wt,Wt.current&1|2),a.child}r=r.sibling}f.tail!==null&&hn()>Zd&&(a.flags|=128,c=!0,vc(f,!1),a.lanes=4194304)}else{if(!c)if(r=Vd(g),r!==null){if(a.flags|=128,c=!0,r=r.updateQueue,a.updateQueue=r,Jd(a,r),vc(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!We)return Et(a),null}else 2*hn()-f.renderingStartTime>Zd&&l!==536870912&&(a.flags|=128,c=!0,vc(f,!1),a.lanes=4194304);f.isBackwards?(g.sibling=a.child,a.child=g):(r=f.last,r!==null?r.sibling=g:a.child=g,f.last=g)}return f.tail!==null?(a=f.tail,f.rendering=a,f.tail=a.sibling,f.renderingStartTime=hn(),a.sibling=null,r=Wt.current,Ue(Wt,c?r&1|2:r&1),a):(Et(a),null);case 22:case 23:return Rr(a),kp(),c=a.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?l&536870912&&!(a.flags&128)&&(Et(a),a.subtreeFlags&6&&(a.flags|=8192)):Et(a),l=a.updateQueue,l!==null&&Jd(a,l.retryQueue),l=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==l&&(a.flags|=2048),r!==null&&nt(ja),null;case 24:return l=null,r!==null&&(l=r.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Nr(Yt),Et(a),null;case 25:return null}throw Error(i(156,a.tag))}function FD(r,a){switch(Np(a),a.tag){case 1:return r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 3:return Nr(Yt),qn(),r=a.flags,r&65536&&!(r&128)?(a.flags=r&-65537|128,a):null;case 26:case 27:case 5:return cs(a),null;case 13:if(Rr(a),r=a.memoizedState,r!==null&&r.dehydrated!==null){if(a.alternate===null)throw Error(i(340));Zu()}return r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 19:return nt(Wt),null;case 4:return qn(),null;case 10:return Nr(a.type),null;case 22:case 23:return Rr(a),kp(),r!==null&&nt(ja),r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 24:return Nr(Yt),null;case 25:return null;default:return null}}function M0(r,a){switch(Np(a),a.tag){case 3:Nr(Yt),qn();break;case 26:case 27:case 5:cs(a);break;case 4:qn();break;case 13:Rr(a);break;case 19:nt(Wt);break;case 10:Nr(a.type);break;case 22:case 23:Rr(a),kp(),r!==null&&nt(ja);break;case 24:Nr(Yt)}}var zD={getCacheForType:function(r){var a=Tn(Yt),l=a.data.get(r);return l===void 0&&(l=r(),a.data.set(r,l)),l}},qD=typeof WeakMap=="function"?WeakMap:Map,Tt=0,at=null,Ve=null,Ge=0,ot=0,ei=null,Vr=!1,_l=!1,Cg=!1,Mr=0,Ct=0,zs=0,Ja=0,Dg=0,Ti=0,yl=0,Ec=null,Yi=null,Ng=!1,Og=0,Zd=1/0,ef=null,qs=null,tf=!1,Za=null,Tc=0,Pg=0,xg=null,wc=0,kg=null;function ti(){if(Tt&2&&Ge!==0)return Ge&-Ge;if(A.T!==null){var r=ul;return r!==0?r:qg()}return od()}function L0(){Ti===0&&(Ti=!(Ge&536870912)||We?ku():536870912);var r=_i.current;return r!==null&&(r.flags|=32),Ti}function kn(r,a,l){(r===at&&ot===2||r.cancelPendingCommit!==null)&&(vl(r,0),Lr(r,Ge,Ti,!1)),Vt(r,l),(!(Tt&2)||r!==at)&&(r===at&&(!(Tt&2)&&(Ja|=l),Ct===4&&Lr(r,Ge,Ti,!1)),Xi(r))}function U0(r,a,l){if(Tt&6)throw Error(i(327));var c=!l&&(a&60)===0&&(a&r.expiredLanes)===0||ps(r,a),f=c?GD(r,a):Ug(r,a,!0),g=c;do{if(f===0){_l&&!c&&Lr(r,a,0,!1);break}else if(f===6)Lr(r,a,0,!Vr);else{if(l=r.current.alternate,g&&!jD(l)){f=Ug(r,a,!1),g=!1;continue}if(f===2){if(g=a,r.errorRecoveryDisabledLanes&g)var T=0;else T=r.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){a=T;e:{var b=r;f=Ec;var S=b.current.memoizedState.isDehydrated;if(S&&(vl(b,T).flags|=256),T=Ug(b,T,!1),T!==2){if(Cg&&!S){b.errorRecoveryDisabledLanes|=g,Ja|=g,f=4;break e}g=Yi,Yi=f,g!==null&&Vg(g)}f=T}if(g=!1,f!==2)continue}}if(f===1){vl(r,0),Lr(r,a,0,!0);break}e:{switch(c=r,f){case 0:case 1:throw Error(i(345));case 4:if((a&4194176)===a){Lr(c,a,Ti,!Vr);break e}break;case 2:Yi=null;break;case 3:case 5:break;default:throw Error(i(329))}if(c.finishedWork=l,c.finishedLanes=a,(a&62914560)===a&&(g=Og+300-hn(),10<g)){if(Lr(c,a,Ti,!Vr),oi(c,0)!==0)break e;c.timeoutHandle=lw(B0.bind(null,c,l,Yi,ef,Ng,a,Ti,Ja,yl,Vr,2,-0,0),g);break e}B0(c,l,Yi,ef,Ng,a,Ti,Ja,yl,Vr,0,-0,0)}}break}while(!0);Xi(r)}function Vg(r){Yi===null?Yi=r:Yi.push.apply(Yi,r)}function B0(r,a,l,c,f,g,T,b,S,V,Y,te,H){var W=a.subtreeFlags;if((W&8192||(W&16785408)===16785408)&&(Cc={stylesheets:null,count:0,unsuspend:IN},D0(a),a=RN(),a!==null)){r.cancelPendingCommit=a(K0.bind(null,r,l,c,f,T,b,S,1,te,H)),Lr(r,g,T,!V);return}K0(r,l,c,f,T,b,S,Y,te,H)}function jD(r){for(var a=r;;){var l=a.tag;if((l===0||l===11||l===15)&&a.flags&16384&&(l=a.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var c=0;c<l.length;c++){var f=l[c],g=f.getSnapshot;f=f.value;try{if(!Xn(g(),f))return!1}catch{return!1}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Lr(r,a,l,c){a&=~Dg,a&=~Ja,r.suspendedLanes|=a,r.pingedLanes&=~a,c&&(r.warmLanes|=a),c=r.expirationTimes;for(var f=a;0<f;){var g=31-Nn(f),T=1<<g;c[g]=-1,f&=~T}l!==0&&_s(r,l,a)}function nf(){return Tt&6?!0:(bc(0),!1)}function Mg(){if(Ve!==null){if(ot===0)var r=Ve.return;else r=Ve,Dr=Qa=null,qp(r),ol=null,ic=0,r=Ve;for(;r!==null;)M0(r.alternate,r),r=r.return;Ve=null}}function vl(r,a){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;l!==-1&&(r.timeoutHandle=-1,lN(l)),l=r.cancelPendingCommit,l!==null&&(r.cancelPendingCommit=null,l()),Mg(),at=r,Ve=l=Fs(r.current,null),Ge=a,ot=0,ei=null,Vr=!1,_l=ps(r,a),Cg=!1,yl=Ti=Dg=Ja=zs=Ct=0,Yi=Ec=null,Ng=!1,a&8&&(a|=a&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=a;0<c;){var f=31-Nn(c),g=1<<f;a|=r[f],c&=~g}return Mr=a,Rd(),l}function F0(r,a){xe=null,A.H=Wi,a===tc?(a=tT(),ot=3):a===JE?(a=tT(),ot=4):ot=a===ZT?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ei=a,Ve===null&&(Ct=1,Kd(r,mi(a,r.current)))}function z0(){var r=A.H;return A.H=Wi,r===null?Wi:r}function q0(){var r=A.A;return A.A=zD,r}function Lg(){Ct=4,Vr||(Ge&4194176)!==Ge&&_i.current!==null||(_l=!0),!(zs&134217727)&&!(Ja&134217727)||at===null||Lr(at,Ge,Ti,!1)}function Ug(r,a,l){var c=Tt;Tt|=2;var f=z0(),g=q0();(at!==r||Ge!==a)&&(ef=null,vl(r,a)),a=!1;var T=Ct;e:do try{if(ot!==0&&Ve!==null){var b=Ve,S=ei;switch(ot){case 8:Mg(),T=6;break e;case 3:case 2:case 6:_i.current===null&&(a=!0);var V=ot;if(ot=0,ei=null,El(r,b,S,V),l&&_l){T=0;break e}break;default:V=ot,ot=0,ei=null,El(r,b,S,V)}}HD(),T=Ct;break}catch(Y){F0(r,Y)}while(!0);return a&&r.shellSuspendCounter++,Dr=Qa=null,Tt=c,A.H=f,A.A=g,Ve===null&&(at=null,Ge=0,Rd()),T}function HD(){for(;Ve!==null;)j0(Ve)}function GD(r,a){var l=Tt;Tt|=2;var c=z0(),f=q0();at!==r||Ge!==a?(ef=null,Zd=hn()+500,vl(r,a)):_l=ps(r,a);e:do try{if(ot!==0&&Ve!==null){a=Ve;var g=ei;t:switch(ot){case 1:ot=0,ei=null,El(r,a,g,1);break;case 2:if(ZE(g)){ot=0,ei=null,H0(a);break}a=function(){ot===2&&at===r&&(ot=7),Xi(r)},g.then(a,a);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:ZE(g)?(ot=0,ei=null,H0(a)):(ot=0,ei=null,El(r,a,g,7));break;case 5:var T=null;switch(Ve.tag){case 26:T=Ve.memoizedState;case 5:case 27:var b=Ve;if(!T||vw(T)){ot=0,ei=null;var S=b.sibling;if(S!==null)Ve=S;else{var V=b.return;V!==null?(Ve=V,rf(V)):Ve=null}break t}}ot=0,ei=null,El(r,a,g,5);break;case 6:ot=0,ei=null,El(r,a,g,6);break;case 8:Mg(),Ct=6;break e;default:throw Error(i(462))}}KD();break}catch(Y){F0(r,Y)}while(!0);return Dr=Qa=null,A.H=c,A.A=f,Tt=l,Ve!==null?0:(at=null,Ge=0,Rd(),Ct)}function KD(){for(;Ve!==null&&!Nu();)j0(Ve)}function j0(r){var a=h0(r.alternate,r,Mr);r.memoizedProps=r.pendingProps,a===null?rf(r):Ve=a}function H0(r){var a=r,l=a.alternate;switch(a.tag){case 15:case 0:a=s0(l,a,a.pendingProps,a.type,void 0,Ge);break;case 11:a=s0(l,a,a.pendingProps,a.type.render,a.ref,Ge);break;case 5:qp(a);default:M0(l,a),a=Ve=x0(a,Mr),a=h0(l,a,Mr)}r.memoizedProps=r.pendingProps,a===null?rf(r):Ve=a}function El(r,a,l,c){Dr=Qa=null,qp(a),ol=null,ic=0;var f=a.return;try{if(kD(r,f,a,l,Ge)){Ct=1,Kd(r,mi(l,r.current)),Ve=null;return}}catch(g){if(f!==null)throw Ve=f,g;Ct=1,Kd(r,mi(l,r.current)),Ve=null;return}a.flags&32768?(We||c===1?r=!0:_l||Ge&536870912?r=!1:(Vr=r=!0,(c===2||c===3||c===6)&&(c=_i.current,c!==null&&c.tag===13&&(c.flags|=16384))),G0(a,r)):rf(a)}function rf(r){var a=r;do{if(a.flags&32768){G0(a,Vr);return}r=a.return;var l=BD(a.alternate,a,Mr);if(l!==null){Ve=l;return}if(a=a.sibling,a!==null){Ve=a;return}Ve=a=r}while(a!==null);Ct===0&&(Ct=5)}function G0(r,a){do{var l=FD(r.alternate,r);if(l!==null){l.flags&=32767,Ve=l;return}if(l=r.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!a&&(r=r.sibling,r!==null)){Ve=r;return}Ve=r=l}while(r!==null);Ct=6,Ve=null}function K0(r,a,l,c,f,g,T,b,S,V){var Y=A.T,te=de.p;try{de.p=2,A.T=null,$D(r,a,l,c,te,f,g,T,b,S,V)}finally{A.T=Y,de.p=te}}function $D(r,a,l,c,f,g,T,b){do Tl();while(Za!==null);if(Tt&6)throw Error(i(327));var S=r.finishedWork;if(c=r.finishedLanes,S===null)return null;if(r.finishedWork=null,r.finishedLanes=0,S===r.current)throw Error(i(177));r.callbackNode=null,r.callbackPriority=0,r.cancelPendingCommit=null;var V=S.lanes|S.childLanes;if(V|=Sp,sd(r,c,V,g,T,b),r===at&&(Ve=at=null,Ge=0),!(S.subtreeFlags&10256)&&!(S.flags&10256)||tf||(tf=!0,Pg=V,xg=l,XD(ai,function(){return Tl(),null})),l=(S.flags&15990)!==0,S.subtreeFlags&15990||l?(l=A.T,A.T=null,g=de.p,de.p=2,T=Tt,Tt|=4,MD(r,S),R0(S,r),_D(Yg,r.containerInfo),gf=!!Wg,Yg=Wg=null,r.current=S,w0(r,S.alternate,S),ba(),Tt=T,de.p=g,A.T=l):r.current=S,tf?(tf=!1,Za=r,Tc=c):$0(r,V),V=r.pendingLanes,V===0&&(qs=null),Pu(S.stateNode),Xi(r),a!==null)for(f=r.onRecoverableError,S=0;S<a.length;S++)V=a[S],f(V.value,{componentStack:V.stack});return Tc&3&&Tl(),V=r.pendingLanes,c&4194218&&V&42?r===kg?wc++:(wc=0,kg=r):wc=0,bc(0),null}function $0(r,a){(r.pooledCacheLanes&=a)===0&&(a=r.pooledCache,a!=null&&(r.pooledCache=null,sc(a)))}function Tl(){if(Za!==null){var r=Za,a=Pg;Pg=0;var l=ad(Tc),c=A.T,f=de.p;try{if(de.p=32>l?32:l,A.T=null,Za===null)var g=!1;else{l=xg,xg=null;var T=Za,b=Tc;if(Za=null,Tc=0,Tt&6)throw Error(i(331));var S=Tt;if(Tt|=4,O0(T.current),C0(T,T.current,b,l),Tt=S,bc(0,!1),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(fs,T)}catch{}g=!0}return g}finally{de.p=f,A.T=c,$0(r,a)}}return!1}function Q0(r,a,l){a=mi(l,a),a=ng(r.stateNode,a,2),r=Ms(r,a,2),r!==null&&(Vt(r,2),Xi(r))}function st(r,a,l){if(r.tag===3)Q0(r,r,l);else for(;a!==null;){if(a.tag===3){Q0(a,r,l);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(qs===null||!qs.has(c))){r=mi(l,r),l=XT(2),c=Ms(a,l,2),c!==null&&(JT(l,c,a,r),Vt(c,2),Xi(c));break}}a=a.return}}function Bg(r,a,l){var c=r.pingCache;if(c===null){c=r.pingCache=new qD;var f=new Set;c.set(a,f)}else f=c.get(a),f===void 0&&(f=new Set,c.set(a,f));f.has(l)||(Cg=!0,f.add(l),r=QD.bind(null,r,a,l),a.then(r,r))}function QD(r,a,l){var c=r.pingCache;c!==null&&c.delete(a),r.pingedLanes|=r.suspendedLanes&l,r.warmLanes&=~l,at===r&&(Ge&l)===l&&(Ct===4||Ct===3&&(Ge&62914560)===Ge&&300>hn()-Og?!(Tt&2)&&vl(r,0):Dg|=l,yl===Ge&&(yl=0)),Xi(r)}function W0(r,a){a===0&&(a=gs()),r=Cs(r,a),r!==null&&(Vt(r,a),Xi(r))}function WD(r){var a=r.memoizedState,l=0;a!==null&&(l=a.retryLane),W0(r,l)}function YD(r,a){var l=0;switch(r.tag){case 13:var c=r.stateNode,f=r.memoizedState;f!==null&&(l=f.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(a),W0(r,l)}function XD(r,a){return mr(r,a)}var sf=null,wl=null,Fg=!1,af=!1,zg=!1,eo=0;function Xi(r){r!==wl&&r.next===null&&(wl===null?sf=wl=r:wl=wl.next=r),af=!0,Fg||(Fg=!0,ZD(JD))}function bc(r,a){if(!zg&&af){zg=!0;do for(var l=!1,c=sf;c!==null;){if(r!==0){var f=c.pendingLanes;if(f===0)var g=0;else{var T=c.suspendedLanes,b=c.pingedLanes;g=(1<<31-Nn(42|r)+1)-1,g&=f&~(T&~b),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(l=!0,J0(c,g))}else g=Ge,g=oi(c,c===at?g:0),!(g&3)||ps(c,g)||(l=!0,J0(c,g));c=c.next}while(l);zg=!1}}function JD(){af=Fg=!1;var r=0;eo!==0&&(oN()&&(r=eo),eo=0);for(var a=hn(),l=null,c=sf;c!==null;){var f=c.next,g=Y0(c,a);g===0?(c.next=null,l===null?sf=f:l.next=f,f===null&&(wl=l)):(l=c,(r!==0||g&3)&&(af=!0)),c=f}bc(r)}function Y0(r,a){for(var l=r.suspendedLanes,c=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes&-62914561;0<g;){var T=31-Nn(g),b=1<<T,S=f[T];S===-1?(!(b&l)||b&c)&&(f[T]=Fo(b,a)):S<=a&&(r.expiredLanes|=b),g&=~b}if(a=at,l=Ge,l=oi(r,r===a?l:0),c=r.callbackNode,l===0||r===a&&ot===2||r.cancelPendingCommit!==null)return c!==null&&c!==null&&ds(c),r.callbackNode=null,r.callbackPriority=0;if(!(l&3)||ps(r,l)){if(a=l&-l,a===r.callbackPriority)return a;switch(c!==null&&ds(c),ad(l)){case 2:case 8:l=ct;break;case 32:l=ai;break;case 268435456:l=Ou;break;default:l=ai}return c=X0.bind(null,r),l=mr(l,c),r.callbackPriority=a,r.callbackNode=l,a}return c!==null&&c!==null&&ds(c),r.callbackPriority=2,r.callbackNode=null,2}function X0(r,a){var l=r.callbackNode;if(Tl()&&r.callbackNode!==l)return null;var c=Ge;return c=oi(r,r===at?c:0),c===0?null:(U0(r,c,a),Y0(r,hn()),r.callbackNode!=null&&r.callbackNode===l?X0.bind(null,r):null)}function J0(r,a){if(Tl())return null;U0(r,a,!0)}function ZD(r){uN(function(){Tt&6?mr(Ae,r):r()})}function qg(){return eo===0&&(eo=ku()),eo}function Z0(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Fi(""+r)}function ew(r,a){var l=a.ownerDocument.createElement("input");return l.name=a.name,l.value=a.value,r.id&&l.setAttribute("form",r.id),a.parentNode.insertBefore(l,a),r=new FormData(r),l.parentNode.removeChild(l),r}function eN(r,a,l,c,f){if(a==="submit"&&l&&l.stateNode===f){var g=Z0((f[Kt]||null).action),T=c.submitter;T&&(a=(a=T[Kt]||null)?Z0(a.formAction):T.getAttribute("formAction"),a!==null&&(g=a,T=null));var b=new $o("action","action",null,c,f);r.push({event:b,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(eo!==0){var S=T?ew(f,T):new FormData(f);Xp(l,{pending:!0,data:S,method:f.method,action:g},null,S)}}else typeof g=="function"&&(b.preventDefault(),S=T?ew(f,T):new FormData(f),Xp(l,{pending:!0,data:S,method:f.method,action:g},g,S))},currentTarget:f}]})}}for(var jg=0;jg<KE.length;jg++){var Hg=KE[jg],tN=Hg.toLowerCase(),nN=Hg[0].toUpperCase()+Hg.slice(1);Oi(tN,"on"+nN)}Oi(zE,"onAnimationEnd"),Oi(qE,"onAnimationIteration"),Oi(jE,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(vD,"onTransitionRun"),Oi(ED,"onTransitionStart"),Oi(TD,"onTransitionCancel"),Oi(HE,"onTransitionEnd"),jn("onMouseEnter",["mouseout","mouseover"]),jn("onMouseLeave",["mouseout","mouseover"]),jn("onPointerEnter",["pointerout","pointerover"]),jn("onPointerLeave",["pointerout","pointerover"]),Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ic="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iN=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ic));function tw(r,a){a=(a&4)!==0;for(var l=0;l<r.length;l++){var c=r[l],f=c.event;c=c.listeners;e:{var g=void 0;if(a)for(var T=c.length-1;0<=T;T--){var b=c[T],S=b.instance,V=b.currentTarget;if(b=b.listener,S!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=V;try{g(f)}catch(Y){Gd(Y)}f.currentTarget=null,g=S}else for(T=0;T<c.length;T++){if(b=c[T],S=b.instance,V=b.currentTarget,b=b.listener,S!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=V;try{g(f)}catch(Y){Gd(Y)}f.currentTarget=null,g=S}}}}function ze(r,a){var l=a[Aa];l===void 0&&(l=a[Aa]=new Set);var c=r+"__bubble";l.has(c)||(nw(a,r,2,!1),l.add(c))}function Gg(r,a,l){var c=0;a&&(c|=4),nw(l,r,c,a)}var of="_reactListening"+Math.random().toString(36).slice(2);function Kg(r){if(!r[of]){r[of]=!0,Mu.forEach(function(l){l!=="selectionchange"&&(iN.has(l)||Gg(l,!1,r),Gg(l,!0,r))});var a=r.nodeType===9?r:r.ownerDocument;a===null||a[of]||(a[of]=!0,Gg("selectionchange",!1,a))}}function nw(r,a,l,c){switch(Aw(a)){case 2:var f=DN;break;case 8:f=NN;break;default:f=s_}l=f.bind(null,a,l,r),f=void 0,!hi||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),c?f!==void 0?r.addEventListener(a,l,{capture:!0,passive:f}):r.addEventListener(a,l,!0):f!==void 0?r.addEventListener(a,l,{passive:f}):r.addEventListener(a,l,!1)}function $g(r,a,l,c,f){var g=c;if(!(a&1)&&!(a&2)&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var b=c.stateNode.containerInfo;if(b===f||b.nodeType===8&&b.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var S=T.tag;if((S===3||S===4)&&(S=T.stateNode.containerInfo,S===f||S.nodeType===8&&S.parentNode===f))return;T=T.return}for(;b!==null;){if(T=Ni(b),T===null)return;if(S=T.tag,S===5||S===6||S===26||S===27){c=g=T;continue e}b=b.parentNode}}c=c.return}hd(function(){var V=g,Y=Ko(l),te=[];e:{var H=GE.get(r);if(H!==void 0){var W=$o,Te=r;switch(r){case"keypress":if(qi(l)===0)break e;case"keydown":case"keyup":W=Zo;break;case"focusin":Te="focus",W=Yo;break;case"focusout":Te="blur",W=Yo;break;case"beforeblur":case"afterblur":W=Yo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=di;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=vd;break;case zE:case qE:case jE:W=Xo;break;case HE:W=Td;break;case"scroll":case"scrollend":W=dd;break;case"wheel":W=el;break;case"copy":case"cut":case"paste":W=Jo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Qu;break;case"toggle":case"beforetoggle":W=bd}var Ne=(a&4)!==0,Dt=!Ne&&(r==="scroll"||r==="scrollend"),L=Ne?H!==null?H+"Capture":null:H;Ne=[];for(var x=V,z;x!==null;){var X=x;if(z=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||z===null||L===null||(X=Na(x,L),X!=null&&Ne.push(Ac(x,X,z))),Dt)break;x=x.return}0<Ne.length&&(H=new W(H,Te,null,l,Y),te.push({event:H,listeners:Ne}))}}if(!(a&7)){e:{if(H=r==="mouseover"||r==="pointerover",W=r==="mouseout"||r==="pointerout",H&&l!==ci&&(Te=l.relatedTarget||l.fromElement)&&(Ni(Te)||Te[pr]))break e;if((W||H)&&(H=Y.window===Y?Y:(H=Y.ownerDocument)?H.defaultView||H.parentWindow:window,W?(Te=l.relatedTarget||l.toElement,W=V,Te=Te?Ni(Te):null,Te!==null&&(Dt=pe(Te),Ne=Te.tag,Te!==Dt||Ne!==5&&Ne!==27&&Ne!==6)&&(Te=null)):(W=null,Te=V),W!==Te)){if(Ne=di,X="onMouseLeave",L="onMouseEnter",x="mouse",(r==="pointerout"||r==="pointerover")&&(Ne=Qu,X="onPointerLeave",L="onPointerEnter",x="pointer"),Dt=W==null?H:Ts(W),z=Te==null?H:Ts(Te),H=new Ne(X,x+"leave",W,l,Y),H.target=Dt,H.relatedTarget=z,X=null,Ni(Y)===V&&(Ne=new Ne(L,x+"enter",Te,l,Y),Ne.target=z,Ne.relatedTarget=Dt,X=Ne),Dt=X,W&&Te)t:{for(Ne=W,L=Te,x=0,z=Ne;z;z=bl(z))x++;for(z=0,X=L;X;X=bl(X))z++;for(;0<x-z;)Ne=bl(Ne),x--;for(;0<z-x;)L=bl(L),z--;for(;x--;){if(Ne===L||L!==null&&Ne===L.alternate)break t;Ne=bl(Ne),L=bl(L)}Ne=null}else Ne=null;W!==null&&iw(te,H,W,Ne,!1),Te!==null&&Dt!==null&&iw(te,Dt,Te,Ne,!0)}}e:{if(H=V?Ts(V):window,W=H.nodeName&&H.nodeName.toLowerCase(),W==="select"||W==="input"&&H.type==="file")var ye=NE;else if(Qt(H))if(OE)ye=pD;else{ye=fD;var ke=dD}else W=H.nodeName,!W||W.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?V&&zu(V.elementType)&&(ye=NE):ye=mD;if(ye&&(ye=ye(r,V))){br(te,ye,l,Y);break e}ke&&ke(r,H,V),r==="focusout"&&V&&H.type==="number"&&V.memoizedProps.value!=null&&Go(H,"number",H.value)}switch(ke=V?Ts(V):window,r){case"focusin":(Qt(ke)||ke.contentEditable==="true")&&(tl=ke,Ip=V,Xu=null);break;case"focusout":Xu=Ip=tl=null;break;case"mousedown":Ap=!0;break;case"contextmenu":case"mouseup":case"dragend":Ap=!1,BE(te,l,Y);break;case"selectionchange":if(yD)break;case"keydown":case"keyup":BE(te,l,Y)}var be;if(Gi)e:{switch(r){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else je?Q(r,l)&&(Re="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(Re="onCompositionStart");Re&&(E&&l.locale!=="ko"&&(je||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&je&&(be=ju()):(zi=Y,Ss="value"in zi?zi.value:zi.textContent,je=!0)),ke=lf(V,Re),0<ke.length&&(Re=new Ku(Re,r,null,l,Y),te.push({event:Re,listeners:ke}),be?Re.data=be:(be=ue(l),be!==null&&(Re.data=be)))),(be=_?$t(r,l):He(r,l))&&(Re=lf(V,"onBeforeInput"),0<Re.length&&(ke=new Ku("onBeforeInput","beforeinput",null,l,Y),te.push({event:ke,listeners:Re}),ke.data=be)),eN(te,r,V,l,Y)}tw(te,a)})}function Ac(r,a,l){return{instance:r,listener:a,currentTarget:l}}function lf(r,a){for(var l=a+"Capture",c=[];r!==null;){var f=r,g=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=Na(r,l),f!=null&&c.unshift(Ac(r,f,g)),f=Na(r,a),f!=null&&c.push(Ac(r,f,g))),r=r.return}return c}function bl(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function iw(r,a,l,c,f){for(var g=a._reactName,T=[];l!==null&&l!==c;){var b=l,S=b.alternate,V=b.stateNode;if(b=b.tag,S!==null&&S===c)break;b!==5&&b!==26&&b!==27||V===null||(S=V,f?(V=Na(l,g),V!=null&&T.unshift(Ac(l,V,S))):f||(V=Na(l,g),V!=null&&T.push(Ac(l,V,S)))),l=l.return}T.length!==0&&r.push({event:a,listeners:T})}var rN=/\r\n?/g,sN=/\u0000|\uFFFD/g;function rw(r){return(typeof r=="string"?r:""+r).replace(rN,`
`).replace(sN,"")}function sw(r,a){return a=rw(a),rw(r)===a}function uf(){}function rt(r,a,l,c,f,g){switch(l){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||ui(r,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&ui(r,""+c);break;case"className":Is(r,"class",c);break;case"tabIndex":Is(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Is(r,l,c);break;case"style":cd(r,c,g);break;case"data":if(a!=="object"){Is(r,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||l!=="href")){r.removeAttribute(l);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(l);break}c=Fi(""+c),r.setAttribute(l,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(l==="formAction"?(a!=="input"&&rt(r,a,"name",f.name,f,null),rt(r,a,"formEncType",f.formEncType,f,null),rt(r,a,"formMethod",f.formMethod,f,null),rt(r,a,"formTarget",f.formTarget,f,null)):(rt(r,a,"encType",f.encType,f,null),rt(r,a,"method",f.method,f,null),rt(r,a,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(l);break}c=Fi(""+c),r.setAttribute(l,c);break;case"onClick":c!=null&&(r.onclick=uf);break;case"onScroll":c!=null&&ze("scroll",r);break;case"onScrollEnd":c!=null&&ze("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=l}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}l=Fi(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(l,""+c):r.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(l,""):r.removeAttribute(l);break;case"capture":case"download":c===!0?r.setAttribute(l,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(l,c):r.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(l,c):r.removeAttribute(l);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(l):r.setAttribute(l,c);break;case"popover":ze("beforetoggle",r),ze("toggle",r),bs(r,"popover",c);break;case"xlinkActuate":li(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":li(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":li(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":li(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":li(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":li(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":li(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":li(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":li(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":bs(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=_p.get(l)||l,bs(r,l,c))}}function Qg(r,a,l,c,f,g){switch(l){case"style":cd(r,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=l}}break;case"children":typeof c=="string"?ui(r,c):(typeof c=="number"||typeof c=="bigint")&&ui(r,""+c);break;case"onScroll":c!=null&&ze("scroll",r);break;case"onScrollEnd":c!=null&&ze("scrollend",r);break;case"onClick":c!=null&&(r.onclick=uf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jo.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(f=l.endsWith("Capture"),a=l.slice(2,f?l.length-7:void 0),g=r[Kt]||null,g=g!=null?g[l]:null,typeof g=="function"&&r.removeEventListener(a,g,f),typeof c=="function")){typeof g!="function"&&g!==null&&(l in r?r[l]=null:r.hasAttribute(l)&&r.removeAttribute(l)),r.addEventListener(a,c,f);break e}l in r?r[l]=c:c===!0?r.setAttribute(l,""):bs(r,l,c)}}}function pn(r,a,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",r),ze("load",r);var c=!1,f=!1,g;for(g in l)if(l.hasOwnProperty(g)){var T=l[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:rt(r,a,g,T,l,null)}}f&&rt(r,a,"srcSet",l.srcSet,l,null),c&&rt(r,a,"src",l.src,l,null);return;case"input":ze("invalid",r);var b=g=T=f=null,S=null,V=null;for(c in l)if(l.hasOwnProperty(c)){var Y=l[c];if(Y!=null)switch(c){case"name":f=Y;break;case"type":T=Y;break;case"checked":S=Y;break;case"defaultChecked":V=Y;break;case"value":g=Y;break;case"defaultValue":b=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(i(137,a));break;default:rt(r,a,c,Y,l,null)}}Ca(r,g,b,S,V,T,f,!1),Sa(r);return;case"select":ze("invalid",r),c=T=g=null;for(f in l)if(l.hasOwnProperty(f)&&(b=l[f],b!=null))switch(f){case"value":g=b;break;case"defaultValue":T=b;break;case"multiple":c=b;default:rt(r,a,f,b,l,null)}a=g,l=T,r.multiple=!!c,a!=null?Qe(r,!!c,a,!1):l!=null&&Qe(r,!!c,l,!0);return;case"textarea":ze("invalid",r),g=f=c=null;for(T in l)if(l.hasOwnProperty(T)&&(b=l[T],b!=null))switch(T){case"value":c=b;break;case"defaultValue":f=b;break;case"children":g=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(i(91));break;default:rt(r,a,T,b,l,null)}Rs(r,c,f,g),Sa(r);return;case"option":for(S in l)if(l.hasOwnProperty(S)&&(c=l[S],c!=null))switch(S){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:rt(r,a,S,c,l,null)}return;case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":ze("load",r);break;case"video":case"audio":for(c=0;c<Ic.length;c++)ze(Ic[c],r);break;case"image":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"embed":case"source":case"link":ze("error",r),ze("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in l)if(l.hasOwnProperty(V)&&(c=l[V],c!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:rt(r,a,V,c,l,null)}return;default:if(zu(a)){for(Y in l)l.hasOwnProperty(Y)&&(c=l[Y],c!==void 0&&Qg(r,a,Y,c,l,void 0));return}}for(b in l)l.hasOwnProperty(b)&&(c=l[b],c!=null&&rt(r,a,b,c,l,null))}function aN(r,a,l,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,T=null,b=null,S=null,V=null,Y=null;for(W in l){var te=l[W];if(l.hasOwnProperty(W)&&te!=null)switch(W){case"checked":break;case"value":break;case"defaultValue":S=te;default:c.hasOwnProperty(W)||rt(r,a,W,null,c,te)}}for(var H in c){var W=c[H];if(te=l[H],c.hasOwnProperty(H)&&(W!=null||te!=null))switch(H){case"type":g=W;break;case"name":f=W;break;case"checked":V=W;break;case"defaultChecked":Y=W;break;case"value":T=W;break;case"defaultValue":b=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(i(137,a));break;default:W!==te&&rt(r,a,H,W,c,te)}}As(r,T,b,S,V,Y,g,f);return;case"select":W=T=b=H=null;for(g in l)if(S=l[g],l.hasOwnProperty(g)&&S!=null)switch(g){case"value":break;case"multiple":W=S;default:c.hasOwnProperty(g)||rt(r,a,g,null,c,S)}for(f in c)if(g=c[f],S=l[f],c.hasOwnProperty(f)&&(g!=null||S!=null))switch(f){case"value":H=g;break;case"defaultValue":b=g;break;case"multiple":T=g;default:g!==S&&rt(r,a,f,g,c,S)}a=b,l=T,c=W,H!=null?Qe(r,!!l,H,!1):!!c!=!!l&&(a!=null?Qe(r,!!l,a,!0):Qe(r,!!l,l?[]:"",!1));return;case"textarea":W=H=null;for(b in l)if(f=l[b],l.hasOwnProperty(b)&&f!=null&&!c.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:rt(r,a,b,null,c,f)}for(T in c)if(f=c[T],g=l[T],c.hasOwnProperty(T)&&(f!=null||g!=null))switch(T){case"value":H=f;break;case"defaultValue":W=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==g&&rt(r,a,T,f,c,g)}Da(r,H,W);return;case"option":for(var Te in l)if(H=l[Te],l.hasOwnProperty(Te)&&H!=null&&!c.hasOwnProperty(Te))switch(Te){case"selected":r.selected=!1;break;default:rt(r,a,Te,null,c,H)}for(S in c)if(H=c[S],W=l[S],c.hasOwnProperty(S)&&H!==W&&(H!=null||W!=null))switch(S){case"selected":r.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:rt(r,a,S,H,c,W)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ne in l)H=l[Ne],l.hasOwnProperty(Ne)&&H!=null&&!c.hasOwnProperty(Ne)&&rt(r,a,Ne,null,c,H);for(V in c)if(H=c[V],W=l[V],c.hasOwnProperty(V)&&H!==W&&(H!=null||W!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(i(137,a));break;default:rt(r,a,V,H,c,W)}return;default:if(zu(a)){for(var Dt in l)H=l[Dt],l.hasOwnProperty(Dt)&&H!==void 0&&!c.hasOwnProperty(Dt)&&Qg(r,a,Dt,void 0,c,H);for(Y in c)H=c[Y],W=l[Y],!c.hasOwnProperty(Y)||H===W||H===void 0&&W===void 0||Qg(r,a,Y,H,c,W);return}}for(var L in l)H=l[L],l.hasOwnProperty(L)&&H!=null&&!c.hasOwnProperty(L)&&rt(r,a,L,null,c,H);for(te in c)H=c[te],W=l[te],!c.hasOwnProperty(te)||H===W||H==null&&W==null||rt(r,a,te,H,c,W)}var Wg=null,Yg=null;function cf(r){return r.nodeType===9?r:r.ownerDocument}function aw(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ow(r,a){if(r===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&a==="foreignObject"?0:r}function Xg(r,a){return r==="textarea"||r==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Jg=null;function oN(){var r=window.event;return r&&r.type==="popstate"?r===Jg?!1:(Jg=r,!0):(Jg=null,!1)}var lw=typeof setTimeout=="function"?setTimeout:void 0,lN=typeof clearTimeout=="function"?clearTimeout:void 0,uw=typeof Promise=="function"?Promise:void 0,uN=typeof queueMicrotask=="function"?queueMicrotask:typeof uw<"u"?function(r){return uw.resolve(null).then(r).catch(cN)}:lw;function cN(r){setTimeout(function(){throw r})}function Zg(r,a){var l=a,c=0;do{var f=l.nextSibling;if(r.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(c===0){r.removeChild(f),xc(a);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=f}while(l);xc(a)}function e_(r){var a=r.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var l=a;switch(a=a.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":e_(l),Ra(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}r.removeChild(l)}}function hN(r,a,l,c){for(;r.nodeType===1;){var f=l;if(r.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[Es])switch(a){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(g=r.getAttribute("rel"),g==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(g!==f.rel||r.getAttribute("href")!==(f.href==null?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(g=r.getAttribute("src"),(g!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(a==="input"&&r.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===g)return r}else return r;if(r=ki(r.nextSibling),r===null)break}return null}function dN(r,a,l){if(a==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!l||(r=ki(r.nextSibling),r===null))return null;return r}function ki(r){for(;r!=null;r=r.nextSibling){var a=r.nodeType;if(a===1||a===3)break;if(a===8){if(a=r.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return r}function cw(r){r=r.previousSibling;for(var a=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(a===0)return r;a--}else l==="/$"&&a++}r=r.previousSibling}return null}function hw(r,a,l){switch(a=cf(l),r){case"html":if(r=a.documentElement,!r)throw Error(i(452));return r;case"head":if(r=a.head,!r)throw Error(i(453));return r;case"body":if(r=a.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}var wi=new Map,dw=new Set;function hf(r){return typeof r.getRootNode=="function"?r.getRootNode():r.ownerDocument}var Ur=de.d;de.d={f:fN,r:mN,D:pN,C:gN,L:_N,m:yN,X:EN,S:vN,M:TN};function fN(){var r=Ur.f(),a=nf();return r||a}function mN(r){var a=gr(r);a!==null&&a.tag===5&&a.type==="form"?BT(a):Ur.r(r)}var Il=typeof document>"u"?null:document;function fw(r,a,l){var c=Il;if(c&&typeof a=="string"&&a){var f=Rt(a);f='link[rel="'+r+'"][href="'+f+'"]',typeof l=="string"&&(f+='[crossorigin="'+l+'"]'),dw.has(f)||(dw.add(f),r={rel:r,crossOrigin:l,href:a},c.querySelector(f)===null&&(a=c.createElement("link"),pn(a,"link",r),vt(a),c.head.appendChild(a)))}}function pN(r){Ur.D(r),fw("dns-prefetch",r,null)}function gN(r,a){Ur.C(r,a),fw("preconnect",r,a)}function _N(r,a,l){Ur.L(r,a,l);var c=Il;if(c&&r&&a){var f='link[rel="preload"][as="'+Rt(a)+'"]';a==="image"&&l&&l.imageSrcSet?(f+='[imagesrcset="'+Rt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(f+='[imagesizes="'+Rt(l.imageSizes)+'"]')):f+='[href="'+Rt(r)+'"]';var g=f;switch(a){case"style":g=Al(r);break;case"script":g=Rl(r)}wi.has(g)||(r=N({rel:"preload",href:a==="image"&&l&&l.imageSrcSet?void 0:r,as:a},l),wi.set(g,r),c.querySelector(f)!==null||a==="style"&&c.querySelector(Rc(g))||a==="script"&&c.querySelector(Sc(g))||(a=c.createElement("link"),pn(a,"link",r),vt(a),c.head.appendChild(a)))}}function yN(r,a){Ur.m(r,a);var l=Il;if(l&&r){var c=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+Rt(c)+'"][href="'+Rt(r)+'"]',g=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Rl(r)}if(!wi.has(g)&&(r=N({rel:"modulepreload",href:r},a),wi.set(g,r),l.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Sc(g)))return}c=l.createElement("link"),pn(c,"link",r),vt(c),l.head.appendChild(c)}}}function vN(r,a,l){Ur.S(r,a,l);var c=Il;if(c&&r){var f=ws(c).hoistableStyles,g=Al(r);a=a||"default";var T=f.get(g);if(!T){var b={loading:0,preload:null};if(T=c.querySelector(Rc(g)))b.loading=5;else{r=N({rel:"stylesheet",href:r,"data-precedence":a},l),(l=wi.get(g))&&t_(r,l);var S=T=c.createElement("link");vt(S),pn(S,"link",r),S._p=new Promise(function(V,Y){S.onload=V,S.onerror=Y}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,df(T,a,c)}T={type:"stylesheet",instance:T,count:1,state:b},f.set(g,T)}}}function EN(r,a){Ur.X(r,a);var l=Il;if(l&&r){var c=ws(l).hoistableScripts,f=Rl(r),g=c.get(f);g||(g=l.querySelector(Sc(f)),g||(r=N({src:r,async:!0},a),(a=wi.get(f))&&n_(r,a),g=l.createElement("script"),vt(g),pn(g,"link",r),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function TN(r,a){Ur.M(r,a);var l=Il;if(l&&r){var c=ws(l).hoistableScripts,f=Rl(r),g=c.get(f);g||(g=l.querySelector(Sc(f)),g||(r=N({src:r,async:!0,type:"module"},a),(a=wi.get(f))&&n_(r,a),g=l.createElement("script"),vt(g),pn(g,"link",r),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function mw(r,a,l,c){var f=(f=Zt.current)?hf(f):null;if(!f)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(a=Al(l.href),l=ws(f).hoistableStyles,c=l.get(a),c||(c={type:"style",instance:null,count:0,state:null},l.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){r=Al(l.href);var g=ws(f).hoistableStyles,T=g.get(r);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(r,T),(g=f.querySelector(Rc(r)))&&!g._p&&(T.instance=g,T.state.loading=5),wi.has(r)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},wi.set(r,l),g||wN(f,r,l,T.state))),a&&c===null)throw Error(i(528,""));return T}if(a&&c!==null)throw Error(i(529,""));return null;case"script":return a=l.async,l=l.src,typeof l=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Rl(l),l=ws(f).hoistableScripts,c=l.get(a),c||(c={type:"script",instance:null,count:0,state:null},l.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function Al(r){return'href="'+Rt(r)+'"'}function Rc(r){return'link[rel="stylesheet"]['+r+"]"}function pw(r){return N({},r,{"data-precedence":r.precedence,precedence:null})}function wN(r,a,l,c){r.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=r.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),pn(a,"link",l),vt(a),r.head.appendChild(a))}function Rl(r){return'[src="'+Rt(r)+'"]'}function Sc(r){return"script[async]"+r}function gw(r,a,l){if(a.count++,a.instance===null)switch(a.type){case"style":var c=r.querySelector('style[data-href~="'+Rt(l.href)+'"]');if(c)return a.instance=c,vt(c),c;var f=N({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),vt(c),pn(c,"style",f),df(c,l.precedence,r),a.instance=c;case"stylesheet":f=Al(l.href);var g=r.querySelector(Rc(f));if(g)return a.state.loading|=4,a.instance=g,vt(g),g;c=pw(l),(f=wi.get(f))&&t_(c,f),g=(r.ownerDocument||r).createElement("link"),vt(g);var T=g;return T._p=new Promise(function(b,S){T.onload=b,T.onerror=S}),pn(g,"link",c),a.state.loading|=4,df(g,l.precedence,r),a.instance=g;case"script":return g=Rl(l.src),(f=r.querySelector(Sc(g)))?(a.instance=f,vt(f),f):(c=l,(f=wi.get(g))&&(c=N({},l),n_(c,f)),r=r.ownerDocument||r,f=r.createElement("script"),vt(f),pn(f,"link",c),r.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&!(a.state.loading&4)&&(c=a.instance,a.state.loading|=4,df(c,l.precedence,r));return a.instance}function df(r,a,l){for(var c=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,g=f,T=0;T<c.length;T++){var b=c[T];if(b.dataset.precedence===a)g=b;else if(g!==f)break}g?g.parentNode.insertBefore(r,g.nextSibling):(a=l.nodeType===9?l.head:l,a.insertBefore(r,a.firstChild))}function t_(r,a){r.crossOrigin==null&&(r.crossOrigin=a.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=a.referrerPolicy),r.title==null&&(r.title=a.title)}function n_(r,a){r.crossOrigin==null&&(r.crossOrigin=a.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=a.referrerPolicy),r.integrity==null&&(r.integrity=a.integrity)}var ff=null;function _w(r,a,l){if(ff===null){var c=new Map,f=ff=new Map;f.set(l,c)}else f=ff,c=f.get(l),c||(c=new Map,f.set(l,c));if(c.has(r))return c;for(c.set(r,null),l=l.getElementsByTagName(r),f=0;f<l.length;f++){var g=l[f];if(!(g[Es]||g[en]||r==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(a)||"";T=r+T;var b=c.get(T);b?b.push(g):c.set(T,[g])}}return c}function yw(r,a,l){r=r.ownerDocument||r,r.head.insertBefore(l,a==="title"?r.querySelector("head > title"):null)}function bN(r,a,l){if(l===1||a.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return r=a.disabled,typeof a.precedence=="string"&&r==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function vw(r){return!(r.type==="stylesheet"&&!(r.state.loading&3))}var Cc=null;function IN(){}function AN(r,a,l){if(Cc===null)throw Error(i(475));var c=Cc;if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var f=Al(l.href),g=r.querySelector(Rc(f));if(g){r=g._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=mf.bind(c),r.then(c,c)),a.state.loading|=4,a.instance=g,vt(g);return}g=r.ownerDocument||r,l=pw(l),(f=wi.get(f))&&t_(l,f),g=g.createElement("link"),vt(g);var T=g;T._p=new Promise(function(b,S){T.onload=b,T.onerror=S}),pn(g,"link",l),a.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,r),(r=a.state.preload)&&!(a.state.loading&3)&&(c.count++,a=mf.bind(c),r.addEventListener("load",a),r.addEventListener("error",a))}}function RN(){if(Cc===null)throw Error(i(475));var r=Cc;return r.stylesheets&&r.count===0&&i_(r,r.stylesheets),0<r.count?function(a){var l=setTimeout(function(){if(r.stylesheets&&i_(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=a,function(){r.unsuspend=null,clearTimeout(l)}}:null}function mf(){if(this.count--,this.count===0){if(this.stylesheets)i_(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var pf=null;function i_(r,a){r.stylesheets=null,r.unsuspend!==null&&(r.count++,pf=new Map,a.forEach(SN,r),pf=null,mf.call(r))}function SN(r,a){if(!(a.state.loading&4)){var l=pf.get(r);if(l)var c=l.get(null);else{l=new Map,pf.set(r,l);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var T=f[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(l.set(T.dataset.precedence,T),c=T)}c&&l.set(null,c)}f=a.instance,T=f.getAttribute("data-precedence"),g=l.get(T)||c,g===c&&l.set(null,f),l.set(T,f),this.count++,c=mf.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),g?g.parentNode.insertBefore(f,g.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),a.state.loading|=4}}var Dc={$$typeof:C,Provider:null,Consumer:null,_currentValue:Se,_currentValue2:Se,_threadCount:0};function CN(r,a,l,c,f,g,T,b){this.tag=1,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.hiddenUpdates=zo(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Ew(r,a,l,c,f,g,T,b,S,V,Y,te){return r=new CN(r,a,l,T,b,S,V,te),a=1,g===!0&&(a|=24),g=Ei(3,null,null,a),r.current=g,g.stateNode=r,a=Vp(),a.refCount++,r.pooledCache=a,a.refCount++,g.memoizedState={element:c,isDehydrated:l,cache:a},pg(g),r}function Tw(r){return r?(r=rl,r):rl}function ww(r,a,l,c,f,g){f=Tw(f),c.context===null?c.context=f:c.pendingContext=f,c=Vs(a),c.payload={element:l},g=g===void 0?null:g,g!==null&&(c.callback=g),l=Ms(r,c,a),l!==null&&(kn(l,r,a),dc(l,r,a))}function bw(r,a){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<a?l:a}}function r_(r,a){bw(r,a),(r=r.alternate)&&bw(r,a)}function Iw(r){if(r.tag===13){var a=Cs(r,67108864);a!==null&&kn(a,r,67108864),r_(r,67108864)}}var gf=!0;function DN(r,a,l,c){var f=A.T;A.T=null;var g=de.p;try{de.p=2,s_(r,a,l,c)}finally{de.p=g,A.T=f}}function NN(r,a,l,c){var f=A.T;A.T=null;var g=de.p;try{de.p=8,s_(r,a,l,c)}finally{de.p=g,A.T=f}}function s_(r,a,l,c){if(gf){var f=a_(c);if(f===null)$g(r,a,c,_f,l),Rw(r,c);else if(PN(f,r,a,l,c))c.stopPropagation();else if(Rw(r,c),a&4&&-1<ON.indexOf(r)){for(;f!==null;){var g=gr(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Di(g.pendingLanes);if(T!==0){var b=g;for(b.pendingLanes|=2,b.entangledLanes|=2;T;){var S=1<<31-Nn(T);b.entanglements[1]|=S,T&=~S}Xi(g),!(Tt&6)&&(Zd=hn()+500,bc(0))}}break;case 13:b=Cs(g,2),b!==null&&kn(b,g,2),nf(),r_(g,2)}if(g=a_(c),g===null&&$g(r,a,c,_f,l),g===f)break;f=g}f!==null&&c.stopPropagation()}else $g(r,a,c,null,l)}}function a_(r){return r=Ko(r),o_(r)}var _f=null;function o_(r){if(_f=null,r=Ni(r),r!==null){var a=pe(r);if(a===null)r=null;else{var l=a.tag;if(l===13){if(r=qe(a),r!==null)return r;r=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;r=null}else a!==r&&(r=null)}}return _f=r,null}function Aw(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bo()){case Ae:return 2;case ct:return 8;case ai:case nd:return 32;case Ou:return 268435456;default:return 32}default:return 32}}var l_=!1,js=null,Hs=null,Gs=null,Nc=new Map,Oc=new Map,Ks=[],ON="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rw(r,a){switch(r){case"focusin":case"focusout":js=null;break;case"dragenter":case"dragleave":Hs=null;break;case"mouseover":case"mouseout":Gs=null;break;case"pointerover":case"pointerout":Nc.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oc.delete(a.pointerId)}}function Pc(r,a,l,c,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:a,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},a!==null&&(a=gr(a),a!==null&&Iw(a)),r):(r.eventSystemFlags|=c,a=r.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),r)}function PN(r,a,l,c,f){switch(a){case"focusin":return js=Pc(js,r,a,l,c,f),!0;case"dragenter":return Hs=Pc(Hs,r,a,l,c,f),!0;case"mouseover":return Gs=Pc(Gs,r,a,l,c,f),!0;case"pointerover":var g=f.pointerId;return Nc.set(g,Pc(Nc.get(g)||null,r,a,l,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Oc.set(g,Pc(Oc.get(g)||null,r,a,l,c,f)),!0}return!1}function Sw(r){var a=Ni(r.target);if(a!==null){var l=pe(a);if(l!==null){if(a=l.tag,a===13){if(a=qe(l),a!==null){r.blockedOn=a,vs(r.priority,function(){if(l.tag===13){var c=ti(),f=Cs(l,c);f!==null&&kn(f,l,c),r_(l,c)}});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function yf(r){if(r.blockedOn!==null)return!1;for(var a=r.targetContainers;0<a.length;){var l=a_(r.nativeEvent);if(l===null){l=r.nativeEvent;var c=new l.constructor(l.type,l);ci=c,l.target.dispatchEvent(c),ci=null}else return a=gr(l),a!==null&&Iw(a),r.blockedOn=l,!1;a.shift()}return!0}function Cw(r,a,l){yf(r)&&l.delete(a)}function xN(){l_=!1,js!==null&&yf(js)&&(js=null),Hs!==null&&yf(Hs)&&(Hs=null),Gs!==null&&yf(Gs)&&(Gs=null),Nc.forEach(Cw),Oc.forEach(Cw)}function vf(r,a){r.blockedOn===a&&(r.blockedOn=null,l_||(l_=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,xN)))}var Ef=null;function Dw(r){Ef!==r&&(Ef=r,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ef===r&&(Ef=null);for(var a=0;a<r.length;a+=3){var l=r[a],c=r[a+1],f=r[a+2];if(typeof c!="function"){if(o_(c||l)===null)continue;break}var g=gr(l);g!==null&&(r.splice(a,3),a-=3,Xp(g,{pending:!0,data:f,method:l.method,action:c},c,f))}}))}function xc(r){function a(S){return vf(S,r)}js!==null&&vf(js,r),Hs!==null&&vf(Hs,r),Gs!==null&&vf(Gs,r),Nc.forEach(a),Oc.forEach(a);for(var l=0;l<Ks.length;l++){var c=Ks[l];c.blockedOn===r&&(c.blockedOn=null)}for(;0<Ks.length&&(l=Ks[0],l.blockedOn===null);)Sw(l),l.blockedOn===null&&Ks.shift();if(l=(r.ownerDocument||r).$$reactFormReplay,l!=null)for(c=0;c<l.length;c+=3){var f=l[c],g=l[c+1],T=f[Kt]||null;if(typeof g=="function")T||Dw(l);else if(T){var b=null;if(g&&g.hasAttribute("formAction")){if(f=g,T=g[Kt]||null)b=T.formAction;else if(o_(f)!==null)continue}else b=T.action;typeof b=="function"?l[c+1]=b:(l.splice(c,3),c-=3),Dw(l)}}}function u_(r){this._internalRoot=r}Tf.prototype.render=u_.prototype.render=function(r){var a=this._internalRoot;if(a===null)throw Error(i(409));var l=a.current,c=ti();ww(l,c,r,a,null,null)},Tf.prototype.unmount=u_.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var a=r.containerInfo;r.tag===0&&Tl(),ww(r.current,2,null,r,null,null),nf(),a[pr]=null}};function Tf(r){this._internalRoot=r}Tf.prototype.unstable_scheduleHydration=function(r){if(r){var a=od();r={blockedOn:null,target:r,priority:a};for(var l=0;l<Ks.length&&a!==0&&a<Ks[l].priority;l++);Ks.splice(l,0,r),l===0&&Sw(r)}};var Nw=e.version;if(Nw!=="19.0.0")throw Error(i(527,Nw,"19.0.0"));de.findDOMNode=function(r){var a=r._reactInternals;if(a===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=ee(a),r=r!==null?_e(r):null,r=r===null?null:r.stateNode,r};var kN={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Ni,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wf.isDisabled&&wf.supportsFiber)try{fs=wf.inject(kN),En=wf}catch{}}return Vc.createRoot=function(r,a){if(!s(r))throw Error(i(299));var l=!1,c="",f=$T,g=QT,T=WT,b=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks)),a=Ew(r,1,!1,null,null,l,c,f,g,T,b,null),r[pr]=a.current,Kg(r.nodeType===8?r.parentNode:r),new u_(a)},Vc.hydrateRoot=function(r,a,l){if(!s(r))throw Error(i(299));var c=!1,f="",g=$T,T=QT,b=WT,S=null,V=null;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(f=l.identifierPrefix),l.onUncaughtError!==void 0&&(g=l.onUncaughtError),l.onCaughtError!==void 0&&(T=l.onCaughtError),l.onRecoverableError!==void 0&&(b=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(S=l.unstable_transitionCallbacks),l.formState!==void 0&&(V=l.formState)),a=Ew(r,1,!0,a,l??null,c,f,g,T,b,S,V),a.context=Tw(null),l=a.current,c=ti(),f=Vs(c),f.callback=null,Ms(l,f,c),a.current.lanes=c,Vt(a,c),Xi(a),r[pr]=a.current,Kg(r),new Tf(a)},Vc.version="19.0.0",Vc}var Fw;function jN(){if(Fw)return d_.exports;Fw=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),d_.exports=qN(),d_.exports}var HN=jN();const GN=kh(HN);var g_={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var zw;function KN(){return zw||(zw=1,function(n){(function(){var e={}.hasOwnProperty;function t(){for(var o="",u=0;u<arguments.length;u++){var h=arguments[u];h&&(o=s(o,i(h)))}return o}function i(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return t.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var u="";for(var h in o)e.call(o,h)&&o[h]&&(u=s(u,h));return u}function s(o,u){return u?o?o+" "+u:o+u:o}n.exports?(t.default=t,n.exports=t):window.classNames=t})()}(g_)),g_.exports}var $N=KN();const tt=kh($N);function K_(){return K_=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},K_.apply(null,arguments)}function uA(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.includes(i))continue;t[i]=n[i]}return t}function qw(n){return"default"+n.charAt(0).toUpperCase()+n.substr(1)}function QN(n){var e=WN(n,"string");return typeof e=="symbol"?e:String(e)}function WN(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}function YN(n,e,t){var i=G.useRef(n!==void 0),s=G.useState(e),o=s[0],u=s[1],h=n!==void 0,m=i.current;return i.current=h,!h&&m&&o!==e&&u(e),[h?n:o,G.useCallback(function(p){for(var y=arguments.length,v=new Array(y>1?y-1:0),w=1;w<y;w++)v[w-1]=arguments[w];t&&t.apply(void 0,[p].concat(v)),u(p)},[t])]}function XN(n,e){return Object.keys(e).reduce(function(t,i){var s,o=t,u=o[qw(i)],h=o[i],m=uA(o,[qw(i),i].map(QN)),p=e[i],y=YN(h,u,n[p]),v=y[0],w=y[1];return K_({},m,(s={},s[i]=v,s[p]=w,s))},n)}function $_(n,e){return $_=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},$_(n,e)}function JN(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,$_(n,e)}const ZN=["xxl","xl","lg","md","sm","xs"],eO="xs",Tm=G.createContext({prefixes:{},breakpoints:ZN,minBreakpoint:eO});function Ot(n,e){const{prefixes:t}=G.useContext(Tm);return n||t[e]||e}function tO(){const{breakpoints:n}=G.useContext(Tm);return n}function nO(){const{minBreakpoint:n}=G.useContext(Tm);return n}function iO(){const{dir:n}=G.useContext(Tm);return n==="rtl"}function wm(n){return n&&n.ownerDocument||document}function rO(n){var e=wm(n);return e&&e.defaultView||window}function sO(n,e){return rO(n).getComputedStyle(n,e)}var aO=/([A-Z])/g;function oO(n){return n.replace(aO,"-$1").toLowerCase()}var lO=/^ms-/;function bf(n){return oO(n).replace(lO,"-ms-")}var uO=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function cO(n){return!!(n&&uO.test(n))}function go(n,e){var t="",i="";if(typeof e=="string")return n.style.getPropertyValue(bf(e))||sO(n).getPropertyValue(bf(e));Object.keys(e).forEach(function(s){var o=e[s];!o&&o!==0?n.style.removeProperty(bf(s)):cO(s)?i+=s+"("+o+") ":t+=bf(s)+": "+o+";"}),i&&(t+="transform: "+i+";"),n.style.cssText+=";"+t}var __={exports:{}},y_,jw;function hO(){if(jw)return y_;jw=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return y_=n,y_}var v_,Hw;function dO(){if(Hw)return v_;Hw=1;var n=hO();function e(){}function t(){}return t.resetWarningCache=e,v_=function(){function i(u,h,m,p,y,v){if(v!==n){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}i.isRequired=i;function s(){return i}var o={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:s,element:i,elementType:i,instanceOf:s,node:i,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:t,resetWarningCache:e};return o.PropTypes=o,o},v_}var Gw;function fO(){return Gw||(Gw=1,__.exports=dO()()),__.exports}var mO=fO();const Gr=kh(mO);var pO=lA();const zl=kh(pO),Kw={disabled:!1},cA=ho.createContext(null);var gO=function(e){return e.scrollTop},Kc="unmounted",no="exited",Xs="entering",so="entered",Q_="exiting",ts=function(n){JN(e,n);function e(i,s){var o;o=n.call(this,i,s)||this;var u=s,h=u&&!u.isMounting?i.enter:i.appear,m;return o.appearStatus=null,i.in?h?(m=no,o.appearStatus=Xs):m=so:i.unmountOnExit||i.mountOnEnter?m=Kc:m=no,o.state={status:m},o.nextCallback=null,o}e.getDerivedStateFromProps=function(s,o){var u=s.in;return u&&o.status===Kc?{status:no}:null};var t=e.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(s){var o=null;if(s!==this.props){var u=this.state.status;this.props.in?u!==Xs&&u!==so&&(o=Xs):(u===Xs||u===so)&&(o=Q_)}this.updateStatus(!1,o)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var s=this.props.timeout,o,u,h;return o=u=h=s,s!=null&&typeof s!="number"&&(o=s.exit,u=s.enter,h=s.appear!==void 0?s.appear:u),{exit:o,enter:u,appear:h}},t.updateStatus=function(s,o){if(s===void 0&&(s=!1),o!==null)if(this.cancelNextCallback(),o===Xs){if(this.props.unmountOnExit||this.props.mountOnEnter){var u=this.props.nodeRef?this.props.nodeRef.current:zl.findDOMNode(this);u&&gO(u)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===no&&this.setState({status:Kc})},t.performEnter=function(s){var o=this,u=this.props.enter,h=this.context?this.context.isMounting:s,m=this.props.nodeRef?[h]:[zl.findDOMNode(this),h],p=m[0],y=m[1],v=this.getTimeouts(),w=h?v.appear:v.enter;if(!s&&!u||Kw.disabled){this.safeSetState({status:so},function(){o.props.onEntered(p)});return}this.props.onEnter(p,y),this.safeSetState({status:Xs},function(){o.props.onEntering(p,y),o.onTransitionEnd(w,function(){o.safeSetState({status:so},function(){o.props.onEntered(p,y)})})})},t.performExit=function(){var s=this,o=this.props.exit,u=this.getTimeouts(),h=this.props.nodeRef?void 0:zl.findDOMNode(this);if(!o||Kw.disabled){this.safeSetState({status:no},function(){s.props.onExited(h)});return}this.props.onExit(h),this.safeSetState({status:Q_},function(){s.props.onExiting(h),s.onTransitionEnd(u.exit,function(){s.safeSetState({status:no},function(){s.props.onExited(h)})})})},t.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(s,o){o=this.setNextCallback(o),this.setState(s,o)},t.setNextCallback=function(s){var o=this,u=!0;return this.nextCallback=function(h){u&&(u=!1,o.nextCallback=null,s(h))},this.nextCallback.cancel=function(){u=!1},this.nextCallback},t.onTransitionEnd=function(s,o){this.setNextCallback(o);var u=this.props.nodeRef?this.props.nodeRef.current:zl.findDOMNode(this),h=s==null&&!this.props.addEndListener;if(!u||h){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var m=this.props.nodeRef?[this.nextCallback]:[u,this.nextCallback],p=m[0],y=m[1];this.props.addEndListener(p,y)}s!=null&&setTimeout(this.nextCallback,s)},t.render=function(){var s=this.state.status;if(s===Kc)return null;var o=this.props,u=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var h=uA(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ho.createElement(cA.Provider,{value:null},typeof u=="function"?u(s,h):ho.cloneElement(ho.Children.only(u),h))},e}(ho.Component);ts.contextType=cA;ts.propTypes={};function Sl(){}ts.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Sl,onEntering:Sl,onEntered:Sl,onExit:Sl,onExiting:Sl,onExited:Sl};ts.UNMOUNTED=Kc;ts.EXITED=no;ts.ENTERING=Xs;ts.ENTERED=so;ts.EXITING=Q_;function _O(n){return n.code==="Escape"||n.keyCode===27}function yO(){const n=G.version.split(".");return{major:+n[0],minor:+n[1],patch:+n[2]}}function hA(n){if(!n||typeof n=="function")return null;const{major:e}=yO();return e>=19?n.props.ref:n.ref}const pu=!!(typeof window<"u"&&window.document&&window.document.createElement);var W_=!1,Y_=!1;try{var E_={get passive(){return W_=!0},get once(){return Y_=W_=!0}};pu&&(window.addEventListener("test",E_,E_),window.removeEventListener("test",E_,!0))}catch{}function dA(n,e,t,i){if(i&&typeof i!="boolean"&&!Y_){var s=i.once,o=i.capture,u=t;!Y_&&s&&(u=t.__once||function h(m){this.removeEventListener(e,h,o),t.call(this,m)},t.__once=u),n.addEventListener(e,u,W_?i:o)}n.addEventListener(e,t,i)}function X_(n,e,t,i){var s=i&&typeof i!="boolean"?i.capture:i;n.removeEventListener(e,t,s),t.__once&&n.removeEventListener(e,t.__once,s)}function Wf(n,e,t,i){return dA(n,e,t,i),function(){X_(n,e,t,i)}}function vO(n,e,t,i){if(i===void 0&&(i=!0),n){var s=document.createEvent("HTMLEvents");s.initEvent(e,t,i),n.dispatchEvent(s)}}function EO(n){var e=go(n,"transitionDuration")||"",t=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*t}function TO(n,e,t){t===void 0&&(t=5);var i=!1,s=setTimeout(function(){i||vO(n,"transitionend",!0)},e+t),o=Wf(n,"transitionend",function(){i=!0},{once:!0});return function(){clearTimeout(s),o()}}function fA(n,e,t,i){t==null&&(t=EO(n)||0);var s=TO(n,t,i),o=Wf(n,"transitionend",e);return function(){s(),o()}}function $w(n,e){const t=go(n,e)||"",i=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*i}function wO(n,e){const t=$w(n,"transitionDuration"),i=$w(n,"transitionDelay"),s=fA(n,o=>{o.target===n&&(s(),e(o))},t+i)}function bO(n){n.offsetHeight}const Qw=n=>!n||typeof n=="function"?n:e=>{n.current=e};function IO(n,e){const t=Qw(n),i=Qw(e);return s=>{t&&t(s),i&&i(s)}}function mA(n,e){return G.useMemo(()=>IO(n,e),[n,e])}function AO(n){return n&&"setState"in n?zl.findDOMNode(n):n??null}const RO=ho.forwardRef(({onEnter:n,onEntering:e,onEntered:t,onExit:i,onExiting:s,onExited:o,addEndListener:u,children:h,childRef:m,...p},y)=>{const v=G.useRef(null),w=mA(v,m),C=me=>{w(AO(me))},M=me=>O=>{me&&v.current&&me(v.current,O)},q=G.useCallback(M(n),[n]),j=G.useCallback(M(e),[e]),ie=G.useCallback(M(t),[t]),ae=G.useCallback(M(i),[i]),J=G.useCallback(M(s),[s]),oe=G.useCallback(M(o),[o]),re=G.useCallback(M(u),[u]);return K.jsx(ts,{ref:y,...p,onEnter:q,onEntered:ie,onEntering:j,onExit:ae,onExited:oe,onExiting:J,addEndListener:re,nodeRef:v,children:typeof h=="function"?(me,O)=>h(me,{...O,ref:C}):ho.cloneElement(h,{ref:C})})});function SO(n){const e=G.useRef(n);return G.useEffect(()=>{e.current=n},[n]),e}function Yf(n){const e=SO(n);return G.useCallback(function(...t){return e.current&&e.current(...t)},[e])}const pA=n=>G.forwardRef((e,t)=>K.jsx("div",{...e,ref:t,className:tt(e.className,n)})),gA=pA("h4");gA.displayName="DivStyledAsH4";const _A=G.forwardRef(({className:n,bsPrefix:e,as:t=gA,...i},s)=>(e=Ot(e,"alert-heading"),K.jsx(t,{ref:s,className:tt(n,e),...i})));_A.displayName="AlertHeading";function CO(n){const e=G.useRef(n);return G.useEffect(()=>{e.current=n},[n]),e}function Js(n){const e=CO(n);return G.useCallback(function(...t){return e.current&&e.current(...t)},[e])}function DO(){const n=G.useRef(!0),e=G.useRef(()=>n.current);return G.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),e.current}function NO(n){const e=G.useRef(null);return G.useEffect(()=>{e.current=n}),e.current}const OO=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",PO=typeof document<"u",Ww=PO||OO?G.useLayoutEffect:G.useEffect,xO=["as","disabled"];function kO(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)>=0)continue;t[i]=n[i]}return t}function VO(n){return!n||n.trim()==="#"}function Ly({tagName:n,disabled:e,href:t,target:i,rel:s,role:o,onClick:u,tabIndex:h=0,type:m}){n||(t!=null||i!=null||s!=null?n="a":n="button");const p={tagName:n};if(n==="button")return[{type:m||"button",disabled:e},p];const y=w=>{if((e||n==="a"&&VO(t))&&w.preventDefault(),e){w.stopPropagation();return}u==null||u(w)},v=w=>{w.key===" "&&(w.preventDefault(),y(w))};return n==="a"&&(t||(t="#"),e&&(t=void 0)),[{role:o??"button",disabled:void 0,tabIndex:e?void 0:h,href:t,target:n==="a"?i:void 0,"aria-disabled":e||void 0,rel:n==="a"?s:void 0,onClick:y,onKeyDown:v},p]}const MO=G.forwardRef((n,e)=>{let{as:t,disabled:i}=n,s=kO(n,xO);const[o,{tagName:u}]=Ly(Object.assign({tagName:t,disabled:i},s));return K.jsx(u,Object.assign({},s,o,{ref:e}))});MO.displayName="Button";const LO=["onKeyDown"];function UO(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)>=0)continue;t[i]=n[i]}return t}function BO(n){return!n||n.trim()==="#"}const yA=G.forwardRef((n,e)=>{let{onKeyDown:t}=n,i=UO(n,LO);const[s]=Ly(Object.assign({tagName:"a"},i)),o=Js(u=>{s.onKeyDown(u),t==null||t(u)});return BO(i.href)||i.role==="button"?K.jsx("a",Object.assign({ref:e},i,s,{onKeyDown:o})):K.jsx("a",Object.assign({ref:e},i,{onKeyDown:t}))});yA.displayName="Anchor";const vA=G.forwardRef(({className:n,bsPrefix:e,as:t=yA,...i},s)=>(e=Ot(e,"alert-link"),K.jsx(t,{ref:s,className:tt(n,e),...i})));vA.displayName="AlertLink";const FO={[Xs]:"show",[so]:"show"},hh=G.forwardRef(({className:n,children:e,transitionClasses:t={},onEnter:i,...s},o)=>{const u={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...s},h=G.useCallback((m,p)=>{bO(m),i==null||i(m,p)},[i]);return K.jsx(RO,{ref:o,addEndListener:wO,...u,onEnter:h,childRef:hA(e),children:(m,p)=>G.cloneElement(e,{...p,className:tt("fade",n,e.props.className,FO[m],t[m])})})});hh.displayName="Fade";const zO={"aria-label":Gr.string,onClick:Gr.func,variant:Gr.oneOf(["white"])},bm=G.forwardRef(({className:n,variant:e,"aria-label":t="Close",...i},s)=>K.jsx("button",{ref:s,type:"button",className:tt("btn-close",e&&`btn-close-${e}`,n),"aria-label":t,...i}));bm.displayName="CloseButton";bm.propTypes=zO;const EA=G.forwardRef((n,e)=>{const{bsPrefix:t,show:i=!0,closeLabel:s="Close alert",closeVariant:o,className:u,children:h,variant:m="primary",onClose:p,dismissible:y,transition:v=hh,...w}=XN(n,{show:"onClose"}),C=Ot(t,"alert"),M=Yf(ie=>{p&&p(!1,ie)}),q=v===!0?hh:v,j=K.jsxs("div",{role:"alert",...q?void 0:w,ref:e,className:tt(u,C,m&&`${C}-${m}`,y&&`${C}-dismissible`),children:[y&&K.jsx(bm,{onClick:M,"aria-label":s,variant:o}),h]});return q?K.jsx(q,{unmountOnExit:!0,...w,ref:void 0,in:i,children:j}):i?j:null});EA.displayName="Alert";const qO=Object.assign(EA,{Link:vA,Heading:_A}),dh=G.forwardRef(({as:n,bsPrefix:e,variant:t="primary",size:i,active:s=!1,disabled:o=!1,className:u,...h},m)=>{const p=Ot(e,"btn"),[y,{tagName:v}]=Ly({tagName:n,disabled:o,...h}),w=v;return K.jsx(w,{...y,...h,ref:m,disabled:o,className:tt(u,p,s&&"active",t&&`${p}-${t}`,i&&`${p}-${i}`,h.href&&o&&"disabled")})});dh.displayName="Button";function jO(n){const e=G.useRef(n);return e.current=n,e}function HO(n){const e=jO(n);G.useEffect(()=>()=>e.current(),[])}function GO(n,e){return G.Children.toArray(n).some(t=>G.isValidElement(t)&&t.type===e)}function KO({as:n,bsPrefix:e,className:t,...i}){e=Ot(e,"col");const s=tO(),o=nO(),u=[],h=[];return s.forEach(m=>{const p=i[m];delete i[m];let y,v,w;typeof p=="object"&&p!=null?{span:y,offset:v,order:w}=p:y=p;const C=m!==o?`-${m}`:"";y&&u.push(y===!0?`${e}${C}`:`${e}${C}-${y}`),w!=null&&h.push(`order${C}-${w}`),v!=null&&h.push(`offset${C}-${v}`)}),[{...i,className:tt(t,...u,...h)},{as:n,bsPrefix:e,spans:u}]}const TA=G.forwardRef((n,e)=>{const[{className:t,...i},{as:s="div",bsPrefix:o,spans:u}]=KO(n);return K.jsx(s,{...i,ref:e,className:tt(t,!u.length&&o)})});TA.displayName="Col";var $O=Function.prototype.bind.call(Function.prototype.call,[].slice);function Cl(n,e){return $O(n.querySelectorAll(e))}function Yw(n,e){if(n.contains)return n.contains(e);if(n.compareDocumentPosition)return n===e||!!(n.compareDocumentPosition(e)&16)}const QO="data-rr-ui-";function WO(n){return`${QO}${n}`}const wA=G.createContext(pu?window:void 0);wA.Provider;function Uy(){return G.useContext(wA)}const YO={type:Gr.string,tooltip:Gr.bool,as:Gr.elementType},Im=G.forwardRef(({as:n="div",className:e,type:t="valid",tooltip:i=!1,...s},o)=>K.jsx(n,{...s,ref:o,className:tt(e,`${t}-${i?"tooltip":"feedback"}`)}));Im.displayName="Feedback";Im.propTypes=YO;const Qr=G.createContext({}),By=G.forwardRef(({id:n,bsPrefix:e,className:t,type:i="checkbox",isValid:s=!1,isInvalid:o=!1,as:u="input",...h},m)=>{const{controlId:p}=G.useContext(Qr);return e=Ot(e,"form-check-input"),K.jsx(u,{...h,ref:m,type:i,id:n||p,className:tt(t,e,s&&"is-valid",o&&"is-invalid")})});By.displayName="FormCheckInput";const Xf=G.forwardRef(({bsPrefix:n,className:e,htmlFor:t,...i},s)=>{const{controlId:o}=G.useContext(Qr);return n=Ot(n,"form-check-label"),K.jsx("label",{...i,ref:s,htmlFor:t||o,className:tt(e,n)})});Xf.displayName="FormCheckLabel";const bA=G.forwardRef(({id:n,bsPrefix:e,bsSwitchPrefix:t,inline:i=!1,reverse:s=!1,disabled:o=!1,isValid:u=!1,isInvalid:h=!1,feedbackTooltip:m=!1,feedback:p,feedbackType:y,className:v,style:w,title:C="",type:M="checkbox",label:q,children:j,as:ie="input",...ae},J)=>{e=Ot(e,"form-check"),t=Ot(t,"form-switch");const{controlId:oe}=G.useContext(Qr),re=G.useMemo(()=>({controlId:n||oe}),[oe,n]),me=!j&&q!=null&&q!==!1||GO(j,Xf),O=K.jsx(By,{...ae,type:M==="switch"?"checkbox":M,ref:J,isValid:u,isInvalid:h,disabled:o,as:ie});return K.jsx(Qr.Provider,{value:re,children:K.jsx("div",{style:w,className:tt(v,me&&e,i&&`${e}-inline`,s&&`${e}-reverse`,M==="switch"&&t),children:j||K.jsxs(K.Fragment,{children:[O,me&&K.jsx(Xf,{title:C,children:q}),p&&K.jsx(Im,{type:y,tooltip:m,children:p})]})})})});bA.displayName="FormCheck";const Jf=Object.assign(bA,{Input:By,Label:Xf}),IA=G.forwardRef(({bsPrefix:n,type:e,size:t,htmlSize:i,id:s,className:o,isValid:u=!1,isInvalid:h=!1,plaintext:m,readOnly:p,as:y="input",...v},w)=>{const{controlId:C}=G.useContext(Qr);return n=Ot(n,"form-control"),K.jsx(y,{...v,type:e,size:i,ref:w,readOnly:p,id:s||C,className:tt(o,m?`${n}-plaintext`:n,t&&`${n}-${t}`,e==="color"&&`${n}-color`,u&&"is-valid",h&&"is-invalid")})});IA.displayName="FormControl";const XO=Object.assign(IA,{Feedback:Im}),AA=G.forwardRef(({className:n,bsPrefix:e,as:t="div",...i},s)=>(e=Ot(e,"form-floating"),K.jsx(t,{ref:s,className:tt(n,e),...i})));AA.displayName="FormFloating";const Fy=G.forwardRef(({controlId:n,as:e="div",...t},i)=>{const s=G.useMemo(()=>({controlId:n}),[n]);return K.jsx(Qr.Provider,{value:s,children:K.jsx(e,{...t,ref:i})})});Fy.displayName="FormGroup";const RA=G.forwardRef(({as:n="label",bsPrefix:e,column:t=!1,visuallyHidden:i=!1,className:s,htmlFor:o,...u},h)=>{const{controlId:m}=G.useContext(Qr);e=Ot(e,"form-label");let p="col-form-label";typeof t=="string"&&(p=`${p} ${p}-${t}`);const y=tt(s,e,i&&"visually-hidden",t&&p);return o=o||m,t?K.jsx(TA,{ref:h,as:"label",className:y,htmlFor:o,...u}):K.jsx(n,{ref:h,className:y,htmlFor:o,...u})});RA.displayName="FormLabel";const SA=G.forwardRef(({bsPrefix:n,className:e,id:t,...i},s)=>{const{controlId:o}=G.useContext(Qr);return n=Ot(n,"form-range"),K.jsx("input",{...i,type:"range",ref:s,className:tt(e,n),id:t||o})});SA.displayName="FormRange";const CA=G.forwardRef(({bsPrefix:n,size:e,htmlSize:t,className:i,isValid:s=!1,isInvalid:o=!1,id:u,...h},m)=>{const{controlId:p}=G.useContext(Qr);return n=Ot(n,"form-select"),K.jsx("select",{...h,size:t,ref:m,className:tt(i,n,e&&`${n}-${e}`,s&&"is-valid",o&&"is-invalid"),id:u||p})});CA.displayName="FormSelect";const DA=G.forwardRef(({bsPrefix:n,className:e,as:t="small",muted:i,...s},o)=>(n=Ot(n,"form-text"),K.jsx(t,{...s,ref:o,className:tt(e,n,i&&"text-muted")})));DA.displayName="FormText";const NA=G.forwardRef((n,e)=>K.jsx(Jf,{...n,ref:e,type:"switch"}));NA.displayName="Switch";const JO=Object.assign(NA,{Input:Jf.Input,Label:Jf.Label}),OA=G.forwardRef(({bsPrefix:n,className:e,children:t,controlId:i,label:s,...o},u)=>(n=Ot(n,"form-floating"),K.jsxs(Fy,{ref:u,className:tt(e,n),controlId:i,...o,children:[t,K.jsx("label",{htmlFor:i,children:s})]})));OA.displayName="FloatingLabel";const ZO={_ref:Gr.any,validated:Gr.bool,as:Gr.elementType},zy=G.forwardRef(({className:n,validated:e,as:t="form",...i},s)=>K.jsx(t,{...i,ref:s,className:tt(n,e&&"was-validated")}));zy.displayName="Form";zy.propTypes=ZO;const Mn=Object.assign(zy,{Group:Fy,Control:XO,Floating:AA,Check:Jf,Switch:JO,Label:RA,Text:DA,Range:SA,Select:CA,FloatingLabel:OA}),Xw=n=>!n||typeof n=="function"?n:e=>{n.current=e};function eP(n,e){const t=Xw(n),i=Xw(e);return s=>{t&&t(s),i&&i(s)}}function qy(n,e){return G.useMemo(()=>eP(n,e),[n,e])}var If;function Jw(n){if((!If&&If!==0||n)&&pu){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),If=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return If}function tP(){return G.useState(null)}function T_(n){n===void 0&&(n=wm());try{var e=n.activeElement;return!e||!e.nodeName?null:e}catch{return n.body}}function nP(n){const e=G.useRef(n);return e.current=n,e}function iP(n){const e=nP(n);G.useEffect(()=>()=>e.current(),[])}function rP(n=document){const e=n.defaultView;return Math.abs(e.innerWidth-n.documentElement.clientWidth)}const Zw=WO("modal-open");class jy{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:i=!1}={}){this.handleContainerOverflow=t,this.isRTL=i,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return rP(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},i=this.isRTL?"paddingLeft":"paddingRight",s=this.getElement();e.style={overflow:s.style.overflow,[i]:s.style[i]},e.scrollBarWidth&&(t[i]=`${parseInt(go(s,i)||"0",10)+e.scrollBarWidth}px`),s.setAttribute(Zw,""),go(s,t)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(Zw),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return t!==-1||(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),t!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t}remove(e){const t=this.modals.indexOf(e);t!==-1&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const w_=(n,e)=>pu?n==null?(e||wm()).body:(typeof n=="function"&&(n=n()),n&&"current"in n&&(n=n.current),n&&("nodeType"in n||n.getBoundingClientRect)?n:null):null;function sP(n,e){const t=Uy(),[i,s]=G.useState(()=>w_(n,t==null?void 0:t.document));if(!i){const o=w_(n);o&&s(o)}return G.useEffect(()=>{},[e,i]),G.useEffect(()=>{const o=w_(n);o!==i&&s(o)},[n,i]),i}function aP({children:n,in:e,onExited:t,mountOnEnter:i,unmountOnExit:s}){const o=G.useRef(null),u=G.useRef(e),h=Js(t);G.useEffect(()=>{e?u.current=!0:h(o.current)},[e,h]);const m=qy(o,n.ref),p=G.cloneElement(n,{ref:m});return e?p:s||!u.current&&i?null:p}const oP=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function lP(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)>=0)continue;t[i]=n[i]}return t}function uP(n){let{onEnter:e,onEntering:t,onEntered:i,onExit:s,onExiting:o,onExited:u,addEndListener:h,children:m}=n,p=lP(n,oP);const y=G.useRef(null),v=qy(y,hA(m)),w=oe=>re=>{oe&&y.current&&oe(y.current,re)},C=G.useCallback(w(e),[e]),M=G.useCallback(w(t),[t]),q=G.useCallback(w(i),[i]),j=G.useCallback(w(s),[s]),ie=G.useCallback(w(o),[o]),ae=G.useCallback(w(u),[u]),J=G.useCallback(w(h),[h]);return Object.assign({},p,{nodeRef:y},e&&{onEnter:C},t&&{onEntering:M},i&&{onEntered:q},s&&{onExit:j},o&&{onExiting:ie},u&&{onExited:ae},h&&{addEndListener:J},{children:typeof m=="function"?(oe,re)=>m(oe,Object.assign({},re,{ref:v})):G.cloneElement(m,{ref:v})})}const cP=["component"];function hP(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)>=0)continue;t[i]=n[i]}return t}const dP=G.forwardRef((n,e)=>{let{component:t}=n,i=hP(n,cP);const s=uP(i);return K.jsx(t,Object.assign({ref:e},s))});function fP({in:n,onTransition:e}){const t=G.useRef(null),i=G.useRef(!0),s=Js(e);return Ww(()=>{if(!t.current)return;let o=!1;return s({in:n,element:t.current,initial:i.current,isStale:()=>o}),()=>{o=!0}},[n,s]),Ww(()=>(i.current=!1,()=>{i.current=!0}),[]),t}function mP({children:n,in:e,onExited:t,onEntered:i,transition:s}){const[o,u]=G.useState(!e);e&&o&&u(!1);const h=fP({in:!!e,onTransition:p=>{const y=()=>{p.isStale()||(p.in?i==null||i(p.element,p.initial):(u(!0),t==null||t(p.element)))};Promise.resolve(s(p)).then(y,v=>{throw p.in||u(!0),v})}}),m=qy(h,n.ref);return o&&!e?null:G.cloneElement(n,{ref:m})}function eb(n,e,t){return n?K.jsx(dP,Object.assign({},t,{component:n})):e?K.jsx(mP,Object.assign({},t,{transition:e})):K.jsx(aP,Object.assign({},t))}const pP=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function gP(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)>=0)continue;t[i]=n[i]}return t}let b_;function _P(n){return b_||(b_=new jy({ownerDocument:n==null?void 0:n.document})),b_}function yP(n){const e=Uy(),t=n||_P(e),i=G.useRef({dialog:null,backdrop:null});return Object.assign(i.current,{add:()=>t.add(i.current),remove:()=>t.remove(i.current),isTopModal:()=>t.isTopModal(i.current),setDialogRef:G.useCallback(s=>{i.current.dialog=s},[]),setBackdropRef:G.useCallback(s=>{i.current.backdrop=s},[])})}const PA=G.forwardRef((n,e)=>{let{show:t=!1,role:i="dialog",className:s,style:o,children:u,backdrop:h=!0,keyboard:m=!0,onBackdropClick:p,onEscapeKeyDown:y,transition:v,runTransition:w,backdropTransition:C,runBackdropTransition:M,autoFocus:q=!0,enforceFocus:j=!0,restoreFocus:ie=!0,restoreFocusOptions:ae,renderDialog:J,renderBackdrop:oe=$e=>K.jsx("div",Object.assign({},$e)),manager:re,container:me,onShow:O,onHide:R=()=>{},onExit:A,onExited:N,onExiting:k,onEnter:U,onEntering:D,onEntered:ft}=n,mt=gP(n,pP);const le=Uy(),Ie=sP(me),pe=yP(re),qe=DO(),P=NO(t),[ee,_e]=G.useState(!t),ce=G.useRef(null);G.useImperativeHandle(e,()=>pe,[pe]),pu&&!P&&t&&(ce.current=T_(le==null?void 0:le.document)),t&&ee&&_e(!1);const de=Js(()=>{if(pe.add(),Ue.current=Wf(document,"keydown",Le),nt.current=Wf(document,"focus",()=>setTimeout(Ce),!0),O&&O(),q){var $e,qn;const Ci=T_(($e=(qn=pe.dialog)==null?void 0:qn.ownerDocument)!=null?$e:le==null?void 0:le.document);pe.dialog&&Ci&&!Yw(pe.dialog,Ci)&&(ce.current=Ci,pe.dialog.focus())}}),Se=Js(()=>{if(pe.remove(),Ue.current==null||Ue.current(),nt.current==null||nt.current(),ie){var $e;($e=ce.current)==null||$e.focus==null||$e.focus(ae),ce.current=null}});G.useEffect(()=>{!t||!Ie||de()},[t,Ie,de]),G.useEffect(()=>{ee&&Se()},[ee,Se]),iP(()=>{Se()});const Ce=Js(()=>{if(!j||!qe()||!pe.isTopModal())return;const $e=T_(le==null?void 0:le.document);pe.dialog&&$e&&!Yw(pe.dialog,$e)&&pe.dialog.focus()}),ut=Js($e=>{$e.target===$e.currentTarget&&(p==null||p($e),h===!0&&R())}),Le=Js($e=>{m&&_O($e)&&pe.isTopModal()&&(y==null||y($e),$e.defaultPrevented||R())}),nt=G.useRef(),Ue=G.useRef(),Ft=(...$e)=>{_e(!0),N==null||N(...$e)};if(!Ie)return null;const vn=Object.assign({role:i,ref:pe.setDialogRef,"aria-modal":i==="dialog"?!0:void 0},mt,{style:o,className:s,tabIndex:-1});let Zt=J?J(vn):K.jsx("div",Object.assign({},vn,{children:G.cloneElement(u,{role:"document"})}));Zt=eb(v,w,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!t,onExit:A,onExiting:k,onExited:Ft,onEnter:U,onEntering:D,onEntered:ft,children:Zt});let Dn=null;return h&&(Dn=oe({ref:pe.setBackdropRef,onClick:ut}),Dn=eb(C,M,{in:!!t,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Dn})),K.jsx(K.Fragment,{children:zl.createPortal(K.jsxs(K.Fragment,{children:[Dn,Zt]}),Ie)})});PA.displayName="Modal";const vP=Object.assign(PA,{Manager:jy});function EP(n,e){return n.classList?n.classList.contains(e):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+e+" ")!==-1}function TP(n,e){n.classList?n.classList.add(e):EP(n,e)||(typeof n.className=="string"?n.className=n.className+" "+e:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+e))}function tb(n,e){return n.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function wP(n,e){n.classList?n.classList.remove(e):typeof n.className=="string"?n.className=tb(n.className,e):n.setAttribute("class",tb(n.className&&n.className.baseVal||"",e))}const Dl={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class bP extends jy{adjustAndStore(e,t,i){const s=t.style[e];t.dataset[e]=s,go(t,{[e]:`${parseFloat(go(t,e))+i}px`})}restore(e,t){const i=t.dataset[e];i!==void 0&&(delete t.dataset[e],go(t,{[e]:i}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();if(TP(t,"modal-open"),!e.scrollBarWidth)return;const i=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";Cl(t,Dl.FIXED_CONTENT).forEach(o=>this.adjustAndStore(i,o,e.scrollBarWidth)),Cl(t,Dl.STICKY_CONTENT).forEach(o=>this.adjustAndStore(s,o,-e.scrollBarWidth)),Cl(t,Dl.NAVBAR_TOGGLER).forEach(o=>this.adjustAndStore(s,o,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();wP(t,"modal-open");const i=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";Cl(t,Dl.FIXED_CONTENT).forEach(o=>this.restore(i,o)),Cl(t,Dl.STICKY_CONTENT).forEach(o=>this.restore(s,o)),Cl(t,Dl.NAVBAR_TOGGLER).forEach(o=>this.restore(s,o))}}let I_;function IP(n){return I_||(I_=new bP(n)),I_}const xA=G.forwardRef(({className:n,bsPrefix:e,as:t="div",...i},s)=>(e=Ot(e,"modal-body"),K.jsx(t,{ref:s,className:tt(n,e),...i})));xA.displayName="ModalBody";const kA=G.createContext({onHide(){}}),Hy=G.forwardRef(({bsPrefix:n,className:e,contentClassName:t,centered:i,size:s,fullscreen:o,children:u,scrollable:h,...m},p)=>{n=Ot(n,"modal");const y=`${n}-dialog`,v=typeof o=="string"?`${n}-fullscreen-${o}`:`${n}-fullscreen`;return K.jsx("div",{...m,ref:p,className:tt(y,e,s&&`${n}-${s}`,i&&`${y}-centered`,h&&`${y}-scrollable`,o&&v),children:K.jsx("div",{className:tt(`${n}-content`,t),children:u})})});Hy.displayName="ModalDialog";const VA=G.forwardRef(({className:n,bsPrefix:e,as:t="div",...i},s)=>(e=Ot(e,"modal-footer"),K.jsx(t,{ref:s,className:tt(n,e),...i})));VA.displayName="ModalFooter";const AP=G.forwardRef(({closeLabel:n="Close",closeVariant:e,closeButton:t=!1,onHide:i,children:s,...o},u)=>{const h=G.useContext(kA),m=Yf(()=>{h==null||h.onHide(),i==null||i()});return K.jsxs("div",{ref:u,...o,children:[s,t&&K.jsx(bm,{"aria-label":n,variant:e,onClick:m})]})}),MA=G.forwardRef(({bsPrefix:n,className:e,closeLabel:t="Close",closeButton:i=!1,...s},o)=>(n=Ot(n,"modal-header"),K.jsx(AP,{ref:o,...s,className:tt(e,n),closeLabel:t,closeButton:i})));MA.displayName="ModalHeader";const RP=pA("h4"),LA=G.forwardRef(({className:n,bsPrefix:e,as:t=RP,...i},s)=>(e=Ot(e,"modal-title"),K.jsx(t,{ref:s,className:tt(n,e),...i})));LA.displayName="ModalTitle";function SP(n){return K.jsx(hh,{...n,timeout:null})}function CP(n){return K.jsx(hh,{...n,timeout:null})}const UA=G.forwardRef(({bsPrefix:n,className:e,style:t,dialogClassName:i,contentClassName:s,children:o,dialogAs:u=Hy,"data-bs-theme":h,"aria-labelledby":m,"aria-describedby":p,"aria-label":y,show:v=!1,animation:w=!0,backdrop:C=!0,keyboard:M=!0,onEscapeKeyDown:q,onShow:j,onHide:ie,container:ae,autoFocus:J=!0,enforceFocus:oe=!0,restoreFocus:re=!0,restoreFocusOptions:me,onEntered:O,onExit:R,onExiting:A,onEnter:N,onEntering:k,onExited:U,backdropClassName:D,manager:ft,...mt},le)=>{const[Ie,pe]=G.useState({}),[qe,P]=G.useState(!1),ee=G.useRef(!1),_e=G.useRef(!1),ce=G.useRef(null),[de,Se]=tP(),Ce=mA(le,Se),ut=Yf(ie),Le=iO();n=Ot(n,"modal");const nt=G.useMemo(()=>({onHide:ut}),[ut]);function Ue(){return ft||IP({isRTL:Le})}function Ft(Ae){if(!pu)return;const ct=Ue().getScrollbarWidth()>0,ai=Ae.scrollHeight>wm(Ae).documentElement.clientHeight;pe({paddingRight:ct&&!ai?Jw():void 0,paddingLeft:!ct&&ai?Jw():void 0})}const vn=Yf(()=>{de&&Ft(de.dialog)});HO(()=>{X_(window,"resize",vn),ce.current==null||ce.current()});const Zt=()=>{ee.current=!0},Dn=Ae=>{ee.current&&de&&Ae.target===de.dialog&&(_e.current=!0),ee.current=!1},$e=()=>{P(!0),ce.current=fA(de.dialog,()=>{P(!1)})},qn=Ae=>{Ae.target===Ae.currentTarget&&$e()},Ci=Ae=>{if(C==="static"){qn(Ae);return}if(_e.current||Ae.target!==Ae.currentTarget){_e.current=!1;return}ie==null||ie()},cs=Ae=>{M?q==null||q(Ae):(Ae.preventDefault(),C==="static"&&$e())},hs=(Ae,ct)=>{Ae&&Ft(Ae),N==null||N(Ae,ct)},mr=Ae=>{ce.current==null||ce.current(),R==null||R(Ae)},ds=(Ae,ct)=>{k==null||k(Ae,ct),dA(window,"resize",vn)},Nu=Ae=>{Ae&&(Ae.style.display=""),U==null||U(Ae),X_(window,"resize",vn)},ba=G.useCallback(Ae=>K.jsx("div",{...Ae,className:tt(`${n}-backdrop`,D,!w&&"show")}),[w,D,n]),hn={...t,...Ie};hn.display="block";const Bo=Ae=>K.jsx("div",{role:"dialog",...Ae,style:hn,className:tt(e,n,qe&&`${n}-static`,!w&&"show"),onClick:C?Ci:void 0,onMouseUp:Dn,"data-bs-theme":h,"aria-label":y,"aria-labelledby":m,"aria-describedby":p,children:K.jsx(u,{...mt,onMouseDown:Zt,className:i,contentClassName:s,children:o})});return K.jsx(kA.Provider,{value:nt,children:K.jsx(vP,{show:v,ref:Ce,backdrop:C,container:ae,keyboard:!0,autoFocus:J,enforceFocus:oe,restoreFocus:re,restoreFocusOptions:me,onEscapeKeyDown:cs,onShow:j,onHide:ie,onEnter:hs,onEntering:ds,onEntered:O,onExit:mr,onExiting:A,onExited:Nu,manager:Ue(),transition:w?SP:void 0,backdropTransition:w?CP:void 0,renderBackdrop:ba,renderDialog:Bo})})});UA.displayName="Modal";const Ji=Object.assign(UA,{Body:xA,Header:MA,Title:LA,Footer:VA,Dialog:Hy,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});var A_={exports:{}},nb;function DP(){return nb||(nb=1,(()=>{var n={d:(o,u)=>{for(var h in u)n.o(u,h)&&!n.o(o,h)&&Object.defineProperty(o,h,{enumerable:!0,get:u[h]})},o:(o,u)=>Object.prototype.hasOwnProperty.call(o,u),r:o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},e={};function t(o,u){for(var h=0;h<u.length;h++){var m=u[h];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(o,m.key,m)}}n.r(e),n.d(e,{default:()=>s});var i=function(){function o(){(function(m,p){if(!(m instanceof p))throw new TypeError("Cannot call a class as a function")})(this,o)}var u,h;return u=o,h=[{key:"changeHeightWidth",value:function(m,p,y,v,w,C){return y>v&&(m=Math.round(m*v/y),y=v),m>p&&(y=Math.round(y*p/m),m=p),w&&y<w&&(m=Math.round(m*w/y),y=w),C&&m<C&&(y=Math.round(y*C/m),m=C),{height:m,width:y}}},{key:"resizeAndRotateImage",value:function(m,p,y,v,w){var C=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"jpeg",M=arguments.length>6&&arguments[6]!==void 0?arguments[6]:100,q=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,j=M/100,ie=document.createElement("canvas"),ae=m.width,J=m.height,oe=this.changeHeightWidth(J,y,ae,p,v,w);!q||q!==90&&q!==270?(ie.width=oe.width,ie.height=oe.height):(ie.width=oe.height,ie.height=oe.width),ae=oe.width,J=oe.height;var re=ie.getContext("2d");return re.fillStyle="rgba(0, 0, 0, 0)",re.fillRect(0,0,ae,J),re.imageSmoothingEnabled&&re.imageSmoothingQuality&&(re.imageSmoothingQuality="high"),q&&(re.rotate(q*Math.PI/180),q===90?re.translate(0,-ie.width):q===180?re.translate(-ie.width,-ie.height):q===270?re.translate(-ie.height,0):q!==0&&q!==360||re.translate(0,0)),re.drawImage(m,0,0,ae,J),ie.toDataURL("image/".concat(C),j)}},{key:"b64toByteArrays",value:function(m,p){for(var y=atob(m.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),v=[],w=0;w<y.length;w+=512){for(var C=y.slice(w,w+512),M=new Array(C.length),q=0;q<C.length;q++)M[q]=C.charCodeAt(q);var j=new Uint8Array(M);v.push(j)}return v}},{key:"b64toBlob",value:function(m,p){var y=this.b64toByteArrays(m,p);return new Blob(y,{type:p,lastModified:new Date})}},{key:"b64toFile",value:function(m,p,y){var v=this.b64toByteArrays(m,y);return new File(v,p,{type:y,lastModified:new Date})}},{key:"createResizedImage",value:function(m,p,y,v,w,C,M){var q=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"base64",j=arguments.length>8&&arguments[8]!==void 0?arguments[8]:null,ie=arguments.length>9&&arguments[9]!==void 0?arguments[9]:null,ae=new FileReader;if(!m)throw Error("File Not Found!");if(m.type&&!m.type.includes("image"))throw Error("File Is NOT Image!");ae.readAsDataURL(m),ae.onload=function(){var J=new Image;J.src=ae.result,J.onload=function(){var oe=o.resizeAndRotateImage(J,p,y,j,ie,v,w,C),re="image/".concat(v);switch(q){case"blob":var me=o.b64toBlob(oe,re);M(me);break;case"base64":M(oe);break;case"file":var O=m.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(v.toString()),R=o.b64toFile(oe,O,re);M(R);break;default:M(oe)}}},ae.onerror=function(J){throw Error(J)}}}],h&&t(u,h),o}();const s={imageFileResizer:function(o,u,h,m,p,y,v,w,C,M){return i.createResizedImage(o,u,h,m,p,y,v,w,C,M)}};A_.exports=e})()),A_.exports}DP();var ib={};/**
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
 */const BA=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},NP=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],u=n[t++],h=n[t++],m=((s&7)<<18|(o&63)<<12|(u&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const o=n[t++],u=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return e.join("")},FA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,h=u?n[s+1]:0,m=s+2<n.length,p=m?n[s+2]:0,y=o>>2,v=(o&3)<<4|h>>4;let w=(h&15)<<2|p>>6,C=p&63;m||(C=64,u||(w=64)),i.push(t[y],t[v],t[w],t[C])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(BA(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):NP(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],h=s<n.length?t[n.charAt(s)]:0;++s;const p=s<n.length?t[n.charAt(s)]:64;++s;const v=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||h==null||p==null||v==null)throw new OP;const w=o<<2|h>>4;if(i.push(w),p!==64){const C=h<<4&240|p>>2;if(i.push(C),v!==64){const M=p<<6&192|v;i.push(M)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class OP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PP=function(n){const e=BA(n);return FA.encodeByteArray(e,!0)},Zf=function(n){return PP(n).replace(/\./g,"")},zA=function(n){try{return FA.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function em(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!xP(t)||(n[t]=em(n[t],e[t]));return n}function xP(n){return n!=="__proto__"}/**
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
 */function qA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kP=()=>qA().__FIREBASE_DEFAULTS__,VP=()=>{if(typeof process>"u"||typeof ib>"u")return;const n=ib.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},MP=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&zA(n[1]);return e&&JSON.parse(e)},Am=()=>{try{return kP()||VP()||MP()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},jA=n=>{var e,t;return(t=(e=Am())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},HA=n=>{const e=jA(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},GA=()=>{var n;return(n=Am())===null||n===void 0?void 0:n.config},KA=n=>{var e;return(e=Am())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class LP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function $A(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Zf(JSON.stringify(t)),Zf(JSON.stringify(u)),""].join(".")}/**
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
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function Gy(){var n;const e=(n=Am())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BP(){return typeof window<"u"||QA()}function QA(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function FP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ky(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YA(){const n=bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function XA(){return!Gy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fh(){try{return typeof indexedDB=="object"}catch{return!1}}function zP(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const qP="FirebaseError";class Rn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=qP,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Po.prototype.create)}}class Po{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],u=o?jP(o,i):"Error",h=`${this.serviceName}: ${u} (${s}).`;return new Rn(s,h,i)}}function jP(n,e){return n.replace(HP,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const HP=/\{\$([^}]+)}/g;/**
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
 */function rb(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function GP(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Yl(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const o=n[s],u=e[s];if(sb(o)&&sb(u)){if(!Yl(o,u))return!1}else if(o!==u)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function sb(n){return n!==null&&typeof n=="object"}/**
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
 */function gu(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ql(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,o]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function $c(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function JA(n,e){const t=new KP(n,e);return t.subscribe.bind(t)}class KP{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");$P(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=R_),s.error===void 0&&(s.error=R_),s.complete===void 0&&(s.complete=R_);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $P(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function R_(){}/**
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
 */function ve(n){return n&&n._delegate?n._delegate:n}class Ri{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const io="[DEFAULT]";/**
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
 */class QP{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new LP;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YP(e))try{this.getOrInitializeService({instanceIdentifier:io})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=io){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=io){return this.instances.has(e)}getOptions(e=io){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);i===h&&u.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:WP(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=io){return this.component?this.component.multipleInstances?e:io:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WP(n){return n===io?void 0:n}function YP(n){return n.instantiationMode==="EAGER"}/**
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
 */class ZA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new QP(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const $y=[];var Me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Me||(Me={}));const eR={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},XP=Me.INFO,JP={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},ZP=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=JP[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rm{constructor(e){this.name=e,this._logLevel=XP,this._logHandler=ZP,this._userLogHandler=null,$y.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}function ex(n){$y.forEach(e=>{e.setLogLevel(n)})}function tx(n,e){for(const t of $y){let i=null;e&&e.level&&(i=eR[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(s,o,...u)=>{const h=u.map(m=>{if(m==null)return null;if(typeof m=="string")return m;if(typeof m=="number"||typeof m=="boolean")return m.toString();if(m instanceof Error)return m.message;try{return JSON.stringify(m)}catch{return null}}).filter(m=>m).join(" ");o>=(i??s.logLevel)&&n({level:Me[o].toLowerCase(),message:h,args:u,type:s.name})}}}const nx=(n,e)=>e.some(t=>n instanceof t);let ab,ob;function ix(){return ab||(ab=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rx(){return ob||(ob=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tR=new WeakMap,J_=new WeakMap,nR=new WeakMap,S_=new WeakMap,Qy=new WeakMap;function sx(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{t(ia(n.result)),s()},u=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&tR.set(t,n)}).catch(()=>{}),Qy.set(e,n),e}function ax(n){if(J_.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{t(),s()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});J_.set(n,e)}let Z_={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return J_.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nR.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ia(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ox(n){Z_=n(Z_)}function lx(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(C_(this),e,...t);return nR.set(i,e.sort?e.sort():[e]),ia(i)}:rx().includes(n)?function(...e){return n.apply(C_(this),e),ia(tR.get(this))}:function(...e){return ia(n.apply(C_(this),e))}}function ux(n){return typeof n=="function"?lx(n):(n instanceof IDBTransaction&&ax(n),nx(n,ix())?new Proxy(n,Z_):n)}function ia(n){if(n instanceof IDBRequest)return sx(n);if(S_.has(n))return S_.get(n);const e=ux(n);return e!==n&&(S_.set(n,e),Qy.set(e,n)),e}const C_=n=>Qy.get(n);function cx(n,e,{blocked:t,upgrade:i,blocking:s,terminated:o}={}){const u=indexedDB.open(n,e),h=ia(u);return i&&u.addEventListener("upgradeneeded",m=>{i(ia(u.result),m.oldVersion,m.newVersion,ia(u.transaction),m)}),t&&u.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),h.then(m=>{o&&m.addEventListener("close",()=>o()),s&&m.addEventListener("versionchange",p=>s(p.oldVersion,p.newVersion,p))}).catch(()=>{}),h}const hx=["get","getKey","getAll","getAllKeys","count"],dx=["put","add","delete","clear"],D_=new Map;function lb(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(D_.get(e))return D_.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=dx.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||hx.includes(t)))return;const o=async function(u,...h){const m=this.transaction(u,s?"readwrite":"readonly");let p=m.store;return i&&(p=p.index(h.shift())),(await Promise.all([p[t](...h),s&&m.done]))[0]};return D_.set(e,o),o}ox(n=>({...n,get:(e,t,i)=>lb(e,t)||n.get(e,t,i),has:(e,t)=>!!lb(e,t)||n.has(e,t)}));/**
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
 */class fx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(mx(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function mx(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tm="@firebase/app",ey="0.10.17";/**
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
 */const Wr=new Rm("@firebase/app"),px="@firebase/app-compat",gx="@firebase/analytics-compat",_x="@firebase/analytics",yx="@firebase/app-check-compat",vx="@firebase/app-check",Ex="@firebase/auth",Tx="@firebase/auth-compat",wx="@firebase/database",bx="@firebase/data-connect",Ix="@firebase/database-compat",Ax="@firebase/functions",Rx="@firebase/functions-compat",Sx="@firebase/installations",Cx="@firebase/installations-compat",Dx="@firebase/messaging",Nx="@firebase/messaging-compat",Ox="@firebase/performance",Px="@firebase/performance-compat",xx="@firebase/remote-config",kx="@firebase/remote-config-compat",Vx="@firebase/storage",Mx="@firebase/storage-compat",Lx="@firebase/firestore",Ux="@firebase/vertexai",Bx="@firebase/firestore-compat",Fx="firebase",zx="11.1.0";/**
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
 */const aa="[DEFAULT]",qx={[tm]:"fire-core",[px]:"fire-core-compat",[_x]:"fire-analytics",[gx]:"fire-analytics-compat",[vx]:"fire-app-check",[yx]:"fire-app-check-compat",[Ex]:"fire-auth",[Tx]:"fire-auth-compat",[wx]:"fire-rtdb",[bx]:"fire-data-connect",[Ix]:"fire-rtdb-compat",[Ax]:"fire-fn",[Rx]:"fire-fn-compat",[Sx]:"fire-iid",[Cx]:"fire-iid-compat",[Dx]:"fire-fcm",[Nx]:"fire-fcm-compat",[Ox]:"fire-perf",[Px]:"fire-perf-compat",[xx]:"fire-rc",[kx]:"fire-rc-compat",[Vx]:"fire-gcs",[Mx]:"fire-gcs-compat",[Lx]:"fire-fst",[Bx]:"fire-fst-compat",[Ux]:"fire-vertex","fire-js":"fire-js",[Fx]:"fire-js-all"};/**
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
 */const oa=new Map,Xl=new Map,Jl=new Map;function mh(n,e){try{n.container.addComponent(e)}catch(t){Wr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function iR(n,e){n.container.addOrOverwriteComponent(e)}function Yr(n){const e=n.name;if(Jl.has(e))return Wr.debug(`There were multiple attempts to register component ${e}.`),!1;Jl.set(e,n);for(const t of oa.values())mh(t,n);for(const t of Xl.values())mh(t,n);return!0}function _u(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function jx(n,e,t=aa){_u(n,e).clearInstance(t)}function rR(n){return n.options!==void 0}function Nt(n){return n.settings!==void 0}function Hx(){Jl.clear()}/**
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
 */const Gx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ai=new Po("app","Firebase",Gx);/**
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
 */let sR=class{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ai.create("app-deleted",{appName:this._name})}};/**
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
 */class Kx extends sR{constructor(e,t,i,s){const o=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,u={name:i,automaticDataCollectionEnabled:o};if(e.apiKey!==void 0)super(e,u,s);else{const h=e;super(h.options,u,s)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,ri(tm,ey,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Yy(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Ai.create("server-app-deleted")}}/**
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
 */const ns=zx;function Wy(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:aa,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ai.create("bad-app-name",{appName:String(s)});if(t||(t=GA()),!t)throw Ai.create("no-options");const o=oa.get(s);if(o){if(Yl(t,o.options)&&Yl(i,o.config))return o;throw Ai.create("duplicate-app",{appName:s})}const u=new ZA(s);for(const m of Jl.values())u.addComponent(m);const h=new sR(t,i,u);return oa.set(s,h),h}function $x(n,e){if(BP()&&!QA())throw Ai.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;rR(n)?t=n.options:t=n;const i=Object.assign(Object.assign({},e),t);i.releaseOnDeref!==void 0&&delete i.releaseOnDeref;const s=p=>[...p].reduce((y,v)=>Math.imul(31,y)+v.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Ai.create("finalization-registry-not-supported",{});const o=""+s(JSON.stringify(i)),u=Xl.get(o);if(u)return u.incRefCount(e.releaseOnDeref),u;const h=new ZA(o);for(const p of Jl.values())h.addComponent(p);const m=new Kx(t,e,o,h);return Xl.set(o,m),m}function Sm(n=aa){const e=oa.get(n);if(!e&&n===aa&&GA())return Wy();if(!e)throw Ai.create("no-app",{appName:n});return e}function Qx(){return Array.from(oa.values())}async function Yy(n){let e=!1;const t=n.name;oa.has(t)?(e=!0,oa.delete(t)):Xl.has(t)&&n.decRefCount()<=0&&(Xl.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(i=>i.delete())),n.isDeleted=!0)}function ri(n,e,t){var i;let s=(i=qx[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wr.warn(h.join(" "));return}Yr(new Ri(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function aR(n,e){if(n!==null&&typeof n!="function")throw Ai.create("invalid-log-argument");tx(n,e)}function oR(n){ex(n)}/**
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
 */const Wx="firebase-heartbeat-database",Yx=1,ph="firebase-heartbeat-store";let N_=null;function lR(){return N_||(N_=cx(Wx,Yx,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ph)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ai.create("idb-open",{originalErrorMessage:n.message})})),N_}async function Xx(n){try{const t=(await lR()).transaction(ph),i=await t.objectStore(ph).get(uR(n));return await t.done,i}catch(e){if(e instanceof Rn)Wr.warn(e.message);else{const t=Ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wr.warn(t.message)}}}async function ub(n,e){try{const i=(await lR()).transaction(ph,"readwrite");await i.objectStore(ph).put(e,uR(n)),await i.done}catch(t){if(t instanceof Rn)Wr.warn(t.message);else{const i=Ai.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wr.warn(i.message)}}}function uR(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Jx=1024,Zx=30*24*60*60*1e3;class ek{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nk(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=cb();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const h=new Date(u.date).valueOf();return Date.now()-h<=Zx}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Wr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=cb(),{heartbeatsToSend:i,unsentEntries:s}=tk(this._heartbeatsCache.heartbeats),o=Zf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Wr.warn(t),""}}}function cb(){return new Date().toISOString().substring(0,10)}function tk(n,e=Jx){const t=[];let i=n.slice();for(const s of n){const o=t.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),hb(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),hb(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class nk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fh()?zP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Xx(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ub(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ub(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hb(n){return Zf(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ik(n){Yr(new Ri("platform-logger",e=>new fx(e),"PRIVATE")),Yr(new Ri("heartbeat",e=>new ek(e),"PRIVATE")),ri(tm,ey,n),ri(tm,ey,"esm2017"),ri("fire-js","")}ik("");const rk=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Rn,SDK_VERSION:ns,_DEFAULT_ENTRY_NAME:aa,_addComponent:mh,_addOrOverwriteComponent:iR,_apps:oa,_clearComponents:Hx,_components:Jl,_getProvider:_u,_isFirebaseApp:rR,_isFirebaseServerApp:Nt,_registerComponent:Yr,_removeServiceInstance:jx,_serverApps:Xl,deleteApp:Yy,getApp:Sm,getApps:Qx,initializeApp:Wy,initializeServerApp:$x,onLog:aR,registerVersion:ri,setLogLevel:oR},Symbol.toStringTag,{value:"Module"}));var db=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _o,cR;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,R){function A(){}A.prototype=R.prototype,O.D=R.prototype,O.prototype=new A,O.prototype.constructor=O,O.C=function(N,k,U){for(var D=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)D[ft-2]=arguments[ft];return R.prototype[k].apply(N,D)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(O,R,A){A||(A=0);var N=Array(16);if(typeof R=="string")for(var k=0;16>k;++k)N[k]=R.charCodeAt(A++)|R.charCodeAt(A++)<<8|R.charCodeAt(A++)<<16|R.charCodeAt(A++)<<24;else for(k=0;16>k;++k)N[k]=R[A++]|R[A++]<<8|R[A++]<<16|R[A++]<<24;R=O.g[0],A=O.g[1],k=O.g[2];var U=O.g[3],D=R+(U^A&(k^U))+N[0]+3614090360&4294967295;R=A+(D<<7&4294967295|D>>>25),D=U+(k^R&(A^k))+N[1]+3905402710&4294967295,U=R+(D<<12&4294967295|D>>>20),D=k+(A^U&(R^A))+N[2]+606105819&4294967295,k=U+(D<<17&4294967295|D>>>15),D=A+(R^k&(U^R))+N[3]+3250441966&4294967295,A=k+(D<<22&4294967295|D>>>10),D=R+(U^A&(k^U))+N[4]+4118548399&4294967295,R=A+(D<<7&4294967295|D>>>25),D=U+(k^R&(A^k))+N[5]+1200080426&4294967295,U=R+(D<<12&4294967295|D>>>20),D=k+(A^U&(R^A))+N[6]+2821735955&4294967295,k=U+(D<<17&4294967295|D>>>15),D=A+(R^k&(U^R))+N[7]+4249261313&4294967295,A=k+(D<<22&4294967295|D>>>10),D=R+(U^A&(k^U))+N[8]+1770035416&4294967295,R=A+(D<<7&4294967295|D>>>25),D=U+(k^R&(A^k))+N[9]+2336552879&4294967295,U=R+(D<<12&4294967295|D>>>20),D=k+(A^U&(R^A))+N[10]+4294925233&4294967295,k=U+(D<<17&4294967295|D>>>15),D=A+(R^k&(U^R))+N[11]+2304563134&4294967295,A=k+(D<<22&4294967295|D>>>10),D=R+(U^A&(k^U))+N[12]+1804603682&4294967295,R=A+(D<<7&4294967295|D>>>25),D=U+(k^R&(A^k))+N[13]+4254626195&4294967295,U=R+(D<<12&4294967295|D>>>20),D=k+(A^U&(R^A))+N[14]+2792965006&4294967295,k=U+(D<<17&4294967295|D>>>15),D=A+(R^k&(U^R))+N[15]+1236535329&4294967295,A=k+(D<<22&4294967295|D>>>10),D=R+(k^U&(A^k))+N[1]+4129170786&4294967295,R=A+(D<<5&4294967295|D>>>27),D=U+(A^k&(R^A))+N[6]+3225465664&4294967295,U=R+(D<<9&4294967295|D>>>23),D=k+(R^A&(U^R))+N[11]+643717713&4294967295,k=U+(D<<14&4294967295|D>>>18),D=A+(U^R&(k^U))+N[0]+3921069994&4294967295,A=k+(D<<20&4294967295|D>>>12),D=R+(k^U&(A^k))+N[5]+3593408605&4294967295,R=A+(D<<5&4294967295|D>>>27),D=U+(A^k&(R^A))+N[10]+38016083&4294967295,U=R+(D<<9&4294967295|D>>>23),D=k+(R^A&(U^R))+N[15]+3634488961&4294967295,k=U+(D<<14&4294967295|D>>>18),D=A+(U^R&(k^U))+N[4]+3889429448&4294967295,A=k+(D<<20&4294967295|D>>>12),D=R+(k^U&(A^k))+N[9]+568446438&4294967295,R=A+(D<<5&4294967295|D>>>27),D=U+(A^k&(R^A))+N[14]+3275163606&4294967295,U=R+(D<<9&4294967295|D>>>23),D=k+(R^A&(U^R))+N[3]+4107603335&4294967295,k=U+(D<<14&4294967295|D>>>18),D=A+(U^R&(k^U))+N[8]+1163531501&4294967295,A=k+(D<<20&4294967295|D>>>12),D=R+(k^U&(A^k))+N[13]+2850285829&4294967295,R=A+(D<<5&4294967295|D>>>27),D=U+(A^k&(R^A))+N[2]+4243563512&4294967295,U=R+(D<<9&4294967295|D>>>23),D=k+(R^A&(U^R))+N[7]+1735328473&4294967295,k=U+(D<<14&4294967295|D>>>18),D=A+(U^R&(k^U))+N[12]+2368359562&4294967295,A=k+(D<<20&4294967295|D>>>12),D=R+(A^k^U)+N[5]+4294588738&4294967295,R=A+(D<<4&4294967295|D>>>28),D=U+(R^A^k)+N[8]+2272392833&4294967295,U=R+(D<<11&4294967295|D>>>21),D=k+(U^R^A)+N[11]+1839030562&4294967295,k=U+(D<<16&4294967295|D>>>16),D=A+(k^U^R)+N[14]+4259657740&4294967295,A=k+(D<<23&4294967295|D>>>9),D=R+(A^k^U)+N[1]+2763975236&4294967295,R=A+(D<<4&4294967295|D>>>28),D=U+(R^A^k)+N[4]+1272893353&4294967295,U=R+(D<<11&4294967295|D>>>21),D=k+(U^R^A)+N[7]+4139469664&4294967295,k=U+(D<<16&4294967295|D>>>16),D=A+(k^U^R)+N[10]+3200236656&4294967295,A=k+(D<<23&4294967295|D>>>9),D=R+(A^k^U)+N[13]+681279174&4294967295,R=A+(D<<4&4294967295|D>>>28),D=U+(R^A^k)+N[0]+3936430074&4294967295,U=R+(D<<11&4294967295|D>>>21),D=k+(U^R^A)+N[3]+3572445317&4294967295,k=U+(D<<16&4294967295|D>>>16),D=A+(k^U^R)+N[6]+76029189&4294967295,A=k+(D<<23&4294967295|D>>>9),D=R+(A^k^U)+N[9]+3654602809&4294967295,R=A+(D<<4&4294967295|D>>>28),D=U+(R^A^k)+N[12]+3873151461&4294967295,U=R+(D<<11&4294967295|D>>>21),D=k+(U^R^A)+N[15]+530742520&4294967295,k=U+(D<<16&4294967295|D>>>16),D=A+(k^U^R)+N[2]+3299628645&4294967295,A=k+(D<<23&4294967295|D>>>9),D=R+(k^(A|~U))+N[0]+4096336452&4294967295,R=A+(D<<6&4294967295|D>>>26),D=U+(A^(R|~k))+N[7]+1126891415&4294967295,U=R+(D<<10&4294967295|D>>>22),D=k+(R^(U|~A))+N[14]+2878612391&4294967295,k=U+(D<<15&4294967295|D>>>17),D=A+(U^(k|~R))+N[5]+4237533241&4294967295,A=k+(D<<21&4294967295|D>>>11),D=R+(k^(A|~U))+N[12]+1700485571&4294967295,R=A+(D<<6&4294967295|D>>>26),D=U+(A^(R|~k))+N[3]+2399980690&4294967295,U=R+(D<<10&4294967295|D>>>22),D=k+(R^(U|~A))+N[10]+4293915773&4294967295,k=U+(D<<15&4294967295|D>>>17),D=A+(U^(k|~R))+N[1]+2240044497&4294967295,A=k+(D<<21&4294967295|D>>>11),D=R+(k^(A|~U))+N[8]+1873313359&4294967295,R=A+(D<<6&4294967295|D>>>26),D=U+(A^(R|~k))+N[15]+4264355552&4294967295,U=R+(D<<10&4294967295|D>>>22),D=k+(R^(U|~A))+N[6]+2734768916&4294967295,k=U+(D<<15&4294967295|D>>>17),D=A+(U^(k|~R))+N[13]+1309151649&4294967295,A=k+(D<<21&4294967295|D>>>11),D=R+(k^(A|~U))+N[4]+4149444226&4294967295,R=A+(D<<6&4294967295|D>>>26),D=U+(A^(R|~k))+N[11]+3174756917&4294967295,U=R+(D<<10&4294967295|D>>>22),D=k+(R^(U|~A))+N[2]+718787259&4294967295,k=U+(D<<15&4294967295|D>>>17),D=A+(U^(k|~R))+N[9]+3951481745&4294967295,O.g[0]=O.g[0]+R&4294967295,O.g[1]=O.g[1]+(k+(D<<21&4294967295|D>>>11))&4294967295,O.g[2]=O.g[2]+k&4294967295,O.g[3]=O.g[3]+U&4294967295}i.prototype.u=function(O,R){R===void 0&&(R=O.length);for(var A=R-this.blockSize,N=this.B,k=this.h,U=0;U<R;){if(k==0)for(;U<=A;)s(this,O,U),U+=this.blockSize;if(typeof O=="string"){for(;U<R;)if(N[k++]=O.charCodeAt(U++),k==this.blockSize){s(this,N),k=0;break}}else for(;U<R;)if(N[k++]=O[U++],k==this.blockSize){s(this,N),k=0;break}}this.h=k,this.o+=R},i.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var R=1;R<O.length-8;++R)O[R]=0;var A=8*this.o;for(R=O.length-8;R<O.length;++R)O[R]=A&255,A/=256;for(this.u(O),O=Array(16),R=A=0;4>R;++R)for(var N=0;32>N;N+=8)O[A++]=this.g[R]>>>N&255;return O};function o(O,R){var A=h;return Object.prototype.hasOwnProperty.call(A,O)?A[O]:A[O]=R(O)}function u(O,R){this.h=R;for(var A=[],N=!0,k=O.length-1;0<=k;k--){var U=O[k]|0;N&&U==R||(A[k]=U,N=!1)}this.g=A}var h={};function m(O){return-128<=O&&128>O?o(O,function(R){return new u([R|0],0>R?-1:0)}):new u([O|0],0>O?-1:0)}function p(O){if(isNaN(O)||!isFinite(O))return v;if(0>O)return j(p(-O));for(var R=[],A=1,N=0;O>=A;N++)R[N]=O/A|0,A*=4294967296;return new u(R,0)}function y(O,R){if(O.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(O.charAt(0)=="-")return j(y(O.substring(1),R));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=p(Math.pow(R,8)),N=v,k=0;k<O.length;k+=8){var U=Math.min(8,O.length-k),D=parseInt(O.substring(k,k+U),R);8>U?(U=p(Math.pow(R,U)),N=N.j(U).add(p(D))):(N=N.j(A),N=N.add(p(D)))}return N}var v=m(0),w=m(1),C=m(16777216);n=u.prototype,n.m=function(){if(q(this))return-j(this).m();for(var O=0,R=1,A=0;A<this.g.length;A++){var N=this.i(A);O+=(0<=N?N:4294967296+N)*R,R*=4294967296}return O},n.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(M(this))return"0";if(q(this))return"-"+j(this).toString(O);for(var R=p(Math.pow(O,6)),A=this,N="";;){var k=oe(A,R).g;A=ie(A,k.j(R));var U=((0<A.g.length?A.g[0]:A.h)>>>0).toString(O);if(A=k,M(A))return U+N;for(;6>U.length;)U="0"+U;N=U+N}},n.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function M(O){if(O.h!=0)return!1;for(var R=0;R<O.g.length;R++)if(O.g[R]!=0)return!1;return!0}function q(O){return O.h==-1}n.l=function(O){return O=ie(this,O),q(O)?-1:M(O)?0:1};function j(O){for(var R=O.g.length,A=[],N=0;N<R;N++)A[N]=~O.g[N];return new u(A,~O.h).add(w)}n.abs=function(){return q(this)?j(this):this},n.add=function(O){for(var R=Math.max(this.g.length,O.g.length),A=[],N=0,k=0;k<=R;k++){var U=N+(this.i(k)&65535)+(O.i(k)&65535),D=(U>>>16)+(this.i(k)>>>16)+(O.i(k)>>>16);N=D>>>16,U&=65535,D&=65535,A[k]=D<<16|U}return new u(A,A[A.length-1]&-2147483648?-1:0)};function ie(O,R){return O.add(j(R))}n.j=function(O){if(M(this)||M(O))return v;if(q(this))return q(O)?j(this).j(j(O)):j(j(this).j(O));if(q(O))return j(this.j(j(O)));if(0>this.l(C)&&0>O.l(C))return p(this.m()*O.m());for(var R=this.g.length+O.g.length,A=[],N=0;N<2*R;N++)A[N]=0;for(N=0;N<this.g.length;N++)for(var k=0;k<O.g.length;k++){var U=this.i(N)>>>16,D=this.i(N)&65535,ft=O.i(k)>>>16,mt=O.i(k)&65535;A[2*N+2*k]+=D*mt,ae(A,2*N+2*k),A[2*N+2*k+1]+=U*mt,ae(A,2*N+2*k+1),A[2*N+2*k+1]+=D*ft,ae(A,2*N+2*k+1),A[2*N+2*k+2]+=U*ft,ae(A,2*N+2*k+2)}for(N=0;N<R;N++)A[N]=A[2*N+1]<<16|A[2*N];for(N=R;N<2*R;N++)A[N]=0;return new u(A,0)};function ae(O,R){for(;(O[R]&65535)!=O[R];)O[R+1]+=O[R]>>>16,O[R]&=65535,R++}function J(O,R){this.g=O,this.h=R}function oe(O,R){if(M(R))throw Error("division by zero");if(M(O))return new J(v,v);if(q(O))return R=oe(j(O),R),new J(j(R.g),j(R.h));if(q(R))return R=oe(O,j(R)),new J(j(R.g),R.h);if(30<O.g.length){if(q(O)||q(R))throw Error("slowDivide_ only works with positive integers.");for(var A=w,N=R;0>=N.l(O);)A=re(A),N=re(N);var k=me(A,1),U=me(N,1);for(N=me(N,2),A=me(A,2);!M(N);){var D=U.add(N);0>=D.l(O)&&(k=k.add(A),U=D),N=me(N,1),A=me(A,1)}return R=ie(O,k.j(R)),new J(k,R)}for(k=v;0<=O.l(R);){for(A=Math.max(1,Math.floor(O.m()/R.m())),N=Math.ceil(Math.log(A)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),U=p(A),D=U.j(R);q(D)||0<D.l(O);)A-=N,U=p(A),D=U.j(R);M(U)&&(U=w),k=k.add(U),O=ie(O,D)}return new J(k,O)}n.A=function(O){return oe(this,O).h},n.and=function(O){for(var R=Math.max(this.g.length,O.g.length),A=[],N=0;N<R;N++)A[N]=this.i(N)&O.i(N);return new u(A,this.h&O.h)},n.or=function(O){for(var R=Math.max(this.g.length,O.g.length),A=[],N=0;N<R;N++)A[N]=this.i(N)|O.i(N);return new u(A,this.h|O.h)},n.xor=function(O){for(var R=Math.max(this.g.length,O.g.length),A=[],N=0;N<R;N++)A[N]=this.i(N)^O.i(N);return new u(A,this.h^O.h)};function re(O){for(var R=O.g.length+1,A=[],N=0;N<R;N++)A[N]=O.i(N)<<1|O.i(N-1)>>>31;return new u(A,O.h)}function me(O,R){var A=R>>5;R%=32;for(var N=O.g.length-A,k=[],U=0;U<N;U++)k[U]=0<R?O.i(U+A)>>>R|O.i(U+A+1)<<32-R:O.i(U+A);return new u(k,O.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,cR=i,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=p,u.fromString=y,_o=u}).apply(typeof db<"u"?db:typeof self<"u"?self:typeof window<"u"?window:{});var Af=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hR,Qc,dR,Mf,ty,fR,mR,pR;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(d,_,E){return d==Array.prototype||d==Object.prototype||(d[_]=E.value),d};function t(d){d=[typeof globalThis=="object"&&globalThis,d,typeof window=="object"&&window,typeof self=="object"&&self,typeof Af=="object"&&Af];for(var _=0;_<d.length;++_){var E=d[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var i=t(this);function s(d,_){if(_)e:{var E=i;d=d.split(".");for(var I=0;I<d.length-1;I++){var B=d[I];if(!(B in E))break e;E=E[B]}d=d[d.length-1],I=E[d],_=_(I),_!=I&&_!=null&&e(E,d,{configurable:!0,writable:!0,value:_})}}function o(d,_){d instanceof String&&(d+="");var E=0,I=!1,B={next:function(){if(!I&&E<d.length){var Q=E++;return{value:_(Q,d[Q]),done:!1}}return I=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}s("Array.prototype.values",function(d){return d||function(){return o(this,function(_,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(d){var _=typeof d;return _=_!="object"?_:d?Array.isArray(d)?"array":_:"null",_=="array"||_=="object"&&typeof d.length=="number"}function p(d){var _=typeof d;return _=="object"&&d!=null||_=="function"}function y(d,_,E){return d.call.apply(d.bind,arguments)}function v(d,_,E){if(!d)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,I),d.apply(_,B)}}return function(){return d.apply(_,arguments)}}function w(d,_,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:v,w.apply(null,arguments)}function C(d,_){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),d.apply(this,I)}}function M(d,_){function E(){}E.prototype=_.prototype,d.aa=_.prototype,d.prototype=new E,d.prototype.constructor=d,d.Qb=function(I,B,Q){for(var ue=Array(arguments.length-2),je=2;je<arguments.length;je++)ue[je-2]=arguments[je];return _.prototype[B].apply(I,ue)}}function q(d){const _=d.length;if(0<_){const E=Array(_);for(let I=0;I<_;I++)E[I]=d[I];return E}return[]}function j(d,_){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(m(I)){const B=d.length||0,Q=I.length||0;d.length=B+Q;for(let ue=0;ue<Q;ue++)d[B+ue]=I[ue]}else d.push(I)}}class ie{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ae(d){return/^[\s\xa0]*$/.test(d)}function J(){var d=h.navigator;return d&&(d=d.userAgent)?d:""}function oe(d){return oe[" "](d),d}oe[" "]=function(){};var re=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function me(d,_,E){for(const I in d)_.call(E,d[I],I,d)}function O(d,_){for(const E in d)_.call(void 0,d[E],E,d)}function R(d){const _={};for(const E in d)_[E]=d[E];return _}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(d,_){let E,I;for(let B=1;B<arguments.length;B++){I=arguments[B];for(E in I)d[E]=I[E];for(let Q=0;Q<A.length;Q++)E=A[Q],Object.prototype.hasOwnProperty.call(I,E)&&(d[E]=I[E])}}function k(d){var _=1;d=d.split(":");const E=[];for(;0<_&&d.length;)E.push(d.shift()),_--;return d.length&&E.push(d.join(":")),E}function U(d){h.setTimeout(()=>{throw d},0)}function D(){var d=qe;let _=null;return d.g&&(_=d.g,d.g=d.g.next,d.g||(d.h=null),_.next=null),_}class ft{constructor(){this.h=this.g=null}add(_,E){const I=mt.get();I.set(_,E),this.h?this.h.next=I:this.g=I,this.h=I}}var mt=new ie(()=>new le,d=>d.reset());class le{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,pe=!1,qe=new ft,P=()=>{const d=h.Promise.resolve(void 0);Ie=()=>{d.then(ee)}};var ee=()=>{for(var d;d=D();){try{d.h.call(d.g)}catch(E){U(E)}var _=mt;_.j(d),100>_.h&&(_.h++,d.next=_.g,_.g=d)}pe=!1};function _e(){this.s=this.s,this.C=this.C}_e.prototype.s=!1,_e.prototype.ma=function(){this.s||(this.s=!0,this.N())},_e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(d,_){this.type=d,this.g=this.target=_,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var de=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var d=!1,_=Object.defineProperty({},"passive",{get:function(){d=!0}});try{const E=()=>{};h.addEventListener("test",E,_),h.removeEventListener("test",E,_)}catch{}return d}();function Se(d,_){if(ce.call(this,d?d.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,d){var E=this.type=d.type,I=d.changedTouches&&d.changedTouches.length?d.changedTouches[0]:null;if(this.target=d.target||d.srcElement,this.g=_,_=d.relatedTarget){if(re){e:{try{oe(_.nodeName);var B=!0;break e}catch{}B=!1}B||(_=null)}}else E=="mouseover"?_=d.fromElement:E=="mouseout"&&(_=d.toElement);this.relatedTarget=_,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0),this.button=d.button,this.key=d.key||"",this.ctrlKey=d.ctrlKey,this.altKey=d.altKey,this.shiftKey=d.shiftKey,this.metaKey=d.metaKey,this.pointerId=d.pointerId||0,this.pointerType=typeof d.pointerType=="string"?d.pointerType:Ce[d.pointerType]||"",this.state=d.state,this.i=d,d.defaultPrevented&&Se.aa.h.call(this)}}M(Se,ce);var Ce={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var d=this.i;d.preventDefault?d.preventDefault():d.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),Le=0;function nt(d,_,E,I,B){this.listener=d,this.proxy=null,this.src=_,this.type=E,this.capture=!!I,this.ha=B,this.key=++Le,this.da=this.fa=!1}function Ue(d){d.da=!0,d.listener=null,d.proxy=null,d.src=null,d.ha=null}function Ft(d){this.src=d,this.g={},this.h=0}Ft.prototype.add=function(d,_,E,I,B){var Q=d.toString();d=this.g[Q],d||(d=this.g[Q]=[],this.h++);var ue=Zt(d,_,I,B);return-1<ue?(_=d[ue],E||(_.fa=!1)):(_=new nt(_,this.src,Q,!!I,B),_.fa=E,d.push(_)),_};function vn(d,_){var E=_.type;if(E in d.g){var I=d.g[E],B=Array.prototype.indexOf.call(I,_,void 0),Q;(Q=0<=B)&&Array.prototype.splice.call(I,B,1),Q&&(Ue(_),d.g[E].length==0&&(delete d.g[E],d.h--))}}function Zt(d,_,E,I){for(var B=0;B<d.length;++B){var Q=d[B];if(!Q.da&&Q.listener==_&&Q.capture==!!E&&Q.ha==I)return B}return-1}var Dn="closure_lm_"+(1e6*Math.random()|0),$e={};function qn(d,_,E,I,B){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)qn(d,_[Q],E,I,B);return null}return E=Bo(E),d&&d[ut]?d.K(_,E,p(I)?!!I.capture:!!I,B):Ci(d,_,E,!1,I,B)}function Ci(d,_,E,I,B,Q){if(!_)throw Error("Invalid event type");var ue=p(B)?!!B.capture:!!B,je=ba(d);if(je||(d[Dn]=je=new Ft(d)),E=je.add(_,E,I,ue,Q),E.proxy)return E;if(I=cs(),E.proxy=I,I.src=d,I.listener=E,d.addEventListener)de||(B=ue),B===void 0&&(B=!1),d.addEventListener(_.toString(),I,B);else if(d.attachEvent)d.attachEvent(ds(_.toString()),I);else if(d.addListener&&d.removeListener)d.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function cs(){function d(E){return _.call(d.src,d.listener,E)}const _=Nu;return d}function hs(d,_,E,I,B){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)hs(d,_[Q],E,I,B);else I=p(I)?!!I.capture:!!I,E=Bo(E),d&&d[ut]?(d=d.i,_=String(_).toString(),_ in d.g&&(Q=d.g[_],E=Zt(Q,E,I,B),-1<E&&(Ue(Q[E]),Array.prototype.splice.call(Q,E,1),Q.length==0&&(delete d.g[_],d.h--)))):d&&(d=ba(d))&&(_=d.g[_.toString()],d=-1,_&&(d=Zt(_,E,I,B)),(E=-1<d?_[d]:null)&&mr(E))}function mr(d){if(typeof d!="number"&&d&&!d.da){var _=d.src;if(_&&_[ut])vn(_.i,d);else{var E=d.type,I=d.proxy;_.removeEventListener?_.removeEventListener(E,I,d.capture):_.detachEvent?_.detachEvent(ds(E),I):_.addListener&&_.removeListener&&_.removeListener(I),(E=ba(_))?(vn(E,d),E.h==0&&(E.src=null,_[Dn]=null)):Ue(d)}}}function ds(d){return d in $e?$e[d]:$e[d]="on"+d}function Nu(d,_){if(d.da)d=!0;else{_=new Se(_,this);var E=d.listener,I=d.ha||d.src;d.fa&&mr(d),d=E.call(I,_)}return d}function ba(d){return d=d[Dn],d instanceof Ft?d:null}var hn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bo(d){return typeof d=="function"?d:(d[hn]||(d[hn]=function(_){return d.handleEvent(_)}),d[hn])}function Ae(){_e.call(this),this.i=new Ft(this),this.M=this,this.F=null}M(Ae,_e),Ae.prototype[ut]=!0,Ae.prototype.removeEventListener=function(d,_,E,I){hs(this,d,_,E,I)};function ct(d,_){var E,I=d.F;if(I)for(E=[];I;I=I.F)E.push(I);if(d=d.M,I=_.type||_,typeof _=="string")_=new ce(_,d);else if(_ instanceof ce)_.target=_.target||d;else{var B=_;_=new ce(I,d),N(_,B)}if(B=!0,E)for(var Q=E.length-1;0<=Q;Q--){var ue=_.g=E[Q];B=ai(ue,I,!0,_)&&B}if(ue=_.g=d,B=ai(ue,I,!0,_)&&B,B=ai(ue,I,!1,_)&&B,E)for(Q=0;Q<E.length;Q++)ue=_.g=E[Q],B=ai(ue,I,!1,_)&&B}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var d=this.i,_;for(_ in d.g){for(var E=d.g[_],I=0;I<E.length;I++)Ue(E[I]);delete d.g[_],d.h--}}this.F=null},Ae.prototype.K=function(d,_,E,I){return this.i.add(String(d),_,!1,E,I)},Ae.prototype.L=function(d,_,E,I){return this.i.add(String(d),_,!0,E,I)};function ai(d,_,E,I){if(_=d.i.g[String(_)],!_)return!0;_=_.concat();for(var B=!0,Q=0;Q<_.length;++Q){var ue=_[Q];if(ue&&!ue.da&&ue.capture==E){var je=ue.listener,$t=ue.ha||ue.src;ue.fa&&vn(d.i,ue),B=je.call($t,I)!==!1&&B}}return B&&!I.defaultPrevented}function nd(d,_,E){if(typeof d=="function")E&&(d=w(d,E));else if(d&&typeof d.handleEvent=="function")d=w(d.handleEvent,d);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:h.setTimeout(d,_||0)}function Ou(d){d.g=nd(()=>{d.g=null,d.i&&(d.i=!1,Ou(d))},d.l);const _=d.h;d.h=null,d.m.apply(null,_)}class fp extends _e{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Ou(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ia(d){_e.call(this),this.h=d,this.g={}}M(Ia,_e);var fs=[];function En(d){me(d.g,function(_,E){this.g.hasOwnProperty(E)&&mr(_)},d),d.g={}}Ia.prototype.N=function(){Ia.aa.N.call(this),En(this)},Ia.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pu=h.JSON.stringify,Mi=h.JSON.parse,Nn=class{stringify(d){return h.JSON.stringify(d,void 0)}parse(d){return h.JSON.parse(d,void 0)}};function xu(){}xu.prototype.h=null;function id(d){return d.h||(d.h=d.i())}function rd(){}var Li={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ms(){ce.call(this,"d")}M(ms,ce);function Di(){ce.call(this,"c")}M(Di,ce);var oi={},ps=null;function Fo(){return ps=ps||new Ae}oi.La="serverreachability";function ku(d){ce.call(this,oi.La,d)}M(ku,ce);function gs(d){const _=Fo();ct(_,new ku(_))}oi.STAT_EVENT="statevent";function zo(d,_){ce.call(this,oi.STAT_EVENT,d),this.stat=_}M(zo,ce);function Vt(d){const _=Fo();ct(_,new zo(_,d))}oi.Ma="timingevent";function sd(d,_){ce.call(this,oi.Ma,d),this.size=_}M(sd,ce);function _s(d,_){if(typeof d!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){d()},_)}function ys(){this.g=!0}ys.prototype.xa=function(){this.g=!1};function ad(d,_,E,I,B,Q){d.info(function(){if(d.g)if(Q)for(var ue="",je=Q.split("&"),$t=0;$t<je.length;$t++){var He=je[$t].split("=");if(1<He.length){var nn=He[0];He=He[1];var Qt=nn.split("_");ue=2<=Qt.length&&Qt[1]=="type"?ue+(nn+"="+He+"&"):ue+(nn+"=redacted&")}}else ue=null;else ue=Q;return"XMLHTTP REQ ("+I+") [attempt "+B+"]: "+_+`
`+E+`
`+ue})}function od(d,_,E,I,B,Q,ue){d.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+B+"]: "+_+`
`+E+`
`+Q+" "+ue})}function vs(d,_,E,I){d.info(function(){return"XMLHTTP TEXT ("+_+"): "+en(d,E)+(I?" "+I:"")})}function Ui(d,_){d.info(function(){return"TIMEOUT: "+_})}ys.prototype.info=function(){};function en(d,_){if(!d.g)return _;if(!_)return null;try{var E=JSON.parse(_);if(E){for(d=0;d<E.length;d++)if(Array.isArray(E[d])){var I=E[d];if(!(2>I.length)){var B=I[1];if(Array.isArray(B)&&!(1>B.length)){var Q=B[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var ue=1;ue<B.length;ue++)B[ue]=""}}}}return Pu(E)}catch{return _}}var Kt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Aa;function qo(){}M(qo,xu),qo.prototype.g=function(){return new XMLHttpRequest},qo.prototype.i=function(){return{}},Aa=new qo;function Bi(d,_,E,I){this.j=d,this.i=_,this.l=E,this.R=I||1,this.U=new Ia(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vu}function Vu(){this.i=null,this.g="",this.h=!1}var Es={},Ra={};function Ni(d,_,E){d.L=1,d.v=Da(Rt(_)),d.m=E,d.P=!0,gr(d,null)}function gr(d,_){d.F=Date.now(),vt(d),d.A=Rt(d.v);var E=d.A,I=d.R;Array.isArray(I)||(I=[String(I)]),vr(E.i,"t",I),d.C=0,E=d.j.J,d.h=new Vu,d.g=Td(d.j,E?_:null,!d.m),0<d.O&&(d.M=new fp(w(d.Y,d,d.g),d.O)),_=d.U,E=d.g,I=d.ca;var B="readystatechange";Array.isArray(B)||(B&&(fs[0]=B.toString()),B=fs);for(var Q=0;Q<B.length;Q++){var ue=qn(E,B[Q],I||_.handleEvent,!1,_.h||_);if(!ue)break;_.g[ue.key]=ue}_=d.H?R(d.H):{},d.m?(d.u||(d.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",d.g.ea(d.A,d.u,d.m,_)):(d.u="GET",d.g.ea(d.A,d.u,null,_)),gs(),ad(d.i,d.u,d.A,d.l,d.R,d.m)}Bi.prototype.ca=function(d){d=d.target;const _=this.M;_&&di(d)==3?_.j():this.Y(d)},Bi.prototype.Y=function(d){try{if(d==this.g)e:{const Qt=di(this.g);var _=this.g.Ba();const br=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||fd(this.g)))){this.J||Qt!=4||_==7||(_==8||0>=br?gs(3):gs(2)),jo(this);var E=this.g.Z();this.X=E;t:if(Ts(this)){var I=fd(this.g);d="";var B=I.length,Q=di(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jn(this),Wn(this);var ue="";break t}this.h.i=new h.TextDecoder}for(_=0;_<B;_++)this.h.h=!0,d+=this.h.i.decode(I[_],{stream:!(Q&&_==B-1)});I.length=0,this.h.g+=d,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=E==200,od(this.i,this.u,this.A,this.l,this.R,Qt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var je,$t=this.g;if((je=$t.g?$t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ae(je)){var He=je;break t}}He=null}if(E=He)vs(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yn(this,E);else{this.o=!1,this.s=3,Vt(12),jn(this),Wn(this);break e}}if(this.P){E=!0;let dn;for(;!this.J&&this.C<ue.length;)if(dn=ws(this,ue),dn==Ra){Qt==4&&(this.s=4,Vt(14),E=!1),vs(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==Es){this.s=4,Vt(15),vs(this.i,this.l,ue,"[Invalid Chunk]"),E=!1;break}else vs(this.i,this.l,dn,null),Yn(this,dn);if(Ts(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||ue.length!=0||this.h.h||(this.s=1,Vt(16),E=!1),this.o=this.o&&E,!E)vs(this.i,this.l,ue,"[Invalid Chunked Response]"),jn(this),Wn(this);else if(0<ue.length&&!this.W){this.W=!0;var nn=this.j;nn.g==this&&nn.ba&&!nn.M&&(nn.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),Ma(nn),nn.M=!0,Vt(11))}}else vs(this.i,this.l,ue,null),Yn(this,ue);Qt==4&&jn(this),this.o&&!this.J&&(Qt==4?yd(this.j,this):(this.o=!1,vt(this)))}else vp(this.g),E==400&&0<ue.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),jn(this),Wn(this)}}}catch{}finally{}};function Ts(d){return d.g?d.u=="GET"&&d.L!=2&&d.j.Ca:!1}function ws(d,_){var E=d.C,I=_.indexOf(`
`,E);return I==-1?Ra:(E=Number(_.substring(E,I)),isNaN(E)?Es:(I+=1,I+E>_.length?Ra:(_=_.slice(I,I+E),d.C=I+E,_)))}Bi.prototype.cancel=function(){this.J=!0,jn(this)};function vt(d){d.S=Date.now()+d.I,Mu(d,d.I)}function Mu(d,_){if(d.B!=null)throw Error("WatchDog timer not null");d.B=_s(w(d.ba,d),_)}function jo(d){d.B&&(h.clearTimeout(d.B),d.B=null)}Bi.prototype.ba=function(){this.B=null;const d=Date.now();0<=d-this.S?(Ui(this.i,this.A),this.L!=2&&(gs(),Vt(17)),jn(this),this.s=2,Wn(this)):Mu(this,this.S-d)};function Wn(d){d.j.G==0||d.J||yd(d.j,d)}function jn(d){jo(d);var _=d.M;_&&typeof _.ma=="function"&&_.ma(),d.M=null,En(d.U),d.g&&(_=d.g,d.g=null,_.abort(),_.ma())}function Yn(d,_){try{var E=d.j;if(E.G!=0&&(E.g==d||bs(E.h,d))){if(!d.K&&bs(E.h,d)&&E.G==3){try{var I=E.Da.g.parse(_)}catch{I=null}if(Array.isArray(I)&&I.length==3){var B=I;if(B[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<d.F)Zo(E),Xo(E);else break e;$u(E),Vt(18)}}else E.za=B[1],0<E.za-E.T&&37500>B[2]&&E.F&&E.v==0&&!E.C&&(E.C=_s(w(E.Za,E),6e3));if(1>=ld(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else wr(E,11)}else if((d.K||E.g==d)&&Zo(E),!ae(_))for(B=E.Da.g.parse(_),_=0;_<B.length;_++){let He=B[_];if(E.T=He[0],He=He[1],E.G==2)if(He[0]=="c"){E.K=He[1],E.ia=He[2];const nn=He[3];nn!=null&&(E.la=nn,E.j.info("VER="+E.la));const Qt=He[4];Qt!=null&&(E.Aa=Qt,E.j.info("SVER="+E.Aa));const br=He[5];br!=null&&typeof br=="number"&&0<br&&(I=1.5*br,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const dn=d.g;if(dn){const Ki=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ki){var Q=I.h;Q.g||Ki.indexOf("spdy")==-1&&Ki.indexOf("quic")==-1&&Ki.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(Is(Q,Q.h),Q.h=null))}if(I.D){const Wu=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;Wu&&(I.ya=Wu,Qe(I.I,I.D,Wu))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-d.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var ue=d;if(I.qa=Ed(I,I.J?I.ia:null,I.W),ue.K){li(I.h,ue);var je=ue,$t=I.L;$t&&(je.I=$t),je.B&&(jo(je),vt(je)),I.g=ue}else gd(I);0<E.i.length&&Jo(E)}else He[0]!="stop"&&He[0]!="close"||wr(E,7);else E.G==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?wr(E,7):Gu(E):He[0]!="noop"&&E.l&&E.l.ta(He),E.v=0)}}gs(4)}catch{}}var mp=class{constructor(d,_){this.g=d,this.map=_}};function Lu(d){this.l=d||10,h.PerformanceNavigationTiming?(d=h.performance.getEntriesByType("navigation"),d=0<d.length&&(d[0].nextHopProtocol=="hq"||d[0].nextHopProtocol=="h2")):d=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=d?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Uu(d){return d.h?!0:d.g?d.g.size>=d.j:!1}function ld(d){return d.h?1:d.g?d.g.size:0}function bs(d,_){return d.h?d.h==_:d.g?d.g.has(_):!1}function Is(d,_){d.g?d.g.add(_):d.h=_}function li(d,_){d.h&&d.h==_?d.h=null:d.g&&d.g.has(_)&&d.g.delete(_)}Lu.prototype.cancel=function(){if(this.i=On(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const d of this.g.values())d.cancel();this.g.clear()}};function On(d){if(d.h!=null)return d.i.concat(d.h.D);if(d.g!=null&&d.g.size!==0){let _=d.i;for(const E of d.g.values())_=_.concat(E.D);return _}return q(d.i)}function ud(d){if(d.V&&typeof d.V=="function")return d.V();if(typeof Map<"u"&&d instanceof Map||typeof Set<"u"&&d instanceof Set)return Array.from(d.values());if(typeof d=="string")return d.split("");if(m(d)){for(var _=[],E=d.length,I=0;I<E;I++)_.push(d[I]);return _}_=[],E=0;for(I in d)_[E++]=d[I];return _}function pp(d){if(d.na&&typeof d.na=="function")return d.na();if(!d.V||typeof d.V!="function"){if(typeof Map<"u"&&d instanceof Map)return Array.from(d.keys());if(!(typeof Set<"u"&&d instanceof Set)){if(m(d)||typeof d=="string"){var _=[];d=d.length;for(var E=0;E<d;E++)_.push(E);return _}_=[],E=0;for(const I in d)_[E++]=I;return _}}}function Sa(d,_){if(d.forEach&&typeof d.forEach=="function")d.forEach(_,void 0);else if(m(d)||typeof d=="string")Array.prototype.forEach.call(d,_,void 0);else for(var E=pp(d),I=ud(d),B=I.length,Q=0;Q<B;Q++)_.call(void 0,I[Q],E&&E[Q],d)}var Bu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ho(d,_){if(d){d=d.split("&");for(var E=0;E<d.length;E++){var I=d[E].indexOf("="),B=null;if(0<=I){var Q=d[E].substring(0,I);B=d[E].substring(I+1)}else Q=d[E];_(Q,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function _r(d){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,d instanceof _r){this.h=d.h,As(this,d.j),this.o=d.o,this.g=d.g,Ca(this,d.s),this.l=d.l;var _=d.i,E=new Fi;E.i=_.i,_.g&&(E.g=new Map(_.g),E.h=_.h),Go(this,E),this.m=d.m}else d&&(_=String(d).match(Bu))?(this.h=!1,As(this,_[1]||"",!0),this.o=Rs(_[2]||""),this.g=Rs(_[3]||"",!0),Ca(this,_[4]),this.l=Rs(_[5]||"",!0),Go(this,_[6]||"",!0),this.m=Rs(_[7]||"")):(this.h=!1,this.i=new Fi(null,this.h))}_r.prototype.toString=function(){var d=[],_=this.j;_&&d.push(ui(_,Fu,!0),":");var E=this.g;return(E||_=="file")&&(d.push("//"),(_=this.o)&&d.push(ui(_,Fu,!0),"@"),d.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&d.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&d.push("/"),d.push(ui(E,E.charAt(0)=="/"?zu:cd,!0))),(E=this.i.toString())&&d.push("?",E),(E=this.m)&&d.push("#",ui(E,yp)),d.join("")};function Rt(d){return new _r(d)}function As(d,_,E){d.j=E?Rs(_,!0):_,d.j&&(d.j=d.j.replace(/:$/,""))}function Ca(d,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);d.s=_}else d.s=null}function Go(d,_,E){_ instanceof Fi?(d.i=_,qu(d.i,d.h)):(E||(_=ui(_,_p)),d.i=new Fi(_,d.h))}function Qe(d,_,E){d.i.set(_,E)}function Da(d){return Qe(d,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),d}function Rs(d,_){return d?_?decodeURI(d.replace(/%25/g,"%2525")):decodeURIComponent(d):""}function ui(d,_,E){return typeof d=="string"?(d=encodeURI(d).replace(_,gp),E&&(d=d.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d):null}function gp(d){return d=d.charCodeAt(0),"%"+(d>>4&15).toString(16)+(d&15).toString(16)}var Fu=/[#\/\?@]/g,cd=/[#\?:]/g,zu=/[#\?]/g,_p=/[#\?@]/g,yp=/#/g;function Fi(d,_){this.h=this.g=null,this.i=d||null,this.j=!!_}function ci(d){d.g||(d.g=new Map,d.h=0,d.i&&Ho(d.i,function(_,E){d.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}n=Fi.prototype,n.add=function(d,_){ci(this),this.i=null,d=Er(this,d);var E=this.g.get(d);return E||this.g.set(d,E=[]),E.push(_),this.h+=1,this};function Ko(d,_){ci(d),_=Er(d,_),d.g.has(_)&&(d.i=null,d.h-=d.g.get(_).length,d.g.delete(_))}function yr(d,_){return ci(d),_=Er(d,_),d.g.has(_)}n.forEach=function(d,_){ci(this),this.g.forEach(function(E,I){E.forEach(function(B){d.call(_,B,I,this)},this)},this)},n.na=function(){ci(this);const d=Array.from(this.g.values()),_=Array.from(this.g.keys()),E=[];for(let I=0;I<_.length;I++){const B=d[I];for(let Q=0;Q<B.length;Q++)E.push(_[I])}return E},n.V=function(d){ci(this);let _=[];if(typeof d=="string")yr(this,d)&&(_=_.concat(this.g.get(Er(this,d))));else{d=Array.from(this.g.values());for(let E=0;E<d.length;E++)_=_.concat(d[E])}return _},n.set=function(d,_){return ci(this),this.i=null,d=Er(this,d),yr(this,d)&&(this.h-=this.g.get(d).length),this.g.set(d,[_]),this.h+=1,this},n.get=function(d,_){return d?(d=this.V(d),0<d.length?String(d[0]):_):_};function vr(d,_,E){Ko(d,_),0<E.length&&(d.i=null,d.g.set(Er(d,_),q(E)),d.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const d=[],_=Array.from(this.g.keys());for(var E=0;E<_.length;E++){var I=_[E];const Q=encodeURIComponent(String(I)),ue=this.V(I);for(I=0;I<ue.length;I++){var B=Q;ue[I]!==""&&(B+="="+encodeURIComponent(String(ue[I]))),d.push(B)}}return this.i=d.join("&")};function Er(d,_){return _=String(_),d.j&&(_=_.toLowerCase()),_}function qu(d,_){_&&!d.j&&(ci(d),d.i=null,d.g.forEach(function(E,I){var B=I.toLowerCase();I!=B&&(Ko(this,I),vr(this,B,E))},d)),d.j=_}function hd(d,_){const E=new ys;if(h.Image){const I=new Image;I.onload=C(hi,E,"TestLoadImage: loaded",!0,_,I),I.onerror=C(hi,E,"TestLoadImage: error",!1,_,I),I.onabort=C(hi,E,"TestLoadImage: abort",!1,_,I),I.ontimeout=C(hi,E,"TestLoadImage: timeout",!1,_,I),h.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=d}else _(!1)}function Na(d,_){const E=new ys,I=new AbortController,B=setTimeout(()=>{I.abort(),hi(E,"TestPingServer: timeout",!1,_)},1e4);fetch(d,{signal:I.signal}).then(Q=>{clearTimeout(B),Q.ok?hi(E,"TestPingServer: ok",!0,_):hi(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(B),hi(E,"TestPingServer: error",!1,_)})}function hi(d,_,E,I,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),I(E)}catch{}}function Oa(){this.g=new Nn}function zi(d,_,E){const I=E||"";try{Sa(d,function(B,Q){let ue=B;p(B)&&(ue=Pu(B)),_.push(I+Q+"="+encodeURIComponent(ue))})}catch(B){throw _.push(I+"type="+encodeURIComponent("_badmap")),B}}function Ss(d){this.l=d.Ub||null,this.j=d.eb||!1}M(Ss,xu),Ss.prototype.g=function(){return new Tr(this.l,this.j)},Ss.prototype.i=function(d){return function(){return d}}({});function Tr(d,_){Ae.call(this),this.D=d,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(Tr,Ae),n=Tr.prototype,n.open=function(d,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=d,this.A=_,this.readyState=1,ji(this)},n.send=function(d){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};d&&(_.body=d),(this.D||h).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qi(this)),this.readyState=0},n.Sa=function(d){if(this.g&&(this.l=d,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=d.headers,this.readyState=2,ji(this)),this.g&&(this.readyState=3,ji(this),this.g)))if(this.responseType==="arraybuffer")d.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in d){if(this.j=d.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ju(this)}else d.text().then(this.Ra.bind(this),this.ga.bind(this))};function ju(d){d.j.read().then(d.Pa.bind(d)).catch(d.ga.bind(d))}n.Pa=function(d){if(this.g){if(this.o&&d.value)this.response.push(d.value);else if(!this.o){var _=d.value?d.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!d.done}))&&(this.response=this.responseText+=_)}d.done?qi(this):ji(this),this.readyState==3&&ju(this)}},n.Ra=function(d){this.g&&(this.response=this.responseText=d,qi(this))},n.Qa=function(d){this.g&&(this.response=d,qi(this))},n.ga=function(){this.g&&qi(this)};function qi(d){d.readyState=4,d.l=null,d.j=null,d.v=null,ji(d)}n.setRequestHeader=function(d,_){this.u.append(d,_)},n.getResponseHeader=function(d){return this.h&&this.h.get(d.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const d=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,d.push(E[0]+": "+E[1]),E=_.next();return d.join(`\r
`)};function ji(d){d.onreadystatechange&&d.onreadystatechange.call(d)}Object.defineProperty(Tr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(d){this.m=d?"include":"same-origin"}});function Hu(d){let _="";return me(d,function(E,I){_+=I,_+=":",_+=E,_+=`\r
`}),_}function tn(d,_,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=Hu(E),typeof d=="string"?E!=null&&encodeURIComponent(String(E)):Qe(d,_,E))}function Je(d){Ae.call(this),this.headers=new Map,this.o=d||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(Je,Ae);var $o=/^https?$/i,Pa=["POST","PUT"];n=Je.prototype,n.Ha=function(d){this.J=d},n.ea=function(d,_,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+d);_=_?_.toUpperCase():"GET",this.D=d,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Aa.g(),this.v=this.o?id(this.o):id(Aa),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(d),!0),this.B=!1}catch(Q){dd(this,Q);return}if(d=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var B in I)E.set(B,I[B]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const Q of I.keys())E.set(Q,I.get(Q));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(Q=>Q.toLowerCase()=="content-type"),B=h.FormData&&d instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Pa,_,void 0))||I||B||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ue]of E)this.g.setRequestHeader(Q,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xa(this),this.u=!0,this.g.send(d),this.u=!1}catch(Q){dd(this,Q)}};function dd(d,_){d.h=!1,d.g&&(d.j=!0,d.g.abort(),d.j=!1),d.l=_,d.m=5,Qo(d),Hi(d)}function Qo(d){d.A||(d.A=!0,ct(d,"complete"),ct(d,"error"))}n.abort=function(d){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=d||7,ct(this,"complete"),ct(this,"abort"),Hi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hi(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Wo(this):this.bb())},n.bb=function(){Wo(this)};function Wo(d){if(d.h&&typeof u<"u"&&(!d.v[1]||di(d)!=4||d.Z()!=2)){if(d.u&&di(d)==4)nd(d.Ea,0,d);else if(ct(d,"readystatechange"),di(d)==4){d.h=!1;try{const ue=d.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var I;if(I=ue===0){var B=String(d.D).match(Bu)[1]||null;!B&&h.self&&h.self.location&&(B=h.self.location.protocol.slice(0,-1)),I=!$o.test(B?B.toLowerCase():"")}E=I}if(E)ct(d,"complete"),ct(d,"success");else{d.m=6;try{var Q=2<di(d)?d.g.statusText:""}catch{Q=""}d.l=Q+" ["+d.Z()+"]",Qo(d)}}finally{Hi(d)}}}}function Hi(d,_){if(d.g){xa(d);const E=d.g,I=d.v[0]?()=>{}:null;d.g=null,d.v=null,_||ct(d,"ready");try{E.onreadystatechange=I}catch{}}}function xa(d){d.I&&(h.clearTimeout(d.I),d.I=null)}n.isActive=function(){return!!this.g};function di(d){return d.g?d.g.readyState:0}n.Z=function(){try{return 2<di(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(d){if(this.g){var _=this.g.responseText;return d&&_.indexOf(d)==0&&(_=_.substring(d.length)),Mi(_)}};function fd(d){try{if(!d.g)return null;if("response"in d.g)return d.g.response;switch(d.H){case"":case"text":return d.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in d.g)return d.g.mozResponseArrayBuffer}return null}catch{return null}}function vp(d){const _={};d=(d.g&&2<=di(d)&&d.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<d.length;I++){if(ae(d[I]))continue;var E=k(d[I]);const B=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Q=_[B]||[];_[B]=Q,Q.push(E)}O(_,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ka(d,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[d]||_}function Yo(d){this.Aa=0,this.i=[],this.j=new ys,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ka("failFast",!1,d),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ka("baseRetryDelayMs",5e3,d),this.cb=ka("retryDelaySeedMs",1e4,d),this.Wa=ka("forwardChannelMaxRetries",2,d),this.wa=ka("forwardChannelRequestTimeoutMs",2e4,d),this.pa=d&&d.xmlHttpFactory||void 0,this.Xa=d&&d.Tb||void 0,this.Ca=d&&d.useFetchStreams||!1,this.L=void 0,this.J=d&&d.supportsCrossDomainXhr||!1,this.K="",this.h=new Lu(d&&d.concurrentRequestLimit),this.Da=new Oa,this.P=d&&d.fastHandshake||!1,this.O=d&&d.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=d&&d.Rb||!1,d&&d.xa&&this.j.xa(),d&&d.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&d&&d.detectBufferingProxy||!1,this.ja=void 0,d&&d.longPollingTimeout&&0<d.longPollingTimeout&&(this.ja=d.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Yo.prototype,n.la=8,n.G=1,n.connect=function(d,_,E,I){Vt(0),this.W=d,this.H=_||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=Ed(this,null,this.W),Jo(this)};function Gu(d){if(md(d),d.G==3){var _=d.U++,E=Rt(d.I);if(Qe(E,"SID",d.K),Qe(E,"RID",_),Qe(E,"TYPE","terminate"),Va(d,E),_=new Bi(d,d.j,_),_.L=2,_.v=Da(Rt(E)),E=!1,h.navigator&&h.navigator.sendBeacon)try{E=h.navigator.sendBeacon(_.v.toString(),"")}catch{}!E&&h.Image&&(new Image().src=_.v,E=!0),E||(_.g=Td(_.j,null),_.g.ea(_.v)),_.F=Date.now(),vt(_)}vd(d)}function Xo(d){d.g&&(Ma(d),d.g.cancel(),d.g=null)}function md(d){Xo(d),d.u&&(h.clearTimeout(d.u),d.u=null),Zo(d),d.h.cancel(),d.s&&(typeof d.s=="number"&&h.clearTimeout(d.s),d.s=null)}function Jo(d){if(!Uu(d.h)&&!d.s){d.s=!0;var _=d.Ga;Ie||P(),pe||(Ie(),pe=!0),qe.add(_,d),d.B=0}}function Ep(d,_){return ld(d.h)>=d.h.j-(d.s?1:0)?!1:d.s?(d.i=_.D.concat(d.i),!0):d.G==1||d.G==2||d.B>=(d.Va?0:d.Wa)?!1:(d.s=_s(w(d.Ga,d,_),Qu(d,d.B)),d.B++,!0)}n.Ga=function(d){if(this.s)if(this.s=null,this.G==1){if(!d){this.U=Math.floor(1e5*Math.random()),d=this.U++;const B=new Bi(this,this.j,d);let Q=this.o;if(this.S&&(Q?(Q=R(Q),N(Q,this.S)):Q=this.S),this.m!==null||this.O||(B.H=Q,Q=null),this.P)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(_+=I,4096<_){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=pd(this,B,_),E=Rt(this.I),Qe(E,"RID",d),Qe(E,"CVER",22),this.D&&Qe(E,"X-HTTP-Session-Id",this.D),Va(this,E),Q&&(this.O?_="headers="+encodeURIComponent(String(Hu(Q)))+"&"+_:this.m&&tn(E,this.m,Q)),Is(this.h,B),this.Ua&&Qe(E,"TYPE","init"),this.P?(Qe(E,"$req",_),Qe(E,"SID","null"),B.T=!0,Ni(B,E,null)):Ni(B,E,_),this.G=2}}else this.G==3&&(d?Ku(this,d):this.i.length==0||Uu(this.h)||Ku(this))};function Ku(d,_){var E;_?E=_.l:E=d.U++;const I=Rt(d.I);Qe(I,"SID",d.K),Qe(I,"RID",E),Qe(I,"AID",d.T),Va(d,I),d.m&&d.o&&tn(I,d.m,d.o),E=new Bi(d,d.j,E,d.B+1),d.m===null&&(E.H=d.o),_&&(d.i=_.D.concat(d.i)),_=pd(d,E,1e3),E.I=Math.round(.5*d.wa)+Math.round(.5*d.wa*Math.random()),Is(d.h,E),Ni(E,I,_)}function Va(d,_){d.H&&me(d.H,function(E,I){Qe(_,I,E)}),d.l&&Sa({},function(E,I){Qe(_,I,E)})}function pd(d,_,E){E=Math.min(d.i.length,E);var I=d.l?w(d.l.Na,d.l,d):null;e:{var B=d.i;let Q=-1;for(;;){const ue=["count="+E];Q==-1?0<E?(Q=B[0].g,ue.push("ofs="+Q)):Q=0:ue.push("ofs="+Q);let je=!0;for(let $t=0;$t<E;$t++){let He=B[$t].g;const nn=B[$t].map;if(He-=Q,0>He)Q=Math.max(0,B[$t].g-100),je=!1;else try{zi(nn,ue,"req"+He+"_")}catch{I&&I(nn)}}if(je){I=ue.join("&");break e}}}return d=d.i.splice(0,E),_.D=d,I}function gd(d){if(!d.g&&!d.u){d.Y=1;var _=d.Fa;Ie||P(),pe||(Ie(),pe=!0),qe.add(_,d),d.v=0}}function $u(d){return d.g||d.u||3<=d.v?!1:(d.Y++,d.u=_s(w(d.Fa,d),Qu(d,d.v)),d.v++,!0)}n.Fa=function(){if(this.u=null,_d(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var d=2*this.R;this.j.info("BP detection timer enabled: "+d),this.A=_s(w(this.ab,this),d)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),Xo(this),_d(this))};function Ma(d){d.A!=null&&(h.clearTimeout(d.A),d.A=null)}function _d(d){d.g=new Bi(d,d.j,"rpc",d.Y),d.m===null&&(d.g.H=d.o),d.g.O=0;var _=Rt(d.qa);Qe(_,"RID","rpc"),Qe(_,"SID",d.K),Qe(_,"AID",d.T),Qe(_,"CI",d.F?"0":"1"),!d.F&&d.ja&&Qe(_,"TO",d.ja),Qe(_,"TYPE","xmlhttp"),Va(d,_),d.m&&d.o&&tn(_,d.m,d.o),d.L&&(d.g.I=d.L);var E=d.g;d=d.ia,E.L=1,E.v=Da(Rt(_)),E.m=null,E.P=!0,gr(E,d)}n.Za=function(){this.C!=null&&(this.C=null,Xo(this),$u(this),Vt(19))};function Zo(d){d.C!=null&&(h.clearTimeout(d.C),d.C=null)}function yd(d,_){var E=null;if(d.g==_){Zo(d),Ma(d),d.g=null;var I=2}else if(bs(d.h,_))E=_.D,li(d.h,_),I=1;else return;if(d.G!=0){if(_.o)if(I==1){E=_.m?_.m.length:0,_=Date.now()-_.F;var B=d.B;I=Fo(),ct(I,new sd(I,E)),Jo(d)}else gd(d);else if(B=_.s,B==3||B==0&&0<_.X||!(I==1&&Ep(d,_)||I==2&&$u(d)))switch(E&&0<E.length&&(_=d.h,_.i=_.i.concat(E)),B){case 1:wr(d,5);break;case 4:wr(d,10);break;case 3:wr(d,6);break;default:wr(d,2)}}}function Qu(d,_){let E=d.Ta+Math.floor(Math.random()*d.cb);return d.isActive()||(E*=2),E*_}function wr(d,_){if(d.j.info("Error code "+_),_==2){var E=w(d.fb,d),I=d.Xa;const B=!I;I=new _r(I||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||As(I,"https"),Da(I),B?hd(I.toString(),E):Na(I.toString(),E)}else Vt(2);d.G=0,d.l&&d.l.sa(_),vd(d),md(d)}n.fb=function(d){d?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function vd(d){if(d.G=0,d.ka=[],d.l){const _=On(d.h);(_.length!=0||d.i.length!=0)&&(j(d.ka,_),j(d.ka,d.i),d.h.i.length=0,q(d.i),d.i.length=0),d.l.ra()}}function Ed(d,_,E){var I=E instanceof _r?Rt(E):new _r(E);if(I.g!="")_&&(I.g=_+"."+I.g),Ca(I,I.s);else{var B=h.location;I=B.protocol,_=_?_+"."+B.hostname:B.hostname,B=+B.port;var Q=new _r(null);I&&As(Q,I),_&&(Q.g=_),B&&Ca(Q,B),E&&(Q.l=E),I=Q}return E=d.D,_=d.ya,E&&_&&Qe(I,E,_),Qe(I,"VER",d.la),Va(d,I),I}function Td(d,_,E){if(_&&!d.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=d.Ca&&!d.pa?new Je(new Ss({eb:E})):new Je(d.pa),_.Ha(d.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wd(){}n=wd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function el(){}el.prototype.g=function(d,_){return new Pn(d,_)};function Pn(d,_){Ae.call(this),this.g=new Yo(_),this.l=d,this.h=_&&_.messageUrlParams||null,d=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(d?d["X-Client-Protocol"]="webchannel":d={"X-Client-Protocol":"webchannel"}),this.g.o=d,d=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(d?d["X-WebChannel-Content-Type"]=_.messageContentType:d={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(d?d["X-WebChannel-Client-Profile"]=_.va:d={"X-WebChannel-Client-Profile":_.va}),this.g.S=d,(d=_&&_.Sb)&&!ae(d)&&(this.g.m=d),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ae(_)&&(this.g.D=_,d=this.h,d!==null&&_ in d&&(d=this.h,_ in d&&delete d[_])),this.j=new Gi(this)}M(Pn,Ae),Pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pn.prototype.close=function(){Gu(this.g)},Pn.prototype.o=function(d){var _=this.g;if(typeof d=="string"){var E={};E.__data__=d,d=E}else this.u&&(E={},E.__data__=Pu(d),d=E);_.i.push(new mp(_.Ya++,d)),_.G==3&&Jo(_)},Pn.prototype.N=function(){this.g.l=null,delete this.j,Gu(this.g),delete this.g,Pn.aa.N.call(this)};function bd(d){ms.call(this),d.__headers__&&(this.headers=d.__headers__,this.statusCode=d.__status__,delete d.__headers__,delete d.__status__);var _=d.__sm__;if(_){e:{for(const E in _){d=E;break e}d=void 0}(this.i=d)&&(d=this.i,_=_!==null&&d in _?_[d]:void 0),this.data=_}else this.data=d}M(bd,ms);function Id(){Di.call(this),this.status=1}M(Id,Di);function Gi(d){this.g=d}M(Gi,wd),Gi.prototype.ua=function(){ct(this.g,"a")},Gi.prototype.ta=function(d){ct(this.g,new bd(d))},Gi.prototype.sa=function(d){ct(this.g,new Id)},Gi.prototype.ra=function(){ct(this.g,"b")},el.prototype.createWebChannel=el.prototype.g,Pn.prototype.send=Pn.prototype.o,Pn.prototype.open=Pn.prototype.m,Pn.prototype.close=Pn.prototype.close,pR=function(){return new el},mR=function(){return Fo()},fR=oi,ty={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Kt.NO_ERROR=0,Kt.TIMEOUT=8,Kt.HTTP_ERROR=6,Mf=Kt,pr.COMPLETE="complete",dR=pr,rd.EventType=Li,Li.OPEN="a",Li.CLOSE="b",Li.ERROR="c",Li.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,Qc=rd,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,hR=Je}).apply(typeof Af<"u"?Af:typeof self<"u"?self:typeof window<"u"?window:{});const fb="@firebase/firestore";/**
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
 */let ln=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ln.UNAUTHENTICATED=new ln(null),ln.GOOGLE_CREDENTIALS=new ln("google-credentials-uid"),ln.FIRST_PARTY=new ln("first-party-uid"),ln.MOCK_USER=new ln("mock-user");/**
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
 */let yu="11.0.2";/**
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
 */const la=new Rm("@firebase/firestore");function Ml(){return la.logLevel}function sk(n){la.setLogLevel(n)}function ne(n,...e){if(la.logLevel<=Me.DEBUG){const t=e.map(Xy);la.debug(`Firestore (${yu}): ${n}`,...t)}}function Lt(n,...e){if(la.logLevel<=Me.ERROR){const t=e.map(Xy);la.error(`Firestore (${yu}): ${n}`,...t)}}function cr(n,...e){if(la.logLevel<=Me.WARN){const t=e.map(Xy);la.warn(`Firestore (${yu}): ${n}`,...t)}}function Xy(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function ge(n="Unexpected state"){const e=`FIRESTORE (${yu}) INTERNAL ASSERTION FAILED: `+n;throw Lt(e),new Error(e)}function Ee(n,e){n||ge()}function ak(n,e){n||ge()}function fe(n,e){return n}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Rn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class gR{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ok{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ln.UNAUTHENTICATED))}shutdown(){}}class lk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class uk{constructor(e){this.t=e,this.currentUser=ln.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ee(this.o===void 0);let i=this.i;const s=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let o=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new yn,e.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const m=o;e.enqueueRetryable(async()=>{await m.promise,await s(this.currentUser)})},h=m=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(m=>h(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?h(m):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new yn)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ee(typeof i.accessToken=="string"),new gR(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new ln(e)}}class ck{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=ln.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class hk{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new ck(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ln.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ee(this.o===void 0);const i=o=>{o.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,ne("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const s=o=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ee(typeof t.token=="string"),this.R=t.token,new dk(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function mk(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class _R{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=mk(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<t&&(i+=e.charAt(s[o]%e.length))}return i}}function De(n,e){return n<e?-1:n>e?1:0}function Zl(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}function yR(n){return n+"\0"}/**
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
 */class yt{static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new yt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Z($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new yt(0,0))}static max(){return new we(new yt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class gh{constructor(e,t,i){t===void 0?t=0:t>e.length&&ge(),i===void 0?i=e.length-t:i>e.length-t&&ge(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return gh.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gh?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const o=e.get(s),u=t.get(s);if(o<u)return-1;if(o>u)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Be extends gh{construct(e,t,i){return new Be(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new Z($.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new Be(t)}static emptyPath(){return new Be([])}}const pk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends gh{construct(e,t,i){return new gt(e,t,i)}static isValidIdentifier(e){return pk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const o=()=>{if(i.length===0)throw new Z($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let u=!1;for(;s<e.length;){const h=e[s];if(h==="\\"){if(s+1===e.length)throw new Z($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[s+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new Z($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,s+=2}else h==="`"?(u=!u,s++):h!=="."||u?(i+=h,s++):(o(),s++)}if(o(),u)throw new Z($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(t)}static emptyPath(){return new gt([])}}/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Be.fromString(e))}static fromName(e){return new he(Be.fromString(e).popFirst(5))}static empty(){return new he(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Be.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Be(e.slice()))}}/**
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
 */class nm{constructor(e,t,i,s){this.indexId=e,this.collectionGroup=t,this.fields=i,this.indexState=s}}function ny(n){return n.fields.find(e=>e.kind===2)}function ro(n){return n.fields.filter(e=>e.kind!==2)}nm.UNKNOWN_ID=-1;class Lf{constructor(e,t){this.fieldPath=e,this.kind=t}}class _h{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new _h(0,si.min())}}function vR(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=we.fromTimestamp(i===1e9?new yt(t+1,0):new yt(t,i));return new si(s,he.empty(),e)}function ER(n){return new si(n.readTime,n.key,-1)}class si{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new si(we.min(),he.empty(),-1)}static max(){return new si(we.max(),he.empty(),-1)}}function Jy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(n.documentKey,e.documentKey),t!==0?t:De(n.largestBatchId,e.largestBatchId))}/**
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
 */const TR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function _a(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==TR)throw n;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):F.reject(t)}static resolve(e){return new F((t,i)=>{t(e)})}static reject(e){return new F((t,i)=>{i(e)})}static waitFor(e){return new F((t,i)=>{let s=0,o=0,u=!1;e.forEach(h=>{++s,h.next(()=>{++o,u&&o===s&&t()},m=>i(m))}),u=!0,o===s&&t()})}static or(e){let t=F.resolve(!1);for(const i of e)t=t.next(s=>s?F.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,o)=>{i.push(t.call(this,s,o))}),this.waitFor(i)}static mapArray(e,t){return new F((i,s)=>{const o=e.length,u=new Array(o);let h=0;for(let m=0;m<o;m++){const p=m;t(e[p]).next(y=>{u[p]=y,++h,h===o&&i(u)},y=>s(y))}})}static doWhile(e,t){return new F((i,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):i()};o()})}}/**
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
 */class Cm{static open(e,t,i,s){try{return new Cm(t,e.transaction(s,i))}catch(o){throw new Zc(t,o)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new yn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Zc(e,t.error)):this.V.resolve()},this.transaction.onerror=i=>{const s=Zy(i.target.error);this.V.reject(new Zc(e,s))}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(ne("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new _k(t)}}class or{static delete(e){return ne("SimpleDb","Removing database:",e),ao(window.indexedDB.deleteDatabase(e)).toPromise()}static p(){if(!fh())return!1;if(or.S())return!0;const e=bt(),t=or.D(e),i=0<t&&t<10,s=bR(e),o=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||i||o)}static S(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static C(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(i)}constructor(e,t,i){this.name=e,this.version=t,this.F=i,or.D(bt())===12.2&&Lt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async M(e){return this.db||(ne("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,i)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=o=>{const u=o.target.result;t(u)},s.onblocked=()=>{i(new Zc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=o=>{const u=o.target.error;u.name==="VersionError"?i(new Z($.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?i(new Z($.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):i(new Zc(e,u))},s.onupgradeneeded=o=>{ne("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const u=o.target.result;this.F.O(u,s.transaction,o.oldVersion,this.version).next(()=>{ne("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,i,s){const o=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.M(e);const h=Cm.open(this.db,e,o?"readonly":"readwrite",i),m=s(h).next(p=>(h.g(),p)).catch(p=>(h.abort(p),F.reject(p))).toPromise();return m.catch(()=>{}),await h.m,m}catch(h){const m=h,p=m.name!=="FirebaseError"&&u<3;if(ne("SimpleDb","Transaction failed with error:",m.message,"Retrying:",p),this.close(),!p)return Promise.reject(m)}}}close(){this.db&&this.db.close(),this.db=void 0}}function bR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class gk{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return ao(this.B.delete())}}class Zc extends Z{constructor(e,t){super($.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ya(n){return n.name==="IndexedDbTransactionError"}class _k{constructor(e){this.store=e}put(e,t){let i;return t!==void 0?(ne("SimpleDb","PUT",this.store.name,e,t),i=this.store.put(t,e)):(ne("SimpleDb","PUT",this.store.name,"<auto-key>",e),i=this.store.put(e)),ao(i)}add(e){return ne("SimpleDb","ADD",this.store.name,e,e),ao(this.store.add(e))}get(e){return ao(this.store.get(e)).next(t=>(t===void 0&&(t=null),ne("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return ne("SimpleDb","DELETE",this.store.name,e),ao(this.store.delete(e))}count(){return ne("SimpleDb","COUNT",this.store.name),ao(this.store.count())}U(e,t){const i=this.options(e,t),s=i.index?this.store.index(i.index):this.store;if(typeof s.getAll=="function"){const o=s.getAll(i.range);return new F((u,h)=>{o.onerror=m=>{h(m.target.error)},o.onsuccess=m=>{u(m.target.result)}})}{const o=this.cursor(i),u=[];return this.W(o,(h,m)=>{u.push(m)}).next(()=>u)}}G(e,t){const i=this.store.getAll(e,t===null?void 0:t);return new F((s,o)=>{i.onerror=u=>{o(u.target.error)},i.onsuccess=u=>{s(u.target.result)}})}j(e,t){ne("SimpleDb","DELETE ALL",this.store.name);const i=this.options(e,t);i.H=!1;const s=this.cursor(i);return this.W(s,(o,u,h)=>h.delete())}J(e,t){let i;t?i=e:(i={},t=e);const s=this.cursor(i);return this.W(s,t)}Y(e){const t=this.cursor({});return new F((i,s)=>{t.onerror=o=>{const u=Zy(o.target.error);s(u)},t.onsuccess=o=>{const u=o.target.result;u?e(u.primaryKey,u.value).next(h=>{h?u.continue():i()}):i()}})}W(e,t){const i=[];return new F((s,o)=>{e.onerror=u=>{o(u.target.error)},e.onsuccess=u=>{const h=u.target.result;if(!h)return void s();const m=new gk(h),p=t(h.primaryKey,h.value,m);if(p instanceof F){const y=p.catch(v=>(m.done(),F.reject(v)));i.push(y)}m.isDone?s():m.K===null?h.continue():h.continue(m.K)}}).next(()=>F.waitFor(i))}options(e,t){let i;return e!==void 0&&(typeof e=="string"?i=e:t=e),{index:i,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const i=this.store.index(e.index);return e.H?i.openKeyCursor(e.range,t):i.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ao(n){return new F((e,t)=>{n.onsuccess=i=>{const s=i.target.result;e(s)},n.onerror=i=>{const s=Zy(i.target.error);t(s)}})}let mb=!1;function Zy(n){const e=or.D(bt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const i=new Z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return mb||(mb=!0,setTimeout(()=>{throw i},0)),i}}return n}class yk{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){ne("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{ne("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){ya(t)?ne("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await _a(t)}await this.X(6e4)})}}class vk{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const i=new Set;let s=t,o=!0;return F.doWhile(()=>o===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(u=>{if(u!==null&&!i.has(u))return ne("IndexBackfiller",`Processing collection: ${u}`),this.ne(e,u,s).next(h=>{s-=h,i.add(u)});o=!1})).next(()=>t-s)}ne(e,t,i){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,i).next(o=>{const u=o.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next(()=>this.re(s,o)).next(h=>(ne("IndexBackfiller",`Updating offset: ${h}`),this.localStore.indexManager.updateCollectionGroup(e,t,h))).next(()=>u.size)}))}re(e,t){let i=e;return t.changes.forEach((s,o)=>{const u=ER(o);Jy(u,i)>0&&(i=u)}),new si(i.readTime,i.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Kn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Kn.oe=-1;function Vh(n){return n==null}function yh(n){return n===0&&1/n==-1/0}function IR(n){return typeof n=="number"&&Number.isInteger(n)&&!yh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Sn(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=pb(e)),e=Ek(n.get(t),e);return pb(e)}function Ek(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case"":t+="";break;default:t+=o}}return t}function pb(n){return n+""}function rr(n){const e=n.length;if(Ee(e>=2),e===2)return Ee(n.charAt(0)===""&&n.charAt(1)===""),Be.emptyPath();const t=e-2,i=[];let s="";for(let o=0;o<e;){const u=n.indexOf("",o);switch((u<0||u>t)&&ge(),n.charAt(u+1)){case"":const h=n.substring(o,u);let m;s.length===0?m=h:(s+=h,m=s,s=""),i.push(m);break;case"":s+=n.substring(o,u),s+="\0";break;case"":s+=n.substring(o,u+1);break;default:ge()}o=u+2}return new Be(i)}/**
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
 */const gb=["userId","batchId"];/**
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
 */function Uf(n,e){return[n,Sn(e)]}function AR(n,e,t){return[n,Sn(e),t]}const Tk={},wk=["prefixPath","collectionGroup","readTime","documentId"],bk=["prefixPath","collectionGroup","documentId"],Ik=["collectionGroup","readTime","prefixPath","documentId"],Ak=["canonicalId","targetId"],Rk=["targetId","path"],Sk=["path","targetId"],Ck=["collectionId","parent"],Dk=["indexId","uid"],Nk=["uid","sequenceNumber"],Ok=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Pk=["indexId","uid","orderedDocumentKey"],xk=["userId","collectionPath","documentId"],kk=["userId","collectionPath","largestBatchId"],Vk=["userId","collectionGroup","largestBatchId"],RR=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Mk=[...RR,"documentOverlays"],SR=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],CR=SR,ev=[...CR,"indexConfiguration","indexState","indexEntries"],Lk=ev,Uk=[...ev,"globals"];/**
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
 */class iy extends wR{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Jt(n,e){const t=fe(n);return or.C(t._e,e)}/**
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
 */function _b(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function va(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function DR(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class lt{constructor(e,t){this.comparator=e,this.root=t||gn.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gn.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rf(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rf(this.root,e,this.comparator,!0)}}class Rf{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?i(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gn{constructor(e,t,i,s,o){this.key=e,this.value=t,this.color=i??gn.RED,this.left=s??gn.EMPTY,this.right=o??gn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,o){return new gn(e??this.key,t??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const o=i(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,i),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return gn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return gn.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}gn.EMPTY=null,gn.RED=!0,gn.BLACK=!1;gn.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,t,i,s,o){return this}insert(e,t,i){return new gn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class et{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yb(this.data.getIterator())}getIteratorFrom(e){return new yb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new et(this.comparator);return t.data=e,t}}class yb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Nl(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class $n{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new $n([])}unionWith(e){let t=new et(gt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new $n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zl(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class NR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function Bk(){return typeof atob<"u"}/**
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
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new NR("Invalid base64 string: "+o):o}}(e);return new Pt(t)}static fromUint8Array(e){const t=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const Fk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xr(n){if(Ee(!!n),typeof n=="string"){let e=0;const t=Fk.exec(n);if(Ee(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:pt(n.seconds),nanos:pt(n.nanos)}}function pt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jr(n){return typeof n=="string"?Pt.fromBase64String(n):Pt.fromUint8Array(n)}/**
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
 */function Dm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Nm(n){const e=n.mapValue.fields.__previous_value__;return Dm(e)?Nm(e):e}function vh(n){const e=Xr(n.mapValue.fields.__local_write_time__.timestampValue);return new yt(e.seconds,e.nanos)}/**
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
 */class zk{constructor(e,t,i,s,o,u,h,m,p){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=m,this.useFetchStreams=p}}class ua{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ua("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ua&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ta={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Bf={nullValue:"NULL_VALUE"};function ca(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Dm(n)?4:OR(n)?9007199254740991:Om(n)?10:11:ge()}function hr(n,e){if(n===e)return!0;const t=ca(n);if(t!==ca(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return vh(n).isEqual(vh(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=Xr(s.timestampValue),h=Xr(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return Jr(s.bytesValue).isEqual(Jr(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return pt(s.geoPointValue.latitude)===pt(o.geoPointValue.latitude)&&pt(s.geoPointValue.longitude)===pt(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return pt(s.integerValue)===pt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=pt(s.doubleValue),h=pt(o.doubleValue);return u===h?yh(u)===yh(h):isNaN(u)&&isNaN(h)}return!1}(n,e);case 9:return Zl(n.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},h=o.mapValue.fields||{};if(_b(u)!==_b(h))return!1;for(const m in u)if(u.hasOwnProperty(m)&&(h[m]===void 0||!hr(u[m],h[m])))return!1;return!0}(n,e);default:return ge()}}function Eh(n,e){return(n.values||[]).find(t=>hr(t,e))!==void 0}function ha(n,e){if(n===e)return 0;const t=ca(n),i=ca(e);if(t!==i)return De(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(n.booleanValue,e.booleanValue);case 2:return function(o,u){const h=pt(o.integerValue||o.doubleValue),m=pt(u.integerValue||u.doubleValue);return h<m?-1:h>m?1:h===m?0:isNaN(h)?isNaN(m)?0:-1:1}(n,e);case 3:return vb(n.timestampValue,e.timestampValue);case 4:return vb(vh(n),vh(e));case 5:return De(n.stringValue,e.stringValue);case 6:return function(o,u){const h=Jr(o),m=Jr(u);return h.compareTo(m)}(n.bytesValue,e.bytesValue);case 7:return function(o,u){const h=o.split("/"),m=u.split("/");for(let p=0;p<h.length&&p<m.length;p++){const y=De(h[p],m[p]);if(y!==0)return y}return De(h.length,m.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,u){const h=De(pt(o.latitude),pt(u.latitude));return h!==0?h:De(pt(o.longitude),pt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Eb(n.arrayValue,e.arrayValue);case 10:return function(o,u){var h,m,p,y;const v=o.fields||{},w=u.fields||{},C=(h=v.value)===null||h===void 0?void 0:h.arrayValue,M=(m=w.value)===null||m===void 0?void 0:m.arrayValue,q=De(((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0,((y=M==null?void 0:M.values)===null||y===void 0?void 0:y.length)||0);return q!==0?q:Eb(C,M)}(n.mapValue,e.mapValue);case 11:return function(o,u){if(o===ta.mapValue&&u===ta.mapValue)return 0;if(o===ta.mapValue)return 1;if(u===ta.mapValue)return-1;const h=o.fields||{},m=Object.keys(h),p=u.fields||{},y=Object.keys(p);m.sort(),y.sort();for(let v=0;v<m.length&&v<y.length;++v){const w=De(m[v],y[v]);if(w!==0)return w;const C=ha(h[m[v]],p[y[v]]);if(C!==0)return C}return De(m.length,y.length)}(n.mapValue,e.mapValue);default:throw ge()}}function vb(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return De(n,e);const t=Xr(n),i=Xr(e),s=De(t.seconds,i.seconds);return s!==0?s:De(t.nanos,i.nanos)}function Eb(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const o=ha(t[s],i[s]);if(o)return o}return De(t.length,i.length)}function eu(n){return ry(n)}function ry(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Xr(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Jr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return he.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",s=!0;for(const o of t.values||[])s?s=!1:i+=",",i+=ry(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const u of i)o?o=!1:s+=",",s+=`${u}:${ry(t.fields[u])}`;return s+"}"}(n.mapValue):ge()}function Ff(n){switch(ca(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Nm(n);return e?16+Ff(e):16;case 5:return 2*n.stringValue.length;case 6:return Jr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,o)=>s+Ff(o),0)}(n.arrayValue);case 10:case 11:return function(i){let s=0;return va(i.fields,(o,u)=>{s+=o.length+Ff(u)}),s}(n.mapValue);default:throw ge()}}function To(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function sy(n){return!!n&&"integerValue"in n}function Th(n){return!!n&&"arrayValue"in n}function Tb(n){return!!n&&"nullValue"in n}function wb(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function zf(n){return!!n&&"mapValue"in n}function Om(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function eh(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return va(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=eh(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=eh(n.arrayValue.values[t]);return e}return Object.assign({},n)}function OR(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const PR={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function qk(n){return"nullValue"in n?Bf:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?To(ua.empty(),he.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Om(n)?PR:{mapValue:{}}:ge()}function jk(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?To(ua.empty(),he.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?PR:"mapValue"in n?Om(n)?{mapValue:{}}:ta:ge()}function bb(n,e){const t=ha(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Ib(n,e){const t=ha(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!zf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eh(t)}setAll(e){let t=gt.emptyPath(),i={},s=[];e.forEach((u,h)=>{if(!t.isImmediateParentOf(h)){const m=this.getFieldsMap(t);this.applyChanges(m,i,s),i={},s=[],t=h.popLast()}u?i[h.lastSegment()]=eh(u):s.push(h.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,i,s)}delete(e){const t=this.field(e.popLast());zf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];zf(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){va(t,(s,o)=>e[s]=o);for(const s of i)delete e[s]}clone(){return new _n(eh(this.value))}}function xR(n){const e=[];return va(n.fields,(t,i)=>{const s=new gt([t]);if(zf(i)){const o=xR(i.mapValue).fields;if(o.length===0)e.push(s);else for(const u of o)e.push(s.child(u))}else e.push(s)}),new $n(e)}/**
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
 */class ht{constructor(e,t,i,s,o,u,h){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(e){return new ht(e,0,we.min(),we.min(),we.min(),_n.empty(),0)}static newFoundDocument(e,t,i,s){return new ht(e,1,t,we.min(),i,s,0)}static newNoDocument(e,t){return new ht(e,2,t,we.min(),we.min(),_n.empty(),0)}static newUnknownDocument(e,t){return new ht(e,3,t,we.min(),we.min(),_n.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class da{constructor(e,t){this.position=e,this.inclusive=t}}function Ab(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const o=e[s],u=n.position[s];if(o.field.isKeyField()?i=he.comparator(he.fromName(u.referenceValue),t.key):i=ha(u,t.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Rb(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!hr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class wh{constructor(e,t="asc"){this.field=e,this.dir=t}}function Hk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class kR{}class Fe extends kR{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new Gk(e,t,i):t==="array-contains"?new Qk(e,i):t==="in"?new FR(e,i):t==="not-in"?new Wk(e,i):t==="array-contains-any"?new Yk(e,i):new Fe(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Kk(e,i):new $k(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ha(t,this.value)):t!==null&&ca(this.value)===ca(t)&&this.matchesComparison(ha(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ze extends kR{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ze(e,t)}matches(e){return tu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function tu(n){return n.op==="and"}function ay(n){return n.op==="or"}function tv(n){return VR(n)&&tu(n)}function VR(n){for(const e of n.filters)if(e instanceof Ze)return!1;return!0}function oy(n){if(n instanceof Fe)return n.field.canonicalString()+n.op.toString()+eu(n.value);if(tv(n))return n.filters.map(e=>oy(e)).join(",");{const e=n.filters.map(t=>oy(t)).join(",");return`${n.op}(${e})`}}function MR(n,e){return n instanceof Fe?function(i,s){return s instanceof Fe&&i.op===s.op&&i.field.isEqual(s.field)&&hr(i.value,s.value)}(n,e):n instanceof Ze?function(i,s){return s instanceof Ze&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,u,h)=>o&&MR(u,s.filters[h]),!0):!1}(n,e):void ge()}function LR(n,e){const t=n.filters.concat(e);return Ze.create(t,n.op)}function UR(n){return n instanceof Fe?function(t){return`${t.field.canonicalString()} ${t.op} ${eu(t.value)}`}(n):n instanceof Ze?function(t){return t.op.toString()+" {"+t.getFilters().map(UR).join(" ,")+"}"}(n):"Filter"}class Gk extends Fe{constructor(e,t,i){super(e,t,i),this.key=he.fromName(i.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class Kk extends Fe{constructor(e,t){super(e,"in",t),this.keys=BR("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $k extends Fe{constructor(e,t){super(e,"not-in",t),this.keys=BR("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function BR(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>he.fromName(i.referenceValue))}class Qk extends Fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Th(t)&&Eh(t.arrayValue,this.value)}}class FR extends Fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Eh(this.value.arrayValue,t)}}class Wk extends Fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Eh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Eh(this.value.arrayValue,t)}}class Yk extends Fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Th(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Eh(this.value.arrayValue,i))}}/**
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
 */class Xk{constructor(e,t=null,i=[],s=[],o=null,u=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=u,this.endAt=h,this.ue=null}}function ly(n,e=null,t=[],i=[],s=null,o=null,u=null){return new Xk(n,e,t,i,s,o,u)}function wo(n){const e=fe(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>oy(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),Vh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>eu(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>eu(i)).join(",")),e.ue=t}return e.ue}function Mh(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Hk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!MR(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Rb(n.startAt,e.startAt)&&Rb(n.endAt,e.endAt)}function im(n){return he.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function rm(n,e){return n.filters.filter(t=>t instanceof Fe&&t.field.isEqual(e))}function Sb(n,e,t){let i=Bf,s=!0;for(const o of rm(n,e)){let u=Bf,h=!0;switch(o.op){case"<":case"<=":u=qk(o.value);break;case"==":case"in":case">=":u=o.value;break;case">":u=o.value,h=!1;break;case"!=":case"not-in":u=Bf}bb({value:i,inclusive:s},{value:u,inclusive:h})<0&&(i=u,s=h)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];bb({value:i,inclusive:s},{value:u,inclusive:t.inclusive})<0&&(i=u,s=t.inclusive);break}}return{value:i,inclusive:s}}function Cb(n,e,t){let i=ta,s=!0;for(const o of rm(n,e)){let u=ta,h=!0;switch(o.op){case">=":case">":u=jk(o.value),h=!1;break;case"==":case"in":case"<=":u=o.value;break;case"<":u=o.value,h=!1;break;case"!=":case"not-in":u=ta}Ib({value:i,inclusive:s},{value:u,inclusive:h})>0&&(i=u,s=h)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];Ib({value:i,inclusive:s},{value:u,inclusive:t.inclusive})>0&&(i=u,s=t.inclusive);break}}return{value:i,inclusive:s}}/**
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
 */class is{constructor(e,t=null,i=[],s=[],o=null,u="F",h=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=m,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function zR(n,e,t,i,s,o,u,h){return new is(n,e,t,i,s,o,u,h)}function vu(n){return new is(n)}function Db(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function nv(n){return n.collectionGroup!==null}function jl(n){const e=fe(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new et(gt.comparator);return u.filters.forEach(m=>{m.getFlattenedFilters().forEach(p=>{p.isInequality()&&(h=h.add(p.field))})}),h})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new wh(o,i))}),t.has(gt.keyField().canonicalString())||e.ce.push(new wh(gt.keyField(),i))}return e.ce}function Fn(n){const e=fe(n);return e.le||(e.le=Jk(e,jl(n))),e.le}function Jk(n,e){if(n.limitType==="F")return ly(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new wh(s.field,o)});const t=n.endAt?new da(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new da(n.startAt.position,n.startAt.inclusive):null;return ly(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function uy(n,e){const t=n.filters.concat([e]);return new is(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function sm(n,e,t){return new is(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Lh(n,e){return Mh(Fn(n),Fn(e))&&n.limitType===e.limitType}function qR(n){return`${wo(Fn(n))}|lt:${n.limitType}`}function Ll(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(s=>UR(s)).join(", ")}]`),Vh(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>eu(s)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>eu(s)).join(",")),`Target(${i})`}(Fn(n))}; limitType=${n.limitType})`}function Uh(n,e){return e.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):he.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,e)&&function(i,s){for(const o of jl(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(i,s){return!(i.startAt&&!function(u,h,m){const p=Ab(u,h,m);return u.inclusive?p<=0:p<0}(i.startAt,jl(i),s)||i.endAt&&!function(u,h,m){const p=Ab(u,h,m);return u.inclusive?p>=0:p>0}(i.endAt,jl(i),s))}(n,e)}function jR(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function HR(n){return(e,t)=>{let i=!1;for(const s of jl(n)){const o=Zk(s,e,t);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function Zk(n,e,t){const i=n.field.isKeyField()?he.comparator(e.key,t.key):function(o,u,h){const m=u.data.field(o),p=h.data.field(o);return m!==null&&p!==null?ha(m,p):ge()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return ge()}}/**
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
 */class rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){va(this.inner,(t,i)=>{for(const[s,o]of i)e(s,o)})}isEmpty(){return DR(this.inner)}size(){return this.innerSize}}/**
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
 */const eV=new lt(he.comparator);function Qn(){return eV}const GR=new lt(he.comparator);function Wc(...n){let e=GR;for(const t of n)e=e.insert(t.key,t);return e}function KR(n){let e=GR;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function sr(){return th()}function $R(){return th()}function th(){return new rs(n=>n.toString(),(n,e)=>n.isEqual(e))}const tV=new lt(he.comparator),nV=new et(he.comparator);function Oe(...n){let e=nV;for(const t of n)e=e.add(t);return e}const iV=new et(De);function iv(){return iV}/**
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
 */function rv(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yh(e)?"-0":e}}function QR(n){return{integerValue:""+n}}function WR(n,e){return IR(e)?QR(e):rv(n,e)}/**
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
 */class Pm{constructor(){this._=void 0}}function rV(n,e,t){return n instanceof nu?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Dm(o)&&(o=Nm(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(t,e):n instanceof bo?XR(n,e):n instanceof Io?JR(n,e):function(s,o){const u=YR(s,o),h=Nb(u)+Nb(s.Pe);return sy(u)&&sy(s.Pe)?QR(h):rv(s.serializer,h)}(n,e)}function sV(n,e,t){return n instanceof bo?XR(n,e):n instanceof Io?JR(n,e):t}function YR(n,e){return n instanceof iu?function(i){return sy(i)||function(o){return!!o&&"doubleValue"in o}(i)}(e)?e:{integerValue:0}:null}class nu extends Pm{}class bo extends Pm{constructor(e){super(),this.elements=e}}function XR(n,e){const t=ZR(e);for(const i of n.elements)t.some(s=>hr(s,i))||t.push(i);return{arrayValue:{values:t}}}class Io extends Pm{constructor(e){super(),this.elements=e}}function JR(n,e){let t=ZR(e);for(const i of n.elements)t=t.filter(s=>!hr(s,i));return{arrayValue:{values:t}}}class iu extends Pm{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Nb(n){return pt(n.integerValue||n.doubleValue)}function ZR(n){return Th(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Bh{constructor(e,t){this.field=e,this.transform=t}}function aV(n,e){return n.field.isEqual(e.field)&&function(i,s){return i instanceof bo&&s instanceof bo||i instanceof Io&&s instanceof Io?Zl(i.elements,s.elements,hr):i instanceof iu&&s instanceof iu?hr(i.Pe,s.Pe):i instanceof nu&&s instanceof nu}(n.transform,e.transform)}class oV{constructor(e,t){this.version=e,this.transformResults=t}}class _t{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new _t}static exists(e){return new _t(void 0,e)}static updateTime(e){return new _t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class xm{}function eS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Tu(n.key,_t.none()):new Eu(n.key,n.data,_t.none());{const t=n.data,i=_n.empty();let s=new et(gt.comparator);for(let o of e.fields)if(!s.has(o)){let u=t.field(o);u===null&&o.length>1&&(o=o.popLast(),u=t.field(o)),u===null?i.delete(o):i.set(o,u),s=s.add(o)}return new ss(n.key,i,new $n(s.toArray()),_t.none())}}function lV(n,e,t){n instanceof Eu?function(s,o,u){const h=s.value.clone(),m=Pb(s.fieldTransforms,o,u.transformResults);h.setAll(m),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,e,t):n instanceof ss?function(s,o,u){if(!qf(s.precondition,o))return void o.convertToUnknownDocument(u.version);const h=Pb(s.fieldTransforms,o,u.transformResults),m=o.data;m.setAll(tS(s)),m.setAll(h),o.convertToFoundDocument(u.version,m).setHasCommittedMutations()}(n,e,t):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function nh(n,e,t,i){return n instanceof Eu?function(o,u,h,m){if(!qf(o.precondition,u))return h;const p=o.value.clone(),y=xb(o.fieldTransforms,m,u);return p.setAll(y),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),null}(n,e,t,i):n instanceof ss?function(o,u,h,m){if(!qf(o.precondition,u))return h;const p=xb(o.fieldTransforms,m,u),y=u.data;return y.setAll(tS(o)),y.setAll(p),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,i):function(o,u,h){return qf(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(n,e,t)}function uV(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),o=YR(i.transform,s||null);o!=null&&(t===null&&(t=_n.empty()),t.set(i.field,o))}return t||null}function Ob(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Zl(i,s,(o,u)=>aV(o,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Eu extends xm{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ss extends xm{constructor(e,t,i,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function tS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Pb(n,e,t){const i=new Map;Ee(n.length===t.length);for(let s=0;s<t.length;s++){const o=n[s],u=o.transform,h=e.data.field(o.field);i.set(o.field,sV(u,h,t[s]))}return i}function xb(n,e,t){const i=new Map;for(const s of n){const o=s.transform,u=t.data.field(s.field);i.set(s.field,rV(o,u,e))}return i}class Tu extends xm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sv extends xm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class av{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&lV(o,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=nh(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=nh(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=$R();return this.mutations.forEach(s=>{const o=e.get(s.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=t.has(s.key)?null:h;const m=eS(u,h);m!==null&&i.set(s.key,m),u.isValidDocument()||u.convertToNoDocument(we.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Oe())}isEqual(e){return this.batchId===e.batchId&&Zl(this.mutations,e.mutations,(t,i)=>Ob(t,i))&&Zl(this.baseMutations,e.baseMutations,(t,i)=>Ob(t,i))}}class ov{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){Ee(e.mutations.length===i.length);let s=function(){return tV}();const o=e.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,i[u].version);return new ov(e,t,i,s)}}/**
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
 */class lv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cV{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ht,Ke;function nS(n){switch(n){default:return ge();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function iS(n){if(n===void 0)return Lt("GRPC error has no .code"),$.UNKNOWN;switch(n){case Ht.OK:return $.OK;case Ht.CANCELLED:return $.CANCELLED;case Ht.UNKNOWN:return $.UNKNOWN;case Ht.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Ht.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Ht.INTERNAL:return $.INTERNAL;case Ht.UNAVAILABLE:return $.UNAVAILABLE;case Ht.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Ht.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Ht.NOT_FOUND:return $.NOT_FOUND;case Ht.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Ht.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Ht.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Ht.ABORTED:return $.ABORTED;case Ht.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Ht.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Ht.DATA_LOSS:return $.DATA_LOSS;default:return ge()}}(Ke=Ht||(Ht={}))[Ke.OK=0]="OK",Ke[Ke.CANCELLED=1]="CANCELLED",Ke[Ke.UNKNOWN=2]="UNKNOWN",Ke[Ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ke[Ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ke[Ke.NOT_FOUND=5]="NOT_FOUND",Ke[Ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ke[Ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ke[Ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ke[Ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ke[Ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ke[Ke.ABORTED=10]="ABORTED",Ke[Ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ke[Ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ke[Ke.INTERNAL=13]="INTERNAL",Ke[Ke.UNAVAILABLE=14]="UNAVAILABLE",Ke[Ke.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rS(){return new TextEncoder}/**
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
 */const hV=new _o([4294967295,4294967295],0);function kb(n){const e=rS().encode(n),t=new cR;return t.update(e),new Uint8Array(t.digest())}function Vb(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new _o([t,i],0),new _o([s,o],0)]}class uv{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Yc(`Invalid padding: ${t}`);if(i<0)throw new Yc(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Yc(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Yc(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=_o.fromNumber(this.Te)}Ee(e,t,i){let s=e.add(t.multiply(_o.fromNumber(i)));return s.compare(hV)===1&&(s=new _o([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=kb(e),[i,s]=Vb(t);for(let o=0;o<this.hashCount;o++){const u=this.Ee(i,s,o);if(!this.de(u))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),u=new uv(o,s,t);return i.forEach(h=>u.insert(h)),u}insert(e){if(this.Te===0)return;const t=kb(e),[i,s]=Vb(t);for(let o=0;o<this.hashCount;o++){const u=this.Ee(i,s,o);this.Ae(u)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Yc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Fh{constructor(e,t,i,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,zh.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Fh(we.min(),s,new lt(De),Qn(),Oe())}}class zh{constructor(e,t,i,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new zh(i,t,Oe(),Oe(),Oe())}}/**
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
 */class jf{constructor(e,t,i,s){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=s}}class sS{constructor(e,t){this.targetId=e,this.me=t}}class aS{constructor(e,t,i=Pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Mb{constructor(){this.fe=0,this.ge=Lb(),this.pe=Pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Oe(),t=Oe(),i=Oe();return this.ge.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:ge()}}),new zh(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Lb()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class dV{constructor(e){this.Le=e,this.Be=new Map,this.ke=Qn(),this.qe=Sf(),this.Qe=Sf(),this.Ke=new lt(De)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:ge()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,i=e.me.count,s=this.Ye(t);if(s){const o=s.target;if(im(o))if(i===0){const u=new he(o.path);this.We(t,u,ht.newNoDocument(u,we.min()))}else Ee(i===1);else{const u=this.Ze(t);if(u!==i){const h=this.Xe(e),m=h?this.et(h,e,u):1;if(m!==0){this.He(t);const p=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,p)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=t;let u,h;try{u=Jr(i).toUint8Array()}catch(m){if(m instanceof NR)return cr("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{h=new uv(u,s,o)}catch(m){return cr(m instanceof Yc?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return h.Te===0?null:h}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let s=0;return i.forEach(o=>{const u=this.Le.nt(),h=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;e.mightContain(h)||(this.We(t,o,null),s++)}),s}it(e){const t=new Map;this.Be.forEach((o,u)=>{const h=this.Ye(u);if(h){if(o.current&&im(h.target)){const m=new he(h.target.path);this.st(m).has(u)||this.ot(u,m)||this.We(u,m,ht.newNoDocument(m,e))}o.be&&(t.set(u,o.ve()),o.Ce())}});let i=Oe();this.Qe.forEach((o,u)=>{let h=!0;u.forEachWhile(m=>{const p=this.Ye(m);return!p||p.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(i=i.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(e));const s=new Fh(e,t,this.Ke,this.ke,i);return this.ke=Qn(),this.qe=Sf(),this.Qe=Sf(),this.Ke=new lt(De),s}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Mb,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new et(De),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new et(De),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Mb),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Sf(){return new lt(he.comparator)}function Lb(){return new lt(he.comparator)}const fV={asc:"ASCENDING",desc:"DESCENDING"},mV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pV={and:"AND",or:"OR"};class gV{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function cy(n,e){return n.useProto3Json||Vh(e)?e:{value:e}}function ru(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _V(n,e){return ru(n,e.toTimestamp())}function Ut(n){return Ee(!!n),we.fromTimestamp(function(t){const i=Xr(t);return new yt(i.seconds,i.nanos)}(n))}function cv(n,e){return hy(n,e).canonicalString()}function hy(n,e){const t=function(s){return new Be(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function lS(n){const e=Be.fromString(n);return Ee(yS(e)),e}function bh(n,e){return cv(n.databaseId,e.path)}function lr(n,e){const t=lS(e);if(t.get(1)!==n.databaseId.projectId)throw new Z($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Z($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new he(hS(t))}function uS(n,e){return cv(n.databaseId,e)}function cS(n){const e=lS(n);return e.length===4?Be.emptyPath():hS(e)}function dy(n){return new Be(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function hS(n){return Ee(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ub(n,e,t){return{name:bh(n,e),fields:t.value.mapValue.fields}}function dS(n,e,t){const i=lr(n,e.name),s=Ut(e.updateTime),o=e.createTime?Ut(e.createTime):we.min(),u=new _n({mapValue:{fields:e.fields}}),h=ht.newFoundDocument(i,s,o,u);return t&&h.setHasCommittedMutations(),t?h.setHasCommittedMutations():h}function yV(n,e){return"found"in e?function(i,s){Ee(!!s.found),s.found.name,s.found.updateTime;const o=lr(i,s.found.name),u=Ut(s.found.updateTime),h=s.found.createTime?Ut(s.found.createTime):we.min(),m=new _n({mapValue:{fields:s.found.fields}});return ht.newFoundDocument(o,u,h,m)}(n,e):"missing"in e?function(i,s){Ee(!!s.missing),Ee(!!s.readTime);const o=lr(i,s.missing),u=Ut(s.readTime);return ht.newNoDocument(o,u)}(n,e):ge()}function vV(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(p,y){return p.useProto3Json?(Ee(y===void 0||typeof y=="string"),Pt.fromBase64String(y||"")):(Ee(y===void 0||y instanceof Buffer||y instanceof Uint8Array),Pt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,h=u&&function(p){const y=p.code===void 0?$.UNKNOWN:iS(p.code);return new Z(y,p.message||"")}(u);t=new aS(i,s,o,h||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=lr(n,i.document.name),o=Ut(i.document.updateTime),u=i.document.createTime?Ut(i.document.createTime):we.min(),h=new _n({mapValue:{fields:i.document.fields}}),m=ht.newFoundDocument(s,o,u,h),p=i.targetIds||[],y=i.removedTargetIds||[];t=new jf(p,y,m.key,m)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=lr(n,i.document),o=i.readTime?Ut(i.readTime):we.min(),u=ht.newNoDocument(s,o),h=i.removedTargetIds||[];t=new jf([],h,u.key,u)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=lr(n,i.document),o=i.removedTargetIds||[];t=new jf([],o,s,null)}else{if(!("filter"in e))return ge();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:o}=i,u=new cV(s,o),h=i.targetId;t=new sS(h,u)}}return t}function Ih(n,e){let t;if(e instanceof Eu)t={update:Ub(n,e.key,e.value)};else if(e instanceof Tu)t={delete:bh(n,e.key)};else if(e instanceof ss)t={update:Ub(n,e.key,e.data),updateMask:AV(e.fieldMask)};else{if(!(e instanceof sv))return ge();t={verify:bh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(o,u){const h=u.transform;if(h instanceof nu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof bo)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Io)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof iu)return{fieldPath:u.field.canonicalString(),increment:h.Pe};throw ge()}(0,i))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:_V(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ge()}(n,e.precondition)),t}function fy(n,e){const t=e.currentDocument?function(o){return o.updateTime!==void 0?_t.updateTime(Ut(o.updateTime)):o.exists!==void 0?_t.exists(o.exists):_t.none()}(e.currentDocument):_t.none(),i=e.updateTransforms?e.updateTransforms.map(s=>function(u,h){let m=null;if("setToServerValue"in h)Ee(h.setToServerValue==="REQUEST_TIME"),m=new nu;else if("appendMissingElements"in h){const y=h.appendMissingElements.values||[];m=new bo(y)}else if("removeAllFromArray"in h){const y=h.removeAllFromArray.values||[];m=new Io(y)}else"increment"in h?m=new iu(u,h.increment):ge();const p=gt.fromServerFormat(h.fieldPath);return new Bh(p,m)}(n,s)):[];if(e.update){e.update.name;const s=lr(n,e.update.name),o=new _n({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=function(m){const p=m.fieldPaths||[];return new $n(p.map(y=>gt.fromServerFormat(y)))}(e.updateMask);return new ss(s,o,u,t,i)}return new Eu(s,o,t,i)}if(e.delete){const s=lr(n,e.delete);return new Tu(s,t)}if(e.verify){const s=lr(n,e.verify);return new sv(s,t)}return ge()}function EV(n,e){return n&&n.length>0?(Ee(e!==void 0),n.map(t=>function(s,o){let u=s.updateTime?Ut(s.updateTime):Ut(o);return u.isEqual(we.min())&&(u=Ut(o)),new oV(u,s.transformResults||[])}(t,e))):[]}function fS(n,e){return{documents:[uS(n,e.path)]}}function mS(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=uS(n,s);const o=function(p){if(p.length!==0)return _S(Ze.create(p,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const u=function(p){if(p.length!==0)return p.map(y=>function(w){return{field:Ul(w.field),direction:wV(w.dir)}}(y))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const h=cy(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ct:t,parent:s}}function pS(n){let e=cS(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){Ee(i===1);const y=t.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(v){const w=gS(v);return w instanceof Ze&&tv(w)?w.getFilters():[w]}(t.where));let u=[];t.orderBy&&(u=function(v){return v.map(w=>function(M){return new wh(Bl(M.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(M.direction))}(w))}(t.orderBy));let h=null;t.limit&&(h=function(v){let w;return w=typeof v=="object"?v.value:v,Vh(w)?null:w}(t.limit));let m=null;t.startAt&&(m=function(v){const w=!!v.before,C=v.values||[];return new da(C,w)}(t.startAt));let p=null;return t.endAt&&(p=function(v){const w=!v.before,C=v.values||[];return new da(C,w)}(t.endAt)),zR(e,s,u,o,h,"F",m,p)}function TV(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Bl(t.unaryFilter.field);return Fe.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Bl(t.unaryFilter.field);return Fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Bl(t.unaryFilter.field);return Fe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Bl(t.unaryFilter.field);return Fe.create(u,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(n):n.fieldFilter!==void 0?function(t){return Fe.create(Bl(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ze.create(t.compositeFilter.filters.map(i=>gS(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ge()}}(t.compositeFilter.op))}(n):ge()}function wV(n){return fV[n]}function bV(n){return mV[n]}function IV(n){return pV[n]}function Ul(n){return{fieldPath:n.canonicalString()}}function Bl(n){return gt.fromServerFormat(n.fieldPath)}function _S(n){return n instanceof Fe?function(t){if(t.op==="=="){if(wb(t.value))return{unaryFilter:{field:Ul(t.field),op:"IS_NAN"}};if(Tb(t.value))return{unaryFilter:{field:Ul(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(wb(t.value))return{unaryFilter:{field:Ul(t.field),op:"IS_NOT_NAN"}};if(Tb(t.value))return{unaryFilter:{field:Ul(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ul(t.field),op:bV(t.op),value:t.value}}}(n):n instanceof Ze?function(t){const i=t.getFilters().map(s=>_S(s));return i.length===1?i[0]:{compositeFilter:{op:IV(t.op),filters:i}}}(n):ge()}function AV(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function yS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class zr{constructor(e,t,i,s,o=we.min(),u=we.min(),h=Pt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=m}withSequenceNumber(e){return new zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class vS{constructor(e){this.ht=e}}function RV(n,e){let t;if(e.document)t=dS(n.ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const i=he.fromSegments(e.noDocument.path),s=Ro(e.noDocument.readTime);t=ht.newNoDocument(i,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return ge();{const i=he.fromSegments(e.unknownDocument.path),s=Ro(e.unknownDocument.version);t=ht.newUnknownDocument(i,s)}}return e.readTime&&t.setReadTime(function(s){const o=new yt(s[0],s[1]);return we.fromTimestamp(o)}(e.readTime)),t}function Bb(n,e){const t=e.key,i={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:am(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())i.document=function(o,u){return{name:bh(o,u.key),fields:u.data.value.mapValue.fields,updateTime:ru(o,u.version.toTimestamp()),createTime:ru(o,u.createTime.toTimestamp())}}(n.ht,e);else if(e.isNoDocument())i.noDocument={path:t.path.toArray(),readTime:Ao(e.version)};else{if(!e.isUnknownDocument())return ge();i.unknownDocument={path:t.path.toArray(),version:Ao(e.version)}}return i}function am(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Ao(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ro(n){const e=new yt(n.seconds,n.nanoseconds);return we.fromTimestamp(e)}function oo(n,e){const t=(e.baseMutations||[]).map(o=>fy(n.ht,o));for(let o=0;o<e.mutations.length-1;++o){const u=e.mutations[o];if(o+1<e.mutations.length&&e.mutations[o+1].transform!==void 0){const h=e.mutations[o+1];u.updateTransforms=h.transform.fieldTransforms,e.mutations.splice(o+1,1),++o}}const i=e.mutations.map(o=>fy(n.ht,o)),s=yt.fromMillis(e.localWriteTimeMs);return new av(e.batchId,s,t,i)}function Xc(n){const e=Ro(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Ro(n.lastLimboFreeSnapshotVersion):we.min();let i;return i=function(o){return o.documents!==void 0}(n.query)?function(o){return Ee(o.documents.length===1),Fn(vu(cS(o.documents[0])))}(n.query):function(o){return Fn(pS(o))}(n.query),new zr(i,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Pt.fromBase64String(n.resumeToken))}function ES(n,e){const t=Ao(e.snapshotVersion),i=Ao(e.lastLimboFreeSnapshotVersion);let s;s=im(e.target)?fS(n.ht,e.target):mS(n.ht,e.target).ct;const o=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:wo(e.target),readTime:t,resumeToken:o,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:s}}function hv(n){const e=pS({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?sm(e,e.limit,"L"):e}function O_(n,e){return new lv(e.largestBatchId,fy(n.ht,e.overlayMutation))}function Fb(n,e){const t=e.path.lastSegment();return[n,Sn(e.path.popLast()),t]}function zb(n,e,t,i){return{indexId:n,uid:e,sequenceNumber:t,readTime:Ao(i.readTime),documentKey:Sn(i.documentKey.path),largestBatchId:i.largestBatchId}}/**
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
 */class SV{getBundleMetadata(e,t){return qb(e).get(t).next(i=>{if(i)return function(o){return{id:o.bundleId,createTime:Ro(o.createTime),version:o.version}}(i)})}saveBundleMetadata(e,t){return qb(e).put(function(s){return{bundleId:s.id,createTime:Ao(Ut(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return jb(e).get(t).next(i=>{if(i)return function(o){return{name:o.name,query:hv(o.bundledQuery),readTime:Ro(o.readTime)}}(i)})}saveNamedQuery(e,t){return jb(e).put(function(s){return{name:s.name,readTime:Ao(Ut(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function qb(n){return Jt(n,"bundles")}function jb(n){return Jt(n,"namedQueries")}/**
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
 */class km{constructor(e,t){this.serializer=e,this.userId=t}static Pt(e,t){const i=t.uid||"";return new km(e,i)}getOverlay(e,t){return Mc(e).get(Fb(this.userId,t)).next(i=>i?O_(this.serializer,i):null)}getOverlays(e,t){const i=sr();return F.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(e,t,i){const s=[];return i.forEach((o,u)=>{const h=new lv(t,u);s.push(this.Tt(e,h))}),F.waitFor(s)}removeOverlaysForBatchId(e,t,i){const s=new Set;t.forEach(u=>s.add(Sn(u.getCollectionPath())));const o=[];return s.forEach(u=>{const h=IDBKeyRange.bound([this.userId,u,i],[this.userId,u,i+1],!1,!0);o.push(Mc(e).j("collectionPathOverlayIndex",h))}),F.waitFor(o)}getOverlaysForCollection(e,t,i){const s=sr(),o=Sn(t),u=IDBKeyRange.bound([this.userId,o,i],[this.userId,o,Number.POSITIVE_INFINITY],!0);return Mc(e).U("collectionPathOverlayIndex",u).next(h=>{for(const m of h){const p=O_(this.serializer,m);s.set(p.getKey(),p)}return s})}getOverlaysForCollectionGroup(e,t,i,s){const o=sr();let u;const h=IDBKeyRange.bound([this.userId,t,i],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Mc(e).J({index:"collectionGroupOverlayIndex",range:h},(m,p,y)=>{const v=O_(this.serializer,p);o.size()<s||v.largestBatchId===u?(o.set(v.getKey(),v),u=v.largestBatchId):y.done()}).next(()=>o)}Tt(e,t){return Mc(e).put(function(s,o,u){const[h,m,p]=Fb(o,u.mutation.key);return{userId:o,collectionPath:m,documentId:p,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:Ih(s.ht,u.mutation)}}(this.serializer,this.userId,t))}}function Mc(n){return Jt(n,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{It(e){return Jt(e,"globals")}getSessionToken(e){return this.It(e).get("sessionToken").next(t=>{const i=t==null?void 0:t.value;return i?Pt.fromUint8Array(i):Pt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.It(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class lo{constructor(){}Et(e,t){this.dt(e,t),t.At()}dt(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(pt(e.integerValue));else if("doubleValue"in e){const i=pt(e.doubleValue);isNaN(i)?this.Rt(t,13):(this.Rt(t,15),yh(i)?t.Vt(0):t.Vt(i))}else if("timestampValue"in e){let i=e.timestampValue;this.Rt(t,20),typeof i=="string"&&(i=Xr(i)),t.ft(`${i.seconds||""}`),t.Vt(i.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(Jr(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){const i=e.geoPointValue;this.Rt(t,45),t.Vt(i.latitude||0),t.Vt(i.longitude||0)}else"mapValue"in e?OR(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):Om(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):ge()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){const i=e.fields||{};this.Rt(t,55);for(const s of Object.keys(i))this.gt(s,t),this.dt(i[s],t)}bt(e,t){var i,s;const o=e.fields||{};this.Rt(t,53);const u="value",h=((s=(i=o[u].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.length)||0;this.Rt(t,15),t.Vt(pt(h)),this.gt(u,t),this.dt(o[u],t)}vt(e,t){const i=e.values||[];this.Rt(t,50);for(const s of i)this.dt(s,t)}St(e,t){this.Rt(t,37),he.fromName(e).path.forEach(i=>{this.Rt(t,60),this.Ct(i,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}}lo.Ft=new lo;function DV(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Hb(n){const e=64-function(i){let s=0;for(let o=0;o<8;++o){const u=DV(255&i[o]);if(s+=u,u!==8)break}return s}(n);return Math.ceil(e/8)}class NV{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Mt(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.xt(i.value),i=t.next();this.Ot()}Nt(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.Lt(i.value),i=t.next();this.Bt()}kt(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.xt(i);else if(i<2048)this.xt(960|i>>>6),this.xt(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.xt(480|i>>>12),this.xt(128|63&i>>>6),this.xt(128|63&i);else{const s=t.codePointAt(0);this.xt(240|s>>>18),this.xt(128|63&s>>>12),this.xt(128|63&s>>>6),this.xt(128|63&s)}}this.Ot()}qt(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.Lt(i);else if(i<2048)this.Lt(960|i>>>6),this.Lt(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.Lt(480|i>>>12),this.Lt(128|63&i>>>6),this.Lt(128|63&i);else{const s=t.codePointAt(0);this.Lt(240|s>>>18),this.Lt(128|63&s>>>12),this.Lt(128|63&s>>>6),this.Lt(128|63&s)}}this.Bt()}Qt(e){const t=this.Kt(e),i=Hb(t);this.$t(1+i),this.buffer[this.position++]=255&i;for(let s=t.length-i;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Ut(e){const t=this.Kt(e),i=Hb(t);this.$t(1+i),this.buffer[this.position++]=~(255&i);for(let s=t.length-i;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}Wt(){this.Gt(255),this.Gt(255)}zt(){this.jt(255),this.jt(255)}reset(){this.position=0}seed(e){this.$t(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ht(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(o){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,o,!1),new Uint8Array(u.buffer)}(e),i=(128&t[0])!=0;t[0]^=i?255:128;for(let s=1;s<t.length;++s)t[s]^=i?255:0;return t}xt(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(t)}Lt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===255?(this.jt(255),this.jt(0)):this.jt(e)}Ot(){this.Gt(0),this.Gt(1)}Bt(){this.jt(0),this.jt(1)}Gt(e){this.$t(1),this.buffer[this.position++]=e}jt(e){this.$t(1),this.buffer[this.position++]=~e}$t(e){const t=e+this.position;if(t<=this.buffer.length)return;let i=2*this.buffer.length;i<t&&(i=t);const s=new Uint8Array(i);s.set(this.buffer),this.buffer=s}}class OV{constructor(e){this.Jt=e}wt(e){this.Jt.Mt(e)}ft(e){this.Jt.kt(e)}Vt(e){this.Jt.Qt(e)}At(){this.Jt.Wt()}}class PV{constructor(e){this.Jt=e}wt(e){this.Jt.Nt(e)}ft(e){this.Jt.qt(e)}Vt(e){this.Jt.Ut(e)}At(){this.Jt.zt()}}class Lc{constructor(){this.Jt=new NV,this.Yt=new OV(this.Jt),this.Zt=new PV(this.Jt)}seed(e){this.Jt.seed(e)}Xt(e){return e===0?this.Yt:this.Zt}Ht(){return this.Jt.Ht()}reset(){this.Jt.reset()}}/**
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
 */class uo{constructor(e,t,i,s){this.indexId=e,this.documentKey=t,this.arrayValue=i,this.directionalValue=s}en(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,i=new Uint8Array(t);return i.set(this.directionalValue,0),t!==e?i.set([0],this.directionalValue.length):++i[i.length-1],new uo(this.indexId,this.documentKey,this.arrayValue,i)}}function Qs(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Gb(n.arrayValue,e.arrayValue),t!==0?t:(t=Gb(n.directionalValue,e.directionalValue),t!==0?t:he.comparator(n.documentKey,e.documentKey)))}function Gb(n,e){for(let t=0;t<n.length&&t<e.length;++t){const i=n[t]-e[t];if(i!==0)return i}return n.length-e.length}/**
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
 */class Kb{constructor(e){this.tn=new et((t,i)=>gt.comparator(t.field,i.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.nn=e.orderBy,this.rn=[];for(const t of e.filters){const i=t;i.isInequality()?this.tn=this.tn.add(i):this.rn.push(i)}}get sn(){return this.tn.size>1}on(e){if(Ee(e.collectionGroup===this.collectionId),this.sn)return!1;const t=ny(e);if(t!==void 0&&!this._n(t))return!1;const i=ro(e);let s=new Set,o=0,u=0;for(;o<i.length&&this._n(i[o]);++o)s=s.add(i[o].fieldPath.canonicalString());if(o===i.length)return!0;if(this.tn.size>0){const h=this.tn.getIterator().getNext();if(!s.has(h.field.canonicalString())){const m=i[o];if(!this.an(h,m)||!this.un(this.nn[u++],m))return!1}++o}for(;o<i.length;++o){const h=i[o];if(u>=this.nn.length||!this.un(this.nn[u++],h))return!1}return!0}cn(){if(this.sn)return null;let e=new et(gt.comparator);const t=[];for(const i of this.rn)if(!i.field.isKeyField())if(i.op==="array-contains"||i.op==="array-contains-any")t.push(new Lf(i.field,2));else{if(e.has(i.field))continue;e=e.add(i.field),t.push(new Lf(i.field,0))}for(const i of this.nn)i.field.isKeyField()||e.has(i.field)||(e=e.add(i.field),t.push(new Lf(i.field,i.dir==="asc"?0:1)));return new nm(nm.UNKNOWN_ID,this.collectionId,t,_h.empty())}_n(e){for(const t of this.rn)if(this.an(t,e))return!0;return!1}an(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const i=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===i}un(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function TS(n){var e,t;if(Ee(n instanceof Fe||n instanceof Ze),n instanceof Fe){if(n instanceof FR){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(o=>Fe.create(n.field,"==",o)))||[];return Ze.create(s,"or")}return n}const i=n.filters.map(s=>TS(s));return Ze.create(i,n.op)}function xV(n){if(n.getFilters().length===0)return[];const e=gy(TS(n));return Ee(wS(e)),my(e)||py(e)?[e]:e.getFilters()}function my(n){return n instanceof Fe}function py(n){return n instanceof Ze&&tv(n)}function wS(n){return my(n)||py(n)||function(t){if(t instanceof Ze&&ay(t)){for(const i of t.getFilters())if(!my(i)&&!py(i))return!1;return!0}return!1}(n)}function gy(n){if(Ee(n instanceof Fe||n instanceof Ze),n instanceof Fe)return n;if(n.filters.length===1)return gy(n.filters[0]);const e=n.filters.map(i=>gy(i));let t=Ze.create(e,n.op);return t=om(t),wS(t)?t:(Ee(t instanceof Ze),Ee(tu(t)),Ee(t.filters.length>1),t.filters.reduce((i,s)=>dv(i,s)))}function dv(n,e){let t;return Ee(n instanceof Fe||n instanceof Ze),Ee(e instanceof Fe||e instanceof Ze),t=n instanceof Fe?e instanceof Fe?function(s,o){return Ze.create([s,o],"and")}(n,e):$b(n,e):e instanceof Fe?$b(e,n):function(s,o){if(Ee(s.filters.length>0&&o.filters.length>0),tu(s)&&tu(o))return LR(s,o.getFilters());const u=ay(s)?s:o,h=ay(s)?o:s,m=u.filters.map(p=>dv(p,h));return Ze.create(m,"or")}(n,e),om(t)}function $b(n,e){if(tu(e))return LR(e,n.getFilters());{const t=e.filters.map(i=>dv(n,i));return Ze.create(t,"or")}}function om(n){if(Ee(n instanceof Fe||n instanceof Ze),n instanceof Fe)return n;const e=n.getFilters();if(e.length===1)return om(e[0]);if(VR(n))return n;const t=e.map(s=>om(s)),i=[];return t.forEach(s=>{s instanceof Fe?i.push(s):s instanceof Ze&&(s.op===n.op?i.push(...s.filters):i.push(s))}),i.length===1?i[0]:Ze.create(i,n.op)}/**
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
 */class kV{constructor(){this.ln=new fv}addToCollectionParentIndex(e,t){return this.ln.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(si.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(si.min())}updateCollectionGroup(e,t,i){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class fv{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new et(Be.comparator),o=!s.has(i);return this.index[t]=s.add(i),o}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new et(Be.comparator)).toArray()}}/**
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
 */const Cf=new Uint8Array(0);class VV{constructor(e,t){this.databaseId=t,this.hn=new fv,this.Pn=new rs(i=>wo(i),(i,s)=>Mh(i,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.hn.has(t)){const i=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.hn.add(t)});const o={collectionId:i,parent:Sn(s)};return Qb(e).put(o)}return F.resolve()}getCollectionParents(e,t){const i=[],s=IDBKeyRange.bound([t,""],[yR(t),""],!1,!0);return Qb(e).U(s).next(o=>{for(const u of o){if(u.collectionId!==t)break;i.push(rr(u.parent))}return i})}addFieldIndex(e,t){const i=Uc(e),s=function(h){return{indexId:h.indexId,collectionGroup:h.collectionGroup,fields:h.fields.map(m=>[m.fieldPath.canonicalString(),m.kind])}}(t);delete s.indexId;const o=i.add(s);if(t.indexState){const u=Pl(e);return o.next(h=>{u.put(zb(h,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return o.next()}deleteFieldIndex(e,t){const i=Uc(e),s=Pl(e),o=Ol(e);return i.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Uc(e),i=Ol(e),s=Pl(e);return t.j().next(()=>i.j()).next(()=>s.j())}createTargetIndexes(e,t){return F.forEach(this.Tn(t),i=>this.getIndexType(e,i).next(s=>{if(s===0||s===1){const o=new Kb(i).cn();if(o!=null)return this.addFieldIndex(e,o)}}))}getDocumentsMatchingTarget(e,t){const i=Ol(e);let s=!0;const o=new Map;return F.forEach(this.Tn(t),u=>this.In(e,u).next(h=>{s&&(s=!!h),o.set(u,h)})).next(()=>{if(s){let u=Oe();const h=[];return F.forEach(o,(m,p)=>{ne("IndexedDbIndexManager",`Using index ${function(J){return`id=${J.indexId}|cg=${J.collectionGroup}|f=${J.fields.map(oe=>`${oe.fieldPath}:${oe.kind}`).join(",")}`}(m)} to execute ${wo(t)}`);const y=function(J,oe){const re=ny(oe);if(re===void 0)return null;for(const me of rm(J,re.fieldPath))switch(me.op){case"array-contains-any":return me.value.arrayValue.values||[];case"array-contains":return[me.value]}return null}(p,m),v=function(J,oe){const re=new Map;for(const me of ro(oe))for(const O of rm(J,me.fieldPath))switch(O.op){case"==":case"in":re.set(me.fieldPath.canonicalString(),O.value);break;case"not-in":case"!=":return re.set(me.fieldPath.canonicalString(),O.value),Array.from(re.values())}return null}(p,m),w=function(J,oe){const re=[];let me=!0;for(const O of ro(oe)){const R=O.kind===0?Sb(J,O.fieldPath,J.startAt):Cb(J,O.fieldPath,J.startAt);re.push(R.value),me&&(me=R.inclusive)}return new da(re,me)}(p,m),C=function(J,oe){const re=[];let me=!0;for(const O of ro(oe)){const R=O.kind===0?Cb(J,O.fieldPath,J.endAt):Sb(J,O.fieldPath,J.endAt);re.push(R.value),me&&(me=R.inclusive)}return new da(re,me)}(p,m),M=this.En(m,p,w),q=this.En(m,p,C),j=this.dn(m,p,v),ie=this.An(m.indexId,y,M,w.inclusive,q,C.inclusive,j);return F.forEach(ie,ae=>i.G(ae,t.limit).next(J=>{J.forEach(oe=>{const re=he.fromSegments(oe.documentKey);u.has(re)||(u=u.add(re),h.push(re))})}))}).next(()=>h)}return F.resolve(null)})}Tn(e){let t=this.Pn.get(e);return t||(e.filters.length===0?t=[e]:t=xV(Ze.create(e.filters,"and")).map(i=>ly(e.path,e.collectionGroup,e.orderBy,i.getFilters(),e.limit,e.startAt,e.endAt)),this.Pn.set(e,t),t)}An(e,t,i,s,o,u,h){const m=(t!=null?t.length:1)*Math.max(i.length,o.length),p=m/(t!=null?t.length:1),y=[];for(let v=0;v<m;++v){const w=t?this.Rn(t[v/p]):Cf,C=this.Vn(e,w,i[v%p],s),M=this.mn(e,w,o[v%p],u),q=h.map(j=>this.Vn(e,w,j,!0));y.push(...this.createRange(C,M,q))}return y}Vn(e,t,i,s){const o=new uo(e,he.empty(),t,i);return s?o:o.en()}mn(e,t,i,s){const o=new uo(e,he.empty(),t,i);return s?o.en():o}In(e,t){const i=new Kb(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(o=>{let u=null;for(const h of o)i.on(h)&&(!u||h.fields.length>u.fields.length)&&(u=h);return u})}getIndexType(e,t){let i=2;const s=this.Tn(t);return F.forEach(s,o=>this.In(e,o).next(u=>{u?i!==0&&u.fields.length<function(m){let p=new et(gt.comparator),y=!1;for(const v of m.filters)for(const w of v.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?y=!0:p=p.add(w.field));for(const v of m.orderBy)v.field.isKeyField()||(p=p.add(v.field));return p.size+(y?1:0)}(o)&&(i=1):i=0})).next(()=>function(u){return u.limit!==null}(t)&&s.length>1&&i===2?1:i)}fn(e,t){const i=new Lc;for(const s of ro(e)){const o=t.data.field(s.fieldPath);if(o==null)return null;const u=i.Xt(s.kind);lo.Ft.Et(o,u)}return i.Ht()}Rn(e){const t=new Lc;return lo.Ft.Et(e,t.Xt(0)),t.Ht()}gn(e,t){const i=new Lc;return lo.Ft.Et(To(this.databaseId,t),i.Xt(function(o){const u=ro(o);return u.length===0?0:u[u.length-1].kind}(e))),i.Ht()}dn(e,t,i){if(i===null)return[];let s=[];s.push(new Lc);let o=0;for(const u of ro(e)){const h=i[o++];for(const m of s)if(this.pn(t,u.fieldPath)&&Th(h))s=this.yn(s,u,h);else{const p=m.Xt(u.kind);lo.Ft.Et(h,p)}}return this.wn(s)}En(e,t,i){return this.dn(e,t,i.position)}wn(e){const t=[];for(let i=0;i<e.length;++i)t[i]=e[i].Ht();return t}yn(e,t,i){const s=[...e],o=[];for(const u of i.arrayValue.values||[])for(const h of s){const m=new Lc;m.seed(h.Ht()),lo.Ft.Et(u,m.Xt(t.kind)),o.push(m)}return o}pn(e,t){return!!e.filters.find(i=>i instanceof Fe&&i.field.isEqual(t)&&(i.op==="in"||i.op==="not-in"))}getFieldIndexes(e,t){const i=Uc(e),s=Pl(e);return(t?i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):i.U()).next(o=>{const u=[];return F.forEach(o,h=>s.get([h.indexId,this.uid]).next(m=>{u.push(function(y,v){const w=v?new _h(v.sequenceNumber,new si(Ro(v.readTime),new he(rr(v.documentKey)),v.largestBatchId)):_h.empty(),C=y.fields.map(([M,q])=>new Lf(gt.fromServerFormat(M),q));return new nm(y.indexId,y.collectionGroup,C,w)}(h,m))})).next(()=>u)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((i,s)=>{const o=i.indexState.sequenceNumber-s.indexState.sequenceNumber;return o!==0?o:De(i.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,i){const s=Uc(e),o=Pl(e);return this.Sn(e).next(u=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(h=>F.forEach(h,m=>o.put(zb(m.indexId,this.uid,u,i)))))}updateIndexEntries(e,t){const i=new Map;return F.forEach(t,(s,o)=>{const u=i.get(s.collectionGroup);return(u?F.resolve(u):this.getFieldIndexes(e,s.collectionGroup)).next(h=>(i.set(s.collectionGroup,h),F.forEach(h,m=>this.bn(e,s,m).next(p=>{const y=this.Dn(o,m);return p.isEqual(y)?F.resolve():this.vn(e,o,m,p,y)}))))})}Cn(e,t,i,s){return Ol(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.gn(i,t.key),documentKey:t.key.path.toArray()})}Fn(e,t,i,s){return Ol(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.gn(i,t.key),t.key.path.toArray()])}bn(e,t,i){const s=Ol(e);let o=new et(Qs);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([i.indexId,this.uid,this.gn(i,t)])},(u,h)=>{o=o.add(new uo(i.indexId,t,h.arrayValue,h.directionalValue))}).next(()=>o)}Dn(e,t){let i=new et(Qs);const s=this.fn(t,e);if(s==null)return i;const o=ny(t);if(o!=null){const u=e.data.field(o.fieldPath);if(Th(u))for(const h of u.arrayValue.values||[])i=i.add(new uo(t.indexId,e.key,this.Rn(h),s))}else i=i.add(new uo(t.indexId,e.key,Cf,s));return i}vn(e,t,i,s,o){ne("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const u=[];return function(m,p,y,v,w){const C=m.getIterator(),M=p.getIterator();let q=Nl(C),j=Nl(M);for(;q||j;){let ie=!1,ae=!1;if(q&&j){const J=y(q,j);J<0?ae=!0:J>0&&(ie=!0)}else q!=null?ae=!0:ie=!0;ie?(v(j),j=Nl(M)):ae?(w(q),q=Nl(C)):(q=Nl(C),j=Nl(M))}}(s,o,Qs,h=>{u.push(this.Cn(e,t,i,h))},h=>{u.push(this.Fn(e,t,i,h))}),F.waitFor(u)}Sn(e){let t=1;return Pl(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(i,s,o)=>{o.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,i){i=i.sort((u,h)=>Qs(u,h)).filter((u,h,m)=>!h||Qs(u,m[h-1])!==0);const s=[];s.push(e);for(const u of i){const h=Qs(u,e),m=Qs(u,t);if(h===0)s[0]=e.en();else if(h>0&&m<0)s.push(u),s.push(u.en());else if(m>0)break}s.push(t);const o=[];for(let u=0;u<s.length;u+=2){if(this.Mn(s[u],s[u+1]))return[];const h=[s[u].indexId,this.uid,s[u].arrayValue,s[u].directionalValue,Cf,[]],m=[s[u+1].indexId,this.uid,s[u+1].arrayValue,s[u+1].directionalValue,Cf,[]];o.push(IDBKeyRange.bound(h,m))}return o}Mn(e,t){return Qs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Wb)}getMinOffset(e,t){return F.mapArray(this.Tn(t),i=>this.In(e,i).next(s=>s||ge())).next(Wb)}}function Qb(n){return Jt(n,"collectionParents")}function Ol(n){return Jt(n,"indexEntries")}function Uc(n){return Jt(n,"indexConfiguration")}function Pl(n){return Jt(n,"indexState")}function Wb(n){Ee(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let i=1;i<n.length;i++){const s=n[i].indexState.offset;Jy(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new si(e.readTime,e.documentKey,t)}/**
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
 */const Yb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */function bS(n,e,t){const i=n.store("mutations"),s=n.store("documentMutations"),o=[],u=IDBKeyRange.only(t.batchId);let h=0;const m=i.J({range:u},(y,v,w)=>(h++,w.delete()));o.push(m.next(()=>{Ee(h===1)}));const p=[];for(const y of t.mutations){const v=AR(e,y.key.path,t.batchId);o.push(s.delete(v)),p.push(y.key)}return F.waitFor(o).next(()=>p)}function lm(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw ge();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(41943040,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);class Vm{constructor(e,t,i,s){this.userId=e,this.serializer=t,this.indexManager=i,this.referenceDelegate=s,this.xn={}}static Pt(e,t,i,s){Ee(e.uid!=="");const o=e.isAuthenticated()?e.uid:"";return new Vm(o,t,i,s)}checkEmpty(e){let t=!0;const i=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ws(e).J({index:"userMutationsIndex",range:i},(s,o,u)=>{t=!1,u.done()}).next(()=>t)}addMutationBatch(e,t,i,s){const o=Fl(e),u=Ws(e);return u.add({}).next(h=>{Ee(typeof h=="number");const m=new av(h,t,i,s),p=function(C,M,q){const j=q.baseMutations.map(ae=>Ih(C.ht,ae)),ie=q.mutations.map(ae=>Ih(C.ht,ae));return{userId:M,batchId:q.batchId,localWriteTimeMs:q.localWriteTime.toMillis(),baseMutations:j,mutations:ie}}(this.serializer,this.userId,m),y=[];let v=new et((w,C)=>De(w.canonicalString(),C.canonicalString()));for(const w of s){const C=AR(this.userId,w.key.path,h);v=v.add(w.key.path.popLast()),y.push(u.put(p)),y.push(o.put(C,Tk))}return v.forEach(w=>{y.push(this.indexManager.addToCollectionParentIndex(e,w))}),e.addOnCommittedListener(()=>{this.xn[h]=m.keys()}),F.waitFor(y).next(()=>m)})}lookupMutationBatch(e,t){return Ws(e).get(t).next(i=>i?(Ee(i.userId===this.userId),oo(this.serializer,i)):null)}On(e,t){return this.xn[t]?F.resolve(this.xn[t]):this.lookupMutationBatch(e,t).next(i=>{if(i){const s=i.keys();return this.xn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=IDBKeyRange.lowerBound([this.userId,i]);let o=null;return Ws(e).J({index:"userMutationsIndex",range:s},(u,h,m)=>{h.userId===this.userId&&(Ee(h.batchId>=i),o=oo(this.serializer,h)),m.done()}).next(()=>o)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let i=-1;return Ws(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,o,u)=>{i=o.batchId,u.done()}).next(()=>i)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ws(e).U("userMutationsIndex",t).next(i=>i.map(s=>oo(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const i=Uf(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=[];return Fl(e).J({range:s},(u,h,m)=>{const[p,y,v]=u,w=rr(y);if(p===this.userId&&t.path.isEqual(w))return Ws(e).get(v).next(C=>{if(!C)throw ge();Ee(C.userId===this.userId),o.push(oo(this.serializer,C))});m.done()}).next(()=>o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new et(De);const s=[];return t.forEach(o=>{const u=Uf(this.userId,o.path),h=IDBKeyRange.lowerBound(u),m=Fl(e).J({range:h},(p,y,v)=>{const[w,C,M]=p,q=rr(C);w===this.userId&&o.path.isEqual(q)?i=i.add(M):v.done()});s.push(m)}),F.waitFor(s).next(()=>this.Nn(e,i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1,o=Uf(this.userId,i),u=IDBKeyRange.lowerBound(o);let h=new et(De);return Fl(e).J({range:u},(m,p,y)=>{const[v,w,C]=m,M=rr(w);v===this.userId&&i.isPrefixOf(M)?M.length===s&&(h=h.add(C)):y.done()}).next(()=>this.Nn(e,h))}Nn(e,t){const i=[],s=[];return t.forEach(o=>{s.push(Ws(e).get(o).next(u=>{if(u===null)throw ge();Ee(u.userId===this.userId),i.push(oo(this.serializer,u))}))}),F.waitFor(s).next(()=>i)}removeMutationBatch(e,t){return bS(e._e,this.userId,t).next(i=>(e.addOnCommittedListener(()=>{this.Ln(t.batchId)}),F.forEach(i,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Ln(e){delete this.xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return F.resolve();const i=IDBKeyRange.lowerBound(function(u){return[u]}(this.userId)),s=[];return Fl(e).J({range:i},(o,u,h)=>{if(o[0]===this.userId){const m=rr(o[1]);s.push(m)}else h.done()}).next(()=>{Ee(s.length===0)})})}containsKey(e,t){return IS(e,this.userId,t)}Bn(e){return AS(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function IS(n,e,t){const i=Uf(e,t.path),s=i[1],o=IDBKeyRange.lowerBound(i);let u=!1;return Fl(n).J({range:o,H:!0},(h,m,p)=>{const[y,v,w]=h;y===e&&v===s&&(u=!0),p.done()}).next(()=>u)}function Ws(n){return Jt(n,"mutations")}function Fl(n){return Jt(n,"documentMutations")}function AS(n){return Jt(n,"mutationQueues")}/**
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
 */class So{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new So(0)}static Qn(){return new So(-1)}}/**
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
 */class MV{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Kn(e).next(t=>{const i=new So(t.highestTargetId);return t.highestTargetId=i.next(),this.$n(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Kn(e).next(t=>we.fromTimestamp(new yt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Kn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,i){return this.Kn(e).next(s=>(s.highestListenSequenceNumber=t,i&&(s.lastRemoteSnapshotVersion=i.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.$n(e,s)))}addTargetData(e,t){return this.Un(e,t).next(()=>this.Kn(e).next(i=>(i.targetCount+=1,this.Wn(t,i),this.$n(e,i))))}updateTargetData(e,t){return this.Un(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>xl(e).delete(t.targetId)).next(()=>this.Kn(e)).next(i=>(Ee(i.targetCount>0),i.targetCount-=1,this.$n(e,i)))}removeTargets(e,t,i){let s=0;const o=[];return xl(e).J((u,h)=>{const m=Xc(h);m.sequenceNumber<=t&&i.get(m.targetId)===null&&(s++,o.push(this.removeTargetData(e,m)))}).next(()=>F.waitFor(o)).next(()=>s)}forEachTarget(e,t){return xl(e).J((i,s)=>{const o=Xc(s);t(o)})}Kn(e){return Xb(e).get("targetGlobalKey").next(t=>(Ee(t!==null),t))}$n(e,t){return Xb(e).put("targetGlobalKey",t)}Un(e,t){return xl(e).put(ES(this.serializer,t))}Wn(e,t){let i=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,i=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,i=!0),i}getTargetCount(e){return this.Kn(e).next(t=>t.targetCount)}getTargetData(e,t){const i=wo(t),s=IDBKeyRange.bound([i,Number.NEGATIVE_INFINITY],[i,Number.POSITIVE_INFINITY]);let o=null;return xl(e).J({range:s,index:"queryTargetsIndex"},(u,h,m)=>{const p=Xc(h);Mh(t,p.target)&&(o=p,m.done())}).next(()=>o)}addMatchingKeys(e,t,i){const s=[],o=Zs(e);return t.forEach(u=>{const h=Sn(u.path);s.push(o.put({targetId:i,path:h})),s.push(this.referenceDelegate.addReference(e,i,u))}),F.waitFor(s)}removeMatchingKeys(e,t,i){const s=Zs(e);return F.forEach(t,o=>{const u=Sn(o.path);return F.waitFor([s.delete([i,u]),this.referenceDelegate.removeReference(e,i,o)])})}removeMatchingKeysForTargetId(e,t){const i=Zs(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return i.delete(s)}getMatchingKeysForTargetId(e,t){const i=IDBKeyRange.bound([t],[t+1],!1,!0),s=Zs(e);let o=Oe();return s.J({range:i,H:!0},(u,h,m)=>{const p=rr(u[1]),y=new he(p);o=o.add(y)}).next(()=>o)}containsKey(e,t){const i=Sn(t.path),s=IDBKeyRange.bound([i],[yR(i)],!1,!0);let o=0;return Zs(e).J({index:"documentTargetsIndex",H:!0,range:s},([u,h],m,p)=>{u!==0&&(o++,p.done())}).next(()=>o>0)}ut(e,t){return xl(e).get(t).next(i=>i?Xc(i):null)}}function xl(n){return Jt(n,"targets")}function Xb(n){return Jt(n,"targetGlobal")}function Zs(n){return Jt(n,"targetDocuments")}/**
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
 */function Jb([n,e],[t,i]){const s=De(n,t);return s===0?De(e,i):s}class LV{constructor(e){this.Gn=e,this.buffer=new et(Jb),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Jb(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class RS{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ne("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ya(t)?ne("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await _a(t)}await this.Yn(3e5)})}}class UV{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return F.resolve(Kn.oe);const i=new LV(t);return this.Zn.forEachTarget(e,s=>i.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>i.Hn(s))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Yb)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yb):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,s,o,u,h,m,p;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),s=this.params.maximumSequenceNumbersToCollect):s=v,u=Date.now(),this.nthSequenceNumber(e,s))).next(v=>(i=v,h=Date.now(),this.removeTargets(e,i,t))).next(v=>(o=v,m=Date.now(),this.removeOrphanedDocuments(e,i))).next(v=>(p=Date.now(),Ml()<=Me.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(h-u)+`ms
	Removed ${o} targets in `+(m-h)+`ms
	Removed ${v} documents in `+(p-m)+`ms
Total Duration: ${p-y}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:v})))}}function SS(n,e){return new UV(n,e)}/**
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
 */class BV{constructor(e,t){this.db=e,this.garbageCollector=SS(this,t)}Xn(e){const t=this.nr(e);return this.db.getTargetCache().getTargetCount(e).next(i=>t.next(s=>i+s))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}er(e,t){return this.rr(e,(i,s)=>t(s))}addReference(e,t,i){return Df(e,i)}removeReference(e,t,i){return Df(e,i)}removeTargets(e,t,i){return this.db.getTargetCache().removeTargets(e,t,i)}markPotentiallyOrphaned(e,t){return Df(e,t)}ir(e,t){return function(s,o){let u=!1;return AS(s).Y(h=>IS(s,h,o).next(m=>(m&&(u=!0),F.resolve(!m)))).next(()=>u)}(e,t)}removeOrphanedDocuments(e,t){const i=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let o=0;return this.rr(e,(u,h)=>{if(h<=t){const m=this.ir(e,u).next(p=>{if(!p)return o++,i.getEntry(e,u).next(()=>(i.removeEntry(u,we.min()),Zs(e).delete(function(v){return[0,Sn(v.path)]}(u))))});s.push(m)}}).next(()=>F.waitFor(s)).next(()=>i.apply(e)).next(()=>o)}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,i)}updateLimboDocument(e,t){return Df(e,t)}rr(e,t){const i=Zs(e);let s,o=Kn.oe;return i.J({index:"documentTargetsIndex"},([u,h],{path:m,sequenceNumber:p})=>{u===0?(o!==Kn.oe&&t(new he(rr(s)),o),o=p,s=m):o=Kn.oe}).next(()=>{o!==Kn.oe&&t(new he(rr(s)),o)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Df(n,e){return Zs(n).put(function(i,s){return{targetId:0,path:Sn(i.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class CS{constructor(){this.changes=new rs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?F.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class FV{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,i){return to(e).put(i)}removeEntry(e,t,i){return to(e).delete(function(o,u){const h=o.path.toArray();return[h.slice(0,h.length-2),h[h.length-2],am(u),h[h.length-1]]}(t,i))}updateMetadata(e,t){return this.getMetadata(e).next(i=>(i.byteSize+=t,this.sr(e,i)))}getEntry(e,t){let i=ht.newInvalidDocument(t);return to(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Bc(t))},(s,o)=>{i=this._r(t,o)}).next(()=>i)}ar(e,t){let i={size:0,document:ht.newInvalidDocument(t)};return to(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Bc(t))},(s,o)=>{i={document:this._r(t,o),size:lm(o)}}).next(()=>i)}getEntries(e,t){let i=Qn();return this.ur(e,t,(s,o)=>{const u=this._r(s,o);i=i.insert(s,u)}).next(()=>i)}cr(e,t){let i=Qn(),s=new lt(he.comparator);return this.ur(e,t,(o,u)=>{const h=this._r(o,u);i=i.insert(o,h),s=s.insert(o,lm(u))}).next(()=>({documents:i,lr:s}))}ur(e,t,i){if(t.isEmpty())return F.resolve();let s=new et(tI);t.forEach(m=>s=s.add(m));const o=IDBKeyRange.bound(Bc(s.first()),Bc(s.last())),u=s.getIterator();let h=u.getNext();return to(e).J({index:"documentKeyIndex",range:o},(m,p,y)=>{const v=he.fromSegments([...p.prefixPath,p.collectionGroup,p.documentId]);for(;h&&tI(h,v)<0;)i(h,null),h=u.getNext();h&&h.isEqual(v)&&(i(h,p),h=u.hasNext()?u.getNext():null),h?y.$(Bc(h)):y.done()}).next(()=>{for(;h;)i(h,null),h=u.hasNext()?u.getNext():null})}getDocumentsMatchingQuery(e,t,i,s,o){const u=t.path,h=[u.popLast().toArray(),u.lastSegment(),am(i.readTime),i.documentKey.path.isEmpty()?"":i.documentKey.path.lastSegment()],m=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return to(e).U(IDBKeyRange.bound(h,m,!0)).next(p=>{o==null||o.incrementDocumentReadCount(p.length);let y=Qn();for(const v of p){const w=this._r(he.fromSegments(v.prefixPath.concat(v.collectionGroup,v.documentId)),v);w.isFoundDocument()&&(Uh(t,w)||s.has(w.key))&&(y=y.insert(w.key,w))}return y})}getAllFromCollectionGroup(e,t,i,s){let o=Qn();const u=eI(t,i),h=eI(t,si.max());return to(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(u,h,!0)},(m,p,y)=>{const v=this._r(he.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);o=o.insert(v.key,v),o.size===s&&y.done()}).next(()=>o)}newChangeBuffer(e){return new zV(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Zb(e).get("remoteDocumentGlobalKey").next(t=>(Ee(!!t),t))}sr(e,t){return Zb(e).put("remoteDocumentGlobalKey",t)}_r(e,t){if(t){const i=RV(this.serializer,t);if(!(i.isNoDocument()&&i.version.isEqual(we.min())))return i}return ht.newInvalidDocument(e)}}function DS(n){return new FV(n)}class zV extends CS{constructor(e,t){super(),this.hr=e,this.trackRemovals=t,this.Pr=new rs(i=>i.toString(),(i,s)=>i.isEqual(s))}applyChanges(e){const t=[];let i=0,s=new et((o,u)=>De(o.canonicalString(),u.canonicalString()));return this.changes.forEach((o,u)=>{const h=this.Pr.get(o);if(t.push(this.hr.removeEntry(e,o,h.readTime)),u.isValidDocument()){const m=Bb(this.hr.serializer,u);s=s.add(o.path.popLast());const p=lm(m);i+=p-h.size,t.push(this.hr.addEntry(e,o,m))}else if(i-=h.size,this.trackRemovals){const m=Bb(this.hr.serializer,u.convertToNoDocument(we.min()));t.push(this.hr.addEntry(e,o,m))}}),s.forEach(o=>{t.push(this.hr.indexManager.addToCollectionParentIndex(e,o))}),t.push(this.hr.updateMetadata(e,i)),F.waitFor(t)}getFromCache(e,t){return this.hr.ar(e,t).next(i=>(this.Pr.set(t,{size:i.size,readTime:i.document.readTime}),i.document))}getAllFromCache(e,t){return this.hr.cr(e,t).next(({documents:i,lr:s})=>(s.forEach((o,u)=>{this.Pr.set(o,{size:u,readTime:i.get(o).readTime})}),i))}}function Zb(n){return Jt(n,"remoteDocumentGlobal")}function to(n){return Jt(n,"remoteDocumentsV14")}function Bc(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function eI(n,e){const t=e.documentKey.path.toArray();return[n,am(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function tI(n,e){const t=n.path.toArray(),i=e.path.toArray();let s=0;for(let o=0;o<t.length-2&&o<i.length-2;++o)if(s=De(t[o],i[o]),s)return s;return s=De(t.length,i.length),s||(s=De(t[t.length-2],i[i.length-2]),s||De(t[t.length-1],i[i.length-1]))}/**
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
 */class qV{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class NS{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&nh(i.mutation,s,$n.empty(),yt.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Oe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Oe()){const s=sr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(o=>{let u=Wc();return o.forEach((h,m)=>{u=u.insert(h,m.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const i=sr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Oe()))}populateOverlays(e,t,i){const s=[];return i.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((u,h)=>{t.set(u,h)})})}computeViews(e,t,i,s){let o=Qn();const u=th(),h=function(){return th()}();return t.forEach((m,p)=>{const y=i.get(p.key);s.has(p.key)&&(y===void 0||y.mutation instanceof ss)?o=o.insert(p.key,p):y!==void 0?(u.set(p.key,y.mutation.getFieldMask()),nh(y.mutation,p,y.mutation.getFieldMask(),yt.now())):u.set(p.key,$n.empty())}),this.recalculateAndSaveOverlays(e,o).next(m=>(m.forEach((p,y)=>u.set(p,y)),t.forEach((p,y)=>{var v;return h.set(p,new qV(y,(v=u.get(p))!==null&&v!==void 0?v:null))}),h))}recalculateAndSaveOverlays(e,t){const i=th();let s=new lt((u,h)=>u-h),o=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const h of u)h.keys().forEach(m=>{const p=t.get(m);if(p===null)return;let y=i.get(m)||$n.empty();y=h.applyToLocalView(p,y),i.set(m,y);const v=(s.get(h.batchId)||Oe()).add(m);s=s.insert(h.batchId,v)})}).next(()=>{const u=[],h=s.getReverseIterator();for(;h.hasNext();){const m=h.getNext(),p=m.key,y=m.value,v=$R();y.forEach(w=>{if(!o.has(w)){const C=eS(t.get(w),i.get(w));C!==null&&v.set(w,C),o=o.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,p,v))}return F.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,s){return function(u){return he.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-o.size):F.resolve(sr());let h=-1,m=o;return u.next(p=>F.forEach(p,(y,v)=>(h<v.largestBatchId&&(h=v.largestBatchId),o.get(y)?F.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{m=m.insert(y,w)}))).next(()=>this.populateOverlays(e,p,o)).next(()=>this.computeViews(e,m,p,Oe())).next(y=>({batchId:h,changes:KR(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next(i=>{let s=Wc();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const o=t.collectionGroup;let u=Wc();return this.indexManager.getCollectionParents(e,o).next(h=>F.forEach(h,m=>{const p=function(v,w){return new is(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,m.child(o));return this.getDocumentsMatchingCollectionQuery(e,p,i,s).next(y=>{y.forEach((v,w)=>{u=u.insert(v,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,o,s))).next(u=>{o.forEach((m,p)=>{const y=p.getKey();u.get(y)===null&&(u=u.insert(y,ht.newInvalidDocument(y)))});let h=Wc();return u.forEach((m,p)=>{const y=o.get(m);y!==void 0&&nh(y.mutation,p,$n.empty(),yt.now()),Uh(t,p)&&(h=h.insert(m,p))}),h})}}/**
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
 */class jV{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return F.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ut(s.createTime)}}(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:hv(s.bundledQuery),readTime:Ut(s.readTime)}}(t)),F.resolve()}}/**
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
 */class HV{constructor(){this.overlays=new lt(he.comparator),this.Er=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const i=sr();return F.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,o)=>{this.Tt(e,t,o)}),F.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Er.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(i)),F.resolve()}getOverlaysForCollection(e,t,i){const s=sr(),o=t.length+1,u=new he(t.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const m=h.getNext().value,p=m.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===o&&m.largestBatchId>i&&s.set(m.getKey(),m)}return F.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let o=new lt((p,y)=>p-y);const u=this.overlays.getIterator();for(;u.hasNext();){const p=u.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>i){let y=o.get(p.largestBatchId);y===null&&(y=sr(),o=o.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const h=sr(),m=o.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((p,y)=>h.set(p,y)),!(h.size()>=s)););return F.resolve(h)}Tt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.Er.get(s.largestBatchId).delete(i.key);this.Er.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new lv(t,i));let o=this.Er.get(t);o===void 0&&(o=Oe(),this.Er.set(t,o)),this.Er.set(t,o.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,F.resolve()}}/**
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
 */class mv{constructor(){this.dr=new et(on.Ar),this.Rr=new et(on.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const i=new on(e,t);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new on(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new he(new Be([])),i=new on(t,e),s=new on(t,e+1),o=[];return this.Rr.forEachInRange([i,s],u=>{this.gr(u),o.push(u.key)}),o}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new he(new Be([])),i=new on(t,e),s=new on(t,e+1);let o=Oe();return this.Rr.forEachInRange([i,s],u=>{o=o.add(u.key)}),o}containsKey(e){const t=new on(e,0),i=this.dr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class on{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return he.comparator(e.key,t.key)||De(e.br,t.br)}static Vr(e,t){return De(e.br,t.br)||he.comparator(e.key,t.key)}}/**
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
 */class KV{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new et(on.Ar)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new av(o,t,i,s);this.mutationQueue.push(u);for(const h of s)this.vr=this.vr.add(new on(h.key,o)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return F.resolve(u)}lookupMutationBatch(e,t){return F.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Fr(i),o=s<0?0:s;return F.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new on(t,0),s=new on(t,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([i,s],u=>{const h=this.Cr(u.br);o.push(h)}),F.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new et(De);return t.forEach(s=>{const o=new on(s,0),u=new on(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,u],h=>{i=i.add(h.br)})}),F.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let o=i;he.isDocumentKey(o)||(o=o.child(""));const u=new on(new he(o),0);let h=new et(De);return this.vr.forEachWhile(m=>{const p=m.key.path;return!!i.isPrefixOf(p)&&(p.length===s&&(h=h.add(m.br)),!0)},u),F.resolve(this.Mr(h))}Mr(e){const t=[];return e.forEach(i=>{const s=this.Cr(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ee(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return F.forEach(t.mutations,s=>{const o=new on(s.key,t.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,t){const i=new on(t,0),s=this.vr.firstAfterOrEqual(i);return F.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class $V{constructor(e){this.Nr=e,this.docs=function(){return new lt(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),o=s?s.size:0,u=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return F.resolve(i?i.document.mutableCopy():ht.newInvalidDocument(t))}getEntries(e,t){let i=Qn();return t.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():ht.newInvalidDocument(s))}),F.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let o=Qn();const u=t.path,h=new he(u.child("")),m=this.docs.getIteratorFrom(h);for(;m.hasNext();){const{key:p,value:{document:y}}=m.getNext();if(!u.isPrefixOf(p.path))break;p.path.length>u.length+1||Jy(ER(y),i)<=0||(s.has(y.key)||Uh(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return F.resolve(o)}getAllFromCollectionGroup(e,t,i,s){ge()}Lr(e,t){return F.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new QV(this)}getSize(e){return F.resolve(this.size)}}class QV extends CS{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(i)}),F.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class WV{constructor(e){this.persistence=e,this.Br=new rs(t=>wo(t),Mh),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.kr=0,this.qr=new mv,this.targetCount=0,this.Qr=So.qn()}forEachTarget(e,t){return this.Br.forEach((i,s)=>t(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),F.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new So(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.Un(t),F.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,i){let s=0;const o=[];return this.Br.forEach((u,h)=>{h.sequenceNumber<=t&&i.get(h.targetId)===null&&(this.Br.delete(u),o.push(this.removeMatchingKeysForTargetId(e,h.targetId)),s++)}),F.waitFor(o).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const i=this.Br.get(t)||null;return F.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),F.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(u=>{o.push(s.markPotentiallyOrphaned(e,u))}),F.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),F.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return F.resolve(i)}containsKey(e,t){return F.resolve(this.qr.containsKey(t))}}/**
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
 */class pv{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Kn(0),this.Ur=!1,this.Ur=!0,this.Wr=new GV,this.referenceDelegate=e(this),this.Gr=new WV(this),this.indexManager=new kV,this.remoteDocumentCache=function(s){return new $V(s)}(i=>this.referenceDelegate.zr(i)),this.serializer=new vS(t),this.jr=new jV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new HV,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new KV(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){ne("MemoryPersistence","Starting transaction:",e);const s=new YV(this.$r.next());return this.referenceDelegate.Hr(),i(s).next(o=>this.referenceDelegate.Jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Yr(e,t){return F.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class YV extends wR{constructor(e){super(),this.currentSequenceNumber=e}}class Mm{constructor(e){this.persistence=e,this.Zr=new mv,this.Xr=null}static ei(e){return new Mm(e)}get ti(){if(this.Xr)return this.Xr;throw ge()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),F.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),F.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.ti.add(o.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ti,i=>{const s=he.fromPath(i);return this.ni(e,s).next(o=>{o||t.removeEntry(s,we.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return F.or([()=>F.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class um{constructor(e,t){this.persistence=e,this.ri=new rs(i=>Sn(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=SS(this,t)}static ei(e,t){return new um(e,t)}Hr(){}Jr(e){return F.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(s=>i+s))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return F.forEach(this.ri,(i,s)=>this.ir(e,i,s).next(o=>o?F.resolve():t(s)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.Lr(e,u=>this.ir(e,u,t).next(h=>{h||(i++,o.removeEntry(u,we.min()))})).next(()=>o.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),F.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),F.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),F.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ff(e.data.value)),t}ir(e,t,i){return F.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return F.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class XV{constructor(e){this.serializer=e}O(e,t,i,s){const o=new Cm("createOrUpgrade",t);i<1&&s>=1&&(function(m){m.createObjectStore("owner")}(e),function(m){m.createObjectStore("mutationQueues",{keyPath:"userId"}),m.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",gb,{unique:!0}),m.createObjectStore("documentMutations")}(e),nI(e),function(m){m.createObjectStore("remoteDocuments")}(e));let u=F.resolve();return i<3&&s>=3&&(i!==0&&(function(m){m.deleteObjectStore("targetDocuments"),m.deleteObjectStore("targets"),m.deleteObjectStore("targetGlobal")}(e),nI(e)),u=u.next(()=>function(m){const p=m.store("targetGlobal"),y={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:we.min().toTimestamp(),targetCount:0};return p.put("targetGlobalKey",y)}(o))),i<4&&s>=4&&(i!==0&&(u=u.next(()=>function(m,p){return p.store("mutations").U().next(y=>{m.deleteObjectStore("mutations"),m.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",gb,{unique:!0});const v=p.store("mutations"),w=y.map(C=>v.put(C));return F.waitFor(w)})}(e,o))),u=u.next(()=>{(function(m){m.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),i<5&&s>=5&&(u=u.next(()=>this.ii(o))),i<6&&s>=6&&(u=u.next(()=>(function(m){m.createObjectStore("remoteDocumentGlobal")}(e),this.si(o)))),i<7&&s>=7&&(u=u.next(()=>this.oi(o))),i<8&&s>=8&&(u=u.next(()=>this._i(e,o))),i<9&&s>=9&&(u=u.next(()=>{(function(m){m.objectStoreNames.contains("remoteDocumentChanges")&&m.deleteObjectStore("remoteDocumentChanges")})(e)})),i<10&&s>=10&&(u=u.next(()=>this.ai(o))),i<11&&s>=11&&(u=u.next(()=>{(function(m){m.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(m){m.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),i<12&&s>=12&&(u=u.next(()=>{(function(m){const p=m.createObjectStore("documentOverlays",{keyPath:xk});p.createIndex("collectionPathOverlayIndex",kk,{unique:!1}),p.createIndex("collectionGroupOverlayIndex",Vk,{unique:!1})})(e)})),i<13&&s>=13&&(u=u.next(()=>function(m){const p=m.createObjectStore("remoteDocumentsV14",{keyPath:wk});p.createIndex("documentKeyIndex",bk),p.createIndex("collectionGroupIndex",Ik)}(e)).next(()=>this.ui(e,o)).next(()=>e.deleteObjectStore("remoteDocuments"))),i<14&&s>=14&&(u=u.next(()=>this.ci(e,o))),i<15&&s>=15&&(u=u.next(()=>function(m){m.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),m.createObjectStore("indexState",{keyPath:Dk}).createIndex("sequenceNumberIndex",Nk,{unique:!1}),m.createObjectStore("indexEntries",{keyPath:Ok}).createIndex("documentKeyIndex",Pk,{unique:!1})}(e))),i<16&&s>=16&&(u=u.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),i<17&&s>=17&&(u=u.next(()=>{(function(m){m.createObjectStore("globals",{keyPath:"name"})})(e)})),u}si(e){let t=0;return e.store("remoteDocuments").J((i,s)=>{t+=lm(s)}).next(()=>{const i={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",i)})}ii(e){const t=e.store("mutationQueues"),i=e.store("mutations");return t.U().next(s=>F.forEach(s,o=>{const u=IDBKeyRange.bound([o.userId,-1],[o.userId,o.lastAcknowledgedBatchId]);return i.U("userMutationsIndex",u).next(h=>F.forEach(h,m=>{Ee(m.userId===o.userId);const p=oo(this.serializer,m);return bS(e,o.userId,p).next(()=>{})}))}))}oi(e){const t=e.store("targetDocuments"),i=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const o=[];return i.J((u,h)=>{const m=new Be(u),p=function(v){return[0,Sn(v)]}(m);o.push(t.get(p).next(y=>y?F.resolve():(v=>t.put({targetId:0,path:Sn(v),sequenceNumber:s.highestListenSequenceNumber}))(m)))}).next(()=>F.waitFor(o))})}_i(e,t){e.createObjectStore("collectionParents",{keyPath:Ck});const i=t.store("collectionParents"),s=new fv,o=u=>{if(s.add(u)){const h=u.lastSegment(),m=u.popLast();return i.put({collectionId:h,parent:Sn(m)})}};return t.store("remoteDocuments").J({H:!0},(u,h)=>{const m=new Be(u);return o(m.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([u,h,m],p)=>{const y=rr(h);return o(y.popLast())}))}ai(e){const t=e.store("targets");return t.J((i,s)=>{const o=Xc(s),u=ES(this.serializer,o);return t.put(u)})}ui(e,t){const i=t.store("remoteDocuments"),s=[];return i.J((o,u)=>{const h=t.store("remoteDocumentsV14"),m=function(v){return v.document?new he(Be.fromString(v.document.name).popFirst(5)):v.noDocument?he.fromSegments(v.noDocument.path):v.unknownDocument?he.fromSegments(v.unknownDocument.path):ge()}(u).path.toArray(),p={prefixPath:m.slice(0,m.length-2),collectionGroup:m[m.length-2],documentId:m[m.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};s.push(h.put(p))}).next(()=>F.waitFor(s))}ci(e,t){const i=t.store("mutations"),s=DS(this.serializer),o=new pv(Mm.ei,this.serializer.ht);return i.U().next(u=>{const h=new Map;return u.forEach(m=>{var p;let y=(p=h.get(m.userId))!==null&&p!==void 0?p:Oe();oo(this.serializer,m).keys().forEach(v=>y=y.add(v)),h.set(m.userId,y)}),F.forEach(h,(m,p)=>{const y=new ln(p),v=km.Pt(this.serializer,y),w=o.getIndexManager(y),C=Vm.Pt(y,this.serializer,w,o.referenceDelegate);return new NS(s,C,v,w).recalculateAndSaveOverlaysForDocumentKeys(new iy(t,Kn.oe),m).next()})})}}function nI(n){n.createObjectStore("targetDocuments",{keyPath:Rk}).createIndex("documentTargetsIndex",Sk,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Ak,{unique:!0}),n.createObjectStore("targetGlobal")}const P_="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class gv{constructor(e,t,i,s,o,u,h,m,p,y,v=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=i,this.li=o,this.window=u,this.document=h,this.hi=p,this.Pi=y,this.Ti=v,this.$r=null,this.Ur=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ii=null,this.inForeground=!1,this.Ei=null,this.di=null,this.Ai=Number.NEGATIVE_INFINITY,this.Ri=w=>Promise.resolve(),!gv.p())throw new Z($.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new BV(this,s),this.Vi=t+"main",this.serializer=new vS(m),this.mi=new or(this.Vi,this.Ti,new XV(this.serializer)),this.Wr=new CV,this.Gr=new MV(this.referenceDelegate,this.serializer),this.remoteDocumentCache=DS(this.serializer),this.jr=new SV,this.window&&this.window.localStorage?this.fi=this.window.localStorage:(this.fi=null,y===!1&&Lt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Z($.FAILED_PRECONDITION,P_);return this.pi(),this.yi(),this.wi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Gr.getHighestSequenceNumber(e))}).then(e=>{this.$r=new Kn(e,this.hi)}).then(()=>{this.Ur=!0}).catch(e=>(this.mi&&this.mi.close(),Promise.reject(e)))}Si(e){return this.Ri=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.mi.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.li.enqueueAndForget(async()=>{this.started&&await this.gi()}))}gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Nf(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.bi(e).next(t=>{t||(this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)))})}).next(()=>this.Di(e)).next(t=>this.isPrimary&&!t?this.vi(e).next(()=>!1):!!t&&this.Ci(e).next(()=>!0))).catch(e=>{if(ya(e))return ne("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ne("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.li.enqueueRetryable(()=>this.Ri(e)),this.isPrimary=e})}bi(e){return Fc(e).get("owner").next(t=>F.resolve(this.Fi(t)))}Mi(e){return Nf(e).delete(this.clientId)}async xi(){if(this.isPrimary&&!this.Oi(this.Ai,18e5)){this.Ai=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const i=Jt(t,"clientMetadata");return i.U().next(s=>{const o=this.Ni(s,18e5),u=s.filter(h=>o.indexOf(h)===-1);return F.forEach(u,h=>i.delete(h.clientId)).next(()=>u)})}).catch(()=>[]);if(this.fi)for(const t of e)this.fi.removeItem(this.Li(t.clientId))}}wi(){this.di=this.li.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.gi().then(()=>this.xi()).then(()=>this.wi()))}Fi(e){return!!e&&e.ownerId===this.clientId}Di(e){return this.Pi?F.resolve(!0):Fc(e).get("owner").next(t=>{if(t!==null&&this.Oi(t.leaseTimestampMs,5e3)&&!this.Bi(t.ownerId)){if(this.Fi(t)&&this.networkEnabled)return!0;if(!this.Fi(t)){if(!t.allowTabSynchronization)throw new Z($.FAILED_PRECONDITION,P_);return!1}}return!(!this.networkEnabled||!this.inForeground)||Nf(e).U().next(i=>this.Ni(i,5e3).find(s=>{if(this.clientId!==s.clientId){const o=!this.networkEnabled&&s.networkEnabled,u=!this.inForeground&&s.inForeground,h=this.networkEnabled===s.networkEnabled;if(o||u&&h)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&ne("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ur=!1,this.ki(),this.di&&(this.di.cancel(),this.di=null),this.qi(),this.Qi(),await this.mi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new iy(e,Kn.oe);return this.vi(t).next(()=>this.Mi(t))}),this.mi.close(),this.Ki()}Ni(e,t){return e.filter(i=>this.Oi(i.updateTimeMs,t)&&!this.Bi(i.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>Nf(e).U().next(t=>this.Ni(t,18e5).map(i=>i.clientId)))}get started(){return this.Ur}getGlobalsCache(){return this.Wr}getMutationQueue(e,t){return Vm.Pt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new VV(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return km.Pt(this.serializer,e)}getBundleCache(){return this.jr}runTransaction(e,t,i){ne("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",o=function(m){return m===17?Uk:m===16?Lk:m===15?ev:m===14?CR:m===13?SR:m===12?Mk:m===11?RR:void ge()}(this.Ti);let u;return this.mi.runTransaction(e,s,o,h=>(u=new iy(h,this.$r?this.$r.next():Kn.oe),t==="readwrite-primary"?this.bi(u).next(m=>!!m||this.Di(u)).next(m=>{if(!m)throw Lt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)),new Z($.FAILED_PRECONDITION,TR);return i(u)}).next(m=>this.Ci(u).next(()=>m)):this.Ui(u).next(()=>i(u)))).then(h=>(u.raiseOnCommittedEvent(),h))}Ui(e){return Fc(e).get("owner").next(t=>{if(t!==null&&this.Oi(t.leaseTimestampMs,5e3)&&!this.Bi(t.ownerId)&&!this.Fi(t)&&!(this.Pi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new Z($.FAILED_PRECONDITION,P_)})}Ci(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Fc(e).put("owner",t)}static p(){return or.p()}vi(e){const t=Fc(e);return t.get("owner").next(i=>this.Fi(i)?(ne("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):F.resolve())}Oi(e,t){const i=Date.now();return!(e<i-t)&&(!(e>i)||(Lt(`Detected an update time that is in the future: ${e} > ${i}`),!1))}pi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ei=()=>{this.li.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.gi()))},this.document.addEventListener("visibilitychange",this.Ei),this.inForeground=this.document.visibilityState==="visible")}qi(){this.Ei&&(this.document.removeEventListener("visibilitychange",this.Ei),this.Ei=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ii=()=>{this.ki();const t=/(?:Version|Mobile)\/1[456]/;XA()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.li.enterRestrictedMode(!0),this.li.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ii))}Qi(){this.Ii&&(this.window.removeEventListener("pagehide",this.Ii),this.Ii=null)}Bi(e){var t;try{const i=((t=this.fi)===null||t===void 0?void 0:t.getItem(this.Li(e)))!==null;return ne("IndexedDbPersistence",`Client '${e}' ${i?"is":"is not"} zombied in LocalStorage`),i}catch(i){return Lt("IndexedDbPersistence","Failed to get zombied client id.",i),!1}}ki(){if(this.fi)try{this.fi.setItem(this.Li(this.clientId),String(Date.now()))}catch(e){Lt("Failed to set zombie client id.",e)}}Ki(){if(this.fi)try{this.fi.removeItem(this.Li(this.clientId))}catch{}}Li(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Fc(n){return Jt(n,"owner")}function Nf(n){return Jt(n,"clientMetadata")}function _v(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class yv{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=s}static zi(e,t){let i=Oe(),s=Oe();for(const o of t.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new yv(e,t.fromCache,i,s)}}/**
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
 */class JV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class OS{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return XA()?8:bR(bt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,s){const o={result:null};return this.Xi(e,t).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.es(e,t,s,i).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new JV;return this.ts(e,t,u).next(h=>{if(o.result=h,this.Hi)return this.ns(e,t,u,h.size)})}).next(()=>o.result)}ns(e,t,i,s){return i.documentReadCount<this.Ji?(Ml()<=Me.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Ll(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),F.resolve()):(Ml()<=Me.DEBUG&&ne("QueryEngine","Query:",Ll(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Yi*s?(Ml()<=Me.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Ll(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fn(t))):F.resolve())}Xi(e,t){if(Db(t))return F.resolve(null);let i=Fn(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=sm(t,null,"F"),i=Fn(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(o=>{const u=Oe(...o);return this.Zi.getDocuments(e,u).next(h=>this.indexManager.getMinOffset(e,i).next(m=>{const p=this.rs(t,h);return this.ss(t,p,u,m.readTime)?this.Xi(e,sm(t,null,"F")):this.os(e,p,t,m)}))})))}es(e,t,i,s){return Db(t)||s.isEqual(we.min())?F.resolve(null):this.Zi.getDocuments(e,i).next(o=>{const u=this.rs(t,o);return this.ss(t,u,i,s)?F.resolve(null):(Ml()<=Me.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ll(t)),this.os(e,u,t,vR(s,-1)).next(h=>h))})}rs(e,t){let i=new et(HR(e));return t.forEach((s,o)=>{Uh(e,o)&&(i=i.add(o))}),i}ss(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ts(e,t,i){return Ml()<=Me.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Ll(t)),this.Zi.getDocumentsMatchingQuery(e,t,si.min(),i)}os(e,t,i,s){return this.Zi.getDocumentsMatchingQuery(e,i,s).next(o=>(t.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */class ZV{constructor(e,t,i,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new lt(De),this.cs=new rs(o=>wo(o),Mh),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NS(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function PS(n,e,t,i){return new ZV(n,e,t,i)}async function xS(n,e){const t=fe(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(o=>{const u=[],h=[];let m=Oe();for(const p of s){u.push(p.batchId);for(const y of p.mutations)m=m.add(y.key)}for(const p of o){h.push(p.batchId);for(const y of p.mutations)m=m.add(y.key)}return t.localDocuments.getDocuments(i,m).next(p=>({Ts:p,removedBatchIds:u,addedBatchIds:h}))})})}function eM(n,e){const t=fe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),o=t.hs.newChangeBuffer({trackRemovals:!0});return function(h,m,p,y){const v=p.batch,w=v.keys();let C=F.resolve();return w.forEach(M=>{C=C.next(()=>y.getEntry(m,M)).next(q=>{const j=p.docVersions.get(M);Ee(j!==null),q.version.compareTo(j)<0&&(v.applyToRemoteDocument(q,p),q.isValidDocument()&&(q.setReadTime(p.commitVersion),y.addEntry(q)))})}),C.next(()=>h.mutationQueue.removeMutationBatch(m,v))}(t,i,e,o).next(()=>o.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(h){let m=Oe();for(let p=0;p<h.mutationResults.length;++p)h.mutationResults[p].transformResults.length>0&&(m=m.add(h.batch.mutations[p].key));return m}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function kS(n){const e=fe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function tM(n,e){const t=fe(n),i=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const h=[];e.targetChanges.forEach((y,v)=>{const w=s.get(v);if(!w)return;h.push(t.Gr.removeMatchingKeys(o,y.removedDocuments,v).next(()=>t.Gr.addMatchingKeys(o,y.addedDocuments,v)));let C=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?C=C.withResumeToken(Pt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):y.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(y.resumeToken,i)),s=s.insert(v,C),function(q,j,ie){return q.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=3e8?!0:ie.addedDocuments.size+ie.modifiedDocuments.size+ie.removedDocuments.size>0}(w,C,y)&&h.push(t.Gr.updateTargetData(o,C))});let m=Qn(),p=Oe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(o,y))}),h.push(VS(o,u,e.documentUpdates).next(y=>{m=y.Is,p=y.Es})),!i.isEqual(we.min())){const y=t.Gr.getLastRemoteSnapshotVersion(o).next(v=>t.Gr.setTargetsMetadata(o,o.currentSequenceNumber,i));h.push(y)}return F.waitFor(h).next(()=>u.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,m,p)).next(()=>m)}).then(o=>(t.us=s,o))}function VS(n,e,t){let i=Oe(),s=Oe();return t.forEach(o=>i=i.add(o)),e.getEntries(n,i).next(o=>{let u=Qn();return t.forEach((h,m)=>{const p=o.get(h);m.isFoundDocument()!==p.isFoundDocument()&&(s=s.add(h)),m.isNoDocument()&&m.version.isEqual(we.min())?(e.removeEntry(h,m.readTime),u=u.insert(h,m)):!p.isValidDocument()||m.version.compareTo(p.version)>0||m.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(m),u=u.insert(h,m)):ne("LocalStore","Ignoring outdated watch update for ",h,". Current version:",p.version," Watch version:",m.version)}),{Is:u,Es:s}})}function nM(n,e){const t=fe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function su(n,e){const t=fe(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.Gr.getTargetData(i,e).next(o=>o?(s=o,F.resolve(s)):t.Gr.allocateTargetId(i).next(u=>(s=new zr(e,u,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.us.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function au(n,e,t){const i=fe(n),s=i.us.get(e),o=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",o,u=>i.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!ya(u))throw u;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${u}`)}i.us=i.us.remove(e),i.cs.delete(s.target)}function cm(n,e,t){const i=fe(n);let s=we.min(),o=Oe();return i.persistence.runTransaction("Execute query","readwrite",u=>function(m,p,y){const v=fe(m),w=v.cs.get(y);return w!==void 0?F.resolve(v.us.get(w)):v.Gr.getTargetData(p,y)}(i,u,Fn(e)).next(h=>{if(h)return s=h.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(u,h.targetId).next(m=>{o=m})}).next(()=>i._s.getDocumentsMatchingQuery(u,e,t?s:we.min(),t?o:Oe())).next(h=>(US(i,jR(e),h),{documents:h,ds:o})))}function MS(n,e){const t=fe(n),i=fe(t.Gr),s=t.us.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",o=>i.ut(o,e).next(u=>u?u.target:null))}function LS(n,e){const t=fe(n),i=t.ls.get(e)||we.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.hs.getAllFromCollectionGroup(s,e,vR(i,-1),Number.MAX_SAFE_INTEGER)).then(s=>(US(t,e,s),s))}function US(n,e,t){let i=n.ls.get(e)||we.min();t.forEach((s,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)}),n.ls.set(e,i)}async function iM(n,e,t,i){const s=fe(n);let o=Oe(),u=Qn();for(const p of t){const y=e.As(p.metadata.name);p.document&&(o=o.add(y));const v=e.Rs(p);v.setReadTime(e.Vs(p.metadata.readTime)),u=u.insert(y,v)}const h=s.hs.newChangeBuffer({trackRemovals:!0}),m=await su(s,function(y){return Fn(vu(Be.fromString(`__bundle__/docs/${y}`)))}(i));return s.persistence.runTransaction("Apply bundle documents","readwrite",p=>VS(p,h,u).next(y=>(h.apply(p),y)).next(y=>s.Gr.removeMatchingKeysForTargetId(p,m.targetId).next(()=>s.Gr.addMatchingKeys(p,o,m.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(p,y.Is,y.Es)).next(()=>y.Is)))}async function rM(n,e,t=Oe()){const i=await su(n,Fn(hv(e.bundledQuery))),s=fe(n);return s.persistence.runTransaction("Save named query","readwrite",o=>{const u=Ut(e.readTime);if(i.snapshotVersion.compareTo(u)>=0)return s.jr.saveNamedQuery(o,e);const h=i.withResumeToken(Pt.EMPTY_BYTE_STRING,u);return s.us=s.us.insert(h.targetId,h),s.Gr.updateTargetData(o,h).next(()=>s.Gr.removeMatchingKeysForTargetId(o,i.targetId)).next(()=>s.Gr.addMatchingKeys(o,t,i.targetId)).next(()=>s.jr.saveNamedQuery(o,e))})}function iI(n,e){return`firestore_clients_${n}_${e}`}function rI(n,e,t){let i=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(i+=`_${e.uid}`),i}function x_(n,e){return`firestore_targets_${n}_${e}`}class hm{constructor(e,t,i,s){this.user=e,this.batchId=t,this.state=i,this.error=s}static fs(e,t,i){const s=JSON.parse(i);let o,u=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return u&&s.error&&(u=typeof s.error.message=="string"&&typeof s.error.code=="string",u&&(o=new Z(s.error.code,s.error.message))),u?new hm(e,t,s.state,o):(Lt("SharedClientState",`Failed to parse mutation state for ID '${t}': ${i}`),null)}gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ih{constructor(e,t,i){this.targetId=e,this.state=t,this.error=i}static fs(e,t){const i=JSON.parse(t);let s,o=typeof i=="object"&&["not-current","current","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new Z(i.error.code,i.error.message))),o?new ih(e,i.state,s):(Lt("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class dm{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static fs(e,t){const i=JSON.parse(t);let s=typeof i=="object"&&i.activeTargetIds instanceof Array,o=iv();for(let u=0;s&&u<i.activeTargetIds.length;++u)s=IR(i.activeTargetIds[u]),o=o.add(i.activeTargetIds[u]);return s?new dm(e,o):(Lt("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class vv{constructor(e,t){this.clientId=e,this.onlineState=t}static fs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new vv(t.clientId,t.onlineState):(Lt("SharedClientState",`Failed to parse online state: ${e}`),null)}}class _y{constructor(){this.activeTargetIds=iv()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class k_{constructor(e,t,i,s,o){this.window=e,this.li=t,this.persistenceKey=i,this.ws=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ss=this.bs.bind(this),this.Ds=new lt(De),this.started=!1,this.vs=[];const u=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=o,this.Cs=iI(this.persistenceKey,this.ws),this.Fs=function(m){return`firestore_sequence_number_${m}`}(this.persistenceKey),this.Ds=this.Ds.insert(this.ws,new _y),this.Ms=new RegExp(`^firestore_clients_${u}_([^_]*)$`),this.xs=new RegExp(`^firestore_mutations_${u}_(\\d+)(?:_(.*))?$`),this.Os=new RegExp(`^firestore_targets_${u}_(\\d+)$`),this.Ns=function(m){return`firestore_online_state_${m}`}(this.persistenceKey),this.Ls=function(m){return`firestore_bundle_loaded_v2_${m}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ss)}static p(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const i of e){if(i===this.ws)continue;const s=this.getItem(iI(this.persistenceKey,i));if(s){const o=dm.fs(i,s);o&&(this.Ds=this.Ds.insert(o.clientId,o))}}this.Bs();const t=this.storage.getItem(this.Ns);if(t){const i=this.ks(t);i&&this.qs(i)}for(const i of this.vs)this.bs(i);this.vs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Fs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Qs(this.Ds)}isActiveQueryTarget(e){let t=!1;return this.Ds.forEach((i,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ks(e,"pending")}updateMutationState(e,t,i){this.Ks(e,t,i),this.$s(e)}addLocalQueryTarget(e,t=!0){let i="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(x_(this.persistenceKey,e));if(s){const o=ih.fs(e,s);o&&(i=o.state)}}return t&&this.Us.ps(e),this.Bs(),i}removeLocalQueryTarget(e){this.Us.ys(e),this.Bs()}isLocalQueryTarget(e){return this.Us.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(x_(this.persistenceKey,e))}updateQueryState(e,t,i){this.Ws(e,t,i)}handleUserChange(e,t,i){t.forEach(s=>{this.$s(s)}),this.currentUser=e,i.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Gs(e)}notifyBundleLoaded(e){this.zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ss),this.removeItem(this.Cs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ne("SharedClientState","READ",e,t),t}setItem(e,t){ne("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){ne("SharedClientState","REMOVE",e),this.storage.removeItem(e)}bs(e){const t=e;if(t.storageArea===this.storage){if(ne("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Cs)return void Lt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.li.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ms.test(t.key)){if(t.newValue==null){const i=this.js(t.key);return this.Hs(i,null)}{const i=this.Js(t.key,t.newValue);if(i)return this.Hs(i.clientId,i)}}else if(this.xs.test(t.key)){if(t.newValue!==null){const i=this.Ys(t.key,t.newValue);if(i)return this.Zs(i)}}else if(this.Os.test(t.key)){if(t.newValue!==null){const i=this.Xs(t.key,t.newValue);if(i)return this.eo(i)}}else if(t.key===this.Ns){if(t.newValue!==null){const i=this.ks(t.newValue);if(i)return this.qs(i)}}else if(t.key===this.Fs){const i=function(o){let u=Kn.oe;if(o!=null)try{const h=JSON.parse(o);Ee(typeof h=="number"),u=h}catch(h){Lt("SharedClientState","Failed to read sequence number from WebStorage",h)}return u}(t.newValue);i!==Kn.oe&&this.sequenceNumberHandler(i)}else if(t.key===this.Ls){const i=this.no(t.newValue);await Promise.all(i.map(s=>this.syncEngine.ro(s)))}}}else this.vs.push(t)})}}get Us(){return this.Ds.get(this.ws)}Bs(){this.setItem(this.Cs,this.Us.gs())}Ks(e,t,i){const s=new hm(this.currentUser,e,t,i),o=rI(this.persistenceKey,this.currentUser,e);this.setItem(o,s.gs())}$s(e){const t=rI(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Gs(e){const t={clientId:this.ws,onlineState:e};this.storage.setItem(this.Ns,JSON.stringify(t))}Ws(e,t,i){const s=x_(this.persistenceKey,e),o=new ih(e,t,i);this.setItem(s,o.gs())}zs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Ls,t)}js(e){const t=this.Ms.exec(e);return t?t[1]:null}Js(e,t){const i=this.js(e);return dm.fs(i,t)}Ys(e,t){const i=this.xs.exec(e),s=Number(i[1]),o=i[2]!==void 0?i[2]:null;return hm.fs(new ln(o),s,t)}Xs(e,t){const i=this.Os.exec(e),s=Number(i[1]);return ih.fs(s,t)}ks(e){return vv.fs(e)}no(e){return JSON.parse(e)}async Zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.io(e.batchId,e.state,e.error);ne("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}eo(e){return this.syncEngine.so(e.targetId,e.state,e.error)}Hs(e,t){const i=t?this.Ds.insert(e,t):this.Ds.remove(e),s=this.Qs(this.Ds),o=this.Qs(i),u=[],h=[];return o.forEach(m=>{s.has(m)||u.push(m)}),s.forEach(m=>{o.has(m)||h.push(m)}),this.syncEngine.oo(u,h).then(()=>{this.Ds=i})}qs(e){this.Ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Qs(e){let t=iv();return e.forEach((i,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class BS{constructor(){this._o=new _y,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new _y,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sM{uo(e){}shutdown(){}}/**
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
 */class sI{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Of=null;function V_(){return Of===null?Of=function(){return 268435456+Math.round(2147483648*Math.random())}():Of++,"0x"+Of.toString(16)}/**
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
 */const aM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class oM{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const bn="WebChannelConnection";class lM extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${s}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Oo(t,i,s,o,u){const h=V_(),m=this.No(t,i.toUriEncodedString());ne("RestConnection",`Sending RPC '${t}' ${h}:`,m,s);const p={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(p,o,u),this.Bo(t,m,p,s).then(y=>(ne("RestConnection",`Received RPC '${t}' ${h}: `,y),y),y=>{throw cr("RestConnection",`RPC '${t}' ${h} failed with error: `,y,"url: ",m,"request:",s),y})}ko(t,i,s,o,u,h){return this.Oo(t,i,s,o,u)}Lo(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yu}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,u)=>t[u]=o),s&&s.headers.forEach((o,u)=>t[u]=o)}No(t,i){const s=aM[t];return`${this.Fo}/v1/${i}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,i,s){const o=V_();return new Promise((u,h)=>{const m=new hR;m.setWithCredentials(!0),m.listenOnce(dR.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case Mf.NO_ERROR:const y=m.getResponseJson();ne(bn,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),u(y);break;case Mf.TIMEOUT:ne(bn,`RPC '${e}' ${o} timed out`),h(new Z($.DEADLINE_EXCEEDED,"Request time out"));break;case Mf.HTTP_ERROR:const v=m.getStatus();if(ne(bn,`RPC '${e}' ${o} failed with status:`,v,"response text:",m.getResponseText()),v>0){let w=m.getResponseJson();Array.isArray(w)&&(w=w[0]);const C=w==null?void 0:w.error;if(C&&C.status&&C.message){const M=function(j){const ie=j.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ie)>=0?ie:$.UNKNOWN}(C.status);h(new Z(M,C.message))}else h(new Z($.UNKNOWN,"Server responded with status "+m.getStatus()))}else h(new Z($.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{ne(bn,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(s);ne(bn,`RPC '${e}' ${o} sending request:`,s),m.send(t,"POST",p,i,15)})}qo(e,t,i){const s=V_(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=pR(),h=mR(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(m.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Lo(m.initMessageHeaders,t,i),m.encodeInitMessageHeaders=!0;const y=o.join("");ne(bn,`Creating RPC '${e}' stream ${s}: ${y}`,m);const v=u.createWebChannel(y,m);let w=!1,C=!1;const M=new oM({Eo:j=>{C?ne(bn,`Not sending because RPC '${e}' stream ${s} is closed:`,j):(w||(ne(bn,`Opening RPC '${e}' stream ${s} transport.`),v.open(),w=!0),ne(bn,`RPC '${e}' stream ${s} sending:`,j),v.send(j))},Ao:()=>v.close()}),q=(j,ie,ae)=>{j.listen(ie,J=>{try{ae(J)}catch(oe){setTimeout(()=>{throw oe},0)}})};return q(v,Qc.EventType.OPEN,()=>{C||(ne(bn,`RPC '${e}' stream ${s} transport opened.`),M.So())}),q(v,Qc.EventType.CLOSE,()=>{C||(C=!0,ne(bn,`RPC '${e}' stream ${s} transport closed`),M.Do())}),q(v,Qc.EventType.ERROR,j=>{C||(C=!0,cr(bn,`RPC '${e}' stream ${s} transport errored:`,j),M.Do(new Z($.UNAVAILABLE,"The operation could not be completed")))}),q(v,Qc.EventType.MESSAGE,j=>{var ie;if(!C){const ae=j.data[0];Ee(!!ae);const J=ae,oe=(J==null?void 0:J.error)||((ie=J[0])===null||ie===void 0?void 0:ie.error);if(oe){ne(bn,`RPC '${e}' stream ${s} received error:`,oe);const re=oe.status;let me=function(A){const N=Ht[A];if(N!==void 0)return iS(N)}(re),O=oe.message;me===void 0&&(me=$.INTERNAL,O="Unknown error status: "+re+" with message "+oe.message),C=!0,M.Do(new Z(me,O)),v.close()}else ne(bn,`RPC '${e}' stream ${s} received:`,ae),M.vo(ae)}}),q(h,fR.STAT_EVENT,j=>{j.stat===ty.PROXY?ne(bn,`RPC '${e}' stream ${s} detected buffering proxy`):j.stat===ty.NOPROXY&&ne(bn,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{M.bo()},0),M}}/**
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
 */function FS(){return typeof window<"u"?window:null}function Hf(){return typeof document<"u"?document:null}/**
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
 */function qh(n){return new gV(n,!0)}/**
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
 */class Ev{constructor(e,t,i=1e3,s=1.5,o=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=s,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-i);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class zS{constructor(e,t,i,s,o,u,h,m){this.li=e,this.Yo=i,this.Zo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=m,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Ev(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Lt(t.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Xo===t&&this.I_(i,s)},i=>{e(()=>{const s=new Z($.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(s)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{i(()=>this.E_(s))}),this.stream.onMessage(s=>{i(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uM extends zS{constructor(e,t,i,s,o,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,u),this.serializer=o}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=vV(this.serializer,e),i=function(o){if(!("targetChange"in o))return we.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?we.min():u.readTime?Ut(u.readTime):we.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=dy(this.serializer),t.addTarget=function(o,u){let h;const m=u.target;if(h=im(m)?{documents:fS(o,m)}:{query:mS(o,m).ct},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=oS(o,u.resumeToken);const p=cy(o,u.expectedCount);p!==null&&(h.expectedCount=p)}else if(u.snapshotVersion.compareTo(we.min())>0){h.readTime=ru(o,u.snapshotVersion.toTimestamp());const p=cy(o,u.expectedCount);p!==null&&(h.expectedCount=p)}return h}(this.serializer,e);const i=TV(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=dy(this.serializer),t.removeTarget=e,this.c_(t)}}class cM extends zS{constructor(e,t,i,s,o,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,u),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=EV(e.writeResults,e.commitTime),i=Ut(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=dy(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>Ih(this.serializer,i))};this.c_(t)}}/**
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
 */class hM extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new Z($.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Oo(e,hy(t,i),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z($.UNKNOWN,o.toString())})}ko(e,t,i,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.ko(e,hy(t,i),s,u,h,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new Z($.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class dM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Lt(t),this.C_=!1):ne("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class fM{constructor(e,t,i,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(u=>{i.enqueueAndForget(async()=>{Ea(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(m){const p=fe(m);p.k_.add(4),await wu(p),p.K_.set("Unknown"),p.k_.delete(4),await jh(p)}(this))})}),this.K_=new dM(i,s)}}async function jh(n){if(Ea(n))for(const e of n.q_)await e(!0)}async function wu(n){for(const e of n.q_)await e(!1)}function Lm(n,e){const t=fe(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),bv(t)?wv(t):Iu(t).s_()&&Tv(t,e))}function ou(n,e){const t=fe(n),i=Iu(t);t.B_.delete(e),i.s_()&&qS(t,e),t.B_.size===0&&(i.s_()?i.a_():Ea(t)&&t.K_.set("Unknown"))}function Tv(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Iu(n).V_(e)}function qS(n,e){n.U_.xe(e),Iu(n).m_(e)}function wv(n){n.U_=new dV({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Iu(n).start(),n.K_.F_()}function bv(n){return Ea(n)&&!Iu(n).i_()&&n.B_.size>0}function Ea(n){return fe(n).k_.size===0}function jS(n){n.U_=void 0}async function mM(n){n.K_.set("Online")}async function pM(n){n.B_.forEach((e,t)=>{Tv(n,e)})}async function gM(n,e){jS(n),bv(n)?(n.K_.O_(e),wv(n)):n.K_.set("Unknown")}async function _M(n,e,t){if(n.K_.set("Online"),e instanceof aS&&e.state===2&&e.cause)try{await async function(s,o){const u=o.cause;for(const h of o.targetIds)s.B_.has(h)&&(await s.remoteSyncer.rejectListen(h,u),s.B_.delete(h),s.U_.removeTarget(h))}(n,e)}catch(i){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await fm(n,i)}else if(e instanceof jf?n.U_.$e(e):e instanceof sS?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(we.min()))try{const i=await kS(n.localStore);t.compareTo(i)>=0&&await function(o,u){const h=o.U_.it(u);return h.targetChanges.forEach((m,p)=>{if(m.resumeToken.approximateByteSize()>0){const y=o.B_.get(p);y&&o.B_.set(p,y.withResumeToken(m.resumeToken,u))}}),h.targetMismatches.forEach((m,p)=>{const y=o.B_.get(m);if(!y)return;o.B_.set(m,y.withResumeToken(Pt.EMPTY_BYTE_STRING,y.snapshotVersion)),qS(o,m);const v=new zr(y.target,m,p,y.sequenceNumber);Tv(o,v)}),o.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(i){ne("RemoteStore","Failed to raise snapshot:",i),await fm(n,i)}}async function fm(n,e,t){if(!ya(e))throw e;n.k_.add(1),await wu(n),n.K_.set("Offline"),t||(t=()=>kS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await jh(n)})}function HS(n,e){return e().catch(t=>fm(n,t,e))}async function bu(n){const e=fe(n),t=fa(e);let i=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;yM(e);)try{const s=await nM(e.localStore,i);if(s===null){e.L_.length===0&&t.a_();break}i=s.batchId,vM(e,s)}catch(s){await fm(e,s)}GS(e)&&KS(e)}function yM(n){return Ea(n)&&n.L_.length<10}function vM(n,e){n.L_.push(e);const t=fa(n);t.s_()&&t.f_&&t.g_(e.mutations)}function GS(n){return Ea(n)&&!fa(n).i_()&&n.L_.length>0}function KS(n){fa(n).start()}async function EM(n){fa(n).w_()}async function TM(n){const e=fa(n);for(const t of n.L_)e.g_(t.mutations)}async function wM(n,e,t){const i=n.L_.shift(),s=ov.from(i,e,t);await HS(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await bu(n)}async function bM(n,e){e&&fa(n).f_&&await async function(i,s){if(function(u){return nS(u)&&u!==$.ABORTED}(s.code)){const o=i.L_.shift();fa(i).__(),await HS(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await bu(i)}}(n,e),GS(n)&&KS(n)}async function aI(n,e){const t=fe(n);t.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const i=Ea(t);t.k_.add(3),await wu(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await jh(t)}async function yy(n,e){const t=fe(n);e?(t.k_.delete(2),await jh(t)):e||(t.k_.add(2),await wu(t),t.K_.set("Unknown"))}function Iu(n){return n.W_||(n.W_=function(t,i,s){const o=fe(t);return o.b_(),new uM(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Ro:mM.bind(null,n),mo:pM.bind(null,n),po:gM.bind(null,n),R_:_M.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),bv(n)?wv(n):n.K_.set("Unknown")):(await n.W_.stop(),jS(n))})),n.W_}function fa(n){return n.G_||(n.G_=function(t,i,s){const o=fe(t);return o.b_(),new cM(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:EM.bind(null,n),po:bM.bind(null,n),p_:TM.bind(null,n),y_:wM.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await bu(n)):(await n.G_.stop(),n.L_.length>0&&(ne("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
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
 */class Iv{constructor(e,t,i,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,o){const u=Date.now()+i,h=new Iv(e,t,u,s,o);return h.start(i),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Au(n,e){if(Lt("AsyncQueue",`${e}: ${n}`),ya(n))return new Z($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Hl{static emptySet(e){return new Hl(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||he.comparator(t.key,i.key):(t,i)=>he.comparator(t.key,i.key),this.keyedMap=Wc(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Hl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=i.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Hl;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class oI{constructor(){this.z_=new lt(he.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):ge():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class lu{constructor(e,t,i,s,o,u,h,m,p){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=m,this.hasCachedResults=p}static fromInitialDocuments(e,t,i,s,o){const u=[];return t.forEach(h=>{u.push({type:0,doc:h})}),new lu(e,t,Hl.emptySet(t),u,i,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class IM{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class AM{constructor(){this.queries=lI(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const s=fe(t),o=s.queries;s.queries=lI(),o.forEach((u,h)=>{for(const m of h.J_)m.onError(i)})})(this,new Z($.ABORTED,"Firestore shutting down"))}}function lI(){return new rs(n=>qR(n),Lh)}async function Av(n,e){const t=fe(n);let i=3;const s=e.query;let o=t.queries.get(s);o?!o.Y_()&&e.Z_()&&(i=2):(o=new IM,i=e.Z_()?0:1);try{switch(i){case 0:o.H_=await t.onListen(s,!0);break;case 1:o.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const h=Au(u,`Initialization of query '${Ll(e.query)}' failed`);return void e.onError(h)}t.queries.set(s,o),o.J_.push(e),e.ea(t.onlineState),o.H_&&e.ta(o.H_)&&Sv(t)}async function Rv(n,e){const t=fe(n),i=e.query;let s=3;const o=t.queries.get(i);if(o){const u=o.J_.indexOf(e);u>=0&&(o.J_.splice(u,1),o.J_.length===0?s=e.Z_()?0:1:!o.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function RM(n,e){const t=fe(n);let i=!1;for(const s of e){const o=s.query,u=t.queries.get(o);if(u){for(const h of u.J_)h.ta(s)&&(i=!0);u.H_=s}}i&&Sv(t)}function SM(n,e,t){const i=fe(n),s=i.queries.get(e);if(s)for(const o of s.J_)o.onError(t);i.queries.delete(e)}function Sv(n){n.X_.forEach(e=>{e.next()})}var vy,uI;(uI=vy||(vy={})).na="default",uI.Cache="cache";class Cv{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new lu(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=lu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==vy.Cache}}/**
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
 */class CM{constructor(e,t){this.ca=e,this.byteLength=t}la(){return"metadata"in this.ca}}/**
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
 */class cI{constructor(e){this.serializer=e}As(e){return lr(this.serializer,e)}Rs(e){return e.metadata.exists?dS(this.serializer,e.document,!1):ht.newNoDocument(this.As(e.metadata.name),this.Vs(e.metadata.readTime))}Vs(e){return Ut(e)}}class DM{constructor(e,t,i){this.ha=e,this.localStore=t,this.serializer=i,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=$S(e)}Pa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ca.namedQuery)this.queries.push(e.ca.namedQuery);else if(e.ca.documentMetadata){this.documents.push({metadata:e.ca.documentMetadata}),e.ca.documentMetadata.exists||++t;const i=Be.fromString(e.ca.documentMetadata.name);this.collectionGroups.add(i.get(i.length-2))}else e.ca.document&&(this.documents[this.documents.length-1].document=e.ca.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ta(e){const t=new Map,i=new cI(this.serializer);for(const s of e)if(s.metadata.queries){const o=i.As(s.metadata.name);for(const u of s.metadata.queries){const h=(t.get(u)||Oe()).add(o);t.set(u,h)}}return t}async complete(){const e=await iM(this.localStore,new cI(this.serializer),this.documents,this.ha.id),t=this.Ta(this.documents);for(const i of this.queries)await rM(this.localStore,i,t.get(i.name));return this.progress.taskState="Success",{progress:this.progress,Ia:this.collectionGroups,Ea:e}}}function $S(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class QS{constructor(e){this.key=e}}class WS{constructor(e){this.key=e}}class YS{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Oe(),this.mutatedKeys=Oe(),this.Va=HR(e),this.ma=new Hl(this.Va)}get fa(){return this.da}ga(e,t){const i=t?t.pa:new oI,s=t?t.ma:this.ma;let o=t?t.mutatedKeys:this.mutatedKeys,u=s,h=!1;const m=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,p=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((y,v)=>{const w=s.get(y),C=Uh(this.query,v)?v:null,M=!!w&&this.mutatedKeys.has(w.key),q=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let j=!1;w&&C?w.data.isEqual(C.data)?M!==q&&(i.track({type:3,doc:C}),j=!0):this.ya(w,C)||(i.track({type:2,doc:C}),j=!0,(m&&this.Va(C,m)>0||p&&this.Va(C,p)<0)&&(h=!0)):!w&&C?(i.track({type:0,doc:C}),j=!0):w&&!C&&(i.track({type:1,doc:w}),j=!0,(m||p)&&(h=!0)),j&&(C?(u=u.add(C),o=q?o.add(y):o.delete(y)):(u=u.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),o=o.delete(y.key),i.track({type:1,doc:y})}return{ma:u,pa:i,ss:h,mutatedKeys:o}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const o=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const u=e.pa.j_();u.sort((y,v)=>function(C,M){const q=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return q(C)-q(M)}(y.type,v.type)||this.Va(y.doc,v.doc)),this.wa(i),s=s!=null&&s;const h=t&&!s?this.Sa():[],m=this.Ra.size===0&&this.current&&!s?1:0,p=m!==this.Aa;return this.Aa=m,u.length!==0||p?{snapshot:new lu(this.query,e.ma,o,u,e.mutatedKeys,m===0,p,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:h}:{ba:h}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new oI,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Oe(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new WS(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new QS(i))}),t}va(e){this.da=e.ds,this.Ra=Oe();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return lu.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class NM{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class OM{constructor(e){this.key=e,this.Fa=!1}}class PM{constructor(e,t,i,s,o,u){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new rs(h=>qR(h),Lh),this.Oa=new Map,this.Na=new Set,this.La=new lt(he.comparator),this.Ba=new Map,this.ka=new mv,this.qa={},this.Qa=new Map,this.Ka=So.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function xM(n,e,t=!0){const i=Um(n);let s;const o=i.xa.get(e);return o?(i.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Ca()):s=await XS(i,e,t,!0),s}async function kM(n,e){const t=Um(n);await XS(t,e,!0,!1)}async function XS(n,e,t,i){const s=await su(n.localStore,Fn(e)),o=s.targetId,u=n.sharedClientState.addLocalQueryTarget(o,t);let h;return i&&(h=await Dv(n,e,o,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&Lm(n.remoteStore,s),h}async function Dv(n,e,t,i,s){n.Ua=(v,w,C)=>async function(q,j,ie,ae){let J=j.view.ga(ie);J.ss&&(J=await cm(q.localStore,j.query,!1).then(({documents:O})=>j.view.ga(O,J)));const oe=ae&&ae.targetChanges.get(j.targetId),re=ae&&ae.targetMismatches.get(j.targetId)!=null,me=j.view.applyChanges(J,q.isPrimaryClient,oe,re);return Ey(q,j.targetId,me.ba),me.snapshot}(n,v,w,C);const o=await cm(n.localStore,e,!0),u=new YS(e,o.ds),h=u.ga(o.documents),m=zh.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),p=u.applyChanges(h,n.isPrimaryClient,m);Ey(n,t,p.ba);const y=new NM(e,t,u);return n.xa.set(e,y),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),p.snapshot}async function VM(n,e,t){const i=fe(n),s=i.xa.get(e),o=i.Oa.get(s.targetId);if(o.length>1)return i.Oa.set(s.targetId,o.filter(u=>!Lh(u,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await au(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),t&&ou(i.remoteStore,s.targetId),uu(i,s.targetId)}).catch(_a)):(uu(i,s.targetId),await au(i.localStore,s.targetId,!0))}async function MM(n,e){const t=fe(n),i=t.xa.get(e),s=t.Oa.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),ou(t.remoteStore,i.targetId))}async function LM(n,e,t){const i=xv(n);try{const s=await function(u,h){const m=fe(u),p=yt.now(),y=h.reduce((C,M)=>C.add(M.key),Oe());let v,w;return m.persistence.runTransaction("Locally write mutations","readwrite",C=>{let M=Qn(),q=Oe();return m.hs.getEntries(C,y).next(j=>{M=j,M.forEach((ie,ae)=>{ae.isValidDocument()||(q=q.add(ie))})}).next(()=>m.localDocuments.getOverlayedDocuments(C,M)).next(j=>{v=j;const ie=[];for(const ae of h){const J=uV(ae,v.get(ae.key).overlayedDocument);J!=null&&ie.push(new ss(ae.key,J,xR(J.value.mapValue),_t.exists(!0)))}return m.mutationQueue.addMutationBatch(C,p,ie,h)}).next(j=>{w=j;const ie=j.applyToLocalDocumentSet(v,q);return m.documentOverlayCache.saveOverlays(C,j.batchId,ie)})}).then(()=>({batchId:w.batchId,changes:KR(v)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(u,h,m){let p=u.qa[u.currentUser.toKey()];p||(p=new lt(De)),p=p.insert(h,m),u.qa[u.currentUser.toKey()]=p}(i,s.batchId,t),await as(i,s.changes),await bu(i.remoteStore)}catch(s){const o=Au(s,"Failed to persist write");t.reject(o)}}async function JS(n,e){const t=fe(n);try{const i=await tM(t.localStore,e);e.targetChanges.forEach((s,o)=>{const u=t.Ba.get(o);u&&(Ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.Fa=!0:s.modifiedDocuments.size>0?Ee(u.Fa):s.removedDocuments.size>0&&(Ee(u.Fa),u.Fa=!1))}),await as(t,i,e)}catch(i){await _a(i)}}function hI(n,e,t){const i=fe(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.xa.forEach((o,u)=>{const h=u.view.ea(e);h.snapshot&&s.push(h.snapshot)}),function(u,h){const m=fe(u);m.onlineState=h;let p=!1;m.queries.forEach((y,v)=>{for(const w of v.J_)w.ea(h)&&(p=!0)}),p&&Sv(m)}(i.eventManager,e),s.length&&i.Ma.R_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function UM(n,e,t){const i=fe(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Ba.get(e),o=s&&s.key;if(o){let u=new lt(he.comparator);u=u.insert(o,ht.newNoDocument(o,we.min()));const h=Oe().add(o),m=new Fh(we.min(),new Map,new lt(De),u,h);await JS(i,m),i.La=i.La.remove(o),i.Ba.delete(e),Pv(i)}else await au(i.localStore,e,!1).then(()=>uu(i,e,t)).catch(_a)}async function BM(n,e){const t=fe(n),i=e.batch.batchId;try{const s=await eM(t.localStore,e);Ov(t,i,null),Nv(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await as(t,s)}catch(s){await _a(s)}}async function FM(n,e,t){const i=fe(n);try{const s=await function(u,h){const m=fe(u);return m.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return m.mutationQueue.lookupMutationBatch(p,h).next(v=>(Ee(v!==null),y=v.keys(),m.mutationQueue.removeMutationBatch(p,v))).next(()=>m.mutationQueue.performConsistencyCheck(p)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(p,y,h)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>m.localDocuments.getDocuments(p,y))})}(i.localStore,e);Ov(i,e,t),Nv(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await as(i,s)}catch(s){await _a(s)}}async function zM(n,e){const t=fe(n);Ea(t.remoteStore)||ne("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const i=await function(u){const h=fe(u);return h.persistence.runTransaction("Get highest unacknowledged batch id","readonly",m=>h.mutationQueue.getHighestUnacknowledgedBatchId(m))}(t.localStore);if(i===-1)return void e.resolve();const s=t.Qa.get(i)||[];s.push(e),t.Qa.set(i,s)}catch(i){const s=Au(i,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function Nv(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Ov(n,e,t){const i=fe(n);let s=i.qa[i.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),i.qa[i.currentUser.toKey()]=s}}function uu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||ZS(n,i)})}function ZS(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(ou(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),Pv(n))}function Ey(n,e,t){for(const i of t)i instanceof QS?(n.ka.addReference(i.key,e),qM(n,i)):i instanceof WS?(ne("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||ZS(n,i.key)):ge()}function qM(n,e){const t=e.key,i=t.path.canonicalString();n.La.get(t)||n.Na.has(i)||(ne("SyncEngine","New document in limbo: "+t),n.Na.add(i),Pv(n))}function Pv(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new he(Be.fromString(e)),i=n.Ka.next();n.Ba.set(i,new OM(t)),n.La=n.La.insert(t,i),Lm(n.remoteStore,new zr(Fn(vu(t.path)),i,"TargetPurposeLimboResolution",Kn.oe))}}async function as(n,e,t){const i=fe(n),s=[],o=[],u=[];i.xa.isEmpty()||(i.xa.forEach((h,m)=>{u.push(i.Ua(m,e,t).then(p=>{var y;if((p||t)&&i.isPrimaryClient){const v=p?!p.fromCache:(y=t==null?void 0:t.targetChanges.get(m.targetId))===null||y===void 0?void 0:y.current;i.sharedClientState.updateQueryState(m.targetId,v?"current":"not-current")}if(p){s.push(p);const v=yv.zi(m.targetId,p);o.push(v)}}))}),await Promise.all(u),i.Ma.R_(s),await async function(m,p){const y=fe(m);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>F.forEach(p,w=>F.forEach(w.Wi,C=>y.persistence.referenceDelegate.addReference(v,w.targetId,C)).next(()=>F.forEach(w.Gi,C=>y.persistence.referenceDelegate.removeReference(v,w.targetId,C)))))}catch(v){if(!ya(v))throw v;ne("LocalStore","Failed to update sequence numbers: "+v)}for(const v of p){const w=v.targetId;if(!v.fromCache){const C=y.us.get(w),M=C.snapshotVersion,q=C.withLastLimboFreeSnapshotVersion(M);y.us=y.us.insert(w,q)}}}(i.localStore,o))}async function jM(n,e){const t=fe(n);if(!t.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const i=await xS(t.localStore,e);t.currentUser=e,function(o,u){o.Qa.forEach(h=>{h.forEach(m=>{m.reject(new Z($.CANCELLED,u))})}),o.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await as(t,i.Ts)}}function HM(n,e){const t=fe(n),i=t.Ba.get(e);if(i&&i.Fa)return Oe().add(i.key);{let s=Oe();const o=t.Oa.get(e);if(!o)return s;for(const u of o){const h=t.xa.get(u);s=s.unionWith(h.view.fa)}return s}}async function GM(n,e){const t=fe(n),i=await cm(t.localStore,e.query,!0),s=e.view.va(i);return t.isPrimaryClient&&Ey(t,e.targetId,s.ba),s}async function KM(n,e){const t=fe(n);return LS(t.localStore,e).then(i=>as(t,i))}async function $M(n,e,t,i){const s=fe(n),o=await function(h,m){const p=fe(h),y=fe(p.mutationQueue);return p.persistence.runTransaction("Lookup mutation documents","readonly",v=>y.On(v,m).next(w=>w?p.localDocuments.getDocuments(v,w):F.resolve(null)))}(s.localStore,e);o!==null?(t==="pending"?await bu(s.remoteStore):t==="acknowledged"||t==="rejected"?(Ov(s,e,i||null),Nv(s,e),function(h,m){fe(fe(h).mutationQueue).Ln(m)}(s.localStore,e)):ge(),await as(s,o)):ne("SyncEngine","Cannot apply mutation batch with id: "+e)}async function QM(n,e){const t=fe(n);if(Um(t),xv(t),e===!0&&t.$a!==!0){const i=t.sharedClientState.getAllActiveQueryTargets(),s=await dI(t,i.toArray());t.$a=!0,await yy(t.remoteStore,!0);for(const o of s)Lm(t.remoteStore,o)}else if(e===!1&&t.$a!==!1){const i=[];let s=Promise.resolve();t.Oa.forEach((o,u)=>{t.sharedClientState.isLocalQueryTarget(u)?i.push(u):s=s.then(()=>(uu(t,u),au(t.localStore,u,!0))),ou(t.remoteStore,u)}),await s,await dI(t,i),function(u){const h=fe(u);h.Ba.forEach((m,p)=>{ou(h.remoteStore,p)}),h.ka.wr(),h.Ba=new Map,h.La=new lt(he.comparator)}(t),t.$a=!1,await yy(t.remoteStore,!1)}}async function dI(n,e,t){const i=fe(n),s=[],o=[];for(const u of e){let h;const m=i.Oa.get(u);if(m&&m.length!==0){h=await su(i.localStore,Fn(m[0]));for(const p of m){const y=i.xa.get(p),v=await GM(i,y);v.snapshot&&o.push(v.snapshot)}}else{const p=await MS(i.localStore,u);h=await su(i.localStore,p),await Dv(i,e1(p),u,!1,h.resumeToken)}s.push(h)}return i.Ma.R_(o),s}function e1(n){return zR(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function WM(n){return function(t){return fe(fe(t).persistence).$i()}(fe(n).localStore)}async function YM(n,e,t,i){const s=fe(n);if(s.$a)return void ne("SyncEngine","Ignoring unexpected query state notification.");const o=s.Oa.get(e);if(o&&o.length>0)switch(t){case"current":case"not-current":{const u=await LS(s.localStore,jR(o[0])),h=Fh.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Pt.EMPTY_BYTE_STRING);await as(s,u,h);break}case"rejected":await au(s.localStore,e,!0),uu(s,e,i);break;default:ge()}}async function XM(n,e,t){const i=Um(n);if(i.$a){for(const s of e){if(i.Oa.has(s)&&i.sharedClientState.isActiveQueryTarget(s)){ne("SyncEngine","Adding an already active target "+s);continue}const o=await MS(i.localStore,s),u=await su(i.localStore,o);await Dv(i,e1(o),u.targetId,!1,u.resumeToken),Lm(i.remoteStore,u)}for(const s of t)i.Oa.has(s)&&await au(i.localStore,s,!1).then(()=>{ou(i.remoteStore,s),uu(i,s)}).catch(_a)}}function Um(n){const e=fe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=JS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UM.bind(null,e),e.Ma.R_=RM.bind(null,e.eventManager),e.Ma.Wa=SM.bind(null,e.eventManager),e}function xv(n){const e=fe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FM.bind(null,e),e}function JM(n,e,t){const i=fe(n);(async function(o,u,h){try{const m=await u.getMetadata();if(await function(C,M){const q=fe(C),j=Ut(M.createTime);return q.persistence.runTransaction("hasNewerBundle","readonly",ie=>q.jr.getBundleMetadata(ie,M.id)).then(ie=>!!ie&&ie.createTime.compareTo(j)>=0)}(o.localStore,m))return await u.close(),h._completeWith(function(C){return{taskState:"Success",documentsLoaded:C.totalDocuments,bytesLoaded:C.totalBytes,totalDocuments:C.totalDocuments,totalBytes:C.totalBytes}}(m)),Promise.resolve(new Set);h._updateProgress($S(m));const p=new DM(m,o.localStore,u.serializer);let y=await u.Ga();for(;y;){const w=await p.Pa(y);w&&h._updateProgress(w),y=await u.Ga()}const v=await p.complete();return await as(o,v.Ea,void 0),await function(C,M){const q=fe(C);return q.persistence.runTransaction("Save bundle","readwrite",j=>q.jr.saveBundleMetadata(j,M))}(o.localStore,m),h._completeWith(v.progress),Promise.resolve(v.Ia)}catch(m){return cr("SyncEngine",`Loading bundle failed with ${m}`),h._failWith(m),Promise.resolve(new Set)}})(i,e,t).then(s=>{i.sharedClientState.notifyBundleLoaded(s)})}class Ah{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qh(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return PS(this.persistence,new OS,e.initialUser,this.serializer)}ja(e){return new pv(Mm.ei,this.serializer)}za(e){return new BS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ah.provider={build:()=>new Ah};class ZM extends Ah{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Ee(this.persistence.referenceDelegate instanceof um);const i=this.persistence.referenceDelegate.garbageCollector;return new RS(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new pv(i=>um.ei(i,t),this.serializer)}}class t1 extends Ah{constructor(e,t,i){super(),this.Za=e,this.cacheSizeBytes=t,this.forceOwnership=i,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Za.initialize(this,e),await xv(this.Za.syncEngine),await bu(this.Za.remoteStore),await this.persistence.Si(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ha(e){return PS(this.persistence,new OS,e.initialUser,this.serializer)}Ja(e,t){const i=this.persistence.referenceDelegate.garbageCollector;return new RS(i,e.asyncQueue,t)}Ya(e,t){const i=new vk(t,this.persistence);return new yk(e.asyncQueue,i)}ja(e){const t=_v(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),i=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new gv(this.synchronizeTabs,t,e.clientId,i,e.asyncQueue,FS(),Hf(),this.serializer,this.sharedClientState,!!this.forceOwnership)}za(e){return new BS}}class e2 extends t1{constructor(e,t){super(e,t,!1),this.Za=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Za.syncEngine;this.sharedClientState instanceof k_&&(this.sharedClientState.syncEngine={io:$M.bind(null,t),so:YM.bind(null,t),oo:XM.bind(null,t),$i:WM.bind(null,t),ro:KM.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Si(async i=>{await QM(this.Za.syncEngine,i),this.gcScheduler&&(i&&!this.gcScheduler.started?this.gcScheduler.start():i||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(i&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():i||this.indexBackfillerScheduler.stop())})}za(e){const t=FS();if(!k_.p(t))throw new Z($.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const i=_v(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new k_(t,e.asyncQueue,i,e.clientId,e.initialUser)}}class Rh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>hI(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=jM.bind(null,this.syncEngine),await yy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new AM}()}createDatastore(e){const t=qh(e.databaseInfo.databaseId),i=function(o){return new lM(o)}(e.databaseInfo);return function(o,u,h,m){return new hM(o,u,h,m)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,s,o,u,h){return new fM(i,s,o,u,h)}(this.localStore,this.datastore,e.asyncQueue,t=>hI(this.syncEngine,t,0),function(){return sI.p()?new sI:new sM}())}createSyncEngine(e,t){return function(s,o,u,h,m,p,y){const v=new PM(s,o,u,h,m,p);return y&&(v.$a=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=fe(s);ne("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await wu(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Rh.provider={build:()=>new Rh};function fI(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const i={value:n.slice(t,t+e),done:!1};return t+=e,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Bm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Lt("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class t2{constructor(e,t){this.tu=e,this.serializer=t,this.metadata=new yn,this.buffer=new Uint8Array,this.nu=function(){return new TextDecoder("utf-8")}(),this.ru().then(i=>{i&&i.la()?this.metadata.resolve(i.ca.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(i==null?void 0:i.ca)}`))},i=>this.metadata.reject(i))}close(){return this.tu.cancel()}async getMetadata(){return this.metadata.promise}async Ga(){return await this.getMetadata(),this.ru()}async ru(){const e=await this.iu();if(e===null)return null;const t=this.nu.decode(e),i=Number(t);isNaN(i)&&this.su(`length string (${t}) is not valid number`);const s=await this.ou(i);return new CM(JSON.parse(s),e.length+i)}_u(){return this.buffer.findIndex(e=>e===123)}async iu(){for(;this._u()<0&&!await this.au(););if(this.buffer.length===0)return null;const e=this._u();e<0&&this.su("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ou(e){for(;this.buffer.length<e;)await this.au()&&this.su("Reached the end of bundle when more is expected.");const t=this.nu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}su(e){throw this.tu.cancel(),new Error(`Invalid bundle format: ${e}`)}async au(){const e=await this.tu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class n2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new Z($.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(s,o){const u=fe(s),h={documents:o.map(v=>bh(u.serializer,v))},m=await u.ko("BatchGetDocuments",u.serializer.databaseId,Be.emptyPath(),h,o.length),p=new Map;m.forEach(v=>{const w=yV(u.serializer,v);p.set(w.key.toString(),w)});const y=[];return o.forEach(v=>{const w=p.get(v.toString());Ee(!!w),y.push(w)}),y}(this.datastore,e);return t.forEach(i=>this.recordVersion(i)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Tu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,i)=>{const s=he.fromPath(i);this.mutations.push(new sv(s,this.precondition(s)))}),await async function(i,s){const o=fe(i),u={writes:s.map(h=>Ih(o.serializer,h))};await o.Oo("Commit",o.serializer.databaseId,Be.emptyPath(),u)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ge();t=we.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!t.isEqual(i))throw new Z($.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(we.min())?_t.exists(!1):_t.updateTime(t):_t.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(we.min()))throw new Z($.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return _t.updateTime(t)}return _t.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class i2{constructor(e,t,i,s,o){this.asyncQueue=e,this.datastore=t,this.options=i,this.updateFunction=s,this.deferred=o,this.uu=i.maxAttempts,this.r_=new Ev(this.asyncQueue,"transaction_retry")}cu(){this.uu-=1,this.lu()}lu(){this.r_.jo(async()=>{const e=new n2(this.datastore),t=this.hu(e);t&&t.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(s=>{this.Pu(s)}))}).catch(i=>{this.Pu(i)})})}hu(e){try{const t=this.updateFunction(e);return!Vh(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Pu(e){this.uu>0&&this.Tu(e)?(this.uu-=1,this.asyncQueue.enqueueAndForget(()=>(this.lu(),Promise.resolve()))):this.deferred.reject(e)}Tu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!nS(t)}return!1}}/**
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
 */class r2{constructor(e,t,i,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=ln.UNAUTHENTICATED,this.clientId=_R.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async u=>{ne("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(ne("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Au(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function M_(n,e){n.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await xS(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function mI(n,e){n.asyncQueue.verifyOperationInProgress();const t=await kv(n);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>aI(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>aI(e.remoteStore,s)),n._onlineComponents=e}async function kv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await M_(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;cr("Error using user provided cache. Falling back to memory cache: "+t),await M_(n,new Ah)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await M_(n,new ZM(void 0));return n._offlineComponents}async function Fm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await mI(n,n._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await mI(n,new Rh))),n._onlineComponents}function n1(n){return kv(n).then(e=>e.persistence)}function Vv(n){return kv(n).then(e=>e.localStore)}function i1(n){return Fm(n).then(e=>e.remoteStore)}function Mv(n){return Fm(n).then(e=>e.syncEngine)}function s2(n){return Fm(n).then(e=>e.datastore)}async function cu(n){const e=await Fm(n),t=e.eventManager;return t.onListen=xM.bind(null,e.syncEngine),t.onUnlisten=VM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=MM.bind(null,e.syncEngine),t}function a2(n){return n.asyncQueue.enqueue(async()=>{const e=await n1(n),t=await i1(n);return e.setNetworkEnabled(!0),function(s){const o=fe(s);return o.k_.delete(0),jh(o)}(t)})}function o2(n){return n.asyncQueue.enqueue(async()=>{const e=await n1(n),t=await i1(n);return e.setNetworkEnabled(!1),async function(s){const o=fe(s);o.k_.add(0),await wu(o),o.K_.set("Offline")}(t)})}function l2(n,e){const t=new yn;return n.asyncQueue.enqueueAndForget(async()=>async function(s,o,u){try{const h=await function(p,y){const v=fe(p);return v.persistence.runTransaction("read document","readonly",w=>v.localDocuments.getDocument(w,y))}(s,o);h.isFoundDocument()?u.resolve(h):h.isNoDocument()?u.resolve(null):u.reject(new Z($.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(h){const m=Au(h,`Failed to get document '${o} from cache`);u.reject(m)}}(await Vv(n),e,t)),t.promise}function r1(n,e,t={}){const i=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,h,m,p){const y=new Bm({next:w=>{y.eu(),u.enqueueAndForget(()=>Rv(o,v));const C=w.docs.has(h);!C&&w.fromCache?p.reject(new Z($.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&w.fromCache&&m&&m.source==="server"?p.reject(new Z($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(w)},error:w=>p.reject(w)}),v=new Cv(vu(h.path),y,{includeMetadataChanges:!0,ua:!0});return Av(o,v)}(await cu(n),n.asyncQueue,e,t,i)),i.promise}function u2(n,e){const t=new yn;return n.asyncQueue.enqueueAndForget(async()=>async function(s,o,u){try{const h=await cm(s,o,!0),m=new YS(o,h.ds),p=m.ga(h.documents),y=m.applyChanges(p,!1);u.resolve(y.snapshot)}catch(h){const m=Au(h,`Failed to execute query '${o} against cache`);u.reject(m)}}(await Vv(n),e,t)),t.promise}function s1(n,e,t={}){const i=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,h,m,p){const y=new Bm({next:w=>{y.eu(),u.enqueueAndForget(()=>Rv(o,v)),w.fromCache&&m.source==="server"?p.reject(new Z($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(w)},error:w=>p.reject(w)}),v=new Cv(h,y,{includeMetadataChanges:!0,ua:!0});return Av(o,v)}(await cu(n),n.asyncQueue,e,t,i)),i.promise}function c2(n,e){const t=new Bm(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,o){fe(s).X_.add(o),o.next()}(await cu(n),t)),()=>{t.eu(),n.asyncQueue.enqueueAndForget(async()=>function(s,o){fe(s).X_.delete(o)}(await cu(n),t))}}function h2(n,e,t,i){const s=function(u,h){let m;return m=typeof u=="string"?rS().encode(u):u,function(y,v){return new t2(y,v)}(function(y,v){if(y instanceof Uint8Array)return fI(y,v);if(y instanceof ArrayBuffer)return fI(new Uint8Array(y),v);if(y instanceof ReadableStream)return y.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(m),h)}(t,qh(e));n.asyncQueue.enqueueAndForget(async()=>{JM(await Mv(n),s,i)})}function d2(n,e){return n.asyncQueue.enqueue(async()=>function(i,s){const o=fe(i);return o.persistence.runTransaction("Get named query","readonly",u=>o.jr.getNamedQuery(u,s))}(await Vv(n),e))}/**
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
 */function a1(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const pI=new Map;/**
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
 */function Lv(n,e,t){if(!t)throw new Z($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function o1(n,e,t,i){if(e===!0&&i===!0)throw new Z($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function gI(n){if(!he.isDocumentKey(n))throw new Z($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _I(n){if(he.isDocumentKey(n))throw new Z($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function zm(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ge()}function Xe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Z($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zm(n);throw new Z($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function l1(n,e){if(e<=0)throw new Z($.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class yI{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Z($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}o1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=a1((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Z($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Z($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Z($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hh{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yI({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yI(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new ok;switch(i.type){case"firstParty":return new hk(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Z($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=pI.get(t);i&&(ne("ComponentProvider","Removing Datastore"),pI.delete(t),i.terminate())}(this),Promise.resolve()}}function u1(n,e,t,i={}){var s;const o=(n=Xe(n,Hh))._getSettings(),u=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&cr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),i.mockUserToken){let h,m;if(typeof i.mockUserToken=="string")h=i.mockUserToken,m=ln.MOCK_USER;else{h=$A(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const p=i.mockUserToken.sub||i.mockUserToken.user_id;if(!p)throw new Z($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ln(p)}n._authCredentials=new lk(new gR(h,m))}}/**
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
 */let zn=class c1{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new c1(this.firestore,e,this._query)}},wt=class h1{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ra(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new h1(this.firestore,e,this._key)}},ra=class d1 extends zn{constructor(e,t,i){super(e,t,vu(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new he(e))}withConverter(e){return new d1(this.firestore,e,this._path)}};function Uv(n,e,...t){if(n=ve(n),Lv("collection","path",e),n instanceof Hh){const i=Be.fromString(e,...t);return _I(i),new ra(n,null,i)}{if(!(n instanceof wt||n instanceof ra))throw new Z($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Be.fromString(e,...t));return _I(i),new ra(n.firestore,null,i)}}function f2(n,e){if(n=Xe(n,Hh),Lv("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new Z($.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new zn(n,null,function(i){return new is(Be.emptyPath(),i)}(e))}function Sh(n,e,...t){if(n=ve(n),arguments.length===1&&(e=_R.newId()),Lv("doc","path",e),n instanceof Hh){const i=Be.fromString(e,...t);return gI(i),new wt(n,null,new he(i))}{if(!(n instanceof wt||n instanceof ra))throw new Z($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Be.fromString(e,...t));return gI(i),new wt(n.firestore,n instanceof ra?n.converter:null,new he(i))}}function f1(n,e){return n=ve(n),e=ve(e),(n instanceof wt||n instanceof ra)&&(e instanceof wt||e instanceof ra)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function m1(n,e){return n=ve(n),e=ve(e),n instanceof zn&&e instanceof zn&&n.firestore===e.firestore&&Lh(n._query,e._query)&&n.converter===e.converter}/**
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
 */class vI{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Ev(this,"async_queue_retry"),this.fu=()=>{const i=Hf();i&&ne("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=Hf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Hf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new yn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ya(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const s=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(i);throw Lt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=Iv.createAndSchedule(this,e,t,i,o=>this.Su(o));return this.du.push(s),s}pu(){this.Au&&ge()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function Ty(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const o of i)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class m2{constructor(){this._progressObserver={},this._taskCompletionResolver=new yn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,i){this._progressObserver={next:e,error:t,complete:i}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const p2=-1;let Bt=class extends Hh{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new vI,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vI(e),this._firestoreClient=void 0,await e}}};function g2(n,e){const t=typeof n=="object"?n:Sm(),i=typeof n=="string"?n:"(default)",s=_u(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=HA("firestore");o&&u1(s,...o)}return s}function Cn(n){if(n._terminated)throw new Z($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||p1(n),n._firestoreClient}function p1(n){var e,t,i;const s=n._freezeSettings(),o=function(h,m,p,y){return new zk(h,m,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,a1(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new r2(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(h){const m=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(m),_online:m}}(n._componentsProvider))}function _2(n,e){cr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return g1(n,Rh.provider,{build:i=>new t1(i,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function y2(n){cr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();g1(n,Rh.provider,{build:t=>new e2(t,e.cacheSizeBytes)})}function g1(n,e,t){if((n=Xe(n,Bt))._firestoreClient||n._terminated)throw new Z($.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new Z($.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},p1(n)}function v2(n){if(n._initialized&&!n._terminated)throw new Z($.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new yn;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(i){if(!or.p())return Promise.resolve();const s=i+"main";await or.delete(s)}(_v(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function E2(n){return function(t){const i=new yn;return t.asyncQueue.enqueueAndForget(async()=>zM(await Mv(t),i)),i.promise}(Cn(n=Xe(n,Bt)))}function T2(n){return a2(Cn(n=Xe(n,Bt)))}function w2(n){return o2(Cn(n=Xe(n,Bt)))}function b2(n,e){const t=Cn(n=Xe(n,Bt)),i=new m2;return h2(t,n._databaseId,e,i),i}function I2(n,e){return d2(Cn(n=Xe(n,Bt)),e).then(t=>t?new zn(n,null,t.query):null)}/**
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
 */class dr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dr(Pt.fromBase64String(e))}catch(t){throw new Z($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new dr(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let ma=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Z($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let xo=class{constructor(e){this._methodName=e}};/**
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
 */class qm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const A2=/^__.*__$/;class R2{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,t,this.fieldTransforms):new Eu(e,this.data,t,this.fieldTransforms)}}class _1{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new ss(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function y1(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class jm{constructor(e,t,i,s,o,u){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new jm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:i,Nu:!1});return s.Lu(e),s}Bu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:i,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return mm(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(y1(this.Mu)&&A2.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class S2{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||qh(e)}$u(e,t,i,s=!1){return new jm({Mu:e,methodName:t,Ku:i,path:gt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ko(n){const e=n._freezeSettings(),t=qh(n._databaseId);return new S2(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Hm(n,e,t,i,s,o={}){const u=n.$u(o.merge||o.mergeFields?2:0,e,t,s);Kv("Data must be an object, but it was:",u,i);const h=T1(i,u);let m,p;if(o.merge)m=new $n(u.fieldMask),p=u.fieldTransforms;else if(o.mergeFields){const y=[];for(const v of o.mergeFields){const w=wy(e,v,t);if(!u.contains(w))throw new Z($.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);b1(y,w)||y.push(w)}m=new $n(y),p=u.fieldTransforms.filter(v=>m.covers(v.field))}else m=null,p=u.fieldTransforms;return new R2(new _n(h),m,p)}class Gh extends xo{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gh}}function v1(n,e,t){return new jm({Mu:3,Ku:e.settings.Ku,methodName:n._methodName,Nu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Fv extends xo{_toFieldTransform(e){return new Bh(e.path,new nu)}isEqual(e){return e instanceof Fv}}class zv extends xo{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=v1(this,e,!0),i=this.Uu.map(o=>Vo(o,t)),s=new bo(i);return new Bh(e.path,s)}isEqual(e){return e instanceof zv&&Yl(this.Uu,e.Uu)}}class qv extends xo{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=v1(this,e,!0),i=this.Uu.map(o=>Vo(o,t)),s=new Io(i);return new Bh(e.path,s)}isEqual(e){return e instanceof qv&&Yl(this.Uu,e.Uu)}}class jv extends xo{constructor(e,t){super(e),this.Wu=t}_toFieldTransform(e){const t=new iu(e.serializer,WR(e.serializer,this.Wu));return new Bh(e.path,t)}isEqual(e){return e instanceof jv&&this.Wu===e.Wu}}function Hv(n,e,t,i){const s=n.$u(1,e,t);Kv("Data must be an object, but it was:",s,i);const o=[],u=_n.empty();va(i,(m,p)=>{const y=$v(e,m,t);p=ve(p);const v=s.Bu(y);if(p instanceof Gh)o.push(y);else{const w=Vo(p,v);w!=null&&(o.push(y),u.set(y,w))}});const h=new $n(o);return new _1(u,h,s.fieldTransforms)}function Gv(n,e,t,i,s,o){const u=n.$u(1,e,t),h=[wy(e,i,t)],m=[s];if(o.length%2!=0)throw new Z($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)h.push(wy(e,o[w])),m.push(o[w+1]);const p=[],y=_n.empty();for(let w=h.length-1;w>=0;--w)if(!b1(p,h[w])){const C=h[w];let M=m[w];M=ve(M);const q=u.Bu(C);if(M instanceof Gh)p.push(C);else{const j=Vo(M,q);j!=null&&(p.push(C),y.set(C,j))}}const v=new $n(p);return new _1(y,v,u.fieldTransforms)}function E1(n,e,t,i=!1){return Vo(t,n.$u(i?4:3,e))}function Vo(n,e){if(w1(n=ve(n)))return Kv("Unsupported field value:",e,n),T1(n,e);if(n instanceof xo)return function(i,s){if(!y1(s.Mu))throw s.qu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,s){const o=[];let u=0;for(const h of i){let m=Vo(h,s.ku(u));m==null&&(m={nullValue:"NULL_VALUE"}),o.push(m),u++}return{arrayValue:{values:o}}}(n,e)}return function(i,s){if((i=ve(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return WR(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=yt.fromDate(i);return{timestampValue:ru(s.serializer,o)}}if(i instanceof yt){const o=new yt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ru(s.serializer,o)}}if(i instanceof qm)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof dr)return{bytesValue:oS(s.serializer,i._byteString)};if(i instanceof wt){const o=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(o))throw s.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:cv(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Bv)return function(u,h){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(m=>{if(typeof m!="number")throw h.qu("VectorValues must only contain numeric values.");return rv(h.serializer,m)})}}}}}}(i,s);throw s.qu(`Unsupported field value: ${zm(i)}`)}(n,e)}function T1(n,e){const t={};return DR(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):va(n,(i,s)=>{const o=Vo(s,e.Ou(i));o!=null&&(t[i]=o)}),{mapValue:{fields:t}}}function w1(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof yt||n instanceof qm||n instanceof dr||n instanceof wt||n instanceof xo||n instanceof Bv)}function Kv(n,e,t){if(!w1(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const i=zm(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function wy(n,e,t){if((e=ve(e))instanceof ma)return e._internalPath;if(typeof e=="string")return $v(n,e);throw mm("Field path arguments must be of type string or ",n,!1,void 0,t)}const C2=new RegExp("[~\\*/\\[\\]]");function $v(n,e,t){if(e.search(C2)>=0)throw mm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ma(...e.split("."))._internalPath}catch{throw mm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function mm(n,e,t,i,s){const o=i&&!i.isEmpty(),u=s!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let m="";return(o||u)&&(m+=" (found",o&&(m+=` in field ${i}`),u&&(m+=` in document ${s}`),m+=")"),new Z($.INVALID_ARGUMENT,h+n+m)}function b1(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ch{constructor(e,t,i,s,o){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new D2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class D2 extends Ch{data(){return super.data()}}function Gm(n,e){return typeof e=="string"?$v(n,e):e instanceof ma?e._internalPath:e._delegate._internalPath}/**
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
 */function I1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Z($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qv{}class Kh extends Qv{}function Br(n,e,...t){let i=[];e instanceof Qv&&i.push(e),i=i.concat(t),function(o){const u=o.filter(m=>m instanceof Wv).length,h=o.filter(m=>m instanceof Km).length;if(u>1||u>0&&h>0)throw new Z($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)n=s._apply(n);return n}class Km extends Kh{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Km(e,t,i)}_apply(e){const t=this._parse(e);return S1(e._query,t),new zn(e.firestore,e.converter,uy(e._query,t))}_parse(e){const t=ko(e.firestore);return function(o,u,h,m,p,y,v){let w;if(p.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new Z($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){TI(v,y);const C=[];for(const M of v)C.push(EI(m,o,M));w={arrayValue:{values:C}}}else w=EI(m,o,v)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||TI(v,y),w=E1(h,u,v,y==="in"||y==="not-in");return Fe.create(p,y,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function A1(n,e,t){const i=e,s=Gm("where",n);return Km._create(s,i,t)}class Wv extends Qv{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Wv(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Ze.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,o){let u=s;const h=o.getFlattenedFilters();for(const m of h)S1(u,m),u=uy(u,m)}(e._query,t),new zn(e.firestore,e.converter,uy(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yv extends Kh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Yv(e,t)}_apply(e){const t=function(s,o,u){if(s.startAt!==null)throw new Z($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Z($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wh(o,u)}(e._query,this._field,this._direction);return new zn(e.firestore,e.converter,function(s,o){const u=s.explicitOrderBy.concat([o]);return new is(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function N2(n,e="asc"){const t=e,i=Gm("orderBy",n);return Yv._create(i,t)}class $m extends Kh{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new $m(e,t,i)}_apply(e){return new zn(e.firestore,e.converter,sm(e._query,this._limit,this._limitType))}}function O2(n){return l1("limit",n),$m._create("limit",n,"F")}function P2(n){return l1("limitToLast",n),$m._create("limitToLast",n,"L")}class Qm extends Kh{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new Qm(e,t,i)}_apply(e){const t=R1(e,this.type,this._docOrFields,this._inclusive);return new zn(e.firestore,e.converter,function(s,o){return new is(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,o,s.endAt)}(e._query,t))}}function x2(...n){return Qm._create("startAt",n,!0)}function k2(...n){return Qm._create("startAfter",n,!1)}class Wm extends Kh{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new Wm(e,t,i)}_apply(e){const t=R1(e,this.type,this._docOrFields,this._inclusive);return new zn(e.firestore,e.converter,function(s,o){return new is(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,o)}(e._query,t))}}function V2(...n){return Wm._create("endBefore",n,!1)}function M2(...n){return Wm._create("endAt",n,!0)}function R1(n,e,t,i){if(t[0]=ve(t[0]),t[0]instanceof Ch)return function(o,u,h,m,p){if(!m)throw new Z($.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${h}().`);const y=[];for(const v of jl(o))if(v.field.isKeyField())y.push(To(u,m.key));else{const w=m.data.field(v.field);if(Dm(w))throw new Z($.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const C=v.field.canonicalString();throw new Z($.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${C}' (used as the orderBy) does not exist.`)}y.push(w)}return new da(y,p)}(n._query,n.firestore._databaseId,e,t[0]._document,i);{const s=ko(n.firestore);return function(u,h,m,p,y,v){const w=u.explicitOrderBy;if(y.length>w.length)throw new Z($.INVALID_ARGUMENT,`Too many arguments provided to ${p}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const C=[];for(let M=0;M<y.length;M++){const q=y[M];if(w[M].field.isKeyField()){if(typeof q!="string")throw new Z($.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${p}(), but got a ${typeof q}`);if(!nv(u)&&q.indexOf("/")!==-1)throw new Z($.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${p}() must be a plain document ID, but '${q}' contains a slash.`);const j=u.path.child(Be.fromString(q));if(!he.isDocumentKey(j))throw new Z($.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${p}() must result in a valid document path, but '${j}' is not because it contains an odd number of segments.`);const ie=new he(j);C.push(To(h,ie))}else{const j=E1(m,p,q);C.push(j)}}return new da(C,v)}(n._query,n.firestore._databaseId,s,e,t,i)}}function EI(n,e,t){if(typeof(t=ve(t))=="string"){if(t==="")throw new Z($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nv(e)&&t.indexOf("/")!==-1)throw new Z($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Be.fromString(t));if(!he.isDocumentKey(i))throw new Z($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return To(n,new he(i))}if(t instanceof wt)return To(n,t._key);throw new Z($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zm(t)}.`)}function TI(n,e){if(!Array.isArray(n)||n.length===0)throw new Z($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function S1(n,e){const t=function(s,o){for(const u of s)for(const h of u.getFlattenedFilters())if(o.indexOf(h.op)>=0)return h.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Z($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Xv{convertValue(e,t="none"){switch(ca(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return va(e,(s,o)=>{i[s]=this.convertValue(o,t)}),i}convertVectorValue(e){var t,i,s;const o=(s=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(u=>pt(u.doubleValue));return new Bv(o)}convertGeoPoint(e){return new qm(pt(e.latitude),pt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Nm(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(vh(e));default:return null}}convertTimestamp(e){const t=Xr(e);return new yt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Be.fromString(e);Ee(yS(i));const s=new ua(i.get(1),i.get(3)),o=new he(i.popFirst(5));return s.isEqual(t)||Lt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function Ym(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class L2 extends Xv{constructor(e){super(),this.firestore=e}convertBytes(e){return new dr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,t)}}/**
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
 */class fo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Zr=class extends Ch{constructor(e,t,i,s,o,u){super(e,t,i,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Gm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}},rh=class extends Zr{data(e={}){return super.data(e)}},pa=class{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new fo(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new rh(this._firestore,this._userDataWriter,i.key,i,new fo(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Z($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(h=>{const m=new rh(s._firestore,s._userDataWriter,h.doc.key,h.doc,new fo(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:m,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const m=new rh(s._firestore,s._userDataWriter,h.doc.key,h.doc,new fo(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let p=-1,y=-1;return h.type!==0&&(p=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),y=u.indexOf(h.doc.key)),{type:U2(h.type),doc:m,oldIndex:p,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function U2(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}function C1(n,e){return n instanceof Zr&&e instanceof Zr?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof pa&&e instanceof pa&&n._firestore===e._firestore&&m1(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function B2(n){n=Xe(n,wt);const e=Xe(n.firestore,Bt);return r1(Cn(e),n._key).then(t=>Jv(e,n,t))}class Mo extends Xv{constructor(e){super(),this.firestore=e}convertBytes(e){return new dr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,t)}}function F2(n){n=Xe(n,wt);const e=Xe(n.firestore,Bt),t=Cn(e),i=new Mo(e);return l2(t,n._key).then(s=>new Zr(e,i,n._key,s,new fo(s!==null&&s.hasLocalMutations,!0),n.converter))}function z2(n){n=Xe(n,wt);const e=Xe(n.firestore,Bt);return r1(Cn(e),n._key,{source:"server"}).then(t=>Jv(e,n,t))}function D1(n){n=Xe(n,zn);const e=Xe(n.firestore,Bt),t=Cn(e),i=new Mo(e);return I1(n._query),s1(t,n._query).then(s=>new pa(e,i,n,s))}function q2(n){n=Xe(n,zn);const e=Xe(n.firestore,Bt),t=Cn(e),i=new Mo(e);return u2(t,n._query).then(s=>new pa(e,i,n,s))}function j2(n){n=Xe(n,zn);const e=Xe(n.firestore,Bt),t=Cn(e),i=new Mo(e);return s1(t,n._query,{source:"server"}).then(s=>new pa(e,i,n,s))}function wI(n,e,t){n=Xe(n,wt);const i=Xe(n.firestore,Bt),s=Ym(n.converter,e,t);return $h(i,[Hm(ko(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,_t.none())])}function by(n,e,t,...i){n=Xe(n,wt);const s=Xe(n.firestore,Bt),o=ko(s);let u;return u=typeof(e=ve(e))=="string"||e instanceof ma?Gv(o,"updateDoc",n._key,e,t,i):Hv(o,"updateDoc",n._key,e),$h(s,[u.toMutation(n._key,_t.exists(!0))])}function H2(n){return $h(Xe(n.firestore,Bt),[new Tu(n._key,_t.none())])}function G2(n,e){const t=Xe(n.firestore,Bt),i=Sh(n),s=Ym(n.converter,e);return $h(t,[Hm(ko(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,_t.exists(!1))]).then(()=>i)}function N1(n,...e){var t,i,s;n=ve(n);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Ty(e[u])||(o=e[u],u++);const h={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Ty(e[u])){const v=e[u];e[u]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[u+1]=(i=v.error)===null||i===void 0?void 0:i.bind(v),e[u+2]=(s=v.complete)===null||s===void 0?void 0:s.bind(v)}let m,p,y;if(n instanceof wt)p=Xe(n.firestore,Bt),y=vu(n._key.path),m={next:v=>{e[u]&&e[u](Jv(p,n,v))},error:e[u+1],complete:e[u+2]};else{const v=Xe(n,zn);p=Xe(v.firestore,Bt),y=v._query;const w=new Mo(p);m={next:C=>{e[u]&&e[u](new pa(p,w,v,C))},error:e[u+1],complete:e[u+2]},I1(n._query)}return function(w,C,M,q){const j=new Bm(q),ie=new Cv(C,j,M);return w.asyncQueue.enqueueAndForget(async()=>Av(await cu(w),ie)),()=>{j.eu(),w.asyncQueue.enqueueAndForget(async()=>Rv(await cu(w),ie))}}(Cn(p),y,h,m)}function K2(n,e){return c2(Cn(n=Xe(n,Bt)),Ty(e)?e:{next:e})}function $h(n,e){return function(i,s){const o=new yn;return i.asyncQueue.enqueueAndForget(async()=>LM(await Mv(i),s,o)),o.promise}(Cn(n),e)}function Jv(n,e,t){const i=t.docs.get(e._key),s=new Mo(n);return new Zr(n,s,e._key,i,new fo(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const $2={maxAttempts:5};/**
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
 */let Q2=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ko(e)}set(e,t,i){this._verifyNotCommitted();const s=ea(e,this._firestore),o=Ym(s.converter,t,i),u=Hm(this._dataReader,"WriteBatch.set",s._key,o,s.converter!==null,i);return this._mutations.push(u.toMutation(s._key,_t.none())),this}update(e,t,i,...s){this._verifyNotCommitted();const o=ea(e,this._firestore);let u;return u=typeof(t=ve(t))=="string"||t instanceof ma?Gv(this._dataReader,"WriteBatch.update",o._key,t,i,s):Hv(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(u.toMutation(o._key,_t.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ea(e,this._firestore);return this._mutations=this._mutations.concat(new Tu(t._key,_t.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Z($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function ea(n,e){if((n=ve(n)).firestore!==e)throw new Z($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */let W2=class extends class{constructor(t,i){this._firestore=t,this._transaction=i,this._dataReader=ko(t)}get(t){const i=ea(t,this._firestore),s=new L2(this._firestore);return this._transaction.lookup([i._key]).then(o=>{if(!o||o.length!==1)return ge();const u=o[0];if(u.isFoundDocument())return new Ch(this._firestore,s,u.key,u,i.converter);if(u.isNoDocument())return new Ch(this._firestore,s,i._key,null,i.converter);throw ge()})}set(t,i,s){const o=ea(t,this._firestore),u=Ym(o.converter,i,s),h=Hm(this._dataReader,"Transaction.set",o._key,u,o.converter!==null,s);return this._transaction.set(o._key,h),this}update(t,i,s,...o){const u=ea(t,this._firestore);let h;return h=typeof(i=ve(i))=="string"||i instanceof ma?Gv(this._dataReader,"Transaction.update",u._key,i,s,o):Hv(this._dataReader,"Transaction.update",u._key,i),this._transaction.update(u._key,h),this}delete(t){const i=ea(t,this._firestore);return this._transaction.delete(i._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ea(e,this._firestore),i=new Mo(this._firestore);return super.get(e).then(s=>new Zr(this._firestore,i,t._key,s._document,new fo(!1,!1),t.converter))}};function Y2(n,e,t){n=Xe(n,Bt);const i=Object.assign(Object.assign({},$2),t);return function(o){if(o.maxAttempts<1)throw new Z($.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(o,u,h){const m=new yn;return o.asyncQueue.enqueueAndForget(async()=>{const p=await s2(o);new i2(o.asyncQueue,p,h,u,m).cu()}),m.promise}(Cn(n),s=>e(new W2(n,s)),i)}/**
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
 */function X2(){return new Gh("deleteField")}function J2(){return new Fv("serverTimestamp")}function Z2(...n){return new zv("arrayUnion",n)}function eL(...n){return new qv("arrayRemove",n)}function tL(n){return new jv("increment",n)}(function(e,t=!0){(function(s){yu=s})(ns),Yr(new Ri("firestore",(i,{instanceIdentifier:s,options:o})=>{const u=i.getProvider("app").getImmediate(),h=new Bt(new uk(i.getProvider("auth-internal")),new fk(i.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new Z($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ua(p.options.projectId,y)}(u,s),u);return o=Object.assign({useFetchStreams:t},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),ri(fb,"4.7.5",e),ri(fb,"4.7.5","esm2017")})();/**
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
 */class nL{constructor(e,t){this._delegate=e,this.firebase=t,mh(e,new Ri("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Yy(this._delegate)))}_getService(e,t=aa){var i;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((i=s.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=aa){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){mh(this._delegate,e)}_addOrOverwriteComponent(e){iR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const iL={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},bI=new Po("app-compat","Firebase",iL);/**
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
 */function rL(n){const e={},t={__esModule:!0,initializeApp:o,app:s,registerVersion:ri,setLogLevel:oR,onLog:aR,apps:null,SDK_VERSION:ns,INTERNAL:{registerComponent:h,removeApp:i,useAsService:m,modularAPIs:rk}};t.default=t,Object.defineProperty(t,"apps",{get:u});function i(p){delete e[p]}function s(p){if(p=p||aa,!rb(e,p))throw bI.create("no-app",{appName:p});return e[p]}s.App=n;function o(p,y={}){const v=Wy(p,y);if(rb(e,v.name))return e[v.name];const w=new n(v,t);return e[v.name]=w,w}function u(){return Object.keys(e).map(p=>e[p])}function h(p){const y=p.name,v=y.replace("-compat","");if(Yr(p)&&p.type==="PUBLIC"){const w=(C=s())=>{if(typeof C[v]!="function")throw bI.create("invalid-app-argument",{appName:y});return C[v]()};p.serviceProps!==void 0&&em(w,p.serviceProps),t[v]=w,n.prototype[v]=function(...C){return this._getService.bind(this,y).apply(this,p.multipleInstances?C:[])}}return p.type==="PUBLIC"?t[v]:null}function m(p,y){return y==="serverAuth"?null:y}return t}/**
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
 */function O1(){const n=rL(nL);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:O1,extendNamespace:e,createSubscribe:JA,ErrorFactory:Po,deepExtend:em});function e(t){em(n,t)}return n}const sL=O1();/**
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
 */const II=new Rm("@firebase/app-compat"),aL="@firebase/app-compat",oL="0.2.47";/**
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
 */function lL(n){ri(aL,oL,n)}/**
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
 */try{const n=qA();if(n.firebase!==void 0){II.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&II.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Lo=sL;lL();var uL="firebase",cL="11.1.0";/**
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
 */Lo.registerVersion(uL,cL,"app-compat");function Zv(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}const zc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},kl={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function hL(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function P1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dL=hL,fL=P1,x1=new Po("auth","Firebase",P1());/**
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
 */const pm=new Rm("@firebase/auth");function mL(n,...e){pm.logLevel<=Me.WARN&&pm.warn(`Auth (${ns}): ${n}`,...e)}function Gf(n,...e){pm.logLevel<=Me.ERROR&&pm.error(`Auth (${ns}): ${n}`,...e)}/**
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
 */function cn(n,...e){throw tE(n,...e)}function Xt(n,...e){return tE(n,...e)}function eE(n,e,t){const i=Object.assign(Object.assign({},fL()),{[e]:t});return new Po("auth","Firebase",i).create(e,{appName:n.name})}function un(n){return eE(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ru(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&cn(n,"argument-error"),eE(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tE(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return x1.create(n,...e)}function se(n,e,...t){if(!n)throw tE(e,...t)}function ar(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Gf(e),new Error(e)}function Vi(n,e){n||ar(e)}/**
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
 */function Dh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function nE(){return AI()==="http:"||AI()==="https:"}function AI(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function pL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nE()||WA()||"connection"in navigator)?navigator.onLine:!0}function gL(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Qh{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vi(t>e,"Short delay should be less than long delay!"),this.isMobile=UP()||Ky()}get(){return pL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function iE(n,e){Vi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class k1{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _L={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const yL=new Qh(3e4,6e4);function xt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function kt(n,e,t,i,s={}){return V1(n,s,async()=>{let o={},u={};i&&(e==="GET"?u=i:o={body:JSON.stringify(i)});const h=gu(Object.assign({key:n.config.apiKey},u)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const p=Object.assign({method:e,headers:m},o);return FP()||(p.referrerPolicy="no-referrer"),k1.fetch()(M1(n,n.config.apiHost,t,h),p)})}async function V1(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},_L),e);try{const s=new EL(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await o.json();if("needConfirmation"in u)throw Jc(n,"account-exists-with-different-credential",u);if(o.ok&&!("errorMessage"in u))return u;{const h=o.ok?u.errorMessage:u.error.message,[m,p]=h.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jc(n,"credential-already-in-use",u);if(m==="EMAIL_EXISTS")throw Jc(n,"email-already-in-use",u);if(m==="USER_DISABLED")throw Jc(n,"user-disabled",u);const y=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw eE(n,y,p);cn(n,y)}}catch(s){if(s instanceof Rn)throw s;cn(n,"network-request-failed",{message:String(s)})}}async function os(n,e,t,i,s={}){const o=await kt(n,e,t,i,s);return"mfaPendingCredential"in o&&cn(n,"multi-factor-auth-required",{_serverResponse:o}),o}function M1(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?iE(n.config,s):`${n.config.apiScheme}://${s}`}function vL(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EL{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Xt(this.auth,"network-request-failed")),yL.get())})}}function Jc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Xt(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */function RI(n){return n!==void 0&&n.getResponse!==void 0}function SI(n){return n!==void 0&&n.enterprise!==void 0}class L1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return vL(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function TL(n){return(await kt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function U1(n,e){return kt(n,"GET","/v2/recaptchaConfig",xt(n,e))}/**
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
 */async function wL(n,e){return kt(n,"POST","/v1/accounts:delete",e)}async function bL(n,e){return kt(n,"POST","/v1/accounts:update",e)}async function B1(n,e){return kt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function sh(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IL(n,e=!1){const t=ve(n),i=await t.getIdToken(e),s=Xm(i);se(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,u=o==null?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:sh(L_(s.auth_time)),issuedAtTime:sh(L_(s.iat)),expirationTime:sh(L_(s.exp)),signInProvider:u||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function L_(n){return Number(n)*1e3}function Xm(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Gf("JWT malformed, contained fewer than 3 sections"),null;try{const s=zA(t);return s?JSON.parse(s):(Gf("Failed to decode base64 JWT payload"),null)}catch(s){return Gf("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function CI(n){const e=Xm(n);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function es(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Rn&&AL(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function AL({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class RL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Iy{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=sh(this.lastLoginAt),this.creationTime=sh(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nh(n){var e;const t=n.auth,i=await n.getIdToken(),s=await es(n,B1(t,{idToken:i}));se(s==null?void 0:s.users.length,t,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const u=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?F1(o.providerUserInfo):[],h=CL(n.providerData,u),m=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!(h!=null&&h.length),y=m?p:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Iy(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,v)}async function SL(n){const e=ve(n);await Nh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CL(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function F1(n){return n.map(e=>{var{providerId:t}=e,i=Zv(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function DL(n,e){const t=await V1(n,{},async()=>{const i=gu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,u=M1(n,s,"/v1/token",`key=${o}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",k1.fetch()(u,{method:"POST",headers:h,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function NL(n,e){return kt(n,"POST","/v2/accounts:revokeToken",xt(n,e))}/**
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
 */class Gl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):CI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){se(e.length!==0,"internal-error");const t=CI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:o}=await DL(e,t);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:o}=t,u=new Gl;return i&&(se(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),s&&(se(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),o&&(se(typeof o=="number","internal-error",{appName:e}),u.expirationTime=o),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gl,this.toJSON())}_performRefresh(){return ar("not implemented")}}/**
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
 */function Ys(n,e){se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qr{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,o=Zv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Iy(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await es(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return IL(this,e)}reload(){return SL(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Nh(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(un(this.auth));const e=await this.getIdToken();return await es(this,wL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,o,u,h,m,p,y;const v=(i=t.displayName)!==null&&i!==void 0?i:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,C=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,M=(u=t.photoURL)!==null&&u!==void 0?u:void 0,q=(h=t.tenantId)!==null&&h!==void 0?h:void 0,j=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,ie=(p=t.createdAt)!==null&&p!==void 0?p:void 0,ae=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:J,emailVerified:oe,isAnonymous:re,providerData:me,stsTokenManager:O}=t;se(J&&O,e,"internal-error");const R=Gl.fromJSON(this.name,O);se(typeof J=="string",e,"internal-error"),Ys(v,e.name),Ys(w,e.name),se(typeof oe=="boolean",e,"internal-error"),se(typeof re=="boolean",e,"internal-error"),Ys(C,e.name),Ys(M,e.name),Ys(q,e.name),Ys(j,e.name),Ys(ie,e.name),Ys(ae,e.name);const A=new qr({uid:J,auth:e,email:w,emailVerified:oe,displayName:v,isAnonymous:re,photoURL:M,phoneNumber:C,tenantId:q,stsTokenManager:R,createdAt:ie,lastLoginAt:ae});return me&&Array.isArray(me)&&(A.providerData=me.map(N=>Object.assign({},N))),j&&(A._redirectEventId=j),A}static async _fromIdTokenResponse(e,t,i=!1){const s=new Gl;s.updateFromServerResponse(t);const o=new qr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Nh(o),o}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];se(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?F1(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),h=new Gl;h.updateFromIdToken(i);const m=new qr({uid:s.localId,auth:e,stsTokenManager:h,isAnonymous:u}),p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Iy(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(m,p),m}}/**
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
 */const DI=new Map;function ii(n){Vi(n instanceof Function,"Expected a class definition");let e=DI.get(n);return e?(Vi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,DI.set(n,e),e)}/**
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
 */class z1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}z1.type="NONE";const hu=z1;/**
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
 */function yo(n,e,t){return`firebase:${n}:${e}:${t}`}class Kl{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=yo(this.userKey,s.apiKey,o),this.fullPersistenceKey=yo("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Kl(ii(hu),e,i);const s=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let o=s[0]||ii(hu);const u=yo(i,e.config.apiKey,e.name);let h=null;for(const p of t)try{const y=await p._get(u);if(y){const v=qr._fromJSON(e,y);p!==o&&(h=v),o=p;break}}catch{}const m=s.filter(p=>p._shouldAllowMigration);return!o._shouldAllowMigration||!m.length?new Kl(o,e,i):(o=m[0],h&&await o._set(u,h.toJSON()),await Promise.all(t.map(async p=>{if(p!==o)try{await p._remove(u)}catch{}})),new Kl(o,e,i))}}/**
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
 */function NI(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(G1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(q1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(K1(e))return"Blackberry";if($1(e))return"Webos";if(j1(e))return"Safari";if((e.includes("chrome/")||H1(e))&&!e.includes("edge/"))return"Chrome";if(Wh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function q1(n=bt()){return/firefox\//i.test(n)}function j1(n=bt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H1(n=bt()){return/crios\//i.test(n)}function G1(n=bt()){return/iemobile/i.test(n)}function Wh(n=bt()){return/android/i.test(n)}function K1(n=bt()){return/blackberry/i.test(n)}function $1(n=bt()){return/webos/i.test(n)}function Yh(n=bt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function OL(n=bt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function PL(n=bt()){var e;return Yh(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xL(){return YA()&&document.documentMode===10}function Q1(n=bt()){return Yh(n)||Wh(n)||$1(n)||K1(n)||/windows phone/i.test(n)||G1(n)}/**
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
 */function W1(n,e=[]){let t;switch(n){case"Browser":t=NI(bt());break;case"Worker":t=`${NI(bt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ns}/${i}`}/**
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
 */class kL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=o=>new Promise((u,h)=>{try{const m=e(o);u(m)}catch(m){h(m)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function VL(n,e={}){return kt(n,"GET","/v2/passwordPolicy",xt(n,e))}/**
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
 */const ML=6;class LL{constructor(e){var t,i,s,o;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:ML,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,o,u,h;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(i=m.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(s=m.containsLowercaseLetter)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(o=m.containsUppercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(u=m.containsNumericCharacter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(h=m.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),m}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class UL{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new OI(this),this.idTokenSubscription=new OI(this),this.beforeStateQueue=new kL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=x1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ii(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Kl.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await B1(this,{idToken:e}),i=await qr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Nt(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===h)&&(m!=null&&m.user)&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Nh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nt(this.app))return Promise.reject(un(this));const t=e?ve(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nt(this.app)?Promise.reject(un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ii(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VL(this),t=new LL(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Po("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await NL(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ii(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await Kl.create(this,[ii(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let u=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(h,this,"internal-error"),h.then(()=>{u||o(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,s);return()=>{u=!0,m()}}else{const m=e.addObserver(t);return()=>{u=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=W1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&mL(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function It(n){return ve(n)}class OI{constructor(e){this.auth=e,this.observer=null,this.addObserver=JA(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BL(n){Xh=n}function rE(n){return Xh.loadJS(n)}function FL(){return Xh.recaptchaV2Script}function zL(){return Xh.recaptchaEnterpriseScript}function qL(){return Xh.gapiScript}function Y1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const jL=500,HL=6e4,Pf=1e12;class GL{constructor(e){this.auth=e,this.counter=Pf,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new QL(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||Pf;(t=this._widgets.get(i))===null||t===void 0||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||Pf;return((t=this._widgets.get(i))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const i=e||Pf;return(t=this._widgets.get(i))===null||t===void 0||t.execute(),""}}class KL{constructor(){this.enterprise=new $L}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class $L{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class QL{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;se(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=WL(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},HL)},jL))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function WL(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const YL="recaptcha-enterprise",ah="NO_RECAPTCHA";class X1{constructor(e){this.type=YL,this.auth=It(e)}async verify(e="verify",t=!1){async function i(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(u,h)=>{U1(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const p=new L1(m);return o.tenantId==null?o._agentRecaptchaConfig=p:o._tenantRecaptchaConfigs[o.tenantId]=p,u(p.siteKey)}}).catch(m=>{h(m)})})}function s(o,u,h){const m=window.grecaptcha;SI(m)?m.enterprise.ready(()=>{m.enterprise.execute(o,{action:e}).then(p=>{u(p)}).catch(()=>{u(ah)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new KL().execute("siteKey",{action:"verify"}):new Promise((o,u)=>{i(this.auth).then(h=>{if(!t&&SI(window.grecaptcha))s(h,o,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let m=zL();m.length!==0&&(m+=h),rE(m).then(()=>{s(h,o,u)}).catch(p=>{u(p)})}}).catch(h=>{u(h)})})}}async function qc(n,e,t,i=!1,s=!1){const o=new X1(n);let u;if(s)u=ah;else try{u=await o.verify(t)}catch{u=await o.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const m=h.phoneEnrollmentInfo.phoneNumber,p=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const m=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return i?Object.assign(h,{captchaResp:u}):Object.assign(h,{captchaResponse:u}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function sa(n,e,t,i,s){var o,u;if(s==="EMAIL_PASSWORD_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await qc(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await qc(n,e,t,t==="getOobCode");return i(n,m)}else return Promise.reject(h)});else if(s==="PHONE_PROVIDER")if(!((u=n._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("PHONE_PROVIDER")){const h=await qc(n,e,t);return i(n,h).catch(async m=>{var p;if(((p=n._getRecaptchaConfig())===null||p===void 0?void 0:p.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(m.code==="auth/missing-recaptcha-token"||m.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const y=await qc(n,e,t,!1,!0);return i(n,y)}return Promise.reject(m)})}else{const h=await qc(n,e,t,!1,!0);return i(n,h)}else return Promise.reject(s+" provider is not supported.")}async function XL(n){const e=It(n),t=await U1(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new L1(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new X1(e).verify()}/**
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
 */function JL(n,e){const t=_u(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(Yl(o,e??{}))return s;cn(s,"already-initialized")}return t.initialize({options:e})}function ZL(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ii);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function J1(n,e,t){const i=It(n);se(i._canInitEmulator,i,"emulator-config-failed"),se(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),o=Z1(e),{host:u,port:h}=eU(e),m=h===null?"":`:${h}`;i.config.emulator={url:`${o}//${u}${m}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:h,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||tU()}function Z1(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function eU(n){const e=Z1(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:PI(i.substr(o.length+1))}}else{const[o,u]=i.split(":");return{host:o,port:PI(u)}}}function PI(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function tU(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Su{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ar("not implemented")}_getIdTokenResponse(e){return ar("not implemented")}_linkToIdToken(e,t){return ar("not implemented")}_getReauthenticationResolver(e){return ar("not implemented")}}/**
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
 */async function eC(n,e){return kt(n,"POST","/v1/accounts:resetPassword",xt(n,e))}async function nU(n,e){return kt(n,"POST","/v1/accounts:update",e)}async function iU(n,e){return kt(n,"POST","/v1/accounts:signUp",e)}async function rU(n,e){return kt(n,"POST","/v1/accounts:update",xt(n,e))}/**
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
 */async function sU(n,e){return os(n,"POST","/v1/accounts:signInWithPassword",xt(n,e))}async function Jm(n,e){return kt(n,"POST","/v1/accounts:sendOobCode",xt(n,e))}async function aU(n,e){return Jm(n,e)}async function oU(n,e){return Jm(n,e)}async function lU(n,e){return Jm(n,e)}async function uU(n,e){return Jm(n,e)}/**
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
 */async function cU(n,e){return os(n,"POST","/v1/accounts:signInWithEmailLink",xt(n,e))}async function hU(n,e){return os(n,"POST","/v1/accounts:signInWithEmailLink",xt(n,e))}/**
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
 */class Oh extends Su{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Oh(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Oh(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sa(e,t,"signInWithPassword",sU,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return cU(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sa(e,i,"signUpPassword",iU,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return hU(e,{idToken:t,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Kr(n,e){return os(n,"POST","/v1/accounts:signInWithIdp",xt(n,e))}/**
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
 */const dU="http://localhost";class fr extends Su{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,o=Zv(t,["providerId","signInMethod"]);if(!i||!s)return null;const u=new fr(i,s);return u.idToken=o.idToken||void 0,u.accessToken=o.accessToken||void 0,u.secret=o.secret,u.nonce=o.nonce,u.pendingToken=o.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Kr(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Kr(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kr(e,t)}buildRequest(){const e={requestUri:dU,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=gu(t)}return e}}/**
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
 */async function xI(n,e){return kt(n,"POST","/v1/accounts:sendVerificationCode",xt(n,e))}async function fU(n,e){return os(n,"POST","/v1/accounts:signInWithPhoneNumber",xt(n,e))}async function mU(n,e){const t=await os(n,"POST","/v1/accounts:signInWithPhoneNumber",xt(n,e));if(t.temporaryProof)throw Jc(n,"account-exists-with-different-credential",t);return t}const pU={USER_NOT_FOUND:"user-not-found"};async function gU(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return os(n,"POST","/v1/accounts:signInWithPhoneNumber",xt(n,t),pU)}/**
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
 */class vo extends Su{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new vo({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new vo({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return fU(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return mU(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return gU(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:o}=e;return!i&&!t&&!s&&!o?null:new vo({verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:o})}}/**
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
 */function _U(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yU(n){const e=ql($c(n)).link,t=e?ql($c(e)).deep_link_id:null,i=ql($c(n)).deep_link_id;return(i?ql($c(i)).link:null)||i||t||e||n}class Zm{constructor(e){var t,i,s,o,u,h;const m=ql($c(e)),p=(t=m.apiKey)!==null&&t!==void 0?t:null,y=(i=m.oobCode)!==null&&i!==void 0?i:null,v=_U((s=m.mode)!==null&&s!==void 0?s:null);se(p&&y&&v,"argument-error"),this.apiKey=p,this.operation=v,this.code=y,this.continueUrl=(o=m.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(u=m.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(h=m.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=yU(e);try{return new Zm(t)}catch{return null}}}/**
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
 */class Ta{constructor(){this.providerId=Ta.PROVIDER_ID}static credential(e,t){return Oh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Zm.parseLink(t);return se(i,"argument-error"),Oh._fromEmailAndCode(e,i.code,i.tenantId)}}Ta.PROVIDER_ID="password";Ta.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ta.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ls{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Cu extends ls{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class $l extends Cu{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return se("providerId"in t&&"signInMethod"in t,"argument-error"),fr._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return se(e.idToken||e.accessToken,"argument-error"),fr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return $l.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return $l.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:u,providerId:h}=e;if(!i&&!s&&!t&&!o||!h)return null;try{return new $l(h)._credential({idToken:t,accessToken:i,nonce:u,pendingToken:o})}catch{return null}}}/**
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
 */class Zi extends Cu{constructor(){super("facebook.com")}static credential(e){return fr._fromParams({providerId:Zi.PROVIDER_ID,signInMethod:Zi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zi.credentialFromTaggedObject(e)}static credentialFromError(e){return Zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zi.credential(e.oauthAccessToken)}catch{return null}}}Zi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zi.PROVIDER_ID="facebook.com";/**
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
 */class er extends Cu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return er.credential(t,i)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
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
 */class tr extends Cu{constructor(){super("github.com")}static credential(e){return fr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
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
 */const vU="http://localhost";class du extends Su{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Kr(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Kr(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,pendingToken:o}=t;return!i||!s||!o||i!==s?null:new du(i,o)}static _create(e,t){return new du(e,t)}buildRequest(){return{requestUri:vU,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const EU="saml.";class gm extends ls{constructor(e){se(e.startsWith(EU),"argument-error"),super(e)}static credentialFromResult(e){return gm.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return gm.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=du.fromJSON(e);return se(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return du._create(i,t)}catch{return null}}}/**
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
 */class nr extends Cu{constructor(){super("twitter.com")}static credential(e,t){return fr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return nr.credential(t,i)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
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
 */async function tC(n,e){return os(n,"POST","/v1/accounts:signUp",xt(n,e))}/**
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
 */class Si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const o=await qr._fromIdTokenResponse(e,i,s),u=kI(i);return new Si({user:o,providerId:u,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=kI(i);return new Si({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function kI(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function TU(n){var e;if(Nt(n.app))return Promise.reject(un(n));const t=It(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Si({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await tC(t,{returnSecureToken:!0}),s=await Si._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(s.user),s}/**
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
 */class _m extends Rn{constructor(e,t,i,s){var o;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,_m.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new _m(e,t,i,s)}}function nC(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?_m._fromErrorAndOperation(n,o,e,i):o})}/**
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
 */function iC(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function wU(n,e){const t=ve(n);await ep(!0,t,e);const{providerUserInfo:i}=await bL(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),s=iC(i||[]);return t.providerData=t.providerData.filter(o=>s.has(o.providerId)),s.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function sE(n,e,t=!1){const i=await es(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Si._forOperation(n,"link",i)}async function ep(n,e,t){await Nh(e);const i=iC(e.providerData),s=n===!1?"provider-already-linked":"no-such-provider";se(i.has(t)===n,e.auth,s)}/**
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
 */async function rC(n,e,t=!1){const{auth:i}=n;if(Nt(i.app))return Promise.reject(un(i));const s="reauthenticate";try{const o=await es(n,nC(i,s,e,n),t);se(o.idToken,i,"internal-error");const u=Xm(o.idToken);se(u,i,"internal-error");const{sub:h}=u;return se(n.uid===h,i,"user-mismatch"),Si._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&cn(i,"user-mismatch"),o}}/**
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
 */async function sC(n,e,t=!1){if(Nt(n.app))return Promise.reject(un(n));const i="signIn",s=await nC(n,i,e),o=await Si._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(o.user),o}async function tp(n,e){return sC(It(n),e)}async function aC(n,e){const t=ve(n);return await ep(!1,t,e.providerId),sE(t,e)}async function oC(n,e){return rC(ve(n),e)}/**
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
 */async function bU(n,e){return os(n,"POST","/v1/accounts:signInWithCustomToken",xt(n,e))}/**
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
 */async function IU(n,e){if(Nt(n.app))return Promise.reject(un(n));const t=It(n),i=await bU(t,{token:e,returnSecureToken:!0}),s=await Si._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(s.user),s}/**
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
 */class Jh{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?aE._fromServerResponse(e,t):"totpInfo"in t?oE._fromServerResponse(e,t):cn(e,"internal-error")}}class aE extends Jh{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new aE(t)}}class oE extends Jh{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new oE(t)}}/**
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
 */function np(n,e,t){var i;se(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),se(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(se(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(se(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function lE(n){const e=It(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function AU(n,e,t){const i=It(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&np(i,s,t),await sa(i,s,"getOobCode",oU,"EMAIL_PASSWORD_PROVIDER")}async function RU(n,e,t){await eC(ve(n),{oobCode:e,newPassword:t}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&lE(n),i})}async function SU(n,e){await rU(ve(n),{oobCode:e})}async function lC(n,e){const t=ve(n),i=await eC(t,{oobCode:e}),s=i.requestType;switch(se(s,t,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":se(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":se(i.mfaInfo,t,"internal-error");default:se(i.email,t,"internal-error")}let o=null;return i.mfaInfo&&(o=Jh._fromServerResponse(It(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function CU(n,e){const{data:t}=await lC(ve(n),e);return t.email}async function uC(n,e,t){if(Nt(n.app))return Promise.reject(un(n));const i=It(n),u=await sa(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tC,"EMAIL_PASSWORD_PROVIDER").catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&lE(n),m}),h=await Si._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(h.user),h}function cC(n,e,t){return Nt(n.app)?Promise.reject(un(n)):tp(ve(n),Ta.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&lE(n),i})}/**
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
 */async function DU(n,e,t){const i=It(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(u,h){se(h.handleCodeInApp,i,"argument-error"),h&&np(i,u,h)}o(s,t),await sa(i,s,"getOobCode",lU,"EMAIL_PASSWORD_PROVIDER")}function NU(n,e){const t=Zm.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function OU(n,e,t){if(Nt(n.app))return Promise.reject(un(n));const i=ve(n),s=Ta.credentialWithLink(e,t||Dh());return se(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),tp(i,s)}/**
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
 */async function PU(n,e){return kt(n,"POST","/v1/accounts:createAuthUri",xt(n,e))}/**
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
 */async function xU(n,e){const t=nE()?Dh():"http://localhost",i={identifier:e,continueUri:t},{signinMethods:s}=await PU(ve(n),i);return s||[]}async function kU(n,e){const t=ve(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&np(t.auth,s,e);const{email:o}=await aU(t.auth,s);o!==n.email&&await n.reload()}async function VU(n,e,t){const i=ve(n),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&np(i.auth,o,t);const{email:u}=await uU(i.auth,o);u!==n.email&&await n.reload()}/**
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
 */async function MU(n,e){return kt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function LU(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=ve(n),o={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await es(i,MU(i.auth,o));i.displayName=u.displayName||null,i.photoURL=u.photoUrl||null;const h=i.providerData.find(({providerId:m})=>m==="password");h&&(h.displayName=i.displayName,h.photoURL=i.photoURL),await i._updateTokensIfNecessary(u)}function UU(n,e){const t=ve(n);return Nt(t.auth.app)?Promise.reject(un(t.auth)):hC(t,e,null)}function BU(n,e){return hC(ve(n),null,e)}async function hC(n,e,t){const{auth:i}=n,o={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(o.email=e),t&&(o.password=t);const u=await es(n,nU(i,o));await n._updateTokensIfNecessary(u,!0)}/**
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
 */function FU(n){var e,t;if(!n)return null;const{providerId:i}=n,s=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},o=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(n!=null&&n.idToken)){const u=(t=(e=Xm(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(u){const h=u!=="anonymous"&&u!=="custom"?u:null;return new Ql(o,h)}}if(!i)return null;switch(i){case"facebook.com":return new zU(o,s);case"github.com":return new qU(o,s);case"google.com":return new jU(o,s);case"twitter.com":return new HU(o,s,n.screenName||null);case"custom":case"anonymous":return new Ql(o,null);default:return new Ql(o,i,s)}}class Ql{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class dC extends Ql{constructor(e,t,i,s){super(e,t,i),this.username=s}}class zU extends Ql{constructor(e,t){super(e,"facebook.com",t)}}class qU extends dC{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class jU extends Ql{constructor(e,t){super(e,"google.com",t)}}class HU extends dC{constructor(e,t,i){super(e,"twitter.com",t,i)}}function GU(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:FU(t)}function KU(n,e,t,i){return ve(n).onIdTokenChanged(e,t,i)}function $U(n,e,t){return ve(n).beforeAuthStateChanged(e,t)}function QU(n){return ve(n).signOut()}/**
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
 */class mo{constructor(e,t,i){this.type=e,this.credential=t,this.user=i}static _fromIdtoken(e,t){return new mo("enroll",e,t)}static _fromMfaPendingCredential(e){return new mo("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return mo._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return mo._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class uE{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=It(e),s=t.customData._serverResponse,o=(s.mfaInfo||[]).map(h=>Jh._fromServerResponse(i,h));se(s.mfaPendingCredential,i,"internal-error");const u=mo._fromMfaPendingCredential(s.mfaPendingCredential);return new uE(u,o,async h=>{const m=await h._process(i,u);delete s.mfaInfo,delete s.mfaPendingCredential;const p=Object.assign(Object.assign({},s),{idToken:m.idToken,refreshToken:m.refreshToken});switch(t.operationType){case"signIn":const y=await Si._fromIdTokenResponse(i,t.operationType,p);return await i._updateCurrentUser(y.user),y;case"reauthenticate":return se(t.user,i,"internal-error"),Si._forOperation(t.user,t.operationType,p);default:cn(i,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function WU(n,e){var t;const i=ve(n),s=e;return se(e.customData.operationType,i,"argument-error"),se((t=s.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,i,"argument-error"),uE._fromError(i,s)}/**
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
 */function VI(n,e){return kt(n,"POST","/v2/accounts/mfaEnrollment:start",xt(n,e))}function YU(n,e){return kt(n,"POST","/v2/accounts/mfaEnrollment:finalize",xt(n,e))}function XU(n,e){return kt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",xt(n,e))}class cE{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(i=>Jh._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new cE(e)}async getSession(){return mo._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const i=e,s=await this.getSession(),o=await es(this.user,i._process(this.user.auth,s,t));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const s=await es(this.user,XU(this.user.auth,{idToken:i,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==t),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const U_=new WeakMap;function JU(n){const e=ve(n);return U_.has(e)||U_.set(e,cE._fromUser(e)),U_.get(e)}const ym="__sak";/**
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
 */class fC{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ym,"1"),this.storage.removeItem(ym),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ZU=1e3,eB=10;class mC extends fC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Q1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,h,m)=>{this.notifyListeners(u,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(i);!t&&this.localCache[i]===u||this.notifyListeners(i,u)},o=this.storage.getItem(i);xL()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eB):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},ZU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mC.type="LOCAL";const ip=mC;/**
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
 */class pC extends fC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pC.type="SESSION";const ga=pC;/**
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
 */function tB(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class rp{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new rp(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:o}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const h=Array.from(u).map(async p=>p(t.origin,o)),m=await tB(h);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rp.receivers=[];/**
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
 */function Zh(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class nB{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,u;return new Promise((h,m)=>{const p=Zh("",20);s.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},i);u={messageChannel:s,onMessage(v){const w=v;if(w.data.eventId===p)switch(w.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),h(w.data.response);break;default:clearTimeout(y),clearTimeout(o),m(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Gt(){return window}function iB(n){Gt().location.href=n}/**
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
 */function hE(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function rB(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sB(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function aB(){return hE()?self:null}/**
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
 */const gC="firebaseLocalStorageDb",oB=1,vm="firebaseLocalStorage",_C="fbase_key";class ed{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function sp(n,e){return n.transaction([vm],e?"readwrite":"readonly").objectStore(vm)}function lB(){const n=indexedDB.deleteDatabase(gC);return new ed(n).toPromise()}function Ay(){const n=indexedDB.open(gC,oB);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(vm,{keyPath:_C})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(vm)?e(i):(i.close(),await lB(),e(await Ay()))})})}async function MI(n,e,t){const i=sp(n,!0).put({[_C]:e,value:t});return new ed(i).toPromise()}async function uB(n,e){const t=sp(n,!1).get(e),i=await new ed(t).toPromise();return i===void 0?null:i.value}function LI(n,e){const t=sp(n,!0).delete(e);return new ed(t).toPromise()}const cB=800,hB=3;class yC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ay(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>hB)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rp._getInstance(aB()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await rB(),!this.activeServiceWorker)return;this.sender=new nB(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sB()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ay();return await MI(e,ym,"1"),await LI(e,ym),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>MI(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>uB(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>LI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=sp(s,!1).getAll();return new ed(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cB)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yC.type="LOCAL";const fu=yC;/**
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
 */function UI(n,e){return kt(n,"POST","/v2/accounts/mfaSignIn:start",xt(n,e))}function dB(n,e){return kt(n,"POST","/v2/accounts/mfaSignIn:finalize",xt(n,e))}/**
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
 */const B_=Y1("rcb"),fB=new Qh(3e4,6e4);class mB{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Gt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return se(pB(t),e,"argument-error"),this.shouldResolveImmediately(t)&&RI(Gt().grecaptcha)?Promise.resolve(Gt().grecaptcha):new Promise((i,s)=>{const o=Gt().setTimeout(()=>{s(Xt(e,"network-request-failed"))},fB.get());Gt()[B_]=()=>{Gt().clearTimeout(o),delete Gt()[B_];const h=Gt().grecaptcha;if(!h||!RI(h)){s(Xt(e,"internal-error"));return}const m=h.render;h.render=(p,y)=>{const v=m(p,y);return this.counter++,v},this.hostLanguage=t,i(h)};const u=`${FL()}?${gu({onload:B_,render:"explicit",hl:t})}`;rE(u).catch(()=>{clearTimeout(o),s(Xt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Gt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function pB(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class gB{async load(e){return new GL(e)}clearedOneInstance(){}}/**
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
 */const oh="recaptcha",_B={theme:"light",type:"image"};let yB=class{constructor(e,t,i=Object.assign({},_B)){this.parameters=i,this.type=oh,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=It(e),this.isInvisible=this.parameters.size==="invisible",se(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;se(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new gB:new mB,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(s=>{const o=u=>{u&&(this.tokenChangeListeners.delete(o),s(u))};this.tokenChangeListeners.add(o),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){se(!this.parameters.sitekey,this.auth,"argument-error"),se(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),se(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=Gt()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){se(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){se(nE()&&!hE(),this.auth,"internal-error"),await vB(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await TL(this.auth);se(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return se(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function vB(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class dE{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=vo._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function EB(n,e,t){if(Nt(n.app))return Promise.reject(un(n));const i=It(n),s=await ap(i,e,ve(t));return new dE(s,o=>tp(i,o))}async function TB(n,e,t){const i=ve(n);await ep(!1,i,"phone");const s=await ap(i.auth,e,ve(t));return new dE(s,o=>aC(i,o))}async function wB(n,e,t){const i=ve(n);if(Nt(i.auth.app))return Promise.reject(un(i.auth));const s=await ap(i.auth,e,ve(t));return new dE(s,o=>oC(i,o))}async function ap(n,e,t){var i;if(!n._getRecaptchaConfig())try{await XL(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s){se(o.type==="enroll",n,"internal-error");const u={idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await sa(n,u,"mfaSmsEnrollment",async(y,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===ah){se((t==null?void 0:t.type)===oh,y,"argument-error");const w=await F_(y,v,t);return VI(y,w)}return VI(y,v)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{se(o.type==="signin",n,"internal-error");const u=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;se(u,n,"missing-multi-factor-info");const h={mfaPendingCredential:o.credential,mfaEnrollmentId:u,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await sa(n,h,"mfaSmsSignIn",async(v,w)=>{if(w.phoneSignInInfo.captchaResponse===ah){se((t==null?void 0:t.type)===oh,v,"argument-error");const C=await F_(v,w,t);return UI(v,C)}return UI(v,w)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{const o={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await sa(n,o,"sendVerificationCode",async(p,y)=>{if(y.captchaResponse===ah){se((t==null?void 0:t.type)===oh,p,"argument-error");const v=await F_(p,y,t);return xI(p,v)}return xI(p,y)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).sessionInfo}}finally{t==null||t._reset()}}async function bB(n,e){const t=ve(n);if(Nt(t.auth.app))return Promise.reject(un(t.auth));await sE(t,e)}async function F_(n,e,t){se(t.type===oh,n,"argument-error");const i=await t.verify();se(typeof i=="string",n,"argument-error");const s=Object.assign({},e);if("phoneEnrollmentInfo"in s){const o=s.phoneEnrollmentInfo.phoneNumber,u=s.phoneEnrollmentInfo.captchaResponse,h=s.phoneEnrollmentInfo.clientType,m=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:i,captchaResponse:u,clientType:h,recaptchaVersion:m}}),s}else if("phoneSignInInfo"in s){const o=s.phoneSignInInfo.captchaResponse,u=s.phoneSignInInfo.clientType,h=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:o,clientType:u,recaptchaVersion:h}}),s}else return Object.assign(s,{recaptchaToken:i}),s}/**
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
 */let Co=class Kf{constructor(e){this.providerId=Kf.PROVIDER_ID,this.auth=It(e)}verifyPhoneNumber(e,t){return ap(this.auth,e,ve(t))}static credential(e,t){return vo._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Kf.credentialFromTaggedObject(t)}static credentialFromError(e){return Kf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?vo._fromTokenResponse(t,i):null}};Co.PROVIDER_ID="phone";Co.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Uo(n,e){return e?ii(e):(se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class fE extends Su{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function IB(n){return sC(n.auth,new fE(n),n.bypassAuthState)}function AB(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),rC(t,new fE(n),n.bypassAuthState)}async function RB(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),sE(t,new fE(n),n.bypassAuthState)}/**
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
 */class vC{constructor(e,t,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:o,error:u,type:h}=e;if(u){this.reject(u);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(m))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IB;case"linkViaPopup":case"linkViaRedirect":return RB;case"reauthViaPopup":case"reauthViaRedirect":return AB;default:cn(this.auth,"internal-error")}}resolve(e){Vi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SB=new Qh(2e3,1e4);async function CB(n,e,t){if(Nt(n.app))return Promise.reject(Xt(n,"operation-not-supported-in-this-environment"));const i=It(n);Ru(n,e,ls);const s=Uo(i,t);return new jr(i,"signInViaPopup",e,s).executeNotNull()}async function DB(n,e,t){const i=ve(n);if(Nt(i.auth.app))return Promise.reject(Xt(i.auth,"operation-not-supported-in-this-environment"));Ru(i.auth,e,ls);const s=Uo(i.auth,t);return new jr(i.auth,"reauthViaPopup",e,s,i).executeNotNull()}async function NB(n,e,t){const i=ve(n);Ru(i.auth,e,ls);const s=Uo(i.auth,t);return new jr(i.auth,"linkViaPopup",e,s,i).executeNotNull()}class jr extends vC{constructor(e,t,i,s,o){super(e,t,s,o),this.provider=i,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Vi(this.filter.length===1,"Popup operations only handle one event");const e=Zh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SB.get())};e()}}jr.currentPopupAction=null;/**
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
 */const OB="pendingRedirect",lh=new Map;class PB extends vC{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=lh.get(this.auth._key());if(!e){try{const i=await xB(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}lh.set(this.auth._key(),e)}return this.bypassAuthState||lh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xB(n,e){const t=TC(e),i=EC(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function mE(n,e){return EC(n)._set(TC(e),"true")}function kB(){lh.clear()}function pE(n,e){lh.set(n._key(),e)}function EC(n){return ii(n._redirectPersistence)}function TC(n){return yo(OB,n.config.apiKey,n.name)}/**
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
 */function VB(n,e,t){return MB(n,e,t)}async function MB(n,e,t){if(Nt(n.app))return Promise.reject(un(n));const i=It(n);Ru(n,e,ls),await i._initializationPromise;const s=Uo(i,t);return await mE(s,i),s._openRedirect(i,e,"signInViaRedirect")}function LB(n,e,t){return UB(n,e,t)}async function UB(n,e,t){const i=ve(n);if(Ru(i.auth,e,ls),Nt(i.auth.app))return Promise.reject(un(i.auth));await i.auth._initializationPromise;const s=Uo(i.auth,t);await mE(s,i.auth);const o=await wC(i);return s._openRedirect(i.auth,e,"reauthViaRedirect",o)}function BB(n,e,t){return FB(n,e,t)}async function FB(n,e,t){const i=ve(n);Ru(i.auth,e,ls),await i.auth._initializationPromise;const s=Uo(i.auth,t);await ep(!1,i,e.providerId),await mE(s,i.auth);const o=await wC(i);return s._openRedirect(i.auth,e,"linkViaRedirect",o)}async function zB(n,e){return await It(n)._initializationPromise,op(n,e,!1)}async function op(n,e,t=!1){if(Nt(n.app))return Promise.reject(un(n));const i=It(n),s=Uo(i,e),u=await new PB(i,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}async function wC(n){const e=Zh(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const qB=10*60*1e3;class bC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jB(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!IC(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Xt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qB&&this.cachedEventUids.clear(),this.cachedEventUids.has(BI(e))}saveEventToCache(e){this.cachedEventUids.add(BI(e)),this.lastProcessedEventTime=Date.now()}}function BI(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function IC({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jB(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return IC(n);default:return!1}}/**
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
 */async function AC(n,e={}){return kt(n,"GET","/v1/projects",e)}/**
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
 */const HB=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GB=/^https?/;async function KB(n){if(n.config.emulator)return;const{authorizedDomains:e}=await AC(n);for(const t of e)try{if($B(t))return}catch{}cn(n,"unauthorized-domain")}function $B(n){const e=Dh(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===i}if(!GB.test(t))return!1;if(HB.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const QB=new Qh(3e4,6e4);function FI(){const n=Gt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function WB(n){return new Promise((e,t)=>{var i,s,o;function u(){FI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{FI(),t(Xt(n,"network-request-failed"))},timeout:QB.get()})}if(!((s=(i=Gt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=Gt().gapi)===null||o===void 0)&&o.load)u();else{const h=Y1("iframefcb");return Gt()[h]=()=>{gapi.load?u():t(Xt(n,"network-request-failed"))},rE(`${qL()}?onload=${h}`).catch(m=>t(m))}}).catch(e=>{throw $f=null,e})}let $f=null;function YB(n){return $f=$f||WB(n),$f}/**
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
 */const XB=new Qh(5e3,15e3),JB="__/auth/iframe",ZB="emulator/auth/iframe",e4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function n4(n){const e=n.config;se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?iE(e,ZB):`https://${n.config.authDomain}/${JB}`,i={apiKey:e.apiKey,appName:n.name,v:ns},s=t4.get(n.config.apiHost);s&&(i.eid=s);const o=n._getFrameworks();return o.length&&(i.fw=o.join(",")),`${t}?${gu(i).slice(1)}`}async function i4(n){const e=await YB(n),t=Gt().gapi;return se(t,n,"internal-error"),e.open({where:document.body,url:n4(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:e4,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const u=Xt(n,"network-request-failed"),h=Gt().setTimeout(()=>{o(u)},XB.get());function m(){Gt().clearTimeout(h),s(i)}i.ping(m).then(m,()=>{o(u)})}))}/**
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
 */const r4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},s4=500,a4=600,o4="_blank",l4="http://localhost";class zI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u4(n,e,t,i=s4,s=a4){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let h="";const m=Object.assign(Object.assign({},r4),{width:i.toString(),height:s.toString(),top:o,left:u}),p=bt().toLowerCase();t&&(h=H1(p)?o4:t),q1(p)&&(e=e||l4,m.scrollbars="yes");const y=Object.entries(m).reduce((w,[C,M])=>`${w}${C}=${M},`,"");if(PL(p)&&h!=="_self")return c4(e||"",h),new zI(null);const v=window.open(e||"",h,y);se(v,n,"popup-blocked");try{v.focus()}catch{}return new zI(v)}function c4(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const h4="__/auth/handler",d4="emulator/auth/handler",f4=encodeURIComponent("fac");async function Ry(n,e,t,i,s,o){se(n.config.authDomain,n,"auth-domain-config-required"),se(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ns,eventId:s};if(e instanceof ls){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",GP(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries(o||{}))u[y]=v}if(e instanceof Cu){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const h=u;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const m=await n._getAppCheckToken(),p=m?`#${f4}=${encodeURIComponent(m)}`:"";return`${m4(n)}?${gu(h).slice(1)}${p}`}function m4({config:n}){return n.emulator?iE(n,d4):`https://${n.authDomain}/${h4}`}/**
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
 */const z_="webStorageSupport";class p4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ga,this._completeRedirectFn=op,this._overrideRedirectResult=pE}async _openPopup(e,t,i,s){var o;Vi((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const u=await Ry(e,t,i,Dh(),s);return u4(e,u,Zh())}async _openRedirect(e,t,i,s){await this._originValidation(e);const o=await Ry(e,t,i,Dh(),s);return iB(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(Vi(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await i4(e),i=new bC(e);return t.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(z_,{type:z_},s=>{var o;const u=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[z_];u!==void 0&&t(!!u),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=KB(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Q1()||j1()||Yh()}}const RC=p4;class g4{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return ar("unexpected MultiFactorSessionType")}}}class gE extends g4{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new gE(e)}_finalizeEnroll(e,t,i){return YU(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return dB(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class SC{constructor(){}static assertion(e){return gE._fromCredential(e)}}SC.FACTOR_ID="phone";var qI="@firebase/auth",jI="1.8.1";/**
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
 */class _4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function y4(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function v4(n){Yr(new Ri("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:u,authDomain:h}=i.options;se(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:u,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:W1(n)},p=new UL(i,s,o,m);return ZL(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Yr(new Ri("auth-internal",e=>{const t=It(e.getProvider("auth").getImmediate());return(i=>new _4(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ri(qI,jI,y4(n)),ri(qI,jI,"esm2017")}/**
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
 */const E4=5*60,T4=KA("authIdTokenMaxAge")||E4;let HI=null;const w4=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>T4)return;const s=t==null?void 0:t.token;HI!==s&&(HI=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function b4(n=Sm()){const e=_u(n,"auth");if(e.isInitialized())return e.getImmediate();const t=JL(n,{popupRedirectResolver:RC,persistence:[fu,ip,ga]}),i=KA("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const u=w4(o.toString());$U(t,u,()=>u(t.currentUser)),KU(t,h=>u(h))}}const s=jA("auth");return s&&J1(t,`http://${s}`),t}function I4(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}BL({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const o=Xt("internal-error");o.customData=s,t(o)},i.type="text/javascript",i.charset="UTF-8",I4().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});v4("Browser");/**
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
 */function Do(){return window}/**
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
 */const A4=2e3;async function R4(n,e,t){var i;const{BuildInfo:s}=Do();Vi(e.sessionId,"AuthEvent did not contain a session ID");const o=await O4(e.sessionId),u={};return Yh()?u.ibi=s.packageName:Wh()?u.apn=s.packageName:cn(n,"operation-not-supported-in-this-environment"),s.displayName&&(u.appDisplayName=s.displayName),u.sessionId=o,Ry(n,t,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,u)}async function S4(n){const{BuildInfo:e}=Do(),t={};Yh()?t.iosBundleId=e.packageName:Wh()?t.androidPackageName=e.packageName:cn(n,"operation-not-supported-in-this-environment"),await AC(n,t)}function C4(n){const{cordova:e}=Do();return new Promise(t=>{e.plugins.browsertab.isAvailable(i=>{let s=null;i?e.plugins.browsertab.openUrl(n):s=e.InAppBrowser.open(n,OL()?"_blank":"_system","location=yes"),t(s)})})}async function D4(n,e,t){const{cordova:i}=Do();let s=()=>{};try{await new Promise((o,u)=>{let h=null;function m(){var v;o();const w=(v=i.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof w=="function"&&w(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function p(){h||(h=window.setTimeout(()=>{u(Xt(n,"redirect-cancelled-by-user"))},A4))}function y(){(document==null?void 0:document.visibilityState)==="visible"&&p()}e.addPassiveListener(m),document.addEventListener("resume",p,!1),Wh()&&document.addEventListener("visibilitychange",y,!1),s=()=>{e.removePassiveListener(m),document.removeEventListener("resume",p,!1),document.removeEventListener("visibilitychange",y,!1),h&&window.clearTimeout(h)}})}finally{s()}}function N4(n){var e,t,i,s,o,u,h,m,p,y;const v=Do();se(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),se(typeof((t=v==null?void 0:v.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),se(typeof((o=(s=(i=v==null?void 0:v.cordova)===null||i===void 0?void 0:i.plugins)===null||s===void 0?void 0:s.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),se(typeof((m=(h=(u=v==null?void 0:v.cordova)===null||u===void 0?void 0:u.plugins)===null||h===void 0?void 0:h.browsertab)===null||m===void 0?void 0:m.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),se(typeof((y=(p=v==null?void 0:v.cordova)===null||p===void 0?void 0:p.InAppBrowser)===null||y===void 0?void 0:y.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function O4(n){const e=P4(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(s=>s.toString(16).padStart(2,"0")).join("")}function P4(n){if(Vi(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let i=0;i<n.length;i++)t[i]=n.charCodeAt(i);return t}/**
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
 */const x4=20;class k4 extends bC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function V4(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:U4(),postBody:null,tenantId:n.tenantId,error:Xt(n,"no-auth-event")}}function M4(n,e){return Sy()._set(Cy(n),e)}async function GI(n){const e=await Sy()._get(Cy(n));return e&&await Sy()._remove(Cy(n)),e}function L4(n,e){var t,i;const s=F4(e);if(s.includes("/__/auth/callback")){const o=Qf(s),u=o.firebaseError?B4(decodeURIComponent(o.firebaseError)):null,h=(i=(t=u==null?void 0:u.code)===null||t===void 0?void 0:t.split("auth/"))===null||i===void 0?void 0:i[1],m=h?Xt(h):null;return m?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:m,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:s,postBody:null}}return null}function U4(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<x4;t++){const i=Math.floor(Math.random()*e.length);n.push(e.charAt(i))}return n.join("")}function Sy(){return ii(ip)}function Cy(n){return yo("authEvent",n.config.apiKey,n.name)}function B4(n){try{return JSON.parse(n)}catch{return null}}function F4(n){const e=Qf(n),t=e.link?decodeURIComponent(e.link):void 0,i=Qf(t).link,s=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Qf(s).link||s||i||t||n}function Qf(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return ql(t.join("?"))}/**
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
 */const z4=500;class q4{constructor(){this._redirectPersistence=ga,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=op,this._overrideRedirectResult=pE}async _initialize(e){const t=e._key();let i=this.eventManagers.get(t);return i||(i=new k4(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){cn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,s){N4(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),kB(),await this._originValidation(e);const u=V4(e,i,s);await M4(e,u);const h=await R4(e,u,t),m=await C4(h);return D4(e,o,m)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=S4(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:i,handleOpenURL:s,BuildInfo:o}=Do(),u=setTimeout(async()=>{await GI(e),t.onEvent(KI())},z4),h=async y=>{clearTimeout(u);const v=await GI(e);let w=null;v&&(y!=null&&y.url)&&(w=L4(v,y.url)),t.onEvent(w||KI())};typeof i<"u"&&typeof i.subscribe=="function"&&i.subscribe(null,h);const m=s,p=`${o.packageName.toLowerCase()}://`;Do().handleOpenURL=async y=>{if(y.toLowerCase().startsWith(p)&&h({url:y}),typeof m=="function")try{m(y)}catch(v){console.error(v)}}}}const j4=q4;function KI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xt("no-auth-event")}}/**
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
 */function H4(n,e){It(n)._logFramework(e)}var G4="@firebase/auth-compat",K4="0.5.16";/**
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
 */const $4=1e3;function uh(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function Q4(){return uh()==="http:"||uh()==="https:"}function CC(n=bt()){return!!((uh()==="file:"||uh()==="ionic:"||uh()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function W4(){return Ky()||Gy()}function Y4(){return YA()&&(document==null?void 0:document.documentMode)===11}function X4(n=bt()){return/Edge\/\d+/.test(n)}function J4(n=bt()){return Y4()||X4(n)}function DC(){try{const n=self.localStorage,e=Zh();if(n)return n.setItem(e,"1"),n.removeItem(e),J4()?fh():!0}catch{return _E()&&fh()}return!1}function _E(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function q_(){return(Q4()||WA()||CC())&&!W4()&&DC()&&!_E()}function NC(){return CC()&&typeof document<"u"}async function Z4(){return NC()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},$4);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function eF(){return typeof window<"u"?window:null}/**
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
 */const ni={LOCAL:"local",NONE:"none",SESSION:"session"},jc=se,OC="persistence";function tF(n,e){if(jc(Object.values(ni).includes(e),n,"invalid-persistence-type"),Ky()){jc(e!==ni.SESSION,n,"unsupported-persistence-type");return}if(Gy()){jc(e===ni.NONE,n,"unsupported-persistence-type");return}if(_E()){jc(e===ni.NONE||e===ni.LOCAL&&fh(),n,"unsupported-persistence-type");return}jc(e===ni.NONE||DC(),n,"unsupported-persistence-type")}async function Dy(n){await n._initializationPromise;const e=PC(),t=yo(OC,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function nF(n,e){const t=PC();if(!t)return[];const i=yo(OC,n,e);switch(t.getItem(i)){case ni.NONE:return[hu];case ni.LOCAL:return[fu,ga];case ni.SESSION:return[ga];default:return[]}}function PC(){var n;try{return((n=eF())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const iF=se;class na{constructor(){this.browserResolver=ii(RC),this.cordovaResolver=ii(j4),this.underlyingResolver=null,this._redirectPersistence=ga,this._completeRedirectFn=op,this._overrideRedirectResult=pE}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,s)}async _openRedirect(e,t,i,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,s)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return NC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return iF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Z4();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function xC(n){return n.unwrap()}function rF(n){return n.wrapped()}/**
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
 */function sF(n){return kC(n)}function aF(n,e){var t;const i=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new oF(n,WU(n,e))}else if(i){const s=kC(e),o=e;s&&(o.credential=s,o.tenantId=i.tenantId||void 0,o.email=i.email||void 0,o.phoneNumber=i.phoneNumber||void 0)}}function kC(n){const{_tokenResponse:e}=n instanceof Rn?n.customData:n;if(!e)return null;if(!(n instanceof Rn)&&"temporaryProof"in e&&"phoneNumber"in e)return Co.credentialFromResult(n);const t=e.providerId;if(!t||t===zc.PASSWORD)return null;let i;switch(t){case zc.GOOGLE:i=er;break;case zc.FACEBOOK:i=Zi;break;case zc.GITHUB:i=tr;break;case zc.TWITTER:i=nr;break;default:const{oauthIdToken:s,oauthAccessToken:o,oauthTokenSecret:u,pendingToken:h,nonce:m}=e;return!o&&!u&&!s&&!h?null:h?t.startsWith("saml.")?du._create(t,h):fr._fromParams({providerId:t,signInMethod:t,pendingToken:h,idToken:s,accessToken:o}):new $l(t).credential({idToken:s,accessToken:o,rawNonce:m})}return n instanceof Rn?i.credentialFromError(n):i.credentialFromResult(n)}function Gn(n,e){return e.catch(t=>{throw t instanceof Rn&&aF(n,t),t}).then(t=>{const i=t.operationType,s=t.user;return{operationType:i,credential:sF(t),additionalUserInfo:GU(t),user:Hr.getOrCreate(s)}})}async function Ny(n,e){const t=await e;return{verificationId:t.verificationId,confirm:i=>Gn(n,t.confirm(i))}}class oF{constructor(e,t){this.resolver=t,this.auth=rF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Gn(xC(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Hr{constructor(e){this._delegate=e,this.multiFactor=JU(e)}static getOrCreate(e){return Hr.USER_MAP.has(e)||Hr.USER_MAP.set(e,new Hr(e)),Hr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Gn(this.auth,aC(this._delegate,e))}async linkWithPhoneNumber(e,t){return Ny(this.auth,TB(this._delegate,e,t))}async linkWithPopup(e){return Gn(this.auth,NB(this._delegate,e,na))}async linkWithRedirect(e){return await Dy(It(this.auth)),BB(this._delegate,e,na)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Gn(this.auth,oC(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Ny(this.auth,wB(this._delegate,e,t))}reauthenticateWithPopup(e){return Gn(this.auth,DB(this._delegate,e,na))}async reauthenticateWithRedirect(e){return await Dy(It(this.auth)),LB(this._delegate,e,na)}sendEmailVerification(e){return kU(this._delegate,e)}async unlink(e){return await wU(this._delegate,e),this}updateEmail(e){return UU(this._delegate,e)}updatePassword(e){return BU(this._delegate,e)}updatePhoneNumber(e){return bB(this._delegate,e)}updateProfile(e){return LU(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return VU(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Hr.USER_MAP=new WeakMap;/**
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
 */const Hc=se;class Oy{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;Hc(i,"invalid-api-key",{appName:e.name}),Hc(i,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?na:void 0;this._delegate=t.initialize({options:{persistence:lF(i,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(dL),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Hr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){J1(this._delegate,e,t)}applyActionCode(e){return SU(this._delegate,e)}checkActionCode(e){return lC(this._delegate,e)}confirmPasswordReset(e,t){return RU(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Gn(this._delegate,uC(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return xU(this._delegate,e)}isSignInWithEmailLink(e){return NU(this._delegate,e)}async getRedirectResult(){Hc(q_(),this._delegate,"operation-not-supported-in-this-environment");const e=await zB(this._delegate,na);return e?Gn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){H4(this._delegate,e)}onAuthStateChanged(e,t,i){const{next:s,error:o,complete:u}=$I(e,t,i);return this._delegate.onAuthStateChanged(s,o,u)}onIdTokenChanged(e,t,i){const{next:s,error:o,complete:u}=$I(e,t,i);return this._delegate.onIdTokenChanged(s,o,u)}sendSignInLinkToEmail(e,t){return DU(this._delegate,e,t)}sendPasswordResetEmail(e,t){return AU(this._delegate,e,t||void 0)}async setPersistence(e){tF(this._delegate,e);let t;switch(e){case ni.SESSION:t=ga;break;case ni.LOCAL:t=await ii(fu)._isAvailable()?fu:ip;break;case ni.NONE:t=hu;break;default:return cn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Gn(this._delegate,TU(this._delegate))}signInWithCredential(e){return Gn(this._delegate,tp(this._delegate,e))}signInWithCustomToken(e){return Gn(this._delegate,IU(this._delegate,e))}signInWithEmailAndPassword(e,t){return Gn(this._delegate,cC(this._delegate,e,t))}signInWithEmailLink(e,t){return Gn(this._delegate,OU(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Ny(this._delegate,EB(this._delegate,e,t))}async signInWithPopup(e){return Hc(q_(),this._delegate,"operation-not-supported-in-this-environment"),Gn(this._delegate,CB(this._delegate,e,na))}async signInWithRedirect(e){return Hc(q_(),this._delegate,"operation-not-supported-in-this-environment"),await Dy(this._delegate),VB(this._delegate,e,na)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return CU(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Oy.Persistence=ni;function $I(n,e,t){let i=n;typeof n!="function"&&({next:i,error:e,complete:t}=n);const s=i;return{next:u=>s(u&&Hr.getOrCreate(u)),error:e,complete:t}}function lF(n,e){const t=nF(n,e);if(typeof self<"u"&&!t.includes(fu)&&t.push(fu),typeof window<"u")for(const i of[ip,ga])t.includes(i)||t.push(i);return t.includes(hu)||t.push(hu),t}/**
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
 */class yE{static credential(e,t){return Co.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new Co(xC(Lo.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}yE.PHONE_SIGN_IN_METHOD=Co.PHONE_SIGN_IN_METHOD;yE.PROVIDER_ID=Co.PROVIDER_ID;/**
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
 */const uF=se;class cF{constructor(e,t,i=Lo.app()){var s;uF((s=i.options)===null||s===void 0?void 0:s.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new yB(i.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const hF="auth-compat";function dF(n){n.INTERNAL.registerComponent(new Ri(hF,e=>{const t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new Oy(t,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:kl.EMAIL_SIGNIN,PASSWORD_RESET:kl.PASSWORD_RESET,RECOVER_EMAIL:kl.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:kl.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:kl.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:kl.VERIFY_EMAIL}},EmailAuthProvider:Ta,FacebookAuthProvider:Zi,GithubAuthProvider:tr,GoogleAuthProvider:er,OAuthProvider:$l,SAMLAuthProvider:gm,PhoneAuthProvider:yE,PhoneMultiFactorGenerator:SC,RecaptchaVerifier:cF,TwitterAuthProvider:nr,Auth:Oy,AuthCredential:Su,Error:Rn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(G4,K4)}dF(Lo);const fF="@firebase/firestore-compat",mF="0.3.40";/**
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
 */function vE(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new Z("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function QI(){if(typeof Uint8Array>"u")throw new Z("unimplemented","Uint8Arrays are not available in this environment.")}function WI(){if(!Bk())throw new Z("unimplemented","Blobs are unavailable in Firestore in this environment.")}let VC=class Py{constructor(e){this._delegate=e}static fromBase64String(e){return WI(),new Py(dr.fromBase64String(e))}static fromUint8Array(e){return QI(),new Py(dr.fromUint8Array(e))}toBase64(){return WI(),this._delegate.toBase64()}toUint8Array(){return QI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function xy(n){return pF(n,["next","error","complete"])}function pF(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const i of e)if(i in t&&typeof t[i]=="function")return!0;return!1}/**
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
 */class gF{enableIndexedDbPersistence(e,t){return _2(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return y2(e._delegate)}clearIndexedDbPersistence(e){return v2(e._delegate)}}class MC{constructor(e,t,i){this._delegate=t,this._persistenceProvider=i,this.INTERNAL={delete:()=>this.terminate()},e instanceof ua||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&cr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,i={}){u1(this._delegate,e,t,i)}enableNetwork(){return T2(this._delegate)}disableNetwork(){return w2(this._delegate)}enablePersistence(e){let t=!1,i=!1;return e&&(t=!!e.synchronizeTabs,i=!!e.experimentalForceOwningTab,o1("synchronizeTabs",t,"experimentalForceOwningTab",i)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,i)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return E2(this._delegate)}onSnapshotsInSync(e){return K2(this._delegate,e)}get app(){if(!this._appCompat)throw new Z("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new mu(this,Uv(this._delegate,e))}catch(t){throw Un(t,"collection()","Firestore.collection()")}}doc(e){try{return new bi(this,Sh(this._delegate,e))}catch(t){throw Un(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ln(this,f2(this._delegate,e))}catch(t){throw Un(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Y2(this._delegate,t=>e(new LC(this,t)))}batch(){return Cn(this._delegate),new UC(new Q2(this._delegate,e=>$h(this._delegate,e)))}loadBundle(e){return b2(this._delegate,e)}namedQuery(e){return I2(this._delegate,e).then(t=>t?new Ln(this,t):null)}}class lp extends Xv{constructor(e){super(),this.firestore=e}convertBytes(e){return new VC(new dr(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return bi.forKey(t,this.firestore,null)}}function _F(n){sk(n)}class LC{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new lp(e)}get(e){const t=po(e);return this._delegate.get(t).then(i=>new Ph(this._firestore,new Zr(this._firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,t.converter)))}set(e,t,i){const s=po(e);return i?(vE("Transaction.set",i),this._delegate.set(s,t,i)):this._delegate.set(s,t),this}update(e,t,i,...s){const o=po(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,i,...s),this}delete(e){const t=po(e);return this._delegate.delete(t),this}}class UC{constructor(e){this._delegate=e}set(e,t,i){const s=po(e);return i?(vE("WriteBatch.set",i),this._delegate.set(s,t,i)):this._delegate.set(s,t),this}update(e,t,i,...s){const o=po(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,i,...s),this}delete(e){const t=po(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class No{constructor(e,t,i){this._firestore=e,this._userDataWriter=t,this._delegate=i}fromFirestore(e,t){const i=new rh(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new xh(this._firestore,i),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const i=No.INSTANCES;let s=i.get(e);s||(s=new WeakMap,i.set(e,s));let o=s.get(t);return o||(o=new No(e,new lp(e),t),s.set(t,o)),o}}No.INSTANCES=new WeakMap;class bi{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new lp(e)}static forPath(e,t,i){if(e.length%2!==0)throw new Z("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new bi(t,new wt(t._delegate,i,new he(e)))}static forKey(e,t,i){return new bi(t,new wt(t._delegate,i,e))}get id(){return this._delegate.id}get parent(){return new mu(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new mu(this.firestore,Uv(this._delegate,e))}catch(t){throw Un(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ve(e),e instanceof wt?f1(this._delegate,e):!1}set(e,t){t=vE("DocumentReference.set",t);try{return t?wI(this._delegate,e,t):wI(this._delegate,e)}catch(i){throw Un(i,"setDoc()","DocumentReference.set()")}}update(e,t,...i){try{return arguments.length===1?by(this._delegate,e):by(this._delegate,e,t,...i)}catch(s){throw Un(s,"updateDoc()","DocumentReference.update()")}}delete(){return H2(this._delegate)}onSnapshot(...e){const t=BC(e),i=FC(e,s=>new Ph(this.firestore,new Zr(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return N1(this._delegate,t,i)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=F2(this._delegate):(e==null?void 0:e.source)==="server"?t=z2(this._delegate):t=B2(this._delegate),t.then(i=>new Ph(this.firestore,new Zr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)))}withConverter(e){return new bi(this.firestore,e?this._delegate.withConverter(No.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Un(n,e,t){return n.message=n.message.replace(e,t),n}function BC(n){for(const e of n)if(typeof e=="object"&&!xy(e))return e;return{}}function FC(n,e){var t,i;let s;return xy(n[0])?s=n[0]:xy(n[1])?s=n[1]:typeof n[0]=="function"?s={next:n[0],error:n[1],complete:n[2]}:s={next:n[1],error:n[2],complete:n[3]},{next:o=>{s.next&&s.next(e(o))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(i=s.complete)===null||i===void 0?void 0:i.bind(s)}}class Ph{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new bi(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return C1(this._delegate,e._delegate)}}class xh extends Ph{data(e){const t=this._delegate.data(e);return this._delegate._converter||ak(t!==void 0),t}}class Ln{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new lp(e)}where(e,t,i){try{return new Ln(this.firestore,Br(this._delegate,A1(e,t,i)))}catch(s){throw Un(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Ln(this.firestore,Br(this._delegate,N2(e,t)))}catch(i){throw Un(i,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ln(this.firestore,Br(this._delegate,O2(e)))}catch(t){throw Un(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Ln(this.firestore,Br(this._delegate,P2(e)))}catch(t){throw Un(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ln(this.firestore,Br(this._delegate,x2(...e)))}catch(t){throw Un(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ln(this.firestore,Br(this._delegate,k2(...e)))}catch(t){throw Un(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ln(this.firestore,Br(this._delegate,V2(...e)))}catch(t){throw Un(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ln(this.firestore,Br(this._delegate,M2(...e)))}catch(t){throw Un(t,"endAt()","Query.endAt()")}}isEqual(e){return m1(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=q2(this._delegate):(e==null?void 0:e.source)==="server"?t=j2(this._delegate):t=D1(this._delegate),t.then(i=>new ky(this.firestore,new pa(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)))}onSnapshot(...e){const t=BC(e),i=FC(e,s=>new ky(this.firestore,new pa(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return N1(this._delegate,t,i)}withConverter(e){return new Ln(this.firestore,e?this._delegate.withConverter(No.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class yF{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new xh(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ky{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Ln(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new xh(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new yF(this._firestore,t))}forEach(e,t){this._delegate.forEach(i=>{e.call(t,new xh(this._firestore,i))})}isEqual(e){return C1(this._delegate,e._delegate)}}class mu extends Ln{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new bi(this.firestore,e):null}doc(e){try{return e===void 0?new bi(this.firestore,Sh(this._delegate)):new bi(this.firestore,Sh(this._delegate,e))}catch(t){throw Un(t,"doc()","CollectionReference.doc()")}}add(e){return G2(this._delegate,e).then(t=>new bi(this.firestore,t))}isEqual(e){return f1(this._delegate,e._delegate)}withConverter(e){return new mu(this.firestore,e?this._delegate.withConverter(No.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function po(n){return Xe(n,wt)}/**
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
 */class EE{constructor(...e){this._delegate=new ma(...e)}static documentId(){return new EE(gt.keyField().canonicalString())}isEqual(e){return e=ve(e),e instanceof ma?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class co{static serverTimestamp(){const e=J2();return e._methodName="FieldValue.serverTimestamp",new co(e)}static delete(){const e=X2();return e._methodName="FieldValue.delete",new co(e)}static arrayUnion(...e){const t=Z2(...e);return t._methodName="FieldValue.arrayUnion",new co(t)}static arrayRemove(...e){const t=eL(...e);return t._methodName="FieldValue.arrayRemove",new co(t)}static increment(e){const t=tL(e);return t._methodName="FieldValue.increment",new co(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const vF={Firestore:MC,GeoPoint:qm,Timestamp:yt,Blob:VC,Transaction:LC,WriteBatch:UC,DocumentReference:bi,DocumentSnapshot:Ph,Query:Ln,QueryDocumentSnapshot:xh,QuerySnapshot:ky,CollectionReference:mu,FieldPath:EE,FieldValue:co,setLogLevel:_F,CACHE_SIZE_UNLIMITED:p2};function EF(n,e){n.INTERNAL.registerComponent(new Ri("firestore-compat",t=>{const i=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(i,s)},"PUBLIC").setServiceProps(Object.assign({},vF)))}/**
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
 */function TF(n){EF(n,(e,t)=>new MC(e,t,new gF)),n.registerVersion(fF,mF)}TF(Lo);/**
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
 */const zC="firebasestorage.googleapis.com",qC="storageBucket",wF=2*60*1e3,bF=10*60*1e3,IF=1e3;/**
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
 */class At extends Rn{constructor(e,t,i=0){super(j_(e),`Firebase Storage: ${t} (${j_(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,At.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return j_(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var dt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(dt||(dt={}));function j_(n){return"storage/"+n}function TE(){const n="An unknown error occurred, please check the error payload for server response.";return new At(dt.UNKNOWN,n)}function AF(n){return new At(dt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function RF(n){return new At(dt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function SF(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new At(dt.UNAUTHENTICATED,n)}function CF(){return new At(dt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function DF(n){return new At(dt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function jC(){return new At(dt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function HC(){return new At(dt.CANCELED,"User canceled the upload/download.")}function NF(n){return new At(dt.INVALID_URL,"Invalid URL '"+n+"'.")}function OF(n){return new At(dt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function PF(){return new At(dt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+qC+"' property when initializing the app?")}function GC(){return new At(dt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function xF(){return new At(dt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function kF(){return new At(dt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function VF(n){return new At(dt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Wl(n){return new At(dt.INVALID_ARGUMENT,n)}function KC(){return new At(dt.APP_DELETED,"The Firebase app was deleted.")}function $C(n){return new At(dt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ch(n,e){return new At(dt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Gc(n){throw new At(dt.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class An{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=An.makeFromUrl(e,t)}catch{return new An(e,"")}if(i.path==="")return i;throw OF(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function o(oe){oe.path.charAt(oe.path.length-1)==="/"&&(oe.path_=oe.path_.slice(0,-1))}const u="(/(.*))?$",h=new RegExp("^gs://"+s+u,"i"),m={bucket:1,path:3};function p(oe){oe.path_=decodeURIComponent(oe.path)}const y="v[A-Za-z0-9_]+",v=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",C=new RegExp(`^https?://${v}/${y}/b/${s}/o${w}`,"i"),M={bucket:1,path:3},q=t===zC?"(?:storage.googleapis.com|storage.cloud.google.com)":t,j="([^?#]*)",ie=new RegExp(`^https?://${q}/${s}/${j}`,"i"),J=[{regex:h,indices:m,postModify:o},{regex:C,indices:M,postModify:p},{regex:ie,indices:{bucket:1,path:2},postModify:p}];for(let oe=0;oe<J.length;oe++){const re=J[oe],me=re.regex.exec(e);if(me){const O=me[re.indices.bucket];let R=me[re.indices.path];R||(R=""),i=new An(O,R),re.postModify(i);break}}if(i==null)throw NF(e);return i}}class MF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function LF(n,e,t){let i=1,s=null,o=null,u=!1,h=0;function m(){return h===2}let p=!1;function y(...j){p||(p=!0,e.apply(null,j))}function v(j){s=setTimeout(()=>{s=null,n(C,m())},j)}function w(){o&&clearTimeout(o)}function C(j,...ie){if(p){w();return}if(j){w(),y.call(null,j,...ie);return}if(m()||u){w(),y.call(null,j,...ie);return}i<64&&(i*=2);let J;h===1?(h=2,J=0):J=(i+Math.random())*1e3,v(J)}let M=!1;function q(j){M||(M=!0,w(),!p&&(s!==null?(j||(h=2),clearTimeout(s),v(0)):j||(h=1)))}return v(0),o=setTimeout(()=>{u=!0,q(!0)},t),q}function UF(n){n(!1)}/**
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
 */function BF(n){return n!==void 0}function FF(n){return typeof n=="function"}function zF(n){return typeof n=="object"&&!Array.isArray(n)}function up(n){return typeof n=="string"||n instanceof String}function YI(n){return wE()&&n instanceof Blob}function wE(){return typeof Blob<"u"}function Vy(n,e,t,i){if(i<e)throw Wl(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Wl(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function wa(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function QC(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var Eo;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Eo||(Eo={}));/**
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
 */function WC(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,o=e.indexOf(n)!==-1;return t||s||o}/**
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
 */class qF{constructor(e,t,i,s,o,u,h,m,p,y,v,w=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=u,this.callback_=h,this.errorCallback_=m,this.timeout_=p,this.progressCallback_=y,this.connectionFactory_=v,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,M)=>{this.resolve_=C,this.reject_=M,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new xf(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const u=h=>{const m=h.loaded,p=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,p)};this.progressCallback_!==null&&o.addUploadProgressListener(u),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(u),this.pendingConnection_=null;const h=o.getErrorCode()===Eo.NO_ERROR,m=o.getStatus();if(!h||WC(m,this.additionalRetryCodes_)&&this.retry){const y=o.getErrorCode()===Eo.ABORT;i(!1,new xf(!1,null,y));return}const p=this.successCodes_.indexOf(m)!==-1;i(!0,new xf(p,o))})},t=(i,s)=>{const o=this.resolve_,u=this.reject_,h=s.connection;if(s.wasSuccessCode)try{const m=this.callback_(h,h.getResponse());BF(m)?o(m):o()}catch(m){u(m)}else if(h!==null){const m=TE();m.serverResponse=h.getErrorText(),this.errorCallback_?u(this.errorCallback_(h,m)):u(m)}else if(s.canceled){const m=this.appDelete_?KC():HC();u(m)}else{const m=jC();u(m)}};this.canceled_?t(!1,new xf(!1,null,!0)):this.backoffId_=LF(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&UF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xf{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function jF(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function HF(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function GF(n,e){e&&(n["X-Firebase-GMPID"]=e)}function KF(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function $F(n,e,t,i,s,o,u=!0){const h=QC(n.urlParams),m=n.url+h,p=Object.assign({},n.headers);return GF(p,e),jF(p,t),HF(p,o),KF(p,i),new qF(m,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,u)}/**
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
 */function QF(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function WF(...n){const e=QF();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(wE())return new Blob(n);throw new At(dt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function YF(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function XF(n){if(typeof atob>"u")throw VF("base-64");return atob(n)}/**
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
 */const Ii={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class H_{constructor(e,t){this.data=e,this.contentType=t||null}}function YC(n,e){switch(n){case Ii.RAW:return new H_(XC(e));case Ii.BASE64:case Ii.BASE64URL:return new H_(JC(n,e));case Ii.DATA_URL:return new H_(ZF(e),ez(e))}throw TE()}function XC(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const o=i,u=n.charCodeAt(++t);i=65536|(o&1023)<<10|u&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function JF(n){let e;try{e=decodeURIComponent(n)}catch{throw ch(Ii.DATA_URL,"Malformed data URL.")}return XC(e)}function JC(n,e){switch(n){case Ii.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw ch(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Ii.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw ch(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=XF(e)}catch(s){throw s.message.includes("polyfill")?s:ch(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class ZC{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ch(Ii.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=tz(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function ZF(n){const e=new ZC(n);return e.base64?JC(Ii.BASE64,e.rest):JF(e.rest)}function ez(n){return new ZC(n).contentType}function tz(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Fr{constructor(e,t){let i=0,s="";YI(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(YI(this.data_)){const i=this.data_,s=YF(i,e,t);return s===null?null:new Fr(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Fr(i,!0)}}static getBlob(...e){if(wE()){const t=e.map(i=>i instanceof Fr?i.data_:i);return new Fr(WF.apply(null,t))}else{const t=e.map(u=>up(u)?YC(Ii.RAW,u).data:u.data_);let i=0;t.forEach(u=>{i+=u.byteLength});const s=new Uint8Array(i);let o=0;return t.forEach(u=>{for(let h=0;h<u.length;h++)s[o++]=u[h]}),new Fr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function bE(n){let e;try{e=JSON.parse(n)}catch{return null}return zF(e)?e:null}/**
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
 */function nz(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function iz(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function eD(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function rz(n,e){return e}class Vn{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||rz}}let kf=null;function sz(n){return!up(n)||n.length<2?n:eD(n)}function cp(){if(kf)return kf;const n=[];n.push(new Vn("bucket")),n.push(new Vn("generation")),n.push(new Vn("metageneration")),n.push(new Vn("name","fullPath",!0));function e(o,u){return sz(u)}const t=new Vn("name");t.xform=e,n.push(t);function i(o,u){return u!==void 0?Number(u):u}const s=new Vn("size");return s.xform=i,n.push(s),n.push(new Vn("timeCreated")),n.push(new Vn("updated")),n.push(new Vn("md5Hash",null,!0)),n.push(new Vn("cacheControl",null,!0)),n.push(new Vn("contentDisposition",null,!0)),n.push(new Vn("contentEncoding",null,!0)),n.push(new Vn("contentLanguage",null,!0)),n.push(new Vn("contentType",null,!0)),n.push(new Vn("metadata","customMetadata",!0)),kf=n,kf}function az(n,e){function t(){const i=n.bucket,s=n.fullPath,o=new An(i,s);return e._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:t})}function oz(n,e,t){const i={};i.type="file";const s=t.length;for(let o=0;o<s;o++){const u=t[o];i[u.local]=u.xform(i,e[u.server])}return az(i,n),i}function tD(n,e,t){const i=bE(e);return i===null?null:oz(n,i,t)}function lz(n,e,t,i){const s=bE(e);if(s===null||!up(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const u=encodeURIComponent;return o.split(",").map(p=>{const y=n.bucket,v=n.fullPath,w="/b/"+u(y)+"/o/"+u(v),C=wa(w,t,i),M=QC({alt:"media",token:p});return C+M})[0]}function IE(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const o=e[s];o.writable&&(t[o.server]=n[o.local])}return JSON.stringify(t)}/**
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
 */const XI="prefixes",JI="items";function uz(n,e,t){const i={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[XI])for(const s of t[XI]){const o=s.replace(/\/$/,""),u=n._makeStorageReference(new An(e,o));i.prefixes.push(u)}if(t[JI])for(const s of t[JI]){const o=n._makeStorageReference(new An(e,s.name));i.items.push(o)}return i}function cz(n,e,t){const i=bE(t);return i===null?null:uz(n,e,i)}class us{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ur(n){if(!n)throw TE()}function hp(n,e){function t(i,s){const o=tD(n,s,e);return ur(o!==null),o}return t}function hz(n,e){function t(i,s){const o=cz(n,e,s);return ur(o!==null),o}return t}function dz(n,e){function t(i,s){const o=tD(n,s,e);return ur(o!==null),lz(o,s,n.host,n._protocol)}return t}function Du(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=CF():s=SF():t.getStatus()===402?s=RF(n.bucket):t.getStatus()===403?s=DF(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function dp(n){const e=Du(n);function t(i,s){let o=e(i,s);return i.getStatus()===404&&(o=AF(n.path)),o.serverResponse=s.serverResponse,o}return t}function nD(n,e,t){const i=e.fullServerUrl(),s=wa(i,n.host,n._protocol),o="GET",u=n.maxOperationRetryTime,h=new us(s,o,hp(n,t),u);return h.errorHandler=dp(e),h}function fz(n,e,t,i,s){const o={};e.isRoot?o.prefix="":o.prefix=e.path+"/",t.length>0&&(o.delimiter=t),i&&(o.pageToken=i),s&&(o.maxResults=s);const u=e.bucketOnlyServerUrl(),h=wa(u,n.host,n._protocol),m="GET",p=n.maxOperationRetryTime,y=new us(h,m,hz(n,e.bucket),p);return y.urlParams=o,y.errorHandler=Du(e),y}function mz(n,e,t){const i=e.fullServerUrl(),s=wa(i,n.host,n._protocol),o="GET",u=n.maxOperationRetryTime,h=new us(s,o,dz(n,t),u);return h.errorHandler=dp(e),h}function pz(n,e,t,i){const s=e.fullServerUrl(),o=wa(s,n.host,n._protocol),u="PATCH",h=IE(t,i),m={"Content-Type":"application/json; charset=utf-8"},p=n.maxOperationRetryTime,y=new us(o,u,hp(n,i),p);return y.headers=m,y.body=h,y.errorHandler=dp(e),y}function gz(n,e){const t=e.fullServerUrl(),i=wa(t,n.host,n._protocol),s="DELETE",o=n.maxOperationRetryTime;function u(m,p){}const h=new us(i,s,u,o);return h.successCodes=[200,204],h.errorHandler=dp(e),h}function _z(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function iD(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=_z(null,e)),i}function yz(n,e,t,i,s){const o=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function h(){let J="";for(let oe=0;oe<2;oe++)J=J+Math.random().toString().slice(2);return J}const m=h();u["Content-Type"]="multipart/related; boundary="+m;const p=iD(e,i,s),y=IE(p,t),v="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+m+`\r
Content-Type: `+p.contentType+`\r
\r
`,w=`\r
--`+m+"--",C=Fr.getBlob(v,i,w);if(C===null)throw GC();const M={name:p.fullPath},q=wa(o,n.host,n._protocol),j="POST",ie=n.maxUploadRetryTime,ae=new us(q,j,hp(n,t),ie);return ae.urlParams=M,ae.headers=u,ae.body=C.uploadData(),ae.errorHandler=Du(e),ae}class Em{constructor(e,t,i,s){this.current=e,this.total=t,this.finalized=!!i,this.metadata=s||null}}function AE(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{ur(!1)}return ur(!!t&&(e||["active"]).indexOf(t)!==-1),t}function vz(n,e,t,i,s){const o=e.bucketOnlyServerUrl(),u=iD(e,i,s),h={name:u.fullPath},m=wa(o,n.host,n._protocol),p="POST",y={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":u.contentType,"Content-Type":"application/json; charset=utf-8"},v=IE(u,t),w=n.maxUploadRetryTime;function C(q){AE(q);let j;try{j=q.getResponseHeader("X-Goog-Upload-URL")}catch{ur(!1)}return ur(up(j)),j}const M=new us(m,p,C,w);return M.urlParams=h,M.headers=y,M.body=v,M.errorHandler=Du(e),M}function Ez(n,e,t,i){const s={"X-Goog-Upload-Command":"query"};function o(p){const y=AE(p,["active","final"]);let v=null;try{v=p.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ur(!1)}v||ur(!1);const w=Number(v);return ur(!isNaN(w)),new Em(w,i.size(),y==="final")}const u="POST",h=n.maxUploadRetryTime,m=new us(t,u,o,h);return m.headers=s,m.errorHandler=Du(e),m}const ZI=256*1024;function Tz(n,e,t,i,s,o,u,h){const m=new Em(0,0);if(u?(m.current=u.current,m.total=u.total):(m.current=0,m.total=i.size()),i.size()!==m.total)throw xF();const p=m.total-m.current;let y=p;s>0&&(y=Math.min(y,s));const v=m.current,w=v+y;let C="";y===0?C="finalize":p===y?C="upload, finalize":C="upload";const M={"X-Goog-Upload-Command":C,"X-Goog-Upload-Offset":`${m.current}`},q=i.slice(v,w);if(q===null)throw GC();function j(oe,re){const me=AE(oe,["active","final"]),O=m.current+y,R=i.size();let A;return me==="final"?A=hp(e,o)(oe,re):A=null,new Em(O,R,me==="final",A)}const ie="POST",ae=e.maxUploadRetryTime,J=new us(t,ie,j,ae);return J.headers=M,J.body=q.uploadData(),J.progressCallback=h||null,J.errorHandler=Du(n),J}/**
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
 */const wz={STATE_CHANGED:"state_changed"},Bn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function G_(n){switch(n){case"running":case"pausing":case"canceling":return Bn.RUNNING;case"paused":return Bn.PAUSED;case"success":return Bn.SUCCESS;case"canceled":return Bn.CANCELED;case"error":return Bn.ERROR;default:return Bn.ERROR}}/**
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
 */class bz{constructor(e,t,i){if(FF(e)||t!=null||i!=null)this.next=e,this.error=t??void 0,this.complete=i??void 0;else{const o=e;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
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
 */function Vl(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class Iz{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Eo.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Eo.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Eo.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s){if(this.sent_)throw Gc("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Gc("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Gc("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Gc("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Gc("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Az extends Iz{initXhr(){this.xhr_.responseType="text"}}function ir(){return new Az}/**
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
 */class rD{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,i=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=i,this._mappings=cp(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(dt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(WC(s.status,[]))if(o)s=jC();else{this.sleepTime=Math.max(this.sleepTime*2,IF),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(dt.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,o)=>{this._resolve=s,this._reject=o,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,i])=>{switch(this._state){case"running":e(t,i);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const i=vz(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(i,ir,e,t);this._request=s,s.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,i)=>{const s=Ez(this._ref.storage,this._ref._location,e,this._blob),o=this._ref.storage._makeRequest(s,ir,t,i);this._request=o,o.getPromise().then(u=>{u=u,this._request=void 0,this._updateProgress(u.current),this._needToFetchStatus=!1,u.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=ZI*this._chunkMultiplier,t=new Em(this._transferred,this._blob.size()),i=this._uploadUrl;this._resolveToken((s,o)=>{let u;try{u=Tz(this._ref._location,this._ref.storage,i,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(m){this._error=m,this._transition("error");return}const h=this._ref.storage._makeRequest(u,ir,s,o,!1);this._request=h,h.getPromise().then(m=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(m.current),m.finalized?(this._metadata=m.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){ZI*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const i=nD(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(i,ir,e,t);this._request=s,s.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const i=yz(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(i,ir,e,t);this._request=s,s.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=HC(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=G_(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,i,s){const o=new bz(t||void 0,i||void 0,s||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(G_(this._state)){case Bn.SUCCESS:Vl(this._resolve.bind(null,this.snapshot))();break;case Bn.CANCELED:case Bn.ERROR:const t=this._reject;Vl(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(G_(this._state)){case Bn.RUNNING:case Bn.PAUSED:e.next&&Vl(e.next.bind(e,this.snapshot))();break;case Bn.SUCCESS:e.complete&&Vl(e.complete.bind(e))();break;case Bn.CANCELED:case Bn.ERROR:e.error&&Vl(e.error.bind(e,this._error))();break;default:e.error&&Vl(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Oo{constructor(e,t){this._service=e,t instanceof An?this._location=t:this._location=An.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Oo(e,t)}get root(){const e=new An(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return eD(this._location.path)}get storage(){return this._service}get parent(){const e=nz(this._location.path);if(e===null)return null;const t=new An(this._location.bucket,e);return new Oo(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw $C(e)}}function Rz(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new rD(n,new Fr(e),t)}function Sz(n){const e={prefixes:[],items:[]};return sD(n,e).then(()=>e)}async function sD(n,e,t){const s=await aD(n,{pageToken:t});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await sD(n,e,s.nextPageToken)}function aD(n,e){e!=null&&typeof e.maxResults=="number"&&Vy("options.maxResults",1,1e3,e.maxResults);const t=e||{},i=fz(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(i,ir)}function Cz(n){n._throwIfRoot("getMetadata");const e=nD(n.storage,n._location,cp());return n.storage.makeRequestWithTokens(e,ir)}function Dz(n,e){n._throwIfRoot("updateMetadata");const t=pz(n.storage,n._location,e,cp());return n.storage.makeRequestWithTokens(t,ir)}function Nz(n){n._throwIfRoot("getDownloadURL");const e=mz(n.storage,n._location,cp());return n.storage.makeRequestWithTokens(e,ir).then(t=>{if(t===null)throw kF();return t})}function Oz(n){n._throwIfRoot("deleteObject");const e=gz(n.storage,n._location);return n.storage.makeRequestWithTokens(e,ir)}function oD(n,e){const t=iz(n._location.path,e),i=new An(n._location.bucket,t);return new Oo(n.storage,i)}/**
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
 */function Pz(n){return/^[A-Za-z]+:\/\//.test(n)}function xz(n,e){return new Oo(n,e)}function lD(n,e){if(n instanceof RE){const t=n;if(t._bucket==null)throw PF();const i=new Oo(t,t._bucket);return e!=null?lD(i,e):i}else return e!==void 0?oD(n,e):n}function kz(n,e){if(e&&Pz(e)){if(n instanceof RE)return xz(n,e);throw Wl("To use ref(service, url), the first argument must be a Storage instance.")}else return lD(n,e)}function eA(n,e){const t=e==null?void 0:e[qC];return t==null?null:An.makeFromBucketSpec(t,n)}function Vz(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=i;s&&(n._overrideAuthToken=typeof s=="string"?s:$A(s,n.app.options.projectId))}class RE{constructor(e,t,i,s,o){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=zC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wF,this._maxUploadRetryTime=bF,this._requests=new Set,s!=null?this._bucket=An.makeFromBucketSpec(s,this._host):this._bucket=eA(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=An.makeFromBucketSpec(this._url,e):this._bucket=eA(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Oo(this,e)}_makeRequest(e,t,i,s,o=!0){if(this._deleted)return new MF(KC());{const u=$F(e,this._appId,i,s,t,this._firebaseVersion,o);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const tA="@firebase/storage",nA="0.13.4";/**
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
 */const uD="storage";function Mz(n,e,t){return n=ve(n),Rz(n,e,t)}function Lz(n){return n=ve(n),Cz(n)}function Uz(n,e){return n=ve(n),Dz(n,e)}function Bz(n,e){return n=ve(n),aD(n,e)}function Fz(n){return n=ve(n),Sz(n)}function zz(n){return n=ve(n),Nz(n)}function qz(n){return n=ve(n),Oz(n)}function iA(n,e){return n=ve(n),kz(n,e)}function jz(n,e){return oD(n,e)}function Hz(n=Sm(),e){n=ve(n);const i=_u(n,uD).getImmediate({identifier:e}),s=HA("storage");return s&&cD(i,...s),i}function cD(n,e,t,i={}){Vz(n,e,t,i)}function Gz(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new RE(t,i,s,e,ns)}function Kz(){Yr(new Ri(uD,Gz,"PUBLIC").setMultipleInstances(!0)),ri(tA,nA,""),ri(tA,nA,"esm2017")}Kz();/**
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
 */class Vf{constructor(e,t,i){this._delegate=e,this.task=t,this.ref=i}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class rA{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Vf(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(i=>{if(e)return e(new Vf(i,this,this._ref))},t)}on(e,t,i,s){let o;return t&&(typeof t=="function"?o=u=>t(new Vf(u,this,this._ref)):o={next:t.next?u=>t.next(new Vf(u,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,o,i||void 0,s||void 0)}}class sA{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new $r(e,this._service))}get items(){return this._delegate.items.map(e=>new $r(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=jz(this._delegate,e);return new $r(t,this.storage)}get root(){return new $r(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new $r(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new rA(Mz(this._delegate,e,t),this)}putString(e,t=Ii.RAW,i){this._throwIfRoot("putString");const s=YC(t,e),o=Object.assign({},i);return o.contentType==null&&s.contentType!=null&&(o.contentType=s.contentType),new rA(new rD(this._delegate,new Fr(s.data,!0),o),this)}listAll(){return Fz(this._delegate).then(e=>new sA(e,this.storage))}list(e){return Bz(this._delegate,e||void 0).then(t=>new sA(t,this.storage))}getMetadata(){return Lz(this._delegate)}updateMetadata(e){return Uz(this._delegate,e)}getDownloadURL(){return zz(this._delegate)}delete(){return this._throwIfRoot("delete"),qz(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw $C(e)}}/**
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
 */class hD{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(aA(e))throw Wl("ref() expected a child path but got a URL, use refFromURL instead.");return new $r(iA(this._delegate,e),this)}refFromURL(e){if(!aA(e))throw Wl("refFromURL() expected a full URL but got a child path, use ref() instead.");try{An.makeFromUrl(e,this._delegate.host)}catch{throw Wl("refFromUrl() expected a valid full URL but got an invalid one.")}return new $r(iA(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,i={}){cD(this._delegate,e,t,i)}}function aA(n){return/^[A-Za-z]+:\/\//.test(n)}const $z="@firebase/storage-compat",Qz="0.3.14";/**
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
 */const Wz="storage-compat";function Yz(n,{instanceIdentifier:e}){const t=n.getProvider("app-compat").getImmediate(),i=n.getProvider("storage").getImmediate({identifier:e});return new hD(t,i)}function Xz(n){const e={TaskState:Bn,TaskEvent:wz,StringFormat:Ii,Storage:hD,Reference:$r};n.INTERNAL.registerComponent(new Ri(Wz,Yz,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),n.registerVersion($z,Qz)}Xz(Lo);const SE=Lo.initializeApp({apiKey:"AIzaSyDxFuYvYPsm53Q_5uvq5GZmy9qefOi7t_U",authDomain:"trip-advisor-2759d.firebaseapp.com",projectId:"trip-advisor-2759d",storageBucket:"trip-advisor-2759d.appspot.com",messagingSenderId:"756306939148",appId:"1:756306939148:web:362df3149468ebde6f8d29",measurementId:"G-5SLMPW8877"}),CE=b4(SE),oA=g2(SE);Hz(SE);const DE=G.createContext(),Jz=n=>{const[e,t]=G.useState([]),[i,s]=G.useState(!1),o=Br(Uv(oA,"orders"),A1("takenByCustomer","==",i)),[u,h]=G.useState(!0);G.useEffect(()=>{D1(o).then(p=>{p.size===0&&console.log("No results!");const y=p.docs.map(v=>({id:v.id,...v.data()}));t(y)}).catch(p=>{console.log("Error searching items",p)})},[u]);const m=async(p,y)=>{const v=Sh(oA,"orders",p);try{await by(v,y)}catch(w){console.error(w)}};return K.jsx(DE.Provider,{value:{items:e,UpdateById:m,setToggle:h,toggle:u,toggleOrders:i,setToggleOrders:s},children:n.children})},Zz=({items:n,UpdateById:e,UpdateByIdInventario:t})=>{const{deleteById:i,setToggle:s,toggle:o,toggleOrders:u,setToggleOrders:h,itemsInventario:m}=G.useContext(DE);G.useState("");let p=new Date;p.setHours(p.getHours());const y=(w,C)=>{const M=C;M.takenByCustomer=!0,e(w,M),s(!o)},v=()=>{h(!u),s(!o)};return K.jsxs("div",{className:"card p-4",children:[K.jsx("h3",{className:"text-white mb-4",children:"ORDENES DE HERMOSILLO"}),K.jsxs("button",{className:"btn btn-info ",onClick:v,children:[" ",u?"Entregados":"Por Entregar"," "]}),n.map((w,C)=>K.jsxs("div",{className:"item",children:[K.jsx("hr",{}),K.jsxs("div",{className:"texto",children:[K.jsxs("h3",{children:["Comprador: ",w.buyer.name]}),K.jsxs("p",{children:["Fecha de Compra:"," ",new Date(w.date).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"})]}),w.items.map((M,q)=>K.jsxs("b",{children:["Cantidad: ",M.quantity," ",K.jsx("br",{}),"Codigo: ",M.codigo," ",K.jsx("br",{}),K.jsx("hr",{})]},q)),K.jsx("br",{}),K.jsxs("p",{children:["Correo: ",w.buyer.email]}),K.jsxs("p",{children:["Celular: ",w.buyer.phone]}),K.jsxs("p",{className:"m-0",children:["Total: ",w.total]}),K.jsx("br",{})]}),K.jsx("br",{}),K.jsx("button",{disabled:w.takenByCustomer===!0,className:w.takenByCustomer===!0?"btn btn-outline-primary mt-0":"btn btn-primary mt-4",onClick:()=>y(w.id,w),children:w.takenByCustomer?"Entregado":"Marcar como Entregada"}),K.jsx("hr",{})]},C))]})},td=G.createContext(),eq=n=>{const e=async(u,h,m)=>{try{await uC(u,h,m),s(u,h,m)}catch(p){console.error("code.error",p.code);const y={"auth/email-already-in-use":()=>alert("El Correo ya esta en Uso"),"auth/operation-not-allowed":()=>alert("Operacion No Permitida."),"auth/weak-password":()=>alert("La contraseña es muy débil."),"auth/invalid-email":()=>alert("El Correo No es Valido")};(w=>{y[w]()})(p.code)}},[t,i]=G.useState(!0),s=(u,h,m)=>{cC(u,h,m).then(p=>{const y=p.user;localStorage.setItem("userEmailLS",y.email),i(!t),location.reload()}).catch(p=>{console.log(p.code),console.log(p.message);const y={"auth/invalid-credential":()=>alert("Contraseña o Correo son Incorrrectos"),"auth/operation-not-allowed":()=>alert("Operacion No Permitida."),"auth/user-not-found":()=>alert("Usuario No Encontrado."),"auth/invalid-email":()=>alert("El Correo No es Valido"),"auth/wrong-password":()=>alert("Contraseña Incorrecta")};(w=>{y[w]()})(p.code)})},o=()=>{QU(CE),localStorage.removeItem("userEmailLS"),i(!t)};return K.jsx(td.Provider,{value:{register:e,login:s,logout:o,stateLogout:t},children:n.children})},tq=()=>{const{items:n,UpdateById:e,UpdateByIdInventario:t}=G.useContext(DE),{stateLogout:i}=G.useContext(td);return console.log(n),K.jsx("div",{className:"",children:i?K.jsx("div",{className:"",children:localStorage.getItem("userEmailLS")!==null?K.jsx(Zz,{items:n,UpdateById:e,UpdateByIdInventario:t},Date.now()):K.jsx("p",{children:" "})}):""})},nq=()=>{const{login:n}=G.useContext(td),[e,t]=G.useState(!1),i=G.useRef(),s=G.useRef(),o=()=>t(!0),u=()=>t(!1),h=m=>{m.preventDefault(),localStorage.removeItem("Done"),n(CE,i.current.value,s.current.value),u()};return K.jsxs(K.Fragment,{children:[K.jsx("div",{onClick:o,className:"btn btn-outline-primary mx-2",children:"Entrar"}),K.jsx(Ji,{centered:!0,show:e,onHide:u,children:K.jsxs("form",{onSubmit:h,children:[K.jsx(Ji.Header,{children:K.jsx(Ji.Title,{children:"Entrar"})}),K.jsxs(Ji.Body,{children:[K.jsxs(Mn.Group,{children:[K.jsx(Mn.Label,{children:"Email "}),K.jsx(Mn.Control,{type:"email",required:!0,ref:i})]}),K.jsxs(Mn.Group,{children:[K.jsx(Mn.Label,{children:"Password"}),K.jsx(Mn.Control,{type:"password",required:!0,ref:s})]})]}),K.jsxs(Ji.Footer,{children:[K.jsx(dh,{variant:"secondary",onClick:u,children:" Cancelar "}),K.jsx(dh,{variant:"primary",type:"submit",children:"         Entrar "})]})]})})]})},iq=()=>{const{register:n}=G.useContext(td),[e,t]=G.useState(!1),[i,s]=G.useState(""),o=G.useRef(),u=G.useRef(),h=G.useRef(),m=()=>t(!0),p=()=>{s(""),t(!1)},y=async v=>{if(v.preventDefault(),s(""),u.current.value!==h.current.value)return s("Claves No son iguales.");if(u.current.value.length<6)return s("Claves es muy corta Use 6 caracteres Minimo");n(CE,o.current.value,u.current.value),p()};return K.jsxs(K.Fragment,{children:[K.jsx("div",{onClick:m,className:"btn btn-outline-primary mx-2 d-none",children:"Registro"}),K.jsx(Ji,{centered:!0,show:e,onHide:p,children:K.jsxs("form",{onSubmit:y,children:[K.jsx(Ji.Header,{children:K.jsx(Ji.Title,{children:"Registro"})}),K.jsxs(Ji.Body,{children:[i&&K.jsx(qO,{variant:"danger",children:i}),K.jsxs(Mn.Group,{children:[K.jsx(Mn.Label,{children:"Email"}),K.jsx(Mn.Control,{type:"email",required:!0,ref:o})]}),K.jsxs(Mn.Group,{children:[K.jsx(Mn.Label,{children:"Password"}),K.jsx(Mn.Control,{type:"password",required:!0,ref:u})]}),K.jsxs(Mn.Group,{children:[K.jsx(Mn.Label,{children:"Confirmar Password"}),K.jsx(Mn.Control,{type:"password",required:!0,ref:h})]})]}),K.jsxs(Ji.Footer,{children:[K.jsx(dh,{variant:"secondary",onClick:p,children:" Cancelar "}),K.jsx(dh,{variant:"primary",type:"submit",children:" Registro "})]})]})})]})},rq=()=>{const{logout:n,stateLogout:e}=G.useContext(td);return K.jsxs("nav",{className:"container w-100",children:[K.jsx("div",{className:"w-100 border-bottom pt-1",children:K.jsx("div",{className:"mb-4 d-flex justify-content-between",children:localStorage.getItem("userEmailLS")!==null?K.jsxs(K.Fragment,{children:[K.jsx("div",{className:"btn btn-primary mx-2 disabled",children:localStorage.getItem("userEmailLS")}),K.jsx("div",{onClick:()=>{window.confirm("Quieres Salir?")&&n()},className:"btn btn-outline-danger mx-2",children:"SALIR"})]}):K.jsxs(K.Fragment,{children:[K.jsx(nq,{}),K.jsx(iq,{})]})})}),K.jsx("div",{className:"w-100 d-flex justify-content-center",children:K.jsxs("div",{className:"navbar-brand mb-4 text-center",children:[K.jsx("h2",{className:"",children:"VENTAS ECOMMERCE"}),K.jsx("h3",{children:"PROVIMEX"})]})})]})},sq=()=>K.jsx(K.Fragment,{children:K.jsx(eq,{children:K.jsxs(Jz,{children:[K.jsx(rq,{}),K.jsx(tq,{})]})})});GN.createRoot(document.getElementById("root")).render(K.jsx(sq,{}));
