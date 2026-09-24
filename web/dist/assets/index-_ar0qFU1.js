(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function rx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ud={exports:{}},Mo={},Od={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function sx(){if(wg)return xt;wg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),f=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=f&&U[f]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function S(U,ne,Be){this.props=U,this.context=ne,this.refs=b,this.updater=Be||M}S.prototype.isReactComponent={},S.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=S.prototype;function T(U,ne,Be){this.props=U,this.context=ne,this.refs=b,this.updater=Be||M}var C=T.prototype=new y;C.constructor=T,w(C,S.prototype),C.isPureReactComponent=!0;var R=Array.isArray,Y=Object.prototype.hasOwnProperty,j={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function W(U,ne,Be){var Z,he={},be=null,ge=null;if(ne!=null)for(Z in ne.ref!==void 0&&(ge=ne.ref),ne.key!==void 0&&(be=""+ne.key),ne)Y.call(ne,Z)&&!F.hasOwnProperty(Z)&&(he[Z]=ne[Z]);var Ne=arguments.length-2;if(Ne===1)he.children=Be;else if(1<Ne){for(var je=Array(Ne),Je=0;Je<Ne;Je++)je[Je]=arguments[Je+2];he.children=je}if(U&&U.defaultProps)for(Z in Ne=U.defaultProps,Ne)he[Z]===void 0&&(he[Z]=Ne[Z]);return{$$typeof:r,type:U,key:be,ref:ge,props:he,_owner:j.current}}function D(U,ne){return{$$typeof:r,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function N(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function B(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Be){return ne[Be]})}var ue=/\/+/g;function Q(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):ne.toString(36)}function le(U,ne,Be,Z,he){var be=typeof U;(be==="undefined"||be==="boolean")&&(U=null);var ge=!1;if(U===null)ge=!0;else switch(be){case"string":case"number":ge=!0;break;case"object":switch(U.$$typeof){case r:case e:ge=!0}}if(ge)return ge=U,he=he(ge),U=Z===""?"."+Q(ge,0):Z,R(he)?(Be="",U!=null&&(Be=U.replace(ue,"$&/")+"/"),le(he,ne,Be,"",function(Je){return Je})):he!=null&&(N(he)&&(he=D(he,Be+(!he.key||ge&&ge.key===he.key?"":(""+he.key).replace(ue,"$&/")+"/")+U)),ne.push(he)),1;if(ge=0,Z=Z===""?".":Z+":",R(U))for(var Ne=0;Ne<U.length;Ne++){be=U[Ne];var je=Z+Q(be,Ne);ge+=le(be,ne,Be,je,he)}else if(je=_(U),typeof je=="function")for(U=je.call(U),Ne=0;!(be=U.next()).done;)be=be.value,je=Z+Q(be,Ne++),ge+=le(be,ne,Be,je,he);else if(be==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ge}function pe(U,ne,Be){if(U==null)return U;var Z=[],he=0;return le(U,Z,"","",function(be){return ne.call(Be,be,he++)}),Z}function se(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(Be){(U._status===0||U._status===-1)&&(U._status=1,U._result=Be)},function(Be){(U._status===0||U._status===-1)&&(U._status=2,U._result=Be)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var ce={current:null},H={transition:null},oe={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:H,ReactCurrentOwner:j};function re(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:pe,forEach:function(U,ne,Be){pe(U,function(){ne.apply(this,arguments)},Be)},count:function(U){var ne=0;return pe(U,function(){ne++}),ne},toArray:function(U){return pe(U,function(ne){return ne})||[]},only:function(U){if(!N(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},xt.Component=S,xt.Fragment=t,xt.Profiler=a,xt.PureComponent=T,xt.StrictMode=i,xt.Suspense=h,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,xt.act=re,xt.cloneElement=function(U,ne,Be){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Z=w({},U.props),he=U.key,be=U.ref,ge=U._owner;if(ne!=null){if(ne.ref!==void 0&&(be=ne.ref,ge=j.current),ne.key!==void 0&&(he=""+ne.key),U.type&&U.type.defaultProps)var Ne=U.type.defaultProps;for(je in ne)Y.call(ne,je)&&!F.hasOwnProperty(je)&&(Z[je]=ne[je]===void 0&&Ne!==void 0?Ne[je]:ne[je])}var je=arguments.length-2;if(je===1)Z.children=Be;else if(1<je){Ne=Array(je);for(var Je=0;Je<je;Je++)Ne[Je]=arguments[Je+2];Z.children=Ne}return{$$typeof:r,type:U.type,key:he,ref:be,props:Z,_owner:ge}},xt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:o,_context:U},U.Consumer=U},xt.createElement=W,xt.createFactory=function(U){var ne=W.bind(null,U);return ne.type=U,ne},xt.createRef=function(){return{current:null}},xt.forwardRef=function(U){return{$$typeof:u,render:U}},xt.isValidElement=N,xt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:se}},xt.memo=function(U,ne){return{$$typeof:p,type:U,compare:ne===void 0?null:ne}},xt.startTransition=function(U){var ne=H.transition;H.transition={};try{U()}finally{H.transition=ne}},xt.unstable_act=re,xt.useCallback=function(U,ne){return ce.current.useCallback(U,ne)},xt.useContext=function(U){return ce.current.useContext(U)},xt.useDebugValue=function(){},xt.useDeferredValue=function(U){return ce.current.useDeferredValue(U)},xt.useEffect=function(U,ne){return ce.current.useEffect(U,ne)},xt.useId=function(){return ce.current.useId()},xt.useImperativeHandle=function(U,ne,Be){return ce.current.useImperativeHandle(U,ne,Be)},xt.useInsertionEffect=function(U,ne){return ce.current.useInsertionEffect(U,ne)},xt.useLayoutEffect=function(U,ne){return ce.current.useLayoutEffect(U,ne)},xt.useMemo=function(U,ne){return ce.current.useMemo(U,ne)},xt.useReducer=function(U,ne,Be){return ce.current.useReducer(U,ne,Be)},xt.useRef=function(U){return ce.current.useRef(U)},xt.useState=function(U){return ce.current.useState(U)},xt.useSyncExternalStore=function(U,ne,Be){return ce.current.useSyncExternalStore(U,ne,Be)},xt.useTransition=function(){return ce.current.useTransition()},xt.version="18.3.1",xt}var Eg;function Cf(){return Eg||(Eg=1,Od.exports=sx()),Od.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function ax(){if(bg)return Mo;bg=1;var r=Cf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,p){var g,f={},_=null,M=null;p!==void 0&&(_=""+p),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(M=h.ref);for(g in h)i.call(h,g)&&!o.hasOwnProperty(g)&&(f[g]=h[g]);if(u&&u.defaultProps)for(g in h=u.defaultProps,h)f[g]===void 0&&(f[g]=h[g]);return{$$typeof:e,type:u,key:_,ref:M,props:f,_owner:a.current}}return Mo.Fragment=t,Mo.jsx=c,Mo.jsxs=c,Mo}var Tg;function ox(){return Tg||(Tg=1,Ud.exports=ax()),Ud.exports}var m=ox(),Jl={},Fd={exports:{}},Wn={},Bd={exports:{}},zd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function lx(){return Ag||(Ag=1,(function(r){function e(H,oe){var re=H.length;H.push(oe);e:for(;0<re;){var U=re-1>>>1,ne=H[U];if(0<a(ne,oe))H[U]=oe,H[re]=ne,re=U;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var oe=H[0],re=H.pop();if(re!==oe){H[0]=re;e:for(var U=0,ne=H.length,Be=ne>>>1;U<Be;){var Z=2*(U+1)-1,he=H[Z],be=Z+1,ge=H[be];if(0>a(he,re))be<ne&&0>a(ge,he)?(H[U]=ge,H[be]=re,U=be):(H[U]=he,H[Z]=re,U=Z);else if(be<ne&&0>a(ge,re))H[U]=ge,H[be]=re,U=be;else break e}}return oe}function a(H,oe){var re=H.sortIndex-oe.sortIndex;return re!==0?re:H.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;r.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();r.unstable_now=function(){return c.now()-u}}var h=[],p=[],g=1,f=null,_=3,M=!1,w=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(H){for(var oe=t(p);oe!==null;){if(oe.callback===null)i(p);else if(oe.startTime<=H)i(p),oe.sortIndex=oe.expirationTime,e(h,oe);else break;oe=t(p)}}function R(H){if(b=!1,C(H),!w)if(t(h)!==null)w=!0,se(Y);else{var oe=t(p);oe!==null&&ce(R,oe.startTime-H)}}function Y(H,oe){w=!1,b&&(b=!1,y(W),W=-1),M=!0;var re=_;try{for(C(oe),f=t(h);f!==null&&(!(f.expirationTime>oe)||H&&!B());){var U=f.callback;if(typeof U=="function"){f.callback=null,_=f.priorityLevel;var ne=U(f.expirationTime<=oe);oe=r.unstable_now(),typeof ne=="function"?f.callback=ne:f===t(h)&&i(h),C(oe)}else i(h);f=t(h)}if(f!==null)var Be=!0;else{var Z=t(p);Z!==null&&ce(R,Z.startTime-oe),Be=!1}return Be}finally{f=null,_=re,M=!1}}var j=!1,F=null,W=-1,D=5,N=-1;function B(){return!(r.unstable_now()-N<D)}function ue(){if(F!==null){var H=r.unstable_now();N=H;var oe=!0;try{oe=F(!0,H)}finally{oe?Q():(j=!1,F=null)}}else j=!1}var Q;if(typeof T=="function")Q=function(){T(ue)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,pe=le.port2;le.port1.onmessage=ue,Q=function(){pe.postMessage(null)}}else Q=function(){S(ue,0)};function se(H){F=H,j||(j=!0,Q())}function ce(H,oe){W=S(function(){H(r.unstable_now())},oe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_continueExecution=function(){w||M||(w=!0,se(Y))},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(H){switch(_){case 1:case 2:case 3:var oe=3;break;default:oe=_}var re=_;_=oe;try{return H()}finally{_=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(H,oe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var re=_;_=H;try{return oe()}finally{_=re}},r.unstable_scheduleCallback=function(H,oe,re){var U=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,H){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,H={id:g++,callback:oe,priorityLevel:H,startTime:re,expirationTime:ne,sortIndex:-1},re>U?(H.sortIndex=re,e(p,H),t(h)===null&&H===t(p)&&(b?(y(W),W=-1):b=!0,ce(R,re-U))):(H.sortIndex=ne,e(h,H),w||M||(w=!0,se(Y))),H},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(H){var oe=_;return function(){var re=_;_=oe;try{return H.apply(this,arguments)}finally{_=re}}}})(zd)),zd}var Rg;function cx(){return Rg||(Rg=1,Bd.exports=lx()),Bd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function ux(){if(Cg)return Wn;Cg=1;var r=Cf(),e=cx();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function o(n,s){c(n,s),c(n+"Capture",s)}function c(n,s){for(a[n]=s,n=0;n<s.length;n++)i.add(s[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},f={};function _(n){return h.call(f,n)?!0:h.call(g,n)?!1:p.test(n)?f[n]=!0:(g[n]=!0,!1)}function M(n,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,s,l,d){if(s===null||typeof s>"u"||M(n,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function b(n,s,l,d,v,x,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=v,this.mustUseProperty=l,this.propertyName=n,this.type=s,this.sanitizeURL=x,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];S[s]=new b(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function T(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(y,T);S[s]=new b(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(y,T);S[s]=new b(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(y,T);S[s]=new b(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,s,l,d){var v=S.hasOwnProperty(s)?S[s]:null;(v!==null?v.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(w(s,l,v,d)&&(l=null),d||v===null?_(s)&&(l===null?n.removeAttribute(s):n.setAttribute(s,""+l)):v.mustUseProperty?n[v.propertyName]=l===null?v.type===3?!1:"":l:(s=v.attributeName,d=v.attributeNamespace,l===null?n.removeAttribute(s):(v=v.type,l=v===3||v===4&&l===!0?"":""+l,d?n.setAttributeNS(d,s,l):n.setAttribute(s,l))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),j=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),B=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),H=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,U;function ne(n){if(U===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+n}var Be=!1;function Z(n,s){if(!n||Be)return"";Be=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ee){var d=ee}Reflect.construct(n,[],s)}else{try{s.call()}catch(ee){d=ee}n.call(s.prototype)}else{try{throw Error()}catch(ee){d=ee}n()}}catch(ee){if(ee&&d&&typeof ee.stack=="string"){for(var v=ee.stack.split(`
`),x=d.stack.split(`
`),E=v.length-1,I=x.length-1;1<=E&&0<=I&&v[E]!==x[I];)I--;for(;1<=E&&0<=I;E--,I--)if(v[E]!==x[I]){if(E!==1||I!==1)do if(E--,I--,0>I||v[E]!==x[I]){var z=`
`+v[E].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=E&&0<=I);break}}}finally{Be=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ne(n):""}function he(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function be(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case j:return"Portal";case D:return"Profiler";case W:return"StrictMode";case Q:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case ue:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return s=n.displayName||null,s!==null?s:be(n.type)||"Memo";case se:s=n._payload,n=n._init;try{return be(n(s))}catch{}}return null}function ge(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(s);case 8:return s===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ne(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function je(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Je(n){var s=je(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),d=""+n[s];if(!n.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var v=l.get,x=l.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return v.call(this)},set:function(E){d=""+E,x.call(this,E)}}),Object.defineProperty(n,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(E){d=""+E},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function yt(n){n._valueTracker||(n._valueTracker=Je(n))}function ve(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return n&&(d=je(n)?n.checked?"true":"false":n.value),n=d,n!==l?(s.setValue(n),!0):!1}function Ae(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function k(n,s){var l=s.checked;return re({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Ze(n,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=Ne(s.value!=null?s.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Me(n,s){s=s.checked,s!=null&&C(n,"checked",s,!1)}function He(n,s){Me(n,s);var l=Ne(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?it(n,s.type,l):s.hasOwnProperty("defaultValue")&&it(n,s.type,Ne(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Le(n,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,l||s===n.value||(n.value=s),n.defaultValue=s}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function it(n,s,l){(s!=="number"||Ae(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Oe=Array.isArray;function L(n,s,l,d){if(n=n.options,s){s={};for(var v=0;v<l.length;v++)s["$"+l[v]]=!0;for(l=0;l<n.length;l++)v=s.hasOwnProperty("$"+n[l].value),n[l].selected!==v&&(n[l].selected=v),v&&d&&(n[l].defaultSelected=!0)}else{for(l=""+Ne(l),s=null,v=0;v<n.length;v++){if(n[v].value===l){n[v].selected=!0,d&&(n[v].defaultSelected=!0);return}s!==null||n[v].disabled||(s=n[v])}s!==null&&(s.selected=!0)}}function A(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function K(n,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Oe(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}n._wrapperState={initialValue:Ne(l)}}function de(n,s){var l=Ne(s.value),d=Ne(s.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),s.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function ye(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qe(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ie,Ve=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,v){MSApp.execUnsafeLocalFunction(function(){return n(s,l,d,v)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function pt(n,s){if(s){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=s;return}}n.textContent=s}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(n){We.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),we[s]=we[n]})});function at(n,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||we.hasOwnProperty(n)&&we[n]?(""+s).trim():s+"px"}function ot(n,s){n=n.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,v=at(l,s[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,v):n[l]=v}}var $e=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _t(n,s){if(s){if($e[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ht(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ke=null,ae=null,me=null;function Fe(n){if(n=ao(n)){if(typeof ke!="function")throw Error(t(280));var s=n.stateNode;s&&(s=hl(s),ke(n.stateNode,n.type,s))}}function Ue(n){ae?me?me.push(n):me=[n]:ae=n}function ft(){if(ae){var n=ae,s=me;if(me=ae=null,Fe(n),s)for(n=0;n<s.length;n++)Fe(s[n])}}function jt(n,s){return n(s)}function Qt(){}var bt=!1;function Fn(n,s,l){if(bt)return n(s,l);bt=!0;try{return jt(n,s,l)}finally{bt=!1,(ae!==null||me!==null)&&(Qt(),ft())}}function Nn(n,s){var l=n.stateNode;if(l===null)return null;var d=hl(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var ks=!1;if(u)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){ks=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{ks=!1}function Yi(n,s,l,d,v,x,E,I,z){var ee=Array.prototype.slice.call(arguments,3);try{s.apply(l,ee)}catch(xe){this.onError(xe)}}var Ki=!1,ts=null,ns=!1,yr=null,$o={onError:function(n){Ki=!0,ts=n}};function Us(n,s,l,d,v,x,E,I,z){Ki=!1,ts=null,Yi.apply($o,arguments)}function Xo(n,s,l,d,v,x,E,I,z){if(Us.apply(this,arguments),Ki){if(Ki){var ee=ts;Ki=!1,ts=null}else throw Error(t(198));ns||(ns=!0,yr=ee)}}function Li(n){var s=n,l=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(l=s.return),n=s.return;while(n)}return s.tag===3?l:null}function qo(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Yo(n){if(Li(n)!==n)throw Error(t(188))}function ru(n){var s=n.alternate;if(!s){if(s=Li(n),s===null)throw Error(t(188));return s!==n?null:n}for(var l=n,d=s;;){var v=l.return;if(v===null)break;var x=v.alternate;if(x===null){if(d=v.return,d!==null){l=d;continue}break}if(v.child===x.child){for(x=v.child;x;){if(x===l)return Yo(v),n;if(x===d)return Yo(v),s;x=x.sibling}throw Error(t(188))}if(l.return!==d.return)l=v,d=x;else{for(var E=!1,I=v.child;I;){if(I===l){E=!0,l=v,d=x;break}if(I===d){E=!0,d=v,l=x;break}I=I.sibling}if(!E){for(I=x.child;I;){if(I===l){E=!0,l=x,d=v;break}if(I===d){E=!0,d=x,l=v;break}I=I.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:s}function P(n){return n=ru(n),n!==null?$(n):null}function $(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=$(n);if(s!==null)return s;n=n.sibling}return null}var te=e.unstable_scheduleCallback,ie=e.unstable_cancelCallback,X=e.unstable_shouldYield,Ce=e.unstable_requestPaint,Te=e.unstable_now,Qe=e.unstable_getCurrentPriorityLevel,Ye=e.unstable_ImmediatePriority,ct=e.unstable_UserBlockingPriority,dt=e.unstable_NormalPriority,et=e.unstable_LowPriority,wt=e.unstable_IdlePriority,Nt=null,St=null;function Mn(n){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Nt,n,void 0,(n.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:Ct,nt=Math.log,gi=Math.LN2;function Ct(n){return n>>>=0,n===0?32:31-(nt(n)/gi|0)|0}var wn=64,vi=4194304;function en(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Di(n,s){var l=n.pendingLanes;if(l===0)return 0;var d=0,v=n.suspendedLanes,x=n.pingedLanes,E=l&268435455;if(E!==0){var I=E&~v;I!==0?d=en(I):(x&=E,x!==0&&(d=en(x)))}else E=l&~v,E!==0?d=en(E):x!==0&&(d=en(x));if(d===0)return 0;if(s!==0&&s!==d&&(s&v)===0&&(v=d&-d,x=s&-s,v>=x||v===16&&(x&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=d;0<s;)l=31-mt(s),v=1<<l,d|=n[l],s&=~v;return d}function Ot(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function si(n,s){for(var l=n.suspendedLanes,d=n.pingedLanes,v=n.expirationTimes,x=n.pendingLanes;0<x;){var E=31-mt(x),I=1<<E,z=v[E];z===-1?((I&l)===0||(I&d)!==0)&&(v[E]=Ot(I,s)):z<=s&&(n.expiredLanes|=I),x&=~I}}function Ji(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ln(){var n=wn;return wn<<=1,(wn&4194240)===0&&(wn=64),n}function ai(n){for(var s=[],l=0;31>l;l++)s.push(n);return s}function Bn(n,s,l){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-mt(s),n[s]=l}function Ko(n,s){var l=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var v=31-mt(l),x=1<<v;s[v]=0,d[v]=-1,n[v]=-1,l&=~x}}function su(n,s){var l=n.entangledLanes|=s;for(n=n.entanglements;l;){var d=31-mt(l),v=1<<d;v&s|n[d]&s&&(n[d]|=s),l&=~v}}var Dt=0;function tp(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var np,au,ip,rp,sp,ou=!1,Jo=[],_r=null,xr=null,Sr=null,Ga=new Map,Wa=new Map,Mr=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ap(n,s){switch(n){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Ga.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(s.pointerId)}}function $a(n,s,l,d,v,x){return n===null||n.nativeEvent!==x?(n={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:x,targetContainers:[v]},s!==null&&(s=ao(s),s!==null&&au(s)),n):(n.eventSystemFlags|=d,s=n.targetContainers,v!==null&&s.indexOf(v)===-1&&s.push(v),n)}function Ay(n,s,l,d,v){switch(s){case"focusin":return _r=$a(_r,n,s,l,d,v),!0;case"dragenter":return xr=$a(xr,n,s,l,d,v),!0;case"mouseover":return Sr=$a(Sr,n,s,l,d,v),!0;case"pointerover":var x=v.pointerId;return Ga.set(x,$a(Ga.get(x)||null,n,s,l,d,v)),!0;case"gotpointercapture":return x=v.pointerId,Wa.set(x,$a(Wa.get(x)||null,n,s,l,d,v)),!0}return!1}function op(n){var s=is(n.target);if(s!==null){var l=Li(s);if(l!==null){if(s=l.tag,s===13){if(s=qo(l),s!==null){n.blockedOn=s,sp(n.priority,function(){ip(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Zo(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var l=cu(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);Lt=d,l.target.dispatchEvent(d),Lt=null}else return s=ao(l),s!==null&&au(s),n.blockedOn=l,!1;s.shift()}return!0}function lp(n,s,l){Zo(n)&&l.delete(s)}function Ry(){ou=!1,_r!==null&&Zo(_r)&&(_r=null),xr!==null&&Zo(xr)&&(xr=null),Sr!==null&&Zo(Sr)&&(Sr=null),Ga.forEach(lp),Wa.forEach(lp)}function Xa(n,s){n.blockedOn===s&&(n.blockedOn=null,ou||(ou=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ry)))}function qa(n){function s(v){return Xa(v,n)}if(0<Jo.length){Xa(Jo[0],n);for(var l=1;l<Jo.length;l++){var d=Jo[l];d.blockedOn===n&&(d.blockedOn=null)}}for(_r!==null&&Xa(_r,n),xr!==null&&Xa(xr,n),Sr!==null&&Xa(Sr,n),Ga.forEach(s),Wa.forEach(s),l=0;l<Mr.length;l++)d=Mr[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<Mr.length&&(l=Mr[0],l.blockedOn===null);)op(l),l.blockedOn===null&&Mr.shift()}var Os=R.ReactCurrentBatchConfig,Qo=!0;function Cy(n,s,l,d){var v=Dt,x=Os.transition;Os.transition=null;try{Dt=1,lu(n,s,l,d)}finally{Dt=v,Os.transition=x}}function Py(n,s,l,d){var v=Dt,x=Os.transition;Os.transition=null;try{Dt=4,lu(n,s,l,d)}finally{Dt=v,Os.transition=x}}function lu(n,s,l,d){if(Qo){var v=cu(n,s,l,d);if(v===null)Tu(n,s,d,el,l),ap(n,d);else if(Ay(v,n,s,l,d))d.stopPropagation();else if(ap(n,d),s&4&&-1<Ty.indexOf(n)){for(;v!==null;){var x=ao(v);if(x!==null&&np(x),x=cu(n,s,l,d),x===null&&Tu(n,s,d,el,l),x===v)break;v=x}v!==null&&d.stopPropagation()}else Tu(n,s,d,null,l)}}var el=null;function cu(n,s,l,d){if(el=null,n=G(d),n=is(n),n!==null)if(s=Li(n),s===null)n=null;else if(l=s.tag,l===13){if(n=qo(s),n!==null)return n;n=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return el=n,null}function cp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qe()){case Ye:return 1;case ct:return 4;case dt:case et:return 16;case wt:return 536870912;default:return 16}default:return 16}}var wr=null,uu=null,tl=null;function up(){if(tl)return tl;var n,s=uu,l=s.length,d,v="value"in wr?wr.value:wr.textContent,x=v.length;for(n=0;n<l&&s[n]===v[n];n++);var E=l-n;for(d=1;d<=E&&s[l-d]===v[x-d];d++);return tl=v.slice(n,1<d?1-d:void 0)}function nl(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function il(){return!0}function dp(){return!1}function Kn(n){function s(l,d,v,x,E){this._reactName=l,this._targetInst=v,this.type=d,this.nativeEvent=x,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(l=n[I],this[I]=l?l(x):x[I]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?il:dp,this.isPropagationStopped=dp,this}return re(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),s}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},du=Kn(Fs),Ya=re({},Fs,{view:0,detail:0}),Ny=Kn(Ya),hu,fu,Ka,rl=re({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ka&&(Ka&&n.type==="mousemove"?(hu=n.screenX-Ka.screenX,fu=n.screenY-Ka.screenY):fu=hu=0,Ka=n),hu)},movementY:function(n){return"movementY"in n?n.movementY:fu}}),hp=Kn(rl),Ly=re({},rl,{dataTransfer:0}),Dy=Kn(Ly),Iy=re({},Ya,{relatedTarget:0}),pu=Kn(Iy),ky=re({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Uy=Kn(ky),Oy=re({},Fs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Fy=Kn(Oy),By=re({},Fs,{data:0}),fp=Kn(By),zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vy(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=Hy[n])?!!s[n]:!1}function mu(){return Vy}var Gy=re({},Ya,{key:function(n){if(n.key){var s=zy[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=nl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(n){return n.type==="keypress"?nl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?nl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Wy=Kn(Gy),$y=re({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=Kn($y),Xy=re({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),qy=Kn(Xy),Yy=re({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ky=Kn(Yy),Jy=re({},rl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Zy=Kn(Jy),Qy=[9,13,27,32],gu=u&&"CompositionEvent"in window,Ja=null;u&&"documentMode"in document&&(Ja=document.documentMode);var e_=u&&"TextEvent"in window&&!Ja,mp=u&&(!gu||Ja&&8<Ja&&11>=Ja),gp=" ",vp=!1;function yp(n,s){switch(n){case"keyup":return Qy.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function t_(n,s){switch(n){case"compositionend":return _p(s);case"keypress":return s.which!==32?null:(vp=!0,gp);case"textInput":return n=s.data,n===gp&&vp?null:n;default:return null}}function n_(n,s){if(Bs)return n==="compositionend"||!gu&&yp(n,s)?(n=up(),tl=uu=wr=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return mp&&s.locale!=="ko"?null:s.data;default:return null}}var i_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!i_[n.type]:s==="textarea"}function Sp(n,s,l,d){Ue(d),s=cl(s,"onChange"),0<s.length&&(l=new du("onChange","change",null,l,d),n.push({event:l,listeners:s}))}var Za=null,Qa=null;function r_(n){Bp(n,0)}function sl(n){var s=Gs(n);if(ve(s))return n}function s_(n,s){if(n==="change")return s}var Mp=!1;if(u){var vu;if(u){var yu="oninput"in document;if(!yu){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),yu=typeof wp.oninput=="function"}vu=yu}else vu=!1;Mp=vu&&(!document.documentMode||9<document.documentMode)}function Ep(){Za&&(Za.detachEvent("onpropertychange",bp),Qa=Za=null)}function bp(n){if(n.propertyName==="value"&&sl(Qa)){var s=[];Sp(s,Qa,n,G(n)),Fn(r_,s)}}function a_(n,s,l){n==="focusin"?(Ep(),Za=s,Qa=l,Za.attachEvent("onpropertychange",bp)):n==="focusout"&&Ep()}function o_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return sl(Qa)}function l_(n,s){if(n==="click")return sl(s)}function c_(n,s){if(n==="input"||n==="change")return sl(s)}function u_(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var yi=typeof Object.is=="function"?Object.is:u_;function eo(n,s){if(yi(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var l=Object.keys(n),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var v=l[d];if(!h.call(s,v)||!yi(n[v],s[v]))return!1}return!0}function Tp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ap(n,s){var l=Tp(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=s&&d>=s)return{node:l,offset:s-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Tp(l)}}function Rp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Rp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Cp(){for(var n=window,s=Ae();s instanceof n.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)n=s.contentWindow;else break;s=Ae(n.document)}return s}function _u(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function d_(n){var s=Cp(),l=n.focusedElem,d=n.selectionRange;if(s!==l&&l&&l.ownerDocument&&Rp(l.ownerDocument.documentElement,l)){if(d!==null&&_u(l)){if(s=d.start,n=d.end,n===void 0&&(n=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(n,l.value.length);else if(n=(s=l.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var v=l.textContent.length,x=Math.min(d.start,v);d=d.end===void 0?x:Math.min(d.end,v),!n.extend&&x>d&&(v=d,d=x,x=v),v=Ap(l,x);var E=Ap(l,d);v&&E&&(n.rangeCount!==1||n.anchorNode!==v.node||n.anchorOffset!==v.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(v.node,v.offset),n.removeAllRanges(),x>d?(n.addRange(s),n.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),n.addRange(s)))}}for(s=[],n=l;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)n=s[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var h_=u&&"documentMode"in document&&11>=document.documentMode,zs=null,xu=null,to=null,Su=!1;function Pp(n,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Su||zs==null||zs!==Ae(d)||(d=zs,"selectionStart"in d&&_u(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),to&&eo(to,d)||(to=d,d=cl(xu,"onSelect"),0<d.length&&(s=new du("onSelect","select",null,s,l),n.push({event:s,listeners:d}),s.target=zs)))}function al(n,s){var l={};return l[n.toLowerCase()]=s.toLowerCase(),l["Webkit"+n]="webkit"+s,l["Moz"+n]="moz"+s,l}var js={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},Mu={},Np={};u&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function ol(n){if(Mu[n])return Mu[n];if(!js[n])return n;var s=js[n],l;for(l in s)if(s.hasOwnProperty(l)&&l in Np)return Mu[n]=s[l];return n}var Lp=ol("animationend"),Dp=ol("animationiteration"),Ip=ol("animationstart"),kp=ol("transitionend"),Up=new Map,Op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(n,s){Up.set(n,s),o(s,[n])}for(var wu=0;wu<Op.length;wu++){var Eu=Op[wu],f_=Eu.toLowerCase(),p_=Eu[0].toUpperCase()+Eu.slice(1);Er(f_,"on"+p_)}Er(Lp,"onAnimationEnd"),Er(Dp,"onAnimationIteration"),Er(Ip,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(kp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m_=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function Fp(n,s,l){var d=n.type||"unknown-event";n.currentTarget=l,Xo(d,s,void 0,n),n.currentTarget=null}function Bp(n,s){s=(s&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],v=d.event;d=d.listeners;e:{var x=void 0;if(s)for(var E=d.length-1;0<=E;E--){var I=d[E],z=I.instance,ee=I.currentTarget;if(I=I.listener,z!==x&&v.isPropagationStopped())break e;Fp(v,I,ee),x=z}else for(E=0;E<d.length;E++){if(I=d[E],z=I.instance,ee=I.currentTarget,I=I.listener,z!==x&&v.isPropagationStopped())break e;Fp(v,I,ee),x=z}}}if(ns)throw n=yr,ns=!1,yr=null,n}function Ht(n,s){var l=s[Lu];l===void 0&&(l=s[Lu]=new Set);var d=n+"__bubble";l.has(d)||(zp(s,n,2,!1),l.add(d))}function bu(n,s,l){var d=0;s&&(d|=4),zp(l,n,d,s)}var ll="_reactListening"+Math.random().toString(36).slice(2);function io(n){if(!n[ll]){n[ll]=!0,i.forEach(function(l){l!=="selectionchange"&&(m_.has(l)||bu(l,!1,n),bu(l,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[ll]||(s[ll]=!0,bu("selectionchange",!1,s))}}function zp(n,s,l,d){switch(cp(s)){case 1:var v=Cy;break;case 4:v=Py;break;default:v=lu}l=v.bind(null,s,l,n),v=void 0,!ks||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(v=!0),d?v!==void 0?n.addEventListener(s,l,{capture:!0,passive:v}):n.addEventListener(s,l,!0):v!==void 0?n.addEventListener(s,l,{passive:v}):n.addEventListener(s,l,!1)}function Tu(n,s,l,d,v){var x=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var E=d.tag;if(E===3||E===4){var I=d.stateNode.containerInfo;if(I===v||I.nodeType===8&&I.parentNode===v)break;if(E===4)for(E=d.return;E!==null;){var z=E.tag;if((z===3||z===4)&&(z=E.stateNode.containerInfo,z===v||z.nodeType===8&&z.parentNode===v))return;E=E.return}for(;I!==null;){if(E=is(I),E===null)return;if(z=E.tag,z===5||z===6){d=x=E;continue e}I=I.parentNode}}d=d.return}Fn(function(){var ee=x,xe=G(l),Se=[];e:{var _e=Up.get(n);if(_e!==void 0){var ze=du,Xe=n;switch(n){case"keypress":if(nl(l)===0)break e;case"keydown":case"keyup":ze=Wy;break;case"focusin":Xe="focus",ze=pu;break;case"focusout":Xe="blur",ze=pu;break;case"beforeblur":case"afterblur":ze=pu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=Dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=qy;break;case Lp:case Dp:case Ip:ze=Uy;break;case kp:ze=Ky;break;case"scroll":ze=Ny;break;case"wheel":ze=Zy;break;case"copy":case"cut":case"paste":ze=Fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=pp}var Ke=(s&4)!==0,Kt=!Ke&&n==="scroll",q=Ke?_e!==null?_e+"Capture":null:_e;Ke=[];for(var V=ee,J;V!==null;){J=V;var Re=J.stateNode;if(J.tag===5&&Re!==null&&(J=Re,q!==null&&(Re=Nn(V,q),Re!=null&&Ke.push(ro(V,Re,J)))),Kt)break;V=V.return}0<Ke.length&&(_e=new ze(_e,Xe,null,l,xe),Se.push({event:_e,listeners:Ke}))}}if((s&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",_e&&l!==Lt&&(Xe=l.relatedTarget||l.fromElement)&&(is(Xe)||Xe[Zi]))break e;if((ze||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,ze?(Xe=l.relatedTarget||l.toElement,ze=ee,Xe=Xe?is(Xe):null,Xe!==null&&(Kt=Li(Xe),Xe!==Kt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(ze=null,Xe=ee),ze!==Xe)){if(Ke=hp,Re="onMouseLeave",q="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Ke=pp,Re="onPointerLeave",q="onPointerEnter",V="pointer"),Kt=ze==null?_e:Gs(ze),J=Xe==null?_e:Gs(Xe),_e=new Ke(Re,V+"leave",ze,l,xe),_e.target=Kt,_e.relatedTarget=J,Re=null,is(xe)===ee&&(Ke=new Ke(q,V+"enter",Xe,l,xe),Ke.target=J,Ke.relatedTarget=Kt,Re=Ke),Kt=Re,ze&&Xe)t:{for(Ke=ze,q=Xe,V=0,J=Ke;J;J=Hs(J))V++;for(J=0,Re=q;Re;Re=Hs(Re))J++;for(;0<V-J;)Ke=Hs(Ke),V--;for(;0<J-V;)q=Hs(q),J--;for(;V--;){if(Ke===q||q!==null&&Ke===q.alternate)break t;Ke=Hs(Ke),q=Hs(q)}Ke=null}else Ke=null;ze!==null&&jp(Se,_e,ze,Ke,!1),Xe!==null&&Kt!==null&&jp(Se,Kt,Xe,Ke,!0)}}e:{if(_e=ee?Gs(ee):window,ze=_e.nodeName&&_e.nodeName.toLowerCase(),ze==="select"||ze==="input"&&_e.type==="file")var tt=s_;else if(xp(_e))if(Mp)tt=c_;else{tt=o_;var rt=a_}else(ze=_e.nodeName)&&ze.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(tt=l_);if(tt&&(tt=tt(n,ee))){Sp(Se,tt,l,xe);break e}rt&&rt(n,_e,ee),n==="focusout"&&(rt=_e._wrapperState)&&rt.controlled&&_e.type==="number"&&it(_e,"number",_e.value)}switch(rt=ee?Gs(ee):window,n){case"focusin":(xp(rt)||rt.contentEditable==="true")&&(zs=rt,xu=ee,to=null);break;case"focusout":to=xu=zs=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Pp(Se,l,xe);break;case"selectionchange":if(h_)break;case"keydown":case"keyup":Pp(Se,l,xe)}var st;if(gu)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Bs?yp(n,l)&&(ut="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ut="onCompositionStart");ut&&(mp&&l.locale!=="ko"&&(Bs||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Bs&&(st=up()):(wr=xe,uu="value"in wr?wr.value:wr.textContent,Bs=!0)),rt=cl(ee,ut),0<rt.length&&(ut=new fp(ut,n,null,l,xe),Se.push({event:ut,listeners:rt}),st?ut.data=st:(st=_p(l),st!==null&&(ut.data=st)))),(st=e_?t_(n,l):n_(n,l))&&(ee=cl(ee,"onBeforeInput"),0<ee.length&&(xe=new fp("onBeforeInput","beforeinput",null,l,xe),Se.push({event:xe,listeners:ee}),xe.data=st))}Bp(Se,s)})}function ro(n,s,l){return{instance:n,listener:s,currentTarget:l}}function cl(n,s){for(var l=s+"Capture",d=[];n!==null;){var v=n,x=v.stateNode;v.tag===5&&x!==null&&(v=x,x=Nn(n,l),x!=null&&d.unshift(ro(n,x,v)),x=Nn(n,s),x!=null&&d.push(ro(n,x,v))),n=n.return}return d}function Hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function jp(n,s,l,d,v){for(var x=s._reactName,E=[];l!==null&&l!==d;){var I=l,z=I.alternate,ee=I.stateNode;if(z!==null&&z===d)break;I.tag===5&&ee!==null&&(I=ee,v?(z=Nn(l,x),z!=null&&E.unshift(ro(l,z,I))):v||(z=Nn(l,x),z!=null&&E.push(ro(l,z,I)))),l=l.return}E.length!==0&&n.push({event:s,listeners:E})}var g_=/\r\n?/g,v_=/\u0000|\uFFFD/g;function Hp(n){return(typeof n=="string"?n:""+n).replace(g_,`
`).replace(v_,"")}function ul(n,s,l){if(s=Hp(s),Hp(n)!==s&&l)throw Error(t(425))}function dl(){}var Au=null,Ru=null;function Cu(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Pu=typeof setTimeout=="function"?setTimeout:void 0,y_=typeof clearTimeout=="function"?clearTimeout:void 0,Vp=typeof Promise=="function"?Promise:void 0,__=typeof queueMicrotask=="function"?queueMicrotask:typeof Vp<"u"?function(n){return Vp.resolve(null).then(n).catch(x_)}:Pu;function x_(n){setTimeout(function(){throw n})}function Nu(n,s){var l=s,d=0;do{var v=l.nextSibling;if(n.removeChild(l),v&&v.nodeType===8)if(l=v.data,l==="/$"){if(d===0){n.removeChild(v),qa(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=v}while(l);qa(s)}function br(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Gp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return n;s--}else l==="/$"&&s++}n=n.previousSibling}return null}var Vs=Math.random().toString(36).slice(2),Ii="__reactFiber$"+Vs,so="__reactProps$"+Vs,Zi="__reactContainer$"+Vs,Lu="__reactEvents$"+Vs,S_="__reactListeners$"+Vs,M_="__reactHandles$"+Vs;function is(n){var s=n[Ii];if(s)return s;for(var l=n.parentNode;l;){if(s=l[Zi]||l[Ii]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(n=Gp(n);n!==null;){if(l=n[Ii])return l;n=Gp(n)}return s}n=l,l=n.parentNode}return null}function ao(n){return n=n[Ii]||n[Zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function hl(n){return n[so]||null}var Du=[],Ws=-1;function Tr(n){return{current:n}}function Vt(n){0>Ws||(n.current=Du[Ws],Du[Ws]=null,Ws--)}function Bt(n,s){Ws++,Du[Ws]=n.current,n.current=s}var Ar={},En=Tr(Ar),zn=Tr(!1),rs=Ar;function $s(n,s){var l=n.type.contextTypes;if(!l)return Ar;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var v={},x;for(x in l)v[x]=s[x];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=v),v}function jn(n){return n=n.childContextTypes,n!=null}function fl(){Vt(zn),Vt(En)}function Wp(n,s,l){if(En.current!==Ar)throw Error(t(168));Bt(En,s),Bt(zn,l)}function $p(n,s,l){var d=n.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var v in d)if(!(v in s))throw Error(t(108,ge(n)||"Unknown",v));return re({},l,d)}function pl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ar,rs=En.current,Bt(En,n),Bt(zn,zn.current),!0}function Xp(n,s,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=$p(n,s,rs),d.__reactInternalMemoizedMergedChildContext=n,Vt(zn),Vt(En),Bt(En,n)):Vt(zn),Bt(zn,l)}var Qi=null,ml=!1,Iu=!1;function qp(n){Qi===null?Qi=[n]:Qi.push(n)}function w_(n){ml=!0,qp(n)}function Rr(){if(!Iu&&Qi!==null){Iu=!0;var n=0,s=Dt;try{var l=Qi;for(Dt=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}Qi=null,ml=!1}catch(v){throw Qi!==null&&(Qi=Qi.slice(n+1)),te(Ye,Rr),v}finally{Dt=s,Iu=!1}}return null}var Xs=[],qs=0,gl=null,vl=0,oi=[],li=0,ss=null,er=1,tr="";function as(n,s){Xs[qs++]=vl,Xs[qs++]=gl,gl=n,vl=s}function Yp(n,s,l){oi[li++]=er,oi[li++]=tr,oi[li++]=ss,ss=n;var d=er;n=tr;var v=32-mt(d)-1;d&=~(1<<v),l+=1;var x=32-mt(s)+v;if(30<x){var E=v-v%5;x=(d&(1<<E)-1).toString(32),d>>=E,v-=E,er=1<<32-mt(s)+v|l<<v|d,tr=x+n}else er=1<<x|l<<v|d,tr=n}function ku(n){n.return!==null&&(as(n,1),Yp(n,1,0))}function Uu(n){for(;n===gl;)gl=Xs[--qs],Xs[qs]=null,vl=Xs[--qs],Xs[qs]=null;for(;n===ss;)ss=oi[--li],oi[li]=null,tr=oi[--li],oi[li]=null,er=oi[--li],oi[li]=null}var Jn=null,Zn=null,Wt=!1,_i=null;function Kp(n,s){var l=hi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=n,s=n.deletions,s===null?(n.deletions=[l],n.flags|=16):s.push(l)}function Jp(n,s){switch(n.tag){case 5:var l=n.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,Jn=n,Zn=br(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,Jn=n,Zn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ss!==null?{id:er,overflow:tr}:null,n.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=hi(18,null,null,0),l.stateNode=s,l.return=n,n.child=l,Jn=n,Zn=null,!0):!1;default:return!1}}function Ou(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Fu(n){if(Wt){var s=Zn;if(s){var l=s;if(!Jp(n,s)){if(Ou(n))throw Error(t(418));s=br(l.nextSibling);var d=Jn;s&&Jp(n,s)?Kp(d,l):(n.flags=n.flags&-4097|2,Wt=!1,Jn=n)}}else{if(Ou(n))throw Error(t(418));n.flags=n.flags&-4097|2,Wt=!1,Jn=n}}}function Zp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jn=n}function yl(n){if(n!==Jn)return!1;if(!Wt)return Zp(n),Wt=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!Cu(n.type,n.memoizedProps)),s&&(s=Zn)){if(Ou(n))throw Qp(),Error(t(418));for(;s;)Kp(n,s),s=br(s.nextSibling)}if(Zp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(s===0){Zn=br(n.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}n=n.nextSibling}Zn=null}}else Zn=Jn?br(n.stateNode.nextSibling):null;return!0}function Qp(){for(var n=Zn;n;)n=br(n.nextSibling)}function Ys(){Zn=Jn=null,Wt=!1}function Bu(n){_i===null?_i=[n]:_i.push(n)}var E_=R.ReactCurrentBatchConfig;function oo(n,s,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var v=d,x=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(E){var I=v.refs;E===null?delete I[x]:I[x]=E},s._stringRef=x,s)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function _l(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function em(n){var s=n._init;return s(n._payload)}function tm(n){function s(q,V){if(n){var J=q.deletions;J===null?(q.deletions=[V],q.flags|=16):J.push(V)}}function l(q,V){if(!n)return null;for(;V!==null;)s(q,V),V=V.sibling;return null}function d(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function v(q,V){return q=Ur(q,V),q.index=0,q.sibling=null,q}function x(q,V,J){return q.index=J,n?(J=q.alternate,J!==null?(J=J.index,J<V?(q.flags|=2,V):J):(q.flags|=2,V)):(q.flags|=1048576,V)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function I(q,V,J,Re){return V===null||V.tag!==6?(V=Pd(J,q.mode,Re),V.return=q,V):(V=v(V,J),V.return=q,V)}function z(q,V,J,Re){var tt=J.type;return tt===F?xe(q,V,J.props.children,Re,J.key):V!==null&&(V.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===se&&em(tt)===V.type)?(Re=v(V,J.props),Re.ref=oo(q,V,J),Re.return=q,Re):(Re=Vl(J.type,J.key,J.props,null,q.mode,Re),Re.ref=oo(q,V,J),Re.return=q,Re)}function ee(q,V,J,Re){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Nd(J,q.mode,Re),V.return=q,V):(V=v(V,J.children||[]),V.return=q,V)}function xe(q,V,J,Re,tt){return V===null||V.tag!==7?(V=ps(J,q.mode,Re,tt),V.return=q,V):(V=v(V,J),V.return=q,V)}function Se(q,V,J){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Pd(""+V,q.mode,J),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Y:return J=Vl(V.type,V.key,V.props,null,q.mode,J),J.ref=oo(q,null,V),J.return=q,J;case j:return V=Nd(V,q.mode,J),V.return=q,V;case se:var Re=V._init;return Se(q,Re(V._payload),J)}if(Oe(V)||oe(V))return V=ps(V,q.mode,J,null),V.return=q,V;_l(q,V)}return null}function _e(q,V,J,Re){var tt=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return tt!==null?null:I(q,V,""+J,Re);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Y:return J.key===tt?z(q,V,J,Re):null;case j:return J.key===tt?ee(q,V,J,Re):null;case se:return tt=J._init,_e(q,V,tt(J._payload),Re)}if(Oe(J)||oe(J))return tt!==null?null:xe(q,V,J,Re,null);_l(q,J)}return null}function ze(q,V,J,Re,tt){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return q=q.get(J)||null,I(V,q,""+Re,tt);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case Y:return q=q.get(Re.key===null?J:Re.key)||null,z(V,q,Re,tt);case j:return q=q.get(Re.key===null?J:Re.key)||null,ee(V,q,Re,tt);case se:var rt=Re._init;return ze(q,V,J,rt(Re._payload),tt)}if(Oe(Re)||oe(Re))return q=q.get(J)||null,xe(V,q,Re,tt,null);_l(V,Re)}return null}function Xe(q,V,J,Re){for(var tt=null,rt=null,st=V,ut=V=0,dn=null;st!==null&&ut<J.length;ut++){st.index>ut?(dn=st,st=null):dn=st.sibling;var Pt=_e(q,st,J[ut],Re);if(Pt===null){st===null&&(st=dn);break}n&&st&&Pt.alternate===null&&s(q,st),V=x(Pt,V,ut),rt===null?tt=Pt:rt.sibling=Pt,rt=Pt,st=dn}if(ut===J.length)return l(q,st),Wt&&as(q,ut),tt;if(st===null){for(;ut<J.length;ut++)st=Se(q,J[ut],Re),st!==null&&(V=x(st,V,ut),rt===null?tt=st:rt.sibling=st,rt=st);return Wt&&as(q,ut),tt}for(st=d(q,st);ut<J.length;ut++)dn=ze(st,q,ut,J[ut],Re),dn!==null&&(n&&dn.alternate!==null&&st.delete(dn.key===null?ut:dn.key),V=x(dn,V,ut),rt===null?tt=dn:rt.sibling=dn,rt=dn);return n&&st.forEach(function(Or){return s(q,Or)}),Wt&&as(q,ut),tt}function Ke(q,V,J,Re){var tt=oe(J);if(typeof tt!="function")throw Error(t(150));if(J=tt.call(J),J==null)throw Error(t(151));for(var rt=tt=null,st=V,ut=V=0,dn=null,Pt=J.next();st!==null&&!Pt.done;ut++,Pt=J.next()){st.index>ut?(dn=st,st=null):dn=st.sibling;var Or=_e(q,st,Pt.value,Re);if(Or===null){st===null&&(st=dn);break}n&&st&&Or.alternate===null&&s(q,st),V=x(Or,V,ut),rt===null?tt=Or:rt.sibling=Or,rt=Or,st=dn}if(Pt.done)return l(q,st),Wt&&as(q,ut),tt;if(st===null){for(;!Pt.done;ut++,Pt=J.next())Pt=Se(q,Pt.value,Re),Pt!==null&&(V=x(Pt,V,ut),rt===null?tt=Pt:rt.sibling=Pt,rt=Pt);return Wt&&as(q,ut),tt}for(st=d(q,st);!Pt.done;ut++,Pt=J.next())Pt=ze(st,q,ut,Pt.value,Re),Pt!==null&&(n&&Pt.alternate!==null&&st.delete(Pt.key===null?ut:Pt.key),V=x(Pt,V,ut),rt===null?tt=Pt:rt.sibling=Pt,rt=Pt);return n&&st.forEach(function(ix){return s(q,ix)}),Wt&&as(q,ut),tt}function Kt(q,V,J,Re){if(typeof J=="object"&&J!==null&&J.type===F&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case Y:e:{for(var tt=J.key,rt=V;rt!==null;){if(rt.key===tt){if(tt=J.type,tt===F){if(rt.tag===7){l(q,rt.sibling),V=v(rt,J.props.children),V.return=q,q=V;break e}}else if(rt.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===se&&em(tt)===rt.type){l(q,rt.sibling),V=v(rt,J.props),V.ref=oo(q,rt,J),V.return=q,q=V;break e}l(q,rt);break}else s(q,rt);rt=rt.sibling}J.type===F?(V=ps(J.props.children,q.mode,Re,J.key),V.return=q,q=V):(Re=Vl(J.type,J.key,J.props,null,q.mode,Re),Re.ref=oo(q,V,J),Re.return=q,q=Re)}return E(q);case j:e:{for(rt=J.key;V!==null;){if(V.key===rt)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){l(q,V.sibling),V=v(V,J.children||[]),V.return=q,q=V;break e}else{l(q,V);break}else s(q,V);V=V.sibling}V=Nd(J,q.mode,Re),V.return=q,q=V}return E(q);case se:return rt=J._init,Kt(q,V,rt(J._payload),Re)}if(Oe(J))return Xe(q,V,J,Re);if(oe(J))return Ke(q,V,J,Re);_l(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,V!==null&&V.tag===6?(l(q,V.sibling),V=v(V,J),V.return=q,q=V):(l(q,V),V=Pd(J,q.mode,Re),V.return=q,q=V),E(q)):l(q,V)}return Kt}var Ks=tm(!0),nm=tm(!1),xl=Tr(null),Sl=null,Js=null,zu=null;function ju(){zu=Js=Sl=null}function Hu(n){var s=xl.current;Vt(xl),n._currentValue=s}function Vu(n,s,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),n===l)break;n=n.return}}function Zs(n,s){Sl=n,zu=Js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Hn=!0),n.firstContext=null)}function ci(n){var s=n._currentValue;if(zu!==n)if(n={context:n,memoizedValue:s,next:null},Js===null){if(Sl===null)throw Error(t(308));Js=n,Sl.dependencies={lanes:0,firstContext:n}}else Js=Js.next=n;return s}var os=null;function Gu(n){os===null?os=[n]:os.push(n)}function im(n,s,l,d){var v=s.interleaved;return v===null?(l.next=l,Gu(s)):(l.next=v.next,v.next=l),s.interleaved=l,nr(n,d)}function nr(n,s){n.lanes|=s;var l=n.alternate;for(l!==null&&(l.lanes|=s),l=n,n=n.return;n!==null;)n.childLanes|=s,l=n.alternate,l!==null&&(l.childLanes|=s),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Cr=!1;function Wu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ir(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function Pr(n,s,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(Tt&2)!==0){var v=d.pending;return v===null?s.next=s:(s.next=v.next,v.next=s),d.pending=s,nr(n,l)}return v=d.interleaved,v===null?(s.next=s,Gu(d)):(s.next=v.next,v.next=s),d.interleaved=s,nr(n,l)}function Ml(n,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=n.pendingLanes,l|=d,s.lanes=l,su(n,l)}}function sm(n,s){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var v=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?v=x=E:x=x.next=E,l=l.next}while(l!==null);x===null?v=x=s:x=x.next=s}else v=x=s;l={baseState:d.baseState,firstBaseUpdate:v,lastBaseUpdate:x,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=s:n.next=s,l.lastBaseUpdate=s}function wl(n,s,l,d){var v=n.updateQueue;Cr=!1;var x=v.firstBaseUpdate,E=v.lastBaseUpdate,I=v.shared.pending;if(I!==null){v.shared.pending=null;var z=I,ee=z.next;z.next=null,E===null?x=ee:E.next=ee,E=z;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==E&&(I===null?xe.firstBaseUpdate=ee:I.next=ee,xe.lastBaseUpdate=z))}if(x!==null){var Se=v.baseState;E=0,xe=ee=z=null,I=x;do{var _e=I.lane,ze=I.eventTime;if((d&_e)===_e){xe!==null&&(xe=xe.next={eventTime:ze,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Xe=n,Ke=I;switch(_e=s,ze=l,Ke.tag){case 1:if(Xe=Ke.payload,typeof Xe=="function"){Se=Xe.call(ze,Se,_e);break e}Se=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ke.payload,_e=typeof Xe=="function"?Xe.call(ze,Se,_e):Xe,_e==null)break e;Se=re({},Se,_e);break e;case 2:Cr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,_e=v.effects,_e===null?v.effects=[I]:_e.push(I))}else ze={eventTime:ze,lane:_e,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(ee=xe=ze,z=Se):xe=xe.next=ze,E|=_e;if(I=I.next,I===null){if(I=v.shared.pending,I===null)break;_e=I,I=_e.next,_e.next=null,v.lastBaseUpdate=_e,v.shared.pending=null}}while(!0);if(xe===null&&(z=Se),v.baseState=z,v.firstBaseUpdate=ee,v.lastBaseUpdate=xe,s=v.shared.interleaved,s!==null){v=s;do E|=v.lane,v=v.next;while(v!==s)}else x===null&&(v.shared.lanes=0);us|=E,n.lanes=E,n.memoizedState=Se}}function am(n,s,l){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var d=n[s],v=d.callback;if(v!==null){if(d.callback=null,d=l,typeof v!="function")throw Error(t(191,v));v.call(d)}}}var lo={},ki=Tr(lo),co=Tr(lo),uo=Tr(lo);function ls(n){if(n===lo)throw Error(t(174));return n}function $u(n,s){switch(Bt(uo,s),Bt(co,n),Bt(ki,lo),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:qe(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=qe(s,n)}Vt(ki),Bt(ki,s)}function Qs(){Vt(ki),Vt(co),Vt(uo)}function om(n){ls(uo.current);var s=ls(ki.current),l=qe(s,n.type);s!==l&&(Bt(co,n),Bt(ki,l))}function Xu(n){co.current===n&&(Vt(ki),Vt(co))}var $t=Tr(0);function El(n){for(var s=n;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var qu=[];function Yu(){for(var n=0;n<qu.length;n++)qu[n]._workInProgressVersionPrimary=null;qu.length=0}var bl=R.ReactCurrentDispatcher,Ku=R.ReactCurrentBatchConfig,cs=0,Xt=null,tn=null,cn=null,Tl=!1,ho=!1,fo=0,b_=0;function bn(){throw Error(t(321))}function Ju(n,s){if(s===null)return!1;for(var l=0;l<s.length&&l<n.length;l++)if(!yi(n[l],s[l]))return!1;return!0}function Zu(n,s,l,d,v,x){if(cs=x,Xt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,bl.current=n===null||n.memoizedState===null?C_:P_,n=l(d,v),ho){x=0;do{if(ho=!1,fo=0,25<=x)throw Error(t(301));x+=1,cn=tn=null,s.updateQueue=null,bl.current=N_,n=l(d,v)}while(ho)}if(bl.current=Cl,s=tn!==null&&tn.next!==null,cs=0,cn=tn=Xt=null,Tl=!1,s)throw Error(t(300));return n}function Qu(){var n=fo!==0;return fo=0,n}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Xt.memoizedState=cn=n:cn=cn.next=n,cn}function ui(){if(tn===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var s=cn===null?Xt.memoizedState:cn.next;if(s!==null)cn=s,tn=n;else{if(n===null)throw Error(t(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},cn===null?Xt.memoizedState=cn=n:cn=cn.next=n}return cn}function po(n,s){return typeof s=="function"?s(n):s}function ed(n){var s=ui(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=tn,v=d.baseQueue,x=l.pending;if(x!==null){if(v!==null){var E=v.next;v.next=x.next,x.next=E}d.baseQueue=v=x,l.pending=null}if(v!==null){x=v.next,d=d.baseState;var I=E=null,z=null,ee=x;do{var xe=ee.lane;if((cs&xe)===xe)z!==null&&(z=z.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),d=ee.hasEagerState?ee.eagerState:n(d,ee.action);else{var Se={lane:xe,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};z===null?(I=z=Se,E=d):z=z.next=Se,Xt.lanes|=xe,us|=xe}ee=ee.next}while(ee!==null&&ee!==x);z===null?E=d:z.next=I,yi(d,s.memoizedState)||(Hn=!0),s.memoizedState=d,s.baseState=E,s.baseQueue=z,l.lastRenderedState=d}if(n=l.interleaved,n!==null){v=n;do x=v.lane,Xt.lanes|=x,us|=x,v=v.next;while(v!==n)}else v===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function td(n){var s=ui(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,v=l.pending,x=s.memoizedState;if(v!==null){l.pending=null;var E=v=v.next;do x=n(x,E.action),E=E.next;while(E!==v);yi(x,s.memoizedState)||(Hn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,d]}function lm(){}function cm(n,s){var l=Xt,d=ui(),v=s(),x=!yi(d.memoizedState,v);if(x&&(d.memoizedState=v,Hn=!0),d=d.queue,nd(hm.bind(null,l,d,n),[n]),d.getSnapshot!==s||x||cn!==null&&cn.memoizedState.tag&1){if(l.flags|=2048,mo(9,dm.bind(null,l,d,v,s),void 0,null),un===null)throw Error(t(349));(cs&30)!==0||um(l,s,v)}return v}function um(n,s,l){n.flags|=16384,n={getSnapshot:s,value:l},s=Xt.updateQueue,s===null?(s={lastEffect:null,stores:null},Xt.updateQueue=s,s.stores=[n]):(l=s.stores,l===null?s.stores=[n]:l.push(n))}function dm(n,s,l,d){s.value=l,s.getSnapshot=d,fm(s)&&pm(n)}function hm(n,s,l){return l(function(){fm(s)&&pm(n)})}function fm(n){var s=n.getSnapshot;n=n.value;try{var l=s();return!yi(n,l)}catch{return!0}}function pm(n){var s=nr(n,1);s!==null&&wi(s,n,1,-1)}function mm(n){var s=Ui();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:n},s.queue=n,n=n.dispatch=R_.bind(null,Xt,n),[s.memoizedState,n]}function mo(n,s,l,d){return n={tag:n,create:s,destroy:l,deps:d,next:null},s=Xt.updateQueue,s===null?(s={lastEffect:null,stores:null},Xt.updateQueue=s,s.lastEffect=n.next=n):(l=s.lastEffect,l===null?s.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,s.lastEffect=n)),n}function gm(){return ui().memoizedState}function Al(n,s,l,d){var v=Ui();Xt.flags|=n,v.memoizedState=mo(1|s,l,void 0,d===void 0?null:d)}function Rl(n,s,l,d){var v=ui();d=d===void 0?null:d;var x=void 0;if(tn!==null){var E=tn.memoizedState;if(x=E.destroy,d!==null&&Ju(d,E.deps)){v.memoizedState=mo(s,l,x,d);return}}Xt.flags|=n,v.memoizedState=mo(1|s,l,x,d)}function vm(n,s){return Al(8390656,8,n,s)}function nd(n,s){return Rl(2048,8,n,s)}function ym(n,s){return Rl(4,2,n,s)}function _m(n,s){return Rl(4,4,n,s)}function xm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Sm(n,s,l){return l=l!=null?l.concat([n]):null,Rl(4,4,xm.bind(null,s,n),l)}function id(){}function Mm(n,s){var l=ui();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Ju(s,d[1])?d[0]:(l.memoizedState=[n,s],n)}function wm(n,s){var l=ui();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Ju(s,d[1])?d[0]:(n=n(),l.memoizedState=[n,s],n)}function Em(n,s,l){return(cs&21)===0?(n.baseState&&(n.baseState=!1,Hn=!0),n.memoizedState=l):(yi(l,s)||(l=Ln(),Xt.lanes|=l,us|=l,n.baseState=!0),s)}function T_(n,s){var l=Dt;Dt=l!==0&&4>l?l:4,n(!0);var d=Ku.transition;Ku.transition={};try{n(!1),s()}finally{Dt=l,Ku.transition=d}}function bm(){return ui().memoizedState}function A_(n,s,l){var d=Ir(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Tm(n))Am(s,l);else if(l=im(n,s,l,d),l!==null){var v=In();wi(l,n,d,v),Rm(l,s,d)}}function R_(n,s,l){var d=Ir(n),v={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Tm(n))Am(s,v);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var E=s.lastRenderedState,I=x(E,l);if(v.hasEagerState=!0,v.eagerState=I,yi(I,E)){var z=s.interleaved;z===null?(v.next=v,Gu(s)):(v.next=z.next,z.next=v),s.interleaved=v;return}}catch{}finally{}l=im(n,s,v,d),l!==null&&(v=In(),wi(l,n,d,v),Rm(l,s,d))}}function Tm(n){var s=n.alternate;return n===Xt||s!==null&&s===Xt}function Am(n,s){ho=Tl=!0;var l=n.pending;l===null?s.next=s:(s.next=l.next,l.next=s),n.pending=s}function Rm(n,s,l){if((l&4194240)!==0){var d=s.lanes;d&=n.pendingLanes,l|=d,s.lanes=l,su(n,l)}}var Cl={readContext:ci,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},C_={readContext:ci,useCallback:function(n,s){return Ui().memoizedState=[n,s===void 0?null:s],n},useContext:ci,useEffect:vm,useImperativeHandle:function(n,s,l){return l=l!=null?l.concat([n]):null,Al(4194308,4,xm.bind(null,s,n),l)},useLayoutEffect:function(n,s){return Al(4194308,4,n,s)},useInsertionEffect:function(n,s){return Al(4,2,n,s)},useMemo:function(n,s){var l=Ui();return s=s===void 0?null:s,n=n(),l.memoizedState=[n,s],n},useReducer:function(n,s,l){var d=Ui();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},d.queue=n,n=n.dispatch=A_.bind(null,Xt,n),[d.memoizedState,n]},useRef:function(n){var s=Ui();return n={current:n},s.memoizedState=n},useState:mm,useDebugValue:id,useDeferredValue:function(n){return Ui().memoizedState=n},useTransition:function(){var n=mm(!1),s=n[0];return n=T_.bind(null,n[1]),Ui().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,l){var d=Xt,v=Ui();if(Wt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),un===null)throw Error(t(349));(cs&30)!==0||um(d,s,l)}v.memoizedState=l;var x={value:l,getSnapshot:s};return v.queue=x,vm(hm.bind(null,d,x,n),[n]),d.flags|=2048,mo(9,dm.bind(null,d,x,l,s),void 0,null),l},useId:function(){var n=Ui(),s=un.identifierPrefix;if(Wt){var l=tr,d=er;l=(d&~(1<<32-mt(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=fo++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=b_++,s=":"+s+"r"+l.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},P_={readContext:ci,useCallback:Mm,useContext:ci,useEffect:nd,useImperativeHandle:Sm,useInsertionEffect:ym,useLayoutEffect:_m,useMemo:wm,useReducer:ed,useRef:gm,useState:function(){return ed(po)},useDebugValue:id,useDeferredValue:function(n){var s=ui();return Em(s,tn.memoizedState,n)},useTransition:function(){var n=ed(po)[0],s=ui().memoizedState;return[n,s]},useMutableSource:lm,useSyncExternalStore:cm,useId:bm,unstable_isNewReconciler:!1},N_={readContext:ci,useCallback:Mm,useContext:ci,useEffect:nd,useImperativeHandle:Sm,useInsertionEffect:ym,useLayoutEffect:_m,useMemo:wm,useReducer:td,useRef:gm,useState:function(){return td(po)},useDebugValue:id,useDeferredValue:function(n){var s=ui();return tn===null?s.memoizedState=n:Em(s,tn.memoizedState,n)},useTransition:function(){var n=td(po)[0],s=ui().memoizedState;return[n,s]},useMutableSource:lm,useSyncExternalStore:cm,useId:bm,unstable_isNewReconciler:!1};function xi(n,s){if(n&&n.defaultProps){s=re({},s),n=n.defaultProps;for(var l in n)s[l]===void 0&&(s[l]=n[l]);return s}return s}function rd(n,s,l,d){s=n.memoizedState,l=l(d,s),l=l==null?s:re({},s,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Pl={isMounted:function(n){return(n=n._reactInternals)?Li(n)===n:!1},enqueueSetState:function(n,s,l){n=n._reactInternals;var d=In(),v=Ir(n),x=ir(d,v);x.payload=s,l!=null&&(x.callback=l),s=Pr(n,x,v),s!==null&&(wi(s,n,v,d),Ml(s,n,v))},enqueueReplaceState:function(n,s,l){n=n._reactInternals;var d=In(),v=Ir(n),x=ir(d,v);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=Pr(n,x,v),s!==null&&(wi(s,n,v,d),Ml(s,n,v))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var l=In(),d=Ir(n),v=ir(l,d);v.tag=2,s!=null&&(v.callback=s),s=Pr(n,v,d),s!==null&&(wi(s,n,d,l),Ml(s,n,d))}};function Cm(n,s,l,d,v,x,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,x,E):s.prototype&&s.prototype.isPureReactComponent?!eo(l,d)||!eo(v,x):!0}function Pm(n,s,l){var d=!1,v=Ar,x=s.contextType;return typeof x=="object"&&x!==null?x=ci(x):(v=jn(s)?rs:En.current,d=s.contextTypes,x=(d=d!=null)?$s(n,v):Ar),s=new s(l,x),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Pl,n.stateNode=s,s._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=v,n.__reactInternalMemoizedMaskedChildContext=x),s}function Nm(n,s,l,d){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==n&&Pl.enqueueReplaceState(s,s.state,null)}function sd(n,s,l,d){var v=n.stateNode;v.props=l,v.state=n.memoizedState,v.refs={},Wu(n);var x=s.contextType;typeof x=="object"&&x!==null?v.context=ci(x):(x=jn(s)?rs:En.current,v.context=$s(n,x)),v.state=n.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(rd(n,s,x,l),v.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(s=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),s!==v.state&&Pl.enqueueReplaceState(v,v.state,null),wl(n,l,v,d),v.state=n.memoizedState),typeof v.componentDidMount=="function"&&(n.flags|=4194308)}function ea(n,s){try{var l="",d=s;do l+=he(d),d=d.return;while(d);var v=l}catch(x){v=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:s,stack:v,digest:null}}function ad(n,s,l){return{value:n,source:null,stack:l??null,digest:s??null}}function od(n,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var L_=typeof WeakMap=="function"?WeakMap:Map;function Lm(n,s,l){l=ir(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){Ol||(Ol=!0,Md=d),od(n,s)},l}function Dm(n,s,l){l=ir(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var v=s.value;l.payload=function(){return d(v)},l.callback=function(){od(n,s)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){od(n,s),typeof d!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),l}function Im(n,s,l){var d=n.pingCache;if(d===null){d=n.pingCache=new L_;var v=new Set;d.set(s,v)}else v=d.get(s),v===void 0&&(v=new Set,d.set(s,v));v.has(l)||(v.add(l),n=$_.bind(null,n,s,l),s.then(n,n))}function km(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Um(n,s,l,d,v){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=ir(-1,1),s.tag=2,Pr(l,s,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=v,n)}var D_=R.ReactCurrentOwner,Hn=!1;function Dn(n,s,l,d){s.child=n===null?nm(s,null,l,d):Ks(s,n.child,l,d)}function Om(n,s,l,d,v){l=l.render;var x=s.ref;return Zs(s,v),d=Zu(n,s,l,d,x,v),l=Qu(),n!==null&&!Hn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~v,rr(n,s,v)):(Wt&&l&&ku(s),s.flags|=1,Dn(n,s,d,v),s.child)}function Fm(n,s,l,d,v){if(n===null){var x=l.type;return typeof x=="function"&&!Cd(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,Bm(n,s,x,d,v)):(n=Vl(l.type,null,d,s,s.mode,v),n.ref=s.ref,n.return=s,s.child=n)}if(x=n.child,(n.lanes&v)===0){var E=x.memoizedProps;if(l=l.compare,l=l!==null?l:eo,l(E,d)&&n.ref===s.ref)return rr(n,s,v)}return s.flags|=1,n=Ur(x,d),n.ref=s.ref,n.return=s,s.child=n}function Bm(n,s,l,d,v){if(n!==null){var x=n.memoizedProps;if(eo(x,d)&&n.ref===s.ref)if(Hn=!1,s.pendingProps=d=x,(n.lanes&v)!==0)(n.flags&131072)!==0&&(Hn=!0);else return s.lanes=n.lanes,rr(n,s,v)}return ld(n,s,l,d,v)}function zm(n,s,l){var d=s.pendingProps,v=d.children,x=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(na,Qn),Qn|=l;else{if((l&1073741824)===0)return n=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Bt(na,Qn),Qn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=x!==null?x.baseLanes:l,Bt(na,Qn),Qn|=d}else x!==null?(d=x.baseLanes|l,s.memoizedState=null):d=l,Bt(na,Qn),Qn|=d;return Dn(n,s,v,l),s.child}function jm(n,s){var l=s.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function ld(n,s,l,d,v){var x=jn(l)?rs:En.current;return x=$s(s,x),Zs(s,v),l=Zu(n,s,l,d,x,v),d=Qu(),n!==null&&!Hn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~v,rr(n,s,v)):(Wt&&d&&ku(s),s.flags|=1,Dn(n,s,l,v),s.child)}function Hm(n,s,l,d,v){if(jn(l)){var x=!0;pl(s)}else x=!1;if(Zs(s,v),s.stateNode===null)Ll(n,s),Pm(s,l,d),sd(s,l,d,v),d=!0;else if(n===null){var E=s.stateNode,I=s.memoizedProps;E.props=I;var z=E.context,ee=l.contextType;typeof ee=="object"&&ee!==null?ee=ci(ee):(ee=jn(l)?rs:En.current,ee=$s(s,ee));var xe=l.getDerivedStateFromProps,Se=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==d||z!==ee)&&Nm(s,E,d,ee),Cr=!1;var _e=s.memoizedState;E.state=_e,wl(s,d,E,v),z=s.memoizedState,I!==d||_e!==z||zn.current||Cr?(typeof xe=="function"&&(rd(s,l,xe,d),z=s.memoizedState),(I=Cr||Cm(s,l,I,d,_e,z,ee))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=z),E.props=d,E.state=z,E.context=ee,d=I):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{E=s.stateNode,rm(n,s),I=s.memoizedProps,ee=s.type===s.elementType?I:xi(s.type,I),E.props=ee,Se=s.pendingProps,_e=E.context,z=l.contextType,typeof z=="object"&&z!==null?z=ci(z):(z=jn(l)?rs:En.current,z=$s(s,z));var ze=l.getDerivedStateFromProps;(xe=typeof ze=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==Se||_e!==z)&&Nm(s,E,d,z),Cr=!1,_e=s.memoizedState,E.state=_e,wl(s,d,E,v);var Xe=s.memoizedState;I!==Se||_e!==Xe||zn.current||Cr?(typeof ze=="function"&&(rd(s,l,ze,d),Xe=s.memoizedState),(ee=Cr||Cm(s,l,ee,d,_e,Xe,z)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(d,Xe,z),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(d,Xe,z)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=Xe),E.props=d,E.state=Xe,E.context=z,d=ee):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(s.flags|=1024),d=!1)}return cd(n,s,l,d,x,v)}function cd(n,s,l,d,v,x){jm(n,s);var E=(s.flags&128)!==0;if(!d&&!E)return v&&Xp(s,l,!1),rr(n,s,x);d=s.stateNode,D_.current=s;var I=E&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,n!==null&&E?(s.child=Ks(s,n.child,null,x),s.child=Ks(s,null,I,x)):Dn(n,s,I,x),s.memoizedState=d.state,v&&Xp(s,l,!0),s.child}function Vm(n){var s=n.stateNode;s.pendingContext?Wp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Wp(n,s.context,!1),$u(n,s.containerInfo)}function Gm(n,s,l,d,v){return Ys(),Bu(v),s.flags|=256,Dn(n,s,l,d),s.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function dd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Wm(n,s,l){var d=s.pendingProps,v=$t.current,x=!1,E=(s.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(v&2)!==0),I?(x=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(v|=1),Bt($t,v&1),n===null)return Fu(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=d.children,n=d.fallback,x?(d=s.mode,x=s.child,E={mode:"hidden",children:E},(d&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=E):x=Gl(E,d,0,null),n=ps(n,d,l,null),x.return=s,n.return=s,x.sibling=n,s.child=x,s.child.memoizedState=dd(l),s.memoizedState=ud,n):hd(s,E));if(v=n.memoizedState,v!==null&&(I=v.dehydrated,I!==null))return I_(n,s,E,d,I,v,l);if(x){x=d.fallback,E=s.mode,v=n.child,I=v.sibling;var z={mode:"hidden",children:d.children};return(E&1)===0&&s.child!==v?(d=s.child,d.childLanes=0,d.pendingProps=z,s.deletions=null):(d=Ur(v,z),d.subtreeFlags=v.subtreeFlags&14680064),I!==null?x=Ur(I,x):(x=ps(x,E,l,null),x.flags|=2),x.return=s,d.return=s,d.sibling=x,s.child=d,d=x,x=s.child,E=n.child.memoizedState,E=E===null?dd(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},x.memoizedState=E,x.childLanes=n.childLanes&~l,s.memoizedState=ud,d}return x=n.child,n=x.sibling,d=Ur(x,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,n!==null&&(l=s.deletions,l===null?(s.deletions=[n],s.flags|=16):l.push(n)),s.child=d,s.memoizedState=null,d}function hd(n,s){return s=Gl({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function Nl(n,s,l,d){return d!==null&&Bu(d),Ks(s,n.child,null,l),n=hd(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function I_(n,s,l,d,v,x,E){if(l)return s.flags&256?(s.flags&=-257,d=ad(Error(t(422))),Nl(n,s,E,d)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(x=d.fallback,v=s.mode,d=Gl({mode:"visible",children:d.children},v,0,null),x=ps(x,v,E,null),x.flags|=2,d.return=s,x.return=s,d.sibling=x,s.child=d,(s.mode&1)!==0&&Ks(s,n.child,null,E),s.child.memoizedState=dd(E),s.memoizedState=ud,x);if((s.mode&1)===0)return Nl(n,s,E,null);if(v.data==="$!"){if(d=v.nextSibling&&v.nextSibling.dataset,d)var I=d.dgst;return d=I,x=Error(t(419)),d=ad(x,d,void 0),Nl(n,s,E,d)}if(I=(E&n.childLanes)!==0,Hn||I){if(d=un,d!==null){switch(E&-E){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(d.suspendedLanes|E))!==0?0:v,v!==0&&v!==x.retryLane&&(x.retryLane=v,nr(n,v),wi(d,n,v,-1))}return Rd(),d=ad(Error(t(421))),Nl(n,s,E,d)}return v.data==="$?"?(s.flags|=128,s.child=n.child,s=X_.bind(null,n),v._reactRetry=s,null):(n=x.treeContext,Zn=br(v.nextSibling),Jn=s,Wt=!0,_i=null,n!==null&&(oi[li++]=er,oi[li++]=tr,oi[li++]=ss,er=n.id,tr=n.overflow,ss=s),s=hd(s,d.children),s.flags|=4096,s)}function $m(n,s,l){n.lanes|=s;var d=n.alternate;d!==null&&(d.lanes|=s),Vu(n.return,s,l)}function fd(n,s,l,d,v){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:v}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=d,x.tail=l,x.tailMode=v)}function Xm(n,s,l){var d=s.pendingProps,v=d.revealOrder,x=d.tail;if(Dn(n,s,d.children,l),d=$t.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$m(n,l,s);else if(n.tag===19)$m(n,l,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Bt($t,d),(s.mode&1)===0)s.memoizedState=null;else switch(v){case"forwards":for(l=s.child,v=null;l!==null;)n=l.alternate,n!==null&&El(n)===null&&(v=l),l=l.sibling;l=v,l===null?(v=s.child,s.child=null):(v=l.sibling,l.sibling=null),fd(s,!1,v,l,x);break;case"backwards":for(l=null,v=s.child,s.child=null;v!==null;){if(n=v.alternate,n!==null&&El(n)===null){s.child=v;break}n=v.sibling,v.sibling=l,l=v,v=n}fd(s,!0,l,null,x);break;case"together":fd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ll(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function rr(n,s,l){if(n!==null&&(s.dependencies=n.dependencies),us|=s.lanes,(l&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,l=Ur(n,n.pendingProps),s.child=l,l.return=s;n.sibling!==null;)n=n.sibling,l=l.sibling=Ur(n,n.pendingProps),l.return=s;l.sibling=null}return s.child}function k_(n,s,l){switch(s.tag){case 3:Vm(s),Ys();break;case 5:om(s);break;case 1:jn(s.type)&&pl(s);break;case 4:$u(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,v=s.memoizedProps.value;Bt(xl,d._currentValue),d._currentValue=v;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Bt($t,$t.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Wm(n,s,l):(Bt($t,$t.current&1),n=rr(n,s,l),n!==null?n.sibling:null);Bt($t,$t.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(n.flags&128)!==0){if(d)return Xm(n,s,l);s.flags|=128}if(v=s.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),Bt($t,$t.current),d)break;return null;case 22:case 23:return s.lanes=0,zm(n,s,l)}return rr(n,s,l)}var qm,pd,Ym,Km;qm=function(n,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},pd=function(){},Ym=function(n,s,l,d){var v=n.memoizedProps;if(v!==d){n=s.stateNode,ls(ki.current);var x=null;switch(l){case"input":v=k(n,v),d=k(n,d),x=[];break;case"select":v=re({},v,{value:void 0}),d=re({},d,{value:void 0}),x=[];break;case"textarea":v=A(n,v),d=A(n,d),x=[];break;default:typeof v.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=dl)}_t(l,d);var E;l=null;for(ee in v)if(!d.hasOwnProperty(ee)&&v.hasOwnProperty(ee)&&v[ee]!=null)if(ee==="style"){var I=v[ee];for(E in I)I.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?x||(x=[]):(x=x||[]).push(ee,null));for(ee in d){var z=d[ee];if(I=v!=null?v[ee]:void 0,d.hasOwnProperty(ee)&&z!==I&&(z!=null||I!=null))if(ee==="style")if(I){for(E in I)!I.hasOwnProperty(E)||z&&z.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in z)z.hasOwnProperty(E)&&I[E]!==z[E]&&(l||(l={}),l[E]=z[E])}else l||(x||(x=[]),x.push(ee,l)),l=z;else ee==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(x=x||[]).push(ee,z)):ee==="children"?typeof z!="string"&&typeof z!="number"||(x=x||[]).push(ee,""+z):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(z!=null&&ee==="onScroll"&&Ht("scroll",n),x||I===z||(x=[])):(x=x||[]).push(ee,z))}l&&(x=x||[]).push("style",l);var ee=x;(s.updateQueue=ee)&&(s.flags|=4)}},Km=function(n,s,l,d){l!==d&&(s.flags|=4)};function go(n,s){if(!Wt)switch(n.tailMode){case"hidden":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function Tn(n){var s=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(s)for(var v=n.child;v!==null;)l|=v.lanes|v.childLanes,d|=v.subtreeFlags&14680064,d|=v.flags&14680064,v.return=n,v=v.sibling;else for(v=n.child;v!==null;)l|=v.lanes|v.childLanes,d|=v.subtreeFlags,d|=v.flags,v.return=n,v=v.sibling;return n.subtreeFlags|=d,n.childLanes=l,s}function U_(n,s,l){var d=s.pendingProps;switch(Uu(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(s),null;case 1:return jn(s.type)&&fl(),Tn(s),null;case 3:return d=s.stateNode,Qs(),Vt(zn),Vt(En),Yu(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(yl(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,_i!==null&&(bd(_i),_i=null))),pd(n,s),Tn(s),null;case 5:Xu(s);var v=ls(uo.current);if(l=s.type,n!==null&&s.stateNode!=null)Ym(n,s,l,d,v),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Tn(s),null}if(n=ls(ki.current),yl(s)){d=s.stateNode,l=s.type;var x=s.memoizedProps;switch(d[Ii]=s,d[so]=x,n=(s.mode&1)!==0,l){case"dialog":Ht("cancel",d),Ht("close",d);break;case"iframe":case"object":case"embed":Ht("load",d);break;case"video":case"audio":for(v=0;v<no.length;v++)Ht(no[v],d);break;case"source":Ht("error",d);break;case"img":case"image":case"link":Ht("error",d),Ht("load",d);break;case"details":Ht("toggle",d);break;case"input":Ze(d,x),Ht("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!x.multiple},Ht("invalid",d);break;case"textarea":K(d,x),Ht("invalid",d)}_t(l,x),v=null;for(var E in x)if(x.hasOwnProperty(E)){var I=x[E];E==="children"?typeof I=="string"?d.textContent!==I&&(x.suppressHydrationWarning!==!0&&ul(d.textContent,I,n),v=["children",I]):typeof I=="number"&&d.textContent!==""+I&&(x.suppressHydrationWarning!==!0&&ul(d.textContent,I,n),v=["children",""+I]):a.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Ht("scroll",d)}switch(l){case"input":yt(d),Le(d,x,!0);break;case"textarea":yt(d),ye(d);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(d.onclick=dl)}d=v,s.updateQueue=d,d!==null&&(s.flags|=4)}else{E=v.nodeType===9?v:v.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=E.createElement(l,{is:d.is}):(n=E.createElement(l),l==="select"&&(E=n,d.multiple?E.multiple=!0:d.size&&(E.size=d.size))):n=E.createElementNS(n,l),n[Ii]=s,n[so]=d,qm(n,s,!1,!1),s.stateNode=n;e:{switch(E=ht(l,d),l){case"dialog":Ht("cancel",n),Ht("close",n),v=d;break;case"iframe":case"object":case"embed":Ht("load",n),v=d;break;case"video":case"audio":for(v=0;v<no.length;v++)Ht(no[v],n);v=d;break;case"source":Ht("error",n),v=d;break;case"img":case"image":case"link":Ht("error",n),Ht("load",n),v=d;break;case"details":Ht("toggle",n),v=d;break;case"input":Ze(n,d),v=k(n,d),Ht("invalid",n);break;case"option":v=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},v=re({},d,{value:void 0}),Ht("invalid",n);break;case"textarea":K(n,d),v=A(n,d),Ht("invalid",n);break;default:v=d}_t(l,v),I=v;for(x in I)if(I.hasOwnProperty(x)){var z=I[x];x==="style"?ot(n,z):x==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ve(n,z)):x==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&pt(n,z):typeof z=="number"&&pt(n,""+z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?z!=null&&x==="onScroll"&&Ht("scroll",n):z!=null&&C(n,x,z,E))}switch(l){case"input":yt(n),Le(n,d,!1);break;case"textarea":yt(n),ye(n);break;case"option":d.value!=null&&n.setAttribute("value",""+Ne(d.value));break;case"select":n.multiple=!!d.multiple,x=d.value,x!=null?L(n,!!d.multiple,x,!1):d.defaultValue!=null&&L(n,!!d.multiple,d.defaultValue,!0);break;default:typeof v.onClick=="function"&&(n.onclick=dl)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Tn(s),null;case 6:if(n&&s.stateNode!=null)Km(n,s,n.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=ls(uo.current),ls(ki.current),yl(s)){if(d=s.stateNode,l=s.memoizedProps,d[Ii]=s,(x=d.nodeValue!==l)&&(n=Jn,n!==null))switch(n.tag){case 3:ul(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ul(d.nodeValue,l,(n.mode&1)!==0)}x&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Ii]=s,s.stateNode=d}return Tn(s),null;case 13:if(Vt($t),d=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Wt&&Zn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Qp(),Ys(),s.flags|=98560,x=!1;else if(x=yl(s),d!==null&&d.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Ii]=s}else Ys(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Tn(s),x=!1}else _i!==null&&(bd(_i),_i=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||($t.current&1)!==0?nn===0&&(nn=3):Rd())),s.updateQueue!==null&&(s.flags|=4),Tn(s),null);case 4:return Qs(),pd(n,s),n===null&&io(s.stateNode.containerInfo),Tn(s),null;case 10:return Hu(s.type._context),Tn(s),null;case 17:return jn(s.type)&&fl(),Tn(s),null;case 19:if(Vt($t),x=s.memoizedState,x===null)return Tn(s),null;if(d=(s.flags&128)!==0,E=x.rendering,E===null)if(d)go(x,!1);else{if(nn!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(E=El(n),E!==null){for(s.flags|=128,go(x,!1),d=E.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)x=l,n=d,x.flags&=14680066,E=x.alternate,E===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=E.childLanes,x.lanes=E.lanes,x.child=E.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=E.memoizedProps,x.memoizedState=E.memoizedState,x.updateQueue=E.updateQueue,x.type=E.type,n=E.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Bt($t,$t.current&1|2),s.child}n=n.sibling}x.tail!==null&&Te()>ia&&(s.flags|=128,d=!0,go(x,!1),s.lanes=4194304)}else{if(!d)if(n=El(E),n!==null){if(s.flags|=128,d=!0,l=n.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),go(x,!0),x.tail===null&&x.tailMode==="hidden"&&!E.alternate&&!Wt)return Tn(s),null}else 2*Te()-x.renderingStartTime>ia&&l!==1073741824&&(s.flags|=128,d=!0,go(x,!1),s.lanes=4194304);x.isBackwards?(E.sibling=s.child,s.child=E):(l=x.last,l!==null?l.sibling=E:s.child=E,x.last=E)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=Te(),s.sibling=null,l=$t.current,Bt($t,d?l&1|2:l&1),s):(Tn(s),null);case 22:case 23:return Ad(),d=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(Qn&1073741824)!==0&&(Tn(s),s.subtreeFlags&6&&(s.flags|=8192)):Tn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function O_(n,s){switch(Uu(s),s.tag){case 1:return jn(s.type)&&fl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Qs(),Vt(zn),Vt(En),Yu(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Xu(s),null;case 13:if(Vt($t),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Ys()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Vt($t),null;case 4:return Qs(),null;case 10:return Hu(s.type._context),null;case 22:case 23:return Ad(),null;case 24:return null;default:return null}}var Dl=!1,An=!1,F_=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function ta(n,s){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){Yt(n,s,d)}else l.current=null}function md(n,s,l){try{l()}catch(d){Yt(n,s,d)}}var Jm=!1;function B_(n,s){if(Au=Qo,n=Cp(),_u(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var v=d.anchorOffset,x=d.focusNode;d=d.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var E=0,I=-1,z=-1,ee=0,xe=0,Se=n,_e=null;t:for(;;){for(var ze;Se!==l||v!==0&&Se.nodeType!==3||(I=E+v),Se!==x||d!==0&&Se.nodeType!==3||(z=E+d),Se.nodeType===3&&(E+=Se.nodeValue.length),(ze=Se.firstChild)!==null;)_e=Se,Se=ze;for(;;){if(Se===n)break t;if(_e===l&&++ee===v&&(I=E),_e===x&&++xe===d&&(z=E),(ze=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=ze}l=I===-1||z===-1?null:{start:I,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ru={focusedElem:n,selectionRange:l},Qo=!1,Ge=s;Ge!==null;)if(s=Ge,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,Ge=n;else for(;Ge!==null;){s=Ge;try{var Xe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ke=Xe.memoizedProps,Kt=Xe.memoizedState,q=s.stateNode,V=q.getSnapshotBeforeUpdate(s.elementType===s.type?Ke:xi(s.type,Ke),Kt);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var J=s.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Yt(s,s.return,Re)}if(n=s.sibling,n!==null){n.return=s.return,Ge=n;break}Ge=s.return}return Xe=Jm,Jm=!1,Xe}function vo(n,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var v=d=d.next;do{if((v.tag&n)===n){var x=v.destroy;v.destroy=void 0,x!==void 0&&md(s,l,x)}v=v.next}while(v!==d)}}function Il(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function gd(n){var s=n.ref;if(s!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof s=="function"?s(n):s.current=n}}function Zm(n){var s=n.alternate;s!==null&&(n.alternate=null,Zm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Ii],delete s[so],delete s[Lu],delete s[S_],delete s[M_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Qm(n){return n.tag===5||n.tag===3||n.tag===4}function eg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Qm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vd(n,s,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(n,s):l.insertBefore(n,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(n,l)):(s=l,s.appendChild(n)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=dl));else if(d!==4&&(n=n.child,n!==null))for(vd(n,s,l),n=n.sibling;n!==null;)vd(n,s,l),n=n.sibling}function yd(n,s,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,s?l.insertBefore(n,s):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(yd(n,s,l),n=n.sibling;n!==null;)yd(n,s,l),n=n.sibling}var mn=null,Si=!1;function Nr(n,s,l){for(l=l.child;l!==null;)tg(n,s,l),l=l.sibling}function tg(n,s,l){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Nt,l)}catch{}switch(l.tag){case 5:An||ta(l,s);case 6:var d=mn,v=Si;mn=null,Nr(n,s,l),mn=d,Si=v,mn!==null&&(Si?(n=mn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):mn.removeChild(l.stateNode));break;case 18:mn!==null&&(Si?(n=mn,l=l.stateNode,n.nodeType===8?Nu(n.parentNode,l):n.nodeType===1&&Nu(n,l),qa(n)):Nu(mn,l.stateNode));break;case 4:d=mn,v=Si,mn=l.stateNode.containerInfo,Si=!0,Nr(n,s,l),mn=d,Si=v;break;case 0:case 11:case 14:case 15:if(!An&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){v=d=d.next;do{var x=v,E=x.destroy;x=x.tag,E!==void 0&&((x&2)!==0||(x&4)!==0)&&md(l,s,E),v=v.next}while(v!==d)}Nr(n,s,l);break;case 1:if(!An&&(ta(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(I){Yt(l,s,I)}Nr(n,s,l);break;case 21:Nr(n,s,l);break;case 22:l.mode&1?(An=(d=An)||l.memoizedState!==null,Nr(n,s,l),An=d):Nr(n,s,l);break;default:Nr(n,s,l)}}function ng(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new F_),s.forEach(function(d){var v=q_.bind(null,n,d);l.has(d)||(l.add(d),d.then(v,v))})}}function Mi(n,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var v=l[d];try{var x=n,E=s,I=E;e:for(;I!==null;){switch(I.tag){case 5:mn=I.stateNode,Si=!1;break e;case 3:mn=I.stateNode.containerInfo,Si=!0;break e;case 4:mn=I.stateNode.containerInfo,Si=!0;break e}I=I.return}if(mn===null)throw Error(t(160));tg(x,E,v),mn=null,Si=!1;var z=v.alternate;z!==null&&(z.return=null),v.return=null}catch(ee){Yt(v,s,ee)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)ig(s,n),s=s.sibling}function ig(n,s){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mi(s,n),Oi(n),d&4){try{vo(3,n,n.return),Il(3,n)}catch(Ke){Yt(n,n.return,Ke)}try{vo(5,n,n.return)}catch(Ke){Yt(n,n.return,Ke)}}break;case 1:Mi(s,n),Oi(n),d&512&&l!==null&&ta(l,l.return);break;case 5:if(Mi(s,n),Oi(n),d&512&&l!==null&&ta(l,l.return),n.flags&32){var v=n.stateNode;try{pt(v,"")}catch(Ke){Yt(n,n.return,Ke)}}if(d&4&&(v=n.stateNode,v!=null)){var x=n.memoizedProps,E=l!==null?l.memoizedProps:x,I=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{I==="input"&&x.type==="radio"&&x.name!=null&&Me(v,x),ht(I,E);var ee=ht(I,x);for(E=0;E<z.length;E+=2){var xe=z[E],Se=z[E+1];xe==="style"?ot(v,Se):xe==="dangerouslySetInnerHTML"?Ve(v,Se):xe==="children"?pt(v,Se):C(v,xe,Se,ee)}switch(I){case"input":He(v,x);break;case"textarea":de(v,x);break;case"select":var _e=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!x.multiple;var ze=x.value;ze!=null?L(v,!!x.multiple,ze,!1):_e!==!!x.multiple&&(x.defaultValue!=null?L(v,!!x.multiple,x.defaultValue,!0):L(v,!!x.multiple,x.multiple?[]:"",!1))}v[so]=x}catch(Ke){Yt(n,n.return,Ke)}}break;case 6:if(Mi(s,n),Oi(n),d&4){if(n.stateNode===null)throw Error(t(162));v=n.stateNode,x=n.memoizedProps;try{v.nodeValue=x}catch(Ke){Yt(n,n.return,Ke)}}break;case 3:if(Mi(s,n),Oi(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{qa(s.containerInfo)}catch(Ke){Yt(n,n.return,Ke)}break;case 4:Mi(s,n),Oi(n);break;case 13:Mi(s,n),Oi(n),v=n.child,v.flags&8192&&(x=v.memoizedState!==null,v.stateNode.isHidden=x,!x||v.alternate!==null&&v.alternate.memoizedState!==null||(Sd=Te())),d&4&&ng(n);break;case 22:if(xe=l!==null&&l.memoizedState!==null,n.mode&1?(An=(ee=An)||xe,Mi(s,n),An=ee):Mi(s,n),Oi(n),d&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!xe&&(n.mode&1)!==0)for(Ge=n,xe=n.child;xe!==null;){for(Se=Ge=xe;Ge!==null;){switch(_e=Ge,ze=_e.child,_e.tag){case 0:case 11:case 14:case 15:vo(4,_e,_e.return);break;case 1:ta(_e,_e.return);var Xe=_e.stateNode;if(typeof Xe.componentWillUnmount=="function"){d=_e,l=_e.return;try{s=d,Xe.props=s.memoizedProps,Xe.state=s.memoizedState,Xe.componentWillUnmount()}catch(Ke){Yt(d,l,Ke)}}break;case 5:ta(_e,_e.return);break;case 22:if(_e.memoizedState!==null){ag(Se);continue}}ze!==null?(ze.return=_e,Ge=ze):ag(Se)}xe=xe.sibling}e:for(xe=null,Se=n;;){if(Se.tag===5){if(xe===null){xe=Se;try{v=Se.stateNode,ee?(x=v.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(I=Se.stateNode,z=Se.memoizedProps.style,E=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=at("display",E))}catch(Ke){Yt(n,n.return,Ke)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=ee?"":Se.memoizedProps}catch(Ke){Yt(n,n.return,Ke)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Mi(s,n),Oi(n),d&4&&ng(n);break;case 21:break;default:Mi(s,n),Oi(n)}}function Oi(n){var s=n.flags;if(s&2){try{e:{for(var l=n.return;l!==null;){if(Qm(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var v=d.stateNode;d.flags&32&&(pt(v,""),d.flags&=-33);var x=eg(n);yd(n,x,v);break;case 3:case 4:var E=d.stateNode.containerInfo,I=eg(n);vd(n,I,E);break;default:throw Error(t(161))}}catch(z){Yt(n,n.return,z)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function z_(n,s,l){Ge=n,rg(n)}function rg(n,s,l){for(var d=(n.mode&1)!==0;Ge!==null;){var v=Ge,x=v.child;if(v.tag===22&&d){var E=v.memoizedState!==null||Dl;if(!E){var I=v.alternate,z=I!==null&&I.memoizedState!==null||An;I=Dl;var ee=An;if(Dl=E,(An=z)&&!ee)for(Ge=v;Ge!==null;)E=Ge,z=E.child,E.tag===22&&E.memoizedState!==null?og(v):z!==null?(z.return=E,Ge=z):og(v);for(;x!==null;)Ge=x,rg(x),x=x.sibling;Ge=v,Dl=I,An=ee}sg(n)}else(v.subtreeFlags&8772)!==0&&x!==null?(x.return=v,Ge=x):sg(n)}}function sg(n){for(;Ge!==null;){var s=Ge;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:An||Il(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!An)if(l===null)d.componentDidMount();else{var v=s.elementType===s.type?l.memoizedProps:xi(s.type,l.memoizedProps);d.componentDidUpdate(v,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&am(s,x,d);break;case 3:var E=s.updateQueue;if(E!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}am(s,E,l)}break;case 5:var I=s.stateNode;if(l===null&&s.flags&4){l=I;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ee=s.alternate;if(ee!==null){var xe=ee.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&qa(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||s.flags&512&&gd(s)}catch(_e){Yt(s,s.return,_e)}}if(s===n){Ge=null;break}if(l=s.sibling,l!==null){l.return=s.return,Ge=l;break}Ge=s.return}}function ag(n){for(;Ge!==null;){var s=Ge;if(s===n){Ge=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Ge=l;break}Ge=s.return}}function og(n){for(;Ge!==null;){var s=Ge;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Il(4,s)}catch(z){Yt(s,l,z)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var v=s.return;try{d.componentDidMount()}catch(z){Yt(s,v,z)}}var x=s.return;try{gd(s)}catch(z){Yt(s,x,z)}break;case 5:var E=s.return;try{gd(s)}catch(z){Yt(s,E,z)}}}catch(z){Yt(s,s.return,z)}if(s===n){Ge=null;break}var I=s.sibling;if(I!==null){I.return=s.return,Ge=I;break}Ge=s.return}}var j_=Math.ceil,kl=R.ReactCurrentDispatcher,_d=R.ReactCurrentOwner,di=R.ReactCurrentBatchConfig,Tt=0,un=null,Jt=null,gn=0,Qn=0,na=Tr(0),nn=0,yo=null,us=0,Ul=0,xd=0,_o=null,Vn=null,Sd=0,ia=1/0,sr=null,Ol=!1,Md=null,Lr=null,Fl=!1,Dr=null,Bl=0,xo=0,wd=null,zl=-1,jl=0;function In(){return(Tt&6)!==0?Te():zl!==-1?zl:zl=Te()}function Ir(n){return(n.mode&1)===0?1:(Tt&2)!==0&&gn!==0?gn&-gn:E_.transition!==null?(jl===0&&(jl=Ln()),jl):(n=Dt,n!==0||(n=window.event,n=n===void 0?16:cp(n.type)),n)}function wi(n,s,l,d){if(50<xo)throw xo=0,wd=null,Error(t(185));Bn(n,l,d),((Tt&2)===0||n!==un)&&(n===un&&((Tt&2)===0&&(Ul|=l),nn===4&&kr(n,gn)),Gn(n,d),l===1&&Tt===0&&(s.mode&1)===0&&(ia=Te()+500,ml&&Rr()))}function Gn(n,s){var l=n.callbackNode;si(n,s);var d=Di(n,n===un?gn:0);if(d===0)l!==null&&ie(l),n.callbackNode=null,n.callbackPriority=0;else if(s=d&-d,n.callbackPriority!==s){if(l!=null&&ie(l),s===1)n.tag===0?w_(cg.bind(null,n)):qp(cg.bind(null,n)),__(function(){(Tt&6)===0&&Rr()}),l=null;else{switch(tp(d)){case 1:l=Ye;break;case 4:l=ct;break;case 16:l=dt;break;case 536870912:l=wt;break;default:l=dt}l=vg(l,lg.bind(null,n))}n.callbackPriority=s,n.callbackNode=l}}function lg(n,s){if(zl=-1,jl=0,(Tt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(ra()&&n.callbackNode!==l)return null;var d=Di(n,n===un?gn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||s)s=Hl(n,d);else{s=d;var v=Tt;Tt|=2;var x=dg();(un!==n||gn!==s)&&(sr=null,ia=Te()+500,hs(n,s));do try{G_();break}catch(I){ug(n,I)}while(!0);ju(),kl.current=x,Tt=v,Jt!==null?s=0:(un=null,gn=0,s=nn)}if(s!==0){if(s===2&&(v=Ji(n),v!==0&&(d=v,s=Ed(n,v))),s===1)throw l=yo,hs(n,0),kr(n,d),Gn(n,Te()),l;if(s===6)kr(n,d);else{if(v=n.current.alternate,(d&30)===0&&!H_(v)&&(s=Hl(n,d),s===2&&(x=Ji(n),x!==0&&(d=x,s=Ed(n,x))),s===1))throw l=yo,hs(n,0),kr(n,d),Gn(n,Te()),l;switch(n.finishedWork=v,n.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:fs(n,Vn,sr);break;case 3:if(kr(n,d),(d&130023424)===d&&(s=Sd+500-Te(),10<s)){if(Di(n,0)!==0)break;if(v=n.suspendedLanes,(v&d)!==d){In(),n.pingedLanes|=n.suspendedLanes&v;break}n.timeoutHandle=Pu(fs.bind(null,n,Vn,sr),s);break}fs(n,Vn,sr);break;case 4:if(kr(n,d),(d&4194240)===d)break;for(s=n.eventTimes,v=-1;0<d;){var E=31-mt(d);x=1<<E,E=s[E],E>v&&(v=E),d&=~x}if(d=v,d=Te()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*j_(d/1960))-d,10<d){n.timeoutHandle=Pu(fs.bind(null,n,Vn,sr),d);break}fs(n,Vn,sr);break;case 5:fs(n,Vn,sr);break;default:throw Error(t(329))}}}return Gn(n,Te()),n.callbackNode===l?lg.bind(null,n):null}function Ed(n,s){var l=_o;return n.current.memoizedState.isDehydrated&&(hs(n,s).flags|=256),n=Hl(n,s),n!==2&&(s=Vn,Vn=l,s!==null&&bd(s)),n}function bd(n){Vn===null?Vn=n:Vn.push.apply(Vn,n)}function H_(n){for(var s=n;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var v=l[d],x=v.getSnapshot;v=v.value;try{if(!yi(x(),v))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function kr(n,s){for(s&=~xd,s&=~Ul,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var l=31-mt(s),d=1<<l;n[l]=-1,s&=~d}}function cg(n){if((Tt&6)!==0)throw Error(t(327));ra();var s=Di(n,0);if((s&1)===0)return Gn(n,Te()),null;var l=Hl(n,s);if(n.tag!==0&&l===2){var d=Ji(n);d!==0&&(s=d,l=Ed(n,d))}if(l===1)throw l=yo,hs(n,0),kr(n,s),Gn(n,Te()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,fs(n,Vn,sr),Gn(n,Te()),null}function Td(n,s){var l=Tt;Tt|=1;try{return n(s)}finally{Tt=l,Tt===0&&(ia=Te()+500,ml&&Rr())}}function ds(n){Dr!==null&&Dr.tag===0&&(Tt&6)===0&&ra();var s=Tt;Tt|=1;var l=di.transition,d=Dt;try{if(di.transition=null,Dt=1,n)return n()}finally{Dt=d,di.transition=l,Tt=s,(Tt&6)===0&&Rr()}}function Ad(){Qn=na.current,Vt(na)}function hs(n,s){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,y_(l)),Jt!==null)for(l=Jt.return;l!==null;){var d=l;switch(Uu(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&fl();break;case 3:Qs(),Vt(zn),Vt(En),Yu();break;case 5:Xu(d);break;case 4:Qs();break;case 13:Vt($t);break;case 19:Vt($t);break;case 10:Hu(d.type._context);break;case 22:case 23:Ad()}l=l.return}if(un=n,Jt=n=Ur(n.current,null),gn=Qn=s,nn=0,yo=null,xd=Ul=us=0,Vn=_o=null,os!==null){for(s=0;s<os.length;s++)if(l=os[s],d=l.interleaved,d!==null){l.interleaved=null;var v=d.next,x=l.pending;if(x!==null){var E=x.next;x.next=v,d.next=E}l.pending=d}os=null}return n}function ug(n,s){do{var l=Jt;try{if(ju(),bl.current=Cl,Tl){for(var d=Xt.memoizedState;d!==null;){var v=d.queue;v!==null&&(v.pending=null),d=d.next}Tl=!1}if(cs=0,cn=tn=Xt=null,ho=!1,fo=0,_d.current=null,l===null||l.return===null){nn=1,yo=s,Jt=null;break}e:{var x=n,E=l.return,I=l,z=s;if(s=gn,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ee=z,xe=I,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ze=km(E);if(ze!==null){ze.flags&=-257,Um(ze,E,I,x,s),ze.mode&1&&Im(x,ee,s),s=ze,z=ee;var Xe=s.updateQueue;if(Xe===null){var Ke=new Set;Ke.add(z),s.updateQueue=Ke}else Xe.add(z);break e}else{if((s&1)===0){Im(x,ee,s),Rd();break e}z=Error(t(426))}}else if(Wt&&I.mode&1){var Kt=km(E);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),Um(Kt,E,I,x,s),Bu(ea(z,I));break e}}x=z=ea(z,I),nn!==4&&(nn=2),_o===null?_o=[x]:_o.push(x),x=E;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var q=Lm(x,z,s);sm(x,q);break e;case 1:I=z;var V=x.type,J=x.stateNode;if((x.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(Lr===null||!Lr.has(J)))){x.flags|=65536,s&=-s,x.lanes|=s;var Re=Dm(x,I,s);sm(x,Re);break e}}x=x.return}while(x!==null)}fg(l)}catch(tt){s=tt,Jt===l&&l!==null&&(Jt=l=l.return);continue}break}while(!0)}function dg(){var n=kl.current;return kl.current=Cl,n===null?Cl:n}function Rd(){(nn===0||nn===3||nn===2)&&(nn=4),un===null||(us&268435455)===0&&(Ul&268435455)===0||kr(un,gn)}function Hl(n,s){var l=Tt;Tt|=2;var d=dg();(un!==n||gn!==s)&&(sr=null,hs(n,s));do try{V_();break}catch(v){ug(n,v)}while(!0);if(ju(),Tt=l,kl.current=d,Jt!==null)throw Error(t(261));return un=null,gn=0,nn}function V_(){for(;Jt!==null;)hg(Jt)}function G_(){for(;Jt!==null&&!X();)hg(Jt)}function hg(n){var s=gg(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,s===null?fg(n):Jt=s,_d.current=null}function fg(n){var s=n;do{var l=s.alternate;if(n=s.return,(s.flags&32768)===0){if(l=U_(l,s,Qn),l!==null){Jt=l;return}}else{if(l=O_(l,s),l!==null){l.flags&=32767,Jt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nn=6,Jt=null;return}}if(s=s.sibling,s!==null){Jt=s;return}Jt=s=n}while(s!==null);nn===0&&(nn=5)}function fs(n,s,l){var d=Dt,v=di.transition;try{di.transition=null,Dt=1,W_(n,s,l,d)}finally{di.transition=v,Dt=d}return null}function W_(n,s,l,d){do ra();while(Dr!==null);if((Tt&6)!==0)throw Error(t(327));l=n.finishedWork;var v=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=l.lanes|l.childLanes;if(Ko(n,x),n===un&&(Jt=un=null,gn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Fl||(Fl=!0,vg(dt,function(){return ra(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=di.transition,di.transition=null;var E=Dt;Dt=1;var I=Tt;Tt|=4,_d.current=null,B_(n,l),ig(l,n),d_(Ru),Qo=!!Au,Ru=Au=null,n.current=l,z_(l),Ce(),Tt=I,Dt=E,di.transition=x}else n.current=l;if(Fl&&(Fl=!1,Dr=n,Bl=v),x=n.pendingLanes,x===0&&(Lr=null),Mn(l.stateNode),Gn(n,Te()),s!==null)for(d=n.onRecoverableError,l=0;l<s.length;l++)v=s[l],d(v.value,{componentStack:v.stack,digest:v.digest});if(Ol)throw Ol=!1,n=Md,Md=null,n;return(Bl&1)!==0&&n.tag!==0&&ra(),x=n.pendingLanes,(x&1)!==0?n===wd?xo++:(xo=0,wd=n):xo=0,Rr(),null}function ra(){if(Dr!==null){var n=tp(Bl),s=di.transition,l=Dt;try{if(di.transition=null,Dt=16>n?16:n,Dr===null)var d=!1;else{if(n=Dr,Dr=null,Bl=0,(Tt&6)!==0)throw Error(t(331));var v=Tt;for(Tt|=4,Ge=n.current;Ge!==null;){var x=Ge,E=x.child;if((Ge.flags&16)!==0){var I=x.deletions;if(I!==null){for(var z=0;z<I.length;z++){var ee=I[z];for(Ge=ee;Ge!==null;){var xe=Ge;switch(xe.tag){case 0:case 11:case 15:vo(8,xe,x)}var Se=xe.child;if(Se!==null)Se.return=xe,Ge=Se;else for(;Ge!==null;){xe=Ge;var _e=xe.sibling,ze=xe.return;if(Zm(xe),xe===ee){Ge=null;break}if(_e!==null){_e.return=ze,Ge=_e;break}Ge=ze}}}var Xe=x.alternate;if(Xe!==null){var Ke=Xe.child;if(Ke!==null){Xe.child=null;do{var Kt=Ke.sibling;Ke.sibling=null,Ke=Kt}while(Ke!==null)}}Ge=x}}if((x.subtreeFlags&2064)!==0&&E!==null)E.return=x,Ge=E;else e:for(;Ge!==null;){if(x=Ge,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:vo(9,x,x.return)}var q=x.sibling;if(q!==null){q.return=x.return,Ge=q;break e}Ge=x.return}}var V=n.current;for(Ge=V;Ge!==null;){E=Ge;var J=E.child;if((E.subtreeFlags&2064)!==0&&J!==null)J.return=E,Ge=J;else e:for(E=V;Ge!==null;){if(I=Ge,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Il(9,I)}}catch(tt){Yt(I,I.return,tt)}if(I===E){Ge=null;break e}var Re=I.sibling;if(Re!==null){Re.return=I.return,Ge=Re;break e}Ge=I.return}}if(Tt=v,Rr(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Nt,n)}catch{}d=!0}return d}finally{Dt=l,di.transition=s}}return!1}function pg(n,s,l){s=ea(l,s),s=Lm(n,s,1),n=Pr(n,s,1),s=In(),n!==null&&(Bn(n,1,s),Gn(n,s))}function Yt(n,s,l){if(n.tag===3)pg(n,n,l);else for(;s!==null;){if(s.tag===3){pg(s,n,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Lr===null||!Lr.has(d))){n=ea(l,n),n=Dm(s,n,1),s=Pr(s,n,1),n=In(),s!==null&&(Bn(s,1,n),Gn(s,n));break}}s=s.return}}function $_(n,s,l){var d=n.pingCache;d!==null&&d.delete(s),s=In(),n.pingedLanes|=n.suspendedLanes&l,un===n&&(gn&l)===l&&(nn===4||nn===3&&(gn&130023424)===gn&&500>Te()-Sd?hs(n,0):xd|=l),Gn(n,s)}function mg(n,s){s===0&&((n.mode&1)===0?s=1:(s=vi,vi<<=1,(vi&130023424)===0&&(vi=4194304)));var l=In();n=nr(n,s),n!==null&&(Bn(n,s,l),Gn(n,l))}function X_(n){var s=n.memoizedState,l=0;s!==null&&(l=s.retryLane),mg(n,l)}function q_(n,s){var l=0;switch(n.tag){case 13:var d=n.stateNode,v=n.memoizedState;v!==null&&(l=v.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),mg(n,l)}var gg;gg=function(n,s,l){if(n!==null)if(n.memoizedProps!==s.pendingProps||zn.current)Hn=!0;else{if((n.lanes&l)===0&&(s.flags&128)===0)return Hn=!1,k_(n,s,l);Hn=(n.flags&131072)!==0}else Hn=!1,Wt&&(s.flags&1048576)!==0&&Yp(s,vl,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;Ll(n,s),n=s.pendingProps;var v=$s(s,En.current);Zs(s,l),v=Zu(null,s,d,n,v,l);var x=Qu();return s.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,jn(d)?(x=!0,pl(s)):x=!1,s.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,Wu(s),v.updater=Pl,s.stateNode=v,v._reactInternals=s,sd(s,d,n,l),s=cd(null,s,d,!0,x,l)):(s.tag=0,Wt&&x&&ku(s),Dn(null,s,v,l),s=s.child),s;case 16:d=s.elementType;e:{switch(Ll(n,s),n=s.pendingProps,v=d._init,d=v(d._payload),s.type=d,v=s.tag=K_(d),n=xi(d,n),v){case 0:s=ld(null,s,d,n,l);break e;case 1:s=Hm(null,s,d,n,l);break e;case 11:s=Om(null,s,d,n,l);break e;case 14:s=Fm(null,s,d,xi(d.type,n),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,v=s.pendingProps,v=s.elementType===d?v:xi(d,v),ld(n,s,d,v,l);case 1:return d=s.type,v=s.pendingProps,v=s.elementType===d?v:xi(d,v),Hm(n,s,d,v,l);case 3:e:{if(Vm(s),n===null)throw Error(t(387));d=s.pendingProps,x=s.memoizedState,v=x.element,rm(n,s),wl(s,d,null,l);var E=s.memoizedState;if(d=E.element,x.isDehydrated)if(x={element:d,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){v=ea(Error(t(423)),s),s=Gm(n,s,d,l,v);break e}else if(d!==v){v=ea(Error(t(424)),s),s=Gm(n,s,d,l,v);break e}else for(Zn=br(s.stateNode.containerInfo.firstChild),Jn=s,Wt=!0,_i=null,l=nm(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ys(),d===v){s=rr(n,s,l);break e}Dn(n,s,d,l)}s=s.child}return s;case 5:return om(s),n===null&&Fu(s),d=s.type,v=s.pendingProps,x=n!==null?n.memoizedProps:null,E=v.children,Cu(d,v)?E=null:x!==null&&Cu(d,x)&&(s.flags|=32),jm(n,s),Dn(n,s,E,l),s.child;case 6:return n===null&&Fu(s),null;case 13:return Wm(n,s,l);case 4:return $u(s,s.stateNode.containerInfo),d=s.pendingProps,n===null?s.child=Ks(s,null,d,l):Dn(n,s,d,l),s.child;case 11:return d=s.type,v=s.pendingProps,v=s.elementType===d?v:xi(d,v),Om(n,s,d,v,l);case 7:return Dn(n,s,s.pendingProps,l),s.child;case 8:return Dn(n,s,s.pendingProps.children,l),s.child;case 12:return Dn(n,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,v=s.pendingProps,x=s.memoizedProps,E=v.value,Bt(xl,d._currentValue),d._currentValue=E,x!==null)if(yi(x.value,E)){if(x.children===v.children&&!zn.current){s=rr(n,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var I=x.dependencies;if(I!==null){E=x.child;for(var z=I.firstContext;z!==null;){if(z.context===d){if(x.tag===1){z=ir(-1,l&-l),z.tag=2;var ee=x.updateQueue;if(ee!==null){ee=ee.shared;var xe=ee.pending;xe===null?z.next=z:(z.next=xe.next,xe.next=z),ee.pending=z}}x.lanes|=l,z=x.alternate,z!==null&&(z.lanes|=l),Vu(x.return,l,s),I.lanes|=l;break}z=z.next}}else if(x.tag===10)E=x.type===s.type?null:x.child;else if(x.tag===18){if(E=x.return,E===null)throw Error(t(341));E.lanes|=l,I=E.alternate,I!==null&&(I.lanes|=l),Vu(E,l,s),E=x.sibling}else E=x.child;if(E!==null)E.return=x;else for(E=x;E!==null;){if(E===s){E=null;break}if(x=E.sibling,x!==null){x.return=E.return,E=x;break}E=E.return}x=E}Dn(n,s,v.children,l),s=s.child}return s;case 9:return v=s.type,d=s.pendingProps.children,Zs(s,l),v=ci(v),d=d(v),s.flags|=1,Dn(n,s,d,l),s.child;case 14:return d=s.type,v=xi(d,s.pendingProps),v=xi(d.type,v),Fm(n,s,d,v,l);case 15:return Bm(n,s,s.type,s.pendingProps,l);case 17:return d=s.type,v=s.pendingProps,v=s.elementType===d?v:xi(d,v),Ll(n,s),s.tag=1,jn(d)?(n=!0,pl(s)):n=!1,Zs(s,l),Pm(s,d,v),sd(s,d,v,l),cd(null,s,d,!0,n,l);case 19:return Xm(n,s,l);case 22:return zm(n,s,l)}throw Error(t(156,s.tag))};function vg(n,s){return te(n,s)}function Y_(n,s,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(n,s,l,d){return new Y_(n,s,l,d)}function Cd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function K_(n){if(typeof n=="function")return Cd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ue)return 11;if(n===pe)return 14}return 2}function Ur(n,s){var l=n.alternate;return l===null?(l=hi(n.tag,s,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=s,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,s=n.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Vl(n,s,l,d,v,x){var E=2;if(d=n,typeof n=="function")Cd(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case F:return ps(l.children,v,x,s);case W:E=8,v|=8;break;case D:return n=hi(12,l,s,v|2),n.elementType=D,n.lanes=x,n;case Q:return n=hi(13,l,s,v),n.elementType=Q,n.lanes=x,n;case le:return n=hi(19,l,s,v),n.elementType=le,n.lanes=x,n;case ce:return Gl(l,v,x,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:E=10;break e;case B:E=9;break e;case ue:E=11;break e;case pe:E=14;break e;case se:E=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=hi(E,l,s,v),s.elementType=n,s.type=d,s.lanes=x,s}function ps(n,s,l,d){return n=hi(7,n,d,s),n.lanes=l,n}function Gl(n,s,l,d){return n=hi(22,n,d,s),n.elementType=ce,n.lanes=l,n.stateNode={isHidden:!1},n}function Pd(n,s,l){return n=hi(6,n,null,s),n.lanes=l,n}function Nd(n,s,l){return s=hi(4,n.children!==null?n.children:[],n.key,s),s.lanes=l,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function J_(n,s,l,d,v){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ai(0),this.expirationTimes=ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ai(0),this.identifierPrefix=d,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function Ld(n,s,l,d,v,x,E,I,z){return n=new J_(n,s,l,I,z),s===1?(s=1,x===!0&&(s|=8)):s=0,x=hi(3,null,null,s),n.current=x,x.stateNode=n,x.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wu(x),n}function Z_(n,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j,key:d==null?null:""+d,children:n,containerInfo:s,implementation:l}}function yg(n){if(!n)return Ar;n=n._reactInternals;e:{if(Li(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(jn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(jn(l))return $p(n,l,s)}return s}function _g(n,s,l,d,v,x,E,I,z){return n=Ld(l,d,!0,n,v,x,E,I,z),n.context=yg(null),l=n.current,d=In(),v=Ir(l),x=ir(d,v),x.callback=s??null,Pr(l,x,v),n.current.lanes=v,Bn(n,v,d),Gn(n,d),n}function Wl(n,s,l,d){var v=s.current,x=In(),E=Ir(v);return l=yg(l),s.context===null?s.context=l:s.pendingContext=l,s=ir(x,E),s.payload={element:n},d=d===void 0?null:d,d!==null&&(s.callback=d),n=Pr(v,s,E),n!==null&&(wi(n,v,E,x),Ml(n,v,E)),E}function $l(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function xg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<s?l:s}}function Dd(n,s){xg(n,s),(n=n.alternate)&&xg(n,s)}function Q_(){return null}var Sg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Id(n){this._internalRoot=n}Xl.prototype.render=Id.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Wl(n,s,null,null)},Xl.prototype.unmount=Id.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;ds(function(){Wl(null,n,null,null)}),s[Zi]=null}};function Xl(n){this._internalRoot=n}Xl.prototype.unstable_scheduleHydration=function(n){if(n){var s=rp();n={blockedOn:null,target:n,priority:s};for(var l=0;l<Mr.length&&s!==0&&s<Mr[l].priority;l++);Mr.splice(l,0,n),l===0&&op(n)}};function kd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ql(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Mg(){}function ex(n,s,l,d,v){if(v){if(typeof d=="function"){var x=d;d=function(){var ee=$l(E);x.call(ee)}}var E=_g(s,d,n,0,null,!1,!1,"",Mg);return n._reactRootContainer=E,n[Zi]=E.current,io(n.nodeType===8?n.parentNode:n),ds(),E}for(;v=n.lastChild;)n.removeChild(v);if(typeof d=="function"){var I=d;d=function(){var ee=$l(z);I.call(ee)}}var z=Ld(n,0,!1,null,null,!1,!1,"",Mg);return n._reactRootContainer=z,n[Zi]=z.current,io(n.nodeType===8?n.parentNode:n),ds(function(){Wl(s,z,l,d)}),z}function Yl(n,s,l,d,v){var x=l._reactRootContainer;if(x){var E=x;if(typeof v=="function"){var I=v;v=function(){var z=$l(E);I.call(z)}}Wl(s,E,n,v)}else E=ex(l,s,n,v,d);return $l(E)}np=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var l=en(s.pendingLanes);l!==0&&(su(s,l|1),Gn(s,Te()),(Tt&6)===0&&(ia=Te()+500,Rr()))}break;case 13:ds(function(){var d=nr(n,1);if(d!==null){var v=In();wi(d,n,1,v)}}),Dd(n,1)}},au=function(n){if(n.tag===13){var s=nr(n,134217728);if(s!==null){var l=In();wi(s,n,134217728,l)}Dd(n,134217728)}},ip=function(n){if(n.tag===13){var s=Ir(n),l=nr(n,s);if(l!==null){var d=In();wi(l,n,s,d)}Dd(n,s)}},rp=function(){return Dt},sp=function(n,s){var l=Dt;try{return Dt=n,s()}finally{Dt=l}},ke=function(n,s,l){switch(s){case"input":if(He(n,l),s=l.name,l.type==="radio"&&s!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==n&&d.form===n.form){var v=hl(d);if(!v)throw Error(t(90));ve(d),He(d,v)}}}break;case"textarea":de(n,l);break;case"select":s=l.value,s!=null&&L(n,!!l.multiple,s,!1)}},jt=Td,Qt=ds;var tx={usingClientEntryPoint:!1,Events:[ao,Gs,hl,Ue,ft,Td]},So={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nx={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=P(n),n===null?null:n.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||Q_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Nt=Kl.inject(nx),St=Kl}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tx,Wn.createPortal=function(n,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(s))throw Error(t(200));return Z_(n,s,null,l)},Wn.createRoot=function(n,s){if(!kd(n))throw Error(t(299));var l=!1,d="",v=Sg;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=Ld(n,1,!1,null,null,l,!1,d,v),n[Zi]=s.current,io(n.nodeType===8?n.parentNode:n),new Id(s)},Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=P(s),n=n===null?null:n.stateNode,n},Wn.flushSync=function(n){return ds(n)},Wn.hydrate=function(n,s,l){if(!ql(s))throw Error(t(200));return Yl(null,n,s,!0,l)},Wn.hydrateRoot=function(n,s,l){if(!kd(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,v=!1,x="",E=Sg;if(l!=null&&(l.unstable_strictMode===!0&&(v=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),s=_g(s,null,n,1,l??null,v,!1,x,E),n[Zi]=s.current,io(n),d)for(n=0;n<d.length;n++)l=d[n],v=l._getVersion,v=v(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,v]:s.mutableSourceEagerHydrationData.push(l,v);return new Xl(s)},Wn.render=function(n,s,l){if(!ql(s))throw Error(t(200));return Yl(null,n,s,!1,l)},Wn.unmountComponentAtNode=function(n){if(!ql(n))throw Error(t(40));return n._reactRootContainer?(ds(function(){Yl(null,null,n,!1,function(){n._reactRootContainer=null,n[Zi]=null})}),!0):!1},Wn.unstable_batchedUpdates=Td,Wn.unstable_renderSubtreeIntoContainer=function(n,s,l,d){if(!ql(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Yl(n,s,l,!1,d)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var Pg;function dx(){if(Pg)return Fd.exports;Pg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Fd.exports=ux(),Fd.exports}var Ng;function hx(){if(Ng)return Jl;Ng=1;var r=dx();return Jl.createRoot=r.createRoot,Jl.hydrateRoot=r.hydrateRoot,Jl}var fx=hx();class sn extends Error{}const ms="id name role org initials external isAi",Lg="id type title blocking status summary itemIds roles deliveryIds",px=`query Console($part: String!) {
  workspace { name program policy currentUser { ${ms} } }
  parts { number name rev assembly model plmState gateOutcome blockingPassed blockingTotal itemsToClear openCount }
  part(number: $part) {
    number name rev assembly model material finish process cadFiles plmState
    review { title stage due }
    gate { outcome blockingTotal blockingPassed itemsToClear releasedAt decisionId snapshotHash checks { ${Lg} } }
    feedback {
      id number title body priority category status source triage citation sheetRef
      pin { x y z nx ny nz }
      author { ${ms} } owner { ${ms} }
      jiraKey jiraStatus syncState
      waiverReason waivedBy { ${ms} } dismissReason dismissedBy { ${ms} }
      resolvedBy resolvedAt createdAt updatedAt
      thread { at authorLabel text kind author { ${ms} } }
    }
    reviewers { role status due completedAt nudgedAt person { ${ms} } }
    decisions { id at outcome promotionRequestId requestedBy snapshotHash hasRecord checks { ${Lg} } }
    audit { id at actor action entityId detail }
    stats { total open closed avgResolveHours }
    deliveries { id topic label status attempts maxAttempts nextAttemptAt lastError orderingKey }
  }
  systems { jira windchill pending retrying dead chaos { jiraOutage jiraLostResponses duplicateWebhooks slowNetwork } }
}`,mx=`query Log($limit: Int!) {
  log(limit: $limit) { id at system direction level title detail ref partNumber statusCode latencyMs tag meta }
}`,gx={"To Do":"11","In Progress":"21",Done:"31"},Zl="/mock/windchill/Windchill/servlet/odata";async function fi(r,e={}){var a;let t;try{t=await fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:r,variables:e})})}catch{throw new sn("Can't reach the Release Gate server. Is it still running?")}const i=await t.json();if((a=i.errors)!=null&&a.length)throw new sn(i.errors[0].message);return i.data}async function wo(r,e={}){var a,o;const t={Accept:"application/json",...e.headers};e.body&&(t["Content-Type"]="application/json"),e.as&&(t["X-Mock-User"]=e.as);const i=await fetch(r,{...e,headers:t});if(!i.ok){let c=`${i.status} ${i.statusText}`;try{const u=await i.json();c=((a=u.errorMessages)==null?void 0:a[0])??((o=u.error)==null?void 0:o.message)??c}catch{}throw new sn(c)}return i.status===204?null:await i.json()}const Dg=r=>({id:r.ID,partNumber:r.PartNumber,revision:r.Revision,status:r.Status,requestedBy:r.RequestedBy,createdOn:r.CreatedOn,reasons:r.Reasons??[],decisionId:r.GateDecisionId});class vx{constructor(){this.mode="server",this.actingAs="p-jordan"}async snapshot(e){const t=await fi(px,{part:e});return this.actingAs=t.workspace.currentUser.id,t}async log(e=150){return(await fi(mx,{limit:e})).log}async jiraIssues(){return(await wo(`/mock/jira/rest/api/2/search?jql=${encodeURIComponent("project = ENG ORDER BY updated DESC")}`,{as:this.actingAs})).issues.map(t=>{var i,a,o,c;return{key:t.key,summary:t.fields.summary,status:t.fields.status.name,resolution:((i=t.fields.resolution)==null?void 0:i.name)??null,priority:((a=t.fields.priority)==null?void 0:a.name)??"Medium",assignee:((o=t.fields.assignee)==null?void 0:o.displayName)??null,assigneeId:((c=t.fields.assignee)==null?void 0:c.accountId)??null,colabId:t.fields.customfield_10042??null,updated:t.fields.updated}})}async plm(){const[e,t]=await Promise.all([wo(`${Zl}/ProdMgmt/Parts`,{as:this.actingAs}),wo(`${Zl}/ChangeMgmt/PromotionRequests`,{as:this.actingAs})]);return{parts:e.value.map(i=>({id:i.ID,number:i.Number,name:i.Name,revision:i.Revision,version:i.Version,state:i.State.Value,stateDisplay:i.State.Display,attachments:i.Attachments.map(a=>({fileName:a.FileName,mimeType:a.MimeType,size:a.Size,createdOn:a.CreatedOn})),history:i.History.map(a=>({at:a.At,from:a.From,to:a.To,by:a.By}))})),promotions:t.value.map(Dg)}}async record(e){return(await fi("query($d: String!) { record(decisionId: $d) }",{d:e})).record}subscribe(e,t){const i=new EventSource("/api/stream");return i.onopen=()=>t(!0),i.onerror=()=>t(!1),i.onmessage=a=>{try{e(JSON.parse(a.data))}catch{}},()=>i.close()}async resolveFeedback(e,t){await fi("mutation($id: String!, $note: String) { resolveFeedback(id: $id, note: $note) }",{id:e,note:t||null})}async reopenFeedback(e){await fi("mutation($id: String!) { reopenFeedback(id: $id) }",{id:e})}async waiveFeedback(e,t){await fi("mutation($id: String!, $r: String!) { waiveFeedback(id: $id, reason: $r) }",{id:e,r:t})}async triageFinding(e,t,i){await fi("mutation($id: String!, $d: String!, $n: String) { triageFinding(id: $id, decision: $d, note: $n) }",{id:e,d:t,n:i||null})}async nudgeReviewer(e,t){await fi("mutation($p: String!, $r: String!) { nudgeReviewer(partNumber: $p, role: $r) }",{p:e,r:t})}async requestRelease(e){return(await fi("mutation($p: String!) { requestRelease(partNumber: $p) { promotionRequestId status reasons decisionId } }",{p:e})).requestRelease}async retryDelivery(e){await fi("mutation($id: Int!) { retryDelivery(id: $id) }",{id:e})}async setChaos(e){return(await fi(`mutation($o: Boolean, $l: Boolean, $d: Boolean, $s: Boolean) {
        setChaos(jiraOutage: $o, jiraLostResponses: $l, duplicateWebhooks: $d, slowNetwork: $s) {
          jiraOutage jiraLostResponses duplicateWebhooks slowNetwork
        }
      }`,{o:e.jiraOutage??null,l:e.jiraLostResponses??null,d:e.duplicateWebhooks??null,s:e.slowNetwork??null})).setChaos}async reset(){await fi("mutation { resetDemo }")}async jiraTransition(e,t,i){await wo(`/mock/jira/rest/api/2/issue/${e}/transitions`,{method:"POST",as:i,body:JSON.stringify({transition:{id:gx[t]}})})}async plmPromote(e,t){const i=await wo(`${Zl}/ChangeMgmt/PromotionRequests`,{method:"POST",as:t.id,body:JSON.stringify({PartNumber:e,TargetState:"RELEASED",RequestedBy:t.name})}),a=Dg(i);return{promotionRequestId:a.id,status:a.status,reasons:a.reasons,decisionId:a.decisionId}}attachmentUrl(e,t){return`${Zl}/ProdMgmt/Parts('${e}')/Attachments('${t}')/$value`}}var lt=Cf();const Ql=rx(lt);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),p0=(...r)=>r.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _x={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=lt.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:a="",children:o,iconNode:c,...u},h)=>lt.createElement("svg",{ref:h,..._x,width:e,height:e,stroke:r,strokeWidth:i?Number(t)*24/Number(e):t,className:p0("lucide",a),...u},[...c.map(([p,g])=>lt.createElement(p,g)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=(r,e)=>{const t=lt.forwardRef(({className:i,...a},o)=>lt.createElement(xx,{ref:o,iconNode:e,className:p0(`lucide-${yx(r)}`,i),...a}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=Mt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=Mt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=Mt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=Mt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=Mt("Braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=Mt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=Mt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=Mt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=Mt("ChevronsUp",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=Mt("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=Mt("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=Mt("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=Mt("Equal",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=Mt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=Mt("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=Mt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=Mt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=Mt("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=Mt("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=Mt("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=Mt("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=Mt("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=Mt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=Mt("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=Mt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=Mt("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=Mt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=Mt("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=Mt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=Mt("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=Mt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=Mt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=Mt("Stamp",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=Mt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=Mt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=Mt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Lf=6e4,ko=60*Lf,Uo=24*ko;function xa(r,e=Date.now()){if(!r)return"";const t=e-Date.parse(r);if(t<45e3)return"just now";if(t<ko)return`${Math.round(t/Lf)} min ago`;if(t<Uo)return`${Math.round(t/ko)} h ago`;const i=Math.round(t/Uo);return i===1?"yesterday":`${i} days ago`}function w0(r,e=Date.now()){if(!r)return"";const t=Date.parse(r)-e;if(t<0)return`was due ${xa(r,e)}`;if(t<ko)return`due in ${Math.max(1,Math.round(t/Lf))} min`;if(t<Uo)return`due in ${Math.round(t/ko)} h`;const i=Math.round(t/Uo);return i===1?"due tomorrow":`due in ${i} days`}function jx(r){return new Date(r).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}function Hx(r,e=new Date){const t=new Date(r);return t.toDateString()===e.toDateString()?jx(r):e.getTime()-t.getTime()<Uo*1.5&&t.getDate()!==e.getDate()?`Yday ${t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})}`:t.toLocaleDateString([],{day:"numeric",month:"short"})}function Vx(r){return r?new Date(r).toLocaleDateString([],{day:"numeric",month:"short",year:"numeric"}):""}function Da(r){if(!r)return"";const e=new Date(r);return`${e.toLocaleDateString([],{day:"numeric",month:"short"})}, ${e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})}`}function Gx(r){return r<1024?`${r} B`:r<1024*1024?`${(r/1024).toFixed(0)} KB`:`${(r/1024/1024).toFixed(1)} MB`}function E0(r){if(!r)return"";const[e,t]=r.split(":");return t?`${e}:${t.slice(0,8)}…${t.slice(-6)}`:r}const b0={critical:"Critical",high:"High",medium:"Medium",low:"Low"},Wx={open:"Open",in_progress:"In progress",resolved:"Resolved",waived:"Waived",dismissed:"Dismissed"};function Hi(r){return r.status==="resolved"||r.status==="waived"||r.status==="dismissed"}function Nh(r){return r.status==="resolved"?"resolved":r.status==="waived"?"waived":r.status==="dismissed"?"dismissed":r.priority}function $x(r){let e=0;for(let t=0;t<r.length;t++)e=(e*31+r.charCodeAt(t))%360;return e}const Ig=r=>{let e;const t=new Set,i=(p,g)=>{const f=typeof p=="function"?p(e):p;if(!Object.is(f,e)){const _=e;e=g??(typeof f!="object"||f===null)?f:Object.assign({},e,f),t.forEach(M=>M(e,_))}},a=()=>e,u={setState:i,getState:a,getInitialState:()=>h,subscribe:p=>(t.add(p),()=>t.delete(p))},h=e=r(i,a,u);return u},Xx=(r=>r?Ig(r):Ig),qx=r=>r;function Yx(r,e=qx){const t=Ql.useSyncExternalStore(r.subscribe,Ql.useCallback(()=>e(r.getState()),[r,e]),Ql.useCallback(()=>e(r.getInitialState()),[r,e]));return Ql.useDebugValue(t),t}const kg=r=>{const e=Xx(r),t=i=>Yx(e,i);return Object.assign(t,e),t},Kx=(r=>r?kg(r):kg),Jx=()=>{var e;try{const t=localStorage.getItem("rg-theme");if(t==="light"||t==="dark")return t}catch{}const r=document.documentElement.dataset.theme;return r==="light"||r==="dark"?r:(e=window.matchMedia)!=null&&e.call(window,"(prefers-color-scheme: dark)").matches?"dark":"light"};let jd=null,Hd=!1,Vd=!1,Zx=0,ec=null;const Ee=Kx((r,e)=>({backend:null,booted:!1,fatal:null,connected:!1,partNumber:"BRK-2210",snap:null,log:[],fresh:{},jira:[],plm:null,selectedId:null,focusToken:0,rightTab:"checks",filter:"all",drawerTab:"log",drawerOpen:!0,drawerHeight:Math.round(Math.min(280,Math.max(200,window.innerHeight*.28))),showClosed:!1,busy:{},toasts:[],modal:null,stampAt:null,rejectAt:null,readyAt:null,theme:Jx(),jiraActor:"p-maya",async boot(t){r({backend:t}),ec==null||ec(),ec=t.subscribe(i=>{i.type==="log"?(r(a=>a.log.some(o=>o.id===i.data.id)?{}:{log:[i.data,...a.log].slice(0,250),fresh:{...a.fresh,[i.data.id]:!0}}),setTimeout(()=>{r(a=>{const o={...a.fresh};return delete o[i.data.id],{fresh:o}})},2200),e().refresh()):i.type==="changed"?e().refresh():i.type==="reset"&&(r({selectedId:null,stampAt:null,rejectAt:null,readyAt:null}),t.log().then(a=>r({log:a})),e().refresh(!0))},i=>{const a=e().connected;r({connected:i}),i&&!a&&e().booted&&(t.log().then(o=>r({log:o})),e().refresh(!0))});try{const[i,a,o,c]=await Promise.all([t.snapshot(e().partNumber),t.log(),t.jiraIssues(),t.plm()]);r({snap:i,log:a,jira:o,plm:c,booted:!0,fatal:null})}catch(i){r({fatal:i instanceof Error?i.message:String(i)})}},refresh(t=!1){jd&&clearTimeout(jd);const i=async()=>{if(Hd){Vd=!0;return}Hd=!0;try{const{backend:a,partNumber:o}=e(),[c,u,h]=await Promise.all([a.snapshot(o),a.jiraIssues(),a.plm()]),p=e().snap,g={snap:c,jira:u,plm:h};if(p!=null&&p.part&&c.part&&p.part.number===c.part.number){const f=p.part.gate.outcome,_=c.part.gate.outcome;f!=="RELEASED"&&_==="RELEASED"?(g.stampAt=Date.now(),g.selectedId=null,g.rightTab="checks",e().toast({tone:"ok",title:`${c.part.number} Rev ${c.part.rev} is released`,body:"Windchill confirmed the lifecycle change. The review record is being attached."})):f==="BLOCKED"&&_==="READY"&&(g.readyAt=Date.now(),e().toast({tone:"ok",title:"Every blocking check passes",body:"Rev "+c.part.rev+" is ready to release."}))}r(g)}catch{}finally{Hd=!1,Vd&&(Vd=!1,e().refresh())}};t?i():jd=setTimeout(i,90)},selectPart(t){t!==e().partNumber&&(r({partNumber:t,selectedId:null,stampAt:null,rejectAt:null,readyAt:null}),e().refresh(!0))},select(t,i=!0){r(a=>({selectedId:t,focusToken:i?a.focusToken+1:a.focusToken,rightTab:t?"feedback":a.rightTab}))},set(t,i){r({[t]:i})},async act(t,i){r(a=>({busy:{...a.busy,[t]:!0}}));try{const a=await i(e().backend);return e().refresh(!0),a}catch(a){const o=a instanceof sn||a instanceof Error?a.message:String(a);e().toast({tone:"error",title:o});return}finally{r(a=>{const o={...a.busy};return delete o[t],{busy:o}})}},toast(t){const i=++Zx;r(a=>({toasts:[...a.toasts.slice(-3),{...t,id:i}]})),setTimeout(()=>e().dismissToast(i),t.tone==="error"?7e3:5200)},dismissToast(t){r(i=>({toasts:i.toasts.filter(a=>a.id!==t)}))},toggleTheme(){const t=e().theme==="dark"?"light":"dark";try{localStorage.setItem("rg-theme",t)}catch{}r({theme:t})}})),Ug={echo:"echo",duplicate:"duplicate",stale:"out of order",linked:"linked",retry:"retry",dead:"dead letter",frozen:"frozen",chaos:"simulation",rejected:"bad signature",decision:"decision",applied:"applied",released:"released",ai:"AutoReview"};function Og(r){return r?r<300?"c2":r<500?"c4":"c5":""}function Gd({value:r}){return r==null?m.jsx("pre",{className:"json",children:"(empty)"}):m.jsx("pre",{className:"json",children:typeof r=="string"?r:JSON.stringify(r,null,2)})}function Qx({e:r,fresh:e}){var g,f;const[t,i]=lt.useState(!1),a=r.direction==="out"?m0:r.direction==="in"?Pf:bx,o=((g=r.meta)==null?void 0:g.calls)??[],u=(r.tag==="retry"&&((f=r.meta)!=null&&f.attempt)?`${Ug.retry} ${r.meta.attempt}`:null)??(r.tag?Ug[r.tag]:null),h={jira:"Jira",windchill:"Windchill",gate:"Gate",colab:"CoLab",notify:"Notify"}[r.system],p=!!(r.detail||o.length);return m.jsxs(m.Fragment,{children:[m.jsxs("button",{className:`log-row lv-${r.level}${e?" is-fresh":""}${t?" is-open":""}`,onClick:()=>p&&i(_=>!_),"aria-expanded":p?t:void 0,"data-tag":r.tag??"",children:[m.jsx("time",{className:"log-time",dateTime:r.at,title:new Date(r.at).toLocaleString(),children:Hx(r.at)}),m.jsx("span",{className:"log-dir",title:r.direction==="out"?"Sent":r.direction==="in"?"Received":"Internal",children:m.jsx(a,{})}),m.jsx("span",{className:`log-sys sys-${r.system}`,children:h}),m.jsxs("span",{className:"log-main",children:[m.jsx("div",{className:"log-title",children:r.title}),r.detail&&!t&&m.jsx("div",{className:"log-sub",children:r.detail})]}),m.jsxs("span",{className:"log-meta",children:[u&&m.jsx("span",{className:"code t-tag",children:u}),r.statusCode?m.jsx("span",{className:`code ${Og(r.statusCode)}`,children:r.statusCode}):null,r.latencyMs!=null&&m.jsxs("span",{children:[r.latencyMs," ms"]})]})]}),t&&m.jsxs("div",{className:"log-detail",children:[r.detail&&m.jsx("p",{children:r.detail}),o.length>0&&m.jsx("div",{className:"calls",children:o.map((_,M)=>m.jsxs("div",{className:"call",children:[m.jsxs("div",{className:"call-head",children:[m.jsx("span",{className:"method",children:_.method}),m.jsx("span",{className:"url",title:_.url,children:_.url}),_.status!=null&&m.jsx("span",{className:`code ${Og(_.status)}`,children:_.status}),_.latencyMs!=null&&m.jsxs("span",{className:"muted",children:[_.latencyMs," ms"]})]}),m.jsxs("div",{className:"call-body",children:[m.jsxs("div",{children:[m.jsx("span",{className:"label",children:"Request"}),_.requestHeaders&&m.jsx(Gd,{value:Object.entries(_.requestHeaders).map(([w,b])=>`${w}: ${b}`).join(`
`)}),_.requestBody!=null&&m.jsx(Gd,{value:_.requestBody})]}),m.jsxs("div",{children:[m.jsx("span",{className:"label",children:"Response"}),_.error&&m.jsx("p",{style:{margin:"4px 0 0",color:"var(--crit-ink)"},children:_.error}),m.jsx(Gd,{value:_.responseBody})]})]})]},M))})]})]})}function eS({filter:r}){const e=Ee(a=>a.log),t=Ee(a=>a.fresh),i=e.filter(a=>r==="all"?!0:r==="problems"?a.level==="warn"||a.level==="error":a.system===r);return i.length?m.jsx("div",{className:"log","data-testid":"log",children:i.map(a=>m.jsx(Qx,{e:a,fresh:!!t[a.id]},a.id))}):m.jsx("div",{className:"empty",children:"No events yet."})}const Fg=["To Do","In Progress","Done"],Bg=[{id:"p-maya",name:"Maya Chen"},{id:"p-luis",name:"Luis Ortega"},{id:"p-priya",name:"Priya Nair"}];function tS({p:r}){const e=r==="Highest"?Ex:r==="High"?v0:r==="Medium"?Ax:g0;return m.jsxs("span",{className:`prio-glyph p-${r}`,title:`${r} priority`,children:[m.jsx(e,{}),r]})}function nS(r){var e;return((e=/^\[([A-Z]{3}-\d{4})/.exec(r))==null?void 0:e[1])??null}function T0(){var b;const r=Ee(S=>S.jira),e=Ee(S=>S.jiraActor),t=Ee(S=>S.set),i=Ee(S=>S.act),a=Ee(S=>S.busy),o=Ee(S=>S.selectPart),c=Ee(S=>S.select),[u,h]=lt.useState(null),[p,g]=lt.useState(null),f=Ee(S=>{var y;return(y=S.snap)==null?void 0:y.workspace.program}),_=((b=Bg.find(S=>S.id===e))==null?void 0:b.name)??"someone",M=(S,y)=>i(`jira:${S}`,T=>T.jiraTransition(S,y,e)),w=S=>{const y=nS(S.summary);y&&o(y),S.colabId&&setTimeout(()=>c(S.colabId,!0),150)};return m.jsxs("div",{className:"board","data-testid":"jira-board",children:[m.jsxs("div",{className:"board-note",children:[m.jsxs("span",{children:["Mock Jira project ",m.jsx("b",{children:"ENG"}),f?` for ${f}`:"",". Moving a linked card sends a signed webhook to the gate."]}),m.jsxs("label",{children:["Acting as"," ",m.jsx("select",{value:e,onChange:S=>t("jiraActor",S.target.value),"aria-label":"Act in Jira as",children:Bg.map(S=>m.jsx("option",{value:S.id,children:S.name},S.id))})]})]}),Fg.map(S=>{const y=r.filter(T=>T.status===S);return m.jsxs("div",{className:`board-col${p===S?" is-over":""}`,onDragOver:T=>{T.preventDefault(),g(S)},onDragLeave:()=>g(T=>T===S?null:T),onDrop:T=>{T.preventDefault(),g(null);const C=T.dataTransfer.getData("text/plain"),R=r.find(Y=>Y.key===C);R&&R.status!==S&&M(C,S)},"data-testid":`jira-col-${S}`,children:[m.jsxs("div",{className:"board-head",children:[m.jsx("span",{className:"label",children:S}),m.jsx("span",{className:"label",children:y.length})]}),y.map(T=>m.jsxs("div",{className:`jcard${u===T.key?" is-dragging":""}${T.colabId?" is-linked":""}`,draggable:!0,onDragStart:C=>{C.dataTransfer.setData("text/plain",T.key),C.dataTransfer.effectAllowed="move",h(T.key)},onDragEnd:()=>h(null),"data-testid":`jira-${T.key}`,children:[m.jsxs("div",{className:"jcard-top",children:[m.jsx("span",{className:"jcard-key",children:T.key}),a[`jira:${T.key}`]?m.jsx(Gi,{className:"spin",size:14}):T.colabId?m.jsxs("button",{className:"tag t-accent",onClick:()=>w(T),title:"Open the CoLab feedback",children:["CoLab ",T.colabId]}):m.jsx("span",{className:"tag",children:"Not linked"})]}),m.jsx("div",{className:"jcard-summary",title:T.summary,children:T.summary}),m.jsxs("div",{className:"jcard-foot",children:[m.jsx(tS,{p:T.priority}),m.jsx("span",{className:"jcard-moves",children:Fg.filter(C=>C!==S).map(C=>m.jsxs("button",{onClick:()=>M(T.key,C),title:`Move to ${C} as ${_}`,"data-testid":`move-${T.key}-${C}`,children:["→ ",C]},C))})]})]},T.key))]},S)})]})}function iS(r,e){var t;return((t=e.find(i=>i.partNumber===r.number&&i.status==="APPROVED"))==null?void 0:t.decisionId)??null}function A0(){const r=Ee(y=>y.plm),e=Ee(y=>y.partNumber),t=Ee(y=>y.backend),i=Ee(y=>y.act),a=Ee(y=>y.set),o=Ee(y=>y.toast),c=Ee(y=>!!y.busy["plm:promote"]),[u,h]=lt.useState(null),p=lt.useRef(new Set),[g,f]=lt.useState(new Set),_=u??e,M=(r==null?void 0:r.parts.find(y=>y.number===_))??(r==null?void 0:r.parts[0]);if(lt.useEffect(()=>{if(!r)return;const y=r.parts.flatMap(T=>T.attachments.map(C=>`${T.number}/${C.fileName}`));if(p.current.size){const T=y.filter(C=>!p.current.has(C));T.length&&(f(new Set(T)),setTimeout(()=>f(new Set),2600))}p.current=new Set(y)},[r]),lt.useEffect(()=>h(null),[e]),!r||!M)return m.jsx("div",{className:"empty",children:"Loading Windchill…"});const w=r.promotions.filter(y=>y.partNumber===M.number),b=iS(M,r.promotions),S=async()=>{const y=await i("plm:promote",T=>T.plmPromote(M.number,{id:"p-maya",name:"Maya Chen"}));y&&(y.status==="REJECTED"?(a("rejectAt",Date.now()),o({tone:"error",title:`Release Gate rejected ${y.promotionRequestId}`,body:y.reasons.join(" · ")})):y.status==="APPROVED"&&o({tone:"info",title:`${y.promotionRequestId} approved`,body:`Gate decision ${y.decisionId}. ${M.number} is moving to Released.`}))};return m.jsxs("div",{className:"plm","data-testid":"plm",children:[m.jsxs("div",{children:[m.jsx("div",{className:"board-note",style:{marginBottom:8},children:m.jsx("span",{children:"Mock Windchill. Promotion requests call the Release Gate before anything is released, and hold if it doesn't answer."})}),m.jsxs("table",{className:"plm-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"Number"}),m.jsx("th",{children:"Name"}),m.jsx("th",{children:"Version"}),m.jsx("th",{children:"State"}),m.jsx("th",{children:"Files"})]})}),m.jsx("tbody",{children:r.parts.map(y=>m.jsxs("tr",{className:y.number===M.number?"is-active":"",onClick:()=>h(y.number),children:[m.jsx("td",{className:"mono",children:y.number}),m.jsx("td",{children:y.name}),m.jsx("td",{className:"mono",children:y.version}),m.jsx("td",{children:m.jsx("span",{className:`state-chip s-${y.state}`,"data-testid":`plm-state-${y.number}`,children:y.stateDisplay})}),m.jsx("td",{className:"mono",children:y.attachments.length})]},y.number))})]})]}),m.jsxs("div",{className:"plm-detail",children:[m.jsxs("div",{className:"plm-card",children:[m.jsxs("h4",{children:[m.jsxs("span",{children:[m.jsx("span",{className:"mono",children:M.number})," ",m.jsxs("span",{className:"muted",children:["Rev ",M.revision]})]}),M.state!=="RELEASED"&&m.jsxs("button",{className:"btn btn-sm",onClick:S,disabled:c,title:"Create a promotion request as Maya Chen",children:[c?m.jsx(Gi,{className:"spin"}):m.jsx(Ux,{})," Promote to Released"]})]}),w.length===0&&m.jsx("div",{className:"hint",children:"No promotion requests."}),w.map(y=>m.jsxs("div",{className:"pr",children:[m.jsx("span",{className:"id",children:y.id}),m.jsxs("span",{className:"muted",children:[y.requestedBy," · ",xa(y.createdOn)]}),m.jsx("span",{className:`tag t-display ${y.status==="APPROVED"?"t-pass":y.status==="REJECTED"?"t-crit":"t-med"}`,children:y.status.replace("_"," ")}),y.reasons.length>0&&m.jsx("span",{className:"reasons",children:y.reasons.join(" · ")})]},y.id))]}),m.jsxs("div",{className:"plm-card",children:[m.jsx("h4",{children:m.jsx("span",{className:"label",children:"Attachments"})}),M.attachments.map(y=>{const T=y.fileName.includes("review-record"),C=t==null?void 0:t.attachmentUrl(M.number,y.fileName);return m.jsxs("div",{className:`attachment${g.has(`${M.number}/${y.fileName}`)?" is-new":""}`,children:[T?m.jsx(qc,{}):m.jsx(y0,{}),m.jsx("span",{className:"name",title:y.fileName,children:y.fileName}),T&&b?m.jsxs("span",{style:{display:"flex",gap:4},children:[m.jsx("button",{className:"btn btn-sm",onClick:()=>a("modal",{kind:"record",decisionId:b}),children:"Open"}),C&&m.jsx("a",{className:"icon-btn",style:{width:26,height:26},href:C,target:"_blank",rel:"noreferrer",title:"Raw attachment",children:m.jsx(jc,{size:13})})]}):m.jsx("span",{className:"muted mono",children:Gx(y.size)})]},y.fileName)})]}),M.history.length>0&&m.jsxs("div",{className:"plm-card",children:[m.jsx("h4",{children:m.jsx("span",{className:"label",children:"Lifecycle history"})}),M.history.map((y,T)=>m.jsxs("div",{className:"pr",children:[m.jsxs("span",{className:"id",children:[y.from," → ",y.to]}),m.jsx("span",{className:"muted",children:y.by}),m.jsx("span",{className:"muted",children:Da(y.at)})]},T))]})]})]})}function rS(){const r=Ee(g=>g.drawerTab),e=Ee(g=>g.drawerOpen),t=Ee(g=>g.set),i=Ee(g=>g.log),a=Ee(g=>g.jira),[o,c]=lt.useState("all"),u=lt.useMemo(()=>i.filter(g=>g.level==="error"||g.level==="warn").length,[i]),h=g=>{g.preventDefault();const f=M=>{const w=Math.round(Math.min(window.innerHeight*.72,Math.max(140,window.innerHeight-M.clientY)));Ee.setState({drawerHeight:w,drawerOpen:!0})},_=()=>{window.removeEventListener("pointermove",f),window.removeEventListener("pointerup",_)};window.addEventListener("pointermove",f),window.addEventListener("pointerup",_)},p=g=>{t("drawerTab",g),e||t("drawerOpen",!0);const f=Math.min(420,Math.round(window.innerHeight*.44));g!=="log"&&Ee.getState().drawerHeight<f&&t("drawerHeight",f)};return m.jsxs("section",{className:"drawer app-drawer","aria-label":"Integrations",children:[m.jsx("div",{className:"drawer-grip",onPointerDown:h,"aria-hidden":"true"}),m.jsxs("div",{className:"drawer-bar",role:"tablist",children:[m.jsxs("button",{className:`drawer-tab${r==="log"?" is-active":""}`,onClick:()=>p("log"),role:"tab",children:[m.jsx(Sx,{})," Integration log ",m.jsx("span",{className:"live"})]}),m.jsxs("button",{className:`drawer-tab${r==="jira"?" is-active":""}`,onClick:()=>p("jira"),role:"tab","data-testid":"tab-jira",children:[m.jsx(Nx,{})," Jira board ",m.jsx("span",{className:"mock",children:"mock"}),m.jsx("span",{className:"muted mono",children:a.length})]}),m.jsxs("button",{className:`drawer-tab${r==="plm"?" is-active":""}`,onClick:()=>p("plm"),role:"tab","data-testid":"tab-plm",children:[m.jsx(y0,{})," Windchill ",m.jsx("span",{className:"mock",children:"mock"})]}),r==="log"&&e&&m.jsxs("div",{className:"drawer-legend",children:[["all","jira","windchill","problems"].map(g=>m.jsxs("button",{className:`chip-filter${o===g?" is-active":""}`,onClick:()=>c(g),children:[g==="all"?"All":g==="jira"?"Jira":g==="windchill"?"Windchill":"Problems",g==="problems"&&u>0&&m.jsx("b",{children:u})]},g)),m.jsxs("span",{children:[m.jsx(m0,{size:13})," sent"]}),m.jsxs("span",{children:[m.jsx(Pf,{size:13})," received"]})]}),!(r==="log"&&e)&&m.jsx("span",{style:{marginLeft:"auto"}}),m.jsx("button",{className:"icon-btn",onClick:()=>t("drawerOpen",!e),"aria-label":e?"Collapse":"Expand",children:e?m.jsx(g0,{}):m.jsx(v0,{})})]}),e&&m.jsxs("div",{className:"drawer-body",children:[r==="log"&&m.jsx(eS,{filter:o}),r==="jira"&&m.jsx(T0,{}),r==="plm"&&m.jsx(A0,{})]})]})}function R0({outcome:r}){return r==="READY"?m.jsx(x0,{}):r==="RELEASED"?m.jsx(Bx,{}):r==="RELEASING"?m.jsx(Gi,{className:"spin"}):m.jsx(S0,{})}function sS(r){return r.gateOutcome==="RELEASED"?"Released":r.gateOutcome==="RELEASING"?"Releasing…":r.gateOutcome==="READY"?"Ready to release":`${r.blockingPassed} of ${r.blockingTotal} checks pass`}function aS(){var c;const r=Ee(u=>u.snap),e=Ee(u=>u.partNumber),t=Ee(u=>u.selectPart),i=Ee(u=>u.set);if(!r)return m.jsx("aside",{className:"rail app-rail"});const a=r.workspace.policy,o=a.rules.filter(u=>u.blocking).length;return m.jsxs("aside",{className:"rail app-rail","aria-label":"Parts in review",children:[m.jsxs("div",{className:"rail-head",children:[m.jsx("span",{className:"label",children:"Parts in review"}),m.jsx("span",{className:"label",children:r.parts.length})]}),m.jsx("div",{className:"rail-assembly",children:(c=r.parts[0])==null?void 0:c.assembly}),m.jsx("div",{className:"part-list",children:r.parts.map(u=>m.jsxs("button",{className:`part-row${u.number===e?" is-active":""}`,onClick:()=>t(u.number),"aria-current":u.number===e,children:[m.jsxs("span",{className:"part-id",children:[m.jsx("span",{className:"part-num",children:u.number}),m.jsxs("span",{className:"part-rev",children:["Rev ",u.rev]})]}),m.jsx("span",{className:`part-icon o-${u.gateOutcome.toLowerCase()}`,title:u.gateOutcome,children:m.jsx(R0,{outcome:u.gateOutcome})}),m.jsx("span",{className:"part-name",children:u.name}),m.jsxs("span",{className:"part-foot",children:[m.jsx("span",{children:sS(u)}),m.jsx("span",{className:"mini-meter","aria-hidden":"true",children:Array.from({length:u.blockingTotal},(h,p)=>m.jsx("i",{className:p<u.blockingPassed?"pass":"fail"},p))})]})]},u.number))}),m.jsx("div",{className:"rail-foot",children:m.jsxs("button",{className:"policy-card",onClick:()=>i("modal",{kind:"policy"}),children:[m.jsxs("span",{className:"policy-card-head",children:[m.jsx(M0,{}),a.name," v",a.version]}),m.jsxs("p",{children:[o," blocking checks. ",a.failClosedOnSync?"Fails closed when Jira or Windchill is out of sync.":"Sync problems only warn."]})]})})]})}function oS(){const r=Ee(i=>i.snap),e=Ee(i=>i.partNumber),t=Ee(i=>i.selectPart);return r?m.jsx("div",{className:"part-switch",role:"tablist","aria-label":"Parts",children:r.parts.map(i=>m.jsx("button",{className:i.number===e?"is-active":"",onClick:()=>t(i.number),children:i.number},i.number))}):null}const lS={BLOCKED:"Blocked",READY:"Ready to release",RELEASING:"Releasing",RELEASED:"Released"};function cS(){const r=Ee(y=>{var T;return(T=y.snap)==null?void 0:T.part}),e=Ee(y=>!!y.busy.release),t=Ee(y=>y.rejectAt),i=Ee(y=>y.readyAt),a=Ee(y=>y.act),o=Ee(y=>y.set),c=Ee(y=>y.toast),[u,h]=lt.useState(!1),[p,g]=lt.useState(!1);if(lt.useEffect(()=>{if(!t)return;h(!0);const y=setTimeout(()=>h(!1),520);return()=>clearTimeout(y)},[t]),lt.useEffect(()=>{if(!i)return;g(!0);const y=setTimeout(()=>g(!1),3e3);return()=>clearTimeout(y)},[i]),!r)return m.jsx("div",{className:"gate-band"});const f=r.gate,_=f.checks.filter(y=>y.blocking),M=f.checks.filter(y=>!y.blocking),w=M.filter(y=>y.status==="warn"),b=async()=>{const y=await a("release",T=>T.requestRelease(r.number));y&&(y.status==="REJECTED"?(o("rejectAt",Date.now()),o("rightTab","checks"),c({tone:"error",title:`Windchill rejected ${y.promotionRequestId}`,body:`Windchill asked the gate before promoting ${r.number}. The gate said no: ${y.reasons.length} check${y.reasons.length===1?"":"s"} failing.`})):y.status==="APPROVED"?c({tone:"info",title:`Windchill approved ${y.promotionRequestId}`,body:`Decision ${y.decisionId}. Waiting for Windchill to confirm the lifecycle change.`}):y.status==="ON_HOLD"&&c({tone:"warn",title:`${y.promotionRequestId} is on hold`,body:y.reasons.join(" ")}))};let S;if(f.outcome==="BLOCKED")S=m.jsxs(m.Fragment,{children:[m.jsxs("b",{children:[f.blockingPassed," of ",f.blockingTotal]})," ","blocking checks pass · ",m.jsx("b",{children:f.itemsToClear})," item",f.itemsToClear===1?"":"s"," to clear · review ",w0(r.review.due)]});else if(f.outcome==="READY"){const y=w.reduce((T,C)=>T+C.itemIds.length,0);S=m.jsxs(m.Fragment,{children:["All ",m.jsx("b",{children:f.blockingTotal})," blocking checks pass",y?` · ${y} medium/low item${y===1?"":"s"} carried to the next revision`:""]})}else f.outcome==="RELEASING"?S=m.jsxs(m.Fragment,{children:["Gate approved decision ",f.decisionId,". Waiting for Windchill to confirm the lifecycle change."]}):S=m.jsxs(m.Fragment,{children:["Released ",Da(f.releasedAt)," · decision ",m.jsx("b",{children:f.decisionId})," · ",m.jsx("span",{className:"mono",children:E0(f.snapshotHash)})]});return m.jsxs("section",{className:`gate-band o-${f.outcome.toLowerCase()}${u?" is-shaking":""}${p?" just-ready":""}`,"aria-live":"polite","data-testid":"gate-band","data-outcome":f.outcome,children:[m.jsx("div",{className:"gate-icon",children:m.jsx(R0,{outcome:f.outcome})}),m.jsxs("div",{className:"gate-text",children:[m.jsxs("div",{className:"gate-word",children:[lS[f.outcome],m.jsxs("small",{children:[r.number," · Rev ",r.rev]})]}),m.jsx("div",{className:"gate-sub",children:S})]}),m.jsxs("div",{className:"meter","aria-label":`${f.blockingPassed} of ${f.blockingTotal} blocking checks pass`,children:[m.jsxs("div",{className:"meter-bar",children:[_.map(y=>m.jsx("span",{className:`meter-seg ${y.status}`,title:`${y.status==="pass"?"Pass":"Fail"}: ${y.title}`},y.id)),m.jsx("span",{className:"meter-gap"}),M.map(y=>m.jsx("span",{className:`meter-seg advisory ${y.status}`,title:`Advisory: ${y.title}`},y.id))]}),m.jsxs("div",{className:"meter-caption",children:[m.jsx("span",{children:"Blocking"}),m.jsxs("span",{children:[f.blockingPassed,"/",f.blockingTotal]})]})]}),m.jsxs("div",{className:"gate-actions",children:[f.outcome==="BLOCKED"&&m.jsxs("button",{className:"btn",onClick:b,disabled:e,title:"Windchill will ask the gate before promoting, and the gate will explain why not",children:[e?m.jsx(Gi,{className:"spin"}):m.jsx(Fx,{}),"Request release"]}),f.outcome==="READY"&&m.jsxs("button",{className:"btn btn-primary is-glowing",onClick:b,disabled:e,"data-testid":"release",children:[e?m.jsx(Gi,{className:"spin"}):m.jsx(x0,{}),"Release Rev ",r.rev," to Windchill"]}),f.outcome==="RELEASING"&&m.jsxs("button",{className:"btn",disabled:!0,children:[m.jsx(Gi,{className:"spin"}),"Releasing…"]}),f.outcome==="RELEASED"&&f.decisionId&&m.jsxs("button",{className:"btn",onClick:()=>o("modal",{kind:"record",decisionId:f.decisionId}),children:[m.jsx(qc,{}),"Review record"]})]})]})}function C0({open:r}){return m.jsxs("svg",{className:`brand-mark${r?" is-open":""}`,viewBox:"0 0 28 28","aria-hidden":"true",children:[m.jsx("rect",{width:"28",height:"28",rx:"6.5",fill:"var(--accent)"}),m.jsx("rect",{x:"4",y:"21.4",width:"20",height:"1.6",rx:"0.8",fill:"var(--on-accent)",opacity:"0.5"}),m.jsx("rect",{x:"6.2",y:"10",width:"3.8",height:"11.8",rx:"1",fill:"var(--on-accent)"}),m.jsxs("g",{className:"arm",children:[m.jsx("rect",{x:"7.4",y:"10.6",width:"16.6",height:"3.6",rx:"1.8",fill:"var(--on-accent)"}),m.jsx("rect",{x:"12.6",y:"10.6",width:"2.6",height:"3.6",fill:"var(--accent)",opacity:"0.85"}),m.jsx("rect",{x:"17.8",y:"10.6",width:"2.6",height:"3.6",fill:"var(--accent)",opacity:"0.85"}),m.jsx("circle",{cx:"8.1",cy:"12.4",r:"2.5",fill:"var(--on-accent)"}),m.jsx("circle",{cx:"8.1",cy:"12.4",r:"1",fill:"var(--accent)"})]})]})}function Df({person:r,size:e}){return r?r.isAi?m.jsx("span",{className:`avatar is-ai${e==="lg"?" avatar-lg":""}`,title:"AutoReview",children:m.jsx(Yc,{})}):m.jsx("span",{className:`avatar${r.external?" is-external":""}${e==="lg"?" avatar-lg":""}`,style:{"--h":$x(r.id)},title:`${r.name}, ${r.role}${r.external?` (${r.org})`:""}`,children:r.initials}):m.jsx("span",{className:"avatar",style:{"--h":220},children:"?"})}function zg({person:r,sub:e}){return r?m.jsxs("span",{className:"person",children:[m.jsx(Df,{person:r}),m.jsx("span",{className:"person-name",children:r.name}),e]}):m.jsx("span",{className:"muted",children:"Unassigned"})}function P0({priority:r}){return m.jsx("span",{className:`prio p-${r}`,children:b0[r]})}const uS={open:"t-outline",in_progress:"t-accent",resolved:"t-pass",waived:"t-waived",dismissed:""};function N0({f:r}){return r.source==="ai"&&r.triage==="untriaged"?m.jsxs("span",{className:"tag t-ai",children:[m.jsx(Yc,{})," Needs triage"]}):m.jsx("span",{className:`tag ${uS[r.status]}`,children:Wx[r.status]})}function Jc({f:r}){return m.jsx("span",{className:`mini-balloon tone-${Nh(r)}${Hi(r)?" is-closed":""}`,children:r.number})}const dS={none:"",pending:"Syncing to Jira",synced:"In sync with Jira",error:"Jira sync failed"};function If({f:r}){return!r.jiraKey&&r.syncState==="none"?null:m.jsxs("span",{className:"jira-chip",title:`${dS[r.syncState]}${r.jiraStatus?`. Jira status: ${r.jiraStatus}`:""}`,children:[m.jsx("span",{className:`sync-dot s-${r.syncState}`}),r.jiraKey??"Creating…"]})}function L0(r,e){const t=lt.useRef(null);return lt.useEffect(()=>{if(!r)return;const i=o=>{t.current&&!t.current.contains(o.target)&&e()},a=o=>{o.key==="Escape"&&e()};return document.addEventListener("pointerdown",i),document.addEventListener("keydown",a),()=>{document.removeEventListener("pointerdown",i),document.removeEventListener("keydown",a)}},[r,e]),t}function kf({title:r,subtitle:e,onClose:t,children:i,footer:a,wide:o}){return lt.useEffect(()=>{const c=u=>u.key==="Escape"&&t();return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[t]),m.jsx("div",{className:"modal-scrim",onPointerDown:c=>c.target===c.currentTarget&&t(),children:m.jsxs("div",{className:"modal",role:"dialog","aria-modal":"true",style:o?{width:"min(900px, 100%)"}:void 0,children:[m.jsxs("div",{className:"modal-head",children:[m.jsxs("div",{children:[m.jsx("h2",{children:r}),e&&m.jsx("p",{children:e})]}),m.jsx("button",{className:"icon-btn",onClick:t,"aria-label":"Close",children:m.jsx(Kc,{})})]}),m.jsx("div",{className:"modal-body",children:i}),a&&m.jsx("div",{className:"modal-foot",children:a})]})})}function hS({decisionId:r}){const e=Ee(u=>u.backend),t=Ee(u=>u.set),[i,a]=lt.useState(void 0);lt.useEffect(()=>{let u=!0;return e.record(r).then(h=>u&&a(h)),()=>{u=!1}},[e,r]);const o=()=>t("modal",null),c=i?e.attachmentUrl(i.part.number,`${i.part.number}_Rev${i.part.rev}_review-record.html`):null;return m.jsxs(kf,{wide:!0,title:i?`Review record ${i.recordId}`:"Review record",subtitle:i?`Attached to ${i.part.number} in Windchill when the release was approved`:void 0,onClose:o,footer:m.jsxs(m.Fragment,{children:[c&&m.jsxs("a",{className:"btn",href:c,target:"_blank",rel:"noreferrer",children:[m.jsx(jc,{})," Open the Windchill attachment"]}),m.jsx("button",{className:"btn btn-primary",onClick:o,children:"Done"})]}),children:[i===void 0&&m.jsx("div",{className:"empty",children:m.jsx(Gi,{className:"spin"})}),i===null&&m.jsxs("div",{className:"empty",children:["No record for ",r,"."]}),i&&m.jsxs("div",{className:"doc","data-testid":"record",children:[m.jsxs("div",{className:"doc-block titleblock",style:{position:"static",width:"auto",backdropFilter:"none"},children:[m.jsxs("div",{className:"tb-row tb-head",children:[m.jsxs("div",{className:"tb-cell",children:[m.jsx("span",{className:"tb-label",children:i.review.title}),m.jsx("span",{className:"tb-title",children:i.part.name})]}),m.jsxs("div",{className:"tb-cell tb-rev",children:[m.jsx("span",{className:"tb-label",children:"Rev"}),m.jsx("strong",{children:i.part.rev})]})]}),m.jsxs("div",{className:"tb-row",children:[m.jsxs("div",{className:"tb-cell",children:[m.jsx("span",{className:"tb-label",children:"Part no."}),m.jsx("span",{className:"tb-value",children:i.part.number})]}),m.jsxs("div",{className:"tb-cell",children:[m.jsx("span",{className:"tb-label",children:"Decision"}),m.jsxs("span",{className:"tb-value",children:[i.recordId," · approved"]})]}),m.jsxs("div",{className:"tb-cell",children:[m.jsx("span",{className:"tb-label",children:"Promotion"}),m.jsx("span",{className:"tb-value",children:i.promotionRequestId??"n/a"})]}),m.jsxs("div",{className:"tb-cell",children:[m.jsx("span",{className:"tb-label",children:"Decided"}),m.jsx("span",{className:"tb-value",children:Da(i.decidedAt)})]})]}),m.jsxs("div",{className:"tb-row",children:[m.jsxs("div",{className:"tb-cell",children:[m.jsx("span",{className:"tb-label",children:"Material"}),m.jsx("span",{className:"tb-value",children:i.part.material})]}),m.jsxs("div",{className:"tb-cell",children:[m.jsx("span",{className:"tb-label",children:"Finish"}),m.jsx("span",{className:"tb-value",children:i.part.finish})]}),m.jsxs("div",{className:"tb-cell",children:[m.jsx("span",{className:"tb-label",children:"Policy"}),m.jsxs("span",{className:"tb-value",children:[i.policy.name," v",i.policy.version]})]}),m.jsxs("div",{className:"tb-cell",children:[m.jsx("span",{className:"tb-label",children:"Requested by"}),m.jsx("span",{className:"tb-value",children:i.requestedBy??"n/a"})]})]})]}),m.jsxs("section",{children:[m.jsx("h3",{children:"Release checks"}),m.jsx("table",{className:"doc-table",children:m.jsx("tbody",{children:i.checks.map(u=>m.jsxs("tr",{children:[m.jsx("td",{style:{width:70},children:u.status==="pass"?m.jsxs("span",{className:"pass-mark",children:[m.jsx(La,{})," PASS"]}):m.jsxs("span",{className:"pass-mark warn",children:[m.jsx(Nf,{})," ",u.status==="warn"?"NOTE":"FAIL"]})}),m.jsx("td",{children:u.title}),m.jsx("td",{className:"muted",children:u.summary})]},u.id))})})]}),m.jsxs("section",{children:[m.jsx("h3",{children:"Reviews"}),m.jsxs("table",{className:"doc-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"Role"}),m.jsx("th",{children:"Reviewer"}),m.jsx("th",{children:"Status"}),m.jsx("th",{children:"Completed"})]})}),m.jsx("tbody",{children:i.reviews.map(u=>m.jsxs("tr",{children:[m.jsx("td",{children:u.role}),m.jsx("td",{children:u.person}),m.jsx("td",{children:u.status}),m.jsx("td",{className:"mono",children:Da(u.completedAt)})]},u.role))})]})]}),m.jsxs("section",{children:[m.jsx("h3",{children:"Feedback and dispositions"}),m.jsxs("table",{className:"doc-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"ID"}),m.jsx("th",{children:"Priority"}),m.jsx("th",{children:"Feedback"}),m.jsx("th",{children:"Disposition"}),m.jsx("th",{children:"Jira"})]})}),m.jsx("tbody",{children:i.feedback.map(u=>m.jsxs("tr",{children:[m.jsx("td",{className:"mono",children:u.id}),m.jsx("td",{children:b0[u.priority]}),m.jsxs("td",{children:[u.title,u.source==="AutoReview"&&m.jsx("span",{className:"muted",children:" · AutoReview"})]}),m.jsx("td",{children:u.disposition}),m.jsx("td",{className:"mono",children:u.jiraKey??""})]},u.id))})]})]}),m.jsxs("section",{children:[m.jsx("h3",{children:"Snapshot hash"}),m.jsx("div",{className:"doc-hash",children:i.snapshotHash}),m.jsx("p",{className:"hint",style:{marginTop:6},children:"SHA-256 of the canonical JSON above. If anything in the record changes after release, the hash stops matching."})]})]})]})}function fS(r){const e=r.params;switch(r.type){case"no_open_feedback":return`Fails while any ${e.priorities.join(" or ")} feedback is open or in progress.${e.allowWaiver===!1?" Waivers are not accepted.":" A waiver with a written reason clears it."}`;case"ai_findings_triaged":return"Every AutoReview finding needs a person to accept or dismiss it. Accepted findings then count like any other feedback.";case"requested_reviews_complete":return`Fails until the ${e.roles.join(", ")} reviews are complete.`;case"integrations_in_sync":return"Fails while any change is still on its way to Jira or Windchill, or failed to get there. The gate never releases on data it cannot confirm.";default:return r.type}}function pS(){const r=Ee(a=>a.set),e=Ee(a=>{var o;return(o=a.snap)==null?void 0:o.workspace.policy}),[t,i]=lt.useState(!1);return e?m.jsx(kf,{title:`${e.name} v${e.version}`,subtitle:e.description,onClose:()=>r("modal",null),footer:m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"btn",onClick:()=>i(a=>!a),children:t?"Show rules":"Show as JSON"}),m.jsx("button",{className:"btn btn-primary",onClick:()=>r("modal",null),children:"Done"})]}),children:t?m.jsx("pre",{className:"code-block",children:JSON.stringify(e,null,2)}):m.jsxs("div",{className:"rules",children:[e.rules.map((a,o)=>m.jsxs("div",{className:"rule",children:[m.jsx("span",{className:"rule-num",children:String(o+1).padStart(2,"0")}),m.jsxs("div",{children:[m.jsx("h4",{children:a.title}),m.jsx("p",{children:fS(a)})]}),m.jsx("span",{className:`tag t-display ${a.blocking?"t-crit":"t-outline"}`,children:a.blocking?"Blocking":"Advisory"})]},a.id)),m.jsx("p",{className:"hint",children:"Rules are data. Each customer can change thresholds, waiver rules and required reviewers without a code change. The server and the browser build run the same rules against a shared set of test cases."})]})}):null}function mS(){const r=Ee(t=>t.set),e=Ee(t=>{var i;return(i=t.backend)==null?void 0:i.mode});return m.jsx(kf,{title:"About this demo",subtitle:"A concept for CoLab's Workflows team",onClose:()=>r("modal",null),children:m.jsxs("div",{className:"about",children:[m.jsxs("p",{children:["Engineering teams review designs in CoLab, track the work in Jira, and release parts in Windchill. Release Gate connects the three: ",m.jsx("strong",{children:"Windchill can't promote a part to Released until the CoLab review says it's ready"}),", and the answer comes with reasons, a decision record and a review record attached back in Windchill."]}),m.jsxs("div",{className:"about-grid",children:[m.jsxs("div",{className:"about-card",children:[m.jsx("h4",{children:"Two-way Jira sync"}),m.jsx("p",{children:"Transactional outbox, retries with backoff, idempotent creates, signed and de-duplicated webhooks, echo suppression."})]}),m.jsxs("div",{className:"about-card",children:[m.jsx("h4",{children:"Windchill release gate"}),m.jsx("p",{children:"Windchill's validation hook asks the gate. It fails closed and only shows Released once Windchill confirms."})]}),m.jsxs("div",{className:"about-card",children:[m.jsx("h4",{children:"People decide"}),m.jsx("p",{children:"AutoReview findings can't block or pass a release until a person accepts or dismisses them, with a reason on record."})]})]}),m.jsxs("div",{children:[m.jsx("span",{className:"label",children:"Try it"}),m.jsxs("ol",{children:[m.jsx("li",{children:"Click balloon 1 on the model and resolve it. Watch the log: the note and status go to Jira, and Jira's echo is ignored."}),m.jsx("li",{children:"Open the Jira board below and move ENG-142 to Done. The gate hears the webhook and clears balloon 2."}),m.jsx("li",{children:"Open balloon 4 (AutoReview) and dismiss it with a reason. Waive balloon 3."}),m.jsx("li",{children:"On the Checks tab, nudge Priya for the Quality review."}),m.jsx("li",{children:"Release Rev C. Windchill asks the gate, the gate approves, and the review record lands in Windchill."}),m.jsx("li",{children:"Reset from the ··· menu, turn on a Simulate switch, and do it again."})]})]}),m.jsxs("p",{className:"disclaimer",children:["Concept demo by Jaineel Patel. Jira, Windchill, the parts and the people are simulated",e==="offline"?", and in this build everything runs in your browser":"",". Not affiliated with CoLab, Atlassian or PTC."]})]})})}function gS(){const r=Ee(e=>e.modal);return r?r.kind==="record"?m.jsx(hS,{decisionId:r.decisionId}):r.kind==="policy"?m.jsx(pS,{}):m.jsx(mS,{}):null}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="170",Ta={ROTATE:0,DOLLY:1,PAN:2},Sa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vS=0,jg=1,yS=2,D0=1,I0=2,dr=3,Qr=0,On=1,zi=2,Jr=0,Aa=1,Hg=2,Vg=3,Gg=4,_S=5,Es=100,xS=101,SS=102,MS=103,wS=104,ES=200,bS=201,TS=202,AS=203,Lh=204,Dh=205,RS=206,CS=207,PS=208,NS=209,LS=210,DS=211,IS=212,kS=213,US=214,Ih=0,kh=1,Uh=2,Ia=3,Oh=4,Fh=5,Bh=6,zh=7,k0=0,OS=1,FS=2,Zr=0,BS=1,zS=2,jS=3,U0=4,HS=5,VS=6,GS=7,O0=300,ka=301,Ua=302,jh=303,Hh=304,Zc=306,Vh=1e3,Ts=1001,Gh=1002,Pi=1003,WS=1004,tc=1005,Vi=1006,Wd=1007,As=1008,mr=1009,F0=1010,B0=1011,Oo=1012,Of=1013,Ps=1014,hr=1015,Go=1016,Ff=1017,Bf=1018,Oa=1020,z0=35902,j0=1021,H0=1022,Ci=1023,V0=1024,G0=1025,Ra=1026,Fa=1027,W0=1028,zf=1029,$0=1030,jf=1031,Hf=1033,Ic=33776,kc=33777,Uc=33778,Oc=33779,Wh=35840,$h=35841,Xh=35842,qh=35843,Yh=36196,Kh=37492,Jh=37496,Zh=37808,Qh=37809,ef=37810,tf=37811,nf=37812,rf=37813,sf=37814,af=37815,of=37816,lf=37817,cf=37818,uf=37819,df=37820,hf=37821,Fc=36492,ff=36494,pf=36495,X0=36283,mf=36284,gf=36285,vf=36286,$S=3200,XS=3201,q0=0,qS=1,Yr="",ni="srgb",za="srgb-linear",Qc="linear",kt="srgb",sa=7680,Wg=519,YS=512,KS=513,JS=514,Y0=515,ZS=516,QS=517,eM=518,tM=519,yf=35044,$g="300 es",fr=2e3,Hc=2001;class Ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xg=1234567;const Ca=Math.PI/180,Fo=180/Math.PI;function Wi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function an(r,e,t){return Math.max(e,Math.min(t,r))}function Vf(r,e){return(r%e+e)%e}function nM(r,e,t,i,a){return i+(r-e)*(a-i)/(t-e)}function iM(r,e,t){return r!==e?(t-r)/(e-r):0}function No(r,e,t){return(1-t)*r+t*e}function rM(r,e,t,i){return No(r,e,1-Math.exp(-t*i))}function sM(r,e=1){return e-Math.abs(Vf(r,e*2)-e)}function aM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function oM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function lM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function cM(r,e){return r+Math.random()*(e-r)}function uM(r){return r*(.5-Math.random())}function dM(r){r!==void 0&&(Xg=r);let e=Xg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hM(r){return r*Ca}function fM(r){return r*Fo}function pM(r){return(r&r-1)===0&&r!==0}function mM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function gM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function vM(r,e,t,i,a){const o=Math.cos,c=Math.sin,u=o(t/2),h=c(t/2),p=o((e+i)/2),g=c((e+i)/2),f=o((e-i)/2),_=c((e-i)/2),M=o((i-e)/2),w=c((i-e)/2);switch(a){case"XYX":r.set(u*g,h*f,h*_,u*p);break;case"YZY":r.set(h*_,u*g,h*f,u*p);break;case"ZXZ":r.set(h*f,h*_,u*g,u*p);break;case"XZX":r.set(u*g,h*w,h*M,u*p);break;case"YXY":r.set(h*M,u*g,h*w,u*p);break;case"ZYZ":r.set(h*w,h*M,u*g,u*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ri(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function It(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Gf={DEG2RAD:Ca,RAD2DEG:Fo,generateUUID:Wi,clamp:an,euclideanModulo:Vf,mapLinear:nM,inverseLerp:iM,lerp:No,damp:rM,pingpong:sM,smoothstep:aM,smootherstep:oM,randInt:lM,randFloat:cM,randFloatSpread:uM,seededRandom:dM,degToRad:hM,radToDeg:fM,isPowerOfTwo:pM,ceilPowerOfTwo:mM,floorPowerOfTwo:gM,setQuaternionFromProperEuler:vM,normalize:It,denormalize:Ri};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*a+e.x,this.y=o*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,i,a,o,c,u,h,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,u,h,p)}set(e,t,i,a,o,c,u,h,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=u,g[3]=t,g[4]=o,g[5]=h,g[6]=i,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],u=i[3],h=i[6],p=i[1],g=i[4],f=i[7],_=i[2],M=i[5],w=i[8],b=a[0],S=a[3],y=a[6],T=a[1],C=a[4],R=a[7],Y=a[2],j=a[5],F=a[8];return o[0]=c*b+u*T+h*Y,o[3]=c*S+u*C+h*j,o[6]=c*y+u*R+h*F,o[1]=p*b+g*T+f*Y,o[4]=p*S+g*C+f*j,o[7]=p*y+g*R+f*F,o[2]=_*b+M*T+w*Y,o[5]=_*S+M*C+w*j,o[8]=_*y+M*R+w*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],h=e[6],p=e[7],g=e[8];return t*c*g-t*u*p-i*o*g+i*u*h+a*o*p-a*c*h}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],h=e[6],p=e[7],g=e[8],f=g*c-u*p,_=u*h-g*o,M=p*o-c*h,w=t*f+i*_+a*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=f*b,e[1]=(a*p-g*i)*b,e[2]=(u*i-a*c)*b,e[3]=_*b,e[4]=(g*t-a*h)*b,e[5]=(a*o-u*t)*b,e[6]=M*b,e[7]=(i*h-p*t)*b,e[8]=(c*t-i*o)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,c,u){const h=Math.cos(o),p=Math.sin(o);return this.set(i*h,i*p,-i*(h*c+p*u)+c+e,-a*p,a*h,-a*(-p*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply($d.makeScale(e,t)),this}rotate(e){return this.premultiply($d.makeRotation(-e)),this}translate(e,t){return this.premultiply($d.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $d=new gt;function K0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Vc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yM(){const r=Vc("canvas");return r.style.display="block",r}const qg={};function Co(r){r in qg||(qg[r]=!0,console.warn(r))}function _M(r,e,t){return new Promise(function(i,a){function o(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}function xM(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function SM(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const At={enabled:!0,workingColorSpace:za,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===kt&&(r.r=pr(r.r),r.g=pr(r.g),r.b=pr(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===kt&&(r.r=Pa(r.r),r.g=Pa(r.g),r.b=Pa(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yr?Qc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function pr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Pa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Yg=[.64,.33,.3,.6,.15,.06],Kg=[.2126,.7152,.0722],Jg=[.3127,.329],Zg=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qg=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);At.define({[za]:{primaries:Yg,whitePoint:Jg,transfer:Qc,toXYZ:Zg,fromXYZ:Qg,luminanceCoefficients:Kg,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:Yg,whitePoint:Jg,transfer:kt,toXYZ:Zg,fromXYZ:Qg,luminanceCoefficients:Kg,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}});let aa;class MM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{aa===void 0&&(aa=Vc("canvas")),aa.width=e.width,aa.height=e.height;const i=aa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=aa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=pr(o[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pr(t[i]/255)*255):t[i]=pr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wM=0;class J0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?o.push(Xd(a[c].image)):o.push(Xd(a[c]))}else o=Xd(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function Xd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?MM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let EM=0;class Yn extends Ds{constructor(e=Yn.DEFAULT_IMAGE,t=Yn.DEFAULT_MAPPING,i=Ts,a=Ts,o=Vi,c=As,u=Ci,h=mr,p=Yn.DEFAULT_ANISOTROPY,g=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Wi(),this.name="",this.source=new J0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=h,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vh:e.x=e.x-Math.floor(e.x);break;case Ts:e.x=e.x<0?0:1;break;case Gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vh:e.y=e.y-Math.floor(e.y);break;case Ts:e.y=e.y<0?0:1;break;case Gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=O0;Yn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,a=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const h=e.elements,p=h[0],g=h[4],f=h[8],_=h[1],M=h[5],w=h[9],b=h[2],S=h[6],y=h[10];if(Math.abs(g-_)<.01&&Math.abs(f-b)<.01&&Math.abs(w-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(f+b)<.1&&Math.abs(w+S)<.1&&Math.abs(p+M+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(p+1)/2,R=(M+1)/2,Y=(y+1)/2,j=(g+_)/4,F=(f+b)/4,W=(w+S)/4;return C>R&&C>Y?C<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(C),a=j/i,o=F/i):R>Y?R<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(R),i=j/a,o=W/a):Y<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(Y),i=F/o,a=W/o),this.set(i,a,o,t),this}let T=Math.sqrt((S-w)*(S-w)+(f-b)*(f-b)+(_-g)*(_-g));return Math.abs(T)<.001&&(T=1),this.x=(S-w)/T,this.y=(f-b)/T,this.z=(_-g)/T,this.w=Math.acos((p+M+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bM extends Ds{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const a={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Yn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new J0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ns extends bM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Z0 extends Yn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class TM extends Yn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class es{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,c,u){let h=i[a+0],p=i[a+1],g=i[a+2],f=i[a+3];const _=o[c+0],M=o[c+1],w=o[c+2],b=o[c+3];if(u===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=f;return}if(u===1){e[t+0]=_,e[t+1]=M,e[t+2]=w,e[t+3]=b;return}if(f!==b||h!==_||p!==M||g!==w){let S=1-u;const y=h*_+p*M+g*w+f*b,T=y>=0?1:-1,C=1-y*y;if(C>Number.EPSILON){const Y=Math.sqrt(C),j=Math.atan2(Y,y*T);S=Math.sin(S*j)/Y,u=Math.sin(u*j)/Y}const R=u*T;if(h=h*S+_*R,p=p*S+M*R,g=g*S+w*R,f=f*S+b*R,S===1-u){const Y=1/Math.sqrt(h*h+p*p+g*g+f*f);h*=Y,p*=Y,g*=Y,f*=Y}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,a,o,c){const u=i[a],h=i[a+1],p=i[a+2],g=i[a+3],f=o[c],_=o[c+1],M=o[c+2],w=o[c+3];return e[t]=u*w+g*f+h*M-p*_,e[t+1]=h*w+g*_+p*f-u*M,e[t+2]=p*w+g*M+u*_-h*f,e[t+3]=g*w-u*f-h*_-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,c=e._order,u=Math.cos,h=Math.sin,p=u(i/2),g=u(a/2),f=u(o/2),_=h(i/2),M=h(a/2),w=h(o/2);switch(c){case"XYZ":this._x=_*g*f+p*M*w,this._y=p*M*f-_*g*w,this._z=p*g*w+_*M*f,this._w=p*g*f-_*M*w;break;case"YXZ":this._x=_*g*f+p*M*w,this._y=p*M*f-_*g*w,this._z=p*g*w-_*M*f,this._w=p*g*f+_*M*w;break;case"ZXY":this._x=_*g*f-p*M*w,this._y=p*M*f+_*g*w,this._z=p*g*w+_*M*f,this._w=p*g*f-_*M*w;break;case"ZYX":this._x=_*g*f-p*M*w,this._y=p*M*f+_*g*w,this._z=p*g*w-_*M*f,this._w=p*g*f+_*M*w;break;case"YZX":this._x=_*g*f+p*M*w,this._y=p*M*f+_*g*w,this._z=p*g*w-_*M*f,this._w=p*g*f-_*M*w;break;case"XZY":this._x=_*g*f-p*M*w,this._y=p*M*f-_*g*w,this._z=p*g*w+_*M*f,this._w=p*g*f+_*M*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],c=t[1],u=t[5],h=t[9],p=t[2],g=t[6],f=t[10],_=i+u+f;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-h)*M,this._y=(o-p)*M,this._z=(c-a)*M}else if(i>u&&i>f){const M=2*Math.sqrt(1+i-u-f);this._w=(g-h)/M,this._x=.25*M,this._y=(a+c)/M,this._z=(o+p)/M}else if(u>f){const M=2*Math.sqrt(1+u-i-f);this._w=(o-p)/M,this._x=(a+c)/M,this._y=.25*M,this._z=(h+g)/M}else{const M=2*Math.sqrt(1+f-i-u);this._w=(c-a)/M,this._x=(o+p)/M,this._y=(h+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,c=e._w,u=t._x,h=t._y,p=t._z,g=t._w;return this._x=i*g+c*u+a*p-o*h,this._y=a*g+c*h+o*u-i*p,this._z=o*g+c*p+i*h-a*u,this._w=c*g-i*u-a*h-o*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,o=this._z,c=this._w;let u=c*e._w+i*e._x+a*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=a,this._z=o,this;const h=1-u*u;if(h<=Number.EPSILON){const M=1-t;return this._w=M*c+t*this._w,this._x=M*i+t*this._x,this._y=M*a+t*this._y,this._z=M*o+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,u),f=Math.sin((1-t)*g)/p,_=Math.sin(t*g)/p;return this._w=c*f+this._w*_,this._x=i*f+this._x*_,this._y=a*f+this._y*_,this._z=o*f+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ev.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ev.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,c=e.y,u=e.z,h=e.w,p=2*(c*a-u*i),g=2*(u*t-o*a),f=2*(o*i-c*t);return this.x=t+h*p+c*f-u*g,this.y=i+h*g+u*p-o*f,this.z=a+h*f+o*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,c=t.x,u=t.y,h=t.z;return this.x=a*h-o*u,this.y=o*c-i*h,this.z=i*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qd.copy(this).projectOnVector(e),this.sub(qd)}reflect(e){return this.sub(qd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qd=new O,ev=new es;class $i{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Ei):Ei.fromBufferAttribute(o,c),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nc.copy(i.boundingBox)),nc.applyMatrix4(e.matrixWorld),this.union(nc)}const a=e.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),ic.subVectors(this.max,Eo),oa.subVectors(e.a,Eo),la.subVectors(e.b,Eo),ca.subVectors(e.c,Eo),Fr.subVectors(la,oa),Br.subVectors(ca,la),gs.subVectors(oa,ca);let t=[0,-Fr.z,Fr.y,0,-Br.z,Br.y,0,-gs.z,gs.y,Fr.z,0,-Fr.x,Br.z,0,-Br.x,gs.z,0,-gs.x,-Fr.y,Fr.x,0,-Br.y,Br.x,0,-gs.y,gs.x,0];return!Yd(t,oa,la,ca,ic)||(t=[1,0,0,0,1,0,0,0,1],!Yd(t,oa,la,ca,ic))?!1:(rc.crossVectors(Fr,Br),t=[rc.x,rc.y,rc.z],Yd(t,oa,la,ca,ic))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ar=[new O,new O,new O,new O,new O,new O,new O,new O],Ei=new O,nc=new $i,oa=new O,la=new O,ca=new O,Fr=new O,Br=new O,gs=new O,Eo=new O,ic=new O,rc=new O,vs=new O;function Yd(r,e,t,i,a){for(let o=0,c=r.length-3;o<=c;o+=3){vs.fromArray(r,o);const u=a.x*Math.abs(vs.x)+a.y*Math.abs(vs.y)+a.z*Math.abs(vs.z),h=e.dot(vs),p=t.dot(vs),g=i.dot(vs);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>u)return!1}return!0}const AM=new $i,bo=new O,Kd=new O;class ja{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):AM.setFromPoints(e).getCenter(i);let a=0;for(let o=0,c=e.length;o<c;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const t=bo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(bo,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Kd)),this.expandByPoint(bo.copy(e.center).sub(Kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const or=new O,Jd=new O,sc=new O,zr=new O,Zd=new O,ac=new O,Qd=new O;class Wf{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Jd.copy(e).add(t).multiplyScalar(.5),sc.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(Jd);const o=e.distanceTo(t)*.5,c=-this.direction.dot(sc),u=zr.dot(this.direction),h=-zr.dot(sc),p=zr.lengthSq(),g=Math.abs(1-c*c);let f,_,M,w;if(g>0)if(f=c*h-u,_=c*u-h,w=o*g,f>=0)if(_>=-w)if(_<=w){const b=1/g;f*=b,_*=b,M=f*(f+c*_+2*u)+_*(c*f+_+2*h)+p}else _=o,f=Math.max(0,-(c*_+u)),M=-f*f+_*(_+2*h)+p;else _=-o,f=Math.max(0,-(c*_+u)),M=-f*f+_*(_+2*h)+p;else _<=-w?(f=Math.max(0,-(-c*o+u)),_=f>0?-o:Math.min(Math.max(-o,-h),o),M=-f*f+_*(_+2*h)+p):_<=w?(f=0,_=Math.min(Math.max(-o,-h),o),M=_*(_+2*h)+p):(f=Math.max(0,-(c*o+u)),_=f>0?o:Math.min(Math.max(-o,-h),o),M=-f*f+_*(_+2*h)+p);else _=c>0?-o:o,f=Math.max(0,-(c*_+u)),M=-f*f+_*(_+2*h)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(Jd).addScaledVector(sc,_),M}intersectSphere(e,t){or.subVectors(e.center,this.origin);const i=or.dot(this.direction),a=or.dot(or)-i*i,o=e.radius*e.radius;if(a>o)return null;const c=Math.sqrt(o-a),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,c,u,h;const p=1/this.direction.x,g=1/this.direction.y,f=1/this.direction.z,_=this.origin;return p>=0?(i=(e.min.x-_.x)*p,a=(e.max.x-_.x)*p):(i=(e.max.x-_.x)*p,a=(e.min.x-_.x)*p),g>=0?(o=(e.min.y-_.y)*g,c=(e.max.y-_.y)*g):(o=(e.max.y-_.y)*g,c=(e.min.y-_.y)*g),i>c||o>a||((o>i||isNaN(i))&&(i=o),(c<a||isNaN(a))&&(a=c),f>=0?(u=(e.min.z-_.z)*f,h=(e.max.z-_.z)*f):(u=(e.max.z-_.z)*f,h=(e.min.z-_.z)*f),i>h||u>a)||((u>i||i!==i)&&(i=u),(h<a||a!==a)&&(a=h),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,i,a,o){Zd.subVectors(t,e),ac.subVectors(i,e),Qd.crossVectors(Zd,ac);let c=this.direction.dot(Qd),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;zr.subVectors(this.origin,e);const h=u*this.direction.dot(ac.crossVectors(zr,ac));if(h<0)return null;const p=u*this.direction.dot(Zd.cross(zr));if(p<0||h+p>c)return null;const g=-u*zr.dot(Qd);return g<0?null:this.at(g/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,i,a,o,c,u,h,p,g,f,_,M,w,b,S){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,u,h,p,g,f,_,M,w,b,S)}set(e,t,i,a,o,c,u,h,p,g,f,_,M,w,b,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=a,y[1]=o,y[5]=c,y[9]=u,y[13]=h,y[2]=p,y[6]=g,y[10]=f,y[14]=_,y[3]=M,y[7]=w,y[11]=b,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/ua.setFromMatrixColumn(e,0).length(),o=1/ua.setFromMatrixColumn(e,1).length(),c=1/ua.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(a),p=Math.sin(a),g=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const _=c*g,M=c*f,w=u*g,b=u*f;t[0]=h*g,t[4]=-h*f,t[8]=p,t[1]=M+w*p,t[5]=_-b*p,t[9]=-u*h,t[2]=b-_*p,t[6]=w+M*p,t[10]=c*h}else if(e.order==="YXZ"){const _=h*g,M=h*f,w=p*g,b=p*f;t[0]=_+b*u,t[4]=w*u-M,t[8]=c*p,t[1]=c*f,t[5]=c*g,t[9]=-u,t[2]=M*u-w,t[6]=b+_*u,t[10]=c*h}else if(e.order==="ZXY"){const _=h*g,M=h*f,w=p*g,b=p*f;t[0]=_-b*u,t[4]=-c*f,t[8]=w+M*u,t[1]=M+w*u,t[5]=c*g,t[9]=b-_*u,t[2]=-c*p,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const _=c*g,M=c*f,w=u*g,b=u*f;t[0]=h*g,t[4]=w*p-M,t[8]=_*p+b,t[1]=h*f,t[5]=b*p+_,t[9]=M*p-w,t[2]=-p,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const _=c*h,M=c*p,w=u*h,b=u*p;t[0]=h*g,t[4]=b-_*f,t[8]=w*f+M,t[1]=f,t[5]=c*g,t[9]=-u*g,t[2]=-p*g,t[6]=M*f+w,t[10]=_-b*f}else if(e.order==="XZY"){const _=c*h,M=c*p,w=u*h,b=u*p;t[0]=h*g,t[4]=-f,t[8]=p*g,t[1]=_*f+b,t[5]=c*g,t[9]=M*f-w,t[2]=w*f-M,t[6]=u*g,t[10]=b*f+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RM,e,CM)}lookAt(e,t,i){const a=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),jr.crossVectors(i,ei),jr.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),jr.crossVectors(i,ei)),jr.normalize(),oc.crossVectors(ei,jr),a[0]=jr.x,a[4]=oc.x,a[8]=ei.x,a[1]=jr.y,a[5]=oc.y,a[9]=ei.y,a[2]=jr.z,a[6]=oc.z,a[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],u=i[4],h=i[8],p=i[12],g=i[1],f=i[5],_=i[9],M=i[13],w=i[2],b=i[6],S=i[10],y=i[14],T=i[3],C=i[7],R=i[11],Y=i[15],j=a[0],F=a[4],W=a[8],D=a[12],N=a[1],B=a[5],ue=a[9],Q=a[13],le=a[2],pe=a[6],se=a[10],ce=a[14],H=a[3],oe=a[7],re=a[11],U=a[15];return o[0]=c*j+u*N+h*le+p*H,o[4]=c*F+u*B+h*pe+p*oe,o[8]=c*W+u*ue+h*se+p*re,o[12]=c*D+u*Q+h*ce+p*U,o[1]=g*j+f*N+_*le+M*H,o[5]=g*F+f*B+_*pe+M*oe,o[9]=g*W+f*ue+_*se+M*re,o[13]=g*D+f*Q+_*ce+M*U,o[2]=w*j+b*N+S*le+y*H,o[6]=w*F+b*B+S*pe+y*oe,o[10]=w*W+b*ue+S*se+y*re,o[14]=w*D+b*Q+S*ce+y*U,o[3]=T*j+C*N+R*le+Y*H,o[7]=T*F+C*B+R*pe+Y*oe,o[11]=T*W+C*ue+R*se+Y*re,o[15]=T*D+C*Q+R*ce+Y*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],c=e[1],u=e[5],h=e[9],p=e[13],g=e[2],f=e[6],_=e[10],M=e[14],w=e[3],b=e[7],S=e[11],y=e[15];return w*(+o*h*f-a*p*f-o*u*_+i*p*_+a*u*M-i*h*M)+b*(+t*h*M-t*p*_+o*c*_-a*c*M+a*p*g-o*h*g)+S*(+t*p*f-t*u*M-o*c*f+i*c*M+o*u*g-i*p*g)+y*(-a*u*g-t*h*f+t*u*_+a*c*f-i*c*_+i*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],h=e[6],p=e[7],g=e[8],f=e[9],_=e[10],M=e[11],w=e[12],b=e[13],S=e[14],y=e[15],T=f*S*p-b*_*p+b*h*M-u*S*M-f*h*y+u*_*y,C=w*_*p-g*S*p-w*h*M+c*S*M+g*h*y-c*_*y,R=g*b*p-w*f*p+w*u*M-c*b*M-g*u*y+c*f*y,Y=w*f*h-g*b*h-w*u*_+c*b*_+g*u*S-c*f*S,j=t*T+i*C+a*R+o*Y;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/j;return e[0]=T*F,e[1]=(b*_*o-f*S*o-b*a*M+i*S*M+f*a*y-i*_*y)*F,e[2]=(u*S*o-b*h*o+b*a*p-i*S*p-u*a*y+i*h*y)*F,e[3]=(f*h*o-u*_*o-f*a*p+i*_*p+u*a*M-i*h*M)*F,e[4]=C*F,e[5]=(g*S*o-w*_*o+w*a*M-t*S*M-g*a*y+t*_*y)*F,e[6]=(w*h*o-c*S*o-w*a*p+t*S*p+c*a*y-t*h*y)*F,e[7]=(c*_*o-g*h*o+g*a*p-t*_*p-c*a*M+t*h*M)*F,e[8]=R*F,e[9]=(w*f*o-g*b*o-w*i*M+t*b*M+g*i*y-t*f*y)*F,e[10]=(c*b*o-w*u*o+w*i*p-t*b*p-c*i*y+t*u*y)*F,e[11]=(g*u*o-c*f*o-g*i*p+t*f*p+c*i*M-t*u*M)*F,e[12]=Y*F,e[13]=(g*b*a-w*f*a+w*i*_-t*b*_-g*i*S+t*f*S)*F,e[14]=(w*u*a-c*b*a-w*i*h+t*b*h+c*i*S-t*u*S)*F,e[15]=(c*f*a-g*u*a+g*i*h-t*f*h-c*i*_+t*u*_)*F,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,c=e.x,u=e.y,h=e.z,p=o*c,g=o*u;return this.set(p*c+i,p*u-a*h,p*h+a*u,0,p*u+a*h,g*u+i,g*h-a*c,0,p*h-a*u,g*h+a*c,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,c){return this.set(1,i,o,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,c=t._y,u=t._z,h=t._w,p=o+o,g=c+c,f=u+u,_=o*p,M=o*g,w=o*f,b=c*g,S=c*f,y=u*f,T=h*p,C=h*g,R=h*f,Y=i.x,j=i.y,F=i.z;return a[0]=(1-(b+y))*Y,a[1]=(M+R)*Y,a[2]=(w-C)*Y,a[3]=0,a[4]=(M-R)*j,a[5]=(1-(_+y))*j,a[6]=(S+T)*j,a[7]=0,a[8]=(w+C)*F,a[9]=(S-T)*F,a[10]=(1-(_+b))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let o=ua.set(a[0],a[1],a[2]).length();const c=ua.set(a[4],a[5],a[6]).length(),u=ua.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],bi.copy(this);const p=1/o,g=1/c,f=1/u;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=g,bi.elements[5]*=g,bi.elements[6]*=g,bi.elements[8]*=f,bi.elements[9]*=f,bi.elements[10]*=f,t.setFromRotationMatrix(bi),i.x=o,i.y=c,i.z=u,this}makePerspective(e,t,i,a,o,c,u=fr){const h=this.elements,p=2*o/(t-e),g=2*o/(i-a),f=(t+e)/(t-e),_=(i+a)/(i-a);let M,w;if(u===fr)M=-(c+o)/(c-o),w=-2*c*o/(c-o);else if(u===Hc)M=-c/(c-o),w=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,a,o,c,u=fr){const h=this.elements,p=1/(t-e),g=1/(i-a),f=1/(c-o),_=(t+e)*p,M=(i+a)*g;let w,b;if(u===fr)w=(c+o)*f,b=-2*f;else if(u===Hc)w=o*f,b=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=b,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ua=new O,bi=new zt,RM=new O(0,0,0),CM=new O(1,1,1),jr=new O,oc=new O,ei=new O,tv=new zt,nv=new es;class Xi{constructor(e=0,t=0,i=0,a=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],c=a[4],u=a[8],h=a[1],p=a[5],g=a[9],f=a[2],_=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-an(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(an(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-f,M),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-an(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(an(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(u,M));break;case"XZY":this._z=Math.asin(-an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nv.setFromEuler(this),this.setFromQuaternion(nv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class $f{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PM=0;const iv=new O,da=new es,lr=new zt,lc=new O,To=new O,NM=new O,LM=new es,rv=new O(1,0,0),sv=new O(0,1,0),av=new O(0,0,1),ov={type:"added"},DM={type:"removed"},ha={type:"childadded",child:null},eh={type:"childremoved",child:null};class Sn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new O,t=new Xi,i=new es,a=new O(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new zt},normalMatrix:{value:new gt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $f,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.multiply(da),this}rotateOnWorldAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.premultiply(da),this}rotateX(e){return this.rotateOnAxis(rv,e)}rotateY(e){return this.rotateOnAxis(sv,e)}rotateZ(e){return this.rotateOnAxis(av,e)}translateOnAxis(e,t){return iv.copy(e).applyQuaternion(this.quaternion),this.position.add(iv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rv,e)}translateY(e){return this.translateOnAxis(sv,e)}translateZ(e){return this.translateOnAxis(av,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?lc.copy(e):lc.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(To,lc,this.up):lr.lookAt(lc,To,this.up),this.quaternion.setFromRotationMatrix(lr),a&&(lr.extractRotation(a.matrixWorld),da.setFromRotationMatrix(lr),this.quaternion.premultiply(da.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ov),ha.child=e,this.dispatchEvent(ha),ha.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(DM),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ov),ha.child=e,this.dispatchEvent(ha),ha.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,NM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,LM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const f=h[p];o(e.shapes,f)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,p=this.material.length;h<p;h++)u.push(o(e.materials,this.material[h]));a.material=u}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];a.animations.push(o(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),p=c(e.textures),g=c(e.images),f=c(e.shapes),_=c(e.skeletons),M=c(e.animations),w=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),p.length>0&&(i.textures=p),g.length>0&&(i.images=g),f.length>0&&(i.shapes=f),_.length>0&&(i.skeletons=_),M.length>0&&(i.animations=M),w.length>0&&(i.nodes=w)}return i.object=a,i;function c(u){const h=[];for(const p in u){const g=u[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Sn.DEFAULT_UP=new O(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new O,cr=new O,th=new O,ur=new O,fa=new O,pa=new O,lv=new O,nh=new O,ih=new O,rh=new O,sh=new Rt,ah=new Rt,oh=new Rt;class mi{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Ti.subVectors(e,t),a.cross(Ti);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){Ti.subVectors(a,t),cr.subVectors(i,t),th.subVectors(e,t);const c=Ti.dot(Ti),u=Ti.dot(cr),h=Ti.dot(th),p=cr.dot(cr),g=cr.dot(th),f=c*p-u*u;if(f===0)return o.set(0,0,0),null;const _=1/f,M=(p*h-u*g)*_,w=(c*g-u*h)*_;return o.set(1-M-w,w,M)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,i,a,o,c,u,h){return this.getBarycoord(e,t,i,a,ur)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,ur.x),h.addScaledVector(c,ur.y),h.addScaledVector(u,ur.z),h)}static getInterpolatedAttribute(e,t,i,a,o,c){return sh.setScalar(0),ah.setScalar(0),oh.setScalar(0),sh.fromBufferAttribute(e,t),ah.fromBufferAttribute(e,i),oh.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(sh,o.x),c.addScaledVector(ah,o.y),c.addScaledVector(oh,o.z),c}static isFrontFacing(e,t,i,a){return Ti.subVectors(i,t),cr.subVectors(e,t),Ti.cross(cr).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Ti.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return mi.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let c,u;fa.subVectors(a,i),pa.subVectors(o,i),nh.subVectors(e,i);const h=fa.dot(nh),p=pa.dot(nh);if(h<=0&&p<=0)return t.copy(i);ih.subVectors(e,a);const g=fa.dot(ih),f=pa.dot(ih);if(g>=0&&f<=g)return t.copy(a);const _=h*f-g*p;if(_<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(i).addScaledVector(fa,c);rh.subVectors(e,o);const M=fa.dot(rh),w=pa.dot(rh);if(w>=0&&M<=w)return t.copy(o);const b=M*p-h*w;if(b<=0&&p>=0&&w<=0)return u=p/(p-w),t.copy(i).addScaledVector(pa,u);const S=g*w-M*f;if(S<=0&&f-g>=0&&M-w>=0)return lv.subVectors(o,a),u=(f-g)/(f-g+(M-w)),t.copy(a).addScaledVector(lv,u);const y=1/(S+b+_);return c=b*y,u=_*y,t.copy(i).addScaledVector(fa,c).addScaledVector(pa,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},cc={h:0,s:0,l:0};function lh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=At.workingColorSpace){if(e=Vf(e,1),t=an(t,0,1),i=an(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=lh(c,o,e+1/3),this.g=lh(c,o,e),this.b=lh(c,o,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,t=ni){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const i=Q0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return At.fromWorkingColorSpace(Cn.copy(this),e),Math.round(an(Cn.r*255,0,255))*65536+Math.round(an(Cn.g*255,0,255))*256+Math.round(an(Cn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,a=Cn.g,o=Cn.b,c=Math.max(i,a,o),u=Math.min(i,a,o);let h,p;const g=(u+c)/2;if(u===c)h=0,p=0;else{const f=c-u;switch(p=g<=.5?f/(c+u):f/(2-c-u),c){case i:h=(a-o)/f+(a<o?6:0);break;case a:h=(o-i)/f+2;break;case o:h=(i-a)/f+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=ni){At.fromWorkingColorSpace(Cn.copy(this),e);const t=Cn.r,i=Cn.g,a=Cn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(cc);const i=No(Hr.h,cc.h,t),a=No(Hr.s,cc.s,t),o=No(Hr.l,cc.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Et;Et.NAMES=Q0;let IM=0;class Ha extends Ds{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Wi(),this.name="",this.blending=Aa,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Dh,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Aa&&(i.blending=this.blending),this.side!==Qr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lh&&(i.blendSrc=this.blendSrc),this.blendDst!==Dh&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ia&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}if(t){const o=a(e.textures),c=a(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class eu extends Ha{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=k0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new O,uc=new Pe;class Ni{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yf,this.updateRanges=[],this.gpuType=hr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)uc.fromBufferAttribute(this,t),uc.applyMatrix3(e),this.setXY(t,uc.x,uc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),a=It(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),a=It(a,this.array),o=It(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yf&&(e.usage=this.usage),e}}class ey extends Ni{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ty extends Ni{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pn extends Ni{constructor(e,t,i){super(new Float32Array(e),t,i)}}let kM=0;const pi=new zt,ch=new Sn,ma=new O,ti=new $i,Ao=new $i,hn=new O;class ri extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K0(e)?ty:ey)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new gt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,i){return pi.makeTranslation(e,t,i),this.applyMatrix4(pi),this}scale(e,t,i){return pi.makeScale(e,t,i),this.applyMatrix4(pi),this}lookAt(e){return ch.lookAt(e),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ma).negate(),this.translate(ma.x,ma.y,ma.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,o=e.length;a<o;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new pn(i,3))}else{for(let i=0,a=t.count;i<a;i++){const o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];ti.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];Ao.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors(ti.min,Ao.min),ti.expandByPoint(hn),hn.addVectors(ti.max,Ao.max),ti.expandByPoint(hn)):(ti.expandByPoint(Ao.min),ti.expandByPoint(Ao.max))}ti.getCenter(i);let a=0;for(let o=0,c=e.count;o<c;o++)hn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(hn));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],h=this.morphTargetsRelative;for(let p=0,g=u.count;p<g;p++)hn.fromBufferAttribute(u,p),h&&(ma.fromBufferAttribute(e,p),hn.add(ma)),a=Math.max(a,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let W=0;W<i.count;W++)u[W]=new O,h[W]=new O;const p=new O,g=new O,f=new O,_=new Pe,M=new Pe,w=new Pe,b=new O,S=new O;function y(W,D,N){p.fromBufferAttribute(i,W),g.fromBufferAttribute(i,D),f.fromBufferAttribute(i,N),_.fromBufferAttribute(o,W),M.fromBufferAttribute(o,D),w.fromBufferAttribute(o,N),g.sub(p),f.sub(p),M.sub(_),w.sub(_);const B=1/(M.x*w.y-w.x*M.y);isFinite(B)&&(b.copy(g).multiplyScalar(w.y).addScaledVector(f,-M.y).multiplyScalar(B),S.copy(f).multiplyScalar(M.x).addScaledVector(g,-w.x).multiplyScalar(B),u[W].add(b),u[D].add(b),u[N].add(b),h[W].add(S),h[D].add(S),h[N].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let W=0,D=T.length;W<D;++W){const N=T[W],B=N.start,ue=N.count;for(let Q=B,le=B+ue;Q<le;Q+=3)y(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const C=new O,R=new O,Y=new O,j=new O;function F(W){Y.fromBufferAttribute(a,W),j.copy(Y);const D=u[W];C.copy(D),C.sub(Y.multiplyScalar(Y.dot(D))).normalize(),R.crossVectors(j,D);const B=R.dot(h[W])<0?-1:1;c.setXYZW(W,C.x,C.y,C.z,B)}for(let W=0,D=T.length;W<D;++W){const N=T[W],B=N.start,ue=N.count;for(let Q=B,le=B+ue;Q<le;Q+=3)F(e.getX(Q+0)),F(e.getX(Q+1)),F(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,M=i.count;_<M;_++)i.setXYZ(_,0,0,0);const a=new O,o=new O,c=new O,u=new O,h=new O,p=new O,g=new O,f=new O;if(e)for(let _=0,M=e.count;_<M;_+=3){const w=e.getX(_+0),b=e.getX(_+1),S=e.getX(_+2);a.fromBufferAttribute(t,w),o.fromBufferAttribute(t,b),c.fromBufferAttribute(t,S),g.subVectors(c,o),f.subVectors(a,o),g.cross(f),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,b),p.fromBufferAttribute(i,S),u.add(g),h.add(g),p.add(g),i.setXYZ(w,u.x,u.y,u.z),i.setXYZ(b,h.x,h.y,h.z),i.setXYZ(S,p.x,p.y,p.z)}else for(let _=0,M=t.count;_<M;_+=3)a.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),g.subVectors(c,o),f.subVectors(a,o),g.cross(f),i.setXYZ(_+0,g.x,g.y,g.z),i.setXYZ(_+1,g.x,g.y,g.z),i.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(u,h){const p=u.array,g=u.itemSize,f=u.normalized,_=new p.constructor(h.length*g);let M=0,w=0;for(let b=0,S=h.length;b<S;b++){u.isInterleavedBufferAttribute?M=h[b]*u.data.stride+u.offset:M=h[b]*g;for(let y=0;y<g;y++)_[w++]=p[M++]}return new Ni(_,g,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,i=this.index.array,a=this.attributes;for(const u in a){const h=a[u],p=e(h,i);t.setAttribute(u,p)}const o=this.morphAttributes;for(const u in o){const h=[],p=o[u];for(let g=0,f=p.length;g<f;g++){const _=p[g],M=e(_,i);h.push(M)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const p=c[u];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const p=i[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let o=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let f=0,_=p.length;f<_;f++){const M=p[f];g.push(M.toJSON(e.data))}g.length>0&&(a[h]=g,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const o=e.morphAttributes;for(const p in o){const g=[],f=o[p];for(let _=0,M=f.length;_<M;_++)g.push(f[_].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const f=c[p];this.addGroup(f.start,f.count,f.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cv=new zt,ys=new Wf,dc=new ja,uv=new O,hc=new O,fc=new O,pc=new O,uh=new O,mc=new O,dv=new O,gc=new O;class Ft extends Sn{constructor(e=new ri,t=new eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(o&&u){mc.set(0,0,0);for(let h=0,p=o.length;h<p;h++){const g=u[h],f=o[h];g!==0&&(uh.fromBufferAttribute(f,e),c?mc.addScaledVector(uh,g):mc.addScaledVector(uh.sub(t),g))}t.add(mc)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dc.copy(i.boundingSphere),dc.applyMatrix4(o),ys.copy(e.ray).recast(e.near),!(dc.containsPoint(ys.origin)===!1&&(ys.intersectSphere(dc,uv)===null||ys.origin.distanceToSquared(uv)>(e.far-e.near)**2))&&(cv.copy(o).invert(),ys.copy(e.ray).applyMatrix4(cv),!(i.boundingBox!==null&&ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,i){let a;const o=this.geometry,c=this.material,u=o.index,h=o.attributes.position,p=o.attributes.uv,g=o.attributes.uv1,f=o.attributes.normal,_=o.groups,M=o.drawRange;if(u!==null)if(Array.isArray(c))for(let w=0,b=_.length;w<b;w++){const S=_[w],y=c[S.materialIndex],T=Math.max(S.start,M.start),C=Math.min(u.count,Math.min(S.start+S.count,M.start+M.count));for(let R=T,Y=C;R<Y;R+=3){const j=u.getX(R),F=u.getX(R+1),W=u.getX(R+2);a=vc(this,y,e,i,p,g,f,j,F,W),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const w=Math.max(0,M.start),b=Math.min(u.count,M.start+M.count);for(let S=w,y=b;S<y;S+=3){const T=u.getX(S),C=u.getX(S+1),R=u.getX(S+2);a=vc(this,c,e,i,p,g,f,T,C,R),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let w=0,b=_.length;w<b;w++){const S=_[w],y=c[S.materialIndex],T=Math.max(S.start,M.start),C=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let R=T,Y=C;R<Y;R+=3){const j=R,F=R+1,W=R+2;a=vc(this,y,e,i,p,g,f,j,F,W),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const w=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let S=w,y=b;S<y;S+=3){const T=S,C=S+1,R=S+2;a=vc(this,c,e,i,p,g,f,T,C,R),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function UM(r,e,t,i,a,o,c,u){let h;if(e.side===On?h=i.intersectTriangle(c,o,a,!0,u):h=i.intersectTriangle(a,o,c,e.side===Qr,u),h===null)return null;gc.copy(u),gc.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(gc);return p<t.near||p>t.far?null:{distance:p,point:gc.clone(),object:r}}function vc(r,e,t,i,a,o,c,u,h,p){r.getVertexPosition(u,hc),r.getVertexPosition(h,fc),r.getVertexPosition(p,pc);const g=UM(r,e,t,i,hc,fc,pc,dv);if(g){const f=new O;mi.getBarycoord(dv,hc,fc,pc,f),a&&(g.uv=mi.getInterpolatedAttribute(a,u,h,p,f,new Pe)),o&&(g.uv1=mi.getInterpolatedAttribute(o,u,h,p,f,new Pe)),c&&(g.normal=mi.getInterpolatedAttribute(c,u,h,p,f,new O),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const _={a:u,b:h,c:p,normal:new O,materialIndex:0};mi.getNormal(hc,fc,pc,_.normal),g.face=_,g.barycoord=f}return g}class Is extends ri{constructor(e=1,t=1,i=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:c};const u=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const h=[],p=[],g=[],f=[];let _=0,M=0;w("z","y","x",-1,-1,i,t,e,c,o,0),w("z","y","x",1,-1,i,t,-e,c,o,1),w("x","z","y",1,1,e,i,t,a,c,2),w("x","z","y",1,-1,e,i,-t,a,c,3),w("x","y","z",1,-1,e,t,i,a,o,4),w("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(h),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(g,3)),this.setAttribute("uv",new pn(f,2));function w(b,S,y,T,C,R,Y,j,F,W,D){const N=R/F,B=Y/W,ue=R/2,Q=Y/2,le=j/2,pe=F+1,se=W+1;let ce=0,H=0;const oe=new O;for(let re=0;re<se;re++){const U=re*B-Q;for(let ne=0;ne<pe;ne++){const Be=ne*N-ue;oe[b]=Be*T,oe[S]=U*C,oe[y]=le,p.push(oe.x,oe.y,oe.z),oe[b]=0,oe[S]=0,oe[y]=j>0?1:-1,g.push(oe.x,oe.y,oe.z),f.push(ne/F),f.push(1-re/W),ce+=1}}for(let re=0;re<W;re++)for(let U=0;U<F;U++){const ne=_+U+pe*re,Be=_+U+pe*(re+1),Z=_+(U+1)+pe*(re+1),he=_+(U+1)+pe*re;h.push(ne,Be,he),h.push(Be,Z,he),H+=6}u.addGroup(M,H,D),M+=H,_+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ba(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const a=r[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Un(r){const e={};for(let t=0;t<r.length;t++){const i=Ba(r[t]);for(const a in i)e[a]=i[a]}return e}function OM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ny(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Xf={clone:Ba,merge:Un};var FM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends Ha{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FM,this.fragmentShader=BM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ba(e.uniforms),this.uniformsGroups=OM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class iy extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=fr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vr=new O,hv=new Pe,fv=new Pe;class ii extends iy{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,hv,fv),t.subVectors(fv,hv)}setViewOffset(e,t,i,a,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ca*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;o+=c.offsetX*a/h,t-=c.offsetY*i/p,a*=c.width/h,i*=c.height/p}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ga=-90,va=1;class zM extends Sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ii(ga,va,e,t);a.layers=this.layers,this.add(a);const o=new ii(ga,va,e,t);o.layers=this.layers,this.add(o);const c=new ii(ga,va,e,t);c.layers=this.layers,this.add(c);const u=new ii(ga,va,e,t);u.layers=this.layers,this.add(u);const h=new ii(ga,va,e,t);h.layers=this.layers,this.add(h);const p=new ii(ga,va,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,c,u,h]=t;for(const p of t)this.remove(p);if(e===fr)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Hc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,h,p,g]=this.children,f=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,o),e.setRenderTarget(i,1,a),e.render(t,c),e.setRenderTarget(i,2,a),e.render(t,u),e.setRenderTarget(i,3,a),e.render(t,h),e.setRenderTarget(i,4,a),e.render(t,p),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,a),e.render(t,g),e.setRenderTarget(f,_,M),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class ry extends Yn{constructor(e,t,i,a,o,c,u,h,p,g){e=e!==void 0?e:[],t=t!==void 0?t:ka,super(e,t,i,a,o,c,u,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jM extends Ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new ry(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Is(5,5,5),o=new gr({name:"CubemapFromEquirect",uniforms:Ba(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:On,blending:Jr});o.uniforms.tEquirect.value=t;const c=new Ft(a,o),u=t.minFilter;return t.minFilter===As&&(t.minFilter=Vi),new zM(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,a){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(o)}}const dh=new O,HM=new O,VM=new gt;class qr{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=dh.subVectors(i,t).cross(HM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(dh),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||VM.getNormalMatrix(e),a=this.coplanarPoint(dh).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new ja,yc=new O;class qf{constructor(e=new qr,t=new qr,i=new qr,a=new qr,o=new qr,c=new qr){this.planes=[e,t,i,a,o,c]}set(e,t,i,a,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(a),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fr){const i=this.planes,a=e.elements,o=a[0],c=a[1],u=a[2],h=a[3],p=a[4],g=a[5],f=a[6],_=a[7],M=a[8],w=a[9],b=a[10],S=a[11],y=a[12],T=a[13],C=a[14],R=a[15];if(i[0].setComponents(h-o,_-p,S-M,R-y).normalize(),i[1].setComponents(h+o,_+p,S+M,R+y).normalize(),i[2].setComponents(h+c,_+g,S+w,R+T).normalize(),i[3].setComponents(h-c,_-g,S-w,R-T).normalize(),i[4].setComponents(h-u,_-f,S-b,R-C).normalize(),t===fr)i[5].setComponents(h+u,_+f,S+b,R+C).normalize();else if(t===Hc)i[5].setComponents(u,f,b,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(yc.x=a.normal.x>0?e.max.x:e.min.x,yc.y=a.normal.y>0?e.max.y:e.min.y,yc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(yc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sy(){let r=null,e=!1,t=null,i=null;function a(o,c){t(o,c),i=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function GM(r){const e=new WeakMap;function t(u,h){const p=u.array,g=u.usage,f=p.byteLength,_=r.createBuffer();r.bindBuffer(h,_),r.bufferData(h,p,g),u.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)u.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:f}}function i(u,h,p){const g=h.array,f=h.updateRanges;if(r.bindBuffer(p,u),f.length===0)r.bufferSubData(p,0,g);else{f.sort((M,w)=>M.start-w.start);let _=0;for(let M=1;M<f.length;M++){const w=f[_],b=f[M];b.start<=w.start+w.count+1?w.count=Math.max(w.count,b.start+b.count-w.start):(++_,f[_]=b)}f.length=_+1;for(let M=0,w=f.length;M<w;M++){const b=f[M];r.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(r.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const g=e.get(u);(!g||g.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const p=e.get(u);if(p===void 0)e.set(u,t(u,h));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(p.buffer,u,h),p.version=u.version}}return{get:a,remove:o,update:c}}class Wo extends ri{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,c=t/2,u=Math.floor(i),h=Math.floor(a),p=u+1,g=h+1,f=e/u,_=t/h,M=[],w=[],b=[],S=[];for(let y=0;y<g;y++){const T=y*_-c;for(let C=0;C<p;C++){const R=C*f-o;w.push(R,-T,0),b.push(0,0,1),S.push(C/u),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let T=0;T<u;T++){const C=T+p*y,R=T+p*(y+1),Y=T+1+p*(y+1),j=T+1+p*y;M.push(C,R,j),M.push(R,Y,j)}this.setIndex(M),this.setAttribute("position",new pn(w,3)),this.setAttribute("normal",new pn(b,3)),this.setAttribute("uv",new pn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var WM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$M=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ew=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_w=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ww=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ew=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Aw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ow=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ww=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$w=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,o1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,x1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,L1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,I1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,J1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Z1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Q1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ME=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:WM,alphahash_pars_fragment:$M,alphamap_fragment:XM,alphamap_pars_fragment:qM,alphatest_fragment:YM,alphatest_pars_fragment:KM,aomap_fragment:JM,aomap_pars_fragment:ZM,batching_pars_vertex:QM,batching_vertex:ew,begin_vertex:tw,beginnormal_vertex:nw,bsdfs:iw,iridescence_fragment:rw,bumpmap_pars_fragment:sw,clipping_planes_fragment:aw,clipping_planes_pars_fragment:ow,clipping_planes_pars_vertex:lw,clipping_planes_vertex:cw,color_fragment:uw,color_pars_fragment:dw,color_pars_vertex:hw,color_vertex:fw,common:pw,cube_uv_reflection_fragment:mw,defaultnormal_vertex:gw,displacementmap_pars_vertex:vw,displacementmap_vertex:yw,emissivemap_fragment:_w,emissivemap_pars_fragment:xw,colorspace_fragment:Sw,colorspace_pars_fragment:Mw,envmap_fragment:ww,envmap_common_pars_fragment:Ew,envmap_pars_fragment:bw,envmap_pars_vertex:Tw,envmap_physical_pars_fragment:Ow,envmap_vertex:Aw,fog_vertex:Rw,fog_pars_vertex:Cw,fog_fragment:Pw,fog_pars_fragment:Nw,gradientmap_pars_fragment:Lw,lightmap_pars_fragment:Dw,lights_lambert_fragment:Iw,lights_lambert_pars_fragment:kw,lights_pars_begin:Uw,lights_toon_fragment:Fw,lights_toon_pars_fragment:Bw,lights_phong_fragment:zw,lights_phong_pars_fragment:jw,lights_physical_fragment:Hw,lights_physical_pars_fragment:Vw,lights_fragment_begin:Gw,lights_fragment_maps:Ww,lights_fragment_end:$w,logdepthbuf_fragment:Xw,logdepthbuf_pars_fragment:qw,logdepthbuf_pars_vertex:Yw,logdepthbuf_vertex:Kw,map_fragment:Jw,map_pars_fragment:Zw,map_particle_fragment:Qw,map_particle_pars_fragment:e1,metalnessmap_fragment:t1,metalnessmap_pars_fragment:n1,morphinstance_vertex:i1,morphcolor_vertex:r1,morphnormal_vertex:s1,morphtarget_pars_vertex:a1,morphtarget_vertex:o1,normal_fragment_begin:l1,normal_fragment_maps:c1,normal_pars_fragment:u1,normal_pars_vertex:d1,normal_vertex:h1,normalmap_pars_fragment:f1,clearcoat_normal_fragment_begin:p1,clearcoat_normal_fragment_maps:m1,clearcoat_pars_fragment:g1,iridescence_pars_fragment:v1,opaque_fragment:y1,packing:_1,premultiplied_alpha_fragment:x1,project_vertex:S1,dithering_fragment:M1,dithering_pars_fragment:w1,roughnessmap_fragment:E1,roughnessmap_pars_fragment:b1,shadowmap_pars_fragment:T1,shadowmap_pars_vertex:A1,shadowmap_vertex:R1,shadowmask_pars_fragment:C1,skinbase_vertex:P1,skinning_pars_vertex:N1,skinning_vertex:L1,skinnormal_vertex:D1,specularmap_fragment:I1,specularmap_pars_fragment:k1,tonemapping_fragment:U1,tonemapping_pars_fragment:O1,transmission_fragment:F1,transmission_pars_fragment:B1,uv_pars_fragment:z1,uv_pars_vertex:j1,uv_vertex:H1,worldpos_vertex:V1,background_vert:G1,background_frag:W1,backgroundCube_vert:$1,backgroundCube_frag:X1,cube_vert:q1,cube_frag:Y1,depth_vert:K1,depth_frag:J1,distanceRGBA_vert:Z1,distanceRGBA_frag:Q1,equirect_vert:eE,equirect_frag:tE,linedashed_vert:nE,linedashed_frag:iE,meshbasic_vert:rE,meshbasic_frag:sE,meshlambert_vert:aE,meshlambert_frag:oE,meshmatcap_vert:lE,meshmatcap_frag:cE,meshnormal_vert:uE,meshnormal_frag:dE,meshphong_vert:hE,meshphong_frag:fE,meshphysical_vert:pE,meshphysical_frag:mE,meshtoon_vert:gE,meshtoon_frag:vE,points_vert:yE,points_frag:_E,shadow_vert:xE,shadow_frag:SE,sprite_vert:ME,sprite_frag:wE},De={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},qn={basic:{uniforms:Un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Et(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Un([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Un([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Et(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Un([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Un([De.points,De.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Un([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Un([De.common,De.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Un([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Un([De.sprite,De.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Un([De.common,De.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Un([De.lights,De.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};qn.physical={uniforms:Un([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const _c={r:0,b:0,g:0},xs=new Xi,EE=new zt;function bE(r,e,t,i,a,o,c){const u=new Et(0);let h=o===!0?0:1,p,g,f=null,_=0,M=null;function w(T){let C=T.isScene===!0?T.background:null;return C&&C.isTexture&&(C=(T.backgroundBlurriness>0?t:e).get(C)),C}function b(T){let C=!1;const R=w(T);R===null?y(u,h):R&&R.isColor&&(y(R,1),C=!0);const Y=r.xr.getEnvironmentBlendMode();Y==="additive"?i.buffers.color.setClear(0,0,0,1,c):Y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(T,C){const R=w(C);R&&(R.isCubeTexture||R.mapping===Zc)?(g===void 0&&(g=new Ft(new Is(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:Ba(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(Y,j,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),xs.copy(C.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),g.material.uniforms.envMap.value=R,g.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(EE.makeRotationFromEuler(xs)),g.material.toneMapped=At.getTransfer(R.colorSpace)!==kt,(f!==R||_!==R.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,f=R,_=R.version,M=r.toneMapping),g.layers.enableAll(),T.unshift(g,g.geometry,g.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new Ft(new Wo(2,2),new gr({name:"BackgroundMaterial",uniforms:Ba(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=At.getTransfer(R.colorSpace)!==kt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||_!==R.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,f=R,_=R.version,M=r.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null))}function y(T,C){T.getRGB(_c,ny(r)),i.buffers.color.setClear(_c.r,_c.g,_c.b,C,c)}return{getClearColor:function(){return u},setClearColor:function(T,C=1){u.set(T),h=C,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(T){h=T,y(u,h)},render:b,addToRenderList:S}}function TE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},a=_(null);let o=a,c=!1;function u(N,B,ue,Q,le){let pe=!1;const se=f(Q,ue,B);o!==se&&(o=se,p(o.object)),pe=M(N,Q,ue,le),pe&&w(N,Q,ue,le),le!==null&&e.update(le,r.ELEMENT_ARRAY_BUFFER),(pe||c)&&(c=!1,R(N,B,ue,Q),le!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function h(){return r.createVertexArray()}function p(N){return r.bindVertexArray(N)}function g(N){return r.deleteVertexArray(N)}function f(N,B,ue){const Q=ue.wireframe===!0;let le=i[N.id];le===void 0&&(le={},i[N.id]=le);let pe=le[B.id];pe===void 0&&(pe={},le[B.id]=pe);let se=pe[Q];return se===void 0&&(se=_(h()),pe[Q]=se),se}function _(N){const B=[],ue=[],Q=[];for(let le=0;le<t;le++)B[le]=0,ue[le]=0,Q[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ue,attributeDivisors:Q,object:N,attributes:{},index:null}}function M(N,B,ue,Q){const le=o.attributes,pe=B.attributes;let se=0;const ce=ue.getAttributes();for(const H in ce)if(ce[H].location>=0){const re=le[H];let U=pe[H];if(U===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(U=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(U=N.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;se++}return o.attributesNum!==se||o.index!==Q}function w(N,B,ue,Q){const le={},pe=B.attributes;let se=0;const ce=ue.getAttributes();for(const H in ce)if(ce[H].location>=0){let re=pe[H];re===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(re=N.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),le[H]=U,se++}o.attributes=le,o.attributesNum=se,o.index=Q}function b(){const N=o.newAttributes;for(let B=0,ue=N.length;B<ue;B++)N[B]=0}function S(N){y(N,0)}function y(N,B){const ue=o.newAttributes,Q=o.enabledAttributes,le=o.attributeDivisors;ue[N]=1,Q[N]===0&&(r.enableVertexAttribArray(N),Q[N]=1),le[N]!==B&&(r.vertexAttribDivisor(N,B),le[N]=B)}function T(){const N=o.newAttributes,B=o.enabledAttributes;for(let ue=0,Q=B.length;ue<Q;ue++)B[ue]!==N[ue]&&(r.disableVertexAttribArray(ue),B[ue]=0)}function C(N,B,ue,Q,le,pe,se){se===!0?r.vertexAttribIPointer(N,B,ue,le,pe):r.vertexAttribPointer(N,B,ue,Q,le,pe)}function R(N,B,ue,Q){b();const le=Q.attributes,pe=ue.getAttributes(),se=B.defaultAttributeValues;for(const ce in pe){const H=pe[ce];if(H.location>=0){let oe=le[ce];if(oe===void 0&&(ce==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),ce==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor)),oe!==void 0){const re=oe.normalized,U=oe.itemSize,ne=e.get(oe);if(ne===void 0)continue;const Be=ne.buffer,Z=ne.type,he=ne.bytesPerElement,be=Z===r.INT||Z===r.UNSIGNED_INT||oe.gpuType===Of;if(oe.isInterleavedBufferAttribute){const ge=oe.data,Ne=ge.stride,je=oe.offset;if(ge.isInstancedInterleavedBuffer){for(let Je=0;Je<H.locationSize;Je++)y(H.location+Je,ge.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Je=0;Je<H.locationSize;Je++)S(H.location+Je);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let Je=0;Je<H.locationSize;Je++)C(H.location+Je,U/H.locationSize,Z,re,Ne*he,(je+U/H.locationSize*Je)*he,be)}else{if(oe.isInstancedBufferAttribute){for(let ge=0;ge<H.locationSize;ge++)y(H.location+ge,oe.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ge=0;ge<H.locationSize;ge++)S(H.location+ge);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let ge=0;ge<H.locationSize;ge++)C(H.location+ge,U/H.locationSize,Z,re,U*he,U/H.locationSize*ge*he,be)}}else if(se!==void 0){const re=se[ce];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(H.location,re);break;case 3:r.vertexAttrib3fv(H.location,re);break;case 4:r.vertexAttrib4fv(H.location,re);break;default:r.vertexAttrib1fv(H.location,re)}}}}T()}function Y(){W();for(const N in i){const B=i[N];for(const ue in B){const Q=B[ue];for(const le in Q)g(Q[le].object),delete Q[le];delete B[ue]}delete i[N]}}function j(N){if(i[N.id]===void 0)return;const B=i[N.id];for(const ue in B){const Q=B[ue];for(const le in Q)g(Q[le].object),delete Q[le];delete B[ue]}delete i[N.id]}function F(N){for(const B in i){const ue=i[B];if(ue[N.id]===void 0)continue;const Q=ue[N.id];for(const le in Q)g(Q[le].object),delete Q[le];delete ue[N.id]}}function W(){D(),c=!0,o!==a&&(o=a,p(o.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:W,resetDefaultState:D,dispose:Y,releaseStatesOfGeometry:j,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:S,disableUnusedAttributes:T}}function AE(r,e,t){let i;function a(p){i=p}function o(p,g){r.drawArrays(i,p,g),t.update(g,i,1)}function c(p,g,f){f!==0&&(r.drawArraysInstanced(i,p,g,f),t.update(g,i,f))}function u(p,g,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,p,0,g,0,f);let M=0;for(let w=0;w<f;w++)M+=g[w];t.update(M,i,1)}function h(p,g,f,_){if(f===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let w=0;w<p.length;w++)c(p[w],g[w],_[w]);else{M.multiDrawArraysInstancedWEBGL(i,p,0,g,0,_,0,f);let w=0;for(let b=0;b<f;b++)w+=g[b]*_[b];t.update(w,i,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function RE(r,e,t,i){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==Ci&&i.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const W=F===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==mr&&i.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==hr&&!W)}function h(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const f=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),Y=w>0,j=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:p,logarithmicDepthBuffer:f,reverseDepthBuffer:_,maxTextures:M,maxVertexTextures:w,maxTextureSize:b,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:R,vertexTextures:Y,maxSamples:j}}function CE(r){const e=this;let t=null,i=0,a=!1,o=!1;const c=new qr,u=new gt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(f,_){const M=f.length!==0||_||i!==0||a;return a=_,i=f.length,M},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,_){t=g(f,_,0)},this.setState=function(f,_,M){const w=f.clippingPlanes,b=f.clipIntersection,S=f.clipShadows,y=r.get(f);if(!a||w===null||w.length===0||o&&!S)o?g(null):p();else{const T=o?0:i,C=T*4;let R=y.clippingState||null;h.value=R,R=g(w,_,C,M);for(let Y=0;Y!==C;++Y)R[Y]=t[Y];y.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(f,_,M,w){const b=f!==null?f.length:0;let S=null;if(b!==0){if(S=h.value,w!==!0||S===null){const y=M+b*4,T=_.matrixWorldInverse;u.getNormalMatrix(T),(S===null||S.length<y)&&(S=new Float32Array(y));for(let C=0,R=M;C!==b;++C,R+=4)c.copy(f[C]).applyMatrix4(T,u),c.normal.toArray(S,R),S[R+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function PE(r){let e=new WeakMap;function t(c,u){return u===jh?c.mapping=ka:u===Hh&&(c.mapping=Ua),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===jh||u===Hh)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new jM(h.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class ay extends iy{constructor(e=-1,t=1,i=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,c=i+e,u=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=p*this.view.offsetX,c=o+p*this.view.width,u-=g*this.view.offsetY,h=u-g*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ma=4,pv=[.125,.215,.35,.446,.526,.582],bs=20,hh=new ay,mv=new Et;let fh=null,ph=0,mh=0,gh=!1;const ws=(1+Math.sqrt(5))/2,ya=1/ws,gv=[new O(-ws,ya,0),new O(ws,ya,0),new O(-ya,0,ws),new O(ya,0,ws),new O(0,ws,-ya),new O(0,ws,ya),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class _f{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){fh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,a,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,ph,mh),this._renderer.xr.enabled=gh,e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ka||e.mapping===Ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vi,minFilter:Vi,generateMipmaps:!1,type:Go,format:Ci,colorSpace:za,depthBuffer:!1},a=vv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vv(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NE(o)),this._blurMaterial=LE(o,e,t)}return a}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,hh)}_sceneToCubeUV(e,t,i,a){const u=new ii(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,f=g.autoClear,_=g.toneMapping;g.getClearColor(mv),g.toneMapping=Zr,g.autoClear=!1;const M=new eu({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),w=new Ft(new Is,M);let b=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,b=!0):(M.color.copy(mv),b=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(u.up.set(0,h[y],0),u.lookAt(p[y],0,0)):T===1?(u.up.set(0,0,h[y]),u.lookAt(0,p[y],0)):(u.up.set(0,h[y],0),u.lookAt(0,0,p[y]));const C=this._cubeSize;xc(a,T*C,y>2?C:0,C,C),g.setRenderTarget(a),b&&g.render(w,u),g.render(e,u)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=_,g.autoClear=f,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===ka||e.mapping===Ua;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=_v()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yv());const o=a?this._cubemapMaterial:this._equirectMaterial,c=new Ft(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const h=this._cubeSize;xc(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,hh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=gv[(a-o-1)%gv.length];this._blur(e,o-1,o,c,u)}t.autoClear=i}_blur(e,t,i,a,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",o),this._halfBlur(c,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,c,u){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,f=new Ft(this._lodPlanes[a],p),_=p.uniforms,M=this._sizeLods[i]-1,w=isFinite(o)?Math.PI/(2*M):2*Math.PI/(2*bs-1),b=o/w,S=isFinite(o)?1+Math.floor(g*b):bs;S>bs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${bs}`);const y=[];let T=0;for(let F=0;F<bs;++F){const W=F/b,D=Math.exp(-W*W/2);y.push(D),F===0?T+=D:F<S&&(T+=2*D)}for(let F=0;F<y.length;F++)y[F]=y[F]/T;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:C}=this;_.dTheta.value=w,_.mipInt.value=C-i;const R=this._sizeLods[a],Y=3*R*(a>C-Ma?a-C+Ma:0),j=4*(this._cubeSize-R);xc(t,Y,j,3*R,2*R),h.setRenderTarget(t),h.render(f,hh)}}function NE(r){const e=[],t=[],i=[];let a=r;const o=r-Ma+1+pv.length;for(let c=0;c<o;c++){const u=Math.pow(2,a);t.push(u);let h=1/u;c>r-Ma?h=pv[c-r+Ma-1]:c===0&&(h=0),i.push(h);const p=1/(u-2),g=-p,f=1+p,_=[g,g,f,g,f,f,g,g,f,f,g,f],M=6,w=6,b=3,S=2,y=1,T=new Float32Array(b*w*M),C=new Float32Array(S*w*M),R=new Float32Array(y*w*M);for(let j=0;j<M;j++){const F=j%3*2/3-1,W=j>2?0:-1,D=[F,W,0,F+2/3,W,0,F+2/3,W+1,0,F,W,0,F+2/3,W+1,0,F,W+1,0];T.set(D,b*w*j),C.set(_,S*w*j);const N=[j,j,j,j,j,j];R.set(N,y*w*j)}const Y=new ri;Y.setAttribute("position",new Ni(T,b)),Y.setAttribute("uv",new Ni(C,S)),Y.setAttribute("faceIndex",new Ni(R,y)),e.push(Y),a>Ma&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vv(r,e,t){const i=new Ns(r,e,t);return i.texture.mapping=Zc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xc(r,e,t,i,a){r.viewport.set(e,t,i,a),r.scissor.set(e,t,i,a)}function LE(r,e,t){const i=new Float32Array(bs),a=new O(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function yv(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function _v(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function Yf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DE(r){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const h=u.mapping,p=h===jh||h===Hh,g=h===ka||h===Ua;if(p||g){let f=e.get(u);const _=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return t===null&&(t=new _f(r)),f=p?t.fromEquirectangular(u,f):t.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{const M=u.image;return p&&M&&M.height>0||g&&M&&a(M)?(t===null&&(t=new _f(r)),f=p?t.fromEquirectangular(u):t.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",o),f.texture):null}}}return u}function a(u){let h=0;const p=6;for(let g=0;g<p;g++)u[g]!==void 0&&h++;return h===p}function o(u){const h=u.target;h.removeEventListener("dispose",o);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function IE(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Co("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function kE(r,e,t,i){const a={},o=new WeakMap;function c(f){const _=f.target;_.index!==null&&e.remove(_.index);for(const w in _.attributes)e.remove(_.attributes[w]);for(const w in _.morphAttributes){const b=_.morphAttributes[w];for(let S=0,y=b.length;S<y;S++)e.remove(b[S])}_.removeEventListener("dispose",c),delete a[_.id];const M=o.get(_);M&&(e.remove(M),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(f,_){return a[_.id]===!0||(_.addEventListener("dispose",c),a[_.id]=!0,t.memory.geometries++),_}function h(f){const _=f.attributes;for(const w in _)e.update(_[w],r.ARRAY_BUFFER);const M=f.morphAttributes;for(const w in M){const b=M[w];for(let S=0,y=b.length;S<y;S++)e.update(b[S],r.ARRAY_BUFFER)}}function p(f){const _=[],M=f.index,w=f.attributes.position;let b=0;if(M!==null){const T=M.array;b=M.version;for(let C=0,R=T.length;C<R;C+=3){const Y=T[C+0],j=T[C+1],F=T[C+2];_.push(Y,j,j,F,F,Y)}}else if(w!==void 0){const T=w.array;b=w.version;for(let C=0,R=T.length/3-1;C<R;C+=3){const Y=C+0,j=C+1,F=C+2;_.push(Y,j,j,F,F,Y)}}else return;const S=new(K0(_)?ty:ey)(_,1);S.version=b;const y=o.get(f);y&&e.remove(y),o.set(f,S)}function g(f){const _=o.get(f);if(_){const M=f.index;M!==null&&_.version<M.version&&p(f)}else p(f);return o.get(f)}return{get:u,update:h,getWireframeAttribute:g}}function UE(r,e,t){let i;function a(_){i=_}let o,c;function u(_){o=_.type,c=_.bytesPerElement}function h(_,M){r.drawElements(i,M,o,_*c),t.update(M,i,1)}function p(_,M,w){w!==0&&(r.drawElementsInstanced(i,M,o,_*c,w),t.update(M,i,w))}function g(_,M,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,M,0,o,_,0,w);let S=0;for(let y=0;y<w;y++)S+=M[y];t.update(S,i,1)}function f(_,M,w,b){if(w===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)p(_[y]/c,M[y],b[y]);else{S.multiDrawElementsInstancedWEBGL(i,M,0,o,_,0,b,0,w);let y=0;for(let T=0;T<w;T++)y+=M[T]*b[T];t.update(y,i,1)}}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=f}function OE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=u*(o/3);break;case r.LINES:t.lines+=u*(o/2);break;case r.LINE_STRIP:t.lines+=u*(o-1);break;case r.LINE_LOOP:t.lines+=u*o;break;case r.POINTS:t.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function FE(r,e,t){const i=new WeakMap,a=new Rt;function o(c,u,h){const p=c.morphTargetInfluences,g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=g!==void 0?g.length:0;let _=i.get(u);if(_===void 0||_.count!==f){let N=function(){W.dispose(),i.delete(u),u.removeEventListener("dispose",N)};var M=N;_!==void 0&&_.texture.dispose();const w=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let R=0;w===!0&&(R=1),b===!0&&(R=2),S===!0&&(R=3);let Y=u.attributes.position.count*R,j=1;Y>e.maxTextureSize&&(j=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const F=new Float32Array(Y*j*4*f),W=new Z0(F,Y,j,f);W.type=hr,W.needsUpdate=!0;const D=R*4;for(let B=0;B<f;B++){const ue=y[B],Q=T[B],le=C[B],pe=Y*j*4*B;for(let se=0;se<ue.count;se++){const ce=se*D;w===!0&&(a.fromBufferAttribute(ue,se),F[pe+ce+0]=a.x,F[pe+ce+1]=a.y,F[pe+ce+2]=a.z,F[pe+ce+3]=0),b===!0&&(a.fromBufferAttribute(Q,se),F[pe+ce+4]=a.x,F[pe+ce+5]=a.y,F[pe+ce+6]=a.z,F[pe+ce+7]=0),S===!0&&(a.fromBufferAttribute(le,se),F[pe+ce+8]=a.x,F[pe+ce+9]=a.y,F[pe+ce+10]=a.z,F[pe+ce+11]=le.itemSize===4?a.w:1)}}_={count:f,texture:W,size:new Pe(Y,j)},i.set(u,_),u.addEventListener("dispose",N)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let w=0;for(let S=0;S<p.length;S++)w+=p[S];const b=u.morphTargetsRelative?1:1-w;h.getUniforms().setValue(r,"morphTargetBaseInfluence",b),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:o}}function BE(r,e,t,i){let a=new WeakMap;function o(h){const p=i.render.frame,g=h.geometry,f=e.get(h,g);if(a.get(f)!==p&&(e.update(f),a.set(f,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),a.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return f}function c(){a=new WeakMap}function u(h){const p=h.target;p.removeEventListener("dispose",u),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:o,dispose:c}}class oy extends Yn{constructor(e,t,i,a,o,c,u,h,p,g=Ra){if(g!==Ra&&g!==Fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&g===Ra&&(i=Ps),i===void 0&&g===Fa&&(i=Oa),super(null,a,o,c,u,h,g,i,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Pi,this.minFilter=h!==void 0?h:Pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ly=new Yn,xv=new oy(1,1),cy=new Z0,uy=new TM,dy=new ry,Sv=[],Mv=[],wv=new Float32Array(16),Ev=new Float32Array(9),bv=new Float32Array(4);function Va(r,e,t){const i=r[0];if(i<=0||i>0)return r;const a=e*t;let o=Sv[a];if(o===void 0&&(o=new Float32Array(a),Sv[a]=o),e!==0){i.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,r[c].toArray(o,u)}return o}function on(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ln(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function tu(r,e){let t=Mv[e];t===void 0&&(t=new Int32Array(e),Mv[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function zE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function jE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2fv(this.addr,e),ln(t,e)}}function HE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;r.uniform3fv(this.addr,e),ln(t,e)}}function VE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4fv(this.addr,e),ln(t,e)}}function GE(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,i))return;bv.set(i),r.uniformMatrix2fv(this.addr,!1,bv),ln(t,i)}}function WE(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,i))return;Ev.set(i),r.uniformMatrix3fv(this.addr,!1,Ev),ln(t,i)}}function $E(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,i))return;wv.set(i),r.uniformMatrix4fv(this.addr,!1,wv),ln(t,i)}}function XE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function qE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2iv(this.addr,e),ln(t,e)}}function YE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3iv(this.addr,e),ln(t,e)}}function KE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4iv(this.addr,e),ln(t,e)}}function JE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ZE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2uiv(this.addr,e),ln(t,e)}}function QE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3uiv(this.addr,e),ln(t,e)}}function eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4uiv(this.addr,e),ln(t,e)}}function tb(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a);let o;this.type===r.SAMPLER_2D_SHADOW?(xv.compareFunction=Y0,o=xv):o=ly,t.setTexture2D(e||o,a)}function nb(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||uy,a)}function ib(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||dy,a)}function rb(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||cy,a)}function sb(r){switch(r){case 5126:return zE;case 35664:return jE;case 35665:return HE;case 35666:return VE;case 35674:return GE;case 35675:return WE;case 35676:return $E;case 5124:case 35670:return XE;case 35667:case 35671:return qE;case 35668:case 35672:return YE;case 35669:case 35673:return KE;case 5125:return JE;case 36294:return ZE;case 36295:return QE;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return rb}}function ab(r,e){r.uniform1fv(this.addr,e)}function ob(r,e){const t=Va(e,this.size,2);r.uniform2fv(this.addr,t)}function lb(r,e){const t=Va(e,this.size,3);r.uniform3fv(this.addr,t)}function cb(r,e){const t=Va(e,this.size,4);r.uniform4fv(this.addr,t)}function ub(r,e){const t=Va(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function db(r,e){const t=Va(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function hb(r,e){const t=Va(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function fb(r,e){r.uniform1iv(this.addr,e)}function pb(r,e){r.uniform2iv(this.addr,e)}function mb(r,e){r.uniform3iv(this.addr,e)}function gb(r,e){r.uniform4iv(this.addr,e)}function vb(r,e){r.uniform1uiv(this.addr,e)}function yb(r,e){r.uniform2uiv(this.addr,e)}function _b(r,e){r.uniform3uiv(this.addr,e)}function xb(r,e){r.uniform4uiv(this.addr,e)}function Sb(r,e,t){const i=this.cache,a=e.length,o=tu(t,a);on(i,o)||(r.uniform1iv(this.addr,o),ln(i,o));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||ly,o[c])}function Mb(r,e,t){const i=this.cache,a=e.length,o=tu(t,a);on(i,o)||(r.uniform1iv(this.addr,o),ln(i,o));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||uy,o[c])}function wb(r,e,t){const i=this.cache,a=e.length,o=tu(t,a);on(i,o)||(r.uniform1iv(this.addr,o),ln(i,o));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||dy,o[c])}function Eb(r,e,t){const i=this.cache,a=e.length,o=tu(t,a);on(i,o)||(r.uniform1iv(this.addr,o),ln(i,o));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||cy,o[c])}function bb(r){switch(r){case 5126:return ab;case 35664:return ob;case 35665:return lb;case 35666:return cb;case 35674:return ub;case 35675:return db;case 35676:return hb;case 5124:case 35670:return fb;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return vb;case 36294:return yb;case 36295:return _b;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Eb}}class Tb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sb(t.type)}}class Ab{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bb(t.type)}}class Rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const u=a[o];u.setValue(e,t[u.id],i)}}}const vh=/(\w+)(\])?(\[|\.)?/g;function Tv(r,e){r.seq.push(e),r.map[e.id]=e}function Cb(r,e,t){const i=r.name,a=i.length;for(vh.lastIndex=0;;){const o=vh.exec(i),c=vh.lastIndex;let u=o[1];const h=o[2]==="]",p=o[3];if(h&&(u=u|0),p===void 0||p==="["&&c+2===a){Tv(t,p===void 0?new Tb(u,r,e):new Ab(u,r,e));break}else{let f=t.map[u];f===void 0&&(f=new Rb(u),Tv(t,f)),t=f}}}class Bc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Cb(o,c,this)}}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,c=t.length;o!==c;++o){const u=t[o],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function Av(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Pb=37297;let Nb=0;function Lb(r,e){const t=r.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=a;c<o;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Rv=new gt;function Db(r){At._getMatrix(Rv,At.workingColorSpace,r);const e=`mat3( ${Rv.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(r)){case Qc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Cv(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+Lb(r.getShaderSource(e),c)}else return a}function Ib(r,e){const t=Db(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kb(r,e){let t;switch(e){case BS:t="Linear";break;case zS:t="Reinhard";break;case jS:t="Cineon";break;case U0:t="ACESFilmic";break;case VS:t="AgX";break;case GS:t="Neutral";break;case HS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sc=new O;function Ub(){At.getLuminanceCoefficients(Sc);const r=Sc.x.toFixed(4),e=Sc.y.toFixed(4),t=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ob(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function Fb(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Bb(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=r.getActiveAttrib(e,a),c=o.name;let u=1;o.type===r.FLOAT_MAT2&&(u=2),o.type===r.FLOAT_MAT3&&(u=3),o.type===r.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:r.getAttribLocation(e,c),locationSize:u}}return t}function Po(r){return r!==""}function Pv(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(r){return r.replace(zb,Hb)}const jb=new Map;function Hb(r,e){let t=vt[e];if(t===void 0){const i=jb.get(e);if(i!==void 0)t=vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xf(t)}const Vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lv(r){return r.replace(Vb,Gb)}function Gb(r,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Dv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===D0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===I0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===dr&&(e="SHADOWMAP_TYPE_VSM"),e}function $b(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ka:case Ua:e="ENVMAP_TYPE_CUBE";break;case Zc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ua:e="ENVMAP_MODE_REFRACTION";break}return e}function qb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case k0:e="ENVMAP_BLENDING_MULTIPLY";break;case OS:e="ENVMAP_BLENDING_MIX";break;case FS:e="ENVMAP_BLENDING_ADD";break}return e}function Yb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Kb(r,e,t,i){const a=r.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=Wb(t),p=$b(t),g=Xb(t),f=qb(t),_=Yb(t),M=Ob(t),w=Fb(o),b=a.createProgram();let S,y,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Po).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Po).join(`
`),y.length>0&&(y+=`
`)):(S=[Dv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),y=[Dv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+f:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zr?"#define TONE_MAPPING":"",t.toneMapping!==Zr?vt.tonemapping_pars_fragment:"",t.toneMapping!==Zr?kb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,Ib("linearToOutputTexel",t.outputColorSpace),Ub(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),c=xf(c),c=Pv(c,t),c=Nv(c,t),u=xf(u),u=Pv(u,t),u=Nv(u,t),c=Lv(c),u=Lv(u),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===$g?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const C=T+S+c,R=T+y+u,Y=Av(a,a.VERTEX_SHADER,C),j=Av(a,a.FRAGMENT_SHADER,R);a.attachShader(b,Y),a.attachShader(b,j),t.index0AttributeName!==void 0?a.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function F(B){if(r.debug.checkShaderErrors){const ue=a.getProgramInfoLog(b).trim(),Q=a.getShaderInfoLog(Y).trim(),le=a.getShaderInfoLog(j).trim();let pe=!0,se=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(pe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,b,Y,j);else{const ce=Cv(a,Y,"vertex"),H=Cv(a,j,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ue+`
`+ce+`
`+H)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(Q===""||le==="")&&(se=!1);se&&(B.diagnostics={runnable:pe,programLog:ue,vertexShader:{log:Q,prefix:S},fragmentShader:{log:le,prefix:y}})}a.deleteShader(Y),a.deleteShader(j),W=new Bc(a,b),D=Bb(a,b)}let W;this.getUniforms=function(){return W===void 0&&F(this),W};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=a.getProgramParameter(b,Pb)),N},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=Y,this.fragmentShader=j,this}let Jb=0;class Zb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Qb(e),t.set(e,i)),i}}class Qb{constructor(e){this.id=Jb++,this.code=e,this.usedTimes=0}}function eT(r,e,t,i,a,o,c){const u=new $f,h=new Zb,p=new Set,g=[],f=a.logarithmicDepthBuffer,_=a.vertexTextures;let M=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,N,B,ue,Q){const le=ue.fog,pe=Q.geometry,se=D.isMeshStandardMaterial?ue.environment:null,ce=(D.isMeshStandardMaterial?t:e).get(D.envMap||se),H=ce&&ce.mapping===Zc?ce.image.height:null,oe=w[D.type];D.precision!==null&&(M=a.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const re=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,U=re!==void 0?re.length:0;let ne=0;pe.morphAttributes.position!==void 0&&(ne=1),pe.morphAttributes.normal!==void 0&&(ne=2),pe.morphAttributes.color!==void 0&&(ne=3);let Be,Z,he,be;if(oe){const bt=qn[oe];Be=bt.vertexShader,Z=bt.fragmentShader}else Be=D.vertexShader,Z=D.fragmentShader,h.update(D),he=h.getVertexShaderID(D),be=h.getFragmentShaderID(D);const ge=r.getRenderTarget(),Ne=r.state.buffers.depth.getReversed(),je=Q.isInstancedMesh===!0,Je=Q.isBatchedMesh===!0,yt=!!D.map,ve=!!D.matcap,Ae=!!ce,k=!!D.aoMap,Ze=!!D.lightMap,Me=!!D.bumpMap,He=!!D.normalMap,Le=!!D.displacementMap,it=!!D.emissiveMap,Oe=!!D.metalnessMap,L=!!D.roughnessMap,A=D.anisotropy>0,K=D.clearcoat>0,de=D.dispersion>0,ye=D.iridescence>0,fe=D.sheen>0,qe=D.transmission>0,Ie=A&&!!D.anisotropyMap,Ve=K&&!!D.clearcoatMap,pt=K&&!!D.clearcoatNormalMap,we=K&&!!D.clearcoatRoughnessMap,We=ye&&!!D.iridescenceMap,at=ye&&!!D.iridescenceThicknessMap,ot=fe&&!!D.sheenColorMap,$e=fe&&!!D.sheenRoughnessMap,_t=!!D.specularMap,ht=!!D.specularColorMap,Lt=!!D.specularIntensityMap,G=qe&&!!D.transmissionMap,ke=qe&&!!D.thicknessMap,ae=!!D.gradientMap,me=!!D.alphaMap,Fe=D.alphaTest>0,Ue=!!D.alphaHash,ft=!!D.extensions;let jt=Zr;D.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(jt=r.toneMapping);const Qt={shaderID:oe,shaderType:D.type,shaderName:D.name,vertexShader:Be,fragmentShader:Z,defines:D.defines,customVertexShaderID:he,customFragmentShaderID:be,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Je,batchingColor:Je&&Q._colorsTexture!==null,instancing:je,instancingColor:je&&Q.instanceColor!==null,instancingMorph:je&&Q.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:za,alphaToCoverage:!!D.alphaToCoverage,map:yt,matcap:ve,envMap:Ae,envMapMode:Ae&&ce.mapping,envMapCubeUVHeight:H,aoMap:k,lightMap:Ze,bumpMap:Me,normalMap:He,displacementMap:_&&Le,emissiveMap:it,normalMapObjectSpace:He&&D.normalMapType===qS,normalMapTangentSpace:He&&D.normalMapType===q0,metalnessMap:Oe,roughnessMap:L,anisotropy:A,anisotropyMap:Ie,clearcoat:K,clearcoatMap:Ve,clearcoatNormalMap:pt,clearcoatRoughnessMap:we,dispersion:de,iridescence:ye,iridescenceMap:We,iridescenceThicknessMap:at,sheen:fe,sheenColorMap:ot,sheenRoughnessMap:$e,specularMap:_t,specularColorMap:ht,specularIntensityMap:Lt,transmission:qe,transmissionMap:G,thicknessMap:ke,gradientMap:ae,opaque:D.transparent===!1&&D.blending===Aa&&D.alphaToCoverage===!1,alphaMap:me,alphaTest:Fe,alphaHash:Ue,combine:D.combine,mapUv:yt&&b(D.map.channel),aoMapUv:k&&b(D.aoMap.channel),lightMapUv:Ze&&b(D.lightMap.channel),bumpMapUv:Me&&b(D.bumpMap.channel),normalMapUv:He&&b(D.normalMap.channel),displacementMapUv:Le&&b(D.displacementMap.channel),emissiveMapUv:it&&b(D.emissiveMap.channel),metalnessMapUv:Oe&&b(D.metalnessMap.channel),roughnessMapUv:L&&b(D.roughnessMap.channel),anisotropyMapUv:Ie&&b(D.anisotropyMap.channel),clearcoatMapUv:Ve&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:pt&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:at&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:$e&&b(D.sheenRoughnessMap.channel),specularMapUv:_t&&b(D.specularMap.channel),specularColorMapUv:ht&&b(D.specularColorMap.channel),specularIntensityMapUv:Lt&&b(D.specularIntensityMap.channel),transmissionMapUv:G&&b(D.transmissionMap.channel),thicknessMapUv:ke&&b(D.thicknessMap.channel),alphaMapUv:me&&b(D.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(He||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!pe.attributes.uv&&(yt||me),fog:!!le,useFog:D.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ne,skinning:Q.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:jt,decodeVideoTexture:yt&&D.map.isVideoTexture===!0&&At.getTransfer(D.map.colorSpace)===kt,decodeVideoTextureEmissive:it&&D.emissiveMap.isVideoTexture===!0&&At.getTransfer(D.emissiveMap.colorSpace)===kt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===zi,flipSided:D.side===On,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ft&&D.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&D.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Qt.vertexUv1s=p.has(1),Qt.vertexUv2s=p.has(2),Qt.vertexUv3s=p.has(3),p.clear(),Qt}function y(D){const N=[];if(D.shaderID?N.push(D.shaderID):(N.push(D.customVertexShaderID),N.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)N.push(B),N.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(T(N,D),C(N,D),N.push(r.outputColorSpace)),N.push(D.customProgramCacheKey),N.join()}function T(D,N){D.push(N.precision),D.push(N.outputColorSpace),D.push(N.envMapMode),D.push(N.envMapCubeUVHeight),D.push(N.mapUv),D.push(N.alphaMapUv),D.push(N.lightMapUv),D.push(N.aoMapUv),D.push(N.bumpMapUv),D.push(N.normalMapUv),D.push(N.displacementMapUv),D.push(N.emissiveMapUv),D.push(N.metalnessMapUv),D.push(N.roughnessMapUv),D.push(N.anisotropyMapUv),D.push(N.clearcoatMapUv),D.push(N.clearcoatNormalMapUv),D.push(N.clearcoatRoughnessMapUv),D.push(N.iridescenceMapUv),D.push(N.iridescenceThicknessMapUv),D.push(N.sheenColorMapUv),D.push(N.sheenRoughnessMapUv),D.push(N.specularMapUv),D.push(N.specularColorMapUv),D.push(N.specularIntensityMapUv),D.push(N.transmissionMapUv),D.push(N.thicknessMapUv),D.push(N.combine),D.push(N.fogExp2),D.push(N.sizeAttenuation),D.push(N.morphTargetsCount),D.push(N.morphAttributeCount),D.push(N.numDirLights),D.push(N.numPointLights),D.push(N.numSpotLights),D.push(N.numSpotLightMaps),D.push(N.numHemiLights),D.push(N.numRectAreaLights),D.push(N.numDirLightShadows),D.push(N.numPointLightShadows),D.push(N.numSpotLightShadows),D.push(N.numSpotLightShadowsWithMaps),D.push(N.numLightProbes),D.push(N.shadowMapType),D.push(N.toneMapping),D.push(N.numClippingPlanes),D.push(N.numClipIntersection),D.push(N.depthPacking)}function C(D,N){u.disableAll(),N.supportsVertexTextures&&u.enable(0),N.instancing&&u.enable(1),N.instancingColor&&u.enable(2),N.instancingMorph&&u.enable(3),N.matcap&&u.enable(4),N.envMap&&u.enable(5),N.normalMapObjectSpace&&u.enable(6),N.normalMapTangentSpace&&u.enable(7),N.clearcoat&&u.enable(8),N.iridescence&&u.enable(9),N.alphaTest&&u.enable(10),N.vertexColors&&u.enable(11),N.vertexAlphas&&u.enable(12),N.vertexUv1s&&u.enable(13),N.vertexUv2s&&u.enable(14),N.vertexUv3s&&u.enable(15),N.vertexTangents&&u.enable(16),N.anisotropy&&u.enable(17),N.alphaHash&&u.enable(18),N.batching&&u.enable(19),N.dispersion&&u.enable(20),N.batchingColor&&u.enable(21),D.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reverseDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),D.push(u.mask)}function R(D){const N=w[D.type];let B;if(N){const ue=qn[N];B=Xf.clone(ue.uniforms)}else B=D.uniforms;return B}function Y(D,N){let B;for(let ue=0,Q=g.length;ue<Q;ue++){const le=g[ue];if(le.cacheKey===N){B=le,++B.usedTimes;break}}return B===void 0&&(B=new Kb(r,N,D,o),g.push(B)),B}function j(D){if(--D.usedTimes===0){const N=g.indexOf(D);g[N]=g[g.length-1],g.pop(),D.destroy()}}function F(D){h.remove(D)}function W(){h.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:R,acquireProgram:Y,releaseProgram:j,releaseShaderCache:F,programs:g,dispose:W}}function tT(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let u=r.get(c);return u===void 0&&(u={},r.set(c,u)),u}function i(c){r.delete(c)}function a(c,u,h){r.get(c)[u]=h}function o(){r=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:o}}function nT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Iv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function kv(){const r=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function c(f,_,M,w,b,S){let y=r[e];return y===void 0?(y={id:f.id,object:f,geometry:_,material:M,groupOrder:w,renderOrder:f.renderOrder,z:b,group:S},r[e]=y):(y.id=f.id,y.object=f,y.geometry=_,y.material=M,y.groupOrder=w,y.renderOrder=f.renderOrder,y.z=b,y.group=S),e++,y}function u(f,_,M,w,b,S){const y=c(f,_,M,w,b,S);M.transmission>0?i.push(y):M.transparent===!0?a.push(y):t.push(y)}function h(f,_,M,w,b,S){const y=c(f,_,M,w,b,S);M.transmission>0?i.unshift(y):M.transparent===!0?a.unshift(y):t.unshift(y)}function p(f,_){t.length>1&&t.sort(f||nT),i.length>1&&i.sort(_||Iv),a.length>1&&a.sort(_||Iv)}function g(){for(let f=e,_=r.length;f<_;f++){const M=r[f];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:u,unshift:h,finish:g,sort:p}}function iT(){let r=new WeakMap;function e(i,a){const o=r.get(i);let c;return o===void 0?(c=new kv,r.set(i,[c])):a>=o.length?(c=new kv,o.push(c)):c=o[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function rT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Et};break;case"SpotLight":t={position:new O,direction:new O,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function sT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let aT=0;function oT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lT(r){const e=new rT,t=sT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new O);const a=new O,o=new zt,c=new zt;function u(p){let g=0,f=0,_=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let M=0,w=0,b=0,S=0,y=0,T=0,C=0,R=0,Y=0,j=0,F=0;p.sort(oT);for(let D=0,N=p.length;D<N;D++){const B=p[D],ue=B.color,Q=B.intensity,le=B.distance,pe=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=ue.r*Q,f+=ue.g*Q,_+=ue.b*Q;else if(B.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(B.sh.coefficients[se],Q);F++}else if(B.isDirectionalLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ce=B.shadow,H=t.get(B);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,i.directionalShadow[M]=H,i.directionalShadowMap[M]=pe,i.directionalShadowMatrix[M]=B.shadow.matrix,T++}i.directional[M]=se,M++}else if(B.isSpotLight){const se=e.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(ue).multiplyScalar(Q),se.distance=le,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,i.spot[b]=se;const ce=B.shadow;if(B.map&&(i.spotLightMap[Y]=B.map,Y++,ce.updateMatrices(B),B.castShadow&&j++),i.spotLightMatrix[b]=ce.matrix,B.castShadow){const H=t.get(B);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,i.spotShadow[b]=H,i.spotShadowMap[b]=pe,R++}b++}else if(B.isRectAreaLight){const se=e.get(B);se.color.copy(ue).multiplyScalar(Q),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),i.rectArea[S]=se,S++}else if(B.isPointLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),se.distance=B.distance,se.decay=B.decay,B.castShadow){const ce=B.shadow,H=t.get(B);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,H.shadowCameraNear=ce.camera.near,H.shadowCameraFar=ce.camera.far,i.pointShadow[w]=H,i.pointShadowMap[w]=pe,i.pointShadowMatrix[w]=B.shadow.matrix,C++}i.point[w]=se,w++}else if(B.isHemisphereLight){const se=e.get(B);se.skyColor.copy(B.color).multiplyScalar(Q),se.groundColor.copy(B.groundColor).multiplyScalar(Q),i.hemi[y]=se,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=f,i.ambient[2]=_;const W=i.hash;(W.directionalLength!==M||W.pointLength!==w||W.spotLength!==b||W.rectAreaLength!==S||W.hemiLength!==y||W.numDirectionalShadows!==T||W.numPointShadows!==C||W.numSpotShadows!==R||W.numSpotMaps!==Y||W.numLightProbes!==F)&&(i.directional.length=M,i.spot.length=b,i.rectArea.length=S,i.point.length=w,i.hemi.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=R+Y-j,i.spotLightMap.length=Y,i.numSpotLightShadowsWithMaps=j,i.numLightProbes=F,W.directionalLength=M,W.pointLength=w,W.spotLength=b,W.rectAreaLength=S,W.hemiLength=y,W.numDirectionalShadows=T,W.numPointShadows=C,W.numSpotShadows=R,W.numSpotMaps=Y,W.numLightProbes=F,i.version=aT++)}function h(p,g){let f=0,_=0,M=0,w=0,b=0;const S=g.matrixWorldInverse;for(let y=0,T=p.length;y<T;y++){const C=p[y];if(C.isDirectionalLight){const R=i.directional[f];R.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(S),f++}else if(C.isSpotLight){const R=i.spot[M];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(S),M++}else if(C.isRectAreaLight){const R=i.rectArea[w];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(S),c.identity(),o.copy(C.matrixWorld),o.premultiply(S),c.extractRotation(o),R.halfWidth.set(C.width*.5,0,0),R.halfHeight.set(0,C.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),w++}else if(C.isPointLight){const R=i.point[_];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(S),_++}else if(C.isHemisphereLight){const R=i.hemi[b];R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(S),b++}}}return{setup:u,setupView:h,state:i}}function Uv(r){const e=new lT(r),t=[],i=[];function a(g){p.camera=g,t.length=0,i.length=0}function o(g){t.push(g)}function c(g){i.push(g)}function u(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:c}}function cT(r){let e=new WeakMap;function t(a,o=0){const c=e.get(a);let u;return c===void 0?(u=new Uv(r),e.set(a,[u])):o>=c.length?(u=new Uv(r),c.push(u)):u=c[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}class uT extends Ha{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$S,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dT extends Ha{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pT(r,e,t){let i=new qf;const a=new Pe,o=new Pe,c=new Rt,u=new uT({depthPacking:XS}),h=new dT,p={},g=t.maxTextureSize,f={[Qr]:On,[On]:Qr,[zi]:zi},_=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:hT,fragmentShader:fT}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const w=new ri;w.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ft(w,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D0;let y=this.type;this.render=function(j,F,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||j.length===0)return;const D=r.getRenderTarget(),N=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),ue=r.state;ue.setBlending(Jr),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const Q=y!==dr&&this.type===dr,le=y===dr&&this.type!==dr;for(let pe=0,se=j.length;pe<se;pe++){const ce=j[pe],H=ce.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const oe=H.getFrameExtents();if(a.multiply(oe),o.copy(H.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(o.x=Math.floor(g/oe.x),a.x=o.x*oe.x,H.mapSize.x=o.x),a.y>g&&(o.y=Math.floor(g/oe.y),a.y=o.y*oe.y,H.mapSize.y=o.y)),H.map===null||Q===!0||le===!0){const U=this.type!==dr?{minFilter:Pi,magFilter:Pi}:{};H.map!==null&&H.map.dispose(),H.map=new Ns(a.x,a.y,U),H.map.texture.name=ce.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const re=H.getViewportCount();for(let U=0;U<re;U++){const ne=H.getViewport(U);c.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),ue.viewport(c),H.updateMatrices(ce,U),i=H.getFrustum(),R(F,W,H.camera,ce,this.type)}H.isPointLightShadow!==!0&&this.type===dr&&T(H,W),H.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(D,N,B)};function T(j,F){const W=e.update(b);_.defines.VSM_SAMPLES!==j.blurSamples&&(_.defines.VSM_SAMPLES=j.blurSamples,M.defines.VSM_SAMPLES=j.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),j.mapPass===null&&(j.mapPass=new Ns(a.x,a.y)),_.uniforms.shadow_pass.value=j.map.texture,_.uniforms.resolution.value=j.mapSize,_.uniforms.radius.value=j.radius,r.setRenderTarget(j.mapPass),r.clear(),r.renderBufferDirect(F,null,W,_,b,null),M.uniforms.shadow_pass.value=j.mapPass.texture,M.uniforms.resolution.value=j.mapSize,M.uniforms.radius.value=j.radius,r.setRenderTarget(j.map),r.clear(),r.renderBufferDirect(F,null,W,M,b,null)}function C(j,F,W,D){let N=null;const B=W.isPointLight===!0?j.customDistanceMaterial:j.customDepthMaterial;if(B!==void 0)N=B;else if(N=W.isPointLight===!0?h:u,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ue=N.uuid,Q=F.uuid;let le=p[ue];le===void 0&&(le={},p[ue]=le);let pe=le[Q];pe===void 0&&(pe=N.clone(),le[Q]=pe,F.addEventListener("dispose",Y)),N=pe}if(N.visible=F.visible,N.wireframe=F.wireframe,D===dr?N.side=F.shadowSide!==null?F.shadowSide:F.side:N.side=F.shadowSide!==null?F.shadowSide:f[F.side],N.alphaMap=F.alphaMap,N.alphaTest=F.alphaTest,N.map=F.map,N.clipShadows=F.clipShadows,N.clippingPlanes=F.clippingPlanes,N.clipIntersection=F.clipIntersection,N.displacementMap=F.displacementMap,N.displacementScale=F.displacementScale,N.displacementBias=F.displacementBias,N.wireframeLinewidth=F.wireframeLinewidth,N.linewidth=F.linewidth,W.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const ue=r.properties.get(N);ue.light=W}return N}function R(j,F,W,D,N){if(j.visible===!1)return;if(j.layers.test(F.layers)&&(j.isMesh||j.isLine||j.isPoints)&&(j.castShadow||j.receiveShadow&&N===dr)&&(!j.frustumCulled||i.intersectsObject(j))){j.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,j.matrixWorld);const Q=e.update(j),le=j.material;if(Array.isArray(le)){const pe=Q.groups;for(let se=0,ce=pe.length;se<ce;se++){const H=pe[se],oe=le[H.materialIndex];if(oe&&oe.visible){const re=C(j,oe,D,N);j.onBeforeShadow(r,j,F,W,Q,re,H),r.renderBufferDirect(W,null,Q,re,j,H),j.onAfterShadow(r,j,F,W,Q,re,H)}}}else if(le.visible){const pe=C(j,le,D,N);j.onBeforeShadow(r,j,F,W,Q,pe,null),r.renderBufferDirect(W,null,Q,pe,j,null),j.onAfterShadow(r,j,F,W,Q,pe,null)}}const ue=j.children;for(let Q=0,le=ue.length;Q<le;Q++)R(ue[Q],F,W,D,N)}function Y(j){j.target.removeEventListener("dispose",Y);for(const W in p){const D=p[W],N=j.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}}const mT={[Ih]:kh,[Uh]:Bh,[Oh]:zh,[Ia]:Fh,[kh]:Ih,[Bh]:Uh,[zh]:Oh,[Fh]:Ia};function gT(r,e){function t(){let G=!1;const ke=new Rt;let ae=null;const me=new Rt(0,0,0,0);return{setMask:function(Fe){ae!==Fe&&!G&&(r.colorMask(Fe,Fe,Fe,Fe),ae=Fe)},setLocked:function(Fe){G=Fe},setClear:function(Fe,Ue,ft,jt,Qt){Qt===!0&&(Fe*=jt,Ue*=jt,ft*=jt),ke.set(Fe,Ue,ft,jt),me.equals(ke)===!1&&(r.clearColor(Fe,Ue,ft,jt),me.copy(ke))},reset:function(){G=!1,ae=null,me.set(-1,0,0,0)}}}function i(){let G=!1,ke=!1,ae=null,me=null,Fe=null;return{setReversed:function(Ue){if(ke!==Ue){const ft=e.get("EXT_clip_control");ke?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);const jt=Fe;Fe=null,this.setClear(jt)}ke=Ue},getReversed:function(){return ke},setTest:function(Ue){Ue?ge(r.DEPTH_TEST):Ne(r.DEPTH_TEST)},setMask:function(Ue){ae!==Ue&&!G&&(r.depthMask(Ue),ae=Ue)},setFunc:function(Ue){if(ke&&(Ue=mT[Ue]),me!==Ue){switch(Ue){case Ih:r.depthFunc(r.NEVER);break;case kh:r.depthFunc(r.ALWAYS);break;case Uh:r.depthFunc(r.LESS);break;case Ia:r.depthFunc(r.LEQUAL);break;case Oh:r.depthFunc(r.EQUAL);break;case Fh:r.depthFunc(r.GEQUAL);break;case Bh:r.depthFunc(r.GREATER);break;case zh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=Ue}},setLocked:function(Ue){G=Ue},setClear:function(Ue){Fe!==Ue&&(ke&&(Ue=1-Ue),r.clearDepth(Ue),Fe=Ue)},reset:function(){G=!1,ae=null,me=null,Fe=null,ke=!1}}}function a(){let G=!1,ke=null,ae=null,me=null,Fe=null,Ue=null,ft=null,jt=null,Qt=null;return{setTest:function(bt){G||(bt?ge(r.STENCIL_TEST):Ne(r.STENCIL_TEST))},setMask:function(bt){ke!==bt&&!G&&(r.stencilMask(bt),ke=bt)},setFunc:function(bt,Fn,Nn){(ae!==bt||me!==Fn||Fe!==Nn)&&(r.stencilFunc(bt,Fn,Nn),ae=bt,me=Fn,Fe=Nn)},setOp:function(bt,Fn,Nn){(Ue!==bt||ft!==Fn||jt!==Nn)&&(r.stencilOp(bt,Fn,Nn),Ue=bt,ft=Fn,jt=Nn)},setLocked:function(bt){G=bt},setClear:function(bt){Qt!==bt&&(r.clearStencil(bt),Qt=bt)},reset:function(){G=!1,ke=null,ae=null,me=null,Fe=null,Ue=null,ft=null,jt=null,Qt=null}}}const o=new t,c=new i,u=new a,h=new WeakMap,p=new WeakMap;let g={},f={},_=new WeakMap,M=[],w=null,b=!1,S=null,y=null,T=null,C=null,R=null,Y=null,j=null,F=new Et(0,0,0),W=0,D=!1,N=null,B=null,ue=null,Q=null,le=null;const pe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ce=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(H)[1]),se=ce>=1):H.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),se=ce>=2);let oe=null,re={};const U=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),Be=new Rt().fromArray(U),Z=new Rt().fromArray(ne);function he(G,ke,ae,me){const Fe=new Uint8Array(4),Ue=r.createTexture();r.bindTexture(G,Ue),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ft=0;ft<ae;ft++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(ke,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,Fe):r.texImage2D(ke+ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Fe);return Ue}const be={};be[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),be[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),be[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ge(r.DEPTH_TEST),c.setFunc(Ia),Me(!1),He(jg),ge(r.CULL_FACE),k(Jr);function ge(G){g[G]!==!0&&(r.enable(G),g[G]=!0)}function Ne(G){g[G]!==!1&&(r.disable(G),g[G]=!1)}function je(G,ke){return f[G]!==ke?(r.bindFramebuffer(G,ke),f[G]=ke,G===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ke),G===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ke),!0):!1}function Je(G,ke){let ae=M,me=!1;if(G){ae=_.get(ke),ae===void 0&&(ae=[],_.set(ke,ae));const Fe=G.textures;if(ae.length!==Fe.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let Ue=0,ft=Fe.length;Ue<ft;Ue++)ae[Ue]=r.COLOR_ATTACHMENT0+Ue;ae.length=Fe.length,me=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,me=!0);me&&r.drawBuffers(ae)}function yt(G){return w!==G?(r.useProgram(G),w=G,!0):!1}const ve={[Es]:r.FUNC_ADD,[xS]:r.FUNC_SUBTRACT,[SS]:r.FUNC_REVERSE_SUBTRACT};ve[MS]=r.MIN,ve[wS]=r.MAX;const Ae={[ES]:r.ZERO,[bS]:r.ONE,[TS]:r.SRC_COLOR,[Lh]:r.SRC_ALPHA,[LS]:r.SRC_ALPHA_SATURATE,[PS]:r.DST_COLOR,[RS]:r.DST_ALPHA,[AS]:r.ONE_MINUS_SRC_COLOR,[Dh]:r.ONE_MINUS_SRC_ALPHA,[NS]:r.ONE_MINUS_DST_COLOR,[CS]:r.ONE_MINUS_DST_ALPHA,[DS]:r.CONSTANT_COLOR,[IS]:r.ONE_MINUS_CONSTANT_COLOR,[kS]:r.CONSTANT_ALPHA,[US]:r.ONE_MINUS_CONSTANT_ALPHA};function k(G,ke,ae,me,Fe,Ue,ft,jt,Qt,bt){if(G===Jr){b===!0&&(Ne(r.BLEND),b=!1);return}if(b===!1&&(ge(r.BLEND),b=!0),G!==_S){if(G!==S||bt!==D){if((y!==Es||R!==Es)&&(r.blendEquation(r.FUNC_ADD),y=Es,R=Es),bt)switch(G){case Aa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hg:r.blendFunc(r.ONE,r.ONE);break;case Vg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Aa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Vg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}T=null,C=null,Y=null,j=null,F.set(0,0,0),W=0,S=G,D=bt}return}Fe=Fe||ke,Ue=Ue||ae,ft=ft||me,(ke!==y||Fe!==R)&&(r.blendEquationSeparate(ve[ke],ve[Fe]),y=ke,R=Fe),(ae!==T||me!==C||Ue!==Y||ft!==j)&&(r.blendFuncSeparate(Ae[ae],Ae[me],Ae[Ue],Ae[ft]),T=ae,C=me,Y=Ue,j=ft),(jt.equals(F)===!1||Qt!==W)&&(r.blendColor(jt.r,jt.g,jt.b,Qt),F.copy(jt),W=Qt),S=G,D=!1}function Ze(G,ke){G.side===zi?Ne(r.CULL_FACE):ge(r.CULL_FACE);let ae=G.side===On;ke&&(ae=!ae),Me(ae),G.blending===Aa&&G.transparent===!1?k(Jr):k(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),o.setMask(G.colorWrite);const me=G.stencilWrite;u.setTest(me),me&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),it(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):Ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function Me(G){N!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),N=G)}function He(G){G!==vS?(ge(r.CULL_FACE),G!==B&&(G===jg?r.cullFace(r.BACK):G===yS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ne(r.CULL_FACE),B=G}function Le(G){G!==ue&&(se&&r.lineWidth(G),ue=G)}function it(G,ke,ae){G?(ge(r.POLYGON_OFFSET_FILL),(Q!==ke||le!==ae)&&(r.polygonOffset(ke,ae),Q=ke,le=ae)):Ne(r.POLYGON_OFFSET_FILL)}function Oe(G){G?ge(r.SCISSOR_TEST):Ne(r.SCISSOR_TEST)}function L(G){G===void 0&&(G=r.TEXTURE0+pe-1),oe!==G&&(r.activeTexture(G),oe=G)}function A(G,ke,ae){ae===void 0&&(oe===null?ae=r.TEXTURE0+pe-1:ae=oe);let me=re[ae];me===void 0&&(me={type:void 0,texture:void 0},re[ae]=me),(me.type!==G||me.texture!==ke)&&(oe!==ae&&(r.activeTexture(ae),oe=ae),r.bindTexture(G,ke||be[G]),me.type=G,me.texture=ke)}function K(){const G=re[oe];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function de(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pt(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function at(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ot(G){Be.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Be.copy(G))}function $e(G){Z.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Z.copy(G))}function _t(G,ke){let ae=p.get(ke);ae===void 0&&(ae=new WeakMap,p.set(ke,ae));let me=ae.get(G);me===void 0&&(me=r.getUniformBlockIndex(ke,G.name),ae.set(G,me))}function ht(G,ke){const me=p.get(ke).get(G);h.get(ke)!==me&&(r.uniformBlockBinding(ke,me,G.__bindingPointIndex),h.set(ke,me))}function Lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},oe=null,re={},f={},_=new WeakMap,M=[],w=null,b=!1,S=null,y=null,T=null,C=null,R=null,Y=null,j=null,F=new Et(0,0,0),W=0,D=!1,N=null,B=null,ue=null,Q=null,le=null,Be.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:ge,disable:Ne,bindFramebuffer:je,drawBuffers:Je,useProgram:yt,setBlending:k,setMaterial:Ze,setFlipSided:Me,setCullFace:He,setLineWidth:Le,setPolygonOffset:it,setScissorTest:Oe,activeTexture:L,bindTexture:A,unbindTexture:K,compressedTexImage2D:de,compressedTexImage3D:ye,texImage2D:We,texImage3D:at,updateUBOMapping:_t,uniformBlockBinding:ht,texStorage2D:pt,texStorage3D:we,texSubImage2D:fe,texSubImage3D:qe,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Ve,scissor:ot,viewport:$e,reset:Lt}}function Ov(r,e,t,i){const a=vT(i);switch(t){case j0:return r*e;case V0:return r*e;case G0:return r*e*2;case W0:return r*e/a.components*a.byteLength;case zf:return r*e/a.components*a.byteLength;case $0:return r*e*2/a.components*a.byteLength;case jf:return r*e*2/a.components*a.byteLength;case H0:return r*e*3/a.components*a.byteLength;case Ci:return r*e*4/a.components*a.byteLength;case Hf:return r*e*4/a.components*a.byteLength;case Ic:case kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Uc:case Oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $h:case qh:return Math.max(r,16)*Math.max(e,8)/4;case Wh:case Xh:return Math.max(r,8)*Math.max(e,8)/2;case Yh:case Kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Jh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ef:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case tf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case nf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case rf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case sf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case af:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case of:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case lf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case cf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case uf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case df:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case hf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Fc:case ff:case pf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case X0:case mf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case gf:case vf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vT(r){switch(r){case mr:case F0:return{byteLength:1,components:1};case Oo:case B0:case Go:return{byteLength:2,components:1};case Ff:case Bf:return{byteLength:2,components:4};case Ps:case Of:case hr:return{byteLength:4,components:1};case z0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function yT(r,e,t,i,a,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pe,g=new WeakMap;let f;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,A){return M?new OffscreenCanvas(L,A):Vc("canvas")}function b(L,A,K){let de=1;const ye=Oe(L);if((ye.width>K||ye.height>K)&&(de=K/Math.max(ye.width,ye.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(de*ye.width),qe=Math.floor(de*ye.height);f===void 0&&(f=w(fe,qe));const Ie=A?w(fe,qe):f;return Ie.width=fe,Ie.height=qe,Ie.getContext("2d").drawImage(L,0,0,fe,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+fe+"x"+qe+")."),Ie}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){r.generateMipmap(L)}function T(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(L,A,K,de,ye=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=A;if(A===r.RED&&(K===r.FLOAT&&(fe=r.R32F),K===r.HALF_FLOAT&&(fe=r.R16F),K===r.UNSIGNED_BYTE&&(fe=r.R8)),A===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.R8UI),K===r.UNSIGNED_SHORT&&(fe=r.R16UI),K===r.UNSIGNED_INT&&(fe=r.R32UI),K===r.BYTE&&(fe=r.R8I),K===r.SHORT&&(fe=r.R16I),K===r.INT&&(fe=r.R32I)),A===r.RG&&(K===r.FLOAT&&(fe=r.RG32F),K===r.HALF_FLOAT&&(fe=r.RG16F),K===r.UNSIGNED_BYTE&&(fe=r.RG8)),A===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.RG8UI),K===r.UNSIGNED_SHORT&&(fe=r.RG16UI),K===r.UNSIGNED_INT&&(fe=r.RG32UI),K===r.BYTE&&(fe=r.RG8I),K===r.SHORT&&(fe=r.RG16I),K===r.INT&&(fe=r.RG32I)),A===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),K===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),K===r.UNSIGNED_INT&&(fe=r.RGB32UI),K===r.BYTE&&(fe=r.RGB8I),K===r.SHORT&&(fe=r.RGB16I),K===r.INT&&(fe=r.RGB32I)),A===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),K===r.UNSIGNED_INT&&(fe=r.RGBA32UI),K===r.BYTE&&(fe=r.RGBA8I),K===r.SHORT&&(fe=r.RGBA16I),K===r.INT&&(fe=r.RGBA32I)),A===r.RGB&&K===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),A===r.RGBA){const qe=ye?Qc:At.getTransfer(de);K===r.FLOAT&&(fe=r.RGBA32F),K===r.HALF_FLOAT&&(fe=r.RGBA16F),K===r.UNSIGNED_BYTE&&(fe=qe===kt?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(L,A){let K;return L?A===null||A===Ps||A===Oa?K=r.DEPTH24_STENCIL8:A===hr?K=r.DEPTH32F_STENCIL8:A===Oo&&(K=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ps||A===Oa?K=r.DEPTH_COMPONENT24:A===hr?K=r.DEPTH_COMPONENT32F:A===Oo&&(K=r.DEPTH_COMPONENT16),K}function Y(L,A){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Pi&&L.minFilter!==Vi?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function j(L){const A=L.target;A.removeEventListener("dispose",j),W(A),A.isVideoTexture&&g.delete(A)}function F(L){const A=L.target;A.removeEventListener("dispose",F),N(A)}function W(L){const A=i.get(L);if(A.__webglInit===void 0)return;const K=L.source,de=_.get(K);if(de){const ye=de[A.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&D(L),Object.keys(de).length===0&&_.delete(K)}i.remove(L)}function D(L){const A=i.get(L);r.deleteTexture(A.__webglTexture);const K=L.source,de=_.get(K);delete de[A.__cacheKey],c.memory.textures--}function N(L){const A=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(A.__webglFramebuffer[de]))for(let ye=0;ye<A.__webglFramebuffer[de].length;ye++)r.deleteFramebuffer(A.__webglFramebuffer[de][ye]);else r.deleteFramebuffer(A.__webglFramebuffer[de]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[de])}else{if(Array.isArray(A.__webglFramebuffer))for(let de=0;de<A.__webglFramebuffer.length;de++)r.deleteFramebuffer(A.__webglFramebuffer[de]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let de=0;de<A.__webglColorRenderbuffer.length;de++)A.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[de]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const K=L.textures;for(let de=0,ye=K.length;de<ye;de++){const fe=i.get(K[de]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),c.memory.textures--),i.remove(K[de])}i.remove(L)}let B=0;function ue(){B=0}function Q(){const L=B;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),B+=1,L}function le(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function pe(L,A){const K=i.get(L);if(L.isVideoTexture&&Le(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,L,A);return}}t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+A)}function se(L,A){const K=i.get(L);if(L.version>0&&K.__version!==L.version){Z(K,L,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+A)}function ce(L,A){const K=i.get(L);if(L.version>0&&K.__version!==L.version){Z(K,L,A);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+A)}function H(L,A){const K=i.get(L);if(L.version>0&&K.__version!==L.version){he(K,L,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+A)}const oe={[Vh]:r.REPEAT,[Ts]:r.CLAMP_TO_EDGE,[Gh]:r.MIRRORED_REPEAT},re={[Pi]:r.NEAREST,[WS]:r.NEAREST_MIPMAP_NEAREST,[tc]:r.NEAREST_MIPMAP_LINEAR,[Vi]:r.LINEAR,[Wd]:r.LINEAR_MIPMAP_NEAREST,[As]:r.LINEAR_MIPMAP_LINEAR},U={[YS]:r.NEVER,[tM]:r.ALWAYS,[KS]:r.LESS,[Y0]:r.LEQUAL,[JS]:r.EQUAL,[eM]:r.GEQUAL,[ZS]:r.GREATER,[QS]:r.NOTEQUAL};function ne(L,A){if(A.type===hr&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Vi||A.magFilter===Wd||A.magFilter===tc||A.magFilter===As||A.minFilter===Vi||A.minFilter===Wd||A.minFilter===tc||A.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,oe[A.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,oe[A.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,oe[A.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,re[A.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,re[A.minFilter]),A.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,U[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Pi||A.minFilter!==tc&&A.minFilter!==As||A.type===hr&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Be(L,A){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",j));const de=A.source;let ye=_.get(de);ye===void 0&&(ye={},_.set(de,ye));const fe=le(A);if(fe!==L.__cacheKey){ye[fe]===void 0&&(ye[fe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,K=!0),ye[fe].usedTimes++;const qe=ye[L.__cacheKey];qe!==void 0&&(ye[L.__cacheKey].usedTimes--,qe.usedTimes===0&&D(A)),L.__cacheKey=fe,L.__webglTexture=ye[fe].texture}return K}function Z(L,A,K){let de=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(de=r.TEXTURE_3D);const ye=Be(L,A),fe=A.source;t.bindTexture(de,L.__webglTexture,r.TEXTURE0+K);const qe=i.get(fe);if(fe.version!==qe.__version||ye===!0){t.activeTexture(r.TEXTURE0+K);const Ie=At.getPrimaries(At.workingColorSpace),Ve=A.colorSpace===Yr?null:At.getPrimaries(A.colorSpace),pt=A.colorSpace===Yr||Ie===Ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let we=b(A.image,!1,a.maxTextureSize);we=it(A,we);const We=o.convert(A.format,A.colorSpace),at=o.convert(A.type);let ot=C(A.internalFormat,We,at,A.colorSpace,A.isVideoTexture);ne(de,A);let $e;const _t=A.mipmaps,ht=A.isVideoTexture!==!0,Lt=qe.__version===void 0||ye===!0,G=fe.dataReady,ke=Y(A,we);if(A.isDepthTexture)ot=R(A.format===Fa,A.type),Lt&&(ht?t.texStorage2D(r.TEXTURE_2D,1,ot,we.width,we.height):t.texImage2D(r.TEXTURE_2D,0,ot,we.width,we.height,0,We,at,null));else if(A.isDataTexture)if(_t.length>0){ht&&Lt&&t.texStorage2D(r.TEXTURE_2D,ke,ot,_t[0].width,_t[0].height);for(let ae=0,me=_t.length;ae<me;ae++)$e=_t[ae],ht?G&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,$e.width,$e.height,We,at,$e.data):t.texImage2D(r.TEXTURE_2D,ae,ot,$e.width,$e.height,0,We,at,$e.data);A.generateMipmaps=!1}else ht?(Lt&&t.texStorage2D(r.TEXTURE_2D,ke,ot,we.width,we.height),G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,we.width,we.height,We,at,we.data)):t.texImage2D(r.TEXTURE_2D,0,ot,we.width,we.height,0,We,at,we.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ht&&Lt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,ot,_t[0].width,_t[0].height,we.depth);for(let ae=0,me=_t.length;ae<me;ae++)if($e=_t[ae],A.format!==Ci)if(We!==null)if(ht){if(G)if(A.layerUpdates.size>0){const Fe=Ov($e.width,$e.height,A.format,A.type);for(const Ue of A.layerUpdates){const ft=$e.data.subarray(Ue*Fe/$e.data.BYTES_PER_ELEMENT,(Ue+1)*Fe/$e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,Ue,$e.width,$e.height,1,We,ft)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,$e.width,$e.height,we.depth,We,$e.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,ot,$e.width,$e.height,we.depth,0,$e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?G&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,$e.width,$e.height,we.depth,We,at,$e.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,ot,$e.width,$e.height,we.depth,0,We,at,$e.data)}else{ht&&Lt&&t.texStorage2D(r.TEXTURE_2D,ke,ot,_t[0].width,_t[0].height);for(let ae=0,me=_t.length;ae<me;ae++)$e=_t[ae],A.format!==Ci?We!==null?ht?G&&t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,$e.width,$e.height,We,$e.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,ot,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?G&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,$e.width,$e.height,We,at,$e.data):t.texImage2D(r.TEXTURE_2D,ae,ot,$e.width,$e.height,0,We,at,$e.data)}else if(A.isDataArrayTexture)if(ht){if(Lt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,ot,we.width,we.height,we.depth),G)if(A.layerUpdates.size>0){const ae=Ov(we.width,we.height,A.format,A.type);for(const me of A.layerUpdates){const Fe=we.data.subarray(me*ae/we.data.BYTES_PER_ELEMENT,(me+1)*ae/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,we.width,we.height,1,We,at,Fe)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,We,at,we.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ot,we.width,we.height,we.depth,0,We,at,we.data);else if(A.isData3DTexture)ht?(Lt&&t.texStorage3D(r.TEXTURE_3D,ke,ot,we.width,we.height,we.depth),G&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,We,at,we.data)):t.texImage3D(r.TEXTURE_3D,0,ot,we.width,we.height,we.depth,0,We,at,we.data);else if(A.isFramebufferTexture){if(Lt)if(ht)t.texStorage2D(r.TEXTURE_2D,ke,ot,we.width,we.height);else{let ae=we.width,me=we.height;for(let Fe=0;Fe<ke;Fe++)t.texImage2D(r.TEXTURE_2D,Fe,ot,ae,me,0,We,at,null),ae>>=1,me>>=1}}else if(_t.length>0){if(ht&&Lt){const ae=Oe(_t[0]);t.texStorage2D(r.TEXTURE_2D,ke,ot,ae.width,ae.height)}for(let ae=0,me=_t.length;ae<me;ae++)$e=_t[ae],ht?G&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,We,at,$e):t.texImage2D(r.TEXTURE_2D,ae,ot,We,at,$e);A.generateMipmaps=!1}else if(ht){if(Lt){const ae=Oe(we);t.texStorage2D(r.TEXTURE_2D,ke,ot,ae.width,ae.height)}G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,We,at,we)}else t.texImage2D(r.TEXTURE_2D,0,ot,We,at,we);S(A)&&y(de),qe.__version=fe.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function he(L,A,K){if(A.image.length!==6)return;const de=Be(L,A),ye=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+K);const fe=i.get(ye);if(ye.version!==fe.__version||de===!0){t.activeTexture(r.TEXTURE0+K);const qe=At.getPrimaries(At.workingColorSpace),Ie=A.colorSpace===Yr?null:At.getPrimaries(A.colorSpace),Ve=A.colorSpace===Yr||qe===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const pt=A.isCompressedTexture||A.image[0].isCompressedTexture,we=A.image[0]&&A.image[0].isDataTexture,We=[];for(let me=0;me<6;me++)!pt&&!we?We[me]=b(A.image[me],!0,a.maxCubemapSize):We[me]=we?A.image[me].image:A.image[me],We[me]=it(A,We[me]);const at=We[0],ot=o.convert(A.format,A.colorSpace),$e=o.convert(A.type),_t=C(A.internalFormat,ot,$e,A.colorSpace),ht=A.isVideoTexture!==!0,Lt=fe.__version===void 0||de===!0,G=ye.dataReady;let ke=Y(A,at);ne(r.TEXTURE_CUBE_MAP,A);let ae;if(pt){ht&&Lt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,_t,at.width,at.height);for(let me=0;me<6;me++){ae=We[me].mipmaps;for(let Fe=0;Fe<ae.length;Fe++){const Ue=ae[Fe];A.format!==Ci?ot!==null?ht?G&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe,0,0,Ue.width,Ue.height,ot,Ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe,_t,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe,0,0,Ue.width,Ue.height,ot,$e,Ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe,_t,Ue.width,Ue.height,0,ot,$e,Ue.data)}}}else{if(ae=A.mipmaps,ht&&Lt){ae.length>0&&ke++;const me=Oe(We[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,_t,me.width,me.height)}for(let me=0;me<6;me++)if(we){ht?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,We[me].width,We[me].height,ot,$e,We[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_t,We[me].width,We[me].height,0,ot,$e,We[me].data);for(let Fe=0;Fe<ae.length;Fe++){const ft=ae[Fe].image[me].image;ht?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe+1,0,0,ft.width,ft.height,ot,$e,ft.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe+1,_t,ft.width,ft.height,0,ot,$e,ft.data)}}else{ht?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ot,$e,We[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_t,ot,$e,We[me]);for(let Fe=0;Fe<ae.length;Fe++){const Ue=ae[Fe];ht?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe+1,0,0,ot,$e,Ue.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe+1,_t,ot,$e,Ue.image[me])}}}S(A)&&y(r.TEXTURE_CUBE_MAP),fe.__version=ye.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function be(L,A,K,de,ye,fe){const qe=o.convert(K.format,K.colorSpace),Ie=o.convert(K.type),Ve=C(K.internalFormat,qe,Ie,K.colorSpace),pt=i.get(A),we=i.get(K);if(we.__renderTarget=A,!pt.__hasExternalTextures){const We=Math.max(1,A.width>>fe),at=Math.max(1,A.height>>fe);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?t.texImage3D(ye,fe,Ve,We,at,A.depth,0,qe,Ie,null):t.texImage2D(ye,fe,Ve,We,at,0,qe,Ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),He(A)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ye,we.__webglTexture,0,Me(A)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,ye,we.__webglTexture,fe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ge(L,A,K){if(r.bindRenderbuffer(r.RENDERBUFFER,L),A.depthBuffer){const de=A.depthTexture,ye=de&&de.isDepthTexture?de.type:null,fe=R(A.stencilBuffer,ye),qe=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ie=Me(A);He(A)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ie,fe,A.width,A.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,fe,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,fe,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,qe,r.RENDERBUFFER,L)}else{const de=A.textures;for(let ye=0;ye<de.length;ye++){const fe=de[ye],qe=o.convert(fe.format,fe.colorSpace),Ie=o.convert(fe.type),Ve=C(fe.internalFormat,qe,Ie,fe.colorSpace),pt=Me(A);K&&He(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,pt,Ve,A.width,A.height):He(A)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pt,Ve,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ve,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ne(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=i.get(A.depthTexture);de.__renderTarget=A,(!de.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pe(A.depthTexture,0);const ye=de.__webglTexture,fe=Me(A);if(A.depthTexture.format===Ra)He(A)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0);else if(A.depthTexture.format===Fa)He(A)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function je(L){const A=i.get(L),K=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),de){const ye=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,de.removeEventListener("dispose",ye)};de.addEventListener("dispose",ye),A.__depthDisposeCallback=ye}A.__boundDepthTexture=de}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Ne(A.__webglFramebuffer,L)}else if(K){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]===void 0)A.__webglDepthbuffer[de]=r.createRenderbuffer(),ge(A.__webglDepthbuffer[de],L,!1);else{const ye=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),ge(A.__webglDepthbuffer,L,!1);else{const de=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ye),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,ye)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(L,A,K){const de=i.get(L);A!==void 0&&be(de.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&je(L)}function yt(L){const A=L.texture,K=i.get(L),de=i.get(A);L.addEventListener("dispose",F);const ye=L.textures,fe=L.isWebGLCubeRenderTarget===!0,qe=ye.length>1;if(qe||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=A.version,c.memory.textures++),fe){K.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer[Ie]=[];for(let Ve=0;Ve<A.mipmaps.length;Ve++)K.__webglFramebuffer[Ie][Ve]=r.createFramebuffer()}else K.__webglFramebuffer[Ie]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)K.__webglFramebuffer[Ie]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(qe)for(let Ie=0,Ve=ye.length;Ie<Ve;Ie++){const pt=i.get(ye[Ie]);pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture(),c.memory.textures++)}if(L.samples>0&&He(L)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ie=0;Ie<ye.length;Ie++){const Ve=ye[Ie];K.__webglColorRenderbuffer[Ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[Ie]);const pt=o.convert(Ve.format,Ve.colorSpace),we=o.convert(Ve.type),We=C(Ve.internalFormat,pt,we,Ve.colorSpace,L.isXRRenderTarget===!0),at=Me(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,at,We,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,K.__webglColorRenderbuffer[Ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),ge(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),ne(r.TEXTURE_CUBE_MAP,A);for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ve=0;Ve<A.mipmaps.length;Ve++)be(K.__webglFramebuffer[Ie][Ve],L,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Ve);else be(K.__webglFramebuffer[Ie],L,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);S(A)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let Ie=0,Ve=ye.length;Ie<Ve;Ie++){const pt=ye[Ie],we=i.get(pt);t.bindTexture(r.TEXTURE_2D,we.__webglTexture),ne(r.TEXTURE_2D,pt),be(K.__webglFramebuffer,L,pt,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,0),S(pt)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let Ie=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ie=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ie,de.__webglTexture),ne(Ie,A),A.mipmaps&&A.mipmaps.length>0)for(let Ve=0;Ve<A.mipmaps.length;Ve++)be(K.__webglFramebuffer[Ve],L,A,r.COLOR_ATTACHMENT0,Ie,Ve);else be(K.__webglFramebuffer,L,A,r.COLOR_ATTACHMENT0,Ie,0);S(A)&&y(Ie),t.unbindTexture()}L.depthBuffer&&je(L)}function ve(L){const A=L.textures;for(let K=0,de=A.length;K<de;K++){const ye=A[K];if(S(ye)){const fe=T(L),qe=i.get(ye).__webglTexture;t.bindTexture(fe,qe),y(fe),t.unbindTexture()}}}const Ae=[],k=[];function Ze(L){if(L.samples>0){if(He(L)===!1){const A=L.textures,K=L.width,de=L.height;let ye=r.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,qe=i.get(L),Ie=A.length>1;if(Ie)for(let Ve=0;Ve<A.length;Ve++)t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Ve=0;Ve<A.length;Ve++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),Ie){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,qe.__webglColorRenderbuffer[Ve]);const pt=i.get(A[Ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,pt,0)}r.blitFramebuffer(0,0,K,de,0,0,K,de,ye,r.NEAREST),h===!0&&(Ae.length=0,k.length=0,Ae.push(r.COLOR_ATTACHMENT0+Ve),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ae.push(fe),k.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,k)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ie)for(let Ve=0;Ve<A.length;Ve++){t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.RENDERBUFFER,qe.__webglColorRenderbuffer[Ve]);const pt=i.get(A[Ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.TEXTURE_2D,pt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const A=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function Me(L){return Math.min(a.maxSamples,L.samples)}function He(L){const A=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Le(L){const A=c.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function it(L,A){const K=L.colorSpace,de=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==za&&K!==Yr&&(At.getTransfer(K)===kt?(de!==Ci||ye!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),A}function Oe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=ue,this.setTexture2D=pe,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=H,this.rebindTextures=Je,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=be,this.useMultisampledRTT=He}function _T(r,e){function t(i,a=Yr){let o;const c=At.getTransfer(a);if(i===mr)return r.UNSIGNED_BYTE;if(i===Ff)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Bf)return r.UNSIGNED_SHORT_5_5_5_1;if(i===z0)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===F0)return r.BYTE;if(i===B0)return r.SHORT;if(i===Oo)return r.UNSIGNED_SHORT;if(i===Of)return r.INT;if(i===Ps)return r.UNSIGNED_INT;if(i===hr)return r.FLOAT;if(i===Go)return r.HALF_FLOAT;if(i===j0)return r.ALPHA;if(i===H0)return r.RGB;if(i===Ci)return r.RGBA;if(i===V0)return r.LUMINANCE;if(i===G0)return r.LUMINANCE_ALPHA;if(i===Ra)return r.DEPTH_COMPONENT;if(i===Fa)return r.DEPTH_STENCIL;if(i===W0)return r.RED;if(i===zf)return r.RED_INTEGER;if(i===$0)return r.RG;if(i===jf)return r.RG_INTEGER;if(i===Hf)return r.RGBA_INTEGER;if(i===Ic||i===kc||i===Uc||i===Oc)if(c===kt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ic)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Uc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ic)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Uc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wh||i===$h||i===Xh||i===qh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Wh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$h)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yh||i===Kh||i===Jh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Yh||i===Kh)return c===kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Jh)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zh||i===Qh||i===ef||i===tf||i===nf||i===rf||i===sf||i===af||i===of||i===lf||i===cf||i===uf||i===df||i===hf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Zh)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qh)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ef)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tf)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nf)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rf)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sf)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===af)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===of)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lf)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cf)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uf)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===df)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hf)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fc||i===ff||i===pf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Fc)return c===kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ff)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===X0||i===mf||i===gf||i===vf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Fc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===mf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Oa?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class xT extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wa extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ST={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,c=null;const u=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const b of e.hand.values()){const S=t.getJointPose(b,i),y=this._getHandJoint(p,b);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=p.joints["index-finger-tip"],f=p.joints["thumb-tip"],_=g.position.distanceTo(f.position),M=.02,w=.005;p.inputState.pinching&&_>M+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=M-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(ST)))}return u!==null&&(u.visible=a!==null),h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const MT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ET{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new Yn,o=e.properties.get(a);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new gr({vertexShader:MT,fragmentShader:wT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new Wo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bT extends Ds{constructor(e,t){super();const i=this;let a=null,o=1,c=null,u="local-floor",h=1,p=null,g=null,f=null,_=null,M=null,w=null;const b=new ET,S=t.getContextAttributes();let y=null,T=null;const C=[],R=[],Y=new Pe;let j=null;const F=new ii;F.viewport=new Rt;const W=new ii;W.viewport=new Rt;const D=[F,W],N=new xT;let B=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=C[Z];return he===void 0&&(he=new yh,C[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=C[Z];return he===void 0&&(he=new yh,C[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=C[Z];return he===void 0&&(he=new yh,C[Z]=he),he.getHandSpace()};function Q(Z){const he=R.indexOf(Z.inputSource);if(he===-1)return;const be=C[he];be!==void 0&&(be.update(Z.inputSource,Z.frame,p||c),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function le(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",pe);for(let Z=0;Z<C.length;Z++){const he=R[Z];he!==null&&(R[Z]=null,C[Z].disconnect(he))}B=null,ue=null,b.reset(),e.setRenderTarget(y),M=null,_=null,f=null,a=null,T=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(j),e.setSize(Y.width,Y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){u=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return f},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",le),a.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await t.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(Y),a.renderState.layers===void 0){const he={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:o};M=new XRWebGLLayer(a,t,he),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),T=new Ns(M.framebufferWidth,M.framebufferHeight,{format:Ci,type:mr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let he=null,be=null,ge=null;S.depth&&(ge=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=S.stencil?Fa:Ra,be=S.stencil?Oa:Ps);const Ne={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:o};f=new XRWebGLBinding(a,t),_=f.createProjectionLayer(Ne),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),T=new Ns(_.textureWidth,_.textureHeight,{format:Ci,type:mr,depthTexture:new oy(_.textureWidth,_.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(u),Be.setContext(a),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function pe(Z){for(let he=0;he<Z.removed.length;he++){const be=Z.removed[he],ge=R.indexOf(be);ge>=0&&(R[ge]=null,C[ge].disconnect(be))}for(let he=0;he<Z.added.length;he++){const be=Z.added[he];let ge=R.indexOf(be);if(ge===-1){for(let je=0;je<C.length;je++)if(je>=R.length){R.push(be),ge=je;break}else if(R[je]===null){R[je]=be,ge=je;break}if(ge===-1)break}const Ne=C[ge];Ne&&Ne.connect(be)}}const se=new O,ce=new O;function H(Z,he,be){se.setFromMatrixPosition(he.matrixWorld),ce.setFromMatrixPosition(be.matrixWorld);const ge=se.distanceTo(ce),Ne=he.projectionMatrix.elements,je=be.projectionMatrix.elements,Je=Ne[14]/(Ne[10]-1),yt=Ne[14]/(Ne[10]+1),ve=(Ne[9]+1)/Ne[5],Ae=(Ne[9]-1)/Ne[5],k=(Ne[8]-1)/Ne[0],Ze=(je[8]+1)/je[0],Me=Je*k,He=Je*Ze,Le=ge/(-k+Ze),it=Le*-k;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(it),Z.translateZ(Le),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ne[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Oe=Je+Le,L=yt+Le,A=Me-it,K=He+(ge-it),de=ve*yt/L*Oe,ye=Ae*yt/L*Oe;Z.projectionMatrix.makePerspective(A,K,de,ye,Oe,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function oe(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let he=Z.near,be=Z.far;b.texture!==null&&(b.depthNear>0&&(he=b.depthNear),b.depthFar>0&&(be=b.depthFar)),N.near=W.near=F.near=he,N.far=W.far=F.far=be,(B!==N.near||ue!==N.far)&&(a.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,ue=N.far),F.layers.mask=Z.layers.mask|2,W.layers.mask=Z.layers.mask|4,N.layers.mask=F.layers.mask|W.layers.mask;const ge=Z.parent,Ne=N.cameras;oe(N,ge);for(let je=0;je<Ne.length;je++)oe(Ne[je],ge);Ne.length===2?H(N,F,W):N.projectionMatrix.copy(F.projectionMatrix),re(Z,N,ge)};function re(Z,he,be){be===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Fo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(_===null&&M===null))return h},this.setFoveation=function(Z){h=Z,_!==null&&(_.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(N)};let U=null;function ne(Z,he){if(g=he.getViewerPose(p||c),w=he,g!==null){const be=g.views;M!==null&&(e.setRenderTargetFramebuffer(T,M.framebuffer),e.setRenderTarget(T));let ge=!1;be.length!==N.cameras.length&&(N.cameras.length=0,ge=!0);for(let je=0;je<be.length;je++){const Je=be[je];let yt=null;if(M!==null)yt=M.getViewport(Je);else{const Ae=f.getViewSubImage(_,Je);yt=Ae.viewport,je===0&&(e.setRenderTargetTextures(T,Ae.colorTexture,_.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(T))}let ve=D[je];ve===void 0&&(ve=new ii,ve.layers.enable(je),ve.viewport=new Rt,D[je]=ve),ve.matrix.fromArray(Je.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(Je.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(yt.x,yt.y,yt.width,yt.height),je===0&&(N.matrix.copy(ve.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ge===!0&&N.cameras.push(ve)}const Ne=a.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const je=f.getDepthInformation(be[0]);je&&je.isValid&&je.texture&&b.init(e,je,a.renderState)}}for(let be=0;be<C.length;be++){const ge=R[be],Ne=C[be];ge!==null&&Ne!==void 0&&Ne.update(ge,he,p||c)}U&&U(Z,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),w=null}const Be=new sy;Be.setAnimationLoop(ne),this.setAnimationLoop=function(Z){U=Z},this.dispose=function(){}}}const Ss=new Xi,TT=new zt;function AT(r,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,ny(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function a(S,y,T,C,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?o(S,y):y.isMeshToonMaterial?(o(S,y),f(S,y)):y.isMeshPhongMaterial?(o(S,y),g(S,y)):y.isMeshStandardMaterial?(o(S,y),_(S,y),y.isMeshPhysicalMaterial&&M(S,y,R)):y.isMeshMatcapMaterial?(o(S,y),w(S,y)):y.isMeshDepthMaterial?o(S,y):y.isMeshDistanceMaterial?(o(S,y),b(S,y)):y.isMeshNormalMaterial?o(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&u(S,y)):y.isPointsMaterial?h(S,y,T,C):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===On&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===On&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const T=e.get(y),C=T.envMap,R=T.envMapRotation;C&&(S.envMap.value=C,Ss.copy(R),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),S.envMapRotation.value.setFromMatrix4(TT.makeRotationFromEuler(Ss)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function u(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,T,C){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*T,S.scale.value=C*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function f(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,T){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===On&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=T.texture,S.transmissionSamplerSize.value.set(T.width,T.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,y){y.matcap&&(S.matcap.value=y.matcap)}function b(S,y){const T=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(T.matrixWorld),S.nearDistance.value=T.shadow.camera.near,S.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function RT(r,e,t,i){let a={},o={},c=[];const u=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(T,C){const R=C.program;i.uniformBlockBinding(T,R)}function p(T,C){let R=a[T.id];R===void 0&&(w(T),R=g(T),a[T.id]=R,T.addEventListener("dispose",S));const Y=C.program;i.updateUBOMapping(T,Y);const j=e.render.frame;o[T.id]!==j&&(_(T),o[T.id]=j)}function g(T){const C=f();T.__bindingPointIndex=C;const R=r.createBuffer(),Y=T.__size,j=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,Y,j),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,R),R}function f(){for(let T=0;T<u;T++)if(c.indexOf(T)===-1)return c.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(T){const C=a[T.id],R=T.uniforms,Y=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let j=0,F=R.length;j<F;j++){const W=Array.isArray(R[j])?R[j]:[R[j]];for(let D=0,N=W.length;D<N;D++){const B=W[D];if(M(B,j,D,Y)===!0){const ue=B.__offset,Q=Array.isArray(B.value)?B.value:[B.value];let le=0;for(let pe=0;pe<Q.length;pe++){const se=Q[pe],ce=b(se);typeof se=="number"||typeof se=="boolean"?(B.__data[0]=se,r.bufferSubData(r.UNIFORM_BUFFER,ue+le,B.__data)):se.isMatrix3?(B.__data[0]=se.elements[0],B.__data[1]=se.elements[1],B.__data[2]=se.elements[2],B.__data[3]=0,B.__data[4]=se.elements[3],B.__data[5]=se.elements[4],B.__data[6]=se.elements[5],B.__data[7]=0,B.__data[8]=se.elements[6],B.__data[9]=se.elements[7],B.__data[10]=se.elements[8],B.__data[11]=0):(se.toArray(B.__data,le),le+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ue,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(T,C,R,Y){const j=T.value,F=C+"_"+R;if(Y[F]===void 0)return typeof j=="number"||typeof j=="boolean"?Y[F]=j:Y[F]=j.clone(),!0;{const W=Y[F];if(typeof j=="number"||typeof j=="boolean"){if(W!==j)return Y[F]=j,!0}else if(W.equals(j)===!1)return W.copy(j),!0}return!1}function w(T){const C=T.uniforms;let R=0;const Y=16;for(let F=0,W=C.length;F<W;F++){const D=Array.isArray(C[F])?C[F]:[C[F]];for(let N=0,B=D.length;N<B;N++){const ue=D[N],Q=Array.isArray(ue.value)?ue.value:[ue.value];for(let le=0,pe=Q.length;le<pe;le++){const se=Q[le],ce=b(se),H=R%Y,oe=H%ce.boundary,re=H+oe;R+=oe,re!==0&&Y-re<ce.storage&&(R+=Y-re),ue.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=R,R+=ce.storage}}}const j=R%Y;return j>0&&(R+=Y-j),T.__size=R,T.__cache={},this}function b(T){const C={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(C.boundary=4,C.storage=4):T.isVector2?(C.boundary=8,C.storage=8):T.isVector3||T.isColor?(C.boundary=16,C.storage=12):T.isVector4?(C.boundary=16,C.storage=16):T.isMatrix3?(C.boundary=48,C.storage=48):T.isMatrix4?(C.boundary=64,C.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),C}function S(T){const C=T.target;C.removeEventListener("dispose",S);const R=c.indexOf(C.__bindingPointIndex);c.splice(R,1),r.deleteBuffer(a[C.id]),delete a[C.id],delete o[C.id]}function y(){for(const T in a)r.deleteBuffer(a[T]);c=[],a={},o={}}return{bind:h,update:p,dispose:y}}class CT{constructor(e={}){const{canvas:t=yM(),context:i=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const w=new Uint32Array(4),b=new Int32Array(4);let S=null,y=null;const T=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Zr,this.toneMappingExposure=1;const R=this;let Y=!1,j=0,F=0,W=null,D=-1,N=null;const B=new Rt,ue=new Rt;let Q=null;const le=new Et(0);let pe=0,se=t.width,ce=t.height,H=1,oe=null,re=null;const U=new Rt(0,0,se,ce),ne=new Rt(0,0,se,ce);let Be=!1;const Z=new qf;let he=!1,be=!1;const ge=new zt,Ne=new zt,je=new O,Je=new Rt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function Ae(){return W===null?H:1}let k=i;function Ze(P,$){return t.getContext(P,$)}try{const P={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uf}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),k===null){const $="webgl2";if(k=Ze($,P),k===null)throw Ze($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Me,He,Le,it,Oe,L,A,K,de,ye,fe,qe,Ie,Ve,pt,we,We,at,ot,$e,_t,ht,Lt,G;function ke(){Me=new IE(k),Me.init(),ht=new _T(k,Me),He=new RE(k,Me,e,ht),Le=new gT(k,Me),He.reverseDepthBuffer&&_&&Le.buffers.depth.setReversed(!0),it=new OE(k),Oe=new tT,L=new yT(k,Me,Le,Oe,He,ht,it),A=new PE(R),K=new DE(R),de=new GM(k),Lt=new TE(k,de),ye=new kE(k,de,it,Lt),fe=new BE(k,ye,de,it),ot=new FE(k,He,L),we=new CE(Oe),qe=new eT(R,A,K,Me,He,Lt,we),Ie=new AT(R,Oe),Ve=new iT,pt=new cT(Me),at=new bE(R,A,K,Le,fe,M,h),We=new pT(R,fe,He),G=new RT(k,it,He,Le),$e=new AE(k,Me,it),_t=new UE(k,Me,it),it.programs=qe.programs,R.capabilities=He,R.extensions=Me,R.properties=Oe,R.renderLists=Ve,R.shadowMap=We,R.state=Le,R.info=it}ke();const ae=new bT(R,k);this.xr=ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const P=Me.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Me.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(se,ce,!1))},this.getSize=function(P){return P.set(se,ce)},this.setSize=function(P,$,te=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=P,ce=$,t.width=Math.floor(P*H),t.height=Math.floor($*H),te===!0&&(t.style.width=P+"px",t.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(se*H,ce*H).floor()},this.setDrawingBufferSize=function(P,$,te){se=P,ce=$,H=te,t.width=Math.floor(P*te),t.height=Math.floor($*te),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(B)},this.getViewport=function(P){return P.copy(U)},this.setViewport=function(P,$,te,ie){P.isVector4?U.set(P.x,P.y,P.z,P.w):U.set(P,$,te,ie),Le.viewport(B.copy(U).multiplyScalar(H).round())},this.getScissor=function(P){return P.copy(ne)},this.setScissor=function(P,$,te,ie){P.isVector4?ne.set(P.x,P.y,P.z,P.w):ne.set(P,$,te,ie),Le.scissor(ue.copy(ne).multiplyScalar(H).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(P){Le.setScissorTest(Be=P)},this.setOpaqueSort=function(P){oe=P},this.setTransparentSort=function(P){re=P},this.getClearColor=function(P){return P.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(P=!0,$=!0,te=!0){let ie=0;if(P){let X=!1;if(W!==null){const Ce=W.texture.format;X=Ce===Hf||Ce===jf||Ce===zf}if(X){const Ce=W.texture.type,Te=Ce===mr||Ce===Ps||Ce===Oo||Ce===Oa||Ce===Ff||Ce===Bf,Qe=at.getClearColor(),Ye=at.getClearAlpha(),ct=Qe.r,dt=Qe.g,et=Qe.b;Te?(w[0]=ct,w[1]=dt,w[2]=et,w[3]=Ye,k.clearBufferuiv(k.COLOR,0,w)):(b[0]=ct,b[1]=dt,b[2]=et,b[3]=Ye,k.clearBufferiv(k.COLOR,0,b))}else ie|=k.COLOR_BUFFER_BIT}$&&(ie|=k.DEPTH_BUFFER_BIT),te&&(ie|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Ve.dispose(),pt.dispose(),Oe.dispose(),A.dispose(),K.dispose(),fe.dispose(),Lt.dispose(),G.dispose(),qe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ks),ae.removeEventListener("sessionend",vr),Yi.stop()};function me(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const P=it.autoReset,$=We.enabled,te=We.autoUpdate,ie=We.needsUpdate,X=We.type;ke(),it.autoReset=P,We.enabled=$,We.autoUpdate=te,We.needsUpdate=ie,We.type=X}function Ue(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ft(P){const $=P.target;$.removeEventListener("dispose",ft),jt($)}function jt(P){Qt(P),Oe.remove(P)}function Qt(P){const $=Oe.get(P).programs;$!==void 0&&($.forEach(function(te){qe.releaseProgram(te)}),P.isShaderMaterial&&qe.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,te,ie,X,Ce){$===null&&($=yt);const Te=X.isMesh&&X.matrixWorld.determinant()<0,Qe=qo(P,$,te,ie,X);Le.setMaterial(ie,Te);let Ye=te.index,ct=1;if(ie.wireframe===!0){if(Ye=ye.getWireframeAttribute(te),Ye===void 0)return;ct=2}const dt=te.drawRange,et=te.attributes.position;let wt=dt.start*ct,Nt=(dt.start+dt.count)*ct;Ce!==null&&(wt=Math.max(wt,Ce.start*ct),Nt=Math.min(Nt,(Ce.start+Ce.count)*ct)),Ye!==null?(wt=Math.max(wt,0),Nt=Math.min(Nt,Ye.count)):et!=null&&(wt=Math.max(wt,0),Nt=Math.min(Nt,et.count));const St=Nt-wt;if(St<0||St===1/0)return;Lt.setup(X,ie,Qe,te,Ye);let Mn,mt=$e;if(Ye!==null&&(Mn=de.get(Ye),mt=_t,mt.setIndex(Mn)),X.isMesh)ie.wireframe===!0?(Le.setLineWidth(ie.wireframeLinewidth*Ae()),mt.setMode(k.LINES)):mt.setMode(k.TRIANGLES);else if(X.isLine){let nt=ie.linewidth;nt===void 0&&(nt=1),Le.setLineWidth(nt*Ae()),X.isLineSegments?mt.setMode(k.LINES):X.isLineLoop?mt.setMode(k.LINE_LOOP):mt.setMode(k.LINE_STRIP)}else X.isPoints?mt.setMode(k.POINTS):X.isSprite&&mt.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)mt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))mt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const nt=X._multiDrawStarts,gi=X._multiDrawCounts,Ct=X._multiDrawCount,wn=Ye?de.get(Ye).bytesPerElement:1,vi=Oe.get(ie).currentProgram.getUniforms();for(let en=0;en<Ct;en++)vi.setValue(k,"_gl_DrawID",en),mt.render(nt[en]/wn,gi[en])}else if(X.isInstancedMesh)mt.renderInstances(wt,St,X.count);else if(te.isInstancedBufferGeometry){const nt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,gi=Math.min(te.instanceCount,nt);mt.renderInstances(wt,St,gi)}else mt.render(wt,St)};function bt(P,$,te){P.transparent===!0&&P.side===zi&&P.forceSinglePass===!1?(P.side=On,P.needsUpdate=!0,Us(P,$,te),P.side=Qr,P.needsUpdate=!0,Us(P,$,te),P.side=zi):Us(P,$,te)}this.compile=function(P,$,te=null){te===null&&(te=P),y=pt.get(te),y.init($),C.push(y),te.traverseVisible(function(X){X.isLight&&X.layers.test($.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),P!==te&&P.traverseVisible(function(X){X.isLight&&X.layers.test($.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights();const ie=new Set;return P.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ce=X.material;if(Ce)if(Array.isArray(Ce))for(let Te=0;Te<Ce.length;Te++){const Qe=Ce[Te];bt(Qe,te,X),ie.add(Qe)}else bt(Ce,te,X),ie.add(Ce)}),C.pop(),y=null,ie},this.compileAsync=function(P,$,te=null){const ie=this.compile(P,$,te);return new Promise(X=>{function Ce(){if(ie.forEach(function(Te){Oe.get(Te).currentProgram.isReady()&&ie.delete(Te)}),ie.size===0){X(P);return}setTimeout(Ce,10)}Me.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Fn=null;function Nn(P){Fn&&Fn(P)}function ks(){Yi.stop()}function vr(){Yi.start()}const Yi=new sy;Yi.setAnimationLoop(Nn),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(P){Fn=P,ae.setAnimationLoop(P),P===null?Yi.stop():Yi.start()},ae.addEventListener("sessionstart",ks),ae.addEventListener("sessionend",vr),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera($),$=ae.getCamera()),P.isScene===!0&&P.onBeforeRender(R,P,$,W),y=pt.get(P,C.length),y.init($),C.push(y),Ne.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Z.setFromProjectionMatrix(Ne),be=this.localClippingEnabled,he=we.init(this.clippingPlanes,be),S=Ve.get(P,T.length),S.init(),T.push(S),ae.enabled===!0&&ae.isPresenting===!0){const Ce=R.xr.getDepthSensingMesh();Ce!==null&&Ki(Ce,$,-1/0,R.sortObjects)}Ki(P,$,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(oe,re),ve=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ve&&at.addToRenderList(S,P),this.info.render.frame++,he===!0&&we.beginShadows();const te=y.state.shadowsArray;We.render(te,P,$),he===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=S.opaque,X=S.transmissive;if(y.setupLights(),$.isArrayCamera){const Ce=$.cameras;if(X.length>0)for(let Te=0,Qe=Ce.length;Te<Qe;Te++){const Ye=Ce[Te];ns(ie,X,P,Ye)}ve&&at.render(P);for(let Te=0,Qe=Ce.length;Te<Qe;Te++){const Ye=Ce[Te];ts(S,P,Ye,Ye.viewport)}}else X.length>0&&ns(ie,X,P,$),ve&&at.render(P),ts(S,P,$);W!==null&&(L.updateMultisampleRenderTarget(W),L.updateRenderTargetMipmap(W)),P.isScene===!0&&P.onAfterRender(R,P,$),Lt.resetDefaultState(),D=-1,N=null,C.pop(),C.length>0?(y=C[C.length-1],he===!0&&we.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function Ki(P,$,te,ie){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)te=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)y.pushLight(P),P.castShadow&&y.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Z.intersectsSprite(P)){ie&&Je.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ne);const Te=fe.update(P),Qe=P.material;Qe.visible&&S.push(P,Te,Qe,te,Je.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Z.intersectsObject(P))){const Te=fe.update(P),Qe=P.material;if(ie&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Je.copy(P.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Je.copy(Te.boundingSphere.center)),Je.applyMatrix4(P.matrixWorld).applyMatrix4(Ne)),Array.isArray(Qe)){const Ye=Te.groups;for(let ct=0,dt=Ye.length;ct<dt;ct++){const et=Ye[ct],wt=Qe[et.materialIndex];wt&&wt.visible&&S.push(P,Te,wt,te,Je.z,et)}}else Qe.visible&&S.push(P,Te,Qe,te,Je.z,null)}}const Ce=P.children;for(let Te=0,Qe=Ce.length;Te<Qe;Te++)Ki(Ce[Te],$,te,ie)}function ts(P,$,te,ie){const X=P.opaque,Ce=P.transmissive,Te=P.transparent;y.setupLightsView(te),he===!0&&we.setGlobalState(R.clippingPlanes,te),ie&&Le.viewport(B.copy(ie)),X.length>0&&yr(X,$,te),Ce.length>0&&yr(Ce,$,te),Te.length>0&&yr(Te,$,te),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function ns(P,$,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ie.id]===void 0&&(y.state.transmissionRenderTarget[ie.id]=new Ns(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?Go:mr,minFilter:As,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Ce=y.state.transmissionRenderTarget[ie.id],Te=ie.viewport||B;Ce.setSize(Te.z,Te.w);const Qe=R.getRenderTarget();R.setRenderTarget(Ce),R.getClearColor(le),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),ve&&at.render(te);const Ye=R.toneMapping;R.toneMapping=Zr;const ct=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),y.setupLightsView(ie),he===!0&&we.setGlobalState(R.clippingPlanes,ie),yr(P,te,ie),L.updateMultisampleRenderTarget(Ce),L.updateRenderTargetMipmap(Ce),Me.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let et=0,wt=$.length;et<wt;et++){const Nt=$[et],St=Nt.object,Mn=Nt.geometry,mt=Nt.material,nt=Nt.group;if(mt.side===zi&&St.layers.test(ie.layers)){const gi=mt.side;mt.side=On,mt.needsUpdate=!0,$o(St,te,ie,Mn,mt,nt),mt.side=gi,mt.needsUpdate=!0,dt=!0}}dt===!0&&(L.updateMultisampleRenderTarget(Ce),L.updateRenderTargetMipmap(Ce))}R.setRenderTarget(Qe),R.setClearColor(le,pe),ct!==void 0&&(ie.viewport=ct),R.toneMapping=Ye}function yr(P,$,te){const ie=$.isScene===!0?$.overrideMaterial:null;for(let X=0,Ce=P.length;X<Ce;X++){const Te=P[X],Qe=Te.object,Ye=Te.geometry,ct=ie===null?Te.material:ie,dt=Te.group;Qe.layers.test(te.layers)&&$o(Qe,$,te,Ye,ct,dt)}}function $o(P,$,te,ie,X,Ce){P.onBeforeRender(R,$,te,ie,X,Ce),P.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),X.onBeforeRender(R,$,te,ie,P,Ce),X.transparent===!0&&X.side===zi&&X.forceSinglePass===!1?(X.side=On,X.needsUpdate=!0,R.renderBufferDirect(te,$,ie,X,P,Ce),X.side=Qr,X.needsUpdate=!0,R.renderBufferDirect(te,$,ie,X,P,Ce),X.side=zi):R.renderBufferDirect(te,$,ie,X,P,Ce),P.onAfterRender(R,$,te,ie,X,Ce)}function Us(P,$,te){$.isScene!==!0&&($=yt);const ie=Oe.get(P),X=y.state.lights,Ce=y.state.shadowsArray,Te=X.state.version,Qe=qe.getParameters(P,X.state,Ce,$,te),Ye=qe.getProgramCacheKey(Qe);let ct=ie.programs;ie.environment=P.isMeshStandardMaterial?$.environment:null,ie.fog=$.fog,ie.envMap=(P.isMeshStandardMaterial?K:A).get(P.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,ct===void 0&&(P.addEventListener("dispose",ft),ct=new Map,ie.programs=ct);let dt=ct.get(Ye);if(dt!==void 0){if(ie.currentProgram===dt&&ie.lightsStateVersion===Te)return Li(P,Qe),dt}else Qe.uniforms=qe.getUniforms(P),P.onBeforeCompile(Qe,R),dt=qe.acquireProgram(Qe,Ye),ct.set(Ye,dt),ie.uniforms=Qe.uniforms;const et=ie.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(et.clippingPlanes=we.uniform),Li(P,Qe),ie.needsLights=ru(P),ie.lightsStateVersion=Te,ie.needsLights&&(et.ambientLightColor.value=X.state.ambient,et.lightProbe.value=X.state.probe,et.directionalLights.value=X.state.directional,et.directionalLightShadows.value=X.state.directionalShadow,et.spotLights.value=X.state.spot,et.spotLightShadows.value=X.state.spotShadow,et.rectAreaLights.value=X.state.rectArea,et.ltc_1.value=X.state.rectAreaLTC1,et.ltc_2.value=X.state.rectAreaLTC2,et.pointLights.value=X.state.point,et.pointLightShadows.value=X.state.pointShadow,et.hemisphereLights.value=X.state.hemi,et.directionalShadowMap.value=X.state.directionalShadowMap,et.directionalShadowMatrix.value=X.state.directionalShadowMatrix,et.spotShadowMap.value=X.state.spotShadowMap,et.spotLightMatrix.value=X.state.spotLightMatrix,et.spotLightMap.value=X.state.spotLightMap,et.pointShadowMap.value=X.state.pointShadowMap,et.pointShadowMatrix.value=X.state.pointShadowMatrix),ie.currentProgram=dt,ie.uniformsList=null,dt}function Xo(P){if(P.uniformsList===null){const $=P.currentProgram.getUniforms();P.uniformsList=Bc.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function Li(P,$){const te=Oe.get(P);te.outputColorSpace=$.outputColorSpace,te.batching=$.batching,te.batchingColor=$.batchingColor,te.instancing=$.instancing,te.instancingColor=$.instancingColor,te.instancingMorph=$.instancingMorph,te.skinning=$.skinning,te.morphTargets=$.morphTargets,te.morphNormals=$.morphNormals,te.morphColors=$.morphColors,te.morphTargetsCount=$.morphTargetsCount,te.numClippingPlanes=$.numClippingPlanes,te.numIntersection=$.numClipIntersection,te.vertexAlphas=$.vertexAlphas,te.vertexTangents=$.vertexTangents,te.toneMapping=$.toneMapping}function qo(P,$,te,ie,X){$.isScene!==!0&&($=yt),L.resetTextureUnits();const Ce=$.fog,Te=ie.isMeshStandardMaterial?$.environment:null,Qe=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:za,Ye=(ie.isMeshStandardMaterial?K:A).get(ie.envMap||Te),ct=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,dt=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),et=!!te.morphAttributes.position,wt=!!te.morphAttributes.normal,Nt=!!te.morphAttributes.color;let St=Zr;ie.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(St=R.toneMapping);const Mn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,mt=Mn!==void 0?Mn.length:0,nt=Oe.get(ie),gi=y.state.lights;if(he===!0&&(be===!0||P!==N)){const Ln=P===N&&ie.id===D;we.setState(ie,P,Ln)}let Ct=!1;ie.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==gi.state.version||nt.outputColorSpace!==Qe||X.isBatchedMesh&&nt.batching===!1||!X.isBatchedMesh&&nt.batching===!0||X.isBatchedMesh&&nt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&nt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&nt.instancing===!1||!X.isInstancedMesh&&nt.instancing===!0||X.isSkinnedMesh&&nt.skinning===!1||!X.isSkinnedMesh&&nt.skinning===!0||X.isInstancedMesh&&nt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&nt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&nt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&nt.instancingMorph===!1&&X.morphTexture!==null||nt.envMap!==Ye||ie.fog===!0&&nt.fog!==Ce||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==we.numPlanes||nt.numIntersection!==we.numIntersection)||nt.vertexAlphas!==ct||nt.vertexTangents!==dt||nt.morphTargets!==et||nt.morphNormals!==wt||nt.morphColors!==Nt||nt.toneMapping!==St||nt.morphTargetsCount!==mt)&&(Ct=!0):(Ct=!0,nt.__version=ie.version);let wn=nt.currentProgram;Ct===!0&&(wn=Us(ie,$,X));let vi=!1,en=!1,Di=!1;const Ot=wn.getUniforms(),si=nt.uniforms;if(Le.useProgram(wn.program)&&(vi=!0,en=!0,Di=!0),ie.id!==D&&(D=ie.id,en=!0),vi||N!==P){Le.buffers.depth.getReversed()?(ge.copy(P.projectionMatrix),xM(ge),SM(ge),Ot.setValue(k,"projectionMatrix",ge)):Ot.setValue(k,"projectionMatrix",P.projectionMatrix),Ot.setValue(k,"viewMatrix",P.matrixWorldInverse);const ai=Ot.map.cameraPosition;ai!==void 0&&ai.setValue(k,je.setFromMatrixPosition(P.matrixWorld)),He.logarithmicDepthBuffer&&Ot.setValue(k,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ot.setValue(k,"isOrthographic",P.isOrthographicCamera===!0),N!==P&&(N=P,en=!0,Di=!0)}if(X.isSkinnedMesh){Ot.setOptional(k,X,"bindMatrix"),Ot.setOptional(k,X,"bindMatrixInverse");const Ln=X.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),Ot.setValue(k,"boneTexture",Ln.boneTexture,L))}X.isBatchedMesh&&(Ot.setOptional(k,X,"batchingTexture"),Ot.setValue(k,"batchingTexture",X._matricesTexture,L),Ot.setOptional(k,X,"batchingIdTexture"),Ot.setValue(k,"batchingIdTexture",X._indirectTexture,L),Ot.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&Ot.setValue(k,"batchingColorTexture",X._colorsTexture,L));const Ji=te.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&ot.update(X,te,wn),(en||nt.receiveShadow!==X.receiveShadow)&&(nt.receiveShadow=X.receiveShadow,Ot.setValue(k,"receiveShadow",X.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(si.envMap.value=Ye,si.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&$.environment!==null&&(si.envMapIntensity.value=$.environmentIntensity),en&&(Ot.setValue(k,"toneMappingExposure",R.toneMappingExposure),nt.needsLights&&Yo(si,Di),Ce&&ie.fog===!0&&Ie.refreshFogUniforms(si,Ce),Ie.refreshMaterialUniforms(si,ie,H,ce,y.state.transmissionRenderTarget[P.id]),Bc.upload(k,Xo(nt),si,L)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Bc.upload(k,Xo(nt),si,L),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ot.setValue(k,"center",X.center),Ot.setValue(k,"modelViewMatrix",X.modelViewMatrix),Ot.setValue(k,"normalMatrix",X.normalMatrix),Ot.setValue(k,"modelMatrix",X.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Ln=ie.uniformsGroups;for(let ai=0,Bn=Ln.length;ai<Bn;ai++){const Ko=Ln[ai];G.update(Ko,wn),G.bind(Ko,wn)}}return wn}function Yo(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function ru(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(P,$,te){Oe.get(P.texture).__webglTexture=$,Oe.get(P.depthTexture).__webglTexture=te;const ie=Oe.get(P);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,$){const te=Oe.get(P);te.__webglFramebuffer=$,te.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(P,$=0,te=0){W=P,j=$,F=te;let ie=!0,X=null,Ce=!1,Te=!1;if(P){const Ye=Oe.get(P);if(Ye.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(k.FRAMEBUFFER,null),ie=!1;else if(Ye.__webglFramebuffer===void 0)L.setupRenderTarget(P);else if(Ye.__hasExternalTextures)L.rebindTextures(P,Oe.get(P.texture).__webglTexture,Oe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const et=P.depthTexture;if(Ye.__boundDepthTexture!==et){if(et!==null&&Oe.has(et)&&(P.width!==et.image.width||P.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(P)}}const ct=P.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Te=!0);const dt=Oe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(dt[$])?X=dt[$][te]:X=dt[$],Ce=!0):P.samples>0&&L.useMultisampledRTT(P)===!1?X=Oe.get(P).__webglMultisampledFramebuffer:Array.isArray(dt)?X=dt[te]:X=dt,B.copy(P.viewport),ue.copy(P.scissor),Q=P.scissorTest}else B.copy(U).multiplyScalar(H).floor(),ue.copy(ne).multiplyScalar(H).floor(),Q=Be;if(Le.bindFramebuffer(k.FRAMEBUFFER,X)&&ie&&Le.drawBuffers(P,X),Le.viewport(B),Le.scissor(ue),Le.setScissorTest(Q),Ce){const Ye=Oe.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ye.__webglTexture,te)}else if(Te){const Ye=Oe.get(P.texture),ct=$||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ye.__webglTexture,te||0,ct)}D=-1},this.readRenderTargetPixels=function(P,$,te,ie,X,Ce,Te){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=Oe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Te!==void 0&&(Qe=Qe[Te]),Qe){Le.bindFramebuffer(k.FRAMEBUFFER,Qe);try{const Ye=P.texture,ct=Ye.format,dt=Ye.type;if(!He.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-ie&&te>=0&&te<=P.height-X&&k.readPixels($,te,ie,X,ht.convert(ct),ht.convert(dt),Ce)}finally{const Ye=W!==null?Oe.get(W).__webglFramebuffer:null;Le.bindFramebuffer(k.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(P,$,te,ie,X,Ce,Te){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=Oe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Te!==void 0&&(Qe=Qe[Te]),Qe){const Ye=P.texture,ct=Ye.format,dt=Ye.type;if(!He.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=P.width-ie&&te>=0&&te<=P.height-X){Le.bindFramebuffer(k.FRAMEBUFFER,Qe);const et=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,et),k.bufferData(k.PIXEL_PACK_BUFFER,Ce.byteLength,k.STREAM_READ),k.readPixels($,te,ie,X,ht.convert(ct),ht.convert(dt),0);const wt=W!==null?Oe.get(W).__webglFramebuffer:null;Le.bindFramebuffer(k.FRAMEBUFFER,wt);const Nt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await _M(k,Nt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,et),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ce),k.deleteBuffer(et),k.deleteSync(Nt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,$=null,te=0){P.isTexture!==!0&&(Co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1]);const ie=Math.pow(2,-te),X=Math.floor(P.image.width*ie),Ce=Math.floor(P.image.height*ie),Te=$!==null?$.x:0,Qe=$!==null?$.y:0;L.setTexture2D(P,0),k.copyTexSubImage2D(k.TEXTURE_2D,te,0,0,Te,Qe,X,Ce),Le.unbindTexture()},this.copyTextureToTexture=function(P,$,te=null,ie=null,X=0){P.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,P=arguments[1],$=arguments[2],X=arguments[3]||0,te=null);let Ce,Te,Qe,Ye,ct,dt,et,wt,Nt;const St=P.isCompressedTexture?P.mipmaps[X]:P.image;te!==null?(Ce=te.max.x-te.min.x,Te=te.max.y-te.min.y,Qe=te.isBox3?te.max.z-te.min.z:1,Ye=te.min.x,ct=te.min.y,dt=te.isBox3?te.min.z:0):(Ce=St.width,Te=St.height,Qe=St.depth||1,Ye=0,ct=0,dt=0),ie!==null?(et=ie.x,wt=ie.y,Nt=ie.z):(et=0,wt=0,Nt=0);const Mn=ht.convert($.format),mt=ht.convert($.type);let nt;$.isData3DTexture?(L.setTexture3D($,0),nt=k.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(L.setTexture2DArray($,0),nt=k.TEXTURE_2D_ARRAY):(L.setTexture2D($,0),nt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,$.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,$.unpackAlignment);const gi=k.getParameter(k.UNPACK_ROW_LENGTH),Ct=k.getParameter(k.UNPACK_IMAGE_HEIGHT),wn=k.getParameter(k.UNPACK_SKIP_PIXELS),vi=k.getParameter(k.UNPACK_SKIP_ROWS),en=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,St.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,St.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ye),k.pixelStorei(k.UNPACK_SKIP_ROWS,ct),k.pixelStorei(k.UNPACK_SKIP_IMAGES,dt);const Di=P.isDataArrayTexture||P.isData3DTexture,Ot=$.isDataArrayTexture||$.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const si=Oe.get(P),Ji=Oe.get($),Ln=Oe.get(si.__renderTarget),ai=Oe.get(Ji.__renderTarget);Le.bindFramebuffer(k.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let Bn=0;Bn<Qe;Bn++)Di&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.get(P).__webglTexture,X,dt+Bn),P.isDepthTexture?(Ot&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.get($).__webglTexture,X,Nt+Bn),k.blitFramebuffer(Ye,ct,Ce,Te,et,wt,Ce,Te,k.DEPTH_BUFFER_BIT,k.NEAREST)):Ot?k.copyTexSubImage3D(nt,X,et,wt,Nt+Bn,Ye,ct,Ce,Te):k.copyTexSubImage2D(nt,X,et,wt,Nt+Bn,Ye,ct,Ce,Te);Le.bindFramebuffer(k.READ_FRAMEBUFFER,null),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ot?P.isDataTexture||P.isData3DTexture?k.texSubImage3D(nt,X,et,wt,Nt,Ce,Te,Qe,Mn,mt,St.data):$.isCompressedArrayTexture?k.compressedTexSubImage3D(nt,X,et,wt,Nt,Ce,Te,Qe,Mn,St.data):k.texSubImage3D(nt,X,et,wt,Nt,Ce,Te,Qe,Mn,mt,St):P.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,et,wt,Ce,Te,Mn,mt,St.data):P.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,et,wt,St.width,St.height,Mn,St.data):k.texSubImage2D(k.TEXTURE_2D,X,et,wt,Ce,Te,Mn,mt,St);k.pixelStorei(k.UNPACK_ROW_LENGTH,gi),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ct),k.pixelStorei(k.UNPACK_SKIP_PIXELS,wn),k.pixelStorei(k.UNPACK_SKIP_ROWS,vi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,en),X===0&&$.generateMipmaps&&k.generateMipmap(nt),Le.unbindTexture()},this.copyTextureToTexture3D=function(P,$,te=null,ie=null,X=0){return P.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ie=arguments[1]||null,P=arguments[2],$=arguments[3],X=arguments[4]||0),Co('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,$,te,ie,X)},this.initRenderTarget=function(P){Oe.get(P).__webglFramebuffer===void 0&&L.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),Le.unbindTexture()},this.resetState=function(){j=0,F=0,W=null,Le.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}class hy extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class PT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yf,this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,o=this.stride;a<o;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new O;class Kr{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),a=It(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),a=It(a,this.array),o=It(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return new Ni(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),o=0;t.push(0);for(let c=1;c<=e;c++)i=this.getPoint(c/e),o+=i.distanceTo(a),t.push(o),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let a=0;const o=i.length;let c;t?c=t:c=e*i[o-1];let u=0,h=o-1,p;for(;u<=h;)if(a=Math.floor(u+(h-u)/2),p=i[a]-c,p<0)u=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,i[a]===c)return a/(o-1);const g=i[a],_=i[a+1]-g,M=(c-g)/_;return(a+M)/(o-1)}getTangent(e,t){let a=e-1e-4,o=e+1e-4;a<0&&(a=0),o>1&&(o=1);const c=this.getPoint(a),u=this.getPoint(o),h=t||(c.isVector2?new Pe:new O);return h.copy(u).sub(c).normalize(),h}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new O,a=[],o=[],c=[],u=new O,h=new zt;for(let M=0;M<=e;M++){const w=M/e;a[M]=this.getTangentAt(w,new O)}o[0]=new O,c[0]=new O;let p=Number.MAX_VALUE;const g=Math.abs(a[0].x),f=Math.abs(a[0].y),_=Math.abs(a[0].z);g<=p&&(p=g,i.set(1,0,0)),f<=p&&(p=f,i.set(0,1,0)),_<=p&&i.set(0,0,1),u.crossVectors(a[0],i).normalize(),o[0].crossVectors(a[0],u),c[0].crossVectors(a[0],o[0]);for(let M=1;M<=e;M++){if(o[M]=o[M-1].clone(),c[M]=c[M-1].clone(),u.crossVectors(a[M-1],a[M]),u.length()>Number.EPSILON){u.normalize();const w=Math.acos(an(a[M-1].dot(a[M]),-1,1));o[M].applyMatrix4(h.makeRotationAxis(u,w))}c[M].crossVectors(a[M],o[M])}if(t===!0){let M=Math.acos(an(o[0].dot(o[e]),-1,1));M/=e,a[0].dot(u.crossVectors(o[0],o[e]))>0&&(M=-M);for(let w=1;w<=e;w++)o[w].applyMatrix4(h.makeRotationAxis(a[w],M*w)),c[w].crossVectors(a[w],o[w])}return{tangents:a,normals:o,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Kf extends qi{constructor(e=0,t=0,i=1,a=1,o=0,c=Math.PI*2,u=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=o,this.aEndAngle=c,this.aClockwise=u,this.aRotation=h}getPoint(e,t=new Pe){const i=t,a=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const c=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=a;for(;o>a;)o-=a;o<Number.EPSILON&&(c?o=0:o=a),this.aClockwise===!0&&!c&&(o===a?o=-a:o=o-a);const u=this.aStartAngle+e*o;let h=this.aX+this.xRadius*Math.cos(u),p=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const g=Math.cos(this.aRotation),f=Math.sin(this.aRotation),_=h-this.aX,M=p-this.aY;h=_*g-M*f+this.aX,p=_*f+M*g+this.aY}return i.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class NT extends Kf{constructor(e,t,i,a,o,c){super(e,t,i,i,a,o,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Jf(){let r=0,e=0,t=0,i=0;function a(o,c,u,h){r=o,e=u,t=-3*o+3*c-2*u-h,i=2*o-2*c+u+h}return{initCatmullRom:function(o,c,u,h,p){a(c,u,p*(u-o),p*(h-c))},initNonuniformCatmullRom:function(o,c,u,h,p,g,f){let _=(c-o)/p-(u-o)/(p+g)+(u-c)/g,M=(u-c)/g-(h-c)/(g+f)+(h-u)/f;_*=g,M*=g,a(c,u,_,M)},calc:function(o){const c=o*o,u=c*o;return r+e*o+t*c+i*u}}}const Mc=new O,_h=new Jf,xh=new Jf,Sh=new Jf;class LT extends qi{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new O){const i=t,a=this.points,o=a.length,c=(o-(this.closed?0:1))*e;let u=Math.floor(c),h=c-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/o)+1)*o:h===0&&u===o-1&&(u=o-2,h=1);let p,g;this.closed||u>0?p=a[(u-1)%o]:(Mc.subVectors(a[0],a[1]).add(a[0]),p=Mc);const f=a[u%o],_=a[(u+1)%o];if(this.closed||u+2<o?g=a[(u+2)%o]:(Mc.subVectors(a[o-1],a[o-2]).add(a[o-1]),g=Mc),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let w=Math.pow(p.distanceToSquared(f),M),b=Math.pow(f.distanceToSquared(_),M),S=Math.pow(_.distanceToSquared(g),M);b<1e-4&&(b=1),w<1e-4&&(w=b),S<1e-4&&(S=b),_h.initNonuniformCatmullRom(p.x,f.x,_.x,g.x,w,b,S),xh.initNonuniformCatmullRom(p.y,f.y,_.y,g.y,w,b,S),Sh.initNonuniformCatmullRom(p.z,f.z,_.z,g.z,w,b,S)}else this.curveType==="catmullrom"&&(_h.initCatmullRom(p.x,f.x,_.x,g.x,this.tension),xh.initCatmullRom(p.y,f.y,_.y,g.y,this.tension),Sh.initCatmullRom(p.z,f.z,_.z,g.z,this.tension));return i.set(_h.calc(h),xh.calc(h),Sh.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new O().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fv(r,e,t,i,a){const o=(i-e)*.5,c=(a-t)*.5,u=r*r,h=r*u;return(2*t-2*i+o+c)*h+(-3*t+3*i-2*o-c)*u+o*r+t}function DT(r,e){const t=1-r;return t*t*e}function IT(r,e){return 2*(1-r)*r*e}function kT(r,e){return r*r*e}function Lo(r,e,t,i){return DT(r,e)+IT(r,t)+kT(r,i)}function UT(r,e){const t=1-r;return t*t*t*e}function OT(r,e){const t=1-r;return 3*t*t*r*e}function FT(r,e){return 3*(1-r)*r*r*e}function BT(r,e){return r*r*r*e}function Do(r,e,t,i,a){return UT(r,e)+OT(r,t)+FT(r,i)+BT(r,a)}class fy extends qi{constructor(e=new Pe,t=new Pe,i=new Pe,a=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new Pe){const i=t,a=this.v0,o=this.v1,c=this.v2,u=this.v3;return i.set(Do(e,a.x,o.x,c.x,u.x),Do(e,a.y,o.y,c.y,u.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zT extends qi{constructor(e=new O,t=new O,i=new O,a=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new O){const i=t,a=this.v0,o=this.v1,c=this.v2,u=this.v3;return i.set(Do(e,a.x,o.x,c.x,u.x),Do(e,a.y,o.y,c.y,u.y),Do(e,a.z,o.z,c.z,u.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class py extends qi{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jT extends qi{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class my extends qi{constructor(e=new Pe,t=new Pe,i=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Pe){const i=t,a=this.v0,o=this.v1,c=this.v2;return i.set(Lo(e,a.x,o.x,c.x),Lo(e,a.y,o.y,c.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class HT extends qi{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,a=this.v0,o=this.v1,c=this.v2;return i.set(Lo(e,a.x,o.x,c.x),Lo(e,a.y,o.y,c.y),Lo(e,a.z,o.z,c.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gy extends qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){const i=t,a=this.points,o=(a.length-1)*e,c=Math.floor(o),u=o-c,h=a[c===0?c:c-1],p=a[c],g=a[c>a.length-2?a.length-1:c+1],f=a[c>a.length-3?a.length-1:c+2];return i.set(Fv(u,h.x,p.x,g.x,f.x),Fv(u,h.y,p.y,g.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new Pe().fromArray(a))}return this}}var Sf=Object.freeze({__proto__:null,ArcCurve:NT,CatmullRomCurve3:LT,CubicBezierCurve:fy,CubicBezierCurve3:zT,EllipseCurve:Kf,LineCurve:py,LineCurve3:jT,QuadraticBezierCurve:my,QuadraticBezierCurve3:HT,SplineCurve:gy});class VT extends qi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sf[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let o=0;for(;o<a.length;){if(a[o]>=i){const c=a[o]-i,u=this.curves[o],h=u.getLength(),p=h===0?0:1-c/h;return u.getPointAt(p,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,o=this.curves;a<o.length;a++){const c=o[a],u=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(u);for(let p=0;p<h.length;p++){const g=h[p];i&&i.equals(g)||(t.push(g),i=g)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new Sf[a.type]().fromJSON(a))}return this}}class Bo extends VT{constructor(e){super(),this.type="Path",this.currentPoint=new Pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new py(this.currentPoint.clone(),new Pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const o=new my(this.currentPoint.clone(),new Pe(e,t),new Pe(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,o,c){const u=new fy(this.currentPoint.clone(),new Pe(e,t),new Pe(i,a),new Pe(o,c));return this.curves.push(u),this.currentPoint.set(o,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new gy(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,o,c){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+u,t+h,i,a,o,c),this}absarc(e,t,i,a,o,c){return this.absellipse(e,t,i,i,a,o,c),this}ellipse(e,t,i,a,o,c,u,h){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+p,t+g,i,a,o,c,u,h),this}absellipse(e,t,i,a,o,c,u,h){const p=new Kf(e,t,i,a,o,c,u,h);if(this.curves.length>0){const f=p.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}const wc=new O,Ec=new O,Mh=new O,bc=new mi;class GT extends ri{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),o=Math.cos(Ca*t),c=e.getIndex(),u=e.getAttribute("position"),h=c?c.count:u.count,p=[0,0,0],g=["a","b","c"],f=new Array(3),_={},M=[];for(let w=0;w<h;w+=3){c?(p[0]=c.getX(w),p[1]=c.getX(w+1),p[2]=c.getX(w+2)):(p[0]=w,p[1]=w+1,p[2]=w+2);const{a:b,b:S,c:y}=bc;if(b.fromBufferAttribute(u,p[0]),S.fromBufferAttribute(u,p[1]),y.fromBufferAttribute(u,p[2]),bc.getNormal(Mh),f[0]=`${Math.round(b.x*a)},${Math.round(b.y*a)},${Math.round(b.z*a)}`,f[1]=`${Math.round(S.x*a)},${Math.round(S.y*a)},${Math.round(S.z*a)}`,f[2]=`${Math.round(y.x*a)},${Math.round(y.y*a)},${Math.round(y.z*a)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let T=0;T<3;T++){const C=(T+1)%3,R=f[T],Y=f[C],j=bc[g[T]],F=bc[g[C]],W=`${R}_${Y}`,D=`${Y}_${R}`;D in _&&_[D]?(Mh.dot(_[D].normal)<=o&&(M.push(j.x,j.y,j.z),M.push(F.x,F.y,F.z)),_[D]=null):W in _||(_[W]={index0:p[T],index1:p[C],normal:Mh.clone()})}}for(const w in _)if(_[w]){const{index0:b,index1:S}=_[w];wc.fromBufferAttribute(u,b),Ec.fromBufferAttribute(u,S),M.push(wc.x,wc.y,wc.z),M.push(Ec.x,Ec.y,Ec.z)}this.setAttribute("position",new pn(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Rs extends Bo{constructor(e){super(e),this.uuid=Wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,a=this.holes.length;i<a;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(new Bo().fromJSON(a))}return this}}const WT={triangulate:function(r,e,t=2){const i=e&&e.length,a=i?e[0]*t:r.length;let o=vy(r,0,a,t,!0);const c=[];if(!o||o.next===o.prev)return c;let u,h,p,g,f,_,M;if(i&&(o=KT(r,e,o,t)),r.length>80*t){u=p=r[0],h=g=r[1];for(let w=t;w<a;w+=t)f=r[w],_=r[w+1],f<u&&(u=f),_<h&&(h=_),f>p&&(p=f),_>g&&(g=_);M=Math.max(p-u,g-h),M=M!==0?32767/M:0}return zo(o,c,t,u,h,M,0),c}};function vy(r,e,t,i,a){let o,c;if(a===oA(r,e,t,i)>0)for(o=e;o<t;o+=i)c=Bv(o,r[o],r[o+1],c);else for(o=t-i;o>=e;o-=i)c=Bv(o,r[o],r[o+1],c);return c&&nu(c,c.next)&&(Ho(c),c=c.next),c}function Ls(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(nu(t,t.next)||qt(t.prev,t,t.next)===0)){if(Ho(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function zo(r,e,t,i,a,o,c){if(!r)return;!c&&o&&tA(r,i,a,o);let u=r,h,p;for(;r.prev!==r.next;){if(h=r.prev,p=r.next,o?XT(r,i,a,o):$T(r)){e.push(h.i/t|0),e.push(r.i/t|0),e.push(p.i/t|0),Ho(r),r=p.next,u=p.next;continue}if(r=p,r===u){c?c===1?(r=qT(Ls(r),e,t),zo(r,e,t,i,a,o,2)):c===2&&YT(r,e,t,i,a,o):zo(Ls(r),e,t,i,a,o,1);break}}}function $T(r){const e=r.prev,t=r,i=r.next;if(qt(e,t,i)>=0)return!1;const a=e.x,o=t.x,c=i.x,u=e.y,h=t.y,p=i.y,g=a<o?a<c?a:c:o<c?o:c,f=u<h?u<p?u:p:h<p?h:p,_=a>o?a>c?a:c:o>c?o:c,M=u>h?u>p?u:p:h>p?h:p;let w=i.next;for(;w!==e;){if(w.x>=g&&w.x<=_&&w.y>=f&&w.y<=M&&Ea(a,u,o,h,c,p,w.x,w.y)&&qt(w.prev,w,w.next)>=0)return!1;w=w.next}return!0}function XT(r,e,t,i){const a=r.prev,o=r,c=r.next;if(qt(a,o,c)>=0)return!1;const u=a.x,h=o.x,p=c.x,g=a.y,f=o.y,_=c.y,M=u<h?u<p?u:p:h<p?h:p,w=g<f?g<_?g:_:f<_?f:_,b=u>h?u>p?u:p:h>p?h:p,S=g>f?g>_?g:_:f>_?f:_,y=Mf(M,w,e,t,i),T=Mf(b,S,e,t,i);let C=r.prevZ,R=r.nextZ;for(;C&&C.z>=y&&R&&R.z<=T;){if(C.x>=M&&C.x<=b&&C.y>=w&&C.y<=S&&C!==a&&C!==c&&Ea(u,g,h,f,p,_,C.x,C.y)&&qt(C.prev,C,C.next)>=0||(C=C.prevZ,R.x>=M&&R.x<=b&&R.y>=w&&R.y<=S&&R!==a&&R!==c&&Ea(u,g,h,f,p,_,R.x,R.y)&&qt(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;C&&C.z>=y;){if(C.x>=M&&C.x<=b&&C.y>=w&&C.y<=S&&C!==a&&C!==c&&Ea(u,g,h,f,p,_,C.x,C.y)&&qt(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;R&&R.z<=T;){if(R.x>=M&&R.x<=b&&R.y>=w&&R.y<=S&&R!==a&&R!==c&&Ea(u,g,h,f,p,_,R.x,R.y)&&qt(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function qT(r,e,t){let i=r;do{const a=i.prev,o=i.next.next;!nu(a,o)&&yy(a,i,i.next,o)&&jo(a,o)&&jo(o,a)&&(e.push(a.i/t|0),e.push(i.i/t|0),e.push(o.i/t|0),Ho(i),Ho(i.next),i=r=o),i=i.next}while(i!==r);return Ls(i)}function YT(r,e,t,i,a,o){let c=r;do{let u=c.next.next;for(;u!==c.prev;){if(c.i!==u.i&&rA(c,u)){let h=_y(c,u);c=Ls(c,c.next),h=Ls(h,h.next),zo(c,e,t,i,a,o,0),zo(h,e,t,i,a,o,0);return}u=u.next}c=c.next}while(c!==r)}function KT(r,e,t,i){const a=[];let o,c,u,h,p;for(o=0,c=e.length;o<c;o++)u=e[o]*i,h=o<c-1?e[o+1]*i:r.length,p=vy(r,u,h,i,!1),p===p.next&&(p.steiner=!0),a.push(iA(p));for(a.sort(JT),o=0;o<a.length;o++)t=ZT(a[o],t);return t}function JT(r,e){return r.x-e.x}function ZT(r,e){const t=QT(r,e);if(!t)return e;const i=_y(t,r);return Ls(i,i.next),Ls(t,t.next)}function QT(r,e){let t=e,i=-1/0,a;const o=r.x,c=r.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const _=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(_<=o&&_>i&&(i=_,a=t.x<t.next.x?t:t.next,_===o))return a}t=t.next}while(t!==e);if(!a)return null;const u=a,h=a.x,p=a.y;let g=1/0,f;t=a;do o>=t.x&&t.x>=h&&o!==t.x&&Ea(c<p?o:i,c,h,p,c<p?i:o,c,t.x,t.y)&&(f=Math.abs(c-t.y)/(o-t.x),jo(t,r)&&(f<g||f===g&&(t.x>a.x||t.x===a.x&&eA(a,t)))&&(a=t,g=f)),t=t.next;while(t!==u);return a}function eA(r,e){return qt(r.prev,r,e.prev)<0&&qt(e.next,r,r.next)<0}function tA(r,e,t,i){let a=r;do a.z===0&&(a.z=Mf(a.x,a.y,e,t,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==r);a.prevZ.nextZ=null,a.prevZ=null,nA(a)}function nA(r){let e,t,i,a,o,c,u,h,p=1;do{for(t=r,r=null,o=null,c=0;t;){for(c++,i=t,u=0,e=0;e<p&&(u++,i=i.nextZ,!!i);e++);for(h=p;u>0||h>0&&i;)u!==0&&(h===0||!i||t.z<=i.z)?(a=t,t=t.nextZ,u--):(a=i,i=i.nextZ,h--),o?o.nextZ=a:r=a,a.prevZ=o,o=a;t=i}o.nextZ=null,p*=2}while(c>1);return r}function Mf(r,e,t,i,a){return r=(r-t)*a|0,e=(e-i)*a|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function iA(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ea(r,e,t,i,a,o,c,u){return(a-c)*(e-u)>=(r-c)*(o-u)&&(r-c)*(i-u)>=(t-c)*(e-u)&&(t-c)*(o-u)>=(a-c)*(i-u)}function rA(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!sA(r,e)&&(jo(r,e)&&jo(e,r)&&aA(r,e)&&(qt(r.prev,r,e.prev)||qt(r,e.prev,e))||nu(r,e)&&qt(r.prev,r,r.next)>0&&qt(e.prev,e,e.next)>0)}function qt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function nu(r,e){return r.x===e.x&&r.y===e.y}function yy(r,e,t,i){const a=Ac(qt(r,e,t)),o=Ac(qt(r,e,i)),c=Ac(qt(t,i,r)),u=Ac(qt(t,i,e));return!!(a!==o&&c!==u||a===0&&Tc(r,t,e)||o===0&&Tc(r,i,e)||c===0&&Tc(t,r,i)||u===0&&Tc(t,e,i))}function Tc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ac(r){return r>0?1:r<0?-1:0}function sA(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&yy(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function jo(r,e){return qt(r.prev,r,r.next)<0?qt(r,e,r.next)>=0&&qt(r,r.prev,e)>=0:qt(r,e,r.prev)<0||qt(r,r.next,e)<0}function aA(r,e){let t=r,i=!1;const a=(r.x+e.x)/2,o=(r.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&a<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function _y(r,e){const t=new wf(r.i,r.x,r.y),i=new wf(e.i,e.x,e.y),a=r.next,o=e.prev;return r.next=e,e.prev=r,t.next=a,a.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function Bv(r,e,t,i){const a=new wf(r,e,t);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function Ho(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function wf(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function oA(r,e,t,i){let a=0;for(let o=e,c=t-i;o<t;o+=i)a+=(r[c]-r[o])*(r[o+1]+r[c+1]),c=o;return a}class Io{static area(e){const t=e.length;let i=0;for(let a=t-1,o=0;o<t;a=o++)i+=e[a].x*e[o].y-e[o].x*e[a].y;return i*.5}static isClockWise(e){return Io.area(e)<0}static triangulateShape(e,t){const i=[],a=[],o=[];zv(e),jv(i,e);let c=e.length;t.forEach(zv);for(let h=0;h<t.length;h++)a.push(c),c+=t[h].length,jv(i,t[h]);const u=WT.triangulate(i,a);for(let h=0;h<u.length;h+=3)o.push(u.slice(h,h+3));return o}}function zv(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function jv(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Zf extends ri{constructor(e=new Rs([new Pe(.5,.5),new Pe(-.5,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,a=[],o=[];for(let u=0,h=e.length;u<h;u++){const p=e[u];c(p)}this.setAttribute("position",new pn(a,3)),this.setAttribute("uv",new pn(o,2)),this.computeVertexNormals();function c(u){const h=[],p=t.curveSegments!==void 0?t.curveSegments:12,g=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let _=t.bevelEnabled!==void 0?t.bevelEnabled:!0,M=t.bevelThickness!==void 0?t.bevelThickness:.2,w=t.bevelSize!==void 0?t.bevelSize:M-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:lA;let C,R=!1,Y,j,F,W;y&&(C=y.getSpacedPoints(g),R=!0,_=!1,Y=y.computeFrenetFrames(g,!1),j=new O,F=new O,W=new O),_||(S=0,M=0,w=0,b=0);const D=u.extractPoints(p);let N=D.shape;const B=D.holes;if(!Io.isClockWise(N)){N=N.reverse();for(let ve=0,Ae=B.length;ve<Ae;ve++){const k=B[ve];Io.isClockWise(k)&&(B[ve]=k.reverse())}}const Q=Io.triangulateShape(N,B),le=N;for(let ve=0,Ae=B.length;ve<Ae;ve++){const k=B[ve];N=N.concat(k)}function pe(ve,Ae,k){return Ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),ve.clone().addScaledVector(Ae,k)}const se=N.length,ce=Q.length;function H(ve,Ae,k){let Ze,Me,He;const Le=ve.x-Ae.x,it=ve.y-Ae.y,Oe=k.x-ve.x,L=k.y-ve.y,A=Le*Le+it*it,K=Le*L-it*Oe;if(Math.abs(K)>Number.EPSILON){const de=Math.sqrt(A),ye=Math.sqrt(Oe*Oe+L*L),fe=Ae.x-it/de,qe=Ae.y+Le/de,Ie=k.x-L/ye,Ve=k.y+Oe/ye,pt=((Ie-fe)*L-(Ve-qe)*Oe)/(Le*L-it*Oe);Ze=fe+Le*pt-ve.x,Me=qe+it*pt-ve.y;const we=Ze*Ze+Me*Me;if(we<=2)return new Pe(Ze,Me);He=Math.sqrt(we/2)}else{let de=!1;Le>Number.EPSILON?Oe>Number.EPSILON&&(de=!0):Le<-Number.EPSILON?Oe<-Number.EPSILON&&(de=!0):Math.sign(it)===Math.sign(L)&&(de=!0),de?(Ze=-it,Me=Le,He=Math.sqrt(A)):(Ze=Le,Me=it,He=Math.sqrt(A/2))}return new Pe(Ze/He,Me/He)}const oe=[];for(let ve=0,Ae=le.length,k=Ae-1,Ze=ve+1;ve<Ae;ve++,k++,Ze++)k===Ae&&(k=0),Ze===Ae&&(Ze=0),oe[ve]=H(le[ve],le[k],le[Ze]);const re=[];let U,ne=oe.concat();for(let ve=0,Ae=B.length;ve<Ae;ve++){const k=B[ve];U=[];for(let Ze=0,Me=k.length,He=Me-1,Le=Ze+1;Ze<Me;Ze++,He++,Le++)He===Me&&(He=0),Le===Me&&(Le=0),U[Ze]=H(k[Ze],k[He],k[Le]);re.push(U),ne=ne.concat(U)}for(let ve=0;ve<S;ve++){const Ae=ve/S,k=M*Math.cos(Ae*Math.PI/2),Ze=w*Math.sin(Ae*Math.PI/2)+b;for(let Me=0,He=le.length;Me<He;Me++){const Le=pe(le[Me],oe[Me],Ze);ge(Le.x,Le.y,-k)}for(let Me=0,He=B.length;Me<He;Me++){const Le=B[Me];U=re[Me];for(let it=0,Oe=Le.length;it<Oe;it++){const L=pe(Le[it],U[it],Ze);ge(L.x,L.y,-k)}}}const Be=w+b;for(let ve=0;ve<se;ve++){const Ae=_?pe(N[ve],ne[ve],Be):N[ve];R?(F.copy(Y.normals[0]).multiplyScalar(Ae.x),j.copy(Y.binormals[0]).multiplyScalar(Ae.y),W.copy(C[0]).add(F).add(j),ge(W.x,W.y,W.z)):ge(Ae.x,Ae.y,0)}for(let ve=1;ve<=g;ve++)for(let Ae=0;Ae<se;Ae++){const k=_?pe(N[Ae],ne[Ae],Be):N[Ae];R?(F.copy(Y.normals[ve]).multiplyScalar(k.x),j.copy(Y.binormals[ve]).multiplyScalar(k.y),W.copy(C[ve]).add(F).add(j),ge(W.x,W.y,W.z)):ge(k.x,k.y,f/g*ve)}for(let ve=S-1;ve>=0;ve--){const Ae=ve/S,k=M*Math.cos(Ae*Math.PI/2),Ze=w*Math.sin(Ae*Math.PI/2)+b;for(let Me=0,He=le.length;Me<He;Me++){const Le=pe(le[Me],oe[Me],Ze);ge(Le.x,Le.y,f+k)}for(let Me=0,He=B.length;Me<He;Me++){const Le=B[Me];U=re[Me];for(let it=0,Oe=Le.length;it<Oe;it++){const L=pe(Le[it],U[it],Ze);R?ge(L.x,L.y+C[g-1].y,C[g-1].x+k):ge(L.x,L.y,f+k)}}}Z(),he();function Z(){const ve=a.length/3;if(_){let Ae=0,k=se*Ae;for(let Ze=0;Ze<ce;Ze++){const Me=Q[Ze];Ne(Me[2]+k,Me[1]+k,Me[0]+k)}Ae=g+S*2,k=se*Ae;for(let Ze=0;Ze<ce;Ze++){const Me=Q[Ze];Ne(Me[0]+k,Me[1]+k,Me[2]+k)}}else{for(let Ae=0;Ae<ce;Ae++){const k=Q[Ae];Ne(k[2],k[1],k[0])}for(let Ae=0;Ae<ce;Ae++){const k=Q[Ae];Ne(k[0]+se*g,k[1]+se*g,k[2]+se*g)}}i.addGroup(ve,a.length/3-ve,0)}function he(){const ve=a.length/3;let Ae=0;be(le,Ae),Ae+=le.length;for(let k=0,Ze=B.length;k<Ze;k++){const Me=B[k];be(Me,Ae),Ae+=Me.length}i.addGroup(ve,a.length/3-ve,1)}function be(ve,Ae){let k=ve.length;for(;--k>=0;){const Ze=k;let Me=k-1;Me<0&&(Me=ve.length-1);for(let He=0,Le=g+S*2;He<Le;He++){const it=se*He,Oe=se*(He+1),L=Ae+Ze+it,A=Ae+Me+it,K=Ae+Me+Oe,de=Ae+Ze+Oe;je(L,A,K,de)}}}function ge(ve,Ae,k){h.push(ve),h.push(Ae),h.push(k)}function Ne(ve,Ae,k){Je(ve),Je(Ae),Je(k);const Ze=a.length/3,Me=T.generateTopUV(i,a,Ze-3,Ze-2,Ze-1);yt(Me[0]),yt(Me[1]),yt(Me[2])}function je(ve,Ae,k,Ze){Je(ve),Je(Ae),Je(Ze),Je(Ae),Je(k),Je(Ze);const Me=a.length/3,He=T.generateSideWallUV(i,a,Me-6,Me-3,Me-2,Me-1);yt(He[0]),yt(He[1]),yt(He[3]),yt(He[1]),yt(He[2]),yt(He[3])}function Je(ve){a.push(h[ve*3+0]),a.push(h[ve*3+1]),a.push(h[ve*3+2])}function yt(ve){o.push(ve.x),o.push(ve.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return cA(t,i,e)}static fromJSON(e,t){const i=[];for(let o=0,c=e.shapes.length;o<c;o++){const u=t[e.shapes[o]];i.push(u)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new Sf[a.type]().fromJSON(a)),new Zf(i,e.options)}}const lA={generateTopUV:function(r,e,t,i,a){const o=e[t*3],c=e[t*3+1],u=e[i*3],h=e[i*3+1],p=e[a*3],g=e[a*3+1];return[new Pe(o,c),new Pe(u,h),new Pe(p,g)]},generateSideWallUV:function(r,e,t,i,a,o){const c=e[t*3],u=e[t*3+1],h=e[t*3+2],p=e[i*3],g=e[i*3+1],f=e[i*3+2],_=e[a*3],M=e[a*3+1],w=e[a*3+2],b=e[o*3],S=e[o*3+1],y=e[o*3+2];return Math.abs(u-g)<Math.abs(c-p)?[new Pe(c,1-h),new Pe(p,1-f),new Pe(_,1-w),new Pe(b,1-y)]:[new Pe(u,1-h),new Pe(g,1-f),new Pe(M,1-w),new Pe(S,1-y)]}};function cA(r,e,t){if(t.shapes=[],Array.isArray(r))for(let i=0,a=r.length;i<a;i++){const o=r[i];t.shapes.push(o.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Gc extends ri{constructor(e=.5,t=1,i=32,a=1,o=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:o,thetaLength:c},i=Math.max(3,i),a=Math.max(1,a);const u=[],h=[],p=[],g=[];let f=e;const _=(t-e)/a,M=new O,w=new Pe;for(let b=0;b<=a;b++){for(let S=0;S<=i;S++){const y=o+S/i*c;M.x=f*Math.cos(y),M.y=f*Math.sin(y),h.push(M.x,M.y,M.z),p.push(0,0,1),w.x=(M.x/t+1)/2,w.y=(M.y/t+1)/2,g.push(w.x,w.y)}f+=_}for(let b=0;b<a;b++){const S=b*(i+1);for(let y=0;y<i;y++){const T=y+S,C=T,R=T+i+1,Y=T+i+2,j=T+1;u.push(C,R,j),u.push(R,Y,j)}}this.setIndex(u),this.setAttribute("position",new pn(h,3)),this.setAttribute("normal",new pn(p,3)),this.setAttribute("uv",new pn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class uA extends ri{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,a=new O,o=new O;if(e.index!==null){const c=e.attributes.position,u=e.index;let h=e.groups;h.length===0&&(h=[{start:0,count:u.count,materialIndex:0}]);for(let p=0,g=h.length;p<g;++p){const f=h[p],_=f.start,M=f.count;for(let w=_,b=_+M;w<b;w+=3)for(let S=0;S<3;S++){const y=u.getX(w+S),T=u.getX(w+(S+1)%3);a.fromBufferAttribute(c,y),o.fromBufferAttribute(c,T),Hv(a,o,i)===!0&&(t.push(a.x,a.y,a.z),t.push(o.x,o.y,o.z))}}}else{const c=e.attributes.position;for(let u=0,h=c.count/3;u<h;u++)for(let p=0;p<3;p++){const g=3*u+p,f=3*u+(p+1)%3;a.fromBufferAttribute(c,g),o.fromBufferAttribute(c,f),Hv(a,o,i)===!0&&(t.push(a.x,a.y,a.z),t.push(o.x,o.y,o.z))}}this.setAttribute("position",new pn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Hv(r,e,t){const i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)===!0||t.has(a)===!0?!1:(t.add(i),t.add(a),!0)}class dA extends Ha{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Et(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class ba extends Ha{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=q0,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qf extends Sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class hA extends Qf{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wh=new zt,Vv=new O,Gv=new O;class xy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qf,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Vv.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vv),Gv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gv),t.updateMatrixWorld(),wh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wv=new zt,Ro=new O,Eh=new O;class fA extends xy{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Ro.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ro),Eh.copy(i.position),Eh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Eh),i.updateMatrixWorld(),a.makeTranslation(-Ro.x,-Ro.y,-Ro.z),Wv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wv)}}class pA extends Qf{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new fA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mA extends xy{constructor(){super(new ay(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gA extends Qf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new mA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vA extends ri{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ef extends PT{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const $v=new zt;class yA{constructor(e,t,i=0,a=1/0){this.ray=new Wf(e,t),this.near=i,this.far=a,this.camera=null,this.layers=new $f,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $v.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($v),this}intersectObject(e,t=!0,i=[]){return bf(e,this,i,t),i.sort(Xv),i}intersectObjects(e,t=!0,i=[]){for(let a=0,o=e.length;a<o;a++)bf(e[a],this,i,t);return i.sort(Xv),i}}function Xv(r,e){return r.distance-e.distance}function bf(r,e,t,i){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(a=!1),a===!0&&i===!0){const o=r.children;for(let c=0,u=o.length;c<u;c++)bf(o[c],e,t,!0)}}class qv{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(an(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Yv=new O,Rc=new O;class _A{constructor(e=new O,t=new O){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Yv.subVectors(e,this.start),Rc.subVectors(this.end,this.start);const i=Rc.dot(Rc);let o=Rc.dot(Yv)/i;return t&&(o=an(o,0,1)),o}closestPointToPoint(e,t,i){const a=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(a).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class xA extends Ds{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);const Kv={type:"change"},ep={type:"start"},Sy={type:"end"},Cc=new Wf,Jv=new qr,SA=Math.cos(70*Gf.DEG2RAD),rn=new O,$n=2*Math.PI,Ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bh=1e-6;class MA extends xA{constructor(e,t=null){super(e,t),this.state=Ut.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ta.ROTATE,MIDDLE:Ta.DOLLY,RIGHT:Ta.PAN},this.touches={ONE:Sa.ROTATE,TWO:Sa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new es,this._lastTargetPosition=new O,this._quat=new es().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qv,this._sphericalDelta=new qv,this._scale=1,this._panOffset=new O,this._rotateStart=new Pe,this._rotateEnd=new Pe,this._rotateDelta=new Pe,this._panStart=new Pe,this._panEnd=new Pe,this._panDelta=new Pe,this._dollyStart=new Pe,this._dollyEnd=new Pe,this._dollyDelta=new Pe,this._dollyDirection=new O,this._mouse=new Pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=EA.bind(this),this._onPointerDown=wA.bind(this),this._onPointerUp=bA.bind(this),this._onContextMenu=LA.bind(this),this._onMouseWheel=RA.bind(this),this._onKeyDown=CA.bind(this),this._onTouchStart=PA.bind(this),this._onTouchMove=NA.bind(this),this._onMouseDown=TA.bind(this),this._onMouseMove=AA.bind(this),this._interceptControlDown=DA.bind(this),this._interceptControlUp=IA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kv),this.update(),this.state=Ut.NONE}update(e=null){const t=this.object.position;rn.copy(t).sub(this.target),rn.applyQuaternion(this._quat),this._spherical.setFromVector3(rn),this.autoRotate&&this.state===Ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=$n:i>Math.PI&&(i-=$n),a<-Math.PI?a+=$n:a>Math.PI&&(a-=$n),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(rn.setFromSpherical(this._spherical),rn.applyQuaternion(this._quatInverse),t.copy(this.target).add(rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=rn.length();c=this._clampDistance(u*this._scale);const h=u-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),o=!!h}else if(this.object.isOrthographicCamera){const u=new O(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=h!==this.object.zoom;const p=new O(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(u),this.object.updateMatrixWorld(),c=rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Cc.origin.copy(this.object.position),Cc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cc.direction))<SA?this.object.lookAt(this.target):(Jv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cc.intersectPlane(Jv,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bh||this._lastTargetPosition.distanceToSquared(this.target)>bh?(this.dispatchEvent(Kv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$n/60*this.autoRotateSpeed*e:$n/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){rn.setFromMatrixColumn(t,0),rn.multiplyScalar(-e),this._panOffset.add(rn)}_panUp(e,t){this.screenSpacePanning===!0?rn.setFromMatrixColumn(t,1):(rn.setFromMatrixColumn(t,0),rn.crossVectors(this.object.up,rn)),rn.multiplyScalar(e),this._panOffset.add(rn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;rn.copy(a).sub(this.target);let o=rn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,o=t-i.top,c=i.width,u=i.height;this._mouse.x=a/c*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($n*this._rotateDelta.x/t.clientHeight),this._rotateUp($n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp($n*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-$n*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft($n*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-$n*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(i*i+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($n*this._rotateDelta.x/t.clientHeight),this._rotateUp($n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function wA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function EA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function bA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sy),this.state=Ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function TA(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ta.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ut.DOLLY;break;case Ta.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ut.ROTATE}break;case Ta.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ut.PAN}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(ep)}function AA(r){switch(this.state){case Ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function RA(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ut.NONE||(r.preventDefault(),this.dispatchEvent(ep),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Sy))}function CA(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function PA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Sa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ut.TOUCH_ROTATE;break;case Sa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ut.TOUCH_PAN;break;default:this.state=Ut.NONE}break;case 2:switch(this.touches.TWO){case Sa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ut.TOUCH_DOLLY_PAN;break;case Sa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ut.TOUCH_DOLLY_ROTATE;break;default:this.state=Ut.NONE}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(ep)}function NA(r){switch(this._trackPointer(r),this.state){case Ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ut.NONE}}function LA(r){this.enabled!==!1&&r.preventDefault()}function DA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function IA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class kA extends hy{constructor(){super();const e=new Is;e.deleteAttribute("uv");const t=new ba({side:On}),i=new ba,a=new pA(16777215,900,28,2);a.position.set(.418,16.199,.3),this.add(a);const o=new Ft(e,t);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const c=new Ft(e,i);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);const u=new Ft(e,i);u.position.set(-5.607,-.754,-.758),u.rotation.set(0,.994,0),u.scale.set(1.97,1.534,3.955),this.add(u);const h=new Ft(e,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);const p=new Ft(e,i);p.position.set(-2.017,.018,6.124),p.rotation.set(0,.333,0),p.scale.set(2.002,4.566,2.064),this.add(p);const g=new Ft(e,i);g.position.set(2.291,-.756,-2.621),g.rotation.set(0,-.286,0),g.scale.set(1.546,1.552,1.496),this.add(g);const f=new Ft(e,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const _=new Ft(e,_a(50));_.position.set(-16.116,14.37,8.208),_.scale.set(.1,2.428,2.739),this.add(_);const M=new Ft(e,_a(50));M.position.set(-16.109,18.021,-8.207),M.scale.set(.1,2.425,2.751),this.add(M);const w=new Ft(e,_a(17));w.position.set(14.904,12.198,-1.832),w.scale.set(.15,4.265,6.331),this.add(w);const b=new Ft(e,_a(43));b.position.set(-.462,8.89,14.52),b.scale.set(4.38,5.441,.088),this.add(b);const S=new Ft(e,_a(20));S.position.set(3.235,11.486,-12.541),S.scale.set(2.5,2,.1),this.add(S);const y=new Ft(e,_a(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function _a(r){const e=new eu;return e.color.setScalar(r),e}De.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Pe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};qn.line={uniforms:Xf.merge([De.common,De.fog,De.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class My extends gr{static get type(){return"LineMaterial"}constructor(e){super({uniforms:Xf.clone(qn.line.uniforms),vertexShader:qn.line.vertexShader,fragmentShader:qn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Zv=new $i,Pc=new O;class wy extends vA{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new pn(e,3)),this.setAttribute("uv",new pn(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Ef(t,6,1);return this.setAttribute("instanceStart",new Kr(i,3,0)),this.setAttribute("instanceEnd",new Kr(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Ef(t,6,1);return this.setAttribute("instanceColorStart",new Kr(i,3,0)),this.setAttribute("instanceColorEnd",new Kr(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new uA(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Zv.setFromBufferAttribute(t),this.boundingBox.union(Zv))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let a=0;for(let o=0,c=e.count;o<c;o++)Pc.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(Pc)),Pc.fromBufferAttribute(t,o),a=Math.max(a,i.distanceToSquared(Pc));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const Th=new Rt,Qv=new O,e0=new O,vn=new Rt,yn=new Rt,Fi=new Rt,Ah=new O,Rh=new zt,xn=new _A,t0=new O,Nc=new $i,Lc=new ja,Bi=new Rt;let ji,Cs;function n0(r,e,t){return Bi.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),Bi.multiplyScalar(1/Bi.w),Bi.x=Cs/t.width,Bi.y=Cs/t.height,Bi.applyMatrix4(r.projectionMatrixInverse),Bi.multiplyScalar(1/Bi.w),Math.abs(Math.max(Bi.x,Bi.y))}function UA(r,e){const t=r.matrixWorld,i=r.geometry,a=i.attributes.instanceStart,o=i.attributes.instanceEnd,c=Math.min(i.instanceCount,a.count);for(let u=0,h=c;u<h;u++){xn.start.fromBufferAttribute(a,u),xn.end.fromBufferAttribute(o,u),xn.applyMatrix4(t);const p=new O,g=new O;ji.distanceSqToSegment(xn.start,xn.end,g,p),g.distanceTo(p)<Cs*.5&&e.push({point:g,pointOnLine:p,distance:ji.origin.distanceTo(g),object:r,face:null,faceIndex:u,uv:null,uv1:null})}}function OA(r,e,t){const i=e.projectionMatrix,o=r.material.resolution,c=r.matrixWorld,u=r.geometry,h=u.attributes.instanceStart,p=u.attributes.instanceEnd,g=Math.min(u.instanceCount,h.count),f=-e.near;ji.at(1,Fi),Fi.w=1,Fi.applyMatrix4(e.matrixWorldInverse),Fi.applyMatrix4(i),Fi.multiplyScalar(1/Fi.w),Fi.x*=o.x/2,Fi.y*=o.y/2,Fi.z=0,Ah.copy(Fi),Rh.multiplyMatrices(e.matrixWorldInverse,c);for(let _=0,M=g;_<M;_++){if(vn.fromBufferAttribute(h,_),yn.fromBufferAttribute(p,_),vn.w=1,yn.w=1,vn.applyMatrix4(Rh),yn.applyMatrix4(Rh),vn.z>f&&yn.z>f)continue;if(vn.z>f){const C=vn.z-yn.z,R=(vn.z-f)/C;vn.lerp(yn,R)}else if(yn.z>f){const C=yn.z-vn.z,R=(yn.z-f)/C;yn.lerp(vn,R)}vn.applyMatrix4(i),yn.applyMatrix4(i),vn.multiplyScalar(1/vn.w),yn.multiplyScalar(1/yn.w),vn.x*=o.x/2,vn.y*=o.y/2,yn.x*=o.x/2,yn.y*=o.y/2,xn.start.copy(vn),xn.start.z=0,xn.end.copy(yn),xn.end.z=0;const b=xn.closestPointToPointParameter(Ah,!0);xn.at(b,t0);const S=Gf.lerp(vn.z,yn.z,b),y=S>=-1&&S<=1,T=Ah.distanceTo(t0)<Cs*.5;if(y&&T){xn.start.fromBufferAttribute(h,_),xn.end.fromBufferAttribute(p,_),xn.start.applyMatrix4(c),xn.end.applyMatrix4(c);const C=new O,R=new O;ji.distanceSqToSegment(xn.start,xn.end,R,C),t.push({point:R,pointOnLine:C,distance:ji.origin.distanceTo(R),object:r,face:null,faceIndex:_,uv:null,uv1:null})}}}class FA extends Ft{constructor(e=new wy,t=new My({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,a=new Float32Array(2*t.count);for(let c=0,u=0,h=t.count;c<h;c++,u+=2)Qv.fromBufferAttribute(t,c),e0.fromBufferAttribute(i,c),a[u]=u===0?0:a[u-1],a[u+1]=a[u]+Qv.distanceTo(e0);const o=new Ef(a,2,1);return e.setAttribute("instanceDistanceStart",new Kr(o,1,0)),e.setAttribute("instanceDistanceEnd",new Kr(o,1,1)),this}raycast(e,t){const i=this.material.worldUnits,a=e.camera;a===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const o=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ji=e.ray;const c=this.matrixWorld,u=this.geometry,h=this.material;Cs=h.linewidth+o,u.boundingSphere===null&&u.computeBoundingSphere(),Lc.copy(u.boundingSphere).applyMatrix4(c);let p;if(i)p=Cs*.5;else{const f=Math.max(a.near,Lc.distanceToPoint(ji.origin));p=n0(a,f,h.resolution)}if(Lc.radius+=p,ji.intersectsSphere(Lc)===!1)return;u.boundingBox===null&&u.computeBoundingBox(),Nc.copy(u.boundingBox).applyMatrix4(c);let g;if(i)g=Cs*.5;else{const f=Math.max(a.near,Nc.distanceToPoint(ji.origin));g=n0(a,f,h.resolution)}Nc.expandByScalar(g),ji.intersectsBox(Nc)!==!1&&(i?UA(this,t):OA(this,a,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Th),this.material.uniforms.resolution.value.set(Th.z,Th.w))}}const BA=40,zA=20;function Na(r,e,t,i,a,o){return r.moveTo(e+o.bl,t),r.lineTo(i-o.br,t),o.br&&r.absarc(i-o.br,t+o.br,o.br,-Math.PI/2,0,!1),r.lineTo(i,a-o.tr),o.tr&&r.absarc(i-o.tr,a-o.tr,o.tr,0,Math.PI/2,!1),r.lineTo(e+o.tl,a),o.tl&&r.absarc(e+o.tl,a-o.tl,o.tl,Math.PI/2,Math.PI,!1),r.lineTo(e,t+o.bl),o.bl&&r.absarc(e+o.bl,t+o.bl,o.bl,Math.PI,Math.PI*1.5,!1),r}const zc=r=>({bl:r,br:r,tr:r,tl:r});function Pn(r,e,t){const i=new Bo;return i.absarc(r,e,t,0,Math.PI*2,!0),i}function Wc(r,e,t,i,a){const o=new Bo,c=i/2,u=t/2-c;return a==="x"?(o.moveTo(r-u,e-c),o.lineTo(r+u,e-c),o.absarc(r+u,e,c,-Math.PI/2,Math.PI/2,!1),o.lineTo(r-u,e+c),o.absarc(r-u,e,c,Math.PI/2,Math.PI*1.5,!1)):(o.moveTo(r+c,e-u),o.lineTo(r+c,e+u),o.absarc(r,e+u,c,0,Math.PI,!1),o.lineTo(r-c,e-u),o.absarc(r,e-u,c,Math.PI,Math.PI*2,!1)),o}function Tf(r,e){return new Zf(r,{depth:e,bevelEnabled:!1,curveSegments:BA})}function $c(r,e){const t=Tf(r,e);return t.rotateX(-Math.PI/2),t}function Af(r,e=72){const t=[],i=[],a=[];let o=0;for(let u=0;u<r.length-1;u++){const[h,p]=r[u],[g,f]=r[u+1],_=g-h,M=f-p,w=Math.hypot(_,M);if(w<1e-9)continue;const b=M/w,S=-_/w;for(let y=0;y<=e;y++){const T=y/e*Math.PI*2,C=Math.cos(T),R=Math.sin(T);t.push(h*C,p,h*R,g*C,f,g*R),i.push(b*C,S,b*R,b*C,S,b*R)}for(let y=0;y<e;y++){const T=o+y*2,C=T+1,R=T+2,Y=T+3;a.push(T,C,R,C,Y,R)}o+=(e+1)*2}const c=new ri;return c.setAttribute("position",new pn(t,3)),c.setAttribute("normal",new pn(i,3)),c.setIndex(a),c}function iu(r,e){const t=new wa,i=[],a=[],o=[...new Set(r.map(u=>u.material))];o.forEach(u=>{u.polygonOffset=!0,u.polygonOffsetFactor=1,u.polygonOffsetUnits=1});const c=new My({color:1120288,linewidth:1.15,transparent:!0,opacity:.7,worldUnits:!1});for(const{geometry:u,material:h}of r){const p=new Ft(u,h);p.castShadow=!0,p.receiveShadow=!0,t.add(p),i.push(p);const g=new GT(u,zA),f=new FA(new wy().fromEdgesGeometry(g),c);g.dispose(),f.renderOrder=1,t.add(f),a.push(f)}return{group:t,meshes:i,edges:a,edgeMaterial:c,materials:o,darkFinish:e}}const Vo={clearAnodize:()=>new ba({color:11779271,metalness:.7,roughness:.36}),blackAnodize:()=>new ba({color:3093821,metalness:.55,roughness:.46}),stainless:()=>new ba({color:12370633,metalness:1,roughness:.22}),keySteel:()=>new ba({color:8226191,metalness:.9,roughness:.35})};function jA(){const r=Vo.clearAnodize(),e=new Rs;Na(e,-60,-40,60,32,{bl:6,br:6,tr:0,tl:0}),e.holes.push(Pn(-40,14,3.3),Pn(40,14,3.3),Wc(-38,-32,16,6.6,"x"),Wc(38,-32,16,6.6,"x"));const t=new Rs;Na(t,-60,0,60,100,{bl:0,br:0,tr:10,tl:10});const i=47.14/2;t.holes.push(Pn(0,58,38.1/2),Pn(-i,58-i,2.75),Pn(i,58-i,2.75),Pn(i,58+i,2.75),Pn(-i,58+i,2.75));const a=Tf(t,8);a.translate(0,0,-40);const o=new Rs;o.moveTo(32,8),o.lineTo(32,60),o.lineTo(-10,8),o.lineTo(32,8);const c=u=>{const h=Tf(o,3);return h.rotateY(Math.PI/2),h.translate(u,0,0),h};return iu([{geometry:$c(e,8),material:r},{geometry:a,material:r},{geometry:c(48),material:r},{geometry:c(-51),material:r}],!1)}function HA(){const r=Vo.blackAnodize(),e=new Rs;Na(e,-100,-70,100,70,zc(8));const t=47.14/2;return e.holes.push(Pn(-88,-58,4.5),Pn(88,-58,4.5),Pn(88,58,4.5),Pn(-88,58,4.5),Pn(0,0,21),Pn(-t,-t,2.75),Pn(t,-t,2.75),Pn(t,t,2.75),Pn(-t,t,2.75),Wc(-60,0,30,9,"y"),Wc(60,0,30,9,"y")),iu([{geometry:$c(e,10),material:r}],!0)}function VA(){const r=Vo.stainless(),t=Af([[0,-75],[5,-75],[6,-74],[6,-45],[10,-45],[10,-38],[7.5,-38],[7.5,-24],[7,-24],[7,40],[6.3,40],[6.3,41.5],[7.5,41.5],[7.5,52],[6,52],[6,74],[5,75],[0,75]]);t.rotateZ(-Math.PI/2);const i=new Is(14,4,4);return i.translate(64,6,0),iu([{geometry:t,material:r},{geometry:i,material:Vo.keySteel()}],!1)}function GA(){const r=Vo.blackAnodize(),e=new Rs;Na(e,-45,-30,45,30,zc(6));const t=new Bo;Na(t,-42,-27,42,27,zc(3)),e.holes.push(t);const i=new Rs;Na(i,-42,-27,42,27,zc(3));const a=(c,u)=>{const h=Af([[1.6,40],[1.6,4],[4,4],[4,40],[1.6,40]],40);return h.translate(c,0,u),h},o=Af([[4.5,30],[7,30],[7,34],[4.5,34],[4.5,30]],48);return o.rotateX(Math.PI/2),o.translate(20,22,0),iu([{geometry:$c(e,40),material:r},{geometry:$c(i,4),material:r},{geometry:a(-37,-22),material:r},{geometry:a(37,-22),material:r},{geometry:a(37,22),material:r},{geometry:a(-37,22),material:r},{geometry:o,material:r}],!0)}const WA={bracket:jA,plate:HA,shaft:VA,housing:GA};function $A(r){return WA[r]()}function i0(r){r.meshes.forEach(e=>e.geometry.dispose()),r.edges.forEach(e=>e.geometry.dispose()),r.edgeMaterial.dispose(),r.materials.forEach(e=>e.dispose())}const Gr=.01,Ey=new O(.95,.78,1.28).normalize(),XA={fit:Ey,front:new O(0,.14,1).normalize(),top:new O(1e-4,1,.02).normalize(),right:new O(1,.14,1e-4).normalize()},Ch="http://www.w3.org/2000/svg",qA=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;class YA{constructor(e,t){this.container=e,this.onSelect=t,this.scene=new hy,this.camera=new ii(30,1,.01,200),this.root=new wa,this.model=null,this.kind=null,this.keyLight=new gA(16777215,1.6),this.fill=new hA(15265527,3752525,.55),this.pins=[],this.pinEls=new Map,this.occluded=new Map,this.selected=null,this.tween=null,this.raf=0,this.frame=0,this.dirty=!0,this.dark=!1,this.radius=1,this.center=new O,this.raycaster=new yA,this.pointerDown=null,this.glow=0,this.toneColors={},this.loop=()=>{this.raf=requestAnimationFrame(this.loop),this.frame++;const c=performance.now();if(this.tween){const h=Math.min(1,(c-this.tween.start)/this.tween.duration),p=qA(h);this.camera.position.lerpVectors(this.tween.from.pos,this.tween.to.pos,p),this.controls.target.lerpVectors(this.tween.from.target,this.tween.to.target,p),this.dirty=!0,h>=1&&(this.tween=null)}const u=this.controls.update();if(this.selected){const h=1+.18*Math.sin(c/260);this.halo.scale.setScalar(h),this.halo.material.opacity=.16+.08*Math.sin(c/260),this.dirty=!0}if(this.glow>0&&this.model){this.glow=Math.max(0,this.glow-.012);const h=this.toneColors.resolved;this.model.materials.forEach(p=>{p.emissive.copy(h),p.emissiveIntensity=.35*Math.sin(this.glow*Math.PI)}),this.dirty=!0}!this.dirty&&!u||((u||this.frame%6===0||this.dirty)&&(this.frame%3===0||!u)&&this.updateOcclusion(),this.renderer.render(this.scene,this.camera),this.updateOverlay(),this.dirty=!1)},this.renderer=new CT({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=ni,this.renderer.toneMapping=U0,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=I0,this.renderer.domElement.className="viewer-canvas",this.renderer.domElement.setAttribute("aria-label","3D model of the part with feedback pins"),e.appendChild(this.renderer.domElement);const i=new _f(this.renderer);this.scene.environment=i.fromScene(new kA,.04).texture,i.dispose(),this.keyLight.castShadow=!0,this.keyLight.shadow.mapSize.set(2048,2048),this.keyLight.shadow.bias=-4e-4,this.keyLight.shadow.radius=4,this.scene.add(this.keyLight,this.keyLight.target,this.fill,this.root),this.ground=new Ft(new Wo(40,40),new dA({opacity:.16})),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.scene.add(this.ground);const a=c=>new eu({color:16777215,transparent:!0,opacity:c,depthWrite:!1,side:zi,polygonOffset:!0,polygonOffsetFactor:-4});this.marker=new Ft(new Gc(6.2*Gr,7.6*Gr,48),a(.95)),this.halo=new Ft(new Gc(7.6*Gr,12*Gr,48),a(.22)),this.marker.visible=this.halo.visible=!1,this.marker.renderOrder=this.halo.renderOrder=2,this.scene.add(this.marker,this.halo),this.controls=new MA(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.09,this.controls.rotateSpeed=.8,this.controls.zoomSpeed=.9,this.controls.addEventListener("start",()=>{this.tween=null}),this.controls.addEventListener("change",()=>{this.dirty=!0}),this.overlay=document.createElement("div"),this.overlay.className="viewer-overlay",this.svg=document.createElementNS(Ch,"svg"),this.svg.setAttribute("class","viewer-leaders"),this.overlay.appendChild(this.svg),e.appendChild(this.overlay);const o=this.renderer.domElement;o.addEventListener("pointerdown",c=>{this.pointerDown={x:c.clientX,y:c.clientY}}),o.addEventListener("pointerup",c=>{const u=this.pointerDown;this.pointerDown=null,u&&Math.hypot(c.clientX-u.x,c.clientY-u.y)<4&&this.onSelect(null)}),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.readTones(),this.loop()}setModel(e){if(e===this.kind)return;this.kind=e,this.model&&(this.root.remove(this.model.group),i0(this.model));const t=$A(e);this.model=t,this.root.add(t.group),this.root.scale.setScalar(Gr),this.root.position.set(0,0,0),this.root.updateMatrixWorld(!0);const i=new $i().setFromObject(t.group),a=i.getCenter(new O);this.root.position.set(-a.x,-i.min.y,-a.z),this.root.updateMatrixWorld(!0);const c=new $i().setFromObject(t.group).getBoundingSphere(new ja);this.center.copy(c.center),this.radius=c.radius;const u=this.radius;this.keyLight.position.set(u*1.6,u*3.2,u*2.2),this.keyLight.target.position.copy(this.center);const h=this.keyLight.shadow.camera;h.left=h.bottom=-u*1.6,h.right=h.top=u*1.6,h.near=.01,h.far=u*8,h.updateProjectionMatrix(),this.controls.minDistance=u*.7,this.controls.maxDistance=u*7,t.edgeMaterial.resolution.set(Math.max(1,this.container.clientWidth),Math.max(1,this.container.clientHeight)),this.applyTheme();const p=this.viewPose("fit");this.camera.position.copy(p.target).addScaledVector(Ey,p.pos.distanceTo(p.target)*1.45),this.controls.target.copy(p.target),this.animateTo(p,900)}setPins(e){this.pins=e;const t=new Set(e.map(i=>i.id));for(const[i,a]of this.pinEls)t.has(i)||(a.wrap.remove(),a.line.remove(),a.dot.remove(),this.pinEls.delete(i));for(const i of e){let a=this.pinEls.get(i.id);if(!a){const c=document.createElement("div");c.className="balloon-wrap";const u=document.createElement("button");u.type="button",u.addEventListener("click",g=>{g.stopPropagation(),this.onSelect(i.id)}),u.addEventListener("pointerdown",g=>g.stopPropagation()),c.appendChild(u),this.overlay.appendChild(c);const h=document.createElementNS(Ch,"line"),p=document.createElementNS(Ch,"circle");p.setAttribute("r","3"),this.svg.append(h,p),a={wrap:c,btn:u,line:h,dot:p},this.pinEls.set(i.id,a)}const o=this.pins.find(c=>c.id===i.id);a.btn.className=`balloon tone-${o.tone}${o.closed?" is-closed":""}${o.ai?" is-ai":""}`,a.btn.innerHTML=`<span>${o.number}</span>${o.ai?'<i class="balloon-ai" aria-hidden="true"></i>':""}`,a.btn.setAttribute("aria-label",`Feedback ${o.number}: ${o.title}`),a.btn.title=`${o.number}. ${o.title}`,a.line.setAttribute("class",`leader tone-${o.tone}`),a.dot.setAttribute("class",`anchor tone-${o.tone}`)}this.syncSelection(),this.dirty=!0}setSelected(e,t){this.selected=e,this.syncSelection(),e&&t&&this.focus(e),this.dirty=!0}setTheme(e){this.dark=e,this.applyTheme()}view(e){this.animateTo(this.viewPose(e),700)}celebrate(){this.glow=1,this.dirty=!0}dispose(){cancelAnimationFrame(this.raf),this.resizeObserver.disconnect(),this.controls.dispose(),this.model&&i0(this.model),this.renderer.dispose(),this.overlay.remove(),this.renderer.domElement.remove()}readTones(){const e=getComputedStyle(this.container),t=(i,a)=>new Et((e.getPropertyValue(i)||a).trim());this.toneColors={critical:t("--crit","#cf3a34"),high:t("--high","#db6a1f"),medium:t("--med","#c08a0c"),low:t("--low","#6b788b"),resolved:t("--pass","#148a58"),waived:t("--waived","#6d5fc7"),dismissed:t("--faint","#95a1b1")}}applyTheme(){var a;this.readTones();const e=((a=this.model)==null?void 0:a.darkFinish)??!1;let t=856859,i=.72;this.dark&&e?(t=11122890,i=.5):this.dark?(t=395533,i=.85):e&&(t=263946,i=.85),this.model&&(this.model.edgeMaterial.color.setHex(t),this.model.edgeMaterial.opacity=i),this.ground.material.opacity=this.dark?.55:.26,this.fill.intensity=this.dark?.45:.5,this.keyLight.intensity=this.dark?1.7:2.1,this.scene.environmentIntensity=this.dark?.85:.8,this.syncSelection(),this.dirty=!0}applyViewOffset(){const e=Math.max(1,this.container.clientWidth),t=Math.max(1,this.container.clientHeight),i=e>720,a=t<520;this.camera.setViewOffset(e,t,i?e*(a?.09:.075):0,i?t*(a?.085:.05):0,e,t)}resize(){var i;const e=Math.max(1,this.container.clientWidth),t=Math.max(1,this.container.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.applyViewOffset(),this.camera.updateProjectionMatrix(),(i=this.model)==null||i.edgeMaterial.resolution.set(e,t),this.svg.setAttribute("viewBox",`0 0 ${e} ${t}`),this.dirty=!0}fitDistance(){const e=Gf.degToRad(this.camera.fov),t=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return this.radius/Math.sin(Math.min(e,t)/2)*1.12}viewPose(e){const t=this.center.clone();return{pos:t.clone().addScaledVector(XA[e],this.fitDistance()),target:t}}animateTo(e,t){var a;if((a=window.matchMedia)==null?void 0:a.call(window,"(prefers-reduced-motion: reduce)").matches){this.camera.position.copy(e.pos),this.controls.target.copy(e.target),this.dirty=!0;return}this.tween={from:{pos:this.camera.position.clone(),target:this.controls.target.clone()},to:e,start:performance.now(),duration:t}}worldPin(e){const t=this.root.localToWorld(new O(e.x,e.y,e.z)),i=new O(e.nx,e.ny,e.nz).normalize();return{p:t,n:i}}focus(e){const t=this.pins.find(p=>p.id===e);if(!t)return;const{p:i,n:a}=this.worldPin(t),o=this.camera.position.clone().sub(this.controls.target).normalize(),c=a.clone().multiplyScalar(.55).add(o.multiplyScalar(.8)).add(new O(0,.2,0)).normalize(),u=i.clone().lerp(this.center,.45),h=u.clone().addScaledVector(c,this.fitDistance()*.86);this.animateTo({pos:h,target:u},750)}syncSelection(){const e=this.selected?this.pins.find(o=>o.id===this.selected):void 0;for(const[o,c]of this.pinEls)c.wrap.classList.toggle("is-selected",o===this.selected);if(!e){this.marker.visible=this.halo.visible=!1;return}const{p:t,n:i}=this.worldPin(e),a=new es().setFromUnitVectors(new O(0,0,1),i);for(const o of[this.marker,this.halo])o.visible=!0,o.position.copy(t).addScaledVector(i,.25*Gr),o.quaternion.copy(a),o.material.color.copy(this.toneColors[e.tone]??new Et("#2448d0"))}project(e,t,i){const a=e.clone().project(this.camera);return{x:(a.x+1)*.5*t,y:(1-a.y)*.5*i,behind:a.z>1}}updateOcclusion(){if(!this.model)return;const e=this.camera.position;for(const t of this.pins){const{p:i}=this.worldPin(t),a=i.clone().sub(e),o=a.length();this.raycaster.set(e,a.normalize()),this.raycaster.near=0,this.raycaster.far=o-.6*Gr;const c=this.raycaster.intersectObjects(this.model.meshes,!1).length>0;this.occluded.set(t.id,c)}}updateOverlay(){const e=this.container.clientWidth,t=this.container.clientHeight,i=[];for(const a of this.pins){const o=this.pinEls.get(a.id);if(!o)continue;const{p:c,n:u}=this.worldPin(a),h=this.project(c,e,t),p=this.project(c.clone().addScaledVector(u,20*Gr),e,t);let g=p.x-h.x,f=p.y-h.y;const _=Math.hypot(g,f);_<6?(g=.72,f=-.7):(g/=_,f/=_);const M=a.id===this.selected?58:46;i.push({pin:a,els:o,ax:h.x,ay:h.y,bx:h.x+g*M,by:h.y+f*M,hidden:h.behind})}for(let a=0;a<5;a++)for(let o=0;o<i.length;o++)for(let c=o+1;c<i.length;c++){const u=i[o],h=i[c],p=h.bx-u.bx,g=h.by-u.by,f=Math.hypot(p,g)||.01,_=31;if(f<_){const M=(_-f)/2;u.bx-=p/f*M,u.by-=g/f*M,h.bx+=p/f*M,h.by+=g/f*M}}for(const a of i){const o=Math.max(16,Math.min(e-16,a.bx)),c=Math.max(16,Math.min(t-16,a.by)),u=a.hidden,h=this.occluded.get(a.pin.id)??!1;a.els.wrap.style.transform=`translate3d(${o.toFixed(1)}px, ${c.toFixed(1)}px, 0)`,a.els.wrap.classList.toggle("is-occluded",h&&a.pin.id!==this.selected),a.els.wrap.style.visibility=u?"hidden":"";const p=a.ax-o,g=a.ay-c,f=Math.hypot(p,g)||1,_=a.pin.id===this.selected?16:13;a.els.line.setAttribute("x1",(o+p/f*_).toFixed(1)),a.els.line.setAttribute("y1",(c+g/f*_).toFixed(1)),a.els.line.setAttribute("x2",a.ax.toFixed(1)),a.els.line.setAttribute("y2",a.ay.toFixed(1)),a.els.dot.setAttribute("cx",a.ax.toFixed(1)),a.els.dot.setAttribute("cy",a.ay.toFixed(1));const M=h&&a.pin.id!==this.selected?" is-occluded":"";a.els.line.setAttribute("class",`leader tone-${a.pin.tone}${M}`),a.els.dot.setAttribute("class",`anchor tone-${a.pin.tone}${M}`),a.els.line.style.visibility=a.els.dot.style.visibility=u?"hidden":""}}}const r0=["8","7","6","5","4","3","2","1"],s0=["D","C","B","A"];function KA(){return m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"zones zones-top","aria-hidden":"true",children:r0.map(r=>m.jsx("span",{children:r},r))}),m.jsx("div",{className:"zones zones-bottom","aria-hidden":"true",children:r0.map(r=>m.jsx("span",{children:r},r))}),m.jsx("div",{className:"zones zones-left","aria-hidden":"true",children:s0.map(r=>m.jsx("span",{children:r},r))}),m.jsx("div",{className:"zones zones-right","aria-hidden":"true",children:s0.map(r=>m.jsx("span",{children:r},r))})]})}function JA({part:r,workspace:e}){const t=r.gate.outcome;return m.jsxs("div",{className:"titleblock","aria-label":"Title block",children:[m.jsxs("div",{className:"tb-row tb-head",children:[m.jsxs("div",{className:"tb-cell",children:[m.jsx("span",{className:"tb-label",children:e}),m.jsx("span",{className:"tb-title",children:r.name})]}),m.jsxs("div",{className:"tb-cell tb-rev",children:[m.jsx("span",{className:"tb-label",children:"Rev"}),m.jsx("strong",{children:r.rev})]})]}),m.jsxs("div",{className:"tb-row",children:[m.jsxs("div",{className:"tb-cell",children:[m.jsx("span",{className:"tb-label",children:"Part no."}),m.jsx("span",{className:"tb-value",children:r.number})]}),m.jsxs("div",{className:"tb-cell",children:[m.jsx("span",{className:"tb-label",children:"Material"}),m.jsx("span",{className:"tb-value",children:r.material})]}),m.jsxs("div",{className:"tb-cell",children:[m.jsx("span",{className:"tb-label",children:"Finish"}),m.jsx("span",{className:"tb-value",children:r.finish})]})]}),m.jsxs("div",{className:"tb-row",children:[m.jsxs("div",{className:"tb-cell",children:[m.jsx("span",{className:"tb-label",children:"Lifecycle"}),m.jsx("span",{className:"tb-value",children:r.plmState==="RELEASED"?"RELEASED":"IN WORK"})]}),m.jsxs("div",{className:"tb-cell",children:[m.jsx("span",{className:"tb-label",children:"Gate"}),m.jsx("span",{className:`tb-value tb-gate o-${t.toLowerCase()}`,children:t})]}),m.jsxs("div",{className:"tb-cell",children:[m.jsx("span",{className:"tb-label",children:"Units"}),m.jsx("span",{className:"tb-value",children:"MM · 1:1"})]})]})]})}function ZA({part:r,fresh:e}){return m.jsxs("div",{className:`stamp${e?" is-new":""}`,"aria-label":"Released stamp","data-testid":"stamp",children:[m.jsx("span",{children:"For manufacture"}),m.jsx("strong",{children:"RELEASED"}),m.jsxs("span",{children:["Rev ",r.rev," · ",Vx(r.gate.releasedAt)," · ",r.gate.decisionId]})]})}function QA(){const r=Ee(T=>{var C;return(C=T.snap)==null?void 0:C.part}),e=Ee(T=>{var C;return((C=T.snap)==null?void 0:C.workspace.name)??""}),t=Ee(T=>T.selectedId),i=Ee(T=>T.focusToken),a=Ee(T=>T.showClosed),o=Ee(T=>T.theme),c=Ee(T=>T.stampAt),u=Ee(T=>T.select),h=Ee(T=>T.set),p=lt.useRef(null),g=lt.useRef(null);lt.useEffect(()=>{const T=new YA(p.current,C=>{C?Ee.getState().select(C,!0):Ee.getState().select(null,!1)});return g.current=T,()=>T.dispose()},[]),lt.useEffect(()=>{var T;r&&((T=g.current)==null||T.setModel(r.model))},[r==null?void 0:r.model]);const f=lt.useMemo(()=>r?r.feedback.filter(T=>T.pin&&(a||!Hi(T)||T.id===t)).map(T=>({id:T.id,number:T.number,tone:Nh(T),ai:T.source==="ai",closed:Hi(T),title:T.title,...T.pin})):[],[r,a,t]);lt.useEffect(()=>{var T;(T=g.current)==null||T.setPins(f)},[f]);const _=lt.useRef(null);lt.useEffect(()=>{var T,C;(T=g.current)==null||T.setSelected(t,!1),_.current&&!t&&((C=g.current)==null||C.view("fit")),_.current=t},[t]),lt.useEffect(()=>{var T;i&&((T=g.current)==null||T.setSelected(Ee.getState().selectedId,!0))},[i]),lt.useEffect(()=>{var T;(T=g.current)==null||T.setTheme(o==="dark")},[o]),lt.useEffect(()=>{var T,C;c&&((T=g.current)==null||T.view("fit"),(C=g.current)==null||C.celebrate())},[c]);const M=T=>{var C;return(C=g.current)==null?void 0:C.view(T)},w=(r==null?void 0:r.feedback.filter(T=>!T.pin&&(a||!Hi(T))))??[],b=(r==null?void 0:r.gate.outcome)==="RELEASED",S=!!c&&Date.now()-c<4e3,y=(r==null?void 0:r.feedback.filter(T=>T.pin&&Hi(T)).length)??0;return m.jsxs("section",{className:"sheet","aria-label":"Model view",children:[m.jsx(KA,{}),m.jsxs("div",{className:"sheet-inner",children:[m.jsx("div",{className:"viewer-host",ref:p}),m.jsxs("div",{className:"view-tools",children:[m.jsxs("button",{className:"tool-btn",onClick:()=>M("fit"),title:"Fit the part",children:[m.jsx(Lx,{})," ",m.jsx("span",{className:"label-text",children:"Fit"})]}),m.jsx("button",{className:"tool-btn",onClick:()=>M("front"),children:"Front"}),m.jsx("button",{className:"tool-btn",onClick:()=>M("top"),children:"Top"}),m.jsx("button",{className:"tool-btn",onClick:()=>M("right"),children:"Right"}),m.jsx("span",{className:"tool-sep"}),m.jsxs("button",{className:"tool-btn","aria-pressed":a,onClick:()=>h("showClosed",!a),title:"Show resolved, waived and dismissed feedback",children:[a?m.jsx(Cx,{}):m.jsx(Rx,{}),m.jsxs("span",{className:"label-text",children:["Closed (",y,")"]})]})]}),w.length>0&&m.jsx("div",{className:"sheet-notes",children:w.map(T=>m.jsxs("button",{className:`sheet-note tone-${Nh(T)}${T.id===t?" is-selected":""}`,onClick:()=>u(T.id,!1),title:T.title,children:[m.jsx(Jc,{f:T}),m.jsx("span",{className:"text",children:T.title}),m.jsx("span",{className:"where",children:T.sheetRef})]},T.id))}),m.jsx("div",{className:"viewer-hint",children:"Drag to orbit · scroll to zoom · click a balloon"}),r&&m.jsx(JA,{part:r,workspace:e}),r&&b&&m.jsx(ZA,{part:r,fresh:S})]})]})}const eR={"F-101":{resolve:"Gusset thickened to 4.0 mm in C.1; envelope re-checked against the motor."},"F-102":{resolve:"Pilot bore is now datum B; position callout updated on sheet 1."},"F-103":{waive:"Keeping the tight fit for the pilot build. Revisit at Rev D with run-out data."},"F-104":{dismiss:"Slots sit outside the clamp load path, so edge tear-out is not a risk here."},"F-105":{resolve:"Title block updated to Rev C."},"F-106":{resolve:"Inside corner opened up to R3 in C.1."},"F-301":{resolve:"Keyway root radius increased to R0.4."},"F-302":{resolve:"Bearing supplier confirmed k6 for this load case."}},tR={pass:La,fail:Kc,warn:Nf};function Rf(r,e){return r.gate.checks.some(t=>t.blocking&&t.status==="fail"&&t.itemIds.includes(e))}function nR({check:r,part:e}){const t=Ee(g=>g.select),i=Ee(g=>g.selectedId),a=Ee(g=>g.act),o=Ee(g=>g.busy),c=tR[r.status],u=e.gate.outcome==="RELEASED"||e.gate.outcome==="RELEASING",h=new Map(e.feedback.map(g=>[g.id,g]));let p=null;return r.type==="no_open_feedback"||r.type==="ai_findings_triaged"?p=m.jsx(m.Fragment,{children:r.itemIds.map(g=>{const f=h.get(g);return f?m.jsxs("button",{className:`item-row${i===g?" is-selected":""}`,onClick:()=>t(g,!0),children:[m.jsx(Jc,{f}),m.jsx("span",{className:"text",children:f.title}),r.type==="ai_findings_triaged"?m.jsxs("span",{className:"tag t-ai",children:[m.jsx(Yc,{})," Triage"]}):f.jiraKey?m.jsx(If,{f}):m.jsx(P0,{priority:f.priority})]},g):null})}):r.type==="requested_reviews_complete"?p=m.jsx(m.Fragment,{children:e.reviewers.map(g=>{const f=!!o[`nudge:${g.role}`]||!!g.nudgedAt&&g.status==="pending"&&Date.now()-Date.parse(g.nudgedAt)<15e3;return m.jsxs("div",{className:"reviewer-row",children:[m.jsxs("span",{className:"who",children:[m.jsx(Df,{person:g.person}),m.jsxs("span",{children:[g.person.name," ",m.jsxs("span",{className:"role",children:["· ",g.role]})]})]}),g.status==="complete"?m.jsxs("span",{className:"tag t-pass",children:[m.jsx(La,{})," Done"]}):u?m.jsx("span",{className:"tag",children:"Pending"}):m.jsxs("button",{className:"btn btn-sm",disabled:f,onClick:()=>a(`nudge:${g.role}`,_=>_.nudgeReviewer(e.number,g.role)),title:`Send ${g.person.name} a reminder`,children:[f?m.jsx(Gi,{className:"spin"}):m.jsx(Mx,{}),f?"Reminder sent":`Nudge · ${w0(g.due)}`]})]},g.role)})}):r.type==="integrations_in_sync"&&(p=e.deliveries.length?m.jsx(m.Fragment,{children:e.deliveries.map(g=>m.jsxs("div",{className:"delivery-row",children:[m.jsxs("div",{className:"what",children:[m.jsx("div",{children:g.label}),m.jsx("div",{className:"why",children:g.status==="dead"?`Failed after ${g.attempts} attempts: ${g.lastError}`:g.status==="retrying"?`Attempt ${g.attempts} failed (${g.lastError}). Retrying.`:g.status==="in_flight"?"Sending…":g.attempts?"Queued":"Waiting its turn"})]}),(g.status==="dead"||g.status==="retrying")&&m.jsxs("button",{className:"btn btn-sm",onClick:()=>a(`retry:${g.id}`,f=>f.retryDelivery(g.id)),children:[m.jsx(kx,{})," Retry now"]})]},g.id))}):null),m.jsxs("div",{className:`check is-${r.status}`,"data-testid":`check-${r.id}`,"data-status":r.status,children:[m.jsxs("div",{className:"check-head",children:[m.jsx("span",{className:"check-icon",children:m.jsx(c,{})}),m.jsxs("div",{children:[m.jsx("div",{className:"check-title",children:r.title}),m.jsx("div",{className:"check-summary",children:r.summary})]}),m.jsx("span",{className:`tag t-display ${r.blocking?"":"t-outline"}`,children:r.blocking?"Blocking":"Advisory"})]}),r.status!=="pass"&&p&&m.jsx("div",{className:"check-body",children:p})]})}function iR({part:r}){const e=Ee(o=>o.set),t=Ee(o=>{var c;return(c=o.snap)==null?void 0:c.workspace.policy}),i=r.gate.outcome==="RELEASED"||r.gate.outcome==="RELEASING",a=[...r.gate.checks].sort((o,c)=>Number(c.blocking)-Number(o.blocking));return m.jsxs("div",{className:"checks",children:[m.jsxs("div",{className:"checks-intro",children:[m.jsx("span",{className:"label",children:i?`Frozen at decision ${r.gate.decisionId}`:"Release checks"}),m.jsxs("button",{className:"btn btn-ghost btn-sm",onClick:()=>e("modal",{kind:"policy"}),children:[t==null?void 0:t.name," v",t==null?void 0:t.version]})]}),a.map(o=>m.jsx(nR,{check:o,part:r},o.id))]})}const rR=[{key:"all",label:"All"},{key:"open",label:"Open"},{key:"blocking",label:"Blocking"},{key:"ai",label:"AutoReview"}];function sR({part:r}){const e=Ee(c=>c.filter),t=Ee(c=>c.set),i=Ee(c=>c.select),a={all:r.feedback.length,open:r.feedback.filter(c=>!Hi(c)).length,blocking:r.feedback.filter(c=>Rf(r,c.id)).length,ai:r.feedback.filter(c=>c.source==="ai").length},o=r.feedback.filter(c=>e==="open"?!Hi(c):e==="blocking"?Rf(r,c.id):e==="ai"?c.source==="ai":!0);return m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"fb-filters",role:"tablist",children:rR.map(c=>m.jsxs("button",{className:`chip-filter${e===c.key?" is-active":""}`,onClick:()=>t("filter",c.key),children:[c.label," ",m.jsx("b",{children:a[c.key]})]},c.key))}),m.jsxs("div",{className:"fb-list",children:[o.length===0&&m.jsx("div",{className:"empty",children:"Nothing here."}),o.map(c=>m.jsxs("button",{className:`fb-row${Hi(c)?" is-closed":""}`,onClick:()=>i(c.id,!0),"data-testid":`fb-${c.id}`,children:[m.jsx(Jc,{f:c}),m.jsxs("span",{children:[m.jsx("span",{className:"fb-title",children:c.title}),m.jsxs("span",{className:"fb-meta",children:[m.jsx(P0,{priority:c.priority}),m.jsx("span",{children:c.category}),c.owner&&m.jsx("span",{children:c.owner.name}),m.jsx(If,{f:c})]})]}),m.jsx(N0,{f:c})]},c.id))]})]})}function aR({f:r,part:e}){var S;const t=Ee(y=>y.act),i=Ee(y=>y.busy),a=Ee(y=>{var T;return(T=y.snap)==null?void 0:T.workspace.policy}),[o,c]=lt.useState(null),[u,h]=lt.useState("");if(lt.useEffect(()=>{c(null),h("")},[r.id]),e.gate.outcome==="RELEASED"||e.gate.outcome==="RELEASING")return m.jsx("div",{className:"detail-actions",children:m.jsxs("div",{className:"locked-note",children:[m.jsx(S0,{})," Rev ",e.rev," is released, so its feedback is frozen. Changes go on the next revision."]})});const g=a==null?void 0:a.rules.find(y=>y.type==="no_open_feedback"&&(y.params.priorities??[]).includes(r.priority)),f=!g||g.params.allowWaiver!==!1,_=(S=eR[r.id])==null?void 0:S[o??"resolve"],M=r.jiraKey?` It's also posted on ${r.jiraKey}.`:"",w=!!i[`fb:${r.id}`],b=async y=>{await t(`fb:${r.id}`,y)!==void 0&&(c(null),h(""))};if(o){const y=o==="resolve"?"Resolution note":o==="waive"?"Why is it acceptable to release with this open?":"Why is this finding wrong or not applicable?",C=o!=="resolve"&&u.trim().length<12;return m.jsxs("div",{className:"detail-actions",children:[m.jsxs("div",{className:"form-box",children:[m.jsxs("label",{htmlFor:`note-${r.id}`,children:[y,o==="resolve"&&m.jsx("span",{className:"muted",children:" (optional)"})]}),m.jsx("textarea",{id:`note-${r.id}`,className:"textarea",autoFocus:!0,value:u,onChange:R=>h(R.target.value),placeholder:_??""}),m.jsx("div",{className:"hint",children:o==="resolve"?`Saved to the thread.${M}`:`Goes into the review record attached in Windchill.${M}`}),_&&u!==_&&m.jsxs("button",{className:"btn btn-ghost btn-sm",style:{alignSelf:"flex-start"},onClick:()=>h(_),children:[m.jsx(Ix,{})," Use suggested text"]})]}),m.jsxs("div",{className:"action-row",children:[m.jsx("button",{className:"btn",onClick:()=>c(null),children:"Cancel"}),m.jsxs("button",{className:"btn btn-primary",disabled:w||C,"data-testid":`confirm-${o}`,onClick:()=>b(R=>o==="resolve"?R.resolveFeedback(r.id,u).then(()=>!0):o==="waive"?R.waiveFeedback(r.id,u).then(()=>!0):R.triageFinding(r.id,"dismiss",u).then(()=>!0)),children:[w&&m.jsx(Gi,{className:"spin"}),o==="resolve"?"Resolve":o==="waive"?"Waive":"Dismiss finding"]})]})]})}return r.source==="ai"&&r.triage==="untriaged"?m.jsxs("div",{className:"detail-actions",children:[m.jsx("div",{className:"hint",children:"AutoReview raised this. A person decides whether it counts before it can affect the release."}),m.jsxs("div",{className:"action-row",children:[m.jsx("button",{className:"btn",onClick:()=>c("dismiss"),"data-testid":"dismiss",children:"Dismiss…"}),m.jsxs("button",{className:"btn btn-primary",disabled:w,"data-testid":"accept",onClick:()=>b(y=>y.triageFinding(r.id,"accept").then(()=>!0)),children:[w?m.jsx(Gi,{className:"spin"}):m.jsx(La,{})," Accept finding"]})]})]}):Hi(r)?m.jsx("div",{className:"detail-actions",children:m.jsx("div",{className:"action-row",children:m.jsx("button",{className:"btn",disabled:w,onClick:()=>b(y=>y.reopenFeedback(r.id).then(()=>!0)),children:"Reopen"})})}):m.jsxs("div",{className:"detail-actions",children:[!f&&m.jsxs("div",{className:"hint",children:["The release policy doesn't allow waiving ",r.priority," feedback, so this one has to be resolved."]}),m.jsxs("div",{className:"action-row",children:[m.jsx("button",{className:"btn",disabled:!f,onClick:()=>c("waive"),"data-testid":"waive",children:"Waive…"}),m.jsxs("button",{className:"btn btn-primary",onClick:()=>c("resolve"),"data-testid":"resolve",children:[m.jsx(La,{})," Resolve…"]})]})]})}function oR({f:r,part:e}){var a,o,c;const t=Ee(u=>u.select),i=Rf(e,r.id);return m.jsxs("div",{className:"detail","data-testid":"feedback-detail",children:[m.jsxs("div",{className:"detail-bar",children:[m.jsxs("button",{className:"btn btn-ghost btn-sm",onClick:()=>t(null,!1),children:[m.jsx(Pf,{})," All feedback"]}),m.jsx("span",{style:{flex:1}}),m.jsx("span",{className:"mono muted",children:r.id})]}),m.jsxs("div",{className:"detail-main",children:[m.jsxs("div",{className:"detail-tags",children:[m.jsx(N0,{f:r}),m.jsx("span",{className:`tag t-${{critical:"crit",high:"high",medium:"med",low:"low"}[r.priority]}`,children:r.priority[0].toUpperCase()+r.priority.slice(1)}),m.jsx("span",{className:"tag",children:r.category}),r.source==="ai"&&m.jsxs("span",{className:"tag t-ai",children:[m.jsx(Yc,{})," AutoReview"]}),i&&m.jsx("span",{className:"tag t-crit t-display",children:"Blocks release"})]}),m.jsxs("h3",{className:"detail-title",children:[m.jsx(Jc,{f:r}),m.jsx("span",{children:r.title})]}),m.jsx("p",{className:"detail-body",children:r.body}),r.citation&&m.jsxs("div",{className:"citation",children:[m.jsx(qc,{}),m.jsxs("span",{children:["Cites ",r.citation]})]}),m.jsxs("dl",{className:"meta-grid",children:[m.jsx("dt",{children:"Owner"}),m.jsx("dd",{children:m.jsx(zg,{person:r.owner})}),m.jsx("dt",{children:"Raised by"}),m.jsxs("dd",{children:[m.jsx(zg,{person:r.author,sub:(a=r.author)!=null&&a.external?m.jsx("span",{className:"tag t-med",children:r.author.org}):void 0}),m.jsx("span",{className:"muted",children:xa(r.createdAt)})]}),m.jsx("dt",{children:"Location"}),m.jsx("dd",{children:r.pin?"Pinned on the model":r.sheetRef??"Whole part"}),(r.jiraKey||r.syncState!=="none")&&m.jsxs(m.Fragment,{children:[m.jsx("dt",{children:"Jira"}),m.jsxs("dd",{children:[m.jsx(If,{f:r}),r.jiraStatus&&m.jsx("span",{className:"muted",children:r.jiraStatus})]})]}),r.status==="resolved"&&m.jsxs(m.Fragment,{children:[m.jsx("dt",{children:"Resolved"}),m.jsxs("dd",{children:[r.resolvedBy," · ",xa(r.resolvedAt)]})]}),r.status==="waived"&&m.jsxs(m.Fragment,{children:[m.jsx("dt",{children:"Waiver"}),m.jsxs("dd",{children:[(o=r.waivedBy)==null?void 0:o.name,": “",r.waiverReason,"”"]})]}),r.status==="dismissed"&&m.jsxs(m.Fragment,{children:[m.jsx("dt",{children:"Dismissed"}),m.jsxs("dd",{children:[(c=r.dismissedBy)==null?void 0:c.name,": “",r.dismissReason,"”"]})]})]}),r.thread.length>0&&m.jsxs("div",{className:"thread",children:[m.jsx("span",{className:"label",children:"Discussion"}),r.thread.map((u,h)=>u.kind==="system"?m.jsxs("div",{className:"thread-item is-system",children:[m.jsx("span",{className:"sys-glyph",children:m.jsx("i",{})}),m.jsxs("span",{children:[u.text," ",m.jsxs("span",{className:"muted",children:["· ",xa(u.at)]})]})]},h):m.jsxs("div",{className:"thread-item",children:[m.jsx(Df,{person:u.author}),m.jsxs("div",{children:[m.jsxs("div",{className:"who",children:[m.jsx("b",{children:u.authorLabel}),m.jsx("span",{children:xa(u.at)})]}),m.jsx("p",{children:u.text})]})]},h))]})]}),m.jsx(aR,{f:r,part:e})]})}function lR({part:r}){const e=Ee(t=>t.set);return m.jsxs("div",{className:"record",children:[m.jsxs("section",{children:[m.jsx("h4",{className:"label",children:"Gate decisions"}),r.decisions.length===0&&m.jsxs("p",{className:"muted",children:["No promotion requests yet. When Windchill asks to release Rev ",r.rev,", the gate's answer is recorded here."]}),r.decisions.map(t=>m.jsxs("div",{className:"decision",children:[m.jsxs("div",{className:"decision-head",children:[m.jsx("span",{className:"id",children:t.id}),m.jsx("span",{className:`tag t-display ${t.outcome==="approved"?"t-pass":"t-crit"}`,children:t.outcome}),t.promotionRequestId&&m.jsx("span",{className:"mono muted",children:t.promotionRequestId}),m.jsx("span",{className:"when",children:Da(t.at)})]}),t.outcome==="rejected"?m.jsx("ul",{children:t.checks.filter(i=>i.status==="fail").map(i=>m.jsxs("li",{children:[i.title,": ",i.summary]},i.id))}):m.jsxs("div",{className:"hint",children:["All blocking checks passed",t.requestedBy?`. Requested by ${t.requestedBy}.`:"."]}),m.jsx("div",{className:"hash",children:E0(t.snapshotHash)}),t.hasRecord&&m.jsxs("button",{className:"btn btn-sm",style:{alignSelf:"flex-start"},onClick:()=>e("modal",{kind:"record",decisionId:t.id}),children:[m.jsx(qc,{})," Open review record"]})]},t.id))]}),m.jsxs("section",{children:[m.jsx("h4",{className:"label",children:"Audit trail"}),r.audit.length===0&&m.jsx("p",{className:"muted",children:"Nothing recorded on this revision yet."}),m.jsx("div",{className:"audit",children:r.audit.map(t=>m.jsxs("div",{className:"audit-item",children:[m.jsx("i",{}),m.jsxs("div",{children:[m.jsxs("div",{className:"what",children:[m.jsx("b",{children:t.actor})," ",t.action.replace("."," ").replace("_"," ")," ",m.jsx("span",{className:"mono",children:t.entityId})]}),t.detail&&m.jsx("div",{className:"detail-line",children:t.detail}),m.jsx("div",{className:"when",children:Da(t.at)})]})]},t.id))})]})]})}function cR(){const r=Ee(u=>{var h;return(h=u.snap)==null?void 0:h.part}),e=Ee(u=>u.rightTab),t=Ee(u=>u.set),i=Ee(u=>u.selectedId),a=lt.useMemo(()=>(r==null?void 0:r.feedback.find(u=>u.id===i))??null,[r,i]);if(!r)return m.jsx("aside",{className:"side app-side"});const o=r.gate.checks.filter(u=>u.blocking&&u.status==="fail").length,c=r.feedback.filter(u=>!Hi(u)).length;return m.jsxs("aside",{className:"side app-side","aria-label":"Release checks and feedback",children:[m.jsxs("div",{className:"tabs",role:"tablist",children:[m.jsxs("button",{className:`tab${e==="checks"?" is-active":""}`,onClick:()=>t("rightTab","checks"),role:"tab",children:["Checks ",m.jsx("span",{className:`tab-count${o?" is-alert":""}`,children:o?`${o} failing`:"all pass"})]}),m.jsxs("button",{className:`tab${e==="feedback"?" is-active":""}`,onClick:()=>t("rightTab","feedback"),role:"tab",children:["Feedback ",m.jsx("span",{className:"tab-count",children:c})]}),m.jsxs("button",{className:`tab${e==="record"?" is-active":""}`,onClick:()=>t("rightTab","record"),role:"tab",children:["Record ",m.jsx("span",{className:"tab-count",children:r.decisions.length})]})]}),m.jsxs("div",{className:"side-body",children:[e==="checks"&&m.jsx(iR,{part:r}),e==="feedback"&&(a?m.jsx(oR,{f:a,part:r}):m.jsx(sR,{part:r})),e==="record"&&m.jsx(lR,{part:r})]})]})}const uR={ok:La,error:Kc,warn:Nf,info:_0};function by(){const r=Ee(t=>t.toasts),e=Ee(t=>t.dismissToast);return m.jsx("div",{className:"toasts","aria-live":"assertive",children:r.map(t=>{const i=uR[t.tone];return m.jsxs("div",{className:`toast t-${t.tone}`,role:"status",children:[m.jsx("span",{className:"toast-icon",children:m.jsx(i,{})}),m.jsxs("div",{children:[m.jsx("b",{children:t.title}),t.body&&m.jsx("p",{children:t.body}),t.action&&m.jsx("button",{className:"btn btn-sm",onClick:t.action.run,children:t.action.label})]}),m.jsx("button",{className:"icon-btn",onClick:()=>e(t.id),"aria-label":"Dismiss",children:m.jsx(Kc,{})})]},t.id)})})}const dR=[{key:"jiraOutage",title:"Jira API outage",body:"Jira answers 503 with Retry-After. Watch the outbox back off and the gate refuse to release on unconfirmed data."},{key:"jiraLostResponses",title:"Lost create responses",body:"Jira creates the issue, then the response times out. The retry finds it instead of making a duplicate."},{key:"duplicateWebhooks",title:"Duplicate webhooks",body:"Jira delivers every webhook twice with the same delivery ID. Only the first is applied."},{key:"slowNetwork",title:"Slow network",body:"Adds 600 ms to every Jira call."}];function hR(){const[r,e]=lt.useState(!1),t=lt.useCallback(()=>e(!1),[]),i=L0(r,t),a=Ee(u=>{var h;return(h=u.snap)==null?void 0:h.systems.chaos}),o=Ee(u=>u.act),c=a?Object.values(a).filter(Boolean).length:0;return m.jsxs("div",{className:"popover-anchor",ref:i,children:[m.jsxs("button",{className:`btn btn-sm${c?" btn-danger":""}`,onClick:()=>e(u=>!u),"aria-expanded":r,title:"Simulate integration failures",children:[m.jsx(Px,{}),"Simulate",c?` · ${c} on`:""]}),r&&a&&m.jsxs("div",{className:"popover",role:"menu",children:[m.jsxs("div",{className:"popover-head",children:[m.jsx("h3",{children:"Simulate failures"}),m.jsx("p",{children:"These switch the mock Jira into bad behaviour. The console and the board keep working."})]}),dR.map(u=>m.jsxs("button",{className:"chaos-row",role:"menuitemcheckbox","aria-checked":a[u.key],onClick:()=>o(`chaos:${u.key}`,h=>h.setChaos({[u.key]:!a[u.key]})),children:[m.jsxs("div",{style:{flex:1},children:[m.jsx("strong",{children:u.title}),m.jsx("span",{children:u.body})]}),m.jsx("span",{className:"switch",role:"switch","aria-checked":a[u.key]})]},u.key))]})]})}function fR(){const[r,e]=lt.useState(!1),t=lt.useCallback(()=>e(!1),[]),i=L0(r,t),a=Ee(u=>u.set),o=Ee(u=>u.act),c=Ee(u=>{var h;return(h=u.backend)==null?void 0:h.mode});return m.jsxs("div",{className:"popover-anchor",ref:i,children:[m.jsx("button",{className:"icon-btn",onClick:()=>e(u=>!u),"aria-label":"More","aria-expanded":r,children:m.jsx(Tx,{})}),r&&m.jsxs("div",{className:"popover",style:{width:260},role:"menu",children:[m.jsxs("button",{className:"menu-item",onClick:()=>(a("modal",{kind:"about"}),t()),children:[m.jsx(_0,{})," About this demo"]}),m.jsxs("button",{className:"menu-item",onClick:()=>{t(),o("reset",u=>u.reset())},children:[m.jsx(Ox,{})," Reset demo data"]}),c==="server"&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"menu-sep"}),m.jsxs("a",{className:"menu-item",href:"#jira",target:"_blank",rel:"noreferrer",children:[m.jsx(jc,{})," Open Jira board in a new window"]}),m.jsxs("a",{className:"menu-item",href:"#windchill",target:"_blank",rel:"noreferrer",children:[m.jsx(jc,{})," Open Windchill in a new window"]}),m.jsxs("a",{className:"menu-item",href:"/graphql",target:"_blank",rel:"noreferrer",children:[m.jsx(wx,{})," GraphQL explorer"]})]})]})]})}function pR(){var g;const r=Ee(f=>f.snap),e=Ee(f=>f.connected),t=Ee(f=>{var _;return(_=f.backend)==null?void 0:_.mode}),i=Ee(f=>f.theme),a=Ee(f=>f.toggleTheme),o=Ee(f=>f.set),c=r==null?void 0:r.systems,u=((g=r==null?void 0:r.part)==null?void 0:g.gate.outcome)==="RELEASED",h={healthy:"Healthy",degraded:"Degraded",down:"Down"},p=c?c.pending+c.retrying+c.dead:0;return m.jsxs("header",{className:"topbar app-top",children:[m.jsxs("div",{className:"brand",children:[m.jsx(C0,{open:u}),m.jsx("span",{className:"brand-name",children:"Release Gate"}),m.jsx("span",{className:"brand-sep"}),m.jsxs("div",{className:"brand-ctx",children:[m.jsx("strong",{children:(r==null?void 0:r.workspace.name)??"Loading…"}),m.jsxs("span",{children:[r==null?void 0:r.workspace.program," · CoLab design reviews → Windchill releases"]})]})]}),m.jsx("div",{className:"topbar-spacer"}),m.jsxs("div",{className:"systems",children:[c&&m.jsxs(m.Fragment,{children:[m.jsxs("span",{className:`sys-pill is-${c.jira}`,title:p?`${p} deliveries waiting`:"All deliveries confirmed",children:[m.jsx("span",{className:"dot"}),"Jira ",m.jsx("span",{className:"state",children:h[c.jira]})]}),m.jsxs("span",{className:`sys-pill is-${c.windchill}`,children:[m.jsx("span",{className:"dot"}),"Windchill ",m.jsx("span",{className:"state",children:h[c.windchill]})]})]}),t==="offline"?m.jsxs("span",{className:"sys-pill is-offline-mode",title:"Everything runs in your browser; no server needed.",children:[m.jsx("span",{className:"dot"}),"In-browser demo"]}):m.jsxs("span",{className:`sys-pill ${e?"is-live":"is-down"}`,title:"Live updates over Server-Sent Events",children:[m.jsx("span",{className:"dot"}),e?"Live":"Reconnecting"]})]}),m.jsxs("div",{className:"topbar-actions",children:[m.jsx(hR,{}),m.jsx("button",{className:"icon-btn",onClick:()=>o("modal",{kind:"policy"}),"aria-label":"Release policy",title:"Release policy",children:m.jsx(M0,{})}),m.jsx("button",{className:"icon-btn",onClick:a,"aria-label":i==="dark"?"Light theme":"Dark theme",title:"Toggle theme",children:i==="dark"?m.jsx(zx,{}):m.jsx(Dx,{})}),m.jsx(fR,{})]})]})}function mR(){const[r,e]=lt.useState(()=>window.location.hash.replace("#",""));return lt.useEffect(()=>{const t=()=>e(window.location.hash.replace("#",""));return window.addEventListener("hashchange",t),()=>window.removeEventListener("hashchange",t)},[]),r}function gR({which:r}){return m.jsxs("div",{className:"standalone",children:[m.jsxs("div",{className:"standalone-head",children:[m.jsx(C0,{open:!1}),m.jsx("strong",{children:r==="jira"?"Jira board (mock)":"Windchill (mock)"}),m.jsx("span",{className:"muted",children:"Changes here reach the Release Gate console in real time."})]}),r==="jira"?m.jsx(T0,{}):m.jsx(A0,{}),m.jsx(by,{})]})}function vR(){const r=Ee(c=>c.booted),e=Ee(c=>c.fatal),t=Ee(c=>c.theme),i=Ee(c=>c.drawerOpen),a=Ee(c=>c.drawerHeight),o=mR();return lt.useEffect(()=>{document.documentElement.dataset.theme=t},[t]),e?m.jsx("div",{className:"boot",children:m.jsxs("div",{children:[m.jsx("h1",{children:"Release Gate"}),m.jsx("p",{children:e})]})}):r?o==="jira"||o==="windchill"?m.jsx(gR,{which:o}):m.jsxs("div",{className:"app",style:{"--drawer-h":i?`${a}px`:"43px"},children:[m.jsx(pR,{}),m.jsx(aS,{}),m.jsxs("main",{className:"app-main",children:[m.jsx(oS,{}),m.jsx(cS,{}),m.jsx(QA,{})]}),m.jsx(cR,{}),m.jsx(rS,{}),m.jsx(by,{}),m.jsx(gS,{})]}):m.jsx("div",{className:"boot",children:m.jsxs("div",{children:[m.jsx("h1",{children:"Release Gate"}),m.jsx("p",{children:"Connecting to Jira and Windchill…"})]})})}const yR="kestrel-release",_R="Kestrel release policy",xR=3,SR="Checks a part revision must pass before Windchill can promote it to Released.",MR=!0,wR=[{id:"critical-closed",type:"no_open_feedback",title:"No open critical feedback",blocking:!0,params:{priorities:["critical"],allowWaiver:!1}},{id:"high-dispositioned",type:"no_open_feedback",title:"High-priority feedback resolved or waived",blocking:!0,params:{priorities:["high"],allowWaiver:!0}},{id:"ai-triaged",type:"ai_findings_triaged",title:"AutoReview findings triaged by a person",blocking:!0,params:{}},{id:"reviews-complete",type:"requested_reviews_complete",title:"Requested reviews complete",blocking:!0,params:{roles:["Design","Manufacturing","Quality"]}},{id:"systems-in-sync",type:"integrations_in_sync",title:"Jira and Windchill in sync",blocking:!0,params:{}},{id:"minor-tracked",type:"no_open_feedback",title:"Medium and low feedback tracked",blocking:!1,params:{priorities:["medium","low"],allowWaiver:!0}}],ER={id:yR,name:_R,version:xR,description:SR,failClosedOnSync:MR,rules:wR},bR={name:"Kestrel Robotics",program:"ACT-100 Linear Actuator",currentUserId:"p-jordan"},TR=[{id:"p-jordan",name:"Jordan Lee",role:"Design Lead",org:"Kestrel Robotics",initials:"JL"},{id:"p-maya",name:"Maya Chen",role:"Design Engineer",org:"Kestrel Robotics",initials:"MC"},{id:"p-luis",name:"Luis Ortega",role:"Manufacturing Engineer",org:"Kestrel Robotics",initials:"LO"},{id:"p-priya",name:"Priya Nair",role:"Quality Engineer",org:"Kestrel Robotics",initials:"PN"},{id:"p-noor",name:"Noor Haddad",role:"Test Engineer",org:"Kestrel Robotics",initials:"NH"},{id:"p-ava",name:"Ava Lindqvist",role:"Engineering Manager",org:"Kestrel Robotics",initials:"AL"},{id:"p-sam",name:"Sam Okafor",role:"Supplier DFM Engineer",org:"Apex Machining",initials:"SO",external:!0},{id:"ai-autoreview",name:"AutoReview",role:"AI peer check",org:"CoLab",initials:"AI",isAi:!0}],AR={project:"ENG",projectName:"Actuator Engineering",nextNumber:145,issues:[{key:"ENG-131",summary:"[PLT-1180 Rev B] Flatness 0.02 needs grinding; 0.05 is enough",status:"Done",resolution:"Done",priority:"High",assigneeId:"p-maya",colabId:"F-201",minsAgo:7300},{key:"ENG-132",summary:"[PLT-1180 Rev B] Counterbore leaves a 1.2 mm floor",status:"Done",resolution:"Won't Do",priority:"Medium",assigneeId:"p-luis",colabId:"F-202",minsAgo:7100},{key:"ENG-136",summary:"Raise stepper driver current limit to 2.8 A",status:"In Progress",priority:"Medium",assigneeId:"p-noor",minsAgo:3900},{key:"ENG-138",summary:"Order Rev C prototype stock (6061 plate, 12 mm)",status:"To Do",priority:"Low",assigneeId:"p-luis",minsAgo:2600},{key:"ENG-139",summary:"[BRK-2210 Rev C] Slot width 6.4 to 6.6 mm for M6 clearance",status:"Done",resolution:"Done",priority:"Medium",assigneeId:"p-maya",colabId:"F-108",minsAgo:2500},{key:"ENG-141",summary:"[BRK-2210 Rev C] Gusset is 3.0 mm thick, below the 4.0 mm machinable minimum",status:"To Do",priority:"Highest",assigneeId:"p-maya",colabId:"F-101",minsAgo:2800},{key:"ENG-142",summary:"[BRK-2210 Rev C] Motor bolt pattern is toleranced to datum B, but datum B isn't defined",status:"In Progress",priority:"Highest",assigneeId:"p-maya",colabId:"F-102",minsAgo:1500},{key:"ENG-143",summary:"[BRK-2210 Rev C] Pilot bore Ø38.10 +0.025/0 is tighter than the motor needs",status:"In Progress",priority:"High",assigneeId:"p-maya",colabId:"F-103",minsAgo:1400},{key:"ENG-144",summary:"[SHF-0412 Rev D] Keyway root radius R0.2 is a stress riser",status:"To Do",priority:"Highest",assigneeId:"p-maya",colabId:"F-301",minsAgo:900}]},RR={nextPromotionNumber:15,promotionRequests:[{id:"PR-00014",partNumber:"HSG-3302",revision:"A",status:"APPROVED",requestedById:"p-maya",minsAgo:8650,decisionId:"R-0041",reasons:[]}]},CR=42,PR=JSON.parse(`[{"number":"BRK-2210","name":"Motor Mount Bracket","rev":"C","assembly":"ACT-100 Linear Actuator","model":"bracket","material":"Al 6061-T6","finish":"Clear anodize, Type II","process":"CNC machined, 3-axis","plmState":"INWORK","cadFiles":["BRK-2210_C.prt","BRK-2210_C.drw"],"review":{"title":"Rev C detailed design review","stage":"Detailed design","dueInMins":1320},"reviewers":[{"role":"Design","personId":"p-maya","status":"complete","completedMinsAgo":1250},{"role":"Manufacturing","personId":"p-luis","status":"complete","completedMinsAgo":380},{"role":"Quality","personId":"p-priya","status":"pending","dueInMins":1320}],"feedback":[{"id":"F-101","number":1,"priority":"critical","category":"DFM","status":"open","source":"human","authorId":"p-sam","ownerId":"p-maya","minsAgo":2830,"title":"Gusset is 3.0 mm thick, below the 4.0 mm machinable minimum","body":"At 3.0 mm the gussets will chatter on the side-wall pass in 6061-T6. Apex's minimum for an unsupported wall this tall is 4.0 mm (DFM-MACH-012). Thicken to 4.0 mm or drop the gusset height to 35 mm.","pin":{"p":[51,24,-20],"n":[1,0,0]},"jiraKey":"ENG-141","jiraStatus":"To Do","thread":[{"authorId":"p-sam","minsAgo":2830,"text":"Flagging this before we quote. We can hold 3.0 mm, but expect scrap on the first batch."},{"authorId":"p-maya","minsAgo":1600,"text":"Agreed. Taking it to 4.0 mm in C.1 and re-checking the motor envelope."}]},{"id":"F-102","number":2,"priority":"critical","category":"GD&T","status":"in_progress","source":"human","authorId":"p-luis","ownerId":"p-maya","minsAgo":1520,"title":"Motor bolt pattern is toleranced to datum B, but datum B isn't defined","body":"The 4× Ø5.5 position callout reads ⌖ Ø0.1 Ⓜ | A | B, and there is no datum B feature on sheet 1. Inspection can't program the CMM without it. Suggest making the pilot bore datum B.","pin":{"p":[27.6,81.6,-32],"n":[0,0,1]},"jiraKey":"ENG-142","jiraStatus":"In Progress","thread":[{"authorId":"p-luis","minsAgo":1520,"text":"CMM programming for the first article is blocked on this."},{"authorId":"p-maya","minsAgo":1380,"text":"Making the pilot bore datum B. Drafting has it in ENG-142."}]},{"id":"F-103","number":3,"priority":"high","category":"Tolerance","status":"in_progress","source":"human","authorId":"p-luis","ownerId":"p-maya","minsAgo":1410,"title":"Pilot bore Ø38.10 +0.025/0 is tighter than the motor needs","body":"NEMA 23 pilots are Ø38.10 −0.05. A +0.05/0 bore still locates the motor and lets us bore instead of ream, which saves about 40 s per part.","pin":{"p":[22.5,58,-32],"n":[0,0,1]},"jiraKey":"ENG-143","jiraStatus":"In Progress","thread":[{"authorId":"p-maya","minsAgo":1300,"text":"I want to keep the tight fit for the pilot build. Open to loosening it at Rev D once we have run-out data."}]},{"id":"F-104","number":4,"priority":"high","category":"DFM","status":"open","source":"ai","triage":"untriaged","authorId":"ai-autoreview","ownerId":null,"minsAgo":95,"title":"Slot-to-edge distance is 4.7 mm; guideline is 1.5 × slot width (9.9 mm)","body":"Both front mounting slots sit 4.7 mm from the front edge. Kestrel guideline DFM-HOLE-004 asks for at least 1.5 × the slot width to avoid edge tear-out under clamp load.","citation":"DFM-HOLE-004 rev 2, Hole and slot edge distance","pin":{"p":[38,8,37.6],"n":[0,1,0]},"thread":[]},{"id":"F-105","number":5,"priority":"medium","category":"Drawing","status":"open","source":"human","authorId":"p-ava","ownerId":"p-maya","minsAgo":700,"title":"Title block still shows Rev B","body":"The sheet 1 title block and the revision table disagree. Update the title block to Rev C.","pin":null,"sheetRef":"Sheet 1, zone A8","thread":[]},{"id":"F-106","number":6,"priority":"medium","category":"DFM","status":"open","source":"human","authorId":"p-sam","ownerId":"p-luis","minsAgo":2700,"title":"Inside corner R0.5 forces an extra 1 mm end mill","body":"The upright-to-base inside corner is R0.5. Our finishing mill for this pocket is Ø6 (R3). R0.5 means an extra tool and a slow pass. Can it go to R3?","pin":{"p":[-22,9.5,-30.5],"n":[0,0.7071,0.7071]},"thread":[{"authorId":"p-luis","minsAgo":2500,"text":"R3 clears the motor flange. Tracking for C.1."}]},{"id":"F-107","number":7,"priority":"low","category":"Finish","status":"resolved","source":"human","authorId":"p-priya","ownerId":"p-maya","minsAgo":4300,"resolvedById":"p-maya","resolvedMinsAgo":1900,"title":"Add the anodize spec: MIL-A-8625 Type II, Class 1","body":"Finish note just says 'anodize'. Call out the spec so the supplier quotes the right process.","pin":{"p":[-30,100,-36],"n":[0,1,0]},"thread":[{"authorId":"p-maya","minsAgo":1900,"text":"Added to note 4 on sheet 1."}]},{"id":"F-108","number":8,"priority":"medium","category":"Tolerance","status":"resolved","source":"human","authorId":"p-luis","ownerId":"p-maya","minsAgo":4100,"resolvedById":"p-maya","resolvedMinsAgo":2500,"title":"Slot width 6.4 mm is too tight for M6 clearance","body":"Standard M6 close-fit clearance is 6.4, normal fit is 6.6. The assembly fixture needs normal fit.","pin":{"p":[47.8,8,32],"n":[0,1,0]},"jiraKey":"ENG-139","jiraStatus":"Done","thread":[]}]},{"number":"PLT-1180","name":"Actuator Base Plate","rev":"B","assembly":"ACT-100 Linear Actuator","model":"plate","material":"Al 6061-T6","finish":"Black anodize, Type II","process":"CNC machined, 3-axis","plmState":"INWORK","cadFiles":["PLT-1180_B.prt","PLT-1180_B.drw"],"review":{"title":"Rev B release review","stage":"Release","dueInMins":2700},"reviewers":[{"role":"Design","personId":"p-maya","status":"complete","completedMinsAgo":6900},{"role":"Manufacturing","personId":"p-luis","status":"complete","completedMinsAgo":6800},{"role":"Quality","personId":"p-priya","status":"complete","completedMinsAgo":6600}],"feedback":[{"id":"F-201","number":1,"priority":"high","category":"Tolerance","status":"resolved","source":"human","authorId":"p-luis","ownerId":"p-maya","minsAgo":7400,"resolvedById":"p-maya","resolvedMinsAgo":7000,"title":"Flatness 0.02 over 200 mm needs grinding; 0.05 is enough","body":"The rail mounting face only needs 0.05. At 0.02 we add a grinding op and a week of lead time.","pin":{"p":[55,10,30],"n":[0,1,0]},"jiraKey":"ENG-131","jiraStatus":"Done","thread":[]},{"id":"F-202","number":2,"priority":"medium","category":"DFM","status":"waived","source":"human","authorId":"p-sam","ownerId":"p-luis","minsAgo":7200,"waiverReason":"Floor carries no load. Accepted for Rev B; revisit if we move to a thinner plate.","waivedById":"p-luis","waivedMinsAgo":6950,"title":"Counterbore leaves a 1.2 mm floor","body":"The M8 counterbores leave 1.2 mm of material under the head. That is thin for a clamp face.","pin":{"p":[76,10,58],"n":[0,1,0]},"jiraKey":"ENG-132","jiraStatus":"Done","thread":[]},{"id":"F-203","number":3,"priority":"low","category":"Drawing","status":"resolved","source":"human","authorId":"p-ava","ownerId":"p-maya","minsAgo":7100,"resolvedById":"p-maya","resolvedMinsAgo":6990,"title":"Add the part number engraving note","body":"Laser-mark the part number and revision on the underside.","pin":null,"sheetRef":"Sheet 1, zone D2","thread":[]},{"id":"F-204","number":4,"priority":"medium","category":"DFM","status":"dismissed","source":"ai","triage":"dismissed","authorId":"ai-autoreview","ownerId":null,"minsAgo":7300,"dismissReason":"Hole pattern is fixed by the frame interface. The ACT-100 FEA shows enough margin at this load.","dismissedById":"p-luis","title":"Corner holes leave 7.5 mm to the edge; guideline is 1.5 × D (13.5 mm)","body":"The four Ø9 corner holes sit 7.5 mm from the plate edges. DFM-HOLE-004 recommends at least 1.5 × the hole diameter.","citation":"DFM-HOLE-004 rev 2, Hole and slot edge distance","pin":{"p":[-78,10,-58],"n":[0,1,0]},"thread":[]}]},{"number":"SHF-0412","name":"Output Shaft","rev":"D","assembly":"ACT-100 Linear Actuator","model":"shaft","material":"17-4PH stainless, H1025","finish":"Passivated","process":"CNC turned","plmState":"INWORK","cadFiles":["SHF-0412_D.prt","SHF-0412_D.drw"],"review":{"title":"Rev D design review","stage":"Detailed design","dueInMins":4200},"reviewers":[{"role":"Design","personId":"p-maya","status":"complete","completedMinsAgo":1100},{"role":"Manufacturing","personId":"p-luis","status":"pending","dueInMins":4200},{"role":"Quality","personId":"p-priya","status":"pending","dueInMins":4200}],"feedback":[{"id":"F-301","number":1,"priority":"critical","category":"Stress","status":"open","source":"human","authorId":"p-noor","ownerId":"p-maya","minsAgo":920,"title":"Keyway root radius R0.2 is a stress riser at 18 N·m peak torque","body":"Fatigue test sample 3 cracked at the keyway root after 1.2M cycles. Go to R0.4 minimum or switch to a spline.","pin":{"p":[60,5.6,2.2],"n":[0,0.93,0.37]},"jiraKey":"ENG-144","jiraStatus":"To Do","thread":[{"authorId":"p-noor","minsAgo":920,"text":"Crack photos are on the test report, section 4."}]},{"id":"F-302","number":2,"priority":"medium","category":"Tolerance","status":"open","source":"human","authorId":"p-luis","ownerId":"p-maya","minsAgo":800,"title":"Confirm bearing seat Ø15 k6 with the bearing supplier","body":"k6 is a light press fit. Confirm the supplier's recommendation for this load case before we grind.","pin":{"p":[-31,0,7.5],"n":[0,0,1]},"thread":[]},{"id":"F-303","number":3,"priority":"low","category":"Drawing","status":"resolved","source":"human","authorId":"p-ava","ownerId":"p-maya","minsAgo":1500,"resolvedById":"p-maya","resolvedMinsAgo":1200,"title":"Add the passivation spec (ASTM A967)","body":"Finish note needs the passivation spec.","pin":{"p":[5,7,0],"n":[0,1,0]},"thread":[]}]},{"number":"HSG-3302","name":"Sensor Housing","rev":"A","assembly":"ACT-100 Linear Actuator","model":"housing","material":"Al 6061-T6","finish":"Black anodize, Type II","process":"CNC machined, 3-axis","plmState":"RELEASED","releasedMinsAgo":8640,"releasedDecisionId":"R-0041","releasedPromotionId":"PR-00014","cadFiles":["HSG-3302_A.prt","HSG-3302_A.drw"],"review":{"title":"Rev A release review","stage":"Release","dueInMins":-8700},"reviewers":[{"role":"Design","personId":"p-maya","status":"complete","completedMinsAgo":9000},{"role":"Manufacturing","personId":"p-luis","status":"complete","completedMinsAgo":8900},{"role":"Quality","personId":"p-priya","status":"complete","completedMinsAgo":8700}],"feedback":[{"id":"F-401","number":1,"priority":"high","category":"DFM","status":"resolved","source":"human","authorId":"p-sam","ownerId":"p-maya","minsAgo":9800,"resolvedById":"p-maya","resolvedMinsAgo":9200,"title":"2.0 mm walls won't hold the O-ring seal flat","body":"Walls deflect under the lid screws at 2.0 mm. 3.0 mm is the minimum for a face seal this long.","pin":{"p":[45,22,0],"n":[1,0,0]},"thread":[]},{"id":"F-402","number":2,"priority":"medium","category":"Drawing","status":"resolved","source":"human","authorId":"p-priya","ownerId":"p-maya","minsAgo":9500,"resolvedById":"p-maya","resolvedMinsAgo":9100,"title":"Cable gland boss needs a thread callout","body":"Specify M12×1.5 and the gland's recommended thread depth.","pin":{"p":[20,22,34],"n":[0,0,1]},"thread":[]},{"id":"F-403","number":3,"priority":"low","category":"Drawing","status":"resolved","source":"human","authorId":"p-priya","ownerId":"p-maya","minsAgo":9400,"resolvedById":"p-maya","resolvedMinsAgo":9050,"title":"Call out the O-ring groove per AS568-038","body":"Reference the AS568 size so purchasing buys the right seal.","pin":{"p":[-20,40,28.5],"n":[0,1,0]},"thread":[]}]}]`),NR=[{minsAgo:8640,system:"windchill",direction:"in",level:"ok",title:"Windchill confirmed HSG-3302 Rev A is Released",detail:"Lifecycle INWORK → RELEASED by PR-00014. Decision R-0041.",ref:"PR-00014",part:"HSG-3302",tag:"released"},{minsAgo:8639,system:"windchill",direction:"out",level:"ok",title:"Attached HSG-3302_RevA_review-record.html to HSG-3302 in Windchill",detail:"Attach review record R-0041 to HSG-3302 in Windchill",ref:"HSG-3302",part:"HSG-3302",statusCode:201,latencyMs:142,tag:"attached"},{minsAgo:2800,system:"jira",direction:"out",level:"ok",title:"Created ENG-141 for F-101",detail:"Create Jira issue for F-101",ref:"ENG-141",part:"BRK-2210",statusCode:201,latencyMs:188,tag:"created"},{minsAgo:1500,system:"jira",direction:"out",level:"ok",title:"Created ENG-142 for F-102",detail:"Create Jira issue for F-102",ref:"ENG-142",part:"BRK-2210",statusCode:201,latencyMs:164,tag:"created"},{minsAgo:1400,system:"jira",direction:"out",level:"ok",title:"Created ENG-143 for F-103",detail:"Create Jira issue for F-103",ref:"ENG-143",part:"BRK-2210",statusCode:201,latencyMs:171,tag:"created"},{minsAgo:1378,system:"jira",direction:"in",level:"ok",title:"Maya Chen moved ENG-142 to In Progress; F-102 is now in progress",detail:"Signature verified.",ref:"F-102",part:"BRK-2210",tag:"applied"},{minsAgo:900,system:"jira",direction:"out",level:"ok",title:"Created ENG-144 for F-301",detail:"Create Jira issue for F-301",ref:"ENG-144",part:"SHF-0412",statusCode:201,latencyMs:158,tag:"created"},{minsAgo:380,system:"colab",direction:"in",level:"ok",title:"Luis Ortega completed the Manufacturing review",detail:"BRK-2210 Rev C detailed design review.",ref:"BRK-2210",part:"BRK-2210",tag:"review"},{minsAgo:95,system:"colab",direction:"in",level:"info",title:"AutoReview flagged F-104 on BRK-2210 Rev C",detail:"Slot-to-edge distance is 4.7 mm; guideline is 1.5 × slot width. Waiting for a person to triage it.",ref:"F-104",part:"BRK-2210",tag:"ai"}],LR={workspace:bR,people:TR,jira:AR,windchill:RR,nextDecisionNumber:CR,parts:PR,history:NR},DR=["open","in_progress"],a0=r=>r.source==="ai"&&r.triage==="untriaged",o0=(r,e=3)=>{const t=r.slice(0,e).join(", ");return r.length>e?`${t} +${r.length-e} more`:t},l0=(r,e)=>r<e?-1:r>e?1:0,IR={no_open_feedback(r,e){const t=r.priorities??[],i=new Set(DR);r.allowWaiver===!1&&i.add("waived");const a=e.feedback.filter(u=>t.includes(u.priority)&&i.has(u.status)&&!a0(u)),o=a.map(u=>u.id).sort(l0);let c=o.length?`${o.length} open: ${o0(o)}`:"None open";return a.some(u=>u.status==="waived")&&(c+=" (policy doesn't allow waivers here)"),{itemIds:o,summary:c}},ai_findings_triaged(r,e){const t=e.feedback.filter(a0).map(i=>i.id).sort(l0);return{itemIds:t,summary:t.length?`${t.length} awaiting a person: ${o0(t)}`:"All findings triaged"}},requested_reviews_complete(r,e){const t=r.roles??[],i=new Map((e.reviews??[]).map(u=>[u.role,u])),a=[],o=[];for(const u of t){const h=i.get(u);h?h.status!=="complete"&&a.push(u):o.push(u)}const c=[];return a.length&&c.push("Waiting on "+a.join(", ")),o.length&&c.push(o.join(", ")+" not requested"),{roles:[...a,...o],summary:c.length?c.join("; "):"All requested reviews complete"}},integrations_in_sync(r,e){var c,u,h;const t=((c=e.sync)==null?void 0:c.pending)??0,i=((u=e.sync)==null?void 0:u.failed)??0,a=((h=e.sync)==null?void 0:h.deliveryIds)??[];if(!t&&!i)return{deliveryIds:a,summary:"Every change confirmed by Jira and Windchill",offending:0};const o=[];return t&&o.push(`${t} pending`),i&&o.push(`${i} failed`),{deliveryIds:a,summary:`${o.join(", ")} (release can't use unconfirmed data)`,offending:t+i}}};function c0(r,e){const t=[],i=new Set;for(const c of r.rules){const u=IR[c.type];if(!u)throw new Error(`Unknown rule type: ${c.type}`);const h=u(c.params??{},e);let p=c.blocking!==!1;c.type==="integrations_in_sync"&&r.failClosedOnSync===!1&&(p=!1);const g=h.itemIds??[],f=h.roles??[],_=h.deliveryIds??[],w=g.length+f.length+(h.offending??0)===0?"pass":p?"fail":"warn";w==="fail"&&(g.forEach(b=>i.add(b)),f.forEach(b=>i.add(`review:${b}`)),h.offending&&(_.length?_.forEach(b=>i.add(`delivery:${b}`)):i.add(`sync:${c.id}`))),t.push({id:c.id,type:c.type,title:c.title,blocking:p,status:w,summary:h.summary,itemIds:g,roles:f,deliveryIds:_})}const a=t.filter(c=>c.blocking),o=a.filter(c=>c.status==="pass").length;return{outcome:o===a.length?"READY":"BLOCKED",blockingTotal:a.length,blockingPassed:o,itemsToClear:i.size,checks:t}}const Wr=ER,_n=LR,$r={id:"svc-colab-release-gate",name:"CoLab Release Gate"},Xr={webhook:350,reviewer:2200,retryBase:1e3,retryCap:8e3,slow:600,maxAttempts:6,plmEvent:300},u0=12,d0={"To Do":"11","In Progress":"21",Done:"31"},kR={critical:"Highest",high:"High",medium:"Medium",low:"Low"},UR={open:"open",in_progress:"in progress",resolved:"resolved",waived:"waived"},Ms="https://kestrel.atlassian.example/rest/api/2",h0="https://plm.kestrel.example/Windchill/servlet/odata";class Ai extends Error{constructor(e,t,i=null,a=null){super(t),this.status=e,this.retryAfter=i,this.body=a}}class Dc extends Error{constructor(e,t,i=null,a=null){super(e),this.retryable=t,this.status=i,this.retryAfter=a}}const Gt=()=>Date.now(),fn=r=>r==null?null:new Date(r).toISOString(),Xn=r=>r*6e4,Ph=r=>new Promise(e=>setTimeout(e,r)),OR=()=>globalThis.crypto&&"randomUUID"in globalThis.crypto?globalThis.crypto.randomUUID():`${Math.random().toString(16).slice(2)}-${Date.now().toString(16)}`;function Xc(r){return Array.isArray(r)?`[${r.map(Xc).join(",")}]`:r&&typeof r=="object"?`{${Object.keys(r).sort().map(e=>`${JSON.stringify(e)}:${Xc(r[e])}`).join(",")}}`:JSON.stringify(r)}async function f0(r){try{const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(r));return"sha256:"+Array.from(new Uint8Array(e),t=>t.toString(16).padStart(2,"0")).join("")}catch{let e=2166136261,t="";for(let i=0;i<8;i++){for(let a=0;a<r.length;a++)e=Math.imul(e^r.charCodeAt(a)^i,16777619);t+=(e>>>0).toString(16).padStart(8,"0")}return"sha256:"+t}}class FR{constructor(){this.mode="offline",this.listeners=new Set,this.timers=new Set,this.epoch=0,this.pumping=!1,this.wakeTimer=null,this.currentUserId=_n.workspace.currentUserId,this.ready=this.load()}emit(e){for(const t of this.listeners)queueMicrotask(()=>t(e))}changed(e){this.emit({type:"changed",data:{part:e}})}later(e,t){const i=this.epoch,a=setTimeout(()=>{this.timers.delete(a),i===this.epoch&&e()},t);this.timers.add(a)}addLog(e){const t={id:++this.s.seq.log,at:new Date().toISOString(),detail:null,ref:null,partNumber:null,statusCode:null,latencyMs:null,tag:null,meta:null,...e};return this.s.log.push(t),this.s.log.length>500&&this.s.log.shift(),this.emit({type:"log",data:t}),t}audit(e,t,i,a,o=null){this.s.audit.push({id:++this.s.seq.audit,at:new Date().toISOString(),atMs:Gt(),actor:e,action:t,entityId:a,detail:o,partNumber:i})}me(){return this.s.people.get(this.currentUserId)}person(e){return e?this.s.people.get(e)??null:null}part(e){const t=this.s.parts.find(i=>i.number===e);if(!t)throw new sn(`Part ${e} doesn't exist.`);return t}fb(e){const t=this.s.feedback.find(i=>i.id===e);if(!t)throw new sn(`Feedback ${e} doesn't exist.`);return t}editable(e){const t=this.part(e);if(t.releasedAt||t.pendingDecisionId)throw new sn(`${t.number} Rev ${t.rev} is released. Start a new revision to change it.`);return t}systemNote(e,t,i="CoLab"){e.thread.push({at:Gt(),authorId:null,authorLabel:i,text:t,kind:"system"})}touch(e){e.updatedAt=Gt()}async net(e,t,i,a,o){const c=performance.now(),u={method:t,url:i,requestBody:a,status:null,latencyMs:null,requestHeaders:{Authorization:"Basic ••••••"}};e.calls.push(u),await Ph(35+Math.random()*90+(this.s.jira.chaos.slowNetwork?Xr.slow:0));try{const h=o();return u.status=t==="POST"&&/\/(issue|comment|PromotionRequests)$/.test(i)?201:t==="POST"?204:200,u.responseBody=h??null,h}catch(h){throw h instanceof Ai&&(u.status=h.status,u.error=`${h.status} ${h.message}`,u.responseBody=h.body),h}finally{u.latencyMs=Math.round(performance.now()-c)}}async load(){var a;const e={people:new Map,parts:[],reviewers:[],feedback:[],decisions:[],audit:[],outbox:[],log:[],inbound:new Set,gateCache:new Map,jira:{issues:new Map,next:_n.jira.nextNumber,chaos:{jiraOutage:!1,jiraLostResponses:!1,duplicateWebhooks:!1,slowNetwork:!1}},wc:{parts:new Map,promotions:[],nextPr:_n.windchill.nextPromotionNumber},seq:{log:0,audit:0,msg:0,comment:0,decision:_n.nextDecisionNumber-1}};this.s=e;const t=Gt();for(const o of _n.people)e.people.set(o.id,{id:o.id,name:o.name,role:o.role,org:o.org??"",initials:o.initials,external:!!o.external,isAi:!!o.isAi});const i=new Map;for(const o of _n.jira.issues){const c=t-Xn(o.minsAgo);i.set(o.key,c),e.jira.issues.set(o.key,{id:String(1e4+Number(o.key.split("-")[1])),key:o.key,summary:o.summary,description:"",status:o.status,resolution:o.resolution??null,priority:o.priority??"Medium",assigneeId:o.assigneeId??null,colabId:o.colabId??null,created:c,updated:c,comments:[]})}_n.parts.forEach((o,c)=>{e.parts.push({number:o.number,order:c,name:o.name,rev:o.rev,assembly:o.assembly,model:o.model,material:o.material,finish:o.finish,process:o.process,cadFiles:o.cadFiles??[],reviewTitle:o.review.title,reviewStage:o.review.stage,reviewDue:t+Xn(o.review.dueInMins),releasedAt:null,releasedDecisionId:null,pendingDecisionId:null});for(const u of o.reviewers)e.reviewers.push({partNumber:o.number,role:u.role,personId:u.personId,status:u.status,due:u.dueInMins!=null?t+Xn(u.dueInMins):null,completedAt:u.completedMinsAgo!=null?t-Xn(u.completedMinsAgo):null,nudgedAt:null});for(const u of o.feedback){const h=t-Xn(u.minsAgo),p=u.resolvedMinsAgo!=null?t-Xn(u.resolvedMinsAgo):null,g=u.waivedMinsAgo!=null?t-Xn(u.waivedMinsAgo):null;e.feedback.push({id:u.id,partNumber:o.number,number:u.number,title:u.title,body:u.body,priority:u.priority,category:u.category,status:u.status,source:u.source,triage:u.triage??null,citation:u.citation??null,authorId:u.authorId??null,ownerId:u.ownerId??null,pin:u.pin??null,sheetRef:u.sheetRef??null,jiraKey:u.jiraKey??null,jiraStatus:u.jiraStatus??null,jiraUpdatedAt:u.jiraKey?i.get(u.jiraKey)??null:null,syncState:u.jiraKey?"synced":"none",resolvedAt:p,resolvedBy:u.resolvedById?e.people.get(u.resolvedById).name:null,waiverReason:u.waiverReason??null,waivedById:u.waivedById??null,waivedAt:g,dismissReason:u.dismissReason??null,dismissedById:u.dismissedById??null,createdAt:h,updatedAt:Math.max(h,p??0,g??0),thread:(u.thread??[]).map(f=>({at:t-Xn(f.minsAgo),authorId:f.authorId,authorLabel:e.people.get(f.authorId).name,text:f.text,kind:"comment"}))})}}),_n.parts.forEach((o,c)=>{const u=o.releasedMinsAgo?t-Xn(o.releasedMinsAgo):null;e.wc.parts.set(o.number,{id:`OR:wt.part.WTPart:${224310+17*c}`,number:o.number,name:String(o.name).toUpperCase(),revision:o.rev,version:`${o.rev}.${2+c%3}`,state:o.plmState,attachments:(o.cadFiles??[]).map((h,p)=>({fileName:h,mimeType:"application/octet-stream",size:18e4+37e3*p+11e3*c,createdOn:t-Xn(9e3-400*c)})),history:u?[{at:u,from:"INWORK",to:"RELEASED",by:`Promotion ${o.releasedPromotionId}`}]:[]})}),e.wc.promotions=_n.windchill.promotionRequests.map(o=>{var c;return{id:o.id,partNumber:o.partNumber,revision:o.revision,status:o.status,requestedBy:((c=e.people.get(o.requestedById))==null?void 0:c.name)??o.requestedById,createdOn:t-Xn(o.minsAgo),reasons:o.reasons??[],decisionId:o.decisionId??null}});for(const o of _n.parts){if(!o.releasedDecisionId)continue;const c=this.part(o.number),u=t-Xn(o.releasedMinsAgo+2),h=c0(Wr,this.policyState(c)).checks,p=((a=e.wc.promotions.find(f=>f.id===o.releasedPromotionId))==null?void 0:a.requestedBy)??null,g=await this.buildRecord(c,o.releasedDecisionId,u,o.releasedPromotionId,p,h);e.decisions.push({id:o.releasedDecisionId,partNumber:c.number,rev:c.rev,at:u,outcome:"approved",promotionRequestId:o.releasedPromotionId,requestedBy:p,checks:h,snapshotHash:g.snapshotHash,record:g}),c.releasedAt=t-Xn(o.releasedMinsAgo),c.releasedDecisionId=o.releasedDecisionId,e.wc.parts.get(c.number).attachments.push({fileName:`${c.number}_Rev${c.rev}_review-record.html`,mimeType:"text/html",size:9200,createdOn:c.releasedAt})}for(const o of[..._n.history??[]].sort((c,u)=>u.minsAgo-c.minsAgo))e.log.push({id:++e.seq.log,at:new Date(t-Xn(o.minsAgo)).toISOString(),system:o.system,direction:o.direction,level:o.level,title:o.title,detail:o.detail??null,ref:o.ref??null,partNumber:o.part??null,statusCode:o.statusCode??null,latencyMs:o.latencyMs??null,tag:o.tag??null,meta:null});this.addLog({system:"gate",direction:"internal",level:"info",title:`Connected to Jira (${_n.jira.project}) and Windchill. ${_n.parts.length} parts in review.`,detail:"Running entirely in your browser: Jira, Windchill and the gate are simulated.",tag:"boot"});for(const o of e.parts)this.refreshGate(o.number,!0)}policyState(e){const t=this.s.outbox.filter(a=>a.partNumber===e.number&&["pending","in_flight","retrying"].includes(a.status)),i=this.s.outbox.filter(a=>a.partNumber===e.number&&a.status==="dead");return{feedback:this.s.feedback.filter(a=>a.partNumber===e.number).map(a=>({id:a.id,priority:a.priority,status:a.status,source:a.source,triage:a.triage})),reviews:this.s.reviewers.filter(a=>a.partNumber===e.number).map(a=>({role:a.role,status:a.status})),sync:{pending:t.length,failed:i.length,deliveryIds:[...t,...i].map(a=>String(a.id))}}}gateFor(e){const t=e.releasedAt&&e.releasedDecisionId?e.releasedDecisionId:e.pendingDecisionId,i=t?this.s.decisions.find(a=>a.id===t):void 0;if(i){const a=i.checks.filter(o=>o.blocking);return{outcome:e.releasedAt?"RELEASED":"RELEASING",blockingTotal:a.length,blockingPassed:a.filter(o=>o.status==="pass").length,itemsToClear:0,checks:i.checks,releasedAt:fn(e.releasedAt),decisionId:i.id,snapshotHash:i.snapshotHash}}return{...c0(Wr,this.policyState(e)),releasedAt:null,decisionId:null,snapshotHash:null}}refreshGate(e,t=!1){const i=this.part(e),a=this.gateFor(i),o=this.s.gateCache.get(e);if(this.s.gateCache.set(e,[a.outcome,a.blockingPassed]),!t&&o&&o[0]!==a.outcome){const c={READY:"ok",RELEASED:"ok",RELEASING:"info"}[a.outcome]??"warn";this.addLog({system:"gate",direction:"internal",level:c,title:`${i.number} Rev ${i.rev} is now ${String(a.outcome).toLowerCase()}`,detail:`Gate moved from ${o[0]} to ${a.outcome} (${a.blockingPassed} of ${a.blockingTotal} blocking checks pass).`,ref:i.number,partNumber:i.number,tag:"gate"})}return this.changed(e),a}disposition(e){var t,i;return e.status==="resolved"?`Resolved by ${e.resolvedBy??"owner"}`:e.status==="waived"?`Waived by ${(t=this.person(e.waivedById))==null?void 0:t.name}: ${e.waiverReason}`:e.status==="dismissed"?`AI finding dismissed by ${(i=this.person(e.dismissedById))==null?void 0:i.name}: ${e.dismissReason}`:e.priority==="medium"||e.priority==="low"?"Open, carried to the next revision (non-blocking)":"Open"}async buildRecord(e,t,i,a,o,c){const u={recordId:t,decision:"approved",decidedAt:fn(i),promotionRequestId:a,requestedBy:o,part:{number:e.number,name:e.name,rev:e.rev,assembly:e.assembly,material:e.material,finish:e.finish,process:e.process},review:{title:e.reviewTitle,stage:e.reviewStage},policy:{id:Wr.id,name:Wr.name,version:Wr.version,failClosedOnSync:Wr.failClosedOnSync},checks:c.map(h=>({id:h.id,title:h.title,blocking:h.blocking,status:h.status,summary:h.summary})),reviews:this.s.reviewers.filter(h=>h.partNumber===e.number).map(h=>{var p;return{role:h.role,person:((p=this.person(h.personId))==null?void 0:p.name)??null,status:h.status,completedAt:fn(h.completedAt)}}),feedback:this.s.feedback.filter(h=>h.partNumber===e.number).sort((h,p)=>h.number-p.number).map(h=>({id:h.id,number:h.number,title:h.title,priority:h.priority,category:h.category,source:h.source==="ai"?"AutoReview":"Reviewer",status:h.status,disposition:this.disposition(h),jiraKey:h.jiraKey}))};return{...u,snapshotHash:await f0(Xc(u))}}enqueue(e,t,i,a,o){const c=Gt();this.s.outbox.push({id:++this.s.seq.msg,createdAt:c,topic:e,orderingKey:t,partNumber:i,label:a,payload:o,status:"pending",attempts:0,maxAttempts:Xr.maxAttempts,nextAttemptAt:c,lastError:null}),t.startsWith("feedback:")&&this.refreshSync(t.slice(9)),this.wake()}refreshSync(e){const t=this.s.feedback.find(a=>a.id===e);if(!t)return;const i=this.s.outbox.filter(a=>a.orderingKey===`feedback:${e}`&&a.status!=="delivered").map(a=>a.status);t.syncState=i.includes("dead")?"error":i.length?"pending":t.jiraKey?"synced":"none"}wake(e=0){this.wakeTimer&&clearTimeout(this.wakeTimer);const t=this.epoch;this.wakeTimer=setTimeout(()=>{this.wakeTimer=null,t===this.epoch&&this.pump()},e)}nextDue(){const e=this.s.outbox.filter(o=>o.status!=="delivered"),t=new Map;for(const o of e)t.has(o.orderingKey)||t.set(o.orderingKey,o.id);let i=1/0;const a=Gt();for(const o of e)if(!(o.status!=="pending"&&o.status!=="retrying")&&t.get(o.orderingKey)===o.id){if(o.nextAttemptAt<=a)return{msg:o,wait:0};i=Math.min(i,o.nextAttemptAt-a)}return{msg:null,wait:i}}async pump(){if(this.pumping)return;this.pumping=!0;const e=this.epoch;try{for(;;){const{msg:t,wait:i}=this.nextDue();if(!t){i!==1/0&&this.wake(Math.max(20,i));return}if(await this.deliver(t),e!==this.epoch)return}}finally{e===this.epoch&&(this.pumping=!1)}}backoff(e,t){let a=Math.min(Xr.retryCap,Xr.retryBase*2**(e-1))*(.75+.25*Math.random());return t&&(a=Math.max(a,Math.min(t*1e3,Xr.retryCap*2))),Math.round(a/10)*10}async deliver(e){var f;const t=this.epoch;e.status="in_flight",e.attempts+=1,this.changed(e.partNumber);const i={calls:[]};let a=null,o=null;try{a=await this.handle(e,i)}catch(_){o=_ instanceof Dc?_:new Dc(`Unexpected error: ${_.message}`,!0)}if(t!==this.epoch)return;const c=e.topic.startsWith("plm.")?"windchill":"jira",u=e.orderingKey.startsWith("feedback:")?e.orderingKey.slice(9):null,h=((f=[...i.calls].reverse().find(_=>_.status!=null))==null?void 0:f.status)??null,p=i.calls.reduce((_,M)=>_+(M.latencyMs??0),0),g={messageId:e.id,topic:e.topic,attempt:e.attempts,calls:i.calls};if(!o&&a)e.status="delivered",e.lastError=null,u&&a.updates&&Object.assign(this.fb(u),a.updates),this.addLog({system:c,direction:"out",level:"ok",title:a.summary,detail:e.attempts>1?`${e.label}. Attempt ${e.attempts}.`:e.label,ref:a.ref??u,partNumber:e.partNumber,statusCode:h,latencyMs:p,tag:a.tag??null,meta:g});else if(o&&o.retryable&&e.attempts<e.maxAttempts){const _=this.backoff(e.attempts,o.retryAfter);e.status="retrying",e.nextAttemptAt=Gt()+_,e.lastError=o.message,this.addLog({system:c,direction:"out",level:"warn",title:`${e.label}: ${o.message}`,detail:`Attempt ${e.attempts} of ${e.maxAttempts}. Retrying in ${(_/1e3).toFixed(1)} s.`,ref:u??e.partNumber,partNumber:e.partNumber,statusCode:o.status,latencyMs:p,tag:"retry",meta:{...g,retryInS:_/1e3}})}else if(o){e.status="dead",e.lastError=o.message;const _=o.retryable?`Gave up after ${e.attempts} attempts.`:"Not retryable: the request itself was rejected.";this.addLog({system:c,direction:"out",level:"error",title:`${e.label}: ${o.message}`,detail:`${_} Waiting for someone to retry it.`,ref:u??e.partNumber,partNumber:e.partNumber,statusCode:o.status,latencyMs:p,tag:"dead",meta:g})}u&&this.refreshSync(u),e.partNumber&&this.refreshGate(e.partNumber)}async handle(e,t){const i=e.payload;return(async o=>{try{return await o()}catch(c){if(c instanceof Ai){const u=c.status>=500||[408,425,429].includes(c.status);throw new Dc(`${c.status} ${c.message}`,u,c.status,c.retryAfter)}throw c}})(async()=>{switch(e.topic){case"jira.create_issue":{const o=this.fb(i.feedbackId),c=this.part(o.partNumber);if(o.jiraKey)return{summary:`${o.jiraKey} is already linked to ${o.id}; nothing to create`,ref:o.jiraKey,tag:"noop"};const u=`cf[10042] = "${o.id}"`,h=await this.net(t,"GET",`${Ms}/search?jql=${encodeURIComponent(u)}`,null,()=>this.jiraSearch(o.id));if(h)return{summary:`Found ${h.key} from an earlier attempt and linked it to ${o.id}. No duplicate created.`,ref:h.key,tag:"linked",updates:{jiraKey:h.key,jiraStatus:h.status}};const p={project:{key:_n.jira.project},issuetype:{name:"Task"},summary:`[${c.number} Rev ${c.rev}] ${o.title}`,priority:{name:kR[o.priority]},labels:["colab","design-review",c.number.toLowerCase()],customfield_10042:o.id},g=await this.net(t,"POST",`${Ms}/issue`,{fields:p},()=>this.jiraCreate(p,$r));return{summary:`Created ${g.key} for ${o.id}`,ref:g.key,tag:"created",updates:{jiraKey:g.key,jiraStatus:"To Do"}}}case"jira.transition":{const o=this.fb(i.feedbackId),c=o.jiraKey;if(!c)return{summary:`${o.id} has no Jira issue; nothing to move`,tag:"noop"};const u=await this.net(t,"GET",`${Ms}/issue/${c}?fields=status,updated`,null,()=>this.jiraGet(c));if(u.status===i.to)return{summary:`${c} was already ${i.to}`,ref:c,tag:"noop",updates:{jiraStatus:i.to}};await this.net(t,"GET",`${Ms}/issue/${c}/transitions`,null,()=>this.jiraTransitions(c));const h={transition:{id:d0[i.to]}};return i.resolution&&(h.fields={resolution:{name:i.resolution}}),await this.net(t,"POST",`${Ms}/issue/${c}/transitions`,h,()=>this.jiraDoTransition(c,i.to,i.resolution??null,$r)),{summary:`Moved ${c} from ${u.status} to ${i.to}`,ref:c,tag:"moved",updates:{jiraStatus:i.to}}}case"jira.comment":{const o=this.fb(i.feedbackId),c=o.jiraKey;if(!c)return{summary:`${o.id} has no Jira issue; comment kept in CoLab only`,tag:"noop"};if((await this.net(t,"GET",`${Ms}/issue/${c}/comment`,null,()=>this.jiraComments(c))).some(p=>p.body.includes(i.marker)))return{summary:`Note already on ${c}; skipped the duplicate`,ref:c,tag:"noop"};const h=`${i.text}

(${i.author} via CoLab, ref ${i.marker})`;return await this.net(t,"POST",`${Ms}/issue/${c}/comment`,{body:h},()=>this.jiraAddComment(c,h,$r)),{summary:`Posted ${i.author}'s note on ${c}`,ref:c,tag:"commented"}}case"plm.attach_record":{const o=this.s.decisions.find(h=>h.id===i.decisionId),c=`${o.partNumber}_Rev${o.rev}_review-record.html`,u=`${h0}/ProdMgmt/Parts('${o.partNumber}')/Attachments('${c}')`;return await this.net(t,"PUT",u,{MimeType:"text/html",Description:"Design review record from CoLab"},()=>{const h=this.s.wc.parts.get(o.partNumber),p=h.attachments.find(g=>g.fileName===c);return p?p.createdOn=Gt():h.attachments.push({fileName:c,mimeType:"text/html",size:9400+Math.round(Math.random()*800),createdOn:Gt()}),{FileName:c}}),{summary:`Attached ${c} to ${o.partNumber} in Windchill`,ref:o.partNumber,tag:"attached"}}}throw new Dc(`Unknown topic ${e.topic}`,!1)})}jiraGate(e){if(this.s.jira.chaos.jiraOutage&&e.id===$r.id)throw new Ai(503,"Service Unavailable",2,{errorMessages:["Service unavailable. Try again shortly."]})}jiraSearch(e){return this.jiraGate($r),[...this.s.jira.issues.values()].find(t=>t.colabId===e)??null}jiraGet(e){this.jiraGate($r);const t=this.s.jira.issues.get(e);if(!t)throw new Ai(404,"Not Found",null,{errorMessages:[`Issue ${e} does not exist.`]});return t}jiraTransitions(e){const t=this.jiraGet(e);return["To Do","In Progress","Done"].filter(i=>i!==t.status).map(i=>({id:d0[i],name:i}))}jiraCreate(e,t){var u;this.jiraGate(t);const i=this.s.jira.next++,a=`${_n.jira.project}-${i}`,o=Gt(),c={id:String(1e4+i),key:a,summary:e.summary,description:"",status:"To Do",resolution:null,priority:((u=e.priority)==null?void 0:u.name)??"Medium",assigneeId:null,colabId:e.customfield_10042??null,created:o,updated:o,comments:[]};if(this.s.jira.issues.set(a,c),this.jiraEmit("jira:issue_created",c,t,[]),this.s.jira.chaos.jiraLostResponses&&t.id===$r.id)throw new Ai(504,"Gateway Timeout",null,{errorMessages:["Gateway timeout"]});return{key:a}}jiraDoTransition(e,t,i,a){this.jiraGate(a);const o=this.s.jira.issues.get(e);if(!o)throw new Ai(404,"Not Found");if(o.status===t)throw new Ai(400,"Bad Request",null,{errorMessages:["That transition is not valid."]});const c=o.status;o.status=t,o.resolution=t==="Done"?i??"Done":null,o.updated=Gt(),this.jiraEmit("jira:issue_updated",o,a,[{field:"status",fromString:c,toString:t}]),this.changed(null)}jiraComments(e){return this.jiraGet(e).comments}jiraAddComment(e,t,i){const a=this.jiraGet(e);a.comments.push({id:String(2e4+ ++this.s.seq.comment),authorId:i.id,authorName:i.name,body:t,created:Gt()}),a.updated=Gt()}jiraEmit(e,t,i,a){const o={webhookEvent:e,user:{accountId:i.id,displayName:i.name},issue:{key:t.key,fields:{status:{name:t.status},updated:fn(t.updated),customfield_10042:t.colabId}},changelog:{items:a}},c=OR(),u=this.s.jira.chaos.duplicateWebhooks?2:1;for(let h=0;h<u;h++)this.later(()=>this.receiveJira(JSON.parse(JSON.stringify(o)),c),Xr.webhook+h*300)}receiveJira(e,t){const i=e.issue.key,a=e.issue.fields.status.name,o=Date.parse(e.issue.fields.updated),c=e.user.accountId,u=e.user.displayName,h=t.slice(0,8),p=`jira:${t}`;if(this.s.inbound.has(p)){this.addLog({system:"jira",direction:"in",level:"info",title:`Duplicate webhook for ${i} ignored`,detail:`Delivery ${h} was already processed.`,ref:i,tag:"duplicate"});return}this.s.inbound.add(p);const g=e.issue.fields.customfield_10042,f=this.s.feedback.find(S=>S.jiraKey===i||g&&S.id===g);if(!f){this.addLog({system:"jira",direction:"in",level:"info",title:`${i} changed in Jira; not linked to CoLab feedback`,detail:"Nothing to do.",ref:i,tag:"ignored"});return}let _=!1;if(f.jiraKey||(f.jiraKey=i,f.jiraStatus=a,_=!0),f.jiraUpdatedAt&&o<f.jiraUpdatedAt){this.addLog({system:"jira",direction:"in",level:"info",title:`Out-of-order webhook for ${i} ignored`,detail:"It is older than the state we already have.",ref:f.id,partNumber:f.partNumber,tag:"stale"});return}f.jiraUpdatedAt=o,f.jiraStatus=a;const M=this.part(f.partNumber);if(_&&this.addLog({system:"jira",direction:"in",level:"ok",title:`Linked ${i} to ${f.id} from its webhook`,detail:"The create response never arrived, but the issue carries the CoLab feedback ID.",ref:f.id,partNumber:f.partNumber,tag:"linked"}),c===$r.id){_||this.addLog({system:"jira",direction:"in",level:"info",title:`Echo of our own change to ${i}; no-op`,detail:`${i} is ${a}. The change came from this integration, so nothing is applied back.`,ref:f.id,partNumber:f.partNumber,tag:"echo"}),this.refreshSync(f.id),this.refreshGate(f.partNumber);return}if(M.releasedAt||M.pendingDecisionId){this.addLog({system:"jira",direction:"in",level:"warn",title:`${u} moved ${i} to ${a} after ${M.number} Rev ${M.rev} was released`,detail:"The released record doesn't change. Raise it on the next revision.",ref:f.id,partNumber:f.partNumber,tag:"frozen"});return}let w=null;if(a==="Done"?w=["resolved","waived","dismissed"].includes(f.status)?null:"resolved":a==="In Progress"?w=f.status==="in_progress"?null:"in_progress":a==="To Do"&&(w=f.status==="open"?null:"open"),!w){this.addLog({system:"jira",direction:"in",level:"info",title:`${i} is ${a}; ${f.id} already matches`,detail:"Nothing to apply.",ref:f.id,partNumber:f.partNumber,tag:"noop"}),this.refreshGate(f.partNumber);return}const b=f.status;f.status=w,w==="resolved"?(f.resolvedAt=Gt(),f.resolvedBy=`${u} (in Jira)`):(f.resolvedAt=null,f.resolvedBy=null,f.waiverReason=null,f.waivedById=null,f.waivedAt=null),this.touch(f),this.systemNote(f,`${u} moved ${i} to ${a}.`,"Jira"),this.audit(`${u} (Jira)`,"feedback.sync",f.partNumber,f.id,`${b} → ${w} from ${i}`),this.addLog({system:"jira",direction:"in",level:"ok",title:`${u} moved ${i} to ${a}; ${f.id} is now ${UR[w]??w}`,detail:`Signature verified. Delivery ${h}.`,ref:f.id,partNumber:f.partNumber,tag:"applied"}),this.refreshGate(f.partNumber)}async promotionCheck(e){const t=this.part(e.partNumber),i=t.releasedAt?t.releasedDecisionId:t.pendingDecisionId;if(i)return{decision:"APPROVE",decisionId:i,reasons:[]};const a=this.gateFor(t),o=a.outcome==="READY",c=`R-${String(++this.s.seq.decision).padStart(4,"0")}`,u=Gt(),h=a.checks.filter(_=>_.status==="fail"),p=h.map(_=>`${_.title}: ${_.summary}`);let g=null,f;return o?(g=await this.buildRecord(t,c,u,e.id,e.requestedBy,a.checks),f=g.snapshotHash,t.pendingDecisionId=c):f=await f0(Xc({part:t.number,rev:t.rev,state:this.policyState(t)})),this.s.decisions.push({id:c,partNumber:t.number,rev:t.rev,at:u,outcome:o?"approved":"rejected",promotionRequestId:e.id,requestedBy:e.requestedBy,checks:a.checks,snapshotHash:f,record:g}),this.audit("Windchill","gate.decision",t.number,c,o?"approved":"rejected: "+p.join("; ")),this.addLog({system:"windchill",direction:"in",level:o?"ok":"error",title:o?`Windchill asked to release ${t.number} Rev ${t.rev} (${e.id}): approved`:`Windchill asked to release ${t.number} Rev ${t.rev} (${e.id}): rejected, ${h.length} check${h.length!==1?"s":""} failing`,detail:o?`All blocking checks pass. Decision ${c}`:p.join("; "),ref:e.id,partNumber:t.number,tag:"decision",meta:{decisionId:c,snapshotHash:f,reasons:p}}),this.refreshGate(t.number),{decision:o?"APPROVE":"REJECT",decisionId:c,reasons:p}}receivePlmEvent(e,t){const i=this.part(e);if(i.releasedAt)return;const a=i.pendingDecisionId;i.releasedAt=Gt(),i.releasedDecisionId=a,i.pendingDecisionId=null,this.audit("Windchill","part.released",i.number,i.number,`${t} / ${a}`),this.addLog({system:"windchill",direction:"in",level:"ok",title:`Windchill confirmed ${i.number} Rev ${i.rev} is Released`,detail:`Lifecycle INWORK → RELEASED by ${t}. Decision ${a}.`,ref:t,partNumber:i.number,tag:"released"}),a&&this.enqueue("plm.attach_record",`part:${i.number}`,i.number,`Attach review record ${a} to ${i.number} in Windchill`,{decisionId:a}),this.refreshGate(i.number)}async wcPromote(e,t,i){const a=this.epoch,o={PartNumber:e,TargetState:"RELEASED",RequestedBy:t},c=await this.net(i,"POST",`${h0}/ChangeMgmt/PromotionRequests`,o,()=>{const g=this.s.wc.parts.get(e);if(!g)throw new Ai(404,"Not Found",null,{error:{message:`No part ${e}`}});if(g.state==="RELEASED")throw new Ai(409,`${e} Rev ${g.revision} is already Released`,null,{error:{message:`${e} Rev ${g.revision} is already Released`}});const f={id:`PR-${String(this.s.wc.nextPr++).padStart(5,"0")}`,partNumber:e,revision:g.revision,status:"OPEN",requestedBy:t,createdOn:Gt(),reasons:[],decisionId:null};return this.s.wc.promotions.push(f),f});if(await Ph(60+Math.random()*60),a!==this.epoch)return c;const u=await this.promotionCheck(c),h=this.s.wc.parts.get(e);if(c.decisionId=u.decisionId,u.decision==="APPROVE"){c.status="APPROVED";const g=h.state;h.state="RELEASED",h.history.push({at:Gt(),from:g,to:"RELEASED",by:`Promotion ${c.id}`}),this.later(()=>this.receivePlmEvent(e,c.id),Xr.plmEvent)}else c.status="REJECTED",c.reasons=u.reasons;const p=i.calls[i.calls.length-1];return p&&(p.responseBody={ID:c.id,Status:c.status,GateDecisionId:c.decisionId,Reasons:c.reasons}),this.changed(e),c}async snapshot(e){await this.ready;const t=this.s,i=this.me(),a=[...t.parts].sort((u,h)=>u.order-h.order).map(u=>{const h=this.gateFor(u);return{number:u.number,name:u.name,rev:u.rev,assembly:u.assembly,model:u.model,plmState:u.releasedAt?"RELEASED":"INWORK",gateOutcome:h.outcome,blockingPassed:h.blockingPassed,blockingTotal:h.blockingTotal,itemsToClear:h.itemsToClear,openCount:t.feedback.filter(p=>p.partNumber===u.number&&(p.status==="open"||p.status==="in_progress")).length}}),o=t.parts.find(u=>u.number===e)??null;let c=null;if(o){const u=this.gateFor(o),h=t.feedback.filter(f=>f.partNumber===o.number).sort((f,_)=>f.number-_.number),p=h.filter(f=>["resolved","waived","dismissed"].includes(f.status)),g=h.filter(f=>f.status==="resolved"&&f.resolvedAt).map(f=>(f.resolvedAt-f.createdAt)/36e5);c={number:o.number,name:o.name,rev:o.rev,assembly:o.assembly,model:o.model,material:o.material,finish:o.finish,process:o.process,cadFiles:o.cadFiles,plmState:o.releasedAt?"RELEASED":"INWORK",review:{title:o.reviewTitle,stage:o.reviewStage,due:fn(o.reviewDue)},gate:{outcome:u.outcome,blockingTotal:u.blockingTotal,blockingPassed:u.blockingPassed,itemsToClear:u.itemsToClear,checks:u.checks,releasedAt:u.releasedAt,decisionId:u.decisionId,snapshotHash:u.snapshotHash},feedback:h.map(f=>({id:f.id,number:f.number,title:f.title,body:f.body,priority:f.priority,category:f.category,status:f.status,source:f.source,triage:f.triage,citation:f.citation,pin:f.pin?{x:f.pin.p[0],y:f.pin.p[1],z:f.pin.p[2],nx:f.pin.n[0],ny:f.pin.n[1],nz:f.pin.n[2]}:null,sheetRef:f.sheetRef,author:this.person(f.authorId),owner:this.person(f.ownerId),jiraKey:f.jiraKey,jiraStatus:f.jiraStatus,syncState:f.syncState,waiverReason:f.waiverReason,waivedBy:this.person(f.waivedById),dismissReason:f.dismissReason,dismissedBy:this.person(f.dismissedById),resolvedBy:f.resolvedBy,resolvedAt:fn(f.resolvedAt),createdAt:fn(f.createdAt),updatedAt:fn(f.updatedAt),thread:f.thread.map(_=>({at:fn(_.at),author:this.person(_.authorId),authorLabel:_.authorLabel,text:_.text,kind:_.kind}))})),reviewers:t.reviewers.filter(f=>f.partNumber===o.number).map(f=>({role:f.role,status:f.status,due:fn(f.due),completedAt:fn(f.completedAt),nudgedAt:fn(f.nudgedAt),person:this.person(f.personId)})),decisions:t.decisions.filter(f=>f.partNumber===o.number).sort((f,_)=>_.at-f.at).map(f=>({id:f.id,at:fn(f.at),outcome:f.outcome,promotionRequestId:f.promotionRequestId,requestedBy:f.requestedBy,snapshotHash:f.snapshotHash,checks:f.checks,hasRecord:!!f.record})),audit:t.audit.filter(f=>f.partNumber===o.number).sort((f,_)=>_.atMs-f.atMs||_.id-f.id).slice(0,60).map(({id:f,at:_,actor:M,action:w,entityId:b,detail:S})=>({id:f,at:_,actor:M,action:w,entityId:b,detail:S})),stats:{total:h.length,open:h.length-p.length,closed:p.length,avgResolveHours:g.length?Math.round(g.reduce((f,_)=>f+_,0)/g.length*10)/10:null},deliveries:t.outbox.filter(f=>f.partNumber===o.number&&f.status!=="delivered").map(f=>({id:f.id,topic:f.topic,label:f.label,status:f.status,attempts:f.attempts,maxAttempts:f.maxAttempts,nextAttemptAt:fn(f.nextAttemptAt),lastError:f.lastError,orderingKey:f.orderingKey}))}}return{workspace:{name:_n.workspace.name,program:_n.workspace.program,currentUser:i,policy:Wr},parts:a,part:c,systems:this.systems()}}systems(){const e=this.s.jira.chaos,t=this.s.outbox.filter(a=>a.status!=="delivered").map(a=>a.status),i=t.filter(a=>a==="dead").length;return{jira:e.jiraOutage?"down":i||Object.values(e).some(Boolean)?"degraded":"healthy",windchill:"healthy",pending:t.filter(a=>a==="pending"||a==="in_flight").length,retrying:t.filter(a=>a==="retrying").length,dead:i,chaos:{...e}}}async log(e=150){return await this.ready,this.s.log.slice(-e).reverse()}async jiraIssues(){return await this.ready,[...this.s.jira.issues.values()].sort((e,t)=>t.updated-e.updated).map(e=>{var t;return{key:e.key,summary:e.summary,status:e.status,resolution:e.resolution,priority:e.priority,assignee:((t=this.person(e.assigneeId))==null?void 0:t.name)??null,assigneeId:e.assigneeId,colabId:e.colabId,updated:fn(e.updated)}})}async plm(){await this.ready;const e={INWORK:"In Work",UNDERREVIEW:"Under Review",RELEASED:"Released"};return{parts:[...this.s.wc.parts.values()].map(t=>({id:t.id,number:t.number,name:t.name,revision:t.revision,version:t.version,state:t.state,stateDisplay:e[t.state],attachments:t.attachments.map(i=>({fileName:i.fileName,mimeType:i.mimeType,size:i.size,createdOn:fn(i.createdOn)})),history:t.history.map(i=>({at:fn(i.at),from:i.from,to:i.to,by:i.by}))})),promotions:[...this.s.wc.promotions].reverse().map(t=>({id:t.id,partNumber:t.partNumber,revision:t.revision,status:t.status,requestedBy:t.requestedBy,createdOn:fn(t.createdOn),reasons:t.reasons,decisionId:t.decisionId}))}}async record(e){var t;return await this.ready,((t=this.s.decisions.find(i=>i.id===e))==null?void 0:t.record)??null}subscribe(e,t){return this.listeners.add(e),queueMicrotask(()=>t(!0)),()=>this.listeners.delete(e)}queueJira(e,t,i,a,o){if(!(e.jiraKey||this.s.outbox.some(h=>h.orderingKey===`feedback:${e.id}`&&h.topic==="jira.create_issue"&&h.status!=="delivered")))return;const u=e.jiraKey??"its Jira issue";a&&this.enqueue("jira.comment",`feedback:${e.id}`,e.partNumber,`Post note on ${u}`,{feedbackId:e.id,text:a,author:o,marker:`rg-${Math.random().toString(16).slice(2,10)}`}),this.enqueue("jira.transition",`feedback:${e.id}`,e.partNumber,`Move ${u} to ${t}`,{feedbackId:e.id,to:t,resolution:i})}async resolveFeedback(e,t){await this.ready;const i=(t??"").trim()||null,a=this.fb(e);if(this.editable(a.partNumber),a.source==="ai"&&a.triage==="untriaged")throw new sn("Triage this AutoReview finding first: accept it or dismiss it.");if(a.status==="resolved")return;const o=this.me();a.status="resolved",a.resolvedAt=Gt(),a.resolvedBy=o.name,this.touch(a),i&&a.thread.push({at:Gt(),authorId:o.id,authorLabel:o.name,text:i,kind:"comment"}),this.systemNote(a,`Resolved by ${o.name}.`),this.audit(o.name,"feedback.resolve",a.partNumber,a.id,i),this.addLog({system:"colab",direction:"internal",level:"ok",title:`${o.name} resolved ${a.id}`,detail:a.title,ref:a.id,partNumber:a.partNumber,tag:"resolve"}),this.queueJira(a,"Done","Done",i,o.name),this.refreshGate(a.partNumber)}async reopenFeedback(e){await this.ready;const t=this.fb(e);if(this.editable(t.partNumber),t.status==="open"||t.status==="in_progress")return;const i=this.me(),a=t.status;t.status="open",t.resolvedAt=null,t.resolvedBy=null,t.waiverReason=null,t.waivedById=null,t.waivedAt=null,t.source==="ai"&&t.triage==="dismissed"&&(t.triage="untriaged",t.dismissReason=null,t.dismissedById=null),this.touch(t),this.systemNote(t,`Reopened by ${i.name}.`),this.audit(i.name,"feedback.reopen",t.partNumber,t.id,`was ${a}`),this.addLog({system:"colab",direction:"internal",level:"info",title:`${i.name} reopened ${t.id}`,detail:t.title,ref:t.id,partNumber:t.partNumber,tag:"reopen"}),this.queueJira(t,"To Do",null,null,i.name),this.refreshGate(t.partNumber)}async waiveFeedback(e,t){await this.ready;const i=(t??"").trim(),a=this.fb(e);if(this.editable(a.partNumber),a.source==="ai"&&a.triage==="untriaged")throw new sn("Triage this AutoReview finding first: accept it or dismiss it.");const o=Wr.rules.find(u=>u.type==="no_open_feedback"&&(u.params.priorities??[]).includes(a.priority));if(o&&o.params.allowWaiver===!1)throw new sn(`The release policy doesn't allow waiving ${a.priority} feedback. Resolve it instead.`);if(i.length<u0)throw new sn("Add a reason (at least 12 characters) so the review record explains the decision.");const c=this.me();a.status="waived",a.waiverReason=i,a.waivedById=c.id,a.waivedAt=Gt(),this.touch(a),this.systemNote(a,`Waived by ${c.name}: ${i}`),this.audit(c.name,"feedback.waive",a.partNumber,a.id,i),this.addLog({system:"colab",direction:"internal",level:"ok",title:`${c.name} waived ${a.id}`,detail:i,ref:a.id,partNumber:a.partNumber,tag:"waive"}),this.queueJira(a,"Done","Won't Do",`Waived in CoLab: ${i}`,c.name),this.refreshGate(a.partNumber)}async triageFinding(e,t,i){await this.ready;const a=(i??"").trim(),o=this.fb(e);if(this.editable(o.partNumber),o.source!=="ai"||o.triage!=="untriaged")throw new sn(`${o.id} isn't an AutoReview finding waiting for triage.`);const c=this.me();if(t==="accept")o.triage="accepted",o.ownerId=o.ownerId??c.id,this.touch(o),a&&o.thread.push({at:Gt(),authorId:c.id,authorLabel:c.name,text:a,kind:"comment"}),this.systemNote(o,`Accepted by ${c.name}. Tracked like any other ${o.priority}-priority feedback.`),this.audit(c.name,"finding.accept",o.partNumber,o.id,a||null),this.addLog({system:"colab",direction:"internal",level:"ok",title:`${c.name} accepted AutoReview finding ${o.id}`,detail:o.title,ref:o.id,partNumber:o.partNumber,tag:"triage"}),(o.priority==="critical"||o.priority==="high")&&this.enqueue("jira.create_issue",`feedback:${o.id}`,o.partNumber,`Create Jira issue for ${o.id}`,{feedbackId:o.id});else{if(a.length<u0)throw new sn("Say why you're dismissing it (at least 12 characters). The reason goes in the review record.");o.triage="dismissed",o.status="dismissed",o.dismissReason=a,o.dismissedById=c.id,this.touch(o),this.systemNote(o,`Dismissed by ${c.name}: ${a}`),this.audit(c.name,"finding.dismiss",o.partNumber,o.id,a),this.addLog({system:"colab",direction:"internal",level:"ok",title:`${c.name} dismissed AutoReview finding ${o.id}`,detail:a,ref:o.id,partNumber:o.partNumber,tag:"triage"})}this.refreshGate(o.partNumber)}async nudgeReviewer(e,t){await this.ready,this.editable(e);const i=this.s.reviewers.find(o=>o.partNumber===e&&o.role===t);if(!i)throw new sn(`No ${t} review was requested on ${e}.`);if(i.status==="complete")throw new sn(`The ${t} review is already complete.`);const a=this.person(i.personId);i.nudgedAt=Gt(),this.addLog({system:"notify",direction:"out",level:"info",title:`Reminder sent to ${a.name} for the ${t} review`,detail:"In the demo, the reviewer answers a couple of seconds later.",ref:e,partNumber:e,tag:"nudge"}),this.changed(e),this.later(()=>{const o=this.part(e);i.status==="complete"||o.releasedAt||(i.status="complete",i.completedAt=Gt(),this.audit(a.name,"review.complete",e,t),this.addLog({system:"colab",direction:"in",level:"ok",title:`${a.name} completed the ${t} review`,detail:"Simulated reviewer response.",ref:e,partNumber:e,tag:"review"}),this.refreshGate(e))},Xr.reviewer)}async requestRelease(e){await this.ready;const t=this.part(e);if(t.releasedAt)throw new sn(`${t.number} Rev ${t.rev} is already released.`);const i=this.me(),a={calls:[]};let o;try{o=await this.wcPromote(e,i.name,a)}catch(u){const h=u instanceof Ai?`${u.status} ${u.message}`:String(u);throw this.addLog({system:"windchill",direction:"out",level:"error",title:`Windchill didn't take the promotion request for ${e}: ${h}`,ref:e,partNumber:e,tag:"promotion",meta:{calls:a.calls}}),new sn(`Windchill didn't accept the promotion request (${h}).`)}const c={APPROVED:"ok",REJECTED:"error",ON_HOLD:"warn"}[o.status]??"info";return this.addLog({system:"windchill",direction:"out",level:c,title:`Promotion request ${o.id} for ${e} Rev ${t.rev}: ${o.status.replace("_"," ").toLowerCase()}`,detail:o.reasons.join("; ")||null,ref:o.id,partNumber:e,statusCode:201,latencyMs:a.calls.reduce((u,h)=>u+(h.latencyMs??0),0),tag:"promotion",meta:{calls:a.calls}}),this.changed(e),{promotionRequestId:o.id,status:o.status,reasons:o.reasons,decisionId:o.decisionId}}async retryDelivery(e){await this.ready;const t=this.s.outbox.find(i=>i.id===e);if(!t)throw new sn(`Delivery ${e} doesn't exist.`);t.status!=="dead"&&t.status!=="retrying"||(t.status==="dead"&&(t.maxAttempts=t.attempts+3,t.status="pending"),t.nextAttemptAt=Gt(),this.addLog({system:"gate",direction:"internal",level:"info",title:`${this.me().name} retried: ${t.label}`,ref:String(t.id),partNumber:t.partNumber,tag:"retry-now"}),t.orderingKey.startsWith("feedback:")&&this.refreshSync(t.orderingKey.slice(9)),t.partNumber&&this.refreshGate(t.partNumber),this.wake())}async setChaos(e){await this.ready;const t={jiraOutage:"Jira API outage (503s)",jiraLostResponses:"Jira drops create responses",duplicateWebhooks:"Jira sends every webhook twice",slowNetwork:"Slow network (+600 ms)"},i=this.s.jira.chaos;for(const a of Object.keys(e)){const o=e[a];o==null||i[a]===o||(i[a]=o,this.addLog({system:"gate",direction:"internal",level:o?"warn":"info",title:`Simulation ${o?"on":"off"}: ${t[a]}`,tag:"chaos"}))}return this.changed(null),{...i}}async reset(){this.epoch++;for(const e of this.timers)clearTimeout(e);this.timers.clear(),this.wakeTimer&&clearTimeout(this.wakeTimer),this.wakeTimer=null,this.pumping=!1,this.ready=this.load(),await this.ready,this.emit({type:"reset",data:{}})}async jiraTransition(e,t,i){await this.ready;const a=this.person(i)??this.me();await Ph(40+Math.random()*50),this.jiraDoTransition(e,t,t==="Done"?"Done":null,{id:a.id,name:a.name})}async plmPromote(e,t){await this.ready;const i={calls:[]};try{const a=await this.wcPromote(e,t.name,i);return{promotionRequestId:a.id,status:a.status,reasons:a.reasons,decisionId:a.decisionId}}catch(a){throw new sn(a instanceof Ai?a.message:String(a))}}attachmentUrl(){return null}}async function BR(){try{if((await fetch("/api/health",{cache:"no-store"})).ok)return new vx}catch{}return new FR}document.documentElement.dataset.theme=Ee.getState().theme;fx.createRoot(document.getElementById("root")).render(m.jsx(vR,{}));BR().then(r=>Ee.getState().boot(r));
