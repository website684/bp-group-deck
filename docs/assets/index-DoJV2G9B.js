var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ne());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var ee=!1,S=-1,C=5,w=-1;function T(){return g?!0:!(e.unstable_now()-w<C)}function te(){if(g=!1,ee){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ne():ee=!1}}}var ne;if(typeof y==`function`)ne=function(){y(te)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=te,ne=function(){ie.postMessage(null)}}else ne=function(){_(te,0)};function ae(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ne()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return T(e.type,t,e.props)}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!w.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)w.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=i();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var a={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return s(e,t,null,r)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.8`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=n(),r=i(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),w=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),ne=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case w:return`Suspense`;case T:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case ne:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function O(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function k(e,t){fe++,de[fe]=e.current,e.current=t}var me=pe(null),he=pe(null),ge=pe(null),_e=pe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}O(me),k(me,e)}function ye(){O(me),O(he),O(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(O(me),O(he)),_e.current===e&&(O(_e),Qf._currentValue=ue)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ht])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return ke.call(Ft,e)?!0:ke.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(le(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&nn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&nn(e,a,t[a])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[gt]||null;if(!i)throw Error(s(90));Jt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(h({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function vr(e){if(Wt(Et(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(vn){var xr;if(vn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=vn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Gt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Ed(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};vn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)vi(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=_i(31,n,t,i),e.elementType=re,e.lanes=a,e;case y:return Si(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=_i(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case w:return e=_i(13,n,t,i),e.elementType=w,e.lanes=a,e;case T:return e=_i(19,n,t,i),e.elementType=T,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:o=10;break a;case ee:o=9;break a;case C:o=11;break a;case te:o=14;break a;case ne:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=_i(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-Ke(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(s(519));function Ki(e){throw Qi(Di(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=uf(e)}else t===27?(t=A,Zd(e.type)?(e=lf,lf=null,A=e):A=t):A=Hi?cf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=pe(null),ea=null,ta=null;function na(e,t,n){k($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,O($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ia(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ia(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function oa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;jr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===_e.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(s(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=E.S;E.S=function(e,t){tu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=pe(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?k(Ta,Ta.current):k(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(s(460)),Aa=Error(s(474)),ja=Error(s(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(s(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(s(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===ne&&Fa(a)===t.type)?(t=i(t,n.props),Ha(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Si(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case ne:return t=Fa(t),f(e,t,n)}if(le(t)||oe(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===S)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ne:return n=Fa(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===S)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ne:return r=Fa(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===S)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),j&&Li(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),j&&Li(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ne&&Fa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ha(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=Si(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=xi(a.type,a.key,a.props,null,e.mode,c),Ha(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ti(a,e.mode,c),c.return=e,e=c}return o(e);case ne:return a=Fa(a),b(e,r,a,c)}if(le(a))return h(e,r,a,c);if(oe(a)){if(l=oe(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Va(a),c);if(a.$$typeof===S)return b(e,r,ua(e,a),c);Ua(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Ci(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=pe(null),oo=pe(0);function so(e,t){e=Gl,k(oo,e),k(ao,t),Gl=e|t.baseLanes}function co(){k(oo,Gl),k(ao,ao.current)}function lo(){Gl=oo.current,O(ao),O(oo)}var uo=pe(null),fo=null;function po(e){var t=e.alternate;k(N,N.current&1),k(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){k(N,N.current),k(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(k(N,N.current),k(uo,e),fo===null&&(fo=e)):go(e)}function go(){k(N,N.current),k(uo,uo.current)}function _o(e){O(uo),fo===e&&(fo=null),O(N)}var N=pe(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(s(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){E.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(s(300));e===null||z||(e=e.dependencies,e!==null&&sa(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var i=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=i)throw Error(s(301));if(i+=1,I=F=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}E.H=Ks,a=t(n,r)}while(xo);return a}function jo(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(s(467)):Error(s(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===S)return la(e)}throw Error(s(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!jr(a,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);jr(a,t.memoizedState)||(z=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Wo(e,t,n){var r=P,i=R(),a=j;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!jr((F||i).memoizedState,n);if(o&&(i.memoizedState=n,z=!0),i=i.queue,hs(qo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,i,n,t),null),G===null)throw Error(s(349));a||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Yo(e){var t=fi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,i){if(Bs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};E.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,$o(t,a)):(a.next=n.next,t.pending=n.next=a)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(j){var n=G.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=cf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return jr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),jr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,zs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=As(e).queue;Ds(e,i,t,ue,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return la(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=di(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),G===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(s(479))}else t=di(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Us={readContext:la,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:la,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,i=Fo();if(j){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||Go(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ms(qo.bind(null,r,a,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ai(e)}function $s(e){console.error(e)}function ec(e){ai(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,i,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(j)return t=uo.current,t===null?(r!==Gi&&(t=Error(s(423),{cause:r}),Qi(Di(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Di(r,n),i=rc(e.stateNode,r,i),$a(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Gi&&(e=Error(s(422),{cause:r}),Qi(Di(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Di(a,n),Zl===null?Zl=[a]:Zl.push(a),Y!==4&&(Y=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(iu===null||!iu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=ic(i),ac(i,e,n,r),$a(n,i),!1}n=n.return}while(n!==null);return!1}var sc=Error(s(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&s&&zi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return hc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(mo(t),i)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(z||oa(e,t,n,!1),i=(n&e.childLanes)!==0,z||i){if(r=G,r!==null&&(o=lt(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,fi(e,o),hu(r,e,o),sc;Du(),t=gc(e,t,n)}else e=a.treeContext,A=cf(o.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return ca(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Xi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(j){if(i?po(t):go(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(go(t),i=t.mode,c=Oc({mode:`hidden`,children:c},i),r=Si(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,i=t.mode,r=Oc({mode:`visible`,children:r.children},i),c=Si(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Qi({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||oa(e,t,n,!1),o=(n&e.childLanes)!==0,z||o){if(o=G,o!==null&&(r=lt(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),hu(o,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=cf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return i?(go(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,i,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(i=c.cachePool,i===null?i=Oa():(l=M._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(N,o),cc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&sa(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),na(t,M,e.memoizedState.cache),Xi();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:na(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===C){t.tag=11,t=lc(null,t,e,r,n);break a}else if(i===te){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(s(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Zs(r,t.pendingProps),xc(e,t,r,i,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ya(e,t),no(t,r,null,n);var o=t.memoizedState;if(r=o.cache,na(t,M,r),r!==a.cache&&aa(t,[M],n,!0),to(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==i){i=Di(Error(s(424)),t),Qi(i),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=cf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===i){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[ht]=t,r[gt]=e,Pd(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&j&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Hi=t,Wi=!0,i=A,Zd(t.type)?(lf=i,A=cf(r.firstChild)):A=i),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((i=r=A)&&(r=tf(r,t.type,t.pendingProps,Wi),r===null?i=!1:(t.stateNode=r,Hi=t,A=cf(r.firstChild),Wi=!1,i=!0)),i||Ki(t)),be(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Oo(e,t,jo,null,null,n),Qf._currentValue=i),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=nf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return Ec(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,ca(t),i=la(i),r=r(i),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(M),e===null?(i=Ea(),i===null&&(i=G,a=ha(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ja(t),na(t,M,i)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,na(t,M,r),r!==i.cache&&aa(t,[M],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),na(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(M),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),B(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Lc(t),a===null?(B(t),Rc(t,i,null,r,n)):(B(t),zc(t,a))):a?a===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,a)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,i,e,r,n)),null;case 27:if(xe(t),n=ge.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}e=me.current,Yi(t)?qi(t,e):(e=ff(i,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(xe(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}if(a=me.current,Yi(t))qi(t,a);else{var o=Bd(ge.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[ht]=t,a[gt]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=ge.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Hi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ki(t,!0)}else e=Bd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(s(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),i=!1}else i=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ra(t.type),B(t),null;case 19:if(O(N),r=t.memoizedState,r===null)return B(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=vo(e),a!==null){for(t.flags|=128,Vc(r,!1),e=a.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return k(N,N.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>nu&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304)}else{if(!i)if(e=vo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!j)return B(t),null}else 2*Pe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=N.current,k(N,i?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&O(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(M),B(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Uc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(M),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(N),null;case 4:return ye(),null;case 10:return ra(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&O(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Bi(t),t.tag){case 3:ra(M),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:O(N);break;case 10:ra(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&O(Ta);break;case 24:ra(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ht]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Zs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(s(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(s(160));fl(a,o,i),U=null,ul=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[St]||a[ht]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[ht]=e,Ot(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[ht]=e,Ot(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){i=e.stateNode;try{en(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Qc(e,i,n===null?i:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||i,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;nl(e,el(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(en(a,``),n.flags&=-33),nl(e,el(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;tl(e,el(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=la(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:E.T===null?ft():dd()}function mu(){if(Yl===0)if(!(q&536870912)||j){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),at(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=a,ql|=a,i=4;break a}a=Ql,Ql=i,a!==null&&(Ql===null?Ql=a:Ql.push.apply(Ql,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=eu+300-Pe(),10<i)){if(yu(r,t,Yl,!Hl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Nl(t,a,d);var m=(a&62914560)===a?eu-Pe():(a&4194048)===a?tu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ta=ea=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=yi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=tt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,li(),n}function Cu(e,t){P=null,E.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Di(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=E.H;return E.H=Us,e===null?Us:e}function Eu(){var e=E.A;return E.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,W=r,E.H=i,E.A=a,K===null&&(G=null,q=0,li()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=Pe()+500,Su(e,t)):Ul=tt(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,a,1);break;case 2:case 9:if(Na(a)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(a)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Wf(o):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,a,5);break;case 6:J=0,Vl=null,Pu(e,t,a,6);break;case 8:xu(),Y=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ta=ea=null,E.H=r,E.A=i,W=n,K===null?(G=null,q=0,li(),Y):0}function ju(){for(;K!==null&&!Me();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=bi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ta=ea=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Di(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Di(n,e.current)),K=null;return}t.flags&32768?(j||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=ci,ot(e,n,a,o,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,i=D.p,D.p=2,o=W,W|=4;try{sl(e,t,n)}finally{W=o,D.p=i,E.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,D.p=r,E.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,D.p=r,E.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=dt(su),r=E.T,i=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var a=au,o=su;if(X=0,ou=au=null,su=0,W&6)throw Error(s(331));var c=W;if(W|=4,Il(a.current),Ol(a,a.current,o,n),W=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,a)}catch{}return!0}finally{D.p=i,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Di(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Di(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Pe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=fi(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=et(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=et(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?Ae(Ie,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ri.length;hd++){var gd=ri[hd];ii(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=wt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),o=[];a:{var s=ni.get(e);if(s!==void 0){var c=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:c=Jn;break;case`focusin`:u=`focus`,c=zn;break;case`focusout`:u=`blur`,c=zn;break;case`beforeblur`:case`afterblur`:c=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Xn;break;case Yr:case Xr:case Zr:c=Bn;break;case ti:c=Zn;break;case`scroll`:case`scrollend`:c=Mn;break;case`wheel`:c=Qn;break;case`copy`:case`cut`:case`paste`:c=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Yn;break;case`toggle`:case`beforetoggle`:c=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?wt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Et(c),h=u==null?s:Et(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Et(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=yr;else if(pr(s))if(br)v=kr;else{v=Dr;var y=Er}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Xt(s,`number`,s.value)}switch(y=r?Et(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(o,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(o,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,a);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:rn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[gt]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}$t(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ot(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=ge.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Dt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Ot(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,Ot(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),Ot(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,Ot(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Ot(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=hi,e):hi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ut(t);var n=fi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.8`)throw Error(s(527,Lp,`19.2.8`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Qs,a=$s,o=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=i(),u=c(),d=`bp-one-client`;function f(){try{let e=localStorage.getItem(d);if(!e)return null;let t=JSON.parse(e);return!t.name&&!t.logo?null:t}catch{return null}}function p(e){localStorage.setItem(d,JSON.stringify(e))}var m=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),h=e(((e,t)=>{t.exports=m()}))(),g=[`#FFC401`,`#D0271D`,`#E4002B`,`#0057B8`,`#5A31F4`,`#00A82D`,`#FF6900`,`#7C1F87`],_=[`General`,`Retail & Q-commerce`,`Manufacturing`,`Logistics & Delivery`,`BFSI & Field Sales`,`Tech & Services`];function v({initial:e,onDone:t}){let[n,r]=(0,l.useState)(e?.name??``),[i,a]=(0,l.useState)(e?.color??`#FFC401`),[o,s]=(0,l.useState)(e?.logo??null),[c,u]=(0,l.useState)(e?.industry??`General`),d=(0,l.useRef)(null),f=e=>{if(!e)return;if(e.size>2*1024*1024){alert(`Logo file is over 2MB — please use a smaller PNG/SVG.`);return}let t=new FileReader;t.onload=()=>s(String(t.result)),t.readAsDataURL(e)},m=(e=!1)=>{p(e?{name:``,color:`#FFC401`,logo:null,industry:`General`}:{name:n.trim(),color:i,logo:o,industry:c}),t()};return(0,h.jsx)(`div`,{className:`setup`,children:(0,h.jsxs)(`div`,{className:`setup-card`,children:[(0,h.jsx)(`img`,{src:`assets/logo/bp-white.png`,alt:`BetterPlace`,className:`setup-bp`}),(0,h.jsx)(`h1`,{children:`Set up this pitch`}),(0,h.jsx)(`p`,{className:`setup-sub`,children:`Add the client's brand once — their logo and colour follow you through every slide.`}),(0,h.jsx)(`label`,{className:`f-label`,children:`Client name`}),(0,h.jsx)(`input`,{className:`f-input`,placeholder:`e.g. Reliance Retail`,value:n,onChange:e=>r(e.target.value)}),(0,h.jsxs)(`label`,{className:`f-label`,children:[`Client logo `,(0,h.jsx)(`span`,{children:`(PNG / SVG, on transparent if possible)`})]}),(0,h.jsxs)(`div`,{className:`f-logo-row`,children:[(0,h.jsx)(`button`,{className:`f-upload`,onClick:()=>d.current?.click(),children:o?`Replace logo`:`Upload logo`}),o&&(0,h.jsx)(`span`,{className:`f-logo-preview`,children:(0,h.jsx)(`img`,{src:o,alt:`Client logo`})}),o&&(0,h.jsx)(`button`,{className:`f-clear`,onClick:()=>s(null),children:`Remove`}),(0,h.jsx)(`input`,{ref:d,type:`file`,accept:`image/*`,hidden:!0,onChange:e=>f(e.target.files?.[0])})]}),(0,h.jsxs)(`label`,{className:`f-label`,children:[`Brand colour `,(0,h.jsx)(`span`,{children:`(used as the partner accent)`})]}),(0,h.jsxs)(`div`,{className:`f-colors`,children:[g.map(e=>(0,h.jsx)(`button`,{className:`f-swatch${i===e?` on`:``}`,style:{background:e},onClick:()=>a(e),"aria-label":e},e)),(0,h.jsx)(`input`,{type:`color`,value:i,onChange:e=>a(e.target.value),className:`f-picker`,title:`Custom colour`})]}),(0,h.jsx)(`label`,{className:`f-label`,children:`Industry lens`}),(0,h.jsx)(`div`,{className:`f-industries`,children:_.map(e=>(0,h.jsx)(`button`,{className:`f-chip${c===e?` on`:``}`,onClick:()=>u(e),children:e},e))}),(0,h.jsxs)(`div`,{className:`setup-actions`,children:[(0,h.jsx)(`button`,{className:`btn-primary`,onClick:()=>m(!1),children:`Open the deck studio →`}),(0,h.jsx)(`button`,{className:`btn-ghost`,onClick:()=>m(!0),children:`Skip — present without client branding`})]})]})})}var y=(e,t,n,r=!1)=>`
  <div>
    <div class="bframe${r?` crop`:``}${r===`mid`?` mid`:``}">
      <div class="bbar"><span class="bdots"><i></i><i></i><i></i></span><span class="burl">${t}</span></div>
      <img src="${e}" alt="${n||t}" loading="lazy"/>
    </div>
    ${n?`<div class="bcap">${n}</div>`:``}
  </div>`,b=(e,t,n,r)=>`
  <div class="fi rise" style="animation-delay:${r}s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${e}</svg></span><div><h4>${t}</h4><p>${n}</p></div></div>`,x=(e,t,n,r)=>`
  <div class="ai-note">
    <div class="ai-note-head"><span class="ai-note-bot">✦</span><span class="ai-note-agent">${e}</span><span class="ai-note-tag">AI Labs inside</span></div>
    <h5>${t}</h5>
    <p>${n}</p>
    ${r?`<div class="ai-note-stat">${r}</div>`:``}
  </div>`,ee=(e,t,n,r,i,a)=>[S(e,t,n,i.slice(0,2),a),S(`${e}-2`,t,r,i.slice(2),a)],S=(e,t,n,r,i)=>({id:e,theme:`light`,title:`The problems we solve`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">${t} · the problems on your desk → what changes</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">${n}</h2>
      <div class="pmap">
        ${r.map((e,t)=>`
        <div class="pmrow rise" style="animation-delay:${.2+t*.09}s">
          <div class="pain"><h4>${e.pain}</h4><p>${e.painDetail}</p><span class="stat">${e.painStat}</span></div>
          <div class="fix"><h4>${e.fix}</h4><p>${e.fixDetail}</p><span class="stat">${e.fixStat}</span></div>
        </div>`).join(``)}
      </div>
      <div class="pmfoot rise" style="animation-delay:.6s">Sources: ${i}</div>
    </div>`}),C=(e,t,n,r)=>({id:e,theme:`darker`,title:`Outcomes`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The outcomes · what actually changes for you</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:30ch;">${t}</h2>
      <div class="ledger rise" style="animation-delay:.2s">
        ${n.map((e,t)=>`
        <div class="lrow rise" style="animation-delay:${.24+t*.09}s">
          <div class="ln">${e.n}</div>
          <div class="lw"><h4>${e.what}</h4><p>${e.how}</p></div>
          <div class="lp">${e.proof}</div>
        </div>`).join(``)}
      </div>
      <div class="clientline rise" style="color:rgba(255,255,255,.6);margin-top:18px;animation-delay:.7s">${r}</div>
    </div>`}),w={search:`<circle cx="11" cy="11" r="8"/><path d="M21 21l-4-4"/>`,doc:`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>`,shield:`<path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/>`,bot:`<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M9 14h.01M15 14h.01"/>`,globe:`<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/>`,play:`<circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4z"/>`,trophy:`<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4a2 2 0 0 0 2 4M17 6h3a2 2 0 0 1-2 4"/>`,eye:`<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`,chart:`<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/>`,plug:`<path d="M9 2v6M15 2v6M7 8h10v4a5 5 0 0 1-10 0z"/><path d="M12 17v5"/>`,clock:`<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,user:`<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 12 0v1"/>`,users:`<circle cx="9" cy="8" r="3"/><path d="M2 21a7 7 0 0 1 14 0"/><circle cx="18" cy="9" r="2"/>`,card:`<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>`,warn:`<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/>`,check:`<path d="M20 6L9 17l-5-5"/>`,layers:`<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>`,mic:`<rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v4"/>`,cam:`<path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>`,map:`<path d="M12 21s-7-5.1-7-11a7 7 0 0 1 14 0c0 5.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>`,lock:`<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>`,zap:`<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>`,building:`<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>`,repeat:`<path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8"/><path d="M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 0 1-4 4H4.2"/>`,book:`<path d="M4 5h16v11H4z"/><path d="M4 20h16"/>`,lang:`<path d="M5 8h8M9 5v3M7 8c0 4 4 7 7 8M11 8c-1 4-4 7-7 8"/><path d="M14 21l4-9 4 9M15.5 17.5h5"/>`},T=[{id:`s1`,theme:`dark`,title:`COVER`,html:`
    <div class="glow"></div>
    <div style="position:relative;z-index:2;">
      <span class="eyebrow rise" style="animation-delay:.1s">Group Overview · 2026</span>
      <h1 class="big rise" style="animation-delay:.2s">One platform.<br/>Every <span class="amp">frontline</span> need.</h1>
      <p class="sub rise" style="animation-delay:.35s">The operating system for the blue-collar worker — <b style="color:#fff">hire, verify, manage, train, pay &amp; staff</b> on one platform. Software plus managed services, built mobile-first for the frontline.</p>
      <div class="meta rise" style="animation-delay:.5s"><span>The problem</span><span>What we do</span><span>How it works</span><span>Who we serve</span><span>Proven impact</span></div>
    </div>
    <div class="chero">
      <div class="cring spin"></div><div class="cring r2"></div><div class="cring r3"></div>
      <div class="ccore rise" style="animation-delay:.4s"><div><b>Better<em>Place</em></b><span>hire → pay → rehire</span></div></div>
      <div class="cpill p1 rise" style="animation-delay:.6s"><div class="cn"><em>25</em>M+</div><div class="cl">Worker profiles</div></div>
      <div class="cpill p2 rise" style="animation-delay:.75s"><div class="cn">1,000</div><div class="cl">Enterprises</div></div>
      <div class="cpill p3 rise" style="animation-delay:.9s"><div class="cn">500+</div><div class="cl">Cities</div></div>
      <div class="cpill p4 rise" style="animation-delay:1.05s"><div class="cn">8</div><div class="cl">Markets · IN·SEA·GCC</div></div>
    </div>
  `},{id:`s2`,theme:`light`,title:`THE PROBLEM`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The problem · voice of the enterprise</span>
      <h2 class="rise" style="animation-delay:.08s">Managing a frontline workforce is broken by <span style="color:var(--red)">fragmentation</span>.</h2>
      <div class="mediasplit" style="margin-top:18px;align-items:stretch;">
        <div class="sprawl rise" style="animation-delay:.2s">
          <div class="shead">Today · 5+ disconnected vendors · 0 integrations</div>
          <div class="schips">
            <svg class="fragsvg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path class="bl" d="M50 50 L17 23"/><path class="bl" d="M50 50 L80 21"/>
              <path class="bl" d="M50 50 L21 52"/><path class="bl" d="M50 50 L81 50"/>
              <path class="bl" d="M50 50 L19 80"/><path class="bl" d="M50 50 L79 80"/>
            </svg>
            <span class="hub"><span class="hubi"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9" r="2.4"/><path d="M15 20a5 5 0 0 1 6.5-4.8"/></svg></span><b>Your HR / Ops team</b><span class="hs">manually stitching it together</span></span>
            <span class="vtool t1"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>ATS</span>
            <span class="vtool t2"><svg viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/></svg>BGV vendor</span>
            <span class="vtool t3"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Attendance</span>
            <span class="vtool t4"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>Payroll</span>
            <span class="vtool t5"><svg viewBox="0 0 24 24"><path d="M4 5h16v11H4z"/><path d="M4 20h16"/></svg>LMS</span>
            <span class="vtool t6"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M2 21a7 7 0 0 1 14 0"/><circle cx="18" cy="9" r="2"/></svg>Staffing</span>
            <span class="brk" style="left:33.5%;top:36.5%"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></span>
            <span class="brk" style="left:65%;top:35.5%"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></span>
            <span class="brk" style="left:35.5%;top:51%"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></span>
            <span class="brk" style="left:65.5%;top:50%"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></span>
            <span class="brk" style="left:34.5%;top:65%"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></span>
            <span class="brk" style="left:64.5%;top:65%"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></span>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;justify-content:center;gap:15px;">
          <div class="pitem rise" style="animation-delay:.3s"><span class="pic"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></span><div><h4>No end-to-end platform</h4><p>Stitch 5+ point tools together — nothing talks to each other.</p></div></div>
          <div class="pitem rise" style="animation-delay:.37s"><span class="pic"><svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8M12 18v3"/></svg></span><div><h4>Wrong-fit software</h4><p>White-collar, English-only, desktop UI the frontline won't adopt.</p></div></div>
          <div class="pitem rise" style="animation-delay:.44s"><span class="pic"><svg viewBox="0 0 24 24"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><h4>Compliance &amp; leakage risk</h4><p>Manual attendance, payroll leakage, vendor non-compliance, audit exposure.</p></div></div>
          <div class="pitem rise" style="animation-delay:.51s"><span class="pic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M14 9.5A2.5 2.5 0 0 0 11.5 8H9m5 8A2.5 2.5 0 0 1 11.5 16H9m0-4h5"/></svg></span><div><h4>Blue-collar economics don't fit</h4><p>Tools priced for white-collar salaries, not frontline wages.</p></div></div>
          <div class="pitem rise" style="animation-delay:.58s"><span class="pic"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M19 8v6M22 11h-6"/></svg></span><div><h4>Supply gaps at scale</h4><p>High-volume, high-churn hiring agencies can't fill fast enough.</p></div></div>
        </div>
      </div>
      <div class="probfoot rise" style="animation-delay:.66s">Enterprises are exhausted by vendor sprawl. They want <b>one integrated, mobile-first, hire-to-pay partner</b> — not another tool.</div>
    </div>
  `},{id:`s2b`,theme:`darker`,title:`EVERY SEAT AT THE TABLE`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">One platform · a different win for every seat at your table</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:30ch;">Whoever you brought to this meeting, we built something for them.</h2>
      <div class="personas">
        <div class="persona rise" style="--pc:#FFC401;animation-delay:.22s"><div class="who">CHRO / Head of HR</div><h4>One truth about your workforce</h4><p>One record from hire to rehire — headcount, history and audit answers from a single screen.</p><div class="get">→ goBetter HRIS · Hire &amp; Onboard decks</div></div>
        <div class="persona rise" style="--pc:#32CAD4;animation-delay:.30s"><div class="who">COO / Ops head</div><h4>Sites staffed, shifts filled, no ghosts</h4><p>Face-verified attendance, live shortfall visibility, rosters published in minutes.</p><div class="get">→ Attendance · gigBetter decks</div></div>
        <div class="persona rise" style="--pc:#E8503F;animation-delay:.38s"><div class="who">CFO / Compliance</div><h4>Leakage stopped, liability shielded</h4><p>−90% payroll leakage; every vendor challan reconciled; 12%-interest surprises never accrue.</p><div class="get">→ Payroll &amp; Compliance · verifyBetter decks</div></div>
        <div class="persona rise" style="--pc:#3DBE7B;animation-delay:.46s"><div class="who">L&amp;D head</div><h4>Training the frontline finishes</h4><p>88% completion in 35+ languages, proctored and audit-ready — with ROI you can show.</p><div class="get">→ skillBetter deck</div></div>
        <div class="persona rise" style="--pc:#7C6BF0;animation-delay:.54s"><div class="who">Founder / CEO</div><h4>Ops that scale without headcount</h4><p>AI agents at ₹0.37 an interaction, one partner across 8 markets, outcomes with named proof.</p><div class="get">→ AI Labs deck · the outcome ledger ahead</div></div>
      </div>
      <div class="clientline rise" style="color:rgba(255,255,255,.6);margin-top:18px;animation-delay:.65s">This deck is clickable — from the menu, open the deep-dive for whoever is in the room.</div>
    </div>
  `},{id:`s3`,theme:`dark`,title:`WHO WE ARE`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Who we are</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:22ch;">Asia's one and only <span style="color:var(--yellow)">frontline workforce platform</span>.</h2>
      <div class="mediasplit" style="margin-top:18px;">
        <div>
          <p class="lede rise" style="animation-delay:.18s;">We run the complete <b style="color:#fff">hire → onboard → verify → attend → upskill → pay → rehire</b> lifecycle of the blue-collar worker on one integrated platform — software plus managed staffing &amp; gig, powering the next billion workers.</p>
          <div class="stats" style="margin-top:28px;gap:22px 40px;">
            <div class="stat rise" style="animation-delay:.38s"><div class="n"><em data-t="25">0</em>M+</div><div class="l">Worker profiles</div></div>
            <div class="stat rise" style="animation-delay:.46s"><div class="n" data-t="1000">0</div><div class="l">Enterprises powered</div></div>
            <div class="stat rise" style="animation-delay:.54s"><div class="n" data-t="500">0</div><div class="l">Cities</div></div>
            <div class="stat rise" style="animation-delay:.62s"><div class="n">8</div><div class="l">Markets · IN·SEA·GCC</div></div>
            <div class="stat rise" style="animation-delay:.70s"><div class="n">10+</div><div class="l">Years on the frontline</div></div>
          </div>
        </div>
        <div class="rise" style="animation-delay:.3s">
          <div class="covmap">
            <span class="cgrid"></span>
            <svg class="arcs" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path class="arc" d="M28 60 Q50 40 73 62"/>
              <path class="arc" d="M28 60 Q30 37 47 23"/>
            </svg>
            <span class="cmlabel" style="left:27%;top:33%;"><b>India</b> · 500+ cities</span>
            <span class="cmlabel" style="left:49%;top:9%;">GCC</span>
            <span class="cmlabel" style="left:78%;top:41%;">SEA</span>
            <span class="cmpin" style="left:25%;top:47%"><span class="dot"></span><span class="rng"></span></span>
            <span class="cmpin" style="left:31%;top:57%"><span class="dot"></span></span>
            <span class="cmpin" style="left:21%;top:63%"><span class="dot"></span><span class="rng"></span></span>
            <span class="cmpin" style="left:35%;top:67%"><span class="dot"></span></span>
            <span class="cmpin" style="left:28%;top:75%"><span class="dot"></span></span>
            <span class="cmpin teal" style="left:46%;top:26%"><span class="dot"></span><span class="rng"></span></span>
            <span class="cmpin teal" style="left:53%;top:22%"><span class="dot"></span></span>
            <span class="cmpin teal" style="left:42%;top:20%"><span class="dot"></span></span>
            <span class="cmpin teal" style="left:67%;top:62%"><span class="dot"></span><span class="rng"></span></span>
            <span class="cmpin teal" style="left:74%;top:70%"><span class="dot"></span></span>
            <span class="cmpin teal" style="left:80%;top:60%"><span class="dot"></span></span>
            <span class="cmpin teal" style="left:70%;top:52%"><span class="dot"></span></span>
          </div>
          <div class="phonecap" style="margin-top:14px;">One platform · localised compliance across 8 markets</div>
        </div>
      </div>
    </div>
  `},{id:`s4`,theme:`light`,title:`JOURNEY`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Closing the technology gap — one milestone at a time</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:24ch;">A decade of building the frontline stack, module by module.</h2>
      <div class="timeline">
        <span class="tline"></span>
        <div class="tlrow">
          <div class="tlnode rise" style="--nc:var(--teal);animation-delay:.2s"><div class="yr">2015–17</div><div class="knob"></div><div class="tcard"><h4>Verify</h4><ul><li>Founded</li><li>BetterPlace Verify (BGV)</li><li>200 customers</li></ul></div></div>
          <div class="tlnode rise" style="--nc:var(--navy-2);animation-delay:.3s"><div class="yr">2018</div><div class="knob"></div><div class="tcard"><h4>Onboard &amp; Attend</h4><ul><li>Digital onboarding</li><li>Attendance</li></ul></div></div>
          <div class="tlnode rise" style="--nc:var(--orange);animation-delay:.4s"><div class="yr">2019–20</div><div class="knob"></div><div class="tcard"><h4>Select &amp; Skill</h4><ul><li>Selection</li><li>Skilling / LMS</li><li>Acq. OkayGo, Ezedox</li></ul></div></div>
          <div class="tlnode rise" style="--nc:var(--red-soft);animation-delay:.5s"><div class="yr">2021–22</div><div class="knob"></div><div class="tcard"><h4>Gig &amp; Fintech</h4><ul><li>BetterPlace Gig</li><li>Acq. Bueno Finance</li></ul></div></div>
          <div class="tlnode rise" style="--nc:var(--navy);animation-delay:.6s"><div class="yr">2023–24</div><div class="knob"></div><div class="tcard"><h4>goBetter + SEA</h4><ul><li>goBetter platform</li><li>Acq. MyRobin, Troopers</li></ul></div></div>
          <div class="tlnode rise" style="--nc:var(--yellow);animation-delay:.7s"><div class="yr">2026</div><div class="knob"></div><div class="tcard"><h4>AI Labs</h4><ul><li>No-code AI agents</li><li>GCC expansion</li></ul></div></div>
        </div>
      </div>
    </div>
  `},{id:`s5`,theme:`light`,title:`THE MODEL`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The model</span>
      <h2 class="rise" style="animation-delay:.08s;margin-bottom:20px;">Three pillars. <span style="color:var(--navy)">One integrated platform.</span></h2>
      <div class="pillars">
        <div class="pcard rise" style="--pc:#1B2D93;animation-delay:.22s"><span class="tag">Platform Solutions · SaaS</span><h3>goBetter</h3><div class="role">Frontline workforce OS</div><p>Hire, verify, onboard, attendance, payroll, upskill — for managers and workers, on one app.</p><ul><li>verifyBetter</li><li>manageBetter</li><li>skillBetter</li></ul></div>
        <div class="pcard rise" style="--pc:#D0271D;animation-delay:.32s"><span class="tag">Platform Services</span><h3>staffBetter</h3><div class="role">Full-time staffing</div><p>Recruitment + contractual staffing with employer-of-record compliance, from a verified pool.</p><ul><li>AasaanJobs</li><li>MyRobin</li><li>Troopers</li></ul></div>
        <div class="pcard rise" style="--pc:#FF9518;animation-delay:.42s"><span class="tag">Platform Services</span><h3>gigBetter</h3><div class="role">Gig &amp; task fulfilment</div><p>Outcome-based, pay-per-task gig deployment with millions of gig workers across India.</p><ul><li>OkayGo</li><li>Troopers</li><li>MyRobin</li></ul></div>
      </div>
      <div class="plug rise" style="animation-delay:.5s"><div class="pl d1"><span class="fl"></span></div><div class="pl d2"><span class="fl"></span></div><div class="pl d3"><span class="fl"></span></div></div>
      <div class="databar rise" style="animation-delay:.56s">
        <div class="dbtop"><span class="dbn">One data layer</span><span class="dbt">All three pillars draw on a single <b style="color:var(--yellow)">verified worker-intelligence layer</b> — the closed hire-to-rehire loop no point solution can match.</span></div>
        <div class="dchips"><span class="dchip">Verified profiles</span><span class="dchip">Mobile-first</span><span class="dchip">35 languages</span><span class="dchip">Analytics-driven</span><span class="dchip">Closed rehire loop</span></div>
      </div>
    </div>
  `},{id:`s6`,theme:`dark`,title:`END TO END LIFECYCLE`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The end-to-end offering</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;">Every stage of the frontline lifecycle. One platform.</h2>
      <div class="flowrail rise" style="animation-delay:.2s">
        <div class="frline">
          <span class="frtrack"><span class="frfill"></span></span>
          <span class="frpulse"></span>
          <div class="frdots">
            <span class="fdot" style="--fc:var(--teal)"></span>
            <span class="fdot" style="--fc:var(--navy-2)"></span>
            <span class="fdot" style="--fc:#568AF7"></span>
            <span class="fdot" style="--fc:var(--yellow)"></span>
            <span class="fdot" style="--fc:var(--green)"></span>
            <span class="fdot" style="--fc:var(--orange)"></span>
          </div>
        </div>
        <div class="frcards">
          <div class="frstage" style="--fc:var(--teal)"><div class="fn">01</div><h4>Hire &amp; Onboard</h4><ul><li>Multi-channel sourcing</li><li>ATS &amp; bulk onboarding</li><li>Auto offer / PF / ESI</li></ul></div>
          <div class="frstage" style="--fc:var(--navy-2)"><div class="fn">02</div><h4>Verify</h4><ul><li>Digital BGV</li><li>ID · address · career</li><li>One-click initiation</li></ul></div>
          <div class="frstage" style="--fc:#568AF7"><div class="fn">03</div><h4>Attend &amp; Manage</h4><ul><li>Geo + facial attendance</li><li>Rostering &amp; shifts</li><li>Vendor / CLMS</li></ul></div>
          <div class="frstage" style="--fc:var(--yellow)"><div class="fn">04</div><h4>Pay &amp; Comply</h4><ul><li>Automated payroll</li><li>Statutory compliance</li><li>Invoice reconciliation</li></ul></div>
          <div class="frstage" style="--fc:var(--green)"><div class="fn">05</div><h4>Upskill &amp; Engage</h4><ul><li>Mobile LMS, 35 langs</li><li>Certifications</li><li>Financial wellness</li></ul></div>
          <div class="frstage" style="--fc:var(--orange)"><div class="fn">06</div><h4>Fulfil · Staff &amp; Gig</h4><ul><li>Full-time staffing</li><li>On-demand gig</li><li>Task fulfilment</li></ul></div>
        </div>
      </div>
      <div class="rowner rise" style="animation-delay:.5s">
        <div class="rown sol"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>Platform Solutions — the software (goBetter)</div>
        <div class="rown svc"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>Platform Services — managed staffing &amp; gig</div>
      </div>
    </div>
  
  ${x(`The agent layer`,`An agent works every stage of this rail`,`Screening, verification, onboarding, rostering, payroll checks and tutoring each run as AI Labs agents on one runtime — flip the ✦ AI switch on any deck to see them.`,`−70% time-to-hire · 3× faster upskilling`)}
  `},{id:`s7`,theme:`light`,title:`HIRE & ONBOARD + VERIFY`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Product · Hire, Onboard &amp; Verify</span>
        <h2 class="rise" style="animation-delay:.08s;">High-volume hiring, from weeks to days — workers arrive job-ready.</h2>
        <div class="featlist">
          <div class="fi rise" style="animation-delay:.24s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4-4"/></svg></span><div><h4>Multi-channel sourcing + ATS</h4><p>Job portals, QR codes, vendors — all managed on one platform; track candidates across every stage with real-time pipeline analytics.</p></div></div>
          <div class="fi rise" style="animation-delay:.32s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg></span><div><h4>Touchless bulk onboarding</h4><p>API-based document collection, auto-generated offer &amp; appointment letters, PF/ESI templates, 360° onboarding status.</p></div></div>
          <div class="fi rise" style="animation-delay:.40s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/></svg></span><div><h4>verifyBetter — India's first digital frontline BGV</h4><p>One-click background verification across six checks, with accurate, detailed reports.</p></div></div>
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="cmock">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">manageBetter · Hiring Pipeline · Live</span></div>
          <div class="body">
            <div class="pminihead" style="margin-bottom:10px;">This week · Warehouse ops · Bhiwandi</div>
            <div class="pipe">
              <div class="pstage rise" style="animation-delay:.42s"><div class="pbar" style="width:100%;background:linear-gradient(90deg,#1b2d93,#2142B9)">Sourced<span class="pv">4,820</span></div></div>
              <div class="pstage rise" style="animation-delay:.5s"><div class="pbar" style="width:82%;background:linear-gradient(90deg,#2142B9,#3457d8)">AI-screened<span class="pv">1,960</span></div></div>
              <div class="pstage rise" style="animation-delay:.58s"><div class="pbar" style="width:60%;background:linear-gradient(90deg,#3457d8,#4f79ea)">Interviewed<span class="pv">720</span></div></div>
              <div class="pstage rise" style="animation-delay:.66s"><div class="pbar" style="width:46%;background:linear-gradient(90deg,#568AF7,#32CAD4)">Offered<span class="pv">540</span></div></div>
              <div class="pstage rise" style="animation-delay:.74s"><div class="pbar" style="width:40%;background:linear-gradient(90deg,#2fb56f,#3DBE7B)">Onboarded<span class="pv">505</span></div></div>
            </div>
            <div class="aibot rise" style="animation-delay:.82s">
              <span class="av"><svg viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M9 14h.01M15 14h.01"/></svg></span>
              <div><div class="abt">AI Jack · screening call</div><div class="abs">Voice · Hindi · 42 sec</div></div>
              <span class="wave"><i></i><i></i><i></i><i></i><i></i><i></i></span>
              <span class="res">Fit 88% · Shortlisted</span>
            </div>
            <div class="bgvfoot" style="justify-content:space-between;"><span>Auto offer · PF/ESI · appointment letter</span><span><b>−20%</b> CPA · <b>−60%</b> TTH</span></div>
          </div>
        </div>
      </div>
    </div>
  `},{id:`sv`,theme:`light`,title:`verifyBetter (BGV)`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Product · Background Verification — verifyBetter</span>
        <h2 class="rise" style="animation-delay:.08s;">Trust every worker you hire. <span style="color:var(--navy)">From day one.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:12px;">India's first digital BGV, purpose-built for frontline scale. Traditional verification was designed for white-collar hiring — verifyBetter runs AI criminal checks, instant identity and compliance at a speed and volume the frontline actually needs.</p>
        <div class="featlist">
          <div class="fi rise" style="animation-delay:.26s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4-4"/></svg></span><div><h4>AI criminal record check</h4><p>Automated pan-India court-record scraping; AI surfaces relevant hits instantly — no manual review backlog, fewer false positives.</p></div></div>
          <div class="fi rise" style="animation-delay:.34s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 12 0v1"/></svg></span><div><h4>Digital identity verification</h4><p>Aadhaar, PAN &amp; government-ID validation in seconds, with face-match liveness detection to stop spoofing.</p></div></div>
          <div class="fi rise" style="animation-delay:.42s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7h-9M14 17H5"/><circle cx="8" cy="7" r="2"/><circle cx="16" cy="17" r="2"/></svg></span><div><h4>Employment &amp; records history</h4><p>Digital reference checks over SMS/WhatsApp with EPFO data integration — plus tamper-proof, audit-ready court records.</p></div></div>
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="cmock">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">verifyBetter · BGV Report</span></div>
          <div class="body">
            <div class="bgvhead">
              <span class="av">RK</span>
              <div class="nm"><b>Rahul Kumar</b><span>Delivery Partner · Case #BGV-284193</span></div>
              <span class="vv"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>5/6 CLEAR</span>
            </div>
            <div class="chklist">
              <div class="chk"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 12 0v1"/></svg></span><div class="ct"><b>Identity — Aadhaar + PAN</b><span>Face-match liveness · 99.2%</span></div><span class="stt"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>Verified</span></div>
              <div class="chk"><span class="ci"><svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14"/></svg></span><div class="ct"><b>Address — physical + digital</b><span>Geo-tagged confirmation</span></div><span class="stt"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>Verified</span></div>
              <div class="chk"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3"/></svg></span><div class="ct"><b>Criminal — AI court scan</b><span>Pan-India · 0 adverse hits</span></div><span class="stt"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>Clear</span></div>
              <div class="chk"><span class="ci"><svg viewBox="0 0 24 24"><path d="M20 7h-9M14 17H5"/><circle cx="8" cy="7" r="2"/><circle cx="16" cy="17" r="2"/></svg></span><div class="ct"><b>Employment — EPFO history</b><span>2 prior employers matched</span></div><span class="stt"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>Verified</span></div>
              <div class="chk"><span class="ci"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg></span><div class="ct"><b>Financial — bank + credit</b><span>Account validated</span></div><span class="stt"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>Verified</span></div>
              <div class="chk run"><span class="ci"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></span><div class="ct"><b>Health — fitness check</b><span>Awaiting clinic upload</span></div><span class="stt"><span class="spin"></span>Running</span></div>
            </div>
            <div class="bgvfoot"><span>Initiated 08:14 · <b>TAT 19h 42m</b> · &lt;24hr SLA · DPDPA-compliant</span></div>
          </div>
        </div>
        <div class="modelrow" style="grid-template-columns:repeat(3,1fr);margin-top:12px;">
          <div class="mstat"><div class="n">50K+</div><div class="l">Cases / day</div></div>
          <div class="mstat"><div class="n">&lt;24 hr</div><div class="l">Average TAT</div></div>
          <div class="mstat"><div class="n">Pan-India</div><div class="l">Court coverage</div></div>
        </div>
        <div class="clientline" style="margin-top:12px;">Trusted by · <span class="cl-n">Swiggy</span> · <span class="cl-n">Licious</span> · <span class="cl-n">Royal Orchid Hotels</span></div>
      </div>
    </div>
  `},{id:`s8`,theme:`light`,title:`MANAGE & PAY`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Product · Attend, Manage &amp; Pay — manageBetter</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:24ch;">One system for attendance, payroll, compliance &amp; vendors.</h2>
      <div class="mediasplit" style="margin-top:20px;">
        <div>
          <div class="featlist">
            <div class="fi rise" style="animation-delay:.24s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg></span><div><h4>Live attendance, zero spoofing</h4><p>Facial recognition + geo-fencing with AI spoof detection; smart rostering &amp; shortfall management from hours to minutes.</p></div></div>
            <div class="fi rise" style="animation-delay:.32s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg></span><div><h4>Leakage-free payroll</h4><p>Automated computation, minimum-wage validation, wage-register &amp; invoice reconciliation, auto compliance payments.</p></div></div>
            <div class="fi rise" style="animation-delay:.40s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7h-9M14 17H5"/><circle cx="8" cy="7" r="2"/><circle cx="16" cy="17" r="2"/></svg></span><div><h4>Central vendor &amp; CLMS control</h4><p>Onboard every vendor with per-vendor deployment rules, track each worker against work orders, monitor compliance in one place.</p></div></div>
          </div>
          <div class="tags rise" style="animation-delay:.48s;margin-top:16px;">
            <span class="tag">Rostering &amp; shifts</span><span class="tag">Demand planning</span><span class="tag">Automated payroll</span><span class="tag">Compliance recon</span><span class="tag">Vendor management</span>
          </div>
        </div>
        <div style="position:relative;">
          <div class="opschip o1 rise" style="animation-delay:.6s"><span class="odot"></span><div class="oc"><b>1,240</b><span>Present · live</span></div></div>
          <div class="opschip o2 rise" style="animation-delay:.8s"><span class="odot"></span><div class="oc"><b>98.2%</b><span>Face-verified · 0 spoofs</span></div></div>
          <div class="phones" style="gap:18px;">
            <div class="phone rise" style="animation-delay:.34s;width:152px;transform:rotate(-5deg) translateY(8px);z-index:2;">
              <div class="pscreen">
                <div class="ps-bar"><span>9:02</span><span class="sig"><i></i><i></i><i></i></span></div>
                <div class="ps-hd"><span class="lg">manage<em>Better</em></span></div>
                <div class="ps-body">
                  <div class="ps-title">Mark Attendance</div>
                  <div class="cam"><span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span><span class="scan"></span><svg class="head" viewBox="0 0 64 74" fill="currentColor"><circle cx="32" cy="24" r="16"/><path d="M4 74c0-16 12.5-26 28-26s28 10 28 26z"/></svg></div>
                  <div class="ps-badge" style="margin-top:12px;"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>Face Verified</div>
                  <div class="ps-meta">Checked in · 09:02 AM</div>
                  <div class="ps-sub">Rahul K. · Picker · Shift A</div>
                  <div class="ps-btn">Confirm attendance</div>
                </div>
              </div>
            </div>
            <div class="phone rise" style="animation-delay:.46s;width:152px;transform:rotate(5deg) translateY(8px);z-index:1;">
              <div class="pscreen dark">
                <div class="ps-bar"><span>9:03</span><span class="sig"><i></i><i></i><i></i></span></div>
                <div class="ps-hd"><span class="lg">Live Location</span></div>
                <div class="ps-map">
                  <span class="grid"></span><span class="road r1"></span><span class="road r2"></span><span class="road r3"></span>
                  <span class="fence"></span>
                  <span class="geopin"><span class="ping"></span><span class="p"></span></span>
                  <div class="ps-card">
                    <div class="ps-badge"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>Within site geo-fence</div>
                    <div class="ps-meta">Zepto DC · Bhiwandi</div>
                    <div class="ps-sub">19.29°N, 73.06°E · 12 m accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="phonecap">Face-verified check-in · geo-fenced location — live in the manageBetter app</div>
        </div>
      </div>
    </div>
  
  ${x(`Spoof detection + AI Zara`,`Vision on every punch, prediction on every roster`,`Liveness models score each check-in; absence prediction flags tomorrow’s no-shows today.`,`AI scheduling cuts labor waste 18–22% (MIT Sloan)`)}
  `},{id:`s8b`,theme:`light`,title:`PAYROLL & VENDOR STATUTORY COMPLIANCE`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Product · Payroll &amp; Statutory Compliance</span>
        <h2 class="rise" style="animation-delay:.08s;">Never inherit a vendor's <span style="color:var(--navy)">PF/ESI liability</span> again.</h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:12px;">As principal employer you are <b style="color:var(--navy)">jointly liable</b> when a contractor underpays statutory dues. manageBetter closes that gap end-to-end — vendors upload their PF &amp; ESI challans, our OCR reads them, and we reconcile every rupee against what's actually owed, worker-by-worker.</p>
        <div class="featlist">
          <div class="fi rise" style="animation-delay:.26s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/></svg></span><div><h4>Challan OCR + auto-match</h4><p>Vendors upload PF/ESI challans; OCR extracts UANs, amounts &amp; period and reconciles them against computed statutory dues for every deployed worker.</p></div></div>
          <div class="fi rise" style="animation-delay:.34s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><h4>Instant discrepancy flags</h4><p>Short-payments, non-payments &amp; wrong UANs surfaced automatically — no manual challan-checking, no audit surprises months later.</p></div></div>
          <div class="fi rise" style="animation-delay:.42s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg></span><div><h4>Principal-employer shield</h4><p>The moment a gap is found we notify the principal employer &amp; flag the vendor — documented proof of due diligence under contract-labour law.</p></div></div>
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="cmock">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">manageBetter · Vendor Statutory Compliance</span></div>
          <div class="body">
            <div class="upl">
              <span class="doc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg></span>
              <span class="meta"><span class="fn">PF_Challan_Jun2026.pdf</span><span class="ex">Vendor: SecureForce Pvt Ltd · 48 UANs · ₹1,86,420</span></span>
              <span class="ok">✓ OCR read</span>
            </div>
            <table class="mtable">
              <thead><tr><th>Worker</th><th>UAN</th><th>PF due</th><th>PF paid</th><th>Match</th></tr></thead>
              <tbody>
                <tr><td>Ramesh K.</td><td class="num">10023…</td><td class="num">₹1,800</td><td class="num">₹1,800</td><td><span class="badge ok">✓ Match</span></td></tr>
                <tr><td>Sunita D.</td><td class="num">10088…</td><td class="num">₹1,650</td><td class="num">₹1,650</td><td><span class="badge ok">✓ Match</span></td></tr>
                <tr class="flag"><td>Arjun P.</td><td class="num">10111…</td><td class="num">₹1,800</td><td class="num">₹0</td><td><span class="badge bad">✕ Not paid</span></td></tr>
                <tr class="flag"><td>Meena R.</td><td class="num">10156…</td><td class="num">₹1,500</td><td class="num">₹1,200</td><td><span class="badge bad">✕ Short ₹300</span></td></tr>
              </tbody>
            </table>
            <div class="compsum">
              <div class="donut"><b>96%</b></div>
              <div class="csi">
                <div class="m"><b>48</b><span>Workers checked</span></div>
                <div class="m"><b>46</b><span>Matched</span></div>
                <div class="m bad"><b>2</b><span>Flagged</span></div>
              </div>
            </div>
            <div class="calert"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg><span><b>2 discrepancies caught</b> · Principal employer notified · Vendor flagged · ₹2,100 statutory gap</span></div>
          </div>
        </div>
        <div class="clientline" style="justify-content:center;margin-top:14px;">Automated proof of statutory diligence — every vendor, every month</div>
      </div>
    </div>
  `},{id:`s8c`,theme:`light`,title:`THE REAL PRODUCT`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Not slideware · screenshots from the live platform</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">This is the actual console your team would log into.</h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        <div>
          <div class="bframe">
            <div class="bbar"><span class="bdots"><i></i><i></i><i></i></span><span class="burl">gobetter · Attend · Roster Management</span></div>
            <img src="assets/product/gobetter/attendance/roster-weekly-grid.jpg" alt="Weekly roster grid" loading="lazy"/>
          </div>
          <div class="bcap">Weekly rostering — bulk tools, filters and a <b>publish step</b></div>
        </div>
        <div>
          <div class="bframe">
            <div class="bbar"><span class="bdots"><i></i><i></i><i></i></span><span class="burl">gobetter · Payroll · Reconcile Dashboard</span></div>
            <img src="assets/product/gobetter/payroll/vendor-reconciliation-dashboard.jpg" alt="Vendor reconciliation dashboard" loading="lazy"/>
          </div>
          <div class="bcap">Vendor statutory reconciliation — <b>pending · failed · success</b>, by period</div>
        </div>
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:16px;max-width:92ch;">Every module in this deck has a working console behind it — ask, and we'll open any of them live in this meeting.</p>
    </div>
  `},{id:`s9`,theme:`dark`,title:`SKILLING`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Product · Upskill &amp; Engage — skillBetter</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:22ch;">Mobile-first, GenAI-powered training the frontline actually finishes.</h2>
      <div class="mediasplit">
        <div>
          <p class="lede rise" style="animation-delay:.18s;">Courses, assessments and learning journeys, engagement feeds and financial-wellness — built for low-literacy, mobile-only, multilingual frontline teams.</p>
          <div class="impact" style="margin-top:22px;grid-template-columns:1fr 1fr;">
            <div class="icard rise" style="animation-delay:.28s"><div class="n">35</div><div class="l">Languages — one-click GenAI content translation &amp; creation</div></div>
            <div class="icard rise" style="animation-delay:.36s"><div class="n">250+</div><div class="l">Animated courses in the library, free of cost</div></div>
            <div class="icard rise" style="animation-delay:.44s"><div class="n">Live</div><div class="l">In-built conferencing, role–skill mapping, certificates &amp; badges</div></div>
            <div class="icard rise" style="animation-delay:.52s"><div class="n">Play</div><div class="l">Gamified leaderboards, streaks &amp; rewards that drive completion</div></div>
          </div>
        </div>
        <div>
          <div class="phones" style="min-height:clamp(230px,24vw,320px);">
            <div class="phone p1"><img src="assets/product/app-gamification.webp" alt="skillBetter gamification"/></div>
            <div class="phone p2"><img src="assets/product/app-home.webp" alt="skillBetter learner home"/></div>
            <div class="phone p3"><img src="assets/product/app-leaderboard.webp" alt="skillBetter leaderboard"/></div>
          </div>
          <div class="phonecap" style="margin-top:10px;">Learner home · Gamification · Leaderboards — live in the skillBetter app</div>
        </div>
      </div>
    </div>
  `},{id:`s10`,theme:`darker`,title:`AI LABS`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">AI Labs · the engine behind every module</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:24ch;">You don't buy software. You <span style="color:var(--yellow)">hire agents.</span></h2>
      <p class="lede rise" style="animation-delay:.18s;margin-top:12px;max-width:76ch;">Build an AI worker in 10 minutes — no code. Chatbots, voice agents and step-by-step workflows, trained on your documents, connected to your systems, on private LLMs. They run quizzes, cameras and forms right inside the chat — and every hire, check and course above runs on them.</p>
      <div class="ailwrap">
        <div class="rise" style="animation-delay:.26s">
          <div class="boteye"><span class="ring"></span><video src="assets/product/bot_eye_video.mp4" poster="assets/product/bot_eye_static_square.jpeg" autoplay muted loop playsinline></video></div>
          <div class="eyecap">
            <div class="t">Meet the roster</div>
            <div class="s">−70% time-to-hire · 3× faster upskilling<br/>Instant BGV · Zero-touch screening</div>
          </div>
        </div>
        <div class="agents">
          <div class="ag rise" style="--ac:#FF7A59;animation-delay:.30s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Onboarding</div><h4>AI Mia</h4><p>Walks every joiner through docs, ID checks &amp; safety induction — in their language, in under an hour.</p></div>
          <div class="ag rise" style="--ac:#7C6BF0;animation-delay:.37s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Talent</div><h4>AI Jack</h4><p>Screens applicants over WhatsApp, scores fit against the role and auto-shortlists the best.</p></div>
          <div class="ag rise" style="--ac:#3DBE7B;animation-delay:.44s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Verification</div><h4>AI Cole</h4><p>Face-match, OCR and live API checks on IDs, addresses &amp; docs — flags mismatches instantly.</p></div>
          <div class="ag rise" style="--ac:#FF9518;animation-delay:.51s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Sales</div><h4>AI Max</h4><p>Live customer roleplays scored on tone &amp; accuracy — coaching ~30,000 sales pros at IFFCO Tokio.</p></div>
          <div class="ag rise" style="--ac:#32CAD4;animation-delay:.58s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat soon"><span class="d"></span>Soon</span></div><div class="role">Interview</div><h4>AI Ivy</h4><p>Runs structured first-rounds, evaluates every answer, hands recruiters a ready scorecard.</p></div>
          <div class="ag rise" style="--ac:#FFC401;animation-delay:.65s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Learning</div><h4>AI Theo</h4><p>Turns SOPs &amp; courses into an always-on tutor that teaches, quizzes and certifies workers.</p></div>
        </div>
      </div>
    </div>
  `},{id:`s11`,theme:`light`,title:`staffBetter`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Platform Services · staffBetter</span>
        <h2 class="rise" style="animation-delay:.08s;">The right frontline talent. Deployed compliantly. At speed.</h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:12px;">End-to-end sourcing, contractual staffing and outsourced manpower across India &amp; Southeast Asia — drawn from BetterPlace's verified 25M+ talent pool. We become the <b style="color:var(--navy)">employer of record</b> and carry the full compliance load; you simply direct the work.</p>
        <div class="featlist">
          <div class="fi rise" style="animation-delay:.26s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4-4"/></svg></span><div><h4>AI-powered nationwide sourcing</h4><p>Right candidate for every role, matched from a pre-screened, background-verified pool — deployed in as little as 24–72 hours.</p></div></div>
          <div class="fi rise" style="animation-delay:.34s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg></span><div><h4>Employer of record — fully compliant</h4><p>We manage every statutory obligation: PF, ESIC, payroll, gratuity and labour-law compliance, with real-time reporting.</p></div></div>
          <div class="fi rise" style="animation-delay:.42s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg></span><div><h4>Worker welfare from day one</h4><p>Statutory PF/ESIC, job-accident insurance, early wage access and BetterPlace welfare benefits — driving retention.</p></div></div>
        </div>
      </div>
      <div class="prodpanel rise" style="animation-delay:.35s">
        <div class="pminihead">Industries we staff · 200+ role categories</div>
        <div class="tags">
          <span class="tag">Warehouse &amp; Logistics</span><span class="tag">Retail &amp; Sales</span><span class="tag">Delivery &amp; Last-mile</span><span class="tag">F&amp;B &amp; Hospitality</span><span class="tag">Security &amp; Facilities</span><span class="tag">Manufacturing</span><span class="tag">Customer Service / BPO</span><span class="tag">Healthcare Support</span>
        </div>
        <div class="stats" style="margin-top:22px;gap:20px 30px;">
          <div class="stat"><div class="n">40,000+</div><div class="l">Workers managed / month</div></div>
          <div class="stat"><div class="n">&gt;95%</div><div class="l">Client retention</div></div>
          <div class="stat"><div class="n">40%</div><div class="l">Faster time-to-hire</div></div>
        </div>
        <div class="clientline">500+ cities · 6,000+ Indian pin codes · Indonesia · Malaysia · Singapore · UAE — powered by <span class="cl-n">Aasaanjobs</span>, <span class="cl-n">MyRobin</span> &amp; <span class="cl-n">Troopers</span></div>
      </div>
    </div>
  `},{id:`s12`,theme:`dark`,title:`gigBetter`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Platform Services · gigBetter</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:38ch;">The workforce that scales with you. On-demand. <span style="color:var(--yellow)">Outcome-based.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:96ch;">An AI-optimised on-demand gig workforce — matched by skill, proximity &amp; performance, deployed in under 24 hours, billed 100% on verified outcomes. Turn fixed headcount into variable, performance-based spend.</p>
      <div class="modelrow rise" style="animation-delay:.24s;margin-top:14px;">
        <div class="mstat"><div class="n">100%</div><div class="l">Outcome-based billing — pay only for verified tasks</div></div>
        <div class="mstat"><div class="n">&lt;24 hr</div><div class="l">Deployment, from 1 to 500+ workers</div></div>
        <div class="mstat"><div class="n">&lt;4%</div><div class="l">No-show rate across deployments</div></div>
        <div class="mstat"><div class="n">2–4 hr</div><div class="l">Metro replacement SLA</div></div>
      </div>
      <div class="mediasplit rev" style="margin-top:18px;align-items:center;grid-template-columns:.62fr 1.38fr;">
        <div class="rise" style="animation-delay:.34s">
          <div class="phones" style="min-height:auto;justify-content:flex-start;"><div class="phone p2" style="margin:0;transform:none;width:132px;box-shadow:0 22px 50px -14px rgba(0,0,0,.6),0 0 0 1px rgba(255,196,1,.18);"><img src="assets/product/app-proctoring.webp" alt="gigBetter task-fulfilment app — proctoring"/></div></div>
          <div class="phonecap" style="text-align:left;margin-top:14px;">Exam proctoring in the gig app — camera checks, strikes, photo proof</div>
        </div>
        <div class="rise" style="animation-delay:.4s">
          <div class="pminihead" style="color:rgba(255,255,255,.55)">Gig verticals — one platform, on demand</div>
          <div class="tags">
            <span class="tag">Last-mile delivery</span><span class="tag">Retail &amp; merchandising</span><span class="tag">Warehouse ops</span><span class="tag">Events &amp; activations</span><span class="tag">Telecalling &amp; support</span><span class="tag">Field audits &amp; mystery shopping</span><span class="tag">F&amp;B &amp; hospitality</span><span class="tag">Exam invigilation &amp; proctoring</span><span class="tag">Content &amp; digital ops</span><span class="tag hot">AI data annotation · NEW</span>
          </div>
          <div class="clientline" style="color:rgba(255,255,255,.5)">Pre-screened &amp; rated workers · job insurance · early wage access · 500+ cities across India, Malaysia &amp; Indonesia</div>
        </div>
      </div>
    </div>
  `},{id:`s13`,theme:`darker`,title:`IMPACT`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Proven impact</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;">Typical outcomes across our enterprise clients.</h2>
      <div class="impact" style="margin-top:24px;">
        <div class="icard rise" style="animation-delay:.24s"><div class="n">−20%</div><div class="l">Cost savings — accurate payroll &amp; compliance, efficient hiring &amp; fulfilment</div></div>
        <div class="icard rise" style="animation-delay:.31s"><div class="n">+15%</div><div class="l">HR productivity — automation of attendance, verification, onboarding, vendors</div></div>
        <div class="icard rise" style="animation-delay:.38s"><div class="n">−15%</div><div class="l">Attrition — driven by access to workplace benefits &amp; upskilling</div></div>
        <div class="icard rise" style="animation-delay:.45s"><div class="n">−90%</div><div class="l">Payroll leakage eliminated</div></div>
        <div class="icard rise" style="animation-delay:.52s"><div class="n">−80%</div><div class="l">Vendor non-compliance risk</div></div>
        <div class="icard rise" style="animation-delay:.59s"><div class="n">−60%</div><div class="l">Hiring lead-time</div></div>
      </div>
    </div>
  `},{id:`s13b`,theme:`darker`,title:`THE OUTCOME LEDGER`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The outcome ledger · why end-to-end beats five point tools</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:30ch;">Each module pays for itself. Together they change your P&amp;L.</h2>
      <div class="ledger rise" style="animation-delay:.18s">
        <div class="lrow rise" style="animation-delay:.22s"><div class="ln">Crores</div><div class="lw"><h4>Leakage &amp; liability, recovered</h4><p>Face-verified attendance kills ghost payroll; challan OCR kills inherited PF/ESI exposure — the two biggest silent costs of a contract workforce.</p></div><div class="lp">Reliance: <b>−90% leakage · −80% vendor risk</b></div></div>
        <div class="lrow rise" style="animation-delay:.31s"><div class="ln">Weeks</div><div class="lw"><h4>Recovered on every ramp</h4><p>AI-screened funnels, 10-minute onboarding and &lt;24hr BGV mean sites open and seasons start on time — with workers who arrive trained.</p></div><div class="lp"><b>−60% hiring lead-time · 45-min rider onboarding</b></div></div>
        <div class="lrow rise" style="animation-delay:.40s"><div class="ln">−15%</div><div class="lw"><h4>Attrition, the compounding save</h4><p>Trained, fairly-paid, benefit-covered workers stay — and every point of churn saved cancels a hire, a check, and a training cycle you'd have paid for again.</p></div><div class="lp">88% training completion · welfare stack · <b>rehires clear in minutes</b></div></div>
        <div class="lrow rise" style="animation-delay:.49s"><div class="ln">1</div><div class="lw"><h4>Partner where you had a patchwork</h4><p>One contract, one worker record, one compliance standard across 8 markets — the integration project you never have to run.</p></div><div class="lp"><b>25M+ profiles · 1,000+ enterprises · IN · SEA · GCC</b></div></div>
      </div>
      <div class="clientline rise" style="color:rgba(255,255,255,.6);margin-top:16px;animation-delay:.6s">Every number above has a named client behind it — the outcomes slide ahead shows them.</div>
    </div>
  `},{id:`s14`,theme:`light`,title:`USE CASES`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Use cases · real deployments</span>
      <h2 class="rise" style="animation-delay:.08s;">Enterprise-scale, across industries.</h2>
      <div class="cases">
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.22s"><div class="ch"><span class="cn">Reliance Retail</span><span class="ct">Retail · 18,918 stores</span></div><p>One integrated system for 300k+ workers across 3,000+ vendors — replacing disintegrated systems &amp; manual compliance with the goBetter rule engine.</p><div class="cm"><div class="m"><div class="mn">90%</div><div class="ml">↓ payroll leakage</div></div><div class="m"><div class="mn">80%</div><div class="ml">↓ vendor non-compliance</div></div><div class="m"><div class="mn">7×</div><div class="ml">faster customisation</div></div></div></div>
        <div class="case rise" style="--pc:#D0271D;animation-delay:.30s"><div class="ch"><span class="cn">Zepto</span><span class="ct">Quick-commerce · 22 cities</span></div><p>Geo-based attendance with AI spoof detection &amp; a real-time custom dashboard for 15,000 frontline workers across 967 sites.</p><div class="cm"><div class="m"><div class="mn">40%</div><div class="ml">cost savings</div></div><div class="m"><div class="mn">15k</div><div class="ml">workers managed</div></div><div class="m"><div class="mn">967</div><div class="ml">sites live</div></div></div></div>
        <div class="case rise" style="--pc:#32CAD4;animation-delay:.38s"><div class="ch"><span class="cn">Leading assessment platform</span><span class="ct">Gig · proctoring</span></div><p>End-to-end management of a dispersed proctor/invigilator workforce with a tech-driven quality platform + exam-audit solution.</p><div class="cm"><div class="m"><div class="mn">95%</div><div class="ml">proctor retention</div></div><div class="m"><div class="mn">40+</div><div class="ml">cities covered</div></div><div class="m"><div class="mn">5,000</div><div class="ml">drives run</div></div></div></div>
        <div class="case rise" style="--pc:#FF9518;animation-delay:.46s"><div class="ch"><span class="cn">Mahindra Holidays</span><span class="ct">Staffing · hospitality</span></div><p>Exclusive vendor for telemarketing &amp; field sales pitching luxury holiday packages (₹2–16L) to HNI customers, pan-India sourcing.</p><div class="cm"><div class="m"><div class="mn">300+</div><div class="ml">quality hires</div></div><div class="m"><div class="mn">3 mo</div><div class="ml">to deliver</div></div><div class="m"><div class="mn">1000+</div><div class="ml">execs today</div></div></div></div>
      </div>
    </div>
  `},{id:`s15`,theme:`dark`,title:`TRUSTED BY`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Trusted by the enterprises you know</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:24ch;">1,000+ enterprises run their frontline on BetterPlace.</h2>
      <div class="logowall rise" id="logowall" style="animation-delay:.2s;margin-top:24px;"><div class="lc"><img src="assets/logo/c-swiggy.png" alt="swiggy" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-coca-cola.png" alt="coca-cola" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-flipkart.png" alt="flipkart" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-tata.png" alt="tata" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-ibm.png" alt="ibm" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-accenture.png" alt="accenture" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-zomato.png" alt="zomato" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-uber.png" alt="uber" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-nykaa.png" alt="nykaa" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-titan.png" alt="titan" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-shopee.png" alt="shopee" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-7-eleven.png" alt="7-eleven" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-pizzahut.png" alt="pizzahut" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-Paytm.png" alt="Paytm" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-urbancompany.png" alt="urbancompany" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-watsons.png" alt="watsons" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-hindalco.png" alt="hindalco" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-jll.png" alt="jll" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-Bharat_Petroleum.png" alt="Bharat_Petroleum" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-tcs.png" alt="tcs" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-iss.png" alt="iss" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-lionparcel.png" alt="lionparcel" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-basf.png" alt="basf" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-practo.png" alt="practo" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-kredivo.png" alt="kredivo" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-tealive.png" alt="tealive" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-muthoot-finance.png" alt="muthoot-finance" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-OLA.png" alt="OLA" loading="lazy"/></div></div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:22px;">From quick-commerce to BFSI, retail to logistics &amp; manufacturing — across 500+ cities &amp; 8 markets.</div>
    </div>
  `},{id:`s14b`,theme:`darker`,title:`RIGHT TO WIN`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Our right to win · why BetterPlace</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">A moat no point solution — or pure staffing firm — can match.</h2>
      <div class="forces" style="margin-top:24px;">
        <div class="force rise" style="animation-delay:.22s"><span class="fbadge"><svg viewBox="0 0 24 24"><path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8"/><path d="M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 0 1-4 4H4.2"/></svg></span><h4>The closed hire-to-rehire loop</h4><ul><li>One verified worker-intelligence layer under every pillar</li><li>Data no single-point tool can replicate</li></ul></div>
        <div class="force rise" style="animation-delay:.29s"><span class="fbadge"><svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg></span><h4>Purpose-built for the frontline</h4><ul><li>Mobile-first, 35 languages, low-literacy UX</li><li>Blue-collar pricing economics, not white-collar</li></ul></div>
        <div class="force rise" style="animation-delay:.36s"><span class="fbadge"><svg viewBox="0 0 24 24"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></span><h4>Software + managed supply</h4><ul><li>We sell the platform and deploy the workers</li><li>The only player doing both at scale</li></ul></div>
        <div class="force rise" style="animation-delay:.43s"><span class="fbadge"><svg viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg></span><h4>Verified talent at scale</h4><ul><li>25M+ profiles · India's first digital frontline BGV</li><li>50K+ checks/day, &lt;24hr TAT</li></ul></div>
        <div class="force rise" style="animation-delay:.50s"><span class="fbadge"><svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg></span><h4>Proven at enterprise scale</h4><ul><li>Reliance Retail — 300k+ workers, 3,000+ vendors</li><li>Zepto, Swiggy, Licious live in production</li></ul></div>
        <div class="force rise" style="animation-delay:.57s"><span class="fbadge"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/></svg></span><h4>One contract, many markets</h4><ul><li>Localised compliance across India, SEA &amp; GCC</li><li>ISO 27001 · SOC 2 · GDPR · DPDPA</li></ul></div>
      </div>
    </div>
  `},{id:`s16`,theme:`light`,title:`ICP`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Who we serve · ICP</span>
      <h2 class="rise" style="animation-delay:.08s;">Enterprises with a large frontline or contracted workforce.</h2>
      <div class="icp">
        <div class="box rise" style="animation-delay:.22s"><h4><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1B2D93" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>Company profile</h4><p>Frontline-heavy enterprises &amp; high-growth scale-ups. Workforce sweet spots:</p><div class="tags"><span>500–1,000 (mid)</span><span>1,000–10,000 (core)</span><span>10,000+ (enterprise)</span></div></div>
        <div class="box rise" style="animation-delay:.30s"><h4><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1B2D93" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>Priority industries</h4><div class="tags"><span>Retail</span><span>E-commerce</span><span>Quick-commerce</span><span>Logistics</span><span>Manufacturing</span><span>BFSI field</span><span>FMCG</span><span>Telecom</span><span>Hospitality</span><span>Healthcare</span></div></div>
        <div class="box rise" style="animation-delay:.38s"><h4><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1B2D93" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/></svg>Buyers &amp; triggers</h4><p>CHRO / COO / Head of Frontline Ops / Compliance. Triggered by high-churn hiring, multi-city ops, seasonal spikes, audit pressure, payroll leakage, vendor sprawl.</p></div>
        <div class="box rise" style="animation-delay:.46s"><h4><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1B2D93" stroke-width="2"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>Geography</h4><p>India (all pillars, 500+ cities) · Malaysia · Singapore · Indonesia · Thailand · Philippines · UAE · KSA — localised compliance on one contract.</p></div>
      </div>
      <div class="rise" style="animation-delay:.55s;margin-top:20px;padding-top:16px;border-top:1px solid var(--border);display:flex;align-items:center;gap:24px;flex-wrap:wrap;">
        <div class="tblock"><div class="h">Certified &amp; compliant</div><div class="certs" style="margin-top:6px;"><img src="assets/compliance/iso-27001.svg" alt="ISO 27001" style="height:42px"/><img src="assets/compliance/soc-2.svg" alt="SOC 2" style="height:42px"/><img src="assets/compliance/gdpr.svg" alt="GDPR" style="height:42px"/><img src="assets/compliance/dpdpa.svg" alt="DPDPA" style="height:42px"/></div></div>
        <div class="tblock" style="border-left:1px solid var(--border);padding-left:24px;"><div class="h">Strategic partner</div><div class="v" style="margin-top:8px;">Microsoft — cloud &amp; AI</div></div>
        <div class="tblock" style="border-left:1px solid var(--border);padding-left:24px;"><div class="h">Recognition</div><div class="awards" style="margin-top:8px;"><span class="award">Forbes Asia 100 to Watch</span><span class="award">Red Herring Top 100</span><span class="award">Business World Unicorn 2022</span></div></div>
      </div>
    </div>
  `},{id:`sclose`,theme:`dark`,title:`WHY NOW + CTA`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">Why now · and how we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;">Start anywhere. Scale with one partner.</h2>
      <div class="forces" style="margin-top:22px;">
        <div class="force rise" style="animation-delay:.24s"><h4>The shift</h4><ul><li>Frontline work is formalising fast</li><li>Mobile-first, vernacular workforce</li><li>Rising compliance &amp; audit pressure</li></ul></div>
        <div class="force rise" style="animation-delay:.32s"><h4>The cost of waiting</h4><ul><li>5+ disconnected point vendors</li><li>Payroll leakage &amp; attrition</li><li>Vendor non-compliance risk</li></ul></div>
        <div class="force rise" style="animation-delay:.40s"><h4>The BetterPlace edge</h4><ul><li>One partner, one platform</li><li>Verified 25M+ talent pool</li><li>End-to-end compliance shield</li></ul></div>
      </div>
      <div class="ctacards" style="margin-top:18px;">
        <div class="ctac rise" style="animation-delay:.5s"><div class="num">01</div><h4>Start anywhere</h4><p>Adopt one module or the whole platform — verifyBetter, skillBetter, manageBetter, or managed staffing &amp; gig.</p></div>
        <div class="ctac rise" style="animation-delay:.57s"><div class="num">02</div><h4>See it on your workforce</h4><p>A focused pilot on one site, city or role — configured to your rules, live in weeks.</p></div>
        <div class="ctac rise" style="animation-delay:.64s"><div class="num">03</div><h4>Scale as one</h4><p>Roll out across sites, cities &amp; markets on one contract, one data view, one compliance shield.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:20px;">Let's build your frontline workforce engine — <span class="cl-n">betterplace.co.in</span></div>
    </div>
  `}],te=[{id:`ai1`,theme:`darker`,title:`AI Labs cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">AI Labs · the AI employee studio</span>
      <h1 class="rise" style="animation-delay:.15s">You don't buy software.<br/>You <span style="color:var(--yellow)">hire AI employees.</span></h1>
      <p class="sub rise" style="animation-delay:.3s"><b style="color:#fff;">AI Labs is our studio for building AI employees</b> — agents that make real phone calls in 24 languages, read documents, analyse photos and video, browse the web, and do real work inside your systems. Built in 10 minutes without code, on our own private cloud — so your data never leaves.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:34px;">
        <div class="stat"><div class="n">10 <em>min</em></div><div class="l">To a working agent</div></div>
        <div class="stat"><div class="n">24</div><div class="l">Languages, live</div></div>
        <div class="stat"><div class="n">₹0.37</div><div class="l">Per interaction, typical</div></div>
        <div class="stat"><div class="n">0</div><div class="l">Data-science hires needed</div></div>
      </div>
    </div>
    <div class="chero" style="width:clamp(240px,26vw,360px);">
      <div class="cring spin"></div><div class="cring r2"></div>
      <div class="boteye rise" style="animation-delay:.4s;position:absolute;inset:0;margin:auto;width:62%;"><span class="ring"></span><video src="assets/product/bot_eye_video.mp4" poster="assets/product/bot_eye_static_square.jpeg" autoplay muted loop playsinline></video></div>
    </div>
    <div class="mdcover ghost">AI</div>`},{id:`ai1w`,theme:`light`,title:`What is AI Labs`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">What is AI Labs · in plain words</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">A studio where you build <span style="color:var(--navy)">AI employees.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:96ch;">Not a chatbot you bolt on. A workbench where your own team builds AI workers — describe the job the way you'd brief a new joiner, and the studio builds the employee. Here's what every agent can do:</p>
      <div class="capgrid rise" style="animation-delay:.26s;grid-template-columns:repeat(3,1fr);">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.mic}</svg></span><h4>Speaks · listens · calls</h4><p>Natural, fast voice in 24 languages — including real telephone calls to an ordinary phone. Live now</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.eye}</svg></span><h4>Sees photos &amp; video</h4><p>Workers upload images or video in the chat — or feed it from your systems. IDs, helmets, shelves, damage. Live now</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.doc}</svg></span><h4>Reads any document</h4><p>Upload a document mid-conversation — the agent reads it and answers, citing the page it came from. Live now</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.globe}</svg></span><h4>Browses the web</h4><p>Searches webpages for live context when your documents aren't enough — with sources shown. Live now</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.plug}</svg></span><h4>Connects &amp; acts in your systems</h4><p>HRMS, SAP, attendance, payroll — it looks things up and updates records, not just answers</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.check}</svg></span><h4>Follows process, remembers people</h4><p>Workflows that cannot skip a step, and per-worker memory — conversation forty builds on conversation one</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.44s">If you can describe the job to a new employee, you can build the agent. <b>10 minutes, no code, no data-science team.</b></div>
    </div>`},{id:`ai1v`,theme:`darker`,title:`The value`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">What this buys you</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:30ch;">Intelligence at industrial scale. <span style="color:var(--yellow)">At frontline prices.</span></h2>
      <div class="aival rise" style="animation-delay:.2s">
        <div class="vt" style="--vc:var(--yellow)"><div class="n">₹0.37</div><div class="w">per conversation</div><p>A full multi-step support or onboarding conversation — for less than a rupee.</p></div>
        <div class="vt" style="--vc:#39D2E8"><div class="n">₹5<small>/min</small></div><div class="w">real phone calls</div><p>The agent calls an ordinary phone and holds the conversation — vs ₹12/min industry.</p></div>
        <div class="vt" style="--vc:#3BE8B0"><div class="n">10 <small>min</small></div><div class="w">brief → working employee</div><p>Described like a job brief, built without code, live on your channels the same morning.</p></div>
        <div class="vt" style="--vc:#8B7CFF"><div class="n">30,000</div><div class="w">workers served at once</div><p>One agent coaches an entire salesforce simultaneously — capacity has no headcount.</p></div>
        <div class="vt" style="--vc:#FF9518"><div class="n">24</div><div class="w">languages, one build</div><p>Build the agent once — it speaks, listens and writes in every language your frontline does.</p></div>
        <div class="vt" style="--vc:#FF7A6B"><div class="n">0</div><div class="w">bytes leave the platform</div><p>Safe and secure — your data stays with you, on our private cloud in India. Always.</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">The maths a CFO checks: <b>5,000 workers on an agent ≈ ₹1,860 a month</b> — less than one hour of one employee.</div>
    </div>`},{id:`ai1x`,theme:`light`,title:`Why we are different`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Why we're different · the architecture is the moat</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;font-size:clamp(22px,2.2vw,34px);">Other tools rent intelligence by the API call. <span style="color:var(--navy)">Ours lives with your data.</span></h2>
      <div class="aidiff rise" style="animation-delay:.2s">
        <div class="pane them">
          <div class="ph">✕ How most AI tools work</div>
          <div class="node">Your workers' chats · IDs · documents<small>collected in their widget</small></div>
          <div class="pipe" style="--pc:#D0271D"></div>
          <div class="exit"><span>Leaves your control</span></div>
          <div class="pipe" style="--pc:#D0271D"></div>
          <div class="node alien">Third-party AI API<small>someone else's cloud · often outside India</small></div>
          <div class="toll"><span>Per-token toll on every message</span><span>DPDP: no good answer</span><span>Voice &amp; vision: add-ons</span></div>
        </div>
        <div class="pane us">
          <div class="ph">✓ How AI Labs works</div>
          <div class="fence">
            <span class="fl">BetterPlace private cloud · in India · ISO 27001 · SOC 2</span>
            <div class="node" style="margin-top:6px;">Your channels<small>app · web · document &amp; photo upload in chat · real phone calls</small></div>
            <div class="pipe"></div>
            <div class="agrow">
              <div class="node">AI Mia<small>onboarding</small></div>
              <div class="node">AI Max<small>coaching</small></div>
              <div class="node">AI Theo<small>tutor</small></div>
            </div>
            <div class="pipe"></div>
            <div class="node">Open-source models on our GPUs<small>+ your documents · per-worker memory · web browsing for context</small></div>
          </div>
          <div class="toll"><span>Nothing crosses the fence — ever</span><span>No per-token toll → ₹0.37/conversation</span><span>DPDP-defensible by design</span></div>
        </div>
      </div>
      <div class="bigwords rise" style="animation-delay:.42s">
        <b>PRIVATE.<br/><em>Your data never leaves.</em></b>
        <b>DETERMINISTIC.<br/><em>Every step runs. Every time.</em></b>
        <b class="gold">₹0.37.<br/><em>A conversation, at any scale.</em></b>
      </div>
    </div>`},{id:`ai1y`,theme:`light`,title:`The stack`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">How it's built · the stack, layer by layer</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;font-size:clamp(22px,2.2vw,34px);">"Open-source LLM on our cloud" is just the middle. <span style="color:var(--navy)">Here's the whole machine.</span></h2>
      <div class="aidiff rise" style="grid-template-columns:1fr;animation-delay:.2s;max-width:1080px;">
        <div class="pane us" style="padding:14px 18px;">
          <div class="fence">
            <span class="fl">BetterPlace private cloud · nothing calls out · ISO 27001 · SOC 2</span>
            <div class="agrow" style="grid-template-columns:repeat(3,1fr);margin-top:8px;">
              <div class="node"><b>Channels</b><small>in-app &amp; web chat · document, photo &amp; video upload in conversation</small></div>
              <div class="node"><b>Voice &amp; telephony</b><small>fast natural voice · real phone calls, both directions</small></div>
              <div class="node"><b>In-chat apps</b><small>quiz · camera · upload · location — the agent operates, not just chats</small></div>
            </div>
            <div class="pipe"></div>
            <div class="node"><b>Agent runtime</b><small>persona + deterministic workflow engine — wrapped in guardrails: PII masking, injection &amp; hallucination checks that pause the agent and raise an event</small></div>
            <div class="pipe"></div>
            <div class="node"><b>Private inference — open-source LLMs on dedicated GPUs</b><small>models served by us (vLLM), weights live with us — no external AI API, no per-token toll</small></div>
            <div class="pipe"></div>
            <div class="agrow" style="grid-template-columns:1fr 1fr;">
              <div class="node"><b>Knowledge layer</b><small>your documents → embeddings → search index — every answer cited to its source; web browsing when your documents aren't enough</small></div>
              <div class="node"><b>Memory &amp; context</b><small>per-worker memory with PII isolation — every conversation writes to one worker record</small></div>
            </div>
            <div class="pipe"></div>
            <div class="node"><b>Integration layer</b><small>API gateway (Kong) → event orchestration (Kafka) → MCP tools with live write-back into HRMS, SAP, attendance &amp; payroll</small></div>
          </div>
          <div class="toll"><span>Token logs · per-agent &amp; per-team cost limits</span><span>Deterministic mode for regulated flows</span><span>White-label — ships as your agents, in your app</span></div>
        </div>
      </div>
    </div>`},...ee(`ai1b`,`For founders & COOs`,`Ops headcount grows with your workforce. It doesn’t have to.`,`And generic AI can’t be trusted with your compliance.`,[{pain:`Every 1,000 workers adds support and admin heads`,painDetail:`Helpdesk tickets, onboarding paperwork and L&D chasing scale linearly with the frontline — margin erodes as you grow.`,painStat:`L&D admin alone: ~60% of team time`,fix:`Agents absorb the volume at ₹0.37 a conversation`,fixDetail:`Onboarding, helpdesk, compliance and coaching run as agents — 5,000 workers served for about ₹1,860 a month.`,fixStat:`−38% L&D ops time, measured`},{pain:`Generic chatbots are a compliance incident waiting to happen`,painDetail:`A probabilistic bot can skip step 5 of your safety induction or invent a policy answer — unacceptable in BFSI, pharma, manufacturing.`,painStat:`No audit trail = no defence`,fix:`Deterministic workflows with guardrails that act`,fixDetail:`Every mandatory step runs in order, every time; PII masking and hallucination guards pause the agent and raise an event.`,fixStat:`100% audit trail per worker`},{pain:`AI pilots die in the IT and vendor queue`,painDetail:`Six months of scoping, a data-science hire, an integration project — most frontline AI never ships.`,painStat:`Typical enterprise AI pilot: quarters`,fix:`Built by your ops team in 10 minutes, no code`,fixDetail:`Pick a brain, feed your documents, toggle capabilities, embed in WhatsApp or your app — MCP write-back handles systems.`,fixStat:`Subway HRMS integration: one day`},{pain:`Your workforce data trains someone else’s model`,painDetail:`Sending worker conversations to public AI APIs is a DPDPA and confidentiality problem your board will ask about.`,painStat:`Public-API AI = data leaves the building`,fix:`Private LLMs, data stays in India`,fixDetail:`vLLM on dedicated GPU, ISO 27001 · SOC 2, per-agent cost limits and token logs — white-label if you want it invisible.`,fixStat:`Your data never leaves the platform`}],`AI Labs production metrics · IFFCO Tokio & Subway deployments`),{id:`ai2`,theme:`light`,title:`The Studio`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">The studio · ai-labs.betterplace.ai</span>
        <h2 class="rise" style="animation-delay:.08s;">Name it, give it a brain, switch it on. <span style="color:var(--navy)">Ten minutes.</span></h2>
        <div class="featlist">
          ${b(w.bot,`Pick the brain`,`Choose a frontier model, toggle what the agent can do — see, hear, speak, read — and watch it answer in the live preview.`,.24)}
          ${b(w.doc,`Feed it your documents`,`SOPs, product manuals, HR policies — the agent answers from your content, with citations, in 24 languages.`,.32)}
          ${b(w.plug,`Embed it anywhere`,`Your app, WhatsApp, or a web widget. Live write-back into your systems through MCP tools.`,.4)}
          ${b(w.lock,`Private by design`,`Private LLMs — your data never leaves the platform. ISO 27001 · SOC 2 · data stays in India.`,.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="conmock agentbuild">
          <div class="left">
            <div class="fld"><div class="lb">Agent name</div><div class="val">Mia — onboarding agent<span class="cursor"></span></div></div>
            <div class="fld"><div class="lb">Brain</div><div class="brains"><span class="brain sel">Private vLLM · in-India</span><span class="brain">Claude</span><span class="brain">GPT</span></div></div>
            <div class="fld"><div class="lb">Capabilities</div><div class="togs">
              <span class="tog flip" style="--d:.9s">See · vision<span class="sw"></span></span>
              <span class="tog flip" style="--d:1.1s">Hear · voice<span class="sw"></span></span>
              <span class="tog flip" style="--d:1.3s">Speak · 24 languages<span class="sw"></span></span>
              <span class="tog flip" style="--d:1.5s">Read · documents<span class="sw"></span></span>
            </div></div>
            <div class="fld"><div class="lb">Knowledge</div><div class="docs">
              <span class="doc2"><svg viewBox="0 0 24 24">${w.doc}</svg>Safety_SOP_v4.pdf<span class="ok2">✓ indexed</span></span>
              <span class="doc2"><svg viewBox="0 0 24 24">${w.doc}</svg>HR_policy_2026.docx<span class="ok2">✓ indexed</span></span>
              <span class="doc2"><svg viewBox="0 0 24 24">${w.doc}</svg>Grooming_standards.pptx<span class="ok2">✓ indexed</span></span>
            </div></div>
            <div class="deployrow"><span class="deploy">Deploy to WhatsApp →</span><span class="clockc">Build time&nbsp;&nbsp;<b>09:42</b></span></div>
          </div>
          <div class="right">
            <div class="plb">Live preview · Hindi</div>
            <div class="pmsg me" style="--d:1.7s">PF balance kaise check karun?</div>
            <div class="pmsg bot" style="--d:2.3s">UMANG app ya missed call 011-22901406 se — aapka UAN active hai. Main steps bhejta hoon 👇<span class="cite">HR_policy_2026.docx · p.14</span></div>
            <div class="pmsg me" style="--d:3.1s">Aur safety shoes kab milenge?</div>
            <div class="pmsg bot" style="--d:3.7s">Day-1 induction par, gate office se. Size aaj confirm kar dijiye.<span class="cite">Safety_SOP_v4.pdf · §2.3</span></div>
          </div>
        </div>
        <div class="bcap">The studio — brain, capabilities, your documents, live preview. <b>No code, no data-science hires.</b></div>
      </div>
    </div>
    ${x(`The runtime`,`Every ✦ note in every deck runs on this`,`Screening bots, spoof detection, challan OCR, absence prediction, the learning tutor — all agents on this one studio and runtime. One platform to govern, one meter to read.`,`Flip the ✦ AI switch in any deck to see the agents at work`)}
    `},{id:`ai3`,theme:`light`,title:`Deterministic vs chatbots`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Why enterprises trust it</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:26ch;">A chatbot might skip step 5. <span style="color:var(--navy)">Our workflows can't.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">ChatGPT-style bots are probabilistic — helpful, but free to improvise. AI Labs runs deterministic workflows when the process matters: every mandatory step runs, every time, in order.</p>
      <div class="vs rise" style="animation-delay:.28s">
        <div class="col bad">
          <h4>Generic chatbot</h4>
          <ul>
            <li>May skip or reorder steps in an 8-step onboarding</li>
            <li>No proof any given worker completed the flow</li>
            <li>Answers from the open internet — your SOPs optional</li>
            <li>A compliance risk in BFSI, pharma, manufacturing</li>
          </ul>
        </div>
        <div class="col good">
          <h4>AI Labs deterministic workflow</h4>
          <ul>
            <li>Every mandatory step runs, in order, every time</li>
            <li>Audit trail per worker — regulator-ready logs</li>
            <li>Answers only from your documents, with citations</li>
            <li>Guardrails: PII masking, injection & hallucination checks</li>
          </ul>
        </div>
      </div>
      <div class="probfoot rise" style="animation-delay:.44s">Safe enough for banks and factories: <b>a breach pauses the agent and raises an event for human review.</b></div>
    </div>`},{id:`ai4`,theme:`darker`,title:`The roster`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">One runtime · many agents</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Build the brain once. Give it a new job every week.</h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:80ch;">Every agent runs on the same conversational runtime — only the persona, data sources and scoring change. And every conversation ships structured data back into one worker profile.</p>
      <div class="ailwrap" style="margin-top:18px;">
        <div class="rise" style="animation-delay:.24s">
          <div class="boteye"><span class="ring"></span><video src="assets/product/bot_eye_video.mp4" poster="assets/product/bot_eye_static_square.jpeg" autoplay muted loop playsinline></video></div>
          <div class="eyecap"><div class="t">The goBetter roster</div><div class="s">−70% time-to-hire · 3× faster upskilling<br/>Every chat feeds one worker record</div></div>
        </div>
        <div class="agents">
          <div class="ag rise" style="--ac:#FF7A59;animation-delay:.30s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Onboarding</div><h4>AI Mia</h4><p>Docs, ID checks &amp; safety induction in the joiner's language — under an hour, end to end.</p></div>
          <div class="ag rise" style="--ac:#7C6BF0;animation-delay:.37s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Sales coach</div><h4>AI Max</h4><p>Live customer roleplays with tone &amp; accuracy scoring — training ~30,000 sales pros at IFFCO Tokio.</p></div>
          <div class="ag rise" style="--ac:#3DBE7B;animation-delay:.44s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Learning tutor</div><h4>AI Theo</h4><p>Turns SOPs into an always-on tutor that teaches, quizzes and certifies — cited answers, 24×7.</p></div>
          <div class="ag rise" style="--ac:#32CAD4;animation-delay:.51s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Talent screening</div><h4>AI Jack</h4><p>Screens applicants over WhatsApp, scores fit against the role, auto-shortlists the best.</p></div>
          <div class="ag rise" style="--ac:#FFC401;animation-delay:.58s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Verification</div><h4>AI Cole</h4><p>Face-match, OCR and live API checks on IDs and documents — mismatches flagged instantly.</p></div>
          <div class="ag rise" style="--ac:#FF9518;animation-delay:.65s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat soon"><span class="d"></span>Soon</span></div><div class="role">Interview</div><h4>AI Ivy</h4><p>Structured first-round interviews with a ready scorecard for every recruiter.</p></div>
        </div>
      </div>
    </div>`},{id:`ai5`,theme:`light`,title:`Hooks — apps inside the chat`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Hooks · in-chat apps</span>
        <h2 class="rise" style="animation-delay:.08s;">It's not a chat window. <span style="color:var(--navy)">It's an app inside a chat.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">Agents trigger real interfaces inside the conversation — no separate app to install, nothing for a frontline worker to learn.</p>
        <div class="tags rise" style="animation-delay:.26s;margin-top:16px;">
          <span class="tag hot">MCQ &amp; quizzes · live</span><span class="tag hot">Camera proof · live</span><span class="tag hot">Document upload · live</span><span class="tag hot">Location picker · live</span><span class="tag hot">Rating / NPS · live</span><span class="tag">Map view</span><span class="tag">Scheduling</span><span class="tag">Number input</span><span class="tag">20+ hooks in development</span>
        </div>
        <p class="lede rise" style="animation-delay:.36s;margin-top:18px;">A rider photographs their ID, picks their hub on a map, passes the safety quiz and gets certified — all inside one WhatsApp thread.</p>
      </div>
      <div class="rise" style="animation-delay:.3s;display:flex;gap:16px;align-items:flex-start;justify-content:center;">
        <div class="chat">
          <div class="chd"><span class="cav">🤖</span><b>AI Mia · Onboarding</b><span>Live</span></div>
          <div class="cbody">
            <div class="msg bot">Welcome aboard, Ravi! Let's get you ready for your first shift. First — a photo of your driving licence, please.</div>
            <div class="hook"><div class="ht">📷 Camera · ID capture</div><div class="opt on">✓ DL_ravi.jpg captured · verified</div></div>
            <div class="msg bot">Verified. Last step: two quick safety questions.</div>
            <div class="hook"><div class="ht">Quiz · 1 of 2</div><div class="opt">Park inside the marked bay</div><div class="opt on">✓ Helmet on before ignition</div></div>
            <div class="msg me">Done! What's next?</div>
            <div class="msg bot">That's it — certificate issued. See you Monday, 9 AM, Bhiwandi hub. 🎉</div>
          </div>
          <div class="bcap" style="padding:8px 0;">Docs · quiz · <b>45-min onboarding</b></div>
        </div>
        <div style="max-width:300px;">
          <div class="bframe"><div class="bbar"><span class="bdots"><i></i><i></i><i></i></span><span class="burl">Embedded support agent · live design</span></div><img src="assets/product/figma/ailabs/in-context-support-agent-chatbot.png" alt="In-context support agent with order lookup" loading="lazy"/></div>
          <div class="bcap">Real product: agent drawer with <b>live order lookup</b></div>
        </div>
      </div>
    </div>`},{id:`ai6`,theme:`light`,title:`Use cases with outcomes`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Where agents earn their keep</span>
      <h2 class="rise" style="animation-delay:.08s;">Six problems, six agents, six numbers.</h2>
      <div class="cases" style="grid-template-columns:repeat(3,1fr);margin-top:16px;">
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.20s"><div class="ch"><span class="cn">Day-1 onboarding</span></div><p>Delivery partner onboarding took 3 days of paperwork. The agent collects docs, verifies via API, runs safety training and issues the certificate.</p><div class="cm"><div class="m"><div class="mn">45 min</div><div class="ml">average onboarding</div></div></div></div>
        <div class="case rise" style="--pc:#32CAD4;animation-delay:.27s"><div class="ch"><span class="cn">Store helpdesk</span></div><p>Staff don't know today's offers or the returns policy. A WhatsApp agent answers from your merchandising docs.</p><div class="cm"><div class="m"><div class="mn">24/7</div><div class="ml">Hindi · Tamil · Telugu</div></div></div></div>
        <div class="case rise" style="--pc:#3DBE7B;animation-delay:.34s"><div class="ch"><span class="cn">Safety induction</span></div><p>Induction was a paperwork exercise. The agent walks SOP steps with video verification, quiz and certificate.</p><div class="cm"><div class="m"><div class="mn">Audit-ready</div><div class="ml">ISO 27001 logs</div></div></div></div>
        <div class="case rise" style="--pc:#FF9518;animation-delay:.41s"><div class="ch"><span class="cn">Compliance assessment</span></div><p>Completion sat below 40% with regulators watching. A deterministic flow takes every worker through every step.</p><div class="cm"><div class="m"><div class="mn">100%</div><div class="ml">audit trail</div></div></div></div>
        <div class="case rise" style="--pc:#7C6BF0;animation-delay:.48s"><div class="ch"><span class="cn">L&D back office</span></div><p>Admin ate 60% of the L&D team's time. A background agent auto-assigns, reminds, syncs and reports.</p><div class="cm"><div class="m"><div class="mn">−38%</div><div class="ml">L&D ops time</div></div></div></div>
        <div class="case rise" style="--pc:#D0271D;animation-delay:.55s"><div class="ch"><span class="cn">Sales roleplay</span></div><p>New reps took 3 months to reach quota. The agent runs 20+ scenarios and scores tone, empathy and accuracy.</p><div class="cm"><div class="m"><div class="mn">Always on</div><div class="ml">scenario coaching</div></div></div></div>
      </div>
    </div>`},{id:`ai6b`,theme:`light`,title:`Under the hood`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">For your architects &amp; CISO</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Private inference, guardrails, and write-back into <span style="color:var(--navy)">your systems.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.lock}</svg></span><h4>Private LLM inference</h4><p>vLLM on dedicated GPU — your data never leaves the platform; data stays in India</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.plug}</svg></span><h4>MCP tools, live write-back</h4><p>Agents read and write into client systems — Kong → Kafka orchestration underneath</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.book}</svg></span><h4>Knowledge layer</h4><p>Your documents via embeddings → OpenSearch; answers cited back to source</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.layers}</svg></span><h4>Context &amp; memory layers</h4><p>Per-worker context with PII isolation between conversations</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.shield}</svg></span><h4>Guardrails that act</h4><p>PII masking, prompt-injection, toxicity, leakage &amp; hallucination guards — a breach pauses the agent and raises an event</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.chart}</svg></span><h4>Cost governance</h4><p>Token logs, per-agent/team/month limits — full cost visibility on a dashboard</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.globe}</svg></span><h4>White-label ready</h4><p>Ships as your agents, in your brand, in your app</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.check}</svg></span><h4>Certified</h4><p>ISO 27001 · SOC 2 · deterministic mode for regulated flows</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.4s;margin-top:14px;">Every conversation ships structured data as a by-product — feeding the single worker profile</div>
    </div>`},{id:`ai7`,theme:`darker`,title:`Pricing`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Pricing · pay for what you use</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Credits, not licences. <span style="color:var(--yellow)">₹0.37 per interaction, typical.</span></h2>
      <div class="tiers rise" style="animation-delay:.2s">
        <div class="tier"><div class="tname">Included</div><div class="tfor">With every skillBetter plan</div><ul><li>Free monthly credits</li><li>2 agents, chat only</li><li>Your first agent is 10 minutes away — no setup fee</li></ul></div>
        <div class="tier hot"><div class="tname">Growth</div><div class="tfor">Scaling teams</div><ul><li>Rollover credits &amp; analytics</li><li>Voice agents + 20+ hooks</li><li>Voice at ₹5/min vs ₹12/min industry — ~58% saving</li></ul></div>
        <div class="tier"><div class="tname">Enterprise</div><div class="tfor">Dedicated &amp; private</div><ul><li>Custom credit pool, SLA</li><li>Private deployment, white-label</li><li>Per-agent, per-team cost limits &amp; token logs</li></ul></div>
      </div>
      <div class="databar rise" style="animation-delay:.4s;margin-top:18px;">
        <div class="dbtop"><span class="dbn">Worked example</span><span class="dbt">5,000 workers on a multi-step chat agent ≈ 12,400 credits ≈ <b style="color:var(--yellow)">₹1,860 a month</b>. Built by your L&amp;D team — no data-science hires.</span></div>
      </div>
    </div>`},C(`ai7b`,`What hiring agents does to your cost base.`,[{n:`₹0.37`,what:`Per resolved interaction`,how:`Helpdesk questions, onboarding steps and L&D chasing move from salaried hours to fractions of a rupee — 5,000 workers served for ~₹1,860 a month.`,proof:`Credit calculator, customer-facing`},{n:`−70%`,what:`Time-to-hire on agent-run funnels`,how:`Screening, scheduling and verification run overnight without adding recruiter headcount for peaks.`,proof:`Live at Subway · IFFCO Tokio`},{n:`−38%`,what:`L&D operations time`,how:`A background agent auto-assigns, reminds, syncs and reports — your team designs learning instead of chasing it.`,proof:`Measured on the L&D ops agent`},{n:`3×`,what:`Coaching capacity, zero new trainers`,how:`AI Max roleplays with 30,000 sales pros simultaneously — every rep practises before every real call.`,proof:`IFFCO Tokio, in production`}],`Bring one painful process to a 30-minute call — we build the agent live and you extrapolate the maths.`),{id:`ai8`,theme:`dark`,title:`Proof + next steps`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">Already in production</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Agents are working shifts today.</h2>
      <div class="modelrow rise" style="animation-delay:.2s;margin-top:16px;">
        <div class="mstat"><div class="n">IFFCO Tokio</div><div class="l">AI Max coaching ~30,000 sales professionals</div></div>
        <div class="mstat"><div class="n">Subway</div><div class="l">Hiring agent live; HRMS integration shipped in one day</div></div>
        <div class="mstat"><div class="n">Reliance</div><div class="l">700K MAU · recruitment &amp; onboarding agents deployed</div></div>
        <div class="mstat"><div class="n">Meesho</div><div class="l">goBetter bot in enterprise validation</div></div>
      </div>
      <div class="ctacards" style="margin-top:22px;">
        <div class="ctac rise" style="animation-delay:.4s"><div class="num">01</div><h4>A 30-minute build call</h4><p>Bring one painful process. We build the agent on the call, on your documents, and you talk to it before we hang up.</p></div>
        <div class="ctac rise" style="animation-delay:.47s"><div class="num">02</div><h4>A two-week pilot</h4><p>One site or team, one agent, real workers. You see completion, cost per interaction and the audit trail.</p></div>
        <div class="ctac rise" style="animation-delay:.54s"><div class="num">03</div><h4>Scale on credits</h4><p>Add agents and languages as they earn it — the meter, the logs and the limits are all yours to see.</p></div>
      </div>
    </div>`}],ne=[{id:`sk1`,theme:`dark`,title:`skillBetter cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">skillBetter · mobile-first LMS</span>
      <h1 class="rise" style="animation-delay:.15s">Training the frontline <span style="color:var(--yellow)">actually finishes.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Bite-sized, gamified, vernacular learning on the worker's own phone — built for low-literacy, mobile-only, multilingual teams.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n"><em>88</em>%</div><div class="l">Completion vs 25% industry</div></div>
        <div class="stat"><div class="n">35+</div><div class="l">Languages out of the box</div></div>
        <div class="stat"><div class="n">25L+</div><div class="l">Active monthly learners</div></div>
        <div class="stat"><div class="n">100M+</div><div class="l">Learning minutes delivered</div></div>
      </div>
    </div>
    <div class="chero" style="width:clamp(300px,30vw,420px);top:56%;">
      <div class="phones" style="min-height:auto;">
        <div class="phone p1"><img src="assets/product/app-gamification.webp" alt="Gamified journey"/></div>
        <div class="phone p2"><img src="assets/product/app-home.webp" alt="Learner home"/></div>
        <div class="phone p3"><img src="assets/product/app-leaderboard.webp" alt="Leaderboard"/></div>
      </div>
    </div>`},{id:`sk1b`,theme:`darker`,title:`Voices from the frontline`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Real voices · 300M+ frontline workers</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Your workers already told you why training fails.</h2>
      <div class="quotes rise" style="animation-delay:.2s">
        <div class="quote"><p>I received minimal training before starting — it slowed me down for weeks.</p><span class="qtag">20% churn in 90 days</span></div>
        <div class="quote"><p>The materials are in English. Most of us understand our own language far better.</p><span class="qtag">70% prefer vernacular</span></div>
        <div class="quote"><p>There's no ongoing training. We figure everything out ourselves.</p><span class="qtag">Low skill retention</span></div>
        <div class="quote"><p>We don't get regular feedback, so it's hard to know how to improve.</p><span class="qtag">Performance gaps</span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">The business bill: high churn · inconsistent customer experience · compliance risk · <b>₹15K+ training cost per head that nobody finishes.</b></div>
    </div>`},{id:`sk2`,theme:`light`,title:`Why traditional LMS fails`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The problem with the LMS you have</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:26ch;">88% of your team finishes training here. <span style="color:var(--navy)">Today it's 25%.</span></h2>
      <div class="mediasplit" style="align-items:start;">
        <div class="vs rise" style="animation-delay:.2s;grid-template-columns:1fr;margin-top:16px;">
          <div class="col bad">
            <h4>Traditional LMS</h4>
            <ul>
              <li>Desktop-first — field workers never log in</li>
              <li>English-only content for a multilingual workforce</li>
              <li>45+ days to onboard; 50–70% frontline attrition</li>
              <li>10–15% active use; ~30% of certifications lapse — licence fees accrue anyway</li>
            </ul>
          </div>
          <div class="col good">
            <h4>skillBetter</h4>
            <ul>
              <li>Built for the worker's own phone, low bandwidth, any language</li>
              <li>Reels, streaks, badges &amp; leaderboards that pull people back</li>
              <li>AI tutor re-engages lapsed learners automatically</li>
              <li>Mandatory courses enforced — 30% lower compliance risk</li>
            </ul>
          </div>
        </div>
        <div class="rise" style="animation-delay:.35s;margin-top:16px;">
          <div class="pminihead">Workforce that completes assigned training</div>
          <div class="barchart">
            <div class="bc-row"><span class="bl">Traditional LMS</span><span class="track"><span class="fill" style="--w:25%;background:linear-gradient(90deg,#c6cee6,#aab6dd)"></span></span><span class="bv">25%</span></div>
            <div class="bc-row"><span class="bl">skillBetter</span><span class="track"><span class="fill" style="--w:88%;background:linear-gradient(90deg,var(--navy-2),var(--teal))"></span></span><span class="bv">88%</span></div>
          </div>
          <div style="margin-top:14px;"><span class="bc-delta">3.5× more of your workforce, trained</span></div>
          <p class="lede rise" style="animation-delay:.5s;margin-top:18px;">Same people. Same content. A platform designed for how the frontline actually uses a phone.</p>
        </div>
      </div>
    </div>`},{id:`sk2b`,theme:`dark`,title:`Learning in the flow of work`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Point-of-need learning · in the flow of work</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:24ch;">Training doesn't wait for a classroom. <span style="color:var(--yellow)">It finds the worker.</span></h2>
        <div class="featlist">
          ${b(w.zap,`Lands where they already are`,`The goBetter app — or straight into WhatsApp via an AI Labs agent. No new app to install, nothing to learn before learning.`,.24)}
          ${b(w.play,`Two minutes, at the moment of need`,`A new SKU, an incident, tomorrow’s audit — the right micro-lesson triggers on the business event, not the training calendar.`,.32)}
          ${b(w.chart,`Completion is the floor. Performance is the goal.`,`Quiz scores, roleplay ratings and on-the-job KPIs write back to the same worker record as attendance and payroll.`,.4)}
          ${b(w.bot,`Nudges that close the loop`,`AI Theo re-engages lapsed learners in their own language — your L&D team stops being the follow-up department.`,.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.3s">
        <div class="phoneshell">
          <div class="scr">
            <div class="wahd"><span class="wav">T</span><div><b>skillBetter · AI Theo</b><span>online · Hindi</span></div></div>
            <div class="wabody">
              <div class="wam" style="--d:.8s">Namaste Sunita! Kal store audit hai — 2-minute ka refresher taiyaar hai 👇</div>
              <div class="lesson" style="--d:1.5s">
                <div class="lth"></div>
                <div class="lbody"><div class="lt">Fire exit &amp; extinguisher check</div><div class="ls">2 min · Hindi · 4 cards + quiz</div><div class="lprog"><i></i></div></div>
              </div>
              <div class="wam me3" style="--d:3.1s">Done ✅</div>
              <div class="wam" style="--d:3.6s">Shabash! Quiz 3/3 sahi 🎯</div>
              <div class="badge2" style="--d:4.2s">🏅 Safety badge · +50 coins</div>
            </div>
          </div>
        </div>
        <div class="phonecap" style="margin-top:14px;">A real pattern: event-triggered micro-lesson, delivered in WhatsApp, certified in 2 minutes</div>
      </div>
    </div>
    ${x(`AI Theo · learning tutor`,`The lesson that delivers itself`,`Business events trigger the journey; the agent delivers, quizzes, certifies and chases — in the worker’s language, inside the chat they already use.`,`10M+ queries answered · 35+ languages`)}
    `},{id:`sk3`,theme:`light`,title:`Core capabilities`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">What your team gets</span>
        <h2 class="rise" style="animation-delay:.08s;">One upload. <span style="color:var(--navy)">Every language your team speaks.</span></h2>
        <div class="featlist">
          ${b(w.lang,`AI translation in under 15 minutes`,`Any video, PDF or PPT into any of 35+ languages — context-aware and conversational, not literal. 500K+ translations delivered. Record once in English; your team watches it in Tamil by lunch.`,.24)}
          ${b(w.play,`Reels for learning`,`Instagram-style micro-content, plus an AI generator that turns your PDFs into reels.`,.32)}
          ${b(w.trophy,`Gamification that moves numbers`,`Coins, badges, streaks, leaderboards and role-specific journeys — +65% voluntary participation, +19.7% week-on-week retention at Meesho.`,.4)}
          ${b(w.book,`250+ ready courses, free`,`POSH, safety, retail selling, last-mile — plus in-house custom content development.`,.48)}
          ${b(w.plug,`Plugs into PMS / HRMS`,`Assignments, completions and records sync over API. Zepto gates order delivery on training completion.`,.56)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="phones" style="min-height:clamp(280px,30vw,390px);">
          <div class="phone p1"><img src="assets/product/app-gamification.webp" alt="Gamified journey"/></div>
          <div class="phone p2"><img src="assets/product/app-home.webp" alt="Learner home"/></div>
          <div class="phone p3"><img src="assets/product/app-leaderboard.webp" alt="Leaderboard"/></div>
        </div>
        <div class="phonecap" style="margin-top:14px;">Learner home · gamified journeys · leaderboards — the live app</div>
      </div>
    </div>
    ${x(`Translation engine`,`One master course, every language`,`Speech and text models localise video, voice and quizzes together — tone-controlled, industry-aware, reviewed by humans.`,`500K+ translations · <15 min per course`)}
    `},{id:`sk3c`,theme:`dark`,title:`The learner experience`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The learner experience · latest product design</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">A feed they scroll, chapters they finish, quizzes that answer back.</h2>
      <div class="mediasplit" style="align-items:center;">
        <div>
          <div class="featlist" style="margin-top:10px;">
            ${b(w.play,`New Feed — reel-style learning`,`Short-form portrait video cards on the learner home: training that looks like the apps they already scroll.`,.24)}
            ${b(w.book,`Chaptered courses with resume`,`Mandatory markers, language selector, chapter states and a Resume CTA — progress never gets lost.`,.32)}
            ${b(w.check,`Quizzes that teach`,`Image MCQs with hints and instant feedback on wrong answers — assessment as a learning moment.`,.4)}
            ${b(w.doc,`Offline downloads`,`Chapters download for low-network field days — learning survives the warehouse basement.`,.48)}
          </div>
        </div>
        <div class="rise" style="animation-delay:.3s">
          <div class="phones" style="min-height:clamp(280px,30vw,390px);">
            <div class="phone p1"><img src="assets/product/figma/skilling/skillbetter-mobile-course-overview-chapter-states.png" alt="Course overview with chapter states"/></div>
            <div class="phone p2"><img src="assets/product/figma/skilling/mobile-learning-home-new-feed.png" alt="Learner home with New Feed"/></div>
            <div class="phone p3"><img src="assets/product/figma/skilling/skillbetter-mobile-image-mcq-feedback.png" alt="Image MCQ with instant feedback"/></div>
          </div>
          <div class="phonecap" style="margin-top:12px;">Course overview · New Feed home · image MCQ — current product design</div>
        </div>
      </div>
    </div>`},{id:`sk3b`,theme:`light`,title:`The complete platform`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The complete platform · one worker record underneath</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">One platform, four jobs: <span style="color:var(--navy)">learn, engage, assess, prove.</span></h2>
      <div class="rise" style="animation-delay:.22s;margin-top:16px;max-width:960px;">
        <div class="conmock tabshow" data-cycle="3400">
          <div class="tabs"><span class="cyc">▶ Learn</span><span class="cyc">🔥 Engage</span><span class="cyc">✓ Assess</span><span class="cyc">📊 Prove</span></div>
          <div class="panes">
            <div class="cycpane">
              <div class="pdesc"><h4>Reels, courses &amp; journeys — in 35+ languages</h4><p>Instagram-style micro-content, chaptered courses with resume, multi-course onboarding journeys — with offline downloads for low-network field days. Levels take a learner beginner → advanced.</p><span class="pstat">88% completion vs 25% industry</span></div>
              <div class="pviz">
                <div class="reel"><span class="rprog"></span><span class="plybtn"></span><span class="rcap">Festive upselling · 90 sec</span></div>
                <div class="reel"><span class="rprog"></span><span class="plybtn"></span><span class="rcap">5S on the shop floor · 2 min</span></div>
                <div class="reel"><span class="rprog"></span><span class="plybtn"></span><span class="rcap">Greeting the customer · 60 sec</span></div>
              </div>
            </div>
            <div class="cycpane">
              <div class="pdesc"><h4>Streaks, coins, leaderboards &amp; social feeds</h4><p>Gamification that moves numbers, not just badges — team and regional rankings, recognition feeds, in-app chat and rewards that pull people back daily.</p><span class="pstat">+65% voluntary participation · +19.7% WoW retention</span></div>
              <div class="pviz">
                <div class="lb">
                  <div class="lbrow"><span class="medal">🥇</span><b>Sunita D.</b><span class="pts">2,410 pts</span></div>
                  <div class="lbrow"><span class="medal">🥈</span><b>Ravi K.</b><span class="pts">2,180 pts</span></div>
                  <div class="lbrow me2"><span class="medal">🥉</span><b>You</b><span class="pts">2,090 pts</span></div>
                  <div class="streak">🔥 12-day streak · +50 coins today</div>
                </div>
              </div>
            </div>
            <div class="cycpane">
              <div class="pdesc"><h4>Proctored, auto-scored, defensible</h4><p>12+ question types answered by photo, video, audio or document; live face-detection proctoring pauses the exam when the learner leaves; tamper-proof certificates. In-app live classes and QR classroom attendance included.</p><span class="pstat">99.2% face-detection accuracy</span></div>
              <div class="pviz">
                <div class="quiz">
                  <div class="qq">A customer wants a refund without a bill. First step?</div>
                  <div class="qo">Escalate to the store manager</div>
                  <div class="qo right">✓ Look up the purchase on the app</div>
                  <div class="qo">Refuse the refund</div>
                  <div class="prct"><i></i>Proctoring active · face verified</div>
                </div>
              </div>
            </div>
            <div class="cycpane">
              <div class="pdesc"><h4>250+ data points, straight to the board</h4><p>Completion, scores, certification currency and skill coverage by role, city and partner — with API sync into your PMS/HRMS, and mandatory courses enforced at the top of the app.</p><span class="pstat">222 custom audits at Amazon · 91% completion</span></div>
              <div class="pviz">
                <div class="ana">
                  <div class="abar"><span class="al">Completion</span><span class="track"><span class="fill" style="--w:88%"></span></span><b>88%</b></div>
                  <div class="abar"><span class="al">Pass rate</span><span class="track"><span class="fill" style="--w:84%"></span></span><b>84%</b></div>
                  <div class="abar"><span class="al">Certs current</span><span class="track"><span class="fill" style="--w:92%"></span></span><b>92%</b></div>
                  <div class="abar"><span class="al">Daily active</span><span class="track"><span class="fill" style="--w:76%"></span></span><b>76%</b></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clientline rise" style="animation-delay:.4s;margin-top:14px;">250+ ready courses free · custom content built in-house · event-based triggers · works in low-bandwidth field conditions</div>
    </div>`},{id:`sk4`,theme:`light`,title:`Proctored assessments`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Assessments you can defend</span>
        <h2 class="rise" style="animation-delay:.08s;">No face on camera? <span style="color:var(--navy)">The exam pauses itself.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:12px;">Certificates only mean something if the right person earned them. skillBetter proctors every exam with live face detection, a visible strike system and auto-pause.</p>
        <div class="featlist">
          ${b(w.eye,`99.2% face-detection accuracy`,`The camera watches for the enrolled learner; absence or a second face pauses the exam instantly.`,.28)}
          ${b(w.warn,`Visible strike system`,`Learners see strike 1/3 on screen — enforcement is transparent, not a surprise at the end. Three strikes ends the exam.`,.36)}
          ${b(w.shield,`Tamper-proof certification`,`Digital certificates with audit-ready records — multi-factor checks stop proxy test-takers.`,.44)}
        </div>
        <div class="modelrow rise" style="grid-template-columns:repeat(3,1fr);animation-delay:.52s;margin-top:16px;">
          
          <div class="mstat"><div class="n">99.2%</div><div class="l">Face-detection accuracy</div></div>
          <div class="mstat"><div class="n">12+</div><div class="l">Question types, auto-scored</div></div>
          <div class="mstat"><div class="n">24/7</div><div class="l">Real-time integrity alerts</div></div>
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s;display:flex;flex-direction:column;align-items:center;">
        <div class="phones" style="min-height:auto;">
          <div class="phone p2" style="margin:0;width:clamp(170px,17vw,215px);"><img src="assets/product/proctoring-no-face-detected.png" alt="Live proctoring — no face detected, strike 1 of 3"/></div>
        </div>
        <div class="phonecap" style="margin-top:14px;">Live enforcement in production — <b style="color:var(--navy)">"No face detected · strike 1/3 · exam paused"</b></div>
      </div>
    </div>`},{id:`sk4b`,theme:`darker`,title:`AI inside the LMS`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">AI that works for your workforce</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">A tutor that never sleeps, in every language you employ.</h2>
      <div class="mediasplit" style="align-items:center;">
        <div class="featlist" style="margin-top:14px;">
          ${b(w.bot,`24/7 AI chatbot — voice and text`,`Trained on your SOPs, answers in 35+ languages with citations. 10M+ queries answered. A technician in Madurai asks in Tamil; the answer comes from your service manual in 4 seconds.`,.24)}
          ${b(w.lang,`AI translation engine`,`Entire courses translated in minutes — context-aware, industry-specific, meaning preserved. 500K+ translations shipped.`,.34)}
          ${b(w.zap,`AI re-engagement`,`Lapsed learners get nudged back automatically — the platform chases completion so your L&D team doesn’t.`,.44)}
          ${b(w.shield,`Patent-protected, enterprise-grade`,`SOC 2 compliant, private deployment options, 100M+ AI interactions to date.`,.54)}
        </div>
        <div class="rise" style="animation-delay:.3s">
          ${y(`assets/product/figma/skilling/ai-course-translation-management.jpg`,`gobetter · Skilling · AI Translation`,`The translation console — <b>AI or manual per language</b>, voice &amp; tone choices, retry &amp; edit`)}
        </div>
      </div>
    </div>`},{id:`sk4c`,theme:`light`,title:`AI content studio`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">AI content studio · human-approved</span>
        <h2 class="rise" style="animation-delay:.08s;">Your SME gives it an hour. <span style="color:var(--navy)">The course ships the same afternoon.</span></h2>
        <div class="featlist">
          ${b(w.doc,`Brief in, course out`,`Drop a SOP, PPT or video and a topic brief — the studio drafts the outline, chapters, quiz and reels-style cards.`,.24)}
          ${b(w.check,`A human approves every stage`,`Your L&D team reviews the outline, edits the cards and signs off before anything reaches a learner — AI does the heavy lifting, people keep control.`,.32)}
          ${b(w.lang,`Then 35+ languages, automatically`,`The approved course goes through the translation console — voice and tone per language, live the same day.`,.4)}
          ${b(w.layers,`Every depth, one workflow`,`Nano cards for daily briefs (3–5 min), full courses, or multi-course journeys — reels, video, 12+ quiz types, AI roleplay and live classes.`,.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="aistudio">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">gobetter · Skilling · Create with AI</span></div>
          <div class="body">
            <div class="brief"><span class="bi">✦</span><span class="bt">Brief: <em>"Festive-season upselling for store associates — from the attached playbook"</em><span class="cursor"></span></span></div>
            <div class="gen">
              <div class="gline"><span class="gi">1</span><span><b>Outline drafted</b> — 5 chapters · 14 cards · 8-question quiz</span><span class="gs">✓ Generated</span></div>
              <div class="gline hitl"><span class="gi">2</span><span><b>L&amp;D review</b> — 2 cards edited, 1 example replaced</span><span class="gs">Priya · approved</span></div>
              <div class="gline"><span class="gi">3</span><span><b>Reels &amp; quiz built</b> — portrait video cards + image MCQs</span><span class="gs">✓ Generated</span></div>
              <div class="gline"><span class="gi">4</span><span><b>Translated</b> — Hindi · Tamil · Telugu · Bengali · Marathi</span><span class="gs">✓ 5 languages</span></div>
            </div>
            <div class="formats"><span>Reels</span><span>Video</span><span>12+ quiz types</span><span>AI roleplay</span><span>Live class</span><span>Nano · Course · Journey</span></div>
            <div class="prog">Published to 4,200 store associates — <b>brief to live in one afternoon</b></div>
          </div>
        </div>
      </div>
    </div>`},{id:`sk4d`,theme:`light`,title:`Skills intelligence`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Skills intelligence · on the worker record</span>
        <h2 class="rise" style="animation-delay:.08s;">Know exactly who can do what — <span style="color:var(--navy)">before you roster them.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">Every course, assessment and certification writes back to the role–skill map. Gaps trigger journeys automatically; expiring certifications resurface before they lapse.</p>
        <div class="featlist">
          ${b(w.chart,`Role–skill mapping, live`,`Coverage by role, site and skill — the treemap your L&D reviews and your ops team plans against.`,.28)}
          ${b(w.zap,`Gaps auto-assign learning`,`A skill below threshold pushes the journey to exactly the workers who need it — nobody audits spreadsheets.`,.36)}
          ${b(w.shield,`And here’s the part nobody else has`,`Skills sit on the same worker record as attendance, BGV and payroll — so certification can gate rostering and dispatch, the way Zepto gates deliveries.`,.44)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="skillmap">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">gobetter · Skilling · Role–skill coverage · Mumbai region</span></div>
          <table>
            <thead><tr><th>Role</th><th>Safety</th><th>POSH</th><th>Product</th><th>Selling</th><th>SOP</th></tr></thead>
            <tbody>
              <tr><td>Store associate</td><td><span class="cell c-hi">96%</span></td><td><span class="cell c-hi">99%</span></td><td><span class="cell c-md">71%</span></td><td><span class="cell c-lo">54%</span></td><td><span class="cell c-hi">92%</span></td></tr>
              <tr><td>Picker · dark store</td><td><span class="cell c-hi">98%</span></td><td><span class="cell c-hi">97%</span></td><td><span class="cell c-hi">94%</span></td><td><span class="cell c-md">—</span></td><td><span class="cell c-md">76%</span></td></tr>
              <tr><td>Field engineer</td><td><span class="cell c-md">82%</span></td><td><span class="cell c-hi">95%</span></td><td><span class="cell c-lo">61%</span></td><td><span class="cell c-md">70%</span></td><td><span class="cell c-hi">91%</span></td></tr>
              <tr><td>Telesales rep</td><td><span class="cell c-hi">99%</span></td><td><span class="cell c-hi">98%</span></td><td><span class="cell c-md">78%</span></td><td><span class="cell c-hi">88%</span></td><td><span class="cell c-md">80%</span></td></tr>
            </tbody>
          </table>
          <div class="foot"><span><b>2 gaps flagged</b> — Selling (store associates), Product (field engineers)</span><span class="act">Journeys auto-assigned → 1,340 workers</span></div>
        </div>
        <div class="bcap">Live coverage by role and region — gaps close themselves</div>
      </div>
    </div>`},{id:`sk5`,theme:`light`,title:`Admin console`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The admin side · goBetter Skilling</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">Your L&amp;D team runs it — <span style="color:var(--navy)">275 courses, one console.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${y(`assets/product/gobetter/lms/content-hub-course-library-275.jpg`,`gobetter · Skilling · Content Hub`,`The content hub — <b>275 courses</b>, search, tags, drafts &amp; published`)}
        ${y(`assets/product/gobetter/lms/course-builder-wizard-with-preview.jpg`,`gobetter · Course Builder`,`Guided course builder with a <b>live phone preview</b> before publishing`)}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:16px;max-width:90ch;">Overview → Levels → Cards → Preview: admins see exactly what the learner will see before a course ships. One catalogue serves retail, logistics, sales and corporate teams.</p>
    </div>
    ${x(`AI Theo · learning tutor`,`Answers from your SOPs, cited`,`Retrieval over your approved content means Theo teaches your way — and every question asked becomes a signal of what to train next.`,`10M+ queries answered`)}
    `},{id:`sk5b`,theme:`light`,title:`Journeys & assessment governance`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Journeys &amp; governance · the admin side, continued</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Onboarding journeys and compliance assessments <span style="color:var(--navy)">run themselves.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${y(`assets/product/figma/skilling/playlist-library-onboarding-journeys.jpg`,`gobetter · Skilling · Playlist Library`,`Learning journeys at scale — <b>298 playlists</b> with status, language, distribution &amp; scheduling`,!0)}
        ${y(`assets/product/figma/skilling/assessment-advanced-settings.jpg`,`gobetter · Skilling · Assessment Settings`,`Recurring compliance assessments — schedule, occurrences, <b>automated reminders &amp; push cadence</b>`,!0)}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:16px;max-width:92ch;">Set a quarterly POSH assessment once: it re-runs, reminds and reports on its own. Your L&amp;D team stops being the follow-up department.</p>
    </div>`},{id:`sk6`,theme:`dark`,title:`Proof`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Proof at enterprise scale</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;">The completion numbers, with names on them.</h2>
      <div class="cases" style="margin-top:16px;">
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.2s"><div class="ch"><span class="cn">Reliance Retail Skill Academy</span><span class="ct">Retail · 18,000+ stores</span></div><p>India's largest skilled talent pool on the Samarth platform — skills repository, AI course recommendations, standardized onboarding. 4.7★ on Play Store, 1.7L+ downloads.</p><div class="cm"><div class="m"><div class="mn">500K+</div><div class="ml">people skilled</div></div><div class="m"><div class="mn">60%</div><div class="ml">cost savings</div></div><div class="m"><div class="mn">1.5L+</div><div class="ml">annual hires</div></div></div></div>
        <div class="case rise" style="--pc:#D0271D;animation-delay:.28s"><div class="ch"><span class="cn">Meesho Reseller Academy</span><span class="ct">Social commerce</span></div><p>Vernacular micro-learning in 10+ languages for resellers — product knowledge, order management, customer handling.</p><div class="cm"><div class="m"><div class="mn">2M+</div><div class="ml">resellers trained</div></div><div class="m"><div class="mn">85%</div><div class="ml">completion vs 30%</div></div><div class="m"><div class="mn">+40%</div><div class="ml">sales uplift</div></div></div></div>
        <div class="case rise" style="--pc:#FF9518;animation-delay:.36s"><div class="ch"><span class="cn">Hindalco · Aditya Birla Group</span><span class="ct">Manufacturing · $26B metals</span></div><p>E-Karyashala: self-paced, gamified shop-floor training with mandatory completion tracking — 60+ technical modules, 50+ assessments.</p><div class="cm"><div class="m"><div class="mn">3×</div><div class="ml">training coverage</div></div><div class="m"><div class="mn">1,200+</div><div class="ml">training hours</div></div><div class="m"><div class="mn">1,000+</div><div class="ml">workers upskilled</div></div></div></div>
        <div class="case rise" style="--pc:#32CAD4;animation-delay:.44s"><div class="ch"><span class="cn">Amazon · GSF Learning Academy</span><span class="ct">E-commerce &amp; logistics</span></div><p>Role-aware, event-based learning across two business units with 222 custom audits, in multiple Indian languages.</p><div class="cm"><div class="m"><div class="mn">91%</div><div class="ml">completion vs &lt;30%</div></div><div class="m"><div class="mn">222</div><div class="ml">custom audits</div></div></div></div>
      </div>
      <div class="testimonial rise" style="animation-delay:.55s"><p>"The skillBetter team is agile, responsive, and turns customer feedback into reality by co-creating solutions."</p><div class="who">Dr. Mayuk Dasgupta — Digital Culture &amp; Capability Building, Hindalco</div></div>
    </div>`},{id:`sk6b`,theme:`light`,title:`Enterprise-grade`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Enterprise-ready &amp; globally backed</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">Built for your security review, <span style="color:var(--navy)">not just your L&amp;D team.</span></h2>
      <div class="capgrid three rise" style="animation-delay:.2s">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.lock}</svg></span><h4>Enterprise security</h4><p>SOC 2 Type II · ISO 27001 · data localization in India &amp; SEA · enterprise-grade encryption</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.plug}</svg></span><h4>Plugs into your stack</h4><p>Pre-built connectors for Workday, Salesforce and SAP · API-first · no re-entry between systems</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.globe}</svg></span><h4>Global footprint</h4><p>Operations across India, SEA and GCC · multi-timezone support · local-language teams</p></div>
      </div>
      <div class="rise" style="animation-delay:.35s;margin-top:20px;padding-top:16px;border-top:1px solid var(--border);display:flex;align-items:center;gap:24px;flex-wrap:wrap;">
        <div class="tblock"><div class="h">Certified &amp; compliant</div><div class="certs" style="margin-top:6px;"><img src="assets/compliance/iso-27001.svg" alt="ISO 27001" style="height:42px"/><img src="assets/compliance/soc-2.svg" alt="SOC 2" style="height:42px"/><img src="assets/compliance/gdpr.svg" alt="GDPR" style="height:42px"/><img src="assets/compliance/dpdpa.svg" alt="DPDPA" style="height:42px"/></div></div>
        <div class="tblock" style="border-left:1px solid var(--border);padding-left:24px;"><div class="h">Backed by</div><div class="v" style="margin-top:8px;">British International Investment · Macquarie · Jungle Ventures · 3one4 Capital · CX Partners</div></div>
      </div>
    </div>`},C(`sk6c`,`What 88% completion actually buys you.`,[{n:`−60%`,what:`Training cost per certified worker`,how:`AI translation replaces per-language content production; 250+ ready courses replace vendor commissions; completion means the spend lands.`,proof:`Reliance: 60% cost saving · 14 languages`},{n:`Weeks → days`,what:`Time-to-productive for new joiners`,how:`3× faster onboarding: a hire sells, picks or repairs sooner — every day earlier is a day of output you currently lose.`,proof:`Meesho: 3× faster · +40% sales uplift`},{n:`−15%`,what:`Attrition in the first 90 days`,how:`Workers who feel invested in stay; gamified journeys and recognition are retention levers, not toys.`,proof:`+19.7% WoW retention at Meesho`},{n:`100%`,what:`Compliance you can show an auditor`,how:`Mandatory enforcement, proctored exams and tamper-proof certificates — when the auditor asks, you pull up the record instead of pulling a late night.`,proof:`91% completion on 222 Amazon audits`}],`Put your own numbers in: workforce size × attrition × ₹15K training cost — we’ll model the saving in the first call.`),{id:`sk7`,theme:`darker`,title:`Next steps`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">See it on your content</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Three demos we can run this week.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Your branded app, live</h4><p>A skillBetter instance with your logo and three of your courses — in your hands, on your phone.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>The translation proof</h4><p>Send us any training video or PDF. It comes back in Hindi and one more language within the hour.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>An AI tutor on your SOPs</h4><p>A chatbot trained on your public website and brochures — ask it anything, in any language.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`}],re=T.find(e=>e.id===`s8`),ie=[{id:`at1`,theme:`dark`,title:`Attendance cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">manageBetter · attendance &amp; workforce management</span>
      <h1 class="rise" style="animation-delay:.15s">Live attendance. <span style="color:var(--yellow)">Zero spoofing.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Face-verified, geo-fenced attendance feeding rosters, approvals and payroll — one system for every site, shift and vendor.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">−90%</div><div class="l">Payroll leakage</div></div>
        <div class="stat"><div class="n">967</div><div class="l">Sites live at Zepto alone</div></div>
        <div class="stat"><div class="n">18,026</div><div class="l">Face-registered in one org</div></div>
        <div class="stat"><div class="n">Minutes</div><div class="l">Shortfall fixes, not hours</div></div>
      </div>
      <div class="mdcover ghost">AT</div>
    </div>`},...ee(`at1b`,`For the ops leader`,`You already suspect the muster is lying to you.`,`And the exceptions are eating your supervisors’ week.`,[{pain:`Buddy punching pays ghosts every month`,painDetail:`74% of employers lose to time theft — a colleague swipes for a friend who isn’t on site, and payroll pays reality it never saw.`,painStat:`≈2.2% of gross payroll lost · Nucleus Research`,fix:`Face + geo check-in, spoofs queued for review`,fixDetail:`AI face-match with liveness inside a geo-fence; suspect punches land in a "Possible spoofs" approval tab, not in payroll.`,fixStat:`Zepto: spoof detection live across 967 sites`},{pain:`You learn about no-shows at shift start`,painDetail:`The gap surfaces when the line is already short — then it’s WhatsApp panic and overtime you didn’t budget.`,painStat:`Frontline attrition peaks 23% in festive months`,fix:`Live present/absent by site, roster gaps flagged`,fixDetail:`Real-time dashboards and weekly roster grids show tomorrow’s shortfall today — filled in minutes, not discovered at 9 AM.`,fixStat:`Shortfall fixes: hours → minutes`},{pain:`OT and attendance disputes eat supervisor hours`,painDetail:`Missed punches become arguments; corrections happen in Excel with no trail an auditor will accept.`,painStat:`Manual musters = unauditable corrections`,fix:`Worker self-service with controlled regularisation`,fixDetail:`Workers see hours, earnings and IN/OUT proof on their phone and correct errors through a guided, reasoned, approved flow.`,fixStat:`Every correction logged + approved`},{pain:`Every site runs its own attendance culture`,painDetail:`Thresholds, buffers and holiday rules live in local spreadsheets — policy exists on paper, not in practice.`,painStat:`Multi-site = multi-truth`,fix:`One policy engine across every site and vendor`,fixDetail:`Org-level thresholds, OT caps, edit windows, holiday tables and per-vendor rules — configured once, enforced everywhere.`,fixStat:`Reliance: 3,000+ vendors, one rule engine`}],`Nucleus Research / APA time-theft studies · BetterPlace Frontline Index FY23 · client deployments`),{...re,id:`at2`,title:`Face + geo attendance`},{id:`at2c`,theme:`dark`,title:`The worker’s view`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The worker's own phone · latest product design</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Workers see their hours and their pay, and fix errors themselves.</h2>
      <div class="mediasplit" style="align-items:center;">
        <div>
          <div class="featlist" style="margin-top:10px;">
            <div class="fi rise" style="animation-delay:.24s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${w.card}</svg></span><div><h4>Attendance-to-pay transparency</h4><p>The monthly view connects working days, OT and leave to a visible earnings total — "why is my salary short?" calls stop.</p></div></div>
            <div class="fi rise" style="animation-delay:.32s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${w.clock}</svg></span><div><h4>Daily logs with IN/OUT proof</h4><p>Hours, shift, role, site and map on every day — pending approvals visible to the worker, not just HR.</p></div></div>
            <div class="fi rise" style="animation-delay:.40s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${w.check}</svg></span><div><h4>Controlled self-regularisation</h4><p>Missed punch? The worker corrects it in a guided flow — time, shift, structured reason, review, send. Every correction lands in the manager's approval queue.</p></div></div>
          </div>
        </div>
        <div class="rise" style="animation-delay:.3s">
          <div class="phones" style="min-height:clamp(280px,30vw,390px);">
            <div class="phone p1"><img src="assets/product/figma/attendance/daily-attendance-log-pending-approval.png" alt="Daily attendance log"/></div>
            <div class="phone p2"><img src="assets/product/figma/attendance/monthly-attendance-summary.png" alt="Monthly summary with earnings"/></div>
            <div class="phone p3"><img src="assets/product/figma/attendance/regularisation-final-review.png" alt="Regularisation review"/></div>
          </div>
          <div class="phonecap" style="margin-top:12px;">Daily log · monthly summary with earnings · guided regularisation — current product design</div>
        </div>
      </div>
    </div>
    ${x(`AI Zara · roster agent`,`Absence, predicted before it happens`,`Models trained on punch history, leave patterns and festive seasonality flag likely no-shows a day ahead — the replacement is confirmed before the shift opens.`,`Absence prediction cuts absenteeism 15–20% (IBM/Humana deployments)`)}
    `},{id:`at2b`,theme:`light`,title:`Capability map`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The full surface — one system, not a punch clock</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Attendance is the front door. <span style="color:var(--navy)">Behind it sits a workforce OS.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.user}</svg></span><h4>Facial + geo attendance</h4><p>Face recognition with AI spoof detection, geo-fenced marking; faces registered right inside Attend</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.clock}</svg></span><h4>Rostering &amp; shifts</h4><p>Name a shift, set start/end — present &amp; half-day values auto-calculate with a tolerance buffer; roster by grid or Excel</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.chart}</svg></span><h4>Demand planning</h4><p>Forecast and plan deployment across sites; shortfall management in minutes</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.doc}</svg></span><h4>Leave management</h4><p>Full leave workflows; workers see their quota and apply from the app, managers approve on mobile</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.users}</svg></span><h4>Vendor / CLMS control</h4><p>Per-vendor deployment rules, work-order tracking, compliance view</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.check}</svg></span><h4>Approvals queue</h4><p>Regularisation, leave, reconciliation, possible spoofs — bulk approve/reject on mobile with SLA counters</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.card}</svg></span><h4>Payslip in the worker app</h4><p>The same app that marks attendance shows each worker their payslip, holidays and salary by month</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.chart}</svg></span><h4>Reports, self-serve</h4><p>Muster Roll, Attendance Log &amp; Overtime — the OT report names who worked it, how long, who approved</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.4s;margin-top:14px;">Live dashboards: present and absent by site as punches land · exception filters: irregularity, no-show, review, weekly-off · AI agents for rostering, backfilling and shift notifications</div>
    </div>`},{id:`at-modes`,theme:`light`,title:`Ways to sign in`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Sign in and sign out · one record, five ways to capture it</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Tablet at the gate, phone in the field, device for high security. <span style="color:var(--navy)">Same record, same rules.</span></h2>
      <div class="compmap" style="grid-template-columns:repeat(5,1fr);margin-top:14px;">
        <div class="compcell" style="--cc:#1B2D93;--d:.2s"><div class="act">Tablet · face</div><h4>Face at the entrance</h4><p>One-time face registration. Workers look at a wall-mounted tablet and are in. No card, no fingerprint reader to clean.</p><span class="who ok">Shown to JLL, SILA, Sodexo</span></div>
        <div class="compcell" style="--cc:#1B2D93;--d:.28s"><div class="act">Mobile · geo</div><h4>Phone inside a fence</h4><p>The goBetter app marks attendance only inside a 50 to 75 metre geo-fence per site. Made for sites with fewer than 50 people.</p><span class="who ok">Live · Zepto 967 sites</span></div>
        <div class="compcell" style="--cc:#1B2D93;--d:.36s"><div class="act">Device · hybrid</div><h4>Fingerprint plus face</h4><p>Godrej and Mantra terminals for high-security sites. Both factors on the same punch.</p><span class="who ok">Supported hardware</span></div>
        <div class="compcell" style="--cc:#1d7a45;--d:.44s"><div class="act">Open · multi-site</div><h4>Guards who move</h4><p>Open attendance with login and logout across several sites in a day, no device anchoring. For escort and patrol roles.</p><span class="who ok">Configurable</span></div>
        <div class="compcell" style="--cc:#1d7a45;--d:.52s"><div class="act">Visitors</div><h4>Same door, same log</h4><p>Visitors and contractors sign in through the same gate flow, so security runs one system and one muster.</p><span class="who ok">Live · BPCL</span></div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.6s">
        <span class="fc">Register face once<small>inside Attend</small></span><span class="fa">→</span>
        <span class="fc">Punch<small>tablet · phone · device</small></span><span class="fa">→</span>
        <span class="fc">Rules run<small>fence · shift · threshold</small></span><span class="fa">→</span>
        <span class="fc hot">Log written<small>with location and photo proof</small></span><span class="fa">→</span>
        <span class="fc gold">Payroll reads it<small>no re-entry</small></span>
      </div>
    </div>`},{id:`at-sec`,theme:`dark`,title:`Controls and reliability`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">What security and IT ask about · controls and reliability</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Spoof attempts caught, overrides logged, <span style="color:var(--yellow)">and the punch survives a dead network.</span></h2>
      <div class="twopane">
        <div class="tp emp rise" style="animation-delay:.2s">
          <span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Security controls</span>
          <ul class="cl" style="color:rgba(255,255,255,.78);margin-top:8px;">
            <li><b style="color:#fff">Liveness detection</b> on every face punch. Suspect punches go to a Possible Spoofs queue, not to payroll</li>
            <li><b style="color:#fff">High-security single-user mode</b>: one person in frame, one punch, for sensitive sites. It adds queue time, so it needs more devices</li>
            <li><b style="color:#fff">Maker-checker</b> on manual overrides. Supervisor and manager override rights can be switched off per client</li>
            <li><b style="color:#fff">Backdating window</b> set by the admin. Nothing edited outside it</li>
          </ul>
        </div>
        <div class="tp wrk rise" style="animation-delay:.32s;background:rgba(255,196,1,.08)">
          <span class="panetag w"><i></i>Reliability in the field</span>
          <ul class="cl" style="color:rgba(255,255,255,.78);margin-top:8px;">
            <li><b style="color:#fff">Offline caching.</b> Devices store punches when the network drops and sync when it returns, within a set retention window</li>
            <li><b style="color:#fff">SIM fallback.</b> Tablets carry a Vodafone or Jio SIM where site Wi-Fi is not offered</li>
            <li><b style="color:#fff">Remote device management.</b> Tablets enrolled in MDM, updated and locked from our side</li>
            <li><b style="color:#fff">Hourly nudges</b> for roles that must confirm presence through the shift</li>
          </ul>
        </div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.55s;color:rgba(255,255,255,.55)">Plain about two things. Liveness models are tuned per deployment and we test them with your security team before go-live. Location consent for mobile marking is being formalised with a DPDP-compliant notice in the worker's language; raised by IBM and JLL, on our roadmap.</div>
    </div>`},{id:`at-dash`,theme:`light`,title:`Dashboards and payroll sync`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">What the client sees · dashboards, reports and the payroll feed</span>
        <h2 class="rise" style="animation-delay:.08s;">Your own dashboard, live. <span style="color:var(--navy)">Not a report emailed on Monday.</span></h2>
        <div class="featlist">
          ${b(w.eye,`Direct access for the client`,`Site heads and client managers log in and see present, absent and late by site and vendor as it happens. Shell and JLL asked for this over emailed reports; it is how we deploy now.`,.22)}
          ${b(w.users,`Vendor-wise attendance and utilisation`,`Deployed against the manning norm per vendor and shift, so SLA penalties and incentives rest on data both sides can see.`,.3)}
          ${b(w.chart,`Absenteeism patterns`,`Who is absent, on which days, at which sites. Fed into the roster so next week is planned on it.`,.38)}
          ${b(w.plug,`Attendance to payroll by API`,`Verified days and hours flow to your payroll or ours. Payable-day logic, including weekly offs and holidays, is configured with you in design, because that is where it goes wrong.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Client dashboard · today</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>Attend · client view · 6 sites · 14:10</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">1,240<small>present now</small></span>
              <span class="y">38<small>late today</small></span>
              <span class="r">17<small>no-show · roster gap</small></span>
            </div>
            <div class="fm-rows">
              <div class="fm-row" style="--d:.5s"><span><b>Facility A · housekeeping</b> <small>Vendor 1 · 212 of 220 rostered · 96%</small></span><span class="fm-chip g">ON NORM</span></div>
              <div class="fm-row hl" style="--d:.65s"><span><b>Facility B · technicians</b> <small>Vendor 2 · 41 of 52 rostered · 79% · 4 possible spoofs in review</small></span><span class="fm-chip r">SHORT 11</span></div>
              <div class="fm-row" style="--d:.8s"><span><b>Facility C · security</b> <small>Vendor 3 · open attendance · 88 of 90 · 2 late</small></span><span class="fm-chip y">98%</span></div>
              <div class="fm-row" style="--d:.95s"><span><b>Month to date</b> <small>utilisation 94% against norm · OT 3.1% of hours · 0 unapproved OT</small></span><span class="fm-chip g">EXPORT</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">Illustrative numbers. Present, late and no-show update as punches land; utilisation refreshes on a processing cycle</div>
      </div>
    </div>`},{id:`at3`,theme:`light`,title:`Rostering console`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">The ops console · rostering &amp; demand</span>
        <h2 class="rise" style="animation-delay:.08s;">Plan a week of shifts for a whole site — <span style="color:var(--navy)">then hit publish.</span></h2>
        <div class="featlist">
          ${b(w.clock,`Shift cards, defined once`,`Name a shift, set the timings and tolerance buffer — reuse it across sites; present and half-day values auto-calculate.`,.24)}
          ${b(w.warn,`Gaps surface before the shift does`,`The grid flags tomorrow’s unfilled slot today — watch the Thursday gap on the right resolve itself.`,.32)}
          ${b(w.zap,`Bulk tools with undo`,`Copy a week, paste a pattern, fix one associate’s day — then publish, and everyone is notified on WhatsApp.`,.4)}
          ${b(w.chart,`Demand planning built in`,`Forecast deployment across sites; shortfall management drops from hours to minutes.`,.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.3s">
        <div class="conmock rosterviz" data-cycle="2800">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">gobetter · Attend · Roster · Site BLR-04 · Week 32</span><span class="liv">Live</span></div>
          <div class="body">
            <div class="rhead"><span>Associate</span><span>Mon</span><span>Tue</span><span class="today">Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
            <div class="rrow">
              <div class="who"><b>Ravi Kumar</b><span>Security guard</span></div>
              <span class="cellc sh-m" style="--i:0">M</span><span class="cellc sh-m" style="--i:1">M</span><span class="cellc sh-m" style="--i:2">M</span><span class="cellc sh-m" style="--i:3">M</span><span class="cellc sh-e" style="--i:4">E</span><span class="cellc sh-e" style="--i:5">E</span><span class="cellc sh-o" style="--i:6">off</span>
            </div>
            <div class="rrow">
              <div class="who"><b>Sunita Devi</b><span>Housekeeping</span></div>
              <span class="cellc sh-e" style="--i:7">E</span><span class="cellc sh-e" style="--i:8">E</span><span class="cellc sh-o" style="--i:9">off</span>
              <span class="gapcell"><span class="cyc g1">GAP</span><span class="cyc g2">AI: Priya S.</span><span class="cyc g3">Priya S. ✓</span></span>
              <span class="cellc sh-e" style="--i:10">E</span><span class="cellc sh-m" style="--i:11">M</span><span class="cellc sh-m" style="--i:12">M</span>
            </div>
            <div class="rrow">
              <div class="who"><b>Mohan Lal</b><span>Loader · Bay 2</span></div>
              <span class="cellc sh-n" style="--i:13">N</span><span class="cellc sh-n" style="--i:14">N</span><span class="cellc sh-n" style="--i:15">N</span><span class="cellc sh-o" style="--i:16">off</span><span class="cellc sh-n" style="--i:17">N</span><span class="cellc sh-n" style="--i:18">N</span><span class="cellc sh-m" style="--i:19">M</span>
            </div>
            <div class="rrow">
              <div class="who"><b>Asha Kumari</b><span>Store associate</span></div>
              <span class="cellc sh-m" style="--i:20">M</span><span class="cellc sh-o" style="--i:21">off</span><span class="cellc sh-m" style="--i:22">M</span><span class="cellc sh-m" style="--i:23">M</span><span class="cellc sh-m" style="--i:24">M</span><span class="cellc sh-e" style="--i:25">E</span><span class="cellc sh-e" style="--i:26">E</span>
            </div>
            <div class="rfoot">
              <div class="cycpane"><span class="fdot2 r"></span><span><b>1 unfilled shift</b> detected for Thu — housekeeping, evening</span><span class="pubbtn">Publish week</span></div>
              <div class="cycpane"><span class="fdot2 y"></span><span><b>AI Zara suggests Priya S.</b> — 4.8 rating · 2.1 km away · inside OT cap</span><span class="pubbtn">Publish week</span></div>
              <div class="cycpane"><span class="fdot2 g"></span><span><b>Roster published</b> — 27 shifts · 4 associates notified on WhatsApp</span><span class="pubbtn">Published ✓</span></div>
            </div>
          </div>
        </div>
        <div class="bcap">The weekly grid — gaps flagged, AI-suggested, filled and published</div>
      </div>
    </div>
    ${x(`Demand forecasting`,`Rosters sized by forecast, not by habit`,`Sales, footfall and order-volume signals size tomorrow’s roster per site — overstaffed valleys and understaffed peaks both shrink.`,`AI scheduling cuts labor waste 18–22% (MIT Sloan)`)}
    `},{id:`at3b`,theme:`light`,title:`Policy engine`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">The policy engine · what happens on every punch</span>
        <h2 class="rise" style="animation-delay:.08s;">Your attendance policy, <span style="color:var(--navy)">enforced by software — not circulars.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">Watch one punch run the gauntlet: every rule you configure — thresholds, buffers, caps, edit windows — fires on every check-in, on every site, identically.</p>
        <div class="tags rise" style="animation-delay:.3s;margin-top:16px;">
          <span class="tag">Full/half-day thresholds</span><span class="tag">Forced logout &amp; elapsed-hour rules</span><span class="tag">OT pre-approval &amp; state caps</span><span class="tag">Self-regularisation limits</span><span class="tag">Holiday tables by region</span><span class="tag">Verify-status checks at marking</span><span class="tag">Per-vendor rules</span>
        </div>
        <p class="lede rise" style="animation-delay:.42s;margin-top:16px;">Configured once at org level, inherited by every site and vendor — <b>Reliance runs 3,000+ vendors on one rule engine.</b></p>
      </div>
      <div class="rise" style="animation-delay:.3s">
        <div class="conmock ruleflow">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">gobetter · Attend · Policy engine</span><span class="liv">Every punch</span></div>
          <div class="body">
            <div class="punch">
              <span class="pav"><svg viewBox="0 0 24 24">${w.user}</svg></span>
              <div><b>IN punch · Ravi Kumar</b><span>09:04 · BLR-04 main gate</span></div>
              <span class="face">Face match ✓ 99.1%</span>
            </div>
            <div class="rules">
              <div class="rule" style="--i:0"><span class="ri"><svg viewBox="0 0 24 24">${w.map}</svg></span><b>Geo-fence</b><span class="cfg">150 m radius</span><span class="st ok">✓ Inside fence</span></div>
              <div class="rule" style="--i:1"><span class="ri"><svg viewBox="0 0 24 24">${w.clock}</svg></span><b>Shift match</b><span class="cfg">Morning 09:00–18:00</span><span class="st ok">✓ In 20-min buffer</span></div>
              <div class="rule" style="--i:2"><span class="ri"><svg viewBox="0 0 24 24">${w.check}</svg></span><b>Day threshold</b><span class="cfg">Full 9h · half 5h</span><span class="st ok">✓ Full-day eligible</span></div>
              <div class="rule flag" style="--i:3"><span class="ri"><svg viewBox="0 0 24 24">${w.warn}</svg></span><b>OT cap watch</b><span class="cfg">State quarterly cap</span><span class="st warn">⚠ 38 of 40h this month</span></div>
              <div class="rule" style="--i:4"><span class="ri"><svg viewBox="0 0 24 24">${w.lock}</svg></span><b>Edit window</b><span class="cfg">48h regularisation</span><span class="st ok">✓ Locked after approval</span></div>
            </div>
            <div class="verdict"><b>Present · Full day</b> — flows to payroll untouched<span class="arr">Every check logged</span></div>
          </div>
        </div>
        <div class="bcap">One punch, five rules, one auditable verdict — identically on every site</div>
      </div>
    </div>`},{id:`at-ot`,theme:`light`,title:`Overtime management`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Blue-collar overtime · cost meets compliance</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:34ch;">Overtime approved <span style="color:var(--navy)">before it’s worked</span> — and paid as the law requires.</h2>
      <div class="capgrid rise" style="animation-delay:.2s;margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.clock}</svg></span><h4>Pre-approved, not post-argued</h4><p>Sanctioned by the plant’s approval chain before the hours are worked — raised by supervisors, approved on mobile</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.shield}</svg></span><h4>Paid at the statutory 2×</h4><p>Twice the ordinary wage — Factories Act §59, carried into the new Labour Codes — computed straight into payroll</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.warn}</svg></span><h4>Held inside statutory caps</h4><p>Daily, weekly and quarterly OT limits per state; a worker nearing the cap is flagged before it’s breached</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.chart}</svg></span><h4>A self-serve OT register</h4><p>The Overtime report names who worked it, how long, which shift and who approved — the audit answer, generated</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.42s;margin-top:14px;"><b style="color:var(--navy)">2× ordinary wage</b> beyond 9 hrs/day or 48 hrs/week · sanctioned before it’s worked · held inside the state quarter cap · hourly plants: OT normalised to days</div>
    </div>
    ${x(`Policy engine`,`The cap that enforces itself`,`OT limits, spread-over and rest rules are wired into marking and approval per state — a breach is blocked or escalated at source, not found in a labour-department notice.`,`Factories Act §51 / §59 / §64–65 · state-configurable`)}
    `},{id:`at4`,theme:`light`,title:`Approvals & exceptions`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Exceptions &amp; governance · real product</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Every exception lands in one queue — <span style="color:var(--navy)">including possible spoofs.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${y(`assets/product/gobetter/attendance/approvals-regularisation-queue.jpg`,`gobetter · Attend · Approvals`,`One approvals queue: regularisation, leave, reconciliation and the <b>AI possible-spoofs</b> tab`)}
        ${y(`assets/product/gobetter/attendance/associate-filters-regularization.jpg`,`gobetter · Attend · Exception console`,`Exception filter pills — irregularity, no-show, review — with <b>bulk log edit</b>`)}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:16px;max-width:92ch;">Approve All / Reject All with expiring-SLA counters: managers clear a day's exceptions in one sitting, and every correction stays on the log.</p>
    </div>
    ${x(`Spoof detection`,`Computer vision on every punch`,`Liveness and face-match models score each check-in; suspect punches route to the Possible Spoofs queue instead of payroll.`,`Zepto: spoof review live across 967 sites`)}
    `},{id:`at5`,theme:`dark`,title:`Proof`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Proof at scale</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">15,000 workers. 967 sites. <span style="color:var(--yellow)">40% cheaper to run.</span></h2>
      <div class="cases" style="margin-top:18px;">
        <div class="case rise" style="--pc:#D0271D;animation-delay:.22s"><div class="ch"><span class="cn">Zepto</span><span class="ct">Quick-commerce · 22 cities</span></div><p>Geo-based attendance with AI spoof detection and a real-time custom dashboard across dark stores.</p><div class="cm"><div class="m"><div class="mn">40%</div><div class="ml">cost savings</div></div><div class="m"><div class="mn">15k</div><div class="ml">workers</div></div><div class="m"><div class="mn">967</div><div class="ml">sites</div></div></div></div>
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.3s"><div class="ch"><span class="cn">Reliance Retail</span><span class="ct">Retail · 18,918 stores</span></div><p>One integrated system for 300K+ workers across 3,000+ vendors on the goBetter rule engine.</p><div class="cm"><div class="m"><div class="mn">90%</div><div class="ml">↓ payroll leakage</div></div><div class="m"><div class="mn">7×</div><div class="ml">faster customisation</div></div></div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Spoof-proof attendance is the foundation of leakage-free payroll — <b>the two ship as one system.</b></div>
    </div>`},C(`at5b`,`What spoof-proof attendance changes downstream.`,[{n:`−90%`,what:`Payroll leakage, gone`,how:`Ghost workers and buddy punching stop paying out once attendance is face-verified — on a 10,000-strong contract workforce, that’s crores a year back in your budget.`,proof:`Reliance: 90% ↓ leakage · 300K workers`},{n:`−40%`,what:`Cost to run attendance ops`,how:`Rostering grids, bulk approvals and self-regularisation replace supervisors doing attendance arithmetic all morning.`,proof:`Zepto: 40% cost saving · 967 sites`},{n:`Minutes`,what:`Shortfall response time`,how:`Live present/absent by site means today’s gap is filled today — not discovered in next week’s report.`,proof:`Real-time dashboards, every site`},{n:`+15%`,what:`HR team capacity back`,how:`Exception queues with Approve All and SLA counters turn a day of chasing into a sitting — HR works on people, not punches.`,proof:`One approvals queue, incl. spoof review`}],`One month, one site, side-by-side with your current attendance source — then count the difference yourself.`),{id:`at6`,theme:`darker`,title:`Next steps`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Pilot one site. Watch the leakage stop.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>One-site pilot, your rules</h4><p>We configure your thresholds, shifts and geo-fences on one site — live in days, not quarters.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>Side-by-side month</h4><p>Run one payroll cycle on our attendance data next to your current source and count the difference.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Scale by site, not by contract</h4><p>Add sites, cities and vendors on the same policy engine — one dashboard for all of it.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`}],ae=T.find(e=>e.id===`s8b`),oe=[{id:`py1`,theme:`dark`,title:`Payroll cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">manageBetter · payroll &amp; vendor statutory compliance</span>
      <h1 class="rise" style="animation-delay:.15s">Never inherit a vendor's <span style="color:var(--yellow)">PF/ESI liability</span> again.</h1>
      <p class="sub rise" style="animation-delay:.3s">As principal employer, you are jointly liable when a contractor underpays statutory dues. We check every vendor challan, every month — worker by worker.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">−90%</div><div class="l">Payroll leakage</div></div>
        <div class="stat"><div class="n">−80%</div><div class="l">Vendor non-compliance risk</div></div>
        <div class="stat"><div class="n">100%</div><div class="l">Rupees traceable — audit-ready</div></div>
      </div>
      <div class="mdcover ghost">PF</div>
    </div>`},...ee(`py1b`,`For compliance & finance`,`The penalty clock is already running on someone’s delay.`,`And the leakage hides where nobody reconciles.`,[{pain:`A vendor’s PF default becomes your bill`,painDetail:`As principal employer you are jointly liable under contract-labour law when a contractor underpays — and you find out at the audit, years of interest later.`,painStat:`7Q interest: 12% p.a. + 14B damages up to 100% of arrears`,fix:`Challan OCR reconciles every vendor, monthly`,fixDetail:`PF/ESI challans read automatically and matched worker-by-worker against computed dues; gaps flagged the month they happen, with documented due diligence.`,fixStat:`Reliance: −80% vendor non-compliance`},{pain:`Minimum-wage misses hide in salary structures`,painDetail:`State- and skill-level wage floors change; one wrong Basic in a template quietly violates on thousands of workers.`,painStat:`Per-state floors · revised twice yearly`,fix:`Validation blocks bad structures before payroll`,fixDetail:`Inline minimum-wage guardrails stop a non-compliant Basic at data entry — not in a labour-department notice.`,fixStat:`Blocking error, screenshot on the next slide`},{pain:`Payroll leakage no one can locate`,painDetail:`Ghost workers, unverified overtime and manual consolidation mean you pay a workforce that partially isn’t there.`,painStat:`Time theft ≈ 1.5–5% of gross payroll · APA`,fix:`Pay computes from face-verified attendance only`,fixDetail:`The attendance→payroll pipe is one system: no punch, no pay — and every rupee traces back to a verified log.`,fixStat:`Reliance: −90% payroll leakage`},{pain:`Audit prep is a quarterly fire drill`,painDetail:`Challans in email, registers in Excel, proofs with vendors — assembling one audit response takes weeks.`,painStat:`Evidence scattered across 5+ places`,fix:`The audit file writes itself all year`,fixDetail:`Challan history, reconciliation status and batch trails live on the platform — PF · ESI · PT · LWF, one workspace each.`,fixStat:`Same-day audit answers`}],`EPFO Sections 7Q & 14B (post-Jun 2024 rates) · American Payroll Association · Reliance Retail deployment`),{...ae,id:`py2`,title:`Challan OCR & reconciliation`},{id:`py2b`,theme:`light`,title:`Capability map`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The full surface — payroll plus the compliance shield</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">From attendance to statutory filing, <span style="color:var(--navy)">every step on one platform.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.zap}</svg></span><h4>Automated computation</h4><p>Payroll computed straight from attendance — zero manual entry</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.doc}</svg></span><h4>Variable inputs by Excel</h4><p>Incentives and one-offs uploaded before the run flow straight into the computation</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.shield}</svg></span><h4>Minimum-wage validation</h4><p>Per state and skill category, checked on every run</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.card}</svg></span><h4>Wage-register &amp; invoice recon</h4><p>Vendor invoices reconciled against actual attendance</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.check}</svg></span><h4>Auto compliance payments</h4><p>PF, ESI, Professional Tax, LWF — separate workspaces, on schedule</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.search}</svg></span><h4>Challan OCR + recon</h4><p>Vendor PF/ESI challans read and matched worker-by-worker</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.doc}</svg></span><h4>Final settlement &amp; reimbursements</h4><p>F&amp;F and claims inside the same operating surface</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.chart}</svg></span><h4>Audit trail</h4><p>Every rupee traceable — batch stages, statuses, history</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.4s;margin-top:14px;">Payroll Inputs · Run Payroll · Final Settlement · Invoice · Reports · Compliances · Reimbursements — the actual module map</div>
    </div>`},{id:`py3`,theme:`light`,title:`Reconciliation console`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The compliance control room · real product</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Every vendor's status on one screen — <span style="color:var(--navy)">before the auditor asks.</span></h2>
      <div class="rise" style="animation-delay:.22s;margin-top:16px;max-width:980px;">
        <div class="conmock reconboard">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">gobetter · Payroll · Vendor reconciliation · Jul 2026</span><span class="liv">Challan OCR live</span></div>
          <div class="body">
            <div class="sumrow">
              <div class="sum"><b data-t="23">23</b><span>Vendors this period</span></div>
              <div class="sum ok"><b data-t="19">19</b><span>Reconciled ✓</span></div>
              <div class="sum wt"><b>3</b><span>Awaiting challan</span></div>
              <div class="sum bad"><b>1</b><span>PF shortfall found</span></div>
            </div>
            <div class="vrow hd"><span>Vendor</span><span>Workers</span><span>Computed dues</span><span>Challan paid</span><span>Status</span></div>
            <div class="vrow" style="--i:0"><b>Apex Manpower Pvt Ltd</b><span class="num">1,240</span><span class="num">₹18.42L</span><span class="num">₹18.42L</span><span class="pill ok">Reconciled ✓</span></div>
            <div class="vrow" style="--i:1"><b>Sunrise Facility Services</b><span class="num">862</span><span class="num">₹12.10L</span><span class="num">₹12.10L</span><span class="pill ok">Reconciled ✓</span></div>
            <div class="vrow" style="--i:2"><b>Metro Staffing Co.</b><span class="num">410</span><span class="num">₹6.21L</span><span class="num">—</span><span class="pill wt">Awaiting challan · day 4</span></div>
            <div class="vrow flag" style="--i:3"><b>Delta Contractors</b><span class="num">296</span><span class="num">₹4.61L</span><span class="num">₹3.19L</span><span class="pill bad">₹1.42L short</span></div>
            <div class="gapline"><svg viewBox="0 0 24 24">${w.warn}</svg><span><b>Delta Contractors: 61 UANs unmatched, ₹1.42L PF short for Jul</b> — flagged the month it happened, worker-by-worker, with your due diligence on the record.</span></div>
          </div>
        </div>
        <div class="bcap">Every vendor challan read by OCR and matched against computed dues — the principal employer's exposure, one screen</div>
      </div>
    </div>
    ${x(`AI Dev · statutory watchdog`,`OCR + reconciliation that never sleeps`,`Document AI reads every vendor challan — UANs, amounts, periods — and matches them worker-by-worker against computed dues, flagging shortfalls the same day.`,`Reliance: −80% vendor non-compliance`)}
    `},{id:`py4`,theme:`light`,title:`Payroll operations`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Payroll operations · one pay run, start to finish</span>
        <h2 class="rise" style="animation-delay:.08s;">From attendance to bank file — <span style="color:var(--navy)">zero manual entry.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">A pay run is a controlled workflow with visible stages — not a spreadsheet ritual. Watch July close on the right: every guardrail fires before a rupee moves.</p>
        <div class="tags rise" style="animation-delay:.3s;margin-top:16px;">
          <span class="tag">Computation from face-verified attendance</span><span class="tag">Variable inputs by Excel</span><span class="tag">Minimum-wage validation by state</span><span class="tag">Salary structure templates</span><span class="tag">PF · ESI · PT · LWF workspaces</span><span class="tag">Vendor invoicing in-platform</span>
        </div>
        <p class="lede rise" style="animation-delay:.42s;margin-top:16px;">Reruns target the failed slice, not the whole month — <b>pay-cycle close drops from days to hours.</b></p>
      </div>
      <div class="rise" style="animation-delay:.3s">
        <div class="conmock ruleflow">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">gobetter · Payroll · Run Payroll · Jul 2026</span><span class="liv">Batch live</span></div>
          <div class="body">
            <div class="punch">
              <span class="pav"><svg viewBox="0 0 24 24">${w.card}</svg></span>
              <div><b>Pay run · 736 workers</b><span>Site BLR-04 · month locked · Jul 2026</span></div>
              <span class="face">Attendance source ✓</span>
            </div>
            <div class="rules">
              <div class="rule" style="--i:0"><span class="ri"><svg viewBox="0 0 24 24">${w.user}</svg></span><b>Attendance locked</b><span class="cfg">face-verified only</span><span class="st ok">✓ 736 of 736 days in</span></div>
              <div class="rule" style="--i:1"><span class="ri"><svg viewBox="0 0 24 24">${w.doc}</svg></span><b>Variables loaded</b><span class="cfg">Excel · one-time</span><span class="st ok">✓ Diwali bonus applied</span></div>
              <div class="rule flag" style="--i:2"><span class="ri"><svg viewBox="0 0 24 24">${w.shield}</svg></span><b>Wage-floor check</b><span class="cfg">state × skill grid</span><span class="st warn">⚠ 2 structures blocked</span></div>
              <div class="rule" style="--i:3"><span class="ri"><svg viewBox="0 0 24 24">${w.chart}</svg></span><b>Anomaly screen</b><span class="cfg">vs history &amp; cohort</span><span class="st warn">⚠ 3 outliers held</span></div>
              <div class="rule" style="--i:4"><span class="ri"><svg viewBox="0 0 24 24">${w.check}</svg></span><b>Bank file + payslips</b><span class="cfg">to worker app</span><span class="st ok">✓ Generated</span></div>
            </div>
            <div class="verdict"><b>731 paid on the 1st</b> — 5 held for human review<span class="arr">Every rupee traceable</span></div>
          </div>
        </div>
        <div class="bcap">The batch pipeline — guardrails fire in-flow, failures rerun as a slice</div>
      </div>
    </div>
    ${x(`AI Dev · payroll copilot`,`The outliers are found before the payout`,`Anomaly models screen every computed pay against history and cohort; the flagged few wait for a human — the other 731 go out on time.`,`Days → hours pay-cycle close`)}
    `},{id:`py4c`,theme:`light`,title:`The payroll workspace`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The payroll workspace · latest product design</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Attendance → variables → eligibility → run. <span style="color:var(--navy)">Never one opaque button.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${y(`assets/product/figma/payroll/run-payroll-batch-overview.jpg`,`gobetter · Payroll · Run Payroll`,`The batch workspace — month lock, attendance input, workflow progress, <b>employee states</b>`,!0)}
        ${y(`assets/product/figma/payroll/salary-structure-validation-error.jpg`,`gobetter · Payroll · Salary Structure`,`A compliance guardrail firing — <b>Basic pay below the ₹6,000 configured minimum is blocked inline</b>`,`mid`)}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:14px;max-width:94ch;">One-time components (a Diwali bonus, a Pongal incentive) apply to one month without touching the salary template — and minimum-wage validation blocks a bad structure before it ever reaches a pay run.</p>
    </div>
    ${x(`Anomaly detection`,`Every pay run pre-screened`,`Models compare each worker’s computed pay against history and cohort — outliers surface for review before disbursement, not in a grievance.`,`−90% payroll leakage at Reliance`)}
    `},{id:`py-vendor`,theme:`light`,title:`Vendor management & CLRA`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Vendor management &amp; compliance</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Every contractor, every document — <span style="color:var(--navy)">a governed record, not a filing cabinet.</span></h2>
      <div class="mediasplit" style="align-items:start;">
        <div class="featlist">
          ${b(w.building,`The contractor record`,`KYC, GST, PAN, bank and agreement captured once; sub-vendors and SPOCs mapped under each contractor.`,.24)}
          ${b(w.shield,`Compliance document vault`,`CLRA licence, WC/EC policy, PF/ESI codes — stored with validity dates and expiry alerts, before anyone works uninsured.`,.32)}
          ${b(w.repeat,`Work order / PO deployment`,`Each worker mapped to a work order; headcount, wage rate and billing tracked against it, per contractor.`,.4)}
          ${b(w.bot,`Licence-strength control`,`Deployment held inside each contractor’s licensed worker count — the system won’t let you over-deploy.`,.48)}
        </div>
        <div class="rise" style="animation-delay:.35s;background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:22px 22px 20px;">
          <h4 style="font-size:clamp(15px,1.5cqw,18px);color:var(--navy);margin-bottom:6px;">The CLRA paper trail, generated</h4>
          <p style="font-size:clamp(12px,1.15cqw,13.5px);color:var(--muted);margin-bottom:14px;">The registers a labour inspector asks for — produced from live data, not assembled by hand.</p>
          <div class="tags">
            <span class="tag">Register of Contractors (Form XII)</span>
            <span class="tag">Register of Workmen (Form XIII)</span>
            <span class="tag">Muster Roll (Form XVI)</span>
            <span class="tag">Register of Wages (Form XVII)</span>
            <span class="tag">Wage Slips (Form XIX)</span>
            <span class="tag">Form V certificate for the licence</span>
            <span class="tag">Overtime register (Form XXIII)</span>
            <span class="tag">Annual returns (Form XXIV/XXV)</span>
          </div>
          <p style="font-size:clamp(11px,1.05cqw,12.5px);color:var(--text);margin-top:14px;border-left:3px solid var(--yellow);padding-left:12px;">CLRA bites once a contractor deploys <b>20+ workers</b>. Above that line, stale registers are the audit finding — here they’re a live view on the same data that runs attendance and payroll.</p>
        </div>
      </div>
    </div>
    ${x(`AI Dev · statutory watchdog`,`The compliance officer that never sleeps`,`An agent chases each contractor’s documents, reads uploaded challans and policies by OCR, and flags a licence-strength breach or a WC-policy expiry before it becomes a notice.`,`Live pattern in BPCL’s IOWMS vendor platform`)}
    `},{id:`py-invoice`,theme:`light`,title:`Invoice & billing reconciliation`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Invoice &amp; billing · the leakage nobody sees</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Pay the contractor for the work that <span style="color:var(--navy)">actually happened.</span></h2>
      <div class="mediasplit" style="align-items:start;">
        <div class="featlist">
          ${b(w.card,`Invoice against verified attendance`,`The contractor’s bill matches line-by-line to face-verified, geo-fenced attendance on the same work order — not to a claimed headcount.`,.24)}
          ${b(w.search,`Wage-register reconciliation`,`Rates checked against the agreed work-order rate and the state minimum wage for that skill category, before approval.`,.32)}
          ${b(w.check,`Statutory hold on payment`,`Following EPFO’s own guidance, an invoice can be gated until PF/ESI for the period is evidenced — so you never fund a default.`,.4)}
          ${b(w.doc,`Raise invoice in-platform`,`Vendor invoicing, approvals and credit notes sit in the same surface as the attendance and payroll they draw on.`,.48)}
        </div>
        <div class="rise" style="animation-delay:.35s;background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:22px;">
          <h4 style="font-size:clamp(15px,1.5cqw,18px);color:var(--navy);margin-bottom:14px;">A worked example</h4>
          <div style="display:flex;flex-direction:column;gap:11px;font-size:clamp(12px,1.2cqw,14px);">
            <div style="display:flex;justify-content:space-between;"><span style="color:var(--muted)">Invoiced headcount</span><b style="color:var(--text)">212 workers</b></div>
            <div style="display:flex;justify-content:space-between;border-top:1px solid var(--border);padding-top:11px;"><span style="color:var(--muted)">Gate-verified attendance</span><b style="color:var(--text)">196 workers</b></div>
            <div style="display:flex;justify-content:space-between;border-top:1px solid var(--border);padding-top:11px;"><span style="color:var(--muted)">Below-minimum-wage lines</span><b style="color:#D0271D">3 flagged</b></div>
            <div style="display:flex;justify-content:space-between;border-top:1px solid var(--border);padding-top:11px;"><span style="color:var(--muted)">Period PF/ESI evidenced</span><b style="color:#D36703">Pending</b></div>
          </div>
          <p style="font-size:clamp(11px,1.05cqw,12.5px);color:var(--text);margin-top:16px;border-left:3px solid var(--yellow);padding-left:12px;">The invoice is held: <b>16 phantom line-items</b> and 3 wage-floor breaches itemised, challans required before release.</p>
        </div>
      </div>
    </div>
    ${x(`AI Dev · invoice reconciliation`,`Every rupee traces back to a face at your gate`,`The invoice-to-attendance-to-statutory link is checked automatically before payment — the same link the −90% payroll-leakage number at Reliance comes from.`,`Reliance: −90% payroll leakage`)}
    `},{id:`py-scorecard`,theme:`light`,title:`AI Vendor Scorecard`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">AI Vendor Scorecard · vendor performance</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Stop renewing contractors on gut feel. <span style="color:var(--navy)">Rank them on the numbers.</span></h2>
      <div class="rise" style="animation-delay:.2s;margin-top:12px;background:var(--surface);border:1px solid var(--border);border-radius:16px;overflow:hidden;">
        <div style="display:grid;grid-template-columns:1.6fr 1fr .9fr .9fr 1fr .7fr;gap:8px;padding:9px 18px;font-size:clamp(10px,1cqw,12px);font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--muted);border-bottom:2px solid var(--border);">
          <span>Contractor</span><span>Fill rate</span><span>Attend</span><span>Attrition</span><span>Compliance</span><span style="text-align:right">Grade</span>
        </div>
        ${[{n:`Apex Manpower`,fill:96,att:`94%`,attr:`11%`,comp:`100%`,g:`A`,c:`#3DBE7B`},{n:`Sunrise Labour`,fill:88,att:`90%`,attr:`19%`,comp:`96%`,g:`B`,c:`#2142B9`},{n:`Metro Staffing`,fill:74,att:`82%`,attr:`31%`,comp:`81%`,g:`C`,c:`#FF9518`},{n:`Delta Contractors`,fill:61,att:`76%`,attr:`44%`,comp:`68%`,g:`D`,c:`#D0271D`}].map((e,t)=>`
        <div class="rise" style="animation-delay:${.3+t*.08}s;display:grid;grid-template-columns:1.6fr 1fr .9fr .9fr 1fr .7fr;gap:8px;align-items:center;padding:10px 18px;font-size:clamp(12px,1.2cqw,14px);${t<3?`border-bottom:1px solid var(--border);`:``}">
          <span style="font-weight:700;color:var(--text)">${e.n}</span>
          <span style="display:flex;align-items:center;gap:8px;"><span style="flex:1;height:6px;border-radius:4px;background:var(--surface-2);overflow:hidden;"><span style="display:block;height:100%;width:${e.fill}%;background:${e.c};"></span></span><b style="color:var(--text)">${e.fill}%</b></span>
          <span style="color:var(--muted)">${e.att}</span>
          <span style="color:var(--muted)">${e.attr}</span>
          <span style="color:var(--muted)">${e.comp}</span>
          <span style="text-align:right"><span style="display:inline-block;width:26px;height:26px;line-height:26px;text-align:center;border-radius:7px;font-weight:800;color:#fff;background:${e.c};">${e.g}</span></span>
        </div>`).join(``)}
      </div>
      <p class="lede rise" style="animation-delay:.6s;margin-top:12px;max-width:100ch;font-size:clamp(13px,1.35cqw,16px);">Each metric pulled from live operating data and weighted to what your plant values — the D-grade vendor surfaces before the next work order goes to them. <span style="color:var(--muted);">Illustrative; weightings configurable, KPIs are staffing best practice, not a statutory list.</span></p>
    </div>
    ${x(`AI Dev · vendor performance agent`,`A ranked answer, every month`,`The same closed loop that runs attendance, payroll and compliance feeds the score — so the grade reflects what actually happened on your floor, not what a contractor claims in a review meeting.`,`Renewal, rate and volume decisions on numbers both sides can see`)}
    `},{id:`py5`,theme:`dark`,title:`Proof`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Proof at scale</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">3,000+ vendors. 300K workers. <span style="color:var(--yellow)">One compliance shield.</span></h2>
      <div class="cases" style="grid-template-columns:1fr;max-width:820px;margin-top:18px;">
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.22s"><div class="ch"><span class="cn">Reliance Retail</span><span class="ct">Retail · 18,918 stores</span></div><p>Replaced disintegrated systems and manual compliance with the goBetter rule engine — one integrated system across every vendor and store.</p><div class="cm"><div class="m"><div class="mn">90%</div><div class="ml">↓ payroll leakage</div></div><div class="m"><div class="mn">80%</div><div class="ml">↓ vendor non-compliance</div></div><div class="m"><div class="mn">7×</div><div class="ml">faster customisation</div></div></div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.4s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Every challan checked, every month. <b>You see gaps before the auditor does — with documented proof of due diligence.</b></div>
    </div>`},C(`py5b`,`What this saves you — beyond the payroll team’s weekends.`,[{n:`−90%`,what:`Payroll leakage recovered`,how:`Pay computes from face-verified attendance with minimum-wage guardrails — over- and under-payment both stop.`,proof:`Reliance: 90% ↓ leakage`},{n:`−80%`,what:`Principal-employer exposure`,how:`Every vendor challan OCR-checked monthly, worker-by-worker — documented due diligence under contract-labour law instead of discovered liability at audit.`,proof:`3,000+ vendors reconciled at Reliance`},{n:`Days → hours`,what:`Pay-cycle close time`,how:`Controlled batches with visible failure states replace spreadsheet consolidation — reruns target the failed slice, not the whole month.`,proof:`Batch pipeline with per-stage status`},{n:`0`,what:`Audit-day surprises`,how:`Challan history, reconciliation records and an immutable trail live on the platform — when the notice arrives, the evidence is already filed.`,proof:`PF · ESI · PT · LWF workspaces`}],`Send one month of vendor challans through our OCR health check — the gap report usually pays for the pilot.`),{id:`py6`,theme:`darker`,title:`Next steps`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Bring last month's challans. We'll show you the gaps.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>A compliance health check</h4><p>Run one month of real vendor challans through the OCR reconciliation — see every short-payment and wrong UAN.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>One-vendor pilot</h4><p>Your highest-headcount contractor, one payroll period, reconciled worker-by-worker.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Roll out the shield</h4><p>Every vendor uploads into the platform; you monitor exposure from one dashboard.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`}],se=T.find(e=>e.id===`sv`),ce=[{id:`vf1`,theme:`dark`,title:`verifyBetter cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">verifyBetter · background verification</span>
      <h1 class="rise" style="animation-delay:.15s">Verified in hours, <span style="color:var(--yellow)">not weeks.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">India's first digital frontline BGV — AI reads the records, live APIs check the source, and your team reviews only the exceptions. Six checks, at the speed high-churn hiring actually needs.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n"><em>50</em>K+</div><div class="l">Cases processed daily</div></div>
        <div class="stat"><div class="n">&lt;24 hr</div><div class="l">Average TAT · minutes for identity</div></div>
        <div class="stat"><div class="n">25M+</div><div class="l">Verified profiles on platform</div></div>
      </div>
      <div class="mdcover ghost">✓</div>
    </div>`},...ee(`vf1b`,`For HR & trust-and-safety`,`One in ten frontline applications isn’t what it claims.`,`And slow checks cost you the honest nine.`,[{pain:`Discrepancies are the norm, not the edge case`,painDetail:`Inflated experience, unverifiable addresses, false credentials — retail hiring runs a double-digit discrepancy rate.`,painStat:`10.3% discrepancy in retail hiring · AuthBridge FY26`,fix:`Six checks on every worker, digitally`,fixDetail:`Identity, address, career, financial, health, legal — run in parallel from one click, at 50K+ cases a day.`,fixStat:`Red/yellow/green triage per case`},{pain:`BGV speed decides whether the hire happens`,painDetail:`Frontline candidates take the job that starts first — a two-week verification is an offer you made to a competitor’s employee.`,painStat:`Traditional BGV: 1–3 weeks`,fix:`Reports inside 24 hours, identity in minutes`,fixDetail:`Digital-first checks with EPFO integration and AI court-record scans — candidates verify themselves on their own phones.`,fixStat:`<24 hr TAT · 50K+ cases/day`},{pain:`The worker in a customer’s home is your brand`,painDetail:`One fraudulent identity behind a uniform — a theft, an assault — costs more than every check you’ll ever run.`,painStat:`One incident > years of BGV budget`,fix:`Liveness-checked identity, tamper-proof records`,fixDetail:`Face-match liveness stops photo-of-a-photo fraud; court and police checks come back dated and audit-ready.`,fixStat:`Swiggy · Licious · Royal Orchid live`},{pain:`Churn makes you pay to verify the same people twice`,painDetail:`High-churn sectors rehire the workers they lost — and run full-price BGV on someone verified eight months ago.`,painStat:`Frontline attrition: 15%/month avg · Frontline Index`,fix:`Rehires re-clear from the 25M-profile layer`,fixDetail:`Verified history lives on the shared worker record — returning workers clear in minutes at a fraction of the cost.`,fixStat:`Instant re-verification on rehire`}],`AuthBridge Workforce Fraud Files H1 FY26 · BetterPlace Frontline Index FY23`),{...se,id:`vf2`,title:`Six checks, one report`},{id:`vf2c`,theme:`light`,title:`The full check catalogue`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Our offerings · the checks we run today</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">A wide range of verification checks — <span style="color:var(--navy)">pick exactly what each role needs.</span></h2>
      <div class="checkcat rise" style="animation-delay:.2s">
        <div class="checkcol">
          <div class="cc-h"><span class="cc-ic"><svg viewBox="0 0 24 24">${w.user}</svg></span><span class="cc-t">Identity</span></div>
          <ul><li>Aadhaar</li><li>PAN</li><li>Driving Licence</li><li>Voter ID</li><li>Passport</li></ul>
        </div>
        <div class="checkcol">
          <div class="cc-h"><span class="cc-ic"><svg viewBox="0 0 24 24">${w.building}</svg></span><span class="cc-t">Address</span></div>
          <ul><li>Physical</li><li>Postal</li><li>Digital</li></ul>
        </div>
        <div class="checkcol">
          <div class="cc-h"><span class="cc-ic"><svg viewBox="0 0 24 24">${w.users}</svg></span><span class="cc-t">Career</span></div>
          <ul><li>Education</li><li>Employment</li><li>UAN</li><li>Doctor's Licence</li><li>Reference check</li><li>CV check</li></ul>
        </div>
        <div class="checkcol">
          <div class="cc-h"><span class="cc-ic"><svg viewBox="0 0 24 24">${w.card}</svg></span><span class="cc-t">Financial</span></div>
          <ul><li>Bank account</li><li>Credit check</li></ul>
        </div>
        <div class="checkcol">
          <div class="cc-h"><span class="cc-ic"><svg viewBox="0 0 24 24">${w.zap}</svg></span><span class="cc-t">Health</span></div>
          <ul><li>Drug tests</li><li>Medical certificates</li><li>Fitness certificates</li><li>Physical examination</li></ul>
        </div>
        <div class="checkcol">
          <div class="cc-h"><span class="cc-ic"><svg viewBox="0 0 24 24">${w.shield}</svg></span><span class="cc-t">Legal</span></div>
          <ul><li>Criminal, narcotics &amp; psychotropic cases</li><li>Organised Crime / Police Acts</li><li>Civil litigation &amp; Motor Vehicles Act</li><li>Supreme &amp; High Court records</li><li>Law-firm reports</li><li>Police verification certificates</li><li>Global database check</li></ul>
        </div>
      </div>
      <div class="clientline rise" style="animation-delay:.5s;margin-top:14px;">Configure the check pack per role — a delivery rider, a store cashier and a field-sales manager each get the right depth.</div>
    </div>`},{id:`vf3`,theme:`light`,title:`Portfolio & case view`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The live product · red / yellow / green</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Your whole BGV book at a glance — <span style="color:var(--navy)">and every case behind it.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${y(`assets/product/gobetter/verify/bgv-insights-red-yellow-green.jpg`,`gobetter · Verify · Insights`,`Portfolio health — red/yellow/green progress plus checks-level trend, filterable by site`)}
        ${y(`assets/product/gobetter/verify/bgv-individual-report-red-case.jpg`,`gobetter · Verify · Individual report`,`A red case in full: Aadhaar flag, tenure timeline, <b>downloadable PDF report</b>`)}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:16px;max-width:92ch;">Red, yellow and green tabs work as a triage queue. Click any associate and the full case opens — who employed them, when, and exactly which check flagged.</p>
    </div>`},{id:`vf4`,theme:`light`,title:`AI-led & API-connected`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Why it's instant — and hard to fool</span>
        <h2 class="rise" style="animation-delay:.08s;">AI reads the records. APIs check the source. <span style="color:var(--navy)">You review the exceptions.</span></h2>
        <div class="featlist">
          <div class="fi rise" style="animation-delay:.24s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3"/></svg></span><div><h4>Instant AI criminal-record review</h4><p>NLP scans pan-India court &amp; police records in seconds, matches identity variants, and surfaces only the relevant hits — no manual reading backlog, far fewer false positives.</p></div></div>
          <div class="fi rise" style="animation-delay:.32s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h4"/></svg></span><div><h4>Document AI — read &amp; validated</h4><p>OCR lifts IDs, certificates and letters straight into the record; face-match liveness at capture means a photo of a photo doesn't pass.</p></div></div>
          <div class="fi rise" style="animation-delay:.40s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3v6M15 3v6M7 9h10v3a5 5 0 0 1-10 0zM12 17v4"/></svg></span><div><h4>Checked against the source, not paper</h4><p>Live API integrations to Aadhaar, PAN, DigiLocker, EPFO/UAN, bank penny-drop and court databases — verified at origin, and one-click into your ATS.</p></div></div>
          <div class="fi rise" style="animation-delay:.48s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 2.1l4 4-4 4M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4M21 11.8v2a4 4 0 0 1-4 4H4.2"/></svg></span><div><h4>Clean auto-clears, edge cases route to a human</h4><p>The straightforward pass in minutes; anything ambiguous goes to a reviewer with the evidence attached — and rehires re-clear instantly off the 25M-profile layer.</p></div></div>
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="apipanel">
          <div class="ap-bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">verifyBetter · Live source integrations</span></div>
          <div class="ap-body">
            <div class="apiconn">
              <div class="row"><span class="nm">Aadhaar / UIDAI</span><span class="st">Live</span></div>
              <div class="row"><span class="nm">PAN / NSDL</span><span class="st">Live</span></div>
              <div class="row"><span class="nm">DigiLocker</span><span class="st">Live</span></div>
              <div class="row"><span class="nm">EPFO / UAN</span><span class="st">Live</span></div>
              <div class="row"><span class="nm">Bank penny-drop</span><span class="st">Live</span></div>
              <div class="row"><span class="nm">Pan-India courts</span><span class="st">Live</span></div>
            </div>
            <div class="tatladder">
              <div class="tatrow"><span class="tv">Seconds</span><span class="tl">Identity — Aadhaar &amp; PAN validated via API</span></div>
              <div class="tatrow"><span class="tv">Minutes</span><span class="tl">Criminal — AI scans court &amp; police records</span></div>
              <div class="tatrow"><span class="tv">&lt;24 hr</span><span class="tl">Full six-point report · 50K+ cases a day</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ${x(`AI Cole · verification agent`,`Records read by AI, checked by API, reviewed by a human`,`Court-record NLP + document OCR + live source APIs clear the clean cases in minutes and route only the ambiguous ones to a reviewer — with liveness stopping spoofed identities.`,`50K+ cases/day · <24 hr TAT · 99.2% face-match`)}
    `},C(`vf4b`,`What verification at frontline speed protects.`,[{n:`<24 hr`,what:`Hiring speed, kept`,how:`Verification stops being the bottleneck between offer and first shift — high-churn roles fill this week, not next.`,proof:`50K+ cases/day · minutes for identity`},{n:`1`,what:`Bad hire caught early pays for thousands of checks`,how:`A theft, an assault, one fraudulent identity in a customer\\u2019s home — the incident you prevent is the whole business case.`,proof:`Swiggy · Licious · Royal Orchid live`},{n:`−50%+`,what:`Re-verification cost on rehires`,how:`Frontline churn means the same workers return; profiles on the 25M+ layer re-clear in minutes instead of full-price rechecks.`,proof:`Shared worker-intelligence layer`},{n:`100%`,what:`Defensible, DPDPA-compliant records`,how:`Red/yellow/green case files with dated checks and PDF reports — when a client or regulator asks, you answer same-day.`,proof:`Audit-ready case trail, every worker`}],`Batch of 50 real candidates, all six checks, benchmarked on TAT and cost against your current vendor.`),{id:`vf5`,theme:`darker`,title:`Next steps`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Send us 50 hires. Reports back inside 24 hours.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>A 50-case pilot batch</h4><p>Real candidates, all six checks, verified against your current vendor's TAT and cost.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>API into your ATS</h4><p>One-click initiation from your hiring flow — candidates verify themselves on their own phones.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Portfolio dashboard</h4><p>Your compliance team gets the red/yellow/green view across every active case, live.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Trusted by Swiggy · Licious · Royal Orchid Hotels — DPDPA-compliant, 100% digital</div>
    </div>`}],le=T.find(e=>e.id===`s7`),E=[{id:`ho1`,theme:`dark`,title:`Hire & Onboard cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">goBetter Hire &amp; manageBetter Onboarding</span>
      <h1 class="rise" style="animation-delay:.15s">Job posts in. <span style="color:var(--yellow)">Day-one-ready workers out.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">A full ATS plus digital onboarding, built for volume frontline hiring — with AI screening working the pipeline underneath.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">−60%</div><div class="l">Time-to-hire</div></div>
        <div class="stat"><div class="n">−20%</div><div class="l">Cost per acquisition</div></div>
        <div class="stat"><div class="n">10 min</div><div class="l">Worker self-onboarding</div></div>
      </div>
      <div class="mdcover ghost">GO</div>
    </div>`},...ee(`ho1b`,`For talent acquisition`,`Frontline hiring is a treadmill set to festive speed.`,`And the funnel leaks exactly where nobody is watching.`,[{pain:`Attrition means you never stop hiring`,painDetail:`At 15% monthly churn a 1,000-worker operation re-hires its entire workforce every seven months — with festive peaks hitting 23%.`,painStat:`15%/mo avg · 23% festive peak · Frontline Index`,fix:`An always-on funnel instead of hiring sprints`,fixDetail:`Standing requisitions across boards, QR posters, referrals and WhatsApp-apply keep the pipeline warm before the spike hits.`,fixStat:`Post once, fan out everywhere`},{pain:`Application forms lose the best candidates`,painDetail:`Frontline workers don’t have CVs and won’t install an app to apply — every extra screen is drop-off.`,painStat:`App-install + CV = abandoned applications`,fix:`No CV, no install — apply in minutes`,fixDetail:`Guided, vernacular, WhatsApp-first application with progressive documents: selfie and Aadhaar in-flow, the rest deferred.`,fixStat:`Subway journey: role + pay intent up front`},{pain:`Recruiters drown in unfit applications`,painDetail:`Thousands apply, a fraction fit — your team spends its week rejecting instead of closing.`,painStat:`4,820 sourced → 720 worth interviewing`,fix:`AI screens overnight, ranks by fit`,fixDetail:`AI Jack interviews over WhatsApp, voice bots call and score — recruiters open a ranked shortlist at 9 AM.`,fixStat:`−60% time-to-hire · −20% CPA`},{pain:`Offer accepted ≠ day-one arrival`,painDetail:`Between offer and joining, paperwork friction and silence lose signed candidates to whoever onboards faster.`,painStat:`Offer-to-join dropout is the silent leak`,fix:`10-minute onboarding on their own phone`,fixDetail:`Docs, BGV, bank and e-sign complete before the excitement fades — the record lands in payroll untouched.`,fixStat:`505 of 540 offers onboarded`}],`BetterPlace Frontline Index FY23 · production funnel data · Subway candidate-journey prototype`),{...le,id:`ho2`,title:`The hiring pipeline`},{id:`ho2b`,theme:`light`,title:`ATS capability map`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">goBetter Hire — the complete ATS surface</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">A full ATS built for frontline volume, <span style="color:var(--navy)">not white-collar trickle.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.doc}</svg></span><h4>Job openings</h4><p>Requisitions per role, site and city — with approval chains</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.layers}</svg></span><h4>Custom workflows</h4><p>Pipeline stages per client and market, exactly as your process runs</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.globe}</svg></span><h4>Your career site, live</h4><p>An opening publishes to your branded career page (with YouTube JD); candidates search and apply directly</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.search}</svg></span><h4>Multi-channel sourcing</h4><p>Career page, boards, referrals, QR codes, vendors, WhatsApp-apply</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.mic}</svg></span><h4>Interviews</h4><p>Schedule AI or human rounds (three by default, configurable) with structured questions; interviewers add notes live</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.chart}</svg></span><h4>Fit scores</h4><p>Ranked shortlists against the role rubric; AI scores video interviews on responses and delivery</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.check}</svg></span><h4>Offer → enrol</h4><p>Auto-generated offer &amp; appointment letters; the candidate gets a link to enrol straight into goBetter</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.4s;margin-top:14px;">Real-time pipeline analytics: source performance · stage conversion · time-to-hire — per requisition</div>
    </div>
    ${x(`AI Jack · screening agent`,`Every applicant interviewed, overnight`,`Conversational screening over WhatsApp and voice bots score fit against the role rubric — recruiters open a ranked shortlist, not an inbox.`,`AI screening cuts time-to-hire 30–50% (LinkedIn/McKinsey)`)}
    `},{id:`ho3`,theme:`light`,title:`The ATS surface`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">goBetter Hire · the full ATS</span>
        <h2 class="rise" style="animation-delay:.08s;">Recruiters review a ranked list, <span style="color:var(--navy)">not a pile.</span></h2>
        <div class="featlist">
          ${b(w.search,`Every channel, one pipeline`,`Career page, job boards, referrals, QR codes, vendors — and WhatsApp-apply with no app install.`,.24)}
          ${b(w.layers,`Your process, as workflows`,`Configurable stages per role and market: screening → interview → approval → offer, exactly as you run it.`,.32)}
          ${b(w.chart,`Fit scores & pipeline analytics`,`Candidates ranked against the role rubric; source performance, stage conversion and TAT in real time.`,.4)}
          ${b(w.doc,`Offers without the admin`,`Auto-generated offer and appointment letters, approval chains included.`,.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="conmock shortlist">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">gobetter · Hire · Store Associate · Andheri West</span><span class="liv">Ranked</span></div>
          <div class="body">
            <div class="aiban">
              <span class="av"><svg viewBox="0 0 24 24">${w.bot}</svg></span>
              <div><b>AI Jack screened 1,960 applicants overnight</b><span>WhatsApp + voice · scored against the role rubric</span></div>
              <span class="wave"><i></i><i></i><i></i><i></i><i></i></span>
            </div>
            <div class="crow top" style="--i:0"><span class="rank">1</span><span class="cav2">PS</span><div class="cwho"><b>Priya Sharma</b><span>2.1 km · Hindi + English · 2y retail</span></div><div class="fitc"><span class="track"><span class="fill" style="width:94%"></span></span><b>94</b></div><span class="cst grn">Interview 10 AM</span></div>
            <div class="crow" style="--i:1"><span class="rank">2</span><span class="cav2">RV</span><div class="cwho"><b>Rahul Verma</b><span>3.4 km · Hindi · POS certified</span></div><div class="fitc"><span class="track"><span class="fill" style="width:91%"></span></span><b>91</b></div><span class="cst grn">Interview 11 AM</span></div>
            <div class="crow" style="--i:2"><span class="rank">3</span><span class="cav2">SP</span><div class="cwho"><b>Sneha Patil</b><span>1.8 km · Marathi + Hindi · fresher</span></div><div class="fitc"><span class="track"><span class="fill" style="width:88%"></span></span><b>88</b></div><span class="cst blu">Shortlisted</span></div>
            <div class="crow" style="--i:3"><span class="rank">4</span><span class="cav2">AJ</span><div class="cwho"><b>Amit Joshi</b><span>4.9 km · Hindi · 1y QSR</span></div><div class="fitc"><span class="track"><span class="fill" style="width:84%"></span></span><b>84</b></div><span class="cst blu">Shortlisted</span></div>
            <div class="crow" style="--i:4"><span class="rank">5</span><span class="cav2">KR</span><div class="cwho"><b>Kiran Rao</b><span>2.7 km · Telugu + Hindi · fresher</span></div><div class="fitc"><span class="track"><span class="fill" style="width:81%"></span></span><b>81</b></div><span class="cst blu">Shortlisted</span></div>
          </div>
        </div>
        <div class="bcap">Monday 9 AM: recruiters open <b>this</b> — not 1,960 unread applications</div>
      </div>
    </div>`},{id:`ho4`,theme:`light`,title:`Digital onboarding`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">manageBetter Onboarding</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">From signed offer to day-one ready — <span style="color:var(--navy)">on the worker's own phone.</span></h2>
      <div class="mediasplit" style="align-items:start;">
        <div class="featlist" style="margin-top:14px;">
          ${b(w.doc,`Documents collected via API`,`IDs, certificates, right-to-work — configurable per market and state; e-sign for contracts and policies.`,.24)}
          ${b(w.shield,`Verification built in`,`ID checks tie straight into verifyBetter BGV with face-match — no second vendor, no re-entry.`,.32)}
          ${b(w.card,`Payroll-ready from minute one`,`Bank and statutory details captured once; PF/ESI templates auto-generated; the record flows to payroll untouched.`,.4)}
          ${b(w.users,`First-day journey in their language`,`Role-based checklists, intro content and policies — AI Mia guides docs and safety induction in under an hour.`,.48)}
        </div>
        <div class="rise" style="animation-delay:.35s;">
          <div class="vs" style="grid-template-columns:1fr;margin-top:14px;">
            <div class="col bad"><h4>Onboarding by chase</h4><ul><li>HR chases photocopies for a week</li><li>Data typed three times into three systems</li><li>Joiner shows up untrained, unverified</li></ul></div>
            <div class="col good"><h4>Onboarding by phone</h4><ul><li>ID + e-sign + bank setup in under 10 minutes</li><li>Zero re-entry — one record flows to payroll &amp; HRMS</li><li>Trained, verified and rostered before day one</li></ul></div>
          </div>
        </div>
      </div>
    </div>
    ${x(`AI Mia · onboarding agent`,`Documents checked as they upload`,`OCR and face-match validate IDs in the flow; gaps are chased by the agent in the worker’s language, not by HR on the phone.`,`45-min onboarding · zero re-entry`)}
    `},{id:`ho-aadhaar`,theme:`light`,title:`Aadhaar OTP onboarding`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Aadhaar OTP onboarding · identity in one step</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:32ch;">A verified worker <span style="color:var(--navy)">in the time it takes to read an OTP.</span></h2>
      <div class="mediasplit" style="align-items:start;">
        <div class="rise" style="animation-delay:.28s;background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:20px;">
          <div class="rail" style="grid-template-columns:1fr;gap:10px;margin-top:0;">
            <div class="rstage"><div class="rn">STEP 01</div><h4>Worker enters Aadhaar</h4><ul><li>On their own phone, in their language, with explicit consent captured</li></ul></div>
            <div class="rstage"><div class="rn">STEP 02</div><h4>OTP or offline eKYC confirms identity</h4><ul><li>A one-time code (where authorised) or a signed Aadhaar XML confirms they’re the holder</li></ul></div>
            <div class="rstage"><div class="rn">STEP 03</div><h4>Verified demographics returned</h4><ul><li>Name, DOB, gender, address &amp; photo populate from the signed record — identity only</li></ul></div>
            <div class="rstage"><div class="rn">STEP 04</div><h4>Straight into the worker record</h4><ul><li>Bank &amp; statutory details complete the profile — payroll-ready, zero re-entry</li></ul></div>
          </div>
        </div>
        <div class="featlist">
          ${b(w.zap,`Minutes, not days`,`Identity is confirmed the moment the OTP is entered — no waiting on a manual document review to clear a worker for the gate.`,.32)}
          ${b(w.shield,`Consent-based & compliant`,`Runs on the consent-driven eKYC route permitted for private employers — OTP where authorised, offline Aadhaar XML otherwise — with masked Aadhaar, not raw-number storage.`,.4)}
          ${b(w.user,`Fewer fake & duplicate profiles`,`A verified identity at the front door stops the same worker being onboarded twice under two contractors — and keeps ghost profiles out.`,.48)}
          ${b(w.doc,`Feeds BGV, gate & payroll`,`The verified identity flows into the six-point BGV, the gate pass and the payroll record on the same platform.`,.56)}
        </div>
      </div>
    </div>
    ${x(`AI Mia · onboarding agent`,`Aadhaar first, the rest checked in the flow`,`Beyond Aadhaar, the agent OCRs and face-matches the remaining documents and chases what’s missing in the worker’s language — so HR isn’t on the phone and the worker finishes in one sitting.`,`10-minute self-onboarding · zero HR re-entry`)}
    `},{id:`ho3b`,theme:`dark`,title:`The candidate journey`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The candidate's side · white-labelled journey (Subway prototype)</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">No CV. No app install. <span style="color:var(--yellow)">A ranked, verified applicant in minutes.</span></h2>
      <div class="mediasplit" style="align-items:center;">
        <div>
          <div class="featlist" style="margin-top:10px;">
            ${b(w.map,`Role, pay and location up front`,`Candidates pick role cards with pay bands and preferred locations — intent captured before a recruiter spends a minute.`,.24)}
            ${b(w.doc,`Progressive, non-blocking documents`,`Selfie and Aadhaar collected in-flow; everything else deferred so candidates finish instead of dropping off.`,.32)}
            ${b(w.zap,`Explainable job matches`,`Fit-scored, ranked recommendations with one-tap apply — commute-aware via locality and pincode.`,.4)}
            ${b(w.globe,`Your brand, their language`,`The whole journey ships white-labelled, with language selection on the first screen.`,.48)}
          </div>
        </div>
        <div class="rise" style="animation-delay:.3s">
          <div class="phones" style="min-height:clamp(280px,30vw,390px);">
            <div class="phone p1"><img src="assets/product/hire-journey/subway-role-location.png" alt="Role, pay band and location selection"/></div>
            <div class="phone p2"><img src="assets/product/hire-journey/subway-job-matches.png" alt="Ranked job matches with fit scores"/></div>
            <div class="phone p3"><img src="assets/product/hire-journey/subway-document-upload.png" alt="Progressive document upload"/></div>
          </div>
          <div class="phonecap" style="margin-top:12px;">Role &amp; pay intent · ranked matches with fit scores · progressive documents — experience prototype</div>
        </div>
      </div>
    </div>
    ${x(`Matching models`,`Fit scores candidates can see`,`Role, locality, language and availability feed an explainable match score — candidates apply to jobs they’ll accept, dropping funnel leakage.`,`Conversational AI cuts candidate drop-off up to 40%`)}
    `},{id:`ho4b`,theme:`light`,title:`Onboarding capability map`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">manageBetter Onboarding — the complete surface</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Everything between "offer signed" and "first shift" — <span style="color:var(--navy)">handled.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.doc}</svg></span><h4>One or thousands at once</h4><p>Onboard individually by mobile number (with a duplicate-profile check) or bulk via Excel — vendor, sub-vendor and tags captured on the way in</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.shield}</svg></span><h4>Verification</h4><p>ID checks tied into verifyBetter BGV with face-match, initiated as they join</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.check}</svg></span><h4>e-Sign</h4><p>Contracts and policy acknowledgements signed digitally</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.card}</svg></span><h4>Bank &amp; statutory setup</h4><p>Captured once, payroll-ready; PF/ESI templates auto-generated</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.zap}</svg></span><h4>Platform onboarding</h4><p>App access, role, site and shift assigned on completion</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.book}</svg></span><h4>First-day journey</h4><p>Role-based checklists, intro content, policies — in the worker's language</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.chart}</svg></span><h4>Admin tracking</h4><p>360° status across every joiner, bottleneck view</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.bot}</svg></span><h4>AI Mia guidance</h4><p>Docs plus safety induction guided in chat — under an hour</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.4s;margin-top:14px;">Worker completes ID + e-sign + bank setup on their own phone in <b style="color:var(--navy)">under 10 minutes</b> — zero HR re-entry</div>
    </div>`},{id:`ho5`,theme:`dark`,title:`Day in the life`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">What it looks like in your world</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:30ch;">300 store staff before festive season? <span style="color:var(--yellow)">Post once.</span></h2>
      <div class="rail" style="grid-template-columns:repeat(4,1fr);margin-top:24px;">
        <div class="rstage rise" style="animation-delay:.22s"><div class="rn">FRI · EVENING</div><h4>Post once</h4><ul><li>One requisition fans out to boards, QR posters and WhatsApp-apply</li></ul></div>
        <div class="rstage rise" style="animation-delay:.30s"><div class="rn">OVERNIGHT</div><h4>AI screens 2,000</h4><ul><li>AI Jack interviews on WhatsApp; voice bots call and score fit</li></ul></div>
        <div class="rstage rise" style="animation-delay:.38s"><div class="rn">MON</div><h4>Recruiters meet 300</h4><ul><li>Only the ranked shortlist — offers auto-generated on accept</li></ul></div>
        <div class="rstage rise" style="animation-delay:.46s"><div class="rn">SAME WEEK</div><h4>Onboarded in 10 min each</h4><ul><li>Docs, BGV, bank, e-sign on their phones — straight into payroll</li></ul></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.6s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">In production for <b>IFFCO Tokio</b> and <b>Subway</b> — funnel: 4,820 sourced → 1,960 AI-screened → 720 interviewed → 540 offered → <b>505 onboarded</b>.</div>
    </div>`},C(`ho5b`,`What changes in your hiring P&L.`,[{n:`−60%`,what:`Time-to-hire`,how:`AI screens overnight and recruiters meet a ranked shortlist — festive and launch ramps stop slipping by weeks.`,proof:`AI screening live at IFFCO Tokio, Subway`},{n:`−20%`,what:`Cost per acquisition`,how:`WhatsApp-apply and voice-bot screening replace call-center hours and job-board waste per hire.`,proof:`Voice screening at ₹5/min vs ₹12 industry`},{n:`10 min`,what:`Offer-to-payroll-ready`,how:`Docs, BGV, bank and e-sign on the worker\\u2019s phone with zero re-entry — day-one no-shows and week-one paperwork both shrink.`,proof:`Funnel: 4,820 sourced → 505 onboarded`},{n:`100%`,what:`Hires verified before day one`,how:`Every onboard is BGV-checked and training-gated on the same record — bad hires caught before the uniform, not after the incident.`,proof:`verifyBetter + skillBetter on one record`}],`Run your highest-volume role through the funnel for two weeks — we benchmark TAT and CPA against your current numbers.`),{id:`ho6`,theme:`darker`,title:`Next steps`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">One role. One city. Two weeks.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Pilot one live requisition</h4><p>Your highest-volume role, run end-to-end on goBetter Hire — measure TAT and cost against your current funnel.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>WhatsApp-apply QR test</h4><p>A store poster campaign: candidates apply and AI-screen without installing anything.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Onboarding time-trial</h4><p>Watch a real joiner go from offer to payroll-ready on their own phone, in under 10 minutes.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Every hire lands BGV-verified and training-ready — the closed hire → verify → onboard → train → pay loop.</div>
    </div>`}],D=[{id:`hr1`,theme:`dark`,title:`HRIS cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">goBetter · the frontline HRIS core</span>
      <h1 class="rise" style="animation-delay:.15s">One worker record. <span style="color:var(--yellow)">Every module reads it.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Onboarding, verification, attendance, payroll and skilling share a single associate record on one control plane — no exports, no re-entry, no version arguments.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">7</div><div class="l">Modules on one dashboard</div></div>
        <div class="stat"><div class="n">360°</div><div class="l">Profile per associate</div></div>
        <div class="stat"><div class="n">1 login</div><div class="l">For everything above</div></div>
      </div>
      <div class="mdcover ghost">go</div>
    </div>`},...ee(`hr1b`,`For the head of HR`,`Five systems, five headcounts, zero truth.`,`And every audit question turns into a project.`,[{pain:`Nobody agrees how many workers you have`,painDetail:`The ATS, the attendance vendor, payroll and the staffing agency each hold a different list — reconciliation is a monthly project.`,painStat:`5+ tools · 0 integrations, typically`,fix:`One record every module reads and writes`,fixDetail:`Onboard, Verify, Attend, Payroll and Upskill share one associate master — there is only one answer to "how many".`,fixStat:`One login · one worker record`},{pain:`Incomplete records break things downstream`,painDetail:`A missing bank detail blocks a pay run; a missing ID blocks BGV — discovered at the worst moment.`,painStat:`Gaps found at payroll time, not entry time`,fix:`Completeness enforced with deep-linked banners`,fixDetail:`"Missing information for BGV / Payroll" points the admin at the exact field before it blocks anything.`,fixStat:`Gap banners live in production`},{pain:`Audit questions take weeks to answer`,painDetail:`"Who employed this worker in March, at which site, and who changed their record?" — today that answer lives in six inboxes.`,painStat:`Evidence assembly: days per query`,fix:`360° profiles with locks and log history`,fixDetail:`Tenure timelines across client, vendor and subvendor; profile locking; every change on the log.`,fixStat:`Same-screen answers`},{pain:`Workforce BI needs a data team you don’t have`,painDetail:`Attendance trends, shortfall hotspots and payroll metrics live in exports nobody refreshes.`,painStat:`BI project quotes start at months`,fix:`Embedded dashboards from day one`,fixDetail:`QuickSight analytics over attendance, payroll and shortfalls — filterable by state, city, site.`,fixStat:`18,026 face-registered, one org view`}],`goBetter production walkthrough · enterprise deployment patterns`),{id:`hr2`,theme:`light`,title:`Control plane`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The control plane · real product</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">Your whole workforce, <span style="color:var(--navy)">on one screen.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${y(`assets/product/gobetter/hris/module-dashboard.jpg`,`gobetter · Organisation dashboard`,`Onboard, Verify, Attend, Payroll, Upskill, Vendors &amp; Reports — one control plane`)}
        ${y(`assets/product/gobetter/hris/employee-master-card-grid.jpg`,`gobetter · All Associates`,`The employee master — <b>1,014 associates</b> with role, site and hierarchy, searchable`)}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:16px;max-width:92ch;">Sites follow one hierarchy — country → state → city → site — and a configurable workflow engine (Business Flow) runs your processes, with real role-based access control.</p>
    </div>
    ${x(`Workforce copilot`,`Ask your workforce a question`,`“Which sites are trending short next week?” — natural-language queries over the one worker record, answered with the chart, not a ticket to the BI team.`,`Embedded analytics, no data team needed`)}
    `},{id:`hr3`,theme:`light`,title:`360° profile & governance`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Data completeness, enforced</span>
        <h2 class="rise" style="animation-delay:.08s;">The record tells you <span style="color:var(--navy)">what's missing — and for which module.</span></h2>
        <div class="featlist">
          <div class="fi rise" style="animation-delay:.24s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><h4>Missing-info banners with deep links</h4><p>"Missing information for BGV / Payroll" takes the admin straight to the exact gap — completeness is enforced, not hoped for.</p></div></div>
          <div class="fi rise" style="animation-delay:.32s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></span><div><h4>Profile lock &amp; log history</h4><p>Finalised records lock against edits; every change is on the log. Auditors get answers, not shrugs.</p></div></div>
          <div class="fi rise" style="animation-delay:.40s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/></svg></span><div><h4>BI dashboards built in</h4><p>Embedded QuickSight analytics — attendance trends, shortfall treemaps by site, payroll metrics — filterable by state, city and site.</p></div></div>
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${y(`assets/product/gobetter/hris/analytics-bi-dashboard-attendance.jpg`,`gobetter · Analytics`,`Live BI: donuts, monthly trends, shortfall treemap — <b>18,026 face-registered employees</b> in this one org`)}
      </div>
    </div>`},{id:`hr3b`,theme:`light`,title:`The 360° record`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">One associate, one record · real product</span>
        <h2 class="rise" style="animation-delay:.08s;">Open any worker. <span style="color:var(--navy)">See everything that touches them.</span></h2>
        <div class="featlist">
          <div class="fi rise" style="animation-delay:.24s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 12 0v1"/></svg></span><div><h4>Full profile with tenure timeline</h4><p>Role, site, hierarchy, BPSS reference, employment history across client, vendor and subvendor.</p></div></div>
          <div class="fi rise" style="animation-delay:.32s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><div><h4>Cross-module gap banners</h4><p>"Missing information for BGV / Payroll" deep-links to the exact field — the platform polices its own data quality.</p></div></div>
          <div class="fi rise" style="animation-delay:.40s"><span class="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></span><div><h4>Lock &amp; log</h4><p>Profile Locked blocks edits once finalised; Log History shows who changed what, when.</p></div></div>
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${y(`assets/product/gobetter/hris/employee-360-profile.jpg`,`gobetter · Associate 360° profile`,`A live associate record — missing-info banner, profile lock, log history, module tabs`)}
      </div>
    </div>`},C(`hr3c`,`What one worker record saves across the year.`,[{n:`0`,what:`Re-entry between systems`,how:`The record created at hiring is the one payroll pays and training tracks — the CSV-export-and-reimport ritual between five vendors ends.`,proof:`Onboard → Verify → Attend → Payroll → Upskill, one login`},{n:`Hours → minutes`,what:`Answering "who is this worker?"`,how:`360° profiles with tenure timelines and log history — vendor disputes and audit queries resolve from one screen.`,proof:`1,014-associate demo master, searchable`},{n:`Enforced`,what:`Records complete before they block anything`,how:`Missing-info banners deep-link to the exact gap per module — a missing bank detail gets fixed at entry, not on payday.`,proof:`Cross-module gap banners in production`},{n:`Built in`,what:`Workforce BI without a data project`,how:`Embedded QuickSight dashboards over attendance, payroll and shortfalls — filterable by state, city, site from day one.`,proof:`18,026 face-registered in one org\\u2019s view`}],`This layer comes free with any module you adopt — it is why starting anywhere still compounds.`),{id:`hr4`,theme:`darker`,title:`Why it matters`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">Why one record beats five systems</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Point tools each hold a fragment. <span style="color:var(--yellow)">We hold the worker.</span></h2>
      <div class="forces" style="margin-top:24px;">
        <div class="force rise" style="animation-delay:.22s"><h4>Hired → paid, one thread</h4><ul><li>The record created at hiring is the one payroll pays</li><li>No CSV exports between vendors, ever</li></ul></div>
        <div class="force rise" style="animation-delay:.30s"><h4>Compliance reads it too</h4><ul><li>BGV status, attendance and statutory dues on the same profile</li><li>Gaps surface as banners, not audit findings</li></ul></div>
        <div class="force rise" style="animation-delay:.38s"><h4>And it compounds</h4><ul><li>Every module adds data the next one uses</li><li>Rehires clear verification in minutes, not days</li></ul></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:26px;">This is the layer the 25M-profile worker-intelligence moat lives on.</div>
    </div>`}],ue=T.find(e=>e.id===`s11`),de=[{id:`sb1`,theme:`dark`,title:`staffBetter cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">staffBetter · managed staffing, employer of record</span>
      <h1 class="rise" style="animation-delay:.15s">The right frontline talent. <span style="color:var(--yellow)">Compliantly. At speed.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Full-time staffing across India &amp; Southeast Asia, drawn from the verified 25M+ pool. We become the employer of record and carry the full compliance load — you direct the work.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">40K+</div><div class="l">Workers managed / month</div></div>
        <div class="stat"><div class="n">&gt;95%</div><div class="l">Client retention</div></div>
        <div class="stat"><div class="n">24–72 hr</div><div class="l">Deployment from verified pool</div></div>
        <div class="stat"><div class="n">6,000+</div><div class="l">Pin codes covered in India</div></div>
      </div>
      <div class="mdcover ghost">SB</div>
    </div>`},S(`sb1b`,`For HR & operations`,`The agency model gives you bodies. You need a workforce.`,[{pain:`Agency quality is a lottery, refreshed monthly`,painDetail:`Unscreened candidates churn out as fast as they arrive — you pay sourcing fees for the same seat several times a year.`,painStat:`40–50% of frontline workers switching for pay/balance`,fix:`A verified pool with welfare that retains`,fixDetail:`BGV-verified candidates from the 25M+ pool, kept by insurance, early wage access and upskilling — churn drops because staying pays.`,fixStat:`Mahindra: 1,000+ execs built and kept`},{pain:`Your vendor’s compliance gap is your liability`,painDetail:`When the staffing agency underpays PF or misses ESIC, the principal-employer exposure lands on you.`,painStat:`14B damages up to 100% of arrears`,fix:`We are the employer of record`,fixDetail:`PF, ESIC, payroll, gratuity and labour-law compliance sit with us — with real-time reporting so you can see it, not hope it.`,fixStat:`EoR across India · Indonesia · Malaysia`},{pain:`Every city means another vendor hunt`,painDetail:`Multi-city expansion multiplies agencies, contracts, rate cards and compliance standards.`,painStat:`One agency per city = ungovernable`,fix:`One partner, 500+ cities, three markets`,fixDetail:`AasaanJobs, MyRobin and Troopers run on one relationship, one SLA and one platform you can audit.`,fixStat:`24–72 hr deployment anywhere`}],`McKinsey frontline retention research · EPFO 14B · Mahindra Holidays engagement`),{...ue,id:`sb2`,title:`staffBetter capabilities`},{id:`sb3`,theme:`light`,title:`How an engagement runs`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The operating commitments</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">SLAs you can hold us to, <span style="color:var(--navy)">in the contract.</span></h2>
      <div class="modelrow rise" style="animation-delay:.2s;margin-top:16px;">
        <div class="mstat"><div class="n">24–72 hr</div><div class="l">Deployment from the pre-verified pool</div></div>
        <div class="mstat"><div class="n">40%</div><div class="l">Faster time-to-hire than agency routes</div></div>
        <div class="mstat"><div class="n">100%</div><div class="l">Statutory compliance carried by us as EoR</div></div>
        <div class="mstat"><div class="n">Real-time</div><div class="l">Compliance &amp; deployment reporting to you</div></div>
      </div>
      <div class="capgrid three rise" style="animation-delay:.35s;margin-top:18px;">
        <div class="cap"><h4>Employer of record, end to end</h4><p>PF, ESIC, payroll, gratuity, labour-law compliance — our liability, not yours, with real-time reporting</p></div>
        <div class="cap"><h4>Worker welfare that cuts churn</h4><p>Statutory benefits, insurance, early wage access — plus grievance redressal that answers in 8h 35m and resolves 94% within SLA</p></div>
        <div class="cap"><h4>One partner across markets</h4><p>AasaanJobs (India) · MyRobin (Indonesia) · Troopers (Malaysia) — 500+ cities on one relationship</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.5s;margin-top:14px;">Every deployed worker is BGV-verified and runs on the same goBetter platform — attendance, payroll and training included</div>
    </div>
    ${x(`Matching models`,`The right worker from 25M profiles`,`Skill, proximity, wage-fit and verified history rank candidates for every requisition — deployment in 24–72 hours starts with a shortlist, not a search.`,`40% faster time-to-hire`)}
    `},{id:`sb4`,theme:`light`,title:`Proof`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Proof</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">From HNI sales floors to <span style="color:var(--navy)">1,000-exec teams.</span></h2>
      <div class="cases" style="grid-template-columns:1fr 1fr;margin-top:16px;">
        <div class="case rise" style="--pc:#FF9518;animation-delay:.22s"><div class="ch"><span class="cn">Mahindra Holidays</span><span class="ct">Staffing · hospitality</span></div><p>Exclusive vendor for HNI telemarketing and field sales — luxury packages of ₹2–16L, sourced pan-India, quality-screened and deployed compliantly.</p><div class="cm"><div class="m"><div class="mn">300+</div><div class="ml">quality hires in 3 months</div></div><div class="m"><div class="mn">1,000+</div><div class="ml">execs on the team today</div></div><div class="m"><div class="mn">Exclusive</div><div class="ml">vendor status earned</div></div></div></div>
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.3s"><div class="ch"><span class="cn">The Aasaanjobs engine</span><span class="ct">India staffing · run rate</span></div><p>Our India brand runs 23,000+ outsourced staff for Amazon, Flipkart, DMart, Nykaa, Nestlé and 1,100+ enterprise partners — offers to onboarding as a measured pipeline.</p><div class="cm"><div class="m"><div class="mn">~4,600</div><div class="ml">offers a month, 2,500 joinings</div></div><div class="m"><div class="mn">90%</div><div class="ml">offer letters within 1 day</div></div><div class="m"><div class="mn">94%</div><div class="ml">grievances resolved in SLA</div></div></div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.4s">Industries staffed: warehouse &amp; logistics · retail &amp; sales · delivery · F&amp;B &amp; hospitality · security &amp; facilities · manufacturing · BPO · healthcare support</div>
    </div>`},C(`sb5`,`What staffBetter changes in your operations.`,[{n:`−40%`,what:`Time-to-fill collapses`,how:`Roles filled from a pre-verified pool in 24–72 hours instead of agency cycles of weeks — sites open on schedule, revenue days stop leaking.`,proof:`Mahindra: 300+ hires in 3 months`},{n:`₹0`,what:`Statutory exposure on staffed workers`,how:`As employer of record, PF, ESIC, gratuity and labour-law liability sit with us — the exposure never lands on your books in the first place.`,proof:`EoR across India · Indonesia · Malaysia`},{n:`−15%`,what:`Frontline attrition`,how:`Insurance, early wage access and upskilling make deployed workers stay — every point of churn saved is a hiring and training cycle you never pay for.`,proof:`Welfare stack on every deployment`},{n:`1`,what:`Vendor, many markets`,how:`One contract replaces a patchwork of city agencies — one SLA, one compliance standard, one dashboard.`,proof:`500+ cities · 3 country brands`}],`Bring us your hardest-to-staff site — we’ll quote fill rate and time-to-deploy against your current agency.`),{id:`sb6`,theme:`darker`,title:`Next steps`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Give us your hardest site to staff.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>A 30-day staffing pilot</h4><p>One city, one role family — measure fill rate, time-to-deploy and 90-day retention against your current agency.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>EoR compliance takeover</h4><p>We become employer of record for your contract workforce — statutory load moves to us, reporting moves to your dashboard.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Scale across markets</h4><p>Extend the same contract to Indonesia and Malaysia through MyRobin and Troopers.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`}],fe=[{id:`aj1`,theme:`dark`,title:`Aasaanjobs cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">Aasaanjobs · frontline workforce solutions · a BetterPlace company</span>
      <h1 class="rise" style="animation-delay:.15s">23,000 people on our payroll, <span style="color:var(--yellow)">working for you.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">India's leading technology platform for staffing and workforce management — we recruit, onboard, pay and support your frontline workforce end to end, and carry the compliance so you don't.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">23,000+</div><div class="l">Outsourced manpower, live</div></div>
        <div class="stat"><div class="n">25+</div><div class="l">Cities · 6,000+ pin codes</div></div>
        <div class="stat"><div class="n">&gt;95%</div><div class="l">Client retention</div></div>
        <div class="stat"><div class="n">3–4K</div><div class="l">Joinings every month</div></div>
      </div>
      <div class="mdcover ghost">AJ</div>
    </div>`},{id:`aj2`,theme:`light`,title:`The BetterPlace ecosystem`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Company overview · the BetterPlace ecosystem</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:32ch;">Part of Asia's largest frontline <span style="color:var(--navy)">workforce platform.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:8px;max-width:96ch;">Aasaanjobs is the staffing arm of BetterPlace — so every worker we deploy runs on the same technology that manages millions of frontline workers for Asia's largest enterprises.</p>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:16px;animation-delay:.24s">
        <div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">goBetter · Platform</span></div><p><b>The software layer.</b> Background verification, onboarding, attendance, payroll &amp; compliance — the HRMS suite our deployments run on.</p></div>
        <div class="case" style="--pc:#FFC401"><div class="ch"><span class="cn">Aasaanjobs · Staffing</span></div><p><b>This deck.</b> End-to-end staffing — recruitment, onboarding and payroll management. 23,000+ outsourced manpower, pan-India.</p></div>
        <div class="case" style="--pc:#32CAD4"><div class="ch"><span class="cn">OkayGo · Gig</span></div><p><b>The flex layer.</b> On-demand blue and grey-collar gig staffing — quick deployment for dynamic, seasonal needs.</p></div>
      </div>
      <div class="modelrow rise" style="animation-delay:.4s;margin-top:18px;">
        <div class="mstat"><div class="n">30M+</div><div class="l">Frontline workers served</div></div>
        <div class="mstat"><div class="n">1,100+</div><div class="l">Enterprise partners</div></div>
        <div class="mstat"><div class="n">India &amp; SEA</div><div class="l">Geographic coverage</div></div>
        <div class="mstat"><div class="n">2015</div><div class="l">Founded · HQ Bengaluru</div></div>
      </div>
    </div>`},{id:`aj3`,theme:`light`,title:`Who we are`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Who we are · end-to-end lifecycle</span>
        <h2 class="rise" style="animation-delay:.08s;">Recruitment to retirement, <span style="color:var(--navy)">one partner.</span></h2>
        <div class="featlist">
          ${b(w.search,`Pan-India recruitment`,`Multi-channel sourcing — job boards, 160+ partner agencies, in-house recruiters and job fairs — feeding a 20M+ candidate database.`,.24)}
          ${b(w.doc,`Digital onboarding`,`Paperless KYC and document collection on the MYHR app — offer letter to appointment letter without a single courier.`,.32)}
          ${b(w.map,`Geo-fenced attendance`,`Workers mark attendance inside a geo-fence on their own phone — presence you can trust before payroll runs.`,.4)}
          ${b(w.shield,`Compliance & payroll, 100% automated`,`PF, ESIC, LWF, PT filed on schedule with a 97%+ compliance score — and every payslip on the worker’s phone.`,.48)}
          ${b(w.users,`Grievance redressal that answers`,`94% of tickets resolved within SLA; first response in 8h 35m on average — workers stay because someone picks up.`,.56)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${y(`assets/product/aasaanjobs/client-logos.jpg`,`Trusted by industry leaders`,`Amazon · Flipkart · DMart · Nykaa · Nestlé · Reliance · SBI · MakeMyTrip and more — <b>&gt;95% stay with us</b>`)}
        <div class="stats" style="margin-top:18px;gap:16px 28px;">
          <div class="stat"><div class="n">70+</div><div class="l">Dedicated recruiters</div></div>
          <div class="stat"><div class="n">3–4K</div><div class="l">Monthly joinings</div></div>
          <div class="stat"><div class="n">20M+</div><div class="l">Candidate database</div></div>
        </div>
      </div>
    </div>`},{id:`aj4`,theme:`light`,title:`Service portfolio`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Our services · talent discovery to workforce management</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">We find them. We employ them. <span style="color:var(--navy)">You direct the work.</span></h2>
      <div class="cases rise" style="grid-template-columns:1fr 1fr;margin-top:16px;animation-delay:.22s">
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">Recruitment · talent acquisition</span></div>
          <p><b>End-to-end hiring lifecycle.</b> Multi-channel sourcing across job boards, a 160+ agency partner network and our in-house team · AI-powered screening with recruiter review · automated interview scheduling with calling and attendance marking.</p>
          <div class="cm"><div class="m"><div class="mn">70+</div><div class="ml">recruiters</div></div><div class="m"><div class="mn">3–4K</div><div class="ml">monthly joinings</div></div><div class="m"><div class="mn">20M+</div><div class="ml">candidate DB</div></div></div>
        </div>
        <div class="case" style="--pc:#FFC401">
          <div class="ch"><span class="cn">Employment · workforce management</span></div>
          <p><b>Contractual staffing on our payroll.</b> Digital onboarding and KYC via the MYHR app · payrolling and statutory compliance, fully automated · ticket-based grievance redressal with a quick-response team.</p>
          <div class="cm"><div class="m"><div class="mn">100%</div><div class="ml">payroll automation</div></div><div class="m"><div class="mn">90%</div><div class="ml">offer letters in 1 day</div></div><div class="m"><div class="mn">8h 35m</div><div class="ml">first response</div></div></div>
        </div>
      </div>
      <div class="probfoot rise" style="animation-delay:.42s">One contract covers both — <b>seamless integration, full compliance, rapid deployment.</b></div>
    </div>`},{id:`aj5`,theme:`dark`,title:`Profiles we serve`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Market coverage · profiles we serve</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:32ch;">Deep where frontline attrition hurts most: <span style="color:var(--yellow)">sales &amp; logistics.</span></h2>
      <div class="ajmix rise" style="animation-delay:.2s">
        <div class="ajrow"><span class="lb">Sales / Business Dev</span><span class="ajbar"><i style="--w:74.6%;--bc:#FFC401;--d:.35s"></i></span><span class="pc">37.3%</span></div>
        <div class="ajrow"><span class="lb">Logistics &amp; Last Mile</span><span class="ajbar"><i style="--w:66.6%;--bc:#FF9518;--d:.5s"></i></span><span class="pc">33.3%</span></div>
        <div class="ajrow"><span class="lb">In-Store Promoters</span><span class="ajbar"><i style="--w:18.2%;--bc:#32CAD4;--d:.65s"></i></span><span class="pc">9.1%</span></div>
        <div class="ajrow"><span class="lb">Fulfilment Centres</span><span class="ajbar"><i style="--w:13.4%;--bc:#7C6BF0;--d:.8s"></i></span><span class="pc">6.7%</span></div>
        <div class="ajrow"><span class="lb">Telecalling &amp; BPO</span><span class="ajbar"><i style="--w:11.8%;--bc:#3DBE7B;--d:.95s"></i></span><span class="pc">5.9%</span></div>
        <div class="ajrow"><span class="lb">Marketing &amp; others</span><span class="ajbar"><i style="--w:15.6%;--bc:#8A93B8;--d:1.1s"></i></span><span class="pc">7.8%</span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));"><b>70.6% of our book is sales &amp; logistics</b> — the two highest-churn frontline categories. If we can retain there, we can retain anywhere.</div>
    </div>`},{id:`aj6`,theme:`light`,title:`Technology stack`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Technology-enabled delivery · three surfaces</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:32ch;">A screen for the candidate, the client <span style="color:var(--navy)">and the worker.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:16px;animation-delay:.22s">
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">Job board platform</span></div>
          <p><b>Where candidates come from.</b> 2–5M job seekers a month · 20M+ candidate database · 160+ recruitment agency partners · regular pan-India job fairs.</p>
        </div>
        <div class="case" style="--pc:#FFC401">
          <div class="ch"><span class="cn">Client dashboard</span></div>
          <p><b>What you see.</b> Real-time compliance &amp; performance analytics · PF / ESIC / LWF / PT challans · monthly paysheets and master MIS · alerts on upcoming offers and compliance.</p>
        </div>
        <div class="case" style="--pc:#32CAD4">
          <div class="ch"><span class="cn">MYHR employee app</span></div>
          <p><b>What workers hold.</b> Digital onboarding &amp; KYC · salary slips and offer letters · geo-fenced attendance · ticket-based grievance redressal.</p>
        </div>
      </div>
      <div class="modelrow rise" style="animation-delay:.4s;margin-top:18px;">
        <div class="mstat"><div class="n">AI-powered</div><div class="l">Screening &amp; matching</div></div>
        <div class="mstat"><div class="n">Cloud</div><div class="l">Nothing to install</div></div>
        <div class="mstat"><div class="n">Secure</div><div class="l">Worker data protected</div></div>
        <div class="mstat"><div class="n">Real-time</div><div class="l">Compliance visibility</div></div>
      </div>
    </div>`},{id:`aj7`,theme:`dark`,title:`Recruitment process`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Our process · requirement to joining</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:30ch;">Six steps. Seven to fourteen days. <span style="color:var(--yellow)">No black box.</span></h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(6,1fr);margin-top:22px;">
        <div class="rstage"><div class="rn">01</div><h4>Requirement</h4><ul><li>Role specs &amp; locations</li><li>Raised on the platform</li></ul></div>
        <div class="rstage"><div class="rn">02</div><h4>Sourcing</h4><ul><li>Job boards + 160+ agencies</li><li>Job fairs &amp; campaigns</li></ul></div>
        <div class="rstage"><div class="rn">03</div><h4>AI screening</h4><ul><li>Auto-filters on every CV</li><li>Recruiter review on top</li></ul></div>
        <div class="rstage"><div class="rn">04</div><h4>Interviews</h4><ul><li>Automated calling</li><li>Attendance marked</li></ul></div>
        <div class="rstage"><div class="rn">05</div><h4>Offer</h4><ul><li>Auto-generated letters</li><li>90% sent within 1 day</li></ul></div>
        <div class="rstage"><div class="rn">06</div><h4>Joining</h4><ul><li>Digital KYC on MYHR</li><li>Straight into payroll</li></ul></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Average turnaround: <b>7–14 days from requirement to joining</b> — and you watch every stage move on the dashboard.</div>
    </div>`},{id:`aj8`,theme:`light`,title:`Pan-India presence`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Geographic reach · pan-India</span>
        <h2 class="rise" style="animation-delay:.08s;">One partner from metro to <span style="color:var(--navy)">tier-3 town.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">Expansion shouldn't mean a new vendor hunt in every city. We operate in 25+ cities across 6,000+ pin codes — one contract, one SLA, one dashboard, wherever the site is.</p>
        <div class="stats rise" style="animation-delay:.3s;margin-top:22px;gap:18px 34px;">
          <div class="stat"><div class="n">25+</div><div class="l">Operational cities</div></div>
          <div class="stat"><div class="n">6,000+</div><div class="l">Pin codes covered</div></div>
          <div class="stat"><div class="n">13 / 12</div><div class="l">Cities north-west / east-south</div></div>
        </div>
      </div>
      <div class="prodpanel rise" style="animation-delay:.35s">
        <div class="pminihead">Key metros · live operations</div>
        <div class="tags">
          <span class="tag hot">Delhi NCR</span><span class="tag hot">Mumbai</span><span class="tag hot">Bengaluru</span><span class="tag hot">Chennai</span><span class="tag hot">Hyderabad</span><span class="tag hot">Pune</span><span class="tag hot">Kolkata</span><span class="tag hot">Ahmedabad</span>
        </div>
        <div class="pminihead" style="margin-top:18px;">Depth of coverage</div>
        <div class="tags">
          <span class="tag">Tier-1 · 8 metros</span><span class="tag">Tier-2 · 12 cities</span><span class="tag">Tier-3 · 5+ cities</span>
        </div>
        <div class="clientline">Recruiters, IR support and compliance ops in every major hub — not just a sourcing desk</div>
      </div>
    </div>`},{id:`aj9`,theme:`light`,title:`Onboarding to payroll`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Operational excellence · day one to salary day</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:32ch;">From offer letter to salary credit, <span style="color:var(--navy)">one straight line.</span></h2>
      <div class="cases rise" style="grid-template-columns:1fr 1fr;margin-top:16px;animation-delay:.22s">
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">Onboarding</span></div>
          <p><b>1 · Offer letter</b> — auto-generated on standard templates, 90% within a day.<br/><b>2 · Salary structure</b> — client CTC checked for minimum-wage adherence by the compliance team before approval.<br/><b>3 · Documents</b> — KYC on the MYHR app; appointment letter issues the moment verification and salary approval clear.</p>
        </div>
        <div class="case" style="--pc:#FFC401">
          <div class="ch"><span class="cn">Payroll</span></div>
          <p><b>1 · Attendance cycle</b> — you define the cycle and salary date; payroll follows it.<br/><b>2 · Calculation</b> — computed from attendance, week-offs and leave policy; pay sheet shared for your approval.<br/><b>3 · Invoice &amp; payment</b> — invoice raised on approval; workers get a real-time salary-credit notification with UTR.</p>
        </div>
      </div>
      <div class="modelrow rise" style="animation-delay:.42s;margin-top:18px;">
        <div class="mstat"><div class="n">97%+</div><div class="l">Compliance score</div></div>
        <div class="mstat"><div class="n">100%</div><div class="l">Payroll automation</div></div>
        <div class="mstat"><div class="n">90%</div><div class="l">Offer letters in 1 day</div></div>
        <div class="mstat"><div class="n">UTR</div><div class="l">Real-time salary confirmation</div></div>
      </div>
    </div>`},C(`aj10`,`The numbers a staffing partner should be judged on.`,[{n:`>95%`,what:`Client retention`,how:`Clients who start with us stay with us — the only staffing metric that can’t be gamed, because it’s voted with renewals.`,proof:`Across 1,100+ enterprise relationships`},{n:`>60%`,what:`Vacancies filled`,how:`An industry-leading fill rate on ~4,600 offers generated a month — requirement to joining in 7–14 days.`,proof:`~2,500 successful onboardings monthly`},{n:`94%`,what:`Grievances resolved in SLA`,how:`Ticket-based redressal on the MYHR app with a quick-response team — first response in 8h 35m, 78% resolved on the first attempt.`,proof:`18-working-hour SLA, measured`},{n:`97%+`,what:`Compliance score`,how:`PF, ESIC, LWF and PT filed on schedule with real-time challans on your dashboard — 100% payroll automation underneath.`,proof:`Statutory audit trail, always current`}],`Ask your current staffing vendor for these four numbers — then ask us for ours in writing.`),{id:`aj11`,theme:`light`,title:`Compliance & grievance`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Compliance &amp; support · at scale</span>
        <h2 class="rise" style="animation-delay:.08s;">Statutory adherence you can <span style="color:var(--navy)">watch live.</span></h2>
        <div class="featlist">
          ${b(w.shield,`PF / ESIC`,`Complete filings with real-time challans visible on your dashboard — not a quarterly surprise.`,.24)}
          ${b(w.doc,`LWF & Professional Tax`,`State-wise slabs, filings and deposits handled across every state you operate in.`,.32)}
          ${b(w.check,`Minimum wage, verified`,`Every salary structure checked against state and skill-level wage floors before payroll ever runs.`,.4)}
          ${b(w.users,`IR support on the ground`,`Industrial-relations support across all major hubs — with weekly, biweekly or monthly payroll cycles to match your operation.`,.48)}
        </div>
      </div>
      <div class="prodpanel rise" style="animation-delay:.35s">
        <div class="pminihead">Grievance management · measured</div>
        <div class="stats" style="margin-top:14px;gap:16px 26px;">
          <div class="stat"><div class="n">8h 35m</div><div class="l">First response</div></div>
          <div class="stat"><div class="n">14h 25m</div><div class="l">Avg. resolution</div></div>
          <div class="stat"><div class="n">78%</div><div class="l">First-attempt resolution</div></div>
          <div class="stat"><div class="n">89%</div><div class="l">Within 18-hr SLA</div></div>
        </div>
        <div class="pminihead" style="margin-top:18px;">How a ticket moves</div>
        <div class="tags">
          <span class="tag hot">1 · Worker raises it on MYHR</span><span class="tag hot">2 · Quick Response Team notified</span><span class="tag hot">3 · Closed with worker confirmation</span>
        </div>
        <div class="clientline">A workforce that gets answers is a workforce that stays — grievance speed is a retention lever, not a cost centre</div>
      </div>
    </div>`},{id:`aj12`,theme:`darker`,title:`Why Aasaanjobs`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">Partner with us</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Why teams choose Aasaanjobs — <span style="color:var(--yellow)">and stay.</span></h2>
      <div class="ctacards" style="margin-top:22px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Scale &amp; speed</h4><p>23,000+ outsourced manpower across 25+ cities and 6,000+ pin codes — 3–4,000 joinings a month, offers out in a day.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>Technology-first</h4><p>AI-powered screening, digital onboarding on MYHR and a real-time client dashboard — you see compliance, not just invoices.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Compliance carried</h4><p>97%+ compliance score, 100% payroll automation, complete statutory coverage — our liability, your visibility.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">www.aasaanjobs.com · part of BetterPlace, Asia's largest frontline workforce platform · www.betterplace.co.in</div>
    </div>`}],pe=T.find(e=>e.id===`s12`),O=[{id:`gb1`,theme:`dark`,title:`gigBetter cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">gigBetter · on-demand gig &amp; task fulfilment</span>
      <h1 class="rise" style="animation-delay:.15s">The workforce that scales with you. <span style="color:var(--yellow)">Pay only for outcomes.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">AI-matched gig workers by skill, proximity and performance — deployed in under 24 hours, billed 100% on GPS-and-photo-verified tasks.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">&lt;24 hr</div><div class="l">Deployment, 1 to 500+ workers</div></div>
        <div class="stat"><div class="n">&lt;4%</div><div class="l">No-show rate</div></div>
        <div class="stat"><div class="n">2–4 hr</div><div class="l">Metro replacement SLA</div></div>
        <div class="stat"><div class="n">100%</div><div class="l">Outcome-based billing</div></div>
      </div>
      <div class="mdcover ghost">GG</div>
    </div>`},S(`gb1b`,`For operations & finance`,`You staff for the peak and pay for the valley.`,[{pain:`Fixed headcount sized to the busiest week`,painDetail:`Festive, audit season, launches — capacity built for spikes idles the rest of the year on your payroll.`,painStat:`Peak-sized teams · 52-week cost`,fix:`Scale 1 → 500+ inside 24 hours, then back down`,fixDetail:`AI-matched gig workers by skill, proximity and rating — deployed for the spike, gone with it.`,fixStat:`<24 hr deployment · 2–4 hr replacement`},{pain:`You pay invoices you can’t verify`,painDetail:`Field vendors bill on claimed attendance and claimed tasks — disputes are monthly, proof is nobody’s.`,painStat:`Claimed work ≠ verified work`,fix:`100% outcome billing with GPS + photo proof`,fixDetail:`Every billed task carries a location check-in and photo evidence — the invoice argument ends.`,fixStat:`Audit any task, any time`},{pain:`Gig quality collapses exactly when you need it`,painDetail:`No-shows spike on the days that matter most, and replacements take days you don’t have.`,painStat:`Industry no-show rates run double digits`,fix:`Rated, insured supply that returns`,fixDetail:`Pre-screened workers with job insurance and early wage access — quality supply that shows up again.`,fixStat:`<4% no-shows · 95% proctor retention`}],`gigBetter deployment data · assessment-platform engagement (5,000 drives)`),{...pe,id:`gb2`,title:`gigBetter capabilities`},{id:`gb3`,theme:`light`,title:`The economics`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Why CFOs like the model</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Fixed headcount becomes <span style="color:var(--navy)">variable, verified spend.</span></h2>
      <div class="vs rise" style="animation-delay:.2s">
        <div class="col bad">
          <h4>Carrying fixed headcount for peaks</h4>
          <ul>
            <li>Staffed for the busiest week, paid for all 52</li>
            <li>No-shows discovered at shift start</li>
            <li>Invoices based on attendance claims you can't check</li>
            <li>Every new city means a new local agency</li>
          </ul>
        </div>
        <div class="col good">
          <h4>gigBetter on-demand</h4>
          <ul>
            <li>Scale 1 → 500+ workers inside 24 hours, back down just as fast</li>
            <li>&lt;4% no-shows; metro replacements inside 2–4 hours</li>
            <li>You pay per verified task — GPS check-in + photo proof</li>
            <li>One platform across 500+ cities, India · Malaysia · Indonesia</li>
          </ul>
        </div>
      </div>
      <div class="clientline rise" style="animation-delay:.4s;margin-top:16px;">Verticals: last-mile delivery · retail &amp; merchandising · warehouse ops · events · telecalling · field audits &amp; mystery shopping · exam proctoring · <b style="color:var(--navy)">AI data annotation (new)</b></div>
    </div>
    ${x(`Deployment engine`,`Matched by skill, proximity and rating`,`Task requirements meet worker history in real time; no-show risk scores decide who gets backup pre-assigned.`,`<4% no-shows · 2–4 hr replacement`)}
    `},{id:`gb4`,theme:`light`,title:`Proof`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Proof</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:28ch;">5,000 exam drives. 40+ cities. <span style="color:var(--navy)">95% retention.</span></h2>
      <div class="cases" style="grid-template-columns:1fr;max-width:860px;margin-top:16px;">
        <div class="case rise" style="--pc:#32CAD4;animation-delay:.22s"><div class="ch"><span class="cn">Leading assessment platform</span><span class="ct">Gig · exam proctoring</span></div><p>End-to-end management of a dispersed proctor and invigilator workforce — tech-driven quality platform, exam audits, outcome-verified payouts.</p><div class="cm"><div class="m"><div class="mn">95%</div><div class="ml">proctor retention</div></div><div class="m"><div class="mn">40+</div><div class="ml">cities covered</div></div><div class="m"><div class="mn">5,000</div><div class="ml">drives run</div></div></div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.4s">Pre-screened, rated workers with job insurance and early wage access — quality supply that keeps coming back.</div>
    </div>`},C(`gb5`,`What gigBetter changes in your cost line.`,[{n:`100%`,what:`Spend tied to verified output`,how:`Every billed task carries GPS check-in and photo proof — the invoice argument with vendors disappears.`,proof:`Outcome billing on every engagement`},{n:`−100%`,what:`Idle-capacity cost between peaks`,how:`Festive, audit and launch spikes staffed on demand; when the spike ends, so does the spend.`,proof:`1 → 500+ workers in <24 hr`},{n:`<4%`,what:`No-show risk, absorbed by us`,how:`Rated, pre-screened supply plus 2–4 hour metro replacement — your ops plan survives contact with reality.`,proof:`95% proctor retention · 5,000 drives`},{n:`1 day`,what:`New-city launch time`,how:`The same platform and supply pool covers 500+ cities — expansion stops waiting for local agency hunts.`,proof:`India · Malaysia · Indonesia`}],`Pilot it on your next spike: we deploy for one event and you audit every billed task.`),{id:`gb6`,theme:`darker`,title:`Next steps`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Staff your next spike without hiring for it.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>One-event burst</h4><p>Your next sale, audit or exam drive — deployed inside 24 hours, every task GPS-and-photo verified.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>A standing gig bench</h4><p>A rated pool sized to your seasonal curve — drawn down when you need it, zero cost when you don't.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>AI data annotation pilot</h4><p>Our newest vertical: trained, verified annotators on outcome billing for your AI/data teams.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`}],k=(e,t)=>`
  <div class="ag rise" style="--ac:${e.color};animation-delay:${t}s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat ${e.status}"><span class="d"></span>${e.status===`live`?`Live`:e.status===`beta`?`Beta`:`Soon`}</span></div><div class="role">${e.role}</div><h4>${e.name}</h4><p>${e.desc}</p></div>`;function me(e){let t=e.caps?{id:`${e.id}-2b`,theme:`light`,title:`Sector capabilities`,html:`
      <div class="slidebody">
        <span class="eyebrow rise">${e.caps.eyebrow}</span>
        <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">${e.caps.headline}</h2>
        <div class="capgrid rise" style="animation-delay:.2s">
          ${e.caps.items.map(e=>`<div class="cap"><h4>${e.h}</h4><p>${e.p}</p></div>`).join(``)}
        </div>
        <div class="clientline rise" style="animation-delay:.4s;margin-top:14px;">${e.caps.foot}</div>
      </div>`}:null,n=[{id:`${e.id}-1`,theme:`dark`,title:`${e.label} cover`,html:`
      <div class="glow"></div>
      <div class="mdcover">
        <span class="mdkicker rise" style="animation-delay:.05s">BetterPlace for ${e.label}</span>
        <h1 class="rise" style="animation-delay:.15s">${e.headline}</h1>
        <p class="sub rise" style="animation-delay:.3s">${e.sub}</p>
        <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
          ${e.stats.map(([e,t])=>`<div class="stat"><div class="n">${e}</div><div class="l">${t}</div></div>`).join(``)}
        </div>
      </div>`},{id:`${e.id}-2`,theme:`light`,title:`Your frontline reality`,html:`
      <div class="slidebody">
        <span class="eyebrow rise">Your frontline reality → what we run for it</span>
        <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">The problems on your ops review, mapped to the platform.</h2>
        <div class="cases" style="grid-template-columns:repeat(2,1fr);margin-top:16px;">
          ${e.pains.map((e,t)=>`<div class="case rise" style="--pc:#1B2D93;animation-delay:${.2+t*.08}s"><div class="ch"><span class="cn">${e.h}</span></div><p>${e.p}</p></div>`).join(``)}
        </div>
      </div>`},{id:`${e.id}-3`,theme:`darker`,title:`Agents for this industry`,html:`
      <div class="slidebody">
        <span class="eyebrow rise">AI Labs · agents built for ${e.label.toLowerCase()}</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Agents that already speak <span style="color:var(--yellow)">your floor's language.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:80ch;">Configured from the same runtime in days — trained on your SOPs, embedded in WhatsApp or your app, deterministic where compliance demands it.</p>
        <div class="agents" style="margin-top:20px;">
          ${e.agents.map((e,t)=>k(e,.26+t*.07)).join(``)}
        </div>
      </div>`},{id:`${e.id}-4`,theme:`dark`,title:`Proof & start`,html:`
      <div class="glow"></div>
      <div class="slidebody">
        <span class="eyebrow rise">Proof nearby · and how we'd start</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">Names you know, numbers you can check.</h2>
        <div style="margin-top:16px;" class="rise">${e.caseHtml}</div>
        <div class="ctacards" style="margin-top:20px;">
          ${e.start.map((e,t)=>`<div class="ctac rise" style="animation-delay:${.4+t*.08}s"><div class="num">0${t+1}</div><h4>${e.h}</h4><p>${e.p}</p></div>`).join(``)}
        </div>
      </div>`}];return t&&n.splice(2,0,t),n}var he=[{id:`ind-retail`,label:`Retail & Q-commerce`,headline:`Every store staffed, trained and <span style="color:var(--yellow)">paid right</span> — festive included.`,sub:`High-churn store and dark-store workforces: hire in bulk, verify fast, roster tight, and gate work on training.`,stats:[[`18,918`,`Reliance Retail stores on platform`],[`967`,`Zepto sites live`],[`−60%`,`Hiring lead-time`]],pains:[{h:`Festive ramp: 300 staff in 3 weeks`,p:`Post once; AI screens overnight; recruiters meet a ranked shortlist. Offers, BGV and onboarding run on the workers’ own phones.`},{h:`Attrition eats your training budget`,p:`Reels-style vernacular courses on the worker’s phone — 88% completion, and rehires keep their record and certificates.`},{h:`Dark-store attendance you can’t trust`,p:`Face-verified, geo-fenced check-in with AI spoof detection — Zepto runs 15,000 workers on it across 22 cities.`},{h:`Store staff don’t know today’s offers`,p:`A WhatsApp helpdesk agent answers from your merchandising docs — 24/7, in Hindi, Tamil or Telugu.`}],agents:[{name:`AI Nova`,role:`Store helpdesk`,desc:`Answers offers, returns and policy questions from your own docs — 24/7, no human handoff.`,color:`#32CAD4`,status:`live`},{name:`AI Mia`,role:`Rider onboarding`,desc:`Docs, ID verification and safety training — riders certified in 45 minutes, delivery gated on completion.`,color:`#FF7A59`,status:`live`},{name:`AI Jack`,role:`Bulk screening`,desc:`Screens festive-season applicants over WhatsApp and hands recruiters a ranked shortlist by morning.`,color:`#7C6BF0`,status:`beta`},{name:`AI Remy`,role:`Shrink & audit`,desc:`Runs store audit checklists with camera proof inside chat — flags gaps to the area manager.`,color:`#FFC401`,status:`soon`},{name:`AI Theo`,role:`Product knowledge`,desc:`Quizzes staff on new SKUs and offers each morning — two minutes, on their phones.`,color:`#3DBE7B`,status:`live`},{name:`AI Zara`,role:`Roster & no-shows`,desc:`Fills tomorrow’s shift gaps, chases confirmations and flags likely no-shows before they happen.`,color:`#FF9518`,status:`beta`}],caseHtml:`<div class="cases"><div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">Reliance Retail</span><span class="ct">300K+ workers · 3,000+ vendors</span></div><p>One integrated system replacing manual compliance — plus 500K+ associates trained in 14 languages, live in 8 weeks.</p><div class="cm"><div class="m"><div class="mn">90%</div><div class="ml">↓ payroll leakage</div></div><div class="m"><div class="mn">60%+</div><div class="ml">↓ training cost</div></div></div></div><div class="case" style="--pc:#D0271D"><div class="ch"><span class="cn">Zepto</span><span class="ct">Quick-commerce · 22 cities</span></div><p>Spoof-proof attendance and training-gated dispatch: only certified riders deliver.</p><div class="cm"><div class="m"><div class="mn">40%</div><div class="ml">cost savings</div></div><div class="m"><div class="mn">15k</div><div class="ml">workers</div></div></div></div></div>`,start:[{h:`Pilot one region’s stores`,p:`Attendance + training on 20 stores for one quarter — measure leakage and completion yourself.`},{h:`Festive-readiness sprint`,p:`One requisition run end-to-end before your next peak: sourced, screened, verified, onboarded.`},{h:`Store helpdesk agent in a week`,p:`Trained on your merchandising docs; your area managers stop being the FAQ.`}]},{id:`ind-mfg`,label:`Manufacturing`,headline:`Contract labour, <span style="color:var(--yellow)">compliant to the last challan.</span>`,sub:`Multi-vendor plants with real statutory exposure: spoof-proof attendance, vendor challan reconciliation and safety training with an audit trail.`,stats:[[`−80%`,`Vendor non-compliance risk`],[`−90%`,`Payroll leakage`],[`100%`,`Induction audit trail`]],pains:[{h:`Principal-employer liability is yours`,p:`When a contractor underpays PF/ESI, the exposure lands on you. Challan OCR reconciles paid vs due, worker-by-worker, every month.`},{h:`Gate attendance ≠ line attendance`,p:`Face-verified, geo-fenced check-in with AI spoof detection — buddy punching ends, and payroll computes from reality.`},{h:`Safety induction as paperwork`,p:`A deterministic induction agent runs every SOP step with video verification and a quiz — ISO-ready logs, no skipped steps.`},{h:`Technicians’ certifications lapse silently`,p:`Role–skill mapping tracks who is certified for what; ~30% of technical certifications lapse without it. Havells trains field engineers this way.`}],agents:[{name:`AI Rhea`,role:`Safety induction`,desc:`Walks every worker through SOP steps with video verification and a quiz — deterministic, audit-ready.`,color:`#3DBE7B`,status:`live`},{name:`AI Cole`,role:`Contractor verification`,desc:`Face-match, OCR and API checks on every vendor worker’s documents before they enter the gate.`,color:`#32CAD4`,status:`beta`},{name:`AI Dev`,role:`Statutory watchdog`,desc:`Chases vendor challans, reads them by OCR and flags short-payments to the principal employer.`,color:`#FFC401`,status:`beta`},{name:`AI Theo`,role:`Technical tutor`,desc:`Answers machine and SOP questions in the operator’s language, citing your manuals — 4 seconds, any shift.`,color:`#7C6BF0`,status:`live`},{name:`AI Zara`,role:`Shift & shortfall`,desc:`Spots tomorrow’s shortfalls, messages the vendor SPOC and tracks the replacement to the gate.`,color:`#FF9518`,status:`soon`},{name:`AI Max`,role:`Toolbox-talk coach`,desc:`Runs supervisors through incident-response roleplays and scores clarity before they lead the real talk.`,color:`#FF7A59`,status:`soon`}],caseHtml:`<div class="cases" style="grid-template-columns:1fr;"><div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">Reliance Retail (vendor model)</span><span class="ct">3,000+ vendors under one rule engine</span></div><p>The same vendor-compliance machinery manufacturing needs: challan OCR, per-vendor deployment rules and documented due diligence under contract-labour law. Havells runs multilingual technical training for field engineers on skillBetter.</p><div class="cm"><div class="m"><div class="mn">80%</div><div class="ml">↓ vendor non-compliance</div></div><div class="m"><div class="mn">90%</div><div class="ml">↓ payroll leakage</div></div></div></div></div>`,start:[{h:`One plant, one quarter`,p:`Attendance + vendor compliance on a single plant; your CFO sees the statutory gap report in month one.`},{h:`Challan health check`,p:`Last month’s vendor challans through our OCR — every short-payment and wrong UAN, itemised.`},{h:`Safety agent pilot`,p:`Your induction SOP as a deterministic agent, with camera proof and certificates, in two weeks.`}],caps:{eyebrow:`Built for contract labour on the factory floor`,headline:`The compliance surface a plant actually runs on.`,foot:`Everything ties to one worker record — so a gate pass can’t issue without a valid work order, BGV and safety induction behind it.`,items:[{h:`Work-order deployment`,p:`Every contract worker mapped to a work order / PO; headcount, wages and billing tracked against it, per contractor.`},{h:`CLRA compliance`,p:`Contract Labour Act registers, licence limits and principal-employer obligations tracked — worker counts stay inside each contractor’s licensed strength.`},{h:`WC / EC policy tracking`,p:`Workmen’s Compensation cover recorded per worker and contractor; expiries flagged before anyone works uninsured.`},{h:`Gate pass`,p:`Digital gate-pass issue and expiry for workers and visitors; entry gated on a valid pass, biometric at the gate, VAMS-style visitor flow.`},{h:`Factory approval flows`,p:`Multi-level, plant-specific approval chains for deployment, regularisation, overtime and exits — configured to how your plant signs off.`},{h:`Safety induction gating`,p:`Induction SOP + quiz + certificate required before a pass activates; ISO-ready audit logs for every worker who entered.`}]}},{id:`ind-log`,label:`Logistics & Delivery`,headline:`Riders on the road in <span style="color:var(--yellow)">45 minutes</span>, not 3 days.`,sub:`Hyper-churn fleets across hundreds of cities: verify fast, onboard on the phone, train before dispatch, and scale gig capacity on demand.`,stats:[[`45 min`,`Rider onboarding`],[`<24 hr`,`BGV turnaround`],[`<4%`,`Gig no-show rate`]],pains:[{h:`Churn means you hire all year`,p:`WhatsApp-apply with no app install, AI screening overnight, and rehires who clear verification in minutes from the 25M-profile pool.`},{h:`An unverified rider is a brand risk`,p:`50K+ BGV cases a day with liveness-checked identity — Swiggy and Licious trust every worker from day one.`},{h:`Untrained riders break the promise`,p:`Zepto gates order dispatch on training completion via API — only certified riders deliver against the 10-minute promise.`},{h:`Demand spikes don’t wait for hiring`,p:`gigBetter deploys 1 to 500+ workers in under 24 hours, billed only on GPS-and-photo-verified tasks.`}],agents:[{name:`AI Mia`,role:`Rider onboarding`,desc:`DL photo, API verification, safety training and certificate — one WhatsApp thread, 45 minutes.`,color:`#FF7A59`,status:`live`},{name:`AI Cole`,role:`Instant re-verification`,desc:`Returning riders re-clear identity and records in minutes — churn stops costing you BGV fees twice.`,color:`#32CAD4`,status:`beta`},{name:`AI Zara`,role:`ETA & no-show`,desc:`Confirms tomorrow’s shifts, chases silent riders and flags hubs heading for a shortfall.`,color:`#FF9518`,status:`beta`},{name:`AI Theo`,role:`On-road helpdesk`,desc:`COD disputes, app issues, customer-refused-delivery — answered from your SOPs in the rider’s language.`,color:`#3DBE7B`,status:`live`},{name:`AI Jack`,role:`Fleet screening`,desc:`Screens thousands of applicants overnight and ranks them by fit, licence and locality.`,color:`#7C6BF0`,status:`beta`},{name:`AI Kai`,role:`Hub safety briefing`,desc:`Runs the morning safety brief as a 2-minute quiz with strikes — completion visible per hub.`,color:`#FFC401`,status:`soon`}],caseHtml:`<div class="cases"><div class="case" style="--pc:#D0271D"><div class="ch"><span class="cn">Zepto</span><span class="ct">22 cities · 967 sites</span></div><p>Attendance, dashboards and training-gated dispatch for 15,000 frontline workers.</p><div class="cm"><div class="m"><div class="mn">40%</div><div class="ml">cost savings</div></div></div></div><div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">Amazon · GSF Learning Academy</span><span class="ct">E-commerce &amp; logistics</span></div><p>Role-aware learning with 222 custom audits across two business units, in multiple Indian languages.</p><div class="cm"><div class="m"><div class="mn">91%</div><div class="ml">completion vs &lt;30%</div></div></div></div></div>`,start:[{h:`One-hub onboarding pilot`,p:`New riders onboard through AI Mia for two weeks — time each one, then compare with today.`},{h:`BGV speed test`,p:`50 riders, all checks, <24-hour reports — benchmarked against your current vendor.`},{h:`Peak-day gig burst`,p:`Your next sale event staffed by outcome-billed gig workers with GPS-verified tasks.`}]},{id:`ind-bfsi`,label:`BFSI & Field Sales`,headline:`A sales force that’s <span style="color:var(--yellow)">coached before every call.</span>`,sub:`Distributed agents and field sellers: verified hiring, regulator-proof training records and AI roleplay coaching at IFFCO Tokio scale.`,stats:[[`~30,000`,`Sales pros coached by AI Max`],[`100%`,`Compliance audit trail`],[`<24 hr`,`Agent BGV TAT`]],pains:[{h:`Compliance training below 40%, regulators watching`,p:`Deterministic assessment flows take every agent through every step — 100% audit trail, exportable for the regulator.`},{h:`New reps take 3 months to reach quota`,p:`AI roleplay across 20+ scenarios scores tone, empathy and accuracy — reps practise on the bot, not on customers.`},{h:`Field attrition wipes out training spend`,p:`Records and certifications live on the worker profile — rehires restart in minutes, not from zero.`},{h:`Who exactly is selling in your name?`,p:`Six-point BGV with liveness-checked identity and EPFO employment history on every field agent.`}],agents:[{name:`AI Max`,role:`Sales roleplay coach`,desc:`Live customer roleplays with tone and accuracy scoring — training ~30,000 sales pros at IFFCO Tokio.`,color:`#FF7A59`,status:`live`},{name:`AI Vera`,role:`Compliance assessor`,desc:`Runs mandatory certifications as deterministic flows — every step, every agent, regulator-ready logs.`,color:`#FFC401`,status:`beta`},{name:`AI Theo`,role:`Product tutor`,desc:`Policy features, exclusions and claim rules answered from your product docs, cited, in 24 languages.`,color:`#3DBE7B`,status:`live`},{name:`AI Jack`,role:`Advisor screening`,desc:`Screens advisor applicants over WhatsApp and ranks by fit before your branch managers meet them.`,color:`#7C6BF0`,status:`beta`},{name:`AI Cole`,role:`Agent verification`,desc:`Identity, address, court and credit checks on every field agent — red cases triaged on one dashboard.`,color:`#32CAD4`,status:`beta`},{name:`AI Kai`,role:`Pitch-of-the-week`,desc:`Pushes a 3-minute practice scenario each Monday and shows managers who’s match-fit.`,color:`#FF9518`,status:`soon`}],caseHtml:`<div class="cases" style="grid-template-columns:1fr;"><div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">IFFCO Tokio</span><span class="ct">Insurance · pan-India field sales</span></div><p>AI Max coaches ~30,000 sales professionals through live roleplays with tone scoring — and the team is building more agents on the same runtime. Mahindra Holidays runs 1,000+ HNI telesales execs sourced and managed by staffBetter.</p><div class="cm"><div class="m"><div class="mn">20+</div><div class="ml">roleplay scenarios</div></div><div class="m"><div class="mn">Always on</div><div class="ml">coaching</div></div></div></div></div>`,start:[{h:`Roleplay pilot for one region`,p:`AI Max configured on your top two products; branch managers see scores in a fortnight.`},{h:`Compliance-flow conversion`,p:`Your most audited certification rebuilt as a deterministic flow with a full trail.`},{h:`Advisor onboarding funnel`,p:`Screen, verify and certify one month’s advisor intake on the platform end-to-end.`}]},{id:`ind-tech`,label:`Tech & Services`,headline:`Field engineers who <span style="color:var(--yellow)">answer from your manual</span> — in 4 seconds.`,sub:`Installation, repair and facility teams: verified technicians, certification tracking, and an AI tutor that knows your service manual by heart.`,stats:[[`88%`,`Training completion vs 25%`],[`35+`,`Languages`],[`<15 min`,`Content translation`]],pains:[{h:`A technician in Madurai, a manual in English`,p:`They ask in Tamil; the answer comes from YOUR service manual in 4 seconds, cited. One upload, every language.`},{h:`Certifications lapse, jobs get re-done`,p:`Role–skill mapping and proctored assessments keep every engineer’s certification current — and visible.`},{h:`Subcontractor techs, your brand on the doorbell`,p:`Six-point BGV plus face-verified attendance for every third-party engineer who represents you.`},{h:`Service demand spikes by season`,p:`gigBetter deploys verified field workers in under 24 hours — audits, installs, activations — outcome-billed.`}],agents:[{name:`AI Theo`,role:`Service-manual tutor`,desc:`Cited answers from your manuals and SOPs, any language, 24×7 — the senior engineer who never sleeps.`,color:`#3DBE7B`,status:`live`},{name:`AI Rhea`,role:`Install verification`,desc:`Guides the install checklist with camera proof at each step — quality documented before the van leaves.`,color:`#32CAD4`,status:`beta`},{name:`AI Mia`,role:`Engineer onboarding`,desc:`Contract, ID, tools checklist and first-job briefing on the engineer’s own phone, in under an hour.`,color:`#FF7A59`,status:`live`},{name:`AI Max`,role:`Customer-visit coach`,desc:`Roleplays tricky doorstep conversations — upset customers, upsells — and scores the pitch.`,color:`#FFC401`,status:`soon`},{name:`AI Cole`,role:`Subcontractor BGV`,desc:`Verifies every third-party technician before they carry your brand into a home.`,color:`#7C6BF0`,status:`beta`},{name:`AI Zara`,role:`Job & roster`,desc:`Confirms tomorrow’s job list, flags overloaded engineers and chases unaccepted assignments.`,color:`#FF9518`,status:`soon`}],caseHtml:`<div class="cases"><div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">Havells</span><span class="ct">Electrical manufacturing · field service</span></div><p>Technical training for field engineers — multilingual delivery, integrated with their PMS.</p><div class="cm"><div class="m"><div class="mn">PMS</div><div class="ml">integrated</div></div></div></div><div class="case" style="--pc:#32CAD4"><div class="ch"><span class="cn">Urban Company ecosystem</span><span class="ct">Services marketplace</span></div><p>Frontline service professionals verified and trained on the same platform primitives.</p><div class="cm"><div class="m"><div class="mn">25M+</div><div class="ml">verified profiles</div></div></div></div></div>`,start:[{h:`Manual-to-tutor in a week`,p:`Your service manual becomes an AI tutor; give 50 engineers access and read the query log together.`},{h:`Certification audit`,p:`Map current vs required certifications across one product line — see the lapse rate today.`},{h:`One-city field pilot`,p:`Attendance, jobs and training for one service city, one quarter.`}]}].map(e=>({id:e.id,title:e.label,tagline:e.sub,group:`industry`,slides:me(e)})),ge=[{id:`inc1`,theme:`dark`,title:`COVER`,html:`
    <div class="incd">
    <div class="glow"></div>
    <div style="position:relative;z-index:2;max-width:60%;">
      <span class="eyebrow rise" style="animation-delay:.1s">goBetter Incentives · Product Proposal</span>
      <h1 class="big rise" style="animation-delay:.2s">Every sale rewarded.<br/><span class="tz">Every rupee explained.</span></h1>
      <p class="sub rise" style="animation-delay:.35s">One simple platform to run sales incentives across every store and region — <b style="color:#fff">any brand, any category, any scheme</b>. Set up any scheme, pay accurately, and let every associate see exactly what they've earned.</p>
      <div class="meta rise" style="animation-delay:.5s"><span>Why it matters</span><span>What your team sees</span><span>Build any scheme</span><span>Pay &amp; prove</span></div>
    </div>
    <div class="chero" style="position:absolute;right:clamp(24px,5vw,86px);top:50%;transform:translateY(-50%);width:clamp(300px,34vw,460px);aspect-ratio:1;z-index:1;pointer-events:none;">
      <div style="position:absolute;inset:0;border-radius:50%;border:1px dashed rgba(255,255,255,.14);animation:spinslow 42s linear infinite;"></div>
      <div style="position:absolute;inset:15%;border-radius:50%;border:1px solid rgba(198,161,91,.28);"></div>
      <div style="position:absolute;inset:31%;border-radius:50%;border:1px solid rgba(185,180,245,.28);"></div>
      <div class="rise" style="animation-delay:.4s;position:absolute;inset:0;margin:auto;width:38%;height:38%;border-radius:26px;background:linear-gradient(150deg,var(--titan-2),var(--titan-deep));border:1px solid rgba(255,255,255,.14);display:grid;place-items:center;text-align:center;box-shadow:0 30px 70px -20px rgba(0,0,0,.7),0 0 60px -8px rgba(198,161,91,.4);">
        <div><b style="font-family:var(--disp);font-weight:800;font-size:clamp(.9rem,1.5vw,1.2rem);color:#fff;line-height:1.1;">goBetter<br/><em style="font-style:normal;color:var(--gold);">Incentives</em></b><span style="display:block;font-family:var(--mono);font-size:8px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold-soft);margin-top:8px;">by BetterPlace</span></div>
      </div>
      <div class="cpill p1 rise" style="animation-delay:.6s;position:absolute;top:1%;left:-8%;background:rgba(20,15,64,.78);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.14);border-radius:13px;padding:9px 14px;animation:floaty 6s ease-in-out infinite;"><div style="font-family:var(--disp);font-weight:800;font-size:1.2rem;color:#fff;line-height:1;"><em style="font-style:normal;color:var(--gold);">50K</em>+</div><div style="font-family:var(--mono);font-size:8.5px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.6);margin-top:4px;">Associates, one platform</div></div>
      <div class="cpill p2 rise" style="animation-delay:.75s;position:absolute;top:-2%;right:-4%;background:rgba(20,15,64,.78);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.14);border-radius:13px;padding:9px 14px;animation:floaty 6s ease-in-out infinite 1.3s;"><div style="font-family:var(--disp);font-weight:800;font-size:1.2rem;color:#fff;line-height:1;"><em style="font-style:normal;color:var(--gold);">Millions</em></div><div style="font-family:var(--mono);font-size:8.5px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.6);margin-top:4px;">Sales counted / month</div></div>
      <div class="cpill p3 rise" style="animation-delay:.9s;position:absolute;bottom:7%;left:-11%;background:rgba(20,15,64,.78);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.14);border-radius:13px;padding:9px 14px;animation:floaty 6s ease-in-out infinite .7s;"><div style="font-family:var(--disp);font-weight:800;font-size:1.2rem;color:#fff;line-height:1;">To the <em style="font-style:normal;color:var(--gold);">rupee</em></div><div style="font-family:var(--mono);font-size:8.5px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.6);margin-top:4px;">Accurate &amp; explained</div></div>
      <div class="cpill p4 rise" style="animation-delay:1.05s;position:absolute;bottom:0;right:-6%;background:rgba(20,15,64,.78);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.14);border-radius:13px;padding:9px 14px;animation:floaty 6s ease-in-out infinite 2s;"><div style="font-family:var(--disp);font-weight:800;font-size:1.05rem;color:#fff;line-height:1.15;">Retail · BFSI<br/>Insurance · Pharma</div><div style="font-family:var(--mono);font-size:8.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--gold-soft);margin-top:4px;">One engine, any industry</div></div>
    </div>
  
    </div>`},{id:`inc2`,theme:`light`,title:`WHO WE ARE`,html:`
    <div class="incd">
    <div class="slidebody">
      <span class="eyebrow rise">Who's behind it · BetterPlace</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:24ch;">The frontline-workforce platform you already know — now with incentives.</h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:12px;">BetterPlace already helps 1,000+ companies across Asia hire, onboard, train, manage and pay their frontline teams. <b style="color:var(--titan)">goBetter Incentives</b> is the newest part of that platform — made for large store and field-sales teams.</p>
      <div class="stats rise" style="animation-delay:.24s;gap:20px 46px;margin-top:26px;">
        <div class="stat"><div class="n"><em>25</em>M+</div><div class="l">Worker profiles</div></div>
        <div class="stat"><div class="n">1,000+</div><div class="l">Enterprises powered</div></div>
        <div class="stat"><div class="n">500+</div><div class="l">Cities across Asia</div></div>
        <div class="stat"><div class="n">10+</div><div class="l">Years on the frontline</div></div>
      </div>
      <div class="pillars rise" style="animation-delay:.34s;grid-template-columns:repeat(3,1fr);margin-top:26px;">
        <div class="pcard" style="--pc:var(--navy)"><div class="pic"><svg viewBox="0 0 24 24"><path d="M3 3h18v4H3zM3 10h18v11H3z"/><path d="M8 14h8"/></svg></div><div class="tag">Manage &amp; pay</div><h3>goBetter</h3><p>Attendance, payroll &amp; compliance for the frontline — the suite enterprise retailers run their stores on.</p></div>
        <div class="pcard" style="--pc:var(--titan);box-shadow:0 16px 44px rgba(51,47,135,.16)"><div class="pic" style="background:#EEEBFB;color:var(--titan)"><svg viewBox="0 0 24 24"><path d="M12 2v20M5 7l7-4 7 4M5 7v10l7 4 7-4V7"/></svg></div><div class="tag" style="color:var(--titan)">In this proposal</div><h3>goBetter Incentives <span class="module-badge" style="vertical-align:middle;">Module</span></h3><p>Config-driven, AI-led incentive calculation, communication &amp; payout — for every associate on the floor.</p></div>
        <div class="pcard" style="--pc:var(--navy)"><div class="pic"><svg viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg></div><div class="tag">Also available</div><h3>verifyBetter · skillBetter</h3><p>AI background verification &amp; a vernacular LMS — the rest of the frontline stack, ready when you are.</p></div>
      </div>
    </div>
  
    </div>`},{id:`inc3`,theme:`light`,title:`THE PROBLEM (retail salesperson POV)`,html:`
    <div class="incd">
    <div class="slidebody">
      <span class="eyebrow rise">The floor today</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:26ch;">Your team makes the sale — then waits weeks to find out what they earned.</h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">Incentives are the biggest day-to-day lever you have on the floor. But across hundreds of stores they're still worked out on spreadsheets — and that costs you where it hurts most: your team's motivation.</p>
      <div class="probgrid rise" style="animation-delay:.24s;margin-top:20px;">
        <div class="prob"><h4><svg viewBox="0 0 24 24"><path d="M4 4h16v4H4zM4 12h16M4 18h10"/></svg>Endless spreadsheets</h4><p>Hundreds of stores and dozens of schemes across brands and categories — added up by hand, every single month.</p></div>
        <div class="prob"><h4><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>No live visibility</h4><p>Staff can't see what they've earned or how close they are to the next reward — so the scheme quietly stops motivating them.</p></div>
        <div class="prob"><h4><svg viewBox="0 0 24 24"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.1L12 17l-5.5 2.3 1-6.1L3 8.9 9 8z"/></svg>Festival-month chaos</h4><p>Diwali, Dhanteras and wedding season pile up short special schemes — at the busiest, highest-pressure time of the year.</p></div>
        <div class="prob"><h4><svg viewBox="0 0 24 24"><path d="M8 12h8M12 8v8"/><circle cx="12" cy="12" r="9"/></svg>Disputes &amp; returns</h4><p>Split credit, exchanges and returns after payday — every one turns into a back-and-forth with no clear record to point to.</p></div>
        <div class="prob"><h4><svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>Owned &amp; franchise gaps</h4><p>Company and franchise stores run the same schemes differently, with no single view across the whole network.</p></div>
        <div class="prob"><h4><svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 14l3-3 3 3 5-6"/></svg>Managers flying blind</h4><p>Store and area managers can't see who to push or what the month will cost — until the money's already been spent.</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.4s;">The same tool that works out the number should also <b>show every associate their number, live — and prove it.</b></div>
    </div>
  
    </div>`},{id:`inc4`,theme:`dark`,title:`MEET THE PRODUCT`,html:`
    <div class="incd">
    <div class="slidebody">
      <span class="eyebrow rise">Meet goBetter Incentives</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:24ch;">One place to set up, calculate, pay — and explain — every incentive.</h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:82ch;">Most tools only do the maths. goBetter Incentives does the whole job: set up any scheme, pull in your sales automatically, pay accurately, and put a live, clearly-explained number in every associate's pocket.</p>
      <div class="pillars rise" style="animation-delay:.26s;grid-template-columns:repeat(4,1fr);margin-top:24px;">
        <div class="pcard" style="--pc:var(--titan);background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.12);box-shadow:none;">
          <div class="pic" style="background:rgba(255,255,255,.08);color:var(--gold-soft)"><svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h10"/><circle cx="18" cy="18" r="2.5"/></svg></div>
          <h3 style="color:#fff;font-size:1.15rem;">Configure</h3><p style="color:rgba(255,255,255,.72)">Any plan as pure config — studded spiffs, gold-grammage slabs, festive boosters. No code, no engineering ticket.</p>
        </div>
        <div class="pcard" style="--pc:var(--gold);background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.12);box-shadow:none;">
          <div class="pic" style="background:rgba(255,255,255,.08);color:var(--gold-soft)"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18z"/><path d="M12 7v5l3 2"/><path d="M3 3l2 2M21 3l-2 2"/></svg></div>
          <h3 style="color:#fff;font-size:1.15rem;">AI-led</h3><p style="color:rgba(255,255,255,.72)">Describe a scheme in plain language → a working plan. AI sets fair targets, simulates cost, flags gaming.</p>
        </div>
        <div class="pcard" style="--pc:var(--navy-2);background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.12);box-shadow:none;">
          <div class="pic" style="background:rgba(255,255,255,.08);color:var(--gold-soft)"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg></div>
          <h3 style="color:#fff;font-size:1.15rem;">Calculate &amp; pay</h3><p style="color:rgba(255,255,255,.72)">Compute at fleet scale, approve with maker-checker, export to payroll, lock the period. Returns handled as clawbacks.</p>
        </div>
        <div class="pcard" style="--pc:var(--teal);background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.12);box-shadow:none;">
          <div class="pic" style="background:rgba(255,255,255,.08);color:var(--gold-soft)"><svg viewBox="0 0 24 24"><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M11 18h2"/></svg></div>
          <h3 style="color:#fff;font-size:1.15rem;">Communicate</h3><p style="color:rgba(255,255,255,.72)">Every associate sees a live, gamified, fully-explained number — and can query it. Managers see the whole floor.</p>
        </div>
      </div>
      <div class="kicker rise" style="animation-delay:.44s;background:linear-gradient(90deg,var(--titan),var(--titan-deep));"><svg viewBox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg><span>Multi-tenant &amp; industry-agnostic — the same engine already runs retail, BFSI, insurance &amp; pharma fleets. <b>Your brands are configurations, not custom builds.</b></span></div>
    </div>
  
    </div>`},{id:`inc5`,theme:`dark`,title:`THE ASSOCIATE'S DAY (mobile)`,html:`
    <div class="incd">
    <div class="slidebody">
      <div class="split narrowviz">
        <div>
          <span class="eyebrow rise">A day for Arjun · Sales Associate</span>
          <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:20ch;">Their earnings — live in their pocket, and explained.</h2>
          <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">No waiting for month-end. Between customers, they open the app and see exactly where they stand — and what one more sale is worth today.</p>
          <div class="featlist rise" style="animation-delay:.26s;margin-top:18px;">
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18z"/><path d="M12 7v5l3 2"/></svg></div><div><h4 style="color:#fff">This month's earnings, live</h4><p>Their earnings, target progress and today's sales update the moment a bill is rung — no month-end surprise.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg></div><div><h4 style="color:#fff">"₹1.1L more unlocks +₹2,500"</h4><p>A gentle nudge turns the scheme into a clear goal for the shift — and pushes the products you want to sell.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M12 15l-5 3 2-6-5-4h6l2-6 2 6h6l-5 4 2 6z"/></svg></div><div><h4 style="color:#fff">Streaks, levels &amp; store leaderboard</h4><p>A bit of friendly competition on the floor — and recognition for the store's top sellers each month.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg></div><div><h4 style="color:#fff">Every ₹0 explained — and easy to question</h4><p>If something's held, they see the reason in plain words and can ask about it in one tap. Fewer escalations to HR.</p></div></div>
          </div>
        </div>
        <div class="phonewrap rise" style="animation-delay:.3s;">
          <div class="phone">
            <div class="pscr">
              <div class="rhero">
                <div class="abar"><span>9:41</span><span class="dotrow"><i></i><i></i><i></i></span></div>
                <div class="rh-top">
                  <div><div class="rh-name">Hi Arjun · Sales Associate</div><div class="rh-loc"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>Flagship store · Pune</div></div>
                  <span class="streak"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h6l-1 8 10-13h-7z"/></svg>9-day streak</span>
                </div>
                <div class="rh-mid">
                  <div class="ring">
                    <svg width="96" height="96" viewBox="0 0 96 96"><circle cx="48" cy="48" r="42" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="8"/><circle cx="48" cy="48" r="42" fill="none" stroke="#C6A15B" stroke-width="8" stroke-linecap="round" stroke-dasharray="264" stroke-dashoffset="58"/></svg>
                    <div class="rc-lbl"><span class="rc-pct">78%</span><span class="rc-cap">of target</span></div>
                  </div>
                  <div><div class="rh-amt-cap">July incentive</div><div class="rh-amt">₹18,400</div><div class="rh-sub">₹9.4L sold of ₹12L target</div><div class="rh-today"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17l6-6 4 4 8-8"/></svg>Today: ₹1.6L · 4 sales</div></div>
                </div>
                <svg class="wave" viewBox="0 0 300 60" fill="none" preserveAspectRatio="none"><path d="M0 35 C60 10 110 55 180 30 C240 8 270 38 300 22" stroke="#C6A15B" stroke-width="9" stroke-linecap="round"/></svg>
              </div>
              <div class="rbody">
                <div class="rcard nudge">
                  <div class="rc-row"><span class="ic gold"><svg viewBox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg></span><div><div class="rc-t">₹1.1L more in sales unlocks +₹2,500</div><div class="rc-d">Reach 100% under "Diwali booster" and your payout steps up.</div></div></div>
                </div>
                <div class="rgrid">
                  <div class="rmini"><div class="rm-h"><span class="rm-ic" style="background:var(--gold)"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="5"/><path d="M8 21l4-3 4 3"/></svg></span><div><div class="rm-t">Gold tier</div><div class="rm-s">₹1.9L lifetime</div></div></div><div class="rm-bar"><i style="width:64%"></i></div><div class="rm-note">64% to Platinum</div></div>
                  <div class="rmini"><div class="rm-h"><span class="rm-ic" style="background:var(--navy)"><svg viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M6 4h12v5a6 6 0 01-12 0z"/></svg></span><div><div class="rm-t">Rank #4</div><div class="rm-s">of 38 · store</div></div></div><div class="rm-bar"><i style="width:88%;background:var(--navy)"></i></div><div class="rm-note">Top 7% this month</div></div>
                </div>
                <div class="rcard"><div class="rc-row"><span class="ic rose"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg></span><div><div class="rc-t">1 held payout — here's why</div><div class="rc-d">"Diwali booster": 2 smartwatches returned within 7 days. Tap to see the adjustment.</div></div></div></div>
              </div>
              <div class="anav">
                <div class="ni on"><svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8M5 10v10h14V10"/></svg>Home<span class="u"></span></div>
                <div class="ni"><svg viewBox="0 0 24 24"><path d="M6 4h12v5a6 6 0 01-12 0z"/><path d="M12 15v4M8 21h8"/></svg>Ranks</div>
                <div class="ni"><svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h5"/></svg>Earnings</div>
                <div class="ni"><svg viewBox="0 0 24 24"><path d="M4 4h16v12H5.2L4 18z"/></svg>Inbox</div>
              </div>
            </div>
          </div>
          <div class="phone small r" style="align-self:flex-end;">
            <div class="pscr">
              <div class="lbhero">
                <div class="abar"><span>9:41</span><span class="dotrow"><i></i><i></i><i></i></span></div>
                <h4>Leaderboard</h4><p>July · Flagship store, Pune · 38 associates</p>
              </div>
              <div class="podium">
                <div class="pod"><div class="av sm">RK</div><div class="card rank2"><div class="nm">Ravi</div><div class="amt">₹24.1K</div><div class="rk">#2</div></div></div>
                <div class="pod first"><div class="crown"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 7l5 4 4-6 4 6 5-4-2 12H5z"/></svg></div><div class="av">AS</div><div class="card"><div class="nm">Anjali</div><div class="amt">₹26.8K</div><div class="rk">#1</div></div></div>
                <div class="pod"><div class="av sm">MP</div><div class="card rank3"><div class="nm">Meera</div><div class="amt">₹22.0K</div><div class="rk">#3</div></div></div>
              </div>
              <div class="lbrows">
                <div class="lbrow me"><span class="rn">4</span><span class="av2">PS</span><span class="nm">You</span><span class="amt">₹18.4K</span></div>
                <div class="lbrow"><span class="rn">5</span><span class="av2">DV</span><span class="nm">Deepak V.</span><span class="amt">₹17.2K</span></div>
                <div class="lbrow"><span class="rn">6</span><span class="av2">SN</span><span class="nm">Sneha N.</span><span class="amt">₹15.9K</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vizcap rise" style="animation-delay:.5s">The goBetter Incentives associate app · the same experience across every brand you run</div>
    </div>
  
    </div>`},{id:`inc6`,theme:`light`,title:`THE PLAN BUILDER (animated, multi-brand)`,html:`
    <div class="incd">
    <div class="slidebody">
      <div class="split narrowviz">
        <div>
          <span class="eyebrow rise">Build any scheme, in minutes</span>
          <h2 class="rise" style="animation-delay:.08s;max-width:20ch;">Any brand. Any reward. No IT project.</h2>
          <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">Your team sets up a new incentive the way they'd fill a form — pick the business, pick the brand, pick how the reward works, and it's live. The same builder covers every brand and format you run.</p>
          <div class="featlist rise" style="animation-delay:.24s;margin-top:16px;">
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg></div><div><h4>Pick the brand &amp; category</h4><p>Every business, brand and store format — or run one scheme across all of them.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h10"/></svg></div><div><h4>Choose how the reward works</h4><p>Ready-made choices in plain words — % of sales, ₹ per item, a target bonus, a festival booster, or a team reward.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.1L12 17l-5.5 2.3 1-6.1L3 8.9 9 8z"/></svg></div><div><h4>Or just describe it — AI builds it</h4><p>Type the scheme in a sentence and it's set up for you, ready to review. No formulas to write.</p></div></div>
          </div>
        </div>
        <div class="rise" style="animation-delay:.3s">
          <div class="win" id="builder" data-step="0">
            <div class="wbar"><span class="wd"><i></i><i></i><i></i></span><span class="wt"><b>goBetter Incentives</b> · New scheme</span></div>
            <div class="wbody">
              <div class="bsteps">
                <div class="bstep"><span class="bn">1</span>Business</div>
                <div class="bstep"><span class="bn">2</span>Brand</div>
                <div class="bstep"><span class="bn">3</span>Reward</div>
                <div class="bstep"><span class="bn">4</span>Done</div>
              </div>
              <div class="bcrumbs">
                <span class="bcrumb">Watches</span><span class="bcrumb"><span class="sep">›</span>Flagship</span><span class="bcrumb"><span class="sep">›</span>Festival booster</span>
              </div>
              <div class="bstagewrap">
                <!-- Stage 1 · Business -->
                <div class="bstage">
                  <div class="bq">Which business is this scheme for?</div>
                  <div class="btiles c5">
                    <div class="btile sel"><span class="bchk"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg></span><span class="bi"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 9v3l2 1"/></svg></span><div class="bt">Watches</div></div>
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><path d="M12 3l3 5 5 .7-3.6 3.5.9 5-5.3-2.6L6.7 17l.9-5L4 8.7 9 8z"/></svg></span><div class="bt">Jewellery</div></div>
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><circle cx="7" cy="14" r="4"/><circle cx="17" cy="14" r="4"/><path d="M11 13h2M2 10l3 1M22 10l-3 1"/></svg></span><div class="bt">Eyewear</div></div>
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="3"/><path d="M11 7h2"/></svg></span><div class="bt">Wearables</div></div>
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><path d="M9 3h6v3H9zM8 6h8l1 15H7z"/></svg></span><div class="bt">Fragrances</div></div>
                  </div>
                </div>
                <!-- Stage 2 · Brand -->
                <div class="bstage">
                  <div class="bq">Which brand?</div>
                  <div class="btiles c4">
                    <div class="btile sel"><span class="bchk"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg></span><div class="bt" style="margin-top:6px">Flagship</div><div class="bts">Own stores</div></div>
                    <div class="btile"><div class="bt" style="margin-top:6px">Youth brand</div><div class="bts">Smart · casual</div></div>
                    <div class="btile"><div class="bt" style="margin-top:6px">Value brand</div><div class="bts">Mass market</div></div>
                    <div class="btile"><div class="bt" style="margin-top:6px">Multi-brand</div><div class="bts">Franchise</div></div>
                  </div>
                  <div style="font-size:9.5px;color:var(--muted);margin-top:10px;text-align:center;">…or tick several brands to run one scheme across them</div>
                </div>
                <!-- Stage 3 · Reward type -->
                <div class="bstage">
                  <div class="bq">How should the reward work?</div>
                  <div class="btiles c3">
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><path d="M19 5L5 19M8 6a2 2 0 100 4 2 2 0 000-4zM16 14a2 2 0 100 4 2 2 0 000-4z"/></svg></span><div class="bt">% of sales</div></div>
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6z"/><path d="M9 13h6M9 17h4"/></svg></span><div class="bt">₹ per item</div></div>
                    <div class="btile sel"><span class="bchk"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg></span><span class="bi"><svg viewBox="0 0 24 24"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.1L12 17l-5.5 2.3 1-6.1L3 8.9 9 8z"/></svg></span><div class="bt">Festival booster</div></div>
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18z"/><path d="M12 7v5l3 2"/></svg></span><div class="bt">Target bonus</div></div>
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0112 0"/><circle cx="18" cy="9" r="2"/></svg></span><div class="bt">Team reward</div></div>
                    <div class="btile"><span class="bi"><svg viewBox="0 0 24 24"><path d="M12 4v16M4 12h16"/></svg></span><div class="bt">Something custom</div></div>
                  </div>
                  <div class="airibbon"><span class="ai-ic"><svg viewBox="0 0 24 24"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.1L12 17l-5.5 2.3 1-6.1L3 8.9 9 8z"/></svg></span><div><div class="ai-t">Or just describe it — AI builds it for you</div><div class="ai-s">"Give store staff a Diwali bonus on watches &amp; smartwatches"</div></div></div>
                </div>
                <!-- Stage 4 · Done -->
                <div class="bstage">
                  <div class="planready">
                    <div class="pr-h"><div><div class="pr-t">Diwali booster · flagship stores</div><div class="pr-s">Watches &amp; smartwatches · this festive month</div></div><span class="pr-badge"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>Ready</span></div>
                    <ul>
                      <li><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>2% on watch sales, ₹500 for every smartwatch</li>
                      <li><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>Extra bonus once the store beats its Diwali target</li>
                      <li><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>Adjusted for days worked · capped at ₹40,000</li>
                    </ul>
                    <div class="pr-foot"><div class="pr-stat"><div class="n">62</div><div class="l">associates</div></div><div class="pr-stat"><div class="n">₹4.2L</div><div class="l">projected cost</div></div><div class="pr-stat"><div class="n">1 tap</div><div class="l">to go live</div></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="vizcap" style="margin-top:12px;">The real scheme builder · animated walkthrough</div>
        </div>
      </div>
    </div>
  
    </div>`},{id:`inc7`,theme:`dark`,title:`AI-LED`,html:`
    <div class="incd">
    <div class="slidebody">
      <div class="split rev">
        <div class="rise" style="animation-delay:.28s">
          <div class="copilot">
            <div class="ct-in"><div class="ct-lbl">AI plan copilot</div><div class="ct-q">"Give store staff 2% on watches and ₹500 for every smartwatch, with a Diwali bonus. Cap it at ₹40,000 and adjust for days worked."</div></div>
            <div class="ct-out">
              <span class="ct-tag"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>Scheme ready to review</span>
              <div class="ct-r">Set up as a <b>watch commission</b> plus a per-smartwatch reward and a <b>Diwali bonus</b> — adjusted for days worked and capped at ₹40,000. No formulas to write; just review and launch.</div>
              <div class="ct-chips">
                <span class="ct-chip"><svg viewBox="0 0 24 24"><path d="M19 5L5 19M8 6a2 2 0 100 4 2 2 0 000-4zM16 14a2 2 0 100 4 2 2 0 000-4z"/></svg>2% on watches</span>
                <span class="ct-chip"><svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="3"/></svg>₹500 / smartwatch</span>
                <span class="ct-chip"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h10"/></svg>Cap ₹40,000</span>
              </div>
            </div>
          </div>
          <div class="vizcap" style="margin-top:12px;">Describe the scheme → a working, editable plan</div>
        </div>
        <div>
          <span class="eyebrow rise">What the AI does for you</span>
          <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:20ch;">AI handles the hard parts of incentives.</h2>
          <div class="featlist rise" style="animation-delay:.18s;margin-top:16px;">
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/></svg></div><div><h4 style="color:#fff">Describe it, don't build it</h4><p>Type any scheme in a sentence and it's set up for you — ready to review. No formulas, no waiting on IT.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 14l3-3 3 3 5-6"/></svg></div><div><h4 style="color:#fff">Fair targets, set for you</h4><p>Targets based on what each person actually sells — so the scheme feels reachable, not demoralising.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M12 3l9 4-9 4-9-4 9-4z"/><path d="M3 12l9 4 9-4M3 17l9 4 9-4"/></svg></div><div><h4 style="color:#fff">Try it before you launch</h4><p>Test any scheme on last month's real sales — see the cost and every payout before you commit a rupee.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M12 2a9 9 0 019 9c0 5-4 8-9 11-5-3-9-6-9-11a9 9 0 019-9z"/><path d="M9 11l2 2 4-4"/></svg></div><div><h4 style="color:#fff">Catches mistakes &amp; gaming</h4><p>Spots split bills, sudden month-end spikes and returns-after-payday — before they cost you.</p></div></div>
          </div>
        </div>
      </div>
    </div>
  
    </div>`},{id:`inc8`,theme:`light`,title:`CONNECT YOUR SALES DATA`,html:`
    <div class="incd">
    <div class="slidebody">
      <div class="split">
        <div>
          <span class="eyebrow rise">Your sales data, automatically</span>
          <h2 class="rise" style="animation-delay:.08s;max-width:22ch;">Every sale flows in on its own.</h2>
          <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">Connect your billing once. Every sale — from any store, any brand — comes in automatically. A <b style="color:var(--titan)">watch, a ring and a pair of frames</b> are all counted the same simple way.</p>
          <div class="featlist rise" style="animation-delay:.24s;margin-top:16px;">
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M4 7h16v13H4zM4 7l3-4h10l3 4"/></svg></div><div><h4>Works with what you have</h4><p>Your billing systems, scheduled file uploads and goBetter attendance — for company <b>and</b> franchise stores alike.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M4 9h16M9 9v11"/></svg></div><div><h4>Messy store file? AI sorts it</h4><p>Drop in a store's Excel and AI lines up the columns for you — no manual clean-up needed.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M12 3v18M5 10l7-7 7 7"/></svg></div><div><h4>Nothing double-counts</h4><p>Load the same file twice and it won't pay twice. Every upload is on record — clean for audit.</p></div></div>
          </div>
        </div>
        <div class="rise" style="animation-delay:.3s">
          <div class="win">
            <div class="wbar"><span class="wd"><i></i><i></i><i></i></span><span class="wt"><b>goBetter Incentives</b> · Data</span></div>
            <div class="wbody">
              <div style="font-family:var(--mono);font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:9px;">Connected sources</div>
              <div class="conngrid">
                <div class="conn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M4 7h16v13H4zM4 7l3-4h10l3 4"/></svg></span><div><div class="cn">Store POS feed</div><div class="cs">Bill-level · hourly</div></div><span class="cst on">Connected</span></div>
                <div class="conn"><span class="ci"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8v6H8z"/></svg></span><div><div class="cn">SAP billing</div><div class="cs">Nightly extract</div></div><span class="cst on">Connected</span></div>
                <div class="conn"><span class="ci"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0112 0M16 4a3 3 0 010 6M21 20a6 6 0 00-4-5.6"/></svg></span><div><div class="cn">goBetter HRMS</div><div class="cs">Attendance · roster</div></div><span class="cst on">Connected</span></div>
                <div class="conn"><span class="ci"><svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M4 9h16"/></svg></span><div><div class="cn">Franchise CSV</div><div class="cs">Weekly upload</div></div><span class="cst cfg">Mapping</span></div>
              </div>
              <div class="upl"><span class="doc"><svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/></svg></span><div class="um"><div class="ufn">store_sales_july.xlsx</div><div class="ux">4,812 rows · AI matching columns…</div></div><span class="uok">98% matched</span></div>
              <div style="margin-top:10px;background:#fff;border:1px solid var(--border);border-radius:11px;padding:11px 12px;">
                <div style="font-family:var(--mono);font-size:8px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;">Suggested mapping</div>
                <div class="maprow"><span class="src">Bill_No</span><span class="arr">→</span><span class="dst">Bill number</span><span class="aibadge">AI · 99%</span></div>
                <div class="maprow"><span class="src">Product_Category</span><span class="arr">→</span><span class="dst">Category</span><span class="aibadge">AI · 97%</span></div>
                <div class="maprow" style="border-bottom:0;"><span class="src">Item_Value</span><span class="arr">→</span><span class="dst" style="color:var(--titan)">Sale value</span><span class="aibadge">AI · 98%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    </div>`},{id:`inc9`,theme:`light`,title:`CALCULATE, APPROVE, PAY`,html:`
    <div class="incd">
    <div class="slidebody">
      <span class="eyebrow rise">Calculate · approve · pay · prove</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">From approved to paid — with a record of every rupee.</h2>
      <div class="rail rise" style="animation-delay:.16s;">
        <div class="rstage" style="--rc:var(--teal)"><div class="rn">01</div><h4>Collect</h4><ul><li>Sales &amp; attendance</li><li>Automatic &amp; on record</li></ul></div>
        <div class="rstage" style="--rc:var(--navy-2)"><div class="rn">02</div><h4>Calculate</h4><ul><li>Across every store</li><li>Test, then run</li></ul></div>
        <div class="rstage" style="--rc:var(--titan)"><div class="rn">03</div><h4>Review</h4><ul><li>Check &amp; approve</li><li>Then it's locked</li></ul></div>
        <div class="rstage" style="--rc:var(--amber)"><div class="rn">04</div><h4>Pay</h4><ul><li>Straight to payroll</li><li>Marked as paid</li></ul></div>
        <div class="rstage" style="--rc:var(--green)"><div class="rn">05</div><h4>Adjust</h4><ul><li>Returns adjust</li><li>Questions closed</li></ul></div>
      </div>
      <div class="split" style="margin-top:20px;align-items:stretch;">
        <div class="rise" style="animation-delay:.3s">
          <div class="win">
            <div class="wbar"><span class="wd"><i></i><i></i><i></i></span><span class="wt"><b>Payouts</b> · West region · July 2026 · <span style="color:var(--green)">Approved</span></span></div>
            <div class="wbody">
              <div class="kpi-row" style="grid-template-columns:repeat(4,1fr);">
                <div class="kpi"><div class="kl">Associates</div><div class="kn">61</div><div class="ks">1 store</div></div>
                <div class="kpi"><div class="kl">Eligible</div><div class="kn">57</div><div class="ks">93%</div></div>
                <div class="kpi"><div class="kl">Held</div><div class="kn" style="color:var(--red)">4</div><div class="ks">with reasons</div></div>
                <div class="kpi"><div class="kl">Total payout</div><div class="kn">₹8.6L</div><div class="ks">this period</div></div>
              </div>
              <table class="dtable" style="margin-top:12px;">
                <thead><tr><th>Associate</th><th>Ach.</th><th>Final</th><th>Status</th><th>Why</th></tr></thead>
                <tbody>
                  <tr><td><div class="pname">Anjali S.</div><div class="psub">EMP-2214 · Watches</div></td><td class="num">142%</td><td class="num">₹26,800</td><td><span class="pill ok">Approved</span></td><td><span class="rchip info">Bonus +10%</span></td></tr>
                  <tr><td><div class="pname">Rohan M.</div><div class="psub">EMP-2231 · Watches</div></td><td class="num">108%</td><td class="num">₹18,400</td><td><span class="pill ok">Approved</span></td><td><span class="rchip warn">Adjusted · days worked</span></td></tr>
                  <tr><td><div class="pname">Karan D.</div><div class="psub">EMP-2240 · Sales</div></td><td class="num">61%</td><td class="num">₹0</td><td><span class="pill bad">Held</span></td><td><span class="rchip block">Below target</span></td></tr>
                  <tr><td><div class="pname">Suresh R.</div><div class="psub">EMP-2258 · Smartwatch</div></td><td class="num">—</td><td class="num" style="color:var(--red)">−₹2,100</td><td><span class="pill gold">Return adjust</span></td><td><span class="rchip warn">2 smartwatches returned</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="rise" style="animation-delay:.38s">
          <div class="featlist" style="gap:15px;">
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7H3V5h11"/></svg></div><div><h4>Review, approve, done</h4><p>One person prepares, another approves, then it's locked. Nothing changes quietly after — clean for audit.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1015-6.7L21 3"/><path d="M21 3v6h-6"/></svg></div><div><h4>Returns adjust automatically</h4><p>A return or exchange after payday is handled on its own — the adjustment carries into the next payout. No manual rework.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M4 4h16v13H5.2L4 19z"/><path d="M8 9h8M8 12h5"/></svg></div><div><h4>Questions handled in the app</h4><p>Every held payout shows its reason; the associate asks in-app; the manager replies on a tracked thread. Far fewer HR escalations.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/><path d="M9 17h6M9 13h6"/></svg></div><div><h4>One click to payroll</h4><p>A single payroll file with every adjustment already included — and a clear status from calculated to paid.</p></div></div>
          </div>
        </div>
      </div>
    </div>
  
    </div>`},{id:`inc10`,theme:`dark`,title:`MANAGER VISIBILITY & ANALYTICS`,html:`
    <div class="incd">
    <div class="slidebody">
      <span class="eyebrow rise">Visibility · for managers &amp; HO</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Store managers coach. Head office sees cost before it's spent.</h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:82ch;">The same numbers that motivate the associate roll up for everyone above them — a team view for store managers, and a dashboard for head office that compares stores fairly and forecasts the festival-month bill early.</p>
      <div class="split" style="margin-top:20px;align-items:stretch;">
        <div class="rise" style="animation-delay:.26s">
          <div class="win" style="box-shadow:0 30px 70px -20px rgba(0,0,0,.5)">
            <div class="wbar" style="background:#0e1330;border-color:rgba(255,255,255,.08)"><span class="wd"><i style="background:#3a4370"></i><i style="background:#3a4370"></i><i style="background:#3a4370"></i></span><span class="wt" style="color:rgba(255,255,255,.6)"><b style="color:#fff">Analytics</b> · West region</span></div>
            <div class="wbody" style="background:#141a3a;">
              <div style="font-family:var(--mono);font-size:8.5px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.5);">Payout trend · last 6 months</div>
              <div class="trendbars">
                <div class="tb"><div class="bv" style="color:#fff">₹6.1L</div><div class="bar" style="height:44%"></div><div class="bm" style="color:rgba(255,255,255,.5)">Feb</div></div>
                <div class="tb"><div class="bv" style="color:#fff">₹6.8L</div><div class="bar" style="height:50%"></div><div class="bm" style="color:rgba(255,255,255,.5)">Mar</div></div>
                <div class="tb"><div class="bv" style="color:#fff">₹11.4L</div><div class="bar" style="height:82%;background:linear-gradient(180deg,#E4CE9A,#C6A15B)"></div><div class="be">Festival</div><div class="bm" style="color:rgba(255,255,255,.5)">Apr</div></div>
                <div class="tb"><div class="bv" style="color:#fff">₹7.2L</div><div class="bar" style="height:53%"></div><div class="bm" style="color:rgba(255,255,255,.5)">May</div></div>
                <div class="tb"><div class="bv" style="color:#fff">₹7.9L</div><div class="bar" style="height:58%"></div><div class="bm" style="color:rgba(255,255,255,.5)">Jun</div></div>
                <div class="tb"><div class="bv" style="color:#fff">₹8.6L</div><div class="bar" style="height:63%"></div><div class="bm" style="color:rgba(255,255,255,.5)">Jul</div></div>
              </div>
              <div style="display:flex;gap:10px;margin-top:14px;">
                <div style="flex:1;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:11px;padding:11px 12px;"><div style="font-family:var(--mono);font-size:8px;color:rgba(255,255,255,.5);text-transform:uppercase;">Festival forecast</div><div style="font-family:var(--disp);font-weight:800;font-size:1.15rem;color:var(--gold-soft);margin-top:5px;">₹13.9L</div><div style="font-size:8.5px;color:rgba(255,255,255,.6);margin-top:2px;">projected · run-rate</div></div>
                <div style="flex:1;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:11px;padding:11px 12px;"><div style="font-family:var(--mono);font-size:8px;color:rgba(255,255,255,.5);text-transform:uppercase;">Payout / assoc.</div><div style="font-family:var(--disp);font-weight:800;font-size:1.15rem;color:#fff;margin-top:5px;">₹14,100</div><div style="font-size:8.5px;color:rgba(255,255,255,.6);margin-top:2px;">size-normalised</div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="rise" style="animation-delay:.34s">
          <div class="featlist" style="gap:15px;">
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0112 0"/><circle cx="18" cy="9" r="2.5"/><path d="M16.5 20a5 5 0 015-4"/></svg></div><div><h4 style="color:#fff">Manager team view</h4><p>Every store manager sees their team's live progress, projected payout and <b>who's one push from their target</b> — on the same app.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg></div><div><h4 style="color:#fff">Fair store comparison</h4><p>Compares payout per associate, not raw totals — so a flagship and a small-town store are judged on effort, not footfall.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18z"/><path d="M12 7v5l3 2"/></svg></div><div><h4 style="color:#fff">Festival cost, known early</h4><p>See what Diwali or the wedding season will cost mid-month — no month-end surprises for Finance.</p></div></div>
            <div class="fi"><div class="fic"><svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M18 8l-5 5-3-3-4 4"/></svg></div><div><h4 style="color:#fff">Is the scheme working?</h4><p>See how many are earning, how targets are spread, and whether the scheme is lifting the sales you care about.</p></div></div>
          </div>
        </div>
      </div>
    </div>
  
    </div>`},{id:`inc11`,theme:`dark`,title:`SCALE & TRUST`,html:`
    <div class="incd">
    <div class="slidebody">
      <span class="eyebrow rise">Built for enterprise scale &amp; trust</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:22ch;">Every brand, every store, every associate — in one place.</h2>
      <div class="impact rise" style="animation-delay:.18s;grid-template-columns:repeat(4,1fr);margin-top:22px;">
        <div class="icard"><div class="n">50K+</div><div class="l">Associates handled with no slowdown</div></div>
        <div class="icard"><div class="n">Millions</div><div class="l">Sales a month, handled with ease</div></div>
        <div class="icard"><div class="n">1 platform</div><div class="l">Every brand · every format · one login</div></div>
        <div class="icard"><div class="n">Owned &amp;<br/>franchise</div><div class="l">Each store &amp; brand kept separate and secure</div></div>
      </div>
      <div class="two rise" style="animation-delay:.3s;margin-top:22px;">
        <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:20px 22px;">
          <h4 style="font-family:var(--disp);font-weight:700;color:#fff;font-size:1.05rem;margin-bottom:10px;">Enterprise-grade &amp; secure</h4>
          <p style="font-size:.86rem;line-height:1.6;color:rgba(255,255,255,.78);">Controlled access, a full record of every change, each brand's data kept separate, and India <b style="color:var(--gold-soft)">DPDPA</b>-ready handling of staff details. Every payout accurate to the rupee.</p>
          <div class="certs" style="margin-top:16px;"><img src="assets/compliance/iso-27001.svg" alt="ISO 27001"/><img src="assets/compliance/soc-2.svg" alt="SOC 2"/><img src="assets/compliance/dpdpa.svg" alt="DPDPA"/><img src="assets/compliance/gdpr.svg" alt="GDPR"/></div>
        </div>
        <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:20px 22px;">
          <h4 style="font-family:var(--disp);font-weight:700;color:#fff;font-size:1.05rem;margin-bottom:10px;">The platform behind it</h4>
          <p style="font-size:.86rem;line-height:1.6;color:rgba(255,255,255,.78);">goBetter Incentives rides the BetterPlace platform already trusted by 1,000+ enterprises across Asia — backed by Jungle Ventures, Macquarie &amp; BII, and a Microsoft cloud &amp; AI partner.</p>
          <div class="logowall" style="grid-template-columns:repeat(4,1fr);margin-top:14px;"><div class="lc"><img src="assets/logo/c-tata.png" alt="tata" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-tcs.png" alt="tcs" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-flipkart.png" alt="flipkart" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-swiggy.png" alt="swiggy" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-zomato.png" alt="zomato" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-nykaa.png" alt="nykaa" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-muthoot-finance.png" alt="muthoot-finance" loading="lazy"/></div><div class="lc"><img src="assets/logo/c-urbancompany.png" alt="urbancompany" loading="lazy"/></div></div>
        </div>
      </div>
    </div>
  
    </div>`},C(`inc11b`,`What live, explained incentives change on the floor.`,[{n:`Live`,what:`The scheme motivates every day, not at month-end`,how:`Associates see earnings, target progress and "one more sale is worth ₹X" between customers — the incentive works while the customer is still in the store.`,proof:`Live number in every associate’s pocket`},{n:`Days → hours`,what:`Scheme launch time`,how:`A festive booster goes from idea to live-in-app the same day — config or a plain-language sentence, not an IT ticket.`,proof:`AI copilot + no-code builder`},{n:`−80%`,what:`Payout disputes and HR escalations`,how:`Every rupee is explained in plain words with an in-app query thread — held payouts show their reason instead of breeding WhatsApp threads.`,proof:`Reason on every ₹0 · tracked queries`},{n:`Known early`,what:`Festival-month cost, forecast mid-month`,how:`Finance sees the projected bill while there is still time to steer the scheme — no month-end surprise.`,proof:`Run-rate forecast per region`}],`A 90-day pilot on one region prices this against your current spreadsheet cycle.`),{id:`inc12`,theme:`darker`,title:`HOW WE START`,html:`
    <div class="incd">
    <div class="glow" style="position:absolute;right:-6%;top:6%;width:54%;height:74%;background:radial-gradient(circle at 60% 40%,rgba(198,161,91,.16),transparent 62%),radial-gradient(circle at 30% 70%,rgba(74,63,158,.3),transparent 60%);filter:blur(30px);pointer-events:none;z-index:0;"></div>
    <div class="slidebody" style="position:relative;z-index:2;">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;font-size:clamp(2rem,4.4vw,3.4rem);">A 90-day pilot on one region — <span style="color:var(--gold)">live before the next festive season.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:80ch;">Prove it where it matters: one brand in one region, running your real schemes on real sales, with associates on the app. Then scale across every brand and the franchise network.</p>
      <div class="ctacards" style="margin-top:22px;">
        <div class="ctac rise" style="animation-delay:.5s"><div class="num">01</div><h4>Set up</h4><p>We load your current schemes, connect one region's sales &amp; attendance, and test against last quarter so the numbers match your books.</p></div>
        <div class="ctac rise" style="animation-delay:.57s"><div class="num">02</div><h4>Go live</h4><p>Associates get the app; managers get the team view; one full month runs end-to-end — calculate, approve, pay — with your team.</p></div>
        <div class="ctac rise" style="animation-delay:.64s"><div class="num">03</div><h4>Scale</h4><p>Roll out across every brand and into the franchise network — each new brand is just a setting, not a new build.</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.72s;color:rgba(255,255,255,.62);margin-top:22px;font-size:1rem;">Let's pick the region — and put real numbers on it together. <b style="color:var(--gold-soft)">goBetter Incentives · by BetterPlace.</b></div>
    </div>
  
    </div>`}],_e=ge.find(e=>e.id===`inc5`),ve=[{id:`ss1`,theme:`dark`,title:`Sales story cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">goBetter for sales teams · field &amp; retail</span>
      <h1 class="rise" style="animation-delay:.15s">One partner for the people <span style="color:var(--yellow)">who sell for you.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Field reps, store associates, telesales, channel sellers — hired in days, verified, trained, coached by AI, tracked in the field, and paid incentives they can see live. One platform end to end.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">~30,000</div><div class="l">Sales pros coached by AI Max</div></div>
        <div class="stat"><div class="n">+40%</div><div class="l">Sales uplift at Meesho</div></div>
        <div class="stat"><div class="n">−60%</div><div class="l">Time-to-hire</div></div>
        <div class="stat"><div class="n">1,000+</div><div class="l">Sales execs staffed at Mahindra</div></div>
      </div>
      <div class="mdcover ghost">GO</div>
    </div>`},...ee(`ss1b`,`For the sales & revenue leader`,`Your sales machine leaks at every human joint.`,`And the tools you bought were made for desks, not doorsteps.`,[{pain:`A rep takes 3 months to reach quota — and leaves in 9`,painDetail:`By the time a field seller is productive, attrition is already circling. The ramp cost never gets repaid.`,painStat:`40–50% frontline sales attrition · 3-month ramps`,fix:`Hire in days, ramp in weeks`,fixDetail:`AI voice calls screen candidates the day they apply; reels-based product training and AI roleplay compress the ramp before the first customer visit.`,fixStat:`−60% time-to-hire · 3× faster upskilling`},{pain:`Coaching stops at the top 10% of the team`,painDetail:`Managers ride along with a few reps; the other ninety learn by losing customers.`,painStat:`1 manager can’t coach 40 reps`,fix:`Every rep practises before every real call`,fixDetail:`AI Max runs live customer roleplays — objection handling, tone, empathy, accuracy — scored and always available.`,fixStat:`IFFCO Tokio: ~30,000 sales pros coached`},{pain:`You can’t see the field force you pay for`,painDetail:`Beat plans on paper, attendance on trust, visits claimed on WhatsApp — the field is a black box between HQ and the customer.`,painStat:`Claimed visits ≠ made visits`,fix:`Face + geo attendance, visits with proof`,fixDetail:`Geo-fenced check-ins at stores and beats; live present/absent by territory; every claim carries a location and timestamp.`,fixStat:`Zepto: 15,000 field workers tracked live`},{pain:`Incentives lag reality by a month`,painDetail:`The single biggest motivator on the floor is a spreadsheet nobody can see — reps discover their earnings weeks after the sale.`,painStat:`Month-end surprise ≠ motivation`,fix:`Earnings live in every seller’s pocket`,fixDetail:`goBetter Incentives shows the number after every bill — with "₹1.1L more unlocks +₹2,500" nudges steering effort where you want it.`,fixStat:`Live payout + leaderboard, per rep`}],`BetterPlace Frontline Index · IFFCO Tokio & Meesho deployments · McKinsey frontline retention research`),{id:`ss2`,theme:`dark`,title:`The lifecycle`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">One platform · the whole selling lifecycle</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">From "we need 200 sellers" to quota — on one record.</h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(6,1fr);margin-top:22px;">
        <div class="rstage"><div class="rn">01</div><h4>Hire</h4><ul><li>WhatsApp-apply, no CV</li><li>AI voice-call screening</li><li>Ranked shortlists</li></ul></div>
        <div class="rstage"><div class="rn">02</div><h4>Verify</h4><ul><li>Six-point BGV &lt;24 hr</li><li>Who reps your brand, checked</li></ul></div>
        <div class="rstage"><div class="rn">03</div><h4>Onboard</h4><ul><li>10 min on their phone</li><li>Straight into payroll</li></ul></div>
        <div class="rstage"><div class="rn">04</div><h4>Train &amp; coach</h4><ul><li>Reels + assessments</li><li>AI Max roleplays</li></ul></div>
        <div class="rstage"><div class="rn">05</div><h4>Track</h4><ul><li>Face + geo in the field</li><li>Beats &amp; visit proof</li></ul></div>
        <div class="rstage"><div class="rn">06</div><h4>Reward</h4><ul><li>Live incentives</li><li>Leaderboards &amp; streaks</li></ul></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Every stage writes to <b>one seller record</b> — so training gates selling, attendance feeds incentives, and a rehire restarts in minutes.</div>
    </div>`},{id:`ss3`,theme:`light`,title:`Hire sellers fast`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Hire · volume selling roles</span>
        <h2 class="rise" style="animation-delay:.08s;">200 sellers before the season? <span style="color:var(--navy)">Post once.</span></h2>
        <div class="featlist">
          ${b(w.mic,`AI screening over a phone call`,`Voice bots call every applicant in their language, score fit against the role rubric and shortlist overnight — at ₹5/min vs ₹12 industry.`,.24)}
          ${b(w.users,`WhatsApp-apply, no CV, no install`,`Role cards with pay bands, guided profile, progressive documents — built for people who sell, not people who write résumés.`,.32)}
          ${b(w.shield,`Verified before they carry your card`,`Identity, address, court and employment checks — <24 hr, with a red/yellow/green case file per rep.`,.4)}
          ${b(w.zap,`Offer to payroll-ready in 10 minutes`,`Docs, e-sign and bank setup on their own phone — the record lands in payroll untouched.`,.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${y(`assets/product/hire-journey/subway-job-matches.png`,`Candidate journey · ranked matches`,`Fit-scored, explainable job matches — <b>one-tap apply</b> (experience prototype)`)}
      </div>
    </div>`},{id:`ss4`,theme:`light`,title:`Train & coach sellers`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Train &amp; coach · skillBetter + AI Max</span>
        <h2 class="rise" style="animation-delay:.08s;">Product knowledge by reels. <span style="color:var(--navy)">Pitch practice by AI.</span></h2>
        <div class="featlist">
          ${b(w.play,`Reels for product knowledge`,`New SKU, new offer, new objection — a 3-minute vernacular reel on every seller’s phone by morning. 88% completion vs 25% industry.`,.24)}
          ${b(w.doc,`Proctored assessments before the floor`,`Face-detection proctoring and 12+ question types — nobody sells uncertified, the Zepto pattern applied to sales.`,.32)}
          ${b(w.bot,`AI Max — the roleplay coach`,`Live customer conversations with tone, empathy and accuracy scoring across 20+ scenarios. Reps practise on the bot, not on your customers.`,.4)}
          ${b(w.zap,`AI Theo — answers mid-pitch`,`Policy detail, spec comparison, price rules — cited answers from your documents in 4 seconds, any language.`,.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="phones" style="min-height:clamp(280px,30vw,390px);">
          <div class="phone p1"><img src="assets/product/figma/skilling/skillbetter-mobile-image-mcq-feedback.png" alt="Assessment with instant feedback"/></div>
          <div class="phone p2"><img src="assets/product/figma/skilling/mobile-learning-home-new-feed.png" alt="Reels-style learning feed"/></div>
          <div class="phone p3"><img src="assets/product/app-leaderboard.webp" alt="Leaderboard"/></div>
        </div>
        <div class="phonecap" style="margin-top:12px;">Reels feed · assessments · leaderboards — the seller's daily loop</div>
      </div>
    </div>`},{id:`ss5`,theme:`darker`,title:`The sales agent bench`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">AI Labs · the agents on your sales floor</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">A bench of AI specialists working your revenue team.</h2>
      <div class="agents" style="margin-top:22px;">
        <div class="ag rise" style="--ac:#FF7A59;animation-delay:.24s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Sales coach</div><h4>AI Max</h4><p>Customer roleplays scored on tone, empathy and accuracy — coaching ~30,000 sales pros at IFFCO Tokio.</p></div>
        <div class="ag rise" style="--ac:#7C6BF0;animation-delay:.31s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Seller screening</div><h4>AI Jack</h4><p>Interviews sales applicants over WhatsApp and voice, ranks by fit — recruiters meet closers, not CVs.</p></div>
        <div class="ag rise" style="--ac:#3DBE7B;animation-delay:.38s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Product tutor</div><h4>AI Theo</h4><p>Specs, offers and policy answered mid-conversation from your own documents — cited, in 24 languages.</p></div>
        <div class="ag rise" style="--ac:#FFC401;animation-delay:.45s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Pitch of the week</div><h4>AI Kai</h4><p>Pushes a 3-minute practice scenario every Monday and shows managers who’s match-fit before the week starts.</p></div>
        <div class="ag rise" style="--ac:#32CAD4;animation-delay:.52s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Incentive copilot</div><h4>Plan copilot</h4><p>Describe a scheme in a sentence — it builds the plan, simulates the cost and flags gaming before launch.</p></div>
        <div class="ag rise" style="--ac:#FF9518;animation-delay:.59s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat soon"><span class="d"></span>Soon</span></div><div class="role">Field assistant</div><h4>AI Zara</h4><p>Confirms tomorrow’s beat plan, chases silent reps and flags territories trending short.</p></div>
      </div>
      <div class="clientline rise" style="color:rgba(255,255,255,.6);margin-top:20px;animation-delay:.68s">All on the AI Labs runtime — deterministic where compliance demands, private LLMs, ₹0.37 per interaction</div>
    </div>`},{..._e,id:`ss6`,title:`Incentives live in pocket`},{id:`ss7`,theme:`light`,title:`Field visibility`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Track · the field force, visible</span>
        <h2 class="rise" style="animation-delay:.08s;">Every beat, visit and hour — <span style="color:var(--navy)">with proof attached.</span></h2>
        <div class="featlist">
          ${b(w.map,`Geo-fenced check-ins on the beat`,`Face-verified attendance at stores, dealer points and customer sites — a visit claimed is a visit made.`,.24)}
          ${b(w.chart,`Territory dashboards, live`,`Present/absent by territory, route coverage and exception queues — area managers steer the day, not the post-mortem.`,.32)}
          ${b(w.card,`Attendance feeds pay and incentives`,`Days worked adjust incentive payouts automatically — no reconciliation argument at month-end.`,.4)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${y(`assets/product/gobetter/attendance/roster-weekly-grid.jpg`,`gobetter · Attend · Roster`,`The same rostering and attendance engine, applied to <b>field teams and territories</b>`)}
      </div>
    </div>`},{id:`ss7b`,theme:`light`,title:`Field-sales capability surface`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Built for how a field-sales fleet actually runs</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">The daily surface a beat team lives on.</h2>
      <div class="capgrid rise" style="animation-delay:.2s">
        <div class="cap"><h4>Beat plan &amp; territory</h4><p>Assign beats, routes and territories; geo-fenced check-in proves the visit was made, not just claimed.</p></div>
        <div class="cap"><h4>Store &amp; dealer visits</h4><p>Visit logging with photo proof, order/DSR capture and last-order recall at the point of the visit.</p></div>
        <div class="cap"><h4>Attendance → pay → incentive</h4><p>Days worked and visits feed payroll and incentive payouts automatically — no month-end reconciliation fight.</p></div>
        <div class="cap"><h4>Live incentive in pocket</h4><p>Every rep sees earnings, target progress and "one more sale is worth ₹X" between calls.</p></div>
        <div class="cap"><h4>Product &amp; pitch readiness</h4><p>Reels for new SKUs and offers, proctored certification, and AI Max roleplay before the real call.</p></div>
        <div class="cap"><h4>Territory dashboards</h4><p>Area managers see coverage, shortfall and who’s one push from target — steer the day, not the post-mortem.</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.4s;margin-top:14px;">One worker record from hire to quota — hiring, verification, attendance, training and incentives all agree who your best sellers are.</div>
    </div>`},{id:`ss8`,theme:`dark`,title:`Proof`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Proof · sales teams running on BetterPlace</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;">Sales organisations that already run on this.</h2>
      <div class="cases" style="margin-top:16px;">
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.2s"><div class="ch"><span class="cn">IFFCO Tokio</span><span class="ct">Insurance · field sales</span></div><p>AI Max coaches ~30,000 sales professionals through live roleplays with tone scoring — always-on coaching at a scale no trainer bench could match.</p><div class="cm"><div class="m"><div class="mn">20+</div><div class="ml">roleplay scenarios</div></div><div class="m"><div class="mn">30K</div><div class="ml">sales pros</div></div></div></div>
        <div class="case rise" style="--pc:#D0271D;animation-delay:.28s"><div class="ch"><span class="cn">Meesho</span><span class="ct">Social commerce · resellers</span></div><p>2M+ resellers trained on vernacular micro-learning — product knowledge, order management and customer handling.</p><div class="cm"><div class="m"><div class="mn">+40%</div><div class="ml">sales uplift</div></div><div class="m"><div class="mn">85%</div><div class="ml">completion</div></div></div></div>
        <div class="case rise" style="--pc:#FF9518;animation-delay:.36s"><div class="ch"><span class="cn">Mahindra Holidays</span><span class="ct">Hospitality · HNI telesales</span></div><p>Exclusive vendor for telemarketing and field sales pitching ₹2–16L packages — sourced, verified and managed end to end.</p><div class="cm"><div class="m"><div class="mn">1,000+</div><div class="ml">execs today</div></div><div class="m"><div class="mn">300+</div><div class="ml">hires in 3 months</div></div></div></div>
        <div class="case rise" style="--pc:#32CAD4;animation-delay:.44s"><div class="ch"><span class="cn">Reliance Retail</span><span class="ct">Retail · store associates</span></div><p>500K+ store associates skilled in 14 languages on the Samarth platform — interview-ready candidates and standardized onboarding.</p><div class="cm"><div class="m"><div class="mn">500K+</div><div class="ml">associates skilled</div></div><div class="m"><div class="mn">1.5L+</div><div class="ml">annual hires</div></div></div></div>
      </div>
    </div>`},C(`ss9`,`What one selling platform changes in your revenue math.`,[{n:`Weeks`,what:`Ramp time, not months`,how:`Screened by AI calls, trained by reels, rehearsed with AI Max — a rep’s first productive week moves up by a quarter.`,proof:`3× faster upskilling · −60% TTH`},{n:`+40%`,what:`Sales uplift from trained sellers`,how:`Meesho measured it: sellers who finish training sell more. Completion is the lever — ours is 88% vs 25%.`,proof:`Meesho, measured`},{n:`Live`,what:`Incentives that steer the day`,how:`The "one more sale is worth ₹X" nudge works while the customer is in the store — not in next month’s payslip.`,proof:`goBetter Incentives, per rep`},{n:`1`,what:`Record from hire to quota`,how:`Hiring, verification, training, attendance and incentives on one seller record — every system agrees who your best people are.`,proof:`The goBetter platform underneath`}],`Pick one region’s sales team — we’ll run hire-to-incentive on it for a quarter and report the before/after.`),{id:`ss10`,theme:`darker`,title:`Next steps`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">One region. One quarter. The whole selling lifecycle.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Coach pilot</h4><p>AI Max configured on your top two products — one region's reps roleplay for a fortnight, managers see the scores.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>Hiring sprint</h4><p>Your next sales intake run through AI-call screening and 10-minute onboarding — TAT and cost benchmarked against today.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Incentives live</h4><p>One region's schemes on goBetter Incentives — live numbers in seller pockets before the next festive push.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`}],ye=[{id:`ms1`,theme:`dark`,title:`Manufacturing story cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">goBetter for manufacturing · contract &amp; plant workforce</span>
      <h1 class="rise" style="animation-delay:.15s">Run the plant. <span style="color:var(--yellow)">We run the workforce behind it.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Every contract worker — sourced, verified, gate-passed, attended, paid and kept compliant on one platform, with AI agents working underneath. From the vendor's licence to the worker's payslip, one record, one system.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">3,000+</div><div class="l">Vendors on one rule engine (Reliance)</div></div>
        <div class="stat"><div class="n">−90%</div><div class="l">Payroll leakage</div></div>
        <div class="stat"><div class="n">−80%</div><div class="l">Vendor non-compliance risk</div></div>
        <div class="stat"><div class="n">100%</div><div class="l">Gate entry on a verified pass</div></div>
      </div>
      <div class="mdcover ghost">MFG</div>
    </div>`},...ee(`ms1b`,`For the plant & compliance head`,`Your plant runs on contract labour you can barely see.`,`And the liability for all of it sits with you.`,[{pain:`Contract labour is now 40% of the floor`,painDetail:`In large plants the contract share of non-managerial work has roughly doubled to ~40% — a workforce that turns over fast and lives across dozens of vendors.`,painStat:`~40% contract share · 20–35% attrition (India mfg)`,fix:`One verified pool, deployed against work orders`,fixDetail:`Source from the 25M+ verified pool, map every worker to a work order and contractor, and track headcount against each vendor’s licensed strength.`,fixStat:`Reliance: 300K workers · 3,000+ vendors, one engine`},{pain:`You can’t prove who’s inside the gate`,painDetail:`Paper gate registers, unverified contractor lists, no line between "on the roster" and "actually on site" — an auditor’s and a safety officer’s nightmare.`,painStat:`Manual gate registers ≠ audit evidence`,fix:`Gate pass gated on verification + induction`,fixDetail:`A digital gate pass issues only behind a valid work order, BGV and safety induction; biometric at the gate; every entry timestamped and logged.`,fixStat:`IOWMS gate-pass + VAMS visitor flow, live at BPCL`},{pain:`75% of industrial accidents are contract workers`,painDetail:`The people most exposed to injury are the ones your safety induction reaches least — and each incident is a life, a shutdown and a liability.`,painStat:`~75% of factory accidents involve contract labour`,fix:`Deterministic safety induction, enforced`,fixDetail:`SOP + video + quiz + certificate that a worker must clear before the pass activates — ISO-ready logs proving every worker was inducted.`,fixStat:`Deterministic flow · audit-ready per worker`},{pain:`Vendor PF/ESI defaults land on the principal employer`,painDetail:`As principal employer you inherit CLRA obligations and every contractor’s statutory gap — discovered, usually, at the audit.`,painStat:`CLRA + EPFO 7Q/14B exposure is yours`,fix:`Challan OCR + CLRA compliance, monthly`,fixDetail:`Every vendor challan read and reconciled worker-by-worker; licence-strength and WC-policy expiries flagged before they become a notice.`,fixStat:`Reliance: −80% vendor non-compliance`}],`Bertrand et al. (Econometrica 2025) contract-labour share · Safe in India CRUSHED 2025 · BetterPlace deployments`),{id:`ms2`,theme:`dark`,title:`The plant lifecycle`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">One platform · the whole contract-labour lifecycle</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:30ch;">From "the vendor sends 200 workers" to a compliant payslip.</h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(6,1fr);margin-top:22px;">
        <div class="rstage"><div class="rn">01</div><h4>Source</h4><ul><li>Verified 25M+ pool</li><li>Vendor + work-order mapped</li><li>Licence-strength checked</li></ul></div>
        <div class="rstage"><div class="rn">02</div><h4>Verify</h4><ul><li>Six-point BGV</li><li>WC policy on file</li><li>&lt;24 hr</li></ul></div>
        <div class="rstage"><div class="rn">03</div><h4>Gate &amp; onboard</h4><ul><li>Safety induction</li><li>Gate pass issued</li><li>Docs + e-sign on phone</li></ul></div>
        <div class="rstage"><div class="rn">04</div><h4>Attend</h4><ul><li>Face + geo at the gate</li><li>Shift &amp; roster</li><li>Factory approval flows</li></ul></div>
        <div class="rstage"><div class="rn">05</div><h4>Pay &amp; comply</h4><ul><li>Challan OCR + CLRA</li><li>Statutory filings</li><li>Vendor reconciliation</li></ul></div>
        <div class="rstage"><div class="rn">06</div><h4>Upskill</h4><ul><li>Safety &amp; technical</li><li>Vernacular reels</li><li>Certification tracking</li></ul></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Every stage writes to <b>one worker record</b> — so a gate pass can’t open without a work order, a BGV and a safety induction behind it.</div>
    </div>`},{id:`ms3`,theme:`light`,title:`Verify, gate & comply`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Gate &amp; compliance · the factory surface</span>
        <h2 class="rise" style="animation-delay:.08s;">Nobody enters your plant <span style="color:var(--navy)">without the paperwork behind them.</span></h2>
        <div class="featlist">
          ${b(w.repeat,`Work-order deployment`,`Every contract worker mapped to a work order / PO; headcount, wages and billing tracked against it, per contractor.`,.24)}
          ${b(w.shield,`CLRA + WC policy`,`Worker counts kept inside each contractor’s licensed strength; Workmen’s Compensation cover recorded per worker, expiries flagged before anyone works uninsured.`,.32)}
          ${b(w.lock,`Gate pass, gated`,`A digital pass issues only behind a valid work order, BGV and cleared safety induction — biometric at the gate, VAMS-style visitor flow, every entry logged.`,.4)}
          ${b(w.check,`Factory approval flows`,`Multi-level, plant-configured sign-off for deployment, regularisation, overtime and exits — exactly how your plant approves.`,.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        ${y(`assets/product/gobetter/verify/bgv-address-legal-verification.jpg`,`gobetter · Verify · Address, court & police checks`,`Six-point BGV behind every gate pass — <b>dated, audit-ready</b>`)}
      </div>
    </div>`},{id:`ms4`,theme:`light`,title:`Attend & pay`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Attend → pay → comply · the money screens</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Face-verified attendance in. <span style="color:var(--navy)">Compliant, leakage-free payroll out.</span></h2>
      <div class="shotgrid rise" style="animation-delay:.22s;margin-top:18px;">
        ${y(`assets/product/gobetter/attendance/roster-weekly-grid.jpg`,`gobetter · Attend · Roster`,`Shift &amp; roster across the plant — bulk tools, publish step`)}
        ${y(`assets/product/gobetter/payroll/vendor-reconciliation-dashboard.jpg`,`gobetter · Payroll · Reconcile`,`Every vendor’s statutory status — <b>pending · failed · success</b>`)}
      </div>
      <p class="lede rise" style="animation-delay:.4s;margin-top:16px;max-width:94ch;">Attendance computes straight into payroll with minimum-wage validation; challan OCR reconciles every contractor worker-by-worker — the principal-employer exposure closes before the auditor arrives.</p>
    </div>`},{id:`ms-score`,theme:`light`,title:`AI Vendor Scorecard`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">AI Vendor Scorecard · which contractors to keep</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:32ch;">Which contractor keeps your lines staffed — <span style="color:var(--navy)">and keeps you compliant?</span></h2>
      <div class="rise" style="animation-delay:.2s;margin-top:12px;background:var(--surface);border:1px solid var(--border);border-radius:16px;overflow:hidden;">
        <div style="display:grid;grid-template-columns:1.6fr 1fr .9fr .9fr 1fr .7fr;gap:8px;padding:9px 18px;font-size:clamp(10px,1cqw,12px);font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--muted);border-bottom:2px solid var(--border);">
          <span>Contractor</span><span>Fill rate</span><span>Attend</span><span>Attrition</span><span>Compliance</span><span style="text-align:right">Grade</span>
        </div>
        ${[{n:`Apex Manpower`,fill:96,att:`94%`,attr:`11%`,comp:`100%`,g:`A`,c:`#3DBE7B`},{n:`Sunrise Labour`,fill:88,att:`90%`,attr:`19%`,comp:`96%`,g:`B`,c:`#2142B9`},{n:`Metro Staffing`,fill:74,att:`82%`,attr:`31%`,comp:`81%`,g:`C`,c:`#FF9518`},{n:`Delta Contractors`,fill:61,att:`76%`,attr:`44%`,comp:`68%`,g:`D`,c:`#D0271D`}].map((e,t)=>`
        <div class="rise" style="animation-delay:${.3+t*.08}s;display:grid;grid-template-columns:1.6fr 1fr .9fr .9fr 1fr .7fr;gap:8px;align-items:center;padding:10px 18px;font-size:clamp(12px,1.2cqw,14px);${t<3?`border-bottom:1px solid var(--border);`:``}">
          <span style="font-weight:700;color:var(--text)">${e.n}</span>
          <span style="display:flex;align-items:center;gap:8px;"><span style="flex:1;height:6px;border-radius:4px;background:var(--surface-2);overflow:hidden;"><span style="display:block;height:100%;width:${e.fill}%;background:${e.c};"></span></span><b style="color:var(--text)">${e.fill}%</b></span>
          <span style="color:var(--muted)">${e.att}</span>
          <span style="color:var(--muted)">${e.attr}</span>
          <span style="color:var(--muted)">${e.comp}</span>
          <span style="text-align:right"><span style="display:inline-block;width:26px;height:26px;line-height:26px;text-align:center;border-radius:7px;font-weight:800;color:#fff;background:${e.c};">${e.g}</span></span>
        </div>`).join(``)}
      </div>
      <div class="probfoot rise" style="animation-delay:.62s;margin-top:14px;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Pulled from the same loop that runs your gate, payroll and challan reconciliation — AI Dev feeds the score, so a renewal rests on <b>what happened on your floor</b>, not a review-meeting claim. <span style="opacity:.7;font-weight:400;">Illustrative — weightings configurable.</span></div>
    </div>`},{id:`ms5`,theme:`light`,title:`Safety & technical training`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Upskill · safety &amp; technical</span>
        <h2 class="rise" style="animation-delay:.08s;">The training reaches the worker <span style="color:var(--navy)">most likely to get hurt.</span></h2>
        <div class="featlist">
          ${b(w.play,`Safety in reels, in their language`,`Bite-sized vernacular safety and SOP content on the worker’s own phone — 88% completion vs 25% industry, so induction actually lands.`,.24)}
          ${b(w.doc,`Proctored certification`,`Face-detection proctored assessments and tamper-proof certificates — the audit proof that a worker is qualified for the machine.`,.32)}
          ${b(w.shield,`Certification gating`,`A worker can’t be rostered to a line or a machine until the required certification is current — role–skill mapping enforces it.`,.4)}
          ${b(w.lang,`One upload, 35+ languages`,`Record a safety module once; every migrant worker watches it in their language by the same shift.`,.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="phones" style="min-height:clamp(280px,30vw,390px);">
          <div class="phone p1"><img src="assets/product/figma/skilling/skillbetter-mobile-image-mcq-feedback.png" alt="Safety assessment"/></div>
          <div class="phone p2"><img src="assets/product/figma/skilling/mobile-learning-home-new-feed.png" alt="Reels-style safety feed"/></div>
          <div class="phone p3"><img src="assets/product/app-gamification.webp" alt="Certification journey"/></div>
        </div>
        <div class="phonecap" style="margin-top:12px;">Safety reels · proctored assessment · certification — Hindalco runs 60+ technical modules this way</div>
      </div>
    </div>`},{id:`ms6`,theme:`darker`,title:`The plant agent bench`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">AI Labs · agents built for the factory floor</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">A bench of AI specialists working your contract workforce.</h2>
      <div class="agents" style="margin-top:22px;">
        <div class="ag rise" style="--ac:#3DBE7B;animation-delay:.24s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Safety induction</div><h4>AI Rhea</h4><p>Walks every worker through SOP steps with video verification and a quiz — deterministic, audit-ready, before the gate pass activates.</p></div>
        <div class="ag rise" style="--ac:#32CAD4;animation-delay:.31s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Contractor verification</div><h4>AI Cole</h4><p>Face-match, OCR and API checks on every vendor worker’s documents before they reach the gate.</p></div>
        <div class="ag rise" style="--ac:#FFC401;animation-delay:.38s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Statutory watchdog</div><h4>AI Dev</h4><p>Chases vendor challans, reads them by OCR and flags short-payments, licence-strength breaches and WC expiries to the principal employer.</p></div>
        <div class="ag rise" style="--ac:#7C6BF0;animation-delay:.45s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Technical tutor</div><h4>AI Theo</h4><p>Answers machine, SOP and safety questions in the operator’s language, cited from your manuals — 4 seconds, any shift.</p></div>
        <div class="ag rise" style="--ac:#FF9518;animation-delay:.52s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat soon"><span class="d"></span>Soon</span></div><div class="role">Shift &amp; shortfall</div><h4>AI Zara</h4><p>Spots tomorrow’s line shortfalls, messages the vendor SPOC and tracks the replacement all the way to the gate.</p></div>
        <div class="ag rise" style="--ac:#FF7A59;animation-delay:.59s"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Bulk hiring</div><h4>AI Jack</h4><p>Screens seasonal and ramp-up intake over WhatsApp and voice, ranks by fit and locality, and hands the plant a ready shortlist.</p></div>
      </div>
      <div class="clientline rise" style="color:rgba(255,255,255,.6);margin-top:20px;animation-delay:.68s">All on the AI Labs runtime — deterministic where safety and compliance demand it, private LLMs, ₹0.37 per interaction</div>
    </div>`},{id:`ms7`,theme:`dark`,title:`Proof`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Proof · plants already running on BetterPlace</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;">Manufacturers who already run their floor on this.</h2>
      <div class="cases" style="margin-top:16px;">
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.2s"><div class="ch"><span class="cn">Hindalco · Aditya Birla</span><span class="ct">Metals · $26B</span></div><p>E-Karyashala: self-paced, gamified shop-floor training with mandatory completion — 60+ technical modules, 50+ assessments.</p><div class="cm"><div class="m"><div class="mn">3×</div><div class="ml">training coverage</div></div><div class="m"><div class="mn">1,000+</div><div class="ml">workers upskilled</div></div></div></div>
        <div class="case rise" style="--pc:#D0271D;animation-delay:.28s"><div class="ch"><span class="cn">Reliance O2C</span><span class="ct">Oil, gas &amp; chemicals</span></div><p>Biometric/tablet attendance at factory locations, integrated across a 300K+ worker, 3,000+ vendor operation on the goBetter rule engine.</p><div class="cm"><div class="m"><div class="mn">−90%</div><div class="ml">payroll leakage</div></div><div class="m"><div class="mn">−80%</div><div class="ml">vendor non-compliance</div></div></div></div>
        <div class="case rise" style="--pc:#32CAD4;animation-delay:.36s"><div class="ch"><span class="cn">AGI Greenpac</span><span class="ct">Glass manufacturing</span></div><p>Shift-wise machine &amp; safety checklists digitised for hazard-free operation, per shift, per line.</p><div class="cm"><div class="m"><div class="mn">Per-shift</div><div class="ml">safety checklists</div></div></div></div>
        <div class="case rise" style="--pc:#FF9518;animation-delay:.44s"><div class="ch"><span class="cn">BPCL IOWMS</span><span class="ct">Petroleum · vendor workforce</span></div><p>Integrated Onboarding &amp; Workforce Management: gate pass, work order, VAMS visitor flow and incentives across the vendor network.</p><div class="cm"><div class="m"><div class="mn">Gate-to-pay</div><div class="ml">one platform</div></div></div></div>
      </div>
    </div>`},C(`ms8`,`What one platform changes across the plant.`,[{n:`Crores`,what:`Leakage &amp; inherited liability, recovered`,how:`Face-verified gate attendance kills ghost payroll; challan OCR + CLRA tracking kills the vendor statutory exposure you currently inherit blind.`,proof:`Reliance: −90% leakage · −80% vendor risk`},{n:`Audit-ready`,what:`Every worker who entered, provable`,how:`Gate pass behind BGV + induction, timestamped entries, certification on file — the safety and labour audit answers itself.`,proof:`ISO-ready logs · CLRA registers`},{n:`88%`,what:`Safety training that actually lands`,how:`Vernacular reels reach the contract worker most exposed to injury — 88% completion vs 25%, the difference between a signed form and a safe worker.`,proof:`Hindalco: 3× training coverage`},{n:`1`,what:`Platform, not a vendor patchwork`,how:`Source, verify, gate, attend, pay, comply and upskill on one worker record — one contract, one compliance standard, across every plant.`,proof:`The goBetter suite underneath`}],`Pick one plant — we’ll run gate-to-payslip on it for a quarter and hand your CFO and safety head the before/after.`),{id:`ms9`,theme:`darker`,title:`Next steps`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:28ch;">One plant. One quarter. Gate to payslip.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Gate + compliance pilot</h4><p>Digital gate pass behind BGV and safety induction on one plant — with work-order and CLRA tracking live from day one.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>Challan health check</h4><p>Last month’s vendor challans through the OCR reconciliation — every short-payment, wrong UAN and licence-strength breach, itemised.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Safety agent</h4><p>Your induction SOP as a deterministic agent with camera proof and certificates — proving every contract worker was inducted.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`}],be=(e,t,n,r)=>({...e.find(e=>e.id===t),id:n,...r?{title:r}:{}}),xe=[{id:`gb-cover`,theme:`dark`,title:`goBetter cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">goBetter · the frontline workforce OS</span>
      <h1 class="rise" style="animation-delay:.15s">Every system your frontline needs. <span style="color:var(--yellow)">One login.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Hire, onboard, verify, attend, pay, incentivise, upskill — eight modules reading one worker record, with AI Labs agents working underneath. This is the software the rest of our story runs on.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">8</div><div class="l">Modules, one record</div></div>
        <div class="stat"><div class="n"><em>25</em>M+</div><div class="l">Worker profiles</div></div>
        <div class="stat"><div class="n">1,000+</div><div class="l">Enterprises powered</div></div>
        <div class="stat"><div class="n">−90%</div><div class="l">Payroll leakage at Reliance</div></div>
      </div>
      <div class="mdcover ghost">go</div>
    </div>`},be(T,`s2`,`gb-problem`,`The fragmentation problem`),{id:`gb-suite`,theme:`light`,title:`The suite map`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The suite · what's inside goBetter</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:30ch;">Eight modules. Adopt one, or run the whole operating system.</h2>
      <div class="capgrid rise" style="animation-delay:.2s">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.search}</svg></span><h4>Hire</h4><p>Full ATS — WhatsApp-apply, AI screening, ranked shortlists, auto offers</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.doc}</svg></span><h4>Onboard</h4><p>Offer to payroll-ready in 10 minutes, on the worker's own phone</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.shield}</svg></span><h4>Verify</h4><p>Six-point digital BGV — 50K cases/day, &lt;24 hr turnaround</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.user}</svg></span><h4>Attend</h4><p>Face + geo attendance, rostering, approvals, a real policy engine</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.card}</svg></span><h4>Payroll & compliance</h4><p>Attendance-driven pay, wage validation, vendor challan reconciliation</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.trophy}</svg></span><h4>Incentives</h4><p>Any scheme as config, live earnings in every associate's pocket</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.book}</svg></span><h4>Upskill · LMS</h4><p>88% completion — reels, 35+ languages, proctored assessments</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.users}</svg></span><h4>HRIS core</h4><p>The one worker record every module reads — with embedded BI</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.42s">Underneath all eight: <b>AI Labs agents and one shared worker record</b> — adopt any module and the rest are a setting away.</div>
    </div>`},be(D,`hr2`,`gb-hris`,`One record, one console`),be(T,`s7`,`gb-hire`,`Hire & onboard`),be(T,`sv`,`gb-verify`,`Verify`),be(T,`s8`,`gb-attend`,`Attend & manage`),be(ie,`at3`,`gb-roster`,`Rostering, real product`),be(T,`s8b`,`gb-payroll`,`Pay & comply`),be(ge,`inc5`,`gb-incentives`,`Incentives, live in pocket`),be(T,`s9`,`gb-lms`,`Upskill & engage`),be(T,`s8c`,`gb-real`,`The actual console`),be(T,`s10`,`gb-ai`,`The AI layer`),C(`gb-outcomes`,`What one suite changes against five point tools.`,[{n:`0`,what:`Re-entry between systems`,how:`The record created at hiring is the one attendance tracks, payroll pays, incentives reward and training certifies — the export-import ritual between vendors ends.`,proof:`One worker record · 8 modules`},{n:`Crores`,what:`Leakage and liability recovered`,how:`Face-verified attendance kills ghost payroll; challan OCR kills inherited PF/ESI exposure — the two silent costs of a contract workforce.`,proof:`Reliance: −90% leakage · −80% vendor risk`},{n:`Weeks`,what:`Recovered on every hiring ramp`,how:`AI-screened funnels, 10-minute onboarding and <24hr BGV — sites open on schedule with workers who arrive trained.`,proof:`−60% hiring lead-time`},{n:`1`,what:`Vendor relationship, not five`,how:`One contract, one data view, one compliance standard, one support line — the integration project you never have to run.`,proof:`1,000+ enterprises run it`}],`Start with the module that hurts most — the rest of the suite is already waiting behind the same login.`),be(T,`s14`,`gb-proof`,`Customer outcomes`),{id:`gb-close`,theme:`darker`,title:`Next steps`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:26ch;">Start with one module. The suite follows.</h2>
      <div class="ctacards" style="margin-top:24px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Pick the pain</h4><p>Attendance, payroll, hiring, training or incentives — we pilot the module that hurts most, on one site or region.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>Prove it in a quarter</h4><p>Live in days, measured against your current numbers — leakage, TAT, completion, disputes.</p></div>
        <div class="ctac rise" style="animation-delay:.40s"><div class="num">03</div><h4>Switch on the next module</h4><p>Same record, same login, no integration project — each addition compounds the last.</p></div>
      </div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:24px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`}],Se=[[`Hire`,`staffBetter · gigBetter`],[`Verify`,`verifyBetter`],[`Onboard`,`goBetter Onboard`],[`Attend`,`goBetter Attend`],[`Pay`,`Payroll · Incentives`],[`Upskill & engage`,`skillBetter`]],Ce=e=>`
      <div class="jstrip rise">${Se.map(([t,n],r)=>`<div class="js-st${r+1<e?` done`:``}${r+1===e?` act`:``}"><i></i><span>${t}</span><span class="prod">${n}</span></div>`).join(``)}</div>`,we=[{id:`ns1`,theme:`darker`,title:`Cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">BetterPlace · the story of one rider, and 30 million</span>
      <h1 class="rise" style="animation-delay:.15s">India runs on people its software <span style="color:var(--yellow)">has never met.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Around 300 million Indians ride, lift, sell, guard, build and deliver for a living. This is the story of the platform they never had — told through one rider's first thirty days.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">30M+</div><div class="l">Worker profiles on the platform</div></div>
        <div class="stat"><div class="n">1,100+</div><div class="l">Enterprises</div></div>
        <div class="stat"><div class="n">500+</div><div class="l">Cities</div></div>
        <div class="stat"><div class="n">2015</div><div class="l">Building since</div></div>
      </div>
      <div class="mdcover ghost">WHY</div>
    </div>`},{id:`ns2`,theme:`dark`,title:`The invisible workforce`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Start with a basic question</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:32ch;">Who shows up when India orders groceries at 11 pm?</h2>
      <div class="capgrid rise" style="animation-delay:.2s;grid-template-columns:repeat(4,1fr);margin-top:20px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.map}</svg></span><h4>No desk. No desktop.</h4><p>Frontline work happens on feet. 95% of India's internet runs on a smartphone, yet enterprise software still assumes a chair.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.lang}</svg></span><h4>Not in English</h4><p>98% of India's internet users read and watch in an Indian language. The HR software their employer bought speaks one.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.users}</svg></span><h4>Hired, but not known</h4><p>Hired through vendors and contractors, a worker exists as a row in someone's Excel. No record, no history, nothing that belongs to them.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.book}</svg></span><h4>Trained by luck</h4><p>About 5% of India's workforce has had formal skill training, while the WEF expects 40% of today's skills to be obsolete by 2030.</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.42s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Roughly <b>300 million people</b>. The software industry spent thirty years building for the people at desks — and built them nothing. <b>One of them just got off a train in Bengaluru →</b></div>
    </div>`},{id:`ns2r`,theme:`darker`,title:`Meet Ravi`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">The supply side · and the demand side</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:38ch;">Meet Ravi. <span style="color:var(--yellow)">Everyone on the right wants to hire him.</span> They have no way to find him.</h2>
      <div class="meetgrid">
        <div class="heroavatar rise" style="animation-delay:.2s">
          <div class="frame">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#131c4f"/>
              <circle cx="50" cy="118" r="50" fill="#1B2D93"/>
              <rect x="26" y="86" width="48" height="8" rx="3" fill="#FFC401" opacity=".92"/>
              <circle cx="50" cy="46" r="21" fill="#e8a66b"/>
              <path d="M27 44 A23 23 0 0 1 73 44 L73 36 A23 21 0 0 0 27 36 Z" fill="#FFC401"/>
              <rect x="25" y="41" width="50" height="4" rx="2" fill="#d9a400"/>
              <circle cx="43" cy="50" r="2.4" fill="#1c1c2e"/>
              <circle cx="57" cy="50" r="2.4" fill="#1c1c2e"/>
              <path d="M44 58 Q50 63 56 58" stroke="#1c1c2e" stroke-width="2" fill="none" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="hv-name">Ravi Kumar, 23</div>
          <div class="hv-sub">Reached Bengaluru yesterday</div>
          <div class="hv-chips"><span>3 yrs driving, Kanpur</span><span>Own bike</span><span>Smartphone</span><span>हिंदी</span><span>No CV</span><span>No references</span></div>
        </div>
        <div>
          <div class="demandhead rise" style="animation-delay:.3s">Hiring Ravi&rsquo;s profile, right now, in his city</div>
          <div class="drows">
            <div class="drow" style="--dc:#FFC401;--d:.4s"><span class="di"><svg viewBox="0 0 24 24">${w.zap}</svg></span><div><h4>Quick commerce</h4><p>Zepto, Blinkit, Instamart — 10-minute promises on 3.5-month rider tenure. The fleet is rebuilt three times a year</p></div><div class="dn">3×<small>fleet rebuilt / year</small></div></div>
            <div class="drow" style="--dc:#39D2E8;--d:.55s"><span class="di"><svg viewBox="0 0 24 24">${w.building}</svg></span><div><h4>E-commerce &amp; logistics</h4><p>Amazon- and Flipkart-scale warehouses and last mile — festive surges double the floor overnight</p></div><div class="dn">Lakhs<small>seasonal roles / year</small></div></div>
            <div class="drow" style="--dc:#3BE8B0;--d:.7s"><span class="di"><svg viewBox="0 0 24 24">${w.users}</svg></span><div><h4>Organised retail</h4><p>Reliance Retail alone runs 1.5 lakh hires a year through its stores</p></div><div class="dn">1.5L+<small>hires / yr · one chain</small></div></div>
            <div class="drow" style="--dc:#8B7CFF;--d:.85s"><span class="di"><svg viewBox="0 0 24 24">${w.mic}</svg></span><div><h4>BFSI &amp; field sales</h4><p>Feet-on-street teams backfilling 40–50% attrition, every single year</p></div><div class="dn">40–50%<small>annual attrition</small></div></div>
          </div>
        </div>
      </div>
      <div class="probfoot rise" style="animation-delay:1s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Demand was never the problem. <b>The two sides have no shared infrastructure</b> — no common identity, no trusted record, no pipe between them. That gap is the company.</div>
    </div>`},{id:`ns2m`,theme:`darker`,title:`The map`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">So that's the company we built · the whole path, on one map</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;font-size:clamp(21px,2.1vw,32px);">Six stations. Two supply lines. One express underneath. <span style="color:var(--yellow)">Ravi is about to ride all of them.</span></h2>
      <div class="metro rise" style="animation-delay:.2s;margin-top:4px;max-width:1020px;">
        <svg viewBox="0 0 1140 470" xmlns="http://www.w3.org/2000/svg">
          <path class="supply" d="M 40 40 C 90 40 110 96 160 104"/>
          <path class="supply" d="M 40 168 C 90 168 110 118 160 108"/>
          <text class="line-label" x="14" y="30">STAFFBETTER · 23K ON OUR PAYROLL</text>
          <text class="line-label" x="14" y="196">GIGBETTER · DEPLOY &lt;24 HR</text>
          <path class="mainline" d="M 160 106 H 980 C 1060 106 1060 130 1060 175 V 245 C 1060 300 1020 316 950 316 H 190 C 120 316 100 350 100 400"/>
          <path class="loopline" d="M 100 418 C 100 452 210 452 400 452 H 900"/>
          <text class="line-label loop" x="430" y="443">THE REHIRE LOOP — A VERIFIED WORKER COMES BACK IN MINUTES, NOT WEEKS</text>
          <path class="express" d="M 160 212 H 1000"/>
          <text class="line-label v" x="392" y="200">AI LABS EXPRESS · AGENTS RUN EVERY STATION · ₹0.37 A CONVERSATION</text>
          <g>
            <circle class="halo" cx="160" cy="106" r="19"/><circle class="station" cx="160" cy="106" r="12"/><circle class="ichg" cx="160" cy="106" r="4"/>
            <text class="st-num" x="132" y="46">01</text><text class="st-name" x="132" y="70">Hire</text>
            <rect class="st-statc" x="128" y="128" rx="9" width="150" height="22"/><text class="st-stat" x="140" y="143">−60% time-to-hire</text>
          </g>
          <g>
            <circle class="halo" cx="560" cy="106" r="19"/><circle class="station" cx="560" cy="106" r="12"/>
            <text class="st-num" x="532" y="46">02</text><text class="st-name" x="532" y="70">Verify</text>
            <rect class="st-statc" x="528" y="128" rx="9" width="212" height="22"/><text class="st-stat" x="540" y="143">CRC · eFIR · docs · &lt;24 hr</text>
          </g>
          <g>
            <circle class="halo" cx="900" cy="106" r="19"/><circle class="station" cx="900" cy="106" r="12"/>
            <text class="st-num" x="872" y="46">03</text><text class="st-name" x="872" y="70">Onboard</text>
            <rect class="st-statc" x="868" y="128" rx="9" width="176" height="22"/><text class="st-stat" x="880" y="143">45 min, on the phone</text>
          </g>
          <g>
            <circle class="halo" cx="900" cy="316" r="19"/><circle class="station" cx="900" cy="316" r="12"/>
            <text class="st-num" x="872" y="366">04</text><text class="st-name" x="872" y="390">Attend</text>
            <rect class="st-statc" x="846" y="252" rx="9" width="200" height="22"/><text class="st-stat" x="858" y="267">geo-fenced · spoof-proof</text>
          </g>
          <g>
            <circle class="halo" cx="560" cy="316" r="19"/><circle class="station" cx="560" cy="316" r="12"/>
            <text class="st-num" x="532" y="366">05</text><text class="st-name" x="532" y="390">Pay &amp; comply</text>
            <rect class="st-statc" x="528" y="252" rx="9" width="190" height="22"/><text class="st-stat" x="540" y="267">−90% payroll leakage</text>
          </g>
          <g>
            <circle class="halo" cx="190" cy="316" r="19"/><circle class="station" cx="190" cy="316" r="12"/>
            <text class="st-num" x="162" y="366">06</text><text class="st-name" x="162" y="390">Upskill &amp; engage</text>
            <rect class="st-statc" x="158" y="252" rx="9" width="200" height="22"/><text class="st-stat" x="170" y="267">88% training completion</text>
          </g>
        </svg>
      </div>
    </div>`},{id:`ns3`,theme:`dark`,title:`The machine Ravi is about to enter`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">First, the machine Ravi is about to enter</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:36ch;">Hire 100 riders in January. <span style="color:var(--yellow)">Count again in June.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:8px;max-width:100ch;">Average delivery-partner tenure is about 3.5 months — Swiggy's own COO said so on stage. Roughly a quarter of the fleet walks out every month:</p>
      <div class="ajmix rise" style="animation-delay:.24s;margin-top:16px;max-width:960px;">
        <div class="ajrow"><span class="lb">January</span><span class="ajbar"><i style="--w:100%;--bc:#FFC401;--d:.3s"></i></span><span class="pc">100</span></div>
        <div class="ajrow"><span class="lb">February</span><span class="ajbar"><i style="--w:75%;--bc:#FFB020;--d:.45s"></i></span><span class="pc">75</span></div>
        <div class="ajrow"><span class="lb">March</span><span class="ajbar"><i style="--w:56%;--bc:#FF9518;--d:.6s"></i></span><span class="pc">56</span></div>
        <div class="ajrow"><span class="lb">April</span><span class="ajbar"><i style="--w:42%;--bc:#FF7A6B;--d:.75s"></i></span><span class="pc">42</span></div>
        <div class="ajrow"><span class="lb">May</span><span class="ajbar"><i style="--w:32%;--bc:#E85B4B;--d:.9s"></i></span><span class="pc">32</span></div>
        <div class="ajrow"><span class="lb">June</span><span class="ajbar"><i style="--w:24%;--bc:#D0271D;--d:1.05s"></i></span><span class="pc">24</span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">A 10,000-rider fleet is rebuilt <b>about three times a year, in every city, forever</b>. Someone has to source, verify, onboard, track, pay and train that river of people. That's the job we do — <b>the next six slides watch it happen to Ravi.</b></div>
    </div>`},{id:`ns5`,theme:`light`,title:`Day 1 · Ravi applies`,html:`
    <div class="slidebody split">${Ce(1)}
      <div>
        <span class="eyebrow rise">Day 1 · 6:10 pm · a rented room in Marathahalli</span>
        <h2 class="rise" style="animation-delay:.08s;">Ravi taps "apply." <span style="color:var(--navy)">At 8 pm, his phone rings — in Hindi.</span></h2>
        <div class="featlist">
          ${b(w.users,`He was never a stranger`,`Ravi is one of 30M+ profiles on the platform — the moment he applies, his history starts working for him instead of against him.`,.24)}
          ${b(w.mic,`The 8 pm call is an AI agent`,`It screens him in his own language, scores fit against the role, and shortlists him overnight. No recruiter queue, no "we will call back."`,.32)}
          ${b(w.building,`If the client wants payroll, not vendors`,`Our staffing arm hires Ravi onto our books — 23,000+ people work this way today, with the compliance carried by us.`,.4)}
          ${b(w.zap,`If the client wants surge, not headcount`,`The gig engine deploys 1 to 500+ verified workers in under 24 hours, billed only on completed, GPS-proven tasks.`,.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag w"><i></i>Ravi&rsquo;s screen</span></div>
        <div class="jobmock">
          <div class="jm-screen">
            <div class="jm-top"><h5>Ravi, 3 roles match you</h5><p>Sorted by fit — <b>one tap, no CV</b> · हिंदी ✓</p></div>
            <div class="jm-card hot" style="--d:.6s">
              <div class="jm-row">
                <div><div class="jm-org">Quick commerce · HSR hub</div><div class="jm-role">Delivery Partner</div><div class="jm-pay">₹22–28,000<small>/mo + incentives</small></div></div>
                <div class="jm-score"><b>94</b><span>match</span></div>
              </div>
              <div class="jm-chips"><i class="ok">1.2 km from room</i><i class="ok">Own bike ✓</i><i class="ok">हिंदी ✓</i><i>Evening shifts</i></div>
              <span class="jm-apply">Apply now →</span>
            </div>
            <div class="jm-card" style="--d:.95s">
              <div class="jm-row">
                <div><div class="jm-org">Fulfilment centre · Marathahalli</div><div class="jm-role">Warehouse Associate</div><div class="jm-pay">₹16,500<small>/mo</small></div></div>
                <div class="jm-score"><b>78</b><span>match</span></div>
              </div>
              <div class="jm-chips"><i class="ok">3 km away</i><i>No experience needed</i></div>
            </div>
            <div class="jm-foot"><em></em>Verified profile · 30M+ pool · BGV-ready</div>
          </div>
        </div>
        <div class="mockcap">What Ravi sees · 3–4K join like this every month · <b>apply → shortlist in &lt;24 hr</b></div>
      </div>
    </div>`},{id:`ns6`,theme:`light`,title:`Night 1 · while Ravi sleeps`,html:`
    <div class="slidebody split">${Ce(2)}
      <div>
        <span class="eyebrow rise">Night 1 · while Ravi sleeps, four checks run</span>
        <h2 class="rise" style="animation-delay:.08s;">By 9 am his file says one word: <span style="color:var(--navy)">green.</span></h2>
        <div class="featlist">
          ${b(w.shield,`Criminal record check`,`Pan-India court records, read by AI overnight. Relevant hits surface in minutes, not a manual backlog.`,.24)}
          ${b(w.doc,`eFIR check`,`Police complaint records checked digitally against his name — the check most vendors quietly skip.`,.32)}
          ${b(w.check,`Document matching`,`His Aadhaar verified over API and face-matched to the person who applied. Ravi is Ravi.`,.4)}
          ${b(w.map,`Physical address verification`,`Someone actually visits the address he gave. The customer whose door he will knock on deserves that.`,.48)}
        </div>
        <div class="clientline rise" style="animation-delay:.55s;margin-top:10px;">5.6% of gig checks surface a discrepancy — at 10,000 riders, <b>560 doors you were right to check.</b></div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>The employer&rsquo;s screen</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>gobetter · verify · Monday batch (42)</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">38<small>green</small></span>
              <span class="y">2<small>yellow · review</small></span>
              <span class="r">2<small>red · rejected</small></span>
            </div>
            <div class="fm-rows">
              <div class="fm-row hl" style="--d:.5s"><span><b>Ravi K.</b><br/><small>Criminal ✓ · eFIR ✓ · Docs 98.4% ✓ · Address visited ✓</small></span><span class="fm-chip g">GREEN · 8:41 AM</span></div>
              <div class="fm-row" style="--d:.8s"><span><b>Suresh M.</b> <small>address mismatch — re-verification sent</small></span><span class="fm-chip y">YELLOW</span></div>
              <div class="fm-row" style="--d:1s"><span><b>Amit D.</b> <small>court record matched — case file attached</small></span><span class="fm-chip r">RED</span></div>
              <div class="fm-row" style="--d:1.2s"><span><b>Vikram S.</b> <small>face match failed at 61% — not the applicant</small></span><span class="fm-chip r">RED</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">What the ops team wakes up to · every case dated &amp; audit-ready · <b>turnaround &lt;24 hr</b></div>
      </div>
    </div>`},{id:`ns7`,theme:`light`,title:`Day 2 · Ravi joins from a tea stall`,html:`
    <div class="slidebody split">${Ce(3)}
      <div>
        <span class="eyebrow rise">Day 2 · 11 am · a tea stall, not an office</span>
        <h2 class="rise" style="animation-delay:.08s;">Ravi joins a company <span style="color:var(--navy)">without visiting it.</span></h2>
        <div class="featlist">
          ${b(w.doc,`Documents, collected in chat`,`Licence, bank details, KYC — photographed at the tea stall, checked over API, e-signed with his thumb.`,.24)}
          ${b(w.layers,`His 40 batchmates, one file`,`Bulk onboarding takes the whole batch in one upload. Errors are flagged per row and fixed in one round, not a week of email.`,.32)}
          ${b(w.repeat,`Hired via a vendor? Same door`,`Every contractor onboards through the same interface — one standard, however many vendors supply the fleet.`,.4)}
          ${b(w.zap,`By lunch, payroll knows him`,`His record lands in attendance and payroll untouched. Nothing is typed twice, so nothing breaks later.`,.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>The employer&rsquo;s screen</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>gobetter · onboarding · Monday batch (42)</span></div>
          <div class="fm-body">
            <div class="fm-stage"><div class="lb"><span>Documents collected</span><b>42 / 42</b></div><div class="bar"><i style="--w:100%;--d:.4s"></i></div></div>
            <div class="fm-stage"><div class="lb"><span>Verified</span><span><b>40</b> &nbsp;<span class="fl">2 flagged</span></span></div><div class="bar"><i style="--w:95%;--d:.65s"></i></div></div>
            <div class="fm-stage"><div class="lb"><span>E-signed</span><b>39</b></div><div class="bar"><i style="--w:93%;--d:.9s"></i></div></div>
            <div class="fm-stage"><div class="lb"><span>Payroll-ready</span><b>39</b></div><div class="bar"><i style="--w:93%;--d:1.15s"></i></div></div>
            <div class="fm-ravi">✓ &nbsp;<b>Ravi K.</b>&nbsp; payroll-ready · 11:47 am · 45 minutes end to end</div>
          </div>
        </div>
        <div class="mockcap">What the ops team sees · who is stuck, and where · <b>0 office visits, 0 photocopies</b></div>
      </div>
    </div>`},{id:`ns8`,theme:`light`,title:`Day 3 · first shift`,html:`
    <div class="slidebody split">${Ce(4)}
      <div>
        <span class="eyebrow rise">Day 3 · 6:58 am · outside the dark store</span>
        <h2 class="rise" style="animation-delay:.08s;">Ravi looks at his phone. <span style="color:var(--navy)">His phone looks back.</span></h2>
        <div class="featlist">
          ${b(w.map,`The gate is a geo-fence`,`His attendance marks only inside the zone around his hub. Present means present at the right place, on the right shift.`,.24)}
          ${b(w.eye,`His face is the punch card`,`AI face verification with spoof detection — a photo of a photo does not clock in, and neither does a friend.`,.32)}
          ${b(w.clock,`The roster knows quick commerce`,`Night shifts, split shifts, rain-surge windows. The schedule bends the way the business actually runs.`,.4)}
        </div>
        <div class="clientline rise" style="animation-delay:.5s;margin-top:12px;">This layer runs at Zepto today: <b>15,000 workers, 967 geo-fenced sites, 40% measured cost savings.</b> Everything downstream — pay, incentives, compliance — computes from it.</div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>The employer&rsquo;s screen</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>gobetter · attend · HSR hub · live · 7:04 am</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">128<small>present</small></span>
              <span class="y">6<small>late</small></span>
              <span class="r">3<small>geo-fail</small></span>
            </div>
            <div class="fm-rows">
              <div class="fm-row hl" style="--d:.5s"><span><b>Ravi K.</b><br/><small>6:58 am · inside the zone (38 m) · face matched · real person ✓</small></span><span class="fm-chip g">IN</span></div>
              <div class="fm-row" style="--d:.8s"><span><b>Priya N.</b> <small>7:02 am · inside the zone · face matched</small></span><span class="fm-chip g">IN</span></div>
              <div class="fm-row" style="--d:1s"><span><b>Deepak R.</b> <small>tried to mark from 2.4 km away</small></span><span class="fm-chip r">WRONG PLACE</span></div>
              <div class="fm-row" style="--d:1.2s"><span><b>Mohan T.</b> <small>held a photo up to the camera</small></span><span class="fm-chip r">FAKE PHOTO</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">The hub manager&rsquo;s live view while Ravi punches in · <b>no card, no register, no buddy-punching</b></div>
      </div>
    </div>`},{id:`ns9`,theme:`light`,title:`Day 30 · salary day`,html:`
    <div class="slidebody">${Ce(5)}
      <span class="eyebrow rise">Day 30 · 6:04 pm · the message that rarely comes on time</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Salary credited. Correct. On time. <span style="color:var(--navy)">Explained.</span></h2>
      <div class="twopane">
        <div class="tp emp rise" style="animation-delay:.2s">
          <span class="panetag e"><i></i>The employer&rsquo;s side</span>
          <p class="tpprob"><b>The problem:</b> thousands of vendors pay the workers, and when one skips PF or ESI the law bills the principal employer — usually discovered years later, at the audit.</p>
          <div class="funmock">
            <div class="fm-bar"><i></i><i></i><i></i><span>gobetter · vendor compliance · April · 44 vendors</span></div>
            <div class="fm-body">
              <div class="fm-sum">
                <span class="g">41<small>vendors clear</small></span>
                <span class="y">1<small>filed late</small></span>
                <span class="r">2<small>PF short</small></span>
              </div>
              <div class="fm-rows">
                <div class="fm-row" style="--d:.5s"><span><b>Om Manpower Services</b> <small>challan verified, worker-by-worker</small></span><span class="fm-chip g">CLEAR</span></div>
                <div class="fm-row hl" style="--d:.7s"><span><b>Shree Staffing Co.</b> <small>PF short ₹48,210 · 61 workers</small></span><span class="fm-chip r">PF SHORT</span></div>
                <div class="fm-row" style="--d:.9s"><span><b>Sunrise Contractors</b> <small>ESI not deposited · 24 workers</small></span><span class="fm-chip r">ESI SHORT</span></div>
                <div class="fm-row" style="--d:1.1s"><span><b>Balaji Facility Mgmt</b> <small>challan late — escalation sent</small></span><span class="fm-chip y">LATE</span></div>
              </div>
            </div>
          </div>
          <div class="mockcap">Caught this month, not at the audit · Reliance runs <b>3,000+ vendors</b> here · <b>−90% leakage</b></div>
        </div>
        <div class="tp wrk rise" style="animation-delay:.32s">
          <span class="panetag w"><i></i>Ravi&rsquo;s side</span>
          <p class="tpprob"><b>The problem:</b> pay arrives late, short, and unexplained — computed by a vendor on a spreadsheet, with no way to question it.</p>
          <div class="jobmock">
            <div class="jm-screen">
              <div class="jm-top"><h5>Salary credited 🎉</h5><p>30 Apr · 6:04 pm · <b>UTR N104…8821</b></p></div>
              <div class="jm-pane" style="--d:.6s">
                <div class="jm-salline"><span>Base · 26 verified shifts</span><b>₹16,500</b></div>
                <div class="jm-salline"><span>Order incentives</span><b class="plus">+₹5,612</b></div>
                <div class="jm-salline"><span>Rain-surge bonus</span><b class="plus">+₹2,500</b></div>
                <div class="jm-salline"><span>PF (deposited <span class="ok">✓ challan verified</span>)</span><b>−₹1,980</b></div>
                <div class="jm-salline total"><span>In your account</span><b>₹22,632</b></div>
              </div>
              <div class="jm-pane" style="--d:1s">
                <div class="jm-salline" style="border:0;padding:0;"><span><b>This month&rsquo;s goal</b></span><b class="plus">+₹2,500</b></div>
                <div class="jm-prog"><i style="--w:78%;--d:1.3s"></i></div>
                <div class="jm-note">78% there — <b>412 more orders unlock the next slab.</b></div>
              </div>
            </div>
          </div>
          <div class="mockcap">Paid from face-verified shifts, every line explained — <b>his first financial document</b></div>
        </div>
      </div>
    </div>`},{id:`ns10`,theme:`light`,title:`Month 2 · Ravi gets ambitious`,html:`
    <div class="slidebody split">${Ce(6)}
      <div>
        <span class="eyebrow rise">Month 2 · 10:40 pm · Ravi watches reels. The right ones.</span>
        <h2 class="rise" style="animation-delay:.08s;">The 3.5-month rider <span style="color:var(--navy)">decides to stay.</span></h2>
        <div class="featlist">
          ${b(w.play,`Training that looks like Instagram`,`Reel-style lessons in his own language, watchable between orders. 88% completion, against 25% on a traditional LMS.`,.24)}
          ${b(w.check,`Certificates that unlock work`,`At Zepto, only trained, certified riders go live — Ravi&rsquo;s new certificate opens the better-paying surge shifts.`,.32)}
          ${b(w.trophy,`A record that compounds`,`Every shift, certificate and verification lives on Ravi&rsquo;s own profile and travels with him to the next job.`,.4)}
        </div>
        <div class="clientline rise" style="animation-delay:.5s;margin-top:12px;">At a 3.5-month baseline, retention is the biggest lever in the business. <b>Every month of tenure saved is a hiring cycle never paid for</b> — where this runs, attrition drops 15%.</div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag w"><i></i>Ravi&rsquo;s screen</span></div>
        <div class="jobmock">
          <div class="jm-screen">
            <div class="jm-top"><h5>🔥 12-day streak</h5><p>2,340 XP · rank <b>#4</b> at HSR hub</p></div>
            <div class="jm-card" style="--d:.55s">
              <div class="jm-org">Tonight&rsquo;s reel · 3 min · हिंदी</div>
              <div class="jm-role">Rain-day delivery, done safely</div>
              <div class="jm-prog"><i style="--w:64%;--d:.9s"></i></div>
              <div class="jm-note">2 of 3 cards watched</div>
            </div>
            <div class="jm-card hot" style="--d:.95s">
              <div class="jm-row">
                <div><div class="jm-org">Certificate earned</div><div class="jm-role">Surge-shift certified ✓</div></div>
                <div class="jm-score"><b>+₹</b><span>better shifts</span></div>
              </div>
              <div class="jm-note"><b>Unlocked:</b> evening surge windows — the shifts that pay the bonus slab.</div>
            </div>
            <div class="jm-foot"><em></em>Skills live on Ravi&rsquo;s own record</div>
          </div>
        </div>
        <div class="mockcap">Training between orders · <b>88% finish, against 25% industry</b></div>
      </div>
    </div>`},{id:`ns10b`,theme:`light`,title:`What Ravi now carries`,html:`
    <div class="slidebody split">${Ce(7)}
      <div>
        <span class="eyebrow rise">Day 60 · every station rode. One thing to show for it.</span>
        <h2 class="rise" style="animation-delay:.08s;">A verified credential <span style="color:var(--navy)">Ravi keeps for life.</span></h2>
        <div class="featlist">
          ${b(w.shield,`A verified identity`,`Background-checked once — criminal, eFIR, documents, address — and trusted everywhere on the platform.`,.24)}
          ${b(w.check,`Skills that are certified`,`Every course finished and assessment passed becomes a certificate on his record.`,.32)}
          ${b(w.clock,`A history that is proof`,`Verified shifts, employers, payslips and a PF trail — the frontline&rsquo;s first CV that can&rsquo;t be embellished, and the paper trail banks ask for.`,.4)}
        </div>
        <div class="clientline rise" style="animation-delay:.55s;margin-top:12px;">It belongs to Ravi and travels with him. For the employer, it&rsquo;s why the rehire loop takes minutes: <b>verify once, trust everywhere.</b></div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag w"><i></i>Ravi&rsquo;s credential</span></div>
        <div class="credcard">
          <div class="cc-head"><span>betterplace · <b>verified worker</b></span><span>BP-30M-118</span></div>
          <div class="cc-me">
            <div class="cc-avatar">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" fill="#131c4f"/>
                <circle cx="50" cy="118" r="50" fill="#1B2D93"/>
                <rect x="26" y="86" width="48" height="8" rx="3" fill="#FFC401" opacity=".92"/>
                <circle cx="50" cy="46" r="21" fill="#e8a66b"/>
                <path d="M27 44 A23 23 0 0 1 73 44 L73 36 A23 21 0 0 0 27 36 Z" fill="#FFC401"/>
                <rect x="25" y="41" width="50" height="4" rx="2" fill="#d9a400"/>
                <circle cx="43" cy="50" r="2.4" fill="#1c1c2e"/>
                <circle cx="57" cy="50" r="2.4" fill="#1c1c2e"/>
                <path d="M44 58 Q50 63 56 58" stroke="#1c1c2e" stroke-width="2" fill="none" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="cc-name">
              <h4>Ravi Kumar</h4>
              <p>Delivery Partner · Bengaluru<br/>On platform since Mar 2026</p>
              <span class="cc-verified"><i></i>BGV GREEN · 4/4 CHECKS</span>
            </div>
          </div>
          <div class="cc-grid">
            <div class="cc-cell">Verified shifts<b>52</b></div>
            <div class="cc-cell">On-time rate<b>98.2%</b></div>
            <div class="cc-cell">PF trail<b>2 months ✓</b></div>
            <div class="cc-cell">Languages<b>हिंदी · ಕನ್ನಡ</b></div>
          </div>
          <div class="cc-badges"><span class="cc-badge">Surge-shift certified</span><span class="cc-badge">Road safety ✓</span><span class="cc-badge">Customer basics ✓</span></div>
          <div class="cc-foot">Verified once · trusted everywhere · owned by the worker</div>
        </div>
        <div class="mockcap">One of <b>30 million</b> records like this — the asset under the whole company</div>
      </div>
    </div>`},{id:`ns11`,theme:`dark`,title:`Retail Samarth`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Meanwhile, 1,000 km away · the same loop, opened to everyone</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">Retail Samarth — India's largest <span style="color:var(--yellow)">public retail skilling school.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">Built with Reliance Retail, free and open: anyone in India can learn retail skills in their own language, earn a certificate, and walk out with a pre-verified talent profile that 18,000+ stores hire from. No fees. No connections needed. A door, where there wasn't one.</p>
        <div class="stats rise" style="animation-delay:.3s;margin-top:22px;gap:18px 34px;">
          <div class="stat"><div class="n">800K+</div><div class="l">Downloads · free &amp; open</div></div>
          <div class="stat"><div class="n">14</div><div class="l">Languages</div></div>
          <div class="stat"><div class="n">8 weeks</div><div class="l">Idea to live</div></div>
          <div class="stat"><div class="n">1.5L+</div><div class="l">Annual hires through the funnel</div></div>
        </div>
        <div class="clientline rise" style="animation-delay:.45s;color:rgba(255,255,255,.65);margin-top:16px;">Skill someone publicly, verify them once, and they carry a record of their own into a job — the same loop Ravi rode, opened to anyone with a phone.</div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag w"><i></i>Ravi&rsquo;s screen</span></div>
        <div class="jobmock">
          <div class="jm-screen">
            <div class="jm-top"><h5>Retail Samarth</h5><p>मुफ़्त retail skilling · <b>certificate + job profile</b></p></div>
            <div class="jm-card" style="--d:.55s">
              <div class="jm-org">Course 1 · ग्राहक सेवा</div>
              <div class="jm-role">Customer service basics ✓</div>
              <div class="jm-note">Completed · certificate issued</div>
            </div>
            <div class="jm-card" style="--d:.9s">
              <div class="jm-org">Course 2 · billing</div>
              <div class="jm-role">POS &amp; billing</div>
              <div class="jm-prog"><i style="--w:45%;--d:1.2s"></i></div>
              <div class="jm-note">In progress · 45%</div>
            </div>
            <div class="jm-verdict" style="--d:1.5s">Profile visible to 18,000+ stores</div>
            <div class="jm-foot"><em></em>Free · open · 14 languages</div>
          </div>
        </div>
        <div class="mockcap">A door, where there wasn&rsquo;t one · <b>800K+ downloads</b></div>
      </div>
    </div>`},{id:`ns12`,theme:`darker`,title:`The colleagues Ravi never met`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">One more thing about Ravi's month</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:34ch;">Five of the people who handled him <span style="color:var(--yellow)">weren't people.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:10px;max-width:100ch;">We won't lead with "AI" — everyone uses it. But look back at the story: the 8 pm call, the overnight checks, the 45-minute joining, the answers at 2 am. Agents did that — real phone calls in 24 languages, on open-source models on our own cloud, so worker data never leaves.</p>
      <div class="agents rise" style="animation-delay:.28s;margin-top:18px;grid-template-columns:repeat(5,1fr);">
        <div class="ag" style="--ac:#7C6BF0"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Screening</div><h4>AI Jack</h4><p>Made the 8 pm call. Screens every applicant, overnight.</p></div>
        <div class="ag" style="--ac:#FFC401"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Verification</div><h4>AI Cole</h4><p>Ran the document and face checks while Ravi slept.</p></div>
        <div class="ag" style="--ac:#FF7A59"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Onboarding</div><h4>AI Mia</h4><p>Ran the 45-minute joining from the tea stall.</p></div>
        <div class="ag" style="--ac:#3DBE7B"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Tutor</div><h4>AI Theo</h4><p>Answers his "how do I…" questions at 2 am, with citations.</p></div>
        <div class="ag" style="--ac:#32CAD4"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Sales coach</div><h4>AI Max</h4><p>Coaches ~30,000 salespeople at IFFCO Tokio today.</p></div>
      </div>
      <div class="modelrow rise" style="animation-delay:.44s;margin-top:16px;">
        <div class="mstat"><div class="n">₹0.37</div><div class="l">Per agent conversation</div></div>
        <div class="mstat"><div class="n">₹5/min</div><div class="l">Real phone calls, vs ₹12 industry</div></div>
        <div class="mstat"><div class="n">10 min</div><div class="l">To build a new agent, no code</div></div>
        <div class="mstat"><div class="n">0</div><div class="l">Bytes of worker data leave our cloud</div></div>
      </div>
    </div>`},{id:`ns12b`,theme:`light`,title:`Who trusts us`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Proof · who runs on this</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:34ch;">Names you know. <span style="color:var(--navy)">Frontlines we run.</span></h2>
      <div class="rise" style="animation-delay:.22s;background:#fff;border-radius:18px;padding:20px 24px;box-shadow:0 18px 44px rgba(11,18,55,.1);border:1px solid rgba(11,18,55,.06);max-width:960px;margin:14px auto 0;">
        <img src="assets/product/client-logo-wall.jpg" alt="Enterprises running on BetterPlace" style="display:block;width:100%;height:auto;" loading="lazy"/>
      </div>
      <div class="mockcap" style="margin-top:12px;">1,100+ enterprises · retail, e-commerce, quick commerce, BFSI, manufacturing, hospitality · <b>&gt;95% stay</b></div>
    </div>`},{id:`ns13`,theme:`dark`,title:`Why we exist`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">Why we exist</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:32ch;">Ravi is one of <span style="color:var(--yellow)">30 million.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:12px;max-width:96ch;">Ten years in: 30M+ worker profiles, 1,100+ enterprises, 500+ cities, 8 markets across India, Southeast Asia and the Gulf. And a real business underneath — the staffing arm alone does $105M+ in annual gross revenue.</p>
      <div class="modelrow rise" style="animation-delay:.28s;margin-top:18px;">
        <div class="mstat"><div class="n">30M+</div><div class="l">Workers with a record of their own</div></div>
        <div class="mstat"><div class="n">1,100+</div><div class="l">Enterprises on the platform</div></div>
        <div class="mstat"><div class="n">$105M+</div><div class="l">Annual gross revenue, staffing alone</div></div>
        <div class="mstat"><div class="n">2.35 cr</div><div class="l">Gig workers by 2030 — the wave underneath</div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.44s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">The next hundred million jobs in India will be frontline jobs. <b>We intend to be the system they run on.</b></div>
    </div>`}],Te={ns1:[[`BetterPlace · the story of one rider, and 30 million`,`BetterPlace · a first-principles story for Nikhil Kamath`],[`This is the story of the platform they never had — told through one rider's first thirty days.`,`This is the story of the infrastructure they never had — seen through one illustrative worker and the enterprise operating around him.`]],ns2r:[[`The supply side · and the demand side`,`An illustrative composite · the supply side and the demand side`],[`Meet Ravi.`,`Meet Ravi.`]],ns5:[[`Ravi&rsquo;s screen`,`Worker view · discovery without a CV`],[`What Ravi sees · 3–4K join like this every month · <b>apply → shortlist in &lt;24 hr</b>`,`Worker benefit: a nearby, credible job in his language · <b>Employer benefit: a qualified funnel in &lt;24 hr</b>`]],ns6:[[`The employer&rsquo;s screen`,`Employer view · risk before deployment`],[`What the ops team wakes up to · every case dated &amp; audit-ready · <b>turnaround &lt;24 hr</b>`,`Worker benefit: one reusable verification · <b>Employer benefit: a dated, audit-ready risk portfolio in &lt;24 hr</b>`]],ns7:[[`The employer&rsquo;s screen`,`Employer view · one joining control room`],[`What the ops team sees · who is stuck, and where · <b>0 office visits, 0 photocopies</b>`,`Worker benefit: join from anywhere · <b>Employer benefit: every bottleneck visible, 0 re-entry</b>`]],ns8:[[`The employer&rsquo;s screen`,`Employer view · the workforce, live`],[`The hub manager&rsquo;s live view while Ravi punches in · <b>no card, no register, no buddy-punching</b>`,`Worker benefit: a trusted shift history · <b>Employer benefit: live presence without cards, registers or buddy-punching</b>`]],ns9:[[`The employer&rsquo;s side`,`Employer view · every liability before the audit`],[`Ravi&rsquo;s side`,`Worker view · every rupee explained`],[`Caught this month, not at the audit · Reliance runs <b>3,000+ vendors</b> here · <b>−90% leakage</b>`,`Employer benefit: leakage and statutory exposure caught before payout · <b>3,000+ vendors · −90% leakage</b>`],[`Paid from face-verified shifts, every line explained — <b>his first financial document</b>`,`Worker benefit: pay he can understand, question and prove · <b>his first financial document</b>`]],ns10:[[`Ravi&rsquo;s screen`,`Worker view · learning that unlocks earnings`],[`Training between orders · <b>88% finish, against 25% industry</b>`,`Worker benefit: credentials that unlock better shifts · <b>Employer benefit: 88% completion and deployment readiness</b>`]],ns10b:[[`Ravi&rsquo;s credential`,`The shared asset · owned by the worker, trusted by employers`],[`One of <b>30 million</b> records like this — the asset under the whole company`,`One of <b>30 million</b> compounding records — portable for Ravi, lower-friction for every next employer`]],ns11:[[`Ravi&rsquo;s screen`,`Worker view · a public path into retail`]],ns12:[[`We won't lead with "AI" — everyone uses it.`,`AI is not the story by itself.`]],ns13:[[`And a real business underneath — the staffing arm alone does $105M+ in annual gross revenue.`,`And there is a scaled operating business underneath — the staffing arm alone does $105M+ in annual gross revenue; segment margins, software mix and cohort economics remain the next underwriting questions.`]]},Ee=(e,t)=>t.reduce((e,[t,n])=>e.replace(t,n),e),De=e=>e.replace(`class="slidebody split"`,`class="slidebody split nk-rich"`).replace(`class="slidebody"`,`class="slidebody nk-rich"`).replace(`class="mdcover"`,`class="mdcover nk-rich"`),Oe=we.map((e,t)=>({...e,id:`nkr${t+1}`,html:De(Ee(e.html,Te[e.id]??[]))})),ke=[{id:`sl1`,theme:`darker`,title:`Cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">Prepared for SAEL · contract workforce &amp; plant compliance</span>
      <h1 class="rise" style="animation-delay:.15s">Every contract worker on your sites, <span style="color:var(--yellow)">on one record.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">Work orders, CLRA licences, vendor PF and ESI, gate passes, attendance and overtime — run as one system across every plant, project site and biomass yard. This is what we already run for Bharat Petroleum.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:30px;">
        <div class="stat"><div class="n">3,000+</div><div class="l">Vendors on one engine (Reliance)</div></div>
        <div class="stat"><div class="n">−90%</div><div class="l">Payroll leakage</div></div>
        <div class="stat"><div class="n">−80%</div><div class="l">Vendor non-compliance risk</div></div>
        <div class="stat"><div class="n">10+</div><div class="l">Years on frontline compliance</div></div>
      </div>
      <div class="mdcover ghost">CLRA</div>
    </div>`},{id:`sl1b`,theme:`light`,title:`Who we are`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Who you would be working with</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Ten years building for the people <span style="color:var(--navy)">who work on their feet.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:8px;max-width:104ch;">BetterPlace started in 2015 in Bengaluru with background verification, and grew into the platform that runs the whole working life of a frontline worker — hiring, verification, onboarding, attendance, payroll, compliance and training. Three parts to the business: <b>goBetter</b> is the software, <b>staffBetter</b> supplies and employs workers on our own payroll, and <b>gigBetter</b> handles on-demand deployment.</p>
      <div class="modelrow rise" style="animation-delay:.26s;margin-top:14px;">
        <div class="mstat"><div class="n">2015</div><div class="l">Founded · HQ Bengaluru</div></div>
        <div class="mstat"><div class="n">30M+</div><div class="l">Verified worker profiles</div></div>
        <div class="mstat"><div class="n">1,100+</div><div class="l">Enterprises · 500+ cities</div></div>
        <div class="mstat"><div class="n">8</div><div class="l">Markets · India, SEA, GCC</div></div>
      </div>
      <div class="rise" style="animation-delay:.36s;background:#fff;border-radius:16px;padding:14px 18px;border:1px solid rgba(11,18,55,.07);box-shadow:0 12px 30px rgba(11,18,55,.07);max-width:1080px;margin:14px auto 0;">
        <img src="assets/product/client-logo-wall.jpg" alt="Enterprises running on BetterPlace" style="display:block;width:100%;height:auto;max-height:29vh;object-fit:contain;" loading="lazy"/>
      </div>
      <div class="clientline rise" style="animation-delay:.46s;margin-top:10px;text-align:center;">ISO 27001 · SOC 2 · manufacturing customers include Reliance, Hindalco, AGI Glaspac, Yokohama and BPCL</div>
    </div>`},{id:`sl2`,theme:`dark`,title:`Your three workforces`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">What we understand about SAEL</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:36ch;">Three businesses. <span style="color:var(--yellow)">Three very different workforces.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:18px;animation-delay:.2s">
        <div class="case" style="--pc:#FFC401">
          <div class="ch"><span class="cn">Solar manufacturing</span></div>
          <p><b>Fixed plants, shift work.</b> TOPCon cell and module lines in Rajasthan and Punjab, and the new 5 GW plant coming up in Greater Noida. Contract workers on production lines, housekeeping, material handling and security — running three shifts against a takt time.</p>
          <div class="cm"><div class="m"><div class="mn">Shifts</div><div class="ml">round the clock</div></div><div class="m"><div class="mn">One state</div><div class="ml">per plant, per rule set</div></div></div>
        </div>
        <div class="case" style="--pc:#39D2E8">
          <div class="ch"><span class="cn">Solar EPC &amp; IPP sites</span></div>
          <p><b>Moving sites, many contractors.</b> Project sites across ten states and a union territory. Crews arrive, build, and move on — every mobilisation is a fresh set of contractors, licences, inductions and gate passes, under a different state's rules.</p>
          <div class="cm"><div class="m"><div class="mn">10+ states</div><div class="ml">different wage floors</div></div><div class="m"><div class="mn">Mobilise</div><div class="ml">and demobilise, repeatedly</div></div></div>
        </div>
        <div class="case" style="--pc:#3BE8B0">
          <div class="ch"><span class="cn">Biomass · paddy straw</span></div>
          <p><b>Seasonal surges.</b> Eleven plants running on stubble, with collection, baling and transport crews that spike hard around the harvest and shrink again. Headcount that triples for a season is the hardest kind to keep compliant.</p>
          <div class="cm"><div class="m"><div class="mn">Seasonal</div><div class="ml">surge staffing</div></div><div class="m"><div class="mn">Rural</div><div class="ml">supply chains</div></div></div>
        </div>
      </div>
      <div class="probfoot rise" style="animation-delay:.44s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">One thing is common to all three: <b>most of the people on site are not on your payroll.</b> They work for contractors — and the law still treats them as your responsibility.</div>
    </div>`},{id:`sl2b`,theme:`light`,title:`Where it breaks at scale`,html:`
    <div class="fullslide"><img src="assets/product/sael/breaks-at-scale.jpg" alt="Where frontline workforce systems break at scale"/></div>`},{id:`sl3`,theme:`light`,title:`Why now`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Why this matters more this year than last</span>
        <h2 class="rise" style="animation-delay:.08s;">Contract labour just became <span style="color:var(--navy)">a board-level number.</span></h2>
        <div class="featlist">
          ${b(w.chart,`A listing puts labour data on the record`,`Once you file, workforce numbers stop being an internal matter. BRSR reporting asks for contract worker counts, safety incidents, wages and welfare — reported, audited and compared year on year.`,.22)}
          ${b(w.globe,`Development finance asks harder questions`,`An investor like Norfund brings international labour standards into diligence — contractor practices, safety, and how you prove any of it.`,.3)}
          ${b(w.map,`Ten states means ten rule sets`,`Minimum wages, CLRA rules, factory rules and overtime limits all vary by state. Spreadsheets do not vary by state.`,.38)}
          ${b(w.building,`The next plant multiplies it`,`A 5 GW plant means a construction phase, then a production phase — hundreds of contractor workers onboarded twice over, at one site.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>What an auditor asks for</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>the questions that are hard to answer today</span></div>
          <div class="fm-body">
            <div class="fm-rows">
              <div class="fm-row" style="--d:.5s"><span><b>How many contract workers were on site last March?</b> <small>by plant, by contractor, by day</small></span><span class="fm-chip y">?</span></div>
              <div class="fm-row" style="--d:.7s"><span><b>Did every contractor stay inside licensed strength?</b> <small>every day, every site</small></span><span class="fm-chip y">?</span></div>
              <div class="fm-row" style="--d:.9s"><span><b>Was PF deposited for each of them?</b> <small>worker by worker, not vendor total</small></span><span class="fm-chip y">?</span></div>
              <div class="fm-row" style="--d:1.1s"><span><b>Show the overtime register for Q2.</b> <small>hours, approvals, double-rate payment</small></span><span class="fm-chip y">?</span></div>
              <div class="fm-row" style="--d:1.3s"><span><b>Prove every worker cleared safety induction.</b> <small>dated, per worker</small></span><span class="fm-chip y">?</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">Each of these is a screen in our platform, answerable in seconds</div>
      </div>
    </div>`},{id:`sl4`,theme:`dark`,title:`What you owe`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The obligation map · what a principal employer carries</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:40ch;">Twelve obligations. <span style="color:var(--yellow)">Most companies track them in twelve different places.</span></h2>
      <div class="compmap">
        <div class="compcell" style="--cc:#FFC401;--d:.2s"><div class="act">CLRA · Sec 7</div><h4>Your registration</h4><p>The plant registers as principal employer once contract workers cross the threshold.</p><span class="who ok">Held by you</span></div>
        <div class="compcell" style="--cc:#FFC401;--d:.26s"><div class="act">CLRA · Sec 12</div><h4>Contractor licence</h4><p>Every contractor licensed against your Form V, for a fixed maximum headcount.</p><span class="who">Vendor gap = your gap</span></div>
        <div class="compcell" style="--cc:#FFC401;--d:.32s"><div class="act">CLRA · registers</div><h4>Forms XII, XIII, XIV</h4><p>Register of contractors, register of workmen, an employment card for each worker.</p><span class="who">Usually paper</span></div>
        <div class="compcell" style="--cc:#FFC401;--d:.38s"><div class="act">CLRA · returns</div><h4>Half-yearly &amp; annual</h4><p>Contractor files Form XXIV twice a year; you file Form XXV by 15 February.</p><span class="who">Deadline-driven</span></div>
        <div class="compcell" style="--cc:#39D2E8;--d:.44s"><div class="act">EPF · Sec 8A</div><h4>Provident fund</h4><p>If a contractor does not deposit PF for their workers, the liability lands on you.</p><span class="who">12% interest · 1%/month damages</span></div>
        <div class="compcell" style="--cc:#39D2E8;--d:.5s"><div class="act">ESI · Sec 40</div><h4>State insurance</h4><p>You pay contribution for anyone employed through a contractor who is not independently compliant.</p><span class="who">Yours by default</span></div>
        <div class="compcell" style="--cc:#39D2E8;--d:.56s"><div class="act">CLRA · Sec 21</div><h4>Wages, if they fail</h4><p>When a contractor short-pays wages, you pay in full and recover later. No clause changes that.</p><span class="who">Strict liability</span></div>
        <div class="compcell" style="--cc:#39D2E8;--d:.62s"><div class="act">State rules</div><h4>Minimum wage</h4><p>Different floor per state and per skill grade, revised twice a year.</p><span class="who">Varies by site</span></div>
        <div class="compcell" style="--cc:#3BE8B0;--d:.68s"><div class="act">Factories Act · 51–59</div><h4>Hours &amp; overtime</h4><p>9 hours a day, 48 a week, overtime at twice the ordinary rate, with a register.</p><span class="who">Quarterly caps apply</span></div>
        <div class="compcell" style="--cc:#3BE8B0;--d:.74s"><div class="act">EC Act 1923</div><h4>Workmen's compensation</h4><p>Cover for injury or death. If the contractor has none, it attaches to you.</p><span class="who">Check expiry dates</span></div>
        <div class="compcell" style="--cc:#3BE8B0;--d:.8s"><div class="act">Safety</div><h4>Induction &amp; gate control</h4><p>No one on the floor without induction, PPE sign-off and a valid gate pass.</p><span class="who">ISO 45001 expects proof</span></div>
        <div class="compcell" style="--cc:#8B7CFF;--d:.86s"><div class="act">Labour codes</div><h4>What's coming</h4><p>The four codes fold CLRA into the OSH Code and lift the threshold to 50 workers. States are notifying at different speeds, so multi-state operators will run both regimes for a while.</p><span class="who">Plan for both</span></div>
      </div>
    </div>`},{id:`sl5`,theme:`light`,title:`Work order`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Where it starts · the work order</span>
        <h2 class="rise" style="animation-delay:.08s;">Nothing happens on site <span style="color:var(--navy)">without a work order behind it.</span></h2>
        <div class="featlist">
          ${b(w.doc,`The work order is the parent record`,`Scope, sanctioned headcount, rate card, duration and billing all sit on it. Every worker a contractor deploys is attached to one.`,.22)}
          ${b(w.users,`Headcount is capped, not assumed`,`Sanctioned strength is set on the order and checked against the contractor\\u2019s CLRA licence. Deploy the 51st worker against a 50-worker licence and the system stops you, not the inspector.`,.3)}
          ${b(w.card,`Billing reconciles to attendance`,`The invoice is checked against verified attendance on that work order. You pay for shifts that happened.`,.38)}
          ${b(w.shield,`Compliance gates payment`,`PF and ESI challans for the period become a condition of releasing the bill. The leverage sits where it works.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Work order on the platform</span></div>
        <div class="wocard">
          <div class="wohead"><b>WO-2026-SLR-114</b><span>MODULE LINE 2 · RAJASTHAN</span></div>
          <div class="wogrid">
            <div><div class="k">Contractor</div><div class="v">Shree Manpower</div></div>
            <div><div class="k">Sanctioned headcount</div><div class="v">180</div></div>
            <div><div class="k">Deployed today</div><div class="v ok">174 · within licence</div></div>
            <div><div class="k">CLRA licence</div><div class="v ok">Valid to 31 Mar 2027</div></div>
            <div><div class="k">Rate card</div><div class="v">Skilled / semi / unskilled</div></div>
            <div><div class="k">WC policy</div><div class="v warn">Expires in 19 days</div></div>
          </div>
          <div class="wofoot">April invoice held: <b>PF challan pending</b> for 6 workers. Bill releases when the challan reconciles.</div>
        </div>
        <div class="mockcap">One order, one contractor, one set of limits — and every worker underneath it</div>
      </div>
    </div>`},{id:`sl6`,theme:`light`,title:`CLRA licensed strength`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">CLRA · licensed strength</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:40ch;">A contractor's licence sets a ceiling. <span style="color:var(--navy)">Most plants find out they crossed it much later.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:8px;max-width:100ch;">Each licence fixes the maximum workers that contractor may deploy at your establishment. Cross it and the licence can be suspended and work stopped. Here is the same view for one plant, updated as people badge in.</p>
      <div class="lsmeter rise" style="animation-delay:.24s">
        <div class="lsrow"><span class="nm">Shree Manpower</span><span class="lsbar"><i style="--w:87%;--d:.4s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">174 / 200<small>within licence</small></span></div>
        <div class="lsrow"><span class="nm">Ganpati Services</span><span class="lsbar"><i style="--w:71%;--d:.55s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">106 / 150<small>within licence</small></span></div>
        <div class="lsrow"><span class="nm">Bhoomi Facility</span><span class="lsbar over"><i style="--w:100%;--d:.7s"></i><span class="cap" style="--cap:84%"></span></span><span class="vs"><em>63 / 53</em><small>10 over — blocked at gate</small></span></div>
        <div class="lsrow"><span class="nm">Krishna Logistics</span><span class="lsbar"><i style="--w:46%;--d:.85s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">37 / 80<small>within licence</small></span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:1s">The gate does the enforcing. <b>Worker 54 from Bhoomi Facility cannot get a pass</b> until the contractor raises licensed strength or another worker stands down — and the whole trail is dated for the inspector.</div>
    </div>`},{id:`sl7`,theme:`light`,title:`Vendor compliance`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Vendor statutory compliance · the flagship</span>
        <h2 class="rise" style="animation-delay:.08s;">A vendor skips PF. <span style="color:var(--navy)">The bill reaches you.</span></h2>
        <div class="featlist">
          ${b(w.search,`Challans read automatically`,`Vendors upload PF and ESI challans. OCR pulls out UANs, amounts and the period — no one retypes anything.`,.22)}
          ${b(w.check,`Matched worker by worker`,`Paid is compared against what was due for each named worker, not against a vendor total. That is where short payments hide.`,.3)}
          ${b(w.warn,`Gaps surface the same month`,`Short payments, missing deposits and wrong UANs are flagged while you can still hold a bill — instead of at an audit, with interest running at 12% a year and damages on top.`,.38)}
          ${b(w.doc,`Due diligence, on the record`,`Every check is dated and stored. If a contractor defaults anyway, you can show exactly what you did and when.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Vendor compliance console</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>vendor compliance · april · 44 vendors</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">41<small>clear</small></span>
              <span class="y">1<small>filed late</small></span>
              <span class="r">2<small>short</small></span>
            </div>
            <div class="fm-rows">
              <div class="fm-row" style="--d:.5s"><span><b>Shree Manpower</b> <small>174 workers matched, challan verified</small></span><span class="fm-chip g">CLEAR</span></div>
              <div class="fm-row hl" style="--d:.7s"><span><b>Bhoomi Facility</b> <small>PF short ₹48,210 · 61 workers · bill held</small></span><span class="fm-chip r">PF SHORT</span></div>
              <div class="fm-row" style="--d:.9s"><span><b>Krishna Logistics</b> <small>ESI not deposited · 24 workers</small></span><span class="fm-chip r">ESI SHORT</span></div>
              <div class="fm-row" style="--d:1.1s"><span><b>Ganpati Services</b> <small>challan filed 6 days late — noted</small></span><span class="fm-chip y">LATE</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">Reliance runs <b>3,000+ vendors</b> this way · <b>−80%</b> non-compliance risk, <b>−90%</b> payroll leakage</div>
      </div>
    </div>`},{id:`sl8`,theme:`light`,title:`Attendance`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Attendance · the layer everything else computes from</span>
        <h2 class="rise" style="animation-delay:.08s;">Who was actually inside the plant, <span style="color:var(--navy)">and when.</span></h2>
        <div class="featlist">
          ${b(w.eye,`Face at the gate, no proxies`,`Face verification with spoof detection. A photo held to the camera does not open the gate, and neither does a friend with someone else\\u2019s card.`,.22)}
          ${b(w.map,`Inside the fence, or it does not count`,`Attendance marks within the plant boundary. For biomass yards and project sites, each location gets its own fence.`,.3)}
          ${b(w.clock,`Shifts as your plant runs them`,`Three shifts, night shifts crossing midnight, seasonal rosters for the harvest — set as rules, not chased in a register.`,.38)}
          ${b(w.plug,`Works with the hardware you have`,`Face and fingerprint terminals at gates, or phones for crews in the field. Both feed the same record.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Gate view · live</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>attendance · module plant · shift A · 07:04</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">612<small>inside</small></span>
              <span class="y">14<small>late</small></span>
              <span class="r">5<small>blocked</small></span>
            </div>
            <div class="fm-rows">
              <div class="fm-row" style="--d:.5s"><span><b>Ramesh P.</b> <small>06:58 · face matched · Shree Manpower · WO-114</small></span><span class="fm-chip g">IN</span></div>
              <div class="fm-row hl" style="--d:.7s"><span><b>Suresh K.</b> <small>safety induction expired 3 days ago</small></span><span class="fm-chip r">BLOCKED</span></div>
              <div class="fm-row" style="--d:.9s"><span><b>Manoj T.</b> <small>contractor over licensed strength</small></span><span class="fm-chip r">BLOCKED</span></div>
              <div class="fm-row" style="--d:1.1s"><span><b>Vijay S.</b> <small>marked from outside the plant boundary</small></span><span class="fm-chip r">REJECTED</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">Zepto runs this across <b>967 sites</b> for 15,000 workers · <b>40%</b> cost saved</div>
      </div>
    </div>`},{id:`sl9`,theme:`light`,title:`Overtime`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Overtime · the quiet liability</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:42ch;">Overtime is legal, capped, and paid at double. <span style="color:var(--navy)">All three get missed.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:8px;max-width:104ch;">The Factories Act allows 9 hours a day and 48 a week, with overtime beyond that paid at twice the ordinary rate and recorded in a register. Quarterly limits apply and vary by state. When overtime lives in a supervisor's notebook, none of it is provable.</p>
      <div class="otwrap rise" style="animation-delay:.24s">
        <div class="otrow"><span class="nm">Module Line 1</span><span class="otbar"><i style="--w:42%;--d:.4s"></i></span><span class="val">21 hrs<small>of quarter cap</small></span></div>
        <div class="otrow"><span class="nm">Module Line 2</span><span class="otbar hot"><i style="--w:78%;--d:.55s"></i></span><span class="val">39 hrs<small>approaching cap</small></span></div>
        <div class="otrow"><span class="nm">Packing &amp; dispatch</span><span class="otbar over"><i style="--w:100%;--d:.7s"></i></span><span class="val"><em>52 hrs</em><small>over — approvals frozen</small></span></div>
        <div class="otrow"><span class="nm">Biomass yard · Bhadra</span><span class="otbar hot"><i style="--w:66%;--d:.85s"></i></span><span class="val">33 hrs<small>harvest season</small></span></div>
      </div>
      <div class="capgrid rise" style="animation-delay:1s;grid-template-columns:repeat(3,1fr);margin-top:16px;">
        <div class="cap"><h4>Approved before it is worked</h4><p>Supervisor raises it, the plant's approval chain clears it, and the worker knows before the shift. No retrospective arguments.</p></div>
        <div class="cap"><h4>Paid at the right rate</h4><p>Overtime hours flow into payroll at twice the ordinary rate on their own, so the calculation is not somebody's judgement call.</p></div>
        <div class="cap"><h4>The register writes itself</h4><p>Hours, approvals and payment sit in one dated record you can hand to an inspector.</p></div>
      </div>
    </div>`},{id:`sl10`,theme:`dark`,title:`Gate pass and safety`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Gate pass &amp; safety induction</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">The pass only opens <span style="color:var(--yellow)">when everything behind it is true.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:8px;">Roughly three in four factory accidents in India involve contract or temporary workers — the people your induction reaches least. So we made the pass conditional.</p>
        <div class="featlist">
          ${b(w.check,`Five conditions, checked together`,`A valid work order, room inside licensed strength, a cleared background check, current WC cover, and a passed safety induction. Miss one and no pass is issued.`,.26)}
          ${b(w.book,`Induction in the worker\\u2019s language`,`SOP, a short video and a quiz on their phone, in Hindi, Punjabi or whatever they speak. A certificate is issued and dated.`,.34)}
          ${b(w.clock,`Passes expire, and so do policies`,`Induction validity and WC expiry are tracked. The system warns before someone works uninsured or un-inducted, not after.`,.42)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Gate pass · issue check</span></div>
        <div class="jobmock">
          <div class="jm-screen">
            <div class="jm-top"><h5>Gate pass · Suresh K.</h5><p>Bhoomi Facility · <b>WO-2026-SLR-118</b></p></div>
            <div class="jm-checks">
              <div class="jm-check" style="--d:.5s"><span class="tick">✓</span><div>Work order valid<small>Housekeeping · Line 2</small></div></div>
              <div class="jm-check" style="--d:.75s"><span class="tick">✓</span><div>Background check clear<small>Verified 12 Mar</small></div></div>
              <div class="jm-check" style="--d:1s"><span class="tick">✓</span><div>WC policy active<small>Valid to 30 Sep</small></div></div>
              <div class="jm-check" style="--d:1.25s"><span class="tick" style="background:rgba(208,39,29,.14);color:#c02417;">✕</span><div>Safety induction expired<small>Lapsed 3 days ago — refresher pushed to his phone</small></div></div>
            </div>
            <div class="jm-verdict" style="--d:1.6s;background:#c02417;">Pass withheld · 4 of 5 clear</div>
            <div class="jm-foot"><em></em>Reinstates the moment the quiz is passed</div>
          </div>
        </div>
        <div class="mockcap">The same gate logic runs at BPCL today</div>
      </div>
    </div>`},{id:`sl11`,theme:`light`,title:`One record`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">How the pieces hold together</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:38ch;">Six systems for most plants. <span style="color:var(--navy)">One record here.</span></h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(6,1fr);margin-top:20px;">
        <div class="rstage"><div class="rn">01</div><h4>Vendor</h4><ul><li>Onboarded once</li><li>Licence on file</li><li>WC policy tracked</li></ul></div>
        <div class="rstage"><div class="rn">02</div><h4>Work order</h4><ul><li>Scope &amp; headcount</li><li>Rate card</li><li>Billing terms</li></ul></div>
        <div class="rstage"><div class="rn">03</div><h4>Worker</h4><ul><li>Verified, inducted</li><li>Mapped to the order</li><li>Gate pass issued</li></ul></div>
        <div class="rstage"><div class="rn">04</div><h4>Attendance</h4><ul><li>Face at the gate</li><li>Inside the fence</li><li>Shift &amp; overtime</li></ul></div>
        <div class="rstage"><div class="rn">05</div><h4>Pay</h4><ul><li>From verified hours</li><li>Minimum wage checked</li><li>Overtime at 2×</li></ul></div>
        <div class="rstage"><div class="rn">06</div><h4>Compliance</h4><ul><li>Challans reconciled</li><li>Registers &amp; returns</li><li>Audit file, always current</li></ul></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s">Because it is one record, a question like <b>"show me every worker of this contractor, on this order, in March, with their PF status"</b> is a filter — not a three-week reconciliation exercise.</div>
    </div>`},{id:`sl11b`,theme:`light`,title:`Eleven modules`,html:`
    <div class="fullslide"><img src="assets/product/sael/lifecycle-11-modules.jpg" alt="The complete contractual and frontline workforce lifecycle - eleven modules"/></div>`},{id:`sl12`,theme:`darker`,title:`AI Labs`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">AI Labs · the layer underneath</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:38ch;">The checking is the part that never scales. <span style="color:var(--yellow)">So agents do it.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:8px;max-width:104ch;">These run on open-source models on our own cloud, so worker data stays with us and never goes to an outside AI service. ISO 27001 and SOC 2 certified.</p>
      <div class="agents rise" style="animation-delay:.26s;margin-top:16px;grid-template-columns:repeat(4,1fr);">
        <div class="ag" style="--ac:#FFC401"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Statutory watch</div><h4>AI Dev</h4><p>Reads every vendor challan, matches it worker by worker, and flags what is short — the same night it is uploaded.</p></div>
        <div class="ag" style="--ac:#39D2E8"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat beta"><span class="d"></span>Beta</span></div><div class="role">Verification</div><h4>AI Cole</h4><p>Runs identity, document and face checks on new contractor workers before they reach the gate.</p></div>
        <div class="ag" style="--ac:#3BE8B0"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Safety induction</div><h4>AI Rhea</h4><p>Takes a worker through the SOP, video and quiz in their own language, then issues the certificate that activates the pass.</p></div>
        <div class="ag" style="--ac:#8B7CFF"><div class="agtop"><span class="agbot"><span class="head"></span><span class="eyes"><i></i><i></i></span></span><span class="agstat live"><span class="d"></span>Live</span></div><div class="role">Questions</div><h4>AI Theo</h4><p>Answers "what is my PF number", "when is my shift", "how do I claim" — on a phone call or chat, at any hour, in 24 languages.</p></div>
      </div>
      <div class="modelrow rise" style="animation-delay:.44s;margin-top:16px;">
        <div class="mstat"><div class="n">₹0.37</div><div class="l">Per conversation</div></div>
        <div class="mstat"><div class="n">₹5/min</div><div class="l">Voice calls, against ₹12 industry</div></div>
        <div class="mstat"><div class="n">24</div><div class="l">Languages</div></div>
        <div class="mstat"><div class="n">0</div><div class="l">Worker data leaving our cloud</div></div>
      </div>
    </div>`},{id:`sl13`,theme:`dark`,title:`BPCL proof`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Proof · this is not a prototype</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">We run exactly this today for <span style="color:var(--yellow)">Bharat Petroleum.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">BPCL runs its contract workforce on our platform — the vendor and workforce management system that sits across their sites. A public sector oil company, with the audit scrutiny that comes with it, chose this stack and still runs on it.</p>
        <div class="featlist">
          ${b(w.building,`Vendors and work orders`,`Contractors onboarded, work orders issued, deployment tracked against them, invoices reconciled to attendance.`,.26)}
          ${b(w.lock,`Gate and visitor control`,`Contract workmen enrolled with biometrics, gate passes issued against valid orders, visitors handled in the same flow.`,.34)}
          ${b(w.plug,`Wired into SAP`,`Vendors become selectable once SAP integration and the PO are in place, with identity handled through their own data vault.`,.42)}
          ${b(w.trophy,`Incentives on the same platform`,`The same system carries their incentive programme for the field workforce.`,.5)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Also running on this stack</span></div>
        <div class="compmap" style="grid-template-columns:1fr 1fr;">
          <div class="compcell" style="--cc:#FFC401;--d:.4s"><div class="act">Retail · 300K+ workers</div><h4>Reliance</h4><p>3,000+ vendors on one rule engine. Payroll leakage down 90%, vendor non-compliance down 80%.</p><span class="who ok">Live</span></div>
          <div class="compcell" style="--cc:#39D2E8;--d:.48s"><div class="act">Metals · Aditya Birla</div><h4>Hindalco</h4><p>Shop-floor skilling across plants — 1,000+ workers, 60+ technical modules.</p><span class="who ok">Live</span></div>
          <div class="compcell" style="--cc:#3BE8B0;--d:.56s"><div class="act">Glass manufacturing</div><h4>AGI Glaspac</h4><p>Plant workforce running on the same attendance and compliance spine.</p><span class="who ok">Live</span></div>
          <div class="compcell" style="--cc:#8B7CFF;--d:.64s"><div class="act">Auto components</div><h4>Yokohama</h4><p>Plant operations, contract workforce managed on platform.</p><span class="who ok">Live</span></div>
        </div>
        <div class="mockcap">Ten years · 1,100+ enterprises · 500+ cities. These compliance features exist because customers like these asked for them.</div>
      </div>
    </div>`},{id:`sl14`,theme:`darker`,title:`Next steps`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we would start with SAEL</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:32ch;">One plant. Sixty days. <span style="color:var(--yellow)">Then decide.</span></h2>
      <div class="ctacards" style="margin-top:22px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Pick the hardest site</h4><p>One manufacturing plant with its full contractor set. We load your work orders, contractor licences and rate cards, and map the workers already on site.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>Run the gate and the ledger</h4><p>Face attendance at the gate, gate passes conditional on induction and licence room, and one full month of vendor challan reconciliation against your actual deployment.</p></div>
        <div class="ctac rise" style="animation-delay:.4s"><div class="num">03</div><h4>Read the numbers together</h4><p>Compliance gaps caught, hours corrected, invoice variance found, overtime brought inside the cap. Then extend to the EPC sites and the biomass plants, which need the same spine with different rhythms.</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Bring your last quarter's contractor invoices and one plant's register to the next session. <b>We will reconcile them live and show you what the platform finds.</b></div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:18px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`}],Ae=[{id:`pc1`,theme:`darker`,title:`Cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">For PwC India · contract labour management · joint proposal</span>
      <h1 class="rise" style="animation-delay:.15s;font-size:clamp(30px,3.6vw,54px);">A way to reach the client's 30% deployment target, <span style="color:var(--yellow)">with output, safety and compliance intact.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">An AI upgrade to the client's existing CLMS: one clean master, a demand forecast, auto-scheduling, overtime control, benchmarking and the integrations between them. Plus the automation that takes repetitive time-office work off 155+ people. These are the processes our clients use to run contract labour tighter; the platform already does this at BPCL and Reliance.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:22px;">
        <div class="stat"><div class="n">36K → 25K</div><div class="l">The client's daily deployment target</div></div>
        <div class="stat"><div class="n">155+</div><div class="l">Time-office staff, manual today</div></div>
        <div class="stat"><div class="n">300K+</div><div class="l">Workers live at Reliance</div></div>
        <div class="stat"><div class="n">BPCL</div><div class="l">Contract workforce, live</div></div>
      </div>
      <div class="mdcover ghost">CLMS</div>
    </div>`},{id:`pc2`,theme:`light`,title:`Executive summary`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Executive summary</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Why 36,000 people show up when the plan needs fewer, <span style="color:var(--navy)">and the levers that close the gap.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#D0271D">
          <div class="ch"><span class="cn">Where the client is</span></div>
          <ul class="cl">
            <li>About <b>36,000 contract workers</b> deployed a day</li>
            <li>Planned from last week's numbers and vendor rosters</li>
            <li>The same job named five ways across plants</li>
            <li><b>155+ time-office staff</b> answering queries and keying data by hand</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">What we propose</span></div>
          <ul class="cl">
            <li>One master for positions, skills, vendors, work orders</li>
            <li>A demand forecast per shift and area, from the production plan</li>
            <li>Auto-scheduling that deploys the plan, enforced at the gate, with overtime inside the cap</li>
            <li>Benchmarks across plants and contractors</li>
            <li>Worker self-service and AI agents take the time-office load</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1d7a45">
          <div class="ch"><span class="cn">What it is worth</span></div>
          <ul class="cl">
            <li>Deployment falls as each gap closes. <b>The diagnostic puts a number on it</b> against the 25,000 target</li>
            <li>Overtime paid at premium rates falls once rosters carry a cap</li>
            <li>Most routine time-office queries and reports move to the system</li>
            <li>Leakage and vendor gaps cut at the rates we measured at Reliance (−90%, −80%)</li>
            <li>People redeployed, not removed</li>
          </ul>
        </div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.4s">
        <span class="fc">Clean master<small>one name per job</small></span><span class="fa">→</span>
        <span class="fc">Forecast<small>per shift, per area</small></span><span class="fa">→</span>
        <span class="fc">Auto-roster<small>capped by licence</small></span><span class="fa">→</span>
        <span class="fc hot">Gate enforces it<small>plan = deployment</small></span><span class="fa">→</span>
        <span class="fc gold">Benchmark<small>best plant sets the bar</small></span>
      </div>
    </div>`},{id:`pc3`,theme:`dark`,title:`Two problems`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The two problems, in the client's words</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:46ch;">Two problems: too many workers deployed each day, <span style="color:var(--yellow)">and 155 people doing manual time-office work.</span></h2>
      <div class="twopane">
        <div class="tp emp rise" style="animation-delay:.2s">
          <span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Use case 1 · deployment</span>
          <p class="tpprob" style="color:rgba(255,255,255,.72)"><b style="color:#fff">Target:</b> about 30% fewer contract workers a day, roughly 25,000, with the same output and no compromise on safety or compliance.</p>
          <div class="impacts" style="grid-template-columns:1fr 1fr;margin-top:10px;">
            <div class="imp"><div class="n">~36K</div><div class="l">deployed per day today</div></div>
            <div class="imp" style="background:rgba(59,232,176,.08);border-color:rgba(59,232,176,.3)"><div class="n" style="color:#3BE8B0">~25K</div><div class="l">the client's target, same output</div></div>
          </div>
          <p class="tpprob" style="color:rgba(255,255,255,.62);margin-top:10px"><b style="color:#fff">Their own diagnosis:</b> no standard master data, no forecast, scheduling left to contractors, no benchmarking, systems not integrated.</p>
        </div>
        <div class="tp wrk rise" style="animation-delay:.32s;background:rgba(255,196,1,.08)">
          <span class="panetag w"><i></i>Use case 2 · time office</span>
          <p class="tpprob" style="color:rgba(255,255,255,.72)"><b style="color:#fff">Situation:</b> 155+ staff handle attendance and time queries for contract labour and employees, Wage-Board cases most of all. Heavy, repetitive, almost all manual.</p>
          <div class="impacts" style="grid-template-columns:1fr 1fr;margin-top:10px;">
            <div class="imp"><div class="n">155+</div><div class="l">staff on queries, data entry, reports</div></div>
            <div class="imp" style="background:rgba(255,196,1,.1);border-color:rgba(255,196,1,.35)"><div class="n" style="color:var(--yellow)">IR</div><div class="l">sensitive: redeploy, don't remove</div></div>
          </div>
          <p class="tpprob" style="color:rgba(255,255,255,.62);margin-top:10px"><b style="color:#fff">Their own framing:</b> the biggest controllable opex lever, and the most sensitive one.</p>
        </div>
      </div>
    </div>`},{id:`pc4`,theme:`light`,title:`Root causes`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Why deployment runs high</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Why deployment runs above the plan: <span style="color:var(--navy)">five gaps in how it is made.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s;grid-template-columns:repeat(5,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.layers}</svg></span><h4>Master data drift</h4><p>The same job has different names, grades and rates in each plant and vendor. You cannot count what you name five ways.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.clock}</svg></span><h4>Demand set by habit</h4><p>Tomorrow's requirement is yesterday's deployment. The production plan and maintenance calendar never enter the number.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.users}</svg></span><h4>Contractor-built rosters</h4><p>Vendors are paid per head deployed, so rosters carry a buffer. Nobody in the plant sees planned against actual per shift.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.chart}</svg></span><h4>No benchmark</h4><p>Workers per tonne or per line is never compared across plants. The best-run unit never sets the standard.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.plug}</svg></span><h4>Disconnected systems</h4><p>SAP has the PO, the gate has entries, attendance has punches, payroll has hours. Reconciling them is a person's job. 155 people, in fact.</p></div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.4s">
        <span class="fc">Naming drift<small>ghost and duplicate workers</small></span><span class="fa">+</span>
        <span class="fc">Habit<small>yesterday's number, again</small></span><span class="fa">+</span>
        <span class="fc">Padded rosters<small>paid per head</small></span><span class="fa">+</span>
        <span class="fc">Unplanned overtime<small>hours at 2× rate</small></span><span class="fa">+</span>
        <span class="fc">No benchmark<small>best plant unknown</small></span><span class="fa">=</span>
        <span class="fc hot">More people and premium hours than the plan needs<small>sized in the diagnostic</small></span>
      </div>
    </div>`},{id:`pc5`,theme:`dark`,title:`Value tree`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">How the target is reached · each lever, what it removes, and the evidence we have</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Five levers between 36,000 and the client's 25,000. <span style="color:var(--yellow)">The diagnostic sizes each one.</span></h2>
      <div class="compmap" style="grid-template-columns:repeat(5,1fr);margin-top:14px;">
        <div class="compcell" style="--cc:#39D2E8;--d:.2s"><div class="act">Lever 1</div><h4>Clean master data</h4><p>Removes duplicate, ghost and unmapped workers, and workers on the wrong rate.</p><span class="who ok">Reliance: −90% payroll leakage</span></div>
        <div class="compcell" style="--cc:#3BE8B0;--d:.28s"><div class="act">Lever 2</div><h4>Demand forecast</h4><p>Removes the buffer that comes from copying yesterday's number instead of reading the plan.</p><span class="who">Built and measured in the pilot</span></div>
        <div class="compcell" style="--cc:#8B7CFF;--d:.36s"><div class="act">Lever 3</div><h4>Auto-roster and gate</h4><p>Removes contractor padding and billed-not-present. Nobody enters above the roster.</p><span class="who ok">Zepto: planned vs actual at 967 sites</span></div>
        <div class="compcell" style="--cc:#FF9518;--d:.44s"><div class="act">Lever 4</div><h4>Overtime control</h4><p>Removes unplanned hours paid at the statutory 2× rate. Pre-approved, capped, registered.</p><span class="who ok">Platform standard · Factories Act caps</span></div>
        <div class="compcell" style="--cc:#FFC401;--d:.52s"><div class="act">Lever 5</div><h4>Benchmarking</h4><p>Removes the gap between the best-run plant or contractor and the rest, on one definition.</p><span class="who ok">Reliance: 3,000 vendors, one rule engine</span></div>
      </div>
      <div class="modelrow rise" style="animation-delay:.6s;margin-top:16px;">
        <div class="mstat"><div class="n">36K → 25K</div><div class="l">The client's target · we size the path, we do not set the number</div></div>
        <div class="mstat"><div class="n">Wk 0–6</div><div class="l">Diagnostic puts a figure against each lever, by plant and area</div></div>
        <div class="mstat"><div class="n">−90%</div><div class="l">Payroll leakage · measured at Reliance</div></div>
        <div class="mstat"><div class="n">−80%</div><div class="l">Vendor non-compliance risk · measured at Reliance</div></div>
      </div>
    </div>`},{id:`pc6`,theme:`light`,title:`Target architecture`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">CLMS 2.0 · the target picture</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">What CLMS 2.0 looks like: <span style="color:var(--navy)">six layers added to the client's existing system.</span></h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(6,1fr);margin-top:20px;">
        <div class="rstage"><div class="rn">01</div><h4>Master data</h4><ul><li>One position and skill master</li><li>Vendor, licence, work order</li><li>Site, zone, wage master</li></ul></div>
        <div class="rstage"><div class="rn">02</div><h4>Demand plan</h4><ul><li>Forecast per shift and area</li><li>From production and maintenance</li><li>Absenteeism learned</li></ul></div>
        <div class="rstage"><div class="rn">03</div><h4>Auto-schedule</h4><ul><li>Skill-matched roster</li><li>Capped by WO and licence</li><li>Published to vendors</li></ul></div>
        <div class="rstage"><div class="rn">04</div><h4>Deploy and gate</h4><ul><li>Pass only if rostered</li><li>Face and biometric</li><li>Induction and policy checks</li></ul></div>
        <div class="rstage"><div class="rn">05</div><h4>Time office, automated</h4><ul><li>Self-service and agents</li><li>Rules engine incl. Wage Board</li><li>Auto OT, auto reports</li></ul></div>
        <div class="rstage"><div class="rn">06</div><h4>Benchmark and MIS</h4><ul><li>Workers per unit of output</li><li>Plant vs plant, vendor vs vendor</li><li>Live compliance position</li></ul></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s">Underneath: SAP for PO, contract and cost centre; the plant's gate and biometric systems; the production planning system; payroll; the analytics warehouse. <b>Each integrated at least once before, at BPCL or Reliance.</b></div>
    </div>`},{id:`pc7`,theme:`light`,title:`Lever 1 · master data`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Lever 1 · one master</span>
        <h2 class="rise" style="animation-delay:.08s;">Fix 1 · Clean master data: <span style="color:var(--navy)">one name and one code for every job, vendor and rate.</span></h2>
        <div class="featlist">
          ${b(w.layers,`One position and skill master`,`Every legacy job title maps to one position code with a skill grade and wage category. Reliance runs position codes and budgets this way across 3,000+ vendors.`,.22)}
          ${b(w.doc,`Vendor, licence and work order as parents`,`Every worker hangs off a work order; every work order off a licensed vendor. At BPCL, PO and contract fields come from SAP and cannot be edited on our side.`,.3)}
          ${b(w.map,`Site, zone and wage master`,`Zone-wise minimum wage by skill category, held centrally. We built this artefact with BPCL when their wage data lived in files.`,.38)}
          ${b(w.check,`Gaps block the step`,`A record missing what payroll or compliance needs says so on the profile, and the step waits.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Position master · mapping view</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>master data · positions · legacy → standard</span></div>
          <div class="fm-body">
            <div class="fm-rows">
              <div class="fm-row hl" style="--d:.5s"><span><b>HLP-02 · Helper, Grade II</b><br/><small>← "Helper", "Asst. Helper", "Khalasi", "Helper-B", "General Labour" · 5 legacy names · 3 plants</small></span><span class="fm-chip g">MAPPED</span></div>
              <div class="fm-row" style="--d:.7s"><span><b>RGR-01 · Rigger</b> <small>← 3 legacy names · semi-skilled · zone wage applied</small></span><span class="fm-chip g">MAPPED</span></div>
              <div class="fm-row" style="--d:.9s"><span><b>CRN-OP · Crane operator</b> <small>← 2 names · licence required · certificate tracked</small></span><span class="fm-chip g">MAPPED</span></div>
              <div class="fm-row" style="--d:1.1s"><span><b>"Misc. worker"</b> <small>412 workers · no skill, no rate category · cannot be planned</small></span><span class="fm-chip r">UNMAPPED</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">Unmapped workers are where deployment hides first · <b>the diagnostic starts here</b></div>
      </div>
    </div>`},{id:`pc8`,theme:`dark`,title:`Lever 2 · demand planning`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Lever 2 · predictive demand planning</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Fix 2 · Demand forecast: <span style="color:var(--yellow)">work out how many people each shift needs from the production plan.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:4px;max-width:104ch;">Inputs: production plan, maintenance calendar, shift pattern, each area's absenteeism history. Output: required headcount per shift, area and skill. Vendors see the requirement, not a standing order. One shift at one plant, required against deployed:</p>
      <div class="ajmix rise" style="animation-delay:.24s;margin-top:8px;max-width:1040px;">
        <div class="ajrow"><span class="lb">Steel melting shop · A shift</span><span class="ajbar"><i style="--w:70%;--bc:#3BE8B0;--d:.35s"></i></span><span class="pc">1,120 req · 1,480 dep</span></div>
        <div class="ajrow"><span class="lb">Hot rolling · A shift</span><span class="ajbar"><i style="--w:78%;--bc:#3BE8B0;--d:.5s"></i></span><span class="pc">860 req · 1,100 dep</span></div>
        <div class="ajrow"><span class="lb">Material handling</span><span class="ajbar"><i style="--w:61%;--bc:#FF9518;--d:.65s"></i></span><span class="pc">640 req · 1,050 dep</span></div>
        <div class="ajrow"><span class="lb">Housekeeping and utilities</span><span class="ajbar"><i style="--w:56%;--bc:#FF7A6B;--d:.8s"></i></span><span class="pc">390 req · 700 dep</span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Bar = required as a share of deployed. <b>The gap between the bars is where deployment can fall.</b> The roster agent (AI Zara) chases confirmations and re-plans shortfalls before the shift starts.</div>
    </div>`},{id:`pc9`,theme:`light`,title:`Lever 3 · auto-scheduling`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Lever 3 · auto-scheduling and deployment control</span>
        <h2 class="rise" style="animation-delay:.08s;">Fix 3 · Auto-scheduling: <span style="color:var(--navy)">roster only the forecast, and let the gate enforce it.</span></h2>
        <div class="featlist">
          ${b(w.clock,`Roster built from the forecast`,`Required headcount per shift and skill becomes a published roster. Vendors fill names against it, not above it.`,.22)}
          ${b(w.shield,`Hard caps`,`Work-order strength and CLRA licensed strength cap every roster. The 51st worker on a 50-worker licence is refused, not reconciled later.`,.3)}
          ${b(w.lock,`The gate enforces the roster`,`A pass works only for a rostered worker with induction, verification and EC cover in place. This is the BPCL gate-pass logic, applied to a plan.`,.38)}
          ${b(w.eye,`Planned vs actual, live`,`Plant leadership sees required, rostered and inside-the-gate per area, per shift, as it happens.`,.46)}
          ${b(w.clock,`Overtime inside the roster`,`Extra hours need approval before the shift, sit under the Factories Act cap, and are paid at the statutory multiple. Unplanned overtime is a cost line, not a habit.`,.54)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Shift control · live</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>deployment control · plant 1 · A shift · 06:40</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">3,220<small>required</small></span>
              <span class="g">3,214<small>rostered</small></span>
              <span class="y">3,188<small>inside gate</small></span>
            </div>
            <div class="fm-rows">
              <div class="fm-row" style="--d:.5s"><span><b>Ganpati Services · SMS</b> <small>rostered 640 · in 638 · licence 700</small></span><span class="fm-chip g">ON PLAN</span></div>
              <div class="fm-row hl" style="--d:.7s"><span><b>Bhoomi Facility · housekeeping</b> <small>tried to deploy 61 against a roster of 48</small></span><span class="fm-chip r">13 REFUSED AT GATE</span></div>
              <div class="fm-row" style="--d:.9s"><span><b>Krishna Logistics · yard</b> <small>26 no-shows · 22 replacements confirmed by 06:20</small></span><span class="fm-chip y">SHORT 4</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">Zepto runs planned-vs-actual gate control across <b>967 sites</b> · BPCL gate passes renew and expire on rules</div>
      </div>
    </div>`},{id:`pc10`,theme:`dark`,title:`Lever 4 · benchmarking`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Lever 4 · benchmarking</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Fix 4 · Benchmarking: <span style="color:var(--yellow)">compare plants and contractors, and hold everyone to the best.</span></h2>
      <p class="lede rise" style="animation-delay:.16s;margin-top:6px;max-width:104ch;">Workers per unit of output, by plant, area and contractor, on one definition. The yellow marker is the internal best. Everything to its right is a conversation with a plant head or a contractor, with the number already agreed.</p>
      <div class="lsmeter rise" style="animation-delay:.24s;margin-top:14px;">
        <div class="lsrow"><span class="nm">Plant 2 · hot rolling</span><span class="lsbar"><i style="--w:64%;--d:.4s"></i><span class="cap" style="--cap:64%"></span></span><span class="vs">0.94<small>workers / 100 t · best</small></span></div>
        <div class="lsrow"><span class="nm">Plant 1 · hot rolling</span><span class="lsbar"><i style="--w:81%;--d:.55s"></i><span class="cap" style="--cap:64%"></span></span><span class="vs">1.19<small>+27% vs best</small></span></div>
        <div class="lsrow"><span class="nm">Plant 3 · hot rolling</span><span class="lsbar over"><i style="--w:100%;--d:.7s"></i><span class="cap" style="--cap:64%"></span></span><span class="vs"><em>1.47</em><small>+56% vs best</small></span></div>
        <div class="lsrow"><span class="nm">Contractor A vs B · same area</span><span class="lsbar"><i style="--w:88%;--d:.85s"></i><span class="cap" style="--cap:64%"></span></span><span class="vs">1.29 vs 0.94<small>same job, same plant</small></span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:1s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Reliance runs 3,000+ vendors on one rule engine, so <b>a benchmark is a filter you apply, not a study you commission.</b> Numbers above are illustrative; the diagnostic produces the real ones.</div>
    </div>`},{id:`pc11`,theme:`light`,title:`Use case 2 · time office`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Use case 2 · time-office automation</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Time office: what 155 people do today, <span style="color:var(--navy)">and which of it the system can take over.</span></h2>
      <div class="twopane">
        <div class="tp emp rise" style="animation-delay:.2s">
          <span class="panetag e"><i></i>Today · manual</span>
          <div class="funmock" style="margin-top:6px;">
            <div class="fm-bar"><i></i><i></i><i></i><span>a time-office day · typical pattern</span></div>
            <div class="fm-body">
              <div class="fm-rows">
                <div class="fm-row" style="--d:.4s"><span><b>Worker queries</b> <small>"my punch is missing", "why no OT", "leave balance?" — by phone and at the window</small></span><span class="fm-chip r">~40%</span></div>
                <div class="fm-row" style="--d:.55s"><span><b>Regularisations</b> <small>missed punches, wrong shift, wrong site, keyed by hand</small></span><span class="fm-chip r">~20%</span></div>
                <div class="fm-row" style="--d:.7s"><span><b>Wage-Board rules</b> <small>category, rate, OT multiple, holiday pay, looked up case by case</small></span><span class="fm-chip r">~15%</span></div>
                <div class="fm-row" style="--d:.85s"><span><b>Report compilation</b> <small>muster, OT, contractor headcount, pulled from three systems</small></span><span class="fm-chip r">~15%</span></div>
                <div class="fm-row" style="--d:1s"><span><b>Coordination</b> <small>chasing vendors, security and payroll for the same data</small></span><span class="fm-chip r">~10%</span></div>
              </div>
            </div>
          </div>
          <div class="mockcap">Shares are typical of plants we have studied · confirmed by an activity study in week 2</div>
        </div>
        <div class="tp wrk rise" style="animation-delay:.32s">
          <span class="panetag w"><i></i>After · handled by the system</span>
          <div class="funmock" style="margin-top:6px;">
            <div class="fm-bar"><i></i><i></i><i></i><span>what handles it instead</span></div>
            <div class="fm-body">
              <div class="fm-rows">
                <div class="fm-row" style="--d:.5s"><span><b>Worker app + AI Theo</b> <small>logs, payslip, OT and leave in the app; an agent answers questions by phone or chat, 24 languages, any hour</small></span><span class="fm-chip g">QUERIES</span></div>
                <div class="fm-row" style="--d:.65s"><span><b>Self-service regularisation</b> <small>worker raises it with a reason; supervisor approves on mobile; audit trail automatic</small></span><span class="fm-chip g">CORRECTIONS</span></div>
                <div class="fm-row" style="--d:.8s"><span><b>Rules engine</b> <small>Wage-Board categories, OT multiples, holiday and shift rules set once, applied every time</small></span><span class="fm-chip g">WAGE BOARD</span></div>
                <div class="fm-row" style="--d:.95s"><span><b>Scheduled reports</b> <small>muster roll, OT register, contractor headcount: filtered, exported, on a timer</small></span><span class="fm-chip g">REPORTS</span></div>
                <div class="fm-row" style="--d:1.1s"><span><b>One record</b> <small>gate, attendance, payroll and SAP agree, so nobody reconciles them</small></span><span class="fm-chip g">COORDINATION</span></div>
              </div>
            </div>
          </div>
          <div class="mockcap"><b>Routine queries, corrections and reports</b> move to the system · people keep the exceptions · the activity study sizes the share</div>
        </div>
      </div>
    </div>`},{id:`pc12`,theme:`dark`,title:`Wage Board and IR`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Wage Board cases and the IR question</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">Wage Board and unions: <span style="color:var(--yellow)">automate the work, move the people to other roles.</span></h2>
        <div class="featlist">
          ${b(w.book,`Wage Board as configuration`,`Each category, rate, OT multiple and holiday rule sits in the rules engine. Every computation is the same every time and carries its own audit trail, which is what a union asks to see.`,.22)}
          ${b(w.users,`A redeployment plan, not a headcount plan`,`About a third of the 155 stay as exception handlers and plant leads. The rest move to work the plant is short of: vendor governance, safety observation, quality checks.`,.3)}
          ${b(w.clock,`Phased by plant, with a control`,`One plant first, a comparison plant left as-is. Numbers go to the works committee before the next plant moves.`,.38)}
          ${b(w.shield,`PwC owns IR and change`,`Union engagement, communication and the redeployment programme sit with PwC. BetterPlace supplies the system, the data and the evidence.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>155 → where they go</span></div>
        <div class="ajmix" style="margin-top:8px;">
          <div class="ajrow"><span class="lb">Exception and plant leads</span><span class="ajbar"><i style="--w:32%;--bc:#FFC401;--d:.4s"></i></span><span class="pc">~50</span></div>
          <div class="ajrow"><span class="lb">Vendor governance and audit</span><span class="ajbar"><i style="--w:26%;--bc:#39D2E8;--d:.55s"></i></span><span class="pc">~40</span></div>
          <div class="ajrow"><span class="lb">Safety observation</span><span class="ajbar"><i style="--w:19%;--bc:#3BE8B0;--d:.7s"></i></span><span class="pc">~30</span></div>
          <div class="ajrow"><span class="lb">Quality and process checks</span><span class="ajbar"><i style="--w:16%;--bc:#8B7CFF;--d:.85s"></i></span><span class="pc">~25</span></div>
          <div class="ajrow"><span class="lb">Attrition, not backfilled</span><span class="ajbar"><i style="--w:7%;--bc:#8A93B8;--d:1s"></i></span><span class="pc">~10</span></div>
        </div>
        <div class="mockcap">Illustrative · the activity study and the client's IR position set the real split</div>
      </div>
    </div>`},{id:`pc13`,theme:`light`,title:`Guardrails`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Safety and compliance guardrails</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Safety and compliance: <span style="color:var(--navy)">six checks that stay on while deployment falls.</span></h2>
      <div class="compmap" style="grid-template-columns:repeat(3,1fr);margin-top:14px;">
        <div class="compcell" style="--cc:#1B2D93;--d:.2s"><div class="act">CLRA</div><h4>Licensed strength is a ceiling</h4><p>Deployment can fall freely. It can never exceed a contractor's licence. Enforced at roster and at gate.</p><span class="who ok">Live at BPCL</span></div>
        <div class="compcell" style="--cc:#1B2D93;--d:.28s"><div class="act">Safety</div><h4>No induction, no pass</h4><p>Induction, PPE sign-off and area certification are conditions of the pass, with expiry tracked.</p><span class="who ok">Live at BPCL</span></div>
        <div class="compcell" style="--cc:#1B2D93;--d:.36s"><div class="act">EC Act</div><h4>Insurance before entry</h4><p>Compensation cover per contractor checked for validity; expiry warned in advance.</p><span class="who ok">Live at BPCL</span></div>
        <div class="compcell" style="--cc:#1d7a45;--d:.44s"><div class="act">EPF · ESI</div><h4>Challans matched per worker</h4><p>Vendor PF and ESI challans read by OCR and matched worker by worker each month. Short payments surface before the bill is released.</p><span class="who ok">−80% risk at Reliance</span></div>
        <div class="compcell" style="--cc:#1d7a45;--d:.52s"><div class="act">Factories Act</div><h4>Overtime inside the cap</h4><p>Daily, weekly and quarterly limits set per state. Overtime pre-approved, computed at the statutory multiple, registered on its own.</p><span class="who ok">Platform standard</span></div>
        <div class="compcell" style="--cc:#1d7a45;--d:.6s"><div class="act">Audit</div><h4>Everything dated</h4><p>Every roster, refusal, regularisation, approval and reconciliation carries who, when and why.</p><span class="who ok">Platform standard</span></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.7s">Output is protected the same way. <b>Required headcount comes from the production plan, so the forecast cannot ask for fewer people than the plan needs.</b></div>
    </div>`},{id:`pc14`,theme:`light`,title:`Integrations`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Key system integrations · each done before</span>
        <h2 class="rise" style="animation-delay:.08s;">Integrations: <span style="color:var(--navy)">how CLMS 2.0 connects to SAP, the gate, payroll and the warehouse.</span></h2>
        <div class="featlist">
          ${b(w.doc,`SAP`,`PO, contract and cost centre are the source of truth. At BPCL these fields flow from SAP and are locked on our side; approved invoices post back.`,.22)}
          ${b(w.lock,`Gate, biometric and access`,`Face and fingerprint at the gate, our roster behind it. Live at BPCL through the site access system; biometric tablets at Reliance O2C sites.`,.3)}
          ${b(w.clock,`Production plan`,`Production and maintenance schedules feed the demand forecast.`,.38)}
          ${b(w.chart,`Payroll and analytics`,`Verified hours feed payroll. Attendance, leave and regularisation views feed the client warehouse, as built for Reliance Jio and Retail.`,.46)}
        </div>
        <div class="clientline rise" style="animation-delay:.55s;margin-top:10px;">If an ERP change is in flight, a file interface goes first so rollout does not wait on the ERP calendar.</div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>How it connects</span></div>
        <div class="hub">
          <svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
            <line x1="320" y1="210" x2="110" y2="80"/><line x1="320" y1="210" x2="530" y2="80"/>
            <line x1="320" y1="210" x2="80" y2="230"/><line x1="320" y1="210" x2="560" y2="230"/>
            <line x1="320" y1="210" x2="200" y2="360"/><line x1="320" y1="210" x2="440" y2="360"/>
            <circle cx="320" cy="210" r="78" fill="#1B2D93"/>
            <text class="hc" x="320" y="204" text-anchor="middle">CLMS 2.0</text>
            <text class="hcs" x="320" y="224" text-anchor="middle">ONE WORKER RECORD</text>
            <rect class="spoke" x="40" y="50" width="140" height="60" rx="12"/><text class="hn" x="110" y="76" text-anchor="middle">SAP</text><text class="hs" x="110" y="94" text-anchor="middle">PO · contract · cost centre</text>
            <rect class="spoke" x="460" y="50" width="140" height="60" rx="12"/><text class="hn" x="530" y="76" text-anchor="middle">Gate &amp; biometric</text><text class="hs" x="530" y="94" text-anchor="middle">face · fingerprint · pass</text>
            <rect class="spoke" x="10" y="200" width="140" height="60" rx="12"/><text class="hn" x="80" y="226" text-anchor="middle">Production plan</text><text class="hs" x="80" y="244" text-anchor="middle">demand forecast input</text>
            <rect class="spoke" x="490" y="200" width="140" height="60" rx="12"/><text class="hn" x="560" y="226" text-anchor="middle">Payroll</text><text class="hs" x="560" y="244" text-anchor="middle">verified hours out</text>
            <rect class="spoke" x="130" y="330" width="140" height="60" rx="12"/><text class="hn" x="200" y="356" text-anchor="middle">Analytics warehouse</text><text class="hs" x="200" y="374" text-anchor="middle">attendance · leave views</text>
            <rect class="spoke" x="370" y="330" width="140" height="60" rx="12"/><text class="hn" x="440" y="356" text-anchor="middle">Vendors</text><text class="hs" x="440" y="374" text-anchor="middle">roster · challans · invoices</text>
          </svg>
        </div>
      </div>
    </div>`},{id:`pc15`,theme:`dark`,title:`Credential · BPCL`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Credential · Bharat Petroleum</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">See how Bharat Petroleum Corporation Limited <span style="color:var(--yellow)">manages its entire contract workforce on our platform.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:6px;">Contract labour, vendors and visitors on one system, wired into SAP, delivered under PSU change control. Everything here is live or in phased release.</p>
        <div class="featlist">
          ${b(w.doc,`Vendors, contracts and work orders from SAP`,`PO and contract data come from SAP and are locked. Labour licence and EC policy tracked per contract; a licence record is created once a contract passes 20 workers.`,.24)}
          ${b(w.lock,`Gate pass, renewal, auto-termination`,`Passes issued and renewed on rules. Workers auto-terminated on pass expiry, attendance lapse or stage change, with persona rules down to transporter drivers.`,.32)}
          ${b(w.shield,`Compliance workflows and wage master`,`Deviation approval and resubmission flows, downloadable compliance reports, and a central minimum-wage master by zone and skill feeding payroll and settlements.`,.4)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Delivered scope</span></div>
        <div class="compmap" style="grid-template-columns:1fr 1fr;">
          <div class="compcell" style="--cc:#FFC401;--d:.4s"><div class="act">Access</div><h4>Face and fingerprint at sites</h4><p>Contract workers enrolled and admitted through the site access system.</p></div>
          <div class="compcell" style="--cc:#39D2E8;--d:.48s"><div class="act">Visitors</div><h4>Visitor management</h4><p>Bespoke and FTE visitor flows, bulk upload, approvals. Same gate, one system.</p></div>
          <div class="compcell" style="--cc:#3BE8B0;--d:.56s"><div class="act">Dashboards</div><h4>Licensed vs deployed headcount</h4><p>Gate-pass, licence and EC metrics; deployed manpower per contract.</p></div>
          <div class="compcell" style="--cc:#8B7CFF;--d:.64s"><div class="act">Governance</div><h4>Debarring and delegation</h4><p>Vendor debarring and approval delegation, tested end to end by the client before production.</p></div>
        </div>
        <div class="mockcap">Six workflows moved to production in one release, under PSU audit discipline</div>
      </div>
    </div>`},{id:`pc16`,theme:`dark`,title:`Credential · Reliance`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Credential · Reliance Industries</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">See how Reliance Industries runs 300,000 workers and 3,000 vendors <span style="color:var(--yellow)">on one rule engine.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:6px;">Contract workforce management across Reliance Retail, Jio and O2C. The largest deployment of its kind we know of in India, and the closest to the client's scale.</p>
        <div class="featlist">
          ${b(w.layers,`Position and budget control`,`Position codes and budgets as governing masters. Position dashboards and budget reports at site-admin level, so deployment is planned against sanctioned positions.`,.24)}
          ${b(w.users,`Vendor and sub-vendor hierarchy`,`Sub-contractor capture, bulk onboarding in the tens of thousands, and Kafka-based archival built for attendance volume.`,.32)}
          ${b(w.plug,`Attendance into the enterprise warehouse`,`Attendance, leave and regularisation views delivered against a shared data dictionary for Jio and Retail’s central dashboard.`,.4)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Measured outcomes</span></div>
        <div class="modelrow" style="grid-template-columns:1fr 1fr;margin-top:8px;">
          <div class="mstat"><div class="n">−90%</div><div class="l">Payroll leakage</div></div>
          <div class="mstat"><div class="n">−80%</div><div class="l">Vendor non-compliance risk</div></div>
          <div class="mstat"><div class="n">7×</div><div class="l">Faster customisation than before</div></div>
          <div class="mstat"><div class="n">18,918</div><div class="l">Stores · Reliance Retail</div></div>
        </div>
        <div class="compmap" style="grid-template-columns:1fr;margin-top:12px;">
          <div class="compcell" style="--cc:#FFC401;--d:.6s"><div class="act">Skilling · Samarth</div><h4>500,000+ associates trained in 14 languages</h4><p>Live in eight weeks. India's largest public retail skilling school, 800K+ downloads, feeding a pre-verified talent pool.</p></div>
        </div>
        <div class="mockcap">Manufacturing peers on the same platform: <b>Hindalco · AGI Glaspac · Yokohama</b></div>
      </div>
    </div>`},{id:`pc17`,theme:`light`,title:`Roadmap and roles`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Delivery roadmap, and who does what</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">How we deliver: <span style="color:var(--navy)">diagnose, prove it at one plant, then scale plant by plant.</span></h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(4,1fr);margin-top:18px;">
        <div class="rstage"><div class="rn">Wk 0–6</div><h4>Diagnostic</h4><ul><li>Deployment vs output baseline, by area</li><li>Master-data audit and mapping</li><li>Time-office activity study</li><li>Business case signed off</li></ul></div>
        <div class="rstage"><div class="rn">Wk 6–18</div><h4>Pilot plant</h4><ul><li>Master, forecast, roster, gate live</li><li>Self-service and agents for time office</li><li>Control plant runs as-is</li><li>Weekly benefit tracking</li></ul></div>
        <div class="rstage"><div class="rn">Month 5+</div><h4>Scale</h4><ul><li>Plant by plant, on pilot evidence</li><li>Redeployment programme alongside</li><li>SAP and warehouse integrations hardened</li></ul></div>
        <div class="rstage"><div class="rn">Ongoing</div><h4>Run and benchmark</h4><ul><li>Quarterly benchmark reviews</li><li>Forecast retrained on actuals</li><li>Compliance position, live</li></ul></div>
      </div>
      <div class="cases rise" style="grid-template-columns:1fr 1fr;margin-top:14px;animation-delay:.42s">
        <div class="case" style="--pc:#D0271D"><div class="ch"><span class="cn">PwC</span></div><ul class="cl"><li>Business case and benefits tracking</li><li>IR strategy, union engagement, redeployment programme</li><li>Programme management and governance</li><li>Time-office process redesign</li></ul></div>
        <div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">BetterPlace</span></div><ul class="cl"><li>Platform configuration and the CLMS upgrade</li><li>Demand-forecast and scheduling models; AI agents on our private cloud</li><li>SAP, gate and warehouse integrations</li><li>Data migration, master-data mapping, hypercare</li></ul></div>
      </div>
    </div>`},{id:`pc18`,theme:`dark`,title:`Business case and risks`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Business case shape, and the risks we would raise ourselves</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">What the business case is built from, <span style="color:var(--yellow)">and the four risks we would raise ourselves.</span></h2>
      <div class="aival" style="grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="vt rise" style="--vc:#FFC401;animation-delay:.2s"><div class="n">Days <small>removed × ₹/day</small></div><div class="w">Deployment saving</div><p>Worker-days removed, at the client's blended cost per day. The diagnostic sets the number; the client's 30% target is the upper case.</p></div>
        <div class="vt rise" style="--vc:#FF9518;animation-delay:.28s"><div class="n">Hours <small>above roster × 2×</small></div><div class="w">Overtime premium</div><p>Unplanned hours above the roster, paid at the statutory multiple. Sized on the client's current overtime bill.</p></div>
        <div class="vt rise" style="--vc:#39D2E8;animation-delay:.36s"><div class="n">FTE <small>redeployed</small></div><div class="w">Time-office capacity</div><p>Counted as work the plant lacks today (vendor audit, safety observation), not as salary removed. The activity study sizes it.</p></div>
        <div class="vt rise" style="--vc:#3BE8B0;animation-delay:.44s"><div class="n">−90% <small>leakage</small></div><div class="w">Billing leakage</div><p>Billed-not-present and unverified overtime, at the rate measured at Reliance, applied to the client's vendor spend.</p></div>
      </div>
      <div class="funmock rise" style="animation-delay:.5s;max-width:none;margin-top:14px;">
        <div class="fm-bar"><i></i><i></i><i></i><span>risk register · opening position</span></div>
        <div class="fm-body">
          <div class="fm-rows">
            <div class="fm-row" style="--d:.6s"><span><b>IR pushback on time-office change</b> <small>redeployment commitment before the pilot; works-committee reporting; PwC-led engagement</small></span><span class="fm-chip y">PwC</span></div>
            <div class="fm-row" style="--d:.75s"><span><b>Master data too poor to plan on</b> <small>the diagnostic maps it first; unmapped workers are counted before any target is set</small></span><span class="fm-chip y">BetterPlace</span></div>
            <div class="fm-row" style="--d:.9s"><span><b>Output dips as deployment falls</b> <small>forecast floors from the production plan; control plant; weekly output tracking; a safety incident stops the rollout</small></span><span class="fm-chip y">Joint</span></div>
            <div class="fm-row" style="--d:1.05s"><span><b>SAP or access-system integration slips</b> <small>interim file interfaces; both integrations already delivered at BPCL</small></span><span class="fm-chip y">BetterPlace</span></div>
          </div>
        </div>
      </div>
    </div>`},{id:`pc19`,theme:`darker`,title:`Partnership and next steps`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">Why BetterPlace as the platform partner, and how we start</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:36ch;">Why BetterPlace, and the next step: <span style="color:var(--yellow)">a six-week diagnostic at one plant.</span></h2>
      <div class="ctacards" style="margin-top:20px;">
        <div class="ctac rise" style="animation-delay:.24s"><div class="num">01</div><h4>Proven at the client's scale</h4><p>A PSU oil major and a 300,000-worker conglomerate run their contract workforces on this platform. Every process in this deck is running for a client today; the forecast and scheduling models are built in the pilot.</p></div>
        <div class="ctac rise" style="animation-delay:.32s"><div class="num">02</div><h4>AI a works committee can accept</h4><p>Agents run on open-source models on our own cloud in India. Worker data stays there. Deterministic where the process must not deviate; logged everywhere. ISO 27001, SOC 2.</p></div>
        <div class="ctac rise" style="animation-delay:.4s"><div class="num">03</div><h4>A clean split of roles</h4><p>PwC owns the business case, IR and programme. BetterPlace owns the platform, data and integrations. One governance forum, joint benefits tracking.</p></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));"><b>Next step:</b> a joint six-week diagnostic at one plant. Deployment-vs-output baseline, master-data map, time-office activity study, signed business case, pilot plan. We can walk PwC through the BPCL and Reliance systems live before then.</div>
      <div class="clientline" style="color:rgba(255,255,255,.6);margin-top:16px;">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`}],je=(e,t,n)=>`<div class="fm-row${t?``:` hl`}" style="--d:${n}s"><span><b>${e}</b></span><span class="fm-chip ${t?`g`:`r`}">${t?`CLEAR`:`BLOCKED`}</span></div>`,Me=[{id:`cm1`,theme:`darker`,title:`Cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">goBetter CLMS · contract labour management for principal employers</span>
      <h1 class="rise" style="animation-delay:.15s;font-size:clamp(30px,3.6vw,54px);">Every contract worker on your site, <span style="color:var(--yellow)">from work order to wage slip, on one record.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">The contractor's licence, the work order, the gate pass, the induction certificate, the attendance, the overtime, the PF challan and the invoice. Held together, checked against each other, and visible to you before the inspector or the auditor asks.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:22px;">
        <div class="stat"><div class="n">300K</div><div class="l">Contract workers live at Reliance</div></div>
        <div class="stat"><div class="n">3,000+</div><div class="l">Vendors on one rule engine</div></div>
        <div class="stat"><div class="n">−90%</div><div class="l">Payroll leakage, measured at Reliance</div></div>
        <div class="stat"><div class="n">BPCL</div><div class="l">Gate and vendor control, wired into SAP</div></div>
      </div>
      <div class="mdcover ghost">CLMS</div>
    </div>`},{id:`cm2`,theme:`light`,title:`The problem`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Why contract labour is a board-level number now</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">You are liable for people you did not hire, <span style="color:var(--navy)">paid by companies you do not control.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#D0271D">
          <div class="ch"><span class="cn">What the law puts on you</span></div>
          <ul class="cl">
            <li>Under CLRA the principal employer answers for the contractor's wages, PF and ESI if the contractor defaults</li>
            <li>A contractor's licence caps how many workers may be deployed. Cross it and the breach is yours too</li>
            <li>Registers, employment cards and returns have to exist, be current and be producible</li>
          </ul>
        </div>
        <div class="case" style="--pc:#FF9518">
          <div class="ch"><span class="cn">How most sites run it</span></div>
          <ul class="cl">
            <li>Licences and insurance in a folder; expiry found when someone looks</li>
            <li>Attendance at the gate, wages at the contractor, invoices in finance. Reconciled by hand, monthly, late</li>
            <li>PF challans accepted as a PDF. Nobody matches the deposit to the worker</li>
            <li>Induction on paper. Access on a badge that never expires</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">What it costs</span></div>
          <ul class="cl">
            <li>Billed-but-not-present workers paid every month</li>
            <li>Overtime beyond the cap, paid at single rate, unrecorded</li>
            <li>A contractor's unpaid PF arriving as your notice</li>
            <li>Three to four weeks of audit preparation that should be a download</li>
          </ul>
        </div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.4s">
        <span class="fc">Licence file<small>in a folder</small></span><span class="fa">+</span>
        <span class="fc">Gate register<small>at security</small></span><span class="fa">+</span>
        <span class="fc">Wage sheet<small>at the contractor</small></span><span class="fa">+</span>
        <span class="fc">PF challan<small>a PDF in email</small></span><span class="fa">+</span>
        <span class="fc">Invoice<small>in finance</small></span><span class="fa">=</span>
        <span class="fc hot">Five records that never meet<small>until the audit</small></span>
      </div>
    </div>`},{id:`cm3`,theme:`dark`,title:`One record`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">What CLMS does · one worker record, in the order things happen on site</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Eight steps, one record. <span style="color:var(--yellow)">Each step checks the ones before it.</span></h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(4,1fr);margin-top:16px;">
        <div class="rstage"><div class="rn">01</div><h4>Vendor</h4><ul><li>Registered with PAN, GST, PF and ESIC codes</li><li>Licence, insurance and registrations tracked to expiry</li><li>Allowed sites, roles and rate cards</li></ul></div>
        <div class="rstage"><div class="rn">02</div><h4>Work order</h4><ul><li>Scope, plant, department</li><li>Sanctioned headcount by skill</li><li>Validity, rate card, billing terms</li></ul></div>
        <div class="rstage"><div class="rn">03</div><h4>Worker</h4><ul><li>Documents from his own phone</li><li>Verification packs by role</li><li>Bank and statutory captured once</li></ul></div>
        <div class="rstage"><div class="rn">04</div><h4>Induction and gate pass</h4><ul><li>Induction in his language, with a test</li><li>Pass issued only if five conditions clear</li><li>Face at the gate, access withdrawn on expiry</li></ul></div>
      </div>
      <div class="rail rise" style="animation-delay:.35s;grid-template-columns:repeat(4,1fr);margin-top:10px;">
        <div class="rstage"><div class="rn">05</div><h4>Attendance and roster</h4><ul><li>Face and geo, spoof review queue</li><li>Weekly roster, published and capped</li><li>Regularisation with a reason</li></ul></div>
        <div class="rstage"><div class="rn">06</div><h4>Overtime</h4><ul><li>Computed from the shift</li><li>Caps, pre-approval, alerts</li><li>Paid at the statutory multiple</li></ul></div>
        <div class="rstage"><div class="rn">07</div><h4>Wages and challans</h4><ul><li>Payroll from verified attendance</li><li>Minimum wage checked at entry</li><li>PF and ESI challans matched per worker</li></ul></div>
        <div class="rstage"><div class="rn">08</div><h4>Invoice and registers</h4><ul><li>Invoice against attendance and rate card</li><li>Release gated on challan reconciliation</li><li>CLRA registers as a view on live data</li></ul></div>
      </div>
    </div>`},{id:`cm4`,theme:`light`,title:`Vendor master`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Step 1 · the vendor</span>
        <h2 class="rise" style="animation-delay:.08s;">Every contractor on file, <span style="color:var(--navy)">every document with an expiry date.</span></h2>
        <div class="featlist">
          ${b(w.building,`One registration per vendor`,`Company details, GSTIN, PAN, PF and ESIC establishment codes, bank details and authorised signatories. Entered once, used by every work order.`,.22)}
          ${b(w.doc,`Documents that expire, tracked`,`CLRA licence, PF and ESIC registration, GST, Workmen’s Compensation cover, shops-and-establishment, and your own safety or quality certifications. Advance alerts before each lapses.`,.3)}
          ${b(w.map,`Rules per vendor`,`Allowed sites, allowed roles and rate cards. A housekeeping contractor cannot be deployed as riggers by mistake.`,.38)}
          ${b(w.users,`The vendor works in the system`,`Contractors get their own login and see only their workers and orders. Deployment, documents and invoices stop travelling by email.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Vendor register · compliance view</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>CLMS · vendors · plant 1 · documents</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">41<small>vendors active</small></span>
              <span class="y">4<small>expiring in 30 days</small></span>
              <span class="r">1<small>lapsed · deployment held</small></span>
            </div>
            <div class="fm-rows">
              <div class="fm-row" style="--d:.5s"><span><b>Shree Manpower</b> <small>CLRA licence · PF · ESIC · WC policy · GST</small></span><span class="fm-chip g">ALL VALID</span></div>
              <div class="fm-row" style="--d:.65s"><span><b>Ganpati Services</b> <small>WC policy expires 07 Oct · renewal requested 3 Sep</small></span><span class="fm-chip y">19 DAYS</span></div>
              <div class="fm-row hl" style="--d:.8s"><span><b>Bhoomi Facility</b> <small>CLRA licence lapsed 31 Aug · 53 workers · new passes blocked</small></span><span class="fm-chip r">LAPSED</span></div>
              <div class="fm-row" style="--d:.95s"><span><b>Krishna Logistics</b> <small>ESIC registration uploaded today · awaiting checker</small></span><span class="fm-chip y">REVIEW</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">Illustrative screen. Expiry alerts and the deployment hold are platform behaviour, from SOW §5.1</div>
      </div>
    </div>`},{id:`cm5`,theme:`light`,title:`Work orders`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Step 2 · the work order</span>
        <h2 class="rise" style="animation-delay:.08s;">Nothing happens on site <span style="color:var(--navy)">without a work order behind it.</span></h2>
        <div class="featlist">
          ${b(w.doc,`The parent record`,`Scope, plant and department, sanctioned headcount by skill category, rate card, validity and billing terms. Every deployed worker hangs off one.`,.22)}
          ${b(w.repeat,`A lifecycle with approvals`,`Draft, approval, active, amendment, extension, closure. Multi-level approval you configure. Amendment history kept for audit.`,.3)}
          ${b(w.eye,`Deployed against sanctioned, live`,`Per order and per site, as it happens. The overshoot shows up on the day, not on the invoice.`,.38)}
          ${b(w.plug,`From SAP where SAP owns it`,`At BPCL the PO and contract fields come from SAP and are locked on our side. Approved invoices post back.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Work order on the platform</span></div>
        <div class="wocard">
          <div class="wohead"><b>WO-2026-P1-114</b><span>HOUSEKEEPING &amp; UTILITIES · PLANT 1</span></div>
          <div class="wogrid">
            <div><div class="k">Contractor</div><div class="v">Shree Manpower</div></div>
            <div><div class="k">Sanctioned headcount</div><div class="v">180 · 3 skill grades</div></div>
            <div><div class="k">Deployed today</div><div class="v ok">174 · within sanction</div></div>
            <div><div class="k">CLRA licence</div><div class="v ok">200 · valid to 31 Mar 2027</div></div>
            <div><div class="k">Validity</div><div class="v">01 Apr 2026 – 31 Mar 2027</div></div>
            <div><div class="k">WC policy</div><div class="v warn">Expires in 19 days</div></div>
          </div>
          <div class="wofoot">September invoice held: <b>PF challan pending for 6 workers</b>. Releases when the challan reconciles.</div>
        </div>
        <div class="mockcap">One order, one contractor, one set of limits, and every worker underneath it</div>
      </div>
    </div>`},{id:`cm5b`,theme:`dark`,title:`Headcount budget and positions`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Headcount budget and position management · illustrative numbers · forecast from the production plan is pilot-built, not a shipped module</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Sanctioned before it is filled. <span style="color:var(--yellow)">Deployed against budget, by site, every day.</span></h2>
      <div class="ajmix rise" style="animation-delay:.2s;margin-top:14px;max-width:1040px;">
        <div class="ajrow"><span class="lb">Plant 1 · housekeeping</span><span class="ajbar"><i style="--w:97%;--bc:#3BE8B0;--d:.3s"></i></span><span class="pc">174 dep · 180 sanctioned</span></div>
        <div class="ajrow"><span class="lb">Plant 1 · material handling</span><span class="ajbar"><i style="--w:100%;--bc:#FF7A6B;--d:.45s"></i></span><span class="pc">263 dep · 240 sanctioned · over</span></div>
        <div class="ajrow"><span class="lb">Plant 2 · maintenance</span><span class="ajbar"><i style="--w:71%;--bc:#39D2E8;--d:.6s"></i></span><span class="pc">85 dep · 120 sanctioned</span></div>
        <div class="ajrow"><span class="lb">Plant 2 · security</span><span class="ajbar"><i style="--w:94%;--bc:#3BE8B0;--d:.75s"></i></span><span class="pc">47 dep · 50 sanctioned</span></div>
      </div>
      <div class="capgrid rise" style="animation-delay:.45s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.layers}</svg></span><h4>Position codes as the master</h4><p>Each contract position carries a code, skill grade, cost centre and department. Reliance runs 300,000 workers on position codes and budgets this way.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.card}</svg></span><h4>Sanctioned strength on the order</h4><p>Headcount by skill category sits on the work order. Deployment above it is flagged, or blocked, per your choice.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.chart}</svg></span><h4>Budget reports by site</h4><p>Deployed against sanctioned per order, per site, per contractor, with cost landing on the right cost centre in finance.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.warn}</svg></span><h4>Shortfall and overshoot, named</h4><p>Under-deployed lines that risk output and over-deployed lines that cost money, on one screen, filterable by state, city and site.</p></div>
      </div>
    </div>`},{id:`cm6`,theme:`light`,title:`CLRA licensed strength`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">CLRA · licensed strength as a ceiling</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Deploy the 51st worker against a 50-worker licence <span style="color:var(--navy)">and the system stops you, not the inspector.</span></h2>
      <div class="lsmeter rise" style="animation-delay:.24s">
        <div class="lsrow"><span class="nm">Shree Manpower</span><span class="lsbar"><i style="--w:87%;--d:.4s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">174 / 200<small>within licence</small></span></div>
        <div class="lsrow"><span class="nm">Ganpati Services</span><span class="lsbar"><i style="--w:71%;--d:.55s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">106 / 150<small>within licence</small></span></div>
        <div class="lsrow"><span class="nm">Bhoomi Facility</span><span class="lsbar over"><i style="--w:100%;--d:.7s"></i><span class="cap" style="--cap:84%"></span></span><span class="vs"><em>63 / 53</em><small>10 over · blocked at gate</small></span></div>
        <div class="lsrow"><span class="nm">Krishna Logistics</span><span class="lsbar"><i style="--w:46%;--d:.85s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">37 / 80<small>within licence</small></span></div>
      </div>
      <div class="capgrid rise" style="animation-delay:.42s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.doc}</svg></span><h4>Licence as a record</h4><p>Licensed strength, validity and issuing authority per contractor. Deployment is measured against it all the time.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.lock}</svg></span><h4>Block or flag</h4><p>A gate pass that would breach the licence is blocked. You choose block or flag per site.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.layers}</svg></span><h4>Registers from live data</h4><p>Register of contractors, register of workmen, employment cards, muster roll and wage register are views on the data. Nothing is kept twice.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.chart}</svg></span><h4>Your position, any time</h4><p>Which contractors are compliant, which are near licence or document expiry, which have open gaps.</p></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.6s">We supply the data, registers and audit trail. Applicability and filing stay with you and your advisors. Form numbers follow the CLRA Central Rules 1971; state rules vary. Source: SOW §5.3.</div>
    </div>`},{id:`cm7`,theme:`light`,title:`Worker onboarding and verification`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Step 3 · the worker · onboarding and background verification</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:42ch;">Verified once, from his own phone. <span style="color:var(--navy)">Trusted at every site, including next year.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">Onboarding</span></div>
          <ul class="cl">
            <li>Documents submitted from the worker's phone, validated by API, configured by state and category</li>
            <li>e-Sign on contract, appointment letter and policy acknowledgement</li>
            <li>Bank and statutory captured once. <b>Payroll-ready, no re-entry</b></li>
            <li>Bulk upload for mobilisation, with every error returned in one file</li>
            <li>Vendor-led onboarding on the same screens, one standard for every contractor</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1d7a45">
          <div class="ch"><span class="cn">Verification · six heads</span></div>
          <ul class="cl">
            <li><b>Identity</b>: Aadhaar, PAN, DL, Voter ID, Passport, with face match and liveness</li>
            <li><b>Address</b>: physical, postal, digital</li>
            <li><b>Career</b>: education, employment, PF/UAN and ESIC history, references</li>
            <li><b>Financial</b>: bank account, credit</li>
            <li><b>Health</b>: medical, fitness, drug tests</li>
            <li><b>Legal</b>: criminal and FIR records, court records, police verification</li>
          </ul>
        </div>
        <div class="case" style="--pc:#FF9518">
          <div class="ch"><span class="cn">How it runs</span></div>
          <ul class="cl">
            <li>Check packs per role. A gate worker and a crane operator carry different packs</li>
            <li>Bulk initiation across a batch; red, amber, green portfolio view</li>
            <li>Per-check dates and a downloadable case report</li>
            <li>Rehire draws on the existing verified record</li>
            <li>Identity checks return in minutes; digital case under 24 hours as a target</li>
          </ul>
        </div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.4s">
        <span class="fc">Documents on his phone<small>API-validated</small></span><span class="fa">→</span>
        <span class="fc">Verification pack<small>by role</small></span><span class="fa">→</span>
        <span class="fc">Profile locked<small>change history kept</small></span><span class="fa">→</span>
        <span class="fc hot">Gate pass<small>only if five conditions clear</small></span><span class="fa">→</span>
        <span class="fc gold">Rehire reuses it<small>no second verification</small></span>
      </div>
    </div>`},{id:`cm8`,theme:`dark`,title:`Gate pass and induction`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Step 4 · gate pass, safety induction and access control</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">The pass opens only when <span style="color:var(--yellow)">everything behind it is true.</span></h2>
        <div class="featlist">
          ${b(w.book,`Induction on his phone, in his language`,`SOP content, video and a test. A dated certificate on completion. The certificate is what activates the pass, and a lapsed certificate withdraws it.`,.22)}
          ${b(w.lock,`Face at the gate`,`Face registered in the platform, verified on the gate device. At BPCL, workers are admitted through the site access system on this logic.`,.3)}
          ${b(w.clock,`Expiry is automatic`,`Passes, induction certificates and insurance cover carry dates. Advance alerts, then access withdrawn. At BPCL a pass also lapses after 30 days without a punch.`,.38)}
          ${b(w.users,`Visitors through the same door`,`Visitor and transporter flows run on the same gate logic, so security runs one system.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Gate pass request · five conditions</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>CLMS · gate pass · Suresh Yadav · Bhoomi Facility</span></div>
          <div class="fm-body">
            <div class="fm-rows">
              ${je(`Work order active · WO-2026-P1-118`,!0,`.5`)}
              ${je(`Headcount within sanction and licence`,!1,`.65`)}
              ${je(`Verification cleared to required level`,!0,`.8`)}
              ${je(`Workmen’s Compensation cover valid`,!0,`.95`)}
              ${je(`Safety induction certificate · valid to 12 Mar 2027`,!0,`1.1`)}
            </div>
          </div>
        </div>
        <div class="mockcap"><b>Pass not issued.</b> Bhoomi Facility is 10 over its licence. The contractor sees why; you see it on the vendor dashboard</div>
      </div>
    </div>`},{id:`cm9`,theme:`dark`,title:`Attendance and rostering`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Step 5 · attendance, rostering and exceptions</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Who was inside the plant, and when. <span style="color:var(--yellow)">The layer everything else computes from.</span></h2>
      <div class="twopane">
        <div class="tp emp rise" style="animation-delay:.2s">
          <span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Capture · one record, three ways in</span>
          <ul class="cl" style="color:rgba(255,255,255,.78);margin-top:8px;">
            <li><b style="color:#fff">Face with spoof detection.</b> A photo held to the camera does not register. Suspected proxies go to a review queue</li>
            <li><b style="color:#fff">Geo-fence per site.</b> A punch outside the boundary does not count</li>
            <li><b style="color:#fff">Gate terminals and mobile</b> feed the same record. Nothing is reconciled monthly</li>
          </ul>
          <div class="impacts" style="grid-template-columns:1fr 1fr;margin-top:10px;">
            <div class="imp"><div class="n">967</div><div class="l">Zepto sites on this capture</div></div>
            <div class="imp" style="background:rgba(59,232,176,.08);border-color:rgba(59,232,176,.3)"><div class="n" style="color:#3BE8B0">40%</div><div class="l">Frontline cost saved at Zepto</div></div>
          </div>
        </div>
        <div class="tp wrk rise" style="animation-delay:.32s;background:rgba(255,196,1,.08)">
          <span class="panetag w"><i></i>Roster and exceptions · governed</span>
          <ul class="cl" style="color:rgba(255,255,255,.78);margin-top:8px;">
            <li><b style="color:#fff">Weekly grid</b> by associate and day. Copy, bulk edit, undo, then an explicit publish. Excel upload publishes itself</li>
            <li><b style="color:#fff">Night and cross-midnight shifts.</b> Weekly off, rest day and field designation per person per day</li>
            <li><b style="color:#fff">Regularisation with a reason</b> from a fixed list, approved by the manager on mobile, kept on the trail</li>
            <li><b style="color:#fff">One approvals queue</b> for regularisation, leave, reconciliation and possible spoofs, with an SLA counter</li>
          </ul>
          <div class="impacts" style="grid-template-columns:1fr 1fr;margin-top:10px;">
            <div class="imp" style="background:rgba(255,196,1,.1);border-color:rgba(255,196,1,.35)"><div class="n" style="color:var(--yellow)">3</div><div class="l">Standard reports: muster, log, overtime</div></div>
            <div class="imp"><div class="n">Bulk</div><div class="l">Log edit inside a set backdating window</div></div>
          </div>
        </div>
      </div>
    </div>`},{id:`cm10`,theme:`light`,title:`Overtime`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Step 6 · overtime</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Overtime is legal, capped, and paid at double. <span style="color:var(--navy)">All three get missed on paper.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.clock}</svg></span><h4>Computed, not claimed</h4><p>Hours beyond the shift and thresholds compute from attendance. No punch record, no overtime.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.check}</svg></span><h4>Approved before it is worked</h4><p>Pre-approval as a policy switch. The supervisor raises it, the approver clears it on mobile, then the hours count.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.warn}</svg></span><h4>Caps that warn first</h4><p>Monthly and quarterly caps at organisation and site level. Alerts as a worker approaches the cap, controls when it is reached.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.chart}</svg></span><h4>Paid at the multiple, registered</h4><p>Flows into payroll at the statutory rate. The overtime report names who worked it, how long and who approved it.</p></div>
      </div>
      <div class="otwrap rise" style="animation-delay:.4s;margin-top:16px;">
        <div class="otrow" style="grid-template-columns:190px 1fr 230px;"><span class="nm">Ravi K. · fitter</span><span class="otbar"><i style="--w:55%"></i></span><span class="vs">22 h of 40 h quarterly cap</span></div>
        <div class="otrow" style="grid-template-columns:190px 1fr 230px;"><span class="nm">Sunita D. · housekeeping</span><span class="otbar hot"><i style="--w:92%"></i></span><span class="vs">37 h of 40 h · alert sent</span></div>
        <div class="otrow" style="grid-template-columns:190px 1fr 230px;"><span class="nm">Mohan L. · loader</span><span class="otbar over"><i style="--w:100%"></i></span><span class="vs">40 h of 40 h · further OT blocked</span></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.55s">Said early: overtime is measured in hours and normalised to days for computation. If your model is genuinely hourly, we discuss it in design, not after go-live. Source: SOW §10.4.</div>
    </div>`},{id:`cm11`,theme:`darker`,title:`Wages and challans`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Step 7 · wages and the vendor's PF and ESI challans</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">A challan upload is not compliance. <span style="color:var(--yellow)">Matching it worker by worker is.</span></h2>
      <div class="reconboard rise" style="animation-delay:.24s">
        <div class="drows">
          <div class="drow"><span class="nm">Workers on Shree Manpower's wage register, September</span><span class="vs">174</span></div>
          <div class="drow"><span class="nm">UANs found on the PF challan, read by OCR</span><span class="vs">168</span></div>
          <div class="drow over"><span class="nm">Workers with no deposit against them</span><span class="vs"><em>6 · vendor notified, dated</em></span></div>
          <div class="drow over"><span class="nm">Deposits short of computed dues</span><span class="vs"><em>2 · ₹2,100 gap</em></span></div>
        </div>
      </div>
      <div class="capgrid rise" style="animation-delay:.44s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.chart}</svg></span><h4>Payroll from attendance</h4><p>Computed from verified attendance, no manual days or hours. Minimum wage validated per state and skill grade at entry.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.doc}</svg></span><h4>Challans read by OCR</h4><p>The contractor uploads. UANs, amounts and periods are extracted and compared with computed dues for each named worker.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.warn}</svg></span><h4>Gaps in the same cycle</h4><p>Short payment, non-payment, wrong UAN and late filing flagged while the bill is still with you. Notice dated, due diligence on record.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.lock}</svg></span><h4>Compliance gates payment</h4><p>Challan reconciliation can be set as a precondition to releasing the invoice.</p></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.6s;color:rgba(255,255,255,.55)">Reliance: −90% payroll leakage, −80% vendor non-compliance risk, measured across 3,000+ vendors. Minimum wage is checked at entry. Reconciliation AI agent: Beta; the OCR-and-match flow is live. Source: SOW §12, §17.</div>
    </div>`},{id:`cm12`,theme:`light`,title:`Invoice reconciliation`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Step 8 · vendor billing and invoice reconciliation</span>
        <h2 class="rise" style="animation-delay:.08s;">You pay for shifts that happened, <span style="color:var(--navy)">at the rate on the order.</span></h2>
        <div class="featlist">
          ${b(w.card,`Invoice against the work order`,`Generated or uploaded against the governing order. Manpower billed is reconciled with verified attendance for the period and the rate card.`,.22)}
          ${b(w.search,`Variances named`,`Billed-but-not-present, rate mismatches, and headcount above sanctioned strength, as line items you can hold.`,.3)}
          ${b(w.layers,`Deductions handled`,`Advances, penalties, recoveries and statutory withholdings applied on the invoice, not in a side ledger.`,.38)}
          ${b(w.plug,`Approved, then posted`,`Your authorisation matrix, then posting to finance. At BPCL, into SAP.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Invoice check · September · Shree Manpower</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>CLMS · invoices · INV-0919 · WO-2026-P1-114</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">4,872<small>shifts invoiced</small></span>
              <span class="g">4,701<small>shifts gate-verified</small></span>
              <span class="r">171<small>shifts held</small></span>
            </div>
            <div class="fm-rows">
              <div class="fm-row hl" style="--d:.5s"><span><b>Billed but not present</b> <small>16 workers · 148 shifts · no gate punch on the billed days</small></span><span class="fm-chip r">HELD</span></div>
              <div class="fm-row" style="--d:.65s"><span><b>Rate mismatch</b> <small>3 workers billed skilled, deployed semi-skilled on the order</small></span><span class="fm-chip y">₹8,400</span></div>
              <div class="fm-row" style="--d:.8s"><span><b>Above sanction</b> <small>23 shifts beyond 180 sanctioned on 4 days</small></span><span class="fm-chip y">REVIEW</span></div>
              <div class="fm-row" style="--d:.95s"><span><b>PF challan for period</b> <small>6 workers unmatched · release condition not met</small></span><span class="fm-chip r">GATED</span></div>
            </div>
          </div>
        </div>
        <div class="mockcap">Illustrative numbers. The checks are platform behaviour, from SOW §13</div>
      </div>
    </div>`},{id:`cm13`,theme:`light`,title:`Registers, MIS and the worker app`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">What comes out · registers, reports and the worker's own view</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">The audit answer is a download. <span style="color:var(--navy)">The worker's question is answered on his phone.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">Statutory registers</span></div>
          <ul class="cl">
            <li>Register of contractors, register of workmen, employment cards</li>
            <li>Muster roll and wage register</li>
            <li>Overtime register from the overtime report</li>
            <li>Extracts for half-yearly and annual returns</li>
            <li>All views on live data, nothing kept twice</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1d7a45">
          <div class="ch"><span class="cn">Reports and dashboards</span></div>
          <ul class="cl">
            <li>Muster roll, attendance log, overtime: date range, filters, Excel export</li>
            <li>Self-serve report builder, no IT ticket</li>
            <li>Custom forms for site-specific data</li>
            <li>BI dashboards by state, city and site: attendance, payroll, shortfall</li>
            <li>Scheduled distribution to named people</li>
          </ul>
        </div>
        <div class="case" style="--pc:#FF9518">
          <div class="ch"><span class="cn">The worker app</span></div>
          <ul class="cl">
            <li>Attendance marking and a calendar of hours, in and out times</li>
            <li>Monthly summary: earnings, present days, overtime, leave, holidays</li>
            <li>Payslip by month, leave balance and application</li>
            <li>Induction and training modules, certificates</li>
            <li>Grievance raised from the app, ticket status visible. In his language</li>
          </ul>
        </div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.5s">Operational screens are near real time. BI dashboards refresh on a processing cycle and can lag by a short interval. Where you need a metric strictly live, we put it on an operational screen. Source: SOW §15–§16.</div>
    </div>`},{id:`cm14`,theme:`light`,title:`Integrations and AI`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">How it connects · and where AI helps</span>
        <h2 class="rise" style="animation-delay:.08s;">Sits on your SAP, your gates and your payroll. <span style="color:var(--navy)">Agents do the checking that never scales.</span></h2>
        <div class="featlist">
          ${b(w.plug,`SAP or ERP`,`Vendor, PO and cost-centre masters in; approved invoices out. Done at BPCL. A file interface goes first if your ERP calendar is busy.`,.22)}
          ${b(w.lock,`Gate and biometric devices`,`Face and fingerprint terminals at the gate, our roster and pass logic behind them. Fifty-plus device makes supported.`,.3)}
          ${b(w.bot,`AI agents, with their real status`,`Rostering, backfilling, notification and calling agents, and the induction and worker-support agents: live. Statutory reconciliation and verification agents: Beta. Open-source models on our own cloud in India; worker data stays there.`,.38)}
          ${b(w.shield,`Security`,`ISO 27001, SOC 2, hosted on AWS Mumbai, DPDP Act 2023 aligned. Role-based access; vendors see only their own workers and orders.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>One record, six connections</span></div>
        <div class="hub">
          <svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
            <line x1="320" y1="210" x2="110" y2="80"/><line x1="320" y1="210" x2="530" y2="80"/>
            <line x1="320" y1="210" x2="80" y2="230"/><line x1="320" y1="210" x2="560" y2="230"/>
            <line x1="320" y1="210" x2="200" y2="360"/><line x1="320" y1="210" x2="440" y2="360"/>
            <circle cx="320" cy="210" r="78" fill="#1B2D93"/>
            <text class="hc" x="320" y="204" text-anchor="middle">goBetter CLMS</text>
            <text class="hcs" x="320" y="224" text-anchor="middle">ONE WORKER RECORD</text>
            <rect class="spoke" x="40" y="50" width="140" height="60" rx="12"/><text class="hn" x="110" y="76" text-anchor="middle">SAP / ERP</text><text class="hs" x="110" y="94" text-anchor="middle">PO · vendor · cost centre</text>
            <rect class="spoke" x="460" y="50" width="140" height="60" rx="12"/><text class="hn" x="530" y="76" text-anchor="middle">Gate devices</text><text class="hs" x="530" y="94" text-anchor="middle">face · fingerprint · pass</text>
            <rect class="spoke" x="10" y="200" width="140" height="60" rx="12"/><text class="hn" x="80" y="226" text-anchor="middle">Vendors</text><text class="hs" x="80" y="244" text-anchor="middle">own login · challans · invoices</text>
            <rect class="spoke" x="490" y="200" width="140" height="60" rx="12"/><text class="hn" x="560" y="226" text-anchor="middle">Payroll</text><text class="hs" x="560" y="244" text-anchor="middle">verified hours out</text>
            <rect class="spoke" x="130" y="330" width="140" height="60" rx="12"/><text class="hn" x="200" y="356" text-anchor="middle">Worker app</text><text class="hs" x="200" y="374" text-anchor="middle">logs · payslip · induction</text>
            <rect class="spoke" x="370" y="330" width="140" height="60" rx="12"/><text class="hn" x="440" y="356" text-anchor="middle">BI warehouse</text><text class="hs" x="440" y="374" text-anchor="middle">attendance · leave views</text>
          </svg>
        </div>
      </div>
    </div>`},{id:`cm15`,theme:`dark`,title:`Proof`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Proof · running today</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:40ch;">A PSU oil major, a 300,000-worker conglomerate <span style="color:var(--yellow)">and a 967-site quick-commerce network run on this.</span></h2>
      <div class="cases" style="grid-template-columns:repeat(3,1fr);margin-top:16px;">
        <div class="case rise" style="--pc:#FFC401;animation-delay:.22s"><div class="ch"><span class="cn">Bharat Petroleum</span><span class="ct">Energy · PSU</span></div><ul class="cl"><li>Vendors, contracts and work orders from SAP, locked on our side</li><li>Labour licence and EC policy per contract; licence created past 20 workers</li><li>Gate pass issue, renewal and auto-termination on rules</li><li>Visitor management, debarring and delegation workflows</li></ul></div>
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.3s"><div class="ch"><span class="cn">Reliance Industries</span><span class="ct">Retail · Jio · O2C</span></div><ul class="cl"><li>Measured outcomes on 300K+ workers and 3,000+ vendors; today 4 lakh+ contract workmen across 4,000+ sites</li><li>Position codes and budgets as governing masters</li><li>Sub-vendor capture, bulk onboarding at scale</li></ul><div class="cm"><div class="m"><div class="mn">−90%</div><div class="ml">payroll leakage</div></div><div class="m"><div class="mn">−80%</div><div class="ml">vendor non-compliance</div></div></div></div>
        <div class="case rise" style="--pc:#D0271D;animation-delay:.38s"><div class="ch"><span class="cn">Zepto</span><span class="ct">Quick commerce · 22 cities</span></div><ul class="cl"><li>Geo attendance with AI spoof detection</li><li>Planned versus actual, live, per site</li></ul><div class="cm"><div class="m"><div class="mn">15K</div><div class="ml">workers</div></div><div class="m"><div class="mn">967</div><div class="ml">sites</div></div><div class="m"><div class="mn">40%</div><div class="ml">cost saved</div></div></div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Also on the platform: <b>Hindalco · Yokohama · AGI Glaspac · Titan · Amazon · Accenture · JLL</b>. We can walk you through the BPCL and Reliance systems live.</div>
    </div>`},{id:`cm16`,theme:`darker`,title:`How to start`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How this starts</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:40ch;">One plant, four to five months, <span style="color:var(--yellow)">and a number you can take to the board.</span></h2>
      <div class="ledger rise" style="animation-delay:.2s">
        <div class="lrow rise" style="animation-delay:.24s"><div class="ln">01</div><div class="lw"><h4>Design · 3 to 4 weeks</h4><p>Your org model, sites, vendors, work orders and state rule sets, configured to your interpretation of the rules.</p></div><div class="lp">Joint</div></div>
        <div class="lrow rise" style="animation-delay:.33s"><div class="ln">02</div><div class="lw"><h4>Build · 4 to 6 weeks</h4><p>SAP or ERP master and posting integration, devices at the gates you choose, SSO, API and webhooks.</p></div><div class="lp">BetterPlace</div></div>
        <div class="lrow rise" style="animation-delay:.42s"><div class="ln">03</div><div class="lw"><h4>Pilot one plant · 6 to 8 weeks</h4><p>Gate pass conditional on all five checks, attendance and overtime live, vendor challans reconciled worker by worker for a full cycle.</p></div><div class="lp">Measured</div></div>
        <div class="lrow rise" style="animation-delay:.51s"><div class="ln">04</div><div class="lw"><h4>Roll out on your schedule</h4><p>Payroll, billing, leave and training follow in phase 2. AI agents in phase 3, on our own infrastructure in India.</p></div><div class="lp">Staged</div></div>
      </div>
      <div class="clientline rise" style="color:rgba(255,255,255,.6);margin-top:14px;animation-delay:.7s">Durations are indicative and confirmed at initiation. Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`}],Ne=(e,t,n,r,i,a=!1)=>`<div class="fm-row${a?` hl`:``}" style="--d:${i}s"><span><b>${e}</b> <small>${t}</small></span><span class="fm-chip ${r}">${n}</span></div>`,Pe=[{id:`j1`,theme:`darker`,title:`Cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">Prepared for JLL India · Work Dynamics · integrated facilities management</span>
      <h1 class="rise" style="animation-delay:.15s;font-size:clamp(30px,3.6vw,54px);">One system for every JLL client site. <span style="color:var(--yellow)">Sign in, permits, induction, attendance and pay.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">The five things you asked about, and the platform underneath them: how a housekeeping associate, an MEP technician or a security guard is onboarded, inducted, permitted, signed in, rostered and paid, with the client able to see it live.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:22px;">
        <div class="stat"><div class="n">15M+</div><div class="l">Verified frontline worker profiles</div></div>
        <div class="stat"><div class="n">500+</div><div class="l">Enterprises live on the platform</div></div>
        <div class="stat"><div class="n">300K</div><div class="l">Workers live at Reliance alone</div></div>
        <div class="stat"><div class="n">10 yrs</div><div class="l">Building for people who work on their feet</div></div>
      </div>
      <div class="mdcover ghost">JLL</div>
    </div>`},{id:`j2`,theme:`light`,title:`Who we are`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Who you would be working with</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Ten years building software for frontline workers, <span style="color:var(--navy)">and for the people who manage them.</span></h2>
      <div class="rail rise" style="animation-delay:.2s;grid-template-columns:repeat(4,1fr);margin-top:16px;">
        <div class="rstage"><div class="rn">2015–17</div><h4>Verify</h4><ul><li>Founded in Bengaluru</li><li>Background verification for frontline hiring</li><li>200 customers</li></ul></div>
        <div class="rstage"><div class="rn">2018–20</div><h4>Onboard, Attend, Skill</h4><ul><li>Digital onboarding and attendance</li><li>Mobile learning in Indian languages</li><li>Gig platform acquired</li></ul></div>
        <div class="rstage"><div class="rn">2021–24</div><h4>goBetter and South-East Asia</h4><ul><li>Payroll and vendor compliance</li><li>Malaysia, Singapore, Indonesia</li><li>Reliance, Zepto, BPCL live</li></ul></div>
        <div class="rstage"><div class="rn">2025–26</div><h4>AI Labs</h4><ul><li>Agents for induction, worker support, reconciliation</li><li>Open-source models on our own cloud in India</li></ul></div>
      </div>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.4s">
        <div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">Software · goBetter</span></div><ul class="cl"><li>Hire, verify, onboard, attend, pay, upskill</li><li>Contract labour management for principal employers</li></ul></div>
        <div class="case" style="--pc:#1d7a45"><div class="ch"><span class="cn">Services · staffBetter, gigBetter</span></div><ul class="cl"><li>Full-time staffing with employer-of-record compliance</li><li>On-demand gig deployment, billed on outcome</li></ul></div>
        <div class="case" style="--pc:#FF9518"><div class="ch"><span class="cn">Trust</span></div><ul class="cl"><li>ISO 27001 · SOC 2 · hosted on AWS Mumbai · DPDP Act aligned</li><li>Clients include Reliance, Zepto, BPCL, Titan, PhonePe, Amazon, Accenture, Yokohama</li></ul></div>
      </div>
    </div>`},{id:`j3`,theme:`light`,title:`What JLL asked for`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Your five asks, and where each one lives</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:60ch;">Three run today. <span style="color:var(--navy)">Two are configured for JLL.</span></h2>
      <div class="ledger rise" style="animation-delay:.2s;">
        <div class="lrow rise" style="animation-delay:.24s"><div class="ln">01</div><div class="lw"><h4>Digitised attendance management</h4><p>Face and geo capture, shift rules, overtime caps, approvals, live dashboards, payroll feed. Slides 7 to 11.</p></div><div class="lp">Live · Zepto 967 sites</div></div>
        <div class="lrow rise" style="animation-delay:.32s"><div class="ln">02</div><div class="lw"><h4>Sign in and sign out</h4><p>Face tablet, phone inside a geo-fence, hybrid device, open attendance for guards, visitors on the same log. Slide 7.</p></div><div class="lp">Live · BPCL gate</div></div>
        <div class="lrow rise" style="animation-delay:.40s"><div class="ln">03</div><div class="lw"><h4>Induction programme</h4><p>On the worker's phone in his language, with a test and a dated certificate. No certificate, no access. Slides 12 and 13.</p></div><div class="lp">Live · LMS + gate</div></div>
        <div class="lrow rise" style="animation-delay:.48s"><div class="ln">04</div><div class="lw"><h4>Issuing work order permits</h4><p>Work orders stay in Corrigo. The permit per job runs on our custom forms and approval flows, not a separate product, tied to induction and pass. Slide 14.</p></div><div class="lp">Configured for JLL</div></div>
        <div class="lrow rise" style="animation-delay:.56s"><div class="ln">05</div><div class="lw"><h4>Work safe method</h4><p>A step-by-step checklist the worker acknowledges on his phone before the permit opens, with photos. Slide 15.</p></div><div class="lp">Configured for JLL</div></div>
      </div>
    </div>`},{id:`j4`,theme:`dark`,title:`One platform, three stakeholders`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">HCM and CLMS on one platform</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Your own staff and your vendors' staff, <span style="color:var(--yellow)">on one system of record.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#FFC401">
          <div class="ch"><span class="cn">JLL site and account teams</span><span class="ct">Facility managers · EHS · account leads</span></div>
          <ul class="cl">
            <li>One view of every person on a client site, on-roll or off-roll</li>
            <li>Compliance liability tracked per vendor: licence, PF, ESI, insurance</li>
            <li>Labour cost, overtime and headcount against the manning norm</li>
            <li>The client gets a dashboard, not a Monday email</li>
          </ul>
        </div>
        <div class="case" style="--pc:#39D2E8">
          <div class="ch"><span class="cn">The worker</span><span class="ct">Housekeeping · technicians · security</span></div>
          <ul class="cl">
            <li>Onboarded from his own phone in his language</li>
            <li>Induction, permits and safety steps on the same phone</li>
            <li>Hours, overtime and payslip visible before payday</li>
            <li>A question answered by an agent, any hour, 24 languages</li>
          </ul>
        </div>
        <div class="case" style="--pc:#3BE8B0">
          <div class="ch"><span class="cn">Vendor partners</span><span class="ct">Housekeeping · pest control · security agencies</span></div>
          <ul class="cl">
            <li>Their own login, seeing only their workers and orders</li>
            <li>Deployment against sanctioned headcount and licence</li>
            <li>Invoices reconciled to attendance, so disputes stop</li>
            <li>Challans matched worker by worker before the bill releases</li>
          </ul>
        </div>
      </div>
      <div class="probfoot rise" style="animation-delay:.45s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));"><b>HCM</b> for on-roll staff: hiring, onboarding, BGV, records, attendance, leave, payroll, performance, learning. <b>CLMS</b> for contract staff: vendor onboarding, work orders, statutory compliance, wage and invoice validation, gate-level attendance. Same worker record underneath.</div>
    </div>`},{id:`j5`,theme:`light`,title:`The lifecycle`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">The complete workforce lifecycle · thirteen modules, one platform</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Hire to exit, configured on one platform. <span style="color:var(--navy)">The modules you asked about are marked.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(5,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#1B2D93"><div class="ch"><span class="cn">Set up and onboard</span></div><ul class="cl"><li>ATS: requisitions, sourcing, interviews, offers</li><li>Background verification: ID, address, criminal, education</li><li>Organisation config: N-level structure across sites</li><li><b>Worker onboarding and induction ◆</b></li></ul></div>
        <div class="case" style="--pc:#1d7a45"><div class="ch"><span class="cn">Time, leave, pay and exit</span></div><ul class="cl"><li><b>Attendance and overtime ◆</b>: face, geo, devices, OT rules</li><li>Leave and holiday by site, role and worker type</li><li>Payroll and statutory: PF, ESIC, reimbursements, exit and F&amp;F</li></ul></div>
        <div class="case" style="--pc:#FF9518"><div class="ch"><span class="cn">Perform and upskill</span></div><ul class="cl"><li>Performance: goals, reviews, appraisal cycles</li><li>LMS: training paths, communication, rewards</li><li><b>Safety induction and safe-work method ◆</b></li></ul></div>
        <div class="case" style="--pc:#D0271D"><div class="ch"><span class="cn">Vendor and compliance</span></div><ul class="cl"><li>Vendor management: onboarding, policies, performance</li><li><b>Work orders, permits and CLRA ◆</b></li><li>Billing and invoicing reconciled to attendance</li></ul></div>
        <div class="case" style="--pc:#8B7CFF"><div class="ch"><span class="cn">Insight and connect</span></div><ul class="cl"><li>Reports and custom forms, no IT dependency</li><li>Business and approval flows, multi-level</li><li>Integrations: SAP, ERP, Corrigo, gate devices</li><li><b>Sign in and sign out at the gate ◆</b></li></ul></div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.45s">
        <span class="fc">Hire</span><span class="fa">→</span><span class="fc">Verify</span><span class="fa">→</span><span class="fc">Onboard</span><span class="fa">→</span><span class="fc hot">Induct</span><span class="fa">→</span><span class="fc hot">Permit</span><span class="fa">→</span><span class="fc hot">Sign in</span><span class="fa">→</span><span class="fc hot">Attend</span><span class="fa">→</span><span class="fc">Pay</span><span class="fa">→</span><span class="fc gold">Upskill and rehire</span>
      </div>
    </div>`},{id:`j6`,theme:`dark`,title:`A day on a client site`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">How the five pieces fit · one technician, one shift</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Suresh, MEP technician, chiller plant, 06:00 shift. <span style="color:var(--yellow)">Here is what the system checks before he touches a valve.</span></h2>
      <div class="flowstrip rise" style="animation-delay:.2s;margin-top:18px;">
        <span class="fc">05:55 · Face at the tablet<small>induction valid · pass active</small></span><span class="fa">→</span>
        <span class="fc">Shift rules run<small>fence · shift · buffer</small></span><span class="fa">→</span>
        <span class="fc hot">Permit requested<small>hot work · chiller room</small></span><span class="fa">→</span>
        <span class="fc hot">SWMS acknowledged<small>7 steps · photo of isolation</small></span><span class="fa">→</span>
        <span class="fc">Issuer approves<small>on mobile · 06:12</small></span><span class="fa">→</span>
        <span class="fc">Work · permit closes<small>14:00 · close-out photo</small></span><span class="fa">→</span>
        <span class="fc gold">Sign out<small>8 h · flows to payroll and client view</small></span>
      </div>
      <div class="impacts" style="grid-template-columns:repeat(4,1fr);margin-top:18px;">
        <div class="imp rise" style="animation-delay:.4s"><div class="n">1</div><div class="l">record for Suresh: pass, induction, permit, hours, pay</div></div>
        <div class="imp rise" style="animation-delay:.48s"><div class="n">0</div><div class="l">paper forms between his gate entry and his payslip</div></div>
        <div class="imp rise" style="animation-delay:.56s;background:rgba(255,196,1,.1);border-color:rgba(255,196,1,.35)"><div class="n" style="color:var(--yellow)">Live</div><div class="l">the client's facility head sees him on site at 05:55</div></div>
        <div class="imp rise" style="animation-delay:.64s;background:rgba(59,232,176,.08);border-color:rgba(59,232,176,.3)"><div class="n" style="color:#3BE8B0">Dated</div><div class="l">every approval carries who, when and why for the EHS audit</div></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.7s;color:rgba(255,255,255,.55)">If his induction certificate had lapsed the night before, the tablet would not have let him in, and his supervisor would have been alerted three weeks earlier.</div>
    </div>`},{id:`j7`,theme:`light`,title:`Sign in and sign out`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Ask 2 · sign in and sign out · five ways to capture, one record</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Tablet at the entrance, phone in a fence, device for high security. <span style="color:var(--navy)">Same log, same rules, every site.</span></h2>
      <div class="compmap" style="grid-template-columns:repeat(5,1fr);margin-top:14px;">
        <div class="compcell" style="--cc:#1B2D93;--d:.2s"><div class="act">Tablet · face</div><h4>Face at the entrance</h4><p>One-time face registration. Associates look at a wall-mounted tablet and are in. No card to lose, no reader to clean.</p><span class="who ok">Demonstrated to JLL and VOIS</span></div>
        <div class="compcell" style="--cc:#1B2D93;--d:.28s"><div class="act">Mobile · geo</div><h4>Phone inside a fence</h4><p>The goBetter app marks attendance only inside a 50 to 75 metre geo-fence. Made for sites with fewer than 50 people.</p><span class="who ok">Live · Zepto 967 sites</span></div>
        <div class="compcell" style="--cc:#1B2D93;--d:.36s"><div class="act">Device · hybrid</div><h4>Fingerprint plus face</h4><p>Godrej and Mantra terminals for critical environments. Both factors on the same punch.</p><span class="who ok">Supported hardware</span></div>
        <div class="compcell" style="--cc:#1d7a45;--d:.44s"><div class="act">Open · multi-site</div><h4>Guards who move</h4><p>Login and logout across several buildings in a day without device anchoring. For patrol and escort roles.</p><span class="who ok">Configurable</span></div>
        <div class="compcell" style="--cc:#1d7a45;--d:.52s"><div class="act">Visitors</div><h4>Same door, same muster</h4><p>Visitors and contractors sign in through the same flow. Security runs one system and one evacuation list.</p><span class="who ok">Live · BPCL</span></div>
      </div>
      <div class="capgrid rise" style="animation-delay:.6s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.shield}</svg></span><h4>Liveness on every face punch</h4><p>Suspect punches go to a review queue, not to payroll. Single-user mode for sensitive sites.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.repeat}</svg></span><h4>Works when the network does not</h4><p>Punches cached on the device and synced later. Tablets carry a SIM where client Wi-Fi is not offered.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.lock}</svg></span><h4>Devices managed remotely</h4><p>Tablets enrolled in MDM, updated and locked from our side. Maker-checker on any manual override.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.eye}</svg></span><h4>Gate log per person per day</h4><p>Every in and out kept as evidence of presence and access, and the base for the client's headcount report.</p></div>
      </div>
    </div>`},{id:`j8`,theme:`light`,title:`Attendance features`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Ask 1 · digitised attendance management · the feature set</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">Attendance is the front door. <span style="color:var(--navy)">Behind it sits the policy, the roster and the payroll.</span></h2>
      <div class="capgrid rise" style="animation-delay:.2s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.clock}</svg></span><h4>Shifts and rosters</h4><p>Shift templates with start, end and tolerance buffer. Weekly roster grid, bulk weekly-off upload, Excel roster that publishes itself.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.check}</svg></span><h4>Configurable thresholds</h4><p>Full-day and half-day hours, late-arrival restrictions, login and logout tolerance, set per organisation and site.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.warn}</svg></span><h4>Overtime with approval layers</h4><p>OT computed from the shift, pre-approved by supervisor and HR if you wish, held under monthly and quarterly caps.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.users}</svg></span><h4>Regularisation, controlled</h4><p>Worker requests with a reason from a fixed list; manager approves on mobile; limits per person; every change on the trail.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.doc}</svg></span><h4>Leave and holidays</h4><p>Quotas by category and location, regional and optional holidays, applied from the app, approved by the manager.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.eye}</svg></span><h4>Live dashboard, direct access</h4><p>Present, late and no-show by site and vendor as punches land. JLL and client managers log in themselves.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.chart}</svg></span><h4>Reports</h4><p>Muster roll, attendance log, overtime and vendor-wise utilisation, by date range, exported to Excel or scheduled to inboxes.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.plug}</svg></span><h4>Payroll sync by API</h4><p>Verified days and hours to your payroll or ours. Payable-day logic agreed in design, including weekly offs.</p></div>
      </div>
      <div class="clientline rise" style="animation-delay:.5s;margin-top:12px;">Approvals queue with sub-queues for regularisation, leave, reconciliation and possible spoofs · Approve All and Reject All · SLA counter on pending items · bulk log edit inside a set backdating window</div>
    </div>`},{id:`j9`,theme:`light`,title:`Policy engine`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">What happens on every punch</span>
        <h2 class="rise" style="animation-delay:.08s;">Your attendance policy, <span style="color:var(--navy)">applied the same way at every client site.</span></h2>
        <p class="lede rise" style="animation-delay:.16s;margin-top:10px;">One punch runs every rule you configure: fence, shift, threshold, overtime cap, edit window. The same way in Hyderabad and in Pune, for JLL staff and for vendor staff.</p>
        <div class="tags rise" style="animation-delay:.3s;margin-top:16px;">
          <span class="tag">Full and half-day thresholds</span><span class="tag">Late-arrival restrictions</span><span class="tag">OT pre-approval and caps</span><span class="tag">Regularisation limits</span><span class="tag">Holiday tables by region</span><span class="tag">Per-vendor rules</span><span class="tag">Verify status before marking</span>
        </div>
        <p class="lede rise" style="animation-delay:.42s;margin-top:16px;">Set once at organisation level, inherited by every site and vendor. <b>Reliance runs 3,000 vendors on one rule engine.</b></p>
      </div>
      <div class="rise" style="animation-delay:.3s">
        <div class="conmock ruleflow">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">goBetter · Attend · policy engine</span><span class="liv">Every punch</span></div>
          <div class="body">
            <div class="punch">
              <span class="pav"><svg viewBox="0 0 24 24">${w.user}</svg></span>
              <div><b>IN punch · Suresh Yadav · MEP technician</b><span>05:55 · Hyderabad campus · tower B tablet</span></div>
              <span class="face">Face match ✓ 99.1%</span>
            </div>
            <div class="rules">
              <div class="rule" style="--i:0"><span class="ri"><svg viewBox="0 0 24 24">${w.book}</svg></span><b>Induction</b><span class="cfg">Certificate to 12 Mar 2027</span><span class="st ok">✓ Valid</span></div>
              <div class="rule" style="--i:1"><span class="ri"><svg viewBox="0 0 24 24">${w.clock}</svg></span><b>Shift match</b><span class="cfg">Morning 06:00–14:00</span><span class="st ok">✓ In 15-min buffer</span></div>
              <div class="rule" style="--i:2"><span class="ri"><svg viewBox="0 0 24 24">${w.check}</svg></span><b>Day threshold</b><span class="cfg">Full 8h · half 4h</span><span class="st ok">✓ Full-day eligible</span></div>
              <div class="rule flag" style="--i:3"><span class="ri"><svg viewBox="0 0 24 24">${w.warn}</svg></span><b>OT cap watch</b><span class="cfg">Quarterly cap</span><span class="st warn">⚠ 37 of 40h</span></div>
              <div class="rule" style="--i:4"><span class="ri"><svg viewBox="0 0 24 24">${w.lock}</svg></span><b>Edit window</b><span class="cfg">48h regularisation</span><span class="st ok">✓ Locked after approval</span></div>
            </div>
            <div class="verdict"><b>Present · Full day</b> · to payroll and the client dashboard<span class="arr">Every check logged</span></div>
          </div>
        </div>
        <div class="bcap">One punch, five rules, one auditable verdict</div>
      </div>
    </div>`},{id:`j10`,theme:`light`,title:`Rostering`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Rostering and shortfall · soft services and engineering</span>
        <h2 class="rise" style="animation-delay:.08s;">Plan the week for a whole site, <span style="color:var(--navy)">see the gap before the client does.</span></h2>
        <div class="featlist">
          ${b(w.clock,`Shift cards, defined once`,`Morning, evening, night and cross-midnight shifts as templates. Present and half-day values calculate themselves.`,.24)}
          ${b(w.warn,`Gaps show up a day early`,`The grid flags tomorrow’s unfilled housekeeping slot today. The vendor sees the same gap and fills it.`,.32)}
          ${b(w.zap,`Bulk tools with undo`,`Copy a week, upload weekly offs in bulk, fix one associate’s day, publish. Everyone is notified.`,.4)}
          ${b(w.users,`Demand by shift and vendor`,`Manning norm per client site and shift. Deployed against norm is the number your SLA is written on.`,.48)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.3s">
        <div class="conmock rosterviz" data-cycle="2800">
          <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="ttl">goBetter · Attend · Roster · Hyderabad campus · Week 38</span><span class="liv">Live</span></div>
          <div class="body">
            <div class="rhead"><span>Associate</span><span>Mon</span><span>Tue</span><span class="today">Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
            <div class="rrow">
              <div class="who"><b>Ravi Kumar</b><span>Security · tower A</span></div>
              <span class="cellc sh-m" style="--i:0">M</span><span class="cellc sh-m" style="--i:1">M</span><span class="cellc sh-m" style="--i:2">M</span><span class="cellc sh-m" style="--i:3">M</span><span class="cellc sh-e" style="--i:4">E</span><span class="cellc sh-e" style="--i:5">E</span><span class="cellc sh-o" style="--i:6">off</span>
            </div>
            <div class="rrow">
              <div class="who"><b>Sunita Devi</b><span>Housekeeping · floors 3–5</span></div>
              <span class="cellc sh-e" style="--i:7">E</span><span class="cellc sh-e" style="--i:8">E</span><span class="cellc sh-o" style="--i:9">off</span>
              <span class="gapcell"><span class="cyc g1">GAP</span><span class="cyc g2">Vendor: Priya S.</span><span class="cyc g3">Priya S. ✓</span></span>
              <span class="cellc sh-e" style="--i:10">E</span><span class="cellc sh-m" style="--i:11">M</span><span class="cellc sh-m" style="--i:12">M</span>
            </div>
            <div class="rrow">
              <div class="who"><b>Suresh Yadav</b><span>MEP technician · chiller plant</span></div>
              <span class="cellc sh-m" style="--i:13">M</span><span class="cellc sh-m" style="--i:14">M</span><span class="cellc sh-m" style="--i:15">M</span><span class="cellc sh-o" style="--i:16">off</span><span class="cellc sh-n" style="--i:17">N</span><span class="cellc sh-n" style="--i:18">N</span><span class="cellc sh-n" style="--i:19">N</span>
            </div>
            <div class="rrow">
              <div class="who"><b>Asha Kumari</b><span>Pantry · tower B</span></div>
              <span class="cellc sh-m" style="--i:20">M</span><span class="cellc sh-o" style="--i:21">off</span><span class="cellc sh-m" style="--i:22">M</span><span class="cellc sh-m" style="--i:23">M</span><span class="cellc sh-m" style="--i:24">M</span><span class="cellc sh-e" style="--i:25">E</span><span class="cellc sh-e" style="--i:26">E</span>
            </div>
            <div class="rfoot">
              <div class="cycpane"><span class="fdot2 r"></span><span><b>1 unfilled shift</b> for Thu · housekeeping, evening · tower A</span><span class="pubbtn">Publish week</span></div>
              <div class="cycpane"><span class="fdot2 y"></span><span><b>Vendor proposes Priya S.</b> · inducted · inside OT cap</span><span class="pubbtn">Publish week</span></div>
              <div class="cycpane"><span class="fdot2 g"></span><span><b>Roster published</b> · 27 shifts · 4 associates notified</span><span class="pubbtn">Published ✓</span></div>
            </div>
          </div>
        </div>
        <div class="bcap">The weekly grid: gap flagged, vendor fills it, week published</div>
      </div>
    </div>`},{id:`j11`,theme:`light`,title:`Dashboards`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">What JLL and the client see</span>
        <h2 class="rise" style="animation-delay:.08s;">Your client's facility head logs in <span style="color:var(--navy)">and sees the site as it is now.</span></h2>
        <div class="featlist">
          ${b(w.eye,`Direct dashboard access`,`JLL account teams and client managers see present, absent and late by site and vendor as punches land. What Shell and JLL asked for instead of emailed reports.`,.22)}
          ${b(w.users,`Vendor-wise utilisation`,`Deployed against the manning norm per vendor and shift. SLA penalties and incentives rest on data both sides see.`,.3)}
          ${b(w.chart,`Absenteeism patterns`,`Who is absent, on which days, at which sites. Fed back into next week’s roster.`,.38)}
          ${b(w.doc,`Scheduled reports`,`Muster, overtime and headcount reports to named inboxes on a timer. The Monday email still exists, if you want it.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Client dashboard · Hyderabad campus · today</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>Attend · client view · 4 towers · 14:10</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">412<small>present now</small></span>
              <span class="y">9<small>late today</small></span>
              <span class="r">6<small>no-show · roster gap</small></span>
            </div>
            <div class="fm-rows">
              ${Ne(`Soft services · housekeeping`,`Vendor 1 · 212 of 220 rostered · 96% of norm`,`ON NORM`,`g`,`.5`)}
              ${Ne(`Engineering · MEP technicians`,`JLL staff · 41 of 44 rostered · 2 on permit now`,`93%`,`g`,`.65`)}
              ${Ne(`Security`,`Vendor 3 · open attendance · 88 of 90 · 2 late`,`98%`,`y`,`.8`)}
              ${Ne(`Pantry and reception`,`Vendor 2 · 71 of 77 · 6 no-show · vendor alerted 06:40`,`SHORT 6`,`r`,`.95`,!0)}
            </div>
          </div>
        </div>
        <div class="mockcap">Illustrative numbers. Present, late and no-show update as punches land; utilisation refreshes on a processing cycle</div>
      </div>
    </div>`},{id:`j12`,theme:`dark`,title:`Induction programme`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Ask 3 · induction programme</span>
        <h2 class="rise" style="animation-delay:.08s;color:#fff;">Induction on his phone, in his language. <span style="color:var(--yellow)">No valid certificate, no site access.</span></h2>
        <div class="featlist">
          ${b(w.book,`Generic plus site-specific`,`EHS rules, emergency and evacuation, PPE, then the hazards of this client site. SOP text, video and a test, in the worker’s language with audio.`,.22)}
          ${b(w.check,`A dated certificate that gates the gate`,`Pass the test and a certificate is issued with an expiry. The gate tablet checks it on every entry. Refresher scheduled before it lapses.`,.3)}
          ${b(w.users,`Vendor staff on the same standard`,`A 12-person pest-control vendor follows the same induction as a 400-person housekeeping vendor. Completion by vendor, site and role on one screen.`,.38)}
          ${b(w.plug,`JLL Onsite stays if you want it`,`If contractors keep inducting on JLL Onsite, we take completion status by API and gate access on it. Toolbox talks record attendance by QR.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Induction status · Hyderabad campus</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>skillBetter · induction · site 0421 · by vendor</span></div>
          <div class="fm-body">
            <div class="fm-sum">
              <span class="g">486<small>certified</small></span>
              <span class="y">23<small>expiring in 30 days</small></span>
              <span class="r">7<small>lapsed · access withdrawn</small></span>
            </div>
            <div class="fm-rows">
              ${Ne(`Site EHS induction · v4`,`generic + Hyderabad campus module · 11 min · Hindi, Telugu, English`,`97% PASS`,`g`,`.5`)}
              ${Ne(`Work at height refresher`,`MEP and façade · 18 due this month · 11 done`,`11 / 18`,`y`,`.65`)}
              ${Ne(`Vendor 2 · pantry · 6 new joiners`,`induction assigned on onboarding · 4 complete · 2 pending`,`PENDING`,`y`,`.8`)}
              ${Ne(`7 associates · certificate lapsed`,`gate refused today · vendor and supervisor alerted 21 days ago`,`BLOCKED`,`r`,`.95`,!0)}
            </div>
          </div>
        </div>
        <div class="mockcap">Mandatory-course enforcement is the mechanism: the worker cannot proceed, and the pass does not open, until the course is complete</div>
      </div>
    </div>`},{id:`j12b`,theme:`light`,title:`Skilling`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Beyond induction · skilling the site workforce</span>
        <h2 class="rise" style="animation-delay:.08s;">Training the frontline finishes here. <span style="color:var(--navy)">88% completion against 25% on a typical LMS.</span></h2>
        <div class="featlist">
          ${b(w.lang,`Any content, every language, in 15 minutes`,`Upload the client’s SOP video or PDF; it comes back in Hindi, Telugu, Tamil and 35+ other languages with audio, translated as people speak, not word for word.`,.22)}
          ${b(w.play,`Short, on the phone, between shifts`,`Reels-style micro-lessons, levels, badges and leaderboards. Built for people who learn on a phone in a break room, not at a desk.`,.3)}
          ${b(w.check,`Mandatory courses that gate work`,`Fire safety, chemical handling, chiller operation, customer conduct. Proctored tests with face detection. A worker cannot proceed, and a permit does not open, until the course is passed. Zepto gates deployment on training the same way.`,.38)}
          ${b(w.chart,`Completion by site, vendor and role`,`Who is certified for what, where it lapses next, exported for the client’s EHS review. Records sync to your HRMS by API.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.3s">
        <div class="phones" style="min-height:clamp(280px,30vw,390px);">
          <div class="phone p1"><img src="assets/product/app-home.webp" alt="Learner home"/></div>
          <div class="phone p2"><img src="assets/product/app-gamification.webp" alt="Gamified learning path"/></div>
          <div class="phone p3"><img src="assets/product/app-proctoring.webp" alt="Proctored assessment"/></div>
        </div>
        <div class="phonecap" style="margin-top:12px;">Learner home · gamified path · proctored test. Reliance Retail: 500K+ trained in 14 languages · Amazon: 91% completion · Hindalco: 3× coverage</div>
      </div>
    </div>`},{id:`j13`,theme:`light`,title:`Work order permits`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Ask 4 · issuing work order permits · configured for JLL</span>
        <h2 class="rise" style="animation-delay:.08s;">The work order stays in Corrigo. <span style="color:var(--navy)">The permit and the people ride on top of it.</span></h2>
        <div class="featlist">
          ${b(w.doc,`Permit types as forms`,`Hot work, work at height, confined space, electrical isolation and LOTO, lifting. Each a form with the fields your EHS team specifies, built on the platform’s custom forms.`,.22)}
          ${b(w.users,`Issuer and receiver, on mobile`,`The technician or vendor requests; the site engineer or EHS lead approves from the phone. Multi-level where the client requires it. Every step dated.`,.3)}
          ${b(w.lock,`Only for people who may do the work`,`A permit opens only for a worker with a valid pass, valid induction and the certificate the job needs. The SWMS must be acknowledged first.`,.38)}
          ${b(w.eye,`Active permits, live`,`What is open, where, by whom, until when. Close-out with photo. Corrigo work order number carried on every permit for the audit.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag e"><i></i>Permit to work · on the platform</span></div>
        <div class="wocard">
          <div class="wohead"><b>PTW-2026-HYD-0912 · Hot work</b><span>CORRIGO WO 48213 · CHILLER PLANT · TOWER B</span></div>
          <div class="wogrid">
            <div><div class="k">Receiver</div><div class="v">Suresh Yadav · MEP · Vendor 4</div></div>
            <div><div class="k">Issuer</div><div class="v">R. Menon · site engineer</div></div>
            <div><div class="k">Validity</div><div class="v">18 Sep · 06:15 – 14:00</div></div>
            <div><div class="k">Pass and induction</div><div class="v ok">Valid · height cert valid</div></div>
            <div><div class="k">SWMS</div><div class="v ok">Acknowledged 06:09 · 7 steps</div></div>
            <div><div class="k">Isolation confirmed</div><div class="v warn">Photo pending · permit not open</div></div>
          </div>
          <div class="wofoot">Permit opens when the isolation photo is uploaded and the issuer approves. <b>Closes at 14:00</b> or on close-out, whichever is first.</div>
        </div>
        <div class="mockcap">Built on custom forms and approval flows during implementation. Not a separate permit product today; the permit record, its gating and its audit trail are platform behaviour</div>
      </div>
    </div>`},{id:`j14`,theme:`light`,title:`Work safe method`,html:`
    <div class="slidebody split">
      <div>
        <span class="eyebrow rise">Ask 5 · work safe method · configured for JLL</span>
        <h2 class="rise" style="animation-delay:.08s;">The safe work method statement, <span style="color:var(--navy)">read and signed on the phone before the permit opens.</span></h2>
        <div class="featlist">
          ${b(w.layers,`Step, hazard, control`,`Each high-risk task as a checklist: the step, the hazard, the control in place. Written by your EHS team, held as a template per task type.`,.22)}
          ${b(w.check,`Acknowledged, not filed`,`The worker reads it in his language and confirms each control. A “No” on any control flags the supervisor and the permit stays shut.`,.3)}
          ${b(w.cam,`Photo where it matters`,`Isolation, barricading, harness anchor: a photo attached to the step, timestamped and located.`,.38)}
          ${b(w.book,`Linked to training`,`The SWMS references the induction module and the certificate the task needs. A lapsed certificate stops the acknowledgement.`,.46)}
        </div>
      </div>
      <div class="rise" style="animation-delay:.35s">
        <div class="panewrap"><span class="panetag w"><i></i>SWMS · hot work · chiller plant · on the worker’s phone</span></div>
        <div class="funmock">
          <div class="fm-bar"><i></i><i></i><i></i><span>goBetter · SWMS-HW-04 · Suresh Yadav · 06:02</span></div>
          <div class="fm-body">
            <div class="fm-rows">
              ${Ne(`1 · Isolate and tag the chiller supply`,`hazard: electrocution · control: LOTO applied, tag photographed`,`CONFIRMED`,`g`,`.45`)}
              ${Ne(`2 · Remove flammables 5 m around`,`hazard: fire · control: area cleared, extinguisher at hand`,`CONFIRMED`,`g`,`.6`)}
              ${Ne(`3 · Fire watch posted`,`hazard: fire · control: named watcher for 30 min after work`,`CONFIRMED`,`g`,`.75`)}
              ${Ne(`4 · Gas test if hot work near pipes`,`hazard: explosion · control: reading below 10% LEL`,`PHOTO NEEDED`,`y`,`.9`,!0)}
              ${Ne(`5 · PPE: face shield, gloves, apron`,`hazard: burns · control: worn and checked by supervisor`,`CONFIRMED`,`g`,`1.05`)}
            </div>
          </div>
        </div>
        <div class="mockcap">Steps 6 and 7 follow. Acknowledgement completes when every control is confirmed, and the permit on the previous slide can then open</div>
      </div>
    </div>`},{id:`j15`,theme:`light`,title:`Onboarding and verification`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Before any of it · onboarding and background verification</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:44ch;">A worker verified once, from his own phone, <span style="color:var(--navy)">trusted at every client site he moves to.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">Onboarding</span></div>
          <ul class="cl">
            <li>Documents from the worker's phone, validated by API, configured by state and category</li>
            <li>e-Sign on contract, appointment letter and policies</li>
            <li>Bank and statutory captured once. Payroll-ready, no re-entry</li>
            <li>Bulk upload for mobilising a new site; vendor-led onboarding on the same screens</li>
            <li>Induction assigned on completion</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1d7a45">
          <div class="ch"><span class="cn">Verification · six heads</span></div>
          <ul class="cl">
            <li><b>Identity</b>: Aadhaar, PAN, DL, Voter ID, Passport, face match and liveness</li>
            <li><b>Address</b>: physical, postal, digital</li>
            <li><b>Career</b>: education, employment, UAN, references</li>
            <li><b>Financial</b>: bank, credit</li>
            <li><b>Health</b>: medical, fitness</li>
            <li><b>Legal</b>: criminal and FIR records, court records, police verification</li>
          </ul>
        </div>
        <div class="case" style="--pc:#FF9518">
          <div class="ch"><span class="cn">Why it matters on a client site</span></div>
          <ul class="cl">
            <li>Check packs per role: a security guard and a pantry associate carry different packs</li>
            <li>Red, amber, green portfolio by site and vendor, so the client sees the verification position</li>
            <li>Rehire or transfer between sites draws on the existing record</li>
            <li>Identity checks in minutes; digital case under 24 hours as a target</li>
          </ul>
        </div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.4s">
        <span class="fc">Documents on his phone</span><span class="fa">→</span>
        <span class="fc">Verification pack by role</span><span class="fa">→</span>
        <span class="fc">Profile locked</span><span class="fa">→</span>
        <span class="fc hot">Induction assigned</span><span class="fa">→</span>
        <span class="fc hot">Pass issued</span><span class="fa">→</span>
        <span class="fc gold">Moves site, record moves with him</span>
      </div>
    </div>`},{id:`j16`,theme:`darker`,title:`Payroll and vendor compliance`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Pay and compliance · what protects JLL as principal employer</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">A vendor's PF challan is not compliance. <span style="color:var(--yellow)">Matching it worker by worker is.</span></h2>
      <div class="reconboard rise" style="animation-delay:.24s">
        <div class="drows">
          <div class="drow"><span class="nm">Workers on Vendor 1's wage register, September</span><span class="vs">220</span></div>
          <div class="drow"><span class="nm">UANs found on the PF challan, read by OCR</span><span class="vs">213</span></div>
          <div class="drow over"><span class="nm">Workers with no deposit against them</span><span class="vs"><em>7 · vendor notified, dated</em></span></div>
          <div class="drow over"><span class="nm">Invoiced shifts with no gate punch</span><span class="vs"><em>131 · held</em></span></div>
        </div>
      </div>
      <div class="capgrid rise" style="animation-delay:.44s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.chart}</svg></span><h4>Payroll from attendance</h4><p>Days and hours from verified punches. Minimum wage by state and skill checked at entry. Overtime at the statutory multiple.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.doc}</svg></span><h4>Challans read by OCR</h4><p>The vendor uploads. UANs, amounts and periods are extracted and matched to each named worker's computed dues.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.card}</svg></span><h4>Invoice against attendance</h4><p>Billed-but-not-present, rate mismatches and headcount above sanction, as line items you can hold before paying.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.lock}</svg></span><h4>Compliance gates the bill</h4><p>Challan reconciliation as a precondition to invoice release. Due diligence dated and on record for the client and the inspector.</p></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.6s;color:rgba(255,255,255,.55)">Reliance: −90% payroll leakage and −80% vendor non-compliance risk across 3,000+ vendors, measured. Overtime is normalised to days for computation; agreed in design.</div>
    </div>`},{id:`j17`,theme:`dark`,title:`Proof`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Proof · this runs today</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Site access at a PSU oil major, attendance across 967 sites, <span style="color:var(--yellow)">and 300,000 contract workers on one rule engine.</span></h2>
      <div class="cases" style="grid-template-columns:repeat(3,1fr);margin-top:16px;">
        <div class="case rise" style="--pc:#FFC401;animation-delay:.22s"><div class="ch"><span class="cn">Bharat Petroleum</span><span class="ct">Energy · PSU · multiple sites</span></div><ul class="cl"><li>Face and fingerprint at site access, our pass logic behind it</li><li>Gate pass issue, renewal and auto-termination on rules</li><li>Visitor management on the same flow</li><li>Vendors and work orders from SAP</li></ul></div>
        <div class="case rise" style="--pc:#D0271D;animation-delay:.3s"><div class="ch"><span class="cn">Zepto</span><span class="ct">Quick commerce · 22 cities</span></div><ul class="cl"><li>Geo attendance with AI spoof detection</li><li>Real-time dashboard for the client's ops team</li></ul><div class="cm"><div class="m"><div class="mn">15K</div><div class="ml">workers</div></div><div class="m"><div class="mn">967</div><div class="ml">sites</div></div><div class="m"><div class="mn">40%</div><div class="ml">cost saved</div></div></div></div>
        <div class="case rise" style="--pc:#1B2D93;animation-delay:.38s"><div class="ch"><span class="cn">Reliance Industries</span><span class="ct">Retail · Jio · O2C</span></div><ul class="cl"><li>300K+ workers, 3,000+ vendors, one rule engine</li><li>Sub-vendor capture, bulk onboarding at scale</li></ul><div class="cm"><div class="m"><div class="mn">−90%</div><div class="ml">payroll leakage</div></div><div class="m"><div class="mn">−80%</div><div class="ml">vendor non-compliance</div></div></div></div>
      </div>
      <div class="probfoot rise" style="animation-delay:.5s;background:linear-gradient(90deg,var(--navy),var(--navy-deep));">Also on the platform: <b>Titan · PhonePe · Amazon · Accenture · Yokohama · Hindalco</b>, and attendance already demonstrated with JLL account teams at client sites. We can walk your team through the BPCL gate and the Zepto dashboard live.</div>
    </div>`},{id:`j18`,theme:`darker`,title:`How we start`,html:`
    <div class="glow"></div>
    <div class="slidebody">
      <span class="eyebrow rise">How we would start with JLL</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:40ch;">One client site, eight weeks, <span style="color:var(--yellow)">all five asks live on it.</span></h2>
      <div class="ledger rise" style="animation-delay:.2s">
        <div class="lrow rise" style="animation-delay:.24s"><div class="ln">01</div><div class="lw"><h4>Design · 2 weeks</h4><p>Pick one site. Configure shifts, thresholds, geo-fences, induction modules, permit forms and SWMS templates with your EHS and account team. Agree the Corrigo and payroll handshake.</p></div><div class="lp">Joint</div></div>
        <div class="lrow rise" style="animation-delay:.33s"><div class="ln">02</div><div class="lw"><h4>Go live · 2 weeks</h4><p>Face registration for JLL and vendor staff, tablets at the entrance, mobile marking for small sites, induction assigned, dashboards for the client.</p></div><div class="lp">BetterPlace</div></div>
        <div class="lrow rise" style="animation-delay:.42s"><div class="ln">03</div><div class="lw"><h4>Run one month · measure</h4><p>Attendance against your current muster, permits and SWMS on live jobs, one payroll cycle from our data, one vendor invoice reconciled. Then count the difference together.</p></div><div class="lp">Measured</div></div>
        <div class="lrow rise" style="animation-delay:.51s"><div class="ln">04</div><div class="lw"><h4>Scale by site</h4><p>Add sites, cities and vendors on the same policy engine. One dashboard for the account, one for each client.</p></div><div class="lp">Staged</div></div>
      </div>
      <div class="clientline rise" style="color:rgba(255,255,255,.6);margin-top:14px;animation-delay:.7s">Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in</div>
    </div>`}],Fe=[{id:`cl1`,theme:`darker`,title:`Cover`,html:`
    <div class="glow"></div>
    <div class="mdcover">
      <span class="mdkicker rise" style="animation-delay:.05s">Contract labour management · for principal employers</span>
      <h1 class="rise" style="animation-delay:.15s;font-size:clamp(30px,3.6vw,54px);">Your contractors' compliance is your liability. <span style="color:var(--yellow)">Today you find out at the audit.</span></h1>
      <p class="sub rise" style="animation-delay:.3s">goBetter CLMS puts the work order, the licence, the gate, the attendance, the payroll and the vendor's PF challan on one worker record. A worker who fails a condition does not get a pass. A contractor who short-pays does not get paid. Six capabilities, in the order plants buy them.</p>
      <div class="stats rise" style="animation-delay:.45s;margin-top:22px;">
        <div class="stat"><div class="n">300K</div><div class="l">Workers live at Reliance</div></div>
        <div class="stat"><div class="n">3,000+</div><div class="l">Vendors on one rule engine</div></div>
        <div class="stat"><div class="n">−90%</div><div class="l">Payroll leakage, measured</div></div>
        <div class="stat"><div class="n">BPCL</div><div class="l">Gate logic running in SAP</div></div>
      </div>
      <div class="mdcover ghost">CLMS</div>
    </div>`},{id:`cl-a`,theme:`light`,title:`A · Onboarding and verification`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Pillar A · onboarding, document collection and verification</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:40ch;">A worker verified once is trusted everywhere. <span style="color:var(--navy)">Including the next time he comes back.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#D0271D">
          <div class="ch"><span class="cn">How it runs today</span></div>
          <ul class="cl">
            <li>The contractor collects documents on paper and sends a scan when he remembers</li>
            <li>Plant HR re-keys the same worker into attendance, then into payroll</li>
            <li>Verification is a spreadsheet of who was sent where, with no dates</li>
            <li>A rehire starts from zero because nobody can find last year's file</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">What we do</span></div>
          <ul class="cl">
            <li>Worker submits documents <b>from his own phone</b>, validated by API, configured by state and worker category</li>
            <li>e-Sign on contract, appointment letter and policy acknowledgement</li>
            <li>Bank and statutory captured once — <b>payroll-ready with no re-entry</b></li>
            <li>Vendor-led onboarding in the same screens, so a 12-worker contractor follows the same standard as a 900-worker one</li>
            <li>Bulk upload returns every error in one file, not one row at a time</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1d7a45">
          <div class="ch"><span class="cn">Verification, six heads</span></div>
          <ul class="cl">
            <li><b>Identity</b> — Aadhaar, PAN, DL, Voter, Passport, with face match and liveness</li>
            <li><b>Address</b> — physical, postal, digital</li>
            <li><b>Career</b> — education, employment, UAN validation, references</li>
            <li><b>Financial</b> — bank account, credit</li>
            <li><b>Health</b> — medical, fitness, drug tests</li>
            <li><b>Legal</b> — criminal, court records, police verification, global screening</li>
          </ul>
        </div>
      </div>
      <div class="flowstrip rise" style="animation-delay:.4s">
        <span class="fc">Documents on his phone<small>API-validated</small></span><span class="fa">→</span>
        <span class="fc">Six-head BGV<small>red / amber / green</small></span><span class="fa">→</span>
        <span class="fc">Profile locked<small>change history kept</small></span><span class="fa">→</span>
        <span class="fc hot">Gate pass issued<small>only if all five conditions clear</small></span><span class="fa">→</span>
        <span class="fc gold">Rehire reuses it<small>no second verification</small></span>
      </div>
      <div class="pmfoot rise" style="animation-delay:.55s">Identity checks typically return in minutes; a composite digital case is targeted at under 24 hours. Physical address and court checks follow field and registry timelines. Source: SOW §7–§8.</div>
    </div>`},{id:`cl-b`,theme:`dark`,title:`B · Time, attendance and rostering`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Pillar B · time, attendance and rostering</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:42ch;">Zepto runs 15,000 workers across 967 sites on this. <span style="color:var(--yellow)">A photo held to the camera does not open the gate.</span></h2>
      <div class="twopane">
        <div class="tp emp rise" style="animation-delay:.2s">
          <span class="panetag e" style="background:rgba(255,255,255,.1);color:#fff;"><i></i>Capture — one record, three ways in</span>
          <p class="tpprob" style="color:rgba(255,255,255,.72)">Face match with <b style="color:#fff">AI spoof detection</b> and a review queue for suspected proxies. <b style="color:#fff">Geo-fence per site</b>, so a punch outside the boundary does not register. Biometric terminals at plant gates and mobile marking at project sites feed the same record — not two systems reconciled monthly.</p>
          <div class="impacts" style="grid-template-columns:1fr 1fr;margin-top:10px;">
            <div class="imp"><div class="n">967</div><div class="l">Zepto sites, planned vs actual</div></div>
            <div class="imp" style="background:rgba(59,232,176,.08);border-color:rgba(59,232,176,.3)"><div class="n" style="color:#3BE8B0">40%</div><div class="l">Frontline cost saved at Zepto</div></div>
          </div>
        </div>
        <div class="tp wrk rise" style="animation-delay:.32s;background:rgba(255,196,1,.08)">
          <span class="panetag w"><i></i>Roster — published, capped, enforced</span>
          <p class="tpprob" style="color:rgba(255,255,255,.72)">Weekly grid by associate and day, with copy, bulk edit, undo and an explicit <b style="color:#fff">publish</b> step. Night and cross-midnight shifts handled. Weekly off, rest day and field designation set per associate per day.</p>
          <p class="tpprob" style="color:rgba(255,255,255,.72);margin-top:8px">Overtime computes from attendance against the shift, with <b style="color:#fff">monthly and quarterly caps</b>, alerts as a cap approaches, optional pre-approval, and automatic disallowance where punches are missing. It pays at the statutory multiple and files itself into the overtime register.</p>
          <div class="impacts" style="grid-template-columns:1fr 1fr;margin-top:10px;">
            <div class="imp" style="background:rgba(255,196,1,.1);border-color:rgba(255,196,1,.35)"><div class="n" style="color:var(--yellow)">Capped</div><div class="l">OT pre-approved, not explained later</div></div>
            <div class="imp"><div class="n">Audited</div><div class="l">Every regularisation carries a reason</div></div>
          </div>
        </div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.55s;color:rgba(255,255,255,.55)">Regularisation asks the worker for a reason from a fixed list and keeps the trail. Approval queues carry an SLA counter. When overtime lives in a supervisor's notebook, none of it is provable. Source: SOW §10; Zepto deployment.</div>
    </div>`},{id:`cl-c`,theme:`light`,title:`C · Compliance`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Pillar C · CLRA, statutory registers and vendor compliance</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:42ch;">Deploy the 51st worker against a 50-worker licence <span style="color:var(--navy)">and the system stops you, not the inspector.</span></h2>
      <div class="lsmeter rise" style="animation-delay:.24s">
        <div class="lsrow"><span class="nm">Shree Manpower</span><span class="lsbar"><i style="--w:87%;--d:.4s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">174 / 200<small>within licence</small></span></div>
        <div class="lsrow"><span class="nm">Ganpati Services</span><span class="lsbar"><i style="--w:71%;--d:.55s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">106 / 150<small>within licence</small></span></div>
        <div class="lsrow"><span class="nm">Bhoomi Facility</span><span class="lsbar over"><i style="--w:100%;--d:.7s"></i><span class="cap" style="--cap:84%"></span></span><span class="vs"><em>63 / 53</em><small>10 over — blocked at gate</small></span></div>
        <div class="lsrow"><span class="nm">Krishna Logistics</span><span class="lsbar"><i style="--w:46%;--d:.85s"></i><span class="cap" style="--cap:100%"></span></span><span class="vs">37 / 80<small>within licence</small></span></div>
      </div>
      <div class="capgrid rise" style="animation-delay:.42s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.doc}</svg></span><h4>Licence as an object</h4><p>Licensed strength, validity and issuing authority held per contractor. Deployment is measured against it continuously, and a gate pass that would breach it is blocked.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.layers}</svg></span><h4>Registers from live data</h4><p>Register of contractors, register of workmen, employment cards, muster roll and wage register are a view on the data that runs attendance and payroll. Nothing is maintained twice.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.shield}</svg></span><h4>Documents that expire</h4><p>CLRA licence, PF and ESIC registration, GST, Workmen's Compensation cover and shops-and-establishment, each with validity tracking and advance expiry alerts.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.map}</svg></span><h4>Ten states, ten rule sets</h4><p>Minimum wages, holiday calendars, shift patterns and approval hierarchies configured per state inside one tenant. Spreadsheets do not vary by state.</p></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.6s">We supply the data, registers and audit trail. Determining applicability and filing returns stay with you and your advisors — we format the extracts for EPFO, ESIC and state portals. Form numbers follow the CLRA Central Rules 1971; state rules vary. Source: SOW §5, §22.</div>
    </div>`},{id:`cl-d`,theme:`dark`,title:`D · Budget planning and productivity`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Pillar D · manpower budget, deployment control and productivity</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">Headcount, wages and billing tracked against every work order. <span style="color:var(--yellow)">Per contractor, per shift, per site.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#3BE8B0">
          <div class="ch"><span class="cn">Shipping today</span></div>
          <ul class="cl">
            <li><b>Sanctioned headcount by skill category</b> on the work order, with deployed-versus-sanctioned visible per order and per site</li>
            <li>Cost centre and department mapping, so contract labour cost lands where it belongs in finance</li>
            <li><b>Overtime caps</b> at organisation and site level, with pre-approval as a policy switch</li>
            <li>Shortfall analysis by site in the BI layer, filterable by state, city and site</li>
            <li>Position codes and budget reports — the governing masters at Reliance across 300,000 workers</li>
          </ul>
        </div>
        <div class="case" style="--pc:#FF9518">
          <div class="ch"><span class="cn">Built in the pilot</span></div>
          <ul class="cl">
            <li><b>Demand forecast</b> per shift, area and skill, from the production plan, maintenance calendar, shift pattern and each area's absenteeism history</li>
            <li>Auto-scheduling that deploys the forecast rather than yesterday's number</li>
            <li>Cross-plant and cross-contractor benchmarking, so the best plant sets the bar</li>
            <li>We build and measure these in a pilot plant. We do not sell them as a shipped module.</li>
          </ul>
        </div>
        <div class="case" style="--pc:#D0271D">
          <div class="ch"><span class="cn">What it is worth</span></div>
          <ul class="cl">
            <li>Deployment falls as each gap closes. The diagnostic puts your number on it</li>
            <li>Overtime at premium rates falls once the roster carries the cap</li>
            <li>Billed-but-not-present disappears when the invoice meets verified attendance</li>
            <li>Leakage and vendor gaps cut at the rates measured at Reliance: <b>−90%</b> and <b>−80%</b></li>
          </ul>
        </div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.55s;color:rgba(255,255,255,.55)">The −90% and −80% figures are measured on comparable deployments across 3,000+ vendors. They depend on your baseline maturity and are not a warranty. Source: SOW §4.2, §5, §10.4, §15; PwC CLMS 2.0 levers 2 and 5.</div>
    </div>`},{id:`cl-e`,theme:`light`,title:`E · Grievance and worker engagement`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Pillar E · worker voice, queries and engagement</span>
      <h2 class="rise" style="animation-delay:.08s;max-width:42ch;">A worker who can see his own log <span style="color:var(--navy)">stops raising a ticket about it.</span></h2>
      <div class="cases rise" style="grid-template-columns:repeat(3,1fr);margin-top:14px;animation-delay:.2s">
        <div class="case" style="--pc:#1B2D93">
          <div class="ch"><span class="cn">He can see it himself</span></div>
          <ul class="cl">
            <li>Monthly summary: total earnings, present days against working days, and separate totals for absent, half-day, leave, overtime, week off and holiday</li>
            <li>Day detail and a focused half-day and overtime view</li>
            <li>Payslip by month, leave balance, public holidays</li>
            <li>All of it in his own language, on his own phone</li>
          </ul>
        </div>
        <div class="case" style="--pc:#1d7a45">
          <div class="ch"><span class="cn">He can ask — and get an answer</span></div>
          <ul class="cl">
            <li>Grievance raised from the app, with ticket status visible to him</li>
            <li><b>AI Theo</b> answers PF number, shift timing, payslip, leave balance and claim questions by chat or voice, <b>24 languages, any hour</b>. Status: live</li>
            <li><b>₹0.37</b> per conversation; <b>₹5/min</b> voice against ₹12 industry</li>
            <li>Worker data never leaves our cloud — models run on our own infrastructure in India</li>
          </ul>
        </div>
        <div class="case" style="--pc:#FF9518">
          <div class="ch"><span class="cn">Where the IR risk actually sits</span></div>
          <ul class="cl">
            <li>Roughly <b>three in four</b> factory accident victims in India are contract or temporary workers</li>
            <li>Safety induction runs on his phone in his language, with an assessment and a dated certificate — and the certificate is what activates his gate access</li>
            <li>Let it expire and access is withdrawn automatically</li>
            <li>Pay disputes drop when hours are visible before payday, not argued after it</li>
          </ul>
        </div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.55s">Plain about the boundary: this is worker self-service and an answering agent, not an IR case-management suite. There is no escalation matrix, POSH workflow or resolution-SLA engine in the product today. Accident share sourced to Safe in India CRUSHED reports. Source: SOW §16–§17.</div>
    </div>`},{id:`cl-f`,theme:`darker`,title:`F · Payroll and billing reconciliation`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">Pillar F · payroll, challan and invoice reconciliation</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:44ch;">A challan upload is not compliance. <span style="color:var(--yellow)">Matching it worker by worker is.</span></h2>
      <div class="reconboard rise" style="animation-delay:.24s">
        <div class="drows">
          <div class="drow"><span class="nm">Invoiced headcount</span><span class="vs">212 workers</span></div>
          <div class="drow"><span class="nm">Gate-verified attendance for the period</span><span class="vs">196 workers</span></div>
          <div class="drow over"><span class="nm">Billed but not present</span><span class="vs"><em>16 line items held</em></span></div>
          <div class="drow over"><span class="nm">Wage lines below the state minimum</span><span class="vs"><em>3 flagged at entry</em></span></div>
          <div class="drow"><span class="nm">Period PF / ESI challan evidence</span><span class="vs">Pending — invoice not released</span></div>
        </div>
      </div>
      <div class="capgrid rise" style="animation-delay:.44s;grid-template-columns:repeat(4,1fr);margin-top:14px;">
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.chart}</svg></span><h4>Payroll from attendance</h4><p>Computed from verified attendance, with no manual entry of days or hours. Minimum wage is validated per state and skill grade, and a non-compliant structure is blocked at entry.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.doc}</svg></span><h4>Challans read by OCR</h4><p>The contractor uploads; the system pulls UANs, amounts and contribution periods without re-keying, then compares deposited against due for each named worker.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.warn}</svg></span><h4>Gaps while you have leverage</h4><p>Short payment, non-payment, wrong UAN and late filing flagged in the same cycle, vendor notified, notice dated. Due diligence on record.</p></div>
        <div class="cap"><span class="ci"><svg viewBox="0 0 24 24">${w.lock}</svg></span><h4>Compliance gates payment</h4><p>PF and ESI reconciliation can be set as a precondition to invoice approval. The leverage sits before the money moves.</p></div>
      </div>
      <div class="pmfoot rise" style="animation-delay:.6s;color:rgba(255,255,255,.55)"><b style="color:#fff">If you are the staffing company, not the plant:</b> your team transacts in the same system and sees only its own workers and orders. Said early, not late — overtime is measured in hours but normalised to days for computation. Source: SOW §12–§13.</div>
    </div>`},{id:`cl-close`,theme:`darker`,title:`How to start`,html:`
    <div class="slidebody">
      <span class="eyebrow rise">How this starts</span>
      <h2 class="rise" style="animation-delay:.08s;color:#fff;max-width:40ch;">One plant, four to five months, <span style="color:var(--yellow)">and a number you can take to the board.</span></h2>
      <div class="ledger rise" style="animation-delay:.2s">
        <div class="lrow rise" style="animation-delay:.24s"><div class="ln">01</div><div class="lw"><h4>Design — 3 to 4 weeks</h4><p>Your org model, sites, vendors, work orders and state rule sets, configured to your interpretation of the rules.</p></div><div class="lp">Annexure A</div></div>
        <div class="lrow rise" style="animation-delay:.33s"><div class="ln">02</div><div class="lw"><h4>Build — 4 to 6 weeks</h4><p>SAP or ERP master and posting integration, biometric devices at the gates you choose, SSO, API and webhooks.</p></div><div class="lp">Phase 1</div></div>
        <div class="lrow rise" style="animation-delay:.42s"><div class="ln">03</div><div class="lw"><h4>Pilot one plant — 6 to 8 weeks</h4><p>Gate pass conditional on all five checks, attendance and overtime live, vendor challans reconciled worker by worker for a full cycle.</p></div><div class="lp">Measured</div></div>
        <div class="lrow rise" style="animation-delay:.51s"><div class="ln">04</div><div class="lw"><h4>Roll out on your schedule</h4><p>Payroll, billing, leave and training follow in phase 2. AI agents in phase 3, on our own infrastructure in India.</p></div><div class="lp">Staged</div></div>
      </div>
      <div class="clientline rise" style="color:rgba(255,255,255,.6);margin-top:14px;animation-delay:.7s">Reliance runs 300,000 workers and 3,000+ vendors on this. BPCL runs contract labour, vendors and visitors through it, wired into SAP. Durations are indicative, confirmed at initiation. ISO 27001 · SOC 2 · hosted in India · DPDP Act 2023 aligned.</div>
    </div>`}],Ie=[{id:`group`,next:`ai-labs`,title:`The BetterPlace Group Story`,group:`story`,tagline:`The executive pitch in 16 slides — problem, cost, model, every product, proof and how to start. The one to open the meeting with.`,slides:[`s1`,`s2`,`s13b`,`s2b`,`s5`,`s6`,`s7`,`s8`,`s8b`,`s9`,`s10`,`s11`,`s12`,`s14`,`s14b`,`sclose`].map(e=>T.find(t=>t.id===e))},{id:`why-betterplace`,next:`group`,title:`Why BetterPlace Exists · The Story`,group:`story`,tagline:`The soul-of-the-company deck — the invisible workforce, one rider’s journey through everything we run, Retail Samarth, and the AI turn. Link-only; not listed on the hub.`,slides:we},{id:`why-betterplace-nikhil`,next:`group`,title:`BetterPlace · The Product-Rich Nikhil Cut`,group:`story`,tagline:`The original Ravi story, preserved and refined: designed product screens, worker versus employer value, operating proof and the business underneath.`,slides:Oe},{id:`jll`,next:`clms`,title:`JLL · Site Workforce Capabilities`,group:`story`,tagline:`For JLL India Work Dynamics — sign in and sign out, digitised attendance, induction, work order permits and safe work method, on the CLMS and HCM platform. Link-only.`,slides:Pe},{id:`clms-pillars`,next:`pwc-clms`,title:`CLMS · The Six Capabilities`,group:`story`,tagline:`The campaign deck — onboarding and verification, attendance and rostering, compliance, manpower budget and productivity, worker voice, and payroll and billing reconciliation. One slide per capability, each written to double as a mailer.`,slides:Fe},{id:`pwc-clms`,next:`mfg-story`,title:`CLMS 2.0 · for PwC`,group:`story`,tagline:`Joint proposal for PwC India — AI-driven contract-labour deployment optimisation (~30%) and time-office automation, grounded in BPCL and Reliance deployments.`,slides:Ae},{id:`sael`,next:`mfg-story`,title:`SAEL · Contract Labour & Plant Compliance`,group:`story`,tagline:`Built for the SAEL demo — work orders, CLRA licensed strength, vendor PF/ESI reconciliation, gate passes, attendance and overtime, closing on the BPCL deployment.`,slides:ke},{id:`sales-story`,next:`mfg-story`,title:`goBetter for Sales Teams`,group:`story`,tagline:`The story for revenue leaders — field and retail sellers hired, trained, coached, tracked and incentivised on one platform.`,slides:ve},{id:`mfg-story`,next:`gobetter`,title:`goBetter for Manufacturing`,group:`story`,tagline:`The story for plant leaders — contract labour sourced, verified, gate-passed, attended, paid, kept compliant and safety-trained on one platform.`,slides:ye},{id:`ai-labs`,next:`skillbetter`,title:`AI Labs`,group:`ai`,tagline:`The flagship. Build an AI worker in 10 minutes — the studio, the agent roster, deterministic workflows, in-chat apps, pricing and live proof.`,slides:te},{id:`gobetter`,next:`ai-labs`,title:`goBetter · The Full Suite`,group:`product`,tagline:`All eight software modules in one deck — hire, onboard, verify, attend, payroll, incentives, LMS and the HRIS core they share.`,slides:xe},{id:`skillbetter`,next:`hire-onboard`,title:`skillBetter · LMS`,group:`product`,tagline:`88% completion vs 25% industry — translation in 15 minutes, reels, gamification, proctored assessments, admin console.`,slides:ne},{id:`hire-onboard`,next:`verify`,title:`Hire & Onboard`,group:`product`,tagline:`Full ATS + digital onboarding: WhatsApp-apply, AI screening, 10-minute self-onboarding straight into payroll.`,slides:E},{id:`verify`,next:`clms`,title:`verifyBetter · BGV`,group:`product`,tagline:`India’s first digital frontline BGV — 50K cases/day, <24hr TAT, red/yellow/green portfolio view.`,slides:ce},{id:`clms`,next:`attendance`,title:`goBetter CLMS · Contract Labour`,group:`product`,tagline:`Vendor, work order, licence, worker, induction, gate, attendance, overtime, wages, challans, invoice, registers — one record, in the order it happens on site.`,slides:Me},{id:`attendance`,next:`payroll`,title:`Attendance · manageBetter`,group:`product`,tagline:`Face-verified, geo-fenced, spoof-proof attendance with rostering, approvals and a policy engine.`,slides:ie},{id:`incentives`,next:`hris`,title:`goBetter Incentives`,group:`product`,tagline:`Every sale rewarded, every rupee explained — AI-built schemes, live earnings in the associate’s pocket, disputes that close themselves.`,slides:ge},{id:`payroll`,next:`incentives`,title:`Payroll & Compliance`,group:`product`,tagline:`Never inherit a vendor’s PF/ESI liability — challan OCR, worker-by-worker reconciliation, audit-ready.`,slides:oe},{id:`hris`,next:`staffbetter`,title:`goBetter HRIS Core`,group:`product`,tagline:`One worker record every module reads — employee master, 360° profiles, embedded BI.`,slides:D},{id:`staffbetter`,next:`aasaanjobs`,title:`staffBetter · Managed Staffing`,group:`services`,tagline:`Full-time frontline staffing with employer-of-record compliance — deployed in 24–72 hours from the verified 25M+ pool.`,slides:de},{id:`aasaanjobs`,next:`gigbetter`,title:`Aasaanjobs · Staffing Solutions`,group:`services`,tagline:`The India staffing brand — 23,000+ outsourced manpower, 25+ cities, >95% client retention. Recruitment, onboarding and payroll end to end.`,slides:fe},{id:`gigbetter`,next:`ai-labs`,title:`gigBetter · On-demand Gig`,group:`services`,tagline:`Outcome-billed gig deployment in under 24 hours — GPS + photo proof on every task, <4% no-shows.`,slides:O},...he];function Le(e){return Ie.find(t=>t.id===e)}var Re=[`ai-labs`,`skillbetter`,`hire-onboard`,`verify`,`attendance`,`payroll`,`incentives`,`hris`,`staffbetter`,`aasaanjobs`,`gigbetter`];function ze(e){let t=T.filter(e=>[`s1`,`s2`,`s3`,`s5`].includes(e.id)),n=T.filter(e=>[`s13`,`s15`,`sclose`].includes(e.id)),r=e.filter(e=>Re.includes(e)).flatMap(e=>Le(e)?.slides??[]),i=new Set;return[...t,...r,...n].filter(e=>i.has(e.id)?!1:(i.add(e.id),!0))}function Be(e){return{id:`custom`,title:`Custom flow`,tagline:`Stitched for this meeting`,group:`story`,slides:ze(e)}}function Ve(){let e=new URLSearchParams(window.location.search),t=e.get(`for`)?.trim(),n=e.get(`c`)?.replace(/[^0-9a-fA-F]/g,``);return!t&&!n?{active:!1,client:null}:{active:!0,client:{name:t||``,color:n&&(n.length===6||n.length===3)?`#${n}`:`#FFC401`,logo:null,industry:e.get(`ind`)||`General`}}}function He(e){let t=window.location.origin+window.location.pathname,n=new URLSearchParams;e?.name&&n.set(`for`,e.name),e?.color&&n.set(`c`,e.color.replace(`#`,``)),e?.industry&&e.industry!==`General`&&n.set(`ind`,e.industry);let r=n.toString();return`${t}${r?`?`+r:``}#/hub`}var Ue=`#FFC401`;function We(e,t,n,r,i,a,o){let s=(e,t)=>Math.round(e+(t-e)*o);return`rgb(${s(e,r)}, ${s(t,i)}, ${s(n,a)})`}function Ge(e){if(!e)return{};let t=e.replace(`#`,``);if(t.length!==6||e.toUpperCase()===Ue)return{"--client":e};let n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),i=parseInt(t.slice(4,6),16),a=(.2126*n+.7152*r+.0722*i)/255,o=a<.5?We(n,r,i,255,255,255,a<.25?.6:.4):e,s=a>.55?We(n,r,i,0,0,0,a>.8?.55:.38):e;return{"--client":e,"--client-ondark":o,"--client-onlight":s,"--accent-ondark":o,"--accent-onlight":s}}var Ke={"Retail & Q-commerce":`ind-retail`,Manufacturing:`ind-mfg`,"Logistics & Delivery":`ind-log`,"BFSI & Field Sales":`ind-bfsi`,"Tech & Services":`ind-tech`};function qe(e){return e&&Ke[e]||null}function Je({client:e,shareMode:t=!1,onOpen:n,onEditClient:r}){let[i,a]=(0,l.useState)(!1),[o,s]=(0,l.useState)([]),[c,u]=(0,l.useState)(!1),d=e?.color||`#FFC401`,f=async()=>{try{await navigator.clipboard.writeText(He(e)),u(!0),setTimeout(()=>u(!1),2e3)}catch{prompt(`Copy this client link:`,He(e))}},p=e=>s(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),m=e=>Ie.filter(t=>t.group===e),g=(e,t=``)=>(0,h.jsxs)(`button`,{className:`deck-card ${t}`,onClick:()=>n(e.id),children:[(0,h.jsxs)(`span`,{className:`dc-count`,children:[e.slides.length,` slides`]}),(0,h.jsx)(`h3`,{children:e.title}),(0,h.jsx)(`p`,{children:e.tagline}),(0,h.jsx)(`span`,{className:`dc-go`,children:`Open deck →`})]},e.id);return(0,h.jsxs)(`div`,{className:`hubpage`,style:{"--client":d,...Ge(e?.color)},children:[(0,h.jsxs)(`header`,{className:`hubpage-top`,children:[(0,h.jsxs)(`div`,{className:`marks`,children:[(0,h.jsx)(`img`,{src:`assets/logo/bp-white.png`,alt:`BetterPlace`,className:`hub-bp`}),e&&(e.logo||e.name)&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`span`,{className:`x`,children:`✕`}),e.logo?(0,h.jsx)(`img`,{className:`hub-clogo`,src:e.logo,alt:e.name}):(0,h.jsx)(`span`,{className:`hub-cname`,children:e.name})]})]}),!t&&(0,h.jsxs)(`div`,{style:{display:`flex`,gap:10},children:[(e?.name||e?.logo)&&(0,h.jsx)(`button`,{className:`btn-ghost small`,onClick:f,children:c?`✓ Link copied`:`Copy client link`}),(0,h.jsx)(`button`,{className:`btn-primary small-cta`,onClick:r,children:e?.name||e?.logo?`✎ Client branding`:`✎ Customize for a client`})]})]}),(0,h.jsxs)(`div`,{className:`hub-hero`,children:[(0,h.jsx)(`span`,{className:`eyebrow-h`,children:`BetterPlace · the frontline workforce platform`}),(0,h.jsx)(`h1`,{children:e?.name?`BetterPlace, presented for ${e.name}.`:`Everything we do, ready to present.`}),(0,h.jsxs)(`p`,{children:[`BetterPlace helps large companies run their frontline teams — we `,(0,h.jsx)(`b`,{children:`hire, verify, onboard, train, manage, pay and staff`}),` blue-collar workers, with AI agents working underneath. This site is our pitch: every deck below opens like a slideshow in your browser. Present it in a meeting, or send someone the link.`]}),(0,h.jsxs)(`div`,{className:`hub-cta-row`,children:[(0,h.jsxs)(`button`,{className:`btn-primary big`,onClick:()=>n(`group`),children:[`▶ The 15-minute company story `,(0,h.jsxs)(`span`,{children:[Ie.find(e=>e.id===`group`).slides.length,` slides`]})]}),(0,h.jsxs)(`button`,{className:`btn-story big`,onClick:()=>n(`sales-story`),children:[`▶ goBetter for Sales Teams `,(0,h.jsxs)(`span`,{children:[Ie.find(e=>e.id===`sales-story`).slides.length,` slides · field & retail sellers`]})]}),qe(e?.industry)&&(0,h.jsxs)(`button`,{className:`btn-ghost`,onClick:()=>n(qe(e.industry)),children:[`Built for `,e.industry,` →`]}),(0,h.jsx)(`button`,{className:`btn-ghost`,onClick:()=>{window.location.hash=`/roi`},children:`💰 What you'd save`}),(0,h.jsx)(`button`,{className:`btn-ghost`,onClick:()=>{a(!i),s([])},children:i?`Cancel`:`Mix your own deck`})]}),i&&(0,h.jsxs)(`div`,{className:`picker`,children:[(0,h.jsx)(`p`,{children:`Pick the topics for this meeting — we'll stitch one deck with the company opening, your topics, and the proof close.`}),(0,h.jsx)(`div`,{className:`picker-chips`,children:Re.map(e=>{let t=Ie.find(t=>t.id===e);return(0,h.jsx)(`button`,{className:`f-chip${o.includes(e)?` on`:``}`,onClick:()=>p(e),children:t.title},e)})}),(0,h.jsxs)(`button`,{className:`btn-primary`,disabled:!o.length,onClick:()=>n(`custom`,o),children:[`Present `,o.length?`${ze(o).length} slides`:`selection`,` →`]})]})]}),(0,h.jsxs)(`section`,{className:`hub-section`,children:[(0,h.jsxs)(`h2`,{children:[(0,h.jsx)(`i`,{children:`01`}),` Pick a solution`]}),(0,h.jsx)(`p`,{className:`hub-section-sub`,children:`Each product has its own deep-dive deck — problems it solves, real screenshots, outcomes, and how a pilot starts.`}),(0,h.jsx)(`div`,{className:`hub-grid wide`,style:{marginBottom:14},children:m(`ai`).map(e=>g(e,`flag`))}),(0,h.jsxs)(`div`,{className:`hub-grid`,children:[m(`product`).map(e=>g(e)),m(`services`).map(e=>g(e))]})]}),(0,h.jsxs)(`section`,{className:`hub-section`,children:[(0,h.jsxs)(`h2`,{children:[(0,h.jsx)(`i`,{children:`02`}),` Or start from what's bothering you`]}),(0,h.jsx)(`p`,{className:`hub-section-sub`,children:`Five problems we hear most often — each opens the deck that answers it.`}),(0,h.jsxs)(`div`,{className:`hub-grid problems`,children:[(0,h.jsxs)(`button`,{className:`deck-card lead`,onClick:()=>n(`custom`,[`staffbetter`,`gigbetter`]),children:[(0,h.jsx)(`h3`,{children:`"I can't fill workforce demand"`}),(0,h.jsx)(`p`,{children:`Verified workers deployed in 24–72 hours — full-time or on-demand gig.`}),(0,h.jsx)(`span`,{className:`dc-go`,children:`staffBetter + gigBetter →`})]}),(0,h.jsxs)(`button`,{className:`deck-card lead`,onClick:()=>n(`attendance`),children:[(0,h.jsx)(`h3`,{children:`"I can't trust our attendance"`}),(0,h.jsx)(`p`,{children:`Face-verified punches, live rosters, exceptions in one queue.`}),(0,h.jsx)(`span`,{className:`dc-go`,children:`Attendance →`})]}),(0,h.jsxs)(`button`,{className:`deck-card lead`,onClick:()=>n(`payroll`),children:[(0,h.jsx)(`h3`,{children:`"Payroll & compliance keep me up at night"`}),(0,h.jsx)(`p`,{children:`Challan reconciliation, wage validation, an audit file that's always ready.`}),(0,h.jsx)(`span`,{className:`dc-go`,children:`Payroll & Compliance →`})]}),(0,h.jsxs)(`button`,{className:`deck-card lead`,onClick:()=>n(`skillbetter`),children:[(0,h.jsx)(`h3`,{children:`"Nobody finishes our training"`}),(0,h.jsx)(`p`,{children:`88% completion in 35+ languages — proctored, measured, gamified.`}),(0,h.jsx)(`span`,{className:`dc-go`,children:`skillBetter →`})]}),(0,h.jsxs)(`button`,{className:`deck-card lead`,onClick:()=>n(`hris`),children:[(0,h.jsx)(`h3`,{children:`"Five systems, five different headcounts"`}),(0,h.jsx)(`p`,{children:`Every module reading one worker record — with built-in analytics.`}),(0,h.jsx)(`span`,{className:`dc-go`,children:`goBetter HRIS →`})]})]})]}),(0,h.jsxs)(`section`,{className:`hub-section`,children:[(0,h.jsxs)(`h2`,{children:[(0,h.jsx)(`i`,{children:`03`}),` Or see it through your industry`]}),(0,h.jsx)(`p`,{className:`hub-section-sub`,children:`The same platform, told in your sector's language — with AI agents framed for your floor.`}),(0,h.jsx)(`div`,{className:`hub-grid`,children:m(`industry`).map(e=>g(e))})]}),(0,h.jsxs)(`footer`,{className:`hub-foot`,children:[(0,h.jsx)(`span`,{children:`BetterPlace · 25M+ workers · 1,000+ enterprises · 8 markets across India, SEA & GCC`}),(0,h.jsx)(`span`,{children:`Anuj Saxena — Director, Product · anuj.saxena@betterplace.co.in`})]})]})}var Ye=e=>e>=1e7?`₹${(e/1e7).toFixed(1)} Cr`:e>=1e5?`₹${(e/1e5).toFixed(1)} L`:`₹${Math.round(e).toLocaleString(`en-IN`)}`;function Xe({client:e,onBack:t}){let[n,r]=(0,l.useState)(5e3),[i,a]=(0,l.useState)(18e3),[o,s]=(0,l.useState)(15),[c,u]=(0,l.useState)(15e3),d=n*i*12,f=Math.round(o/100*n*12),p=d*.022*.9,m=f*c*.6,g=f*.15*(c+i*.5),_=p+m+g,v=e?.color||`#FFC401`;return(0,h.jsxs)(`div`,{className:`hubpage roipage`,style:{"--client":v},children:[(0,h.jsxs)(`header`,{className:`hubpage-top`,children:[(0,h.jsxs)(`div`,{className:`marks`,children:[(0,h.jsx)(`img`,{src:`assets/logo/bp-white.png`,alt:`BetterPlace`,className:`hub-bp`}),e?.name&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`span`,{className:`x`,children:`✕`}),(0,h.jsx)(`span`,{className:`hub-cname`,children:e.name})]})]}),(0,h.jsx)(`button`,{className:`btn-ghost small`,onClick:t,children:`← Back to decks`})]}),(0,h.jsxs)(`div`,{className:`hub-hero`,children:[(0,h.jsx)(`span`,{className:`eyebrow-h`,children:`The maths · on your numbers`}),(0,h.jsx)(`h1`,{children:e?.name?`What ${e.name} would save in a year.`:`What you would save in a year.`}),(0,h.jsx)(`p`,{children:`Move the sliders to your workforce. The model is directional — three savings lines, each anchored to a measured client result. We refine it together on the first call.`})]}),(0,h.jsxs)(`div`,{className:`roi-grid`,children:[(0,h.jsxs)(`div`,{className:`roi-inputs`,children:[(0,h.jsxs)(`label`,{className:`f-label`,children:[`Frontline workforce size — `,(0,h.jsx)(`b`,{children:n.toLocaleString(`en-IN`)})]}),(0,h.jsx)(`input`,{type:`range`,min:200,max:5e4,step:100,value:n,onChange:e=>r(+e.target.value)}),(0,h.jsxs)(`label`,{className:`f-label`,children:[`Average monthly wage — `,(0,h.jsxs)(`b`,{children:[`₹`,i.toLocaleString(`en-IN`)]})]}),(0,h.jsx)(`input`,{type:`range`,min:1e4,max:4e4,step:500,value:i,onChange:e=>a(+e.target.value)}),(0,h.jsxs)(`label`,{className:`f-label`,children:[`Monthly attrition — `,(0,h.jsxs)(`b`,{children:[o,`%`]}),` `,(0,h.jsx)(`span`,{children:`(frontline average is 15%)`})]}),(0,h.jsx)(`input`,{type:`range`,min:3,max:30,step:1,value:o,onChange:e=>s(+e.target.value)}),(0,h.jsxs)(`label`,{className:`f-label`,children:[`Training cost per new hire — `,(0,h.jsxs)(`b`,{children:[`₹`,c.toLocaleString(`en-IN`)]})]}),(0,h.jsx)(`input`,{type:`range`,min:3e3,max:4e4,step:500,value:c,onChange:e=>u(+e.target.value)}),(0,h.jsxs)(`p`,{className:`roi-note`,children:[`Annual payroll ≈ `,(0,h.jsx)(`b`,{children:Ye(d)}),` · hires replaced per year ≈ `,(0,h.jsx)(`b`,{children:f.toLocaleString(`en-IN`)})]})]}),(0,h.jsxs)(`div`,{className:`roi-outputs`,children:[(0,h.jsxs)(`div`,{className:`roi-row`,children:[(0,h.jsx)(`div`,{className:`rn`,children:Ye(p)}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h4`,{children:`Payroll leakage recovered`}),(0,h.jsx)(`p`,{children:`Time theft averages 2.2% of gross payroll (Nucleus Research); face-verified attendance recovers ~90% of it — Reliance measured −90%.`})]})]}),(0,h.jsxs)(`div`,{className:`roi-row`,children:[(0,h.jsx)(`div`,{className:`rn`,children:Ye(m)}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h4`,{children:`Training cost, cut`}),(0,h.jsx)(`p`,{children:`60% lower cost per certified worker via AI translation and the ready course library — measured at Reliance across 500K associates.`})]})]}),(0,h.jsxs)(`div`,{className:`roi-row`,children:[(0,h.jsx)(`div`,{className:`rn`,children:Ye(g)}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h4`,{children:`Attrition saving`}),(0,h.jsx)(`p`,{children:`Benefits, upskilling and engagement cut attrition ~15% — every avoided exit cancels a hiring and training cycle.`})]})]}),(0,h.jsxs)(`div`,{className:`roi-total`,children:[(0,h.jsx)(`span`,{children:`Directional annual saving`}),(0,h.jsx)(`b`,{children:Ye(_)})]}),(0,h.jsx)(`a`,{className:`btn-primary big`,href:`mailto:anuj.saxena@betterplace.co.in?subject=${encodeURIComponent(`ROI model${e?.name?` — `+e.name:``}: ${Ye(_)}/yr`)}&body=${encodeURIComponent(`Our inputs: ${n} workers · ₹${i} avg wage · ${o}% monthly attrition · ₹${c} training cost/hire.\nDirectional saving: ${Ye(_)}/year.\n\nLet's validate this on a call.`)}`,children:`Send us these numbers → get the detailed model`})]})]}),(0,h.jsx)(`footer`,{className:`hub-foot`,children:(0,h.jsx)(`span`,{children:`Directional model — not a quote. Anchors: Nucleus Research time-theft study · Reliance Retail deployment (−90% leakage, 60% training cost) · BetterPlace Frontline Index.`})})]})}var Ze={skillbetter:{domain:`Learning & skilling`,headline:`AI that builds the course, teaches it, and proves it worked.`,sub:`Your team sets the brief. The agents draft, translate, tutor, proctor and chase completion — humans approve every stage.`,levers:[{n:`1 afternoon`,title:`Brief → published course`,desc:`AI drafts outline, cards and quiz from your SOP; your L&D approves; translation ships it in 35+ languages the same day.`},{n:`10M+`,title:`Questions answered by AI Theo`,desc:`A tutor trained on your content, cited answers 24×7 — and every question becomes a signal of what to train next.`},{n:`99.2%`,title:`Proctoring accuracy`,desc:`Face detection with a visible strike system — certificates that survive an audit.`},{n:`−38%`,title:`L&D admin time`,desc:`A background agent auto-assigns, reminds, syncs and reports. Your team designs learning instead of chasing it.`}],agents:[{name:`AI Theo`,role:`Learning tutor`,status:`live`},{name:`AI Max`,role:`Sales roleplay coach`,status:`live`},{name:`Content studio`,role:`Course authoring`,status:`beta`},{name:`Translation engine`,role:`35+ languages`,status:`live`}]},"hire-onboard":{domain:`Hiring & onboarding`,headline:`AI that interviews everyone, ranks the fit, and onboards the hire.`,sub:`Every applicant screened the night they apply. Every joiner guided to day-one-ready without an HR chase.`,levers:[{n:`30–50%`,title:`Faster time-to-hire`,desc:`Conversational screening over WhatsApp and voice — LinkedIn/McKinsey benchmark range; our funnels have hit −60%.`},{n:`−40%`,title:`Candidate drop-off`,desc:`24/7 conversational engagement keeps applicants warm from apply to join.`},{n:`45 min`,title:`Rider onboarding`,desc:`AI Mia collects docs, verifies IDs via API, runs safety training and issues the certificate — one WhatsApp thread.`},{n:`₹5/min`,title:`Voice screening cost`,desc:`vs ₹12/min industry — screening calls stop being a call-center line item.`}],agents:[{name:`AI Jack`,role:`Talent screening`,status:`beta`},{name:`AI Mia`,role:`Onboarding`,status:`live`},{name:`AI Ivy`,role:`Structured interviews`,status:`soon`},{name:`Match models`,role:`Fit scoring`,status:`live`}]},verify:{domain:`Verification`,headline:`AI that reads court records, spots fake faces, and never builds a backlog.`,sub:`The checks that used to take interns and weeks run as models and minutes — with a human-reviewable trail on every case.`,levers:[{n:`50K+`,title:`Cases a day`,desc:`NLP scans pan-India court and police records, matching identity variants and surfacing only relevant hits.`},{n:`99.2%`,title:`Face-match accuracy`,desc:`Liveness detection defeats printed photos and screen replays — at enrolment and every re-check.`},{n:`Minutes`,title:`Identity verification`,desc:`Aadhaar, PAN and government-ID validation via API, not paperwork.`},{n:`Minutes`,title:`Rehire re-verification`,desc:`Verified history on the 25M-profile layer means returning workers re-clear instantly.`}],agents:[{name:`AI Cole`,role:`Verification`,status:`beta`},{name:`Court-scan NLP`,role:`Criminal checks`,status:`live`},{name:`Liveness models`,role:`Identity`,status:`live`}]},attendance:{domain:`Attendance & workforce management`,headline:`AI that verifies every punch and predicts tomorrow’s gaps.`,sub:`Computer vision guards the check-in; forecasting sizes the roster; prediction fills the gap before the shift opens.`,levers:[{n:`18–22%`,title:`Scheduling waste cut`,desc:`Demand forecasting from sales, footfall and order signals sizes each site’s roster — MIT Sloan measured the range.`},{n:`15–20%`,title:`Absenteeism reduction`,desc:`Absence prediction flags likely no-shows a day ahead — IBM/Humana-scale deployments prove the lever.`},{n:`0`,title:`Spoofs at Zepto`,desc:`Liveness and face-match models on every punch across 967 sites; suspects route to a review queue, not payroll.`},{n:`Minutes`,title:`Shortfall response`,desc:`AI Zara chases confirmations and flags hubs trending short — replacements move before the gap is real.`}],agents:[{name:`AI Zara`,role:`Roster & no-shows`,status:`beta`},{name:`Spoof detection`,role:`Computer vision`,status:`live`},{name:`Demand forecast`,role:`Roster sizing`,status:`soon`}]},payroll:{domain:`Payroll & compliance`,headline:`AI that reads every challan and screens every pay run.`,sub:`Document AI does the statutory drudgery; anomaly models catch the outlier before it becomes a grievance or a notice.`,levers:[{n:`100%`,title:`Challans OCR-read`,desc:`UANs, amounts and periods extracted from every vendor challan and reconciled worker-by-worker, monthly.`},{n:`−80%`,title:`Vendor non-compliance`,desc:`AI Dev flags short-payments the month they happen — documented due diligence, automatically.`},{n:`Pre-run`,title:`Anomaly detection`,desc:`Each worker’s computed pay checked against history and cohort — outliers reviewed before disbursement.`},{n:`−90%`,title:`Payroll leakage`,desc:`Face-verified attendance in, validated pay out — the Reliance result.`}],agents:[{name:`AI Dev`,role:`Statutory watchdog`,status:`beta`},{name:`Challan OCR`,role:`Document AI`,status:`live`},{name:`Anomaly models`,role:`Pay-run screening`,status:`soon`}]},hris:{domain:`Workforce intelligence`,headline:`AI that answers workforce questions in plain language.`,sub:`One worker record underneath means the copilot answers from truth — headcount, gaps, trends, without a BI queue.`,levers:[{n:`Seconds`,title:`"Which sites trend short next week?"`,desc:`Natural-language questions over the single record, answered with the chart.`},{n:`Enforced`,title:`Data quality, patrolled`,desc:`Gap detection deep-links admins to missing fields before they block payroll or BGV.`},{n:`0`,title:`BI headcount needed`,desc:`Embedded dashboards plus a copilot — analytics without a data-team project.`}],agents:[{name:`Workforce copilot`,role:`NL analytics`,status:`soon`},{name:`Gap banners`,role:`Data quality`,status:`live`}]},staffbetter:{domain:`Managed staffing`,headline:`AI that finds the right worker in a pool of 25 million.`,sub:`Matching models turn requisitions into ranked, verified shortlists — deployment starts in hours, not searches.`,levers:[{n:`24–72 hr`,title:`Deployment`,desc:`Skill, proximity, wage-fit and verified history rank candidates the moment a requisition lands.`},{n:`40%`,title:`Faster time-to-hire`,desc:`The shortlist is ready before an agency would have opened the mandate.`},{n:`−15%`,title:`Attrition on deployments`,desc:`Retention signals steer matches toward workers who stay.`}],agents:[{name:`Match models`,role:`Pool ranking`,status:`live`},{name:`AI Jack`,role:`Screening`,status:`beta`}]},gigbetter:{domain:`On-demand gig`,headline:`AI that deploys 500 verified workers before tomorrow.`,sub:`Real-time matching by skill, proximity and rating — with no-show risk scored and backups pre-assigned.`,levers:[{n:`<24 hr`,title:`Deployment at any scale`,desc:`1 to 500+ workers matched from the rated pool in real time.`},{n:`<4%`,title:`No-show rate`,desc:`Risk models decide who needs a backup pre-assigned — before the day matters.`},{n:`100%`,title:`Verified outcomes`,desc:`GPS check-in and photo proof on every billed task — evidence, not claims.`}],agents:[{name:`Deployment engine`,role:`Matching`,status:`live`},{name:`Risk scoring`,role:`No-show prediction`,status:`beta`}]},incentives:{domain:`Sales incentives`,headline:`AI that builds the scheme, sets fair targets, and catches the gaming.`,sub:`Describe an incentive in a sentence and it becomes a working plan — simulated on last month’s real sales before a rupee is committed.`,levers:[{n:`1 sentence`,title:`Scheme → working plan`,desc:`"2% on watches, ₹500 per smartwatch, Diwali bonus, cap ₹40K" — the copilot builds it, you review and launch.`},{n:`Fair`,title:`Targets set per person`,desc:`Targets based on what each seller actually sells — reachable, not demoralising.`},{n:`Pre-launch`,title:`Cost simulated on real sales`,desc:`Run any scheme against last month’s data — see total cost and every payout before committing.`},{n:`Caught`,title:`Gaming & mistakes flagged`,desc:`Split bills, month-end spikes and returns-after-payday spotted before they cost you.`}],agents:[{name:`Plan copilot`,role:`Scheme authoring`,status:`beta`},{name:`File mapper`,role:`Messy CSV → clean data`,status:`live`},{name:`Gaming detector`,role:`Anomaly flags`,status:`beta`}]},"sales-story":{domain:`Sales teams`,headline:`AI working every seat of your revenue team.`,sub:`Screening calls, roleplay coaching, mid-pitch answers, incentive copilots — the selling lifecycle runs on AI Labs agents.`,levers:[{n:`30–50%`,title:`Faster seller hiring`,desc:`AI voice calls screen every applicant in their language the day they apply.`},{n:`30,000`,title:`Reps coached by AI Max`,desc:`Live roleplays scored on tone, empathy and accuracy — running today at IFFCO Tokio.`},{n:`4 sec`,title:`Mid-pitch answers`,desc:`AI Theo answers spec and policy questions from your documents while the customer is still there.`},{n:`1 sentence`,title:`Incentive schemes built by AI`,desc:`The plan copilot turns a description into a simulated, launch-ready scheme.`}],agents:[{name:`AI Max`,role:`Sales coach`,status:`live`},{name:`AI Jack`,role:`Screening`,status:`beta`},{name:`AI Theo`,role:`Product tutor`,status:`live`},{name:`Plan copilot`,role:`Incentives`,status:`beta`}]},"mfg-story":{domain:`Manufacturing plants`,headline:`AI working every gate, shift and safety induction.`,sub:`Verification, safety induction, statutory watch and technical tutoring run as AI Labs agents across the contract-labour lifecycle.`,levers:[{n:`Pre-gate`,title:`Safety induction, deterministic`,desc:`AI Rhea runs SOP + video + quiz before a gate pass activates — no un-inducted worker enters.`},{n:`Monthly`,title:`Statutory watchdog`,desc:`AI Dev reads every vendor challan by OCR and flags short-payments, licence breaches and WC expiries.`},{n:`4 sec`,title:`Machine & SOP answers`,desc:`AI Theo answers technical and safety questions from your manuals, in the operator’s language.`},{n:`<24 hr`,title:`Contractor verification`,desc:`AI Cole face-matches and API-checks every vendor worker before they reach the gate.`}],agents:[{name:`AI Rhea`,role:`Safety induction`,status:`live`},{name:`AI Dev`,role:`Statutory watch`,status:`beta`},{name:`AI Theo`,role:`Technical tutor`,status:`live`},{name:`AI Cole`,role:`Verification`,status:`beta`}]},group:{domain:`The whole lifecycle`,headline:`One AI runtime working every stage of your frontline.`,sub:`Hire, verify, onboard, roster, pay, train — each stage runs an AI Labs agent on the same governed runtime, feeding one worker record.`,levers:[{n:`−70%`,title:`Time-to-hire`,desc:`Screening and scheduling agents work the funnel overnight.`},{n:`3×`,title:`Faster upskilling`,desc:`Authoring, translation and tutoring agents on your content.`},{n:`₹0.37`,title:`Per interaction`,desc:`Ops that used to be salaried hours become metered credits.`},{n:`1`,title:`Runtime to govern`,desc:`Deterministic flows, PII guardrails, token logs — one meter, one audit surface.`}],agents:[{name:`AI Mia`,role:`Onboarding`,status:`live`},{name:`AI Max`,role:`Sales coach`,status:`live`},{name:`AI Theo`,role:`Tutor`,status:`live`},{name:`AI Jack`,role:`Screening`,status:`beta`},{name:`AI Cole`,role:`Verification`,status:`beta`},{name:`AI Dev`,role:`Compliance`,status:`beta`}]}};function Qe(e){return Ze[e]?Ze[e]:(e===`gobetter`||e.startsWith(`ind-`),Ze.group)}function $e(e){e.querySelectorAll(`[data-t]`).forEach(e=>{if(e.dataset.done===`1`)return;e.dataset.done=`1`;let t=Number(e.dataset.t);if(!Number.isFinite(t))return;let n=0,r=Math.max(1,Math.round(t/26)),i=window.setInterval(()=>{n+=r,n>=t&&(n=t,window.clearInterval(i)),e.textContent=n.toLocaleString(`en-US`)},28)})}function et({deck:e,client:t,initialSlide:n=0,shareMode:r=!1,onExit:i}){let[a,o]=(0,l.useState)(Math.min(Math.max(n,0),e.slides.length-1)),[s,c]=(0,l.useState)(!1),[u,d]=(0,l.useState)(!1),f=(0,l.useRef)(null),p=(0,l.useRef)(0);p.current=a;let m=e.slides.length,g=e=>{e<0||e>=m||o(e)};(0,l.useEffect)(()=>{let e=e=>{(e.key===`ArrowRight`||e.key===` `||e.key===`PageDown`)&&g(p.current+1),(e.key===`ArrowLeft`||e.key===`PageUp`)&&g(p.current-1),e.key===`Home`&&g(0),e.key===`End`&&g(m-1),e.key===`Escape`&&i()},t=0,n=e=>{t=e.touches[0].clientX},r=e=>{let n=e.changedTouches[0].clientX-t;Math.abs(n)>60&&g(n<0?p.current+1:p.current-1)};return document.addEventListener(`keydown`,e),document.addEventListener(`touchstart`,n,{passive:!0}),document.addEventListener(`touchend`,r,{passive:!0}),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`touchstart`,n),document.removeEventListener(`touchend`,r)}},[m]),(0,l.useEffect)(()=>{let e=f.current;if(!e)return;let t=e.children[a],n,r=[];if(t){t.scrollTop=0,$e(t),t.querySelectorAll(`video`).forEach(e=>{e.play().catch(()=>{})});let e=t.querySelector(`#builder`);if(e){let t=e.querySelectorAll(`.bstage`),r=e.querySelectorAll(`.bstep`),i=e.querySelectorAll(`.bcrumb`),a=0,o=()=>{t.forEach((e,t)=>e.classList.toggle(`show`,t===a)),r.forEach((e,t)=>{e.classList.remove(`on`,`done`),t<a&&e.classList.add(`done`),t===a&&e.classList.add(`on`)}),i.forEach((e,t)=>e.classList.toggle(`on`,t<a))};o(),n=window.setInterval(()=>{a=(a+1)%t.length,o()},2400)}t.querySelectorAll(`[data-cycle]`).forEach(e=>{let t=e.querySelectorAll(`.cyc`),n=e.querySelectorAll(`.cycpane`),i=Math.max(t.length,n.length);if(!i)return;let a=0,o=()=>{t.forEach((e,t)=>{e.classList.toggle(`on`,t===a),e.classList.toggle(`done`,t<a)}),n.forEach((e,t)=>e.classList.toggle(`on`,t===a))};o(),r.push(window.setInterval(()=>{a=(a+1)%i,o()},Number(e.dataset.cycle)||2600))})}return()=>{n&&window.clearInterval(n),r.forEach(e=>window.clearInterval(e))}},[a]),(0,l.useEffect)(()=>{let e=e=>{let t=e.target?.closest?.(`.cap, .case, .ctac, .tier, .ag, .mstat, .icard, .fi, .rstage, .pmrow, .lrow, .quote`);if(!t)return;let n=t.getBoundingClientRect();t.style.setProperty(`--mx`,`${(e.clientX-n.left)/n.width*100}%`),t.style.setProperty(`--my`,`${(e.clientY-n.top)/n.height*100}%`)};return document.addEventListener(`pointermove`,e,{passive:!0}),()=>document.removeEventListener(`pointermove`,e)},[]);let _=e.slides[a].theme!==`light`,v=t?.color||`#FFC401`;return(0,h.jsxs)(`div`,{className:`player${s?` ai-mode`:``}`,style:{"--client":v,...Ge(t?.color)},children:[(0,h.jsx)(`div`,{className:`deck`,ref:f,children:e.slides.map((e,t)=>(0,h.jsx)(`section`,{className:`slide ${e.theme}${t===a?` active`:``}`,id:e.id,dangerouslySetInnerHTML:{__html:e.html}},e.id))}),(0,h.jsxs)(`div`,{className:`brandstrip topstrip ${_?`on-dark`:`on-light`}`,children:[(0,h.jsxs)(`div`,{className:`marks`,children:[(0,h.jsx)(`img`,{className:`bp`,src:_?`assets/logo/bp-white.png`:`assets/logo/bp-blue.png`,alt:`BetterPlace`}),t&&(t.logo||t.name)&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`span`,{className:`x`,children:`✕`}),t.logo?(0,h.jsx)(`img`,{className:`clogo`,src:t.logo,alt:t.name||`Client`}):(0,h.jsx)(`span`,{className:`cname`,style:{borderColor:v},children:t.name})]})]}),(0,h.jsxs)(`span`,{className:`conf`,children:[t?.name?`Prepared for ${t.name} · `:``,`Confidential · `,String(a+1).padStart(2,`0`)]})]}),(0,h.jsxs)(`div`,{className:`nav`,children:[(0,h.jsx)(`button`,{className:`arrow`,"aria-label":`Menu`,title:`Back to menu (Esc)`,onClick:i,children:(0,h.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:[(0,h.jsx)(`rect`,{x:`3`,y:`3`,width:`7`,height:`7`,rx:`1`}),(0,h.jsx)(`rect`,{x:`14`,y:`3`,width:`7`,height:`7`,rx:`1`}),(0,h.jsx)(`rect`,{x:`3`,y:`14`,width:`7`,height:`7`,rx:`1`}),(0,h.jsx)(`rect`,{x:`14`,y:`14`,width:`7`,height:`7`,rx:`1`})]})}),(0,h.jsx)(`button`,{className:`arrow`,"aria-label":`Previous`,onClick:()=>g(a-1),children:(0,h.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,h.jsx)(`path`,{d:`M15 18l-6-6 6-6`})})}),(0,h.jsx)(`div`,{className:`dots`,children:e.slides.map((e,t)=>(0,h.jsx)(`div`,{className:`nd${t===a?` on`:``}`,title:e.title,onClick:()=>g(t)},e.id))}),(0,h.jsxs)(`span`,{className:`pageno`,children:[String(a+1).padStart(2,`0`),` / `,String(m).padStart(2,`0`)]}),(0,h.jsx)(`button`,{className:`arrow`,"aria-label":`Next`,onClick:()=>g(a+1),children:(0,h.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,h.jsx)(`path`,{d:`M9 6l6 6-6 6`})})}),(0,h.jsxs)(`button`,{className:`ai-toggle${s?` on`:``}`,title:`Show how AI Labs powers each capability`,onClick:()=>c(!s),children:[(0,h.jsx)(`span`,{className:`d`}),`✦ AI`]}),s&&(0,h.jsx)(`button`,{className:`ai-toggle`,title:`The full AI picture for this area`,onClick:()=>d(!0),children:`What AI does here →`}),(0,h.jsx)(`button`,{className:`arrow`,"aria-label":`Download PDF`,title:`Download as PDF (print)`,onClick:()=>window.print(),children:(0,h.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,children:[(0,h.jsx)(`path`,{d:`M12 3v12M7 10l5 5 5-5`}),(0,h.jsx)(`path`,{d:`M4 21h16`})]})}),a===m-1&&e.next&&(0,h.jsxs)(`button`,{className:`nextdeck`,onClick:()=>{window.location.hash=`/deck/${e.next}`},children:[`Next: `,e.next.replace(/-/g,` `),` →`]})]}),u&&(()=>{let n=Qe(e.id);return(0,h.jsx)(`div`,{className:`ai-overlay`,onClick:e=>{e.target===e.currentTarget&&d(!1)},children:(0,h.jsxs)(`div`,{className:`ai-poster`,children:[(0,h.jsx)(`button`,{className:`ai-close`,onClick:()=>d(!1),children:`✕ Close`}),(0,h.jsxs)(`span`,{className:`ai-kicker`,children:[`✦ AI Labs × `,n.domain,t?.name?` · for ${t.name}`:``]}),(0,h.jsx)(`h1`,{children:n.headline}),(0,h.jsx)(`p`,{className:`ai-sub`,children:n.sub}),(0,h.jsx)(`div`,{className:`ai-levers`,children:n.levers.map(e=>(0,h.jsxs)(`div`,{className:`ai-lever`,children:[(0,h.jsx)(`div`,{className:`ln`,children:e.n}),(0,h.jsx)(`h4`,{children:e.title}),(0,h.jsx)(`p`,{children:e.desc})]},e.title))}),(0,h.jsxs)(`div`,{className:`ai-roster`,children:[(0,h.jsx)(`span`,{className:`ai-roster-label`,children:`The agents on this job`}),n.agents.map(e=>(0,h.jsxs)(`span`,{className:`ai-chip ${e.status}`,children:[(0,h.jsx)(`i`,{}),e.name,` `,(0,h.jsxs)(`em`,{children:[`· `,e.role]})]},e.name))]}),(0,h.jsxs)(`div`,{className:`ai-rail`,children:[(0,h.jsxs)(`span`,{children:[(0,h.jsx)(`b`,{children:`1`}),` AI does the heavy lifting`]}),(0,h.jsx)(`i`,{children:`→`}),(0,h.jsxs)(`span`,{children:[(0,h.jsx)(`b`,{children:`2`}),` Your team reviews`]}),(0,h.jsx)(`i`,{children:`→`}),(0,h.jsxs)(`span`,{children:[(0,h.jsx)(`b`,{children:`3`}),` Deterministic where it must be`]}),(0,h.jsx)(`i`,{children:`→`}),(0,h.jsxs)(`span`,{children:[(0,h.jsx)(`b`,{children:`4`}),` Every action on the audit log`]})]}),(0,h.jsxs)(`div`,{className:`ai-poster-foot`,children:[(0,h.jsx)(`span`,{children:`Private LLMs · data stays in India · ISO 27001 · SOC 2 · credits from ₹0.37/interaction`}),(0,h.jsxs)(`div`,{className:`ai-poster-ctas`,children:[e.id!==`ai-labs`&&(0,h.jsx)(`button`,{className:`btn-primary`,onClick:()=>{window.location.hash=`/deck/ai-labs`},children:`Open the AI Labs deck →`}),(0,h.jsx)(`a`,{className:`btn-ghost`,href:`mailto:anuj.saxena@betterplace.co.in?subject=${encodeURIComponent(`AI in ${n.domain}${t?.name?` — `+t.name:``}`)}`,children:`Talk AI with us`})]})]})]})})})(),r&&(0,h.jsx)(`a`,{className:`demo-cta`,href:`mailto:anuj.saxena@betterplace.co.in?subject=${encodeURIComponent(`Demo request${t?.name?` — `+t.name:``} (via BetterPlace deck)`)}&body=Hi%20%E2%80%94%20we%20went%20through%20the%20BetterPlace%20deck%20and%20would%20like%20a%2030-minute%20demo.%20Areas%20of%20interest%3A%20`,children:`Book a 30-min demo →`})]})}var tt=Ve();function nt(){let e=window.location.hash.replace(/^#\/?/,``);if(!e)return{route:`root`};let[t,n]=e.split(`?`),r=t.split(`/`).filter(Boolean);if(r[0]===`setup`)return{route:`setup`};if(r[0]===`hub`)return{route:`hub`};if(r[0]===`roi`)return{route:`roi`};if(r[0]===`deck`&&r[1]){let e=new URLSearchParams(n||``),t=e.get(`mods`)?.split(`,`).filter(Boolean),i=Number(e.get(`s`))||0;return{route:`deck`,id:r[1],mods:t,slide:i}}return{route:`root`}}function rt(){let[e,t]=(0,l.useState)(nt()),[,n]=(0,l.useState)(0);(0,l.useEffect)(()=>{let e=()=>t(nt());return window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)},[]);let r=tt.active?tt.client:f(),i=e=>{window.location.hash=e};if(!tt.active&&e.route===`setup`)return(0,h.jsx)(v,{initial:r,onDone:()=>{n(e=>e+1),i(`/hub`)}});if(e.route===`roi`)return(0,h.jsx)(Xe,{client:r,onBack:()=>i(`/hub`)});if(e.route===`deck`&&e.id){let t=e.id===`custom`&&e.mods?.length?Be(e.mods):Le(e.id);if(t)return(0,h.jsx)(et,{deck:t,client:r,initialSlide:e.slide??0,shareMode:tt.active,onExit:()=>i(`/hub`)},window.location.hash)}return(0,h.jsx)(Je,{client:r,shareMode:tt.active,onOpen:(e,t)=>i(t?.length?`/deck/custom?mods=${t.join(`,`)}`:`/deck/${e}`),onEditClient:()=>i(`/setup`)})}(0,u.createRoot)(document.getElementById(`root`)).render((0,h.jsx)(rt,{}));